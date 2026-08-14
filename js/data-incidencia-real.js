/* =====================================================================
   QUESTLAB — INCIDÊNCIA MEDIDA EM PROVA REAL

   O que este arquivo é: a contagem, item a item, do que a CEBRASPE
   efetivamente cobrou no último concurso da Polícia Civil de Alagoas.
   Não é estimativa, não é leitura editorial, não é média de percepção.
   São 120 itens de um caderno oficial, somados.

   POR QUE ELE PRECISOU EXISTIR

   Até a versão 7.162 o Raio-X e a Predição de Cobrança trabalhavam com
   `freq` e `score` — números de 0 a 100 escritos à mão, do tipo
   "Inquérito policial: 97". Ninguém os havia medido. Pior: o painel do
   DNA da banca desenhava, como se fosse comportamento da CEBRASPE, a
   FATIA DE CADA PADRÃO DENTRO DESTE BANCO — ou seja, a estatística das
   questões que nós mesmos escrevemos. Um sistema que mede o próprio
   reflexo e o apresenta como retrato da banca ensina o autor, não o
   candidato.

   A FONTE

   Caderno oficial CEBRASPE — PC/AL 2021, CARGO 1: AGENTE DE POLÍCIA,
   aplicado em 29/08/2021. 120 itens no formato CERTO/ERRADO, divididos
   em 50 de conhecimentos gerais e 70 de conhecimentos específicos.

   COMO A CONTAGEM FOI CONFERIDA

   O texto do caderno vem diagramado em duas colunas, e a extração funde
   o começo de um item ao fim do anterior. A captura usa numeração
   monotônica (só aceita como item novo a ocorrência do PRÓXIMO número
   esperado), o que descarta anos, artigos e incisos soltos no meio do
   enunciado. Resultado: 120 de 120, sem lacuna.

   A conferência que dá confiança no número não é essa, porém. É esta:
   somados por disciplina, os blocos batem EXATAMENTE com a estrutura
   registrada em `estruturaHistorica2021` (js/data.js), que veio do
   Relatório Consolidado do usuário por caminho independente:

     básicos      20 + 10 + 12 + 8                = 50 ✔
     específicos  14 + 12 + 15 + 15 + 14          = 70 ✔

   Duas origens diferentes, mesma repartição. Se a captura tivesse
   perdido ou duplicado item, algum bloco não fecharia.

   O QUE ESTES NÚMEROS SÃO E O QUE NÃO SÃO

   SÃO: o que caiu em 2021, com o item exato onde caiu. Auditável por
   qualquer pessoa que abra o caderno e conte.

   NÃO SÃO: previsão de 2026. O edital de 2026 acrescenta seis
   disciplinas ao que existia em 2021, e disciplina nova não tem
   histórico — por definição. Onde não há passado, este arquivo diz
   `estreia: true` e explica, em vez de arbitrar um número.
   ===================================================================== */

