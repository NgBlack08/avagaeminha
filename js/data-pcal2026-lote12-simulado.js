/* =====================================================================
   CEBRASPE LAB — Lote 12: SIMULADO com textos longos (ampliação)
   Amplia o formato de bloco (texto/caso denso + vários itens Certo/Errado
   em sequência) às disciplinas ainda não contempladas no lote 11:
     BLOCO 5 — Caso de contratação pública    → Direito Administrativo
     BLOCO 6 — Incidente cibernético          → Crimes Cibernéticos e TI
     BLOCO 7 — Diligência policial            → Legislação Penal Especial
     BLOCO 8 — Declarações em PAD             → Raciocínio Lógico e Ética
   Textos ORIGINAIS no registro formal da banca. 20 itens, equilibrados
   em 10 Certo / 10 Errado. Fundamentados na legislação vigente e na
   jurisprudência consolidada. Não reproduzem questões oficiais.
   ===================================================================== */

const TXT_BLOCO5 = "Determinado órgão da Administração estadual promoveu a contratação direta de empresa para o fornecimento de equipamentos de proteção individual, afastando o procedimento licitatório sob a alegação de situação emergencial decorrente de evento climático que atingira a região. O processo administrativo foi instruído com a razão da escolha do fornecedor e a justificativa do preço praticado.\n\nPosteriormente, apurou-se que o servidor responsável pela condução do procedimento havia atuado deliberadamente para favorecer a empresa contratada, com cujo sócio mantinha vínculo de parentesco não declarado. Do fornecimento resultaram equipamentos defeituosos, que vieram a causar dano a terceiros durante operação de resgate conduzida por agentes públicos.";

const TXT_BLOCO6 = "Delegacia especializada recebeu notícia de que os sistemas de determinada empresa haviam sido comprometidos. Apurou-se que um funcionário recebera mensagem eletrônica que simulava comunicação do setor de tecnologia da própria companhia, na qual se solicitava a confirmação de credenciais em página visualmente idêntica à do sistema corporativo. Fornecidos os dados, agentes maliciosos acessaram a rede interna, cifraram os arquivos armazenados e passaram a exigir pagamento em criptoativos para o restabelecimento do acesso.\n\nNo curso da investigação, apreendeu-se, na residência de um dos suspeitos, o computador utilizado nas operações. Constatou-se, ainda, que a empresa não mantinha rotina regular de cópias de segurança de seus dados.";

const TXT_BLOCO7 = "Em cumprimento a mandado de busca e apreensão regularmente expedido, equipe policial ingressou em residência e, durante a diligência, algemou o morador, o qual não oferecia resistência nem representava risco à integridade física dos agentes ou de terceiros. Na sequência, um dos policiais, com o propósito de obter confissão acerca do local em que estaria escondida arma de fogo, submeteu o detido a intenso sofrimento físico.\n\nAo final da diligência, foram apreendidas, no interior do imóvel, uma espingarda de uso permitido, cujo registro se encontrava vencido havia dois anos, e respectivas munições. O detido foi então conduzido à delegacia de polícia.";

const TXT_BLOCO8 = "Em procedimento administrativo disciplinar instaurado para apurar irregularidade na tramitação de expediente, três servidores prestaram as seguintes declarações, todas consideradas verdadeiras:\n\n— Servidor I: “Se o documento foi assinado, então o processo foi concluído.”\n— Servidor II: “O processo não foi concluído.”\n— Servidor III: “O documento foi assinado ou o prazo foi prorrogado.”\n\nA comissão processante registrou, ainda, que o servidor investigado responde, pelos mesmos fatos, a ação penal em curso.";

