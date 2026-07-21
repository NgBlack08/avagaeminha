/* =====================================================================
   CEBRASPE LAB — Expansão Edital PC-AL 2026 (Lote 5 — robustez)
   Foco: Processo Penal (IP, prisões, provas), Legislação Penal Especial
   (tortura, racismo/injúria racial, idoso, drogas, ordem tributária,
   lavagem, PcD), Crimes Cibernéticos e reforço de Direito Penal.
   Questões INÉDITAS no estilo CEBRASPE, fundamentadas em legislação
   vigente e jurisprudência consolidada (STF/STJ). Não reproduzem
   questões oficiais — usam apenas os padrões e temas da banca.
   ===================================================================== */

const QUESTOES_PCAL_LOTE5 = [

  /* ==================== PROCESSO PENAL ==================== */
  {
    id: "PP-014", disciplina: "Processo Penal", assunto: "Inquérito policial", subassunto: "Características",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "O inquérito policial é procedimento de natureza inquisitiva, no qual não vigora, em regra, o contraditório e a ampla defesa em sua plenitude, por se tratar de peça de caráter meramente informativo destinada a subsidiar a formação da opinio delicti.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "inquisitiva",
    cognitivo: {
      motivo: "Cobrar a natureza inquisitiva e informativa do IP.",
      mede: "Inquérito policial — características (item 2 do edital).",
      pegadinhaDesc: "A banca costuma exigir contraditório pleno no IP, o que é incorreto na fase investigativa.",
      ondeErra: "Aplica ao IP as garantias plenas do processo judicial.",
      palavraCritica: "inquisitiva / meramente informativa",
      tecnica: "IP é inquisitivo: contraditório e ampla defesa são diferidos para a ação penal.",
      regraMental: "IP: Inquisitivo, Sigiloso, Escrito, Oficial, Oficioso, Indisponível, Dispensável."
    },
    comentario: {
      resolucao: "CERTO. O IP é inquisitivo — não há contraditório e ampla defesa em plenitude, por ser peça informativa que embasa a opinio delicti do titular da ação penal. Isso não afasta direitos do investigado (ex.: Súmula Vinculante 14 — acesso aos autos já documentados; direito ao silêncio; assistência de advogado).",
      fundamento: "CPP; Súmula Vinculante 14/STF; jurisprudência consolidada.",
      macete: "IP informa; processo julga. Contraditório pleno só na ação penal.",
      erroComum: "Exigir contraditório pleno no inquérito.",
      comoBancaPensa: "Testa se o candidato distingue a fase investigativa (inquisitiva) da processual."
    }
  },
  {
    id: "PP-015", disciplina: "Processo Penal", assunto: "Prisão e medidas cautelares", subassunto: "Prisão preventiva — decretação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "Após a Lei nº 13.964/2019, a prisão preventiva não pode mais ser decretada de ofício pelo juiz, dependendo de requerimento do Ministério Público, do querelante ou do assistente, ou de representação da autoridade policial.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não de ofício",
    cognitivo: {
      motivo: "Cobrar a vedação à decretação de ofício da preventiva (art. 311 CPP).",
      mede: "Prisão e liberdade provisória (item 3 do edital).",
      pegadinhaDesc: "A banca costuma manter a possibilidade de decretação de ofício (regime pré-2019).",
      ondeErra: "Responde com a redação antiga do art. 311.",
      palavraCritica: "não pode de ofício",
      tecnica: "Pacote Anticrime reforçou o sistema acusatório: prisão exige provocação.",
      regraMental: "Preventiva: nunca de ofício. Sempre depende de requerimento (MP) ou representação (delegado)."
    },
    comentario: {
      resolucao: "CERTO. CP­P, art. 311 (redação da Lei 13.964/2019): a preventiva pode ser decretada em qualquer fase da investigação ou do processo, a requerimento do MP, do querelante ou do assistente, ou por representação da autoridade policial — nunca de ofício pelo juiz.",
      fundamento: "CPP, art. 311 (Lei 13.964/2019); art. 3º-A (sistema acusatório).",
      macete: "Juiz não 'prende sozinho' — precisa de alguém pedindo.",
      erroComum: "Admitir a decretação de ofício.",
      comoBancaPensa: "Alteração do Pacote Anticrime cobrada de forma literal."
    }
  },
  {
    id: "PP-016", disciplina: "Processo Penal", assunto: "Prisão e medidas cautelares", subassunto: "Prisão temporária",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "A prisão temporária, cabível na fase de investigação, tem prazo de cinco dias, prorrogável por igual período em caso de extrema e comprovada necessidade, elevando-se para trinta dias, também prorrogáveis por igual prazo, quando se tratar de crime hediondo ou equiparado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "cinco dias / trinta dias",
    cognitivo: {
      motivo: "Cobrar os prazos da prisão temporária (Lei 7.960/1989 e Lei 8.072/1990).",
      mede: "Prisão e liberdade provisória.",
      pegadinhaDesc: "A banca costuma trocar os prazos (ex.: 10 dias) ou admitir temporária na fase processual.",
      ondeErra: "Não memoriza os prazos ou aplica a temporária depois da denúncia.",
      palavraCritica: "5+5 (comum) / 30+30 (hediondo)",
      tecnica: "Temporária só na investigação. Comum: 5+5. Hediondo: 30+30.",
      regraMental: "Temporária = fase de IP. Prazos: comum 5, hediondo 30 (ambos dobráveis)."
    },
    comentario: {
      resolucao: "CERTO. Lei 7.960/1989: prazo de 5 dias, prorrogável por mais 5 em caso de extrema e comprovada necessidade. Para crimes hediondos e equiparados, o prazo é de 30 dias, prorrogável por igual período (Lei 8.072/1990, art. 2º, § 4º). Só cabe na fase investigativa.",
      fundamento: "Lei 7.960/1989, art. 2º; Lei 8.072/1990, art. 2º, § 4º.",
      macete: "Temporária: 5+5 comum, 30+30 hediondo. Nunca depois da denúncia.",
      erroComum: "Trocar os prazos ou admitir temporária no curso da ação penal.",
      comoBancaPensa: "Prazos + cabimento restrito ao IP são pontos de checagem obrigatórios."
    }
  },
  {
    id: "PP-017", disciplina: "Processo Penal", assunto: "Provas", subassunto: "Interceptação telefônica",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.82,
    enunciado: "A interceptação de comunicações telefônicas, para fins de investigação criminal, poderá ser autorizada pela autoridade policial, no prazo máximo de quinze dias, quando houver indícios de infração penal punida com detenção.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "autoridade policial / detenção",
    cognitivo: {
      motivo: "Cobrar os requisitos da interceptação (Lei 9.296/1996) — reserva de jurisdição e crime punido com reclusão.",
      mede: "Provas e disposições constitucionais (itens 4 e provas).",
      pegadinhaDesc: "Atribui ao delegado a autorização (é do juiz) e troca 'reclusão' por 'detenção'.",
      ondeErra: "Ignora a cláusula de reserva de jurisdição (CF, art. 5º, XII) e o requisito da reclusão.",
      palavraCritica: "autoridade policial (deveria ser o juiz) + detenção (deveria ser reclusão)",
      tecnica: "Interceptação: só por ORDEM JUDICIAL, para crimes punidos com RECLUSÃO.",
      regraMental: "Interceptação telefônica = reserva de jurisdição. Delegado não autoriza; e só cabe em crime de reclusão."
    },
    comentario: {
      resolucao: "ERRADO. A interceptação depende de ORDEM JUDICIAL (CF, art. 5º, XII; Lei 9.296/1996) e não é cabível quando o fato for punido, no máximo, com DETENÇÃO. O prazo é de 15 dias, renovável. A autoridade policial pode representar, mas não autorizar.",
      fundamento: "CF, art. 5º, XII; Lei 9.296/1996, arts. 1º a 5º.",
      macete: "Interceptação: juiz + reclusão + 15 dias renováveis.",
      erroComum: "Admitir autorização pelo delegado ou em crime de detenção.",
      comoBancaPensa: "Dupla pegadinha: troca o sujeito (delegado × juiz) e o requisito (detenção × reclusão)."
    }
  },
  {
    id: "PP-018", disciplina: "Processo Penal", assunto: "Disposições preliminares", subassunto: "Incomunicabilidade do preso",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.7,
    enunciado: "Segundo a doutrina majoritária, a incomunicabilidade do preso, prevista no Código de Processo Penal, não foi recepcionada pela Constituição Federal de 1988, que assegura ao preso a assistência da família e de advogado.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "não recepcionada",
    cognitivo: {
      motivo: "Cobrar a não recepção do art. 21 do CPP pela CF/88.",
      mede: "Disposições preliminares do CPP + disposições constitucionais.",
      pegadinhaDesc: "A banca costuma afirmar que a incomunicabilidade continua válida.",
      ondeErra: "Lê o CPP isoladamente, sem o filtro constitucional.",
      palavraCritica: "não recepcionada",
      tecnica: "CF assegura assistência de advogado e família — incompatível com incomunicabilidade.",
      regraMental: "Nem no estado de defesa a incomunicabilidade é permitida (art. 136, §3º, IV, CF) — muito menos na normalidade."
    },
    comentario: {
      resolucao: "CERTO. A doutrina majoritária entende que o art. 21 do CPP (incomunicabilidade do preso) não foi recepcionado pela CF/88, que garante ao preso assistência da família e de advogado (art. 5º, LXIII). A própria CF veda a incomunicabilidade até no estado de defesa (art. 136, § 3º, IV).",
      fundamento: "CPP, art. 21; CF, art. 5º, LXIII, e art. 136, § 3º, IV.",
      macete: "Se nem no estado de defesa pode, na vida normal também não.",
      erroComum: "Considerar a incomunicabilidade ainda vigente.",
      comoBancaPensa: "Confronta dispositivo do CPP anterior a 1988 com a Constituição."
    }
  },
  {
    id: "PP-019", disciplina: "Processo Penal", assunto: "Provas", subassunto: "Prova emprestada",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.72,
    enunciado: "A prova emprestada, produzida em um processo e transportada documentalmente para outro, é admissível desde que respeitado o contraditório, ainda que as partes do processo de destino não sejam as mesmas do processo de origem.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "respeitado o contraditório",
    cognitivo: {
      motivo: "Cobrar os requisitos de validade da prova emprestada (STJ).",
      mede: "Provas.",
      pegadinhaDesc: "A banca costuma exigir identidade de partes, o que a jurisprudência dispensa (basta o contraditório no destino).",
      ondeErra: "Acredita ser necessária a mesma parte nos dois processos.",
      palavraCritica: "contraditório no processo de destino",
      tecnica: "O que valida a prova emprestada é o contraditório no destino, não a identidade de partes.",
      regraMental: "Prova emprestada: exige contraditório onde vai ser usada — não exige as mesmas partes."
    },
    comentario: {
      resolucao: "CERTO. Segundo o STJ, a prova emprestada é válida quando submetida ao contraditório no processo de destino, sendo dispensável a identidade de partes entre origem e destino. Garante-se economia processual sem sacrificar a ampla defesa.",
      fundamento: "Jurisprudência do STJ (prova emprestada); CPP.",
      macete: "Empresta a prova, mas garante o contraditório 'na chegada'.",
      erroComum: "Exigir as mesmas partes nos dois processos.",
      comoBancaPensa: "Requisito verdadeiro (contraditório) × requisito falso (mesmas partes)."
    }
  },

  /* ==================== LEGISLAÇÃO PENAL ESPECIAL ==================== */
  {
    id: "LE-018", disciplina: "Legislação Especial", assunto: "Lei de Tortura", subassunto: "Perda do cargo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "Na Lei nº 9.455/1997, a condenação por crime de tortura acarreta, como efeito automático, a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "efeito automático",
    cognitivo: {
      motivo: "Cobrar o efeito extrapenal automático da condenação por tortura (diferente do CP).",
      mede: "Legislação penal especial — tortura.",
      pegadinhaDesc: "A banca costuma exigir motivação específica (regra do art. 92 do CP), que não se aplica aqui.",
      ondeErra: "Aplica à tortura a regra geral do CP (perda do cargo não automática).",
      palavraCritica: "efeito automático",
      tecnica: "Na tortura, a perda do cargo é AUTOMÁTICA (não exige fundamentação específica), ao contrário do art. 92 do CP.",
      regraMental: "Tortura: perde o cargo automaticamente + interdição pelo dobro da pena."
    },
    comentario: {
      resolucao: "CERTO. Lei 9.455/1997, art. 1º, § 5º: a condenação acarretará a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada — efeito automático, dispensando a motivação exigida pelo art. 92 do CP.",
      fundamento: "Lei 9.455/1997, art. 1º, § 5º.",
      macete: "Tortura: perda do cargo é 'de graça' (automática). No CP comum, precisa fundamentar.",
      erroComum: "Exigir declaração motivada como no art. 92 do CP.",
      comoBancaPensa: "Contrapõe o efeito automático da lei especial à regra geral do CP."
    }
  },
  {
    id: "LE-019", disciplina: "Legislação Especial", assunto: "Crimes de racismo", subassunto: "Injúria racial (Lei 14.532/2023)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.9,
    enunciado: "Com a Lei nº 14.532/2023, a injúria racial passou a ser expressamente tipificada como modalidade do crime de racismo, sendo, portanto, imprescritível e inafiançável.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "imprescritível e inafiançável",
    cognitivo: {
      motivo: "Cobrar a equiparação da injúria racial ao racismo — alteração recente de alta probabilidade.",
      mede: "Legislação penal especial — racismo (Lei 7.716/1989).",
      pegadinhaDesc: "A banca costuma manter a injúria racial como injúria comum (prescritível/afiançável), regime superado.",
      ondeErra: "Responde com o entendimento anterior à Lei 14.532/2023.",
      palavraCritica: "imprescritível e inafiançável",
      tecnica: "Injúria racial hoje = racismo (art. 2º-A da Lei 7.716/1989): imprescritível e inafiançável (CF, art. 5º, XLII).",
      regraMental: "Pós-2023: injúria racial saiu do CP e virou racismo — não prescreve, não paga fiança."
    },
    comentario: {
      resolucao: "CERTO. A Lei 14.532/2023 inseriu a injúria racial como modalidade de racismo (art. 2º-A da Lei 7.716/1989), com pena de reclusão de 2 a 5 anos e multa. Como espécie de racismo, é imprescritível e inafiançável (CF, art. 5º, XLII). O STF já sinalizava essa equiparação (HC 154.248).",
      fundamento: "Lei 7.716/1989, art. 2º-A (Lei 14.532/2023); CF, art. 5º, XLII; STF, HC 154.248.",
      macete: "Injúria racial 'promovida' a racismo: imprescritível + inafiançável.",
      erroComum: "Tratar a injúria racial como injúria comum (prescritível).",
      comoBancaPensa: "Alteração legislativa recente com repercussão social = cobrança quase certa."
    }
  },
  {
    id: "LE-020", disciplina: "Legislação Especial", assunto: "Estatuto da Pessoa Idosa", subassunto: "Ação penal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.78,
    enunciado: "Nos crimes previstos no Estatuto da Pessoa Idosa (Lei nº 10.741/2003), a ação penal é pública incondicionada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "incondicionada",
    cognitivo: {
      motivo: "Cobrar a natureza da ação penal nos crimes contra a pessoa idosa.",
      mede: "Legislação penal especial — Estatuto da Pessoa Idosa.",
      pegadinhaDesc: "A banca costuma exigir representação (ação condicionada) para esses crimes.",
      ondeErra: "Aplica a lógica de crimes condicionados a crimes de vítima vulnerável.",
      palavraCritica: "incondicionada",
      tecnica: "Estatuto do Idoso, art. 95: crimes de ação penal pública incondicionada.",
      regraMental: "Idoso é vulnerável → o Estado age de ofício (incondicionada), sem depender da vítima."
    },
    comentario: {
      resolucao: "CERTO. Lei 10.741/2003, art. 95: aos crimes previstos no Estatuto aplica-se a ação penal pública incondicionada, não se exigindo representação. Protege-se a pessoa idosa como vulnerável.",
      fundamento: "Lei 10.741/2003, art. 95.",
      macete: "Vítima vulnerável (idoso) = Estado age sozinho = incondicionada.",
      erroComum: "Exigir representação da vítima idosa.",
      comoBancaPensa: "Natureza da ação penal em estatutos protetivos é ponto recorrente."
    }
  },
  {
    id: "LE-021", disciplina: "Legislação Especial", assunto: "Lei de Drogas", subassunto: "Tráfico privilegiado",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.82,
    enunciado: "Segundo o STF, o tráfico privilegiado, previsto no § 4º do art. 33 da Lei nº 11.343/2006, não tem natureza hedionda, sendo cabível a aplicação da causa de diminuição de pena ao réu primário, de bons antecedentes, que não se dedique a atividades criminosas nem integre organização criminosa.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "não tem natureza hedionda",
    cognitivo: {
      motivo: "Cobrar o entendimento do STF sobre o tráfico privilegiado.",
      mede: "Legislação penal especial — Lei de Drogas.",
      pegadinhaDesc: "A banca costuma afirmar que o tráfico privilegiado é hediondo.",
      ondeErra: "Estende a hediondez do tráfico comum ao privilegiado.",
      palavraCritica: "não hediondo",
      tecnica: "STF (HC 118.533): tráfico privilegiado não é equiparado a hediondo. Lei 13.964/2019 confirmou.",
      regraMental: "Tráfico privilegiado (§4º): réu primário + bons antecedentes + não se dedica ao crime = redução de 1/6 a 2/3, sem hediondez."
    },
    comentario: {
      resolucao: "CERTO. STF (HC 118.533) e a Lei 13.964/2019 (que alterou a Lei 8.072/1990) firmaram que o tráfico privilegiado (art. 33, § 4º, da Lei 11.343/2006) NÃO tem natureza hedionda. A causa de diminuição (1/6 a 2/3) exige primariedade, bons antecedentes e não dedicação a atividades criminosas.",
      fundamento: "Lei 11.343/2006, art. 33, § 4º; STF, HC 118.533; Lei 8.072/1990.",
      macete: "Privilegiado = 'traficante de primeira viagem' — não é hediondo.",
      erroComum: "Considerar o tráfico privilegiado como hediondo.",
      comoBancaPensa: "Tema com virada jurisprudencial é cobrado para pegar quem estudou material antigo."
    }
  },
  {
    id: "LE-022", disciplina: "Legislação Especial", assunto: "Crimes contra a ordem tributária", subassunto: "Súmula Vinculante 24",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "Conforme entendimento sumulado do STF, não se tipifica crime material contra a ordem tributária, previsto no art. 1º, incisos I a IV, da Lei nº 8.137/1990, antes do lançamento definitivo do tributo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "lançamento definitivo",
    cognitivo: {
      motivo: "Cobrar a Súmula Vinculante 24 — condição para a tipificação dos crimes materiais tributários.",
      mede: "Legislação penal especial / crimes contra a ordem tributária (item do edital).",
      pegadinhaDesc: "A banca costuma dispensar o lançamento definitivo ou aplicar a súmula a crimes formais.",
      ondeErra: "Ignora que o crime material tributário só se consuma após o lançamento definitivo.",
      palavraCritica: "antes do lançamento definitivo",
      tecnica: "Crime material tributário (art. 1º, I a IV) depende do lançamento definitivo do tributo.",
      regraMental: "Sem lançamento definitivo, não há crime material tributário — nem prescrição corre."
    },
    comentario: {
      resolucao: "CERTO. Súmula Vinculante 24/STF: 'Não se tipifica crime material contra a ordem tributária, previsto no art. 1º, I a IV, da Lei 8.137/1990, antes do lançamento definitivo do tributo.' O exaurimento da via administrativa é condição objetiva de punibilidade.",
      fundamento: "Lei 8.137/1990, art. 1º; Súmula Vinculante 24/STF.",
      macete: "Sem 'fechar a conta' na Receita (lançamento definitivo), não há crime material tributário.",
      erroComum: "Aplicar a súmula a crimes formais ou dispensar o lançamento.",
      comoBancaPensa: "Súmula vinculante literal — tema com perfil investigativo-financeiro do certame."
    }
  },
  {
    id: "LE-023", disciplina: "Legislação Especial", assunto: "Lavagem de dinheiro", subassunto: "Autolavagem",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.78,
    enunciado: "No ordenamento jurídico brasileiro, admite-se a punição do autor do crime antecedente também pelo crime de lavagem de dinheiro (autolavagem), sendo desnecessária a condenação prévia pela infração antecedente para o processo por lavagem.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "autolavagem",
    cognitivo: {
      motivo: "Cobrar a admissão da autolavagem e a autonomia do processo (Lei 9.613/1998).",
      mede: "Lavagem de dinheiro (item do edital).",
      pegadinhaDesc: "A banca costuma exigir condenação prévia pelo crime antecedente ou negar a autolavagem.",
      ondeErra: "Acredita que o autor do crime antecedente não responde por lavagem.",
      palavraCritica: "autolavagem / desnecessária condenação prévia",
      tecnica: "A lavagem é autônoma: basta indícios do crime antecedente. O próprio autor pode responder pelas duas.",
      regraMental: "Autolavagem é punível. Processo por lavagem NÃO espera condenação do crime antecedente."
    },
    comentario: {
      resolucao: "CERTO. A Lei 9.613/1998 (art. 2º, II) permite o processo por lavagem independentemente do julgamento das infrações antecedentes, bastando indícios. Admite-se a autolavagem (o autor do crime antecedente também responde por lavagem quando pratica atos autônomos de ocultação/dissimulação).",
      fundamento: "Lei 9.613/1998, art. 2º, II; jurisprudência (autolavagem).",
      macete: "Lavagem 'anda sozinha': não espera a condenação do crime que gerou o dinheiro.",
      erroComum: "Exigir condenação prévia do crime antecedente.",
      comoBancaPensa: "Autonomia da lavagem + autolavagem é central no perfil financeiro do concurso."
    }
  },
  {
    id: "LE-024", disciplina: "Legislação Especial", assunto: "Estatuto da Pessoa com Deficiência", subassunto: "Crime de discriminação",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.72,
    enunciado: "A Lei nº 13.146/2015 (Estatuto da Pessoa com Deficiência) tipifica como crime a conduta de discriminar pessoa em razão de sua deficiência, prevendo pena para quem pratica, induz ou incita tal discriminação.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "discriminar em razão da deficiência",
    cognitivo: {
      motivo: "Cobrar o crime de discriminação do Estatuto da Pessoa com Deficiência.",
      mede: "Legislação penal especial — Estatuto da PcD (item do edital).",
      pegadinhaDesc: "A banca costuma negar a tipificação ou confundir com mera infração administrativa.",
      ondeErra: "Desconhece a existência do tipo penal no Estatuto.",
      palavraCritica: "praticar, induzir ou incitar",
      tecnica: "Art. 88 da Lei 13.146/2015 tipifica a discriminação por deficiência (crime, não só ilícito civil).",
      regraMental: "Discriminação por deficiência = crime do Estatuto da PcD (art. 88)."
    },
    comentario: {
      resolucao: "CERTO. Lei 13.146/2015, art. 88: constitui crime praticar, induzir ou incitar discriminação de pessoa em razão de sua deficiência (pena de reclusão de 1 a 3 anos e multa), com causas de aumento previstas nos parágrafos.",
      fundamento: "Lei 13.146/2015 (Estatuto da Pessoa com Deficiência), art. 88.",
      macete: "Discriminar deficiente é crime — praticar, induzir OU incitar.",
      erroComum: "Tratar a conduta como mera infração administrativa.",
      comoBancaPensa: "Estatuto citado nominalmente no edital → cobrança do tipo penal específico."
    }
  },

  /* ==================== CRIMES CIBERNÉTICOS E SEGURANÇA DIGITAL ==================== */
  {
    id: "CC-005", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Invasão de dispositivo", subassunto: "Art. 154-A do CP",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.9,
    enunciado: "O crime de invasão de dispositivo informático, previsto no art. 154-A do Código Penal, exige, para sua configuração, a violação indevida de mecanismo de segurança, com o fim de obter, adulterar ou destruir dados sem autorização do titular do dispositivo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "violação de mecanismo de segurança",
    cognitivo: {
      motivo: "Cobrar os elementos do art. 154-A do CP (Lei 12.737/2012, alterado pela Lei 14.155/2021).",
      mede: "Crimes cibernéticos — Lei 12.737/2012 (item I do edital).",
      pegadinhaDesc: "A banca costuma dispensar a 'violação de mecanismo de segurança' (elemento essencial do tipo).",
      ondeErra: "Acha que qualquer acesso não autorizado configura o crime, mesmo sem violar proteção.",
      palavraCritica: "violação indevida de mecanismo de segurança",
      tecnica: "Sem violar mecanismo de segurança, não há o crime do art. 154-A (embora possa haver outro delito).",
      regraMental: "Invasão exige 'quebrar' uma proteção. Dispositivo aberto/sem senha muda o enquadramento."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 154-A (Lei 12.737/2012, com penas ampliadas pela Lei 14.155/2021): exige a invasão de dispositivo mediante violação indevida de mecanismo de segurança, com o fim de obter, adulterar ou destruir dados/informações sem autorização, ou instalar vulnerabilidades. A ação penal é, em regra, condicionada à representação.",
      fundamento: "CP, art. 154-A e 154-B (Lei 12.737/2012; Lei 14.155/2021).",
      macete: "Invasão = tem que 'furar' a segurança. É o crime da 'Carolina Dieckmann'.",
      erroComum: "Dispensar a violação de mecanismo de segurança.",
      comoBancaPensa: "Elemento normativo do tipo (mecanismo de segurança) é o ponto de manipulação."
    }
  },
  {
    id: "CC-006", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Furto mediante fraude eletrônica", subassunto: "Art. 155, § 4º-B, do CP",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.82,
    enunciado: "A subtração de valores da conta bancária da vítima, realizada mediante fraude por meio de dispositivo eletrônico ou informático, conectado ou não à rede de computadores, configura furto qualificado, distinto do estelionato.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "furto qualificado",
    cognitivo: {
      motivo: "Diferenciar furto mediante fraude eletrônica (art. 155, § 4º-B) do estelionato.",
      mede: "Crimes cibernéticos + crimes contra o patrimônio (Lei 14.155/2021).",
      pegadinhaDesc: "A banca costuma enquadrar como estelionato quando a vítima não 'entrega' o bem voluntariamente.",
      ondeErra: "Confunde furto (subtração sem consentimento) com estelionato (vítima iludida entrega).",
      palavraCritica: "subtração (furto) × entrega voluntária (estelionato)",
      tecnica: "Se o agente SUBTRAI valendo-se de fraude para burlar a vigilância = furto. Se a vítima é ILUDIDA e entrega = estelionato.",
      regraMental: "Fraude para SUBTRAIR = furto qualificado (§4º-B). Fraude para a vítima ENTREGAR = estelionato."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 155, § 4º-B (Lei 14.155/2021): a subtração mediante fraude por dispositivo eletrônico/informático configura furto qualificado (pena de 4 a 8 anos). No furto, a vítima não entrega o bem voluntariamente — a fraude serve para iludir a vigilância; no estelionato, a vítima, iludida, faz a entrega.",
      fundamento: "CP, art. 155, § 4º-B (Lei 14.155/2021); distinção furto × estelionato.",
      macete: "Invadiu o app e transferiu = furto. Convenceu a vítima a transferir = estelionato.",
      erroComum: "Enquadrar toda fraude eletrônica como estelionato.",
      comoBancaPensa: "A linha furto × estelionato na fraude eletrônica é a pegadinha do tema."
    }
  },
  {
    id: "CC-007", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "Busca e apreensão de itens digitais", subassunto: "Acesso a celular apreendido",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "Segundo a jurisprudência do STJ, é ilícita, em regra, a devassa de dados e conversas registradas no aplicativo de mensagens de aparelho celular apreendido, quando realizada sem autorização judicial.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "sem autorização judicial",
    cognitivo: {
      motivo: "Cobrar o entendimento do STJ sobre acesso a dados de celular apreendido.",
      mede: "Busca e apreensão de itens digitais (Art. 240 e ss. do CPP; item do edital).",
      pegadinhaDesc: "A banca costuma afirmar que a apreensão lícita do aparelho autoriza, por si só, o acesso ao conteúdo.",
      ondeErra: "Confunde apreender o aparelho (lícito no flagrante) com acessar o conteúdo (exige ordem judicial).",
      palavraCritica: "acesso ao conteúdo × apreensão do aparelho",
      tecnica: "Apreender o celular ≠ acessar as mensagens. O conteúdo é protegido (dados/comunicações) e exige autorização judicial.",
      regraMental: "Pode apreender no flagrante; para ler o WhatsApp, precisa do juiz."
    },
    comentario: {
      resolucao: "CERTO. O STJ firmou que, sem autorização judicial, é ilícito o acesso ao conteúdo (mensagens, conversas) de celular apreendido, por violação à intimidade e ao sigilo de dados (CF, art. 5º, X e XII). A apreensão lícita do aparelho não autoriza, por si só, a devassa do conteúdo.",
      fundamento: "CF, art. 5º, X e XII; CPP, art. 240; jurisprudência do STJ; Marco Civil da Internet.",
      macete: "Apreendeu o celular? Ok. Vai ler as mensagens? Só com ordem judicial.",
      erroComum: "Achar que a apreensão do aparelho autoriza o acesso ao conteúdo.",
      comoBancaPensa: "Item operacional diário da polícia — separa 'apreender' de 'acessar conteúdo'."
    }
  },
  {
    id: "CC-008", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "LGPD", subassunto: "Tratamento de dados pela segurança pública",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) não se aplica ao tratamento de dados pessoais realizado para fins exclusivos de segurança pública, defesa nacional, segurança do Estado ou atividades de investigação e repressão de infrações penais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "fins exclusivos de segurança pública",
    cognitivo: {
      motivo: "Cobrar a exceção de aplicação da LGPD (art. 4º, III).",
      mede: "LGPD (item do edital, TI e Crimes Cibernéticos).",
      pegadinhaDesc: "A banca costuma afirmar que a LGPD se aplica integralmente à atividade policial investigativa.",
      ondeErra: "Ignora a exclusão do art. 4º, III, da LGPD.",
      palavraCritica: "fins exclusivos de segurança pública",
      tecnica: "LGPD não incide sobre tratamento para segurança pública/investigação penal — matéria de lei específica.",
      regraMental: "Investigação penal e segurança pública ficam FORA da LGPD (art. 4º, III), embora exijam lei própria."
    },
    comentario: {
      resolucao: "CERTO. Lei 13.709/2018, art. 4º, III: a LGPD não se aplica ao tratamento de dados realizado para fins exclusivos de segurança pública, defesa nacional, segurança do Estado ou investigação e repressão penal, que serão regidos por legislação específica, observados o devido processo e os princípios de proteção.",
      fundamento: "Lei 13.709/2018, art. 4º, III e §§.",
      macete: "Atividade-fim de polícia investigativa = fora da LGPD (regra própria).",
      erroComum: "Aplicar a LGPD integralmente à investigação criminal.",
      comoBancaPensa: "Exceções de incidência da LGPD são o ponto mais cobrado do tema."
    }
  },

  /* ==================== DIREITO PENAL (reforço) ==================== */
  {
    id: "DP-019", disciplina: "Direito Penal", assunto: "Crimes contra a honra", subassunto: "Calúnia × difamação × injúria",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "Comete difamação quem imputa falsamente a alguém fato definido como crime, ao passo que a calúnia consiste em atribuir à vítima fato ofensivo à sua reputação, ainda que não criminoso.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "difamação × calúnia",
    cognitivo: {
      motivo: "Distinguir os três crimes contra a honra.",
      mede: "Crimes contra a pessoa — honra (item 2 do edital).",
      pegadinhaDesc: "Inverte as definições de calúnia e difamação.",
      ondeErra: "Troca 'fato definido como crime' (calúnia) por difamação.",
      palavraCritica: "fato criminoso (calúnia) × fato ofensivo (difamação)",
      tecnica: "Calúnia: fato CRIMINOSO falso. Difamação: fato OFENSIVO à reputação (não crime). Injúria: qualidade negativa (xingamento).",
      regraMental: "Calúnia = crime; Difamação = fato desonroso; Injúria = ofensa à dignidade (sem imputar fato)."
    },
    comentario: {
      resolucao: "ERRADO. As definições estão invertidas. CALÚNIA (art. 138): imputar falsamente FATO DEFINIDO COMO CRIME. DIFAMAÇÃO (art. 139): imputar fato OFENSIVO à reputação (não criminoso). INJÚRIA (art. 140): ofender a dignidade/decoro, sem imputar fato.",
      fundamento: "CP, arts. 138, 139 e 140.",
      macete: "Calúnia = 'você roubou' (fato-crime). Difamação = 'você não paga suas dívidas' (fato desonroso). Injúria = 'você é burro' (qualidade).",
      erroComum: "Trocar as definições de calúnia e difamação.",
      comoBancaPensa: "Trio conceitual espelhado é inversão clássica em crimes contra a honra."
    }
  },
  {
    id: "DP-020", disciplina: "Direito Penal", assunto: "Crimes contra o patrimônio", subassunto: "Apropriação indébita × furto",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "Configura apropriação indébita a conduta de quem, tendo a posse ou detenção lícita de coisa alheia móvel, dela se apropria, invertendo o título da posse; diferentemente do furto, em que a posse do bem é obtida de forma clandestina ou contra a vontade da vítima.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "posse lícita anterior",
    cognitivo: {
      motivo: "Distinguir apropriação indébita (art. 168) do furto (art. 155).",
      mede: "Crimes contra o patrimônio (item 3 do edital).",
      pegadinhaDesc: "A banca costuma dizer que a apropriação indébita exige posse obtida por fraude/subtração.",
      ondeErra: "Não percebe que, na apropriação, a posse é lícita e anterior.",
      palavraCritica: "posse lícita anterior (apropriação) × subtração (furto)",
      tecnica: "Apropriação: recebeu de boa-fé e depois se apropriou. Furto: nunca teve a posse legítima.",
      regraMental: "Apropriação indébita = 'ficou com o que era pra devolver'. Furto = 'pegou o que nunca foi seu'."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 168: na apropriação indébita, o agente já detém a posse/detenção LÍCITA da coisa e depois inverte o ânimo, passando a agir como dono. No furto (art. 155), a posse é obtida ilicitamente (subtração). O divisor é a licitude da posse inicial.",
      fundamento: "CP, arts. 155 e 168.",
      macete: "Pegou emprestado e não devolveu = apropriação. Levou escondido = furto.",
      erroComum: "Exigir subtração na apropriação indébita.",
      comoBancaPensa: "A origem da posse (lícita × ilícita) é o ponto de distinção manipulado."
    }
  },

  /* ==================== ESTATÍSTICA (reforço) ==================== */
  {
    id: "ES-010", disciplina: "Estatística e Análise de Dados", assunto: "Probabilidade", subassunto: "Teorema de Bayes",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "O teorema de Bayes permite atualizar a probabilidade de uma hipótese à luz de novas evidências, relacionando a probabilidade a posteriori à probabilidade a priori e à verossimilhança da evidência observada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "a priori / a posteriori",
    cognitivo: {
      motivo: "Cobrar o conceito e a aplicação do teorema de Bayes.",
      mede: "Probabilidade condicional e regra de Bayes (item 2 do edital de Estatística).",
      pegadinhaDesc: "A banca costuma inverter a priori × a posteriori ou negar a atualização pela evidência.",
      ondeErra: "Confunde a probabilidade inicial (a priori) com a atualizada (a posteriori).",
      palavraCritica: "atualizar à luz de nova evidência",
      tecnica: "Bayes: P(H|E) = P(E|H)·P(H)/P(E). A posteriori = verossimilhança × a priori ÷ evidência.",
      regraMental: "A priori = antes da evidência. A posteriori = depois de observar a evidência."
    },
    comentario: {
      resolucao: "CERTO. O teorema de Bayes atualiza a crença sobre uma hipótese H após observar a evidência E: P(H|E) = P(E|H)·P(H)/P(E). Combina a probabilidade a priori P(H) com a verossimilhança P(E|H) para obter a probabilidade a posteriori. É base de raciocínio investigativo e de modelos como o Naive Bayes.",
      fundamento: "Teoria da probabilidade — teorema de Bayes.",
      macete: "Bayes = 'revisar a aposta' quando surge uma pista nova.",
      erroComum: "Inverter a priori (antes) com a posteriori (depois).",
      comoBancaPensa: "Bayes é citado nominalmente no edital — cobrança conceitual e aplicada."
    }
  },
  {
    id: "ES-011", disciplina: "Estatística e Análise de Dados", assunto: "Inferência", subassunto: "Teorema Central do Limite",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "Pelo Teorema Central do Limite, a distribuição da média amostral aproxima-se de uma distribuição normal à medida que o tamanho da amostra aumenta, independentemente da forma da distribuição da população de origem.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "independentemente da distribuição da população",
    cognitivo: {
      motivo: "Cobrar o enunciado do Teorema Central do Limite.",
      mede: "Distribuições amostrais / TCL (item 2 do edital de Estatística).",
      pegadinhaDesc: "A banca costuma exigir que a população seja normal (o TCL justamente dispensa isso).",
      ondeErra: "Acha que a população precisa ser normal para a média amostral ser normal.",
      palavraCritica: "independentemente da distribuição da população",
      tecnica: "TCL: com n grande, a média amostral tende à normal, mesmo se a população não for normal.",
      regraMental: "TCL: 'a média se comporta como normal' quando n cresce — não importa a forma da população."
    },
    comentario: {
      resolucao: "CERTO. O Teorema Central do Limite afirma que a distribuição da média amostral tende à normal conforme n cresce, qualquer que seja a distribuição da população de origem (com média e variância finitas). É o que fundamenta a inferência sobre médias.",
      fundamento: "Estatística — Teorema Central do Limite.",
      macete: "TCL = 'com amostra grande, a média vira normal', não importa a população.",
      erroComum: "Exigir população normal (o TCL dispensa isso).",
      comoBancaPensa: "A independência em relação à distribuição populacional é o ponto-chave manipulado."
    }
  },

  /* ==================== CONTABILIDADE (reforço) ==================== */
  {
    id: "CT-007", disciplina: "Contabilidade e Análise Financeira", assunto: "Fatos contábeis", subassunto: "Classificação",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "Um fato contábil permutativo é aquele que altera o valor do patrimônio líquido, ao passo que o fato modificativo apenas troca elementos entre si, sem afetar a situação líquida.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "permutativo × modificativo",
    cognitivo: {
      motivo: "Distinguir fatos permutativos, modificativos e mistos.",
      mede: "Atos e fatos administrativos (item 3 do edital de Contabilidade).",
      pegadinhaDesc: "Inverte as definições de permutativo e modificativo.",
      ondeErra: "Troca qual fato altera o patrimônio líquido.",
      palavraCritica: "permutativo NÃO altera PL; modificativo altera",
      tecnica: "Permutativo: só permuta elementos, PL constante. Modificativo: altera o PL (receita/despesa). Misto: os dois.",
      regraMental: "Permutativo = 'troca-troca' (PL igual). Modificativo = 'muda o PL' (aumenta/diminui)."
    },
    comentario: {
      resolucao: "ERRADO. As definições estão trocadas. O fato PERMUTATIVO apenas permuta elementos patrimoniais SEM alterar o patrimônio líquido (ex.: compra de bem à vista). O fato MODIFICATIVO altera a situação líquida (ex.: pagamento de despesa, recebimento de receita). O misto combina os dois efeitos.",
      fundamento: "Contabilidade geral — fatos contábeis.",
      macete: "Permutativo = permuta (PL não muda). Modificativo = modifica o PL.",
      erroComum: "Inverter qual fato altera o patrimônio líquido.",
      comoBancaPensa: "Par conceitual espelhado (permutativo × modificativo) invertido."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE5);

/* Reforço de frequência de temas do lote 5 (Módulo 2) */
(function () {
  const add = (disc, temas) => {
    let d = FREQUENCIA_TEMAS.find(f => f.disciplina === disc);
    if (!d) { d = { disciplina: disc, temas: [] }; FREQUENCIA_TEMAS.push(d); }
    d.temas.push(...temas);
  };
  add("Processo Penal", [
    { tema: "Prisão preventiva e temporária", freq: 90, tendencia: "alta", prob: 0.92 },
    { tema: "Interceptação telefônica (Lei 9.296)", freq: 82, tendencia: "estavel", prob: 0.84 },
  ]);
  add("Legislação Especial", [
    { tema: "Injúria racial como racismo (Lei 14.532/2023)", freq: 90, tendencia: "alta", prob: 0.92 },
    { tema: "Tortura — efeitos da condenação", freq: 85, tendencia: "estavel", prob: 0.86 },
    { tema: "Crimes contra a ordem tributária (SV 24)", freq: 80, tendencia: "alta", prob: 0.82 },
  ]);
  add("Crimes Cibernéticos e Segurança Digital", [
    { tema: "Furto por fraude eletrônica × estelionato", freq: 88, tendencia: "alta", prob: 0.9 },
    { tema: "Acesso a celular apreendido (STJ)", freq: 86, tendencia: "alta", prob: 0.88 },
  ]);
})();
