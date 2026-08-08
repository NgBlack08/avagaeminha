/* =====================================================================
   QUESTLAB — LOTE 79 — 2º ciclo: cobertura do material restante

   O lote 78 atacou as cinco maiores lacunas do cronograma do 2º ciclo.
   Este cobre os diplomas restantes, que já tinham questões no banco mas
   apenas em alguns recortes. Para não gerar item repetido, cada
   subassunto aqui foi conferido contra o que já existia:

     Pacto de São José — o banco já tratava prisão civil, pena de morte,
       garantias judiciais e Corte Interamericana. Ficaram de fora, e
       entram aqui: suspensão de garantias em estado de emergência
       (art. 27), direito de retificação (art. 14), expulsão coletiva
       (art. 22.9), propriedade privada (art. 21), igualdade perante a
       lei (art. 24) e normas de interpretação (art. 29).

     PNDH-3 — havia natureza, estrutura e princípios. Entram os eixos
       nomeados, sobretudo o Eixo IV (segurança pública), que é o de
       interesse direto para carreira policial.

     Lei 9.605/1998 — o banco tinha doze itens, onze deles sobre
       responsabilidade penal da pessoa jurídica. Os crimes em espécie
       (fauna, poluição, patrimônio cultural) estavam descobertos.

     Lei 8.137/1990 — havia SV 24 e classificação dos tipos. Entram a
       delação do art. 16, parágrafo único, e a conversão do art. 9º.

     Decreto-Lei 201/1967 — dois itens sobre prefeitos. Entra a
       distinção entre crime de responsabilidade (art. 1º, julgado pelo
       Judiciário) e infração político-administrativa (art. 4º, julgada
       pela Câmara), que é o ponto que a banca mais explora.

     LGPD — havia dados sensíveis e sanções. Entram as hipóteses de não
       aplicação do art. 4º, decisivas para atividade policial.

   Fora deste lote, deliberadamente: lavagem de dinheiro (Lei 9.613/98)
   já somava 30 itens no banco para um único dia de leitura, e o
   Estatuto da Pessoa Idosa já somava 28 — ambos saturados. Acrescentar
   ali produziria repetição, não cobertura.

   Gabarito e comprimento: ver a nota metodológica do lote 77. O
   equilíbrio foi medido depois de escrito, não presumido.
   ===================================================================== */

const CARGOS79 = ["Escrivão", "Agente"];
const BASE79 = {
  concurso: "PCAL", cargo: CARGOS79, ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
};

