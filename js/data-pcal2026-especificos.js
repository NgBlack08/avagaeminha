/* =====================================================================
   QUESTLAB — Expansão Edital PC-AL 2026 (Lote 2: Conhec. Específicos)
   Agente e Escrivão (item 20.2.4): aplicação da lei penal, Lei 9.099/95,
   Legislação Penal Especial, Estatística,
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
      palavraCritica: "ação ou omissão",
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
      palavraCritica: "atividade (deveria ser ubiquidade)",
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
      palavraCritica: "de qualquer modo favorecer",
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
      palavraCritica: "inclui-se o dia do começo",
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
      palavraCritica: "máxima não superior a 2",
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
      palavraCritica: "compromisso de comparecer",
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
      palavraCritica: "não importa confissão nem reincidência",
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
      palavraCritica: "detenção de 1 a 4 anos",
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
      palavraCritica: "imprescritível",
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
      palavraCritica: "art. 2º-A da Lei 7.716",
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
      palavraCritica: "independem",
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
      palavraCritica: "ordem das fases",
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
      palavraCritica: "não é equiparado",
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
      palavraCritica: "incondicionada",
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
      palavraCritica: "condicionada à simultânea imputação",
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
      palavraCritica: "Capítulo II-B do Título XI do CP",
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
      palavraCritica: "Decreto 11.491/2023",
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
    id: "ES-001", disciplina: "Estatística", assunto: "Estatística descritiva", subassunto: "Medidas de posição",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "Em um conjunto de dados que contenha valores extremos (outliers), a mediana constitui medida de tendência central mais robusta que a média aritmética, por não ser influenciada pela magnitude desses valores.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "robusta",
    cognitivo: {
      motivo: "Propriedade comparativa média × mediana — conceito central da estatística descritiva.",
      palavraCritica: "não é influenciada pela magnitude",
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
    id: "ES-002", disciplina: "Estatística", assunto: "Correlação", subassunto: "Correlação × causalidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "Se o coeficiente de correlação linear de Pearson entre duas variáveis for próximo de 1, é correto concluir que a variação de uma delas é causa direta da variação da outra.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "causa direta",
    cognitivo: {
      motivo: "O erro inferencial mais clássico da estatística aplicada.",
      palavraCritica: "correlação ≠ causalidade",
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
    id: "ES-003", disciplina: "Estatística", assunto: "Distribuição normal", subassunto: "Regra empírica (3 sigmas)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "Em uma distribuição normal, aproximadamente 95% das observações situam-se no intervalo compreendido entre a média menos dois desvios-padrão e a média mais dois desvios-padrão.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "95% / dois desvios",
    cognitivo: {
      motivo: "Regra 68-95-99,7, item expresso do edital (2.27).",
      palavraCritica: "±2σ ↔ 95%",
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
    id: "ES-004", disciplina: "Estatística", assunto: "Medidas de dispersão", subassunto: "Coeficiente de variação",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "O coeficiente de variação, obtido pela razão entre o desvio-padrão e a média, é medida de dispersão relativa e adimensional, o que permite comparar a variabilidade de conjuntos de dados expressos em unidades ou escalas diferentes.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "adimensional",
    cognitivo: {
      motivo: "Utilidade prática do CV — comparação entre séries heterogêneas.",
      palavraCritica: "desvio ÷ média",
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
    id: "ES-005", disciplina: "Estatística", assunto: "Probabilidade", subassunto: "Independência de eventos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "Dois eventos A e B são independentes quando a probabilidade de ocorrência simultânea de ambos é igual ao produto de suas probabilidades individuais, isto é, P(A∩B) = P(A) × P(B).",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "produto",
    cognitivo: {
      motivo: "Definição formal de independência — base para Bayes e distribuições.",
      palavraCritica: "P(A∩B) = P(A)·P(B)",
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
    id: "ES-006", disciplina: "Estatística", assunto: "Amostragem", subassunto: "Estratificada × conglomerados",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "Na amostragem estratificada, a população é dividida em grupos e sorteiam-se alguns desses grupos, examinando-se todos os seus integrantes; já na amostragem por conglomerados, extraem-se aleatoriamente elementos de cada um dos grupos previamente definidos.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "estratificada × conglomerados",
    cognitivo: {
      motivo: "Inversão espelhada das duas técnicas de amostragem por grupos.",
      palavraCritica: "de cada estrato × grupos inteiros",
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
    id: "ES-007", disciplina: "Estatística", assunto: "Inferência", subassunto: "Testes de hipóteses",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "Em um teste de hipóteses, o nível de significância corresponde à probabilidade de se rejeitar a hipótese nula quando ela é verdadeira, ou seja, à probabilidade de ocorrência do erro tipo I.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "erro tipo I",
    cognitivo: {
      motivo: "Definição nuclear de α — item 3.3 do edital.",
      palavraCritica: "rejeitar H0 verdadeira",
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
    id: "ES-008", disciplina: "Estatística", assunto: "Machine Learning", subassunto: "Overfitting",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "Ocorre overfitting quando o modelo preditivo se ajusta excessivamente às particularidades dos dados de treinamento, apresentando alto desempenho nesses dados, porém baixa capacidade de generalização para dados novos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "generalização",
    cognitivo: {
      motivo: "Conceito central de avaliação de modelos — item 4 de Análise de Dados.",
      palavraCritica: "ótimo no treino, ruim no novo",
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
    id: "ES-009", disciplina: "Estatística", assunto: "Mineração de dados", subassunto: "Clusterização",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "A análise de agrupamentos (clusterização) é técnica de aprendizado supervisionado, pois exige que os dados de treinamento estejam previamente rotulados com as classes às quais pertencem.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "supervisionado",
    cognitivo: {
      motivo: "Fronteira supervisionado × não supervisionado — base da mineração de dados.",
      palavraCritica: "não supervisionado",
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
      palavraCritica: "A = P + PL ⇔ PL = A − P",
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
      palavraCritica: "não altera o PL",
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
      palavraCritica: "natureza da conta",
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
      palavraCritica: "necessária ≠ suficiente",
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
      palavraCritica: "abaixo do limiar de comunicação",
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
      palavraCritica: "orientar a investigação",
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
const FORA_EDITAL_PCAL2026 = ["LE-001", "LE-002", "LE-003"];
QUESTOES.forEach(q => { if (FORA_EDITAL_PCAL2026.includes(q.id)) q.foraEdital = true; });

/* 3) Disciplinas que ESTREIAM no edital de 2026 (Módulo 2)

   Estas seis não caíram na PC/AL 2021 — quatro não existiam no edital de
   então, Legislação Especial caía diluída dentro de "Processo Penal e
   legislação correlata", e crimes cibernéticos aparecia como um pedaço de
   Informática. Por isso entram SEM número de frequência.

   O que havia aqui antes eram pesos como "Lógica sentencial: 95" e
   "LGPD aplicada: 85", escritos à mão e exibidos ao lado dos temas
   medidos, indistinguíveis deles. Um candidato lendo a tela não tinha
   como saber que um número vinha de contagem e o outro de palpite.

   O que fica é a lista de temas do CONTEÚDO PROGRAMÁTICO do edital, que é
   informação real e verificável, com `estreia: true` avisando que não há
   histórico. Sem histórico, a ordem dentro da disciplina segue a do
   próprio edital — não uma precedência inventada por nós. */
