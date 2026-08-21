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

     1. PC-DF Agente entrega apenas os itens 51 a 97: as sete primeiras
        páginas do PDF não têm camada de texto. O caderno entra enviesado
        para conhecimentos específicos, e a faixa coberta fica registrada
        para que ninguém some como se fosse prova inteira.

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

   O QUE JÁ DÁ PARA AFIRMAR

   Dois temas aparecem nos QUATRO cadernos: "Ética e Improbidade" e
   "Direitos Humanos na CF e tratados". O primeiro tem hoje, no app,
   peso 6,4 itens e faixa de prioridade A — a segunda mais baixa. É o
   descompasso mais claro que esta medição revela.
   ===================================================================== */

const INCIDENCIA_PC_MULTIPROVA = {
  fonte: "Cadernos oficiais CEBRASPE (PDFs fornecidos pelo usuário), extraídos com pdfjs e conferidos por faixa de numeração.",
  metodo: "Tema = frase de comando da própria banca; cada item é atribuído ao comando que o precede.",
  cadernos: [
    {
      org: "PC-DF", ano: 2021, cargo: "Agente",
      faixaCoberta: "51-97", itensCapturados: 47,
      comandos: 27, comandosClassificados: 24, itensComTema: 44,
      temas: {
        "Processo Penal › Normas e princípios": 12,
        "TI › Dados e programação": 6,
        "Ética e Improbidade": 5,
        "Direito Constitucional › Direitos e garantias": 4,
        "Direito Penal › Aplicação da lei penal": 4,
        "Direito Administrativo › Atos administrativos": 3,
        "Direito Administrativo › Licitações e contratos": 3,
        "TI › SO e aplicativos": 3,
        "Direitos Humanos › CF e tratados": 2,
        "Direitos Humanos › Política Nacional": 1,
        "Estatística": 1,
      },
    },
    {
      org: "PC-DF", ano: 2021, cargo: "Escrivão",
      faixaCoberta: "1-115", itensCapturados: 115,
      comandos: 36, comandosClassificados: 27, itensComTema: 98,
      temas: {
        "Língua Portuguesa": 27,
        "TI › Internet e redes": 12,
        "Direito Constitucional › CF e STF": 11,
        "Legislação Institucional": 9,
        "Ética e Improbidade": 5,
        "Conhecimentos regionais": 4,
        "Processo Penal › Prisão e cautelares": 4,
        "Direitos Humanos › CF e tratados": 4,
        "Processo Penal › Inquérito policial": 3,
        "Processo Penal › Juizados especiais": 3,
        "Direitos Humanos › Evolução histórica": 3,
        "Direito Penal › Crimes contra a administração": 2,
        "Direito Penal › Crimes contra o patrimônio": 2,
        "Direito Penal › Crimes contra a pessoa": 2,
        "Processo Penal › Normas e princípios": 2,
        "TI › SO e aplicativos": 2,
        "TI › Segurança da informação": 2,
        "Raciocínio Lógico-Matemático": 1,
      },
    },
    {
      org: "PC-SE", ano: 2021, cargo: "Agente",
      faixaCoberta: "1-70", itensCapturados: 70,
      comandos: 29, comandosClassificados: 23, itensComTema: 58,
      temas: {
        "Conhecimentos regionais": 9,
        "Língua Portuguesa": 7,
        "Direito Administrativo › Atos administrativos": 5,
        "Direito Administrativo › Responsabilidade civil": 5,
        "Legislação Especial › Outras leis penais": 4,
        "Ética e Improbidade": 4,
        "Direito Constitucional › Direitos e garantias": 4,
        "Processo Penal › Inquérito policial": 4,
        "Direito Constitucional › Direitos sociais": 3,
        "Direito Penal › Aplicação da lei penal": 3,
        "Legislação Especial › Lavagem de dinheiro": 3,
        "Legislação Especial › Abuso de autoridade": 3,
        "Direitos Humanos › CF e tratados": 2,
        "Legislação Especial › Drogas": 2,
      },
    },
    {
      org: "PC-SE", ano: 2021, cargo: "Escrivão",
      faixaCoberta: "1-64", itensCapturados: 64,
      comandos: 32, comandosClassificados: 26, itensComTema: 53,
      temas: {
        "Conhecimentos regionais": 8,
        "Língua Portuguesa": 7,
        "Direito Administrativo › Responsabilidade civil": 5,
        "Legislação Especial › Outras leis penais": 4,
        "Ética e Improbidade": 4,
        "Processo Penal › Inquérito policial": 4,
        "Direito Administrativo › Atos administrativos": 3,
        "Direito Constitucional › Direitos e garantias": 3,
        "Direito Constitucional › Direitos sociais": 3,
        "Legislação Especial › Lavagem de dinheiro": 3,
        "Legislação Especial › Abuso de autoridade": 3,
        "Direitos Humanos › CF e tratados": 2,
        "Direito Penal › Aplicação da lei penal": 2,
        "Legislação Especial › Drogas": 2,
      },
    },
  ],
};
