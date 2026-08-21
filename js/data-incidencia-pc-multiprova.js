/* =====================================================================
   QUESTLAB — INCIDÊNCIA MEDIDA EM PROVAS DE POLÍCIA CIVIL (v2)

   Contagem item a item do que a CEBRASPE cobrou em quatro cadernos de
   Polícia Civil estadual, carreira investigativa. Complementa
   js/data-incidencia-real.js, que sozinho cobre só a PC-AL 2021.

   COMO O TEMA É DETERMINADO

   A banca agrupa itens sob um comando que declara a matéria ("Acerca do
   inquérito policial, julgue os itens subsequentes"). O rótulo sai
   dessa frase — quem abrir o PDF confere. Comandos que não nomeiam
   matéria ("Considerando essa situação hipotética, julgue...") herdam a
   do comando SEGUINTE, porque na CEBRASPE o caso hipotético ABRE um
   bloco novo. Isso foi verificado na PC-AL 2021: os itens 77-78 vêm
   depois de um bloco constitucional e antes de um penal, e a contagem
   manual os põe em Direito Penal.

   ⚠ O QUE A CALIBRAÇÃO PROVA — E O QUE NÃO PROVA

   O classificador foi rodado contra a PC-AL 2021, única prova com
   contagem manual conferida item a item (FREQUENCIA_TEMAS, js/data.js).

     Resultado: 120/120 itens, 9 de 9 disciplinas EXATAS, erro zero.

   Esse número não deve ser lido como prova de generalização, porque os
   padrões foram construídos LENDO os comandos dessa mesma prova. Para
   medir o quanto disso é ajuste, treze frases colhidas literalmente da
   PC-AL 2021 foram removidas e a calibração refeita:

     disciplina                 com frases   sem frases
     Direitos Humanos                    12           12
     Ética no Serviço Público            10           10
     Legislação Institucional            14           14
     Língua Portuguesa                   20           20
     Direito Constitucional              12           12
     TI e Segurança Cibernética           8            0
     Direito Administrativo              14           22
     Processo Penal                      15           19
     Direito Penal                       15           11
     ------------------------------------------------------
     erro total                          0%          20%

   A leitura honesta: as correções ESTRUTURAIS generalizam — a ordem dos
   padrões (do específico para o geral, com "ética" por último) e a
   herança do comando seguinte consertaram Direitos Humanos, que na v1
   dava zero, e Ética, que dava 21 contra 10 reais. Essas cinco
   disciplinas acertam mesmo sem o vocabulário fitado.

   O VOCABULÁRIO, esse, está ajustado. TI, Direito Penal, Processo Penal
   e Direito Administrativo dependem das frases específicas e erram até
   8 itens quando a banca escreve diferente.

   CONSEQUÊNCIA PRÁTICA. Nos quatro cadernos abaixo — que a banca
   escreveu com outro vocabulário — a exatidão por disciplina está em
   algum ponto entre 0% e 20% de erro, e não se sabe onde. Servem para
   dizer O QUE FOI COBRADO e em que ordem de grandeza. Não servem, ainda,
   para fixar peso de disciplina no Plano de Estudo.

   O QUE FECHARIA A QUESTÃO: uma segunda prova com contagem manual, de
   banca com vocabulário diferente, usada como teste fora da amostra.

   LIMITES DE EXTRAÇÃO, MEDIDOS

   Páginas que chegaram como imagem no PDF de origem não têm texto. Cada
   caderno traz "lacunas" com os itens ausentes, e "itensComTextoNoPDF"
   contra "itensNaProva":

     PC-DF Agente     64/120 — faltam os itens 1-50 e 93-98
     PC-DF Escrivão  118/120 — faltam 116-117
     PC-SE Agente     85/100 — faltam 59-73
     PC-SE Escrivão   91/100 — faltam 57-65

   No PC-DF Agente o buraco é o bloco INTEIRO de conhecimentos básicos,
   o que enviesa qualquer agregado para conhecimentos específicos. As
   lacunas são contíguas: o que se perde são blocos temáticos inteiros,
   não uma amostra aleatória.

   UM VALOR AINDA SUSPEITO. PC-DF Escrivão marca 32 itens de Língua
   Portuguesa, 27% da prova, contra 17% na PC-AL 2021. É alto e não foi
   explicado. Tratar como teto, não como medida.
   ===================================================================== */

