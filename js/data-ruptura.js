/* =====================================================================
   QUESTLAB — PONTOS DE RUPTURA, HEURÍSTICAS REJEITADAS E VIGÊNCIA

   Origem: Relatório Consolidado CEBRASPE — PC/AL 2026 (fases 1–25),
   estudo do usuário sobre o histórico de provas policiais da banca.

   POR QUE ESTE MÓDULO EXISTE

   O banco já classificava CADA questão por DOIS eixos:
     - `pegadinha`  — COMO o item foi falseado (troca-conceito, termo
                      absoluto, literalidade…). É o DNA_BANCA.
     - `palavraChave` + `cognitivo.palavraCritica` — QUAL palavra
                      carrega a ruptura. É a "variável crítica" do
                      relatório, que já estava implementada sob outro nome.

   Faltava o terceiro eixo, e é o que o relatório acrescenta: QUAL
   ELEMENTO da proposição foi alterado — competência, sujeito, prazo,
   requisito, consequência, limiar. Dois itens com a mesma `pegadinha`
   podem romper em elementos completamente diferentes, e é o elemento
   que diz ONDE OLHAR na hora de resolver.

   Exemplo do próprio banco: DA-080 e DC-123 são ambos "troca-conceito",
   mas DA-080 rompe em COMPETÊNCIA (excesso x desvio de poder) e DC-123
   rompe em CONFUSÃO CONCEITUAL entre institutos vizinhos. O aluno que
   erra os dois erra por motivos diferentes.

   ===================================================================== */

/* ---------------------------------------------------------------------
   1. PONTOS DE RUPTURA (R1–R12)

   Cada um traz a PERGUNTA que o detecta — é assim que vira ferramenta de
   resolução, e não mais uma taxonomia para decorar.
   --------------------------------------------------------------------- */

