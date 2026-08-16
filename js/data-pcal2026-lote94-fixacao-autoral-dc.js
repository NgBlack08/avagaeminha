/* =====================================================================
   QUESTLAB — Lote 94: EXERCÍCIOS DE FIXAÇÃO (autorais do usuário)
   Direito Constitucional — Teoria dos Direitos Fundamentais

   ORIGEM. Lista de exercícios de fixação escrita pelo próprio usuário,
   entregue como PDF (Exercicios_Fixacao_DSO_10_Questoes). São 10 questões
   com gabarito, fundamento e comentário.

   O QUE FOI PRESERVADO E O QUE FOI ADAPTADO

   O pedido foi lançar o material na íntegra, incluindo o comentário,
   ajustando apenas ao modelo do sistema. Foi o que se fez:

     PRESERVADO — o texto das assertivas, palavra por palavra, e o
     comentário de cada questão, transcrito integralmente em
     `comentario.resolucao`. O campo `comentario.fundamento` recebe a
     linha "Fundamento Legal / Doutrina" do original.

     ADAPTADO — o FORMATO. O sistema é inteiramente CERTO/ERRADO (2.353
     itens, e a tela só desenha os botões CERTO, ERRADO e Em branco),
     porque é o formato que a CEBRASPE usa para Agente e Escrivão na
     PC-AL. Sete das dez questões originais são de múltipla escolha, e
     foram convertidas: cada alternativa relevante virou um item C/E,
     mantendo a redação original da assertiva. Alternativa correta vira
     item CERTO; alternativa incorreta vira item ERRADO.

     ACRESCENTADO — três campos que o contrato de dados exige e que o
     material não traz: `macete`, `erroComum` e `comoBancaPensa`. São
     acréscimos ao lado do comentário original, nunca alterações dele.

   RASTREABILIDADE. Cada item registra em `subassunto` a questão de
   origem (EF-DC01 a EF-DC10) e, quando veio de múltipla escolha, a letra
   da alternativa. Assim dá para voltar do banco ao material.

   UMA DIVERGÊNCIA REGISTRADA, NÃO CORRIGIDA. No comentário da questão 6,
   o material define a teoria interna como aquela em que "é a própria
   Constituição quem define os limites" e a externa como a que os fixa
   "pela necessidade de conciliá-los com outros direitos". A formulação
   corrente na doutrina (Alexy, Virgílio Afonso da Silva) descreve o par
   de outro modo: na teoria interna os limites são IMANENTES e o direito
   já nasce delimitado, sem ponderação; na externa há direito prima facie
   e restrição externa, e é isso que abre espaço para ponderar. O
   comentário foi mantido como está — é material do autor e a escolha
   didática é dele. A leitura alternativa está nos itens DH-227 a DH-229
   do lote 93, que continuam no banco.
   ===================================================================== */

const CARGOS94 = ["Escrivão", "Agente"];
const BASE94 = {
  concurso: "PCAL", cargo: CARGOS94, ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  origem: "Autoral do usuário — Exercícios de Fixação: Teoria dos Direitos Fundamentais (adaptado ao formato C/E)",
};

