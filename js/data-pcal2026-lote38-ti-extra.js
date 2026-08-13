/* =====================================================================
   QUESTLAB — Lote 38: TI E SEGURANÇA CIBERNÉTICA (expansão 2)
   Complementa o lote 28 com temas confirmados via simulado próprio e
   ainda não cobertos: permissões no Linux (chmod), modelo conceitual
   de bancos de dados (DER), linguagem SQL (DML), fundamentos de
   segurança (DDoS x disponibilidade, risco residual), imutabilidade da
   String em Java, gestão de identidades (OAuth2 x OpenID Connect),
   SIEM x PAM, e interceptação de comunicações (Lei 9.296/1996). Itens
   100% originais, com gabarito verificado de forma independente.
   12 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE38 = [

  {
    id: "TI-024", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Permissões em Linux (chmod)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (sistemas operacionais Linux)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.76,
    enunciado: "No sistema operacional Linux, o comando chmod é utilizado exclusivamente para alterar o proprietário de um arquivo ou diretório, não sendo possível, por meio dele, modificar as permissões de leitura, escrita e execução atribuídas a esse arquivo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "chmod ... exclusivamente ... proprietário",
    cognitivo: {
      motivo: "Cobrar a real função do comando chmod, distinta do comando chown.",
      palavraCritica: "exclusivamente ... proprietário",
    },
    comentario: {
      resolucao: "ERRADO. O comando chmod é utilizado exatamente para alterar as permissões de leitura, escrita e execução de um arquivo ou diretório — quem altera o proprietário é o comando chown, e não o chmod.",
      fundamento: "Sistemas operacionais Linux — administração de permissões de arquivos.",
      macete: "chmod = permissões. chown = proprietário. Não confunda os dois comandos.",
      erroComum: "Trocar a função dos dois comandos entre si.",
      comoBancaPensa: "Item clássico de fixação sobre comandos básicos de administração Linux."
    }
  },
  {
    id: "TI-025", disciplina: "TI e Segurança Cibernética", assunto: "Sistemas operacionais", subassunto: "Permissões em Linux (chmod)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (sistemas operacionais Linux)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.76,
    enunciado: "No sistema operacional Linux, o comando chmod é utilizado para alterar as permissões de leitura, escrita e execução atribuídas a um arquivo ou diretório, para o proprietário, o grupo e os demais usuários.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "permissões de leitura, escrita e execução",
    cognitivo: {
      motivo: "Cobrar a função correta do comando chmod.",
      palavraCritica: "proprietário, o grupo e os demais usuários",
    },
    comentario: {
      resolucao: "CERTO. O comando chmod altera as permissões de leitura, escrita e execução de um arquivo ou diretório, podendo ser aplicadas separadamente às três categorias de usuários: proprietário, grupo e demais usuários.",
      fundamento: "Sistemas operacionais Linux — administração de permissões de arquivos.",
      macete: "chmod: 3 categorias (dono, grupo, outros) × 3 permissões (ler, escrever, executar).",
      erroComum: "Restringir a aplicação do chmod apenas ao proprietário do arquivo.",
      comoBancaPensa: "Item de fixação sobre a abrangência completa do comando."
    }
  },
  {
    id: "TI-026", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Modelo conceitual (DER)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (modelagem de banco de dados)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.76,
    enunciado: "O modelo conceitual de um banco de dados, representado tipicamente por um Diagrama Entidade-Relacionamento (DER), tem como finalidade descrever a estrutura física de armazenamento dos dados, incluindo índices, tipos de arquivos e parâmetros específicos do sistema gerenciador de banco de dados (SGBD) a ser utilizado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "modelo conceitual ... estrutura física de armazenamento",
    cognitivo: {
      motivo: "Cobrar a real finalidade do modelo conceitual, distinta do modelo físico.",
      palavraCritica: "estrutura física de armazenamento",
    },
    comentario: {
      resolucao: "ERRADO. O modelo conceitual, representado pelo DER, descreve entidades, atributos e relacionamentos de forma abstrata e independente de tecnologia — quem descreve a estrutura física de armazenamento (índices, tipos de arquivo, parâmetros do SGBD) é o modelo FÍSICO, e não o conceitual.",
      fundamento: "Modelagem de dados — modelo conceitual, lógico e físico.",
      macete: "Conceitual (DER) = abstrato, sem tecnologia. Físico = índices e SGBD específico.",
      erroComum: "Atribuir ao modelo conceitual características que só existem no modelo físico.",
      comoBancaPensa: "Troca as finalidades de dois níveis distintos de modelagem de dados."
    }
  },
  {
    id: "TI-027", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Modelo conceitual (DER)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (modelagem de banco de dados)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.74,
    enunciado: "O modelo conceitual de um banco de dados, tipicamente representado por um Diagrama Entidade-Relacionamento (DER), descreve de forma abstrata as entidades, os atributos e os relacionamentos relevantes para o negócio, sem se preocupar com detalhes de implementação física ou com o SGBD a ser utilizado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "forma abstrata ... sem se preocupar com ... implementação física",
    cognitivo: {
      motivo: "Cobrar a real finalidade do modelo conceitual (DER).",
      palavraCritica: "sem se preocupar com ... implementação física",
    },
    comentario: {
      resolucao: "CERTO. O modelo conceitual, representado pelo DER, é o nível mais abstrato de modelagem de dados, descrevendo entidades, atributos e relacionamentos relevantes ao negócio, sem qualquer preocupação com detalhes de implementação física ou com o SGBD específico a ser utilizado.",
      fundamento: "Modelagem de dados — modelo conceitual, lógico e físico.",
      macete: "DER/conceitual: só o 'o quê' do negócio, nunca o 'como' tecnológico.",
      erroComum: "Exigir detalhes de implementação já no nível conceitual da modelagem.",
      comoBancaPensa: "Item de fixação sobre a real abstração do modelo conceitual."
    }
  },
  {
    id: "TI-028", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem SQL", subassunto: "Data Manipulation Language (DML)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (linguagem SQL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.78,
    enunciado: "Os comandos SELECT, INSERT, UPDATE e DELETE pertencem à categoria da linguagem SQL denominada DML (Data Manipulation Language), utilizada para consultar e manipular os dados armazenados nas tabelas de um banco de dados relacional.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "SELECT, INSERT, UPDATE e DELETE ... DML",
    cognitivo: {
      motivo: "Cobrar a classificação correta dos comandos básicos de manipulação de dados em SQL.",
      palavraCritica: "DML",
    },
    comentario: {
      resolucao: "CERTO. A classificação é por finalidade, não por sintaxe. DML mexe nos DADOS (SELECT, INSERT, UPDATE, DELETE); DDL mexe na ESTRUTURA (CREATE, ALTER, DROP, TRUNCATE); DCL mexe em PERMISSÃO (GRANT, REVOKE); DTL/TCL controla a transação (COMMIT, ROLLBACK, SAVEPOINT). Duas armadilhas recorrentes: enfiar CREATE ou DROP na lista de DML, e trocar DELETE por TRUNCATE — TRUNCATE apaga todas as linhas, mas é DDL, porque atua sobre a tabela e não gera log linha a linha. Registre ainda que parte da doutrina separa o SELECT em DQL; a banca costuma aceitá-lo dentro de DML, como aqui.",
      fundamento: "Linguagem SQL — categorias de comandos (DML, DDL, DCL).",
      macete: "DML = SELECT/INSERT/UPDATE/DELETE. DDL = CREATE/ALTER/DROP. DCL = GRANT/REVOKE.",
      erroComum: "Confundir DML com DDL ou DCL.",
      comoBancaPensa: "Item de fixação sobre a classificação básica dos comandos SQL."
    }
  },
  {
    id: "TI-029", disciplina: "TI e Segurança Cibernética", assunto: "Fundamentos de segurança da informação", subassunto: "Ataques de negação de serviço (DDoS)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (tríade CID e ataques DDoS)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Um ataque de negação de serviço distribuído (DDoS), que torna um sistema indisponível para seus usuários legítimos por meio da sobrecarga de requisições, compromete diretamente o princípio da confidencialidade da informação, uma vez que impede o acesso aos dados por parte dos usuários autorizados.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "DDoS ... compromete ... confidencialidade",
    cognitivo: {
      motivo: "Cobrar que o DDoS compromete a disponibilidade, e não a confidencialidade, da tríade CID.",
      palavraCritica: "confidencialidade",
    },
    comentario: {
      resolucao: "ERRADO. O ataque DDoS compromete o princípio da DISPONIBILIDADE (e não da confidencialidade), pois impede que usuários legítimos e autorizados acessem o sistema ou os dados — a confidencialidade seria violada apenas se pessoas não autorizadas obtivessem acesso indevido às informações.",
      fundamento: "Segurança da informação — tríade CID (confidencialidade, integridade, disponibilidade).",
      macete: "DDoS ataca a DISPONIBILIDADE. Confidencialidade é sobre acesso indevido, não indisponibilidade.",
      erroComum: "Confundir 'impedir acesso de usuários legítimos' com 'violação de confidencialidade'.",
      comoBancaPensa: "Troca o princípio correto da tríade CID por outro, testando a precisão conceitual do candidato."
    }
  },
  {
    id: "TI-030", disciplina: "TI e Segurança Cibernética", assunto: "Gestão de riscos em segurança da informação", subassunto: "Risco residual",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (gestão de riscos em segurança da informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.78,
    enunciado: "No processo de gestão de riscos em segurança da informação, o risco residual corresponde ao nível de risco que permanece após a aplicação dos controles de segurança, não sendo, em regra, eliminado por completo, ainda que a organização implemente políticas de segurança da informação.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "após a aplicação dos controles ... não sendo eliminado por completo",
    cognitivo: {
      motivo: "Cobrar o conceito correto de risco residual, posterior aos controles.",
      palavraCritica: "após a aplicação dos controles ... não sendo eliminado por completo",
    },
    comentario: {
      resolucao: "CERTO. O risco residual é o nível de risco que permanece após a implementação de controles de segurança — nenhum conjunto de controles elimina totalmente o risco, restando sempre um resíduo a ser gerenciado (aceito, monitorado ou mitigado ainda mais).",
      fundamento: "Gestão de riscos em segurança da informação (ISO 27005; doutrina de governança de TI).",
      macete: "Risco residual = depois dos controles, nunca zero. Risco inerente = antes dos controles.",
      erroComum: "Confundir risco residual com risco inerente (antes dos controles).",
      comoBancaPensa: "Item de fixação sobre um conceito central da gestão de riscos em segurança da informação."
    }
  },
  {
    id: "TI-031", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem de programação Java", subassunto: "Imutabilidade da classe String",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Java — estruturas de dados)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.74,
    enunciado: "Na linguagem de programação Java, a classe String é uma estrutura mutável, de modo que, ao se utilizar métodos como concat() ou replace() sobre um objeto String já existente, o conteúdo original desse objeto é alterado diretamente, sem a criação de um novo objeto em memória.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "String é uma estrutura mutável ... sem a criação de um novo objeto",
    cognitivo: {
      motivo: "Cobrar a imutabilidade da classe String em Java.",
      palavraCritica: "estrutura mutável ... sem a criação de um novo objeto",
    },
    comentario: {
      resolucao: "ERRADO. A classe String em Java é IMUTÁVEL — métodos como concat() e replace() não alteram o objeto original, mas retornam um NOVO objeto String em memória. A mutabilidade direta é característica de StringBuilder e StringBuffer, não de String.",
      fundamento: "Linguagem de programação Java — estruturas de dados (imutabilidade da String).",
      macete: "String = imutável (sempre cria novo objeto). StringBuilder/StringBuffer = mutáveis.",
      erroComum: "Confundir a imutabilidade da String com a mutabilidade do StringBuilder/StringBuffer.",
      comoBancaPensa: "Inverte uma característica fundamental e bem conhecida da linguagem Java."
    }
  },
  {
    id: "TI-032", disciplina: "TI e Segurança Cibernética", assunto: "Gestão de identidades e acesso", subassunto: "OAuth2 x OpenID Connect",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (protocolos de autenticação e autorização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.78,
    enunciado: "O protocolo OAuth2 tem como finalidade principal autorizar o acesso de uma aplicação a recursos de um usuário, sem necessariamente autenticar sua identidade, ao passo que o OpenID Connect constitui uma camada de autenticação construída sobre o OAuth2, permitindo verificar a identidade do usuário de forma padronizada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "OAuth2 ... autorizar ... OpenID Connect ... camada de autenticação",
    cognitivo: {
      motivo: "Cobrar a distinção correta entre autorização (OAuth2) e autenticação (OpenID Connect).",
      palavraCritica: "autorizar ... camada de autenticação",
    },
    comentario: {
      resolucao: "CERTO. O OAuth2 é protocolo de autorização, voltado a conceder acesso de aplicações a recursos do usuário sem necessariamente autenticar sua identidade. O OpenID Connect é uma camada de autenticação construída sobre o OAuth2, permitindo verificar a identidade do usuário de forma padronizada — tecnologia atual, não obsoleta.",
      fundamento: "TI/Segurança — protocolos de autenticação e autorização (OAuth2, OpenID Connect).",
      macete: "OAuth2 = autorização. OpenID Connect = autenticação (construído sobre o OAuth2).",
      erroComum: "Achar que o OAuth2 já autentica a identidade do usuário por si só, ou que o OpenID Connect é obsoleto.",
      comoBancaPensa: "Item de fixação sobre a distinção fina entre dois protocolos frequentemente confundidos."
    }
  },
  {
    id: "TI-033", disciplina: "TI e Segurança Cibernética", assunto: "Soluções de segurança da informação", subassunto: "SIEM x PAM",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (soluções de segurança: SIEM e PAM)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.74,
    enunciado: "Uma solução SIEM (Security Information and Event Management) tem como principal função gerenciar as identidades e os privilégios de acesso concedidos a usuários privilegiados, substituindo, dessa forma, a necessidade de soluções específicas de PAM (Privileged Access Management) em uma organização.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "SIEM ... gerenciar identidades e privilégios ... substituindo ... PAM",
    cognitivo: {
      motivo: "Cobrar que SIEM e PAM têm funções distintas e complementares, não substituíveis entre si.",
      palavraCritica: "gerenciar identidades e privilégios ... substituindo",
    },
    comentario: {
      resolucao: "ERRADO. O SIEM tem como função principal coletar, correlacionar e monitorar eventos e logs de segurança de toda a organização, gerando alertas — quem gerencia especificamente as identidades e os privilégios de acesso de usuários privilegiados é o PAM. São soluções complementares, e o SIEM não substitui a necessidade de um PAM.",
      fundamento: "TI/Segurança — soluções de segurança da informação (SIEM e PAM).",
      macete: "SIEM = monitora eventos/logs. PAM = gerencia acessos privilegiados. São complementares.",
      erroComum: "Achar que uma solução de monitoramento de eventos (SIEM) substitui a gestão de acessos privilegiados (PAM).",
      comoBancaPensa: "Atribui a uma solução a função de outra, testando se o candidato conhece a finalidade específica de cada ferramenta."
    }
  },

  {
    id: "CC-020", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Interceptação de comunicações", subassunto: "Lei nº 9.296/1996",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.296/1996)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.78,
    enunciado: "Constitui crime, nos termos da Lei nº 9.296/1996, realizar interceptação de comunicações telefônicas, de informática ou telemática sem autorização judicial ou com objetivos não autorizados em lei, sujeitando o responsável a pena de reclusão.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "interceptação ... sem autorização judicial ... reclusão",
    cognitivo: {
      motivo: "Cobrar a tipificação da interceptação ilegal de comunicações.",
      palavraCritica: "sem autorização judicial ... reclusão",
    },
    comentario: {
      resolucao: "CERTO. O art. 10 da Lei 9.296/1996 tipifica como crime, com pena de reclusão, a realização de interceptação de comunicações telefônicas, de informática ou telemática sem autorização judicial, ou com objetivos não autorizados em lei.",
      fundamento: "Lei nº 9.296/1996, art. 10.",
      macete: "Interceptação sem ordem judicial ou fora da finalidade legal = crime (reclusão).",
      erroComum: "Tratar a interceptação irregular como mera infração administrativa, não como crime.",
      comoBancaPensa: "Item de fixação sobre a tipificação penal da interceptação ilegal de comunicações."
    }
  },
  {
    id: "CC-021", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Interceptação de comunicações", subassunto: "Lei nº 9.296/1996",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.296/1996; CF, art. 5º, XII)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.76,
    enunciado: "A interceptação de comunicações telemáticas pode ser realizada pela autoridade policial sem autorização judicial, sempre que a urgência da investigação assim o exigir, dispensando-se, nessa hipótese, qualquer controle jurisdicional.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "sem autorização judicial ... dispensando-se ... qualquer controle jurisdicional",
    cognitivo: {
      motivo: "Cobrar que a interceptação de comunicações sempre exige controle jurisdicional, mesmo em casos urgentes.",
      palavraCritica: "dispensando-se ... qualquer controle jurisdicional",
    },
    comentario: {
      resolucao: "ERRADO. A interceptação de comunicações telefônicas ou telemáticas é hipótese de reserva de jurisdição (art. 5º, XII, CF), dependendo sempre de autorização judicial para investigação criminal ou instrução processual penal — não existe hipótese de urgência que dispense totalmente o controle jurisdicional.",
      fundamento: "Constituição Federal, art. 5º, XII; Lei nº 9.296/1996.",
      macete: "Interceptação: sempre reserva de jurisdição, nenhuma urgência dispensa a ordem judicial.",
      erroComum: "Achar que a urgência da investigação autoriza a interceptação sem qualquer controle judicial.",
      comoBancaPensa: "Cria uma exceção inexistente à reserva de jurisdição para testar a firmeza do conhecimento do candidato."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE38);
