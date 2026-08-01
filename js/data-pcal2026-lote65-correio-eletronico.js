/* =====================================================================
   QUESTLAB — Lote 65: CORREIO ELETRÔNICO
   Módulo do edital PC-AL 2026 sem cobertura própria até aqui: o banco
   tratava e-mail apenas de raspão, dentro de phishing e de navegação.

   Material de curso com 16 itens C/E da CEBRASPE serviu só de MAPA dos
   recortes que a banca repete: regras/filtros do Outlook, webmail x
   cliente instalado, natureza assíncrona do e-mail, encaminhar mantém
   anexo, Itens Excluídos x Lixo Eletrônico, campos Para/Cc/Cco, trio
   SMTP/POP3/IMAP, prazo da lixeira do Gmail, integração Gmail+Drive,
   antispam x antivírus, compactadores e múltiplas contas no Outlook.

   Nenhum enunciado foi copiado. Cada item foi redigido do zero e
   ancorado em especificação e comportamento reais, expandindo os
   recortes para o que a banca cobra junto em provas de carreira
   policial: portas e variantes seguras (587/465/993/995, STARTTLS),
   MIME e Base64, ausência de autenticação no SMTP original e o tripé
   SPF/DKIM/DMARC, o limite do TLS frente ao sigilo fim a fim
   (S/MIME e PGP), phishing x spear phishing, regra de encaminhamento
   oculta como indício de conta comprometida, análise de cabeçalhos
   (Received, Message-ID) e arquivos .pst x .ost.

   Seis itens são CONTRAEXEMPLOS deliberados (TI-148, 156, 165, 167,
   169 e 171): restrições, exigências e números que têm cara de
   armadilha e são verdadeiros. Servem para quebrar o reflexo de
   marcar ERRADO diante de "somente", "indispensável" e prazos exatos.

   44 itens: 20 CERTO / 24 ERRADO. Dificuldade 3 em 27, 2 em 17.
   ===================================================================== */

