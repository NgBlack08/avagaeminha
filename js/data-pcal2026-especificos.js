/* =====================================================================
   CEBRASPE LAB — Expansão Edital PC-AL 2026 (Lote 2: Conhec. Específicos)
   Agente e Escrivão (item 20.2.4): aplicação da lei penal, Lei 9.099/95,
   Legislação Penal Especial, Estatística e Análise de Dados,
   Contabilidade e Análise Financeira.
   Também aplica os ajustes de integração ao edital (renomeações,
   marcação de temas fora do edital, frequências e predições).
   ===================================================================== */

const QUESTOES_PCAL_ESPECIFICOS = [

  /* ============ DIREITO PENAL — APLICAÇÃO DA LEI PENAL ============ */
  {
    id: "DP-009", disciplina: "Direito Penal", assunto: "Aplicação da lei penal", subassunto: "Tempo do crime",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.85,
    enunciado: "Considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "momento da ação",
    cognitivo: {
      motivo: "Literalidade do art. 4º do CP — teoria da atividade.",
      mede: "Tempo do crime (item 1.3 do edital).",
      pegadinhaDesc: "Item literal correto; a banca costuma trocar por 'momento do resultado' (teoria do resultado).",
      ondeErra: "Desconfia da literalidade e procura erro inexistente.",
      palavraCritica: "ação ou omissão",
      tecnica: "TEMPO = Atividade. LUGAR = Ubiquidade. Memorize o par antes de julgar.",
      regraMental: "LUTA: Lugar-Ubiquidade, Tempo-Atividade."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 4º: 'Considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado' — teoria da atividade. Relevante para aferir imputabilidade e lei aplicável.",
      fundamento: "CP, art. 4º.",
      macete: "Menor que atira véspera dos 18 e vítima morre depois: continua inimputável — vale o momento da AÇÃO.",
      erroComum: "Confundir com o lugar do crime (ubiquidade, art. 6º).",
      comoBancaPensa: "Par LUTA é literalidade favorita — quando não troca, cobra o texto puro como C."
    }
  },
  {
    id: "DP-010", disciplina: "Direito Penal", assunto: "Aplicação da lei penal", subassunto: "Lugar do crime",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.85,
    enunciado: "Quanto ao lugar do crime, o Código Penal adotou a teoria da atividade, considerando-se praticado o delito unicamente no local em que ocorreu a ação ou omissão.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "unicamente",
    cognitivo: {
      motivo: "Inversão do par tempo/lugar — pegadinha estrutural do tema.",
      mede: "Lugar do crime (art. 6º, CP).",
      pegadinhaDesc: "Aplica ao LUGAR a teoria que vale para o TEMPO, reforçada pelo 'unicamente'.",
      ondeErra: "Decorou 'atividade' e aplica ao artigo errado.",
      palavraCritica: "atividade (deveria ser ubiquidade)",
      tecnica: "Lugar do crime abrange ação E resultado (ubiquidade) — essencial nos crimes a distância.",
      regraMental: "LUTA: Lugar-Ubiquidade, Tempo-Atividade — o item cruzou os pares."
    },
    comentario: {
      resolucao: "ERRADO. CP, art. 6º: considera-se praticado o crime tanto no lugar da ação ou omissão quanto no lugar onde se produziu ou deveria produzir-se o resultado — teoria da UBIQUIDADE (mista). A teoria da atividade rege o TEMPO do crime (art. 4º).",
      fundamento: "CP, arts. 4º e 6º.",
      macete: "Crime começa no Brasil e termina fora (ou vice-versa)? Ubiquidade garante a lei brasileira.",
      erroComum: "Cruzar as teorias dos arts. 4º e 6º.",
      comoBancaPensa: "Dois artigos vizinhos com teorias diferentes = cruzamento perfeito para C/E."
    }
  },
  {
    id: "DP-011", disciplina: "Direito Penal", assunto: "Aplicação da lei penal", subassunto: "Lei penal no tempo",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "A lei penal posterior que de qualquer modo favorecer o agente aplica-se aos fatos anteriores, ainda que já decididos por sentença condenatória transitada em julgado.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "ainda que transitada em julgado",
    cognitivo: {
      motivo: "Retroatividade da lex mitior mesmo após o trânsito em julgado — art. 2º, parágrafo único.",
      mede: "Irretroatividade e suas exceções (itens 1.2 e 1.6 do edital).",
      pegadinhaDesc: "O 'ainda que transitada em julgado' parece exagerado — mas é o texto da lei.",
      ondeErra: "Acha que a coisa julgada barraria a retroação benéfica.",
      palavraCritica: "de qualquer modo favorecer",
      tecnica: "Lei mais grave NUNCA retroage; lei mais benéfica SEMPRE retroage — nem a coisa julgada a detém.",
      regraMental: "Benéfica atravessa até o trânsito em julgado (executor: juiz da execução — Súmula 611/STF)."
    },
    comentario: {
      resolucao: "CERTO. CP, art. 2º, parágrafo único: 'A lei posterior, que de qualquer modo favorecer o agente, aplica-se aos fatos anteriores, ainda que decididos por sentença condenatória transitada em julgado.' A aplicação cabe ao juízo da execução (Súmula 611/STF).",
      fundamento: "CF, art. 5º, XL; CP, art. 2º, parágrafo único; Súmula 611/STF.",
      macete: "In dubio pro reo também no tempo: o melhor direito alcança o passado.",
      erroComum: "Limitar a retroatividade benéfica aos processos em curso.",
      comoBancaPensa: "Cobra a parte 'chocante' do dispositivo (vencer a coisa julgada) apostando na dúvida do candidato."
    }
  },
  {
    id: "DP-012", disciplina: "Direito Penal", assunto: "Aplicação da lei penal", subassunto: "Contagem de prazo",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.8,
    enunciado: "Na contagem dos prazos de natureza penal, exclui-se o dia do começo e inclui-se o dia do vencimento, computando-se os dias, os meses e os anos pelo calendário comum.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "exclui-se o dia do começo",
    cognitivo: {
      motivo: "Cruzamento entre a contagem penal (art. 10, CP) e a processual (art. 798, § 1º, CPP).",
      mede: "Contagem de prazo penal (item 1.5 do edital).",
      pegadinhaDesc: "Aplica ao prazo PENAL a regra do prazo PROCESSUAL.",
      ondeErra: "Usa a regra processual, mais conhecida do cotidiano forense.",
      palavraCritica: "inclui-se o dia do começo",
      tecnica: "Prazo penal (prescrição, decadência, pena): o dia do começo INCLUI-SE. Prazo processual: exclui-se.",
      regraMental: "Penal Pega o Primeiro dia. Processual Pula o primeiro."
    },
    comentario: {
      resolucao: "ERRADO. CP, art. 10: 'O dia do começo INCLUI-SE no cômputo do prazo. Contam-se os dias, os meses e os anos pelo calendário comum.' A exclusão do dia inicial é regra dos prazos processuais (CPP, art. 798, § 1º). Como prazos penais afetam o ius libertatis, a contagem é a mais favorável ao réu.",
      fundamento: "CP, art. 10; CPP, art. 798, § 1º.",
      macete: "Preso às 23h50? Aqueles 10 minutos contam como o 1º dia de pena.",
      erroComum: "Uniformizar as duas contagens.",
      comoBancaPensa: "Regras espelhadas em códigos diferentes = terreno clássico de troca."
    }
  },

  /* ============ PROCESSO PENAL — LEI 9.099/1995 ============ */
  {
    id: "PP-007", disciplina: "Processo Penal", assunto: "Lei 9.099/1995", subassunto: "Infração de menor potencial ofensivo",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.9,
    enunciado: "Consideram-se infrações penais de menor potencial ofensivo, para os efeitos da Lei nº 9.099/1995, as contravenções penais e os crimes a que a lei comine pena máxima não superior a dois anos, cumulada ou não com multa.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "não superior a dois anos",
    cognitivo: {
      motivo: "Definição legal de IMPO — art. 61 da Lei 9.099/1995, porta de entrada dos Juizados.",
      mede: "Competência dos Juizados Especiais Criminais.",
      pegadinhaDesc: "Item literal correto; as trocas usuais são 'inferior a 2 anos', 'pena mínima' ou excluir contravenções.",
      ondeErra: "Confunde 'não superior' (≤ 2) com 'inferior' (< 2).",
      palavraCritica: "máxima não superior a 2",
      tecnica: "IMPO = TODAS as contravenções + crimes com pena MÁXIMA ≤ 2 anos.",
      regraMental: "JECRIM: teto de 2 anos, contravenção sempre entra."
    },
    comentario: {
      resolucao: "CERTO. Lei 9.099/1995, art. 61: 'Consideram-se infrações penais de menor potencial ofensivo, para os efeitos desta Lei, as contravenções penais e os crimes a que a lei comine pena máxima não superior a 2 (dois) anos, cumulada ou não com multa.'",
      fundamento: "Lei 9.099/1995, art. 61.",
      macete: "Compare: ANPP = mínima < 4; suspensão do processo = mínima ≤ 1; IMPO = MÁXIMA ≤ 2.",
      erroComum: "Trocar máxima/mínima entre os institutos despenalizadores.",
      comoBancaPensa: "Três institutos com números parecidos — a banca vive cruzando os limites entre eles."
    }
  },
  {
    id: "PP-008", disciplina: "Processo Penal", assunto: "Lei 9.099/1995", subassunto: "Termo circunstanciado",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "Ao autor do fato que, após a lavratura do termo circunstanciado, for imediatamente encaminhado ao juizado ou assumir o compromisso de a ele comparecer, não se imporá prisão em flagrante, nem se exigirá fiança.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não se imporá prisão em flagrante",
    cognitivo: {
      motivo: "Art. 69, parágrafo único, da Lei 9.099 — rotina diária do plantão policial.",
      mede: "Procedimento do termo circunstanciado de ocorrência (TCO).",
      pegadinhaDesc: "Item literal correto; a banca costuma trocar 'não se imporá' por 'poderá ser imposta'.",
      ondeErra: "Acha que sempre caberia flagrante, sendo o TCO mera faculdade.",
      palavraCritica: "compromisso de comparecer",
      tecnica: "IMPO + TCO + compromisso = sem auto de prisão em flagrante e sem fiança.",
      regraMental: "No JECRIM, o compromisso substitui a cela."
    },
    comentario: {
      resolucao: "CERTO. Lei 9.099/1995, art. 69, parágrafo único: 'Ao autor do fato que, após a lavratura do termo, for imediatamente encaminhado ao juizado ou assumir o compromisso de a ele comparecer, não se imporá prisão em flagrante, nem se exigirá fiança.' (Ressalva legal: casos de violência doméstica seguem regra diversa.)",
      fundamento: "Lei 9.099/1995, art. 69, caput e parágrafo único.",
      macete: "TCO lavrado + compromisso assumido = autor liberado, sem APF.",
      erroComum: "Imaginar discricionariedade para prender em flagrante mesmo com compromisso firmado.",
      comoBancaPensa: "Dispositivo operacional de delegacia = presença quase garantida em prova de polícia judiciária."
    }
  },
  {
    id: "PP-009", disciplina: "Processo Penal", assunto: "Lei 9.099/1995", subassunto: "Transação penal",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "A aceitação da proposta de transação penal pelo autor do fato importa reconhecimento de culpa, gera reincidência e constará de certidão de antecedentes criminais para todos os fins.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "reconhecimento de culpa / reincidência",
    cognitivo: {
      motivo: "Natureza despenalizadora e não condenatória da transação penal.",
      mede: "Efeitos da transação penal (art. 76, Lei 9.099/1995).",
      pegadinhaDesc: "Atribui à transação os efeitos de uma condenação criminal.",
      ondeErra: "Raciocina que 'aceitou pena, logo assumiu culpa'.",
      palavraCritica: "não importa confissão nem reincidência",
      tecnica: "Transação: aplica pena restritiva/multa SEM discutir culpa; único registro serve para impedir novo benefício em 5 anos.",
      regraMental: "Transação não condena, não confessa, não reincide."
    },
    comentario: {
      resolucao: "ERRADO. Lei 9.099/1995, art. 76, §§ 4º e 6º: a imposição da sanção da transação 'não importará em reincidência' e 'não constará de certidão de antecedentes criminais', salvo para impedir o mesmo benefício no prazo de 5 anos; tampouco tem efeitos civis. Não há juízo de culpa. Súmula Vinculante 35: descumprida a transação, retorna-se ao status quo ante, podendo o MP oferecer denúncia.",
      fundamento: "Lei 9.099/1995, art. 76, §§ 4º e 6º; Súmula Vinculante 35/STF.",
      macete: "É acordo, não sentença: culpa fica fora da mesa.",
      erroComum: "Equiparar aceitação de proposta a confissão.",
      comoBancaPensa: "Empilha três efeitos falsos numa frase fluida — julgamento por blocos derruba o item na primeira parte."
    }
  },

  /* ============ LEGISLAÇÃO PENAL ESPECIAL ============ */
  {
    id: "LE-008", disciplina: "Legislação Especial", assunto: "Lei de Tortura", subassunto: "Tortura-omissão",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "Aquele que se omite em face da prática de tortura, quando tinha o dever de evitá-la ou apurá-la, responde pelas mesmas penas cominadas ao autor direto das condutas de tortura.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "mesmas penas",
    cognitivo: {
      motivo: "A tortura-omissão tem pena própria e MENOR — detalhe que derruba multidões.",
      mede: "Lei 9.455/1997, art. 1º, § 2º.",
      pegadinhaDesc: "Equipara a pena do omitente à do torturador.",
      ondeErra: "Presume paridade de penas pela gravidade moral da omissão.",
      palavraCritica: "detenção de 1 a 4 anos",
      tecnica: "Torturar: reclusão de 2 a 8 anos. Omitir-se (devendo evitar/apurar): DETENÇÃO de 1 a 4 anos.",
      regraMental: "Quem faz pega mais; quem se cala pega menos — mas ambos respondem."
    },
    comentario: {
      resolucao: "ERRADO. Lei 9.455/1997, art. 1º, § 2º: 'Aquele que se omite em face dessas condutas, quando tinha o dever de evitá-las ou apurá-las, incorre na pena de detenção de 1 (um) a 4 (quatro) anos' — pena distinta e inferior à do caput (reclusão, 2 a 8 anos). Detalhe adicional: para a tortura-omissão, o STJ afasta o regime inicial fechado obrigatório.",
      fundamento: "Lei 9.455/1997, art. 1º, caput e § 2º.",
      macete: "Tortura própria = reclusão 2-8. Omissão do garante = detenção 1-4.",
      erroComum: "Aplicar a equiparação de penas que a lei não fez.",
      comoBancaPensa: "Pena diferenciada dentro do mesmo artigo = pegadinha numérica pronta."
    }
  },
  {
    id: "LE-009", disciplina: "Legislação Especial", assunto: "Lei de Tortura", subassunto: "Regime constitucional",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "O crime de tortura é inafiançável, insuscetível de graça ou anistia e imprescritível, nos termos da Constituição Federal.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "imprescritível",
    cognitivo: {
      motivo: "Cruzar os incisos XLII, XLIII e XLIV do art. 5º — mapa que a banca adora embaralhar.",
      mede: "Mandados constitucionais de criminalização.",
      pegadinhaDesc: "Duas qualidades verdadeiras + uma falsa emendada no fim.",
      ondeErra: "Valida a lista inteira pelo embalo das duas primeiras.",
      palavraCritica: "imprescritível",
      tecnica: "Imprescritíveis são SÓ dois: racismo e ação de grupos armados. Tortura prescreve.",
      regraMental: "3TH (tortura, tráfico, terrorismo, hediondos) = inafiançáveis e sem graça/anistia. RAção (Racismo + Ação de grupos armados) = inafiançáveis e IMPRESCRITÍVEIS."
    },
    comentario: {
      resolucao: "ERRADO. CF, art. 5º, XLIII: a tortura é inafiançável e insuscetível de graça ou anistia — mas NÃO é imprescritível. A imprescritibilidade constitucional alcança apenas o racismo (XLII) e a ação de grupos armados contra a ordem constitucional (XLIV). (STF: crimes de lesa-humanidade em condições específicas são debate à parte, não a regra do texto.)",
      fundamento: "CF, art. 5º, XLII, XLIII e XLIV.",
      macete: "Quem NÃO prescreve: RAção — Racismo e Ação de grupos armados. O resto prescreve.",
      erroComum: "Esticar a imprescritibilidade a todos os crimes 'graves'.",
      comoBancaPensa: "Verdade + verdade + falso: o terceiro elemento é onde mora o gabarito."
    }
  },
  {
    id: "LE-010", disciplina: "Legislação Especial", assunto: "Crimes de racismo", subassunto: "Lei 7.716/1989 e injúria racial",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.9,
    enunciado: "Com o advento da Lei nº 14.532/2023, a injúria consistente na utilização de elementos referentes a raça, cor, etnia ou procedência nacional passou a ser tipificada na própria Lei do Racismo, sujeitando-se ao regime constitucional da imprescritibilidade e da inafiançabilidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "injúria racial = racismo",
    cognitivo: {
      motivo: "Alteração legislativa recente (2023) que migrou a injúria racial do CP para a Lei 7.716.",
      mede: "Lei 7.716/1989, art. 2º-A; regime do racismo.",
      pegadinhaDesc: "Quem estudou antes de 2023 'sabe' que injúria racial era art. 140, § 3º, do CP — e marca E.",
      ondeErra: "Conhecimento desatualizado, com convicção.",
      palavraCritica: "art. 2º-A da Lei 7.716",
      tecnica: "Lei 14.532/2023: injúria racial saiu do CP e virou racismo (art. 2º-A) — pena de 2 a 5 anos; o STF (HC 154.248) já reconhecia sua imprescritibilidade.",
      regraMental: "Desde 2023: ofensa racial individual = racismo formal, com tudo que o regime implica."
    },
    comentario: {
      resolucao: "CERTO. A Lei 14.532/2023 revogou o § 3º do art. 140 do CP e inseriu o art. 2º-A na Lei 7.716/1989, tipificando como crime de racismo a injúria racial (reclusão de 2 a 5 anos). Antes disso, o STF (HC 154.248/DF) já havia equiparado a injúria racial ao racismo para fins de imprescritibilidade (CF, art. 5º, XLII).",
      fundamento: "Lei 7.716/1989, art. 2º-A (Lei 14.532/2023); CF, art. 5º, XLII; STF, HC 154.248.",
      macete: "Injúria racial 'mudou de casa': do CP para a Lei do Racismo — levando a imprescritibilidade na mudança.",
      erroComum: "Responder com o regime anterior a 2023 (injúria como crime contra a honra, prescritível).",
      comoBancaPensa: "Lei nova + jurisprudência anterior convergente = cobrança literal quase certa em prova policial."
    }
  },
  {
    id: "LE-011", disciplina: "Legislação Especial", assunto: "Lavagem de dinheiro", subassunto: "Autonomia do processo",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "O oferecimento de denúncia pelo crime de lavagem de dinheiro pressupõe a prévia condenação, com trânsito em julgado, do agente pela infração penal antecedente que gerou os valores ocultados.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "prévia condenação",
    cognitivo: {
      motivo: "Autonomia da lavagem em relação à infração antecedente — art. 2º, II e § 1º, da Lei 9.613.",
      mede: "Processamento dos crimes de lavagem.",
      pegadinhaDesc: "Cria requisito de condenação prévia que a lei expressamente dispensa.",
      ondeErra: "Raciocínio civilista de 'acessório segue o principal'.",
      palavraCritica: "independem",
      tecnica: "Basta haver INDÍCIOS suficientes da infração antecedente; o processo de lavagem é autônomo — mesmo desconhecido ou isento de pena o autor do crime-base.",
      regraMental: "Lavagem anda com as próprias pernas: indícios do antecedente bastam."
    },
    comentario: {
      resolucao: "ERRADO. Lei 9.613/1998, art. 2º, II: o processo e julgamento da lavagem 'independem do processo e julgamento das infrações penais antecedentes'; e § 1º: a denúncia será instruída 'com indícios suficientes da existência da infração penal antecedente', ainda que desconhecido ou isento de pena o seu autor.",
      fundamento: "Lei 9.613/1998, art. 2º, II e § 1º.",
      macete: "Indício do crime-base abre a porta; condenação prévia nunca foi a chave.",
      erroComum: "Exigir acessoriedade máxima entre lavagem e antecedente.",
      comoBancaPensa: "'Pressupõe prévia condenação' é o modelo padrão de exigência inexistente em leis especiais."
    }
  },
  {
    id: "LE-012", disciplina: "Legislação Especial", assunto: "Lavagem de dinheiro", subassunto: "Fases da lavagem",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "Doutrinariamente, o processo de lavagem de capitais desenvolve-se em três fases: colocação, quando os valores ilícitos ingressam no sistema financeiro; ocultação, marcada por operações que dificultam o rastreamento; e integração, quando os recursos retornam à economia formal com aparência lícita.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "colocação-ocultação-integração",
    cognitivo: {
      motivo: "Modelo trifásico clássico (GAFI) — base teórica de toda investigação financeira.",
      mede: "Fases da lavagem de dinheiro.",
      pegadinhaDesc: "Item correto; a troca usual é embaralhar a ordem ou as descrições das fases.",
      ondeErra: "Cruza as descrições de ocultação e integração.",
      palavraCritica: "ordem das fases",
      tecnica: "Confira o PAR fase↔descrição, não apenas os nomes: colocar → esconder → devolver limpo.",
      regraMental: "COI: Coloca, Oculta, Integra — a sequência da 'máquina de lavar'."
    },
    comentario: {
      resolucao: "CERTO. O modelo consagrado (GAFI/doutrina) descreve: (1) colocação (placement) — inserção do dinheiro sujo no sistema, com técnicas como o fracionamento (smurfing); (2) ocultação/dissimulação (layering) — camadas de operações para apagar a trilha; (3) integração (integration) — retorno formalmente lícito ao patrimônio do agente.",
      fundamento: "Doutrina consolidada sobre a Lei 9.613/1998 (modelo GAFI).",
      macete: "Smurfing mora na COLOCAÇÃO: pulverizar depósitos abaixo do radar.",
      erroComum: "Inverter as duas últimas fases.",
      comoBancaPensa: "Sequência técnica de três etapas = terreno ideal para embaralhar pares em prova futura."
    }
  },
  {
    id: "LE-013", disciplina: "Legislação Especial", assunto: "Crimes hediondos", subassunto: "Tráfico privilegiado",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "O denominado tráfico privilegiado, previsto no art. 33, § 4º, da Lei nº 11.343/2006, é considerado crime equiparado a hediondo, sujeitando o condenado aos prazos mais gravosos de progressão de regime.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "tráfico privilegiado",
    cognitivo: {
      motivo: "Consolidação jurisprudencial e legal: o privilégio afasta a hediondez.",
      mede: "Lei 8.072/1990 e art. 112, § 5º, da LEP.",
      pegadinhaDesc: "Estende a equiparação do tráfico 'comum' à figura privilegiada.",
      ondeErra: "Pensa que todo tráfico é equiparado a hediondo.",
      palavraCritica: "não é equiparado",
      tecnica: "STF (HC 118.533) firmou e o Pacote Anticrime positivou (LEP, art. 112, § 5º): o § 4º não é hediondo.",
      regraMental: "Primário + bons antecedentes + sem organização = privilégio SEM hediondez."
    },
    comentario: {
      resolucao: "ERRADO. O STF (HC 118.533) fixou que o tráfico privilegiado (art. 33, § 4º — agente primário, de bons antecedentes, que não se dedica a atividades criminosas nem integra organização) NÃO é equiparado a hediondo. A Lei 13.964/2019 positivou o entendimento: LEP, art. 112, § 5º.",
      fundamento: "Lei 11.343/2006, art. 33, § 4º; STF, HC 118.533; LEP, art. 112, § 5º.",
      macete: "Privilégio e hediondez não moram juntos.",
      erroComum: "Aplicar o regime hediondo pela mera capitulação no art. 33.",
      comoBancaPensa: "Jurisprudência convertida em lei = dupla porta de cobrança do mesmo tema."
    }
  },
  {
    id: "LE-014", disciplina: "Legislação Especial", assunto: "Estatuto da Pessoa Idosa", subassunto: "Ação penal",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.8,
    enunciado: "Os crimes definidos na Lei nº 10.741/2003 (Estatuto da Pessoa Idosa) são de ação penal pública condicionada à representação da vítima, em respeito à autonomia da pessoa idosa.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "condicionada",
    cognitivo: {
      motivo: "Regra expressa de ação penal do Estatuto — art. 95.",
      mede: "Persecução penal nos crimes contra a pessoa idosa.",
      pegadinhaDesc: "Troca 'incondicionada' por 'condicionada' com justificativa nobre (autonomia).",
      ondeErra: "A fundamentação plausível legitima a troca.",
      palavraCritica: "incondicionada",
      tecnica: "Proteção integral: o Estado age independentemente de representação (art. 95 do Estatuto).",
      regraMental: "Idoso e vulnerável: MP age sozinho — ação pública INCONDICIONADA."
    },
    comentario: {
      resolucao: "ERRADO. Lei 10.741/2003, art. 95: 'Os crimes definidos nesta Lei são de ação penal pública INCONDICIONADA...'. A lógica é de proteção integral: a persecução não depende da iniciativa da vítima, frequentemente em situação de dependência do agressor. Lembrete: pessoa idosa = 60 anos ou mais (art. 1º).",
      fundamento: "Lei 10.741/2003, arts. 1º e 95.",
      macete: "60+ = incondicionada. E prioridade ESPECIAL a partir dos 80.",
      erroComum: "Aceitar a condicionada pela retórica da 'autonomia da vítima'.",
      comoBancaPensa: "Justificativa bonita anexada a regra falsa — julgue a regra, não o argumento."
    }
  },
  {
    id: "LE-015", disciplina: "Legislação Especial", assunto: "Crimes ambientais", subassunto: "Responsabilidade penal da pessoa jurídica",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "Nos crimes ambientais, a responsabilização penal da pessoa jurídica está condicionada à simultânea imputação da pessoa física que atua em seu nome, em razão da adoção obrigatória da teoria da dupla imputação.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "dupla imputação",
    cognitivo: {
      motivo: "Superação jurisprudencial da dupla imputação obrigatória (RE 548.181/STF).",
      mede: "Lei 9.605/1998, art. 3º, e jurisprudência.",
      pegadinhaDesc: "Apresenta como obrigatória uma teoria que o STF afastou.",
      ondeErra: "Estudou pela doutrina antiga que exigia o litisconsórcio necessário.",
      palavraCritica: "condicionada à simultânea imputação",
      tecnica: "PJ pode ser denunciada SOZINHA por crime ambiental — a responsabilização não depende da identificação/punição da pessoa física.",
      regraMental: "Ambiental: empresa responde por conta própria (decisão de representante + benefício da entidade, art. 3º)."
    },
    comentario: {
      resolucao: "ERRADO. O STF (RE 548.181) e o STJ posteriormente assentaram que a responsabilização penal da pessoa jurídica por crime ambiental (CF, art. 225, § 3º; Lei 9.605/1998, art. 3º) NÃO se condiciona à simultânea persecução da pessoa física. A dupla imputação deixou de ser obrigatória.",
      fundamento: "CF, art. 225, § 3º; Lei 9.605/1998, art. 3º; STF, RE 548.181.",
      macete: "A empresa não é escudo nem refém: responde ainda que o executivo escape à identificação.",
      erroComum: "Exigir o litisconsórcio passivo necessário da orientação superada.",
      comoBancaPensa: "Virada jurisprudencial consolidada = cobra-se o entendimento NOVO contra o manual antigo."
    }
  },
  {
    id: "LE-016", disciplina: "Legislação Especial", assunto: "Crimes em licitações", subassunto: "Lei 14.133/2021",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "A Lei nº 14.133/2021 inseriu os crimes em licitações e contratos administrativos no Código Penal, em capítulo próprio, revogando os tipos penais que constavam da antiga Lei de Licitações (Lei nº 8.666/1993).",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "no Código Penal",
    cognitivo: {
      motivo: "Migração topográfica dos crimes licitatórios — mudança estrutural que a banca cobra.",
      mede: "Localização e regime dos crimes em licitações (CP, arts. 337-E a 337-P).",
      pegadinhaDesc: "Item correto; a pegadinha futura é dizer que os crimes estão 'na própria Lei 14.133'.",
      ondeErra: "Acha que a nova lei de licitações traz os crimes em seu próprio texto.",
      palavraCritica: "Capítulo II-B do Título XI do CP",
      tecnica: "A Lei 14.133 ADICIONOU os arts. 337-E a 337-P ao CP e revogou imediatamente os arts. 89 a 108 da Lei 8.666.",
      regraMental: "Crimes de licitação moram no CP desde 2021 (337-E em diante)."
    },
    comentario: {
      resolucao: "CERTO. A Lei 14.133/2021 (art. 178) acrescentou ao Código Penal o Capítulo II-B do Título XI (arts. 337-E a 337-P — contratação direta ilegal, frustração do caráter competitivo, patrocínio de contratação indevida, modificação ou pagamento irregular etc.) e revogou expressamente os crimes da Lei 8.666/1993 (arts. 89 a 108).",
      fundamento: "Lei 14.133/2021, arts. 178 e 193, I; CP, arts. 337-E a 337-P.",
      macete: "Licitação criminosa agora é capítulo do CP — 337 e letras.",
      erroComum: "Procurar os tipos penais dentro da Lei 14.133.",
      comoBancaPensa: "Mudança de endereço legislativo é cobrança certa nos primeiros certames após a reforma."
    }
  },
  {
    id: "LE-017", disciplina: "Legislação Especial", assunto: "Convenção de Budapeste", subassunto: "Decreto 11.491/2023",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "A Convenção de Budapeste sobre o Crime Cibernético, promulgada no Brasil pelo Decreto nº 11.491/2023, estabelece medidas de harmonização legislativa e mecanismos de cooperação internacional para a investigação e a persecução de crimes praticados por meio de sistemas informáticos, inclusive quanto à obtenção de provas eletrônicas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "cooperação internacional",
    cognitivo: {
      motivo: "Norma recém-incorporada e expressamente citada no edital.",
      mede: "Objeto e finalidades da Convenção de Budapeste.",
      pegadinhaDesc: "Item descritivo correto; trocas prováveis: datas, âmbito (só Europa?) ou natureza (autoexecutável?).",
      ondeErra: "Desconhece a promulgação de 2023 e chuta E.",
      palavraCritica: "Decreto 11.491/2023",
      tecnica: "Budapeste (2001, Conselho da Europa, aberta a terceiros): tipificação harmonizada + cooperação + prova eletrônica. Brasil: promulgação em 2023.",
      regraMental: "Budapeste = 'MLAT do cibercrime': integra o Brasil à rede global de cooperação digital."
    },
    comentario: {
      resolucao: "CERTO. O Decreto 11.491/2023 promulgou a Convenção sobre o Crime Cibernético (Budapeste, 2001) — primeiro tratado internacional dedicado aos crimes informáticos. Seus eixos: harmonização do direito material, instrumentos processuais para prova eletrônica e cooperação internacional (rede 24/7, assistência mútua).",
      fundamento: "Decreto 11.491/2023; Convenção de Budapeste (2001).",
      macete: "3 pilares: tipificar parecido, investigar com ferramentas próprias, cooperar rápido.",
      erroComum: "Achar que, por ser do Conselho da Europa, não vincularia o Brasil.",
      comoBancaPensa: "Tratado novo no ordenamento + tema cibernético em alta = predição de cobrança máxima."
    }
  },

  /* ============ ESTATÍSTICA E ANÁLISE DE DADOS ============ */
  {
    id: "ES-001", disciplina: "Estatística e Análise de Dados", assunto: "Estatística descritiva", subassunto: "Medidas de posição",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "Em um conjunto de dados que contenha valores extremos (outliers), a mediana constitui medida de tendência central mais robusta que a média aritmética, por não ser influenciada pela magnitude desses valores.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "robusta",
    cognitivo: {
      motivo: "Propriedade comparativa média × mediana — conceito central da estatística descritiva.",
      mede: "Medidas de posição e sensibilidade a outliers.",
      pegadinhaDesc: "Item correto; a inversão (média robusta) é a troca esperada em outras provas.",
      ondeErra: "Confunde qual das medidas 'sofre' com extremos.",
      palavraCritica: "não é influenciada pela magnitude",
      tecnica: "A mediana depende só da POSIÇÃO central; a média soma todos os valores — um bilionário na amostra arrasta a média, não a mediana.",
      regraMental: "Outlier bagunça a média; a mediana nem olha para ele."
    },
    comentario: {
      resolucao: "CERTO. A mediana é medida de posição baseada na ordem dos dados: valores extremos alteram no máximo qual observação ocupa o centro, mas não 'puxam' o resultado pela sua magnitude. A média, por incorporar todos os valores no numerador, é sensível a outliers.",
      fundamento: "Estatística descritiva — propriedades das medidas de tendência central.",
      macete: "Renda de bairro com um milionário: média mente, mediana conta a verdade.",
      erroComum: "Marcar E por achar que 'robusta' teria sentido técnico diverso.",
      comoBancaPensa: "Compara duas medidas irmãs — o formato favorito para futuras inversões."
    }
  },
  {
    id: "ES-002", disciplina: "Estatística e Análise de Dados", assunto: "Correlação", subassunto: "Correlação × causalidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "Se o coeficiente de correlação linear de Pearson entre duas variáveis for próximo de 1, é correto concluir que a variação de uma delas é causa direta da variação da outra.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "causa direta",
    cognitivo: {
      motivo: "O erro inferencial mais clássico da estatística aplicada.",
      mede: "Interpretação do coeficiente de Pearson (item 2.25 do edital).",
      pegadinhaDesc: "Converte associação estatística em relação causal.",
      ondeErra: "Traduz 'andam juntas' como 'uma causa a outra'.",
      palavraCritica: "correlação ≠ causalidade",
      tecnica: "r próximo de 1 indica forte associação LINEAR — que pode decorrer de coincidência, variável oculta (confundidora) ou causalidade reversa.",
      regraMental: "Sorvete e afogamentos se correlacionam — a causa é o verão, não o sorvete."
    },
    comentario: {
      resolucao: "ERRADO. O coeficiente de Pearson mede apenas a força e o sentido da associação linear entre variáveis. Correlação elevada não autoriza conclusão de causalidade: pode haver terceira variável influenciando ambas, relação inversa ou mero acaso. Causalidade exige desenho de estudo adequado (experimentos, controles).",
      fundamento: "Estatística — interpretação do coeficiente de correlação.",
      macete: "Pearson mostra a dança, não diz quem conduz.",
      erroComum: "Concluir 'X causa Y' de um r alto.",
      comoBancaPensa: "Frase tecnicamente vestida escondendo o salto lógico proibido."
    }
  },
  {
    id: "ES-003", disciplina: "Estatística e Análise de Dados", assunto: "Distribuição normal", subassunto: "Regra empírica (3 sigmas)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "Em uma distribuição normal, aproximadamente 95% das observações situam-se no intervalo compreendido entre a média menos dois desvios-padrão e a média mais dois desvios-padrão.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "95% / dois desvios",
    cognitivo: {
      motivo: "Regra 68-95-99,7, item expresso do edital (2.27).",
      mede: "Propriedades da distribuição normal.",
      pegadinhaDesc: "Item correto; as trocas típicas são 95%↔99,7% ou 1↔2 desvios.",
      ondeErra: "Embaralha os pares percentual↔número de sigmas.",
      palavraCritica: "±2σ ↔ 95%",
      tecnica: "Grave a escada: ±1σ ≈ 68%; ±2σ ≈ 95%; ±3σ ≈ 99,7%.",
      regraMental: "68-95-99,7: um degrau por sigma."
    },
    comentario: {
      resolucao: "CERTO. Pela regra empírica da distribuição normal: cerca de 68% dos dados estão a ±1 desvio-padrão da média, 95% a ±2 e 99,7% a ±3. A assertiva pareia corretamente 95% com dois desvios.",
      fundamento: "Estatística — regra empírica (três sigmas) da distribuição normal.",
      macete: "Sequência mágica: 68 → 95 → 99,7.",
      erroComum: "Atribuir 95% a ±1σ ou 99% a ±2σ.",
      comoBancaPensa: "Três pares numéricos fixos = questão de conferência direta, feita para trocas."
    }
  },
  {
    id: "ES-004", disciplina: "Estatística e Análise de Dados", assunto: "Medidas de dispersão", subassunto: "Coeficiente de variação",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "O coeficiente de variação, obtido pela razão entre o desvio-padrão e a média, é medida de dispersão relativa e adimensional, o que permite comparar a variabilidade de conjuntos de dados expressos em unidades ou escalas diferentes.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "adimensional",
    cognitivo: {
      motivo: "Utilidade prática do CV — comparação entre séries heterogêneas.",
      mede: "Medidas de dispersão (item 2.24.4).",
      pegadinhaDesc: "Item conceitual correto; a troca clássica é inverter a razão (média/desvio).",
      ondeErra: "Confunde a fórmula ou nega a comparabilidade.",
      palavraCritica: "desvio ÷ média",
      tecnica: "CV = s/x̄ (geralmente ×100%): as unidades se cancelam, sobrando dispersão 'por unidade de média'.",
      regraMental: "CV compara alturas em metros com pesos em quilos — porque vira porcentagem pura."
    },
    comentario: {
      resolucao: "CERTO. CV = desvio-padrão ÷ média (frequentemente ×100). Por ser a razão de duas grandezas na mesma unidade, é adimensional — ideal para comparar variabilidades de variáveis com médias ou unidades distintas (ex.: dispersão de salários × dispersão de idades).",
      fundamento: "Estatística descritiva — medidas de dispersão relativa.",
      macete: "Quem tem maior CV é mais heterogêneo, não importa a unidade.",
      erroComum: "Inverter numerador e denominador da razão.",
      comoBancaPensa: "Definição + utilidade na mesma frase: dupla oportunidade de troca em provas futuras."
    }
  },
  {
    id: "ES-005", disciplina: "Estatística e Análise de Dados", assunto: "Probabilidade", subassunto: "Independência de eventos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "Dois eventos A e B são independentes quando a probabilidade de ocorrência simultânea de ambos é igual ao produto de suas probabilidades individuais, isto é, P(A∩B) = P(A) × P(B).",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "produto",
    cognitivo: {
      motivo: "Definição formal de independência — base para Bayes e distribuições.",
      mede: "Conceito de independência (itens 2.18-2.19).",
      pegadinhaDesc: "Item correto; a confusão plantada em provas é independente × mutuamente excludente.",
      ondeErra: "Mistura independência (produto) com exclusão mútua (interseção vazia).",
      palavraCritica: "P(A∩B) = P(A)·P(B)",
      tecnica: "Independentes: um não altera a chance do outro. Excludentes: não podem ocorrer juntos — conceitos DIFERENTES.",
      regraMental: "Excludentes com probabilidade positiva nunca são independentes."
    },
    comentario: {
      resolucao: "CERTO. A definição de independência é exatamente P(A∩B) = P(A)×P(B) — equivalente a P(A|B) = P(A). Não confundir com eventos mutuamente excludentes, em que P(A∩B) = 0.",
      fundamento: "Teoria da probabilidade — axiomas e independência.",
      macete: "Independente multiplica; excludente soma (na união) e zera (na interseção).",
      erroComum: "Tratar 'não podem ocorrer juntos' como sinônimo de independência.",
      comoBancaPensa: "Definições vizinhas e trocáveis — decorou uma, a banca cobra a fronteira entre as duas."
    }
  },
  {
    id: "ES-006", disciplina: "Estatística e Análise de Dados", assunto: "Amostragem", subassunto: "Estratificada × conglomerados",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "Na amostragem estratificada, a população é dividida em grupos e sorteiam-se alguns desses grupos, examinando-se todos os seus integrantes; já na amostragem por conglomerados, extraem-se aleatoriamente elementos de cada um dos grupos previamente definidos.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "estratificada × conglomerados",
    cognitivo: {
      motivo: "Inversão espelhada das duas técnicas de amostragem por grupos.",
      mede: "Técnicas de amostragem (itens 2.28-2.29).",
      pegadinhaDesc: "As descrições estão corretas — com os rótulos trocados entre si.",
      ondeErra: "Reconhece as mecânicas, não confere o pareamento nome↔procedimento.",
      palavraCritica: "de cada estrato × grupos inteiros",
      tecnica: "ESTRATIFICADA: tira um pouco DE CADA estrato (todos os grupos participam). CONGLOMERADOS: sorteia GRUPOS inteiros (nem todos participam).",
      regraMental: "Estrato = fatia de todos. Conglomerado = pacote fechado sorteado."
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. Na amostragem ESTRATIFICADA, dividem-se os elementos em estratos homogêneos e sorteiam-se elementos DENTRO DE CADA estrato. Na amostragem POR CONGLOMERADOS, sorteiam-se conglomerados (grupos) inteiros e examinam-se seus integrantes.",
      fundamento: "Técnicas de amostragem probabilística.",
      macete: "Pesquisa por bairros sorteando QUARTEIRÕES inteiros = conglomerado. Garantindo homens E mulheres na amostra = estrato.",
      erroComum: "Aceitar o item porque as duas mecânicas 'existem'.",
      comoBancaPensa: "Par espelhado de procedimentos — o mesmo molde de DA-005 e DH-005."
    }
  },
  {
    id: "ES-007", disciplina: "Estatística e Análise de Dados", assunto: "Inferência", subassunto: "Testes de hipóteses",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "Em um teste de hipóteses, o nível de significância corresponde à probabilidade de se rejeitar a hipótese nula quando ela é verdadeira, ou seja, à probabilidade de ocorrência do erro tipo I.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "erro tipo I",
    cognitivo: {
      motivo: "Definição nuclear de α — item 3.3 do edital.",
      mede: "Testes de hipóteses: significância e tipos de erro.",
      pegadinhaDesc: "Item correto; a troca padrão é atribuir α ao erro tipo II (β).",
      ondeErra: "Embaralha os dois tipos de erro.",
      palavraCritica: "rejeitar H0 verdadeira",
      tecnica: "Erro I: condenar inocente (rejeitar H0 verdadeira) = α. Erro II: absolver culpado (aceitar H0 falsa) = β. Potência = 1−β.",
      regraMental: "Analogia do júri: H0 é a inocência — erro tipo I é a condenação injusta."
    },
    comentario: {
      resolucao: "CERTO. O nível de significância (α) é, por definição, a probabilidade máxima tolerada de erro tipo I — rejeitar a hipótese nula sendo ela verdadeira. O erro tipo II (β) é o oposto: não rejeitar H0 falsa; a potência do teste é 1−β.",
      fundamento: "Inferência estatística — teoria dos testes de hipóteses.",
      macete: "α vem primeiro no alfabeto e no tipo de erro: tipo I.",
      erroComum: "Definir α como 'probabilidade de a hipótese ser verdadeira' (interpretação incorreta).",
      comoBancaPensa: "Dupla de erros espelhados (I × II) = próxima inversão já contratada."
    }
  },
  {
    id: "ES-008", disciplina: "Estatística e Análise de Dados", assunto: "Machine Learning", subassunto: "Overfitting",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "Ocorre overfitting quando o modelo preditivo se ajusta excessivamente às particularidades dos dados de treinamento, apresentando alto desempenho nesses dados, porém baixa capacidade de generalização para dados novos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "generalização",
    cognitivo: {
      motivo: "Conceito central de avaliação de modelos — item 4 de Análise de Dados.",
      mede: "Fontes de erro em modelos preditivos.",
      pegadinhaDesc: "Item correto; a banca tende a trocar por underfitting ou dizer que overfitting erra 'também no treino'.",
      ondeErra: "Confunde over (decora) com under (nem aprende).",
      palavraCritica: "ótimo no treino, ruim no novo",
      tecnica: "Overfitting = decorou a prova do ano passado. Underfitting = não estudou nem o básico. Regularização/validação cruzada combatem o primeiro.",
      regraMental: "Decorar ≠ aprender — modelo que decora falha no mundo real."
    },
    comentario: {
      resolucao: "CERTO. Overfitting é o sobreajuste: o modelo captura ruído e idiossincrasias do conjunto de treinamento, minimizando o erro ali, mas com erro elevado em dados não vistos (baixa generalização). Mitigações: regularização, validação cruzada, mais dados, simplificação do modelo.",
      fundamento: "Machine learning — viés × variância, validação de modelos.",
      macete: "Treino 99%, produção 60% = cheiro clássico de overfitting.",
      erroComum: "Chamar de overfitting o modelo que já erra no próprio treino (isso é underfitting).",
      comoBancaPensa: "Par over/under = mais um espelho pronto para inversão em prova."
    }
  },
  {
    id: "ES-009", disciplina: "Estatística e Análise de Dados", assunto: "Mineração de dados", subassunto: "Clusterização",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "A análise de agrupamentos (clusterização) é técnica de aprendizado supervisionado, pois exige que os dados de treinamento estejam previamente rotulados com as classes às quais pertencem.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "supervisionado",
    cognitivo: {
      motivo: "Fronteira supervisionado × não supervisionado — base da mineração de dados.",
      mede: "Tarefas de mineração (item 2 de Análise de Dados).",
      pegadinhaDesc: "Atribui à clusterização a exigência de rótulos, própria da CLASSIFICAÇÃO.",
      ondeErra: "Confunde agrupar (descobrir grupos) com classificar (prever classe conhecida).",
      palavraCritica: "não supervisionado",
      tecnica: "CLASSIFICAÇÃO: rótulos prévios (supervisionado). CLUSTERIZAÇÃO: descobre grupos por similaridade, SEM rótulos (não supervisionado).",
      regraMental: "Cluster procura padrões que ninguém etiquetou."
    },
    comentario: {
      resolucao: "ERRADO. A clusterização é técnica de aprendizado NÃO SUPERVISIONADO: agrupa observações por similaridade sem qualquer rótulo prévio (ex.: k-means agrupando ocorrências criminais por padrão espacial). Quem exige dados rotulados é a classificação (supervisionada), como o Naive Bayes.",
      fundamento: "Mineração de dados — paradigmas de aprendizado.",
      macete: "Tem gabarito no treino? Supervisionado. Não tem? Cluster/associação.",
      erroComum: "Rotular toda mineração como supervisionada.",
      comoBancaPensa: "Vocabulário técnico do edital novo — quem só decorou nomes cai na troca de paradigma."
    }
  },

  /* ============ CONTABILIDADE E ANÁLISE FINANCEIRA ============ */
  {
    id: "CT-001", disciplina: "Contabilidade e Análise Financeira", assunto: "Patrimônio", subassunto: "Equação fundamental",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.85,
    enunciado: "Pela equação fundamental do patrimônio, o ativo corresponde à soma do passivo exigível com o patrimônio líquido, de modo que a situação líquida da entidade é obtida pela diferença entre o ativo e o passivo exigível.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "A = P + PL",
    cognitivo: {
      motivo: "Base de toda a contabilidade — item 2 do edital.",
      mede: "Equação patrimonial e situação líquida.",
      pegadinhaDesc: "Item correto; trocas futuras: inverter a diferença (P−A) ou somar PL ao ativo.",
      ondeErra: "Embaralha os termos da equação sob pressão.",
      palavraCritica: "A = P + PL ⇔ PL = A − P",
      tecnica: "Bens + direitos (A) de um lado; obrigações (P) e riqueza própria (PL) do outro.",
      regraMental: "O que TENHO = o que DEVO + o que é MEU."
    },
    comentario: {
      resolucao: "CERTO. Equação fundamental: ATIVO = PASSIVO + PATRIMÔNIO LÍQUIDO. Daí a situação líquida (PL) = Ativo − Passivo exigível. PL positivo: ativo supera obrigações; PL negativo (passivo a descoberto): dívidas superam bens e direitos.",
      fundamento: "Teoria contábil — estática patrimonial.",
      macete: "Balanço 'fecha' sempre: os dois lados pesam igual por definição.",
      erroComum: "Inverter os termos da diferença na situação líquida.",
      comoBancaPensa: "Fórmula de três termos = três pontos de troca possíveis; conferir cada termo é obrigatório."
    }
  },
  {
    id: "CT-002", disciplina: "Contabilidade e Análise Financeira", assunto: "Atos e fatos administrativos", subassunto: "Fatos permutativos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "A compra de um veículo à vista, por valor equivalente ao de mercado, constitui fato contábil modificativo, uma vez que altera a composição e o total do patrimônio líquido da entidade.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "modificativo",
    cognitivo: {
      motivo: "Classificação dos fatos contábeis — item 3 do edital.",
      mede: "Fatos permutativos, modificativos e mistos.",
      pegadinhaDesc: "Rotula como modificativo uma simples troca de ativos.",
      ondeErra: "Acha que 'movimentou dinheiro' = 'mudou o PL'.",
      palavraCritica: "não altera o PL",
      tecnica: "Dinheiro (ativo) sai, veículo (ativo) entra, no mesmo valor: PERMUTA entre contas — PL intacto.",
      regraMental: "Permutativo troca; modificativo mexe no PL (receita/despesa); misto faz os dois."
    },
    comentario: {
      resolucao: "ERRADO. Trata-se de fato PERMUTATIVO (ou qualitativo): troca de um ativo (caixa) por outro (veículo) de igual valor, alterando a composição do patrimônio sem modificar o total do PL. Modificativos envolvem receitas ou despesas (ex.: pagamento de salários); mistos combinam permuta e modificação (ex.: venda de mercadoria com lucro).",
      fundamento: "Teoria contábil — classificação dos fatos administrativos.",
      macete: "Se não passou por receita/despesa, o PL nem percebeu.",
      erroComum: "Confundir saída de caixa com redução de riqueza própria.",
      comoBancaPensa: "Classificação tripartite = rotação constante de exemplos com rótulo trocado."
    }
  },
  {
    id: "CT-003", disciplina: "Contabilidade e Análise Financeira", assunto: "Contas", subassunto: "Mecanismo de débito e crédito",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "No método das partidas dobradas, o lançamento a débito representa sempre uma diminuição de valor, ao passo que o lançamento a crédito indica sempre um aumento, independentemente da natureza da conta movimentada.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "sempre",
    cognitivo: {
      motivo: "Desfazer a associação leiga débito=ruim / crédito=bom.",
      mede: "Natureza das contas e mecanismo de débito/crédito (item 4).",
      pegadinhaDesc: "Universaliza um efeito que depende da natureza da conta.",
      ondeErra: "Transfere o vocabulário bancário do dia a dia para a técnica contábil.",
      palavraCritica: "natureza da conta",
      tecnica: "Contas devedoras (ativo, despesa): débito AUMENTA. Contas credoras (passivo, PL, receita): crédito AUMENTA.",
      regraMental: "Débito e crédito são lados do lançamento (esquerda/direita), não juízo de valor."
    },
    comentario: {
      resolucao: "ERRADO. O efeito do débito e do crédito depende da natureza da conta: nas contas de natureza devedora (ativo e despesas), o débito aumenta e o crédito diminui o saldo; nas de natureza credora (passivo, patrimônio líquido e receitas), ocorre o inverso. Não há 'sempre'.",
      fundamento: "Método das partidas dobradas — natureza e funcionamento das contas.",
      macete: "Comprar caixa (ativo) se faz DEBITANDO caixa — débito aumentando saldo.",
      erroComum: "Importar a semântica do extrato bancário para a escrituração.",
      comoBancaPensa: "'Sempre' + regra que comporta duas famílias de contas = item errado sob medida."
    }
  },
  {
    id: "CT-004", disciplina: "Contabilidade e Análise Financeira", assunto: "Balancete e demonstrações", subassunto: "Balancete de verificação",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "A igualdade entre os totais de débitos e de créditos em um balancete de verificação assegura a inexistência de erros de escrituração no período examinado.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "assegura a inexistência",
    cognitivo: {
      motivo: "Limite técnico do balancete — pega quem o toma por auditoria.",
      mede: "Função e alcance do balancete de verificação (item 8).",
      pegadinhaDesc: "Converte condição necessária (equilíbrio) em condição suficiente (ausência de erro).",
      ondeErra: "Assume que 'bateu' = 'está certo'.",
      palavraCritica: "necessária ≠ suficiente",
      tecnica: "O balancete não detecta: lançamento omitido, duplicado, em conta errada ou com valor errado dos dois lados — todos preservam o equilíbrio.",
      regraMental: "Balancete que fecha só garante aritmética, não fidelidade."
    },
    comentario: {
      resolucao: "ERRADO. A igualdade débitos = créditos é consequência automática das partidas dobradas e revela apenas equilíbrio aritmético. Persistem invisíveis ao balancete: omissão integral de lançamento, duplicidade, inversão de contas, classificação incorreta e erros de igual valor em ambos os lados.",
      fundamento: "Técnica contábil — balancete de verificação (limitações).",
      macete: "Fechar as somas ≠ contar a verdade: fraude bem lançada também 'bate'.",
      erroComum: "Tratar o balancete como prova de exatidão da escrituração.",
      comoBancaPensa: "Para carreira policial, o detalhe é investigativo: livros equilibrados podem esconder fraude."
    }
  },
  {
    id: "CT-005", disciplina: "Contabilidade e Análise Financeira", assunto: "Análise financeira investigativa", subassunto: "Smurfing",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "Denomina-se smurfing a técnica de lavagem de dinheiro consistente no fracionamento de grandes quantias em múltiplos depósitos de pequeno valor, realizados de forma pulverizada, com o objetivo de evitar os controles e as comunicações obrigatórias ao COAF.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "fracionamento",
    cognitivo: {
      motivo: "Tipologia expressamente citada no edital (item 9 de Análise Financeira).",
      mede: "Red flags de lavagem — transações fracionadas.",
      pegadinhaDesc: "Item correto; troca provável: confundir smurfing com uso de laranjas ou com mescla (commingling).",
      ondeErra: "Não conhece o jargão e chuta E.",
      palavraCritica: "abaixo do limiar de comunicação",
      tecnica: "Fracionar para ficar sob o radar dos limites de reporte = smurfing, típico da fase de COLOCAÇÃO.",
      regraMental: "Smurfs: muitos e pequenos — como os depósitos."
    },
    comentario: {
      resolucao: "CERTO. Smurfing (ou structuring) é o fracionamento deliberado de valores em operações menores, distribuídas em datas, contas ou agências distintas, para escapar dos limiares de comunicação automática ao COAF (Lei 9.613/1998; Circular Bacen 3.978/2020). Integra a fase de colocação da lavagem.",
      fundamento: "Lei 9.613/1998; tipologias GAFI/COAF.",
      macete: "Depósitos 'redondos', repetidos e logo abaixo do limite = alerta máximo.",
      erroComum: "Confundir com a mera utilização de interpostas pessoas (laranjas).",
      comoBancaPensa: "Termo técnico do edital novo = definição literal cobrada nas primeiras provas."
    }
  },
  {
    id: "CT-006", disciplina: "Contabilidade e Análise Financeira", assunto: "Análise financeira investigativa", subassunto: "Indícios de ocultação patrimonial",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "Na análise financeira investigativa, a constatação de movimentações bancárias incompatíveis com a renda declarada e a utilização de interpostas pessoas (laranjas) para a titularidade de contas e bens constituem indícios de ocultação de patrimônio, aptos a orientar o aprofundamento da investigação, embora não bastem, isoladamente, para a condenação criminal.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "indícios",
    cognitivo: {
      motivo: "Red flags dos itens 7-13 do edital + valor probatório do indício.",
      mede: "Comparação entre fluxos financeiros e capacidade econômica; uso de laranjas.",
      pegadinhaDesc: "A parte final ('não bastam para condenar') parece enfraquecer o item — mas o torna tecnicamente preciso.",
      ondeErra: "Marca E achando que a ressalva final contradiz a utilidade dos indícios.",
      palavraCritica: "orientar a investigação",
      tecnica: "Indício ≠ prova plena: red flag abre linha investigativa (RIF do COAF, quebra de sigilo autorizada), não sentença.",
      regraMental: "Incompatibilidade renda×movimentação = ponto de partida, nunca de chegada."
    },
    comentario: {
      resolucao: "CERTO. Movimentações incompatíveis com a renda e a interposição de terceiros são tipologias clássicas de ocultação patrimonial (Lei 9.613/1998) e fundamentam relatórios de inteligência financeira e medidas investigativas. Contudo, a condenação exige o standard probatório do processo penal — indícios isolados não bastam.",
      fundamento: "Lei 9.613/1998; tipologias COAF/GAFI; CPP, art. 239 (conceito de indício).",
      macete: "Vida de rico com renda de pobre: o papel do investigador é seguir o dinheiro (follow the money).",
      erroComum: "Tratar red flags como prova cabal — ou, no extremo oposto, como irrelevantes.",
      comoBancaPensa: "Item longo e tecnicamente equilibrado — treina a imunidade ao 'item extenso parece errado'."
    }
  },
];

