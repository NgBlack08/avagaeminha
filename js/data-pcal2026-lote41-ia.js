/* =====================================================================
   CEBRASPE LAB — Lote 41: INTELIGÊNCIA ARTIFICIAL (LLMs, IA generativa,
   deep learning, embeddings)
   Baseado em material de terceiros contendo 12 questões REAIS de
   múltipla escolha de provas anteriores da CEBRASPE sobre Inteligência
   Artificial (com gabarito oficial e mnemônicos/dicas de revisão
   anexados). Como o formato deste banco é exclusivamente Certo/Errado,
   cada questão de múltipla escolha foi convertida em um PAR de itens
   C/E 100% ORIGINAIS — nenhuma frase foi copiada — testando a mesma
   alternativa correta identificada pela banca e o mesmo padrão de
   distrator (palavras absolutas como "exclusivamente", "totalmente",
   "sempre", e a confusão entre IA/ML/redes neurais/LLMs).
   Gabarito de cada item novo verificado de forma independente.
   22 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE41 = [

  /* ===== HIERARQUIA IA ⊃ ML ⊃ REDES NEURAIS ⊃ LLMs ===== */
  {
    id: "ES-038", disciplina: "Estatística", assunto: "Inteligência Artificial", subassunto: "Hierarquia IA, ML, redes neurais e LLMs",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.86,
    enunciado: "Machine Learning é um campo da Inteligência Artificial dedicado ao desenvolvimento de modelos capazes de aprender padrões a partir de dados; as redes neurais artificiais constituem uma das técnicas empregadas dentro desse campo; e os Modelos de Linguagem de Grande Porte (LLMs) são modelos baseados em arquiteturas neurais profundas, treinados em larga escala para processar e gerar linguagem natural.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ML ... aprender padrões ... redes neurais ... técnica ... LLMs ... arquiteturas neurais profundas",
    cognitivo: {
      motivo: "Cobrar a relação hierárquica correta entre IA, Machine Learning, redes neurais e LLMs.",
      mede: "Inteligência Artificial — fundamentos conceituais (hierarquia IA/ML/redes neurais/LLMs).",
      pegadinhaDesc: "A banca pode tratar os três conceitos como sinônimos ou inverter a relação de continência entre eles.",
      ondeErra: "Confunde ML, redes neurais e LLMs como se fossem a mesma coisa, ignorando que ocupam níveis distintos.",
      palavraCritica: "campo ... técnica ... arquiteturas neurais profundas",
      tecnica: "A relação é de continência: Inteligência Artificial (campo mais amplo) contém o Machine Learning (aprendizado a partir de dados), que utiliza, entre outras técnicas, as redes neurais artificiais; os LLMs são um tipo específico de rede neural profunda, treinada em larga escala para linguagem natural.",
      regraMental: "IA ⊃ Machine Learning ⊃ Redes Neurais ⊃ LLMs — cada conceito está 'dentro' do anterior."
    },
    comentario: {
      resolucao: "CERTO. A afirmação descreve corretamente a relação hierárquica entre os conceitos: Machine Learning é o campo da IA voltado ao aprendizado de padrões a partir de dados; as redes neurais são uma das técnicas utilizadas dentro desse campo; e os LLMs são modelos baseados em arquiteturas neurais profundas, treinados em larga escala para processar e gerar linguagem natural.",
      fundamento: "Doutrina de Inteligência Artificial — taxonomia e hierarquia conceitual (IA, ML, redes neurais, LLMs).",
      macete: "Pense em círculos concêntricos: IA por fora, depois ML, depois redes neurais, depois LLMs.",
      erroComum: "Tratar Machine Learning, redes neurais e LLMs como sinônimos intercambiáveis.",
      comoBancaPensa: "Item 'limpo', com a relação hierárquica descrita de forma tecnicamente precisa."
    }
  },
  {
    id: "ES-039", disciplina: "Estatística", assunto: "Inteligência Artificial", subassunto: "Hierarquia IA, ML, redes neurais e LLMs",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.84,
    enunciado: "Machine Learning corresponde exclusivamente a sistemas programados com regras fixas e determinísticas, sem qualquer capacidade de generalização a partir de dados, sendo as redes neurais artificiais compostas apenas por uma única camada, sem funções de ativação não lineares.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "exclusivamente ... regras fixas ... apenas por uma única camada",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o Machine Learning generaliza a partir de dados e que redes neurais podem ter múltiplas camadas.",
      mede: "Inteligência Artificial — fundamentos conceituais (Machine Learning e redes neurais).",
      pegadinhaDesc: "A banca nega a capacidade de generalização do ML e simplifica indevidamente as redes neurais.",
      ondeErra: "Confunde Machine Learning com sistemas de regras fixas (IA simbólica clássica), ignorando sua capacidade de aprender e generalizar.",
      palavraCritica: "exclusivamente ... apenas por uma única camada",
      tecnica: "O Machine Learning é definido justamente pela capacidade de aprender padrões e generalizar a partir de dados, sem ser programado com regras fixas para cada situação. Além disso, redes neurais podem ter múltiplas camadas intermediárias (redes profundas) com funções de ativação não lineares, o que lhes confere maior poder de representação.",
      regraMental: "ML generaliza a partir de dados; redes neurais podem ter várias camadas com ativação não linear."
    },
    comentario: {
      resolucao: "ERRADO. O Machine Learning é definido pela capacidade de aprender padrões e generalizar a partir de dados, e não por regras fixas e determinísticas — essa última característica é mais próxima da IA simbólica clássica. Além disso, redes neurais artificiais podem possuir múltiplas camadas intermediárias e funções de ativação não lineares.",
      fundamento: "Doutrina de Inteligência Artificial — fundamentos conceituais (Machine Learning e redes neurais).",
      macete: "'Exclusivamente' e 'apenas' são bandeiras vermelhas em itens de IA.",
      erroComum: "Confundir Machine Learning com sistemas de regras fixas.",
      comoBancaPensa: "Combina duas palavras absolutas em uma única assertiva para reforçar o erro."
    }
  },

  /* ===== LLMs: FUNCIONAMENTO E LIMITAÇÕES ===== */
  {
    id: "ES-040", disciplina: "Estatística", assunto: "Inteligência Artificial", subassunto: "Funcionamento dos LLMs",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.88,
    enunciado: "Ferramentas de Inteligência Artificial generativa baseadas em modelos de linguagem (LLM) constroem suas respostas por meio da previsão estatística da sequência de palavras mais provável, com base em padrões aprendidos durante o treinamento com grandes volumes de dados textuais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "previsão estatística da sequência de palavras mais provável",
    cognitivo: {
      motivo: "Cobrar o funcionamento técnico correto dos LLMs: previsão estatística da próxima palavra.",
      mede: "Inteligência Artificial — funcionamento dos modelos de linguagem (LLMs).",
      pegadinhaDesc: "A banca pode atribuir aos LLMs compreensão semântica real, ao invés de previsão estatística.",
      ondeErra: "Presume que o LLM 'entende' o significado do texto, quando na verdade modela relações probabilísticas entre palavras.",
      palavraCritica: "previsão estatística da sequência de palavras mais provável",
      tecnica: "Os LLMs, treinados com grandes volumes de texto por meio de redes neurais profundas, geram respostas prevendo, a cada passo, qual é a próxima palavra (ou token) mais provável, com base nos padrões estatísticos aprendidos durante o treinamento — não há compreensão semântica no sentido humano.",
      regraMental: "LLM não 'entende' — ele prevê a próxima palavra mais provável, estatisticamente."
    },
    comentario: {
      resolucao: "CERTO. Os LLMs constroem suas respostas por meio da previsão estatística da sequência de palavras mais provável, com base nos padrões aprendidos a partir de grandes volumes de dados textuais durante o treinamento — funcionamento fundamentalmente estatístico, e não baseado em compreensão semântica plena.",
      fundamento: "Doutrina de Inteligência Artificial — funcionamento técnico dos modelos de linguagem de grande porte (LLMs).",
      macete: "LLM = prevê a próxima palavra mais provável, com base no que aprendeu no treinamento.",
      erroComum: "Atribuir aos LLMs uma compreensão semântica equivalente à humana.",
      comoBancaPensa: "Item 'limpo' e tecnicamente correto sobre o mecanismo estatístico central dos LLMs."
    }
  },
  {
    id: "ES-041", disciplina: "Estatística", assunto: "Inteligência Artificial", subassunto: "Funcionamento dos LLMs",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.86,
    enunciado: "Os Modelos de Linguagem de Grande Porte (LLMs) possuem compreensão semântica plena e consciência contextual equivalentes à cognição humana, produzindo respostas totalmente determinísticas e invariáveis, independentemente do contexto fornecido pelo usuário.",
    gabarito: "E", pegadinse: "termo-absoluto", pegadinha: "termo-absoluto", palavraChave: "compreensão semântica plena ... totalmente determinísticas",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que os LLMs não têm consciência humana nem respostas totalmente determinísticas.",
      mede: "Inteligência Artificial — funcionamento e limitações dos LLMs.",
      pegadinhaDesc: "A banca atribui aos LLMs características humanas (consciência) e uma rigidez (determinismo total) que não possuem.",
      ondeErra: "Superestima a capacidade cognitiva dos LLMs, tratando-os como equivalentes à mente humana.",
      palavraCritica: "compreensão semântica plena ... totalmente determinísticas",
      tecnica: "Os LLMs não possuem consciência nem compreensão semântica equivalente à humana — eles modelam relações estatísticas entre palavras. Além disso, suas respostas variam conforme o contexto e os parâmetros de geração (como a 'temperatura'), não sendo totalmente determinísticas e invariáveis.",
      regraMental: "LLM não tem consciência humana, e suas respostas variam conforme o contexto — nunca são 'totalmente' fixas."
    },
    comentario: {
      resolucao: "ERRADO. Os LLMs não possuem compreensão semântica nem consciência contextual equivalentes à cognição humana — seu funcionamento é estatístico. Além disso, suas respostas podem variar conforme o contexto e os parâmetros de geração, não sendo totalmente determinísticas e invariáveis.",
      fundamento: "Doutrina de Inteligência Artificial — limitações dos modelos de linguagem de grande porte (LLMs).",
      macete: "LLM não tem consciência humana, nem respostas 100% fixas.",
      erroComum: "Humanizar excessivamente o funcionamento dos LLMs.",
      comoBancaPensa: "Combina duas afirmações absolutas e exageradas sobre a capacidade cognitiva dos LLMs."
    }
  },

  /* ===== INTELIGÊNCIA ARTIFICIAL GENERATIVA (IAG) ===== */
  {
    id: "ES-042", disciplina: "Estatística", assunto: "Inteligência Artificial", subassunto: "IA Generativa (IAG)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.88,
    enunciado: "A Inteligência Artificial Generativa (IAG) é capaz de criar conteúdos inéditos, como textos, imagens, músicas e códigos, sendo que plataformas como o ChatGPT e o DeepSeek têm seu funcionamento baseado em Modelos de Linguagem de Grande Porte (LLMs).",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "criar conteúdos inéditos ... baseados em LLMs",
    cognitivo: {
      motivo: "Cobrar a característica central da IA generativa: criação de conteúdo inédito a partir de LLMs.",
      mede: "Inteligência Artificial — Inteligência Artificial Generativa (IAG).",
      pegadinhaDesc: "A banca pode negar a capacidade de criação de conteúdo inédito ou associar essas plataformas a outra tecnologia (ex.: segurança de rede).",
      ondeErra: "Confunde IA generativa com outras áreas de TI (redes, segurança, armazenamento).",
      palavraCritica: "criar conteúdos inéditos",
      tecnica: "A IA Generativa (IAG) é o subcampo da IA voltado à criação de conteúdo original — textos, imagens, músicas, códigos — sendo que plataformas amplamente conhecidas, como ChatGPT e DeepSeek, utilizam Modelos de Linguagem de Grande Porte (LLMs) como base tecnológica.",
      regraMental: "IA Generativa = GERA conteúdo novo. ChatGPT/DeepSeek = LLMs por trás da geração."
    },
    comentario: {
      resolucao: "CERTO. A IA Generativa é definida pela capacidade de criar conteúdos inéditos — textos, imagens, músicas e códigos —, sendo que plataformas amplamente utilizadas, como o ChatGPT e o DeepSeek, têm seu funcionamento baseado em Modelos de Linguagem de Grande Porte (LLMs).",
      fundamento: "Doutrina de Inteligência Artificial — Inteligência Artificial Generativa (IAG).",
      macete: "IA Generativa = cria conteúdo novo (texto, imagem, áudio, código).",
      erroComum: "Associar a IA generativa a funções de segurança de rede ou armazenamento, sem relação com o tema.",
      comoBancaPensa: "Item 'limpo' com a definição correta e exemplos reais e coerentes de plataformas."
    }
  },
  {
    id: "ES-043", disciplina: "Estatística", assunto: "Inteligência Artificial", subassunto: "IA Generativa (IAG)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.84,
    enunciado: "A Inteligência Artificial Generativa (IAG) é incapaz de produzir textos inéditos, sendo utilizada exclusivamente para fins de entretenimento, como em jogos eletrônicos, e funcionando sem qualquer necessidade de treinamento prévio de seus modelos.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "incapaz ... exclusivamente ... sem qualquer treinamento prévio",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a IA generativa cria conteúdo inédito e depende de treinamento prévio.",
      mede: "Inteligência Artificial — Inteligência Artificial Generativa (IAG).",
      pegadinhaDesc: "A banca nega a capacidade central da IA generativa e restringe seu uso a um único contexto (jogos).",
      ondeErra: "Aceita múltiplas negações absolutas na mesma assertiva sem perceber que contrariam a definição básica do conceito.",
      palavraCritica: "incapaz ... exclusivamente ... sem qualquer treinamento prévio",
      tecnica: "A IA generativa é justamente capaz de produzir textos e outros conteúdos inéditos, com aplicações que vão muito além de jogos eletrônicos (produtividade, educação, programação, arte), e depende de treinamento prévio extenso com grandes volumes de dados para funcionar.",
      regraMental: "IA generativa: cria conteúdo inédito + sempre depende de treinamento prévio."
    },
    comentario: {
      resolucao: "ERRADO. A IA generativa é justamente capaz de produzir textos e outros conteúdos inéditos, com aplicações muito além do entretenimento, e depende de treinamento prévio extenso com grandes volumes de dados — a assertiva nega, ao mesmo tempo, três características básicas e corretas do conceito.",
      fundamento: "Doutrina de Inteligência Artificial — Inteligência Artificial Generativa (IAG).",
      macete: "IA generativa sempre precisa de treinamento prévio e não se restringe a jogos.",
      erroComum: "Aceitar múltiplas negações absolutas empilhadas na mesma assertiva.",
      comoBancaPensa: "Empilha três negações absolutas na mesma frase, todas contrárias à definição do conceito."
    }
  },
  {
    id: "ES-044", disciplina: "Estatística", assunto: "Inteligência Artificial", subassunto: "IA Generativa e revisão humana",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.82,
    enunciado: "Ainda que ferramentas de Inteligência Artificial generativa integradas a suítes de produtividade, como o Copilot, tenham acesso ao contexto de documentos do usuário para gerar respostas mais relevantes, seus resultados continuam exigindo revisão humana, já que tais modelos não são treinados exclusivamente com informações integralmente verificadas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "acesso ao contexto ... continuam exigindo revisão humana",
    cognitivo: {
      motivo: "Cobrar que ferramentas como o Copilot acessam contexto de documentos, mas ainda assim exigem revisão humana.",
      mede: "Inteligência Artificial — IA generativa integrada a suítes de produtividade.",
      pegadinhaDesc: "A banca pode negar o acesso a contexto ou dispensar a revisão humana dos resultados.",
      ondeErra: "Acha que, por ser uma ferramenta integrada, o Copilot não acessa nenhum contexto do usuário, ou que seus resultados dispensam checagem.",
      palavraCritica: "acesso ao contexto ... continuam exigindo revisão humana",
      tecnica: "Ferramentas de IA generativa integradas a suítes de produtividade, como o Copilot, têm acesso ao contexto de documentos e dados do usuário (por meio de integrações como o Microsoft Graph) para gerar sugestões mais relevantes — mas isso não elimina a necessidade de revisão humana dos resultados, já que os modelos podem produzir erros ou 'alucinações'.",
      regraMental: "Copilot acessa contexto do usuário, mas resultado sempre precisa de revisão humana."
    },
    comentario: {
      resolucao: "CERTO. Ferramentas de IA generativa integradas a suítes de produtividade, como o Copilot, realmente têm acesso ao contexto de documentos do usuário para gerar respostas mais relevantes, mas isso não dispensa a revisão humana dos resultados, uma vez que tais modelos não são treinados exclusivamente com informações integralmente verificadas.",
      fundamento: "Doutrina de Inteligência Artificial — IA generativa integrada a suítes de produtividade (Copilot).",
      macete: "Copilot vê o contexto do documento, mas o resultado sempre precisa de revisão humana.",
      erroComum: "Achar que ferramentas integradas não acessam contexto algum, ou que dispensam revisão humana.",
      comoBancaPensa: "Testa duas características simultaneamente corretas sobre uma mesma ferramenta."
    }
  },
  {
    id: "ES-045", disciplina: "Estatística", assunto: "Inteligência Artificial", subassunto: "IA Generativa e revisão humana",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Ferramentas de Inteligência Artificial generativa integradas a suítes de produtividade, como o Copilot, não têm acesso a nenhum tipo de contexto sobre os documentos do usuário, razão pela qual seus resultados dispensam qualquer revisão humana posterior.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "não têm acesso a nenhum tipo de contexto ... dispensam qualquer revisão",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que ferramentas como o Copilot acessam contexto e ainda exigem revisão humana.",
      mede: "Inteligência Artificial — IA generativa integrada a suítes de produtividade.",
      pegadinhaDesc: "A banca nega o acesso a contexto de documentos e, de forma incoerente, usa essa negativa para dispensar a revisão humana.",
      ondeErra: "Aceita a premissa falsa (sem acesso a contexto) e a conclusão falsa (sem necessidade de revisão) em cadeia.",
      palavraCritica: "não têm acesso a nenhum tipo de contexto ... dispensam qualquer revisão",
      tecnica: "Ferramentas como o Copilot efetivamente acessam o contexto de documentos do usuário para gerar sugestões mais relevantes — e, ainda assim, seus resultados continuam exigindo revisão humana, pois esses modelos não são infalíveis nem treinados exclusivamente com dados integralmente verificados.",
      regraMental: "Copilot: acessa contexto, SIM. Dispensa revisão humana, NÃO."
    },
    comentario: {
      resolucao: "ERRADO. Ferramentas de IA generativa integradas a suítes de produtividade, como o Copilot, efetivamente têm acesso ao contexto de documentos do usuário — e, mesmo assim, seus resultados continuam exigindo revisão humana, já que os modelos não são infalíveis.",
      fundamento: "Doutrina de Inteligência Artificial — IA generativa integrada a suítes de produtividade (Copilot).",
      macete: "Copilot acessa contexto, sim; e revisão humana continua necessária.",
      erroComum: "Encadear duas afirmações falsas como se uma justificasse a outra.",
      comoBancaPensa: "Nega duas características corretas em cadeia, dando a falsa impressão de coerência lógica interna."
    }
  },
  {
    id: "ES-046", disciplina: "Estatística", assunto: "Inteligência Artificial", subassunto: "Alucinação em IA generativa",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.82,
    enunciado: "O fenômeno conhecido como 'alucinação', na Inteligência Artificial generativa, consiste na geração de informações incorretas ou inexistentes apresentadas com aparência de veracidade, podendo ocorrer mesmo quando o comando (prompt) fornecido pelo usuário está correto e bem formulado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "informações incorretas ... mesmo quando o comando está correto",
    cognitivo: {
      motivo: "Cobrar que a alucinação em IA generativa pode ocorrer independentemente da qualidade do comando do usuário.",
      mede: "Inteligência Artificial — IA generativa (fenômeno da alucinação).",
      pegadinhaDesc: "A banca pode restringir a alucinação apenas a comandos mal formulados pelo usuário.",
      ondeErra: "Acha que a alucinação só ocorre por erro do usuário, ignorando que é uma limitação intrínseca do modelo.",
      palavraCritica: "mesmo quando o comando ... está correto e bem formulado",
      tecnica: "A 'alucinação' é a geração, pelo modelo, de informações incorretas, inventadas ou inexistentes, apresentadas com aparência de veracidade — trata-se de uma limitação intrínseca do funcionamento estatístico do modelo, que pode ocorrer mesmo diante de um comando (prompt) claro e corretamente formulado.",
      regraMental: "Alucinação é limitação do próprio modelo — não depende só do comando do usuário estar certo."
    },
    comentario: {
      resolucao: "CERTO. A alucinação consiste na geração de informações incorretas ou inexistentes, apresentadas com aparência de veracidade, sendo uma limitação intrínseca do funcionamento estatístico dos modelos de IA generativa — podendo ocorrer mesmo quando o comando fornecido pelo usuário está correto e bem formulado.",
      fundamento: "Doutrina de Inteligência Artificial — IA generativa (fenômeno da alucinação).",
      macete: "Alucinação é falha do modelo, não só do usuário.",
      erroComum: "Restringir a ocorrência da alucinação apenas a comandos mal formulados.",
      comoBancaPensa: "Cobra a compreensão de que a alucinação é uma limitação estrutural do modelo, e não apenas erro de operação do usuário."
    }
  },
  {
    id: "ES-047", disciplina: "Estatística", assunto: "Inteligência Artificial", subassunto: "Alucinação em IA generativa",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "O fenômeno conhecido como 'alucinação' em Inteligência Artificial generativa ocorre exclusivamente quando o usuário insere comandos incorretos ou mal formulados, não se verificando em hipótese alguma quando o comando está corretamente estruturado.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "exclusivamente ... não se verificando em hipótese alguma",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a alucinação é limitação do modelo, e não apenas erro do usuário.",
      mede: "Inteligência Artificial — IA generativa (fenômeno da alucinação).",
      pegadinhaDesc: "A banca restringe a causa da alucinação exclusivamente ao usuário, usando palavras absolutas.",
      ondeErra: "Acredita que um comando (prompt) bem formulado é garantia suficiente contra a alucinação.",
      palavraCritica: "exclusivamente ... não se verificando em hipótese alguma",
      tecnica: "A alucinação é uma limitação intrínseca do funcionamento estatístico dos modelos de IA generativa, podendo ocorrer independentemente da qualidade do comando fornecido — inclusive diante de prompts corretos e bem formulados.",
      regraMental: "Alucinação pode ocorrer mesmo com prompt perfeito — é falha do modelo, não só do usuário."
    },
    comentario: {
      resolucao: "ERRADO. A alucinação é uma limitação intrínseca dos modelos de IA generativa e pode ocorrer independentemente da qualidade do comando fornecido pelo usuário, inclusive diante de prompts corretos e bem formulados — não se trata de fenômeno exclusivo de comandos incorretos.",
      fundamento: "Doutrina de Inteligência Artificial — IA generativa (fenômeno da alucinação).",
      macete: "Prompt perfeito não garante ausência de alucinação.",
      erroComum: "Atribuir a alucinação exclusivamente a falhas do usuário na formulação do comando.",
      comoBancaPensa: "Usa palavras absolutas ('exclusivamente', 'em hipótese alguma') para restringir indevidamente a causa do fenômeno."
    }
  },

  /* ===== FUNDAMENTOS DE MACHINE LEARNING ===== */
  {
    id: "ES-048", disciplina: "Estatística", assunto: "Machine Learning", subassunto: "Fundamentos do aprendizado de máquina",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.86,
    enunciado: "O aprendizado de máquina é um subcampo da Inteligência Artificial que permite que sistemas aprendam padrões e realizem previsões ou tomem decisões sem que sejam explicitamente programados para cada tarefa específica, dependendo, para isso, da quantidade e da qualidade dos dados fornecidos em seu treinamento.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sem ... explicitamente programados ... quantidade e qualidade dos dados",
    cognitivo: {
      motivo: "Cobrar a definição correta e completa do aprendizado de máquina.",
      mede: "Inteligência Artificial — fundamentos do Machine Learning.",
      pegadinhaDesc: "A banca pode negar a dependência de dados de qualidade para a generalização do modelo.",
      ondeErra: "Ignora que a qualidade e a quantidade dos dados de treinamento afetam diretamente a capacidade de generalização do modelo.",
      palavraCritica: "quantidade e qualidade dos dados fornecidos",
      tecnica: "O aprendizado de máquina permite que sistemas aprendam padrões e tomem decisões a partir de dados, sem programação explícita para cada tarefa. Quanto mais dados relevantes e de qualidade forem fornecidos no treinamento, melhor tende a ser a capacidade de generalização do modelo.",
      regraMental: "ML: aprende sem programação explícita por tarefa + depende de dados de qualidade para generalizar bem."
    },
    comentario: {
      resolucao: "CERTO. O aprendizado de máquina é subcampo da IA que permite que sistemas aprendam padrões e tomem decisões sem programação explícita para cada tarefa, sendo sua capacidade de generalização diretamente dependente da quantidade e da qualidade dos dados utilizados no treinamento.",
      fundamento: "Doutrina de Inteligência Artificial — fundamentos do Machine Learning.",
      macete: "Mais dados relevantes e de qualidade → melhor generalização do modelo.",
      erroComum: "Ignorar a relação entre qualidade dos dados de treinamento e capacidade de generalização.",
      comoBancaPensa: "Item 'limpo' e tecnicamente correto sobre os fundamentos do aprendizado de máquina."
    }
  },
  {
    id: "ES-049", disciplina: "Estatística", assunto: "Machine Learning", subassunto: "Fundamentos do aprendizado de máquina",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.84,
    enunciado: "O aprendizado de máquina (Machine Learning) consiste em um tipo de hardware utilizado em centros de dados (data centers), sendo capaz de eliminar totalmente a ocorrência de erros de previsão, uma vez devidamente treinado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "tipo de hardware ... eliminar totalmente ... erros de previsão",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o Machine Learning é software/técnica, e não hardware, e que não elimina erros.",
      mede: "Inteligência Artificial — fundamentos do Machine Learning.",
      pegadinhaDesc: "A banca classifica o ML como hardware e afirma que ele elimina totalmente erros de previsão.",
      ondeErra: "Confunde o conceito computacional (algoritmo/técnica) com um componente físico de hardware.",
      palavraCritica: "tipo de hardware ... eliminar totalmente",
      tecnica: "O Machine Learning é um campo de algoritmos e técnicas computacionais (não um componente de hardware), e nenhum modelo de aprendizado de máquina elimina totalmente os erros de previsão — sempre existe alguma margem de erro, medida por métricas de desempenho.",
      regraMental: "ML é técnica/algoritmo, não hardware. Nenhum modelo elimina erros por completo."
    },
    comentario: {
      resolucao: "ERRADO. O Machine Learning é um campo de algoritmos e técnicas computacionais de aprendizado a partir de dados, e não um tipo de hardware de data center. Além disso, nenhum modelo de aprendizado de máquina elimina totalmente a ocorrência de erros de previsão.",
      fundamento: "Doutrina de Inteligência Artificial — fundamentos do Machine Learning.",
      macete: "ML é software/algoritmo, não hardware. Erros de previsão nunca são zerados por completo.",
      erroComum: "Confundir o conceito de Machine Learning com um componente de infraestrutura física.",
      comoBancaPensa: "Classifica erroneamente o conceito e, ainda, exagera sua capacidade preditiva."
    }
  },
  {
    id: "ES-050", disciplina: "Estatística", assunto: "Machine Learning", subassunto: "Tipos de aprendizado de máquina",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.86,
    enunciado: "Existem diferentes tipos de aprendizado de máquina, entre os quais o supervisionado (que utiliza dados rotulados), o não supervisionado (que identifica padrões em dados sem rótulos) e o por reforço (que aprende por meio de recompensas e penalidades obtidas em interações com o ambiente).",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "supervisionado ... não supervisionado ... por reforço",
    cognitivo: {
      motivo: "Cobrar os três tipos clássicos de aprendizado de máquina e suas características distintivas.",
      mede: "Inteligência Artificial — tipos de aprendizado de máquina.",
      pegadinhaDesc: "A banca pode inverter as características de cada tipo ou omitir um deles.",
      ondeErra: "Confunde as três categorias entre si (rótulos, ausência de rótulos, recompensas/penalidades).",
      palavraCritica: "supervisionado ... não supervisionado ... por reforço",
      tecnica: "Aprendizado supervisionado: usa dados rotulados (com respostas corretas conhecidas). Não supervisionado: identifica padrões em dados sem rótulos. Por reforço: aprende por tentativa e erro, recebendo recompensas e penalidades ao interagir com um ambiente.",
      regraMental: "Supervisionado = rótulo. Não supervisionado = sem rótulo. Reforço = recompensa/punição."
    },
    comentario: {
      resolucao: "CERTO. Os três tipos clássicos de aprendizado de máquina são corretamente descritos: supervisionado (dados rotulados), não supervisionado (identificação de padrões sem rótulos) e por reforço (aprendizado por recompensas e penalidades em interações com o ambiente).",
      fundamento: "Doutrina de Inteligência Artificial — tipos de aprendizado de máquina.",
      macete: "Supervisionado (rótulo), não supervisionado (sem rótulo), reforço (recompensa/punição).",
      erroComum: "Inverter as características entre os três tipos de aprendizado.",
      comoBancaPensa: "Item de fixação clássico sobre a taxonomia central do aprendizado de máquina."
    }
  },
  {
    id: "ES-051", disciplina: "Estatística", assunto: "Machine Learning", subassunto: "Tipos de aprendizado de máquina",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.82,
    enunciado: "O aprendizado supervisionado dispensa o uso de dados rotulados, sendo essa característica exclusiva do aprendizado não supervisionado, o qual, por sua vez, depende necessariamente de rótulos previamente definidos para identificar tendências nos dados analisados.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "supervisionado dispensa ... não supervisionado ... depende de rótulos",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que é o supervisionado (e não o não supervisionado) que depende de dados rotulados.",
      mede: "Inteligência Artificial — tipos de aprendizado de máquina (supervisionado x não supervisionado).",
      pegadinhaDesc: "A banca inverte completamente a dependência de rótulos entre os dois tipos de aprendizado.",
      ondeErra: "Troca as características de supervisionado e não supervisionado entre si.",
      palavraCritica: "supervisionado dispensa ... não supervisionado ... depende de rótulos",
      tecnica: "É exatamente o oposto: o aprendizado SUPERVISIONADO é que depende de dados rotulados (com respostas corretas conhecidas) para treinar o modelo; o aprendizado NÃO SUPERVISIONADO, por sua vez, dispensa rótulos, identificando padrões e tendências nos dados por conta própria.",
      regraMental: "Supervisionado precisa de rótulo. Não supervisionado dispensa rótulo."
    },
    comentario: {
      resolucao: "ERRADO. As definições foram completamente invertidas: é o aprendizado supervisionado que depende de dados rotulados, e o aprendizado não supervisionado que dispensa rótulos, identificando padrões e tendências nos dados de forma autônoma.",
      fundamento: "Doutrina de Inteligência Artificial — tipos de aprendizado de máquina (supervisionado x não supervisionado).",
      macete: "Supervisionado = COM rótulo. Não supervisionado = SEM rótulo.",
      erroComum: "Inverter a dependência de rótulos entre os dois tipos de aprendizado.",
      comoBancaPensa: "Troca as características centrais dos dois tipos de aprendizado entre si, invertendo a lógica correta."
    }
  },

  /* ===== EMBEDDINGS (BUSCA SEMÂNTICA) ===== */
  {
    id: "ES-052", disciplina: "Estatística", assunto: "Inteligência Artificial", subassunto: "Embeddings (busca semântica)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Em sistemas de busca semântica baseados em modelos de linguagem de grande porte, frases e documentos são convertidos em representações numéricas densas de dimensão fixa, denominadas embeddings, de modo que a proximidade entre esses vetores reflita a similaridade de significado entre os textos originais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "representações numéricas densas ... embeddings ... similaridade de significado",
    cognitivo: {
      motivo: "Cobrar a definição correta de embeddings e sua função na busca semântica.",
      mede: "Inteligência Artificial — representações vetoriais (embeddings).",
      pegadinhaDesc: "A banca pode trocar 'embeddings' por outro termo técnico (token, prompt, parâmetro, logit).",
      ondeErra: "Confunde embeddings com outros termos técnicos de IA que têm funções distintas.",
      palavraCritica: "embeddings",
      tecnica: "Embeddings são representações vetoriais numéricas densas, de dimensão fixa, geradas a partir de textos (palavras, frases ou documentos), de modo que vetores próximos no espaço numérico correspondam a significados semanticamente próximos — base técnica da busca semântica.",
      regraMental: "Embeddings = vetores de significado. Vetores próximos = significados parecidos."
    },
    comentario: {
      resolucao: "CERTO. Os embeddings são representações numéricas densas, de dimensão fixa, geradas a partir de textos, de modo que a proximidade entre os vetores reflita a similaridade semântica entre os textos originais — mecanismo central da busca semântica em sistemas baseados em modelos de linguagem.",
      fundamento: "Doutrina de Inteligência Artificial — representações vetoriais (embeddings) e busca semântica.",
      macete: "Embeddings = texto virou vetor; vetor perto = significado parecido.",
      erroComum: "Confundir embeddings com tokens (unidades de divisão do texto) ou prompts (comandos de entrada).",
      comoBancaPensa: "Item de fixação técnica sobre um conceito central de busca semântica em IA."
    }
  },
  {
    id: "ES-053", disciplina: "Estatística", assunto: "Inteligência Artificial", subassunto: "Embeddings (busca semântica)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "Em sistemas de busca semântica baseados em modelos de linguagem de grande porte, a representação vetorial que reflete a similaridade de significado entre textos é denominada token, unidade que corresponde exclusivamente às menores partes em que um texto é dividido antes do processamento pelo modelo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "denominada token ... busca semântica",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a representação vetorial de similaridade semântica é embedding, não token.",
      mede: "Inteligência Artificial — representações vetoriais (embeddings x tokens).",
      pegadinhaDesc: "A banca atribui à token a função de embedding, confundindo dois conceitos distintos.",
      ondeErra: "Confunde token (unidade de divisão textual) com embedding (representação vetorial de significado).",
      palavraCritica: "denominada token",
      tecnica: "Token é a unidade em que o texto é dividido para processamento (palavras, subpalavras ou caracteres), mas não é a representação vetorial usada para medir similaridade semântica — essa função é exercida pelos embeddings, vetores numéricos densos derivados, inclusive, do processamento dos tokens.",
      regraMental: "Token = pedaço do texto. Embedding = vetor de significado. Não são a mesma coisa."
    },
    comentario: {
      resolucao: "ERRADO. A representação vetorial que reflete a similaridade semântica entre textos, usada em busca semântica, é denominada embedding, e não token. O token é apenas a unidade de divisão do texto para processamento, servindo de insumo para a geração dos embeddings, mas não se confunde com eles.",
      fundamento: "Doutrina de Inteligência Artificial — representações vetoriais (embeddings x tokens).",
      macete: "Busca semântica usa embeddings, não tokens.",
      erroComum: "Confundir token (unidade textual) com embedding (vetor de significado).",
      comoBancaPensa: "Troca o termo técnico correto por outro relacionado, mas com função distinta."
    }
  },

  /* ===== DEEP LEARNING ===== */
  {
    id: "ES-054", disciplina: "Estatística", assunto: "Machine Learning", subassunto: "Deep Learning",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.84,
    enunciado: "O Deep Learning constitui um subconjunto do aprendizado de máquina que emprega redes neurais artificiais multicamadas, atribuindo pesos e vieses distintos às diferentes camadas e aos neurônios artificiais que as compõem.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "subconjunto do aprendizado de máquina ... redes neurais multicamadas",
    cognitivo: {
      motivo: "Cobrar a definição correta de Deep Learning como subconjunto do Machine Learning baseado em redes profundas.",
      mede: "Inteligência Artificial — Deep Learning.",
      pegadinhaDesc: "A banca pode negar a relação de subconjunto entre Deep Learning e Machine Learning.",
      ondeErra: "Trata o Deep Learning como um campo totalmente independente do Machine Learning.",
      palavraCritica: "subconjunto do aprendizado de máquina",
      tecnica: "O Deep Learning é um subconjunto (uma especialização) do Machine Learning que utiliza redes neurais artificiais com múltiplas camadas (redes profundas), nas quais pesos e vieses distintos são ajustados em cada camada e neurônio durante o treinamento.",
      regraMental: "Deep Learning ⊂ Machine Learning ⊂ Inteligência Artificial — sempre com redes multicamadas."
    },
    comentario: {
      resolucao: "CERTO. O Deep Learning é, de fato, um subconjunto do aprendizado de máquina, caracterizado pelo uso de redes neurais artificiais com múltiplas camadas, nas quais pesos e vieses distintos são atribuídos a cada camada e a cada neurônio artificial ao longo do treinamento.",
      fundamento: "Doutrina de Inteligência Artificial — Deep Learning (aprendizado profundo).",
      macete: "Deep Learning = ML + redes neurais com muitas camadas.",
      erroComum: "Tratar o Deep Learning como um campo independente do Machine Learning.",
      comoBancaPensa: "Item 'limpo' sobre a relação de subconjunto e a estrutura técnica do Deep Learning."
    }
  },
  {
    id: "ES-055", disciplina: "Estatística", assunto: "Machine Learning", subassunto: "Deep Learning",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.82,
    enunciado: "O Deep Learning trabalha sempre com aprendizado não supervisionado, no qual o processo de aprendizagem emerge naturalmente através dos nós da rede, não sendo compatível com abordagens de aprendizado supervisionado ou por reforço.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "trabalha sempre ... não sendo compatível",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o Deep Learning é compatível com os três tipos de aprendizado (supervisionado, não supervisionado e por reforço).",
      mede: "Inteligência Artificial — Deep Learning e tipos de aprendizado.",
      pegadinhaDesc: "A banca restringe indevidamente o Deep Learning a apenas um tipo de aprendizado.",
      ondeErra: "Acha que 'redes profundas' implica necessariamente 'aprendizado não supervisionado', confundindo arquitetura com paradigma de treinamento.",
      palavraCritica: "trabalha sempre ... não sendo compatível",
      tecnica: "O Deep Learning é uma arquitetura (redes neurais multicamadas) que pode ser aplicada em qualquer um dos três paradigmas de aprendizado: supervisionado (ex.: classificação de imagens rotuladas), não supervisionado (ex.: agrupamento) e por reforço (ex.: jogos e robótica) — não há exclusividade com o não supervisionado.",
      regraMental: "Deep Learning é arquitetura; funciona com supervisionado, não supervisionado E por reforço."
    },
    comentario: {
      resolucao: "ERRADO. O Deep Learning não trabalha exclusivamente com aprendizado não supervisionado — sua arquitetura de redes neurais multicamadas é compatível com os três paradigmas de aprendizado: supervisionado, não supervisionado e por reforço, dependendo da aplicação.",
      fundamento: "Doutrina de Inteligência Artificial — Deep Learning e paradigmas de aprendizado.",
      macete: "Deep Learning é arquitetura — funciona com qualquer um dos três tipos de aprendizado.",
      erroComum: "Confundir a arquitetura de redes profundas com um único paradigma de aprendizado.",
      comoBancaPensa: "Usa a palavra absoluta 'sempre' para restringir indevidamente a compatibilidade do Deep Learning."
    }
  },

  /* ===== APRENDIZADO NÃO SUPERVISIONADO (DEFINIÇÃO ESPECÍFICA) ===== */
  {
    id: "ES-056", disciplina: "Estatística", assunto: "Machine Learning", subassunto: "Aprendizado não supervisionado",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.82,
    enunciado: "Os modelos de aprendizado não supervisionado precisam inferir suas próprias regras a partir de dados que não contêm respostas corretas previamente rotuladas, tendo como objetivo identificar padrões significativos nesses dados.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "inferir suas próprias regras ... sem respostas corretas rotuladas",
    cognitivo: {
      motivo: "Cobrar a definição correta do aprendizado não supervisionado.",
      mede: "Inteligência Artificial — aprendizado não supervisionado.",
      pegadinhaDesc: "A banca pode atribuir a esse tipo de aprendizado a necessidade de dados rotulados.",
      ondeErra: "Confunde aprendizado não supervisionado com supervisionado quanto à necessidade de rótulos.",
      palavraCritica: "inferir suas próprias regras ... sem respostas corretas rotuladas",
      tecnica: "No aprendizado não supervisionado, o modelo precisa inferir suas próprias regras a partir de dados sem rótulos (sem respostas corretas conhecidas), com o objetivo de identificar padrões, agrupamentos ou estruturas relevantes nesses dados.",
      regraMental: "Não supervisionado: sem rótulo, o modelo 'se vira sozinho' para achar padrões."
    },
    comentario: {
      resolucao: "CERTO. O aprendizado não supervisionado é definido justamente pela ausência de rótulos nos dados de treinamento, exigindo que o próprio modelo infira regras e identifique padrões significativos de forma autônoma.",
      fundamento: "Doutrina de Inteligência Artificial — aprendizado não supervisionado.",
      macete: "Sem rótulo + acha padrão sozinho = aprendizado não supervisionado.",
      erroComum: "Confundir com o aprendizado supervisionado, que depende de dados rotulados.",
      comoBancaPensa: "Item de fixação sobre a definição precisa do aprendizado não supervisionado."
    }
  },
  {
    id: "ES-057", disciplina: "Estatística", assunto: "Machine Learning", subassunto: "Aprendizado não supervisionado",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "Os modelos de aprendizado não supervisionado necessitam de dados rotulados para ajustar seus parâmetros e identificar tendências nos conjuntos de dados analisados, sendo essa característica o que os distingue do aprendizado supervisionado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "necessitam de dados rotulados",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o aprendizado não supervisionado dispensa dados rotulados.",
      mede: "Inteligência Artificial — aprendizado não supervisionado (dependência de rótulos).",
      pegadinhaDesc: "A banca atribui ao aprendizado não supervisionado uma dependência de rótulos que é, na verdade, do supervisionado.",
      ondeErra: "Inverte a característica central que diferencia os dois tipos de aprendizado.",
      palavraCritica: "necessitam de dados rotulados",
      tecnica: "É exatamente o oposto: os modelos de aprendizado NÃO supervisionado dispensam dados rotulados, identificando padrões e tendências de forma autônoma — a necessidade de rótulos é característica do aprendizado SUPERVISIONADO.",
      regraMental: "Não supervisionado dispensa rótulo — quem precisa de rótulo é o supervisionado."
    },
    comentario: {
      resolucao: "ERRADO. Os modelos de aprendizado não supervisionado dispensam dados rotulados, identificando padrões e tendências nos dados de forma autônoma — a necessidade de dados rotulados é justamente a característica que define o aprendizado supervisionado, e não o não supervisionado.",
      fundamento: "Doutrina de Inteligência Artificial — aprendizado não supervisionado x supervisionado.",
      macete: "Rótulo é do supervisionado. Não supervisionado dispensa rótulo.",
      erroComum: "Inverter a característica central que diferencia os dois tipos de aprendizado.",
      comoBancaPensa: "Atribui ao aprendizado não supervisionado a característica definidora do aprendizado supervisionado."
    }
  },

  /* ===== REDES NEURAIS, IA SIMBÓLICA E APRENDIZADO POR REFORÇO ===== */
  {
    id: "ES-058", disciplina: "Estatística", assunto: "Inteligência Artificial", subassunto: "Redes neurais e aprendizado por reforço",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.84,
    enunciado: "As redes neurais artificiais são modelos inspirados no funcionamento do cérebro humano, capazes de aprender a partir de grandes volumes de dados e de ajustar seus pesos internos para reconhecer padrões complexos; já o aprendizado por reforço é empregado, entre outras aplicações, em sistemas que envolvem interação dinâmica com o ambiente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "inspiradas no cérebro humano ... interação dinâmica com o ambiente",
    cognitivo: {
      motivo: "Cobrar a inspiração biológica das redes neurais e a aplicabilidade do aprendizado por reforço em ambientes dinâmicos.",
      mede: "Inteligência Artificial — redes neurais artificiais e aprendizado por reforço.",
      pegadinhaDesc: "A banca pode restringir o aprendizado por reforço apenas a dados estáticos.",
      ondeErra: "Acha que o aprendizado por reforço só se aplica a análises estáticas, sem interação com o ambiente.",
      palavraCritica: "interação dinâmica com o ambiente",
      tecnica: "As redes neurais artificiais são inspiradas na estrutura do cérebro humano, ajustando pesos internos ao longo do treinamento para reconhecer padrões complexos. O aprendizado por reforço, por sua vez, é especialmente aplicado em cenários de interação dinâmica com o ambiente (jogos, robótica, sistemas de recomendação em tempo real).",
      regraMental: "Redes neurais: inspiração no cérebro. Aprendizado por reforço: interação dinâmica com o ambiente."
    },
    comentario: {
      resolucao: "CERTO. As redes neurais artificiais são inspiradas no funcionamento do cérebro humano, ajustando pesos para reconhecer padrões complexos a partir de grandes volumes de dados. O aprendizado por reforço, por sua vez, é aplicado justamente em sistemas que envolvem interação dinâmica com o ambiente, como jogos e robótica.",
      fundamento: "Doutrina de Inteligência Artificial — redes neurais artificiais e aprendizado por reforço.",
      macete: "Redes neurais = inspiração cerebral. Reforço = interação dinâmica com o ambiente.",
      erroComum: "Restringir o aprendizado por reforço a análises estáticas de dados.",
      comoBancaPensa: "Item 'limpo' que combina duas afirmações corretas sobre conceitos distintos de IA."
    }
  },
  {
    id: "ES-059", disciplina: "Estatística", assunto: "Inteligência Artificial", subassunto: "Sistemas baseados em regras (IA simbólica)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de provas anteriores em Inteligência Artificial)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "Sistemas fundamentados exclusivamente em regras lógicas predefinidas não são considerados modelos de inteligência artificial, uma vez que a capacidade de aprendizado a partir de dados constitui requisito indispensável para a caracterização de qualquer sistema como inteligência artificial.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "não são considerados ... requisito indispensável",
    cognitivo: {
      motivo: "Cobrar que sistemas baseados em regras (IA simbólica) também são reconhecidos como inteligência artificial, mesmo sem aprendizado a partir de dados.",
      mede: "Inteligência Artificial — IA simbólica (sistemas baseados em regras) x aprendizado de máquina.",
      pegadinhaDesc: "A banca cria um requisito inexistente, exigindo capacidade de aprendizado para que um sistema seja considerado IA.",
      ondeErra: "Restringe o conceito de inteligência artificial apenas aos sistemas baseados em aprendizado de máquina, ignorando a IA simbólica clássica.",
      palavraCritica: "requisito indispensável",
      tecnica: "Sistemas especialistas e outras abordagens de IA simbólica (baseadas em regras lógicas predefinidas, sem aprendizado a partir de dados) são reconhecidos, historicamente, como uma vertente legítima da Inteligência Artificial — o aprendizado de máquina é apenas uma das abordagens possíveis dentro do campo mais amplo da IA, não um requisito para toda e qualquer definição de sistema inteligente.",
      regraMental: "IA não exige aprendizado de máquina — sistemas de regras (IA simbólica) também são IA."
    },
    comentario: {
      resolucao: "ERRADO. Sistemas baseados exclusivamente em regras lógicas predefinidas (IA simbólica, como sistemas especialistas) são reconhecidos como uma vertente legítima da Inteligência Artificial, ainda que não possuam capacidade de aprendizado a partir de dados — o aprendizado de máquina é apenas uma das abordagens dentro do campo mais amplo da IA, e não um requisito indispensável para toda e qualquer definição de sistema inteligente.",
      fundamento: "Doutrina de Inteligência Artificial — IA simbólica (sistemas baseados em regras) x aprendizado de máquina.",
      macete: "IA é mais ampla que ML — sistemas de regras (IA simbólica) também contam como IA.",
      erroComum: "Restringir o conceito de IA apenas aos sistemas que aprendem a partir de dados.",
      comoBancaPensa: "Cria um requisito conceitual inexistente para excluir uma vertente legítima e histórica da IA."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE41);

/* Frequência de temas — Estatística (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Estatística");
  if (!d) { d = { disciplina: "Estatística", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "IA generativa, LLMs e alucinação", freq: 90, tendencia: "alta", prob: 0.9 },
    { tema: "Hierarquia IA/ML/redes neurais e Deep Learning", freq: 86, tendencia: "alta", prob: 0.86 },
    { tema: "Tipos de aprendizado de máquina (supervisionado/não supervisionado/reforço)", freq: 88, tendencia: "alta", prob: 0.88 },
    { tema: "Embeddings e busca semântica", freq: 78, tendencia: "alta", prob: 0.78 },
  );
})();
