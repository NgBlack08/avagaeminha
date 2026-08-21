#!/usr/bin/env node
/*
 * validar.js — trava de qualidade do banco de questões.
 *
 * Auditando o banco em 28/07/2026, a integridade estava impecável: 999
 * questões, zero IDs repetidos, zero enunciados duplicados, zero campos
 * faltando. Mas isso era mantido inteiramente à mão — nada impedia um lote
 * novo de entrar com gabarito inválido ou "cognitivo" incompleto, e o erro
 * só apareceria em produção, na frente do aluno.
 *
 * Este script separa duas coisas:
 *
 *   ERROS   quebram o build. São defeitos objetivos: campo faltando,
 *           gabarito fora de {C,E}, ID repetido, padrão inexistente.
 *
 *   AVISOS  não quebram nada. São sinais estatísticos sobre o quanto o
 *           banco imita a banca de verdade — o tipo de coisa que se
 *           degrada em silêncio, lote a lote, e que ninguém percebe
 *           olhando uma questão por vez.
 *
 * Uso:
 *   node scripts/validar.js          # relatório completo
 *   node scripts/validar.js --quieto # só erros (usado pelo versionar.js)
 */

const { sincronizarManifesto, carregarDados } = require("./fontes.js");

/* ---------- contrato de uma questão ---------- */

const CAMPOS_OBRIGATORIOS = [
  "id", "concurso", "cargo", "disciplina", "assunto", "dificuldade",
  "gabarito", "enunciado", "pegadinha", "tempoIdealSeg", "probReaparecer",
];
const CAMPOS_COMENTARIO = ["resolucao", "fundamento", "macete", "erroComum", "comoBancaPensa"];
/* `cognitivo` foi reduzido a dois campos quando o bloco "Engenharia
   cognitiva" cedeu lugar às Estratégias da banca: os outros cinco
   parafraseavam `comentario` (mede≈fundamento, ondeErra≈erroComum,
   regraMental≈macete, pegadinhaDesc≈comoBancaPensa) ou eram cobertos, de
   forma mais rica, pela estratégia casada por `pegadinha` (tecnica).
   Sobraram os dois que só a própria questão pode dizer. */
const CAMPOS_COGNITIVO = ["motivo", "palavraCritica"];

/* Um enunciado que remete a um parágrafo específico ou ao "texto" como
   objeto externo ("no segundo parágrafo...", "predomina no texto...")
   pressupõe uma passagem anexada em `textoApoio` para o candidato
   analisar o contexto e julgar a oração. Sem ela, a questão é
   irrespondível — e passa despercebida porque `textoApoio` é campo
   opcional no schema, não pego pelos CAMPOS_OBRIGATORIOS.

   Achado real: 12 itens do lote 29 (Língua Portuguesa) tinham o texto
   escrito no fonte sob o nome de campo errado (`textoBase` em vez de
   `textoApoio`) — o texto existia, mas o app nunca o renderizava. Só a
   referência explícita a "segundo parágrafo" etc. expôs o problema.

   Restrito a citação de PARÁGRAFO ORDINAL ou a "o texto" como objeto
   bruto (não citação entre aspas, que já traz o trecho necessário junto
   ao enunciado — self-contained). Testado contra as 1141 questões do
   banco: zero falsos positivos com essas duas formas. */
/* "no texto" exige a exceção abaixo: em Direito, "no texto constitucional"
   e "no texto legal" designam a norma, não uma passagem anexada. Sem o
   lookahead o validador reprovava DP-209 ("vedação que não comporta
   exceção no texto constitucional"), que é item autossuficiente. A
   exceção é estreita de propósito — cobre só os qualificadores que
   transformam "texto" em referência normativa. */
const PADRAO_EXIGE_TEXTO_APOIO =
  /\b(primeiro|segundo|terceiro|quarto|quinto|último|penúltimo)\s+par[aá]grafo\b|\b(no|do|ao)\s+texto\b(?!\s+(constitucional|legal|normativo|da lei|da norma))|predomina no texto|período final do texto|início do texto|ao longo do texto/i;

/* Limiares dos avisos. Não são leis da natureza — são o ponto em que um
   desequilíbrio deixa de ser ruído e passa a ensinar o reflexo errado. */
const LIMIAR_PADRAO_ENVIESADO = 0.90; /* padrão que quase sempre cai no mesmo gabarito */
const LIMIAR_CE_GLOBAL = 0.05;        /* desvio tolerado em torno de 50/50 */
const LIMIAR_VIES_TAMANHO = 0.12;     /* diferença de comprimento entre C e E */
/* Quanto uma "regra cega" pode acertar acima do puro chute antes de virar
   problema.

   O limiar deixou de ser arbitrário: em 372 itens de provas REAIS da
   CEBRASPE com gabarito oficial (PC-DF 2021 Agente, PC-SE 2021 Agente de
   Polícia Judiciária, PF 2025 Agente de Polícia Federal e PF 2025
   Administrador), o mesmo chutador cego rende -1,1pp no total e -0,8pp
   contando só as carreiras policiais. Ou seja: na prova real a forma não
   entrega nada. Ver AUDITORIA-PROVA-REAL-2021.md.

   Logo, qualquer ganho aqui é artefato NOSSO, e artefato que o candidato
   treina como se fosse técnica. Os 3pp de tolerância existem só para
   absorver ruído amostral, não para acomodar vazamento. */
/* Reconfirmado em agosto/2026 sobre 292 itens policiais NOVOS, casados um
   a um com o gabarito oficial: o chutador cego rende +1,7pp, contra uma
   mediana de 2,1pp sob gabarito embaralhado (20 mil permutações, p=0,64).
   Ou seja, abaixo do acaso — o sinal continua inexistente na prova real.
   O valor negativo abaixo é o ponto estimado de 2021; o que ele codifica,
   e que as duas medições sustentam, é "não há vazamento a explorar". */
const REGRA_CEGA_REFERENCIA_REAL = -0.011;
const LIMIAR_REGRA_CEGA = 0.03;

/* Perfil de comprimento da prova real — REVISADO EM AGOSTO/2026.

   O perfil anterior vinha de UM caderno (PC-AL 2021, Agente, 120 itens) e
   dizia que só 7,5% dos itens da banca passavam de 300 caracteres. Cinco
   cadernos policiais, casados um a um com seu gabarito oficial, desmentem
   isso com folga:

     prova                        1-120   121-200  201-300   >300
     PF 2014 Agente (110 itens)   11,8%    38,2%    33,6%   16,4%
     PC-SE Agente Jud. (72)       13,9%    37,5%    22,2%   26,4%
     PC-SE Escrivão (80)          21,3%    37,5%    21,3%   20,0%
     agregado policial (292)      14,7%    38,7%    27,4%   19,2%
     ALVO ANTIGO                  24,2%    45,0%    23,3%    7,5%

   A faixa longa é 2,5 a 3,5 vezes maior que o alvo antigo, em três provas
   independentes. Não é ruído de extração: nas duas provas do PC-SE
   nenhum item terminou sem pontuação final, que é o sinal de linha
   truncada ou fundida — a extração ali está íntegra.

   O alvo passa a ser o agregado dos 292 itens policiais. Consequência
   direta: parte do "excesso de itens longos" que o validador vinha
   acusando no banco era o alvo que estava errado, não o banco.

   Segue valendo o achado original de que escrevemos poucos itens CURTOS:
   14,7% é o alvo, e é ali que a CEBRASPE concentra a afirmação categórica
   seca. Ver AUDITORIA-PROVA-REAL-2021.md, revisão de 2026. */
