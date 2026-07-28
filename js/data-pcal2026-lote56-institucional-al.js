/* =====================================================================
   QUESTLAB — Lote 56: LEGISLAÇÃO INSTITUCIONAL DO ESTADO DE ALAGOAS
   Estatuto do Pessoal da Polícia Civil — Lei nº 3.437, de 25 de junho de
   1975 (texto consolidado com as alterações das Leis nº 5.217/1991,
   5.813/1996, 6.441/2003, 6.592/2005 e 7.959/2017).

   Disciplina de MAIOR peso do edital (Legislação Institucional do Estado
   de Alagoas) e a mais rasa no banco — a auditoria de scripts/validar.js
   apontava déficit de ~9pp. Estava travada por falta de fonte confiável:
   é lei estadual, e o padrão federal que se conhece de cor NÃO vale aqui
   (ex.: a estabilidade se dá em 1 ano, não em 3).

   Estes 34 itens foram redigidos a partir do TEXTO OFICIAL da lei, obtido
   na Assembleia Legislativa de Alagoas (documento público). Cada resolução
   cita o artigo exato para conferência. Itens autorais no estilo CEBRASPE
   — nenhum enunciado de terceiro reproduzido.

   Como a lei é rica em prazos, números e listas fechadas, vários itens são
   pseudo-literais (pegadinha "literalidade" com gabarito ERRADO): a
   redação soa fiel e uma única alteração cirúrgica decide o gabarito.
   ===================================================================== */

