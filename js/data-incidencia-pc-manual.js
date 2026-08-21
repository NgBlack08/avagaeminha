/* =====================================================================
   QUESTLAB — INCIDÊNCIA CONFERIDA À MÃO EM PROVAS DE POLÍCIA CIVIL

   Contagem item a item, por leitura humana, de CINCO cadernos da
   CEBRASPE para carreira investigativa de Polícia Civil estadual.
   Substitui a medição automática, que foi reprovada na calibração.

   POR QUE À MÃO, E NÃO POR SCRIPT

   Um classificador por padrões foi construído, calibrado e testado.
   Acertou 120/120 na PC-AL 2021 — mas essa prova foi a fonte dos
   próprios padrões. Fora dela o resultado desabou, e de forma
   imprevisível:

     PC-DF Escrivão   erro de   1 item em 118  (0,8%)
     PC-SE Escrivão   erro de  62 itens em 90  (69%)
     PC-PE 2023       45% das questões sem classificação

   A causa não é banca nem vocabulário: é quantos comandos DECLARAM a
   matéria. Onde a banca escreve "Acerca do inquérito policial,
   julgue...", o script acerta. Onde escreve "Com base nessas
   informações, julgue..." — e o assunto está num diagrama, num
   e-mail ou num laudo pericial — não há frase a casar, e o script
   erra sem avisar. Não há como saber de antemão qual caderno é qual.

   Por isso cada bloco abaixo foi LIDO. Onde o comando não declarava a
   matéria, o texto dos próprios itens decidiu. Exemplos reais:

     PC-SE 79-83  "cavalo de Troia", "spear phishing"      -> TI
     PC-SE 85-90  "lesões perfurocontusas", "perito"       -> Medicina Legal
     PC-SE 27-30  "a lâmpada V1 estará acesa em T=45s"      -> RLM
     PC-DF 103-108 "chance de 90% de o teste ter detectado" -> Estatística

   O script dava Arquivologia e Direito Administrativo para todos.

   CONFERÊNCIA ARITMÉTICA. Em cada caderno a soma das disciplinas bate
   exatamente com o número de itens conferidos. Os blocos são
   contíguos e não se sobrepõem: uma fronteira errada quebraria a soma.

   O QUE NÃO É

   Não é previsão da PC-AL 2026. Quatro destes cadernos são de outras
   Polícias Civis, e o edital de 2026 acrescentou seis disciplinas que
   não existiam em 2021. Serve para dizer o que a banca COBRA em prova
   de PC — não para fixar cota, que é matéria do edital.

   LACUNAS. Páginas que chegaram como imagem no PDF não têm texto. O
   campo `lacunas` registra os itens ausentes de cada caderno. O caso
   grave é o PC-DF Agente, que perdeu os itens 1 a 50 — o bloco inteiro
   de conhecimentos básicos —, e por isso não contribui com Português
   nem com Legislação Institucional.
   ===================================================================== */

