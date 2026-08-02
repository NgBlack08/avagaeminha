/* =====================================================================
   QUESTLAB — Lote 19: DIREITO PENAL — ATUALIZAÇÃO + JURISPRUDÊNCIA
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 121-A; Lei 14.994/2024)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.92,
    enunciado: "Com o advento da Lei 14.994/2024, o feminicídio deixou de figurar como qualificadora do homicídio e passou a constituir crime autônomo, com tipo penal próprio.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "crime autônomo",
    cognitivo: {
      motivo: "Cobrar a mudança de natureza jurídica do feminicídio.",
      palavraCritica: "crime autônomo",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 121-A; Lei 14.994/2024)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.88,
    enunciado: "O feminicídio, como crime autônomo, é punido com reclusão de doze a trinta anos.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "doze a trinta anos",
    cognitivo: {
      motivo: "Cobrar a pena do feminicídio autônomo (art. 121-A).",
      palavraCritica: "doze a trinta",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 121-A; Lei 14.994/2024)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.82,
    enunciado: "Considera-se que há razões da condição do sexo feminino quando o crime envolve violência doméstica e familiar ou menosprezo ou discriminação à condição de mulher.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "menosprezo ou discriminação",
    cognitivo: {
      motivo: "Cobrar o conceito de 'razões da condição do sexo feminino'.",
      palavraCritica: "violência doméstica OU menosprezo/discriminação",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 121-A)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "O feminicídio pode ter como vítima qualquer pessoa, bastando que o crime seja motivado por discriminação de gênero.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "qualquer pessoa",
    cognitivo: {
      motivo: "Cobrar a delimitação do sujeito passivo do feminicídio (a mulher).",
      palavraCritica: "qualquer pessoa",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 147-A; Lei 14.132/2021)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.82,
    enunciado: "Perseguir alguém, reiteradamente e por qualquer meio, ameaçando-lhe a integridade física ou psicológica ou perturbando sua esfera de liberdade ou privacidade, configura o crime de perseguição.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "reiteradamente",
    cognitivo: {
      motivo: "Cobrar o tipo de perseguição/stalking (art. 147-A).",
      palavraCritica: "reiteradamente",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 147-A)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "O crime de perseguição configura-se com a prática de um único ato isolado dirigido à vítima.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "um único ato isolado",
    cognitivo: {
      motivo: "Cobrar a exigência de reiteração no crime de perseguição.",
      palavraCritica: "único ato isolado",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 147-B; Lei 14.188/2021)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "Causar dano emocional à mulher, mediante humilhação, manipulação, isolamento ou chantagem, que a prejudique e perturbe seu pleno desenvolvimento, constitui crime autônomo previsto no Código Penal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dano emocional",
    cognitivo: {
      motivo: "Cobrar o crime de violência psicológica contra a mulher (art. 147-B).",
      palavraCritica: "crime autônomo",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 29)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "Quanto ao concurso de pessoas, o Código Penal adotou, como regra, a teoria pluralista, segundo a qual cada concorrente responde por um crime autônomo e distinto.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "teoria pluralista",
    cognitivo: {
      motivo: "Cobrar a teoria monista do concurso de pessoas (art. 29).",
      palavraCritica: "pluralista",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 29, § 1º)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "Se a participação no crime for de menor importância, a pena poderá ser reduzida de um sexto a um terço.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "um sexto a um terço",
    cognitivo: {
      motivo: "Cobrar a causa de diminuição da participação de menor importância.",
      palavraCritica: "um sexto a um terço",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 70)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "No concurso formal de crimes, as penas dos delitos praticados são sempre somadas, por aplicação do sistema do cúmulo material.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "sempre somadas",
    cognitivo: {
      motivo: "Cobrar o sistema de aplicação da pena no concurso formal.",
      palavraCritica: "sempre somadas",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 71)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "No crime continuado, aplica-se a pena de um só dos crimes, se idênticas, aumentada de um sexto a dois terços.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "um sexto a dois terços",
    cognitivo: {
      motivo: "Cobrar a regra do crime continuado (art. 71).",
      palavraCritica: "um sexto a dois terços",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 65; Súmula 231 STJ)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "A incidência de circunstância atenuante pode conduzir à redução da pena para aquém do mínimo legal cominado ao crime.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "aquém do mínimo legal",
    cognitivo: {
      motivo: "Cobrar a Súmula 231 do STJ.",
      palavraCritica: "aquém do mínimo",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 59; Súmula 444 STJ)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "É vedada a utilização de inquéritos policiais e ações penais em curso para agravar a pena-base a título de maus antecedentes.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "inquéritos e ações em curso",
    cognitivo: {
      motivo: "Cobrar a Súmula 444 do STJ.",
      palavraCritica: "vedada",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (STF — princípio da insignificância)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "Conforme o STF, a aplicação do princípio da insignificância exige apenas a constatação do pequeno valor econômico da coisa subtraída.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "apenas o pequeno valor",
    cognitivo: {
      motivo: "Cobrar os quatro vetores da insignificância (STF).",
      palavraCritica: "apenas",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 225; Lei 13.718/2018)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.82,
    enunciado: "Após a Lei 13.718/2018, os crimes contra a dignidade sexual passaram a ser, em regra, de ação penal pública incondicionada.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "incondicionada",
    cognitivo: {
      motivo: "Cobrar a natureza da ação penal nos crimes sexuais (art. 225).",
      palavraCritica: "incondicionada",
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
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, arts. 138 e 140)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "Comete calúnia quem atribui a alguém, falsamente, qualidade negativa que ofenda sua dignidade ou decoro.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "qualidade negativa",
    cognitivo: {
      motivo: "Cobrar a distinção entre calúnia e injúria.",
      palavraCritica: "qualidade negativa",
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