const QUESTOES_PCAL_LOTE12 = [

  /* ============ BLOCO 5 — DIREITO ADMINISTRATIVO ============ */
  {
    id: "DA-019", disciplina: "Direito Administrativo", assunto: "Licitações", subassunto: "Dispensa por emergência",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 5, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    textoApoio: TXT_BLOCO5,
    enunciado: "A contratação direta descrita, fundada em situação emergencial, constitui hipótese de dispensa de licitação, e não de inexigibilidade, uma vez que, em tese, a competição entre fornecedores seria viável.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dispensa / competição viável",
    cognitivo: {
      motivo: "Aplicar a distinção dispensa × inexigibilidade a um caso concreto.",
      mede: "Contratação direta (item 5.2 do edital).",
      pegadinhaDesc: "A banca costuma rotular a emergência como inexigibilidade.",
      ondeErra: "Confunde o fundamento de cada instituto.",
      palavraCritica: "competição viável = dispensa",
      tecnica: "Emergência/calamidade é hipótese legal de DISPENSA (rol taxativo). Inexigibilidade pressupõe competição inviável.",
      regraMental: "Dá para competir, mas a lei libera? Dispensa. Não dá para competir? Inexigibilidade."
    },
    comentario: {
      resolucao: "CERTO. A emergência é hipótese de DISPENSA de licitação (Lei 14.133/2021, art. 75), em que a competição seria possível, mas a lei autoriza a contratação direta. A inexigibilidade (art. 74) exige a INVIABILIDADE de competição, o que não é o caso do fornecimento de equipamentos disponíveis no mercado.",
      fundamento: "Lei 14.133/2021, arts. 74 e 75.",
      macete: "Emergência = dispensa. Fornecedor exclusivo = inexigibilidade.",
      erroComum: "Classificar a emergência como inexigibilidade.",
      comoBancaPensa: "Aplica o par dispensa × inexigibilidade a um caso narrado."
    }
  },
  {
    id: "DA-020", disciplina: "Direito Administrativo", assunto: "Licitações", subassunto: "Instrução da contratação direta",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 5, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    textoApoio: TXT_BLOCO5,
    enunciado: "Na hipótese de dispensa por emergência, seria dispensável a instrução do processo com a razão da escolha do fornecedor e a justificativa do preço, bastando a comprovação documental do evento emergencial.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "dispensável a razão da escolha",
    cognitivo: {
      motivo: "Cobrar os requisitos formais da contratação direta.",
      mede: "Contratação direta — instrução do processo.",
      pegadinhaDesc: "Suprime exigências formais que a lei impõe mesmo na contratação direta.",
      ondeErra: "Acha que dispensa de licitação significa dispensa de formalidades.",
      palavraCritica: "dispensável (falso)",
      tecnica: "Contratação direta ≠ contratação informal: exige processo instruído com razão da escolha, justificativa de preço e demais elementos legais.",
      regraMental: "Dispensa a licitação, não o processo. A formalização continua obrigatória."
    },
    comentario: {
      resolucao: "ERRADO. A Lei 14.133/2021 (art. 72) exige que o processo de contratação direta seja instruído, entre outros elementos, com a razão da escolha do contratado e a justificativa de preço. A dispensa afasta o certame, mas não as formalidades do processo administrativo — cuja ausência pode gerar responsabilização.",
      fundamento: "Lei 14.133/2021, arts. 72 e 75.",
      macete: "Contratação direta é formal: precisa justificar preço e escolha.",
      erroComum: "Confundir dispensa de licitação com ausência de processo.",
      comoBancaPensa: "Suprime requisitos formais para testar o rigor do candidato."
    }
  },
  {
    id: "DA-021", disciplina: "Direito Administrativo", assunto: "Improbidade administrativa", subassunto: "Elemento subjetivo no caso concreto",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 5, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.88,
    textoApoio: TXT_BLOCO5,
    enunciado: "A atuação deliberada do servidor para favorecer empresa de cujo sócio é parente pode configurar ato de improbidade administrativa, exigindo-se, após a Lei nº 14.230/2021, a demonstração de dolo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "demonstração de dolo",
    cognitivo: {
      motivo: "Aplicar o novo elemento subjetivo da LIA a um caso concreto.",
      mede: "Improbidade administrativa (reforma da Lei 14.230/2021).",
      pegadinhaDesc: "A banca costuma admitir a modalidade culposa (regime revogado).",
      ondeErra: "Responde com a redação original da LIA, que previa improbidade culposa.",
      palavraCritica: "dolo (exigido após 2021)",
      tecnica: "Pós-Lei 14.230/2021: não há improbidade culposa. O caso descreve conduta deliberada — dolo presente.",
      regraMental: "Improbidade hoje = só dolo. 'Atuação deliberada' no enunciado sinaliza o dolo."
    },
    comentario: {
      resolucao: "CERTO. A Lei 14.230/2021 passou a exigir DOLO (vontade livre e consciente de alcançar o resultado ilícito) para a configuração da improbidade, abolindo a modalidade culposa. A atuação deliberada para favorecer parente evidencia o elemento subjetivo exigido.",
      fundamento: "Lei 8.429/1992, art. 1º, §§ 1º a 3º (redação da Lei 14.230/2021).",
      macete: "Improbidade agora só com dolo. 'Deliberadamente' já indica o dolo.",
      erroComum: "Admitir improbidade culposa (regime revogado).",
      comoBancaPensa: "Aplica alteração legislativa recente a um caso concreto."
    }
  },
  {
    id: "DA-022", disciplina: "Direito Administrativo", assunto: "Responsabilidade civil do Estado", subassunto: "Dano a terceiros no caso concreto",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 5, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.85,
    textoApoio: TXT_BLOCO5,
    enunciado: "A responsabilidade do Estado perante os terceiros lesados durante a operação de resgate é subjetiva, dependendo da comprovação de culpa do agente público envolvido.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "subjetiva",
    cognitivo: {
      motivo: "Cobrar a responsabilidade objetiva do Estado por atos comissivos de seus agentes.",
      mede: "Responsabilidade civil do Estado (item 7 do edital).",
      pegadinhaDesc: "Troca a responsabilidade objetiva (regra) pela subjetiva.",
      ondeErra: "Confunde a responsabilidade perante a vítima (objetiva) com a do agente em regresso (subjetiva).",
      palavraCritica: "subjetiva (deveria ser objetiva)",
      tecnica: "Art. 37, § 6º: perante o terceiro, a responsabilidade é OBJETIVA (risco administrativo). A culpa/dolo só importa na ação REGRESSIVA contra o agente.",
      regraMental: "Vítima × Estado: objetiva. Estado × agente (regresso): subjetiva."
    },
    comentario: {
      resolucao: "ERRADO. CF, art. 37, § 6º: as pessoas jurídicas de direito público respondem OBJETIVAMENTE pelos danos que seus agentes causarem a terceiros — a vítima não precisa provar culpa, bastando conduta, dano e nexo. A comprovação de dolo ou culpa é exigida apenas na ação regressiva contra o agente.",
      fundamento: "CF, art. 37, § 6º.",
      macete: "Terceiro lesado não prova culpa. Só no regresso contra o agente é que se discute dolo/culpa.",
      erroComum: "Exigir culpa da vítima perante o Estado.",
      comoBancaPensa: "Troca a natureza da responsabilidade (objetiva × subjetiva)."
    }
  },
  {
    id: "DA-023", disciplina: "Direito Administrativo", assunto: "Atos administrativos", subassunto: "Controle judicial do ato discricionário",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 5, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    textoApoio: TXT_BLOCO5,
    enunciado: "O reconhecimento da situação emergencial, por envolver juízo discricionário da autoridade, não se sujeita a controle pelo Poder Judiciário quanto à sua legalidade e à existência dos pressupostos de fato invocados.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "não se sujeita a controle",
    cognitivo: {
      motivo: "Cobrar os limites do controle judicial sobre atos discricionários.",
      mede: "Atos administrativos + controle da Administração.",
      pegadinhaDesc: "Torna o ato discricionário imune ao controle de legalidade e de pressupostos fáticos.",
      ondeErra: "Confunde a impossibilidade de rever o mérito com imunidade total.",
      palavraCritica: "não se sujeita a controle (falso)",
      tecnica: "O Judiciário controla legalidade, competência, forma, finalidade e a EXISTÊNCIA dos motivos alegados (teoria dos motivos determinantes).",
      regraMental: "Mérito não se revê; legalidade e veracidade dos motivos, sim."
    },
    comentario: {
      resolucao: "ERRADO. Ainda que discricionário o juízo sobre a emergência, o ato submete-se ao controle judicial de LEGALIDADE, inclusive quanto à existência e veracidade dos motivos invocados (teoria dos motivos determinantes). Se a emergência alegada não existir, o ato é inválido. O que o Judiciário não faz é substituir o mérito administrativo.",
      fundamento: "CF, art. 5º, XXXV; teoria dos motivos determinantes; Lei 14.133/2021.",
      macete: "Motivo falso derruba o ato: motivos determinantes vinculam a Administração.",
      erroComum: "Blindar o ato discricionário de qualquer controle.",
      comoBancaPensa: "Termo absoluto sobre a discricionariedade, ignorando o controle de legalidade."
    }
  },

  /* ============ BLOCO 6 — CRIMES CIBERNÉTICOS E TI ============ */
  {
    id: "CC-012", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Golpes virtuais", subassunto: "Phishing no caso concreto",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 6, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.88,
    textoApoio: TXT_BLOCO6,
    enunciado: "A mensagem que simulava comunicação do setor de tecnologia da própria companhia, induzindo o funcionário a fornecer credenciais em página falsa, caracteriza a técnica de engenharia social conhecida como phishing.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "phishing / engenharia social",
    cognitivo: {
      motivo: "Identificar phishing em um cenário concreto de incidente.",
      mede: "Golpes virtuais (item do edital de Segurança Digital).",
      pegadinhaDesc: "A banca costuma rotular o caso como ransomware ou vírus.",
      ondeErra: "Confunde a etapa de captura de credenciais com a de cifragem.",
      palavraCritica: "página falsa para obter credenciais",
      tecnica: "Phishing: isca por mensagem que simula fonte legítima. Quando direcionado a alvo específico, chama-se spear phishing.",
      regraMental: "Phishing captura credenciais pela enganação; o malware vem depois."
    },
    comentario: {
      resolucao: "CERTO. A conduta descrita — mensagem que simula comunicação legítima e induz o fornecimento de credenciais em página clonada — é o phishing, técnica de engenharia social. Por simular a comunicação interna e visar alvo determinado, aproxima-se do spear phishing.",
      fundamento: "Segurança da informação — engenharia social (CERT.br).",
      macete: "Phishing = pescaria: a isca é a mensagem falsa; o anzol, a página clonada.",
      erroComum: "Chamar de ransomware a etapa de captura de credenciais.",
      comoBancaPensa: "Descreve o golpe em um caso e pede o nome técnico correto."
    }
  },
  {
    id: "CC-013", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Malwares", subassunto: "Ransomware no caso concreto",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 6, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.88,
    textoApoio: TXT_BLOCO6,
    enunciado: "A cifragem dos arquivos da empresa, seguida da exigência de pagamento em criptoativos para o restabelecimento do acesso, caracteriza ataque por ransomware.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "cifragem + resgate",
    cognitivo: {
      motivo: "Identificar ransomware em cenário concreto.",
      mede: "Noções de vírus, worms e pragas virtuais (item 5.2 do edital).",
      pegadinhaDesc: "A banca costuma nomear a conduta como spyware ou worm.",
      ondeErra: "Não associa 'cifrar + exigir resgate' ao ransomware.",
      palavraCritica: "resgate (ransom)",
      tecnica: "Ransomware sequestra dados por criptografia e cobra resgate — frequentemente em criptoativos, pela dificuldade de rastreio.",
      regraMental: "Cifrou e pediu resgate = ransomware. É o 'sequestro' de dados."
    },
    comentario: {
      resolucao: "CERTO. O ransomware é o código malicioso que cifra (ou bloqueia) os dados da vítima e exige pagamento de resgate para a liberação. O uso de criptoativos é característico, por dificultar o rastreamento financeiro.",
      fundamento: "Segurança da informação — códigos maliciosos (CERT.br).",
      macete: "Ransom = resgate. Cifrou os arquivos e cobrou: ransomware.",
      erroComum: "Confundir com spyware (espionagem) ou worm (autorreplicação).",
      comoBancaPensa: "Descreve o ataque no caso e cobra a identificação do malware."
    }
  },
  {
    id: "TI-015", disciplina: "TI e Segurança Cibernética", assunto: "Procedimentos de backup", subassunto: "Becape como mitigação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 6, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    textoApoio: TXT_BLOCO6,
    enunciado: "A manutenção de rotina regular de cópias de segurança pela empresa seria irrelevante para a mitigação dos efeitos do ataque, uma vez que os arquivos já se encontravam cifrados.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "irrelevante",
    cognitivo: {
      motivo: "Cobrar o papel do becape como principal medida de recuperação contra ransomware.",
      mede: "Procedimentos de backup (item 5.4 do edital de TI).",
      pegadinhaDesc: "Nega a utilidade do becape justamente no cenário em que ele é decisivo.",
      ondeErra: "Confunde prevenção da infecção com recuperação dos dados.",
      palavraCritica: "irrelevante (falso)",
      tecnica: "O becape não impede o ataque, mas permite RESTAURAR os dados sem pagar resgate — é a principal medida de continuidade.",
      regraMental: "Contra ransomware, becape íntegro e isolado é a melhor defesa: restaura sem pagar."
    },
    comentario: {
      resolucao: "ERRADO. O becape é justamente a principal medida de mitigação contra ransomware: permite restaurar os dados sem ceder à extorsão. Recomenda-se que as cópias sejam íntegras, testadas e mantidas isoladas da rede (offline), para que não sejam também cifradas.",
      fundamento: "Segurança da informação — procedimentos de becape e continuidade.",
      macete: "Becape isolado e testado = você restaura e não paga resgate.",
      erroComum: "Achar que o becape só serve para prevenir a infecção.",
      comoBancaPensa: "Nega a utilidade de uma medida no cenário em que ela é essencial."
    }
  },
  {
    id: "TI-016", disciplina: "TI e Segurança Cibernética", assunto: "LGPD", subassunto: "Incidente de segurança",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 6, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    textoApoio: TXT_BLOCO6,
    enunciado: "Os dados pessoais tratados pela empresa deixam de se submeter à Lei Geral de Proteção de Dados a partir da ocorrência do incidente de segurança, que transfere a responsabilidade integralmente aos autores do ataque.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "deixam de se submeter",
    cognitivo: {
      motivo: "Cobrar que o incidente não afasta a incidência da LGPD, mas gera deveres adicionais.",
      mede: "LGPD (item 7 do edital de TI).",
      pegadinhaDesc: "Cria uma causa de exclusão da LGPD inexistente.",
      ondeErra: "Supõe que ser vítima de ataque isenta o controlador de obrigações.",
      palavraCritica: "deixam de se submeter (falso)",
      tecnica: "O incidente ATIVA deveres: comunicar à ANPD e aos titulares, adotar medidas de segurança e mitigar efeitos.",
      regraMental: "Sofrer ataque não isenta: a LGPD continua e ainda impõe comunicar o incidente."
    },
    comentario: {
      resolucao: "ERRADO. O incidente de segurança não afasta a aplicação da LGPD — ao contrário, faz incidir deveres específicos: o controlador deve comunicar à ANPD e aos titulares a ocorrência que possa acarretar risco ou dano relevante (art. 48) e responde por não adotar medidas de segurança adequadas (arts. 46 a 50).",
      fundamento: "Lei 13.709/2018, arts. 46 a 50.",
      macete: "Vazou? Comunica ANPD e titulares. A responsabilidade do controlador permanece.",
      erroComum: "Supor que o ataque transfere toda a responsabilidade ao criminoso.",
      comoBancaPensa: "Inventa hipótese de exclusão da LGPD."
    }
  },
  {
    id: "CC-014", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Busca e apreensão de itens digitais", subassunto: "Cadeia de custódia do vestígio digital",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 6, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.85,
    textoApoio: TXT_BLOCO6,
    enunciado: "O computador apreendido na residência do suspeito submete-se às regras da cadeia de custódia, que se inicia com o reconhecimento do vestígio e abrange, entre outras etapas, o isolamento, a coleta e o acondicionamento.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "cadeia de custódia / reconhecimento",
    cognitivo: {
      motivo: "Aplicar a cadeia de custódia ao vestígio digital.",
      mede: "Busca e apreensão de itens digitais + provas (arts. 158-A e ss. do CPP).",
      pegadinhaDesc: "A banca costuma restringir a cadeia de custódia a vestígios físicos tradicionais.",
      ondeErra: "Supõe que o vestígio digital estaria fora do regime da cadeia de custódia.",
      palavraCritica: "inicia com o reconhecimento",
      tecnica: "A cadeia de custódia aplica-se a todo vestígio, inclusive digital. Início: reconhecimento (art. 158-B, I).",
      regraMental: "Vestígio digital também tem cadeia de custódia: reconhecer, isolar, fixar, coletar, acondicionar…"
    },
    comentario: {
      resolucao: "CERTO. Os arts. 158-A a 158-F do CPP (Pacote Anticrime) aplicam-se a todo vestígio, inclusive o digital. A cadeia inicia-se com o RECONHECIMENTO do vestígio (art. 158-B, I), seguindo-se isolamento, fixação, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento e descarte. A quebra da cadeia compromete a confiabilidade da prova.",
      fundamento: "CPP, arts. 158-A a 158-F (Lei 13.964/2019).",
      macete: "Vestígio digital é vestígio: mesma cadeia de custódia, começando pelo reconhecimento.",
      erroComum: "Restringir a cadeia de custódia a vestígios físicos.",
      comoBancaPensa: "Cruza prova digital com o regime da cadeia de custódia."
    }
  },

  /* ============ BLOCO 7 — LEGISLAÇÃO PENAL ESPECIAL ============ */
  {
    id: "LE-047", disciplina: "Legislação Especial", assunto: "Lei de Tortura", subassunto: "Tortura-prova no caso concreto",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 7, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.9,
    textoApoio: TXT_BLOCO7,
    enunciado: "A conduta do policial que submeteu o detido a intenso sofrimento físico com o propósito de obter confissão amolda-se ao crime de tortura, na modalidade conhecida como tortura-prova.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "obter confissão",
    cognitivo: {
      motivo: "Aplicar o art. 1º, I, 'a', da Lei 9.455/1997 a um caso concreto.",
      mede: "Lei de Tortura (Dia 29 do plano).",
      pegadinhaDesc: "A banca costuma desclassificar a conduta para abuso de autoridade ou lesão corporal.",
      ondeErra: "Não identifica a finalidade probatória como elementar da tortura.",
      palavraCritica: "sofrimento físico + fim de obter confissão",
      tecnica: "Tortura-prova: constranger com violência/grave ameaça, causando sofrimento, para obter informação, declaração ou confissão.",
      regraMental: "Sofrimento imposto para arrancar confissão = tortura (não mero abuso de autoridade)."
    },
    comentario: {
      resolucao: "CERTO. Lei 9.455/1997, art. 1º, I, “a”: constranger alguém com emprego de violência ou grave ameaça, causando-lhe sofrimento físico ou mental, com o fim de obter informação, declaração ou confissão — é a chamada tortura-prova. A finalidade probatória é elementar do tipo.",
      fundamento: "Lei 9.455/1997, art. 1º, I, 'a'; CF, art. 5º, III.",
      macete: "Bateu para o preso confessar = tortura-prova, crime equiparado a hediondo.",
      erroComum: "Desclassificar para abuso de autoridade ou lesão corporal.",
      comoBancaPensa: "Testa se o candidato identifica a finalidade que qualifica a tortura."
    }
  },
  {
    id: "LE-048", disciplina: "Legislação Especial", assunto: "Lei de Tortura", subassunto: "Fiança",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 7, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    textoApoio: TXT_BLOCO7,
    enunciado: "Por se tratar de crime equiparado a hediondo, admite-se a concessão de fiança ao policial autor da tortura, desde que por decisão judicial devidamente fundamentada.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "admite-se fiança",
    cognitivo: {
      motivo: "Cobrar a inafiançabilidade da tortura.",
      mede: "Lei de Tortura + vedações constitucionais.",
      pegadinhaDesc: "Cria a possibilidade de fiança condicionada à fundamentação.",
      ondeErra: "Confunde a exigência de fundamentação com autorização legal.",
      palavraCritica: "admite-se fiança (falso)",
      tecnica: "CF, art. 5º, XLIII: tortura é INAFIANÇÁVEL e insuscetível de graça ou anistia. A fundamentação não supre a vedação constitucional.",
      regraMental: "Tortura: inafiançável. Nenhuma decisão fundamentada pode conceder o que a CF veda."
    },
    comentario: {
      resolucao: "ERRADO. CF, art. 5º, XLIII: a tortura é crime INAFIANÇÁVEL e insuscetível de graça e anistia. A vedação é constitucional e não pode ser afastada por decisão fundamentada. Isso não impede, contudo, a concessão de liberdade provisória sem fiança, se ausentes os requisitos da prisão preventiva.",
      fundamento: "CF, art. 5º, XLIII; Lei 8.072/1990; Lei 9.455/1997.",
      macete: "Inafiançável = não paga fiança, nem com decisão fundamentada.",
      erroComum: "Admitir fiança mediante fundamentação.",
      comoBancaPensa: "Cria exceção para vedação constitucional absoluta."
    }
  },
  {
    id: "LE-049", disciplina: "Legislação Especial", assunto: "Abuso de Autoridade", subassunto: "Uso de algemas",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 7, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.88,
    textoApoio: TXT_BLOCO7,
    enunciado: "O emprego de algemas no morador, que não resistia nem oferecia risco, contraria o entendimento vinculante do STF, segundo o qual seu uso é excepcional e admissível apenas em caso de resistência, fundado receio de fuga ou perigo à integridade física própria ou alheia.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "uso excepcional de algemas",
    cognitivo: {
      motivo: "Aplicar a Súmula Vinculante 11 a um caso concreto.",
      mede: "Abuso de autoridade e garantias na atuação policial.",
      pegadinhaDesc: "A banca costuma tratar o uso de algemas como discricionariedade ampla do agente.",
      ondeErra: "Supõe que algemar é ato livre da autoridade.",
      palavraCritica: "excepcional / justificada por escrito",
      tecnica: "SV 11: uso lícito só em resistência, receio de fuga ou perigo, com justificativa ESCRITA da excepcionalidade, sob pena de responsabilização.",
      regraMental: "Algema é exceção e exige justificativa escrita — não é rotina."
    },
    comentario: {
      resolucao: "CERTO. Súmula Vinculante 11/STF: só é lícito o uso de algemas em caso de resistência, fundado receio de fuga ou perigo à integridade física própria ou alheia, justificada a excepcionalidade por escrito, sob pena de responsabilidade disciplinar, civil e penal do agente, além de nulidade da prisão e do ato processual.",
      fundamento: "Súmula Vinculante 11/STF; Lei 13.869/2019.",
      macete: "Algema: resistência, fuga ou perigo — e por escrito. Fora disso, responsabilização.",
      erroComum: "Tratar o uso de algemas como discricionariedade ampla.",
      comoBancaPensa: "Aplica súmula vinculante a uma diligência narrada."
    }
  },
  {
    id: "LE-050", disciplina: "Legislação Especial", assunto: "Estatuto do Desarmamento", subassunto: "Posse com registro vencido",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 7, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    textoApoio: TXT_BLOCO7,
    enunciado: "A conduta de manter, no interior da residência, espingarda de uso permitido com registro vencido configura o crime de porte ilegal de arma de fogo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "porte / interior da residência",
    cognitivo: {
      motivo: "Distinguir posse de porte no caso concreto.",
      mede: "Estatuto do Desarmamento (Dias 18-19 do plano).",
      pegadinhaDesc: "Rotula como porte a conduta praticada dentro da residência, que é posse.",
      ondeErra: "Ignora que o local (interior do imóvel) define a figura da posse.",
      palavraCritica: "no interior da residência = posse (art. 12)",
      tecnica: "Posse: arma na residência ou local de trabalho (art. 12). Porte: trazer consigo fora desses locais (art. 14).",
      regraMental: "Arma dentro de casa = posse. O registro vencido é irregularidade que se discute na posse, não no porte."
    },
    comentario: {
      resolucao: "ERRADO. Manter arma no interior da residência caracteriza POSSE irregular (Lei 10.826/2003, art. 12), e não porte (art. 14), que pressupõe trazer a arma consigo fora da residência ou local de trabalho. Registre-se que há precedentes que reconhecem a atipicidade material na mera desatualização do registro de arma de uso permitido em domicílio.",
      fundamento: "Lei 10.826/2003, arts. 12 e 14; jurisprudência do STJ.",
      macete: "Dentro de casa = posse. Na rua = porte.",
      erroComum: "Chamar de porte a arma guardada em casa.",
      comoBancaPensa: "Testa o divisor posse × porte pela localização da arma."
    }
  },
  {
    id: "LE-051", disciplina: "Legislação Especial", assunto: "Lei de Tortura", subassunto: "Efeito da condenação no caso concreto",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 7, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.85,
    textoApoio: TXT_BLOCO7,
    enunciado: "Eventual condenação do policial pelo crime de tortura não acarreta a perda automática do cargo público, dependendo de declaração expressa e motivada na sentença, conforme a regra geral do Código Penal.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "perda automática",
    cognitivo: {
      motivo: "Contrapor o efeito automático da Lei de Tortura à regra geral do art. 92 do CP.",
      mede: "Lei de Tortura — efeitos da condenação.",
      pegadinhaDesc: "Aplica à tortura a regra geral do CP, que exige motivação específica.",
      ondeErra: "Desconhece que a lei especial prevê efeito automático.",
      palavraCritica: "não automática (falso na tortura)",
      tecnica: "Lei 9.455/1997, art. 1º, § 5º: a condenação ACARRETA a perda do cargo e a interdição pelo dobro do prazo da pena — efeito automático.",
      regraMental: "Tortura: perde o cargo automaticamente. No CP comum (art. 92), precisa fundamentar."
    },
    comentario: {
      resolucao: "ERRADO. Na Lei de Tortura, a perda do cargo, função ou emprego público é efeito AUTOMÁTICO da condenação, acompanhada da interdição para seu exercício pelo dobro do prazo da pena aplicada (art. 1º, § 5º). A exigência de declaração motivada é a regra geral do art. 92 do CP, que não se aplica aqui.",
      fundamento: "Lei 9.455/1997, art. 1º, § 5º; CP, art. 92.",
      macete: "Tortura: perda do cargo é automática. Regra geral do CP: precisa motivar.",
      erroComum: "Aplicar o art. 92 do CP à condenação por tortura.",
      comoBancaPensa: "Contrapõe lei especial (automático) e regra geral (motivada)."
    }
  },

  /* ============ BLOCO 8 — RACIOCÍNIO LÓGICO E ÉTICA ============ */
  {
    id: "RL-021", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica de argumentação", subassunto: "Modus tollens aplicado",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 8, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.88,
    textoApoio: TXT_BLOCO8,
    enunciado: "Das declarações dos servidores I e II conclui-se, validamente, que o documento não foi assinado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "modus tollens",
    cognitivo: {
      motivo: "Aplicar o modus tollens a proposições de um caso concreto.",
      mede: "Lógica de argumentação (item 10 do edital).",
      pegadinhaDesc: "Exige encadear a condicional com a negação do consequente.",
      ondeErra: "Tenta concluir pela negação do antecedente (falácia) ou não vê a inferência.",
      palavraCritica: "nega o consequente → nega o antecedente",
      tecnica: "I: A → C. II: ~C. Logo, ~A (modus tollens) — inferência válida.",
      regraMental: "Se A então C; não C; logo, não A. Conclusão necessária."
    },
    comentario: {
      resolucao: "CERTO. Seja A = “o documento foi assinado” e C = “o processo foi concluído”. O Servidor I afirma A → C; o Servidor II afirma ~C. Pelo modus tollens, conclui-se ~A: o documento não foi assinado. A inferência é válida.",
      fundamento: "Lógica proposicional — modus tollens.",
      macete: "Negou o consequente? Nega o antecedente. Sempre válido.",
      erroComum: "Confundir com a falácia da negação do antecedente.",
      comoBancaPensa: "Encadeia proposições de um caso e pede a conclusão válida."
    }
  },
  {
    id: "RL-022", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica de argumentação", subassunto: "Silogismo disjuntivo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 8, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.85,
    textoApoio: TXT_BLOCO8,
    enunciado: "Considerando verdadeiras as três declarações, conclui-se necessariamente que o prazo foi prorrogado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "silogismo disjuntivo",
    cognitivo: {
      motivo: "Encadear modus tollens e silogismo disjuntivo.",
      mede: "Lógica de argumentação — inferências encadeadas.",
      pegadinhaDesc: "Exige duas etapas de raciocínio; a banca costuma oferecer conclusão inválida.",
      ondeErra: "Para na primeira inferência e não conclui sobre a disjunção.",
      palavraCritica: "A ∨ P, com ~A → P",
      tecnica: "Etapa 1 (modus tollens): ~A. Etapa 2 (silogismo disjuntivo): de A ∨ P e ~A, conclui-se P.",
      regraMental: "Numa disjunção verdadeira, se um lado é falso, o outro é necessariamente verdadeiro."
    },
    comentario: {
      resolucao: "CERTO. Do modus tollens (I e II) conclui-se que o documento NÃO foi assinado (~A). O Servidor III afirma a disjunção A ∨ P (“assinado ou prazo prorrogado”), que é verdadeira. Sendo A falsa, pelo silogismo disjuntivo P é necessariamente verdadeira: o prazo foi prorrogado.",
      fundamento: "Lógica proposicional — modus tollens e silogismo disjuntivo.",
      macete: "Disjunção verdadeira com um lado falso obriga o outro a ser verdadeiro.",
      erroComum: "Não encadear as duas inferências.",
      comoBancaPensa: "Cobra raciocínio em duas etapas sobre o mesmo conjunto de declarações."
    }
  },
  {
    id: "RL-023", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica proposicional", subassunto: "Negação da condicional aplicada",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 8, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.85,
    textoApoio: TXT_BLOCO8,
    enunciado: "A negação da declaração do Servidor I é a proposição “Se o documento foi assinado, então o processo não foi concluído”.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "negação da condicional",
    cognitivo: {
      motivo: "Cobrar que a negação de uma condicional não é outra condicional.",
      mede: "Equivalências e negações (item 11.3 do edital).",
      pegadinhaDesc: "Oferece como negação uma condicional com o consequente negado.",
      ondeErra: "Mantém a estrutura 'se...então' ao negar.",
      palavraCritica: "negação = A ∧ ~C (conjunção)",
      tecnica: "~(A → C) equivale a A ∧ ~C: afirma o antecedente e nega o consequente.",
      regraMental: "Negar 'se A então C' = 'A e não C'. Some o 'se...então'."
    },
    comentario: {
      resolucao: "ERRADO. A negação de uma condicional A → C é a CONJUNÇÃO A ∧ ~C. Assim, a negação correta seria: “O documento foi assinado E o processo não foi concluído”. A proposição apresentada continua sendo uma condicional, e não a negação da original.",
      fundamento: "Lógica proposicional — negação da condicional.",
      macete: "Negação de condicional nunca é outra condicional: vira 'e'.",
      erroComum: "Negar apenas o consequente, mantendo o 'se...então'.",
      comoBancaPensa: "Oferece uma condicional parecida como se fosse a negação."
    }
  },
  {
    id: "ET-007", disciplina: "Ética no Serviço Público", assunto: "Ética e função pública", subassunto: "Dever de veracidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 8, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    textoApoio: TXT_BLOCO8,
    enunciado: "O dever de prestar informações verídicas no âmbito do procedimento disciplinar decorre dos deveres éticos de lealdade e probidade do servidor, e sua violação pode configurar infração disciplinar autônoma.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "lealdade e probidade",
    cognitivo: {
      motivo: "Cobrar os deveres éticos aplicáveis ao servidor em procedimento disciplinar.",
      mede: "Ética e função pública (item 4 do edital).",
      pegadinhaDesc: "A banca costuma reduzir a veracidade a mera recomendação moral.",
      ondeErra: "Trata os deveres éticos como não exigíveis.",
      palavraCritica: "infração disciplinar autônoma",
      tecnica: "Os códigos de ética impõem lealdade, probidade e veracidade — deveres funcionais, cuja violação é punível.",
      regraMental: "Mentir no PAD não é só falta ética: pode ser infração disciplinar por si só."
    },
    comentario: {
      resolucao: "CERTO. A lealdade às instituições e a probidade são deveres funcionais e éticos do servidor público. Prestar informação falsa em procedimento disciplinar viola esses deveres e pode configurar infração disciplinar autônoma, sem prejuízo de eventual repercussão penal.",
      fundamento: "Princípios éticos do serviço público; CF, art. 37, caput (moralidade).",
      macete: "Veracidade é dever, não cortesia. Mentir no PAD é infração.",
      erroComum: "Reduzir os deveres éticos a meras recomendações.",
      comoBancaPensa: "Testa a exigibilidade jurídica dos deveres éticos."
    }
  },
  {
    id: "ET-008", disciplina: "Ética no Serviço Público", assunto: "Ética no setor público", subassunto: "Independência das instâncias",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 8, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.85,
    textoApoio: TXT_BLOCO8,
    enunciado: "Como o servidor responde a ação penal pelos mesmos fatos, as instâncias administrativa e penal são interdependentes, de modo que eventual absolvição penal por insuficiência de provas afasta necessariamente a sanção disciplinar.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "afasta necessariamente",
    cognitivo: {
      motivo: "Cobrar a regra da independência das instâncias e suas exceções.",
      mede: "Ética e responsabilidade do servidor (itens 4 e 5 do edital).",
      pegadinhaDesc: "Generaliza a repercussão da absolvição penal na esfera administrativa.",
      ondeErra: "Ignora que só a absolvição por inexistência do fato ou negativa de autoria vincula.",
      palavraCritica: "insuficiência de provas não vincula",
      tecnica: "Instâncias são INDEPENDENTES. Vinculam a esfera administrativa apenas a absolvição por inexistência do fato ou negativa de autoria.",
      regraMental: "Absolveu por falta de provas? A Administração pode punir do mesmo jeito."
    },
    comentario: {
      resolucao: "ERRADO. Vigora a INDEPENDÊNCIA entre as instâncias civil, penal e administrativa. A absolvição penal por insuficiência de provas NÃO repercute na esfera disciplinar, que exige apenas prova administrativa suficiente. Somente a absolvição por inexistência do fato ou negativa de autoria vincula a Administração.",
      fundamento: "CP, art. 66; Lei 8.112/1990, art. 126 (padrão dos regimes disciplinares); jurisprudência do STJ.",
      macete: "Falta de provas no crime não salva no PAD. Só 'o fato não existiu' ou 'não foi você' vincula.",
      erroComum: "Tratar as instâncias como dependentes entre si.",
      comoBancaPensa: "Generaliza a repercussão da decisão penal sobre a esfera administrativa."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE12);