const PERFIL_REAL_2021 = [
  { ate: 120, alvo: 0.147 },
  { ate: 200, alvo: 0.387 },
  { ate: 300, alvo: 0.274 },
  { ate: Infinity, alvo: 0.192 },
];
const LIMIAR_DESVIO_PERFIL = 0.12; /* 12pp de diferença em qualquer faixa */
const MIN_ITENS_PARA_AVALIAR = 15;    /* abaixo disso, a amostra não diz nada */

/* Resolução que só devolve o enunciado.

   Comprimento NÃO serve de medida aqui — foi a primeira hipótese e o banco
   a desmentiu: as resoluções mais curtas são de RLM e estão completas
   ("Total de bolas: 10. Azuis ou verdes: 3+2=5. Probabilidade: 5/10 = 1/2"
   não precisa de mais nada). Outras três heurísticas testadas (item ERRADO
   sem apontar o correto, ausência de nexo causal, ausência de âncora
   isolada) marcavam resoluções boas cuja formulação o regex não previa.

   O que sobrevive é o cruzamento: alta repetição lexical do enunciado E
   nenhum elemento verificável acrescentado. Repetir é legítimo quando vem
   com a fonte — "ecoa o enunciado, mas cita Lei 14.735/2023, art. 10, §3º"
   ensina onde conferir. Sem isso, o candidato lê duas vezes a mesma frase.

   Aviso, não erro: a fronteira é de redação, não de contrato de dados. */
const LIMIAR_ECO_ENUNCIADO = 0.85;
const ANCORA_VERIFICAVEL =
  /art\.|artigo|s[uú]mula|inciso|§|lei \d|decreto|CF\b|CP\b|CPP\b|tema \d|RE \d|HC \d|porque|pois\b|uma vez que|ou seja|isto [eé]|na verdade|e n[aã]o\b|o correto/i;

function palavrasLongas(texto) {
  return String(texto).toLowerCase().normalize("NFD")
    .replace(/[̀-ͯ]/g, "").match(/[a-z]{5,}/g) || [];
}
function taxaDeEco(q) {
  const doEnunciado = new Set(palavrasLongas(q.enunciado));
  const daResolucao = palavrasLongas(q.comentario && q.comentario.resolucao);
  if (daResolucao.length < 8) return 0; /* curta demais para medir eco */
  return daResolucao.filter(p => doEnunciado.has(p)).length / daResolucao.length;
}

function normalizar(texto) {
  return String(texto)
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}

