/* =====================================================================
   QUESTLAB — Lote 70: FISIOTERAPIA AQUÁTICA (hidroterapia)
   Primeiro lote da disciplina depois da correção de escopo: o edital não
   se limita à saúde da mulher, como este projeto registrava por engano.
   O item 16.2.4, CARGO 5, cobra fisioterapia geral, e a hidroterapia é
   nomeada expressamente no tópico 6, ao lado de massoterapia,
   mecanoterapia, crioterapia, eletroterapia e termoterapia.

   Material de curso pós-edital (aula dedicada de 57 páginas) serviu de
   mapa dos recortes. Todos os itens foram redigidos do zero, em C/E no
   padrão CEBRASPE, e conferidos contra os princípios físicos e a
   literatura da área (Arquimedes, Pascal, Bad Ragaz, Halliwick).

   Cobertura: evolução histórica; os cinco princípios físicos da imersão
   (flutuabilidade, densidade relativa, pressão hidrostática, viscosidade
   e termodinâmica); alterações fisiológicas em repouso e em exercício
   nos sistemas cardiovascular, respiratório, renal, nervoso, endócrino e
   musculoesquelético; temperaturas terapêuticas; indicações e
   contraindicações; crenoterapia, termalismo e talassoterapia;
   estrutura da piscina; método dos anéis de Bad Ragaz; método Halliwick
   com seus quatro princípios, três níveis e programa de dez pontos.

   40 itens (FIS-001 a FIS-040): 25 CERTO / 15 ERRADO, dificuldade 3 em 36.
   Cobre o bloco aquático; os demais tópicos do edital — provas de função
   muscular, cinesiologia, marcha, órteses e próteses, eletrotermoterapia,
   neuro, ortopedia, cardio, pneumo e geriatria — seguem descobertos e
   exigem lotes próprios.

   Tentei distribuir os padrões já na redação, para evitar o
   rebalanceamento a posteriori dos últimos lotes. Não bastou:
   "literalidade" ainda chegou a 90,1% CERTO e dez itens tiveram de ser
   retagueados. O sintoma é conhecido e está documentado em DNA_BANCA
   (js/data.js) — item tecnicamente correto tende a virar "literalidade",
   e é isso que enviesa o padrão no banco inteiro.
   ===================================================================== */

