/* =====================================================================
   QUESTLAB — Lote 89: ESTATÍSTICA, CONTABILIDADE, RACIOCÍNIO LÓGICO
   E LÍNGUA PORTUGUESA, ITENS DE PROVA REAL

   Mesma procedência e método dos lotes 84 a 88.

   RACIOCÍNIO LÓGICO — DUAS OBSERVAÇÕES QUE VALEM MAIS QUE OS ITENS

   1) RL-045 (seis pessoas em mesa redonda) tem no compilado uma
   resolução por permutação LINEAR: 6! - 2x5! = 480. A justificativa
   OFICIAL da banca faz outro caminho — 6 posições para a primeira
   pessoa restrita, 3 para a segunda, 4! para as demais: 6 x 3 x 4! = 432.
   Os dois passam de 400, então o gabarito não muda; mas a resolução
   registrada aqui é a da banca, porque é o raciocínio dela que o
   candidato precisa reproduzir na prova seguinte. Um número certo por
   caminho errado não ensina nada.

   2) RL-041 aparecia DUAS vezes no compilado, com gabaritos OPOSTOS
   (C num número, E noutro), para enunciado praticamente idêntico. Foi a
   deduplicação interna que revelou a contradição. Entrou uma vez, com
   o gabarito que a conta sustenta: 20 x 18 = 360, superior a 350.

   ESTATÍSTICA. Dez itens, com um bloco encadeado sobre testes de
   hipóteses (nível de significância, potência, tamanho da amostra) que
   funciona bem em sequência — as três questões se explicam mutuamente.

   LÍNGUA PORTUGUESA — POR QUE SÓ TRÊS ITENS

   O compilado trazia doze itens de português, mas NOVE deles dependem de
   um texto-base que o material não reproduz: pedem o antecedente de um
   pronome "no primeiro período", a tipologia "do texto", a reescrita do
   "terceiro parágrafo". Sem o texto, são inutilizáveis — e inventar um
   texto que casasse com o gabarito seria fabricar prova, não aproveitá-la.
   Entraram os três autossuficientes, que citam o trecho dentro do próprio
   enunciado.

   Isso mantém de pé o aviso do validador de que falta texto-base em
   português: este lote não o resolve, e não deveria fingir que resolve.

   Gabarito: 19 CERTO / 7 ERRADO.
   ===================================================================== */

const CARGOS89 = ["Escrivão", "Agente"];
const BASE89_ES = {
  concurso: "PCAL", cargo: CARGOS89, ano: 2026,
  tipo: "CE", probReaparecer: 0.80,
  disciplina: "Estatística",
};
const BASE89_CT = {
  concurso: "PCAL", cargo: CARGOS89, ano: 2026,
  tipo: "CE", probReaparecer: 0.80,
  disciplina: "Contabilidade e Análise Financeira",
};
const BASE89_RL = {
  concurso: "PCAL", cargo: CARGOS89, ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  disciplina: "Raciocínio Lógico-Matemático",
};
/* Português também consta do edital SESAU-AL — sem o cargo da trilha de
   fisioterapia, o validador acusa questão invisível para ela. */
const BASE89_PT = {
  concurso: "PCAL", cargo: [...CARGOS89, "Especialista em Saúde — Fisioterapia"], ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  disciplina: "Língua Portuguesa",
};

