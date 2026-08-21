/* =====================================================================
   QUESTLAB — INCIDÊNCIA MEDIDA EM PROVAS DE POLÍCIA CIVIL

   Contagem item a item do que a CEBRASPE cobrou em QUATRO cadernos de
   Polícia Civil estadual, carreira investigativa. Complementa
   js/data-incidencia-real.js, que sozinho cobre só a PC-AL 2021.

   POR QUE PRECISOU EXISTIR

   Toda a incidência de temas do app vinha de UM caderno. Este projeto já
   provou, com o perfil de comprimento, que um caderno só erra feio: o
   alvo de itens longos saiu de 7,5% para 19,2% quando cinco cadernos
   entraram na conta, e o validador vinha acusando o banco por um alvo
   que estava errado. A incidência de temas nunca passou por essa
   revisão. Agora passa.

   COMO O TEMA FOI DETERMINADO — E POR QUE ISSO É AUDITÁVEL

   A CEBRASPE agrupa itens sob um comando que DECLARA a matéria ("A
   respeito do inquérito policial, julgue os itens seguintes"). O rótulo
   registrado aqui é essa frase, não uma leitura nossa: quem abrir o PDF
   confere. Foi medido que 95% dos comandos nomeiam a matéria; os 5%
   restantes remetem a um texto ou caso anterior e ficaram SEM tema, em
   vez de serem atribuídos por palpite.

   O QUE ESTES NÚMEROS NÃO SÃO

   Não são previsão da PC-AL 2026. São o que quatro cadernos de outras
   Polícias Civis cobraram. Servem para dizer o que RECORRE na banca —
   não para fixar cota por disciplina, que é matéria do edital de 2026.

   LIMITES CONHECIDOS, MEDIDOS E NÃO ESTIMADOS

     1. PÁGINAS SEM CAMADA DE TEXTO NO PDF DE ORIGEM. Não é falha de
        leitura: são páginas que chegaram como imagem. Cada caderno traz
        "lacunas" com os itens ausentes, e "itensComTextoNoPDF" contra
        "itensNaProva", para que ninguém some como se fosse prova
        inteira.

          PC-DF Agente     64/120 — faltam os itens 1-50 e 93-98
          PC-DF Escrivão  118/120 — faltam 116-117
          PC-SE Agente     85/100 — faltam 59-73
          PC-SE Escrivão   91/100 — faltam 57-65

        O caso grave é o PC-DF Agente: os itens 1 a 50 são o bloco
        INTEIRO de conhecimentos básicos. Por isso esse caderno não
        contribui com Língua Portuguesa nem Raciocínio Lógico, e o
        agregado fica enviesado para conhecimentos específicos. As
        lacunas são contíguas, então o que se perde são blocos temáticos
        inteiros — não uma amostra aleatória.

     2. COMANDO COM TEMA POSPOSTO — corrigido, fica o registro. A banca
        escreve dos dois jeitos: "Acerca do inquérito policial, julgue
        os itens" e "Julgue os itens seguintes, relativos aos sentidos e
        a aspectos linguísticos do texto". A segunda forma é mais longa
        e escapava da janela de 60 caracteres do extrator, o que fazia
        os itens dela vazarem para o comando anterior — um bloco do
        PC-DF Escrivão chegou a acumular 27 itens. Com a janela em 130
        o bloco caiu para 17, que é o tamanho normal de um bloco de
        Língua Portuguesa (a PC-AL 2021 teve 20).

     3. OS DOIS CADERNOS DO PC-DF SÃO "PROVA COM JUSTIFICATIVAS", não
        cadernos limpos: cada item vem seguido do texto de justificativa
        da banca. Isso não invalidou a leitura — a razão itens por
        comando ficou entre 1,9 e 3,9 nos quatro cadernos, dentro do
        esperado —, mas explica por que as distâncias entre comandos são
        muito maiores ali.

     4. A classificação cobre de 75% a 89% dos comandos por caderno. O
        que não casou ficou de fora da conta, não distribuído por
        aproximação — preferimos subcontar a inventar.

     5. PC-PE 2023 foi excluído: o PDF disponível é o caderno de
        justificativas parcial, e rendeu só 16 itens.

   ⚠ CALIBRAÇÃO REPROVADA — NÃO USE OS NÚMEROS DE "temas" COMO PESO

   O pipeline foi rodado contra a PC-AL 2021, que é a única prova com
   contagem MANUAL conferida item a item (FREQUENCIA_TEMAS, em
   js/data.js). Ele capturou os 120 itens corretamente, mas classificou
   mal:

     disciplina                 manual   pipeline   erro
     Direitos Humanos               12          0    -12
     Ética e Improbidade            10         21    +11
     Processo Penal                 15          5    -10
     Legislação Institucional       14          4    -10
     Língua Portuguesa              20         13     -7
     Direito Penal                  15          9     -6
     Direito Constitucional         12         17     +5
     Direito Administrativo         14         10     -4
     TI                              8          4     -4

   O padrão do erro é claro: "Ética" é largo demais e vem cedo na lista
   de temas, então absorve itens de Direitos Humanos e de Legislação
   Institucional — que caem para zero e para quatro. Foi por isso que
   "Ética e Improbidade" aparecia como o tema mais recorrente dos quatro
   cadernos. Era artefato do classificador, não comportamento da banca.

   O QUE CONTINUA VÁLIDO NESTE ARQUIVO

     - A identificação dos cadernos e a extração do texto.
     - "itensCapturados", "faixaCoberta", "lacunas", "itensNaProva" e
       "itensComTextoNoPDF": são contagem de numeração, não dependem do
       classificador. O PC-DF Agente perder os itens 1 a 50 é fato.
     - A PRESENÇA de um tema num caderno, em nível grosso (houve ou não
       houve comando sobre inquérito policial). Erra para menos, nunca
       inventa tema que não existe.

   O QUE NÃO VALE

     - Os números dentro de "temas". São piso enviesado, e o viés não é
       uniforme entre disciplinas — o que é pior do que ser pequeno.

   COMO CONSERTAR, QUANDO FOR RETOMADO

   A calibração contra a PC-AL 2021 precisa virar PORTÃO, não teste
   final: o classificador só pode ser usado depois de reproduzir a
   contagem manual dentro de uma margem declarada. Ordenar os temas do
   mais específico para o mais geral e tratar "Ética" por último resolve
   parte; o resto exige separar contexto de comando do texto do caso.
   ===================================================================== */