const INCIDENCIA_PC_MANUAL = {
  metodo: "Leitura humana bloco a bloco; onde o comando não declara a matéria, o texto dos itens decide.",
  totalConferido: 476,
  cadernos: [
    {
      org: "PC-AL", ano: 2021, cargo: "Agente",
      itensNaProva: 120, conferidos: 120, lacunas: [],
      fonte: "contagem manual pré-existente no repositório (FREQUENCIA_TEMAS, js/data.js)",
      disciplinas: {
        "Língua Portuguesa": 20,
        "Direito Penal": 15,
        "Processo Penal": 15,
        "Direito Administrativo": 14,
        "Legislação Institucional": 14,
        "Direito Constitucional": 12,
        "Direitos Humanos": 12,
        "Ética no Serviço Público": 10,
        "TI e Segurança Cibernética": 8,
      },
    },
    {
      org: "PC-DF", ano: 2021, cargo: "Escrivão",
      itensNaProva: 120, conferidos: 118, lacunas: ["116-117"],
      fonte: "leitura manual dos 35 blocos do caderno",
      disciplinas: {
        "Língua Portuguesa": 32,
        "TI e Segurança Cibernética": 16,
        "Legislação Institucional": 12,
        "Direito Penal": 12,
        "Processo Penal": 12,
        "Direito Constitucional": 11,
        "Raciocínio Lógico-Matemático": 10,
        "Direitos Humanos": 7,
        "Conhecimentos regionais": 6,
      },
    },
    {
      org: "PC-DF", ano: 2021, cargo: "Agente",
      itensNaProva: 120, conferidos: 64, lacunas: ["1-50","93-98"],
      fonte: "leitura manual dos 25 blocos; só o bloco de conhecimentos específicos tem texto no PDF",
      disciplinas: {
        "Contabilidade": 12,
        "TI e Segurança Cibernética": 10,
        "Estatística": 10,
        "Direito Penal": 8,
        "Processo Penal": 8,
        "Direitos Humanos": 6,
        "Direito Administrativo": 6,
        "Direito Constitucional": 4,
      },
    },
    {
      org: "PC-SE", ano: 2021, cargo: "Escrivão",
      itensNaProva: 100, conferidos: 90, lacunas: ["1","57-65"],
      fonte: "leitura manual dos 27 blocos",
      disciplinas: {
        "Arquivologia": 10,
        "Língua Portuguesa": 9,
        "Conhecimentos regionais": 8,
        "Direito Administrativo": 8,
        "Direito Constitucional": 8,
        "Processo Penal": 8,
        "Contabilidade": 8,
        "Medicina Legal": 6,
        "TI e Segurança Cibernética": 6,
        "Estatística": 5,
        "Ética no Serviço Público": 4,
        "Direitos Humanos": 4,
        "Raciocínio Lógico-Matemático": 4,
        "Direito Penal": 2,
      },
    },
    {
      org: "PC-SE", ano: 2021, cargo: "Agente",
      itensNaProva: 100, conferidos: 84, lacunas: ["1","59-73"],
      fonte: "leitura manual dos 23 blocos",
      disciplinas: {
        "Direito Administrativo": 10,
        "Direito Constitucional": 10,
        "Língua Portuguesa": 9,
        "Conhecimentos regionais": 8,
        "Contabilidade": 8,
        "TI e Segurança Cibernética": 8,
        "Medicina Legal": 6,
        "Processo Penal": 5,
        "Estatística": 5,
        "Ética no Serviço Público": 4,
        "Direitos Humanos": 4,
        "Raciocínio Lógico-Matemático": 4,
        "Direito Penal": 3,
      },
    },
  ],
  /* agregado: itens somados, e o percentual médio entre cadernos, que
     não deixa um caderno grande dominar os pequenos */
  agregado: [
    { disciplina: "Processo Penal", itens: 48, cadernos: 5, pctAgregado: 10.1, pctMedio: 10 },
    { disciplina: "TI e Segurança Cibernética", itens: 48, cadernos: 5, pctAgregado: 10.1, pctMedio: 10.4 },
    { disciplina: "Direito Constitucional", itens: 45, cadernos: 5, pctAgregado: 9.5, pctMedio: 9.3 },
    { disciplina: "Direito Penal", itens: 40, cadernos: 5, pctAgregado: 8.4, pctMedio: 8.2 },
    { disciplina: "Direitos Humanos", itens: 33, cadernos: 5, pctAgregado: 6.9, pctMedio: 6.9 },
    { disciplina: "Língua Portuguesa", itens: 70, cadernos: 4, pctAgregado: 14.7, pctMedio: 12.9 },
    { disciplina: "Direito Administrativo", itens: 38, cadernos: 4, pctAgregado: 8, pctMedio: 8.4 },
    { disciplina: "Contabilidade", itens: 28, cadernos: 3, pctAgregado: 5.9, pctMedio: 7.4 },
    { disciplina: "Conhecimentos regionais", itens: 22, cadernos: 3, pctAgregado: 4.6, pctMedio: 4.7 },
    { disciplina: "Estatística", itens: 20, cadernos: 3, pctAgregado: 4.2, pctMedio: 5.4 },
    { disciplina: "Ética no Serviço Público", itens: 18, cadernos: 3, pctAgregado: 3.8, pctMedio: 3.5 },
    { disciplina: "Raciocínio Lógico-Matemático", itens: 18, cadernos: 3, pctAgregado: 3.8, pctMedio: 3.5 },
    { disciplina: "Legislação Institucional", itens: 26, cadernos: 2, pctAgregado: 5.5, pctMedio: 4.4 },
    { disciplina: "Medicina Legal", itens: 12, cadernos: 2, pctAgregado: 2.5, pctMedio: 2.8 },
    { disciplina: "Arquivologia", itens: 10, cadernos: 1, pctAgregado: 2.1, pctMedio: 2.2 },
  ],
};
