/* =====================================================================
   QUESTLAB — Lote 63: CONTAS, PLANO DE CONTAS E REGIMES CONTÁBEIS

   Contabilidade e Análise Financeira era a segunda maior lacuna
   proporcional da trilha PC-AL: 34 questões para uma disciplina que vale
   ~7,8 itens da prova (6,5% dela), ou seja, 3,7 pontos percentuais abaixo
   do proporcional. Este lote leva a disciplina a 74 itens.

   PROCEDÊNCIA. O material de curso fornecido traz questões REAIS do
   CESPE/CEBRASPE sobre contas, plano de contas e regimes contábeis, com
   marca d'água autoral. Não reproduzi nenhuma delas — o banco é inédito
   por promessa feita ao usuário no README. O que o material entregou foi
   algo mais útil: o mapa preciso de COMO a banca formula nesses dois
   assuntos. Cada recorte abaixo foi identificado nas questões reais e
   reescrito do zero, com dados e enunciados próprios, ancorado na doutrina
   contábil e na legislação (Lei 6.404/1976, Lei 4.320/1964, CPC 00).

   OS RECORTES QUE A BANCA REPETE, extraídos daquele material:

     função × funcionamento da conta — dizer que a conta aumenta a crédito
     descreve o FUNCIONAMENTO; a função é o que ela registra. A banca troca
     um pelo outro.

     natureza do plano de contas — não é livro contábil obrigatório e não
     se registra na junta comercial; e não se resume ao elenco de contas,
     pois compreende também função, funcionamento e codificação.

     contas redutoras — são a razão pela qual ativo e passivo contêm contas
     de ambas as naturezas. Depreciação acumulada é credora dentro do
     ativo; ações em tesouraria são devedoras dentro do patrimônio líquido.

     lucros acumulados — patrimonial, do PL, e não conta de resultado. É a
     troca de classificação mais cobrada do assunto.

     regime de competência — a banca inverte a definição com a do regime de
     caixa, ou condiciona o reconhecimento ao recebimento em dinheiro, ou
     restringe a aplicação a empresas de grande porte.

   Os quatro últimos itens (CT-075..078) são CONTRAEXEMPLOS deliberados:
   restrições e exigências que parecem armadilha e são verdadeiras. Servem
   ao candidato — quebram o reflexo de marcar ERRADO diante de "somente",
   "único" e "deve" — e servem ao banco, mantendo os padrões
   "restricao-indevida" e "exigencia-inexistente" abaixo do limiar de
   previsibilidade que o validador impõe.

   44 itens: 21 CERTO / 23 ERRADO. Dificuldade 3 em 38 deles, 2 nos outros 6.
   ===================================================================== */

