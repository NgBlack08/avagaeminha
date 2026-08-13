/* =====================================================================
   QUESTLAB — Lote 88: TECNOLOGIA DA INFORMAÇÃO E SEGURANÇA
   CIBERNÉTICA, ITENS DE PROVA REAL

   Mesma procedência e método dos lotes 84 a 87.

   UM ITEM DESCARTADO — e por quê

   O compilado trazia um item afirmando que nomes de arquivo no Windows
   podem ter até 256 caracteres "desde que não incluam símbolos como
   $ ? " / \ | < > * :". O item foi DEIXADO DE FORA, mesmo sendo de
   prova real, porque a lista está errada: o cifrão é caractere
   perfeitamente válido em nome de arquivo no Windows. Os reservados são
   apenas \ / : * ? " < > | — nove, não dez. Incluí-lo obrigaria a
   ensinar um erro para justificar um gabarito.

   Vale o registro do critério: aproveitar um item de prova real não
   significa aceitá-lo quando o conteúdo é tecnicamente falso. Prova
   aplicada não vira verdade por ter sido aplicada.

   O QUE ESTE LOTE COBRE. Quatro blocos: malware e defesa (vírus x worm,
   ransomware, heurística), redes e protocolos (MAN x WAN, coaxial,
   IPv6, HTTPS), nuvem e arquitetura (cloud, FaaS, frontend/backend,
   lambda em Python) e uso de ferramentas (busca no Google, favoritos do
   Chrome, EFS no Windows).

   Gabarito: 10 CERTO / 5 ERRADO.
   ===================================================================== */

const CARGOS88 = ["Escrivão", "Agente"];
const BASE88 = {
  concurso: "PCAL", cargo: CARGOS88, ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  disciplina: "TI e Segurança Cibernética",
};

