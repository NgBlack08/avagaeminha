/* =====================================================================
   QUESTLAB — Lote 42: MICROSOFT WINDOWS 10/11
   Baseado em material de terceiros contendo 12 questões REAIS de
   Certo/Errado de prova anterior da CEBRASPE sobre Windows 10/11
   (com gabarito oficial e dicas de revisão anexadas). Diferentemente
   de lotes anteriores (fonte em múltipla escolha), aqui a fonte já
   era no formato C/E — ainda assim, nenhuma frase foi copiada:
   cada enunciado ORIGINAL foi redigido do zero, testando o mesmo
   tema e a mesma resposta correta identificada pela banca, com um
   PAR C/E adicional (versão espelhada) para reforçar cada conceito.
   Gabarito de cada item novo verificado de forma independente.
   22 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE42 = [

  /* ===== MENU INICIAR (WINDOWS 11) ===== */
  {
    id: "TI-060", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows 11 — Menu Iniciar",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.82,
    enunciado: "No Menu Iniciar do Windows 11, é possível arrastar um ícone de aplicativo fixado sobre outro para criar automaticamente uma pasta, recurso que não existia da mesma forma no Windows 10, o qual organizava os aplicativos em grupos de blocos dinâmicos (Live Tiles).",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "arrastar um ícone sobre outro ... criar automaticamente uma pasta",
    cognitivo: {
      motivo: "Cobrar o recurso de criação de pastas no Menu Iniciar do Windows 11 e a diferença em relação ao Windows 10.",
      palavraCritica: "criar automaticamente uma pasta ... Live Tiles",
    },
    comentario: {
      resolucao: "CERTO. No Windows 11, arrastar um ícone sobre outro na seção de aplicativos fixados cria automaticamente uma pasta, recurso que não existia dessa forma no Windows 10, que organizava os aplicativos fixados apenas em grupos de blocos dinâmicos (Live Tiles).",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (recursos do Menu Iniciar do Windows 11).",
      macete: "Pastas no Menu Iniciar = novidade do Windows 11, não existia no 10.",
      erroComum: "Achar que o recurso de pastas por arraste também existia no Windows 10.",
      comoBancaPensa: "Item 'limpo' que descreve corretamente uma novidade visual do Windows 11 em comparação ao antecessor."
    }
  },
  {
    id: "TI-061", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows 11 — Menu Iniciar",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.78,
    enunciado: "O Menu Iniciar do Windows 11 não permite a criação de pastas para organizar os ícones dos aplicativos fixados, sendo esse recurso exclusivo do Windows 10, que já disponibilizava tal funcionalidade por meio da seção de grupos de blocos dinâmicos (Live Tiles).",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "não permite ... exclusivo do Windows 10",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que é justamente o Windows 11 (e não o 10) que introduziu as pastas de aplicativos fixados.",
      palavraCritica: "exclusivo do Windows 10",
    },
    comentario: {
      resolucao: "ERRADO. É o Windows 11, e não o Windows 10, que permite a criação de pastas para organizar os ícones dos aplicativos fixados no Menu Iniciar. O Windows 10 organizava os aplicativos fixados apenas em grupos de blocos dinâmicos (Live Tiles), sem essa estrutura de pastas.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (recursos do Menu Iniciar do Windows 11).",
      macete: "Pastas no Menu Iniciar = Windows 11 (novidade), não o Windows 10.",
      erroComum: "Inverter qual versão do Windows introduziu o recurso de pastas no Menu Iniciar.",
      comoBancaPensa: "Troca o sujeito da afirmação (Windows 11 → Windows 10) para induzir o erro."
    }
  },

  /* ===== BARRA DE TAREFAS (WINDOWS 11) ===== */
  {
    id: "TI-062", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows 11 — barra de tarefas",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "No Windows 11, a barra de tarefas apresenta, por padrão, os ícones centralizados, incluindo o botão Iniciar, sendo possível, por meio das configurações da barra de tarefas, realinhar esses ícones à esquerda, caso o usuário prefira o estilo tradicional.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "centralizados por padrão ... realinhar à esquerda",
    cognitivo: {
      motivo: "Cobrar o novo design centralizado da barra de tarefas do Windows 11 e a possibilidade de personalização.",
      palavraCritica: "por padrão ... possível ... realinhar",
    },
    comentario: {
      resolucao: "CERTO. A centralização dos ícones é a mudança visual mais evidente do Windows 11 frente ao 10, e é reversível pela própria interface: Configurações → Personalização → Barra de tarefas → Comportamentos da barra de tarefas → Alinhamento → Esquerda. A pegadinha do assunto está no grau: a banca costuma afirmar que o alinhamento é fixo, ou que voltar ao estilo tradicional exige edição de registro ou programa de terceiros. Não exige — é opção nativa, a dois cliques.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (barra de tarefas do Windows 11).",
      macete: "Centralizado é só o padrão — dá para mudar para a esquerda nas configurações.",
      erroComum: "Achar que o alinhamento centralizado é fixo e não pode ser alterado.",
      comoBancaPensa: "Item 'limpo' que combina a descrição do padrão visual com a possibilidade de personalização."
    }
  },
  {
    id: "TI-063", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows 11 — barra de tarefas",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "No Windows 11, os ícones da barra de tarefas, incluindo o botão Iniciar, são exibidos exclusivamente na posição centralizada, não havendo, nas configurações do sistema, qualquer opção para realinhá-los à posição à esquerda utilizada no Windows 10.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "exclusivamente ... não havendo ... qualquer opção",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o alinhamento centralizado do Windows 11 pode ser alterado pelo usuário.",
      palavraCritica: "exclusivamente ... não havendo ... qualquer opção",
    },
    comentario: {
      resolucao: "ERRADO. Embora o layout centralizado seja o padrão do Windows 11, o sistema permite, por meio das configurações da barra de tarefas, realinhar os ícones à esquerda — a centralização não é exclusiva nem imutável, ao contrário do que afirma o item.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (barra de tarefas do Windows 11).",
      macete: "Nunca existe 'sem opção nenhuma' quando se trata de configuração de interface no Windows 11.",
      erroComum: "Tratar o padrão visual do sistema como uma imposição sem alternativa de personalização.",
      comoBancaPensa: "Usa 'exclusivamente' e 'qualquer opção' para transformar um padrão configurável em algo fixo."
    }
  },

  /* ===== SNAP LAYOUTS ===== */
  {
    id: "TI-064", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows 11 — Snap Layouts",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.82,
    enunciado: "O recurso Snap Layouts do Windows 11 oferece opções predefinidas para organizar várias janelas abertas na tela, podendo ser acionado pelo atalho de teclado Windows+Z ou ao posicionar o cursor do mouse sobre o botão Maximizar de uma janela.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Snap Layouts ... Windows+Z ... botão Maximizar",
    cognitivo: {
      motivo: "Cobrar a definição correta do Snap Layouts e suas formas de acionamento.",
      palavraCritica: "Windows+Z ... botão Maximizar",
    },
    comentario: {
      resolucao: "CERTO. O Snap Layouts oferece opções predefinidas para organizar várias janelas na tela de forma eficiente, podendo ser acionado pelo atalho Windows+Z ou ao posicionar o cursor sobre o botão Maximizar de uma janela, entre outras formas.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (Snap Layouts do Windows 11).",
      macete: "Snap Layouts: Win+Z ou passar o mouse no Maximizar.",
      erroComum: "Confundir o atalho do Snap Layouts com o da Visão de Tarefas (Windows+Tab).",
      comoBancaPensa: "Item 'limpo' sobre um recurso amplamente cobrado do Windows 11."
    }
  },
  {
    id: "TI-065", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows 11 — Snap Layouts",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "O recurso Snap Layouts do Windows 11 é acionado exclusivamente pelo atalho de teclado Windows+Tab, sendo essa a mesma combinação de teclas responsável por exibir a Visão de Tarefas com as janelas abertas em miniatura.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "Windows+Tab ... Visão de Tarefas",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o Snap Layouts é acionado por Windows+Z, e não por Windows+Tab (atalho da Visão de Tarefas).",
      palavraCritica: "Windows+Tab",
    },
    comentario: {
      resolucao: "ERRADO. O Snap Layouts é acionado pelo atalho Windows+Z (entre outras formas), e não por Windows+Tab. Este último abre a Visão de Tarefas, recurso distinto, destinado à alternância entre janelas abertas e áreas de trabalho virtuais.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (Snap Layouts x Visão de Tarefas no Windows 11).",
      macete: "Win+Z = organizar janelas (Snap). Win+Tab = trocar de janela (Visão de Tarefas).",
      erroComum: "Trocar o atalho do Snap Layouts pelo da Visão de Tarefas.",
      comoBancaPensa: "Troca dois conceitos próximos (ambos relacionados a gerenciamento de janelas) e seus respectivos atalhos."
    }
  },

  /* ===== EXTENSÃO DE ARQUIVO x CONVERSÃO ===== */
  {
    id: "TI-066", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows Explorer — extensões de arquivo",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.84,
    enunciado: "No Windows Explorer, ao renomear um arquivo e alterar manualmente sua extensão (por exemplo, de .jpg para .png), o sistema operacional apenas modifica o rótulo do nome do arquivo, sem converter seu conteúdo ou ajustar sua estrutura interna, podendo o arquivo se tornar inconsistente ou não abrir corretamente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "apenas modifica o rótulo ... sem converter o conteúdo",
    cognitivo: {
      motivo: "Cobrar que renomear a extensão de um arquivo não converte seu conteúdo real.",
      palavraCritica: "apenas modifica o rótulo ... sem converter",
    },
    comentario: {
      resolucao: "CERTO. Renomear a extensão de um arquivo no Windows Explorer apenas altera o rótulo do nome exibido, sem converter seu conteúdo nem ajustar sua estrutura interna — o arquivo pode, inclusive, ficar inconsistente ou não abrir corretamente no novo formato indicado pelo nome.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (Windows Explorer, manipulação de extensões de arquivo).",
      macete: "Renomear extensão ≠ converter arquivo. Conversão real exige software específico.",
      erroComum: "Achar que o Windows ajusta a estrutura do arquivo automaticamente ao trocar a extensão no nome.",
      comoBancaPensa: "Item 'limpo' sobre uma pegadinha clássica: rótulo do nome x conteúdo real do arquivo."
    }
  },
  {
    id: "TI-067", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows Explorer — extensões de arquivo",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "No Windows Explorer, ao renomear um arquivo diretamente e modificar sua extensão (por exemplo, de .jpg para .png), o sistema operacional ajusta automaticamente os metadados e a estrutura interna do arquivo para refletir o novo formato indicado no nome, convertendo seu conteúdo de forma transparente ao usuário.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "ajusta automaticamente ... convertendo seu conteúdo",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o Windows não converte o conteúdo do arquivo apenas por renomear a extensão.",
      palavraCritica: "ajusta automaticamente ... convertendo seu conteúdo",
    },
    comentario: {
      resolucao: "ERRADO. Renomear a extensão de um arquivo no Windows Explorer apenas altera o rótulo do nome — não converte o conteúdo nem ajusta metadados ou estrutura interna. A conversão real de formato exige um software apropriado, e não ocorre automaticamente apenas com a renomeação.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (Windows Explorer, manipulação de extensões de arquivo).",
      macete: "Renomear extensão ≠ converter arquivo, mesmo que o item diga 'automaticamente'.",
      erroComum: "Acreditar que o sistema operacional converte o conteúdo do arquivo ao mudar sua extensão no nome.",
      comoBancaPensa: "Repete a pegadinha clássica de forma afirmativa, na tentativa de induzir o candidato ao erro pela repetição."
    }
  },

  /* ===== WINDOWS HELLO E PASSKEYS ===== */
  {
    id: "TI-068", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows 11 — Windows Hello e chaves de acesso",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "No Windows 11, por meio das chaves de acesso (passkeys), é possível utilizar o Windows Hello para iniciar sessão em sites e aplicativos com impressão digital, reconhecimento facial ou PIN, sem a necessidade de digitar senhas, o que torna o processo de autenticação mais rápido e seguro.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "chaves de acesso ... sem necessidade de digitar senhas ... mais seguro",
    cognitivo: {
      motivo: "Cobrar o funcionamento correto das passkeys integradas ao Windows Hello.",
      palavraCritica: "sem necessidade de digitar senhas ... mais seguro",
    },
    comentario: {
      resolucao: "CERTO. As chaves de acesso (passkeys), integradas ao Windows Hello, permitem iniciar sessão em sites e aplicativos por biometria ou PIN, sem necessidade de digitar senhas — tornando o processo de autenticação mais rápido e mais seguro do que o uso tradicional de senhas.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (Windows Hello e chaves de acesso no Windows 11).",
      macete: "Sem senha, com biometria/PIN = mais seguro, não menos.",
      erroComum: "Achar que a ausência de senha torna o login menos seguro.",
      comoBancaPensa: "Item 'limpo' descrevendo corretamente um recurso moderno de autenticação do Windows 11."
    }
  },
  {
    id: "TI-069", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows 11 — Windows Hello e chaves de acesso",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.76,
    enunciado: "As chaves de acesso (passkeys) do Windows 11, ao dispensarem a digitação de senhas para autenticação em sites e aplicativos por meio do Windows Hello, tornam o processo de login menos seguro, uma vez que a ausência de senha elimina uma camada de proteção contra acessos indevidos.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "tornam o processo ... menos seguro",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que as passkeys tornam o login mais seguro, e não menos.",
      palavraCritica: "tornam o processo ... menos seguro",
    },
    comentario: {
      resolucao: "ERRADO. As chaves de acesso (passkeys) tornam o processo de autenticação mais seguro, e não menos — a dispensa da senha ocorre porque a biometria ou o PIN vinculado ao dispositivo oferece proteção superior às senhas tradicionais, que podem ser furtadas ou reutilizadas indevidamente.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (Windows Hello e chaves de acesso no Windows 11).",
      macete: "Passkey = mais segurança, não menos, mesmo sem senha.",
      erroComum: "Associar automaticamente 'sem senha' a 'menos seguro'.",
      comoBancaPensa: "Parte de um fato correto (dispensa de senha) para chegar a uma conclusão errada sobre segurança."
    }
  },

  /* ===== WINDOWS UPDATE ===== */
  {
    id: "TI-070", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows 11 — Windows Update",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.82,
    enunciado: "O Windows 11 continua aplicando atualizações automaticamente por meio do Windows Update, sendo possível ao usuário, por meio de Configurações > Windows Update, apenas verificar a disponibilidade de novas atualizações ou pausar temporariamente o processo, sem desativá-lo por completo com facilidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "continua aplicando atualizações automaticamente ... pausar temporariamente",
    cognitivo: {
      motivo: "Cobrar que o Windows Update automático permanece ativo no Windows 11, com opção apenas de pausa temporária.",
      palavraCritica: "continua aplicando ... automaticamente ... pausar temporariamente",
    },
    comentario: {
      resolucao: "CERTO. O Windows 11 continua aplicando atualizações automaticamente por meio do Windows Update, sendo possível ao usuário apenas verificar manualmente novas atualizações ou pausar temporariamente o processo — não havendo forma simples de desativá-lo por completo.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (Windows Update no Windows 11).",
      macete: "Windows Update: sempre automático; só dá para pausar, não desligar de vez.",
      erroComum: "Achar que o Windows 11 passou a depender de verificação manual para se atualizar.",
      comoBancaPensa: "Item 'limpo' que corrige uma crença comum equivocada sobre o funcionamento do Windows Update."
    }
  },
  {
    id: "TI-071", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows 11 — Windows Update",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "O Windows 11, por questões de segurança, não permite mais que sejam instaladas atualizações automaticamente; assim, para manter o dispositivo seguro e atualizado, o usuário deve, obrigatoriamente, verificar e instalar as atualizações de forma manual por meio de Configurações > Windows Update.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "não permite mais ... obrigatoriamente ... de forma manual",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o Windows Update automático não foi removido do Windows 11.",
      palavraCritica: "não permite mais ... obrigatoriamente",
    },
    comentario: {
      resolucao: "ERRADO. O Windows 11 mantém as atualizações automáticas por meio do Windows Update. A afirmação de que ele 'não permite mais' atualizações automáticas é falsa — a verificação manual existe como opção adicional, mas não substitui nem foi motivada pela eliminação do processo automático.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (Windows Update no Windows 11).",
      macete: "Windows Update automático nunca foi removido do Windows 11.",
      erroComum: "Acreditar que a existência de verificação manual implica a extinção do processo automático.",
      comoBancaPensa: "Usa uma justificativa plausível ('questões de segurança') para tornar crível uma afirmação factualmente falsa."
    }
  },

  /* ===== SESSÕES DE FOCO (APP RELÓGIO) ===== */
  {
    id: "TI-072", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows 11 — Sessões de foco",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "No Windows 11, o aplicativo Relógio disponibiliza o recurso Sessões de foco, por meio do qual o usuário pode definir um período de tempo para bloquear temporariamente notificações, sons e alertas de aplicativos, integrando-se ao recurso Assistente de Foco (Não Perturbe).",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "aplicativo Relógio ... Sessões de foco ... Assistente de Foco",
    cognitivo: {
      motivo: "Cobrar a localização correta do recurso Sessões de foco (app Relógio) e sua integração com o Assistente de Foco.",
      palavraCritica: "aplicativo Relógio",
    },
    comentario: {
      resolucao: "CERTO. O aplicativo Relógio do Windows 11 disponibiliza o recurso Sessões de foco, que permite bloquear temporariamente notificações, sons e alertas de aplicativos por um período definido, integrando-se ao Assistente de Foco (Não Perturbe).",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (Sessões de foco no Windows 11).",
      macete: "Sessões de foco = app Relógio, não Painel de Controle.",
      erroComum: "Localizar o recurso de bloqueio de notificações em um app diferente do Relógio.",
      comoBancaPensa: "Item 'limpo' sobre a localização e a integração de um recurso específico do Windows 11."
    }
  },
  {
    id: "TI-073", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows 11 — Sessões de foco",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.74,
    enunciado: "No Windows 11, o recurso de bloqueio temporário de notificações, sons e alertas de aplicativos, denominado Sessões de foco, está disponível exclusivamente no Painel de Controle clássico do sistema, não havendo qualquer funcionalidade equivalente integrada aos aplicativos nativos do Windows 11.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "exclusivamente no Painel de Controle",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que as Sessões de foco ficam no app Relógio, e não no Painel de Controle.",
      palavraCritica: "exclusivamente no Painel de Controle",
    },
    comentario: {
      resolucao: "ERRADO. O recurso Sessões de foco está disponível no aplicativo Relógio, um app nativo moderno do Windows 11, e não no Painel de Controle clássico, que reúne configurações herdadas de versões anteriores do sistema.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (Sessões de foco no Windows 11).",
      macete: "Sessões de foco: app Relógio, não Painel de Controle.",
      erroComum: "Confundir os aplicativos modernos do Windows 11 com o Painel de Controle clássico.",
      comoBancaPensa: "Atribui o recurso a um componente legado do sistema, incompatível com a proposta moderna do app Relógio."
    }
  },

  /* ===== RENOMEAR ARQUIVOS EM LOTE ===== */
  {
    id: "TI-074", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows — renomeação de arquivos em lote",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "O Windows possui uma função nativa de renomeação em lote, por meio da qual o usuário pode selecionar vários arquivos, pressionar a tecla F2, definir um nome-base e o sistema numera automaticamente os itens (por exemplo, nome (1), nome (2)...), sem necessidade de instalar programas adicionais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "renomeação em lote ... tecla F2 ... sem programas adicionais",
    cognitivo: {
      motivo: "Cobrar que o Windows possui renomeação em lote nativa, sem depender de software de terceiros.",
      palavraCritica: "sem necessidade de instalar programas adicionais",
    },
    comentario: {
      resolucao: "CERTO. Selecionar vários arquivos, pressionar F2, digitar o nome-base e teclar Enter produz nome (1), nome (2), nome (3)... É recurso nativo do Explorer, sem instalar nada. Dois limites do recurso rendem itens ERRADOS: a numeração é automática e sequencial, sem escolher o padrão, o número inicial ou a posição do contador; e o F2 não faz SUBSTITUIÇÃO de trecho do nome — trocar \"rascunho\" por \"final\" em 50 arquivos exige PowerShell, PowerToys ou ferramenta equivalente.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (Windows Explorer, renomeação em lote).",
      macete: "F2 em vários arquivos selecionados = renomeação em lote nativa.",
      erroComum: "Achar que esse recurso depende de um software de terceiros.",
      comoBancaPensa: "Item 'limpo' sobre um recurso nativo pouco conhecido, mas frequentemente cobrado."
    }
  },
  {
    id: "TI-075", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows — renomeação de arquivos em lote",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.76,
    enunciado: "O Windows não possui função nativa para renomear múltiplos arquivos simultaneamente com um padrão comum de nomes, sendo necessário, para essa finalidade, a instalação de programas adicionais de terceiros especializados em renomeação em lote.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "não possui função nativa ... necessário ... programas adicionais",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o Windows já tem renomeação em lote nativa, sem exigir software externo.",
      palavraCritica: "necessário ... programas adicionais",
    },
    comentario: {
      resolucao: "ERRADO. O Windows possui, sim, função nativa de renomeação em lote: basta selecionar vários arquivos, pressionar F2 e definir um nome-base, que o sistema numerará automaticamente — não há necessidade de instalar programas de terceiros para essa finalidade.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (Windows Explorer, renomeação em lote).",
      macete: "F2 + seleção múltipla já resolve — nenhum programa extra é necessário.",
      erroComum: "Criar uma exigência de software externo para uma funcionalidade já nativa do sistema.",
      comoBancaPensa: "Cria uma falsa necessidade de ferramenta externa para uma tarefa que o próprio Windows já resolve."
    }
  },

  /* ===== BOAS PRÁTICAS DE NOMEAÇÃO DE ARQUIVOS ===== */
  {
    id: "TI-076", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Boas práticas de organização de arquivos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "Nomear arquivos com termos genéricos, como 'documento1', 'teste' ou 'final', dificulta a localização e a organização no Windows, sendo mais adequado o uso de nomes descritivos e padronizados, que indiquem, por exemplo, assunto, data e versão do arquivo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "nomes genéricos ... dificulta ... nomes descritivos e padronizados",
    cognitivo: {
      motivo: "Cobrar a boa prática de nomeação descritiva de arquivos para facilitar busca e organização.",
      palavraCritica: "dificulta ... mais adequado ... descritivos e padronizados",
    },
    comentario: {
      resolucao: "CERTO. O ganho não é estético, é funcional: nome descritivo com assunto, data e versão torna o arquivo localizável pela BUSCA e ordenável pela própria listagem — \"contrato_2026-03-14_v2\" se ordena cronologicamente sozinho, enquanto \"final\", \"final2\" e \"final_agora\" não se ordenam por nada. Prefira data no formato ISO (AAAA-MM-DD) exatamente por isso. Cuidado com a inversão da banca: afirmar que o Windows \"impede\" nomes genéricos ou que a nomeação afeta o desempenho do sistema. Não impede e não afeta — é boa prática, não regra técnica.",
      fundamento: "Doutrina de Informática — Gestão e organização de arquivos (boas práticas de nomeação).",
      macete: "Nome genérico dificulta a busca; nome descritivo (assunto/data/versão) facilita.",
      erroComum: "Achar que nomes curtos e genéricos favorecem, e não prejudicam, a busca de arquivos.",
      comoBancaPensa: "Item 'limpo' sobre boas práticas de organização documental, tema recorrente em provas de informática básica."
    }
  },
  {
    id: "TI-077", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Boas práticas de organização de arquivos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 40, probReaparecer: 0.76,
    enunciado: "Nomear arquivos no computador com termos genéricos, como 'documento1', 'teste' ou 'final', constitui prática eficiente de organização, uma vez que esses nomes curtos e padronizados facilitam a busca rápida de arquivos no Windows, independentemente da quantidade de arquivos semelhantes armazenados.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "prática eficiente ... facilitam a busca rápida",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que nomes genéricos dificultam, e não facilitam, a busca e a organização.",
      palavraCritica: "prática eficiente ... facilitam a busca rápida",
    },
    comentario: {
      resolucao: "ERRADO. Nomear arquivos como 'documento1', 'teste' ou 'final' é prática pouco eficiente, pois esses nomes genéricos não descrevem o conteúdo do arquivo, dificultando a busca e a organização — especialmente quando há muitos arquivos semelhantes armazenados.",
      fundamento: "Doutrina de Informática — Gestão e organização de arquivos (boas práticas de nomeação).",
      macete: "Nome genérico ≠ padronizado. Ele dificulta, não facilita, a busca.",
      erroComum: "Confundir simplicidade do nome com eficiência de organização.",
      comoBancaPensa: "Qualifica erroneamente como 'eficiente' e 'padronizado' uma prática de nomeação reconhecidamente inadequada."
    }
  },

  /* ===== COMPACTAÇÃO ZIP NATIVA ===== */
  {
    id: "TI-078", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows — compactação de arquivos (ZIP)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 40, probReaparecer: 0.82,
    enunciado: "O Windows possui suporte nativo para arquivos no formato ZIP, sendo possível compactar (por meio da opção Enviar para > Pasta compactada) e descompactar arquivos nesse formato sem a necessidade de instalar programas adicionais, ao contrário de formatos como RAR e 7z, que exigem software específico.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "suporte nativo ... ZIP ... RAR e 7z ... exigem software específico",
    cognitivo: {
      motivo: "Cobrar que o Windows compacta/descompacta ZIP nativamente, ao contrário de RAR e 7z.",
      palavraCritica: "suporte nativo ... RAR e 7z ... exigem software específico",
    },
    comentario: {
      resolucao: "CERTO. O Windows possui suporte nativo ao formato ZIP, permitindo compactar e descompactar arquivos sem programas adicionais — ao contrário dos formatos RAR e 7z, que exigem a instalação de softwares específicos, como o WinRAR e o 7-Zip.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (compactação de arquivos no Windows).",
      macete: "ZIP é nativo; RAR e 7z não são.",
      erroComum: "Achar que RAR e 7z também possuem suporte nativo no Windows, como o ZIP.",
      comoBancaPensa: "Item 'limpo' que contrasta corretamente o suporte nativo do ZIP com a dependência de software do RAR/7z."
    }
  },
  {
    id: "TI-079", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows — compactação de arquivos (ZIP)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "O Windows não possui suporte nativo para compactação ou descompactação de arquivos em nenhum formato, sendo necessária, inclusive para arquivos ZIP, a instalação de programas de terceiros, como o WinRAR ou o 7-Zip, para realizar essas operações.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "não possui suporte nativo ... nenhum formato ... inclusive para arquivos ZIP",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o Windows já compacta e descompacta ZIP nativamente, sem depender de terceiros.",
      palavraCritica: "inclusive para arquivos ZIP",
    },
    comentario: {
      resolucao: "ERRADO. O Windows possui suporte nativo ao formato ZIP, permitindo compactar e descompactar arquivos sem qualquer programa adicional. A exigência de softwares de terceiros, como WinRAR ou 7-Zip, aplica-se apenas a formatos como RAR e 7z — não ao ZIP.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (compactação de arquivos no Windows).",
      macete: "ZIP nunca precisou de programa de terceiros no Windows.",
      erroComum: "Estender a exigência de software de terceiros (válida para RAR/7z) também ao formato ZIP.",
      comoBancaPensa: "Generaliza indevidamente uma exigência real (RAR/7z) para um formato que já é suportado nativamente (ZIP)."
    }
  },

  /* ===== MOVER ARQUIVOS ENTRE UNIDADES E PERMISSÕES NTFS ===== */
  {
    id: "TI-080", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows — permissões NTFS ao mover arquivos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "No Windows, quando um arquivo é movido entre pastas localizadas em unidades (volumes) diferentes, esse arquivo passa a herdar as permissões NTFS da pasta de destino, uma vez que, tecnicamente, essa operação equivale a copiar o arquivo para o novo local e, em seguida, apagar o original.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "unidades diferentes ... herda as permissões ... copiar e apagar",
    cognitivo: {
      motivo: "Cobrar que mover arquivos entre volumes diferentes faz o arquivo herdar as permissões do destino (por ser, tecnicamente, copiar+apagar).",
      palavraCritica: "unidades diferentes ... herda as permissões ... copiar e apagar",
    },
    comentario: {
      resolucao: "CERTO. Ao mover um arquivo entre unidades (volumes) diferentes, a operação equivale, tecnicamente, a copiar o arquivo para o destino e apagar o original — por isso, o arquivo passa a herdar as permissões NTFS da pasta de destino, e não mantém as permissões originais.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (Windows, sistema de arquivos NTFS).",
      macete: "Unidades diferentes: mover = copiar + apagar → herda permissão do destino.",
      erroComum: "Achar que as permissões NTFS originais são sempre preservadas, independentemente do volume.",
      comoBancaPensa: "Item 'limpo' que explica corretamente a exceção técnica (mover entre volumes = copiar+apagar) que gera a herança de permissões."
    }
  },
  {
    id: "TI-081", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Windows — permissões NTFS ao mover arquivos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Windows 10/11)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "Quando um arquivo é movido entre pastas localizadas em unidades (volumes) diferentes no Windows, esse arquivo mantém integralmente todas as suas permissões NTFS originais, independentemente do volume de destino, já que a operação de mover é sempre idêntica à de copiar dentro do mesmo volume.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "mantém integralmente ... independentemente do volume ... sempre idêntica",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que mover entre volumes diferentes NÃO preserva as permissões originais (o arquivo herda as do destino).",
      palavraCritica: "mantém integralmente ... independentemente do volume",
    },
    comentario: {
      resolucao: "ERRADO. Ao mover um arquivo entre unidades (volumes) diferentes, o arquivo NÃO mantém suas permissões NTFS originais — ele passa a herdar as permissões da pasta de destino, já que essa operação equivale, tecnicamente, a copiar o arquivo e apagar o original. A preservação das permissões só ocorre quando o movimento é feito dentro do mesmo volume.",
      fundamento: "Doutrina de Informática — Sistemas Operacionais (Windows, sistema de arquivos NTFS).",
      macete: "'Independentemente do volume' é a palavra-chave do erro: o volume, na verdade, faz toda a diferença.",
      erroComum: "Generalizar a preservação de permissões para qualquer cenário de movimentação de arquivos.",
      comoBancaPensa: "Generaliza indevidamente uma regra que só vale para um caso específico (mesmo volume) para todos os casos."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE42);