function validar({ quieto = false } = {}) {
  const manifesto = sincronizarManifesto({ gravar: false });
  const {
    QUESTOES, DNA_BANCA, EDITAIS, ESTRATEGIAS, DISCIPLINAS_JURIDICAS,
    PONTOS_RUPTURA, RUPTURA_POR_PEGADINHA, CHECKLIST_RESOLUCAO, VIGENCIA_STATUS,
    LIMIARES_ATENCAO, INCIDENCIA_PCAL2021, FREQUENCIA_TEMAS, PREDICOES,
    CONCURSOS, CONCURSO_POR_SIGLA,
  } = carregarDados(manifesto);

  const erros = [];
  const avisos = [];
  const pct = (a, b) => (100 * a / b).toFixed(1) + "%";

  /* ================= ERROS ================= */

  const slugsValidos = new Set(DNA_BANCA.map(d => d.slug));
  const codsRuptura = new Set(PONTOS_RUPTURA.map(r => r.cod));

  /* O DNA já teve um campo `incidencia` de 0 a 100 que a tela desenhava
     como barra com "%" — número editorial exibido como estatística, e em
     conflito direto com a medição real (82% contra 11,0% de ocorrência
     para termos absolutos). Virou faixa qualitativa. Este bloco impede
     que a porcentagem volte por descuido em algum lote futuro. */
  for (const d of DNA_BANCA) {
    if ("incidencia" in d) {
      erros.push(`DNA_BANCA ${d.slug}: campo "incidencia" foi removido do modelo — use "atencao" (alta/media/baixa). Porcentagem não medida não volta para a tela.`);
    }
    if (!["alta", "media", "baixa"].includes(d.atencao)) {
      erros.push(`DNA_BANCA ${d.slug}: atencao "${d.atencao}" inválida (esperado alta, media ou baixa)`);
    }
  }

  /* A faixa de `atencao` deixou de ser opinião: ela é DERIVADA da
     frequência de cada padrão nos itens de PROVA REAL do acervo. Este
     bloco refaz a conta e quebra o build se o arquivo divergir.

     Sem ele, a faixa voltaria a andar sozinha — foi exatamente o que
     aconteceu na versão anterior, em que `termo-absoluto` figurava em
     "alta" e `literalidade` em "media", quando a medição em prova real
     diz o contrário com folga.

     A mesma regra de escopo do motor: conta itens reais de TODAS as
     disciplinas, porque a pergunta é sobre a banca, não sobre a trilha. */
  /* ---- Procedência dos itens de prova real ----

     Os lotes reais herdam `concurso`/`ano` de um objeto BASE por arquivo,
     e esse BASE foi copiado dos lotes inéditos: 131 itens diziam ser da
     PC-AL de 2026 enquanto o `origem` dizia PC-DF 2021, PF 2025 ou PC-PE
     2024. Como `concurso` alimenta o filtro de procedência do Banco,
     filtrar por "Polícia Federal" não devolvia nenhum dos itens da PF.

     Agora os dois campos são DERIVADOS de `origem` em
     js/data-incidencia-real.js. Este bloco confere a derivação: sigla
     desconhecida no `origem` quebra o build em vez de deixar o item cair
     em silêncio no concurso errado. */
  {
    const idsConcurso = new Set(CONCURSOS.map(c => c.id));
    for (const q of QUESTOES) {
      const m = /^CEBRASPE\s+(PC-[A-Z]{2}|PF|PRF)\s+(\d{4})/.exec(q.origem || "");
      if (!m) continue;
      const esperado = CONCURSO_POR_SIGLA[m[1]];
      if (!esperado) {
        erros.push(`${q.id}: origem cita "${m[1]}", sigla ausente de CONCURSO_POR_SIGLA — o item cairia no concurso herdado do lote.`);
        continue;
      }
      if (!idsConcurso.has(esperado)) {
        erros.push(`${q.id}: CONCURSO_POR_SIGLA mapeia "${m[1]}" para "${esperado}", que não existe em CONCURSOS.`);
      }
      if (q.concurso !== esperado) {
        erros.push(`${q.id}: origem diz ${m[1]} mas concurso é "${q.concurso}" (esperado "${esperado}").`);
      }
      if (q.ano !== Number(m[2])) {
        erros.push(`${q.id}: origem diz ${m[2]} mas ano é ${q.ano}.`);
      }
    }
  }

  {
    const reais = QUESTOES.filter(q => /CEBRASPE\s+(PC|PF|PRF)/i.test(q.origem || ""));
    if (reais.length < 50) {
      erros.push(`Itens de prova real caíram para ${reais.length} — abaixo de 50 a faixa de atenção do DNA perde base. Verifique o campo "origem" dos lotes de provas reais.`);
    }
    const faixaEsperada = p =>
      p >= LIMIARES_ATENCAO.alta ? "alta" : p >= LIMIARES_ATENCAO.media ? "media" : "baixa";

    for (const d of DNA_BANCA) {
      const n = reais.filter(q => q.pegadinha === d.slug).length;
      const p = 100 * n / reais.length;
      const esperada = faixaEsperada(p);
      if (d.atencao !== esperada) {
        erros.push(
          `DNA_BANCA ${d.slug}: atencao "${d.atencao}" não bate com a medição — ` +
          `${n} de ${reais.length} itens reais (${p.toFixed(1)}%) dão faixa "${esperada}". ` +
          `A faixa é derivada, não escolhida: ajuste o valor ou os limiares em LIMIARES_ATENCAO.`);
      }
      /* Padrão sem nenhuma ocorrência em prova real precisa dizê-lo. A
         tela apaga o card e escreve "não observado"; sem a marca, ele
         apareceria como um mecanismo da banca como os outros. */
      if (n === 0 && !d.naoObservado) {
        erros.push(`DNA_BANCA ${d.slug}: zero ocorrências em ${reais.length} itens de prova real — marque "naoObservado: true" ou remova o padrão.`);
      }
      if (n > 0 && d.naoObservado) {
        erros.push(`DNA_BANCA ${d.slug}: marcado "naoObservado" mas tem ${n} ocorrência(s) em prova real — remova a marca.`);
      }
    }
  }

  /* ---- Incidência medida × tabelas que a consomem ----

     `FREQUENCIA_TEMAS` e `PREDICOES` deixaram de carregar `freq`/`score`
     escritos à mão e passaram a carregar contagem de itens do caderno
     PC/AL 2021. Como a contagem está declarada em dois lugares (a tabela
     de origem e as tabelas de consumo), elas podem divergir em silêncio —
     e é justamente esse tipo de divergência silenciosa que produz número
     inventado sem ninguém perceber. Aqui elas são conferidas uma contra a
     outra, item a item. */
  {
    const somaDisc = INCIDENCIA_PCAL2021.disciplinas.reduce((s, d) => s + d.itens, 0);
    if (somaDisc !== INCIDENCIA_PCAL2021.totalItens) {
      erros.push(`INCIDENCIA_PCAL2021: disciplinas somam ${somaDisc} itens, mas totalItens declara ${INCIDENCIA_PCAL2021.totalItens}.`);
    }
    for (const d of INCIDENCIA_PCAL2021.disciplinas) {
      const somaTemas = d.temas.reduce((s, t) => s + t.itens, 0);
      if (somaTemas !== d.itens) {
        erros.push(`INCIDENCIA_PCAL2021 ${d.disciplina}: temas somam ${somaTemas}, disciplina declara ${d.itens}.`);
      }
    }

    /* A conferência que dá confiança na captura: os blocos têm de bater
       com a estrutura histórica registrada por caminho independente (o
       Relatório Consolidado do usuário). Se a extração do caderno tivesse
       perdido ou duplicado item, algum bloco não fecharia. */
    const hist = EDITAIS.PCAL.estruturaHistorica2021;
    const somaHist = Object.values(hist.basicos).reduce((a, b) => a + b, 0) +
                     Object.values(hist.especificos).reduce((a, b) => a + b, 0);
    if (somaHist !== INCIDENCIA_PCAL2021.totalItens) {
      erros.push(`estruturaHistorica2021 soma ${somaHist} itens e INCIDENCIA_PCAL2021 soma ${INCIDENCIA_PCAL2021.totalItens} — as duas leituras da mesma prova divergiram.`);
    }
    for (const [disc, n] of Object.entries({ ...hist.basicos, ...hist.especificos })) {
      /* Os dois nomes divergem só em "Processo Penal e legislação
         correlata", que é como o edital de 2021 chamava o bloco. */
      const alvo = disc.startsWith("Processo Penal") ? "Processo Penal" : disc;
      const medida = INCIDENCIA_PCAL2021.disciplinas.find(d => d.disciplina === alvo);
      if (!medida) { erros.push(`estruturaHistorica2021 tem "${disc}" sem correspondente em INCIDENCIA_PCAL2021.`); continue; }
      if (medida.itens !== n) {
        erros.push(`${disc}: estruturaHistorica2021 diz ${n} itens, INCIDENCIA_PCAL2021 conta ${medida.itens}.`);
      }
    }

    /* FREQUENCIA_TEMAS: ou é medida e bate com a contagem, ou é estreia
       e não tem número nenhum. Terceira via não existe — era ela que
       trazia os "freq: 95". */
    const porNome2026 = new Map(INCIDENCIA_PCAL2021.disciplinas.map(d => [d.nome2026, d]));
    const estreiam = new Set(INCIDENCIA_PCAL2021.estreiam2026.map(e => e.disciplina));
    for (const f of FREQUENCIA_TEMAS) {
      if (f.estreia) {
        if (!estreiam.has(f.disciplina)) {
          erros.push(`FREQUENCIA_TEMAS ${f.disciplina}: marcada "estreia" mas não consta de INCIDENCIA_PCAL2021.estreiam2026.`);
        }
        for (const t of f.temas) {
          if (t.itens != null || t.freq != null) {
            erros.push(`FREQUENCIA_TEMAS ${f.disciplina} / "${t.tema}": disciplina de estreia não pode ter número de incidência — não há prova anterior para medir.`);
          }
        }
        continue;
      }
      const medida = porNome2026.get(f.disciplina);
      if (!medida) continue;   /* trilha SESAU, que tem outro modelo */
      if (f.itens2021 !== medida.itens) {
        erros.push(`FREQUENCIA_TEMAS ${f.disciplina}: itens2021 = ${f.itens2021}, mas a contagem do caderno dá ${medida.itens}.`);
      }
      for (const t of f.temas) {
        const orig = medida.temas.find(x => x.tema === t.tema);
        if (!orig) { erros.push(`FREQUENCIA_TEMAS ${f.disciplina}: tema "${t.tema}" não existe em INCIDENCIA_PCAL2021.`); continue; }
        if (orig.itens !== t.itens) {
          erros.push(`FREQUENCIA_TEMAS ${f.disciplina} / "${t.tema}": ${t.itens} itens contra ${orig.itens} na contagem do caderno.`);
        }
        if (orig.onde !== t.onde) {
          erros.push(`FREQUENCIA_TEMAS ${f.disciplina} / "${t.tema}": localização "${t.onde}" diverge de "${orig.onde}" na contagem do caderno.`);
        }
      }
    }

    /* PREDICOES da trilha PC-AL: `score` percentual não volta. Ou o tema
       tem contagem em prova real, ou é declarado de estreia. */
    for (const p of PREDICOES) {
      if ("score" in p) {
        erros.push(`PREDICOES "${p.tema}": campo "score" foi removido do modelo da trilha PC-AL — use "itens2021" (contagem no caderno) ou "estreia: true". Porcentagem não medida não volta para a tela.`);
      }
      if (p.itens2021 == null && !p.estreia) {
        erros.push(`PREDICOES "${p.tema}": sem "itens2021" e sem "estreia" — toda predição precisa declarar se é medida ou se não tem histórico.`);
      }
      if (p.itens2021 != null && p.estreia) {
        erros.push(`PREDICOES "${p.tema}": tem contagem e está marcada como estreia ao mesmo tempo.`);
      }
      if (!p.base) {
        erros.push(`PREDICOES "${p.tema}": falta "base" — a origem da expectativa precisa ficar visível na tela.`);
      }
    }
  }
  const idsVigencia = new Set(VIGENCIA_STATUS.map(v => v.id));
  const cargosConhecidos = new Set(Object.values(EDITAIS).flatMap(e => e.cargos));
  const vistosId = new Map();
  const vistosEnunciado = new Map();

  for (const q of QUESTOES) {
    const onde = q.id || "(questão sem id)";

    for (const c of CAMPOS_OBRIGATORIOS) {
      if (q[c] === undefined || q[c] === null || q[c] === "") erros.push(`${onde}: campo obrigatório ausente — ${c}`);
    }
    for (const c of CAMPOS_COMENTARIO) {
      if (!q.comentario || !q.comentario[c]) erros.push(`${onde}: comentario.${c} ausente`);
    }
    for (const c of CAMPOS_COGNITIVO) {
      if (!q.cognitivo || !q.cognitivo[c]) erros.push(`${onde}: cognitivo.${c} ausente`);
    }

    if (PADRAO_EXIGE_TEXTO_APOIO.test(q.enunciado) && !q.textoApoio) {
      erros.push(`${onde}: enunciado remete a um parágrafo/texto externo, mas textoApoio está vazio`);
    }

    /* Dois formatos convivem desde 7.179. O gabarito válido depende de
       `tipo`, e o item de múltipla escolha precisa carregar as próprias
       alternativas — sem elas a tela não teria o que desenhar, e o erro
       só apareceria na frente do aluno. */
    const formato = q.tipo === "ME" ? "ME" : "CE";
    if (formato === "CE") {
      if (!["C", "E"].includes(q.gabarito)) erros.push(`${onde}: gabarito inválido — "${q.gabarito}" (esperado C ou E)`);
      if (q.alternativas) erros.push(`${onde}: item CERTO/ERRADO não pode declarar alternativas`);
    } else {
      if (!Array.isArray(q.alternativas) || q.alternativas.length < 2) {
        erros.push(`${onde}: item de múltipla escolha exige "alternativas" com pelo menos 2 opções`);
      } else {
        if (q.alternativas.length > 5) erros.push(`${onde}: ${q.alternativas.length} alternativas — a CEBRASPE usa no máximo 5 (A a E)`);
        const vazias = q.alternativas.filter(a => typeof a !== "string" || !a.trim()).length;
        if (vazias) erros.push(`${onde}: ${vazias} alternativa(s) vazia(s) ou que não são texto`);
        const letras = q.alternativas.map((_, i) => String.fromCharCode(65 + i));
        if (!letras.includes(q.gabarito)) {
          erros.push(`${onde}: gabarito "${q.gabarito}" não corresponde a nenhuma alternativa (esperado ${letras.join(", ")})`);
        }
        const textos = new Set(q.alternativas.map(a => String(a).trim().toLowerCase()));
        if (textos.size !== q.alternativas.length) erros.push(`${onde}: alternativas repetidas`);
      }
    }
    if (![1, 2, 3].includes(q.dificuldade)) erros.push(`${onde}: dificuldade inválida — "${q.dificuldade}" (esperado 1, 2 ou 3)`);
    if (!Array.isArray(q.cargo) || !q.cargo.length) erros.push(`${onde}: cargo deve ser um array não vazio`);

    /* Cargo declarado tem de existir em algum edital: um cargo inventado ou
       com typo não casa com filtro nenhum e some da tela sem erro. */
    if (Array.isArray(q.cargo)) {
      const orfaos = q.cargo.filter(c => !cargosConhecidos.has(c));
      if (orfaos.length) erros.push(`${onde}: cargo inexistente em qualquer edital — ${orfaos.map(c => `"${c}"`).join(", ")}`);

      /* Disciplina que consta de mais de um edital é conteúdo comum às
         trilhas — Língua Portuguesa e Ética no Serviço Público, hoje. Se o
         cargo cobre só uma delas, a questão fica invisível para a outra
         carreira ao filtrar por cargo, embora caia na prova dela. Foi assim
         que 144 itens ficaram fora do alcance de quem tinha direito a eles:
         94 de Português inacessíveis à trilha da SESAU e 50 de Ética
         divididos entre as duas. O cargo deve ser a união. */
      for (const trilha of Object.values(EDITAIS)) {
        if (!(q.disciplina in trilha.itensPorDisciplina)) continue;
        if (!trilha.cargos.some(c => q.cargo.includes(c))) {
          erros.push(`${onde}: "${q.disciplina}" consta do edital ${trilha.curto || trilha.id}, mas nenhum cargo dessa trilha está em q.cargo — a questão fica invisível para ela`);
        }
      }
    }
    if (typeof q.tempoIdealSeg !== "number" || q.tempoIdealSeg <= 0) erros.push(`${onde}: tempoIdealSeg inválido — "${q.tempoIdealSeg}"`);
    if (typeof q.probReaparecer !== "number" || q.probReaparecer < 0 || q.probReaparecer > 1) {
      erros.push(`${onde}: probReaparecer fora de 0..1 — "${q.probReaparecer}"`);
    }
    /* O padrão precisa existir no DNA_BANCA: é ele que alimenta o bloco
       "Padrão da banca detectado" e o Raio-X. Um slug órfão some da tela
       sem erro nenhum. */
    if (!slugsValidos.has(q.pegadinha)) {
      erros.push(`${onde}: pegadinha "${q.pegadinha}" não existe em DNA_BANCA`);
    }

    /* Campos opcionais do eixo de ruptura e de vigência normativa: se
       vierem, precisam vir válidos. Silenciosamente errados seriam piores
       que ausentes, porque a tela os exibiria como se fossem verdade. */
    if (q.ruptura !== undefined && !codsRuptura.has(q.ruptura)) {
      erros.push(`${onde}: ruptura "${q.ruptura}" não existe em PONTOS_RUPTURA`);
    }
    if (q.vigencia !== undefined) {
      if (!idsVigencia.has(q.vigencia)) {
        erros.push(`${onde}: vigencia "${q.vigencia}" não existe em VIGENCIA_STATUS`);
      } else if (q.vigencia !== "vigente" && !q.vigenciaNota) {
        erros.push(`${onde}: vigencia "${q.vigencia}" exige vigenciaNota explicando a mudança normativa`);
      }
    }

    if (vistosId.has(q.id)) erros.push(`${onde}: ID repetido (já usado)`);
    else vistosId.set(q.id, true);

    const chave = normalizar(q.enunciado);
    if (vistosEnunciado.has(chave)) erros.push(`${onde}: enunciado idêntico ao de ${vistosEnunciado.get(chave)}`);
    else vistosEnunciado.set(chave, q.id);
  }

  /* ---- integridade do eixo de ruptura (js/data-ruptura.js) ----
     A tela mostra o exemplo de cada ponto de ruptura como prova de que o
     conceito existe no banco. Exemplo apagado, renomeado ou de disciplina
     fora do escopo declarado transforma a explicação em afirmação vazia. */
  {
    const porId = new Map(QUESTOES.map(q => [q.id, q]));
    for (const r of PONTOS_RUPTURA) {
      const q = porId.get(r.exemplo);
      if (!q) {
        erros.push(`PONTOS_RUPTURA ${r.cod}: exemplo "${r.exemplo}" não existe no banco`);
        continue;
      }
      const generico = r.escopo.some(e => e.startsWith("todas"));
      if (!generico && !r.escopo.includes(q.disciplina)) {
        erros.push(`PONTOS_RUPTURA ${r.cod}: exemplo ${r.exemplo} é de "${q.disciplina}", fora do escopo declarado (${r.escopo.join(", ")})`);
      }
    }
    /* O mapa pegadinha -> ruptura alimenta a sugestão de checagem. Slug
       novo no DNA_BANCA sem entrada aqui deixa a sugestão em branco. */
    for (const slug of slugsValidos) {
      if (!RUPTURA_POR_PEGADINHA[slug]) {
        erros.push(`RUPTURA_POR_PEGADINHA: falta mapeamento para a pegadinha "${slug}"`);
      }
    }
    const codsCitados = [
      ...Object.values(RUPTURA_POR_PEGADINHA).flat(),
      ...CHECKLIST_RESOLUCAO.flatMap(c => c.rup),
    ];
    for (const cod of new Set(codsCitados)) {
      if (!codsRuptura.has(cod)) erros.push(`Código de ruptura citado mas inexistente: "${cod}"`);
    }
  }

  /* O bloco pós-resposta é hoje inteiramente montado a partir das
     estratégias casadas por `pegadinha` (+ `escopo`). Uma questão sem
     nenhuma correspondência renderiza um painel vazio — o candidato
     responde e não recebe orientação alguma. Como o escopo é declarativo
     e tende a ser apertado com o tempo, o risco é real e silencioso. */
  for (const q of QUESTOES) {
    const casadas = ESTRATEGIAS.filter(e =>
      (e.contraDNA || []).includes(q.pegadinha) &&
      !(e.escopo === "juridica" && !DISCIPLINAS_JURIDICAS.includes(q.disciplina))
    );
    if (!casadas.length) {
      erros.push(`${q.id}: nenhuma estratégia casa com "${q.pegadinha}" em ${q.disciplina} — bloco pós-resposta ficaria vazio`);
    }
  }

  /* ---------- Coerência entre prioridade, peso e itensPorDisciplina ----------
     `itensPorDisciplina` é DERIVADO das faixas de prioridade. Se alguém
     promover uma disciplina de A+ para S++ e esquecer de recalcular o
     peso, a tela passa a exibir uma prioridade que o motor não aplica —
     o simulado e o plano continuariam tratando a disciplina como antes.
     Aqui a derivação é refeita e comparada. */
  for (const ed of Object.values(EDITAIS)) {
    if (!ed.prioridade || !ed.pesoPorPrioridade || !ed.blocos || !ed.corte) continue;
    const onde = `EDITAIS.${ed.id}`;

    for (const disc of Object.keys(ed.itensPorDisciplina)) {
      if (!ed.prioridade[disc]) erros.push(`${onde}: disciplina "${disc}" não tem faixa de prioridade`);
      /* Procedência é obrigatória junto com a prioridade. Sem ela o peso
         volta a ser exibido como se tivesse sido medido, que é o defeito
         que o campo existe para impedir — cinco dos quinze são estimativa. */
      if (ed.procedenciaPeso && !ed.procedenciaPeso[disc]) {
        erros.push(`${onde}: disciplina "${disc}" não declara procedência do peso (medido/edital/analogia/estimado)`);
      }
    }
    if (ed.procedenciaPeso) {
      const VALIDAS = new Set(["medido", "edital", "analogia", "estimado"]);
      for (const [disc, p] of Object.entries(ed.procedenciaPeso)) {
        if (!VALIDAS.has(p)) erros.push(`${onde}: procedência "${p}" (${disc}) não existe — use medido, edital, analogia ou estimado`);
        if (!(disc in ed.itensPorDisciplina)) erros.push(`${onde}: procedência declarada para "${disc}", que não está em itensPorDisciplina`);
      }
    }
    for (const [disc, faixa] of Object.entries(ed.prioridade)) {
      if (!(faixa in ed.pesoPorPrioridade)) {
        erros.push(`${onde}: faixa "${faixa}" (${disc}) não existe em pesoPorPrioridade`);
      }
      if (!(disc in ed.itensPorDisciplina)) {
        erros.push(`${onde}: prioridade declarada para "${disc}", que não está em itensPorDisciplina`);
      }
    }

    /* Refaz a repartição por bloco e confere contra o que está gravado. */
    for (const [chave, nomes] of Object.entries(ed.blocos)) {
      const alvo = ed.corte[chave] ? ed.corte[chave].itens : 0;
      const pesos = nomes.map(n => ed.pesoPorPrioridade[ed.prioridade[n]] ?? 0);
      const somaPeso = pesos.reduce((a, b) => a + b, 0);
      if (!somaPeso) continue;
      nomes.forEach((nome, i) => {
        const esperado = pesos[i] * alvo / somaPeso;
        const gravado = ed.itensPorDisciplina[nome];
        /* 0,15 cobre o arredondamento para uma casa e o ajuste de sobra
           aplicado à maior disciplina do bloco. */
        if (Math.abs(esperado - gravado) > 0.15) {
          erros.push(`${onde}: "${nome}" tem peso ${gravado}, mas a faixa ${ed.prioridade[nome]} no bloco ${chave} produz ${esperado.toFixed(1)}`);
        }
      });
    }
  }

  /* ---------- Coerência de `blocos` com `itensPorDisciplina` e `corte` ----------
     A projeção de corte precisa saber a que bloco (P1/P2) cada disciplina
     pertence, e isso obriga a repetir os nomes das disciplinas em
     `blocos`. Repetição sem conferência diverge: renomear uma disciplina
     num lugar e esquecer o outro faria a projeção simplesmente ignorar
     aquele peso, sem erro visível — o aluno veria um prognóstico de
     aprovação calculado sobre menos prova do que a real. */
  for (const ed of Object.values(EDITAIS)) {
    const onde = `EDITAIS.${ed.id}`;
    if (!ed.blocos) { erros.push(`${onde}: falta \`blocos\` (necessário para a projeção de corte)`); continue; }

    const daTabela = Object.keys(ed.itensPorDisciplina);
    const nosBlocos = Object.values(ed.blocos).flat();

    for (const d of daTabela) {
      const em = Object.entries(ed.blocos).filter(([, ds]) => ds.includes(d)).map(([b]) => b);
      if (em.length === 0) erros.push(`${onde}: disciplina "${d}" tem itens mas não está em nenhum bloco`);
      if (em.length > 1) erros.push(`${onde}: disciplina "${d}" aparece em mais de um bloco (${em.join(", ")})`);
    }
    for (const d of nosBlocos) {
      if (!daTabela.includes(d)) erros.push(`${onde}: bloco cita "${d}", que não existe em itensPorDisciplina`);
    }

    /* A soma dos pesos de cada bloco tem de bater com os itens que o
       corte oficial atribui àquele bloco. */
    for (const [chave, c] of Object.entries(ed.corte)) {
      if (chave === "total") continue;
      const soma = (ed.blocos[chave] || []).reduce((s, d) => s + (ed.itensPorDisciplina[d] || 0), 0);
      if (Math.abs(soma - c.itens) > 0.5) {
        erros.push(`${onde}: bloco ${chave} soma ${soma.toFixed(1)} itens, mas o corte declara ${c.itens}`);
      }
    }
  }

  /* ================= AVISOS ================= */

  /* ---------- Formato das questões de Língua Portuguesa ----------
     Medido na prova REAL da CEBRASPE para PC-AL (2021, cargo de Agente),
     itens 1 a 20, que são os de Língua Portuguesa:

       ancorados num texto-base .......... 20 de 20  (100%)
       reescritura / substituição ........ 30%
       compreensão / inferência .......... 25%
       pontuação ......................... 15%
       coesão / referenciação ............ 10%
       sintaxe (função de termos) ........ 10%

     A banca não cobra gramática solta: cobra gramática A SERVIÇO DO
     TEXTO. Todos os vinte itens partem de um texto, e mesmo os de sintaxe
     perguntam sobre um trecho dele ("o termo X exerce a função de...",
     citando o texto).

     O banco vinha fazendo o contrário — 18% com texto-base e quase metade
     em análise morfossintática isolada, que na prova real é 10%. Treinar
     assim ensina a classificar oração no vácuo, que não é a habilidade
     cobrada: reconhecer o termo é o meio, julgar o efeito dele no texto é
     o fim.

     Os limiares são folgados de propósito. Exigir 100% de texto-base
     seria irreal — treinar regra isolada tem valor pedagógico próprio.
     O que os avisos pegam é a INVERSÃO da proporção. */
  const PORTUGUES_TEXTO_MINIMO = 0.50;      /* real: 100% */
  const PORTUGUES_MORFOSSINTAXE_MAX = 0.30; /* real: ~10% */
  /* Assuntos que, no banco, tratam de análise da oração fora de um texto. */
  const ASSUNTOS_MORFOSSINTAXE = new Set([
    "Termos essenciais da oração", "Termos integrantes da oração",
    "Termos acessórios da oração", "Complemento nominal e adjunto adnominal",
    "Tipos de predicado", "Predicativo", "Predicação verbal",
    "Orações subordinadas", "Frase, oração e período", "Sintaxe",
  ]);

  /* ================================================================
     A AMOSTRA DOS AVISOS DE AUTORIA É SÓ O QUE NÓS ESCREVEMOS

     Os avisos abaixo existem para responder "o quanto o NOSSO texto imita
     a banca" e "que reflexo falso estamos treinando". Desde a entrada dos
     131 itens de prova real, eles vinham rodando sobre um acervo que
     inclui a própria banca — e o efeito é justamente o pior possível:
     MELHORA a nota, porque os itens reais, por definição, aderem ao perfil
     real. Medido:

       métrica                    banco inteiro   só autorais
       vazamento da regra cega        +6,7pp        +7,5pp
       desvio na faixa 201-300       +13,7pp       +15,0pp
       literalidade -> CERTO           90,8%         90,2%
       CERTO global                    52,0%         51,5%

     Comparar o banco inteiro contra o perfil da prova real é, em parte,
     comparar a prova real com ela mesma. O denominador correto para um
     sinal de autoria é a autoria.

     O que NÃO muda de amostra: contagens sobre o banco como material de
     estudo (distribuição de dificuldade, cobertura por disciplina,
     proporção frente ao edital). Ali o aluno treina no acervo inteiro, e
     é o acervo inteiro que interessa. */
  const EH_PROVA_REAL = q => /CEBRASPE\s+(PC|PF|PRF)/i.test(q.origem || "");
  const AUTORAIS = QUESTOES.filter(q => !EH_PROVA_REAL(q));
  const N_REAIS = QUESTOES.length - AUTORAIS.length;
  /* Toda medida de equilíbrio C/E, viés de comprimento por gabarito e
     previsibilidade de padrão só existe no formato CERTO/ERRADO. Item de
     múltipla escolha não tem "lado" — jogá-lo nessas contas puxaria o
     numerador para zero e faria o banco parecer enviesado para ERRADO. */
  const AUTORAIS_CE = AUTORAIS.filter(q => q.tipo !== "ME");
  const N_ME = QUESTOES.filter(q => q.tipo === "ME").length;

  const portugues = AUTORAIS.filter(q => q.disciplina === "Língua Portuguesa");
  if (portugues.length >= 30) {
    const comTexto = portugues.filter(q => q.textoApoio).length;
    const fatiaTexto = comTexto / portugues.length;
    if (fatiaTexto < PORTUGUES_TEXTO_MINIMO) {
      avisos.push(`Português: só ${pct(comTexto, portugues.length)} das questões têm texto-base — na prova real da PC-AL foram 20 de 20 (100%). A banca cobra gramática a serviço do texto.`);
    }
    const morfo = portugues.filter(q => ASSUNTOS_MORFOSSINTAXE.has(q.assunto)).length;
    const fatiaMorfo = morfo / portugues.length;
    if (fatiaMorfo > PORTUGUES_MORFOSSINTAXE_MAX) {
      avisos.push(`Português: ${pct(morfo, portugues.length)} das questões são análise da oração isolada — na prova real isso foi ~10%, contra 55% de reescritura e compreensão.`);
    }
  }

  /* ---------- Poder de discriminação da escala de dificuldade ----------
     Medido contra as respostas reais em 06/08/2026: as questões de nível
     1 ("fácil") tiveram 70,3% de acerto (n=37) contra 69,1% de todo o
     resto (n=515). Diferença de 1,2 ponto, dentro do ruído — a escala
     não previa nada.

     A distribuição explica: 3,9% no nível 1, 38,8% no 2 e 57,3% no 3.
     Quando mais da metade do banco é "difícil" e quase nada é "fácil",
     o rótulo deixa de separar questões e vira decoração.

     Isso não é cosmético. `pesoAdaptativo` (js/engine.js) usa
     `q.dificuldade` para mirar uma dificuldade-alvo conforme o
     desempenho do aluno; com o rótulo sem poder preditivo, esse termo
     injeta ruído na escolha das questões do simulado. E o filtro de
     dificuldade do Banco promete ao aluno um recorte que não se
     confirma na prática.

     O limiar abaixo é frouxo de propósito: só reclama de distribuição
     claramente degenerada, não de desequilíbrio moderado. */
  const LIMIAR_NIVEL_DOMINANTE = 0.55;
  const LIMIAR_NIVEL_RESIDUAL = 0.05;
  const porDificuldade = { 1: 0, 2: 0, 3: 0 };
  for (const q of QUESTOES) if (porDificuldade[q.dificuldade] !== undefined) porDificuldade[q.dificuldade]++;
  for (const [nivel, n] of Object.entries(porDificuldade)) {
    const fatia = n / QUESTOES.length;
    if (fatia > LIMIAR_NIVEL_DOMINANTE) {
      avisos.push(`Dificuldade ${nivel} concentra ${pct(n, QUESTOES.length)} do banco — a escala perde poder de separar questões, e pesoAdaptativo depende dela.`);
    } else if (fatia < LIMIAR_NIVEL_RESIDUAL) {
      avisos.push(`Dificuldade ${nivel} tem só ${pct(n, QUESTOES.length)} do banco — faixa quase vazia, o filtro do Banco entrega pouca coisa.`);
    }
  }

  const total = AUTORAIS_CE.length;
  const certos = AUTORAIS_CE.filter(q => q.gabarito === "C").length;
  const taxaC = certos / total;

  if (Math.abs(taxaC - 0.5) > LIMIAR_CE_GLOBAL) {
    avisos.push(`Equilíbrio C/E global em ${pct(certos, total)} CERTO — a banca fica perto de 50/50.`);
  }

  /* Desequilíbrio por padrão: o ponto crítico da auditoria. Quando um
     padrão quase sempre cai no mesmo gabarito, o rótulo vira paráfrase da
     resposta e o feedback pós-resposta deixa de ensinar algo transferível. */
  const porPadrao = new Map();
  for (const q of AUTORAIS_CE) {
    if (!porPadrao.has(q.pegadinha)) porPadrao.set(q.pegadinha, []);
    porPadrao.get(q.pegadinha).push(q.gabarito);
  }
  const enviesados = [];
  for (const [padrao, gabs] of porPadrao) {
    if (gabs.length < MIN_ITENS_PARA_AVALIAR) continue;
    const c = gabs.filter(g => g === "C").length;
    const taxa = c / gabs.length;
    if (taxa >= LIMIAR_PADRAO_ENVIESADO || taxa <= 1 - LIMIAR_PADRAO_ENVIESADO) {
      enviesados.push({ padrao, n: gabs.length, taxa });
    }
  }
  enviesados.sort((a, b) => b.n - a.n);
  for (const e of enviesados) {
    avisos.push(`Padrão "${e.padrao}" cai em ${e.taxa >= 0.5 ? "CERTO" : "ERRADO"} em ${pct(e.taxa >= 0.5 ? e.taxa : 1 - e.taxa, 1)} dos ${e.n} itens — previsível demais.`);
  }

  /* Viés de comprimento: item mais longo tendendo a um gabarito é um tell
     que o candidato aprende sem perceber. */
  const media = a => a.reduce((s, x) => s + x, 0) / (a.length || 1);
  const mediaC = media(AUTORAIS_CE.filter(q => q.gabarito === "C").map(q => q.enunciado.length));
  const mediaE = media(AUTORAIS_CE.filter(q => q.gabarito === "E").map(q => q.enunciado.length));
  const viesTam = Math.abs(mediaC - mediaE) / Math.max(mediaC, mediaE);
  if (viesTam > LIMIAR_VIES_TAMANHO) {
    avisos.push(`Enunciados CERTO têm ${Math.round(mediaC)} caracteres contra ${Math.round(mediaE)} dos ERRADO (${(viesTam * 100).toFixed(0)}% de diferença) — vira pista de comprimento.`);
  }

  /* ---------- Teste da regra cega ----------
     A comparação de médias acima é fraca: duas distribuições bem diferentes
     podem ter médias parecidas, e o aviso não dispara mesmo quando o
     comprimento entrega o gabarito. O que interessa medir não é a média, e
     sim a EXPLORABILIDADE — quanto um candidato acerta sem ler o conteúdo.

     Simula-se um "chutador cego" que decide apenas por forma: comprimento
     do enunciado e presença de termo absoluto. Se ele bate o chute puro por
     margem relevante, o banco tem um vazamento estrutural, porque um aluno
     pode subir a taxa de acerto treinando o formato em vez da matéria — e a
     taxa de acerto, que é o painel de controle do estudo, deixa de medir
     preparo. Pior: essa heurística NÃO se transfere para a prova real, então
     o vazamento não é só ruído de medição, é treino de um reflexo errado. */
  /* ---------- Aderência ao perfil de comprimento da prova real ----------
     Complementa o teste da regra cega atacando a causa, e não o sintoma: se
     a distribuição de comprimento imita a da banca, o reflexo aprendido
     aqui vale lá. Enquanto ela não imitar, o candidato treina em um formato
     que não é o da prova. */
  const comprimentos = AUTORAIS.filter(q => q.tipo === "CE" && q.enunciado).map(q => q.enunciado.length);
  if (comprimentos.length >= 200) {
    let piso = 0;
    for (const faixa of PERFIL_REAL_2021) {
      const nossa = comprimentos.filter(c => c > piso && c <= faixa.ate).length / comprimentos.length;
      const desvio = nossa - faixa.alvo;
      if (Math.abs(desvio) > LIMIAR_DESVIO_PERFIL) {
        const rotulo = faixa.ate === Infinity ? `acima de ${piso}` : `${piso + 1}-${faixa.ate}`;
        avisos.push(`Comprimento fora do perfil da prova real na faixa ${rotulo} caracteres: temos ${pct(nossa, 1)} contra ${pct(faixa.alvo, 1)} da CEBRASPE (5 cadernos policiais, 292 itens) (${desvio > 0 ? "+" : ""}${(desvio * 100).toFixed(1)}pp).`);
      }
      piso = faixa.ate;
    }
  }

  const itensCE = AUTORAIS.filter(q => q.tipo === "CE" && q.enunciado);
  if (itensCE.length >= 200) {
    const semAcento = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    const ABSOLUTOS = /\b(sempre|nunca|jamais|somente|apenas|exclusivamente|todos?|toda|qualquer|necessariamente|obrigatoriamente|automaticamente)\b/;
    const baseChute = Math.max(
      itensCE.filter(q => q.gabarito === "C").length,
      itensCE.filter(q => q.gabarito === "E").length,
    ) / itensCE.length;

    /* Varre o corte de comprimento e fica com o melhor para o chutador —
       supor um corte fixo subestimaria o vazamento. */
    let melhor = { corte: 0, taxa: 0 };
    for (let corte = 100; corte <= 400; corte += 10) {
      let ok = 0;
      for (const q of itensCE) {
        const palpite = ABSOLUTOS.test(semAcento(q.enunciado)) ? "E"
          : (q.enunciado.length >= corte ? "C" : "E");
        if (palpite === q.gabarito) ok++;
      }
      const taxa = ok / itensCE.length;
      if (taxa > melhor.taxa) melhor = { corte, taxa };
    }

    const ganho = melhor.taxa - baseChute;
    if (ganho > LIMIAR_REGRA_CEGA) {
      avisos.push(`Regra cega (comprimento + termo absoluto, sem ler o conteúdo) acerta ${pct(melhor.taxa, 1)} contra ${pct(baseChute, 1)} do chute puro — ${(ganho * 100).toFixed(1)}pp de vazamento, contra ${(REGRA_CEGA_REFERENCIA_REAL * 100).toFixed(1)}pp medidos em prova real. É reflexo falso sendo treinado.`);
      /* Aponta onde doer mais, para o próximo lote saber o que corrigir. */
      const porDisc = new Map();
      for (const q of itensCE) {
        if (!porDisc.has(q.disciplina)) porDisc.set(q.disciplina, []);
        porDisc.get(q.disciplina).push(q);
      }
      const ranking = [...porDisc.entries()]
        .filter(([, arr]) => arr.length >= 40)
        .map(([d, arr]) => {
          let ok = 0;
          for (const q of arr) {
            const palpite = ABSOLUTOS.test(semAcento(q.enunciado)) ? "E"
              : (q.enunciado.length >= melhor.corte ? "C" : "E");
            if (palpite === q.gabarito) ok++;
          }
          return { d, n: arr.length, taxa: ok / arr.length };
        })
        .sort((a, b) => b.taxa - a.taxa)
        .slice(0, 3);
      for (const r of ranking) {
        avisos.push(`    pior em "${r.d}": ${pct(r.taxa, 1)} de acerto cego em ${r.n} itens.`);
      }
    }
  }

  /* Resolução que devolve o enunciado sem acrescentar nada verificável. */
  const ecoSemAncora = QUESTOES
    .map(q => ({ q, eco: taxaDeEco(q) }))
    .filter(({ q, eco }) => eco >= LIMIAR_ECO_ENUNCIADO &&
      !ANCORA_VERIFICAVEL.test(q.comentario.resolucao))
    .sort((a, b) => b.eco - a.eco);

  if (ecoSemAncora.length) {
    const porDisc = {};
    for (const { q } of ecoSemAncora) porDisc[q.disciplina] = (porDisc[q.disciplina] || 0) + 1;
    const resumo = Object.entries(porDisc).sort((a, b) => b[1] - a[1])
      .map(([d, n]) => `${d} (${n})`).join(", ");
    avisos.push(`${ecoSemAncora.length} resolução(ões) repetem o enunciado sem citar fonte nem explicar o porquê — ${resumo}.`);
    for (const { q, eco } of ecoSemAncora.slice(0, 10)) {
      avisos.push(`    ${q.id}: ${(eco * 100).toFixed(0)}% de repetição do enunciado — reescrever a resolução.`);
    }
    if (ecoSemAncora.length > 10) {
      avisos.push(`    ... e mais ${ecoSemAncora.length - 10}. Rode com --resolucoes para a lista completa.`);
    }
  }

  /* Cobertura x peso, POR TRILHA: disciplina que vale muitos itens na prova
     e tem banco raso é onde o aluno mais perde ponto.

     A referência é EDITAIS — a MESMA tabela que o Plano de Estudo usa para
     priorizar (js/engine.js, planoEstudoDirigido). Antes isto media por
     PREDICOES, que só cobre disciplinas específicas e deixou de ser a fonte
     de peso do app: o painel apontava déficit por um critério que a
     aplicação não usava mais.

     A proporção é medida DENTRO do escopo de cada trilha, não contra o banco
     inteiro: as 1063 questões jurídicas de PC-AL não são denominador para
     medir a cobertura de Fisioterapia, que nem enxerga essas disciplinas. */
  const discNoBanco = new Map();
  for (const q of QUESTOES) discNoBanco.set(q.disciplina, (discNoBanco.get(q.disciplina) || 0) + 1);

  const trilhas = Object.values(EDITAIS);
  const comPesoEmAlguma = new Set(trilhas.flatMap(e => Object.keys(e.itensPorDisciplina)));
  const semPesoNenhum = [...discNoBanco.keys()].filter(d => !comPesoEmAlguma.has(d));
  if (semPesoNenhum.length) {
    avisos.push(`${semPesoNenhum.length} disciplina(s) do banco sem peso em nenhuma trilha — tratadas como treino complementar: ${semPesoNenhum.join(", ")}.`);
  }

  for (const trilha of trilhas) {
    const itensEdital = trilha.itensPorDisciplina;
    const rotulo = trilha.curto || trilha.id;

    const semQuestao = Object.keys(itensEdital).filter(d => !discNoBanco.has(d));
    if (semQuestao.length) {
      avisos.push(`[${rotulo}] ${semQuestao.length} disciplina(s) do edital sem nenhuma questão no banco: ${semQuestao.join(", ")}.`);
    }

    const comPeso = Object.entries(itensEdital)
      .filter(([d]) => discNoBanco.has(d))
      .map(([d, itens]) => ({ d, itens }));
    if (!comPeso.length) continue;

    const somaItens = comPeso.reduce((s, x) => s + x.itens, 0);
    /* Denominador é o escopo da trilha, não o banco todo. */
    const totalNaTrilha = comPeso.reduce((s, x) => s + discNoBanco.get(x.d), 0);
    for (const { d, itens } of comPeso.sort((a, b) => b.itens - a.itens)) {
      const ideal = itens / somaItens;
      const real = discNoBanco.get(d) / totalNaTrilha;
      const desvio = (real - ideal) * 100;
      if (desvio < -3) {
        avisos.push(`[${rotulo}] "${d}" vale ~${itens} itens na prova (${pct(ideal, 1)} dela) mas é só ${pct(discNoBanco.get(d), totalNaTrilha)} do escopo da trilha (${discNoBanco.get(d)} questões) — ${Math.abs(desvio).toFixed(1)}pp abaixo do proporcional.`);
      }
    }
  }

  /* `questoes` é o banco inteiro (é o tamanho do acervo, e é isso que o
     cabeçalho anuncia); `taxaC` é só dos autorais, porque mede calibragem
     de autoria. Os dois convivem, e o relatório diz qual é qual — misturá-los
     num número só foi exatamente o defeito que este ajuste corrige. */
  const metricas = {
    questoes: QUESTOES.length, autorais: AUTORAIS.length, reais: N_REAIS,
    multiplaEscolha: N_ME, certoErrado: QUESTOES.length - N_ME,
    taxaC, arquivos: manifesto.length,
    padroesEnviesados: enviesados.length, disciplinas: discNoBanco.size,
  };

  if (!quieto) relatorio({ erros, avisos, metricas });
  return { erros, avisos, metricas };
}