const QUESTOES_PCAL_LOTE89 = [

  /* ================= ESTATÍSTICA — AMOSTRAGEM ================= */

  {
    ...BASE89_ES,
    id: "ES-138", assunto: "Amostragem",
    subassunto: "Amostragem por conglomerados",
    origem: "CEBRASPE PC-PE 2024 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 110,
    enunciado: "Um estudo acerca da saúde mental de detentos foi efetuado em determinada penitenciária que reúne 2 mil detentos acomodados em 100 celas. Dez celas foram selecionadas mediante sorteio aleatório, e todos os 193 detentos encontrados nessas celas foram entrevistados. A técnica de amostragem empregada foi a por conglomerados.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "todos os 193 detentos encontrados nessas celas",
    cognitivo: {
      motivo: "O que define conglomerado é a unidade sorteada ser um GRUPO, e não o indivíduo.",
      palavraCritica: "Dez celas foram selecionadas",
    },
    comentario: {
      resolucao: "CERTO. Na amostragem por CONGLOMERADOS, a população é dividida em grupos naturalmente formados (aqui, as celas), sorteiam-se alguns grupos inteiros e pesquisam-se TODOS os elementos dos grupos sorteados. Foi exatamente o procedimento: a unidade sorteada foi a cela, não o detento, e dentro das dez celas ninguém foi selecionado — todos entraram. Não confunda com a ESTRATIFICADA, em que a população se divide em estratos homogêneos e se sorteiam indivíduos DE TODOS os estratos. A diferença prática é de custo e precisão: conglomerado é mais barato (concentra o trabalho de campo em poucos pontos) e menos preciso; estratificada é mais cara e mais precisa.",
      fundamento: "Técnicas de amostragem probabilística.",
      macete: "Conglomerado: sorteia GRUPOS e pesquisa todos. Estratificada: sorteia DENTRO de todos os grupos.",
      erroComum: "Responder estratificada por haver divisão da população em subgrupos.",
      comoBancaPensa: "Descreve o procedimento em detalhe e pede o nome; o dado decisivo é 'todos os detentos encontrados'.",
    },
  },

  {
    ...BASE89_ES,
    id: "ES-139", assunto: "Amostragem",
    subassunto: "Estratificação e precisão da estimativa",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 100,
    enunciado: "A amostragem estratificada por faixas de renda familiar possibilitaria uma estimação intervalar mais precisa dos parâmetros da distribuição das estaturas em um estudo de campo.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "estimação intervalar mais precisa",
    cognitivo: {
      motivo: "Estratificar por variável correlacionada reduz a variância do estimador e estreita o intervalo de confiança.",
      palavraCritica: "mais precisa",
    },
    comentario: {
      resolucao: "CERTO. A amostragem estratificada divide a população em estratos internamente HOMOGÊNEOS quanto à variável de interesse e heterogêneos entre si. Como a variância total se decompõe em variância dentro dos estratos e entre estratos, e a estratificada só carrega a primeira, o erro padrão do estimador cai — e intervalo de confiança mais estreito é exatamente o que se chama de estimação mais precisa. A condição para o ganho é que a variável de estratificação se correlacione com a estudada; renda e estatura guardam correlação conhecida via nutrição, o que justifica o desenho. Estratificar por variável irrelevante não piora, mas também não melhora.",
      fundamento: "Teoria da amostragem — decomposição da variância e eficiência da estratificação.",
      macete: "Estratos homogêneos por dentro reduzem a variância e estreitam o intervalo.",
      erroComum: "Achar que qualquer estratificação melhora a precisão, independentemente da variável.",
      comoBancaPensa: "Liga desenho amostral a consequência inferencial, em vez de pedir a definição.",
    },
  },

  /* ================= ESTATÍSTICA — TESTES DE HIPÓTESES ================= */

  {
    ...BASE89_ES,
    id: "ES-140", assunto: "Testes de hipóteses",
    subassunto: "Nível de significância e potência",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 105,
    enunciado: "Se o nível de significância de um teste de hipóteses for aumentado de 0,01 para 0,05, a potência do teste diminuiria.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "a potência do teste diminuiria",
    cognitivo: {
      motivo: "Alfa e potência caminham no MESMO sentido; o que se opõe a alfa é beta.",
      palavraCritica: "diminuiria",
    },
    comentario: {
      resolucao: "ERRADO — a potência AUMENTA. O nível de significância (alfa) é a probabilidade do erro tipo I, rejeitar H0 verdadeira. Elevá-lo de 0,01 para 0,05 amplia a região de rejeição, tornando mais fácil rejeitar H0 — tanto quando ela é verdadeira (mais erro tipo I) quanto quando é falsa (mais acerto). E potência é justamente 1 - beta, a probabilidade de rejeitar H0 falsa. Logo, subir alfa reduz beta e aumenta a potência. O trade-off real é entre os DOIS ERROS, não entre alfa e potência: com n fixo, diminuir um tipo de erro aumenta o outro. A única forma de melhorar os dois ao mesmo tempo é aumentar a amostra — que é exatamente o que ES-142 cobra.",
      fundamento: "Teoria dos testes de hipóteses — erros tipo I e II, potência.",
      macete: "Alfa sobe, beta desce, potência sobe. Alfa e potência andam juntas.",
      erroComum: "Supor que qualquer aumento de alfa piora o teste em tudo.",
      comoBancaPensa: "Aposta na intuição de que 'aumentar o erro admitido piora o teste'.",
    },
  },

  {
    ...BASE89_ES,
    id: "ES-141", assunto: "Testes de hipóteses",
    subassunto: "Interpretação da potência",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "Se o verdadeiro valor da redução média de pressão de um novo remédio fosse igual a p, e a potência do teste fosse de 0,9, então existiria uma chance de 90% de o teste ter detectado essa diferença.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "chance de 90% de o teste ter detectado",
    cognitivo: {
      motivo: "Interpretação direta da potência como probabilidade de detecção sob uma alternativa específica.",
      palavraCritica: "verdadeiro valor",
    },
    comentario: {
      resolucao: "CERTO. POTÊNCIA é a probabilidade de rejeitar H0 quando H0 é falsa — a chance de o teste DETECTAR um efeito que realmente existe. Potência de 0,9 significa 90% de probabilidade de detecção, e portanto 10% de erro tipo II (beta), ou seja, de deixar passar o efeito. Duas precisões que a banca costuma cobrar em seguida: a potência é sempre calculada CONTRA UM VALOR ESPECÍFICO da alternativa — quanto maior o efeito real, maior a potência —, e por isso não existe 'a potência do teste' em abstrato. Por convenção, estudos são planejados para potência mínima de 0,80.",
      fundamento: "Teoria dos testes de hipóteses — potência e erro tipo II.",
      macete: "Potência = chance de enxergar o efeito que existe. 1 - beta.",
      erroComum: "Ler potência como confiança do intervalo, ou como complemento de alfa.",
      comoBancaPensa: "Enuncia a definição em linguagem corrente para testar se o candidato a reconhece fora do jargão.",
    },
  },

  {
    ...BASE89_ES,
    id: "ES-142", assunto: "Testes de hipóteses",
    subassunto: "Efeito do tamanho da amostra",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 105,
    enunciado: "Se fosse aumentado o tamanho da amostra, seria possível diminuir o nível de significância e aumentar a potência do teste simultaneamente.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "simultaneamente",
    cognitivo: {
      motivo: "Fecha o bloco: o trade-off entre os dois erros só é rompido aumentando n.",
      palavraCritica: "aumentado o tamanho da amostra",
    },
    comentario: {
      resolucao: "CERTO, e é a chave de todo o bloco. Com n FIXO, alfa e beta se opõem: reduzir um aumenta o outro. Aumentar n reduz o erro padrão (que decresce na razão da raiz de n), estreitando as distribuições amostrais sob H0 e sob H1 e diminuindo a sobreposição entre elas — o que permite ser mais rigoroso (alfa menor) e ainda assim mais sensível (potência maior). É por isso que o cálculo do tamanho amostral é etapa obrigatória no planejamento de um estudo: fixam-se alfa, a potência desejada e o efeito mínimo de interesse, e daí se deriva o n necessário.",
      fundamento: "Teoria dos testes de hipóteses — relação entre n, alfa, beta e potência.",
      macete: "Amostra maior compra os dois: rigor e sensibilidade.",
      erroComum: "Aplicar o trade-off alfa/beta como se valesse mesmo com n variável.",
      comoBancaPensa: "Usa 'simultaneamente' para induzir a resposta ERRADO em quem decorou o trade-off sem a condição de n fixo.",
    },
  },

  /* ================= ESTATÍSTICA — DISTRIBUIÇÕES ================= */

  {
    ...BASE89_ES,
    id: "ES-143", assunto: "Distribuições de probabilidade",
    subassunto: "Parâmetros suficientes da normal",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 90,
    enunciado: "Para estimar pontualmente os parâmetros da distribuição normal, recomenda-se a utilização de outras propriedades da amostra, além da média e da variância das alturas.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "outras propriedades da amostra, além da média e da variância",
    cognitivo: {
      motivo: "A normal é uma família de dois parâmetros — média e variância a determinam por completo.",
      palavraCritica: "além da",
    },
    comentario: {
      resolucao: "ERRADO. A distribuição normal fica COMPLETAMENTE determinada por dois parâmetros: a média (mu) e a variância (sigma ao quadrado). Conhecidos os dois, toda a curva está definida, e nenhuma outra informação amostral acrescenta nada à estimação pontual. Mais que isso: a média e a variância amostrais são estatísticas SUFICIENTES para a normal, o que significa, tecnicamente, que resumem toda a informação que a amostra carrega sobre os parâmetros. Assimetria e curtose, por exemplo, são fixas na normal (0 e 3), e por isso não servem para estimar coisa alguma — servem, sim, para TESTAR se a normalidade é plausível, que é problema diferente.",
      fundamento: "Distribuição normal — parâmetros e estatísticas suficientes.",
      macete: "Normal = dois parâmetros. Média e variância esgotam a informação.",
      erroComum: "Confundir estimar os parâmetros com verificar a aderência à normalidade.",
      comoBancaPensa: "Sugere que 'mais informação é sempre melhor', o que é falso quando há suficiência.",
    },
  },

  {
    ...BASE89_ES,
    id: "ES-144", assunto: "Distribuições de probabilidade",
    subassunto: "Média da distribuição uniforme contínua",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 90,
    enunciado: "O valor esperado da média amostral de uma amostra aleatória simples retirada de uma população uniformemente distribuída no intervalo [a, b] é igual a b/2.",
    gabarito: "E",
    pegadinha: "troca-numerica",
    palavraChave: "é igual a b/2",
    cognitivo: {
      motivo: "Fórmula objetiva: a média da uniforme é (a+b)/2, e o item apaga o 'a'.",
      palavraCritica: "b/2",
    },
    comentario: {
      resolucao: "ERRADO. A média amostral é estimador NÃO VIESADO da média populacional, de modo que seu valor esperado é a própria média da população. Para a uniforme contínua em [a, b], essa média é (a + b)/2 — o ponto médio do intervalo, por simetria da densidade. O item escreve b/2, expressão que só coincidiria com a correta no caso particular de a = 0. Guarde o par completo da uniforme contínua, que costuma ser cobrado junto: média (a+b)/2 e variância (b-a)²/12.",
      fundamento: "Distribuição uniforme contínua — momentos; propriedade do estimador não viesado.",
      macete: "Uniforme: média é o meio do intervalo, (a+b)/2.",
      erroComum: "Aceitar b/2 por parecer a metade do intervalo quando se ignora o limite inferior.",
      comoBancaPensa: "Suprime um termo da fórmula, deixando uma expressão que funciona num caso particular.",
    },
  },

  {
    ...BASE89_ES,
    id: "ES-145", assunto: "Distribuições de probabilidade",
    subassunto: "Variância da distribuição uniforme contínua",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "A variância populacional de uma distribuição uniforme contínua no intervalo [a, b] é (b-a)²/12.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "(b-a)²/12",
    cognitivo: {
      motivo: "Par direto de ES-144: a outra metade da fórmula da uniforme.",
      palavraCritica: "12",
    },
    comentario: {
      resolucao: "CERTO. A variância da uniforme contínua em [a, b] é (b - a)²/12, e o desvio padrão, portanto, (b - a)/raiz de 12. Note a coerência interna da fórmula: a variância depende só da AMPLITUDE do intervalo, não de onde ele está na reta — deslocar o intervalo não muda a dispersão, o que é exatamente o esperado. O denominador 12 é o alvo preferido de adulteração nas versões seguintes (aparece como 2, 4 ou 6). Junte com ES-144 e o par fica completo: média (a+b)/2, variância (b-a)²/12.",
      fundamento: "Distribuição uniforme contínua — momentos.",
      macete: "Uniforme: média soma e divide por 2; variância subtrai, eleva ao quadrado e divide por 12.",
      erroComum: "Trocar o denominador ou usar (b+a) no lugar de (b-a).",
      comoBancaPensa: "Cobra a fórmula literal; a versão errada mexe no denominador.",
    },
  },

  /* ================= ESTATÍSTICA — CIÊNCIA DE DADOS ================= */

  {
    ...BASE89_ES,
    id: "ES-146", assunto: "Análise de dados",
    subassunto: "Mineração de dados — abordagens",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito revisado na fonte técnica",
    dificuldade: 2, tempoIdealSeg: 80,
    enunciado: "A mineração de dados é uma técnica em que se utilizam exclusivamente algoritmos de aprendizado supervisionado para a identificação de padrões em grandes volumes de dados.",
    gabarito: "E",
    pegadinha: "termo-absoluto",
    palavraChave: "exclusivamente algoritmos de aprendizado supervisionado",
    cognitivo: {
      motivo: "As tarefas mais características da mineração — agrupamento e regras de associação — são NÃO supervisionadas.",
      palavraCritica: "exclusivamente",
    },
    comentario: {
      resolucao: "ERRADO. A mineração de dados abrange tanto o aprendizado SUPERVISIONADO (classificação e regressão, com dados rotulados) quanto o NÃO SUPERVISIONADO (agrupamento, regras de associação, detecção de anomalias, redução de dimensionalidade), além de abordagens semissupervisionadas. Aliás, as tarefas mais emblemáticas da área são não supervisionadas: a segmentação de clientes por clustering e a análise de cesta de compras por regras de associação. Em investigação criminal, a detecção de anomalias em transações financeiras é exemplo direto — não há rótulo prévio de 'suspeito' para aprender.",
      fundamento: "Fundamentos de mineração de dados e aprendizado de máquina.",
      macete: "Supervisionado tem rótulo. Não supervisionado descobre a estrutura sozinho.",
      erroComum: "Reduzir mineração a modelos preditivos com variável alvo.",
      comoBancaPensa: "O 'exclusivamente' faz todo o trabalho; sem ele o item seria correto.",
    },
  },

  {
    ...BASE89_ES,
    id: "ES-147", assunto: "Análise de dados",
    subassunto: "Aprendizado supervisionado",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito revisado na fonte técnica",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "Em machine learning supervisionado, o algoritmo aprende, a partir de um conjunto de dados rotulados, a identificar padrões e realizar previsões em novos dados.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "conjunto de dados rotulados",
    cognitivo: {
      motivo: "Definição-base, par direto de ES-146.",
      palavraCritica: "rotulados",
    },
    comentario: {
      resolucao: "CERTO. No aprendizado SUPERVISIONADO, o modelo é treinado com exemplos em que a resposta correta já é conhecida — os dados ROTULADOS — e aprende a função que mapeia entradas em saídas, para depois generalizar sobre dados novos. Divide-se em CLASSIFICAÇÃO, quando a saída é categórica (fraude/não fraude), e REGRESSÃO, quando é numérica (valor previsto). O nome 'supervisionado' vem daí: o rótulo funciona como professor que corrige o modelo a cada erro durante o treino. O risco típico é o overfitting — decorar o conjunto de treino e generalizar mal —, controlado por separação entre treino, validação e teste.",
      fundamento: "Fundamentos de aprendizado de máquina.",
      macete: "Rótulo é o gabarito do treino. Com gabarito, é supervisionado.",
      erroComum: "Confundir com o não supervisionado, que não tem variável alvo.",
      comoBancaPensa: "Item de fixação, sempre acompanhado de outro com 'exclusivamente' ou 'somente'.",
    },
  },

  /* ================= CONTABILIDADE ================= */

  {
    ...BASE89_CT,
    id: "CT-079", assunto: "Teoria da contabilidade",
    subassunto: "Objeto da contabilidade",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "A contabilidade foca nos grupos de contas destinadas ao registro dos eventos que afetam o patrimônio da entidade contábil.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "foca nos grupos de contas",
    cognitivo: {
      motivo: "Confunde o OBJETO da ciência com o INSTRUMENTO de registro.",
      palavraCritica: "grupos de contas",
    },
    comentario: {
      resolucao: "ERRADO. O OBJETO da contabilidade é o PATRIMÔNIO da entidade — o conjunto de bens, direitos e obrigações — e suas variações. As contas são apenas o INSTRUMENTO pelo qual esse objeto é registrado e classificado; confundir os dois é como dizer que o objeto da medicina é o prontuário. A distinção não é acadêmica: é dela que decorre o campo de aplicação (as entidades com patrimônio) e a finalidade (fornecer informação útil sobre esse patrimônio para a tomada de decisão). Um segundo detalhe do enunciado também merece atenção: nem todo evento que a contabilidade registra afeta o patrimônio em valor — os fatos permutativos apenas o recompõem, como em CT-084.",
      fundamento: "Teoria da contabilidade — objeto, campo de aplicação e finalidade.",
      macete: "Objeto é o patrimônio. Conta é ferramenta.",
      erroComum: "Definir a contabilidade pela técnica de escrituração.",
      comoBancaPensa: "Troca objeto por instrumento, numa frase que soa correta a quem só conhece a rotina de lançamentos.",
    },
  },

  {
    ...BASE89_CT,
    id: "CT-080", assunto: "Equação patrimonial",
    subassunto: "Apuração do resultado pela equação fundamental",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 110,
    enunciado: "Se, antes da apuração do resultado do exercício corrente, uma entidade tivesse ativo total de R$ 150 mil, obrigações com terceiros de R$ 125 mil e patrimônio líquido de R$ 30 mil, então o resultado do exercício dessa entidade seria um prejuízo.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "seria um prejuízo",
    cognitivo: {
      motivo: "Aplicação numérica direta da equação patrimonial, com o resultado como incógnita.",
      palavraCritica: "antes da apuração do resultado",
    },
    comentario: {
      resolucao: "CERTO. Pela equação fundamental, Ativo = Passivo + Patrimônio Líquido. Como o resultado ainda não foi incorporado ao PL, ele entra como parcela a apurar: 150 = 125 + 30 + R, o que dá R = 150 - 155 = -5 mil. Valor negativo significa PREJUÍZO de R$ 5 mil. Confira pela lógica, sem a conta: o passivo somado ao PL informado (155) supera o ativo (150), e essa diferença de 5 só se fecha com um resultado negativo. Note que aqui o PL de 30 mil ainda é positivo — a entidade tem prejuízo no exercício sem estar em passivo a descoberto, situação que só ocorreria se o PL final ficasse negativo.",
      fundamento: "Equação fundamental do patrimônio: A = P + PL.",
      macete: "Passivo + PL maior que o Ativo? Falta resultado negativo para fechar.",
      erroComum: "Somar o resultado no lugar de subtrair, invertendo o sinal.",
      comoBancaPensa: "Dá três valores e pede o sinal do quarto; o cálculo é trivial, o erro está no arranjo.",
    },
  },

  {
    ...BASE89_CT,
    id: "CT-081", assunto: "Contas patrimoniais",
    subassunto: "Natureza devedora e credora",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 140,
    enunciado: "Em uma lista contendo as contas caixa, bancos, impostos a recolher, empréstimos a pagar, juros passivos a transcorrer, depreciação acumulada, capital social, duplicatas descontadas, instalações, veículos, reserva para contingências e ações em tesouraria, o número de contas credoras é igual ao número de contas devedoras.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "número de contas credoras é igual ao número de contas devedoras",
    cognitivo: {
      motivo: "Exige classificar doze contas, incluindo quatro retificadoras — que são a armadilha inteira.",
      palavraCritica: "juros passivos a transcorrer ... ações em tesouraria",
    },
    comentario: {
      resolucao: "CERTO — são 6 de cada. DEVEDORAS: caixa, bancos, instalações e veículos (contas do ativo), mais juros passivos a transcorrer e ações em tesouraria. CREDORAS: impostos a recolher, empréstimos a pagar, capital social e reserva para contingências, mais depreciação acumulada e duplicatas descontadas. O item vive das RETIFICADORAS, que têm natureza invertida em relação ao grupo em que aparecem: depreciação acumulada retifica o ativo imobilizado e por isso é credora; ações em tesouraria retificam o patrimônio líquido e por isso são devedoras; juros passivos a transcorrer retificam o passivo e são devedores; duplicatas descontadas retificam o ativo (ou figuram no passivo) e são credoras. Quem classifica só por grupo erra as quatro.",
      fundamento: "Mecanismo de débito e crédito; contas retificadoras.",
      macete: "Retificadora tem sempre o sinal contrário ao do grupo que ela corrige.",
      erroComum: "Classificar tudo pelo grupo (ativo devedor, passivo credor) e ignorar as retificadoras.",
      comoBancaPensa: "Monta a lista para que o resultado só empate se todas as retificadoras forem classificadas certo.",
    },
  },

  {
    ...BASE89_CT,
    id: "CT-082", assunto: "Fatos contábeis",
    subassunto: "IRRF sobre a folha e o passivo circulante",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 100,
    enunciado: "O registro do imposto de renda retido na fonte, advindo da folha de pagamento, proporcionará um aumento no passivo circulante da empresa no momento do reconhecimento da despesa com salários.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "aumento no passivo circulante",
    cognitivo: {
      motivo: "A empresa é apenas responsável tributária: retém valor de terceiro e assume obrigação de repassar.",
      palavraCritica: "retido na fonte",
    },
    comentario: {
      resolucao: "CERTO. No reconhecimento da folha pelo regime de competência, a empresa debita a despesa com salários pelo valor BRUTO e credita duas obrigações: salários a pagar (o líquido devido ao empregado) e IRRF a recolher (o valor retido, devido ao Fisco). Ambas são passivo circulante, e por isso o registro aumenta esse grupo. O ponto conceitual é que a empresa não é contribuinte desse imposto — é RESPONSÁVEL TRIBUTÁRIA: retém dinheiro do empregado e o repassa ao Fisco no prazo legal, funcionando como intermediária. Daí o IRRF não ser despesa da empresa, e sim redutor do que ela paga ao empregado.",
      fundamento: "Regime de competência; contabilização de folha de pagamento e retenções.",
      macete: "O que a empresa retém de terceiro vira obrigação dela até repassar.",
      erroComum: "Tratar o IRRF sobre a folha como despesa tributária da empresa.",
      comoBancaPensa: "Cobra o efeito patrimonial de um lançamento de rotina, e não o lançamento em si.",
    },
  },

  {
    ...BASE89_CT,
    id: "CT-083", assunto: "Regime de competência",
    subassunto: "Encargos financeiros a transcorrer",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 115,
    enunciado: "O pagamento antecipado dos encargos financeiros advindos de um empréstimo plurianual captado no ano fiscal anterior reduzirá o lucro do exercício no ano fiscal anterior, sem impacto sobre os períodos fiscais subsequentes.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "sem impacto sobre os períodos fiscais subsequentes",
    cognitivo: {
      motivo: "Confunde o momento do DESEMBOLSO com o da APROPRIAÇÃO — o núcleo do regime de competência.",
      palavraCritica: "pagamento antecipado",
    },
    comentario: {
      resolucao: "ERRADO. Pelo regime de COMPETÊNCIA, a despesa é reconhecida no período em que é INCORRIDA, não naquele em que é paga. Encargos financeiros pagos antecipadamente sobre empréstimo plurianual são registrados em conta retificadora do passivo — 'encargos financeiros a transcorrer' — e apropriados ao resultado PRO RATA TEMPORIS, ao longo de todos os exercícios de vigência do contrato. Portanto o lucro do ano anterior é reduzido apenas pela parcela daquele período, e os exercícios seguintes sofrem impacto sim, cada um pela sua fração. É o mesmo mecanismo, do lado do ativo, das despesas antecipadas como aluguel e seguro pagos adiantados.",
      fundamento: "Regime de competência; encargos financeiros a transcorrer como conta retificadora do passivo.",
      macete: "Pagou tudo de uma vez, apropria aos poucos. Caixa e competência não se confundem.",
      erroComum: "Reconhecer a despesa inteira no exercício do desembolso.",
      comoBancaPensa: "Aproveita a intuição de caixa, que é a forma natural de pensar de quem não domina competência.",
    },
  },

  {
    ...BASE89_CT,
    id: "CT-084", assunto: "Fatos contábeis",
    subassunto: "Fato permutativo",
    origem: "CEBRASPE PC-PE 2024 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "A compra, à vista, de mercadorias para revenda constitui um fato administrativo permutativo.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "permutativo",
    cognitivo: {
      motivo: "Critério único: o fato altera ou não o valor do patrimônio líquido.",
      palavraCritica: "à vista",
    },
    comentario: {
      resolucao: "CERTO. Fato PERMUTATIVO é o que apenas troca elementos patrimoniais entre si, sem alterar o valor do patrimônio líquido. A compra à vista faz exatamente isso: o estoque aumenta e o caixa diminui, na mesma importância, dentro do ativo. Compare com as outras espécies: MODIFICATIVO altera o PL (pagamento de uma despesa, recebimento de uma receita) e MISTO combina os dois efeitos (pagar uma duplicata com desconto obtido — permuta caixa por dívida e ainda gera receita). A palavra 'à vista' é decisiva: a prazo, o fato continua permutativo (estoque aumenta, fornecedores aumentam), mas por outro arranjo.",
      fundamento: "Classificação dos fatos contábeis: permutativos, modificativos e mistos.",
      macete: "Mexeu no valor do PL? Modificativo. Só trocou de lugar? Permutativo.",
      erroComum: "Achar que qualquer saída de caixa reduz o PL.",
      comoBancaPensa: "Item de base; a versão difícil traz o fato misto disfarçado.",
    },
  },

  {
    ...BASE89_CT,
    id: "CT-085", assunto: "Demonstrações e controles",
    subassunto: "Balancete de oito colunas",
    origem: "CEBRASPE PC-PE 2024 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "O efeito líquido da movimentação do período sobre o saldo de uma conta é explicitado por meio de balancetes de oito colunas.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "efeito líquido da movimentação do período",
    cognitivo: {
      motivo: "Distingue os formatos de balancete pelo que cada um consegue evidenciar.",
      palavraCritica: "oito colunas",
    },
    comentario: {
      resolucao: "CERTO. O balancete de verificação varia conforme o detalhamento. O de DUAS colunas traz apenas os saldos finais devedores e credores; o de QUATRO acrescenta a movimentação do período a débito e a crédito; o de SEIS parte dos saldos anteriores, mostra a movimentação e chega aos saldos atuais; e o de OITO COLUNAS acrescenta a esses o SALDO DA MOVIMENTAÇÃO — o efeito líquido do período sobre cada conta, isolado do saldo que vinha de antes. É essa coluna adicional que permite ver, de relance, se o período aumentou ou reduziu o saldo da conta, sem ter de comparar o inicial com o final.",
      fundamento: "Balancete de verificação — formatos de 2, 4, 6 e 8 colunas.",
      macete: "Mais colunas, mais detalhe. Oito é o que isola o efeito líquido do período.",
      erroComum: "Tratar todo balancete como se fosse o de duas colunas.",
      comoBancaPensa: "Cobra o que cada formato evidencia, e não a definição de balancete.",
    },
  },

  {
    ...BASE89_CT,
    id: "CT-086", assunto: "Ativo imobilizado",
    subassunto: "Baixa de bem totalmente depreciado",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 110,
    enunciado: "A baixa de um bem que tenha sido totalmente depreciado e para o qual não tenha havido previsão de valor residual não afetará o resultado do exercício, tampouco o saldo do grupo de contas do ativo do qual aquele bem faça parte.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "não afetará o resultado ... tampouco o saldo do grupo",
    cognitivo: {
      motivo: "Exige enxergar o valor CONTÁBIL LÍQUIDO, não o valor de aquisição.",
      palavraCritica: "totalmente depreciado ... sem valor residual",
    },
    comentario: {
      resolucao: "CERTO nas duas afirmações. Bem integralmente depreciado e sem valor residual tem VALOR CONTÁBIL LÍQUIDO ZERO: o custo de aquisição está inteiramente compensado pela depreciação acumulada. A baixa consiste em debitar a depreciação acumulada e creditar a conta do bem, pelo mesmo valor — não há ganho nem perda a reconhecer, e o resultado não é afetado. E o grupo do ativo também não muda de saldo, porque as duas contas envolvidas pertencem a ele e se anulam: uma retificadora diminui, a outra diminui na mesma medida. Só haveria efeito no resultado se restasse valor residual (gerando perda) ou se houvesse venda com contraprestação (gerando ganho).",
      fundamento: "Baixa de ativo imobilizado; valor contábil líquido.",
      macete: "Valor líquido zero: a baixa só apaga as duas pontas, sem passar pelo resultado.",
      erroComum: "Reconhecer perda pelo valor de aquisição, esquecendo a depreciação já acumulada.",
      comoBancaPensa: "Coloca as duas condições que zeram o valor contábil e testa quem raciocina pelo bruto.",
    },
  },

  /* ================= RACIOCÍNIO LÓGICO-MATEMÁTICO ================= */

  {
    ...BASE89_RL,
    id: "RL-041", assunto: "Análise combinatória",
    subassunto: "Princípio multiplicativo",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte (o compilado trazia o item duas vezes, com gabaritos opostos)",
    dificuldade: 2, tempoIdealSeg: 100,
    enunciado: "Em uma festa, cada rapaz cumprimentou exatamente uma vez todos os outros rapazes com apertos de mão, e cada moça cumprimentou exatamente uma vez todos os outros presentes com um aceno. Se havia 20 moças e 18 rapazes, então o número de cumprimentos entre moças e rapazes com acenos foi superior a 350.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "superior a 350",
    cognitivo: {
      motivo: "O enunciado pede um subconjunto dos cumprimentos — só os que cruzam moças e rapazes.",
      palavraCritica: "entre moças e rapazes",
    },
    comentario: {
      resolucao: "CERTO. A pergunta restringe-se aos acenos ENTRE MOÇAS E RAPAZES, e não a todos os cumprimentos da festa. Cada uma das 20 moças acenou para cada um dos 18 rapazes, e pelo princípio multiplicativo são 20 x 18 = 360 acenos — superior a 350, o que confirma a assertiva. Repare que os apertos de mão entre rapazes e os acenos entre moças ficam de fora da conta por não serem 'entre moças e rapazes'; incluí-los é o erro típico. Não há divisão por 2 aqui, porque o aceno é ato de quem acena, e não encontro mútuo — se o enunciado pedisse pares distintos, a conta seria outra.",
      fundamento: "Princípio fundamental da contagem.",
      macete: "Leia o que está sendo contado antes de contar. 20 x 18 = 360.",
      erroComum: "Somar todos os cumprimentos da festa, ou dividir o produto por 2.",
      comoBancaPensa: "Fornece dados suficientes para várias contas e especifica em três palavras qual delas quer.",
    },
  },

  {
    ...BASE89_RL,
    id: "RL-042", assunto: "Probabilidade",
    subassunto: "Probabilidade por combinações",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 110,
    enunciado: "Cinco pessoas são suspeitas de um crime e exatamente duas delas são culpadas. Escolhendo-se aleatoriamente duas dessas cinco pessoas, a probabilidade de que ambas sejam as culpadas é igual a 1/10.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "igual a 1/10",
    cognitivo: {
      motivo: "Probabilidade clássica com combinações — a ordem não importa, e é isso que fixa o denominador.",
      palavraCritica: "aleatoriamente duas",
    },
    comentario: {
      resolucao: "CERTO. Casos possíveis: escolher 2 entre 5 sem importar a ordem, ou seja, C(5,2) = 10. Casos favoráveis: escolher exatamente os 2 culpados, C(2,2) = 1. Logo P = 1/10. Confira pelo caminho da multiplicação de probabilidades, que costuma ser mais seguro: a chance de o primeiro escolhido ser culpado é 2/5; dado isso, a de o segundo também ser é 1/4; e (2/5) x (1/4) = 2/20 = 1/10. Os dois métodos coincidem porque ambos tratam a escolha como não ordenada. Usar arranjo no lugar de combinação daria 20 no denominador e 2 no numerador — mesma fração, desde que a alteração seja feita nos dois lados.",
      fundamento: "Probabilidade clássica; combinações.",
      macete: "Escolha sem ordem é combinação. C(5,2) = 10 casos possíveis.",
      erroComum: "Misturar arranjo no denominador com combinação no numerador.",
      comoBancaPensa: "Número pequeno e conta curta; o erro vem da modelagem, não da aritmética.",
    },
  },

  {
    ...BASE89_RL,
    id: "RL-043", assunto: "Lógica proposicional",
    subassunto: "Equivalência pela contrapositiva",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito conferido no caderno oficial",
    dificuldade: 3, tempoIdealSeg: 105,
    enunciado: "A proposição \"Se Paulo está mentindo, então Maria não está mentindo\" é equivalente à proposição \"Se Maria está mentindo, então Paulo não está mentindo\".",
    gabarito: "C",
    pegadinha: "negacao-dupla",
    palavraChave: "é equivalente à proposição",
    cognitivo: {
      motivo: "A contrapositiva exige inverter E negar os dois termos — e aqui um deles já vem negado.",
      palavraCritica: "não está mentindo",
    },
    comentario: {
      resolucao: "CERTO. Chame p = 'Paulo está mentindo' e m = 'Maria está mentindo'. A primeira proposição é p → ~m. A CONTRAPOSITIVA de A → B é ~B → ~A, sempre equivalente à original. Aplicando: ~(~m) → ~p, e pela dupla negação ~(~m) = m, o que dá m → ~p, isto é, 'Se Maria está mentindo, então Paulo não está mentindo' — exatamente a segunda proposição. A dificuldade do item está na dupla negação: como o consequente já era negativo, negá-lo o torna afirmativo, e quem aplica a regra mecanicamente escreve 'Se Maria NÃO está mentindo' e conclui, errado, que não há equivalência.",
      fundamento: "Lógica proposicional — equivalência pela contrapositiva; dupla negação.",
      macete: "Contrapositiva: inverte a ordem e nega os dois. Negar o que já é negativo devolve o afirmativo.",
      erroComum: "Esquecer a dupla negação e produzir uma contrapositiva errada.",
      comoBancaPensa: "Constrói a condicional com o consequente já negado, para que a regra só funcione com a dupla negação.",
    },
  },

  {
    ...BASE89_RL,
    id: "RL-044", assunto: "Lógica proposicional",
    subassunto: "Negação de proposição categórica universal",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito conferido no caderno oficial",
    dificuldade: 2, tempoIdealSeg: 80,
    enunciado: "A negação da proposição \"Todos são iguais perante a lei\" é \"Todos são diferentes perante a lei\".",
    gabarito: "E",
    pegadinha: "negacao-dupla",
    palavraChave: "\"Todos são diferentes perante a lei\"",
    cognitivo: {
      motivo: "Negar o universal produz um EXISTENCIAL, não o universal contrário.",
      palavraCritica: "Todos",
    },
    comentario: {
      resolucao: "ERRADO. A negação de 'TODO A é B' é 'ALGUM A NÃO é B' — troca-se o quantificador universal pelo existencial e nega-se o predicado. A negação correta seria 'Pelo menos um não é igual perante a lei'. 'Todos são diferentes' não é a negação: é a proposição CONTRÁRIA, e a diferença é lógica, não de estilo — contrárias não podem ser ambas verdadeiras, mas podem ser ambas falsas, ao passo que uma proposição e sua negação têm sempre valores opostos. Se metade fosse tratada com igualdade e metade não, tanto 'todos são iguais' quanto 'todos são diferentes' seriam falsas, o que prova que a segunda não nega a primeira.",
      fundamento: "Lógica de predicados — negação de proposições categóricas.",
      macete: "Negar TODO dá ALGUM NÃO. Nunca dá NENHUM nem TODO o contrário.",
      erroComum: "Negar trocando o predicado por seu oposto, mantendo o quantificador universal.",
      comoBancaPensa: "Oferece a contrária, que soa como negação na linguagem comum.",
    },
  },

  {
    ...BASE89_RL,
    id: "RL-045", assunto: "Análise combinatória",
    subassunto: "Permutação com restrição de adjacência",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito conferido no caderno oficial (resolução da própria banca)",
    dificuldade: 3, tempoIdealSeg: 140,
    enunciado: "Seis pessoas devem se reunir em uma mesa redonda, mas duas delas não podem se sentar uma ao lado da outra. Nessa situação, a quantidade de maneiras distintas de essas seis pessoas sentarem em torno dessa mesa é superior a 400.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "superior a 400",
    cognitivo: {
      motivo: "Item de mesa redonda em que a banca NÃO usou permutação circular — vale mais pelo método do que pelo número.",
      palavraCritica: "mesa redonda",
    },
    comentario: {
      resolucao: "CERTO, e o caminho da banca merece ser reproduzido, porque é o que ela repete. Pela justificativa oficial: a primeira pessoa com restrição tem 6 lugares possíveis na mesa; fixada ela, a segunda pessoa com restrição não pode ocupar os dois lugares vizinhos nem o dela própria, restando 3 opções; as outras quatro pessoas se distribuem livremente, em 4! = 24 maneiras. Total: 6 x 3 x 24 = 432, superior a 400. Observe que a banca tratou os LUGARES COMO DISTINTOS — não aplicou permutação circular, que descontaria as rotações e daria 5! - 2 x 4! = 72. É uma escolha de modelagem que muda o resultado por um fator de 6, e é a da banca que vale na prova.",
      fundamento: "Princípio multiplicativo com restrição de adjacência (resolução oficial CEBRASPE).",
      macete: "Posiciona primeiro quem tem restrição, depois solta o resto: 6 x 3 x 4! = 432.",
      erroComum: "Aplicar permutação circular (5!) por ver 'mesa redonda' e chegar a 72.",
      comoBancaPensa: "Usa o cenário de mesa redonda sem exigir o tratamento circular — o enunciado pergunta por lugares, não por posições relativas.",
    },
  },

  {
    ...BASE89_RL,
    id: "RL-046", assunto: "Lógica proposicional",
    subassunto: "Número de linhas da tabela-verdade",
    origem: "CEBRASPE — prova real (item de caderno policial) — gabarito revisado na fonte técnica",
    dificuldade: 2, tempoIdealSeg: 80,
    enunciado: "A tabela-verdade associada à proposição \"Se o condenado não for reincidente em crime doloso, tiver bons antecedentes e tiver cumprido mais de um terço da pena, então pedirá o livramento condicional\" possui mais de 15 linhas.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "mais de 15 linhas",
    cognitivo: {
      motivo: "Basta contar proposições simples e aplicar 2 elevado a n — o desafio é contar certo.",
      palavraCritica: "mais de 15",
    },
    comentario: {
      resolucao: "CERTO. Identifique as proposições SIMPLES: (1) o condenado é reincidente em crime doloso, (2) tem bons antecedentes, (3) cumpriu mais de um terço da pena e (4) pedirá o livramento condicional — quatro ao todo. O número de linhas da tabela-verdade é 2 elevado ao número de proposições simples, ou seja, 2⁴ = 16, que é mais de 15. Dois cuidados na contagem: o 'não' da primeira é operador de negação, e não uma quinta proposição; e os conectivos 'e' e 'se... então' também não contam. A estrutura completa é (~A ∧ B ∧ C) → D.",
      fundamento: "Lógica proposicional — tabela-verdade e número de linhas.",
      macete: "Conte só as proposições SIMPLES e faça 2 elevado a n. Negações não contam.",
      erroComum: "Contar a negação como proposição à parte, chegando a 32 linhas.",
      comoBancaPensa: "Fixa o limiar exatamente em 15, um a menos que o resultado, para que só quem conta certo acerte.",
    },
  },

  {
    ...BASE89_RL,
    id: "RL-047", assunto: "Lógica proposicional",
    subassunto: "Condicional falsa — valor do consequente",
    origem: "CEBRASPE — prova real (item de caderno policial) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 100,
    enunciado: "Considere a proposição P: \"Se o condenado não for reincidente em crime doloso, tiver bons antecedentes e tiver cumprido mais de um terço da pena, então pedirá o livramento condicional\". Se P for falsa, então o condenado não pedirá o livramento condicional.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "Se P for falsa",
    cognitivo: {
      motivo: "A condicional só é falsa num único arranjo — e esse arranjo determina os dois lados.",
      palavraCritica: "P for falsa",
    },
    comentario: {
      resolucao: "CERTO. A condicional A → B é FALSA em um único caso: antecedente VERDADEIRO e consequente FALSO. Todos os outros três arranjos a tornam verdadeira. Logo, dizer que P é falsa equivale a afirmar simultaneamente duas coisas: que o antecedente é verdadeiro (o condenado não é reincidente, tem bons antecedentes e cumpriu mais de um terço da pena) e que o consequente é falso (ele NÃO pedirá o livramento condicional). A assertiva afirma justamente a segunda, e por isso está correta. Este é o raciocínio de partida para negar condicionais: ~(A → B) equivale a A ∧ ~B — a negação de um 'se... então' nunca é outro 'se... então'.",
      fundamento: "Lógica proposicional — tabela-verdade da condicional; negação da condicional.",
      macete: "Condicional só é falsa com V → F. Negar 'se A então B' dá 'A e não B'.",
      erroComum: "Supor que P falsa torna também o antecedente falso.",
      comoBancaPensa: "Explora a única linha falsa da condicional, que a maioria decora sem entender.",
    },
  },

  {
    ...BASE89_RL,
    id: "RL-048", assunto: "Lógica de predicados",
    subassunto: "Negação de quantificador universal com disjunção",
    origem: "CEBRASPE PF 2025 (Escrivão) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 100,
    enunciado: "A negação da sentença \"todo condutor abordado na fiscalização era brasileiro ou estrangeiro\" é a seguinte sentença: \"nenhum condutor abordado na fiscalização era brasileiro ou estrangeiro\".",
    gabarito: "E",
    pegadinha: "negacao-dupla",
    palavraChave: "nenhum condutor",
    cognitivo: {
      motivo: "Dois erros: 'nenhum' no lugar de 'algum não', e a disjunção que deveria virar conjunção.",
      palavraCritica: "nenhum",
    },
    comentario: {
      resolucao: "ERRADO, por dois motivos que se somam. Primeiro, negar 'TODO' produz 'ALGUM NÃO', jamais 'NENHUM' — 'nenhum' é a contrária, não a contraditória, como em RL-044. Segundo, ao negar o predicado é preciso aplicar De Morgan: a negação de 'brasileiro OU estrangeiro' é 'não brasileiro E não estrangeiro'. A negação correta, portanto, é: 'Pelo menos um condutor abordado não era brasileiro E não era estrangeiro'. O item erra no quantificador e ainda preserva o 'ou', que deveria ter virado 'e'.",
      fundamento: "Lógica de predicados; leis de De Morgan.",
      macete: "Nega TODO vira ALGUM NÃO; e ao negar, OU vira E.",
      erroComum: "Negar só o quantificador e deixar o predicado intacto.",
      comoBancaPensa: "Combina dois erros num só item, para que acertar exija dominar as duas regras.",
    },
  },

  {
    ...BASE89_RL,
    id: "RL-049", assunto: "Análise combinatória",
    subassunto: "Espaço de busca em ataque de força bruta",
    origem: "CEBRASPE PF 2025 (Escrivão) — gabarito revisado na fonte técnica",
    dificuldade: 2, tempoIdealSeg: 85,
    enunciado: "Para uma senha numérica de 8 dígitos, sem qualquer informação adicional sobre sua composição, a quantidade máxima de senhas a serem testadas em um ataque de força bruta seria de 10⁸.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "10⁸",
    cognitivo: {
      motivo: "Aplicação do princípio multiplicativo a um problema de segurança — arranjo COM repetição.",
      palavraCritica: "8 dígitos",
    },
    comentario: {
      resolucao: "CERTO. Cada uma das 8 posições admite qualquer algarismo de 0 a 9, com repetição permitida, e as escolhas são independentes. Pelo princípio multiplicativo, o total é 10 x 10 x ... x 10, oito vezes, ou seja, 10⁸ = 100 milhões de combinações. Note que se trata de ARRANJO COM REPETIÇÃO, e não de permutação ou combinação simples — o erro típico é usar fatorial. Do ponto de vista de segurança, o número ilustra por que senhas numéricas curtas são frágeis: 10⁸ é trivial para um atacante offline, e é por isso que se exige alfabeto ampliado (maiúsculas, minúsculas, símbolos), o que eleva a base de 10 para 90 e mais.",
      fundamento: "Princípio multiplicativo; arranjo com repetição.",
      macete: "n posições, k opções cada, com repetição: k elevado a n.",
      erroComum: "Usar fatorial ou combinação onde cabe arranjo com repetição.",
      comoBancaPensa: "Veste um problema de contagem com roupa de segurança da informação, tema que a PF cobra nas duas disciplinas.",
    },
  },

  /* ================= LÍNGUA PORTUGUESA ================= */

  {
    ...BASE89_PT,
    id: "PT-173", assunto: "Sintaxe",
    subassunto: "Complemento verbal x adjunto adverbial",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte gramatical",
    dificuldade: 3, tempoIdealSeg: 90,
    enunciado: "Em \"Ele nada faz sem motivo\", o termo \"sem motivo\" exerce a função de complemento da forma verbal \"faz\".",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "função de complemento",
    cognitivo: {
      motivo: "O verbo já tem seu complemento na oração — o outro termo só pode ser adjunto.",
      palavraCritica: "sem motivo",
    },
    comentario: {
      resolucao: "ERRADO. O complemento de 'faz' é o pronome indefinido 'nada', que funciona como objeto direto — 'ele faz nada', na ordem direta. 'Sem motivo' é ADJUNTO ADVERBIAL de causa (ou modo), termo acessório que exprime circunstância e não integra a regência do verbo. O teste é direto: complemento completa o sentido de um verbo transitivo e não pode ser suprimido sem prejuízo sintático; adjunto pode ser retirado e a oração continua de pé — 'Ele nada faz' permanece completa. Ajuda ainda observar que a preposição 'sem' não é exigida pelo verbo fazer, mas escolhida para exprimir a circunstância.",
      fundamento: "Gramática normativa — termos integrantes e termos acessórios da oração.",
      macete: "Tire o termo: se a oração continua completa, era adjunto.",
      erroComum: "Chamar de complemento todo termo preposicionado que vem depois do verbo.",
      comoBancaPensa: "Escolhe uma oração curta em ordem indireta, para que o verdadeiro objeto passe despercebido.",
    },
  },

  {
    ...BASE89_PT,
    id: "PT-174", assunto: "Concordância verbal",
    subassunto: "Haver impessoal x existir pessoal",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte gramatical",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "Estaria gramaticalmente correta a substituição de \"há\" por \"existe\" em \"Afirma que há dúvidas em alguns casos\".",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "substituição de \"há\" por \"existe\"",
    cognitivo: {
      motivo: "Os dois verbos são sinônimos no sentido, mas têm regimes diferentes: um é impessoal, o outro não.",
      palavraCritica: "dúvidas",
    },
    comentario: {
      resolucao: "ERRADO. 'Haver' no sentido de existir é verbo IMPESSOAL: não tem sujeito, fica sempre na terceira pessoa do singular e o termo que o acompanha é objeto direto — por isso 'há dúvidas' está correto. Já 'existir' é verbo PESSOAL: tem sujeito e com ele concorda. Como 'dúvidas' está no plural, a substituição correta seria 'EXISTEM dúvidas', e não 'existe dúvidas'. A troca proposta produz erro de concordância. Vale estender a regra: o mesmo vale para 'fazer' indicando tempo decorrido, também impessoal ('faz dez anos'), e a impessoalidade se transmite ao auxiliar em locuções ('deve haver dúvidas', nunca 'devem haver').",
      fundamento: "Gramática normativa — verbos impessoais e concordância verbal.",
      macete: "Haver não concorda, existir concorda. Há dúvidas, existem dúvidas.",
      erroComum: "Tratar os dois como intercambiáveis por serem sinônimos.",
      comoBancaPensa: "Propõe uma substituição semanticamente perfeita e sintaticamente inválida.",
    },
  },

  {
    ...BASE89_PT,
    id: "PT-175", assunto: "Crase",
    subassunto: "Crase facultativa antes de pronome possessivo",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte gramatical",
    dificuldade: 3, tempoIdealSeg: 90,
    enunciado: "No trecho \"largue tudo de repente sob os olhares à sua volta\", o uso do acento indicativo de crase é facultativo.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "é facultativo",
    cognitivo: {
      motivo: "Um dos três casos clássicos de crase facultativa — e o menos lembrado dos três.",
      palavraCritica: "sua",
    },
    comentario: {
      resolucao: "CERTO. Antes de pronome possessivo feminino singular, o uso do artigo é FACULTATIVO — pode-se dizer 'à sua volta' ou 'a sua volta' —, e como a crase depende da fusão da preposição com o artigo, ela acompanha essa facultatividade. São três os casos clássicos de crase facultativa, e vale memorizá-los juntos: antes de possessivo feminino singular, antes de nome próprio feminino de pessoa ('Refiro-me a/à Maria') e depois da preposição 'até' ('Foi até a/à porta'). Fora deles, a crase é obrigatória ou proibida, sem meio-termo.",
      fundamento: "Gramática normativa — emprego do acento grave indicativo de crase.",
      macete: "Facultativa em três casos: possessivo feminino, nome de mulher e depois de 'até'.",
      erroComum: "Tratar toda crase como obrigatória ou proibida, sem admitir a faixa facultativa.",
      comoBancaPensa: "Escolhe o caso facultativo menos conhecido dos três.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE89);