const QUESTOES_PCAL_LOTE63 = [
  /* ---------- Conceito e classificação das contas ---------- */
  {
    id: "CT-035", disciplina: "Contabilidade e Análise Financeira", assunto: "Contas contábeis", subassunto: "Função × funcionamento da conta",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.88,
    enunciado: "Ao estabelecer que determinada conta tem seu saldo aumentado por lançamentos a crédito e diminuído por lançamentos a débito, o plano de contas está definindo a função dessa conta.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "está definindo a função dessa conta",
    cognitivo: {
      motivo: "Separar dois conceitos do plano de contas que a banca troca sistematicamente.",
      palavraCritica: "função",
    },
    comentario: {
      resolucao: "ERRADO. O que se descreve é o FUNCIONAMENTO da conta — a mecânica de débito e crédito que faz o saldo subir ou descer. A FUNÇÃO é outra coisa: é a finalidade da conta, o que ela se destina a registrar. A conta Fornecedores tem por função registrar as obrigações com terceiros pelo fornecimento de bens e serviços; seu funcionamento é aumentar a crédito e diminuir a débito. Um responde 'para que serve', o outro 'como se movimenta'.",
      fundamento: "Doutrina contábil — estrutura do plano de contas (elenco, função, funcionamento e codificação).",
      macete: "Função = para que serve. Funcionamento = como debita e credita.",
      erroComum: "Tratar os dois termos como sinônimos por aparecerem juntos na definição do plano de contas.",
      comoBancaPensa: "Descreve corretamente um conceito e o rotula com o nome do outro."
    }
  },
  {
    id: "CT-036", disciplina: "Contabilidade e Análise Financeira", assunto: "Contas contábeis", subassunto: "Plano de contas como livro obrigatório",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.84,
    enunciado: "O plano de contas integra o rol de livros contábeis obrigatórios da entidade, devendo ser autenticado na junta comercial ao lado do livro diário.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "autenticado na junta comercial",
    cognitivo: {
      motivo: "Distinguir instrumento de organização interna de livro contábil obrigatório.",
      palavraCritica: "livros contábeis obrigatórios",
    },
    comentario: {
      resolucao: "ERRADO. O plano de contas não é livro contábil e não se sujeita a registro ou autenticação. É instrumento de organização interna da escrituração, elaborado por cada entidade conforme suas necessidades e seu ramo de atividade. Livro obrigatório por excelência é o Diário, exigido pela legislação comercial e fiscal; o Razão é auxiliar de escrituração. O plano de contas antecede os dois: é o mapa que define quais contas serão usadas e como.",
      fundamento: "Doutrina contábil — livros de escrituração; Lei 6.404/1976, art. 177.",
      macete: "Plano de contas organiza; Diário registra. Só o segundo é livro obrigatório.",
      erroComum: "Presumir formalidade de registro por se tratar de documento contábil estruturado.",
      comoBancaPensa: "Empresta ao plano de contas a formalidade que pertence aos livros de escrituração."
    }
  },
  {
    id: "CT-037", disciplina: "Contabilidade e Análise Financeira", assunto: "Contas contábeis", subassunto: "Conteúdo do plano de contas",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.8,
    enunciado: "O plano de contas de uma entidade esgota-se no elenco das contas passíveis de utilização, segregadas em devedoras ou credoras e em patrimoniais ou de resultado.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "esgota-se no elenco das contas",
    cognitivo: {
      motivo: "Cobrar os componentes do plano de contas além da simples relação de contas.",
      palavraCritica: "esgota-se",
    },
    comentario: {
      resolucao: "ERRADO. O elenco é apenas um dos componentes. O plano de contas compreende também a FUNÇÃO de cada conta (o que registra), o seu FUNCIONAMENTO (como é debitada e creditada) e a CODIFICAÇÃO que organiza a hierarquia entre contas sintéticas e analíticas. Um plano reduzido a lista de nomes não cumpriria seu papel, que é padronizar a escrituração e permitir que pessoas diferentes classifiquem o mesmo fato da mesma forma.",
      fundamento: "Doutrina contábil — estrutura e finalidade do plano de contas.",
      macete: "Elenco + função + funcionamento + codificação. O elenco sozinho não basta.",
      erroComum: "Reduzir o plano de contas à relação de contas disponíveis.",
      comoBancaPensa: "Apresenta parte verdadeira do conceito com verbo de exclusividade."
    }
  },
  {
    id: "CT-038", disciplina: "Contabilidade e Análise Financeira", assunto: "Contas contábeis", subassunto: "Contas sintéticas e analíticas",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade conceitual)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.79,
    enunciado: "Quanto ao nível de detalhamento, as contas sintéticas agrupam saldos de outras contas e não recebem lançamentos diretos, ao passo que as analíticas são as que efetivamente recebem os lançamentos da escrituração.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "analíticas são as que efetivamente recebem os lançamentos",
    cognitivo: {
      motivo: "Fixar a distinção por nível de detalhamento, base da codificação do plano de contas.",
      palavraCritica: "não recebem lançamentos diretos",
    },
    comentario: {
      resolucao: "CERTO. A conta sintética é totalizadora: seu saldo resulta da soma das contas que ela agrupa, e por isso não recebe lançamento direto. A analítica é o último nível da hierarquia e é onde a escrituração efetivamente ocorre. Exemplo: 'Disponibilidades' é sintética; 'Caixa' e 'Banco Conta Movimento' são analíticas, e é nelas que se debita e credita. Confundir os níveis leva a lançar em conta totalizadora, o que quebra a estrutura do plano.",
      fundamento: "Doutrina contábil — classificação das contas quanto ao nível de detalhamento.",
      macete: "Sintética totaliza. Analítica recebe lançamento.",
      erroComum: "Inverter os papéis por associar 'analítica' a análise e não a detalhe.",
      comoBancaPensa: "Item conceitual correto, usado como âncora antes das inversões nos itens seguintes."
    }
  },
  {
    id: "CT-039", disciplina: "Contabilidade e Análise Financeira", assunto: "Contas contábeis", subassunto: "Contas redutoras — natureza",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade conceitual)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.87,
    enunciado: "As contas redutoras apresentam natureza inversa à das demais contas do grupo em que se classificam.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "natureza inversa à das demais contas do grupo",
    cognitivo: {
      motivo: "Fixar a característica que explica a presença de saldos de ambas as naturezas no ativo e no passivo.",
      palavraCritica: "inversa",
    },
    comentario: {
      resolucao: "CERTO. A conta redutora — ou retificadora — existe para diminuir o saldo do grupo a que pertence, e por isso tem natureza contrária. Depreciação Acumulada é CREDORA e fica dentro do Ativo Imobilizado, reduzindo-o; Ações em Tesouraria é DEVEDORA e fica no Patrimônio Líquido, reduzindo-o. É essa mecânica que faz o ativo conter contas credoras, e não apenas devedoras — desdobramento cobrado com frequência.",
      fundamento: "Doutrina contábil — contas retificadoras; Lei 6.404/1976, arts. 178 a 182.",
      macete: "Redutora tem sempre a natureza contrária à do grupo que retifica.",
      erroComum: "Supor que toda conta do ativo é devedora sem exceção.",
      comoBancaPensa: "Conceito simples que serve de premissa para itens mais difíceis sobre natureza de saldos."
    }
  },
  {
    id: "CT-040", disciplina: "Contabilidade e Análise Financeira", assunto: "Contas contábeis", subassunto: "Natureza dos saldos no ativo e no passivo",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade conceitual)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "Os grupos patrimoniais ativo e passivo são compostos tanto por contas de natureza devedora quanto por contas de natureza credora.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "tanto por contas de natureza devedora quanto ... credora",
    cognitivo: {
      motivo: "Cobrar a consequência das contas redutoras sobre a composição dos grupos patrimoniais.",
      palavraCritica: "tanto ... quanto",
    },
    comentario: {
      resolucao: "CERTO, e a explicação está nas contas redutoras. A REGRA é que o ativo tenha saldo devedor e o passivo, credor; as retificadoras rompem essa uniformidade dentro de cada grupo. No ativo, Depreciação Acumulada e Provisão para Perdas de Crédito Esperadas são credoras. No passivo, Encargos Financeiros a Transcorrer é devedora, reduzindo a obrigação. Item que afirme uniformidade absoluta de natureza dentro do grupo estaria errado.",
      fundamento: "Doutrina contábil — natureza dos saldos e contas retificadoras; Lei 6.404/1976, art. 178.",
      macete: "A regra é uniforme; as redutoras são a exceção que a banca cobra.",
      erroComum: "Negar por aplicar a regra geral sem lembrar das retificadoras.",
      comoBancaPensa: "Afirma a exceção como se fosse descrição geral, punindo quem só decorou a regra."
    }
  },
  {
    id: "CT-041", disciplina: "Contabilidade e Análise Financeira", assunto: "Contas contábeis", subassunto: "Lucros acumulados — classificação",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.9,
    enunciado: "As contas de receitas e de despesas classificam-se como contas de resultado, o mesmo ocorrendo com a conta lucros ou prejuízos acumulados.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "o mesmo ocorrendo com a conta lucros ou prejuízos acumulados",
    cognitivo: {
      motivo: "Cobrar a natureza patrimonial de uma conta cujo nome sugere resultado.",
      palavraCritica: "lucros ou prejuízos acumulados",
    },
    comentario: {
      resolucao: "ERRADO. Lucros ou Prejuízos Acumulados é conta PATRIMONIAL, integrante do Patrimônio Líquido, e não conta de resultado. A distinção é de ciclo de vida: contas de resultado nascem e morrem dentro do exercício — são encerradas na apuração e não migram para o balanço; a de lucros acumulados é permanente e figura no balanço patrimonial. O nome engana porque contém a palavra 'lucros', mas ela RECEBE o resultado apurado, não o compõe.",
      fundamento: "Lei 6.404/1976, art. 178, § 2º, III, e art. 187; doutrina contábil — encerramento das contas de resultado.",
      macete: "Resultado zera no fim do exercício. Lucros acumulados fica no balanço.",
      erroComum: "Classificar pela palavra 'lucros' presente no nome da conta.",
      comoBancaPensa: "Anexa uma conta patrimonial a uma afirmação verdadeira sobre contas de resultado."
    }
  },
  {
    id: "CT-042", disciplina: "Contabilidade e Análise Financeira", assunto: "Contas contábeis", subassunto: "Saldo das contas de resultado",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade conceitual)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.82,
    enunciado: "As contas de resultado podem apresentar saldo devedor ou credor, conforme se trate de despesa ou de receita.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "devedor ou credor",
    cognitivo: {
      motivo: "Fixar que o grupo de resultado não tem natureza única.",
      palavraCritica: "conforme se trate de despesa ou de receita",
    },
    comentario: {
      resolucao: "CERTO. Despesas são devedoras e receitas são credoras — o grupo de resultado, portanto, comporta as duas naturezas, e não uma só. A lógica está no efeito sobre o patrimônio líquido: a receita o aumenta, e aumento de PL registra-se a crédito; a despesa o reduz, e redução de PL registra-se a débito. Essa mesma lógica explica por que ativo é devedor e passivo é credor, e é o que permite deduzir a natureza de qualquer conta sem decorar.",
      fundamento: "Doutrina contábil — método das partidas dobradas e natureza dos saldos.",
      macete: "Aumenta PL, credita. Reduz PL, debita. Receita e despesa seguem daí.",
      erroComum: "Atribuir natureza única ao grupo de resultado, como se faz com ativo e passivo.",
      comoBancaPensa: "Cobra a dedução da natureza a partir do efeito patrimonial."
    }
  },
  {
    id: "CT-043", disciplina: "Contabilidade e Análise Financeira", assunto: "Contas contábeis", subassunto: "Classificação em circulante e não circulante",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "Todas as contas que integram o plano de contas de uma entidade classificam-se em circulantes ou não circulantes.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "Todas as contas ... circulantes ou não circulantes",
    cognitivo: {
      motivo: "Cobrar que a segregação por prazo alcança apenas parte das contas.",
      palavraCritica: "Todas",
    },
    comentario: {
      resolucao: "ERRADO. A segregação entre circulante e não circulante é critério de PRAZO de realização ou exigibilidade, aplicável ao ativo e ao passivo. Não alcança as contas de resultado — não existe 'receita circulante' —, nem o patrimônio líquido, nem as contas de compensação. Item que estende a classificação a todo o plano de contas generaliza um critério que a própria estrutura do balanço restringe a dois grupos.",
      fundamento: "Lei 6.404/1976, art. 178, §§ 1º e 2º.",
      macete: "Circulante/não circulante é só para ativo e passivo. Resultado e PL ficam fora.",
      erroComum: "Estender ao plano inteiro um critério próprio dos grupos patrimoniais.",
      comoBancaPensa: "Aplica a todo o universo um critério verdadeiro apenas para um subconjunto."
    }
  },
  {
    id: "CT-044", disciplina: "Contabilidade e Análise Financeira", assunto: "Contas contábeis", subassunto: "Contas de compensação",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade conceitual)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.72,
    enunciado: "As contas de compensação registram atos administrativos que ainda não alteraram o patrimônio, mas que poderão vir a afetá-lo no futuro, como avais e garantias prestadas a terceiros.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ainda não alteraram o patrimônio, mas que poderão vir a afetá-lo",
    cognitivo: {
      motivo: "Fixar a função das contas de compensação e sua ligação com atos administrativos.",
      palavraCritica: "atos administrativos",
    },
    comentario: {
      resolucao: "CERTO. As contas de compensação são o registro dos ATOS administrativos — aqueles que, por si, não modificam o patrimônio, mas podem vir a modificá-lo. Aval concedido, garantia prestada, contrato de seguro firmado: nada disso altera ativo, passivo ou PL no momento em que ocorre, mas todos criam risco potencial que interessa ao usuário da informação. É a distinção clássica entre ATO e FATO administrativo: o fato altera o patrimônio, o ato não altera mas pode vir a alterar.",
      fundamento: "Doutrina contábil — atos e fatos administrativos; contas de compensação.",
      macete: "Ato pode vir a mexer no patrimônio; fato já mexeu. Compensação registra o ato.",
      erroComum: "Confundir contas de compensação com contas retificadoras.",
      comoBancaPensa: "Cobra a ponte entre a teoria dos atos administrativos e a estrutura de contas."
    }
  },

  /* ---------- Partidas dobradas e escrituração ---------- */
  {
    id: "CT-045", disciplina: "Contabilidade e Análise Financeira", assunto: "Escrituração contábil", subassunto: "Lançamento de compra à vista",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de inversão de lançamento)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.86,
    enunciado: "Uma sociedade que adquire à vista, mediante transferência bancária, um imóvel no valor de R$ 350.000 deve lançar esse valor a débito na conta bancos conta movimento e a crédito na conta imóveis, uma vez que há saída de dinheiro e entrada de um bem.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "a débito na conta bancos ... a crédito na conta imóveis",
    cognitivo: {
      motivo: "Cobrar a direção correta do lançamento em fato permutativo, com justificativa enganosa.",
      palavraCritica: "há saída de dinheiro e entrada de um bem",
    },
    comentario: {
      resolucao: "ERRADO. O lançamento está invertido: debita-se IMÓVEIS e credita-se BANCOS. A justificativa oferecida pelo item é verdadeira nos fatos — dinheiro sai, bem entra — mas conduz à conclusão contrária, porque no ativo o aumento se registra a DÉBITO e a redução a CRÉDITO. Imóveis aumentou, logo é debitada; Bancos diminuiu, logo é creditada. Trata-se de fato permutativo: troca-se um elemento do ativo por outro, sem alterar o patrimônio líquido.",
      fundamento: "Doutrina contábil — método das partidas dobradas; fatos permutativos.",
      macete: "No ativo: aumentou, debita. Diminuiu, credita.",
      erroComum: "Associar 'saída de dinheiro' a débito por analogia com o extrato bancário.",
      comoBancaPensa: "Oferece uma descrição factual correta que empurra o candidato para o lançamento invertido."
    }
  },
  {
    id: "CT-046", disciplina: "Contabilidade e Análise Financeira", assunto: "Escrituração contábil", subassunto: "Despesas antecipadas",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade conceitual)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.85,
    enunciado: "O valor pago antecipadamente por um seguro com cobertura de doze meses deve ser registrado pela contratante no ativo, na conta despesas antecipadas, e apropriado ao resultado à medida que o período de cobertura transcorre.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "registrado no ativo ... apropriado ao resultado à medida que",
    cognitivo: {
      motivo: "Fixar que pagamento antecipado gera ativo, não despesa imediata.",
      palavraCritica: "no ativo",
    },
    comentario: {
      resolucao: "CERTO. No momento do pagamento não há despesa, e sim um DIREITO: a entidade pagou e passará a receber o benefício ao longo do tempo. Por isso o registro inicial é no ativo, e a apropriação ao resultado acompanha a fluência do prazo — é aplicação direta do regime de competência. A contrapartida existe do outro lado: valor recebido antecipadamente por serviço ainda não prestado é PASSIVO (receita antecipada), porque gera obrigação de entregar. Pagou adiantado, ativo; recebeu adiantado, passivo.",
      fundamento: "Doutrina contábil — regime de competência; Lei 6.404/1976, art. 179, I.",
      macete: "Pagou antes: ativo. Recebeu antes: passivo.",
      erroComum: "Reconhecer despesa integral no desembolso, seguindo o regime de caixa.",
      comoBancaPensa: "Testa a aplicação do regime de competência num caso concreto de fluxo antecipado."
    }
  },
  {
    id: "CT-047", disciplina: "Contabilidade e Análise Financeira", assunto: "Escrituração contábil", subassunto: "Receitas antecipadas",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.81,
    enunciado: "O valor recebido de um cliente por serviço que só será prestado no exercício seguinte deve ser reconhecido como receita no momento do recebimento, por já estar disponível em caixa.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "reconhecido como receita no momento do recebimento",
    cognitivo: {
      motivo: "Cobrar a natureza de passivo do adiantamento recebido.",
      palavraCritica: "por já estar disponível em caixa",
    },
    comentario: {
      resolucao: "ERRADO. Receber dinheiro não é ganhar receita. Enquanto o serviço não é prestado, a entidade tem OBRIGAÇÃO de entregá-lo — o registro é no passivo, como receita antecipada ou adiantamento de clientes, e só migra para o resultado quando a prestação ocorrer. A justificativa do item, de que o valor já está em caixa, é exatamente o raciocínio do regime de caixa, que não é o adotado pela contabilidade societária. Note a simetria com as despesas antecipadas, que são ativo pela razão inversa.",
      fundamento: "Doutrina contábil — regime de competência; CPC 47 (reconhecimento de receita).",
      macete: "Recebeu sem entregar: passivo, não receita.",
      erroComum: "Reconhecer receita pela disponibilidade financeira.",
      comoBancaPensa: "Usa a existência do dinheiro em caixa como justificativa aparentemente irrefutável."
    }
  },
  {
    id: "CT-048", disciplina: "Contabilidade e Análise Financeira", assunto: "Escrituração contábil", subassunto: "Partidas dobradas — correspondência de valores",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.77,
    enunciado: "Pelo método das partidas dobradas, cada lançamento deve envolver necessariamente uma única conta debitada e uma única conta creditada, de modo que a soma dos débitos coincida com a dos créditos.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "uma única conta debitada e uma única conta creditada",
    cognitivo: {
      motivo: "Separar a igualdade de valores da quantidade de contas envolvidas.",
      palavraCritica: "uma única",
    },
    comentario: {
      resolucao: "ERRADO. O método exige igualdade entre a soma dos débitos e a soma dos créditos, não que haja uma conta de cada lado. Lançamentos de segunda, terceira e quarta fórmulas envolvem várias contas: uma compra parte à vista e parte a prazo debita Mercadorias e credita Caixa E Fornecedores, e continua obedecendo às partidas dobradas. O item confunde a regra de equivalência de VALORES com uma inexistente regra de QUANTIDADE de contas.",
      fundamento: "Doutrina contábil — método das partidas dobradas; fórmulas de lançamento.",
      macete: "O que tem de bater é o valor, não o número de contas.",
      erroComum: "Generalizar a primeira fórmula de lançamento como se fosse a única.",
      comoBancaPensa: "Converte o caso mais simples em regra geral obrigatória."
    }
  },

  /* ---------- Regimes contábeis ---------- */
  {
    id: "CT-049", disciplina: "Contabilidade e Análise Financeira", assunto: "Regimes contábeis", subassunto: "Definição do regime de caixa",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.89,
    enunciado: "Denomina-se regime de caixa aquele que considera o conjunto completo dos eventos que afetam o resultado da entidade em determinado exercício social, independentemente da movimentação financeira.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "independentemente da movimentação financeira",
    cognitivo: {
      motivo: "Cobrar a inversão entre as definições dos dois regimes.",
      palavraCritica: "regime de caixa",
    },
    comentario: {
      resolucao: "ERRADO. A definição apresentada é a do regime de COMPETÊNCIA, e o item a rotula como regime de caixa. O de caixa faz o oposto: reconhece receitas e despesas apenas quando há efetivo recebimento ou pagamento, ignorando o momento do fato gerador. A pista está na própria frase — 'independentemente da movimentação financeira' é incompatível com um regime que se chama, justamente, de caixa. Contradição interna é o sinal a procurar.",
      fundamento: "Doutrina contábil — regimes de escrituração; CPC 00 (Estrutura Conceitual).",
      macete: "Caixa olha o dinheiro. Competência olha o fato gerador.",
      erroComum: "Validar a definição por ela ser correta — só que do outro regime.",
      comoBancaPensa: "Troca o rótulo mantendo o conteúdo íntegro: troca-conceito na forma mais pura."
    }
  },
  {
    id: "CT-050", disciplina: "Contabilidade e Análise Financeira", assunto: "Regimes contábeis", subassunto: "Reconhecimento de receita por competência",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.88,
    enunciado: "Pelo regime de competência, as receitas de vendas devem ser contabilizadas somente no momento do recebimento dos valores, independentemente da entrega do produto.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "somente no momento do recebimento dos valores",
    cognitivo: {
      motivo: "Cobrar a inversão do critério de reconhecimento da receita.",
      palavraCritica: "somente no momento do recebimento",
    },
    comentario: {
      resolucao: "ERRADO — o item inverte os dois lados. Pelo regime de competência a receita é reconhecida quando a entidade cumpre sua obrigação de desempenho, tipicamente na entrega do produto ou na prestação do serviço, e não quando recebe. Uma venda a prazo em dezembro é receita de dezembro, ainda que o dinheiro entre em março. O critério condicionado ao recebimento é o do regime de caixa, e a menção à irrelevância da entrega é o oposto exato do que a norma exige.",
      fundamento: "Doutrina contábil — regime de competência; CPC 47, obrigação de desempenho.",
      macete: "Competência: entregou, é receita. Recebeu ou não, é outra conversa.",
      erroComum: "Ler 'competência' e associar ao momento em que o dinheiro se torna disponível.",
      comoBancaPensa: "Aplica ao regime nomeado o critério do regime oposto."
    }
  },
  {
    id: "CT-051", disciplina: "Contabilidade e Análise Financeira", assunto: "Regimes contábeis", subassunto: "Reconhecimento de despesa por competência",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade conceitual)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.84,
    enunciado: "O regime de competência determina o reconhecimento das despesas no período em que são incorridas, independentemente do respectivo fluxo de caixa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "no período em que são incorridas",
    cognitivo: {
      motivo: "Fixar o critério de reconhecimento da despesa, simétrico ao da receita.",
      palavraCritica: "independentemente do respectivo fluxo de caixa",
    },
    comentario: {
      resolucao: "CERTO. A despesa pertence ao período em que é incorrida, isto é, em que o bem foi consumido ou o serviço utilizado, e não ao período do pagamento. A energia elétrica consumida em dezembro e paga em janeiro é despesa de dezembro. É a mesma lógica aplicada à receita, e é ela que dá sentido às contas de provisão e de valores a pagar: elas existem justamente para acomodar a distância entre o fato e o desembolso.",
      fundamento: "Doutrina contábil — regime de competência; CPC 00 (Estrutura Conceitual).",
      macete: "Incorreu, é despesa. Pagar é evento financeiro, não contábil.",
      erroComum: "Condicionar o reconhecimento da despesa ao desembolso.",
      comoBancaPensa: "Item literal correto, âncora para as inversões cobradas nos itens vizinhos."
    }
  },
  {
    id: "CT-052", disciplina: "Contabilidade e Análise Financeira", assunto: "Regimes contábeis", subassunto: "Apuração de resultado por competência",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de aplicação numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.87,
    enunciado: "Determinada sociedade realizou vendas de R$ 240.000 no período, tendo recebido R$ 205.000, e incorreu em despesas de R$ 186.000, das quais pagou R$ 178.000. Nessas condições, o resultado apurado pelo regime de competência é um lucro de R$ 54.000.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "resultado apurado pelo regime de competência",
    cognitivo: {
      motivo: "Exigir a aplicação numérica do regime, distinguindo dos valores de caixa.",
      palavraCritica: "pelo regime de competência",
    },
    comentario: {
      resolucao: "CERTO. Pelo regime de competência interessam a receita ganha e a despesa incorrida, não o que transitou pelo caixa: 240.000 − 186.000 = 54.000 de lucro. Os valores recebidos e pagos são distratores — pelo regime de CAIXA o resultado seria 205.000 − 178.000 = 27.000, e é esse número que a banca costuma oferecer como se fosse o da competência. Repare que a diferença entre os dois resultados (27.000) corresponde exatamente ao que ficou a receber menos o que ficou a pagar: 35.000 − 8.000.",
      fundamento: "Doutrina contábil — regime de competência x regime de caixa na apuração do resultado.",
      macete: "Competência usa vendeu e incorreu. Caixa usa recebeu e pagou.",
      erroComum: "Calcular com os valores efetivamente movimentados no caixa.",
      comoBancaPensa: "Fornece os quatro números para que o candidato escolha o par errado."
    }
  },
  {
    id: "CT-053", disciplina: "Contabilidade e Análise Financeira", assunto: "Regimes contábeis", subassunto: "Resultado pelo regime de caixa",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de aplicação numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.8,
    enunciado: "Uma entidade prestou serviços no valor de R$ 90.000 no exercício, dos quais recebeu R$ 62.000, e incorreu em despesas de R$ 71.000, tendo pago R$ 65.000. Pelo regime de caixa, apura-se prejuízo de R$ 3.000 no período.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "Pelo regime de caixa",
    cognitivo: {
      motivo: "Exigir o cálculo pelo regime de caixa, invertendo o par de valores relevantes.",
      palavraCritica: "regime de caixa",
    },
    comentario: {
      resolucao: "CERTO. Pelo regime de caixa contam apenas os valores efetivamente movimentados: 62.000 recebidos − 65.000 pagos = −3.000, ou seja, prejuízo de 3.000. Pelo regime de competência o quadro se inverte: 90.000 − 71.000 = 19.000 de lucro. O caso mostra por que o regime importa — a mesma entidade, no mesmo período, apresenta prejuízo por um critério e lucro pelo outro, e é essa divergência que justifica a competência ser a regra societária.",
      fundamento: "Doutrina contábil — regime de caixa x regime de competência.",
      macete: "Caixa é só o que entrou menos o que saiu.",
      erroComum: "Aplicar os valores de competência ao regime de caixa.",
      comoBancaPensa: "Inverte o comando em relação ao item anterior, cobrando atenção ao regime pedido."
    }
  },
  {
    id: "CT-054", disciplina: "Contabilidade e Análise Financeira", assunto: "Regimes contábeis", subassunto: "Alcance do regime de competência",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.83,
    enunciado: "O regime de competência aplica-se somente às sociedades de grande porte, sendo facultado às pequenas e médias empresas adotar o regime de caixa em sua escrituração contábil.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "somente às sociedades de grande porte",
    cognitivo: {
      motivo: "Cobrar a universalidade do regime de competência na escrituração contábil.",
      palavraCritica: "somente",
    },
    comentario: {
      resolucao: "ERRADO. A competência é o regime da escrituração contábil de todas as entidades, independentemente do porte — inclusive as pequenas e médias, cuja norma específica é construída sobre ele. O que varia com o porte é o conjunto de demonstrações exigidas e o nível de divulgação, não o regime de reconhecimento. Não confundir com regimes de apuração TRIBUTÁRIA: ali existem opções, como o lucro presumido, mas isso é matéria fiscal, distinta da escrituração contábil.",
      fundamento: "Lei 6.404/1976, art. 177; CPC PME; doutrina contábil — regime de competência.",
      macete: "Competência vale para todas. Porte muda divulgação, não regime.",
      erroComum: "Transportar para a contabilidade as opções existentes na apuração tributária.",
      comoBancaPensa: "Cria uma faculdade por porte, apoiada na existência real de regimes fiscais opcionais."
    }
  },
  {
    id: "CT-055", disciplina: "Contabilidade e Análise Financeira", assunto: "Regimes contábeis", subassunto: "Finalidade informacional do regime de competência",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade conceitual)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.76,
    enunciado: "O regime de competência proporciona representação mais fiel da situação patrimonial e do desempenho econômico da entidade do que o regime de caixa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "representação mais fiel",
    cognitivo: {
      motivo: "Fixar a razão de ser da competência como regime da contabilidade societária.",
      palavraCritica: "desempenho econômico",
    },
    comentario: {
      resolucao: "CERTO. É a justificativa da Estrutura Conceitual para a competência ser a regra: ao reconhecer os efeitos das transações quando ocorrem, e não quando o dinheiro se movimenta, ela informa melhor sobre o desempenho ECONÔMICO da entidade. O regime de caixa informa sobre o desempenho FINANCEIRO — igualmente relevante, e por isso a Demonstração dos Fluxos de Caixa existe e é obrigatória. Não são regimes concorrentes: um mede geração de riqueza, o outro, geração de liquidez.",
      fundamento: "CPC 00 (Estrutura Conceitual); Lei 6.404/1976, art. 176.",
      macete: "Competência mede riqueza. Caixa mede liquidez. A DFC existe para o segundo.",
      erroComum: "Tratar o regime de caixa como irrelevante para a contabilidade.",
      comoBancaPensa: "Cobra a fundamentação conceitual, e não apenas a definição operacional."
    }
  },
  {
    id: "CT-056", disciplina: "Contabilidade e Análise Financeira", assunto: "Regimes contábeis", subassunto: "Regime misto na Lei 4.320/1964",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.85,
    enunciado: "Na execução orçamentária regida pela Lei nº 4.320/1964, pertencem ao exercício financeiro as receitas nele legalmente arrecadadas e as despesas nele legalmente empenhadas, o que configura a adoção de regime misto.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "receitas ... arrecadadas e as despesas ... empenhadas",
    cognitivo: {
      motivo: "Fixar o art. 35 da Lei 4.320, que combina os dois regimes em um único dispositivo.",
      palavraCritica: "regime misto",
    },
    comentario: {
      resolucao: "CERTO. É o art. 35 da Lei 4.320/1964: receita pelo regime de CAIXA (arrecadação) e despesa pelo regime de COMPETÊNCIA (empenho). A combinação é o que a doutrina chama de regime misto, e vale para a execução ORÇAMENTÁRIA. Atenção ao recorte, porque é onde a banca ataca: a contabilidade PATRIMONIAL do setor público segue a competência integral, conforme as normas aplicadas ao setor público. Item que estenda o regime misto à contabilidade patrimonial estaria errado.",
      fundamento: "Lei 4.320/1964, art. 35; NBC TSP — Estrutura Conceitual.",
      macete: "Receita arrecadada, despesa empenhada. Misto, e só na execução orçamentária.",
      erroComum: "Inverter os regimes ou estender o misto à contabilidade patrimonial pública.",
      comoBancaPensa: "Cobra o único dispositivo brasileiro que combina os dois regimes por lei."
    }
  },
  {
    id: "CT-057", disciplina: "Contabilidade e Análise Financeira", assunto: "Regimes contábeis", subassunto: "Regime misto — inversão dos critérios",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.82,
    enunciado: "Segundo a Lei nº 4.320/1964, pertencem ao exercício financeiro as receitas nele legalmente empenhadas e as despesas nele efetivamente pagas.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "receitas ... empenhadas e as despesas ... pagas",
    cognitivo: {
      motivo: "Cobrar a inversão dos critérios do art. 35, com uso de termo tecnicamente impossível.",
      palavraCritica: "receitas ... empenhadas",
    },
    comentario: {
      resolucao: "ERRADO, e o erro é duplo. Primeiro, os critérios estão trocados: a lei vincula a receita à ARRECADAÇÃO e a despesa ao EMPENHO, não o contrário. Segundo, 'receita empenhada' é impossibilidade técnica — empenho é estágio da DESPESA, jamais da receita. Reconhecer essa incompatibilidade de vocabulário permite eliminar o item sem sequer lembrar do art. 35: nenhum dispositivo poderia falar em empenhar receita.",
      fundamento: "Lei 4.320/1964, arts. 35, 58 e 60.",
      macete: "Empenho é estágio de despesa. Receita não se empenha.",
      erroComum: "Aceitar a inversão por reconhecer os dois termos como do vocabulário da lei.",
      comoBancaPensa: "Embaralha termos verdadeiros do mesmo diploma, criando combinação impossível."
    }
  },
  {
    id: "CT-058", disciplina: "Contabilidade e Análise Financeira", assunto: "Regimes contábeis", subassunto: "Competência e movimentação financeira",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.79,
    enunciado: "No regime de competência, o registro da receita depende de o recebimento ser realizado em dinheiro ou em depósito bancário.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "depende de o recebimento ser realizado em dinheiro",
    cognitivo: {
      motivo: "Cobrar que a forma do recebimento é irrelevante para o reconhecimento por competência.",
      palavraCritica: "depende",
    },
    comentario: {
      resolucao: "ERRADO. No regime de competência o recebimento é irrelevante para o reconhecimento — tanto a existência quanto a forma. Reconhece-se a receita quando a entidade cumpre a obrigação de desempenho, ainda que nada tenha entrado e ainda que a contraprestação venha a ser recebida em bens, títulos ou serviços. O item cria uma condição de forma que nem o regime de caixa impõe, já que este se satisfaz com qualquer ingresso.",
      fundamento: "Doutrina contábil — regime de competência; CPC 47.",
      macete: "Competência não pergunta se recebeu, muito menos como.",
      erroComum: "Confundir reconhecimento contábil com liquidação financeira.",
      comoBancaPensa: "Adiciona um requisito de forma sobre um critério que já dispensa o próprio recebimento."
    }
  },
  {
    id: "CT-059", disciplina: "Contabilidade e Análise Financeira", assunto: "Regimes contábeis", subassunto: "Obrigatoriedade legal do regime",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "A escrituração da companhia deve ser mantida em registros permanentes, com obediência aos preceitos da legislação comercial e aos princípios de contabilidade geralmente aceitos, observando-se métodos ou critérios contábeis uniformes no tempo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "métodos ou critérios contábeis uniformes no tempo",
    cognitivo: {
      motivo: "Fixar a base legal da escrituração e o princípio da uniformidade.",
      palavraCritica: "uniformes no tempo",
    },
    comentario: {
      resolucao: "CERTO. É o art. 177 da Lei 6.404/1976. A uniformidade no tempo é o que torna as demonstrações comparáveis entre exercícios — mudar de critério a cada ano permitiria maquiar tendências. Isso não significa imutabilidade: a alteração é possível, mas exige divulgação em nota explicativa dos efeitos sobre o resultado. O mesmo artigo é a âncora legal da competência na escrituração societária.",
      fundamento: "Lei 6.404/1976, art. 177, caput.",
      macete: "Uniformidade permite comparar exercícios. Mudou, tem de explicar em nota.",
      erroComum: "Ler uniformidade como proibição absoluta de mudar de critério.",
      comoBancaPensa: "Transcreve dispositivo longo, apostando que a extensão iniba a conferência."
    }
  },

  /* ---------- Atos e fatos administrativos ---------- */
  {
    id: "CT-060", disciplina: "Contabilidade e Análise Financeira", assunto: "Atos e fatos administrativos", subassunto: "Fato modificativo diminutivo",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.81,
    enunciado: "O pagamento de juros incidentes sobre um empréstimo bancário constitui fato permutativo, pois há apenas a troca de um elemento do ativo por redução equivalente do passivo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "constitui fato permutativo",
    cognitivo: {
      motivo: "Cobrar a distinção entre pagamento do principal e pagamento de juros.",
      palavraCritica: "juros",
    },
    comentario: {
      resolucao: "ERRADO. Pagar JUROS é despesa: reduz o ativo sem reduzir obrigação equivalente, e portanto diminui o patrimônio líquido — fato modificativo diminutivo. O raciocínio do item vale para o pagamento do PRINCIPAL, esse sim permutativo, porque a saída de caixa é compensada pela baixa da dívida. A mesma operação bancária comporta os dois fatos, e a banca aproveita a proximidade para trocar um pelo outro.",
      fundamento: "Doutrina contábil — classificação dos fatos administrativos.",
      macete: "Principal: permutativo. Juros: modificativo diminutivo.",
      erroComum: "Tratar toda saída de caixa vinculada a empréstimo como permutativa.",
      comoBancaPensa: "Aplica a um componente da operação a classificação que só vale para o outro."
    }
  },
  {
    id: "CT-061", disciplina: "Contabilidade e Análise Financeira", assunto: "Atos e fatos administrativos", subassunto: "Fato misto",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade conceitual)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.83,
    enunciado: "O recebimento de uma duplicata com desconto concedido ao cliente por antecipação de pagamento configura fato misto, por reunir, em uma única operação, permuta de elementos patrimoniais e variação do patrimônio líquido.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "reunir, em uma única operação, permuta ... e variação do patrimônio líquido",
    cognitivo: {
      motivo: "Fixar o conceito de fato misto a partir de operação corriqueira.",
      palavraCritica: "fato misto",
    },
    comentario: {
      resolucao: "CERTO. A operação tem duas naturezas simultâneas: a baixa da duplicata contra a entrada em caixa é permuta dentro do ativo; o desconto concedido é despesa, que reduz o patrimônio líquido. Reunidas no mesmo fato, caracterizam o fato misto — também chamado composto. Ele é diminutivo quando envolve despesa, como aqui, e aumentativo quando envolve receita, caso do recebimento com juros por atraso.",
      fundamento: "Doutrina contábil — fatos mistos ou compostos.",
      macete: "Misto = permuta + variação de PL na mesma operação.",
      erroComum: "Classificar só pela parte mais visível da operação.",
      comoBancaPensa: "Usa operação rotineira que a maioria classifica pela metade."
    }
  },
  {
    id: "CT-062", disciplina: "Contabilidade e Análise Financeira", assunto: "Atos e fatos administrativos", subassunto: "Ato administrativo relevante",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.76,
    enunciado: "A assinatura de contrato de fiança em favor de terceiro, sem qualquer desembolso no momento, constitui fato administrativo modificativo, devendo ser registrada em conta de resultado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "fato administrativo modificativo, devendo ser registrada em conta de resultado",
    cognitivo: {
      motivo: "Separar ato de fato administrativo e localizar o registro correto.",
      palavraCritica: "fato administrativo modificativo",
    },
    comentario: {
      resolucao: "ERRADO. Trata-se de ATO administrativo relevante, não de fato: nada no patrimônio se altera no momento da assinatura da fiança, embora exista risco de vir a alterar. Por isso o registro se dá em contas de COMPENSAÇÃO, e não em conta de resultado — não há despesa a reconhecer enquanto a garantia não for executada. Se e quando for, aí sim nasce o fato administrativo, com efeito real sobre o patrimônio.",
      fundamento: "Doutrina contábil — atos e fatos administrativos; contas de compensação.",
      macete: "Ato: nada mudou ainda, vai para compensação. Fato: mudou, vai para o balanço.",
      erroComum: "Reconhecer despesa no momento em que a garantia é prestada.",
      comoBancaPensa: "Trata como fato aquilo que a doutrina classifica como ato, e desloca o registro."
    }
  },

  /* ---------- Balancete e conferência ---------- */
  {
    id: "CT-063", disciplina: "Contabilidade e Análise Financeira", assunto: "Balancete de verificação", subassunto: "Limites do balancete como prova de correção",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.84,
    enunciado: "A igualdade entre a soma dos saldos devedores e a dos saldos credores no balancete de verificação assegura que a escrituração do período foi realizada sem erros.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "assegura que a escrituração ... foi realizada sem erros",
    cognitivo: {
      motivo: "Cobrar quais erros o balancete NÃO detecta, ponto central da sua utilidade real.",
      palavraCritica: "assegura",
    },
    comentario: {
      resolucao: "ERRADO. O balancete comprova apenas a igualdade aritmética entre débitos e créditos. Passam por ele intactos: o lançamento feito em conta errada mas de mesma natureza, o fato inteiramente omitido, o lançamento duplicado e a inversão entre a conta debitada e a creditada quando os valores coincidem. Em todos esses casos os totais batem e a escrituração está errada. Por isso o balancete é instrumento de VERIFICAÇÃO, não de validação.",
      fundamento: "Doutrina contábil — balancete de verificação e limites de detecção de erros.",
      macete: "Bater não é estar certo. Conta trocada e fato omitido não desequilibram nada.",
      erroComum: "Tratar o equilíbrio aritmético como atestado de correção da escrituração.",
      comoBancaPensa: "Eleva um instrumento de conferência parcial à condição de garantia integral."
    }
  },
  {
    id: "CT-064", disciplina: "Contabilidade e Análise Financeira", assunto: "Balancete de verificação", subassunto: "Contas que compõem o balancete",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.74,
    enunciado: "O balancete de verificação levantado antes do encerramento do exercício apresenta exclusivamente as contas patrimoniais, uma vez que as contas de resultado só são apuradas ao final do período.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "exclusivamente as contas patrimoniais",
    cognitivo: {
      motivo: "Cobrar que o balancete abrange todas as contas com saldo, inclusive as de resultado.",
      palavraCritica: "exclusivamente",
    },
    comentario: {
      resolucao: "ERRADO. O balancete relaciona TODAS as contas com saldo na data, patrimoniais e de resultado. As contas de resultado acumulam movimento ao longo do exercício e por isso aparecem — o que ocorre ao final não é a apuração de seus saldos, e sim o ENCERRAMENTO, quando são zeradas contra a conta de apuração do resultado. Confundir acumular saldo com apurar resultado é a raiz do erro.",
      fundamento: "Doutrina contábil — balancete de verificação; encerramento das contas de resultado.",
      macete: "Balancete mostra tudo que tem saldo. Encerramento é que zera o resultado.",
      erroComum: "Supor que contas de resultado só existem no encerramento.",
      comoBancaPensa: "Usa uma verdade sobre o encerramento para restringir indevidamente o balancete."
    }
  },

  /* ---------- Contraexemplos e casos aplicados ---------- */
  {
    id: "CT-065", disciplina: "Contabilidade e Análise Financeira", assunto: "Escrituração contábil", subassunto: "Aquisição a prazo — fato permutativo",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade conceitual)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.77,
    enunciado: "A aquisição de um veículo a prazo, sem entrada, constitui fato permutativo, ainda que aumente simultaneamente o ativo e o passivo da entidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ainda que aumente simultaneamente o ativo e o passivo",
    cognitivo: {
      motivo: "Fixar que permutativo se define pela ausência de efeito no PL, não pela ausência de variação nos grupos.",
      palavraCritica: "ainda que aumente",
    },
    comentario: {
      resolucao: "CERTO. Permutativo não significa que nada muda de tamanho — significa que o PATRIMÔNIO LÍQUIDO não se altera. Aqui o ativo cresce pelo veículo e o passivo cresce pela obrigação, na mesma medida, e o PL permanece intacto. Esse tipo é chamado de permutativo aumentativo, ou quantitativo-qualitativo. Item que exija que o total do ativo permaneça inalterado para haver permuta estaria errado.",
      fundamento: "Doutrina contábil — classificação dos fatos administrativos.",
      macete: "Permutativo é o que não mexe no PL, mesmo aumentando ativo e passivo.",
      erroComum: "Exigir que o total do balanço permaneça constante.",
      comoBancaPensa: "Contraexemplo: o item afirma o que o candidato tenderia a negar por reflexo."
    }
  },
  {
    id: "CT-066", disciplina: "Contabilidade e Análise Financeira", assunto: "Contas contábeis", subassunto: "Conta caixa e saldo credor",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade conceitual)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.75,
    enunciado: "A apuração de saldo credor na conta caixa indica necessariamente erro de escrituração, dado que não é possível pagar mais do que se possui em espécie.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "indica necessariamente erro de escrituração",
    cognitivo: {
      motivo: "Contraexemplo: aqui a afirmação categórica é verdadeira e deve ser marcada CERTO.",
      palavraCritica: "necessariamente",
    },
    comentario: {
      resolucao: "CERTO — e o termo categórico procede. Caixa registra dinheiro em espécie sob guarda da entidade, e não há como entregar numerário que não se tem; saldo credor em caixa é impossibilidade material, sinalizando lançamento omitido, invertido ou registrado em conta errada. Não confundir com BANCOS, onde o saldo credor é perfeitamente possível e significa conta garantida ou cheque especial utilizado — ali a instituição adiantou recursos, e o saldo credor representa dívida real.",
      fundamento: "Doutrina contábil — natureza das contas do disponível.",
      macete: "Caixa credor: erro. Bancos credor: cheque especial, e é dívida.",
      erroComum: "Marcar ERRADO por reflexo diante de 'necessariamente'.",
      comoBancaPensa: "Usa termo absoluto verdadeiro para punir quem eliminou o item sem pensar."
    }
  },
  {
    id: "CT-067", disciplina: "Contabilidade e Análise Financeira", assunto: "Contas contábeis", subassunto: "Saldo credor em conta bancária",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.78,
    enunciado: "Assim como ocorre com a conta caixa, o saldo credor na conta bancos conta movimento revela necessariamente erro de escrituração.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "Assim como ocorre com a conta caixa",
    cognitivo: {
      motivo: "Cobrar a diferença entre disponibilidade em espécie e conta bancária com limite.",
      palavraCritica: "necessariamente",
    },
    comentario: {
      resolucao: "ERRADO. Bancos admite saldo credor sem erro algum: significa que a entidade utilizou limite de conta garantida ou cheque especial, e o saldo credor expressa uma obrigação real perante a instituição financeira, devendo ser reclassificado para o passivo circulante na apresentação do balanço. A analogia com caixa não se sustenta, porque ali o saldo credor é materialmente impossível. Mesmo grupo, comportamentos diferentes.",
      fundamento: "Doutrina contábil — disponibilidades; Lei 6.404/1976, art. 178, § 1º.",
      macete: "Bancos pode ficar credor — vira passivo, não erro.",
      erroComum: "Estender a impossibilidade do caixa a todas as disponibilidades.",
      comoBancaPensa: "Constrói a generalização a partir de um item anterior verdadeiro, criando armadilha em par."
    }
  },
  {
    id: "CT-068", disciplina: "Contabilidade e Análise Financeira", assunto: "Regimes contábeis", subassunto: "Depreciação e regime de competência",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade conceitual)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.8,
    enunciado: "O reconhecimento da depreciação é manifestação do regime de competência, por distribuir ao longo dos exercícios o custo de um ativo cujo desembolso ocorreu integralmente em um único momento.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "distribuir ao longo dos exercícios o custo",
    cognitivo: {
      motivo: "Ligar um instituto patrimonial ao regime que o justifica.",
      palavraCritica: "desembolso ocorreu integralmente em um único momento",
    },
    comentario: {
      resolucao: "CERTO. A depreciação é a expressão mais visível da competência: a entidade paga o bem de uma vez, mas o consome ao longo de anos, e a despesa deve aparecer nos exercícios em que o benefício é fruído — não naquele em que o dinheiro saiu. Sob regime de caixa a máquina inteira viraria despesa no ano da compra, distorcendo o resultado daquele exercício e dos seguintes. Vale notar que a depreciação não gera saída de caixa; é despesa sem desembolso, e por isso é somada de volta na Demonstração dos Fluxos de Caixa pelo método indireto.",
      fundamento: "Lei 6.404/1976, art. 183, § 2º; CPC 27; doutrina contábil — regime de competência.",
      macete: "Pagou uma vez, consome por anos — a competência distribui.",
      erroComum: "Ver a depreciação como ajuste fiscal em vez de aplicação do regime.",
      comoBancaPensa: "Cobra a conexão entre um instituto concreto e o princípio que o fundamenta."
    }
  },
  {
    id: "CT-069", disciplina: "Contabilidade e Análise Financeira", assunto: "Contas contábeis", subassunto: "Provisões como contas retificadoras",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.73,
    enunciado: "A provisão para perdas esperadas com créditos de liquidação duvidosa é conta do passivo circulante, por representar obrigação da entidade decorrente de inadimplência prevista.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "conta do passivo circulante",
    cognitivo: {
      motivo: "Cobrar a localização da provisão retificadora, que o nome sugere ser passivo.",
      palavraCritica: "passivo circulante",
    },
    comentario: {
      resolucao: "ERRADO. É conta RETIFICADORA DO ATIVO, credora, apresentada como redução das Contas a Receber — ajusta o valor do direito ao montante que se espera efetivamente realizar. Não há obrigação da entidade perante ninguém: quem deve é o cliente, e o risco é de não receber, não de ter de pagar. A palavra 'provisão' induz ao erro por lembrar as provisões do passivo, como a de férias e a para contingências, essas sim obrigações.",
      fundamento: "Lei 6.404/1976, art. 183, I; CPC 48; doutrina contábil — contas retificadoras.",
      macete: "Provisão para perdas com recebíveis retifica ATIVO. Provisão de férias é passivo.",
      erroComum: "Classificar pela palavra 'provisão', sem perguntar quem deve a quem.",
      comoBancaPensa: "Explora um termo que aparece nos dois lados do balanço com naturezas opostas."
    }
  },
  {
    id: "CT-070", disciplina: "Contabilidade e Análise Financeira", assunto: "Escrituração contábil", subassunto: "Erro de lançamento e balancete",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de aplicação conceitual)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.79,
    enunciado: "Se uma despesa de energia elétrica for lançada, por engano, a débito da conta despesas de aluguel, o erro provocará desequilíbrio entre as somas de débitos e créditos no balancete de verificação.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "provocará desequilíbrio entre as somas de débitos e créditos",
    cognitivo: {
      motivo: "Aplicar concretamente os limites de detecção do balancete.",
      palavraCritica: "desequilíbrio",
    },
    comentario: {
      resolucao: "ERRADO. O valor foi debitado e creditado corretamente, apenas na conta errada — e como ambas são despesas, de mesma natureza devedora, as somas continuam iguais. O balancete fecha e o erro permanece invisível ali. A distorção existe e é real: o resultado total está certo, mas a composição das despesas está errada, o que compromete a análise por natureza de gasto. Erros dessa espécie só aparecem na conciliação de cada conta com seus documentos de suporte.",
      fundamento: "Doutrina contábil — balancete de verificação; erros não detectáveis pela igualdade aritmética.",
      macete: "Conta errada de mesma natureza: balancete fecha e o erro passa.",
      erroComum: "Supor que todo erro de escrituração desequilibra o balancete.",
      comoBancaPensa: "Cobra em caso concreto o limite teórico que o item anterior enuncia em abstrato."
    }
  },
  {
    id: "CT-071", disciplina: "Contabilidade e Análise Financeira", assunto: "Regimes contábeis", subassunto: "Competência e exercício social",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.74,
    enunciado: "O exercício social deve coincidir obrigatoriamente com o ano civil, encerrando-se em 31 de dezembro, a fim de viabilizar a aplicação do regime de competência.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "coincidir obrigatoriamente com o ano civil",
    cognitivo: {
      motivo: "Cobrar que a lei fixa a duração do exercício, não sua data de encerramento.",
      palavraCritica: "obrigatoriamente",
    },
    comentario: {
      resolucao: "ERRADO. A Lei 6.404/1976 fixa que o exercício social tem DURAÇÃO de um ano e que a data do término será estabelecida no estatuto — não impõe coincidência com o ano civil. Muitas companhias encerram em 30 de junho ou em 31 de março, e nada disso afeta a aplicação do regime de competência, que independe do calendário adotado. A exceção legal é a constituição da companhia ou a alteração estatutária, quando o exercício pode ter duração diversa.",
      fundamento: "Lei 6.404/1976, art. 175, caput e parágrafo único.",
      macete: "A lei fixa a duração (um ano), não a data de encerramento.",
      erroComum: "Confundir exercício social com ano-calendário fiscal.",
      comoBancaPensa: "Cria obrigatoriedade de data onde a lei delega ao estatuto."
    }
  },
  {
    id: "CT-072", disciplina: "Contabilidade e Análise Financeira", assunto: "Contas contábeis", subassunto: "Encerramento das contas de resultado",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade conceitual)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.8,
    enunciado: "Ao final do exercício, as contas de receitas e despesas são encerradas contra a conta de apuração do resultado, de modo que iniciam o exercício seguinte com saldo zero.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "iniciam o exercício seguinte com saldo zero",
    cognitivo: {
      motivo: "Fixar o ciclo de vida das contas de resultado, que distingue transitórias de permanentes.",
      palavraCritica: "saldo zero",
    },
    comentario: {
      resolucao: "CERTO. Contas de resultado são TRANSITÓRIAS: medem desempenho de um período determinado e, cumprida essa função, são zeradas contra a apuração do resultado do exercício. O saldo apurado migra então para o Patrimônio Líquido. As patrimoniais, ao contrário, são PERMANENTES — o saldo de Caixa em 31 de dezembro é exatamente o saldo inicial de 1º de janeiro. É essa diferença que explica por que Lucros Acumulados não é conta de resultado, embora receba o resultado.",
      fundamento: "Doutrina contábil — encerramento do exercício; Lei 6.404/1976, art. 187.",
      macete: "Resultado é transitória e zera. Patrimonial é permanente e continua.",
      erroComum: "Supor que o saldo das contas de resultado é transportado para o exercício seguinte.",
      comoBancaPensa: "Cobra o mecanismo que fundamenta a classificação cobrada em outros itens."
    }
  },
  {
    id: "CT-073", disciplina: "Contabilidade e Análise Financeira", assunto: "Escrituração contábil", subassunto: "Estorno de lançamento",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.71,
    enunciado: "A correção de lançamento equivocado na escrituração contábil deve ser feita mediante rasura do registro original, com aposição de visto do contador responsável.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "mediante rasura do registro original",
    cognitivo: {
      motivo: "Cobrar a vedação de rasura e o procedimento correto de retificação.",
      palavraCritica: "rasura",
    },
    comentario: {
      resolucao: "ERRADO. A escrituração não admite rasura, emenda ou entrelinha — o registro é feito em ordem cronológica e não pode ser apagado. A correção se faz por ESTORNO, com lançamento de igual valor e sentido inverso ao equivocado, seguido do lançamento correto; alternativamente, por transferência ou complementação, conforme o caso. O rastro do erro e da correção permanece visível, e é justamente isso que dá confiabilidade à escrituração.",
      fundamento: "Lei 6.404/1976, art. 177; NBC ITG 2000 — escrituração contábil.",
      macete: "Não se rasura escrituração: estorna-se.",
      erroComum: "Admitir correção por rasura visada, como em documentos administrativos comuns.",
      comoBancaPensa: "Importa da praxe administrativa um procedimento que a norma contábil veda."
    }
  },
  {
    id: "CT-074", disciplina: "Contabilidade e Análise Financeira", assunto: "Regimes contábeis", subassunto: "Competência na contabilidade pública patrimonial",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.77,
    enunciado: "Por força do regime misto estabelecido na Lei nº 4.320/1964, a contabilidade patrimonial do setor público reconhece as receitas pelo momento da arrecadação, tal como ocorre na execução orçamentária.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "contabilidade patrimonial do setor público reconhece as receitas pelo momento da arrecadação",
    cognitivo: {
      motivo: "Separar o regime da execução orçamentária do da contabilidade patrimonial pública.",
      palavraCritica: "contabilidade patrimonial",
    },
    comentario: {
      resolucao: "ERRADO. O regime misto do art. 35 da Lei 4.320/1964 rege a EXECUÇÃO ORÇAMENTÁRIA. A contabilidade PATRIMONIAL do setor público segue o regime de competência integral, reconhecendo as variações patrimoniais quando ocorrem os fatos geradores, independentemente da arrecadação ou do pagamento. As duas dimensões convivem no mesmo ente e por isso a informação contábil pública é apresentada em subsistemas distintos — orçamentário e patrimonial —, cada um com seu critério.",
      fundamento: "Lei 4.320/1964, art. 35; NBC TSP — Estrutura Conceitual; MCASP.",
      macete: "Orçamentário: misto. Patrimonial: competência integral.",
      erroComum: "Estender o art. 35 a toda a contabilidade do setor público.",
      comoBancaPensa: "Generaliza para o sistema inteiro uma regra que vale para um de seus subsistemas."
    }
  },

  /* ---------- Contraexemplos: a restrição e a exigência que são VERDADEIRAS ----------

     "Somente", "único", "deve" e "é vedado" são as marcas que o candidato
     treinado aprende a marcar como ERRADO no reflexo. Estes quatro itens
     existem para quebrar esse reflexo: a restrição e a exigência aqui são
     reais, e quem responde pelo formato — e não pelo conteúdo — erra.
     ------------------------------------------------------------------- */
  {
    id: "CT-075", disciplina: "Contabilidade e Análise Financeira", assunto: "Escrituração contábil", subassunto: "Livro Diário como único livro indispensável",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.72,
    enunciado: "O livro Diário é o único livro contábil cuja escrituração é indispensável a todo empresário e a toda sociedade empresária, ressalvadas as exigências específicas previstas em leis especiais.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "único livro contábil cuja escrituração é indispensável",
    cognitivo: {
      motivo: "Testar se o candidato marca ERRADO só por ver 'único', mesmo quando a restrição é a da própria lei.",
      palavraCritica: "único",
    },
    comentario: {
      resolucao: "CERTO. O art. 1.180 do Código Civil é expresso: além dos demais livros exigidos por lei, é indispensável o Diário, que pode ser substituído por fichas no caso de escrituração mecanizada ou eletrônica. A palavra 'indispensável' aparece no texto legal referida a um único livro. O Razão é auxiliar e o Caixa deixa de ser exigido quando a entidade escritura o Diário com individuação. Note que a ressalva do enunciado — 'ressalvadas as exigências específicas previstas em leis especiais' — reproduz exatamente o 'além dos demais livros exigidos por lei' do dispositivo, e é ela que torna a restrição legítima.",
      fundamento: "Código Civil, arts. 1.180 e 1.181; Lei 6.404/1976, art. 177.",
      macete: "Diário: indispensável por lei. Razão: auxiliar. Plano de contas: nem livro é.",
      erroComum: "Marcar ERRADO por reflexo diante de 'único', sem checar se a exclusividade é a da lei.",
      comoBancaPensa: "Usa o formato restritivo que costuma sinalizar erro para punir quem responde sem ler o conteúdo."
    }
  },
  {
    id: "CT-076", disciplina: "Contabilidade e Análise Financeira", assunto: "Contas contábeis", subassunto: "Alcance da depreciação",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.75,
    enunciado: "A depreciação alcança somente os bens tangíveis do ativo imobilizado que tenham vida útil definida, não incidindo sobre terrenos.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "somente os bens tangíveis do ativo imobilizado que tenham vida útil definida",
    cognitivo: {
      motivo: "Fixar o alcance da depreciação e separá-la de amortização e exaustão.",
      palavraCritica: "somente",
    },
    comentario: {
      resolucao: "CERTO. Depreciação é a alocação sistemática do valor depreciável de um bem tangível do imobilizado ao longo de sua vida útil. Terreno tem vida útil indefinida e por isso não se deprecia — ainda que a edificação construída sobre ele se deprecie normalmente. Bens intangíveis com vida útil definida sofrem AMORTIZAÇÃO, não depreciação; recursos naturais esgotáveis sofrem EXAUSTÃO. As três figuras são espécies do mesmo gênero, e a banca troca uma pela outra com frequência.",
      fundamento: "CPC 27 (Ativo Imobilizado); Lei 6.404/1976, art. 183, § 2º.",
      macete: "Tangível deprecia, intangível amortiza, recurso natural exaure. Terreno, nada.",
      erroComum: "Rejeitar o 'somente' sem perceber que o recorte descrito é exatamente o da norma.",
      comoBancaPensa: "Enuncia corretamente um limite técnico com a palavra que o candidato associa a erro."
    }
  },
  {
    id: "CT-077", disciplina: "Contabilidade e Análise Financeira", assunto: "Escrituração contábil", subassunto: "Formalidades intrínsecas da escrituração",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.73,
    enunciado: "A escrituração contábil deve ser feita em idioma e moeda corrente nacionais, em ordem cronológica de dia, mês e ano, vedados os intervalos em branco, as entrelinhas, as rasuras e as emendas.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "vedados os intervalos em branco, as entrelinhas, as rasuras e as emendas",
    cognitivo: {
      motivo: "Cobrar as formalidades intrínsecas literalmente exigidas pelo Código Civil.",
      palavraCritica: "vedados",
    },
    comentario: {
      resolucao: "CERTO. O enunciado reproduz o art. 1.183 do Código Civil quase palavra por palavra. Todas as exigências listadas — idioma e moeda nacionais, forma contábil, ordem cronológica de dia, mês e ano, e a vedação a espaços em branco, entrelinhas, borrões, rasuras, emendas e transportes para as margens — são as chamadas formalidades INTRÍNSECAS da escrituração. É por causa dessa vedação que a correção de erro se faz por estorno, transferência ou complementação, e nunca por rasura.",
      fundamento: "Código Civil, art. 1.183; ITG 2000 (R1).",
      macete: "Formalidade extrínseca é o livro por fora (termos, autenticação); intrínseca é o registro por dentro.",
      erroComum: "Supor que a lista é longa demais para ser toda legal e marcar ERRADO por excesso.",
      comoBancaPensa: "Acumula exigências verdadeiras até o enunciado 'parecer' inventado."
    }
  },
  {
    id: "CT-078", disciplina: "Contabilidade e Análise Financeira", assunto: "Escrituração contábil", subassunto: "Transcrição das demonstrações no Diário",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.7,
    enunciado: "O balanço patrimonial e o balanço de resultado econômico devem ser lançados no livro Diário e assinados por contabilista legalmente habilitado e pelo empresário ou sociedade empresária.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "assinados por contabilista legalmente habilitado e pelo empresário",
    cognitivo: {
      motivo: "Cobrar a exigência de dupla assinatura e de transcrição das demonstrações no Diário.",
      palavraCritica: "devem ser lançados no livro Diário",
    },
    comentario: {
      resolucao: "CERTO. É o § 2º do art. 1.184 do Código Civil. O Diário não recebe apenas os lançamentos diários com individuação e clareza: ao fim do exercício, o balanço patrimonial e o balanço de resultado econômico são nele transcritos, com dupla assinatura — do contabilista habilitado e do empresário ou da sociedade. A dupla assinatura reparte a responsabilidade: técnica de um lado, de gestão do outro. Quem estuda apenas o conteúdo das demonstrações e ignora sua formalização de registro erra este item.",
      fundamento: "Código Civil, art. 1.184, §§ 1º e 2º.",
      macete: "Diário fecha o exercício: recebe o balanço e exige duas assinaturas.",
      erroComum: "Tratar a transcrição no Diário como praxe facultativa e não como exigência legal.",
      comoBancaPensa: "Explora a lacuna entre saber montar a demonstração e saber onde ela é formalizada."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE63);
