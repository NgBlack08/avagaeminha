/* =====================================================================
   QUESTLAB — Lote 77: LÍNGUA PORTUGUESA no formato da prova real

   Primeiro lote guiado por medição de FORMATO, e não de tópico.

   A medição, feita na prova real da CEBRASPE para PC-AL (2021, Agente),
   itens 1 a 20 — que são os de Língua Portuguesa:

       ancorados num texto-base ....... 20 de 20   100%
       reescritura / substituição ..... 30%
       compreensão / inferência ....... 25%
       pontuação ...................... 15%
       coesão / referenciação ......... 10%
       sintaxe (função de termos) ..... 10%
       tipologia ....................... 5%

   O banco fazia quase o inverso: 18% com texto-base, 48% em análise da
   oração isolada, 1,4% de pontuação, 0,7% de significação. Ou seja,
   treinava classificar oração no vácuo, quando a banca cobra gramática
   A SERVIÇO DO TEXTO — até os itens de sintaxe da prova real perguntam
   sobre um trecho citado ("o termo X exerce a função de...").

   Distribuição deste lote (28 itens):
       reescritura / substituição ...... 8   (28,6%)
       compreensão / inferência ........ 7   (25,0%)
       pontuação ....................... 4   (14,3%)
       coesão / referenciação .......... 3   (10,7%)
       sintaxe sobre o texto ........... 3   (10,7%)
       significação em contexto ........ 2   ( 7,1%)
       tipologia ....................... 1   ( 3,6%)

   Os QUATRO textos-base são 100% autorais, escritos para este banco —
   nenhum trecho de terceiro foi reproduzido. Os temas seguem o perfil da
   prova real (segurança pública institucional, investigação, cultura
   regional alagoana, serviço público).

   Gabarito: 14 CERTO / 14 ERRADO.

   SOBRE O COMPRIMENTO E O GABARITO — e sobre um erro cometido aqui.

   A primeira versão deste lote repetiu exatamente o defeito do Lote 75:
   os itens de reescritura, que citam duas versões de um trecho, saíram
   longos e quase todos CERTO; os de compreensão saíram curtos e quase
   todos ERRADO. Medido, dava 32,1pp de vantagem para quem chutasse só
   pelo comprimento, sem ler nada. Quatro itens longos foram reescritos
   para ERRADO e quatro curtos para CERTO.

   Depois disso, o número caiu para 14,3pp — e aqui vem a parte que
   importa mais que o número. Um teste de permutação (20.000
   embaralhamentos do gabarito, mantidos os mesmos comprimentos) mostrou
   que a MEDIANA sob gabarito aleatório é 14,3pp, com p = 0,50. Ou seja,
   o que sobrou é o próprio método: varrer 31 cortes em 2 direções e
   ficar com o melhor infla o resultado quando a amostra é de 28 itens.

   Consequência prática: NÃO se deve aplicar a um lote isolado o limiar
   que o validador usa para o banco inteiro (~1.980 itens, onde a
   inflação é desprezível). Perseguir 0pp em 28 itens é ajustar ruído.
   E a nota do Lote 75, que comemorava "+0,0pp dentro do lote", muito
   provavelmente registrava sorte, não controle.
   ===================================================================== */

const TXT77_A = `O policiamento de proximidade parte de uma premissa simples: a segurança pública não se constrói apenas pela repressão, mas pelo vínculo cotidiano entre a instituição policial e os moradores do território em que ela atua. Onde esse vínculo existe, a informação circula, e a informação é o insumo mais valioso de qualquer investigação.

Experiências implantadas em capitais brasileiras mostram que a presença regular do agente no bairro reduz a sensação de insegurança antes mesmo de alterar os índices criminais. Isso ocorre porque o medo, embora se alimente de dados objetivos, responde igualmente à percepção de abandono. Um bairro que vê a viatura passar todos os dias sente-se cuidado; um bairro que só a vê quando algo grave acontece associa a corporação exclusivamente à tragédia.

Há, contudo, um risco a considerar. A proximidade mal conduzida pode degenerar em informalidade, e a informalidade, em seletividade. Cabe à formação continuada do policial assegurar que o vínculo com a comunidade não se converta em privilégio para uns e rigor para outros.`;

const TXT77_B = `A digitalização da vida cotidiana transformou a natureza da prova criminal. Se antes o investigador buscava sobretudo vestígios físicos — impressões digitais, fibras, marcas de ferramenta —, hoje boa parte do que interessa à apuração está armazenada em servidores, aparelhos celulares e registros de conexão.

Essa mudança trouxe ganhos evidentes de precisão, mas impôs exigências novas. A extração de dados de um dispositivo só tem valor processual se observadas as garantias constitucionais, entre as quais se destaca a reserva de jurisdição para a quebra de sigilo. Sem autorização judicial, o material obtido é imprestável, por mais eloquente que pareça.

Convém lembrar, ainda, que o excesso de dados não equivale a excesso de esclarecimento. Investigar continua sendo, essencialmente, formular boas perguntas: a tecnologia amplia o alcance do investigador, mas não o dispensa de raciocinar.`;

const TXT77_C = `Toda cidade guarda, em suas fachadas e em suas ruas, um arquivo que não cabe em prateleiras. Em Alagoas, esse arquivo se lê nos casarões do centro histórico de Penedo, nas embarcações que ainda descem o São Francisco e nos ofícios que passam de geração a geração sem registro escrito.

Preservar esse patrimônio não significa congelá-lo. Um bem cultural que se torna intocável perde a função que lhe deu origem: a de ser usado, habitado, celebrado. O tombamento, quando bem conduzido, não interrompe a vida do bem; disciplina as intervenções que ele pode sofrer.

Há quem veja na preservação um obstáculo ao desenvolvimento. O argumento seduz, mas ignora que cidades que destruíram sua memória raramente ganharam algo em troca: perderam o que as distinguia e ficaram parecidas com todas as outras.`;

