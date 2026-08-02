/* =====================================================================
   QUESTLAB — Lote 67: LÍNGUA PORTUGUESA — ANÁLISE SINTÁTICA E MORFOLOGIA
   Língua Portuguesa é o maior déficit proporcional da trilha PC-AL:
   vale ~10 itens da prova (8,3%) e ocupava 2,5% do banco. Pior: os 34
   itens existentes tratavam de pontuação, crase, concordância, regência
   e coesão — nada de análise sintática de termos nem de classes de
   palavras, que são a base de tudo isso.

   Material de curso (35 apostilas e listas de fixação) serviu só de
   MAPA dos recortes cobrados: frase x oração x período; sujeito
   simples, composto, oculto, indeterminado e oração sem sujeito;
   tipos de predicado; predicativo do sujeito e do objeto; predicação
   verbal e complementos; complemento nominal x adjunto adnominal;
   adjunto adverbial e suas circunstâncias; e morfologia (artigo,
   substantivo, adjetivo, advérbio, preposição, pronome, verbo).

   Nenhum enunciado foi copiado e nenhum exemplo do material foi
   reaproveitado: todas as frases analisadas são autorais, redigidas
   com vocabulário de contexto policial e administrativo. A análise de
   cada uma segue a NGB e a gramática normativa.

   Nove itens são CONTRAEXEMPLOS deliberados: pares que a banca vive
   permutando (haver x ocorrer, CN x adjunto adnominal, VTD x VTI,
   combinação x contração), aqui apresentados CORRETAMENTE — para que
   o candidato não aprenda que "item que compara dois conceitos está
   sempre errado".

   60 itens: 32 CERTO / 28 ERRADO. Dificuldade 3 na maior parte.
   ===================================================================== */

