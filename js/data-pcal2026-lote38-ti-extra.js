/* =====================================================================
   CEBRASPE LAB — Lote 38: TI E SEGURANÇA CIBERNÉTICA (expansão 2)
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (sistemas operacionais Linux)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.76,
    enunciado: "No sistema operacional Linux, o comando chmod é utilizado exclusivamente para alterar o proprietário de um arquivo ou diretório, não sendo possível, por meio dele, modificar as permissões de leitura, escrita e execução atribuídas a esse arquivo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "chmod ... exclusivamente ... proprietário",
    cognitivo: {
      motivo: "Cobrar a real função do comando chmod, distinta do comando chown.",
      mede: "TI/Segurança — sistemas operacionais Linux (permissões).",
      pegadinhaDesc: "A banca troca a função do chmod (permissões) pela do chown (proprietário).",
      ondeErra: "Confunde os dois comandos clássicos de administração de arquivos no Linux.",
      palavraCritica: "exclusivamente ... proprietário",
      tecnica: "O comando CHMOD ('change mode') altera as permissões de leitura (r), escrita (w) e execução (x) de um arquivo ou diretório para proprietário, grupo e outros. Quem altera o PROPRIETÁRIO é o comando CHOWN ('change owner') — são comandos distintos.",
      regraMental: "chmod = permissões (rwx). chown = dono do arquivo."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (sistemas operacionais Linux)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.76,
    enunciado: "No sistema operacional Linux, o comando chmod é utilizado para alterar as permissões de leitura, escrita e execução atribuídas a um arquivo ou diretório, para o proprietário, o grupo e os demais usuários.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "permissões de leitura, escrita e execução",
    cognitivo: {
      motivo: "Cobrar a função correta do comando chmod.",
      mede: "TI/Segurança — sistemas operacionais Linux (permissões).",
      pegadinhaDesc: "A banca pode restringir a aplicação apenas ao proprietário, ignorando grupo e outros usuários.",
      ondeErra: "Esquece que o chmod também altera permissões para grupo e para os demais usuários ('outros').",
      palavraCritica: "proprietário, o grupo e os demais usuários",
      tecnica: "O comando chmod altera as permissões de leitura (r), escrita (w) e execução (x) de um arquivo ou diretório, aplicáveis separadamente a três categorias: proprietário (user), grupo (group) e outros usuários (others).",
      regraMental: "chmod: três categorias (user, group, others) × três permissões (r, w, x)."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (modelagem de banco de dados)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.76,
    enunciado: "O modelo conceitual de um banco de dados, representado tipicamente por um Diagrama Entidade-Relacionamento (DER), tem como finalidade descrever a estrutura física de armazenamento dos dados, incluindo índices, tipos de arquivos e parâmetros específicos do sistema gerenciador de banco de dados (SGBD) a ser utilizado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "modelo conceitual ... estrutura física de armazenamento",
    cognitivo: {
      motivo: "Cobrar a real finalidade do modelo conceitual, distinta do modelo físico.",
      mede: "TI/Segurança — banco de dados (modelagem).",
      pegadinhaDesc: "A banca atribui ao modelo conceitual (DER) uma finalidade típica do modelo físico.",
      ondeErra: "Confunde o nível conceitual (entidades, atributos, relacionamentos) com o nível físico (índices, arquivos, parâmetros do SGBD).",
      palavraCritica: "estrutura física de armazenamento",
      tecnica: "O modelo CONCEITUAL (DER) descreve entidades, atributos e relacionamentos de forma abstrata, independente de tecnologia — é quem descreve a estrutura FÍSICA (índices, tipos de arquivo, parâmetros do SGBD) é o modelo FÍSICO, etapa posterior da modelagem.",
      regraMental: "DER/conceitual: entidades e relacionamentos (abstrato). Modelo físico: índices e armazenamento real (SGBD específico)."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (modelagem de banco de dados)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.74,
    enunciado: "O modelo conceitual de um banco de dados, tipicamente representado por um Diagrama Entidade-Relacionamento (DER), descreve de forma abstrata as entidades, os atributos e os relacionamentos relevantes para o negócio, sem se preocupar com detalhes de implementação física ou com o SGBD a ser utilizado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "forma abstrata ... sem se preocupar com ... implementação física",
    cognitivo: {
      motivo: "Cobrar a real finalidade do modelo conceitual (DER).",
      mede: "TI/Segurança — banco de dados (modelagem).",
      pegadinhaDesc: "A banca pode negar essa abstração, exigindo detalhes de implementação já no modelo conceitual.",
      ondeErra: "Não distingue os três níveis de modelagem: conceitual, lógico e físico.",
      palavraCritica: "sem se preocupar com ... implementação física",
      tecnica: "O modelo conceitual (DER) é o nível mais abstrato de modelagem: descreve entidades, atributos e relacionamentos relevantes ao negócio, sem qualquer preocupação com o SGBD específico ou com detalhes de armazenamento físico — esses detalhes só aparecem no modelo lógico (parcialmente) e no modelo físico (integralmente).",
      regraMental: "Conceitual → lógico → físico: do mais abstrato ao mais concreto/tecnológico."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (linguagem SQL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.78,
    enunciado: "Os comandos SELECT, INSERT, UPDATE e DELETE pertencem à categoria da linguagem SQL denominada DML (Data Manipulation Language), utilizada para consultar e manipular os dados armazenados nas tabelas de um banco de dados relacional.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "SELECT, INSERT, UPDATE e DELETE ... DML",
    cognitivo: {
      motivo: "Cobrar a classificação correta dos comandos básicos de manipulação de dados em SQL.",
      mede: "TI/Segurança — linguagem SQL (categorias de comandos).",
      pegadinhaDesc: "A banca pode classificar esses comandos como DDL (Data Definition Language).",
      ondeErra: "Confunde DML (manipulação de dados) com DDL (definição de estruturas, como CREATE, ALTER, DROP).",
      palavraCritica: "DML",
      tecnica: "SELECT, INSERT, UPDATE e DELETE são comandos de DML (Data Manipulation Language) — usados para consultar e manipular os dados já armazenados. DDL (CREATE, ALTER, DROP) define a estrutura das tabelas; DCL (GRANT, REVOKE) controla permissões de acesso.",
      regraMental: "DML: SELECT/INSERT/UPDATE/DELETE (dados). DDL: CREATE/ALTER/DROP (estrutura). DCL: GRANT/REVOKE (permissões)."
    },
    comentario: {
      resolucao: "CERTO. Os comandos SELECT, INSERT, UPDATE e DELETE pertencem à categoria DML (Data Manipulation Language) da linguagem SQL, empregados para consultar e manipular os dados armazenados nas tabelas de um banco de dados relacional.",
      fundamento: "Linguagem SQL — categorias de comandos (DML, DDL, DCL).",
      macete: "DML = SELECT/INSERT/UPDATE/DELETE. DDL = CREATE/ALTER/DROP. DCL = GRANT/REVOKE.",
      erroComum: "Confundir DML com DDL ou DCL.",
      comoBancaPensa: "Item de fixação sobre a classificação básica dos comandos SQL."
    }
  },
  {
    id: "TI-029", disciplina: "TI e Segurança Cibernética", assunto: "Fundamentos de segurança da informação", subassunto: "Ataques de negação de serviço (DDoS)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (tríade CID e ataques DDoS)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Um ataque de negação de serviço distribuído (DDoS), que torna um sistema indisponível para seus usuários legítimos por meio da sobrecarga de requisições, compromete diretamente o princípio da confidencialidade da informação, uma vez que impede o acesso aos dados por parte dos usuários autorizados.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "DDoS ... compromete ... confidencialidade",
    cognitivo: {
      motivo: "Cobrar que o DDoS compromete a disponibilidade, e não a confidencialidade, da tríade CID.",
      mede: "TI/Segurança — fundamentos de segurança (tríade CID).",
      pegadinhaDesc: "A banca troca o princípio comprometido pelo ataque DDoS (disponibilidade) por outro (confidencialidade).",
      ondeErra: "Confunde 'impedir o acesso' com 'quebra de confidencialidade' (que trata de acesso indevido por quem NÃO deveria acessar, não de indisponibilidade para quem deveria).",
      palavraCritica: "confidencialidade",
      tecnica: "Na tríade CID: Confidencialidade é violada quando pessoas NÃO autorizadas acessam a informação. Disponibilidade é violada quando usuários AUTORIZADOS ficam impedidos de acessar. O DDoS, ao tornar o sistema indisponível, compromete a DISPONIBILIDADE, não a confidencialidade.",
      regraMental: "DDoS = ataque de DISPONIBILIDADE (impede acesso de quem deveria acessar), não de confidencialidade."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (gestão de riscos em segurança da informação)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.78,
    enunciado: "No processo de gestão de riscos em segurança da informação, o risco residual corresponde ao nível de risco que permanece após a aplicação dos controles de segurança, não sendo, em regra, eliminado por completo, ainda que a organização implemente políticas de segurança da informação.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "após a aplicação dos controles ... não sendo eliminado por completo",
    cognitivo: {
      motivo: "Cobrar o conceito correto de risco residual, posterior aos controles.",
      mede: "TI/Segurança — gestão de riscos em segurança da informação.",
      pegadinhaDesc: "A banca pode inverter o momento (risco residual seria antes dos controles) ou afirmar que ele é totalmente eliminado.",
      ondeErra: "Confunde risco residual (após os controles) com risco inerente (antes dos controles).",
      palavraCritica: "após a aplicação dos controles ... não sendo eliminado por completo",
      tecnica: "Risco RESIDUAL é o risco que PERMANECE após a aplicação de controles de segurança — nenhum controle elimina 100% do risco. Risco INERENTE (ou risco bruto) é o nível de risco ANTES da aplicação de qualquer controle.",
      regraMental: "Risco inerente = antes dos controles. Risco residual = depois dos controles, e nunca é zero."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Java — estruturas de dados)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.74,
    enunciado: "Na linguagem de programação Java, a classe String é uma estrutura mutável, de modo que, ao se utilizar métodos como concat() ou replace() sobre um objeto String já existente, o conteúdo original desse objeto é alterado diretamente, sem a criação de um novo objeto em memória.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "String é uma estrutura mutável ... sem a criação de um novo objeto",
    cognitivo: {
      motivo: "Cobrar a imutabilidade da classe String em Java.",
      mede: "TI/Segurança — linguagem de programação Java.",
      pegadinhaDesc: "A banca afirma que a String é mutável, quando na verdade é uma das classes imutáveis mais conhecidas do Java.",
      ondeErra: "Confunde StringBuilder/StringBuffer (mutáveis) com String (imutável).",
      palavraCritica: "estrutura mutável ... sem a criação de um novo objeto",
      tecnica: "Em Java, String é IMUTÁVEL: qualquer operação como concat() ou replace() NÃO altera o objeto original — ela cria e retorna um NOVO objeto String em memória, mantendo o original inalterado. Quem permite alteração direta (mutabilidade) são as classes StringBuilder e StringBuffer.",
      regraMental: "String em Java: sempre imutável. concat()/replace() criam objeto novo, não alteram o original."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (protocolos de autenticação e autorização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.78,
    enunciado: "O protocolo OAuth2 tem como finalidade principal autorizar o acesso de uma aplicação a recursos de um usuário, sem necessariamente autenticar sua identidade, ao passo que o OpenID Connect constitui uma camada de autenticação construída sobre o OAuth2, permitindo verificar a identidade do usuário de forma padronizada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "OAuth2 ... autorizar ... OpenID Connect ... camada de autenticação",
    cognitivo: {
      motivo: "Cobrar a distinção correta entre autorização (OAuth2) e autenticação (OpenID Connect).",
      mede: "TI/Segurança — gestão de identidades e acesso.",
      pegadinhaDesc: "A banca pode inverter as finalidades ou classificar o OpenID Connect como protocolo obsoleto.",
      ondeErra: "Confunde autorização (conceder acesso a recursos) com autenticação (verificar identidade).",
      palavraCritica: "autorizar ... camada de autenticação",
      tecnica: "OAuth2 é um protocolo de AUTORIZAÇÃO: permite que uma aplicação acesse recursos em nome do usuário, sem necessariamente confirmar quem é esse usuário. O OpenID Connect é uma camada de AUTENTICAÇÃO construída sobre o OAuth2, adicionando a verificação padronizada da identidade — é tecnologia atual e amplamente utilizada, não obsoleta.",
      regraMental: "OAuth2 = autorização (acesso a recursos). OpenID Connect = autenticação (confirma identidade), sobre o OAuth2."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (soluções de segurança: SIEM e PAM)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.74,
    enunciado: "Uma solução SIEM (Security Information and Event Management) tem como principal função gerenciar as identidades e os privilégios de acesso concedidos a usuários privilegiados, substituindo, dessa forma, a necessidade de soluções específicas de PAM (Privileged Access Management) em uma organização.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "SIEM ... gerenciar identidades e privilégios ... substituindo ... PAM",
    cognitivo: {
      motivo: "Cobrar que SIEM e PAM têm funções distintas e complementares, não substituíveis entre si.",
      mede: "TI/Segurança — soluções de segurança da informação (SIEM, PAM).",
      pegadinhaDesc: "A banca atribui ao SIEM a função que é, na verdade, do PAM.",
      ondeErra: "Confunde a função de monitoramento e correlação de eventos (SIEM) com a de gestão de acessos privilegiados (PAM).",
      palavraCritica: "gerenciar identidades e privilégios ... substituindo",
      tecnica: "SIEM (Security Information and Event Management) coleta, correlaciona e monitora eventos e logs de segurança de toda a organização, gerando alertas. PAM (Privileged Access Management) é quem gerencia especificamente as identidades e os privilégios de acesso de usuários privilegiados (administradores). São soluções complementares, não substitutas uma da outra.",
      regraMental: "SIEM = monitora e correlaciona eventos/logs. PAM = gerencia acessos privilegiados. Não se substituem."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.296/1996)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.78,
    enunciado: "Constitui crime, nos termos da Lei nº 9.296/1996, realizar interceptação de comunicações telefônicas, de informática ou telemática sem autorização judicial ou com objetivos não autorizados em lei, sujeitando o responsável a pena de reclusão.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "interceptação ... sem autorização judicial ... reclusão",
    cognitivo: {
      motivo: "Cobrar a tipificação da interceptação ilegal de comunicações.",
      mede: "Crimes Cibernéticos — interceptação de comunicações (Lei 9.296/1996).",
      pegadinhaDesc: "A banca pode negar a natureza criminosa da interceptação sem autorização judicial.",
      ondeErra: "Acha que a interceptação sem autorização judicial configura apenas irregularidade administrativa, e não crime.",
      palavraCritica: "sem autorização judicial ... reclusão",
      tecnica: "Art. 10, Lei 9.296/1996: constitui crime realizar interceptação de comunicações telefônicas, de informática ou telemática, ou quebrar segredo de Justiça, sem autorização judicial ou com objetivos não autorizados em lei, sujeitando o agente à pena de reclusão.",
      regraMental: "Interceptação sem autorização judicial ou fora dos fins legais = crime, com pena de reclusão (art. 10, Lei 9.296/1996)."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.296/1996; CF, art. 5º, XII)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.76,
    enunciado: "A interceptação de comunicações telemáticas pode ser realizada pela autoridade policial sem autorização judicial, sempre que a urgência da investigação assim o exigir, dispensando-se, nessa hipótese, qualquer controle jurisdicional.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "sem autorização judicial ... dispensando-se ... qualquer controle jurisdicional",
    cognitivo: {
      motivo: "Cobrar que a interceptação de comunicações sempre exige controle jurisdicional, mesmo em casos urgentes.",
      mede: "Crimes Cibernéticos — interceptação de comunicações (Lei 9.296/1996; CF, art. 5º, XII).",
      pegadinhaDesc: "A banca cria uma exceção de urgência que dispensaria totalmente o controle judicial, o que não existe no ordenamento.",
      ondeErra: "Presume que a urgência investigativa, por si só, autoriza a interceptação sem qualquer intervenção judicial.",
      palavraCritica: "dispensando-se ... qualquer controle jurisdicional",
      tecnica: "A interceptação de comunicações é hipótese de reserva de jurisdição (art. 5º, XII, CF; Lei 9.296/1996): depende sempre de autorização judicial, para investigação criminal ou instrução processual penal, na forma da lei. Não há hipótese que dispense totalmente o controle jurisdicional, mesmo em investigações urgentes.",
      regraMental: "Interceptação de comunicações: sempre reserva de jurisdição — nenhuma urgência dispensa a autorização judicial."
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

/* Frequência de temas — TI e Segurança Cibernética / Crimes Cibernéticos (Módulo 2) */
(function () {
  const addTema = (disc, temas) => {
    let d = FREQUENCIA_TEMAS.find(f => f.disciplina === disc);
    if (!d) { d = { disciplina: disc, temas: [] }; FREQUENCIA_TEMAS.push(d); }
    d.temas.push(...temas);
  };
  addTema("TI e Segurança Cibernética", [
    { tema: "Sistemas operacionais Linux e banco de dados (modelagem)", freq: 76, tendencia: "alta", prob: 0.76 },
    { tema: "Fundamentos de segurança: DDoS, risco residual, gestão de identidades", freq: 80, tendencia: "alta", prob: 0.8 },
  ]);
  addTema("Crimes Cibernéticos e Segurança Digital", [
    { tema: "Interceptação de comunicações (Lei 9.296/1996)", freq: 76, tendencia: "alta", prob: 0.76 },
  ]);
})();