FREQUENCIA_TEMAS.push(
  { disciplina: "Legislação Especial", estreia: true, itens2021: null,
    nota: "Em 2021 a matéria caía diluída dentro de \"Processo Penal e legislação correlata\", sem bloco próprio. O edital de 2026 a destaca como disciplina autônoma.",
    temas: [
      { tema: "Lei Maria da Penha (Lei 11.340/2006)" },
      { tema: "Lei de Drogas (Lei 11.343/2006)" },
      { tema: "Abuso de Autoridade (Lei 13.869/2019)" },
      { tema: "Organização Criminosa (Lei 12.850/2013)" },
      { tema: "Estatuto do Desarmamento (Lei 10.826/2003)" },
      { tema: "Crimes Hediondos (Lei 8.072/1990)" },
    ]},
  { disciplina: "Raciocínio Lógico-Matemático", estreia: true, itens2021: null,
    nota: "Não constava dos conhecimentos básicos de 2021.",
    temas: [
      { tema: "Lógica sentencial (equivalências, negações)" },
      { tema: "Tabelas-verdade e conectivos" },
      { tema: "Diagramas lógicos e conjuntos" },
      { tema: "Porcentagem e proporções" },
      { tema: "Contagem e probabilidade" },
    ]},
  { disciplina: "Atualidades", estreia: true, itens2021: null,
    nota: "Não constava dos conhecimentos básicos de 2021.",
    temas: [
      { tema: "Segurança pública e política criminal" },
      { tema: "Cenário nacional e internacional recente" },
      { tema: "Tecnologia, dados e sociedade" },
    ]},
  { disciplina: "Crimes Cibernéticos e Segurança Digital", estreia: true, itens2021: null,
    nota: "Disciplina nova. Em 2021 o assunto aparecia apenas como segurança da informação dentro de Informática (itens 49 e 50).",
    temas: [
      { tema: "Art. 154-A do CP (Lei 12.737/2012 + Lei 14.155/2021)" },
      { tema: "Busca e apreensão de itens digitais" },
      { tema: "LGPD aplicada à investigação" },
      { tema: "Golpes virtuais e autenticação multifator" },
    ]},
  { disciplina: "Estatística", estreia: true, itens2021: null,
    nota: "Disciplina nova, ligada à análise de dados na investigação.",
    temas: [
      { tema: "Estatística descritiva (posição e dispersão)" },
      { tema: "Probabilidade e teorema de Bayes" },
      { tema: "Distribuição normal e regra empírica" },
      { tema: "Amostragem" },
      { tema: "Noções de aprendizado de máquina" },
    ]},
  { disciplina: "Contabilidade e Análise Financeira", estreia: true, itens2021: null,
    nota: "Disciplina nova, alinhada ao perfil investigativo-financeiro do edital de 2026.",
    temas: [
      { tema: "Tipologias de lavagem (smurfing, laranjas)" },
      { tema: "Equação patrimonial e situação líquida" },
      { tema: "Fatos contábeis (permutativo/modificativo/misto)" },
      { tema: "Débito, crédito e balancete" },
    ]},
);