const QUESTOES_PCAL_LOTE67 = [

  /* ===== FRASE, ORAÇÃO E PERÍODO ===== */
  {
    id: "PT-035", disciplina: "Língua Portuguesa", assunto: "Frase, oração e período", subassunto: "Conceitos fundamentais",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade gramatical)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.78,
    enunciado: "Toda oração se organiza em torno de um verbo ou de uma locução verbal, ao passo que a frase pode constituir-se sem verbo algum, desde que transmita sentido completo, como ocorre em \"Silêncio na sala de audiências!\".",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "oração se organiza em torno de um verbo ... frase pode constituir-se sem verbo",
    cognitivo: {
      motivo: "Cobrar a distinção entre frase e oração, que sustenta toda a análise sintática posterior.",
      palavraCritica: "pode constituir-se sem verbo algum",
    },
    comentario: {
      resolucao: "CERTO. Frase é todo enunciado com sentido completo, com ou sem verbo — as frases nominais são o caso típico (\"Silêncio!\", \"Que sufoco!\"). Oração é a unidade construída em torno de um verbo ou locução verbal, tenha ou não sentido completo. Período é a frase formada por uma ou mais orações, encerrado por pontuação forte.",
      fundamento: "Nomenclatura Gramatical Brasileira — frase, oração e período.",
      macete: "Frase pode não ter verbo. Oração tem que ter. Período é frase com oração.",
      erroComum: "Usar frase e oração como sinônimos.",
      comoBancaPensa: "Item 'limpo' de conceituação, que abre o bloco de sintaxe."
    }
  },
  {
    id: "PT-036", disciplina: "Língua Portuguesa", assunto: "Frase, oração e período", subassunto: "Conceitos fundamentais",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.7,
    enunciado: "Denomina-se oração todo enunciado dotado de sentido completo, ainda que nele não figure verbo, ao passo que a frase se caracteriza necessariamente pela presença de uma forma verbal.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "oração ... ainda que nele não figure verbo ... frase ... necessariamente ... forma verbal",
    cognitivo: {
      motivo: "Cobrar os mesmos conceitos com os rótulos permutados.",
      palavraCritica: "oração ... sem verbo",
    },
    comentario: {
      resolucao: "ERRADO. As definições estão trocadas. Quem prescinde de verbo é a FRASE; quem se organiza obrigatoriamente em torno de um verbo é a ORAÇÃO. \"Fogo!\" é frase e não é oração; \"que o delegado assinasse o auto\" é oração e, isolada, não tem sentido completo.",
      fundamento: "Nomenclatura Gramatical Brasileira — frase e oração.",
      macete: "Sentido completo → frase. Verbo → oração. São critérios diferentes.",
      erroComum: "Trocar o critério de cada conceito.",
      comoBancaPensa: "Permuta duas definições que o candidato reconhece isoladamente, mas não sabe atribuir."
    }
  },
  {
    id: "PT-037", disciplina: "Língua Portuguesa", assunto: "Frase, oração e período", subassunto: "Período simples e composto",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.68,
    enunciado: "Em \"O escrivão lavrou o termo de declarações\", tem-se período simples, cuja única oração se diz absoluta; já em \"O escrivão lavrou o termo assim que o depoente chegou\" tem-se período composto, por conter duas orações.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "período simples ... oração absoluta ... período composto ... duas orações",
    cognitivo: {
      motivo: "Contraexemplo: dois conceitos vizinhos aplicados corretamente a exemplos distintos.",
      palavraCritica: "oração absoluta",
    },
    comentario: {
      resolucao: "CERTO. O período simples tem uma só oração, chamada absoluta justamente por não se subordinar nem se coordenar a nenhuma outra. O período composto tem duas ou mais — no segundo exemplo, \"lavrou\" e \"chegou\", esta última introduzida pela locução conjuntiva temporal \"assim que\". A contagem de orações segue a contagem de verbos ou locuções verbais.",
      fundamento: "Nomenclatura Gramatical Brasileira — período simples e composto; oração absoluta.",
      macete: "Um verbo, um período simples. Dois ou mais, composto.",
      erroComum: "Desconhecer o termo 'oração absoluta' e supor que seja erro.",
      comoBancaPensa: "Apresenta corretamente um par de conceitos que costuma inverter, para separar quem sabe de quem responde por padrão."
    }
  },
  {
    id: "PT-038", disciplina: "Língua Portuguesa", assunto: "Frase, oração e período", subassunto: "Contagem de orações",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.65,
    enunciado: "O período \"A perita tinha analisado o material e havia concluído o laudo\" é composto por quatro orações, uma vez que cada forma verbal nele presente constitui, por si só, uma oração.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "quatro orações ... cada forma verbal ... por si só",
    cognitivo: {
      motivo: "Cobrar que a locução verbal conta como uma única oração.",
      palavraCritica: "quatro orações",
    },
    comentario: {
      resolucao: "ERRADO. São duas orações, não quatro. \"Tinha analisado\" e \"havia concluído\" são locuções verbais: cada uma reúne verbo auxiliar e principal em torno de um só núcleo verbal. A regra correta é contar verbos e locuções verbais — e a locução, por mais formas que reúna, vale por uma.",
      fundamento: "Nomenclatura Gramatical Brasileira — locução verbal e contagem de orações.",
      macete: "Locução verbal é um só núcleo. Auxiliar + principal = uma oração.",
      erroComum: "Contar auxiliar e principal como orações distintas.",
      comoBancaPensa: "Multiplica a contagem apoiando-se numa regra formulada de modo quase correto ('cada forma verbal')."
    }
  },

  /* ===== SUJEITO ===== */
  {
    id: "PT-039", disciplina: "Língua Portuguesa", assunto: "Termos essenciais da oração", subassunto: "Tipos de sujeito",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica — contraexemplo)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Em \"Os agentes e o delegado assinaram o relatório\", o sujeito é composto, pois apresenta mais de um núcleo, ao passo que em \"Os agentes experientes assinaram o relatório\" o sujeito é simples, por possuir núcleo único.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "composto ... mais de um núcleo ... simples ... núcleo único",
    cognitivo: {
      motivo: "Cobrar que a classificação do sujeito depende do número de núcleos, e não da extensão do termo.",
      palavraCritica: "por possuir núcleo único",
    },
    comentario: {
      resolucao: "CERTO. O que define sujeito simples ou composto é a quantidade de NÚCLEOS, não de palavras. No segundo exemplo, \"Os agentes experientes\" tem um único núcleo — \"agentes\" —, acompanhado de dois adjuntos adnominais; segue simples, por mais longo que seja. No primeiro, há dois núcleos: \"agentes\" e \"delegado\".",
      fundamento: "Nomenclatura Gramatical Brasileira — sujeito simples e composto.",
      macete: "Conte núcleos, não palavras. Sujeito longo pode ser simples.",
      erroComum: "Classificar como composto todo sujeito com muitas palavras.",
      comoBancaPensa: "Contrapõe dois exemplos para checar se o candidato aplica o critério certo."
    }
  },
  {
    id: "PT-040", disciplina: "Língua Portuguesa", assunto: "Termos essenciais da oração", subassunto: "Sujeito oculto e indeterminado",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.83,
    enunciado: "No período \"Os peritos isolaram o local e recolheram os vestígios\", o sujeito da segunda oração é indeterminado, visto que não figura expresso junto ao verbo \"recolheram\".",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "sujeito da segunda oração é indeterminado ... não figura expresso",
    cognitivo: {
      motivo: "Cobrar a diferença entre sujeito ausente e sujeito impossível de identificar.",
      palavraCritica: "indeterminado ... não figura expresso",
    },
    comentario: {
      resolucao: "ERRADO. O sujeito de \"recolheram\" é perfeitamente identificável no próprio período: são \"os peritos\". Trata-se, portanto, de sujeito OCULTO (elíptico ou desinencial), e não indeterminado. Indeterminado é aquele que existe, mas não se pode identificar nem pelo contexto nem pela desinência — como em \"Recolheram os vestígios\", isolado.",
      fundamento: "Nomenclatura Gramatical Brasileira — sujeito oculto e sujeito indeterminado.",
      macete: "Dá para dizer quem é pelo contexto? Oculto. Não dá de jeito nenhum? Indeterminado.",
      erroComum: "Tomar 'verbo na 3ª pessoa do plural' como sinal automático de indeterminação.",
      comoBancaPensa: "Isola a segunda oração do contexto que a determina, esperando que o candidato faça o mesmo."
    }
  },
  {
    id: "PT-041", disciplina: "Língua Portuguesa", assunto: "Termos essenciais da oração", subassunto: "Sujeito oculto e indeterminado",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.75,
    enunciado: "Em \"Arrombaram a porta do depósito durante a madrugada\", enunciado isoladamente, o sujeito é indeterminado; já em \"A guarnição chegou ao local e arrombou a porta do depósito\", o sujeito da segunda oração é oculto.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "indeterminado ... oculto",
    cognitivo: {
      motivo: "Contraexemplo: o par indeterminado/oculto aplicado corretamente a dois contextos.",
      palavraCritica: "enunciado isoladamente",
    },
    comentario: {
      resolucao: "CERTO. A classificação depende do contexto, e o item o explicita. Sem referência anterior, \"Arrombaram\" na 3ª pessoa do plural deixa o agente irrecuperável: sujeito indeterminado. Com a referência dada — \"A guarnição\" —, o sujeito de \"arrombou\" é recuperável: oculto. O mesmo verbo muda de classificação conforme o entorno.",
      fundamento: "Nomenclatura Gramatical Brasileira — sujeito indeterminado e sujeito oculto.",
      macete: "Verbo na 3ª do plural sem dono no contexto: indeterminado. Com dono citado antes: oculto.",
      erroComum: "Marcar ERRADO por desconfiar de item que compara duas classificações.",
      comoBancaPensa: "Apresenta corretamente um par que costuma inverter, punindo quem responde pelo formato do enunciado."
    }
  },
  {
    id: "PT-042", disciplina: "Língua Portuguesa", assunto: "Termos essenciais da oração", subassunto: "Índice de indeterminação do sujeito",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.79,
    enunciado: "Em \"Necessita-se de peritos criminais na região\", o pronome \"se\" funciona como índice de indeterminação do sujeito, razão pela qual o verbo permanece na terceira pessoa do singular, ainda que \"peritos criminais\" esteja no plural.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "índice de indeterminação do sujeito ... terceira pessoa do singular",
    cognitivo: {
      motivo: "Cobrar o SE com verbo transitivo indireto, que não admite flexão no plural.",
      palavraCritica: "ainda que ... esteja no plural",
    },
    comentario: {
      resolucao: "CERTO. \"Necessitar\" é transitivo indireto e \"de peritos criminais\" é objeto indireto — não sujeito. Como o SE aqui indetermina o sujeito, o verbo fica invariavelmente na 3ª pessoa do singular. Escrever \"Necessitam-se de peritos\" é erro clássico, por atrair o verbo a um termo que não é sujeito.",
      fundamento: "Gramática normativa — pronome indeterminador do sujeito com verbos transitivos indiretos.",
      macete: "Sobrou preposição depois do SE? Verbo no singular, sempre.",
      erroComum: "Flexionar o verbo pelo objeto indireto.",
      comoBancaPensa: "Item correto que exige identificar a transitividade antes de decidir a concordância."
    }
  },
  {
    id: "PT-043", disciplina: "Língua Portuguesa", assunto: "Termos essenciais da oração", subassunto: "Índice de indeterminação x partícula apassivadora",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.77,
    enunciado: "Em \"Precisa-se de novos escrivães\", tem-se voz passiva sintética, sendo \"novos escrivães\" o sujeito paciente da oração, o que impõe a flexão do verbo no plural.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "voz passiva sintética ... sujeito paciente ... flexão do verbo no plural",
    cognitivo: {
      motivo: "Cobrar a distinção entre partícula apassivadora e índice de indeterminação, decidida pela transitividade.",
      palavraCritica: "voz passiva sintética ... sujeito paciente",
    },
    comentario: {
      resolucao: "ERRADO. A voz passiva sintética só se forma com verbo transitivo DIRETO. \"Precisar\", no sentido de necessitar, é transitivo indireto — e a presença da preposição \"de\" o denuncia. Logo, o SE é índice de indeterminação do sujeito, \"de novos escrivães\" é objeto indireto e o verbo fica no singular.",
      fundamento: "Gramática normativa — partícula apassivadora (VTD) x índice de indeterminação do sujeito (VTI).",
      macete: "Tem preposição? Indetermina e fica singular. Não tem? Apassiva e concorda.",
      erroComum: "Ver o 'se' e presumir voz passiva sintética.",
      comoBancaPensa: "Aplica a análise correta de uma estrutura à estrutura vizinha, que exige análise oposta."
    }
  },
  {
    id: "PT-044", disciplina: "Língua Portuguesa", assunto: "Termos essenciais da oração", subassunto: "Voz passiva sintética",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.81,
    enunciado: "Em \"Apreenderam-se dezenas de aparelhos celulares na operação\", o pronome \"se\" é partícula apassivadora e \"dezenas de aparelhos celulares\" exerce a função de sujeito, o que justifica a flexão verbal no plural.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "partícula apassivadora ... função de sujeito ... flexão verbal no plural",
    cognitivo: {
      motivo: "Cobrar a voz passiva sintética com verbo transitivo direto e a concordância dela decorrente.",
      palavraCritica: "exerce a função de sujeito",
    },
    comentario: {
      resolucao: "CERTO. \"Apreender\" é transitivo direto; o SE apassiva, e a oração equivale a \"Dezenas de aparelhos celulares foram apreendidas na operação\". Como o termo é sujeito, o verbo concorda com ele. O teste é sempre esse: se a frase admite conversão para a passiva analítica, o SE é apassivador.",
      fundamento: "Gramática normativa — voz passiva sintética ou pronominal.",
      macete: "Converta para 'foi/foram + particípio'. Deu certo? É apassivadora e concorda.",
      erroComum: "Deixar o verbo no singular por não reconhecer o sujeito posposto.",
      comoBancaPensa: "Item correto que cobra a cadeia inteira: transitividade, função do SE e concordância."
    }
  },
  {
    id: "PT-045", disciplina: "Língua Portuguesa", assunto: "Termos essenciais da oração", subassunto: "Voz passiva sintética",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.7,
    enunciado: "A construção \"Divulgou-se os resultados do concurso\" atende à norma-padrão, porquanto o verbo, nas construções com o pronome \"se\", permanece invariavelmente na terceira pessoa do singular.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "invariavelmente na terceira pessoa do singular",
    cognitivo: {
      motivo: "Cobrar a concordância na voz passiva sintética, contra a generalização do singular.",
      palavraCritica: "invariavelmente ... singular",
    },
    comentario: {
      resolucao: "ERRADO. \"Divulgar\" é transitivo direto, de modo que o SE é apassivador e \"os resultados do concurso\" é sujeito — o verbo deve concordar: \"Divulgaram-se os resultados do concurso\". A invariabilidade no singular vale apenas quando o SE indetermina o sujeito, com verbo transitivo indireto, intransitivo ou de ligação.",
      fundamento: "Gramática normativa — concordância na voz passiva sintética.",
      macete: "VTD com 'se': concorda. VTI com 'se': fica no singular.",
      erroComum: "Aplicar o singular a todas as construções com 'se'.",
      comoBancaPensa: "Toma a regra de um caso e a estende a todos com 'invariavelmente'."
    }
  },
  {
    id: "PT-046", disciplina: "Língua Portuguesa", assunto: "Termos essenciais da oração", subassunto: "Oração sem sujeito — verbo haver",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.86,
    enunciado: "Empregado no sentido de existir, o verbo haver é impessoal e permanece sempre na terceira pessoa do singular, de sorte que, em \"Havia denúncias contra o servidor\", o termo \"denúncias\" é objeto direto, e não sujeito.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "sempre na terceira pessoa do singular ... objeto direto, e não sujeito",
    cognitivo: {
      motivo: "Contraexemplo: um 'sempre' verdadeiro, com a consequência sintática correta.",
      palavraCritica: "sempre ... objeto direto, e não sujeito",
    },
    comentario: {
      resolucao: "CERTO. \"Haver\" existencial não tem sujeito: a oração é sem sujeito e o verbo fica travado no singular — \"Havia denúncias\", nunca \"Haviam denúncias\". O termo que parece sujeito é objeto direto. A impessoalidade se transmite ao auxiliar em locuções: \"Pode haver denúncias\", e não \"Podem haver\".",
      fundamento: "Gramática normativa — impessoalidade do verbo haver no sentido existencial.",
      macete: "Haver de existir não tem sujeito: singular sempre, e o resto é objeto direto.",
      erroComum: "Marcar ERRADO por reflexo diante de 'sempre', ou flexionar o verbo pelo objeto.",
      comoBancaPensa: "Usa advérbio absoluto em regra que realmente não admite exceção."
    }
  },
  {
    id: "PT-047", disciplina: "Língua Portuguesa", assunto: "Termos essenciais da oração", subassunto: "Oração sem sujeito — verbo haver",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.82,
    enunciado: "Assim como o verbo haver no sentido existencial, os verbos existir, ocorrer e acontecer são impessoais, motivo por que devem permanecer na terceira pessoa do singular, como em \"Ocorreu diversas irregularidades no certame\".",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "existir, ocorrer e acontecer são impessoais",
    cognitivo: {
      motivo: "Cobrar que apenas o haver existencial é impessoal, e não seus sinônimos.",
      palavraCritica: "existir, ocorrer e acontecer são impessoais",
    },
    comentario: {
      resolucao: "ERRADO. Existir, ocorrer e acontecer são verbos PESSOAIS: têm sujeito e com ele concordam. O correto é \"Ocorreram diversas irregularidades no certame\", em que \"diversas irregularidades\" é sujeito. A impessoalidade é privilégio do haver existencial — e é exatamente por isso que a banca oferece os sinônimos como armadilha.",
      fundamento: "Gramática normativa — haver impessoal x existir/ocorrer/acontecer pessoais.",
      macete: "Só o HAVER é impessoal. Trocou por existir/ocorrer/acontecer, o verbo passa a concordar.",
      erroComum: "Estender a impessoalidade do haver aos verbos de sentido equivalente.",
      comoBancaPensa: "Usa a sinonímia semântica para induzir à identidade sintática, que não existe."
    }
  },
  {
    id: "PT-048", disciplina: "Língua Portuguesa", assunto: "Termos essenciais da oração", subassunto: "Oração sem sujeito — verbo haver",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.74,
    enunciado: "Em \"Houve falhas na cadeia de custódia\", a oração é sem sujeito; já em \"Ocorreram falhas na cadeia de custódia\", \"falhas\" exerce a função de sujeito, o que explica a diferença de flexão entre as duas construções.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "oração é sem sujeito ... \"falhas\" exerce a função de sujeito",
    cognitivo: {
      motivo: "Contraexemplo: o par haver/ocorrer analisado corretamente, com a consequência na flexão.",
      palavraCritica: "explica a diferença de flexão",
    },
    comentario: {
      resolucao: "CERTO. As duas frases dizem o mesmo e se analisam de modo oposto. Com \"haver\", não há sujeito e o verbo trava no singular; \"falhas\" é objeto direto. Com \"ocorrer\", há sujeito — \"falhas\" — e o verbo concorda no plural. É a demonstração de que sinonímia semântica não implica identidade sintática.",
      fundamento: "Gramática normativa — verbo haver impessoal e verbo ocorrer pessoal.",
      macete: "Houve falhas / Ocorreram falhas. Mesmo sentido, análise oposta.",
      erroComum: "Marcar ERRADO por desconfiar de item que contrasta duas construções.",
      comoBancaPensa: "Apresenta corretamente o contraste que costuma servir de armadilha, para checar compreensão real."
    }
  },

  /* ===== ORAÇÃO SEM SUJEITO — DEMAIS CASOS ===== */
  {
    id: "PT-049", disciplina: "Língua Portuguesa", assunto: "Termos essenciais da oração", subassunto: "Oração sem sujeito — fenômenos da natureza",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização — contraexemplo)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "Os verbos que exprimem fenômenos da natureza, como chover, nevar, trovejar e anoitecer, são, em regra, impessoais, de modo que \"Anoiteceu antes do término da diligência\" constitui oração sem sujeito.",
    gabarito: "C", pegadinha: "generalizacao", palavraChave: "fenômenos da natureza ... em regra, impessoais ... oração sem sujeito",
    cognitivo: {
      motivo: "Cobrar o caso mais direto de oração sem sujeito, com a ressalva 'em regra'.",
      palavraCritica: "em regra",
    },
    comentario: {
      resolucao: "CERTO. Verbos de fenômeno natural não atribuem ação a ninguém: não há de quem se predicar. A ressalva \"em regra\" é o que torna o item exato, pois esses verbos deixam de ser impessoais quando empregados em sentido figurado.",
      fundamento: "Nomenclatura Gramatical Brasileira — orações sem sujeito.",
      macete: "Choveu, nevou, anoiteceu: ninguém fez. Oração sem sujeito.",
      erroComum: "Apontar um sujeito oculto ('ele') onde não há sujeito algum.",
      comoBancaPensa: "Item correto cuja ressalva 'em regra' prepara a generalização indevida do item seguinte."
    }
  },
  {
    id: "PT-050", disciplina: "Língua Portuguesa", assunto: "Termos essenciais da oração", subassunto: "Oração sem sujeito — fenômenos da natureza",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.72,
    enunciado: "Por designarem fenômenos da natureza, os verbos chover e amanhecer são impessoais em qualquer contexto, razão pela qual, em \"Choveram críticas sobre a corporação\", a oração não possui sujeito.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "impessoais em qualquer contexto ... não possui sujeito",
    cognitivo: {
      motivo: "Cobrar a perda da impessoalidade no emprego figurado.",
      palavraCritica: "em qualquer contexto",
    },
    comentario: {
      resolucao: "ERRADO. Em sentido figurado, esses verbos se tornam pessoais e passam a ter sujeito: em \"Choveram críticas sobre a corporação\", o sujeito é \"críticas\" — tanto que o verbo está no plural, concordando com ele. O mesmo ocorre em \"Amanheci indisposto\", com sujeito desinencial \"eu\". A impessoalidade vale para o sentido literal.",
      fundamento: "Gramática normativa — verbos de fenômeno natural em sentido figurado.",
      macete: "Choveu água: sem sujeito. Choveram críticas: sujeito é 'críticas'.",
      erroComum: "Aplicar a regra pelo verbo, sem olhar o sentido.",
      comoBancaPensa: "Converte uma regra com exceção conhecida em regra absoluta, com 'qualquer contexto'."
    }
  },
  {
    id: "PT-051", disciplina: "Língua Portuguesa", assunto: "Termos essenciais da oração", subassunto: "Oração sem sujeito — tempo decorrido",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.84,
    enunciado: "Na indicação de tempo decorrido, os verbos fazer e haver são impessoais, de modo que a forma adequada à norma-padrão é \"Faz cinco anos que o inquérito foi instaurado\", e não \"Fazem cinco anos\".",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "tempo decorrido ... impessoais ... \"Faz cinco anos\"",
    cognitivo: {
      motivo: "Cobrar a impessoalidade de fazer e haver em expressões temporais, item de altíssima recorrência.",
      palavraCritica: "e não \"Fazem cinco anos\"",
    },
    comentario: {
      resolucao: "CERTO. Indicando tempo decorrido, \"fazer\" e \"haver\" não têm sujeito e ficam na 3ª pessoa do singular. A expressão de tempo é adjunto adverbial, não sujeito — daí a impossibilidade de flexionar o verbo. A impessoalidade contamina o auxiliar: \"Deve fazer cinco anos\", nunca \"Devem fazer\".",
      fundamento: "Gramática normativa — verbos fazer e haver impessoais na indicação de tempo.",
      macete: "Faz cinco anos, faz dois meses, faz séculos. Nunca 'fazem'.",
      erroComum: "Concordar o verbo com a expressão numérica de tempo.",
      comoBancaPensa: "Item 'limpo' que a banca repete em quase toda prova de nível médio."
    }
  },
  {
    id: "PT-052", disciplina: "Língua Portuguesa", assunto: "Termos essenciais da oração", subassunto: "Oração sem sujeito — tempo decorrido",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.71,
    enunciado: "Em \"Havia três meses que o suspeito não era localizado\", a expressão \"três meses\" exerce a função de sujeito do verbo \"havia\", o qual, por isso, poderia flexionar-se no plural sem prejuízo à norma-padrão.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "\"três meses\" exerce a função de sujeito",
    cognitivo: {
      motivo: "Cobrar a função sintática da expressão temporal, que não é sujeito.",
      palavraCritica: "função de sujeito",
    },
    comentario: {
      resolucao: "ERRADO. \"Havia\", indicando tempo decorrido, é impessoal: a oração não tem sujeito e a expressão \"três meses\" é adjunto adverbial de tempo. Por isso o verbo não se flexiona — \"Haviam três meses\" contraria a norma-padrão. A posição inicial do termo é justamente o que induz a lê-lo como sujeito.",
      fundamento: "Gramática normativa — impessoalidade do verbo haver na indicação de tempo decorrido.",
      macete: "Expressão de tempo depois de faz/há é adjunto adverbial, nunca sujeito.",
      erroComum: "Ler como sujeito todo termo que antecede ou segue de perto o verbo.",
      comoBancaPensa: "Atribui função de sujeito a um adjunto adverbial, para justificar uma flexão indevida."
    }
  },
  {
    id: "PT-053", disciplina: "Língua Portuguesa", assunto: "Termos essenciais da oração", subassunto: "Oração sem sujeito — verbo ser",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.68,
    enunciado: "Na indicação de horas, o verbo ser é impessoal, mas concorda com a expressão numérica, o que torna corretas tanto \"É uma hora da tarde\" quanto \"São quinze horas\".",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "impessoal, mas concorda com a expressão numérica",
    cognitivo: {
      motivo: "Contraexemplo: uma aparente contradição — impessoal e ainda assim flexionado — que é exatamente a regra.",
      palavraCritica: "impessoal, mas concorda",
    },
    comentario: {
      resolucao: "CERTO. É o caso singular em que o verbo, sem sujeito, concorda com o predicativo numérico: uma hora leva o singular; quinze horas levam o plural. O mesmo vale para datas e distâncias — \"São dois quilômetros até a delegacia\". O item parece contraditório e não é: a concordância se faz com a expressão de hora, embora não haja sujeito.",
      fundamento: "Gramática normativa — verbo ser na indicação de horas, datas e distâncias.",
      macete: "É uma hora. São duas horas. Sem sujeito, mas concordando com o número.",
      erroComum: "Marcar ERRADO por achar impossível verbo impessoal flexionar-se no plural.",
      comoBancaPensa: "Explora a aparência de contradição de uma regra que o candidato aplica sem conhecer."
    }
  },

  /* ===== PREDICADO ===== */
  {
    id: "PT-054", disciplina: "Língua Portuguesa", assunto: "Tipos de predicado", subassunto: "Predicado verbal, nominal e verbo-nominal",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.85,
    enunciado: "O predicado verbal tem por núcleo o próprio verbo; o nominal tem por núcleo o predicativo, acompanhado de verbo de ligação; e o verbo-nominal apresenta dois núcleos, o verbo e o predicativo.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "núcleo ... verbo ... predicativo ... dois núcleos",
    cognitivo: {
      motivo: "Cobrar a classificação dos três tipos de predicado pelo critério do núcleo.",
      palavraCritica: "dois núcleos",
    },
    comentario: {
      resolucao: "CERTO. O critério é sempre o núcleo. Em \"O delegado indiciou o suspeito\", o núcleo é \"indiciou\": predicado verbal. Em \"O delegado está convicto\", o núcleo é \"convicto\": predicado nominal. Em \"O delegado saiu convicto\", há dois — \"saiu\" e \"convicto\": predicado verbo-nominal. Note que no verbo-nominal o verbo é transitivo ou intransitivo, nunca de ligação.",
      fundamento: "Nomenclatura Gramatical Brasileira — tipos de predicado.",
      macete: "Um núcleo verbal: verbal. Um núcleo predicativo: nominal. Dois núcleos: verbo-nominal.",
      erroComum: "Classificar pelo tipo de verbo, e não pelo núcleo do predicado.",
      comoBancaPensa: "Item 'limpo' de definição, âncora para as trocas que virão."
    }
  },
  {
    id: "PT-055", disciplina: "Língua Portuguesa", assunto: "Tipos de predicado", subassunto: "Predicado verbal e nominal",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.76,
    enunciado: "Em \"A escrivã permaneceu atenta durante toda a oitiva\", o predicado é verbal, uma vez que seu núcleo é a forma verbal \"permaneceu\".",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "predicado é verbal ... núcleo é a forma verbal",
    cognitivo: {
      motivo: "Cobrar o reconhecimento de verbo de ligação fora da lista óbvia (ser, estar).",
      palavraCritica: "núcleo é a forma verbal \"permaneceu\"",
    },
    comentario: {
      resolucao: "ERRADO. \"Permanecer\" é verbo de ligação: não exprime ação, mas estado permanente, e liga o sujeito à característica \"atenta\". O núcleo do predicado é o predicativo \"atenta\", de modo que o predicado é NOMINAL. Integram a mesma lista ser, estar, ficar, continuar, andar, tornar-se e parecer — variáveis conforme o contexto.",
      fundamento: "Nomenclatura Gramatical Brasileira — predicado nominal e verbos de ligação.",
      macete: "Verbo que não indica ação, mas estado, é de ligação. O núcleo passa a ser o predicativo.",
      erroComum: "Reconhecer como verbo de ligação apenas 'ser' e 'estar'.",
      comoBancaPensa: "Escolhe um verbo de ligação menos evidente para que o candidato o tome por verbo de ação."
    }
  },
  {
    id: "PT-056", disciplina: "Língua Portuguesa", assunto: "Tipos de predicado", subassunto: "Predicado verbo-nominal",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.73,
    enunciado: "Em \"A testemunha chegou nervosa à delegacia\", o predicado é verbo-nominal, pois reúne o verbo intransitivo \"chegou\" e o predicativo do sujeito \"nervosa\".",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "verbo-nominal ... verbo intransitivo ... predicativo do sujeito",
    cognitivo: {
      motivo: "Contraexemplo: análise correta de uma estrutura que a banca costuma classificar como adjunto adverbial de modo.",
      palavraCritica: "predicativo do sujeito \"nervosa\"",
    },
    comentario: {
      resolucao: "CERTO. \"Nervosa\" não modifica o verbo — atribui estado à testemunha, e por isso é predicativo do sujeito, concordando com ele em gênero e número. Como \"chegou\" mantém seu valor de ação e há também o predicativo, o predicado tem dois núcleos: verbo-nominal. O teste decisivo é a flexão: adjunto adverbial de modo seria invariável (\"chegou nervosamente\").",
      fundamento: "Nomenclatura Gramatical Brasileira — predicado verbo-nominal e predicativo do sujeito.",
      macete: "Palavra que concorda com o sujeito é predicativo. Invariável é adjunto adverbial.",
      erroComum: "Classificar 'nervosa' como adjunto adverbial de modo.",
      comoBancaPensa: "Apresenta corretamente a análise que costuma distorcer, checando se o candidato aplica o teste de flexão."
    }
  },
  {
    id: "PT-057", disciplina: "Língua Portuguesa", assunto: "Tipos de predicado", subassunto: "Predicativo x adjunto adverbial",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.7,
    enunciado: "Em \"Os investigadores retornaram exaustos ao plantão\", o termo \"exaustos\" classifica-se como adjunto adverbial de modo, por indicar a maneira como se deu o retorno.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "\"exaustos\" ... adjunto adverbial de modo",
    cognitivo: {
      motivo: "Cobrar o mesmo teste do item anterior, agora com a classificação errada.",
      palavraCritica: "adjunto adverbial de modo",
    },
    comentario: {
      resolucao: "ERRADO. \"Exaustos\" flexiona-se em gênero e número para concordar com \"Os investigadores\" — prova de que se refere ao sujeito, e não ao verbo. Trata-se de predicativo do sujeito, e o predicado é verbo-nominal. Adjunto adverbial é invariável: \"retornaram rapidamente\" não muda de forma, ainda que o sujeito seja feminino ou singular.",
      fundamento: "Nomenclatura Gramatical Brasileira — predicativo do sujeito x adjunto adverbial.",
      macete: "Varia com o sujeito? Predicativo. Não varia? Adjunto adverbial.",
      erroComum: "Classificar pelo sentido ('indica como') sem aplicar o teste de flexão.",
      comoBancaPensa: "Oferece uma justificativa semântica plausível para encobrir o critério formal correto."
    }
  },
  {
    id: "PT-058", disciplina: "Língua Portuguesa", assunto: "Tipos de predicado", subassunto: "Verbos de ligação",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.69,
    enunciado: "Um mesmo verbo pode funcionar como de ligação ou como significativo conforme o contexto: em \"O agente ficou apreensivo\", \"ficar\" é verbo de ligação; em \"O agente ficou na viatura\", é intransitivo.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "mesmo verbo pode funcionar como de ligação ou como significativo",
    cognitivo: {
      motivo: "Cobrar que a classificação verbal depende do emprego, e não de lista fixa.",
      palavraCritica: "conforme o contexto",
    },
    comentario: {
      resolucao: "CERTO. Não existe verbo de ligação por natureza — existe emprego como verbo de ligação. Em \"ficou apreensivo\", o verbo apenas conecta o sujeito ao estado, sem carga semântica própria: predicado nominal. Em \"ficou na viatura\", significa permanecer em um lugar, tem sentido pleno e o termo seguinte é adjunto adverbial: predicado verbal.",
      fundamento: "Gramática normativa — verbos de ligação e sua dependência contextual.",
      macete: "Ligação é função, não etiqueta fixa. Analise o emprego, não a lista.",
      erroComum: "Decorar a lista de verbos de ligação e aplicá-la sem análise.",
      comoBancaPensa: "Item correto que cobra o método, e não a memorização."
    }
  },
  {
    id: "PT-059", disciplina: "Língua Portuguesa", assunto: "Tipos de predicado", subassunto: "Predicativo do sujeito",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.72,
    enunciado: "O predicativo do sujeito somente ocorre em predicados nominais, sendo indispensável, para sua identificação, a presença de verbo de ligação na oração.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "somente ... predicados nominais ... indispensável ... verbo de ligação",
    cognitivo: {
      motivo: "Cobrar a ocorrência de predicativo do sujeito também no predicado verbo-nominal.",
      palavraCritica: "indispensável ... verbo de ligação",
    },
    comentario: {
      resolucao: "ERRADO. O predicativo do sujeito também aparece no predicado verbo-nominal, em que o verbo é transitivo ou intransitivo — jamais de ligação. Em \"A vítima saiu ilesa do acidente\", \"ilesa\" é predicativo do sujeito e \"saiu\" é intransitivo. A presença de verbo de ligação é indispensável apenas no predicado nominal.",
      fundamento: "Nomenclatura Gramatical Brasileira — predicativo do sujeito nos predicados nominal e verbo-nominal.",
      macete: "Predicativo do sujeito cabe em dois predicados: nominal e verbo-nominal.",
      erroComum: "Associar predicativo exclusivamente a verbo de ligação.",
      comoBancaPensa: "Cria uma exigência que exclui, sem razão, metade das ocorrências do fenômeno."
    }
  },

  /* ===== PREDICATIVO ===== */
  {
    id: "PT-060", disciplina: "Língua Portuguesa", assunto: "Predicativo", subassunto: "Formas de representação",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.66,
    enunciado: "O predicativo pode ser representado não só por adjetivo, mas também por substantivo, numeral, pronome ou locução adjetiva, como em \"O acusado é reincidente\", \"O acusado é advogado\" e \"O acusado está sem defensor\".",
    gabarito: "C", pegadinha: "generalizacao", palavraChave: "adjetivo ... substantivo, numeral, pronome ou locução adjetiva",
    cognitivo: {
      motivo: "Cobrar a variedade de classes que exercem a função de predicativo.",
      palavraCritica: "locução adjetiva",
    },
    comentario: {
      resolucao: "CERTO. Predicativo é função sintática, e várias classes podem preenchê-la: adjetivo (\"reincidente\"), substantivo (\"advogado\"), numeral (\"Os presos eram três\"), pronome (\"Justiça é isso\") e locução adjetiva (\"está sem defensor\"). Confundir classe gramatical com função sintática é o erro que o item cobra.",
      fundamento: "Nomenclatura Gramatical Brasileira — predicativo e classes que o representam.",
      macete: "Predicativo é função. Quem a preenche pode ser de várias classes.",
      erroComum: "Exigir que o predicativo seja necessariamente adjetivo.",
      comoBancaPensa: "Item correto que separa o plano morfológico do sintático."
    }
  },
  {
    id: "PT-061", disciplina: "Língua Portuguesa", assunto: "Predicativo", subassunto: "Formas de representação",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.64,
    enunciado: "A função de predicativo somente pode ser exercida por adjetivos, pois apenas essa classe é capaz de atribuir qualidade ao sujeito ou ao objeto.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "somente ... por adjetivos ... apenas essa classe",
    cognitivo: {
      motivo: "Cobrar a mesma matéria pela restrição indevida da classe.",
      palavraCritica: "somente ... adjetivos",
    },
    comentario: {
      resolucao: "ERRADO. Substantivos exercem a função com frequência — em \"Meu pai foi delegado\", \"delegado\" é predicativo do sujeito e é substantivo. Também numerais, pronomes e locuções adjetivas a exercem. A restrição confunde a classe gramatical mais comum com a única possível.",
      fundamento: "Nomenclatura Gramatical Brasileira — classes que exercem a função de predicativo.",
      macete: "Substantivo também predica: 'Ele é escrivão' tem predicativo substantivo.",
      erroComum: "Igualar 'atribuir característica' a 'ser adjetivo'.",
      comoBancaPensa: "Restringe a função a uma só classe, com justificativa que parece razoável."
    }
  },
  {
    id: "PT-062", disciplina: "Língua Portuguesa", assunto: "Predicativo", subassunto: "Predicativo do objeto",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade gramatical)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.78,
    enunciado: "Em \"O conselho considerou improcedente a representação\", o termo \"improcedente\" é predicativo do objeto direto, atribuindo ao objeto \"a representação\" um juízo de valor emitido pelo sujeito.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "predicativo do objeto direto ... juízo de valor",
    cognitivo: {
      motivo: "Cobrar o predicativo do objeto com verbo de valor avaliativo.",
      palavraCritica: "atribuindo ao objeto ... juízo de valor",
    },
    comentario: {
      resolucao: "CERTO. Verbos como considerar, julgar, achar, nomear, eleger e declarar são avaliadores: o termo que os acompanha atribui característica ao objeto, não ao sujeito. \"Improcedente\" concorda com \"a representação\" — o objeto —, e não com \"O conselho\". O predicado é verbo-nominal, com núcleos \"considerou\" e \"improcedente\".",
      fundamento: "Nomenclatura Gramatical Brasileira — predicativo do objeto direto.",
      macete: "Considerar, julgar, achar, nomear: o que vem depois qualifica o objeto.",
      erroComum: "Ler o predicativo do objeto como predicativo do sujeito.",
      comoBancaPensa: "Item correto que exige identificar a quem a característica se refere."
    }
  },
  {
    id: "PT-063", disciplina: "Língua Portuguesa", assunto: "Predicativo", subassunto: "Predicativo do objeto",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.74,
    enunciado: "Em \"A comissão julgou inidôneo o fornecedor\", o termo \"inidôneo\" é predicativo do sujeito, por caracterizar aquele que pratica a ação de julgar.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "predicativo do sujeito ... caracterizar aquele que pratica a ação",
    cognitivo: {
      motivo: "Cobrar a mesma estrutura com a atribuição invertida.",
      palavraCritica: "predicativo do sujeito",
    },
    comentario: {
      resolucao: "ERRADO. \"Inidôneo\" qualifica \"o fornecedor\", que é o objeto direto — não \"A comissão\". Trata-se de predicativo do objeto direto. A concordância confirma: o adjetivo está no masculino singular, acompanhando \"fornecedor\", e não o feminino \"comissão\". Quem julga não é inidôneo; quem foi julgado é.",
      fundamento: "Nomenclatura Gramatical Brasileira — predicativo do objeto direto.",
      macete: "Veja com quem o adjetivo concorda. É ele que aponta a quem se refere.",
      erroComum: "Presumir que todo predicativo se refere ao sujeito.",
      comoBancaPensa: "Inverte o alvo do predicativo, com justificativa que soa lógica se ignorada a concordância."
    }
  },
  {
    id: "PT-064", disciplina: "Língua Portuguesa", assunto: "Predicativo", subassunto: "Predicativo do objeto indireto",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.55,
    enunciado: "Para a Nomenclatura Gramatical Brasileira, o predicativo do objeto indireto ocorre apenas com o verbo chamar empregado no sentido de denominar, como em \"Chamaram ao réu de inocente\".",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "apenas com o verbo chamar ... sentido de denominar",
    cognitivo: {
      motivo: "Contraexemplo: uma restrição de aparência arbitrária que a NGB efetivamente adota.",
      palavraCritica: "apenas com o verbo chamar",
    },
    comentario: {
      resolucao: "CERTO. A restrição é real. O verbo \"chamar\", no sentido de denominar, admite dupla regência: \"Chamaram o réu de inocente\" (objeto direto e predicativo do objeto direto) e \"Chamaram ao réu de inocente\" (objeto indireto e predicativo do objeto indireto). É o único caso reconhecido pela NGB para essa função — daí o \"apenas\", que não é exagero de banca.",
      fundamento: "Nomenclatura Gramatical Brasileira — predicativo do objeto indireto e a dupla regência de chamar.",
      macete: "Predicativo do objeto indireto: só com 'chamar' no sentido de denominar.",
      erroComum: "Marcar ERRADO por reflexo diante de 'apenas', ou desconhecer a dupla regência de chamar.",
      comoBancaPensa: "Veste de armadilha uma exclusividade que a nomenclatura oficial de fato consagra."
    }
  },

  /* ===== PREDICAÇÃO VERBAL E COMPLEMENTOS ===== */
  {
    id: "PT-065", disciplina: "Língua Portuguesa", assunto: "Predicação verbal", subassunto: "Transitividade",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos — contraexemplo)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.87,
    enunciado: "O verbo transitivo direto liga-se ao complemento sem preposição obrigatória, ao passo que o transitivo indireto exige preposição para introduzir seu complemento.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "sem preposição obrigatória ... exige preposição",
    cognitivo: {
      motivo: "Cobrar o critério de distinção entre as duas transitividades.",
      palavraCritica: "sem preposição obrigatória",
    },
    comentario: {
      resolucao: "CERTO. Em \"O delegado indiciou o suspeito\", \"indiciar\" é transitivo direto e \"o suspeito\" é objeto direto, sem preposição. Em \"O delegado discordou do laudo\", \"discordar\" é transitivo indireto e exige a preposição \"de\". Note a formulação precisa: \"sem preposição OBRIGATÓRIA\" — porque o objeto direto pode vir preposicionado em casos específicos, sem que a preposição seja exigida pelo verbo.",
      fundamento: "Nomenclatura Gramatical Brasileira — predicação verbal.",
      macete: "Pergunte 'o quê/quem' (direto) ou 'de quê/a quem' (indireto).",
      erroComum: "Deduzir a transitividade pelo sentido, sem testar a pergunta.",
      comoBancaPensa: "Item correto cuja precisão ('obrigatória') prepara o item sobre objeto direto preposicionado."
    }
  },
  {
    id: "PT-066", disciplina: "Língua Portuguesa", assunto: "Predicação verbal", subassunto: "Transitividade",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.75,
    enunciado: "Classifica-se como transitivo direto o verbo cujo complemento vem regido de preposição, ao passo que o transitivo indireto dispensa qualquer elemento de ligação entre verbo e complemento.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "transitivo direto ... regido de preposição ... indireto dispensa",
    cognitivo: {
      motivo: "Cobrar as duas transitividades pela inversão do critério.",
      palavraCritica: "transitivo direto ... regido de preposição",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido: quem exige preposição é o transitivo INDIRETO; quem dispensa é o DIRETO. O nome ajuda a fixar — o complemento chega direto ao verbo, sem intermediário, ou chega indiretamente, pela preposição.",
      fundamento: "Nomenclatura Gramatical Brasileira — predicação verbal.",
      macete: "Direto = sem ponte. Indireto = pela ponte da preposição.",
      erroComum: "Trocar os dois por não associar o nome ao critério.",
      comoBancaPensa: "Permuta os critérios de duas classificações elementares, contando com a leitura automática."
    }
  },
  {
    id: "PT-067", disciplina: "Língua Portuguesa", assunto: "Predicação verbal", subassunto: "Transitividade",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.72,
    enunciado: "Em \"O escrivão entregou o laudo ao delegado\", o verbo é transitivo direto e indireto; já em \"O perito assistiu ao interrogatório\", o verbo é transitivo indireto, e \"ao interrogatório\" é objeto indireto.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "transitivo direto e indireto ... transitivo indireto ... objeto indireto",
    cognitivo: {
      motivo: "Contraexemplo: duas transitividades distintas corretamente identificadas, uma delas com regência que a banca explora.",
      palavraCritica: "assistiu ao interrogatório",
    },
    comentario: {
      resolucao: "CERTO. \"Entregar\" pede dois complementos — entrega-se algo (objeto direto) a alguém (objeto indireto): transitivo direto e indireto. \"Assistir\", no sentido de presenciar, é transitivo indireto e rege a preposição \"a\" — daí \"assistiu AO interrogatório\". No sentido de prestar assistência, seria transitivo direto: \"O médico assistiu o ferido\".",
      fundamento: "Nomenclatura Gramatical Brasileira e regência do verbo assistir.",
      macete: "Assistir a algo = ver. Assistir alguém = socorrer. A preposição muda o sentido.",
      erroComum: "Marcar ERRADO por desconfiar de item que classifica dois verbos de uma vez.",
      comoBancaPensa: "Apresenta corretamente duas análises, uma delas envolvendo regência que costuma ser cobrada pelo erro."
    }
  },
  {
    id: "PT-068", disciplina: "Língua Portuguesa", assunto: "Termos integrantes da oração", subassunto: "Objeto direto preposicionado",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.68,
    enunciado: "Em \"A corporação respeita a todos os seus servidores\", a presença da preposição \"a\" transforma o termo destacado em objeto indireto, alterando a transitividade do verbo respeitar.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "presença da preposição ... transforma ... em objeto indireto",
    cognitivo: {
      motivo: "Cobrar o objeto direto preposicionado, em que a preposição não decorre da regência.",
      palavraCritica: "transforma o termo ... em objeto indireto",
    },
    comentario: {
      resolucao: "ERRADO. \"Respeitar\" é transitivo direto — respeita-se alguém, não a alguém. A preposição aqui é facultativa, de valor expressivo, e o termo continua sendo OBJETO DIRETO PREPOSICIONADO. A transitividade é propriedade do verbo: não muda porque se acrescentou uma preposição não exigida por ele.",
      fundamento: "Gramática normativa — objeto direto preposicionado.",
      macete: "Preposição que o verbo não pede não cria objeto indireto.",
      erroComum: "Tomar toda preposição como sinal de objeto indireto.",
      comoBancaPensa: "Usa a presença da preposição como se fosse critério suficiente, ignorando a regência do verbo."
    }
  },
  {
    id: "PT-069", disciplina: "Língua Portuguesa", assunto: "Termos integrantes da oração", subassunto: "Objeto direto preposicionado",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.6,
    enunciado: "O objeto direto preposicionado ocorre em hipóteses restritas, entre as quais o complemento representado por pronome oblíquo tônico, a ideia partitiva e o emprego da palavra Deus, como em \"O réu ofendeu a mim\" e \"Bebeu do vinho\".",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "hipóteses restritas ... pronome oblíquo tônico ... ideia partitiva ... palavra Deus",
    cognitivo: {
      motivo: "Contraexemplo: uma enumeração restritiva que corresponde ao que a gramática prevê.",
      palavraCritica: "hipóteses restritas",
    },
    comentario: {
      resolucao: "CERTO. As três hipóteses citadas são as tradicionalmente arroladas. Em \"O réu ofendeu a mim\", a preposição é exigida pelo pronome oblíquo tônico, não pelo verbo — que é transitivo direto. Em \"Bebeu do vinho\", a preposição marca o sentido partitivo: bebeu parte dele, não todo. Somam-se ainda casos de ênfase e de clareza na ordem inversa.",
      fundamento: "Gramática normativa — hipóteses de objeto direto preposicionado.",
      macete: "Preposição vinda do pronome, do partitivo ou de 'Deus': objeto direto preposicionado.",
      erroComum: "Marcar ERRADO por achar que a enumeração restringe demais.",
      comoBancaPensa: "Apresenta uma lista fechada que o candidato desconfia estar incompleta, mas que corresponde à doutrina."
    }
  },
  {
    id: "PT-070", disciplina: "Língua Portuguesa", assunto: "Termos integrantes da oração", subassunto: "Objeto indireto",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.71,
    enunciado: "Toda expressão preposicionada que suceda o verbo exerce a função de objeto indireto, como se verifica em \"O agente permaneceu na viatura\".",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "Toda expressão preposicionada que suceda o verbo ... objeto indireto",
    cognitivo: {
      motivo: "Cobrar que a posição não determina a função, e que só há objeto indireto se o verbo o exigir.",
      palavraCritica: "Toda expressão preposicionada",
    },
    comentario: {
      resolucao: "ERRADO. \"Permanecer\", no sentido de ficar em um lugar, não exige complemento: \"na viatura\" é adjunto adverbial de lugar. Só há objeto indireto quando o verbo é transitivo indireto e a preposição decorre da regência. Expressões preposicionadas após o verbo podem ser adjunto adverbial, complemento nominal ou agente da passiva.",
      fundamento: "Nomenclatura Gramatical Brasileira — objeto indireto x adjunto adverbial.",
      macete: "O verbo pede? É complemento. Só informa circunstância? É adjunto adverbial.",
      erroComum: "Classificar pela forma (tem preposição) em vez de pela exigência do verbo.",
      comoBancaPensa: "Generaliza um critério formal, ignorando que a função depende da regência."
    }
  },
  {
    id: "PT-071", disciplina: "Língua Portuguesa", assunto: "Termos integrantes da oração", subassunto: "Objeto pleonástico",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade gramatical)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.57,
    enunciado: "Em \"O inquérito, o delegado o concluiu em tempo recorde\", o pronome \"o\" configura objeto direto pleonástico, por retomar, com finalidade enfática, o termo deslocado para o início do período.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "objeto direto pleonástico ... retomar ... finalidade enfática",
    cognitivo: {
      motivo: "Cobrar a redundância sintática deliberada, recurso de ênfase.",
      palavraCritica: "retomar ... o termo deslocado",
    },
    comentario: {
      resolucao: "CERTO. O objeto pleonástico repete, por meio de pronome oblíquo átono, um complemento já antecipado na oração. \"O inquérito\" foi deslocado para o início e é retomado por \"o\" junto ao verbo. A redundância é intencional e legítima, não vício de linguagem. Existe também o objeto indireto pleonástico: \"A ele, nada lhe disseram\".",
      fundamento: "Gramática normativa — objeto direto e indireto pleonásticos.",
      macete: "Termo antecipado e retomado por pronome junto ao verbo: pleonástico.",
      erroComum: "Tomar a repetição por erro de redação.",
      comoBancaPensa: "Cobra uma nomenclatura pouco frequente, testando profundidade de estudo."
    }
  },
  {
    id: "PT-072", disciplina: "Língua Portuguesa", assunto: "Termos integrantes da oração", subassunto: "Objeto cognato",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade gramatical)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.52,
    enunciado: "Denomina-se objeto direto cognato, ou interno, aquele cujo núcleo repete o radical ou a ideia expressa pelo próprio verbo, como em \"Viveu uma vida difícil\".",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "cognato, ou interno ... repete o radical ou a ideia",
    cognitivo: {
      motivo: "Cobrar uma nomenclatura de menor frequência, que costuma diferenciar candidatos.",
      palavraCritica: "repete o radical ou a ideia expressa pelo próprio verbo",
    },
    comentario: {
      resolucao: "CERTO. O objeto cognato dá complemento a um verbo normalmente intransitivo, retomando sua própria significação — \"viver uma vida\", \"sonhar um sonho\", \"chorar lágrimas amargas\". Costuma vir acompanhado de modificador, que é o que justifica a construção: sem o adjetivo, a frase seria mera redundância.",
      fundamento: "Gramática normativa — objeto direto cognato ou interno.",
      macete: "Verbo e objeto da mesma família: objeto cognato.",
      erroComum: "Tratar a construção como pleonasmo vicioso.",
      comoBancaPensa: "Cobra termo técnico raro, para separar quem estudou a nomenclatura completa."
    }
  },
  {
    id: "PT-073", disciplina: "Língua Portuguesa", assunto: "Predicação verbal", subassunto: "Verbo intransitivo",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.7,
    enunciado: "O verbo intransitivo não admite que a ele se agregue qualquer termo, razão pela qual, em \"A guarnição chegou rapidamente ao local\", a presença de termos após o verbo revela tratar-se de verbo transitivo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "não admite ... qualquer termo ... revela tratar-se de verbo transitivo",
    cognitivo: {
      motivo: "Cobrar a diferença entre complemento (exigido) e adjunto (acessório).",
      palavraCritica: "não admite ... qualquer termo",
    },
    comentario: {
      resolucao: "ERRADO. O verbo intransitivo dispensa COMPLEMENTO, mas admite adjuntos adverbiais à vontade. Em \"A guarnição chegou rapidamente ao local\", \"chegar\" continua intransitivo: \"rapidamente\" é adjunto adverbial de modo e \"ao local\" é adjunto adverbial de lugar. Nenhum dos dois completa o sentido do verbo — apenas o circunstanciam.",
      fundamento: "Nomenclatura Gramatical Brasileira — verbos intransitivos e adjuntos adverbiais.",
      macete: "Intransitivo não pede complemento, mas aceita circunstância à vontade.",
      erroComum: "Concluir a transitividade pela mera presença de termos após o verbo.",
      comoBancaPensa: "Confunde ausência de complemento com ausência de qualquer termo posposto."
    }
  },
  {
    id: "PT-074", disciplina: "Língua Portuguesa", assunto: "Termos integrantes da oração", subassunto: "Objeto direto x objeto indireto",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.79,
    enunciado: "Na oração \"A autoridade policial ouvirá os depoimentos das testemunhas presenciais\", o termo \"os depoimentos das testemunhas presenciais\" exerce a função de objeto indireto.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "\"os depoimentos das testemunhas presenciais\" ... objeto indireto",
    cognitivo: {
      motivo: "Cobrar a identificação da função de um complemento longo e não preposicionado.",
      palavraCritica: "objeto indireto",
    },
    comentario: {
      resolucao: "ERRADO. \"Ouvir\" é transitivo direto: ouve-se alguma coisa, sem preposição. O termo é OBJETO DIRETO, cujo núcleo é \"depoimentos\". A preposição que aparece dentro do sintagma — em \"das testemunhas\" — liga-se ao substantivo \"depoimentos\", não ao verbo: ali há adjunto adnominal, e não regência verbal.",
      fundamento: "Nomenclatura Gramatical Brasileira — objeto direto e adjunto adnominal.",
      macete: "Preposição interna ao termo não torna o complemento indireto. Olhe o que o verbo pede.",
      erroComum: "Ver preposição em qualquer ponto do sintagma e concluir objeto indireto.",
      comoBancaPensa: "Alonga o complemento e insere preposição interna, para embaralhar a leitura da regência."
    }
  },

  /* ===== COMPLEMENTO NOMINAL X ADJUNTO ADNOMINAL ===== */
  {
    id: "PT-075", disciplina: "Língua Portuguesa", assunto: "Complemento nominal e adjunto adnominal", subassunto: "Conceitos",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.88,
    enunciado: "O adjunto adnominal modifica exclusivamente o substantivo, podendo ser representado por artigo, numeral, pronome adjetivo, adjetivo ou locução adjetiva, ao passo que o complemento nominal completa o sentido de substantivo abstrato, adjetivo ou advérbio, sempre por meio de preposição.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "adjunto adnominal modifica exclusivamente o substantivo ... complemento nominal completa ... sempre por meio de preposição",
    cognitivo: {
      motivo: "Cobrar as duas definições, base da distinção mais cobrada da sintaxe.",
      palavraCritica: "substantivo abstrato, adjetivo ou advérbio",
    },
    comentario: {
      resolucao: "CERTO. O adjunto adnominal caracteriza ou determina um substantivo e pode vir com ou sem preposição. O complemento nominal é sempre preposicionado e integra o sentido de um nome incompleto — que pode ser substantivo abstrato, adjetivo ou advérbio. Essa última possibilidade é a menos lembrada: em \"Agiu favoravelmente ao acordo\", \"ao acordo\" completa o advérbio.",
      fundamento: "Nomenclatura Gramatical Brasileira — adjunto adnominal e complemento nominal.",
      macete: "Adjunto adnominal só se liga a substantivo. Complemento nominal também completa adjetivo e advérbio.",
      erroComum: "Ignorar que adjetivo e advérbio admitem complemento nominal.",
      comoBancaPensa: "Item 'limpo' que estabelece o critério antes das aplicações mais difíceis."
    }
  },
  {
    id: "PT-076", disciplina: "Língua Portuguesa", assunto: "Complemento nominal e adjunto adnominal", subassunto: "Conceitos",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.72,
    enunciado: "O complemento nominal liga-se somente a substantivos, não havendo, na análise sintática, complemento de adjetivo ou de advérbio.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "somente a substantivos ... não havendo ... complemento de adjetivo ou de advérbio",
    cognitivo: {
      motivo: "Cobrar as três classes que admitem complemento nominal.",
      palavraCritica: "somente a substantivos",
    },
    comentario: {
      resolucao: "ERRADO. Adjetivos e advérbios admitem complemento nominal com frequência. Em \"O servidor é leal à instituição\", \"à instituição\" completa o adjetivo \"leal\". Em \"Agiu lealmente à instituição\", completa o advérbio \"lealmente\". Aliás, é justamente esse o critério mais seguro: expressão preposicionada ligada a adjetivo ou advérbio é sempre complemento nominal, sem chance de ser adjunto adnominal.",
      fundamento: "Nomenclatura Gramatical Brasileira — complemento nominal de substantivo, adjetivo e advérbio.",
      macete: "Ligado a adjetivo ou advérbio? Complemento nominal, sem dúvida.",
      erroComum: "Restringir o complemento nominal ao complemento de substantivo.",
      comoBancaPensa: "Suprime duas das três classes possíveis, deixando só a mais lembrada."
    }
  },
  {
    id: "PT-077", disciplina: "Língua Portuguesa", assunto: "Complemento nominal e adjunto adnominal", subassunto: "Substantivo concreto e abstrato",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.76,
    enunciado: "O complemento nominal nunca se liga a substantivo concreto, de modo que, sempre que uma expressão preposicionada se ligar a substantivo dessa natureza, será adjunto adnominal.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "nunca se liga a substantivo concreto ... sempre ... adjunto adnominal",
    cognitivo: {
      motivo: "Contraexemplo: dois absolutos ('nunca', 'sempre') em uma regra que efetivamente não admite exceção.",
      palavraCritica: "nunca ... sempre",
    },
    comentario: {
      resolucao: "CERTO. Substantivo concreto designa ser de existência independente e não precisa de complemento — não há sentido a completar. Assim, em \"a arma do crime\" ou \"o carro do suspeito\", as expressões preposicionadas são adjuntos adnominais. A dúvida entre as duas funções só se instala diante de substantivo ABSTRATO, e é aí que se aplicam os testes de agente e paciente.",
      fundamento: "Gramática normativa — complemento nominal e substantivos abstratos.",
      macete: "Substantivo concreto não tem complemento nominal. Só abstrato gera dúvida.",
      erroComum: "Marcar ERRADO por reflexo diante de 'nunca' e 'sempre'.",
      comoBancaPensa: "Emprega dois absolutos em regra categórica, punindo quem responde por vocabulário."
    }
  },
  {
    id: "PT-078", disciplina: "Língua Portuguesa", assunto: "Complemento nominal e adjunto adnominal", subassunto: "Substantivo concreto e abstrato",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.8,
    enunciado: "Em \"O revólver do acusado foi periciado\", a expressão \"do acusado\" exerce a função de complemento nominal, por completar o sentido do substantivo que a antecede.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "\"do acusado\" ... complemento nominal",
    cognitivo: {
      motivo: "Cobrar a aplicação do critério do substantivo concreto.",
      palavraCritica: "completar o sentido do substantivo",
    },
    comentario: {
      resolucao: "ERRADO. \"Revólver\" é substantivo concreto e tem sentido completo por si — nada há a completar. \"Do acusado\" apenas o especifica, indicando posse: é adjunto adnominal. O item usa o verbo \"completar\" como se bastasse enunciá-lo para que a função existisse.",
      fundamento: "Gramática normativa — adjunto adnominal ligado a substantivo concreto.",
      macete: "Ideia de posse junto a substantivo concreto: adjunto adnominal.",
      erroComum: "Classificar como complemento nominal toda expressão iniciada por 'de'.",
      comoBancaPensa: "Afirma a função e a justifica com a própria definição, sem testar se o substantivo a comporta."
    }
  },
  {
    id: "PT-079", disciplina: "Língua Portuguesa", assunto: "Complemento nominal e adjunto adnominal", subassunto: "Critério agente e paciente",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 95, probReaparecer: 0.83,
    enunciado: "Em \"a prisão do foragido\", a expressão \"do foragido\" é complemento nominal, por designar quem sofre a ação contida no substantivo abstrato; já em \"a decisão do magistrado\", \"do magistrado\" é adjunto adnominal, por designar quem a pratica.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "quem sofre a ação ... complemento nominal ... quem a pratica ... adjunto adnominal",
    cognitivo: {
      motivo: "Contraexemplo: o critério agente/paciente aplicado corretamente aos dois lados.",
      palavraCritica: "quem sofre ... quem pratica",
    },
    comentario: {
      resolucao: "CERTO. Diante de substantivo abstrato, o teste decisivo é o papel semântico. O foragido não prendeu — foi preso: é paciente, logo complemento nominal. O magistrado não foi decidido — ele decidiu: é agente, logo adjunto adnominal. Note que a mesma preposição \"de\" aparece nos dois, o que mostra que a forma não resolve a questão.",
      fundamento: "Gramática normativa — critério de agente e paciente na distinção entre adjunto adnominal e complemento nominal.",
      macete: "Praticou a ação? Adjunto adnominal. Sofreu a ação? Complemento nominal.",
      erroComum: "Marcar ERRADO por desconfiar de item que classifica duas expressões de modo oposto.",
      comoBancaPensa: "Aplica corretamente o critério que costuma inverter, checando compreensão do papel semântico."
    }
  },
  {
    id: "PT-080", disciplina: "Língua Portuguesa", assunto: "Complemento nominal e adjunto adnominal", subassunto: "Critério agente e paciente",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 95, probReaparecer: 0.81,
    enunciado: "Em \"a convocação dos peritos pela chefia\", a expressão \"dos peritos\" é adjunto adnominal, uma vez que o complemento nominal designa sempre o agente da ação expressa pelo substantivo abstrato.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "complemento nominal designa sempre o agente",
    cognitivo: {
      motivo: "Cobrar o mesmo critério com os papéis semânticos invertidos.",
      palavraCritica: "complemento nominal designa sempre o agente",
    },
    comentario: {
      resolucao: "ERRADO. A premissa está invertida: o complemento nominal designa o PACIENTE, e o adjunto adnominal, o agente. Os peritos não convocaram — foram convocados; \"dos peritos\" é, portanto, complemento nominal. Quem convocou é a chefia, e o próprio item entrega isso ao mencioná-la.",
      fundamento: "Gramática normativa — complemento nominal como paciente e adjunto adnominal como agente.",
      macete: "Complemento nominal é sempre o alvo da ação, nunca quem a pratica.",
      erroComum: "Trocar os papéis e classificar o paciente como adjunto adnominal.",
      comoBancaPensa: "Enuncia uma regra invertida e a aplica coerentemente, o que dá aparência de consistência ao erro."
    }
  },
  {
    id: "PT-081", disciplina: "Língua Portuguesa", assunto: "Complemento nominal e adjunto adnominal", subassunto: "Critério da preposição",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.7,
    enunciado: "Qualquer expressão preposicionada que se ligue diretamente a um adjetivo será sempre complemento nominal, como em \"O relatório é acessível a todos os servidores\".",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "Qualquer expressão preposicionada ... a um adjetivo ... sempre complemento nominal",
    cognitivo: {
      motivo: "Contraexemplo: um absoluto verdadeiro, que fornece o atalho mais seguro da matéria.",
      palavraCritica: "Qualquer ... sempre",
    },
    comentario: {
      resolucao: "CERTO. A regra é categórica e vale como atalho: adjunto adnominal só modifica SUBSTANTIVO. Logo, se o termo preposicionado se liga a um adjetivo, a única função possível é complemento nominal. O mesmo raciocínio se aplica aos advérbios. É o único ponto da matéria em que não é preciso testar agente e paciente.",
      fundamento: "Nomenclatura Gramatical Brasileira — complemento nominal de adjetivos e advérbios.",
      macete: "Ligou-se a adjetivo ou advérbio? Complemento nominal, sem análise adicional.",
      erroComum: "Marcar ERRADO diante de 'qualquer' e 'sempre', sem notar que a regra é mesmo fechada.",
      comoBancaPensa: "Reúne dois absolutos em regra sem exceção, para punir a resposta por vocabulário."
    }
  },
  {
    id: "PT-082", disciplina: "Língua Portuguesa", assunto: "Complemento nominal e adjunto adnominal", subassunto: "Critério da preposição",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.68,
    enunciado: "O adjunto adnominal jamais admite preposição, de sorte que a simples presença desse elemento em uma expressão ligada a substantivo basta para identificá-la como complemento nominal.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "jamais admite preposição ... basta para identificá-la como complemento nominal",
    cognitivo: {
      motivo: "Cobrar que o adjunto adnominal pode ou não vir preposicionado.",
      palavraCritica: "jamais admite preposição",
    },
    comentario: {
      resolucao: "ERRADO. O adjunto adnominal admite preposição sem dificuldade: em \"casa de madeira\", \"homem de coragem\" e \"delegacia da capital\", todas as expressões preposicionadas são adjuntos adnominais. É precisamente por ambos poderem ser preposicionados que a distinção entre adjunto adnominal e complemento nominal exige análise, e não simples inspeção da forma.",
      fundamento: "Nomenclatura Gramatical Brasileira — adjunto adnominal preposicionado.",
      macete: "Preposição não decide nada. Se decidisse, não haveria a dificuldade clássica da matéria.",
      erroComum: "Adotar a presença de preposição como critério suficiente.",
      comoBancaPensa: "Oferece um critério formal simples para uma distinção que é semântica."
    }
  },

  /* ===== ADJUNTO ADVERBIAL E ADVÉRBIO ===== */
  {
    id: "PT-083", disciplina: "Língua Portuguesa", assunto: "Termos acessórios da oração", subassunto: "Adjunto adverbial",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização — contraexemplo)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "O adjunto adverbial exprime circunstância e é invariável, podendo modificar o verbo, o adjetivo, outro advérbio ou a oração inteira.",
    gabarito: "C", pegadinha: "generalizacao", palavraChave: "exprime circunstância ... invariável ... a oração inteira",
    cognitivo: {
      motivo: "Cobrar a definição e o alcance do adjunto adverbial.",
      palavraCritica: "ou a oração inteira",
    },
    comentario: {
      resolucao: "CERTO. A invariabilidade é o traço formal que o distingue do predicativo. Quanto ao alcance, o adjunto adverbial modifica verbo (\"agiu prudentemente\"), adjetivo (\"muito prudente\"), outro advérbio (\"bem prudentemente\") e até a oração toda (\"Infelizmente, o prazo venceu\"), caso em que se costuma chamá-lo de modalizador.",
      fundamento: "Nomenclatura Gramatical Brasileira — adjunto adverbial.",
      macete: "Invariável e circunstancial. Se varia, não é adjunto adverbial.",
      erroComum: "Restringir o adjunto adverbial à modificação do verbo.",
      comoBancaPensa: "Item 'limpo' que fixa o critério formal usado nas comparações seguintes."
    }
  },
  {
    id: "PT-084", disciplina: "Língua Portuguesa", assunto: "Termos acessórios da oração", subassunto: "Adjunto adverbial x adnominal",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.73,
    enunciado: "Em \"A perícia examinou o veículo com lupa\", a expressão \"com lupa\" é adjunto adnominal, por acrescentar informação ao substantivo \"veículo\".",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "\"com lupa\" ... adjunto adnominal",
    cognitivo: {
      motivo: "Cobrar a identificação do termo modificado, que decide entre as duas funções.",
      palavraCritica: "acrescentar informação ao substantivo",
    },
    comentario: {
      resolucao: "ERRADO. \"Com lupa\" não caracteriza o veículo — não se trata de um veículo com lupa. A expressão indica o instrumento com que se examinou: liga-se ao verbo e é adjunto adverbial de instrumento. O teste é deslocar o termo: \"Com lupa, a perícia examinou o veículo\" continua coerente, o que confirma o vínculo com o verbo, não com o substantivo.",
      fundamento: "Nomenclatura Gramatical Brasileira — adjunto adverbial de instrumento.",
      macete: "Dá para deslocar sem quebrar o sentido? Liga-se ao verbo: adjunto adverbial.",
      erroComum: "Classificar pela proximidade com o substantivo, e não pelo sentido.",
      comoBancaPensa: "Explora a posição do termo, contando com a análise por vizinhança em vez de por função."
    }
  },
  {
    id: "PT-085", disciplina: "Língua Portuguesa", assunto: "Termos acessórios da oração", subassunto: "Circunstâncias do adjunto adverbial",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.71,
    enunciado: "Em \"O suspeito confessou por medo\", a expressão \"por medo\" é adjunto adverbial de causa; já em \"O suspeito confessou sem hesitação\", \"sem hesitação\" é adjunto adverbial de modo.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "por medo ... causa ... sem hesitação ... modo",
    cognitivo: {
      motivo: "Contraexemplo: duas circunstâncias distintas corretamente identificadas no mesmo verbo.",
      palavraCritica: "causa ... modo",
    },
    comentario: {
      resolucao: "CERTO. O medo é o motivo que levou à confissão — circunstância de causa, verificável pela pergunta \"por que confessou?\". A ausência de hesitação descreve como a confissão se deu — circunstância de modo, verificável por \"de que maneira confessou?\". O mesmo verbo admite as duas, e a preposição isolada não define a circunstância: o contexto define.",
      fundamento: "Nomenclatura Gramatical Brasileira — circunstâncias do adjunto adverbial.",
      macete: "Por que aconteceu? Causa. Como aconteceu? Modo.",
      erroComum: "Marcar ERRADO por desconfiar de item que classifica duas expressões de uma vez.",
      comoBancaPensa: "Apresenta corretamente duas circunstâncias vizinhas, checando o uso das perguntas-teste."
    }
  },
  {
    id: "PT-086", disciplina: "Língua Portuguesa", assunto: "Termos acessórios da oração", subassunto: "Circunstâncias do adjunto adverbial",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.69,
    enunciado: "Em \"O policial desmaiou de exaustão após o plantão\", a expressão \"de exaustão\" configura adjunto adverbial de modo, por descrever a maneira como ocorreu o desmaio.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "\"de exaustão\" ... adjunto adverbial de modo",
    cognitivo: {
      motivo: "Cobrar a distinção entre causa e modo em construção que admite as duas leituras à primeira vista.",
      palavraCritica: "maneira como ocorreu",
    },
    comentario: {
      resolucao: "ERRADO. A exaustão é o motivo do desmaio, não a maneira dele: trata-se de adjunto adverbial de CAUSA. A pergunta-teste resolve — \"Por que desmaiou?\", \"De exaustão\". Modo responderia a \"como desmaiou?\", e a resposta seria algo como \"subitamente\". A preposição \"de\" introduz várias circunstâncias, o que exige análise do sentido.",
      fundamento: "Nomenclatura Gramatical Brasileira — adjunto adverbial de causa.",
      macete: "Causa responde 'por quê'. Modo responde 'de que maneira'.",
      erroComum: "Classificar como modo toda expressão que descreve o estado em que a ação ocorreu.",
      comoBancaPensa: "Oferece uma paráfrase enganosa ('a maneira como') para induzir à circunstância errada."
    }
  },
  {
    id: "PT-087", disciplina: "Língua Portuguesa", assunto: "Termos acessórios da oração", subassunto: "Modalizadores",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade gramatical)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.64,
    enunciado: "Em \"Lamentavelmente, o inquérito foi arquivado\", o termo inicial não modifica apenas o verbo, mas incide sobre todo o enunciado, revelando a avaliação de quem o profere — razão por que se costuma classificá-lo como modalizador.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "incide sobre todo o enunciado ... avaliação de quem o profere ... modalizador",
    cognitivo: {
      motivo: "Cobrar o adjunto adverbial de escopo oracional, cobrado em interpretação e em sintaxe.",
      palavraCritica: "revelando a avaliação de quem o profere",
    },
    comentario: {
      resolucao: "CERTO. Não se afirma que o arquivamento se deu de modo lamentável, mas que o enunciador lamenta o fato. Por isso o termo é chamado modalizador: exprime a atitude do falante diante do que enuncia. O mesmo ocorre com \"felizmente\", \"sinceramente\" e \"evidentemente\" — todos sinalizam subjetividade, o que torna o recurso relevante também em interpretação.",
      fundamento: "Gramática normativa e linguística textual — adjuntos adverbiais modalizadores.",
      macete: "Vírgula, começo de frase e opinião do falante: modalizador.",
      erroComum: "Ler o advérbio como circunstância de modo do verbo.",
      comoBancaPensa: "Cobra a diferença entre modificar o verbo e modalizar o enunciado inteiro."
    }
  },
  {
    id: "PT-088", disciplina: "Língua Portuguesa", assunto: "Advérbio", subassunto: "Classificação semântica",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.75,
    enunciado: "Os advérbios formados pelo acréscimo do sufixo -mente exprimem invariavelmente circunstância de modo, como se observa em \"provavelmente\", \"extremamente\" e \"diariamente\".",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "invariavelmente circunstância de modo",
    cognitivo: {
      motivo: "Cobrar que o sufixo não determina a circunstância expressa.",
      palavraCritica: "invariavelmente ... de modo",
    },
    comentario: {
      resolucao: "ERRADO. Os três exemplos do próprio item desmentem a regra: \"provavelmente\" exprime dúvida, \"extremamente\" exprime intensidade e \"diariamente\" exprime tempo. O sufixo -mente forma advérbios de várias circunstâncias; a classificação depende do sentido no contexto, jamais da terminação.",
      fundamento: "Gramática normativa — classificação semântica dos advérbios.",
      macete: "Sufixo -mente não é sinônimo de modo. Classifique pelo sentido.",
      erroComum: "Associar automaticamente a terminação -mente à circunstância de modo.",
      comoBancaPensa: "Enuncia uma regra falsa e a ilustra com exemplos que a contradizem, apostando que não serão testados."
    }
  },

  /* ===== MORFOLOGIA ===== */
  {
    id: "PT-089", disciplina: "Língua Portuguesa", assunto: "Classes de palavras", subassunto: "Substantivo e adjetivo",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.72,
    enunciado: "Uma mesma palavra pode pertencer a classes distintas conforme o emprego: em \"O policial chegou\", \"policial\" é substantivo; em \"O inquérito policial foi concluído\", é adjetivo.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "classes distintas conforme o emprego ... substantivo ... adjetivo",
    cognitivo: {
      motivo: "Cobrar que a classe gramatical se define no uso, e não isoladamente.",
      palavraCritica: "conforme o emprego",
    },
    comentario: {
      resolucao: "CERTO. No primeiro caso, \"policial\" nomeia um ser e é núcleo do sujeito: substantivo. No segundo, caracteriza \"inquérito\": adjetivo. O fenômeno chama-se derivação imprópria e é largamente cobrado — vale igualmente para \"jovem\", \"brasileiro\" e para adjetivos substantivados, como em \"Os feridos foram socorridos\".",
      fundamento: "Gramática normativa — derivação imprópria e mudança de classe gramatical.",
      macete: "Palavra solta não tem classe definida. Classe se decide na frase.",
      erroComum: "Decorar a classe de cada palavra em vez de analisar o emprego.",
      comoBancaPensa: "Item correto que cobra método de análise, e não memorização de listas."
    }
  },
  {
    id: "PT-090", disciplina: "Língua Portuguesa", assunto: "Classes de palavras", subassunto: "Pronome possessivo",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.74,
    enunciado: "Em \"Nosso objetivo é reduzir os índices de criminalidade\", a palavra \"Nosso\" classifica-se morfologicamente como artigo definido, por determinar o substantivo que a sucede.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "\"Nosso\" ... artigo definido",
    cognitivo: {
      motivo: "Cobrar a diferença entre classe gramatical e função sintática, e entre artigo e pronome.",
      palavraCritica: "artigo definido, por determinar o substantivo",
    },
    comentario: {
      resolucao: "ERRADO. \"Nosso\" é pronome possessivo — os artigos definidos são apenas o, a, os, as. O item se apoia em uma verdade parcial: a palavra de fato determina o substantivo, e por isso exerce a função sintática de adjunto adnominal. Mas determinar não é ser artigo: classe gramatical é morfologia; adjunto adnominal é sintaxe.",
      fundamento: "Gramática normativa — classes de palavras e função de adjunto adnominal.",
      macete: "Artigo definido é só o, a, os, as. O resto que determina é pronome ou numeral.",
      erroComum: "Confundir a função (adjunto adnominal) com a classe (pronome possessivo).",
      comoBancaPensa: "Usa uma justificativa sintática verdadeira para sustentar uma classificação morfológica falsa."
    }
  },
  {
    id: "PT-091", disciplina: "Língua Portuguesa", assunto: "Classes de palavras", subassunto: "Preposição — combinação e contração",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.66,
    enunciado: "Ocorre combinação quando a preposição se une a outra palavra sem sofrer perda de fonema, como em \"ao\" e \"aos\"; ocorre contração quando há perda ou alteração de fonema, como em \"do\", \"nesta\" e \"àquele\".",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "combinação ... sem sofrer perda de fonema ... contração ... perda ou alteração",
    cognitivo: {
      motivo: "Contraexemplo: dois fenômenos que a banca permuta, aqui definidos corretamente.",
      palavraCritica: "sem sofrer perda de fonema",
    },
    comentario: {
      resolucao: "CERTO. Em \"a + o = ao\", nada se perde: a preposição e o artigo permanecem íntegros — é combinação. Em \"de + o = do\", perde-se o \"e\"; em \"em + esta = nesta\" e \"a + aquele = àquele\", há alteração — são contrações. O critério é exclusivamente fonético, e a lista de combinações é curtíssima: ao, aos, aonde.",
      fundamento: "Gramática normativa — combinação e contração de preposições.",
      macete: "Perdeu letra ou som? Contração. Só juntou? Combinação. 'Ao' é o exemplo clássico.",
      erroComum: "Marcar ERRADO por desconfiar de item que define dois fenômenos de uma vez.",
      comoBancaPensa: "Define corretamente o par que costuma inverter, checando o domínio do critério fonético."
    }
  },
  {
    id: "PT-092", disciplina: "Língua Portuguesa", assunto: "Classes de palavras", subassunto: "Preposição — combinação e contração",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.6,
    enunciado: "A forma \"pelos\", resultante da união da preposição per com o artigo os, constitui exemplo de combinação, visto que ambas as palavras se mantêm integralmente em sua constituição original.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "\"pelos\" ... combinação ... se mantêm integralmente",
    cognitivo: {
      motivo: "Cobrar a aplicação do critério fonético a um caso concreto.",
      palavraCritica: "se mantêm integralmente",
    },
    comentario: {
      resolucao: "ERRADO. \"Pelos\" é contração: a antiga preposição \"per\" perde o \"r\" ao unir-se ao artigo. Só há combinação quando nada se altera, o que ocorre em \"ao\", \"aos\" e \"aonde\". Havendo qualquer supressão ou modificação de som, o fenômeno é contração — como em do, no, dele, nesta, àquela.",
      fundamento: "Gramática normativa — contração de preposições.",
      macete: "Se sumiu alguma letra na junção, é contração. 'Pelos' perdeu o r.",
      erroComum: "Classificar como combinação toda união de preposição com artigo.",
      comoBancaPensa: "Afirma a integridade das formas justamente no caso em que houve perda fonética."
    }
  },
  {
    id: "PT-093", disciplina: "Língua Portuguesa", assunto: "Classes de palavras", subassunto: "Locução adjetiva",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos — contraexemplo)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.63,
    enunciado: "A locução adjetiva é o conjunto de preposição e substantivo que equivale a um adjetivo, como em \"prova de perícia\", correspondente a \"prova pericial\", e exerce, na oração, a função de adjunto adnominal.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "preposição e substantivo que equivale a um adjetivo ... adjunto adnominal",
    cognitivo: {
      motivo: "Cobrar a locução adjetiva e sua função sintática.",
      palavraCritica: "exerce ... a função de adjunto adnominal",
    },
    comentario: {
      resolucao: "CERTO. A locução adjetiva é formada por preposição mais substantivo e comporta-se como adjetivo, caracterizando um nome — daí exercer a função de adjunto adnominal. Outros exemplos: \"de mãe\" (materno), \"de crime\" (criminal), \"de juiz\" (judicial). Nem toda locução adjetiva tem adjetivo correspondente, mas a função permanece.",
      fundamento: "Gramática normativa — locução adjetiva e adjunto adnominal.",
      macete: "Preposição + substantivo com valor de adjetivo: locução adjetiva, função de adjunto adnominal.",
      erroComum: "Classificar a locução adjetiva como complemento nominal, por vir preposicionada.",
      comoBancaPensa: "Item correto que articula morfologia e sintaxe no mesmo enunciado."
    }
  },
  {
    id: "PT-094", disciplina: "Língua Portuguesa", assunto: "Classes de palavras", subassunto: "Classe gramatical e função sintática",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.7,
    enunciado: "As expressões \"adjunto adnominal\" e \"adjetivo\" designam a mesma realidade linguística, sendo a primeira a denominação adotada pela morfologia e a segunda, pela sintaxe.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "mesma realidade linguística ... morfologia ... sintaxe",
    cognitivo: {
      motivo: "Cobrar a separação entre os planos morfológico e sintático, que atravessa toda a matéria.",
      palavraCritica: "a mesma realidade linguística",
    },
    comentario: {
      resolucao: "ERRADO. Não são a mesma coisa, e os rótulos ainda estão invertidos: \"adjetivo\" é classe gramatical, matéria da MORFOLOGIA; \"adjunto adnominal\" é função, matéria da SINTAXE. Além disso, não há correspondência de um para um: um artigo, um numeral ou um pronome possessivo também exercem a função de adjunto adnominal sem serem adjetivos.",
      fundamento: "Gramática normativa — distinção entre classe gramatical e função sintática.",
      macete: "Classe é o que a palavra é. Função é o que ela faz na frase.",
      erroComum: "Tratar classe e função como sinônimos.",
      comoBancaPensa: "Funde os dois planos de análise e ainda inverte a qual disciplina cada termo pertence."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE67);

/* Frequência de temas — Língua Portuguesa (Módulo Sintaxe e Morfologia) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Língua Portuguesa");
  if (!d) { d = { disciplina: "Língua Portuguesa", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Sintaxe — complemento nominal x adjunto adnominal", freq: 86, tendencia: "alta", prob: 0.86 },
    { tema: "Sintaxe — tipos de sujeito, oração sem sujeito e concordância com 'se'", freq: 88, tendencia: "alta", prob: 0.88 },
    { tema: "Sintaxe — predicação verbal, complementos e tipos de predicado", freq: 85, tendencia: "alta", prob: 0.85 },
    { tema: "Sintaxe — predicativo do sujeito x adjunto adverbial", freq: 78, tendencia: "media", prob: 0.78 },
    { tema: "Morfologia — classes de palavras e função sintática", freq: 76, tendencia: "media", prob: 0.76 },
  );
})();