function relatorio({ erros, avisos, metricas }) {
  const pct = n => (100 * n).toFixed(1) + "%";
  console.log(`Banco: ${metricas.questoes} questões em ${metricas.arquivos} arquivos, ${metricas.disciplinas} disciplinas.`);
  console.log(`  ${metricas.autorais} autorais + ${metricas.reais} de prova real aplicada.`);
  console.log(`  ${metricas.certoErrado} CERTO/ERRADO + ${metricas.multiplaEscolha} de múltipla escolha.`);
  console.log(`Equilíbrio C/E: ${pct(metricas.taxaC)} CERTO (só autorais C/E — é calibragem de autoria).`);
  console.log("");

  if (erros.length) {
    console.log(`ERROS (${erros.length}) — o build não passa:`);
    for (const e of erros.slice(0, 30)) console.log(`  x ${e}`);
    if (erros.length > 30) console.log(`  ... e mais ${erros.length - 30}.`);
  } else {
    console.log("Erros: nenhum. Contrato de dados íntegro.");
  }

  console.log("");
  if (avisos.length) {
    console.log(`AVISOS (${avisos.length}) — não bloqueiam, mas medem o quanto o banco imita a banca:`);
    for (const a of avisos) console.log(`  ! ${a}`);
  } else {
    console.log("Avisos: nenhum.");
  }
}

