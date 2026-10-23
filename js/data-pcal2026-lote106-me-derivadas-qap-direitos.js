/* =====================================================================
   QUESTLAB — Lote 106: MÚLTIPLA ESCOLHA DERIVADA DOS QAPs DE DIREITOS

   MÉTODO: o do lote 98. Cada item reúne, sob um enunciado comum, quatro
   afirmativas I–IV que já existem no banco como itens CERTO/ERRADO dos
   lotes 100 a 105 (itens de prova dos QAPs do curso DSO), com cinco
   alternativas combinatórias. O valor de verdade de cada afirmativa NÃO
   foi redigido agora: o gerador o lê do gabarito do item de origem e
   monta a alternativa correta a partir dele. `subassunto` lista os IDs.

   REGRAS (as mesmas do lote 98)
     1. As quatro afirmativas tratam de pontos diferentes; nenhuma revela
        o valor de outra. Os pares deliberados do banco (o mesmo ponto em
        versão certa e errada, como DA-098/DA-113 ou PP-135/PP-136) não
        foram juntados.
     2. Mistura de verdadeiras e falsas, de uma a três verdadeiras.
     3. Afirmativas autossuficientes: só entraram itens sem caso
        hipotético ("nessa situação", personagens).
     4. Gabarito distribuído em rodízio A–E. As alternativas erradas
        misturam combinações a uma e a duas afirmativas de distância da
        correta. Se todas ficassem a um passo, a correta seria o 'centro'
        das cinco opções e poderia ser achada sem ler o conteúdo; o gerador
        recusa qualquer conjunto em que a correta seja a opção mais central.
        Conferido: em 0 dos 31 itens a correta é o centro, e em 2 é a mais
        longa (o acaso daria ~6).
     5. A resolução julga as quatro afirmativas, uma a uma.

   FORMATO E PESO. A PC-AL (Agente/Escrivão) é CERTO/ERRADO; o formato ME
   serve ao treino e a outras bancas. Como no lote 98, probReaparecer 0.80.
   Os itens C/E de origem continuam no banco, sem alteração.

   31 itens: Direito Penal 6, Processo Penal 4, Administrativo 7,
   Constitucional 6, Direitos Humanos 2, Legislação Especial 6.
   ===================================================================== */

const BASE106 = {
  concurso: "PCAL", cargo: ["Escrivão", "Agente"], ano: 2026,
  tipo: "ME", probReaparecer: 0.8,
  origem: "Autoral QuestLab — múltipla escolha derivada de itens C/E dos QAPs DSO já no banco (lotes 100 a 105); IDs de origem no subassunto",
};

