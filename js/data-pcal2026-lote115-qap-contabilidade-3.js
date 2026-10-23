/* =====================================================================
   QUESTLAB — Lote 115: CONTABILIDADE (parte 3), QAPs DO CURSO DSO
   (módulos 09 e 10 — balanço patrimonial, DRE e estoques)

   ORIGEM E MÉTODO: os do lote 100. Os cadernos de Contabilidade trazem
   uma questão por página, com cabeçalho "(CESPE/CEBRASPE)" sem indicação
   da prova; o gabarito vem marcado à mão pelo professor e foi transcrito
   das páginas comentadas. Comentários escritos do zero contra a Lei
   6.404/1976, o Código Civil e os pronunciamentos do CPC.

   MÚLTIPLA ESCOLHA: itens ME foram convertidos para C/E. Cada um diz na
   origem qual alternativa foi reescrita; os cálculos estão na resolução.

   OBSERVAÇÕES (o gabarito do QAP foi mantido em todos)
     - "Custos" na DRE, VRL x valor de mercado e estoques intangíveis: os
       comentários explicam o ponto que o professor marcou.
     - Os itens 6 de mercadorias e 11 do balanço são o mesmo; entrou uma vez.
   ===================================================================== */

const BASE115 = {
  concurso: "PCAL", cargo: ["Escrivão", "Agente"], ano: 2026,
  tipo: "CE", probReaparecer: 0.8,
  disciplina: "Contabilidade e Análise Financeira",
};