const QUESTOES_PCAL_LOTE94 = [

  /* ================= EF-DC01 — três alternativas aproveitadas ======== */

  {
    ...BASE94, disciplina: "Direito Constitucional",
    id: "DC-132", assunto: "Direitos fundamentais", subassunto: "EF-DC01, alternativa E — eficácia horizontal",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Alguns direitos fundamentais aplicam-se não só nas relações dos indivíduos com o Estado, mas também entre pessoas privadas, no que se conhece como eficácia horizontal desses direitos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "eficácia horizontal",
    cognitivo: {
      motivo: "Cobrar o conceito de eficácia horizontal, alternativa correta da questão EF-DC01.",
      palavraCritica: "entre pessoas privadas",
    },
    comentario: {
      resolucao: "CERTO. Segundo Marcelo Novelino, a eficácia horizontal corresponde à projeção dos direitos fundamentais às relações particulares, nas quais se encontram em uma hipotética relação de igualdade jurídica. A doutrina também aponta a chamada eficácia diagonal, que corresponde à aplicação dos direitos fundamentais em relações contratuais entre particulares que se encontram em situação de desequilíbrio, tais como relações consumeristas e trabalhistas.",
      fundamento: "Eficácia Horizontal dos Direitos Fundamentais.",
      macete: "Vertical: indivíduo × Estado. Horizontal: particulares em igualdade. Diagonal: particulares em desequilíbrio.",
      erroComum: "Supor que direitos fundamentais só vinculam o poder público.",
      comoBancaPensa: "Cobra o nome técnico da projeção nas relações privadas, e a eficácia diagonal como desdobramento menos estudado."
    }
  },
  {
    ...BASE94, disciplina: "Direito Constitucional",
    id: "DC-133", assunto: "Direitos fundamentais", subassunto: "EF-DC01, alternativa A — rol do art. 5º",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Os direitos e as garantias fundamentais estão taxativamente enumerados no art. 5.º da Constituição Federal de 1988.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "taxativamente",
    cognitivo: {
      motivo: "Cobrar o caráter exemplificativo do rol, alternativa incorreta da questão EF-DC01.",
      palavraCritica: "taxativamente",
    },
    comentario: {
      resolucao: "ERRADO. O rol do art. 5º não é taxativo. O próprio § 2º do art. 5º funciona como cláusula de abertura: os direitos e garantias expressos na Constituição não excluem outros decorrentes do regime e dos princípios por ela adotados, ou dos tratados internacionais em que a República Federativa do Brasil seja parte. Há ainda direitos fundamentais fora do art. 5º, espalhados pelo Título II e por outros pontos do texto constitucional.",
      fundamento: "CF, art. 5º, § 2º — cláusula de abertura material.",
      macete: "Rol do art. 5º é exemplificativo. Quem fecha o rol é o item, não a Constituição.",
      erroComum: "Confundir a extensão do art. 5º com exaustividade do catálogo.",
      comoBancaPensa: "Usa 'taxativamente' para transformar uma lista longa em lista fechada."
    }
  },
  {
    ...BASE94, disciplina: "Direitos Humanos",
    id: "DH-236", assunto: "Teoria dos direitos fundamentais", subassunto: "EF-DC01, alternativa C — imprescritibilidade × universalidade",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "A característica da imprescritibilidade estabelece que os direitos fundamentais assistem a todas as pessoas.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "imprescritibilidade",
    cognitivo: {
      motivo: "Cobrar a distinção entre imprescritibilidade e universalidade, alternativa incorreta da questão EF-DC01.",
      palavraCritica: "assistem a todas as pessoas",
    },
    comentario: {
      resolucao: "ERRADO. A descrição é da UNIVERSALIDADE, característica segundo a qual os direitos fundamentais assistem a todas as pessoas, independentemente de nacionalidade, condição ou qualquer outro critério. A IMPRESCRITIBILIDADE é outra coisa: significa que esses direitos não se perdem pelo decurso do tempo nem pelo seu não exercício.",
      fundamento: "Características dos direitos fundamentais — universalidade e imprescritibilidade.",
      macete: "Universalidade responde QUEM tem. Imprescritibilidade responde ATÉ QUANDO tem.",
      erroComum: "Aceitar a definição por reconhecê-la como verdadeira, sem conferir a qual característica ela pertence.",
      comoBancaPensa: "Define corretamente uma característica e a batiza com o nome de outra — troca de rótulo clássica."
    }
  },

  /* ================= EF-DC02 — aplicação imediata =================== */

  {
    ...BASE94, disciplina: "Direito Constitucional",
    id: "DC-134", assunto: "Direitos fundamentais", subassunto: "EF-DC02 — aplicação das normas definidoras",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "De acordo com o texto constitucional, as normas definidoras dos direitos e garantias fundamentais têm aplicação mediata.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "mediata",
    cognitivo: {
      motivo: "Cobrar o § 1º do art. 5º pela via da alternativa incorreta da questão EF-DC02, que oferecia 'mediata' como distrator.",
      palavraCritica: "mediata",
    },
    comentario: {
      resolucao: "ERRADO. Art. 5º, § 1º CF/88: As normas definidoras dos direitos e garantias fundamentais têm aplicação imediata. 'Mediata' é exatamente o oposto — significaria depender de intermediação normativa para produzir efeitos, e era o principal distrator da questão original, ao lado de 'diferida', 'limitada' e 'indireta'.",
      fundamento: "Art. 5º, § 1º, CF/88.",
      macete: "Imediata: vale já. Mediata, diferida, indireta e limitada são todas variações do mesmo erro.",
      erroComum: "Ler rápido e confundir 'imediata' com 'mediata', que diferem por uma sílaba.",
      comoBancaPensa: "Explora a proximidade sonora entre o termo correto e o seu oposto."
    }
  },

  /* ============ EF-DC03 — item CERTO/ERRADO original, verbatim ======= */

  {
    ...BASE94, disciplina: "Direitos Humanos",
    id: "DH-237", assunto: "Teoria dos direitos fundamentais", subassunto: "EF-DC03 — direitos humanos × direitos fundamentais",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "Enquanto os direitos fundamentais se encontram consagrados nos tratados e convenções internacionais (plano internacional), os direitos humanos estão consagrados e positivados na Constituição de cada país (plano interno), podendo seu conteúdo e conformação variar de acordo com cada Estado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "plano internacional / plano interno",
    cognitivo: {
      motivo: "Cobrar a distinção entre direitos humanos e direitos fundamentais quanto ao plano de positivação.",
      palavraCritica: "direitos fundamentais",
    },
    comentario: {
      resolucao: "ERRADO. Os conceitos estão invertidos. Segundo Marcelo Novelino, “enquanto os direitos humanos se encontram consagrados nos tratados e convenções internacionais (plano internacional), os direitos fundamentais são os direitos humanos consagrados e positivados na Constituição de cada país (plano interno), podendo seu conteúdo e conformação variar de acordo com cada Estado”.",
      fundamento: "Direitos Humanos vs Direitos Fundamentais.",
      macete: "HUMANOS lá fora, nos tratados. FUNDAMENTAIS aqui dentro, na Constituição.",
      erroComum: "Tratar os dois termos como sinônimos e não perceber a inversão dos planos.",
      comoBancaPensa: "Mantém toda a estrutura da definição correta e troca apenas os dois nomes de lugar."
    }
  },

  /* ================= EF-DC04 — características ====================== */

  {
    ...BASE94, disciplina: "Direitos Humanos",
    id: "DH-238", assunto: "Teoria dos direitos fundamentais", subassunto: "EF-DC04, alternativa C — rol de características",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "São principais características dos direitos fundamentais: universalidade, irrenunciabilidade, inalienabilidade, relatividade e imprescritibilidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "relatividade e imprescritibilidade",
    cognitivo: {
      motivo: "Cobrar o rol de características, alternativa correta da questão EF-DC04.",
      palavraCritica: "imprescritibilidade",
    },
    comentario: {
      resolucao: "CERTO. Conforme aponta a doutrina, as principais características dos direitos fundamentais são: Universalidade; Irrenunciabilidade; Inalienabilidade; Relatividade e Imprescritibilidade.",
      fundamento: "Características dos Direitos Fundamentais.",
      macete: "UIIRI: Universalidade, Irrenunciabilidade, Inalienabilidade, Relatividade, Imprescritibilidade.",
      erroComum: "Aceitar 'prescritibilidade' ou 'alienabilidade' no lugar dos termos corretos — os distratores da questão original trocavam exatamente um item do rol.",
      comoBancaPensa: "Lista longa em que basta uma palavra trocada para inverter o gabarito."
    }
  },

  /* ================= EF-DC05 — quatro alternativas =================== */

  {
    ...BASE94, disciplina: "Direitos Humanos",
    id: "DH-239", assunto: "Teoria dos direitos fundamentais", subassunto: "EF-DC05, alternativa B — terceira geração",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Os direitos de terceira geração estão ligados aos direitos sociais, econômicos e culturais.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "terceira geração",
    cognitivo: {
      motivo: "Cobrar a troca entre segunda e terceira gerações, alternativa incorreta da questão EF-DC05.",
      palavraCritica: "sociais, econômicos e culturais",
    },
    comentario: {
      resolucao: "ERRADO. A alternativa está incorreta porque, na verdade, os direitos de segunda geração é que estão ligados aos direitos sociais, econômicos e culturais, e não os de terceira geração.",
      fundamento: "Gerações/Dimensões dos Direitos Fundamentais.",
      macete: "2ª geração: sociais, econômicos e culturais. 3ª geração: solidariedade e transindividuais.",
      erroComum: "Trocar segunda por terceira, que é a inversão mais cobrada do tema.",
      comoBancaPensa: "Descreve corretamente uma geração e atribui a outra."
    }
  },
  {
    ...BASE94, disciplina: "Direitos Humanos",
    id: "DH-240", assunto: "Teoria dos direitos fundamentais", subassunto: "EF-DC05, alternativa C — primeira geração",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Os direitos de primeira geração impõem ao Estado um dever de não interferência, prestigiando, portanto, as liberdades individuais, intimamente relacionados aos direitos civis e políticos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dever de não interferência",
    cognitivo: {
      motivo: "Cobrar a natureza negativa da primeira geração, alternativa correta da questão EF-DC05.",
      palavraCritica: "não interferência",
    },
    comentario: {
      resolucao: "CERTO. Os direitos de primeira geração impõem ao Estado um dever de não interferência (direitos negativos), prestigiando, portanto, as liberdades individuais, intimamente relacionados aos direitos civis e políticos. Tais direitos foram marcantes nas Revoluções Francesa e Norte-Americana do final do século XVIII e realçavam o princípio da liberdade.",
      fundamento: "Gerações de Direitos Fundamentais.",
      macete: "1ª geração = Estado parado. 2ª geração = Estado agindo.",
      erroComum: "Associar a primeira geração a prestações positivas, que são da segunda.",
      comoBancaPensa: "Afirmação doutrinária correta, para contrastar com as alternativas que invertem as gerações."
    }
  },
  {
    ...BASE94, disciplina: "Direitos Humanos",
    id: "DH-241", assunto: "Teoria dos direitos fundamentais", subassunto: "EF-DC05, alternativa D — terceira geração",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Os direitos de terceira geração consagram os princípios da solidariedade e da fraternidade, ou seja, estão relacionados aos direitos transindividuais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "transindividuais",
    cognitivo: {
      motivo: "Cobrar o conteúdo da terceira geração, alternativa correta da questão EF-DC05.",
      palavraCritica: "solidariedade",
    },
    comentario: {
      resolucao: "CERTO. Os direitos de terceira geração consagram os princípios da solidariedade e da fraternidade, estando relacionados aos direitos transindividuais — de titularidade difusa ou coletiva. São exemplos o direito ao meio ambiente ecologicamente equilibrado, ao desenvolvimento, à paz e à autodeterminação dos povos.",
      fundamento: "Gerações/Dimensões dos Direitos Fundamentais.",
      macete: "Liberdade (1ª), igualdade (2ª), fraternidade (3ª) — o lema da Revolução Francesa organiza as três.",
      erroComum: "Confundir os transindividuais da terceira com os sociais da segunda.",
      comoBancaPensa: "Alternativa verdadeira que serve de âncora para a incorreta do mesmo enunciado."
    }
  },
  {
    ...BASE94, disciplina: "Direitos Humanos",
    id: "DH-242", assunto: "Teoria dos direitos fundamentais", subassunto: "EF-DC05, alternativa E — segunda geração",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Os direitos de segunda geração correspondem a direitos positivos que buscam a igualdade entre os indivíduos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "direitos positivos",
    cognitivo: {
      motivo: "Cobrar a natureza prestacional da segunda geração, alternativa correta da questão EF-DC05.",
      palavraCritica: "igualdade",
    },
    comentario: {
      resolucao: "CERTO. Os direitos de segunda geração correspondem a direitos positivos, que exigem prestação do Estado e buscam a igualdade material entre os indivíduos. Englobam saúde, educação, cultura, lazer e moradia.",
      fundamento: "Gerações/Dimensões dos Direitos Fundamentais.",
      macete: "Positivo = o Estado faz. Negativo = o Estado se abstém.",
      erroComum: "Chamar de negativos os direitos sociais, invertendo a lógica prestacional.",
      comoBancaPensa: "Cobra o par positivo/negativo, que organiza a distinção entre a primeira e a segunda geração."
    }
  },

  /* ============ EF-DC06 — item CERTO/ERRADO original, verbatim ======= */

  {
    ...BASE94, disciplina: "Direitos Humanos",
    id: "DH-243", assunto: "Teoria dos direitos fundamentais", subassunto: "EF-DC06 — teorias sobre conteúdo e sobre limites",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "A amplitude de proteção dos direitos fundamentais depende da análise de seu conteúdo. Dessa análise surge a classificação em teoria interna e teoria externa.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "teoria interna e teoria externa",
    cognitivo: {
      motivo: "Cobrar a distinção entre o par que trata do conteúdo protegido e o par que trata dos limites.",
      palavraCritica: "conteúdo",
    },
    comentario: {
      resolucao: "ERRADO. Na verdade, da análise do conteúdo e da proteção, surge a classificação em teoria absoluta e teoria relativa. A teoria absoluta aponta a existência de um núcleo de proteção dos direitos fundamentais que não pode ser violado; a teoria relativa afirma que não há uma limitação preestabelecida, já que o objeto de proteção pode variar conforme as circunstâncias do caso concreto. A questão faz referência de forma errada às teorias interna e externa, as quais dizem respeito aos limites (restrições) aos direitos fundamentais. Segundo a teoria interna, é a própria Constituição quem define os limites (restrições) dos direitos fundamentais. Por outro lado, a teoria externa afirma que os limites aos direitos fundamentais são estabelecidos pela necessidade de conciliá-los com outros direitos de mesma espécie.",
      fundamento: "Teorias dos Direitos Fundamentais.",
      macete: "CONTEÚDO protegido: absoluta × relativa. LIMITES: interna × externa. São dois pares distintos.",
      erroComum: "Misturar os dois pares, aplicando ao conteúdo os nomes que pertencem aos limites.",
      comoBancaPensa: "Enuncia corretamente a premissa (a amplitude depende do conteúdo) e conclui com o par errado."
    }
  },

  /* ================= EF-DC07 — art. 5º, § 3º ======================== */

  {
    ...BASE94, disciplina: "Direito Constitucional",
    id: "DC-135", assunto: "Direitos fundamentais", subassunto: "EF-DC07 — quórum de aprovação dos tratados",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Conforme o texto constitucional, os tratados e convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em três turnos, por três quintos dos votos dos respectivos membros, serão equivalentes às leis complementares.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "três turnos ... leis complementares",
    cognitivo: {
      motivo: "Cobrar o § 3º pela via de um distrator da questão EF-DC07, que combinava número de turnos e status errados.",
      palavraCritica: "três turnos",
    },
    comentario: {
      resolucao: "ERRADO, em dois pontos. Art. 5º, § 3º CF/88: Os tratados e convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em DOIS turnos, por três quintos dos votos dos respectivos membros, serão equivalentes às EMENDAS CONSTITUCIONAIS. O item troca o número de turnos e rebaixa o status para lei complementar.",
      fundamento: "Art. 5º, § 3º, CF/88.",
      macete: "Dois turnos, três quintos, cada Casa — é o rito da emenda, e o status é de emenda.",
      erroComum: "Acertar os três quintos e errar o número de turnos, ou acertar o rito e errar o status.",
      comoBancaPensa: "Dispositivo com três variáveis; a banca altera uma ou duas e mantém o restante fiel."
    }
  },

  /* ============ EF-DC08 — item CERTO/ERRADO original, verbatim ======= */

  {
    ...BASE94, disciplina: "Direitos Humanos",
    id: "DH-244", assunto: "Teoria dos direitos fundamentais", subassunto: "EF-DC08 — relatividade e hierarquia",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Decorre da característica da relatividade dos direitos fundamentais a inexistência de hierarquia entre eles.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "inexistência de hierarquia",
    cognitivo: {
      motivo: "Cobrar a consequência da relatividade sobre a ordenação entre direitos fundamentais.",
      palavraCritica: "relatividade",
    },
    comentario: {
      resolucao: "CERTO. Dentre as principais características dos direitos fundamentais, destacam-se: Universalidade; Inalienabilidade; Imprescritibilidade; Relatividade — os direitos fundamentais não são absolutos, podendo sofrer limitações em razão da ponderação de interesses e do princípio da proporcionalidade; e Irrenunciabilidade. Dessa relatividade (e da necessidade de ponderação em casos de colisão) decorre a inexistência de uma hierarquia pré-definida e absoluta entre eles.",
      fundamento: "Características dos Direitos Fundamentais (Relatividade).",
      macete: "Se houvesse hierarquia fixa, não haveria o que ponderar — bastaria consultar a ordem.",
      erroComum: "Supor que algum direito, como o à vida, ocupe posição hierárquica superior aos demais em abstrato.",
      comoBancaPensa: "Liga uma característica a sua consequência lógica, exigindo mais do que a memorização do rol."
    }
  },

  /* ================= EF-DC09 — exemplos de primeira geração ========= */

  {
    ...BASE94, disciplina: "Direitos Humanos",
    id: "DH-245", assunto: "Teoria dos direitos fundamentais", subassunto: "EF-DC09, alternativa B — exemplos de primeira geração",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "São exemplos de direitos de primeira geração ou dimensão o direito à liberdade e o direito à propriedade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "liberdade e propriedade",
    cognitivo: {
      motivo: "Cobrar exemplos concretos da primeira geração, alternativa correta da questão EF-DC09.",
      palavraCritica: "propriedade",
    },
    comentario: {
      resolucao: "CERTO. Os chamados direitos de primeira geração surgiram no século XVIII, como consequência do modelo de Estado Liberal, e impõem ao Estado um dever de não interferência. Como exemplo: direito à vida, à liberdade, ao patrimônio (propriedade) e à liberdade de expressão. Os de 2ª geração englobam saúde, cultura, lazer e moradia; o meio ambiente é de 3ª geração.",
      fundamento: "Gerações de Direitos Fundamentais.",
      macete: "Liberdade e propriedade são a dupla clássica do Estado Liberal — primeira geração.",
      erroComum: "Incluir saúde ou meio ambiente entre os de primeira geração.",
      comoBancaPensa: "Cobra a alocação de exemplos concretos, e não apenas a definição abstrata de cada geração."
    }
  },

  /* ================= EF-DC10 — três afirmativas ===================== */

  {
    ...BASE94, disciplina: "Direito Constitucional",
    id: "DC-136", assunto: "Direitos fundamentais", subassunto: "EF-DC10, afirmativa II — cláusula de abertura",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Os direitos e garantias expressos na Constituição excluem outros decorrentes dos tratados internacionais em que a República Federativa do Brasil seja parte.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "excluem",
    cognitivo: {
      motivo: "Cobrar a cláusula de abertura do § 2º, afirmativa incorreta da questão EF-DC10.",
      palavraCritica: "excluem",
    },
    comentario: {
      resolucao: "ERRADO. CF, art. 5º, § 2º CF/88: Os direitos e garantias expressos nesta Constituição NÃO EXCLUEM outros decorrentes do regime e dos princípios por ela adotados, ou dos tratados internacionais em que a República Federativa do Brasil seja parte. O item suprime a negação e inverte o sentido do dispositivo.",
      fundamento: "CF, art. 5º, § 2º.",
      macete: "O § 2º abre o catálogo. Item que o faz fechar está errado.",
      erroComum: "Não notar a supressão do 'não' no meio do dispositivo.",
      comoBancaPensa: "Retira uma única palavra — a negação — e mantém todo o resto fiel ao texto legal."
    }
  },
  {
    ...BASE94, disciplina: "Direito Constitucional",
    id: "DC-137", assunto: "Direitos fundamentais", subassunto: "EF-DC10, afirmativa III — Casa e quórum",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "Os tratados internacionais sobre direitos humanos que forem aprovados na Câmara dos Deputados, pela maioria absoluta dos votos, serão equivalentes às emendas constitucionais.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "Câmara dos Deputados, maioria absoluta",
    cognitivo: {
      motivo: "Cobrar o rito completo do § 3º, afirmativa incorreta da questão EF-DC10.",
      palavraCritica: "maioria absoluta",
    },
    comentario: {
      resolucao: "ERRADO. CF, art. 5º, § 3º CF/88: Os tratados e convenções internacionais sobre direitos humanos que forem aprovados, em CADA CASA do Congresso Nacional, em DOIS TURNOS, por TRÊS QUINTOS dos votos dos respectivos membros, serão equivalentes às emendas constitucionais. O item erra em dois elementos: restringe a aprovação à Câmara dos Deputados e rebaixa o quórum para maioria absoluta.",
      fundamento: "CF, art. 5º, § 3º.",
      macete: "Cada Casa, não uma só. Três quintos, não maioria absoluta. Dois turnos, não um.",
      erroComum: "Aceitar o status de emenda sem conferir se o rito descrito é mesmo o do § 3º.",
      comoBancaPensa: "Preserva a consequência correta (equivalência a emenda) e adultera as condições que a produzem."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE94);