const INCIDENCIA_PCAL2021 = {
  fonte: "Caderno oficial CEBRASPE — PC/AL 2021, cargo 1 (Agente de Polícia), aplicado em 29/08/2021.",
  totalItens: 120,
  cargo: "Agente de Polícia",
  ano: 2021,

  /* `nome2026` mapeia a disciplina de 2021 para como ela se chama no
     edital de 2026, quando mudou de nome (Informática virou TI e
     Segurança Cibernética). Sem esse mapa, a comparação entre os dois
     editais perderia a disciplina de vista e ela apareceria como se
     tivesse saído da prova. */
  disciplinas: [
    {
      disciplina: "Língua Portuguesa", nome2026: "Língua Portuguesa", bloco: "p1", itens: 20,
      temas: [
        { tema: "Compreensão, inferência e argumentação", itens: 7, onde: "2, 3, 7, 8, 9, 14, 15" },
        { tema: "Reescritura com manutenção de sentido e correção", itens: 5, onde: "4, 5, 11, 13, 17" },
        { tema: "Pontuação e seus efeitos de sentido", itens: 3, onde: "1, 12, 18" },
        { tema: "Coesão e referenciação", itens: 2, onde: "10, 19" },
        { tema: "Sintaxe: funções e termos da oração", itens: 2, onde: "16, 20" },
        { tema: "Emprego de formas verbais", itens: 1, onde: "6" },
      ],
    },
    {
      disciplina: "Ética no Serviço Público", nome2026: "Ética no Serviço Público", bloco: "p1", itens: 10,
      temas: [
        { tema: "Ética, moral e cidadania — conceitos", itens: 5, onde: "21 a 25" },
        { tema: "Código de Ética Funcional do Servidor Público Civil de AL", itens: 5, onde: "26 a 30" },
      ],
    },
    {
      disciplina: "Direitos Humanos", nome2026: "Direitos Humanos", bloco: "p1", itens: 12,
      temas: [
        { tema: "Teoria geral: características, DUDH e programa nacional", itens: 7, onde: "36 a 42" },
        { tema: "Convenção Americana de Direitos Humanos (Pacto de San José)", itens: 5, onde: "31 a 35" },
      ],
    },
    {
      disciplina: "Informática", nome2026: "TI e Segurança Cibernética", bloco: "p1", itens: 8,
      temas: [
        { tema: "Redes de computadores e computação em nuvem", itens: 3, onde: "43, 44, 46" },
        { tema: "Segurança: malware e ferramentas antimalware", itens: 2, onde: "49, 50" },
        { tema: "Sistema operacional e organização de arquivos", itens: 2, onde: "47, 48" },
        { tema: "Ferramentas de busca na Internet", itens: 1, onde: "45" },
      ],
    },
    {
      disciplina: "Direito Administrativo", nome2026: "Direito Administrativo", bloco: "p2", itens: 14,
      temas: [
        { tema: "Poderes administrativos e abuso de poder", itens: 5, onde: "53 a 57" },
        { tema: "Licitações e contratos administrativos", itens: 4, onde: "58 a 61" },
        { tema: "Agentes públicos", itens: 2, onde: "51, 52" },
        { tema: "Organização administrativa (desconcentração, entidades)", itens: 2, onde: "62, 63" },
        { tema: "Responsabilidade civil do Estado", itens: 1, onde: "64" },
      ],
    },
    {
      disciplina: "Direito Constitucional", nome2026: "Direito Constitucional", bloco: "p2", itens: 12,
      temas: [
        { tema: "Direitos e garantias fundamentais (art. 5º)", itens: 8, onde: "65 a 72" },
        { tema: "Segurança pública e atribuições das polícias (art. 144)", itens: 4, onde: "73 a 76" },
      ],
    },
    {
      disciplina: "Direito Penal", nome2026: "Direito Penal", bloco: "p2", itens: 15,
      temas: [
        { tema: "Crimes contra a pessoa", itens: 7, onde: "77 a 83" },
        { tema: "Crimes contra a administração pública", itens: 4, onde: "84 a 87" },
        { tema: "Crimes contra o patrimônio", itens: 4, onde: "88 a 91" },
      ],
    },
    {
      disciplina: "Processo Penal", nome2026: "Processo Penal", bloco: "p2", itens: 15,
      temas: [
        { tema: "Inquérito policial", itens: 6, onde: "92, 102 a 106" },
        { tema: "Princípios constitucionais do processo penal", itens: 5, onde: "97 a 101" },
        { tema: "Juizados especiais criminais (Lei 9.099/1995)", itens: 2, onde: "93, 94" },
        { tema: "Prisão em flagrante e fiança", itens: 1, onde: "95" },
        { tema: "Violência doméstica na atuação policial (Lei 11.340/2006)", itens: 1, onde: "96" },
      ],
    },
    {
      disciplina: "Legislação Institucional (AL)", nome2026: "Legislação Institucional (AL)", bloco: "p2", itens: 14,
      temas: [
        { tema: "Regime Jurídico Único estadual (Lei 5.247/1991)", itens: 5, onde: "107 a 111" },
        { tema: "Constituição do Estado de Alagoas", itens: 5, onde: "112 a 116" },
        { tema: "Estatuto da Polícia Civil de AL (Lei 3.437/1975)", itens: 4, onde: "117 a 120" },
      ],
    },
  ],

  /* Disciplinas que o edital de 2026 cria e que, por isso, não têm
     nenhum item em 2021. Registrá-las aqui é o que impede a tela de
     tratar ausência de histórico como ausência de importância — várias
     delas estão em faixa alta de prioridade no relatório. */
  estreiam2026: [
    { disciplina: "Legislação Especial",
      nota: "Em 2021 a matéria caía diluída dentro de \"Processo Penal e legislação correlata\". O edital de 2026 a destaca como bloco próprio." },
    { disciplina: "Raciocínio Lógico-Matemático",
      nota: "Não constava dos conhecimentos básicos de 2021." },
    { disciplina: "Atualidades",
      nota: "Não constava dos conhecimentos básicos de 2021." },
    { disciplina: "Contabilidade e Análise Financeira",
      nota: "Disciplina nova, alinhada ao perfil investigativo-financeiro do edital de 2026." },
    { disciplina: "Estatística",
      nota: "Disciplina nova, ligada à análise de dados na investigação." },
    { disciplina: "Crimes Cibernéticos e Segurança Digital",
      nota: "Disciplina nova. Em 2021 o tema aparecia apenas como segurança da informação dentro de Informática." },
  ],
};