const QUESTOES_PCAL_LOTE88 = [

  /* ================= MALWARE E DEFESA ================= */

  {
    ...BASE88,
    id: "TI-235", assunto: "Malware",
    subassunto: "Vírus x worm — forma de propagação",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte técnica (Cartilha CERT.br)",
    dificuldade: 3, tempoIdealSeg: 90,
    enunciado: "A grande diferença entre vírus e worms está na forma como eles se propagam: o vírus, ao contrário do worm, não se propaga por meio da inclusão de cópias de si mesmo em outros programas, mas pela execução direta de uma de suas cópias.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "o vírus, ao contrário do worm",
    cognitivo: {
      motivo: "Definições corretas com os nomes trocados — a distinção real está na dependência de hospedeiro.",
      palavraCritica: "ao contrário do",
    },
    comentario: {
      resolucao: "ERRADO — os conceitos estão invertidos. O VÍRUS depende de hospedeiro: propaga-se inserindo cópias de si mesmo em outros programas ou arquivos e só age quando o arquivo infectado é EXECUTADO PELO USUÁRIO. O WORM é autônomo: não precisa de hospedeiro nem de ação humana, propaga-se pela rede explorando vulnerabilidades e executando cópias diretas de si mesmo. O enunciado descreve o comportamento do worm e o atribui ao vírus. A consequência prática dessa diferença é grande: worms causam congestionamento de rede pela replicação massiva, enquanto vírus dependem do ritmo com que os usuários abrem arquivos.",
      fundamento: "Cartilha de Segurança para Internet (CERT.br), capítulo sobre códigos maliciosos.",
      macete: "Vírus precisa de carona (hospedeiro). Worm anda sozinho pela rede.",
      erroComum: "Usar 'vírus' como termo genérico para qualquer malware.",
      comoBancaPensa: "Descreve corretamente os dois comportamentos e permuta os rótulos — mesma manobra de DA-088 e DC-123.",
    },
  },

  {
    ...BASE88,
    id: "TI-236", assunto: "Malware",
    subassunto: "Ransomware e vetores de propagação",
    origem: "CEBRASPE PF 2025 (Agente Administrativo) — gabarito revisado na fonte técnica",
    dificuldade: 2, tempoIdealSeg: 75,
    enunciado: "Ransomware é um tipo de malware que não pode ser propagado por phishing, mas bloqueia o acesso ao sistema ou criptografa os arquivos da vítima, sendo exigido um pagamento de resgate para que o acesso seja restaurado.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "não pode ser propagado por phishing",
    cognitivo: {
      motivo: "A definição de ransomware está correta; a negação enxertada no meio é que derruba o item.",
      palavraCritica: "não pode",
    },
    comentario: {
      resolucao: "ERRADO. A descrição do ransomware está certa — bloqueia o acesso (locker) ou criptografa os arquivos (crypto) e exige resgate, normalmente em criptomoeda. O erro está na negação: o PHISHING É JUSTAMENTE O VETOR MAIS COMUM de entrega de ransomware, por e-mails com anexos maliciosos ou links que baixam o payload. Os outros vetores frequentes são exploração de vulnerabilidades em serviços expostos (o WannaCry usou uma falha do SMB) e acesso remoto comprometido, como RDP com senha fraca. Estratégia de leitura: quando uma definição correta traz uma negação embutida, é quase sempre na negação que está o gabarito.",
      fundamento: "Cartilha de Segurança para Internet (CERT.br); práticas de resposta a incidentes.",
      macete: "Ransomware chega por e-mail muito mais do que por qualquer outra porta.",
      erroComum: "Validar o item pela definição correta, sem testar a negação.",
      comoBancaPensa: "Insere um 'não pode' no meio de uma definição impecável.",
    },
  },

  {
    ...BASE88,
    id: "TI-237", assunto: "Segurança da informação",
    subassunto: "Detecção heurística x por assinatura",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "Detecção heurística é uma técnica de análise do comportamento e da estrutura do código para a identificação de características típicas de vírus, ainda que a assinatura específica não seja conhecida.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "ainda que a assinatura específica não seja conhecida",
    cognitivo: {
      motivo: "É a técnica que permite detectar ameaça nova (zero-day), e o contraste com assinatura é o ponto cobrado.",
      palavraCritica: "heurística",
    },
    comentario: {
      resolucao: "CERTO. A detecção por ASSINATURA compara o arquivo com um banco de padrões de malwares já catalogados — é precisa e rápida, mas cega para o que ainda não foi catalogado. A detecção HEURÍSTICA analisa estrutura e comportamento do código em busca de características suspeitas (tentativa de alterar o registro, injeção em processos, criptografia em massa de arquivos), o que permite identificar variantes e ameaças novas sem assinatura conhecida. O preço dessa capacidade é a taxa maior de FALSOS POSITIVOS — software legítimo pode exibir comportamento parecido. Antivírus modernos combinam as duas abordagens, somadas a análise em sandbox e reputação em nuvem.",
      fundamento: "Fundamentos de detecção de malware; documentação técnica de antivírus.",
      macete: "Assinatura reconhece o já conhecido. Heurística desconfia do comportamento.",
      erroComum: "Achar que antivírus só detecta o que está no banco de assinaturas.",
      comoBancaPensa: "Cobra o par conceitual completo, apresentando apenas um dos lados.",
    },
  },

  /* ================= REDES E PROTOCOLOS ================= */

  {
    ...BASE88,
    id: "TI-238", assunto: "Redes de computadores",
    subassunto: "Classificação por abrangência — MAN x WAN",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte técnica (Tanenbaum)",
    dificuldade: 2, tempoIdealSeg: 75,
    enunciado: "Rede metropolitana (MAN) é aquela que abrange uma grande área geográfica com frequência um país ou continente e contém um conjunto de máquinas cuja finalidade é executar os programas (ou seja, as aplicações) do usuário.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "um país ou continente",
    cognitivo: {
      motivo: "A definição apresentada é de WAN — a escala geográfica é o critério de classificação.",
      palavraCritica: "metropolitana",
    },
    comentario: {
      resolucao: "ERRADO. A definição dada, com a menção a país ou continente, é de WAN (Wide Area Network) — e a redação segue de perto a do Tanenbaum. A MAN (Metropolitan Area Network) abrange uma CIDADE ou região metropolitana, ocupando a faixa intermediária entre a LAN e a WAN; o exemplo clássico é a rede de TV a cabo de um município. Fixe a escala completa: PAN (área pessoal, poucos metros, como Bluetooth), LAN (prédio ou campus), MAN (cidade) e WAN (país, continente ou mundo, sendo a Internet a maior de todas).",
      fundamento: "Tanenbaum, Redes de Computadores — classificação por escala.",
      macete: "PAN corpo, LAN prédio, MAN cidade, WAN mundo.",
      erroComum: "Trocar MAN e WAN, que são as duas maiores da escala.",
      comoBancaPensa: "Reproduz a definição do livro-texto com a sigla errada.",
    },
  },

  {
    ...BASE88,
    id: "TI-239", assunto: "Redes de computadores",
    subassunto: "Meios físicos — cabo coaxial",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 90,
    enunciado: "Denomina-se cabo coaxial, em uma rede de comunicação, o tipo de mídia de comunicação que realiza a conexão entre pontos, é imune a ruídos elétricos e é responsável pela transmissão de dados com capacidade de largura de banda muito maior do que os pares trançados.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "é imune a ruídos elétricos",
    cognitivo: {
      motivo: "Imunidade total a interferência eletromagnética é atributo da fibra óptica, não do coaxial.",
      palavraCritica: "imune",
    },
    comentario: {
      resolucao: "ERRADO. O cabo coaxial tem boa BLINDAGEM contra interferências — a malha metálica externa serve exatamente para isso — e por muito tempo ofereceu banda superior à do par trançado. Mas blindagem não é IMUNIDADE: por ser meio metálico, o coaxial continua sujeito a interferência eletromagnética e a ruídos elétricos. Imune de fato é a FIBRA ÓPTICA, que transmite por luz e, não conduzindo eletricidade, é indiferente a campos eletromagnéticos, além de não sofrer crosstalk e ser muito mais difícil de grampear. Note ainda que a comparação com o par trançado envelheceu: cabos Cat6a e Cat8 superam com folga o coaxial em rede local.",
      fundamento: "Fundamentos de meios de transmissão — características de coaxial, par trançado e fibra.",
      macete: "Imune a ruído elétrico só a fibra, que nem conduz eletricidade.",
      erroComum: "Confundir 'blindado' com 'imune'.",
      comoBancaPensa: "Cerca a palavra falsa com afirmações verdadeiras sobre o mesmo objeto.",
    },
  },

  {
    ...BASE88,
    id: "TI-240", assunto: "Redes de computadores",
    subassunto: "IPv6 — tamanho do endereço",
    origem: "CEBRASPE PF 2025 (Escrivão) — gabarito revisado na fonte técnica (RFC 4291)",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "No protocolo IPv6, cada endereço tem 256 bits, que são divididos em duas partes; esse protocolo elimina o uso de máscaras de sub-rede.",
    gabarito: "E",
    pegadinha: "troca-numerica",
    palavraChave: "256 bits",
    cognitivo: {
      motivo: "Dado numérico objetivo — o endereço IPv6 tem 128 bits, e o item ainda erra sobre sub-redes.",
      palavraCritica: "elimina o uso de máscaras",
    },
    comentario: {
      resolucao: "ERRADO em dois pontos. O endereço IPv6 tem 128 BITS, não 256 — quatro vezes o tamanho do IPv4, que tem 32 —, representados em oito grupos de quatro dígitos hexadecimais separados por dois-pontos. E o protocolo NÃO elimina a divisão em sub-redes: o endereço se divide em prefixo de rede e identificador de interface, com notação CIDR (por exemplo /64, que é o tamanho padrão de sub-rede em IPv6). O que o IPv6 dispensou foi o NAT como necessidade de sobrevivência, dado o espaço de endereçamento praticamente inesgotável.",
      fundamento: "RFC 4291 — IP Version 6 Addressing Architecture.",
      macete: "IPv4 tem 32 bits, IPv6 tem 128. Sub-rede continua existindo, em notação CIDR.",
      erroComum: "Dobrar mentalmente o valor correto (128 vira 256).",
      comoBancaPensa: "Adultera o número e acrescenta uma segunda afirmação falsa, para que o item caia por dois motivos.",
    },
  },

  {
    ...BASE88,
    id: "TI-241", assunto: "Segurança da informação",
    subassunto: "HTTPS não é exclusivo de redes privadas",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "Sendo o HTTPS um protocolo de segurança utilizado em redes privadas de computadores, infere-se que um endereço iniciado por https:// identifica necessariamente um sítio localizado em um servidor de uma intranet.",
    gabarito: "E",
    pegadinha: "generalizacao",
    palavraChave: "identifica necessariamente um sítio ... de uma intranet",
    cognitivo: {
      motivo: "Premissa falsa gerando conclusão falsa: o HTTPS é o padrão da Internet pública, não marca de intranet.",
      palavraCritica: "necessariamente",
    },
    comentario: {
      resolucao: "ERRADO desde a premissa. O HTTPS (HTTP over TLS) não é protocolo de rede privada: é o padrão da INTERNET PÚBLICA, e hoje a esmagadora maioria dos sítios públicos o utiliza, com navegadores marcando como 'não seguro' quem ainda usa HTTP puro. Ele cifra o tráfego e autentica o servidor por certificado digital, e nada disso tem relação com a rede estar aberta ou fechada. Duas observações que a banca costuma explorar: o nome do host (algo como 'intra.órgão.gov.br') é apenas convenção de nomenclatura, sem efeito técnico; e uma intranet pode perfeitamente operar em HTTP simples, ainda que não seja recomendável.",
      fundamento: "RFC 2818 (HTTP over TLS); fundamentos de intranet e extranet.",
      macete: "HTTPS diz que o canal é cifrado, não onde o servidor está.",
      erroComum: "Ler o nome do host como se fosse informação de topologia de rede.",
      comoBancaPensa: "Enuncia uma premissa técnica falsa e pede a inferência, que herda o erro.",
    },
  },

  /* ================= NUVEM E ARQUITETURA ================= */

  {
    ...BASE88,
    id: "TI-242", assunto: "Computação em nuvem",
    subassunto: "Elasticidade de recursos",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte técnica (NIST SP 800-145)",
    dificuldade: 2, tempoIdealSeg: 75,
    enunciado: "A computação na nuvem (cloud computing) possibilita que aplicações executadas em servidores isolados sejam também executadas na nuvem (Internet) em um ambiente de larga escala e com o uso \"elástico\" de recursos.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "uso \"elástico\" de recursos",
    cognitivo: {
      motivo: "Elasticidade rápida é uma das cinco características essenciais da nuvem segundo o NIST.",
      palavraCritica: "elástico",
    },
    comentario: {
      resolucao: "CERTO. A definição do NIST (SP 800-145) lista cinco características essenciais da computação em nuvem: autoatendimento sob demanda, amplo acesso pela rede, agrupamento de recursos (pooling), ELASTICIDADE RÁPIDA e serviço mensurável. Elasticidade é a capacidade de aumentar ou reduzir recursos conforme a carga, quase instantaneamente e, do ponto de vista do usuário, sem limite aparente — é o que permite a uma aplicação absorver um pico de acesso sem provisionar servidores para o pior caso o ano inteiro. Complete o quadro com os três modelos de serviço (IaaS, PaaS, SaaS) e os quatro de implantação (privada, comunitária, pública e híbrida).",
      fundamento: "NIST SP 800-145 — The NIST Definition of Cloud Computing.",
      macete: "Elasticidade: o recurso acompanha a demanda, para cima e para baixo.",
      erroComum: "Reduzir nuvem a 'servidor de outra pessoa', sem as características que a definem.",
      comoBancaPensa: "Extrai uma das cinco características e a enuncia com a palavra técnica entre aspas.",
    },
  },

  {
    ...BASE88,
    id: "TI-243", assunto: "Computação em nuvem",
    subassunto: "Função como serviço (FaaS) e serverless",
    origem: "CEBRASPE PC-PE 2024 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "A função como serviço (FaaS) é um modelo de execução de computação em nuvem orientado a eventos que permite que desenvolvedores criem, executem e gerenciem pacotes de aplicações sem a necessidade de se preocuparem com a manutenção da infraestrutura.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "orientado a eventos",
    cognitivo: {
      motivo: "FaaS é a materialização do serverless — e 'orientado a eventos' é o traço que o distingue de PaaS.",
      palavraCritica: "sem a necessidade de se preocuparem com a manutenção da infraestrutura",
    },
    comentario: {
      resolucao: "CERTO. FaaS é o modelo em que o desenvolvedor entrega FUNÇÕES isoladas, que a plataforma executa em resposta a EVENTOS — uma requisição HTTP, um arquivo depositado no armazenamento, uma mensagem em fila — provisionando e liberando os recursos automaticamente. É a expressão mais direta da arquitetura serverless (nome que não significa ausência de servidor, mas ausência de servidor sob responsabilidade do desenvolvedor). Exemplos de mercado: AWS Lambda, Azure Functions, Google Cloud Functions. A cobrança se dá por invocação e tempo de execução, não por instância no ar — e a contrapartida é o cold start, a latência da primeira chamada após ociosidade.",
      fundamento: "Modelos de serviço em nuvem — IaaS, PaaS, SaaS, FaaS.",
      macete: "FaaS: você entrega a função, a nuvem cuida do resto e cobra por execução.",
      erroComum: "Confundir FaaS com PaaS — na PaaS a aplicação fica no ar continuamente.",
      comoBancaPensa: "Descreve o modelo corretamente; a versão errada troca 'orientado a eventos' por 'execução contínua'.",
    },
  },

  {
    ...BASE88,
    id: "TI-244", assunto: "Arquitetura de sistemas",
    subassunto: "Frontend e backend",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito revisado na fonte técnica",
    dificuldade: 2, tempoIdealSeg: 80,
    enunciado: "Na arquitetura de sistemas, o frontend é a interface visível e interativa com o usuário, enquanto o backend realiza o processamento de dados e a lógica de negócios; essa separação reflete os princípios da teoria geral de sistemas, segundo a qual a organização de sistemas em partes interdependentes facilita sua compreensão e manutenção.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "partes interdependentes",
    cognitivo: {
      motivo: "Item longo que junta conceito técnico e fundamento teórico — as duas metades precisam estar certas.",
      palavraCritica: "teoria geral de sistemas",
    },
    comentario: {
      resolucao: "CERTO nas duas metades. FRONTEND é a camada de apresentação, com a qual o usuário interage (HTML, CSS, JavaScript, aplicativos móveis); BACKEND é a camada de servidor, onde ficam a lógica de negócio, o acesso a banco de dados, a autenticação e as integrações. E a separação de fato realiza o princípio da modularidade da teoria geral de sistemas: dividir o todo em partes interdependentes, cada uma com responsabilidade definida, torna o sistema mais compreensível, testável e substituível por partes. Os benefícios práticos são conhecidos: times paralelos, backend servindo web e mobile pela mesma API, e troca da interface sem reescrever a regra de negócio.",
      fundamento: "Arquitetura de software em camadas; teoria geral de sistemas (Bertalanffy).",
      macete: "Frontend é o que se vê; backend é o que decide.",
      erroComum: "Colocar o banco de dados no frontend ou atribuir a ele a regra de negócio.",
      comoBancaPensa: "Encadeia definição técnica e fundamento teórico; a versão errada troca o que cada camada faz.",
    },
  },

  {
    ...BASE88,
    id: "TI-245", assunto: "Programação",
    subassunto: "Funções lambda em Python",
    origem: "CEBRASPE PF 2025 (Escrivão) — gabarito revisado na fonte técnica (documentação Python)",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "Em Python, a função lambda permite a criação de funções anônimas, que podem ser usadas como argumentos em funções de ordem superior, o que facilita a programação funcional.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "funções anônimas",
    cognitivo: {
      motivo: "Conceito de programação funcional que a CEBRASPE passou a cobrar nas provas de carreira policial.",
      palavraCritica: "funções de ordem superior",
    },
    comentario: {
      resolucao: "CERTO. A expressão lambda cria uma função ANÔNIMA — sem nome vinculado por def — restrita a uma única expressão, cujo valor é retornado implicitamente. Sua utilidade principal é servir de argumento a FUNÇÕES DE ORDEM SUPERIOR, isto é, funções que recebem ou devolvem outras funções: map(), filter(), sorted(key=...) e reduce(). Exemplo: sorted(lista, key=lambda p: p.idade) ordena por idade sem exigir uma função nomeada. As limitações também são cobradas: lambda não aceita múltiplas instruções, nem comandos como return, atribuição ou laços — para isso é preciso def.",
      fundamento: "Documentação oficial da linguagem Python — expressões lambda.",
      macete: "lambda = função de uma linha, sem nome, para passar adiante.",
      erroComum: "Supor que lambda comporta várias instruções, como uma função comum.",
      comoBancaPensa: "Enuncia o conceito com a terminologia técnica correta, contando com quem só conhece def.",
    },
  },

  /* ================= FERRAMENTAS E SISTEMA OPERACIONAL ================= */

  {
    ...BASE88,
    id: "TI-246", assunto: "Ferramentas de busca",
    subassunto: "Operadores de pesquisa do Google",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "Para pesquisar, no Google, exatamente a frase \"operação apate\", restringindo-se a pesquisa a um sítio específico, mas excluindo-se as páginas que contenham a palavra \"drogas\", é correta a sintaxe: \"operação apate\" -drogas site:pcdf.df.gov.br",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "\"operação apate\" -drogas site:",
    cognitivo: {
      motivo: "Três operadores numa só consulta — aspas, hífen e site: —, cada um com sintaxe própria.",
      palavraCritica: "-drogas",
    },
    comentario: {
      resolucao: "CERTO. Os três operadores estão corretos e bem formados. ASPAS DUPLAS buscam a expressão exata, na ordem escrita. O HÍFEN colado à palavra funciona como operador de exclusão (NOT), removendo dos resultados as páginas que a contenham — e o detalhe da colagem importa: '-drogas' exclui, '- drogas' com espaço não. O operador SITE: restringe a busca a um domínio, também sem espaço após os dois-pontos. Outros operadores frequentes em prova: filetype: (formato do arquivo), intitle: (termo no título), inurl: (termo na URL), related: (sítios semelhantes) e o asterisco como curinga.",
      fundamento: "Documentação de operadores de pesquisa do Google.",
      macete: "Aspas exatas, hífen colado exclui, site: sem espaço restringe.",
      erroComum: "Separar o hífen ou os dois-pontos por espaço, o que desativa o operador.",
      comoBancaPensa: "Monta uma consulta com três operadores; qualquer espaço a mais na versão seguinte inverte o gabarito.",
    },
  },

  {
    ...BASE88,
    id: "TI-247", assunto: "Ferramentas de busca",
    subassunto: "Insensibilidade a maiúsculas e minúsculas",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte técnica",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "No sítio de buscas do Google, uma pesquisa pela expressão \"CIDADE DE MACEIÓ\", em letras maiúsculas, ou pela expressão \"Cidade de Maceió\", em letras minúsculas, retornará ao usuário resultados idênticos.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "resultados idênticos",
    cognitivo: {
      motivo: "O buscador normaliza a caixa das letras — comportamento básico, mas frequentemente cobrado.",
      palavraCritica: "maiúsculas ... minúsculas",
    },
    comentario: {
      resolucao: "CERTO. O mecanismo de busca do Google é CASE INSENSITIVE: normaliza os termos antes de consultar o índice, de modo que a caixa das letras não altera o resultado. O mesmo vale para acentuação na maioria dos casos. A exceção que vale conhecer é o operador OR, que precisa vir em maiúsculas para ser reconhecido como operador — escrito 'or', é tratado como palavra comum. Não confundir com sistemas que SÃO sensíveis à caixa: comandos do Linux, senhas e a maioria das linguagens de programação.",
      fundamento: "Funcionamento de mecanismos de busca — normalização de consultas.",
      macete: "Buscador ignora maiúsculas. Senha e terminal Linux, não.",
      erroComum: "Transportar a sensibilidade a maiúsculas de senhas para o buscador.",
      comoBancaPensa: "Item de base, que costuma abrir o bloco de informática.",
    },
  },

  {
    ...BASE88,
    id: "TI-248", assunto: "Navegadores",
    subassunto: "Sincronização de favoritos no Chrome",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito revisado na fonte técnica",
    dificuldade: 2, tempoIdealSeg: 75,
    enunciado: "Sempre que uma URL é salva pelo gerenciador de favoritos do Google Chrome, ela é sincronizada em todos os dispositivos utilizados pelo usuário, na sua conta do Google.",
    gabarito: "E",
    pegadinha: "termo-absoluto",
    palavraChave: "Sempre que",
    cognitivo: {
      motivo: "A sincronização depende de duas condições — login e sync ativo —, e o 'sempre' as ignora.",
      palavraCritica: "Sempre",
    },
    comentario: {
      resolucao: "ERRADO. A sincronização de favoritos não é automática nem incondicional: exige que o usuário esteja AUTENTICADO na conta Google no navegador E que a SINCRONIZAÇÃO ESTEJA ATIVADA, com favoritos entre os itens selecionados para sincronizar. Sem isso — em modo anônimo, em perfil não logado, ou com o sync desligado — o favorito fica apenas no dispositivo local. Some-se que o usuário pode escolher quais tipos de dado sincronizar, mantendo senhas ou histórico fora. O termo absoluto 'sempre' é o que derruba o item.",
      fundamento: "Documentação do Google Chrome — sincronização de dados do navegador.",
      macete: "Sincroniza se estiver logado E com sync ligado. Sem isso, é só local.",
      erroComum: "Presumir que ter conta Google basta para sincronizar.",
      comoBancaPensa: "Abre com 'sempre que', apagando as condições que a funcionalidade exige.",
    },
  },

  {
    ...BASE88,
    id: "TI-249", assunto: "Sistemas operacionais",
    subassunto: "Windows — indicação visual de arquivo criptografado",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte técnica (EFS/NTFS)",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "No sistema operacional Windows 10, o nome de um arquivo que é criptografado é apresentado no explorador de arquivos na cor verde.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "na cor verde",
    cognitivo: {
      motivo: "Par de cores que a banca inverte: verde para criptografado, azul para comprimido.",
      palavraCritica: "verde",
    },
    comentario: {
      resolucao: "CERTO. No Explorador de Arquivos do Windows, arquivos e pastas cifrados pelo EFS (Encrypting File System) aparecem com o nome em VERDE, e os comprimidos pelo NTFS, em AZUL. É a indicação visual padrão para atributos do sistema de arquivos NTFS, e o par verde/azul é exatamente o que a banca troca nas versões seguintes. Dois pontos correlatos que valem reter: os dois atributos são mutuamente exclusivos — um arquivo não pode estar cifrado e comprimido pelo NTFS ao mesmo tempo — e o EFS depende de NTFS, não funcionando em FAT32 ou exFAT.",
      fundamento: "Documentação do Windows — atributos NTFS e Encrypting File System.",
      macete: "Verde cifrado, azul comprimido. E os dois não convivem.",
      erroComum: "Inverter as cores, ou supor que a marcação indica arquivo oculto ou somente leitura.",
      comoBancaPensa: "Item de detalhe visual; a próxima versão troca a cor ou o atributo.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE88);