const PONTOS_RUPTURA = [
  {
    cod: "R1", nome: "Competência",
    pergunta: "Quem tem atribuição para isso?",
    desc: "O item descreve corretamente o ato e desloca o órgão ou a esfera competente.",
    escopo: ["Direito Constitucional", "Processo Penal", "Legislação Institucional (AL)"],
    exemplo: "PP-112",
  },
  {
    cod: "R2", nome: "Sujeito / legitimidade",
    pergunta: "Quem pode praticar ou provocar o ato?",
    desc: "Troca o legitimado: quem requer, quem requisita, quem decide, quem responde.",
    escopo: ["Processo Penal", "Direito Administrativo", "Legislação Institucional (AL)"],
    exemplo: "PP-104",
  },
  {
    cod: "R3", nome: "Confusão conceitual",
    pergunta: "É exatamente este instituto ou um vizinho dele?",
    desc: "Define corretamente um conceito e o batiza com o nome de outro.",
    escopo: ["Direito Penal", "Direito Administrativo", "Processo Penal"],
    exemplo: "DA-088",
  },
  {
    cod: "R4", nome: "Regra / exceção",
    pergunta: "A norma tem exceção, e o item a respeita?",
    desc: "Enuncia a regra e ignora a ressalva, ou converte a exceção em regra.",
    escopo: ["todas as áreas jurídicas"],
    exemplo: "LE-303",
  },
  {
    cod: "R5", nome: "Generalização / restrição",
    pergunta: "A palavra mudou o alcance da norma?",
    desc: "Amplia o que a norma restringe, ou restringe o que ela permite em geral.",
    escopo: ["Direito Constitucional", "Direito Administrativo", "Legislação Especial"],
    exemplo: "DC-121",
  },
  {
    cod: "R6", nome: "Consequência jurídica",
    pergunta: "Com qual efeito? A sanção e o resultado estão certos?",
    desc: "Acerta a hipótese e erra o efeito: pena, nulidade, prazo, extinção.",
    escopo: ["Direito Penal", "Processo Penal", "Direito Administrativo"],
    exemplo: "DP-129",
  },
  {
    cod: "R7", nome: "Via administrativa / judicial",
    pergunta: "Precisa de decisão judicial ou a via administrativa basta?",
    desc: "Exige autorização do juiz onde ela é dispensada, ou dispensa onde é exigida.",
    escopo: ["Direito Administrativo", "Direito Constitucional"],
    exemplo: "DA-083",
  },
  {
    cod: "R8", nome: "Tempo / prazo",
    pergunta: "Quando? Qual o termo inicial e o final?",
    desc: "Altera prazo, marco temporal ou período de aplicação da norma.",
    escopo: ["Direito Penal", "Processo Penal", "Direito Administrativo"],
    exemplo: "DP-132",
  },
  {
    cod: "R9", nome: "Requisito",
    pergunta: "Quais são os pressupostos, e o item inventou ou suprimiu algum?",
    desc: "Acrescenta condição que a norma não impõe, ou apaga requisito essencial.",
    escopo: ["Legislação Institucional (AL)", "Direito Administrativo", "Processo Penal"],
    exemplo: "LI-154",
  },
  {
    cod: "R10", nome: "Instituto × instituto próximo",
    pergunta: "Os dois institutos se parecem — qual deles o caso preenche?",
    desc: "Explora a fronteira entre figuras vizinhas que compartilham elementos.",
    escopo: ["Direito Penal", "Processo Penal", "Direito Administrativo"],
    exemplo: "DP-121",
  },
  {
    cod: "R11", nome: "Quantificação / limiar",
    pergunta: "O número, a operação e o limiar estão corretos?",
    desc: "Mantém o raciocínio e altera valor, fórmula, denominador ou comparação.",
    escopo: ["Raciocínio Lógico-Matemático", "Estatística", "Contabilidade e Análise Financeira"],
    exemplo: "ES-144",
  },
  {
    cod: "R12", nome: "Atributo técnico",
    pergunta: "A característica técnica descrita pertence mesmo a esse objeto?",
    desc: "Conceito correto com atributo errado: tamanho, protocolo, propriedade, cor.",
    escopo: ["TI e Segurança Cibernética", "Crimes Cibernéticos e Segurança Digital"],
    exemplo: "TI-240",
  },
];

/* Correspondência entre os dois eixos. NÃO é regra de dedução — é o
   ponto de ruptura que a banca MAIS costuma usar com cada pegadinha.
   Serve para sugerir por onde começar a checagem, nunca para dispensar
   a classificação própria do item. */
const RUPTURA_POR_PEGADINHA = {
  "termo-absoluto":       ["R5", "R4"],
  "restricao-indevida":   ["R5", "R4"],
  "troca-conceito":       ["R3", "R10"],
  "exigencia-inexistente":["R9", "R4"],
  "literalidade":         ["R9", "R8"],
  "verdade-mais-falso":   ["R6", "R3"],
  "troca-numerica":       ["R11", "R8"],
  "juris-mais-lei":       ["R6", "R4"],
  "generalizacao":        ["R5", "R4"],
  "troca-sujeito":        ["R2", "R1"],
  "negacao-dupla":        ["R5", "R11"],
  "juris-inventada":      ["R6", "R3"],
};

/* ---------------------------------------------------------------------
   2. CHECKLIST UNIVERSAL

   O protocolo de resolução do relatório, na ordem em que se aplica.
   A oitava pergunta é deliberadamente a última: o padrão entra depois
   da decisão técnica, como conferência, nunca antes dela.
   --------------------------------------------------------------------- */

