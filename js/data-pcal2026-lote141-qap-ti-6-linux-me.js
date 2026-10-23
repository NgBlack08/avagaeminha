/* =====================================================================
   QUESTLAB — Lote 141: TI (parte 6), QAPs DO CURSO DSO — Linux, questões
   de múltipla escolha do relatório convertidas em C/E

   ORIGEM: o relatório de Linux do módulo 02 traz 10 questões CEBRASPE de
   múltipla escolha (sem prova identificada) que não estão no caderno C/E
   nem no banco. Cada uma virou um item C/E construído sobre a alternativa
   correta ou sobre o distrator mais traiçoeiro; duas renderam dois itens.
   Gabarito do material; comentários escritos do zero.
   ===================================================================== */

const BASE141 = {
  concurso: "PCAL", cargo: ["Escrivão", "Agente"], ano: 2026,
  tipo: "CE", probReaparecer: 0.75,
  disciplina: "TI e Segurança Cibernética",
};

const QUESTOES_PCAL_LOTE141 = [

  /* ===== LINUX — COMANDOS ===== */

  {
    ...BASE141,
    id: "TI-506", assunto: "Sistemas operacionais",
    subassunto: "iostat — estatísticas de E/S",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material; questão de múltipla escolha do relatório convertida em item C/E",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "No Linux, o comando iostat é usado para verificar estatísticas dos discos e das operações de entrada e saída.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "iostat",
    cognitivo: {
      motivo: "Reconhecer o ponto: iostat — estatísticas de E/S.",
      palavraCritica: "iostat",
    },
    comentario: {
      resolucao: "CERTO. O iostat (input/output statistics) mostra estatísticas de entrada e saída dos dispositivos de disco, como transferências por segundo e volume lido e gravado, além do uso de CPU.",
      fundamento: "Comandos do Linux — monitoramento.",
      macete: "iostat = desempenho de disco; lsblk = lista de discos.",
      erroComum: "Confundir iostat com lsblk.",
      comoBancaPensa: "Cobra o comando pela finalidade.",
    },
  },

  {
    ...BASE141,
    id: "TI-507", assunto: "Sistemas operacionais",
    subassunto: "lsblk lista, não mede",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material; questão de múltipla escolha do relatório convertida em item C/E",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "No Linux, o comando lsblk exibe estatísticas de desempenho das operações de entrada e saída dos discos.",
    gabarito: "E",
    pegadinha: "troca-sujeito",
    palavraChave: "lsblk",
    cognitivo: {
      motivo: "Reconhecer o ponto: lsblk lista, não mede.",
      palavraCritica: "lsblk",
    },
    comentario: {
      resolucao: "ERRADO. O lsblk lista os dispositivos de bloco (discos e partições) em árvore, com tamanho e ponto de montagem, mas não mede desempenho. Estatísticas de E/S são do iostat.",
      fundamento: "Comandos do Linux — dispositivos de bloco.",
      macete: "lsblk = inventário; iostat = desempenho.",
      erroComum: "Achar que todo comando de disco mede desempenho.",
      comoBancaPensa: "Troca o comando pelo vizinho de tema.",
    },
  },

  {
    ...BASE141,
    id: "TI-508", assunto: "Sistemas operacionais",
    subassunto: "ps aux — todos os processos com usuário",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material; questão de múltipla escolha do relatório convertida em item C/E",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "No Linux, o comando ps aux permite visualizar todos os processos em execução e os respectivos usuários.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "ps aux",
    cognitivo: {
      motivo: "Reconhecer o ponto: ps aux — todos os processos com usuário.",
      palavraCritica: "ps aux",
    },
    comentario: {
      resolucao: "CERTO. ps aux lista todos os processos do sistema, com usuário dono, PID, uso de CPU e memória e comando executado. ps -ef é a forma equivalente na sintaxe System V.",
      fundamento: "Comandos do Linux — processos.",
      macete: "ps aux (BSD) = ps -ef (System V).",
      erroComum: "Confundir ps com lsof.",
      comoBancaPensa: "Cobra o comando e suas opções clássicas.",
    },
  },

  {
    ...BASE141,
    id: "TI-509", assunto: "Sistemas operacionais",
    subassunto: "Pipe com grep para filtrar",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material; questão de múltipla escolha do relatório convertida em item C/E",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "Para consultar no terminal do Linux os processos do sistema, filtrando aqueles que contenham os caracteres login, pode-se usar o comando ps -ef | grep login.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "grep",
    cognitivo: {
      motivo: "Reconhecer o ponto: pipe com grep para filtrar.",
      palavraCritica: "grep",
    },
    comentario: {
      resolucao: "CERTO. ps -ef lista os processos, e o pipe (|) entrega essa saída ao grep, que mostra só as linhas com 'login'. Filtrar linhas de texto no terminal é sempre tarefa do grep.",
      fundamento: "Comandos do Linux — pipe e grep.",
      macete: "comando | grep texto = filtra a saída.",
      erroComum: "Procurar um comando específico de filtro de processos.",
      comoBancaPensa: "Cobra a composição de comandos.",
    },
  },

  {
    ...BASE141,
    id: "TI-510", assunto: "Sistemas operacionais",
    subassunto: "chmod simbólico → octal (ordem dono-grupo-outros)",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material; questão de múltipla escolha do relatório convertida em item C/E",
    dificuldade: 2, tempoIdealSeg: 80,
    enunciado: "No Linux, o comando chmod a-rxw,u+r,g+rw arquivo equivale a chmod 046 arquivo.",
    gabarito: "E",
    pegadinha: "troca-numerica",
    palavraChave: "046",
    cognitivo: {
      motivo: "Reconhecer o ponto: chmod simbólico → octal (ordem dono-grupo-outros).",
      palavraCritica: "046",
    },
    comentario: {
      resolucao: "ERRADO. As cláusulas valem em sequência: a-rxw zera tudo (000); u+r dá leitura ao dono (400); g+rw dá leitura e escrita ao grupo (460). O equivalente é chmod 460. O 046 tem os mesmos dígitos na ordem errada — a ordem é sempre dono, grupo, outros.",
      fundamento: "Permissões no Linux — chmod.",
      macete: "r=4, w=2, x=1; ordem dono-grupo-outros.",
      erroComum: "Inverter a ordem das classes.",
      comoBancaPensa: "Usa os dígitos certos na ordem errada.",
    },
  },

  {
    ...BASE141,
    id: "TI-511", assunto: "Sistemas operacionais",
    subassunto: "chmod u=rwx,g=rx,o= → 750",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material; questão de múltipla escolha do relatório convertida em item C/E",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "No Linux, o comando chmod u=rwx,g=rx,o= arquivo equivale a chmod 750 arquivo.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "750",
    cognitivo: {
      motivo: "Reconhecer o ponto: chmod u=rwx,g=rx,o= → 750.",
      palavraCritica: "750",
    },
    comentario: {
      resolucao: "CERTO. O operador = define exatamente as permissões: dono rwx = 4+2+1 = 7; grupo rx = 4+1 = 5; 'o=' sem nada zera outros = 0. Resultado: 750.",
      fundamento: "Permissões no Linux — chmod.",
      macete: "'o=' vazio zera a classe.",
      erroComum: "Esquecer que 'o=' remove tudo de outros.",
      comoBancaPensa: "Conversão simbólico → octal.",
    },
  },

  {
    ...BASE141,
    id: "TI-512", assunto: "Sistemas operacionais",
    subassunto: "whoami × whois",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material; questão de múltipla escolha do relatório convertida em item C/E",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "Em terminal Linux, o comando whois permite ao usuário confirmar com qual conta está conectado na sessão atual.",
    gabarito: "E",
    pegadinha: "troca-sujeito",
    palavraChave: "whois",
    cognitivo: {
      motivo: "Reconhecer o ponto: whoami × whois.",
      palavraCritica: "whois",
    },
    comentario: {
      resolucao: "ERRADO. Quem mostra o usuário da sessão atual é o whoami. O whois consulta dados de registro de domínios na internet.",
      fundamento: "Comandos do Linux — identificação.",
      macete: "whoami = quem sou eu; whois = de quem é o domínio.",
      erroComum: "Confundir os nomes parecidos.",
      comoBancaPensa: "Troca comandos de grafia próxima.",
    },
  },

  {
    ...BASE141,
    id: "TI-513", assunto: "Sistemas operacionais",
    subassunto: "mv remove da origem",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material; questão de múltipla escolha do relatório convertida em item C/E",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "Após o comando mv do Linux, o arquivo permanece também no local de origem, como ocorre em uma cópia.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "permanece",
    cognitivo: {
      motivo: "Reconhecer o ponto: mv remove da origem.",
      palavraCritica: "permanece",
    },
    comentario: {
      resolucao: "ERRADO. O mv move (ou renomeia) o arquivo: depois dele, o arquivo deixa de existir na origem. Quem mantém o original é o cp, que copia.",
      fundamento: "Comandos do Linux — arquivos.",
      macete: "cp copia (origem fica); mv move (origem some); rm remove.",
      erroComum: "Confundir mv com cp.",
      comoBancaPensa: "Atribui ao mv o efeito do cp.",
    },
  },

  {
    ...BASE141,
    id: "TI-514", assunto: "Sistemas operacionais",
    subassunto: "/home e /dev — ordem do 'respectivamente'",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material; questão de múltipla escolha do relatório convertida em item C/E",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Na estrutura de diretórios do Linux, os diretórios pessoais dos usuários comuns e os arquivos especiais que representam os dispositivos ficam, respectivamente, em /dev e em /home.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "respectivamente",
    cognitivo: {
      motivo: "Reconhecer o ponto: /home e /dev — ordem do 'respectivamente'.",
      palavraCritica: "respectivamente",
    },
    comentario: {
      resolucao: "ERRADO. Os diretórios pessoais dos usuários comuns ficam em /home (ex.: /home/maria), e os arquivos especiais de dispositivos ficam em /dev (ex.: /dev/sda). O item tem os dois diretórios certos, mas na ordem invertida.",
      fundamento: "Hierarquia de diretórios do Linux (FHS).",
      macete: "/home = usuários; /dev = dispositivos; /etc = configurações; /root = casa do administrador.",
      erroComum: "Não conferir a ordem do 'respectivamente'.",
      comoBancaPensa: "Erra só a ordem.",
    },
  },

  {
    ...BASE141,
    id: "TI-515", assunto: "Sistemas operacionais",
    subassunto: "free × df",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material; questão de múltipla escolha do relatório convertida em item C/E",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "No Linux, o comando df exibe a quantidade de memória RAM total, usada e livre, além do uso da área de troca (swap).",
    gabarito: "E",
    pegadinha: "troca-sujeito",
    palavraChave: "df",
    cognitivo: {
      motivo: "Reconhecer o ponto: free × df.",
      palavraCritica: "df",
    },
    comentario: {
      resolucao: "ERRADO. Memória RAM e swap se veem com o free (free -h para unidades legíveis). O df mostra o espaço livre nas partições do disco; o du, o espaço ocupado por diretórios.",
      fundamento: "Comandos do Linux — memória e disco.",
      macete: "free = memória; df = disco livre; du = disco usado por pasta.",
      erroComum: "Ir pela palavra 'livre' e marcar df.",
      comoBancaPensa: "Troca comandos de recursos diferentes.",
    },
  },

  {
    ...BASE141,
    id: "TI-516", assunto: "Sistemas operacionais",
    subassunto: "GRUB — gerenciador de inicialização",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material; questão de múltipla escolha do relatório convertida em item C/E",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "No processo de inicialização do Linux, o GRUB é o programa responsável por exibir o menu com os sistemas operacionais instalados e por carregar o kernel na memória.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "GRUB",
    cognitivo: {
      motivo: "Reconhecer o ponto: gRUB — gerenciador de inicialização.",
      palavraCritica: "GRUB",
    },
    comentario: {
      resolucao: "CERTO. O GRUB é o gerenciador de boot: mostra o menu de sistemas instalados (o que permite o dual boot) e carrega o kernel na memória. A ordem é firmware (BIOS/UEFI) → GRUB → kernel → systemd.",
      fundamento: "Inicialização do Linux.",
      macete: "BIOS/UEFI → GRUB → kernel → systemd.",
      erroComum: "Achar que o systemd carrega o kernel.",
      comoBancaPensa: "Cobra o papel do bootloader.",
    },
  },

  {
    ...BASE141,
    id: "TI-517", assunto: "Sistemas operacionais",
    subassunto: "systemd entra depois do kernel",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material; questão de múltipla escolha do relatório convertida em item C/E",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "No processo de inicialização do Linux, cabe ao systemd exibir o menu com os sistemas operacionais instalados e carregar o kernel na memória.",
    gabarito: "E",
    pegadinha: "troca-sujeito",
    palavraChave: "systemd",
    cognitivo: {
      motivo: "Reconhecer o ponto: systemd entra depois do kernel.",
      palavraCritica: "systemd",
    },
    comentario: {
      resolucao: "ERRADO. O systemd só entra depois que o kernel já foi carregado: é o primeiro processo (PID 1) e inicia os serviços. Quem carrega o kernel é o gerenciador de boot (GRUB).",
      fundamento: "Inicialização do Linux.",
      macete: "systemd = PID 1, sobe os serviços.",
      erroComum: "Atribuir ao systemd toda a inicialização.",
      comoBancaPensa: "Troca etapas vizinhas do boot.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE141);
