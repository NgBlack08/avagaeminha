/* =====================================================================
   QUESTLAB — Lote 129: MÚLTIPLA ESCOLHA DERIVADA DOS QAPs DE RLM E ESTATÍSTICA

   MÉTODO E REGRAS: os dos lotes 98, 106, 112 e 117. Cada item reúne quatro
   afirmativas I–IV que já existem no banco como itens CERTO/ERRADO dos
   lotes 118 a 128; o valor de verdade vem do gabarito do item de origem.
   Foram usadas só afirmativas que se sustentam sem o texto-base, e o
   comando "julgue o item" de cada fonte foi retirado da afirmativa.

   13 itens: 6 de Raciocínio Lógico-Matemático (RL-627 a RL-632) e 7 de
   Estatística (ES-750 a ES-756).
   ===================================================================== */

const BASE129 = {
  concurso: "PCAL", cargo: ["Escrivão", "Agente"], ano: 2026,
  tipo: "ME", probReaparecer: 0.8,
  origem: "Autoral QuestLab — múltipla escolha derivada de itens C/E dos QAPs DSO já no banco (lotes 118 a 128); IDs de origem no subassunto",
};

const QUESTOES_PCAL_LOTE129 = [

  {
    ...BASE129,
    id: "RL-627", disciplina: "Raciocínio Lógico-Matemático", assunto: "Negação e equivalência",
    subassunto: "Derivado de RL-159, RL-242, RL-272, RL-283 — negação e equivalências do condicional",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de negações e equivalências lógicas, considere as seguintes afirmações:\n\nI. A negação da afirmação “Todos os amigos de Bianca são naturais de São Paulo” é: “Nenhum amigo de Bianca é natural de São Paulo”.\nII. A proposição lógica (Q → R) ˄ P é equivalente à proposição lógica (~Q ˄ P) ˅ (R ˄ P).\nIII. A expressão Q ∧ (∼P) é equivalente à expressão ∼(P→Q).\nIV. A proposição lógica P ∧ Q é equivalente à negação da proposição P → (∼Q).\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "negacao-dupla", palavraChave: "negação",
    cognitivo: {
      motivo: "Revisar negação e equivalências do condicional.",
      palavraCritica: "Nenhum",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I incorreta: negar 'todos' dá 'algum não'; 'nenhum' é a contrária. Afirmativa II correta: (Q → R) ∧ P ≡ (¬Q ∨ R) ∧ P ≡ (¬Q ∧ P) ∨ (R ∧ P). Afirmativa III incorreta: ¬(P → Q) ≡ P ∧ ¬Q, e não Q ∧ ¬P. Afirmativa IV correta: ¬(P → ¬Q) ≡ P ∧ Q. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "Lógica proposicional e de predicados.",
      macete: "Negar condicional: mantém o antecedente e nega o consequente.",
      erroComum: "Negar 'todo' com 'nenhum'.",
      comoBancaPensa: "Mistura regras de negação.",
    },
  },

  {
    ...BASE129,
    id: "RL-628", disciplina: "Raciocínio Lógico-Matemático", assunto: "Conceito de proposição",
    subassunto: "Derivado de RL-166, RL-185, RL-195, RL-180 — proposições simples, compostas e tautologias",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Com relação a proposições lógicas, considere as seguintes afirmações:\n\nI. A sentença “As mudanças nas correntes marítimas são consequências das fases da Lua.” pode ser representada corretamente pela proposição lógica P → Q.\nII. A frase “Como Cachoeiro do Itapemirim é uma linda cidade, ela possui vários pontos turísticos.” é uma proposição simples.\nIII. A seguinte sentença é uma proposição lógica composta: “Todas as metodologias de ensino que promovem o crescimento do indivíduo tanto academicamente quanto em sua cidadania devem ser estudadas.”.\nIV. A proposição lógica a seguir é uma tautologia. ~(Q → P) ˅ [(~B) ˅ (~C)] ↔ ~[(B ˄ C) ˄ (Q → P)]\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
    ],
    gabarito: "B", pegadinha: "troca-conceito", palavraChave: "proposição simples",
    cognitivo: {
      motivo: "Revisar proposições simples, compostas e tautologias.",
      palavraCritica: "tautologia",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I incorreta: 'é consequência de' com um só verbo é proposição simples, não P → Q. Afirmativa II incorreta: 'Como X, Y' liga duas orações: proposição composta. Afirmativa III incorreta: oração adjetiva com 'tanto… quanto' não torna a proposição composta. Afirmativa IV correta: os dois lados são equivalentes por De Morgan; a bicondicional é tautologia. Resta(m) apenas a afirmativa IV.",
      fundamento: "Lógica proposicional.",
      macete: "Conte as orações ligadas por conectivo.",
      erroComum: "Ver conectivo em substantivos.",
      comoBancaPensa: "Usa frases de estrutura enganosa.",
    },
  },

  {
    ...BASE129,
    id: "RL-629", disciplina: "Raciocínio Lógico-Matemático", assunto: "Matrizes",
    subassunto: "Derivado de RL-554, RL-555, RL-556, RL-565 — propriedades de matrizes",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de matrizes, considere as seguintes afirmações:\n\nI. Uma matriz identidade é caracterizada por ter todos os elementos iguais a 1.\nII. A transposta de uma matriz é obtida invertendo-se suas linhas e colunas.\nIII. A multiplicação de matrizes é uma operação comutativa, ou seja, A × B = B × A.\nIV. Se P for uma matriz simétrica, então P será inversível.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
    ],
    gabarito: "C", pegadinha: "generalizacao", palavraChave: "comutativa",
    cognitivo: {
      motivo: "Revisar propriedades de matrizes.",
      palavraCritica: "transposta",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I incorreta: identidade tem 1 na diagonal e 0 fora dela. Afirmativa II correta: a transposta troca linhas por colunas. Afirmativa III incorreta: o produto de matrizes, em geral, não é comutativo. Afirmativa IV incorreta: simetria não garante inversibilidade (a matriz nula é simétrica). Resta(m) apenas a afirmativa II.",
      fundamento: "Álgebra de matrizes.",
      macete: "Matriz não comuta; simétrica pode ter det 0.",
      erroComum: "Transferir regras dos números.",
      comoBancaPensa: "Generalizações.",
    },
  },

  {
    ...BASE129,
    id: "RL-630", disciplina: "Raciocínio Lógico-Matemático", assunto: "Porcentagem",
    subassunto: "Derivado de RL-437, RL-438, RL-448, RL-459 — variações percentuais sucessivas",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de porcentagens, considere as seguintes afirmações:\n\nI. Se for de 25% a margem de lucro sobre uma mercadoria que é vendida com 25% de desconto, então, antes do desconto, a margem de lucro na venda da mercadoria era superior a 65%.\nII. Se a produção de carros de certa empresa tiver crescido 10% em cada um dos últimos três anos, então o crescimento acumulado durante esse período será de 30%.\nIII. Se o preço inicial de um produto for corrigido anualmente em 30% de seu valor vigente, então, após dois anos, o preço do produto terá correção de 69% sobre o seu valor inicial.\nIV. Se uma corda de 30 metros de comprimento é dividida em duas partes, cujos comprimentos estão na razão 2:3, então o comprimento da menor parte é inferior a 14 metros.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa I está correta.",
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "D", pegadinha: "troca-numerica", palavraChave: "crescimento acumulado",
    cognitivo: {
      motivo: "Revisar variações percentuais sucessivas.",
      palavraCritica: "margem de lucro",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I correta: 0,75P = 1,25c ⇒ P ≈ 1,667c: margem de cerca de 66,7%. Afirmativa II incorreta: 1,1³ = 1,331: crescimento de 33,1%, não 30%. Afirmativa III correta: 1,3² = 1,69: correção de 69%. Afirmativa IV correta: razão 2:3 em 30 m dá partes de 12 m e 18 m. Resta(m) apenas as afirmativas I, III e IV.",
      fundamento: "Porcentagem e razão.",
      macete: "Taxas sucessivas se multiplicam.",
      erroComum: "Somar porcentagens.",
      comoBancaPensa: "Erros de soma de taxas.",
    },
  },

  {
    ...BASE129,
    id: "RL-631", disciplina: "Raciocínio Lógico-Matemático", assunto: "Progressões",
    subassunto: "Derivado de RL-508, RL-526, RL-527, RL-529 — progressões aritméticas e geométricas",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de progressões, considere as seguintes afirmações:\n\nI. Em uma progressão aritmética em que o segundo termo é 21 e o quinto termo é 42, o 12.º termo da sequência será 91.\nII. Existe uma sequência (an) que é, simultaneamente, uma progressão aritmética e uma progressão geométrica.\nIII. Se os números 2, a e b estão em progressão aritmética e os números 2, (a - 4) e b estão em progressão geométrica, então existem a e b tais que a progressão geométrica 2, (a - 4) e b tem razão −1.\nIV. Se a sequência for uma progressão geométrica (PG), em que a1 = 5 e a4 = 135, então a razão dessa PG será maior que 4.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
    ],
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "progressão geométrica",
    cognitivo: {
      motivo: "Revisar progressões aritméticas e geométricas.",
      palavraCritica: "razão",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I correta: 3r = 42 − 21 ⇒ r = 7; a12 = 21 + 70 = 91. Afirmativa II correta: uma sequência constante não nula é PA (razão 0) e PG (razão 1). Afirmativa III correta: a = 2 e b = 2 dão a PG 2, −2, 2, de razão −1. Afirmativa IV incorreta: q³ = 135/5 = 27 ⇒ q = 3, não maior que 4. Resta(m) apenas as afirmativas I, II e III.",
      fundamento: "Progressões.",
      macete: "Diferença de termos = passos × razão.",
      erroComum: "Errar o número de passos.",
      comoBancaPensa: "Mistura PA e PG.",
    },
  },

  {
    ...BASE129,
    id: "RL-632", disciplina: "Raciocínio Lógico-Matemático", assunto: "Regra de três e divisão proporcional",
    subassunto: "Derivado de RL-416, RL-422, RL-472, RL-457 — proporcionalidade direta e inversa",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de proporcionalidade, considere as seguintes afirmações:\n\nI. Para se ouvir um áudio na velocidade 1,5 são necessários 20 minutos. Nessa situação, a duração original desse áudio é de 25 minutos.\nII. Caso, para executar uma mesma tarefa, a máquina A seja 25% mais eficiente que a máquina B, então, se a máquina B levar 12 horas para executar a tarefa, a máquina A levará 9 horas e 36 minutos.\nIII. Dividir a quantia de R$ 3.520 em partes inversamente proporcionais a 1, 2 e 3 resulta, respectivamente, nas partes R$ 1.920, R$ 960 e R$ 640.\nIV. Se, em uma aula de dança, houver 45 pessoas, entre moças e rapazes, e se a razão entre o número de moças e o número de rapazes for igual a 5/4, então 8 moças ficarão sem par.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "troca-numerica", palavraChave: "inversamente proporcionais",
    cognitivo: {
      motivo: "Revisar proporcionalidade direta e inversa.",
      palavraCritica: "eficiente",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I incorreta: na velocidade 1,5, o original dura 20 × 1,5 = 30 minutos. Afirmativa II correta: 25% mais eficiente: 12/1,25 = 9,6 h = 9 h 36 min. Afirmativa III correta: inversos 1, 1/2, 1/3 ⇒ 6 : 3 : 2 ⇒ 1.920, 960 e 640. Afirmativa IV incorreta: 5:4 em 45 dá 25 moças e 20 rapazes: sobram 5, não 8. Resta(m) apenas as afirmativas II e III.",
      fundamento: "Grandezas proporcionais.",
      macete: "Inversa: produto constante.",
      erroComum: "Fazer regra direta.",
      comoBancaPensa: "Mistura direta e inversa.",
    },
  },

  {
    ...BASE129,
    id: "ES-750", disciplina: "Estatística", assunto: "Tipos de variáveis",
    subassunto: "Derivado de ES-171, ES-172, ES-174, ES-175 — classificação de variáveis",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Em relação aos tipos de variáveis, considere as seguintes afirmações:\n\nI. Variáveis quantitativas contínuas podem assumir qualquer valor numérico, mesmo que ele não corresponda a um número inteiro.\nII. A variável dicotômica é um tipo de variável qualitativa à qual podem ser atribuídos valores numéricos.\nIII. Uma variável qualitativa expressa por três categorias pode ser representada por uma variável dummy.\nIV. Para o cálculo da média, a variável deve ser necessariamente do tipo métrica.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
    ],
    gabarito: "B", pegadinha: "troca-conceito", palavraChave: "dummy",
    cognitivo: {
      motivo: "Revisar classificação de variáveis.",
      palavraCritica: "dicotômica",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I correta: contínuas assumem valores não inteiros. Afirmativa II correta: dicotômicas são qualitativas e podem receber códigos numéricos. Afirmativa III incorreta: três categorias exigem duas dummies (k − 1). Afirmativa IV correta: a média pressupõe variável métrica. Resta(m) apenas as afirmativas I, II e IV.",
      fundamento: "Tipos de variáveis.",
      macete: "k categorias → k − 1 dummies.",
      erroComum: "Achar que uma dummy basta.",
      comoBancaPensa: "Mistura conceitos.",
    },
  },

  {
    ...BASE129,
    id: "ES-751", disciplina: "Estatística", assunto: "Visualização de dados",
    subassunto: "Derivado de ES-178, ES-180, ES-181, ES-190 — gráficos e tabelas de frequência",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de visualização e resumo de dados, considere as seguintes afirmações:\n\nI. A escolha das cores em um gráfico tem pouca influência na interpretação dos dados.\nII. Gráficos de barras são adequados para comparar diferentes categorias de dados.\nIII. Gráfico de pizza é a melhor escolha para a visualização de grandes conjuntos de dados complexos.\nIV. A partir de uma tabela de frequências absolutas de uma variável qualitativa nominal, é possível recuperar os valores originais da série de dados.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I, II e III estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
    ],
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "pizza",
    cognitivo: {
      motivo: "Revisar gráficos e tabelas de frequência.",
      palavraCritica: "barras",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I incorreta: cores influenciam a leitura do gráfico. Afirmativa II correta: barras comparam categorias. Afirmativa III incorreta: pizza só serve para poucas categorias. Afirmativa IV incorreta: a tabela de frequências perde a ordem e a identidade das observações. Resta(m) apenas a afirmativa II.",
      fundamento: "Estatística descritiva.",
      macete: "Barras para comparar; pizza para poucas partes.",
      erroComum: "Tratar cor como estética.",
      comoBancaPensa: "Termos absolutos.",
    },
  },

  {
    ...BASE129,
    id: "ES-752", disciplina: "Estatística", assunto: "Assimetria e curtose",
    subassunto: "Derivado de ES-286, ES-289, ES-290, ES-307 — medidas de forma",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de assimetria e curtose, considere as seguintes afirmações:\n\nI. Para variáveis aleatórias em que o skewness seja diferente de zero, a mediana é sempre igual à média.\nII. Distribuições com assimetria à esquerda geralmente apresentam média menor que a mediana.\nIII. Assimetria negativa indica que a distribuição possui maior concentração de valores à esquerda e uma cauda mais longa que se estende para a direita.\nIV. Em distribuições leptocúrticas, os valores se concentram mais próximos da média.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "D", pegadinha: "troca-conceito", palavraChave: "assimetria negativa",
    cognitivo: {
      motivo: "Revisar medidas de forma.",
      palavraCritica: "leptocúrticas",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I incorreta: com assimetria, média e mediana se separam. Afirmativa II correta: cauda à esquerda puxa a média abaixo da mediana. Afirmativa III incorreta: na assimetria negativa, a cauda longa fica à esquerda. Afirmativa IV correta: leptocúrtica concentra valores perto da média. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "Medidas de forma.",
      macete: "A média segue a cauda.",
      erroComum: "Inverter o lado da cauda.",
      comoBancaPensa: "Inverte lados.",
    },
  },

  {
    ...BASE129,
    id: "ES-753", disciplina: "Estatística", assunto: "Medidas de dispersão",
    subassunto: "Derivado de ES-257, ES-261, ES-262, ES-278 — propriedades das medidas de dispersão",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca das medidas de dispersão, considere as seguintes afirmações:\n\nI. Em um conjunto de dados, é possível que a amplitude seja um valor grande e a variância seja um valor pequeno.\nII. A amplitude de uma amostra de dados é expressa pelo desvio padrão dividido pela média, sendo, portanto, classificada como medida de dispersão relativa.\nIII. Sendo X uma variável aleatória com variância σ2, ao se adicionar uma constante k aos valores da variável, a variância resultante serám σ2 + k .\nIV. Se o desvio padrão de V for igual a 3 e se o desvio padrão de W for igual a 4, então o desvio padrão da diferença V − W será igual a 5.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
    ],
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "variância",
    cognitivo: {
      motivo: "Revisar propriedades das medidas de dispersão.",
      palavraCritica: "amplitude",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I correta: um outlier aumenta a amplitude sem elevar muito a variância. Afirmativa II incorreta: DP ÷ média é o coeficiente de variação, não a amplitude. Afirmativa III incorreta: somar constante não altera a variância. Afirmativa IV correta: independentes: Var(V − W) = 9 + 16 = 25 ⇒ DP = 5. Resta(m) apenas as afirmativas I e IV.",
      fundamento: "Medidas de dispersão.",
      macete: "Soma de constante não muda dispersão.",
      erroComum: "Somar k à variância.",
      comoBancaPensa: "Mistura propriedades.",
    },
  },

  {
    ...BASE129,
    id: "ES-754", disciplina: "Estatística", assunto: "Testes de hipóteses",
    subassunto: "Derivado de ES-541, ES-542, ES-543, ES-544 — erros e nível de significância",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de testes de hipóteses, considere as seguintes afirmações:\n\nI. Em um teste de hipóteses, o erro do tipo II consiste em rejeitar a hipótese alternativa quando esta for falsa.\nII. Em um teste de hipóteses, o erro do tipo I consiste em rejeitar a hipótese nula quando esta for verdadeira.\nIII. Testar hipóteses consiste, essencialmente, em avaliar a hipótese nula.\nIV. O nível de significância de um teste assume valores altos, tais como 90%, 95% e 99%.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas a afirmativa II está correta.",
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "troca-conceito", palavraChave: "erro do tipo I",
    cognitivo: {
      motivo: "Revisar erros e nível de significância.",
      palavraCritica: "significância",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I incorreta: erro tipo II é não rejeitar H0 falsa. Afirmativa II correta: erro tipo I é rejeitar H0 verdadeira. Afirmativa III correta: a decisão do teste é sobre H0. Afirmativa IV incorreta: α é pequeno (1%, 5%, 10%); 90–99% são níveis de confiança. Resta(m) apenas as afirmativas II e III.",
      fundamento: "Testes de hipóteses.",
      macete: "α ↔ tipo I; β ↔ tipo II.",
      erroComum: "Trocar os erros.",
      comoBancaPensa: "Troca de conceitos.",
    },
  },

  {
    ...BASE129,
    id: "ES-755", disciplina: "Estatística", assunto: "Distribuições de probabilidade",
    subassunto: "Derivado de ES-392, ES-393, ES-401, ES-521 — parâmetros de distribuições",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de distribuições de probabilidade, considere as seguintes afirmações:\n\nI. Sendo X uma variável aleatória com distribuição geométrica com parâmetro p (número de ensaios até o primeiro sucesso), julgue o item. E(X) = 1/p.\nII. Sendo X uma variável aleatória com distribuição geométrica com parâmetro p (número de ensaios até o primeiro sucesso), julgue o item. Var(X) = 1/p².\nIII. Em uma distribuição binomial, as séries de tentativas, ou observações, são constituídas de eventos independentes.\nIV. Se Z segue uma distribuição normal padrão, então a variável X = 4Z + 2 segue uma distribuição normal com média 2 e variância 4.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa I está correta.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "B", pegadinha: "troca-numerica", palavraChave: "variância",
    cognitivo: {
      motivo: "Revisar parâmetros de distribuições.",
      palavraCritica: "geométrica",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I correta: na geométrica (ensaios até o 1.º sucesso), E(X) = 1/p. Afirmativa II incorreta: Var(X) = (1 − p)/p², não 1/p². Afirmativa III correta: a binomial supõe ensaios independentes. Afirmativa IV incorreta: 4Z + 2 tem variância 16, não 4. Resta(m) apenas as afirmativas I e III.",
      fundamento: "Distribuições.",
      macete: "Var(aZ + b) = a²Var(Z).",
      erroComum: "Esquecer o quadrado.",
      comoBancaPensa: "Fórmulas incompletas.",
    },
  },

  {
    ...BASE129,
    id: "ES-756", disciplina: "Estatística", assunto: "Correlação e regressão",
    subassunto: "Derivado de ES-324, ES-333, ES-338, ES-339 — correlação, causalidade e regressão",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de correlação e regressão, considere as seguintes afirmações:\n\nI. O coeficiente de correlação de Pearson, que varia entre −1 e 1, é uma medida estatística de causalidade, derivada da associação linear entre duas variáveis independentes.\nII. Um modelo de regressão linear representa uma relação linear entre a variável resposta e as variáveis preditoras.\nIII. São verificadas a correlação e a regressão linear perfeitas quando todos os pontos amostrais encontram-se sobre uma reta.\nIV. A reta de regressão de y sobre x permite estimar x para determinados valores de y.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
    ],
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "causalidade",
    cognitivo: {
      motivo: "Revisar correlação, causalidade e regressão.",
      palavraCritica: "regressão",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I incorreta: correlação não mede causalidade. Afirmativa II correta: a regressão linear modela relação linear entre resposta e preditoras. Afirmativa III correta: pontos alinhados dão correlação e regressão perfeitas. Afirmativa IV incorreta: para estimar x a partir de y, usa-se a regressão de x sobre y. Resta(m) apenas as afirmativas II e III.",
      fundamento: "Correlação e regressão.",
      macete: "Correlação ≠ causa.",
      erroComum: "Inferir causa.",
      comoBancaPensa: "Mistura conceitos.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE129);