const QUESTOES_PCAL_LOTE106 = [

  {
    ...BASE106,
    id: "DP-314", disciplina: "Direito Penal", assunto: "Aplicação da lei penal",
    subassunto: "Derivado de DP-220, DP-230, DP-231, DP-235 — tempo, lugar e extraterritorialidade",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da aplicação da lei penal no tempo e no espaço, considere as seguintes afirmações:\n\nI. De acordo com a teoria que determina o tempo do crime, para efeitos penais, não se computa no prazo o dia em que este se inicia, incluindo-se, porém, o dia de seu vencimento.\nII. Segundo o entendimento do STF, no caso de lei posterior que beneficie, em parte, o acusado e, em outra, o prejudique, deve o juiz da causa ou da execução aplicar, em sua integralidade, a lei que seja mais benéfica.\nIII. Segundo a teoria da ubiquidade, adotada pelo Código Penal brasileiro, considera-se praticado o crime tanto no lugar em que ocorreu a ação ou omissão, quanto no local onde se produziu ou deveria se produzir o resultado.\nIV. Em caso de crime que, por tratado, o Brasil se obrigue a reprimir, há extraterritorialidade incondicionada.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
    ],
    gabarito: "A", pegadinha: "troca-conceito", palavraChave: "extraterritorialidade incondicionada",
    cognitivo: {
      motivo: "Juntar quatro regras da lei penal no tempo e no espaço que costumam ser confundidas entre si.",
      palavraCritica: "incondicionada",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I incorreta: a contagem descrita (exclui o dia do começo) é a do prazo processual (CPP, art. 798, § 1º); no prazo penal o dia do começo se inclui (CP, art. 10), e a teoria do tempo do crime é outro assunto. Afirmativa II correta: é vedada a combinação de leis; o juiz aplica, por inteiro, a mais benéfica (STF, RE 600.817; STJ, Súmula 501). Afirmativa III correta: é a teoria da ubiquidade do art. 6º do CP. Afirmativa IV incorreta: crime que o Brasil se obrigou a reprimir por tratado é hipótese de extraterritorialidade CONDICIONADA (art. 7º, II, 'a'). Resta(m) apenas as afirmativas II e III.",
      fundamento: "CP, arts. 6º, 7º e 10; CPP, art. 798, § 1º; STJ, Súmula 501.",
      macete: "LUTA (Lugar-Ubiquidade, Tempo-Atividade); prazo penal inclui o 1º dia; tratado = condicionada.",
      erroComum: "Aceitar a afirmativa I por misturar vocabulário do tempo do crime com contagem de prazo.",
      comoBancaPensa: "Mistura regras corretas com trocas de rótulo em temas vizinhos.",
    },
  },

  {
    ...BASE106,
    id: "DP-315", disciplina: "Direito Penal", assunto: "Princípios penais",
    subassunto: "Derivado de DP-238, DP-240, DP-241, DP-242 — intranscendência, humanidade, insignificância e consunção",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos princípios do direito penal, considere as seguintes afirmações:\n\nI. Nenhuma pena passará da pessoa do condenado, podendo a obrigação de reparar o dano e a decretação do perdimento de bens serem estendidas aos sucessores e contra eles executadas até o limite do valor do patrimônio transferido.\nII. No Direito Penal, o respeito à integridade física e moral do preso, bem como a vedação à aplicação de penas de natureza cruel ou degradante se traduzem no princípio da individualização da pena.\nIII. O princípio da insignificância ou bagatela própria é uma causa supralegal de exclusão da tipicidade material.\nIV. Com previsão expressa na parte geral do Código Penal brasileiro, o princípio da consunção pode ser caracterizado como um subprincípio do princípio da intervenção mínima.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
    ],
    gabarito: "B", pegadinha: "troca-conceito", palavraChave: "individualização da pena",
    cognitivo: {
      motivo: "Associar cada conteúdo ao princípio certo e saber o que tem previsão expressa.",
      palavraCritica: "previsão expressa",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I correta: reproduz o art. 5º, XLV, da CF: o dano e o perdimento de bens alcançam os sucessores até o limite do patrimônio transferido. Afirmativa II incorreta: integridade do preso e vedação de penas cruéis expressam o princípio da HUMANIDADE, não o da individualização. Afirmativa III correta: a insignificância é causa supralegal de exclusão da tipicidade material (STF, HC 84.412). Afirmativa IV incorreta: a consunção não tem previsão expressa na parte geral do CP; é critério doutrinário do conflito aparente de normas. Resta(m) apenas as afirmativas I e III.",
      fundamento: "CF, art. 5º, XLV, XLVI e XLVII; STF, HC 84.412.",
      macete: "Humanidade: como a pena não pode ser. Individualização: como a pena se ajusta a cada um.",
      erroComum: "Achar que todo princípio cobrado em prova está escrito no CP.",
      comoBancaPensa: "Dois conteúdos corretos e dois rótulos trocados.",
    },
  },

  {
    ...BASE106,
    id: "DP-316", disciplina: "Direito Penal", assunto: "Teoria do crime",
    subassunto: "Derivado de DP-244, DP-245, DP-247, DP-248 — finalismo, culpa, tentativa e arrependimento posterior",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da teoria do crime, considere as seguintes afirmações:\n\nI. Segundo a teoria adotada pelo Código Penal brasileiro, a conduta humana, comissiva ou omissiva, é sempre projetada a um fim e iluminada pelo acolhimento ou desprezo a um valor reconhecido pelo direito.\nII. O crime culposo pode ocorrer por imprudência, negligência ou imperícia, sendo esta última caracterizada pelo comportamento positivo em um ato sem o cuidado necessário, ou seja, uma ação descuidada.\nIII. Caracteriza-se como tentativa branca ou incruenta a de crime que não se consuma por absoluta ineficácia do meio empregado.\nIV. Deve-se aplicar o arrependimento posterior quando o acusado de crime cometido sem violência ou grave ameaça à pessoa reparar, integral e voluntariamente, o dano até o momento da prolação da sentença.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas a afirmativa I está correta.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
    ],
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "tentativa branca",
    cognitivo: {
      motivo: "Conferir definições de institutos da parte geral que a banca troca entre si.",
      palavraCritica: "até o momento da prolação da sentença",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I correta: é o conceito finalista de conduta, base da parte geral reformada em 1984. Afirmativa II incorreta: comportamento positivo descuidado é IMPRUDÊNCIA; imperícia é falta de aptidão técnica. Afirmativa III incorreta: não consumação por absoluta ineficácia do meio é crime impossível (art. 17); tentativa branca é a que não atinge a vítima. Afirmativa IV incorreta: o arrependimento posterior exige reparação até o RECEBIMENTO da denúncia ou queixa (art. 16); depois disso, só atenuante. Resta(m) apenas a afirmativa I.",
      fundamento: "CP, arts. 14, 16, 17 e 18.",
      macete: "Imprudência faz demais; negligência faz de menos; imperícia não sabe fazer.",
      erroComum: "Validar as afirmativas II a IV porque o vocabulário é técnico.",
      comoBancaPensa: "Três afirmativas com uma troca de definição ou de prazo cada.",
    },
  },

  {
    ...BASE106,
    id: "DP-317", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública",
    subassunto: "Derivado de DP-279, DP-281, DP-285, DP-288 — concussão, funcionário por equiparação, consunção e desobediência",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos crimes contra a administração pública, considere as seguintes afirmações:\n\nI. Um agente público estadual que, no exercício de suas funções e em razão delas, exige vantagem de um particular, visando beneficiar outra pessoa, pratica o crime de corrupção passiva.\nII. Para fins penais, não se considera funcionário público o empregado que trabalha para empresa particular prestadora de serviço contratada ou conveniada para a execução de atividade típica da administração pública.\nIII. De acordo com o entendimento do STJ, quando o falso se exaure no descaminho, sem mais potencialidade lesiva, é por este absorvido, como crime-fim, condição que não se altera por ser menor a pena cominada ao descaminho.\nIV. A fuga do réu após a ordem de parada dos policiais para abordagem configura crime de desobediência.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa III está correta.",
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
    ],
    gabarito: "D", pegadinha: "juris-mais-lei", palavraChave: "exige vantagem",
    cognitivo: {
      motivo: "Combinar verbos do tipo, conceito penal de funcionário e duas teses do STJ.",
      palavraCritica: "exige",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I incorreta: quem EXIGE vantagem em razão da função comete concussão (art. 316); corrupção passiva é solicitar, receber ou aceitar promessa. Afirmativa II incorreta: o art. 327, § 1º, equipara a funcionário público quem trabalha para empresa contratada ou conveniada para atividade típica da administração. Afirmativa III correta: é a tese do STJ (Tema 933): o falso que se exaure no descaminho é por ele absorvido, ainda que a pena do descaminho seja menor. Afirmativa IV correta: o STJ fixou que a fuga após ordem legal de parada configura desobediência (Tema 1.060). Resta(m) apenas as afirmativas III e IV.",
      fundamento: "CP, arts. 316, 317, 327, § 1º, e 330; STJ, Temas 933 e 1.060.",
      macete: "Exigiu = concussão. Terceirizado em atividade típica = funcionário público.",
      erroComum: "Usar o conceito restrito de servidor do direito administrativo.",
      comoBancaPensa: "Mistura literalidade de tipos com teses repetitivas.",
    },
  },

  {
    ...BASE106,
    id: "DP-318", disciplina: "Direito Penal", assunto: "Crimes contra as finanças públicas",
    subassunto: "Derivado de DP-297, DP-300, DP-310, DP-312 — finanças públicas e licitações",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos crimes contra as finanças públicas e dos crimes em licitações e contratos administrativos, considere as seguintes afirmações:\n\nI. No que tange aos crimes contra as finanças públicas, por força de dispositivo expresso constante no CP, a caracterização desses crimes depende de pronunciamento definitivo da corte de contas.\nII. Autorizar a inscrição em restos a pagar de despesa que tenha sido previamente empenhada não é uma conduta tipificada como crime contra as finanças públicas.\nIII. A conduta de devassar o sigilo de proposta apresentada em processo licitatório ou proporcionar a terceiro o ensejo de devassá-lo configura o crime de violação de sigilo em licitação.\nIV. É atípica a conduta do profissional que, declarado inidôneo, venha a participar de licitação.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
    ],
    gabarito: "E", pegadinha: "literalidade", palavraChave: "previamente empenhada",
    cognitivo: {
      motivo: "Ler os elementos dos tipos novos do CP com atenção às negações.",
      palavraCritica: "não é uma conduta tipificada",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I incorreta: não há dispositivo no CP condicionando esses crimes ao julgamento do tribunal de contas; as instâncias são independentes. Afirmativa II correta: o art. 359-B pune a inscrição em restos a pagar de despesa NÃO empenhada; se foi empenhada, não há crime. Afirmativa III correta: é o art. 337-J do CP (violação de sigilo em licitação). Afirmativa IV incorreta: o inidôneo que participa de licitação incorre no art. 337-M, § 2º. Resta(m) apenas as afirmativas II e III.",
      fundamento: "CP, arts. 337-J, 337-M e 359-B.",
      macete: "Restos a pagar sem empenho: crime. Com empenho: rotina.",
      erroComum: "Marcar a afirmativa II como incorreta por associar 'restos a pagar' a crime.",
      comoBancaPensa: "Negação dupla escondida numa afirmativa verdadeira.",
    },
  },

  {
    ...BASE106,
    id: "DP-319", disciplina: "Direito Penal", assunto: "Crimes contra a fé pública",
    subassunto: "Derivado de DP-292, DP-293, DP-294, DP-296 — falsidades documentais",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos crimes contra a fé pública, considerando o entendimento dos tribunais superiores, considere as seguintes afirmações:\n\nI. De acordo com o entendimento dos tribunais superiores, a prática da clonagem de cartão de crédito constitui o crime de falsidade ideológica.\nII. De acordo com o entendimento dos tribunais superiores, o uso de documento falso para ocultar situação irregular no país é considerado conduta atípica em razão do exercício da autodefesa do agente.\nIII. A conduta do comerciante de dolosamente alterar parte das informações dos livros mercantis da sua empresa configura o crime de falsificação de documento particular.\nIV. No crime de falsidade ideológica, a forma material do documento é inalterada, sendo falso apenas o conteúdo nele inserido.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "troca-conceito", palavraChave: "documento particular",
    cognitivo: {
      motivo: "Separar falsidade material e ideológica e lembrar as equiparações do CP.",
      palavraCritica: "falsidade ideológica",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I incorreta: cartão de crédito ou débito equipara-se a documento particular (art. 298, parágrafo único): clonagem é falsificação material, não ideológica. Afirmativa II incorreta: o uso de documento falso não é amparado pela autodefesa (STJ, Súmula 522, por analogia, e jurisprudência do STF). Afirmativa III incorreta: livros mercantis equiparam-se a documento PÚBLICO (art. 297, § 2º). Afirmativa IV correta: na falsidade ideológica o suporte é autêntico e só o conteúdo é falso (art. 299). Resta(m) apenas a afirmativa IV.",
      fundamento: "CP, arts. 297, § 2º, 298, parágrafo único, 299 e 304; STJ, Súmula 522.",
      macete: "O papel mente = material. O que está escrito mente = ideológica.",
      erroComum: "Classificar o documento pela origem privada.",
      comoBancaPensa: "Três classificações trocadas e uma definição correta.",
    },
  },

  {
    ...BASE106,
    id: "PP-156", disciplina: "Processo Penal", assunto: "Princípios constitucionais do processo penal",
    subassunto: "Derivado de PP-117, PP-118, PP-119, PP-152 — analogia, não culpabilidade, publicidade e juiz natural",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos princípios e das disposições preliminares do processo penal, considere as seguintes afirmações:\n\nI. A lei processual penal não admite interpretação extensiva e aplicação analógica.\nII. Fere o princípio constitucional da não culpabilidade a definição de maus antecedentes na aplicação da pena, se feita com base em outros processos criminais em curso.\nIII. A lei não poderá restringir a divulgação de nenhum ato processual penal, sob pena de ferir o princípio da publicidade.\nIV. Ninguém será processado nem sentenciado, senão pela autoridade competente, em respeito ao princípio constitucional do juiz natural.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
    ],
    gabarito: "B", pegadinha: "literalidade", palavraChave: "não admite interpretação extensiva",
    cognitivo: {
      motivo: "Separar regras do processo penal de regras do direito penal material.",
      palavraCritica: "nenhum ato",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I incorreta: o art. 3º do CPP admite expressamente interpretação extensiva e aplicação analógica. Afirmativa II correta: processos em curso não servem como maus antecedentes (STJ, Súmula 444). Afirmativa III incorreta: a própria CF autoriza a lei a restringir a publicidade para defesa da intimidade ou do interesse social (art. 5º, LX). Afirmativa IV correta: é o art. 5º, LIII, da CF. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "CPP, art. 3º; CF, art. 5º, LIII, LVII e LX; STJ, Súmula 444.",
      macete: "CPP aceita analogia; publicidade é regra com exceções.",
      erroComum: "Transportar a legalidade estrita penal para o processo.",
      comoBancaPensa: "Duas verdades e duas negações de textos expressos.",
    },
  },

  {
    ...BASE106,
    id: "PP-157", disciplina: "Processo Penal", assunto: "Inquérito policial",
    subassunto: "Derivado de PP-121, PP-122, PP-127, PP-138 — natureza, indisponibilidade, ação privada e flagrante preparado",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca do inquérito policial e da prisão em flagrante, considere as seguintes afirmações:\n\nI. O princípio da ampla defesa e do contraditório é amplamente aplicável ao inquérito policial, uma vez que este é procedimento meramente administrativo.\nII. Uma das principais características do inquérito policial é a sua indisponibilidade, não podendo a autoridade policial proceder ao seu arquivamento, ainda que o fato apurado não configure crime.\nIII. O inquérito policial é um procedimento administrativo que visa à apuração de infrações penais bem como a sua autoria, sendo conduzido pela autoridade policial, com exceção dos crimes que exigem ação penal privada.\nIV. Caracteriza-se como flagrante preparado a situação em que os policiais provocam ou induzem o cometimento do crime pelo agente.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "com exceção dos crimes que exigem ação penal privada",
    cognitivo: {
      motivo: "Fixar as características do inquérito e o conceito de flagrante preparado.",
      palavraCritica: "indisponibilidade",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I incorreta: o inquérito é inquisitivo; contraditório e ampla defesa não incidem em sua plenitude, e a natureza administrativa é justamente a razão disso. Afirmativa II correta: é o art. 17 do CPP: a autoridade policial não pode mandar arquivar o inquérito. Afirmativa III incorreta: nos crimes de ação privada também há inquérito, a requerimento do ofendido (art. 5º, § 5º). Afirmativa IV correta: é a definição de flagrante preparado, que torna o crime impossível (STF, Súmula 145). Resta(m) apenas as afirmativas II e IV.",
      fundamento: "CPP, arts. 5º, § 5º, e 17; STF, Súmula 145.",
      macete: "Delegado instaura, investiga e relata; arquivar, nunca.",
      erroComum: "Achar que a ação privada dispensa investigação.",
      comoBancaPensa: "Junta características do inquérito com uma exceção inventada.",
    },
  },

  {
    ...BASE106,
    id: "PP-158", disciplina: "Processo Penal", assunto: "Prisão em flagrante",
    subassunto: "Derivado de PP-134, PP-136, PP-142, PP-145 — flagrante facultativo, auto de prisão, revogação da preventiva e temporária",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da prisão em flagrante e das prisões cautelares, considere as seguintes afirmações:\n\nI. Considerando os aspectos legais previstos no Código de Processo Penal, a prisão em flagrante pode ser efetuada por qualquer pessoa do povo nas hipóteses em que a infração penal esteja acontecendo ou tenha acabado de acontecer.\nII. Quando o preso se recusar a assinar ou não souber fazê-lo, o fato será consignado ao final do auto de prisão em flagrante e certificada a leitura pela autoridade policial.\nIII. O Ministério Público pode formular requerimento de revogação da prisão preventiva, podendo o juiz atendê-lo de ofício, caso verifique a falta de motivo para sua manutenção.\nIV. A prisão temporária terá o prazo de cinco dias, prorrogável, de forma automática, por igual período.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
      "Apenas as afirmativas I e III estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "D", pegadinha: "literalidade", palavraChave: "certificada a leitura pela autoridade policial",
    cognitivo: {
      motivo: "Conferir formalidades da prisão e os limites de cada cautelar.",
      palavraCritica: "de forma automática",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I correta: qualquer do povo pode prender em flagrante (art. 301 do CPP). Afirmativa II incorreta: se o preso não assinar, o auto é assinado por duas testemunhas que tenham ouvido a leitura (art. 304, § 3º), não basta a certidão da autoridade. Afirmativa III correta: o juiz pode revogar a preventiva de ofício ou a pedido das partes (art. 316); a vedação de atuar de ofício é só para decretar. Afirmativa IV incorreta: a prorrogação da temporária exige extrema e comprovada necessidade e nova decisão (Lei 7.960/1989, art. 2º). Resta(m) apenas as afirmativas I e III.",
      fundamento: "CPP, arts. 301, 304, § 3º, e 316; Lei 7.960/1989, art. 2º.",
      macete: "De ofício: soltar pode, prender não. Temporária: prorroga só com necessidade comprovada.",
      erroComum: "Aceitar a certidão da autoridade no lugar das testemunhas.",
      comoBancaPensa: "Duas literalidades corretas e duas com uma expressão trocada.",
    },
  },

  {
    ...BASE106,
    id: "PP-159", disciplina: "Processo Penal", assunto: "Prisão e medidas cautelares",
    subassunto: "Derivado de PP-144, PP-153, PP-154, PP-135 — temporária, lei processual no tempo e auto de prisão",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca das prisões e da aplicação da lei processual penal no tempo, considere as seguintes afirmações:\n\nI. No que tange às modalidades de prisão previstas no ordenamento jurídico brasileiro, a prisão temporária poderá ser decretada somente em determinados crimes, não abrangendo toda e qualquer infração penal.\nII. Uma norma processual penal só terá aplicabilidade aos crimes que forem praticados após sua entrada em vigor.\nIII. Em relação ao processo penal, lei nova mais benéfica, quando modifica procedimentos no processo penal, retroage e impõe a renovação dos atos já praticados.\nIV. Lavrado o auto de prisão em flagrante, caso o preso se recuse a assiná-lo, a autoridade policial deverá colher a assinatura de duas testemunhas que tenham ouvido a sua leitura na presença da pessoa presa.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
    ],
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "só terá aplicabilidade aos crimes que forem praticados após",
    cognitivo: {
      motivo: "Separar a lei processual (aplicação imediata) da lei penal (data do fato e retroatividade benéfica).",
      palavraCritica: "retroage",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I correta: a temporária só cabe nos crimes do rol da Lei 7.960/1989 e nos hediondos e equiparados. Afirmativa II incorreta: a lei processual aplica-se desde logo, inclusive a crimes anteriores (art. 2º do CPP); o critério da data do fato é da lei penal. Afirmativa III incorreta: a lei processual, ainda que benéfica, não retroage nem anula os atos já praticados (art. 2º do CPP). Afirmativa IV correta: é o art. 304, § 3º, do CPP. Resta(m) apenas as afirmativas I e IV.",
      fundamento: "CPP, arts. 2º e 304, § 3º; Lei 7.960/1989, art. 1º.",
      macete: "Lei processual nova: vale para os próximos atos, seja qual for a data do crime.",
      erroComum: "Aplicar à lei processual a irretroatividade ou a retroatividade benéfica da lei penal.",
      comoBancaPensa: "Duas afirmativas usam critérios da lei penal num tema processual.",
    },
  },

  {
    ...BASE106,
    id: "DA-196", disciplina: "Direito Administrativo", assunto: "Atos administrativos",
    subassunto: "Derivado de DA-098, DA-100, DA-101, DA-116 — elementos e atributos",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos elementos e dos atributos do ato administrativo, considere as seguintes afirmações:\n\nI. Os elementos do ato administrativo são a competência, o objeto, a forma, o motivo e a finalidade.\nII. A finalidade é um requisito necessário à formação do ato administrativo, e se refere ao poder legal atribuído ao agente público para praticar o referido ato.\nIII. Os atributos dos atos administrativos sintetizam-se na imperatividade, na revogabilidade, na tipicidade e na estabilidade.\nIV. Em razão da tipicidade, a administração pública é impedida de praticar um ato unilateral e coercitivo sem previsão legal.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas a afirmativa I está correta.",
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "troca-conceito", palavraChave: "poder legal atribuído ao agente",
    cognitivo: {
      motivo: "Separar elementos (requisitos) de atributos (prerrogativas) do ato.",
      palavraCritica: "revogabilidade",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I correta: são os cinco elementos da Lei 4.717/1965, art. 2º. Afirmativa II incorreta: o poder legal atribuído ao agente é a COMPETÊNCIA; finalidade é o resultado que o ato deve alcançar. Afirmativa III incorreta: revogabilidade e estabilidade não são atributos; os atributos são presunção de legitimidade, imperatividade, autoexecutoriedade e tipicidade. Afirmativa IV correta: a tipicidade impede atos unilaterais e coercitivos sem previsão legal. Resta(m) apenas as afirmativas I e IV.",
      fundamento: "Lei 4.717/1965, art. 2º; doutrina (Di Pietro).",
      macete: "Elementos: COM-FI-FOR-M-OB. Atributos: PATI.",
      erroComum: "Misturar elementos e atributos na mesma lista.",
      comoBancaPensa: "Duas definições corretas e duas misturas de categorias.",
    },
  },

  {
    ...BASE106,
    id: "DA-197", disciplina: "Direito Administrativo", assunto: "Atos administrativos",
    subassunto: "Derivado de DA-104, DA-105, DA-107, DA-108 — espécies e classificações",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca das espécies e classificações dos atos administrativos, considere as seguintes afirmações:\n\nI. Ato administrativo declaratório é aquele que implanta uma nova situação jurídica ou modifica ou extingue uma situação existente.\nII. O fato que não produz qualquer efeito jurídico para os fins do direito administrativo recebe a designação de fato da administração.\nIII. Segundo o STF, o ato que concede aposentadoria a servidor público é um ato administrativo complexo, pois depende da atuação do ente a que o agente é subordinado e da aprovação do Tribunal de Contas.\nIV. Resolução é uma espécie de ato administrativo por meio do qual os órgãos consultivos da administração pública emitem opinião sobre assuntos técnicos ou jurídicos de sua competência.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "B", pegadinha: "troca-conceito", palavraChave: "declaratório",
    cognitivo: {
      motivo: "Associar cada espécie de ato à sua definição.",
      palavraCritica: "Resolução",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I incorreta: o ato que cria, modifica ou extingue situação jurídica é o constitutivo; o declaratório reconhece situação preexistente. Afirmativa II correta: na doutrina de Di Pietro, fato da administração é o que não produz efeito jurídico no direito administrativo. Afirmativa III correta: o STF considera a aposentadoria ato complexo, que se aperfeiçoa com o registro no tribunal de contas. Afirmativa IV incorreta: a opinião de órgão consultivo é o parecer; resolução é ato normativo ou ordinatório de autoridade ou colegiado. Resta(m) apenas as afirmativas II e III.",
      fundamento: "CF, art. 71, III; STF, RE 636.553; doutrina.",
      macete: "Constitutivo cria; declaratório reconhece; parecer opina.",
      erroComum: "Trocar declaratório e constitutivo.",
      comoBancaPensa: "Troca de rótulos em classificações doutrinárias.",
    },
  },

  {
    ...BASE106,
    id: "DA-198", disciplina: "Direito Administrativo", assunto: "Controle da Administração",
    subassunto: "Derivado de DA-119, DA-121, DA-123, DA-129 — autotutela, controle legislativo e controle judicial",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca do controle da administração pública, considere as seguintes afirmações:\n\nI. A anulação de um ato administrativo pela própria administração pública, quando constatada alguma ilegalidade, configura forma de controle interno cuja realização independe de provocação.\nII. O controle realizado pelo Poder Legislativo limita-se ao controle parlamentar e político, sendo reservado ao Judiciário o controle da legalidade de atos administrativos.\nIII. O controle do Poder Legislativo sobre o Executivo assume viés político nas situações em que o Congresso Nacional susta os atos normativos do Poder Executivo que exorbitem do poder regulamentar.\nIV. Compete ao Poder Judiciário realizar controle da conveniência e da oportunidade (controle de mérito) nos atos discricionários.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "C", pegadinha: "troca-sujeito", palavraChave: "Compete ao Poder Judiciário",
    cognitivo: {
      motivo: "Saber o que cada Poder controla.",
      palavraCritica: "limita-se",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I correta: é a autotutela (STF, Súmula 473): a Administração anula seus atos ilegais de ofício. Afirmativa II incorreta: o Legislativo também faz controle financeiro e de legalidade, com o auxílio do tribunal de contas (CF, arts. 70 e 71). Afirmativa III correta: a sustação de atos normativos que exorbitem do poder regulamentar (CF, art. 49, V) é controle político. Afirmativa IV incorreta: o mérito é controlado só pela própria Administração; o Judiciário controla a legalidade. Resta(m) apenas as afirmativas I e III.",
      fundamento: "CF, arts. 49, V, 70 e 71; STF, Súmula 473.",
      macete: "Mérito: só a Administração. Legalidade: os três.",
      erroComum: "Atribuir ao Judiciário o controle de mérito.",
      comoBancaPensa: "Restringe e estende competências de controle.",
    },
  },

  {
    ...BASE106,
    id: "DA-199", disciplina: "Direito Administrativo", assunto: "Organização administrativa",
    subassunto: "Derivado de DA-131, DA-141, DA-146, DA-148 — desconcentração, personalidade e descentralização",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da organização administrativa, considere as seguintes afirmações:\n\nI. A distribuição de competências entre os órgãos internos sem personalidade jurídica que pertençam a uma mesma pessoa jurídica denomina-se desconcentração.\nII. Com base no que dispõe o Decreto-Lei n.º 200/1967, são dotadas de personalidade jurídica de direito público as fundações públicas, as autarquias e as empresas públicas.\nIII. Mesmo sendo parte integrante da estrutura do Estado, os órgãos públicos têm personalidade jurídica e vontade próprias.\nIV. No tocante à organização administrativa, ocorre descentralização administrativa quando o Estado concede ao particular determinado serviço público mediante celebração de um contrato.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "D", pegadinha: "troca-conceito", palavraChave: "têm personalidade jurídica",
    cognitivo: {
      motivo: "Separar órgão de entidade e desconcentração de descentralização.",
      palavraCritica: "empresas públicas",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I correta: é a definição de desconcentração: distribuição interna de competências na mesma pessoa jurídica. Afirmativa II incorreta: empresa pública tem personalidade de direito privado (Decreto-Lei 200/1967, art. 5º, II). Afirmativa III incorreta: órgãos públicos não têm personalidade jurídica; sua vontade é a da pessoa a que pertencem. Afirmativa IV correta: conceder serviço ao particular por contrato é descentralização por colaboração (CF, art. 175). Resta(m) apenas as afirmativas I e IV.",
      fundamento: "Decreto-Lei 200/1967, art. 5º; Lei 9.784/1999, art. 1º, § 2º; CF, art. 175.",
      macete: "Órgão: sem personalidade. Empresa pública: privada.",
      erroComum: "Deduzir a personalidade pelo nome 'pública'.",
      comoBancaPensa: "Duas definições corretas e dois erros de personalidade jurídica.",
    },
  },

  {
    ...BASE106,
    id: "DA-200", disciplina: "Direito Administrativo", assunto: "Poderes administrativos",
    subassunto: "Derivado de DA-157, DA-160, DA-162, DA-163 — regulamentar, polícia e abuso de poder",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos poderes administrativos, considere as seguintes afirmações:\n\nI. No exercício do poder regulamentar, o chefe do Poder Executivo é autorizado a editar atos normativos primários, podendo inovar livremente na ordem jurídica sempre que necessário à execução das leis.\nII. São atributos do poder de polícia a discricionariedade, a autoexecutoriedade e a coercibilidade.\nIII. Segundo a jurisprudência do STF, o poder de polícia fragmenta-se em cinco etapas: ordem, consentimento, fiscalização, apuração e sanção, sendo somente a última impassível de delegação a pessoa jurídica de direito privado.\nIV. O excesso de poder e o desvio de poder são espécies de abuso de poder que se diferenciam porque, no primeiro, a atuação do agente público é eivada de vício de competência, enquanto, no segundo, há vício de finalidade.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
    ],
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "cinco etapas",
    cognitivo: {
      motivo: "Conferir limites do poder regulamentar e a tese do ciclo de polícia.",
      palavraCritica: "atos normativos primários",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I incorreta: o regulamento é ato secundário, para fiel execução da lei (CF, art. 84, IV); não inova livremente na ordem jurídica. Afirmativa II correta: discricionariedade, autoexecutoriedade e coercibilidade são os atributos clássicos do poder de polícia. Afirmativa III incorreta: o ciclo de polícia tem quatro fases (ordem, consentimento, fiscalização, sanção), e a indelegável é a ordem (STF, Tema 532). Afirmativa IV correta: excesso de poder é vício de competência; desvio de poder, vício de finalidade. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "CF, art. 84, IV e VI; STF, RE 633.782 (Tema 532).",
      macete: "Ciclo de polícia: O-C-F-S. Indelegável: a ordem.",
      erroComum: "Achar que a sanção é a fase indelegável.",
      comoBancaPensa: "Mistura atributos clássicos com uma tese de repercussão geral distorcida.",
    },
  },

  {
    ...BASE106,
    id: "DA-201", disciplina: "Direito Administrativo", assunto: "Lei de Licitações (14.133/2021)",
    subassunto: "Derivado de DA-169, DA-173, DA-178, DA-179 — objetivos, modalidades, inexigibilidade e dispensa",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da Lei n.º 14.133/2021, considere as seguintes afirmações:\n\nI. Entre os objetivos do processo licitatório está o incentivo à inovação e ao desenvolvimento nacional sustentável.\nII. A Lei n.º 14.133/2021 estabelece como modalidades de licitação o pregão, a concorrência, o concurso, o leilão, o diálogo competitivo e a tomada de preços.\nIII. É inexigível a licitação nos casos de contratação, com profissionais ou empresas de notória especialização, de serviços técnicos especializados relativos a fiscalização, supervisão ou gerenciamento de obras.\nIV. É dispensável a realização de licitação, quando inviável a competição, nos casos de aquisição de materiais ou equipamentos que só possam ser fornecidos por produtor, empresa ou representante comercial exclusivos.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
    ],
    gabarito: "A", pegadinha: "troca-conceito", palavraChave: "É dispensável",
    cognitivo: {
      motivo: "Separar dispensa (competição possível) de inexigibilidade (competição inviável).",
      palavraCritica: "tomada de preços",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I correta: incentivar a inovação e o desenvolvimento nacional sustentável é objetivo do art. 11, IV. Afirmativa II incorreta: a tomada de preços foi extinta; as modalidades são pregão, concorrência, concurso, leilão e diálogo competitivo (art. 28). Afirmativa III correta: é o art. 74, III, 'd': serviço técnico de fiscalização de obras com notória especialização. Afirmativa IV incorreta: fornecedor exclusivo, com competição inviável, é caso de INEXIGIBILIDADE (art. 74, I), não de dispensa. Resta(m) apenas as afirmativas I e III.",
      fundamento: "Lei 14.133/2021, arts. 11, 28, 74 e 75.",
      macete: "Inviável competir = inexigível. Possível, mas a lei libera = dispensável.",
      erroComum: "Aceitar a lista de modalidades por conter as cinco corretas.",
      comoBancaPensa: "Uma modalidade revogada e um rótulo trocado.",
    },
  },

  {
    ...BASE106,
    id: "DA-202", disciplina: "Direito Administrativo", assunto: "Responsabilidade civil do Estado",
    subassunto: "Derivado de DA-185, DA-189, DA-192, DA-195 — teorias, omissão, excludentes e dano nuclear",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da responsabilidade civil do Estado, considere as seguintes afirmações:\n\nI. A responsabilidade civil do Estado no Brasil é objetiva, fundada na teoria do risco integral, bastando a demonstração da ocorrência do dano.\nII. Para a caracterização da responsabilidade por omissão estatal, é necessária a violação de um dever jurídico específico de agir do Estado.\nIII. A respeito da responsabilidade civil do Estado, caso fortuito, força maior e culpa concorrente da vítima são causas excludentes da responsabilidade do Estado.\nIV. A responsabilidade civil por danos nucleares, tenham eles sido causados por ato comissivo ou omissivo, independe da existência de culpa.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "B", pegadinha: "verdade-mais-falso", palavraChave: "culpa concorrente",
    cognitivo: {
      motivo: "Separar risco administrativo, risco integral e as excludentes.",
      palavraCritica: "risco integral",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I incorreta: a regra é o risco ADMINISTRATIVO, que exige nexo causal e admite excludentes; risco integral é exceção. Afirmativa II correta: a omissão só gera responsabilidade quando há dever jurídico específico de agir. Afirmativa III incorreta: a culpa CONCORRENTE apenas atenua a indenização; exclusiva é que exclui. Afirmativa IV correta: é o art. 21, XXIII, 'd', da CF. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "CF, arts. 21, XXIII, 'd', e 37, § 6º; Código Civil, art. 945.",
      macete: "Exclusiva exclui; concorrente reduz. Regra: risco administrativo.",
      erroComum: "Tratar responsabilidade objetiva como risco integral.",
      comoBancaPensa: "Listas com um elemento errado e uma teoria trocada.",
    },
  },

  {
    ...BASE106,
    id: "DC-197", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais",
    subassunto: "Derivado de DC-138, DC-146, DC-150, DC-152 — anonimato, associações, pena de morte e reunião",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos direitos e das garantias fundamentais previstos na Constituição Federal, considere as seguintes afirmações:\n\nI. A CF, ao prever a liberdade de manifestação do pensamento como garantia fundamental, veda o anonimato.\nII. As associações somente poderão ser compulsoriamente dissolvidas ou ter suas atividades suspensas por decisão judicial com trânsito em julgado.\nIII. A pena de morte é vedada em qualquer hipótese pela Constituição Federal.\nIV. À luz da CF e da jurisprudência do STF, o exercício do direito de reunião exige a prévia notificação pessoal ou registrada do poder público.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas a afirmativa I está correta.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
    ],
    gabarito: "C", pegadinha: "literalidade", palavraChave: "em qualquer hipótese",
    cognitivo: {
      motivo: "Conferir as ressalvas do art. 5º que a banca apaga.",
      palavraCritica: "trânsito em julgado",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I correta: é o art. 5º, IV: livre a manifestação do pensamento, vedado o anonimato. Afirmativa II incorreta: o trânsito em julgado é exigido só para a dissolução compulsória; a suspensão basta decisão judicial (art. 5º, XIX). Afirmativa III incorreta: a pena de morte é admitida em caso de guerra declarada (art. 5º, XLVII, 'a'). Afirmativa IV incorreta: o aviso prévio do direito de reunião não exige notificação formal (STF, Tema 855). Resta(m) apenas a afirmativa I.",
      fundamento: "CF, art. 5º, IV, XVI, XIX e XLVII; STF, RE 806.339.",
      macete: "Dissolver: trânsito em julgado. Suspender: qualquer decisão. Morte: só na guerra declarada.",
      erroComum: "Ignorar as ressalvas de cada inciso.",
      comoBancaPensa: "Três ressalvas apagadas e um inciso literal.",
    },
  },

  {
    ...BASE106,
    id: "DC-198", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais",
    subassunto: "Derivado de DC-148, DC-151, DC-157, DC-162 — aplicabilidade, reunião, domicílio e mandado de injunção",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos direitos fundamentais e dos remédios constitucionais, considere as seguintes afirmações:\n\nI. As disposições constitucionais definidoras dos direitos e das garantias fundamentais carecem da atuação do legislador infraconstitucional para a viabilização dos direitos nelas veiculados.\nII. Mediante prévio aviso à autoridade competente e desde que não frustre reunião já convocada para o mesmo local, um grupo de pessoas pode se reunir pacificamente na Esplanada dos Ministérios.\nIII. Não obstante a previsão constitucional de inviolabilidade da casa do indivíduo, é permitido nela adentrar, a qualquer hora do dia ou da noite, para o cumprimento de mandado judicial que tenha decretado prisão preventiva.\nIV. O mandado de injunção é cabível diante da ausência, total ou parcial, de norma regulamentadora que inviabilize o exercício dos direitos e das liberdades constitucionais.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "D", pegadinha: "generalizacao", palavraChave: "a qualquer hora do dia ou da noite",
    cognitivo: {
      motivo: "Aplicar regras gerais de direitos fundamentais e os limites da inviolabilidade do domicílio.",
      palavraCritica: "carecem",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I incorreta: as normas definidoras de direitos e garantias fundamentais têm aplicação imediata (art. 5º, § 1º). Afirmativa II correta: reunião pacífica, com prévio aviso e sem frustrar outra reunião, independe de autorização (art. 5º, XVI). Afirmativa III incorreta: por determinação judicial, só se entra na casa durante o dia (art. 5º, XI). Afirmativa IV correta: o mandado de injunção cabe por omissão total ou parcial (Lei 13.300/2016, art. 2º). Resta(m) apenas as afirmativas II e IV.",
      fundamento: "CF, art. 5º, XI, XVI, LXXI e § 1º; Lei 13.300/2016, art. 2º.",
      macete: "Casa: ordem judicial só de dia.",
      erroComum: "Estender ao mandado a regra do flagrante.",
      comoBancaPensa: "Inverte uma regra e generaliza outra.",
    },
  },

  {
    ...BASE106,
    id: "DC-199", disciplina: "Direito Constitucional", assunto: "Direitos sociais",
    subassunto: "Derivado de DC-163, DC-165, DC-167, DC-169 — rol do art. 6º, renda básica, aviso prévio e domésticos",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos direitos sociais previstos na Constituição Federal, considere as seguintes afirmações:\n\nI. A segurança é um direito social assegurado expressamente na CF.\nII. A renda básica familiar é direito de todos os brasileiros, a ser garantido pelo poder público em programa permanente de transferência de renda.\nIII. Aos trabalhadores urbanos e rurais é garantido o direito ao aviso prévio de, no máximo, 30 dias, independentemente do tempo de serviço.\nIV. Não se estende aos trabalhadores domésticos a integralidade dos direitos trabalhistas estabelecidos pela CF para os trabalhadores urbanos e rurais.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
    ],
    gabarito: "E", pegadinha: "literalidade", palavraChave: "no máximo, 30 dias",
    cognitivo: {
      motivo: "Conferir o recorte e os números dos direitos sociais.",
      palavraCritica: "de todos os brasileiros",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I correta: a segurança está no rol do art. 6º. Afirmativa II incorreta: a renda básica familiar é garantida ao brasileiro em situação de vulnerabilidade social, não a todos (art. 6º, parágrafo único). Afirmativa III incorreta: o aviso prévio é proporcional ao tempo de serviço, de no MÍNIMO 30 dias (art. 7º, XXI). Afirmativa IV correta: os domésticos têm parte, e não a integralidade, dos direitos do art. 7º (parágrafo único). Resta(m) apenas as afirmativas I e IV.",
      fundamento: "CF, arts. 6º e 7º, XXI e parágrafo único.",
      macete: "Aviso prévio: mínimo 30. Renda básica: só vulneráveis.",
      erroComum: "Trocar mínimo por máximo.",
      comoBancaPensa: "Duas literalidades corretas e duas com recorte alterado.",
    },
  },

  {
    ...BASE106,
    id: "DC-200", disciplina: "Direito Constitucional", assunto: "Nacionalidade",
    subassunto: "Derivado de DC-171, DC-173, DC-174, DC-176 — opção, naturalização, renúncia e extradição",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da nacionalidade, à luz da Constituição Federal, considere as seguintes afirmações:\n\nI. O nascido no estrangeiro, com pai brasileiro ou mãe brasileira, que venha a residir no Brasil adquire automaticamente a condição de brasileiro nato ao atingir a maioridade civil.\nII. O cancelamento da naturalização por sentença judicial transitada em julgado tem por consequência a cassação dos direitos políticos.\nIII. A renúncia da nacionalidade brasileira, por meio de pedido expresso à autoridade brasileira competente, não impede o interessado de readquirir sua nacionalidade brasileira originária, nos termos da lei.\nIV. O brasileiro nato somente poderá ser extraditado na hipótese de comprovado envolvimento em tráfico ilícito de entorpecentes e drogas afins.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "troca-sujeito", palavraChave: "O brasileiro nato",
    cognitivo: {
      motivo: "Conferir regras de nacionalidade alteradas e as diferenças entre nato e naturalizado.",
      palavraCritica: "automaticamente",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I incorreta: o nascido no estrangeiro de pai ou mãe brasileira que venha a residir no Brasil precisa OPTAR pela nacionalidade (art. 12, I, 'c'). Afirmativa II incorreta: o cancelamento da naturalização gera PERDA dos direitos políticos; a cassação é vedada (art. 15). Afirmativa III correta: a renúncia não impede a readquisição da nacionalidade originária (art. 12, § 5º, EC 131/2023). Afirmativa IV incorreta: o brasileiro nato nunca é extraditado; a exceção do tráfico é do naturalizado (art. 5º, LI). Resta(m) apenas a afirmativa III.",
      fundamento: "CF, arts. 5º, LI, 12 e 15 (EC 131/2023).",
      macete: "Nato: nunca extraditado. Desde 2023: quem renuncia pode voltar.",
      erroComum: "Responder pela redação anterior à EC 131/2023.",
      comoBancaPensa: "Três afirmativas com um detalhe trocado e uma regra nova correta.",
    },
  },

  {
    ...BASE106,
    id: "DC-201", disciplina: "Direito Constitucional", assunto: "Direitos políticos",
    subassunto: "Derivado de DC-178, DC-179, DC-182, DC-187 — alistamento, inalistáveis, improbidade e partidos",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos direitos políticos e dos partidos políticos, considere as seguintes afirmações:\n\nI. Para os maiores de dezesseis e menores de dezoito anos de idade, é facultativo o voto, mas obrigatório o alistamento eleitoral.\nII. A alistabilidade, que se refere à capacidade do indivíduo de ser eleitor, com direito de participar da escolha dos mandatários, é vedada aos estrangeiros e, durante o período do serviço militar obrigatório, aos conscritos.\nIII. A condenação por improbidade administrativa tem como consequência inerente a cassação dos direitos políticos.\nIV. Conforme disposto na CF, os partidos políticos submetem-se ao dever de prestar contas à justiça eleitoral e aos tribunais de contas.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa I está correta.",
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
    ],
    gabarito: "B", pegadinha: "literalidade", palavraChave: "cassação",
    cognitivo: {
      motivo: "Fixar a terminologia do art. 15 e as regras de alistamento.",
      palavraCritica: "obrigatório o alistamento",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I incorreta: para os maiores de 16 e menores de 18, alistamento e voto são facultativos (art. 14, § 1º, II). Afirmativa II correta: estrangeiros e conscritos são inalistáveis (art. 14, § 2º). Afirmativa III incorreta: a improbidade leva à SUSPENSÃO dos direitos políticos; a cassação é vedada (arts. 15 e 37, § 4º). Afirmativa IV incorreta: os partidos prestam contas à Justiça Eleitoral (art. 17, III); não há previsão de contas ao tribunal de contas. Resta(m) apenas a afirmativa II.",
      fundamento: "CF, arts. 14, §§ 1º e 2º, 15, 17, III, e 37, § 4º.",
      macete: "Direitos políticos: perda ou suspensão, nunca cassação.",
      erroComum: "Usar 'cassação' como sinônimo de suspensão.",
      comoBancaPensa: "Uma literalidade correta e três com uma palavra trocada.",
    },
  },

  {
    ...BASE106,
    id: "DC-202", disciplina: "Direito Constitucional", assunto: "Segurança pública",
    subassunto: "Derivado de DC-189, DC-190, DC-191, DC-193 — PF, polícias civis e greve",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da segurança pública na Constituição Federal, considere as seguintes afirmações:\n\nI. No sistema de segurança pública constitucionalmente instituído, à Polícia Federal cabe o exercício das funções de polícia marítima, aeroportuária, rodoviária, judiciária da União e de fronteiras.\nII. O exercício das funções de polícia judiciária da União é de competência exclusiva da Polícia Federal.\nIII. Às polícias civis incumbem, ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, administrativas e, eventualmente, militares.\nIV. O exercício do direito de greve é vedado aos policiais civis que atuem diretamente na área de segurança pública.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "C", pegadinha: "literalidade", palavraChave: "rodoviária",
    cognitivo: {
      motivo: "Conferir atribuições constitucionais de cada polícia.",
      palavraCritica: "eventualmente, militares",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I incorreta: o patrulhamento das rodovias federais é da PRF; a PF tem polícia marítima, aeroportuária, de fronteiras e judiciária da União. Afirmativa II correta: o art. 144, § 1º, IV, dá à PF, com exclusividade, a polícia judiciária da União. Afirmativa III incorreta: às polícias civis cabe a apuração de infrações penais, EXCETO as militares (art. 144, § 4º). Afirmativa IV correta: o STF vedou a greve aos policiais civis e servidores que atuam diretamente na segurança pública (Tema 541). Resta(m) apenas as afirmativas II e IV.",
      fundamento: "CF, art. 144, §§ 1º, 2º e 4º; STF, ARE 654.432.",
      macete: "PF: mar, ar, fronteira, judiciária da União. Polícia civil: penais, exceto militares.",
      erroComum: "Somar 'rodoviária' à lista da PF.",
      comoBancaPensa: "Literalidades com uma palavra acrescentada ou invertida.",
    },
  },

  {
    ...BASE106,
    id: "DH-278", disciplina: "Direitos Humanos", assunto: "Direitos humanos na Constituição",
    subassunto: "Derivado de DH-246, DH-250, DH-257, DH-258 — CF, tratados e dimensões",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos direitos humanos na Constituição Federal e de sua teoria geral, considere as seguintes afirmações:\n\nI. Um dos objetivos fundamentais da República Federativa do Brasil é a prevalência dos direitos humanos.\nII. Os tratados e convenções internacionais sobre direitos humanos que forem aprovados pelo Congresso Nacional por maioria simples serão equivalentes às emendas constitucionais.\nIII. Os direitos humanos não são absolutos, podendo sofrer limitações no caso de confronto com outros direitos, na medida em que possam ser relativizados.\nIV. Os direitos humanos de segunda dimensão correspondem aos direitos sociais, que visam a oferecer os meios materiais imprescindíveis à efetivação dos direitos individuais.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "D", pegadinha: "troca-conceito", palavraChave: "maioria simples",
    cognitivo: {
      motivo: "Conferir posição de cada norma na CF e as características dos direitos humanos.",
      palavraCritica: "objetivos fundamentais",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I incorreta: a prevalência dos direitos humanos é princípio das relações internacionais (art. 4º, II), não objetivo fundamental (art. 3º). Afirmativa II incorreta: para equivaler a emenda, o tratado precisa de três quintos, em dois turnos, nas duas Casas (art. 5º, § 3º). Afirmativa III correta: os direitos humanos são, em regra, relativos e podem ser ponderados. Afirmativa IV correta: a segunda dimensão corresponde aos direitos sociais, econômicos e culturais. Resta(m) apenas as afirmativas III e IV.",
      fundamento: "CF, arts. 3º, 4º, II, e 5º, § 3º; doutrina.",
      macete: "1ª liberdade, 2ª igualdade, 3ª fraternidade. Tratado com status de emenda: 3/5.",
      erroComum: "Confundir os arts. 3º e 4º da CF.",
      comoBancaPensa: "Duas trocas de categoria e duas verdades doutrinárias.",
    },
  },

  {
    ...BASE106,
    id: "DH-279", disciplina: "Direitos Humanos", assunto: "Convenção Americana sobre Direitos Humanos",
    subassunto: "Derivado de DH-259, DH-260, DH-262, DH-266 — gerações, pena de morte, direitos políticos e publicidade",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da Convenção Americana sobre Direitos Humanos e da evolução dos direitos humanos, considere as seguintes afirmações:\n\nI. Os direitos de terceira geração resultam da globalização dos direitos humanos e correspondem aos direitos de participação democrática, pluralismo, bioética e limites à manipulação genética.\nII. O Pacto de São José da Costa Rica veda a execução da pena de morte enquanto pendente a decisão da autoridade competente para a apreciação do seu pedido.\nIII. À luz da Convenção Americana dos Direitos Humanos, todos os cidadãos devem possuir o direito de participar da direção dos assuntos públicos.\nIV. A respeito do Pacto de São José da Costa Rica (Convenção Americana sobre Direitos Humanos), em atenção às garantias à intimidade e à vida privada, o processo penal deve ser prioritariamente sigiloso.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
    ],
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "terceira geração",
    cognitivo: {
      motivo: "Conferir a literalidade da CADH e a classificação das gerações.",
      palavraCritica: "prioritariamente sigiloso",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I incorreta: participação democrática, pluralismo e bioética são apontados como direitos de quarta geração; a terceira é a da fraternidade (ambiente, paz, desenvolvimento). Afirmativa II correta: a CADH proíbe executar a pena de morte com pedido de anistia, indulto ou comutação pendente (art. 4.6). Afirmativa III correta: a CADH garante a todos os cidadãos participar na direção dos assuntos públicos (art. 23.1). Afirmativa IV incorreta: o processo penal deve ser público, salvo para preservar os interesses da justiça (art. 8.5). Resta(m) apenas as afirmativas II e III.",
      fundamento: "CADH, arts. 4.6, 8.5 e 23.1; doutrina (Bonavides).",
      macete: "Processo penal: público, com exceção justificada.",
      erroComum: "Inverter regra e exceção da publicidade.",
      comoBancaPensa: "Duas literalidades corretas e duas inversões.",
    },
  },

  {
    ...BASE106,
    id: "LE-398", disciplina: "Legislação Especial", assunto: "Lei de Tortura",
    subassunto: "Derivado de LE-335, LE-336, LE-337, LE-339 — espécies, intensidade, majorantes e efeitos",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da Lei n.º 9.455/1997 (Lei de Tortura), considere as seguintes afirmações:\n\nI. Caracteriza uma das espécies do crime de tortura a conduta consistente em, com emprego de grave ameaça, constranger outrem em razão de discriminação racial, causando-lhe sofrimento mental.\nII. Praticam o crime de tortura policiais rodoviários federais que, dentro de um posto policial, submetem o autor de crime a sofrimento físico, independentemente de sua intensidade.\nIII. De acordo com a Lei n.º 9.455/1997 (Lei de Tortura), o cometimento de crime de tortura no período noturno é causa de aumento de pena de um sexto a um terço.\nIV. Tendo como referência a legislação penal extravagante, a condenação pela prática de crime de tortura acarretará a perda do cargo, função ou emprego público e a interdição para o seu exercício por prazo igual ao da pena aplicada.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa I está correta.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "literalidade", palavraChave: "pelo dobro do prazo",
    cognitivo: {
      motivo: "Memorizar os elementos e números da Lei de Tortura.",
      palavraCritica: "independentemente de sua intensidade",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I correta: a tortura por discriminação racial ou religiosa está no art. 1º, I, 'c'. Afirmativa II incorreta: a tortura-castigo exige INTENSO sofrimento físico ou mental (art. 1º, II). Afirmativa III incorreta: as majorantes são agente público, vítima vulnerável e sequestro; período noturno não está entre elas (§ 4º). Afirmativa IV incorreta: a interdição para o cargo dura o DOBRO do prazo da pena (§ 5º). Resta(m) apenas a afirmativa I.",
      fundamento: "Lei 9.455/1997, art. 1º, I, II, §§ 4º e 5º.",
      macete: "Tortura: castigo com sofrimento intenso; perda do cargo + interdição pelo dobro.",
      erroComum: "Trocar o dobro por prazo igual.",
      comoBancaPensa: "Três afirmativas com um elemento suprimido ou trocado.",
    },
  },

  {
    ...BASE106,
    id: "LE-399", disciplina: "Legislação Especial", assunto: "Crimes Hediondos",
    subassunto: "Derivado de LE-341, LE-342, LE-344, LE-362 — critério legal, rol, temporária e lavagem com ativo virtual",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da legislação penal especial, considere as seguintes afirmações:\n\nI. O ordenamento jurídico nacional adotou o critério legal para a tipificação dos crimes hediondos, sendo vedado ao juiz, em caso concreto, fixar a hediondez de um delito ou excluí-la em razão de sua gravidade ou forma de execução.\nII. Referente aos crimes hediondos, entre outros delitos, podem ser apontados como crimes hediondos o estupro de vulnerável, o roubo qualificado pelo resultado lesão corporal grave ou morte e o contrabando.\nIII. Acerca da Lei n.º 8.072/1990 (Lei de Crimes Hediondos), nos crimes hediondos, a prisão temporária terá o prazo de trinta dias, podendo ser prorrogada, de forma automática, por igual período.\nIV. Com base no Código Penal e na Lei n.º 9.613/1998, a utilização de criptomoeda no crime de lavagem de dinheiro praticado de forma reiterada é causa de aumento de pena de 1/3 a 2/3.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "B", pegadinha: "literalidade", palavraChave: "de forma automática",
    cognitivo: {
      motivo: "Conferir o rol e as regras processuais dos hediondos e uma majorante recente da lavagem.",
      palavraCritica: "contrabando",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I correta: o Brasil adota o critério legal: hediondo é o que está na lista do art. 1º da Lei 8.072/1990. Afirmativa II incorreta: contrabando não é crime hediondo. Afirmativa III incorreta: a temporária nos hediondos (30 + 30 dias) só se prorroga em extrema e comprovada necessidade (art. 2º, § 4º). Afirmativa IV correta: a Lei 14.478/2022 incluiu no art. 1º, § 4º, da Lei 9.613/1998 o aumento de 1/3 a 2/3 pelo uso de ativo virtual. Resta(m) apenas as afirmativas I e IV.",
      fundamento: "Lei 8.072/1990, arts. 1º e 2º, § 4º; Lei 9.613/1998, art. 1º, § 4º.",
      macete: "Hediondo: está na lista ou não é.",
      erroComum: "Aceitar a lista do item II por conter dois hediondos verdadeiros.",
      comoBancaPensa: "Uma lista com intruso e uma condição apagada.",
    },
  },

  {
    ...BASE106,
    id: "LE-400", disciplina: "Legislação Especial", assunto: "Crimes de Racismo",
    subassunto: "Derivado de LE-329, LE-331, LE-332, LE-380 — injúria racial, racismo recreativo, nazismo e discriminação de PcD",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos crimes resultantes de preconceito e de discriminação, considere as seguintes afirmações:\n\nI. Considerando a jurisprudência do STF e a Lei n.º 7.716/1989, a injúria racial configura prática de racismo e, portanto, é uma infração penal inafiançável e imprescritível.\nII. À luz da Lei n.º 7.716/1989, se alguém pratica crime resultante de preconceito racial com intuito de descontração, diversão ou recreação, a sua pena será aumentada de um terço à metade.\nIII. À luz da Lei n.º 7.716/1989, configura crime o ato de veicular ornamento ou propaganda que utilize a cruz suástica ou gamada, com a finalidade de divulgação do nazismo.\nIV. Acerca do Estatuto da Pessoa com Deficiência, a pena prevista para quem discriminar pessoa em razão de sua deficiência será a mesma se o ato ocorrer por intermédio de meios de comunicação social ou não.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa I está correta.",
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I, II e III estão corretas.",
      "Apenas as afirmativas I e II estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "C", pegadinha: "literalidade", palavraChave: "será a mesma",
    cognitivo: {
      motivo: "Conferir mudanças recentes na Lei 7.716/1989 e a forma qualificada do EPD.",
      palavraCritica: "meios de comunicação social",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I correta: o STF (HC 154.248) e a Lei 14.532/2023 tratam a injúria racial como espécie de racismo, imprescritível e inafiançável. Afirmativa II correta: o art. 20-A da Lei 7.716/1989 aumenta a pena de 1/3 até a metade no racismo recreativo. Afirmativa III correta: é o art. 20, § 1º, da Lei 7.716/1989. Afirmativa IV incorreta: a discriminação de pessoa com deficiência por meio de comunicação social tem pena maior (Lei 13.146/2015, art. 88, § 2º). Resta(m) apenas as afirmativas I, II e III.",
      fundamento: "Lei 7.716/1989, arts. 2º-A, 20, § 1º, e 20-A; Lei 13.146/2015, art. 88, § 2º; STF, HC 154.248.",
      macete: "Racismo 'de brincadeira': pena maior. Discriminação na mídia: forma qualificada.",
      erroComum: "Ignorar a qualificadora do meio de comunicação.",
      comoBancaPensa: "Três verdades e uma negação de qualificadora.",
    },
  },

  {
    ...BASE106,
    id: "LE-401", disciplina: "Legislação Especial", assunto: "Abuso de Autoridade",
    subassunto: "Derivado de LE-369, LE-371, LE-372, LE-377 — ação penal, sujeito ativo, perda do cargo e crimes contra o idoso",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da Lei de Abuso de Autoridade e do Estatuto da Pessoa Idosa, considere as seguintes afirmações:\n\nI. Relativos às condutas tipificadas na Lei n.º 13.869/2019, que trata dos crimes de abuso de autoridade, os crimes previstos nessa lei são de ação penal pública incondicionada, sendo incabível a queixa subsidiária.\nII. Acerca do crime de abuso de autoridade, o crime de abuso de autoridade é passível de cometimento por particular que venha a exercer função pública, transitoriamente e sem remuneração.\nIII. Acerca do crime de abuso de autoridade, um dos efeitos da condenação pelo crime de abuso de autoridade é a perda do cargo público. Porém, esse efeito somente ocorrerá no caso de reincidência em crimes dessa mesma natureza.\nIV. Com base na Lei n.º 10.741/2003, a negativa de crédito bancário à pessoa idosa motivada por superendividamento constitui crime previsto no Estatuto da Pessoa Idosa.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
    ],
    gabarito: "D", pegadinha: "literalidade", palavraChave: "incabível a queixa subsidiária",
    cognitivo: {
      motivo: "Conferir regras de ação, sujeito e efeitos da Lei 13.869/2019 e uma ressalva do Estatuto da Pessoa Idosa.",
      palavraCritica: "superendividamento",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I incorreta: os crimes de abuso são de ação pública incondicionada, mas cabe a ação privada subsidiária (art. 3º, §§ 1º e 2º). Afirmativa II correta: o particular que exerce função pública, ainda que transitoriamente e sem remuneração, é agente público para a lei (art. 2º). Afirmativa III correta: a perda do cargo depende de reincidência em abuso de autoridade e de declaração motivada (art. 4º, parágrafo único). Afirmativa IV incorreta: não constitui crime a negativa de crédito ao idoso por superendividamento (Lei 10.741/2003, art. 96, § 3º). Resta(m) apenas as afirmativas II e III.",
      fundamento: "Lei 13.869/2019, arts. 2º, 3º e 4º; Lei 10.741/2003, art. 96, § 3º.",
      macete: "Abuso: incondicionada com subsidiária; perda do cargo só para reincidente.",
      erroComum: "Achar que ação incondicionada exclui a subsidiária.",
      comoBancaPensa: "Duas verdades e duas negações de dispositivos expressos.",
    },
  },

  {
    ...BASE106,
    id: "LE-402", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro",
    subassunto: "Derivado de LE-361, LE-363, LE-393, LE-394 — autonomia, colaboração e organização criminosa",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da lavagem de dinheiro e das organizações criminosas, considere as seguintes afirmações:\n\nI. Com base na Lei n.º 9.613/1998, para que se configure o crime de lavagem de dinheiro, é necessário que o agente tenha participado do crime antecedente, seja como autor, seja como partícipe.\nII. De acordo com a Lei n.º 9.613/1998, a colaboração premiada, no âmbito do processo penal por crime de lavagem de dinheiro, exige acordo homologado judicialmente antes do oferecimento da denúncia, sob pena de nulidade.\nIII. Com base na Lei n.º 12.850/2013, o fato de o produto de infração praticada por organização criminosa destinar-se, mesmo que em parte, ao exterior é causa de aumento de pena.\nIV. Com base na Lei n.º 12.850/2013, a ação controlada será previamente comunicada, com distribuição sigilosa, ao juiz competente, que estabelecerá os limites e comunicará ao Ministério Público.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
    ],
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "exige acordo homologado",
    cognitivo: {
      motivo: "Separar as regras de colaboração das duas leis e lembrar a autonomia da lavagem.",
      palavraCritica: "é necessário que o agente tenha participado",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I incorreta: a lavagem é autônoma; o agente não precisa ter participado do crime antecedente. Afirmativa II incorreta: a colaboração na lavagem pode ocorrer a qualquer tempo e não exige acordo homologado antes da denúncia (art. 1º, § 5º). Afirmativa III correta: o produto destinado, no todo ou em parte, ao exterior aumenta a pena da organização criminosa (Lei 12.850/2013, art. 2º, § 4º, III). Afirmativa IV correta: a ação controlada é previamente comunicada ao juiz, com distribuição sigilosa (art. 8º, §§ 1º e 2º). Resta(m) apenas as afirmativas III e IV.",
      fundamento: "Lei 9.613/1998, arts. 1º, § 5º, e 2º, II; Lei 12.850/2013, arts. 2º, § 4º, e 8º.",
      macete: "Lavagem: autônoma; colaboração a qualquer tempo. Ação controlada na orcrim: comunica.",
      erroComum: "Importar para a lavagem o rito do acordo da Lei 12.850/2013.",
      comoBancaPensa: "Duas exigências inexistentes e duas literalidades.",
    },
  },

  {
    ...BASE106,
    id: "LE-403", disciplina: "Legislação Especial", assunto: "Crimes Ambientais",
    subassunto: "Derivado de LE-309, LE-311, LE-315, LE-358 — ambientais, ordem tributária e falências",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da legislação penal especial, considere as seguintes afirmações:\n\nI. No que se refere à prática de crimes ambientais, são circunstâncias atenuantes, entre outras, o baixo grau de instrução ou escolaridade do agente e o arrependimento do infrator, manifestado pela espontânea reparação do dano.\nII. A suspensão condicional da pena pode ser aplicada em casos de condenação a pena privativa de liberdade não superior a três anos quanto a condutas criminosas e atividades lesivas ao meio ambiente previstas na Lei n.º 9.605/1998.\nIII. A respeito de crimes contra a ordem tributária, o recolhimento de valores a menor relativos a tributos, ainda que não comprovada fraude dolosa, configura ilícito fiscal passível de pena de reclusão.\nIV. Nos termos da Lei de Falências e Recuperação de Empresas, os crimes falimentares são de ação penal pública condicionada à representação do administrador judicial ou da assembleia de credores.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "A", pegadinha: "troca-numerica", palavraChave: "não superior a três anos",
    cognitivo: {
      motivo: "Conferir números e regras específicas de três leis diferentes.",
      palavraCritica: "condicionada à representação",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I correta: são atenuantes do art. 14, I e II, da Lei 9.605/1998. Afirmativa II correta: o sursis ambiental cabe em pena não superior a três anos (art. 16). Afirmativa III incorreta: o simples recolhimento a menor, sem fraude, é ilícito fiscal, não crime punido com reclusão (Lei 8.137/1990, art. 1º). Afirmativa IV incorreta: os crimes falimentares são de ação penal pública incondicionada (Lei 11.101/2005, art. 184). Resta(m) apenas as afirmativas I e II.",
      fundamento: "Lei 9.605/1998, arts. 14 e 16; Lei 8.137/1990, art. 1º; Lei 11.101/2005, art. 184.",
      macete: "Sursis: 2 anos no CP, 3 nos crimes ambientais. Falimentar: incondicionada.",
      erroComum: "Aplicar o limite de dois anos do CP.",
      comoBancaPensa: "Junta leis diferentes para testar memória pontual de cada uma.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE106);
