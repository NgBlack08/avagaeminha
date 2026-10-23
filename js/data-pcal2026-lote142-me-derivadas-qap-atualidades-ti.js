/* =====================================================================
   QUESTLAB — Lote 142: MÚLTIPLA ESCOLHA DERIVADA DOS QAPs DE ATUALIDADES E TI

   MÉTODO E REGRAS: os dos lotes 98, 106, 112, 117, 129 e 134. Cada item
   reúne quatro afirmativas I–IV que já existem no banco como itens
   CERTO/ERRADO dos lotes 135 a 141; o valor de verdade vem do gabarito do
   item de origem. Só entraram afirmativas que se julgam sozinhas, sem
   texto-base nem situação hipotética.

   12 itens (AT-109, AT-110 e TI-518 a TI-527).
   ===================================================================== */

const BASE142 = {
  concurso: "PCAL", cargo: ["Escrivão", "Agente"], ano: 2026,
  tipo: "ME", probReaparecer: 0.8,
  origem: "Autoral QuestLab — múltipla escolha derivada de itens C/E dos QAPs DSO já no banco (lotes 135 a 141); IDs de origem no subassunto",
};

const QUESTOES_PCAL_LOTE142 = [

  {
    ...BASE142,
    id: "AT-109", disciplina: "Atualidades", assunto: "Economia e Comércio Exterior",
    subassunto: "Derivado de AT-070, AT-071, AT-076, AT-079 — política econômica, tributação e clima",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de temas recentes de economia e meio ambiente, considere as seguintes afirmações:\n\nI. No regime de metas de inflação, a elevação da taxa Selic pelo Comitê de Política Monetária (Copom) busca conter pressões inflacionárias, pois encarece o crédito e desestimula parte do consumo e do investimento.\nII. Pela Reforma Tributária do consumo, o PIS e a Cofins serão substituídos pelo IBS, ao passo que o ICMS e o ISS darão lugar à CBS.\nIII. O hidrogênio verde é obtido exclusivamente com eletricidade de origem solar fotovoltaica; por isso, projetos abastecidos por parques eólicos ficam fora dessa classificação.\nIV. O Acordo de Paris fixa metas de redução de emissões de gases de efeito estufa, mas, por respeitar a soberania dos Estados, não prevê sanções internacionais capazes de obrigar um país em desenvolvimento, como o Brasil, a cumprir seus compromissos no prazo.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas a afirmativa I está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "troca-conceito", palavraChave: "hidrogênio verde",
    cognitivo: {
      motivo: "Revisar política econômica, tributação e clima.",
      palavraCritica: "IBS",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I correta: juros altos encarecem o crédito e contêm a demanda e a inflação. Afirmativa II incorreta: os pares estão trocados: a CBS substitui PIS e Cofins; o IBS substitui ICMS e ISS. Afirmativa III incorreta: o hidrogênio verde vem de eletrólise com qualquer fonte renovável, inclusive a eólica. Afirmativa IV correta: o Acordo de Paris trabalha com metas nacionais e transparência, sem sanção coercitiva. Resta(m) apenas as afirmativas I e IV.",
      fundamento: "Atualidades — economia, Reforma Tributária e transição energética.",
      macete: "CBS = União; IBS = estados e municípios. Verde = qualquer renovável.",
      erroComum: "Inverter os pares da Reforma Tributária.",
      comoBancaPensa: "Mistura mecanismo econômico correto com siglas e conceitos trocados.",
    },
  },

  {
    ...BASE142,
    id: "AT-110", disciplina: "Atualidades", assunto: "Segurança Pública",
    subassunto: "Derivado de AT-084, AT-082, AT-086, AT-090 — indicadores e tecnologia na segurança pública",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Com relação à segurança pública no Brasil, considere as seguintes afirmações:\n\nI. Para compor o indicador de Mortes Violentas Intencionais (MVI), o Anuário Brasileiro de Segurança Pública classifica as mortes decorrentes de intervenção policial como homicídios dolosos.\nII. Os dados de violência letal reunidos pelo Anuário Brasileiro de Segurança Pública revelam desigualdades territoriais e sociais na distribuição dos homicídios, que não se repartem de modo homogêneo por todo o território nacional.\nIII. Operação Contenção foi o nome da ação policial deflagrada pelo governo do Rio de Janeiro em 28 de outubro de 2025 nos complexos da Penha e do Alemão, contra o Comando Vermelho.\nIV. Os sistemas de reconhecimento facial asseguram neutralidade absoluta na identificação de pessoas, o que afasta o risco de vieses nas abordagens policiais.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
    ],
    gabarito: "B", pegadinha: "termo-absoluto", palavraChave: "neutralidade absoluta",
    cognitivo: {
      motivo: "Revisar indicadores e tecnologia na segurança pública.",
      palavraCritica: "MVI",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I incorreta: as mortes por intervenção policial entram no MVI como categoria própria, não como homicídio doloso. Afirmativa II correta: a violência letal concentra-se em certos territórios e grupos sociais. Afirmativa III correta: a Operação Contenção ocorreu em 28/10/2025 nos complexos da Penha e do Alemão. Afirmativa IV incorreta: nenhum algoritmo de reconhecimento facial é neutro: há erros e vieses. Resta(m) apenas as afirmativas II e III.",
      fundamento: "Anuário Brasileiro de Segurança Pública e atualidades da segurança pública.",
      macete: "MVI = 4 categorias somadas. Reconhecimento facial erra.",
      erroComum: "Achar que o MVI reclassifica as mortes por intervenção policial.",
      comoBancaPensa: "Combina metodologia de indicador com fatos recentes.",
    },
  },

  {
    ...BASE142,
    id: "TI-518", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem de programação Java",
    subassunto: "Derivado de TI-329, TI-340, TI-334, TI-318 — plataforma Java e .NET",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca das linguagens Java e C#, considere as seguintes afirmações:\n\nI. No ambiente Java, o JRE contém o JDK, que por sua vez contém a JVM; por isso, para apenas executar um programa Java, é preciso instalar todo o kit de desenvolvimento.\nII. Em Java, o array tem tamanho definido no momento da criação, que não pode ser alterado depois, e seus índices começam em zero.\nIII. Em Java, String é um dos oito tipos primitivos, ao lado de int, double, char e boolean.\nIV. No ambiente .NET, a CLR é responsável pela execução do programa e pelo gerenciamento de memória, ao passo que o JIT converte o código CIL em código de máquina no momento da execução.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "JRE contém o JDK",
    cognitivo: {
      motivo: "Revisar plataforma Java e .NET.",
      palavraCritica: "JRE",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I incorreta: a hierarquia é JDK ⊃ JRE ⊃ JVM; para executar basta o JRE. Afirmativa II correta: o array Java tem tamanho fixo e índice a partir de zero. Afirmativa III incorreta: String é classe; os oito primitivos não a incluem. Afirmativa IV correta: a CLR executa e gerencia a memória; o JIT traduz o CIL na execução. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "Plataformas Java e .NET.",
      macete: "JDK ⊃ JRE ⊃ JVM. CIL → JIT → código nativo.",
      erroComum: "Inverter a ordem de inclusão das ferramentas Java.",
      comoBancaPensa: "Mistura arquitetura das duas plataformas.",
    },
  },

  {
    ...BASE142,
    id: "TI-519", disciplina: "TI e Segurança Cibernética", assunto: "Aritmética computacional",
    subassunto: "Derivado de TI-306, TI-307, TI-312, TI-314 — unidades e sistemas de numeração",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de unidades de medida da informação e de sistemas de numeração, considere as seguintes afirmações:\n\nI. Em condições ideais, um plano de Internet de 200 Mbps permite baixar arquivos a uma taxa máxima de 25 MB/s, pois cada byte é formado por 8 bits.\nII. Por ser formado por 8 bits, um byte permite 256 combinações distintas, e 256 é o maior valor inteiro sem sinal que nele pode ser armazenado.\nIII. O hexadecimal 2F corresponde ao decimal 47, uma vez que F equivale a 15 e o algarismo 2 ocupa a posição de peso 16.\nIV. Com 10 bits é possível representar, sem sinal, os inteiros de 0 a 1.024, o que explica por que cada unidade de armazenamento vale 1.024 vezes a anterior.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa I está correta.",
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
    ],
    gabarito: "D", pegadinha: "troca-numerica", palavraChave: "256 combinações distintas",
    cognitivo: {
      motivo: "Revisar unidades e sistemas de numeração.",
      palavraCritica: "2ⁿ − 1",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I correta: 200 Mbps ÷ 8 = 25 MB/s. Afirmativa II incorreta: um byte tem 256 combinações, mas o maior valor sem sinal é 255. Afirmativa III correta: 2F = 2 × 16 + 15 = 47. Afirmativa IV incorreta: 10 bits representam de 0 a 1.023. Resta(m) apenas as afirmativas I e III.",
      fundamento: "Representação de dados.",
      macete: "n bits → 2ⁿ valores → de 0 a 2ⁿ − 1.",
      erroComum: "Incluir 2ⁿ na faixa de valores.",
      comoBancaPensa: "Erros de um a mais misturados a contas corretas.",
    },
  },

  {
    ...BASE142,
    id: "TI-520", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem de programação Python",
    subassunto: "Derivado de TI-346, TI-344, TI-349, TI-347 — tipos e coleções em Python",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Com relação à linguagem Python, considere as seguintes afirmações:\n\nI. Em Python, listas são estruturas de dados imutáveis, o que as torna ideais para servirem de chaves de dicionários (dict).\nII. A linguagem Python tem tipagem dinâmica, pois os tipos das variáveis são definidos em tempo de execução.\nIII. Em Python, listas e tuplas têm as mesmas propriedades, podendo ser aumentadas ou diminuídas depois de criadas.\nIV. Em Python, as listas são coleções heterogêneas e mutáveis de objetos de qualquer tipo, inclusive de outras listas.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
    ],
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "tipagem dinâmica",
    cognitivo: {
      motivo: "Revisar tipos e coleções em Python.",
      palavraCritica: "imutáveis",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I incorreta: listas são mutáveis e por isso não podem ser chaves de dicionário. Afirmativa II correta: o tipo é verificado em tempo de execução. Afirmativa III incorreta: tuplas são imutáveis; só as listas mudam de tamanho. Afirmativa IV correta: listas aceitam elementos de qualquer tipo, inclusive outras listas. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "Tipos embutidos do Python.",
      macete: "Lista muda; tupla não; chave de dict é imutável.",
      erroComum: "Confundir lista com tupla.",
      comoBancaPensa: "Cobra a mutabilidade, o ponto mais explorado em Python.",
    },
  },

  {
    ...BASE142,
    id: "TI-521", disciplina: "TI e Segurança Cibernética", assunto: "Ciência de dados e aprendizado de máquina",
    subassunto: "Derivado de TI-360, TI-370, TI-373, TI-372 — aprendizado de máquina e PLN",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de aprendizado de máquina e processamento de linguagem natural, considere as seguintes afirmações:\n\nI. O aprendizado por reforço consiste em treinar um modelo com dados previamente rotulados, para que ele associe cada entrada à saída correta, à semelhança do aprendizado supervisionado.\nII. A lematização reduz as palavras à forma canônica de dicionário, ao passo que o stemming corta sufixos por regras e pode gerar radicais que não são palavras válidas.\nIII. Hiperparâmetros são valores definidos antes do treinamento que controlam o aprendizado, como a profundidade máxima de uma árvore de decisão, ao contrário dos parâmetros, que são aprendidos a partir dos dados.\nIV. Um modelo com erro muito baixo no conjunto de treinamento e erro elevado no de teste caracteriza underfitting, situação associada a alto viés.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "troca-conceito", palavraChave: "underfitting",
    cognitivo: {
      motivo: "Revisar aprendizado de máquina e PLN.",
      palavraCritica: "overfitting",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I incorreta: reforço usa recompensas de um ambiente, não rótulos. Afirmativa II correta: lema é a forma de dicionário; stem é o radical cortado por regra. Afirmativa III correta: hiperparâmetros são escolhidos antes do treino; parâmetros são aprendidos. Afirmativa IV incorreta: erro baixo no treino e alto no teste é overfitting (alta variância). Resta(m) apenas as afirmativas II e III.",
      fundamento: "Fundamentos de aprendizado de máquina.",
      macete: "Over: decora o treino. Under: não aprende nem o treino.",
      erroComum: "Trocar overfitting por underfitting.",
      comoBancaPensa: "Junta definições corretas a pares invertidos.",
    },
  },

  {
    ...BASE142,
    id: "TI-522", disciplina: "TI e Segurança Cibernética", assunto: "Edição de planilhas",
    subassunto: "Derivado de TI-378, TI-380, TI-407, TI-402 — Excel e Word",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca do Microsoft Excel e do Microsoft Word, considere as seguintes afirmações:\n\nI. A função ALEATÓRIO do Microsoft Excel gera um número real aleatório maior ou igual a 0 e menor que 1.\nII. No Microsoft Excel, o endereço E$6 indica referência mista, em que a linha é relativa e a coluna é absoluta.\nIII. No Word do Office 365, o Pincel de Formatação é o recurso destinado a marcar o texto com cores, para destaque, durante a edição.\nIV. No Word, a opção Salvamento Automático só está disponível para documentos armazenados no OneDrive ou no SharePoint Online.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "B", pegadinha: "troca-conceito", palavraChave: "Pincel de Formatação",
    cognitivo: {
      motivo: "Revisar Excel e Word.",
      palavraCritica: "$",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I correta: ALEATÓRIO devolve um real no intervalo [0, 1). Afirmativa II incorreta: em E$6, a linha é absoluta e a coluna é relativa. Afirmativa III incorreta: o Pincel de Formatação copia formatação; destacar com cor é o Realce. Afirmativa IV correta: o Salvamento Automático só funciona com arquivos no OneDrive ou SharePoint. Resta(m) apenas as afirmativas I e IV.",
      fundamento: "Microsoft 365 — Excel e Word.",
      macete: "O $ trava o que vem depois dele. Pincel copia formato.",
      erroComum: "Ler o $ de trás para a frente.",
      comoBancaPensa: "Mistura recursos de dois aplicativos.",
    },
  },

  {
    ...BASE142,
    id: "TI-523", disciplina: "TI e Segurança Cibernética", assunto: "Criptografia",
    subassunto: "Derivado de TI-434, TI-432, TI-465, TI-464 — hash, HMAC e criptografia assimétrica",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de mecanismos criptográficos, considere as seguintes afirmações:\n\nI. A assinatura digital tem como finalidade principal assegurar a confidencialidade do conteúdo assinado, pois somente o detentor da chave pública correspondente à chave privada do signatário consegue recuperar a mensagem.\nII. Funções hash criptográficas produzem resumos de tamanho determinado e não empregam chave de decifragem para recuperar a mensagem original, razão pela qual não devem ser confundidas com algoritmos de criptografia reversível.\nIII. Diferentemente de uma função hash convencional, o HMAC usa chave secreta em conjunto com a função hash, o que permite oferecer integridade e autenticidade à mensagem.\nIV. Na criptografia assimétrica usada para garantir confidencialidade, o remetente cifra a informação com sua própria chave privada, de modo que somente o destinatário, com a chave pública correspondente, recupere o conteúdo.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "C", pegadinha: "troca-sujeito", palavraChave: "chave secreta",
    cognitivo: {
      motivo: "Revisar hash, HMAC e criptografia assimétrica.",
      palavraCritica: "chave pública do destinatário",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I incorreta: assinatura digital dá autenticidade, integridade e não repúdio — não sigilo. Afirmativa II correta: hash é de mão única e não usa chave para recuperar a mensagem. Afirmativa III correta: o HMAC combina hash e chave secreta, somando autenticidade à integridade. Afirmativa IV incorreta: para sigilo, cifra-se com a chave pública do destinatário. Resta(m) apenas as afirmativas II e III.",
      fundamento: "Criptografia simétrica, assimétrica e funções hash.",
      macete: "Sigilo: pública do destinatário. Assinatura: privada do remetente.",
      erroComum: "Trocar as chaves de cada operação.",
      comoBancaPensa: "Cruza as propriedades de quatro mecanismos.",
    },
  },

  {
    ...BASE142,
    id: "TI-524", disciplina: "TI e Segurança Cibernética", assunto: "Gestão de riscos e conformidade",
    subassunto: "Derivado de TI-437, TI-438, TI-440, TI-445 — riscos e controles",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da gestão de riscos em segurança da informação, considere as seguintes afirmações:\n\nI. O risco residual é o que existe antes da aplicação dos controles de segurança, ao passo que o risco inerente é a parcela que permanece depois de implementadas as medidas de tratamento.\nII. A decisão de descontinuar um serviço cuja exposição a ameaças seja incompatível com os critérios definidos pela organização constitui forma de evitar o risco associado a esse serviço.\nIII. Controles detectivos têm como finalidade principal impedir a ocorrência de incidentes, ao passo que controles preventivos servem para identificar eventos de segurança depois que eles ocorrem.\nIV. A ISO/IEC 27001 estabelece requisitos para o sistema de gestão de segurança da informação, enquanto a ISO/IEC 27002 traz orientações relacionadas a controles de segurança da informação.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "D", pegadinha: "troca-conceito", palavraChave: "risco residual",
    cognitivo: {
      motivo: "Revisar riscos e controles.",
      palavraCritica: "evitar",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I incorreta: inerente é antes do controle; residual é o que sobra depois. Afirmativa II correta: descontinuar a atividade é evitar o risco. Afirmativa III incorreta: preventivo impede; detectivo identifica depois. Afirmativa IV correta: a 27001 traz requisitos; a 27002, orientações sobre controles. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "ISO/IEC 27001, 27002 e 27005.",
      macete: "Evitar, mitigar, transferir, aceitar.",
      erroComum: "Inverter pares de conceitos.",
      comoBancaPensa: "Dois pares invertidos ao lado de duas definições certas.",
    },
  },

  {
    ...BASE142,
    id: "TI-525", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais",
    subassunto: "Derivado de TI-506, TI-511, TI-516, TI-512 — comandos do Linux",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de comandos e da inicialização do Linux, considere as seguintes afirmações:\n\nI. No Linux, o comando iostat é usado para verificar estatísticas dos discos e das operações de entrada e saída.\nII. No Linux, o comando chmod u=rwx,g=rx,o= arquivo equivale a chmod 750 arquivo.\nIII. No processo de inicialização do Linux, o GRUB é o programa responsável por exibir o menu com os sistemas operacionais instalados e por carregar o kernel na memória.\nIV. Em terminal Linux, o comando whois permite ao usuário confirmar com qual conta está conectado na sessão atual.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas II e III estão corretas.",
      "Todas as afirmativas estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
    ],
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "whois",
    cognitivo: {
      motivo: "Revisar comandos do Linux.",
      palavraCritica: "whoami",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I correta: iostat mostra estatísticas de E/S dos discos. Afirmativa II correta: u=rwx (7), g=rx (5), o= (0): 750. Afirmativa III correta: o GRUB exibe o menu e carrega o kernel. Afirmativa IV incorreta: o usuário da sessão é mostrado pelo whoami; whois consulta domínios. Resta(m) apenas as afirmativas I, II e III.",
      fundamento: "Comandos do Linux.",
      macete: "whoami = eu; whois = domínio; free = memória; df = disco.",
      erroComum: "Confundir comandos de nome parecido.",
      comoBancaPensa: "Três afirmativas certas e um nome trocado.",
    },
  },

  {
    ...BASE142,
    id: "TI-526", disciplina: "TI e Segurança Cibernética", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Derivado de TI-473, TI-479, TI-478, TI-482 — governo digital e assinaturas eletrônicas",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "No que se refere ao governo digital, considere as seguintes afirmações:\n\nI. É vedado exigir do usuário a apresentação de documento ou informação que já conste de base de dados da própria administração pública.\nII. A assinatura eletrônica avançada equipara-se, para todos os efeitos, à qualificada, podendo substituí-la nos atos de transferência de bens imóveis.\nIII. A assinatura eletrônica qualificada é a que usa certificado digital emitido no âmbito da Infraestrutura de Chaves Públicas Brasileira.\nIV. A transparência ativa consiste na divulgação de informações de interesse público independentemente de requerimento do cidadão.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Apenas a afirmativa I está correta.",
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "exigencia-inexistente", palavraChave: "assinatura eletrônica avançada",
    cognitivo: {
      motivo: "Revisar governo digital e assinaturas eletrônicas.",
      palavraCritica: "qualificada",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I correta: o que já consta das bases públicas não pode ser exigido do cidadão. Afirmativa II incorreta: a avançada não substitui a qualificada nos atos sobre imóveis. Afirmativa III correta: a qualificada usa certificado ICP-Brasil. Afirmativa IV correta: transparência ativa é divulgar sem pedido. Resta(m) apenas as afirmativas I, III e IV.",
      fundamento: "Leis nº 14.063/2020, 14.129/2021 e 12.527/2011.",
      macete: "Simples < avançada < qualificada (ICP-Brasil).",
      erroComum: "Igualar os níveis de assinatura.",
      comoBancaPensa: "Três regras corretas e uma equiparação indevida.",
    },
  },

  {
    ...BASE142,
    id: "TI-527", disciplina: "TI e Segurança Cibernética", assunto: "Gestão de identidades e acesso",
    subassunto: "Derivado de TI-424, TI-428, TI-429, TI-430 — autenticação e protocolos de identidade",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de autenticação e gestão de identidades, considere as seguintes afirmações:\n\nI. O uso simultâneo de senha e de PIN caracteriza autenticação multifator, uma vez que são apresentadas duas credenciais independentes na validação da identidade do usuário.\nII. O OAuth 2.0 é voltado à autorização delegada e permite que uma aplicação obtenha acesso limitado a recursos sem receber a senha do usuário; o OpenID Connect acrescenta a esse modelo uma camada padronizada de autenticação.\nIII. No OpenID Connect, o ID Token destina-se principalmente a ser apresentado ao servidor de recursos para autorizar o acesso a APIs, ao passo que o access token fornece ao cliente as informações sobre a autenticação do usuário.\nIV. No password spraying, o atacante tende a testar pequeno conjunto de senhas comuns contra diversas contas, estratégia que pode reduzir os bloqueios em comparação com tentativas sucessivas contra uma única conta.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "B", pegadinha: "troca-conceito", palavraChave: "password spraying",
    cognitivo: {
      motivo: "Revisar autenticação e protocolos de identidade.",
      palavraCritica: "ID Token",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I incorreta: senha e PIN são do mesmo fator (conhecimento). Afirmativa II correta: OAuth 2.0 autoriza; o OpenID Connect acrescenta a autenticação. Afirmativa III incorreta: o ID Token é para o cliente; o access token é que vai ao servidor de recursos. Afirmativa IV correta: spraying testa poucas senhas em muitas contas. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "OAuth 2.0, OpenID Connect e fatores de autenticação.",
      macete: "MFA = fatores de categorias diferentes.",
      erroComum: "Contar credenciais em vez de fatores.",
      comoBancaPensa: "Mistura definições certas e papéis trocados.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE142);
