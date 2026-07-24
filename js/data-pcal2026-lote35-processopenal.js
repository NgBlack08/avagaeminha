/* =====================================================================
   CEBRASPE LAB — Lote 35: DIREITO PROCESSUAL PENAL (expansão)
   Cobre inquérito policial (dispensabilidade), prisão preventiva de
   ofício (vedação pós-Pacote Anticrime), prisão temporária em crimes
   hediondos, presunção de inocência e execução da pena, suspensão
   condicional do processo (Lei 9.099/1995) e classificação das
   modalidades de flagrante (art. 302, CPP). Itens 100% originais, com
   gabarito verificado de forma independente a partir do CPP, da Lei
   8.072/1990, da Lei 9.099/1995 e de jurisprudência do STF.
   12 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE35 = [

  {
    id: "PP-059", disciplina: "Processo Penal", assunto: "Inquérito policial", subassunto: "Dispensabilidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (natureza jurídica do inquérito policial)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "O inquérito policial constitui peça dispensável à propositura da ação penal, podendo o titular oferecer a denúncia ou a queixa com base em outros elementos de convicção, ainda que não tenha sido previamente instaurado o inquérito.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dispensável ... outros elementos de convicção",
    cognitivo: {
      motivo: "Cobrar a natureza dispensável e meramente informativa do inquérito policial.",
      mede: "Processo Penal — inquérito policial (natureza jurídica).",
      pegadinhaDesc: "A banca pode afirmar que o inquérito é peça indispensável à ação penal.",
      ondeErra: "Confunde o inquérito com um pressuposto processual, quando na verdade é apenas um dos meios de obter elementos de convicção.",
      palavraCritica: "dispensável",
      tecnica: "O inquérito policial é procedimento administrativo INFORMATIVO e DISPENSÁVEL: o titular da ação penal (MP ou querelante) pode oferecer denúncia ou queixa com base em outras peças de informação (boletim de ocorrência, sindicância, notícia-crime instruída), sem necessidade de inquérito formalmente instaurado.",
      regraMental: "Inquérito policial: dispensável, meramente informativo — não é condição da ação penal."
    },
    comentario: {
      resolucao: "CERTO. O inquérito policial tem natureza administrativa e informativa, sendo DISPENSÁVEL para a propositura da ação penal: o titular pode oferecer denúncia ou queixa com base em outros elementos de convicção (peças de informação), ainda que não tenha sido instaurado inquérito correspondente.",
      fundamento: "Doutrina de Direito Processual Penal — natureza jurídica do inquérito policial.",
      macete: "Inquérito é dispensável — não é condição da ação penal.",
      erroComum: "Tratar o inquérito como pressuposto indispensável da denúncia ou queixa.",
      comoBancaPensa: "Item de fixação sobre a natureza jurídica clássica do inquérito policial."
    }
  },
  {
    id: "PP-060", disciplina: "Processo Penal", assunto: "Inquérito policial", subassunto: "Dispensabilidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (natureza jurídica do inquérito policial)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "O inquérito policial constitui peça indispensável à propositura da ação penal, não podendo o titular oferecer denúncia ou queixa sem que tenha sido previamente instaurado o inquérito correspondente.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "indispensável ... não podendo",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, a dispensabilidade do inquérito policial.",
      mede: "Processo Penal — inquérito policial (natureza jurídica).",
      pegadinhaDesc: "A banca cria uma condição de procedibilidade que o inquérito, na verdade, não representa.",
      ondeErra: "Confunde o inquérito com condição obrigatória e prévia da ação penal.",
      palavraCritica: "indispensável ... não podendo",
      tecnica: "O inquérito policial é DISPENSÁVEL: o titular da ação penal pode oferecer denúncia ou queixa com base em outros elementos de convicção, independentemente de inquérito formalmente instaurado — não existe essa exigência de prévia instauração.",
      regraMental: "Inquérito: dispensável. Denúncia/queixa podem se basear em outras peças de informação."
    },
    comentario: {
      resolucao: "ERRADO. O inquérito policial não é peça indispensável à propositura da ação penal — tem natureza meramente informativa e dispensável, podendo o titular da ação penal oferecer denúncia ou queixa com base em outros elementos de convicção, mesmo sem inquérito previamente instaurado.",
      fundamento: "Doutrina de Direito Processual Penal — natureza jurídica do inquérito policial.",
      macete: "Não existe exigência de inquérito prévio para a ação penal.",
      erroComum: "Criar uma condição de procedibilidade que o CPP não estabelece.",
      comoBancaPensa: "Cria uma exigência inexistente para testar a real compreensão da natureza jurídica do inquérito."
    }
  },
  {
    id: "PP-061", disciplina: "Processo Penal", assunto: "Prisão preventiva", subassunto: "Vedação à decretação de ofício",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 311, com redação da Lei 13.964/2019)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.86,
    enunciado: "Não pode o juiz, no curso do inquérito policial, decretar de ofício a prisão preventiva do investigado, ainda que verifique a presença de fatos novos e contemporâneos que evidenciem risco à ordem pública, dependendo tal medida de representação da autoridade policial ou de requerimento do Ministério Público, do querelante ou do assistente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não pode ... decretar de ofício ... dependendo de representação ou requerimento",
    cognitivo: {
      motivo: "Cobrar a vedação à decretação de ofício da prisão preventiva, introduzida pelo Pacote Anticrime.",
      mede: "Processo Penal — prisão preventiva (Lei 13.964/2019).",
      pegadinhaDesc: "A banca pode afirmar que o juiz mantém o poder de decretar a preventiva de ofício, especialmente no curso do inquérito.",
      ondeErra: "Desconhece a alteração do art. 311, CPP, promovida pela Lei 13.964/2019 (Pacote Anticrime), que vedou a decretação de ofício em qualquer fase.",
      palavraCritica: "não pode ... decretar de ofício",
      tecnica: "Art. 311, CPP (redação da Lei 13.964/2019): a prisão preventiva só pode ser decretada mediante representação da autoridade policial ou requerimento do MP, do querelante ou do assistente — o juiz NÃO pode mais decretá-la de ofício, nem na fase de inquérito, nem no curso do processo.",
      regraMental: "Pacote Anticrime: fim da prisão preventiva de ofício, em qualquer fase (inquérito ou processo)."
    },
    comentario: {
      resolucao: "CERTO. Desde a Lei 13.964/2019 (Pacote Anticrime), o art. 311 do CPP veda a decretação de ofício da prisão preventiva em qualquer fase — seja no curso do inquérito, seja no curso do processo —, exigindo representação da autoridade policial ou requerimento do Ministério Público, do querelante ou do assistente.",
      fundamento: "Código de Processo Penal, art. 311, com redação dada pela Lei nº 13.964/2019.",
      macete: "Prisão preventiva: nunca de ofício, em nenhuma fase, desde o Pacote Anticrime.",
      erroComum: "Achar que o juiz mantém o poder de decretar a preventiva de ofício na fase investigativa.",
      comoBancaPensa: "Cobra atualização legislativa importante, testando se o candidato acompanha o Pacote Anticrime."
    }
  },
  {
    id: "PP-062", disciplina: "Processo Penal", assunto: "Prisão preventiva", subassunto: "Vedação à decretação de ofício",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 311, com redação da Lei 13.964/2019)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.84,
    enunciado: "No curso do inquérito policial, verificando o juiz a presença de fatos novos e contemporâneos que evidenciem risco à ordem pública, poderá ele decretar de ofício a prisão preventiva do investigado.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "poderá ele decretar de ofício",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, a vedação à decretação de ofício da prisão preventiva.",
      mede: "Processo Penal — prisão preventiva (Lei 13.964/2019).",
      pegadinhaDesc: "A banca atribui ao juiz um poder que a Lei 13.964/2019 expressamente suprimiu.",
      ondeErra: "Desconhece a alteração legislativa recente e mantém o entendimento anterior à Lei 13.964/2019.",
      palavraCritica: "poderá ele decretar de ofício",
      tecnica: "Desde a Lei 13.964/2019, o art. 311 do CPP veda a decretação de ofício da prisão preventiva em qualquer fase, inclusive no curso do inquérito — a medida depende de representação da autoridade policial ou requerimento do MP, do querelante ou do assistente.",
      regraMental: "Pós-Pacote Anticrime: juiz NUNCA decreta preventiva de ofício, nem no inquérito, nem no processo."
    },
    comentario: {
      resolucao: "ERRADO. Desde a Lei 13.964/2019 (Pacote Anticrime), é vedado ao juiz decretar a prisão preventiva de ofício em qualquer fase, inclusive no curso do inquérito policial — a medida depende de representação da autoridade policial ou de requerimento do Ministério Público, do querelante ou do assistente (art. 311, CPP).",
      fundamento: "Código de Processo Penal, art. 311, com redação dada pela Lei nº 13.964/2019.",
      macete: "Prisão preventiva de ofício: extinta desde o Pacote Anticrime, em qualquer fase.",
      erroComum: "Manter o entendimento anterior à Lei 13.964/2019, que ainda permitia a decretação de ofício na fase judicial.",
      comoBancaPensa: "Testa se o candidato está atualizado quanto à reforma do Pacote Anticrime."
    }
  },
  {
    id: "PP-063", disciplina: "Processo Penal", assunto: "Prisão temporária", subassunto: "Prazo em crimes hediondos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.072/1990, art. 2º, §4º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.82,
    enunciado: "Por se tratar de crime hediondo, a prisão temporária poderá ser decretada pelo prazo de trinta dias, prorrogável por igual período em caso de extrema e comprovada necessidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "trinta dias, prorrogável por igual período",
    cognitivo: {
      motivo: "Cobrar o prazo diferenciado da prisão temporária em crimes hediondos e equiparados.",
      mede: "Processo Penal — prisão temporária (Lei 8.072/1990).",
      pegadinhaDesc: "A banca pode aplicar o prazo geral (5 dias) à hipótese específica de crime hediondo.",
      ondeErra: "Confunde o prazo geral da Lei 7.960/1989 (5 dias, prorrogáveis por mais 5) com o prazo especial para hediondos.",
      palavraCritica: "trinta dias",
      tecnica: "Lei 8.072/1990, art. 2º, §4º: nos crimes hediondos e equiparados, o prazo da prisão temporária é de 30 dias, prorrogável por igual período em caso de extrema e comprovada necessidade — prazo bem mais longo que o da regra geral (5+5 dias, Lei 7.960/1989).",
      regraMental: "Temporária: regra geral 5+5 dias. Crimes hediondos/equiparados: 30+30 dias."
    },
    comentario: {
      resolucao: "CERTO. Nos crimes hediondos e equiparados, a Lei 8.072/1990 (art. 2º, §4º) estabelece prazo especial de 30 dias para a prisão temporária, prorrogável por igual período em caso de extrema e comprovada necessidade — prazo distinto e mais longo que o da regra geral prevista na Lei 7.960/1989.",
      fundamento: "Lei nº 8.072/1990, art. 2º, §4º.",
      macete: "Hediondo: temporária de 30+30 dias. Regra geral: 5+5 dias.",
      erroComum: "Aplicar o prazo geral de 5 dias também aos crimes hediondos.",
      comoBancaPensa: "Cobra o prazo especial, testando se o candidato memoriza a exceção da Lei de Crimes Hediondos."
    }
  },
  {
    id: "PP-064", disciplina: "Processo Penal", assunto: "Prisão temporária", subassunto: "Prazo em crimes hediondos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.072/1990, art. 2º, §4º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.78,
    enunciado: "Ainda que se trate de crime hediondo, a prisão temporária poderá ser decretada pelo prazo geral de cinco dias, prorrogável por igual período em caso de extrema necessidade, não havendo prazo diferenciado para essa categoria de delitos.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "prazo geral de cinco dias ... não havendo prazo diferenciado",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, o prazo especial da prisão temporária em crimes hediondos.",
      mede: "Processo Penal — prisão temporária (Lei 8.072/1990).",
      pegadinhaDesc: "A banca nega a existência do prazo diferenciado previsto na Lei de Crimes Hediondos.",
      ondeErra: "Aplica o prazo geral (5 dias) aos crimes hediondos, ignorando a regra especial de 30 dias.",
      palavraCritica: "não havendo prazo diferenciado",
      tecnica: "Existe, sim, prazo diferenciado: nos crimes hediondos e equiparados, a prisão temporária é de 30 dias, prorrogável por igual período (Lei 8.072/1990, art. 2º, §4º), e não de 5 dias como na regra geral da Lei 7.960/1989.",
      regraMental: "Hediondo: 30+30 dias de temporária — prazo especial, não o geral de 5+5."
    },
    comentario: {
      resolucao: "ERRADO. Nos crimes hediondos e equiparados, o prazo da prisão temporária é de 30 dias, prorrogável por igual período em caso de extrema e comprovada necessidade (Lei 8.072/1990, art. 2º, §4º) — existe, sim, prazo diferenciado, contrariando a afirmação do item.",
      fundamento: "Lei nº 8.072/1990, art. 2º, §4º.",
      macete: "Hediondo tem prazo próprio (30+30 dias), diferente da regra geral (5+5 dias).",
      erroComum: "Aplicar indevidamente o prazo geral da Lei 7.960/1989 aos crimes hediondos.",
      comoBancaPensa: "Nega a existência de uma regra especial para induzir o candidato a aplicar a regra geral incorretamente."
    }
  },
  {
    id: "PP-065", disciplina: "Processo Penal", assunto: "Princípios constitucionais do processo penal", subassunto: "Presunção de inocência e execução da pena",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (STF, ADCs 43, 44 e 54)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.86,
    enunciado: "Conforme o princípio da presunção de inocência (ou da não culpabilidade) e o entendimento firmado pelo Supremo Tribunal Federal, é vedada a execução da pena antes do trânsito em julgado da sentença penal condenatória, admitida a prisão do acusado, nessa fase, apenas a título cautelar.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "vedada a execução ... apenas a título cautelar",
    cognitivo: {
      motivo: "Cobrar a posição atual do STF sobre a execução provisória da pena.",
      mede: "Processo Penal — princípios constitucionais (presunção de inocência).",
      pegadinhaDesc: "A banca pode afirmar que o STF admite a execução da pena após condenação em segunda instância, mesmo sem trânsito em julgado.",
      ondeErra: "Aplica o entendimento superado de 2016 (execução após 2ª instância), ignorando a reversão de posição do STF em 2019 (ADCs 43, 44 e 54).",
      palavraCritica: "vedada a execução ... apenas a título cautelar",
      tecnica: "Em 2019, o STF (ADCs 43, 44 e 54) fixou que a execução da pena só pode ocorrer após o trânsito em julgado da condenação, sendo vedada a execução provisória — a prisão do acusado antes disso só é admitida a título cautelar (preventiva, temporária), com fundamentação própria, e não como antecipação de pena.",
      regraMental: "STF (posição atual, 2019): execução da pena só após trânsito em julgado; antes disso, só prisão cautelar."
    },
    comentario: {
      resolucao: "CERTO. Em 2019, o STF (ADCs 43, 44 e 54) fixou o entendimento de que é vedada a execução da pena antes do trânsito em julgado da sentença penal condenatória, admitindo-se a prisão do acusado, nessa fase, apenas a título cautelar (preventiva ou temporária), com fundamentação própria de necessidade, e não como antecipação da pena.",
      fundamento: "STF, ADCs 43, 44 e 54 (2019).",
      macete: "Execução da pena: só após trânsito em julgado. Antes disso, só prisão cautelar fundamentada.",
      erroComum: "Aplicar a posição de 2016 (execução após 2ª instância), superada pelo STF em 2019.",
      comoBancaPensa: "Cobra a posição atual e vigente do STF, testando se o candidato está atualizado."
    }
  },
  {
    id: "PP-066", disciplina: "Processo Penal", assunto: "Princípios constitucionais do processo penal", subassunto: "Presunção de inocência e execução da pena",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (STF, ADCs 43, 44 e 54)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.8,
    enunciado: "Conforme o entendimento atualmente vigente no Supremo Tribunal Federal, admite-se a execução da pena imediatamente após a condenação em segunda instância, ainda que pendente recurso especial ou extraordinário, independentemente do trânsito em julgado da sentença condenatória.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "execução ... após a condenação em segunda instância ... independentemente do trânsito em julgado",
    cognitivo: {
      motivo: "Cobrar, na forma do entendimento superado, a posição atual do STF sobre execução provisória da pena.",
      mede: "Processo Penal — princípios constitucionais (presunção de inocência).",
      pegadinhaDesc: "A banca apresenta como 'vigente' um entendimento que o STF já superou em 2019.",
      ondeErra: "Confunde a posição do STF entre 2016-2019 (execução após 2ª instância) com o entendimento atualmente vigente (desde 2019, exige trânsito em julgado).",
      palavraCritica: "entendimento atualmente vigente ... independentemente do trânsito em julgado",
      tecnica: "Desde 2019 (ADCs 43, 44 e 54), o STF NÃO admite mais a execução da pena após condenação em 2ª instância sem trânsito em julgado — esse entendimento foi revertido, prevalecendo hoje a exigência do trânsito em julgado para a execução da pena.",
      regraMental: "Execução após 2ª instância: entendimento SUPERADO (2016-2019). Hoje: exige trânsito em julgado."
    },
    comentario: {
      resolucao: "ERRADO. O entendimento que admitia a execução da pena após condenação em segunda instância foi REVERTIDO pelo STF em 2019 (ADCs 43, 44 e 54) — atualmente, a execução da pena depende do trânsito em julgado da sentença condenatória, admitindo-se, antes disso, apenas prisão cautelar fundamentada.",
      fundamento: "STF, ADCs 43, 44 e 54 (2019).",
      macete: "Execução após 2ª instância: superada desde 2019. Hoje é preciso trânsito em julgado.",
      erroComum: "Apresentar como 'atual' um entendimento que já foi revertido pelo próprio STF.",
      comoBancaPensa: "Testa se o candidato confunde entendimentos históricos já superados com o posicionamento atual da Corte."
    }
  },
  {
    id: "PP-067", disciplina: "Processo Penal", assunto: "Institutos despenalizadores", subassunto: "Suspensão condicional do processo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.099/1995, art. 89)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.78,
    enunciado: "A suspensão condicional do processo, prevista no art. 89 da Lei nº 9.099/1995, aplica-se aos crimes cuja pena mínima cominada seja igual ou inferior a um ano, ainda que o processo não tramite perante o Juizado Especial Criminal, não se restringindo, portanto, às infrações de menor potencial ofensivo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "pena mínima ... um ano ... não se restringindo ... menor potencial ofensivo",
    cognitivo: {
      motivo: "Cobrar que a suspensão condicional do processo não se limita às infrações de competência do JECRIM.",
      mede: "Processo Penal — institutos despenalizadores (Lei 9.099/1995).",
      pegadinhaDesc: "A banca pode restringir indevidamente a suspensão condicional apenas às infrações de menor potencial ofensivo.",
      ondeErra: "Confunde o critério da suspensão condicional (pena MÍNIMA ≤ 1 ano) com o critério de infração de menor potencial ofensivo (pena MÁXIMA ≤ 2 anos).",
      palavraCritica: "não se restringindo ... menor potencial ofensivo",
      tecnica: "Art. 89, Lei 9.099/1995: a suspensão condicional do processo cabe para crimes com pena MÍNIMA igual ou inferior a 1 ano — critério distinto do de infração de menor potencial ofensivo (pena MÁXIMA ≤ 2 anos, art. 61). Muitos crimes de competência do juízo comum (não do JECRIM) têm pena mínima ≤1 ano e, ainda assim, admitem suspensão condicional.",
      regraMental: "Suspensão condicional: pena MÍNIMA ≤1 ano — pode valer até para crimes de competência do juízo comum."
    },
    comentario: {
      resolucao: "CERTO. A suspensão condicional do processo (art. 89, Lei 9.099/1995) exige pena mínima cominada igual ou inferior a 1 ano, critério distinto do de infração de menor potencial ofensivo (pena máxima ≤2 anos) — por isso, pode se aplicar a crimes que tramitam no juízo comum, e não exclusivamente aos de competência do Juizado Especial Criminal.",
      fundamento: "Lei nº 9.099/1995, art. 89.",
      macete: "Suspensão condicional: critério é a pena MÍNIMA (≤1 ano), não a competência do JECRIM.",
      erroComum: "Confundir o critério da suspensão condicional com o de infração de menor potencial ofensivo.",
      comoBancaPensa: "Testa a distinção fina entre os critérios de dois institutos despenalizadores diferentes."
    }
  },
  {
    id: "PP-068", disciplina: "Processo Penal", assunto: "Institutos despenalizadores", subassunto: "Suspensão condicional do processo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.099/1995, art. 89)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.8,
    enunciado: "A suspensão condicional do processo aplica-se exclusivamente às infrações de menor potencial ofensivo, submetidas à competência do Juizado Especial Criminal.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "exclusivamente ... infrações de menor potencial ofensivo",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a suspensão condicional não se restringe ao JECRIM.",
      mede: "Processo Penal — institutos despenalizadores (Lei 9.099/1995).",
      pegadinhaDesc: "A banca restringe indevidamente o instituto às infrações de menor potencial ofensivo.",
      ondeErra: "Confunde o critério de pena mínima (suspensão condicional) com o de pena máxima (menor potencial ofensivo/competência do JECRIM).",
      palavraCritica: "exclusivamente ... menor potencial ofensivo",
      tecnica: "A suspensão condicional do processo exige pena MÍNIMA ≤1 ano (art. 89, Lei 9.099/1995) — critério que pode ser preenchido por crimes com pena MÁXIMA superior a 2 anos (portanto, fora da competência do JECRIM e não classificados como de menor potencial ofensivo).",
      regraMental: "Suspensão condicional ≠ exclusividade do JECRIM — critérios de pena mínima e máxima são diferentes."
    },
    comentario: {
      resolucao: "ERRADO. A suspensão condicional do processo não se restringe às infrações de menor potencial ofensivo nem à competência do Juizado Especial Criminal — aplica-se a qualquer crime cuja pena mínima cominada seja igual ou inferior a 1 ano, ainda que a pena máxima ultrapasse 2 anos e o processo tramite no juízo comum.",
      fundamento: "Lei nº 9.099/1995, art. 89.",
      macete: "Suspensão condicional: olha a pena MÍNIMA, não a competência do JECRIM.",
      erroComum: "Restringir o instituto às infrações de menor potencial ofensivo, ignorando o real critério legal.",
      comoBancaPensa: "Restringe indevidamente um instituto de aplicação mais ampla do que a competência do JECRIM."
    }
  },
  {
    id: "PP-069", disciplina: "Processo Penal", assunto: "Prisão em flagrante", subassunto: "Modalidades de flagrante (art. 302, CPP)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 302)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.82,
    enunciado: "Após subtrair, mediante grave ameaça, um veículo da vítima, o agente empreendeu fuga. Cerca de três horas depois, sem que houvesse qualquer perseguição, foi abordado por policiais em via pública, na posse das chaves e dos documentos do automóvel subtraído, circunstância que fez presumir ser ele o autor do delito. Nessa situação, configura-se hipótese de flagrante impróprio (ou quase-flagrante), por ter sido o agente perseguido, logo após a prática do crime, e encontrado em situação que fazia presumir sua autoria.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "flagrante impróprio ... perseguido",
    cognitivo: {
      motivo: "Cobrar a distinção entre flagrante impróprio (exige perseguição) e flagrante presumido (dispensa perseguição).",
      mede: "Processo Penal — prisão em flagrante (modalidades).",
      pegadinhaDesc: "A banca classifica como flagrante impróprio uma situação em que não houve perseguição, elemento essencial dessa modalidade.",
      ondeErra: "Não percebe a contradição entre a ausência de perseguição no enunciado e a classificação como flagrante impróprio, que pressupõe perseguição.",
      palavraCritica: "flagrante impróprio ... perseguido",
      tecnica: "O flagrante IMPRÓPRIO (art. 302, III, CPP) exige que o agente seja perseguido, logo após o crime, pela autoridade, pelo ofendido ou por qualquer pessoa. Já o flagrante PRESUMIDO (art. 302, IV, CPP) ocorre quando o agente é encontrado, logo depois, com instrumentos, objetos ou papéis que façam presumir sua autoria, SEM que tenha havido perseguição. No caso descrito, não houve perseguição — logo, trata-se de flagrante presumido, não impróprio.",
      regraMental: "Flagrante impróprio: exige perseguição. Flagrante presumido: dispensa perseguição, basta ser encontrado com indícios de autoria."
    },
    comentario: {
      resolucao: "ERRADO. Como o próprio enunciado afirma que não houve qualquer perseguição, a situação não se enquadra no flagrante IMPRÓPRIO (que exige perseguição, art. 302, III, CPP), mas sim no flagrante PRESUMIDO (art. 302, IV, CPP), que dispensa a perseguição e se caracteriza pela descoberta do agente, logo depois do crime, na posse de objetos que façam presumir sua autoria.",
      fundamento: "Código de Processo Penal, art. 302, III e IV.",
      macete: "Sem perseguição = não é impróprio. Encontrado com indícios de autoria, sem perseguir = presumido.",
      erroComum: "Confundir flagrante impróprio (com perseguição) e flagrante presumido (sem perseguição).",
      comoBancaPensa: "Cria uma contradição interna entre a descrição fática (sem perseguição) e a classificação jurídica proposta (impróprio, que exige perseguição)."
    }
  },
  {
    id: "PP-070", disciplina: "Processo Penal", assunto: "Prisão em flagrante", subassunto: "Modalidades de flagrante (art. 302, CPP)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 302)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.8,
    enunciado: "Após subtrair, mediante grave ameaça, um veículo da vítima, o agente empreendeu fuga. Cerca de três horas depois, sem que houvesse qualquer perseguição, foi abordado por policiais em via pública, na posse das chaves e dos documentos do automóvel subtraído. Nessa situação, configura-se hipótese de flagrante presumido, e não impróprio, uma vez que o agente foi encontrado, logo depois do crime, na posse de objetos que fizeram presumir sua autoria, sem que tenha havido perseguição.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "flagrante presumido ... sem que tenha havido perseguição",
    cognitivo: {
      motivo: "Cobrar a correta classificação da modalidade de flagrante quando não há perseguição.",
      mede: "Processo Penal — prisão em flagrante (modalidades).",
      pegadinhaDesc: "A banca pode negar essa classificação, insistindo na exigência de perseguição para qualquer modalidade de quase-flagrante.",
      ondeErra: "Não distingue as duas modalidades de flagrante ficto/quase-flagrante (impróprio x presumido).",
      palavraCritica: "flagrante presumido ... sem que tenha havido perseguição",
      tecnica: "O flagrante PRESUMIDO (art. 302, IV, CPP) ocorre quando o agente é encontrado, logo depois do crime, com instrumentos, armas, objetos ou papéis que façam presumir ser ele o autor da infração — dispensando a perseguição, que é elemento próprio apenas do flagrante IMPRÓPRIO (art. 302, III).",
      regraMental: "Sem perseguição + encontrado com indícios de autoria = flagrante presumido (art. 302, IV, CPP)."
    },
    comentario: {
      resolucao: "CERTO. Por não ter havido perseguição, a hipótese não se enquadra no flagrante impróprio — trata-se de flagrante presumido (art. 302, IV, CPP), caracterizado pela descoberta do agente, logo depois do crime, na posse de objetos (no caso, chaves e documentos do veículo) que fazem presumir sua autoria.",
      fundamento: "Código de Processo Penal, art. 302, IV.",
      macete: "Encontrado com indícios de autoria, sem perseguição = flagrante presumido.",
      erroComum: "Exigir perseguição para toda e qualquer modalidade de quase-flagrante.",
      comoBancaPensa: "Consolida, na forma correta, a distinção testada de forma invertida no item anterior."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE35);

/* Frequência de temas — Processo Penal (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Processo Penal");
  if (!d) { d = { disciplina: "Processo Penal", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Prisão preventiva: vedação à decretação de ofício (Pacote Anticrime)", freq: 88, tendencia: "alta", prob: 0.88 },
    { tema: "Presunção de inocência e execução da pena (STF)", freq: 86, tendencia: "alta", prob: 0.86 },
    { tema: "Modalidades de flagrante (impróprio x presumido)", freq: 80, tendencia: "alta", prob: 0.8 },
    { tema: "Institutos despenalizadores (Lei 9.099/1995)", freq: 78, tendencia: "estavel", prob: 0.78 },
  );
})();