const INCIDENCIA_PC_MULTIPROVA = {
  fonte: "Cadernos oficiais CEBRASPE (PDFs fornecidos pelo usuário), extraídos com pdfjs e conferidos por faixa de numeração.",
  metodo: "Tema = frase de comando da própria banca; cada item é atribuído ao comando que o precede.",
  cadernos: [
    {
      org: "PC-DF", ano: 2021, cargo: "Agente",
      faixaCoberta: "51-120", itensCapturados: 64,
      itensNaProva: 120, itensComTextoNoPDF: 64, lacunas: ["1-50","93-98"],
      comandos: 27, comandosClassificados: 24, itensComTema: 59,
      temas: {
        "Processo Penal › Normas e princípios": 12,
        "Ética e Improbidade": 11,
        "Contabilidade": 10,
        "Direito Constitucional › Direitos e garantias": 4,
        "Direito Penal › Aplicação da lei penal": 4,
        "Estatística": 4,
        "Direito Administrativo › Atos administrativos": 3,
        "Direito Administrativo › Licitações e contratos": 3,
        "TI › Dados e programação": 3,
        "Direitos Humanos › CF e tratados": 2,
        "TI › SO e aplicativos": 2,
        "Direitos Humanos › Política Nacional": 1,
      },
    },
    {
      org: "PC-DF", ano: 2021, cargo: "Escrivão",
      faixaCoberta: "1-120", itensCapturados: 118,
      itensNaProva: 120, itensComTextoNoPDF: 118, lacunas: ["116-117"],
      comandos: 36, comandosClassificados: 27, itensComTema: 101,
      temas: {
        "Língua Portuguesa": 27,
        "TI › Internet e redes": 12,
        "Direito Constitucional › CF e STF": 11,
        "Legislação Institucional": 9,
        "Ética e Improbidade": 5,
        "Conhecimentos regionais": 4,
        "Processo Penal › Prisão e cautelares": 4,
        "Direitos Humanos › CF e tratados": 4,
        "Raciocínio Lógico-Matemático": 4,
        "Processo Penal › Inquérito policial": 3,
        "Processo Penal › Juizados especiais": 3,
        "Direitos Humanos › Evolução histórica": 3,
        "Direito Penal › Crimes contra a administração": 2,
        "Direito Penal › Crimes contra o patrimônio": 2,
        "Direito Penal › Crimes contra a pessoa": 2,
        "Processo Penal › Normas e princípios": 2,
        "TI › SO e aplicativos": 2,
        "TI › Segurança da informação": 2,
      },
    },
    {
      org: "PC-SE", ano: 2021, cargo: "Agente",
      faixaCoberta: "1-100", itensCapturados: 85,
      itensNaProva: 100, itensComTextoNoPDF: 85, lacunas: ["59-73"],
      comandos: 28, comandosClassificados: 22, itensComTema: 68,
      temas: {
        "Ética e Improbidade": 18,
        "Conhecimentos regionais": 9,
        "Direito Administrativo › Atos administrativos": 9,
        "Língua Portuguesa": 7,
        "Direito Administrativo › Responsabilidade civil": 5,
        "Legislação Especial › Outras leis penais": 4,
        "Direito Constitucional › Direitos e garantias": 4,
        "Contabilidade": 4,
        "Direito Constitucional › Direitos sociais": 3,
        "Direito Penal › Aplicação da lei penal": 3,
        "Direitos Humanos › CF e tratados": 2,
      },
    },
    {
      org: "PC-SE", ano: 2021, cargo: "Escrivão",
      faixaCoberta: "1-100", itensCapturados: 91,
      itensNaProva: 100, itensComTextoNoPDF: 91, lacunas: ["57-65"],
      comandos: 31, comandosClassificados: 25, itensComTema: 75,
      temas: {
        "Ética e Improbidade": 16,
        "Arquivologia": 10,
        "Conhecimentos regionais": 8,
        "Língua Portuguesa": 7,
        "Direito Administrativo › Atos administrativos": 7,
        "Direito Administrativo › Responsabilidade civil": 5,
        "Legislação Especial › Outras leis penais": 4,
        "Processo Penal › Inquérito policial": 4,
        "Contabilidade": 4,
        "Direito Constitucional › Direitos e garantias": 3,
        "Direito Constitucional › Direitos sociais": 3,
        "Direitos Humanos › CF e tratados": 2,
        "Direito Penal › Aplicação da lei penal": 2,
      },
    },
  ],
};
