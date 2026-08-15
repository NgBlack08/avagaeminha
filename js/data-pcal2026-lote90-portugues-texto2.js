/* =====================================================================
   QUESTLAB — Lote 90: LÍNGUA PORTUGUESA ancorada em texto (2ª leva)

   POR QUE ESTE LOTE EXISTE

   Língua Portuguesa é a maior disciplina do edital PC-AL 2026 (peso de
   estudo 12,7) e foi a maior da prova de 2021: 20 dos 120 itens. É também
   a que mais destoa do formato real no nosso banco. Medido antes deste
   lote, sobre os 172 itens autorais de Português:

                                    prova real 2021      nosso banco
     ancorados em texto-base           20 de 20 (100%)        31,4%
     compreensão + reescritura         12 de 20  (60%)        ~12%
     análise da oração isolada          2 de 20  (10%)        ~40%
     itens acima de 300 caracteres       frequentes             ZERO

   Ou seja: treinávamos classificar oração no vácuo enquanto a banca cobra
   gramática A SERVIÇO DO TEXTO. Até os itens de sintaxe da prova real
   perguntam pela função de um termo CITADO do texto, não de uma oração
   solta inventada para o exercício.

   Este é o segundo lote guiado por medição de FORMATO (o primeiro foi o
   77). A distribuição dos 32 itens segue a proporção da prova real:

     compreensão e reescritura ...... 20  (62,5%)   real: 60%
     pontuação .......................  5  (15,6%)   real: 15%
     coesão / referenciação ..........  3   (9,4%)   real: 10%
     sintaxe sobre o texto ...........  3   (9,4%)   real: 10%
     tipologia .......................  1   (3,1%)   real:  5%

   Os 20 do primeiro grupo dividem-se, por subassunto, em 11 de
   compreensão/inferência e 9 de reescritura/substituição — a mesma
   proporção dos 7 e 5 itens da prova de 2021. O rótulo "Compreensão e
   reescritura" é o que o banco já usava para os dois.

   SOBRE O RÓTULO DOS ITENS DE SINTAXE. Eles vão como "Sintaxe", que é um
   dos assuntos que o validador conta como análise de oração isolada —
   embora aqui perguntem pela função de um termo DO TEXTO. Manter o rótulo
   é decisão consciente: renomeá-lo para escapar da métrica melhoraria o
   número sem melhorar o banco, que é exatamente o tipo de maquiagem que
   este projeto passou as últimas versões desfazendo. O lote 77 fez a
   mesma escolha.

   COMPRIMENTO E GABARITO — o segundo defeito que este lote ataca

   O validador mede um "chutador cego" que decide só pela forma, sem ler o
   conteúdo. Nos itens autorais ele rende +7,5pp sobre o chute puro,
   contra −1,1pp medidos em prova real. Dois gradientes nossos alimentam
   isso, e os dois foram medidos:

     termo absoluto → ERRADO ....... 61,4% (contra 45,1% sem o termo)
     comprimento → CERTO ........... 44,5% → 44,0% → 58,2% → 67,4%
                                     (0-120) (121-200) (201-300) (301+)

   Na prova real nenhum dos dois entrega gabarito. Por isso este lote
   inverte deliberadamente os dois gradientes:

     - os itens CERTOS tendem ao CURTO (afirmação categórica seca, que é
       onde a CEBRASPE concentra os itens de até 120 caracteres);
     - os itens ERRADOS tendem ao LONGO, com a falsidade enterrada no meio
       de uma justificativa plausível;
     - há itens CERTOS contendo termo absoluto, porque o texto realmente
       autoriza a afirmação categórica.

   Isso não é enfeite estatístico: é o que impede o aluno de acertar aqui
   por um reflexo que não pontua na prova.

   Gabarito: 17 CERTO / 15 ERRADO. Medido depois de pronto, e não
   planejado: o comprimento médio ficou em 132 caracteres nos CERTOS
   contra 315 nos ERRADOS — inversão deliberada do gradiente do banco,
   que estava em 211 contra 193. Dez itens passam de 300 caracteres, numa
   disciplina que até aqui não tinha NENHUM.

   OS TRÊS TEXTOS-BASE SÃO AUTORAIS, escritos para este banco — nenhum
   trecho de terceiro foi reproduzido. Os temas seguem o perfil da prova
   real de 2021, que usou um texto institucional de segurança pública, um
   texto jornalístico regional e um texto de cultura alagoana.
   ===================================================================== */

const CARGOS90 = ["Escrivão", "Agente", "Especialista em Saúde — Fisioterapia"];
const BASE90 = {
  disciplina: "Língua Portuguesa", concurso: "PCAL", cargo: CARGOS90, ano: 2026,
  tipo: "CE", probReaparecer: 0.82,
};

/* ---------------------------------------------------------------------
   TEXTO A — formação continuada do policial (dissertativo-argumentativo)
   --------------------------------------------------------------------- */
const TXT90_A =
"A formação do policial não termina na academia. Durante muito tempo, prevaleceu a ideia de que o curso de ingresso bastava para toda a carreira, como se as ruas repetissem indefinidamente os mesmos problemas. A realidade desmentiu essa suposição: mudam as leis, mudam as tecnologias de que se valem os criminosos e mudam, sobretudo, as expectativas da sociedade quanto ao modo de agir de quem porta uma arma em nome do Estado.\n\n" +
"Capacitação continuada, por isso, deixou de ser adorno curricular para tornar-se condição de eficiência. Um agente que desconhece a cadeia de custódia compromete a prova; um escrivão que ignora a redação técnica compromete o inquérito. Em ambos os casos, o prejuízo não recai apenas sobre o servidor: alcança a investigação inteira e, ao fim, a vítima que esperava resposta.\n\n" +
"Há, contudo, um obstáculo menos discutido — o tempo. Exigir que o policial estude sem lhe assegurar carga horária para isso é transferir ao indivíduo um dever que é da instituição.";

/* ---------------------------------------------------------------------
   TEXTO B — memória oral do sertão alagoano (expositivo com traço lírico)
   --------------------------------------------------------------------- */
const TXT90_B =
"No sertão de Alagoas, a memória não se guarda em arquivos: guarda-se na boca de quem conta. O repentista que improvisa diante da feira, a rezadeira que benze com palavras herdadas da avó, o mestre de banda que afina instrumentos comprados a prestação — todos exercem, sem cerimônia, o ofício de lembrar.\n\n" +
"Essa memória não é passiva. Cada vez que uma história é recontada, ela se ajusta ao ouvinte, ao tempo e à circunstância, e por isso nenhuma versão coincide inteiramente com a anterior. O que poderia parecer perda é, na verdade, condição de sobrevivência da narrativa: o que não se transforma não se transmite.\n\n" +
"Registrar essas manifestações é tarefa delicada. Fixá-las no papel ajuda a protegê-las do esquecimento, mas corre o risco de imobilizar aquilo que só existe em movimento.";

/* ---------------------------------------------------------------------
   TEXTO C — dados abertos e controle social (expositivo institucional)
   --------------------------------------------------------------------- */
