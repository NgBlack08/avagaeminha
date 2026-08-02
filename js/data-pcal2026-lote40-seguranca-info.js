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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.86,
    enunciado: "O worm é um tipo de praga virtual capaz de se replicar e se propagar automaticamente de um computador para outro através da rede, explorando vulnerabilidades dos sistemas, sem depender de um arquivo hospedeiro ou da ação direta do usuário.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "autopropagação automática ... sem arquivo hospedeiro",
    cognitivo: {
      motivo: "Cobrar a característica central e definidora do worm: autopropagação automática pela rede.",
      palavraCritica: "sem depender de um arquivo hospedeiro",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.84,
    enunciado: "O worm é um programa incapaz de se propagar automaticamente pelas redes de computadores, sendo necessário que sua disseminação ocorra por meio de dispositivos de mídia removível, como pendrives.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "incapaz ... mídia removível",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, a autopropagação automática do worm.",
      palavraCritica: "incapaz",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Diferentemente do worm, que se autopropaga pela rede sem necessidade de um programa hospedeiro, o vírus de computador depende da existência de um arquivo ou programa hospedeiro para se replicar e se disseminar.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "vírus ... depende de hospedeiro",
    cognitivo: {
      motivo: "Cobrar a distinção clássica entre vírus (dependente de hospedeiro) e worm (autônomo).",
      palavraCritica: "depende de um arquivo ou programa hospedeiro",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.82,
    enunciado: "O cavalo de Troia (trojan), entre outras ações maliciosas que pode desencadear, propaga-se automaticamente pela rede, enviando cópias de seu próprio código por e-mail para outros dispositivos, de modo que impressoras, roteadores e aparelhos conectados por Bluetooth passam a retransmitir o código malicioso.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "propaga-se automaticamente pela rede",
    cognitivo: {
      motivo: "Cobrar que o trojan NÃO se autopropaga pela rede (comportamento típico do worm).",
      palavraCritica: "propaga-se automaticamente pela rede",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.84,
    enunciado: "O trojan (cavalo de Troia) caracteriza-se por se disfarçar de um programa legítimo e útil, induzindo o próprio usuário a instalá-lo voluntariamente, não possuindo capacidade de se autopropagar pela rede como o worm.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "disfarça ... o próprio usuário a instalá-lo",
    cognitivo: {
      motivo: "Cobrar a característica correta do trojan: disfarce + instalação pelo próprio usuário.",
      palavraCritica: "não possuindo capacidade de se autopropagar",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.88,
    enunciado: "O ransomware é uma praga virtual que tem como principal característica capturar dados pessoais do usuário para utilizá-los no envio de mensagens de spam, sem solicitar qualquer permissão.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "capturar dados pessoais ... enviar spam",
    cognitivo: {
      motivo: "Cobrar a definição correta do ransomware (criptografia + resgate), distinta da do spyware.",
      palavraCritica: "capturar dados pessoais ... enviar spam",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.86,
    enunciado: "Por meio do recurso de proteção firewall, é possível ao usuário solicitar ao sistema uma verificação de seus arquivos em busca de possíveis códigos maliciosos armazenados no computador.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "verificação de seus arquivos",
    cognitivo: {
      motivo: "Cobrar que o firewall controla tráfego de rede, e não escaneia arquivos (função do antivírus).",
      palavraCritica: "verificação de seus arquivos",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "O firewall é um mecanismo de segurança, implementado em hardware, em software ou em ambos, que controla o tráfego de dados de entrada e saída de uma rede com base em um conjunto de regras predefinidas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "controla o tráfego ... regras predefinidas",
    cognitivo: {
      motivo: "Cobrar a definição correta e completa do firewall.",
      palavraCritica: "hardware, em software ou em ambos",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Algumas falhas catastróficas no armazenamento de dados podem ser corrigidas por meio da restauração do firewall do computador afetado, uma vez que esse mecanismo também é responsável por preservar cópias dos dados armazenados.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "restauração do firewall ... preservar cópias",
    cognitivo: {
      motivo: "Cobrar que a recuperação de falhas de armazenamento é função do backup, não do firewall.",
      palavraCritica: "restauração do firewall ... preservar cópias",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "As ferramentas antimalware são programas projetados para identificar, neutralizar ou eliminar códigos maliciosos de um computador, existindo diferentes categorias especializadas, como antivírus, antispyware, antirootkit e antitrojan, cada uma voltada ao combate de um tipo específico de ameaça.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "categorias especializadas ... tipo específico de ameaça",
    cognitivo: {
      motivo: "Cobrar a existência de categorias especializadas de ferramentas antimalware.",
      palavraCritica: "categorias especializadas",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.86,
    enunciado: "O backup diferencial copia todos os arquivos alterados desde o último backup completo, de modo que, para uma restauração total dos dados, bastam o último backup completo e o último backup diferencial realizado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "último completo ... último diferencial",
    cognitivo: {
      motivo: "Cobrar a definição correta do backup diferencial e sua simplicidade de restauração.",
      palavraCritica: "apenas ... o último backup diferencial",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.86,
    enunciado: "Caso um backup completo seja executado aos domingos e, ao longo da semana, sejam executados backups diferenciais diariamente até sábado, a criação desses backups diferenciais será mais rápida e consumirá menos espaço de armazenamento do que se, no lugar deles, fossem adotados backups incrementais ao longo da semana.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "mais rápida ... menos espaço",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, a comparação de espaço e velocidade entre diferencial e incremental.",
      palavraCritica: "mais rápida ... menos espaço",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.84,
    enunciado: "O backup incremental copia apenas os arquivos alterados desde o último backup realizado, seja ele completo ou incremental, sendo o tipo que consome menos espaço de armazenamento, ainda que sua restauração completa exija o backup completo somado a todos os backups incrementais subsequentes, em sequência.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "menos espaço ... todos os incrementais em sequência",
    cognitivo: {
      motivo: "Cobrar a definição correta do backup incremental e a complexidade de sua restauração.",
      palavraCritica: "todos os backups incrementais subsequentes, em sequência",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.82,
    enunciado: "Dentre os tipos usuais de becape, o que mais consome espaço de armazenamento no computador é o backup incremental, por acumular sucessivamente todas as alterações realizadas desde a primeira cópia completa.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "incremental ... mais consome espaço",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, o ranking de consumo de espaço entre os tipos de backup.",
      palavraCritica: "incremental ... mais consome espaço",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.82,
    enunciado: "O backup incremental, uma vez configurado e executado, realiza uma cópia exata e completa de todos os arquivos e pastas selecionados a cada execução, sendo especialmente indicado para situações em que se necessite de recuperação rápida e integral de dados após falha de hardware.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "cópia exata e completa ... recuperação rápida e integral",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o incremental não copia tudo a cada execução (isso é do backup completo).",
      palavraCritica: "cópia exata e completa ... recuperação rápida e integral",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Assim como ocorre no backup diferencial, a restauração completa de dados a partir de backups incrementais exige apenas dois conjuntos de arquivos: o último backup completo e o último backup incremental realizado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "assim como ... apenas dois conjuntos",
    cognitivo: {
      motivo: "Cobrar que a restauração do incremental é mais complexa que a do diferencial, exigindo toda a cadeia.",
      palavraCritica: "assim como ... apenas dois conjuntos",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.86,
    enunciado: "Embora os serviços de armazenamento em nuvem reduzam o risco de perda de dados e aumentem a resiliência da informação, por meio de recursos como versionamento e backup automático, eles não são totalmente imunes a ameaças como o ransomware.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "reduzem o risco ... não são totalmente imunes",
    cognitivo: {
      motivo: "Cobrar que a nuvem reduz riscos, mas não elimina totalmente a ameaça de ransomware.",
      palavraCritica: "não são totalmente imunes",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.84,
    enunciado: "Por serem totalmente imunes a pragas virtuais como o ransomware, os serviços de armazenamento em nuvem eliminam por completo o risco de perda de arquivos decorrente desse tipo de ameaça.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "totalmente imunes ... eliminam por completo",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a nuvem não é totalmente imune a ransomware.",
      palavraCritica: "totalmente imunes",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "O OneDrive, serviço de armazenamento em nuvem da Microsoft, permite a sincronização seletiva de pastas e arquivos do dispositivo local, sendo que, após a sincronização, a cópia local do arquivo é sempre apagada, permanecendo apenas a versão armazenada na nuvem.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "sempre apagada",
    cognitivo: {
      motivo: "Cobrar que o recurso de Arquivos sob Demanda do OneDrive não apaga sempre a cópia local.",
      palavraCritica: "sempre apagada",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "O recurso de Arquivos sob Demanda do OneDrive admite três estados possíveis para cada arquivo — somente na nuvem, disponível localmente e sempre disponível —, liberando espaço de armazenamento local apenas quando necessário.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "três estados possíveis ... apenas quando necessário",
    cognitivo: {
      motivo: "Cobrar corretamente os três estados do recurso Arquivos sob Demanda.",
      palavraCritica: "três estados possíveis",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.88,
    enunciado: "Um incidente de segurança caracterizado pelo recebimento de um volume massivo e simultâneo de conexões, oriundas de diferentes origens distribuídas pela rede, com o objetivo de exceder a capacidade de resposta de um serviço e comprometer sua disponibilidade, configura um ataque de negação de serviço distribuído (DDoS).",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "volume massivo ... origens distribuídas ... disponibilidade",
    cognitivo: {
      motivo: "Cobrar a identificação correta de um ataque DDoS a partir de sua descrição técnica.",
      palavraCritica: "DDoS",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.88,
    enunciado: "Um incidente de segurança em que um serviço público foi derrubado após receber um volume massivo de conexões simultâneas provenientes de diversos países, com o objetivo de sobrecarregar a infraestrutura e interromper o funcionamento do sistema, pode ser corretamente classificado como um ataque de ransomware.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "volume massivo ... classificado como ... ransomware",
    cognitivo: {
      motivo: "Cobrar que a descrição de um ataque volumétrico/DDoS não deve ser nomeada como ransomware.",
      palavraCritica: "classificado como ... ransomware",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "O ataque de negação de serviço (DoS), por definição, tem origem em múltiplos computadores distribuídos e coordenados entre si, diferentemente do ataque de negação de serviço distribuído (DDoS), que parte de uma única máquina atacante.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "DoS ... múltiplos computadores ... DDoS ... única máquina",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, a distinção entre DoS (origem única) e DDoS (origem distribuída).",
      palavraCritica: "DoS ... múltiplos computadores",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Além da confidencialidade, da integridade e da disponibilidade — que compõem a tríade CID —, a autenticidade e o não repúdio completam o conjunto de premissas clássicas da segurança da informação, sendo ambos assegurados, por exemplo, pelo uso da assinatura digital.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "autenticidade e o não repúdio ... assinatura digital",
    cognitivo: {
      motivo: "Cobrar a extensão da tríade CID com autenticidade e não repúdio, e o papel da assinatura digital.",
      palavraCritica: "autenticidade e o não repúdio",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "O princípio da integridade da informação garante que os dados permaneçam completos e não sejam alterados de forma indevida, ao passo que o princípio da disponibilidade assegura que os sistemas e as informações estejam acessíveis sempre que necessários aos usuários devidamente autorizados.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não sejam alterados indevidamente ... acessíveis quando necessários",
    cognitivo: {
      motivo: "Cobrar as definições corretas e completas de integridade e disponibilidade.",
      palavraCritica: "acessíveis sempre que necessários ... autorizados",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Segurança da Informação)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.84,
    enunciado: "São considerados atributos básicos e fundamentais da segurança da informação a confidencialidade, a integridade e a disponibilidade, os quais compõem a chamada tríade CID.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "confidencialidade, integridade e disponibilidade ... tríade CID",
    cognitivo: {
      motivo: "Cobrar o reconhecimento direto da tríade CID como fundamento básico da segurança da informação.",
      palavraCritica: "confidencialidade, integridade e disponibilidade",
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
