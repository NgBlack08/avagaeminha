/* =====================================================================
   QUESTLAB — Lote 64: LINUX E ANDROID
   Módulo "Sistemas Operacionais" do edital PC-AL 2026, hoje coberto
   quase só por Windows (lote 42). Material de curso com 8 itens C/E
   da CEBRASPE serviu apenas de MAPA dos recortes que a banca repete:
   SELinux no Android (enforcing desde a 5.0), sistema de arquivos do
   Android (ext4/F2FS, nunca NTFS), PackageManager e assinatura do
   .apk, "tudo é arquivo" (diretório = arquivo especial de nomes e
   inodes), ps/ps aux, reboot obrigatório após troca de kernel,
   apt x yum/dnf e a troca clássica ifconfig x ipconfig.

   Nenhum enunciado foi copiado. Cada item foi redigido do zero e
   ancorado em comportamento real do sistema — FHS, permissões
   POSIX (SUID/SGID/sticky/umask), inodes e links, systemd, sinais
   de processo, /etc/passwd x /etc/shadow, ip x ifconfig, dpkg/rpm
   x apt/dnf, e o modelo de segurança do Android (sandbox por UID,
   permissões em tempo de execução desde a 6.0, Verified Boot, ART).

   36 itens: 16 CERTO / 20 ERRADO. Dificuldade 3 em 28, 2 em 8.
   ===================================================================== */