module.exports = { validar };

/* Fila de trabalho completa: todas as resoluções a reescrever, da pior
   para a menos ruim, com o texto atual à vista para decidir sem abrir o
   arquivo. */
function listarResolucoesFracas() {
  const manifesto = sincronizarManifesto({ gravar: false });
  const { QUESTOES } = carregarDados(manifesto);
  const fila = QUESTOES
    .map(q => ({ q, eco: taxaDeEco(q) }))
    .filter(({ q, eco }) => eco >= LIMIAR_ECO_ENUNCIADO &&
      !ANCORA_VERIFICAVEL.test(q.comentario.resolucao))
    .sort((a, b) => b.eco - a.eco);

  if (!fila.length) { console.log("Nenhuma resolução repete o enunciado sem acrescentar fonte."); return; }
  console.log(`${fila.length} resolução(ões) a reescrever, da pior para a menos ruim:\n`);
  for (const { q, eco } of fila) {
    console.log(`${q.id}  ${(eco * 100).toFixed(0)}% de repetição  ·  ${q.disciplina} / ${q.assunto}`);
    console.log(`  enunciado: ${q.enunciado.slice(0, 150)}`);
    console.log(`  resolução: ${q.comentario.resolucao.slice(0, 150)}\n`);
  }
}

if (require.main === module) {
  try {
    if (process.argv.includes("--resolucoes")) { listarResolucoesFracas(); process.exit(0); }
    const { erros } = validar({ quieto: process.argv.includes("--quieto") });
    process.exit(erros.length ? 1 : 0);
  } catch (e) {
    console.error("Erro ao validar:", e.message);
    process.exit(1);
  }
}
