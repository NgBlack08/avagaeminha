/* =====================================================================
   QUESTLAB — Lote 82: LEI ESTADUAL Nº 6.276/2001
   Carreiras de Agente de Polícia e Escrivão de Polícia da PC-AL

   POR QUE ESTE LOTE É PRIORITÁRIO

   O edital lista esta lei (item 7 de Legislação Institucional) e o banco
   tinha ZERO questões dela. É a lei que estrutura a carreira do próprio
   cargo em disputa — escolaridade de ingresso, classes, progressão,
   interstício e regime remuneratório. Nenhum outro diploma do edital
   fala tão diretamente da vida funcional de quem vai fazer a prova.

   PROCEDÊNCIA. Texto consolidado baixado do portal da transparência do
   Estado de Alagoas, na versão que traz as alterações das Leis
   6.387/2003, 6.401/2003, 6.592/2005, 6.595/2005, 6.788/2006 e
   6.927/2008 — com cada redação revogada transcrita ao lado da vigente.

   O EIXO DE DIFICULDADE: REDAÇÃO REVOGADA x REDAÇÃO VIGENTE

   A Lei 6.788/2006 reescreveu quase toda a lei, e é aí que mora a
   armadilha. Material antigo — e há muito em circulação — ainda ensina
   o texto de 2001. Critério de resolução adotado em todo o lote: em
   conflito entre redações, vale a MAIS RECENTE, e a resolução diz
   expressamente que a anterior foi revogada, para o aluno reconhecer a
   pegadinha em vez de apenas decorar o gabarito.

   As cinco inversões que a Lei 6.788/2006 produziu:

     Carreiras abrangidas — de OITO (Agente, Auxiliar de Necropsia,
       Escrivão, Papiloscopista e quatro Peritos) para DUAS: Agente de
       Polícia e Escrivão de Polícia.

     Escolaridade de ingresso — o art. 4º original exigia nível MÉDIO
       para Agente e Escrivão. Foi REVOGADO, e o art. 3º passou a exigir
       CURSO SUPERIOR COMPLETO. É a atualização mais cobrável do lote.

     Linha de progressão — de VERTICAL para HORIZONTAL.

     Classes por parte da carreira — Parte Permanente ficou com 4
       (A, B, C e D); Parte Especial e Suplementar, com 3 (B, C e D).

     Adicional noturno — a redação de 2006 VEDAVA seu acréscimo ao
       subsídio; a vigente, dada pela Lei 6.927/2008, o RESSALVA. Uma
       palavra troca o gabarito.

   Gabarito: 9 CERTO / 9 ERRADO. Vale a nota metodológica do lote 77
   sobre comprimento e regra cega em lote pequeno.
   ===================================================================== */

const CARGOS82 = ["Escrivão", "Agente"];
const BASE82 = {
  concurso: "PCAL", cargo: CARGOS82, ano: 2026,
  tipo: "CE", probReaparecer: 0.82,
  disciplina: "Legislação Institucional (AL)",
  assunto: "Carreiras da PC-AL (Lei 6.276/2001)",
};