const TXT77_D = `O atendimento ao público é, para muitos cidadãos, a única experiência concreta que eles têm do Estado. Quem procura uma delegacia, um posto de saúde ou uma repartição fazendária não avalia a administração pela lei que a rege, mas pelo tratamento que recebeu no balcão.

Daí a importância de compreender a impessoalidade como princípio ativo, e não como frieza. Tratar todos igualmente não implica tratar todos com indiferença; implica, ao contrário, recusar que a simpatia pessoal ou o incômodo do momento determinem o resultado do atendimento.

Servidores bem preparados sabem que a cortesia não é concessão, e sim parte do serviço. O cidadão que sai orientado, ainda que sua pretensão tenha sido negada, tende a reconhecer legitimidade na decisão. O que corrói a confiança não é a negativa; é a negativa sem explicação.`;

const CARGOS77 = ["Escrivão", "Agente", "Especialista em Saúde — Fisioterapia"];
const BASE77 = {
  disciplina: "Língua Portuguesa", concurso: "PCAL", cargo: CARGOS77, ano: 2026,
  tipo: "CE", probReaparecer: 0.82,
};

const QUESTOES_PCAL_LOTE77 = [

  /* ======================= TEXTO A — policiamento de proximidade ======= */

  {
    ...BASE77,
    id: "PT-145", assunto: "Compreensão e reescritura", subassunto: "Inferência — generalização indevida",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: policiamento de proximidade)",
    dificuldade: 3, tempoIdealSeg: 70, textoApoio: TXT77_A,
    enunciado: "Conclui-se do texto que o policiamento de proximidade torna dispensáveis as ações repressivas na segurança pública.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "torna dispensáveis as ações repressivas",
    cognitivo: {
      motivo: "Testar se o candidato distingue 'não apenas X' de 'não X' — a armadilha de generalização mais frequente da banca.",
      palavraCritica: "dispensáveis",
    },
    comentario: {
      resolucao: "ERRADO. O texto afirma que a segurança pública 'não se constrói APENAS pela repressão'. Negar a exclusividade da repressão não é negar sua necessidade: o advérbio 'apenas' restringe a afirmação, e o item o suprime para ampliá-la indevidamente.",
      fundamento: "Compreensão de texto — inferência válida × extrapolação.",
      macete: "'Não apenas X' admite X. 'Não X' exclui X. A banca troca um pelo outro o tempo todo.",
      erroComum: "Ler 'não apenas pela repressão' como se fosse crítica à repressão em si.",
      comoBancaPensa: "Amplia o escopo da afirmação original e espera que o candidato aceite por afinidade com a tese geral do texto."
    }
  },
  {
    ...BASE77,
    id: "PT-146", assunto: "Compreensão e reescritura", subassunto: "Inferência — causa declarada no texto",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: policiamento de proximidade)",
    dificuldade: 2, tempoIdealSeg: 60, textoApoio: TXT77_A,
    enunciado: "De acordo com o texto, o sentimento de insegurança decorre exclusivamente de dados objetivos de criminalidade.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "exclusivamente de dados objetivos",
    cognitivo: {
      motivo: "Cobrar leitura da concessiva 'embora se alimente de dados objetivos'.",
      palavraCritica: "exclusivamente",
    },
    comentario: {
      resolucao: "ERRADO. O texto diz que o medo, 'embora se alimente de dados objetivos, responde igualmente à percepção de abandono'. A oração concessiva reconhece a causa objetiva, mas o 'igualmente' acrescenta outra — logo, não há exclusividade.",
      fundamento: "Compreensão de texto — valor da oração concessiva.",
      macete: "Concessiva ('embora') sinaliza que virá uma segunda causa. Desconfie de 'exclusivamente' logo depois.",
      erroComum: "Parar a leitura na concessiva e ignorar a oração principal.",
      comoBancaPensa: "Usa um termo absoluto para transformar uma causa entre duas na única causa."
    }
  },
  {
    ...BASE77,
    id: "PT-147", assunto: "Compreensão e reescritura", subassunto: "Substituição de conectivo",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: policiamento de proximidade)",
    dificuldade: 2, tempoIdealSeg: 55, textoApoio: TXT77_A,
    enunciado: "Sem prejuízo da correção gramatical e do sentido original do texto, o vocábulo \"contudo\" (terceiro parágrafo) poderia ser substituído por entretanto.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "contudo → entretanto",
    cognitivo: {
      motivo: "Cobrar equivalência entre conectivos adversativos, formato recorrente da banca.",
      palavraCritica: "entretanto",
    },
    comentario: {
      resolucao: "CERTO. 'Contudo' e 'entretanto' são conjunções adversativas equivalentes, e ambas admitem a mesma posição intercalada entre vírgulas. A troca preserva correção e sentido.",
      fundamento: "Gramática — conjunções coordenativas adversativas.",
      macete: "Adversativas intercambiáveis: mas, porém, contudo, todavia, entretanto, no entanto.",
      erroComum: "Supor que toda substituição de conectivo altera o sentido.",
      comoBancaPensa: "Item de reescritura em que a troca é legítima — a banca também confirma, não só arma."
    }
  },
  {
    ...BASE77,
    id: "PT-148", assunto: "Compreensão e reescritura", subassunto: "Voz passiva — pronominal e analítica",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: policiamento de proximidade)",
    dificuldade: 3, tempoIdealSeg: 70, textoApoio: TXT77_A,
    enunciado: "Mantidos a correção gramatical e o sentido original do primeiro parágrafo, o trecho \"a segurança pública não se constrói apenas pela repressão\" poderia ser reescrito como a repressão não constrói apenas a segurança pública.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "a repressão não constrói apenas a segurança pública",
    cognitivo: {
      motivo: "Cobrar conversão entre voz passiva pronominal e analítica, formato clássico de reescritura.",
      palavraCritica: "é construída",
    },
    comentario: {
      resolucao: "ERRADO. A reescrita é gramaticalmente correta, mas troca o sentido. No original, 'apenas' incide sobre o AGENTE: a repressão não é o único meio de construir a segurança pública. Na proposta, passa a incidir sobre o OBJETO: a repressão construiria outras coisas além da segurança. A conversão fiel para a voz analítica seria 'a segurança pública não é construída apenas pela repressão'.",
      fundamento: "Gramática — vozes verbais (passiva sintética × analítica).",
      macete: "Ao inverter a voz, veja sobre qual termo o 'apenas' passa a incidir — o advérbio muda de escopo quando os papéis trocam de lugar.",
      erroComum: "Aceitar a troca por ela ser gramaticalmente impecável, sem checar o sentido.",
      comoBancaPensa: "Reescrita correta na forma e errada no sentido: a banca cobra os dois critérios, e basta um falhar."
    }
  },
  {
    ...BASE77,
    id: "PT-149", assunto: "Pontuação", subassunto: "Vírgula que marca elipse verbal",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: policiamento de proximidade)",
    dificuldade: 3, tempoIdealSeg: 70, textoApoio: TXT77_A,
    enunciado: "No trecho \"A proximidade mal conduzida pode degenerar em informalidade, e a informalidade, em seletividade\", a vírgula empregada logo após a segunda ocorrência de \"informalidade\" é de uso facultativo, podendo ser suprimida sem prejuízo da correção gramatical do período.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "vírgula ... facultativa",
    cognitivo: {
      motivo: "Cobrar a função da vírgula em contexto de zeugma, uso que a banca explora com frequência.",
      palavraCritica: "vírgula",
    },
    comentario: {
      resolucao: "ERRADO. A segunda oração é 'a informalidade [pode degenerar] em seletividade': a vírgula ocupa o lugar do verbo elíptico e é a marca que permite recuperá-lo. Suprimi-la deixaria 'a informalidade em seletividade' sem verbo e sem sinal da elipse. A vírgula de zeugma é obrigatória, não facultativa.",
      fundamento: "Gramática — pontuação e elipse (zeugma).",
      macete: "Vírgula 'sozinha' entre sujeito e complemento costuma marcar verbo omitido — e, nesse caso, é obrigatória.",
      erroComum: "Estender a ideia de que vírgula entre termos é sempre estilística.",
      comoBancaPensa: "Afirma facultatividade onde há obrigatoriedade — inverter o regime da regra é padrão da banca."
    }
  },
  {
    ...BASE77,
    id: "PT-150", assunto: "Coesão textual", subassunto: "Referenciação — retomada de proposição",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: policiamento de proximidade)",
    dificuldade: 3, tempoIdealSeg: 65, textoApoio: TXT77_A,
    enunciado: "No segundo parágrafo, o pronome \"Isso\" retoma uma proposição inteira, e não um termo isolado do período anterior.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Isso ... proposição inteira",
    cognitivo: {
      motivo: "Cobrar recuperação de referente, distinguindo retomada de termo e retomada de proposição.",
      palavraCritica: "exclusivamente",
    },
    comentario: {
      resolucao: "CERTO. 'Isso' é pronome demonstrativo de retomada ampla: recupera toda a proposição anterior — a de que a presença regular do agente reduz a sensação de insegurança antes de alterar os índices criminais —, e não um substantivo isolado.",
      fundamento: "Coesão referencial — anáfora resumitiva.",
      macete: "'Isso' costuma retomar oração ou período inteiro; pronomes como 'ele/ela' é que retomam substantivos.",
      erroComum: "Procurar um substantivo próximo e assumir que é o referente.",
      comoBancaPensa: "Item curto e correto: a banca também confirma leituras, e quem responde ERRADO por reflexo perde ponto."
    }
  },
  {
    ...BASE77,
    id: "PT-151", assunto: "Sintaxe", subassunto: "Predicativo do sujeito no texto",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: policiamento de proximidade)",
    dificuldade: 2, tempoIdealSeg: 60, textoApoio: TXT77_A,
    enunciado: "Em \"a informação é o insumo mais valioso de qualquer investigação\" (primeiro parágrafo), o trecho \"o insumo mais valioso de qualquer investigação\" exerce a função de predicativo do sujeito.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "é o insumo mais valioso",
    cognitivo: {
      motivo: "Cobrar função sintática de um termo do texto, e não classificação de oração descontextualizada.",
      palavraCritica: "predicativo do sujeito",
    },
    comentario: {
      resolucao: "CERTO. O verbo 'ser' é de ligação e não pede complemento, mas atribui característica ao sujeito 'a informação'. O termo que exprime essa característica é o predicativo do sujeito.",
      fundamento: "Sintaxe — predicado nominal e predicativo do sujeito.",
      macete: "Verbo de ligação nunca tem objeto: o que vem depois é predicativo.",
      erroComum: "Classificar o trecho como objeto direto por vir depois do verbo.",
      comoBancaPensa: "Pergunta a função de um termo REAL do texto — é assim que a sintaxe aparece na prova."
    }
  },

  /* ======================= TEXTO B — prova digital ===================== */

  {
    ...BASE77,
    id: "PT-152", assunto: "Compreensão e reescritura", subassunto: "Inferência — condição de validade",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: prova digital e reserva de jurisdição)",
    dificuldade: 3, tempoIdealSeg: 70, textoApoio: TXT77_B,
    enunciado: "Depreende-se do texto que a obtenção de dados sem autorização judicial pode ser convalidada quando o conteúdo extraído se mostrar particularmente esclarecedor.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "convalidada ... particularmente esclarecedor",
    cognitivo: {
      motivo: "Testar leitura da concessiva 'por mais eloquente que pareça'.",
      palavraCritica: "convalidada",
    },
    comentario: {
      resolucao: "ERRADO. O texto afirma exatamente o contrário: 'Sem autorização judicial, o material obtido é imprestável, POR MAIS ELOQUENTE QUE PAREÇA'. A concessiva antecipa e rejeita a hipótese que o item propõe.",
      fundamento: "Compreensão de texto — oração concessiva e escopo da negação.",
      macete: "'Por mais X que' antecipa a objeção e a descarta. Item que ressuscita a objeção descartada é ERRADO.",
      erroComum: "Associar 'eloquente' a valor probatório e concluir pela convalidação.",
      comoBancaPensa: "Propõe justamente a exceção que o texto já havia fechado."
    }
  },
  {
    ...BASE77,
    id: "PT-153", assunto: "Compreensão e reescritura", subassunto: "Inferência — relação entre volume e qualidade",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: prova digital e reserva de jurisdição)",
    dificuldade: 2, tempoIdealSeg: 60, textoApoio: TXT77_B,
    enunciado: "O texto sustenta que o aumento do volume de dados disponíveis conduz, por si só, a maior esclarecimento dos fatos apurados.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "por si só",
    cognitivo: {
      motivo: "Cobrar leitura da negação de equivalência no último parágrafo.",
      palavraCritica: "por si só",
    },
    comentario: {
      resolucao: "ERRADO. O texto diz que 'o excesso de dados não equivale a excesso de esclarecimento' e conclui que a tecnologia 'não dispensa de raciocinar' — negando exatamente a suficiência que o item afirma.",
      fundamento: "Compreensão de texto — negação de equivalência.",
      macete: "'Não equivale a' nega a correspondência automática; 'por si só' a reintroduz.",
      erroComum: "Confundir 'a tecnologia amplia o alcance' com 'a tecnologia basta'.",
      comoBancaPensa: "Inverte a tese central do parágrafo mantendo o vocabulário do texto."
    }
  },
  {
    ...BASE77,
    id: "PT-154", assunto: "Compreensão e reescritura", subassunto: "Oração reduzida × desenvolvida",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: prova digital e reserva de jurisdição)",
    dificuldade: 3, tempoIdealSeg: 70, textoApoio: TXT77_B,
    enunciado: "Preservadas a correção gramatical e a coerência do texto, o trecho \"só tem valor processual se observadas as garantias constitucionais\" poderia ser reescrito como só tem valor processual caso fossem observadas as garantias constitucionais.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "caso fossem observadas",
    cognitivo: {
      motivo: "Cobrar conversão de oração reduzida de particípio em desenvolvida, preservando o valor condicional.",
      palavraCritica: "caso sejam observadas",
    },
    comentario: {
      resolucao: "ERRADO. A reduzida de particípio desenvolve-se corretamente como 'caso SEJAM observadas' — presente do subjuntivo, em correlação com 'tem', presente do indicativo. O pretérito imperfeito 'fossem' rompe essa correlação e desloca a condição para o campo do hipotético irreal, alterando o sentido do período.",
      fundamento: "Gramática — orações reduzidas e seu desenvolvimento.",
      macete: "Condicional exige correlação de tempos: presente com presente ('tem ... sejam'); passado com passado ('teria ... fossem').",
      erroComum: "Conferir só o conectivo — 'caso' está certo — e não olhar o tempo verbal.",
      comoBancaPensa: "Acerta o conectivo para desviar a atenção do tempo verbal, que é onde mora o erro."
    }
  },
  {
    ...BASE77,
    id: "PT-155", assunto: "Colocação pronominal", subassunto: "Próclise obrigatória após pronome relativo",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: prova digital e reserva de jurisdição)",
    dificuldade: 3, tempoIdealSeg: 65, textoApoio: TXT77_B,
    enunciado: "Sem prejuízo da correção gramatical, o trecho \"entre as quais se destaca a reserva de jurisdição\" poderia ser substituído por entre as quais destaca-se a reserva de jurisdição.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "as quais destaca-se",
    cognitivo: {
      motivo: "Cobrar próclise obrigatória diante de pronome relativo, uma das armadilhas favoritas da banca.",
      palavraCritica: "destaca-se",
    },
    comentario: {
      resolucao: "ERRADO. O pronome relativo 'as quais' é palavra atrativa e exige próclise: o correto é 'se destaca'. A ênclise proposta ('destaca-se') viola a norma-padrão nesse contexto.",
      fundamento: "Gramática — colocação pronominal (palavras atrativas).",
      macete: "Pronome relativo (que, quem, o qual, cujo) puxa o pronome para antes do verbo.",
      erroComum: "Aplicar a regra geral da ênclise sem notar o relativo que antecede o verbo.",
      comoBancaPensa: "Propõe uma troca que 'soa natural' na fala, mas quebra a regra de atração."
    }
  },
  {
    ...BASE77,
    id: "PT-156", assunto: "Pontuação", subassunto: "Travessão e parênteses em intercalação",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: prova digital e reserva de jurisdição)",
    dificuldade: 2, tempoIdealSeg: 60, textoApoio: TXT77_B,
    enunciado: "Os travessões empregados no primeiro parágrafo isolam uma enumeração de caráter explicativo e poderiam ser substituídos por parênteses, sem prejuízo da correção gramatical.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "travessões → parênteses",
    cognitivo: {
      motivo: "Cobrar equivalência entre sinais de intercalação, formato frequente na banca.",
      palavraCritica: "parênteses",
    },
    comentario: {
      resolucao: "CERTO. Os travessões isolam a enumeração explicativa 'impressões digitais, fibras, marcas de ferramenta'. Travessão duplo, parênteses e vírgulas duplas são recursos alternativos de intercalação; aqui, como o trecho já contém vírgulas internas, o parêntese é inclusive a opção mais clara.",
      fundamento: "Gramática — pontuação de termos intercalados.",
      macete: "Travessão duplo ≈ parênteses ≈ vírgulas duplas. Havendo vírgulas dentro, prefira travessão ou parêntese.",
      erroComum: "Supor que cada sinal tem uso exclusivo e insubstituível.",
      comoBancaPensa: "Confirma uma equivalência real — nem todo item de pontuação é armadilha."
    }
  },
  {
    ...BASE77,
    id: "PT-157", assunto: "Significação das palavras", subassunto: "Sinonímia em contexto",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: prova digital e reserva de jurisdição)",
    dificuldade: 2, tempoIdealSeg: 55, textoApoio: TXT77_B,
    enunciado: "No último parágrafo, o vocábulo \"essencialmente\" poderia ser substituído por fundamentalmente, sem prejuízo do sentido original do período.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "essencialmente → fundamentalmente",
    cognitivo: {
      motivo: "Cobrar substituição vocabular adequada ao contexto, um dos formatos mais frequentes da banca.",
      palavraCritica: "fundamentalmente",
    },
    comentario: {
      resolucao: "CERTO. Em 'Investigar continua sendo, essencialmente, formular boas perguntas', o advérbio indica o traço central da atividade. 'Fundamentalmente' expressa o mesmo valor e ocupa a mesma posição intercalada, preservando sentido e correção.",
      fundamento: "Semântica — sinonímia contextual.",
      macete: "Teste o sinônimo NA FRASE, não no dicionário: precisa caber na sintaxe e no sentido.",
      erroComum: "Rejeitar a troca por achar que sinônimos nunca são perfeitamente intercambiáveis.",
      comoBancaPensa: "Modelo típico: 'o vocábulo X poderia ser substituído por Y sem prejuízo do sentido'."
    }
  },
  {
    ...BASE77,
    id: "PT-158", assunto: "Sintaxe", subassunto: "Objeto direto pronominal no texto",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: prova digital e reserva de jurisdição)",
    dificuldade: 3, tempoIdealSeg: 65, textoApoio: TXT77_B,
    enunciado: "Em \"a tecnologia amplia o alcance do investigador, mas não o dispensa de raciocinar\", o pronome \"o\" exerce a função de objeto direto e retoma \"o investigador\".",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não o dispensa",
    cognitivo: {
      motivo: "Cobrar função sintática e referência do pronome oblíquo, unindo sintaxe e coesão como faz a banca.",
      palavraCritica: "objeto direto",
    },
    comentario: {
      resolucao: "CERTO. 'Dispensar' é transitivo direto ('dispensar alguém de algo'), e o pronome oblíquo átono 'o' funciona como seu objeto direto, retomando 'o investigador', mencionado na oração anterior.",
      fundamento: "Sintaxe — objeto direto pronominal; coesão referencial.",
      macete: "Os pronomes o/a/os/as são objeto DIRETO; lhe/lhes, objeto indireto.",
      erroComum: "Ler o 'o' como artigo definido.",
      comoBancaPensa: "Junta função sintática e recuperação de referente num item só."
    }
  },

  /* ======================= TEXTO C — patrimônio cultural =============== */

  {
    ...BASE77,
    id: "PT-159", assunto: "Tipologia textual", subassunto: "Dissertativo-argumentativo",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: patrimônio cultural alagoano)",
    dificuldade: 2, tempoIdealSeg: 60, textoApoio: TXT77_C,
    enunciado: "O texto, predominantemente dissertativo-argumentativo, defende um ponto de vista sobre a preservação do patrimônio e refuta uma objeção a ele.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dissertativo-argumentativo",
    cognitivo: {
      motivo: "Cobrar identificação do tipo textual predominante a partir da estrutura do texto.",
      palavraCritica: "refuta uma objeção",
    },
    comentario: {
      resolucao: "CERTO. O texto sustenta a tese de que preservar não é congelar e, no terceiro parágrafo, apresenta a objeção ('Há quem veja na preservação um obstáculo ao desenvolvimento') para refutá-la ('O argumento seduz, mas ignora...'). Defender tese e refutar contra-argumento caracteriza o dissertativo-argumentativo.",
      fundamento: "Tipologia textual — dissertativo-argumentativo × expositivo.",
      macete: "Expositivo informa; argumentativo toma partido. Presença de refutação é marca do argumentativo.",
      erroComum: "Classificar como expositivo por causa do tom informativo do primeiro parágrafo.",
      comoBancaPensa: "Pede o tipo PREDOMINANTE, e não o único presente no texto."
    }
  },
  {
    ...BASE77,
    id: "PT-160", assunto: "Compreensão e reescritura", subassunto: "Inferência — alcance do tombamento",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: patrimônio cultural alagoano)",
    dificuldade: 2, tempoIdealSeg: 60, textoApoio: TXT77_C,
    enunciado: "Conclui-se do texto que o tombamento impede qualquer intervenção no bem cultural protegido.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "impede qualquer intervenção",
    cognitivo: {
      motivo: "Testar a distinção entre disciplinar e proibir.",
      palavraCritica: "qualquer",
    },
    comentario: {
      resolucao: "ERRADO. O texto afirma que o tombamento 'não interrompe a vida do bem; disciplina as intervenções que ele pode sofrer'. Disciplinar pressupõe que as intervenções existam e sejam admissíveis — o oposto de impedi-las.",
      fundamento: "Compreensão de texto — leitura de termos absolutos.",
      macete: "'Disciplinar' regula; 'impedir' proíbe. A banca troca um verbo pelo outro.",
      erroComum: "Associar tombamento a intocabilidade, contrariando o que o próprio texto nega.",
      comoBancaPensa: "Aproveita o senso comum sobre o tema para desviar da leitura literal."
    }
  },
  {
    ...BASE77,
    id: "PT-161", assunto: "Compreensão e reescritura", subassunto: "Inferência — consequência afirmada",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: patrimônio cultural alagoano)",
    dificuldade: 3, tempoIdealSeg: 65, textoApoio: TXT77_C,
    enunciado: "Infere-se do texto que a destruição da memória urbana tende a tornar as cidades menos distinguíveis entre si.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "menos distinguíveis entre si",
    cognitivo: {
      motivo: "Cobrar a conclusão do último parágrafo, que aponta perda e não ganho.",
      palavraCritica: "competitivas",
    },
    comentario: {
      resolucao: "CERTO. O texto conclui que cidades que destruíram sua memória 'perderam o que as distinguia e ficaram parecidas com todas as outras' — ou seja, tornaram-se menos distinguíveis entre si. A inferência reproduz a consequência afirmada.",
      fundamento: "Compreensão de texto — identificação da conclusão do autor.",
      macete: "Os dois-pontos finais explicitam a consequência: leia o que vem depois deles.",
      erroComum: "Rejeitar a inferência por ela reformular o texto com outras palavras.",
      comoBancaPensa: "Inferência legítima e enxuta — nem todo item curto é armadilha."
    }
  },
  {
    ...BASE77,
    id: "PT-162", assunto: "Compreensão e reescritura", subassunto: "Verbo haver impessoal → existir",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: patrimônio cultural alagoano)",
    dificuldade: 3, tempoIdealSeg: 70, textoApoio: TXT77_C,
    enunciado: "Preservados a correção gramatical e o sentido original, o trecho \"Há quem veja na preservação um obstáculo ao desenvolvimento\" poderia ser reescrito como Existem pessoas que veem na preservação um obstáculo ao desenvolvimento.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Há quem veja → Existem pessoas que veem",
    cognitivo: {
      motivo: "Cobrar a troca entre 'haver' impessoal e 'existir', com a concordância que ela exige.",
      palavraCritica: "Existem",
    },
    comentario: {
      resolucao: "CERTO. 'Haver' no sentido de existir é impessoal e fica no singular; ao ser substituído por 'existir', o termo passa a ser SUJEITO e exige concordância — daí 'Existem pessoas'. A reescrita respeita essa mudança e mantém o sentido.",
      fundamento: "Gramática — verbo haver impessoal e concordância verbal.",
      macete: "Haver = invariável. Existir = concorda. Trocar um pelo outro obriga a ajustar o número.",
      erroComum: "Reescrever como 'Existe pessoas', mantendo o singular do 'há'.",
      comoBancaPensa: "Testa se o candidato sabe que a troca de verbo arrasta consequência de concordância."
    }
  },
  {
    ...BASE77,
    id: "PT-163", assunto: "Compreensão e reescritura", subassunto: "Oração adjetiva restritiva × explicativa",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: patrimônio cultural alagoano)",
    dificuldade: 3, tempoIdealSeg: 75, textoApoio: TXT77_C,
    enunciado: "Mantidos a correção gramatical e o sentido original, o trecho \"Um bem cultural que se torna intocável perde a função\" poderia ser reescrito, com o acréscimo de vírgulas, como Um bem cultural, que se torna intocável, perde a função.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "vírgulas na adjetiva",
    cognitivo: {
      motivo: "Cobrar o efeito semântico das vírgulas na oração adjetiva — restritiva vira explicativa.",
      palavraCritica: "vírgulas",
    },
    comentario: {
      resolucao: "ERRADO. Sem vírgulas, a adjetiva é RESTRITIVA: só perde a função o bem que se torna intocável. Com vírgulas, torna-se EXPLICATIVA e passa a afirmar que todo bem cultural se torna intocável — o que altera profundamente o sentido, embora a frase continue gramaticalmente correta.",
      fundamento: "Sintaxe e pontuação — orações adjetivas restritivas e explicativas.",
      macete: "Vírgula na adjetiva generaliza: o que valia para alguns passa a valer para todos.",
      erroComum: "Julgar apenas a correção gramatical e ignorar a alteração de sentido.",
      comoBancaPensa: "A reescritura pode ser gramatical e ainda assim ERRADA por mudar o sentido — a banca cobra os dois critérios."
    }
  },
  {
    ...BASE77,
    id: "PT-164", assunto: "Pontuação", subassunto: "Ponto e vírgula com valor adversativo",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: patrimônio cultural alagoano)",
    dificuldade: 3, tempoIdealSeg: 70, textoApoio: TXT77_C,
    enunciado: "O ponto e vírgula empregado em \"não interrompe a vida do bem; disciplina as intervenções que ele pode sofrer\" separa orações de conteúdo contrastante e poderia ser substituído por vírgula seguida da conjunção pois, sem alteração do sentido original.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "ponto e vírgula → , pois",
    cognitivo: {
      motivo: "Cobrar o valor semântico do ponto e vírgula entre orações coordenadas.",
      palavraCritica: "mas",
    },
    comentario: {
      resolucao: "ERRADO. A relação entre as orações é ADVERSATIVA ('não interrompe' × 'disciplina'), e o conectivo capaz de explicitá-la seria 'mas'. 'Pois' é explicativo ou conclusivo: introduziria uma justificativa que não existe ali e alteraria a relação lógica sinalizada pelo ponto e vírgula.",
      fundamento: "Gramática — pontuação entre orações coordenadas.",
      macete: "Ponto e vírgula entre orações esconde um conectivo: descubra QUAL antes de aceitar o que o item propõe.",
      erroComum: "Aceitar qualquer conectivo por perceber, corretamente, que o ponto e vírgula admite substituição.",
      comoBancaPensa: "Acerta o diagnóstico ('conteúdo contrastante') e erra a solução — o item começa verdadeiro e termina falso."
    }
  },
  {
    ...BASE77,
    id: "PT-165", assunto: "Coesão textual", subassunto: "Referenciação — pronome oblíquo lhe",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: patrimônio cultural alagoano)",
    dificuldade: 3, tempoIdealSeg: 65, textoApoio: TXT77_C,
    enunciado: "No segundo parágrafo, em \"perde a função que lhe deu origem\", o pronome \"lhe\" retoma \"a função\".",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "lhe ... a função",
    cognitivo: {
      motivo: "Cobrar recuperação de referente em posição que induz ao termo mais próximo.",
      palavraCritica: "lhe",
    },
    comentario: {
      resolucao: "ERRADO. O 'lhe' retoma 'Um bem cultural', sujeito do período: é a função que deu origem AO BEM, e não a função que deu origem a si mesma. O termo mais próximo ('a função') é justamente o distrator.",
      fundamento: "Coesão referencial — pronome oblíquo átono.",
      macete: "Refaça a frase substituindo o pronome pelo candidato a referente: se o resultado for circular, o referente é outro.",
      erroComum: "Escolher o substantivo imediatamente anterior ao pronome.",
      comoBancaPensa: "Explora a proximidade física como falsa pista de referência."
    }
  },

  /* ======================= TEXTO D — atendimento ao público =========== */

  {
    ...BASE77,
    id: "PT-166", assunto: "Compreensão e reescritura", subassunto: "Inferência — causa da perda de confiança",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: atendimento ao público)",
    dificuldade: 2, tempoIdealSeg: 60, textoApoio: TXT77_D,
    enunciado: "Depreende-se do texto que a negativa de um pedido é, por si só, o principal fator de deterioração da confiança do cidadão na administração.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "a negativa ... por si só",
    cognitivo: {
      motivo: "Cobrar a leitura da estrutura 'não é X; é Y' que fecha o texto.",
      palavraCritica: "por si só",
    },
    comentario: {
      resolucao: "ERRADO. O texto encerra afirmando: 'O que corrói a confiança não é a negativa; é a negativa sem explicação'. O fator apontado não é a negativa, mas a ausência de justificativa que a acompanha.",
      fundamento: "Compreensão de texto — estrutura de retificação ('não é X; é Y').",
      macete: "Na estrutura 'não é X; é Y', o item que afirma X é ERRADO por definição.",
      erroComum: "Reter apenas a palavra 'negativa' e ignorar o complemento 'sem explicação'.",
      comoBancaPensa: "Aproveita a semelhança lexical entre a tese e a sua negação."
    }
  },
  {
    ...BASE77,
    id: "PT-167", assunto: "Regência verbal", subassunto: "Implicar como transitivo direto",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: atendimento ao público)",
    dificuldade: 3, tempoIdealSeg: 70, textoApoio: TXT77_D,
    enunciado: "Preservados a correção gramatical e o sentido original, o trecho \"não implica tratar todos com indiferença\" poderia ser reescrito como não implica em tratar todos com indiferença.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "implica em",
    cognitivo: {
      motivo: "Cobrar a regência de 'implicar' no sentido de acarretar, desvio frequente na fala.",
      palavraCritica: "em",
    },
    comentario: {
      resolucao: "ERRADO. No sentido de 'acarretar, ter como consequência', 'implicar' é transitivo DIRETO e não admite a preposição: 'implica tratar', e não 'implica em tratar'. A reescrita introduz um desvio de regência.",
      fundamento: "Gramática — regência verbal.",
      macete: "Implicar = acarretar → VTD, sem preposição. Só há 'implicar-se em' no sentido de envolver-se.",
      erroComum: "Aceitar 'implicar em' por ser corrente na linguagem oral.",
      comoBancaPensa: "Propõe a forma coloquial e conta com a familiaridade do candidato."
    }
  },
  {
    ...BASE77,
    id: "PT-168", assunto: "Compreensão e reescritura", subassunto: "Substituição de conectivo concessivo",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: atendimento ao público)",
    dificuldade: 2, tempoIdealSeg: 55, textoApoio: TXT77_D,
    enunciado: "Mantidas a correção gramatical e a coerência do texto, o trecho \"ainda que sua pretensão tenha sido negada\" poderia ser substituído por embora sua pretensão tenha sido negada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ainda que → embora",
    cognitivo: {
      motivo: "Cobrar equivalência entre conectivos concessivos, com o subjuntivo que ambos regem.",
      palavraCritica: "embora",
    },
    comentario: {
      resolucao: "CERTO. 'Ainda que' e 'embora' são conjunções subordinativas concessivas equivalentes, e ambas exigem o verbo no subjuntivo — condição já satisfeita por 'tenha sido negada'. Sentido e correção se mantêm.",
      fundamento: "Gramática — conjunções subordinativas concessivas.",
      macete: "Concessivas equivalentes: embora, ainda que, conquanto, mesmo que, posto que — todas com subjuntivo.",
      erroComum: "Confundir concessiva com condicional e supor alteração de sentido.",
      comoBancaPensa: "Item de reescritura legítimo, para punir quem responde ERRADO por reflexo."
    }
  },
  {
    ...BASE77,
    id: "PT-169", assunto: "Pontuação", subassunto: "Ponto e vírgula × dois-pontos",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: atendimento ao público)",
    dificuldade: 3, tempoIdealSeg: 65, textoApoio: TXT77_D,
    enunciado: "Em \"O que corrói a confiança não é a negativa; é a negativa sem explicação\", o ponto e vírgula poderia ser substituído por dois-pontos, sem prejuízo da correção gramatical.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ponto e vírgula → dois-pontos",
    cognitivo: {
      motivo: "Cobrar o valor dos dois-pontos como introdutor de esclarecimento.",
      palavraCritica: "dois-pontos",
    },
    comentario: {
      resolucao: "CERTO. A segunda oração esclarece e retifica a primeira, valor compatível com os dois-pontos, que introduzem explicitação. A substituição mantém a correção gramatical do período.",
      fundamento: "Gramática — emprego dos dois-pontos e do ponto e vírgula.",
      macete: "Dois-pontos anunciam o que vem a seguir: explicação, enumeração, citação, retificação.",
      erroComum: "Restringir os dois-pontos a enumerações e falas.",
      comoBancaPensa: "Testa se o candidato conhece o valor de esclarecimento dos dois-pontos."
    }
  },
  {
    ...BASE77,
    id: "PT-170", assunto: "Coesão textual", subassunto: "Referenciação — pronome oblíquo a",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: atendimento ao público)",
    dificuldade: 3, tempoIdealSeg: 65, textoApoio: TXT77_D,
    enunciado: "No primeiro parágrafo, em \"a lei que a rege\", o pronome \"a\" retoma \"a administração\".",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "a lei que a rege",
    cognitivo: {
      motivo: "Cobrar recuperação de referente com distratores plausíveis no mesmo período.",
      palavraCritica: "a",
    },
    comentario: {
      resolucao: "CERTO. O pronome oblíquo 'a' retoma 'a administração', objeto direto de 'avalia' no mesmo período: é a administração que a lei rege. Os termos da enumeração anterior ('uma delegacia', 'um posto de saúde', 'uma repartição fazendária') são distratores.",
      fundamento: "Coesão referencial — pronome oblíquo átono como objeto direto.",
      macete: "Substitua o pronome pelo candidato e leia em voz alta: 'a lei que rege a administração' faz sentido; 'que rege uma repartição fazendária' não retoma o fio do período.",
      erroComum: "Escolher um termo da enumeração por estar mais próximo do pronome.",
      comoBancaPensa: "Enche o período de referentes possíveis e afirma o correto — o candidato precisa confirmar, não desconfiar por hábito."
    }
  },
  {
    ...BASE77,
    id: "PT-171", assunto: "Significação das palavras", subassunto: "Substituição por antônimo",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: atendimento ao público)",
    dificuldade: 1, tempoIdealSeg: 45, textoApoio: TXT77_D,
    enunciado: "No terceiro parágrafo, o vocábulo \"corrói\" poderia ser substituído por mina, sem prejuízo do sentido original.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "corrói → mina",
    cognitivo: {
      motivo: "Verificar leitura semântica básica antes de itens mais finos de vocabulário.",
      palavraCritica: "fortalece",
    },
    comentario: {
      resolucao: "CERTO. 'Corroer' e 'minar' compartilham o sentido de desgastar aos poucos, solapar. Ambos são transitivos diretos e cabem na mesma estrutura ('o que mina a confiança'), preservando sentido e correção.",
      fundamento: "Semântica — sinonímia e antonímia em contexto.",
      macete: "Teste o sinônimo na frase: se o sentido e a regência couberem, a troca vale.",
      erroComum: "Rejeitar sinônimos por achar que nunca são intercambiáveis.",
      comoBancaPensa: "Substituição vocabular legítima, no formato mais frequente da banca."
    }
  },
  {
    ...BASE77,
    id: "PT-172", assunto: "Sintaxe", subassunto: "Pronome relativo quem como sujeito",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: atendimento ao público)",
    dificuldade: 2, tempoIdealSeg: 60, textoApoio: TXT77_D,
    enunciado: "Em \"Quem procura uma delegacia, um posto de saúde ou uma repartição fazendária não avalia a administração pela lei que a rege\", o termo \"Quem\" exerce a função de sujeito da forma verbal \"avalia\".",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Quem ... avalia",
    cognitivo: {
      motivo: "Cobrar identificação de sujeito num período com enumeração intercalada — formato que a banca usa para afastar sujeito e verbo.",
      palavraCritica: "sujeito",
    },
    comentario: {
      resolucao: "CERTO. 'Quem procura uma delegacia...' é oração subordinada substantiva que funciona como sujeito de 'não avalia'. A enumeração intercalada afasta o núcleo do verbo, mas não altera a relação sintática.",
      fundamento: "Sintaxe — sujeito oracional; pronome relativo indefinido 'quem'.",
      macete: "Pergunte ao verbo: quem não avalia? A resposta é o sujeito, ainda que esteja longe.",
      erroComum: "Tomar 'a administração' por sujeito, por vir logo antes do verbo seguinte.",
      comoBancaPensa: "Distancia sujeito e verbo com material intercalado e cobra a identificação."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE77);
