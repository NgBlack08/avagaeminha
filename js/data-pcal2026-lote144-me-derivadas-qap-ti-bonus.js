/* =====================================================================
   QUESTLAB — Lote 144: MÚLTIPLA ESCOLHA DERIVADA DO BÔNUS DE TI (QAPs DSO)

   MÉTODO E REGRAS: os dos lotes 98, 106, 112, 117, 129, 134 e 142. Cada
   item reúne quatro afirmativas I–IV que já existem no banco como itens
   CERTO/ERRADO do lote 143; o valor de verdade vem do gabarito do item de
   origem. Ficou de fora o TI-531 (gabarito discutível).

   6 itens (TI-579 a TI-584).
   ===================================================================== */

const BASE144 = {
  concurso: "PCAL", cargo: ["Escrivão", "Agente"], ano: 2026,
  tipo: "ME", probReaparecer: 0.8,
  origem: "Autoral QuestLab — múltipla escolha derivada de itens C/E do bônus de TI dos QAPs DSO já no banco (lote 143); IDs de origem no subassunto",
};

const QUESTOES_PCAL_LOTE144 = [

  {
    ...BASE144,
    id: "TI-579", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais",
    subassunto: "Derivado de TI-561, TI-565, TI-556, TI-566 — atalhos e recursos do Windows",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de atalhos e recursos do Windows, considere as seguintes afirmações:\n\nI. O comando Windows + L realiza a captura de um printscreen, enquanto o comando Windows + Shift + S bloqueia a tela do computador.\nII. O conjunto de teclas Ctrl + Alt + Del permite, também, acessar o gerenciador de tarefas do Windows.\nIII. O recurso Histórico de Área de Transferência do Windows 10 permite ao usuário acessar apenas o último item copiado com o atalho Ctrl + V.\nIV. O usuário, no Windows 11, pode realizar uma captura retangular, por meio do recurso Ferramenta de Captura.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "troca-sujeito", palavraChave: "Windows + L",
    cognitivo: {
      motivo: "Revisar atalhos e recursos do Windows.",
      palavraCritica: "Windows + V",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I incorreta: as funções estão invertidas: Windows + L bloqueia e Windows + Shift + S captura. Afirmativa II correta: Ctrl + Alt + Del abre a tela de segurança, que tem a opção Gerenciador de Tarefas. Afirmativa III incorreta: o histórico (Windows + V) guarda vários itens; Ctrl + V cola só o último. Afirmativa IV correta: a Ferramenta de Captura tem os modos retangular, forma livre, janela e tela inteira. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "Windows 10 e 11 — atalhos e ferramentas.",
      macete: "L = lock; S = snip; V = histórico.",
      erroComum: "Inverter atalhos parecidos.",
      comoBancaPensa: "Dois atalhos trocados entre duas afirmativas certas.",
    },
  },

  {
    ...BASE144,
    id: "TI-580", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem",
    subassunto: "Derivado de TI-552, TI-548, TI-550, TI-553 — modelos de serviço e de implantação da nuvem",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de computação em nuvem, considere as seguintes afirmações:\n\nI. Dos modelos de serviços em nuvem, o SaaS (software as a service) é aquele que fornece aos usuários o controle do nível mais baixo dos recursos de computação na nuvem.\nII. Considere que o acesso ao Microsoft Office 365 se dará exclusivamente por meio de browser e que os documentos editados devem ser salvos na solução nativa da Microsoft na nuvem. Nessa situação, o Excel 365, que faz parte do Microsoft Office 365, constitui um exemplo de aplicação do modelo PaaS (plataforma como serviço) na cloud computing.\nIII. Ao se armazenar determinado arquivo em uma nuvem computacional pública, o acesso a esse arquivo passa a ser feito por meio da Internet.\nIV. A nuvem privada é um ambiente de nuvem que combina vários benefícios de computação em nuvem, mas não oferece elasticidade devido à natureza de sua concepção.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
    ],
    gabarito: "B", pegadinha: "troca-conceito", palavraChave: "SaaS",
    cognitivo: {
      motivo: "Revisar modelos de serviço e de implantação da nuvem.",
      palavraCritica: "IaaS",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I incorreta: no SaaS o cliente quase não controla nada; o nível mais baixo é do IaaS. Afirmativa II incorreta: usar o Excel pelo navegador é consumir software pronto: SaaS. Afirmativa III correta: na nuvem pública, o acesso aos arquivos é pela Internet. Afirmativa IV incorreta: a nuvem privada mantém a elasticidade, dentro da capacidade disponível. Resta(m) apenas a afirmativa III.",
      fundamento: "Modelos IaaS, PaaS e SaaS; nuvem pública e privada.",
      macete: "Controle do cliente: IaaS > PaaS > SaaS.",
      erroComum: "Inverter a escala de controle.",
      comoBancaPensa: "Três erros sobre modelos e um acerto simples.",
    },
  },

  {
    ...BASE144,
    id: "TI-581", disciplina: "TI e Segurança Cibernética", assunto: "Criptografia",
    subassunto: "Derivado de TI-569, TI-571, TI-575, TI-570 — HTTPS, hash e chaves assimétricas",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de mecanismos criptográficos, considere as seguintes afirmações:\n\nI. A utilização de HTTPS contribui para a integridade e a confidencialidade dos dados transmitidos entre o cliente e o servidor de um aplicativo web.\nII. A confidencialidade é uma propriedade verificável por meio do hash de uma mensagem.\nIII. Esquemas de assinatura digital fundamentados em criptografia de chave pública não garantem, por si mesmos, a confidencialidade da informação.\nIV. Operações feitas com chave pública RSA pertencente a um certificado digital somente podem ser desfeitas com a chave privada correspondente.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "hash",
    cognitivo: {
      motivo: "Revisar HTTPS, hash e chaves assimétricas.",
      palavraCritica: "integridade",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I correta: o TLS dá confidencialidade, integridade e autenticação do servidor. Afirmativa II incorreta: hash verifica integridade, não confidencialidade. Afirmativa III correta: assinatura digital não cifra a mensagem. Afirmativa IV correta: no RSA, o que a chave pública cifra só a privada correspondente decifra. Resta(m) apenas as afirmativas I, III e IV.",
      fundamento: "Criptografia simétrica, assimétrica e funções hash.",
      macete: "Hash = integridade; cifra = sigilo; assinatura = autoria.",
      erroComum: "Dar sigilo a quem não cifra.",
      comoBancaPensa: "Três propriedades certas e uma atribuída ao mecanismo errado.",
    },
  },

  {
    ...BASE144,
    id: "TI-582", disciplina: "TI e Segurança Cibernética", assunto: "Malwares",
    subassunto: "Derivado de TI-576, TI-573, TI-568, TI-578 — malwares, DDoS e isolamento",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de ameaças e defesas em segurança da informação, considere as seguintes afirmações:\n\nI. Os vírus de computador são programas autônomos que se propagam automaticamente por meio de redes sem a necessidade de ação humana, ao passo que os worms exigem interação do usuário para iniciar sua replicação.\nII. Uma forma usual de atuação de um adware é analisar o conteúdo dos emails para identificar termos-chave de interesse comercial, enviando esses dados para anunciantes que podem, então, enviar emails direcionados ao destinatário.\nIII. Em ataques DDoS que envolvam uma botnet, a saturação dos pacotes ocorre no botmaster.\nIV. Uma sandbox é um ambiente de segurança isolado que permite a execução de programas ou códigos potencialmente perigosos sem que eles afetem diretamente o sistema operacional principal ou outros arquivos importantes da máquina.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa I está correta.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas I, II e IV estão corretas.",
    ],
    gabarito: "D", pegadinha: "troca-sujeito", palavraChave: "sandbox",
    cognitivo: {
      motivo: "Revisar malwares, DDoS e isolamento.",
      palavraCritica: "worm",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I incorreta: está invertido: o worm se propaga sozinho; o vírus depende de hospedeiro. Afirmativa II incorreta: coletar e repassar dados dos e-mails é spyware; adware exibe propaganda. Afirmativa III incorreta: no DDoS quem satura é a vítima, não o botmaster. Afirmativa IV correta: sandbox é ambiente isolado para executar código suspeito. Resta(m) apenas a afirmativa IV.",
      fundamento: "Malwares, botnets e soluções de segurança.",
      macete: "Worm anda sozinho; adware mostra; spyware espiona.",
      erroComum: "Trocar os papéis de cada praga.",
      comoBancaPensa: "Só a definição de defesa está certa.",
    },
  },

  {
    ...BASE144,
    id: "TI-583", disciplina: "TI e Segurança Cibernética", assunto: "Ciência de dados e aprendizado de máquina",
    subassunto: "Derivado de TI-535, TI-537, TI-538, TI-541 — deep learning e tipos de IA",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de inteligência artificial, considere as seguintes afirmações:\n\nI. Deep learning é um campo da IA cujos modelos conseguem reconhecer padrões de dados, tais como imagens e textos, para produzir insights e previsões precisas, sendo as redes neurais sua tecnologia subjacente.\nII. Deep learning é um tipo de aprendizado de máquina que se baseia no uso de redes neurais de uma única camada.\nIII. O conceito de inteligência artificial fraca compreende sistemas desenvolvidos para realizar tarefas específicas, por exemplo, reconhecimento de voz.\nIV. Todos os sistemas de inteligência artificial operam de forma completamente autônoma, sem necessidade de supervisão ou de intervenção humana em nenhum estágio.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa I está correta.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Apenas as afirmativas I e III estão corretas.",
    ],
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "única camada",
    cognitivo: {
      motivo: "Revisar deep learning e tipos de IA.",
      palavraCritica: "várias camadas",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I correta: deep learning usa redes neurais para reconhecer padrões. Afirmativa II incorreta: deep learning usa várias camadas, não uma só. Afirmativa III correta: IA fraca resolve tarefas específicas. Afirmativa IV incorreta: sistemas de IA dependem de supervisão humana em várias etapas. Resta(m) apenas as afirmativas I e III.",
      fundamento: "Fundamentos de IA e aprendizado profundo.",
      macete: "Profundo = muitas camadas. Fraca = uma tarefa.",
      erroComum: "Aceitar absolutos sobre autonomia.",
      comoBancaPensa: "Duas definições certas e dois exageros.",
    },
  },

  {
    ...BASE144,
    id: "TI-584", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico",
    subassunto: "Derivado de TI-528, TI-532, TI-533, TI-534 — Gmail, Outlook e clientes de e-mail",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca de correio eletrônico, considere as seguintes afirmações:\n\nI. No Gmail, ao clicar em “Arquivar” uma mensagem, ela é removida da caixa de entrada, mas pode ser localizada posteriormente por meio da busca.\nII. O Microsoft Outlook 2019 não permite que sejam criadas contas POP, ou seja, aquelas que armazenam as informações do usuário em arquivos de dados do Outlook (*.pst).\nIII. No Outlook 2016, determinados tipos de contas, como, por exemplo, contas POP armazenam suas informações em Arquivos de Dados do Outlook (.pst).\nIV. Os clientes de e-mail são softwares capazes de receber e enviar e-mails. Entre suas desvantagens, destacam-se a impossibilidade de anexar arquivos e imagens.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "negacao-dupla", palavraChave: ".pst",
    cognitivo: {
      motivo: "Revisar Gmail, Outlook e clientes de e-mail.",
      palavraCritica: "POP",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I correta: arquivar tira da caixa de entrada sem apagar; a busca encontra a mensagem. Afirmativa II incorreta: o Outlook 2019 aceita contas POP, que usam .pst. Afirmativa III correta: contas POP guardam os dados em .pst. Afirmativa IV incorreta: clientes de e-mail anexam arquivos e imagens. Resta(m) apenas as afirmativas I e III.",
      fundamento: "Gmail e Microsoft Outlook.",
      macete: "POP → .pst; IMAP → .ost.",
      erroComum: "Aceitar a negação sem conferir.",
      comoBancaPensa: "Duas negações de recurso existente entre duas afirmações certas.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE144);