/* ---- Integra as questões específicas ao banco ---- */
QUESTOES.push(...QUESTOES_PCAL_ESPECIFICOS);

/* =====================================================================
   AJUSTES DE INTEGRAÇÃO AO EDITAL PC-AL 2026
   ===================================================================== */

/* 1) Renomeia "Informática" para a nomenclatura do edital */
QUESTOES.forEach(q => { if (q.disciplina === "Informática") q.disciplina = "TI e Segurança Cibernética"; });

/* 2) Marca temas que NÃO constam do conteúdo programático de
      Agente/Escrivão no edital PC-AL 2026 (mantidos como treino) */
const FORA_EDITAL_PCAL2026 = ["CR-001", "CR-002", "LE-001", "LE-002", "LE-003"];
QUESTOES.forEach(q => { if (FORA_EDITAL_PCAL2026.includes(q.id)) q.foraEdital = true; });

/* 3) Frequências estimadas das novas disciplinas (Módulo 2) */
FREQUENCIA_TEMAS.push(
  { disciplina: "Raciocínio Lógico-Matemático", temas: [
    { tema: "Lógica sentencial (equivalências, negações)", freq: 95, tendencia: "estavel", prob: 0.95 },
    { tema: "Tabelas-verdade e conectivos", freq: 88, tendencia: "estavel", prob: 0.9 },
    { tema: "Porcentagem e proporções", freq: 78, tendencia: "estavel", prob: 0.8 },
    { tema: "Contagem e probabilidade", freq: 75, tendencia: "estavel", prob: 0.78 },
    { tema: "Diagramas lógicos e conjuntos", freq: 70, tendencia: "estavel", prob: 0.72 },
  ]},
  { disciplina: "Direitos Humanos", temas: [
    { tema: "Tratados internacionais (art. 5º, §§ 2º e 3º)", freq: 90, tendencia: "alta", prob: 0.92 },
    { tema: "Pacto de São José da Costa Rica", freq: 88, tendencia: "alta", prob: 0.9 },
    { tema: "Teoria geral e características", freq: 85, tendencia: "estavel", prob: 0.87 },
    { tema: "Dimensões/gerações", freq: 75, tendencia: "estavel", prob: 0.78 },
    { tema: "DH na Constituição Federal", freq: 80, tendencia: "estavel", prob: 0.82 },
  ]},
  { disciplina: "Ética no Serviço Público", temas: [
    { tema: "Ética × moral (conceitos)", freq: 85, tendencia: "estavel", prob: 0.85 },
    { tema: "Ética e função pública", freq: 82, tendencia: "estavel", prob: 0.84 },
    { tema: "Código de Ética de AL (Lei 6.754/2006)", freq: 78, tendencia: "alta", prob: 0.8 },
  ]},
  { disciplina: "Crimes Cibernéticos e Segurança Digital", temas: [
    { tema: "Art. 154-A do CP (Lei 12.737 + Lei 14.155/2021)", freq: 92, tendencia: "alta", prob: 0.93 },
    { tema: "Busca e apreensão de itens digitais", freq: 88, tendencia: "alta", prob: 0.9 },
    { tema: "LGPD aplicada", freq: 85, tendencia: "alta", prob: 0.87 },
    { tema: "Golpes virtuais e MFA", freq: 80, tendencia: "alta", prob: 0.83 },
  ]},
  { disciplina: "Estatística e Análise de Dados", temas: [
    { tema: "Estatística descritiva (posição e dispersão)", freq: 90, tendencia: "alta", prob: 0.9 },
    { tema: "Probabilidade e Bayes", freq: 85, tendencia: "estavel", prob: 0.87 },
    { tema: "Distribuição normal e regra empírica", freq: 82, tendencia: "estavel", prob: 0.84 },
    { tema: "Machine learning (overfitting, paradigmas)", freq: 78, tendencia: "alta", prob: 0.8 },
    { tema: "Amostragem", freq: 75, tendencia: "estavel", prob: 0.77 },
  ]},
  { disciplina: "Contabilidade e Análise Financeira", temas: [
    { tema: "Tipologias de lavagem (smurfing, laranjas)", freq: 88, tendencia: "alta", prob: 0.9 },
    { tema: "Equação patrimonial e situação líquida", freq: 85, tendencia: "estavel", prob: 0.86 },
    { tema: "Fatos contábeis (permutativo/modificativo/misto)", freq: 80, tendencia: "estavel", prob: 0.82 },
    { tema: "Débito, crédito e balancete", freq: 78, tendencia: "estavel", prob: 0.8 },
  ]},
);