const QUESTOES_PCAL_LOTE115 = [

  /* ===== BALANÇO PATRIMONIAL ===== */

  {
    ...BASE115,
    id: "CT-261", assunto: "Balanço patrimonial",
    subassunto: "Ajustes de avaliação patrimonial — transferência ao resultado",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "Com base na Lei n.º 6.404/1976 e suas alterações, julgue o item subsequente. É vedado às sociedades por ações transferir valores registrados na conta ajustes de avaliação patrimonial para contas de resultado do exercício.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "É vedado",
    cognitivo: {
      motivo: "Reconhecer o ponto: ajustes de avaliação patrimonial — transferência ao resultado.",
      palavraCritica: "É vedado",
    },
    comentario: {
      resolucao: "ERRADO. Os valores em ajustes de avaliação patrimonial são transferidos ao resultado quando realizados, conforme o regime de competência (art. 182, § 3º). A transferência não é vedada, é a destinação prevista.",
      fundamento: "Lei 6.404/1976, art. 182, § 3º.",
      macete: "AAP vai ao resultado na realização.",
      erroComum: "Achar que AAP fica para sempre no PL.",
      comoBancaPensa: "Nega uma regra expressa.",
    },
  },

  {
    ...BASE115,
    id: "CT-262", assunto: "Balanço patrimonial",
    subassunto: "Adiantamentos a controladas — negócios usuais",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 60,
    enunciado: "Com base na Lei n.º 6.404/1976 e suas alterações, julgue o item a seguir. Os adiantamentos concedidos por uma companhia às sociedades por ela controladas devem ser classificados no grupamento ativo realizável a longo prazo do balanço patrimonial, independentemente do prazo de realização desses direitos e do fato de os adiantamentos terem sido ou não decorrentes de operações que constituem negócios usuais na exploração do objeto social da companhia.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "independentemente do prazo de realização",
    cognitivo: {
      motivo: "Reconhecer o ponto: adiantamentos a controladas — negócios usuais.",
      palavraCritica: "independentemente do prazo de realização",
    },
    comentario: {
      resolucao: "ERRADO. O art. 179, II, manda ao realizável a longo prazo os adiantamentos e empréstimos a controladas e coligadas que NÃO constituírem negócios usuais na exploração do objeto da companhia. Se forem operações usuais, segue-se o critério de prazo. A classificação não é automática.",
      fundamento: "Lei 6.404/1976, art. 179, II.",
      macete: "Fora do usual: longo prazo; usual: segue o prazo.",
      erroComum: "Ignorar a ressalva dos negócios usuais.",
      comoBancaPensa: "Apaga a condição da lei.",
    },
  },

  {
    ...BASE115,
    id: "CT-263", assunto: "Balanço patrimonial",
    subassunto: "Compensação de ativo e passivo exige direito",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Com base na Lei n.º 6.404/1976 e suas alterações, julgue o item a seguir. Suponha que uma sociedade por ações tenha adquirido o direito de receber R$ 1 mil de determinado cliente e assumido, concomitantemente, uma obrigação de pagar R$ 500 a esse mesmo cliente. Nesse caso, a sociedade por ações pode classificar, no balanço patrimonial, os saldos das referidas transações como um ativo no valor de R$ 500, independentemente da existência de direito de compensação envolvendo essas transações.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "independentemente da existência de direito de compensação",
    cognitivo: {
      motivo: "Reconhecer o ponto: compensação de ativo e passivo exige direito.",
      palavraCritica: "independentemente da existência de direito de compensação",
    },
    comentario: {
      resolucao: "ERRADO. Ativos e passivos não devem ser compensados, salvo quando houver direito legal de compensação e intenção de liquidar pelo líquido (CPC 26, item 32; CPC 39). Sem esse direito, apresentam-se o ativo de 1.000 e o passivo de 500 separadamente.",
      fundamento: "CPC 26 (R1), item 32; CPC 39, item 42.",
      macete: "Compensar só com direito de compensação.",
      erroComum: "Mostrar só o líquido.",
      comoBancaPensa: "Dispensa a condição da compensação.",
    },
  },

  {
    ...BASE115,
    id: "CT-264", assunto: "Balanço patrimonial",
    subassunto: "Retificadoras de ativo só reduzem",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Acerca da natureza, da forma de organização e da utilidade das contas, julgue o item subsequente. Contas retificadoras de ativo são utilizadas para promover ajustes (para mais ou para menos) em saldos de contas representativas de bens e direitos de uma entidade.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "para mais ou para menos",
    cognitivo: {
      motivo: "Reconhecer o ponto: retificadoras de ativo só reduzem.",
      palavraCritica: "para mais ou para menos",
    },
    comentario: {
      resolucao: "ERRADO. Contas retificadoras de ativo têm saldo credor e só REDUZEM o valor dos bens e direitos a que se referem, como depreciação acumulada e PECLD. Não ajustam 'para mais'.",
      fundamento: "Doutrina contábil (contas retificadoras).",
      macete: "Retificadora do ativo: só diminui.",
      erroComum: "Achar que pode aumentar.",
      comoBancaPensa: "Amplia a função.",
    },
  },

  {
    ...BASE115,
    id: "CT-265", assunto: "Balanço patrimonial",
    subassunto: "Realizável a longo prazo — mesma natureza do AC",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Acerca do ativo realizável a longo prazo e de sua mensuração, julgue o item seguinte. O ativo realizável a longo prazo tem, em essência, a mesma natureza do ativo circulante, diferenciando-se deste pelo prazo de realização.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "mesma natureza",
    cognitivo: {
      motivo: "Reconhecer o ponto: realizável a longo prazo — mesma natureza do AC.",
      palavraCritica: "mesma natureza",
    },
    comentario: {
      resolucao: "CERTO. O realizável a longo prazo reúne direitos da mesma natureza dos do ativo circulante (créditos, valores), distinguindo-se pelo prazo de realização, após o término do exercício seguinte.",
      fundamento: "Lei 6.404/1976, art. 179, I e II.",
      macete: "RLP = AC no tempo longo.",
      erroComum: "Confundir com investimentos.",
      comoBancaPensa: "Reproduz o conceito.",
    },
  },

  {
    ...BASE115,
    id: "CT-266", assunto: "Balanço patrimonial",
    subassunto: "Impostos diferidos ativos — não circulante",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 40,
    enunciado: "Em relação à elaboração das demonstrações contábeis, julgue o item seguinte, considerando a legislação societária e a normatização contábil vigentes. No balanço patrimonial, os impostos diferidos ativos integram o grupo de ativos circulantes.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "ativos circulantes",
    cognitivo: {
      motivo: "Reconhecer o ponto: impostos diferidos ativos — não circulante.",
      palavraCritica: "ativos circulantes",
    },
    comentario: {
      resolucao: "ERRADO. Ativos fiscais diferidos não são classificados no ativo circulante (CPC 26, item 56). Ficam no ativo não circulante (realizável a longo prazo).",
      fundamento: "CPC 26 (R1), item 56; CPC 32.",
      macete: "Tributo diferido ativo: não circulante.",
      erroComum: "Pôr no circulante.",
      comoBancaPensa: "Troca o grupo.",
    },
  },

  {
    ...BASE115,
    id: "CT-267", assunto: "Balanço patrimonial",
    subassunto: "Composição do ativo não circulante",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Considerando aspectos conceituais, classificatórios e normativos do balanço patrimonial, julgue o item a seguir, com base na legislação societária vigente (Lei n.º 6.404/1976) e nas normas contábeis brasileiras. O ativo não circulante abrange empréstimos a longo prazo, bens imobilizados e investimentos permanentes.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "empréstimos a longo prazo",
    cognitivo: {
      motivo: "Reconhecer o ponto: composição do ativo não circulante.",
      palavraCritica: "empréstimos a longo prazo",
    },
    comentario: {
      resolucao: "CERTO. O ativo não circulante abrange o realizável a longo prazo (como empréstimos concedidos a longo prazo), os investimentos, o imobilizado e o intangível (art. 178, § 1º).",
      fundamento: "Lei 6.404/1976, art. 178, § 1º.",
      macete: "ANC: RLP, investimentos, imobilizado, intangível.",
      erroComum: "Esquecer o RLP.",
      comoBancaPensa: "Reproduz a composição.",
    },
  },

  {
    ...BASE115,
    id: "CT-268", assunto: "Balanço patrimonial",
    subassunto: "Custo de aquisição com ajustes",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 40,
    enunciado: "Considerando aspectos conceituais, classificatórios e normativos do balanço patrimonial, julgue o item a seguir, com base na legislação societária vigente (Lei n.º 6.404/1976) e nas normas contábeis brasileiras. Os ativos devem ser avaliados pelo custo de aquisição, com ajustes para perdas, quando aplicáveis.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "custo de aquisição",
    cognitivo: {
      motivo: "Reconhecer o ponto: custo de aquisição com ajustes.",
      palavraCritica: "custo de aquisição",
    },
    comentario: {
      resolucao: "CERTO, segundo a banca. A regra geral de avaliação do art. 183 é o custo de aquisição, deduzido de perdas (ajuste ao valor recuperável, PECLD, depreciação), com as exceções de valor justo previstas em lei e nos CPCs.",
      fundamento: "Lei 6.404/1976, art. 183; CPC 01.",
      macete: "Regra geral: custo menos perdas.",
      erroComum: "Achar que tudo é a valor justo.",
      comoBancaPensa: "Cobra a regra geral.",
    },
  },

  {
    ...BASE115,
    id: "CT-269", assunto: "Balanço patrimonial",
    subassunto: "Contas a receber — circulante até 12 meses",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material; item de múltipla escolha convertido para C/E: a assertiva reescreve a alternativa 'D'",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Contas a receber representam valores que a empresa tem a receber de clientes ou de outras partes e são classificadas no ativo circulante quando se espera recebê-las em até 12 meses.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "até 12 meses",
    cognitivo: {
      motivo: "Reconhecer o ponto: contas a receber — circulante até 12 meses.",
      palavraCritica: "até 12 meses",
    },
    comentario: {
      resolucao: "CERTO. Contas a receber são valores a receber de clientes e outras partes, classificados no ativo circulante quando se espera recebê-los em até 12 meses ou no ciclo operacional.",
      fundamento: "Lei 6.404/1976, art. 179, I; CPC 26, item 66.",
      macete: "A receber em até 12 meses: AC.",
      erroComum: "Confundir com fornecedores.",
      comoBancaPensa: "Reproduz a alternativa correta.",
    },
  },

  {
    ...BASE115,
    id: "CT-270", assunto: "Balanço patrimonial",
    subassunto: "Ciclo operacional curto — exercício seguinte",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material; item de múltipla escolha convertido para C/E: a assertiva reescreve a alternativa 'E'",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Se o ciclo operacional da companhia dura seis meses, suas obrigações são classificadas no passivo circulante quando vencerem no exercício social subsequente.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "exercício social subsequente",
    cognitivo: {
      motivo: "Reconhecer o ponto: ciclo operacional curto — exercício seguinte.",
      palavraCritica: "exercício social subsequente",
    },
    comentario: {
      resolucao: "CERTO. Se o ciclo operacional dura menos que o exercício, o critério é o exercício: obrigações que vencem no exercício seguinte vão ao passivo circulante (art. 180).",
      fundamento: "Lei 6.404/1976, arts. 179, parágrafo único, e 180.",
      macete: "Ciclo menor que o exercício: vale o exercício.",
      erroComum: "Usar o ciclo curto como prazo.",
      comoBancaPensa: "Cobra o critério temporal.",
    },
  },

  {
    ...BASE115,
    id: "CT-271", assunto: "Balanço patrimonial",
    subassunto: "Balanço não é retrato exato",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material; item de múltipla escolha convertido para C/E: a assertiva reescreve a alternativa 'B'",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Conforme a mais recente estrutura conceitual da contabilidade, o balanço patrimonial representa de forma exata a realidade da entidade.",
    gabarito: "E",
    pegadinha: "termo-absoluto",
    palavraChave: "de forma exata",
    cognitivo: {
      motivo: "Reconhecer o ponto: balanço não é retrato exato.",
      palavraCritica: "de forma exata",
    },
    comentario: {
      resolucao: "ERRADO. Pela Estrutura Conceitual, as demonstrações dependem de estimativas e julgamentos, por isso não representam a realidade de forma exata (CPC 00, itens 2.18 e 2.19). A alternativa correta da questão original o descrevia como retrato estático de eventos passados.",
      fundamento: "CPC 00 (R2), itens 1.11 e 2.18.",
      macete: "Contabilidade usa estimativas.",
      erroComum: "Achar que o balanço é exato.",
      comoBancaPensa: "Usa absoluto.",
    },
  },

  {
    ...BASE115,
    id: "CT-272", assunto: "Balanço patrimonial",
    subassunto: "Contrato de importação irretratável — sem registro no caixa",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material; item de múltipla escolha convertido para C/E: a assertiva reescreve a alternativa 'C'",
    dificuldade: 3, tempoIdealSeg: 60,
    enunciado: "Entidade que assina contrato irretratável de importação de equipamento, com desconto significativo concedido pelo exportador e pagamento previsto para o desembarque em 90 dias, deve registrar a operação, nessa data, na conta caixa.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "no caixa",
    cognitivo: {
      motivo: "Reconhecer o ponto: contrato de importação irretratável — sem registro no caixa.",
      palavraCritica: "no caixa",
    },
    comentario: {
      resolucao: "ERRADO. No momento descrito não houve pagamento, porque ele ocorrerá no desembarque, logo não há registro no caixa. Segundo o gabarito do material, o contrato irretratável com desconto significativo gera registro no passivo exigível (obrigação assumida).",
      fundamento: "CPC 00 (R2), cap. 4 (passivo); doutrina.",
      macete: "Sem desembolso, não mexe no caixa.",
      erroComum: "Registrar saída de caixa antes do pagamento.",
      comoBancaPensa: "Antecipa o pagamento.",
    },
  },

  /* ===== DEMONSTRAÇÃO DO RESULTADO ===== */

  {
    ...BASE115,
    id: "CT-273", assunto: "Demonstração do Resultado",
    subassunto: "Participações de empregados e administradores na DRE",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A respeito das demonstrações contábeis, julgue o item que se segue, conforme a legislação societária e os pronunciamentos técnicos do CPC. Devem ser discriminados, na demonstração de resultados do exercício, os valores referentes às participações dos empregados e dos administradores no resultado do período.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "participações dos empregados e dos administradores",
    cognitivo: {
      motivo: "Reconhecer o ponto: participações de empregados e administradores na DRE.",
      palavraCritica: "participações dos empregados e dos administradores",
    },
    comentario: {
      resolucao: "CERTO. O art. 187, VI, manda discriminar na DRE as participações de debêntures, empregados, administradores e partes beneficiárias.",
      fundamento: "Lei 6.404/1976, art. 187, VI.",
      macete: "DEAPF: debêntures, empregados, administradores, partes beneficiárias, fundos.",
      erroComum: "Achar que vão direto ao PL.",
      comoBancaPensa: "Reproduz a lei.",
    },
  },

  {
    ...BASE115,
    id: "CT-274", assunto: "Demonstração do Resultado",
    subassunto: "Receitas sem realização em moeda",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "A respeito da contabilização das operações e da forma como elas devem ser refletidas no balanço patrimonial e na demonstração do resultado do exercício, julgue o item que se segue. Receitas financeiras que não tiverem sido objeto de realização em moeda não devem ser consideradas para fins de determinação do lucro ou prejuízo evidenciado na demonstração do resultado do exercício.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "realização em moeda",
    cognitivo: {
      motivo: "Reconhecer o ponto: receitas sem realização em moeda.",
      palavraCritica: "realização em moeda",
    },
    comentario: {
      resolucao: "ERRADO. Pela competência, as receitas entram na DRE quando ganhas, independentemente de realização em moeda (art. 187, § 1º, 'a'). Receitas financeiras apropriadas e ainda não recebidas compõem o resultado.",
      fundamento: "Lei 6.404/1976, art. 187, § 1º.",
      macete: "Receita ganha entra, recebida ou não.",
      erroComum: "Exigir recebimento.",
      comoBancaPensa: "Aplica lógica de caixa.",
    },
  },

  {
    ...BASE115,
    id: "CT-275", assunto: "Demonstração do Resultado",
    subassunto: "Custos na DRE — depende da apresentação",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 50,
    enunciado: "No que concerne às demonstrações contábeis e aos relatórios contábeis- financeiros, julgue o próximo item, de acordo com os pronunciamentos técnicos do Comitê de Pronunciamentos Contábeis (CPC). Em uma demonstração do resultado do exercício, são encontrados valores que expressam receitas, despesas e custos de produtos ou mercadorias.",
    gabarito: "E",
    pegadinha: "generalizacao",
    palavraChave: "custos de produtos ou mercadorias",
    cognitivo: {
      motivo: "Reconhecer o ponto: custos na DRE — depende da apresentação.",
      palavraCritica: "custos de produtos ou mercadorias",
    },
    comentario: {
      resolucao: "ERRADO, segundo o gabarito. A DRE apresenta receitas e despesas. A linha de custo dos produtos ou mercadorias vendidos aparece na DRE por função, mas não na DRE pela natureza das despesas (CPC 26, itens 102 e 103). O professor anotou 'depende' para indicar que a afirmação genérica não vale para toda DRE.",
      fundamento: "CPC 26 (R1), itens 99 a 105.",
      macete: "Por função tem CMV; por natureza, não.",
      erroComum: "Tomar um formato como regra.",
      comoBancaPensa: "Generaliza um formato.",
    },
  },

  {
    ...BASE115,
    id: "CT-276", assunto: "Demonstração do Resultado",
    subassunto: "Resultado por competência",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Em relação à elaboração das demonstrações contábeis, julgue o item seguinte, considerando a legislação societária e a normatização contábil vigentes. O resultado do exercício social evidenciado na demonstração do resultado do exercício é obtido pelo confronto entre as receitas e rendimentos auferidos e as despesas e perdas incorridas, independentemente de ter havido qualquer movimentação de caixa.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "independentemente de ter havido qualquer movimentação de caixa",
    cognitivo: {
      motivo: "Reconhecer o ponto: resultado por competência.",
      palavraCritica: "independentemente de ter havido qualquer movimentação de caixa",
    },
    comentario: {
      resolucao: "CERTO. O resultado é obtido pelo confronto de receitas e rendimentos ganhos com despesas e perdas incorridas, independentemente do caixa (art. 187, § 1º).",
      fundamento: "Lei 6.404/1976, art. 187, § 1º.",
      macete: "DRE: competência.",
      erroComum: "Achar que depende do caixa.",
      comoBancaPensa: "Reproduz a lei.",
    },
  },

  {
    ...BASE115,
    id: "CT-277", assunto: "Demonstração do Resultado",
    subassunto: "Receita líquida",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "Julgue o item a seguir, no que se refere a balancete de verificação contábil, balanço patrimonial e demonstração de resultado do exercício. Na demonstração de resultados do exercício, a receita líquida corresponde à receita bruta menos as deduções, tais como devoluções de venda, impostos sobre vendas e descontos comerciais.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "receita bruta menos as deduções",
    cognitivo: {
      motivo: "Reconhecer o ponto: receita líquida.",
      palavraCritica: "receita bruta menos as deduções",
    },
    comentario: {
      resolucao: "CERTO. Receita líquida = receita bruta − deduções (devoluções, abatimentos, descontos incondicionais e tributos sobre vendas).",
      fundamento: "Lei 6.404/1976, art. 187, I.",
      macete: "Bruta − deduções = líquida.",
      erroComum: "Esquecer os tributos.",
      comoBancaPensa: "Reproduz a estrutura.",
    },
  },

  {
    ...BASE115,
    id: "CT-278", assunto: "Demonstração do Resultado",
    subassunto: "Participações de debenturistas e empregados",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "No que se refere à demonstração de resultado de exercício (DRE), julgue o item a seguir. As participações de debenturistas e de empregados devem ser evidenciadas na DRE.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "debenturistas",
    cognitivo: {
      motivo: "Reconhecer o ponto: participações de debenturistas e empregados.",
      palavraCritica: "debenturistas",
    },
    comentario: {
      resolucao: "CERTO. As participações de debenturistas e de empregados figuram na DRE, depois do resultado antes das participações (art. 187, VI).",
      fundamento: "Lei 6.404/1976, art. 187, VI.",
      macete: "Participações: na DRE.",
      erroComum: "Mandá-las ao PL.",
      comoBancaPensa: "Reproduz a lei.",
    },
  },

  {
    ...BASE115,
    id: "CT-279", assunto: "Demonstração do Resultado",
    subassunto: "ICMS sobre vendas — dedução da receita",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "Em relação à contabilização dos tributos incidentes nas operações de empresas, julgue o item seguinte. O ICMS sobre vendas deve ser reconhecido como despesa operacional da empresa.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "despesa operacional",
    cognitivo: {
      motivo: "Reconhecer o ponto: iCMS sobre vendas — dedução da receita.",
      palavraCritica: "despesa operacional",
    },
    comentario: {
      resolucao: "ERRADO. O ICMS sobre vendas é dedução da receita bruta (tributo sobre vendas), e não despesa operacional.",
      fundamento: "Lei 6.404/1976, art. 187, I; CPC 47.",
      macete: "Tributo sobre venda: dedução.",
      erroComum: "Lançar como despesa.",
      comoBancaPensa: "Troca a classificação.",
    },
  },

  {
    ...BASE115,
    id: "CT-280", assunto: "Demonstração do Resultado",
    subassunto: "IR e CSLL só havendo lucro tributável",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "Em relação à contabilização dos tributos incidentes nas operações de empresas, julgue o item seguinte. O imposto sobre a renda da pessoa jurídica (IRPJ) e a contribuição social sobre o lucro líquido (CSLL) devem sempre ser registrados como despesas do exercício, independentemente de haver lucro tributável.",
    gabarito: "E",
    pegadinha: "termo-absoluto",
    palavraChave: "independentemente de haver lucro tributável",
    cognitivo: {
      motivo: "Reconhecer o ponto: iR e CSLL só havendo lucro tributável.",
      palavraCritica: "independentemente de haver lucro tributável",
    },
    comentario: {
      resolucao: "ERRADO. IRPJ e CSLL correntes são reconhecidos como despesa quando há lucro tributável (base). Sem base positiva, não há tributo corrente. A palavra 'sempre' torna o item falso.",
      fundamento: "CPC 32; legislação do IR.",
      macete: "Sem lucro tributável, sem IR corrente.",
      erroComum: "Achar que o IR é fixo.",
      comoBancaPensa: "Usa 'sempre'.",
    },
  },

  {
    ...BASE115,
    id: "CT-281", assunto: "Demonstração do Resultado",
    subassunto: "DRE começa na receita bruta",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 40,
    enunciado: "Em relação a demonstrações contábeis previstas na legislação societária e(ou) na normatização contábil brasileira, julgue o item subsecutivo. Por força de lei, a demonstração do resultado do exercício deve ser iniciada pela receita líquida de vendas, apresentando-se, na sequência, os custos incorridos para a geração dessa receita, o que resulta no lucro bruto.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "iniciada pela receita líquida",
    cognitivo: {
      motivo: "Reconhecer o ponto: dRE começa na receita bruta.",
      palavraCritica: "iniciada pela receita líquida",
    },
    comentario: {
      resolucao: "ERRADO. Pelo art. 187, I, a DRE começa pela receita BRUTA das vendas e serviços, as deduções, os abatimentos e os impostos, para chegar à receita líquida.",
      fundamento: "Lei 6.404/1976, art. 187, I.",
      macete: "DRE legal: receita bruta primeiro.",
      erroComum: "Começar pela líquida.",
      comoBancaPensa: "Pula a primeira linha.",
    },
  },

  {
    ...BASE115,
    id: "CT-282", assunto: "Demonstração do Resultado",
    subassunto: "DRE — demonstração dinâmica",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "Em relação ao balanço patrimonial e à demonstração de resultado do exercício (DRE), julgue o item a seguir. A DRE é uma demonstração dinâmica que relata, de forma dedutiva, como o resultado do exercício foi obtido.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "demonstração dinâmica",
    cognitivo: {
      motivo: "Reconhecer o ponto: dRE — demonstração dinâmica.",
      palavraCritica: "demonstração dinâmica",
    },
    comentario: {
      resolucao: "CERTO. A DRE é dinâmica: mostra os fluxos de receitas e despesas de um período, de forma dedutiva, até chegar ao resultado. O balanço é estático (posição em uma data).",
      fundamento: "Doutrina contábil.",
      macete: "DRE = filme; BP = foto.",
      erroComum: "Inverter.",
      comoBancaPensa: "Reproduz o conceito.",
    },
  },

  {
    ...BASE115,
    id: "CT-283", assunto: "Demonstração do Resultado",
    subassunto: "Abatimentos — deduzidos da receita bruta",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material; item de múltipla escolha convertido para C/E: a assertiva reescreve a alternativa 'B'",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Na DRE definida pela legislação societária, os abatimentos concedidos a clientes por pequenos defeitos nas mercadorias vendidas são deduzidos da receita bruta para o cálculo da receita líquida de vendas.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "receita bruta de vendas",
    cognitivo: {
      motivo: "Reconhecer o ponto: abatimentos — deduzidos da receita bruta.",
      palavraCritica: "receita bruta de vendas",
    },
    comentario: {
      resolucao: "CERTO. Abatimentos por defeitos nas mercadorias são deduzidos da receita bruta para obter a receita líquida (art. 187, I).",
      fundamento: "Lei 6.404/1976, art. 187, I.",
      macete: "Abatimento: dedução da bruta.",
      erroComum: "Tratar como despesa de vendas.",
      comoBancaPensa: "Cobra a linha correta.",
    },
  },

  {
    ...BASE115,
    id: "CT-284", assunto: "Demonstração do Resultado",
    subassunto: "Operações descontinuadas na DRE",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material; item de múltipla escolha convertido para C/E: a assertiva reescreve a alternativa 'B'",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Segundo as Normas Brasileiras de Contabilidade, a DRE deve apresentar os resultados das operações em continuidade, deixando de evidenciar as operações descontinuadas.",
    gabarito: "E",
    pegadinha: "restricao-indevida",
    palavraChave: "deixando de evidenciar operações descontinuadas",
    cognitivo: {
      motivo: "Reconhecer o ponto: operações descontinuadas na DRE.",
      palavraCritica: "deixando de evidenciar operações descontinuadas",
    },
    comentario: {
      resolucao: "ERRADO. A DRE deve evidenciar o resultado das operações descontinuadas em linha própria (CPC 26, item 82; CPC 31). A alternativa correta da questão original falava das contas de resultado abrangente que afetam a posição patrimonial dos sócios.",
      fundamento: "CPC 26 (R1), item 82; CPC 31.",
      macete: "Descontinuadas: linha própria.",
      erroComum: "Omitir as descontinuadas.",
      comoBancaPensa: "Exclui item obrigatório.",
    },
  },

  {
    ...BASE115,
    id: "CT-285", assunto: "Demonstração do Resultado",
    subassunto: "Lucro bruto = receita líquida − CMV",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material; item de múltipla escolha convertido para C/E: a assertiva reescreve a alternativa 'A'",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Na empresa comercial, o custo das mercadorias vendidas é deduzido das receitas líquidas para obter o lucro bruto do período.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "custo das mercadorias vendidas",
    cognitivo: {
      motivo: "Reconhecer o ponto: lucro bruto = receita líquida − CMV.",
      palavraCritica: "custo das mercadorias vendidas",
    },
    comentario: {
      resolucao: "CERTO. Na empresa comercial, lucro bruto = receita líquida − custo das mercadorias vendidas (art. 187, II).",
      fundamento: "Lei 6.404/1976, art. 187, II.",
      macete: "Receita líquida − CMV = lucro bruto.",
      erroComum: "Deduzir despesas de vendas antes.",
      comoBancaPensa: "Reproduz a estrutura.",
    },
  },

  {
    ...BASE115,
    id: "CT-286", assunto: "Demonstração do Resultado",
    subassunto: "Cálculo do lucro",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material; item de múltipla escolha convertido para C/E: a assertiva reescreve a alternativa 'D'",
    dificuldade: 2, tempoIdealSeg: 80,
    enunciado: "Uma empresa registrou: receita de vendas R$ 60.000; despesas de água, luz e telefone R$ 22.000; descontos concedidos R$ 3.000; reversão de provisões R$ 4.200; manutenção R$ 1.450; e perdas de estoque R$ 2.300. O lucro do exercício foi de R$ 35.450.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "R$ 35.450,00",
    cognitivo: {
      motivo: "Reconhecer o ponto: cálculo do lucro.",
      palavraCritica: "R$ 35.450,00",
    },
    comentario: {
      resolucao: "CERTO. Receita 60.000 − descontos 3.000 = 57.000. Menos despesas (22.000 + 1.450 + 2.300 = 25.750) = 31.250. Mais reversão de provisões 4.200 = 35.450.",
      fundamento: "Estrutura da DRE.",
      macete: "Reversão de provisão soma.",
      erroComum: "Esquecer a reversão.",
      comoBancaPensa: "Exige somar e subtrair corretamente.",
    },
  },

  {
    ...BASE115,
    id: "CT-287", assunto: "Demonstração do Resultado",
    subassunto: "Doação recebida e baixa de bem",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material; item de múltipla escolha convertido para C/E: a assertiva reescreve a alternativa 'E'",
    dificuldade: 2, tempoIdealSeg: 80,
    enunciado: "Uma empresa registrou: receita de vendas R$ 40.000; despesas de pessoal R$ 32.000; descontos recebidos R$ 2.000; recebimento de bem em doação R$ 28.000; despesas de água, luz e telefone R$ 6.000; e baixa de bem inservível R$ 14.000. O resultado foi lucro de R$ 18.000.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "lucro de R$ 18.000",
    cognitivo: {
      motivo: "Reconhecer o ponto: doação recebida e baixa de bem.",
      palavraCritica: "lucro de R$ 18.000",
    },
    comentario: {
      resolucao: "CERTO. 40.000 − 32.000 + 2.000 (descontos obtidos) + 28.000 (doação recebida, receita) − 6.000 − 14.000 (baixa de bem inservível, perda) = 18.000.",
      fundamento: "Estrutura da DRE; CPC 07 (doações).",
      macete: "Doação recebida = receita.",
      erroComum: "Esquecer a doação ou a baixa.",
      comoBancaPensa: "Mistura eventos menos comuns.",
    },
  },

  {
    ...BASE115,
    id: "CT-288", assunto: "Demonstração do Resultado",
    subassunto: "Ordem das participações",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material; item de múltipla escolha convertido para C/E: a assertiva reescreve a alternativa 'E'",
    dificuldade: 3, tempoIdealSeg: 50,
    enunciado: "Na ordem legal de cálculo das participações no lucro da sociedade por ações, a participação do empregado é calculada antes da do administrador e da parte beneficiária.",
    gabarito: "C",
    pegadinha: "troca-sujeito",
    palavraChave: "empregado",
    cognitivo: {
      motivo: "Reconhecer o ponto: ordem das participações.",
      palavraCritica: "empregado",
    },
    comentario: {
      resolucao: "CERTO. Pela Lei 6.404 (arts. 189 e 190), as participações são calculadas sucessivamente: debêntures, empregados, administradores e partes beneficiárias. Entre as opções da questão original, o empregado tem prioridade.",
      fundamento: "Lei 6.404/1976, arts. 189 a 190.",
      macete: "Ordem DEAPF.",
      erroComum: "Pôr o administrador antes.",
      comoBancaPensa: "Cobra a ordem.",
    },
  },

  {
    ...BASE115,
    id: "CT-289", assunto: "Demonstração do Resultado",
    subassunto: "ICMS recuperável na compra — ativo",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material; item de múltipla escolha convertido para C/E: a assertiva reescreve a alternativa 'E'",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "O ICMS incidente sobre a compra de mercadorias para revenda é reconhecido pela adquirente no ativo, como direito junto ao fisco estadual ou do Distrito Federal.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "direito junto ao fisco",
    cognitivo: {
      motivo: "Reconhecer o ponto: iCMS recuperável na compra — ativo.",
      palavraCritica: "direito junto ao fisco",
    },
    comentario: {
      resolucao: "CERTO. Na compra de mercadorias para revenda por contribuinte do ICMS, o imposto é recuperável e registrado no ativo (ICMS a recuperar), e não no custo nem em despesa.",
      fundamento: "CPC 16, item 11.",
      macete: "ICMS recuperável: ativo.",
      erroComum: "Somá-lo ao custo.",
      comoBancaPensa: "Cobra o registro do tributo recuperável.",
    },
  },

  /* ===== ESTOQUES E MERCADORIAS ===== */

  {
    ...BASE115,
    id: "CT-290", assunto: "Estoques",
    subassunto: "Valor realizável líquido inferior ao custo",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material; item de múltipla escolha convertido para C/E: a assertiva reescreve a alternativa 'C'",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Segundo o CPC 16, quando o valor realizável líquido de um estoque fica abaixo do seu custo, a entidade deve ajustar o estoque ao valor realizável líquido, reconhecendo a perda.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "valor realizável líquido",
    cognitivo: {
      motivo: "Reconhecer o ponto: valor realizável líquido inferior ao custo.",
      palavraCritica: "valor realizável líquido",
    },
    comentario: {
      resolucao: "CERTO. Pelo CPC 16 (item 9), os estoques são mensurados pelo menor entre custo e valor realizável líquido. Se o VRL cai abaixo do custo, ajusta-se o estoque e reconhece-se a perda.",
      fundamento: "CPC 16, itens 9 e 28 a 33.",
      macete: "Menor entre custo e VRL.",
      erroComum: "Usar valor de mercado.",
      comoBancaPensa: "Cobra o critério do CPC.",
    },
  },

  {
    ...BASE115,
    id: "CT-291", assunto: "Estoques",
    subassunto: "Desperdício normal x anormal",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "Julgue o próximo item à luz dos pronunciamentos técnicos do CPC. Os custos dos estoques produzidos por uma entidade não devem contemplar quaisquer espécies de gasto que decorram do desperdício de materiais, de mão de obra ou de outros insumos de produção.",
    gabarito: "E",
    pegadinha: "termo-absoluto",
    palavraChave: "quaisquer espécies",
    cognitivo: {
      motivo: "Reconhecer o ponto: desperdício normal x anormal.",
      palavraCritica: "quaisquer espécies",
    },
    comentario: {
      resolucao: "ERRADO. Só os desperdícios ANORMAIS de materiais, mão de obra ou outros insumos são excluídos do custo e vão a despesa (CPC 16, item 16, 'a'). Perdas normais do processo integram o custo.",
      fundamento: "CPC 16, item 16.",
      macete: "Anormal: despesa. Normal: custo.",
      erroComum: "Excluir todo desperdício.",
      comoBancaPensa: "Generaliza a exclusão.",
    },
  },

  {
    ...BASE115,
    id: "CT-292", assunto: "Estoques",
    subassunto: "Outros custos — local e condição atuais",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 40,
    enunciado: "Considerando os pronunciamentos técnicos do Comitê de Pronunciamentos Contábeis (CPC), julgue o item seguinte. Um custo que não seja de aquisição nem de transformação somente deve ser incluído nos custos dos estoques se tiver sido incorrido para colocar os referidos ativos no seu local e na sua condição atuais.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "local e na sua condição atuais",
    cognitivo: {
      motivo: "Reconhecer o ponto: outros custos — local e condição atuais.",
      palavraCritica: "local e na sua condição atuais",
    },
    comentario: {
      resolucao: "CERTO. Outros custos só entram no estoque se incorridos para trazê-lo ao local e à condição atuais (CPC 16, item 15).",
      fundamento: "CPC 16, item 15.",
      macete: "Custo do estoque: até deixá-lo pronto.",
      erroComum: "Incluir despesas de venda.",
      comoBancaPensa: "Reproduz o CPC.",
    },
  },

  {
    ...BASE115,
    id: "CT-293", assunto: "Estoques",
    subassunto: "Venda a prazo — dois lançamentos",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "A respeito da contabilização das operações e da forma como elas devem ser refletidas no balanço patrimonial e na demonstração do resultado do exercício, julgue o item que se segue. Vendas de mercadorias a prazo, cujos direitos se façam representar por duplicatas, devem provocar as seguintes movimentações em contas patrimoniais e de resultado da empresa que efetuou as vendas: um débito na conta “custo das mercadorias vendidas”, um crédito na conta “estoques de mercadorias”, um débito na conta “duplicatas a receber” e um crédito na conta “receita de vendas”.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "custo das mercadorias vendidas",
    cognitivo: {
      motivo: "Reconhecer o ponto: venda a prazo — dois lançamentos.",
      palavraCritica: "custo das mercadorias vendidas",
    },
    comentario: {
      resolucao: "CERTO. Na venda a prazo com inventário permanente: D duplicatas a receber, C receita de vendas; e D CMV, C estoques de mercadorias.",
      fundamento: "Doutrina contábil (inventário permanente).",
      macete: "Venda: receita + baixa do estoque.",
      erroComum: "Esquecer o CMV.",
      comoBancaPensa: "Reproduz os lançamentos.",
    },
  },

  {
    ...BASE115,
    id: "CT-294", assunto: "Estoques",
    subassunto: "Despesas de venda não entram no custo",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material; item de múltipla escolha convertido para C/E: a assertiva reescreve a alternativa 'D'",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Para mitigar o risco de superavaliação de estoques, é adequado capitalizar despesas de venda, publicidade e comissões no custo dos estoques.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "capitalizar despesas de venda",
    cognitivo: {
      motivo: "Reconhecer o ponto: despesas de venda não entram no custo.",
      palavraCritica: "capitalizar despesas de venda",
    },
    comentario: {
      resolucao: "ERRADO. Despesas de venda, publicidade e comissões não integram o custo dos estoques (CPC 16, item 16, 'd'). Capitalizá-las superavalia o estoque. A prática correta é incluir frete, seguro e impostos não recuperáveis e observar o menor entre custo e VRL.",
      fundamento: "CPC 16, itens 11 e 16.",
      macete: "Despesa de venda: fora do custo.",
      erroComum: "Capitalizar despesas comerciais.",
      comoBancaPensa: "Propõe prática que superavalia.",
    },
  },

  {
    ...BASE115,
    id: "CT-295", assunto: "Estoques",
    subassunto: "Estoques — bens tangíveis ou intangíveis",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 45,
    enunciado: "Julgue o item a seguir, referente a estoques. Estoques são compostos por bens tangíveis ou intangíveis destinados à venda ou à utilização na atividade-fim da entidade.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "tangíveis ou intangíveis",
    cognitivo: {
      motivo: "Reconhecer o ponto: estoques — bens tangíveis ou intangíveis.",
      palavraCritica: "tangíveis ou intangíveis",
    },
    comentario: {
      resolucao: "CERTO, segundo o gabarito. Estoques são ativos mantidos para venda, em produção para venda ou como materiais para consumo na produção ou na prestação de serviços (CPC 16, item 6). Podem incluir intangíveis destinados à venda, como softwares de prateleira. O professor anotou a remissão ao CPC 04 para o caso dos intangíveis.",
      fundamento: "CPC 16, itens 6 e 8; CPC 04.",
      macete: "Estoque = destinado à venda ou ao consumo.",
      erroComum: "Achar que só bens físicos são estoque.",
      comoBancaPensa: "Cobra a amplitude do conceito.",
    },
  },

  {
    ...BASE115,
    id: "CT-296", assunto: "Estoques",
    subassunto: "Obsolescência e estoque",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 40,
    enunciado: "A respeito da avaliação e mensuração de itens patrimoniais ativos e passivos, julgue o item subsequente. A obsolescência pode ser um fator de desclassificação de um ativo como estoque.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "obsolescência",
    cognitivo: {
      motivo: "Reconhecer o ponto: obsolescência e estoque.",
      palavraCritica: "obsolescência",
    },
    comentario: {
      resolucao: "CERTO. A obsolescência pode tirar do item a condição de estoque utilizável ou vendável e exigir a baixa ou a redução ao VRL (CPC 16, item 28).",
      fundamento: "CPC 16, item 28.",
      macete: "Obsoleto: ajuste ou baixa.",
      erroComum: "Desconfiar do item.",
      comoBancaPensa: "Reproduz o efeito.",
    },
  },

  {
    ...BASE115,
    id: "CT-297", assunto: "Estoques",
    subassunto: "Composição dos estoques",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "Julgue o item a seguir, a respeito do conceito, da classificação e dos critérios de avaliação de estoques. As contas de estoque de uma entidade podem ser constituídas tanto por bens prontos destinados à venda como por bens em processo de fabricação ou insumos para a produção.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "bens em processo de fabricação",
    cognitivo: {
      motivo: "Reconhecer o ponto: composição dos estoques.",
      palavraCritica: "bens em processo de fabricação",
    },
    comentario: {
      resolucao: "CERTO. Estoques abrangem produtos acabados, produtos em elaboração e matérias-primas e insumos (CPC 16, item 6).",
      fundamento: "CPC 16, item 6.",
      macete: "Acabado, em elaboração, insumo.",
      erroComum: "Restringir a produtos prontos.",
      comoBancaPensa: "Reproduz o conceito.",
    },
  },

  {
    ...BASE115,
    id: "CT-298", assunto: "Estoques",
    subassunto: "Custo específico — itens individualizáveis",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 40,
    enunciado: "Julgue o item a seguir, a respeito do conceito, da classificação e dos critérios de avaliação de estoques. Em uma revenda de automóveis, um critério adequado de avaliação de um item em estoque é o custo específico desse item.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "custo específico",
    cognitivo: {
      motivo: "Reconhecer o ponto: custo específico — itens individualizáveis.",
      palavraCritica: "custo específico",
    },
    comentario: {
      resolucao: "CERTO. Para itens não intercambiáveis, como automóveis com número de chassi, usa-se o custo específico de cada item (CPC 16, item 23).",
      fundamento: "CPC 16, itens 23 e 24.",
      macete: "Item único: custo específico.",
      erroComum: "Aplicar PEPS a veículos únicos.",
      comoBancaPensa: "Cobra a regra de identificação específica.",
    },
  },

  {
    ...BASE115,
    id: "CT-299", assunto: "Estoques",
    subassunto: "VRL, não valor de mercado",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "Julgue o item a seguir, a respeito do conceito, da classificação e dos critérios de avaliação de estoques. Para mensuração do valor do estoque, deve-se utilizar a regra do menor valor dentre o valor de custo e o valor de mercado.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "valor de mercado",
    cognitivo: {
      motivo: "Reconhecer o ponto: vRL, não valor de mercado.",
      palavraCritica: "valor de mercado",
    },
    comentario: {
      resolucao: "ERRADO, segundo o gabarito. Pelo CPC 16, a mensuração é pelo menor entre custo e valor realizável líquido, e não 'valor de mercado'. A Lei 6.404 (art. 183, II) ainda fala em valor de mercado, mas o CPC usa o VRL.",
      fundamento: "CPC 16, item 9; Lei 6.404/1976, art. 183, II.",
      macete: "CPC: custo x VRL.",
      erroComum: "Usar 'valor de mercado'.",
      comoBancaPensa: "Troca o critério.",
    },
  },

  {
    ...BASE115,
    id: "CT-300", assunto: "Estoques",
    subassunto: "ICMS na compra não é despesa",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material; item de múltipla escolha convertido para C/E: a assertiva reescreve a alternativa 'B'",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "A sociedade anônima comercial deve reconhecer como despesa, no momento de sua ocorrência, o ICMS incidente sobre a compra de mercadorias para revenda.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "ICMS incidente sobre a compra",
    cognitivo: {
      motivo: "Reconhecer o ponto: iCMS na compra não é despesa.",
      palavraCritica: "ICMS incidente sobre a compra",
    },
    comentario: {
      resolucao: "ERRADO. O ICMS recuperável na compra de mercadorias é ativo (ICMS a recuperar), e não despesa. Na questão original, a despesa reconhecida no momento da ocorrência era o consumo de material de expediente.",
      fundamento: "CPC 16, item 11.",
      macete: "ICMS recuperável: ativo.",
      erroComum: "Lançar como despesa.",
      comoBancaPensa: "Troca a natureza.",
    },
  },

  {
    ...BASE115,
    id: "CT-301", assunto: "Estoques",
    subassunto: "Caminhão baú — último a entrar sai primeiro",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "Acerca da previsão e controle de estoque, julgue o item que se segue. O método de armazenagem de estoque para veículo do tipo primeiro que entra é o primeiro que sai (PEPS) é usado no gerenciamento de estoque de um caminhão baú tradicional que sai para a entrega do dia de produtos classificados como materiais de escritórios.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "PEPS",
    cognitivo: {
      motivo: "Reconhecer o ponto: caminhão baú — último a entrar sai primeiro.",
      palavraCritica: "PEPS",
    },
    comentario: {
      resolucao: "ERRADO. No caminhão baú tradicional, carregado pelo fundo, o último volume a entrar é o primeiro a sair, lógica UEPS (LIFO) na movimentação física. O PEPS não descreve essa armazenagem.",
      fundamento: "Doutrina de administração de materiais.",
      macete: "Baú: último a entrar, primeiro a sair.",
      erroComum: "Aplicar PEPS a toda armazenagem.",
      comoBancaPensa: "Usa um exemplo físico.",
    },
  },

  {
    ...BASE115,
    id: "CT-302", assunto: "Estoques",
    subassunto: "Valor de realização x valor de mercado",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 45,
    enunciado: "No que diz respeito ao conceito e ao tratamento de itens patrimoniais ativos e passivos, julgue o item que segue. O montante dos estoques registrados no balanço não pode exceder o valor de realização desses ativos, devendo ser adotado o menor desses dois valores caso o valor do custo seja superior ao valor de mercado.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "valor de mercado",
    cognitivo: {
      motivo: "Reconhecer o ponto: valor de realização x valor de mercado.",
      palavraCritica: "valor de mercado",
    },
    comentario: {
      resolucao: "ERRADO, segundo o gabarito. A regra correta é o menor entre custo e valor realizável líquido (CPC 16). O item mistura 'valor de realização' com 'valor de mercado' como se fossem a mesma medida, e o professor marcou a troca.",
      fundamento: "CPC 16, item 9.",
      macete: "Menor entre custo e VRL.",
      erroComum: "Igualar VRL e valor de mercado.",
      comoBancaPensa: "Mistura conceitos.",
    },
  },

  {
    ...BASE115,
    id: "CT-303", assunto: "Estoques",
    subassunto: "Compra com IPI e ICMS recuperáveis",
    origem: "CESPE/CEBRASPE (prova não identificada no caderno) — QAP DSO (Contabilidade), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "A respeito da contabilização de operações contábeis diversas, julgue o item seguinte. Considere que uma indústria, contribuinte do imposto sobre produtos industrializados (IPI) e do imposto sobre circulação de mercadorias e serviços (ICMS), tenha adquirido a prazo R$ 73 mil em matérias-primas para industrialização, incorrendo em R$ 10 mil de IPI e R$ 17 mil de ICMS, com frete por conta do fornecedor. Nessa situação, para espelhar a referida transação na sua contabilidade, a entidade deve contabilizar conforme apresentado a seguir. Diversos Estoque de matérias-primas – R$ 73 mil IPI a recuperar – R$ 10 mil ICMS a recuperar – R$ 17 mil A fornecedores – R$ 100 mil",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "IPI a recuperar",
    cognitivo: {
      motivo: "Reconhecer o ponto: compra com IPI e ICMS recuperáveis.",
      palavraCritica: "IPI a recuperar",
    },
    comentario: {
      resolucao: "CERTO. A indústria contribuinte de IPI e ICMS recupera ambos: D estoque de matérias-primas 73, D IPI a recuperar 10, D ICMS a recuperar 17, C fornecedores 100. O total da nota (90 com ICMS por dentro + 10 de IPI) é a obrigação.",
      fundamento: "CPC 16, item 11; legislação do IPI e do ICMS.",
      macete: "Contribuinte recupera IPI e ICMS.",
      erroComum: "Somar tributos ao estoque.",
      comoBancaPensa: "Cobra lançamento de 3ª fórmula (vários débitos, um crédito).",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE115);
