/* =====================================================================
   QUESTLAB — Lote 104: DIREITOS HUMANOS, QAPs DO CURSO DSO
   (Juliano Yamakawa — módulos 00 e 14)

   ORIGEM E MÉTODO: os do lote 100. Comentários escritos do zero contra a
   CF, a Convenção Americana (Decreto 678/1992), o PNDH-3 (Decreto
   7.037/2009) e as teses citadas.

   CONTAGEM
     34 itens nos cadernos de Direitos Humanos
     -2  repetições internas
     = 32 itens novos, DH-246 em diante (nenhum já estava no banco).

   O item da ABIN 2018 sobre responsabilidade internacional vinha precedido
   de um trecho doutrinário; o item é autossuficiente e entrou sem o trecho.
   Nenhuma divergência de gabarito encontrada.
   ===================================================================== */

const BASE104 = {
  concurso: "PCAL", cargo: ["Escrivão", "Agente"], ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  disciplina: "Direitos Humanos",
};

const QUESTOES_PCAL_LOTE104 = [

  /* ===== DIREITOS HUMANOS NA CONSTITUIÇÃO ===== */

  {
    ...BASE104,
    concurso: "PCDF", ano: 2021,
    id: "DH-246", assunto: "Direitos humanos na Constituição",
    subassunto: "Prevalência dos direitos humanos — princípio das relações internacionais",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — caderno: CEBRASPE (CESPE) - 2021 - Escrivão de Polícia (PC DF) — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "Um dos objetivos fundamentais da República Federativa do Brasil é a prevalência dos direitos humanos.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "objetivos fundamentais",
    cognitivo: {
      motivo: "Separar fundamentos (art. 1º), objetivos (art. 3º) e princípios das relações internacionais (art. 4º).",
      palavraCritica: "objetivos",
    },
    comentario: {
      resolucao: "ERRADO. A prevalência dos direitos humanos é PRINCÍPIO QUE REGE AS RELAÇÕES INTERNACIONAIS do Brasil (CF, art. 4º, II). Os OBJETIVOS FUNDAMENTAIS (art. 3º) são: construir uma sociedade livre, justa e solidária; garantir o desenvolvimento nacional; erradicar a pobreza e a marginalização e reduzir as desigualdades; promover o bem de todos, sem preconceitos. A dignidade da pessoa humana, por sua vez, é FUNDAMENTO (art. 1º, III).",
      fundamento: "CF, arts. 1º, 3º e 4º, II.",
      macete: "Art. 1º fundamentos (SoCiDiVaPlu), art. 3º objetivos (verbos), art. 4º relações internacionais.",
      erroComum: "Juntar os três artigos num bloco só.",
      comoBancaPensa: "Põe um princípio do art. 4º no rol do art. 3º.",
    },
  },

  {
    ...BASE104,
    id: "DH-247", assunto: "Direitos humanos na Constituição",
    subassunto: "Cláusula de abertura — art. 5º, § 2º",
    origem: "CESPE / CEBRASPE - 2023 - MPE-SC - Promotor de Justiça Substituto (fase vespertina) — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 55,
    enunciado: "A CF contém previsão do princípio da não exaustividade dos direitos fundamentais, na medida em que dispõe que os direitos nela estabelecidos não excluem outros decorrentes do regime e dos princípios por ela adotados, tampouco outros previstos em tratados internacionais dos quais o Brasil seja parte.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "não excluem outros",
    cognitivo: {
      motivo: "Reconhecer a cláusula de abertura material dos direitos fundamentais.",
      palavraCritica: "não exaustividade",
    },
    comentario: {
      resolucao: "CERTO. O art. 5º, § 2º, da CF diz que os direitos e garantias nela expressos não excluem outros decorrentes do regime e dos princípios por ela adotados, ou dos tratados internacionais em que a República Federativa do Brasil seja parte. É a cláusula de abertura, que dá ao rol do art. 5º caráter não exaustivo (exemplificativo).",
      fundamento: "CF, art. 5º, § 2º.",
      macete: "O rol do art. 5º é aberto.",
      erroComum: "Achar que só são fundamentais os direitos escritos no art. 5º.",
      comoBancaPensa: "Literalidade com o nome doutrinário do princípio.",
    },
  },

  {
    ...BASE104,
    concurso: "PCE", ano: 2021,
    id: "DH-248", assunto: "Direitos humanos na Constituição",
    subassunto: "Aplicabilidade imediata — normas não meramente programáticas",
    origem: "CEBRASPE PC-SE 2021 (Agente) — caderno: CEBRASPE (CESPE) - 2021 - Agente de Polícia Judiciária (PC SE) — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 60,
    enunciado: "Pelo seu caráter meramente prescritivo, as regras de direitos humanos previstas na CF servem para orientar na formulação de normas concretas, de modo que o atual modelo constitucional vigente nega o princípio da aplicabilidade imediata das normas definidoras de direitos e garantias fundamentais, não sendo concretizador, mas instrutivo.",
    gabarito: "E",
    pegadinha: "literalidade",
    palavraChave: "nega o princípio da aplicabilidade imediata",
    cognitivo: {
      motivo: "Aplicar o art. 5º, § 1º.",
      palavraCritica: "nega",
    },
    comentario: {
      resolucao: "ERRADO. A CF afirma expressamente o contrário: as normas definidoras dos direitos e garantias fundamentais têm APLICAÇÃO IMEDIATA (art. 5º, § 1º). Os direitos humanos positivados na Constituição são normas jurídicas vinculantes, que obrigam o Estado e podem ser exigidas em juízo — não meras recomendações ao legislador.",
      fundamento: "CF, art. 5º, § 1º.",
      macete: "Direito fundamental: norma que se aplica, não conselho.",
      erroComum: "Confundir a existência de normas programáticas com a negação da aplicabilidade imediata.",
      comoBancaPensa: "Texto rebuscado para inverter uma regra literal.",
    },
  },

  {
    ...BASE104,
    id: "DH-249", assunto: "Direitos humanos na Constituição",
    subassunto: "Tratados de direitos humanos — três quintos",
    origem: "CEBRASPE (CESPE) - 2025 - Analista Judiciário (TRT 10ª Região) /Administrativa/Contabilidade — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "Os tratados e as convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em dois turnos, por dois quintos dos votos dos respectivos membros, serão equivalentes às emendas constitucionais.",
    gabarito: "E",
    pegadinha: "troca-numerica",
    palavraChave: "dois quintos",
    cognitivo: {
      motivo: "Memorizar o quórum do art. 5º, § 3º.",
      palavraCritica: "dois quintos",
    },
    comentario: {
      resolucao: "ERRADO. O art. 5º, § 3º, da CF (EC 45/2004) exige aprovação, em cada Casa do Congresso Nacional, em dois turnos, por TRÊS QUINTOS dos votos dos respectivos membros — o mesmo quórum das emendas constitucionais. Tratados de direitos humanos aprovados pelo rito comum têm status supralegal, segundo o STF (RE 466.343).",
      fundamento: "CF, art. 5º, § 3º; STF, RE 466.343.",
      macete: "Tratado de DH com status de emenda: 3/5, dois turnos, nas duas Casas.",
      erroComum: "Trocar a fração.",
      comoBancaPensa: "Troca só o número.",
    },
  },

  {
    ...BASE104,
    id: "DH-250", assunto: "Direitos humanos na Constituição",
    subassunto: "Tratados de direitos humanos — não basta maioria simples",
    origem: "CESPE / CEBRASPE - 2025 - BDMG - Analista de Desenvolvimento - Gestão, Finanças e Controladoria — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "Os tratados e convenções internacionais sobre direitos humanos que forem aprovados pelo Congresso Nacional por maioria simples serão equivalentes às emendas constitucionais.",
    gabarito: "E",
    pegadinha: "troca-numerica",
    palavraChave: "maioria simples",
    cognitivo: {
      motivo: "Memorizar o quórum do art. 5º, § 3º.",
      palavraCritica: "maioria simples",
    },
    comentario: {
      resolucao: "ERRADO. Para equivaler a emenda constitucional, o tratado de direitos humanos precisa ser aprovado em cada Casa do Congresso, em dois turnos, por três quintos dos votos dos respectivos membros (CF, art. 5º, § 3º). Aprovado pelo rito comum (maioria simples), ingressa com status supralegal (acima das leis, abaixo da CF), conforme o STF.",
      fundamento: "CF, art. 5º, § 3º; STF, RE 466.343.",
      macete: "Maioria simples = supralegal. 3/5 em dois turnos = emenda.",
      erroComum: "Achar que todo tratado de DH tem status constitucional.",
      comoBancaPensa: "Troca o quórum.",
    },
  },

  {
    ...BASE104,
    id: "DH-251", assunto: "Direitos humanos na Constituição",
    subassunto: "Controle de convencionalidade — conceito",
    origem: "CESPE / CEBRASPE - 2025 - TRT - 10ª REGIÃO (DF e TO) - Analista Judiciário - Área: Judiciária — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "O controle de convencionalidade pode ser definido como a confrontação, para fins de compatibilização, entre as normas produzidas no âmbito interno e os tratados e as convenções internacionais sobre direitos humanos que tenham sido incorporados ao direito brasileiro.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "tratados e as convenções internacionais sobre direitos humanos",
    cognitivo: {
      motivo: "Fixar o conceito de controle de convencionalidade.",
      palavraCritica: "compatibilização",
    },
    comentario: {
      resolucao: "CERTO. Controle de convencionalidade é a verificação da compatibilidade das normas internas com os tratados internacionais de direitos humanos ratificados e em vigor no país. No Brasil, pode ser feito por qualquer juiz (difuso) e, para os tratados com status de emenda, também de forma concentrada. A Resolução CNJ 123/2022 recomenda aos órgãos do Judiciário sua observância.",
      fundamento: "CF, art. 5º, §§ 2º e 3º; Resolução CNJ 123/2022.",
      macete: "Constitucionalidade: lei x CF. Convencionalidade: lei x tratado de DH.",
      erroComum: "Confundir com o controle de constitucionalidade.",
      comoBancaPensa: "Definição correta.",
    },
  },

  {
    ...BASE104,
    concurso: "PCDF", ano: 2021,
    id: "DH-252", assunto: "Direitos humanos na Constituição",
    subassunto: "Incidente de deslocamento de competência",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — caderno: CEBRASPE (CESPE) - 2021 - Escrivão de Polícia (PC DF) - Adaptada — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 55,
    enunciado: "Nos casos de grave violação dos direitos humanos, o procurador-geral da República, a fim de assegurar o cumprimento de obrigações internacionais de direitos humanos das quais o Brasil faz parte, pode suscitar perante o STJ incidente de deslocamento de competência para a justiça federal.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "perante o STJ",
    cognitivo: {
      motivo: "Memorizar os três elementos do IDC: PGR, STJ e Justiça Federal.",
      palavraCritica: "procurador-geral da República",
    },
    comentario: {
      resolucao: "CERTO. Art. 109, § 5º, da CF (EC 45/2004): nas hipóteses de grave violação de direitos humanos, o Procurador-Geral da República, com a finalidade de assegurar o cumprimento de obrigações decorrentes de tratados internacionais de direitos humanos dos quais o Brasil seja parte, poderá suscitar, perante o Superior Tribunal de Justiça, em qualquer fase do inquérito ou processo, incidente de deslocamento de competência para a Justiça Federal.",
      fundamento: "CF, art. 109, V-A e § 5º.",
      macete: "IDC: PGR pede, STJ decide, Justiça Federal julga.",
      erroComum: "Trocar STJ por STF ou PGR por outro legitimado.",
      comoBancaPensa: "Literalidade.",
    },
  },

  {
    ...BASE104,
    id: "DH-253", assunto: "Direitos humanos na Constituição",
    subassunto: "Incidente de deslocamento de competência — legitimidade",
    origem: "CESPE - 2020 - MPE-CE - Promotor de Justiça de Entrância Inicial — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "Nas hipóteses de grave violação de direitos humanos, a fim de se assegurar o cumprimento de obrigações decorrentes de tratado internacional, o incidente de deslocamento de competência para a justiça federal poderá ser suscitado ao STJ pelo procurador-geral da República.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "pelo procurador-geral da República",
    cognitivo: {
      motivo: "Fixar o art. 109, § 5º.",
      palavraCritica: "suscitado ao STJ",
    },
    comentario: {
      resolucao: "CERTO. É o art. 109, § 5º, da CF. Só o Procurador-Geral da República pode suscitar o incidente, perante o STJ, em qualquer fase do inquérito ou do processo. O STJ exige, além da grave violação, risco de descumprimento das obrigações internacionais e incapacidade ou inércia das instâncias estaduais (IDC 1 e IDC 2).",
      fundamento: "CF, art. 109, § 5º; STJ, IDC 1 e IDC 2.",
      macete: "IDC: só o PGR.",
      erroComum: "Incluir o MP estadual ou a vítima entre os legitimados.",
      comoBancaPensa: "Literalidade.",
    },
  },

  /* ===== TEORIA GERAL DOS DIREITOS HUMANOS ===== */

  {
    ...BASE104,
    id: "DH-254", assunto: "Teoria geral dos direitos humanos",
    subassunto: "Internacionalização no pós-guerra",
    origem: "CEBRASPE (CESPE) - 2024 - Técnico Judiciário (TSE)/Administrativa/Agente da Policia Judicial\" — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "O surgimento do direito internacional dos direitos humanos fundamenta-se, entre outros aspectos, na reorganização da sociedade internacional ocorrida no pós-Segunda Guerra Mundial, e tem como um de seus marcos históricos o nascimento da Organização das Nações Unidas (ONU).",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "pós-Segunda Guerra Mundial",
    cognitivo: {
      motivo: "Situar a internacionalização dos direitos humanos.",
      palavraCritica: "ONU",
    },
    comentario: {
      resolucao: "CERTO. O direito internacional dos direitos humanos se consolida depois das atrocidades da Segunda Guerra, como reação à ideia de que a proteção da pessoa seria assunto exclusivo de cada Estado. Os marcos são a Carta da ONU (1945) e a Declaração Universal dos Direitos Humanos (1948). Há antecedentes (direito humanitário, Liga das Nações, OIT), mas o sistema global nasce aí.",
      fundamento: "Carta da ONU (1945); DUDH (1948).",
      macete: "Pós-guerra: ONU (1945) e DUDH (1948).",
      erroComum: "Datar o direito internacional dos direitos humanos nas revoluções do século XVIII.",
      comoBancaPensa: "Item histórico correto.",
    },
  },

  {
    ...BASE104,
    concurso: "PCE", ano: 2021,
    id: "DH-255", assunto: "Teoria geral dos direitos humanos",
    subassunto: "Direitos humanos x direitos fundamentais",
    origem: "CEBRASPE PC-SE 2021 (Agente) — caderno: CEBRASPE (CESPE) - 2021 - Agente de Polícia Judiciária (PC SE) (e mais 1 concurso)\" — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 55,
    enunciado: "Os direitos fundamentais são os reconhecidos e vinculados à esfera constitucional de determinado Estado, ao passo que os direitos humanos estão firmados por posições jurídicas internacionais, que exprimem certa consciência ética universal. Apesar dessa distinção, essas terminologias podem se confundir ou se complementar em determinados momentos.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "esfera constitucional",
    cognitivo: {
      motivo: "Saber a distinção terminológica usual.",
      palavraCritica: "podem se confundir",
    },
    comentario: {
      resolucao: "CERTO. A doutrina majoritária (Ingo Sarlet, entre outros) reserva 'direitos fundamentais' aos direitos positivados na Constituição de um Estado e 'direitos humanos' aos reconhecidos no plano internacional, com pretensão de validade universal. A distinção é de plano, não de conteúdo: muitas vezes os mesmos direitos aparecem nos dois, e as expressões se complementam.",
      fundamento: "Doutrina (Sarlet).",
      macete: "Fundamentais: na Constituição. Humanos: nos tratados. Mesmos direitos, planos diferentes.",
      erroComum: "Achar que são categorias de conteúdo totalmente diferente.",
      comoBancaPensa: "Item conceitual verdadeiro.",
    },
  },

  {
    ...BASE104,
    concurso: "PF", ano: 2025,
    id: "DH-256", assunto: "Teoria geral dos direitos humanos",
    subassunto: "Inerência e transnacionalidade",
    origem: "CEBRASPE PF 2025 (Delegado) — caderno: CEBRASPE (CESPE) - 2025 - Delegado de Polícia Federal — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Pelo atributo da inerência dos direitos humanos, esses direitos são extensíveis a todos os indivíduos, sem qualquer distinção, enquanto, pelo atributo da transnacionalidade, reconhecem-se os direitos humanos onde quer que o indivíduo esteja.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "inerência ... transnacionalidade",
    cognitivo: {
      motivo: "Associar corretamente as características dos direitos humanos.",
      palavraCritica: "transnacionalidade",
    },
    comentario: {
      resolucao: "CERTO. Na classificação usual (André de Carvalho Ramos), a INERÊNCIA significa que os direitos humanos pertencem a todos pelo simples fato de serem pessoas, sem distinção; a TRANSNACIONALIDADE, que eles são reconhecidos onde quer que o indivíduo esteja, independentemente de nacionalidade ou de território. Outras características: universalidade, indivisibilidade, interdependência, imprescritibilidade, inalienabilidade e vedação do retrocesso.",
      fundamento: "Doutrina (André de Carvalho Ramos).",
      macete: "Inerência: basta ser pessoa. Transnacionalidade: valem em qualquer lugar.",
      erroComum: "Trocar as definições entre si ou com a universalidade.",
      comoBancaPensa: "Definições corretas de características parecidas.",
    },
  },

  {
    ...BASE104,
    id: "DH-257", assunto: "Teoria geral dos direitos humanos",
    subassunto: "Relatividade dos direitos humanos",
    origem: "CESPE / CEBRASPE - 2024 - ANAC - Especialista em Regulação de Aviação Civil - Área 1 — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Os direitos humanos não são absolutos, podendo sofrer limitações no caso de confronto com outros direitos, na medida em que possam ser relativizados.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "não são absolutos",
    cognitivo: {
      motivo: "Lembrar que a colisão de direitos se resolve por ponderação.",
      palavraCritica: "não são absolutos",
    },
    comentario: {
      resolucao: "CERTO. Em regra, os direitos humanos são relativos: podem ser limitados quando colidem com outros direitos ou valores igualmente protegidos, com base na proporcionalidade. A doutrina aponta como possível exceção o direito de não ser torturado e o de não ser escravizado, tratados como absolutos em alguns tratados (a CADH, por exemplo, não admite sua suspensão — art. 27.2).",
      fundamento: "Doutrina; CADH, art. 27.2.",
      macete: "Regra: relativos. Discute-se: proibição de tortura e de escravidão.",
      erroComum: "Tratar todos os direitos humanos como absolutos.",
      comoBancaPensa: "Item verdadeiro.",
    },
  },

  {
    ...BASE104,
    id: "DH-258", assunto: "Teoria geral dos direitos humanos",
    subassunto: "Segunda dimensão — direitos sociais",
    origem: "CEBRASPE (CESPE) - 2025 - Analista de Desenvolvimento (BDMG)/Engenharia (e mais 3 concursos) — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "Os direitos humanos de segunda dimensão correspondem aos direitos sociais, que visam a oferecer os meios materiais imprescindíveis à efetivação dos direitos individuais.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "segunda dimensão",
    cognitivo: {
      motivo: "Associar as dimensões aos valores da Revolução Francesa.",
      palavraCritica: "direitos sociais",
    },
    comentario: {
      resolucao: "CERTO. Os direitos de segunda dimensão (ou geração) são os sociais, econômicos e culturais — igualdade material. Exigem prestações positivas do Estado (saúde, educação, trabalho, previdência) para dar condições reais de exercício das liberdades da primeira dimensão. Marcos: Constituição mexicana (1917) e de Weimar (1919).",
      fundamento: "Doutrina (Karel Vasak; Bonavides).",
      macete: "1ª liberdade, 2ª igualdade, 3ª fraternidade.",
      erroComum: "Trocar segunda e terceira dimensões.",
      comoBancaPensa: "Definição correta.",
    },
  },

  {
    ...BASE104,
    id: "DH-259", assunto: "Teoria geral dos direitos humanos",
    subassunto: "Terceira x quarta geração",
    origem: "CESPE / CEBRASPE - 2024 - TSE - Técnico Judiciário - Área: Administrativa - Especialidade: Agente da Polícia Judicial\" — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Os direitos de terceira geração resultam da globalização dos direitos humanos e correspondem aos direitos de participação democrática, pluralismo, bioética e limites à manipulação genética.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "terceira geração",
    cognitivo: {
      motivo: "Separar a terceira geração (fraternidade) da quarta (globalização, democracia, bioética).",
      palavraCritica: "terceira",
    },
    comentario: {
      resolucao: "ERRADO. Os direitos ligados à globalização dos direitos humanos — democracia direta, pluralismo, informação, bioética e limites à manipulação genética — são apontados por Paulo Bonavides e Norberto Bobbio como de QUARTA geração. Os de TERCEIRA geração são os de fraternidade ou solidariedade: meio ambiente equilibrado, paz, desenvolvimento, autodeterminação dos povos, patrimônio comum da humanidade.",
      fundamento: "Doutrina (Bonavides; Bobbio).",
      macete: "3ª: fraternidade (ambiente, paz). 4ª: globalização (democracia, genética).",
      erroComum: "Associar bioética à terceira geração.",
      comoBancaPensa: "Põe o conteúdo de uma geração sob o número de outra.",
    },
  },

  /* ===== CONVENÇÃO AMERICANA SOBRE DIREITOS HUMANOS ===== */

  {
    ...BASE104,
    id: "DH-260", assunto: "Convenção Americana sobre Direitos Humanos",
    subassunto: "Pena de morte — pedido de anistia, indulto ou comutação pendente",
    origem: "CESPE / CEBRASPE - 2025 - TRF - 6ª Região - Técnico Judiciário - Agente de Polícia Judicial — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "O Pacto de São José da Costa Rica veda a execução da pena de morte enquanto pendente a decisão da autoridade competente para a apreciação do seu pedido.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "enquanto pendente a decisão",
    cognitivo: {
      motivo: "Conhecer as restrições da CADH à pena de morte.",
      palavraCritica: "pendente",
    },
    comentario: {
      resolucao: "CERTO. O art. 4.6 da Convenção Americana assegura a todo condenado à morte o direito de solicitar anistia, indulto ou comutação da pena, e diz que não se pode executar a pena de morte enquanto o pedido estiver pendente de decisão ante a autoridade competente. A CADH também proíbe restabelecer a pena de morte nos Estados que a aboliram (4.3) e aplicá-la a menores de 18, maiores de 70 e gestantes (4.5).",
      fundamento: "CADH (Decreto 678/1992), art. 4º, itens 2 a 6.",
      macete: "Pedido de clemência pendente: não executa.",
      erroComum: "Achar que a CADH proíbe a pena de morte em qualquer caso.",
      comoBancaPensa: "Literalidade de dispositivo pouco lido.",
    },
  },

  {
    ...BASE104,
    id: "DH-261", assunto: "Convenção Americana sobre Direitos Humanos",
    subassunto: "Suspensão de garantias — direitos inderrogáveis",
    origem: "CESPE / CEBRASPE - 2025 - CAU-MG - Advogado — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "De acordo com o Pacto de São José da Costa Rica (Decreto n.º 678/1992), o Estado-Parte, em caso de perigo público, pode suspender, temporariamente, algumas garantias asseguradas pelo Pacto, inclusive o direito ao reconhecimento da personalidade jurídica.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "inclusive o direito ao reconhecimento da personalidade jurídica",
    cognitivo: {
      motivo: "Memorizar os direitos que não podem ser suspensos (art. 27.2).",
      palavraCritica: "inclusive",
    },
    comentario: {
      resolucao: "ERRADO. O art. 27.1 da CADH permite a suspensão de obrigações em caso de guerra, perigo público ou outra emergência que ameace a independência ou a segurança do Estado, pelo tempo estritamente limitado às exigências da situação. Mas o art. 27.2 proíbe suspender, entre outros, o direito ao RECONHECIMENTO DA PERSONALIDADE JURÍDICA (art. 3), à vida (4), à integridade pessoal (5), a proibição da escravidão (6), a legalidade e retroatividade (9), a liberdade de consciência e religião (12), a proteção da família (17), o nome (18), os direitos da criança (19), a nacionalidade (20), os direitos políticos (23) e as garantias judiciais indispensáveis.",
      fundamento: "CADH, art. 27.",
      macete: "Nem em guerra se suspendem: personalidade, vida, integridade, escravidão, legalidade, religião, família, nome, criança, nacionalidade, direitos políticos.",
      erroComum: "Lembrar da possibilidade de suspensão e esquecer a lista de exceções.",
      comoBancaPensa: "Começa com regra verdadeira e inclui um direito da lista proibida.",
    },
  },

  {
    ...BASE104,
    concurso: "PCAL", ano: 2021,
    id: "DH-262", assunto: "Convenção Americana sobre Direitos Humanos",
    subassunto: "Direitos políticos na Convenção Americana",
    origem: "CEBRASPE PC-AL 2021 (Escrivão, prova anulada) — caderno: CESPE / CEBRASPE - 2021 - PC-AL - Escrivão de Polícia - Prova Anulada — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "À luz da Convenção Americana dos Direitos Humanos, todos os cidadãos devem possuir o direito de participar da direção dos assuntos públicos.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "participar da direção dos assuntos públicos",
    cognitivo: {
      motivo: "Conhecer o art. 23 da CADH.",
      palavraCritica: "todos os cidadãos",
    },
    comentario: {
      resolucao: "CERTO. O art. 23.1 da CADH diz que todos os cidadãos devem gozar dos direitos e oportunidades de participar na direção dos assuntos públicos, diretamente ou por meio de representantes livremente eleitos; de votar e ser eleitos em eleições periódicas autênticas; e de ter acesso, em condições gerais de igualdade, às funções públicas de seu país.",
      fundamento: "CADH, art. 23.1.",
      macete: "Art. 23: participar, votar, ser votado, acessar funções públicas.",
      erroComum: "Achar que a CADH não trata de direitos políticos.",
      comoBancaPensa: "Literalidade.",
    },
  },

  {
    ...BASE104,
    concurso: "PCAL", ano: 2023,
    id: "DH-263", assunto: "Convenção Americana sobre Direitos Humanos",
    subassunto: "Princípio da legalidade e da retroatividade — art. 9º",
    origem: "CEBRASPE PC-AL 2023 (Delegado) — caderno: CESPE / CEBRASPE - 2023 - PC-AL - Delegado de Polícia Civil — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 55,
    enunciado: "Com base na Convenção Americana sobre Direitos Humanos, se, logo após o cometimento de uma ação, for editada lei que a tipifique como crime, o agente ficará sujeito à condenação pela ação praticada caso a pena prevista seja a de multa.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "caso a pena prevista seja a de multa",
    cognitivo: {
      motivo: "Aplicar o art. 9º da CADH, que não faz distinção pela espécie de pena.",
      palavraCritica: "multa",
    },
    comentario: {
      resolucao: "ERRADO. O art. 9º da Convenção Americana diz que ninguém pode ser condenado por ações ou omissões que, no momento em que forem cometidas, não sejam delituosas de acordo com o direito aplicável, nem se pode impor pena mais grave que a aplicável no momento do delito. A espécie de pena (multa ou prisão) é irrelevante. Se lei posterior estabelecer pena mais leve, o agente se beneficia. É o mesmo conteúdo do art. 5º, XXXIX e XL, da CF.",
      fundamento: "CADH, art. 9º; CF, art. 5º, XXXIX e XL.",
      macete: "Fato que não era crime não vira crime para trás — nem com pena de multa.",
      erroComum: "Achar que penas leves escapam da irretroatividade.",
      comoBancaPensa: "Cria uma exceção pela espécie de pena.",
    },
  },

  {
    ...BASE104,
    id: "DH-264", assunto: "Convenção Americana sobre Direitos Humanos",
    subassunto: "Comissão x Corte Interamericana",
    origem: "CESPE / CEBRASPE - 2026 - Câmara dos Deputados - Técnico Legislativo - Policial Legislativo Federal — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 55,
    enunciado: "Com base na Convenção Americana sobre Direitos Humanos, o Sistema Interamericano de Direitos Humanos permite a apreciação, pela Corte Interamericana de Direitos Humanos, de demandas que envolvam direitos humanos que, uma vez ali acolhidas, serão objeto de julgamento pela Comissão Interamericana de Direitos Humanos.",
    gabarito: "E",
    pegadinha: "troca-sujeito",
    palavraChave: "julgamento pela Comissão",
    cognitivo: {
      motivo: "Saber a ordem: a Comissão recebe e examina; a Corte julga.",
      palavraCritica: "Corte ... Comissão",
    },
    comentario: {
      resolucao: "ERRADO. A ordem é a inversa. As petições são apresentadas à COMISSÃO Interamericana (arts. 44 a 51 da CADH), que examina a admissibilidade, investiga e tenta solução amistosa; não havendo cumprimento das recomendações, a Comissão (ou um Estado-parte) pode submeter o caso à CORTE Interamericana, que tem a função jurisdicional e profere sentença (arts. 61 a 63). Indivíduos não acessam a Corte diretamente.",
      fundamento: "CADH, arts. 44 a 51 e 61 a 63.",
      macete: "Comissão: porta de entrada. Corte: julgamento.",
      erroComum: "Inverter os papéis dos dois órgãos.",
      comoBancaPensa: "Troca os sujeitos.",
    },
  },

  {
    ...BASE104,
    id: "DH-265", assunto: "Convenção Americana sobre Direitos Humanos",
    subassunto: "Normas de interpretação — art. 29, 'b'",
    origem: "CEBRASPE (CESPE) - 2026 - Técnico Legislativo (CAM DEP) - Policial Legislativo Federal — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Com base na Convenção Americana sobre Direitos Humanos, o Pacto de São José da Costa Rica proíbe interpretações que limitem o gozo e exercício de qualquer direito ou liberdade que possam ser reconhecidos de acordo com as leis de qualquer dos Estados-partes.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "de acordo com as leis de qualquer dos Estados-partes",
    cognitivo: {
      motivo: "Reconhecer a regra da norma mais favorável (art. 29).",
      palavraCritica: "proíbe interpretações",
    },
    comentario: {
      resolucao: "CERTO. O art. 29, 'b', da CADH diz que nenhuma disposição da Convenção pode ser interpretada no sentido de limitar o gozo e exercício de qualquer direito ou liberdade que possam ser reconhecidos de acordo com as leis de qualquer dos Estados-partes ou de acordo com outra convenção em que seja parte um dos referidos Estados. É a expressão do princípio pro persona: prevalece a norma mais protetiva.",
      fundamento: "CADH, art. 29.",
      macete: "Pro persona: vale a norma que mais protege.",
      erroComum: "Achar que o tratado limita direitos mais amplos da lei interna.",
      comoBancaPensa: "Literalidade.",
    },
  },

  {
    ...BASE104,
    id: "DH-266", assunto: "Convenção Americana sobre Direitos Humanos",
    subassunto: "Publicidade do processo penal — art. 8.5",
    origem: "CESPE / CEBRASPE - 2024 - TSE - Técnico Judiciário - Área: Administrativa - Especialidade: Agente da Polícia Judicial — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "A respeito do Pacto de São José da Costa Rica (Convenção Americana sobre Direitos Humanos), em atenção às garantias à intimidade e à vida privada, o processo penal deve ser prioritariamente sigiloso.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "prioritariamente sigiloso",
    cognitivo: {
      motivo: "Lembrar que a CADH faz do processo penal público a regra.",
      palavraCritica: "sigiloso",
    },
    comentario: {
      resolucao: "ERRADO. O art. 8.5 da CADH diz que o processo penal deve ser PÚBLICO, salvo no que for necessário para preservar os interesses da justiça. A publicidade é garantia do acusado contra julgamentos secretos; o sigilo é exceção justificada.",
      fundamento: "CADH, art. 8.5; CF, art. 5º, LX.",
      macete: "Processo penal: público, salvo exceção.",
      erroComum: "Inverter regra e exceção.",
      comoBancaPensa: "Usa valores legítimos (intimidade) para inverter a regra.",
    },
  },

  {
    ...BASE104,
    id: "DH-267", assunto: "Convenção Americana sobre Direitos Humanos",
    subassunto: "Suspensão de garantias — tempo estritamente limitado",
    origem: "CEBRASPE (CESPE) - 2017 - Soldado Policial Militar (PM AL)/Combatente — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 70,
    enunciado: "Com as atrocidades cometidas durante a Segunda Guerra Mundial, emergiu a noção de que os direitos humanos deveriam servir como paradigma para orientar a ordem internacional, reforçando-se a ideia de que a proteção dos direitos humanos deveria ser global — e não reduzida ao domínio local dos Estados —, por se tratar de questão de legítimo interesse mundial. Nesse contexto, surgiu a Organização das Nações Unidas (ONU) e foi adotada a Declaração Universal dos Direitos Humanos, bem como foi aprovada a Convenção Americana sobre Direitos Humanos, no âmbito da Organização dos Estados Americanos (OEA). Tendo como referência esse contexto, em caso de guerra, as garantias asseguradas pela Convenção Americana sobre Direitos Humanos podem ser suspensas por tempo ilimitado, mesmo após o fim dos conflitos.",
    gabarito: "E",
    pegadinha: "literalidade",
    palavraChave: "por tempo ilimitado",
    cognitivo: {
      motivo: "Fixar o limite temporal do art. 27.1.",
      palavraCritica: "ilimitado",
    },
    comentario: {
      resolucao: "ERRADO. O art. 27.1 da CADH permite suspender obrigações em caso de guerra, perigo público ou emergência, mas apenas NA MEDIDA E PELO TEMPO ESTRITAMENTE LIMITADOS ÀS EXIGÊNCIAS DA SITUAÇÃO, sem discriminação e sem violar outras obrigações internacionais. O Estado deve comunicar a suspensão aos demais Estados-partes pelo Secretário-Geral da OEA, indicando a data em que ela termina (27.3). Alguns direitos nunca podem ser suspensos (27.2).",
      fundamento: "CADH, art. 27.",
      macete: "Suspensão: limitada no tempo e na medida, e comunicada à OEA.",
      erroComum: "Achar que a guerra autoriza suspensão indefinida.",
      comoBancaPensa: "Contexto histórico longo para um ponto de literalidade.",
    },
  },

  {
    ...BASE104,
    id: "DH-268", assunto: "Convenção Americana sobre Direitos Humanos",
    subassunto: "Proibição de interpretação supressiva — art. 29, 'a'",
    origem: "CESPE / CEBRASPE - 2024 - TSE - Técnico Judiciário - Área: Administrativa - Especialidade: Agente da Polícia Judicial — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 60,
    enunciado: "A respeito do Pacto de São José da Costa Rica (Convenção Americana sobre Direitos Humanos), considere que determinado Estado-parte da Convenção esteja passando por uma grave crise humanitária. Nessa situação, esse Estado-parte está autorizado a interpretar as normas veiculadas na Convenção no sentido de suprimir o gozo e o exercício dos direitos e liberdades reconhecidos pelo Pacto.",
    gabarito: "E",
    pegadinha: "literalidade",
    palavraChave: "suprimir o gozo e o exercício",
    cognitivo: {
      motivo: "Aplicar o art. 29, 'a'.",
      palavraCritica: "suprimir",
    },
    comentario: {
      resolucao: "ERRADO. O art. 29, 'a', da CADH proíbe interpretar qualquer disposição da Convenção no sentido de permitir a qualquer dos Estados-partes, grupo ou pessoa suprimir o gozo e exercício dos direitos e liberdades nela reconhecidos ou limitá-los em maior medida do que a nela prevista. Crises autorizam, no máximo, a suspensão temporária e limitada do art. 27, nunca a supressão por interpretação.",
      fundamento: "CADH, arts. 27 e 29, 'a'.",
      macete: "Crise permite suspender pouco e por pouco tempo; suprimir, jamais.",
      erroComum: "Confundir suspensão (art. 27) com supressão.",
      comoBancaPensa: "Usa a crise para sugerir uma permissão que a Convenção veda.",
    },
  },

  {
    ...BASE104,
    id: "DH-269", assunto: "Convenção Americana sobre Direitos Humanos",
    subassunto: "Petições individuais — dirigidas à Comissão",
    origem: "CESPE / CEBRASPE - 2024 - TSE - Técnico Judiciário - Área: Administrativa - Especialidade: Agente da Polícia Judicial — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "A respeito do Pacto de São José da Costa Rica (Convenção Americana sobre Direitos Humanos), qualquer entidade não governamental pode formalizar, perante a Corte Interamericana de Direitos Humanos, denúncia veiculando violação ao Pacto de São José da Costa Rica, desde que tal entidade seja legalmente reconhecida por todos os Estados-membros da organização.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "perante a Corte ... por todos os Estados-membros",
    cognitivo: {
      motivo: "Lembrar o art. 44 da CADH: quem recebe as petições e qual o requisito da ONG.",
      palavraCritica: "perante a Corte",
    },
    comentario: {
      resolucao: "ERRADO, por dois motivos. Primeiro, as denúncias ou queixas são apresentadas à COMISSÃO Interamericana, e não à Corte. Segundo, o art. 44 da CADH legitima qualquer pessoa ou grupo de pessoas, ou entidade não governamental legalmente reconhecida EM UM OU MAIS Estados-membros da OEA — não em todos.",
      fundamento: "CADH, art. 44.",
      macete: "Petição individual: à Comissão; ONG reconhecida em ao menos um Estado.",
      erroComum: "Achar que a vítima ou a ONG vai direto à Corte.",
      comoBancaPensa: "Dois erros: o órgão e a extensão do requisito.",
    },
  },

  /* ===== DIREITOS HUMANOS E RESPONSABILIDADE DO ESTADO ===== */

  {
    ...BASE104,
    id: "DH-270", assunto: "Direitos humanos e responsabilidade do Estado",
    subassunto: "Responsabilidade internacional por ato do Judiciário",
    origem: "CESPE / CEBRASPE - 2025 - CAU-MG - Advogado — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "A responsabilização internacional por violação de direitos humanos pela conduta do Poder Judiciário pode ocorrer em duas hipóteses: quando a decisão judicial é tardia ou inexistente ou quando a decisão judicial é tida como violadora de direito protegido.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "tardia ou inexistente",
    cognitivo: {
      motivo: "Saber que o Estado responde internacionalmente por atos de qualquer Poder.",
      palavraCritica: "duas hipóteses",
    },
    comentario: {
      resolucao: "CERTO. No plano internacional, o Estado responde como um todo, por atos do Executivo, do Legislativo e do Judiciário. A doutrina (André de Carvalho Ramos) aponta duas hipóteses de responsabilidade por ato judicial: a demora ou a ausência de decisão (denegação de justiça, violação da duração razoável — CADH, art. 8.1) e a decisão que, em seu conteúdo, viola direito protegido. O Brasil foi condenado pela Corte Interamericana, por exemplo, no caso Ximenes Lopes, também pela demora judicial.",
      fundamento: "CADH, arts. 1.1, 8.1 e 25; doutrina (André de Carvalho Ramos).",
      macete: "Judiciário também gera responsabilidade internacional: por demora ou por conteúdo.",
      erroComum: "Achar que a independência judicial afasta a responsabilidade do Estado.",
      comoBancaPensa: "Item doutrinário verdadeiro.",
    },
  },

  {
    ...BASE104,
    id: "DH-271", assunto: "Direitos humanos e responsabilidade do Estado",
    subassunto: "Direito interno não justifica descumprir tratado",
    origem: "CEBRASPE (CESPE) - 2018 - Oficial de Inteligência (ABIN) — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 55,
    enunciado: "Considerando que a responsabilidade internacional do Estado pressupõe que o Estado seja sujeito de direitos e obrigações, apto a responder pelos efeitos dos comportamentos que adota, tendo em vista a soberania e a supremacia constitucional, um Estado pode se eximir de eventual responsabilidade internacional perante outro Estado sob o argumento de defesa de suas normas constitucionais.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "sob o argumento de defesa de suas normas constitucionais",
    cognitivo: {
      motivo: "Aplicar o art. 27 da Convenção de Viena sobre o Direito dos Tratados.",
      palavraCritica: "eximir",
    },
    comentario: {
      resolucao: "ERRADO. Pelo art. 27 da Convenção de Viena sobre o Direito dos Tratados (Decreto 7.030/2009), uma parte não pode invocar as disposições de seu direito interno — inclusive constitucional — para justificar o inadimplemento de um tratado. No plano internacional, a norma interna é tratada como fato, e a supremacia constitucional não exime o Estado de responsabilidade.",
      fundamento: "Convenção de Viena sobre o Direito dos Tratados, art. 27 (Decreto 7.030/2009).",
      macete: "Lá fora, a Constituição não é desculpa.",
      erroComum: "Transportar a supremacia constitucional interna para o plano internacional.",
      comoBancaPensa: "Usa um valor real (soberania) para justificar o que o direito internacional proíbe.",
    },
  },

  {
    ...BASE104,
    id: "DH-272", assunto: "Direitos humanos e responsabilidade do Estado",
    subassunto: "Responsabilidade do Estado — não em qualquer caso",
    origem: "CESPE / CEBRASPE - 2021 - CBM-AL - Soldado do Corpo de Bombeiros — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "A respeito de ética, cidadania e direitos humanos, no Brasil, em qualquer caso de violação de normas internacionais de direitos humanos, o Estado é responsável por eventual indenização.",
    gabarito: "E",
    pegadinha: "generalizacao",
    palavraChave: "em qualquer caso",
    cognitivo: {
      motivo: "Lembrar que a responsabilidade exige imputação ao Estado e nexo.",
      palavraCritica: "em qualquer caso",
    },
    comentario: {
      resolucao: "ERRADO, segundo o gabarito do material. A responsabilidade internacional do Estado exige que a violação lhe seja imputável — por ação ou omissão de seus agentes, ou por falha no dever de prevenir, investigar e punir violações cometidas por particulares (dever de devida diligência). Não há responsabilidade automática em qualquer caso, nem dever de indenizar sem conduta imputável e nexo causal.",
      fundamento: "CADH, arts. 1.1 e 63; CF, art. 37, § 6º.",
      macete: "Responsabilidade do Estado: precisa de conduta imputável e nexo.",
      erroComum: "Tratar o Estado como garantidor universal.",
      comoBancaPensa: "Generalização com 'em qualquer caso'.",
    },
  },

  {
    ...BASE104,
    id: "DH-273", assunto: "Direitos humanos e responsabilidade do Estado",
    subassunto: "Imunidade de jurisdição e violação de direitos humanos — Tema 944",
    origem: "CESPE / CEBRASPE - 2025 - CAU-MG - Advogado — QAP DSO (Direitos), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 60,
    enunciado: "Os atos ilícitos praticados por Estados estrangeiros em violação a direitos humanos, dentro do território nacional, em alguns casos, terão imunidade de jurisdição.",
    gabarito: "E",
    pegadinha: "juris-mais-lei",
    palavraChave: "terão imunidade de jurisdição",
    cognitivo: {
      motivo: "Conhecer a tese do STF no caso Changri-lá.",
      palavraCritica: "imunidade",
    },
    comentario: {
      resolucao: "ERRADO. No ARE 954.858 (Tema 944, caso do barco Changri-lá, afundado por submarino alemão em 1943), o STF fixou: os atos ilícitos praticados por Estados estrangeiros em violação a direitos humanos, dentro do território nacional, NÃO GOZAM DE IMUNIDADE DE JURISDIÇÃO. A tese afasta a imunidade, mesmo para atos de império, nesses casos.",
      fundamento: "STF, ARE 954.858 (Tema 944).",
      macete: "Estado estrangeiro que viola DH no Brasil: responde aqui.",
      erroComum: "Aplicar a imunidade de atos de império a violações de direitos humanos.",
      comoBancaPensa: "Contraria a tese com uma ressalva ('em alguns casos') que parece prudente.",
    },
  },

  /* ===== PNDH-3 ===== */

  {
    ...BASE104,
    id: "DH-274", assunto: "PNDH-3",
    subassunto: "PNDH-3 — não vincula os demais entes",
    origem: "CEBRASPE (CESPE) - 2021 - Agente Penitenciário (SERIS AL) — QAP DSO (Direitos), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "No que diz respeito aos direitos humanos e à participação social, o Programa Nacional de Direitos Humanos 3 (PNDH-3) estabelece diretrizes, objetivos estratégicos e ações programáticas de observância obrigatória, vinculando os estados, o Distrito Federal, os municípios e os órgãos dos Poderes Legislativo e Judiciário e do Ministério Público.",
    gabarito: "E",
    pegadinha: "generalizacao",
    palavraChave: "vinculando os estados",
    cognitivo: {
      motivo: "Lembrar que o PNDH-3 é decreto federal e depende de adesão dos demais.",
      palavraCritica: "observância obrigatória",
    },
    comentario: {
      resolucao: "ERRADO. O PNDH-3 foi aprovado pelo Decreto 7.037/2009, ato do Poder Executivo federal. Vincula a administração pública federal; os Estados, o DF, os Municípios e os órgãos dos demais Poderes e do MP são CONVIDADOS A ADERIR (art. 3º), por respeito à autonomia federativa e à separação dos Poderes.",
      fundamento: "Decreto 7.037/2009, arts. 1º a 3º.",
      macete: "PNDH-3: vincula a União; os outros aderem se quiserem.",
      erroComum: "Dar a decreto federal força sobre entes autônomos.",
      comoBancaPensa: "Generaliza a vinculação do programa.",
    },
  },

  {
    ...BASE104,
    id: "DH-275", assunto: "PNDH-3",
    subassunto: "Eixo Segurança Pública, Acesso à Justiça e Combate à Violência — violência institucional",
    origem: "CEBRASPE (CESPE) - 2022 - Analista de Apoio à Assistência Judiciária (DP DF) - Serviço Social — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 55,
    enunciado: "Um dos eixos orientadores do Programa Nacional de Direitos Humanos é o de segurança pública, acesso à justiça e combate à violência. Uma das diretrizes do referido eixo orientador é o combate à violência institucional, com ênfase na erradicação da tortura e na redução da letalidade policial e carcerária.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "redução da letalidade policial e carcerária",
    cognitivo: {
      motivo: "Conhecer as diretrizes do eixo IV do PNDH-3.",
      palavraCritica: "violência institucional",
    },
    comentario: {
      resolucao: "CERTO. O PNDH-3 (Decreto 7.037/2009) se organiza em seis eixos orientadores, e o quarto é o da segurança pública. A diretriz 14 desse eixo coloca o enfrentamento dos abusos cometidos pelo próprio Estado — tortura e mortes em ações policiais e no cárcere — como prioridade, com ações como protocolos de uso da força, perícia independente e ouvidorias. A ideia é que a segurança pública respeitosa de direitos humanos começa por controlar a violência dos agentes estatais.",
      fundamento: "Decreto 7.037/2009, Anexo, Eixo IV, Diretriz 14.",
      macete: "Eixo IV: segurança, justiça e combate à violência — tortura e letalidade.",
      erroComum: "Associar a diretriz a outro eixo.",
      comoBancaPensa: "Literalidade de diretriz.",
    },
  },

  {
    ...BASE104,
    id: "DH-276", assunto: "PNDH-3",
    subassunto: "Eixo IV — vítimas e pessoas ameaçadas",
    origem: "CEBRASPE (CESPE) - 2022 - Analista de Apoio à Assistência Judiciária (DP DF) - Serviço Social — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "Um dos eixos orientadores do Programa Nacional de Direitos Humanos é o de segurança pública, acesso à justiça e combate à violência. A garantia dos direitos das vítimas de crimes e de proteção das pessoas ameaçadas é uma das diretrizes do referido eixo orientador.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "proteção das pessoas ameaçadas",
    cognitivo: {
      motivo: "Conhecer as diretrizes do eixo IV.",
      palavraCritica: "vítimas",
    },
    comentario: {
      resolucao: "CERTO. Entre as diretrizes do Eixo IV do PNDH-3 está a de número 15: garantia dos direitos das vítimas de crimes e de proteção das pessoas ameaçadas. O eixo inclui ainda a democratização e modernização do sistema de segurança pública, o combate à violência institucional, a modernização da execução penal e a promoção do acesso à justiça.",
      fundamento: "Decreto 7.037/2009, Anexo, Eixo IV, Diretriz 15.",
      macete: "Eixo IV também cuida das vítimas e das testemunhas ameaçadas.",
      erroComum: "Achar que o eixo trata só dos direitos dos presos.",
      comoBancaPensa: "Literalidade.",
    },
  },

  {
    ...BASE104,
    id: "DH-277", assunto: "PNDH-3",
    subassunto: "Interação entre Estado e sociedade civil",
    origem: "CEBRASPE (CESPE) - 2022 - Assistente Social (FUB) — QAP DSO (Direitos), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "Segundo as diretrizes e os objetivos para o desenvolvimento de ações em direitos humanos, para a implementação do PNDH é necessária interação entre Estado e sociedade civil.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "interação entre Estado e sociedade civil",
    cognitivo: {
      motivo: "Reconhecer o primeiro eixo do PNDH-3.",
      palavraCritica: "sociedade civil",
    },
    comentario: {
      resolucao: "CERTO. O Eixo Orientador I do PNDH-3 é justamente 'Interação democrática entre Estado e sociedade civil', com diretrizes de participação social na formulação, monitoramento e avaliação das políticas de direitos humanos. O programa foi construído a partir de conferências com participação social e prevê comitê de acompanhamento com representantes da sociedade.",
      fundamento: "Decreto 7.037/2009, art. 2º, I, e Anexo, Eixo I.",
      macete: "Eixo I: Estado e sociedade civil juntos.",
      erroComum: "Ver o PNDH como política exclusivamente estatal.",
      comoBancaPensa: "Item verdadeiro.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE104);
