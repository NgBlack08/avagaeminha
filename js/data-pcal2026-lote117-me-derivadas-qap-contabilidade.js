/* =====================================================================
   QUESTLAB — Lote 117: MÚLTIPLA ESCOLHA DERIVADA DOS QAPs DE CONTABILIDADE

   MÉTODO E REGRAS: os dos lotes 98, 106 e 112. Cada item reúne quatro
   afirmativas I–IV que já existem no banco como itens CERTO/ERRADO dos
   lotes 113 a 116; o valor de verdade vem do gabarito do item de origem.
   Pares do mesmo ponto não foram juntados.

   15 itens de Contabilidade e Análise Financeira (CT-381 a CT-395).
   ===================================================================== */

const BASE117 = {
  concurso: "PCAL", cargo: ["Escrivão", "Agente"], ano: 2026,
  tipo: "ME", probReaparecer: 0.8,
  origem: "Autoral QuestLab — múltipla escolha derivada de itens C/E dos QAPs DSO já no banco (lotes 113 a 116); IDs de origem no subassunto",
};

const QUESTOES_PCAL_LOTE117 = [

  {
    ...BASE117,
    id: "CT-381", disciplina: "Contabilidade e Análise Financeira", assunto: "Conceitos contábeis",    subassunto: "Derivado de CT-088, CT-089, CT-091, CT-105 — objeto, aspectos e escolas",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos conceitos fundamentais da contabilidade, considere as seguintes afirmações:\n\nI. Julgue o item a seguir, relacionado a conceitos, objetivos e finalidades da contabilidade. As entidades com fins sociais, também denominadas instituições, estão fora do campo de aplicação da contabilidade.\nII. Julgue o item a seguir, relacionado a conceitos, objetivos e finalidades da contabilidade. São objetivos da contabilidade o estudo e o controle do patrimônio e de suas variações.\nIII. Julgue o item a seguir, relacionado a conceitos, objetivos e finalidades da contabilidade. A contabilidade exclui o estudo do patrimônio em seu aspecto qualitativo.\nIV. A concepção da contabilidade como ciência do patrimônio pertence à escola contábil patrimonialista.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "restricao-indevida", palavraChave: "patrimonialista",
    cognitivo: {
      motivo: "Revisar objeto, aspectos e escolas.",
      palavraCritica: "qualitativo",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I incorreta: o campo de aplicação alcança toda entidade com patrimônio, inclusive as sem fins lucrativos. Afirmativa II correta: estudar e controlar o patrimônio e suas variações são objetivos da contabilidade. Afirmativa III incorreta: o patrimônio é estudado nos aspectos qualitativo e quantitativo. Afirmativa IV correta: a concepção da contabilidade como ciência do patrimônio é da escola patrimonialista. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "Doutrina contábil.",
      macete: "Tem patrimônio, tem contabilidade.",
      erroComum: "Restringir campo e aspectos.",
      comoBancaPensa: "Mistura conceitos certos com restrições.",
    },
  },

  {
    ...BASE117,
    id: "CT-382", disciplina: "Contabilidade e Análise Financeira", assunto: "Regimes contábeis",    subassunto: "Derivado de CT-120, CT-124, CT-128, CT-129 — regimes de competência e de caixa",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "A respeito dos regimes contábeis, considere as seguintes afirmações:\n\nI. Julgue o item seguinte, relativos à escrituração contábil de fatos administrativos. O regime de escrituração no qual se considera o conjunto completo de eventos que afetam o resultado da entidade em dado exercício social é denominado regime de caixa.\nII. A respeito do regime de competência, julgue o item subsequente. O regime de competência permite o reconhecimento das despesas no momento em que ocorrem, independentemente do fluxo de caixa.\nIII. A respeito do regime de competência, julgue o item subsequente. O regime de competência proporciona uma visão fiel da situação patrimonial e do desempenho econômico da organização.\nIV. A respeito do regime de competência, julgue o item subsequente. O referido regime é aplicável somente a empresas de grande porte, não se aplicando às pequenas e médias empresas.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
    ],
    gabarito: "B", pegadinha: "troca-conceito", palavraChave: "regime de caixa",
    cognitivo: {
      motivo: "Revisar regimes de competência e de caixa.",
      palavraCritica: "competência",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I incorreta: o regime que considera todos os eventos que afetam o resultado é o de competência, e não o de caixa. Afirmativa II correta: na competência, a despesa é reconhecida quando incorrida. Afirmativa III correta: a competência dá visão mais fiel da posição e do desempenho. Afirmativa IV incorreta: a competência vale para todas as entidades, inclusive pequenas e médias. Resta(m) apenas as afirmativas II e III.",
      fundamento: "CPC 00 (R2), item 1.17; NBC TG 1000.",
      macete: "Competência: fato gerador, para todos.",
      erroComum: "Trocar os regimes.",
      comoBancaPensa: "Troca rótulos e restringe o alcance.",
    },
  },

  {
    ...BASE117,
    id: "CT-383", disciplina: "Contabilidade e Análise Financeira", assunto: "Contas contábeis",    subassunto: "Derivado de CT-138, CT-139, CT-141, CT-145 — natureza e classificação das contas",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Com relação às contas contábeis, considere as seguintes afirmações:\n\nI. Com base no plano de contas e nos procedimentos de escrituração contábil, julgue o item a seguir. As contas de receitas e despesas são classificadas como contas de resultado, assim como a conta de lucros acumulados.\nII. Com base no plano de contas e nos procedimentos de escrituração contábil, julgue o item a seguir. As contas redutoras apresentam natureza diversa das demais contas do grupo em que estão classificadas.\nIII. Julgue o item que se segue, à luz do plano de contas e dos procedimentos de escrituração. Os grupos patrimoniais ativo e passivo são compostos tanto por contas devedoras quanto por contas credoras.\nIV. A conta despesas antecipadas é conta de resultado, cuja função é registrar as despesas pagas, mas ainda não incorridas no período.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "lucros acumulados",
    cognitivo: {
      motivo: "Revisar natureza e classificação das contas.",
      palavraCritica: "retificadoras",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I incorreta: lucros acumulados é conta do patrimônio líquido, não de resultado. Afirmativa II correta: contas redutoras têm natureza oposta à do grupo. Afirmativa III correta: por causa das retificadoras, ativo e passivo têm contas devedoras e credoras. Afirmativa IV incorreta: despesas antecipadas são ativo, e não conta de resultado. Resta(m) apenas as afirmativas II e III.",
      fundamento: "Lei 6.404/1976, art. 178.",
      macete: "Retificadora: natureza oposta.",
      erroComum: "Classificar mal contas do PL e do ativo.",
      comoBancaPensa: "Troca grupos de contas.",
    },
  },

  {
    ...BASE117,
    id: "CT-384", disciplina: "Contabilidade e Análise Financeira", assunto: "Método das partidas dobradas",    subassunto: "Derivado de CT-155, CT-158, CT-160, CT-168 — história e funcionamento do método",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Sobre o método das partidas dobradas, considere as seguintes afirmações:\n\nI. Com relação ao objeto, aos objetivos, às técnicas e ao campo de aplicação da contabilidade, julgue o item a seguir. As partidas dobradas constituem-se em uma das técnicas da ciência contábil.\nII. Com relação ao método das partidas dobradas, julgue o item a seguir. O frei Luca Pacioli inventou o método das partidas dobradas e o registrou em seu tratado intitulado De Computis et Scripturis.\nIII. Com relação ao método das partidas dobradas, julgue o item a seguir. O método das partidas dobradas também é conhecido como método digráfico.\nIV. Com relação a escrituração, julgue o próximo item. Para vários créditos, é desnecessário que existam vários débitos, basta que os valores das aplicações e das fontes de recursos sejam exatamente iguais. Tal regra é denominada partida simples.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa I está correta.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas I, II e III estão corretas.",
    ],
    gabarito: "D", pegadinha: "troca-conceito", palavraChave: "Pacioli",
    cognitivo: {
      motivo: "Revisar história e funcionamento do método.",
      palavraCritica: "digráfico",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I incorreta: as partidas dobradas são método de escrituração, não técnica contábil. Afirmativa II incorreta: Luca Pacioli divulgou o método; não o inventou. Afirmativa III correta: o método também é chamado de digráfico. Afirmativa IV incorreta: um débito para vários créditos de mesmo total é lançamento de 2ª fórmula, ainda partida dobrada. Resta(m) apenas a afirmativa III.",
      fundamento: "Doutrina e história da contabilidade.",
      macete: "Pacioli divulgou; dobradas = digráfico.",
      erroComum: "Atribuir invenção a Pacioli.",
      comoBancaPensa: "Mistura história e técnica.",
    },
  },

  {
    ...BASE117,
    id: "CT-385", disciplina: "Contabilidade e Análise Financeira", assunto: "Despesas e receitas antecipadas",    subassunto: "Derivado de CT-191, CT-197, CT-206, CT-209 — antecipações e capital social",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Quanto a despesas antecipadas e ao capital social, considere as seguintes afirmações:\n\nI. Com base na Lei n.º 6.404/1976 e suas alterações, julgue o item a seguir. Os recursos aplicados em despesas do exercício seguinte são ativos cuja classificação no balanço patrimonial deve ser feita no grupo de contas denominado ativo circulante.\nII. Com relação ao conceito e aos critérios de avaliação de despesas antecipadas, julgue o item que se segue. Despesas antecipadas representam despesas já incorridas que são ativadas no balanço patrimonial para apropriação ao resultado em exercícios futuros.\nIII. Com relação ao tratamento contábil de itens do patrimônio líquido, julgue o item subsequente. Capital social é a diferença entre o total de investimentos e o total de fontes de recursos de terceiros aplicados nesses investimentos.\nIV. Julgue o item a seguir, relativo ao conceito e às especificidades do patrimônio líquido nas demonstrações financeiras. O aumento de capital mediante subscrição de novas ações deve ser contabilizado como receita operacional.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Apenas a afirmativa I está correta.",
    ],
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "capital social",
    cognitivo: {
      motivo: "Revisar antecipações e capital social.",
      palavraCritica: "não incorridos",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I correta: despesas do exercício seguinte vão ao ativo circulante (Lei 6.404, art. 179, I). Afirmativa II incorreta: despesas antecipadas são gastos pagos e ainda NÃO incorridos. Afirmativa III incorreta: a diferença entre ativo e passivo é o patrimônio líquido, não só o capital social. Afirmativa IV incorreta: aumento de capital por subscrição é transação com sócios, registrada no PL, e não receita. Resta(m) apenas a afirmativa I.",
      fundamento: "Lei 6.404/1976, arts. 179 e 182.",
      macete: "Despesa antecipada: paga, não incorrida.",
      erroComum: "Confundir PL com capital.",
      comoBancaPensa: "Troca conceitos vizinhos.",
    },
  },

  {
    ...BASE117,
    id: "CT-386", disciplina: "Contabilidade e Análise Financeira", assunto: "Operações diversas",    subassunto: "Derivado de CT-210, CT-212, CT-220, CT-256 — capital a integralizar, PECLD, adiantamentos e livros",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Com relação a operações contábeis diversas, considere as seguintes afirmações:\n\nI. O capital social a integralizar corresponde ao capital social subscrito menos o capital social integralizado.\nII. A baixa de duplicata incobrável cujo valor já foi integralmente coberto por perda estimada em créditos de liquidação duvidosa deve ser feita a débito de despesas com baixa de duplicatas incobráveis e a crédito de duplicatas a receber.\nIII. No momento em que recebe o pagamento de assinaturas para os próximos três anos, a revista deve debitar caixa e creditar uma conta de receita.\nIV. Julgue o item que se segue, à luz do plano de contas e dos procedimentos de escrituração. O livro diário é indispensável para a escrituração contábil, mas a entidade pode adotar tantos livros quantos considere necessários a essa atividade.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "troca-conceito", palavraChave: "liquidação duvidosa",
    cognitivo: {
      motivo: "Revisar capital a integralizar, PECLD, adiantamentos e livros.",
      palavraCritica: "indispensável",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I correta: capital a integralizar = subscrito − integralizado. Afirmativa II incorreta: crédito já coberto pela PECLD é baixado contra a própria PECLD, sem nova despesa. Afirmativa III incorreta: assinaturas recebidas antecipadamente geram passivo, não receita imediata. Afirmativa IV correta: o Diário é indispensável e a entidade pode adotar outros livros conforme a necessidade. Resta(m) apenas as afirmativas I e IV.",
      fundamento: "Lei 6.404/1976; CPC 48; CPC 47; CC, art. 1.180.",
      macete: "Baixa contra PECLD; antecipação é passivo.",
      erroComum: "Lançar despesa em dobro.",
      comoBancaPensa: "Mistura lançamentos.",
    },
  },

  {
    ...BASE117,
    id: "CT-387", disciplina: "Contabilidade e Análise Financeira", assunto: "Ativo imobilizado",    subassunto: "Derivado de CT-240, CT-248, CT-249, CT-251 — depreciação e livros contábeis",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da depreciação e dos livros contábeis, considere as seguintes afirmações:\n\nI. Se um bem de valor bruto de R$ 11.000, com valor residual de R$ 1.000, é depreciado a 10% ao ano, a depreciação segue o método da taxa constante.\nII. Julgue o item subsequente, relativo a depreciações, alterações e baixas de bem. No método de depreciação por quotas crescentes, considera-se o menor desgaste para um bem no começo de sua vida útil, e o maior desgaste desse bem, ao final deste período.\nIII. Por si só, o fato de um ativo ter se tornado ocioso justifica que a companhia aberta cesse a sua depreciação.\nIV. Julgue o item seguinte, relativos à escrituração contábil de fatos administrativos. O agrupamento racional de valores em contas de mesma natureza é encontrado no livro-razão, cuja adoção é facultativa.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "B", pegadinha: "troca-conceito", palavraChave: "ocioso",
    cognitivo: {
      motivo: "Revisar depreciação e livros contábeis.",
      palavraCritica: "quotas crescentes",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I correta: taxa fixa anual sobre o valor depreciável caracteriza o método linear (taxa constante). Afirmativa II correta: nas quotas crescentes, a depreciação é menor no início e maior no fim. Afirmativa III incorreta: a ociosidade não interrompe a depreciação (CPC 27, item 55). Afirmativa IV incorreta: o livro-razão é obrigatório para as empresas do lucro real; não é facultativo. Resta(m) apenas as afirmativas I e II.",
      fundamento: "CPC 27; legislação do IR.",
      macete: "Ocioso deprecia.",
      erroComum: "Parar a depreciação por ociosidade.",
      comoBancaPensa: "Mistura métodos e exceções.",
    },
  },

  {
    ...BASE117,
    id: "CT-388", disciplina: "Contabilidade e Análise Financeira", assunto: "Balanço patrimonial",    subassunto: "Derivado de CT-261, CT-265, CT-266, CT-270 — grupos do balanço",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Em relação ao balanço patrimonial, considere as seguintes afirmações:\n\nI. Com base na Lei n.º 6.404/1976 e suas alterações, julgue o item subsequente. É vedado às sociedades por ações transferir valores registrados na conta ajustes de avaliação patrimonial para contas de resultado do exercício.\nII. Acerca do ativo realizável a longo prazo e de sua mensuração, julgue o item seguinte. O ativo realizável a longo prazo tem, em essência, a mesma natureza do ativo circulante, diferenciando-se deste pelo prazo de realização.\nIII. Em relação à elaboração das demonstrações contábeis, julgue o item seguinte, considerando a legislação societária e a normatização contábil vigentes. No balanço patrimonial, os impostos diferidos ativos integram o grupo de ativos circulantes.\nIV. Se o ciclo operacional da companhia dura seis meses, suas obrigações são classificadas no passivo circulante quando vencerem no exercício social subsequente.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "impostos diferidos",
    cognitivo: {
      motivo: "Revisar grupos do balanço.",
      palavraCritica: "realizável a longo prazo",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I incorreta: os ajustes de avaliação patrimonial vão ao resultado quando realizados; a transferência não é vedada. Afirmativa II correta: o realizável a longo prazo tem a natureza do circulante e difere pelo prazo. Afirmativa III incorreta: impostos diferidos ativos não ficam no circulante. Afirmativa IV correta: com ciclo operacional menor que o exercício, vale o critério do exercício seguinte. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "Lei 6.404/1976, arts. 179 a 182; CPC 26.",
      macete: "Diferidos: não circulante.",
      erroComum: "Pôr diferidos no circulante.",
      comoBancaPensa: "Mistura grupos.",
    },
  },

  {
    ...BASE117,
    id: "CT-389", disciplina: "Contabilidade e Análise Financeira", assunto: "Demonstração do Resultado",    subassunto: "Derivado de CT-279, CT-282, CT-284, CT-285 — estrutura da DRE",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "A respeito da demonstração do resultado do exercício, considere as seguintes afirmações:\n\nI. Em relação à contabilização dos tributos incidentes nas operações de empresas, julgue o item seguinte. O ICMS sobre vendas deve ser reconhecido como despesa operacional da empresa.\nII. Em relação ao balanço patrimonial e à demonstração de resultado do exercício (DRE), julgue o item a seguir. A DRE é uma demonstração dinâmica que relata, de forma dedutiva, como o resultado do exercício foi obtido.\nIII. Segundo as Normas Brasileiras de Contabilidade, a DRE deve apresentar os resultados das operações em continuidade, deixando de evidenciar as operações descontinuadas.\nIV. Na empresa comercial, o custo das mercadorias vendidas é deduzido das receitas líquidas para obter o lucro bruto do período.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "D", pegadinha: "troca-conceito", palavraChave: "operações descontinuadas",
    cognitivo: {
      motivo: "Revisar estrutura da DRE.",
      palavraCritica: "dinâmica",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I incorreta: ICMS sobre vendas é dedução da receita bruta, não despesa operacional. Afirmativa II correta: a DRE é demonstração dinâmica e dedutiva. Afirmativa III incorreta: as operações descontinuadas são evidenciadas em linha própria. Afirmativa IV correta: receita líquida − CMV = lucro bruto. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "Lei 6.404/1976, art. 187; CPC 26; CPC 31.",
      macete: "ICMS de venda: dedução.",
      erroComum: "Omitir descontinuadas.",
      comoBancaPensa: "Mistura linhas da DRE.",
    },
  },

  {
    ...BASE117,
    id: "CT-390", disciplina: "Contabilidade e Análise Financeira", assunto: "Estoques",    subassunto: "Derivado de CT-290, CT-291, CT-294, CT-298 — mensuração e custo dos estoques",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Com base no CPC 16 (Estoques), considere as seguintes afirmações:\n\nI. Segundo o CPC 16, quando o valor realizável líquido de um estoque fica abaixo do seu custo, a entidade deve ajustar o estoque ao valor realizável líquido, reconhecendo a perda.\nII. Julgue o próximo item à luz dos pronunciamentos técnicos do CPC. Os custos dos estoques produzidos por uma entidade não devem contemplar quaisquer espécies de gasto que decorram do desperdício de materiais, de mão de obra ou de outros insumos de produção.\nIII. Para mitigar o risco de superavaliação de estoques, é adequado capitalizar despesas de venda, publicidade e comissões no custo dos estoques.\nIV. Julgue o item a seguir, a respeito do conceito, da classificação e dos critérios de avaliação de estoques. Em uma revenda de automóveis, um critério adequado de avaliação de um item em estoque é o custo específico desse item.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
    ],
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "desperdício",
    cognitivo: {
      motivo: "Revisar mensuração e custo dos estoques.",
      palavraCritica: "valor realizável líquido",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I correta: estoque com VRL abaixo do custo é ajustado ao VRL, com reconhecimento de perda. Afirmativa II incorreta: só desperdícios anormais saem do custo; os normais o integram. Afirmativa III incorreta: despesas de venda não entram no custo dos estoques. Afirmativa IV correta: itens não intercambiáveis usam custo específico. Resta(m) apenas as afirmativas I e IV.",
      fundamento: "CPC 16, itens 9, 15, 16 e 23.",
      macete: "Menor entre custo e VRL.",
      erroComum: "Excluir todo desperdício.",
      comoBancaPensa: "Generaliza exclusões.",
    },
  },

  {
    ...BASE117,
    id: "CT-391", disciplina: "Contabilidade e Análise Financeira", assunto: "Análise de demonstrações contábeis",    subassunto: "Derivado de CT-310, CT-311, CT-315, CT-316 — indicadores de liquidez e rentabilidade",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos indicadores econômico-financeiros, considere as seguintes afirmações:\n\nI. A liquidez imediata é o indicador mais restritivo de capacidade de pagamento de curto prazo, porque relaciona apenas as disponibilidades ao passivo circulante.\nII. A liquidez geral mede apenas a capacidade de pagamento imediata da entidade, relacionando o disponível às obrigações de curto prazo.\nIII. O retorno sobre o patrimônio líquido (ROE) mede a capacidade de gerar retorno sobre todos os recursos aplicados no ativo.\nIV. Empresas com o mesmo lucro líquido podem ter rentabilidades diferentes, porque o retorno se mede em relação aos recursos empregados para gerar o lucro.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas a afirmativa I está correta.",
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "troca-conceito", palavraChave: "ROE",
    cognitivo: {
      motivo: "Revisar indicadores de liquidez e rentabilidade.",
      palavraCritica: "disponibilidades",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I correta: a liquidez imediata considera só as disponibilidades. Afirmativa II incorreta: a liquidez geral abrange curto e longo prazo; não é medida de pagamento imediato. Afirmativa III incorreta: retorno sobre todo o ativo é o ROA; o ROE usa o PL. Afirmativa IV correta: mesmo lucro com recursos diferentes gera rentabilidades diferentes. Resta(m) apenas as afirmativas I e IV.",
      fundamento: "Doutrina de análise.",
      macete: "Imediata: disponível; ROE: PL.",
      erroComum: "Trocar índices.",
      comoBancaPensa: "Troca definições.",
    },
  },

  {
    ...BASE117,
    id: "CT-392", disciplina: "Contabilidade e Análise Financeira", assunto: "Gestão de riscos financeiros",    subassunto: "Derivado de CT-319, CT-321, CT-324, CT-330 — tipos e tratamento de riscos",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Sobre a gestão de riscos financeiros, considere as seguintes afirmações:\n\nI. Constatar que as vendas a prazo de uma entidade se concentram em poucos clientes basta para concluir que ela já sofreu perda por risco de crédito.\nII. A inadimplência de clientes pode manifestar o risco de crédito e, ao mesmo tempo, agravar o risco de liquidez da entidade.\nIII. A diversificação da carteira de clientes reduz a exposição ao risco de crédito decorrente da concentração de vendas, sem que isso implique eliminação integral desse risco.\nIV. Perda decorrente do cadastramento incorreto dos dados bancários de um fornecedor deve ser classificada como risco de mercado, por produzir consequência financeira.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "B", pegadinha: "troca-conceito", palavraChave: "risco de mercado",
    cognitivo: {
      motivo: "Revisar tipos e tratamento de riscos.",
      palavraCritica: "diversificação",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I incorreta: concentração de clientes é exposição, não prova de perda. Afirmativa II correta: a inadimplência manifesta risco de crédito e pode agravar o de liquidez. Afirmativa III correta: diversificar clientes reduz o risco de crédito sem eliminá-lo. Afirmativa IV incorreta: erro de cadastro é risco operacional, não de mercado. Resta(m) apenas as afirmativas II e III.",
      fundamento: "Doutrina de gestão de riscos.",
      macete: "Exposição ≠ perda; falha de processo = operacional.",
      erroComum: "Classificar pelo efeito.",
      comoBancaPensa: "Troca tipos de risco.",
    },
  },

  {
    ...BASE117,
    id: "CT-393", disciplina: "Contabilidade e Análise Financeira", assunto: "Orçamento empresarial",    subassunto: "Derivado de CT-335, CT-337, CT-338, CT-342 — modalidades e controle orçamentário",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "A respeito do orçamento empresarial, considere as seguintes afirmações:\n\nI. Na preparação do orçamento, a inflação estimada para o próximo ano é uma meta da empresa, e o crescimento de vendas que a administração pretende alcançar é uma premissa externa.\nII. Manter um horizonte de doze meses, incluindo um novo mês ao fim de cada mês encerrado, caracteriza o orçamento contínuo, ainda que se atualizem as estimativas dos meses remanescentes.\nIII. Gasto realizado abaixo do orçado comprova eficiência da gestão, mesmo quando decorre da não execução de atividades previstas.\nIV. O orçamento elaborado a partir dos gastos do ano anterior, com ajustes distintos por inflação, demanda e mudanças operacionais, é incremental e admite valores inferiores à base quando as condições justificarem.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
    ],
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "orçamento contínuo",
    cognitivo: {
      motivo: "Revisar modalidades e controle orçamentário.",
      palavraCritica: "incremental",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I incorreta: inflação estimada é premissa; crescimento pretendido é meta. Afirmativa II correta: renovar o horizonte a cada mês caracteriza o orçamento contínuo. Afirmativa III incorreta: economia por não execução de atividades não é eficiência. Afirmativa IV correta: o orçamento incremental parte da base histórica e admite reduções. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "Doutrina de orçamento.",
      macete: "Premissa: ambiente; meta: objetivo.",
      erroComum: "Inverter meta e premissa.",
      comoBancaPensa: "Troca conceitos.",
    },
  },

  {
    ...BASE117,
    id: "CT-394", disciplina: "Contabilidade e Análise Financeira", assunto: "Contabilidade e crimes tributários",    subassunto: "Derivado de CT-351, CT-352, CT-356, CT-359 — fraude, erro e planejamento",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Considerando a relação entre contabilidade e crimes contra a ordem tributária, considere as seguintes afirmações:\n\nI. Identificar erro ou inconsistência nos registros contábeis caracteriza fraude tributária, porque escrituração incorreta implica necessariamente tentativa de reduzir ou suprimir tributos.\nII. A omissão de informações ou a prestação de declarações falsas às autoridades fazendárias, com a finalidade de suprimir ou reduzir tributos, pode configurar crime contra a ordem tributária.\nIII. Toda redução da carga tributária obtida por uma entidade caracteriza fraude contra a ordem tributária, independentemente dos meios empregados.\nIV. A falta de registro contábil de vendas efetivamente realizadas, também desacompanhadas de documento fiscal, pode fazer as demonstrações não refletirem a realidade econômica e indicar ocultação de receitas.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "D", pegadinha: "generalizacao", palavraChave: "redução da carga tributária",
    cognitivo: {
      motivo: "Revisar fraude, erro e planejamento.",
      palavraCritica: "declarações falsas",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I incorreta: erro contábil não é necessariamente fraude; falta o dolo. Afirmativa II correta: omissão ou declaração falsa para suprimir tributo é conduta da Lei 8.137, art. 1º, I. Afirmativa III incorreta: redução de tributo por meios lícitos é planejamento, não crime. Afirmativa IV correta: vendas sem nota e sem registro podem indicar ocultação de receitas. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "Lei 8.137/1990, art. 1º.",
      macete: "Elisão lícita; evasão ilícita.",
      erroComum: "Igualar erro e fraude.",
      comoBancaPensa: "Generaliza a criminalização.",
    },
  },

  {
    ...BASE117,
    id: "CT-395", disciplina: "Contabilidade e Análise Financeira", assunto: "Conciliações contábeis",    subassunto: "Derivado de CT-371, CT-375, CT-376, CT-377 — conciliações e divergências",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Quanto às conciliações contábeis, considere as seguintes afirmações:\n\nI. A rotina mensal de confrontar os extratos bancários com os lançamentos contábeis, para identificar divergências, pendências e erros de classificação, é a conciliação bancária.\nII. Se a conciliação da conta fornecedores revela nota fiscal de compra registrada no controle de compras e ausente na contabilidade, há indício principal de superavaliação das despesas operacionais do período.\nIII. Mercadoria registrada na contabilidade e não localizada no inventário físico indica, necessariamente, fraude praticada por empregados da entidade.\nIV. A conciliação que revela ICMS escriturado nos livros fiscais acima do reconhecido na contabilidade tem como objetivo principal identificar inconsistências entre os controles fiscais e os registros contábeis.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa I está correta.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
    ],
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "conciliação bancária",
    cognitivo: {
      motivo: "Revisar conciliações e divergências.",
      palavraCritica: "subavaliação",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I correta: confrontar extrato e razão é a conciliação bancária. Afirmativa II incorreta: nota fiscal não contabilizada indica passivo subavaliado, não despesas superavaliadas. Afirmativa III incorreta: estoque registrado e não encontrado é divergência a investigar, não fraude certa. Afirmativa IV correta: a conciliação fiscal identifica inconsistências entre livros fiscais e contabilidade. Resta(m) apenas as afirmativas I e IV.",
      fundamento: "Doutrina de controle interno.",
      macete: "Divergência: investigar.",
      erroComum: "Concluir por fraude.",
      comoBancaPensa: "Usa conclusões absolutas.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE117);
