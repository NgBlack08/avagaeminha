/* =====================================================================
   QUESTLAB — Lote 49: LAVAGEM DE DINHEIRO (Lei 9.613/1998)
   Baseado em material de terceiros contendo 7 questões REAIS de
   Certo/Errado de provas anteriores da banca CEBRASPE (TCE-SC, PC-SE,
   MPE-CE, TC-DF, PF, MJSP), com gabarito oficial, fundamentação nos
   dispositivos legais e doutrina (Renato Brasileiro de Lima).
   Cada enunciado ORIGINAL foi redigido do zero, testando o mesmo
   tema e a mesma resposta correta identificada pela banca, com um
   PAR C/E adicional (versão espelhada) para reforçar cada conceito.
   Temas já amplamente cobertos no banco (as três fases da lavagem em
   sua ordem correta/incorreta, autolavagem, autonomia do processo
   frente ao crime antecedente, pena base do art. 1º, descrição geral
   dos benefícios da colaboração premiada) foram DELIBERADAMENTE
   OMITIDOS ou abordados sob ângulo distinto para evitar redundância.
   Gabarito de cada item novo verificado de forma independente.
   12 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE49 = [

  /* ===== ORIGEM ILÍCITA COMO PRESSUPOSTO DO TIPO (ART. 1º) ===== */
  {
    id: "LE-155", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Origem ilícita como pressuposto do tipo (art. 1º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, art. 1º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.82,
    enunciado: "O crime de lavagem de dinheiro é acessório em relação a uma infração penal antecedente, de modo que, se os recursos ocultados ou dissimulados tiverem origem exclusivamente lícita, falta o pressuposto do tipo do art. 1º da Lei nº 9.613/1998, não havendo, portanto, lavagem de capitais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "origem exclusivamente lícita ... falta o pressuposto do tipo",
    cognitivo: {
      motivo: "Cobrar que a lavagem de dinheiro exige, como pressuposto do tipo, que os bens sejam provenientes de infração penal — recursos de origem lícita não configuram o crime.",
      palavraCritica: "origem exclusivamente lícita ... falta o pressuposto do tipo",
    },
    comentario: {
      resolucao: "CERTO. A lavagem de dinheiro é crime acessório (parasitário), pressupondo que os bens ocultados ou dissimulados sejam provenientes, direta ou indiretamente, de infração penal (art. 1º da Lei 9.613/1998). Se os recursos têm origem exclusivamente lícita, falta o pressuposto do tipo, e não há lavagem de capitais.",
      fundamento: "Lei 9.613/1998, art. 1º.",
      macete: "Lavagem é crime parasitário: sem origem ilícita dos bens, não há o tipo do art. 1º.",
      erroComum: "Achar que qualquer processo de desvinculação de recursos de sua origem, mesmo lícita, configura lavagem de dinheiro.",
      comoBancaPensa: "Item 'limpo' que reforça a natureza acessória do crime e a exigência de origem ilícita dos valores."
    }
  },
  {
    id: "LE-156", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Origem ilícita como pressuposto do tipo (art. 1º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, art. 1º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "Um processo financeiro que tenha por objetivo desvincular determinado montante em dinheiro de sua operação de origem constitui lavagem de dinheiro, ainda que os recursos tenham sido obtidos licitamente, uma vez que a Lei nº 9.613/1998 não exige a origem ilícita dos valores para a configuração do tipo penal.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "ainda que ... obtidos licitamente ... não exige a origem ilícita",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a origem ilícita dos valores é elemento essencial (e não dispensável) do tipo de lavagem.",
      palavraCritica: "ainda que ... obtidos licitamente ... não exige a origem ilícita",
    },
    comentario: {
      resolucao: "ERRADO. A Lei 9.613/1998 exige, como pressuposto do tipo do art. 1º, que os bens ocultados ou dissimulados sejam provenientes de infração penal. Recursos obtidos licitamente não configuram lavagem de dinheiro — a lei não dispensa a origem ilícita dos valores, ao contrário do que afirma o item.",
      fundamento: "Lei 9.613/1998, art. 1º.",
      macete: "Origem ilícita é elemento nuclear do tipo — nunca é dispensada pela lei.",
      erroComum: "Achar que a Lei 9.613/1998 pune a mera desvinculação de recursos de sua origem, independentemente de sua licitude.",
      comoBancaPensa: "Afirma expressamente uma dispensa legal inexistente, testando se o candidato confia na literalidade sem verificar o texto."
    }
  },

  /* ===== TERCEIRO QUE NÃO PARTICIPOU DO CRIME ANTECEDENTE (CRIME COMUM) ===== */
  {
    id: "LE-157", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Sujeito ativo — crime comum, sem exigência de participação no antecedente",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, arts. 1º e 2º, II)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "O crime de lavagem de dinheiro é crime comum, podendo ser praticado por qualquer pessoa, inclusive por um terceiro que nunca tenha integrado o crime antecedente, bastando que oculte ou dissimule bens, direitos ou valores dele provenientes.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "crime comum ... terceiro que nunca tenha integrado o crime antecedente",
    cognitivo: {
      motivo: "Cobrar que a lavagem é crime comum e que a participação no crime antecedente não é requisito para ser sujeito ativo.",
      palavraCritica: "terceiro que nunca tenha integrado o crime antecedente",
    },
    comentario: {
      resolucao: "CERTO. O crime de lavagem de dinheiro é comum, podendo ser praticado por qualquer pessoa — inclusive por um terceiro que nunca tenha integrado o crime antecedente —, bastando que oculte ou dissimule bens, direitos ou valores dele provenientes (art. 1º c/c art. 2º, II, da Lei 9.613/1998).",
      fundamento: "Lei 9.613/1998, art. 1º e art. 2º, II.",
      macete: "Lavagem é crime comum: até quem nunca cometeu o crime-base pode ser o 'lavador'.",
      erroComum: "Exigir que o sujeito ativo da lavagem tenha necessariamente participado, como autor ou partícipe, do crime antecedente.",
      comoBancaPensa: "Item 'limpo' que reforça a amplitude do sujeito ativo, incluindo expressamente quem nunca integrou o crime-base."
    }
  },
  {
    id: "LE-158", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Sujeito ativo — crime comum, sem exigência de participação no antecedente",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, arts. 1º e 2º, II)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "Para que se configure o crime de lavagem de dinheiro, é necessário que o agente tenha participado do crime antecedente, seja como autor, seja como partícipe, não podendo um terceiro que nunca integrou o crime-base ser responsabilizado por ocultar ou dissimular os bens dele provenientes.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "é necessário que o agente tenha participado ... não podendo um terceiro",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a lavagem não exige participação prévia no crime antecedente, podendo o sujeito ativo ser qualquer pessoa.",
      palavraCritica: "é necessário que o agente tenha participado ... não podendo um terceiro",
    },
    comentario: {
      resolucao: "ERRADO. Não é necessário que o agente tenha participado do crime antecedente para responder por lavagem de dinheiro — trata-se de crime comum, podendo um terceiro que nunca integrou o crime-base ser responsabilizado por ocultar ou dissimular bens dele provenientes (art. 1º c/c art. 2º, II, da Lei 9.613/1998).",
      fundamento: "Lei 9.613/1998, art. 1º e art. 2º, II.",
      macete: "Nunca existe exigência de 'participação no crime antecedente' para a lavagem — ela é crime comum e autônomo.",
      erroComum: "Restringir o sujeito ativo da lavagem apenas a quem também cometeu o crime-base.",
      comoBancaPensa: "Cria uma exigência inexistente (participação no antecedente) para restringir indevidamente o alcance do sujeito ativo."
    }
  },

  /* ===== CAUSA DE AUMENTO — ATIVO VIRTUAL, REITERAÇÃO, ORGANIZAÇÃO CRIMINOSA (ART. 1º, § 4º) ===== */
  {
    id: "LE-159", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Causa de aumento — ativo virtual, reiteração, organização criminosa (art. 1º, § 4º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, art. 1º, § 4º, redação da Lei 14.478/2022)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "A pena do crime de lavagem de dinheiro será aumentada de um a dois terços se o crime for cometido de forma reiterada, por intermédio de organização criminosa ou por meio da utilização de ativo virtual, sendo essas três hipóteses alternativas, bastando a incidência de uma delas para a aplicação da majorante.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "aumentada de um a dois terços ... hipóteses alternativas",
    cognitivo: {
      motivo: "Cobrar as três hipóteses alternativas do art. 1º, § 4º (reiteração, organização criminosa, ativo virtual) e sua causa de aumento de 1/3 a 2/3.",
      palavraCritica: "hipóteses alternativas ... bastando a incidência de uma delas",
    },
    comentario: {
      resolucao: "CERTO. O art. 1º, § 4º, da Lei 9.613/1998 prevê aumento de 1/3 a 2/3 se o crime de lavagem for cometido de forma reiterada, por intermédio de organização criminosa ou por meio de ativo virtual (hipótese incluída pela Lei 14.478/2022) — são hipóteses alternativas, bastando uma delas para a incidência da majorante.",
      fundamento: "Lei 9.613/1998, art. 1º, § 4º (redação da Lei 14.478/2022).",
      macete: "Reiteração, organização criminosa ou ativo virtual: qualquer uma já basta para o aumento de 1/3 a 2/3.",
      erroComum: "Exigir a presença simultânea das três hipóteses para a aplicação da causa de aumento.",
      comoBancaPensa: "Item 'limpo' que exige conhecer a atualização legislativa (criptoativos) e o caráter alternativo das hipóteses."
    }
  },
  {
    id: "LE-160", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Causa de aumento — ativo virtual, reiteração, organização criminosa (art. 1º, § 4º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, art. 1º, § 4º, redação da Lei 14.478/2022)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "A pena do crime de lavagem de dinheiro somente será aumentada de um a dois terços se estiverem simultaneamente presentes a prática reiterada do crime, o cometimento por intermédio de organização criminosa e a utilização de ativo virtual, não bastando a ocorrência isolada de qualquer uma dessas circunstâncias.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "somente ... simultaneamente presentes ... não bastando a ocorrência isolada",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que basta a ocorrência de uma das três hipóteses (reiteração, organização criminosa, ativo virtual) para a majorante incidir.",
      palavraCritica: "somente ... simultaneamente ... não bastando a ocorrência isolada",
    },
    comentario: {
      resolucao: "ERRADO. As três hipóteses do art. 1º, § 4º, da Lei 9.613/1998 (reiteração, organização criminosa, ativo virtual) são alternativas e autônomas — basta a ocorrência isolada de qualquer uma delas para a incidência do aumento de 1/3 a 2/3, não sendo necessária sua presença simultânea.",
      fundamento: "Lei 9.613/1998, art. 1º, § 4º (redação da Lei 14.478/2022).",
      macete: "As três hipóteses do § 4º nunca precisam ocorrer juntas — cada uma isoladamente já ativa o aumento.",
      erroComum: "Exigir a cumulação das três hipóteses (reiteração + organização criminosa + ativo virtual) para aplicar a majorante.",
      comoBancaPensa: "Transforma hipóteses alternativas em requisitos cumulativos, dificultando indevidamente a aplicação da causa de aumento."
    }
  },

  /* ===== COLABORAÇÃO PREMIADA — SEM EXIGÊNCIA DE ACORDO PRÉVIO (ART. 1º, § 5º) ===== */
  {
    id: "LE-161", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Colaboração premiada — sem exigência de acordo prévio formal (art. 1º, § 5º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, art. 1º, § 5º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "Os benefícios da colaboração premiada previstos no art. 1º, § 5º, da Lei nº 9.613/1998 podem ser aplicados pelo juiz a qualquer tempo, não havendo exigência de prévio acordo formal homologado judicialmente antes do oferecimento da denúncia para sua concessão.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "a qualquer tempo ... não havendo exigência de prévio acordo formal",
    cognitivo: {
      motivo: "Cobrar que a colaboração premiada da Lei de Lavagem pode ser aplicada 'a qualquer tempo', sem exigência de acordo formal prévio homologado antes da denúncia.",
      palavraCritica: "a qualquer tempo ... não havendo exigência",
    },
    comentario: {
      resolucao: "CERTO. O art. 1º, § 5º, da Lei 9.613/1998 permite que os benefícios da colaboração premiada sejam aplicados pelo juiz a qualquer tempo, quando houver colaboração espontânea do autor, coautor ou partícipe — não havendo exigência de acordo formal homologado judicialmente antes do oferecimento da denúncia.",
      fundamento: "Lei 9.613/1998, art. 1º, § 5º.",
      macete: "'A qualquer tempo' é a expressão-chave: não existe prazo ou formalidade prévia obrigatória para a colaboração na lavagem.",
      erroComum: "Exigir acordo formal homologado antes da denúncia como condição para os benefícios da colaboração.",
      comoBancaPensa: "Item 'limpo' que reforça a flexibilidade temporal e a informalidade da colaboração premiada nesse diploma específico."
    }
  },
  {
    id: "LE-162", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Colaboração premiada — sem exigência de acordo prévio formal (art. 1º, § 5º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, art. 1º, § 5º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.74,
    enunciado: "A colaboração premiada, no âmbito do processo penal por crime de lavagem de dinheiro, exige acordo homologado judicialmente antes do oferecimento da denúncia, sob pena de nulidade dos benefícios eventualmente concedidos ao colaborador.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "exige acordo homologado ... antes do oferecimento da denúncia, sob pena de nulidade",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que não existe exigência de acordo prévio homologado antes da denúncia para a colaboração premiada na Lei de Lavagem.",
      palavraCritica: "exige acordo homologado ... sob pena de nulidade",
    },
    comentario: {
      resolucao: "ERRADO. A colaboração premiada do art. 1º, § 5º, da Lei 9.613/1998 pode ensejar redução de pena, perdão judicial ou substituição, aplicada pelo juiz 'a qualquer tempo' — não há exigência de acordo formal homologado antes da denúncia, nem nulidade pela ausência desse acordo prévio.",
      fundamento: "Lei 9.613/1998, art. 1º, § 5º.",
      macete: "Nunca existe 'nulidade por falta de acordo prévio homologado' na colaboração da Lei de Lavagem — o benefício é aplicável a qualquer tempo.",
      erroComum: "Criar uma formalidade (acordo prévio homologado) e uma sanção (nulidade) inexistentes na lei para a colaboração premiada.",
      comoBancaPensa: "Insere uma exigência processual plausível, mas inexistente no dispositivo, para testar a confiança cega do candidato."
    }
  },

  /* ===== MEDIDAS ASSECURATÓRIAS — OITIVA OBRIGATÓRIA DO MP (ART. 4º-B) ===== */
  {
    id: "LE-163", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Suspensão de medidas assecuratórias e prisão — oitiva do MP (art. 4º-B)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, art. 4º-B)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.82,
    enunciado: "A ordem de prisão de pessoas ou as medidas assecuratórias de bens, direitos ou valores poderão ser suspensas pelo juiz, ouvido o Ministério Público, quando a sua execução imediata puder comprometer as investigações em curso.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "poderão ser suspensas ... ouvido o Ministério Público",
    cognitivo: {
      motivo: "Cobrar que a suspensão de prisão/medidas assecuratórias pelo juiz sempre exige a oitiva do Ministério Público (art. 4º-B).",
      palavraCritica: "ouvido o Ministério Público",
    },
    comentario: {
      resolucao: "CERTO. Nos termos do art. 4º-B da Lei 9.613/1998, a ordem de prisão de pessoas ou as medidas assecuratórias de bens, direitos ou valores poderão ser suspensas pelo juiz, ouvido o Ministério Público, quando a execução imediata puder comprometer as investigações em curso.",
      fundamento: "Lei 9.613/1998, art. 4º-B.",
      macete: "Toda a sistemática cautelar da Lei de Lavagem exige a manifestação do Ministério Público — sem exceção.",
      erroComum: "Achar que a urgência da medida dispensa, em qualquer hipótese, a oitiva do Ministério Público.",
      comoBancaPensa: "Item 'limpo' que reproduz fielmente o pressuposto processual do art. 4º-B."
    }
  },
  {
    id: "LE-164", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Suspensão de medidas assecuratórias e prisão — oitiva do MP (art. 4º-B)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, art. 4º-B)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "As medidas assecuratórias de bens, direitos ou valores e a ordem de prisão de pessoas poderão ser suspensas imediatamente pelo juiz quando a sua pronta execução puder comprometer as investigações em curso, sendo dispensada a oitiva do Ministério Público em razão da urgência do ato processual.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "sendo dispensada a oitiva do Ministério Público",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a oitiva do Ministério Público nunca é dispensada na suspensão de prisão/medidas assecuratórias, mesmo em caso de urgência.",
      palavraCritica: "sendo dispensada a oitiva do Ministério Público",
    },
    comentario: {
      resolucao: "ERRADO. Nos termos do art. 4º-B da Lei 9.613/1998, a suspensão da ordem de prisão ou das medidas assecuratórias pelo juiz exige, sempre, que o Ministério Público seja ouvido — a urgência do ato processual não dispensa essa oitiva, que é pressuposto do ato, e não mera formalidade.",
      fundamento: "Lei 9.613/1998, art. 4º-B.",
      macete: "Nunca existe 'dispensa da oitiva do MP por urgência' na sistemática cautelar da Lei de Lavagem.",
      erroComum: "Achar que a urgência do ato processual autoriza o juiz a suspender a medida sem ouvir o Ministério Público.",
      comoBancaPensa: "Cria uma dispensa processual inexistente, justificada por uma urgência que a lei não trata como excludente da oitiva do MP."
    }
  },

  /* ===== AFASTAMENTO DE SERVIDOR PÚBLICO INDICIADO — SEM PREJUÍZO DE REMUNERAÇÃO (ART. 17-D) ===== */
  {
    id: "LE-165", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Afastamento de servidor público indiciado (art. 17-D)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, art. 17-D)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Em caso de indiciamento de servidor público pela prática de crime de lavagem de dinheiro, este será afastado do exercício do cargo, emprego ou função, sem prejuízo de sua remuneração e dos demais direitos previstos em lei, até que o juiz competente autorize, em decisão fundamentada, o seu retorno.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sem prejuízo de sua remuneração ... decisão fundamentada",
    cognitivo: {
      motivo: "Cobrar que o afastamento do servidor indiciado por lavagem se dá sem prejuízo de remuneração, mediante decisão judicial fundamentada.",
      palavraCritica: "sem prejuízo de sua remuneração ... decisão fundamentada",
    },
    comentario: {
      resolucao: "CERTO. Nos termos do art. 17-D da Lei 9.613/1998, o servidor público indiciado por lavagem de dinheiro será afastado do cargo, emprego ou função, sem prejuízo de sua remuneração e dos demais direitos previstos em lei, até que o juiz competente autorize, em decisão fundamentada, o seu retorno.",
      fundamento: "Lei 9.613/1998, art. 17-D; STF (interpretação conforme, afastando o automatismo do afastamento por mero indiciamento).",
      macete: "Afastamento por indiciamento em lavagem: sempre SEM prejuízo de remuneração, com decisão fundamentada do juiz.",
      erroComum: "Achar que o servidor afastado por indiciamento perde a remuneração até a decisão final do processo.",
      comoBancaPensa: "Item 'limpo' que reforça, na forma correta, a proteção remuneratória do servidor durante o afastamento cautelar."
    }
  },
  {
    id: "LE-166", disciplina: "Legislação Especial", assunto: "Lavagem de Dinheiro", subassunto: "Afastamento de servidor público indiciado (art. 17-D)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.613/1998, art. 17-D)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "Servidor público indiciado, em tese, pela prática de crime de lavagem de dinheiro deverá ser afastado imediatamente do cargo ou função, com prejuízo de remunerações, até que o juiz competente autorize o seu retorno às atividades.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "afastado imediatamente ... com prejuízo de remunerações",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o afastamento do servidor indiciado se dá sem prejuízo de remuneração, e não de forma automática/imediata pelo mero indiciamento.",
      palavraCritica: "afastado imediatamente ... com prejuízo de remunerações",
    },
    comentario: {
      resolucao: "ERRADO. Nos termos do art. 17-D da Lei 9.613/1998, o servidor público indiciado por lavagem de dinheiro será afastado do cargo ou função SEM PREJUÍZO de remuneração e demais direitos previstos em lei — e não com prejuízo, como afirma o item —, até que o juiz competente autorize, em decisão fundamentada, o seu retorno.",
      fundamento: "Lei 9.613/1998, art. 17-D; STF (interpretação conforme, afastando o automatismo do afastamento por mero indiciamento).",
      macete: "'Com prejuízo de remunerações' está sempre errado nesse dispositivo — a lei garante remuneração durante o afastamento.",
      erroComum: "Achar que o servidor afastado por indiciamento em crime de lavagem perde sua remuneração durante o afastamento.",
      comoBancaPensa: "Inverte a proteção remuneratória expressamente prevista no dispositivo, testando a leitura atenta do texto legal."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE49);

/* Frequência de temas — Legislação Especial (Lavagem de Dinheiro) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Legislação Especial");
  if (!d) { d = { disciplina: "Legislação Especial", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Origem ilícita e sujeito ativo da lavagem (arts. 1º e 2º, II)", freq: 80, tendencia: "alta", prob: 0.8 },
    { tema: "Causa de aumento — ativo virtual, reiteração, organização criminosa (art. 1º, § 4º)", freq: 82, tendencia: "alta", prob: 0.82 },
    { tema: "Colaboração premiada e medidas assecuratórias (art. 1º, § 5º e art. 4º-B)", freq: 78, tendencia: "media", prob: 0.78 },
    { tema: "Afastamento de servidor público indiciado (art. 17-D)", freq: 78, tendencia: "media", prob: 0.78 },
  );
})();