const QUESTOES_PCAL_LOTE56 = [

  /* ===================== PROVIMENTO E INVESTIDURA ===================== */
  {
    id: "LI-045", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Formas de provimento (art. 36)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "De acordo com o Estatuto da Polícia Civil de Alagoas, os cargos de natureza policial são providos por nomeação, promoção, acesso, reintegração, aproveitamento, reversão e transferência.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "nomeação, promoção, acesso, reintegração, aproveitamento, reversão e transferência",
    cognitivo: {
      motivo: "Fixar o rol de formas de provimento do Estatuto estadual.",
      mede: "Lei 3.437/1975, art. 36.",
      pegadinhaDesc: "A banca costuma retirar ou acrescentar uma forma; aqui o rol está completo e correto.",
      ondeErra: "Confunde com o rol de outra lei estatutária, esquecendo 'acesso' ou 'transferência'.",
      palavraCritica: "acesso ... reversão e transferência",
      tecnica: "São sete formas no art. 36. 'Acesso' e 'transferência' são as mais esquecidas.",
      regraMental: "Provimento na PC-AL: 7 formas, incluindo acesso e transferência."
    },
    comentario: {
      resolucao: "CERTO. O art. 36 da Lei 3.437/1975 arrola exatamente essas sete formas de provimento dos cargos de natureza policial: nomeação, promoção, acesso, reintegração, aproveitamento, reversão e transferência.",
      fundamento: "Lei 3.437/1975 (Estatuto da PC-AL), art. 36, I a VII.",
      macete: "Sete formas de provimento — acesso e transferência entram.",
      erroComum: "Omitir 'acesso' por analogia com estatutos que não o preveem.",
      comoBancaPensa: "Testa se o candidato decorou o rol completo, incluindo as formas menos usuais."
    }
  },
  {
    id: "LI-046", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Requisitos de investidura (art. 38)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.9,
    enunciado: "Para exercer os cargos de que trata o Estatuto da PC-AL, exige-se, entre outros requisitos, ter no máximo trinta anos de idade, limite que se aplica em qualquer hipótese, inclusive ao funcionário público e aos cargos em comissão.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "em qualquer hipótese, inclusive ao funcionário público e aos cargos em comissão",
    cognitivo: {
      motivo: "Cobrar a exceção ao limite de idade máxima.",
      mede: "Lei 3.437/1975, art. 38, III.",
      pegadinhaDesc: "O limite de 30 anos existe, mas a lei o excepciona; o enunciado suprime a exceção.",
      ondeErra: "Memoriza 'máximo 30 anos' e trata como regra absoluta.",
      palavraCritica: "em qualquer hipótese",
      tecnica: "O teto de 30 anos NÃO se aplica ao funcionário público nem ao cargo em comissão — é o próprio texto do inciso III.",
      regraMental: "Idade máxima 30 anos, salvo funcionário público ou cargo em comissão."
    },
    comentario: {
      resolucao: "ERRADO. O art. 38, III, exige a idade máxima de trinta anos apenas 'se não for funcionário público ou não se tratar de cargo em comissão'. O enunciado transforma a regra em absoluta ao suprimir a ressalva.",
      fundamento: "Lei 3.437/1975, art. 38, III.",
      macete: "30 anos é teto com exceção, não regra fechada.",
      erroComum: "Ignorar a ressalva do funcionário público e do cargo em comissão.",
      comoBancaPensa: "Reproduz o requisito e corta a exceção, convertendo regra relativa em absoluta."
    }
  },
  {
    id: "LI-047", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Requisitos de investidura (art. 38)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Entre os requisitos para exercer os cargos previstos no Estatuto da PC-AL estão ser brasileiro, ter completado dezoito anos de idade, estar em gozo dos direitos políticos e estar quite com as obrigações militares e eleitorais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ser brasileiro ... dezoito anos ... direitos políticos ... obrigações militares e eleitorais",
    cognitivo: {
      motivo: "Fixar o núcleo dos requisitos de investidura.",
      mede: "Lei 3.437/1975, art. 38, I a VI.",
      pegadinhaDesc: "Todos os requisitos citados constam do artigo, na forma correta.",
      ondeErra: "Desconfia por não constar a idade máxima, que é requisito à parte com exceção.",
      palavraCritica: "obrigações militares e eleitorais",
      tecnica: "O art. 38 lista requisitos cumulativos; os citados estão todos presentes.",
      regraMental: "Brasileiro, 18 anos, direitos políticos, quites com quartel e urna."
    },
    comentario: {
      resolucao: "CERTO. Os requisitos mencionados constam do art. 38 (incisos I, II, IV, V e VI): ser brasileiro, ter completado dezoito anos, gozar dos direitos políticos e estar quite com as obrigações militares e eleitorais.",
      fundamento: "Lei 3.437/1975, art. 38, I, II, IV, V e VI.",
      macete: "Requisitos básicos de investidura, todos cumulativos.",
      erroComum: "Achar que falta algo por não citar a idade máxima.",
      comoBancaPensa: "Item correto que testa a segurança do candidato diante de rol fiel."
    }
  },
  {
    id: "LI-048", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Nomeação de Delegados (art. 40)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "No interesse do serviço policial, os cargos de Delegados Regionais e Especializados poderão ser exercidos por oficiais superiores da Polícia Militar ou por capitães portadores do CAO; ao policial militar na graduação de cabo, por sua vez, é vedado em hipótese alguma exercer cargo de Delegado de Polícia.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "oficiais superiores da Polícia Militar ou capitães portadores do CAO ... cabo, é vedado em hipótese alguma",
    cognitivo: {
      motivo: "Cobrar as duas regras do art. 40 sobre nomeação de delegados vindos da PM.",
      mede: "Lei 3.437/1975, art. 40, §§ 1º e 2º.",
      pegadinhaDesc: "Junta as duas regras (permissão para oficiais/capitães CAO e vedação ao cabo), ambas corretas.",
      ondeErra: "Nega a possibilidade de PM ocupar delegacia, esquecendo o §1º.",
      palavraCritica: "capitães portadores do CAO ... cabo ... em hipótese alguma",
      tecnica: "Oficiais superiores e capitães com CAO podem; cabo não pode em hipótese alguma.",
      regraMental: "Oficial/CAO pode virar delegado regional; cabo nunca."
    },
    comentario: {
      resolucao: "CERTO. O art. 40, §1º, permite que Delegados Regionais e Especializados sejam exercidos por oficiais superiores da PM ou capitães portadores do CAO; o §2º veda, em hipótese alguma, a nomeação de cabo da PM para o cargo de Delegado de Polícia.",
      fundamento: "Lei 3.437/1975, art. 40, §§ 1º e 2º.",
      macete: "Oficial/CAO sobe; cabo, nunca.",
      erroComum: "Negar a atuação de PM em delegacia.",
      comoBancaPensa: "Combina duas regras verdadeiras do mesmo artigo para testar a leitura integral."
    }
  },
  {
    id: "LI-049", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Posse (art. 42)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Os servidores policiais civis nomeados tomarão posse no prazo de quinze dias, contados da publicação do ato de nomeação.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "prazo de quinze dias",
    cognitivo: {
      motivo: "Fixar o prazo de posse no Estatuto estadual.",
      mede: "Lei 3.437/1975, art. 42.",
      pegadinhaDesc: "Troca o prazo de 30 por 15 dias, mantendo a estrutura da frase.",
      ondeErra: "Confunde com prazos de posse de outros estatutos.",
      palavraCritica: "quinze dias",
      tecnica: "No Estatuto da PC-AL, tanto a posse quanto o início de exercício correm em 30 dias.",
      regraMental: "PC-AL: posse em 30 dias, exercício em 30 dias."
    },
    comentario: {
      resolucao: "ERRADO. O prazo de posse é de 30 (trinta) dias, nos termos do art. 42 da Lei 3.437/1975. O início do exercício também se dá no prazo de 30 dias (art. 49).",
      fundamento: "Lei 3.437/1975, art. 42; art. 49.",
      macete: "Posse: 30 dias.",
      erroComum: "Adotar 15 dias por analogia.",
      comoBancaPensa: "Substitui o numeral do prazo em frase de estrutura correta."
    }
  },
  {
    id: "LI-050", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Estágio probatório e estabilidade (art. 55)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.95,
    enunciado: "Segundo o Estatuto da Polícia Civil de Alagoas, o policial civil nomeado por concurso será estável após três anos de exercício no cargo, uma vez preenchidos os requisitos do estágio probatório.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "estável após três anos de exercício",
    cognitivo: {
      motivo: "Explorar a diferença entre a regra estadual e o padrão federal.",
      mede: "Lei 3.437/1975, art. 55.",
      pegadinhaDesc: "Usa o prazo federal de 3 anos, que o candidato tende a assumir por hábito.",
      ondeErra: "Aplica a estabilidade constitucional (3 anos) à lei estadual, que traz prazo próprio.",
      palavraCritica: "três anos",
      tecnica: "Cuidado: o Estatuto da PC-AL diz UM ano, e não os três anos do art. 41 da CF. Lei estadual antiga pode ter prazo próprio.",
      regraMental: "Estabilidade na PC-AL: 1 ano (art. 55), não 3."
    },
    comentario: {
      resolucao: "ERRADO. O art. 55 da Lei 3.437/1975 estabelece que o policial civil nomeado por concurso será estável após 1 (um) ano de exercício, preenchidos os requisitos do estágio probatório (idoneidade moral, assiduidade, pontualidade, disciplina e eficiência). O prazo de três anos é o da estabilidade constitucional geral, não o desta lei.",
      fundamento: "Lei 3.437/1975, art. 55.",
      macete: "PC-AL: estável em 1 ano.",
      erroComum: "Transportar o prazo de 3 anos da CF para a lei estadual.",
      comoBancaPensa: "Aposta que o candidato responde pelo automatismo do prazo federal."
    }
  },
  {
    id: "LI-051", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Estágio probatório (art. 55)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "No estágio probatório do policial civil de Alagoas são apuradas a idoneidade moral, a assiduidade, a pontualidade, a disciplina e a eficiência.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "idoneidade moral, assiduidade, pontualidade, disciplina e eficiência",
    cognitivo: {
      motivo: "Fixar os fatores apurados no estágio probatório.",
      mede: "Lei 3.437/1975, art. 55.",
      pegadinhaDesc: "Enumera os cinco fatores exatamente como na lei.",
      ondeErra: "Acrescenta ou omite um fator por comparação com outros estatutos.",
      palavraCritica: "idoneidade moral ... eficiência",
      tecnica: "Cinco fatores: idoneidade moral, assiduidade, pontualidade, disciplina e eficiência.",
      regraMental: "Estágio: idoneidade, assiduidade, pontualidade, disciplina, eficiência."
    },
    comentario: {
      resolucao: "CERTO. O art. 55 da Lei 3.437/1975 elenca precisamente esses cinco requisitos apurados no estágio probatório.",
      fundamento: "Lei 3.437/1975, art. 55.",
      macete: "Cinco fatores do estágio probatório.",
      erroComum: "Trocar 'idoneidade moral' por 'produtividade'.",
      comoBancaPensa: "Item correto que confirma o domínio do rol legal."
    }
  },

  /* ===================== ATRIBUIÇÕES E REQUISITOS DE CARGO ===================== */
  {
    id: "LI-052", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Requisito do cargo de Perito Criminal (art. 21)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "Para o provimento do cargo de Perito Criminal, o Estatuto da PC-AL exige a conclusão de curso superior em qualquer área científica, além de curso de Perícia Criminal em estabelecimento idôneo.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "curso superior em qualquer área científica",
    cognitivo: {
      motivo: "Cobrar o requisito específico do cargo de Perito Criminal.",
      mede: "Lei 3.437/1975, art. 21, parágrafo único.",
      pegadinhaDesc: "Substitui a exigência de curso de Direito por 'qualquer área científica', que soa razoável para perícia.",
      ondeErra: "Associa perícia a formação técnica genérica, não jurídica.",
      palavraCritica: "qualquer área científica",
      tecnica: "No Estatuto da PC-AL, o Perito Criminal exige curso de DIREITO e curso de Perícia Criminal — não formação científica genérica.",
      regraMental: "Perito Criminal na PC-AL: Direito + curso de perícia."
    },
    comentario: {
      resolucao: "ERRADO. O art. 21, parágrafo único, exige, para o provimento do cargo de Perito Criminal, a conclusão do curso de Direito e de curso em Perícia Criminal em estabelecimento idôneo. Não basta formação superior em qualquer área científica.",
      fundamento: "Lei 3.437/1975, art. 21, parágrafo único.",
      macete: "Perito Criminal: Direito, não 'ciências'.",
      erroComum: "Presumir que perícia exige formação técnica genérica.",
      comoBancaPensa: "Troca a exigência específica por uma plausível para a função."
    }
  },
  {
    id: "LI-053", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Requisito do cargo de Inspetor de Polícia (art. 15)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "Para o provimento do cargo de Inspetor de Polícia, exige-se, como habilitação, o curso de Direito.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "curso de Direito",
    cognitivo: {
      motivo: "Fixar o requisito de habilitação do Inspetor de Polícia.",
      mede: "Lei 3.437/1975, art. 15, parágrafo único.",
      pegadinhaDesc: "Requisito reproduzido fielmente; o candidato pode duvidar por parecer exigência alta.",
      ondeErra: "Acha que ensino médio bastaria, por analogia com outros cargos.",
      palavraCritica: "curso de Direito",
      tecnica: "Inspetor de Polícia exige curso de Direito, assim como Perito Criminal.",
      regraMental: "Inspetor de Polícia: exige Direito."
    },
    comentario: {
      resolucao: "CERTO. O art. 15, parágrafo único, exige, para o provimento do cargo de Inspetor de Polícia, o curso de Direito como habilitação.",
      fundamento: "Lei 3.437/1975, art. 15, parágrafo único.",
      macete: "Inspetor de Polícia = curso de Direito.",
      erroComum: "Rebaixar o requisito para ensino médio.",
      comoBancaPensa: "Item correto que testa se o candidato conhece o requisito real."
    }
  },
  {
    id: "LI-054", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Atribuições do Escrivão Auxiliar (art. 17)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.75,
    enunciado: "Durante uma operação, o Delegado determinou que o Escrivão Auxiliar de Polícia acompanhasse a equipe em diligência externa para lavratura imediata de autos no local. O servidor pode recusar a ordem, pois suas atribuições se limitam à escrituração interna de cartório.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "pode recusar a ordem ... se limitam à escrituração interna",
    cognitivo: {
      motivo: "Delimitar as atribuições do Escrivão Auxiliar de Polícia.",
      mede: "Lei 3.437/1975, art. 17.",
      pegadinhaDesc: "Restringe indevidamente as atribuições ao serviço interno.",
      ondeErra: "Imagina que 'auxiliar' e 'cartório' significam trabalho só de gabinete.",
      palavraCritica: "limitam à escrituração interna",
      tecnica: "O art. 17 inclui expressamente 'acompanhar a autoridade policial, quando determinado, nas diligências extras'.",
      regraMental: "Escrivão Auxiliar também vai a diligência externa."
    },
    comentario: {
      resolucao: "ERRADO. Entre as atribuições básicas do Escrivão Auxiliar de Polícia, o art. 17 prevê 'acompanhar a autoridade policial, quando determinado, nas diligências extras'. Logo, não pode recusar a ordem sob o argumento de que atuaria apenas internamente.",
      fundamento: "Lei 3.437/1975, art. 17.",
      macete: "Escrivão Auxiliar acompanha diligência externa quando determinado.",
      erroComum: "Restringir o cargo ao cartório.",
      comoBancaPensa: "Cria cenário que induz a leitura restritiva das atribuições."
    }
  },

  /* ===================== PRECEDÊNCIA E VANTAGENS ===================== */
  {
    id: "LI-055", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Precedência hierárquica (art. 67)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "Na Polícia Civil de Alagoas, o primeiro critério de precedência hierárquica é o maior tempo de serviço público, seguido do maior nível ou símbolo de vencimento-base.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "primeiro critério ... maior tempo de serviço público",
    cognitivo: {
      motivo: "Fixar a ordem dos critérios de precedência.",
      mede: "Lei 3.437/1975, art. 67.",
      pegadinhaDesc: "Inverte a ordem dos critérios: coloca o quarto critério como primeiro.",
      ondeErra: "Presume que tempo de serviço público encabeça a hierarquia.",
      palavraCritica: "primeiro critério ... tempo de serviço público",
      tecnica: "A ordem do art. 67 começa pelo nível/símbolo de vencimento-base; tempo de serviço público é o quarto critério.",
      regraMental: "Precedência: 1º vencimento; 2º antiguidade na classe; 3º tempo policial; 4º tempo público; 5º idade."
    },
    comentario: {
      resolucao: "ERRADO. Pelo art. 67, o primeiro critério é o maior nível ou símbolo de vencimento-base percebido em função da atividade policial. O maior tempo de serviço público é o quarto critério, e não o primeiro.",
      fundamento: "Lei 3.437/1975, art. 67, I a V.",
      macete: "Precedência começa pelo vencimento, não pelo tempo.",
      erroComum: "Assumir antiguidade/tempo como critério inicial.",
      comoBancaPensa: "Reordena os critérios de uma lista fechada."
    }
  },
  {
    id: "LI-056", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Precedência hierárquica (art. 67)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Persistindo o empate entre policiais civis após aplicados os demais critérios de precedência hierárquica previstos no Estatuto da PC-AL, terá precedência o mais idoso.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mais idoso",
    cognitivo: {
      motivo: "Fixar o critério de desempate final da precedência.",
      mede: "Lei 3.437/1975, art. 67, V.",
      pegadinhaDesc: "Critério final reproduzido corretamente.",
      ondeErra: "Imagina sorteio ou maior tempo de serviço como desempate final.",
      palavraCritica: "mais idoso",
      tecnica: "O quinto e último critério do art. 67 é a idade: prevalece o mais idoso.",
      regraMental: "Último desempate da precedência: idade."
    },
    comentario: {
      resolucao: "CERTO. O art. 67, V, estabelece que, esgotados os critérios anteriores, prevalece o mais idoso.",
      fundamento: "Lei 3.437/1975, art. 67, V.",
      macete: "Empate final: o mais idoso.",
      erroComum: "Supor sorteio como desempate.",
      comoBancaPensa: "Item correto sobre o critério residual."
    }
  },
  {
    id: "LI-057", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Ajuda de custo (art. 70)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.8,
    enunciado: "A ajuda de custo concedida ao policial civil que passe a ter exercício em nova sede destina-se ao ressarcimento das despesas de viagem à nova instalação, inclusive as de transporte, e não excederá a um mês de vencimento.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "inclusive as de transporte",
    cognitivo: {
      motivo: "Cobrar a exata destinação da ajuda de custo.",
      mede: "Lei 3.437/1975, art. 70, §2º.",
      pegadinhaDesc: "O limite de um mês de vencimento está correto; a inclusão das despesas de transporte inverte a exceção legal.",
      ondeErra: "Presume que despesa de transporte é a principal a ser ressarcida.",
      palavraCritica: "inclusive as de transporte",
      tecnica: "O §2º ressarce despesas de viagem EXCETO as de transporte. Onde o item diz 'inclusive', a lei diz 'exceto'.",
      regraMental: "Ajuda de custo cobre viagem, menos transporte; teto de 1 mês."
    },
    comentario: {
      resolucao: "ERRADO. O art. 70, §2º, destina a ajuda de custo ao ressarcimento das despesas de viagem à nova instalação, EXCETO as de transporte, e limita o valor a um mês de vencimento. O enunciado inverte a exceção ao dizer 'inclusive as de transporte'.",
      fundamento: "Lei 3.437/1975, art. 70, §2º.",
      macete: "Ajuda de custo: viagem sim, transporte não.",
      erroComum: "Incluir o transporte no ressarcimento.",
      comoBancaPensa: "Troca 'exceto' por 'inclusive' mantendo o teto correto."
    }
  },

  /* ===================== ACUMULAÇÃO ===================== */
  {
    id: "LI-058", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Acumulação de cargos (art. 85)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.8,
    enunciado: "A regra no Estatuto da PC-AL é a vedação de acumulação de cargos ou funções, admitindo-se, excepcionalmente, a acumulação de um cargo policial técnico ou científico com o de professor, desde que haja correlação de matérias e compatibilidade de horários.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "cargo policial técnico ou científico com o de professor ... correlação de matérias e compatibilidade de horários",
    cognitivo: {
      motivo: "Fixar a exceção à vedação de acumulação.",
      mede: "Lei 3.437/1975, art. 85.",
      pegadinhaDesc: "Reproduz a exceção legal com fidelidade, o que pode gerar dúvida por parecer generosa.",
      ondeErra: "Acha que qualquer cargo pode acumular com magistério.",
      palavraCritica: "técnico ou científico ... correlação de matérias e compatibilidade de horários",
      tecnica: "A exceção exige cargo técnico/científico + professor, com correlação de matérias e compatibilidade de horários.",
      regraMental: "Acumular só: técnico/científico + professor, com correlação e horário compatível."
    },
    comentario: {
      resolucao: "CERTO. O art. 85 fixa a vedação como regra e admite, como exceção, a acumulação de cargo policial técnico ou científico com o de professor, exigindo correlação de matérias e compatibilidade de horários.",
      fundamento: "Lei 3.437/1975, art. 85.",
      macete: "Exceção: técnico/científico + professor, com correlação e horário.",
      erroComum: "Generalizar a acumulação com magistério.",
      comoBancaPensa: "Item correto que exige conhecer os limites da exceção."
    }
  },

  /* ===================== REGIME DISCIPLINAR — PENALIDADES ===================== */
  {
    id: "LI-059", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Penas disciplinares (art. 91)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.9,
    enunciado: "São penas disciplinares previstas no Estatuto da PC-AL a repreensão, a multa, a suspensão, a detenção disciplinar, a destituição de função, a demissão e a cassação de aposentadoria ou disponibilidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "repreensão, a multa, a suspensão, a detenção disciplinar, a destituição de função, a demissão e a cassação",
    cognitivo: {
      motivo: "Fixar o rol de penas disciplinares.",
      mede: "Lei 3.437/1975, art. 91.",
      pegadinhaDesc: "Rol completo e na ordem legal, incluindo a detenção disciplinar, que é peculiar deste estatuto.",
      ondeErra: "Duvida da 'detenção disciplinar' por não existir em estatutos comuns.",
      palavraCritica: "detenção disciplinar ... cassação de aposentadoria ou disponibilidade",
      tecnica: "São sete penas do art. 91; a detenção disciplinar é característica da PC-AL.",
      regraMental: "Sete penas: repreensão, multa, suspensão, detenção, destituição, demissão, cassação."
    },
    comentario: {
      resolucao: "CERTO. O art. 91 arrola as sete penas: repreensão, multa, suspensão, detenção disciplinar, destituição de função, demissão e cassação de aposentadoria ou disponibilidade.",
      fundamento: "Lei 3.437/1975, art. 91, I a VII.",
      macete: "Sete penas; detenção disciplinar é a marca da PC-AL.",
      erroComum: "Excluir a detenção disciplinar por estranheza.",
      comoBancaPensa: "Item correto que testa o rol integral, inclusive a pena atípica."
    }
  },
  {
    id: "LI-060", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Repreensão (art. 93)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "Diante de falta leve não tipificada para outra sanção específica, a chefia poderá aplicar repreensão verbal ao policial civil, sem registro nos assentamentos, para não macular sua ficha funcional.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "repreensão verbal ... sem registro",
    cognitivo: {
      motivo: "Fixar a forma obrigatória da repreensão.",
      mede: "Lei 3.437/1975, art. 93.",
      pegadinhaDesc: "Descreve a repreensão como verbal e sem registro, contrariando a exigência legal de forma escrita.",
      ondeErra: "Associa 'falta leve' a advertência informal.",
      palavraCritica: "verbal ... sem registro",
      tecnica: "A repreensão é SEMPRE aplicada por escrito e deve constar do assentamento individual.",
      regraMental: "Repreensão: sempre escrita e registrada."
    },
    comentario: {
      resolucao: "ERRADO. O art. 93 determina que a repreensão será SEMPRE aplicada por escrito e deverá constar do assentamento individual do funcionário. Não existe repreensão verbal nem sem registro.",
      fundamento: "Lei 3.437/1975, art. 93.",
      macete: "Repreensão: sempre por escrito, sempre registrada.",
      erroComum: "Aceitar advertência verbal informal.",
      comoBancaPensa: "Descreve forma incompatível com a exigência legal."
    }
  },
  {
    id: "LI-061", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Suspensão (art. 94)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "A pena de suspensão, no Estatuto da PC-AL, não excederá de sessenta dias e será aplicada em casos de falta grave ou de reincidência em faltas de qualquer natureza.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "não excederá de sessenta dias",
    cognitivo: {
      motivo: "Fixar o limite máximo da suspensão.",
      mede: "Lei 3.437/1975, art. 94.",
      pegadinhaDesc: "A hipótese de aplicação está correta; só o teto foi dobrado.",
      ondeErra: "Confunde com prazos de suspensão de outros regimes.",
      palavraCritica: "sessenta dias",
      tecnica: "O teto da suspensão no Estatuto da PC-AL é de 30 dias.",
      regraMental: "Suspensão na PC-AL: máximo 30 dias."
    },
    comentario: {
      resolucao: "ERRADO. O art. 94 fixa o teto da suspensão em 30 (trinta) dias. A hipótese de aplicação — falta grave ou reincidência em faltas de qualquer natureza — está correta.",
      fundamento: "Lei 3.437/1975, art. 94.",
      macete: "Suspensão: teto de 30 dias.",
      erroComum: "Dobrar o teto para 60 dias.",
      comoBancaPensa: "Acerta a hipótese e altera só o numeral do teto."
    }
  },
  {
    id: "LI-062", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Multa (art. 95)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "Quando houver conveniência para o serviço, a pena de suspensão poderá ser convertida em multa na base máxima de 50% do vencimento ou remuneração, ficando o policial civil obrigado a permanecer em serviço.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "convertida em multa na base máxima de 50% ... permanecer em serviço",
    cognitivo: {
      motivo: "Fixar a lógica da conversão da suspensão em multa.",
      mede: "Lei 3.437/1975, art. 95.",
      pegadinhaDesc: "Descreve fielmente a conversão, o percentual e a permanência em serviço.",
      ondeErra: "Acha que a multa afasta o servidor ou que o percentual é outro.",
      palavraCritica: "50% ... permanecer em serviço",
      tecnica: "A multa é conversão da suspensão: 50% no máximo, e o servidor continua trabalhando.",
      regraMental: "Multa = suspensão convertida: 50% e continua em serviço."
    },
    comentario: {
      resolucao: "CERTO. O art. 95 permite converter a suspensão em multa de até 50% do vencimento ou remuneração, por conveniência do serviço, obrigando o policial a permanecer em serviço.",
      fundamento: "Lei 3.437/1975, art. 95.",
      macete: "Multa: 50% e trabalhando.",
      erroComum: "Supor afastamento durante a multa.",
      comoBancaPensa: "Item correto que confirma o mecanismo de conversão."
    }
  },
  {
    id: "LI-063", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Detenção disciplinar (art. 96)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "A pena de suspensão poderá ser convertida em detenção disciplinar mediante ordem baixada por escrito por qualquer Delegado de Polícia que presida o feito disciplinar.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "qualquer Delegado de Polícia",
    cognitivo: {
      motivo: "Fixar a competência para converter suspensão em detenção disciplinar.",
      mede: "Lei 3.437/1975, art. 96.",
      pegadinhaDesc: "Amplia a competência para 'qualquer Delegado', quando a lei a reserva a duas autoridades.",
      ondeErra: "Presume que quem preside o feito pode converter a pena.",
      palavraCritica: "qualquer Delegado de Polícia",
      tecnica: "A conversão em detenção disciplinar exige ordem escrita do Secretário de Segurança Pública ou do Governador.",
      regraMental: "Detenção disciplinar: só por ordem do Secretário SSP ou do Governador."
    },
    comentario: {
      resolucao: "ERRADO. O art. 96 exige ordem baixada por escrito pelo Secretário de Segurança Pública ou pelo Governador do Estado. Delegado de polícia não tem competência para converter suspensão em detenção disciplinar.",
      fundamento: "Lei 3.437/1975, art. 96.",
      macete: "Detenção disciplinar: Secretário SSP ou Governador.",
      erroComum: "Atribuir a conversão a delegado.",
      comoBancaPensa: "Amplia a autoridade competente para uma figura mais próxima do candidato."
    }
  },
  {
    id: "LI-064", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Detenção disciplinar — vencimentos (art. 96)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "A detenção disciplinar acarreta a perda dos vencimentos do policial civil durante todo o período de seu cumprimento.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "acarreta a perda dos vencimentos",
    cognitivo: {
      motivo: "Cobrar o efeito remuneratório da detenção disciplinar.",
      mede: "Lei 3.437/1975, art. 96, §2º.",
      pegadinhaDesc: "Afirma perda de vencimentos, quando a lei expressamente afasta esse efeito.",
      ondeErra: "Associa qualquer restrição de liberdade a corte de remuneração.",
      palavraCritica: "perda dos vencimentos",
      tecnica: "O §2º diz que a detenção disciplinar NÃO acarreta a perda dos vencimentos.",
      regraMental: "Detenção disciplinar não corta vencimento."
    },
    comentario: {
      resolucao: "ERRADO. O art. 96, §2º, dispõe que a detenção disciplinar não acarretará a perda dos vencimentos.",
      fundamento: "Lei 3.437/1975, art. 96, §2º.",
      macete: "Detenção disciplinar: mantém o vencimento.",
      erroComum: "Presumir corte remuneratório.",
      comoBancaPensa: "Inverte um efeito expressamente negado pela lei."
    }
  },
  {
    id: "LI-065", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Detenção disciplinar — local (art. 96)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "A detenção disciplinar, quando não exceder de quarenta e oito horas, poderá ser cumprida na própria residência do funcionário policial.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não exceder de quarenta e oito horas ... na própria residência",
    cognitivo: {
      motivo: "Fixar a regra de local de cumprimento da detenção disciplinar.",
      mede: "Lei 3.437/1975, art. 96, §2º, I.",
      pegadinhaDesc: "Regra reproduzida fielmente; o candidato pode duvidar por parecer branda.",
      ondeErra: "Acha que toda detenção ocorre em repartição policial.",
      palavraCritica: "quarenta e oito horas ... residência",
      tecnica: "Até 48h, cumpre-se na residência; acima disso, em sala especial da SSP ou repartição designada.",
      regraMental: "Até 48h: em casa. Mais que isso: sala especial."
    },
    comentario: {
      resolucao: "CERTO. O art. 96, §2º, I, prevê o cumprimento da detenção disciplinar na residência do funcionário quando não exceder de quarenta e oito horas; acima disso, em sala especial na sede da SSP ou repartição policial designada (inciso II).",
      fundamento: "Lei 3.437/1975, art. 96, §2º, I e II.",
      macete: "48h em casa; além disso, sala especial.",
      erroComum: "Exigir sempre local policial.",
      comoBancaPensa: "Item correto que testa a regra dos dois locais."
    }
  },
  {
    id: "LI-066", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Detenção disciplinar — visitas (art. 104)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "Durante o cumprimento da detenção disciplinar, é vedado ao funcionário receber visitas de familiares ou amigos, a fim de preservar o caráter punitivo da medida.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "é vedado ... receber visitas",
    cognitivo: {
      motivo: "Cobrar o regime de visitas na detenção disciplinar.",
      mede: "Lei 3.437/1975, art. 104.",
      pegadinhaDesc: "Nega o direito de visita, que a lei assegura em horário determinado.",
      ondeErra: "Associa detenção a isolamento total.",
      palavraCritica: "é vedado ... visitas",
      tecnica: "O art. 104 permite visitas de familiares ou amigos em horário determinado pelo titular do órgão.",
      regraMental: "Detenção disciplinar admite visita em horário fixado."
    },
    comentario: {
      resolucao: "ERRADO. O art. 104 assegura que, durante a detenção disciplinar, o funcionário poderá receber visita de familiares ou amigos, em horário determinado pelo titular do órgão, de modo a não perturbar o expediente.",
      fundamento: "Lei 3.437/1975, art. 104.",
      macete: "Detenção disciplinar: visita permitida em horário fixo.",
      erroComum: "Tratar a detenção como incomunicabilidade.",
      comoBancaPensa: "Nega um direito expressamente assegurado."
    }
  },
  {
    id: "LI-067", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Detenção disciplinar preventiva (art. 101)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Em caso de emergência e como medida preventiva, o Chefe de Gabinete da SSP, o Corregedor Geral da Polícia e os Diretores de Departamentos poderão determinar detenção disciplinar contra funcionários policiais subordinados, por prazo não superior a cinco dias.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Chefe de Gabinete da SSP, o Corregedor Geral ... prazo não superior a cinco dias",
    cognitivo: {
      motivo: "Fixar quem pode aplicar detenção preventiva e por quanto tempo.",
      mede: "Lei 3.437/1975, art. 101.",
      pegadinhaDesc: "Autoridades e prazo reproduzidos corretamente.",
      ondeErra: "Confunde o prazo preventivo (5 dias) com o teto geral da suspensão.",
      palavraCritica: "cinco dias",
      tecnica: "A preventiva emergencial dessas autoridades tem teto de 5 dias.",
      regraMental: "Detenção preventiva emergencial: até 5 dias."
    },
    comentario: {
      resolucao: "CERTO. O art. 101 autoriza o Chefe de Gabinete da SSP, o Corregedor Geral da Polícia e os Diretores de Departamentos a determinar, em emergência e como medida preventiva, detenção disciplinar de subordinados, por prazo não superior a cinco dias.",
      fundamento: "Lei 3.437/1975, art. 101.",
      macete: "Preventiva emergencial: 5 dias.",
      erroComum: "Elevar o prazo preventivo.",
      comoBancaPensa: "Item correto que testa autoridade e prazo em conjunto."
    }
  },

  /* ===================== REGIME DISCIPLINAR — DEMISSÃO E COMPETÊNCIA ===================== */
  {
    id: "LI-068", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Demissão — falta ao serviço (art. 106)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Segundo o Estatuto da PC-AL, aplica-se a pena de demissão em caso de falta ao serviço por trinta dias intercalados, sem justa causa, durante o período de doze meses.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "trinta dias intercalados",
    cognitivo: {
      motivo: "Fixar o número de faltas intercaladas que enseja demissão.",
      mede: "Lei 3.437/1975, art. 106, IX.",
      pegadinhaDesc: "Mantém 'intercalados' e 'doze meses' e altera só a quantidade de dias.",
      ondeErra: "Confunde com o número de faltas de outros estatutos.",
      palavraCritica: "trinta dias intercalados",
      tecnica: "A demissão por faltas intercaladas exige sessenta dias em doze meses, e não trinta.",
      regraMental: "Demissão por falta: 60 dias intercalados em 12 meses."
    },
    comentario: {
      resolucao: "ERRADO. O art. 106, IX, prevê a demissão por falta ao serviço por sessenta dias intercalados, sem justa causa, durante o período de doze meses. O enunciado reduz o número para trinta.",
      fundamento: "Lei 3.437/1975, art. 106, IX.",
      macete: "60 dias intercalados em 12 meses.",
      erroComum: "Reduzir o número de faltas.",
      comoBancaPensa: "Preserva as demais elementares e altera o numeral."
    }
  },
  {
    id: "LI-069", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Competência para penalidades (art. 109)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "No Estatuto da PC-AL, a aplicação das penas de demissão e de cassação de aposentadoria ou disponibilidade é privativa do Governador do Estado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "demissão e de cassação ... privativa do Governador",
    cognitivo: {
      motivo: "Fixar a competência privativa do Governador para as penas máximas.",
      mede: "Lei 3.437/1975, art. 109, I e II.",
      pegadinhaDesc: "Reproduz a reserva de competência do Governador para demissão e cassação.",
      ondeErra: "Estende essa competência ao Secretário de Segurança Pública.",
      palavraCritica: "privativa do Governador",
      tecnica: "O Secretário SSP aplica todas as penas, SALVO demissão e cassação, que são privativas do Governador.",
      regraMental: "Demissão e cassação: só o Governador."
    },
    comentario: {
      resolucao: "CERTO. O art. 109, I, reserva ao Governador, privativamente, a aplicação das penas de demissão e cassação de aposentadoria ou disponibilidade; o inciso II confere ao Secretário de Segurança Pública competência para todos os demais casos, salvo esses.",
      fundamento: "Lei 3.437/1975, art. 109, I e II.",
      macete: "Penas máximas: privativas do Governador.",
      erroComum: "Atribuir demissão ao Secretário SSP.",
      comoBancaPensa: "Item correto que testa a reserva de competência."
    }
  },
  {
    id: "LI-070", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Competência dos Delegados (art. 109)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Os Delegados em geral e os Diretores de repartições são competentes para aplicar as penas de repreensão e suspensão até trinta dias.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "suspensão até trinta dias",
    cognitivo: {
      motivo: "Fixar o limite de suspensão aplicável por delegados.",
      mede: "Lei 3.437/1975, art. 109, IV.",
      pegadinhaDesc: "Usa o teto geral da suspensão (30 dias) no lugar do limite de competência do delegado (10 dias).",
      ondeErra: "Confunde o teto máximo da pena com o teto de competência da autoridade.",
      palavraCritica: "até trinta dias",
      tecnica: "Delegados e Diretores de repartições só aplicam suspensão até 10 dias; o Chefe de Gabinete/Corregedor/Diretores de Departamento vão até 20 dias.",
      regraMental: "Delegado: repreensão e suspensão até 10 dias."
    },
    comentario: {
      resolucao: "ERRADO. O art. 109, IV, limita a competência dos Delegados em geral e Diretores de repartições à repreensão e à suspensão até dez dias. O teto de trinta dias é o máximo da própria pena de suspensão (art. 94), não o limite de competência dessas autoridades.",
      fundamento: "Lei 3.437/1975, art. 109, IV; art. 94.",
      macete: "Delegado suspende até 10 dias.",
      erroComum: "Confundir teto da pena com teto de competência.",
      comoBancaPensa: "Troca o limite de competência pelo teto máximo da pena."
    }
  },
  {
    id: "LI-071", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Suspensão preventiva (art. 110 e 112)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.8,
    enunciado: "A suspensão preventiva, cabível quando a presença do funcionário puder influir na apuração da falta, é de até trinta dias, podendo ser prorrogada até noventa dias, após o que cessam seus efeitos ainda que não concluído o processo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "até trinta dias, podendo ser prorrogada até noventa dias",
    cognitivo: {
      motivo: "Fixar o prazo e a prorrogação da suspensão preventiva.",
      mede: "Lei 3.437/1975, arts. 110 e 112.",
      pegadinhaDesc: "Prazo inicial e prorrogação reproduzidos corretamente.",
      ondeErra: "Confunde 30/90 dias ou acha que a preventiva dura enquanto durar o processo.",
      palavraCritica: "trinta dias ... noventa dias",
      tecnica: "Preventiva de 30 dias, prorrogável até 90; findo o prazo, cessa mesmo sem conclusão do processo.",
      regraMental: "Preventiva: 30 dias, prorroga até 90, e acaba."
    },
    comentario: {
      resolucao: "CERTO. O art. 110 prevê a suspensão preventiva de até trinta dias; o art. 112 permite prorrogá-la até noventa dias, após o que cessam os efeitos, ainda que o processo não esteja concluído.",
      fundamento: "Lei 3.437/1975, arts. 110 e 112.",
      macete: "Preventiva: 30 → 90 → cessa.",
      erroComum: "Estender a preventiva enquanto durar o processo.",
      comoBancaPensa: "Item correto que testa prazo e limite de prorrogação."
    }
  },

  /* ===================== PROCESSO DISCIPLINAR ===================== */
  {
    id: "LI-072", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Processo disciplinar prévio (art. 115)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "O processo disciplinar precederá à aplicação das penas de suspensão por mais de quinze dias, destituição de função, demissão e cassação de disponibilidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "suspensão por mais de quinze dias, destituição, demissão e cassação",
    cognitivo: {
      motivo: "Fixar quando o processo disciplinar é obrigatório.",
      mede: "Lei 3.437/1975, art. 115.",
      pegadinhaDesc: "Reproduz corretamente o patamar de 15 dias e as demais penas graves.",
      ondeErra: "Confunde o marco (mais de 15 dias) com o teto da suspensão (30 dias).",
      palavraCritica: "por mais de quinze dias",
      tecnica: "Acima de 15 dias de suspensão, ou nas penas graves, exige-se processo disciplinar.",
      regraMental: "Processo disciplinar: suspensão > 15 dias, destituição, demissão, cassação."
    },
    comentario: {
      resolucao: "CERTO. O art. 115 exige processo disciplinar prévio para suspensão por mais de quinze dias, destituição de função, demissão e cassação de disponibilidade, servindo também para apurar dano à Fazenda Estadual por procedimento doloso ou culposo.",
      fundamento: "Lei 3.437/1975, art. 115.",
      macete: "Processo prévio: suspensão > 15 dias e penas graves.",
      erroComum: "Trocar o marco de 15 dias.",
      comoBancaPensa: "Item correto que testa o limiar do processo disciplinar."
    }
  },
  {
    id: "LI-073", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Sindicância (art. 117)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "A sindicância será instaurada quando as irregularidades não se revelarem evidentes ou quando for incerta a sua autoria, e será conduzida por dois funcionários policiais de categoria igual ou superior.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dois funcionários policiais de categoria igual ou superior",
    cognitivo: {
      motivo: "Fixar quando cabe sindicância e sua composição.",
      mede: "Lei 3.437/1975, art. 117.",
      pegadinhaDesc: "Hipótese e composição reproduzidas fielmente.",
      ondeErra: "Confunde a composição da sindicância (2) com a da Comissão de Disciplina (3).",
      palavraCritica: "dois funcionários policiais",
      tecnica: "Sindicância = 2 policiais; Comissão de Disciplina (inquérito) = 3 membros.",
      regraMental: "Sindicância: 2. Comissão de Disciplina: 3."
    },
    comentario: {
      resolucao: "CERTO. O art. 117 prevê a sindicância quando as irregularidades não forem evidentes ou a autoria for incerta, conduzida por dois funcionários policiais de categoria igual ou superior.",
      fundamento: "Lei 3.437/1975, art. 117.",
      macete: "Sindicância: 2 policiais.",
      erroComum: "Confundir com os 3 membros da Comissão de Disciplina.",
      comoBancaPensa: "Item correto que testa a diferença entre sindicância e inquérito."
    }
  },
  {
    id: "LI-074", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Comissão de Disciplina (art. 118)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "O inquérito disciplinar será promovido por uma Comissão de Disciplina composta de cinco membros, de preferência bacharéis em Direito, designada pelo Secretário de Segurança Pública.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "composta de cinco membros",
    cognitivo: {
      motivo: "Fixar a composição numérica da Comissão de Disciplina.",
      mede: "Lei 3.437/1975, art. 118.",
      pegadinhaDesc: "A preferência por bacharéis e a designação pelo Secretário estão corretas; só o número foi alterado.",
      ondeErra: "Confunde com colegiados de cinco membros.",
      palavraCritica: "cinco membros",
      tecnica: "A Comissão de Disciplina tem três membros, de preferência bacharéis em Direito.",
      regraMental: "Comissão de Disciplina: 3 membros."
    },
    comentario: {
      resolucao: "ERRADO. O art. 118 prevê Comissão de Disciplina composta de três membros, de preferência bacharéis em Direito, designada pelo Secretário de Segurança Pública. O número correto é três, não cinco.",
      fundamento: "Lei 3.437/1975, art. 118.",
      macete: "Comissão de Disciplina: 3 membros.",
      erroComum: "Elevar o número de membros.",
      comoBancaPensa: "Acerta os demais elementos e altera só o número de membros."
    }
  },
  {
    id: "LI-075", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Suspeição de membro (art. 123)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.75,
    enunciado: "Acolhida a alegação de suspeição de membro da Comissão de Disciplina, sua substituição será definitiva, alcançando todos os processos disciplinares futuros de que ele participaria.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "substituição será definitiva ... todos os processos ... futuros",
    cognitivo: {
      motivo: "Delimitar o alcance da substituição por suspeição.",
      mede: "Lei 3.437/1975, art. 123.",
      pegadinhaDesc: "Estende a substituição a todos os processos, quando a lei a restringe ao processo em que arguida.",
      ondeErra: "Presume que suspeição acolhida afasta o membro em definitivo.",
      palavraCritica: "todos os processos ... futuros",
      tecnica: "A substituição por suspeição ocorre apenas no processo a que ela se refere.",
      regraMental: "Suspeição substitui só naquele processo."
    },
    comentario: {
      resolucao: "ERRADO. O art. 123 determina que, procedente a suspeição, o membro será substituído apenas no processo a que ela se refere — não em todos os futuros.",
      fundamento: "Lei 3.437/1975, art. 123.",
      macete: "Suspeição: substituição pontual, não definitiva.",
      erroComum: "Generalizar o afastamento do membro.",
      comoBancaPensa: "Amplia o alcance de uma substituição que a lei restringe."
    }
  },
  {
    id: "LI-076", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Revisão do processo (art. 125)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "A revisão do processo administrativo de que resultou pena disciplinar pode ser requerida a qualquer tempo, quando se aduzam fatos ou circunstâncias suscetíveis de justificar a inocência do requerente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "a qualquer tempo ... justificar a inocência",
    cognitivo: {
      motivo: "Fixar o cabimento da revisão do processo disciplinar.",
      mede: "Lei 3.437/1975, art. 125.",
      pegadinhaDesc: "Reproduz fielmente o cabimento e o pressuposto da revisão.",
      ondeErra: "Imagina prazo decadencial para a revisão.",
      palavraCritica: "a qualquer tempo",
      tecnica: "A revisão não tem prazo: cabe a qualquer tempo, desde que haja fatos novos que justifiquem a inocência.",
      regraMental: "Revisão: a qualquer tempo, com fato novo pró-inocência."
    },
    comentario: {
      resolucao: "CERTO. O art. 125 admite a revisão a qualquer tempo, quando se aduzam fatos ou circunstâncias suscetíveis de justificar a inocência do requerente.",
      fundamento: "Lei 3.437/1975, art. 125.",
      macete: "Revisão: sem prazo, exige fato novo.",
      erroComum: "Supor prazo para revisão.",
      comoBancaPensa: "Item correto sobre a ausência de prazo da revisão."
    }
  },
  {
    id: "LI-077", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Agravante disciplinar (art. 92)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "É causa agravante de falta disciplinar tê-la cometido com o concurso de dois ou mais funcionários policiais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "concurso de dois ou mais funcionários policiais",
    cognitivo: {
      motivo: "Fixar a agravante genérica das faltas disciplinares.",
      mede: "Lei 3.437/1975, art. 92, parágrafo único.",
      pegadinhaDesc: "Reproduz fielmente a agravante do concurso de agentes.",
      ondeErra: "Confunde 'dois ou mais' com 'três ou mais'.",
      palavraCritica: "dois ou mais funcionários policiais",
      tecnica: "A agravante configura-se a partir de dois funcionários policiais em concurso.",
      regraMental: "Agravante disciplinar: dois ou mais policiais."
    },
    comentario: {
      resolucao: "CERTO. O art. 92, parágrafo único, prevê como causa agravante o cometimento da falta com o concurso de dois ou mais funcionários policiais.",
      fundamento: "Lei 3.437/1975, art. 92, parágrafo único.",
      macete: "Agravante: dois ou mais policiais.",
      erroComum: "Exigir três agentes.",
      comoBancaPensa: "Item correto que confirma o número mínimo da agravante."
    }
  },
  {
    id: "LI-078", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Dosimetria disciplinar (art. 92)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL, Lei 3.437/1975)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "Na aplicação das penas disciplinares, o Estatuto da PC-AL manda considerar a natureza e a gravidade da transgressão, os danos dela decorrentes para o serviço público, a repercussão do fato, os antecedentes do funcionário e a reincidência.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "natureza e a gravidade ... danos ... repercussão ... antecedentes ... reincidência",
    cognitivo: {
      motivo: "Fixar os critérios de dosimetria da pena disciplinar.",
      mede: "Lei 3.437/1975, art. 92.",
      pegadinhaDesc: "Enumera os cinco critérios exatamente como na lei.",
      ondeErra: "Acrescenta ou omite um critério.",
      palavraCritica: "antecedentes ... reincidência",
      tecnica: "Cinco critérios: natureza/gravidade, danos ao serviço, repercussão, antecedentes e reincidência.",
      regraMental: "Dosimetria: gravidade, dano, repercussão, antecedentes, reincidência."
    },
    comentario: {
      resolucao: "CERTO. O art. 92 elenca esses cinco critérios para a aplicação das penas disciplinares.",
      fundamento: "Lei 3.437/1975, art. 92, I a V.",
      macete: "Cinco critérios de dosimetria.",
      erroComum: "Trocar um dos critérios.",
      comoBancaPensa: "Item correto que confirma o rol de circunstâncias."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE56);