const QUESTOES_SESAUAL_LOTE70 = [

  /* ===================== HISTÓRICO E CONCEITOS ===================== */
  {
    id: "FIS-001", disciplina: "Fisioterapia", assunto: "Fisioterapia aquática", subassunto: "Evolução histórica",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.6,
    enunciado: "O termo hidroterapia deriva do grego, da junção dos radicais que significam água e cura, e designa o uso terapêutico da água em seus diferentes estados físicos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "água e cura ... diferentes estados físicos",
    cognitivo: {
      motivo: "Fixar o conceito e a amplitude do recurso, que não se limita à imersão em piscina.",
      palavraCritica: "diferentes estados físicos",
    },
    comentario: {
      resolucao: "CERTO. Hidroterapia vem de hydor (água) e therapeia (cura). A definição abrange os três estados físicos: líquido (imersão, duchas, compressas), gasoso (vaporização, inalação) e sólido (crioterapia com gelo). Restringir o conceito à piscina aquecida é o erro conceitual mais comum da matéria.",
      fundamento: "Conceito de hidroterapia e fisioterapia aquática.",
      macete: "Hidroterapia é água em qualquer estado: líquida, gasosa ou sólida.",
      erroComum: "Reduzir hidroterapia a exercício em piscina aquecida.",
      comoBancaPensa: "Item conceitual que estabelece a amplitude antes das aplicações específicas."
    }
  },
  {
    id: "FIS-002", disciplina: "Fisioterapia", assunto: "Fisioterapia aquática", subassunto: "Modalidades de uso da água",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.65,
    enunciado: "Denomina-se talassoterapia o uso terapêutico de águas minerais naturais ricas em substâncias químicas, ao passo que a crenoterapia designa o emprego da água do mar com finalidade terapêutica.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "talassoterapia ... águas minerais ... crenoterapia ... água do mar",
    cognitivo: {
      motivo: "Cobrar três modalidades de nomes próximos, que a banca permuta.",
      palavraCritica: "talassoterapia ... crenoterapia",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. CRENOTERAPIA é a imersão em águas minerais naturais; TALASSOTERAPIA é o uso da água do mar — de thalassa, mar em grego. Completa o trio o TERMALISMO, que é o uso terapêutico de águas termais.",
      fundamento: "Modalidades de hidroterapia — crenoterapia, talassoterapia e termalismo.",
      macete: "Thalassa = mar. Creno = fonte/nascente mineral. Termal = quente.",
      erroComum: "Trocar os dois termos por não conhecer a raiz grega.",
      comoBancaPensa: "Permuta dois termos técnicos raros, apostando na memorização superficial."
    }
  },
  {
    id: "FIS-003", disciplina: "Fisioterapia", assunto: "Fisioterapia aquática", subassunto: "Objetivos terapêuticos",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.68,
    enunciado: "A fisioterapia aquática presta-se exclusivamente ao relaxamento muscular e ao alívio da dor, não sendo recurso adequado para ganho de força muscular, que exige sobrecarga possível apenas no ambiente terrestre.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "exclusivamente ao relaxamento ... não sendo recurso adequado para ganho de força",
    cognitivo: {
      motivo: "Cobrar o uso da viscosidade como resistência, que permite fortalecimento na água.",
      palavraCritica: "exclusivamente ... não sendo adequado para ganho de força",
    },
    comentario: {
      resolucao: "ERRADO. A água oferece resistência em todas as direções por sua viscosidade, e essa resistência é graduável pela velocidade do movimento e pela área projetada do segmento. Além disso, movimentos executados contra o empuxo — em direção ao fundo — exigem trabalho muscular. Ganho de força, amplitude de movimento, equilíbrio e coordenação estão entre os objetivos consagrados do recurso.",
      fundamento: "Princípios físicos aplicados ao exercício aquático — viscosidade e empuxo como resistência.",
      macete: "Na água dá para fortalecer: a resistência vem da viscosidade e do empuxo.",
      erroComum: "Associar meio aquático apenas a relaxamento e descarga de peso.",
      comoBancaPensa: "Restringe os objetivos do recurso a um só, negando o que é sua aplicação mais estudada."
    }
  },
  {
    id: "FIS-004", disciplina: "Fisioterapia", assunto: "Fisioterapia aquática", subassunto: "Temperatura da piscina terapêutica",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.82,
    enunciado: "A temperatura considerada ideal para a piscina terapêutica situa-se entre 29 °C e 34 °C, faixa que favorece o alívio da dor e o relaxamento sem sobrecarregar o sistema cardiovascular.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "entre 29 °C e 34 °C",
    cognitivo: {
      motivo: "Contraexemplo: faixa numérica exata e verdadeira, no formato em que a banca costuma alterá-la.",
      palavraCritica: "29 °C e 34 °C",
    },
    comentario: {
      resolucao: "CERTO. A faixa de 29 °C a 34 °C é a referência para a piscina terapêutica. Água acima disso sobrecarrega o sistema cardiovascular e dificulta a termorregulação; abaixo, aumenta o tônus e reduz o relaxamento. Note que, para exercício de maior intensidade, admite-se faixa mais ampla e mais fria, justamente para evitar superaquecimento.",
      fundamento: "Parâmetros de temperatura em fisioterapia aquática.",
      macete: "Piscina terapêutica: 29 a 34 °C. Quanto mais intenso o exercício, mais fria a água.",
      erroComum: "Marcar ERRADO por desconfiança de qualquer faixa numérica.",
      comoBancaPensa: "Traz o intervalo correto para separar quem estudou de quem rejeita números por precaução."
    }
  },
  {
    id: "FIS-005", disciplina: "Fisioterapia", assunto: "Fisioterapia aquática", subassunto: "Contraindicações",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.79,
    enunciado: "Pacientes em vigência de processo inflamatório agudo beneficiam-se particularmente da imersão em água aquecida, uma vez que o calor acelera a resolução do quadro inflamatório.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "processo inflamatório agudo ... água aquecida ... acelera a resolução",
    cognitivo: {
      motivo: "Cobrar a contraindicação do calor na fase aguda, princípio geral da termoterapia.",
      palavraCritica: "beneficiam-se ... água aquecida",
    },
    comentario: {
      resolucao: "ERRADO. Na fase inflamatória aguda o calor é contraindicado: a vasodilatação aumenta o extravasamento e pode agravar edema e dor. O recurso indicado é o frio — crioterapia —, que promove vasoconstrição, reduz o metabolismo local e limita a resposta inflamatória aguda. A imersão em água aquecida fica reservada às fases subaguda e crônica.",
      fundamento: "Termoterapia e crioterapia — efeitos fisiológicos na fase inflamatória aguda.",
      macete: "Agudo é frio. Crônico é calor.",
      erroComum: "Aplicar calor por associar conforto a benefício.",
      comoBancaPensa: "Inverte a indicação térmica na fase em que o erro tem consequência clínica real."
    }
  },
  {
    id: "FIS-006", disciplina: "Fisioterapia", assunto: "Fisioterapia aquática", subassunto: "Contraindicações",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.72,
    enunciado: "Constituem contraindicações à fisioterapia aquática a incontinência urinária ou fecal, o uso de sondas e cateteres e o descontrole da pressão arterial, bem como a insuficiência cardíaca descompensada.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "incontinência ... sondas e cateteres ... descontrole da pressão arterial ... insuficiência cardíaca",
    cognitivo: {
      motivo: "Contraexemplo: quatro cláusulas encadeadas, todas verdadeiras, no formato em que a banca planta uma falsa.",
      palavraCritica: "bem como a insuficiência cardíaca descompensada",
    },
    comentario: {
      resolucao: "CERTO. As quatro procedem. Incontinência e dispositivos invasivos contraindicam pela contaminação da água e risco de infecção. Descontrole pressórico e insuficiência cardíaca descompensada contraindicam porque a pressão hidrostática desloca cerca de 900 mL de sangue da periferia para o tórax, aumentando o retorno venoso e a sobrecarga cardíaca — exatamente o que o coração descompensado não tolera.",
      fundamento: "Contraindicações à imersão terapêutica.",
      macete: "O que contamina a água e o que o coração não aguenta: fora da piscina.",
      erroComum: "Desconfiar da última cláusula e marcar ERRADO sem apontar erro concreto.",
      comoBancaPensa: "Encadeia contraindicações verdadeiras no formato em que costuma esconder uma falsa."
    }
  },
  {
    id: "FIS-007", disciplina: "Fisioterapia", assunto: "Fisioterapia aquática", subassunto: "Evolução histórica",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de sujeito)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.52,
    enunciado: "O tanque de Hubbard, equipamento desenvolvido no século XX para imersão terapêutica, foi concebido por Hipócrates, a quem também se atribui a primeira descrição do uso da água no tratamento de reumatismos.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "tanque de Hubbard ... concebido por Hipócrates",
    cognitivo: {
      motivo: "Cobrar a cronologia, com anacronismo evidente para quem organiza a linha do tempo.",
      palavraCritica: "concebido por Hipócrates",
    },
    comentario: {
      resolucao: "ERRADO. Há anacronismo. Hipócrates, por volta de 500 a.C., de fato mencionava o uso da água para tratar reumatismos — essa parte procede. Mas o tanque de Hubbard é equipamento do século XX, e nada tem a ver com ele. A banca acopla uma informação verdadeira a uma atribuição impossível.",
      fundamento: "História da hidroterapia — Hipócrates e o tanque de Hubbard.",
      macete: "Confira a data antes do nome: 500 a.C. não inventa equipamento do século XX.",
      erroComum: "Validar o item pela primeira metade, que é verdadeira.",
      comoBancaPensa: "Atribui a um personagem antigo uma criação moderna, contando com a leitura parcial."
    }
  },
  {
    id: "FIS-008", disciplina: "Fisioterapia", assunto: "Fisioterapia aquática", subassunto: "Evolução histórica",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.5,
    enunciado: "A epidemia de poliomielite e as Guerras Mundiais impulsionaram o desenvolvimento da hidroterapia, ao evidenciarem o potencial da imersão para a reabilitação de pacientes com grave limitação motora e para a manutenção do condicionamento físico.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "poliomielite ... Guerras Mundiais ... reabilitação ... condicionamento físico",
    cognitivo: {
      motivo: "Cobrar os marcos que consolidaram a hidroterapia como recurso de reabilitação.",
      palavraCritica: "grave limitação motora",
    },
    comentario: {
      resolucao: "CERTO. Durante a epidemia de poliomielite, observou-se que pacientes cadeirantes recuperavam movimento parcial dos membros inferiores quando imersos — o alívio de carga permitia movimento impossível em terra. As Guerras Mundiais somaram a demanda por reabilitação de feridos e manutenção do condicionamento. São os dois marcos que transformaram a prática milenar em recurso sistematizado.",
      fundamento: "História da fisioterapia aquática — século XX.",
      macete: "Pólio e guerras: foi quando a água virou reabilitação de verdade.",
      erroComum: "Ignorar os marcos do século XX e ficar só na Antiguidade.",
      comoBancaPensa: "Item correto que cobra a compreensão do porquê, e não só a data."
    }
  },

  /* ===================== PRINCÍPIOS FÍSICOS ===================== */
  {
    id: "FIS-009", disciplina: "Fisioterapia", assunto: "Princípios físicos da imersão", subassunto: "Flutuabilidade — princípio de Arquimedes",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.88,
    enunciado: "Segundo o princípio de Arquimedes, o corpo imerso total ou parcialmente em um fluido sofre a ação de uma força de empuxo, dirigida de baixo para cima, de intensidade igual ao peso do volume de fluido deslocado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "empuxo ... igual ao peso do volume de fluido deslocado",
    cognitivo: {
      motivo: "Cobrar o enunciado do princípio que fundamenta toda a fisioterapia aquática.",
      palavraCritica: "peso do volume de fluido deslocado",
    },
    comentario: {
      resolucao: "CERTO. É o enunciado clássico de Arquimedes. O empuxo é força de sentido oposto à gravidade, e sua intensidade equivale ao peso do fluido deslocado — daí quanto maior o volume submerso, maior a sustentação. É esse princípio que explica a descarga de peso articular e permite exercitar articulações que não suportariam carga em terra.",
      fundamento: "Princípio de Arquimedes aplicado à imersão.",
      macete: "Empuxo empurra para cima, e vale o peso da água que o corpo desloca.",
      erroComum: "Confundir empuxo com pressão hidrostática.",
      comoBancaPensa: "Item de literalidade física, base para as aplicações clínicas seguintes."
    }
  },
  {
    id: "FIS-010", disciplina: "Fisioterapia", assunto: "Princípios físicos da imersão", subassunto: "Flutuabilidade como resistência",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.8,
    enunciado: "Movimentos executados em direção ao fundo da piscina, contrários ao empuxo, são classificados como assistidos pela flutuação, ao passo que movimentos em direção à superfície configuram resistência ao paciente.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "em direção ao fundo ... assistidos ... em direção à superfície ... resistência",
    cognitivo: {
      motivo: "Cobrar a classificação dos exercícios quanto ao empuxo, base da progressão em hidroterapia.",
      palavraCritica: "contrários ao empuxo ... assistidos",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. O empuxo empurra para CIMA: mover-se em direção à superfície é movimento ASSISTIDO pela flutuação; mover-se em direção ao fundo é movimento RESISTIDO, pois se trabalha contra o empuxo. Há ainda o movimento em apoio, paralelo à superfície. Essa classificação organiza a progressão terapêutica: começa-se pelo assistido e avança-se para o resistido.",
      fundamento: "Classificação dos exercícios aquáticos quanto à relação com o empuxo.",
      macete: "Subir é fácil (assistido); descer é difícil (resistido). O empuxo empurra para cima.",
      erroComum: "Trocar assistido e resistido por não visualizar o sentido do empuxo.",
      comoBancaPensa: "Inverte uma classificação cuja lógica física é simples, mas raramente revisada."
    }
  },
  {
    id: "FIS-011", disciplina: "Fisioterapia", assunto: "Princípios físicos da imersão", subassunto: "Densidade relativa",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.84,
    enunciado: "Adotando-se a densidade da água como 1,0, corpos com densidade relativa inferior a 1,0 tendem a flutuar, corpos com densidade relativa superior a 1,0 tendem a afundar, e o corpo humano, cuja densidade relativa média situa-se entre 0,87 e 0,97, tende à flutuação.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "inferior a 1,0 ... flutuar ... entre 0,87 e 0,97",
    cognitivo: {
      motivo: "Contraexemplo: três valores numéricos exatos e corretos.",
      palavraCritica: "0,87 e 0,97",
    },
    comentario: {
      resolucao: "CERTO. A densidade relativa é a razão entre a densidade do corpo e a da água. Abaixo de 1,0 flutua; acima, afunda; exatamente 1,0 permanece em equilíbrio logo abaixo da superfície. O corpo humano, entre 0,87 e 0,97, tende a flutuar — mas esse valor médio varia conforme composição corporal.",
      fundamento: "Densidade relativa (gravidade específica) aplicada à imersão.",
      macete: "Menor que 1 flutua. Maior que 1 afunda. Igual a 1 fica submerso em equilíbrio.",
      erroComum: "Marcar ERRADO por não lembrar a faixa exata do corpo humano.",
      comoBancaPensa: "Reúne três números corretos, apostando que o candidato duvide de pelo menos um."
    }
  },
  {
    id: "FIS-012", disciplina: "Fisioterapia", assunto: "Princípios físicos da imersão", subassunto: "Fatores que alteram a densidade relativa",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.76,
    enunciado: "Indivíduos com maior proporção de tecido adiposo apresentam densidade relativa mais elevada e, portanto, maior tendência a afundar, ao passo que maior massa óssea e muscular reduz a densidade relativa e favorece a flutuação.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "tecido adiposo ... densidade relativa mais elevada ... massa óssea e muscular ... favorece a flutuação",
    cognitivo: {
      motivo: "Cobrar a relação entre composição corporal e flutuação, pela inversão.",
      palavraCritica: "tecido adiposo ... afundar",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. O tecido adiposo é MENOS denso que a água e REDUZ a densidade relativa, favorecendo a flutuação. Osso e músculo são MAIS densos e aumentam a densidade relativa, favorecendo o afundamento. É por isso que, em geral, indivíduos com maior massa muscular e óssea precisam de mais suporte de flutuadores.",
      fundamento: "Composição corporal e densidade relativa.",
      macete: "Gordura boia, músculo e osso afundam.",
      erroComum: "Trocar a densidade dos tecidos por raciocinar apenas com o peso total.",
      comoBancaPensa: "Inverte a relação entre composição corporal e flutuação, que é contraintuitiva para quem pensa só em peso."
    }
  },
  {
    id: "FIS-013", disciplina: "Fisioterapia", assunto: "Princípios físicos da imersão", subassunto: "Densidade relativa em condições clínicas",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.66,
    enunciado: "O paciente com hipertonia tende a apresentar aumento da densidade relativa no segmento acometido, com tendência ao afundamento, enquanto o paciente hipotônico tende à flutuação.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "hipertonia ... aumento da densidade relativa ... hipotônico ... flutuação",
    cognitivo: {
      motivo: "Cobrar a aplicação clínica do princípio da densidade a condições neurológicas.",
      palavraCritica: "no segmento acometido",
    },
    comentario: {
      resolucao: "CERTO. No músculo hipertônico as fibras estão contraídas e ocupam menor volume para a mesma massa, o que eleva a densidade relativa do segmento e o faz afundar. No hipotônico ocorre o oposto. A consequência prática é direta: o posicionamento dos flutuadores precisa considerar a assimetria de tônus, sob pena de o paciente rotacionar involuntariamente na água.",
      fundamento: "Densidade relativa e alterações de tônus muscular.",
      macete: "Músculo contraído é mais denso: o lado espástico tende a afundar.",
      erroComum: "Ignorar que a densidade varia entre segmentos do mesmo paciente.",
      comoBancaPensa: "Item correto que liga princípio físico a condição neurológica concreta."
    }
  },
  {
    id: "FIS-014", disciplina: "Fisioterapia", assunto: "Princípios físicos da imersão", subassunto: "Pressão hidrostática — lei de Pascal",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.86,
    enunciado: "De acordo com a lei de Pascal, a pressão hidrostática exercida sobre o corpo imerso distribui-se de forma uniforme sobre toda a superfície submersa e é diretamente proporcional à profundidade de imersão e à densidade do fluido.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "uniforme ... proporcional à profundidade ... densidade do fluido",
    cognitivo: {
      motivo: "Cobrar o enunciado da lei de Pascal e as duas variáveis de que a pressão depende.",
      palavraCritica: "proporcional à profundidade",
    },
    comentario: {
      resolucao: "CERTO. A distribuição uniforme em cada nível de profundidade e o aumento proporcional com a profundidade são as duas características cobradas. A consequência clínica é direta: os pés, mais profundos, recebem maior pressão que o tórax, o que produz um gradiente que favorece o retorno venoso e linfático dos membros inferiores.",
      fundamento: "Lei de Pascal aplicada à imersão.",
      macete: "Quanto mais fundo, mais pressão. E ela aperta por igual em cada nível.",
      erroComum: "Supor que a pressão é igual em toda a extensão vertical do corpo.",
      comoBancaPensa: "Item de literalidade física com aplicação clínica imediata."
    }
  },
  {
    id: "FIS-015", disciplina: "Fisioterapia", assunto: "Princípios físicos da imersão", subassunto: "Pressão hidrostática — aplicação clínica",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.78,
    enunciado: "A pressão hidrostática favorece sempre o retorno venoso e a redução de edema nos membros inferiores do paciente imerso em posição vertical, razão pela qual a imersão é recurso útil no manejo de edemas periféricos.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "favorece sempre o retorno venoso ... redução de edema",
    cognitivo: {
      motivo: "Contraexemplo: um 'sempre' que decorre necessariamente da física da imersão vertical.",
      palavraCritica: "sempre",
    },
    comentario: {
      resolucao: "CERTO. O advérbio procede porque o efeito é físico, não probabilístico: na imersão vertical, a pressão é maior nos segmentos mais profundos, criando gradiente que empurra fluidos da periferia para o centro. Por isso a imersão funciona como uma compressão externa graduada. O cuidado clínico não está no efeito, e sim na tolerância cardíaca a esse aumento de retorno venoso.",
      fundamento: "Pressão hidrostática e retorno venoso na imersão vertical.",
      macete: "A água aperta mais embaixo: o edema é empurrado para cima.",
      erroComum: "Marcar ERRADO por reflexo diante de 'sempre'.",
      comoBancaPensa: "Usa quantificador universal num efeito que a física garante."
    }
  },
  {
    id: "FIS-016", disciplina: "Fisioterapia", assunto: "Princípios físicos da imersão", subassunto: "Viscosidade — fluxo laminar e turbulento",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.81,
    enunciado: "Movimentos executados em alta velocidade na água mantêm as camadas moleculares alinhadas e produzem fluxo laminar, com menor resistência, ao passo que movimentos lentos desorganizam essas camadas e geram fluxo turbulento.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "alta velocidade ... fluxo laminar ... movimentos lentos ... turbulento",
    cognitivo: {
      motivo: "Cobrar a relação entre velocidade e tipo de fluxo, invertida.",
      palavraCritica: "alta velocidade ... laminar",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. Movimentos LENTOS mantêm as camadas alinhadas e produzem fluxo LAMINAR, de menor resistência. Movimentos RÁPIDOS agitam as camadas e produzem fluxo TURBULENTO, com formação de redemoinhos na esteira do segmento e maior arrasto. É essa relação que permite graduar a resistência apenas mudando a velocidade do exercício.",
      fundamento: "Viscosidade, fluxo laminar e turbulento no meio aquático.",
      macete: "Devagar é laminar e fácil. Rápido é turbulento e difícil.",
      erroComum: "Trocar os dois tipos de fluxo por não associar velocidade a turbulência.",
      comoBancaPensa: "Inverte a relação que fundamenta a progressão de carga na água."
    }
  },
  {
    id: "FIS-017", disciplina: "Fisioterapia", assunto: "Princípios físicos da imersão", subassunto: "Progressão de resistência",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.83,
    enunciado: "A resistência ao movimento na água pode ser progredida aumentando-se a velocidade de execução, ampliando-se a área projetada do segmento — por exemplo, estendendo o joelho em vez de mantê-lo fletido — ou abrindo-se as mãos durante o movimento.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "velocidade ... área projetada ... estendendo o joelho ... abrindo-se as mãos",
    cognitivo: {
      motivo: "Cobrar as três variáveis práticas de progressão, de aplicação direta na prescrição.",
      palavraCritica: "área projetada",
    },
    comentario: {
      resolucao: "CERTO. As três estratégias aumentam a resistência: mais velocidade gera mais turbulência; maior área projetada desloca mais água e aumenta o arrasto; mãos abertas ampliam a superfície de contato. O exemplo do joelho é ilustrativo — o membro estendido tem braço de alavanca e área maiores que o fletido. São recursos que dispensam qualquer equipamento adicional.",
      fundamento: "Progressão de exercícios aquáticos — velocidade, área projetada e alavanca.",
      macete: "Mais rápido, mais aberto, mais estendido: mais difícil.",
      erroComum: "Supor que progredir carga na água exige flutuadores ou pesos.",
      comoBancaPensa: "Item correto de aplicação prática, que exige entender por que cada variável pesa."
    }
  },
  {
    id: "FIS-018", disciplina: "Fisioterapia", assunto: "Princípios físicos da imersão", subassunto: "Termodinâmica — condução e convecção",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.7,
    enunciado: "Na imersão, a transferência de calor entre o corpo e a água ocorre por condução, quando há contato direto entre as moléculas, e por convecção, associada ao movimento de massas do fluido com diferentes temperaturas.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "condução ... contato direto ... convecção ... movimento de massas do fluido",
    cognitivo: {
      motivo: "Cobrar os dois mecanismos de troca térmica na imersão.",
      palavraCritica: "movimento de massas do fluido",
    },
    comentario: {
      resolucao: "CERTO. Condução é a troca por contato molecular direto; convecção depende do deslocamento do próprio fluido, com as porções aquecidas subindo e as frias descendo. A água conduz calor muito mais rapidamente que o ar, e a movimentação do paciente renova constantemente a camada em contato com a pele — por isso a troca térmica na piscina é intensa e exige controle rigoroso de temperatura.",
      fundamento: "Termodinâmica aplicada à imersão — condução e convecção.",
      macete: "Condução é contato. Convecção é a água se movendo.",
      erroComum: "Confundir os dois mecanismos ou incluir radiação como principal na imersão.",
      comoBancaPensa: "Item de literalidade física que sustenta as recomendações de temperatura."
    }
  },

  /* ============ ALTERAÇÕES FISIOLÓGICAS — IMERSÃO EM REPOUSO ============ */
  {
    id: "FIS-019", disciplina: "Fisioterapia", assunto: "Alterações fisiológicas da imersão", subassunto: "Sistema cardiovascular em repouso",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.85,
    enunciado: "A imersão vertical em repouso promove deslocamento de cerca de 900 mL de sangue das regiões periféricas para a região torácica, com aumento do retorno venoso, do volume de ejeção e do débito cardíaco, podendo a frequência cardíaca reduzir-se em até 10 batimentos por minuto.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "900 mL ... até 10 batimentos por minuto",
    cognitivo: {
      motivo: "Contraexemplo: dois valores numéricos exatos e corretos, num item de alta recorrência.",
      palavraCritica: "900 mL ... 10 batimentos",
    },
    comentario: {
      resolucao: "CERTO. A pressão hidrostática comprime a periferia e centraliza o volume sanguíneo — cerca de 900 mL migram para o tórax. O aumento do retorno venoso eleva o volume de ejeção e o débito cardíaco, e o reflexo resultante produz bradicardia relativa, com queda de até 10 bpm. Repare no aparente paradoxo, que é a chave do item: o débito SOBE enquanto a frequência CAI, porque o volume ejetado por batimento aumenta.",
      fundamento: "Respostas cardiovasculares à imersão vertical em repouso.",
      macete: "Imergiu: sangue vai para o tórax, débito sobe, frequência cai.",
      erroComum: "Supor que débito cardíaco e frequência sempre variam no mesmo sentido.",
      comoBancaPensa: "Reúne dois números exatos num item cuja fisiologia parece contraditória."
    }
  },
  {
    id: "FIS-020", disciplina: "Fisioterapia", assunto: "Alterações fisiológicas da imersão", subassunto: "Sistema cardiovascular em repouso",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade distorcida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.77,
    enunciado: "Na imersão em repouso, a pressão hidrostática provoca vasodilatação periférica e taquicardia reflexa, com redução do retorno venoso e do débito cardíaco.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "vasodilatação periférica e taquicardia ... redução do retorno venoso",
    cognitivo: {
      motivo: "Cobrar as mesmas respostas cardiovasculares, todas invertidas.",
      palavraCritica: "vasodilatação ... taquicardia ... redução",
    },
    comentario: {
      resolucao: "ERRADO. Tudo invertido. A imersão produz VASOCONSTRIÇÃO periférica (a pressão comprime os vasos), BRADICARDIA e AUMENTO do retorno venoso e do débito cardíaco. É justamente esse aumento de retorno venoso que contraindica a imersão profunda na insuficiência cardíaca descompensada — o coração recebe mais volume do que consegue ejetar.",
      fundamento: "Respostas cardiovasculares à imersão vertical em repouso.",
      macete: "A água aperta: vasoconstrição, mais retorno venoso, menos frequência.",
      erroComum: "Associar relaxamento na água a vasodilatação periférica.",
      comoBancaPensa: "Inverte todas as respostas de uma vez, o que soa coerente para quem não estudou o mecanismo."
    }
  },
  {
    id: "FIS-021", disciplina: "Fisioterapia", assunto: "Alterações fisiológicas da imersão", subassunto: "Sistema renal",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.72,
    enunciado: "A centralização do volume sanguíneo durante a imersão estimula a liberação do peptídeo natriurético atrial e inibe a produção de aldosterona e de hormônio antidiurético, o que resulta em aumento da diurese.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "peptídeo natriurético atrial ... inibe ... aldosterona e ... antidiurético ... aumento da diurese",
    cognitivo: {
      motivo: "Cobrar o eixo endócrino-renal da imersão, que explica a diurese aumentada.",
      palavraCritica: "inibe a produção de aldosterona e de hormônio antidiurético",
    },
    comentario: {
      resolucao: "CERTO. O aumento do volume central distende os átrios e libera o peptídeo natriurético atrial; simultaneamente, o organismo interpreta o quadro como hipervolemia e suprime aldosterona e ADH. O resultado é diurese aumentada — motivo pelo qual pacientes frequentemente precisam urinar durante ou logo após a sessão, e pelo qual a hidratação deve ser orientada.",
      fundamento: "Respostas endócrinas e renais à imersão.",
      macete: "O corpo pensa que está com volume sobrando: solta líquido.",
      erroComum: "Supor que a imersão reduz a diurese por não haver ingestão de água.",
      comoBancaPensa: "Item correto que exige encadear pressão hidrostática, endocrinologia e função renal."
    }
  },
  {
    id: "FIS-022", disciplina: "Fisioterapia", assunto: "Alterações fisiológicas da imersão", subassunto: "Sistema respiratório em repouso",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.75,
    enunciado: "A imersão até a altura do tórax aumenta o trabalho respiratório, em razão da pressão hidrostática sobre a caixa torácica e da centralização sanguínea, com redução do volume de reserva expiratório e da capacidade vital.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "aumenta o trabalho respiratório ... redução do volume de reserva expiratório e da capacidade vital",
    cognitivo: {
      motivo: "Cobrar por que a imersão é, ela própria, uma sobrecarga respiratória.",
      palavraCritica: "aumenta o trabalho respiratório",
    },
    comentario: {
      resolucao: "CERTO. Dois fatores somam-se: a pressão externa sobre o tórax dificulta a inspiração, e o sangue centralizado ocupa espaço no leito vascular pulmonar. O resultado é redução da capacidade vital e do volume de reserva expiratório, com aumento do trabalho respiratório. Por isso a imersão pode ser usada como treino muscular respiratório — e por isso exige cautela no pneumopata grave.",
      fundamento: "Respostas respiratórias à imersão.",
      macete: "A água aperta o tórax: respirar na piscina dá mais trabalho.",
      erroComum: "Supor que a imersão facilita a respiração por causa do relaxamento.",
      comoBancaPensa: "Item correto que contraria a impressão intuitiva de conforto respiratório na água."
    }
  },
  {
    id: "FIS-023", disciplina: "Fisioterapia", assunto: "Alterações fisiológicas da imersão", subassunto: "Exercício em imersão",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.8,
    enunciado: "A prescrição de treinamento aeróbio em imersão deve utilizar os mesmos valores de frequência cardíaca máxima empregados em solo, uma vez que a resposta cronotrópica ao exercício não se altera no meio aquático.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "mesmos valores de frequência cardíaca máxima ... não se altera",
    cognitivo: {
      motivo: "Cobrar a necessidade de fórmulas corrigidas para prescrição aquática.",
      palavraCritica: "mesmos valores ... empregados em solo",
    },
    comentario: {
      resolucao: "ERRADO. A resposta cronotrópica é diferente na água: a bradicardia induzida pela imersão faz a frequência cardíaca ser menor para a mesma intensidade relativa de esforço. Usar a fórmula terrestre subestimaria a intensidade real e levaria a prescrição inadequada. Existem fórmulas de correção específicas para o meio aquático, e é obrigatório empregá-las.",
      fundamento: "Prescrição de exercício aquático — correção da frequência cardíaca.",
      macete: "FC na água é mais baixa para o mesmo esforço. Corrija a fórmula.",
      erroComum: "Transpor a prescrição terrestre para a piscina sem ajuste.",
      comoBancaPensa: "Nega uma diferença fisiológica estabelecida, com aparência de simplificação razoável."
    }
  },
  {
    id: "FIS-024", disciplina: "Fisioterapia", assunto: "Alterações fisiológicas da imersão", subassunto: "Termorregulação no exercício",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade distorcida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.74,
    enunciado: "Durante o exercício em imersão, a sudorese mantém-se como principal mecanismo de dissipação de calor, o que permite realizar atividades de alta intensidade em água aquecida sem risco de elevação da temperatura corporal.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "sudorese ... principal mecanismo ... sem risco de elevação da temperatura",
    cognitivo: {
      motivo: "Cobrar a ineficácia da sudorese no meio aquático e o risco de superaquecimento.",
      palavraCritica: "sudorese ... sem risco",
    },
    comentario: {
      resolucao: "ERRADO. No meio aquático a sudorese não dissipa calor: o suor não evapora dentro da água, e é a evaporação que resfria. A troca térmica passa a depender do gradiente entre a pele e a água. Se a água estiver aquecida e o exercício for intenso, a temperatura corporal sobe — daí a recomendação de faixa mais ampla e mais fria, entre 17 °C e 34 °C, para atividades de maior intensidade.",
      fundamento: "Termorregulação durante o exercício em imersão.",
      macete: "Suor não evapora dentro d'água. Exercício intenso pede água mais fria.",
      erroComum: "Transpor o mecanismo de termorregulação terrestre para a piscina.",
      comoBancaPensa: "Mantém um mecanismo fisiológico verdadeiro em terra num contexto em que ele não opera."
    }
  },
  {
    id: "FIS-025", disciplina: "Fisioterapia", assunto: "Alterações fisiológicas da imersão", subassunto: "Sistema nervoso",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.7,
    enunciado: "A imersão eleva o limiar de dor do paciente e estimula o sistema vestibular, sendo a instabilidade proporcionada pelo meio líquido um recurso útil no treino de equilíbrio e no tratamento de disfunções proprioceptivas.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "eleva o limiar de dor ... estimula o sistema vestibular ... treino de equilíbrio",
    cognitivo: {
      motivo: "Cobrar os efeitos neurológicos da imersão, inclusive o uso terapêutico da instabilidade.",
      palavraCritica: "instabilidade ... recurso útil",
    },
    comentario: {
      resolucao: "CERTO. A pressão e a temperatura promovem estimulação sensorial ampla que compete com a nocicepção, elevando o limiar de dor. E a instabilidade — que poderia parecer um problema — é usada deliberadamente: o desequilíbrio constante desafia o sistema vestibular e proprioceptivo em ambiente onde a queda não causa lesão. É a grande vantagem do meio para treino de equilíbrio.",
      fundamento: "Respostas neurológicas à imersão e treino proprioceptivo aquático.",
      macete: "Na água a queda não machuca: dá para treinar equilíbrio no limite.",
      erroComum: "Ver a instabilidade da água apenas como risco a evitar.",
      comoBancaPensa: "Item correto que exige compreender a instabilidade como recurso, não como obstáculo."
    }
  },
  {
    id: "FIS-026", disciplina: "Fisioterapia", assunto: "Alterações fisiológicas da imersão", subassunto: "Sistema musculoesquelético",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.76,
    enunciado: "A redução da descarga de peso proporcionada pelo empuxo permite o exercício precoce em pacientes com desgaste articular, trauma ou pós-operatório, sem impor compressão às articulações acometidas.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "exercício precoce ... sem impor compressão às articulações",
    cognitivo: {
      motivo: "Cobrar a principal indicação musculoesquelética do meio aquático.",
      palavraCritica: "sem impor compressão",
    },
    comentario: {
      resolucao: "CERTO. É a razão clássica para escolher o meio aquático: a descarga de peso é graduável pela profundidade de imersão — quanto mais submerso, menor a carga articular. Isso permite iniciar movimento e marcha antes do que seria possível em solo, preservando amplitude e força sem sobrecarregar tecidos em reparação.",
      fundamento: "Empuxo e descarga de peso articular no exercício aquático.",
      macete: "Quanto mais fundo, menos peso na articulação. Dá para começar mais cedo.",
      erroComum: "Marcar ERRADO por achar exagerada a expressão 'sem impor compressão'.",
      comoBancaPensa: "Enunciado categórico que reproduz a indicação consagrada do recurso."
    }
  },

  /* ===================== ESTRUTURA E SEGURANÇA ===================== */
  {
    id: "FIS-027", disciplina: "Fisioterapia", assunto: "Fisioterapia aquática", subassunto: "Estrutura do serviço",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 75, probReaparecer: 0.6,
    enunciado: "O setor de fisioterapia aquática deve dispor de piso antiderrapante, cadeiras de banho para transferência segura do paciente e sistema eficiente de ventilação e exaustão, estendido também aos vestiários.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "piso antiderrapante ... cadeiras de banho ... ventilação e exaustão ... vestiários",
    cognitivo: {
      motivo: "Contraexemplo: três requisitos encadeados de estrutura, todos corretos.",
      palavraCritica: "estendido também aos vestiários",
    },
    comentario: {
      resolucao: "CERTO. Os três requisitos procedem, e a extensão aos vestiários também: é onde o paciente circula molhado e descalço, com risco elevado de queda, e onde a umidade se acumula. A cadeira de banho deve ter rodas traseiras grandes para permitir autopropulsão quando possível, e há modelos com assento tipo concha e com assento higiênico.",
      fundamento: "Requisitos de estrutura e segurança do serviço de fisioterapia aquática.",
      macete: "Molhado e descalço: piso antiderrapante em todo o percurso, não só na borda.",
      erroComum: "Desconfiar da cláusula final e marcar ERRADO sem apontar erro.",
      comoBancaPensa: "Encadeia requisitos verdadeiros no formato em que costuma plantar um falso."
    }
  },
  {
    id: "FIS-028", disciplina: "Fisioterapia", assunto: "Fisioterapia aquática", subassunto: "Tratamento da água",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.55,
    enunciado: "O tratamento químico da piscina terapêutica deve seguir parâmetros fixos, independentemente do número de usuários, sendo suficiente a cloração periódica para garantir a desinfecção em qualquer circunstância.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "parâmetros fixos, independentemente do número de usuários ... suficiente a cloração",
    cognitivo: {
      motivo: "Cobrar a necessidade de ajuste dos parâmetros à carga de usuários e a ocorrências atípicas.",
      palavraCritica: "parâmetros fixos ... suficiente",
    },
    comentario: {
      resolucao: "ERRADO. O tratamento deve ser ajustado ao fluxo de pacientes e terapeutas, porque a matéria orgânica introduzida na água varia com a carga de uso. Além do cloro, controlam-se pH e alcalinidade total, com auxiliares de filtração. E em ocorrências atípicas — evacuação na piscina, por exemplo — impõe-se correção imediata dos parâmetros e, em casos extremos, interdição até a regularização.",
      fundamento: "Tratamento e controle da água em piscinas terapêuticas.",
      macete: "Mais gente na água, mais matéria orgânica: o tratamento acompanha o uso.",
      erroComum: "Reduzir o controle da água à cloração de rotina.",
      comoBancaPensa: "Fixa parâmetros que são por natureza variáveis, e declara suficiente um controle parcial."
    }
  },

  /* ===================== MÉTODO DE BAD RAGAZ ===================== */
  {
    id: "FIS-029", disciplina: "Fisioterapia", assunto: "Método de Bad Ragaz", subassunto: "Posicionamento e flutuadores",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.86,
    enunciado: "No método dos anéis de Bad Ragaz, o paciente é posicionado em flutuação supina, sustentado por flutuadores cervical, pélvico e nos tornozelos, cabendo ao fisioterapeuta atuar como ponto fixo do movimento.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "flutuação supina ... cervical, pélvico e nos tornozelos ... ponto fixo",
    cognitivo: {
      motivo: "Cobrar o posicionamento característico do método, item de alta recorrência.",
      palavraCritica: "ponto fixo",
    },
    comentario: {
      resolucao: "CERTO. São três os flutuadores — cervical, pélvico e de tornozelos — e a posição é supina. O detalhe conceitual mais cobrado é o papel do terapeuta: ele é o PONTO FIXO, a referência estável contra a qual o paciente se movimenta, enquanto o corpo do paciente é a parte móvel. É o inverso da lógica terrestre, em que o paciente costuma estar fixo e o segmento se move.",
      fundamento: "Método dos anéis de Bad Ragaz — posicionamento e execução.",
      macete: "Bad Ragaz: paciente de barriga para cima, três flutuadores, terapeuta é o poste.",
      erroComum: "Inverter os papéis, imaginando o paciente fixo e o terapeuta móvel.",
      comoBancaPensa: "Item de literalidade técnica com um detalhe conceitual embutido."
    }
  },
  {
    id: "FIS-030", disciplina: "Fisioterapia", assunto: "Método de Bad Ragaz", subassunto: "Bases neurofisiológicas",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.78,
    enunciado: "O método de Bad Ragaz incorporou os padrões da facilitação neuromuscular proprioceptiva, com movimentos diagonais tridimensionais, e utiliza o fenômeno da irradiação, pelo qual a musculatura mais forte facilita a ativação da musculatura mais fraca.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "facilitação neuromuscular proprioceptiva ... diagonais tridimensionais ... irradiação",
    cognitivo: {
      motivo: "Contraexemplo: conceitos de método que a banca costuma atribuir a Halliwick, aqui corretos.",
      palavraCritica: "irradiação",
    },
    comentario: {
      resolucao: "CERTO. A FNP entrou no método por Bridget Davis e Verena Laggatt, a partir dos padrões de Margareth Knott, somando-se aos padrões de exercício de Knupfer. A irradiação é conceito próprio da FNP: a contração de grupos musculares fortes transborda para os fracos, facilitando sua ativação. Não confundir com Halliwick, que tem base em adaptação e controle de rotações, não em FNP.",
      fundamento: "Método de Bad Ragaz — bases em FNP e princípio da irradiação.",
      macete: "Bad Ragaz tem FNP e diagonais. Halliwick tem rotações e adaptação.",
      erroComum: "Atribuir a FNP ao método Halliwick.",
      comoBancaPensa: "Apresenta corretamente conceitos de um método que costuma trocar pelo outro."
    }
  },
  {
    id: "FIS-031", disciplina: "Fisioterapia", assunto: "Método de Bad Ragaz", subassunto: "Controle da resistência",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de sujeito)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.72,
    enunciado: "No método de Bad Ragaz, a graduação da dificuldade é determinada exclusivamente pelo uso de equipamentos de flutuação adicionais, não havendo participação do paciente nem do fisioterapeuta no controle da resistência oferecida.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "exclusivamente ... equipamentos ... não havendo participação do paciente nem do fisioterapeuta",
    cognitivo: {
      motivo: "Cobrar quem controla a resistência no método.",
      palavraCritica: "não havendo participação do paciente nem do fisioterapeuta",
    },
    comentario: {
      resolucao: "ERRADO. Os dois participam. O PACIENTE controla a resistência nos exercícios isotônicos e isométricos, conforme sua capacidade; e o FISIOTERAPEUTA gradua a dificuldade pelas resistências manuais que oferece, além de dirigir o movimento por fixações manuais e comandos verbais precisos. Os flutuadores servem ao posicionamento, não à graduação de carga.",
      fundamento: "Método de Bad Ragaz — princípios de controle e graduação.",
      macete: "Em Bad Ragaz a carga vem das mãos do terapeuta e do esforço do paciente.",
      erroComum: "Supor que a progressão depende de equipamento.",
      comoBancaPensa: "Retira dos dois protagonistas o controle que é a essência do método."
    }
  },
  {
    id: "FIS-032", disciplina: "Fisioterapia", assunto: "Método de Bad Ragaz", subassunto: "Padrões de exercício",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.68,
    enunciado: "Os padrões de exercício de empurrar e puxar empregados no método de Bad Ragaz atuam sobre as articulações e terminações nervosas sensitivas e auxiliam o reflexo de estiramento muscular.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "empurrar e puxar ... reflexo de estiramento muscular",
    cognitivo: {
      motivo: "Cobrar os padrões de exercício e sua justificativa neurofisiológica.",
      palavraCritica: "reflexo de estiramento",
    },
    comentario: {
      resolucao: "CERTO. Os padrões de empurrar e puxar são a base operacional do método e têm fundamento neurofisiológico: o alongamento prévio do músculo aproveita o reflexo de estiramento para facilitar a contração subsequente, mecanismo herdado da FNP. Somam-se a isso a estimulação de proprioceptores pelo contato manual e os comandos verbais precisos.",
      fundamento: "Método de Bad Ragaz — padrões de exercício e bases neurofisiológicas.",
      macete: "Empurrar e puxar, com alongamento antes: o reflexo ajuda a contrair.",
      erroComum: "Ver os padrões como escolha arbitrária de movimento.",
      comoBancaPensa: "Item correto que cobra o porquê fisiológico do padrão de exercício."
    }
  },

  /* ===================== MÉTODO HALLIWICK ===================== */
  {
    id: "FIS-033", disciplina: "Fisioterapia", assunto: "Método Halliwick", subassunto: "Princípios",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.84,
    enunciado: "São princípios do método Halliwick a adaptação mental, a restauração do equilíbrio, a inibição e a facilitação.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "adaptação mental ... restauração do equilíbrio ... inibição ... facilitação",
    cognitivo: {
      motivo: "Cobrar os quatro princípios do método, rol fechado e de alta recorrência.",
      palavraCritica: "inibição ... facilitação",
    },
    comentario: {
      resolucao: "CERTO. São exatamente esses quatro. Adaptação mental é a consciência de como gravidade e empuxo agem sobre o corpo; restauração do equilíbrio usa movimentos amplos, sobretudo dos braços; inibição suprime movimentos indesejados; facilitação cria e controla movimentos dentro da capacidade do paciente. Inibição e facilitação são os mais esquecidos e por isso os mais cobrados.",
      fundamento: "Método Halliwick — quatro princípios.",
      macete: "Halliwick: adaptar, equilibrar, inibir e facilitar.",
      erroComum: "Listar apenas adaptação mental e controle de rotações.",
      comoBancaPensa: "Item de literalidade sobre rol fechado, cuja armadilha correlata é substituir um dos quatro."
    }
  },
  {
    id: "FIS-034", disciplina: "Fisioterapia", assunto: "Método Halliwick", subassunto: "Programa de dez pontos",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.87,
    enunciado: "O programa de aprendizagem do método Halliwick estrutura-se em doze pontos, distribuídos em quatro níveis de classificação identificados por cores.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "doze pontos ... quatro níveis",
    cognitivo: {
      motivo: "Cobrar os dois números estruturais do método.",
      palavraCritica: "doze pontos ... quatro níveis",
    },
    comentario: {
      resolucao: "ERRADO. São DEZ pontos, distribuídos em TRÊS níveis — vermelho, amarelo e verde. O vermelho reúne os dois primeiros pontos (adaptação mental e desligamento); o amarelo, os sete seguintes, de habilidades aquáticas; o verde, o último, de movimento na água. Os dois números do item estão alterados.",
      fundamento: "Método Halliwick — programa de dez pontos e três níveis.",
      macete: "Halliwick: 10 pontos, 3 níveis (vermelho, amarelo, verde). 2 + 7 + 1.",
      erroComum: "Confundir o número de pontos com o de níveis, ou inflar ambos.",
      comoBancaPensa: "Altera os dois numerais estruturais de uma vez, dificultando a checagem parcial."
    }
  },
  {
    id: "FIS-035", disciplina: "Fisioterapia", assunto: "Método Halliwick", subassunto: "Níveis de classificação",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.8,
    enunciado: "No método Halliwick, o nível vermelho compreende a adaptação ao meio líquido, a independência e o controle da respiração; o amarelo, o desenvolvimento do equilíbrio e o controle das rotações; e o verde, as habilidades de progressão e de nado adaptado.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "vermelho ... adaptação ... amarelo ... rotações ... verde ... nado adaptado",
    cognitivo: {
      motivo: "Cobrar o conteúdo de cada um dos três níveis.",
      palavraCritica: "amarelo ... controle das rotações",
    },
    comentario: {
      resolucao: "CERTO. A progressão é lógica: primeiro o paciente se adapta e ganha independência (vermelho); depois domina o equilíbrio e as rotações nos eixos transversal, sagital e longitudinal (amarelo); por fim, desloca-se com eficiência (verde). A classificação por cores é feita pelo que o paciente CONSEGUE fazer — a lógica do método é classificar por habilidade, não por limitação.",
      fundamento: "Método Halliwick — níveis vermelho, amarelo e verde.",
      macete: "Vermelho adapta, amarelo equilibra e roda, verde nada.",
      erroComum: "Trocar o conteúdo do amarelo com o do verde.",
      comoBancaPensa: "Item correto que cobra a ordem de progressão, e não apenas os nomes das cores."
    }
  },
  {
    id: "FIS-036", disciplina: "Fisioterapia", assunto: "Método Halliwick", subassunto: "Filosofia de classificação",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.73,
    enunciado: "A classificação dos pacientes no método Halliwick baseia-se no grau de comprometimento e nas limitações funcionais decorrentes do diagnóstico clínico, o que permite agrupar os participantes por patologia.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "grau de comprometimento e nas limitações ... agrupar por patologia",
    cognitivo: {
      motivo: "Cobrar a filosofia do método, que classifica por habilidade e não por déficit.",
      palavraCritica: "limitações ... por patologia",
    },
    comentario: {
      resolucao: "ERRADO. A classificação de Halliwick parte das HABILIDADES do paciente na água, não de suas limitações nem do diagnóstico. É uma escolha conceitual deliberada e um dos traços distintivos do método: o mesmo grupo pode reunir pessoas com diagnósticos diferentes que estejam no mesmo nível de habilidade aquática, o que favorece a participação social e a motivação.",
      fundamento: "Método Halliwick — classificação por habilidades.",
      macete: "Halliwick olha o que a pessoa faz, não o que ela tem.",
      erroComum: "Presumir classificação por patologia, como em outras abordagens.",
      comoBancaPensa: "Inverte a filosofia do método, oferecendo o critério mais comum em reabilitação."
    }
  },
  {
    id: "FIS-037", disciplina: "Fisioterapia", assunto: "Método Halliwick", subassunto: "Controle de rotações",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.76,
    enunciado: "O programa de dez pontos de Halliwick contempla o controle das rotações transversal, sagital e longitudinal, além do controle da rotação combinada.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "transversal, sagital e longitudinal ... rotação combinada",
    cognitivo: {
      motivo: "Cobrar os quatro pontos de rotação, incluindo o combinado.",
      palavraCritica: "rotação combinada",
    },
    comentario: {
      resolucao: "CERTO. São quatro os pontos de rotação dentro do nível amarelo. A transversal ocorre em torno do eixo látero-lateral — passar de pé para decúbito dorsal e voltar. A sagital, em torno do eixo ântero-posterior — inclinar-se lateralmente. A longitudinal, em torno do eixo céfalo-caudal — girar sobre o próprio eixo. E a combinada integra as anteriores, sendo a habilidade mais complexa e a que garante ao paciente recuperar posição segura de respiração após qualquer desequilíbrio.",
      fundamento: "Método Halliwick — pontos de controle de rotação.",
      macete: "Três eixos mais a combinação: quatro pontos de rotação.",
      erroComum: "Esquecer a rotação combinada, que é a de maior valor funcional.",
      comoBancaPensa: "Item correto cuja armadilha correlata é suprimir a rotação combinada."
    }
  },
  {
    id: "FIS-038", disciplina: "Fisioterapia", assunto: "Método Halliwick", subassunto: "Desligamento",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.66,
    enunciado: "No método Halliwick, o ponto denominado desligamento consiste na retirada abrupta do paciente da água ao término da sessão, com o objetivo de encerrar a estimulação vestibular.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "retirada abrupta do paciente da água",
    cognitivo: {
      motivo: "Cobrar o significado do desligamento, que é de independência e não de encerramento.",
      palavraCritica: "retirada abrupta",
    },
    comentario: {
      resolucao: "ERRADO. Desligamento é o segundo ponto do programa e significa a redução progressiva do apoio do terapeuta, estimulando a independência física e mental do paciente. Um paciente com medo de água recebe apoio integral no início e vai sendo gradualmente 'desligado' do suporte até agir sozinho. Nada tem a ver com o fim da sessão.",
      fundamento: "Método Halliwick — ponto 2, desligamento.",
      macete: "Desligar é soltar aos poucos o paciente do apoio, não tirá-lo da piscina.",
      erroComum: "Interpretar o termo pelo sentido literal cotidiano.",
      comoBancaPensa: "Explora a ambiguidade do nome do ponto, oferecendo o sentido comum em vez do técnico."
    }
  },
  {
    id: "FIS-039", disciplina: "Fisioterapia", assunto: "Método Halliwick", subassunto: "Adaptação mental",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.7,
    enunciado: "A adaptação mental é sempre o ponto inicial do programa de Halliwick, e o controle da respiração é habilidade trabalhada já nessa etapa, antes do desenvolvimento das rotações.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "sempre o ponto inicial ... controle da respiração ... antes do desenvolvimento das rotações",
    cognitivo: {
      motivo: "Contraexemplo: um 'sempre' que corresponde à estrutura fixa do programa.",
      palavraCritica: "sempre",
    },
    comentario: {
      resolucao: "CERTO. A adaptação mental é o ponto 1 e integra o nível vermelho, junto com o desligamento. O controle respiratório é trabalhado desde aí — inclusive o sopro na água — porque sem ele o paciente não tolera as rotações que virão no nível amarelo, nas quais a face pode submergir. A ordem do programa é fixa, e por isso o advérbio procede.",
      fundamento: "Método Halliwick — nível vermelho e sequência do programa.",
      macete: "Primeiro adaptar e respirar. Só depois rodar.",
      erroComum: "Marcar ERRADO por reflexo diante de 'sempre'.",
      comoBancaPensa: "Usa quantificador universal numa sequência que é mesmo invariável."
    }
  },
  {
    id: "FIS-040", disciplina: "Fisioterapia", assunto: "Método Halliwick", subassunto: "Uso de flutuadores",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.74,
    enunciado: "Enquanto o método de Bad Ragaz emprega flutuadores para sustentar o paciente em decúbito, o método Halliwick busca a independência aquática sem recorrer a dispositivos mecânicos de flutuação.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "Bad Ragaz ... flutuadores ... Halliwick ... sem dispositivos mecânicos",
    cognitivo: {
      motivo: "Contraexemplo: contraste entre os dois métodos, apresentado corretamente.",
      palavraCritica: "sem recorrer a dispositivos mecânicos",
    },
    comentario: {
      resolucao: "CERTO. O contraste é real e distingue as duas abordagens. Bad Ragaz depende dos anéis e flutuadores para manter o paciente em supino enquanto o terapeuta trabalha. Halliwick, ao contrário, tem por objetivo a independência: o paciente aprende a controlar o próprio corpo na água sem apoio artificial, e o suporte do terapeuta vai sendo retirado progressivamente — é o princípio do desligamento.",
      fundamento: "Contraste entre os métodos de Bad Ragaz e Halliwick.",
      macete: "Bad Ragaz usa boia; Halliwick quer que você não precise de nenhuma.",
      erroComum: "Marcar ERRADO por desconfiar de item que compara dois métodos.",
      comoBancaPensa: "Apresenta corretamente o contraste que costuma inverter."
    }
  },

];

QUESTOES.push(...QUESTOES_SESAUAL_LOTE70);
