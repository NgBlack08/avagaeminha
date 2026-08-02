/* =====================================================================
   QUESTLAB — Expansão Edital PC-AL 2026 (Lote 1: Conhecimentos Básicos)
   Cobertura do conteúdo programático oficial (item 20.2.3) para
   Agente e Escrivão: Raciocínio Lógico-Matemático, Direitos Humanos,
   Ética no Serviço Público, TI/Segurança Cibernética e Segurança Digital.
   Questões inéditas em estilo CEBRASPE, fundamentadas em norma vigente.
   ===================================================================== */

const QUESTOES_PCAL_BASICOS = [

  /* ============ RACIOCÍNIO LÓGICO-MATEMÁTICO ============ */
  {
    id: "RL-001", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica sentencial", subassunto: "Equivalências",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.9,
    enunciado: "A proposição “Se o policial cumpre a lei, então a sociedade confia na instituição” é logicamente equivalente à proposição “Se a sociedade não confia na instituição, então o policial não cumpre a lei”.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "equivalente",
    cognitivo: {
      motivo: "Cobrar a contrapositiva, a equivalência mais explorada pela banca em lógica.",
      palavraCritica: "não confia → não cumpre",
    },
    comentario: {
      resolucao: "CERTO. P→Q é logicamente equivalente à sua contrapositiva ~Q→~P: ambas possuem a mesma tabela-verdade. A assertiva negou o consequente e o transformou em antecedente, negando também o antecedente original.",
      fundamento: "Lógica proposicional — equivalências notáveis do condicional.",
      macete: "Equivalências do 'se... então': INC (Inverte e Nega os dois) ou troca por 'ou' negando o primeiro (~P∨Q).",
      erroComum: "Aceitar a recíproca Q→P como equivalente — a banca cobra essa confusão com frequência.",
      comoBancaPensa: "Veste a estrutura lógica com contexto policial para disfarçar que a questão é pura tabela-verdade."
    }
  },
  {
    id: "RL-002", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica sentencial", subassunto: "Negação de quantificadores",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "A negação da proposição “Todos os investigados foram indiciados” é “Nenhum investigado foi indiciado”.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "negação",
    cognitivo: {
      motivo: "Negação de proposição categórica universal — clássico absoluto da banca.",
      palavraCritica: "nenhum",
    },
    comentario: {
      resolucao: "ERRADO. A negação de “todos os investigados foram indiciados” é “pelo menos um investigado não foi indiciado” (ou “algum investigado não foi indiciado”). “Nenhum foi indiciado” é a proposição contrária, não a contraditória.",
      fundamento: "Lógica de primeira ordem — quadrado lógico das oposições.",
      macete: "Para negar, basta UM contraexemplo: 'algum não'.",
      erroComum: "Responder com o extremo oposto em vez da contraditória mínima.",
      comoBancaPensa: "Explora a intuição leiga de que o oposto de 'todos' é 'nenhum'."
    }
  },
  {
    id: "RL-003", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica sentencial", subassunto: "Leis de De Morgan",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "A negação da proposição “O suspeito estava armado e fugiu do local” é “O suspeito não estava armado e não fugiu do local”.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "e",
    cognitivo: {
      motivo: "Aplicação direta das Leis de De Morgan, item expresso do edital (11.4).",
      palavraCritica: "e (deveria virar ou)",
    },
    comentario: {
      resolucao: "ERRADO. Pelas Leis de De Morgan, a negação de uma conjunção é a disjunção das negações: “O suspeito não estava armado OU não fugiu do local”. Manter o 'e' produz proposição que não é a contraditória.",
      fundamento: "Leis de De Morgan (lógica proposicional).",
      macete: "Basta um dos fatos falhar para a conjunção ser falsa — por isso a negação usa OU.",
      erroComum: "Negar apenas as proposições simples sem trocar o conectivo.",
      comoBancaPensa: "O item parece 'quase certo' — é o padrão de troca mínima aplicado à lógica."
    }
  },
  {
    id: "RL-004", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica sentencial", subassunto: "Tabela-verdade do condicional",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.8,
    enunciado: "Uma proposição condicional é falsa somente quando o antecedente é verdadeiro e o consequente é falso.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "somente",
    cognitivo: {
      motivo: "Regra nuclear da tabela-verdade do condicional.",
      palavraCritica: "V → F",
    },
    comentario: {
      resolucao: "CERTO. O condicional P→Q assume valor falso exclusivamente na combinação P verdadeiro e Q falso; nas demais três linhas da tabela-verdade, é verdadeiro.",
      fundamento: "Tabela-verdade do conectivo condicional.",
      macete: "Promessa: só é descumprida quando a condição aconteceu e o prometido não veio.",
      erroComum: "Achar que antecedente falso torna o condicional falso.",
      comoBancaPensa: "Planta um 'somente' verdadeiro para punir o atalho cego — o mesmo padrão de DP-004."
    }
  },
  {
    id: "RL-005", disciplina: "Raciocínio Lógico-Matemático", assunto: "Matemática básica", subassunto: "Porcentagem",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "Se determinado valor sofrer aumento de 20% e, em seguida, desconto de 20% sobre o novo montante, o resultado final será igual ao valor original.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "igual ao valor original",
    cognitivo: {
      motivo: "Percentuais sucessivos sobre bases diferentes — armadilha aritmética recorrente.",
      palavraCritica: "sobre o novo montante",
    },
    comentario: {
      resolucao: "ERRADO. Com valor inicial V: após +20%, tem-se 1,2V; o desconto de 20% incide sobre 1,2V, resultando 1,2V × 0,8 = 0,96V. Há redução de 4% em relação ao original.",
      fundamento: "Matemática básica — variações percentuais sucessivas.",
      macete: "x% para cima e x% para baixo = perde (x²/100)%. Com 20: perde 4%.",
      erroComum: "Somar percentuais de bases distintas.",
      comoBancaPensa: "Aposta na aritmética intuitiva (+20−20=0) contra a multiplicativa correta."
    }
  },
  {
    id: "RL-006", disciplina: "Raciocínio Lógico-Matemático", assunto: "Contagem e probabilidade", subassunto: "Princípio multiplicativo",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.7,
    enunciado: "Se uma senha de acesso ao sistema policial for formada por três algarismos distintos, escolhidos de 0 a 9, então existirão 720 senhas possíveis.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "distintos",
    cognitivo: {
      motivo: "Princípio fundamental da contagem com restrição de não repetição.",
      palavraCritica: "distintos",
    },
    comentario: {
      resolucao: "CERTO. Para o 1º algarismo há 10 opções; para o 2º, 9 (não pode repetir); para o 3º, 8. Pelo princípio multiplicativo: 10×9×8 = 720 senhas.",
      fundamento: "Princípios de contagem — arranjo simples A(10,3).",
      macete: "Leia SEMPRE se há 'distintos/sem repetição' antes de multiplicar.",
      erroComum: "Calcular 10³ = 1000 por desatenção à restrição.",
      comoBancaPensa: "O número é o ponto de checagem: conferir a conta é obrigatório antes de julgar."
    }
  },

  /* ============ NOÇÕES DE DIREITOS HUMANOS ============ */
  {
    id: "DH-001", disciplina: "Direitos Humanos", assunto: "Teoria geral", subassunto: "Características",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 35, probReaparecer: 0.9,
    enunciado: "Os direitos humanos caracterizam-se pela universalidade, indivisibilidade, imprescritibilidade e irrenunciabilidade, o que não impede, contudo, a limitação recíproca de seu exercício em caso de colisão entre direitos.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "não impede",
    cognitivo: {
      motivo: "Características clássicas dos direitos humanos + relatividade.",
      palavraCritica: "limitação recíproca",
    },
    comentario: {
      resolucao: "CERTO. A doutrina consagra universalidade (valem para todos), indivisibilidade (formam bloco único), imprescritibilidade (não se perdem pelo tempo) e irrenunciabilidade. A relatividade/limitabilidade convive com essas notas: colisões resolvem-se por ponderação.",
      fundamento: "Doutrina de direitos humanos; jurisprudência do STF sobre relatividade.",
      macete: "UIII + R: Universal, Indivisível, Imprescritível, Irrenunciável — e Relativo no exercício.",
      erroComum: "Confundir irrenunciabilidade (não abrir mão da titularidade) com impossibilidade de restrição.",
      comoBancaPensa: "Une duas verdades que parecem se contradizer — quem estudou por lista decorada trava."
    }
  },
  {
    id: "DH-002", disciplina: "Direitos Humanos", assunto: "Tratados internacionais", subassunto: "Art. 5º, § 3º, da CF",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "Os tratados internacionais sobre direitos humanos aprovados, em cada Casa do Congresso Nacional, em turno único, pelo voto da maioria absoluta de seus membros, serão equivalentes às emendas constitucionais.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "turno único / maioria absoluta",
    cognitivo: {
      motivo: "Literalidade do art. 5º, § 3º, com o rito trocado pelo de lei complementar.",
      palavraCritica: "dois turnos / três quintos",
    },
    comentario: {
      resolucao: "ERRADO. CF, art. 5º, § 3º: os tratados de direitos humanos aprovados 'em cada Casa do Congresso Nacional, em DOIS TURNOS, por TRÊS QUINTOS dos votos dos respectivos membros' equivalem às emendas constitucionais. Maioria absoluta em turno único é rito de lei complementar.",
      fundamento: "CF, art. 5º, § 3º (EC 45/2004).",
      macete: "Se equivale a emenda, precisa suar como emenda: 3/5 em dois turnos.",
      erroComum: "Misturar quóruns de espécies normativas diferentes.",
      comoBancaPensa: "Pegadinha numérica pura — números e quóruns são sempre o alvo."
    }
  },
  {
    id: "DH-003", disciplina: "Direitos Humanos", assunto: "Tratados internacionais", subassunto: "Status supralegal e prisão civil",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "Por estar expressamente prevista na Constituição Federal, a prisão civil do depositário infiel permanece lícita no ordenamento jurídico brasileiro, podendo ser decretada na forma da lei.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "permanece lícita",
    cognitivo: {
      motivo: "Cobrar o efeito paralisante do Pacto de São José (status supralegal) sobre a prisão do depositário infiel.",
      palavraCritica: "ilícita (SV 25)",
    },
    comentario: {
      resolucao: "ERRADO. Súmula Vinculante 25/STF: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Embora a CF (art. 5º, LXVII) a mencione, o Pacto de São José da Costa Rica — com status supralegal (RE 466.343) — paralisou a eficácia da legislação infraconstitucional que a regulamentava.",
      fundamento: "CF, art. 5º, LXVII; CADH, art. 7.7; STF, RE 466.343; Súmula Vinculante 25.",
      macete: "A CF 'permite', mas sem lei válida abaixo dela, a prisão não se executa — efeito paralisante.",
      erroComum: "Achar que previsão constitucional expressa basta para a licitude.",
      comoBancaPensa: "Cruza texto constitucional com bloco de convencionalidade — o padrão 'juris + lei' favorito."
    }
  },
  {
    id: "DH-004", disciplina: "Direitos Humanos", assunto: "Pacto de São José da Costa Rica", subassunto: "Prisão por dívida",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.8,
    enunciado: "Nos termos da Convenção Americana sobre Direitos Humanos (Decreto nº 678/1992), ninguém deve ser detido por dívidas, ressalvados os mandados de autoridade judiciária competente expedidos em virtude de inadimplemento de obrigação alimentar.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "obrigação alimentar",
    cognitivo: {
      motivo: "Literalidade do art. 7.7 da CADH, expressamente citada no edital.",
      palavraCritica: "ressalvados... alimentar",
    },
    comentario: {
      resolucao: "CERTO. CADH, art. 7.7: 'Ninguém deve ser detido por dívidas. Este princípio não limita os mandados de autoridade judiciária competente expedidos em virtude de inadimplemento de obrigação alimentar.'",
      fundamento: "Convenção Americana sobre Direitos Humanos, art. 7.7; Decreto 678/1992.",
      macete: "Uma exceção só — quem alimenta a exceção é a pensão.",
      erroComum: "Incluir o depositário infiel na ressalva convencional (a CADH nunca o previu).",
      comoBancaPensa: "Cobra a literalidade da única exceção — terreno ideal para a troca de conteúdo da ressalva."
    }
  },
  {
    id: "DH-005", disciplina: "Direitos Humanos", assunto: "Afirmação histórica", subassunto: "Dimensões/gerações",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "Os direitos de primeira dimensão, ligados ao valor igualdade, exigem prestações positivas do Estado, ao passo que os de segunda dimensão, vinculados ao valor liberdade, impõem ao poder público um dever de abstenção.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "primeira × segunda",
    cognitivo: {
      motivo: "Inversão espelhada das duas primeiras dimensões de direitos.",
      palavraCritica: "igualdade / liberdade",
    },
    comentario: {
      resolucao: "ERRADO. É o inverso: a 1ª dimensão (direitos civis e políticos) liga-se à LIBERDADE e exige abstenção estatal (status negativo); a 2ª dimensão (direitos sociais, econômicos e culturais) liga-se à IGUALDADE e demanda prestações positivas.",
      fundamento: "Doutrina — teoria das dimensões/gerações (Karel Vasak; Bobbio).",
      macete: "1ª: Estado fica LONGE. 2ª: Estado ENTREGA. 3ª: TODOS juntos (paz, meio ambiente, consumidor).",
      erroComum: "Aceitar o item porque cada metade, isolada, 'existe' na teoria.",
      comoBancaPensa: "Par conceitual espelhado = inversão simétrica, o mesmo DNA de DA-005."
    }
  },

  /* ============ ÉTICA NO SERVIÇO PÚBLICO ============ */
  {
    id: "ET-001", disciplina: "Ética no Serviço Público", assunto: "Ética e moral", subassunto: "Distinção conceitual",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Delegado","Perito Criminal","Papiloscopista","Especialista em Saúde — Fisioterapia"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.8,
    enunciado: "Ética e moral são conceitos idênticos, visto que ambos designam o conjunto de normas de conduta adotadas por determinado grupo social em dado momento histórico.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "idênticos",
    cognitivo: {
      motivo: "Distinção básica ética × moral — porta de entrada da disciplina.",
      palavraCritica: "idênticos",
    },
    comentario: {
      resolucao: "ERRADO. A definição apresentada corresponde à moral (normas de conduta de um grupo em certo tempo). A ética é a ciência/reflexão crítica sobre a moral, buscando fundamentar os juízos de valor. São noções relacionadas, mas não idênticas.",
      fundamento: "Filosofia moral — doutrina clássica (ethos × mores).",
      macete: "Moral muda de cidade em cidade; a ética pergunta 'por quê?'.",
      erroComum: "Assinalar C pela sinonímia coloquial dos termos.",
      comoBancaPensa: "Definição impecável + rótulo estendido indevidamente — regra do rótulo aplicada à filosofia."
    }
  },
  {
    id: "ET-002", disciplina: "Ética no Serviço Público", assunto: "Ética e função pública", subassunto: "Legalidade e moralidade",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Delegado","Perito Criminal","Papiloscopista","Especialista em Saúde — Fisioterapia"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.8,
    enunciado: "A conduta eticamente adequada do servidor público restringe-se ao cumprimento estrito da legalidade, pois ato legal é, por definição, ato honesto e conveniente ao interesse público.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "restringe-se",
    cognitivo: {
      motivo: "Cobrar que a moralidade administrativa não se esgota na legalidade.",
      palavraCritica: "restringe-se / por definição",
    },
    comentario: {
      resolucao: "ERRADO. A moralidade administrativa é princípio autônomo (CF, art. 37, caput): o ato pode ser formalmente legal e ainda assim imoral (desvio de finalidade, favorecimento). O padrão ético do servidor abrange honestidade, lealdade às instituições e busca do bem comum, indo além da legalidade estrita.",
      fundamento: "CF, art. 37, caput (princípio da moralidade); doutrina de ética pública.",
      macete: "Legal ≠ moral: a ética começa onde a letra da lei ainda não chegou.",
      erroComum: "Reduzir ética pública a mero juízo de legalidade.",
      comoBancaPensa: "'Restringe-se' + 'por definição': dupla restrição indevida numa frase de aparência lógica."
    }
  },
  {
    id: "ET-003", disciplina: "Ética no Serviço Público", assunto: "Ética e democracia", subassunto: "Exercício da cidadania",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Delegado","Perito Criminal","Papiloscopista","Especialista em Saúde — Fisioterapia"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.7,
    enunciado: "No regime democrático, o exercício da cidadania esgota-se no direito de votar e de ser votado, não abrangendo formas de participação e de controle social da administração pública.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "esgota-se",
    cognitivo: {
      motivo: "Conceito amplo de cidadania — item 3 do edital (ética e democracia).",
      palavraCritica: "esgota-se",
    },
    comentario: {
      resolucao: "ERRADO. A cidadania democrática é conceito amplo: além do voto, compreende o controle social da administração (ação popular — CF, art. 5º, LXXIII; direito de petição; acesso à informação; participação em conselhos e audiências públicas).",
      fundamento: "CF, art. 1º, II (cidadania como fundamento); art. 5º, LXXIII; Lei 12.527/2011.",
      macete: "Cidadão fiscal: vota, participa, fiscaliza e cobra.",
      erroComum: "Confundir cidadania (ampla) com capacidade eleitoral (restrita).",
      comoBancaPensa: "'Esgota-se' é o irmão do 'restringe-se' — verbos que encolhem conceitos são alerta máximo."
    }
  },

  /* ============ TI E SEGURANÇA CIBERNÉTICA (complementos) ============ */
  {
    id: "TI-001", disciplina: "TI e Segurança Cibernética", assunto: "Criptografia", subassunto: "Simétrica × assimétrica",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "Na criptografia assimétrica, remetente e destinatário compartilham uma única chave secreta, utilizada tanto para cifrar quanto para decifrar as mensagens trocadas.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "assimétrica",
    cognitivo: {
      motivo: "Troca de rótulos entre os dois grandes modelos criptográficos.",
      palavraCritica: "única chave",
    },
    comentario: {
      resolucao: "ERRADO. A definição corresponde à criptografia SIMÉTRICA (ex.: AES). Na assimétrica (ex.: RSA), cada parte possui um par de chaves matematicamente relacionadas: a pública, distribuível, e a privada, secreta — o que cifra com uma, decifra-se com a outra.",
      fundamento: "Fundamentos de criptografia — modelos simétrico e assimétrico.",
      macete: "Assinatura digital usa a assimétrica: privada assina, pública verifica.",
      erroComum: "Julgar a qualidade da definição e não o pareamento nome↔definição.",
      comoBancaPensa: "Regra do rótulo: a banca quase nunca erra a definição — troca o termo definido."
    }
  },
  {
    id: "TI-002", disciplina: "TI e Segurança Cibernética", assunto: "Segurança de rede", subassunto: "IDS × IPS",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "O IDS (Intrusion Detection System) é um sistema que, ao identificar tráfego malicioso na rede, bloqueia automaticamente a comunicação suspeita, impedindo a concretização do ataque.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "bloqueia automaticamente",
    cognitivo: {
      motivo: "Distinguir detecção (IDS) de prevenção (IPS) — item 3.1/9 do edital.",
      palavraCritica: "Detection × Prevention",
    },
    comentario: {
      resolucao: "ERRADO. O IDS é ferramenta de DETECÇÃO: monitora o tráfego e gera alertas, sem intervir no fluxo. Quem atua inline bloqueando pacotes maliciosos automaticamente é o IPS (Intrusion Prevention System).",
      fundamento: "Fundamentos de segurança de redes — arquiteturas IDS/IPS.",
      macete: "IDS é a câmera de segurança; IPS é a cancela.",
      erroComum: "Assumir que detectar implica bloquear.",
      comoBancaPensa: "Par de siglas irmãs = alvo clássico de inversão de atribuições."
    }
  },
  {
    id: "TI-003", disciplina: "TI e Segurança Cibernética", assunto: "Segurança de rede", subassunto: "VPN",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.75,
    enunciado: "A VPN (Virtual Private Network) estabelece um túnel criptografado entre o dispositivo do usuário e a rede de destino, permitindo o tráfego seguro de dados mesmo sobre redes públicas, como o Wi-Fi de um aeroporto.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "túnel criptografado",
    cognitivo: {
      motivo: "Conceito nuclear de VPN, cobrado de forma direta pela banca.",
      palavraCritica: "mesmo sobre redes públicas",
    },
    comentario: {
      resolucao: "CERTO. A VPN cria um túnel lógico cifrado entre as extremidades, de modo que os dados trafegam protegidos ainda que a infraestrutura subjacente seja pública e insegura. É prática recomendada para acesso remoto corporativo.",
      fundamento: "Fundamentos de redes — tunelamento e criptografia (IPsec, SSL/TLS).",
      macete: "Wi-Fi público sem VPN = cartão-postal; com VPN = carta lacrada.",
      erroComum: "Achar que 'rede pública' tornaria a afirmação falsa.",
      comoBancaPensa: "Itens certos de conceito puro premiam quem estuda o básico com precisão."
    }
  },
  {
    id: "TI-004", disciplina: "TI e Segurança Cibernética", assunto: "LGPD", subassunto: "Dados pessoais sensíveis",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "Nos termos da Lei nº 13.709/2018 (LGPD), o número de CPF do titular é classificado como dado pessoal sensível, sujeitando seu tratamento às hipóteses mais restritas previstas na lei.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "sensível",
    cognitivo: {
      motivo: "Distinção entre dado pessoal e dado pessoal sensível — coração da LGPD em prova.",
      palavraCritica: "rol do art. 5º, II",
    },
    comentario: {
      resolucao: "ERRADO. O CPF é dado pessoal comum (identifica a pessoa natural — art. 5º, I). Dado sensível é o rol do art. 5º, II: origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou organização religiosa/filosófica/política, saúde, vida sexual, dado genético ou biométrico.",
      fundamento: "Lei 13.709/2018, art. 5º, I e II.",
      macete: "Sensível: RAÇA-FÉ-POLÍTICA-SINDICATO-SAÚDE-SEXO-GENE-BIOMETRIA. Fora da lista, é comum.",
      erroComum: "Classificar como sensível todo dado 'importante' (CPF, renda, endereço).",
      comoBancaPensa: "Rol legal taxativo = terreno para inserir intruso plausível."
    }
  },

  /* ============ CRIMES CIBERNÉTICOS E SEGURANÇA DIGITAL ============ */
  {
    id: "CC-001", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Lei 12.737/2012", subassunto: "Invasão de dispositivo (art. 154-A, CP)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.9,
    enunciado: "O crime de invasão de dispositivo informático somente se configura quando o agente viola indevidamente mecanismo de segurança instalado no equipamento, de modo que o acesso a dispositivo desprotegido é penalmente atípico.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "somente / mecanismo de segurança",
    cognitivo: {
      motivo: "Cobrar a alteração da Lei 14.155/2021, que suprimiu a elementar 'violação de mecanismo de segurança'.",
      palavraCritica: "com ou sem violação de mecanismo",
    },
    comentario: {
      resolucao: "ERRADO. A Lei 14.155/2021 alterou o art. 154-A do CP, retirando a elementar 'mediante violação indevida de mecanismo de segurança'. Hoje, invadir dispositivo informático de uso alheio, com o fim de obter, adulterar ou destruir dados ou informações sem autorização do usuário, ou de instalar vulnerabilidades, configura o crime — ainda que o aparelho não possua senha ou proteção.",
      fundamento: "CP, art. 154-A (redação da Lei 14.155/2021); Lei 12.737/2012.",
      macete: "Carolina Dieckmann 1.0 exigia 'quebrar a fechadura'; a versão 2021 pune entrar sem ser convidado, com porta trancada ou não.",
      erroComum: "Responder com a redação revogada — o erro de material desatualizado.",
      comoBancaPensa: "Alteração legislativa recente derruba quem decorou o tipo antigo — aposta de alta rentabilidade."
    }
  },
  {
    id: "CC-002", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Busca e apreensão digital", subassunto: "Acesso a dados de celular",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.9,
    enunciado: "Conforme a jurisprudência do STJ, o acesso pela autoridade policial às conversas de WhatsApp armazenadas em telefone celular apreendido em flagrante depende de prévia autorização judicial, sob pena de ilicitude da prova obtida.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "autorização judicial",
    cognitivo: {
      motivo: "Limites da busca e apreensão de itens digitais (art. 240 e ss. do CPP) — item expresso do edital.",
      palavraCritica: "prévia autorização judicial",
    },
    comentario: {
      resolucao: "CERTO. O STJ consolidou que é ilícita a prova obtida pelo acesso direto da polícia, sem autorização judicial, a conversas e dados armazenados em celular apreendido, ainda que em flagrante (RHC 51.531; HC 51.531 e jurisprudência subsequente). A tutela decorre do sigilo de dados (CF, art. 5º, X e XII) e da Lei 9.472/1997.",
      fundamento: "CF, art. 5º, X e XII; CPP, arts. 240 e ss.; STJ, RHC 51.531/RO e jurisprudência consolidada.",
      macete: "Flagrante autoriza a APREENSÃO; a INSPEÇÃO do conteúdo tem reserva de jurisdição.",
      erroComum: "Marcar E supondo que o flagrante 'abre' o aparelho.",
      comoBancaPensa: "Tema operacional sensível para a rotina policial — combinação perfeita de CPP + jurisprudência."
    }
  },
  {
    id: "CC-003", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Segurança digital", subassunto: "Autenticação multifator",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 35, probReaparecer: 0.8,
    enunciado: "A autenticação multifator (MFA) combina fatores de categorias distintas — algo que o usuário sabe, algo que possui e algo que é —, de modo que o comprometimento isolado da senha torna-se insuficiente para o invasor acessar a conta protegida.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "categorias distintas",
    cognitivo: {
      motivo: "Conceito de MFA — item 3/2.1 de Segurança Digital do edital.",
      palavraCritica: "sabe / possui / é",
    },
    comentario: {
      resolucao: "CERTO. O MFA soma fatores de naturezas distintas: conhecimento, posse e inerência. Vazada a senha (fator 1), o atacante ainda precisa do dispositivo ou da biometria da vítima — por isso o MFA é a principal defesa contra o sucesso do phishing de credenciais.",
      fundamento: "Fundamentos de gestão de identidades e acesso (IAM); boas práticas CERT.br.",
      macete: "Senha + SMS/app autenticador = 2 reinos. Senha + outra senha = ilusão de segurança.",
      erroComum: "Aceitar como MFA a combinação de dois fatores da mesma categoria.",
      comoBancaPensa: "Quando o item está limpo, o risco é o candidato inventar pegadinha — treine reconhecer o C."
    }
  },
  {
    id: "CC-004", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Golpes virtuais", subassunto: "Engenharia social",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "No golpe conhecido como phishing, o criminoso explora vulnerabilidades exclusivamente técnicas dos sistemas, sem qualquer participação da vítima, razão pela qual a conscientização de usuários é medida ineficaz de prevenção.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "exclusivamente / ineficaz",
    cognitivo: {
      motivo: "Natureza sociotécnica do phishing — engenharia social como essência do golpe.",
      palavraCritica: "exclusivamente",
    },
    comentario: {
      resolucao: "ERRADO. O phishing é, por essência, técnica de engenharia social: depende de induzir a vítima a agir (clicar no link, fornecer dados, abrir anexo). Justamente por isso, a conscientização e o treinamento de usuários estão entre as medidas MAIS eficazes de prevenção, ao lado de filtros técnicos e MFA.",
      fundamento: "Cartilha de Segurança CERT.br — golpes na internet.",
      macete: "Se ninguém morde a isca, não há pesca.",
      erroComum: "Ver o phishing como ataque puramente técnico de invasão.",
      comoBancaPensa: "Dois absolutos na mesma frase = probabilidade altíssima de item errado, confirmada pelo conteúdo."
    }
  },
];

/* ---- Integra as questões básicas ao banco ---- */
QUESTOES.push(...QUESTOES_PCAL_BASICOS);
