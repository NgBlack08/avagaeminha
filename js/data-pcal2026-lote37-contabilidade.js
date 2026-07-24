/* =====================================================================
   CEBRASPE LAB — Lote 37: CONTABILIDADE E ANÁLISE FINANCEIRA (expansão)
   Preenche uma das lacunas mais profundas do banco: balanço patrimonial,
   DRE, análise de indícios de fraude/lavagem (movimentação financeira
   incompatível), gestão de riscos financeiros, análises vertical e
   horizontal, índices de liquidez e regime de competência x regime de
   caixa — todos temas confirmados como cobrados no padrão CEBRASPE para
   a área de investigação patrimonial e financeira. Itens 100%
   originais, com gabarito verificado de forma independente a partir da
   teoria contábil consolidada (Lei 6.404/1976, CPC, doutrina).
   14 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE37 = [

  {
    id: "CT-015", disciplina: "Contabilidade e Análise Financeira", assunto: "Demonstrações contábeis", subassunto: "Balanço patrimonial",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (balanço patrimonial)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "O balanço patrimonial evidencia a posição patrimonial e financeira da entidade em determinada data, sendo composto pelos grupos ativo, passivo e patrimônio líquido.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "posição ... em determinada data ... ativo, passivo e patrimônio líquido",
    cognitivo: {
      motivo: "Cobrar a natureza estática do balanço patrimonial e sua composição básica.",
      mede: "Contabilidade — demonstrações contábeis (balanço patrimonial).",
      pegadinhaDesc: "A banca pode confundir o balanço com uma demonstração de fluxo (como a DRE).",
      ondeErra: "Não distingue a natureza 'estática' (posição em uma data) do balanço da natureza 'dinâmica' (fluxo em um período) de outras demonstrações.",
      palavraCritica: "em determinada data",
      tecnica: "O balanço patrimonial é uma demonstração ESTÁTICA: retrata a posição patrimonial e financeira da entidade em uma DATA específica (normalmente o encerramento do exercício), estruturado em ativo (bens e direitos), passivo (obrigações) e patrimônio líquido (diferença entre ativo e passivo).",
      regraMental: "Balanço = fotografia (uma data). DRE = filme (um período)."
    },
    comentario: {
      resolucao: "CERTO. O balanço patrimonial é demonstração contábil estática, que evidencia a posição patrimonial e financeira da entidade em determinada data, estruturada em três grandes grupos: ativo, passivo e patrimônio líquido.",
      fundamento: "Lei nº 6.404/1976 (Lei das S.A.); doutrina contábil (estrutura das demonstrações financeiras).",
      macete: "Balanço: retrato de UMA DATA. Ativo = Passivo + PL.",
      erroComum: "Confundir o balanço (estático) com demonstrações de fluxo, como a DRE.",
      comoBancaPensa: "Item de fixação sobre a natureza e a estrutura básica do balanço patrimonial."
    }
  },
  {
    id: "CT-016", disciplina: "Contabilidade e Análise Financeira", assunto: "Demonstrações contábeis", subassunto: "Balanço patrimonial",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (balanço patrimonial)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.74,
    enunciado: "O balanço patrimonial evidencia o resultado (lucro ou prejuízo) apurado pela entidade ao longo de um período, e não sua posição patrimonial e financeira em uma data específica.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "resultado ... ao longo de um período",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, a natureza estática do balanço patrimonial.",
      mede: "Contabilidade — demonstrações contábeis (balanço patrimonial).",
      pegadinhaDesc: "A banca atribui ao balanço a função que é, na verdade, da Demonstração do Resultado do Exercício (DRE).",
      ondeErra: "Confunde a função do balanço (posição patrimonial, estática) com a função da DRE (resultado do período, dinâmica).",
      palavraCritica: "resultado ... ao longo de um período",
      tecnica: "Quem evidencia o resultado (lucro ou prejuízo) apurado ao longo de um período é a Demonstração do Resultado do Exercício (DRE), e não o balanço patrimonial — este último retrata a posição patrimonial e financeira da entidade em uma DATA específica.",
      regraMental: "Resultado do período = DRE. Posição em uma data = balanço patrimonial."
    },
    comentario: {
      resolucao: "ERRADO. Quem evidencia o resultado (lucro ou prejuízo) de um período é a Demonstração do Resultado do Exercício (DRE) — o balanço patrimonial, por sua vez, evidencia a posição patrimonial e financeira da entidade em determinada data, e não um fluxo ao longo de um período.",
      fundamento: "Lei nº 6.404/1976; doutrina contábil (estrutura das demonstrações financeiras).",
      macete: "Resultado do período = função da DRE, não do balanço.",
      erroComum: "Atribuir ao balanço patrimonial uma função que é típica da DRE.",
      comoBancaPensa: "Troca as funções de duas demonstrações contábeis distintas, testando a precisão conceitual."
    }
  },
  {
    id: "CT-017", disciplina: "Contabilidade e Análise Financeira", assunto: "Análise de fraudes financeiras", subassunto: "Movimentação financeira incompatível",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (indícios de fraude/lavagem de dinheiro)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.8,
    enunciado: "A incompatibilidade entre os fluxos financeiros movimentados por uma pessoa e sua capacidade econômica declarada constitui apenas indício, insuficiente, por si só, para comprovar a ocorrência de fraude contábil ou de crime contra a ordem tributária, exigindo-se a análise conjunta de outros elementos probatórios.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "apenas indício ... insuficiente, por si só",
    cognitivo: {
      motivo: "Cobrar que a incompatibilidade financeira é indício, não prova conclusiva isolada.",
      mede: "Contabilidade — análise de fraudes financeiras (indícios de lavagem/fraude).",
      pegadinhaDesc: "A banca pode afirmar que a mera incompatibilidade já basta, isoladamente, para comprovar o crime.",
      ondeErra: "Trata um indício relevante como prova conclusiva e autossuficiente.",
      palavraCritica: "apenas indício ... insuficiente, por si só",
      tecnica: "A incompatibilidade patrimonial (sinais exteriores de riqueza incompatíveis com a renda declarada) é um forte INDÍCIO investigativo, mas não constitui prova conclusiva isolada de fraude ou crime — a persecução exige a análise conjunta de outros elementos (documentos, testemunhas, perícia contábil) para formar o conjunto probatório.",
      regraMental: "Incompatibilidade patrimonial = indício forte, mas não é prova sozinha — sempre soma-se a outros elementos."
    },
    comentario: {
      resolucao: "CERTO. A incompatibilidade entre os fluxos financeiros de uma pessoa e sua capacidade econômica declarada é um indício relevante para a investigação, mas não constitui, isoladamente, prova conclusiva de fraude contábil ou de crime contra a ordem tributária — é necessária a análise conjunta de outros elementos probatórios.",
      fundamento: "Doutrina de análise financeira e contábil aplicada à investigação (indícios de lavagem/fraude).",
      macete: "Incompatibilidade patrimonial = indício, não prova conclusiva isolada.",
      erroComum: "Tratar a incompatibilidade patrimonial como prova suficiente, por si só, de ilícito.",
      comoBancaPensa: "Item de fixação sobre o valor probatório relativo dos indícios financeiros."
    }
  },
  {
    id: "CT-018", disciplina: "Contabilidade e Análise Financeira", assunto: "Análise de fraudes financeiras", subassunto: "Movimentação financeira incompatível",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (indícios de fraude/lavagem de dinheiro)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.78,
    enunciado: "A incompatibilidade entre os fluxos financeiros movimentados por uma pessoa e sua capacidade econômica declarada é suficiente, por si só, para comprovar a ocorrência de fraude contábil ou de crime contra a ordem tributária, dispensando-se a análise de outros elementos probatórios.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "suficiente, por si só ... dispensando-se",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a incompatibilidade financeira é apenas indício, não prova conclusiva.",
      mede: "Contabilidade — análise de fraudes financeiras (indícios de lavagem/fraude).",
      pegadinhaDesc: "A banca generaliza um indício relevante como se fosse prova conclusiva e autossuficiente.",
      ondeErra: "Presume que um único elemento indiciário (incompatibilidade patrimonial) já encerra a investigação, dispensando outras provas.",
      palavraCritica: "suficiente, por si só ... dispensando-se",
      tecnica: "A incompatibilidade patrimonial é apenas um INDÍCIO, e não prova conclusiva isolada — a comprovação de fraude ou crime exige a análise conjunta de outros elementos probatórios (documentos, perícia, testemunhas), não bastando esse único dado.",
      regraMental: "Nenhum indício isolado, por mais forte, dispensa a análise do conjunto probatório."
    },
    comentario: {
      resolucao: "ERRADO. A incompatibilidade entre os fluxos financeiros e a capacidade econômica declarada é apenas um indício relevante, mas não é suficiente, por si só, para comprovar fraude contábil ou crime contra a ordem tributária — exige-se sempre a análise conjunta de outros elementos probatórios.",
      fundamento: "Doutrina de análise financeira e contábil aplicada à investigação.",
      macete: "Nenhum indício isolado basta sozinho — sempre é necessário o conjunto probatório.",
      erroComum: "Tratar um único indício, ainda que relevante, como prova conclusiva e autossuficiente.",
      comoBancaPensa: "Generaliza indevidamente o valor probatório de um indício isolado."
    }
  },
  {
    id: "CT-019", disciplina: "Contabilidade e Análise Financeira", assunto: "Gestão de riscos financeiros", subassunto: "Identificação de riscos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (gestão de riscos financeiros)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "A identificação de riscos financeiros constitui etapa essencial da gestão de riscos, permitindo à entidade reconhecer eventos internos ou externos que possam afetar negativamente o alcance de seus objetivos financeiros.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "etapa essencial ... reconhecer eventos",
    cognitivo: {
      motivo: "Cobrar a importância da etapa de identificação na gestão de riscos financeiros.",
      mede: "Contabilidade — gestão de riscos financeiros.",
      pegadinhaDesc: "A banca pode negar essa etapa como essencial ou considerá-la dispensável.",
      ondeErra: "Trata a identificação de riscos como etapa acessória, e não como pressuposto do processo de gestão de riscos.",
      palavraCritica: "etapa essencial",
      tecnica: "A gestão de riscos financeiros compreende, entre outras, as etapas de identificação, análise/avaliação, tratamento e monitoramento dos riscos. A identificação é etapa ESSENCIAL e inicial: sem reconhecer os eventos que podem afetar os objetivos financeiros, não é possível avaliá-los ou tratá-los adequadamente.",
      regraMental: "Gestão de riscos: identificar → avaliar → tratar → monitorar. Sem identificar, as demais etapas não existem."
    },
    comentario: {
      resolucao: "CERTO. A identificação de riscos financeiros é etapa essencial e inicial do processo de gestão de riscos, permitindo à entidade reconhecer eventos internos ou externos capazes de afetar negativamente o alcance de seus objetivos financeiros, antes de avaliá-los e tratá-los.",
      fundamento: "Doutrina de gestão de riscos financeiros e controles internos.",
      macete: "Sem identificar o risco, não há como avaliar nem tratar — é a etapa inicial e essencial.",
      erroComum: "Considerar a identificação como etapa dispensável ou meramente formal.",
      comoBancaPensa: "Item de fixação sobre o papel central da identificação no ciclo de gestão de riscos."
    }
  },
  {
    id: "CT-020", disciplina: "Contabilidade e Análise Financeira", assunto: "Gestão de riscos financeiros", subassunto: "Identificação de riscos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (gestão de riscos financeiros)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.72,
    enunciado: "A gestão de riscos financeiros dispensa a etapa de identificação de riscos, bastando à entidade manter monitoramento contínuo dos indicadores financeiros já conhecidos.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "dispensa ... bastando ... monitoramento contínuo",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a identificação de riscos é etapa indispensável.",
      mede: "Contabilidade — gestão de riscos financeiros.",
      pegadinhaDesc: "A banca substitui a etapa de identificação por mero monitoramento de indicadores já conhecidos.",
      ondeErra: "Presume que o monitoramento contínuo, isoladamente, supre a necessidade de identificar novos riscos.",
      palavraCritica: "dispensa ... bastando",
      tecnica: "A identificação de riscos é etapa ESSENCIAL e não pode ser dispensada: novos eventos e riscos emergentes surgem continuamente, exigindo reidentificação periódica — o mero monitoramento de indicadores já conhecidos não substitui essa etapa.",
      regraMental: "Identificação de riscos é contínua e essencial — nunca dispensável, mesmo com monitoramento de indicadores conhecidos."
    },
    comentario: {
      resolucao: "ERRADO. A identificação de riscos é etapa essencial e contínua da gestão de riscos financeiros, não podendo ser dispensada — o monitoramento de indicadores já conhecidos não substitui a necessidade de identificar novos riscos e eventos emergentes que possam afetar os objetivos da entidade.",
      fundamento: "Doutrina de gestão de riscos financeiros e controles internos.",
      macete: "Identificação de riscos: sempre necessária e contínua, nunca dispensável.",
      erroComum: "Achar que o monitoramento de indicadores conhecidos substitui a identificação de novos riscos.",
      comoBancaPensa: "Generaliza indevidamente que uma etapa avançada do processo (monitoramento) dispensa a etapa inicial (identificação)."
    }
  },
  {
    id: "CT-021", disciplina: "Contabilidade e Análise Financeira", assunto: "Demonstrações contábeis", subassunto: "Demonstração do Resultado do Exercício (DRE)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (DRE)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "A Demonstração do Resultado do Exercício (DRE) evidencia as receitas, os custos, as despesas e o resultado (lucro ou prejuízo) apurados pela entidade ao longo de um período, diferindo do balanço patrimonial, que retrata a posição patrimonial em uma data específica.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ao longo de um período ... diferindo do balanço ... data específica",
    cognitivo: {
      motivo: "Cobrar a distinção entre a DRE (fluxo de um período) e o balanço patrimonial (posição em uma data).",
      mede: "Contabilidade — demonstrações contábeis (DRE x balanço patrimonial).",
      pegadinhaDesc: "A banca pode inverter as naturezas das duas demonstrações.",
      ondeErra: "Confunde a natureza de fluxo (período) da DRE com a natureza estática (data) do balanço.",
      palavraCritica: "ao longo de um período ... data específica",
      tecnica: "A DRE é demonstração DINÂMICA: apura receitas, custos, despesas e o resultado ao longo de um PERÍODO (ex.: um exercício social). O balanço patrimonial é demonstração ESTÁTICA: retrata a posição patrimonial em uma DATA específica (o encerramento do período).",
      regraMental: "DRE = filme (fluxo de um período). Balanço = fotografia (uma data)."
    },
    comentario: {
      resolucao: "CERTO. A DRE é demonstração de natureza dinâmica, que apura receitas, custos, despesas e o resultado (lucro ou prejuízo) ao longo de um período, diferindo do balanço patrimonial, de natureza estática, que evidencia a posição patrimonial da entidade em uma data específica.",
      fundamento: "Lei nº 6.404/1976; doutrina contábil (estrutura das demonstrações financeiras).",
      macete: "DRE = período (fluxo). Balanço = data (posição).",
      erroComum: "Inverter as naturezas das duas demonstrações contábeis.",
      comoBancaPensa: "Item de fixação sobre a distinção estrutural entre as duas principais demonstrações contábeis."
    }
  },
  {
    id: "CT-022", disciplina: "Contabilidade e Análise Financeira", assunto: "Demonstrações contábeis", subassunto: "Demonstração do Resultado do Exercício (DRE)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (DRE)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.72,
    enunciado: "A Demonstração do Resultado do Exercício (DRE), assim como o balanço patrimonial, é elaborada para retratar a posição patrimonial da entidade em uma data específica, e não o resultado apurado ao longo de um período.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "data específica ... e não o resultado ... período",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a DRE apura resultado de um período, e não posição em uma data.",
      mede: "Contabilidade — demonstrações contábeis (DRE x balanço patrimonial).",
      pegadinhaDesc: "A banca atribui à DRE a natureza estática que, na verdade, é do balanço patrimonial.",
      ondeErra: "Confunde a natureza dinâmica (fluxo de um período) da DRE com a natureza estática (posição em uma data) do balanço.",
      palavraCritica: "data específica ... e não o resultado",
      tecnica: "A DRE é elaborada para apurar o resultado (receitas, custos, despesas e lucro/prejuízo) ao longo de um PERÍODO, e não para retratar a posição patrimonial em uma data — essa última é a função do balanço patrimonial.",
      regraMental: "DRE = sempre um período. Data específica = função do balanço, não da DRE."
    },
    comentario: {
      resolucao: "ERRADO. A DRE é elaborada para apurar o resultado (receitas, custos, despesas e lucro/prejuízo) ao longo de um PERÍODO, e não para retratar a posição patrimonial em uma data específica — essa última função é do balanço patrimonial, e não da DRE.",
      fundamento: "Lei nº 6.404/1976; doutrina contábil (estrutura das demonstrações financeiras).",
      macete: "DRE: sempre um período (fluxo), nunca uma data isolada.",
      erroComum: "Atribuir à DRE a natureza estática que é, na verdade, do balanço patrimonial.",
      comoBancaPensa: "Troca as naturezas de duas demonstrações contábeis distintas."
    }
  },
  {
    id: "CT-023", disciplina: "Contabilidade e Análise Financeira", assunto: "Análise de demonstrações contábeis", subassunto: "Análise vertical e horizontal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (análise de balanços)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "A análise vertical evidencia a participação percentual de cada conta em relação a um valor-base (ex.: o ativo total), ao passo que a análise horizontal evidencia a evolução de cada conta ao longo de diferentes períodos, permitindo identificar tendências de crescimento ou de retração.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "vertical ... participação percentual ... horizontal ... evolução",
    cognitivo: {
      motivo: "Cobrar a distinção entre análise vertical e análise horizontal de demonstrações contábeis.",
      mede: "Contabilidade — análise de demonstrações contábeis.",
      pegadinhaDesc: "A banca pode inverter as definições de análise vertical e horizontal.",
      ondeErra: "Troca a análise vertical (participação percentual, mesma data) pela horizontal (evolução ao longo do tempo).",
      palavraCritica: "vertical ... participação percentual. Horizontal ... evolução",
      tecnica: "Análise VERTICAL: compara cada conta com um valor-base (ex.: percentual do ativo total) DENTRO de um mesmo período. Análise HORIZONTAL: compara a evolução de uma mesma conta ao longo de VÁRIOS períodos, identificando tendências.",
      regraMental: "Vertical = participação percentual (mesma data). Horizontal = evolução no tempo (vários períodos)."
    },
    comentario: {
      resolucao: "CERTO. A análise vertical evidencia a participação percentual de cada conta em relação a um valor-base dentro de um mesmo período, enquanto a análise horizontal evidencia a evolução de cada conta ao longo de diferentes períodos, permitindo identificar tendências de crescimento ou retração.",
      fundamento: "Doutrina contábil — técnicas de análise de demonstrações financeiras (análise vertical e horizontal).",
      macete: "Vertical = % de participação (mesma data). Horizontal = evolução no tempo.",
      erroComum: "Inverter as definições de análise vertical e horizontal.",
      comoBancaPensa: "Item de fixação sobre a distinção clássica entre as duas técnicas de análise."
    }
  },
  {
    id: "CT-024", disciplina: "Contabilidade e Análise Financeira", assunto: "Análise de demonstrações contábeis", subassunto: "Análise vertical e horizontal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (análise de balanços)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.74,
    enunciado: "A análise horizontal evidencia a participação percentual de cada conta em relação a um valor-base dentro de um mesmo período, ao passo que a análise vertical evidencia a evolução de cada conta ao longo de diferentes períodos.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "horizontal ... participação percentual ... vertical ... evolução",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, a distinção entre análise vertical e horizontal.",
      mede: "Contabilidade — análise de demonstrações contábeis.",
      pegadinhaDesc: "A banca inverte os nomes das duas técnicas de análise entre si.",
      ondeErra: "Aceita a troca sem perceber a inversão dos conceitos de vertical e horizontal.",
      palavraCritica: "horizontal ... participação percentual",
      tecnica: "Na verdade é o INVERSO: a análise VERTICAL (não a horizontal) evidencia a participação percentual dentro de um mesmo período, e a análise HORIZONTAL (não a vertical) evidencia a evolução ao longo de diferentes períodos.",
      regraMental: "Vertical = % de participação (mesma data). Horizontal = evolução no tempo."
    },
    comentario: {
      resolucao: "ERRADO. Os conceitos foram invertidos: é a análise VERTICAL (e não a horizontal) que evidencia a participação percentual de cada conta em relação a um valor-base dentro de um mesmo período; é a análise HORIZONTAL (e não a vertical) que evidencia a evolução das contas ao longo de diferentes períodos.",
      fundamento: "Doutrina contábil — técnicas de análise de demonstrações financeiras.",
      macete: "Vertical = % (mesma data). Horizontal = evolução (vários períodos).",
      erroComum: "Não perceber a inversão proposital entre os dois conceitos.",
      comoBancaPensa: "Testa a mesma distinção clássica, mas com os termos deliberadamente trocados."
    }
  },
  {
    id: "CT-025", disciplina: "Contabilidade e Análise Financeira", assunto: "Índices financeiros", subassunto: "Liquidez corrente",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (índices de liquidez)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "O índice de liquidez corrente é calculado pela divisão do ativo circulante pelo passivo circulante, sendo que um resultado superior a 1 indica que a entidade possui, em tese, recursos de curto prazo suficientes para honrar suas obrigações de curto prazo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ativo circulante / passivo circulante ... superior a 1",
    cognitivo: {
      motivo: "Cobrar a fórmula e a interpretação do índice de liquidez corrente.",
      mede: "Contabilidade — índices financeiros (liquidez).",
      pegadinhaDesc: "A banca pode inverter a fórmula (passivo circulante / ativo circulante).",
      ondeErra: "Inverte numerador e denominador na fórmula do índice.",
      palavraCritica: "ativo circulante / passivo circulante",
      tecnica: "Liquidez corrente = Ativo Circulante / Passivo Circulante. Resultado > 1 indica que os recursos de curto prazo (ativo circulante) superam as obrigações de curto prazo (passivo circulante), sinalizando, em tese, capacidade de pagamento.",
      regraMental: "Liquidez corrente = AC / PC. Maior que 1 = bom sinal (em tese)."
    },
    comentario: {
      resolucao: "CERTO. O índice de liquidez corrente é calculado por Ativo Circulante / Passivo Circulante. Um resultado superior a 1 indica que a entidade possui, em tese, recursos de curto prazo suficientes para cobrir suas obrigações de curto prazo.",
      fundamento: "Doutrina contábil — análise de índices financeiros (liquidez).",
      macete: "Liquidez corrente = AC / PC. Sempre ativo dividido por passivo, nunca o inverso.",
      erroComum: "Inverter a fórmula, dividindo o passivo circulante pelo ativo circulante.",
      comoBancaPensa: "Item de fixação sobre um dos índices financeiros mais cobrados em provas."
    }
  },
  {
    id: "CT-026", disciplina: "Contabilidade e Análise Financeira", assunto: "Índices financeiros", subassunto: "Liquidez corrente",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (índices de liquidez)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.74,
    enunciado: "O índice de liquidez corrente é calculado pela divisão do passivo circulante pelo ativo circulante, sendo que um resultado superior a 1 indica boa capacidade de pagamento das obrigações de curto prazo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "passivo circulante pelo ativo circulante",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, a fórmula correta do índice de liquidez corrente.",
      mede: "Contabilidade — índices financeiros (liquidez).",
      pegadinhaDesc: "A banca inverte numerador e denominador na fórmula do índice.",
      ondeErra: "Aceita a fórmula invertida sem perceber que ela produz uma interpretação equivocada.",
      palavraCritica: "passivo circulante pelo ativo circulante",
      tecnica: "A fórmula correta é Ativo Circulante / Passivo Circulante (e não o inverso). Se o cálculo fosse feito como no item, um resultado 'superior a 1' na verdade indicaria SITUAÇÃO RUIM (obrigações maiores que os recursos disponíveis), o oposto do que se afirma.",
      regraMental: "Liquidez corrente = AC / PC, nunca PC / AC."
    },
    comentario: {
      resolucao: "ERRADO. A fórmula correta do índice de liquidez corrente é Ativo Circulante / Passivo Circulante, e não o inverso. Ademais, se o cálculo fosse feito na forma invertida proposta pelo item, um resultado superior a 1 indicaria, na verdade, situação financeira desfavorável (mais obrigações do que recursos de curto prazo).",
      fundamento: "Doutrina contábil — análise de índices financeiros (liquidez).",
      macete: "Liquidez corrente = AC / PC. Nunca inverta a fórmula.",
      erroComum: "Inverter numerador e denominador, distorcendo completamente a interpretação do índice.",
      comoBancaPensa: "Inverte a fórmula de um índice clássico para testar a memorização correta do candidato."
    }
  },
  {
    id: "CT-027", disciplina: "Contabilidade e Análise Financeira", assunto: "Princípios contábeis", subassunto: "Regime de competência",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (regime de competência x regime de caixa)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "A contabilidade societária brasileira adota, como regra geral, o regime de competência, segundo o qual receitas e despesas são reconhecidas no período em que ocorrem, independentemente do efetivo recebimento ou pagamento, diferentemente do regime de caixa, que reconhece receitas e despesas apenas quando há efetiva movimentação financeira.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "regime de competência ... independentemente ... regime de caixa",
    cognitivo: {
      motivo: "Cobrar a distinção entre regime de competência (regra geral contábil) e regime de caixa.",
      mede: "Contabilidade — princípios contábeis (regime de competência).",
      pegadinhaDesc: "A banca pode inverter os dois regimes ou afirmar que o regime de caixa é a regra geral.",
      ondeErra: "Confunde o regime de competência (regra geral na contabilidade societária) com o regime de caixa (usado em contextos específicos, como certas apurações fiscais simplificadas).",
      palavraCritica: "regime de competência ... independentemente do efetivo recebimento ou pagamento",
      tecnica: "Regime de COMPETÊNCIA: reconhece receitas e despesas quando incorridas (fato gerador), independentemente do recebimento/pagamento — é a regra geral da contabilidade societária brasileira. Regime de CAIXA: reconhece receitas e despesas apenas com a efetiva movimentação financeira (entrada/saída de caixa).",
      regraMental: "Competência = quando ocorre o fato. Caixa = quando entra/sai o dinheiro. Competência é a regra geral contábil."
    },
    comentario: {
      resolucao: "CERTO. A contabilidade societária brasileira adota, como regra geral, o regime de competência: receitas e despesas são reconhecidas no período em que ocorrem, independentemente do efetivo recebimento ou pagamento — diferentemente do regime de caixa, que só reconhece a movimentação financeira quando ela efetivamente ocorre.",
      fundamento: "Doutrina contábil — princípios de contabilidade (regime de competência).",
      macete: "Competência = regra geral. Reconhece pelo FATO, não pelo dinheiro entrando/saindo.",
      erroComum: "Achar que o regime de caixa é a regra geral da contabilidade societária.",
      comoBancaPensa: "Item de fixação sobre um dos princípios contábeis mais fundamentais."
    }
  },
  {
    id: "CT-028", disciplina: "Contabilidade e Análise Financeira", assunto: "Princípios contábeis", subassunto: "Regime de competência",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (regime de competência x regime de caixa)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.74,
    enunciado: "A contabilidade societária brasileira adota, como regra geral, o regime de caixa, segundo o qual receitas e despesas somente são reconhecidas quando há efetivo recebimento ou pagamento em dinheiro, e não o regime de competência.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "regime de caixa ... regra geral",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o regime de competência (e não o de caixa) é a regra geral contábil.",
      mede: "Contabilidade — princípios contábeis (regime de competência).",
      pegadinhaDesc: "A banca inverte os dois regimes, apresentando o de caixa como regra geral.",
      ondeErra: "Confunde o regime de caixa (exceção, usado em contextos específicos) com a regra geral da contabilidade societária.",
      palavraCritica: "regime de caixa ... regra geral",
      tecnica: "Na verdade, a regra geral da contabilidade societária brasileira é o regime de COMPETÊNCIA, e não o regime de caixa — receitas e despesas são reconhecidas quando incorridas, independentemente do efetivo recebimento ou pagamento.",
      regraMental: "Regra geral contábil = competência, não caixa."
    },
    comentario: {
      resolucao: "ERRADO. A regra geral da contabilidade societária brasileira é o regime de COMPETÊNCIA (e não o de caixa): receitas e despesas são reconhecidas no período em que ocorrem, independentemente do efetivo recebimento ou pagamento em dinheiro.",
      fundamento: "Doutrina contábil — princípios de contabilidade (regime de competência).",
      macete: "Regra geral = competência. Regime de caixa é exceção em contextos específicos.",
      erroComum: "Inverter os dois regimes, tratando o de caixa como a regra geral contábil.",
      comoBancaPensa: "Troca os dois regimes entre si, testando a memorização da regra geral correta."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE37);

/* Frequência de temas — Contabilidade e Análise Financeira (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Contabilidade e Análise Financeira");
  if (!d) { d = { disciplina: "Contabilidade e Análise Financeira", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Balanço patrimonial e DRE (natureza e estrutura)", freq: 82, tendencia: "alta", prob: 0.8 },
    { tema: "Indícios de fraude e lavagem: valor probatório", freq: 80, tendencia: "alta", prob: 0.8 },
    { tema: "Análise vertical e horizontal, índices de liquidez", freq: 78, tendencia: "alta", prob: 0.78 },
    { tema: "Regime de competência x regime de caixa", freq: 76, tendencia: "estavel", prob: 0.76 },
  );
})();
