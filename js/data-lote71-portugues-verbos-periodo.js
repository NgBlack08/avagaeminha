/* =====================================================================
   QUESTLAB — Lote 71: PORTUGUÊS — VERBOS, CONECTIVOS E PERÍODO COMPOSTO
   Língua Portuguesa consta dos DOIS editais (PC-AL e SESAU/AL), então
   este lote vale para as duas trilhas — daí o cargo abranger todos.

   O banco tinha 94 itens, mas concentrados: o lote 67 encheu a análise
   sintática de termos (sujeito, predicado, complementos, adjuntos) e
   sobraram lacunas grandes no resto do programa. Levantamento por
   assunto antes de escrever:

     • VERBOS — emprego de tempos e modos: ZERO itens, embora seja
       tópico próprio no conteúdo programático;
     • conjunções e conectivos: sem assunto próprio, apareciam só de
       raspão dentro de coesão;
     • orações subordinadas substantivas e adjetivas: inexistentes
       (só havia adverbiais, e uma única);
     • crase, pontuação e concordância: 2 a 3 itens cada.

   Material de curso (lista de questões comentadas cobrindo todo o
   programa, mais a aula de nivelamento) serviu de mapa dos recortes.
   As frases analisadas são autorais, com vocabulário das duas
   carreiras, e cada análise segue a gramática normativa.

   50 itens (PT-095 a PT-144): 29 CERTO / 21 ERRADO, dificuldade 3 em 48.

   Padrões distribuídos desde a redação: nos últimos lotes,
   "literalidade" estourou o limiar de previsibilidade por concentrar os
   itens corretos, e o rebalanceamento teve de ser feito depois. Aqui os
   CERTOS já nasceram nos padrões que a banca usa como armadilha, e deu
   certo — "literalidade" ficou em 12 dos 50 itens (contra 38 no lote
   anterior de tamanho parecido) e nenhum aviso de previsibilidade
   apareceu na validação.

   Registro de um erro corrigido: os itens nasceram com a lista de cargos
   copiada do lote 67, que é anterior à correção do edital da PC-AL — ela
   ainda trazia Delegado, Perito Criminal e Papiloscopista, cargos que o
   edital de 2026 não oferece. A regra de validação criada na auditoria de
   trilhas barrou o build nos 50 itens.
   ===================================================================== */