const INCIDENCIA_PC_MULTIPROVA = {
  fonte: "Cadernos oficiais CEBRASPE (PDFs do usuário), extraídos com pdfjs; numeração conferida por faixa.",
  metodo: "Disciplina = frase de comando da banca; comando sem matéria herda a do comando seguinte.",
  calibracao: { prova: "PC-AL 2021", itens: 120, disciplinasExatas: "9/9", erro: "0%", erroSemVocabularioFitado: "20%", generaliza: "estrutura sim, vocabulário não" },
  cadernos: [
    {
      org: "PC-DF", ano: 2021, cargo: "Agente",
      faixaCoberta: "51-120", itensCapturados: 64,
      itensNaProva: 120, itensComTextoNoPDF: 64, lacunas: ["1-50","93-98"],
      comandos: 27, comandosSemTema: 9, itensComDisciplina: 64,
      disciplinas: {
        "Contabilidade": 18,
        "Processo Penal": 12,
        "TI e Segurança Cibernética": 10,
        "Direito Administrativo": 6,
        "Direitos Humanos": 6,
        "Direito Constitucional": 4,
        "Direito Penal": 4,
        "Estatística": 4,
      },
      temas: {
        "Contabilidade › Contabilidade": 18,
        "Processo Penal › Normas processuais penais": 12,
        "TI e Segurança Cibernética › SO e aplicativos": 8,
        "Direitos Humanos › Convenções e tratados": 5,
        "Direito Constitucional › Direitos e garantias fundamentais": 4,
        "Direito Penal › Aplicação da lei penal": 4,
        "Estatística › Estatística": 4,
        "Direito Administrativo › Poderes e abuso de poder": 3,
        "Direito Administrativo › Licitações e contratos": 3,
        "TI e Segurança Cibernética › Dados e programação": 2,
        "Direitos Humanos › Direitos humanos (geral)": 1,
      },
    },
    {
      org: "PC-DF", ano: 2021, cargo: "Escrivão",
      faixaCoberta: "1-120", itensCapturados: 118,
      itensNaProva: 120, itensComTextoNoPDF: 118, lacunas: ["116-117"],
      comandos: 36, comandosSemTema: 11, itensComDisciplina: 118,
      disciplinas: {
        "Língua Portuguesa": 32,
        "TI e Segurança Cibernética": 16,
        "Legislação Institucional (AL)": 13,
        "Direito Penal": 12,
        "Processo Penal": 12,
        "Direito Constitucional": 11,
        "Raciocínio Lógico-Matemático": 10,
        "Direitos Humanos": 7,
        "Conhecimentos regionais": 5,
      },
      temas: {
        "Língua Portuguesa › Compreensão e aspectos linguísticos": 32,
        "Legislação Institucional (AL) › Estatuto e servidores estaduais": 13,
        "TI e Segurança Cibernética › Redes e internet": 12,
        "Direito Constitucional › CF e jurisprudência": 11,
        "Raciocínio Lógico-Matemático › RLM": 10,
        "Direito Penal › Crimes contra a administração": 8,
        "Processo Penal › Prisão e cautelares": 7,
        "Conhecimentos regionais › Conhecimentos regionais": 5,
        "Direitos Humanos › Direitos humanos (geral)": 5,
        "Processo Penal › Inquérito policial": 3,
        "Direito Penal › Crimes contra o patrimônio": 2,
        "Direito Penal › Crimes contra a pessoa": 2,
        "Processo Penal › Princípios constitucionais do processo penal": 2,
        "Direitos Humanos › Convenções e tratados": 2,
        "TI e Segurança Cibernética › SO e aplicativos": 2,
        "TI e Segurança Cibernética › Arquivos e segurança": 2,
      },
    },
    {
      org: "PC-SE", ano: 2021, cargo: "Agente",
      faixaCoberta: "1-100", itensCapturados: 85,
      itensNaProva: 100, itensComTextoNoPDF: 85, lacunas: ["59-73"],
      comandos: 28, comandosSemTema: 11, itensComDisciplina: 84,
      disciplinas: {
        "Direito Administrativo": 23,
        "Contabilidade": 18,
        "Conhecimentos regionais": 15,
        "Direito Constitucional": 10,
        "Língua Portuguesa": 7,
        "Ética no Serviço Público": 4,
        "Direitos Humanos": 4,
        "Direito Penal": 3,
      },
      temas: {
        "Contabilidade › Contabilidade": 18,
        "Conhecimentos regionais › Conhecimentos regionais": 15,
        "Direito Administrativo › Responsabilidade civil do Estado": 14,
        "Direito Administrativo › Atos administrativos": 9,
        "Língua Portuguesa › Compreensão e aspectos linguísticos": 7,
        "Direito Constitucional › Direitos sociais e instituições": 6,
        "Ética no Serviço Público › Ética": 4,
        "Direitos Humanos › Direitos humanos (geral)": 4,
        "Direito Constitucional › Direitos e garantias fundamentais": 4,
        "Direito Penal › Aplicação da lei penal": 3,
      },
    },
    {
      org: "PC-SE", ano: 2021, cargo: "Escrivão",
      faixaCoberta: "1-100", itensCapturados: 91,
      itensNaProva: 100, itensComTextoNoPDF: 91, lacunas: ["57-65"],
      comandos: 31, comandosSemTema: 11, itensComDisciplina: 90,
      disciplinas: {
        "Arquivologia": 22,
        "Direito Administrativo": 21,
        "Conhecimentos regionais": 14,
        "Direito Constitucional": 8,
        "Língua Portuguesa": 7,
        "Ética no Serviço Público": 4,
        "Direitos Humanos": 4,
        "Processo Penal": 4,
        "Contabilidade": 4,
        "Direito Penal": 2,
      },
      temas: {
        "Arquivologia › Arquivologia": 22,
        "Conhecimentos regionais › Conhecimentos regionais": 14,
        "Direito Administrativo › Responsabilidade civil do Estado": 12,
        "Direito Administrativo › Atos administrativos": 9,
        "Língua Portuguesa › Compreensão e aspectos linguísticos": 7,
        "Direito Constitucional › Direitos sociais e instituições": 5,
        "Ética no Serviço Público › Ética": 4,
        "Direitos Humanos › Direitos humanos (geral)": 4,
        "Processo Penal › Inquérito policial": 4,
        "Contabilidade › Contabilidade": 4,
        "Direito Constitucional › Direitos e garantias fundamentais": 3,
        "Direito Penal › Aplicação da lei penal": 2,
      },
    },
  ],
};
