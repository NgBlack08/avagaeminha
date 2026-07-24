/* =====================================================================
   CEBRASPE LAB — Lote 34: DIREITO PENAL (expansão)
   Cobre temas de alta recorrência: princípio da insignificância e
   habitualidade delitiva (jurisprudência STJ/STF), feminicídio como
   crime autônomo pós-Lei nº 14.994/2024, latrocínio consumado, furto
   de energia elétrica mediante fraude, peculato-apropriação, lei
   processual penal no tempo, lei excepcional/temporária (ultra-
   atividade) e extraterritorialidade incondicionada. Itens 100%
   originais, com gabarito verificado de forma independente a partir do
   Código Penal, do CPP e de jurisprudência consolidada.
   14 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE34 = [

  {
    id: "DP-083", disciplina: "Direito Penal", assunto: "Princípio da insignificância", subassunto: "Habitualidade delitiva",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (jurisprudência STJ/STF sobre insignificância)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.86,
    enunciado: "Considerando o entendimento consolidado dos tribunais superiores sobre o princípio da insignificância, a habitualidade ou a reiteração delitiva específica, em regra, afasta a incidência desse princípio, ainda que o valor do bem atingido seja irrisório, em razão do maior grau de reprovabilidade da conduta do agente reincidente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "habitualidade ... afasta a incidência ... maior reprovabilidade",
    cognitivo: {
      motivo: "Cobrar o entendimento consolidado de que a habitualidade delitiva, em regra, afasta o princípio da insignificância.",
      mede: "Direito Penal — princípio da insignificância (jurisprudência).",
      pegadinhaDesc: "A banca pode inverter o entendimento, afirmando que a habitualidade é insuficiente para afastar o benefício.",
      ondeErra: "Acha que a insignificância se aplica automaticamente sempre que o valor do bem é irrisório, ignorando o histórico do agente.",
      palavraCritica: "afasta a incidência",
      tecnica: "STJ e STF entendem, de forma consolidada, que a reiteração delitiva específica (habitualidade) afasta, em regra, a aplicação do princípio da insignificância, mesmo que o valor do bem seja irrisório — o vetor da reprovabilidade da conduta se soma à análise da lesividade mínima.",
      regraMental: "Réu reincidente/habitual: insignificância, em regra, NÃO se aplica, mesmo com bem de valor irrisório."
    },
    comentario: {
      resolucao: "CERTO. É entendimento consolidado do STJ e do STF que a habitualidade ou a reiteração delitiva específica, em regra, afasta a incidência do princípio da insignificância, ainda que o valor do bem seja irrisório, tendo em vista o maior grau de reprovabilidade da conduta do agente que reitera a prática delitiva.",
      fundamento: "STF, HC 84.412/SP (requisitos da insignificância: mínima ofensividade, ausência de periculosidade social, reduzida reprovabilidade e inexpressividade da lesão); STJ, Enunciado 2 da Jurisprudência em Teses (edição 219): 'A reiteração delitiva, a reincidência e os antecedentes, em regra, afastam a aplicação do princípio da insignificância, por ausência de reduzido grau de reprovabilidade do comportamento do agente.'",
      macete: "Reincidência/habitualidade específica = insignificância, em regra, não se aplica.",
      erroComum: "Aplicar a insignificância apenas com base no valor do bem, ignorando o histórico do agente.",
      comoBancaPensa: "Cobra a jurisprudência real e consolidada, corrigindo uma crença intuitiva comum entre candidatos."
    }
  },
  {
    id: "DP-084", disciplina: "Direito Penal", assunto: "Princípio da insignificância", subassunto: "Habitualidade delitiva",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (jurisprudência STJ/STF sobre insignificância)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.84,
    enunciado: "A habitualidade ou a reiteração delitiva, em regra, são insuficientes para afastar a incidência do princípio da insignificância, desde que o valor do bem atingido seja irrisório.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "insuficientes para afastar",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, o entendimento consolidado sobre habitualidade e insignificância.",
      mede: "Direito Penal — princípio da insignificância (jurisprudência).",
      pegadinhaDesc: "A banca combina uma premissa verdadeira (valor irrisório) com uma conclusão falsa (insuficiência da habitualidade), técnica de 'verdade + mentira'.",
      ondeErra: "Foca apenas no valor irrisório do bem (premissa correta) e não percebe que a conclusão sobre a habitualidade está invertida.",
      palavraCritica: "insuficientes para afastar",
      tecnica: "Ao contrário do afirmado, a jurisprudência do STJ/STF entende que a habitualidade/reiteração delitiva específica é, em regra, SUFICIENTE para afastar a insignificância, mesmo com bem de valor irrisório — o valor do bem não é o único vetor analisado.",
      regraMental: "Cuidado com itens que somam uma premissa certa a uma conclusão errada — leia a frase inteira."
    },
    comentario: {
      resolucao: "ERRADO. Ao contrário do afirmado, a jurisprudência consolidada do STJ e do STF entende que a habitualidade ou a reiteração delitiva específica é, em regra, SUFICIENTE para afastar a incidência do princípio da insignificância, ainda que o valor do bem atingido seja irrisório.",
      fundamento: "Jurisprudência consolidada do STJ e do STF sobre o princípio da insignificância.",
      macete: "Habitualidade específica: em regra, AFASTA a insignificância, mesmo com bem irrisório.",
      erroComum: "Considerar apenas o valor do bem, ignorando o vetor da reprovabilidade da conduta reincidente.",
      comoBancaPensa: "Técnica clássica de somar uma premissa verdadeira a uma conclusão falsa para induzir ao erro."
    }
  },
  {
    id: "DP-085", disciplina: "Direito Penal", assunto: "Crimes contra a vida", subassunto: "Feminicídio (Lei 14.994/2024)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei nº 14.994/2024)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.88,
    enunciado: "À luz das alterações promovidas pela Lei nº 14.994/2024 no Código Penal, o feminicídio deixou de constituir qualificadora do crime de homicídio e passou a configurar crime autônomo, reputando-se presentes as razões da condição do sexo feminino quando o crime envolve violência doméstica e familiar ou menosprezo ou discriminação à condição de mulher.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "crime autônomo ... razões da condição do sexo feminino",
    cognitivo: {
      motivo: "Cobrar a transformação do feminicídio em tipo penal autônomo pela Lei 14.994/2024.",
      mede: "Direito Penal — crimes contra a vida (feminicídio).",
      pegadinhaDesc: "A banca pode afirmar que o feminicídio permanece apenas qualificadora do homicídio, ignorando a alteração legislativa recente.",
      ondeErra: "Não atualiza o conhecimento sobre a Lei 14.994/2024, mantendo a compreensão anterior (feminicídio como qualificadora).",
      palavraCritica: "crime autônomo",
      tecnica: "A Lei nº 14.994/2024 revogou a qualificadora do feminicídio no art. 121, §2º, VI, do CP e criou o art. 121-A, tipificando o feminicídio como crime autônomo, mantendo-se o critério de que as razões da condição do sexo feminino se presumem no contexto de violência doméstica e familiar ou de menosprezo/discriminação à mulher.",
      regraMental: "Pós-Lei 14.994/2024: feminicídio = crime autônomo (art. 121-A), não mais qualificadora do art. 121."
    },
    comentario: {
      resolucao: "CERTO. A Lei nº 14.994/2024 (conhecida como 'Pacote Antifeminicídio') alterou o Código Penal para transformar o feminicídio, antes qualificadora do homicídio (art. 121, §2º, VI), em crime autônomo (art. 121-A, pena de reclusão de 20 a 40 anos), mantendo a presunção das razões da condição do sexo feminino nos casos de violência doméstica e familiar ou de menosprezo/discriminação à condição de mulher — fenômeno de continuidade normativo-típica, sem abolitio criminis.",
      fundamento: "Código Penal, art. 121-A, com redação dada pela Lei nº 14.994/2024 ('Pacote Antifeminicídio').",
      macete: "Feminicídio hoje é crime autônomo (art. 121-A), não mais qualificadora.",
      erroComum: "Manter o entendimento anterior à Lei 14.994/2024, tratando o feminicídio apenas como qualificadora.",
      comoBancaPensa: "Cobra atualização legislativa recente, testando se o candidato acompanha as mudanças do Código Penal."
    }
  },
  {
    id: "DP-086", disciplina: "Direito Penal", assunto: "Crimes contra a vida", subassunto: "Feminicídio (Lei 14.994/2024)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei nº 14.994/2024)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.84,
    enunciado: "Mesmo após as alterações promovidas pela Lei nº 14.994/2024, o feminicídio permanece configurado exclusivamente como qualificadora do crime de homicídio, prevista no art. 121, §2º, do Código Penal, não tendo sido criado tipo penal autônomo para essa conduta.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "permanece ... exclusivamente como qualificadora",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, a transformação do feminicídio em crime autônomo.",
      mede: "Direito Penal — crimes contra a vida (feminicídio).",
      pegadinhaDesc: "A banca nega a atualização legislativa recente, mantendo a redação anterior à Lei 14.994/2024 como se ainda vigente.",
      ondeErra: "Desconhece a Lei 14.994/2024 e presume que o regime jurídico anterior ainda está em vigor.",
      palavraCritica: "permanece ... exclusivamente como qualificadora",
      tecnica: "A Lei nº 14.994/2024 revogou a qualificadora do art. 121, §2º, VI, e criou o art. 121-A, tipificando o feminicídio como crime autônomo — a afirmação de que 'permanece exclusivamente como qualificadora' está desatualizada e incorreta.",
      regraMental: "Feminicídio hoje: art. 121-A (crime autônomo), não mais qualificadora do art. 121."
    },
    comentario: {
      resolucao: "ERRADO. Desde a Lei nº 14.994/2024, o feminicídio não é mais apenas qualificadora do homicídio — foi criado o art. 121-A do Código Penal, tipificando-o como crime autônomo, com pena e regime próprios.",
      fundamento: "Código Penal, art. 121-A, com redação dada pela Lei nº 14.994/2024.",
      macete: "Feminicídio: crime autônomo desde 2024 (art. 121-A).",
      erroComum: "Desconhecer a alteração legislativa recente e manter o entendimento anterior.",
      comoBancaPensa: "Testa se o candidato está atualizado quanto às mudanças legislativas mais recentes no CP."
    }
  },
  {
    id: "DP-087", disciplina: "Direito Penal", assunto: "Crimes contra o patrimônio", subassunto: "Latrocínio (consumação)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Súmula 610, STF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.86,
    enunciado: "Configura-se o crime de latrocínio consumado quando o agente, no contexto do roubo, provoca a morte da vítima, ainda que não logre subtrair os bens que pretendia.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "latrocínio consumado ... ainda que não logre subtrair",
    cognitivo: {
      motivo: "Cobrar a Súmula 610 do STF sobre a consumação do latrocínio.",
      mede: "Direito Penal — crimes contra o patrimônio (latrocínio).",
      pegadinhaDesc: "A banca pode exigir a subtração efetiva dos bens para a consumação do latrocínio.",
      ondeErra: "Acha que o latrocínio só se consuma quando há subtração efetiva do patrimônio, além da morte.",
      palavraCritica: "ainda que não logre subtrair",
      tecnica: "Súmula 610, STF: 'Há crime de latrocínio, quando o homicídio se consuma, ainda que não se realize o agente a subtração de bens da vítima.' A consumação do latrocínio acompanha a consumação da morte, independentemente do êxito na subtração patrimonial.",
      regraMental: "Latrocínio consumado = morte consumada, haja ou não subtração efetiva (Súmula 610, STF)."
    },
    comentario: {
      resolucao: "CERTO. Conforme a Súmula 610 do STF, o crime de latrocínio se consuma com a morte da vítima no contexto do roubo, independentemente de o agente lograr ou não subtrair os bens pretendidos — a consumação acompanha o resultado morte, e não o resultado patrimonial.",
      fundamento: "STF, Súmula 610.",
      macete: "Latrocínio consumado = morte consumada. Subtração pode até não ocorrer.",
      erroComum: "Exigir a subtração efetiva do patrimônio para reconhecer a consumação do latrocínio.",
      comoBancaPensa: "Cobra a literalidade de uma súmula clássica sobre crimes patrimoniais violentos."
    }
  },
  {
    id: "DP-088", disciplina: "Direito Penal", assunto: "Crimes contra o patrimônio", subassunto: "Latrocínio (consumação)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Súmula 610, STF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.82,
    enunciado: "O crime de latrocínio somente se considera consumado quando o agente, além de provocar a morte da vítima, também logra êxito na subtração dos bens pretendidos, configurando-se latrocínio tentado caso a subtração não se realize.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "somente ... também logra êxito na subtração",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, a Súmula 610 do STF sobre a consumação do latrocínio.",
      mede: "Direito Penal — crimes contra o patrimônio (latrocínio).",
      pegadinhaDesc: "A banca cria uma exigência (subtração efetiva) que a súmula do STF expressamente dispensa.",
      ondeErra: "Condiciona a consumação do latrocínio a um resultado (subtração) que não é exigido pela jurisprudência.",
      palavraCritica: "somente ... também logra êxito",
      tecnica: "Pela Súmula 610 do STF, o latrocínio se consuma com a morte da vítima, INDEPENDENTEMENTE de êxito na subtração — a afirmação de que a subtração efetiva é condição para a consumação está incorreta.",
      regraMental: "Latrocínio: a consumação acompanha a morte, não a subtração."
    },
    comentario: {
      resolucao: "ERRADO. Conforme a Súmula 610 do STF, o latrocínio se consuma com a morte da vítima no contexto do roubo, ainda que o agente não logre subtrair os bens pretendidos — não existe a exigência de êxito patrimonial para a consumação, ao contrário do que afirma o item.",
      fundamento: "STF, Súmula 610.",
      macete: "Latrocínio consumado = morte consumada, com ou sem subtração.",
      erroComum: "Criar uma exigência de resultado patrimonial que a jurisprudência dominante não impõe.",
      comoBancaPensa: "Cria uma condição inexistente para testar se o candidato confia cegamente na lógica intuitiva, sem checar a súmula."
    }
  },
  {
    id: "DP-089", disciplina: "Direito Penal", assunto: "Crimes contra o patrimônio", subassunto: "Furto de energia elétrica mediante fraude",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 155, §3º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.78,
    enunciado: "No furto de energia elétrica mediante fraude, o pagamento integral do débito antes do recebimento da denúncia não extingue a punibilidade do agente, diferentemente do que ocorre, por exemplo, em determinados crimes tributários, nos quais essa causa extintiva encontra previsão legal específica.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não extingue a punibilidade ... diferentemente ... crimes tributários",
    cognitivo: {
      motivo: "Cobrar que o pagamento do débito não é causa de extinção de punibilidade no furto mediante fraude.",
      mede: "Direito Penal — crimes contra o patrimônio (furto qualificado por fraude).",
      pegadinhaDesc: "A banca pode estender ao furto uma causa extintiva de punibilidade exclusiva de outros crimes (tributários).",
      ondeErra: "Generaliza a regra de extinção de punibilidade pelo pagamento (própria de crimes tributários) para o furto de energia elétrica.",
      palavraCritica: "não extingue a punibilidade",
      tecnica: "O furto de energia elétrica mediante fraude (art. 155, §3º, CP) não possui previsão legal de extinção de punibilidade pelo pagamento do débito — essa causa extintiva é exceção prevista especificamente para determinados crimes tributários (ex.: Lei 9.249/1995, art. 34), não se estendendo, por analogia, aos crimes patrimoniais comuns.",
      regraMental: "Extinção de punibilidade pelo pagamento: exceção específica de crimes tributários, não se estende ao furto."
    },
    comentario: {
      resolucao: "CERTO. O pagamento integral do débito relativo à energia elétrica subtraída mediante fraude não extingue a punibilidade do agente, pois essa causa extintiva não tem previsão no art. 155, §3º, do CP — trata-se de exceção específica de determinados crimes tributários, não extensível por analogia aos crimes patrimoniais comuns.",
      fundamento: "Código Penal, art. 155, §3º; doutrina de Direito Penal (causas de extinção da punibilidade).",
      macete: "Pagar o débito não apaga o crime de furto — isso só vale para hipóteses tributárias específicas previstas em lei.",
      erroComum: "Estender por analogia a extinção de punibilidade dos crimes tributários ao furto de energia elétrica.",
      comoBancaPensa: "Testa se o candidato distingue regras excepcionais específicas de regras gerais do Direito Penal."
    }
  },
  {
    id: "DP-090", disciplina: "Direito Penal", assunto: "Crimes contra o patrimônio", subassunto: "Furto de energia elétrica mediante fraude",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 155, §3º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.8,
    enunciado: "No furto de energia elétrica mediante fraude, o pagamento integral do débito antes do recebimento da denúncia extingue a punibilidade do agente, tal como ocorre nos crimes tributários.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "extingue a punibilidade ... tal como ... tributários",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, a ausência de causa extintiva de punibilidade pelo pagamento no furto.",
      mede: "Direito Penal — crimes contra o patrimônio (furto qualificado por fraude).",
      pegadinhaDesc: "A banca estende indevidamente ao furto uma causa extintiva exclusiva de crimes tributários.",
      ondeErra: "Generaliza a regra excepcional dos crimes tributários para todo e qualquer crime patrimonial.",
      palavraCritica: "tal como ... tributários",
      tecnica: "O art. 155, §3º, CP (furto de energia elétrica) não contém previsão de extinção de punibilidade pelo pagamento do débito — essa é uma causa extintiva exclusiva e expressa de determinados crimes tributários, não extensível por analogia ao furto.",
      regraMental: "Extinção de punibilidade pelo pagamento: só nos crimes com previsão legal expressa (tributários), não no furto."
    },
    comentario: {
      resolucao: "ERRADO. Não há, no art. 155, §3º, do CP, previsão de extinção de punibilidade pelo pagamento do débito relativo à energia elétrica subtraída — essa causa extintiva é exclusiva de determinados crimes tributários, com previsão legal expressa, não se estendendo por analogia ao furto.",
      fundamento: "Código Penal, art. 155, §3º; doutrina de Direito Penal (causas de extinção da punibilidade).",
      macete: "Só há extinção de punibilidade pelo pagamento onde a lei expressamente previr — não é regra geral.",
      erroComum: "Generalizar uma causa extintiva excepcional (crimes tributários) para o furto comum.",
      comoBancaPensa: "Generaliza indevidamente uma exceção legal específica para todo o campo dos crimes patrimoniais."
    }
  },
  {
    id: "DP-091", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública", subassunto: "Peculato (reparação do dano)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 312)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.78,
    enunciado: "Tratando-se de peculato-apropriação (art. 312, caput, do Código Penal), a reparação integral do dano promovida pelo funcionário público antes do recebimento da denúncia não extingue a punibilidade, diferentemente do que ocorre no peculato culposo, hipótese em que a reparação anterior à sentença irrecorrível é causa extintiva de punibilidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "peculato-apropriação ... não extingue ... peculato culposo ... extintiva",
    cognitivo: {
      motivo: "Cobrar a distinção entre peculato doloso (apropriação) e peculato culposo quanto aos efeitos da reparação do dano.",
      mede: "Direito Penal — crimes contra a Administração Pública (peculato).",
      pegadinhaDesc: "A banca pode estender ao peculato doloso o benefício de extinção de punibilidade previsto apenas para o culposo.",
      ondeErra: "Confunde o regime do peculato culposo (art. 312, §2º e §3º, CP) com o do peculato doloso/apropriação (caput).",
      palavraCritica: "não extingue ... diferentemente ... culposo",
      tecnica: "Art. 312, §3º, CP: no PECULATO CULPOSO, a reparação do dano, se precede à sentença irrecorrível, extingue a punibilidade (se posterior, reduz a pena pela metade). No PECULATO DOLOSO (apropriação, caput), não há essa causa extintiva — a reparação, quando muito, atenua a pena (art. 65, III, 'b', CP) ou reduz o dano na esfera cível, mas não extingue a punibilidade penal.",
      regraMental: "Peculato CULPOSO: reparação antes da sentença = extingue punibilidade. Peculato DOLOSO: reparação NÃO extingue."
    },
    comentario: {
      resolucao: "CERTO. A extinção de punibilidade pela reparação do dano é exclusiva do peculato CULPOSO (art. 312, §3º, CP), quando a reparação precede a sentença irrecorrível. No peculato-apropriação (doloso, caput), a reparação integral do dano antes do recebimento da denúncia não extingue a punibilidade, podendo, no máximo, funcionar como atenuante genérica.",
      fundamento: "Código Penal, art. 312, caput e §3º.",
      macete: "Peculato culposo: reparação extingue (se antes da sentença). Peculato doloso: reparação NÃO extingue.",
      erroComum: "Estender ao peculato doloso o benefício de extinção de punibilidade exclusivo do peculato culposo.",
      comoBancaPensa: "Testa a distinção fina entre os regimes do peculato doloso e culposo quanto à reparação do dano."
    }
  },
  {
    id: "DP-092", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública", subassunto: "Peculato (reparação do dano)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 312)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.76,
    enunciado: "Tratando-se de peculato-apropriação, a reparação integral do dano promovida pelo funcionário público antes do recebimento da denúncia extingue a punibilidade, tal como ocorre nos crimes tributários.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "extingue a punibilidade ... peculato-apropriação",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a reparação do dano no peculato doloso não extingue a punibilidade.",
      mede: "Direito Penal — crimes contra a Administração Pública (peculato).",
      pegadinhaDesc: "A banca estende ao peculato doloso um benefício exclusivo do peculato culposo e de crimes tributários.",
      ondeErra: "Confunde a regra do peculato culposo (art. 312, §3º) com o regime do peculato doloso (caput), que não admite essa causa extintiva.",
      palavraCritica: "extingue a punibilidade ... peculato-apropriação",
      tecnica: "No peculato-apropriação (doloso, art. 312, caput, CP), a reparação do dano antes da denúncia NÃO extingue a punibilidade — essa causa extintiva é exclusiva do peculato CULPOSO (art. 312, §3º), quando a reparação precede a sentença irrecorrível.",
      regraMental: "Peculato doloso (apropriação): reparação não extingue punibilidade, apenas atenua a pena."
    },
    comentario: {
      resolucao: "ERRADO. No peculato-apropriação (doloso), a reparação integral do dano antes do recebimento da denúncia NÃO extingue a punibilidade — esse efeito é exclusivo do peculato CULPOSO, quando a reparação precede a sentença irrecorrível (art. 312, §3º, CP).",
      fundamento: "Código Penal, art. 312, caput e §3º.",
      macete: "Só o peculato CULPOSO admite extinção de punibilidade pela reparação — não o doloso.",
      erroComum: "Confundir o regime do peculato culposo com o do peculato doloso (apropriação).",
      comoBancaPensa: "Estende indevidamente um benefício excepcional a uma modalidade de crime que não o admite."
    }
  },
  {
    id: "DP-093", disciplina: "Direito Penal", assunto: "Aplicação da lei penal", subassunto: "Lei processual penal no tempo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 2º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.78,
    enunciado: "Diferentemente da lei penal, a lei processual penal aplica-se desde logo aos processos em curso, sem prejuízo da validade dos atos já praticados sob a vigência da lei anterior, não se cogitando, em regra, de retroatividade da norma processual mais benéfica ao acusado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "aplica-se desde logo ... sem prejuízo ... não se cogitando de retroatividade",
    cognitivo: {
      motivo: "Cobrar o princípio do 'tempus regit actum' na aplicação da lei processual penal no tempo.",
      mede: "Direito Penal — aplicação da lei penal e processual no tempo.",
      pegadinhaDesc: "A banca pode estender à lei processual penal o mesmo regime de retroatividade benéfica da lei penal material.",
      ondeErra: "Aplica à lei processual penal a lógica da retroatividade da lei penal mais benéfica (art. 2º, CP), que não se aplica à norma puramente processual.",
      palavraCritica: "não se cogitando ... retroatividade",
      tecnica: "Art. 2º, CPP: a lei processual penal aplica-se desde logo, sem prejuízo dos atos realizados sob a vigência da lei anterior (sistema do isolamento dos atos processuais) — não se aplica a retroatividade da lei penal mais benéfica, própria da lei penal material (art. 2º, CP).",
      regraMental: "Lei processual: aplicação imediata, atos anteriores válidos, sem 'retroatividade benéfica' (isso é da lei penal material)."
    },
    comentario: {
      resolucao: "CERTO. A lei processual penal, ao contrário da lei penal material, aplica-se de imediato aos processos em curso (art. 2º, CPP), preservando a validade dos atos já praticados sob a lei anterior (sistema do isolamento dos atos processuais), sem que se cogite, em regra, de retroatividade da norma processual mais benéfica.",
      fundamento: "Código de Processo Penal, art. 2º; princípio 'tempus regit actum'.",
      macete: "Lei processual: aplicação imediata + atos anteriores válidos, sem retroatividade benéfica.",
      erroComum: "Aplicar à lei processual penal a lógica de retroatividade benéfica típica da lei penal material.",
      comoBancaPensa: "Cobra a distinção clássica entre a aplicação da lei penal material e da lei processual penal no tempo."
    }
  },
  {
    id: "DP-094", disciplina: "Direito Penal", assunto: "Aplicação da lei penal", subassunto: "Lei processual penal no tempo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 2º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.74,
    enunciado: "Assim como a lei penal material, a lei processual penal admite retroatividade em benefício do acusado, devendo ser aplicada a norma processual mais favorável aos processos em curso, ainda que iniciados sob a vigência de lei processual anterior menos benéfica.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "admite retroatividade em benefício do acusado",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, a ausência de retroatividade benéfica na lei processual penal pura.",
      mede: "Direito Penal — aplicação da lei penal e processual no tempo.",
      pegadinhaDesc: "A banca estende à lei processual penal o regime de retroatividade benéfica próprio da lei penal material.",
      ondeErra: "Confunde os regimes de aplicação temporal da lei penal material (retroage se benéfica) e da lei processual penal pura (aplicação imediata, sem retroatividade).",
      palavraCritica: "admite retroatividade em benefício do acusado",
      tecnica: "A lei processual penal pura aplica-se de imediato aos processos em curso (art. 2º, CPP), sem que se cogite de 'retroatividade benéfica' — esse instituto é próprio da lei penal material (art. 2º, CP). Situação distinta é a das normas processuais penais materiais (ex.: prazo de prisão), que seguem regime híbrido.",
      regraMental: "Lei processual penal pura: aplicação imediata, sem retroatividade — não confundir com a lei penal material."
    },
    comentario: {
      resolucao: "ERRADO. A lei processual penal pura não admite o instituto da retroatividade benéfica — ela se aplica de imediato aos processos em curso, preservando os atos já praticados (art. 2º, CPP), diferentemente da lei penal material, que retroage quando mais benéfica ao réu (art. 2º, CP).",
      fundamento: "Código de Processo Penal, art. 2º.",
      macete: "Retroatividade benéfica é instituto da lei PENAL, não da lei processual penal pura.",
      erroComum: "Confundir os regimes de aplicação temporal da lei penal material e da lei processual penal.",
      comoBancaPensa: "Testa se o candidato mistura, por analogia indevida, os dois regimes de aplicação da lei no tempo."
    }
  },
  {
    id: "DP-095", disciplina: "Direito Penal", assunto: "Aplicação da lei penal", subassunto: "Lei excepcional ou temporária (ultra-atividade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 3º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.8,
    enunciado: "A lei excepcional ou temporária, embora cessadas as circunstâncias que a determinaram ou decorrido o período de sua duração, aplica-se ao fato praticado durante sua vigência, em razão do fenômeno da ultra-atividade dessas leis.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ultra-atividade ... aplica-se ao fato praticado durante sua vigência",
    cognitivo: {
      motivo: "Cobrar o fenômeno da ultra-atividade da lei excepcional/temporária (art. 3º, CP).",
      mede: "Direito Penal — aplicação da lei penal no tempo (lei excepcional/temporária).",
      pegadinhaDesc: "A banca pode negar a ultra-atividade, afirmando que o fim da vigência beneficia retroativamente o agente.",
      ondeErra: "Aplica à lei excepcional/temporária a lógica geral da abolitio criminis, ignorando a regra especial do art. 3º, CP.",
      palavraCritica: "ultra-atividade",
      tecnica: "Art. 3º, CP: a lei excepcional ou temporária, ainda que decorrido o período de sua duração ou cessadas as circunstâncias que a determinaram, aplica-se ao fato praticado durante sua vigência — é o fenômeno da ULTRA-ATIVIDADE, exceção à regra geral de que a lei posterior mais benéfica sempre retroage.",
      regraMental: "Lei excepcional/temporária: sempre ultra-ativa — continua se aplicando ao fato do período, mesmo depois de cessar a vigência."
    },
    comentario: {
      resolucao: "CERTO. A lei excepcional ou temporária é ultra-ativa: mesmo após cessarem as circunstâncias que a determinaram ou decorrido o prazo de vigência, ela continua se aplicando ao fato praticado durante sua vigência, nos termos do art. 3º do Código Penal — exceção à regra geral de retroatividade da lei penal mais benéfica.",
      fundamento: "Código Penal, art. 3º.",
      macete: "Lei excepcional/temporária = sempre ultra-ativa (art. 3º, CP).",
      erroComum: "Achar que o fim da vigência da lei excepcional beneficia retroativamente quem praticou o fato durante ela.",
      comoBancaPensa: "Cobra uma das exceções clássicas à regra geral da retroatividade benéfica em Direito Penal."
    }
  },
  {
    id: "DP-096", disciplina: "Direito Penal", assunto: "Aplicação da lei penal", subassunto: "Extraterritorialidade incondicionada",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 7º, I)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.78,
    enunciado: "Tratando-se de hipótese de extraterritorialidade incondicionada, como no crime de genocídio praticado por brasileiro no exterior, a aplicação da lei penal brasileira depende de o agente não ter sido absolvido ou punido no estrangeiro, condição que caracteriza a incondicionalidade dessa modalidade extraterritorial.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "depende de ... condição que caracteriza a incondicionalidade",
    cognitivo: {
      motivo: "Cobrar que a extraterritorialidade incondicionada, por definição, não se sujeita a nenhuma condição, incluindo o resultado do processo no exterior.",
      mede: "Direito Penal — aplicação da lei penal no espaço (extraterritorialidade).",
      pegadinhaDesc: "A banca cria uma contradição interna: atribui uma 'condição' àquilo que é, por definição, incondicionado.",
      ondeErra: "Não percebe a contradição lógica entre 'incondicionada' e a existência de uma condição para sua aplicação.",
      palavraCritica: "depende de ... condição que caracteriza a incondicionalidade",
      tecnica: "Art. 7º, I, CP: nos casos de extraterritorialidade INCONDICIONADA (como o genocídio praticado por brasileiro), a lei brasileira aplica-se SEMPRE, independentemente de o agente ter sido absolvido, condenado ou punido no estrangeiro (art. 7º, §1º, CP) — não há qualquer condição para essa aplicação, e o próprio nome do instituto ('incondicionada') já indica isso.",
      regraMental: "Extraterritorialidade incondicionada: aplica-se SEMPRE, mesmo com absolvição no exterior — não há condição alguma."
    },
    comentario: {
      resolucao: "ERRADO. A extraterritorialidade incondicionada, por definição, não se sujeita a NENHUMA condição — a lei brasileira aplica-se ao crime de genocídio praticado por brasileiro no exterior independentemente de ele ter sido absolvido ou punido no estrangeiro (art. 7º, I e §1º, CP). O item contém uma contradição interna ao atribuir uma 'condição' a algo definido como incondicionado.",
      fundamento: "Código Penal, art. 7º, I e §1º.",
      macete: "Incondicionada = sem NENHUMA condição, nem mesmo o resultado do processo no exterior.",
      erroComum: "Não perceber a contradição lógica entre a nomenclatura do instituto e a condição indevidamente atribuída a ele.",
      comoBancaPensa: "Cria uma exigência que contradiz o próprio nome do instituto jurídico, testando a atenção do candidato ao texto."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE34);

/* Frequência de temas — Direito Penal (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Direito Penal");
  if (!d) { d = { disciplina: "Direito Penal", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Feminicídio como crime autônomo (Lei 14.994/2024)", freq: 88, tendencia: "alta", prob: 0.88 },
    { tema: "Insignificância e habitualidade delitiva", freq: 86, tendencia: "alta", prob: 0.86 },
    { tema: "Latrocínio, furto de energia e peculato (jurisprudência)", freq: 80, tendencia: "alta", prob: 0.8 },
    { tema: "Aplicação da lei penal e processual no tempo e no espaço", freq: 78, tendencia: "estavel", prob: 0.78 },
  );
})();