/* 4) Predições de ESTREIA — o que entra em 2026 sem histórico

   Estes temas não têm contagem em 2021 porque não havia onde cair. Não
   estão abaixo dos temas medidos por serem menos importantes: estão
   abaixo por não haver número que os ordene. `base` diz de onde vem a
   expectativa em cada caso — sempre do texto do edital ou de alteração
   legislativa datada, nunca de impressão sobre a banca. */
PREDICOES.push(
  { tema: "Lei 14.735/2023 — Lei Orgânica Nacional das Polícias Civis", disciplina: "Legislação Institucional (AL)", itens2021: null, estreia: true,
    base: "Citada nominalmente no conteúdo programático do edital de 2026.",
    motivos: ["Lei federal de 2023, posterior à última prova da PC/AL",
              "Norma nova costuma ser cobrada na letra: números, prazos e competências",
              "⚠ Atenção: o edital a indica como 'Lei estadual nº 14.735/2026' — trata-se, na verdade, da LEI FEDERAL nº 14.735, de 23/11/2023"] },
  { tema: "Invasão de dispositivo informático (art. 154-A do CP, pós-Lei 14.155/2021)", disciplina: "Crimes Cibernéticos e Segurança Digital", itens2021: null, estreia: true,
    base: "Disciplina criada pelo edital de 2026; o tipo penal é item expresso do programa.",
    motivos: ["A lei de 2021 aumentou penas e ampliou o tipo — muda a resposta de questões anteriores",
              "Conteúdo com números (penas, causas de aumento) e verbo nuclear definido"] },
  { tema: "Injúria racial equiparada a racismo (Lei 14.532/2023)", disciplina: "Legislação Especial", itens2021: null, estreia: true,
    base: "Legislação especial vira bloco próprio em 2026; alteração de 2023, posterior à prova de 2021.",
    motivos: ["Cruza Constituição (imprescritibilidade), lei e STF (HC 154.248)",
              "Mudança de regime jurídico que inverte gabaritos antigos"] },
  { tema: "Convenção de Budapeste (Decreto 11.491/2023)", disciplina: "Legislação Especial", itens2021: null, estreia: true,
    base: "Tratado citado nominalmente no conteúdo programático do edital de 2026.",
    motivos: ["Promulgado em 2023, sem histórico de cobrança na PC/AL",
              "Cooperação internacional em prova de investigação cibernética"] },
  { tema: "Tipologias de lavagem: smurfing, laranjas e red flags", disciplina: "Contabilidade e Análise Financeira", itens2021: null, estreia: true,
    base: "Tipologias listadas item a item no conteúdo programático do edital de 2026.",
    motivos: ["Disciplina inteiramente nova, sem qualquer item em 2021",
              "O edital detalha as tipologias uma a uma — nível de especificação incomum"] },
  { tema: "Acesso a dados de celular apreendido", disciplina: "Crimes Cibernéticos e Segurança Digital", itens2021: null, estreia: true,
    base: "Item expresso do edital de 2026 (busca e apreensão de itens digitais).",
    motivos: ["Jurisprudência do STJ consolidada e de aplicação operacional diária",
              "Conecta-se ao item 67 de 2021, que já tratava de dados armazenados em dispositivo"] },
);
