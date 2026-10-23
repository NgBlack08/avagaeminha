/* =====================================================================
   QUESTLAB — Lote 134: MÚLTIPLA ESCOLHA DERIVADA DOS QAPs DE PORTUGUÊS

   MÉTODO E REGRAS: os dos lotes 98, 106, 112, 117 e 129. Cada item reúne
   quatro afirmativas I–IV que já existem no banco como itens CERTO/ERRADO
   dos lotes 130 a 133; o valor de verdade vem do gabarito do item de
   origem. Só entraram afirmativas que se julgam pela regra gramatical,
   sem depender do texto-base; a localização no texto ("terceiro
   parágrafo") foi retirada de cada afirmativa.

   9 itens (PT-446 a PT-454).
   ===================================================================== */

const BASE134 = {
  concurso: "PCAL", cargo: ["Escrivão", "Agente"], ano: 2026,
  tipo: "ME", probReaparecer: 0.8,
  origem: "Autoral QuestLab — múltipla escolha derivada de itens C/E dos QAPs DSO já no banco (lotes 130 a 133); IDs de origem no subassunto",
};

const QUESTOES_PCAL_LOTE134 = [

  {
    ...BASE134,
    cargo: ["Escrivão", "Agente", "Especialista em Saúde — Fisioterapia"],
    id: "PT-446", disciplina: "Língua Portuguesa", assunto: "Ortografia e acentuação",
    subassunto: "Derivado de PT-339, PT-341, PT-342, PT-362 — Acordo Ortográfico — trema, hiatos e prefixo co-",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da ortografia oficial e da acentuação gráfica, considere as seguintes afirmações:\n\nI. A palavra \"consequências\" pode ser grafada, de acordo com a ortografia oficial, com o uso do trema: conseqüências.\nII. Os vocábulos \"inteligência\", \"área\" e \"prévio\" são acentuados graficamente de acordo com a mesma regra de acentuação gráfica.\nIII. Estaria de acordo com a ortografia oficial vigente caso o vocábulo \"voo\" estivesse grafado da seguinte forma: vôo.\nIV. De acordo com a ortografia oficial, o prefixo co-, presente em “coautor”, une-se, sem a intermediação de hífen, ao segundo elemento mesmo quando este se inicia por o, a exemplo de coobrigação.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "literalidade", palavraChave: "coobrigação",
    cognitivo: {
      motivo: "Revisar Acordo Ortográfico — trema, hiatos e prefixo co-.",
      palavraCritica: "trema",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I incorreta: o trema foi abolido nas palavras portuguesas (fica só em nomes estrangeiros). Afirmativa II correta: as três são paroxítonas terminadas em ditongo crescente. Afirmativa III incorreta: o hiato 'oo' perdeu o acento: voo. Afirmativa IV correta: 'co-' aglutina-se mesmo diante de 'o': coobrigação. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "Acordo Ortográfico de 1990.",
      macete: "Trema e acento em 'oo' caíram; 'co' sempre junto.",
      erroComum: "Grafar como antes do Acordo.",
      comoBancaPensa: "Mistura regras novas e antigas.",
    },
  },

  {
    ...BASE134,
    cargo: ["Escrivão", "Agente", "Especialista em Saúde — Fisioterapia"],
    id: "PT-447", disciplina: "Língua Portuguesa", assunto: "Ortografia e acentuação",
    subassunto: "Derivado de PT-343, PT-344, PT-360, PT-345 — regras de acentuação gráfica",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Com relação às regras de acentuação gráfica, considere as seguintes afirmações:\n\nI. Os vocábulos \"semântico\", \"sintático\" e \"linguísticas\" são acentuados graficamente de acordo com a regra de acentuação gráfica das palavras proparoxítonas.\nII. As palavras \"lá\" e \"também\" são acentuadas graficamente em razão de regras de acentuação distintas.\nIII. Os vocábulos “homicídios” e “caíram” são acentuados graficamente de acordo com a mesma regra de acentuação gráfica.\nIV. Os vocábulos \"língua\" e \"história\" são acentuados graficamente em razão da regra que determina que se acentuem palavras paroxítonas terminadas em ditongo crescente, seguido, ou não, de s.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
    ],
    gabarito: "B", pegadinha: "troca-conceito", palavraChave: "proparoxítonas",
    cognitivo: {
      motivo: "Revisar regras de acentuação gráfica.",
      palavraCritica: "mesma regra",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I correta: as três são proparoxítonas. Afirmativa II correta: 'lá' é monossílabo tônico; 'também', oxítona em -em: regras distintas. Afirmativa III incorreta: 'homicídios' é paroxítona em ditongo; 'caíram' tem 'i' tônico de hiato. Afirmativa IV correta: 'língua' e 'história' são paroxítonas terminadas em ditongo crescente. Resta(m) apenas as afirmativas I, II e IV.",
      fundamento: "Acentuação gráfica.",
      macete: "Localize a sílaba tônica; depois procure ditongo ou hiato.",
      erroComum: "Igualar palavras só porque têm acento no 'i'.",
      comoBancaPensa: "Agrupa palavras de regras diferentes.",
    },
  },

  {
    ...BASE134,
    cargo: ["Escrivão", "Agente", "Especialista em Saúde — Fisioterapia"],
    id: "PT-448", disciplina: "Língua Portuguesa", assunto: "Crase",
    subassunto: "Derivado de PT-314, PT-401, PT-316, PT-402 — crase e regência",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "No que se refere ao emprego do sinal indicativo de crase, considere as seguintes afirmações:\n\nI. Em “Cabe à gestão superior”, o sinal indicativo de crase é facultativo.\nII. Prejudicaria a correção gramatical do trecho a inserção do sinal indicativo de crase no vocábulo “a”, em “submeter-se voluntariamente a uma tirania desnecessária”.\nIII. O trecho “com respeito à liberdade e à privacidade” poderia ser reescrito, mantidas a coerência e a correção gramatical do trecho, como respeitando à liberdade e à privacidade.\nIV. A inserção do sinal indicativo de crase no vocábulo “a” em “implique a derrubada” prejudicaria a correção gramatical do trecho em questão.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "facultativo",
    cognitivo: {
      motivo: "Revisar crase e regência.",
      palavraCritica: "crase",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I incorreta: 'caber a' + 'a gestão': crase obrigatória. Afirmativa II correta: antes de artigo indefinido 'uma' não há crase. Afirmativa III incorreta: 'respeitar' é transitivo direto: 'respeitando a liberdade'. Afirmativa IV correta: 'implicar' (acarretar) é transitivo direto: não há preposição para formar crase. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "Crase — preposição 'a' + artigo 'a'.",
      macete: "Troque por masculino: apareceu 'ao'? Então há crase.",
      erroComum: "Generalizar a crase facultativa.",
      comoBancaPensa: "Mistura casos obrigatórios, proibidos e facultativos.",
    },
  },

  {
    ...BASE134,
    cargo: ["Escrivão", "Agente", "Especialista em Saúde — Fisioterapia"],
    id: "PT-449", disciplina: "Língua Portuguesa", assunto: "Orações subordinadas",
    subassunto: "Derivado de PT-416, PT-322, PT-415, PT-321 — valores do 'se'",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos valores do vocábulo \"se\", considere as seguintes afirmações:\n\nI. Em “Trata-se de uma tática”, o vocábulo “se” funciona como pronome apassivador.\nII. No fragmento \"Constatou-se, ainda, que, atualmente, menos da metade dos indivíduos no Brasil consome frutas diariamente\", a partícula \"se\", empregada na primeira oração, indica que esta está na voz passiva.\nIII. Em “Abriram-se as urnas”, a partícula “se” exerce função de realce, podendo ser omitida sem alterar o sentido original do período e as relações sintáticas da oração.\nIV. No trecho “se você trabalha oito horas por dia”, o vocábulo “se” tem a mesma classificação gramatical que o vocábulo “se” empregado em “e você acha que está se divertindo em Anastácia”.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa I está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I, II e III estão corretas.",
    ],
    gabarito: "D", pegadinha: "troca-conceito", palavraChave: "apassivador",
    cognitivo: {
      motivo: "Revisar valores do 'se'.",
      palavraCritica: "voz passiva",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I incorreta: com VTI ('tratar de'), o 'se' é índice de indeterminação do sujeito. Afirmativa II correta: 'constatar' é VTD: 'se' apassivador, com sujeito oracional. Afirmativa III incorreta: 'Abriram-se as urnas' é passiva sintética; tirar o 'se' muda a voz. Afirmativa IV incorreta: um 'se' é conjunção condicional; o outro, pronome de verbo pronominal. Resta(m) apenas a afirmativa II.",
      fundamento: "Valores do 'se'.",
      macete: "VTD + se = passiva; VTI/VI + se = indeterminação.",
      erroComum: "Ver 'se' e pensar logo em sujeito indeterminado.",
      comoBancaPensa: "Troca as funções do 'se'.",
    },
  },

  {
    ...BASE134,
    cargo: ["Escrivão", "Agente", "Especialista em Saúde — Fisioterapia"],
    id: "PT-450", disciplina: "Língua Portuguesa", assunto: "Colocação pronominal",
    subassunto: "Derivado de PT-280, PT-278, PT-281, PT-412 — próclise, ênclise e casos facultativos",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Quanto à colocação dos pronomes átonos, considere as seguintes afirmações:\n\nI. No trecho \"Trata-se, em última análise, de reconhecer que o exercício contemporâneo da fiscalização depende de agentes públicos dotados de letramento digital específico\", é obrigatória a ênclise do pronome átono em \"Trata-se\".\nII. No trecho \"Na atualidade, saneamento básico se tornou algo tão comum\", a alteração da posição proclítica do pronome átono \"se\" para a posição enclítica — tornou-se — prejudicaria a correção gramatical do trecho.\nIII. No trecho \"Lucas disse ter se encontrado\", a partícula \"se\" poderia ser conectada ao verbo auxiliar mediante hífen, escrevendo-se ter-se encontrado, sem prejuízo da correção gramatical do trecho.\nIV. No trecho “O direito se constitui em esfera especial e profissional”, a colocação enclítica do pronome “se” prejudicaria a correção gramatical do trecho.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa I está correta.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Apenas as afirmativas I e III estão corretas.",
    ],
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "ênclise",
    cognitivo: {
      motivo: "Revisar próclise, ênclise e casos facultativos.",
      palavraCritica: "obrigatória",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I correta: pronome átono não inicia período: ênclise obrigatória em 'Trata-se'. Afirmativa II incorreta: sem atrator, depois de sujeito substantivo, a ênclise também é correta. Afirmativa III correta: em locução com particípio, o pronome pode ligar-se ao auxiliar: 'ter-se encontrado'. Afirmativa IV incorreta: 'O direito constitui-se' é igualmente correto; não há atrator. Resta(m) apenas as afirmativas I e III.",
      fundamento: "Colocação pronominal.",
      macete: "Sem atrator, a escolha é livre; no início do período, ênclise.",
      erroComum: "Criar proibições onde a norma deixa escolha.",
      comoBancaPensa: "Mistura casos obrigatórios e facultativos.",
    },
  },

  {
    ...BASE134,
    cargo: ["Escrivão", "Agente", "Especialista em Saúde — Fisioterapia"],
    id: "PT-451", disciplina: "Língua Portuguesa", assunto: "Concordância verbal",
    subassunto: "Derivado de PT-283, PT-288, PT-284, PT-434 — concordância com porcentagem, sujeito composto e 'haver'",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "No que diz respeito à concordância verbal, considere as seguintes afirmações:\n\nI. Estariam garantidas a correção gramatical e a coerência do trecho caso o segmento \"mais de 68% da população mundial deverão viver em ambiente urbano\" fosse reescrito como mais de 68% da população mundial deverá viver em ambiente urbano.\nII. Na oração \"A facilidade de acesso e a promessa de ganhos rápidos atraem um número crescente de brasileiros\", não haveria prejuízo da correção gramatical se o verbo fosse flexionado na terceira pessoa do singular, pois, nesse caso, como o sujeito é composto, a concordância pode ser feita com o núcleo do sujeito mais próximo, de acordo com a norma padrão.\nIII. No trecho \"o uso e a aplicação da IA nunca foram tão grandes\", a flexão do verbo e do adjetivo no singular — nunca foi tão grande — prejudicaria a correção gramatical do trecho.\nIV. A correção gramatical do trecho seria mantida caso se substituísse “existam” por hajam.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "troca-sujeito", palavraChave: "núcleo do sujeito mais próximo",
    cognitivo: {
      motivo: "Revisar concordância com porcentagem, sujeito composto e 'haver'.",
      palavraCritica: "hajam",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I correta: porcentagem com especificador admite concordância com qualquer dos dois. Afirmativa II incorreta: sujeito composto ANTES do verbo exige plural. Afirmativa III correta: 'o uso e a aplicação da IA', anteposto, exige plural. Afirmativa IV incorreta: 'haver' no sentido de existir é impessoal: 'haja', nunca 'hajam'. Resta(m) apenas as afirmativas I e III.",
      fundamento: "Concordância verbal.",
      macete: "Composto anteposto → plural; posposto → plural ou o mais próximo.",
      erroComum: "Aplicar a concordância atrativa a qualquer sujeito composto.",
      comoBancaPensa: "Usa regras reais fora de seu caso.",
    },
  },

  {
    ...BASE134,
    cargo: ["Escrivão", "Agente", "Especialista em Saúde — Fisioterapia"],
    id: "PT-452", disciplina: "Língua Portuguesa", assunto: "Conjunções e conectivos",
    subassunto: "Derivado de PT-290, PT-390, PT-394, PT-291 — conectivos concessivos e adversativos",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca do valor e da substituição de conectivos, considere as seguintes afirmações:\n\nI. No trecho \"esse agrupamento reflete decisões políticas, ainda que elas não sejam explícitas\", a substituição de \"ainda que\" por conquanto manteria as relações sintáticas e semânticas estabelecidas originalmente.\nII. A substituição de “mas” por embora manteria a coerência do trecho e seus sentidos, uma vez que ambas as conjunções são adversativas.\nIII. A expressão “Ainda que” introduz oração que expressa circunstância de tempo.\nIV. A oração \"embora mais pesquisas sejam ainda necessárias para elucidar alguns mecanismos da relação entre componentes da dieta e desenvolvimento dessas doenças\" expressa circunstância de concessão.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "B", pegadinha: "troca-conceito", palavraChave: "concessão",
    cognitivo: {
      motivo: "Revisar conectivos concessivos e adversativos.",
      palavraCritica: "adversativas",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I correta: 'ainda que' e 'conquanto' são concessivas e pedem subjuntivo. Afirmativa II incorreta: 'embora' é concessiva (subordinativa), não adversativa. Afirmativa III incorreta: 'ainda que' exprime concessão, não tempo. Afirmativa IV correta: 'embora' introduz oração concessiva. Resta(m) apenas as afirmativas I e IV.",
      fundamento: "Conjunções subordinativas e coordenativas.",
      macete: "Embora, conquanto, ainda que = concessão; mas, porém = adversidade.",
      erroComum: "Igualar concessão e adversidade.",
      comoBancaPensa: "Troca a classe do conectivo.",
    },
  },

  {
    ...BASE134,
    cargo: ["Escrivão", "Agente", "Especialista em Saúde — Fisioterapia"],
    id: "PT-453", disciplina: "Língua Portuguesa", assunto: "Classes de palavras",
    subassunto: "Derivado de PT-328, PT-327, PT-369, PT-325 — classe de palavras no contexto",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Com relação às classes de palavras, considere as seguintes afirmações:\n\nI. Em “A eclosão da mal chamada Inconfidência Mineira deveria ter lugar em 1789”, o vocábulo “mal” está empregado como adjetivo.\nII. No trecho “aspectos substantivos da legitimidade”, o termo “substantivos” está empregado como adjetivo e tem o mesmo sentido de essenciais ou concretos.\nIII. O deslocamento do vocábulo “certa” para logo após “ousadia” alteraria o sentido do termo deslocado, bem como a classe de palavras a que ele pertence.\nIV. No trecho “Mantenha a caixa-d’água bem fechada”, o vocábulo “bem” classifica-se como advérbio e sua função é intensificar o sentido da forma verbal “Mantenha”.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "adjetivo",
    cognitivo: {
      motivo: "Revisar classe de palavras no contexto.",
      palavraCritica: "advérbio",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I incorreta: 'mal' modifica o particípio 'chamada': é advérbio. Afirmativa II correta: 'substantivos', em 'aspectos substantivos', é adjetivo (essenciais). Afirmativa III correta: 'certa' antes do nome é pronome indefinido; depois, adjetivo. Afirmativa IV incorreta: 'bem' intensifica o adjetivo 'fechada', não o verbo. Resta(m) apenas as afirmativas II e III.",
      fundamento: "Classes de palavras.",
      macete: "Mal × mau; a posição pode mudar a classe.",
      erroComum: "Classificar pela classe de dicionário.",
      comoBancaPensa: "Exige classe no contexto.",
    },
  },

  {
    ...BASE134,
    cargo: ["Escrivão", "Agente", "Especialista em Saúde — Fisioterapia"],
    id: "PT-454", disciplina: "Língua Portuguesa", assunto: "Regência verbal",
    subassunto: "Derivado de PT-312, PT-397, PT-396, PT-395 — regência verbal",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Quanto à regência dos verbos, segundo a norma-padrão, considere as seguintes afirmações:\n\nI. No trecho \"O crescimento das casas de apostas online no Brasil impacta diretamente o consumo e a renda das famílias brasileiras\", o segmento \"o consumo e a renda\" poderia ser corretamente reescrito como no consumo e na renda, pois, de acordo com a norma padrão, a regência do verbo impactar é variável.\nII. A correção gramatical e o sentido do trecho seriam mantidos caso se substituísse a expressão “em busca do desenvolvimento” por visando ao desenvolvimento.\nIII. O trecho “obedecer a três condições” poderia ser reescrito, mantendo-se a coerência do trecho e sua correção gramatical, da seguinte forma: obedecer às três condições a seguir.\nIV. A inclusão de \"aos\" após a forma verbal ‘orientaria’ preservaria a correção gramatical do trecho bem como seus sentidos originais.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "D", pegadinha: "exigencia-inexistente", palavraChave: "regência",
    cognitivo: {
      motivo: "Revisar regência verbal.",
      palavraCritica: "visando ao",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I incorreta: 'impactar' é transitivo direto na norma-padrão. Afirmativa II correta: 'visar' (objetivar) rege 'a': 'visando ao desenvolvimento'. Afirmativa III correta: 'obedecer a' + termo determinado: 'às três condições a seguir'. Afirmativa IV incorreta: 'orientar' (guiar) é transitivo direto: 'orientaria alunos'. Resta(m) apenas as afirmativas II e III.",
      fundamento: "Regência verbal.",
      macete: "Visar (objetivar) e obedecer pedem 'a'; impactar e orientar, não.",
      erroComum: "Seguir o uso corrente da mídia.",
      comoBancaPensa: "Opõe regência culta e uso.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE134);
