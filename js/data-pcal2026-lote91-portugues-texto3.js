/* =====================================================================
   QUESTLAB — Lote 91: LÍNGUA PORTUGUESA ancorada em texto (3ª leva)

   Continuação direta do lote 90, com o mesmo objetivo medido: aproximar
   Língua Portuguesa do formato da prova real. Estado antes deste lote,
   sobre os 204 itens autorais da disciplina:

       ancorados em texto-base ...... 42,2%   (limiar do validador: 50%)
       análise da oração isolada .... 36,8%   (teto do validador: 30%)

   OS 48 ITENS DAQUI FECHAM O PRIMEIRO E NÃO FECHAM O SEGUNDO — e é
   importante dizer por quê, porque a diferença entre os dois casos é a
   diferença entre diluir e consertar.

   O indicador de texto-base sobe para 53,2% e passa do limiar: basta
   acrescentar itens ancorados, que é o que este lote faz. O aviso
   correspondente saiu do relatório do validador.

   O de oração isolada cai para 31,3% e continua acima do teto. Ele é
   dominado pelos 75 itens LEGADOS que analisam oração solta, escritos
   antes de a medição existir. Acrescentar item novo só os dilui; para
   entrar em 30% mantendo a proporção real de sintaxe (~10%), seriam
   necessários cerca de 70 itens novos, não 48.

   Há um caminho melhor que escrever mais 22, e ele fica REGISTRADO COMO
   PENDÊNCIA e não executado aqui: ancorar parte dos 75 legados a um
   texto. A prova real também cobra sintaxe — em 2021 foram 2 dos 20
   itens —, só que sempre sobre um trecho CITADO. Um item que hoje pede a
   função de um termo numa oração inventada vira item de prova real ao
   receber o texto de onde o trecho saiu. Isso conserta o item em vez de
   escondê-lo atrás de uma média, mas é reescrita item a item e merece
   lote próprio.

   O QUE NÃO FIZ, de novo: zerar os itens de sintaxe para fechar a conta.
   Com zero deles os 48 bastariam para cravar 30%. Seria fabricar o
   número às custas da fidelidade — a prova tem sintaxe, e um banco sem
   ela deixaria o candidato descoberto justamente nos itens 16 e 20 do
   caderno. Vão 5, que é a proporção real.

   DISTRIBUIÇÃO DOS 48 ITENS, conferida depois de prontos:

     compreensão e reescritura ..... 31  (64,6%)   real: 60%
     pontuação .....................  7  (14,6%)   real: 15%
     coesão / referenciação ........  5  (10,4%)   real: 10%
     sintaxe sobre o texto .........  4   (8,3%)   real: 10%
     tipologia .....................  1   (2,1%)   real:  5%

   Gabarito: 27 CERTO / 21 ERRADO. Fica em 56% de CERTO dentro do lote,
   o que puxa o banco para 51,7% — ainda dentro da faixa de 45% a 55% que
   o validador aceita, mas é o teto do que se pode repetir. O próximo lote
   de Português precisa pender para ERRADO.

   COMPRIMENTO — mantida a inversão deliberada do lote 90. Os itens
   CERTOS tendem ao curto e os ERRADOS ao longo, para desfazer o
   gradiente do banco (comprimento → CERTO), que na prova real não
   existe. Três itens CERTOS trazem termo absoluto porque o texto
   autoriza a afirmação categórica.

   OS QUATRO TEXTOS-BASE SÃO AUTORAIS, escritos para este banco. Gêneros
   variados, como na prova real: reportagem, artigo institucional,
   crônica memorialística e divulgação técnica.
   ===================================================================== */

const CARGOS91 = ["Escrivão", "Agente", "Especialista em Saúde — Fisioterapia"];
const BASE91 = {
  disciplina: "Língua Portuguesa", concurso: "PCAL", cargo: CARGOS91, ano: 2026,
  tipo: "CE", probReaparecer: 0.82,
};

/* --------- TEXTO D — reportagem: mutirão de identificação civil -------- */
const TXT91_D =
"Durante três dias, o ginásio da escola municipal deixou de abrigar partidas de futebol de salão para receber filas silenciosas. O mutirão de identificação civil, promovido em conjunto pela Secretaria de Segurança e pela prefeitura, emitiu quatrocentas e doze carteiras em um município onde, segundo levantamento apresentado na abertura, uma em cada oito pessoas adultas não possuía documento de identidade.\n\n" +
"Os números, contudo, dizem pouco sobre o que se via nas filas. Havia quem esperasse por um documento aos sessenta anos, tendo atravessado a vida inteira sem ele; havia mães que traziam três filhos de uma vez, cientes de que a próxima oportunidade poderia demorar. Para essas pessoas, a carteira não é papel: é a chave que abre a conta bancária, o benefício, a matrícula.\n\n" +
"Encerrado o mutirão, o ginásio voltou ao futebol. Ficou a pergunta que nenhum evento de três dias resolve — como transformar em rotina aquilo que ainda se organiza como exceção.";

/* --------- TEXTO E — artigo institucional: revitimização ------------- */
const TXT91_E =
"Prestar atendimento à vítima não é uma etapa protocolar do inquérito; é parte do próprio resultado que se espera da investigação. Quem procura uma delegacia depois de sofrer violência chega com uma expectativa dupla: a de que o fato seja apurado e a de que sua narrativa seja recebida sem que ela precise justificar-se por tê-la vivido.\n\n" +
"A revitimização ocorre quando essa segunda expectativa é frustrada. Ela se manifesta em detalhes que raramente constam de relatórios: a pergunta repetida pela quinta vez, o balcão onde não há reserva alguma de privacidade, o olhar que avalia a roupa antes de registrar a ocorrência. Nenhum desses gestos figura como ilegalidade, e é exatamente por isso que exigem atenção deliberada.\n\n" +
"Combatê-la, portanto, não depende apenas de lei nova. Depende de fluxo interno, de espaço físico adequado e de formação — três providências que estão ao alcance de qualquer unidade que decida adotá-las.";

/* --------- TEXTO F — crônica: o rio e as cidades ribeirinhas --------- */
const TXT91_F =
"Quem nasce à margem do São Francisco aprende cedo que o rio não é paisagem: é relógio. É por ele que se sabe quando plantar, quando a balsa atravessa, quando convém recolher a rede. As cidades ribeirinhas de Alagoas foram construídas de costas para a estrada e de frente para a água, e essa geografia explica mais sobre elas do que qualquer estatística.\n\n" +
"Nas últimas décadas, porém, o relógio começou a atrasar. A vazão regulada por barragens desfez a cheia previsível que organizava o calendário de gerações, e o que era ciclo virou incerteza. Os mais velhos ainda contam o ano pelas águas; os mais novos, pelo contracheque.\n\n" +
"Não se trata de recusar a barragem, que trouxe energia e emprego. Trata-se de reconhecer que toda obra que altera um rio altera também o modo como as pessoas medem o tempo.";

/* --------- TEXTO G — divulgação técnica: análise de vínculos --------- */
const TXT91_G =
"A análise de vínculos parte de uma ideia simples: pessoas, telefones, veículos e endereços não existem isoladamente, e é a ligação entre eles que revela a estrutura de um grupo criminoso. Representada em grafo, essa ligação deixa de ser intuição do investigador e passa a ser objeto verificável, que outro analista pode reproduzir a partir dos mesmos dados.\n\n" +
"O método tem limites que convém enunciar. Um vínculo frequente não é necessariamente um vínculo relevante: duas pessoas que moram na mesma rua compartilham endereço sem compartilhar propósito. Cabe ao analista qualificar a aresta, e não apenas contá-la — do contrário, o grafo apenas confirma, com aparência científica, a hipótese com que se começou.\n\n" +
"Daí a regra que orienta o trabalho sério na área: o desenho não substitui a prova. Ele organiza indícios, sugere onde procurar e, quando bem feito, mostra também o que ainda falta.";