const QUESTOES_LOTE71 = [

  /* ===================== TEMPOS E MODOS VERBAIS ===================== */
  {
    id: "PT-095", disciplina: "Língua Portuguesa", assunto: "Verbo — tempos e modos", subassunto: "Pretérito perfeito x imperfeito",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.82,
    enunciado: "Em \"A equipe atendeu os pacientes e, enquanto isso, a coordenadora organizava os prontuários\", a forma \"atendeu\" exprime ação concluída em momento determinado do passado, ao passo que \"organizava\" exprime ação em curso, sem delimitação de término.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "ação concluída ... ação em curso, sem delimitação de término",
    cognitivo: {
      motivo: "Contraexemplo: o par perfeito/imperfeito, que a banca permuta, aqui atribuído corretamente.",
      palavraCritica: "sem delimitação de término",
    },
    comentario: {
      resolucao: "CERTO. O pretérito perfeito marca o fato como concluído e pontual; o imperfeito o apresenta em desenvolvimento, como pano de fundo. É justamente por isso que a narrativa costuma alternar os dois: o imperfeito descreve a cena, o perfeito faz a ação avançar. A conjunção \"enquanto isso\" reforça a simultaneidade entre o fato acabado e o processo em curso.",
      fundamento: "Gramática normativa — aspecto verbal do pretérito perfeito e do imperfeito.",
      macete: "Perfeito fecha a ação. Imperfeito deixa ela correndo.",
      erroComum: "Tratar os dois como equivalentes por ambos indicarem passado.",
      comoBancaPensa: "Apresenta corretamente o par que costuma inverter, punindo a resposta por formato."
    }
  },
  {
    id: "PT-096", disciplina: "Língua Portuguesa", assunto: "Verbo — tempos e modos", subassunto: "Pretérito mais-que-perfeito",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.78,
    enunciado: "Em \"Quando a perícia chegou, o suspeito já deixara o local\", a forma \"deixara\" está no futuro do pretérito e indica ação hipotética, dependente de condição não realizada.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "\"deixara\" ... futuro do pretérito ... ação hipotética",
    cognitivo: {
      motivo: "Cobrar o reconhecimento do mais-que-perfeito simples, forma que a banca confunde com o futuro do pretérito.",
      palavraCritica: "futuro do pretérito",
    },
    comentario: {
      resolucao: "ERRADO. \"Deixara\" é pretérito mais-que-perfeito SIMPLES do indicativo: exprime ação anterior a outra já passada — o suspeito saiu antes de a perícia chegar. O futuro do pretérito seria \"deixaria\". A confusão nasce da semelhança das terminações, mas o sentido é oposto: um marca anterioridade no passado, o outro, hipótese.",
      fundamento: "Gramática normativa — pretérito mais-que-perfeito simples e futuro do pretérito.",
      macete: "-ARA é passado do passado. -ARIA é hipótese.",
      erroComum: "Ler \"deixara\" como forma reduzida de \"deixaria\".",
      comoBancaPensa: "Troca dois tempos de terminação parecida e sentidos incompatíveis."
    }
  },
  {
    id: "PT-097", disciplina: "Língua Portuguesa", assunto: "Verbo — tempos e modos", subassunto: "Mais-que-perfeito composto",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade gramatical)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.72,
    enunciado: "A locução \"havia solicitado\", em \"O delegado havia solicitado o laudo antes da audiência\", corresponde ao pretérito mais-que-perfeito composto e pode ser substituída, sem prejuízo do sentido, pela forma simples \"solicitara\".",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mais-que-perfeito composto ... \"solicitara\"",
    cognitivo: {
      motivo: "Cobrar a equivalência entre as formas simples e composta do mais-que-perfeito.",
      palavraCritica: "sem prejuízo do sentido",
    },
    comentario: {
      resolucao: "CERTO. O mais-que-perfeito composto forma-se com \"ter\" ou \"haver\" no imperfeito mais o particípio. Equivale à forma simples: \"havia solicitado\" = \"solicitara\". A forma composta predomina na língua falada e a simples soa mais formal, mas ambas exprimem o mesmo — ação anterior a outro fato passado.",
      fundamento: "Gramática normativa — formas simples e composta do mais-que-perfeito.",
      macete: "Havia feito = fizera. Mesmo tempo, registros diferentes.",
      erroComum: "Supor que a forma composta indica tempo diverso da simples.",
      comoBancaPensa: "Item correto que cobra a equivalência, e não apenas o reconhecimento."
    }
  },
  {
    id: "PT-098", disciplina: "Língua Portuguesa", assunto: "Verbo — tempos e modos", subassunto: "Pretérito perfeito composto",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.75,
    enunciado: "Em \"Os índices de reincidência têm caído nos últimos anos\", a locução \"têm caído\" exprime fato ocorrido uma única vez no passado e inteiramente concluído no momento da fala.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "uma única vez ... inteiramente concluído",
    cognitivo: {
      motivo: "Cobrar o valor durativo do pretérito perfeito composto, que se prolonga até o presente.",
      palavraCritica: "uma única vez ... inteiramente concluído",
    },
    comentario: {
      resolucao: "ERRADO. O pretérito perfeito COMPOSTO exprime justamente o contrário: ação ou processo que se repete ou se prolonga do passado até o presente, e que pode continuar. \"Têm caído\" indica queda continuada, não fato único e encerrado. Quem exprime fato único e concluído é o pretérito perfeito simples — \"caíram\".",
      fundamento: "Gramática normativa — aspecto do pretérito perfeito composto.",
      macete: "Tenho feito = venho fazendo, e continua. Fiz = acabou.",
      erroComum: "Igualar o perfeito composto ao perfeito simples por ambos serem 'perfeitos'.",
      comoBancaPensa: "Atribui ao composto o valor do simples, aproveitando a semelhança do nome."
    }
  },
  {
    id: "PT-099", disciplina: "Língua Portuguesa", assunto: "Verbo — tempos e modos", subassunto: "Modo subjuntivo",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade gramatical)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.84,
    enunciado: "Em \"Ainda que os dados indiquem melhora, o quadro permanece grave\", a forma \"indiquem\" está no modo subjuntivo e apresenta o fato como possibilidade admitida, e não como afirmação categórica.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "modo subjuntivo ... possibilidade admitida",
    cognitivo: {
      motivo: "Cobrar o valor modal do subjuntivo em oração concessiva.",
      palavraCritica: "possibilidade admitida",
    },
    comentario: {
      resolucao: "CERTO. O subjuntivo é o modo da incerteza, da hipótese e da concessão. A locução \"ainda que\" é concessiva e exige subjuntivo: o enunciador admite o fato sem afirmá-lo como certo. Se estivesse no indicativo — \"indicam\" —, o fato seria apresentado como real e a construção exigiria outro conectivo.",
      fundamento: "Gramática normativa — modo subjuntivo em orações concessivas.",
      macete: "Ainda que, embora, conquanto: puxam subjuntivo.",
      erroComum: "Confundir o subjuntivo com tempo verbal, e não com modo.",
      comoBancaPensa: "Item correto que liga modo verbal ao conectivo que o exige."
    }
  },
  {
    id: "PT-100", disciplina: "Língua Portuguesa", assunto: "Verbo — tempos e modos", subassunto: "Futuro do pretérito",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.76,
    enunciado: "Em \"Se houvesse mais peritos, os laudos sairiam com maior rapidez\", a forma \"sairiam\" está no futuro do pretérito e exprime consequência condicionada a hipótese não verificada.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "futuro do pretérito ... consequência condicionada a hipótese não verificada",
    cognitivo: {
      motivo: "Contraexemplo: identificação correta do futuro do pretérito, tempo que a banca troca pelo mais-que-perfeito.",
      palavraCritica: "hipótese não verificada",
    },
    comentario: {
      resolucao: "CERTO. O período condicional típico combina imperfeito do subjuntivo na hipótese (\"houvesse\") com futuro do pretérito na consequência (\"sairiam\"). O futuro do pretérito exprime o que aconteceria caso a condição se realizasse — e o fato de ela não se realizar é o que caracteriza a hipótese. É também o tempo do desejo cortês e da notícia não confirmada.",
      fundamento: "Gramática normativa — futuro do pretérito e correlação em período condicional.",
      macete: "SE + imperfeito do subjuntivo, então futuro do pretérito. Houvesse/sairiam.",
      erroComum: "Marcar ERRADO por desconfiar da nomenclatura 'futuro do pretérito'.",
      comoBancaPensa: "Nomeia corretamente o tempo que costuma confundir com o mais-que-perfeito."
    }
  },
  {
    id: "PT-101", disciplina: "Língua Portuguesa", assunto: "Verbo — tempos e modos", subassunto: "Correlação verbal",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.7,
    enunciado: "A construção \"Se o servidor cumprir o prazo, o processo seguirá para análise\" contraria a norma-padrão, uma vez que a oração condicional exige obrigatoriamente o imperfeito do subjuntivo.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "exige obrigatoriamente o imperfeito do subjuntivo",
    cognitivo: {
      motivo: "Cobrar que há mais de uma correlação condicional válida.",
      palavraCritica: "obrigatoriamente",
    },
    comentario: {
      resolucao: "ERRADO. A construção está correta. Há duas correlações condicionais consagradas: futuro do subjuntivo com futuro do presente — \"se cumprir, seguirá\", que expressa condição realizável; e imperfeito do subjuntivo com futuro do pretérito — \"se cumprisse, seguiria\", que expressa hipótese improvável ou irreal. O item elege uma como única e reprova a outra.",
      fundamento: "Gramática normativa — correlação de tempos em período condicional.",
      macete: "Cumprir/seguirá = possível. Cumprisse/seguiria = hipotético.",
      erroComum: "Supor que toda condicional é hipotética e pede imperfeito.",
      comoBancaPensa: "Transforma uma das correlações possíveis em exigência única."
    }
  },
  {
    id: "PT-102", disciplina: "Língua Portuguesa", assunto: "Verbo — vozes verbais", subassunto: "Voz passiva sintética",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.8,
    enunciado: "Em \"Analisaram-se todas as amostras coletadas\", tem-se voz passiva sintética, sendo \"todas as amostras coletadas\" o sujeito paciente, o que se confirma pela possibilidade de conversão em \"Todas as amostras coletadas foram analisadas\".",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "voz passiva sintética ... sujeito paciente ... conversão",
    cognitivo: {
      motivo: "Contraexemplo: análise correta do SE apassivador, com o teste de conversão.",
      palavraCritica: "possibilidade de conversão",
    },
    comentario: {
      resolucao: "CERTO. \"Analisar\" é transitivo direto, logo o SE é partícula apassivadora e o termo seguinte é sujeito — por isso o verbo concorda no plural. O teste decisivo é o do item: se a frase admite conversão para a passiva analítica com \"ser + particípio\", é voz passiva sintética. Se não admitisse, o SE seria índice de indeterminação do sujeito.",
      fundamento: "Gramática normativa — voz passiva sintética e teste de conversão.",
      macete: "Converteu para 'foi/foram + particípio'? É passiva sintética, e o verbo concorda.",
      erroComum: "Marcar ERRADO por desconfiar de item que já traz a análise pronta.",
      comoBancaPensa: "Apresenta corretamente a análise que costuma distorcer, com o teste explícito."
    }
  },
  {
    id: "PT-103", disciplina: "Língua Portuguesa", assunto: "Verbo — vozes verbais", subassunto: "Voz passiva analítica",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de sujeito)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.73,
    enunciado: "Em \"O relatório foi assinado pelo diretor\", o termo \"pelo diretor\" exerce a função de sujeito da oração, já que designa quem praticou a ação.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "\"pelo diretor\" ... função de sujeito",
    cognitivo: {
      motivo: "Cobrar a função de agente da passiva, distinta da de sujeito.",
      palavraCritica: "função de sujeito",
    },
    comentario: {
      resolucao: "ERRADO. \"Pelo diretor\" é AGENTE DA PASSIVA — quem pratica a ação, mas não é o sujeito. O sujeito é \"O relatório\", que sofre a ação e com quem o verbo concorda. Na voz passiva, quem pratica e quem é sujeito se separam: é exatamente essa dissociação que a define. Na conversão para a ativa, o agente da passiva vira sujeito: \"O diretor assinou o relatório\".",
      fundamento: "Gramática normativa — agente da passiva e sujeito paciente.",
      macete: "Na passiva, o sujeito sofre. Quem faz é o agente da passiva.",
      erroComum: "Igualar 'quem pratica a ação' a 'sujeito'.",
      comoBancaPensa: "Usa a noção intuitiva de sujeito como agente, que a voz passiva desmente."
    }
  },
  {
    id: "PT-104", disciplina: "Língua Portuguesa", assunto: "Verbo — tempos e modos", subassunto: "Modo imperativo",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade gramatical)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.62,
    enunciado: "O modo imperativo exprime ordem, pedido, conselho ou súplica, e sua forma negativa deriva do presente do subjuntivo, ao passo que a afirmativa, nas segundas pessoas, deriva do presente do indicativo sem o -s final.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "negativa deriva do presente do subjuntivo ... afirmativa ... sem o -s final",
    cognitivo: {
      motivo: "Cobrar a formação do imperativo, que a banca cobra pela derivação.",
      palavraCritica: "sem o -s final",
    },
    comentario: {
      resolucao: "CERTO. É a regra de formação: \"tu cantas\" gera \"canta tu\" (afirmativo, sem o -s); e o negativo vem do subjuntivo — \"não cantes tu\". As demais pessoas do imperativo, afirmativo e negativo, vêm todas do presente do subjuntivo. Daí a assimetria que gera erro corrente: \"faça\" e \"não faça\", mas \"faz tu\" e \"não faças tu\".",
      fundamento: "Gramática normativa — formação do modo imperativo.",
      macete: "Afirmativo de tu/vós: tira o -s do indicativo. Todo o resto vem do subjuntivo.",
      erroComum: "Misturar as formas de tratamento e produzir 'não faz' em vez de 'não faças'.",
      comoBancaPensa: "Item correto sobre uma formação que quase ninguém revisa."
    }
  },
  {
    id: "PT-105", disciplina: "Língua Portuguesa", assunto: "Verbo — tempos e modos", subassunto: "Formas nominais",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.66,
    enunciado: "São três, e apenas três, as formas nominais do verbo: infinitivo, gerúndio e particípio.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "três, e apenas três ... infinitivo, gerúndio e particípio",
    cognitivo: {
      motivo: "Contraexemplo: rol fechado e categórico que corresponde à gramática.",
      palavraCritica: "apenas três",
    },
    comentario: {
      resolucao: "CERTO. São exatamente essas três, chamadas nominais porque podem exercer funções próprias de nomes: o infinitivo aproxima-se do substantivo, o gerúndio e o particípio, do advérbio e do adjetivo. Não indicam tempo por si sós, o que as distingue das formas finitas. O rol é fechado — não há quarta forma nominal.",
      fundamento: "Nomenclatura Gramatical Brasileira — formas nominais do verbo.",
      macete: "Infinitivo, gerúndio e particípio. Só essas três.",
      erroComum: "Marcar ERRADO por reflexo diante de 'apenas'.",
      comoBancaPensa: "Numeral fechado em rol que é mesmo taxativo."
    }
  },
  {
    id: "PT-106", disciplina: "Língua Portuguesa", assunto: "Verbo — tempos e modos", subassunto: "Presente com valor de futuro",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.64,
    enunciado: "O presente do indicativo somente pode exprimir fato simultâneo ao momento da fala, sendo incorreto seu emprego para designar acontecimento futuro ou fato permanente.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "somente ... simultâneo ao momento da fala",
    cognitivo: {
      motivo: "Cobrar os valores secundários do presente, que a restrição nega.",
      palavraCritica: "somente ... incorreto",
    },
    comentario: {
      resolucao: "ERRADO. O presente tem vários empregos além do momentâneo: futuro próximo (\"a prova acontece em novembro\"), verdade permanente ou atemporal (\"a água ferve a 100 °C\"), fato habitual (\"o plantão começa às sete\") e presente histórico, que narra o passado com vivacidade (\"em 1988, promulga-se a Constituição\"). Todos são legítimos na norma-padrão.",
      fundamento: "Gramática normativa — valores do presente do indicativo.",
      macete: "O presente serve para agora, sempre, de hábito, para o futuro próximo e para narrar o passado.",
      erroComum: "Restringir cada tempo verbal a um único valor semântico.",
      comoBancaPensa: "Reduz um tempo de múltiplos empregos ao seu valor mais óbvio."
    }
  },

  /* ===================== CONJUNÇÕES E CONECTIVOS ===================== */
  {
    id: "PT-107", disciplina: "Língua Portuguesa", assunto: "Conjunções e conectivos", subassunto: "Coordenativas adversativas",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.86,
    enunciado: "Em \"Os números caíram; no entanto, o cenário segue preocupante\", a expressão \"no entanto\" é conjunção coordenativa adversativa e pode ser substituída por \"contudo\" sem alteração do sentido.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "coordenativa adversativa ... \"contudo\"",
    cognitivo: {
      motivo: "Contraexemplo: classificação e substituição corretas de conectivo, no formato em que a banca troca a relação.",
      palavraCritica: "sem alteração do sentido",
    },
    comentario: {
      resolucao: "CERTO. \"No entanto\", \"contudo\", \"todavia\", \"entretanto\", \"porém\" e \"mas\" formam o grupo das adversativas: todas marcam oposição ou contraste. A substituição entre elas é livre quanto ao sentido — muda só o registro e a pontuação, já que \"mas\" costuma vir sem ponto e vírgula antes.",
      fundamento: "Gramática normativa — conjunções coordenativas adversativas.",
      macete: "Mas, porém, contudo, todavia, entretanto, no entanto: todas opõem.",
      erroComum: "Marcar ERRADO por desconfiar de item que autoriza substituição.",
      comoBancaPensa: "Classifica corretamente um conectivo cuja relação costuma distorcer."
    }
  },
  {
    id: "PT-108", disciplina: "Língua Portuguesa", assunto: "Conjunções e conectivos", subassunto: "Adversativa x conclusiva",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.84,
    enunciado: "Em \"A denúncia foi recebida; portanto, o processo terá seguimento\", a substituição de \"portanto\" por \"entretanto\" preservaria a relação lógica estabelecida entre as orações.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "\"portanto\" por \"entretanto\" ... preservaria a relação lógica",
    cognitivo: {
      motivo: "Cobrar a diferença entre conclusão e oposição, com dois conectivos de forma parecida.",
      palavraCritica: "preservaria a relação lógica",
    },
    comentario: {
      resolucao: "ERRADO. \"Portanto\" é CONCLUSIVO: a segunda oração decorre da primeira. \"Entretanto\" é ADVERSATIVO: a segunda contraria a expectativa da primeira. As relações são opostas, e a troca inverteria o sentido do período. A semelhança sonora entre os dois é justamente o que a banca explora.",
      fundamento: "Gramática normativa — conjunções conclusivas e adversativas.",
      macete: "PorTANTO conclui. EnTREtanto opõe. Sons parecidos, sentidos contrários.",
      erroComum: "Trocar os dois por semelhança fonética.",
      comoBancaPensa: "Propõe substituição entre conectivos parecidos na forma e opostos na função."
    }
  },
  {
    id: "PT-109", disciplina: "Língua Portuguesa", assunto: "Conjunções e conectivos", subassunto: "Subordinativa concessiva",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade gramatical)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.83,
    enunciado: "A locução \"mesmo que\" introduz oração subordinada adverbial concessiva, exprimindo fato que se admite e que, embora contrarie a expectativa, não impede a realização do que se declara na oração principal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "concessiva ... contrarie a expectativa ... não impede",
    cognitivo: {
      motivo: "Cobrar o valor da concessão, frequentemente confundido com o da condição.",
      palavraCritica: "não impede",
    },
    comentario: {
      resolucao: "CERTO. A concessão admite um obstáculo e afirma que ele não impede o fato principal — é a lógica do \"apesar de\". Integram o grupo embora, ainda que, conquanto, se bem que, posto que e mesmo que, todas exigindo subjuntivo. Não confundir com a condicional, que subordina a realização do principal ao cumprimento da condição.",
      fundamento: "Gramática normativa — orações subordinadas adverbiais concessivas.",
      macete: "Concessiva é obstáculo que não impede. Condicional é requisito que precisa acontecer.",
      erroComum: "Confundir concessiva com condicional.",
      comoBancaPensa: "Item correto que define a relação antes de cobrá-la nas trocas."
    }
  },
  {
    id: "PT-110", disciplina: "Língua Portuguesa", assunto: "Conjunções e conectivos", subassunto: "Condicional x concessiva",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.79,
    enunciado: "Em \"Embora o prazo tenha expirado, o recurso foi conhecido\", a conjunção \"embora\" estabelece relação de condição, indicando que o conhecimento do recurso dependia da expiração do prazo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "\"embora\" ... relação de condição ... dependia",
    cognitivo: {
      motivo: "Cobrar a distinção entre concessão e condição na aplicação.",
      palavraCritica: "relação de condição ... dependia",
    },
    comentario: {
      resolucao: "ERRADO. \"Embora\" é concessiva: a expiração do prazo era obstáculo esperado ao conhecimento do recurso, e ainda assim ele foi conhecido. Não há dependência — há contraste com a expectativa. A relação de condição seria expressa por \"se\", \"caso\", \"contanto que\", e implicaria que um fato só ocorre se o outro ocorrer.",
      fundamento: "Gramática normativa — orações concessivas e condicionais.",
      macete: "Embora = apesar de. Se = só acontece caso.",
      erroComum: "Ler qualquer subordinada adverbial como condicional.",
      comoBancaPensa: "Atribui a uma concessiva a lógica de dependência própria da condicional."
    }
  },
  {
    id: "PT-111", disciplina: "Língua Portuguesa", assunto: "Conjunções e conectivos", subassunto: "Explicativa x causal",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade gramatical)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.74,
    enunciado: "A conjunção \"pois\", quando posposta ao verbo, tem valor conclusivo, ao passo que, anteposta e ligando oração que justifica a anterior, tem valor explicativo ou causal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "posposta ao verbo ... conclusivo ... anteposta ... explicativo ou causal",
    cognitivo: {
      motivo: "Cobrar o duplo valor de 'pois', decidido pela posição.",
      palavraCritica: "posposta ao verbo",
    },
    comentario: {
      resolucao: "CERTO. A posição decide: \"Estude, pois a prova se aproxima\" é explicativo — a segunda oração justifica a primeira. \"A prova se aproxima; estude, pois\" é conclusivo — equivale a portanto. É um dos poucos casos em que a mesma palavra muda de classificação pela colocação na frase.",
      fundamento: "Gramática normativa — valores da conjunção 'pois'.",
      macete: "Pois antes do verbo explica; pois depois do verbo conclui.",
      erroComum: "Classificar 'pois' sempre como explicativo.",
      comoBancaPensa: "Item correto sobre um conectivo de comportamento duplo, pouco revisado."
    }
  },
  {
    id: "PT-112", disciplina: "Língua Portuguesa", assunto: "Conjunções e conectivos", subassunto: "Conformativa",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.68,
    enunciado: "Em \"Conforme determina o regimento, a sessão será pública\", a conjunção \"conforme\" introduz oração subordinada adverbial conformativa, exprimindo acordo entre o que se declara e uma norma ou modelo.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "conformativa ... acordo ... norma ou modelo",
    cognitivo: {
      motivo: "Contraexemplo: classificação correta de conectivo que a banca costuma rotular como comparativo.",
      palavraCritica: "acordo entre o que se declara e uma norma",
    },
    comentario: {
      resolucao: "CERTO. A conformativa exprime conformidade com um padrão — regimento, lei, previsão. Integram o grupo conforme, segundo, consoante e como (neste sentido). A confusão frequente é com a comparativa, porque \"como\" serve às duas: em \"agiu como manda a lei\" há conformidade; em \"agiu como um profissional\" há comparação.",
      fundamento: "Gramática normativa — orações subordinadas adverbiais conformativas.",
      macete: "Conforme, segundo, consoante: de acordo com. É conformativa.",
      erroComum: "Classificar toda ocorrência de 'como' como comparativa.",
      comoBancaPensa: "Nomeia corretamente uma relação de menor frequência, que o candidato tende a rejeitar."
    }
  },
  {
    id: "PT-113", disciplina: "Língua Portuguesa", assunto: "Conjunções e conectivos", subassunto: "Proporcional",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.66,
    enunciado: "Em \"À medida que os laudos chegavam, as diligências avançavam\", a locução destacada estabelece relação de tempo, indicando apenas a simultaneidade entre os dois fatos.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "relação de tempo ... apenas a simultaneidade",
    cognitivo: {
      motivo: "Cobrar a relação de proporcionalidade, que a banca reduz a tempo.",
      palavraCritica: "apenas a simultaneidade",
    },
    comentario: {
      resolucao: "ERRADO. \"À medida que\" é locução conjuntiva PROPORCIONAL: os fatos não apenas coincidem no tempo, mas variam juntos — quanto mais laudos chegavam, mais as diligências avançavam. Há simultaneidade, é verdade, mas o traço definidor é a proporção. Cuidado com a forma \"à medida que\": \"na medida em que\" tem valor causal, e a troca entre as duas é erro corrente.",
      fundamento: "Gramática normativa — orações subordinadas adverbiais proporcionais.",
      macete: "À medida que = proporção. Na medida em que = causa.",
      erroComum: "Reduzir a proporcional a temporal por haver simultaneidade.",
      comoBancaPensa: "Oferece a relação parcialmente presente ('tempo') e nega a definidora, com 'apenas'."
    }
  },
  {
    id: "PT-114", disciplina: "Língua Portuguesa", assunto: "Conjunções e conectivos", subassunto: "Consecutiva",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.7,
    enunciado: "Em \"O volume de trabalho era tanto que a equipe precisou de reforço\", a oração iniciada por \"que\" é subordinada adverbial consecutiva, exprimindo o efeito decorrente da intensidade indicada na oração principal.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "consecutiva ... efeito decorrente da intensidade",
    cognitivo: {
      motivo: "Cobrar a consecutiva e o intensificador que a anuncia.",
      palavraCritica: "intensidade",
    },
    comentario: {
      resolucao: "CERTO. A consecutiva exprime consequência de uma intensidade, e vem anunciada por um intensificador na principal — tanto, tal, tão, tamanho. Sem ele, a oração com \"que\" seria de outra natureza. A diferença para a causal é a direção: a causal dá o motivo (\"precisou de reforço porque o volume era grande\"), a consecutiva dá o efeito.",
      fundamento: "Gramática normativa — orações subordinadas adverbiais consecutivas.",
      macete: "Tão/tanto/tal/tamanho + que: consecutiva.",
      erroComum: "Confundir consecutiva com causal por ambas ligarem causa e efeito.",
      comoBancaPensa: "Item correto que exige localizar o intensificador na principal."
    }
  },
  {
    id: "PT-115", disciplina: "Língua Portuguesa", assunto: "Conjunções e conectivos", subassunto: "Coordenativas — classificação",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.72,
    enunciado: "As conjunções coordenativas classificam-se em aditivas, adversativas, alternativas, conclusivas e explicativas.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "aditivas, adversativas, alternativas, conclusivas e explicativas",
    cognitivo: {
      motivo: "Contraexemplo: rol de cinco que corresponde à classificação tradicional.",
      palavraCritica: "cinco categorias",
    },
    comentario: {
      resolucao: "CERTO. São essas cinco na classificação tradicional. Aditivas somam (e, nem, mas também); adversativas opõem (mas, porém); alternativas excluem ou alternam (ou, ora... ora); conclusivas concluem (logo, portanto); explicativas justificam (pois, porque, que). Não há sexta categoria de coordenativa — condicionais, concessivas e causais são subordinativas.",
      fundamento: "Nomenclatura Gramatical Brasileira — conjunções coordenativas.",
      macete: "Coordenativas: somam, opõem, alternam, concluem, explicam. Cinco.",
      erroComum: "Incluir condicionais ou concessivas entre as coordenativas.",
      comoBancaPensa: "Rol fechado que o candidato tende a considerar incompleto."
    }
  },
  {
    id: "PT-116", disciplina: "Língua Portuguesa", assunto: "Conjunções e conectivos", subassunto: "Valor semântico de 'e'",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.68,
    enunciado: "A conjunção \"e\" tem exclusivamente valor aditivo, não podendo, em nenhum contexto, exprimir oposição entre as orações que liga.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "exclusivamente valor aditivo ... em nenhum contexto",
    cognitivo: {
      motivo: "Cobrar o valor adversativo que o 'e' assume em certos contextos.",
      palavraCritica: "exclusivamente ... nenhum contexto",
    },
    comentario: {
      resolucao: "ERRADO. O \"e\" assume valor adversativo quando liga ideias contrastantes: \"Estudou muito e não passou\" equivale a \"mas não passou\". O contexto, e não a conjunção isoladamente, determina a relação — princípio que vale para vários conectivos. É recorte clássico em prova de interpretação, porque exige ler o sentido, não a etiqueta.",
      fundamento: "Gramática normativa — valores contextuais das conjunções coordenativas.",
      macete: "'Estudou e não passou' = 'estudou MAS não passou'. O 'e' pode opor.",
      erroComum: "Classificar conectivos apenas pela lista, sem checar o sentido.",
      comoBancaPensa: "Fixa em um único valor um conectivo cujo sentido depende do contexto."
    }
  },

  /* ===================== PERÍODO COMPOSTO ===================== */
  {
    id: "PT-117", disciplina: "Língua Portuguesa", assunto: "Orações subordinadas", subassunto: "Adjetiva restritiva x explicativa",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 95, probReaparecer: 0.88,
    enunciado: "Em \"Os servidores que concluíram o curso receberão o certificado\", a oração iniciada por \"que\" é subordinada adjetiva explicativa e, por isso, deveria estar isolada por vírgulas.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "adjetiva explicativa ... isolada por vírgulas",
    cognitivo: {
      motivo: "Cobrar a distinção restritiva/explicativa, que decide a pontuação e o sentido.",
      palavraCritica: "explicativa ... vírgulas",
    },
    comentario: {
      resolucao: "ERRADO. A oração é RESTRITIVA: delimita quais servidores receberão o certificado — apenas os que concluíram o curso. Restritiva não admite vírgula. Se fosse explicativa, com vírgulas, o sentido mudaria por completo: todos os servidores teriam concluído o curso e todos receberiam o certificado. A vírgula, aqui, não é detalhe de estilo — altera quem tem direito.",
      fundamento: "Gramática normativa — orações subordinadas adjetivas restritivas e explicativas.",
      macete: "Sem vírgula restringe (só alguns). Com vírgula explica (todos).",
      erroComum: "Tratar a vírgula na adjetiva como opcional.",
      comoBancaPensa: "Inverte a classificação para justificar uma pontuação que mudaria o sentido do enunciado."
    }
  },
  {
    id: "PT-118", disciplina: "Língua Portuguesa", assunto: "Orações subordinadas", subassunto: "Adjetiva explicativa",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade gramatical)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.82,
    enunciado: "Em \"O laudo pericial, que foi concluído ontem, subsidiará a denúncia\", a oração intercalada é subordinada adjetiva explicativa e exige as duas vírgulas que a isolam.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "explicativa ... exige as duas vírgulas",
    cognitivo: {
      motivo: "Cobrar a obrigatoriedade do par de vírgulas na explicativa intercalada.",
      palavraCritica: "as duas vírgulas",
    },
    comentario: {
      resolucao: "CERTO. A explicativa acrescenta informação sobre um ser já determinado — há um só laudo pericial em questão, e a oração apenas informa quando foi concluído. Sendo intercalada, exige as DUAS vírgulas: usar só uma é erro de pontuação frequente e grave, porque separa indevidamente termos que se ligam.",
      fundamento: "Gramática normativa — pontuação da oração adjetiva explicativa.",
      macete: "Intercalou? Abre e fecha vírgula. Nunca só uma.",
      erroComum: "Esquecer a vírgula de fechamento da intercalada.",
      comoBancaPensa: "Item correto que cobra o par de vírgulas, e não apenas a classificação."
    }
  },
  {
    id: "PT-119", disciplina: "Língua Portuguesa", assunto: "Orações subordinadas", subassunto: "Substantiva subjetiva",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de sujeito)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 95, probReaparecer: 0.76,
    enunciado: "Em \"É necessário que todos os prazos sejam observados\", a oração iniciada por \"que\" exerce a função de objeto direto da oração principal.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "objeto direto da oração principal",
    cognitivo: {
      motivo: "Cobrar a identificação da subordinada substantiva subjetiva.",
      palavraCritica: "objeto direto",
    },
    comentario: {
      resolucao: "ERRADO. A oração é SUBJETIVA — exerce a função de sujeito. O teste é substituir por \"isso\": \"Isso é necessário\", em que \"isso\" é claramente sujeito. A principal, aqui, é oração sem sujeito próprio: \"é necessário\" é predicado nominal cujo sujeito é a oração inteira. Objeto direto exigiria verbo transitivo direto, que não há.",
      fundamento: "Gramática normativa — orações subordinadas substantivas subjetivas.",
      macete: "Troque por ISSO. Se virar sujeito, a oração é subjetiva.",
      erroComum: "Classificar toda substantiva iniciada por 'que' como objetiva direta.",
      comoBancaPensa: "Atribui a função mais comum das substantivas a um caso que é de sujeito."
    }
  },
  {
    id: "PT-120", disciplina: "Língua Portuguesa", assunto: "Orações subordinadas", subassunto: "Substantivas — classificação",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.7,
    enunciado: "As orações subordinadas substantivas classificam-se em subjetiva, objetiva direta, objetiva indireta, completiva nominal, predicativa e apositiva.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "subjetiva, objetiva direta, objetiva indireta, completiva nominal, predicativa e apositiva",
    cognitivo: {
      motivo: "Contraexemplo: rol de seis, taxativo, que o candidato tende a achar incompleto.",
      palavraCritica: "seis classificações",
    },
    comentario: {
      resolucao: "CERTO. São essas seis, e a lógica é direta: cada uma corresponde a uma função que um substantivo exerceria na oração simples — sujeito, objeto direto, objeto indireto, complemento nominal, predicativo e aposto. Quem domina os termos da oração simples classifica as substantivas sem decorar lista.",
      fundamento: "Nomenclatura Gramatical Brasileira — orações subordinadas substantivas.",
      macete: "As substantivas repetem as funções do substantivo. Seis funções, seis orações.",
      erroComum: "Esquecer a apositiva ou a predicativa, as menos frequentes.",
      comoBancaPensa: "Rol fechado cuja extensão gera desconfiança."
    }
  },
  {
    id: "PT-121", disciplina: "Língua Portuguesa", assunto: "Orações subordinadas", subassunto: "Orações reduzidas",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade gramatical)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.72,
    enunciado: "Denominam-se reduzidas as orações subordinadas que se apresentam com o verbo em forma nominal e sem conectivo, como em \"Concluída a perícia, o inquérito foi relatado\", que equivale a \"Depois que a perícia foi concluída\".",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "forma nominal e sem conectivo ... equivale a",
    cognitivo: {
      motivo: "Cobrar o conceito de oração reduzida e sua conversão em desenvolvida.",
      palavraCritica: "sem conectivo",
    },
    comentario: {
      resolucao: "CERTO. Reduzida é a que traz o verbo em infinitivo, gerúndio ou particípio e dispensa conjunção. Classifica-se pelo sentido, convertendo-a mentalmente em desenvolvida: aqui, \"Concluída a perícia\" equivale a \"Depois que a perícia foi concluída\", logo é reduzida de particípio com valor temporal. A ausência de conectivo é o que obriga o candidato a recuperar a relação pelo contexto.",
      fundamento: "Gramática normativa — orações reduzidas de infinitivo, gerúndio e particípio.",
      macete: "Sem conjunção e com forma nominal? Reduzida. Desenvolva para classificar.",
      erroComum: "Não reconhecer subordinação quando falta o conectivo.",
      comoBancaPensa: "Item correto que ensina o procedimento de conversão."
    }
  },
  {
    id: "PT-122", disciplina: "Língua Portuguesa", assunto: "Orações subordinadas", subassunto: "Pronome relativo",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 95, probReaparecer: 0.78,
    enunciado: "O vocábulo \"que\" introduz oração subordinada adjetiva quando funciona como pronome relativo, retomando um termo antecedente, e oração substantiva quando atua como conjunção integrante, sem retomar termo algum.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "pronome relativo ... retomando um termo antecedente ... conjunção integrante",
    cognitivo: {
      motivo: "Contraexemplo: o critério que distingue os dois 'que', apresentado corretamente.",
      palavraCritica: "sem retomar termo algum",
    },
    comentario: {
      resolucao: "CERTO. É o critério decisivo. Em \"o laudo QUE chegou\", o \"que\" retoma \"laudo\" e pode ser substituído por \"o qual\" — é relativo, e a oração é adjetiva. Em \"Afirmo QUE o laudo chegou\", o \"que\" não retoma nada e não admite \"o qual\" — é conjunção integrante, e a oração é substantiva. O teste da substituição por \"o qual\" resolve praticamente todos os casos.",
      fundamento: "Gramática normativa — pronome relativo e conjunção integrante.",
      macete: "Cabe 'o qual'? Relativo, adjetiva. Não cabe? Integrante, substantiva.",
      erroComum: "Classificar a oração pelo conectivo, sem testar se há antecedente.",
      comoBancaPensa: "Apresenta corretamente a distinção que sustenta metade da análise do período composto."
    }
  },
  {
    id: "PT-123", disciplina: "Língua Portuguesa", assunto: "Orações subordinadas", subassunto: "Coordenada assindética",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.66,
    enunciado: "Em \"Chegou, examinou o local, redigiu o relatório\", as orações são coordenadas assindéticas, assim denominadas por não virem introduzidas por conjunção.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "assindéticas ... não virem introduzidas por conjunção",
    cognitivo: {
      motivo: "Contraexemplo: nomenclatura correta, num par (sindética/assindética) que a banca troca.",
      palavraCritica: "sem conjunção",
    },
    comentario: {
      resolucao: "CERTO. Assindética vem de \"a-\" (sem) mais \"síndeto\" (conjunção): orações coordenadas justapostas, separadas apenas por vírgula. As sindéticas, ao contrário, vêm com conjunção e recebem a classificação dela — aditiva, adversativa, alternativa, conclusiva ou explicativa. A etimologia resolve a memorização.",
      fundamento: "Gramática normativa — orações coordenadas sindéticas e assindéticas.",
      macete: "A- de ausência: assindética é sem conjunção.",
      erroComum: "Trocar os dois termos por não decompor a palavra.",
      comoBancaPensa: "Nomeia corretamente o membro do par que costuma inverter."
    }
  },
  {
    id: "PT-124", disciplina: "Língua Portuguesa", assunto: "Orações subordinadas", subassunto: "Oração principal",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.62,
    enunciado: "A oração principal é sempre a primeira do período e nunca pode aparecer interrompida pela oração subordinada.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "sempre a primeira ... nunca ... interrompida",
    cognitivo: {
      motivo: "Cobrar que a posição não define a oração principal.",
      palavraCritica: "sempre ... nunca",
    },
    comentario: {
      resolucao: "ERRADO. A principal define-se pela função — é a que tem a subordinada como termo dependente —, não pela posição. Em \"Quando o prazo terminar, o processo será arquivado\", a principal é a segunda. E ela pode vir interrompida: em \"O servidor que assinou o termo compareceu\", a subordinada adjetiva está encravada no meio da principal.",
      fundamento: "Gramática normativa — período composto por subordinação.",
      macete: "Principal não é a primeira: é a que manda. Pode até vir partida ao meio.",
      erroComum: "Identificar a principal pela ordem em que aparece.",
      comoBancaPensa: "Converte uma tendência de ordem em regra fixa, com dois absolutos."
    }
  },

  /* ===================== CRASE ===================== */
  {
    id: "PT-125", disciplina: "Língua Portuguesa", assunto: "Crase", subassunto: "Antes de verbo",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.86,
    enunciado: "Não ocorre crase antes de verbo no infinitivo, uma vez que o artigo feminino não antecede formas verbais.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "Não ocorre crase antes de verbo",
    cognitivo: {
      motivo: "Contraexemplo: regra categórica de crase que não comporta exceção.",
      palavraCritica: "não antecede formas verbais",
    },
    comentario: {
      resolucao: "CERTO. A crase é a fusão da preposição \"a\" com o artigo \"a\". Como o artigo não acompanha verbo, não há o que fundir: escreve-se \"começou a ganhar corpo\", \"disposto a colaborar\". A regra é absoluta e serve de atalho seguro — vendo verbo depois do \"a\", descarte o acento sem hesitar.",
      fundamento: "Gramática normativa — casos em que não ocorre crase.",
      macete: "Depois de 'a' veio verbo? Sem acento, sempre.",
      erroComum: "Marcar ERRADO por reflexo diante da negativa categórica.",
      comoBancaPensa: "Regra sem exceção enunciada de forma absoluta, o que gera desconfiança indevida."
    }
  },
  {
    id: "PT-126", disciplina: "Língua Portuguesa", assunto: "Crase", subassunto: "Regência que exige preposição",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.84,
    enunciado: "Em \"O servidor deve submeter-se às regras do regimento\", o acento grave justifica-se pela fusão da preposição exigida por \"submeter-se\" com o artigo definido feminino plural que antecede \"regras\".",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "preposição exigida ... artigo definido feminino plural",
    cognitivo: {
      motivo: "Cobrar os dois elementos que produzem a crase: regência e artigo.",
      palavraCritica: "fusão",
    },
    comentario: {
      resolucao: "CERTO. A crase exige os dois componentes. \"Submeter-se\" rege a preposição \"a\"; \"regras\" admite o artigo \"as\". A + as = às. Faltando qualquer um dos dois, não há acento — é por isso que a análise de crase começa sempre pela regência do termo anterior, e não pela palavra que vem depois do \"a\".",
      fundamento: "Gramática normativa — formação da crase.",
      macete: "Crase = preposição exigida + artigo aceito. Faltou um, não tem acento.",
      erroComum: "Marcar ERRADO por desconfiar de item que explica a própria regra.",
      comoBancaPensa: "Descreve corretamente o mecanismo, num tema em que o candidato espera pegadinha."
    }
  },
  {
    id: "PT-127", disciplina: "Língua Portuguesa", assunto: "Crase", subassunto: "Palavra masculina",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.78,
    enunciado: "Em \"O documento foi encaminhado a o setor competente\", exige-se o emprego do acento grave indicativo de crase, por haver preposição exigida pelo verbo \"encaminhar\".",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "exige-se o ... acento grave ... setor competente",
    cognitivo: {
      motivo: "Cobrar que a crase pressupõe termo feminino, ainda que haja preposição.",
      palavraCritica: "exige-se o emprego do acento grave",
    },
    comentario: {
      resolucao: "ERRADO. Há preposição, sim, mas \"setor\" é masculino: a fusão que ocorre é com o artigo masculino, resultando em \"ao setor\" — combinação, não crase. O acento grave marca a fusão de \"a\" preposição com \"a\" artigo feminino. Diante de palavra masculina, o correto é \"ao\", sem acento grave. A exceção conhecida é \"à moda de\" subentendido.",
      fundamento: "Gramática normativa — crase e gênero do termo regido.",
      macete: "Masculino leva AO. Crase é coisa de palavra feminina.",
      erroComum: "Concluir pela crase só porque o verbo exige preposição.",
      comoBancaPensa: "Apresenta metade do requisito (a preposição) como se bastasse."
    }
  },
  {
    id: "PT-128", disciplina: "Língua Portuguesa", assunto: "Crase", subassunto: "Crase facultativa",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade gramatical)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.8,
    enunciado: "O emprego do acento indicativo de crase é facultativo antes de nome próprio feminino de pessoa, antes de pronome possessivo feminino singular e depois da preposição \"até\".",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "nome próprio feminino ... pronome possessivo ... preposição \"até\"",
    cognitivo: {
      motivo: "Cobrar os três casos de crase facultativa, rol fechado e muito cobrado.",
      palavraCritica: "facultativo",
    },
    comentario: {
      resolucao: "CERTO. São exatamente esses três. A facultatividade decorre de o artigo ser opcional nesses contextos: pode-se dizer \"Refiro-me a Maria\" ou \"à Maria\"; \"Entreguei a minha chefe\" ou \"à minha chefe\"; \"Foi até a porta\" ou \"até à porta\". Sendo facultativo, nenhuma das formas pode ser apontada como erro — e é aí que a banca arma o item.",
      fundamento: "Gramática normativa — casos de crase facultativa.",
      macete: "Nome de mulher, possessivo feminino e 'até': tanto faz.",
      erroComum: "Apontar como erro o que a norma admite nas duas formas.",
      comoBancaPensa: "Item de rol fechado cuja armadilha correlata é declarar obrigatório o que é facultativo."
    }
  },
  {
    id: "PT-129", disciplina: "Língua Portuguesa", assunto: "Crase", subassunto: "Locuções adverbiais femininas",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade gramatical)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.82,
    enunciado: "Nas locuções adverbiais, prepositivas e conjuntivas formadas por palavra feminina, como \"às pressas\", \"à noite\" e \"à medida que\", emprega-se o acento grave ainda que não haja termo regente exigindo preposição.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "locuções ... palavra feminina ... ainda que não haja termo regente",
    cognitivo: {
      motivo: "Cobrar a crase nas locuções, que independe de regência.",
      palavraCritica: "ainda que não haja termo regente",
    },
    comentario: {
      resolucao: "CERTO. É regra própria: nas locuções femininas o acento é obrigatório por convenção, inclusive para desfazer ambiguidade com o masculino correspondente — compare \"à noite\" (locução) com \"a noite\" (sujeito). Vale para às claras, às escondidas, à vontade, à risca, à direita. Note que \"à noite\" leva acento mesmo sem verbo que exija preposição.",
      fundamento: "Gramática normativa — crase em locuções adverbiais femininas.",
      macete: "Locução feminina leva acento por convenção, não por regência.",
      erroComum: "Procurar o verbo regente e concluir que não há crase.",
      comoBancaPensa: "Item correto sobre a regra que foge ao mecanismo geral da crase."
    }
  },
  {
    id: "PT-130", disciplina: "Língua Portuguesa", assunto: "Crase", subassunto: "Antes de pronome",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.72,
    enunciado: "Ocorre crase antes de qualquer pronome feminino, razão pela qual se deve acentuar o \"a\" em construções como \"Entregou o ofício a ela\" e \"Referiu-se a esta servidora\".",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "qualquer pronome feminino ... \"a ela\" ... \"a esta\"",
    cognitivo: {
      motivo: "Cobrar que a maioria dos pronomes rejeita o artigo e, portanto, a crase.",
      palavraCritica: "qualquer pronome feminino",
    },
    comentario: {
      resolucao: "ERRADO. Pronomes pessoais e demonstrativos não admitem artigo, logo não há crase: \"a ela\", \"a esta\", \"a essa\". Há exceções pontuais — \"àquela\", \"àquele\", \"àquilo\", em que o \"a\" preposição se funde com a vogal inicial do demonstrativo; e os pronomes possessivos, de crase facultativa. Generalizar para \"qualquer pronome\" é o erro.",
      fundamento: "Gramática normativa — crase diante de pronomes.",
      macete: "A ela, a esta, a essa: sem acento. Àquela e àquilo: com.",
      erroComum: "Acentuar diante de pronome pessoal por ser feminino.",
      comoBancaPensa: "Estende a 'qualquer pronome' uma regra que vale só para alguns."
    }
  },
  {
    id: "PT-131", disciplina: "Língua Portuguesa", assunto: "Crase", subassunto: "Expressões de tempo",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.7,
    enunciado: "Em \"A audiência foi marcada para daqui a duas semanas\", o emprego do acento grave em \"a\" seria obrigatório, por tratar-se de expressão de tempo feminina.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "daqui a duas semanas ... acento grave ... obrigatório",
    cognitivo: {
      motivo: "Cobrar a distinção entre tempo futuro e tempo passado no emprego da crase.",
      palavraCritica: "expressão de tempo feminina",
    },
    comentario: {
      resolucao: "ERRADO. O critério não é o gênero, e sim a direção temporal. Indicando tempo FUTURO, não há crase: \"daqui a duas semanas\", \"daqui a pouco\". Indicando tempo PASSADO, usa-se \"há\": \"há duas semanas\". O acento grave em expressões temporais aparece em outros contextos, como \"às 14 horas\" e \"à noite\", que são locuções.",
      fundamento: "Gramática normativa — 'a' e 'há' em expressões de tempo.",
      macete: "Futuro é 'a'. Passado é 'há'. Daqui a pouco / há muito tempo.",
      erroComum: "Acentuar por ser expressão feminina, sem checar a direção temporal.",
      comoBancaPensa: "Oferece critério irrelevante (o gênero) para decidir um caso que se resolve pelo tempo."
    }
  },

  /* ===================== COLOCAÇÃO PRONOMINAL ===================== */
  {
    id: "PT-132", disciplina: "Língua Portuguesa", assunto: "Colocação pronominal", subassunto: "Próclise em oração subordinada",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade gramatical)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.85,
    enunciado: "A conjunção subordinativa atrai o pronome oblíquo átono, razão pela qual se impõe a próclise em \"Quando se instaurou o inquérito, os prazos passaram a correr\".",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "conjunção subordinativa atrai ... impõe a próclise",
    cognitivo: {
      motivo: "Cobrar a principal palavra atrativa — a conjunção subordinativa.",
      palavraCritica: "atrai",
    },
    comentario: {
      resolucao: "CERTO. Conjunção subordinativa é palavra atrativa e obriga a próclise: \"quando se instaurou\", nunca \"quando instaurou-se\". Somam-se às atrativas as palavras negativas, os advérbios sem pausa, os pronomes relativos, indefinidos e interrogativos, e as orações exclamativas e optativas.",
      fundamento: "Gramática normativa — colocação pronominal e palavras atrativas.",
      macete: "Oração subordinada puxa o pronome para antes do verbo.",
      erroComum: "Usar ênclise depois de conjunção subordinativa.",
      comoBancaPensa: "Item de regra fixa, muito cobrado em reescritura de trechos."
    }
  },
  {
    id: "PT-133", disciplina: "Língua Portuguesa", assunto: "Colocação pronominal", subassunto: "Início de período",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.8,
    enunciado: "Na norma-padrão, admite-se iniciar período com pronome oblíquo átono, como em \"Me parece que o prazo expirou\", desde que o verbo esteja no presente do indicativo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "iniciar período com pronome oblíquo átono ... desde que",
    cognitivo: {
      motivo: "Cobrar a vedação da próclise em início de período na norma-padrão.",
      palavraCritica: "desde que o verbo esteja no presente",
    },
    comentario: {
      resolucao: "ERRADO. A norma-padrão não admite pronome oblíquo átono iniciando período: o correto é \"Parece-me que o prazo expirou\". A condição inventada — presente do indicativo — não existe em regra alguma. A construção com próclise inicial é corrente na fala e aceita na variedade coloquial, mas reprovada na escrita formal.",
      fundamento: "Gramática normativa — vedação da próclise em início de período.",
      macete: "Não comece frase com me, te, se, lhe, o, a.",
      erroComum: "Transpor para a escrita formal um uso corrente na fala.",
      comoBancaPensa: "Cria uma condição de exceção para tornar aceitável o que a norma rejeita."
    }
  },
  {
    id: "PT-134", disciplina: "Língua Portuguesa", assunto: "Colocação pronominal", subassunto: "Mesóclise",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade gramatical)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.72,
    enunciado: "A mesóclise é empregada com verbos no futuro do presente e no futuro do pretérito, desde que não haja palavra atrativa que imponha a próclise.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "futuro do presente e no futuro do pretérito ... salvo palavra atrativa",
    cognitivo: {
      motivo: "Cobrar as duas condições da mesóclise: o tempo verbal e a ausência de atrativo.",
      palavraCritica: "desde que não haja palavra atrativa",
    },
    comentario: {
      resolucao: "CERTO. \"Far-se-á a perícia\" e \"far-se-ia a perícia\" exemplificam os dois tempos. Mas havendo palavra atrativa, a próclise prevalece: \"não se fará a perícia\", jamais \"não far-se-á\". A mesóclise é o único caso em que o pronome se encaixa no meio da forma verbal, entre o radical e a desinência.",
      fundamento: "Gramática normativa — mesóclise.",
      macete: "Futuro sem atrativo: mesóclise. Com atrativo: próclise vence.",
      erroComum: "Usar mesóclise mesmo diante de palavra negativa.",
      comoBancaPensa: "Item correto que cobra a ressalva, e não apenas a regra geral."
    }
  },
  {
    id: "PT-135", disciplina: "Língua Portuguesa", assunto: "Colocação pronominal", subassunto: "Palavra negativa",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.78,
    enunciado: "Em \"Nada se apurou na diligência\", o pronome está corretamente colocado, pois a palavra negativa \"nada\" exerce atração e impõe a próclise.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "palavra negativa ... atração ... próclise",
    cognitivo: {
      motivo: "Contraexemplo: colocação correta com palavra atrativa negativa.",
      palavraCritica: "exerce atração",
    },
    comentario: {
      resolucao: "CERTO. Palavras de sentido negativo — não, nada, ninguém, nunca, jamais, nenhum — atraem o pronome. \"Nada se apurou\" está correto; \"Nada apurou-se\" contraria a norma. Vale notar que a atração cessa se houver pausa entre a palavra negativa e o verbo.",
      fundamento: "Gramática normativa — palavras atrativas de sentido negativo.",
      macete: "Negativa perto do verbo puxa o pronome para antes.",
      erroComum: "Marcar ERRADO por desconfiar de item que valida a construção.",
      comoBancaPensa: "Confirma uma colocação correta, num tema em que o candidato espera achar erro."
    }
  },

  /* ===================== CONCORDÂNCIA ===================== */
  {
    id: "PT-136", disciplina: "Língua Portuguesa", assunto: "Concordância verbal", subassunto: "Sujeito posposto",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.83,
    enunciado: "Em \"Chegaram ao setor os documentos solicitados\", o verbo concorda corretamente com o sujeito \"os documentos solicitados\", ainda que este venha posposto.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "concorda ... com o sujeito ... posposto",
    cognitivo: {
      motivo: "Cobrar que a posposição do sujeito não altera a concordância.",
      palavraCritica: "ainda que este venha posposto",
    },
    comentario: {
      resolucao: "CERTO. A ordem inversa não dispensa a concordância: o verbo continua a concordar com o sujeito, esteja ele antes ou depois. \"Chegaram os documentos\" está correto; \"Chegou os documentos\" não. O erro é frequente porque a proximidade de um termo singular antes do verbo induz à concordância errada.",
      fundamento: "Gramática normativa — concordância verbal com sujeito posposto.",
      macete: "Ache o sujeito, não o que está mais perto do verbo.",
      erroComum: "Concordar com o termo imediatamente anterior ao verbo.",
      comoBancaPensa: "Valida uma construção correta em ordem inversa, que soa estranha ao ouvido."
    }
  },
  {
    id: "PT-137", disciplina: "Língua Portuguesa", assunto: "Concordância verbal", subassunto: "Expressão partitiva",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.76,
    enunciado: "Com sujeito formado por expressão partitiva seguida de substantivo no plural, como \"a maioria dos servidores\", exige-se obrigatoriamente o verbo no singular, sendo incorreta a concordância no plural.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "obrigatoriamente o verbo no singular ... incorreta ... no plural",
    cognitivo: {
      motivo: "Cobrar a facultatividade da concordância com expressões partitivas.",
      palavraCritica: "obrigatoriamente ... incorreta",
    },
    comentario: {
      resolucao: "ERRADO. A concordância é FACULTATIVA: \"A maioria dos servidores compareceu\" e \"A maioria dos servidores compareceram\" são ambas corretas. No primeiro caso concorda-se com o núcleo partitivo; no segundo, com o especificador plural, por concordância atrativa ou ideológica. O mesmo vale para grande parte de, metade de, uma porção de.",
      fundamento: "Gramática normativa — concordância com expressões partitivas.",
      macete: "A maioria compareceu / compareceram: as duas valem.",
      erroComum: "Reprovar como erro a forma que a norma admite.",
      comoBancaPensa: "Transforma uma facultatividade em obrigação e condena a alternativa válida."
    }
  },
  {
    id: "PT-138", disciplina: "Língua Portuguesa", assunto: "Concordância verbal", subassunto: "Verbo haver impessoal",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.85,
    enunciado: "Em \"Devem haver outras providências a adotar\", a locução verbal está corretamente flexionada, pois o auxiliar concorda com o termo plural que se segue.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "\"Devem haver\" ... auxiliar concorda com o termo plural",
    cognitivo: {
      motivo: "Cobrar a transmissão da impessoalidade ao auxiliar da locução.",
      palavraCritica: "auxiliar concorda",
    },
    comentario: {
      resolucao: "ERRADO. \"Haver\" existencial é impessoal e não tem sujeito; \"outras providências\" é objeto direto, não sujeito. A impessoalidade transmite-se ao auxiliar, de modo que o correto é \"DEVE haver outras providências\". Trata-se de erro muito frequente justamente por soar natural na fala.",
      fundamento: "Gramática normativa — impessoalidade do verbo haver em locuções verbais.",
      macete: "Deve haver, pode haver, vai haver. Sempre no singular.",
      erroComum: "Flexionar o auxiliar pelo termo que parece sujeito.",
      comoBancaPensa: "Explora a construção que a fala consagrou e a norma reprova."
    }
  },
  {
    id: "PT-139", disciplina: "Língua Portuguesa", assunto: "Concordância nominal", subassunto: "Anexo, incluso e obrigado",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade gramatical)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.74,
    enunciado: "As palavras \"anexo\", \"incluso\" e \"obrigado\" funcionam como adjetivos e devem concordar em gênero e número com o substantivo a que se referem, razão pela qual se escreve \"seguem anexas as certidões\".",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "adjetivos ... concordar em gênero e número ... \"anexas as certidões\"",
    cognitivo: {
      motivo: "Cobrar a concordância dessas palavras, de uso corrente em redação oficial.",
      palavraCritica: "concordar em gênero e número",
    },
    comentario: {
      resolucao: "CERTO. São adjetivos e variam: \"documento anexo\", \"certidões anexas\", \"cópia inclusa\". \"Obrigado\" segue a mesma lógica — uma mulher diz \"obrigada\". A forma invariável \"em anexo\" é locução adverbial e não varia, mas é a exceção, e não a regra. Item de aplicação direta em ofícios e memorandos.",
      fundamento: "Gramática normativa — concordância nominal de 'anexo', 'incluso' e 'obrigado'.",
      macete: "Anexo é adjetivo: varia. 'Em anexo' é locução: não varia.",
      erroComum: "Deixar 'anexo' invariável por analogia com 'em anexo'.",
      comoBancaPensa: "Item correto com aplicação imediata na rotina administrativa."
    }
  },
  {
    id: "PT-140", disciplina: "Língua Portuguesa", assunto: "Concordância nominal", subassunto: "É proibido / é necessário",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.7,
    enunciado: "Nas construções do tipo \"é proibido\" e \"é necessário\", o predicativo permanece invariável quando o sujeito não vem determinado por artigo, como em \"É proibida entrada de pessoas não autorizadas\".",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "permanece invariável ... \"É proibida entrada\"",
    cognitivo: {
      motivo: "Cobrar a regra e detectar a incoerência entre o enunciado e o exemplo.",
      palavraCritica: "É proibida entrada",
    },
    comentario: {
      resolucao: "ERRADO. A regra enunciada está certa — sem determinante, o predicativo fica invariável —, mas o EXEMPLO a contraria: deveria ser \"É PROIBIDO entrada de pessoas não autorizadas\". Com artigo, haveria concordância: \"É proibida A entrada\". O item se autodesmente, e detectar isso é o que ele cobra.",
      fundamento: "Gramática normativa — concordância nominal em 'é proibido', 'é necessário', 'é bom'.",
      macete: "Sem artigo, invariável: é proibido entrada. Com artigo, concorda: é proibida a entrada.",
      erroComum: "Validar o item pela regra correta, sem conferir o exemplo.",
      comoBancaPensa: "Enuncia a regra corretamente e a ilustra com exemplo que a viola."
    }
  },

  /* ===================== SEMÂNTICA ===================== */
  {
    id: "PT-141", disciplina: "Língua Portuguesa", assunto: "Semântica", subassunto: "Hiperônimo e hipônimo",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.74,
    enunciado: "Na relação entre \"crime\" e \"furto\", o primeiro é hipônimo do segundo, uma vez que designa a categoria mais restrita.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "\"crime\" ... hipônimo ... categoria mais restrita",
    cognitivo: {
      motivo: "Cobrar a direção da relação hiperônimo/hipônimo.",
      palavraCritica: "hipônimo ... mais restrita",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido nas duas pontas. \"Crime\" é HIPERÔNIMO — termo de sentido mais amplo, que engloba \"furto\". \"Furto\" é o hipônimo, de sentido mais específico. O prefixo entrega: hiper- é o que está acima, hipo- é o que está abaixo, como em hipertensão e hipotensão.",
      fundamento: "Semântica — relações de hiperonímia e hiponímia.",
      macete: "Hiper é maior e engloba. Hipo é menor e está contido.",
      erroComum: "Trocar os dois termos por não associar os prefixos.",
      comoBancaPensa: "Inverte a relação e ainda descreve erradamente a amplitude, dobrando o erro."
    }
  },
  {
    id: "PT-142", disciplina: "Língua Portuguesa", assunto: "Semântica", subassunto: "Sinonímia em contexto",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.8,
    enunciado: "Palavras registradas como sinônimas em dicionário podem ser permutadas em qualquer contexto sem alteração de sentido, já que a sinonímia é relação absoluta entre vocábulos.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "qualquer contexto ... relação absoluta",
    cognitivo: {
      motivo: "Cobrar o caráter contextual da sinonímia, princípio das questões de substituição.",
      palavraCritica: "qualquer contexto ... absoluta",
    },
    comentario: {
      resolucao: "ERRADO. A sinonímia perfeita praticamente não existe: os sinônimos diferem em registro, conotação, colocação e regência. \"Casa\" e \"lar\" são sinônimos, mas não se diz \"lar comercial\". Em prova, é exatamente aí que a banca opera — propõe substituição por sinônimo dicionarizado que, no contexto, altera o sentido, quebra a regência ou muda o registro.",
      fundamento: "Semântica — sinonímia e adequação contextual.",
      macete: "Sinônimo é aproximação, não igualdade. Sempre teste no contexto.",
      erroComum: "Aceitar substituição por confiar no dicionário, sem reler a frase.",
      comoBancaPensa: "Afirma como absoluta uma relação que é sempre contextual."
    }
  },
  {
    id: "PT-143", disciplina: "Língua Portuguesa", assunto: "Semântica", subassunto: "Denotação e conotação",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 75, probReaparecer: 0.72,
    enunciado: "Em \"O relatório abriu as portas para novas investigações\", a expressão destacada foi empregada em sentido conotativo, pois não designa a ação física de abrir portas.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "sentido conotativo ... não designa a ação física",
    cognitivo: {
      motivo: "Contraexemplo: identificação correta da conotação, par que a banca inverte.",
      palavraCritica: "conotativo",
    },
    comentario: {
      resolucao: "CERTO. Conotação é o emprego figurado, em que a palavra se afasta do sentido literal. \"Abrir as portas\" significa aqui criar oportunidades, não movimentar uma porta. Denotação seria o sentido literal e dicionarizado. A distinção é cobrada em interpretação e também em itens de reescritura, porque a paráfrase precisa preservar o sentido figurado.",
      fundamento: "Semântica — denotação e conotação.",
      macete: "Denotação é o sentido do dicionário. Conotação é o figurado.",
      erroComum: "Trocar os dois termos por semelhança sonora.",
      comoBancaPensa: "Classifica corretamente um emprego figurado, num par que costuma permutar."
    }
  },
  {
    id: "PT-144", disciplina: "Língua Portuguesa", assunto: "Semântica", subassunto: "Ambiguidade",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.68,
    enunciado: "O período \"O delegado informou ao escrivão que seu prazo havia expirado\" apresenta ambiguidade decorrente do pronome possessivo, defeito que se corrige pela substituição de \"seu\" por \"dele\" ou \"dele próprio\", conforme o referente pretendido.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "ambiguidade ... pronome possessivo ... substituição",
    cognitivo: {
      motivo: "Cobrar a ambiguidade por possessivo de terceira pessoa e sua correção.",
      palavraCritica: "conforme o referente pretendido",
    },
    comentario: {
      resolucao: "CERTO. \"Seu\" pode remeter ao delegado ou ao escrivão, e nada no período resolve. O possessivo de terceira pessoa é ambíguo por natureza quando há dois referentes possíveis do mesmo gênero e número. A correção passa por explicitar: \"o prazo dele\", \"o próprio prazo\" ou reescrever nomeando o referente. É defeito de clareza, não erro gramatical — a frase está bem formada.",
      fundamento: "Semântica e redação oficial — ambiguidade por pronome possessivo.",
      macete: "Dois candidatos a dono e um 'seu' no meio: ambiguidade.",
      erroComum: "Não reconhecer ambiguidade em frase gramaticalmente correta.",
      comoBancaPensa: "Item correto que exige separar clareza de correção gramatical."
    }
  },

];

QUESTOES.push(...QUESTOES_LOTE71);
