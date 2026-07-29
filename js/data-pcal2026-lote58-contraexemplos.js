/* =====================================================================
   QUESTLAB — Lote 58: CONTRAEXEMPLOS DOS PADRÕES DA BANCA

   O validador apontava seis padrões "previsíveis demais": troca-conceito
   em 98,3% ERRADO, generalizacao em 100%, troca-sujeito 96,3%,
   exigencia-inexistente 91,7%, troca-numerica 90,9% e restricao-indevida
   90,9%. Quando um padrão quase sempre cai no mesmo gabarito, o rótulo
   vira paráfrase da resposta e o bloco "Padrão da banca detectado" deixa
   de ensinar algo transferível.

   A raiz é a mesma que o lote 55 corrigiu em "literalidade": todos os
   gatilhos do DNA_BANCA são formulados como HABILIDADES DE VERIFICAÇÃO —
   "confira se o rótulo bate com a definição", "procure o contraexemplo",
   "pergunte QUEM pode praticar o ato", "a lei realmente limita a isso?".
   Só que o banco só continha itens em que a verificação FALHA. Faltava a
   outra metade do trabalho real de prova: aplicar a checagem e concluir
   que está tudo certo.

   Estes 35 itens são todos CERTO. Não é complacência: a banca cobra
   exatamente isso para punir quem responde por reflexo — quem vê
   "todos/qualquer" e marca ERRADO sem checar se a regra é mesmo absoluta,
   ou quem vê um número e presume adulteração. Aqui a regra É absoluta, o
   número ESTÁ certo, a autoridade É aquela, o conceito BATE com o rótulo.

   Distribuídos preferencialmente nas disciplinas com déficit de cobertura
   apontado pelo validador (Língua Portuguesa, RLM, Direitos Humanos,
   Crimes Cibernéticos, Contabilidade).
   ===================================================================== */