const QUESTOES_PCAL_LOTE79 = [

  /* ===== PACTO DE SÃO JOSÉ — artigos ainda não cobertos ===== */

  {
    ...BASE79, disciplina: "Direitos Humanos",
    id: "DH-201", assunto: "Pacto de São José da Costa Rica", subassunto: "Suspensão de garantias — art. 27",
    origem: "Inédita — estilo CEBRASPE (Decreto 678/1992)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "Em caso de guerra, perigo público ou outra emergência que ameace a independência do Estado-parte, a Convenção Americana admite a suspensão das garantias judiciais indispensáveis à proteção dos direitos nela previstos.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "garantias judiciais indispensáveis",
    cognitivo: {
      motivo: "Cobrar a parte final do art. 27.2, que blinda as garantias processuais mesmo durante a suspensão.",
      palavraCritica: "indispensáveis",
    },
    comentario: {
      resolucao: "ERRADO. O art. 27.2 veda a suspensão de um núcleo de direitos e, expressamente, 'nem das garantias indispensáveis para a proteção de tais direitos'. Suspender as garantias esvaziaria a própria proteção do núcleo intangível — daí a ressalva final.",
      fundamento: "Convenção Americana sobre Direitos Humanos, art. 27, itens 1 e 2.",
      macete: "Estado de emergência suspende direitos suspensíveis, nunca as garantias que protegem os insuspensíveis.",
      erroComum: "Ler o art. 27.1 isoladamente e concluir que a emergência autoriza suspensão ampla.",
      comoBancaPensa: "Reproduz a hipótese autorizadora corretamente e omite a ressalva final do dispositivo."
    }
  },
  {
    ...BASE79, disciplina: "Direitos Humanos",
    id: "DH-202", assunto: "Pacto de São José da Costa Rica", subassunto: "Núcleo insuspensível — art. 27.2",
    origem: "Inédita — estilo CEBRASPE (Decreto 678/1992)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "Entre os direitos que a Convenção Americana declara insuscetíveis de suspensão estão o direito à vida, a proibição da escravidão, a liberdade de consciência e religião, o direito ao nome e os direitos políticos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "direito ao nome",
    cognitivo: {
      motivo: "Fixar o rol taxativo do art. 27.2, cuja composição surpreende — inclui o direito ao nome e exclui a liberdade pessoal.",
      palavraCritica: "direitos políticos",
    },
    comentario: {
      resolucao: "CERTO. O art. 27.2 lista os arts. 3 (personalidade jurídica), 4 (vida), 5 (integridade), 6 (escravidão), 9 (legalidade), 12 (consciência e religião), 17 (família), 18 (nome), 19 (criança), 20 (nacionalidade) e 23 (direitos políticos). Todos os citados no item constam do rol.",
      fundamento: "Convenção Americana sobre Direitos Humanos, art. 27, item 2.",
      macete: "O rol NÃO inclui os arts. 7 (liberdade pessoal), 8 (garantias judiciais como direito), 13 (expressão), 21 (propriedade) e 22 (circulação) — esses são suspensíveis.",
      erroComum: "Presumir que a liberdade pessoal e a liberdade de expressão, por serem centrais, estariam no núcleo intangível.",
      comoBancaPensa: "Rol taxativo pouco intuitivo: cobra tanto o que está quanto o que não está."
    }
  },
  {
    ...BASE79, disciplina: "Direitos Humanos",
    id: "DH-203", assunto: "Pacto de São José da Costa Rica", subassunto: "Expulsão de estrangeiros — art. 22",
    origem: "Inédita — estilo CEBRASPE (Decreto 678/1992)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "A Convenção Americana proíbe a expulsão coletiva de estrangeiros.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "expulsão coletiva",
    cognitivo: {
      motivo: "Fixar a vedação do art. 22.9, que distingue expulsão individual (admissível com devido processo) de coletiva (vedada).",
      palavraCritica: "coletiva",
    },
    comentario: {
      resolucao: "CERTO. O art. 22, item 9, é expresso: 'É proibida a expulsão coletiva de estrangeiros.' A vedação recai sobre a expulsão em bloco, sem exame individual de cada situação — a expulsão individual segue admitida, observado o devido processo.",
      fundamento: "Convenção Americana sobre Direitos Humanos, art. 22, item 9.",
      macete: "O que a Convenção proíbe é o 'em bloco', não a expulsão em si.",
      erroComum: "Estender a vedação a toda e qualquer expulsão de estrangeiro.",
      comoBancaPensa: "Item literal curto — a variante errada troca 'coletiva' por 'de estrangeiros', ampliando a proibição."
    }
  },
  {
    ...BASE79, disciplina: "Direitos Humanos",
    id: "DH-204", assunto: "Pacto de São José da Costa Rica", subassunto: "Direito de retificação — art. 14",
    origem: "Inédita — estilo CEBRASPE (Decreto 678/1992)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "O direito de retificação ou resposta assegurado pela Convenção Americana exonera o responsável pela informação inexata das demais responsabilidades legais em que houver incorrido.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "exonera",
    cognitivo: {
      motivo: "Cobrar a parte final do art. 14.1, que preserva a cumulação de responsabilidades.",
      palavraCritica: "exonera",
    },
    comentario: {
      resolucao: "ERRADO. O art. 14.1 é expresso ao ressalvar que o exercício do direito de retificação ou resposta NÃO isenta das outras responsabilidades legais em que se houver incorrido. Retificar não substitui a reparação civil nem eventual responsabilização penal.",
      fundamento: "Convenção Americana sobre Direitos Humanos, art. 14, item 1.",
      macete: "Retificação soma, não substitui: responde na mesma medida em outras esferas.",
      erroComum: "Tratar a retificação como reparação suficiente e exclusiva.",
      comoBancaPensa: "Inverte a ressalva final do dispositivo, que costuma passar despercebida."
    }
  },
  {
    ...BASE79, disciplina: "Direitos Humanos",
    id: "DH-205", assunto: "Pacto de São José da Costa Rica", subassunto: "Propriedade privada — art. 21",
    origem: "Inédita — estilo CEBRASPE (Decreto 678/1992)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "Segundo a Convenção Americana, nenhuma pessoa pode ser privada de seus bens, salvo mediante o pagamento de indenização justa, por motivo de utilidade pública ou de interesse social e nos casos e na forma estabelecidos pela lei.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "indenização justa",
    cognitivo: {
      motivo: "Fixar os requisitos cumulativos do art. 21.2 para a privação da propriedade.",
      palavraCritica: "justa",
    },
    comentario: {
      resolucao: "CERTO. É o art. 21, item 2. Os requisitos são cumulativos: indenização justa, motivo de utilidade pública ou interesse social, e observância dos casos e formas legais.",
      fundamento: "Convenção Americana sobre Direitos Humanos, art. 21, item 2.",
      macete: "Três exigências ao mesmo tempo: indenização + finalidade pública + forma legal.",
      erroComum: "Supor que a utilidade pública, sozinha, autorizaria a privação.",
      comoBancaPensa: "Item verdadeiro e completo; a versão errada suprime a indenização ou troca 'justa' por 'prévia'."
    }
  },
  {
    ...BASE79, disciplina: "Direitos Humanos",
    id: "DH-206", assunto: "Pacto de São José da Costa Rica", subassunto: "Normas de interpretação — art. 29",
    origem: "Inédita — estilo CEBRASPE (Decreto 678/1992)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "A Convenção Americana admite que suas disposições sejam interpretadas de modo a limitar o gozo de direitos reconhecidos pela legislação interna de um Estado-parte, quando esta for mais restritiva que o tratado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "limitar o gozo",
    cognitivo: {
      motivo: "Cobrar o princípio pro homine do art. 29, que veda exatamente a leitura restritiva proposta pelo item.",
      palavraCritica: "limitar",
    },
    comentario: {
      resolucao: "ERRADO. O art. 29 proíbe interpretação que limite o gozo dos direitos reconhecidos, seja pela própria Convenção, seja pelas leis internas. Vigora o princípio pro homine: prevalece sempre a norma mais favorável à pessoa, venha ela do tratado ou do direito interno.",
      fundamento: "Convenção Americana sobre Direitos Humanos, art. 29.",
      macete: "Pro homine: entre tratado e lei interna, aplica-se a que mais protege — nunca a que mais restringe.",
      erroComum: "Aplicar hierarquia formal entre tratado e lei, em vez do critério da maior proteção.",
      comoBancaPensa: "Propõe um raciocínio hierárquico correto em outros ramos, mas vedado em direitos humanos."
    }
  },
  {
    ...BASE79, disciplina: "Direitos Humanos",
    id: "DH-207", assunto: "Pacto de São José da Costa Rica", subassunto: "Igualdade perante a lei — art. 24",
    origem: "Inédita — estilo CEBRASPE (Decreto 678/1992)",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "Todas as pessoas são iguais perante a lei e têm direito, sem discriminação, a igual proteção da lei.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "igual proteção",
    cognitivo: {
      motivo: "Fixar o art. 24 na sua redação exata, base para os itens sobre ações afirmativas.",
      palavraCritica: "sem discriminação",
    },
    comentario: {
      resolucao: "CERTO. Reprodução literal do art. 24. A cláusula abrange tanto a igualdade formal (perante a lei) quanto a igual proteção material que dela decorre.",
      fundamento: "Convenção Americana sobre Direitos Humanos, art. 24.",
      macete: "Art. 24 é igualdade; art. 1.1 é a obrigação de respeitar sem discriminação. São dispositivos distintos.",
      erroComum: "Confundir o art. 24 com a cláusula de não discriminação do art. 1.1.",
      comoBancaPensa: "Item literal simples, útil como âncora de bloco temático."
    }
  },

  /* ===== PNDH-3 — eixos orientadores ===== */

  {
    ...BASE79, disciplina: "Direitos Humanos",
    id: "DH-208", assunto: "PNDH-3", subassunto: "Instrumento normativo — Decretos 7.037/2009 e 7.177/2010",
    origem: "Inédita — estilo CEBRASPE (Decreto 7.037/2009)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "O PNDH-3 foi aprovado por decreto presidencial e teve seu texto alterado, no ano seguinte à edição, por novo decreto.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "alterado",
    cognitivo: {
      motivo: "Fixar a existência da revisão de 2010, que reescreveu pontos polêmicos e costuma ser ignorada por quem só decora o decreto original.",
      palavraCritica: "alterado",
    },
    comentario: {
      resolucao: "CERTO. O PNDH-3 foi aprovado pelo Decreto nº 7.037, de 21 de dezembro de 2009, e alterado pelo Decreto nº 7.177, de 12 de maio de 2010, que revisou diretrizes e ações programáticas após intensa repercussão pública.",
      fundamento: "Decreto nº 7.037/2009, alterado pelo Decreto nº 7.177/2010.",
      macete: "Dois decretos, não um: 7.037/2009 aprova e 7.177/2010 altera.",
      erroComum: "Tratar o Decreto 7.037/2009 como texto vigente sem alterações.",
      comoBancaPensa: "Cobra o dado histórico-normativo que separa quem leu a norma de quem leu o resumo."
    }
  },
  {
    ...BASE79, disciplina: "Direitos Humanos",
    id: "DH-209", assunto: "PNDH-3", subassunto: "Eixo Orientador VI — memória e verdade",
    origem: "Inédita — estilo CEBRASPE (Decreto 7.037/2009)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "O eixo orientador do PNDH-3 relativo ao direito à memória e à verdade tem por objeto exclusivo a preservação do patrimônio histórico e artístico nacional.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "patrimônio histórico e artístico",
    cognitivo: {
      motivo: "Impedir a leitura do Eixo VI como política cultural, quando seu objeto é a memória de graves violações de direitos humanos.",
      palavraCritica: "exclusivo",
    },
    comentario: {
      resolucao: "ERRADO. O Eixo Orientador VI — 'Direito à Memória e à Verdade' — volta-se ao esclarecimento de graves violações de direitos humanos ocorridas no passado, à reparação das vítimas e à preservação da memória histórica desses fatos. Não se confunde com política de patrimônio artístico.",
      fundamento: "Decreto nº 7.037/2009 (PNDH-3), Eixo Orientador VI.",
      macete: "Memória e verdade, no PNDH-3, remetem a violações do período autoritário — não a tombamento.",
      erroComum: "Associar 'memória' a patrimônio cultural, sentido corrente fora do vocabulário de direitos humanos.",
      comoBancaPensa: "Usa a polissemia do termo para oferecer um significado plausível e errado."
    }
  },
  {
    ...BASE79, disciplina: "Direitos Humanos",
    id: "DH-210", assunto: "PNDH-3", subassunto: "Eixos — composição",
    origem: "Inédita — estilo CEBRASPE (Decreto 7.037/2009)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "A interação democrática entre Estado e sociedade civil constitui eixo orientador do PNDH-3.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "interação democrática",
    cognitivo: {
      motivo: "Fixar o Eixo I pelo nome, complementando os itens já existentes sobre estrutura do programa.",
      palavraCritica: "sociedade civil",
    },
    comentario: {
      resolucao: "CERTO. O Eixo Orientador I do PNDH-3 é 'Interação democrática entre Estado e sociedade civil'. Ele abre o programa e informa a lógica participativa dos demais.",
      fundamento: "Decreto nº 7.037/2009 (PNDH-3), Eixo Orientador I.",
      macete: "O programa começa pela participação social e termina em memória e verdade.",
      erroComum: "Confundir o Eixo I com o Eixo V (educação e cultura em direitos humanos).",
      comoBancaPensa: "Item literal, usado para compor bloco com a variante trocada entre eixos."
    }
  },

  /* ===== LEI 9.605/1998 — crimes em espécie ===== */

  {
    ...BASE79, disciplina: "Legislação Especial",
    id: "LE-266", assunto: "Crimes Ambientais", subassunto: "Fauna silvestre — art. 29",
    origem: "Inédita — estilo CEBRASPE (Lei 9.605/1998)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "Matar, perseguir, caçar ou apanhar espécimes da fauna silvestre sem a devida permissão da autoridade competente é punido com detenção de seis meses a um ano, e multa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "seis meses a um ano",
    cognitivo: {
      motivo: "Cobrir os crimes em espécie da lei ambiental, ausentes do banco, começando pelo tipo básico da fauna.",
      palavraCritica: "sem a devida permissão",
    },
    comentario: {
      resolucao: "CERTO. É o art. 29, caput. A pena é baixa — detenção de seis meses a um ano —, o que atrai os institutos despenalizadores da Lei 9.099/1995, observado o art. 27 da própria Lei 9.605.",
      fundamento: "Lei nº 9.605/1998, art. 29, caput.",
      macete: "Fauna: detenção de 6 meses a 1 ano. Poluição (art. 54): reclusão de 1 a 4 anos. Escalas bem diferentes.",
      erroComum: "Superestimar a pena por gravidade moral da conduta.",
      comoBancaPensa: "Pena baixa em crime socialmente reprovável é boa armadilha para troca numérica."
    }
  },
  {
    ...BASE79, disciplina: "Legislação Especial",
    id: "LE-267", assunto: "Crimes Ambientais", subassunto: "Maus-tratos a animais — art. 32",
    origem: "Inédita — estilo CEBRASPE (Lei 9.605/1998)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "O crime de praticar ato de abuso ou maus-tratos alcança apenas animais silvestres, não abrangendo animais domésticos ou domesticados.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "apenas animais silvestres",
    cognitivo: {
      motivo: "Cobrar a amplitude do art. 32, que é justamente o que o distingue do art. 29.",
      palavraCritica: "apenas",
    },
    comentario: {
      resolucao: "ERRADO. O art. 32 alcança 'animais silvestres, domésticos ou domesticados, nativos ou exóticos'. É o tipo mais abrangente da seção, e a amplitude é sua característica definidora.",
      fundamento: "Lei nº 9.605/1998, art. 32, caput.",
      macete: "Art. 29 é só fauna silvestre; art. 32 é qualquer animal, inclusive o cachorro do vizinho.",
      erroComum: "Transportar para o art. 32 a limitação subjetiva do art. 29.",
      comoBancaPensa: "Restrição indevida por contaminação do artigo vizinho."
    }
  },
  {
    ...BASE79, disciplina: "Legislação Especial",
    id: "LE-268", assunto: "Crimes Ambientais", subassunto: "Experiência dolorosa — art. 32, § 1º",
    origem: "Inédita — estilo CEBRASPE (Lei 9.605/1998)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Incorre nas penas do crime de maus-tratos quem realiza experiência dolorosa ou cruel em animal vivo, ainda que para fins didáticos ou científicos, quando existirem recursos alternativos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ainda que para fins didáticos",
    cognitivo: {
      motivo: "Fixar a condicionante final do § 1º, que é o que torna o tipo aplicável ou não à pesquisa.",
      palavraCritica: "recursos alternativos",
    },
    comentario: {
      resolucao: "CERTO. Reprodução do art. 32, § 1º. A finalidade científica ou didática não é excludente — o que afasta o crime é a inexistência de recurso alternativo. Havendo alternativa disponível, a conduta é típica.",
      fundamento: "Lei nº 9.605/1998, art. 32, § 1º.",
      macete: "A finalidade nobre não salva: o que decide é existir ou não alternativa ao sofrimento.",
      erroComum: "Considerar a pesquisa científica automaticamente excludente de tipicidade.",
      comoBancaPensa: "Cobra a condicionante final, que é fácil de perder na leitura corrida."
    }
  },
  {
    ...BASE79, disciplina: "Legislação Especial",
    id: "LE-269", assunto: "Crimes Ambientais", subassunto: "Poluição — art. 54",
    origem: "Inédita — estilo CEBRASPE (Lei 9.605/1998)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "O crime de poluição exige a ocorrência efetiva de dano à saúde humana, não bastando a potencialidade lesiva da conduta.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "exige a ocorrência efetiva",
    cognitivo: {
      motivo: "Cobrar a natureza de crime de perigo do art. 54, marcada pela expressão 'ou possam resultar'.",
      palavraCritica: "efetiva",
    },
    comentario: {
      resolucao: "ERRADO. O art. 54 pune causar poluição em níveis que 'resultem OU POSSAM RESULTAR' em danos à saúde humana. A locução alternativa configura crime de perigo: a potencialidade lesiva basta, não se exigindo dano consumado.",
      fundamento: "Lei nº 9.605/1998, art. 54, caput.",
      macete: "'Possam resultar' é a marca do crime de perigo — não espere o dano para tipificar.",
      erroComum: "Exigir resultado naturalístico por analogia com os crimes materiais do Código Penal.",
      comoBancaPensa: "Acrescenta exigência que a lei dispensou, invertendo a natureza do tipo."
    }
  },
  {
    ...BASE79, disciplina: "Legislação Especial",
    id: "LE-270", assunto: "Crimes Ambientais", subassunto: "Poluição culposa — art. 54, § 1º",
    origem: "Inédita — estilo CEBRASPE (Lei 9.605/1998)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "A Lei de Crimes Ambientais prevê modalidade culposa para o crime de poluição.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "culposa",
    cognitivo: {
      motivo: "Fixar a existência da forma culposa, incomum na legislação penal especial.",
      palavraCritica: "culposa",
    },
    comentario: {
      resolucao: "CERTO. O art. 54, § 1º, prevê a forma culposa, punida com detenção de seis meses a um ano, e multa — pena bem inferior à da modalidade dolosa (reclusão de um a quatro anos).",
      fundamento: "Lei nº 9.605/1998, art. 54, § 1º.",
      macete: "A lei ambiental é generosa em formas culposas, ao contrário da maioria das leis penais especiais.",
      erroComum: "Aplicar a regra geral do art. 18, parágrafo único, do CP e negar a forma culposa por falta de previsão.",
      comoBancaPensa: "Explora a presunção de que crime culposo é exceção rara fora do Código Penal."
    }
  },
  {
    ...BASE79, disciplina: "Legislação Especial",
    id: "LE-271", assunto: "Crimes Ambientais", subassunto: "Pesca proibida — art. 34",
    origem: "Inédita — estilo CEBRASPE (Lei 9.605/1998)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "Pescar em período no qual a pesca seja proibida ou em lugares interditados por órgão competente é punido com detenção de um a três anos ou multa, ou ambas as penas cumulativamente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ou ambas as penas cumulativamente",
    cognitivo: {
      motivo: "Fixar a estrutura de pena alternativa e cumulável do art. 34, incomum na lei.",
      palavraCritica: "cumulativamente",
    },
    comentario: {
      resolucao: "CERTO. Reprodução do art. 34, caput. A cominação é peculiar: detenção OU multa OU ambas, dando ao juiz margem que a maioria dos tipos não oferece.",
      fundamento: "Lei nº 9.605/1998, art. 34, caput.",
      macete: "Repare no 'ou ambas': poucos tipos preveem expressamente a cumulação facultativa.",
      erroComum: "Ler a alternatividade como exclusão da cumulação.",
      comoBancaPensa: "Estrutura de pena atípica é bom material para item literal."
    }
  },
  {
    ...BASE79, disciplina: "Legislação Especial",
    id: "LE-272", assunto: "Crimes Ambientais", subassunto: "Fauna — exclusão da pesca",
    origem: "Inédita — estilo CEBRASPE (Lei 9.605/1998)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "As disposições do artigo que tipifica a morte e a caça de espécimes da fauna silvestre aplicam-se também aos atos de pesca.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "aplicam-se também aos atos de pesca",
    cognitivo: {
      motivo: "Cobrar a exclusão expressa do art. 29, § 6º, que separa os regimes de fauna terrestre e pesca.",
      palavraCritica: "também",
    },
    comentario: {
      resolucao: "ERRADO. O art. 29, § 6º, afasta expressamente a aplicação do artigo aos atos de pesca, que têm disciplina própria nos arts. 34 a 36. São regimes distintos, com penas distintas.",
      fundamento: "Lei nº 9.605/1998, art. 29, § 6º.",
      macete: "Fauna terrestre no art. 29; pesca a partir do art. 34. O § 6º existe justamente para separar.",
      erroComum: "Tratar peixe como fauna silvestre para fins do art. 29, o que a lei expressamente afasta.",
      comoBancaPensa: "Generalização indevida amparada numa classificação biológica correta, mas juridicamente irrelevante aqui."
    }
  },
  {
    ...BASE79, disciplina: "Legislação Especial",
    id: "LE-273", assunto: "Crimes Ambientais", subassunto: "Patrimônio cultural — art. 62",
    origem: "Inédita — estilo CEBRASPE (Lei 9.605/1998)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "A Lei de Crimes Ambientais tipifica a destruição, inutilização ou deterioração de bem especialmente protegido por lei, ato administrativo ou decisão judicial.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "especialmente protegido",
    cognitivo: {
      motivo: "Mostrar que a lei ambiental protege também o patrimônio cultural, ponto que escapa de quem só estuda fauna e flora.",
      palavraCritica: "decisão judicial",
    },
    comentario: {
      resolucao: "CERTO. É o art. 62, que integra o capítulo dos crimes contra o ordenamento urbano e o patrimônio cultural. A proteção pode vir de lei, de ato administrativo (tombamento) ou de decisão judicial.",
      fundamento: "Lei nº 9.605/1998, art. 62.",
      macete: "A Lei 9.605 não é só verde: ela também protege patrimônio cultural e ordenamento urbano.",
      erroComum: "Restringir o alcance da lei a fauna, flora e poluição.",
      comoBancaPensa: "Cobra capítulo menos estudado de uma lei que o candidato julga conhecer."
    }
  },

  /* ===== LEI 8.137/1990 ===== */

  {
    ...BASE79, disciplina: "Legislação Especial",
    id: "LE-274", assunto: "Crimes contra a Ordem Tributária", subassunto: "Delação premiada — art. 16, § único",
    origem: "Inédita — estilo CEBRASPE (Lei 8.137/1990)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "Nos crimes contra a ordem tributária cometidos em concurso de agentes, o coautor ou partícipe que, por confissão espontânea, revelar à autoridade toda a trama delituosa terá a pena reduzida de um a dois terços.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "um a dois terços",
    cognitivo: {
      motivo: "Fixar o instituto e a fração exata do art. 16, parágrafo único — uma das delações mais antigas do ordenamento.",
      palavraCritica: "toda a trama",
    },
    comentario: {
      resolucao: "CERTO. É o art. 16, parágrafo único. Exige-se confissão espontânea e revelação integral da trama — revelação parcial não basta. A redução é de um a dois terços.",
      fundamento: "Lei nº 8.137/1990, art. 16, parágrafo único.",
      macete: "Tem que entregar tudo: 'toda a trama delituosa'. Delação pela metade não reduz pena aqui.",
      erroComum: "Confundir a fração com a da colaboração premiada da Lei 12.850/2013 (até 2/3).",
      comoBancaPensa: "Cobra fração num instituto que o candidato conhece por outra lei, com números diferentes."
    }
  },
  {
    ...BASE79, disciplina: "Legislação Especial",
    id: "LE-275", assunto: "Crimes contra a Ordem Tributária", subassunto: "Iniciativa do MP — art. 16, caput",
    origem: "Inédita — estilo CEBRASPE (Lei 8.137/1990)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Somente a autoridade fazendária pode provocar a iniciativa do Ministério Público nos crimes contra a ordem tributária.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "Somente a autoridade fazendária",
    cognitivo: {
      motivo: "Cobrar a legitimação ampla do art. 16, caput, que contrasta com a exigência de prévio lançamento definitivo (SV 24).",
      palavraCritica: "Somente",
    },
    comentario: {
      resolucao: "ERRADO. O art. 16, caput, permite que QUALQUER PESSOA provoque a iniciativa do Ministério Público, fornecendo por escrito informações sobre fato e autoria, com indicação de tempo, lugar e elementos de convicção. A exigência de lançamento definitivo (Súmula Vinculante 24) diz respeito à tipicidade dos crimes materiais, não à legitimidade para noticiar.",
      fundamento: "Lei nº 8.137/1990, art. 16, caput.",
      macete: "Qualquer pessoa noticia; o que a SV 24 condiciona é a persecução dos crimes do art. 1º, não quem pode avisar.",
      erroComum: "Misturar a exigência do lançamento definitivo com restrição de legitimidade para a notícia-crime.",
      comoBancaPensa: "Junta dois temas verdadeiros para produzir uma restrição que nenhum deles autoriza."
    }
  },

  /* ===== DECRETO-LEI 201/1967 ===== */

  {
    ...BASE79, disciplina: "Legislação Especial",
    id: "LE-276", assunto: "Crimes de Responsabilidade", subassunto: "Crime x infração político-administrativa",
    origem: "Inédita — estilo CEBRASPE (Decreto-Lei 201/1967)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "As infrações político-administrativas dos prefeitos municipais são julgadas pela Câmara dos Vereadores e sancionadas com a cassação do mandato.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "cassação do mandato",
    cognitivo: {
      motivo: "Separar as duas categorias do DL 201 — art. 1º (crimes, Judiciário) e art. 4º (infrações, Câmara) —, distinção que é o coração do tema.",
      palavraCritica: "Câmara dos Vereadores",
    },
    comentario: {
      resolucao: "CERTO. O art. 4º é expresso: as infrações político-administrativas sujeitam-se ao julgamento pela Câmara dos Vereadores e são sancionadas com cassação do mandato. Já os crimes de responsabilidade do art. 1º são de competência do Poder Judiciário e sujeitam-se a pena de detenção.",
      fundamento: "Decreto-Lei nº 201/1967, arts. 1º e 4º.",
      macete: "Art. 1º = crime, Judiciário, detenção. Art. 4º = infração, Câmara, cassação. Duas trilhas separadas.",
      erroComum: "Unificar as duas categorias porque ambas aparecem no mesmo decreto-lei.",
      comoBancaPensa: "O tema vive dessa distinção; o item verdadeiro prepara a variante que troca os julgadores."
    }
  },
  {
    ...BASE79, disciplina: "Legislação Especial",
    id: "LE-277", assunto: "Crimes de Responsabilidade", subassunto: "Efeitos da condenação — DL 201, art. 1º, § 2º",
    origem: "Inédita — estilo CEBRASPE (Decreto-Lei 201/1967)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "A condenação definitiva de prefeito por crime de responsabilidade previsto no Decreto-Lei nº 201/1967 acarreta a perda do cargo e a inabilitação, pelo prazo de oito anos, para o exercício de cargo ou função pública.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "oito anos",
    cognitivo: {
      motivo: "Impedir o transporte automático do prazo constitucional do impeachment federal para o regime dos prefeitos.",
      palavraCritica: "oito",
    },
    comentario: {
      resolucao: "ERRADO. O art. 1º, § 2º, do Decreto-Lei nº 201/1967 fixa inabilitação por CINCO ANOS, e não oito. O prazo de oito anos é o do art. 52, parágrafo único, da Constituição, aplicável às autoridades federais julgadas pelo Senado — regime distinto.",
      fundamento: "Decreto-Lei nº 201/1967, art. 1º, § 2º; CF/1988, art. 52, parágrafo único.",
      macete: "Prefeito (DL 201): 5 anos. Presidente e cúpula federal (CF, art. 52): 8 anos.",
      erroComum: "Generalizar o prazo do impeachment presidencial para todos os agentes políticos.",
      comoBancaPensa: "Oferece um número verdadeiro em outro contexto — a troca numérica mais eficaz é a que existe em algum lugar."
    }
  },

  /* ===== LGPD ===== */

  {
    ...BASE79, disciplina: "Crimes Cibernéticos e Segurança Digital",
    id: "CC-101", assunto: "LGPD", subassunto: "Segurança pública — tratamento por pessoa privada (art. 4º, § 4º)",
    origem: "Inédita — estilo CEBRASPE (Lei 13.709/2018)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "É vedado o tratamento de dados pessoais para fins de segurança pública e de investigação criminal por pessoa jurídica de direito privado, ressalvados os procedimentos sob tutela de pessoa jurídica de direito público.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sob tutela",
    cognitivo: {
      motivo: "Cobrar o § 4º do art. 4º, que limita a terceirização do tratamento de dados na atividade policial — ângulo distinto da simples hipótese de não aplicação.",
      palavraCritica: "tutela",
    },
    comentario: {
      resolucao: "CERTO. O art. 4º, § 4º, veda que empresa privada trate dados com essas finalidades por conta própria, admitindo-o apenas em procedimentos sob tutela de pessoa jurídica de direito público. A ressalva viabiliza a contratação de serviços pelo Estado sem transformar a exceção em porta aberta para bancos de dados privados de investigação.",
      fundamento: "Lei nº 13.709/2018, art. 4º, § 4º.",
      macete: "Empresa até participa, mas sempre sob tutela do poder público — nunca como titular autônoma da finalidade.",
      erroComum: "Ler o afastamento do art. 4º, III, como autorização geral para qualquer agente tratar dados de segurança pública.",
      comoBancaPensa: "Cobra o limite subjetivo da exceção, e não a exceção em si, que é a parte mais divulgada."
    }
  },
  {
    ...BASE79, disciplina: "Crimes Cibernéticos e Segurança Digital",
    id: "CC-102", assunto: "LGPD", subassunto: "Não aplicação — pessoa natural e fins acadêmicos",
    origem: "Inédita — estilo CEBRASPE (Lei 13.709/2018)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "O tratamento de dados pessoais realizado para fins exclusivamente acadêmicos está integralmente excluído da incidência da Lei Geral de Proteção de Dados.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "integralmente excluído",
    cognitivo: {
      motivo: "Cobrar a ressalva do art. 4º, II, 'b', que mantém dois artigos aplicáveis mesmo na hipótese acadêmica.",
      palavraCritica: "integralmente",
    },
    comentario: {
      resolucao: "ERRADO. O art. 4º, II, 'b', afasta a LGPD do tratamento com fins exclusivamente acadêmicos, MAS ressalva expressamente a aplicação dos arts. 7º e 11 — que tratam das bases legais para o tratamento de dados pessoais e de dados sensíveis. A exclusão, portanto, é parcial.",
      fundamento: "Lei nº 13.709/2018, art. 4º, II, 'b'.",
      macete: "Acadêmico é a única hipótese do art. 4º com exclusão parcial: arts. 7º e 11 continuam valendo.",
      erroComum: "Igualar a hipótese acadêmica à jornalística e artística, que não têm essa ressalva.",
      comoBancaPensa: "Alinha hipóteses do mesmo inciso e apaga a ressalva que só uma delas tem."
    }
  },
  {
    ...BASE79, disciplina: "Crimes Cibernéticos e Segurança Digital",
    id: "CC-103", assunto: "LGPD", subassunto: "Fundamentos — art. 2º",
    origem: "Inédita — estilo CEBRASPE (Lei 13.709/2018)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "A autodeterminação informativa figura entre os fundamentos da disciplina da proteção de dados pessoais na LGPD.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "autodeterminação informativa",
    cognitivo: {
      motivo: "Fixar o rol do art. 2º, cobrado com frequência em prova por ser lista fechada.",
      palavraCritica: "autodeterminação",
    },
    comentario: {
      resolucao: "CERTO. A autodeterminação informativa é o inciso II do art. 2º. O rol inclui ainda respeito à privacidade, liberdade de expressão, inviolabilidade da intimidade, honra e imagem, desenvolvimento econômico e tecnológico, livre iniciativa, livre concorrência, defesa do consumidor e os direitos humanos.",
      fundamento: "Lei nº 13.709/2018, art. 2º, II.",
      macete: "Fundamentos estão no art. 2º; princípios do tratamento, no art. 6º. Listas diferentes.",
      erroComum: "Buscar a autodeterminação informativa entre os princípios do art. 6º.",
      comoBancaPensa: "Explora a confusão entre as duas listas próximas da lei."
    }
  },
  {
    ...BASE79, disciplina: "Crimes Cibernéticos e Segurança Digital",
    id: "CC-104", assunto: "LGPD", subassunto: "Dado pessoal — art. 5º, I",
    origem: "Inédita — estilo CEBRASPE (Lei 13.709/2018)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Para os fins da LGPD, considera-se dado pessoal a informação relacionada a pessoa natural identificada ou identificável.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "identificada ou identificável",
    cognitivo: {
      motivo: "Fixar a definição base, cuja extensão a 'identificável' é o que amplia o alcance da lei.",
      palavraCritica: "identificável",
    },
    comentario: {
      resolucao: "CERTO. Reprodução do art. 5º, I. O alcance vai além do dado que identifica diretamente: basta que a pessoa seja identificável a partir dele, isolado ou combinado com outros.",
      fundamento: "Lei nº 13.709/2018, art. 5º, I.",
      macete: "'Identificável' é o que traz IP, geolocalização e identificadores indiretos para dentro da lei.",
      erroComum: "Restringir o conceito ao dado que identifica de imediato, como nome e CPF.",
      comoBancaPensa: "Definição literal, âncora para itens sobre anonimização e pseudonimização."
    }
  },

  /* ===== ESTATUTO DA PESSOA IDOSA — poucos ângulos remanescentes ===== */

  {
    ...BASE79, disciplina: "Legislação Especial",
    id: "LE-278", assunto: "Estatuto da Pessoa Idosa", subassunto: "Prioridade processual — art. 71",
    origem: "Inédita — estilo CEBRASPE (Lei 10.741/2003)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "É assegurada prioridade na tramitação dos processos e procedimentos e na execução dos atos e diligências judiciais em que figure como parte ou interveniente pessoa com idade igual ou superior a 60 anos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "60 anos",
    cognitivo: {
      motivo: "Fixar o marco etário do art. 71, que difere do marco de 80 anos da prioridade especial.",
      palavraCritica: "igual ou superior",
    },
    comentario: {
      resolucao: "CERTO. É o art. 71, caput. Note que o Estatuto ainda prevê, no § 5º, prioridade especial aos maiores de 80 anos, que se sobrepõe à prioridade comum.",
      fundamento: "Lei nº 10.741/2003, art. 71, caput e § 5º.",
      macete: "60 anos dá prioridade; 80 anos dá prioridade sobre os demais idosos.",
      erroComum: "Confundir os dois patamares e atribuir a prioridade geral apenas aos maiores de 80.",
      comoBancaPensa: "Dois marcos etários no mesmo artigo convidam à troca numérica."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE79);
