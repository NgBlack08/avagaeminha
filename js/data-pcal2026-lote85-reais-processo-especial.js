/* =====================================================================
   QUESTLAB — Lote 85: PROCESSO PENAL E LEGISLAÇÃO ESPECIAL,
   ITENS DE PROVA REAL

   Mesma procedência e mesmo método do lote 84: enunciados de provas
   aplicadas da CEBRASPE em carreiras policiais, resoluções escritas do
   zero contra a fonte normativa, gabaritos reconferidos um a um.

   UMA CORREÇÃO DE GABARITO — LE-301

   O compilado de origem marcava CERTO o item da Lei de Migração sobre
   prisão cautelar para extradição. Está ERRADO, e a prova disso é o
   próprio texto legal: o art. 84, § 2º, da Lei 13.445/2017 autoriza a
   transmissão do pedido pelo canal da INTERPOL SEM condicioná-la a
   tratado. O enunciado insere a condição "desde que exista disposição
   específica em tratado", que a lei não faz — e que ela contradiz, ao
   prever expressamente o caminho da promessa de reciprocidade para o
   caso de AUSÊNCIA de tratado. O comentário do material chegava a citar
   "art. 82, § 2º", artigo que trata de outra coisa.

   O item entra com gabarito E e a resolução explica a armadilha, que é
   das mais rentáveis da banca: pegar uma faculdade legal e transformá-la
   em faculdade condicionada.

   ITENS COM GABARITO CONFERIDO NO CADERNO OFICIAL (justificativa da
   própria banca): PP-106, PP-108, PP-112, PP-113.

   FORA DO EDITAL. LE-298 (improbidade administrativa) é item real e bom,
   mas improbidade não consta do edital PC-AL 2026 — entra marcado como
   foraEdital, seguindo o que já foi feito no lote 25, para aparecer em
   revisão ampla sem poluir a trilha.

   Gabarito: 16 CERTO / 6 ERRADO — desequilíbrio herdado do material de
   origem, não escolha de autoria.
   ===================================================================== */

const CARGOS85 = ["Escrivão", "Agente"];
const BASE85_PP = {
  concurso: "PCAL", cargo: CARGOS85, ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  disciplina: "Processo Penal",
};
const BASE85_LE = {
  concurso: "PCAL", cargo: CARGOS85, ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  disciplina: "Legislação Especial",
};