const QUESTOES_PCAL_LOTE65 = [

  /* ===== PROTOCOLOS: SMTP, POP3 E IMAP ===== */
  {
    id: "TI-143", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Protocolos POP3 e IMAP",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.9,
    enunciado: "O protocolo IMAP mantém as mensagens armazenadas no servidor e sincroniza o estado da caixa postal entre os dispositivos do usuário, ao passo que o POP3, em sua configuração tradicional, transfere as mensagens para o dispositivo local e as remove do servidor.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "IMAP ... mantém no servidor e sincroniza ... POP3 ... transfere e remove",
    cognitivo: {
      motivo: "Cobrar a distinção central entre os dois protocolos de acesso a mensagens.",
      palavraCritica: "sincroniza o estado da caixa postal entre os dispositivos",
    },
    comentario: {
      resolucao: "CERTO. O IMAP foi concebido para acesso multidispositivo: as mensagens e seus marcadores (lida, respondida, pasta) permanecem no servidor, de modo que o que se faz no celular aparece no computador. O POP3 nasceu para o modelo de máquina única — baixa e, por padrão, apaga do servidor. Justamente por isso o IMAP é o padrão dos serviços atuais.",
      fundamento: "RFC 3501 (IMAP4rev1) e RFC 1939 (POP3).",
      macete: "IMAP = Internet (fica no servidor, sincroniza). POP = Puxa e leva embora.",
      erroComum: "Tratar os dois como equivalentes, por ambos serem 'de recebimento'.",
      comoBancaPensa: "Item 'limpo' que descreve os dois corretamente, para servir de âncora antes das inversões."
    }
  },
  {
    id: "TI-144", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Protocolos POP3 e IMAP",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.88,
    enunciado: "O POP3 é o protocolo indicado para o usuário que acessa a mesma caixa postal de vários dispositivos, pois preserva as mensagens no servidor e replica entre os aparelhos as pastas e as marcações de leitura, função que o IMAP não desempenha.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "POP3 ... preserva as mensagens no servidor e replica ... marcações",
    cognitivo: {
      motivo: "Cobrar a mesma distinção pela inversão completa dos papéis.",
      palavraCritica: "POP3 ... vários dispositivos",
    },
    comentario: {
      resolucao: "ERRADO. Os papéis estão invertidos: quem sincroniza pastas e marcações entre dispositivos é o IMAP. O POP3 baixa as mensagens para o aparelho e, na configuração padrão, remove-as do servidor — usá-lo em dois dispositivos leva ao clássico problema de a mensagem 'sumir' em um deles.",
      fundamento: "RFC 1939 (POP3) e RFC 3501 (IMAP4rev1).",
      macete: "Multidispositivo é sempre IMAP. POP3 é do tempo de um computador só.",
      erroComum: "Decorar apenas que os dois 'recebem' e não fixar qual sincroniza.",
      comoBancaPensa: "Troca os dois protocolos e ainda nega expressamente a função de quem realmente a tem."
    }
  },
  {
    id: "TI-145", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Protocolos e portas",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.84,
    enunciado: "No serviço de correio eletrônico, o SMTP é responsável pelo envio de mensagens, sendo a porta 587 a recomendada para submissão a partir do cliente, enquanto as variantes seguras de acesso operam nas portas 993, para IMAP sobre TLS, e 995, para POP3 sobre TLS.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "587 ... submissão ... 993 IMAP ... 995 POP3",
    cognitivo: {
      motivo: "Cobrar o mapa de portas do serviço de e-mail, recorte frequente em prova de informática.",
      palavraCritica: "porta 587 ... recomendada para submissão",
    },
    comentario: {
      resolucao: "CERTO. A porta 25 permanece no tráfego entre servidores (relay), mas a submissão pelo cliente migrou para a 587, com autenticação — inclusive porque muitos provedores bloqueiam a 25 para conter envio de spam. Do lado do acesso, IMAPS usa 993 e POP3S usa 995.",
      fundamento: "RFC 6409 (Message Submission) e registros de portas do IANA para IMAPS e POP3S.",
      macete: "25 servidor↔servidor, 587 cliente→servidor, 993 IMAP seguro, 995 POP seguro.",
      erroComum: "Fixar apenas a porta 25 e desconhecer a 587.",
      comoBancaPensa: "Item numérico e correto, que o candidato inseguro tende a marcar ERRADO por desconfiar dos números."
    }
  },
  {
    id: "TI-146", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Protocolos e portas",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.72,
    enunciado: "Na configuração padrão de um cliente de correio eletrônico, o protocolo SMTP utiliza a porta 110 e o protocolo POP3 utiliza a porta 25, ambas sem criptografia.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "SMTP ... porta 110 ... POP3 ... porta 25",
    cognitivo: {
      motivo: "Cobrar as portas clássicas pela troca direta entre dois números muito citados.",
      palavraCritica: "SMTP ... 110",
    },
    comentario: {
      resolucao: "ERRADO. Os números estão trocados: o SMTP tradicional usa a porta 25 (e a 587 para submissão autenticada), enquanto o POP3 sem criptografia usa a 110. É verdade que ambas operam em texto claro — mas essa parte correta serve apenas para dar credibilidade à troca.",
      fundamento: "Registros de portas do IANA — SMTP (25), Submission (587), POP3 (110), IMAP (143).",
      macete: "SMTP 25 (envio), POP3 110, IMAP 143. Seguros: 465/587, 995, 993.",
      erroComum: "Lembrar dos dois números e não de qual pertence a qual protocolo.",
      comoBancaPensa: "Mantém verdadeira a última cláusula ('sem criptografia') para camuflar a inversão numérica."
    }
  },
  {
    id: "TI-147", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Protocolo SMTP",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.79,
    enunciado: "O SMTP é o protocolo utilizado tanto para o envio quanto para a recuperação de mensagens armazenadas na caixa postal do usuário, o que dispensa o emprego de POP3 ou de IMAP em clientes de correio eletrônico devidamente configurados.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "tanto para o envio quanto para a recuperação ... dispensa ... POP3 ou IMAP",
    cognitivo: {
      motivo: "Cobrar o escopo do SMTP, que é unidirecional na perspectiva do usuário.",
      palavraCritica: "dispensa o emprego de POP3 ou de IMAP",
    },
    comentario: {
      resolucao: "ERRADO. O SMTP transporta a mensagem do remetente até o servidor de destino, mas não permite ao usuário ler a própria caixa postal. Para isso existem o POP3 e o IMAP. Um cliente de e-mail precisa, portanto, de duas configurações: uma de saída (SMTP) e uma de entrada (POP3 ou IMAP).",
      fundamento: "RFC 5321 (SMTP) — escopo de transporte de mensagens.",
      macete: "SMTP só empurra para fora. Para trazer de volta, POP3 ou IMAP.",
      erroComum: "Supor que o protocolo do e-mail é um só.",
      comoBancaPensa: "Amplia a função de um protocolo real até torná-lo suficiente sozinho."
    }
  },
  {
    id: "TI-148", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Protocolo SMTP",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.68,
    enunciado: "Entre os três protocolos clássicos do correio eletrônico, somente o SMTP atua no envio de mensagens, cabendo ao POP3 e ao IMAP exclusivamente o acesso às mensagens já depositadas na caixa postal do destinatário.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "somente o SMTP atua no envio ... exclusivamente o acesso",
    cognitivo: {
      motivo: "Contraexemplo: dois absolutos ('somente', 'exclusivamente') em um item verdadeiro.",
      palavraCritica: "somente ... exclusivamente",
    },
    comentario: {
      resolucao: "CERTO. A divisão de papéis é mesmo estanque: o SMTP é o único dos três que transporta mensagens para envio; POP3 e IMAP são protocolos de acesso, incapazes de enviar. Quem estuda pelo reflexo de que 'somente' e 'exclusivamente' indicam item errado se perde aqui — a exclusividade existe de fato.",
      fundamento: "RFC 5321 (SMTP), RFC 1939 (POP3) e RFC 3501 (IMAP4rev1).",
      macete: "Envio: só SMTP. Acesso: só POP3/IMAP. A fronteira é real.",
      erroComum: "Marcar ERRADO por reflexo diante dos advérbios de exclusão.",
      comoBancaPensa: "Usa a linguagem típica das armadilhas em um enunciado tecnicamente exato."
    }
  },
  {
    id: "TI-149", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Segurança do transporte (TLS)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.6,
    enunciado: "No STARTTLS, a conexão é estabelecida já cifrada desde o primeiro pacote em uma porta dedicada, ao passo que, no modelo conhecido como SMTPS, a sessão começa em texto claro e só é promovida a canal seguro após comando específico do cliente.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "STARTTLS ... cifrada desde o primeiro pacote ... SMTPS ... começa em texto claro",
    cognitivo: {
      motivo: "Cobrar a diferença entre TLS implícito e TLS explícito, invertendo os dois.",
      palavraCritica: "STARTTLS ... desde o primeiro pacote",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. O STARTTLS é TLS explícito: a sessão abre em texto claro e o cliente emite o comando STARTTLS para promovê-la a canal cifrado — o que a expõe ao ataque de supressão do comando (stripping). O SMTPS é TLS implícito: a porta é dedicada e o canal já nasce cifrado.",
      fundamento: "RFC 3207 (SMTP over TLS) e uso histórico do SMTPS em porta dedicada.",
      macete: "STARTTLS = começa aberto e depois fecha. Implícito = já nasce fechado.",
      erroComum: "Achar que qualquer menção a TLS significa conexão segura desde o início.",
      comoBancaPensa: "Inverte duas modalidades do mesmo mecanismo, descrevendo cada uma corretamente no lugar errado."
    }
  },
  {
    id: "TI-150", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Padrão MIME e anexos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.63,
    enunciado: "O padrão MIME permite que mensagens de correio eletrônico transportem anexos binários e caracteres fora do conjunto ASCII, mediante codificação do conteúdo — como a Base64 —, o que acarreta acréscimo aproximado de um terço no tamanho transmitido em relação ao arquivo original.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "MIME ... anexos binários ... Base64 ... acréscimo aproximado de um terço",
    cognitivo: {
      motivo: "Cobrar a função do MIME e o efeito colateral do Base64 no tamanho da mensagem.",
      palavraCritica: "acréscimo aproximado de um terço",
    },
    comentario: {
      resolucao: "CERTO. O SMTP original só trafegava texto ASCII de 7 bits; o MIME contornou a limitação declarando tipos de conteúdo e codificando o binário. A Base64 representa cada 3 bytes em 4 caracteres, daí o aumento de cerca de 33%. É por isso que um anexo de 20 MB pode estourar um limite nominal de 25 MB.",
      fundamento: "RFC 2045 a RFC 2049 (MIME) — codificação Base64.",
      macete: "Base64 engorda ~1/3. Anexo de 20 MB chega perto de 27 MB na mensagem.",
      erroComum: "Supor que o anexo trafega com o mesmo tamanho do arquivo em disco.",
      comoBancaPensa: "Item correto que exige conhecer a consequência prática do padrão, não só o nome dele."
    }
  },
  {
    id: "TI-151", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Protocolo POP3",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.7,
    enunciado: "O protocolo POP3 exclui obrigatoriamente do servidor toda mensagem transferida para o dispositivo do usuário, não sendo possível ao cliente de correio eletrônico preservar cópia remota das mensagens baixadas.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "exclui obrigatoriamente ... não sendo possível ... preservar cópia remota",
    cognitivo: {
      motivo: "Cobrar a existência da opção 'manter cópia no servidor', que desmente a obrigatoriedade.",
      palavraCritica: "obrigatoriamente ... não sendo possível",
    },
    comentario: {
      resolucao: "ERRADO. A remoção é o comportamento padrão, não uma imposição do protocolo. O POP3 prevê o comando DELE, e o cliente decide se o emite: praticamente todos oferecem a opção 'deixar uma cópia no servidor', inclusive com prazo para exclusão posterior. Configurar é possível — o que não existe é sincronização de estado, essa sim exclusiva do IMAP.",
      fundamento: "RFC 1939 (POP3) — comando DELE e implementações de 'leave on server'.",
      macete: "POP3 apaga por padrão, não por obrigação. Dá para deixar cópia.",
      erroComum: "Converter o comportamento padrão em regra absoluta do protocolo.",
      comoBancaPensa: "Cria uma vedação técnica que soa coerente com o que o candidato decorou sobre o POP3."
    }
  },

  /* ===== AUTENTICIDADE E SIGILO ===== */
  {
    id: "TI-152", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Falsificação de remetente (spoofing)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.82,
    enunciado: "O SMTP, em sua concepção original, não prevê mecanismo de verificação da identidade do remetente informado na mensagem, razão pela qual a falsificação do endereço de origem (spoofing) depende de controles complementares para ser detectada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não prevê mecanismo de verificação da identidade do remetente",
    cognitivo: {
      motivo: "Cobrar a fragilidade estrutural do SMTP, base de todo o tema de fraude por e-mail.",
      palavraCritica: "controles complementares",
    },
    comentario: {
      resolucao: "CERTO. O SMTP foi desenhado em uma internet de confiança mútua: o campo De: é preenchido pelo emissor e não é validado pelo protocolo. É por isso que existem SPF, DKIM e DMARC — camadas acrescentadas depois, apoiadas em DNS, para permitir ao servidor de destino aferir se aquele remetente estava autorizado a enviar por aquele caminho.",
      fundamento: "RFC 5321 (SMTP) e RFC 7208/6376/7489 (SPF, DKIM e DMARC).",
      macete: "O SMTP acredita em quem se apresenta. SPF/DKIM/DMARC vieram para conferir.",
      erroComum: "Supor que o servidor de destino valida automaticamente o remetente.",
      comoBancaPensa: "Item correto que serve de premissa para os itens seguintes sobre autenticação."
    }
  },
  {
    id: "TI-153", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "SPF, DKIM e DMARC",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.71,
    enunciado: "O SPF acrescenta à mensagem uma assinatura criptográfica verificável por chave pública publicada no DNS, enquanto o DKIM relaciona, em registro DNS do domínio, os endereços de servidores autorizados a enviar mensagens em seu nome.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "SPF ... assinatura criptográfica ... DKIM ... servidores autorizados",
    cognitivo: {
      motivo: "Cobrar o mecanismo de cada um dos dois controles, pela inversão.",
      palavraCritica: "SPF ... assinatura criptográfica",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. O SPF (Sender Policy Framework) publica no DNS a lista de servidores autorizados a enviar pelo domínio — é uma verificação de caminho, por endereço IP. O DKIM (DomainKeys Identified Mail) assina criptograficamente a mensagem, e o destinatário confere a assinatura com a chave pública publicada no DNS, verificando também a integridade do conteúdo.",
      fundamento: "RFC 7208 (SPF) e RFC 6376 (DKIM).",
      macete: "SPF = lista de quem pode enviar (IP). DKIM = assinatura do conteúdo (chave).",
      erroComum: "Saber que ambos usam DNS e não distinguir o que cada um publica lá.",
      comoBancaPensa: "Inverte dois controles quase sempre citados juntos, descrevendo cada mecanismo corretamente no rótulo errado."
    }
  },
  {
    id: "TI-154", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "SPF, DKIM e DMARC",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.66,
    enunciado: "O DMARC apoia-se nos resultados de SPF e de DKIM e acrescenta a definição, pelo titular do domínio, da política a ser aplicada às mensagens reprovadas — como quarentena ou rejeição —, além de prever o envio de relatórios ao próprio domínio.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "apoia-se nos resultados de SPF e de DKIM ... política ... relatórios",
    cognitivo: {
      motivo: "Cobrar o papel do DMARC como camada de política sobre os outros dois.",
      palavraCritica: "acrescenta a definição ... da política",
    },
    comentario: {
      resolucao: "CERTO. O DMARC não substitui SPF nem DKIM: consome os resultados deles, exige alinhamento com o domínio do campo De: e instrui o receptor sobre o que fazer quando a verificação falha (p=none, p=quarantine ou p=reject). Os relatórios agregados devolvem ao titular a visão de quem anda enviando em seu nome — insumo direto em investigação de fraude corporativa.",
      fundamento: "RFC 7489 (DMARC).",
      macete: "SPF e DKIM verificam. DMARC decide o que fazer e presta contas.",
      erroComum: "Tratar o DMARC como um terceiro método de verificação, no mesmo plano dos outros.",
      comoBancaPensa: "Item correto e detalhado, que só se confirma com entendimento da arquitetura, não da sigla."
    }
  },
  {
    id: "TI-155", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Sigilo das mensagens",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.77,
    enunciado: "O emprego de TLS na conexão entre o cliente de correio eletrônico e o servidor assegura criptografia fim a fim da mensagem, de modo que o conteúdo permanece ininteligível inclusive para o provedor de serviço que a armazena.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "TLS ... assegura criptografia fim a fim ... inclusive para o provedor",
    cognitivo: {
      motivo: "Separar proteção do canal de proteção do conteúdo — confusão recorrente e relevante em investigação.",
      palavraCritica: "fim a fim ... inclusive para o provedor",
    },
    comentario: {
      resolucao: "ERRADO. O TLS protege apenas o trecho em trânsito: a mensagem chega decifrada ao servidor, que a armazena em claro e pode lê-la, indexá-la e entregá-la mediante ordem judicial. Sigilo fim a fim, em que nem o provedor acessa o conteúdo, exige criptografia da própria mensagem — S/MIME ou OpenPGP. Além disso, o TLS entre servidores é oportunista: pode simplesmente não ocorrer em algum salto.",
      fundamento: "RFC 8446 (TLS) frente a RFC 8551 (S/MIME) e RFC 4880 (OpenPGP).",
      macete: "TLS protege o caminho. S/MIME e PGP protegem a carta.",
      erroComum: "Ler o cadeado da conexão como sigilo do conteúdo armazenado.",
      comoBancaPensa: "Estende uma proteção real (do canal) até um efeito que ela não produz (sigilo perante o provedor)."
    }
  },
  {
    id: "TI-156", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Sigilo das mensagens",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.64,
    enunciado: "Somente mediante o uso de soluções que cifram a própria mensagem, como o S/MIME e o OpenPGP, obtém-se sigilo do conteúdo perante os servidores intermediários, uma vez que a proteção conferida pelo TLS se restringe ao trecho percorrido entre dois pontos da comunicação.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "Somente mediante ... S/MIME e OpenPGP ... TLS se restringe ao trecho",
    cognitivo: {
      motivo: "Contraexemplo: um 'somente' verdadeiro, na mesma matéria em que o item anterior generalizava indevidamente.",
      palavraCritica: "Somente mediante",
    },
    comentario: {
      resolucao: "CERTO. A restrição procede. Como o TLS protege saltos individuais e a mensagem é decifrada em cada servidor, o único caminho para que o conteúdo permaneça oculto aos intermediários é cifrar a mensagem em si, na origem, com chave que só o destinatário detenha — o que S/MIME (certificados) e OpenPGP (chaves) fazem. Aqui o 'somente' não é exagero de banca: é a descrição correta da arquitetura.",
      fundamento: "RFC 8551 (S/MIME) e RFC 4880 (OpenPGP), em contraste com o escopo do TLS.",
      macete: "Quer esconder do servidor? Cifre a mensagem, não o cano.",
      erroComum: "Marcar ERRADO por reflexo diante do 'somente', sem checar se a exclusividade é real.",
      comoBancaPensa: "Veste de armadilha um enunciado exato, punindo quem responde por padrão de linguagem."
    }
  },
  {
    id: "TI-157", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Assinatura digital em mensagens",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.73,
    enunciado: "A assinatura digital aposta a uma mensagem de correio eletrônico torna seu conteúdo ininteligível a terceiros não autorizados, garantindo a confidencialidade da comunicação entre remetente e destinatário.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "assinatura digital ... torna seu conteúdo ininteligível ... confidencialidade",
    cognitivo: {
      motivo: "Cobrar a distinção entre os serviços de segurança prestados por assinatura e por cifragem.",
      palavraCritica: "ininteligível ... confidencialidade",
    },
    comentario: {
      resolucao: "ERRADO. A assinatura digital fornece autenticidade, integridade e não repúdio — permite saber quem assinou e se o conteúdo foi alterado —, mas a mensagem continua legível: assina-se com a chave privada e verifica-se com a pública, que é de conhecimento geral. Confidencialidade exige cifrar com a chave pública do destinatário. Os dois serviços podem coexistir, mas não se confundem.",
      fundamento: "Criptografia assimétrica — serviços de assinatura digital e de cifragem (S/MIME e OpenPGP).",
      macete: "Assinar = provar quem é. Cifrar = esconder o que diz.",
      erroComum: "Agrupar tudo que é 'criptografia' em um único efeito.",
      comoBancaPensa: "Atribui a um mecanismo real a propriedade de segurança que pertence ao outro."
    }
  },
  {
    id: "TI-158", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Filtros antispam",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.75,
    enunciado: "O filtro antispam de um serviço de correio eletrônico tem por finalidade detectar e remover códigos maliciosos presentes nos anexos das mensagens, função equivalente à do antivírus instalado na estação de trabalho.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "antispam ... detectar e remover códigos maliciosos ... equivalente à do antivírus",
    cognitivo: {
      motivo: "Cobrar a diferença de propósito entre filtro de spam e antivírus.",
      palavraCritica: "função equivalente à do antivírus",
    },
    comentario: {
      resolucao: "ERRADO. O antispam classifica mensagens indesejadas — não solicitadas, enviadas em massa — e as desvia para a pasta de lixo eletrônico, com base em reputação do remetente, conteúdo e denúncias. Quem inspeciona anexo em busca de código malicioso é o antimalware. Os provedores costumam empregar as duas camadas, mas são controles distintos: mensagem de spam pode ser inofensiva, e mensagem legítima pode conter anexo infectado.",
      fundamento: "Boas práticas de segurança em correio eletrônico — filtragem de spam e inspeção de conteúdo malicioso.",
      macete: "Antispam separa o chato. Antivírus barra o perigoso.",
      erroComum: "Tratar toda proteção de e-mail como uma coisa só.",
      comoBancaPensa: "Descreve corretamente a função do antivírus e a etiqueta como sendo do antispam."
    }
  },
  {
    id: "TI-159", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Phishing e spear phishing",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.86,
    enunciado: "O spear phishing distingue-se do phishing comum por dirigir-se a alvo determinado, valendo-se de informações previamente coletadas sobre a vítima ou sobre a organização a que ela pertence, o que eleva a verossimilhança da mensagem fraudulenta.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dirigir-se a alvo determinado ... informações previamente coletadas",
    cognitivo: {
      motivo: "Cobrar a diferença entre a fraude massiva e a dirigida, base do BEC.",
      palavraCritica: "alvo determinado",
    },
    comentario: {
      resolucao: "CERTO. O phishing tradicional é disparo em massa, com texto genérico e baixa taxa de conversão. O spear phishing parte de reconhecimento prévio — cargo, fornecedores, rotina de pagamentos, redes sociais — e produz mensagem sob medida. Quando o alvo é a alta direção, fala-se em whaling; quando a fraude visa a desviar pagamento corporativo, em BEC (Business E-mail Compromise).",
      fundamento: "Taxonomia de engenharia social aplicada a correio eletrônico (CERT.br e literatura de segurança).",
      macete: "Phishing joga a rede. Spear phishing usa o arpão, num peixe escolhido.",
      erroComum: "Usar os dois termos como sinônimos.",
      comoBancaPensa: "Item conceitual correto, âncora para a inversão que costuma vir em outro item da mesma prova."
    }
  },
  {
    id: "TI-160", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Phishing e spear phishing",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de sujeito)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.7,
    enunciado: "Denomina-se phishing a fraude direcionada a pessoa ou a organização específica, construída a partir de dados previamente levantados sobre o alvo, ao passo que o spear phishing consiste no envio indiscriminado de mensagens genéricas a grandes listas de endereços.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "phishing ... direcionada ... spear phishing ... envio indiscriminado",
    cognitivo: {
      motivo: "Cobrar os mesmos conceitos com os rótulos trocados.",
      palavraCritica: "spear phishing ... indiscriminado",
    },
    comentario: {
      resolucao: "ERRADO. As definições estão trocadas. Phishing é o disparo massivo e genérico; spear phishing é o ataque dirigido, apoiado em pesquisa sobre o alvo. A própria metáfora ajuda: spear é lança — instrumento de mira, não de rede.",
      fundamento: "Taxonomia de engenharia social aplicada a correio eletrônico.",
      macete: "Tem 'spear' (lança)? É mirado. Sem 'spear'? É rede lançada ao mar.",
      erroComum: "Reconhecer as duas descrições e não fixar qual nome vai em qual.",
      comoBancaPensa: "Apresenta duas definições corretas em si e apenas inverte a quem pertencem."
    }
  },
  {
    id: "TI-161", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Comprometimento de contas",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.61,
    enunciado: "A criação, sem conhecimento do titular, de regra que encaminhe automaticamente mensagens a endereço externo e as mova para pasta pouco visualizada constitui indício relevante de comprometimento da conta de correio eletrônico, sendo técnica associada a fraudes de desvio de pagamento.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "regra que encaminhe automaticamente ... indício relevante de comprometimento",
    cognitivo: {
      motivo: "Cobrar um indicador de comprometimento concreto, de aplicação direta em investigação.",
      palavraCritica: "sem conhecimento do titular",
    },
    comentario: {
      resolucao: "CERTO. É procedimento padrão do invasor após obter credenciais: a regra oculta lhe garante acesso contínuo à correspondência mesmo depois de troca de senha, e o desvio para pasta obscura evita que a vítima perceba a movimentação. Por isso, na resposta a incidentes de BEC, auditar regras de caixa postal e sessões ativas vem logo depois de revogar credenciais.",
      fundamento: "Práticas de resposta a incidentes em fraudes de comprometimento de e-mail corporativo (BEC).",
      macete: "Conta invadida? Confira as regras de encaminhamento antes de dar por resolvido.",
      erroComum: "Encerrar o incidente apenas com a troca de senha.",
      comoBancaPensa: "Cobra aplicação prática do conceito, e não a definição do termo."
    }
  },

  /* ===== CAMPOS DE DESTINATÁRIO E OPERAÇÕES ===== */
  {
    id: "TI-162", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Campos Para, Cc e Cco",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.91,
    enunciado: "Os endereços inseridos no campo Cco de uma mensagem recebem cópia dela sem que sejam exibidos aos demais destinatários, ao contrário do que ocorre com os endereços lançados nos campos Para e Cc.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Cco ... sem que sejam exibidos aos demais destinatários",
    cognitivo: {
      motivo: "Cobrar o efeito do campo de cópia oculta, item de altíssima recorrência.",
      palavraCritica: "sem que sejam exibidos",
    },
    comentario: {
      resolucao: "CERTO. Cco é a cópia carbono oculta (Bcc, de blind carbon copy): o destinatário recebe a mensagem, mas seu endereço não aparece para os demais. Além do uso corriqueiro, é a medida elementar para enviar comunicado a muitos destinatários sem expor a lista — omissão que, em órgão público, configura tratamento inadequado de dados pessoais.",
      fundamento: "RFC 5322 (formato de mensagens) — campos To, Cc e Bcc.",
      macete: "Cco = cego para os outros. Cc = todo mundo vê.",
      erroComum: "Trocar Cc por Cco na hora de responder.",
      comoBancaPensa: "Item 'limpo', que a banca repete quase sem variação de uma prova para outra."
    }
  },
  {
    id: "TI-163", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Campos Para, Cc e Cco",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "O campo Cc destina-se ao envio de cópia sem revelar os endereços dos destinatários aos demais participantes da mensagem, enquanto o campo Cco exibe a todos a relação completa de quem recebeu a cópia.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "Cc ... sem revelar ... Cco exibe a todos",
    cognitivo: {
      motivo: "Cobrar os dois campos com a inversão que a banca reiteradamente aplica.",
      palavraCritica: "Cco exibe a todos",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido: o Cc (cópia carbono) é visível a todos os destinatários; o Cco (cópia carbono oculta) é que preserva os endereços. Basta lembrar do 'o' final de oculta — é ele que marca a diferença entre as duas siglas.",
      fundamento: "RFC 5322 (formato de mensagens) — campos Cc e Bcc.",
      macete: "O 'o' a mais é de oculto. Sem o 'o', todo mundo enxerga.",
      erroComum: "Ler rápido e não notar a letra que distingue as siglas.",
      comoBancaPensa: "Explora a proximidade gráfica das siglas, invertendo exatamente a característica que as separa."
    }
  },
  {
    id: "TI-164", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Responder e responder a todos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.69,
    enunciado: "O acionamento da opção Responder a todos encaminha a resposta ao remetente e a todos os destinatários da mensagem original, inclusive aos endereços que constavam do campo Cco.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "a todos os destinatários ... inclusive aos endereços ... do campo Cco",
    cognitivo: {
      motivo: "Cobrar o alcance real do 'Responder a todos' diante da natureza oculta do Cco.",
      palavraCritica: "inclusive aos endereços que constavam do campo Cco",
    },
    comentario: {
      resolucao: "ERRADO. O Responder a todos alcança o remetente e os endereços dos campos Para e Cc — nunca os do Cco, que sequer são entregues aos demais destinatários na cópia que recebem. Daí, aliás, o efeito colateral clássico: quem estava em Cco e clica em Responder a todos revela a própria presença, que era justamente o que se pretendia ocultar.",
      fundamento: "RFC 5322 — supressão do campo Bcc nas cópias entregues aos demais destinatários.",
      macete: "Ninguém responde a quem não consegue ver. Cco fica de fora.",
      erroComum: "Ler 'a todos' como literalmente todos os que receberam.",
      comoBancaPensa: "Aproveita o advérbio 'todos' do nome do recurso para estendê-lo além do que ele alcança."
    }
  },
  {
    id: "TI-165", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Encaminhar e responder",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.85,
    enunciado: "Em qualquer cliente ou serviço de correio eletrônico de uso corrente, o encaminhamento de uma mensagem preserva, por padrão, os arquivos a ela anexados, comportamento que não se verifica na simples resposta ao remetente.",
    gabarito: "C", pegadinha: "generalizacao", palavraChave: "em qualquer cliente ... preserva, por padrão, os arquivos anexados",
    cognitivo: {
      motivo: "Contraexemplo: uma generalização ampla ('qualquer') que se confirma na prática.",
      palavraCritica: "qualquer cliente ou serviço ... por padrão",
    },
    comentario: {
      resolucao: "CERTO. A generalização procede: encaminhar significa repassar a mensagem inteira, anexos inclusive — é o comportamento padrão de Outlook, Gmail, Thunderbird e congêneres. Responder, ao contrário, presume que o interlocutor já tem o anexo e por isso não o reenvia, embora o usuário possa reanexá-lo manualmente. Note que 'por padrão' preserva o item: não se afirma que o anexo é insuprimível.",
      fundamento: "Comportamento padronizado das funções Forward e Reply nos clientes e webmails de uso corrente.",
      macete: "Encaminhar leva o pacote todo. Responder leva só a conversa.",
      erroComum: "Marcar ERRADO por causa do 'qualquer', sem notar a ressalva 'por padrão'.",
      comoBancaPensa: "Combina um quantificador amplo com uma ressalva que o torna exato — quem lê só o quantificador erra."
    }
  },
  {
    id: "TI-166", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Encaminhar e responder",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.74,
    enunciado: "Mensagem recebida com documento anexado somente pode ser encaminhada a outro usuário se o anexo for previamente removido, porquanto os protocolos de correio eletrônico vedam, por razões de segurança, o repasse de mensagens com arquivos anexados.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "somente pode ser encaminhada se o anexo for previamente removido ... protocolos ... vedam",
    cognitivo: {
      motivo: "Cobrar a inexistência de qualquer vedação protocolar ao encaminhamento de anexos.",
      palavraCritica: "os protocolos ... vedam",
    },
    comentario: {
      resolucao: "ERRADO. Nenhum protocolo de e-mail proíbe repassar anexos — o encaminhamento inclusive os mantém por padrão. O que existe são limites de TAMANHO impostos pelos provedores (na casa dos 25 MB, no Gmail) e bloqueios de certas extensões executáveis, como .exe, aplicados por política antimalware do serviço, não pelo protocolo.",
      fundamento: "RFC 5321/5322 e RFC 2045-2049 (MIME) — inexistência de vedação ao repasse de anexos.",
      macete: "Limite é de tamanho e de extensão, definido pelo provedor. Não é proibição do protocolo.",
      erroComum: "Aceitar a justificativa 'por segurança' sem checar se a regra existe.",
      comoBancaPensa: "Inventa uma vedação técnica e a legitima com apelo à segurança, além de reforçá-la com 'somente'."
    }
  },
  {
    id: "TI-167", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Entrega de mensagens e DNS",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.58,
    enunciado: "Para que uma mensagem seja entregue a determinado domínio, é indispensável que o servidor de origem localize, por consulta ao DNS, o registro MX do domínio de destino ou, na ausência deste, o respectivo registro de endereço, sem o que a entrega não se completa.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "indispensável ... registro MX ... ou, na ausência deste, o respectivo registro de endereço",
    cognitivo: {
      motivo: "Contraexemplo: uma exigência técnica que parece inventada e é real, com a ressalva correta do fallback.",
      palavraCritica: "indispensável ... sem o que a entrega não se completa",
    },
    comentario: {
      resolucao: "CERTO. O SMTP depende do DNS para saber para onde entregar: consulta-se o registro MX do domínio do destinatário e, não havendo MX, admite-se o fallback para o registro de endereço (A ou AAAA). Sem nenhum dos dois, o servidor de origem não tem destino para onde abrir a conexão e a mensagem retorna. A exigência é real — e a ressalva do fallback é justamente o que torna o item exato.",
      fundamento: "RFC 5321, seção de resolução de destino — registros MX e fallback para A/AAAA.",
      macete: "Sem MX (ou A) publicado, o domínio não recebe e-mail. O DNS é pré-requisito da entrega.",
      erroComum: "Marcar ERRADO por causa de 'indispensável', ou desconhecer o fallback e achar que o MX é a única via.",
      comoBancaPensa: "Usa vocabulário de exigência absoluta em um enunciado que traz, ele próprio, a exceção que o salva."
    }
  },

  /* ===== ORGANIZAÇÃO, PASTAS E WEBMAIL ===== */
  {
    id: "TI-168", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Pastas e exclusão de mensagens",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.83,
    enunciado: "No Microsoft Outlook, todas as mensagens excluídas da Caixa de Entrada são automaticamente redirecionadas para a pasta de lixo eletrônico, onde permanecem até a exclusão definitiva.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "todas as mensagens excluídas ... redirecionadas para a pasta de lixo eletrônico",
    cognitivo: {
      motivo: "Cobrar a distinção entre a pasta de itens excluídos e a de lixo eletrônico.",
      palavraCritica: "todas ... lixo eletrônico",
    },
    comentario: {
      resolucao: "ERRADO. São pastas distintas, com origens distintas. O que se exclui vai para Itens Excluídos — a lixeira. A pasta Lixo Eletrônico (spam) recebe o que o filtro classifica como indesejado, sem ação de exclusão do usuário. Uma mensagem pode inclusive percorrer as duas: cair no Lixo Eletrônico e, ao ser excluída de lá, ir para Itens Excluídos.",
      fundamento: "Estrutura de pastas padrão do Microsoft Outlook — Itens Excluídos e Lixo Eletrônico.",
      macete: "Excluiu = Itens Excluídos. Filtro pegou = Lixo Eletrônico. Caminhos diferentes.",
      erroComum: "Tratar lixeira e spam como a mesma pasta.",
      comoBancaPensa: "Usa 'todas' para fechar a afirmação e troca o destino por outra pasta existente, o que a torna plausível."
    }
  },
  {
    id: "TI-169", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Pastas e exclusão de mensagens",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.62,
    enunciado: "No Microsoft Outlook, a exclusão de uma mensagem a transfere para a pasta Itens Excluídos, ao passo que a classificação de uma mensagem como indesejada a transfere para a pasta Lixo Eletrônico, de modo que as duas pastas coexistem com finalidades diversas.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "Itens Excluídos ... Lixo Eletrônico ... coexistem com finalidades diversas",
    cognitivo: {
      motivo: "Contraexemplo: item com duas cláusulas encadeadas, ambas verdadeiras, no formato em que a banca costuma esconder uma falsa.",
      palavraCritica: "de modo que as duas pastas coexistem",
    },
    comentario: {
      resolucao: "CERTO. As duas afirmações e a conclusão procedem. Itens Excluídos é a lixeira, alimentada pela ação de excluir; Lixo Eletrônico é o depósito do filtro antispam. Convivem na mesma caixa postal e não se substituem. O formato do enunciado — duas premissas e um 'de modo que' — é exatamente aquele em que a banca costuma plantar um erro na cláusula final; aqui, não há.",
      fundamento: "Estrutura de pastas padrão do Microsoft Outlook.",
      macete: "Duas pastas, duas portas de entrada: a sua ação e a do filtro.",
      erroComum: "Desconfiar da cláusula conclusiva e marcar ERRADO sem identificar erro concreto.",
      comoBancaPensa: "Reproduz o formato da armadilha sem armar a armadilha — quem responde por forma, e não por conteúdo, erra."
    }
  },
  {
    id: "TI-170", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Webmail — Gmail",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.76,
    enunciado: "As mensagens movidas para a lixeira do Gmail são excluídas em definitivo após sete dias e sete horas, independentemente de qualquer providência do usuário.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "sete dias e sete horas",
    cognitivo: {
      motivo: "Cobrar o prazo real da lixeira do Gmail por meio de um número inventado.",
      palavraCritica: "sete dias e sete horas",
    },
    comentario: {
      resolucao: "ERRADO. O prazo é de 30 dias. Além do número errado, o item ignora que o usuário pode restaurar a mensagem ou esvaziar a lixeira manualmente antes do vencimento — de modo que a exclusão tampouco é indiferente à sua ação.",
      fundamento: "Política de retenção da lixeira do Gmail — 30 dias.",
      macete: "Lixeira do Gmail: 30 dias. Prazo quebrado e 'esquisito' é sinal de invenção.",
      erroComum: "Aceitar prazos específicos sem checar, por parecerem detalhe técnico.",
      comoBancaPensa: "Prazos artificialmente precisos são marca registrada de item falso — a precisão simula autoridade."
    }
  },
  {
    id: "TI-171", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Webmail — Gmail",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.65,
    enunciado: "No Gmail, tanto as mensagens movidas para a lixeira quanto as classificadas como spam são excluídas automaticamente após 30 dias, sem prejuízo de o usuário restaurá-las ou apagá-las em definitivo antes desse prazo.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "lixeira quanto ... spam ... 30 dias",
    cognitivo: {
      motivo: "Contraexemplo: prazo numérico exato e verdadeiro, logo após um item cujo número era inventado.",
      palavraCritica: "após 30 dias",
    },
    comentario: {
      resolucao: "CERTO. O prazo de 30 dias vale para as duas pastas: lixeira e spam. E a exclusão automática não retira do usuário o controle — ele pode restaurar a mensagem para a caixa de entrada ou esvaziar a pasta antes disso. Números redondos e verificáveis, ao contrário dos artificialmente quebrados, costumam ser os verdadeiros.",
      fundamento: "Políticas de retenção do Gmail para as pastas Lixeira e Spam — 30 dias.",
      macete: "Gmail: 30 dias na lixeira e 30 no spam. Mesmo prazo.",
      erroComum: "Marcar ERRADO por desconfiança generalizada de qualquer prazo em enunciado.",
      comoBancaPensa: "Cobra o número correto logo depois de tê-lo distorcido em outro item, para separar quem sabe de quem chuta."
    }
  },
  {
    id: "TI-172", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Webmail — Gmail",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.78,
    enunciado: "No Gmail, é possível inserir na mensagem arquivos hospedados no Google Drive, recurso que permite compartilhar conteúdo que excederia o limite de tamanho previsto para anexos convencionais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "inserir ... arquivos hospedados no Google Drive ... excederia o limite",
    cognitivo: {
      motivo: "Cobrar a integração entre o webmail e o armazenamento em nuvem do mesmo provedor.",
      palavraCritica: "excederia o limite de tamanho",
    },
    comentario: {
      resolucao: "CERTO. O compositor do Gmail traz o botão do Drive ao lado do de anexo: o arquivo pode seguir como link — hipótese em que o limite de 25 MB é contornado, pois nada trafega na mensagem — ou ser convertido em anexo comum. Vale a ressalva prática: enviado como link, o destinatário só abre se tiver permissão de acesso no Drive.",
      fundamento: "Funcionalidades do Gmail — inserção de arquivos do Google Drive e limite de 25 MB para anexos.",
      macete: "Passou de 25 MB? Manda o link do Drive, não o arquivo.",
      erroComum: "Achar que o Drive apenas armazena, sem integração com o compositor de mensagens.",
      comoBancaPensa: "Item correto sobre integração entre serviços do mesmo provedor, cobrado como conhecimento de uso."
    }
  },
  {
    id: "TI-173", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Limites de anexo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.6,
    enunciado: "O limite padrão para anexos em mensagens enviadas pelo Gmail é de 250 MB por mensagem, valor uniformizado entre os principais provedores de correio eletrônico do mercado.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "250 MB por mensagem ... uniformizado entre os principais provedores",
    cognitivo: {
      motivo: "Cobrar o limite real de anexo e a inexistência de padronização entre provedores.",
      palavraCritica: "250 MB ... uniformizado",
    },
    comentario: {
      resolucao: "ERRADO. Dois erros. O limite do Gmail é de 25 MB por mensagem — e vale lembrar que, com a codificação Base64, o arquivo original precisa ser bem menor que isso. Além disso, não há uniformização: cada provedor fixa o próprio teto, e o limite efetivo é o do lado mais restritivo entre remetente e destinatário.",
      fundamento: "Limite de 25 MB para anexos no Gmail; políticas próprias de cada provedor.",
      macete: "25 MB no Gmail. Passou disso, vai por link do Drive.",
      erroComum: "Confundir o limite de anexo com a capacidade de armazenamento da conta.",
      comoBancaPensa: "Infla um número conhecido em uma ordem de grandeza e acrescenta uma falsa padronização de mercado."
    }
  },
  {
    id: "TI-174", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Webmail e cliente de e-mail",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.89,
    enunciado: "Os serviços de webmail permitem o acesso às mensagens de correio eletrônico diretamente pelo navegador de Internet, sem que seja necessária a instalação de um programa cliente de e-mail no dispositivo do usuário.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "diretamente pelo navegador ... sem que seja necessária a instalação",
    cognitivo: {
      motivo: "Cobrar a definição de webmail em oposição ao cliente instalado.",
      palavraCritica: "sem que seja necessária a instalação",
    },
    comentario: {
      resolucao: "CERTO. No webmail, a interface é servida por páginas web e o processamento fica no provedor: basta um navegador e conexão. Já o cliente de e-mail — Outlook, Thunderbird — é programa instalado, que baixa ou sincroniza as mensagens localmente via POP3/IMAP. Os dois modelos podem conviver na mesma conta.",
      fundamento: "Conceitos de webmail e de cliente de correio eletrônico.",
      macete: "Webmail vive no navegador. Cliente vive instalado na máquina.",
      erroComum: "Confundir o aplicativo Outlook instalado com o Outlook.com acessado pelo navegador.",
      comoBancaPensa: "Item 'limpo' de conceituação, frequentemente usado para abrir o bloco de correio eletrônico."
    }
  },
  {
    id: "TI-175", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Webmail e cliente de e-mail",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.72,
    enunciado: "Denomina-se webmail o programa de correio eletrônico instalado no computador do usuário, responsável por transferir as mensagens do servidor para o disco local, ao passo que o cliente de e-mail é a interface acessada por navegador, hospedada no provedor.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "webmail ... instalado no computador ... cliente de e-mail ... acessada por navegador",
    cognitivo: {
      motivo: "Cobrar os mesmos dois conceitos com os rótulos invertidos.",
      palavraCritica: "webmail ... instalado",
    },
    comentario: {
      resolucao: "ERRADO. Os nomes estão trocados. Webmail é a interface acessada pelo navegador e hospedada no provedor — o próprio prefixo 'web' denuncia. Cliente de e-mail é o programa instalado localmente. A descrição de cada modelo, isoladamente, está correta: o erro é a atribuição.",
      fundamento: "Conceitos de webmail e de cliente de correio eletrônico.",
      macete: "Tem 'web' no nome? Está na web, no navegador.",
      erroComum: "Reconhecer as duas descrições e não perceber que foram permutadas.",
      comoBancaPensa: "Descreve corretamente os dois modelos e inverte apenas as etiquetas."
    }
  },
  {
    id: "TI-176", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Natureza assíncrona do e-mail",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.87,
    enunciado: "O envio de mensagem por correio eletrônico pressupõe que remetente e destinatário estejam simultaneamente conectados à Internet, condição sem a qual a comunicação não se estabelece.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "simultaneamente conectados ... sem a qual a comunicação não se estabelece",
    cognitivo: {
      motivo: "Cobrar a natureza assíncrona do correio eletrônico.",
      palavraCritica: "simultaneamente conectados",
    },
    comentario: {
      resolucao: "ERRADO. O e-mail é comunicação assíncrona: a mensagem é depositada na caixa postal do servidor de destino e ali permanece até que o destinatário se conecte para lê-la — que pode ser dias depois. Quem exige presença simultânea é a comunicação síncrona: chamada de vídeo, chat em tempo real, telefonia. Palavras como 'simultaneamente' e 'ao mesmo tempo' em item de e-mail costumam denunciar o erro.",
      fundamento: "Modelo store-and-forward do correio eletrônico (RFC 5321).",
      macete: "E-mail é carta, não telefonema. O carteiro deixa na caixa e vai embora.",
      erroComum: "Transferir ao e-mail a lógica dos aplicativos de mensagem instantânea.",
      comoBancaPensa: "Atribui ao correio eletrônico a característica definidora da comunicação síncrona."
    }
  },
  {
    id: "TI-177", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Natureza assíncrona do e-mail",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.64,
    enunciado: "O correio eletrônico opera segundo o modelo de armazenamento e encaminhamento, em que a mensagem transita entre servidores e é retida na caixa postal de destino até o acesso do destinatário, podendo o servidor de origem efetuar novas tentativas quando o destino esteja temporariamente indisponível.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "armazenamento e encaminhamento ... retida ... novas tentativas",
    cognitivo: {
      motivo: "Cobrar o modelo store-and-forward e o comportamento de reentrega em caso de falha temporária.",
      palavraCritica: "novas tentativas quando o destino esteja temporariamente indisponível",
    },
    comentario: {
      resolucao: "CERTO. O SMTP é store-and-forward: cada servidor assume a responsabilidade pela mensagem e a repassa adiante. Diante de falha temporária (erro da classe 4xx), o servidor de origem mantém a mensagem em fila e repete a tentativa por horas ou dias antes de devolvê-la ao remetente. Já a falha permanente (5xx), como destinatário inexistente, gera devolução imediata.",
      fundamento: "RFC 5321 — modelo de transferência e códigos de resposta temporária (4xx) e permanente (5xx).",
      macete: "4xx = tenta de novo depois. 5xx = devolve agora.",
      erroComum: "Supor que qualquer falha na entrega devolve a mensagem de imediato.",
      comoBancaPensa: "Item correto que avança do conceito de assincronia para o comportamento concreto da fila de entrega."
    }
  },

  /* ===== CLIENTE OUTLOOK ===== */
  {
    id: "TI-178", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Microsoft Outlook — contas",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "O Microsoft Outlook permite configurar, em uma mesma instalação, diversas contas de correio eletrônico de provedores distintos, cada qual com sua estrutura própria de pastas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "diversas contas ... de provedores distintos ... estrutura própria de pastas",
    cognitivo: {
      motivo: "Cobrar a capacidade multiconta do cliente, recorte que a banca repete em versões diferentes.",
      palavraCritica: "provedores distintos",
    },
    comentario: {
      resolucao: "CERTO. O recurso não é novidade nem exclusividade de versão recente: Outlook 2010, 2013, 2016, 2019 e Microsoft 365 gerenciam múltiplas contas simultâneas, de provedores diversos, cada uma com seu conjunto de pastas — além da caixa de entrada unificada, se o usuário preferir.",
      fundamento: "Funcionalidades de configuração de contas do Microsoft Outlook.",
      macete: "Outlook sempre aceitou várias contas. 'Só uma conta' é item falso.",
      erroComum: "Supor que a limitação existia nas versões mais antigas.",
      comoBancaPensa: "Item 'limpo', que costuma vir na mesma prova em que se afirma o contrário sobre outra versão."
    }
  },
  {
    id: "TI-179", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Microsoft Outlook — contas",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.71,
    enunciado: "O Microsoft Outlook 2010 não admite a configuração de múltiplas contas de correio eletrônico em uma única instalação, ficando o usuário limitado a uma conta por vez.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "não admite ... limitado a uma conta por vez",
    cognitivo: {
      motivo: "Cobrar a mesma capacidade pela negativa, aplicada a versão antiga.",
      palavraCritica: "não admite ... uma conta por vez",
    },
    comentario: {
      resolucao: "ERRADO. O Outlook 2010 já gerenciava várias contas na mesma instalação — a limitação simplesmente não existe. Expressões como 'não suporta', 'apenas uma' e 'limitando o usuário' aplicadas a versões antigas de programas conhecidos costumam indicar restrição inventada.",
      fundamento: "Funcionalidades de configuração de contas do Microsoft Outlook 2010.",
      macete: "Versão antiga não significa versão capenga. O 2010 aceita várias contas.",
      erroComum: "Presumir que o recurso surgiu em versão posterior.",
      comoBancaPensa: "Nega uma capacidade real e usa a antiguidade da versão como álibi de plausibilidade."
    }
  },
  {
    id: "TI-180", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Microsoft Outlook — regras",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.88,
    enunciado: "O recurso de regras do Microsoft Outlook possibilita automatizar o tratamento das mensagens recebidas, com ações como mover para pastas determinadas, atribuir categorias, sinalizar, encaminhar e responder, segundo critérios definidos pelo próprio usuário.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mover ... atribuir categorias ... encaminhar e responder ... critérios definidos pelo usuário",
    cognitivo: {
      motivo: "Cobrar o alcance das regras do Outlook — item que a banca costuma apresentar corretamente.",
      palavraCritica: "critérios definidos pelo próprio usuário",
    },
    comentario: {
      resolucao: "CERTO. As regras combinam condições (remetente, palavra no assunto, destinatário, tamanho) com ações (mover, copiar, excluir, categorizar, sinalizar, encaminhar, responder com modelo). O recurso existe no Outlook para desktop e na versão web do Microsoft 365. Cuidado com o reflexo: por descrever muitas funcionalidades, o item parece 'bom demais' — mas está correto.",
      fundamento: "Funcionalidade de Regras e Alertas do Microsoft Outlook.",
      macete: "Regra = condição + ação. A lista de ações é longa mesmo.",
      erroComum: "Marcar ERRADO por achar que enumeração extensa é sinal de exagero.",
      comoBancaPensa: "Descrição completa e coerente de um recurso real — a armadilha está em desconfiar dela."
    }
  },
  {
    id: "TI-181", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Microsoft Outlook — regras",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.57,
    enunciado: "As regras configuradas no Microsoft Outlook são integralmente processadas pelo servidor de correio eletrônico, de modo que se aplicam às mensagens recebidas ainda que o programa esteja fechado no computador do usuário.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "integralmente processadas pelo servidor ... ainda que o programa esteja fechado",
    cognitivo: {
      motivo: "Cobrar a distinção entre regras executadas no servidor e regras somente-cliente.",
      palavraCritica: "integralmente ... ainda que o programa esteja fechado",
    },
    comentario: {
      resolucao: "ERRADO. Parte das regras roda no servidor e independe do cliente, mas outras são marcadas como 'somente neste computador' — tipicamente as que dependem de recursos locais, como exibir alerta na área de trabalho, tocar som, imprimir ou mover para arquivo de dados local. Essas só são executadas com o Outlook aberto. O erro está no 'integralmente'.",
      fundamento: "Regras client-only x server-side no Microsoft Outlook/Exchange.",
      macete: "Regra que mexe no computador só roda com o programa aberto.",
      erroComum: "Supor que toda automação de caixa postal ocorre no servidor.",
      comoBancaPensa: "Toma o comportamento de parte das regras e o estende a todas com 'integralmente'."
    }
  },
  {
    id: "TI-182", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Microsoft Outlook — arquivos de dados",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.59,
    enunciado: "No Microsoft Outlook, o arquivo de extensão .ost armazena mensagens que foram retiradas do servidor e passam a existir apenas localmente, ao passo que o arquivo .pst mantém uma cópia em cache sincronizada com a caixa postal remota.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: ".ost ... apenas localmente ... .pst ... cópia em cache sincronizada",
    cognitivo: {
      motivo: "Cobrar a diferença entre os dois arquivos de dados do Outlook, relevante em exame pericial de estações de trabalho.",
      palavraCritica: ".ost ... apenas localmente",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. O .ost (offline storage table) é a cópia em cache sincronizada com o servidor, que permite trabalhar sem conexão e se reconcilia ao reconectar. O .pst (personal storage table) é o arquivo de armazenamento local, usado em contas POP3 e em arquivamento — nele a mensagem pode existir apenas na máquina. A distinção importa em perícia: um .pst pode conter mensagens que já não estão no servidor.",
      fundamento: "Arquivos de dados do Microsoft Outlook — .pst e .ost.",
      macete: "OST = Offline SincronizadO com o servidor. PST = Pessoal, fica na máquina.",
      erroComum: "Trocar as duas extensões, que diferem por uma letra.",
      comoBancaPensa: "Inverte dois arquivos de nomes quase idênticos, descrevendo cada função corretamente no rótulo errado."
    }
  },

  /* ===== CABEÇALHOS E VESTÍGIOS ===== */
  {
    id: "TI-183", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Análise de cabeçalhos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.6,
    enunciado: "Os campos Received do cabeçalho de uma mensagem registram os servidores por onde ela transitou, sendo acrescentados sucessivamente a cada salto, e o campo Message-ID é gerado pelo cliente do destinatário no momento em que a mensagem é aberta.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "Message-ID é gerado pelo cliente do destinatário no momento em que a mensagem é aberta",
    cognitivo: {
      motivo: "Cobrar o momento e a origem da geração do identificador único da mensagem.",
      palavraCritica: "gerado pelo cliente do destinatário",
    },
    comentario: {
      resolucao: "ERRADO. A primeira parte é verdadeira: cada servidor insere um campo Received no topo, de modo que a leitura de baixo para cima reconstitui o trajeto. Mas o Message-ID é atribuído na ORIGEM, quando a mensagem é composta ou aceita pelo primeiro servidor, e acompanha a mensagem por todo o percurso — é justamente essa estabilidade que o torna útil para correlacionar cópias da mesma mensagem em caixas postais diferentes.",
      fundamento: "RFC 5322 — campos Received e Message-ID.",
      macete: "Received se acumula no caminho. Message-ID nasce na origem e não muda.",
      erroComum: "Aceitar o item inteiro por conta da primeira metade, que está correta.",
      comoBancaPensa: "Abre com afirmação verdadeira e detalhada para reduzir a vigilância antes da cláusula falsa."
    }
  },
  {
    id: "TI-184", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Análise de cabeçalhos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.67,
    enunciado: "O endereço constante do campo De: do cabeçalho de uma mensagem constitui elemento suficiente para atribuir a autoria do envio, dispensando o exame dos demais campos do cabeçalho e dos resultados de verificação de autenticidade.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "elemento suficiente para atribuir a autoria ... dispensando o exame dos demais campos",
    cognitivo: {
      motivo: "Cobrar a insuficiência probatória do campo De:, decorrência direta da ausência de autenticação no SMTP.",
      palavraCritica: "suficiente ... dispensando",
    },
    comentario: {
      resolucao: "ERRADO. O campo De: é preenchido pelo emissor e pode ser forjado — é precisamente o que se explora no spoofing. A atribuição de autoria exige o exame do conjunto: campos Received (com IPs e horários), Return-Path, Message-ID e os resultados registrados de SPF, DKIM e DMARC, usualmente consolidados no campo Authentication-Results. Tratar o De: como suficiente inverte a lógica da própria matéria.",
      fundamento: "RFC 5322 e RFC 7489 — dissociação entre o campo De: e a autenticação do remetente.",
      macete: "O De: é o que o remetente diz ser. O cabeçalho inteiro é o que aconteceu.",
      erroComum: "Confundir o endereço exibido na interface com prova de origem.",
      comoBancaPensa: "Eleva um campo real à condição de prova bastante, contrariando a fragilidade estrutural do SMTP."
    }
  },

  /* ===== COMPACTAÇÃO PARA ENVIO ===== */
  {
    id: "TI-185", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Compactação de arquivos para envio",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.73,
    enunciado: "Programas compactadores, como o 7-Zip e o WinRAR, reduzem o tamanho dos arquivos e permitem reuni-los em um único pacote, o que facilita o envio por correio eletrônico, sem que a compactação, por si só, torne o conteúdo inacessível a terceiros.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "reduzem o tamanho ... reuni-los em um único pacote ... sem que a compactação, por si só, torne o conteúdo inacessível",
    cognitivo: {
      motivo: "Cobrar as duas funções do compactador e a diferença em relação à criptografia.",
      palavraCritica: "por si só, torne o conteúdo inacessível",
    },
    comentario: {
      resolucao: "CERTO. Compactar cumpre duas funções — reduzir e agrupar — e nenhuma delas é proteger: qualquer pessoa com o programa correspondente abre o pacote. Proteção só existe se o usuário optar por senha e cifragem no momento de criar o arquivo (o 7-Zip oferece AES-256, por exemplo). São recursos distintos que convivem na mesma ferramenta.",
      fundamento: "Funcionamento de compactadores de arquivo (ZIP, RAR, 7z) e recursos opcionais de cifragem.",
      macete: "Compactar encolhe. Criptografar esconde. Só a senha protege.",
      erroComum: "Supor que arquivo compactado é arquivo protegido.",
      comoBancaPensa: "Item correto que embute a ressalva conceitual — quem não distingue compactar de cifrar não valida a última cláusula."
    }
  },
  {
    id: "TI-186", disciplina: "TI e Segurança Cibernética", assunto: "Correio eletrônico", subassunto: "Compactação de arquivos para envio",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.66,
    enunciado: "A compactação de documentos em formato ZIP antes do envio por correio eletrônico assegura a confidencialidade do conteúdo, pois converte os dados em formato ilegível, que somente o destinatário consegue reverter.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "assegura a confidencialidade ... somente o destinatário consegue reverter",
    cognitivo: {
      motivo: "Cobrar a diferença entre compactação e criptografia pela atribuição indevida.",
      palavraCritica: "assegura a confidencialidade",
    },
    comentario: {
      resolucao: "ERRADO. Compactar não é cifrar. O formato ZIP é aberto e reversível por qualquer descompactador — o conteúdo não fica restrito ao destinatário. Confidencialidade dependeria de senha com cifragem, ou de solução de criptografia da própria mensagem, como S/MIME ou OpenPGP.",
      fundamento: "Distinção entre compactação (redução e agrupamento) e criptografia (confidencialidade).",
      macete: "ZIP sem senha é envelope transparente: menor, mas visível.",
      erroComum: "Ler 'formato ilegível ao abrir no bloco de notas' como criptografia.",
      comoBancaPensa: "Atribui a um recurso de eficiência uma propriedade de segurança que ele não tem."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE65);

/* Frequência de temas — TI e Segurança Cibernética (Módulo Correio Eletrônico) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "TI e Segurança Cibernética");
  if (!d) { d = { disciplina: "TI e Segurança Cibernética", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Correio eletrônico — protocolos SMTP, POP3 e IMAP e portas", freq: 86, tendencia: "alta", prob: 0.86 },
    { tema: "Correio eletrônico — campos Para/Cc/Cco, encaminhar e responder", freq: 84, tendencia: "alta", prob: 0.84 },
    { tema: "Correio eletrônico — webmail x cliente, pastas e Outlook", freq: 81, tendencia: "media", prob: 0.81 },
    { tema: "Correio eletrônico — spoofing, SPF/DKIM/DMARC e análise de cabeçalhos", freq: 74, tendencia: "alta", prob: 0.74 },
  );
})();
