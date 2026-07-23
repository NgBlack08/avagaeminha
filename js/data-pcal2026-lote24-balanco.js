/* =====================================================================
   CEBRASPE LAB — Lote 24: BALANÇO C/E POR PADRÃO DA BANCA
   Corrige o desequilíbrio mais grave encontrado ao auditar a distribuição
   Certo/Errado de cada padrão (DNA_BANCA):
   - "Exigência inexistente" estava em 0C/56E (nunca Certo) — sem
     contraexemplo, o aluno aprende a rejeitar QUALQUER condicionante,
     mesmo as reais. Itens de controle abaixo mostram exigências
     LEGÍTIMAS, corretamente descritas.
   - "Literalidade legal" estava em 228C/4E (quase nunca Errado) — o
     aluno aprende que 'parece cópia da lei' = sempre Certo, quando o
     padrão real da banca é reproduzir o texto com UMA palavra trocada.
   20 itens INÉDITOS. Não fecha o desequilíbrio por completo (a escala
   do padrão "literalidade" é grande), mas move a agulha de forma real.
   ===================================================================== */

const QUESTOES_PCAL_LOTE24 = [

  /* ================= EXIGÊNCIA INEXISTENTE — CONTROLE (Certo) ================= */
  {
    id: "DP-079", disciplina: "Direito Penal", assunto: "Crimes contra o Patrimônio", subassunto: "Apropriação indébita (exigência real)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 168) — item de controle",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "A apropriação indébita exige que o agente tenha a posse ou a detenção lícita e prévia da coisa alheia móvel, apropriando-se dela posteriormente — o que a distingue do furto.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "posse ou detenção lícita e prévia",
    cognitivo: {
      motivo: "Item de CONTROLE: mostra uma exigência REAL, para não treinar rejeição automática de todo 'exige-se'.",
      mede: "Direito Penal — apropriação indébita × furto.",
      pegadinhaDesc: "Depois de tantas 'exigências inventadas', o candidato pode rejeitar esta por reflexo — mas ela é verdadeira.",
      ondeErra: "Marca E só porque a frase tem estrutura de 'exige-se X'.",
      palavraCritica: "posse ou detenção lícita e prévia",
      tecnica: "Apropriação indébita (art. 168) pressupõe posse/detenção lícita ANTERIOR; furto (art. 155) não. É requisito real, não inventado.",
      regraMental: "Nem toda frase com 'exige' é armadilha — confira se a lei realmente exige aquilo."
    },
    comentario: {
      resolucao: "CERTO. O crime de apropriação indébita (art. 168 do CP) pressupõe que o agente já detenha a posse ou detenção lícita da coisa, apropriando-se dela em momento posterior — é justamente esse requisito que o distingue do furto, no qual o agente subtrai o bem sem jamais ter tido sua posse legítima.",
      fundamento: "CP, arts. 155 e 168.",
      macete: "Apropriação indébita: já tinha a posse lícita antes. Furto: nunca teve.",
      erroComum: "Rejeitar a exigência por desconfiança automática.",
      comoBancaPensa: "Insere uma exigência verdadeira para testar se o candidato verifica, em vez de só desconfiar."
    }
  },
  {
    id: "DP-080", disciplina: "Direito Penal", assunto: "Excludentes de ilicitude", subassunto: "Legítima defesa (exigência real)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 25) — item de controle",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "A legítima defesa exige o uso moderado dos meios necessários para repelir injusta agressão, atual ou iminente, a direito próprio ou alheio.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "uso moderado dos meios necessários",
    cognitivo: {
      motivo: "Item de CONTROLE: exigência real do art. 25 do CP.",
      mede: "Direito Penal — legítima defesa.",
      pegadinhaDesc: "O candidato pode desconfiar de 'exige' e rejeitar sem checar.",
      ondeErra: "Marca E por reflexo, ignorando que a moderação é requisito literal do artigo.",
      palavraCritica: "uso moderado dos meios necessários",
      tecnica: "Art. 25: reconhece-se legítima defesa quando o agente usa moderadamente os meios necessários para repelir injusta agressão, atual ou iminente. Todos os elementos são exigências reais.",
      regraMental: "Legítima defesa: agressão injusta + atual/iminente + meios necessários + moderação. Tudo isso É exigido."
    },
    comentario: {
      resolucao: "CERTO. O art. 25 do CP exige, para a caracterização da legítima defesa, o uso moderado dos meios necessários para repelir injusta agressão, atual ou iminente, a direito próprio ou de outrem. Todos os requisitos citados são reais e cumulativos.",
      fundamento: "CP, art. 25.",
      macete: "Legítima defesa: meios necessários + moderação + agressão injusta atual/iminente.",
      erroComum: "Desconfiar da exigência de moderação por reflexo.",
      comoBancaPensa: "Reproduz fielmente um requisito legal para testar a verificação, não a desconfiança automática."
    }
  },
  {
    id: "PP-056", disciplina: "Processo Penal", assunto: "Prisão preventiva", subassunto: "Periculum libertatis (exigência real)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 312) — item de controle",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "A decretação da prisão preventiva exige a demonstração de risco concreto à ordem pública, à ordem econômica, à instrução criminal ou à aplicação da lei penal, não bastando a mera gravidade abstrata do crime.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "risco concreto ... não bastando a gravidade abstrata",
    cognitivo: {
      motivo: "Item de CONTROLE: exigência real do periculum libertatis (art. 312 CPP).",
      mede: "Processo Penal — requisitos da prisão preventiva.",
      pegadinhaDesc: "A frase longa e condicionada pode soar como exigência inventada.",
      ondeErra: "Rejeita por desconfiança do formato 'exige … não bastando'.",
      palavraCritica: "risco concreto ... não bastando a gravidade abstrata",
      tecnica: "Art. 312 do CPP e jurisprudência do STJ/STF: a preventiva exige risco CONCRETO (periculum libertatis fundamentado em fatos concretos), vedada a fundamentação genérica na gravidade abstrata do crime.",
      regraMental: "Preventiva: risco concreto, nunca só 'o crime é grave'."
    },
    comentario: {
      resolucao: "CERTO. O art. 312 do CPP exige a demonstração de risco concreto à ordem pública, à ordem econômica, à instrução criminal ou à aplicação da lei penal (periculum libertatis). É pacífico na jurisprudência que a gravidade abstrata do crime, por si só, não fundamenta a prisão preventiva.",
      fundamento: "CPP, art. 312; STJ e STF (vedação à fundamentação genérica).",
      jurisprudencia: "STJ/STF — vedação à motivação abstrata da preventiva.",
      macete: "Preventiva: risco concreto e fundamentado, nunca gravidade em abstrato.",
      erroComum: "Rejeitar a exigência real por parecer 'condição demais'.",
      comoBancaPensa: "Descreve fielmente um requisito consolidado para testar a verificação."
    }
  },
  {
    id: "DC-032", disciplina: "Direito Constitucional", assunto: "Estado de sítio", subassunto: "Oitiva dos Conselhos (exigência real)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, arts. 89, 91 e 137) — item de controle",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.72,
    enunciado: "A decretação do estado de sítio exige a prévia oitiva do Conselho da República e do Conselho de Defesa Nacional, ainda que os pareceres desses órgãos não vinculem a decisão do Presidente da República.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "oitiva ... não vinculem",
    cognitivo: {
      motivo: "Item de CONTROLE: exigência procedimental real (arts. 89, 91, 137 CF).",
      mede: "Constitucional — estado de sítio e estado de defesa.",
      pegadinhaDesc: "A dupla condição (exige oitiva + não vincula) pode soar como armadilha.",
      ondeErra: "Rejeita por desconfiar de uma exigência com ressalva de opinião não vinculante.",
      palavraCritica: "prévia oitiva ... não vinculem",
      tecnica: "Arts. 89 e 91 da CF: os Conselhos da República e de Defesa Nacional são ouvidos antes da decretação do estado de sítio (art. 137), mas seus pareceres são opinativos, não vinculantes.",
      regraMental: "Estado de sítio: ouve os Conselhos (exigido), mas decide o Presidente (parecer não vincula)."
    },
    comentario: {
      resolucao: "CERTO. Antes de decretar o estado de sítio, o Presidente da República deve ouvir o Conselho da República e o Conselho de Defesa Nacional (CF, arts. 89, 91 e 137), órgãos consultivos cujos pareceres têm caráter opinativo, não vinculante.",
      fundamento: "CF, arts. 89, 91 e 137.",
      macete: "Sítio: ouve os Conselhos (real exigência), decide o Presidente.",
      erroComum: "Rejeitar a exigência de oitiva por desconfiança.",
      comoBancaPensa: "Descreve corretamente um procedimento real, testando verificação em vez de reflexo."
    }
  },
  {
    id: "DA-047", disciplina: "Direito Administrativo", assunto: "Improbidade administrativa", subassunto: "Legitimidade ativa (exigência real)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.429/1992, art. 17) — item de controle",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "A propositura da ação por ato de improbidade administrativa exige legitimidade ativa exclusiva do Ministério Público ou da pessoa jurídica interessada, conforme a Lei 8.429/1992.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "legitimidade ativa exclusiva",
    cognitivo: {
      motivo: "Item de CONTROLE: exigência real (Lei 14.230/2021 restringiu a legitimidade ativa).",
      mede: "Administrativo — legitimidade na ação de improbidade.",
      pegadinhaDesc: "A palavra 'exclusiva' pode soar como restrição inventada.",
      ondeErra: "Rejeita achando que qualquer cidadão ou terceiro interessado poderia propor a ação.",
      palavraCritica: "legitimidade ativa exclusiva",
      tecnica: "Após a Lei 14.230/2021, o art. 17 restringiu a legitimidade ativa da ação de improbidade ao Ministério Público e à pessoa jurídica interessada — exigência real, não mais aberta a terceiros.",
      regraMental: "Ação de improbidade: só MP ou o ente lesado propõem (desde a reforma de 2021)."
    },
    comentario: {
      resolucao: "CERTO. Com a reforma da Lei 14.230/2021, o art. 17 da Lei 8.429/1992 restringiu a legitimidade ativa para propor a ação de improbidade ao Ministério Público e à pessoa jurídica interessada, afastando a legitimidade concorrente que antes se admitia a terceiros.",
      fundamento: "Lei 8.429/1992, art. 17 (redação da Lei 14.230/2021).",
      macete: "Legitimidade da ação de improbidade: só MP ou ente lesado (pós-2021).",
      erroComum: "Achar que a legitimidade permanece ampla a qualquer interessado.",
      comoBancaPensa: "Cobra uma restrição real e recente para testar atualização, não desconfiança automática."
    }
  },
  {
    id: "LE-118", disciplina: "Legislação Especial", assunto: "Lei de Drogas", subassunto: "Tráfico × uso pessoal (exigência real)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.343/2006, art. 33) — item de controle",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "A configuração do tráfico de drogas exige que a substância se destine à mercancia ou à entrega a terceiro, o que o distingue do porte para consumo pessoal.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "destinação à mercancia ou entrega a terceiro",
    cognitivo: {
      motivo: "Item de CONTROLE: exigência real que distingue tráfico de uso pessoal.",
      mede: "Legislação Especial — Lei de Drogas.",
      pegadinhaDesc: "Pode soar como requisito extra inventado para 'facilitar' a defesa.",
      ondeErra: "Rejeita achando que a quantidade, isoladamente, já basta para o tráfico.",
      palavraCritica: "destinação à mercancia ou entrega a terceiro",
      tecnica: "A jurisprudência e a própria lógica do art. 33 exigem a comprovação da destinação comercial/social da droga (não o uso próprio) para caracterizar o tráfico — quantidade é só um dos indícios, não o único critério.",
      regraMental: "Tráfico: precisa provar destinação a terceiro. Sem isso, tende ao art. 28 (uso pessoal)."
    },
    comentario: {
      resolucao: "CERTO. A configuração do tráfico (art. 33 da Lei 11.343/2006) exige que se comprove a destinação da droga à mercancia ou à entrega a terceiro, elemento que o distingue do porte para consumo pessoal (art. 28). A quantidade apreendida é apenas um dos critérios de aferição, não o único.",
      fundamento: "Lei 11.343/2006, arts. 28 e 33.",
      macete: "Tráfico: precisa da destinação a terceiro, não só a quantidade.",
      erroComum: "Achar que basta a quantidade para configurar o tráfico.",
      comoBancaPensa: "Descreve corretamente a distinção real entre os dois tipos penais."
    }
  },
  {
    id: "DH-046", disciplina: "Direitos Humanos", assunto: "Refúgio", subassunto: "Fundado temor de perseguição (exigência real)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.474/1997, art. 1º) — item de controle",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.72,
    enunciado: "O reconhecimento da condição de refugiado exige fundado temor de perseguição por motivos de raça, religião, nacionalidade, grupo social ou opinião política.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "fundado temor de perseguição",
    cognitivo: {
      motivo: "Item de CONTROLE: exigência real do Estatuto dos Refugiados.",
      mede: "Direitos Humanos — condição de refugiado.",
      pegadinhaDesc: "A lista de motivos pode parecer restrição inventada.",
      ondeErra: "Rejeita achando que qualquer motivo de fuga (ex.: econômico) já bastaria.",
      palavraCritica: "fundado temor de perseguição",
      tecnica: "Art. 1º da Lei 9.474/1997: a condição de refugiado exige fundado temor de perseguição por raça, religião, nacionalidade, grupo social ou opinião política — motivos econômicos isolados não bastam.",
      regraMental: "Refúgio: temor fundado de perseguição por um dos 5 motivos taxativos da lei."
    },
    comentario: {
      resolucao: "CERTO. O art. 1º da Lei 9.474/1997 exige, para o reconhecimento da condição de refugiado, fundado temor de perseguição por motivos de raça, religião, nacionalidade, grupo social ou opinião política — reproduzindo a Convenção de 1951 sobre o Estatuto dos Refugiados.",
      fundamento: "Lei 9.474/1997, art. 1º; Convenção de 1951 (Estatuto dos Refugiados).",
      macete: "Refúgio: 5 motivos taxativos (raça, religião, nacionalidade, grupo social, opinião política).",
      erroComum: "Admitir motivo puramente econômico como suficiente.",
      comoBancaPensa: "Reproduz fielmente a exigência real, testando conhecimento, não desconfiança."
    }
  },
  {
    id: "DA-048", disciplina: "Direito Administrativo", assunto: "Lei de Licitações (14.133/2021)", subassunto: "Dispensa emergencial (exigência real)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.133/2021) — item de controle",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "A dispensa de licitação por emergência exige que a situação urgente não tenha sido gerada por falta de planejamento, desídia ou má gestão do próprio agente público.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "não tenha sido gerada por falta de planejamento",
    cognitivo: {
      motivo: "Item de CONTROLE: exigência real e consolidada sobre a dispensa emergencial.",
      mede: "Administrativo — Lei de Licitações, contratação direta.",
      pegadinhaDesc: "A condição negativa ('não tenha sido gerada por…') pode soar como restrição inventada.",
      ondeErra: "Rejeita achando que qualquer urgência, mesmo criada pela própria Administração, autoriza a dispensa.",
      palavraCritica: "não tenha sido gerada por falta de planejamento, desídia ou má gestão",
      tecnica: "Doutrina e TCU são pacíficos: a dispensa por emergência não pode ser usada para 'sanar' urgência criada pela inércia do próprio agente — é requisito real e frequentemente cobrado.",
      regraMental: "Emergência que a própria Administração causou por omissão não autoriza dispensa."
    },
    comentario: {
      resolucao: "CERTO. É entendimento consolidado (doutrina e TCU) que a dispensa de licitação por emergência não pode ser invocada quando a situação de urgência decorre de falta de planejamento, desídia administrativa ou má gestão do próprio agente público — trata-se de requisito real, e não de exigência inventada.",
      fundamento: "Lei 14.133/2021; jurisprudência do TCU sobre contratação emergencial.",
      macete: "Emergência autoprovocada por omissão não justifica dispensa.",
      erroComum: "Admitir a dispensa mesmo quando a urgência foi causada pela própria inércia administrativa.",
      comoBancaPensa: "Cobra requisito real e consolidado, testando conhecimento em vez de desconfiança automática."
    }
  },

  /* ================= LITERALIDADE — CONTRAEXEMPLO (Errado) ================= */
  {
    id: "DC-033", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Legalidade (art. 5º, II — literalidade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, II)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "Ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de decisão judicial.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "decisão judicial",
    cognitivo: {
      motivo: "Reproduz quase literalmente o princípio da legalidade, trocando 'lei' por 'decisão judicial'.",
      mede: "Constitucional — princípio da legalidade.",
      pegadinhaDesc: "O texto soa exatamente como o art. 5º, II — só muda a palavra final.",
      ondeErra: "Reconhece o 'clichê constitucional' e marca C sem conferir a palavra final.",
      palavraCritica: "decisão judicial",
      tecnica: "O texto correto do art. 5º, II, diz 'senão em virtude de LEI', não de decisão judicial.",
      regraMental: "Legalidade: só a LEI obriga. Compare a última palavra da frase com o texto real."
    },
    comentario: {
      resolucao: "ERRADO. O art. 5º, II, da CF estabelece que ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de LEI — princípio da legalidade. A troca por 'decisão judicial' desfigura o dispositivo.",
      fundamento: "CF, art. 5º, II.",
      macete: "Legalidade: só a lei obriga, nunca decisão judicial isolada.",
      erroComum: "Reconhecer o 'clichê' do artigo e não conferir a palavra-chave final.",
      comoBancaPensa: "Clássica troca de uma palavra em texto quase decorado."
    }
  },
  {
    id: "DA-049", disciplina: "Direito Administrativo", assunto: "Princípios da Administração Pública", subassunto: "Art. 37, caput (literalidade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 37, caput)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "A administração pública direta e indireta de qualquer dos Poderes obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e razoabilidade.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "razoabilidade",
    cognitivo: {
      motivo: "Reproduz o famoso 'LIMPE' do art. 37, trocando o quinto princípio.",
      mede: "Administrativo — princípios constitucionais expressos.",
      pegadinhaDesc: "O candidato reconhece 4 dos 5 princípios corretos e não confere o último.",
      ondeErra: "Aceita 'razoabilidade' no lugar de 'eficiência' por ambos soarem plausíveis.",
      palavraCritica: "razoabilidade",
      tecnica: "O art. 37, caput, elenca LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e EFICIÊNCIA — não razoabilidade (que é princípio implícito, não deste rol expresso).",
      regraMental: "LIMPE: o quinto é EFICIÊNCIA. Razoabilidade não está no caput do art. 37."
    },
    comentario: {
      resolucao: "ERRADO. O art. 37, caput, da CF elenca os princípios da legalidade, impessoalidade, moralidade, publicidade e EFICIÊNCIA (o famoso 'LIMPE'). Razoabilidade é princípio da Administração, mas não integra o rol expresso do caput do art. 37.",
      fundamento: "CF, art. 37, caput.",
      macete: "LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência.",
      erroComum: "Trocar 'eficiência' por outro princípio administrativo plausível.",
      comoBancaPensa: "Substitui o último item de uma lista decorada por um sinônimo funcional."
    }
  },
  {
    id: "DC-034", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Inviolabilidade do domicílio (literalidade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, XI)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação administrativa.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "determinação administrativa",
    cognitivo: {
      motivo: "Reproduz o art. 5º, XI, trocando 'judicial' por 'administrativa'.",
      mede: "Constitucional — inviolabilidade do domicílio.",
      pegadinhaDesc: "Toda a frase é fiel ao texto constitucional, só a última palavra muda.",
      ondeErra: "Reconhece a estrutura decorada e não confere a última palavra.",
      palavraCritica: "determinação administrativa",
      tecnica: "O art. 5º, XI, exige determinação JUDICIAL para o ingresso diurno sem consentimento — nunca administrativa.",
      regraMental: "Domicílio, durante o dia: só entra com determinação JUDICIAL."
    },
    comentario: {
      resolucao: "ERRADO. O art. 5º, XI, da CF exige determinação JUDICIAL — não administrativa — para o ingresso no domicílio durante o dia sem consentimento do morador (fora das hipóteses de flagrante, desastre ou socorro). A troca da palavra final inverte uma garantia essencial.",
      fundamento: "CF, art. 5º, XI.",
      macete: "Domicílio de dia: só juiz autoriza a entrada sem consentimento.",
      erroComum: "Aceitar 'determinação administrativa' por não conferir a palavra final.",
      comoBancaPensa: "Reproduz o texto quase por inteiro, trocando só a palavra decisiva."
    }
  },
  {
    id: "DC-035", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Erro judiciário (literalidade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, LXXV)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "O Município indenizará o condenado por erro judiciário, assim como o que ficar preso além do tempo fixado na sentença.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "O Município",
    cognitivo: {
      motivo: "Reproduz o art. 5º, LXXV, trocando o sujeito responsável.",
      mede: "Constitucional — responsabilidade por erro judiciário.",
      pegadinhaDesc: "O restante da frase é idêntico ao texto constitucional; só o sujeito muda.",
      ondeErra: "Não percebe a troca de 'Estado' por 'Município' logo no início da frase.",
      palavraCritica: "O Município",
      tecnica: "O art. 5º, LXXV, atribui a responsabilidade ao ESTADO (União/Estados-membros, conforme o ente responsável pela Justiça), não ao Município — que não organiza Poder Judiciário.",
      regraMental: "Erro judiciário: quem indeniza é o ESTADO, nunca o Município."
    },
    comentario: {
      resolucao: "ERRADO. O art. 5º, LXXV, da CF atribui ao ESTADO (em sentido amplo, o ente federativo responsável pela organização do Poder Judiciário) o dever de indenizar o condenado por erro judiciário. O Município não organiza Justiça e não figura nesse dispositivo.",
      fundamento: "CF, art. 5º, LXXV.",
      macete: "Erro judiciário: responsabilidade do Estado, nunca do Município.",
      erroComum: "Não perceber a troca do sujeito logo no início da frase.",
      comoBancaPensa: "Troca o sujeito de uma garantia decorada, apostando na leitura automática."
    }
  },
  {
    id: "PP-057", disciplina: "Processo Penal", assunto: "Prisão em flagrante", subassunto: "Flagrante impróprio (literalidade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 302, IV)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "Considera-se em flagrante delito quem é encontrado, a qualquer tempo, com instrumentos, armas, objetos ou papéis que façam presumir ser ele autor da infração.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "a qualquer tempo",
    cognitivo: {
      motivo: "Reproduz o art. 302, IV, removendo a exigência temporal ('logo depois').",
      mede: "Processo Penal — flagrante presumido.",
      pegadinhaDesc: "Substitui 'logo depois' por 'a qualquer tempo', eliminando a imediatidade exigida.",
      ondeErra: "Não percebe que a lei exige proximidade temporal, não qualquer momento.",
      palavraCritica: "a qualquer tempo",
      tecnica: "Art. 302, IV, do CPP: flagrante presumido exige que o agente seja encontrado, LOGO DEPOIS, com instrumentos que façam presumir a autoria — não 'a qualquer tempo'.",
      regraMental: "Flagrante presumido: 'logo depois', não 'a qualquer tempo'. Sem imediatidade, não é flagrante."
    },
    comentario: {
      resolucao: "ERRADO. O art. 302, IV, do CPP exige que o agente seja encontrado LOGO DEPOIS (imediatidade) com instrumentos que façam presumir ser ele autor da infração. Substituir por 'a qualquer tempo' elimina o requisito temporal essencial ao flagrante presumido.",
      fundamento: "CPP, art. 302, IV.",
      macete: "Flagrante presumido: exige proximidade temporal ('logo depois').",
      erroComum: "Aceitar a ausência de limite temporal para o flagrante.",
      comoBancaPensa: "Remove um qualificador temporal crítico do texto legal."
    }
  },
  {
    id: "DP-081", disciplina: "Direito Penal", assunto: "Crimes contra o Patrimônio", subassunto: "Furto (literalidade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 155, caput)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "Subtrair, para si ou para outrem, coisa alheia móvel: pena, detenção, de um a quatro anos, e multa.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "detenção",
    cognitivo: {
      motivo: "Reproduz o art. 155, caput, trocando 'reclusão' por 'detenção'.",
      mede: "Direito Penal — furto simples.",
      pegadinhaDesc: "Mantém prazo e verbo corretos; só troca o tipo de pena privativa de liberdade.",
      ondeErra: "Não associa furto a reclusão, confundindo com crimes de menor gravidade (detenção).",
      palavraCritica: "detenção",
      tecnica: "Art. 155, caput: pena de RECLUSÃO, de 1 a 4 anos, e multa. Furto não é punido com detenção.",
      regraMental: "Furto simples: reclusão (não detenção), 1 a 4 anos."
    },
    comentario: {
      resolucao: "ERRADO. O art. 155, caput, do CP comina ao furto simples pena de RECLUSÃO, de um a quatro anos, e multa — não detenção. A troca do tipo de pena privativa de liberdade torna a assertiva incorreta.",
      fundamento: "CP, art. 155, caput.",
      macete: "Furto: reclusão, 1 a 4 anos + multa.",
      erroComum: "Confundir reclusão com detenção mantendo o prazo correto.",
      comoBancaPensa: "Mantém números corretos e troca só o regime de pena — teste de atenção ao detalhe."
    }
  },
  {
    id: "DP-082", disciplina: "Direito Penal", assunto: "Aplicação da pena", subassunto: "Regimes de cumprimento (literalidade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 33, caput)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "A pena de reclusão deve ser cumprida em regime fechado, semiaberto ou aberto; a de detenção, em regime fechado ou aberto, salvo necessidade de transferência a regime fechado.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "detenção, em regime fechado ou aberto",
    cognitivo: {
      motivo: "Reproduz o art. 33, caput, invertendo os regimes admitidos para a detenção.",
      mede: "Direito Penal — execução penal, regimes.",
      pegadinhaDesc: "A primeira parte (reclusão) está correta, desviando a atenção do erro na segunda.",
      ondeErra: "Não percebe que a detenção NUNCA começa em regime fechado.",
      palavraCritica: "detenção, em regime fechado ou aberto",
      tecnica: "Art. 33, caput: reclusão pode iniciar em fechado, semiaberto ou aberto; detenção SÓ em semiaberto ou aberto (podendo haver transferência a fechado depois, se necessário).",
      regraMental: "Detenção nunca COMEÇA em regime fechado — só reclusão pode."
    },
    comentario: {
      resolucao: "ERRADO. Conforme o art. 33, caput, do CP, a pena de detenção deve ser cumprida em regime SEMIABERTO ou aberto (não fechado), salvo necessidade de transferência para regime fechado no curso da execução. A assertiva erra ao listar 'fechado' como regime inicial da detenção.",
      fundamento: "CP, art. 33, caput.",
      macete: "Detenção: começa semiaberto/aberto. Reclusão: pode começar em qualquer regime.",
      erroComum: "Confundir os regimes iniciais admitidos para cada tipo de pena.",
      comoBancaPensa: "Acerta a primeira metade da frase (reclusão) para 'validar' a segunda, errada (detenção)."
    }
  },
  {
    id: "LI-044", disciplina: "Legislação Institucional (AL)", assunto: "LONPC (Lei 14.735/2023)", subassunto: "Exclusividade da polícia judiciária (literalidade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.735/2023, art. 6º, § 1º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "As funções de polícia judiciária são exercidas com preferência pelos integrantes das carreiras policiais civis, nos termos da Lei Orgânica Nacional das Polícias Civis.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "com preferência",
    cognitivo: {
      motivo: "Reproduz o art. 6º, § 1º, da LONPC, trocando 'exclusividade' por 'preferência'.",
      mede: "Legislação Institucional — LONPC.",
      pegadinhaDesc: "'Preferência' soa parecido com 'exclusividade', mas admite concorrência — o que a lei não permite.",
      ondeErra: "Não percebe que a palavra enfraquece a garantia de exclusividade.",
      palavraCritica: "com preferência",
      tecnica: "Art. 6º, § 1º, da Lei 14.735/2023: as funções de polícia judiciária são exercidas com EXCLUSIVIDADE pelos integrantes das carreiras policiais civis — não apenas com preferência.",
      regraMental: "Polícia judiciária: exclusividade (não preferência) das carreiras policiais civis."
    },
    comentario: {
      resolucao: "ERRADO. O art. 6º, § 1º, da Lei Orgânica Nacional das Polícias Civis (Lei 14.735/2023) estabelece que as funções de polícia judiciária são exercidas com EXCLUSIVIDADE pelos integrantes das carreiras policiais civis — 'preferência' admitiria concorrência com outras carreiras, o que a lei não permite.",
      fundamento: "Lei 14.735/2023, art. 6º, § 1º.",
      macete: "Polícia judiciária: exclusividade, não preferência.",
      erroComum: "Aceitar 'preferência' como sinônimo válido de 'exclusividade'.",
      comoBancaPensa: "Enfraquece a palavra-chave para testar precisão terminológica."
    }
  },
  {
    id: "DH-047", disciplina: "Direitos Humanos", assunto: "Pacto de San José da Costa Rica", subassunto: "Garantias judiciais (literalidade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CADH, art. 8.1)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Toda pessoa tem direito a ser ouvida, com as devidas garantias e dentro de um prazo razoável, por um juiz ou tribunal competente, vinculado ao Poder Executivo e imparcial.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "vinculado ao Poder Executivo",
    cognitivo: {
      motivo: "Reproduz o art. 8.1 da CADH, trocando 'independente' por 'vinculado ao Poder Executivo'.",
      mede: "Direitos Humanos — CADH, garantias judiciais.",
      pegadinhaDesc: "Mantém quase toda a frase correta; a troca contradiz a própria lógica da garantia.",
      ondeErra: "Não percebe que 'vinculado ao Executivo' é o oposto de independência judicial.",
      palavraCritica: "vinculado ao Poder Executivo",
      tecnica: "Art. 8.1 da CADH exige juiz ou tribunal competente, INDEPENDENTE e imparcial — nunca vinculado a outro Poder.",
      regraMental: "Garantias judiciais da CADH: juiz independente E imparcial, sempre os dois."
    },
    comentario: {
      resolucao: "ERRADO. O art. 8.1 da Convenção Americana de Direitos Humanos assegura o julgamento por juiz ou tribunal competente, INDEPENDENTE e imparcial — a substituição por 'vinculado ao Poder Executivo' contradiz frontalmente a garantia de independência judicial.",
      fundamento: "CADH, art. 8.1.",
      macete: "CADH: juiz competente, independente e imparcial — sempre os três atributos.",
      erroComum: "Não perceber a contradição lógica entre 'vinculado ao Executivo' e independência.",
      comoBancaPensa: "Substitui um atributo essencial por seu oposto conceitual."
    }
  },
  {
    id: "PP-058", disciplina: "Processo Penal", assunto: "Ação penal", subassunto: "Ação pública condicionada (literalidade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 24)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "Nos crimes de ação pública, esta será promovida por denúncia do Ministério Público, mas dependerá, quando a lei o exigir, de requisição do Presidente da República, ou de representação do ofendido ou de quem tiver qualidade para representá-lo.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "Presidente da República",
    cognitivo: {
      motivo: "Reproduz o art. 24 do CPP, trocando 'Ministro da Justiça' por 'Presidente da República'.",
      mede: "Processo Penal — condições de procedibilidade.",
      pegadinhaDesc: "A frase é quase idêntica ao texto legal; só o cargo muda.",
      ondeErra: "Não confere qual autoridade especificamente requisita.",
      palavraCritica: "Presidente da República",
      tecnica: "Art. 24 do CPP: a requisição, quando exigida por lei, é do MINISTRO DA JUSTIÇA, não do Presidente da República.",
      regraMental: "Requisição para ação penal: Ministro da Justiça, nunca o Presidente diretamente."
    },
    comentario: {
      resolucao: "ERRADO. O art. 24 do CPP prevê que, nos crimes de ação pública, a denúncia do Ministério Público pode depender de requisição do MINISTRO DA JUSTIÇA (quando a lei exigir) ou de representação do ofendido — não de requisição do Presidente da República.",
      fundamento: "CPP, art. 24.",
      macete: "Requisição da ação penal: Ministro da Justiça, não o Presidente.",
      erroComum: "Trocar a autoridade competente por outra de cargo superior, mas incorreta.",
      comoBancaPensa: "Substitui a autoridade certa por outra hierarquicamente parecida, mas errada."
    }
  },
  {
    id: "DC-036", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Devido processo legal (literalidade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, LIV)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "Ninguém será privado da liberdade ou de seus direitos políticos sem o devido processo legal.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "direitos políticos",
    cognitivo: {
      motivo: "Reproduz o art. 5º, LIV, trocando 'bens' por 'direitos políticos'.",
      mede: "Constitucional — devido processo legal.",
      pegadinhaDesc: "A estrutura é idêntica ao texto famoso; só o objeto protegido muda.",
      ondeErra: "Reconhece 'devido processo legal' e não confere o restante da frase.",
      palavraCritica: "direitos políticos",
      tecnica: "Art. 5º, LIV: ninguém será privado da liberdade ou de seus BENS sem o devido processo legal — não 'direitos políticos'.",
      regraMental: "Devido processo legal (LIV): protege liberdade e BENS, não direitos políticos especificamente."
    },
    comentario: {
      resolucao: "ERRADO. O art. 5º, LIV, da CF assegura que ninguém será privado da liberdade ou de seus BENS sem o devido processo legal. A substituição por 'direitos políticos' altera o objeto protegido pelo dispositivo.",
      fundamento: "CF, art. 5º, LIV.",
      macete: "Devido processo legal: protege liberdade e bens.",
      erroComum: "Reconhecer a expressão 'devido processo legal' e não conferir o restante.",
      comoBancaPensa: "Mantém a expressão-âncora famosa e troca o complemento da frase."
    }
  },
  {
    id: "DA-050", disciplina: "Direito Administrativo", assunto: "Processo Administrativo (Lei 9.784/1999)", subassunto: "Princípios expressos (literalidade)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.784/1999, art. 2º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.72,
    enunciado: "A Administração Pública obedecerá, dentre outros, aos princípios da legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e subsidiariedade.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "subsidiariedade",
    cognitivo: {
      motivo: "Reproduz o art. 2º da Lei 9.784/1999, trocando o último princípio da lista.",
      mede: "Administrativo — processo administrativo federal.",
      pegadinhaDesc: "Lista longa e correta até o penúltimo item, com troca só no final.",
      ondeErra: "Cansa na lista extensa e não confere o último termo.",
      palavraCritica: "subsidiariedade",
      tecnica: "O art. 2º da Lei 9.784/1999 encerra a lista com EFICIÊNCIA, não subsidiariedade (que não consta do rol legal).",
      regraMental: "Lista do art. 2º da 9.784: termina em eficiência, não subsidiariedade."
    },
    comentario: {
      resolucao: "ERRADO. O art. 2º da Lei 9.784/1999 encerra o rol de princípios com EFICIÊNCIA, e não 'subsidiariedade' — princípio que não integra esse dispositivo. A troca no último item de uma lista longa é técnica clássica da banca para explorar o cansaço do candidato.",
      fundamento: "Lei 9.784/1999, art. 2º.",
      macete: "Lista de princípios do art. 2º da 9.784: termina em eficiência.",
      erroComum: "Não conferir o último item de uma enumeração extensa.",
      comoBancaPensa: "Aposta no cansaço da leitura de uma lista longa para esconder a troca no final."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE24);
