/* =====================================================================
   QUESTLAB — Lote 48: LEGISLAÇÃO EXTRAVAGANTE
   Crimes contra a ordem tributária, econômica e as relações de
   consumo (Lei 8.137/1990) e crimes contra a ordem econômica —
   combustíveis e usurpação de bens da União (Lei 8.176/1991)
   Baseado em material de terceiros contendo 7 questões REAIS de
   Certo/Errado de provas anteriores (Quadrix, CEBRASPE, banca do
   MPE-SC), com gabarito oficial, fundamentação nos dispositivos
   legais e doutrina. Cada enunciado ORIGINAL foi redigido do zero,
   testando o mesmo tema e a mesma resposta correta identificada
   pela banca, com um PAR C/E adicional (versão espelhada) para
   reforçar cada conceito. Temas já cobertos no banco (Súmula
   Vinculante 24 em sua formulação básica, tipicidade geral da
   usurpação, art. 1º, I, da Lei 8.176/1991) foram DELIBERADAMENTE
   OMITIDOS ou abordados sob ângulo distinto para evitar redundância.
   Gabarito de cada item novo verificado de forma independente.
   14 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE48 = [

  /* ===== CRIMES COMUNS x FUNCIONAIS (LEI 8.137/1990, ARTS. 1º A 3º) ===== */
  {
    id: "LE-141", disciplina: "Legislação Especial", assunto: "Crimes contra a ordem tributária", subassunto: "Crimes comuns x funcionais (arts. 1º a 3º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.137/1990, arts. 1º a 3º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Os crimes contra a ordem tributária previstos nos arts. 1º e 2º da Lei nº 8.137/1990 são crimes comuns, podendo ser praticados por qualquer pessoa que tenha dever jurídico relacionado ao tributo, sendo a qualidade especial de funcionário público exigida apenas nos crimes funcionais do art. 3º, estes sim crimes próprios.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "crimes comuns ... qualquer pessoa ... crimes próprios ... art. 3º",
    cognitivo: {
      motivo: "Cobrar que os crimes tributários dos arts. 1º e 2º são comuns (qualquer pessoa), e só os do art. 3º são próprios (funcionário público).",
      palavraCritica: "crimes comuns ... crimes próprios",
    },
    comentario: {
      resolucao: "CERTO. Os crimes contra a ordem tributária dos arts. 1º e 2º da Lei 8.137/1990 são comuns, podendo ser praticados por qualquer pessoa com dever jurídico relacionado ao tributo. A qualidade especial de funcionário público é exigida apenas nos crimes funcionais do art. 3º, que são, estes sim, crimes próprios, praticados no âmbito da administração fazendária.",
      fundamento: "Lei 8.137/1990, arts. 1º a 3º.",
      macete: "Arts. 1º/2º = comuns (qualquer pessoa). Art. 3º = próprios (só funcionário público).",
      erroComum: "Generalizar, afirmando que todos os crimes tributários exigem a condição de quem exerce poder de decisão em estabelecimento privado.",
      comoBancaPensa: "Item 'limpo' que estabelece corretamente a regra geral (crime comum) e sua exceção (crime funcional/próprio)."
    }
  },
  {
    id: "LE-142", disciplina: "Legislação Especial", assunto: "Crimes contra a ordem tributária", subassunto: "Crimes comuns x funcionais (arts. 1º a 3º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.137/1990, arts. 1º a 3º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "Os crimes contra a ordem tributária são, em sua totalidade, considerados crimes próprios, sendo praticados exclusivamente por aqueles que exercem poder de decisão em estabelecimentos privados que realizam qualquer atividade econômica.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "em sua totalidade ... crimes próprios ... exclusivamente",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que apenas os crimes funcionais do art. 3º são próprios; os dos arts. 1º e 2º são comuns.",
      palavraCritica: "em sua totalidade ... exclusivamente",
    },
    comentario: {
      resolucao: "ERRADO. Os crimes contra a ordem tributária dos arts. 1º e 2º da Lei 8.137/1990 são comuns, podendo ser praticados por qualquer pessoa com dever jurídico relacionado ao tributo. Apenas os crimes funcionais do art. 3º são próprios, exigindo a condição de funcionário público — dizer que todos são próprios e exclusivos de quem decide em estabelecimento privado contraria a lei.",
      fundamento: "Lei 8.137/1990, arts. 1º a 3º.",
      macete: "Generalizar 'crime próprio' para toda a lei é sempre erro — a regra é crime comum (arts. 1º/2º).",
      erroComum: "Tratar a exceção (crime funcional do art. 3º) como se fosse a regra geral de toda a lei.",
      comoBancaPensa: "Generaliza a exceção (crime próprio) para toda a lei, invertendo a proporção real entre regra e exceção."
    }
  },

  /* ===== NOTA FISCAL — CRIME COMUM PUNIDO COM RECLUSÃO (ART. 1º, V) ===== */
  {
    id: "LE-143", disciplina: "Legislação Especial", assunto: "Crimes contra a ordem tributária", subassunto: "Negar/deixar de fornecer nota fiscal (art. 1º, V)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.137/1990, art. 1º, V)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.82,
    enunciado: "Constitui crime contra a ordem tributária comum, e não crime funcional, negar ou deixar de fornecer, quando obrigatório, nota fiscal ou documento equivalente relativo a venda de mercadoria ou prestação de serviço, ou fornecê-la em desacordo com a legislação, conduta punida com reclusão, e não com detenção.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "crime ... comum ... não crime funcional ... reclusão, e não ... detenção",
    cognitivo: {
      motivo: "Cobrar que negar/deixar de fornecer nota fiscal (art. 1º, V) é crime comum (não funcional) punido com reclusão (não detenção).",
      palavraCritica: "crime ... comum ... reclusão",
    },
    comentario: {
      resolucao: "CERTO. A conduta de negar ou deixar de fornecer, quando obrigatório, nota fiscal ou documento equivalente relativo a venda de mercadoria ou prestação de serviço, ou fornecê-la em desacordo com a legislação (art. 1º, V, da Lei 8.137/1990), é crime contra a ordem tributária comum — e não funcional —, punido com reclusão de 2 a 5 anos, e multa, e não com detenção.",
      fundamento: "Lei 8.137/1990, art. 1º, V.",
      macete: "Nota fiscal não fornecida: comum + reclusão. A assertiva que junta 'funcional' e 'detenção' está sempre errada.",
      erroComum: "Classificar essa conduta como crime funcional ou atribuir-lhe pena de detenção.",
      comoBancaPensa: "Item 'limpo' que corrige, na forma positiva, um dos erros mais cobrados do tema (crime funcional + detenção)."
    }
  },
  {
    id: "LE-144", disciplina: "Legislação Especial", assunto: "Crimes contra a ordem tributária", subassunto: "Negar/deixar de fornecer nota fiscal (art. 1º, V)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.137/1990, art. 1º, V)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "Constitui crime funcional contra a ordem tributária, punível com detenção, negar ou deixar de fornecer, quando obrigatório, nota fiscal ou documento equivalente relativo a venda de mercadoria ou prestação de serviço, ou fornecê-la em desacordo com a legislação.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "crime funcional ... punível com detenção",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a conduta é crime comum (não funcional) e punida com reclusão (não detenção).",
      palavraCritica: "crime funcional ... detenção",
    },
    comentario: {
      resolucao: "ERRADO. A conduta de negar ou deixar de fornecer, quando obrigatório, nota fiscal relativa a venda de mercadoria ou prestação de serviço (art. 1º, V, da Lei 8.137/1990) é crime contra a ordem tributária COMUM — e não funcional —, punido com RECLUSÃO de 2 a 5 anos, e multa — e não detenção.",
      fundamento: "Lei 8.137/1990, art. 1º, V.",
      macete: "Nota fiscal não fornecida: nunca é 'funcional + detenção' — é sempre 'comum + reclusão'.",
      erroComum: "Classificar a conduta do art. 1º, V, como crime funcional punido com detenção.",
      comoBancaPensa: "Combina dois erros técnicos na mesma assertiva (natureza do crime e tipo de pena) para dobrar a chance de indução ao erro."
    }
  },

  /* ===== MERO INADIMPLEMENTO NÃO É CRIME — EXIGÊNCIA DE DOLO/FRAUDE ===== */
  {
    id: "LE-145", disciplina: "Legislação Especial", assunto: "Crimes contra a ordem tributária", subassunto: "Inadimplemento sem fraude — ilícito administrativo, não crime",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.137/1990, art. 1º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "O mero recolhimento de tributo a menor, desacompanhado de fraude, simulação ou qualquer outro meio ardiloso, não caracteriza crime contra a ordem tributária, resolvendo-se a conduta do contribuinte exclusivamente na esfera administrativa, por meio de cobrança, juros e multa moratória.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não caracteriza crime ... exclusivamente na esfera administrativa",
    cognitivo: {
      motivo: "Cobrar que os crimes da Lei 8.137/1990 exigem dolo/fraude, e que o mero inadimplemento tributário é apenas ilícito administrativo.",
      palavraCritica: "não caracteriza crime ... exclusivamente na esfera administrativa",
    },
    comentario: {
      resolucao: "CERTO. O mero recolhimento de tributo a menor, sem fraude, simulação ou outro meio ardiloso, não caracteriza crime contra a ordem tributária — resolve-se exclusivamente na esfera administrativa, por meio de cobrança tributária, juros e multa moratória, sem repercussão penal.",
      fundamento: "Lei 8.137/1990, art. 1º (interpretação sistemática — exigência de dolo e fraude).",
      macete: "Sem dolo/fraude: só ilícito administrativo. Nunca há crime tributário por mero inadimplemento.",
      erroComum: "Achar que qualquer recolhimento a menor de tributo já configura, por si só, crime punível com reclusão.",
      comoBancaPensa: "Item 'limpo' que reforça a distinção central entre inadimplemento tributário simples e crime doloso/fraudulento."
    }
  },
  {
    id: "LE-146", disciplina: "Legislação Especial", assunto: "Crimes contra a ordem tributária", subassunto: "Inadimplemento sem fraude — ilícito administrativo, não crime",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.137/1990, art. 1º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "O recolhimento de valores a menor relativos a tributos, ainda que não comprovada fraude dolosa, configura crime contra a ordem tributária passível de pena de reclusão, uma vez que a discrepância entre o valor devido e o valor recolhido é, por si só, suficiente para a tipificação penal.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "ainda que não comprovada fraude dolosa ... passível de pena de reclusão",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a ausência de dolo/fraude afasta a tipicidade penal, restando apenas o ilícito administrativo.",
      palavraCritica: "ainda que não comprovada fraude dolosa ... por si só, suficiente",
    },
    comentario: {
      resolucao: "ERRADO. O mero recolhimento de valores a menor relativos a tributos, sem a comprovação de fraude dolosa, não configura crime contra a ordem tributária — a conduta resolve-se exclusivamente na esfera administrativa, por meio de cobrança, juros e multa moratória, não sendo passível de pena de reclusão.",
      fundamento: "Lei 8.137/1990, art. 1º (interpretação sistemática — exigência de dolo e fraude).",
      macete: "Nunca existe 'crime tributário objetivo' — dolo e fraude são indispensáveis.",
      erroComum: "Tratar a mera diferença entre valor devido e valor recolhido como suficiente para a tipificação penal, dispensando o dolo.",
      comoBancaPensa: "Explicitamente dispensa o elemento subjetivo (dolo/fraude) para testar se o candidato sabe que ele é indispensável."
    }
  },

  /* ===== RELAÇÕES DE CONSUMO — DESTINAÇÃO COMERCIAL (ART. 7º, IX) ===== */
  {
    id: "LE-147", disciplina: "Legislação Especial", assunto: "Crimes contra as relações de consumo", subassunto: "Depósito de mercadoria imprópria — destinação comercial (art. 7º, IX)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.137/1990, art. 7º, IX)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "Constitui crime contra as relações de consumo vender, ter em depósito para vender ou expor à venda, ou, de qualquer forma, entregar mercadoria em condições impróprias ao consumo, exigindo-se, para a configuração do tipo, a destinação comercial da mercadoria.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ter em depósito para vender ... destinação comercial",
    cognitivo: {
      motivo: "Cobrar que o núcleo 'ter em depósito', no art. 7º, IX, é qualificado pela finalidade de venda/exposição comercial.",
      palavraCritica: "para vender ... destinação comercial",
    },
    comentario: {
      resolucao: "CERTO. O art. 7º, IX, da Lei 8.137/1990 exige, para a configuração do crime, a destinação comercial da mercadoria: vender, ter em depósito PARA VENDER ou expor à venda, ou entregar mercadoria em condições impróprias ao consumo. Sem essa finalidade comercial, a conduta é atípica quanto a esse inciso.",
      fundamento: "Lei 8.137/1990, art. 7º, IX.",
      macete: "'Ter em depósito' só é crime com finalidade comercial (para vender) — sem isso, é atípico.",
      erroComum: "Achar que basta o depósito da mercadoria imprópria, independentemente de qualquer finalidade comercial.",
      comoBancaPensa: "Item 'limpo' que reforça o elemento normativo que qualifica o núcleo do tipo (destinação comercial)."
    }
  },
  {
    id: "LE-148", disciplina: "Legislação Especial", assunto: "Crimes contra as relações de consumo", subassunto: "Depósito de mercadoria imprópria — destinação comercial (art. 7º, IX)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.137/1990, art. 7º, IX)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Constitui crime contra as relações de consumo ter em depósito, mesmo que não seja para vender ou para expor à venda, mercadoria em condições impróprias para o consumo, bastando, para a tipicidade, a mera posse da mercadoria nessas condições.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "mesmo que não seja para vender ... bastando ... a mera posse",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a ausência de finalidade comercial torna a conduta atípica quanto ao art. 7º, IX.",
      palavraCritica: "mesmo que não seja para vender ... mera posse",
    },
    comentario: {
      resolucao: "ERRADO. O art. 7º, IX, da Lei 8.137/1990 exige a destinação comercial da mercadoria (vender, ter em depósito PARA VENDER ou expor à venda). Sem essa finalidade, a conduta de apenas ter em depósito mercadoria imprópria ao consumo é atípica quanto a esse inciso — a mera posse não basta.",
      fundamento: "Lei 8.137/1990, art. 7º, IX.",
      macete: "'Mesmo que não seja para vender' é a pegadinha: sem essa finalidade, o tipo do inciso IX não se realiza.",
      erroComum: "Achar que a mera posse de mercadoria em condições impróprias já configura o crime, independentemente da finalidade.",
      comoBancaPensa: "Retira deliberadamente o elemento normativo do tipo (destinação comercial) e ainda assim afirma a ocorrência do crime."
    }
  },

  /* ===== AGRAVANTE DO ART. 12 — SERVIDOR PÚBLICO NO EXERCÍCIO DAS FUNÇÕES ===== */
  {
    id: "LE-149", disciplina: "Legislação Especial", assunto: "Crimes contra a ordem tributária", subassunto: "Circunstâncias agravantes (art. 12)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.137/1990, art. 12)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Caso um servidor público, no exercício de suas funções, seja autor de crime contra as relações de consumo previsto na Lei nº 8.137/1990, essa circunstância poderá agravar, de um terço até a metade, a pena prevista para o delito, nos termos do art. 12 dessa lei.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "servidor público ... agravar, de um terço até a metade",
    cognitivo: {
      motivo: "Cobrar a agravante do art. 12, II, aplicável aos crimes dos arts. 1º, 2º e 4º a 7º, incluindo os crimes contra as relações de consumo (art. 7º).",
      palavraCritica: "agravar, de um terço até a metade",
    },
    comentario: {
      resolucao: "CERTO. A circunstância de o crime contra as relações de consumo (art. 7º) ter sido cometido por servidor público no exercício de suas funções agrava a pena de 1/3 até a metade, conforme o art. 12, II, da Lei 8.137/1990, cujo alcance abrange os arts. 1º, 2º e 4º a 7º.",
      fundamento: "Lei 8.137/1990, art. 12, II.",
      macete: "Art. 12 agrava arts. 1º, 2º e 4º-7º — inclui relações de consumo (art. 7º).",
      erroComum: "Restringir a agravante do art. 12 apenas aos crimes tributários, ignorando sua aplicação aos crimes contra as relações de consumo.",
      comoBancaPensa: "Item 'limpo' que exige conhecer o alcance exato do rol de artigos agravados pelo art. 12."
    }
  },
  {
    id: "LE-150", disciplina: "Legislação Especial", assunto: "Crimes contra a ordem tributária", subassunto: "Circunstâncias agravantes (art. 12)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.137/1990, art. 12)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "A agravante prevista no art. 12, II, da Lei nº 8.137/1990 — ser o crime cometido por servidor público no exercício de suas funções — aplica-se, entre outros, aos crimes funcionais contra a ordem tributária do art. 3º dessa lei, agravando-lhes a pena de um terço até a metade.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "aplica-se ... aos crimes funcionais ... do art. 3º",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a agravante do art. 12, II, não se aplica ao art. 3º, sob pena de bis in idem.",
      palavraCritica: "aplica-se ... ao art. 3º",
    },
    comentario: {
      resolucao: "ERRADO. A agravante do art. 12, II, da Lei 8.137/1990 aplica-se apenas aos arts. 1º, 2º e 4º a 7º — o art. 3º (crimes funcionais) fica de fora, pois a condição de funcionário público já é elementar desse tipo penal. Aplicá-la também como agravante configuraria bis in idem.",
      fundamento: "Lei 8.137/1990, art. 12.",
      macete: "Art. 3º nunca recebe agravante de servidor público — a condição já é elementar do próprio crime.",
      erroComum: "Estender a agravante do art. 12 também aos crimes funcionais do art. 3º.",
      comoBancaPensa: "Estende indevidamente uma agravante a um artigo que a lei propositalmente excluiu do seu alcance, para evitar bis in idem."
    }
  },

  /* ===== GLP PARA FINS AUTOMOTIVOS (LEI 8.176/1991, ART. 1º, II, REDAÇÃO DA LEI 15.348/2026) ===== */
  {
    id: "LE-151", disciplina: "Legislação Especial", assunto: "Crimes contra a Ordem Econômica", subassunto: "GLP para fins automotivos (Lei 8.176/1991, art. 1º, II)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.176/1991, art. 1º, II, redação da Lei 15.348/2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "Após a alteração promovida pela Lei nº 15.348/2026, constitui crime contra a ordem econômica usar gás liquefeito de petróleo em desacordo com as normas estabelecidas em lei apenas quando destinado a fins automotivos, tendo sido descriminalizado o uso irregular do produto em motores de outras espécies, saunas, caldeiras e aquecimento de piscinas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "apenas ... fins automotivos ... descriminalizado ... outras espécies",
    cognitivo: {
      motivo: "Cobrar a atualização legislativa de 2026 que restringiu o tipo penal do art. 1º, II, da Lei 8.176/1991 ao uso automotivo do GLP.",
      palavraCritica: "apenas ... fins automotivos ... descriminalizado",
    },
    comentario: {
      resolucao: "CERTO. Com a redação dada pela Lei nº 15.348/2026 ao art. 1º, II, da Lei 8.176/1991, apenas o uso de gás liquefeito de petróleo para fins automotivos em desacordo com as normas estabelecidas em lei permanece como crime contra a ordem econômica — o uso irregular em motores de outras espécies, saunas, caldeiras e aquecimento de piscinas foi descriminalizado.",
      fundamento: "Lei 8.176/1991, art. 1º, II (redação dada pela Lei 15.348/2026).",
      macete: "GLP irregular: só é crime se for uso automotivo — as demais hipóteses (saunas, caldeiras, piscinas) foram descriminalizadas em 2026.",
      erroComum: "Desconhecer a atualização legislativa e considerar crime o uso irregular de GLP em qualquer finalidade.",
      comoBancaPensa: "Item 'limpo' sobre uma atualização legislativa recente, testando se o candidato está atualizado com a nova redação do tipo."
    }
  },
  {
    id: "LE-152", disciplina: "Legislação Especial", assunto: "Crimes contra a Ordem Econômica", subassunto: "GLP para fins automotivos (Lei 8.176/1991, art. 1º, II)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.176/1991, art. 1º, II, redação da Lei 15.348/2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.74,
    enunciado: "Ainda hoje, constitui crime contra a ordem econômica o uso de gás liquefeito de petróleo em desacordo com as normas estabelecidas em lei, seja para fins automotivos, seja em motores de qualquer espécie, saunas, caldeiras ou aquecimento de piscinas, mantendo-se inalterado o alcance do tipo penal desde a edição da Lei nº 8.176/1991.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "seja para fins automotivos, seja em motores de qualquer espécie ... inalterado",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que a Lei 15.348/2026 restringiu o tipo penal apenas ao uso automotivo, descriminalizando as demais hipóteses.",
      palavraCritica: "seja em motores de qualquer espécie ... inalterado",
    },
    comentario: {
      resolucao: "ERRADO. Desde a Lei nº 15.348/2026, o art. 1º, II, da Lei 8.176/1991 criminaliza apenas o uso de gás liquefeito de petróleo para fins automotivos em desacordo com as normas — o uso irregular em motores de qualquer espécie, saunas, caldeiras e aquecimento de piscinas foi descriminalizado, não permanecendo o tipo penal inalterado desde 1991.",
      fundamento: "Lei 8.176/1991, art. 1º, II (redação dada pela Lei 15.348/2026).",
      macete: "O tipo mudou em 2026 — hoje só é crime o uso automotivo irregular de GLP.",
      erroComum: "Ignorar a atualização legislativa de 2026 e tratar o tipo penal como se estivesse inalterado desde a lei original.",
      comoBancaPensa: "Nega uma atualização legislativa real (Lei 15.348/2026) para testar se o candidato está desatualizado sobre o tema."
    }
  },

  /* ===== USURPAÇÃO — EQUIPARAÇÃO DE QUEM TRANSPORTA/COMERCIALIZA (LEI 8.176/1991, ART. 2º, § 1º) ===== */
  {
    id: "LE-153", disciplina: "Legislação Especial", assunto: "Crimes contra a Ordem Econômica", subassunto: "Usurpação — conduta equiparada (Lei 8.176/1991, art. 2º, § 1º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.176/1991, art. 2º, § 1º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Incorre nas mesmas penas do crime de usurpação de matéria-prima da União aquele que, sem autorização legal, adquirir, transportar, industrializar, tiver consigo, consumir ou comercializar produto ou matéria-prima obtidos mediante exploração ilegal de bem pertencente à União, ainda que não tenha participado diretamente da extração.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "incorre nas mesmas penas ... ainda que não tenha participado diretamente da extração",
    cognitivo: {
      motivo: "Cobrar a conduta equiparada do § 1º do art. 2º da Lei 8.176/1991, que pune quem transporta/comercializa produto de origem ilícita, mesmo sem participar da extração.",
      palavraCritica: "ainda que não tenha participado diretamente da extração",
    },
    comentario: {
      resolucao: "CERTO. O art. 2º, § 1º, da Lei 8.176/1991 pune, com a mesma pena da usurpação, quem, sem autorização legal, adquirir, transportar, industrializar, tiver consigo, consumir ou comercializar produto ou matéria-prima obtidos mediante exploração ilegal de bem da União — conduta equiparada que não exige participação direta na extração.",
      fundamento: "Lei 8.176/1991, art. 2º, § 1º.",
      macete: "Transportar/comercializar produto de extração ilegal = mesma pena de quem extraiu, mesmo sem ter extraído.",
      erroComum: "Achar que só responde pelo crime de usurpação quem participou diretamente da exploração ou extração do bem da União.",
      comoBancaPensa: "Item 'limpo' que reforça a amplitude da conduta equiparada do § 1º, tema de interesse direto para investigações patrimoniais."
    }
  },
  {
    id: "LE-154", disciplina: "Legislação Especial", assunto: "Crimes contra a Ordem Econômica", subassunto: "Usurpação — conduta equiparada (Lei 8.176/1991, art. 2º, § 1º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.176/1991, art. 2º, § 1º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "Somente responde pelo crime de usurpação de matéria-prima da União, previsto na Lei nº 8.176/1991, quem tenha executado diretamente a lavra ou a exploração ilegal do bem, sendo atípica a conduta de quem apenas transporta ou comercializa o produto, ainda que ciente de sua origem ilícita.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "somente responde ... quem tenha executado diretamente ... atípica a conduta de quem ... transporta ou comercializa",
    cognitivo: {
      motivo: "Cobrar, na forma invertida, que o transporte e a comercialização do produto de origem ilícita são condutas equiparadas, puníveis mesmo sem participação na extração.",
      palavraCritica: "somente responde ... atípica a conduta ... transporta ou comercializa",
    },
    comentario: {
      resolucao: "ERRADO. Não é necessário ter executado diretamente a lavra para responder pela usurpação: o art. 2º, § 1º, da Lei 8.176/1991 pune, com a mesma pena do caput, quem adquire, transporta, industrializa, tem consigo, consome ou comercializa produto obtido mediante exploração ilegal de bem da União — a conduta de transportar ou comercializar, ciente da origem ilícita, é típica.",
      fundamento: "Lei 8.176/1991, art. 2º, § 1º.",
      macete: "Transportar/comercializar produto de extração ilegal, sabendo da origem, é sempre crime — a conduta equiparada do § 1º não exige ter extraído.",
      erroComum: "Achar que apenas quem executou diretamente a extração pode ser responsabilizado penalmente pela usurpação.",
      comoBancaPensa: "Nega a existência da conduta equiparada do § 1º para restringir indevidamente o alcance do tipo penal."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE48);