const QUESTOES_PCAL_LOTE82 = [

  /* ===== ABRANGÊNCIA E ESTRUTURA (ARTS. 1º E 2º) ===== */

  {
    ...BASE82,
    id: "LI-120", subassunto: "Carreiras abrangidas — art. 1º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 1º)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "A Lei estadual nº 6.276/2001 estrutura, na Parte Permanente, as carreiras de Agente de Polícia, Escrivão de Polícia, Papiloscopista e Perito Criminal.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "Papiloscopista e Perito Criminal",
    cognitivo: {
      motivo: "Cobrar a redação vigente do art. 1º contra a original, que de fato listava essas carreiras.",
      palavraCritica: "Papiloscopista",
    },
    comentario: {
      resolucao: "ERRADO — pela redação VIGENTE. O art. 1º, com a redação dada pela Lei nº 6.788/2006, estrutura apenas as carreiras de Agente de Polícia e Escrivão de Polícia. A redação original de 2001 realmente listava oito carreiras, incluindo Papiloscopista e os Peritos, mas foi REVOGADA. Em conflito entre redações, prevalece a mais recente.",
      fundamento: "Lei estadual nº 6.276/2001, art. 1º, com a redação da Lei nº 6.788/2006.",
      macete: "Depois de 2006 a lei é de duas carreiras: Agente e Escrivão. Se o item citar Perito ou Papiloscopista como carreira estruturada aqui, é texto revogado.",
      erroComum: "Responder pela apostila antiga, que reproduz a lista de oito carreiras.",
      comoBancaPensa: "Reproduz com fidelidade um texto que existiu — e conta com quem estudou pela versão errada."
    }
  },

  {
    ...BASE82,
    id: "LI-121", subassunto: "Classes por parte da carreira — art. 2º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 2º)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Os cargos da Parte Permanente distribuem-se em quatro Classes — A, B, C e D —, ao passo que os da Parte Especial e da Parte Suplementar se distribuem em três Classes: B, C e D.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "três Classes: B, C e D",
    cognitivo: {
      motivo: "Cobrar a assimetria criada pela Lei 6.788/2006, que a redação anterior não tinha.",
      palavraCritica: "Parte Especial",
    },
    comentario: {
      resolucao: "CERTO. É a redação vigente do art. 2º, dada pela Lei nº 6.788/2006. A assimetria é deliberada: quem já era da carreira migrou para a Parte Especial e entra a partir da Classe B, enquanto a Classe A é o degrau de ingresso da Parte Permanente. As redações anteriores previam quatro Classes para todos, sem distinção.",
      fundamento: "Lei estadual nº 6.276/2001, art. 2º, com a redação da Lei nº 6.788/2006.",
      macete: "Permanente começa em A; Especial e Suplementar começam em B.",
      erroComum: "Uniformizar em quatro Classes, que era a regra até 2006.",
      comoBancaPensa: "Número que muda conforme a parte da carreira — formato clássico de troca numérica."
    }
  },

  /* ===== INGRESSO (ART. 3º E O ART. 4º REVOGADO) ===== */

  {
    ...BASE82,
    id: "LI-122", subassunto: "Escolaridade de ingresso — art. 3º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 3º)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "O ingresso na classe inicial das carreiras de Agente de Polícia e Escrivão de Polícia dá-se mediante concurso público de provas ou de provas e títulos, exigido o curso superior completo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "curso superior completo",
    cognitivo: {
      motivo: "Fixar a exigência vigente de nível superior, que substituiu o nível médio da redação original.",
      palavraCritica: "superior completo",
    },
    comentario: {
      resolucao: "CERTO. É a redação vigente do art. 3º, dada pela Lei nº 6.788/2006. Antes dela, o art. 4º — hoje revogado — admitia ensino médio e/ou profissionalizante para Agente e Escrivão. A elevação da escolaridade acompanhou a transformação dessas carreiras em cargos de nível superior.",
      fundamento: "Lei estadual nº 6.276/2001, art. 3º, com a redação da Lei nº 6.788/2006.",
      macete: "Hoje é nível superior para os dois cargos. Nível médio é texto revogado.",
      erroComum: "Confiar em edital antigo ou material desatualizado, que ainda fala em nível médio.",
      comoBancaPensa: "Ponto de atualização legislativa — a banca cobra justamente onde o material comum errou."
    }
  },

  {
    ...BASE82,
    id: "LI-123", subassunto: "Art. 4º revogado — escolaridade anterior",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 4º, revogado)",
    dificuldade: 3, tempoIdealSeg: 65,
    enunciado: "O ingresso na classe inicial da carreira de Escrivão de Polícia dá-se mediante concurso público de provas ou de provas e títulos, bastando ao candidato a habilitação em ensino de nível médio e/ou profissionalizante.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "nível médio e/ou profissionalizante",
    cognitivo: {
      motivo: "Cobrar dispositivo expressamente revogado, cuja redação ainda circula em material de estudo.",
      palavraCritica: "basta",
    },
    comentario: {
      resolucao: "ERRADO. Essa exigência estava no art. 4º, II, da redação original, que foi expressamente REVOGADO pela Lei nº 6.788/2006. Desde então vale o art. 3º: curso superior completo. O item reproduz com fidelidade um texto que já não está em vigor — e é exatamente isso que a banca explora.",
      fundamento: "Lei estadual nº 6.276/2001, art. 4º (revogado pela Lei nº 6.788/2006); art. 3º, redação vigente.",
      macete: "Artigo revogado não fundamenta gabarito CERTO, por mais fiel que seja a transcrição.",
      erroComum: "Reconhecer a frase, lembrar de tê-la lido e marcar certo sem checar se ainda vigora.",
      comoBancaPensa: "Cita norma revogada como se vigente — variação do padrão de atualização legislativa."
    }
  },

  {
    ...BASE82,
    id: "LI-124", subassunto: "Requisitos específicos — art. 3º, § 1º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 3º, § 1º)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Exige-se a Carteira Nacional de Habilitação apenas para o cargo de Agente de Polícia, ao passo que a comprovação de conhecimentos de informática, por prova específica, é exigida para todos os cargos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "apenas para o cargo de Agente",
    cognitivo: {
      motivo: "Cobrar a distribuição assimétrica dos dois requisitos do § 1º, que a banca costuma igualar.",
      palavraCritica: "apenas",
    },
    comentario: {
      resolucao: "CERTO. O § 1º do art. 3º é expresso: CNH para o cargo de Agente de Polícia, e conhecimentos de informática, mediante prova específica definida em regulamento, para TODOS os cargos. São dois requisitos com alcances diferentes no mesmo parágrafo.",
      fundamento: "Lei estadual nº 6.276/2001, art. 3º, § 1º.",
      macete: "CNH: só Agente. Informática: todo mundo.",
      erroComum: "Estender a CNH ao Escrivão, por serem os dois cargos da mesma lei.",
      comoBancaPensa: "Dois requisitos no mesmo dispositivo, com abrangências distintas — basta trocar uma para o item cair."
    }
  },

  {
    ...BASE82,
    id: "LI-125", subassunto: "Curso de formação — art. 3º, § 2º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 3º, § 2º)",
    dificuldade: 3, tempoIdealSeg: 65,
    enunciado: "A conclusão do curso de formação na Academia de Polícia Civil ou em estabelecimento congênere é exigida para todos os cargos, em caráter exclusivamente classificatório.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "exclusivamente classificatório",
    cognitivo: {
      motivo: "Suprimir o caráter eliminatório do curso de formação, que o § 2º prevê ao lado do classificatório.",
      palavraCritica: "exclusivamente",
    },
    comentario: {
      resolucao: "ERRADO. O § 2º do art. 3º exige o curso de formação 'em caráter eliminatório e classificatório'. São as duas naturezas cumuladas: o candidato pode ser eliminado no curso, e não apenas reordenado na lista. Restringi-lo ao classificatório muda a consequência prática do reprovado.",
      fundamento: "Lei estadual nº 6.276/2001, art. 3º, § 2º.",
      macete: "Curso de formação da PC-AL elimina e classifica. Quem diz só uma das duas, erra.",
      erroComum: "Assumir que etapa de curso serve apenas para ordenar aprovados.",
      comoBancaPensa: "Suprime metade de uma expressão consagrada — 'eliminatório e classificatório' — e conta com a leitura rápida."
    }
  },

  {
    ...BASE82,
    id: "LI-126", subassunto: "Execução do concurso — art. 3º, § 5º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 3º, § 5º)",
    dificuldade: 3, tempoIdealSeg: 65,
    enunciado: "O concurso de ingresso será realizado mediante contrato de prestação de serviços com instituição especializada não integrante da estrutura da Administração Pública do Estado de Alagoas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não integrante da estrutura",
    cognitivo: {
      motivo: "Cobrar a exigência de banca externa, que poucos candidatos associam à lei de carreira.",
      palavraCritica: "não integrante",
    },
    comentario: {
      resolucao: "CERTO. É a redação do § 5º do art. 3º. A lei impõe que a organização do certame seja contratada com instituição especializada de fora da Administração estadual — é o fundamento legal de o concurso ser conduzido por banca como a CEBRASPE, e não por órgão do próprio Estado.",
      fundamento: "Lei estadual nº 6.276/2001, art. 3º, § 5º.",
      macete: "A própria lei da carreira proíbe que o Estado organize o concurso por conta própria.",
      erroComum: "Achar que a escolha da banca é discricionária, sem previsão legal.",
      comoBancaPensa: "Dispositivo pouco lido, mas de fácil verificação — item de literalidade pura."
    }
  },

  /* ===== REGIME REMUNERATÓRIO (ARTS. 5º E 6º) ===== */

  {
    ...BASE82,
    id: "LI-127", subassunto: "Subsídio e ressalvas — art. 5º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 5º)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "O sistema remuneratório é o de subsídio, fixado em parcela única, ressalvadas as verbas de gratificação de função de confiança, o adicional noturno e as de caráter indenizatório.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "o adicional noturno",
    cognitivo: {
      motivo: "Cobrar a redação vigente do art. 5º, que passou a ressalvar o adicional noturno antes vedado.",
      palavraCritica: "adicional noturno",
    },
    comentario: {
      resolucao: "CERTO — pela redação VIGENTE, dada pela Lei nº 6.927/2008. Ela ressalva três grupos: gratificação de função de confiança, adicional noturno e verbas indenizatórias. A redação imediatamente anterior, da Lei nº 6.788/2006, listava o adicional noturno entre as parcelas VEDADAS. A mudança de uma palavra inverte o gabarito, e prevalece a lei mais recente.",
      fundamento: "Lei estadual nº 6.276/2001, art. 5º, com a redação da Lei nº 6.927/2008.",
      macete: "Desde 2008 o adicional noturno é ressalva, não vedação.",
      erroComum: "Responder pela redação de 2006, que ainda aparece em material não atualizado.",
      comoBancaPensa: "Escolhe o item que migrou de uma lista para a outra — o candidato lembra da palavra, mas não do lado."
    }
  },

  {
    ...BASE82,
    id: "LI-128", subassunto: "Redação revogada do art. 5º — adicional noturno",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 5º)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Por integrar o subsídio em parcela única, é vedado o acréscimo de adicional noturno à remuneração do Agente de Polícia e do Escrivão de Polícia.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "é vedado o acréscimo de adicional noturno",
    cognitivo: {
      motivo: "Reproduzir a redação de 2006, revogada pela de 2008, que moveu o adicional noturno para as ressalvas.",
      palavraCritica: "vedado",
    },
    comentario: {
      resolucao: "ERRADO. A vedação existiu — era a redação dada pela Lei nº 6.788/2006 —, mas foi superada pela Lei nº 6.927/2008, que passou a RESSALVAR o adicional noturno. Como as duas normas são estaduais e de mesma hierarquia, resolve-se pelo critério cronológico: a posterior revoga a anterior naquilo em que com ela é incompatível.",
      fundamento: "Lei estadual nº 6.276/2001, art. 5º, redação da Lei nº 6.927/2008 (que superou a da Lei nº 6.788/2006).",
      macete: "Duas redações em conflito, mesma hierarquia: vale a mais nova.",
      erroComum: "Raciocinar pelo conceito puro de subsídio, que realmente rejeita acréscimos, sem ver a ressalva legal expressa.",
      comoBancaPensa: "Oferece uma justificativa doutrinária correta para uma conclusão que a lei local afasta."
    }
  },

  {
    ...BASE82,
    id: "LI-129", subassunto: "Diferença entre Classes — art. 5º, § 2º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 5º, § 2º)",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "A diferença de subsídios entre as Classes será de 15%.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "15%",
    cognitivo: {
      motivo: "Cobrar o único percentual da lei, alvo natural de troca numérica.",
      palavraCritica: "15%",
    },
    comentario: {
      resolucao: "CERTO. É a redação do § 2º do art. 5º. O percentual é fixo e vale entre Classes sucessivas, de modo que cada progressão horizontal representa acréscimo de quinze por cento sobre o subsídio da Classe anterior.",
      fundamento: "Lei estadual nº 6.276/2001, art. 5º, § 2º.",
      macete: "Um só número percentual na lei inteira: 15% entre Classes.",
      erroComum: "Confundir com percentuais de outras leis de carreira do Estado.",
      comoBancaPensa: "Número isolado e fácil de trocar por 10% ou 20% — item de checagem numérica."
    }
  },

  {
    ...BASE82,
    id: "LI-130", subassunto: "Estágio probatório — art. 6º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 6º)",
    dificuldade: 3, tempoIdealSeg: 65,
    enunciado: "Durante o estágio probatório de três anos, o servidor das carreiras de Agente de Polícia e Escrivão de Polícia da Parte Permanente receberá subsídio equivalente ao da Classe A.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Classe A",
    cognitivo: {
      motivo: "Reunir prazo e referência remuneratória do estágio probatório num só julgamento.",
      palavraCritica: "três anos",
    },
    comentario: {
      resolucao: "CERTO. É a redação vigente do art. 6º, dada pela Lei nº 6.788/2006. O prazo de três anos acompanha o art. 41 da Constituição Federal, e a referência remuneratória é a Classe A, que é justamente a de ingresso da Parte Permanente.",
      fundamento: "Lei estadual nº 6.276/2001, art. 6º, com a redação da Lei nº 6.788/2006.",
      macete: "Três anos de estágio, pagando pela Classe A — a classe de entrada.",
      erroComum: "Trocar o prazo por dois anos, ou a referência para a Classe B.",
      comoBancaPensa: "Duas informações checáveis no mesmo item; basta uma errada para o gabarito virar."
    }
  },

  /* ===== PROGRESSÃO FUNCIONAL (ART. 7º) ===== */

  {
    ...BASE82,
    id: "LI-131", subassunto: "Linha de progressão — art. 7º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 7º)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "A progressão funcional nas carreiras de Agente de Polícia e Escrivão de Polícia da Parte Permanente dar-se-á em linha vertical de acesso, segundo o grau de formação exigido para o provimento do cargo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "linha vertical de acesso",
    cognitivo: {
      motivo: "Reproduzir a redação original do art. 7º, que falava em linha vertical, hoje substituída por horizontal.",
      palavraCritica: "vertical",
    },
    comentario: {
      resolucao: "ERRADO. A redação vigente do art. 7º, dada pela Lei nº 6.788/2006, prevê progressão em linha HORIZONTAL de acesso. A original de 2001 dizia 'vertical', e foi revogada. O resto da assertiva está correto — o critério é mesmo o grau de formação —, o que torna o erro mais difícil de ver.",
      fundamento: "Lei estadual nº 6.276/2001, art. 7º, com a redação da Lei nº 6.788/2006.",
      macete: "Depois de 2006, a progressão dessas carreiras é HORIZONTAL, por Classe.",
      erroComum: "Associar 'progressão por classes' à ideia intuitiva de subida vertical.",
      comoBancaPensa: "Troca uma palavra do caput e mantém todo o resto fiel — o item parece o texto legal."
    }
  },

  {
    ...BASE82,
    id: "LI-132", subassunto: "Horas de capacitação por Classe — art. 7º, I a IV",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 7º)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "Exige-se, além do curso de nível superior, 240 horas de cursos de capacitação para a Classe B, 360 horas para a Classe C e 480 horas para a Classe D.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "240 horas ... Classe B",
    cognitivo: {
      motivo: "Deslocar em um degrau toda a escala de horas do art. 7º, mantendo a progressão aritmética.",
      palavraCritica: "480",
    },
    comentario: {
      resolucao: "ERRADO. A escala correta do art. 7º é 120 horas para a Classe B, 240 para a Classe C e 360 para a Classe D — sempre somadas ao curso de nível superior. O item desloca toda a régua em um degrau e inventa um patamar de 480 horas, que não existe na lei.",
      fundamento: "Lei estadual nº 6.276/2001, art. 7º, incisos II, III e IV, com a redação da Lei nº 6.788/2006.",
      macete: "120, 240, 360 — de cem em cem e vinte, e para em 360. A Classe A não exige horas, só o superior.",
      erroComum: "Lembrar que os números crescem de 120 em 120 e não conferir onde a régua começa.",
      comoBancaPensa: "Mantém o padrão aritmético para o item parecer plausível e desloca o ponto de partida."
    }
  },

  {
    ...BASE82,
    id: "LI-133", subassunto: "Interstício — art. 7º, § 1º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 7º, § 1º)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "A progressão horizontal obedecerá, exclusivamente, à titulação exigida mais o interstício de cinco anos, contados a partir do último posicionamento na Classe imediatamente anterior.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "cinco anos",
    cognitivo: {
      motivo: "Cobrar os dois requisitos cumulativos da progressão e o marco inicial da contagem.",
      palavraCritica: "exclusivamente",
    },
    comentario: {
      resolucao: "CERTO. É a redação vigente do § 1º do art. 7º. Note o 'exclusivamente': os requisitos são apenas dois — titulação e interstício —, e o prazo não corre da posse, mas do último posicionamento na Classe imediatamente anterior.",
      fundamento: "Lei estadual nº 6.276/2001, art. 7º, § 1º, com a redação da Lei nº 6.788/2006.",
      macete: "Titulação + cinco anos, contados do último posicionamento. Nada além disso.",
      erroComum: "Contar o interstício do ingresso na carreira, e não da Classe anterior.",
      comoBancaPensa: "O marco inicial da contagem é o detalhe que a banca troca sem mexer no número."
    }
  },

  {
    ...BASE82,
    id: "LI-134", subassunto: "Carga mínima dos cursos — art. 7º, § 2º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 7º, § 2º)",
    dificuldade: 3, tempoIdealSeg: 65,
    enunciado: "Os cursos de capacitação exigidos para a progressão serão oferecidos obrigatoriamente pela Administração Pública Estadual, computando-se, para efeito de somatório das horas, aqueles que possuam carga mínima de vinte horas.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "vinte horas",
    cognitivo: {
      motivo: "Trocar o piso de carga horária que filtra quais cursos entram no somatório.",
      palavraCritica: "vinte",
    },
    comentario: {
      resolucao: "ERRADO. O § 2º do art. 7º exige carga mínima de QUARENTA horas para que o curso seja computado no somatório. O piso existe para impedir que se acumulem muitos cursos curtos até atingir o total exigido pela Classe.",
      fundamento: "Lei estadual nº 6.276/2001, art. 7º, § 2º, com a redação da Lei nº 6.788/2006.",
      macete: "Só conta curso de 40 horas para cima.",
      erroComum: "Supor que qualquer certificado se soma, independentemente da duração.",
      comoBancaPensa: "Reduz o piso pela metade — número plausível, e poucos candidatos memorizam esse parágrafo."
    }
  },

  {
    ...BASE82,
    id: "LI-135", subassunto: "Acesso aos cursos e desempate — art. 7º, § 3º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 7º, § 3º)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "O ingresso nos cursos de capacitação observa, em regime de alternância, o maior tempo de serviço público do servidor, e, havendo empate, o maior tempo na Classe em que ele se encontrar.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "maior tempo de serviço público",
    cognitivo: {
      motivo: "Inverter a ordem dos critérios do § 3º, trocando o principal pelo de desempate.",
      palavraCritica: "havendo empate",
    },
    comentario: {
      resolucao: "ERRADO. A ordem é a inversa. O critério principal é o maior tempo de serviço NA CLASSE em que o servidor se encontrar; o primeiro desempate é o maior tempo no serviço público; e, persistindo o empate, procede-se a sorteio. O item troca os dois primeiros de lugar e omite o sorteio.",
      fundamento: "Lei estadual nº 6.276/2001, art. 7º, § 3º.",
      macete: "Primeiro o tempo na Classe; depois o tempo no serviço público; por último, sorteio.",
      erroComum: "Presumir que o tempo total de serviço público prevalece, por ser o critério mais comum na Administração.",
      comoBancaPensa: "Inverte critério principal e critério de desempate — a assertiva usa as palavras certas na ordem errada."
    }
  },

  {
    ...BASE82,
    id: "LI-136", subassunto: "Vedação ao reaproveitamento — art. 7º, § 4º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 7º, § 4º)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "A qualificação, a habilitação ou a titulação já utilizada em uma progressão pode ser novamente aproveitada em outra forma de progressão funcional, desde que respeitado o interstício legal entre elas.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "pode ser aproveitada em mais de uma",
    cognitivo: {
      motivo: "Inverter uma vedação absoluta do § 4º, criando uma condição que a lei não admite.",
      palavraCritica: "desde que",
    },
    comentario: {
      resolucao: "ERRADO. O § 4º do art. 7º é categórico: 'Sob nenhuma hipótese uma mesma qualificação, habilitação ou titulação poderá ser utilizada em mais de uma forma de progressão'. Não há ressalva, e o respeito ao interstício não abre exceção alguma — a condição criada pelo item não existe na lei.",
      fundamento: "Lei estadual nº 6.276/2001, art. 7º, § 4º.",
      macete: "Cada título vale uma vez só. 'Sob nenhuma hipótese' não comporta condição.",
      erroComum: "Aceitar a ressalva por ela soar razoável e administrativamente plausível.",
      comoBancaPensa: "Transforma vedação absoluta em regra condicionada — inversão típica do padrão 'exigência inexistente'."
    }
  },

  {
    ...BASE82,
    id: "LI-137", subassunto: "Progressão automática — art. 7º, § 5º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.276/2001, art. 7º, § 5º)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Decorrido o interstício sem que a Administração Pública tenha oferecido os cursos de capacitação, a progressão horizontal dar-se-á automaticamente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "automaticamente",
    cognitivo: {
      motivo: "Cobrar o § 5º, acrescentado em 2006, que impede que a omissão estatal trave a carreira.",
      palavraCritica: "automaticamente",
    },
    comentario: {
      resolucao: "CERTO. É o § 5º do art. 7º, acrescentado pela Lei nº 6.788/2006. A lógica é impedir que a inércia da Administração — que é quem deve oferecer os cursos, por força do § 2º — prejudique o servidor: cumprido o interstício sem oferta, a progressão ocorre de pleno direito.",
      fundamento: "Lei estadual nº 6.276/2001, art. 7º, § 5º (acrescentado pela Lei nº 6.788/2006).",
      macete: "Se o Estado não ofereceu curso, o servidor progride assim mesmo.",
      erroComum: "Supor que a titulação é sempre indispensável, sem conhecer a válvula de escape do § 5º.",
      comoBancaPensa: "Dispositivo que contraria a regra geral do próprio artigo — por isso é bom item de prova."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE82);