const QUESTOES_PCAL_LOTE64 = [

  /* ===== "TUDO É ARQUIVO", INODES E LINKS ===== */
  {
    id: "TI-107", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — sistema de arquivos e inodes",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.84,
    enunciado: "No Linux, um diretório é implementado como um arquivo de tipo especial cujo conteúdo é uma tabela que associa nomes de entradas aos respectivos números de inode, razão pela qual o nome de um arquivo não é armazenado no próprio inode.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "associa nomes de entradas aos respectivos números de inode",
    cognitivo: {
      motivo: "Cobrar o princípio 'tudo é arquivo' com a precisão de onde o nome de fato reside.",
      palavraCritica: "o nome de um arquivo não é armazenado no próprio inode",
    },
    comentario: {
      resolucao: "CERTO. O inode guarda os metadados (permissões, dono, grupo, timestamps, tamanho, ponteiros para os blocos de dados) — mas não o nome. O nome existe apenas como entrada de diretório apontando para um número de inode. É exatamente por isso que um mesmo inode pode ter vários nomes (hard links) e que renomear um arquivo dentro do mesmo sistema de arquivos é uma operação barata: altera-se a entrada de diretório, não o inode.",
      fundamento: "Arquitetura de sistemas de arquivos Unix/Linux (ext4) — estrutura de inode e entradas de diretório.",
      macete: "Inode = metadados. Diretório = nome → inode. O nome mora no diretório, não no inode.",
      erroComum: "Supor que o nome do arquivo está gravado no inode.",
      comoBancaPensa: "Item 'limpo' que descreve corretamente a estrutura e ainda entrega a consequência técnica."
    }
  },
  {
    id: "TI-108", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — links simbólicos e físicos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.8,
    enunciado: "No Linux, o link físico (hard link) pode ser criado entre sistemas de arquivos distintos e apontar para diretórios, ao passo que o link simbólico fica restrito à partição em que foi criado e só admite arquivos comuns como destino.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "link físico ... entre sistemas de arquivos distintos ... simbólico ... restrito à partição",
    cognitivo: {
      motivo: "Cobrar a distinção entre hard link e link simbólico invertendo exatamente as duas limitações.",
      palavraCritica: "hard link ... entre sistemas de arquivos distintos",
    },
    comentario: {
      resolucao: "ERRADO. As restrições estão invertidas. O hard link é apenas outro nome para o mesmo inode e, como a numeração de inodes é local a cada sistema de arquivos, ele não atravessa partições; além disso, a criação de hard link para diretório é vedada a usuários comuns (evitaria ciclos na árvore). Já o link simbólico armazena um caminho em texto, podendo apontar para qualquer coisa — outra partição, um diretório ou até um destino inexistente (link quebrado).",
      fundamento: "Semântica POSIX de link(2) e symlink(2) no Linux.",
      macete: "Hard link = mesmo inode → preso à partição. Symlink = um caminho de texto → vai a qualquer lugar.",
      erroComum: "Trocar as limitações de um pelo outro.",
      comoBancaPensa: "Inverte os atributos de dois conceitos vizinhos, contando com a memorização superficial."
    }
  },
  {
    id: "TI-109", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — remoção de arquivos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.74,
    enunciado: "No Linux, a execução do comando rm sobre um arquivo libera imediatamente os blocos de dados ocupados por ele, ainda que algum processo mantenha o arquivo aberto no momento da remoção.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "libera imediatamente os blocos ... ainda que algum processo mantenha o arquivo aberto",
    cognitivo: {
      motivo: "Cobrar a semântica de unlink e o contador de referências do inode — recorte útil em perícia digital.",
      palavraCritica: "imediatamente ... ainda que",
    },
    comentario: {
      resolucao: "ERRADO. O rm executa unlink: remove a entrada de diretório e decrementa o contador de links do inode. O espaço só é liberado quando o contador de links chega a zero E não há mais descritores de arquivo abertos apontando para o inode. Enquanto um processo mantiver o arquivo aberto, os dados continuam acessíveis (por exemplo, via /proc/PID/fd) — fato explorado tanto por malware quanto por perícia.",
      fundamento: "Semântica POSIX de unlink(2) — contador de links e descritores abertos.",
      macete: "rm não apaga: desliga um nome. O dado morre quando ninguém mais o segura.",
      erroComum: "Ler rm como sinônimo de destruição imediata do conteúdo.",
      comoBancaPensa: "Usa 'imediatamente' e uma concessiva ('ainda que') para forçar um absoluto que a implementação não sustenta."
    }
  },
  {
    id: "TI-110", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — hierarquia de diretórios (FHS)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.82,
    enunciado: "Segundo o padrão FHS adotado pelas distribuições Linux, o diretório /proc não corresponde a uma área em disco, mas a um sistema de arquivos virtual gerado em memória pelo kernel, que expõe informações sobre processos e sobre o próprio sistema.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sistema de arquivos virtual gerado em memória pelo kernel",
    cognitivo: {
      motivo: "Cobrar a natureza do /proc, recorte recorrente por contrariar a intuição de 'diretório = pasta em disco'.",
      palavraCritica: "não corresponde a uma área em disco",
    },
    comentario: {
      resolucao: "CERTO. O /proc é um pseudo-sistema de arquivos (procfs): seus 'arquivos' são gerados sob demanda pelo kernel e existem apenas em memória. Cada processo tem um diretório /proc/PID com dados de execução, e arquivos como /proc/cpuinfo e /proc/meminfo expõem o estado da máquina. O mesmo vale para /sys (sysfs) e para /dev, populado dinamicamente pelo udev.",
      fundamento: "Filesystem Hierarchy Standard (FHS) e documentação do procfs no kernel Linux.",
      macete: "/proc e /sys não ocupam disco — são janelas para dentro do kernel.",
      erroComum: "Tratar /proc como diretório comum, persistido em disco.",
      comoBancaPensa: "Item verdadeiro que soa estranho: 'diretório que não está em disco' parece armadilha, mas é a descrição correta."
    }
  },
  {
    id: "TI-111", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — hierarquia de diretórios (FHS)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.76,
    enunciado: "No padrão FHS, o diretório /var destina-se aos arquivos de configuração do sistema e dos serviços instalados, enquanto o /etc concentra os dados de conteúdo variável, tais como registros de log, filas de impressão e caches de aplicações.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "/var ... arquivos de configuração ... /etc ... conteúdo variável",
    cognitivo: {
      motivo: "Cobrar as finalidades de /etc e /var pela troca direta entre os dois.",
      palavraCritica: "/var destina-se aos arquivos de configuração",
    },
    comentario: {
      resolucao: "ERRADO. Os papéis estão invertidos. O /etc guarda arquivos de configuração estáticos do sistema e dos serviços; o /var guarda dados de conteúdo variável durante a operação — logs em /var/log, filas de impressão e e-mail em /var/spool, caches em /var/cache. A pista está no próprio nome: var de variável.",
      fundamento: "Filesystem Hierarchy Standard (FHS) — seções /etc e /var.",
      macete: "etc = configuração (estática). var = variável (cresce em uso).",
      erroComum: "Procurar logs em /etc ou configuração em /var.",
      comoBancaPensa: "Troca dois diretórios muito citados juntos, apostando que o candidato reconheça os nomes sem lembrar do papel de cada um."
    }
  },

  /* ===== PERMISSÕES E BITS ESPECIAIS ===== */
  {
    id: "TI-112", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — permissões e bits especiais",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.83,
    enunciado: "No Linux, o bit SUID aplicado a um arquivo executável faz que o programa seja executado com os privilégios do proprietário do arquivo, e não com os do usuário que o invocou, motivo pelo qual binários com esse bit constituem vetor clássico de escalonamento de privilégios.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "privilégios do proprietário do arquivo, e não com os do usuário que o invocou",
    cognitivo: {
      motivo: "Cobrar o efeito do SUID e sua relevância em segurança ofensiva/defensiva.",
      palavraCritica: "privilégios do proprietário do arquivo",
    },
    comentario: {
      resolucao: "CERTO. Com o SUID ativo, o processo assume o UID efetivo do dono do binário durante a execução. É o mecanismo que permite ao passwd, pertencente ao root, gravar em /etc/shadow quando invocado por usuário comum. Por isso auditorias procuram binários SUID indevidos (find / -perm -4000), e por isso o bit é ignorado em sistemas de arquivos montados com a opção nosuid.",
      fundamento: "Modelo de permissões POSIX no Linux — bits set-user-ID e set-group-ID.",
      macete: "SUID = roda como o DONO do arquivo. É por isso que passwd funciona sem sudo.",
      erroComum: "Achar que SUID dá permissão de leitura/escrita ao arquivo em vez de alterar o contexto de execução.",
      comoBancaPensa: "Descreve corretamente o mecanismo e ainda entrega a consequência de segurança, para o candidato validar por dois caminhos."
    }
  },
  {
    id: "TI-113", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — permissões e bits especiais",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.75,
    enunciado: "O sticky bit aplicado ao diretório /tmp impede que qualquer usuário crie arquivos nesse diretório sem autorização do administrador, restringindo a escrita ao usuário root.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "impede que qualquer usuário crie arquivos ... restringindo a escrita ao usuário root",
    cognitivo: {
      motivo: "Cobrar o efeito real do sticky bit, que atua na REMOÇÃO e não na criação.",
      palavraCritica: "impede ... crie arquivos",
    },
    comentario: {
      resolucao: "ERRADO. O sticky bit em diretório não restringe a criação — o /tmp continua com escrita para todos (permissão 1777). O que ele faz é limitar a REMOÇÃO e a RENOMEAÇÃO: só o dono do arquivo, o dono do diretório ou o root podem apagar ali. Sem ele, qualquer usuário poderia excluir os arquivos temporários dos demais.",
      fundamento: "Modelo de permissões POSIX no Linux — sticky bit em diretórios.",
      macete: "Sticky bit não tranca a porta de entrada; tranca a lixeira. Todos criam, cada um só apaga o seu.",
      erroComum: "Ler o sticky bit como restrição de escrita/criação.",
      comoBancaPensa: "Substitui o verbo correto (remover) por outro plausível (criar), mantendo o resto do enunciado verossímil."
    }
  },
  {
    id: "TI-114", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — permissões e bits especiais",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.79,
    enunciado: "A execução do comando chmod 750 relatorio.sh concede ao proprietário leitura, escrita e execução; ao grupo, leitura e execução; e aos demais usuários, apenas leitura.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "aos demais usuários, apenas leitura",
    cognitivo: {
      motivo: "Cobrar a leitura da notação octal, com erro plantado apenas no último dígito.",
      palavraCritica: "demais usuários, apenas leitura",
    },
    comentario: {
      resolucao: "ERRADO. Em 750, o dígito 0 referente a 'outros' significa NENHUMA permissão, e não leitura. A decomposição correta é: 7 = 4+2+1 (rwx) para o dono; 5 = 4+1 (r-x) para o grupo; 0 = --- para os demais. O modo que daria leitura aos outros seria 754.",
      fundamento: "Notação octal de permissões POSIX (r=4, w=2, x=1).",
      macete: "0 é ausência total. Leitura para outros exigiria terminar em 4.",
      erroComum: "Acertar os dois primeiros dígitos e não conferir o terceiro.",
      comoBancaPensa: "Descreve corretamente 2/3 do comando e planta o erro só no fim, onde a atenção já caiu."
    }
  },
  {
    id: "TI-115", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — umask",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.71,
    enunciado: "Com a umask definida em 022, um arquivo comum criado por um usuário receberá o modo 644, ao passo que um diretório criado pelo mesmo usuário receberá o modo 755, em razão de as permissões-base padrão serem distintas para arquivos e para diretórios.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "arquivo ... 644 ... diretório ... 755 ... permissões-base padrão distintas",
    cognitivo: {
      motivo: "Cobrar o cálculo da umask e a diferença de base entre arquivo (666) e diretório (777).",
      palavraCritica: "permissões-base padrão serem distintas",
    },
    comentario: {
      resolucao: "CERTO. A umask subtrai bits da permissão-base. Arquivos comuns nascem de 666 (sem execução, por segurança): 666 − 022 = 644. Diretórios nascem de 777, porque precisam do bit x para serem percorridos: 777 − 022 = 755. A distinção de base é justamente o que explica os dois resultados diferentes com a mesma máscara.",
      fundamento: "Comportamento de umask(2) no Linux — permissões-base 666 (arquivos) e 777 (diretórios).",
      macete: "Arquivo parte de 666, diretório de 777. Mesma umask, resultados diferentes.",
      erroComum: "Aplicar a base 777 também para arquivos e concluir 755 nos dois casos.",
      comoBancaPensa: "Item longo e verdadeiro que só se confirma se o candidato souber que as bases diferem."
    }
  },
  {
    id: "TI-116", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — permissões de diretório",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.7,
    enunciado: "Para que um usuário consiga listar os nomes dos arquivos contidos em um diretório com o comando ls, é indispensável que ele detenha a permissão de execução (x) sobre esse diretório, uma vez que a permissão de leitura (r) isoladamente não é suficiente para essa operação.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "indispensável ... execução ... leitura isoladamente não é suficiente",
    cognitivo: {
      motivo: "Cobrar a diferença entre listar nomes (r) e acessar metadados/entrar (x) em diretórios.",
      palavraCritica: "indispensável ... permissão de execução",
    },
    comentario: {
      resolucao: "ERRADO. Em diretórios, r permite LISTAR os nomes das entradas e x permite ATRAVESSAR o diretório para acessar seu conteúdo. Com apenas r, o ls simples exibe os nomes (embora ls -l falhe ao consultar os metadados de cada entrada, pois isso exige travessia). Portanto, a leitura isolada é suficiente para o ls básico — o x é indispensável para entrar no diretório e para acessar os arquivos, não para enxergar os nomes.",
      fundamento: "Semântica das permissões r e x aplicadas a diretórios no Linux.",
      macete: "Em diretório: r = ver a lista de nomes; x = poder entrar. São coisas distintas.",
      erroComum: "Tratar r e x em diretórios como se fossem a mesma permissão.",
      comoBancaPensa: "Cria uma exigência técnica que parece rigorosa, contando com o desconhecimento da semântica de x em diretórios."
    }
  },

  /* ===== PROCESSOS E SINAIS ===== */
  {
    id: "TI-117", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — gerenciamento de processos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.86,
    enunciado: "No Linux, o comando ps apresenta um retrato estático dos processos no instante da execução, ao passo que utilitários como top e htop atualizam periodicamente a exibição, permitindo acompanhar consumo de CPU e memória em tempo real.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "retrato estático ... atualizam periodicamente",
    cognitivo: {
      motivo: "Cobrar a diferença funcional entre ps e top/htop, recorte clássico da banca.",
      palavraCritica: "retrato estático no instante da execução",
    },
    comentario: {
      resolucao: "CERTO. O ps é um instantâneo: coleta o estado da tabela de processos, imprime e encerra. O top e o htop são monitores interativos que se redesenham em intervalos regulares. Combinações como ps aux (sintaxe BSD) e ps -ef (sintaxe System V) apenas ampliam o conjunto de processos e colunas exibidos — não tornam o comando contínuo.",
      fundamento: "Manuais de ps(1), top(1) e htop(1) no Linux.",
      macete: "ps = foto. top/htop = vídeo.",
      erroComum: "Supor que ps aux monitora continuamente.",
      comoBancaPensa: "Contrasta dois comandos do mesmo campo semântico para checar se o candidato conhece a diferença de natureza, não só o nome."
    }
  },
  {
    id: "TI-118", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — sinais de processo",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.78,
    enunciado: "O comando kill, executado sem a indicação de um sinal específico, envia ao processo o sinal SIGKILL (9), que pode ser capturado ou ignorado pela aplicação, permitindo a liberação ordenada dos recursos alocados antes do encerramento.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "sem a indicação de um sinal ... SIGKILL (9) ... pode ser capturado ou ignorado",
    cognitivo: {
      motivo: "Cobrar tanto o sinal padrão do kill quanto a característica não capturável do SIGKILL — dois erros no mesmo item.",
      palavraCritica: "SIGKILL (9), que pode ser capturado ou ignorado",
    },
    comentario: {
      resolucao: "ERRADO. Há dois erros. Primeiro: o sinal padrão do kill é o SIGTERM (15), não o SIGKILL (9). Segundo: justamente o SIGKILL é o sinal que NÃO pode ser capturado, bloqueado nem ignorado — é tratado pelo kernel e mata o processo sem lhe dar chance de limpar recursos. Quem permite encerramento ordenado é o SIGTERM, que a aplicação pode interceptar.",
      fundamento: "Semântica de signal(7) no Linux — SIGTERM (15) padrão do kill; SIGKILL (9) e SIGSTOP não capturáveis.",
      macete: "kill sozinho = 15 (pede para sair). kill -9 = ordem sem apelação, sem faxina.",
      erroComum: "Associar o comando 'kill' automaticamente ao sinal 9.",
      comoBancaPensa: "Combina duas afirmações plausíveis e ambas falsas, de modo que acertar por um só motivo já basta para marcar ERRADO."
    }
  },
  {
    id: "TI-119", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — estados de processo",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.68,
    enunciado: "Um processo zumbi no Linux é aquele que continua consumindo tempo de processador após a morte do processo pai, devendo ser encerrado com kill -9 para que os recursos de CPU e de memória por ele ocupados sejam devolvidos ao sistema.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "continua consumindo tempo de processador ... encerrado com kill -9",
    cognitivo: {
      motivo: "Cobrar a definição de processo zumbi e sua distinção do processo órfão.",
      palavraCritica: "consumindo tempo de processador ... kill -9",
    },
    comentario: {
      resolucao: "ERRADO. O zumbi já terminou a execução: não consome CPU nem memória de dados, restando apenas sua entrada na tabela de processos, que guarda o código de saída até o pai executar wait(). Por isso não adianta kill -9 em zumbi — ele já está morto; resolve-se fazendo o pai coletar o status ou encerrando o pai, caso em que o init/systemd adota o processo e o recolhe. Quem continua rodando com o pai morto é o processo ÓRFÃO, esse sim reparentado ao PID 1.",
      fundamento: "Modelo de processos do Linux — estado Z (defunct), wait(2) e reparentamento pelo init/systemd.",
      macete: "Zumbi = já morreu, só falta a certidão. Órfão = continua vivo, perdeu o pai.",
      erroComum: "Trocar zumbi por órfão e supor que kill -9 resolve zumbi.",
      comoBancaPensa: "Descreve o órfão e coloca o rótulo do zumbi, somando uma 'solução' falsa que soa natural."
    }
  },
  {
    id: "TI-120", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — prioridade de processos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.66,
    enunciado: "No Linux, valores de nice mais baixos correspondem a maior prioridade de escalonamento, e a atribuição de valores negativos a um processo é prerrogativa do superusuário.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "valores de nice mais baixos ... maior prioridade ... negativos ... superusuário",
    cognitivo: {
      motivo: "Cobrar a escala invertida do nice, contraintuitiva por natureza.",
      palavraCritica: "mais baixos correspondem a maior prioridade",
    },
    comentario: {
      resolucao: "CERTO. A escala de nice vai de −20 (mais prioritário) a +19 (menos prioritário) — quanto mais 'gentil' o processo, mais ele cede CPU. Usuários comuns só podem aumentar o próprio nice (reduzir a prioridade); baixá-lo para a faixa negativa exige privilégios de root, o que evita que qualquer usuário monopolize o processador.",
      fundamento: "Escalonador do Linux — nice(1)/renice(1) e faixa de −20 a +19.",
      macete: "Nice alto = processo educado = cede a vez. Negativo só com root.",
      erroComum: "Ler a escala como direta, achando que nice maior significa mais prioridade.",
      comoBancaPensa: "Aposta na contraintuição da escala: o item correto é justamente o que parece invertido."
    }
  },
  {
    id: "TI-121", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — execução em segundo plano",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.64,
    enunciado: "Ao se acrescentar o caractere & ao final de um comando no shell do Linux, o processo passa a executar em segundo plano e torna-se imune ao encerramento do terminal que o originou, dispensando o uso de utilitários como nohup ou screen.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "imune ao encerramento do terminal ... dispensando ... nohup",
    cognitivo: {
      motivo: "Separar 'rodar em segundo plano' de 'sobreviver ao fim da sessão'.",
      palavraCritica: "imune ao encerramento do terminal",
    },
    comentario: {
      resolucao: "ERRADO. O & apenas desvincula o processo do primeiro plano do shell — ele continua filho daquela sessão. Ao fechar o terminal, o processo em regra recebe SIGHUP e é encerrado. Para sobreviver, usa-se nohup, disown, setsid, screen ou tmux. São problemas diferentes: segundo plano é sobre quem ocupa o prompt; persistência é sobre a árvore de sessão.",
      fundamento: "Controle de jobs no shell (bash) e propagação de SIGHUP ao encerrar a sessão.",
      macete: "& tira do prompt, não tira do laço da sessão. Persistir é com nohup/tmux.",
      erroComum: "Confundir execução em segundo plano com independência da sessão.",
      comoBancaPensa: "Descreve corretamente a primeira metade e estende para uma conclusão absoluta ('imune', 'dispensando') que não se sustenta."
    }
  },

  /* ===== USUÁRIOS, SENHAS E PRIVILÉGIOS ===== */
  {
    id: "TI-122", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — contas e senhas",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.81,
    enunciado: "Nos sistemas Linux atuais, o arquivo /etc/passwd é legível por todos os usuários e não contém os hashes das senhas, os quais ficam armazenados em /etc/shadow, arquivo com leitura restrita ao superusuário.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "/etc/passwd ... não contém os hashes ... /etc/shadow ... leitura restrita",
    cognitivo: {
      motivo: "Cobrar a separação entre cadastro de contas e repositório de credenciais.",
      palavraCritica: "não contém os hashes das senhas",
    },
    comentario: {
      resolucao: "CERTO. O /etc/passwd guarda login, UID, GID, diretório home e shell, e precisa ser legível por todos para que programas traduzam UID em nome de usuário. Os hashes migraram para o /etc/shadow (modo 640, dono root), justamente para que não fiquem expostos a leitura irrestrita — no campo de senha do /etc/passwd resta apenas um 'x'.",
      fundamento: "Suíte shadow-utils — formato de /etc/passwd e /etc/shadow.",
      macete: "passwd = cadastro público. shadow = cofre do root. O 'x' é o ponteiro entre os dois.",
      erroComum: "Supor que o /etc/passwd ainda guarda as senhas, como nos Unix antigos.",
      comoBancaPensa: "Item verdadeiro que se apoia no nome enganoso do arquivo: 'passwd' não guarda password."
    }
  },
  {
    id: "TI-123", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — elevação de privilégios",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.77,
    enunciado: "No Linux, o comando sudo exige que o usuário informe a senha do root para executar um comando com privilégios administrativos, ao passo que o comando su solicita a senha do próprio usuário que o invoca.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "sudo exige ... senha do root ... su solicita ... senha do próprio usuário",
    cognitivo: {
      motivo: "Cobrar a diferença operacional entre sudo e su pela inversão de qual senha cada um pede.",
      palavraCritica: "senha do root ... senha do próprio usuário",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. O sudo pede, por padrão, a senha do PRÓPRIO usuário, que precisa estar autorizado no /etc/sudoers — daí a auditoria por usuário e a possibilidade de conceder apenas comandos específicos. O su pede a senha da conta de destino (a do root, quando invocado sem argumento). Distribuições como o Ubuntu deixam a conta root sem senha utilizável exatamente para forçar o uso do sudo.",
      fundamento: "Manuais de sudo(8) e su(1); configuração em /etc/sudoers.",
      macete: "sudo = sua senha (com permissão registrada). su = senha do outro (virar o outro).",
      erroComum: "Trocar qual senha cada comando solicita.",
      comoBancaPensa: "Inverte dois comandos quase homônimos, situação em que a memória visual costuma falhar."
    }
  },

  /* ===== SYSTEMD E SERVIÇOS ===== */
  {
    id: "TI-124", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — systemd e serviços",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.72,
    enunciado: "Nas distribuições Linux que adotam o systemd, o comando systemctl start nginx garante que o serviço passe a ser iniciado automaticamente a cada inicialização do sistema, dispensando o uso do subcomando enable.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "start ... iniciado automaticamente a cada inicialização ... dispensando ... enable",
    cognitivo: {
      motivo: "Cobrar a distinção entre estado atual (start/stop) e persistência no boot (enable/disable).",
      palavraCritica: "dispensando o uso do subcomando enable",
    },
    comentario: {
      resolucao: "ERRADO. O start apenas ativa o serviço na sessão corrente; ao reiniciar a máquina, ele não sobe. Quem cria o vínculo persistente é o enable, que registra os links simbólicos do unit no alvo de inicialização. Por isso é comum usar systemctl enable --now, que faz as duas coisas de uma vez.",
      fundamento: "systemd — semântica de systemctl start/stop x enable/disable.",
      macete: "start = agora. enable = no boot. --now = os dois.",
      erroComum: "Achar que iniciar o serviço já o deixa habilitado permanentemente.",
      comoBancaPensa: "Funde dois subcomandos com efeitos distintos, e ainda diz explicitamente que o outro é dispensável."
    }
  },
  {
    id: "TI-125", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — logs do sistema",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.69,
    enunciado: "Em sistemas com systemd, o journald armazena os registros em formato binário indexado, de modo que a consulta a esses registros é feita pelo comando journalctl, e não pela simples leitura de arquivos de texto com cat ou less.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "formato binário indexado ... journalctl",
    cognitivo: {
      motivo: "Cobrar a mudança de paradigma dos logs com o systemd, relevante para exame pericial de máquinas Linux.",
      palavraCritica: "formato binário indexado",
    },
    comentario: {
      resolucao: "CERTO. O systemd-journald grava em journal binário com metadados indexados (unit, PID, prioridade, boot ID), o que permite filtros como journalctl -u ssh -p err -b. Muitas distribuições mantêm em paralelo o rsyslog escrevendo texto em /var/log, mas o journal em si não é legível com cat. Em perícia, isso significa que copiar /var/log pode não capturar tudo: é preciso preservar também /var/log/journal.",
      fundamento: "systemd-journald(8) e journalctl(1).",
      macete: "Journal é banco binário; leitura só via journalctl.",
      erroComum: "Tentar ler o journal com cat/grep direto no arquivo.",
      comoBancaPensa: "Item verdadeiro que contraria o hábito antigo de 'todo log no Linux é texto puro'."
    }
  },
  {
    id: "TI-126", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — agendamento de tarefas",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.67,
    enunciado: "Na sintaxe do crontab, os cinco campos que antecedem o comando representam, nesta ordem, minuto, hora, dia do mês, mês e dia da semana; assim, a entrada 30 2 * * 0 agenda a execução às 2h30 de todo domingo.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "minuto, hora, dia do mês, mês e dia da semana ... 2h30 de todo domingo",
    cognitivo: {
      motivo: "Cobrar a ordem dos campos do cron e a convenção de que 0 é domingo.",
      palavraCritica: "* * 0 ... todo domingo",
    },
    comentario: {
      resolucao: "CERTO. A ordem é minuto, hora, dia do mês, mês e dia da semana. Em 30 2 * * 0: minuto 30, hora 2, qualquer dia do mês, qualquer mês, dia da semana 0 — e 0 corresponde a domingo (7 também é aceito para domingo em várias implementações). Logo, a execução ocorre às 2h30 de todo domingo.",
      fundamento: "crontab(5) — formato dos campos e numeração de dia da semana (0 = domingo).",
      macete: "Ordem: mi-ho-dm-mê-ds. E domingo é 0, não 1.",
      erroComum: "Inverter minuto e hora, ou contar segunda-feira como 0.",
      comoBancaPensa: "Item correto cheio de números, que o candidato tende a marcar ERRADO por insegurança na convenção do dia da semana."
    }
  },

  /* ===== PACOTES E ATUALIZAÇÕES ===== */
  {
    id: "TI-127", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — gerenciamento de pacotes",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "O apt é o gerenciador de pacotes de alto nível típico das distribuições derivadas do Debian, enquanto o yum e seu sucessor dnf cumprem papel equivalente em distribuições da família Red Hat, todos capazes de obter e aplicar correções de segurança a partir de repositórios oficiais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "apt ... Debian ... yum e seu sucessor dnf ... Red Hat",
    cognitivo: {
      motivo: "Cobrar o pareamento entre gerenciador e família de distribuição, recorte recorrente da banca.",
      palavraCritica: "yum e seu sucessor dnf",
    },
    comentario: {
      resolucao: "CERTO. Debian/Ubuntu usam apt (sobre o dpkg); Red Hat/Fedora/CentOS/Rocky usam yum, hoje substituído pelo dnf (sobre o rpm). Ambos resolvem dependências, consultam repositórios assinados e aplicam atualizações de segurança. A assinatura dos repositórios (GPG) é o que impede a instalação de pacotes adulterados.",
      fundamento: "Documentação de apt(8), dnf(8) e do sistema de pacotes das respectivas distribuições.",
      macete: "apt → Debian. yum/dnf → Red Hat. Alto nível resolve dependência; baixo nível (dpkg/rpm) não.",
      erroComum: "Trocar as famílias ou desconhecer que o dnf sucedeu o yum.",
      comoBancaPensa: "Item 'limpo' de associação, usado para dar ritmo à prova antes das pegadinhas."
    }
  },
  {
    id: "TI-128", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — gerenciamento de pacotes",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.7,
    enunciado: "A instalação de um pacote por meio do comando dpkg -i, em sistemas Debian, resolve automaticamente as dependências do pacote, buscando nos repositórios configurados os componentes adicionais necessários ao seu funcionamento.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "dpkg -i ... resolve automaticamente as dependências",
    cognitivo: {
      motivo: "Cobrar a diferença entre a ferramenta de baixo nível (dpkg) e a de alto nível (apt).",
      palavraCritica: "resolve automaticamente as dependências",
    },
    comentario: {
      resolucao: "ERRADO. O dpkg opera apenas sobre o arquivo .deb indicado: ele instala, registra o pacote e ADVERTE sobre dependências não satisfeitas, mas não vai buscá-las. Quem consulta repositórios e resolve a árvore de dependências é o apt (daí o clássico apt -f install para consertar o que o dpkg deixou pendente). O mesmo vale, do outro lado, para rpm em relação ao dnf.",
      fundamento: "dpkg(1) x apt(8) — ferramenta de baixo nível x gerenciador com resolução de dependências.",
      macete: "dpkg/rpm instalam o arquivo. apt/dnf entendem o ecossistema.",
      erroComum: "Tratar dpkg e apt como sinônimos.",
      comoBancaPensa: "Atribui à ferramenta de baixo nível a capacidade que só a de alto nível tem."
    }
  },
  {
    id: "TI-129", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — atualização do kernel",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.83,
    enunciado: "No Linux, a aplicação de atualizações de segurança nunca demanda a reinicialização do sistema, já que o modelo modular do kernel permite substituir em tempo de execução qualquer componente atualizado.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "nunca demanda a reinicialização ... qualquer componente",
    cognitivo: {
      motivo: "Cobrar o limite entre atualização de pacotes em espaço de usuário e substituição da imagem do kernel.",
      palavraCritica: "nunca ... qualquer componente",
    },
    comentario: {
      resolucao: "ERRADO. A maioria das atualizações de espaço de usuário realmente dispensa reboot (basta reiniciar o serviço afetado), mas a troca da imagem do kernel exige reinicialização para que o novo núcleo seja carregado. Módulos podem ser recarregados a quente, e soluções de live patching (kpatch, ksplice, kGraft) aplicam certas correções sem reboot — mas são exceções, com escopo limitado, e não cobrem uma atualização completa de versão do kernel.",
      fundamento: "Ciclo de atualização de distribuições Linux; utilitários de verificação como needrestart e /var/run/reboot-required.",
      macete: "Mudou o kernel, reinicia. Live patching é exceção, não regra.",
      erroComum: "Generalizar o 'Linux não precisa reiniciar' para todos os casos, inclusive kernel.",
      comoBancaPensa: "Pega um lugar-comum verdadeiro em parte e o transforma em regra absoluta com 'nunca' e 'qualquer'."
    }
  },
  {
    id: "TI-130", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — atualização do kernel",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.65,
    enunciado: "Somente as correções aplicadas ao kernel exigem, em regra, a reinicialização do sistema Linux; atualizações de bibliotecas compartilhadas, como a libssl, podem ser aplicadas sem reboot, embora exijam o reinício dos serviços que as mantinham carregadas em memória.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "Somente as correções ao kernel ... exigem reinicialização ... bibliotecas ... reinício dos serviços",
    cognitivo: {
      motivo: "Contraexemplo: um 'somente' tecnicamente correto, que exige distinguir reboot de restart de serviço.",
      palavraCritica: "Somente ... embora exijam o reinício dos serviços",
    },
    comentario: {
      resolucao: "CERTO. A afirmação é precisa. A troca do kernel é o caso que efetivamente demanda reboot. Bibliotecas compartilhadas são atualizadas em disco sem reiniciar a máquina, mas os processos que já as carregaram continuam usando a versão antiga em memória — por isso é necessário reiniciar tais serviços (o needrestart existe justamente para apontá-los). Distinguir 'reiniciar a máquina' de 'reiniciar o serviço' é o que sustenta o item.",
      fundamento: "Gestão de atualizações em Linux — mapeamento de bibliotecas em memória e ferramentas como needrestart/lsof.",
      macete: "Kernel → reboot. Biblioteca → restart do serviço. Não é a mesma coisa.",
      erroComum: "Marcar ERRADO por reflexo diante do 'somente', sem avaliar se a restrição procede.",
      comoBancaPensa: "Usa uma palavra que costuma indicar armadilha em um enunciado que, desta vez, é verdadeiro."
    }
  },

  /* ===== REDE ===== */
  {
    id: "TI-131", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — comandos de rede",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de sujeito)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.88,
    enunciado: "Em distribuições Linux, o comando ipconfig exibe as configurações das interfaces de rede, ao passo que, no Windows, essa mesma função cabe ao comando ifconfig.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "Linux ... ipconfig ... Windows ... ifconfig",
    cognitivo: {
      motivo: "Cobrar o pareamento correto entre comando e sistema operacional.",
      palavraCritica: "Linux, o comando ipconfig",
    },
    comentario: {
      resolucao: "ERRADO. Os comandos estão trocados: no Linux usa-se ifconfig (do pacote net-tools, hoje legado) ou, preferencialmente, o comando ip do iproute2; no Windows, ipconfig. A troca é a pegadinha mais repetida do tema, porque os nomes são quase idênticos.",
      fundamento: "net-tools/iproute2 no Linux; utilitário ipconfig no Windows.",
      macete: "IPconfig = Windows. IFconfig = Linux (IF de interface). Moderno no Linux: ip addr.",
      erroComum: "Confiar na semelhança dos nomes e não conferir qual pertence a qual sistema.",
      comoBancaPensa: "Troca os sujeitos de forma simétrica, o que dá aparência de simetria correta ao item."
    }
  },
  {
    id: "TI-132", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — comandos de rede",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.71,
    enunciado: "Nas distribuições Linux atuais, os utilitários do pacote net-tools, entre eles o ifconfig e o netstat, encontram-se em estado de obsolescência, tendo sido sucedidos, respectivamente, pelos comandos ip e ss, do pacote iproute2.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "net-tools ... obsolescência ... sucedidos ... ip e ss",
    cognitivo: {
      motivo: "Cobrar a substituição do net-tools pelo iproute2, tema atual e cobrado em provas recentes.",
      palavraCritica: "sucedidos, respectivamente, pelos comandos ip e ss",
    },
    comentario: {
      resolucao: "CERTO. O net-tools está em manutenção mínima há anos e várias distribuições já não o instalam por padrão. O iproute2 traz o ip (endereços, rotas, links, túneis) e o ss (sockets), este último mais rápido que o netstat por consultar o kernel via netlink. Em uma máquina recente, digitar ifconfig pode simplesmente retornar 'command not found'.",
      fundamento: "Projetos net-tools e iproute2; políticas de pacotes das distribuições atuais.",
      macete: "ifconfig → ip addr. netstat → ss. route → ip route.",
      erroComum: "Supor que ifconfig e netstat continuam sendo o padrão nas distribuições modernas.",
      comoBancaPensa: "Cobra atualização de ferramental, punindo quem estudou por material antigo."
    }
  },
  {
    id: "TI-133", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — resolução de nomes",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.63,
    enunciado: "No Linux, o arquivo /etc/resolv.conf contém o mapeamento estático entre nomes de máquinas e endereços IP consultado antes do DNS, enquanto o /etc/hosts registra os servidores de nomes utilizados pelo sistema.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "/etc/resolv.conf ... mapeamento estático ... /etc/hosts ... servidores de nomes",
    cognitivo: {
      motivo: "Cobrar a função de cada arquivo de resolução de nomes pela inversão dos dois.",
      palavraCritica: "resolv.conf ... mapeamento estático",
    },
    comentario: {
      resolucao: "ERRADO. Os papéis estão invertidos. O /etc/hosts é a tabela estática nome→IP, tradicionalmente consultada antes do DNS; o /etc/resolv.conf lista os servidores DNS (diretivas nameserver) e domínios de busca. A ordem de consulta entre as fontes é definida em /etc/nsswitch.conf. Vale notar que a adulteração do /etc/hosts é técnica corriqueira de malware para sequestrar destinos.",
      fundamento: "hosts(5), resolv.conf(5) e nsswitch.conf(5).",
      macete: "hosts = a lista de apelidos. resolv.conf = o telefone do DNS.",
      erroComum: "Trocar os dois arquivos, que aparecem sempre no mesmo contexto.",
      comoBancaPensa: "Inverte dois arquivos vizinhos, mantendo descrições individualmente corretas."
    }
  },

  /* ===== SELINUX E ENDURECIMENTO ===== */
  {
    id: "TI-134", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — controle de acesso obrigatório (MAC)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.79,
    enunciado: "O SELinux implementa controle de acesso obrigatório (MAC), no qual as decisões decorrem de uma política definida centralmente e não podem ser alteradas pelo proprietário do recurso, diferentemente do modelo discricionário (DAC) das permissões POSIX tradicionais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "controle de acesso obrigatório ... não podem ser alteradas pelo proprietário",
    cognitivo: {
      motivo: "Cobrar a distinção MAC x DAC, base conceitual de todo o tema SELinux.",
      palavraCritica: "não podem ser alteradas pelo proprietário do recurso",
    },
    comentario: {
      resolucao: "CERTO. No DAC (permissões clássicas), o dono do arquivo decide quem acessa — pode inclusive abri-lo para todos. No MAC do SELinux, a política é definida pelo administrador de segurança e vale mesmo contra a vontade do dono: um processo confinado só acessa o que seu domínio permitir. Os dois modelos operam em conjunto — a negação por qualquer um deles basta para bloquear o acesso.",
      fundamento: "Modelos de controle de acesso DAC x MAC; arquitetura do SELinux (LSM no kernel Linux).",
      macete: "DAC: o dono decide. MAC: a política decide, e o dono não desfaz.",
      erroComum: "Tratar SELinux como uma camada extra de permissões que o dono ajusta.",
      comoBancaPensa: "Item conceitual correto que serve de base para as pegadinhas seguintes sobre modos do SELinux."
    }
  },
  {
    id: "TI-135", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Android — SELinux",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.85,
    enunciado: "Nas versões estáveis do Android a partir da 5.0, o SELinux permanece em modo permissivo, limitando-se a registrar em log as violações de política, sem bloquear efetivamente os acessos indevidos.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "permanece em modo permissivo ... sem bloquear efetivamente",
    cognitivo: {
      motivo: "Cobrar o modo de operação do SELinux no Android, recorte que a banca repete.",
      palavraCritica: "modo permissivo",
    },
    comentario: {
      resolucao: "ERRADO. Desde o Android 5.0 (Lollipop), o SELinux opera em modo ENFORCING de forma plena: a política é efetivamente aplicada e os acessos que a violam são bloqueados, além de registrados. O modo permissivo — que apenas registra — foi etapa de transição nas versões 4.3/4.4 e hoje é usado apenas em builds de desenvolvimento. Trocar enforcing por permissive é exatamente o erro plantado.",
      fundamento: "Documentação de segurança da plataforma Android — SELinux full enforcement desde a versão 5.0.",
      macete: "Permissive registra; enforcing bloqueia. Android 5.0+ = enforcing.",
      erroComum: "Achar que o SELinux no Android serve só para auditoria.",
      comoBancaPensa: "Descreve corretamente o modo permissivo e o atribui à versão errada, aproveitando que o candidato reconhece os termos."
    }
  },
  {
    id: "TI-136", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Linux — controle de acesso obrigatório (MAC)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.6,
    enunciado: "O AppArmor, adotado por padrão em distribuições como o Ubuntu, aplica suas políticas com base em rótulos de segurança atribuídos aos inodes dos arquivos, ao passo que o SELinux confina os programas por meio de perfis vinculados ao caminho do executável.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "AppArmor ... rótulos ... SELinux ... caminho do executável",
    cognitivo: {
      motivo: "Cobrar a diferença de mecanismo entre os dois principais LSMs, novamente por inversão.",
      palavraCritica: "AppArmor ... rótulos ... SELinux ... caminho",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. O SELinux é baseado em RÓTULOS (labels) persistidos como atributos estendidos dos arquivos — daí a necessidade de relabel após certas operações. O AppArmor é baseado em CAMINHO (path-based): cada perfil descreve o que o executável em determinado caminho pode acessar, o que o torna mais simples de escrever e mais sensível a movimentações de arquivos.",
      fundamento: "Linux Security Modules — SELinux (label-based) x AppArmor (path-based).",
      macete: "SELinux = etiqueta colada no arquivo. AppArmor = endereço do programa.",
      erroComum: "Saber que ambos são MAC, mas não distinguir o critério de cada um.",
      comoBancaPensa: "Inverte a característica definidora de dois mecanismos frequentemente citados lado a lado."
    }
  },

  /* ===== ANDROID: ARQUITETURA E SEGURANÇA ===== */
  {
    id: "TI-137", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Android — sistema de arquivos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.84,
    enunciado: "O Android adota o NTFS como sistema de arquivos padrão de sua partição de dados, escolha justificada pelo suporte nativo desse sistema a permissões granulares e pela compatibilidade com mídias removíveis.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "NTFS como sistema de arquivos padrão",
    cognitivo: {
      motivo: "Cobrar o sistema de arquivos real do Android, que herda o ecossistema Linux.",
      palavraCritica: "NTFS ... padrão",
    },
    comentario: {
      resolucao: "ERRADO. O NTFS é da Microsoft e não é o padrão do Android. Como o Android é construído sobre o kernel Linux, sua partição de dados usa ext4 e, em muitos aparelhos, F2FS (otimizado para memória flash). Cartões SD e mídias removíveis costumam vir formatados em FAT32 ou exFAT, por compatibilidade — mas isso não os torna o sistema padrão do aparelho.",
      fundamento: "Arquitetura da plataforma Android — kernel Linux e sistemas de arquivos ext4/F2FS.",
      macete: "Android é Linux por baixo: ext4/F2FS. NTFS é Windows.",
      erroComum: "Associar 'sistema de arquivos com permissões' automaticamente ao NTFS.",
      comoBancaPensa: "Oferece uma justificativa tecnicamente elogiosa e verdadeira sobre o NTFS para legitimar a atribuição errada."
    }
  },
  {
    id: "TI-138", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Android — gerenciamento de aplicativos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.82,
    enunciado: "No Android, o PackageManager responde pela instalação, atualização e remoção de aplicativos, verificando a assinatura digital do pacote .apk, de modo que uma atualização só é aceita se estiver assinada com a mesma chave do aplicativo já instalado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "assinatura digital ... mesma chave do aplicativo já instalado",
    cognitivo: {
      motivo: "Cobrar o papel do PackageManager e a regra de continuidade de assinatura entre versões.",
      palavraCritica: "só é aceita se estiver assinada com a mesma chave",
    },
    comentario: {
      resolucao: "CERTO. Todo APK precisa ser assinado, e o PackageManager valida a assinatura na instalação. A regra de continuidade é essencial: se a atualização vier assinada com chave diferente, ela é recusada — é o que impede que um terceiro publique uma 'atualização' maliciosa por cima de um app legítimo. Por isso a perda da chave de assinatura obriga o desenvolvedor a publicar o aplicativo como um pacote novo.",
      fundamento: "Modelo de segurança do Android — assinatura de aplicativos (APK Signature Scheme) e verificação pelo PackageManager.",
      macete: "Mesma chave, mesma identidade. Chave diferente = app diferente.",
      erroComum: "Achar que a assinatura só é conferida na primeira instalação.",
      comoBancaPensa: "Item correto que avança um passo além do óbvio, cobrando a consequência prática da assinatura."
    }
  },
  {
    id: "TI-139", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Android — isolamento de aplicativos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.76,
    enunciado: "O isolamento entre aplicativos no Android apoia-se no próprio modelo de usuários do Linux: a cada aplicativo instalado é atribuído um identificador de usuário (UID) distinto, de modo que os dados privados de um aplicativo ficam inacessíveis aos demais pelas permissões do sistema de arquivos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "identificador de usuário (UID) distinto",
    cognitivo: {
      motivo: "Cobrar o fundamento do sandbox do Android, que é o modelo POSIX de UIDs e não uma máquina virtual isolada.",
      palavraCritica: "modelo de usuários do Linux ... UID distinto",
    },
    comentario: {
      resolucao: "CERTO. O sandbox do Android é imposto pelo kernel: cada aplicativo recebe um UID próprio na instalação e seu diretório em /data/data pertence a esse UID. Assim, o isolamento não depende de boa conduta do aplicativo — é a mesma separação que impede um usuário Linux de ler os arquivos de outro. Sobre essa base assentam-se ainda o SELinux (MAC) e o modelo de permissões da plataforma.",
      fundamento: "Modelo de segurança do Android — Application Sandbox baseado em UID do kernel Linux.",
      macete: "No Android, cada app é um 'usuário' diferente do Linux.",
      erroComum: "Imaginar que o isolamento vem apenas da máquina virtual (ART), e não do kernel.",
      comoBancaPensa: "Item correto que exige entender que o Android reaproveita o modelo de segurança do Linux."
    }
  },
  {
    id: "TI-140", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Android — permissões de aplicativos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.8,
    enunciado: "No Android, todas as permissões declaradas por um aplicativo são concedidas em bloco no momento da instalação, não sendo possível ao usuário revogá-las individualmente sem desinstalar o aplicativo.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "concedidas em bloco no momento da instalação ... não sendo possível ... revogá-las",
    cognitivo: {
      motivo: "Cobrar a mudança para permissões em tempo de execução, introduzida no Android 6.0.",
      palavraCritica: "todas ... em bloco ... não sendo possível",
    },
    comentario: {
      resolucao: "ERRADO. Esse era o modelo até o Android 5.1. A partir do Android 6.0 (Marshmallow), as permissões classificadas como perigosas (câmera, microfone, localização, contatos, armazenamento) passaram a ser solicitadas em tempo de execução e podem ser concedidas ou revogadas individualmente nas configurações. Versões posteriores foram além, com concessão apenas 'durante o uso do app', permissão única e revogação automática de apps sem uso.",
      fundamento: "Modelo de permissões do Android — runtime permissions a partir da API 23 (Android 6.0).",
      macete: "Até o 5.1: tudo na instalação. Do 6.0 em diante: pergunta na hora e dá para revogar.",
      erroComum: "Estudar por material anterior ao Android 6.0.",
      comoBancaPensa: "Descreve um modelo que já foi verdadeiro e o apresenta como atual, reforçado por um absoluto."
    }
  },
  {
    id: "TI-141", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Android — arquitetura",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.62,
    enunciado: "O Android Runtime (ART), que substituiu a máquina virtual Dalvik, executa os aplicativos exclusivamente por interpretação do bytecode a cada execução, abordagem que reduz o espaço ocupado em armazenamento em detrimento do desempenho.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "exclusivamente por interpretação do bytecode a cada execução",
    cognitivo: {
      motivo: "Cobrar o modelo de execução do ART (AOT + JIT) em oposição à interpretação pura.",
      palavraCritica: "exclusivamente por interpretação",
    },
    comentario: {
      resolucao: "ERRADO. O ART introduziu a compilação antecipada (AOT), que converte o bytecode em código nativo na instalação, elevando o desempenho ao custo de mais espaço e de instalação mais demorada — exatamente o inverso do que o item afirma. Versões posteriores adotaram um modelo híbrido, combinando interpretação, JIT e AOT guiada por perfis de uso. Interpretação pura era característica do antigo Dalvik.",
      fundamento: "Arquitetura da plataforma Android — Android Runtime (ART), compilação AOT e JIT.",
      macete: "Dalvik interpretava/JIT. ART compila antes (AOT) e ganha velocidade, gastando espaço.",
      erroComum: "Inverter a troca entre desempenho e armazenamento.",
      comoBancaPensa: "Mantém o nome certo da tecnologia e inverte a relação custo-benefício que ela representa."
    }
  },
  {
    id: "TI-142", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Android — inicialização segura",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.68,
    enunciado: "O recurso de inicialização verificada (Verified Boot) do Android estabelece uma cadeia de confiança em que cada etapa do processo de inicialização verifica criptograficamente a integridade da etapa seguinte, permitindo detectar alterações não autorizadas no sistema.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "cadeia de confiança ... cada etapa verifica ... a etapa seguinte",
    cognitivo: {
      motivo: "Cobrar o conceito de cadeia de confiança na inicialização, relevante para exame de aparelhos apreendidos.",
      palavraCritica: "verifica criptograficamente a integridade da etapa seguinte",
    },
    comentario: {
      resolucao: "CERTO. O Verified Boot parte de uma raiz de confiança em hardware e valida, em cadeia, bootloader, kernel e partições do sistema por meio de assinaturas e hashes (dm-verity). Detectada uma alteração, o aparelho exibe aviso, entra em estado degradado ou se recusa a inicializar, conforme a configuração. Em perícia, o estado do Verified Boot é indício relevante de que o dispositivo foi modificado — por root ou por ROM alternativa.",
      fundamento: "Documentação de segurança da plataforma Android — Verified Boot e dm-verity.",
      macete: "Cada elo confere o próximo. Quebrou a corrente, o aparelho avisa.",
      erroComum: "Confundir Verified Boot com criptografia dos dados do usuário — são camadas distintas.",
      comoBancaPensa: "Item correto que descreve a arquitetura de forma completa, sem exageros a corrigir."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE64);

/* Frequência de temas — TI e Segurança Cibernética (Módulo Linux/Android) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "TI e Segurança Cibernética");
  if (!d) { d = { disciplina: "TI e Segurança Cibernética", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Linux — permissões, bits especiais e umask", freq: 82, tendencia: "alta", prob: 0.82 },
    { tema: "Linux — processos, sinais e systemd", freq: 78, tendencia: "alta", prob: 0.78 },
    { tema: "Linux — pacotes, atualizações e comandos de rede", freq: 80, tendencia: "media", prob: 0.8 },
    { tema: "Android — SELinux, sandbox, permissões e Verified Boot", freq: 77, tendencia: "alta", prob: 0.77 },
  );
})();