const QUESTOES_PCAL_LOTE91 = [

  /* ============ TEXTO D — 12 itens (6 C / 6 E) ============ */

  {
    ...BASE91,
    id: "PT-208", assunto: "Compreensão e reescritura", subassunto: "Sentido figurado no contexto",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: mutirão de identificação civil)",
    dificuldade: 2, tempoIdealSeg: 45, textoApoio: TXT91_D,
    enunciado: "No texto, a afirmação de que a carteira “não é papel: é a chave” atribui ao documento valor instrumental, e não meramente material.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "chave",
    cognitivo: {
      motivo: "Cobrar a leitura de metáfora construída por negação e contraste.",
      palavraCritica: "chave",
    },
    comentario: {
      resolucao: "CERTO. A estrutura 'não é X: é Y' nega o valor material do objeto e afirma outro. 'Chave' é metáfora do que dá acesso, e o texto explicita a que: 'a conta bancária, o benefício, a matrícula'. O documento vale pelo que permite fazer — valor instrumental.",
      fundamento: "Semântica — metáfora e estrutura de contraste.",
      macete: "'Não é X: é Y' sempre carrega a tese em Y. O que vem depois dos dois-pontos é o que o autor defende.",
      erroComum: "Ler 'chave' no sentido literal e recusar o item por não haver fechadura no texto.",
      comoBancaPensa: "Item curto e correto sobre figura de linguagem explicitada pelo próprio contexto."
    }
  },
  {
    ...BASE91,
    id: "PT-209", assunto: "Compreensão e reescritura", subassunto: "Extrapolação a partir de dado numérico",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: mutirão de identificação civil)",
    dificuldade: 3, tempoIdealSeg: 95, textoApoio: TXT91_D,
    enunciado: "Depreende-se do texto que o mutirão atendeu à totalidade da população adulta sem documento do município, uma vez que as quatrocentas e doze carteiras emitidas correspondem exatamente à proporção de uma em cada oito pessoas adultas mencionada no levantamento apresentado na abertura do evento.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "totalidade",
    cognitivo: {
      motivo: "Testar a construção de uma equivalência numérica que o texto não autoriza.",
      palavraCritica: "exatamente",
    },
    comentario: {
      resolucao: "ERRADO. O texto informa duas coisas independentes — quantas carteiras se emitiram (412) e qual a proporção de adultos sem documento (uma em cada oito) — mas nunca a população do município, sem a qual a comparação é impossível. Não há como afirmar equivalência, muito menos que a totalidade foi atendida. O próprio fecho do texto contradiz a suficiência, ao falar do que 'nenhum evento de três dias resolve'.",
      fundamento: "Compreensão de texto — inferência a partir de dados incompletos.",
      macete: "Para afirmar proporção, o texto precisa dar o total. Sem denominador, não há conta.",
      erroComum: "Aceitar a equivalência por ver dois números no mesmo parágrafo e supor que se relacionam.",
      comoBancaPensa: "Enunciado longo que veste de aritmética uma conclusão que os dados do texto não sustentam."
    }
  },
  {
    ...BASE91,
    id: "PT-210", assunto: "Compreensão e reescritura", subassunto: "Substituição de oração reduzida de particípio",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: mutirão de identificação civil)",
    dificuldade: 2, tempoIdealSeg: 60, textoApoio: TXT91_D,
    enunciado: "Sem prejuízo da correção gramatical e do sentido, “Encerrado o mutirão, o ginásio voltou ao futebol” poderia ser reescrito como Depois que o mutirão foi encerrado, o ginásio voltou ao futebol.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Encerrado o mutirão",
    cognitivo: {
      motivo: "Cobrar o desenvolvimento de reduzida de particípio com valor temporal.",
      palavraCritica: "Encerrado",
    },
    comentario: {
      resolucao: "CERTO. A reduzida de particípio 'Encerrado o mutirão' tem valor temporal e se desenvolve em oração iniciada por conjunção temporal com verbo flexionado: 'Depois que o mutirão foi encerrado'. A anterioridade do primeiro fato em relação ao segundo é preservada, e a correção do período também.",
      fundamento: "Sintaxe — oração subordinada adverbial temporal reduzida de particípio.",
      macete: "Particípio abrindo período costuma esconder um 'depois que' ou um 'assim que'. Teste os dois.",
      erroComum: "Ler a reduzida como causal e recusar a temporal.",
      comoBancaPensa: "Reescritura legítima cujo julgamento exige identificar o valor da reduzida, e não só a forma verbal."
    }
  },
  {
    ...BASE91,
    id: "PT-211", assunto: "Compreensão e reescritura", subassunto: "Reescritura que suprime a ressalva",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: mutirão de identificação civil)",
    dificuldade: 3, tempoIdealSeg: 90, textoApoio: TXT91_D,
    enunciado: "Mantêm-se a correção gramatical e o sentido do texto ao se reescrever “Os números, contudo, dizem pouco sobre o que se via nas filas” como Os números, portanto, dizem pouco sobre o que se via nas filas, dado que a substituição do conectivo apenas explicita a conclusão que o parágrafo anterior já encaminhava.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "contudo / portanto",
    cognitivo: {
      motivo: "Testar a troca de conectivo adversativo por conclusivo.",
      palavraCritica: "portanto",
    },
    comentario: {
      resolucao: "ERRADO. 'Contudo' é adversativo: opõe o parágrafo dos números ao que eles não alcançam. 'Portanto' é conclusivo e faria do segundo parágrafo consequência do primeiro, o que inverte a articulação — o autor não conclui a partir dos números, ele os relativiza. A troca altera a relação lógica entre os parágrafos.",
      fundamento: "Coesão — valor semântico dos conectivos adversativo e conclusivo.",
      macete: "Adversativo contraria o que veio antes; conclusivo decorre dele. Nunca são intercambiáveis.",
      erroComum: "Aceitar por ambos ligarem parágrafos e virem entre vírgulas, sem checar a direção da relação.",
      comoBancaPensa: "Acrescenta uma justificativa que soa razoável ('apenas explicita a conclusão') para encobrir a inversão."
    }
  },
  {
    ...BASE91,
    id: "PT-212", assunto: "Pontuação", subassunto: "Ponto e vírgula entre estruturas paralelas extensas",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: mutirão de identificação civil)",
    dificuldade: 2, tempoIdealSeg: 50, textoApoio: TXT91_D,
    enunciado: "O ponto e vírgula empregado após “tendo atravessado a vida inteira sem ele” separa duas construções iniciadas por “havia”, que já apresentam pontuação interna.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "pontuação interna",
    cognitivo: {
      motivo: "Cobrar o critério de emprego do ponto e vírgula em coordenadas já pontuadas.",
      palavraCritica: "havia",
    },
    comentario: {
      resolucao: "CERTO. As duas construções são paralelas — 'Havia quem esperasse...' e 'havia mães que traziam...' — e cada uma traz vírgula interna ('tendo atravessado a vida inteira sem ele'; 'cientes de que a próxima oportunidade poderia demorar'). É exatamente a situação em que o ponto e vírgula se prefere à vírgula: marcar a fronteira principal quando a secundária já está ocupada.",
      fundamento: "Pontuação — ponto e vírgula entre coordenadas com pontuação interna.",
      macete: "Se as partes já têm vírgula dentro, a divisão entre elas sobe para ponto e vírgula.",
      erroComum: "Julgar o ponto e vírgula excessivo por caber ali, gramaticalmente, também a vírgula.",
      comoBancaPensa: "Afirmação curta e verdadeira que descreve o critério, não apenas o resultado."
    }
  },
  {
    ...BASE91,
    id: "PT-213", assunto: "Pontuação", subassunto: "Travessão anunciando oração explicativa",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: mutirão de identificação civil)",
    dificuldade: 3, tempoIdealSeg: 85, textoApoio: TXT91_D,
    enunciado: "O travessão que antecede “como transformar em rotina aquilo que ainda se organiza como exceção” separa termos de mesma função sintática e poderia, por isso, ser substituído por vírgula ou por ponto e vírgula, mas nunca por dois-pontos, já que o segmento seguinte é oração, e não termo isolado.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "nunca por dois-pontos",
    cognitivo: {
      motivo: "Testar restrição inventada sobre o que os dois-pontos podem anunciar.",
      palavraCritica: "nunca",
    },
    comentario: {
      resolucao: "ERRADO em duas frentes. O travessão não separa termos de mesma função: anuncia a explicitação da 'pergunta' mencionada antes, funcionando como introdutor de aposto oracional. E os dois-pontos anunciam perfeitamente orações — 'Ficou a pergunta que nenhum evento resolve: como transformar em rotina...' é construção correta. Não há a vedação que o item afirma.",
      fundamento: "Pontuação — travessão e dois-pontos antes de aposto oracional.",
      macete: "Dois-pontos anunciam explicação, citação, enumeração ou consequência. Não se importam se o que vem é termo ou oração.",
      erroComum: "Aceitar a regra por ela vir acompanhada de uma justificativa de aparência técnica.",
      comoBancaPensa: "Combina uma descrição sintática errada com uma vedação inexistente, ambas apresentadas com segurança."
    }
  },
  {
    ...BASE91,
    id: "PT-214", assunto: "Coesão textual", subassunto: "Referente de pronome oblíquo",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: mutirão de identificação civil)",
    dificuldade: 2, tempoIdealSeg: 55, textoApoio: TXT91_D,
    enunciado: "Em “tendo atravessado a vida inteira sem ele”, o pronome “ele” retoma o termo “documento de identidade”.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ele",
    cognitivo: {
      motivo: "Cobrar o rastreio de anáfora entre parágrafos.",
      palavraCritica: "ele",
    },
    comentario: {
      resolucao: "CERTO. O primeiro parágrafo encerra com 'não possuía documento de identidade', e é esse o antecedente masculino singular que 'ele' retoma. A leitura confirma-se pelo sentido: quem esperava por um documento aos sessenta anos atravessou a vida sem o documento.",
      fundamento: "Coesão — anáfora pronominal com antecedente em parágrafo anterior.",
      macete: "Pronome no começo do parágrafo costuma buscar o antecedente no fim do parágrafo anterior. Releia a última linha.",
      erroComum: "Procurar o antecedente apenas dentro do mesmo período.",
      comoBancaPensa: "Anáfora correta e a alguma distância, para medir se o candidato lê o texto como unidade."
    }
  },
  {
    ...BASE91,
    id: "PT-215", assunto: "Sintaxe", subassunto: "Sujeito de oração com verbo haver",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: mutirão de identificação civil)",
    dificuldade: 3, tempoIdealSeg: 75, textoApoio: TXT91_D,
    enunciado: "Em “havia mães que traziam três filhos de uma vez”, o termo “mães” exerce a função de sujeito da forma verbal “havia”.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "sujeito",
    cognitivo: {
      motivo: "Testar a classificação do complemento de 'haver' existencial, erro clássico de concordância.",
      palavraCritica: "havia",
    },
    comentario: {
      resolucao: "ERRADO. 'Haver' no sentido de existir é impessoal: não tem sujeito, e por isso permanece na 3ª pessoa do singular ainda que o complemento esteja no plural. 'Mães' é OBJETO DIRETO. É justamente por isso que se escreve 'havia mães' e nunca 'haviam mães' — se 'mães' fosse sujeito, o verbo concordaria.",
      fundamento: "Sintaxe — verbo haver impessoal; objeto direto.",
      macete: "Se trocar 'haver' por 'existir' o verbo vai ao plural, o termo é sujeito de 'existir' mas objeto de 'haver'. O teste da concordância entrega.",
      erroComum: "Chamar de sujeito o termo que vem depois de 'havia' por analogia com 'existiam mães'.",
      comoBancaPensa: "Pergunta pela função de um termo do texto e explora o ponto de concordância mais errado da língua escrita."
    }
  },
  {
    ...BASE91,
    id: "PT-216", assunto: "Compreensão e reescritura", subassunto: "Afirmação categórica sustentada pelo texto",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: mutirão de identificação civil)",
    dificuldade: 2, tempoIdealSeg: 45, textoApoio: TXT91_D,
    enunciado: "Segundo o texto, nenhum evento de três dias resolve a questão levantada no fecho.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "nenhum",
    cognitivo: {
      motivo: "Apresentar termo absoluto em item VERDADEIRO, reproduzindo a categoria do próprio texto.",
      palavraCritica: "nenhum",
    },
    comentario: {
      resolucao: "CERTO. A afirmação está literalmente no texto: 'Ficou a pergunta que nenhum evento de três dias resolve'. O item não amplia nem restringe o alcance — apenas reproduz a negativa absoluta que o autor formulou.",
      fundamento: "Compreensão de texto — fidelidade ao alcance da afirmação.",
      macete: "Termo absoluto no item não é sinal de erro. Se o texto também é absoluto, o item está certo.",
      erroComum: "Marcar ERRADO por reflexo ao ver 'nenhum'.",
      comoBancaPensa: "Contraprova direta do reflexo de termo absoluto — item curto, verdadeiro e categórico."
    }
  },
  {
    ...BASE91,
    id: "PT-217", assunto: "Compreensão e reescritura", subassunto: "Atribuição de juízo não formulado",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: mutirão de identificação civil)",
    dificuldade: 3, tempoIdealSeg: 90, textoApoio: TXT91_D,
    enunciado: "O autor critica a realização de mutirões de identificação civil, por considerar que iniciativas dessa natureza desviam recursos que deveriam ser aplicados na estruturação permanente do serviço, motivo pelo qual encerra o texto contrapondo o retorno do ginásio ao futebol à ausência de resultados concretos do evento.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "critica a realização",
    cognitivo: {
      motivo: "Testar a transformação de uma ressalva sobre continuidade em crítica à iniciativa.",
      palavraCritica: "desviam recursos",
    },
    comentario: {
      resolucao: "ERRADO. O texto não critica o mutirão nem fala em desvio de recursos: registra o que ele produziu (412 carteiras, com relato do que significavam para as pessoas na fila) e conclui apontando o desafio da continuidade — 'como transformar em rotina aquilo que ainda se organiza como exceção'. Reconhecer que o evento é insuficiente para o problema não é negar seus resultados.",
      fundamento: "Compreensão de texto — ressalva sobre continuidade × crítica à iniciativa.",
      macete: "'Isto é pouco para o problema' é diferente de 'isto não deveria ter sido feito'. Veja se o texto negou o resultado.",
      erroComum: "Ler o fecho melancólico como condenação da iniciativa.",
      comoBancaPensa: "Parte de um dado verdadeiro (o texto termina com uma pergunta em aberto) e inventa a motivação e o juízo do autor."
    }
  },
  {
    ...BASE91,
    id: "PT-218", assunto: "Compreensão e reescritura", subassunto: "Substituição de expressão adverbial",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: mutirão de identificação civil)",
    dificuldade: 2, tempoIdealSeg: 55, textoApoio: TXT91_D,
    enunciado: "Sem prejuízo da correção gramatical e do sentido, “três filhos de uma vez” poderia ser reescrito como três filhos simultaneamente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "de uma vez",
    cognitivo: {
      motivo: "Cobrar equivalência entre locução adverbial e advérbio em -mente.",
      palavraCritica: "de uma vez",
    },
    comentario: {
      resolucao: "CERTO. No contexto, 'de uma vez' indica que os três filhos eram trazidos na mesma ocasião, e 'simultaneamente' expressa a mesma simultaneidade. A troca mantém a função adverbial de modo/tempo e não altera a regência do verbo 'trazer'.",
      fundamento: "Semântica — equivalência entre locução adverbial e advérbio.",
      macete: "Locução adverbial quase sempre tem advérbio equivalente. Confira se o contexto admite a mesma acepção.",
      erroComum: "Ler 'de uma vez' com o sentido de 'definitivamente', acepção existente mas incompatível aqui.",
      comoBancaPensa: "Explora expressão com duas acepções e deixa o contexto resolver, formato recorrente em substituição vocabular."
    }
  },
  {
    ...BASE91,
    id: "PT-219", assunto: "Compreensão e reescritura", subassunto: "Inversão do contraste do segundo parágrafo",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: mutirão de identificação civil)",
    dificuldade: 3, tempoIdealSeg: 90, textoApoio: TXT91_D,
    enunciado: "No segundo parágrafo, o autor sustenta que os números apresentados na abertura do mutirão são suficientes para dimensionar o alcance social da iniciativa, razão pela qual passa a descrever as filas apenas como ilustração acessória daquilo que as estatísticas já haviam demonstrado com precisão.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "suficientes",
    cognitivo: {
      motivo: "Testar a inversão da relação entre dado numérico e relato.",
      palavraCritica: "acessória",
    },
    comentario: {
      resolucao: "ERRADO. O parágrafo abre com o oposto: 'Os números, contudo, dizem pouco sobre o que se via nas filas'. O relato não é ilustração do que a estatística já mostrava — ele existe justamente para dizer o que a estatística NÃO alcança. O item troca a hierarquia entre os dois tipos de informação.",
      fundamento: "Compreensão de texto — relação entre dado quantitativo e relato qualitativo.",
      macete: "'Dizem pouco sobre' é limitação, não confirmação. O que vem depois supre a falta, não a ilustra.",
      erroComum: "Aceitar por reconhecer que o texto de fato apresenta números e depois relatos, sem julgar a relação afirmada entre eles.",
      comoBancaPensa: "Descreve corretamente a sequência do parágrafo e inverte a função de cada parte."
    }
  },

  /* ============ TEXTO E — 12 itens (6 C / 6 E) ============ */

  {
    ...BASE91,
    id: "PT-220", assunto: "Compreensão e reescritura", subassunto: "Tese sobre a natureza do atendimento",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: revitimização no atendimento)",
    dificuldade: 1, tempoIdealSeg: 40, textoApoio: TXT91_E,
    enunciado: "De acordo com o texto, o atendimento à vítima integra o resultado esperado da investigação.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "integra o resultado",
    cognitivo: {
      motivo: "Aferir a leitura da tese enunciada na primeira linha.",
      palavraCritica: "resultado",
    },
    comentario: {
      resolucao: "CERTO. O texto abre exatamente assim: o atendimento 'não é uma etapa protocolar do inquérito; é parte do próprio resultado que se espera da investigação'. O item reproduz a afirmação sem ampliá-la.",
      fundamento: "Compreensão de texto — identificação da tese.",
      macete: "Estrutura 'não é A; é B' entrega a tese em B.",
      erroComum: "Confundir 'parte do resultado' com 'etapa do procedimento', que é justamente o que o texto nega.",
      comoBancaPensa: "Item curto e correto de abertura, para calibrar a leitura do bloco."
    }
  },
  {
    ...BASE91,
    id: "PT-221", assunto: "Compreensão e reescritura", subassunto: "Extrapolação sobre ilegalidade",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: revitimização no atendimento)",
    dificuldade: 3, tempoIdealSeg: 95, textoApoio: TXT91_E,
    enunciado: "Infere-se do segundo parágrafo que os gestos descritos pelo autor como manifestações de revitimização configuram, todos eles, infrações disciplinares puníveis na via administrativa, razão pela qual o texto os enumera com detalhe, de modo a orientar a apuração de responsabilidade dos servidores que os pratiquem.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "infrações disciplinares puníveis",
    cognitivo: {
      motivo: "Testar a inversão da afirmação expressa sobre a natureza dos gestos.",
      palavraCritica: "infrações",
    },
    comentario: {
      resolucao: "ERRADO. O texto afirma o contrário, e de forma explícita: 'Nenhum desses gestos figura como ilegalidade, e é exatamente por isso que exigem atenção deliberada'. O detalhamento serve para tornar visível o que escapa ao controle formal — não para embasar punição.",
      fundamento: "Compreensão de texto — leitura de afirmação expressa.",
      macete: "Quando o item afirma o oposto de uma frase literal do texto, procure a frase antes de raciocinar.",
      erroComum: "Supor punição por associação com o vocabulário institucional do texto.",
      comoBancaPensa: "Enunciado longo que constrói uma finalidade plausível para a enumeração e ignora a frase que a contradiz."
    }
  },
  {
    ...BASE91,
    id: "PT-222", assunto: "Compreensão e reescritura", subassunto: "Substituição de pronome por sintagma",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: revitimização no atendimento)",
    dificuldade: 2, tempoIdealSeg: 60, textoApoio: TXT91_E,
    enunciado: "Sem prejuízo da correção gramatical e do sentido, “Combatê-la, portanto, não depende apenas de lei nova” poderia ser reescrito como Combater a revitimização, portanto, não depende apenas de lei nova.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Combatê-la",
    cognitivo: {
      motivo: "Cobrar a identificação do referente do pronome oblíquo em posição de ênclise ao infinitivo.",
      palavraCritica: "-la",
    },
    comentario: {
      resolucao: "CERTO. O pronome '-la' retoma 'A revitimização', sujeito do parágrafo anterior. Explicitá-lo desfaz a ênclise sem alterar sentido nem correção: 'combater a revitimização' mantém a transitividade direta do verbo. A substituição apenas troca a forma pronominal pelo sintagma que ela representa.",
      fundamento: "Coesão e sintaxe — anáfora pronominal; ênclise ao infinitivo.",
      macete: "Para achar o referente do pronome em '-lo/-la', tente substituir pelo substantivo e ver se a frase continua fazendo sentido.",
      erroComum: "Puxar '-la' para 'lei nova', termo mais próximo mas posterior ao pronome.",
      comoBancaPensa: "Reescritura correta que exige rastrear o antecedente através da fronteira de parágrafo."
    }
  },
  {
    ...BASE91,
    id: "PT-223", assunto: "Compreensão e reescritura", subassunto: "Reescritura que altera o escopo de 'apenas'",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: revitimização no atendimento)",
    dificuldade: 3, tempoIdealSeg: 90, textoApoio: TXT91_E,
    enunciado: "Preservam-se a correção gramatical e o sentido do texto ao se reescrever “não depende apenas de lei nova” como não depende de lei nova, mas apenas de fluxo interno, espaço físico adequado e formação.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "não depende apenas",
    cognitivo: {
      motivo: "Testar o deslocamento do advérbio de exclusão dentro da negação.",
      palavraCritica: "apenas",
    },
    comentario: {
      resolucao: "ERRADO. 'Não depende APENAS de lei nova' admite que a lei conta, apenas não sozinha. A reescritura exclui a lei do conjunto de fatores e restringe a dependência às três providências, o que o texto não afirma — ele as apresenta como o que ainda falta, não como substitutas da norma.",
      fundamento: "Semântica — escopo da negação e posição do advérbio de exclusão.",
      macete: "'Não só X' inclui X. 'Não X, mas só Y' exclui X. A diferença cabe numa palavra e muda tudo.",
      erroComum: "Aceitar por a reescritura listar corretamente as três providências do texto.",
      comoBancaPensa: "Mantém fiel a parte fácil de conferir (a lista) e altera a relação que ninguém volta para checar."
    }
  },
  {
    ...BASE91,
    id: "PT-224", assunto: "Pontuação", subassunto: "Ponto e vírgula opondo definição negada e afirmada",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: revitimização no atendimento)",
    dificuldade: 2, tempoIdealSeg: 50, textoApoio: TXT91_E,
    enunciado: "O ponto e vírgula empregado após “etapa protocolar do inquérito” separa duas orações coordenadas que se opõem quanto à definição do atendimento à vítima.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "se opõem",
    cognitivo: {
      motivo: "Cobrar a leitura do ponto e vírgula como marcador de contraste entre coordenadas.",
      palavraCritica: "coordenadas",
    },
    comentario: {
      resolucao: "CERTO. A primeira oração nega uma definição ('não é uma etapa protocolar do inquérito') e a segunda afirma outra ('é parte do próprio resultado'). São coordenadas assindéticas em relação de contraste, e o ponto e vírgula marca essa oposição com pausa mais forte que a vírgula, sem exigir conjunção.",
      fundamento: "Pontuação — ponto e vírgula entre coordenadas assindéticas adversativas.",
      macete: "Ponto e vírgula entre 'não é X' e 'é Y' funciona como um 'mas' silencioso.",
      erroComum: "Exigir conjunção adversativa para reconhecer a oposição.",
      comoBancaPensa: "Item curto e verdadeiro sobre função de pontuação, área de desconfiança do candidato."
    }
  },
  {
    ...BASE91,
    id: "PT-225", assunto: "Pontuação", subassunto: "Vírgulas em enumeração de aposto",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: revitimização no atendimento)",
    dificuldade: 3, tempoIdealSeg: 85, textoApoio: TXT91_E,
    enunciado: "As vírgulas que separam “a pergunta repetida pela quinta vez”, “o balcão onde não há reserva alguma de privacidade” e “o olhar que avalia a roupa antes de registrar a ocorrência” são facultativas, podendo ser suprimidas sem prejuízo da correção gramatical, uma vez que a conjunção aditiva está subentendida entre os termos enumerados.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "facultativas",
    cognitivo: {
      motivo: "Testar a afirmação de facultatividade de vírgulas obrigatórias em enumeração.",
      palavraCritica: "suprimidas",
    },
    comentario: {
      resolucao: "ERRADO. Em enumeração de termos de mesma função sintática sem conectivo, a vírgula é obrigatória: é ela que marca a separação entre os itens. Suprimi-la produziria uma sequência ilegível e agramatical. Que a aditiva esteja subentendida é justamente o motivo da vírgula, não da sua dispensa.",
      fundamento: "Pontuação — vírgula em enumeração assindética.",
      macete: "Sem 'e' entre os itens, a vírgula não é escolha: é o que separa um item do outro.",
      erroComum: "Confundir 'facultativa' com 'não obrigatória em toda posição' — a última vírgula, antes do 'e', é que costuma ser facultativa.",
      comoBancaPensa: "Usa uma observação verdadeira (a aditiva está subentendida) para justificar uma conclusão falsa sobre a pontuação."
    }
  },
  {
    ...BASE91,
    id: "PT-226", assunto: "Coesão textual", subassunto: "Referente de expressão anafórica",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: revitimização no atendimento)",
    dificuldade: 3, tempoIdealSeg: 85, textoApoio: TXT91_E,
    enunciado: "No trecho “A revitimização ocorre quando essa segunda expectativa é frustrada”, a expressão “essa segunda expectativa” retoma a apuração do fato, mencionada no parágrafo anterior como a primeira das duas expectativas de quem procura a delegacia.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "retoma a apuração do fato",
    cognitivo: {
      motivo: "Testar o rastreio de ordinal dentro de uma dupla anunciada no parágrafo anterior.",
      palavraCritica: "segunda",
    },
    comentario: {
      resolucao: "ERRADO. O texto anuncia 'uma expectativa dupla' e a desdobra na ordem: primeiro, 'a de que o fato seja apurado'; segundo, 'a de que sua narrativa seja recebida sem que ela precise justificar-se'. A SEGUNDA é o acolhimento da narrativa, não a apuração — que é justamente a primeira. O item troca as duas.",
      fundamento: "Coesão — anáfora com numeral ordinal; ordem de menção.",
      macete: "Quando o texto anuncia 'dupla' e lista, conte na ordem em que aparecem. O ordinal é literal.",
      erroComum: "Associar 'segunda' à ideia mais desenvolvida no texto, e não à ordem de menção.",
      comoBancaPensa: "Aposta em que o candidato lembre do conteúdo do parágrafo sem conferir a ordem das duas expectativas."
    }
  },
  {
    ...BASE91,
    id: "PT-227", assunto: "Sintaxe", subassunto: "Função sintática de oração subordinada substantiva",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: revitimização no atendimento)",
    dificuldade: 3, tempoIdealSeg: 80, textoApoio: TXT91_E,
    enunciado: "Em “a de que o fato seja apurado”, a oração iniciada por “que” completa o sentido de um nome, exercendo função de complemento nominal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "complemento nominal",
    cognitivo: {
      motivo: "Cobrar a distinção entre substantiva completiva nominal e objetiva direta.",
      palavraCritica: "a de que",
    },
    comentario: {
      resolucao: "CERTO. O 'a' é pronome demonstrativo que retoma 'expectativa', e a oração 'que o fato seja apurado' completa o sentido desse nome — expectativa DE algo. Trata-se de oração subordinada substantiva completiva nominal, cuja função é a de complemento nominal, exigida pela regência do substantivo abstrato.",
      fundamento: "Sintaxe — oração subordinada substantiva completiva nominal.",
      macete: "Nome abstrato + preposição + 'que' = completiva nominal. Verbo + 'que' = objetiva direta.",
      erroComum: "Classificar como objetiva direta por haver 'que' introduzindo a oração.",
      comoBancaPensa: "Pergunta pela função de uma oração DO TEXTO, no formato dos itens de sintaxe da prova real."
    }
  },
  {
    ...BASE91,
    id: "PT-228", assunto: "Tipologia textual", subassunto: "Predominância dissertativa em texto institucional",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: revitimização no atendimento)",
    dificuldade: 2, tempoIdealSeg: 45, textoApoio: TXT91_E,
    enunciado: "Embora apresente exemplos concretos de situações vividas na delegacia, o texto é predominantemente dissertativo, e não narrativo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "predominantemente dissertativo",
    cognitivo: {
      motivo: "Cobrar a distinção entre presença de exemplo e predominância tipológica.",
      palavraCritica: "predominantemente",
    },
    comentario: {
      resolucao: "CERTO. Os exemplos ('a pergunta repetida pela quinta vez', 'o balcão', 'o olhar') não constituem narrativa: não há personagens, sucessão de eventos nem progressão temporal. Servem de ilustração a uma tese defendida ao longo do texto, que se organiza como dissertação — problema, caracterização e encaminhamento.",
      fundamento: "Tipologia textual — dissertação com sequências ilustrativas.",
      macete: "Exemplo não faz narrativa. Narrativa pede tempo, personagem e mudança de estado.",
      erroComum: "Classificar como narrativo por causa das cenas descritas.",
      comoBancaPensa: "Constrói a dúvida ('embora apresente exemplos') e testa se o candidato sabe o que define predominância."
    }
  },
  {
    ...BASE91,
    id: "PT-229", assunto: "Compreensão e reescritura", subassunto: "Substituição de conectivo conclusivo",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: revitimização no atendimento)",
    dificuldade: 2, tempoIdealSeg: 55, textoApoio: TXT91_E,
    enunciado: "Sem prejuízo da correção gramatical e do sentido, o conectivo “portanto”, no último parágrafo, poderia ser substituído por por conseguinte.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "portanto / por conseguinte",
    cognitivo: {
      motivo: "Cobrar equivalência entre conectivos conclusivos.",
      palavraCritica: "portanto",
    },
    comentario: {
      resolucao: "CERTO. 'Portanto' e 'por conseguinte' são conclusivos equivalentes: ambos apresentam o que segue como decorrência do que veio antes. A posição intercalada entre vírgulas é a mesma para os dois, e a correção do período se mantém.",
      fundamento: "Coesão — conectivos conclusivos.",
      macete: "Família dos conclusivos: portanto, logo, pois (posposto), por conseguinte, por isso. São permutáveis, com ajuste de registro.",
      erroComum: "Recusar por 'por conseguinte' soar mais formal, confundindo registro com sentido.",
      comoBancaPensa: "Substituição legítima entre conectivos da mesma classe, para punir a recusa automática."
    }
  },
  {
    ...BASE91,
    id: "PT-230", assunto: "Compreensão e reescritura", subassunto: "Alcance da conclusão do texto",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: revitimização no atendimento)",
    dificuldade: 3, tempoIdealSeg: 90, textoApoio: TXT91_E,
    enunciado: "Conclui-se do texto que as três providências indicadas no último parágrafo dependem, para sua implementação, de alteração legislativa prévia, uma vez que o autor as apresenta como alternativas à lei nova que considera insuficiente, e não como medidas que cada unidade possa adotar por iniciativa própria.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "alteração legislativa prévia",
    cognitivo: {
      motivo: "Testar a inversão da afirmação sobre a autonomia das unidades.",
      palavraCritica: "iniciativa própria",
    },
    comentario: {
      resolucao: "ERRADO. O texto encerra dizendo o oposto: as três providências 'estão ao alcance de qualquer unidade que decida adotá-las'. São apresentadas justamente como o que não depende de lei nova. O item inverte a conclusão e ainda distorce o argumento, transformando 'não depende apenas de lei' em 'a lei é insuficiente e precisa ser alterada antes'.",
      fundamento: "Compreensão de texto — leitura da conclusão.",
      macete: "A última frase de texto dissertativo costuma trazer o encaminhamento. Leia-a antes de julgar qualquer item sobre a conclusão.",
      erroComum: "Aceitar por reconhecer a menção à insuficiência da lei, sem conferir o que o texto propõe em seguida.",
      comoBancaPensa: "Enunciado longo cuja falsidade está exatamente na frase final do texto — a que o candidato cansado já não relê."
    }
  },
  {
    ...BASE91,
    id: "PT-231", assunto: "Compreensão e reescritura", subassunto: "Sentido de expressão no contexto",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: revitimização no atendimento)",
    dificuldade: 2, tempoIdealSeg: 50, textoApoio: TXT91_E,
    enunciado: "No texto, “atenção deliberada” indica cuidado intencional, planejado, por oposição ao que ocorreria de modo espontâneo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "deliberada",
    cognitivo: {
      motivo: "Cobrar o sentido contextual de adjetivo em posição-chave do argumento.",
      palavraCritica: "deliberada",
    },
    comentario: {
      resolucao: "CERTO. O adjetivo qualifica a atenção necessária justamente porque os gestos descritos não são ilegalidades — não sendo capturados pelo controle formal, exigem esforço consciente e planejado para serem percebidos e corrigidos. 'Deliberada' opõe-se a automática ou casual.",
      fundamento: "Semântica — sentido contextual do adjetivo.",
      macete: "Adjetivo em frase de fecho de parágrafo costuma condensar o argumento. Pergunte a que ele se opõe.",
      erroComum: "Ler 'deliberada' como 'demorada' ou 'minuciosa', que não é a acepção.",
      comoBancaPensa: "Testa vocabulário de registro formal em posição argumentativamente decisiva."
    }
  },

  /* ============ TEXTO F — 12 itens (6 C / 6 E) ============ */

  {
    ...BASE91,
    id: "PT-232", assunto: "Compreensão e reescritura", subassunto: "Metáfora estruturante do texto",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: o rio e as cidades ribeirinhas)",
    dificuldade: 2, tempoIdealSeg: 45, textoApoio: TXT91_F,
    enunciado: "A comparação do rio a um relógio, no texto, sustenta a ideia de que ele organizava a marcação do tempo das comunidades ribeirinhas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "relógio",
    cognitivo: {
      motivo: "Cobrar a leitura da metáfora que estrutura o texto inteiro.",
      palavraCritica: "relógio",
    },
    comentario: {
      resolucao: "CERTO. A metáfora é explicitada logo em seguida: 'É por ele que se sabe quando plantar, quando a balsa atravessa, quando convém recolher a rede'. Os três 'quando' mostram o rio funcionando como marcador temporal, e o fecho do texto retoma a imagem ao falar do 'modo como as pessoas medem o tempo'.",
      fundamento: "Semântica — metáfora estruturante e sua retomada.",
      macete: "Metáfora repetida no fim do texto é estruturante. Ela costuma conter a tese.",
      erroComum: "Tratar 'relógio' como comparação decorativa e não como chave do argumento.",
      comoBancaPensa: "Item curto e correto sobre a imagem central, que o texto explica logo depois de propor."
    }
  },
  {
    ...BASE91,
    id: "PT-233", assunto: "Compreensão e reescritura", subassunto: "Extrapolação — condenação da barragem",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: o rio e as cidades ribeirinhas)",
    dificuldade: 3, tempoIdealSeg: 95, textoApoio: TXT91_F,
    enunciado: "Depreende-se do texto que o autor defende a desativação das barragens instaladas ao longo do rio, por entender que os prejuízos causados à organização social das comunidades ribeirinhas superam os benefícios de geração de energia e de emprego que a obra proporcionou à região.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "desativação das barragens",
    cognitivo: {
      motivo: "Testar a conversão de uma ponderação explícita em condenação.",
      palavraCritica: "superam",
    },
    comentario: {
      resolucao: "ERRADO. O texto antecipa e afasta essa leitura: 'Não se trata de recusar a barragem, que trouxe energia e emprego'. Ele reconhece os benefícios e pede reconhecimento do custo — 'toda obra que altera um rio altera também o modo como as pessoas medem o tempo'. Em nenhum momento compara magnitudes nem propõe desativação.",
      fundamento: "Compreensão de texto — ponderação × condenação; extrapolação.",
      macete: "Quando o texto diz 'não se trata de recusar X', qualquer item que o faça recusar X está errado.",
      erroComum: "Ler o tom nostálgico do segundo parágrafo como posição contrária à obra.",
      comoBancaPensa: "Enunciado longo que ignora a frase em que o autor já se defendeu exatamente dessa leitura."
    }
  },
  {
    ...BASE91,
    id: "PT-234", assunto: "Compreensão e reescritura", subassunto: "Substituição de estrutura enfática",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: o rio e as cidades ribeirinhas)",
    dificuldade: 3, tempoIdealSeg: 70, textoApoio: TXT91_F,
    enunciado: "Sem prejuízo da correção gramatical e do sentido, “É por ele que se sabe quando plantar” poderia ser reescrito como Sabe-se por ele quando plantar.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "É... que",
    cognitivo: {
      motivo: "Cobrar o reconhecimento da construção clivada e sua desmontagem.",
      palavraCritica: "É por ele que",
    },
    comentario: {
      resolucao: "CERTO. 'É... que' é construção clivada, de realce: destaca o termo entre os dois elementos sem alterar o conteúdo proposicional. Desfeita a clivagem, resta 'Sabe-se por ele quando plantar', com a mesma informação. Perde-se a ênfase, que é recurso estilístico, não sentido — e o item pede manutenção de sentido, não de expressividade.",
      fundamento: "Sintaxe — construção clivada de realce.",
      macete: "Se dá para apagar 'é' e 'que' e a frase continua completa, era realce.",
      erroComum: "Recusar por perceber a perda de ênfase e tratá-la como mudança de sentido.",
      comoBancaPensa: "Distingue quem entende realce sintático de quem decora que 'toda alteração muda algo'."
    }
  },
  {
    ...BASE91,
    id: "PT-235", assunto: "Compreensão e reescritura", subassunto: "Reescritura que troca concessão por causa",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: o rio e as cidades ribeirinhas)",
    dificuldade: 3, tempoIdealSeg: 90, textoApoio: TXT91_F,
    enunciado: "Mantêm-se a correção gramatical e o sentido do texto ao se reescrever “Não se trata de recusar a barragem, que trouxe energia e emprego” como Não se trata de recusar a barragem, porque ela trouxe energia e emprego, dado que a oração adjetiva explicativa e a oração causal cumprem, nesse contexto, a mesma função de justificar a afirmação anterior.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "porque ela trouxe",
    cognitivo: {
      motivo: "Testar a conversão de adjetiva explicativa em causal.",
      palavraCritica: "explicativa",
    },
    comentario: {
      resolucao: "ERRADO. A adjetiva explicativa acrescenta informação sobre a barragem sem estabelecer relação de causa com a oração principal. Ao transformá-la em causal, a reescritura passa a afirmar que os benefícios são A RAZÃO de não se recusar a obra — argumento que o texto não constrói: ele reconhece os benefícios ao mesmo tempo em que sustenta a existência de um custo. Explicar não é justificar.",
      fundamento: "Sintaxe do período composto — oração adjetiva explicativa × subordinada adverbial causal.",
      macete: "Adjetiva explicativa descreve o antecedente. Causal explica o fato da principal. São camadas diferentes.",
      erroComum: "Aceitar por ambas virem após vírgula e acrescentarem informação.",
      comoBancaPensa: "Oferece uma justificativa gramatical de aparência sofisticada para uma equivalência que não existe."
    }
  },
  {
    ...BASE91,
    id: "PT-236", assunto: "Pontuação", subassunto: "Vírgula em oração adjetiva explicativa",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: o rio e as cidades ribeirinhas)",
    dificuldade: 2, tempoIdealSeg: 55, textoApoio: TXT91_F,
    enunciado: "A vírgula antes de “que trouxe energia e emprego” indica que a oração é explicativa, e não restritiva.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "explicativa",
    cognitivo: {
      motivo: "Cobrar o papel da vírgula na distinção entre adjetiva restritiva e explicativa.",
      palavraCritica: "vírgula",
    },
    comentario: {
      resolucao: "CERTO. A vírgula é o sinal que distingue as duas: sem ela, a oração restringiria o antecedente, sugerindo que haveria barragens que não trouxeram energia e emprego. Com ela, a oração apenas acrescenta informação sobre a barragem já identificada — leitura coerente com o texto, que trata de uma obra determinada.",
      fundamento: "Pontuação e sintaxe — oração adjetiva restritiva × explicativa.",
      macete: "Vírgula antes de 'que' abre parêntese: o que vem é acréscimo, não filtro.",
      erroComum: "Tratar a vírgula como pausa de leitura, sem função sintática.",
      comoBancaPensa: "Item curto e verdadeiro sobre a distinção que a banca mais cobra em adjetivas."
    }
  },
  {
    ...BASE91,
    id: "PT-237", assunto: "Pontuação", subassunto: "Vírgula marcando elipse verbal",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: o rio e as cidades ribeirinhas)",
    dificuldade: 3, tempoIdealSeg: 80, textoApoio: TXT91_F,
    enunciado: "Em “os mais novos, pelo contracheque”, a vírgula assinala a omissão de um termo recuperável no período anterior.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "omissão",
    cognitivo: {
      motivo: "Cobrar a vírgula como marca de zeugma.",
      palavraCritica: "vírgula",
    },
    comentario: {
      resolucao: "CERTO. O período completo seria 'os mais novos contam o ano pelo contracheque'. A locução verbal foi omitida por já ter aparecido na oração anterior ('Os mais velhos ainda contam o ano pelas águas'), e a vírgula marca essa elipse — recurso conhecido como zeugma.",
      fundamento: "Pontuação — vírgula em elipse verbal (zeugma).",
      macete: "Vírgula sozinha no meio de estrutura paralela quase sempre esconde um verbo repetido.",
      erroComum: "Considerar a construção incompleta ou incorreta por faltar verbo explícito.",
      comoBancaPensa: "Testa se o candidato reconhece a elipse em vez de tratar a frase como fragmento."
    }
  },
  {
    ...BASE91,
    id: "PT-238", assunto: "Coesão textual", subassunto: "Referente de pronome oblíquo",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: o rio e as cidades ribeirinhas)",
    dificuldade: 2, tempoIdealSeg: 50, textoApoio: TXT91_F,
    enunciado: "Em “É por ele que se sabe quando plantar”, o pronome “ele” retoma o termo “o rio”.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ele",
    cognitivo: {
      motivo: "Cobrar o rastreio da anáfora que sustenta a metáfora do texto.",
      palavraCritica: "ele",
    },
    comentario: {
      resolucao: "CERTO. O período anterior afirma que 'o rio não é paisagem: é relógio', e 'ele' retoma esse mesmo referente. A leitura confirma-se pelo conteúdo: é pelo rio que se sabe quando plantar, quando a balsa atravessa e quando recolher a rede.",
      fundamento: "Coesão — anáfora pronominal.",
      macete: "Pronome logo após definição enfática retoma o termo definido.",
      erroComum: "Puxar 'ele' para 'relógio', que é predicativo e não referente autônomo.",
      comoBancaPensa: "Anáfora simples que serve de contraponto aos itens em que o referente é trocado."
    }
  },
  {
    ...BASE91,
    id: "PT-239", assunto: "Sintaxe", subassunto: "Função sintática de termo preposicionado",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: o rio e as cidades ribeirinhas)",
    dificuldade: 3, tempoIdealSeg: 80, textoApoio: TXT91_F,
    enunciado: "Em “A vazão regulada por barragens desfez a cheia previsível”, o termo “por barragens” exerce a função de objeto indireto do verbo “desfez”.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "objeto indireto",
    cognitivo: {
      motivo: "Testar a classificação de agente da passiva em oração reduzida encaixada.",
      palavraCritica: "regulada",
    },
    comentario: {
      resolucao: "ERRADO. 'Por barragens' não se liga a 'desfez': liga-se ao particípio 'regulada', dentro do sintagma que forma o sujeito ('A vazão regulada por barragens'). É agente da passiva da forma participial, e não objeto indireto — até porque 'desfazer' é transitivo direto, tendo por objeto 'a cheia previsível'.",
      fundamento: "Sintaxe — agente da passiva; transitividade verbal.",
      macete: "Ache primeiro o núcleo do sujeito. O que está preso a ele não pode ser complemento do verbo principal.",
      erroComum: "Ligar todo termo preposicionado ao verbo mais próximo, sem verificar a que núcleo ele pertence.",
      comoBancaPensa: "Pergunta pela função de um termo do texto, explorando a sobreposição de estruturas dentro do mesmo período."
    }
  },
  {
    ...BASE91,
    id: "PT-240", assunto: "Compreensão e reescritura", subassunto: "Inversão da relação entre gerações",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: o rio e as cidades ribeirinhas)",
    dificuldade: 3, tempoIdealSeg: 90, textoApoio: TXT91_F,
    enunciado: "Segundo o texto, os moradores mais jovens das cidades ribeirinhas mantiveram o hábito de organizar o calendário pelas cheias do rio, ao passo que os mais velhos, tendo se adaptado às atividades econômicas surgidas após a construção das barragens, passaram a orientar-se por marcos ligados ao trabalho assalariado.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "mais jovens ... pelas cheias",
    cognitivo: {
      motivo: "Testar a troca dos sujeitos numa oposição construída por elipse.",
      palavraCritica: "ao passo que",
    },
    comentario: {
      resolucao: "ERRADO. O texto diz o inverso: 'Os mais velhos ainda contam o ano pelas águas; os mais novos, pelo contracheque'. São os VELHOS que mantêm a referência do rio e os NOVOS que se orientam pelo salário. O item troca os dois grupos e ainda inventa a explicação da adaptação econômica.",
      fundamento: "Compreensão de texto — atribuição de característica ao sujeito correto.",
      macete: "Em oposição entre dois grupos, marque quem é quem antes de julgar. A troca é a armadilha mais barata que existe.",
      erroComum: "Ler rápido e reter apenas que há contraste entre gerações, sem fixar a direção dele.",
      comoBancaPensa: "Preserva a estrutura de contraste do texto e inverte os termos — o candidato reconhece a forma e supõe o conteúdo."
    }
  },
  {
    ...BASE91,
    id: "PT-241", assunto: "Compreensão e reescritura", subassunto: "Substituição vocabular em contexto",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: o rio e as cidades ribeirinhas)",
    dificuldade: 2, tempoIdealSeg: 50, textoApoio: TXT91_F,
    enunciado: "Sem prejuízo da correção gramatical e do sentido, “o que era ciclo virou incerteza” poderia ser reescrito como o que era ciclo tornou-se incerteza.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "virou / tornou-se",
    cognitivo: {
      motivo: "Cobrar equivalência entre verbos de ligação de mudança de estado.",
      palavraCritica: "virou",
    },
    comentario: {
      resolucao: "CERTO. 'Virar' e 'tornar-se' funcionam como verbos de ligação que indicam mudança de estado, e ambos admitem predicativo do sujeito sem preposição. A troca eleva o registro, mas mantém a estrutura sintática e o sentido de transformação.",
      fundamento: "Sintaxe — verbos de ligação de mudança de estado; predicativo do sujeito.",
      macete: "Ser, estar, ficar, permanecer, parecer, tornar-se, virar: todos ligam sujeito a predicativo.",
      erroComum: "Recusar por 'virar' ser coloquial, confundindo registro com correção.",
      comoBancaPensa: "Substituição correta que testa se o candidato distingue nível de linguagem de erro gramatical."
    }
  },
  {
    ...BASE91,
    id: "PT-242", assunto: "Compreensão e reescritura", subassunto: "Alcance da afirmação final",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: o rio e as cidades ribeirinhas)",
    dificuldade: 2, tempoIdealSeg: 45, textoApoio: TXT91_F,
    enunciado: "Segundo o texto, toda obra que altera um rio altera também o modo como as pessoas medem o tempo.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "toda",
    cognitivo: {
      motivo: "Apresentar termo absoluto em item VERDADEIRO, por reprodução literal da generalização do autor.",
      palavraCritica: "toda",
    },
    comentario: {
      resolucao: "CERTO. É a frase final do texto, reproduzida sem alteração de alcance: 'toda obra que altera um rio altera também o modo como as pessoas medem o tempo'. A generalização é do autor, e o item apenas a repete.",
      fundamento: "Compreensão de texto — fidelidade ao alcance da afirmação.",
      macete: "Antes de reagir ao 'toda', procure a frase no texto. Se o autor generalizou, o item pode generalizar.",
      erroComum: "Marcar ERRADO por reflexo diante do quantificador universal.",
      comoBancaPensa: "Terceira contraprova do reflexo neste conjunto de lotes — a banca cobra literalidade, e literalidade às vezes é absoluta."
    }
  },
  {
    ...BASE91,
    id: "PT-243", assunto: "Compreensão e reescritura", subassunto: "Causa atribuída à mudança do calendário",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: o rio e as cidades ribeirinhas)",
    dificuldade: 3, tempoIdealSeg: 85, textoApoio: TXT91_F,
    enunciado: "De acordo com o texto, a perda da previsibilidade das cheias resulta principalmente do assoreamento provocado pela ocupação desordenada das margens, processo que o autor associa ao crescimento das cidades ribeirinhas e à substituição das atividades tradicionais por ocupações urbanas assalariadas.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "assoreamento",
    cognitivo: {
      motivo: "Testar a substituição da causa apontada pelo texto por outra, plausível mas ausente.",
      palavraCritica: "assoreamento",
    },
    comentario: {
      resolucao: "ERRADO. A causa que o texto indica é uma só e está explícita: 'A vazão regulada por barragens desfez a cheia previsível'. Assoreamento, ocupação de margens e crescimento urbano não aparecem no texto — são acrescentados pelo item, que aproveita o repertório do candidato sobre problemas de rios.",
      fundamento: "Compreensão de texto — identificação da causa; informação externa ao texto.",
      macete: "Se a causa do item não está escrita no texto, ela não é do texto — por mais verdadeira que seja no mundo.",
      erroComum: "Aceitar por conhecer o fenômeno do assoreamento e considerá-lo compatível com o que se lê.",
      comoBancaPensa: "Traz uma explicação correta na realidade e ausente no texto, medindo se o candidato responde ao que leu."
    }
  },

  /* ============ TEXTO G — 12 itens (6 C / 6 E) ============ */

  {
    ...BASE91,
    id: "PT-244", assunto: "Compreensão e reescritura", subassunto: "Premissa do método",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: análise de vínculos)",
    dificuldade: 1, tempoIdealSeg: 40, textoApoio: TXT91_G,
    enunciado: "Segundo o texto, é a ligação entre os elementos, e não cada elemento isolado, que revela a estrutura de um grupo criminoso.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ligação",
    cognitivo: {
      motivo: "Aferir a leitura da premissa enunciada na primeira frase.",
      palavraCritica: "isoladamente",
    },
    comentario: {
      resolucao: "CERTO. O texto abre afirmando que 'pessoas, telefones, veículos e endereços não existem isoladamente, e é a ligação entre eles que revela a estrutura de um grupo criminoso'. O item reformula essa premissa sem alterá-la.",
      fundamento: "Compreensão de texto — identificação da premissa.",
      macete: "Construção 'é X que' destaca o termo. O que está entre 'é' e 'que' costuma ser a chave da frase.",
      erroComum: "Marcar ERRADO por considerar que os elementos isolados também têm valor probatório — o que é verdade no mundo, mas não é o que o texto afirma.",
      comoBancaPensa: "Item curto e correto de abertura, com estrutura clivada que o candidato precisa desmontar."
    }
  },
  {
    ...BASE91,
    id: "PT-245", assunto: "Compreensão e reescritura", subassunto: "Extrapolação sobre valor probatório",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: análise de vínculos)",
    dificuldade: 3, tempoIdealSeg: 95, textoApoio: TXT91_G,
    enunciado: "Conclui-se do texto que o grafo produzido pela análise de vínculos, por ser objeto verificável e reprodutível por outro analista a partir dos mesmos dados, adquire por isso mesmo natureza probatória autônoma, dispensando a produção de outros elementos de prova sobre os fatos que representa.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "natureza probatória autônoma",
    cognitivo: {
      motivo: "Testar a emenda de conclusão falsa a uma premissa verdadeira do texto.",
      palavraCritica: "dispensando",
    },
    comentario: {
      resolucao: "ERRADO. A primeira parte é fiel ao texto: o grafo é mesmo apresentado como 'objeto verificável, que outro analista pode reproduzir'. Mas a conclusão contraria a regra que o próprio texto enuncia como orientadora do trabalho sério: 'o desenho não substitui a prova'. O grafo organiza indícios e sugere onde procurar — não dispensa prova.",
      fundamento: "Compreensão de texto — verdade parcial com conclusão emendada.",
      macete: "Item que começa parafraseando bem o texto merece leitura mais atenta do fim, não menos.",
      erroComum: "Validar o item pela premissa correta e não conferir a conclusão.",
      comoBancaPensa: "Padrão verdade + falso emendado, com a falsidade colocada depois de duas orações fiéis ao texto."
    }
  },
  {
    ...BASE91,
    id: "PT-246", assunto: "Compreensão e reescritura", subassunto: "Substituição de locução conjuntiva",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: análise de vínculos)",
    dificuldade: 2, tempoIdealSeg: 60, textoApoio: TXT91_G,
    enunciado: "Sem prejuízo da correção gramatical e do sentido, “do contrário, o grafo apenas confirma” poderia ser reescrito como caso contrário, o grafo apenas confirma.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "do contrário / caso contrário",
    cognitivo: {
      motivo: "Cobrar equivalência entre locuções de valor condicional negativo.",
      palavraCritica: "do contrário",
    },
    comentario: {
      resolucao: "CERTO. 'Do contrário' e 'caso contrário' são equivalentes e exprimem a mesma condição negativa: se o analista NÃO qualificar a aresta, o grafo apenas confirma a hipótese inicial. Ambas as formas são registradas e mantêm a pontuação e a estrutura do período.",
      fundamento: "Coesão — locuções de valor condicional.",
      macete: "'Do contrário', 'caso contrário' e 'senão' cumprem a mesma função: retomam a hipótese negada.",
      erroComum: "Supor que uma das formas é incorreta por menos frequente na escrita informal.",
      comoBancaPensa: "Substituição legítima entre locuções sinônimas, para punir a recusa automática."
    }
  },
  {
    ...BASE91,
    id: "PT-247", assunto: "Compreensão e reescritura", subassunto: "Reescritura que inverte a advertência",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: análise de vínculos)",
    dificuldade: 3, tempoIdealSeg: 90, textoApoio: TXT91_G,
    enunciado: "Preservam-se a correção gramatical e o sentido do texto ao se reescrever “Um vínculo frequente não é necessariamente um vínculo relevante” como Um vínculo frequente não é um vínculo necessariamente relevante, embora possa sê-lo em determinadas circunstâncias que o analista deve identificar antes de descartá-lo da representação em grafo.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "antes de descartá-lo",
    cognitivo: {
      motivo: "Testar acréscimo de orientação prática que o texto não formula.",
      palavraCritica: "descartá-lo",
    },
    comentario: {
      resolucao: "ERRADO. O deslocamento de 'necessariamente' é inofensivo, mas a reescritura acrescenta uma instrução ausente: o texto não manda descartar vínculos, e sim QUALIFICAR a aresta — 'Cabe ao analista qualificar a aresta, e não apenas contá-la'. Sugerir descarte inverte a orientação, que é de análise, não de exclusão.",
      fundamento: "Compreensão e sintaxe — acréscimo de conteúdo em proposta de reescritura.",
      macete: "Reescritura que fica MAIOR que o original quase sempre acrescentou algo. Compare o que sobrou de novo.",
      erroComum: "Concentrar-se na posição de 'necessariamente' e não notar a oração acrescentada no fim.",
      comoBancaPensa: "Coloca a alteração real depois de uma mudança inofensiva, contando com o candidato parar de ler na primeira."
    }
  },
  {
    ...BASE91,
    id: "PT-248", assunto: "Pontuação", subassunto: "Dois-pontos anunciando explicitação",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: análise de vínculos)",
    dificuldade: 2, tempoIdealSeg: 50, textoApoio: TXT91_G,
    enunciado: "Os dois-pontos após “uma ideia simples” anunciam a explicitação dessa ideia.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "anunciam",
    cognitivo: {
      motivo: "Cobrar a função dos dois-pontos como anunciador de conteúdo.",
      palavraCritica: "explicitação",
    },
    comentario: {
      resolucao: "CERTO. A oração anterior anuncia que existe 'uma ideia simples' sem dizer qual; o que vem depois dos dois-pontos é justamente o enunciado dessa ideia — que os elementos não existem isoladamente e que a ligação entre eles revela a estrutura do grupo. É o uso explicativo do sinal.",
      fundamento: "Pontuação — dois-pontos de valor explicativo.",
      macete: "Quando a frase promete algo ('uma ideia', 'um problema', 'uma regra'), os dois-pontos entregam.",
      erroComum: "Restringir os dois-pontos a citação e enumeração.",
      comoBancaPensa: "Item curto e verdadeiro sobre pontuação, no formato que a banca usa para abrir blocos."
    }
  },
  {
    ...BASE91,
    id: "PT-249", assunto: "Coesão textual", subassunto: "Referente de pronome demonstrativo",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: análise de vínculos)",
    dificuldade: 2, tempoIdealSeg: 55, textoApoio: TXT91_G,
    enunciado: "Em “Representada em grafo, essa ligação deixa de ser intuição do investigador”, a expressão “essa ligação” retoma a ligação entre pessoas, telefones, veículos e endereços, mencionada no período anterior.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "essa ligação",
    cognitivo: {
      motivo: "Cobrar o rastreio de anáfora por sintagma demonstrativo.",
      palavraCritica: "essa",
    },
    comentario: {
      resolucao: "CERTO. O período anterior estabelece que 'é a ligação entre eles que revela a estrutura', sendo 'eles' os quatro tipos de elemento listados. 'Essa ligação' retoma exatamente esse referente, e o demonstrativo 'essa' marca a anáfora — remete ao que já foi dito, não ao que virá.",
      fundamento: "Coesão — anáfora por sintagma demonstrativo.",
      macete: "'Esse/essa' olha para trás; 'este/esta' costuma olhar para a frente. O demonstrativo indica a direção.",
      erroComum: "Restringir o referente a apenas um dos elementos listados.",
      comoBancaPensa: "Anáfora correta que exige recuperar uma enumeração inteira, e não um substantivo isolado."
    }
  },
  {
    ...BASE91,
    id: "PT-250", assunto: "Coesão textual", subassunto: "Valor do conectivo 'daí'",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: análise de vínculos)",
    dificuldade: 3, tempoIdealSeg: 80, textoApoio: TXT91_G,
    enunciado: "No último parágrafo, a expressão “Daí” estabelece relação de oposição entre a regra enunciada em seguida e as limitações do método apresentadas no parágrafo anterior.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "oposição",
    cognitivo: {
      motivo: "Testar a classificação do valor semântico de um conectivo conclusivo.",
      palavraCritica: "Daí",
    },
    comentario: {
      resolucao: "ERRADO. 'Daí' é conclusivo, equivalente a 'por isso' ou 'em razão disso': a regra do último parágrafo DECORRE das limitações expostas antes, não se opõe a elas. Justamente porque um vínculo frequente pode não ser relevante é que se enuncia a regra de que o desenho não substitui a prova.",
      fundamento: "Coesão — valor semântico do conectivo conclusivo.",
      macete: "Troque o conectivo por 'por isso' e veja se a frase continua fazendo sentido. Se continuar, é conclusivo.",
      erroComum: "Ler 'daí' como marcador de contraste por iniciar parágrafo depois de uma ressalva.",
      comoBancaPensa: "Explora um conectivo de uso corrente cuja classificação formal raramente é revisada."
    }
  },
  {
    ...BASE91,
    id: "PT-251", assunto: "Sintaxe", subassunto: "Função sintática de oração reduzida de particípio",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: análise de vínculos)",
    dificuldade: 3, tempoIdealSeg: 80, textoApoio: TXT91_G,
    enunciado: "Em “Representada em grafo, essa ligação deixa de ser intuição do investigador”, a oração reduzida inicial exprime condição.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Representada em grafo",
    cognitivo: {
      motivo: "Cobrar o valor semântico de reduzida de particípio anteposta.",
      palavraCritica: "Representada",
    },
    comentario: {
      resolucao: "CERTO. A reduzida equivale a 'Se for representada em grafo' ou 'Quando representada em grafo': é a representação gráfica que faz a ligação deixar de ser intuição. O valor é condicional-temporal, e a leitura condicional é a que o argumento do texto sustenta, já que o parágrafo trata do que a representação acrescenta ao método.",
      fundamento: "Sintaxe — oração subordinada adverbial reduzida de particípio; valor condicional.",
      macete: "Reduzida de particípio anteposta: teste 'se', 'quando' e 'depois que'. A que fizer sentido no argumento é o valor.",
      erroComum: "Classificar como causal, valor que a reduzida também admite mas que aqui inverte a lógica do parágrafo.",
      comoBancaPensa: "Pergunta pelo valor de uma oração DO TEXTO, no formato dos itens de sintaxe da prova real."
    }
  },
  {
    ...BASE91,
    id: "PT-252", assunto: "Compreensão e reescritura", subassunto: "Atribuição de finalidade ao método",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: análise de vínculos)",
    dificuldade: 3, tempoIdealSeg: 90, textoApoio: TXT91_G,
    enunciado: "Depreende-se do texto que a principal utilidade da análise de vínculos consiste em confirmar a hipótese formulada pelo investigador no início dos trabalhos, conferindo-lhe respaldo científico por meio de representação gráfica que torna evidente aquilo que a experiência prática já indicava.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "confirmar a hipótese",
    cognitivo: {
      motivo: "Testar a conversão de uma advertência do texto em finalidade do método.",
      palavraCritica: "respaldo científico",
    },
    comentario: {
      resolucao: "ERRADO. O texto apresenta exatamente isso como o RISCO a evitar, não como utilidade: sem qualificar a aresta, 'o grafo apenas confirma, com aparência científica, a hipótese com que se começou'. A utilidade declarada é outra — organizar indícios, sugerir onde procurar e mostrar o que ainda falta.",
      fundamento: "Compreensão de texto — advertência × finalidade.",
      macete: "Quando o item descreve algo que o texto apresenta com ironia ou ressalva ('aparência científica'), desconfie: costuma ser o defeito, não a virtude.",
      erroComum: "Reconhecer a frase do texto e não notar que ela vem precedida de 'do contrário'.",
      comoBancaPensa: "Reaproveita quase literalmente uma frase do texto, suprimindo o conectivo que a marca como hipótese negativa."
    }
  },
  {
    ...BASE91,
    id: "PT-253", assunto: "Compreensão e reescritura", subassunto: "Substituição de verbo com manutenção de regência",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: análise de vínculos)",
    dificuldade: 2, tempoIdealSeg: 55, textoApoio: TXT91_G,
    enunciado: "Sem prejuízo da correção gramatical e do sentido, “O método tem limites que convém enunciar” poderia ser reescrito como O método tem limites que convém explicitar.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "enunciar / explicitar",
    cognitivo: {
      motivo: "Cobrar sinonímia contextual entre verbos de mesma regência.",
      palavraCritica: "enunciar",
    },
    comentario: {
      resolucao: "CERTO. No contexto, 'enunciar' significa declarar, tornar expresso — sentido que 'explicitar' recobre integralmente. Ambos são transitivos diretos e mantêm a mesma relação com 'limites', preservando a estrutura da oração e a correção do período.",
      fundamento: "Semântica e regência — sinonímia contextual entre verbos transitivos diretos.",
      macete: "Antes de aprovar troca de verbo, confira dois pontos: sentido no contexto e regência. Se os dois batem, a troca vale.",
      erroComum: "Recusar por associar 'enunciar' apenas ao ato de formular teoria ou lei.",
      comoBancaPensa: "Substituição legítima que exige avaliar sentido e regência juntos."
    }
  },
  {
    ...BASE91,
    id: "PT-254", assunto: "Compreensão e reescritura", subassunto: "Exemplo do endereço compartilhado",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: análise de vínculos)",
    dificuldade: 2, tempoIdealSeg: 50, textoApoio: TXT91_G,
    enunciado: "O exemplo das duas pessoas que moram na mesma rua serve, no texto, para mostrar que a frequência de um vínculo não garante sua relevância.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não garante",
    cognitivo: {
      motivo: "Cobrar a função argumentativa do exemplo.",
      palavraCritica: "exemplo",
    },
    comentario: {
      resolucao: "CERTO. O exemplo é introduzido logo após a afirmação de que 'um vínculo frequente não é necessariamente um vínculo relevante' e a ilustra: compartilhar endereço é vínculo verificável e frequente, mas pode não ter propósito comum. A função do exemplo é sustentar exatamente essa distinção.",
      fundamento: "Compreensão de texto — função argumentativa do exemplo.",
      macete: "Exemplo colado a uma afirmação existe para prová-la. Leia a frase imediatamente anterior.",
      erroComum: "Ler o exemplo como observação isolada sobre vizinhança.",
      comoBancaPensa: "Item curto e correto sobre a articulação entre tese e exemplo."
    }
  },
  {
    ...BASE91,
    id: "PT-255", assunto: "Compreensão e reescritura", subassunto: "Extrapolação sobre a suficiência do grafo",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: análise de vínculos)",
    dificuldade: 3, tempoIdealSeg: 90, textoApoio: TXT91_G,
    enunciado: "Infere-se do texto que a representação em grafo, quando bem executada, é capaz de revelar integralmente a estrutura do grupo investigado, incluindo os vínculos ainda não documentados, razão pela qual o autor afirma que ela mostra também o que ainda falta ao conjunto de indícios reunidos.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "integralmente",
    cognitivo: {
      motivo: "Testar a ampliação de 'mostrar o que falta' para 'revelar o que falta'.",
      palavraCritica: "incluindo os vínculos ainda não documentados",
    },
    comentario: {
      resolucao: "ERRADO. Mostrar o que ainda falta é apontar a LACUNA — indicar que há informação a buscar —, não revelar o conteúdo dessa informação. Um grafo bem feito evidencia onde os dados são insuficientes; ele não documenta vínculos que ninguém levantou. A extrapolação está em transformar diagnóstico de ausência em revelação de conteúdo.",
      fundamento: "Compreensão de texto — distinção entre apontar lacuna e suprir lacuna.",
      macete: "'Mostra o que falta' é diferente de 'mostra o que está faltando'. Um indica o buraco; o outro preencheria.",
      erroComum: "Aceitar por o item terminar citando corretamente a frase final do texto.",
      comoBancaPensa: "Ancora a extrapolação numa citação fiel, colocada no fim para dar a impressão de que o texto autoriza tudo o que veio antes."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE91);