/* ---------------------------------------------------------------------
   COMPARAÇÃO 2021 → 2026

   Substitui a antiga "Evolução histórica", que desenhava uma série de
   2018 a 2025 com números inventados disciplina por disciplina. Aquela
   curva não vinha de caderno nenhum; esta comparação tem os dois lados
   verificáveis — a contagem de 2021 acima, e o peso de 2026 derivado das
   faixas de prioridade do relatório em `EDITAIS.PCAL`.

   A leitura que importa para o candidato: o edital de 2026 mantém os
   mesmos 50 + 70 itens e acrescenta SEIS disciplinas. Como o total não
   cresce, tudo o que existia em 2021 necessariamente encolhe. Não é
   opinião sobre a banca — é aritmética do edital.
   --------------------------------------------------------------------- */
const COMPARACAO_2021_2026 = {
  fonteA: "Prova PC/AL 2021 (Agente) — contagem no caderno oficial",
  fonteB: "Peso de estudo 2026 — derivado das faixas de prioridade do Relatório Consolidado",
  nota: "O total de itens não mudou (50 + 70). Seis disciplinas novas entram, e as antigas cedem espaço.",
};

/* ---------------------------------------------------------------------
   PROCEDÊNCIA DOS ITENS DE PROVA REAL

   O DEFEITO. Os seis lotes de itens reais (84 a 89) declaram `concurso` e
   `ano` num objeto BASE espalhado por todos os itens do arquivo, e esse
   BASE foi copiado dos lotes inéditos: `concurso: "PCAL", ano: 2026`.

   Só que a procedência VARIA DENTRO DE CADA LOTE — o mesmo arquivo tem
   item de PC-DF 2021 e de PC-AL 2021 —, e nenhum desses itens é de 2026.
   Resultado: 131 itens reais afirmavam ser da PC-AL de 2026 enquanto o
   próprio `origem` dizia PC-DF 2021, PF 2025 ou PC-PE 2024.

   O QUE ISSO QUEBRAVA. `q.concurso` alimenta o filtro de procedência do
   Banco de Questões e do Simulado (`filtrarQuestoes`, js/engine.js).
   Filtrar por "Polícia Federal" não devolvia nenhum dos 30 itens reais da
   PF; filtrar por PC-AL devolvia 53 itens que são do Distrito Federal.
   `q.ano` não tem consumidor hoje, mas estava igualmente errado.

   POR QUE DERIVAR EM VEZ DE CORRIGIR À MÃO. `origem` é o campo
   autoritativo: é ele que registra o caderno de onde o item veio, e é
   conferido item a item na ingestão. Derivar dele mantém os dois campos
   corretos sozinhos quando entrar o próximo lote real — corrigir à mão os
   131 deixaria o mesmo erro pronto para voltar no lote 90. O validador
   confere a derivação e quebra o build se `origem` trouxer sigla nova.
   --------------------------------------------------------------------- */
const CONCURSO_POR_SIGLA = {
  "PC-AL": "PCAL",
  "PC-DF": "PCDF",
  "PF": "PF",
  "PRF": "PRF",
  /* Demais polícias civis estaduais entram no balde "PCE", que é como
     CONCURSOS as agrupa — não há id próprio por estado. */
  "PC-PE": "PCE",
  "PC-SE": "PCE",
};

const ORIGEM_PROVA_REAL_RE = /^CEBRASPE\s+(PC-[A-Z]{2}|PF|PRF)\s+(\d{4})/;

QUESTOES.forEach(q => {
  const m = ORIGEM_PROVA_REAL_RE.exec(q.origem || "");
  if (!m) return;
  const concurso = CONCURSO_POR_SIGLA[m[1]];
  if (concurso) q.concurso = concurso;
  q.ano = Number(m[2]);
});

if (typeof module !== "undefined" && module.exports) {
  module.exports = { INCIDENCIA_PCAL2021, COMPARACAO_2021_2026, CONCURSO_POR_SIGLA, ORIGEM_PROVA_REAL_RE };
}