const TXT90_C =
"Publicar estatísticas de criminalidade não é o mesmo que prestar contas. Um painel eletrônico que informa quantos roubos ocorreram em determinado bairro cumpre função útil, mas limitada: diz o que aconteceu, não por que aconteceu nem o que se fez a respeito.\n\n" +
"A transparência que interessa ao controle social é outra. Ela exige que o dado venha acompanhado do critério que o produziu — como se classifica uma ocorrência, em que momento ela entra na estatística, quem revisa o registro. Sem esses metadados, o número vira argumento de autoridade, e não instrumento de verificação.\n\n" +
"Nada disso dispensa cautela. Divulgar dados granulares demais pode expor vítimas e comprometer investigações em curso, razão pela qual a abertura precisa ser desenhada, e não simplesmente decretada.";

const QUESTOES_PCAL_LOTE90 = [

  /* ===================== TEXTO A — 11 itens (6 C / 5 E) ============== */

  {
    ...BASE90,
    id: "PT-176", assunto: "Compreensão e reescritura", subassunto: "Inferência — tese central",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: formação continuada do policial)",
    dificuldade: 1, tempoIdealSeg: 40, textoApoio: TXT90_A,
    enunciado: "Depreende-se do texto que o curso de ingresso, isoladamente, não prepara o policial para toda a carreira.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "isoladamente",
    cognitivo: {
      motivo: "Aferir a leitura da tese central, enunciada já na primeira linha e retomada ao longo do texto.",
      palavraCritica: "isoladamente",
    },
    comentario: {
      resolucao: "CERTO. O texto abre afirmando que 'a formação do policial não termina na academia' e, em seguida, chama de suposição desmentida pela realidade a ideia de que 'o curso de ingresso bastava para toda a carreira'. O item reformula essa tese sem ampliá-la: diz que o curso não basta SOZINHO, não que seja inútil.",
      fundamento: "Compreensão de texto — identificação da tese.",
      macete: "Tese costuma estar na primeira ou na última linha do parágrafo de abertura. Leia essas duas antes de tudo.",
      erroComum: "Rejeitar o item por achar que ele desvaloriza a academia, quando apenas nega a suficiência dela.",
      comoBancaPensa: "Item curto e correto, colocado no começo do bloco para o candidato que só desconfia de afirmação categórica marcar ERRADO por reflexo."
    }
  },
  {
    ...BASE90,
    id: "PT-177", assunto: "Compreensão e reescritura", subassunto: "Extrapolação — hierarquia entre causas",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: formação continuada do policial)",
    dificuldade: 3, tempoIdealSeg: 95, textoApoio: TXT90_A,
    enunciado: "Conclui-se do primeiro parágrafo que as mudanças na legislação, nas tecnologias criminosas e nas expectativas sociais ocorrem de maneira simultânea e com idêntica intensidade, razão pela qual o autor as enumera em série, atribuindo a cada uma o mesmo peso na defasagem da formação policial e sustentando que nenhuma delas, tomada isoladamente, bastaria para justificar a capacitação continuada.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "idêntica intensidade",
    cognitivo: {
      motivo: "Testar se o candidato percebe que o advérbio 'sobretudo' quebra a suposta equivalência entre os itens da enumeração.",
      palavraCritica: "sobretudo",
    },
    comentario: {
      resolucao: "ERRADO. A enumeração existe, mas não é equivalente: o autor escreve 'e mudam, SOBRETUDO, as expectativas da sociedade', e 'sobretudo' marca justamente hierarquia, destacando o terceiro elemento sobre os dois primeiros. Além disso, o texto em nenhum momento afirma que cada causa, isolada, seria insuficiente para justificar a capacitação — essa conclusão é acrescentada pelo item.",
      fundamento: "Compreensão de texto — valor semântico do advérbio de realce; extrapolação.",
      macete: "Numa enumeração, procure o advérbio: 'sobretudo', 'principalmente', 'em especial' desfazem a ideia de lista de iguais.",
      erroComum: "Validar o item pela parte verdadeira (a enumeração existe) e não julgar a conclusão emendada.",
      comoBancaPensa: "Enunciado longo, com uma descrição fiel na abertura e duas afirmações falsas diluídas no meio — o candidato cansa antes de chegar nelas."
    }
  },
  {
    ...BASE90,
    id: "PT-178", assunto: "Compreensão e reescritura", subassunto: "Substituição com manutenção de sentido",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: formação continuada do policial)",
    dificuldade: 2, tempoIdealSeg: 60, textoApoio: TXT90_A,
    enunciado: "Sem prejuízo da correção gramatical e do sentido original, o trecho “como se as ruas repetissem indefinidamente os mesmos problemas” poderia ser reescrito como como se as ruas repetissem, sem fim, os mesmos problemas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "indefinidamente / sem fim",
    cognitivo: {
      motivo: "Cobrar equivalência entre advérbio em -mente e locução adverbial correspondente.",
      palavraCritica: "indefinidamente",
    },
    comentario: {
      resolucao: "CERTO. 'Indefinidamente' e a locução 'sem fim' são equivalentes no contexto: ambas indicam ausência de termo. O deslocamento da locução para entre vírgulas é permitido e não altera a regência nem a estrutura do período, que permanece uma oração subordinada adverbial comparativa introduzida por 'como se', com verbo no pretérito imperfeito do subjuntivo.",
      fundamento: "Semântica e sintaxe — equivalência entre advérbio e locução adverbial.",
      macete: "Advérbio em -mente quase sempre tem locução equivalente. O que muda é o ritmo da frase, não o sentido.",
      erroComum: "Recusar a troca por achar que a vírgula acrescenta pausa e, com ela, sentido novo.",
      comoBancaPensa: "Reescritura legítima, para punir quem marca ERRADO em toda proposta de substituição."
    }
  },
  {
    ...BASE90,
    id: "PT-179", assunto: "Compreensão e reescritura", subassunto: "Reescritura que inverte o sentido",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: formação continuada do policial)",
    dificuldade: 3, tempoIdealSeg: 90, textoApoio: TXT90_A,
    enunciado: "Mantendo-se a correção gramatical e o sentido do texto, o trecho “o prejuízo não recai apenas sobre o servidor: alcança a investigação inteira” poderia ser reescrito como o prejuízo não recai sobre o servidor, mas apenas sobre a investigação inteira, uma vez que a substituição dos dois-pontos pela conjunção adversativa explicita a oposição que a pontuação apenas sugeria.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "não recai apenas / não recai",
    cognitivo: {
      motivo: "Testar o deslocamento do advérbio 'apenas', que muda o escopo da negação.",
      palavraCritica: "apenas",
    },
    comentario: {
      resolucao: "ERRADO. No original, 'apenas' está dentro do escopo da negação: 'não recai APENAS sobre o servidor' significa que recai sobre ele E sobre mais alguém. Na reescritura, 'apenas' migra para o segundo termo e a negação passa a excluir o servidor — 'não recai sobre o servidor, mas apenas sobre a investigação'. O sentido se inverte: quem estava incluído passa a estar excluído.",
      fundamento: "Semântica — escopo da negação e posição do advérbio de exclusão.",
      macete: "Mexer em 'apenas', 'só' e 'somente' dentro de frase negativa quase sempre troca quem está dentro por quem está fora. Refaça a conta em voz alta.",
      erroComum: "Aceitar a troca por ver que os dois-pontos realmente admitem substituição por conectivo — o que é verdade, mas não neste arranjo.",
      comoBancaPensa: "Oferece uma justificativa gramatical correta (dois-pontos × adversativa) para encobrir a alteração de sentido, que é o que de fato se cobra."
    }
  },
  {
    ...BASE90,
    id: "PT-180", assunto: "Pontuação", subassunto: "Ponto e vírgula entre coordenadas paralelas",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: formação continuada do policial)",
    dificuldade: 2, tempoIdealSeg: 45, textoApoio: TXT90_A,
    enunciado: "O ponto e vírgula empregado após “compromete a prova” separa orações coordenadas de estrutura paralela, sendo adequado ao contexto.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "estrutura paralela",
    cognitivo: {
      motivo: "Cobrar o uso do ponto e vírgula como separador de coordenadas simétricas.",
      palavraCritica: "coordenadas",
    },
    comentario: {
      resolucao: "CERTO. As duas orações têm desenho idêntico — sujeito com oração adjetiva restritiva ('Um agente que desconhece a cadeia de custódia' / 'um escrivão que ignora a redação técnica') seguido de verbo e objeto ('compromete a prova' / 'compromete o inquérito'). O ponto e vírgula marca essa simetria e a fronteira entre elas com pausa mais forte que a vírgula, uso previsto para coordenadas extensas ou que já contenham pontuação interna.",
      fundamento: "Pontuação — ponto e vírgula entre orações coordenadas.",
      macete: "Duas frases com o mesmo esqueleto, lado a lado? Ponto e vírgula cabe.",
      erroComum: "Supor que ponto e vírgula só se usa em enumeração de itens.",
      comoBancaPensa: "Item curto e verdadeiro sobre pontuação, área em que o candidato costuma desconfiar de tudo."
    }
  },
  {
    ...BASE90,
    id: "PT-181", assunto: "Coesão textual", subassunto: "Referenciação de pronome oblíquo e de expressão anafórica",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: formação continuada do policial)",
    dificuldade: 3, tempoIdealSeg: 95, textoApoio: TXT90_A,
    enunciado: "No trecho “Exigir que o policial estude sem lhe assegurar carga horária para isso é transferir ao indivíduo um dever que é da instituição”, o pronome “lhe” e a expressão “para isso” remetem, respectivamente, à instituição e ao dever institucional, de modo que a supressão de ambos os termos não acarretaria prejuízo à progressão referencial do período.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "remetem, respectivamente, à instituição",
    cognitivo: {
      motivo: "Verificar se o candidato rastreia corretamente dois elementos anafóricos no mesmo período.",
      palavraCritica: "lhe",
    },
    comentario: {
      resolucao: "ERRADO, em duas frentes. Primeira: 'lhe' retoma O POLICIAL, não a instituição — quem deixa de receber a carga horária é ele; e 'para isso' retoma ESTUDAR, não o dever institucional. Segunda: suprimir os dois termos deixaria 'sem assegurar carga horária', sem indicação de a quem nem para quê, o que rompe justamente a progressão referencial que o item diz preservada.",
      fundamento: "Coesão — anáfora pronominal e anáfora por expressão adverbial.",
      macete: "Pronome oblíquo procura o beneficiário ou o prejudicado da ação, quase sempre pessoa. 'Isso' procura o que veio antes como processo.",
      erroComum: "Puxar 'lhe' para o substantivo mais próximo ('instituição') em vez de para o referente semanticamente compatível.",
      comoBancaPensa: "Empilha dois referentes num período só e fecha com uma conclusão sobre supressão, que exige refazer a leitura inteira."
    }
  },
  {
    ...BASE90,
    id: "PT-182", assunto: "Sintaxe", subassunto: "Sujeito posposto ao verbo",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: formação continuada do policial)",
    dificuldade: 2, tempoIdealSeg: 40, textoApoio: TXT90_A,
    enunciado: "Em “mudam as leis”, o termo “as leis” exerce a função de sujeito.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "as leis",
    cognitivo: {
      motivo: "Cobrar o reconhecimento de sujeito posposto, arranjo frequente na prosa institucional.",
      palavraCritica: "mudam",
    },
    comentario: {
      resolucao: "CERTO. 'Mudar' está empregado como verbo intransitivo — as leis mudam, sofrem alteração. 'As leis' é quem pratica (ou sofre) o processo verbal e determina a flexão de número do verbo, que vai ao plural: é o sujeito, apenas posposto. A ordem inversa é escolha estilística, não muda a função sintática.",
      fundamento: "Sintaxe — sujeito posposto; concordância verbal.",
      macete: "Pergunte 'quem muda?'. Se o verbo concorda com a resposta, é sujeito, esteja ele antes ou depois.",
      erroComum: "Chamar 'as leis' de objeto direto por vir depois do verbo.",
      comoBancaPensa: "Item curto de sintaxe sobre trecho citado — formato exato dos itens 16 e 20 da prova de 2021."
    }
  },
  {
    ...BASE90,
    id: "PT-183", assunto: "Compreensão e reescritura", subassunto: "Inversão da tese do parágrafo final",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: formação continuada do policial)",
    dificuldade: 3, tempoIdealSeg: 90, textoApoio: TXT90_A,
    enunciado: "O autor sustenta, no último parágrafo, que a principal barreira à capacitação continuada é a falta de interesse dos próprios servidores, os quais, segundo o texto, já dispõem de carga horária suficiente para o estudo mas optam por não utilizá-la, cabendo à instituição, nesse cenário, apenas fiscalizar o aproveitamento desse tempo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "falta de interesse dos próprios servidores",
    cognitivo: {
      motivo: "Testar se o candidato percebe a inversão completa da atribuição de responsabilidade.",
      palavraCritica: "fiscalizar",
    },
    comentario: {
      resolucao: "ERRADO. O texto diz o contrário em todos os pontos. O obstáculo apontado é O TEMPO, não a falta de interesse; o servidor NÃO dispõe de carga horária, e é justamente essa ausência que o autor critica; e a conclusão é que exigir estudo sem assegurar tempo 'é transferir ao indivíduo um dever que é da instituição' — ou seja, o dever é institucional, e não se reduz a fiscalizar.",
      fundamento: "Compreensão de texto — atribuição de responsabilidade.",
      macete: "Quando o item transfere a culpa de quem o texto acusa para quem o texto defende, é inversão. Confira o sujeito da última frase.",
      erroComum: "Aceitar por reconhecer termos do texto ('carga horária', 'instituição') sem conferir o que se afirma sobre eles.",
      comoBancaPensa: "Reaproveita o vocabulário do parágrafo e inverte as relações — o candidato reconhece as palavras e supõe que reconheceu a ideia."
    }
  },
  {
    ...BASE90,
    id: "PT-184", assunto: "Compreensão e reescritura", subassunto: "Substituição de locução verbal",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: formação continuada do policial)",
    dificuldade: 2, tempoIdealSeg: 55, textoApoio: TXT90_A,
    enunciado: "Sem prejuízo da correção gramatical e do sentido, “deixou de ser adorno curricular para tornar-se condição de eficiência” poderia ser reescrito como deixou de ser adorno curricular e passou a ser condição de eficiência.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "para tornar-se / e passou a ser",
    cognitivo: {
      motivo: "Cobrar equivalência entre oração reduzida de infinitivo com valor de finalidade-consecução e coordenada aditiva.",
      palavraCritica: "tornar-se",
    },
    comentario: {
      resolucao: "CERTO. No original, 'para tornar-se' não exprime finalidade deliberada, e sim a transformação que se seguiu ao abandono da condição anterior — leitura consecutiva. 'E passou a ser' explicita essa mesma sucessão sem alterar os termos comparados nem a correção do período.",
      fundamento: "Sintaxe do período composto — oração reduzida de infinitivo com valor consecutivo.",
      macete: "'Deixou de X para Y' equivale a 'deixou de X e passou a Y' quando não há intenção envolvida, só sucessão.",
      erroComum: "Ler todo 'para + infinitivo' como finalidade e recusar a equivalência.",
      comoBancaPensa: "Reescritura correta cujo teste exige distinguir finalidade de consecução — distinção que quase ninguém revisa."
    }
  },
  {
    ...BASE90,
    id: "PT-185", assunto: "Pontuação", subassunto: "Travessão e dois-pontos como introdutores de aposto",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: formação continuada do policial)",
    dificuldade: 3, tempoIdealSeg: 85, textoApoio: TXT90_A,
    enunciado: "O travessão empregado em “um obstáculo menos discutido — o tempo” poderia ser substituído por vírgula sem prejuízo da correção gramatical, mas não por dois-pontos, uma vez que os dois-pontos, nesse contexto, exigiriam que o termo seguinte constituísse enumeração de pelo menos dois elementos.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "pelo menos dois elementos",
    cognitivo: {
      motivo: "Testar uma exigência inventada sobre o emprego dos dois-pontos.",
      palavraCritica: "exigiriam",
    },
    comentario: {
      resolucao: "ERRADO. A primeira metade está certa: a vírgula substitui o travessão nesse aposto especificativo. A segunda inventa uma regra — os dois-pontos introduzem enumeração, mas também esclarecimento, explicação ou aposto de um único termo. 'Há, contudo, um obstáculo menos discutido: o tempo' é construção perfeitamente correta.",
      fundamento: "Pontuação — travessão, vírgula e dois-pontos na introdução de aposto.",
      macete: "Dois-pontos anunciam o que vem depois. Não contam quantos itens virão.",
      erroComum: "Aceitar a exigência por ser apresentada com aparência de regra técnica.",
      comoBancaPensa: "Ancora o item numa afirmação verdadeira (a vírgula serve) para dar credibilidade à regra falsa que vem em seguida."
    }
  },
  {
    ...BASE90,
    id: "PT-186", assunto: "Tipologia textual", subassunto: "Predominância dissertativo-argumentativa",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: formação continuada do policial)",
    dificuldade: 1, tempoIdealSeg: 35, textoApoio: TXT90_A,
    enunciado: "Predomina no texto a tipologia dissertativo-argumentativa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dissertativo-argumentativa",
    cognitivo: {
      motivo: "Cobrar a identificação da tipologia predominante, item recorrente na abertura dos blocos de Português.",
      palavraCritica: "predomina",
    },
    comentario: {
      resolucao: "CERTO. O texto defende uma tese ('a formação não termina na academia'), sustenta-a com argumentos (mudança das leis, das tecnologias e das expectativas; exemplos do agente e do escrivão) e conclui com uma posição sobre a responsabilidade institucional. Não narra fatos em sequência temporal nem descreve objetos: argumenta.",
      fundamento: "Tipologia textual — dissertação argumentativa.",
      macete: "Tem tese + argumento + conclusão? É dissertativo-argumentativo, ainda que haja exemplos narrados de passagem.",
      erroComum: "Classificar como expositivo por causa do tom impessoal, ignorando que há defesa de ponto de vista.",
      comoBancaPensa: "Item de baixa dificuldade que serve de âncora ao bloco — errar aqui costuma indicar leitura apressada do conjunto."
    }
  },

  /* ===================== TEXTO B — 10 itens (5 C / 5 E) ============== */

  {
    ...BASE90,
    id: "PT-187", assunto: "Compreensão e reescritura", subassunto: "Inferência — paradoxo da transmissão",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: memória oral do sertão alagoano)",
    dificuldade: 2, tempoIdealSeg: 45, textoApoio: TXT90_B,
    enunciado: "Infere-se do texto que a transformação das narrativas é condição de sua permanência.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "condição de sua permanência",
    cognitivo: {
      motivo: "Aferir a leitura do paradoxo central do segundo parágrafo.",
      palavraCritica: "transformação",
    },
    comentario: {
      resolucao: "CERTO. O texto afirma que 'o que poderia parecer perda é, na verdade, condição de sobrevivência da narrativa' e fecha o raciocínio com 'o que não se transforma não se transmite'. O item reformula exatamente essa relação: mudar não é o oposto de permanecer, é o meio de permanecer.",
      fundamento: "Compreensão de texto — inferência a partir de relação causal explícita.",
      macete: "Quando o texto diz 'o que parece X é, na verdade, Y', a tese é Y. Sublinhe o 'na verdade'.",
      erroComum: "Ler a variação entre versões como defeito, contra o que o texto sustenta.",
      comoBancaPensa: "Item curto e correto sobre a tese menos intuitiva do texto."
    }
  },
  {
    ...BASE90,
    id: "PT-188", assunto: "Compreensão e reescritura", subassunto: "Extrapolação — recusa do registro escrito",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: memória oral do sertão alagoano)",
    dificuldade: 3, tempoIdealSeg: 90, textoApoio: TXT90_B,
    enunciado: "Depreende-se do último parágrafo que o autor recomenda que as manifestações da cultura oral não sejam registradas por escrito, uma vez que a fixação no papel, ao imobilizar aquilo que só existe em movimento, produz dano maior do que o esquecimento que pretende evitar, sendo preferível confiar a preservação exclusivamente à transmissão entre gerações.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "não sejam registradas",
    cognitivo: {
      motivo: "Testar se o candidato distingue ponderação de recomendação contrária.",
      palavraCritica: "exclusivamente",
    },
    comentario: {
      resolucao: "ERRADO. O texto pondera, não proíbe: registrar 'é tarefa delicada', 'ajuda a protegê-las do esquecimento, MAS corre o risco de imobilizar'. Reconhecer um risco não é recomendar que se abandone a prática, e em nenhum momento se afirma que o dano do registro supere o do esquecimento nem que a preservação deva ficar 'exclusivamente' com a transmissão oral.",
      fundamento: "Compreensão de texto — ponderação × recomendação; extrapolação por termo absoluto.",
      macete: "'Ajuda, mas corre o risco' é balanço. Item que transforma balanço em veredicto está ampliando.",
      erroComum: "Confundir o alerta final com uma tese contrária ao registro.",
      comoBancaPensa: "Enunciado longo que acumula três extrapolações encadeadas, cada uma plausível se lida sozinha."
    }
  },
  {
    ...BASE90,
    id: "PT-189", assunto: "Pontuação", subassunto: "Dois-pontos com valor explicativo",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: memória oral do sertão alagoano)",
    dificuldade: 2, tempoIdealSeg: 45, textoApoio: TXT90_B,
    enunciado: "Os dois-pontos em “a memória não se guarda em arquivos: guarda-se na boca de quem conta” introduzem esclarecimento do que se afirmou antes.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "esclarecimento",
    cognitivo: {
      motivo: "Cobrar o valor explicativo dos dois-pontos, distinto da enumeração.",
      palavraCritica: "introduzem",
    },
    comentario: {
      resolucao: "CERTO. A primeira oração nega um lugar de guarda ('não se guarda em arquivos') e a segunda, após os dois-pontos, informa o lugar efetivo ('guarda-se na boca de quem conta'). É a função explicativa clássica do sinal: o que vem depois esclarece o que veio antes.",
      fundamento: "Pontuação — dois-pontos de valor explicativo.",
      macete: "Dois-pontos = 'ou seja', 'isto é', 'a saber'. Se couber um desses no lugar, o uso está correto.",
      erroComum: "Restringir os dois-pontos à introdução de citação ou de lista.",
      comoBancaPensa: "Afirmação curta e verdadeira sobre pontuação, formato em que o candidato tende a marcar ERRADO por precaução."
    }
  },
  {
    ...BASE90,
    id: "PT-190", assunto: "Coesão textual", subassunto: "Referente do pronome anafórico",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: memória oral do sertão alagoano)",
    dificuldade: 3, tempoIdealSeg: 85, textoApoio: TXT90_B,
    enunciado: "No período “Cada vez que uma história é recontada, ela se ajusta ao ouvinte, ao tempo e à circunstância”, o pronome “ela” retoma o termo “memória”, empregado no início do parágrafo, e não o termo “história”, de modo que a substituição de “ela” por essa memória preservaria a referência original do período.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "retoma o termo “memória”",
    cognitivo: {
      motivo: "Verificar o rastreio do antecedente mais próximo e semanticamente compatível.",
      palavraCritica: "ela",
    },
    comentario: {
      resolucao: "ERRADO. 'Ela' retoma 'uma história', antecedente imediato e sujeito da oração anterior — é a história recontada que se ajusta ao ouvinte a cada narração. Substituir por 'essa memória' trocaria o referente e generalizaria indevidamente: o texto trata do ajuste de CADA narrativa, não da memória como um todo.",
      fundamento: "Coesão — anáfora pronominal e escolha do antecedente.",
      macete: "Pronome pessoal reto costuma retomar o sujeito mais próximo com que concorda em gênero e número. Teste substituindo.",
      erroComum: "Puxar o pronome para o tema do parágrafo em vez do antecedente sintático.",
      comoBancaPensa: "Oferece um antecedente plausível pelo assunto e outro correto pela sintaxe, e conta com o candidato escolher pelo assunto."
    }
  },
  {
    ...BASE90,
    id: "PT-191", assunto: "Sintaxe", subassunto: "Sujeito resumido por pronome indefinido",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: memória oral do sertão alagoano)",
    dificuldade: 2, tempoIdealSeg: 50, textoApoio: TXT90_B,
    enunciado: "No primeiro parágrafo, o pronome “todos” exerce a função de sujeito da forma verbal “exercem”.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "todos",
    cognitivo: {
      motivo: "Cobrar o reconhecimento do sujeito que resume uma enumeração anterior ao travessão.",
      palavraCritica: "todos",
    },
    comentario: {
      resolucao: "CERTO. A enumeração — o repentista, a rezadeira, o mestre de banda — é retomada e resumida por 'todos', que concorda com 'exercem' e responde à pergunta 'quem exerce o ofício de lembrar?'. É o sujeito do período, e o travessão marca justamente a retomada resumitiva.",
      fundamento: "Sintaxe — sujeito; aposto resumitivo.",
      macete: "Enumeração longa seguida de travessão e de 'todos/tudo/ninguém' = sujeito resumido. O verbo concorda com o resumo.",
      erroComum: "Apontar a enumeração como sujeito e 'todos' como aposto — é o inverso.",
      comoBancaPensa: "Item curto sobre função de termo citado, no formato dos itens de sintaxe da prova real."
    }
  },
  {
    ...BASE90,
    id: "PT-192", assunto: "Compreensão e reescritura", subassunto: "Substituição de oração reduzida",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: memória oral do sertão alagoano)",
    dificuldade: 2, tempoIdealSeg: 60, textoApoio: TXT90_B,
    enunciado: "Sem prejuízo da correção gramatical e do sentido, “Fixá-las no papel ajuda a protegê-las do esquecimento” poderia ser reescrito como Fixá-las no papel ajuda a que sejam protegidas do esquecimento.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "protegê-las / sejam protegidas",
    cognitivo: {
      motivo: "Cobrar equivalência entre oração reduzida de infinitivo e desenvolvida, com mudança de voz.",
      palavraCritica: "protegê-las",
    },
    comentario: {
      resolucao: "CERTO. A reduzida de infinitivo 'a protegê-las' desenvolve-se em 'a que sejam protegidas', com o objeto direto do original ('-las') passando a sujeito da voz passiva. A regência de 'ajudar a' é mantida, e o sentido permanece: em ambos os casos o registro escrito favorece a proteção das manifestações.",
      fundamento: "Sintaxe — desenvolvimento de oração reduzida; conversão de voz.",
      macete: "Reduzida vira desenvolvida trocando infinitivo por 'que + verbo flexionado'. Confira só se a regência sobrevive.",
      erroComum: "Recusar por estranhar a construção 'ajuda a que', que é correta e registrada.",
      comoBancaPensa: "Testa se o candidato sabe converter reduzida em desenvolvida sem se assustar com a forma resultante."
    }
  },
  {
    ...BASE90,
    id: "PT-193", assunto: "Compreensão e reescritura", subassunto: "Reescritura que altera a relação lógica",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: memória oral do sertão alagoano)",
    dificuldade: 3, tempoIdealSeg: 95, textoApoio: TXT90_B,
    enunciado: "Preservam-se a correção gramatical e o sentido original do texto ao se reescrever “Cada vez que uma história é recontada, ela se ajusta ao ouvinte, ao tempo e à circunstância, e por isso nenhuma versão coincide inteiramente com a anterior” como Ainda que uma história seja recontada, ela se ajusta ao ouvinte, ao tempo e à circunstância, embora nenhuma versão coincida inteiramente com a anterior.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "Ainda que / embora",
    cognitivo: {
      motivo: "Testar a substituição de relações temporal e consecutiva por concessivas.",
      palavraCritica: "por isso",
    },
    comentario: {
      resolucao: "ERRADO. O original encadeia tempo e consequência: 'cada vez que' é temporal-iterativo e 'por isso' introduz a consequência. A reescritura troca as duas por concessão — 'ainda que' e 'embora' —, o que inverte a lógica: o ajuste deixaria de causar a diferença entre versões e passaria a ocorrer apesar dela. A relação entre as ideias muda por inteiro.",
      fundamento: "Sintaxe do período composto — valor semântico dos conectivos.",
      macete: "Temporal e consecutivo somam; concessivo contraria. Trocar um pelo outro nunca preserva sentido.",
      erroComum: "Aprovar a reescritura por ela manter todas as palavras de conteúdo, mexendo só nos conectivos — que é exatamente onde mora o sentido.",
      comoBancaPensa: "Conserva o vocabulário inteiro e altera só as conjunções, apostando que o candidato compare palavras em vez de relações."
    }
  },
  {
    ...BASE90,
    id: "PT-194", assunto: "Pontuação", subassunto: "Travessão duplo em enumeração intercalada",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: memória oral do sertão alagoano)",
    dificuldade: 3, tempoIdealSeg: 85, textoApoio: TXT90_B,
    enunciado: "No primeiro parágrafo, o travessão que antecede “todos exercem” é obrigatório, pois a supressão desse sinal, sem qualquer outra alteração no período, tornaria a construção agramatical ao deixar a enumeração anterior sem função sintática definida no período.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "é obrigatório",
    cognitivo: {
      motivo: "Testar a afirmação de obrigatoriedade de um sinal cuja substituição por vírgula é possível.",
      palavraCritica: "obrigatório",
    },
    comentario: {
      resolucao: "ERRADO. O travessão marca a retomada resumitiva, mas não é obrigatório: a vírgula cumpre a mesma função ('O repentista..., a rezadeira..., o mestre de banda..., todos exercem...'). E a enumeração não ficaria 'sem função sintática': ela continua sendo o aposto enumerativo antecipado, resumido por 'todos'. Trocar o sinal altera o ritmo, não a gramaticalidade.",
      fundamento: "Pontuação — travessão e vírgula no aposto resumitivo.",
      macete: "Quase nenhum sinal de pontuação é insubstituível. Desconfie de 'obrigatório' em item de pontuação.",
      erroComum: "Aceitar a obrigatoriedade por reconhecer que o travessão ali está bem empregado — estar correto não é o mesmo que ser o único possível.",
      comoBancaPensa: "Parte de um uso legítimo do sinal e sobe o tom para 'obrigatório', que é o degrau falso."
    }
  },
  {
    ...BASE90,
    id: "PT-195", assunto: "Compreensão e reescritura", subassunto: "Sentido de expressão no contexto",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: memória oral do sertão alagoano)",
    dificuldade: 2, tempoIdealSeg: 50, textoApoio: TXT90_B,
    enunciado: "No texto, a expressão “sem cerimônia” indica que os sujeitos enumerados exercem o ofício de lembrar sem solenidade, de modo espontâneo e integrado à vida cotidiana.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sem cerimônia",
    cognitivo: {
      motivo: "Cobrar o sentido contextual de uma locução adverbial de modo.",
      palavraCritica: "cerimônia",
    },
    comentario: {
      resolucao: "CERTO. 'Sem cerimônia' opõe-se a ritual formal: os personagens não se apresentam como guardiões oficiais da memória, exercem esse papel na feira, no benzimento, no ensaio da banda — dentro da rotina. O contexto sustenta a leitura de espontaneidade e informalidade que o item propõe.",
      fundamento: "Semântica — sentido contextual de locução adverbial.",
      macete: "Locução ambígua se resolve pelo entorno. Leia a frase inteira antes de escolher a acepção.",
      erroComum: "Ler 'sem cerimônia' como falta de respeito, acepção possível em outros contextos mas incompatível com este.",
      comoBancaPensa: "Explora uma expressão com duas acepções correntes e deixa o contexto decidir qual vale."
    }
  },
  {
    ...BASE90,
    id: "PT-196", assunto: "Compreensão e reescritura", subassunto: "Atribuição indevida de causa",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: memória oral do sertão alagoano)",
    dificuldade: 3, tempoIdealSeg: 90, textoApoio: TXT90_B,
    enunciado: "Segundo o texto, a impossibilidade de que duas versões de uma mesma história coincidam inteiramente decorre da falha de memória dos narradores, limitação que o autor apresenta como inevitável e que justifica, por si só, a urgência do registro escrito dessas manifestações antes que os detalhes originais se percam de vez.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "falha de memória dos narradores",
    cognitivo: {
      motivo: "Testar a substituição da causa apontada pelo texto por outra, de senso comum.",
      palavraCritica: "decorre",
    },
    comentario: {
      resolucao: "ERRADO. A causa que o texto apresenta é o AJUSTE ao ouvinte, ao tempo e à circunstância — um movimento deliberado de adaptação, não uma falha. Tanto assim que o autor chama isso de 'condição de sobrevivência da narrativa'. Falar em falha de memória inverte o juízo do texto, e a urgência do registro escrito não é defendida: o último parágrafo justamente pondera os riscos dele.",
      fundamento: "Compreensão de texto — identificação da causa; extrapolação.",
      macete: "Quando o item explica um fenômeno do texto por uma causa que o texto não cita, confira se ele não trocou elogio por defeito.",
      erroComum: "Aceitar 'falha de memória' por ser a explicação intuitiva para versões divergentes.",
      comoBancaPensa: "Substitui a causa do texto pela causa que o candidato traz de fora e emenda uma conclusão que o texto contradiz."
    }
  },

  /* ===================== TEXTO C — 11 itens (5 C / 6 E) ============== */

  {
    ...BASE90,
    id: "PT-197", assunto: "Compreensão e reescritura", subassunto: "Utilidade × suficiência do dado divulgado",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: dados abertos e controle social)",
    /* REFORMULADO a partir de um feedback: o enunciado anterior era
       "divulgar estatísticas não equivale, por si só, a prestar contas",
       quase transcrição da primeira linha do texto. Dava para acertar por
       casamento de palavras, sem ler — o leitor registrou que a questão
       "ficou sem sentido", e tinha razão: ela não media compreensão
       nenhuma. A versão atual exige cruzar a tese do primeiro parágrafo
       com a ressalva "cumpre função útil, mas limitada", e o par
       útil/insuficiente não aparece no texto: o candidato precisa
       derivá-lo. */
    dificuldade: 2, tempoIdealSeg: 50, textoApoio: TXT90_C,
    enunciado: "Depreende-se do texto que um painel de ocorrências pode ser útil e, ainda assim, insuficiente para a prestação de contas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "útil e, ainda assim, insuficiente",
    cognitivo: {
      motivo: "Exigir que o candidato componha duas informações do texto — a tese e a ressalva — em vez de reconhecer uma frase isolada.",
      palavraCritica: "insuficiente",
    },
    comentario: {
      resolucao: "CERTO, e a resposta não está numa frase só. O texto afirma que publicar 'não é o mesmo que prestar contas' e, logo depois, que o painel 'cumpre função útil, mas limitada'. Compondo as duas: a utilidade é reconhecida, a suficiência é negada. É exatamente a diferença entre 'não serve' e 'não basta' — o texto sustenta a segunda leitura, nunca a primeira.",
      fundamento: "Compreensão de texto — composição de informações; utilidade × suficiência.",
      macete: "Quando o autor elogia e ressalva na mesma frase ('útil, mas limitada'), o item correto costuma preservar as duas partes.",
      erroComum: "Marcar ERRADO por entender que reconhecer utilidade contradiz a tese de que publicar não basta — quando é justamente a combinação das duas que o texto propõe.",
      comoBancaPensa: "Item que só se resolve lendo dois trechos distintos, formato que separa quem leu o texto de quem reconheceu palavras nele."
    }
  },
  {
    ...BASE90,
    id: "PT-198", assunto: "Compreensão e reescritura", subassunto: "Extrapolação — recusa da divulgação",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: dados abertos e controle social)",
    dificuldade: 3, tempoIdealSeg: 90, textoApoio: TXT90_C,
    enunciado: "Conclui-se do texto que os painéis eletrônicos de criminalidade devem ser descontinuados, pois, ao informarem apenas quantidades de ocorrências sem os respectivos critérios de classificação, produzem no cidadão uma falsa impressão de transparência que é mais nociva ao controle social do que a simples ausência de qualquer divulgação.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "devem ser descontinuados",
    cognitivo: {
      motivo: "Testar se o candidato distingue 'insuficiente' de 'nocivo'.",
      palavraCritica: "descontinuados",
    },
    comentario: {
      resolucao: "ERRADO. O texto diz que o painel 'cumpre função útil, mas limitada' — reconhece valor e aponta limite. Em nenhum momento propõe descontinuá-lo, nem compara a divulgação parcial com a ausência de divulgação, nem afirma que a primeira seja mais nociva. O item transforma uma ressalva em condenação.",
      fundamento: "Compreensão de texto — insuficiência × nocividade; extrapolação.",
      macete: "'Útil, mas limitada' é elogio com ressalva. Item que lê isso como condenação está ampliando.",
      erroComum: "Deduzir a recusa a partir da crítica, sem notar o reconhecimento explícito de utilidade.",
      comoBancaPensa: "Enunciado longo que apresenta a extrapolação como conclusão lógica, encadeada com um 'pois' que parece justificá-la."
    }
  },
  {
    ...BASE90,
    id: "PT-199", assunto: "Compreensão e reescritura", subassunto: "Substituição de conectivo consecutivo",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: dados abertos e controle social)",
    dificuldade: 2, tempoIdealSeg: 60, textoApoio: TXT90_C,
    enunciado: "Sem prejuízo da correção gramatical e do sentido, “razão pela qual a abertura precisa ser desenhada” poderia ser reescrito como motivo por que a abertura precisa ser desenhada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "razão pela qual / motivo por que",
    cognitivo: {
      motivo: "Cobrar equivalência entre locuções relativas de valor causal-consecutivo.",
      palavraCritica: "pela qual",
    },
    comentario: {
      resolucao: "CERTO. 'Razão pela qual' e 'motivo por que' são equivalentes: em ambas, o relativo retoma o antecedente e a preposição é exigida pelo nome ('razão por', 'motivo por'). A grafia 'por que', separada e sem acento, é a correta nesse emprego, em que 'que' equivale a 'o qual'.",
      fundamento: "Sintaxe — pronome relativo precedido de preposição; emprego de por que.",
      macete: "Se der para trocar por 'pelo qual/pela qual', escreve-se 'por que', separado e sem acento.",
      erroComum: "Recusar por supor que 'por que' só cabe em pergunta.",
      comoBancaPensa: "Reescritura correta que passa pelo ponto mais errado da escrita corrente — o emprego dos porquês."
    }
  },
  {
    ...BASE90,
    id: "PT-200", assunto: "Pontuação", subassunto: "Travessão introduzindo enumeração explicativa",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: dados abertos e controle social)",
    dificuldade: 2, tempoIdealSeg: 50, textoApoio: TXT90_C,
    enunciado: "O travessão empregado após “do critério que o produziu” introduz enumeração que especifica o que se entende por critério.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "especifica",
    cognitivo: {
      motivo: "Cobrar a função do travessão como introdutor de aposto enumerativo.",
      palavraCritica: "enumeração",
    },
    comentario: {
      resolucao: "CERTO. Depois do travessão vêm três especificações do que constitui o critério: 'como se classifica uma ocorrência, em que momento ela entra na estatística, quem revisa o registro'. É aposto enumerativo, e o travessão o anuncia — função que, nesse contexto, os dois-pontos também cumpririam.",
      fundamento: "Pontuação — travessão introdutor de aposto enumerativo.",
      macete: "Travessão simples no meio do período costuma anunciar explicação ou lista. Veja o que vem depois dele.",
      erroComum: "Esperar travessão sempre em par, ignorando o uso simples antes de aposto.",
      comoBancaPensa: "Item curto e verdadeiro sobre um sinal que o candidato associa apenas a intercalação."
    }
  },
  {
    ...BASE90,
    id: "PT-201", assunto: "Coesão textual", subassunto: "Referente de pronome em posição de sujeito",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: dados abertos e controle social)",
    dificuldade: 2, tempoIdealSeg: 55, textoApoio: TXT90_C,
    enunciado: "Em “Ela exige que o dado venha acompanhado do critério que o produziu”, o pronome “Ela” retoma a expressão “A transparência que interessa ao controle social”.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Ela",
    cognitivo: {
      motivo: "Cobrar o rastreio de anáfora entre períodos consecutivos.",
      palavraCritica: "Ela",
    },
    comentario: {
      resolucao: "CERTO. O período anterior é 'A transparência que interessa ao controle social é outra'. 'Ela' retoma esse sujeito, com o qual concorda em gênero e número, e mantém a progressão temática: o texto acabara de anunciar que existe outra transparência e passa a caracterizá-la.",
      fundamento: "Coesão — anáfora pronominal entre períodos.",
      macete: "Pronome que abre período costuma retomar o sujeito do período anterior. Confira gênero, número e sentido.",
      erroComum: "Puxar 'Ela' para 'estatística' ou 'ocorrência', substantivos femininos próximos mas de outro período.",
      comoBancaPensa: "Anáfora correta e verificável, para contrastar com os itens em que o referente é trocado."
    }
  },
  {
    ...BASE90,
    id: "PT-202", assunto: "Compreensão e reescritura", subassunto: "Reescritura que troca condição por consequência",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: dados abertos e controle social)",
    dificuldade: 3, tempoIdealSeg: 95, textoApoio: TXT90_C,
    enunciado: "Mantêm-se a correção gramatical e o sentido do texto ao se reescrever “Sem esses metadados, o número vira argumento de autoridade, e não instrumento de verificação” como Como o número vira argumento de autoridade, e não instrumento de verificação, esses metadados são dispensáveis.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "são dispensáveis",
    cognitivo: {
      motivo: "Testar a inversão entre condição e consequência, com alteração da conclusão.",
      palavraCritica: "Como",
    },
    comentario: {
      resolucao: "ERRADO. No original, a ausência dos metadados é a CONDIÇÃO ('sem esses metadados') e a degradação do número em argumento de autoridade é a CONSEQUÊNCIA. A reescritura inverte os papéis — transforma a consequência em causa — e ainda conclui que os metadados seriam dispensáveis, o oposto exato do que o texto defende, já que ele os apresenta como exigência da transparência que interessa.",
      fundamento: "Sintaxe do período composto — relação condicional × causal; coerência.",
      macete: "'Sem X, acontece Y' significa que X evita Y. Nunca que Y torna X dispensável.",
      erroComum: "Julgar apenas a correção gramatical da reescritura, que existe, sem checar se a relação lógica sobreviveu.",
      comoBancaPensa: "Constrói um período gramaticalmente impecável cuja conclusão contradiz o texto — o erro está no sentido, não na forma."
    }
  },
  {
    ...BASE90,
    id: "PT-203", assunto: "Sintaxe", subassunto: "Função sintática de oração subordinada substantiva",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: dados abertos e controle social)",
    dificuldade: 3, tempoIdealSeg: 80, textoApoio: TXT90_C,
    enunciado: "Em “Ela exige que o dado venha acompanhado do critério que o produziu”, a oração iniciada por “que o dado venha” exerce a função de sujeito da forma verbal “exige”.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "sujeito",
    cognitivo: {
      motivo: "Testar a distinção entre subordinada substantiva subjetiva e objetiva direta.",
      palavraCritica: "exige",
    },
    comentario: {
      resolucao: "ERRADO. O sujeito de 'exige' é 'Ela'. A oração 'que o dado venha acompanhado do critério...' completa o sentido do verbo transitivo direto — quem exige, exige ALGUMA COISA —, sendo, portanto, subordinada substantiva OBJETIVA DIRETA. Seria subjetiva se o verbo estivesse sem sujeito expresso, em construções como 'exige-se que...' ou 'é exigido que...'.",
      fundamento: "Sintaxe — orações subordinadas substantivas subjetiva e objetiva direta.",
      macete: "Ache primeiro o sujeito do verbo principal. Se ele já existe, a oração que sobra não pode ser sujeito.",
      erroComum: "Classificar toda substantiva iniciada por 'que' após o verbo como subjetiva.",
      comoBancaPensa: "Pergunta sobre função de oração DO TEXTO, no formato dos itens de sintaxe da prova real, e explora a confusão mais comum da classificação."
    }
  },
  {
    ...BASE90,
    id: "PT-204", assunto: "Compreensão e reescritura", subassunto: "Alcance da ressalva final",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: dados abertos e controle social)",
    dificuldade: 3, tempoIdealSeg: 90, textoApoio: TXT90_C,
    enunciado: "Depreende-se do último parágrafo que o autor condiciona toda e qualquer divulgação de dados de criminalidade à prévia conclusão das investigações em curso, de modo que nenhuma informação poderia ser publicada enquanto houvesse apuração pendente sobre os fatos registrados.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "toda e qualquer",
    cognitivo: {
      motivo: "Testar a transformação de uma cautela pontual em condição absoluta.",
      palavraCritica: "nenhuma",
    },
    comentario: {
      resolucao: "ERRADO. A cautela do texto é específica: são os dados GRANULARES DEMAIS que podem expor vítimas e comprometer investigações. Daí a conclusão de que a abertura 'precisa ser desenhada, e não simplesmente decretada' — isto é, calibrada em seu grau de detalhe, e não suspensa. O item generaliza a ressalva até uma proibição geral, que o texto não formula.",
      fundamento: "Compreensão de texto — alcance da ressalva; generalização indevida.",
      macete: "Cautela sobre o GRAU de uma prática não é proibição da prática. Veja se o texto qualificou o objeto ('granulares demais').",
      erroComum: "Ler 'desenhada' como sinônimo de 'restringida ao máximo'.",
      comoBancaPensa: "Toma o único parágrafo de ressalva e o converte em regra absoluta, com 'toda e qualquer' e 'nenhuma' reforçando a leitura extrema."
    }
  },
  {
    ...BASE90,
    id: "PT-205", assunto: "Compreensão e reescritura", subassunto: "Afirmação categórica sustentada pelo texto",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: dados abertos e controle social)",
    dificuldade: 2, tempoIdealSeg: 45, textoApoio: TXT90_C,
    enunciado: "Segundo o texto, todo dado divulgado deve vir acompanhado do critério que o produziu.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "todo",
    cognitivo: {
      motivo: "Apresentar termo absoluto em item VERDADEIRO, porque o texto de fato formula a exigência sem ressalva.",
      palavraCritica: "todo",
    },
    comentario: {
      resolucao: "CERTO. O texto é categórico nesse ponto: 'Ela exige que o dado venha acompanhado do critério que o produziu'. A exigência é apresentada sem exceção, e a frase seguinte reforça que, sem os metadados, o número perde a função de instrumento de verificação. O 'todo' do item reproduz o alcance do original, não o amplia.",
      fundamento: "Compreensão de texto — fidelidade ao alcance da afirmação.",
      macete: "Termo absoluto não é sinal de item errado. Aqui o próprio texto é absoluto — confira o texto, não a palavra.",
      erroComum: "Marcar ERRADO por reflexo ao ver 'todo', sem verificar se o texto autoriza a generalidade.",
      comoBancaPensa: "É a contraprova do reflexo: quem decide por 'termo absoluto = ERRADO' perde este item, e a banca sabe disso."
    }
  },
  {
    ...BASE90,
    id: "PT-206", assunto: "Compreensão e reescritura", subassunto: "Substituição por sinônimo contextual",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: dados abertos e controle social)",
    dificuldade: 2, tempoIdealSeg: 55, textoApoio: TXT90_C,
    enunciado: "Sem prejuízo da correção gramatical e do sentido, o vocábulo “desenhada”, no último parágrafo, poderia ser substituído por planejada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "desenhada / planejada",
    cognitivo: {
      motivo: "Cobrar sinonímia contextual em par opositivo construído pelo autor.",
      palavraCritica: "desenhada",
    },
    comentario: {
      resolucao: "CERTO. 'Desenhada' está em oposição a 'decretada': o autor contrapõe a abertura que se projeta com cuidado à que se impõe por ato. 'Planejada' preserva exatamente esse traço de elaboração prévia e mantém a oposição intacta, sem prejuízo de concordância ou regência.",
      fundamento: "Semântica — sinonímia contextual em estrutura opositiva.",
      macete: "Em par de opostos, o sinônimo bom é o que preserva a oposição. Teste a troca lendo os dois termos juntos.",
      erroComum: "Recusar por ler 'desenhada' no sentido gráfico, ignorando o emprego figurado que a oposição impõe.",
      comoBancaPensa: "Substituição legítima cujo julgamento exige perceber a estrutura opositiva, e não só consultar o dicionário."
    }
  },
  {
    ...BASE90,
    id: "PT-207", assunto: "Compreensão e reescritura", subassunto: "Atribuição de finalidade não formulada",
    origem: "Inédita — estilo CEBRASPE (texto-base autoral: dados abertos e controle social)",
    dificuldade: 3, tempoIdealSeg: 85, textoApoio: TXT90_C,
    enunciado: "Infere-se do texto que a principal finalidade da divulgação de estatísticas criminais é permitir a comparação entre bairros de uma mesma cidade, de modo que o cidadão possa avaliar em qual deles a atuação policial tem sido mais eficiente e cobrar das autoridades a redistribuição do efetivo disponível.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "comparação entre bairros",
    cognitivo: {
      motivo: "Testar a atribuição ao texto de uma finalidade que ele não enuncia.",
      palavraCritica: "principal finalidade",
    },
    comentario: {
      resolucao: "ERRADO. O bairro aparece uma única vez, como exemplo do que um painel informa — 'quantos roubos ocorreram em determinado bairro' —, e não como finalidade da divulgação. O texto trata da diferença entre informar e prestar contas e da necessidade de metadados; comparação entre bairros, avaliação de eficiência e redistribuição de efetivo não são mencionadas nem sugeridas.",
      fundamento: "Compreensão de texto — exemplo × finalidade; extrapolação.",
      macete: "Termo citado uma vez como exemplo não vira tese. Volte ao texto e veja em que função a palavra aparece.",
      erroComum: "Tomar o exemplo do primeiro parágrafo como objetivo do texto por ser o único dado concreto mencionado.",
      comoBancaPensa: "Constrói uma finalidade plausível para políticas de dados abertos e a atribui ao texto, contando com o repertório externo do candidato."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE90);
