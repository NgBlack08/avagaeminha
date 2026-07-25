/* =====================================================================
   QUESTLAB — Lote 40: SEGURANÇA DA INFORMAÇÃO (expansão profunda)
   Baseado em três materiais de terceiros contendo 20 questões REAIS de
   provas anteriores da CEBRASPE sobre Segurança da Informação (com
   gabarito oficial e comentários explicativos anexados). Os itens
   abaixo são 100% ORIGINAIS — nenhuma frase, enunciado ou comentário
   foi copiado — mas cobrem exaustivamente os MESMOS temas e o MESMO
   padrão de pegadinha já confirmados como recorrentes pela banca:
   (1) cruzar as características de dois malwares/conceitos distintos
   na mesma frase; (2) usar palavras absolutas ("totalmente imune",
   "sempre", "incapaz") para induzir ao erro; (3) inverter as
   comparações de espaço/velocidade/restauração entre tipos de backup.
   Gabarito de cada item novo verificado de forma independente.
   26 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE40 = [

  /* ===== MALWARES: worm, vírus, trojan, spyware, ransomware ===== */
  {
    id: "TI-034", disciplina: "TI e Segurança Cibernética", assunto: "Malwares", subassunto: "Worm (autopropagação)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.86,
    enunciado: "O worm é um tipo de praga virtual capaz de se replicar e se propagar automaticamente de um computador para outro através da rede, explorando vulnerabilidades dos sistemas, sem depender de um arquivo hospedeiro ou da ação direta do usuário.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "autopropagação automática ... sem arquivo hospedeiro",
    cognitivo: {
      motivo: "Cobrar a característica central e definidora do worm: autopropagação automática pela rede.",
      mede: "Segurança da Informação — malwares (worm).",
      pegadinhaDesc: "A banca pode negar a autopropagação automática ou exigir um hospedeiro/mídia removível.",
      ondeErra: "Confunde o worm com o vírus (que depende de hospedeiro) ou presume que toda praga precisa de ação do usuário.",
      palavraCritica: "sem depender de um arquivo hospedeiro",
      tecnica: "O worm se propaga SOZINHO pela rede, explorando falhas de segurança de software, sem precisar de um arquivo hospedeiro (diferença central para o vírus) nem de mídia removível.",
      regraMental: "Worm = autopropagação automática pela rede, sem hospedeiro."
    },
    comentario: {
      resolucao: "CERTO. O worm é definido justamente pela capacidade de se replicar e se propagar automaticamente pela rede, de computador para computador, explorando vulnerabilidades de segurança — sem depender de um arquivo hospedeiro (como o vírus) nem de ação humana para se disseminar.",
      fundamento: "Doutrina de segurança da informação — taxonomia de malwares (worm).",
      macete: "Worm se vira sozinho: rede + vulnerabilidade = propagação automática.",
      erroComum: "Confundir com vírus (hospedeiro) ou trojan (ação do usuário).",
      comoBancaPensa: "Item 'limpo', sem cruzamento de conceitos — quando a definição bate exatamente com a característica certa, tende a estar correto."
    }
  },
  {
    id: "TI-035", disciplina: "TI e Segurança Cibernética", assunto: "Malwares", subassunto: "Worm (autopropagação)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.84,
    enunciado: "O worm é um programa incapaz de se propagar automaticamente pelas redes de computadores, sendo necessário que sua disseminação ocorra por meio de dispositivos de mídia removível, como pendrives.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "incapaz ... mídia removível",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, a autopropagação automática do worm.",
      mede: "Segurança da Informação — malwares (worm).",
      pegadinhaDesc: "A banca nega a autopropagação em rede e atribui ao worm uma dependência que não é sua.",
      ondeErra: "Aceita a inversão sem perceber que é exatamente o worm quem dispensa mídia removível.",
      palavraCritica: "incapaz",
      tecnica: "O worm se propaga automaticamente pela rede (e-mail, falhas de segurança, compartilhamentos), sem qualquer necessidade de mídia removível — a palavra 'incapaz' já denuncia a inversão.",
      regraMental: "Termos absolutos como 'incapaz' e 'sempre' costumam sinalizar item errado."
    },
    comentario: {
      resolucao: "ERRADO. O worm é justamente capaz de se propagar automaticamente pelas redes, sem depender de mídia removível — essa dependência de meio físico externo é característica mais próxima do vírus clássico, não do worm.",
      fundamento: "Doutrina de segurança da informação — taxonomia de malwares (worm).",
      macete: "Palavra absoluta ('incapaz') + característica invertida = pegadinha clássica.",
      erroComum: "Inverter a definição de worm com a de vírus.",
      comoBancaPensa: "Nega a característica definidora do malware e atribui a ele uma limitação inexistente."
    }
  },
  {
    id: "TI-036", disciplina: "TI e Segurança Cibernética", assunto: "Malwares", subassunto: "Vírus × worm (dependência de hospedeiro)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Diferentemente do worm, que se autopropaga pela rede sem necessidade de um programa hospedeiro, o vírus de computador depende da existência de um arquivo ou programa hospedeiro para se replicar e se disseminar.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "vírus ... depende de hospedeiro",
    cognitivo: {
      motivo: "Cobrar a distinção clássica entre vírus (dependente de hospedeiro) e worm (autônomo).",
      mede: "Segurança da Informação — malwares (vírus x worm).",
      pegadinhaDesc: "A banca pode inverter, atribuindo ao vírus a autopropagação do worm.",
      ondeErra: "Troca as características de vírus e worm entre si.",
      palavraCritica: "depende de um arquivo ou programa hospedeiro",
      tecnica: "O vírus precisa se anexar a um arquivo/programa hospedeiro para se replicar e depende, em regra, da execução desse hospedeiro pelo usuário — diferentemente do worm, que se propaga sozinho pela rede.",
      regraMental: "Vírus = precisa de hospedeiro. Worm = autônomo, explora a rede."
    },
    comentario: {
      resolucao: "CERTO. O vírus de computador é definido pela dependência de um arquivo ou programa hospedeiro para se replicar e se disseminar — ao contrário do worm, que se autopropaga pela rede de forma independente, explorando vulnerabilidades de segurança.",
      fundamento: "Doutrina de segurança da informação — taxonomia de malwares (vírus x worm).",
      macete: "Vírus precisa de 'carona' (hospedeiro); worm anda sozinho.",
      erroComum: "Inverter as definições de vírus e worm.",
      comoBancaPensa: "Cobra a distinção mais clássica e recorrente da taxonomia de malwares."
    }
  },
  {
    id: "TI-037", disciplina: "TI e Segurança Cibernética", assunto: "Malwares", subassunto: "Trojan (cavalo de Troia)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.82,
    enunciado: "O cavalo de Troia (trojan), entre outras ações maliciosas que pode desencadear, propaga-se automaticamente pela rede, enviando cópias de seu próprio código por e-mail para outros dispositivos, de modo que impressoras, roteadores e aparelhos conectados por Bluetooth passam a retransmitir o código malicioso.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "propaga-se automaticamente pela rede",
    cognitivo: {
      motivo: "Cobrar que o trojan NÃO se autopropaga pela rede (comportamento típico do worm).",
      mede: "Segurança da Informação — malwares (trojan).",
      pegadinhaDesc: "A banca atribui ao trojan o comportamento de autopropagação em rede, que é do worm.",
      ondeErra: "Confunde o trojan (depende da ação do usuário) com o worm (autopropagação automática).",
      palavraCritica: "propaga-se automaticamente pela rede",
      tecnica: "O trojan se disfarça de programa legítimo e depende da própria vítima para ser instalado/executado — ele não se autorreplica nem se propaga sozinho pela rede infectando outros dispositivos, ao contrário do worm.",
      regraMental: "Quem se autopropaga pela rede é o worm. O trojan depende do usuário instalar."
    },
    comentario: {
      resolucao: "ERRADO. Autopropagar-se pela rede, enviando cópias de si mesmo e infectando outros dispositivos, é comportamento típico do worm, e não do trojan — este último depende da ação do próprio usuário, que o instala acreditando se tratar de um programa legítimo.",
      fundamento: "Doutrina de segurança da informação — taxonomia de malwares (trojan x worm).",
      macete: "Trojan não anda sozinho pela rede — quem faz isso é o worm.",
      erroComum: "Atribuir ao trojan o comportamento de autopropagação que é próprio do worm.",
      comoBancaPensa: "Cruza dois malwares distintos na mesma frase, dando a um a característica do outro."
    }
  },
  {
    id: "TI-038", disciplina: "TI e Segurança Cibernética", assunto: "Malwares", subassunto: "Trojan (cavalo de Troia)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.84,
    enunciado: "O trojan (cavalo de Troia) caracteriza-se por se disfarçar de um programa legítimo e útil, induzindo o próprio usuário a instalá-lo voluntariamente, não possuindo capacidade de se autopropagar pela rede como o worm.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "disfarça ... o próprio usuário a instalá-lo",
    cognitivo: {
      motivo: "Cobrar a característica correta do trojan: disfarce + instalação pelo próprio usuário.",
      mede: "Segurança da Informação — malwares (trojan).",
      pegadinhaDesc: "A banca pode negar o disfarce ou atribuir autopropagação ao trojan.",
      ondeErra: "Confunde trojan com worm quanto à forma de disseminação.",
      palavraCritica: "não possuindo capacidade de se autopropagar",
      tecnica: "O trojan se disfarça de software legítimo/útil para enganar a vítima, que o instala por conta própria — ele pode transportar outros malwares, mas não se autorreplica nem se propaga sozinho pela rede.",
      regraMental: "Trojan engana e é instalado pelo usuário; worm se propaga sozinho."
    },
    comentario: {
      resolucao: "CERTO. O trojan se caracteriza pelo disfarce de programa legítimo, contando com a própria ação do usuário para ser instalado — diferentemente do worm, ele não possui capacidade de autopropagação automática pela rede.",
      fundamento: "Doutrina de segurança da informação — taxonomia de malwares (trojan).",
      macete: "Trojan = engano + instalação voluntária da vítima.",
      erroComum: "Atribuir ao trojan a autopropagação típica do worm.",
      comoBancaPensa: "Item de fixação sobre a característica central e correta do trojan."
    }
  },
  {
    id: "TI-039", disciplina: "TI e Segurança Cibernética", assunto: "Malwares", subassunto: "Ransomware × spyware",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.88,
    enunciado: "O ransomware é uma praga virtual que tem como principal característica capturar dados pessoais do usuário para utilizá-los no envio de mensagens de spam, sem solicitar qualquer permissão.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "capturar dados pessoais ... enviar spam",
    cognitivo: {
      motivo: "Cobrar a definição correta do ransomware (criptografia + resgate), distinta da do spyware.",
      mede: "Segurança da Informação — malwares (ransomware).",
      pegadinhaDesc: "A banca atribui ao ransomware a função de captura de dados/spam, que é do spyware/adware.",
      ondeErra: "Confunde ransomware (sequestro de dados mediante criptografia) com spyware (coleta de dados).",
      palavraCritica: "capturar dados pessoais ... enviar spam",
      tecnica: "A característica central do ransomware é bloquear o acesso ou criptografar os dados da vítima e exigir pagamento de resgate — capturar dados pessoais para envio de spam é comportamento típico de spyware/adware, não de ransomware.",
      regraMental: "Ransomware = criptografia + resgate. Captura de dados para spam = spyware/adware."
    },
    comentario: {
      resolucao: "ERRADO. O ransomware tem como característica definidora bloquear o acesso a um sistema ou criptografar os dados da vítima, exigindo pagamento de resgate para restabelecer o acesso — capturar dados pessoais para envio de spam sem autorização é comportamento típico do spyware/adware, e não do ransomware.",
      fundamento: "Doutrina de segurança da informação — taxonomia de malwares (ransomware x spyware).",
      macete: "Ransomware é resgate, não roubo de dados para spam.",
      erroComum: "Misturar as características de ransomware e spyware na mesma definição.",
      comoBancaPensa: "Cruza dois malwares distintos na mesma frase — padrão clássico de item errado."
    }
  },

  /* ===== FIREWALL, ANTIMALWARE E BACKUP (separação de funções) ===== */
  {
    id: "TI-040", disciplina: "TI e Segurança Cibernética", assunto: "Firewall × antivírus × backup", subassunto: "Firewall (controle de tráfego)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.86,
    enunciado: "Por meio do recurso de proteção firewall, é possível ao usuário solicitar ao sistema uma verificação de seus arquivos em busca de possíveis códigos maliciosos armazenados no computador.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "verificação de seus arquivos",
    cognitivo: {
      motivo: "Cobrar que o firewall controla tráfego de rede, e não escaneia arquivos (função do antivírus).",
      mede: "Segurança da Informação — firewall x antivírus.",
      pegadinhaDesc: "A banca atribui ao firewall a função de escanear arquivos, que é do antivírus.",
      ondeErra: "Confunde controle de tráfego de rede (firewall) com varredura de arquivos armazenados (antivírus).",
      palavraCritica: "verificação de seus arquivos",
      tecnica: "O firewall é uma barreira que controla o tráfego de entrada e saída de uma rede, com base em regras predefinidas — ele não realiza varredura de arquivos armazenados em busca de malware; essa é a função do antivírus.",
      regraMental: "Firewall = tráfego de rede. Antivírus = arquivos armazenados."
    },
    comentario: {
      resolucao: "ERRADO. O firewall controla o tráfego de dados que entra e sai de uma rede, com base em regras de filtragem — quem realiza a verificação de arquivos armazenados em busca de códigos maliciosos é o antivírus, e não o firewall.",
      fundamento: "Doutrina de segurança da informação — ferramentas de proteção (firewall x antivírus).",
      macete: "Firewall cuida do tráfego; antivírus cuida dos arquivos.",
      erroComum: "Atribuir ao firewall a função de escaneamento de arquivos do antivírus.",
      comoBancaPensa: "Erro clássico: atribuir a uma ferramenta de segurança a função de outra."
    }
  },
  {
    id: "TI-041", disciplina: "TI e Segurança Cibernética", assunto: "Firewall × antivírus × backup", subassunto: "Firewall (controle de tráfego)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "O firewall é um mecanismo de segurança, implementado em hardware, em software ou em ambos, que controla o tráfego de dados de entrada e saída de uma rede com base em um conjunto de regras predefinidas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "controla o tráfego ... regras predefinidas",
    cognitivo: {
      motivo: "Cobrar a definição correta e completa do firewall.",
      mede: "Segurança da Informação — firewall.",
      pegadinhaDesc: "A banca pode restringir o firewall a apenas hardware ou apenas software.",
      ondeErra: "Não reconhece que o firewall pode ser implementado em hardware, software ou de forma combinada.",
      palavraCritica: "hardware, em software ou em ambos",
      tecnica: "O firewall é um mecanismo (físico, lógico ou híbrido) que filtra o tráfego de rede de entrada e saída, permitindo ou bloqueando pacotes de dados conforme regras de segurança predefinidas.",
      regraMental: "Firewall: pode ser hardware, software ou os dois — sempre controlando tráfego por regras."
    },
    comentario: {
      resolucao: "CERTO. O firewall pode ser implementado em hardware, em software ou em uma combinação de ambos, exercendo a função de controlar o tráfego de dados de entrada e saída de uma rede, permitindo ou bloqueando conexões conforme regras de segurança predefinidas.",
      fundamento: "Doutrina de segurança da informação — mecanismos de proteção de rede (firewall).",
      macete: "Firewall: hardware, software, ou os dois — sempre regras de tráfego.",
      erroComum: "Restringir o firewall a apenas uma das formas de implementação.",
      comoBancaPensa: "Item de fixação sobre a definição completa e correta do firewall."
    }
  },
  {
    id: "TI-042", disciplina: "TI e Segurança Cibernética", assunto: "Firewall × antivírus × backup", subassunto: "Recuperação de falhas de armazenamento",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Algumas falhas catastróficas no armazenamento de dados podem ser corrigidas por meio da restauração do firewall do computador afetado, uma vez que esse mecanismo também é responsável por preservar cópias dos dados armazenados.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "restauração do firewall ... preservar cópias",
    cognitivo: {
      motivo: "Cobrar que a recuperação de falhas de armazenamento é função do backup, não do firewall.",
      mede: "Segurança da Informação — firewall x backup.",
      pegadinhaDesc: "A banca mistura dois conceitos sem relação direta (firewall e recuperação de dados).",
      ondeErra: "Acha que o firewall, por ser uma ferramenta de segurança, também armazena e restaura dados.",
      palavraCritica: "restauração do firewall ... preservar cópias",
      tecnica: "O firewall não armazena cópias de dados nem participa da recuperação de falhas de armazenamento — essa função é exercida pelos procedimentos de backup (cópias de segurança), que são conceitualmente distintos do firewall.",
      regraMental: "Recuperar dados após falha catastrófica = função do backup, nunca do firewall."
    },
    comentario: {
      resolucao: "ERRADO. O firewall é mecanismo de controle de tráfego de rede e não possui qualquer função de armazenamento ou preservação de cópias de dados — a recuperação de falhas catastróficas de armazenamento é realizada por meio da restauração de backups, e não do firewall.",
      fundamento: "Doutrina de segurança da informação — firewall x procedimentos de backup.",
      macete: "Quem recupera dados perdidos é o backup, nunca o firewall.",
      erroComum: "Misturar dois conceitos de segurança sem qualquer relação funcional entre si.",
      comoBancaPensa: "Combina dois conceitos sem relação direta para confundir o candidato menos atento."
    }
  },
  {
    id: "TI-043", disciplina: "TI e Segurança Cibernética", assunto: "Firewall × antivírus × backup", subassunto: "Categorias de antimalware",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "As ferramentas antimalware são programas projetados para identificar, neutralizar ou eliminar códigos maliciosos de um computador, existindo diferentes categorias especializadas, como antivírus, antispyware, antirootkit e antitrojan, cada uma voltada ao combate de um tipo específico de ameaça.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "categorias especializadas ... tipo específico de ameaça",
    cognitivo: {
      motivo: "Cobrar a existência de categorias especializadas de ferramentas antimalware.",
      mede: "Segurança da Informação — ferramentas antimalware.",
      pegadinhaDesc: "A banca pode negar a especialização por categoria ou inventar uma categoria inexistente.",
      ondeErra: "Estranha nomes menos comuns (antirootkit, antitrojan) e presume erro por desconhecimento do termo.",
      palavraCritica: "categorias especializadas",
      tecnica: "As soluções antimalware se dividem em categorias especializadas conforme o tipo de ameaça combatida: antivírus (vírus), antispyware (spyware), antirootkit (rootkits) e antitrojan (trojans) — soluções integradas também existem, combinando várias dessas funções.",
      regraMental: "Antimalware tem 'sobrenomes' — cada categoria mira uma ameaça específica."
    },
    comentario: {
      resolucao: "CERTO. As ferramentas antimalware realmente se organizam em categorias especializadas — antivírus, antispyware, antirootkit e antitrojan, entre outras —, cada uma voltada ao combate de um tipo específico de código malicioso, ainda que soluções integradas também sejam comuns no mercado.",
      fundamento: "Doutrina de segurança da informação — ferramentas antimalware.",
      macete: "Antimalware tem categorias por 'sobrenome': anti + tipo de ameaça.",
      erroComum: "Presumir erro só por desconhecer um termo técnico menos usual (ex.: antirootkit).",
      comoBancaPensa: "Item 'limpo' e tecnicamente correto — a banca não costuma inventar termos, mesmo os menos familiares."
    }
  },

  /* ===== TIPOS DE BACKUP: completo, diferencial, incremental ===== */
  {
    id: "TI-044", disciplina: "TI e Segurança Cibernética", assunto: "Procedimentos de backup", subassunto: "Backup diferencial",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.86,
    enunciado: "O backup diferencial copia todos os arquivos alterados desde o último backup completo, de modo que, para uma restauração total dos dados, bastam o último backup completo e o último backup diferencial realizado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "último completo ... último diferencial",
    cognitivo: {
      motivo: "Cobrar a definição correta do backup diferencial e sua simplicidade de restauração.",
      mede: "Segurança da Informação — procedimentos de backup (diferencial).",
      pegadinhaDesc: "A banca pode exigir todos os diferenciais em sequência (confundindo com o incremental).",
      ondeErra: "Troca o processo de restauração do diferencial pelo do incremental.",
      palavraCritica: "apenas ... o último backup diferencial",
      tecnica: "O backup diferencial sempre copia tudo o que mudou desde o último backup COMPLETO (por isso cresce a cada execução) — logo, para restaurar, basta o último completo somado ao último diferencial, sem necessidade de diferenciais anteriores.",
      regraMental: "Diferencial: restauração = último completo + último diferencial (simples)."
    },
    comentario: {
      resolucao: "CERTO. O backup diferencial copia todas as alterações ocorridas desde o último backup completo, de forma cumulativa. Por isso, sua restauração total é simples: exige apenas o último backup completo e o último backup diferencial, sem necessidade de diferenciais intermediários.",
      fundamento: "Doutrina de segurança da informação — tipos de backup (diferencial).",
      macete: "Diferencial: 2 peças para restaurar — completo + último diferencial.",
      erroComum: "Confundir a simplicidade de restauração do diferencial com a complexidade do incremental.",
      comoBancaPensa: "Cobra a definição exata e a vantagem prática do backup diferencial."
    }
  },
  {
    id: "TI-045", disciplina: "TI e Segurança Cibernética", assunto: "Procedimentos de backup", subassunto: "Diferencial × incremental (espaço e velocidade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.86,
    enunciado: "Caso um backup completo seja executado aos domingos e, ao longo da semana, sejam executados backups diferenciais diariamente até sábado, a criação desses backups diferenciais será mais rápida e consumirá menos espaço de armazenamento do que se, no lugar deles, fossem adotados backups incrementais ao longo da semana.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "mais rápida ... menos espaço",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, a comparação de espaço e velocidade entre diferencial e incremental.",
      mede: "Segurança da Informação — procedimentos de backup (diferencial x incremental).",
      pegadinhaDesc: "A banca inverte a comparação: quem é mais rápido e consome menos espaço é o incremental, não o diferencial.",
      ondeErra: "Troca as vantagens de espaço/velocidade entre diferencial e incremental.",
      palavraCritica: "mais rápida ... menos espaço",
      tecnica: "O backup diferencial ACUMULA tudo desde o último completo, crescendo a cada dia da semana — por isso é mais LENTO e consome MAIS espaço ao longo do tempo do que o incremental, que copia apenas as mudanças desde o último backup (de qualquer tipo), sendo mais rápido e enxuto.",
      regraMental: "Diferencial cresce e acumula (mais espaço/mais lento). Incremental é enxuto (menos espaço/mais rápido)."
    },
    comentario: {
      resolucao: "ERRADO. É o inverso: o backup diferencial acumula as alterações desde o último completo, crescendo a cada execução ao longo da semana, sendo por isso mais lento e consumindo mais espaço do que o incremental — que copia apenas as mudanças desde o último backup realizado, sendo mais rápido e ocupando menos espaço.",
      fundamento: "Doutrina de segurança da informação — tipos de backup (comparação diferencial x incremental).",
      macete: "Diferencial cresce (mais espaço/lento). Incremental é enxuto (menos espaço/rápido).",
      erroComum: "Inverter a comparação de espaço e velocidade entre os dois tipos de backup.",
      comoBancaPensa: "Troca as características de dois tipos de backup na mesma frase — padrão clássico de erro."
    }
  },
  {
    id: "TI-046", disciplina: "TI e Segurança Cibernética", assunto: "Procedimentos de backup", subassunto: "Backup incremental",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.84,
    enunciado: "O backup incremental copia apenas os arquivos alterados desde o último backup realizado, seja ele completo ou incremental, sendo o tipo que consome menos espaço de armazenamento, ainda que sua restauração completa exija o backup completo somado a todos os backups incrementais subsequentes, em sequência.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "menos espaço ... todos os incrementais em sequência",
    cognitivo: {
      motivo: "Cobrar a definição correta do backup incremental e a complexidade de sua restauração.",
      mede: "Segurança da Informação — procedimentos de backup (incremental).",
      pegadinhaDesc: "A banca pode simplificar indevidamente a restauração do incremental (como se bastasse o último).",
      ondeErra: "Presume que a restauração do incremental é tão simples quanto a do diferencial.",
      palavraCritica: "todos os backups incrementais subsequentes, em sequência",
      tecnica: "O incremental copia só o que mudou desde o ÚLTIMO backup (de qualquer tipo), por isso é o mais econômico em espaço e mais rápido de executar. Em compensação, sua restauração é mais trabalhosa: exige o último completo MAIS todos os incrementais subsequentes, em ordem.",
      regraMental: "Incremental: economiza espaço/tempo no backup, mas complica a restauração (precisa de toda a cadeia)."
    },
    comentario: {
      resolucao: "CERTO. O backup incremental copia apenas as alterações desde o último backup (completo ou incremental), sendo o mais econômico em espaço de armazenamento — mas, justamente por isso, sua restauração completa exige o backup completo mais TODOS os incrementais subsequentes, aplicados em sequência.",
      fundamento: "Doutrina de segurança da informação — tipos de backup (incremental).",
      macete: "Incremental: economiza no backup, mas complica na restauração (precisa da cadeia toda).",
      erroComum: "Achar que a restauração do incremental é tão simples quanto a do diferencial.",
      comoBancaPensa: "Cobra o trade-off completo do incremental: vantagem no backup, desvantagem na restauração."
    }
  },
  {
    id: "TI-047", disciplina: "TI e Segurança Cibernética", assunto: "Procedimentos de backup", subassunto: "Backup incremental",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.82,
    enunciado: "Dentre os tipos usuais de becape, o que mais consome espaço de armazenamento no computador é o backup incremental, por acumular sucessivamente todas as alterações realizadas desde a primeira cópia completa.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "incremental ... mais consome espaço",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, o ranking de consumo de espaço entre os tipos de backup.",
      mede: "Segurança da Informação — procedimentos de backup (consumo de espaço).",
      pegadinhaDesc: "A banca troca o incremental (mais enxuto) pelo completo (que mais consome espaço).",
      ondeErra: "Não memoriza o ranking de consumo de espaço entre os três tipos de backup.",
      palavraCritica: "incremental ... mais consome espaço",
      tecnica: "O ranking de consumo de espaço é: completo (copia tudo, mais espaço) > diferencial (acumula desde o último completo) > incremental (só as mudanças mais recentes, menos espaço). O incremental é, portanto, o mais ECONÔMICO, não o que mais consome.",
      regraMental: "Espaço consumido: completo > diferencial > incremental."
    },
    comentario: {
      resolucao: "ERRADO. O tipo de backup que mais consome espaço de armazenamento é o completo, que copia todos os dados a cada execução. O incremental é, na verdade, o mais econômico em espaço, pois copia somente as alterações desde o último backup realizado.",
      fundamento: "Doutrina de segurança da informação — tipos de backup (consumo de espaço).",
      macete: "Ranking de espaço: completo > diferencial > incremental.",
      erroComum: "Trocar o incremental (mais econômico) pelo completo (que mais consome espaço).",
      comoBancaPensa: "Troca o tipo de backup no ranking de consumo de espaço, invertendo a ordem correta."
    }
  },
  {
    id: "TI-048", disciplina: "TI e Segurança Cibernética", assunto: "Procedimentos de backup", subassunto: "Backup incremental",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.82,
    enunciado: "O backup incremental, uma vez configurado e executado, realiza uma cópia exata e completa de todos os arquivos e pastas selecionados a cada execução, sendo especialmente indicado para situações em que se necessite de recuperação rápida e integral de dados após falha de hardware.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "cópia exata e completa ... recuperação rápida e integral",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o incremental não copia tudo a cada execução (isso é do backup completo).",
      mede: "Segurança da Informação — procedimentos de backup (incremental x completo).",
      pegadinhaDesc: "A banca atribui ao incremental a característica de 'cópia completa e recuperação rápida', que é do backup completo.",
      ondeErra: "Confunde a economia de espaço do incremental com uma suposta cópia integral a cada execução.",
      palavraCritica: "cópia exata e completa ... recuperação rápida e integral",
      tecnica: "O incremental copia SOMENTE as alterações desde o último backup, e não uma cópia completa a cada execução — quem oferece cópia integral e recuperação mais simples e rápida é o backup completo (full).",
      regraMental: "Cópia completa a cada execução = backup completo. Só as mudanças = incremental."
    },
    comentario: {
      resolucao: "ERRADO. O backup incremental copia apenas os arquivos alterados desde o último backup, e não uma cópia exata e completa de tudo a cada execução — essa característica, associada à recuperação mais rápida e simples, é típica do backup completo (full), não do incremental.",
      fundamento: "Doutrina de segurança da informação — tipos de backup (incremental x completo).",
      macete: "Cópia completa a cada vez = backup completo, nunca incremental.",
      erroComum: "Atribuir ao incremental as vantagens de simplicidade que são do backup completo.",
      comoBancaPensa: "Dá ao incremental a definição e as vantagens do backup completo."
    }
  },
  {
    id: "TI-049", disciplina: "TI e Segurança Cibernética", assunto: "Procedimentos de backup", subassunto: "Restauração do backup incremental",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Assim como ocorre no backup diferencial, a restauração completa de dados a partir de backups incrementais exige apenas dois conjuntos de arquivos: o último backup completo e o último backup incremental realizado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "assim como ... apenas dois conjuntos",
    cognitivo: {
      motivo: "Cobrar que a restauração do incremental é mais complexa que a do diferencial, exigindo toda a cadeia.",
      mede: "Segurança da Informação — procedimentos de backup (restauração).",
      pegadinhaDesc: "A banca equipara indevidamente a simplicidade de restauração do diferencial à do incremental.",
      ondeErra: "Não percebe que o incremental exige TODOS os incrementais em sequência, e não apenas o último.",
      palavraCritica: "assim como ... apenas dois conjuntos",
      tecnica: "Diferente do diferencial (que exige apenas o último completo + último diferencial), a restauração do incremental exige o último completo MAIS TODOS os incrementais subsequentes, aplicados em ordem cronológica — um processo mais longo e mais sujeito a falhas.",
      regraMental: "Diferencial: 2 peças. Incremental: completo + toda a cadeia de incrementais."
    },
    comentario: {
      resolucao: "ERRADO. Ao contrário do diferencial, a restauração completa a partir de backups incrementais exige o último backup completo E todos os backups incrementais realizados desde então, aplicados em sequência — não apenas dois conjuntos de arquivos.",
      fundamento: "Doutrina de segurança da informação — tipos de backup (restauração incremental x diferencial).",
      macete: "Incremental: restauração precisa de TODA a cadeia, não só do último.",
      erroComum: "Equiparar a simplicidade de restauração do diferencial à do incremental.",
      comoBancaPensa: "Estende indevidamente a vantagem do diferencial (restauração simples) ao incremental."
    }
  },

  /* ===== COMPUTAÇÃO EM NUVEM E ONEDRIVE ===== */
  {
    id: "TI-050", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "Nuvem × ransomware",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.86,
    enunciado: "Embora os serviços de armazenamento em nuvem reduzam o risco de perda de dados e aumentem a resiliência da informação, por meio de recursos como versionamento e backup automático, eles não são totalmente imunes a ameaças como o ransomware.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "reduzem o risco ... não são totalmente imunes",
    cognitivo: {
      motivo: "Cobrar que a nuvem reduz riscos, mas não elimina totalmente a ameaça de ransomware.",
      mede: "Segurança da Informação — computação em nuvem.",
      pegadinhaDesc: "A banca pode afirmar que a nuvem é totalmente imune a pragas virtuais.",
      ondeErra: "Presume que o armazenamento em nuvem elimina por completo qualquer risco de segurança.",
      palavraCritica: "não são totalmente imunes",
      tecnica: "A nuvem aumenta a resiliência dos dados (versionamento, cópias automáticas, redundância), mas não é totalmente imune — arquivos sincronizados podem ser afetados por ransomware que criptografa a pasta local espelhada, por exemplo.",
      regraMental: "Nuvem reduz risco, não elimina — desconfie de 'totalmente imune'."
    },
    comentario: {
      resolucao: "CERTO. Os serviços de nuvem realmente reduzem o risco de perda de dados e aumentam a resiliência, por meio de versionamento e cópias automáticas, mas não conferem imunidade total contra ameaças como o ransomware, que pode afetar também arquivos sincronizados.",
      fundamento: "Doutrina de segurança da informação — computação em nuvem e resiliência de dados.",
      macete: "Nuvem = mais resiliência, não imunidade total.",
      erroComum: "Achar que armazenar na nuvem elimina totalmente o risco de ataques.",
      comoBancaPensa: "Item correto e equilibrado, sem palavras absolutas — típico de item 'limpo'."
    }
  },
  {
    id: "TI-051", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "Nuvem × ransomware",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.84,
    enunciado: "Por serem totalmente imunes a pragas virtuais como o ransomware, os serviços de armazenamento em nuvem eliminam por completo o risco de perda de arquivos decorrente desse tipo de ameaça.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "totalmente imunes ... eliminam por completo",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a nuvem não é totalmente imune a ransomware.",
      mede: "Segurança da Informação — computação em nuvem.",
      pegadinhaDesc: "A banca usa palavras absolutas ('totalmente imunes', 'por completo') para induzir ao erro.",
      ondeErra: "Aceita a afirmação de imunidade total sem questionar a plausibilidade técnica.",
      palavraCritica: "totalmente imunes",
      tecnica: "Não existe imunidade total: arquivos sincronizados com pastas locais infectadas por ransomware podem ter suas versões na nuvem também comprometidas, ainda que o versionamento permita, em muitos casos, restaurar versões anteriores.",
      regraMental: "Desconfie de 'totalmente imune' — a nuvem reduz risco, mas não zera."
    },
    comentario: {
      resolucao: "ERRADO. Os serviços de nuvem não são totalmente imunes a ransomware — eles reduzem o risco e aumentam a resiliência (por exemplo, via versionamento), mas não eliminam por completo a possibilidade de impacto em arquivos sincronizados.",
      fundamento: "Doutrina de segurança da informação — computação em nuvem e resiliência de dados.",
      macete: "'Totalmente imune' é quase sempre pegadinha em segurança da informação.",
      erroComum: "Aceitar afirmações de imunidade absoluta sem questionar sua plausibilidade.",
      comoBancaPensa: "Usa uma palavra absoluta clássica para sinalizar (para quem sabe identificar) que o item está errado."
    }
  },
  {
    id: "TI-052", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "OneDrive (Arquivos sob Demanda)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "O OneDrive, serviço de armazenamento em nuvem da Microsoft, permite a sincronização seletiva de pastas e arquivos do dispositivo local, sendo que, após a sincronização, a cópia local do arquivo é sempre apagada, permanecendo apenas a versão armazenada na nuvem.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "sempre apagada",
    cognitivo: {
      motivo: "Cobrar que o recurso de Arquivos sob Demanda do OneDrive não apaga sempre a cópia local.",
      mede: "Segurança da Informação — computação em nuvem (OneDrive).",
      pegadinhaDesc: "A banca usa a palavra absoluta 'sempre' para descrever um comportamento que é apenas uma das três possibilidades.",
      ondeErra: "Desconhece os três estados possíveis de um arquivo no recurso de Arquivos sob Demanda.",
      palavraCritica: "sempre apagada",
      tecnica: "O recurso Arquivos sob Demanda do OneDrive admite três estados para cada arquivo: somente na nuvem, disponível localmente e sempre disponível — o espaço local só é liberado quando necessário, e não por padrão/sempre.",
      regraMental: "OneDrive: 3 estados possíveis. Não existe 'sempre apaga a cópia local'."
    },
    comentario: {
      resolucao: "ERRADO. O recurso de Arquivos sob Demanda do OneDrive mantém três estados possíveis para cada arquivo (somente na nuvem, disponível localmente, sempre disponível), liberando o espaço local apenas quando necessário — a cópia local não é sempre apagada após a sincronização.",
      fundamento: "Doutrina de segurança da informação — computação em nuvem (OneDrive, Arquivos sob Demanda).",
      macete: "Palavra absoluta 'sempre' + comportamento configurável = pegadinha.",
      erroComum: "Presumir que a sincronização seletiva sempre remove a cópia local.",
      comoBancaPensa: "Usa uma palavra absoluta para transformar um recurso configurável em uma regra fixa inexistente."
    }
  },
  {
    id: "TI-053", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "OneDrive (Arquivos sob Demanda)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "O recurso de Arquivos sob Demanda do OneDrive admite três estados possíveis para cada arquivo — somente na nuvem, disponível localmente e sempre disponível —, liberando espaço de armazenamento local apenas quando necessário.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "três estados possíveis ... apenas quando necessário",
    cognitivo: {
      motivo: "Cobrar corretamente os três estados do recurso Arquivos sob Demanda.",
      mede: "Segurança da Informação — computação em nuvem (OneDrive).",
      pegadinhaDesc: "A banca pode negar a existência de múltiplos estados ou inventar um comportamento fixo.",
      ondeErra: "Desconhece o funcionamento real do recurso e presume um comportamento único.",
      palavraCritica: "três estados possíveis",
      tecnica: "O OneDrive permite que o usuário escolha, por arquivo ou pasta, entre mantê-lo somente na nuvem (sem ocupar espaço local), disponível localmente (baixado, mas liberável) ou sempre disponível (mantido localmente de forma permanente).",
      regraMental: "OneDrive: só na nuvem / disponível localmente / sempre disponível — três estados configuráveis."
    },
    comentario: {
      resolucao: "CERTO. O recurso de Arquivos sob Demanda do OneDrive realmente admite três estados possíveis para cada arquivo — somente na nuvem, disponível localmente e sempre disponível —, permitindo liberar espaço de armazenamento local apenas quando necessário, sem apagar arquivos por padrão.",
      fundamento: "Doutrina de segurança da informação — computação em nuvem (OneDrive, Arquivos sob Demanda).",
      macete: "3 estados do OneDrive: nuvem / local liberável / sempre local.",
      erroComum: "Achar que existe apenas um comportamento fixo (arquivo sempre local ou sempre na nuvem).",
      comoBancaPensa: "Item de fixação técnica sobre um recurso específico e configurável."
    }
  },

  /* ===== ATAQUES DE NEGAÇÃO DE SERVIÇO E TRÍADE CID ===== */
  {
    id: "TI-054", disciplina: "TI e Segurança Cibernética", assunto: "Ataques de negação de serviço (DDoS)", subassunto: "DDoS × ransomware (identificação do ataque)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.88,
    enunciado: "Um incidente de segurança caracterizado pelo recebimento de um volume massivo e simultâneo de conexões, oriundas de diferentes origens distribuídas pela rede, com o objetivo de exceder a capacidade de resposta de um serviço e comprometer sua disponibilidade, configura um ataque de negação de serviço distribuído (DDoS).",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "volume massivo ... origens distribuídas ... disponibilidade",
    cognitivo: {
      motivo: "Cobrar a identificação correta de um ataque DDoS a partir de sua descrição técnica.",
      mede: "Segurança da Informação — ataques de negação de serviço (DDoS).",
      pegadinhaDesc: "A banca pode nomear corretamente a descrição ou trocar por outro tipo de ataque (ex.: ransomware).",
      ondeErra: "Não associa a descrição técnica (volume + múltiplas origens + sobrecarga) ao nome correto do ataque.",
      palavraCritica: "DDoS",
      tecnica: "O ataque de negação de serviço distribuído (DDoS) caracteriza-se pelo envio maciço e simultâneo de requisições, a partir de múltiplas origens (muitas vezes uma botnet), com o objetivo de esgotar os recursos do alvo e comprometer o princípio da disponibilidade.",
      regraMental: "Volume massivo + múltiplas origens + sobrecarga = DDoS, atacando a disponibilidade."
    },
    comentario: {
      resolucao: "CERTO. A descrição corresponde exatamente a um ataque de negação de serviço distribuído (DDoS): volume massivo de conexões simultâneas, provenientes de múltiplas origens distribuídas, com o objetivo de exceder a capacidade do serviço-alvo e comprometer sua disponibilidade.",
      fundamento: "Doutrina de segurança da informação — ataques de negação de serviço (DDoS).",
      macete: "DDoS: muitas origens + volume + objetivo de derrubar o serviço (disponibilidade).",
      erroComum: "Confundir a descrição técnica correta com outro tipo de ataque.",
      comoBancaPensa: "Item 'limpo', com a descrição batendo exatamente com o nome técnico do ataque."
    }
  },
  {
    id: "TI-055", disciplina: "TI e Segurança Cibernética", assunto: "Ataques de negação de serviço (DDoS)", subassunto: "DDoS × ransomware (identificação do ataque)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.88,
    enunciado: "Um incidente de segurança em que um serviço público foi derrubado após receber um volume massivo de conexões simultâneas provenientes de diversos países, com o objetivo de sobrecarregar a infraestrutura e interromper o funcionamento do sistema, pode ser corretamente classificado como um ataque de ransomware.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "volume massivo ... classificado como ... ransomware",
    cognitivo: {
      motivo: "Cobrar que a descrição de um ataque volumétrico/DDoS não deve ser nomeada como ransomware.",
      mede: "Segurança da Informação — ataques de negação de serviço x ransomware.",
      pegadinhaDesc: "A banca descreve um DDoS com precisão técnica, mas nomeia o ataque como 'ransomware'.",
      ondeErra: "Concorda com o nome do ataque só porque a descrição técnica anterior parece coerente, sem verificar se o nome bate com a descrição.",
      palavraCritica: "classificado como ... ransomware",
      tecnica: "A descrição (volume massivo, múltiplas origens, sobrecarga, interrupção do serviço) corresponde a um ataque de negação de serviço distribuído (DDoS), que compromete a disponibilidade — o ransomware, por sua vez, consiste em criptografar dados e exigir resgate, sem qualquer relação com volume de conexões.",
      regraMental: "Descrição de sobrecarga de tráfego = DDoS, nunca ransomware."
    },
    comentario: {
      resolucao: "ERRADO. A situação descrita — volume massivo de conexões simultâneas de múltiplas origens, com o objetivo de sobrecarregar e derrubar um serviço — caracteriza um ataque de negação de serviço distribuído (DDoS), e não um ataque de ransomware, que consiste em criptografar dados e exigir resgate, sem relação com volume de tráfego.",
      fundamento: "Doutrina de segurança da informação — ataques de negação de serviço (DDoS) x ransomware.",
      macete: "Sobrecarga de tráfego derrubando serviço = DDoS. Criptografia + resgate = ransomware.",
      erroComum: "Aceitar o nome do ataque proposto pela banca mesmo quando a descrição técnica não corresponde a ele.",
      comoBancaPensa: "Descreve corretamente um ataque, mas atribui a ele o nome de outro tipo de ameaça completamente distinto."
    }
  },
  {
    id: "TI-056", disciplina: "TI e Segurança Cibernética", assunto: "Ataques de negação de serviço (DDoS)", subassunto: "DoS × DDoS (origem do ataque)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "O ataque de negação de serviço (DoS), por definição, tem origem em múltiplos computadores distribuídos e coordenados entre si, diferentemente do ataque de negação de serviço distribuído (DDoS), que parte de uma única máquina atacante.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "DoS ... múltiplos computadores ... DDoS ... única máquina",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, a distinção entre DoS (origem única) e DDoS (origem distribuída).",
      mede: "Segurança da Informação — DoS x DDoS (origem do ataque).",
      pegadinhaDesc: "A banca inverte as definições de DoS e DDoS quanto à origem do ataque.",
      ondeErra: "Troca a definição de DoS (origem única) pela de DDoS (origem distribuída), e vice-versa.",
      palavraCritica: "DoS ... múltiplos computadores",
      tecnica: "O DoS (Denial of Service) parte de UMA ÚNICA origem/máquina atacante. Já o DDoS (Distributed Denial of Service) é justamente a versão distribuída, partindo de MÚLTIPLAS origens (frequentemente uma botnet) simultaneamente — o prefixo 'D' de DDoS indica exatamente essa distribuição.",
      regraMental: "DoS = uma origem. DDoS = múltiplas origens distribuídas (o 'D' extra é disso)."
    },
    comentario: {
      resolucao: "ERRADO. As definições foram invertidas: o DoS (Denial of Service) tem origem em uma única máquina atacante, enquanto o DDoS (Distributed Denial of Service) é a versão distribuída do ataque, partindo de múltiplos computadores/origens coordenados simultaneamente.",
      fundamento: "Doutrina de segurança da informação — ataques de negação de serviço (DoS x DDoS).",
      macete: "O 'D' extra de DDoS = distribuído = múltiplas origens.",
      erroComum: "Inverter as definições de DoS e DDoS quanto à quantidade de origens do ataque.",
      comoBancaPensa: "Testa a distinção mais básica e recorrente entre as duas siglas parecidas."
    }
  },
  {
    id: "TI-057", disciplina: "TI e Segurança Cibernética", assunto: "Tríade CID", subassunto: "Autenticidade e não repúdio",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Além da confidencialidade, da integridade e da disponibilidade — que compõem a tríade CID —, a autenticidade e o não repúdio completam o conjunto de premissas clássicas da segurança da informação, sendo ambos assegurados, por exemplo, pelo uso da assinatura digital.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "autenticidade e o não repúdio ... assinatura digital",
    cognitivo: {
      motivo: "Cobrar a extensão da tríade CID com autenticidade e não repúdio, e o papel da assinatura digital.",
      mede: "Segurança da Informação — fundamentos (tríade CID e princípios complementares).",
      pegadinhaDesc: "A banca pode negar a existência desses princípios complementares ou atribuí-los a outra ferramenta.",
      ondeErra: "Restringe a segurança da informação apenas aos três pilares da tríade CID, ignorando autenticidade e não repúdio.",
      palavraCritica: "autenticidade e o não repúdio",
      tecnica: "Além da tríade CID (confidencialidade, integridade, disponibilidade), a doutrina reconhece a autenticidade (garantia da identidade de quem envia/assina a informação) e o não repúdio (impossibilidade de negar a autoria de um ato) como princípios complementares, ambos viabilizados tecnicamente pela assinatura digital.",
      regraMental: "5 pilares: CID + autenticidade + não repúdio. Assinatura digital garante os dois últimos."
    },
    comentario: {
      resolucao: "CERTO. Além da tríade CID, a autenticidade (garantia da identidade do emissor) e o não repúdio (impossibilidade de negar a autoria de uma ação) completam o conjunto clássico de premissas da segurança da informação, sendo ambos assegurados, na prática, pelo uso da assinatura digital.",
      fundamento: "Doutrina de segurança da informação — princípios complementares à tríade CID (autenticidade e não repúdio).",
      macete: "CID + autenticidade + não repúdio = 5 pilares. Assinatura digital garante os dois últimos.",
      erroComum: "Restringir a segurança da informação apenas aos três pilares da tríade CID.",
      comoBancaPensa: "Amplia o conhecimento exigido para além da tríade básica, cobrando os princípios complementares."
    }
  },
  {
    id: "TI-058", disciplina: "TI e Segurança Cibernética", assunto: "Tríade CID", subassunto: "Integridade e disponibilidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "O princípio da integridade da informação garante que os dados permaneçam completos e não sejam alterados de forma indevida, ao passo que o princípio da disponibilidade assegura que os sistemas e as informações estejam acessíveis sempre que necessários aos usuários devidamente autorizados.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não sejam alterados indevidamente ... acessíveis quando necessários",
    cognitivo: {
      motivo: "Cobrar as definições corretas e completas de integridade e disponibilidade.",
      mede: "Segurança da Informação — fundamentos (tríade CID).",
      pegadinhaDesc: "A banca pode inverter as duas definições ou generalizar 'disponibilidade' para acesso irrestrito.",
      ondeErra: "Interpreta 'disponibilidade' como acesso permanente e irrestrito a qualquer pessoa, e não apenas aos autorizados quando necessário.",
      palavraCritica: "acessíveis sempre que necessários ... autorizados",
      tecnica: "Integridade: os dados devem permanecer exatos e não sofrer alteração indevida (garantida por hash e assinatura digital). Disponibilidade: o acesso deve ser garantido aos USUÁRIOS AUTORIZADOS sempre que necessário — não significa acesso ilimitado a qualquer pessoa, a qualquer momento.",
      regraMental: "Integridade = dado correto. Disponibilidade = acesso a quem tem direito, quando precisar."
    },
    comentario: {
      resolucao: "CERTO. A integridade garante que os dados permaneçam completos e não sejam alterados indevidamente, enquanto a disponibilidade assegura que sistemas e informações estejam acessíveis sempre que necessário, mas apenas aos usuários devidamente autorizados — não a qualquer pessoa, de forma irrestrita.",
      fundamento: "Doutrina de segurança da informação — fundamentos (tríade CID: integridade e disponibilidade).",
      macete: "Disponibilidade é para quem tem autorização — não é acesso público irrestrito.",
      erroComum: "Achar que disponibilidade significa acesso livre e permanente a qualquer usuário.",
      comoBancaPensa: "Item de fixação sobre as definições completas e corretas de dois pilares da tríade CID."
    }
  },
  {
    id: "TI-059", disciplina: "TI e Segurança Cibernética", assunto: "Tríade CID", subassunto: "Confidencialidade, integridade e disponibilidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.84,
    enunciado: "São considerados atributos básicos e fundamentais da segurança da informação a confidencialidade, a integridade e a disponibilidade, os quais compõem a chamada tríade CID.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "confidencialidade, integridade e disponibilidade ... tríade CID",
    cognitivo: {
      motivo: "Cobrar o reconhecimento direto da tríade CID como fundamento básico da segurança da informação.",
      mede: "Segurança da Informação — fundamentos (tríade CID).",
      pegadinhaDesc: "A banca pode trocar um dos três atributos por outro conceito (ex.: autenticidade no lugar da disponibilidade).",
      ondeErra: "Confunde os três pilares básicos com os princípios complementares (autenticidade e não repúdio).",
      palavraCritica: "confidencialidade, integridade e disponibilidade",
      tecnica: "A tríade CID (ou CIA, em inglês) — confidencialidade, integridade e disponibilidade — constitui o conjunto de atributos mais básicos e fundamentais da segurança da informação, servindo de base para todos os controles e políticas de proteção de dados.",
      regraMental: "CID: Confidencialidade, Integridade, Disponibilidade — os 3 pilares básicos e mais cobrados."
    },
    comentario: {
      resolucao: "CERTO. A confidencialidade, a integridade e a disponibilidade constituem, de fato, os atributos básicos e fundamentais da segurança da informação, formando a conhecida tríade CID (ou CIA), sobre a qual se apoiam os demais princípios e controles de proteção de dados.",
      fundamento: "Doutrina de segurança da informação — fundamentos (tríade CID).",
      macete: "CID: a base de tudo em segurança da informação — decore os três nomes.",
      erroComum: "Confundir os três pilares básicos com os princípios complementares (autenticidade, não repúdio).",
      comoBancaPensa: "Item de fixação direto e de alta recorrência, sem qualquer pegadinha de cruzamento de conceitos."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE40);

/* Frequência de temas — TI e Segurança Cibernética (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "TI e Segurança Cibernética");
  if (!d) { d = { disciplina: "TI e Segurança Cibernética", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Malwares: worm, vírus, trojan, ransomware, spyware", freq: 90, tendencia: "alta", prob: 0.9 },
    { tema: "Tipos de backup: completo, diferencial e incremental", freq: 88, tendencia: "alta", prob: 0.88 },
    { tema: "Firewall × antivírus × backup (separação de funções)", freq: 84, tendencia: "alta", prob: 0.84 },
    { tema: "Computação em nuvem, OneDrive e resiliência de dados", freq: 82, tendencia: "alta", prob: 0.82 },
    { tema: "DoS/DDoS e tríade CID (fundamentos)", freq: 86, tendencia: "alta", prob: 0.86 },
  );
})();
