/* =====================================================================
   QUESTLAB — Lote 111: LEGISLAÇÃO ESPECIAL — CRIMES FALIMENTARES, QAPs DSO
   (módulo 07 — Lei 11.101/2005)

   ORIGEM E MÉTODO: os do lote 100. Comentários escritos do zero contra a
   Lei 11.101/2005 e, quando o item é antigo, o Decreto-Lei 7.661/1945.

   CONTAGEM: 16 itens CEBRASPE; 3 já estavam no banco com o mesmo texto
   (LE-353, LE-355 e LE-356, do caderno de Direitos) e não foram repetidos.

   OBSERVAÇÕES (o gabarito do QAP foi mantido em todos)
     - Vários itens são de provas anteriores à Lei 11.101/2005 ou do ano de
       sua entrada em vigor; o comentário explica o ponto à luz da lei atual
       e indica quando o gabarito dependia da lei revogada.
   ===================================================================== */

const BASE111 = {
  concurso: "PCAL", cargo: ["Escrivão", "Agente"], ano: 2026,
  tipo: "CE", probReaparecer: 0.8,
  disciplina: "Legislação Especial",
};

const QUESTOES_PCAL_LOTE111 = [

  /* ===== CRIMES FALIMENTARES ===== */

  {
    ...BASE111,
    concurso: "PCDF", ano: 2026,
    id: "LE-404", assunto: "Crimes Falimentares",
    subassunto: "Denunciado pode exercer empresa",
    origem: "CEBRASPE PC-DF 2026 (cargo não informado) — caderno: CEBRASPE - PC DF/2026 — QAP DSO (Legislação — Crimes Falimentares), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Com base nos institutos jurídicos que regem a atividade do empresário e das sociedades empresárias, os denunciados por crime falimentar podem exercer atividade empresarial e atuar como administradores de sociedade empresária.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "denunciados",
    cognitivo: {
      motivo: "Separar denúncia de condenação.",
      palavraCritica: "denunciados",
    },
    comentario: {
      resolucao: "CERTO. O impedimento recai sobre os CONDENADOS por crime falimentar. O Código Civil (art. 1.011, § 1º) veda a administração de sociedade aos condenados por crime falimentar, enquanto perdurarem os efeitos da condenação. A Lei 11.101 (art. 181, I e II) prevê a inabilitação para a empresa e para cargos de administração como efeito da condenação, declarado na sentença. A simples denúncia, pela presunção de inocência, não gera essa restrição.",
      fundamento: "Lei nº 11.101/2005, art. 181; CC, art. 1.011, § 1º; CF, art. 5º, LVII.",
      macete: "Impedimento: condenado, não denunciado.",
      erroComum: "Antecipar à denúncia efeito que é da condenação.",
      comoBancaPensa: "Troca a fase processual.",
    },
  },

  {
    ...BASE111,
    id: "LE-405", assunto: "Crimes Falimentares",
    subassunto: "Omissão de documentos contábeis — crime próprio",
    origem: "CEBRASPE - CAM DEP/2014 — QAP DSO (Legislação — Crimes Falimentares), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Acerca da legislação falimentar em vigor, apenas o devedor falido pode ser sujeito ativo do crime de omissão de elaboração, escrituração ou autenticação do livro diário e do livro de duplicatas, se optar por emiti-las no exercício de sua empresa.",
    gabarito: "C",
    pegadinha: "restricao-indevida",
    palavraChave: "apenas o devedor falido",
    cognitivo: {
      motivo: "Reconhecer o crime do art. 178 como próprio do devedor.",
      palavraCritica: "apenas",
    },
    comentario: {
      resolucao: "CERTO, segundo o gabarito da banca e do material. O art. 178 pune quem deixa de elaborar, escriturar ou autenticar, antes ou depois da sentença, os documentos de escrituração contábil obrigatórios, e é crime próprio do devedor. Observação: o art. 179 equipara ao devedor os sócios, diretores, gerentes, administradores e conselheiros, de fato ou de direito, e o administrador judicial, na medida de sua culpabilidade. Além disso, o tipo alcança também a recuperação judicial e extrajudicial, não só a falência. A banca considerou o núcleo do item, que é o crime próprio do devedor.",
      fundamento: "Lei nº 11.101/2005, arts. 178 e 179.",
      macete: "Art. 178: crime próprio do devedor (com a equiparação do art. 179).",
      erroComum: "Ignorar a equiparação do art. 179 em itens mais recentes.",
      comoBancaPensa: "Cobra a natureza de crime próprio.",
    },
  },

  {
    ...BASE111,
    id: "LE-406", assunto: "Crimes Falimentares",
    subassunto: "ME e EPP — substituição da pena",
    origem: "CEBRASPE - EMBRAPA/2005 — QAP DSO (Legislação — Crimes Falimentares), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Considere que a pessoa jurídica Luna Comércio de Gêneros Alimentícios Ltda. – ME, uma microempresa, após a prolação da sentença que decretou sua falência, tenha praticado ato fraudulento em prejuízo de seus credores. Nessa situação, por se tratar de microempresa e não sendo constatada prática habitual de condutas fraudulentas por parte da pessoa jurídica falida, poderá o juízo da falência substituir a pena aplicável ao caso por prestação de serviços à comunidade.",
    gabarito: "C",
    pegadinha: "juris-mais-lei",
    palavraChave: "prestação de serviços à comunidade",
    cognitivo: {
      motivo: "Conhecer o § 4º do art. 168.",
      palavraCritica: "poderá",
    },
    comentario: {
      resolucao: "CERTO, segundo o gabarito da banca. O art. 168, § 4º, permite, na falência de microempresa ou empresa de pequeno porte sem prática habitual de condutas fraudulentas, reduzir a pena de 1/3 a 2/3 ou substituí-la por restritivas de direitos, perda de bens e valores ou prestação de serviços à comunidade. Observações: quem responde penalmente é a pessoa física (devedor, sócios, administradores, art. 179), não a pessoa jurídica. E a ação penal corre no juízo criminal (art. 183), não no juízo da falência. O item foi julgado pelo ponto do § 4º.",
      fundamento: "Lei nº 11.101/2005, arts. 168, § 4º, 179 e 183.",
      macete: "ME/EPP sem habitualidade: pena reduzida ou substituída.",
      erroComum: "Desconhecer o benefício do § 4º.",
      comoBancaPensa: "Cobra a regra especial para pequenos devedores.",
    },
  },

  {
    ...BASE111,
    id: "LE-407", assunto: "Crimes Falimentares",
    subassunto: "Declarações com títulos falsos — sem forma culposa",
    origem: "CEBRASPE - SEFAZ MT — QAP DSO (Legislação — Crimes Falimentares), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Admite a modalidade culposa a conduta do falido que apresenta, na falência ou na concordata preventiva, declarações acompanhadas de títulos falsos ou simulados.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "modalidade culposa",
    cognitivo: {
      motivo: "Lembrar que os crimes falimentares são dolosos.",
      palavraCritica: "culposa",
    },
    comentario: {
      resolucao: "ERRADO. O item é da lei anterior (concordata), mas a resposta não muda: apresentar declarações com títulos falsos ou simulados é conduta dolosa por natureza, e a lei falimentar não prevê modalidade culposa. Na Lei 11.101/2005, a conduta corresponde à habilitação ilegal de crédito (art. 175), também só dolosa. Sem previsão expressa, não há crime culposo (CP, art. 18, parágrafo único).",
      fundamento: "Lei nº 11.101/2005, art. 175; CP, art. 18, parágrafo único; Decreto-Lei nº 7.661/1945 (lei anterior).",
      macete: "Crime falimentar: só doloso.",
      erroComum: "Presumir forma culposa.",
      comoBancaPensa: "Atribui modalidade culposa sem previsão.",
    },
  },

  {
    ...BASE111,
    id: "LE-408", assunto: "Crimes Falimentares",
    subassunto: "Crimes antefalimentares",
    origem: "CEBRASPE - SEFAZ MT — QAP DSO (Legislação — Crimes Falimentares), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "Segundo a doutrina, são considerados crimes antefalimentares aqueles cujo tipo penal descreve comportamento anterior à decretação da falência e somente por força desta é considerado crime.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "antefalimentares",
    cognitivo: {
      motivo: "Separar antefalimentares e pós-falimentares.",
      palavraCritica: "somente por força desta",
    },
    comentario: {
      resolucao: "CERTO. A doutrina classifica os crimes falimentares em antefalimentares (conduta anterior à sentença de quebra, que só se torna punível com a decretação) e pós-falimentares (conduta posterior). A Lei 11.101 mantém a distinção ao usar 'antes ou depois da sentença' em vários tipos (ex.: arts. 168 e 178) e ao tratar a sentença como condição objetiva de punibilidade (art. 180).",
      fundamento: "Lei nº 11.101/2005, arts. 168, 178 e 180; doutrina.",
      macete: "Antefalimentar: antes da quebra, punível por causa dela.",
      erroComum: "Inverter as categorias.",
      comoBancaPensa: "Reproduz conceito doutrinário.",
    },
  },

  {
    ...BASE111,
    id: "LE-409", assunto: "Crimes Falimentares",
    subassunto: "Dolo eventual",
    origem: "CEBRASPE - CAM DEP/Consultor Legislativo — QAP DSO (Legislação — Crimes Falimentares), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 55,
    enunciado: "O crime falimentar pode ser punido a título de dolo eventual, quando o agente assumiu o risco de resultado lesivo.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "dolo eventual",
    cognitivo: {
      motivo: "Lembrar que dolo inclui o eventual (CP, art. 18, I).",
      palavraCritica: "dolo eventual",
    },
    comentario: {
      resolucao: "CERTO, segundo o gabarito da banca. Os crimes falimentares são dolosos, e o dolo, pelo CP (art. 18, I), abrange o direto e o eventual. Ressalva doutrinária: nos tipos com especial fim de agir, como a fraude a credores (art. 168, 'com o fim de obter ou assegurar vantagem indevida'), a doutrina tende a exigir dolo direto.",
      fundamento: "CP, art. 18, I; Lei nº 11.101/2005, art. 168.",
      macete: "Doloso inclui eventual, salvo especial fim de agir.",
      erroComum: "Excluir o dolo eventual de todo crime falimentar.",
      comoBancaPensa: "Cobra a regra geral do CP aplicada à lei especial.",
    },
  },

  {
    ...BASE111,
    id: "LE-410", assunto: "Crimes Falimentares",
    subassunto: "Competência — juízo criminal",
    origem: "CEBRASPE - CAM DEP/Consultor Legislativo — QAP DSO (Legislação — Crimes Falimentares), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Com a declaração da quebra, o ilícito penal, previsto na lei falimentar, é atraído para a competência do juízo falimentar.",
    gabarito: "E",
    pegadinha: "troca-sujeito",
    palavraChave: "juízo falimentar",
    cognitivo: {
      motivo: "Lembrar o art. 183.",
      palavraCritica: "juízo falimentar",
    },
    comentario: {
      resolucao: "ERRADO. O art. 183 atribui ao juiz CRIMINAL da jurisdição onde foi decretada a falência, concedida a recuperação judicial ou homologado o plano de recuperação extrajudicial a competência para conhecer da ação penal. O juízo universal da falência não atrai o processo criminal.",
      fundamento: "Lei nº 11.101/2005, art. 183.",
      macete: "Crime falimentar: juiz criminal.",
      erroComum: "Estender a universalidade do juízo falimentar ao crime.",
      comoBancaPensa: "Troca o juízo competente.",
    },
  },

  {
    ...BASE111,
    id: "LE-411", assunto: "Crimes Falimentares",
    subassunto: "Prescrição — regras do CP",
    origem: "CEBRASPE - CAM DEP/Consultor Legislativo — QAP DSO (Legislação — Crimes Falimentares), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 60,
    enunciado: "A prescrição extintiva da punibilidade de crime falimentar ocorre em dois anos, ou em cinco anos, a contar, respectivamente, da data em que transitou em julgado a sentença que encerrar a falência ou que julgar cumprida a concordata.",
    gabarito: "E",
    pegadinha: "troca-numerica",
    palavraChave: "dois anos, ou em cinco anos",
    cognitivo: {
      motivo: "Lembrar o art. 182 da lei atual.",
      palavraCritica: "dois anos",
    },
    comentario: {
      resolucao: "ERRADO. Pela Lei 11.101/2005 (art. 182), a prescrição dos crimes falimentares rege-se pelo Código Penal e começa a correr do dia da decretação da falência, da concessão da recuperação judicial ou da homologação do plano de recuperação extrajudicial. A decretação da falência interrompe a prescrição iniciada com a recuperação (parágrafo único). Mesmo na lei antiga, o prazo era único, de dois anos, contado do encerramento da falência ou do cumprimento da concordata. Não havia a alternativa de cinco anos.",
      fundamento: "Lei nº 11.101/2005, art. 182; CP, art. 109; Decreto-Lei nº 7.661/1945 (lei anterior), art. 199.",
      macete: "Prescrição falimentar hoje: CP, a partir da decretação.",
      erroComum: "Usar prazos especiais da lei revogada.",
      comoBancaPensa: "Mistura prazos inexistentes com marcos antigos.",
    },
  },

  {
    ...BASE111,
    id: "LE-412", assunto: "Crimes Falimentares",
    subassunto: "Concurso de pessoas",
    origem: "CEBRASPE - CAM DEP/Consultor Legislativo — QAP DSO (Legislação — Crimes Falimentares), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Aos crimes falimentares é inaplicável a regra da co-autoria.",
    gabarito: "E",
    pegadinha: "restricao-indevida",
    palavraChave: "inaplicável",
    cognitivo: {
      motivo: "Lembrar o art. 168, § 3º, e o art. 179.",
      palavraCritica: "inaplicável",
    },
    comentario: {
      resolucao: "ERRADO. Aplica-se o concurso de pessoas (CP, art. 29). A própria lei estende as penas da fraude a credores a contadores, técnicos contábeis, auditores e outros profissionais que concorrerem para a conduta (art. 168, § 3º). O art. 179 equipara ao devedor sócios, administradores e o administrador judicial, na medida de sua culpabilidade.",
      fundamento: "Lei nº 11.101/2005, arts. 168, § 3º, e 179; CP, art. 29.",
      macete: "Crime falimentar admite coautoria.",
      erroComum: "Confundir crime próprio com crime de mão própria.",
      comoBancaPensa: "Nega regra geral do CP.",
    },
  },

  {
    ...BASE111,
    id: "LE-413", assunto: "Crimes Falimentares",
    subassunto: "Aquisição de bens da massa por perito",
    origem: "CEBRASPE - CAM DEP/Consultor Legislativo — QAP DSO (Legislação — Crimes Falimentares), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "O perito que, direta ou indiretamente, adquire bens da massa comete crime próprio.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "perito",
    cognitivo: {
      motivo: "Conhecer o rol de sujeitos do art. 177.",
      palavraCritica: "crime próprio",
    },
    comentario: {
      resolucao: "CERTO. O art. 177 pune o juiz, o membro do Ministério Público, o administrador judicial, o gestor judicial, o PERITO, o avaliador, o escrivão, o oficial de justiça ou o leiloeiro que adquire, por si ou por interposta pessoa, bens da massa falida ou de devedor em recuperação judicial. Por exigir essas qualidades, é crime próprio.",
      fundamento: "Lei nº 11.101/2005, art. 177.",
      macete: "Art. 177: quem atua no processo não compra bens da massa.",
      erroComum: "Achar que o perito está fora do rol.",
      comoBancaPensa: "Cobra um dos sujeitos do tipo.",
    },
  },

  {
    ...BASE111,
    id: "LE-414", assunto: "Crimes Falimentares",
    subassunto: "Sem falência, sem crime — condição objetiva",
    origem: "CEBRASPE - CAM DEP/Consultor Legislativo — QAP DSO (Legislação — Crimes Falimentares), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "O empresário individual ou societário que promove a sucessiva reforma de títulos de crédito para obter recursos e retardar a declaração da quebra, ainda que a falência não ocorra, comete crime falimentar.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "ainda que a falência não ocorra",
    cognitivo: {
      motivo: "Lembrar o art. 180.",
      palavraCritica: "ainda que",
    },
    comentario: {
      resolucao: "ERRADO. A sentença que decreta a falência, concede a recuperação judicial ou homologa a extrajudicial é condição objetiva de punibilidade das infrações falimentares (art. 180). Sem ela, a conduta não é punível como crime falimentar, embora possa configurar outro crime.",
      fundamento: "Lei nº 11.101/2005, art. 180.",
      macete: "Sem a sentença do art. 180, não há crime falimentar punível.",
      erroComum: "Ignorar a condição objetiva de punibilidade.",
      comoBancaPensa: "Dispensa o requisito central.",
    },
  },

  {
    ...BASE111,
    id: "LE-415", assunto: "Crimes Falimentares",
    subassunto: "Unidade do crime falimentar",
    origem: "CEBRASPE - CAM DEP/Consultor Legislativo — QAP DSO (Legislação — Crimes Falimentares), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 60,
    enunciado: "Aplica-se a regra do concurso formal se com a falência ocorrer adulteração de livro mercantil.",
    gabarito: "C",
    pegadinha: "juris-mais-lei",
    palavraChave: "concurso formal",
    cognitivo: {
      motivo: "Conhecer o princípio da unidade do crime falimentar.",
      palavraCritica: "concurso formal",
    },
    comentario: {
      resolucao: "CERTO, segundo o gabarito da banca. A doutrina e a jurisprudência tradicionais adotam o princípio da unidade (ou unicidade) do crime falimentar. Várias condutas falimentares ligadas à mesma falência formam um só crime, punido pela pena do mais grave, solução que se aproxima do concurso formal (CP, art. 70). O item reflete essa construção, anterior à Lei 11.101/2005. Hoje o tema é discutido, e parte da doutrina admite o concurso material entre tipos autônomos.",
      fundamento: "Doutrina e jurisprudência (princípio da unidade do crime falimentar); CP, art. 70.",
      macete: "Várias condutas na mesma quebra: crime único (unidade).",
      erroComum: "Somar penas automaticamente.",
      comoBancaPensa: "Cobra construção doutrinária clássica.",
    },
  },

  {
    ...BASE111,
    id: "LE-416", assunto: "Crimes Falimentares",
    subassunto: "Prisão preventiva",
    origem: "CEBRASPE - CAM DEP/Consultor Legislativo — QAP DSO (Legislação — Crimes Falimentares), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Na ocorrência das hipóteses legalmente capituladas como crimes falimentares, o juiz pode decretar a prisão preventiva do agente.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "prisão preventiva",
    cognitivo: {
      motivo: "Lembrar o art. 99, VII.",
      palavraCritica: "pode",
    },
    comentario: {
      resolucao: "CERTO. O art. 99, VII, permite que a sentença de falência ordene a prisão preventiva do falido ou de seus administradores quando requerida com fundamento em provas da prática de crime falimentar. A prisão segue também os requisitos do CPP (arts. 312 e 313).",
      fundamento: "Lei nº 11.101/2005, art. 99, VII; CPP, arts. 312 e 313.",
      macete: "Crime falimentar admite preventiva.",
      erroComum: "Achar que a lei especial impede a preventiva.",
      comoBancaPensa: "Reproduz a possibilidade legal.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE111);