const CHECKLIST_RESOLUCAO = [
  { p: "Quem?",                        para: "Sujeito, competência, legitimidade.",        rup: ["R1", "R2"] },
  { p: "O quê?",                       para: "Objeto, instituto, conceito central.",       rup: ["R3", "R10"] },
  { p: "Quando?",                      para: "Prazo, termo inicial, termo final.",         rup: ["R8"] },
  { p: "Em que condição?",             para: "Requisitos, exceções, pressupostos.",        rup: ["R9", "R4"] },
  { p: "Com qual efeito?",             para: "Consequência, sanção, resultado.",           rup: ["R6", "R7"] },
  { p: "Existe exceção?",              para: "Evitar generalização indevida.",             rup: ["R4", "R5"] },
  { p: "É exatamente este instituto?", para: "Evitar confusão com figura vizinha.",        rup: ["R3", "R10"] },
  { p: "A palavra mudou o alcance?",   para: "Conferir o qualificador — sem tratá-lo como pista de gabarito.", rup: ["R5", "R11", "R12"] },
];

/* ---------------------------------------------------------------------
   3. HEURÍSTICAS REJEITADAS

   O relatório lista as heurísticas que NÃO se sustentam. Onde o QuestLab
   tem medição própria, ela está registrada aqui — a rejeição vale mais
   com o número do que sem ele, e o número é auditável.

   `medicao` = o que ESTE sistema mediu, com o corpus indicado.
   `usoPermitido` = o que ainda se pode fazer com a observação.
   --------------------------------------------------------------------- */

const HEURISTICAS_REJEITADAS = [
  {
    id: "sequencia-alterna",
    heuristica: "\"Depois de vários CERTO vem ERRADO\"",
    status: "REJEITADA",
    medicao: "Em 156 itens com JUSTIFICATIVA oficial da banca (PC-DF 2021, só trechos consecutivos sem lacuna): P(C|anterior C) = 42,0% contra P(C|anterior E) = 54,5%. A diferença de −12,5pp tem p = 0,173 em 50 mil permutações — não sobrevive ao acaso.",
    ressalva: "Uma primeira medição com 5.371 gabaritos lidos de tabela deu −15,5pp com p = 0,000. Era artefato: a leitura da tabela erra ~7%, aferido contra as justificativas oficiais. O número grande vinha do defeito, não da banca.",
    usoPermitido: "Nenhum. A resposta anterior não informa nada sobre a seguinte.",
  },
  {
    id: "compensacao-ce",
    heuristica: "\"A banca precisa equilibrar CERTO e ERRADO no caderno\"",
    status: "REJEITADA",
    medicao: "2.474 gabaritos oficiais: 49,2% ERRADO. Fica perto de 50/50 sem que isso decorra de compensação dentro do caderno — a taxa global ser equilibrada não implica que o próximo item corrija o anterior.",
    ressalva: "",
    usoPermitido: "Nenhum para decidir um item. Serve só para calibrar o banco de treino.",
  },
  {
    id: "absoluto-errado",
    heuristica: "\"Palavra absoluta (sempre, nunca, somente) = ERRADO\"",
    status: "REJEITADA COMO DECISÃO",
    medicao: "292 itens policiais reais: termos absolutos aparecem em 11,0%; %ERRADO de 56,3 com eles contra 50,0 sem. Diferença de +6,3pp com IC 95% de −12,0 a +24,5pp — o intervalo cruza o zero com folga.",
    ressalva: "O banco tem itens em que o termo absoluto é VERDADEIRO por escolha do legislador: DA-087 (\"somente contra o Estado\", tese da dupla garantia) e DH-218 (\"não poderá restabelecê-la\", vedação do retrocesso).",
    usoPermitido: "Alerta para conferir o ALCANCE da norma. Nunca para marcar.",
  },
  {
    id: "longo-errado",
    heuristica: "\"Item longo = ERRADO\"",
    status: "NÃO VALIDADA",
    medicao: "Regra cega de comprimento + termo absoluto, testada em 292 itens policiais reais: ganho de −1,1pp sobre o chute puro; em segunda rodada independente, +1,7pp contra mediana do acaso de 2,1pp (p = 0,644). Fica no nível do acaso ou abaixo.",
    ressalva: "No BANCO a mesma regra cega acerta bem acima do acaso — é reflexo de autoria, não da banca, e o validador monitora esse vazamento a cada lote.",
    usoPermitido: "Nenhum na prova. No banco, serve de alarme de qualidade de autoria.",
  },
  {
    id: "numerico-errado",
    heuristica: "\"Item com número = ERRADO\"",
    status: "REJEITADA",
    medicao: "Sem evidência no corpus. Itens numéricos corretos são abundantes: ES-145 ((b−a)²/12), CT-080 (equação patrimonial), RL-049 (10⁸).",
    ressalva: "",
    usoPermitido: "Nenhum. Resolver o cálculo.",
  },
  {
    id: "dificil-errado",
    heuristica: "\"Questão difícil = ERRADO\"",
    status: "REJEITADA",
    medicao: "Não há associação entre dificuldade percebida e gabarito no corpus analisado.",
    ressalva: "",
    usoPermitido: "Nenhum.",
  },
  {
    id: "competencia-errado",
    heuristica: "\"Item que fala de competência = ERRADO\"",
    status: "NÃO VALIDADA",
    medicao: "Taxa de ERRADO de ~61% em amostra exploratória do relatório, sem validação fora da amostra. Associação promissora que NÃO se sustentou como preditor autônomo.",
    ressalva: "É exatamente o ponto de ruptura R1 — o valor está em olhar para lá, não em concluir a partir de lá.",
    usoPermitido: "Alerta de verificação (R1). Nunca decisão.",
  },
  {
    id: "temporalidade-errado",
    heuristica: "\"Item que fala de prazo = ERRADO\"",
    status: "NÃO VALIDADA",
    medicao: "Mesmo padrão da competência: ~61% na amostra exploratória, sem poder preditivo fora dela.",
    ressalva: "Corresponde ao ponto de ruptura R8.",
    usoPermitido: "Alerta de verificação (R8). Nunca decisão.",
  },
];

