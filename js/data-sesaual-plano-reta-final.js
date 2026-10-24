/* =====================================================================
   QUESTLAB — PLANO DE RETA FINAL · SESAU-AL Fisioterapia (prova 1º/11/2026)

   Montado em 24/10/2026 a partir de três fontes:
   1. a Aula 00 do curso pós-edital (cronograma de revisão final 24–30/10,
      raio-X das provas CEBRASPE de Fisioterapia: marcha, órteses, ética,
      DPOC, eletroterapia/TENS, postura; e as prioridades da retificação:
      oncologia, gestação, uroginecologia, mastologia);
   2. o edital retificado (Edital nº 2 — ver EDITAIS.SESAUAL_FISIO);
   3. o perfil declarado pelo usuário: mais de 6 h/dia; pontos fracos em
      recursos terapêuticos e avaliação/marcha/ética; nos básicos, maior
      preocupação com Português, SUS e Legislação Estadual.

   Renderizado em renderPlanoEstudo() (js/app.js) quando a trilha ativa é
   SESAUAL_FISIO. Cada bloco tem `id` estável: o check do usuário fica em
   APP_STATE.retaFinal[id]. `disc`/`assuntos` abrem o banco já filtrado.
   ===================================================================== */

const PLANO_RETA_FINAL_SESAU = {
  trilha: "SESAUAL_FISIO",
  titulo: "Reta final SESAU-AL — 8 dias até a prova",
  dataProva: "2026-11-01",
  dias: [
    { data: "2026-10-24", titulo: "Sáb 24/10 · Diagnóstico + eletroterapia", blocos: [
      { id: "d1a", h: 3, txt: "Simulado de Fisioterapia (70 itens C/E, cronometrado: ~2h20). Não consulte nada; marque ao lado o grau de certeza (alto/médio/chute).", acao: "simulado" },
      { id: "d1b", h: 1, txt: "Correção do simulado: separe os erros por tema e copie o 'erro comum' de cada um para o caderno de erros." },
      { id: "d1c", h: 2, txt: "Eletroterapia (ponto fraco): TENS convencional × acupuntura × breve-intenso, teoria das comportas × opioides endógenos, FES/EENM (largura de pulso, frequência, ciclo on/off), corrente russa e interferencial, contraindicações. 40 questões.", disc: "Fisioterapia", assuntos: ["Recursos terapêuticos"] },
      { id: "d1d", h: 1, txt: "SUS — Lei 8.080/1990: arts. 2º a 7º (princípios e diretrizes) e campo de atuação. 25 questões.", disc: "Legislação Aplicada ao SUS", assuntos: ["Lei 8.080/1990"] },
    ]},
    { data: "2026-10-25", titulo: "Dom 25/10 · Recursos terapêuticos II + Português", blocos: [
      { id: "d2a", h: 3, txt: "Termo (superficial × profunda: ondas curtas, micro-ondas, ultrassom), crio, fototerapia (laser/LED — fotobiomodulação), hidroterapia (princípios físicos da imersão), terapia manual e recursos miofasciais, DLM, pressoterapia, bandagem, biofeedback. Foque em INDICAÇÃO × CONTRAINDICAÇÃO. 50 questões.", disc: "Fisioterapia", assuntos: ["Recursos terapêuticos", "Fisioterapia aquática", "Princípios físicos da imersão"] },
      { id: "d2b", h: 2, txt: "Português: reescrita e manutenção de sentido, pontuação (vírgula de intercalação e de oração adjetiva) e coesão referencial. 40 itens C/E.", disc: "Língua Portuguesa" },
      { id: "d2c", h: 1.5, txt: "Legislação Estadual — Lei 5.247/1991: licenças (prazos, remuneração) e afastamentos. 25 questões.", disc: "Legislação Estadual (AL)", assuntos: ["Lei 5.247/1991 — licenças", "Lei 5.247/1991 — ausências legais"] },
      { id: "d2d", h: 0.5, txt: "Revisão de 24 h do dia 24 (caderno de erros, só leitura ativa)." },
    ]},
    { data: "2026-10-26", titulo: "Seg 26/10 · Avaliação, postura e marcha", blocos: [
      { id: "d3a", h: 3, txt: "Avaliação (ponto fraco): funcional global, goniometria, teste muscular manual (Oxford/Kendall), Ashworth modificada, dor (EVA, numérica, McGill), tegumentar (cicatriz, aderência, edema/perimetria), pulmonar (padrões, expansibilidade, PImáx/PEmáx, espirometria). 50 questões.", disc: "Fisioterapia", assuntos: ["Avaliação fisioterapêutica", "Provas de função muscular", "Avaliação cardiorrespiratória"] },
      { id: "d3b", h: 1.5, txt: "Marcha e postura: ciclo (60/40), subfases de Perry, determinantes, marchas patológicas (Trendelenburg, escarvante, ceifante), parâmetros espaço-temporais; postura e equilíbrio muscular. 30 questões.", disc: "Fisioterapia", assuntos: ["Análise da marcha", "Cinesiologia e biomecânica"] },
      { id: "d3c", h: 1.5, txt: "SUS — Lei 8.142/1990 (Conferência × Conselho, paridade) e Decreto 7.508/2011 (Região de Saúde, portas de entrada, RENASES/RENAME, COAP). 30 questões.", disc: "Legislação Aplicada ao SUS", assuntos: ["Lei 8.142/1990 e controle social", "Decreto 7.508/2011"] },
      { id: "d3d", h: 1, txt: "Português: concordância e regência em itens de reescrita. 25 itens.", disc: "Língua Portuguesa" },
    ]},
    { data: "2026-10-27", titulo: "Ter 27/10 · Ética profissional + uroginecologia", blocos: [
      { id: "d4a", h: 2, txt: "Ética e legislação profissional (ponto fraco): Código de Ética e Deontologia da Fisioterapia (Res. COFFITO 424/2013) — responsabilidades fundamentais, deveres, proibições, sigilo, honorários, publicidade, infrações e penas; Decreto-Lei 938/1969 e Lei 6.316/1975. 40 questões.", disc: "Fisioterapia", assuntos: ["Ética profissional", "Marco regulatório da especialidade"] },
      { id: "d4b", h: 2.5, txt: "Assoalho pélvico e uroginecologia: anatomia, PERFECT, Oxford, IUE × urgência × mista, bexiga hiperativa, prolapsos (POP-Q), diário miccional, TMAP, cones, eletroestimulação (tibial × intravaginal), biofeedback. 45 questões.", disc: "Fisioterapia", assuntos: ["Avaliação do assoalho pélvico", "Incontinência urinária", "Anatomia funcional do assoalho pélvico", "Prolapso de órgãos pélvicos"] },
      { id: "d4c", h: 1.5, txt: "Legislação Estadual — Lei 5.247/1991: regime disciplinar (penalidades, competência, prescrição) e processo disciplinar. 25 questões.", disc: "Legislação Estadual (AL)", assuntos: ["Lei 5.247/1991 — regime disciplinar"] },
      { id: "d4d", h: 1, txt: "Discursiva — treino 1: tema 'Envelhecimento populacional e a demanda por reabilitação no SUS'. 30 linhas, 50 minutos, estrutura abaixo." },
    ]},
    { data: "2026-10-28", titulo: "Qua 28/10 · Obstetrícia, climatério e coloproctologia", blocos: [
      { id: "d5a", h: 3, txt: "Gestação (adaptações, diástase, dor lombopélvica, contraindicações absolutas × relativas ao exercício, sinais de alerta), parto (posições, respiração, analgesia não farmacológica), puerpério, ciclo menstrual (dismenorreia), climatério. 50 questões.", disc: "Fisioterapia", assuntos: ["Fisioterapia na gestação", "Fisioterapia no parto", "Puerpério", "Climatério e menopausa", "Disfunções sexuais femininas"] },
      { id: "d5b", h: 1.5, txt: "Coloproctologia: continência fecal, constipação, dissinergia, manometria, biofeedback anorretal, massagem abdominal. 25 questões.", disc: "Fisioterapia", assuntos: ["Coloproctologia"] },
      { id: "d5c", h: 1.5, txt: "SUS — CF arts. 194 a 200 e LC 141/2012 (mínimos de aplicação). 25 questões.", disc: "Legislação Aplicada ao SUS", assuntos: ["Seguridade social e saúde na CF/88", "LC 141/2012 — financiamento"] },
      { id: "d5d", h: 1, txt: "Português: compreensão e inferência em texto longo (o CEBRASPE pendura 5 a 8 itens em cada texto). 20 itens.", disc: "Língua Portuguesa" },
    ]},
    { data: "2026-10-29", titulo: "Qui 29/10 · Mastologia/oncologia + simulado completo", blocos: [
      { id: "d6a", h: 2.5, txt: "Mastologia e oncologia: tipos de cirurgia (mastectomias, quadrantectomia, linfonodo sentinela × esvaziamento axilar), síndrome da rede axilar, linfedema (perimetria, volumetria, TFC: DLM + enfaixamento + exercício + cuidados com a pele), efeitos de quimio/radio/hormonioterapia, fadiga, metástase óssea e exercício. 45 questões.", disc: "Fisioterapia", assuntos: ["Mastologia e oncologia"] },
      { id: "d6b", h: 4.5, txt: "SIMULADO COMPLETO 120 itens, no horário real da prova e com o tempo da prova (4h30, incluindo a discursiva). Treine a estratégia de branco descrita abaixo.", acao: "simulado" },
    ]},
    { data: "2026-10-30", titulo: "Sex 30/10 · Correção e caderno de erros", blocos: [
      { id: "d7a", h: 2, txt: "Correção do simulado: para cada erro, escreva em 1 linha QUAL palavra do item tornava-o certo/errado. Revise os itens 'chutados' que você acertou." },
      { id: "d7b", h: 2, txt: "Revisão dirigida dos 3 temas com mais erros (use 'Revisar meus erros' do app)." },
      { id: "d7c", h: 1.5, txt: "Ética no Serviço Público (Código de Ética AL, Comissão de Ética) + Leg. Estadual: leitura rápida de prazos e penalidades. 30 questões.", disc: "Ética no Serviço Público" },
      { id: "d7d", h: 1, txt: "Discursiva — treino final: tema 'Câncer de mama: rastreamento, diagnóstico precoce e reabilitação no SUS'. Corrija com a estrutura abaixo." },
    ]},
    { data: "2026-10-31", titulo: "Sáb 31/10 · Revisão leve", blocos: [
      { id: "d8a", h: 2, txt: "Leitura leve: contraindicações (eletro, termo, hidro, exercício na gestação), escalas e classificações (Oxford, PERFECT, Ashworth, Borg, POP-Q, TNM), prazos da Lei 5.247 e da 8.142." },
      { id: "d8b", h: 1, txt: "Só 20 questões, das mais fáceis, para fechar com confiança. Nada de conteúdo novo." },
      { id: "d8c", h: 0, txt: "Separe documento com foto e caneta esferográfica de tinta preta (fabricada em material transparente), confira o local de prova e durma cedo." },
    ]},
  ],
  estrategiaProva: [
    "Cada item errado anula um certo; o em branco vale zero. Só marque quando tiver motivo concreto (você consegue dizer QUAL palavra torna o item certo/errado).",
    "Ordem sugerida: P2 (Fisioterapia, 70 itens) primeiro, enquanto a cabeça está fresca; depois os básicos; discursiva no último terço, mas com tempo reservado: no mínimo 60 minutos para ela.",
    "Item ERRADO no CEBRASPE costuma ter UMA palavra trocada: o sujeito (quem faz), o número (prazo, frequência, dose), o quantificador (sempre/apenas) ou a relação (causa × consequência). Procure a palavra antes de julgar o todo.",
    "Em contraindicação, a banca alterna 'absoluta' e 'relativa' e troca o recurso (ex.: o que vale para termoterapia profunda atribuído à superficial). Desconfie de item que proíbe tudo ou libera tudo.",
    "Questões de ética profissional: a pegadinha clássica é trocar 'dever' por 'proibição' ou atribuir ao fisioterapeuta uma permissão que é do paciente (ex.: acesso ao prontuário).",
    "Na Lei 5.247 e no SUS, a troca é numérica (prazos, composição de conselhos, periodicidade das conferências). Na dúvida entre dois números, deixe em branco.",
  ],
  discursiva: {
    estrutura: [
      "Introdução (4–5 linhas): contextualize com um dado ou fato e apresente a tese em uma frase.",
      "Desenvolvimento 1 (6–8 linhas): primeiro aspecto pedido no comando — causas/contexto.",
      "Desenvolvimento 2 (6–8 linhas): segundo aspecto — consequências para a saúde e para o SUS.",
      "Desenvolvimento 3 (6–8 linhas): terceiro aspecto — papel do poder público e, quando couber, da equipe multiprofissional/fisioterapeuta.",
      "Conclusão (3–4 linhas): retome a tese e feche com proposta concreta (quem, o quê, como).",
      "O CEBRASPE corrige primeiro a ABORDAGEM de cada aspecto do comando: responda a todos, na ordem pedida, com um parágrafo para cada.",
    ],
    temas: [
      "Envelhecimento populacional e a demanda por reabilitação e cuidados de longa duração no SUS",
      "Câncer de mama e de colo do útero: rastreamento, diagnóstico precoce e acesso ao tratamento",
      "Mortalidade materna e qualidade do pré-natal e do puerpério",
      "Violência contra a mulher como problema de saúde pública",
      "Mudanças climáticas, ondas de calor e arboviroses (dengue, chikungunya) no Nordeste",
      "Saúde mental: adoecimento relacionado ao trabalho e acesso à rede de atenção psicossocial",
      "Saúde digital: telessaúde e inteligência artificial no SUS — ganhos e riscos",
      "Doenças crônicas não transmissíveis, sedentarismo e promoção da atividade física",
      "Cobertura vacinal e hesitação vacinal",
      "Pessoa com deficiência e acessibilidade aos serviços de saúde e reabilitação",
    ],
  },
};