/* 4) Predições específicas do certame PC-AL 2026 (Módulo 9) */
PREDICOES.push(
  { tema: "Lei 14.735/2026 — Lei Orgânica Nacional das Polícias Civis", disciplina: "Legislação Institucional (AL)", score: 97,
    motivos: ["Lei novíssima citada nominalmente no edital", "Padrão da banca: cobrança literal de norma recente", "⚠ Importar o texto oficial para estudo — ainda sem questões no banco"] },
  { tema: "Invasão de dispositivo pós-Lei 14.155/2021 (art. 154-A, CP)", disciplina: "Crimes Cibernéticos e Segurança Digital", score: 93,
    motivos: ["Edital criou disciplina própria de crimes cibernéticos", "Alteração legislativa que muda gabarito de questões antigas"] },
  { tema: "Injúria racial como racismo (Lei 14.532/2023)", disciplina: "Legislação Especial", score: 92,
    motivos: ["Alteração recente com grande repercussão", "Cruza CF (imprescritibilidade) + lei + STF (HC 154.248)"] },
  { tema: "Convenção de Budapeste (Decreto 11.491/2023)", disciplina: "Legislação Especial", score: 90,
    motivos: ["Tratado recém-promulgado citado nominalmente no edital", "Tema cibernético em expansão na banca"] },
  { tema: "Smurfing, laranjas e red flags financeiras", disciplina: "Contabilidade e Análise Financeira", score: 89,
    motivos: ["Tipologias listadas item a item no edital — sinal claro de intenção de cobrança", "Perfil investigativo-financeiro do certame"] },
  { tema: "Acesso a dados de celular apreendido (STJ)", disciplina: "Crimes Cibernéticos e Segurança Digital", score: 88,
    motivos: ["Item expresso do edital (busca e apreensão de itens digitais)", "Jurisprudência consolidada de aplicação operacional diária"] },
);