/* A regra que governa todas as anteriores. */
const REGRA_DE_OURO = {
  texto: "CONHECIMENTO TÉCNICO acima de PADRÃO ESTATÍSTICO.",
  detalhe: "O padrão orienta a atenção e localiza o ponto de ruptura; não substitui a lei, a Constituição, a jurisprudência nem o conteúdo técnico. Havendo conflito entre o que o padrão sugere e o que a norma diz, prevalece a norma — e o conflito deve ser registrado.",
};

/* ---------------------------------------------------------------------
   4. VIGÊNCIA NORMATIVA

   Questão de prova antiga não é resposta jurídica atual. O edital PC-AL
   2026 fixa como referência a legislação vigente na data da primeira
   publicação (2 de julho de 2026) e a jurisprudência dos tribunais
   superiores publicada até lá.

   Regra do usuário, já aplicada nos lotes: em conflito entre normas,
   prevalece a mais recente, e a resolução deve dizer isso expressamente.
   --------------------------------------------------------------------- */

const DATA_CORTE_PCAL2026 = "2026-07-02";

const VIGENCIA_STATUS = [
  { id: "vigente",  rotulo: "Vigente",                 ico: "✔", desc: "A base normativa da questão continua em vigor na data de corte do edital." },
  { id: "alterada", rotulo: "Norma alterada",           ico: "✎", desc: "O dispositivo mudou depois da prova de origem; a resolução responde pela redação ATUAL e explica a mudança." },
  { id: "revogada", rotulo: "Norma revogada",           ico: "✖", desc: "O dispositivo original não existe mais; a questão só permanece como contraste histórico." },
  { id: "superada", rotulo: "Jurisprudência superada",  ico: "⟳", desc: "O entendimento da época foi alterado por decisão posterior dos tribunais superiores." },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    PONTOS_RUPTURA, RUPTURA_POR_PEGADINHA, CHECKLIST_RESOLUCAO,
    HEURISTICAS_REJEITADAS, REGRA_DE_OURO, VIGENCIA_STATUS, DATA_CORTE_PCAL2026,
  };
}