const QUESTOES_PCAL_LOTE58 = [

  /* ============ GENERALIZAÇÃO — a regra é mesmo absoluta ============ */
  {
    id: "DH-054", disciplina: "Direitos Humanos", assunto: "Direitos e garantias fundamentais", subassunto: "Vedação absoluta da tortura",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.9,
    enunciado: "Ninguém será submetido a tortura nem a tratamento desumano ou degradante, sem que a Constituição admita qualquer exceção a essa vedação.",
    gabarito: "C", pegadinha: "generalizacao", palavraChave: "sem que a Constituição admita qualquer exceção",
    cognitivo: {
      motivo: "Mostrar que há regras constitucionais genuinamente absolutas.",
      mede: "CF, art. 5º, III — núcleo inderrogável.",
      pegadinhaDesc: "O 'qualquer exceção' aciona o reflexo de marcar ERRADO, mas aqui a vedação é mesmo absoluta.",
      ondeErra: "Marca ERRADO por reflexo ao ver termo absoluto, sem checar se a regra comporta exceção.",
      palavraCritica: "qualquer exceção",
      tecnica: "Termo absoluto não é sinônimo de item falso. A vedação à tortura é cláusula pétrea sem ressalva, inclusive em estado de sítio.",
      regraMental: "Tortura: proibição absoluta, sem exceção — nem em guerra."
    },
    comentario: {
      resolucao: "CERTO. O art. 5º, III, da CF não admite ressalva: a vedação à tortura e ao tratamento desumano ou degradante é absoluta, não sendo suspensa nem durante estado de defesa ou de sítio. É também norma imperativa de direito internacional (jus cogens).",
      fundamento: "CF, art. 5º, III; art. 5º, XLIII; Convenção contra a Tortura (ONU).",
      macete: "Tortura não tem exceção.",
      erroComum: "Marcar ERRADO só porque o item usa termo absoluto.",
      comoBancaPensa: "Pune quem decorou 'palavra absoluta = errado' sem verificar a norma."
    }
  },
  {
    id: "DH-055", disciplina: "Direitos Humanos", assunto: "Direitos e garantias fundamentais", subassunto: "Crimes inafiançáveis",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.85,
    enunciado: "A prática da tortura, o tráfico ilícito de entorpecentes, o terrorismo e os crimes definidos como hediondos são, em todos os casos, inafiançáveis e insuscetíveis de graça ou anistia.",
    gabarito: "C", pegadinha: "generalizacao", palavraChave: "em todos os casos, inafiançáveis e insuscetíveis de graça ou anistia",
    cognitivo: {
      motivo: "Fixar o rol do art. 5º, XLIII, como regra sem exceção.",
      mede: "CF, art. 5º, XLIII.",
      pegadinhaDesc: "'Em todos os casos' soa exagerado, mas reproduz o comando constitucional.",
      ondeErra: "Presume que deve haver exceção por causa do termo totalizante.",
      palavraCritica: "em todos os casos",
      tecnica: "O inciso XLIII é taxativo quanto a esses quatro grupos: inafiançáveis e insuscetíveis de graça ou anistia, sem ressalva.",
      regraMental: "3TH: Tortura, Tráfico, Terrorismo e Hediondos — sem fiança, graça ou anistia."
    },
    comentario: {
      resolucao: "CERTO. O art. 5º, XLIII, da CF determina que a lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins, o terrorismo e os definidos como crimes hediondos. Não há exceção constitucional a esse regime.",
      fundamento: "CF, art. 5º, XLIII.",
      macete: "Tortura, Tráfico, Terrorismo, Hediondos.",
      erroComum: "Rejeitar o item pelo 'em todos os casos'.",
      comoBancaPensa: "Testa se o candidato conhece o rol ou apenas reage ao advérbio."
    }
  },
  {
    id: "ES-132", disciplina: "Estatística", assunto: "Distribuição de Poisson", subassunto: "Igualdade média-variância",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Em qualquer distribuição de Poisson, a média é sempre igual à variância.",
    gabarito: "C", pegadinha: "generalizacao", palavraChave: "Em qualquer ... sempre igual",
    cognitivo: {
      motivo: "Mostrar propriedade matemática genuinamente universal.",
      mede: "Modelo de Poisson.",
      pegadinhaDesc: "Duplo termo absoluto ('qualquer' e 'sempre') num enunciado que, ainda assim, é verdadeiro.",
      ondeErra: "Marca ERRADO pelo acúmulo de palavras absolutas.",
      palavraCritica: "qualquer ... sempre",
      tecnica: "Em matemática, propriedade demonstrada vale sempre. Na Poisson, E(X) = Var(X) = λ por definição do modelo.",
      regraMental: "Poisson: média = variância, sem exceção."
    },
    comentario: {
      resolucao: "CERTO. Para X ~ Poisson(λ), demonstra-se que E(X) = Var(X) = λ, qualquer que seja o valor de λ. É propriedade definidora do modelo, não uma aproximação.",
      fundamento: "Distribuição de Poisson — momentos.",
      macete: "Poisson: média = variância.",
      erroComum: "Rejeitar por conter 'qualquer' e 'sempre'.",
      comoBancaPensa: "Usa termos absolutos em afirmação matematicamente verdadeira."
    }
  },
  {
    id: "ES-133", disciplina: "Estatística", assunto: "Variáveis aleatórias", subassunto: "Soma das probabilidades",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Em toda distribuição de probabilidade de variável aleatória discreta, a soma das probabilidades de todos os valores possíveis é necessariamente igual a 1.",
    gabarito: "C", pegadinha: "generalizacao", palavraChave: "toda ... necessariamente igual a 1",
    cognitivo: {
      motivo: "Fixar axioma que não admite exceção.",
      mede: "Axiomas de probabilidade.",
      pegadinhaDesc: "'Toda' e 'necessariamente' num enunciado verdadeiro por definição.",
      ondeErra: "Reage aos termos absolutos em vez de checar o axioma.",
      palavraCritica: "necessariamente",
      tecnica: "É condição de existência da função de probabilidade: se a soma não fecha em 1, a distribuição não é válida.",
      regraMental: "Σp(x) = 1 sempre, senão não é distribuição."
    },
    comentario: {
      resolucao: "CERTO. A normalização é axioma da função de probabilidade: a soma sobre todo o suporte deve ser exatamente 1. Distribuição cuja soma difere de 1 simplesmente não é válida.",
      fundamento: "Axiomas de Kolmogorov — normalização.",
      macete: "Soma sempre 1.",
      erroComum: "Marcar ERRADO por causa de 'toda'.",
      comoBancaPensa: "Aplica termo absoluto a axioma, que por natureza não tem exceção."
    }
  },
  {
    id: "DC-107", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Penas vedadas",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "A Constituição Federal veda, sem qualquer ressalva, as penas de caráter perpétuo, de trabalhos forçados, de banimento e as penas cruéis.",
    gabarito: "C", pegadinha: "generalizacao", palavraChave: "sem qualquer ressalva",
    cognitivo: {
      motivo: "Distinguir a única pena vedada com ressalva das demais, que são absolutas.",
      mede: "CF, art. 5º, XLVII.",
      pegadinhaDesc: "O rol citado exclui justamente a pena de morte, única com exceção — logo, o 'sem ressalva' procede.",
      ondeErra: "Lembra da exceção da pena de morte e a estende a todo o inciso.",
      palavraCritica: "sem qualquer ressalva",
      tecnica: "No inciso XLVII, só a pena de morte tem exceção (guerra declarada). Perpétua, trabalhos forçados, banimento e cruéis são vedações absolutas.",
      regraMental: "Só a pena de morte tem exceção; as outras quatro, não."
    },
    comentario: {
      resolucao: "CERTO. O art. 5º, XLVII, veda penas de morte (salvo em caso de guerra declarada), de caráter perpétuo, de trabalhos forçados, de banimento e cruéis. Como o enunciado não inclui a pena de morte, a afirmação de ausência de ressalva está correta quanto às quatro vedações mencionadas.",
      fundamento: "CF, art. 5º, XLVII, alíneas 'a' a 'e'.",
      macete: "Exceção só para pena de morte em guerra declarada.",
      erroComum: "Generalizar a ressalva da pena de morte às demais penas.",
      comoBancaPensa: "Recorta o rol de modo que o termo absoluto fique correto."
    }
  },
  {
    id: "ES-134", disciplina: "Estatística", assunto: "Distribuição normal", subassunto: "Simetria",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Toda distribuição normal é simétrica em relação à sua média, qualquer que seja o valor do desvio padrão.",
    gabarito: "C", pegadinha: "generalizacao", palavraChave: "Toda ... qualquer que seja",
    cognitivo: {
      motivo: "Reforçar propriedade universal da normal.",
      mede: "Distribuição normal — simetria.",
      pegadinhaDesc: "Termos absolutos em propriedade que de fato vale para toda a família normal.",
      ondeErra: "Confunde com distribuições assimétricas e rejeita o 'toda'.",
      palavraCritica: "Toda ... qualquer",
      tecnica: "O desvio padrão altera a dispersão (largura do sino), nunca a simetria. Assimetria da normal é sempre zero.",
      regraMental: "Normal é sempre simétrica; σ muda a largura, não a forma."
    },
    comentario: {
      resolucao: "CERTO. A simetria em torno da média é característica de toda a família normal; o desvio padrão determina a dispersão (curva mais achatada ou mais estreita), mas o coeficiente de assimetria permanece zero.",
      fundamento: "Distribuição normal — propriedades.",
      macete: "σ muda a largura, não a simetria.",
      erroComum: "Rejeitar por causa do 'toda'.",
      comoBancaPensa: "Termos absolutos aplicados a propriedade universal."
    }
  },
  {
    id: "ES-135", disciplina: "Estatística", assunto: "Amostragem", subassunto: "Definição de probabilística",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "Em toda amostragem probabilística, todos os elementos da população têm probabilidade conhecida e diferente de zero de serem selecionados.",
    gabarito: "C", pegadinha: "generalizacao", palavraChave: "toda ... todos os elementos",
    cognitivo: {
      motivo: "Fixar o critério definidor, que por ser definição não admite exceção.",
      mede: "Amostragem probabilística.",
      pegadinhaDesc: "Duplo termo totalizante numa afirmação que é a própria definição do conceito.",
      ondeErra: "Supõe exceção onde se está diante de uma definição.",
      palavraCritica: "toda ... todos",
      tecnica: "Definição não comporta contraexemplo: se algum elemento tivesse probabilidade nula ou desconhecida, a amostragem deixaria de ser probabilística.",
      regraMental: "Probabilística = todos com chance conhecida e positiva, por definição."
    },
    comentario: {
      resolucao: "CERTO. É a própria definição de amostragem probabilística: probabilidade conhecida e não nula de seleção para todos os elementos, condição que viabiliza o cálculo do erro amostral. Se algum elemento não pudesse ser sorteado, tratar-se-ia de amostragem não probabilística.",
      fundamento: "Amostragem probabilística — definição.",
      macete: "É definição, não regra com exceção.",
      erroComum: "Buscar contraexemplo para uma definição.",
      comoBancaPensa: "Usa termo absoluto em enunciado que é definição conceitual."
    }
  },

  /* ============ TROCA-CONCEITO — o rótulo bate com a definição ============ */
  {
    id: "DP-102", disciplina: "Direito Penal", assunto: "Teoria do crime", subassunto: "Dolo eventual",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.9,
    enunciado: "Configura dolo eventual a conduta do agente que, prevendo o resultado como possível, assume o risco de produzi-lo.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "assume o risco de produzi-lo",
    cognitivo: {
      motivo: "Fixar a definição legal de dolo eventual.",
      mede: "CP, art. 18, I, segunda parte.",
      pegadinhaDesc: "Rótulo e definição corretamente pareados — o candidato treinado só em inversões desconfia.",
      ondeErra: "Confunde com culpa consciente, em que o agente acredita poder evitar o resultado.",
      palavraCritica: "assume o risco",
      tecnica: "Dolo eventual: prevê e ACEITA ('foda-se'). Culpa consciente: prevê e CONFIA que evita. A diferença está na aceitação.",
      regraMental: "Dolo eventual assume o risco; culpa consciente confia que evita."
    },
    comentario: {
      resolucao: "CERTO. O art. 18, I, do CP define como doloso o crime quando o agente quis o resultado (dolo direto) ou assumiu o risco de produzi-lo (dolo eventual). A assunção do risco é exatamente o elemento distintivo.",
      fundamento: "CP, art. 18, I.",
      macete: "Assumiu o risco = dolo eventual.",
      erroComum: "Trocar com culpa consciente.",
      comoBancaPensa: "Apresenta o par correto para separar quem sabe de quem só decorou 'item de conceito é errado'."
    }
  },
  {
    id: "DP-103", disciplina: "Direito Penal", assunto: "Teoria do crime", subassunto: "Culpa consciente",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.85,
    enunciado: "Na culpa consciente, o agente prevê o resultado, mas acredita sinceramente que ele não ocorrerá, confiando em sua habilidade para evitá-lo.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "acredita sinceramente que ele não ocorrerá",
    cognitivo: {
      motivo: "Fixar a definição de culpa consciente em contraste com o dolo eventual.",
      mede: "Teoria do crime — elemento subjetivo.",
      pegadinhaDesc: "Definição corretamente atribuída ao rótulo.",
      ondeErra: "Inverte com dolo eventual.",
      palavraCritica: "acredita sinceramente ... evitá-lo",
      tecnica: "Ambas preveem o resultado; a diferença é a atitude interna — aceitar (dolo eventual) ou repelir confiando na perícia (culpa consciente).",
      regraMental: "Consciente: previu, mas confiou que não aconteceria."
    },
    comentario: {
      resolucao: "CERTO. Culpa consciente é a previsão do resultado acompanhada da sincera convicção de que ele não se produzirá, geralmente por confiança nas próprias habilidades. Distingue-se do dolo eventual, no qual há indiferença ou aceitação do resultado.",
      fundamento: "CP, art. 18, II; teoria do crime.",
      macete: "Previu mas confiou que evitaria.",
      erroComum: "Confundir com dolo eventual.",
      comoBancaPensa: "Par correto que exige domínio real da distinção."
    }
  },
  {
    id: "DP-104", disciplina: "Direito Penal", assunto: "Crimes contra a Administração", subassunto: "Concussão",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.85,
    enunciado: "Pratica concussão o funcionário público que exige, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "exige ... vantagem indevida",
    cognitivo: {
      motivo: "Separar concussão de corrupção passiva pelo verbo nuclear.",
      mede: "CP, art. 316.",
      pegadinhaDesc: "Definição corretamente atribuída; a banca costuma trocar 'exigir' por 'solicitar'.",
      ondeErra: "Confunde com corrupção passiva, cujo núcleo é solicitar/receber/aceitar promessa.",
      palavraCritica: "exige",
      tecnica: "Concussão: EXIGIR (há imposição, temor). Corrupção passiva: SOLICITAR, RECEBER ou ACEITAR PROMESSA (há acordo).",
      regraMental: "Exigiu = concussão. Pediu ou aceitou = corrupção passiva."
    },
    comentario: {
      resolucao: "CERTO. O art. 316 do CP tipifica a concussão exatamente nesses termos, tendo como núcleo o verbo EXIGIR. A exigência traz consigo a ideia de imposição, o que a diferencia da corrupção passiva (art. 317), em que o funcionário solicita, recebe ou aceita promessa de vantagem.",
      fundamento: "CP, art. 316; art. 317.",
      macete: "Concussão exige; corrupção passiva pede ou aceita.",
      erroComum: "Trocar os verbos nucleares dos dois tipos.",
      comoBancaPensa: "Traz a definição correta para punir a leitura automática."
    }
  },
  {
    id: "PP-087", disciplina: "Processo Penal", assunto: "Ação penal", subassunto: "Denúncia e queixa",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "A denúncia é a peça inicial da ação penal pública, privativa do Ministério Público, ao passo que a queixa-crime inaugura a ação penal privada, sendo oferecida pelo ofendido ou por seu representante legal.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "denúncia ... Ministério Público ... queixa-crime ... ofendido",
    cognitivo: {
      motivo: "Fixar o pareamento entre peça e titular da ação.",
      mede: "CPP — ação penal.",
      pegadinhaDesc: "Ambos os pares corretos; a banca costuma invertê-los.",
      ondeErra: "Troca denúncia por queixa ao ler rápido.",
      palavraCritica: "denúncia ... queixa-crime",
      tecnica: "Denúncia começa com D, de 'do Ministério Público' (pública). Queixa começa com Q, de 'quem sofreu' (privada).",
      regraMental: "Denúncia = MP. Queixa = ofendido."
    },
    comentario: {
      resolucao: "CERTO. A ação penal pública é promovida por denúncia do Ministério Público (CF, art. 129, I), enquanto a ação penal privada se inicia por queixa-crime do ofendido ou de seu representante legal.",
      fundamento: "CF, art. 129, I; CPP, arts. 24 e 30.",
      macete: "Denúncia = MP; queixa = ofendido.",
      erroComum: "Inverter as peças.",
      comoBancaPensa: "Par correto que separa quem sabe de quem chuta pelo padrão."
    }
  },
  {
    id: "PP-088", disciplina: "Processo Penal", assunto: "Prisões cautelares", subassunto: "Temporária × preventiva",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "A prisão temporária somente é cabível durante a fase de investigação criminal, ao passo que a prisão preventiva pode ser decretada tanto na investigação quanto no curso da ação penal.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "temporária somente ... investigação ... preventiva ... também no curso da ação",
    cognitivo: {
      motivo: "Fixar o momento processual de cada prisão cautelar.",
      mede: "Lei 7.960/1989; CPP, art. 311.",
      pegadinhaDesc: "Ambas as delimitações corretas.",
      ondeErra: "Supõe que a temporária também cabe durante o processo.",
      palavraCritica: "somente ... investigação",
      tecnica: "Temporária é exclusiva do inquérito — o próprio nome remete à fase provisória de apuração. Preventiva acompanha todo o feito.",
      regraMental: "Temporária: só no inquérito. Preventiva: inquérito e processo."
    },
    comentario: {
      resolucao: "CERTO. A prisão temporária, regida pela Lei 7.960/1989, é cabível apenas durante a investigação; oferecida a denúncia, não subsiste. Já a preventiva pode ser decretada em qualquer fase da investigação ou do processo penal, nos termos do art. 311 do CPP.",
      fundamento: "Lei 7.960/1989, art. 1º; CPP, art. 311.",
      macete: "Temporária morre com a denúncia.",
      erroComum: "Estender a temporária ao curso da ação penal.",
      comoBancaPensa: "Apresenta a distinção correta para punir a resposta reflexa."
    }
  },
  {
    id: "DC-108", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais", subassunto: "Habeas corpus × mandado de segurança",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.9,
    enunciado: "O habeas corpus tutela a liberdade de locomoção, enquanto o mandado de segurança protege direito líquido e certo não amparado por habeas corpus ou habeas data.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "liberdade de locomoção ... direito líquido e certo não amparado",
    cognitivo: {
      motivo: "Fixar o objeto de cada remédio constitucional.",
      mede: "CF, art. 5º, LXVIII e LXIX.",
      pegadinhaDesc: "Pares corretos, inclusive a cláusula de residualidade do MS.",
      ondeErra: "Esquece que o MS é residual em relação ao HC e ao HD.",
      palavraCritica: "não amparado por habeas corpus ou habeas data",
      tecnica: "O MS é residual: só cabe onde HC e HD não alcançam. Se o direito é a locomoção, o remédio é HC.",
      regraMental: "HC: ir e vir. MS: o resto líquido e certo."
    },
    comentario: {
      resolucao: "CERTO. O art. 5º, LXVIII, destina o habeas corpus à proteção da liberdade de locomoção; o inciso LXIX confere o mandado de segurança para proteger direito líquido e certo não amparado por habeas corpus ou habeas data — daí sua natureza residual.",
      fundamento: "CF, art. 5º, LXVIII e LXIX.",
      macete: "MS é o remédio residual.",
      erroComum: "Ignorar a residualidade do MS.",
      comoBancaPensa: "Par correto com a cláusula que costuma ser suprimida."
    }
  },
  {
    id: "CC-032", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Ataques", subassunto: "Phishing",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "O phishing caracteriza-se pelo emprego de engenharia social para induzir a vítima a fornecer voluntariamente dados sensíveis, como credenciais de acesso, geralmente por meio de mensagens que simulam comunicação de instituição legítima.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "engenharia social ... fornecer voluntariamente",
    cognitivo: {
      motivo: "Fixar o conceito de phishing pelo vetor humano.",
      mede: "Segurança digital — ataques.",
      pegadinhaDesc: "Definição correta; a banca costuma descrever pharming ou malware sob o rótulo phishing.",
      ondeErra: "Confunde com pharming, que redireciona a vítima manipulando DNS, sem depender de engano textual.",
      palavraCritica: "engenharia social ... voluntariamente",
      tecnica: "Phishing engana a PESSOA; pharming engana a MÁQUINA (redirecionamento por DNS).",
      regraMental: "Phishing: isca para a pessoa. Pharming: desvio da rota."
    },
    comentario: {
      resolucao: "CERTO. O phishing explora o fator humano: a vítima é induzida por mensagem fraudulenta a entregar credenciais ou dados sensíveis. Distingue-se do pharming, que redireciona o tráfego por manipulação de DNS ou do arquivo hosts, sem exigir ação enganada do usuário sobre um link.",
      fundamento: "Segurança da informação — engenharia social.",
      macete: "Phishing engana a pessoa; pharming, a rota.",
      erroComum: "Trocar phishing por pharming.",
      comoBancaPensa: "Definição correta para separar quem domina a taxonomia de ataques."
    }
  },
  {
    id: "CC-033", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Ataques", subassunto: "Ransomware",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "O ransomware é o código malicioso que restringe o acesso aos dados da vítima, normalmente por cifragem, exigindo pagamento de resgate para a restauração do acesso.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "restringe o acesso ... cifragem ... resgate",
    cognitivo: {
      motivo: "Fixar o conceito de ransomware.",
      mede: "Segurança digital — malware.",
      pegadinhaDesc: "Definição correta; costuma ser trocada com spyware ou worm.",
      ondeErra: "Confunde com spyware, que espiona sem bloquear.",
      palavraCritica: "exigindo pagamento de resgate",
      tecnica: "Ransom = resgate. O traço definidor é a extorsão mediante bloqueio, não o espionar ou o propagar-se.",
      regraMental: "Ransomware: sequestra os dados e cobra resgate."
    },
    comentario: {
      resolucao: "CERTO. O ransomware cifra ou bloqueia o acesso aos dados e condiciona a restauração ao pagamento de resgate, geralmente em criptoativos. A melhor defesa é o backup íntegro e isolado, que permite restaurar sem negociar.",
      fundamento: "Segurança da informação — códigos maliciosos.",
      macete: "Ransom = resgate.",
      erroComum: "Confundir com spyware.",
      comoBancaPensa: "Conceito correto para testar a taxonomia de malware."
    }
  },
  {
    id: "CT-033", disciplina: "Contabilidade e Análise Financeira", assunto: "Despesa pública", subassunto: "Estágios da despesa",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.85,
    enunciado: "A liquidação da despesa pública consiste na verificação do direito adquirido pelo credor, tendo por base os títulos e documentos comprobatórios do respectivo crédito.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "liquidação ... verificação do direito adquirido",
    cognitivo: {
      motivo: "Fixar a definição de liquidação no lugar certo.",
      mede: "Lei 4.320/1964, art. 63.",
      pegadinhaDesc: "Definição corretamente atribuída ao estágio a que pertence.",
      ondeErra: "Atribui essa definição ao empenho.",
      palavraCritica: "liquidação ... verificação",
      tecnica: "Empenho CRIA a obrigação; liquidação VERIFICA o direito do credor; pagamento QUITA. A ordem é empenho → liquidação → pagamento.",
      regraMental: "Empenha, liquida, paga."
    },
    comentario: {
      resolucao: "CERTO. O art. 63 da Lei 4.320/1964 define a liquidação exatamente como a verificação do direito adquirido pelo credor com base nos títulos e documentos comprobatórios, apurando origem, objeto, valor e a quem se deve pagar.",
      fundamento: "Lei 4.320/1964, art. 63; art. 58.",
      macete: "Liquidação confere o direito do credor.",
      erroComum: "Atribuir a definição ao empenho.",
      comoBancaPensa: "Traz o par correto depois de muitas questões com a troca."
    }
  },
  {
    id: "CT-034", disciplina: "Contabilidade e Análise Financeira", assunto: "Receita pública", subassunto: "Receita de capital",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "As receitas provenientes de operações de crédito classificam-se como receitas de capital, por decorrerem da constituição de dívidas.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "operações de crédito ... receitas de capital",
    cognitivo: {
      motivo: "Fixar a classificação econômica correta da operação de crédito.",
      mede: "Lei 4.320/1964, art. 11, §2º.",
      pegadinhaDesc: "Classificação correta, com a justificativa que a sustenta.",
      ondeErra: "Classifica como corrente por haver ingresso de caixa.",
      palavraCritica: "constituição de dívidas",
      tecnica: "O critério não é o ingresso, é a origem: dívida contraída gera receita de capital, ainda que entre no caixa como qualquer outra.",
      regraMental: "Empréstimo é capital, não renda."
    },
    comentario: {
      resolucao: "CERTO. O art. 11, §2º, da Lei 4.320/1964 classifica como receitas de capital as provenientes da constituição de dívidas, o que abrange as operações de crédito. Não são receitas correntes, apesar do ingresso financeiro.",
      fundamento: "Lei 4.320/1964, art. 11, §§1º e 2º.",
      macete: "Constituiu dívida = receita de capital.",
      erroComum: "Classificar como corrente pelo ingresso em caixa.",
      comoBancaPensa: "Classificação correta acompanhada do fundamento."
    }
  },
  {
    id: "PT-033", disciplina: "Língua Portuguesa", assunto: "Semântica", subassunto: "Denotação e conotação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "O sentido denotativo corresponde ao significado literal e objetivo da palavra, ao passo que o sentido conotativo decorre de associações subjetivas e figuradas.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "denotativo ... literal ... conotativo ... figuradas",
    cognitivo: {
      motivo: "Fixar o pareamento entre os dois sentidos.",
      mede: "Semântica — denotação e conotação.",
      pegadinhaDesc: "Definições corretamente atribuídas.",
      ondeErra: "Inverte os dois termos por semelhança sonora.",
      palavraCritica: "denotativo ... conotativo",
      tecnica: "Denotação tem D de Dicionário (sentido literal). Conotação tem C de Criativo (sentido figurado).",
      regraMental: "Denota = dicionário. Conota = criação."
    },
    comentario: {
      resolucao: "CERTO. O sentido denotativo é o literal, dicionarizado e objetivo; o conotativo é o figurado, construído por associações subjetivas e dependente do contexto.",
      fundamento: "Semântica — denotação e conotação.",
      macete: "Denota = dicionário.",
      erroComum: "Inverter os conceitos.",
      comoBancaPensa: "Par correto entre termos foneticamente próximos."
    }
  },
  {
    id: "PT-034", disciplina: "Língua Portuguesa", assunto: "Coesão e coerência", subassunto: "Distinção",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.85,
    enunciado: "A coesão diz respeito à articulação formal entre elementos textuais, por meio de conectivos e retomadas, enquanto a coerência refere-se à unidade lógica de sentido do conjunto.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "coesão ... articulação formal ... coerência ... unidade lógica de sentido",
    cognitivo: {
      motivo: "Fixar a distinção entre os dois mecanismos textuais.",
      mede: "Linguística textual — coesão e coerência.",
      pegadinhaDesc: "Definições corretamente pareadas.",
      ondeErra: "Inverte os conceitos ou os trata como sinônimos.",
      palavraCritica: "formal ... lógica de sentido",
      tecnica: "Coesão é da SUPERFÍCIE (conectivos, pronomes, elipses). Coerência é do SENTIDO. Um texto pode ser coeso e incoerente.",
      regraMental: "Coesão liga palavras; coerência liga ideias."
    },
    comentario: {
      resolucao: "CERTO. A coesão opera na superfície textual, pelos mecanismos de referência, substituição, elipse e conexão; a coerência situa-se no plano do sentido, garantindo unidade lógica ao texto. São independentes: há textos coesos porém incoerentes.",
      fundamento: "Linguística textual — coesão e coerência.",
      macete: "Coesão = forma; coerência = sentido.",
      erroComum: "Tratar como sinônimos.",
      comoBancaPensa: "Par correto entre conceitos que o candidato costuma fundir."
    }
  },
  {
    id: "RL-040", disciplina: "Raciocínio Lógico-Matemático", assunto: "Lógica proposicional", subassunto: "Proposição × sentença aberta",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "Uma proposição é a sentença declarativa à qual se pode atribuir um único valor lógico, verdadeiro ou falso, ao passo que a sentença aberta, por conter variável, não admite valoração enquanto a variável não for determinada.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "único valor lógico ... sentença aberta ... variável",
    cognitivo: {
      motivo: "Fixar o critério que separa proposição de sentença aberta.",
      mede: "Lógica proposicional — conceitos iniciais.",
      pegadinhaDesc: "Ambas as definições corretas e bem pareadas.",
      ondeErra: "Classifica sentença aberta como proposição.",
      palavraCritica: "não admite valoração enquanto a variável não for determinada",
      tecnica: "Teste prático: dá para dizer se é V ou F agora? Se depende de uma incógnita, é sentença aberta. Exclamações, perguntas e ordens também não são proposições.",
      regraMental: "Proposição tem valor lógico definido; sentença aberta espera a variável."
    },
    comentario: {
      resolucao: "CERTO. Proposição é a sentença declarativa que admite exatamente um valor lógico (V ou F), pelos princípios da não contradição e do terceiro excluído. 'x + 2 = 5' é sentença aberta: só se torna proposição quando x é determinado.",
      fundamento: "Lógica proposicional — proposição e sentença aberta.",
      macete: "Tem variável indefinida? Não é proposição.",
      erroComum: "Tratar sentença aberta como proposição.",
      comoBancaPensa: "Par correto para separar quem entendeu o critério de valoração."
    }
  },
  {
    id: "ES-136", disciplina: "Estatística", assunto: "Medidas de tendência central", subassunto: "Mediana",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "A mediana é o valor que ocupa a posição central de um conjunto de dados ordenados, sendo menos sensível a valores extremos do que a média aritmética.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "posição central ... menos sensível a valores extremos",
    cognitivo: {
      motivo: "Fixar a definição de mediana e sua robustez.",
      mede: "Medidas de tendência central.",
      pegadinhaDesc: "Definição e propriedade corretamente atribuídas.",
      ondeErra: "Confunde com moda ou atribui a robustez à média.",
      palavraCritica: "menos sensível a valores extremos",
      tecnica: "A mediana depende da POSIÇÃO, não dos valores; por isso outlier não a desloca. A média usa todos os valores e é arrastada por extremos.",
      regraMental: "Outlier mexe na média, não na mediana."
    },
    comentario: {
      resolucao: "CERTO. A mediana é o valor central dos dados ordenados e, por depender apenas da posição, resiste a valores extremos — motivo pelo qual é preferida à média em distribuições assimétricas, como as de renda.",
      fundamento: "Estatística descritiva — medidas de tendência central.",
      macete: "Mediana é robusta a outlier.",
      erroComum: "Atribuir a robustez à média.",
      comoBancaPensa: "Definição correta acompanhada da propriedade que a justifica."
    }
  },
  {
    id: "ES-137", disciplina: "Estatística", assunto: "Correlação e regressão", subassunto: "Distinção",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "A correlação mede a intensidade e o sentido da associação entre duas variáveis, ao passo que a regressão estabelece um modelo funcional que permite estimar valores de uma variável a partir da outra.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "correlação mede ... regressão estabelece um modelo",
    cognitivo: {
      motivo: "Separar as duas técnicas pelo objetivo.",
      mede: "Correlação e regressão.",
      pegadinhaDesc: "Objetivos corretamente atribuídos.",
      ondeErra: "Usa os termos como sinônimos.",
      palavraCritica: "mede ... estabelece um modelo",
      tecnica: "Correlação responde 'quão associadas?'; regressão responde 'quanto muda Y se X mudar?'. Só a regressão prevê.",
      regraMental: "Correlação mede; regressão prevê."
    },
    comentario: {
      resolucao: "CERTO. A correlação quantifica intensidade e sentido da associação (r entre −1 e 1); a regressão ajusta um modelo (na forma simples, uma reta) que permite estimar a variável dependente a partir da explicativa.",
      fundamento: "Correlação e regressão linear.",
      macete: "Correlação mede, regressão prevê.",
      erroComum: "Tratar como sinônimos.",
      comoBancaPensa: "Par correto entre técnicas complementares."
    }
  },
  {
    id: "DA-073", disciplina: "Direito Administrativo", assunto: "Atos administrativos", subassunto: "Anulação × revogação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.9,
    enunciado: "A anulação do ato administrativo funda-se em vício de legalidade e opera, em regra, efeitos retroativos, ao passo que a revogação decorre de juízo de conveniência e oportunidade e produz efeitos a partir da decisão.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "anulação ... legalidade ... retroativos ... revogação ... conveniência",
    cognitivo: {
      motivo: "Fixar fundamento e efeitos de cada forma de desfazimento.",
      mede: "Atos administrativos — extinção; Súmulas 346 e 473 do STF.",
      pegadinhaDesc: "Quatro elementos corretamente pareados: fundamento e efeito de cada instituto.",
      ondeErra: "Inverte os efeitos, atribuindo retroatividade à revogação.",
      palavraCritica: "retroativos ... a partir da decisão",
      tecnica: "Ato ilegal nunca deveria ter existido: anulação opera ex tunc. Ato legal apenas deixou de convir: revogação opera ex nunc.",
      regraMental: "Anula ilegal (ex tunc); revoga inconveniente (ex nunc)."
    },
    comentario: {
      resolucao: "CERTO. A anulação pressupõe vício de legalidade e, como o ato não deveria ter produzido efeitos, opera ex tunc (retroativamente), ressalvados os direitos de terceiros de boa-fé. A revogação recai sobre ato válido que se tornou inconveniente ou inoportuno, produzindo efeitos ex nunc.",
      fundamento: "Súmulas 346 e 473 do STF; Lei 9.784/1999, arts. 53 e 54.",
      macete: "Anulação: ex tunc. Revogação: ex nunc.",
      erroComum: "Inverter os efeitos temporais.",
      comoBancaPensa: "Reúne quatro elementos corretos para punir a resposta automática."
    }
  },
  {
    id: "LE-171", disciplina: "Legislação Especial", assunto: "Lavagem de dinheiro", subassunto: "Fases",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.85,
    enunciado: "No processo de lavagem de dinheiro, a colocação corresponde à introdução dos valores ilícitos no sistema financeiro, a ocultação visa a afastar os recursos de sua origem por meio de sucessivas transações, e a integração consiste no retorno dos valores à economia com aparência lícita.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "colocação ... ocultação ... integração",
    cognitivo: {
      motivo: "Fixar as três fases na ordem e com o conteúdo corretos.",
      mede: "Lei 9.613/1998 — fases da lavagem.",
      pegadinhaDesc: "As três fases corretamente nomeadas, descritas e ordenadas.",
      ondeErra: "Inverte ocultação e integração.",
      palavraCritica: "integração ... aparência lícita",
      tecnica: "A sequência segue a lógica do dinheiro: entra (colocação), some do rastro (ocultação), volta limpo (integração).",
      regraMental: "Coloca, oculta, integra."
    },
    comentario: {
      resolucao: "CERTO. As três fases clássicas são exatamente essas: placement (colocação), layering (ocultação ou dissimulação) e integration (integração), quando os valores retornam à economia formal com aparência de licitude.",
      fundamento: "Lei 9.613/1998; modelo GAFI/FATF.",
      macete: "Coloca, oculta, integra.",
      erroComum: "Inverter ocultação e integração.",
      comoBancaPensa: "Sequência correta para punir quem chuta pelo padrão do rótulo."
    }
  },
  {
    id: "LE-172", disciplina: "Legislação Especial", assunto: "Organizações criminosas", subassunto: "Colaboração premiada",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "A colaboração premiada é meio de obtenção de prova, e nenhuma sentença condenatória poderá ser proferida com fundamento apenas nas declarações do colaborador.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "meio de obtenção de prova ... nenhuma sentença ... apenas nas declarações",
    cognitivo: {
      motivo: "Fixar a natureza da colaboração e sua limitação probatória.",
      mede: "Lei 12.850/2013, art. 3º-A e art. 4º, §16.",
      pegadinhaDesc: "Natureza jurídica e vedação corretamente afirmadas.",
      ondeErra: "Classifica a colaboração como meio de prova, e não de obtenção de prova.",
      palavraCritica: "meio de obtenção de prova ... nenhuma sentença",
      tecnica: "A lei é expressa: negócio jurídico processual e MEIO DE OBTENÇÃO de prova. As declarações precisam de corroboração externa.",
      regraMental: "Colaboração sozinha não condena."
    },
    comentario: {
      resolucao: "CERTO. O art. 3º-A da Lei 12.850/2013 define a colaboração premiada como negócio jurídico processual e meio de obtenção de prova; o art. 4º, §16, veda que sentença condenatória seja proferida com fundamento apenas nas declarações do colaborador, exigindo elementos de corroboração.",
      fundamento: "Lei 12.850/2013, art. 3º-A e art. 4º, §16.",
      macete: "Colaboração precisa de corroboração.",
      erroComum: "Chamá-la de meio de prova.",
      comoBancaPensa: "Dois acertos técnicos num item que o candidato tende a rejeitar."
    }
  },
  {
    id: "DP-105", disciplina: "Direito Penal", assunto: "Crimes contra o patrimônio", subassunto: "Roubo × extorsão",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "No roubo, a subtração é praticada diretamente pelo agente mediante violência ou grave ameaça; na extorsão, a vítima é constrangida a fazer, tolerar que se faça ou deixar de fazer alguma coisa, sendo imprescindível sua colaboração.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "subtração ... diretamente ... constrangida ... colaboração",
    cognitivo: {
      motivo: "Fixar o critério que distingue roubo de extorsão.",
      mede: "CP, arts. 157 e 158.",
      pegadinhaDesc: "Distinção corretamente formulada pelo critério da imprescindibilidade da conduta da vítima.",
      ondeErra: "Trata os dois como equivalentes por ambos envolverem violência ou grave ameaça.",
      palavraCritica: "imprescindível sua colaboração",
      tecnica: "Pergunte: o agente conseguiria sozinho? Se sim, roubo. Se depende de um ato da vítima (entregar a senha, assinar), extorsão.",
      regraMental: "Roubo o agente tira; extorsão a vítima entrega."
    },
    comentario: {
      resolucao: "CERTO. No roubo (art. 157), o agente subtrai a coisa por ato próprio, sendo dispensável a colaboração da vítima. Na extorsão (art. 158), o comportamento da vítima é imprescindível: ela é constrangida a fazer, tolerar que se faça ou deixar de fazer algo. Esse é o critério consagrado de distinção.",
      fundamento: "CP, arts. 157 e 158.",
      macete: "Roubo: o agente tira. Extorsão: a vítima entrega.",
      erroComum: "Igualar os tipos pela presença de violência.",
      comoBancaPensa: "Distinção correta para punir a resposta reflexa a item de conceito."
    }
  },
  {
    id: "PP-089", disciplina: "Processo Penal", assunto: "Prisão em flagrante", subassunto: "Flagrante impróprio",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.85,
    enunciado: "Configura flagrante impróprio a situação em que o agente é perseguido, logo após a prática da infração, em situação que faça presumir ser ele o autor.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "perseguido, logo após",
    cognitivo: {
      motivo: "Fixar a espécie de flagrante pela expressão temporal.",
      mede: "CPP, art. 302, III.",
      pegadinhaDesc: "Espécie corretamente identificada; a banca costuma trocar as expressões temporais entre os incisos.",
      ondeErra: "Confunde com o flagrante presumido, marcado por 'logo depois' e pela posse de objetos.",
      palavraCritica: "perseguido, logo após",
      tecnica: "Inciso III (impróprio): PERSEGUIÇÃO, logo APÓS. Inciso IV (presumido): ENCONTRADO, logo DEPOIS, com instrumentos ou objetos.",
      regraMental: "Perseguido = impróprio. Encontrado com a coisa = presumido."
    },
    comentario: {
      resolucao: "CERTO. O art. 302, III, do CPP caracteriza o flagrante impróprio (ou quase-flagrante) quando o agente é perseguido, logo após, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor da infração. O presumido é o do inciso IV.",
      fundamento: "CPP, art. 302, III e IV.",
      macete: "Perseguição = impróprio.",
      erroComum: "Trocar com o flagrante presumido.",
      comoBancaPensa: "Atribui corretamente a espécie, depois de muitas questões com a troca."
    }
  },
  {
    id: "DH-056", disciplina: "Direitos Humanos", assunto: "Teoria geral", subassunto: "Gerações de direitos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "Os direitos de primeira dimensão correspondem aos direitos civis e políticos, ligados à liberdade e exigindo abstenção estatal, enquanto os de segunda dimensão abrangem os direitos sociais, econômicos e culturais, que demandam prestações positivas do Estado.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "primeira ... abstenção ... segunda ... prestações positivas",
    cognitivo: {
      motivo: "Fixar o pareamento entre dimensão, conteúdo e postura estatal.",
      mede: "Teoria dos direitos humanos — dimensões.",
      pegadinhaDesc: "Três elementos corretamente pareados em cada dimensão.",
      ondeErra: "Inverte a exigência de abstenção e prestação.",
      palavraCritica: "abstenção ... prestações positivas",
      tecnica: "Siga o lema francês: 1ª liberdade (Estado se abstém), 2ª igualdade (Estado age), 3ª fraternidade (titularidade coletiva).",
      regraMental: "Liberdade, igualdade, fraternidade — nessa ordem."
    },
    comentario: {
      resolucao: "CERTO. Os direitos de primeira dimensão são os civis e políticos, de matriz liberal, que exigem prestação negativa do Estado; os de segunda dimensão são os sociais, econômicos e culturais, que reclamam atuação positiva. Os de terceira dimensão, ligados à fraternidade, têm titularidade difusa.",
      fundamento: "Teoria das dimensões dos direitos fundamentais.",
      macete: "Liberdade, igualdade, fraternidade.",
      erroComum: "Inverter abstenção e prestação.",
      comoBancaPensa: "Pareamento correto que exige domínio real da classificação."
    }
  },
  {
    id: "TI-106", disciplina: "TI e Segurança Cibernética", assunto: "Segurança da informação", subassunto: "Pilares",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "A confidencialidade assegura que a informação seja acessível apenas a quem tem autorização, a integridade garante que ela não seja alterada indevidamente e a disponibilidade assegura o acesso quando necessário.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "confidencialidade ... integridade ... disponibilidade",
    cognitivo: {
      motivo: "Fixar os três pilares corretamente pareados.",
      mede: "Segurança da informação — tríade CID.",
      pegadinhaDesc: "Os três conceitos e suas definições corretamente associados.",
      ondeErra: "Troca integridade com confidencialidade.",
      palavraCritica: "não seja alterada indevidamente",
      tecnica: "Confidencialidade é sobre QUEM VÊ; integridade é sobre NÃO MUDAR; disponibilidade é sobre ESTAR ACESSÍVEL.",
      regraMental: "CID: quem vê, não muda, está no ar."
    },
    comentario: {
      resolucao: "CERTO. São os três pilares clássicos da segurança da informação (tríade CID): confidencialidade (acesso restrito a autorizados), integridade (não alteração indevida, preservando exatidão) e disponibilidade (acesso garantido quando necessário).",
      fundamento: "Segurança da informação — tríade CID (ISO/IEC 27001).",
      macete: "CID: quem vê, não muda, está no ar.",
      erroComum: "Trocar integridade por confidencialidade.",
      comoBancaPensa: "Definições corretas para punir a rejeição automática."
    }
  },
  {
    id: "DC-109", disciplina: "Direito Constitucional", assunto: "Organização do Estado", subassunto: "Segurança pública",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.9,
    enunciado: "Às polícias civis incumbem as funções de polícia judiciária e a apuração de infrações penais, ao passo que às polícias militares cabem a polícia ostensiva e a preservação da ordem pública.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "polícia judiciária ... polícia ostensiva",
    cognitivo: {
      motivo: "Fixar a repartição constitucional de atribuições.",
      mede: "CF, art. 144, §§ 4º e 5º.",
      pegadinhaDesc: "Atribuições corretamente distribuídas entre as duas instituições.",
      ondeErra: "Inverte ostensiva e judiciária.",
      palavraCritica: "judiciária ... ostensiva",
      tecnica: "Civil apura DEPOIS do crime (judiciária); militar atua ANTES, visível na rua (ostensiva e preventiva).",
      regraMental: "Civil apura; militar ostenta."
    },
    comentario: {
      resolucao: "CERTO. O art. 144, §4º, atribui às polícias civis, dirigidas por delegados de carreira, as funções de polícia judiciária e a apuração de infrações penais, exceto as militares; o §5º confere às polícias militares a polícia ostensiva e a preservação da ordem pública.",
      fundamento: "CF, art. 144, §§ 4º e 5º.",
      macete: "Civil apura; militar ostenta.",
      erroComum: "Inverter as atribuições.",
      comoBancaPensa: "Repartição correta num item que o candidato tende a rejeitar por hábito."
    }
  },

  /* ============ EXIGÊNCIA-INEXISTENTE — o requisito é real ============ */
  {
    id: "DP-106", disciplina: "Direito Penal", assunto: "Arrependimento posterior", subassunto: "Requisitos cumulativos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "O arrependimento posterior exige que o crime tenha sido cometido sem violência ou grave ameaça à pessoa e que a reparação do dano ou a restituição da coisa ocorra por ato voluntário do agente até o recebimento da denúncia ou da queixa.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "sem violência ou grave ameaça ... até o recebimento da denúncia",
    cognitivo: {
      motivo: "Mostrar que os requisitos enunciados existem mesmo na lei.",
      mede: "CP, art. 16.",
      pegadinhaDesc: "O acúmulo de condições aciona a desconfiança, mas todas constam do dispositivo.",
      ondeErra: "Marca ERRADO por reflexo diante de vários 'desde que'.",
      palavraCritica: "exige que ... e que",
      tecnica: "Nem todo requisito enunciado é invenção. Aqui são três, todos legais: crime sem violência, ato voluntário e marco no recebimento da peça.",
      regraMental: "Arrependimento posterior: sem violência, voluntário, até o recebimento."
    },
    comentario: {
      resolucao: "CERTO. O art. 16 do CP condiciona a redução de um a dois terços a esses requisitos cumulativos: crime cometido sem violência ou grave ameaça à pessoa, reparação do dano ou restituição da coisa, ato voluntário do agente e realização até o recebimento da denúncia ou da queixa.",
      fundamento: "CP, art. 16.",
      macete: "Sem violência + voluntário + até o recebimento.",
      erroComum: "Rejeitar o item pelo número de condições.",
      comoBancaPensa: "Empilha requisitos verdadeiros para explorar a desconfiança treinada."
    }
  },
  {
    id: "PP-090", disciplina: "Processo Penal", assunto: "ANPP", subassunto: "Confissão como requisito",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.9,
    enunciado: "O acordo de não persecução penal exige que o investigado tenha confessado formal e circunstancialmente a prática da infração, que esta tenha sido cometida sem violência ou grave ameaça e que a pena mínima seja inferior a quatro anos.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "confessado formal e circunstancialmente ... pena mínima ... inferior a quatro anos",
    cognitivo: {
      motivo: "Confirmar os requisitos legais do ANPP.",
      mede: "CPP, art. 28-A.",
      pegadinhaDesc: "Três requisitos verdadeiros acumulados, incluindo o numérico.",
      ondeErra: "Duvida da exigência de confissão ou troca o patamar da pena.",
      palavraCritica: "confessado formal e circunstancialmente",
      tecnica: "A confissão é requisito expresso do caput do art. 28-A — diferencia o ANPP da transação penal, que não a exige.",
      regraMental: "ANPP: confessa, sem violência, mínima < 4 anos."
    },
    comentario: {
      resolucao: "CERTO. O art. 28-A do CPP condiciona o ANPP a: não ser caso de arquivamento, infração cometida sem violência ou grave ameaça, pena mínima inferior a quatro anos e confissão formal e circunstancial do investigado. A exigência de confissão é o traço que o distingue da transação penal.",
      fundamento: "CPP, art. 28-A, caput.",
      macete: "ANPP exige confissão; transação penal, não.",
      erroComum: "Negar a exigência de confissão.",
      comoBancaPensa: "Reúne requisitos legais verdadeiros para punir a desconfiança automática."
    }
  },
  {
    id: "LE-173", disciplina: "Legislação Especial", assunto: "Interceptação telefônica", subassunto: "Requisitos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.9,
    enunciado: "A interceptação de comunicações telefônicas depende de ordem judicial e não será admitida quando não houver indícios razoáveis da autoria ou participação em infração penal, quando a prova puder ser feita por outros meios disponíveis ou quando o fato investigado constituir infração punida, no máximo, com pena de detenção.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "indícios razoáveis ... outros meios disponíveis ... pena de detenção",
    cognitivo: {
      motivo: "Confirmar as três hipóteses legais de inadmissibilidade.",
      mede: "Lei 9.296/1996, art. 2º.",
      pegadinhaDesc: "Três condicionantes verdadeiras acumuladas.",
      ondeErra: "Desconfia do rol por sua extensão, ou desconhece a vedação para crimes punidos com detenção.",
      palavraCritica: "punida, no máximo, com pena de detenção",
      tecnica: "A interceptação é medida excepcional e subsidiária: exige indício, esgotamento de outros meios e crime punido com reclusão.",
      regraMental: "Interceptação: só reclusão, só com indício, só se não houver outro meio."
    },
    comentario: {
      resolucao: "CERTO. O art. 2º da Lei 9.296/1996 arrola exatamente essas três hipóteses de inadmissibilidade, e o art. 1º exige ordem do juiz competente. Trata-se de medida excepcional, subsidiária e reservada a infrações punidas com reclusão.",
      fundamento: "Lei 9.296/1996, arts. 1º e 2º; CF, art. 5º, XII.",
      macete: "Só reclusão, com indício e sem outro meio.",
      erroComum: "Rejeitar o item pela quantidade de condicionantes.",
      comoBancaPensa: "Acumula requisitos reais para explorar o reflexo contra 'desde que'."
    }
  },

  /* ============ TROCA-SUJEITO — a autoridade é aquela mesmo ============ */
  {
    id: "PP-091", disciplina: "Processo Penal", assunto: "Fiança", subassunto: "Competência da autoridade policial",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.9,
    enunciado: "A autoridade policial poderá conceder fiança nos casos de infração cuja pena privativa de liberdade máxima não seja superior a quatro anos.",
    gabarito: "C", pegadinha: "troca-sujeito", palavraChave: "autoridade policial ... não seja superior a quatro anos",
    cognitivo: {
      motivo: "Confirmar a competência do delegado para arbitrar fiança.",
      mede: "CPP, art. 322.",
      pegadinhaDesc: "Autoridade e patamar corretos; o candidato treinado em trocas de sujeito hesita.",
      ondeErra: "Presume que fiança é sempre judicial.",
      palavraCritica: "autoridade policial",
      tecnica: "É uma das poucas medidas cautelares que o delegado concede sozinho — mas só até o teto de 4 anos. Acima disso, requer-se ao juiz.",
      regraMental: "Delegado arbitra fiança até 4 anos."
    },
    comentario: {
      resolucao: "CERTO. O art. 322 do CPP autoriza a autoridade policial a conceder fiança nos casos de infração cuja pena privativa de liberdade máxima não seja superior a quatro anos; nos demais casos, a fiança será requerida ao juiz.",
      fundamento: "CPP, art. 322, caput e parágrafo único.",
      macete: "Delegado: fiança até 4 anos.",
      erroComum: "Supor que só o juiz concede fiança.",
      comoBancaPensa: "Atribuição correta num padrão em que quase tudo é troca."
    }
  },
  {
    id: "PP-092", disciplina: "Processo Penal", assunto: "Prisão preventiva", subassunto: "Reserva de jurisdição",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.9,
    enunciado: "A prisão preventiva somente pode ser decretada pelo juiz, mediante requerimento do Ministério Público, do querelante ou do assistente, ou por representação da autoridade policial, vedada a decretação de ofício.",
    gabarito: "C", pegadinha: "troca-sujeito", palavraChave: "somente ... pelo juiz ... vedada a decretação de ofício",
    cognitivo: {
      motivo: "Confirmar a reserva de jurisdição e a vedação de ofício após o Pacote Anticrime.",
      mede: "CPP, art. 311, com a redação da Lei 13.964/2019.",
      pegadinhaDesc: "Sujeito correto e vedação atualizada.",
      ondeErra: "Mantém a possibilidade de decretação de ofício, revogada em 2019.",
      palavraCritica: "vedada a decretação de ofício",
      tecnica: "O Pacote Anticrime suprimiu a decretação de ofício, reforçando o sistema acusatório: o juiz decide, mas alguém precisa pedir.",
      regraMental: "Preventiva: só o juiz, e só a pedido."
    },
    comentario: {
      resolucao: "CERTO. Com a redação dada pela Lei 13.964/2019, o art. 311 do CPP exige requerimento do Ministério Público, do querelante ou do assistente, ou representação da autoridade policial, não sendo mais admitida a decretação de ofício pelo juiz em nenhuma fase.",
      fundamento: "CPP, art. 311 (Lei 13.964/2019).",
      macete: "Só o juiz decreta, e nunca de ofício.",
      erroComum: "Admitir decretação de ofício, com base na redação revogada.",
      comoBancaPensa: "Sujeito correto somado a atualização legislativa."
    }
  },
  {
    id: "LI-079", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Designação da Comissão de Disciplina",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "No Estatuto da Polícia Civil de Alagoas, a Comissão de Disciplina que promove o inquérito disciplinar é designada pelo Secretário de Segurança Pública.",
    gabarito: "C", pegadinha: "troca-sujeito", palavraChave: "designada pelo Secretário de Segurança Pública",
    cognitivo: {
      motivo: "Confirmar a autoridade competente para designar a comissão.",
      mede: "Lei 3.437/1975, art. 118.",
      pegadinhaDesc: "Autoridade correta num padrão saturado de trocas.",
      ondeErra: "Atribui a designação ao Corregedor Geral ou ao Governador.",
      palavraCritica: "Secretário de Segurança Pública",
      tecnica: "O Secretário designa a comissão e indica seu presidente; o Governador reserva-se às penas máximas (demissão e cassação).",
      regraMental: "Comissão de Disciplina: designada pelo Secretário SSP."
    },
    comentario: {
      resolucao: "CERTO. O art. 118 da Lei 3.437/1975 atribui ao Secretário de Segurança Pública a designação da Comissão de Disciplina, composta de três membros, de preferência bacharéis em Direito; o art. 119 acrescenta que ele indica o presidente entre os membros.",
      fundamento: "Lei 3.437/1975, arts. 118 e 119.",
      macete: "Secretário SSP designa a comissão.",
      erroComum: "Atribuir ao Corregedor ou ao Governador.",
      comoBancaPensa: "Autoridade correta para punir a rejeição automática."
    }
  },

  /* ============ TROCA-NUMÉRICA — o número está certo ============ */
  {
    id: "PP-093", disciplina: "Processo Penal", assunto: "Inquérito policial", subassunto: "Prazos de conclusão",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.9,
    enunciado: "No Código de Processo Penal, o inquérito policial deve ser concluído em dez dias quando o indiciado estiver preso e em trinta dias quando estiver solto.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "dez dias ... trinta dias",
    cognitivo: {
      motivo: "Confirmar os prazos do CPP.",
      mede: "CPP, art. 10, caput.",
      pegadinhaDesc: "Ambos os números corretos, o que contraria o reflexo de desconfiar de todo numeral.",
      ondeErra: "Marca ERRADO por hábito ao ver dois números, ou confunde com prazos de leis especiais.",
      palavraCritica: "dez ... trinta",
      tecnica: "10/30 é a dupla do CPP. Prazos diferentes indicam lei especial (na Lei de Drogas, 30/90).",
      regraMental: "CPP: 10 preso, 30 solto."
    },
    comentario: {
      resolucao: "CERTO. O art. 10 do CPP fixa o prazo de dez dias para conclusão do inquérito com indiciado preso, contado da execução da ordem de prisão, e de trinta dias quando solto, prorrogáveis nesta hipótese.",
      fundamento: "CPP, art. 10, caput e §3º.",
      macete: "10 preso, 30 solto.",
      erroComum: "Rejeitar por desconfiança automática de números.",
      comoBancaPensa: "Números corretos para punir quem responde por reflexo."
    }
  },
  {
    id: "LE-174", disciplina: "Legislação Especial", assunto: "Prisão temporária", subassunto: "Prazo em crimes hediondos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.85,
    enunciado: "Nos crimes hediondos e equiparados, a prisão temporária terá o prazo de trinta dias, prorrogável por igual período em caso de extrema e comprovada necessidade.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "trinta dias, prorrogável por igual período",
    cognitivo: {
      motivo: "Confirmar o prazo especial da temporária em crimes hediondos.",
      mede: "Lei 8.072/1990, art. 2º, §4º.",
      pegadinhaDesc: "Prazo e regra de prorrogação corretos.",
      ondeErra: "Aplica o prazo geral de 5 dias da Lei 7.960/1989.",
      palavraCritica: "trinta dias",
      tecnica: "Regra geral (Lei 7.960): 5 dias + 5. Hediondos (Lei 8.072): 30 + 30. Sempre verifique se o crime é hediondo antes de responder sobre o prazo.",
      regraMental: "Comum 5+5; hediondo 30+30."
    },
    comentario: {
      resolucao: "CERTO. O art. 2º, §4º, da Lei 8.072/1990 estabelece prazo de trinta dias para a prisão temporária nos crimes hediondos e equiparados, prorrogável por igual período em caso de extrema e comprovada necessidade. O prazo geral de cinco dias prorrogáveis é o da Lei 7.960/1989.",
      fundamento: "Lei 8.072/1990, art. 2º, §4º; Lei 7.960/1989, art. 2º.",
      macete: "Hediondo: 30 + 30.",
      erroComum: "Usar o prazo geral de 5 dias.",
      comoBancaPensa: "Número correto num padrão saturado de trocas numéricas."
    }
  },

  /* ============ RESTRIÇÃO-INDEVIDA — a lei limita mesmo ============ */
  {
    id: "LE-175", disciplina: "Legislação Especial", assunto: "Interceptação telefônica", subassunto: "Finalidade restrita",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.85,
    enunciado: "A interceptação de comunicações telefônicas só pode ser autorizada para fins de investigação criminal ou de instrução processual penal, não se admitindo sua utilização como meio de prova em processo de natureza exclusivamente cível.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "só ... investigação criminal ou de instrução processual penal",
    cognitivo: {
      motivo: "Confirmar que a restrição de finalidade é real e constitucional.",
      mede: "CF, art. 5º, XII; Lei 9.296/1996, art. 1º.",
      pegadinhaDesc: "O 'só' aciona o reflexo de procurar hipótese não contemplada, mas a limitação consta da própria Constituição.",
      ondeErra: "Presume que toda restrição enunciada é indevida.",
      palavraCritica: "só ... não se admitindo ... cível",
      tecnica: "A própria CF condiciona a quebra do sigilo à finalidade de investigação criminal ou instrução processual penal. É restrição de origem constitucional.",
      regraMental: "Interceptação: só na esfera penal."
    },
    comentario: {
      resolucao: "CERTO. O art. 5º, XII, da CF autoriza a quebra do sigilo das comunicações telefônicas, por ordem judicial, apenas para fins de investigação criminal ou instrução processual penal, limitação repetida no art. 1º da Lei 9.296/1996. Admite-se, porém, a chamada prova emprestada em outras esferas, quando produzida licitamente no processo penal.",
      fundamento: "CF, art. 5º, XII; Lei 9.296/1996, art. 1º.",
      macete: "Interceptação nasce e vale no penal.",
      erroComum: "Marcar ERRADO por hábito diante de restrição.",
      comoBancaPensa: "Restrição verdadeira num padrão em que quase toda restrição é falsa."
    }
  },
  {
    id: "DP-107", disciplina: "Direito Penal", assunto: "Aplicação da lei penal", subassunto: "Retroatividade benéfica",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.9,
    enunciado: "A lei penal não retroagirá, salvo para beneficiar o réu, aplicando-se a lei posterior mais benéfica ainda que o fato já tenha sido decidido por sentença condenatória transitada em julgado.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "salvo para beneficiar o réu ... ainda que ... transitada em julgado",
    cognitivo: {
      motivo: "Confirmar o alcance da retroatividade benéfica.",
      mede: "CF, art. 5º, XL; CP, art. 2º, parágrafo único.",
      pegadinhaDesc: "A extensão ao caso já transitado em julgado parece exagerada, mas é exatamente o que a lei determina.",
      ondeErra: "Supõe que a coisa julgada barra a lei nova mais benéfica.",
      palavraCritica: "ainda que ... transitada em julgado",
      tecnica: "A lei mais benéfica alcança até o fato definitivamente julgado — é exceção expressa à coisa julgada, aplicada pelo juízo da execução (Súmula 611 do STF).",
      regraMental: "Lei melhor retroage até depois do trânsito em julgado."
    },
    comentario: {
      resolucao: "CERTO. O art. 5º, XL, da CF e o art. 2º, parágrafo único, do CP determinam que a lei posterior mais benéfica se aplica aos fatos anteriores, ainda que decididos por sentença condenatória transitada em julgado. A aplicação compete ao juízo da execução, conforme a Súmula 611 do STF.",
      fundamento: "CF, art. 5º, XL; CP, art. 2º, parágrafo único; Súmula 611 do STF.",
      macete: "Lei melhor rompe a coisa julgada.",
      erroComum: "Limitar a retroatividade aos processos em curso.",
      comoBancaPensa: "Afirma um alcance amplo que, excepcionalmente, é verdadeiro."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE58);