const QUESTOES_PCAL_LOTE85 = [

  /* ================= INQUÉRITO POLICIAL ================= */

  {
    ...BASE85_PP,
    id: "PP-104", assunto: "Inquérito policial",
    subassunto: "Instauração na ação penal privada — art. 5º, § 5º",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CPP, art. 5º, § 5º)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "Em se tratando de crime de ação privada, o inquérito poderá ser instaurado por requisição do Ministério Público.",
    gabarito: "E",
    pegadinha: "troca-sujeito",
    palavraChave: "requisição do Ministério Público",
    cognitivo: {
      motivo: "Na ação privada, a iniciativa é monopólio do ofendido — nem o MP nem o juiz podem provocar o inquérito.",
      palavraCritica: "requisição",
    },
    comentario: {
      resolucao: "ERRADO. O art. 5º, § 5º, do CPP é expresso: nos crimes de ação privada, a autoridade policial somente poderá proceder a inquérito A REQUERIMENTO de quem tenha qualidade para intentá-la. A requisição do Ministério Público, prevista no § 2º, vale para a ação pública. A lógica é a da titularidade: se o ofendido é o dono da ação, ele decide se a máquina investigativa se move; permitir que o MP a acionasse esvaziaria essa escolha. Note também a diferença de força entre os termos — requerimento é pedido, e pode ser indeferido, com recurso ao chefe de polícia (art. 5º, § 2º); requisição é ordem.",
      fundamento: "CPP, art. 5º, §§ 2º e 5º.",
      macete: "Ação privada: só o ofendido abre a porta.",
      erroComum: "Achar que o MP, por ser fiscal da lei, pode requisitar inquérito em qualquer crime.",
      comoBancaPensa: "Troca o legitimado, mantendo todo o resto do enunciado correto.",
    },
  },

  {
    ...BASE85_PP,
    id: "PP-105", assunto: "Inquérito policial",
    subassunto: "Iniciativa a requerimento do ofendido na ação pública",
    origem: "CEBRASPE PF 2025 (Escrivão) — gabarito revisado na fonte normativa (CPP, art. 5º, II)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "O inquérito policial poderá ser iniciado mediante requerimento do ofendido, mesmo nos crimes de ação pública incondicionada.",
    gabarito: "C",
    pegadinha: "restricao-indevida",
    palavraChave: "mesmo nos crimes de ação pública incondicionada",
    cognitivo: {
      motivo: "Par invertido com PP-104: o requerimento do ofendido cabe na ação pública, o que não cabe é a requisição do MP na privada.",
      palavraCritica: "mesmo",
    },
    comentario: {
      resolucao: "CERTO. O art. 5º, II, do CPP prevê que, nos crimes de ação pública, o inquérito é iniciado a requerimento do ofendido ou de quem tenha qualidade para representá-lo — ao lado das outras portas de entrada: de ofício (inciso I), por requisição da autoridade judiciária ou do MP e mediante representação (§§ 2º e 4º). Ser incondicionada significa que o MP não depende de autorização da vítima para denunciar; não significa que a vítima esteja proibida de provocar a investigação. As duas coisas convivem, e é exatamente essa convivência que o item testa.",
      fundamento: "CPP, art. 5º, I e II.",
      macete: "Incondicionada = o MP não precisa da vítima. Não = a vítima não pode pedir.",
      erroComum: "Ler 'incondicionada' como se excluísse qualquer iniciativa do ofendido.",
      comoBancaPensa: "Usa 'mesmo' para sinalizar uma exceção que o candidato tende a rejeitar por reflexo.",
    },
  },

  {
    ...BASE85_PP,
    id: "PP-106", assunto: "Inquérito policial",
    subassunto: "Valor probatório dos elementos informativos — art. 155",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito conferido no caderno oficial",
    dificuldade: 3, tempoIdealSeg: 100,
    enunciado: "Os elementos informativos do inquérito podem servir como fundamentação em decreto condenatório no processo penal, ainda que não confirmados pelo contraditório judicial.",
    gabarito: "C",
    pegadinha: "restricao-indevida",
    palavraChave: "podem servir como fundamentação",
    cognitivo: {
      motivo: "O art. 155 veda a fundamentação EXCLUSIVA, não a utilização conjunta — e o enunciado não diz 'exclusivamente'.",
      palavraCritica: "ainda que não confirmados",
    },
    comentario: {
      resolucao: "CERTO. O art. 155 do CPP proíbe ao juiz fundamentar a decisão EXCLUSIVAMENTE nos elementos informativos colhidos na investigação — a palavra 'exclusivamente' é o núcleo da regra. Havendo prova produzida em contraditório judicial, os elementos do inquérito podem compô-la e corroborá-la, e é isso que o enunciado afirma. Leia o item com cuidado: ele não diz que a condenação pode repousar só no inquérito. Há ainda a ressalva final do próprio art. 155, que autoriza o uso direto das provas cautelares, não repetíveis e antecipadas, como a perícia em local de crime, que por natureza não se repete em juízo.",
      fundamento: "CPP, art. 155, caput.",
      macete: "O proibido é o 'exclusivamente'. Corroborar sempre pôde.",
      erroComum: "Responder ERRADO de memória, porque a frase 'inquérito não serve para condenar' virou slogan.",
      comoBancaPensa: "Omite o advérbio que faria o item cair e cobra quem decorou o slogan em vez do artigo.",
    },
  },

  {
    ...BASE85_PP,
    id: "PP-107", assunto: "Inquérito policial",
    subassunto: "Dispensabilidade do inquérito",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CPP, art. 12; art. 39, § 5º)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "O inquérito policial pode ser dispensado com base em elementos colhidos em inquérito civil instaurado para apurar ilícitos administrativos.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "pode ser dispensado",
    cognitivo: {
      motivo: "Dispensabilidade é característica clássica do inquérito — o que a denúncia exige é justa causa, não inquérito.",
      palavraCritica: "inquérito civil",
    },
    comentario: {
      resolucao: "CERTO. O inquérito policial é peça DISPENSÁVEL: serve para reunir elementos que autorizem a acusação, e se esses elementos já existem por outra via, a denúncia pode ser oferecida sem ele. O art. 39, § 5º, do CPP diz exatamente isso — o órgão do MP dispensará o inquérito se com a representação forem oferecidos elementos que o habilitem a promover a ação. Inquérito civil, procedimento investigatório criminal, relatório de CPI e sindicância administrativa são fontes idôneas para essa finalidade. O que não se dispensa é a justa causa: sem lastro probatório mínimo, a denúncia é inepta, venha de onde vier.",
      fundamento: "CPP, arts. 12 e 39, § 5º.",
      macete: "Denúncia precisa de justa causa, não de inquérito.",
      erroComum: "Tratar o inquérito como condição de procedibilidade da ação penal.",
      comoBancaPensa: "Escolhe uma fonte de outro ramo (cível/administrativo) para ver se o candidato conhece a dispensabilidade.",
    },
  },

  {
    ...BASE85_PP,
    id: "PP-108", assunto: "Inquérito policial",
    subassunto: "Diligências requeridas — juízo da autoridade (art. 14)",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CPP, arts. 14 e 184)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "Pode a autoridade policial deferir ou indeferir pedido de prova feito pelo indiciado ou pelo ofendido no inquérito.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "deferir ou indeferir",
    cognitivo: {
      motivo: "Fixar a discricionariedade do delegado na condução do inquérito e sua única exceção legal.",
      palavraCritica: "indeferir",
    },
    comentario: {
      resolucao: "CERTO. O art. 14 do CPP prevê que o ofendido, ou seu representante legal, e o indiciado poderão requerer qualquer diligência, QUE SERÁ REALIZADA, OU NÃO, A JUÍZO DA AUTORIDADE. O inquérito é inquisitivo e discricionário: o delegado dirige a investigação e avalia a pertinência do que se pede. Há uma exceção expressa — o exame de corpo de delito não pode ser negado quando a infração deixa vestígios (art. 184), porque sua falta compromete a própria materialidade. O indeferimento, como todo ato administrativo, deve ser fundamentado.",
      fundamento: "CPP, arts. 14 e 184.",
      macete: "Pode indeferir tudo, menos corpo de delito em crime que deixa vestígio.",
      erroComum: "Supor que o requerimento das partes vincula a autoridade policial.",
      comoBancaPensa: "Cobra a regra do art. 14 sem mencionar a exceção, para ver quem inverte os dois.",
    },
  },

  {
    ...BASE85_PP,
    id: "PP-109", assunto: "Inquérito policial",
    subassunto: "Vedação ao arquivamento pela autoridade policial — art. 17",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CPP, art. 17)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "Verificado equívoco na instauração de inquérito para apurar crime de ação privada, deverá o delegado promover seu arquivamento.",
    gabarito: "E",
    pegadinha: "troca-sujeito",
    palavraChave: "deverá o delegado promover seu arquivamento",
    cognitivo: {
      motivo: "Regra sem exceção do CPP: a autoridade policial jamais arquiva inquérito, qualquer que seja o motivo.",
      palavraCritica: "o delegado",
    },
    comentario: {
      resolucao: "ERRADO. O art. 17 do CPP é categórico: a autoridade policial NÃO PODERÁ mandar arquivar autos de inquérito. Não há ressalva — nem por atipicidade evidente, nem por erro na instauração, nem por prescrição. Constatado o equívoco, o delegado relata e remete os autos; a decisão sobre o destino não é dele. Com a redação do art. 28 dada pela Lei 13.964/2019, o arquivamento passou a ser ordenado pelo próprio Ministério Público, com comunicação à vítima e remessa à instância de revisão do órgão ministerial. Em qualquer versão da regra, antes ou depois do Pacote Anticrime, a autoridade policial nunca esteve entre os legitimados.",
      fundamento: "CPP, arts. 17 e 28 (redação da Lei 13.964/2019).",
      macete: "Delegado instaura e relata. Arquivar, nunca.",
      erroComum: "Confundir a constatação do erro com o poder de encerrar o feito.",
      comoBancaPensa: "Cria uma situação em que o arquivamento parece a solução óbvia e razoável, e atribui o ato a quem não pode praticá-lo.",
    },
  },

  {
    ...BASE85_PP,
    id: "PP-110", assunto: "Inquérito policial",
    subassunto: "Ação pública incondicionada — desnecessidade de representação",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CPP, arts. 5º, I, e 24)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Por se tratar de ação pública incondicionada, é correto afirmar que a instauração do inquérito policial se deu independentemente de representação da vítima.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "independentemente de representação",
    cognitivo: {
      motivo: "Conceito-base: na ação pública incondicionada a persecução independe da vontade do ofendido.",
      palavraCritica: "incondicionada",
    },
    comentario: {
      resolucao: "CERTO. Na ação penal pública incondicionada, a autoridade policial instaura o inquérito DE OFÍCIO assim que toma conhecimento da infração (art. 5º, I), e o Ministério Público denuncia sem depender de manifestação de vontade da vítima (art. 24). É o regime da regra geral: só é condicionada a ação quando a lei disser expressamente que depende de representação ou de requisição do Ministro da Justiça. Compare com PP-105 — a vítima PODE requerer a instauração, mas o inquérito não depende disso.",
      fundamento: "CPP, arts. 5º, I, e 24; CP, art. 100.",
      macete: "Incondicionada: o Estado age sozinho, com ou sem a vítima.",
      erroComum: "Exigir representação em crime cuja lei nada condiciona.",
      comoBancaPensa: "Item de base conceitual, usado para dar ritmo ao caderno entre os difíceis.",
    },
  },

  /* ================= PRISÃO E LIBERDADE ================= */

  {
    ...BASE85_PP,
    id: "PP-111", assunto: "Prisão e liberdade provisória",
    subassunto: "Flagrante presumido — art. 302, IV",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito conferido no caderno oficial",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "Mesmo que não ocorra perseguição, haverá flagrante delito quando o agente for encontrado logo depois da infração com o instrumento do crime em situação em que se presuma ter sido ele o autor da infração.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "Mesmo que não ocorra perseguição",
    cognitivo: {
      motivo: "Separar o inciso III (impróprio, exige perseguição) do inciso IV (presumido, exige encontro com objetos).",
      palavraCritica: "encontrado logo depois",
    },
    comentario: {
      resolucao: "CERTO. O art. 302, IV, do CPP define o flagrante PRESUMIDO ou FICTO: é encontrado, logo depois, com instrumentos, armas, objetos ou papéis que façam presumir ser ele o autor da infração. Não há exigência de perseguição — essa é a marca do inciso III, o flagrante impróprio ou quase-flagrante, em que o agente é perseguido LOGO APÓS em situação que faça presumir a autoria. Repare na diferença de expressão temporal, que a banca explora: 'logo após' no impróprio, 'logo depois' no presumido, este admitindo intervalo um pouco maior justamente porque o vínculo se prova pelos objetos, não pela continuidade da caçada.",
      fundamento: "CPP, art. 302, III e IV.",
      macete: "Perseguiu = impróprio (III). Achou com o objeto = presumido (IV).",
      erroComum: "Exigir perseguição para toda modalidade de flagrante que não seja o próprio.",
      comoBancaPensa: "Abre o item negando o requisito do inciso vizinho, para induzir quem só decorou 'flagrante exige perseguição'.",
    },
  },

  {
    ...BASE85_PP,
    id: "PP-112", assunto: "Prisão e liberdade provisória",
    subassunto: "Fiança concedida pela autoridade policial — art. 322",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte normativa (CPP, art. 322)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "No caso de infração afiançável, a competência para conceder liberdade provisória ao preso é exclusiva do juiz.",
    gabarito: "E",
    pegadinha: "termo-absoluto",
    palavraChave: "exclusiva do juiz",
    cognitivo: {
      motivo: "O art. 322 dá ao delegado uma faixa própria de atuação — 'exclusiva' é a palavra que derruba o item.",
      palavraCritica: "exclusiva",
    },
    comentario: {
      resolucao: "ERRADO. O art. 322 do CPP autoriza a AUTORIDADE POLICIAL a conceder fiança nos casos de infração cuja pena privativa de liberdade máxima não seja superior a 4 anos. Nas demais hipóteses, o requerimento vai ao juiz, que decide em 48 horas (parágrafo único). Logo, a competência não é exclusiva do magistrado: há uma faixa em que o delegado arbitra e concede diretamente, e essa faixa existe justamente para evitar que prisões por infrações leves se prolonguem à espera de decisão judicial. Cuidado com um detalhe frequente: a fiança policial se mede pela pena MÁXIMA em abstrato, não pela pena provável.",
      fundamento: "CPP, art. 322 e parágrafo único.",
      macete: "Até 4 anos, o delegado arbitra. Acima disso, só o juiz.",
      erroComum: "Presumir reserva de jurisdição para toda concessão de liberdade.",
      comoBancaPensa: "Planta um termo absoluto ('exclusiva') sobre uma regra que tem exceção legal expressa.",
    },
  },

  {
    ...BASE85_PP,
    id: "PP-113", assunto: "Prisão e liberdade provisória",
    subassunto: "Escrivão ad hoc no auto de prisão em flagrante — art. 305",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito conferido no caderno oficial",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "Em caso de falta ou impedimento do escrivão, qualquer pessoa compromissada e designada pela autoridade pode lavrar o auto de prisão em flagrante.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "qualquer pessoa compromissada e designada",
    cognitivo: {
      motivo: "Literalidade do art. 305, com os dois requisitos cumulativos que a banca costuma suprimir.",
      palavraCritica: "compromissada e designada",
    },
    comentario: {
      resolucao: "CERTO. Transcrição fiel do art. 305 do CPP: na falta ou no impedimento do escrivão, qualquer pessoa designada pela autoridade lavrará o auto, DEPOIS DE PRESTADO O COMPROMISSO LEGAL. É o chamado escrivão ad hoc. Os dois requisitos são cumulativos — designação pela autoridade e compromisso —, e é suprimindo um deles que a banca costuma inverter o gabarito. A previsão existe para que a formalização do flagrante, que corre contra o relógio das 24 horas, não fique refém da presença de um servidor específico.",
      fundamento: "CPP, art. 305.",
      macete: "Escrivão ad hoc: designado + compromissado.",
      erroComum: "Achar que só servidor de carreira pode lavrar o auto.",
      comoBancaPensa: "Reproduz o artigo quase literalmente; a variação típica é cortar o compromisso.",
    },
  },

  {
    ...BASE85_PP,
    id: "PP-114", assunto: "Habeas corpus",
    subassunto: "Capacidade postulatória universal",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito revisado na fonte normativa (CPP, art. 654; CF, art. 5º, LXVIII)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "Caso o cidadão estrangeiro considere ilegal a sua prisão, ele próprio poderá impetrar habeas corpus em face da autoridade coatora, sendo prescindível o patrocínio judicial por advogado nesse caso.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "prescindível o patrocínio judicial por advogado",
    cognitivo: {
      motivo: "Duas travas num item só: legitimidade do estrangeiro e dispensa de advogado. Some-se a armadilha vocabular de 'prescindível'.",
      palavraCritica: "prescindível",
    },
    comentario: {
      resolucao: "CERTO. O art. 654 do CPP confere legitimidade para impetrar habeas corpus a QUALQUER PESSOA, em seu favor ou de outrem, e ao Ministério Público — o que dispensa capacidade postulatória e, portanto, advogado. Some-se a isso que os direitos e garantias fundamentais alcançam o estrangeiro, ainda que não residente e mesmo em trânsito, conforme entendimento consolidado do STF. Atenção ao vocabulário: PRESCINDÍVEL significa dispensável; trocar por 'imprescindível' inverteria o sentido, e essa troca é uma das mais exploradas em prova.",
      fundamento: "CPP, art. 654; CF, art. 5º, LXVIII.",
      macete: "HC é ação de qualquer um do povo — sem advogado, sem forma, sem custas.",
      erroComum: "Ler 'prescindível' como se fosse 'indispensável'.",
      comoBancaPensa: "Junta uma palavra de sentido invertível a duas regras corretas.",
    },
  },

  {
    ...BASE85_PP,
    id: "PP-115", assunto: "Juizados Especiais Criminais",
    subassunto: "Termo circunstanciado e indiciamento",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito conferido no caderno oficial",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "A lavratura de termo circunstanciado de ocorrência não acarreta indiciamento do autor do fato.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "não acarreta indiciamento",
    cognitivo: {
      motivo: "O TCO substitui o inquérito nos crimes de menor potencial ofensivo e não tem a fase de indiciamento.",
      palavraCritica: "autor do fato",
    },
    comentario: {
      resolucao: "CERTO, e a justificativa oficial da banca dá a razão: o termo circunstanciado se insere na lógica de celeridade e despenalização da Lei 9.099/1995, dispensando o auto de prisão em flagrante e o inquérito, e com eles a análise aprofundada de autoria e materialidade que é condição mínima do indiciamento. O indiciamento é ato formal e privativo do delegado, fundamentado em análise técnico-jurídica (Lei 12.830/2013, art. 2º, § 6º), próprio do inquérito. Repare no vocabulário da própria Lei 9.099: ela chama a pessoa de AUTOR DO FATO, não de indiciado — a escolha do termo já revela o regime.",
      fundamento: "Lei 9.099/1995, art. 69; Lei 12.830/2013, art. 2º, § 6º.",
      macete: "TCO não indicia: quem indicia é o inquérito.",
      erroComum: "Tratar o TCO como um inquérito abreviado, com os mesmos atos.",
      comoBancaPensa: "Cobra a consequência procedimental de um instituto que o candidato costuma conhecer só pelo nome.",
    },
  },

  /* ================= LEGISLAÇÃO ESPECIAL ================= */

  {
    ...BASE85_LE,
    id: "LE-297", assunto: "Lei de Abuso de Autoridade (Lei 13.869/2019)",
    subassunto: "Busca domiciliar fora do horário legal — art. 22, § 1º, III",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte normativa (Lei 13.869/2019, art. 22, § 1º, III)",
    dificuldade: 3, tempoIdealSeg: 90,
    enunciado: "Caracteriza abuso de autoridade o cumprimento de mandado de busca e apreensão domiciliar fora do horário do expediente forense, se feito sem justa causa.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "fora do horário do expediente forense",
    cognitivo: {
      motivo: "A lei fixa um horário próprio, em horas do relógio; o enunciado substitui esse critério pelo do expediente forense.",
      palavraCritica: "expediente forense",
    },
    comentario: {
      resolucao: "ERRADO. O critério legal não é o expediente forense, e sim o relógio: o art. 22, § 1º, III, da Lei 13.869/2019 pune quem cumpre mandado de busca e apreensão domiciliar APÓS AS 21 HORAS OU ANTES DAS 5 HORAS. Uma diligência às 18h30 ocorre fora do expediente do fórum e é perfeitamente regular; uma às 22h, dentro da faixa vedada, é que configura o crime. Trocar um parâmetro objetivo por outro de aparência equivalente é a manobra do item — e ela funciona porque os dois soam igualmente 'oficiais'.",
      fundamento: "Lei 13.869/2019, art. 22, § 1º, III.",
      macete: "A lei conta horas: 21h às 5h. Fórum aberto ou fechado não importa.",
      erroComum: "Associar a restrição ao funcionamento do Judiciário em vez do horário legal.",
      comoBancaPensa: "Substitui o parâmetro numérico por um critério institucional plausível.",
    },
  },

  {
    ...BASE85_LE,
    id: "LE-298", assunto: "Improbidade administrativa (Lei 8.429/1992)",
    subassunto: "Acordo de não persecução cível",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte normativa (Lei 8.429/1992, art. 17-B)",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "As ações de improbidade administrativa admitem a solução pela via consensual, sendo legalmente prevista a possibilidade de celebração de acordo de não persecução cível.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "acordo de não persecução cível",
    cognitivo: {
      motivo: "Marca a virada legislativa: a vedação absoluta a acordos foi substituída por autorização expressa.",
      palavraCritica: "solução pela via consensual",
    },
    comentario: {
      resolucao: "CERTO. A redação original da Lei 8.429/1992 vedava expressamente transação, acordo ou conciliação (antigo art. 17, § 1º). A Lei 13.964/2019 revogou essa proibição e abriu caminho para a via consensual, e a Lei 14.230/2021 consolidou o instituto no art. 17-B, que disciplina o ACORDO DE NÃO PERSECUÇÃO CÍVEL, celebrado pelo Ministério Público e homologado judicialmente, com exigências mínimas de ressarcimento integral do dano e reversão da vantagem indevida. É caso exemplar de conteúdo que só se responde bem com a lei atualizada: quem estudou pela redação anterior marca ERRADO com convicção.",
      fundamento: "Lei 8.429/1992, art. 17-B (redação da Lei 14.230/2021); Lei 13.964/2019.",
      macete: "Antes proibia acordo. Desde 2019/2021, permite e regula.",
      erroComum: "Responder pela redação revogada, que vedava qualquer transação.",
      comoBancaPensa: "Escolhe justamente o ponto em que a lei mudou de sinal.",
    },
  },

  {
    ...BASE85_LE,
    id: "LE-299", assunto: "Crimes ambientais (Lei 9.605/1998)",
    subassunto: "Responsabilidade penal da pessoa jurídica",
    origem: "CEBRASPE PF 2025 (Escrivão) — gabarito revisado na fonte normativa (CF, art. 225, § 3º; Lei 9.605/1998, art. 3º)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "Além das pessoas físicas, as pessoas jurídicas também podem ser responsabilizadas penalmente pela prática de crimes ambientais.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "pessoas jurídicas também podem ser responsabilizadas penalmente",
    cognitivo: {
      motivo: "Exceção constitucional ao princípio societas delinquere non potest.",
      palavraCritica: "penalmente",
    },
    comentario: {
      resolucao: "CERTO. O art. 225, § 3º, da Constituição sujeita as condutas lesivas ao meio ambiente a sanções penais e administrativas, aplicáveis a pessoas FÍSICAS OU JURÍDICAS, e o art. 3º da Lei 9.605/1998 concretiza a previsão. É exceção ao brocardo societas delinquere non potest, e ao lado dela costuma-se citar apenas os crimes contra a ordem econômica e financeira (art. 173, § 5º, da CF), sem lei que os discipline. Um ponto atualizado que vale reter: o STF e o STJ abandonaram a teoria da dupla imputação, de modo que a pessoa jurídica pode ser denunciada mesmo sem identificação da pessoa física responsável.",
      fundamento: "CF, art. 225, § 3º; Lei 9.605/1998, art. 3º.",
      macete: "Ambiental é a exceção clássica: empresa responde criminalmente.",
      erroComum: "Aplicar a regra geral de que só pessoa física comete crime.",
      comoBancaPensa: "Item de fixação, base para versões mais difíceis sobre dupla imputação.",
      jurisprudencia: "STF, RE 548.181: é possível processar penalmente a pessoa jurídica ainda que não haja imputação simultânea à pessoa física.",
    },
  },

  {
    ...BASE85_LE,
    id: "LE-300", assunto: "Crimes ambientais (Lei 9.605/1998)",
    subassunto: "Natureza da ação penal — art. 26",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito revisado na fonte normativa (Lei 9.605/1998, art. 26)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Nas infrações penais derivadas de condutas e atividades lesivas ao meio ambiente, a ação penal é pública incondicionada.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "pública incondicionada",
    cognitivo: {
      motivo: "Literalidade do art. 26, sem exceções na lei.",
      palavraCritica: "incondicionada",
    },
    comentario: {
      resolucao: "CERTO. O art. 26 da Lei 9.605/1998 determina que, nas infrações penais previstas na lei, a ação penal é pública INCONDICIONADA. Não há crime ambiental de ação privada nem condicionada à representação — o bem jurídico é difuso, pertence à coletividade, e por isso a persecução não fica na dependência da vontade de um ofendido individual. Vale contrastar com a Lei 9.099/1995, que se aplica subsidiariamente aos crimes ambientais de menor potencial ofensivo, mas com a exigência específica do art. 27 da Lei 9.605: a transação penal depende de prévia composição do dano ambiental.",
      fundamento: "Lei 9.605/1998, arts. 26 e 27.",
      macete: "Meio ambiente é bem de todos; a ação é sempre pública incondicionada.",
      erroComum: "Supor representação da vítima em dano ambiental com vítima identificável.",
      comoBancaPensa: "Cobra artigo curto e literal, sem margem de interpretação.",
    },
  },

  {
    ...BASE85_LE,
    id: "LE-301", assunto: "Lei de Migração (Lei 13.445/2017)",
    subassunto: "Prisão cautelar para extradição via INTERPOL — art. 84, § 2º",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito CORRIGIDO na fonte normativa (Lei 13.445/2017, art. 84, § 2º)",
    dificuldade: 3, tempoIdealSeg: 100,
    enunciado: "Segundo a Lei de Migração, desde que exista disposição específica em tratado, o pedido de prisão cautelar poderá ser transmitido à autoridade competente para extradição no Brasil, mediante canal estabelecido com o ponto focal da INTERPOL no país, devidamente instruído com a documentação comprobatória.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "desde que exista disposição específica em tratado",
    cognitivo: {
      motivo: "A lei autoriza o canal da INTERPOL sem condicionante; o enunciado cria uma condição que a lei não impõe — e que ela contradiz.",
      palavraCritica: "desde que",
    },
    comentario: {
      resolucao: "ERRADO. O art. 84, § 2º, da Lei 13.445/2017 permite que o pedido de prisão cautelar seja transmitido à autoridade competente por meio do canal estabelecido com o ponto focal da INTERPOL no país, instruído com a documentação que comprove a ordem de prisão estrangeira — SEM exigir tratado. Mais do que silenciar, a lei diz o contrário do enunciado: prevê expressamente a hipótese de AUSÊNCIA de tratado, caso em que o pedido segue acompanhado de promessa de reciprocidade recebida por via diplomática. Ou seja, o item transforma em condição aquilo que a lei tratou como alternativa. É a pegadinha de exigência inexistente na sua forma mais rentável: acrescentar um 'desde que' a uma faculdade legal incondicionada.",
      fundamento: "Lei 13.445/2017, art. 84, caput e §§ 1º e 2º.",
      macete: "Sem tratado, vale promessa de reciprocidade. O canal da INTERPOL não depende de tratado.",
      erroComum: "Aceitar o 'desde que' por soar tecnicamente correto no contexto de cooperação internacional.",
      comoBancaPensa: "Enxerta uma condicionante no início da frase e mantém o resto em redação legal impecável, para que a leitura rápida valide o todo.",
    },
  },

  {
    ...BASE85_LE,
    id: "LE-302", assunto: "Lei de Drogas (Lei 11.343/2006)",
    subassunto: "Alienação de bens apreendidos — prazo de 30 dias",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito revisado na fonte normativa (Lei 11.343/2006, art. 61 e § 1º)",
    dificuldade: 3, tempoIdealSeg: 100,
    enunciado: "A apreensão dos meios de transporte e dos maquinários utilizados para a prática, habitual ou não, do tráfico ilícito de drogas deve ser imediatamente comunicada pela autoridade de polícia judiciária ao juízo competente, que, no prazo de trinta dias, deve determinar a alienação dos bens apreendidos, excetuadas as armas.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "no prazo de trinta dias",
    cognitivo: {
      motivo: "Dois dados numéricos e uma exceção — o terreno preferido da banca para trocar um deles.",
      palavraCritica: "excetuadas as armas",
    },
    comentario: {
      resolucao: "CERTO em todos os elementos. O art. 61 da Lei 11.343/2006, na redação da Lei 13.840/2019, manda a autoridade de polícia judiciária comunicar IMEDIATAMENTE ao juízo competente a apreensão dos veículos, embarcações, aeronaves e demais meios de transporte, maquinários, utensílios e instrumentos usados na prática dos crimes da lei; e o § 1º determina que o juízo, recebida a comunicação, ordene a ALIENAÇÃO no prazo de trinta dias, EXCETUADAS AS ARMAS, que seguem a legislação específica. A lógica da alienação antecipada é evitar a deterioração de bens que ficariam anos parados em pátios até o trânsito em julgado.",
      fundamento: "Lei 11.343/2006, art. 61 e § 1º (redação da Lei 13.840/2019).",
      macete: "Comunicação imediata; alienação em 30 dias; armas fora.",
      erroComum: "Trocar o prazo (60 ou 90 dias) ou esquecer a ressalva das armas.",
      comoBancaPensa: "Reúne prazo, sujeito e exceção num só período; qualquer um deles pode ser adulterado na próxima versão.",
    },
  },

  {
    ...BASE85_LE,
    id: "LE-303", assunto: "Lei de Tortura (Lei 9.455/1997)",
    subassunto: "Regime inicial fechado e a exceção da omissão — art. 1º, §§ 2º e 7º",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito revisado na fonte normativa (Lei 9.455/1997, art. 1º, §§ 2º e 7º)",
    dificuldade: 3, tempoIdealSeg: 105,
    enunciado: "O condenado por crime de tortura, bem como aquele que se houver omitido em face das condutas que o caracterizam quando tinha o dever de evitá-las ou apurá-las, iniciará o cumprimento da pena em regime fechado.",
    gabarito: "E",
    pegadinha: "generalizacao",
    palavraChave: "bem como aquele que se houver omitido",
    cognitivo: {
      motivo: "A regra do regime fechado tem uma exceção expressa, e é justamente a figura que o enunciado inclui.",
      palavraCritica: "bem como",
    },
    comentario: {
      resolucao: "ERRADO. O art. 1º, § 7º, da Lei 9.455/1997 impõe o regime inicial fechado ao condenado por crime de tortura, MAS RESSALVA EXPRESSAMENTE a hipótese do § 2º. E o § 2º é exatamente a figura descrita na segunda parte do enunciado: quem se omite diante das condutas de tortura tendo o dever de evitá-las ou apurá-las. Essa modalidade omissiva é punida com DETENÇÃO de 1 a 4 anos — pena que sequer comporta início em regime fechado. O item está correto quanto ao torturador por ação e erra ao estender a regra a quem a própria lei excluiu.",
      fundamento: "Lei 9.455/1997, art. 1º, §§ 2º e 7º.",
      macete: "Tortura por ação: fechado. Tortura por omissão: detenção, fora da regra.",
      erroComum: "Ler o § 7º sem reparar na ressalva 'salvo a hipótese do § 2º'.",
      comoBancaPensa: "Junta a regra e sua exceção num único período, afirmando que ambas seguem o mesmo destino.",
    },
  },

  {
    ...BASE85_LE,
    id: "LE-304", assunto: "Estatuto do Desarmamento (Lei 10.826/2003)",
    subassunto: "Omissão de cautela — comunicação de extravio em 24 horas",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito revisado na fonte normativa (Lei 10.826/2003, art. 13, parágrafo único)",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "Pratica crime o proprietário de empresa de segurança e transporte de valores que, nas primeiras 24 horas depois de sofrer perda, furto, roubo ou outra forma de extravio de arma de fogo, acessório ou munição que estejam sob sua guarda, deixa de registrar ocorrência policial e de comunicar o fato à Polícia Federal.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "nas primeiras 24 horas",
    cognitivo: {
      motivo: "Crime omissivo próprio com prazo e destinatário certos — os dois pontos que a banca costuma adulterar.",
      palavraCritica: "à Polícia Federal",
    },
    comentario: {
      resolucao: "CERTO. O parágrafo único do art. 13 da Lei 10.826/2003 tipifica a conduta do proprietário ou diretor responsável de empresa de segurança e transporte de valores que deixa de registrar ocorrência policial e de comunicar à Polícia Federal a perda, furto, roubo ou outras formas de extravio de arma de fogo, acessório ou munição sob sua guarda, NAS PRIMEIRAS 24 HORAS depois de ocorrido o fato. É crime omissivo próprio: consuma-se com o mero decurso do prazo sem as duas providências, independentemente de qualquer resultado. Os dois deveres são cumulativos — registrar a ocorrência e comunicar à PF.",
      fundamento: "Lei 10.826/2003, art. 13, parágrafo único.",
      macete: "24 horas, duas providências: BO e comunicação à PF.",
      erroComum: "Trocar o prazo ou o órgão destinatário (polícia civil no lugar da PF).",
      comoBancaPensa: "Mantém o tipo íntegro e deixa o gabarito depender de um número e de um órgão.",
    },
  },

  {
    ...BASE85_LE,
    id: "LE-305", assunto: "Estatuto da Criança e do Adolescente (Lei 8.069/1990)",
    subassunto: "Improcedência da representação socioeducativa — art. 189",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito revisado na fonte normativa (ECA, art. 189)",
    dificuldade: 3, tempoIdealSeg: 105,
    enunciado: "O pedido do Ministério Público para aplicação de medida socioeducativa deverá ser julgado improcedente pela autoridade judiciária nas seguintes hipóteses: comprovação da inexistência do fato; ausência de prova da existência do fato; não caracterização do fato como ato infracional; e falta de prova da participação do adolescente no ato infracional.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "inexistência do fato ... falta de prova da participação",
    cognitivo: {
      motivo: "Rol fechado de quatro incisos — item de literalidade pura, em que basta um item adulterado para cair.",
      palavraCritica: "nas seguintes hipóteses",
    },
    comentario: {
      resolucao: "CERTO. O art. 189 do ECA lista as quatro hipóteses em que a autoridade judiciária não aplicará qualquer medida: estar provada a inexistência do fato; não haver prova da existência do fato; não constituir o fato ato infracional; e não existir prova de ter o adolescente concorrido para o ato infracional. O enunciado reproduz as quatro, na ordem. Note a simetria com o art. 386 do CPP, que trata da absolvição no processo penal — o ECA importa a mesma estrutura, distinguindo a certeza negativa (fato inexistiu) da ausência de prova, e a atipicidade da falta de prova de autoria.",
      fundamento: "ECA, art. 189; simetria com o CPP, art. 386.",
      macete: "Quatro portas: fato não existiu, sem prova do fato, não é ato infracional, sem prova de autoria.",
      erroComum: "Aceitar rol com um item trocado, por parecer todo plausível.",
      comoBancaPensa: "Transcreve o rol inteiro numa versão e adultera um inciso na seguinte.",
    },
  },

  {
    ...BASE85_LE,
    id: "LE-306", assunto: "Lei de Drogas (Lei 11.343/2006)",
    subassunto: "Repartição de atribuições na repressão ao tráfico",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CF, art. 144, §§ 1º, II, e 4º)",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "A repressão do crime de tráfico de entorpecentes que não tenha repercussão internacional é atribuição das polícias estaduais.",
    gabarito: "C",
    pegadinha: "restricao-indevida",
    palavraChave: "não tenha repercussão internacional",
    cognitivo: {
      motivo: "A atribuição da PF em matéria de drogas pressupõe transnacionalidade ou repercussão interestadual; sem isso, a apuração é das polícias civis.",
      palavraCritica: "polícias estaduais",
    },
    comentario: {
      resolucao: "CERTO. O art. 144, § 1º, II, da Constituição confere à Polícia Federal a prevenção e repressão ao tráfico ilícito de entorpecentes, mas o dispositivo é lido em conjunto com a exigência de transnacionalidade ou repercussão interestadual que exija repressão uniforme — e o próprio inciso ressalva que a atuação federal se dá 'sem prejuízo da ação de outros órgãos públicos nas respectivas áreas de competência'. O tráfico consumado inteiramente dentro de um estado, sem elo internacional, é apurado pela polícia civil e julgado pela justiça estadual. É por isso que a grande maioria dos inquéritos de tráfico no país tramita na esfera estadual.",
      fundamento: "CF, art. 144, §§ 1º, II, e 4º.",
      macete: "Sem fronteira cruzada, o caso é da polícia civil.",
      erroComum: "Ler a competência da PF sobre drogas como exclusiva e integral.",
      comoBancaPensa: "Testa se o candidato transforma uma competência qualificada em monopólio.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE85);

/* Improbidade administrativa não consta do edital PC-AL 2026: o item é
   real e válido, mas fica fora da trilha, como no lote 25. */
const FORA_EDITAL_PCAL2026_LOTE85 = ["LE-298"];
QUESTOES.forEach(q => { if (FORA_EDITAL_PCAL2026_LOTE85.includes(q.id)) q.foraEdital = true; });
