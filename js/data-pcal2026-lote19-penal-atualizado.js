/* =====================================================================
   CEBRASPE LAB — Lote 19: DIREITO PENAL — ATUALIZAÇÃO + JURISPRUDÊNCIA
   Fecha lacunas de alto rendimento e traz legislação recente:
   - Feminicídio como crime AUTÔNOMO (Lei 14.994/2024, art. 121-A do CP)
   - Perseguição/stalking (art. 147-A) e violência psicológica (147-B)
   - Concurso de pessoas e de crimes; dignidade sexual; crimes contra a honra
   - Súmulas STJ 231 e 444; princípio da insignificância (STF)
   16 itens INÉDITOS, com pegadinhas VARIADAS (não só literalidade) e
   fundamento em lei + jurisprudência atual.

   Leis e súmulas são texto público — itens 100% originais.
   ===================================================================== */

const QUESTOES_PCAL_LOTE19 = [

  /* ===== FEMINICÍDIO — Lei 14.994/2024 (crime autônomo) ===== */
  {
    id: "DP-053", disciplina: "Direito Penal", assunto: "Feminicídio", subassunto: "Crime autônomo (Lei 14.994/2024)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 121-A; Lei 14.994/2024)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.92,
    enunciado: "Com o advento da Lei 14.994/2024, o feminicídio deixou de figurar como qualificadora do homicídio e passou a constituir crime autônomo, com tipo penal próprio.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "crime autônomo",
    cognitivo: {
      motivo: "Cobrar a mudança de natureza jurídica do feminicídio.",
      mede: "Direito Penal — atualização legislativa (2024).",
      pegadinhaDesc: "A banca mantém o feminicídio como qualificadora (redação revogada).",
      ondeErra: "Estuda por material anterior à Lei 14.994/2024.",
      palavraCritica: "crime autônomo",
      tecnica: "A Lei 14.994/2024 revogou a qualificadora do art. 121, § 2º, VI, e criou o art. 121-A (feminicídio autônomo).",
      regraMental: "Feminicídio agora é tipo próprio (art. 121-A), não mais qualificadora."
    },
    comentario: {
      resolucao: "CERTO. A Lei 14.994/2024 promoveu alteração estrutural: revogou a qualificadora do feminicídio (art. 121, § 2º, VI) e instituiu o crime autônomo do art. 121-A do CP — 'matar mulher por razões da condição do sexo feminino'. O feminicídio permanece hediondo.",
      fundamento: "CP, art. 121-A; Lei 14.994/2024; Lei 8.072/1990.",
      macete: "Feminicídio saiu da qualificadora e virou tipo autônomo (121-A).",
      erroComum: "Tratar o feminicídio como qualificadora do homicídio.",
      comoBancaPensa: "Explora quem estudou por material desatualizado."
    }
  },
  {
    id: "DP-054", disciplina: "Direito Penal", assunto: "Feminicídio", subassunto: "Pena (art. 121-A)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 121-A; Lei 14.994/2024)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.88,
    enunciado: "O feminicídio, como crime autônomo, é punido com reclusão de doze a trinta anos.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "doze a trinta anos",
    cognitivo: {
      motivo: "Cobrar a pena do feminicídio autônomo (art. 121-A).",
      mede: "Direito Penal — dosimetria do feminicídio.",
      pegadinhaDesc: "Mantém a pena antiga da qualificadora (12 a 30 anos).",
      ondeErra: "Não percebe o agravamento da pena promovido pela Lei 14.994/2024.",
      palavraCritica: "doze a trinta",
      tecnica: "Art. 121-A: reclusão de 20 a 40 anos — pena mais grave do que a antiga qualificadora (12 a 30).",
      regraMental: "Feminicídio autônomo: 20 a 40 anos (subiu com a Lei 14.994/24)."
    },
    comentario: {
      resolucao: "ERRADO. O art. 121-A do CP, incluído pela Lei 14.994/2024, comina ao feminicídio pena de reclusão de 20 a 40 anos — patamar superior ao da antiga qualificadora (12 a 30 anos). O item reproduz a pena revogada.",
      fundamento: "CP, art. 121-A; Lei 14.994/2024.",
      macete: "Feminicídio: 20 a 40 anos.",
      erroComum: "Repetir a pena da antiga qualificadora.",
      comoBancaPensa: "Troca numérica ancorada na redação revogada."
    }
  },
  {
    id: "DP-055", disciplina: "Direito Penal", assunto: "Feminicídio", subassunto: "Razões da condição do sexo feminino",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 121-A; Lei 14.994/2024)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.82,
    enunciado: "Considera-se que há razões da condição do sexo feminino quando o crime envolve violência doméstica e familiar ou menosprezo ou discriminação à condição de mulher.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "menosprezo ou discriminação",
    cognitivo: {
      motivo: "Cobrar o conceito de 'razões da condição do sexo feminino'.",
      mede: "Direito Penal — elementar do feminicídio.",
      pegadinhaDesc: "A banca pode restringir a uma só das hipóteses.",
      ondeErra: "Esquece o menosprezo/discriminação como hipótese autônoma.",
      palavraCritica: "violência doméstica OU menosprezo/discriminação",
      tecnica: "São duas hipóteses: (I) violência doméstica e familiar; (II) menosprezo ou discriminação à condição de mulher.",
      regraMental: "Razões de gênero = violência doméstica OU menosprezo/discriminação."
    },
    comentario: {
      resolucao: "CERTO. O feminicídio (art. 121-A) exige que o crime seja praticado por razões da condição do sexo feminino, assim consideradas as hipóteses de (I) violência doméstica e familiar e (II) menosprezo ou discriminação à condição de mulher.",
      fundamento: "CP, art. 121-A, § 1º.",
      macete: "Duas portas: violência doméstica ou menosprezo/discriminação.",
      erroComum: "Reduzir a uma única hipótese.",
      comoBancaPensa: "Testa o conhecimento das duas hipóteses."
    }
  },
  {
    id: "DP-056", disciplina: "Direito Penal", assunto: "Feminicídio", subassunto: "Sujeito passivo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 121-A)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "O feminicídio pode ter como vítima qualquer pessoa, bastando que o crime seja motivado por discriminação de gênero.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "qualquer pessoa",
    cognitivo: {
      motivo: "Cobrar a delimitação do sujeito passivo do feminicídio (a mulher).",
      mede: "Direito Penal — sujeito passivo próprio.",
      pegadinhaDesc: "Generaliza a vítima para 'qualquer pessoa'.",
      ondeErra: "Confunde motivação de gênero com abrangência universal de vítimas.",
      palavraCritica: "qualquer pessoa",
      tecnica: "O tipo é 'matar MULHER'. O sujeito passivo é próprio — a mulher (STJ reconhece a mulher trans). Não é qualquer pessoa.",
      regraMental: "Feminicídio: vítima é a mulher, não 'qualquer pessoa'."
    },
    comentario: {
      resolucao: "ERRADO. O feminicídio é crime de sujeito passivo próprio: a vítima é a mulher (art. 121-A, caput). Não alcança qualquer pessoa; a motivação de gênero não amplia o polo passivo para além da mulher.",
      fundamento: "CP, art. 121-A.",
      macete: "Vítima do feminicídio = mulher.",
      erroComum: "Universalizar a vítima.",
      comoBancaPensa: "Generalização indevida do sujeito passivo."
    }
  },

  /* ===== STALKING E VIOLÊNCIA PSICOLÓGICA ===== */
  {
    id: "DP-057", disciplina: "Direito Penal", assunto: "Perseguição (stalking)", subassunto: "Tipo penal (art. 147-A)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 147-A; Lei 14.132/2021)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.82,
    enunciado: "Perseguir alguém, reiteradamente e por qualquer meio, ameaçando-lhe a integridade física ou psicológica ou perturbando sua esfera de liberdade ou privacidade, configura o crime de perseguição.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "reiteradamente",
    cognitivo: {
      motivo: "Cobrar o tipo de perseguição/stalking (art. 147-A).",
      mede: "Direito Penal — crimes contra a liberdade individual.",
      pegadinhaDesc: "A banca pode omitir a reiteração ou confundir com ameaça (147).",
      ondeErra: "Trata a perseguição como sinônimo de ameaça.",
      palavraCritica: "reiteradamente",
      tecnica: "Art. 147-A (Lei 14.132/2021): perseguir REITERADAMENTE, ameaçando integridade física/psicológica ou perturbando liberdade/privacidade.",
      regraMental: "Stalking = perseguir de forma reiterada (não é ato único)."
    },
    comentario: {
      resolucao: "CERTO. O art. 147-A do CP, incluído pela Lei 14.132/2021, tipifica a perseguição (stalking): perseguir alguém reiteradamente e por qualquer meio, ameaçando-lhe a integridade física ou psicológica, restringindo-lhe a locomoção ou perturbando sua esfera de liberdade ou privacidade.",
      fundamento: "CP, art. 147-A; Lei 14.132/2021.",
      macete: "Stalking = perseguição REITERADA.",
      erroComum: "Confundir com o crime de ameaça (art. 147).",
      comoBancaPensa: "Testa a elementar da reiteração."
    }
  },
  {
    id: "DP-058", disciplina: "Direito Penal", assunto: "Perseguição (stalking)", subassunto: "Habitualidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 147-A)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "O crime de perseguição configura-se com a prática de um único ato isolado dirigido à vítima.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "um único ato isolado",
    cognitivo: {
      motivo: "Cobrar a exigência de reiteração no crime de perseguição.",
      mede: "Direito Penal — natureza habitual do stalking.",
      pegadinhaDesc: "Suprime a reiteração, admitindo ato único.",
      ondeErra: "Ignora que o tipo exige conduta reiterada.",
      palavraCritica: "único ato isolado",
      tecnica: "A perseguição é crime habitual: exige reiteração de atos. Um ato isolado, conforme o caso, pode configurar ameaça (147), não stalking.",
      regraMental: "Stalking não é ato único: precisa de reiteração."
    },
    comentario: {
      resolucao: "ERRADO. O crime de perseguição (art. 147-A) tem natureza habitual e exige reiteração de condutas, não se configurando por um único ato isolado. A prática única e pontual pode caracterizar outro delito, como a ameaça.",
      fundamento: "CP, art. 147-A.",
      macete: "Reiterou? É stalking. Ato único não basta.",
      erroComum: "Admitir configuração por ato único.",
      comoBancaPensa: "Suprime a elementar da reiteração."
    }
  },
  {
    id: "DP-059", disciplina: "Direito Penal", assunto: "Violência psicológica contra a mulher", subassunto: "Tipo penal (art. 147-B)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 147-B; Lei 14.188/2021)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "Causar dano emocional à mulher, mediante humilhação, manipulação, isolamento ou chantagem, que a prejudique e perturbe seu pleno desenvolvimento, constitui crime autônomo previsto no Código Penal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dano emocional",
    cognitivo: {
      motivo: "Cobrar o crime de violência psicológica contra a mulher (art. 147-B).",
      mede: "Direito Penal — crimes contra a liberdade individual.",
      pegadinhaDesc: "A banca pode negar a autonomia do tipo ou situá-lo apenas na Lei Maria da Penha.",
      ondeErra: "Confunde a forma de violência (Maria da Penha) com o crime autônomo do CP.",
      palavraCritica: "crime autônomo",
      tecnica: "Art. 147-B (Lei 14.188/2021): a violência psicológica contra a mulher é crime autônomo do CP, punido com reclusão de 6 meses a 2 anos e multa.",
      regraMental: "Violência psicológica contra a mulher = crime do art. 147-B do CP."
    },
    comentario: {
      resolucao: "CERTO. A Lei 14.188/2021 inseriu o art. 147-B no Código Penal, tipificando a violência psicológica contra a mulher: causar dano emocional que a prejudique e perturbe seu pleno desenvolvimento ou vise degradar/controlar suas ações, mediante ameaça, constrangimento, humilhação, manipulação, isolamento, chantagem, ridicularização, entre outros.",
      fundamento: "CP, art. 147-B; Lei 14.188/2021.",
      macete: "Dano emocional à mulher = crime autônomo (147-B).",
      erroComum: "Tratá-la só como forma de violência da Lei Maria da Penha.",
      comoBancaPensa: "Testa a autonomia do tipo penal."
    }
  },

  /* ===== CONCURSO DE PESSOAS E DE CRIMES ===== */
  {
    id: "DP-060", disciplina: "Direito Penal", assunto: "Concurso de pessoas", subassunto: "Teoria adotada (art. 29)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 29)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "Quanto ao concurso de pessoas, o Código Penal adotou, como regra, a teoria pluralista, segundo a qual cada concorrente responde por um crime autônomo e distinto.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "teoria pluralista",
    cognitivo: {
      motivo: "Cobrar a teoria monista do concurso de pessoas (art. 29).",
      mede: "Direito Penal — concurso de pessoas.",
      pegadinhaDesc: "Troca a teoria monista pela pluralista.",
      ondeErra: "Confunde a regra (monista) com as exceções pluralistas.",
      palavraCritica: "pluralista",
      tecnica: "Art. 29: adotou-se a teoria MONISTA (unitária) — todos que concorrem respondem pelo mesmo crime, na medida de sua culpabilidade. Há exceções pluralistas pontuais (ex.: aborto consentido).",
      regraMental: "Regra: teoria monista (um crime para todos). Pluralista é exceção."
    },
    comentario: {
      resolucao: "ERRADO. O Código Penal adotou, como regra, a teoria MONISTA (unitária) no art. 29: todos os que concorrem para o crime respondem pelo mesmo delito, na medida de sua culpabilidade. A teoria pluralista aparece apenas em exceções específicas.",
      fundamento: "CP, art. 29.",
      macete: "Concurso de pessoas: regra monista, exceção pluralista.",
      erroComum: "Trocar monista por pluralista.",
      comoBancaPensa: "Inverte a teoria adotada."
    }
  },
  {
    id: "DP-061", disciplina: "Direito Penal", assunto: "Concurso de pessoas", subassunto: "Participação de menor importância (art. 29, § 1º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 29, § 1º)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "Se a participação no crime for de menor importância, a pena poderá ser reduzida de um sexto a um terço.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "um sexto a um terço",
    cognitivo: {
      motivo: "Cobrar a causa de diminuição da participação de menor importância.",
      mede: "Direito Penal — dosimetria no concurso de pessoas.",
      pegadinhaDesc: "A banca troca a fração (ex.: 'um terço a dois terços').",
      ondeErra: "Não retém a fração correta de redução.",
      palavraCritica: "um sexto a um terço",
      tecnica: "Art. 29, § 1º: participação de menor importância → redução de 1/6 a 1/3.",
      regraMental: "Participação de menor importância: reduz de 1/6 a 1/3."
    },
    comentario: {
      resolucao: "CERTO. O art. 29, § 1º, do CP prevê que, se a participação for de menor importância, a pena pode ser reduzida de um sexto a um terço. A causa aplica-se ao partícipe, não ao autor ou coautor.",
      fundamento: "CP, art. 29, § 1º.",
      macete: "Menor importância: 1/6 a 1/3.",
      erroComum: "Alterar a fração de redução.",
      comoBancaPensa: "Troca numérica na causa de diminuição."
    }
  },
  {
    id: "DP-062", disciplina: "Direito Penal", assunto: "Concurso de crimes", subassunto: "Concurso formal (art. 70)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 70)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "No concurso formal de crimes, as penas dos delitos praticados são sempre somadas, por aplicação do sistema do cúmulo material.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "sempre somadas",
    cognitivo: {
      motivo: "Cobrar o sistema de aplicação da pena no concurso formal.",
      mede: "Direito Penal — concurso de crimes.",
      pegadinhaDesc: "Usa 'sempre' e o cúmulo material para o concurso formal.",
      ondeErra: "Confunde concurso formal (exasperação) com material (soma).",
      palavraCritica: "sempre somadas",
      tecnica: "Art. 70: no concurso formal PRÓPRIO aplica-se a exasperação (pena mais grave aumentada de 1/6 a 1/2). A soma só ocorre no formal IMPRÓPRIO (desígnios autônomos).",
      regraMental: "Formal próprio = exasperação. Soma só no impróprio."
    },
    comentario: {
      resolucao: "ERRADO. No concurso formal próprio, aplica-se a exasperação: a pena mais grave (ou uma delas, se iguais) é aumentada de um sexto até metade (art. 70). A soma (cúmulo material) só incide no concurso formal impróprio, quando há desígnios autônomos. Logo, não é 'sempre' soma.",
      fundamento: "CP, art. 70.",
      macete: "Formal próprio: exaspera. Impróprio: soma.",
      erroComum: "Somar sempre no concurso formal.",
      comoBancaPensa: "Termo absoluto que ignora a exasperação."
    }
  },
  {
    id: "DP-063", disciplina: "Direito Penal", assunto: "Concurso de crimes", subassunto: "Crime continuado (art. 71)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 71)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "No crime continuado, aplica-se a pena de um só dos crimes, se idênticas, aumentada de um sexto a dois terços.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "um sexto a dois terços",
    cognitivo: {
      motivo: "Cobrar a regra do crime continuado (art. 71).",
      mede: "Direito Penal — concurso de crimes.",
      pegadinhaDesc: "A banca troca a fração de aumento do continuado.",
      ondeErra: "Confunde a fração do continuado (1/6 a 2/3) com a do formal (1/6 a 1/2).",
      palavraCritica: "um sexto a dois terços",
      tecnica: "Art. 71: crime continuado → pena de um só crime (se idênticas) aumentada de 1/6 a 2/3. É também exasperação, mas com fração maior que a do formal.",
      regraMental: "Continuado: exaspera de 1/6 a 2/3 (maior que a do formal)."
    },
    comentario: {
      resolucao: "CERTO. No crime continuado (art. 71), aplica-se a pena de um só dos crimes, se idênticas, aumentada de um sexto a dois terços. Trata-se de sistema de exasperação, com fração superior à do concurso formal próprio.",
      fundamento: "CP, art. 71.",
      macete: "Continuado: 1/6 a 2/3.",
      erroComum: "Usar a fração do concurso formal.",
      comoBancaPensa: "Confusão entre as frações de exasperação."
    }
  },

  /* ===== DOSIMETRIA — SÚMULAS ===== */
  {
    id: "DP-064", disciplina: "Direito Penal", assunto: "Aplicação da pena", subassunto: "Atenuante e mínimo legal (Súmula 231 STJ)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 65; Súmula 231 STJ)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "A incidência de circunstância atenuante pode conduzir à redução da pena para aquém do mínimo legal cominado ao crime.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "aquém do mínimo legal",
    cognitivo: {
      motivo: "Cobrar a Súmula 231 do STJ.",
      mede: "Direito Penal — dosimetria (2ª fase).",
      pegadinhaDesc: "Permite a atenuante furar o mínimo legal.",
      ondeErra: "Desconhece a Súmula 231 do STJ.",
      palavraCritica: "aquém do mínimo",
      tecnica: "Súmula 231 do STJ: a incidência da atenuante NÃO pode conduzir à redução da pena abaixo do mínimo legal.",
      regraMental: "Atenuante não fura o piso (Súmula 231 STJ)."
    },
    comentario: {
      resolucao: "ERRADO. Conforme a Súmula 231 do STJ, a incidência de circunstância atenuante não pode conduzir a pena inferior ao mínimo legal. O ajuste na 2ª fase da dosimetria respeita os limites da pena em abstrato.",
      fundamento: "CP, art. 65; Súmula 231 do STJ.",
      jurisprudencia: "STJ, Súmula 231.",
      macete: "Atenuante não desce abaixo do mínimo.",
      erroComum: "Reduzir abaixo do mínimo por atenuante.",
      comoBancaPensa: "Contraria entendimento sumulado."
    }
  },
  {
    id: "DP-065", disciplina: "Direito Penal", assunto: "Aplicação da pena", subassunto: "Maus antecedentes (Súmula 444 STJ)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 59; Súmula 444 STJ)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "É vedada a utilização de inquéritos policiais e ações penais em curso para agravar a pena-base a título de maus antecedentes.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "inquéritos e ações em curso",
    cognitivo: {
      motivo: "Cobrar a Súmula 444 do STJ.",
      mede: "Direito Penal — dosimetria (1ª fase) e presunção de inocência.",
      pegadinhaDesc: "A banca pode admitir inquéritos/ações em curso como maus antecedentes.",
      ondeErra: "Ignora a presunção de inocência aplicada à pena-base.",
      palavraCritica: "vedada",
      tecnica: "Súmula 444 do STJ: inquéritos e ações penais em curso não podem elevar a pena-base — decorrência da presunção de inocência.",
      regraMental: "Processo em curso não é mau antecedente (Súmula 444 STJ)."
    },
    comentario: {
      resolucao: "CERTO. A Súmula 444 do STJ veda o uso de inquéritos policiais e ações penais em curso para agravar a pena-base. Só condenações transitadas em julgado podem, conforme o caso, ser valoradas como maus antecedentes ou reincidência.",
      fundamento: "CP, art. 59; Súmula 444 do STJ; CF, art. 5º, LVII.",
      jurisprudencia: "STJ, Súmula 444.",
      macete: "Sem trânsito em julgado, não pesa na pena-base.",
      erroComum: "Valorar processos em curso como antecedentes.",
      comoBancaPensa: "Testa a aplicação da presunção de inocência."
    }
  },
  {
    id: "DP-066", disciplina: "Direito Penal", assunto: "Princípios penais", subassunto: "Insignificância (STF)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (STF — princípio da insignificância)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "Conforme o STF, a aplicação do princípio da insignificância exige apenas a constatação do pequeno valor econômico da coisa subtraída.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "apenas o pequeno valor",
    cognitivo: {
      motivo: "Cobrar os quatro vetores da insignificância (STF).",
      mede: "Direito Penal — princípio da insignificância.",
      pegadinhaDesc: "Reduz a insignificância ao pequeno valor da coisa.",
      ondeErra: "Confunde 'pequeno valor' (privilégio) com bagatela (atipicidade).",
      palavraCritica: "apenas",
      tecnica: "STF exige quatro vetores (MARI): Mínima ofensividade, Ausência de periculosidade social, Reduzido grau de reprovabilidade e Inexpressividade da lesão jurídica. Não basta o pequeno valor.",
      regraMental: "Insignificância: 4 vetores (MARI), não só o valor da coisa."
    },
    comentario: {
      resolucao: "ERRADO. Segundo o STF, a insignificância pressupõe quatro vetores cumulativos (MARI): mínima ofensividade da conduta, ausência de periculosidade social da ação, reduzido grau de reprovabilidade do comportamento e inexpressividade da lesão jurídica. O simples pequeno valor da coisa não basta.",
      fundamento: "STF, HC 84.412 (e reiterados).",
      jurisprudencia: "STF, HC 84.412.",
      macete: "MARI: 4 requisitos, não só o valor.",
      erroComum: "Reduzir a bagatela ao pequeno valor.",
      comoBancaPensa: "Restringe indevidamente os requisitos."
    }
  },

  /* ===== DIGNIDADE SEXUAL E HONRA ===== */
  {
    id: "DP-067", disciplina: "Direito Penal", assunto: "Crimes contra a dignidade sexual", subassunto: "Ação penal (Lei 13.718/2018)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 225; Lei 13.718/2018)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.82,
    enunciado: "Após a Lei 13.718/2018, os crimes contra a dignidade sexual passaram a ser, em regra, de ação penal pública incondicionada.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "incondicionada",
    cognitivo: {
      motivo: "Cobrar a natureza da ação penal nos crimes sexuais (art. 225).",
      mede: "Direito Penal — ação penal.",
      pegadinhaDesc: "A banca mantém a ação condicionada à representação (redação anterior).",
      ondeErra: "Estuda pela redação anterior a 2018.",
      palavraCritica: "incondicionada",
      tecnica: "Lei 13.718/2018 alterou o art. 225: os crimes contra a liberdade sexual e contra vulnerável passaram a ser de ação pública INCONDICIONADA.",
      regraMental: "Crime sexual (pós-2018): ação pública incondicionada."
    },
    comentario: {
      resolucao: "CERTO. A Lei 13.718/2018 deu nova redação ao art. 225 do CP: os crimes contra a liberdade sexual e os crimes sexuais contra vulnerável procedem mediante ação penal pública incondicionada, superando o regime anterior de ação condicionada à representação.",
      fundamento: "CP, art. 225; Lei 13.718/2018.",
      macete: "Crime sexual hoje: incondicionada.",
      erroComum: "Exigir representação (regime revogado).",
      comoBancaPensa: "Explora quem estudou pela redação antiga."
    }
  },
  {
    id: "DP-068", disciplina: "Direito Penal", assunto: "Crimes contra a honra", subassunto: "Calúnia × injúria (art. 138 × 140)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, arts. 138 e 140)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "Comete calúnia quem atribui a alguém, falsamente, qualidade negativa que ofenda sua dignidade ou decoro.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "qualidade negativa",
    cognitivo: {
      motivo: "Cobrar a distinção entre calúnia e injúria.",
      mede: "Direito Penal — crimes contra a honra.",
      pegadinhaDesc: "Descreve a injúria e a rotula como calúnia.",
      ondeErra: "Confunde imputação de fato criminoso (calúnia) com atribuição de qualidade negativa (injúria).",
      palavraCritica: "qualidade negativa",
      tecnica: "Calúnia (art. 138): imputar falsamente FATO definido como crime. Injúria (art. 140): atribuir qualidade negativa que ofende a dignidade/decoro. A assertiva descreve injúria.",
      regraMental: "Calúnia = fato-crime falso. Injúria = qualidade negativa."
    },
    comentario: {
      resolucao: "ERRADO. A conduta descrita — atribuir qualidade negativa que ofende a dignidade ou o decoro — caracteriza INJÚRIA (art. 140). A calúnia (art. 138) consiste em imputar falsamente a alguém FATO definido como crime.",
      fundamento: "CP, arts. 138 e 140.",
      macete: "Calúnia: fato-crime. Injúria: qualidade/xingamento.",
      erroComum: "Trocar os conceitos de calúnia e injúria.",
      comoBancaPensa: "Troca de conceitos entre crimes contra a honra."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE19);

/* Frequência de temas — Penal atualizado (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Direito Penal");
  if (!d) { d = { disciplina: "Direito Penal", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Feminicídio autônomo (Lei 14.994/2024)", freq: 94, tendencia: "alta", prob: 0.95 },
    { tema: "Perseguição e violência psicológica (147-A/147-B)", freq: 82, tendencia: "alta", prob: 0.85 },
    { tema: "Dosimetria e súmulas (231 e 444 do STJ)", freq: 86, tendencia: "alta", prob: 0.88 },
    { tema: "Concurso de pessoas e de crimes", freq: 84, tendencia: "estavel", prob: 0.86 },
  );
})();
