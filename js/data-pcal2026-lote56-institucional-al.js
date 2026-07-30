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
    enunciado: "De acordo com o texto do Estatuto da Polícia Civil de Alagoas, os cargos de natureza policial são providos por nomeação, promoção, acesso, reintegração, aproveitamento, reversão e transferência.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "nomeação, promoção, acesso, reintegração, aproveitamento, reversão e transferência",
    cognitivo: {
      motivo: "Fixar o rol literal de formas de provimento do Estatuto estadual, atento à ressalva constitucional.",
      palavraCritica: "De acordo com o texto do Estatuto",
    },
    comentario: {
      resolucao: "CERTO. O art. 36 da Lei 3.437/1975 arrola literalmente essas sete formas de provimento. Atenção, porém: 'acesso' (ascensão) e 'transferência', como formas de provimento derivativo que levariam o servidor a cargo de carreira diversa sem novo concurso, foram declarados inconstitucionais pelo STF (Súmula 685; ADI 231), por violarem a exigência de concurso público (art. 37, II, da CF). O item é verdadeiro porque se refere expressamente ao TEXTO do Estatuto; se cobrasse a validade atual dessas formas, seria falso.",
      fundamento: "Lei 3.437/1975, art. 36, I a VII; CF, art. 37, II; Súmula 685 do STF.",
      macete: "Texto da lei: 7 formas. Mas acesso e transferência caíram com a CF.",
      erroComum: "Marcar ERRADO por lembrar da inconstitucionalidade, quando o enunciado pede o texto da lei.",
      comoBancaPensa: "Separa quem confunde 'o que a lei diz' com 'o que ainda vale', nas duas direções."
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
      palavraCritica: "em qualquer hipótese",
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
      palavraCritica: "obrigações militares e eleitorais",
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
    id: "LI-048", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Direção da polícia por delegado de carreira (art. 40 x CF art. 144)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL x CF/88)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.8,
    enunciado: "Ainda que o Estatuto da PC-AL, de 1975, preveja que Delegados Regionais e Especializados possam ser exercidos por oficiais superiores da Polícia Militar, tal previsão não se compatibiliza com a Constituição de 1988, segundo a qual a polícia civil é dirigida por delegados de polícia de carreira.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "não se compatibiliza ... dirigida por delegados de polícia de carreira",
    cognitivo: {
      motivo: "Confrontar a previsão do estatuto de 1975 com o modelo constitucional de direção da polícia civil.",
      palavraCritica: "delegados de polícia de carreira",
    },
    comentario: {
      resolucao: "CERTO. O art. 144, §4º, da CF estabelece que a polícia civil é dirigida por delegados de polícia de carreira. A previsão do art. 40, §1º, da Lei 3.437/1975, que admitia oficiais superiores da PM no exercício de cargos de Delegado Regional e Especializado, é anterior à Constituição e não foi recepcionada nesse ponto. A exigência de delegado de carreira é reforçada pela Lei Orgânica Nacional das Polícias Civis, também objeto do edital.",
      fundamento: "CF, art. 144, §4º; Lei 3.437/1975, art. 40, §1º (não recepcionado).",
      macete: "Delegado é de carreira; PM não dirige polícia civil.",
      erroComum: "Aceitar a previsão literal de 1975 como válida hoje.",
      comoBancaPensa: "Oferece o dispositivo estadual antigo como isca para quem não confronta com o art. 144, §4º, da CF."
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
      palavraCritica: "quinze dias",
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
    id: "LI-050", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Estabilidade — art. 55 x art. 41 da CF",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Estatuto PC-AL x CF/88)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.95,
    enunciado: "Embora o Estatuto da Polícia Civil de Alagoas, editado em 1975, mencione a aquisição de estabilidade após um ano de exercício, tal prazo não prevalece sobre o art. 41 da Constituição Federal, que exige três anos de efetivo exercício e avaliação especial de desempenho para a aquisição da estabilidade pelo servidor de cargo efetivo.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "não prevalece ... três anos de efetivo exercício e avaliação especial de desempenho",
    cognitivo: {
      motivo: "Cobrar a prevalência da norma constitucional sobre o prazo do estatuto estadual anterior a 1988.",
      palavraCritica: "não prevalece ... três anos ... avaliação especial de desempenho",
    },
    comentario: {
      resolucao: "CERTO. O art. 55 da Lei 3.437/1975, anterior à Constituição de 1988, prevê estabilidade em um ano, mas esse prazo não foi recepcionado. Prevalece o art. 41 da CF (redação da EC 19/1998): estabilidade após três anos de efetivo exercício, sendo obrigatória a avaliação especial de desempenho por comissão (art. 41, §4º). A regra constitucional é de observância obrigatória por todos os entes federativos, de modo que o Estado não pode fixar prazo inferior. STF e STJ, inclusive, alinharam o período do estágio probatório aos três anos da estabilidade.",
      fundamento: "CF, art. 41, caput e §4º (EC 19/1998); Lei 3.437/1975, art. 55 (não recepcionado quanto ao prazo).",
      macete: "Estabilidade sempre 3 anos; prazo estadual de 1975 caiu com a CF.",
      erroComum: "Responder pela literalidade do estatuto estadual (1 ano), ignorando a Constituição.",
      comoBancaPensa: "Oferece o prazo antigo do estatuto como isca para quem não confronta a lei estadual com o art. 41 da CF."
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
      palavraCritica: "idoneidade moral ... eficiência",
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
      palavraCritica: "qualquer área científica",
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
      palavraCritica: "curso de Direito",
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
      palavraCritica: "limitam à escrituração interna",
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
      palavraCritica: "primeiro critério ... tempo de serviço público",
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
      palavraCritica: "mais idoso",
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
      palavraCritica: "inclusive as de transporte",
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
      palavraCritica: "técnico ou científico ... correlação de matérias e compatibilidade de horários",
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
      palavraCritica: "detenção disciplinar ... cassação de aposentadoria ou disponibilidade",
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
      palavraCritica: "verbal ... sem registro",
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
      palavraCritica: "sessenta dias",
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
      palavraCritica: "50% ... permanecer em serviço",
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
      palavraCritica: "qualquer Delegado de Polícia",
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
      palavraCritica: "perda dos vencimentos",
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
      palavraCritica: "quarenta e oito horas ... residência",
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
      palavraCritica: "é vedado ... visitas",
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
      palavraCritica: "cinco dias",
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
      palavraCritica: "trinta dias intercalados",
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
      palavraCritica: "privativa do Governador",
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
      palavraCritica: "até trinta dias",
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
      palavraCritica: "trinta dias ... noventa dias",
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
      palavraCritica: "por mais de quinze dias",
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
      palavraCritica: "dois funcionários policiais",
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
      palavraCritica: "cinco membros",
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
      palavraCritica: "todos os processos ... futuros",
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
      palavraCritica: "a qualquer tempo",
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
      palavraCritica: "dois ou mais funcionários policiais",
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
      palavraCritica: "antecedentes ... reincidência",
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
