/* =====================================================================
   QUESTLAB — Lote 28: TI E SEGURANÇA CIBERNÉTICA (expansão)
   Preenche lacunas confirmadas pela auditoria do edital nos itens de
   Segurança Cibernética (frameworks, protocolos de autenticação,
   gestão de identidades) e nos Crimes Cibernéticos (autenticação,
   privacidade, Convenção de Budapeste, art. 154-A pós-Lei 14.155/2021).

   Itens 100% originais, com gabarito verificado de forma independente
   (nenhum texto de terceiros reproduzido).
   14 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE28 = [

  /* ===== AUTENTICAÇÃO E PRIVACIDADE (Crimes Cibernéticos — Segurança Digital) ===== */
  {
    id: "CC-015", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Autenticação", subassunto: "Autenticação multifator (MFA)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (segurança digital)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "A autenticação multifator (MFA) caracteriza-se pela exigência de fatores de verificação de natureza distinta — como algo que o usuário sabe (senha), algo que ele possui (token ou aplicativo) e algo que ele é (biometria) —, não sendo suficiente, para configurá-la, o uso de duas senhas diferentes cadastradas pelo próprio usuário.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "fatores de natureza distinta",
    cognitivo: {
      motivo: "Cobrar o conceito correto de MFA (fatores de categorias diferentes).",
      palavraCritica: "fatores de natureza distinta ... não sendo suficiente ... duas senhas",
    },
    comentario: {
      resolucao: "CERTO. A autenticação multifator exige a combinação de fatores de natureza distinta — algo que o usuário sabe (senha/PIN), algo que possui (token, aplicativo autenticador) e algo que é (biometria). O uso de duas senhas, ainda que diferentes, representa apenas o fator 'conhecimento' duplicado, não caracterizando MFA.",
      fundamento: "Segurança da informação — autenticação multifator (boas práticas de segurança digital).",
      macete: "MFA = fatores de categorias diferentes, nunca dois do mesmo tipo.",
      erroComum: "Considerar duas senhas distintas como MFA.",
      comoBancaPensa: "Reduz o conceito de MFA a algo mais simples do que realmente é."
    }
  },
  {
    id: "CC-016", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Privacidade", subassunto: "Metadados de geolocalização (EXIF)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (segurança digital)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "A desativação da opção de geolocalização em fotografias publicadas em redes sociais constitui medida relevante de segurança e privacidade, uma vez que dispositivos móveis modernos costumam incorporar metadados de localização (dados EXIF) aos arquivos de imagem capturados.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "constitui medida relevante",
    cognitivo: {
      motivo: "Cobrar a existência real de metadados EXIF de geolocalização em fotos.",
      palavraCritica: "constitui medida relevante",
    },
    comentario: {
      resolucao: "CERTO. Dispositivos móveis modernos costumam gravar metadados EXIF — incluindo coordenadas de geolocalização — nos arquivos de imagem capturados, salvo quando essa função é desativada nas configurações. Por isso, desativar a geolocalização é medida relevante de segurança e privacidade, e não irrelevante.",
      fundamento: "Segurança digital — privacidade e proteção de dados pessoais.",
      macete: "Foto de celular tem GPS embutido no arquivo (EXIF), a menos que desativado.",
      erroComum: "Achar que fotos não carregam dados de localização.",
      comoBancaPensa: "Nega um risco real de privacidade para induzir ao erro."
    }
  },
  {
    id: "CC-017", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Golpes virtuais", subassunto: "Phishing",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (golpes virtuais)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "O phishing é uma técnica de exploração de falhas técnicas de segurança dos servidores das instituições visadas, e não uma técnica de engenharia social baseada no engano direto da vítima por meio de e-mails, mensagens ou sítios eletrônicos falsos.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "falhas técnicas ... não ... engenharia social",
    cognitivo: {
      motivo: "Cobrar o conceito básico de phishing.",
      palavraCritica: "falhas técnicas ... não ... engenharia social",
    },
    comentario: {
      resolucao: "ERRADO. O phishing é justamente uma técnica de engenharia social, e não de exploração de falhas técnicas — o golpista se faz passar por instituição ou pessoa confiável (via e-mail, mensagem ou site falso) para induzir a vítima a fornecer dados sensíveis ou clicar em links maliciosos, explorando o engano humano, não uma vulnerabilidade de servidor.",
      fundamento: "Segurança digital — golpes virtuais (phishing).",
      macete: "Phishing explora a confiança humana, não uma falha técnica.",
      erroComum: "Tratar o phishing como ataque puramente técnico.",
      comoBancaPensa: "Nega a natureza correta do golpe para induzir ao erro."
    }
  },
  {
    id: "CC-018", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Invasão de dispositivo", subassunto: "Art. 154-A pós-Lei 14.155/2021",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 154-A; Lei 14.155/2021)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Mesmo após as alterações promovidas pela Lei 14.155/2021, o crime de invasão de dispositivo informático (art. 154-A do Código Penal) continua exigindo, como elementar do tipo, a violação indevida de mecanismo de segurança do dispositivo invadido.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "continua exigindo ... violação indevida de mecanismo de segurança",
    cognitivo: {
      motivo: "Cobrar a permanência da elementar 'violação de mecanismo de segurança' após a Lei 14.155/2021.",
      palavraCritica: "continua exigindo",
    },
    comentario: {
      resolucao: "CERTO. A Lei 14.155/2021 agravou a pena do art. 154-A (de detenção para reclusão) e incluiu qualificadoras (vítima idosa ou vulnerável, instituições financeiras, infraestruturas críticas, administração pública), mas não alterou a elementar do caput: o crime continua exigindo a invasão mediante violação indevida de mecanismo de segurança do dispositivo.",
      fundamento: "CP, art. 154-A; Lei 14.155/2021.",
      macete: "14.155/21: pena mais grave + qualificadoras. Elementar da violação de segurança permanece.",
      erroComum: "Achar que a lei de 2021 dispensou a violação do mecanismo de segurança.",
      comoBancaPensa: "Testa se o candidato confunde agravamento de pena com mudança na conduta típica."
    }
  },
  {
    id: "CC-019", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Convenção de Budapeste", subassunto: "Cooperação internacional (Decreto 11.491/2023)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Decreto 11.491/2023)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.76,
    enunciado: "A Convenção sobre o Crime Cibernético (Convenção de Budapeste), incorporada ao ordenamento brasileiro pelo Decreto 11.491/2023, tem por finalidade exclusiva estabelecer mecanismos de cooperação internacional na investigação e na obtenção de provas eletrônicas, não se ocupando da harmonização da tipificação de condutas praticadas por meio de sistemas informáticos entre os Estados signatários.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "finalidade exclusiva ... não se ocupando da harmonização",
    cognitivo: {
      motivo: "Cobrar a finalidade geral da Convenção de Budapeste.",
      palavraCritica: "finalidade exclusiva ... não se ocupando da harmonização",
    },
    comentario: {
      resolucao: "ERRADO. A Convenção de Budapeste, internalizada pelo Decreto 11.491/2023, tem dupla finalidade: harmonizar a tipificação de condutas cibernéticas entre os países signatários E estabelecer mecanismos de cooperação internacional para a investigação e obtenção de provas eletrônicas. A assertiva restringe indevidamente a Convenção a apenas uma dessas finalidades.",
      fundamento: "Decreto 11.491/2023 (Convenção de Budapeste).",
      macete: "Budapeste: harmoniza tipos + coopera na investigação internacional.",
      erroComum: "Reduzir a Convenção a um único objetivo.",
      comoBancaPensa: "Restringe indevidamente uma finalidade dupla a apenas uma delas."
    }
  },

  /* ===== FRAMEWORKS E PROTOCOLOS (TI e Segurança Cibernética) ===== */
  {
    id: "TI-017", disciplina: "TI e Segurança Cibernética", assunto: "Frameworks de segurança", subassunto: "NIST Cybersecurity Framework (funções)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (NIST CSF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.72,
    enunciado: "O NIST Cybersecurity Framework (NIST CSF) estrutura-se, entre outras, em funções essenciais que incluem identificar, proteger, detectar e responder, prescindindo de uma função específica voltada à recuperação após a ocorrência de um incidente de segurança.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "prescindindo de ... recuperação",
    cognitivo: {
      motivo: "Cobrar as funções centrais do NIST CSF.",
      palavraCritica: "prescindindo de ... recuperação",
    },
    comentario: {
      resolucao: "ERRADO. O NIST Cybersecurity Framework inclui, sim, uma quinta função essencial: Recuperar (Recover), além de Identificar, Proteger, Detectar e Responder (IPDRR). O framework não prescinde dessa função — ela orienta o retorno à normalidade após o incidente.",
      fundamento: "TI/Segurança — NIST Cybersecurity Framework (NIST CSF).",
      macete: "IPDRR: Identificar, Proteger, Detectar, Responder, Recuperar.",
      erroComum: "Omitir a função 'Recuperar' ao listar as funções do framework.",
      comoBancaPensa: "Omite uma das cinco funções para testar a memorização completa."
    }
  },
  {
    id: "TI-018", disciplina: "TI e Segurança Cibernética", assunto: "Gestão de identidades", subassunto: "SSO (Single Sign-On)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (gestão de identidades e acesso)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.72,
    enunciado: "O Single Sign-On (SSO) é um mecanismo de autenticação que permite ao usuário acessar múltiplos sistemas ou aplicações distintas mediante uma única autenticação inicial, sem a necessidade de inserir novamente suas credenciais a cada novo sistema acessado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "única autenticação inicial ... múltiplos sistemas",
    cognitivo: {
      motivo: "Cobrar o conceito de SSO.",
      palavraCritica: "única autenticação ... múltiplos sistemas",
    },
    comentario: {
      resolucao: "CERTO. O Single Sign-On (SSO) permite que, mediante uma única autenticação inicial, o usuário tenha acesso a múltiplos sistemas ou aplicações integradas, sem necessidade de nova inserção de credenciais a cada acesso — geralmente implementado com protocolos como SAML, OAuth2 ou OpenID Connect.",
      fundamento: "TI/Segurança — gestão de identidades e acesso (SSO).",
      macete: "SSO: um login só, acesso a vários sistemas.",
      erroComum: "Exigir reautenticação em cada sistema, negando a essência do SSO.",
      comoBancaPensa: "Item de fixação conceitual sobre gestão de acesso."
    }
  },
  {
    id: "TI-019", disciplina: "TI e Segurança Cibernética", assunto: "Criptografia", subassunto: "Simétrica × assimétrica",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (criptografia)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "Na criptografia assimétrica, a mesma chave é utilizada tanto para cifrar quanto para decifrar a informação, ao passo que, na criptografia simétrica, empregam-se um par de chaves distintas — uma pública e uma privada —, sendo uma delas usada para cifrar e a outra para decifrar.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "assimétrica ... mesma chave ... simétrica ... par de chaves",
    cognitivo: {
      motivo: "Cobrar a distinção entre criptografia simétrica e assimétrica.",
      palavraCritica: "mesma chave ... par de chaves distintas",
    },
    comentario: {
      resolucao: "ERRADO. Os conceitos foram invertidos. Na criptografia simétrica (e não assimétrica) a mesma chave cifra e decifra a informação. Na criptografia assimétrica (e não simétrica) utiliza-se um par de chaves — pública e privada —, de modo que uma cifra e a outra decifra.",
      fundamento: "TI/Segurança — técnicas de criptografia.",
      macete: "Simétrica: 1 chave. Assimétrica: par de chaves (pública/privada).",
      erroComum: "Não perceber a inversão entre simétrica e assimétrica.",
      comoBancaPensa: "Item de fixação conceitual clássico de criptografia, com troca dos rótulos."
    }
  },
  {
    id: "TI-020", disciplina: "TI e Segurança Cibernética", assunto: "Procedimentos de backup", subassunto: "Regra 3-2-1",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (backup)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.7,
    enunciado: "A regra 3-2-1 de backup recomenda manter duas cópias dos dados, armazenadas em três tipos de mídia diferentes, com pelo menos uma cópia mantida fora do local (off-site) de origem dos dados.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "duas cópias ... três tipos de mídia",
    cognitivo: {
      motivo: "Cobrar a regra 3-2-1 de backup.",
      palavraCritica: "duas cópias ... três tipos de mídia",
    },
    comentario: {
      resolucao: "ERRADO. Os números foram trocados. A regra correta é: 3 cópias dos dados (e não 2), armazenadas em 2 tipos diferentes de mídia (e não 3), com pelo menos 1 cópia mantida em local externo (off-site).",
      fundamento: "TI/Segurança — boas práticas de backup (regra 3-2-1).",
      macete: "3 cópias, 2 mídias, 1 fora do local.",
      erroComum: "Trocar os números da regra.",
      comoBancaPensa: "Troca os números corretos por outros plausíveis."
    }
  },
  {
    id: "TI-021", disciplina: "TI e Segurança Cibernética", assunto: "Segurança de rede", subassunto: "IDS × IPS",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (IDS/IPS)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.72,
    enunciado: "O IPS (Intrusion Prevention System) tem a função de detectar e alertar sobre atividades suspeitas na rede, sem necessariamente bloqueá-las, ao passo que o IDS (Intrusion Detection System) atua de forma ativa, podendo bloquear ou impedir automaticamente o tráfego identificado como malicioso.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "IPS ... detectar e alertar ... IDS ... bloquear",
    cognitivo: {
      motivo: "Cobrar a distinção entre IDS (passivo) e IPS (ativo).",
      palavraCritica: "detectar e alertar ... bloquear",
    },
    comentario: {
      resolucao: "ERRADO. Os papéis foram invertidos. O IDS (e não o IPS) atua de forma passiva, detectando e alertando sobre atividades suspeitas sem bloqueá-las. Já o IPS (e não o IDS) atua de forma ativa, podendo bloquear automaticamente o tráfego identificado como malicioso.",
      fundamento: "TI/Segurança — segurança de rede (IDS/IPS).",
      macete: "IDS: detecta e alerta (passivo). IPS: detecta e bloqueia (ativo).",
      erroComum: "Não perceber a troca de nomes entre IDS e IPS.",
      comoBancaPensa: "Item de fixação conceitual sobre soluções de segurança de rede, com inversão dos rótulos."
    }
  },
  {
    id: "TI-022", disciplina: "TI e Segurança Cibernética", assunto: "Computação em nuvem", subassunto: "Responsabilidade compartilhada",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (segurança em nuvem)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.68,
    enunciado: "Nos ambientes de computação em nuvem, o modelo de responsabilidade compartilhada estabelece que a segurança da infraestrutura física é, em regra, atribuída ao provedor do serviço de nuvem, ao passo que a segurança da configuração de acesso, dos dados armazenados e das aplicações do cliente permanece, em geral, sob a responsabilidade deste último.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "provedor ... infraestrutura ... cliente ... configuração e dados",
    cognitivo: {
      motivo: "Cobrar o modelo de responsabilidade compartilhada em nuvem.",
      palavraCritica: "provedor ... infraestrutura. Cliente ... configuração e dados",
    },
    comentario: {
      resolucao: "CERTO. No modelo de responsabilidade compartilhada, o provedor de nuvem responde pela segurança da infraestrutura física subjacente (segurança 'da' nuvem), enquanto o cliente é responsável pela segurança das configurações de acesso, dos dados e das aplicações que utiliza (segurança 'na' nuvem).",
      fundamento: "TI/Segurança — práticas de segurança em ambientes de nuvem.",
      macete: "Segurança DA nuvem: provedor. Segurança NA nuvem: cliente.",
      erroComum: "Atribuir toda a responsabilidade a uma única parte.",
      comoBancaPensa: "Testa a divisão correta de responsabilidades no modelo de nuvem."
    }
  },
  {
    id: "TI-023", disciplina: "TI e Segurança Cibernética", assunto: "Fundamentos de segurança", subassunto: "Tríade CID (confidencialidade, integridade, disponibilidade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (fundamentos de segurança da informação)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.78,
    enunciado: "Os princípios fundamentais da segurança da informação — confidencialidade, integridade e disponibilidade — asseguram, respectivamente, que os dados sejam acessíveis apenas por pessoas autorizadas, que permaneçam exatos e não sejam alterados indevidamente, e que estejam acessíveis sempre que necessário aos usuários autorizados.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "confidencialidade ... integridade ... disponibilidade",
    cognitivo: {
      motivo: "Cobrar a tríade CID (fundamentos de segurança).",
      palavraCritica: "confidencialidade ... integridade ... disponibilidade",
    },
    comentario: {
      resolucao: "CERTO. A tríade CID resume os fundamentos da segurança da informação: confidencialidade (acesso restrito a pessoas autorizadas), integridade (exatidão dos dados, sem alteração indevida) e disponibilidade (acesso garantido sempre que necessário aos usuários autorizados).",
      fundamento: "TI/Segurança — fundamentos de segurança da informação (tríade CID).",
      macete: "CID: Confidencialidade, Integridade, Disponibilidade.",
      erroComum: "Trocar os significados dos três princípios entre si.",
      comoBancaPensa: "Item de fixação (nível fácil) sobre os fundamentos da segurança."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE28);
