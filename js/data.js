/* =====================================================================
   QUESTLAB — Camada de Dados
   Banco inicial de questões INÉDITAS geradas em estilo CEBRASPE
   (Módulo 11), com metadados completos (Módulo 1), engenharia
   cognitiva (Módulo 3) e comentários fundamentados (Módulo 6).
   As estatísticas de frequência e probabilidade são ESTIMATIVAS
   baseadas no padrão histórico da banca — não garantias de prova.
   ===================================================================== */

const CONCURSOS = [
  { id: "PCAL",  nome: "Polícia Civil de Alagoas", prioridade: 1 },
  { id: "PF",    nome: "Polícia Federal", prioridade: 2 },
  { id: "PRF",   nome: "Polícia Rodoviária Federal", prioridade: 3 },
  { id: "PCDF",  nome: "Polícia Civil do Distrito Federal", prioridade: 4 },
  { id: "PCE",   nome: "Polícias Civis Estaduais (demais)", prioridade: 5 },
  { id: "SESAU", nome: "SESAU/AL — Especialista em Saúde", prioridade: 6 },
];

const CARGOS = ["Escrivão", "Agente", "Delegado", "Perito Criminal", "Papiloscopista"];

/* ---------------- DNA DA BANCA (Módulo 4) ----------------
   incidencia = índice estimado (%) de aparição do padrão nas
   provas C/E de carreiras policiais analisadas. */
/* ---------------- DNA da banca ----------------
   ATENÇÃO ao que `incidencia` é e ao que não é.

   É uma ESTIMATIVA EDITORIAL da frequência com que a CEBRASPE recorre a
   cada padrão — leitura qualitativa de provas anteriores, não contagem
   item a item. Não foi medida, e por isso não deve ser exibida como se
   fosse estatística apurada.

   Ela também NÃO se confunde com duas outras coisas que o app calcula e
   que são, essas sim, medidas:
     • a composição do próprio banco (quantos itens de cada padrão existem
       aqui, e para que lado eles caem) — ver `composicaoPadroes()`;
     • o desempenho do candidato por padrão — ver `statsPorPegadinha()`.

   A distinção importa porque a composição do banco é enviesada por
   construção: `literalidade` responde por 43% dos itens e cai em CERTO em
   cerca de 90% deles. Quem treinar aqui e concluir "citação fiel da lei
   costuma ser CERTO" terá aprendido o banco, não a banca. O app precisa
   dizer isso em vez de esconder — daí a tela expor as três grandezas
   separadas, cada uma com sua origem. */
const DNA_BANCA = [
  { slug: "termo-absoluto", nome: "Termos absolutos", incidencia: 82,
    desc: "Uso de 'sempre', 'nunca', 'somente', 'qualquer', 'todos'. Termos absolutos frequentemente tornam a assertiva ERRADA — mas não automaticamente: normas literais podem ser absolutas (ex.: vedação à tortura).",
    gatilho: "Ao ver termo absoluto, procure a exceção. Se existir exceção conhecida, a assertiva tende a ser E." },
  { slug: "restricao-indevida", nome: "Restrição indevida", incidencia: 74,
    desc: "A banca pega uma regra ampla e a restringe ('somente durante o dia', 'apenas mediante mandado'). O conteúdo parece correto, mas o recorte torna a frase falsa.",
    gatilho: "Pergunte: a lei realmente limita a isso, ou há outras hipóteses?" },
  { slug: "troca-conceito", nome: "Troca/inversão de conceitos", incidencia: 71,
    desc: "Define corretamente um instituto, mas com o NOME de outro (concussão × corrupção passiva; excesso × desvio de poder; anulação × revogação).",
    gatilho: "Confira se o rótulo bate com a definição, não apenas se a definição 'soa certa'." },
  { slug: "exigencia-inexistente", nome: "Exigência inexistente", incidencia: 63,
    desc: "Acrescenta requisito que a norma não prevê ('desde que haja coabitação', 'exige-se o efetivo recebimento').",
    gatilho: "Desconfie de 'desde que', 'condicionado a', 'exige-se'." },
  { slug: "literalidade", nome: "Literalidade legal", incidencia: 61,
    desc: "Reprodução quase literal do texto legal com UMA palavra trocada (ou nenhuma — e aí é C). Muito comum em CF art. 5º e art. 144.",
    gatilho: "Compare mentalmente com o texto da lei palavra por palavra nos pontos críticos: prazos, números, sujeitos, verbos." },
  { slug: "verdade-mais-falso", nome: "Verdade + falso emendado", incidencia: 58,
    desc: "Inicia com afirmação verdadeira e emenda uma conclusão falsa. O candidato valida o início e 'carrega' a confiança para o fim.",
    gatilho: "Julgue cada oração separadamente. Uma parte falsa torna TUDO errado." },
  { slug: "troca-numerica", nome: "Troca numérica", incidencia: 52,
    desc: "Altera prazos, quantidades e frações ('3 ou mais pessoas' em vez de 4, no conceito de organização criminosa).",
    gatilho: "Números em assertivas C/E são sempre ponto de verificação obrigatório." },
  { slug: "juris-mais-lei", nome: "Jurisprudência misturada à lei", incidencia: 49,
    desc: "Combina texto legal com entendimento do STF/STJ (súmulas, teses de repercussão geral). A assertiva só fecha para quem conhece os dois.",
    gatilho: "Temas clássicos: busca domiciliar, insignificância, Maria da Penha, armas (perigo abstrato)." },
  { slug: "generalizacao", nome: "Generalização indevida", incidencia: 47,
    desc: "Estende regra de um caso para todos ('todos os atos de polícia são discricionários').",
    gatilho: "Regra + 'todos/qualquer' = procure o contraexemplo." },
  { slug: "troca-sujeito", nome: "Troca de sujeitos/atribuições", incidencia: 41,
    desc: "Atribui competência de um órgão/agente a outro (delegado arquiva IP; PF × PRF; MP × juiz).",
    gatilho: "Pergunte: QUEM pode praticar esse ato segundo a norma?" },
  { slug: "negacao-dupla", nome: "Negação dupla / embaralhamento", incidencia: 38,
    desc: "Construções como 'não é incorreto afirmar que…', 'é inegável que não se pode negar…' que invertem o sentido e confundem a leitura. Duas negativas se anulam e viram uma afirmação.",
    gatilho: "Reescreva a frase na forma afirmativa antes de julgar. Cada 'não' inverte o sentido — conte-os." },
  { slug: "juris-inventada", nome: "Jurisprudência/súmula inventada", incidencia: 35,
    desc: "Cita súmula, tese ou informativo com NÚMERO fictício ou enunciado inexistente ('Súmula 999 do STF'), apostando que o candidato aceita a autoridade sem checar.",
    gatilho: "Número de súmula que 'não lembra' é sinal de alerta. Desconfie do conteúdo, não da aparência de autoridade." },
];

/* ---------------- PALAVRAS PERIGOSAS (Módulo 5) ----------------
   vies: "E" = quando presente, a assertiva tende a ser Errada;
   "C" = tende a ser Certa; "N" = neutra, exige atenção. */
const PALAVRAS_PERIGOSAS = [
  { termo: "sempre", vies: "E", explica: "Absolutiza a regra. O Direito quase sempre tem exceção — mas cuidado com garantias absolutas (ex.: vedação à tortura, art. 5º, III, CF)." },
  { termo: "nunca", vies: "E", explica: "Espelho de 'sempre'. Verifique se existe ao menos uma hipótese legal que contrarie a negativa total." },
  { termo: "jamais", vies: "E", explica: "Negativa absoluta. Tende a E, salvo em vedações constitucionais literais." },
  { termo: "somente", vies: "E", explica: "Restringe. A pergunta correta é: 'só isso mesmo, ou a lei admite outras hipóteses?'" },
  { termo: "apenas", vies: "E", explica: "Mesma lógica de 'somente'. É o marcador clássico da restrição indevida." },
  { termo: "exclusivamente", vies: "E", explica: "Restrição máxima. Quase sempre há concorrência de hipóteses ou de competências." },
  { termo: "todos", vies: "E", explica: "Generalização. Procure o contraexemplo (um único caso contrário derruba a assertiva)." },
  { termo: "qualquer", vies: "E", explica: "Generalização. 'Em qualquer hipótese/caso' costuma ignorar exceções legais." },
  { termo: "necessariamente", vies: "E", explica: "Transforma possibilidade em obrigatoriedade. Cheque se a consequência é automática mesmo." },
  { termo: "obrigatoriamente", vies: "E", explica: "Idem: a lei pode facultar em vez de obrigar. Compare 'deverá' × 'poderá' na norma." },
  { termo: "automaticamente", vies: "E", explica: "O Direito raramente opera efeitos automáticos; costuma exigir ato, decisão ou requerimento." },
  { termo: "imediatamente", vies: "N", explica: "Pode ser literal da lei (ex.: comunicação imediata da prisão ao juiz, art. 5º, LXII). Verifique a fonte." },
  { termo: "independentemente", vies: "N", explica: "Às vezes é a própria regra (Súmula 600 STJ: independe de coabitação). Exige conhecimento específico." },
  { termo: "desde que", vies: "N", explica: "Condicionante. Verifique se a condição existe na norma (se não existe: exigência inexistente → E)." },
  { termo: "salvo", vies: "N", explica: "Introduz exceção. A banca adora trocar o conteúdo da ressalva." },
  { termo: "em regra", vies: "C", explica: "Relativiza. Assertivas com 'em regra', 'em geral', 'pode' tendem a C, pois admitem exceções." },
  { termo: "poderá", vies: "C", explica: "Faculdade. Tende a C quando a norma é discricionária; vira E se a lei diz 'deverá'." },
  { termo: "deverá", vies: "N", explica: "Obrigação. Confira se a norma impõe ou apenas faculta." },
  { termo: "presume-se", vies: "N", explica: "Cheque se a presunção é absoluta (iuris et de iure) ou relativa (iuris tantum) — a banca troca as duas." },
  { termo: "prescinde", vies: "N", explica: "Pegadinha semântica: prescindir = DISPENSAR. Muitos leem como 'precisar'. Leia duas vezes." },
  { termo: "não", vies: "N", explica: "Negativas e duplas negativas invertem o julgamento. Reescreva mentalmente a frase na forma afirmativa." },
  { termo: "não é incorreto", vies: "N", explica: "Negação dupla: 'não é incorreto' = 'é correto'. Reescreva na forma afirmativa antes de julgar." },
  { termo: "não é errado", vies: "N", explica: "Negação dupla: 'não é errado' = 'é certo'. Cuidado com o embaralhamento proposital." },
  { termo: "inegável", vies: "N", explica: "Muitas vezes acompanha outra negativa ('é inegável que não…'), criando dupla negação. Conte os 'não'." },
  { termo: "não se pode negar", vies: "N", explica: "Negação dupla: equivale a uma afirmação. A banca usa para confundir a leitura rápida." },
];

/* ---------------- BANCO DE QUESTÕES (Módulos 1, 3, 5, 6, 11) ---------------- */
const QUESTOES = [
  /* ================= DIREITO PENAL ================= */
  {
    id: "DP-001", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública", subassunto: "Peculato",
    concurso: "PCAL", cargo: ["Escrivão","Agente"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "Servidor público que, valendo-se da facilidade proporcionada pela sua qualidade de funcionário, subtrai computador pertencente à repartição em que trabalha, embora não tenha a posse do bem, pratica o crime de peculato.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "embora não tenha a posse",
    cognitivo: {
      motivo: "Testar se o candidato conhece o peculato-furto (art. 312, § 1º, CP), que dispensa a posse prévia do bem.",
      palavraCritica: "posse",
    },
    comentario: {
      resolucao: "CERTO. O art. 312, § 1º, do CP tipifica o peculato-furto: aplica-se a mesma pena 'embora não tendo a posse do dinheiro, valor ou bem, o subtrai, ou concorre para que seja subtraído, em proveito próprio ou alheio, valendo-se de facilidade que lhe proporciona a qualidade de funcionário'.",
      fundamento: "CP, art. 312, caput e § 1º.",
      macete: "PECULATO-FURTO = 'furtou usando o crachá'. A facilidade do cargo substitui a posse.",
      erroComum: "Confundir com furto qualificado por abuso de confiança (art. 155, § 4º, II) — que é crime de particular.",
      comoBancaPensa: "A banca reproduz o § 1º quase literalmente e aposta que o candidato só estudou o caput."
    }
  },
  {
    id: "DP-002", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública", subassunto: "Corrupção passiva",
    concurso: "PF", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.85,
    enunciado: "O crime de corrupção passiva somente se consuma com o efetivo recebimento, pelo funcionário público, da vantagem indevida solicitada.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "somente",
    cognitivo: {
      motivo: "Aferir se o candidato sabe que a corrupção passiva é crime formal.",
      palavraCritica: "somente / efetivo recebimento",
    },
    comentario: {
      resolucao: "ERRADO. A corrupção passiva (art. 317, CP) é crime formal: consuma-se com a simples solicitação ou aceitação da promessa de vantagem indevida, independentemente do recebimento. O recebimento posterior é exaurimento.",
      fundamento: "CP, art. 317; doutrina majoritária (crime formal).",
      macete: "Verbos 'solicitar' e 'aceitar promessa' já consumam. O mesmo raciocínio vale para a concussão ('exigir').",
      erroComum: "Transferir a lógica dos crimes materiais (que exigem resultado) para crimes formais.",
      comoBancaPensa: "Padrão clássico: pega o momento consumativo e o empurra para frente com 'somente com o efetivo...'."
    }
  },
  {
    id: "DP-003", disciplina: "Direito Penal", assunto: "Princípios penais", subassunto: "Insignificância",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "Segundo o STF, o princípio da insignificância aplica-se aos crimes praticados com violência ou grave ameaça à pessoa, desde que o valor do bem subtraído seja ínfimo.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "violência ou grave ameaça",
    cognitivo: {
      motivo: "Cobrar os vetores da insignificância fixados pelo STF (HC 84.412).",
      palavraCritica: "violência ou grave ameaça",
    },
    comentario: {
      resolucao: "ERRADO. O STF exige, cumulativamente: mínima ofensividade, ausência de periculosidade social, reduzida reprovabilidade e inexpressividade da lesão. Crimes com violência ou grave ameaça (ex.: roubo) não admitem o princípio, ainda que o bem seja de valor ínfimo.",
      fundamento: "STF, HC 84.412/SP; jurisprudência consolidada STF/STJ sobre roubo.",
      jurisprudencia: "STJ: 'É inaplicável o princípio da insignificância ao crime de roubo' (entendimento pacífico).",
      macete: "Os 4 vetores: MARI — Mínima ofensividade, Ausência de periculosidade, Reduzida reprovabilidade, Inexpressividade da lesão.",
      erroComum: "Aceitar a assertiva pela parte verdadeira (valor ínfimo importa) sem julgar a parte falsa.",
      comoBancaPensa: "Verdade + falso emendado: mistura requisito real (valor) com hipótese vedada (violência)."
    }
  },
  {
    id: "DP-004", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública", subassunto: "Concussão",
    concurso: "PCDF", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCDF)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.75,
    enunciado: "Policial civil que exige de investigado vantagem indevida para deixar de indiciá-lo pratica o crime de concussão, que se consuma no momento da exigência, ainda que a vantagem jamais venha a ser paga.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "ainda que jamais",
    cognitivo: {
      motivo: "Confirmar o verbo nuclear da concussão (exigir) e sua natureza formal.",
      palavraCritica: "exige",
    },
    comentario: {
      resolucao: "CERTO. Concussão (art. 316, CP): 'exigir, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida'. Crime formal: consuma-se com a exigência.",
      fundamento: "CP, art. 316.",
      macete: "Concussão vem de 'concutere' (sacudir): o agente 'sacode' a vítima com temor do cargo. Exigiu → consumou.",
      erroComum: "Confundir com corrupção passiva (solicitar) ou com extorsão (particular).",
      comoBancaPensa: "Usa termo absoluto VERDADEIRO para punir quem decora atalhos sem conteúdo — a banca conhece as heurísticas dos candidatos."
    }
  },
  {
    id: "DP-005", disciplina: "Direito Penal", assunto: "Teoria do crime", subassunto: "Erro de tipo",
    concurso: "PCAL", cargo: ["Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.7,
    enunciado: "O erro de tipo essencial inevitável exclui o dolo e a culpa, tornando o fato atípico; se evitável, exclui o dolo, mas permite a punição por crime culposo, se previsto em lei.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "se previsto em lei",
    cognitivo: {
      motivo: "Cobrar a estrutura do art. 20 do CP com precisão terminológica.",
      palavraCritica: "inevitável / evitável",
    },
    comentario: {
      resolucao: "CERTO. Art. 20, CP: o erro sobre elemento constitutivo do tipo exclui o dolo, mas permite a punição por crime culposo, se previsto em lei. Sendo inevitável (escusável), exclui dolo e culpa — fato atípico.",
      fundamento: "CP, art. 20, caput.",
      macete: "TIPO = dolo. PROIBIÇÃO = potencial consciência da ilicitude (art. 21).",
      erroComum: "Trocar as consequências do erro de tipo pelas do erro de proibição (isenção/redução de pena).",
      comoBancaPensa: "Cerca de metade dos itens C/E é CERTA. Treine para reconhecer a literalidade correta sem inventar pegadinha."
    }
  },
  {
    id: "DP-006", disciplina: "Direito Penal", assunto: "Teoria do crime", subassunto: "Tentativa",
    concurso: "PRF", cargo: ["Agente"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PRF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.65,
    enunciado: "Admite-se, em regra, a tentativa nos crimes culposos, uma vez que neles o resultado naturalístico não é desejado pelo agente.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "em regra",
    cognitivo: {
      motivo: "Testar a incompatibilidade lógica entre tentativa e culpa.",
      palavraCritica: "tentativa + culposos",
    },
    comentario: {
      resolucao: "ERRADO. Em regra, crimes culposos não admitem tentativa, justamente porque a tentativa pressupõe dolo (vontade dirigida ao resultado não alcançado por circunstâncias alheias — art. 14, II, CP). A doutrina só excepciona a culpa imprópria (art. 20, § 1º, 2ª parte).",
      fundamento: "CP, art. 14, II; doutrina (culpa imprópria como exceção).",
      macete: "Tentativa = dolo frustrado. Sem dolo, sem tentativa.",
      erroComum: "Ignorar que a exceção (culpa imprópria) não transforma a exceção em regra.",
      comoBancaPensa: "Usa fundamento verdadeiro para sustentar conclusão falsa — julgue a CONCLUSÃO, não a beleza do argumento."
    }
  },
  {
    id: "DP-007", disciplina: "Direito Penal", assunto: "Ilicitude", subassunto: "Legítima defesa",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.7,
    enunciado: "Age em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão futura, porém certa, a direito seu ou de outrem.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "futura",
    cognitivo: {
      motivo: "Literalidade do art. 25 do CP com uma palavra trocada.",
      palavraCritica: "futura",
    },
    comentario: {
      resolucao: "ERRADO. O art. 25 do CP exige agressão injusta ATUAL OU IMINENTE. Agressão futura, ainda que certa, não autoriza legítima defesa — o ordenamento espera que o agente busque a proteção estatal.",
      fundamento: "CP, art. 25.",
      macete: "Atual = está ocorrendo. Iminente = está prestes a ocorrer. Futura/passada = fora da legítima defesa.",
      erroComum: "Achar que a 'certeza' da agressão futura supre a atualidade.",
      comoBancaPensa: "Pega o dispositivo mais decorado do CP e troca exatamente a palavra que ninguém relê."
    }
  },
  {
    id: "DP-008", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública", subassunto: "Peculato culposo",
    concurso: "PCAL", cargo: ["Escrivão","Agente"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "No peculato culposo, a reparação do dano, se anterior à sentença irrecorrível, extingue a punibilidade; se posterior, reduz de metade a pena imposta.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "anterior à sentença irrecorrível",
    cognitivo: {
      motivo: "Cobrar o § 3º do art. 312, um dos dispositivos mais recorrentes da banca.",
      palavraCritica: "culposo",
    },
    comentario: {
      resolucao: "CERTO. Art. 312, § 3º, CP: 'No caso do parágrafo anterior [peculato culposo], a reparação do dano, se precede à sentença irrecorrível, extingue a punibilidade; se lhe é posterior, reduz de metade a pena imposta.'",
      fundamento: "CP, art. 312, § 3º.",
      macete: "Só o CULPOSO perdoa. No doloso, devolver o dinheiro não apaga o crime.",
      erroComum: "Estender o benefício ao peculato doloso — pegadinha favorita da banca nesse tema.",
      comoBancaPensa: "Quando não troca a palavra, cobra o item literal para premiar quem realmente leu a lei seca."
    }
  },

  /* ================= PROCESSO PENAL ================= */
  {
    id: "PP-001", disciplina: "Processo Penal", assunto: "Prisão e medidas cautelares", subassunto: "Prisão em flagrante",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "A apresentação espontânea do autor do fato à autoridade policial impede a lavratura do auto de prisão em flagrante, mas não obsta a decretação da prisão preventiva, se presentes os seus pressupostos.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "apresentação espontânea",
    cognitivo: {
      motivo: "Cobrar entendimento consolidado sobre apresentação espontânea.",
      palavraCritica: "impede... mas não obsta",
    },
    comentario: {
      resolucao: "CERTO. Não há situação de flagrância (CPP, art. 302) quando o agente se apresenta espontaneamente. Contudo, nada impede a decretação de preventiva (CPP, arts. 312 e 313) ou outra cautelar, se presentes os requisitos.",
      fundamento: "CPP, arts. 302, 312 e 313; jurisprudência pacífica STF/STJ.",
      macete: "Se apresentou → sem flagrante. Requisitos presentes → preventiva pode.",
      erroComum: "Confundir impossibilidade de flagrante com imunidade a cautelares.",
      comoBancaPensa: "Item de dupla afirmação: a banca adora testar se você julga as DUAS partes."
    }
  },
  {
    id: "PP-002", disciplina: "Processo Penal", assunto: "Inquérito policial", subassunto: "Arquivamento",
    concurso: "PCAL", cargo: ["Escrivão","Agente"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.9,
    enunciado: "A autoridade policial poderá mandar arquivar autos de inquérito quando, ao final das investigações, concluir pela atipicidade da conduta investigada.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "autoridade policial + arquivar",
    cognitivo: {
      motivo: "Cobrar o art. 17 do CPP, recorrentíssimo em provas de carreiras policiais.",
      palavraCritica: "autoridade policial",
    },
    comentario: {
      resolucao: "ERRADO. CPP, art. 17: 'A autoridade policial não poderá mandar arquivar autos de inquérito.' O juízo de atipicidade cabe ao titular da ação penal; ao delegado cabe relatar o apurado.",
      fundamento: "CPP, art. 17.",
      macete: "Delegado instaura, preside, indicia e relata — nunca arquiva.",
      erroComum: "Transferir ao delegado o raciocínio (correto) de que fato atípico não justifica persecução.",
      comoBancaPensa: "Troca de sujeito clássica: a conduta descrita é razoável, mas o AGENTE é o errado."
    }
  },
  {
    id: "PP-003", disciplina: "Processo Penal", assunto: "Inquérito policial", subassunto: "Natureza e vícios",
    concurso: "PF", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.8,
    enunciado: "Eventuais irregularidades ocorridas no curso do inquérito policial contaminam, necessariamente, a ação penal dele decorrente, por força da teoria dos frutos da árvore envenenada.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "necessariamente",
    cognitivo: {
      motivo: "Diferenciar irregularidade procedimental de prova ilícita.",
      palavraCritica: "necessariamente",
    },
    comentario: {
      resolucao: "ERRADO. O inquérito é peça meramente informativa; suas irregularidades não contaminam automaticamente a ação penal. Situação diversa é a da prova ilícita, inadmissível no processo, que contamina as provas dela derivadas (CPP, art. 157, § 1º), salvo fonte independente.",
      fundamento: "CF, art. 5º, LVI; CPP, art. 157; jurisprudência pacífica.",
      macete: "Vício de FORMA no IP ≠ prova ILÍCITA. Só a segunda 'envenena'.",
      erroComum: "Generalizar a teoria dos frutos para qualquer irregularidade.",
      comoBancaPensa: "Termo absoluto ('necessariamente') + jargão jurídico = isca dupla."
    }
  },
  {
    id: "PP-004", disciplina: "Processo Penal", assunto: "Provas", subassunto: "Busca e apreensão domiciliar",
    concurso: "PF", cargo: ["Agente"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.9,
    enunciado: "Conforme o STF, o ingresso forçado em domicílio sem mandado judicial é lícito, mesmo durante a noite, quando amparado em fundadas razões, devidamente justificadas a posteriori, que indiquem a ocorrência de situação de flagrante delito no interior da residência.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "fundadas razões",
    cognitivo: {
      motivo: "Cobrar a tese do RE 603.616 (repercussão geral), presença constante em provas policiais.",
      palavraCritica: "flagrante delito",
    },
    comentario: {
      resolucao: "CERTO. Tese do STF (RE 603.616): a entrada forçada em domicílio sem mandado só é lícita quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem que dentro da casa ocorre situação de flagrante delito. Flagrante autoriza o ingresso a qualquer hora (CF, art. 5º, XI).",
      fundamento: "CF, art. 5º, XI; STF, RE 603.616 (repercussão geral).",
      jurisprudencia: "STJ (HC 598.051): a mera denúncia anônima, desacompanhada de outros elementos, não configura fundadas razões.",
      macete: "FUNDADAS RAZÕES = antes; JUSTIFICATIVA = depois (a posteriori).",
      erroComum: "Marcar E por causa do 'mesmo durante a noite'.",
      comoBancaPensa: "Cobra a tese literal e conta com o reflexo condicionado do 'durante o dia'."
    }
  },
  {
    id: "PP-005", disciplina: "Processo Penal", assunto: "Interrogatório", subassunto: "Direito ao silêncio",
    concurso: "PCDF", cargo: ["Escrivão","Agente"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCDF)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.7,
    enunciado: "O silêncio do acusado durante o interrogatório poderá ser interpretado em prejuízo de sua defesa, desde que corroborado por outros elementos de prova.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "desde que",
    cognitivo: {
      motivo: "Cobrar o art. 186, parágrafo único, do CPP.",
      palavraCritica: "em prejuízo",
    },
    comentario: {
      resolucao: "ERRADO. CPP, art. 186, parágrafo único: 'O silêncio, que não importará em confissão, não poderá ser interpretado em prejuízo da defesa.' Não há exceção condicionada.",
      fundamento: "CF, art. 5º, LXIII; CPP, art. 186, parágrafo único.",
      macete: "Silêncio é escudo, nunca espada contra o réu.",
      erroComum: "Aceitar condições inventadas ('desde que', 'salvo se') sobre garantias absolutas do processo.",
      comoBancaPensa: "Anexa condição plausível a uma vedação seca da lei — a condição é o veneno."
    }
  },
  {
    id: "PP-006", disciplina: "Processo Penal", assunto: "Provas", subassunto: "Cadeia de custódia",
    concurso: "PCAL", cargo: ["Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "A cadeia de custódia tem início com o reconhecimento do vestígio, assim entendido o ato de distinguir um elemento como de potencial interesse para a produção da prova pericial.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "reconhecimento",
    cognitivo: {
      motivo: "Cobrar o art. 158-A e as 10 etapas incluídas pelo Pacote Anticrime — tema quente para peritos e papiloscopistas.",
      palavraCritica: "início com o reconhecimento",
    },
    comentario: {
      resolucao: "CERTO. CPP, art. 158-A, § 1º: 'O início da cadeia de custódia dá-se com a preservação do local de crime ou com procedimentos policiais ou periciais nos quais seja detectada a existência de vestígio.' E o art. 158-B, I, define o reconhecimento como 'ato de distinguir um elemento como de potencial interesse para a produção da prova pericial'.",
      fundamento: "CPP, arts. 158-A e 158-B (Lei 13.964/2019).",
      macete: "1ª etapa = RECONHECER (enxergar que aquilo é vestígio). Só depois isola, fixa e coleta.",
      erroComum: "Inverter a ordem das etapas iniciais.",
      comoBancaPensa: "Tema novo em lei = cobrança literal por vários anos seguidos."
    }
  },

  /* ================= DIREITO CONSTITUCIONAL ================= */
  {
    id: "DC-001", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Inviolabilidade domiciliar",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "A casa é asilo inviolável do indivíduo, nela não podendo ninguém penetrar sem consentimento do morador, salvo, durante o dia, em caso de flagrante delito ou desastre, ou para prestar socorro, ou, a qualquer hora, por determinação judicial.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "durante o dia × a qualquer hora",
    cognitivo: {
      motivo: "Literalidade do art. 5º, XI, com os períodos INVERTIDOS.",
      palavraCritica: "a qualquer hora, por determinação judicial",
    },
    comentario: {
      resolucao: "ERRADO. CF, art. 5º, XI: sem consentimento só se entra 'em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial'. A assertiva inverteu os horários. Obs.: a Lei 13.869/2019 (art. 22, § 1º, III) referencia o período noturno como o compreendido entre 21h e 5h.",
      fundamento: "CF, art. 5º, XI.",
      macete: "Juiz trabalha de dia. Emergência não tem hora.",
      erroComum: "Validar a lista de hipóteses e ignorar o pareamento com os horários.",
      comoBancaPensa: "Não inventa elemento novo — apenas embaralha os que existem. É a pegadinha de custo mínimo e letalidade máxima."
    }
  },
  {
    id: "DC-002", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Conceito de casa",
    concurso: "PF", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.75,
    enunciado: "Para fins de proteção constitucional da inviolabilidade domiciliar, o conceito de casa abrange o quarto de hotel regularmente ocupado, bem como o escritório profissional no que se refere ao espaço não aberto ao público.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "quarto de hotel",
    cognitivo: {
      motivo: "Cobrar o conceito ampliado de 'casa' segundo o STF.",
      palavraCritica: "regularmente ocupado / não aberto ao público",
    },
    comentario: {
      resolucao: "CERTO. O STF confere interpretação ampla ao conceito de casa, abrangendo quarto de hotel ocupado (RHC 90.376) e escritórios profissionais em suas áreas privadas. O CP, art. 150, § 4º, já aponta essa extensão.",
      fundamento: "CF, art. 5º, XI; CP, art. 150, § 4º; STF, RHC 90.376.",
      macete: "Ocupou com ânimo de privacidade → é casa. Área aberta ao público → não é.",
      erroComum: "Marcar E por intuição leiga sobre o que é 'casa'.",
      comoBancaPensa: "Cobra o conceito jurisprudencial contra a intuição do candidato."
    }
  },
  {
    id: "DC-003", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Características",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 25, probReaparecer: 0.8,
    enunciado: "Os direitos fundamentais possuem caráter absoluto, não admitindo restrição ou relativização, ainda que diante da colisão com outros direitos de mesma hierarquia constitucional.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "absoluto",
    cognitivo: {
      motivo: "Cobrar a relatividade dos direitos fundamentais — item recorrente há mais de uma década.",
      palavraCritica: "caráter absoluto",
    },
    comentario: {
      resolucao: "ERRADO. É pacífico que os direitos fundamentais são relativos, sujeitando-se a restrições recíprocas resolvidas por ponderação/proporcionalidade. Exemplo clássico: a própria CF admite pena de morte em guerra declarada.",
      fundamento: "CF, art. 5º, XLVII, 'a'; jurisprudência do STF (relatividade).",
      macete: "'Não há direito absoluto' — mas cuidado: a VEDAÇÃO à tortura é norma sem exceção.",
      erroComum: "Nenhum relevante — item conceitual básico usado como 'ponto de partida' das provas.",
      comoBancaPensa: "Itens fáceis calibram a prova; errá-los custa duplamente (perde o ponto e anula um acerto, no sistema 1 líquido)."
    }
  },
  {
    id: "DC-004", disciplina: "Direito Constitucional", assunto: "Segurança pública", subassunto: "Art. 144 — Polícias civis",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.95,
    enunciado: "Às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, inclusive as militares.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "inclusive",
    cognitivo: {
      motivo: "Literalidade do art. 144, § 4º — o dispositivo mais provável de QUALQUER prova de polícia civil.",
      palavraCritica: "inclusive",
    },
    comentario: {
      resolucao: "ERRADO. CF, art. 144, § 4º: 'às polícias civis... incumbem, ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, EXCETO as militares.' Crimes militares são apurados pela polícia judiciária militar.",
      fundamento: "CF, art. 144, § 4º.",
      macete: "PC: tudo, MENOS militar e MENOS o que é da União (PF).",
      erroComum: "Não notar a troca exceto→inclusive por excesso de familiaridade com o texto.",
      comoBancaPensa: "Quanto mais decorado o dispositivo, maior a chance de a banca trocar UMA palavra no final."
    }
  },
  {
    id: "DC-005", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Extradição",
    concurso: "PF", cargo: ["Agente"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.65,
    enunciado: "O brasileiro naturalizado poderá ser extraditado por crime comum praticado antes da naturalização ou em caso de comprovado envolvimento com o tráfico ilícito de entorpecentes, na forma da lei, independentemente do momento do fato.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "antes da naturalização",
    cognitivo: {
      motivo: "Cobrar as duas hipóteses de extradição do naturalizado (art. 5º, LI).",
      palavraCritica: "independentemente do momento",
    },
    comentario: {
      resolucao: "CERTO. CF, art. 5º, LI: o naturalizado pode ser extraditado por crime comum praticado antes da naturalização OU por comprovado envolvimento em tráfico ilícito de entorpecentes e drogas afins, na forma da lei — nesta última hipótese, a qualquer tempo.",
      fundamento: "CF, art. 5º, LI.",
      macete: "Tráfico não tem 'antes ou depois' — sempre autoriza.",
      erroComum: "Marcar E achando que o tráfico também exigiria fato anterior à naturalização.",
      comoBancaPensa: "Explora a asimetria interna do inciso — quem decora 'metade' do dispositivo erra."
    }
  },
  {
    id: "DC-006", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais", subassunto: "Gratuidade",
    concurso: "PCDF", cargo: ["Escrivão","Agente"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCDF)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 25, probReaparecer: 0.6,
    enunciado: "São gratuitas, nos termos da Constituição Federal, as ações de habeas corpus e de mandado de segurança, bem como, na forma da lei, os atos necessários ao exercício da cidadania.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "mandado de segurança",
    cognitivo: {
      motivo: "Trocar habeas data por mandado de segurança na regra de gratuidade.",
      palavraCritica: "mandado de segurança",
    },
    comentario: {
      resolucao: "ERRADO. CF, art. 5º, LXXVII: 'são gratuitas as ações de habeas corpus e habeas data, e, na forma da lei, os atos necessários ao exercício da cidadania.' O mandado de segurança não é gratuito.",
      fundamento: "CF, art. 5º, LXXVII.",
      macete: "HC + HD = de graça (os dois 'H'). MS paga custas.",
      erroComum: "Substituição automática por associação de familiaridade.",
      comoBancaPensa: "Troca um item de um PAR consagrado por outro elemento famoso da mesma família."
    }
  },

  /* ================= DIREITO ADMINISTRATIVO ================= */
  {
    id: "DA-001", disciplina: "Direito Administrativo", assunto: "Poderes administrativos", subassunto: "Poder de polícia",
    concurso: "PCAL", cargo: ["Escrivão","Agente"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.8,
    enunciado: "Por ser manifestação da supremacia do interesse público, todos os atos decorrentes do poder de polícia administrativa são dotados de discricionariedade.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "todos",
    cognitivo: {
      motivo: "Testar se o candidato sabe que o poder de polícia também se expressa por atos vinculados.",
      palavraCritica: "todos",
    },
    comentario: {
      resolucao: "ERRADO. Embora a discricionariedade seja atributo comum do poder de polícia, há atos vinculados, como a licença (ex.: licença para construir e habilitação para dirigir, preenchidos os requisitos legais). A generalização torna a assertiva falsa.",
      fundamento: "Doutrina administrativista consolidada (Di Pietro, Carvalho Filho).",
      macete: "Autorização = discricionária. Licença = vinculada.",
      erroComum: "Repetir a lista de atributos como se fossem absolutos.",
      comoBancaPensa: "Converte 'característica frequente' em 'característica universal' — a marca registrada do padrão de generalização."
    }
  },
  {
    id: "DA-002", disciplina: "Direito Administrativo", assunto: "Atos administrativos", subassunto: "Anulação × revogação",
    concurso: "PCAL", cargo: ["Escrivão","Agente"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.85,
    enunciado: "A revogação do ato administrativo, fundada em razões de conveniência e oportunidade, opera efeitos retroativos, desfazendo as consequências já produzidas pelo ato revogado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "efeitos retroativos",
    cognitivo: {
      motivo: "Cobrar o par anulação (ex tunc) × revogação (ex nunc).",
      palavraCritica: "retroativos",
    },
    comentario: {
      resolucao: "ERRADO. A revogação atinge ato VÁLIDO por conveniência e oportunidade e produz efeitos EX NUNC (prospectivos), respeitados os direitos adquiridos (Súmula 473/STF). Quem retroage é a anulação (ato ilegal), com efeitos ex tunc.",
      fundamento: "Súmula 473/STF; Lei 9.784/1999, art. 53.",
      macete: "ex TUNc = Tira TUdo (anulação). ex NUNc = NUNca retroage (revogação).",
      erroComum: "Cruzar os efeitos dos dois institutos.",
      comoBancaPensa: "Par conceitual espelhado = terreno favorito para inversão."
    }
  },
  {
    id: "DA-003", disciplina: "Direito Administrativo", assunto: "Responsabilidade civil do Estado", subassunto: "Teorias",
    concurso: "PRF", cargo: ["Agente"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PRF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "A responsabilidade civil objetiva do Estado por atos comissivos de seus agentes fundamenta-se, como regra, na teoria do risco integral, que não admite excludentes do nexo de causalidade.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "risco integral",
    cognitivo: {
      motivo: "Diferenciar risco administrativo (regra) de risco integral (exceção).",
      palavraCritica: "como regra",
    },
    comentario: {
      resolucao: "ERRADO. A regra do art. 37, § 6º, da CF é a teoria do RISCO ADMINISTRATIVO, que admite excludentes de causalidade. O risco integral é excepcional (ex.: dano nuclear — CF, art. 21, XXIII, 'd').",
      fundamento: "CF, art. 37, § 6º; art. 21, XXIII, 'd'.",
      macete: "Administrativo = Admite defesa. Integral = Impossível defesa.",
      erroComum: "Achar que 'objetiva' e 'integral' são sinônimos.",
      comoBancaPensa: "Assertiva 90% verdadeira com o rótulo trocado — julgue o rótulo."
    }
  },
  {
    id: "DA-004", disciplina: "Direito Administrativo", assunto: "Improbidade administrativa", subassunto: "Elemento subjetivo",
    concurso: "PCAL", cargo: ["Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "Após a Lei nº 14.230/2021, a configuração de ato de improbidade administrativa exige a presença de dolo específico, não bastando a voluntariedade do agente, tendo sido abolida a modalidade culposa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dolo específico",
    cognitivo: {
      motivo: "Cobrar a principal mudança da reforma da LIA — tema com altíssima probabilidade por ser alteração legislativa recente.",
      palavraCritica: "abolida a modalidade culposa",
    },
    comentario: {
      resolucao: "CERTO. A Lei 14.230/2021 alterou a Lei 8.429/1992: o art. 1º, §§ 1º a 3º, passou a exigir dolo (vontade livre e consciente de alcançar o resultado ilícito), e o art. 17-C, entre outros, reforça que não há mais improbidade culposa.",
      fundamento: "Lei 8.429/1992, art. 1º, §§ 1º-3º (redação da Lei 14.230/2021).",
      jurisprudencia: "STF, ARE 843.989 (Tema 1.199): a norma que exige dolo é aplicável, mas a revogação da modalidade culposa não retroage automaticamente para atos com trânsito em julgado.",
      macete: "Improbidade agora rima com 'dolosidade'.",
      erroComum: "Responder com a redação original da LIA.",
      comoBancaPensa: "Lei alterada há pouco tempo = literalidade da novidade, quase sempre como item CERTO."
    }
  },
  {
    id: "DA-005", disciplina: "Direito Administrativo", assunto: "Poderes administrativos", subassunto: "Abuso de poder",
    concurso: "PCDF", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCDF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.7,
    enunciado: "O desvio de poder configura-se quando o agente público atua fora dos limites de sua competência, ao passo que o excesso de poder ocorre quando o agente, embora competente, busca finalidade diversa do interesse público.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "desvio × excesso",
    cognitivo: {
      motivo: "Inversão dos dois vícios que compõem o abuso de poder.",
      palavraCritica: "fora dos limites / finalidade diversa",
    },
    comentario: {
      resolucao: "ERRADO. É o contrário: EXCESSO de poder = agente atua além de sua competência; DESVIO de poder (détournement de pouvoir) = agente competente persegue finalidade diversa da prevista (vício de finalidade).",
      fundamento: "Doutrina consolidada; Lei 4.717/1965, art. 2º, 'e' (desvio de finalidade).",
      macete: "EXcedeu = EXcesso. DESviou o objetivo = DESvio.",
      erroComum: "Aceitar o item porque 'as duas definições existem'.",
      comoBancaPensa: "Inversão simétrica de par conceitual — padrão de incidência altíssima em Administrativo."
    }
  },

  /* ================= LEGISLAÇÃO ESPECIAL ================= */
  {
    id: "LE-001", disciplina: "Legislação Especial", assunto: "Lei Maria da Penha", subassunto: "Âmbito de aplicação",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.95,
    enunciado: "A configuração da violência doméstica e familiar contra a mulher, para os fins da Lei nº 11.340/2006, exige a coabitação entre autor e vítima quando a agressão ocorrer no âmbito da unidade doméstica.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "exige a coabitação",
    cognitivo: {
      motivo: "Cobrar a Súmula 600 do STJ — presença quase obrigatória em provas policiais.",
      palavraCritica: "exige",
    },
    comentario: {
      resolucao: "ERRADO. Súmula 600/STJ: 'Para a configuração da violência doméstica e familiar prevista no artigo 5º da Lei 11.340/2006 não se exige a coabitação entre autor e vítima.' O próprio art. 5º, III, fala em relação íntima de afeto 'independentemente de coabitação'.",
      fundamento: "Lei 11.340/2006, art. 5º; Súmula 600/STJ.",
      macete: "Ex-namorado que nunca morou junto → pode sim incidir a lei.",
      erroComum: "Associar 'doméstica' a 'mesmo teto' obrigatoriamente.",
      comoBancaPensa: "Tema com súmula = a banca cobra a súmula contra o senso comum da palavra 'doméstica'."
    }
  },
  {
    id: "LE-002", disciplina: "Legislação Especial", assunto: "Lei Maria da Penha", subassunto: "Sujeitos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.85,
    enunciado: "A Lei Maria da Penha pode ser aplicada quando a agressão é praticada por outra mulher, como na hipótese de violência cometida no âmbito de relação homoafetiva feminina, pois a proteção legal se define pelo gênero da vítima, e não do agressor.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "gênero da vítima",
    cognitivo: {
      motivo: "Testar quem define a incidência: a condição da vítima, não a do agressor.",
      palavraCritica: "vítima mulher",
    },
    comentario: {
      resolucao: "CERTO. O art. 5º, parágrafo único, da Lei 11.340/2006 dispõe que as relações pessoais ali previstas independem de orientação sexual. Sujeito ativo pode ser homem ou mulher; o que a lei exige é vítima mulher em contexto de violência doméstica/familiar/afetiva, com motivação de gênero.",
      fundamento: "Lei 11.340/2006, art. 5º, parágrafo único; jurisprudência do STJ.",
      macete: "A lei protege A MULHER — não pune 'O HOMEM' especificamente.",
      erroComum: "Restringir o polo ativo ao homem.",
      comoBancaPensa: "Explora a diferença entre o espírito popularizado da lei e seu texto."
    }
  },
  {
    id: "LE-003", disciplina: "Legislação Especial", assunto: "Lei Maria da Penha", subassunto: "Medidas protetivas",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.9,
    enunciado: "Nos termos da Lei nº 11.340/2006, com as alterações promovidas pela Lei nº 14.550/2023, as medidas protetivas de urgência serão concedidas independentemente da tipificação penal da violência, do ajuizamento de ação penal ou cível, da existência de inquérito policial ou do registro de boletim de ocorrência.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "independentemente",
    cognitivo: {
      motivo: "Cobrar a novidade legislativa de 2023 (art. 19, § 5º) — probabilidade altíssima por recência.",
      palavraCritica: "independentemente da tipificação penal",
    },
    comentario: {
      resolucao: "CERTO. Lei 11.340/2006, art. 19, § 5º (incluído pela Lei 14.550/2023): as medidas protetivas serão concedidas 'independentemente da tipificação penal da violência, do ajuizamento de ação penal ou cível, da existência de inquérito policial ou do registro de boletim de ocorrência'.",
      fundamento: "Lei 11.340/2006, art. 19, §§ 4º a 6º (Lei 14.550/2023).",
      macete: "Protetiva virou 'tutela de urgência autônoma' — basta o risco.",
      erroComum: "Aplicar o entendimento antigo que condicionava a protetiva à persecução penal.",
      comoBancaPensa: "Alteração legislativa recente cobrada de forma literal — o padrão mais previsível da banca."
    }
  },
  {
    id: "LE-004", disciplina: "Legislação Especial", assunto: "Lei de Drogas", subassunto: "Porte para consumo",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.8,
    enunciado: "Ao agente que adquire ou porta droga para consumo pessoal poderão ser aplicadas as penas de advertência, prestação de serviços à comunidade e medida educativa, sendo vedada a imposição de pena privativa de liberdade para essa conduta.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "vedada a pena privativa",
    cognitivo: {
      motivo: "Cobrar o rol de penas do art. 28 da Lei 11.343/2006.",
      palavraCritica: "consumo pessoal",
    },
    comentario: {
      resolucao: "CERTO. Lei 11.343/2006, art. 28: as penas são advertência, prestação de serviços à comunidade e medida educativa de comparecimento a programa ou curso. Não há pena privativa de liberdade. O STF (RE 430.105) reconheceu que houve despenalização, permanecendo a natureza de crime.",
      fundamento: "Lei 11.343/2006, art. 28; STF, RE 430.105.",
      jurisprudencia: "STF, RE 635.659 (Tema 506): porte de maconha para consumo — descriminalização administrativa da conduta com fixação de parâmetro de 40g/6 plantas fêmeas; para as demais drogas, mantém-se o art. 28.",
      macete: "APM: Advertência, Prestação, Medida educativa.",
      erroComum: "Achar que 'crime sem prisão' é contradição e marcar E.",
      comoBancaPensa: "Cobra a lista fechada de penas — e, em provas recentes, o Tema 506 do STF."
    }
  },
  {
    id: "LE-005", disciplina: "Legislação Especial", assunto: "Abuso de Autoridade", subassunto: "Elemento subjetivo",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.9,
    enunciado: "Os crimes previstos na Lei nº 13.869/2019 admitem tanto a forma dolosa quanto a culposa, bastando, nesta última, a inobservância do dever objetivo de cuidado pelo agente público.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "forma culposa",
    cognitivo: {
      motivo: "Cobrar a exigência de dolo + finalidade específica na nova Lei de Abuso de Autoridade.",
      palavraCritica: "culposa",
    },
    comentario: {
      resolucao: "ERRADO. A Lei 13.869/2019 exige dolo acrescido de finalidade específica: art. 1º, § 1º — as condutas devem ser praticadas 'com a finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal'. Não existe abuso de autoridade culposo.",
      fundamento: "Lei 13.869/2019, art. 1º, §§ 1º e 2º.",
      macete: "Abuso exige 'maldade qualificada': prejudicar, beneficiar ou capricho.",
      erroComum: "Achar que negligência grave do agente público configuraria a forma culposa.",
      comoBancaPensa: "Cria modalidade inexistente com roupagem técnica impecável."
    }
  },
  {
    id: "LE-006", disciplina: "Legislação Especial", assunto: "Estatuto do Desarmamento", subassunto: "Posse irregular",
    concurso: "PRF", cargo: ["Agente"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PRF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.75,
    enunciado: "Segundo o STJ, o crime de posse irregular de arma de fogo de uso permitido é de perigo abstrato, prescindindo da demonstração de lesão ou de perigo concreto ao bem jurídico tutelado.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "prescindindo",
    cognitivo: {
      motivo: "Cobrar a natureza de perigo abstrato + o verbo 'prescindir' (pegadinha semântica clássica).",
      palavraCritica: "prescindindo (= dispensando)",
    },
    comentario: {
      resolucao: "CERTO. STJ: os crimes de posse e porte de arma são de perigo abstrato/mera conduta — a incolumidade pública é tutelada independentemente de lesão concreta. 'Prescindir' = dispensar: a assertiva diz, corretamente, que se dispensa a prova do perigo concreto.",
      fundamento: "Lei 10.826/2003, arts. 12 e 14; jurisprudência consolidada do STJ.",
      macete: "PRESCINDE = Pode Retirar, Está Sem Necessidade — dispensa.",
      erroComum: "Ler 'prescinde' como 'exige'.",
      comoBancaPensa: "Usa o verbo que estatisticamente mais derruba candidatos por semântica, não por conteúdo."
    }
  },
  {
    id: "LE-007", disciplina: "Legislação Especial", assunto: "Organização Criminosa", subassunto: "Conceito legal",
    concurso: "PF", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "Considera-se organização criminosa, nos termos da Lei nº 12.850/2013, a associação de três ou mais pessoas estruturalmente ordenada e caracterizada pela divisão de tarefas, com objetivo de obter vantagem de qualquer natureza mediante a prática de infrações penais cujas penas máximas sejam superiores a quatro anos, ou que sejam de caráter transnacional.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "três ou mais",
    cognitivo: {
      motivo: "Troca numérica no conceito legal mais cobrado da Lei 12.850.",
      palavraCritica: "três",
    },
    comentario: {
      resolucao: "ERRADO. Lei 12.850/2013, art. 1º, § 1º: exige-se associação de 4 (QUATRO) ou mais pessoas. Três ou mais é o número da associação criminosa do art. 288 do CP. A banca também costuma trocar 'superiores a 4 anos' por 'iguais ou superiores' — aqui esse trecho estava certo.",
      fundamento: "Lei 12.850/2013, art. 1º, § 1º; CP, art. 288.",
      macete: "288 = 3 (associação). ORCRIM = 4 + estrutura + divisão de tarefas + vantagem.",
      erroComum: "Misturar os números do art. 288 do CP com os da Lei 12.850.",
      comoBancaPensa: "Um conceito, dois diplomas, números diferentes: cruzamento perfeito para pegadinha numérica."
    }
  },

  /* ================= PORTUGUÊS ================= */
  {
    id: "PT-001", disciplina: "Língua Portuguesa", assunto: "Compreensão e reescritura", subassunto: "Reescritura de trechos",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.9,
    textoApoio: "A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio. No entanto, a mera presença ostensiva do aparato policial não é suficiente para garantir a redução dos índices de criminalidade, os quais dependem, também, de políticas sociais estruturantes.",
    enunciado: "No segundo período do texto, a substituição de 'os quais' por 'cujos' manteria a correção gramatical e os sentidos originais do texto.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "cujos",
    cognitivo: {
      motivo: "Cobrar o uso do relativo 'cujo', que exige relação de posse entre antecedente e consequente.",
      palavraCritica: "cujos",
    },
    comentario: {
      resolucao: "ERRADO. 'Os quais' retoma 'os índices de criminalidade' como sujeito de 'dependem'. 'Cujo' expressa posse e deve anteceder substantivo ('cujos índices'), o que tornaria o período agramatical: 'a redução dos índices..., cujos dependem...' não tem estrutura possível.",
      fundamento: "Gramática normativa — emprego dos pronomes relativos.",
      macete: "CUJO = 'de quem/de que' + coisa possuída, sem artigo depois.",
      erroComum: "Aceitar 'cujo' como sinônimo culto de 'o qual'.",
      comoBancaPensa: "Reescritura é o formato nº 1 de Português no CEBRASPE: julgue sempre SINTAXE + SENTIDO."
    }
  },
  {
    id: "PT-002", disciplina: "Língua Portuguesa", assunto: "Compreensão e reescritura", subassunto: "Coesão referencial",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    textoApoio: "A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio. No entanto, a mera presença ostensiva do aparato policial não é suficiente para garantir a redução dos índices de criminalidade, os quais dependem, também, de políticas sociais estruturantes.",
    enunciado: "A locução 'No entanto', que introduz o segundo período, poderia ser substituída por 'Conquanto', sem prejuízo da correção gramatical e da coerência textual.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "conquanto",
    cognitivo: {
      motivo: "Diferença entre conectivo adversativo coordenativo e conjunção concessiva subordinativa.",
      palavraCritica: "Conquanto (= embora)",
    },
    comentario: {
      resolucao: "ERRADO. 'No entanto' é conectivo adversativo que liga períodos independentes. 'Conquanto' é conjunção subordinativa concessiva (equivale a 'embora') e exigiria reestruturação do período (verbo no subjuntivo e oração principal), o que não ocorre na simples substituição.",
      fundamento: "Gramática normativa — coordenação e subordinação.",
      macete: "Troca segura: no entanto ↔ porém ↔ contudo ↔ entretanto ↔ todavia.",
      erroComum: "Aceitar troca entre conectivo de grupo diferente por proximidade de sentido.",
      comoBancaPensa: "É a segunda cobrança favorita em Português: substituição de conectivo com mudança de classe gramatical."
    }
  },
  {
    id: "PT-003", disciplina: "Língua Portuguesa", assunto: "Sintaxe", subassunto: "Pontuação — vírgulas",
    concurso: "PCAL", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    textoApoio: "A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio.",
    enunciado: "As vírgulas que isolam o trecho 'dever do Estado, direito e responsabilidade de todos' foram empregadas para separar aposto explicativo, razão por que sua supressão manteria a correção gramatical do período.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "sua supressão manteria",
    cognitivo: {
      motivo: "Combinar classificação correta (aposto) com consequência falsa (supressão possível).",
      palavraCritica: "manteria a correção",
    },
    comentario: {
      resolucao: "ERRADO. O trecho é, de fato, aposto explicativo referido a 'A segurança pública' — mas exatamente por isso as vírgulas duplas são obrigatórias na intercalação. A supressão fundiria aposto e sujeito sem sinalização, comprometendo a correção gramatical.",
      fundamento: "Gramática normativa — pontuação do aposto (estrutura análoga à do art. 144, caput, da CF).",
      macete: "Explicação intercalada = 'entre parênteses' = vírgulas obrigatórias dos dois lados.",
      erroComum: "Validar o item pela metade verdadeira.",
      comoBancaPensa: "Verdade + falso emendado: o acerto parcial compra a confiança do candidato."
    }
  },
  {
    id: "PT-004", disciplina: "Língua Portuguesa", assunto: "Sintaxe", subassunto: "Crase",
    concurso: "PCDF", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCDF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.75,
    textoApoio: "O acesso à informação e a transparência dos órgãos policiais são essenciais à consolidação da confiança social nas instituições de segurança.",
    enunciado: "No trecho, o emprego do acento indicativo de crase em 'à informação' e em 'à consolidação' justifica-se pela mesma razão sintática: em ambos os casos, há fusão da preposição 'a', exigida pelo termo regente, com o artigo definido feminino que antecede o termo regido.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mesma razão sintática",
    cognitivo: {
      motivo: "Cobrar a justificativa da crase (regência + artigo), formato típico da banca.",
      palavraCritica: "termo regente",
    },
    comentario: {
      resolucao: "CERTO. 'Acesso' rege a preposição 'a' e 'informação' admite o artigo 'a' → crase. 'Essencial' rege 'a' e 'consolidação' admite 'a' → crase. A justificativa sintática (preposição + artigo) é a mesma nos dois casos.",
      fundamento: "Gramática normativa — regência e crase.",
      macete: "Troque pelo masculino: apareceu 'AO', crase confirmada.",
      erroComum: "Buscar diferenças de regência inexistentes por desconfiança excessiva.",
      comoBancaPensa: "Também cobra itens CERTOS de crase — julgue pela regra, não pelo medo."
    }
  },

  /* ================= INFORMÁTICA ================= */
  {
    id: "IN-001", disciplina: "Informática", assunto: "Segurança da informação", subassunto: "Malwares e golpes",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.85,
    enunciado: "Denomina-se ransomware a técnica de engenharia social por meio da qual o golpista envia mensagens fraudulentas que simulam comunicações de instituições legítimas, com o objetivo de induzir a vítima a fornecer dados pessoais e credenciais de acesso.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "ransomware",
    cognitivo: {
      motivo: "Troca de rótulos entre phishing e ransomware — o padrão nº 1 de Informática na banca.",
      palavraCritica: "ransomware × phishing",
    },
    comentario: {
      resolucao: "ERRADO. A definição apresentada é de PHISHING. Ransomware é o malware que cifra/bloqueia dados do sistema e exige pagamento de resgate (ransom) para a liberação.",
      fundamento: "Cartilha de Segurança CERT.br — conceitos de códigos maliciosos e golpes.",
      macete: "Ransom = resgate em inglês. Phishing = fishing (pescar a vítima).",
      erroComum: "Julgar a qualidade da definição e não o pareamento nome↔definição.",
      comoBancaPensa: "Definição impecável + rótulo errado: o mesmo DNA da troca de conceitos jurídica."
    }
  },
  {
    id: "IN-002", disciplina: "Informática", assunto: "Segurança da informação", subassunto: "Becape",
    concurso: "PF", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.7,
    enunciado: "No becape incremental, são copiados somente os arquivos criados ou alterados desde o último becape, seja ele completo ou incremental, o que reduz o tempo e o espaço de armazenamento necessários em comparação ao becape completo.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "somente",
    cognitivo: {
      motivo: "Cobrar a distinção incremental × diferencial.",
      palavraCritica: "desde o último becape (qualquer tipo)",
    },
    comentario: {
      resolucao: "CERTO. O becape incremental copia apenas o que mudou desde o último becape (completo ou incremental), sendo o mais econômico em espaço/tempo de cópia — ao custo de restauração mais complexa (exige o completo + toda a cadeia de incrementais).",
      fundamento: "Fundamentos de infraestrutura e segurança de TI.",
      macete: "Incremental olha para ONTEM. Diferencial olha para o ÚLTIMO COMPLETO.",
      erroComum: "Trocar as referências dos dois tipos.",
      comoBancaPensa: "Usa 'somente' verdadeiro para punir o candidato que decora heurística sem conteúdo."
    }
  },
  {
    id: "IN-003", disciplina: "Informática", assunto: "Sistemas operacionais", subassunto: "Windows — exclusão de arquivos",
    concurso: "PCDF", cargo: ["Escrivão","Agente"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCDF)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 25, probReaparecer: 0.6,
    enunciado: "No Windows, ao se excluir um arquivo do disco rígido local por meio da combinação de teclas Shift + Delete, o arquivo será enviado à Lixeira, de onde poderá ser posteriormente restaurado ao local de origem.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "Shift + Delete",
    cognitivo: {
      motivo: "Cobrar o comportamento de exclusão definitiva.",
      palavraCritica: "Shift",
    },
    comentario: {
      resolucao: "ERRADO. Shift + Delete exclui o arquivo diretamente, sem passar pela Lixeira — não há restauração pelo caminho comum. (Detalhe de prova policial: dados assim excluídos ainda podem ser recuperados por técnicas periciais até serem sobrescritos.)",
      fundamento: "Documentação do Microsoft Windows.",
      macete: "Delete = Lixeira. Shift+Delete = sem escala.",
      erroComum: "Assumir que toda exclusão passa pela Lixeira.",
      comoBancaPensa: "Atribui a um comando o efeito de outro — 'troca de conceitos' aplicada à informática básica."
    }
  },

  /* ================= LEGISLAÇÃO PCAL / ESTADUAL ================= */
  {
    id: "LP-001", disciplina: "Legislação Especial", assunto: "Pacote Anticrime", subassunto: "Juiz das garantias / ANPP",
    concurso: "PCAL", cargo: ["Escrivão","Agente"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "O acordo de não persecução penal poderá ser celebrado pelo Ministério Público com o investigado que tenha confessado formal e circunstancialmente a prática de infração penal sem violência ou grave ameaça, com pena mínima inferior a quatro anos, desde que necessário e suficiente para a reprovação e prevenção do crime.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "pena mínima inferior a 4 anos",
    cognitivo: {
      motivo: "Cobrar os requisitos do ANPP (art. 28-A do CPP), inovação do Pacote Anticrime.",
      palavraCritica: "mínima inferior",
    },
    comentario: {
      resolucao: "CERTO. CPP, art. 28-A (Lei 13.964/2019): cabe ANPP quando o investigado confessa formal e circunstancialmente infração sem violência ou grave ameaça com pena mínima inferior a 4 anos, sendo o acordo necessário e suficiente para reprovação e prevenção do crime.",
      fundamento: "CPP, art. 28-A.",
      jurisprudencia: "STF, HC 185.913: o ANPP aplica-se a processos em curso sem trânsito em julgado quando a lei entrou em vigor (retroatividade da norma mais benéfica).",
      macete: "Trio do ANPP: Confessou + Sem violência + Mínima < 4.",
      erroComum: "Trocar pena mínima por máxima (a máxima < 4 é referência de outros institutos).",
      comoBancaPensa: "Instituto novo com números = cobrança literal recorrente por anos."
    }
  },
  {
    id: "LP-002", disciplina: "Legislação Especial", assunto: "Feminicídio", subassunto: "Lei 14.994/2024",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.9,
    enunciado: "Com o advento da Lei nº 14.994/2024, o feminicídio deixou de ser qualificadora do homicídio e passou a constituir tipo penal autônomo, consistente em matar mulher por razões da condição do sexo feminino, com pena de reclusão de vinte a quarenta anos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "tipo penal autônomo",
    cognitivo: {
      motivo: "Cobrar a alteração legislativa mais relevante de 2024 em crimes contra a vida.",
      palavraCritica: "121-A / 20 a 40 anos",
    },
    comentario: {
      resolucao: "CERTO. A Lei 14.994/2024 criou o art. 121-A do CP: 'Matar mulher por razões da condição do sexo feminino. Pena — reclusão, de 20 (vinte) a 40 (quarenta) anos.' Deixou de ser qualificadora do art. 121 e é crime hediondo (Lei 8.072/1990, art. 1º, I).",
      fundamento: "CP, art. 121-A (Lei 14.994/2024); Lei 8.072/1990, art. 1º.",
      macete: "Feminicídio 'ganhou CPF próprio': 121-A, 20–40 anos.",
      erroComum: "Responder com o regime anterior (qualificadora do § 2º, VI).",
      comoBancaPensa: "Alteração legislativa recente e de grande repercussão = aposta segura de cobrança literal."
    }
  },
];

/* ---------------- FREQUÊNCIA DE TEMAS (Módulo 2) ----------------
   Estimativas de incidência por tema nas provas CEBRASPE de carreiras
   policiais (base: padrão histórico PCAL/PF/PRF/PCDF). freq = peso 0-100. */
const FREQUENCIA_TEMAS = [
  { disciplina: "Direito Penal", temas: [
    { tema: "Crimes contra a Administração Pública", freq: 95, tendencia: "alta", prob: 0.95 },
    { tema: "Teoria do crime (dolo, culpa, erro)", freq: 88, tendencia: "estavel", prob: 0.9 },
    { tema: "Ilicitude e excludentes", freq: 75, tendencia: "estavel", prob: 0.8 },
    { tema: "Crimes contra a pessoa / feminicídio", freq: 82, tendencia: "alta", prob: 0.9 },
    { tema: "Crimes contra o patrimônio", freq: 70, tendencia: "estavel", prob: 0.75 },
    { tema: "Princípios penais e insignificância", freq: 68, tendencia: "estavel", prob: 0.75 },
  ]},
  { disciplina: "Processo Penal", temas: [
    { tema: "Inquérito policial", freq: 97, tendencia: "alta", prob: 0.97 },
    { tema: "Prisões e medidas cautelares", freq: 92, tendencia: "alta", prob: 0.95 },
    { tema: "Provas e cadeia de custódia", freq: 85, tendencia: "alta", prob: 0.9 },
    { tema: "ANPP e Pacote Anticrime", freq: 78, tendencia: "alta", prob: 0.85 },
    { tema: "Busca e apreensão", freq: 80, tendencia: "alta", prob: 0.88 },
  ]},
  { disciplina: "Direito Constitucional", temas: [
    { tema: "Direitos e garantias (art. 5º)", freq: 98, tendencia: "estavel", prob: 0.98 },
    { tema: "Segurança pública (art. 144)", freq: 93, tendencia: "alta", prob: 0.95 },
    { tema: "Remédios constitucionais", freq: 72, tendencia: "estavel", prob: 0.78 },
    { tema: "Organização do Estado", freq: 60, tendencia: "caindo", prob: 0.6 },
  ]},
  { disciplina: "Direito Administrativo", temas: [
    { tema: "Atos administrativos", freq: 88, tendencia: "estavel", prob: 0.9 },
    { tema: "Poderes administrativos", freq: 85, tendencia: "estavel", prob: 0.88 },
    { tema: "Improbidade (Lei 14.230/2021)", freq: 82, tendencia: "alta", prob: 0.9 },
    { tema: "Responsabilidade civil do Estado", freq: 74, tendencia: "estavel", prob: 0.8 },
    { tema: "Agentes públicos", freq: 65, tendencia: "estavel", prob: 0.7 },
  ]},
  { disciplina: "Legislação Especial", temas: [
    { tema: "Lei Maria da Penha", freq: 96, tendencia: "alta", prob: 0.96 },
    { tema: "Lei de Drogas", freq: 88, tendencia: "estavel", prob: 0.9 },
    { tema: "Abuso de Autoridade", freq: 84, tendencia: "alta", prob: 0.88 },
    { tema: "Organização Criminosa", freq: 78, tendencia: "estavel", prob: 0.82 },
    { tema: "Estatuto do Desarmamento", freq: 74, tendencia: "estavel", prob: 0.78 },
    { tema: "Crimes Hediondos", freq: 70, tendencia: "estavel", prob: 0.72 },
  ]},
  { disciplina: "Língua Portuguesa", temas: [
    { tema: "Compreensão e reescritura", freq: 97, tendencia: "estavel", prob: 0.97 },
    { tema: "Coesão e conectivos", freq: 90, tendencia: "estavel", prob: 0.92 },
    { tema: "Pontuação", freq: 85, tendencia: "estavel", prob: 0.88 },
    { tema: "Crase e regência", freq: 78, tendencia: "estavel", prob: 0.8 },
    { tema: "Concordância", freq: 76, tendencia: "estavel", prob: 0.78 },
  ]},
  { disciplina: "Informática", temas: [
    { tema: "Segurança da informação", freq: 92, tendencia: "alta", prob: 0.93 },
    { tema: "Redes e internet", freq: 80, tendencia: "estavel", prob: 0.82 },
    { tema: "Sistemas operacionais", freq: 70, tendencia: "caindo", prob: 0.68 },
    { tema: "Computação em nuvem", freq: 66, tendencia: "alta", prob: 0.72 },
  ]},
];

/* Evolução histórica (estimativa de nº de itens por disciplina em provas
   policiais CEBRASPE por ano — Módulo 2, gráfico de timeline). */
const TIMELINE_DISCIPLINAS = {
  anos: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
  series: [
    { disciplina: "Direito Penal", valores: [18, 20, 22, 25, 23, 24, 26, 27] },
    { disciplina: "Processo Penal", valores: [16, 18, 24, 26, 25, 26, 28, 28] },
    { disciplina: "Direito Constitucional", valores: [15, 15, 16, 18, 17, 16, 17, 18] },
    { disciplina: "Legislação Especial", valores: [12, 14, 18, 22, 24, 26, 28, 30] },
    { disciplina: "Direito Administrativo", valores: [14, 14, 15, 16, 15, 16, 15, 16] },
    { disciplina: "Língua Portuguesa", valores: [20, 20, 20, 20, 20, 20, 20, 20] },
  ],
};

/* ---------------- PREDIÇÃO DE COBRANÇA (Módulo 9) ----------------
   score = combinação de frequência histórica + recência legislativa +
   jurisprudência nova. SÃO ESTIMATIVAS ESTATÍSTICAS, não garantias. */
const PREDICOES = [
  { tema: "Medidas protetivas autônomas (Lei 14.550/2023)", disciplina: "Legislação Especial", score: 96,
    motivos: ["Alteração legislativa recente", "Tema nº 1 da banca em violência de gênero", "Cobrança literal esperada"] },
  { tema: "Feminicídio como tipo autônomo (Lei 14.994/2024)", disciplina: "Direito Penal", score: 95,
    motivos: ["Lei de 2024 — janela típica de cobrança (até 2 anos)", "Grande repercussão social", "Muda resposta de questões antigas"] },
  { tema: "Busca domiciliar e fundadas razões (RE 603.616 / HC 598.051)", disciplina: "Processo Penal", score: 93,
    motivos: ["Tese de repercussão geral consolidada", "Tema operacional para polícia", "Combina CF + jurisprudência (padrão favorito)"] },
  { tema: "Cadeia de custódia (arts. 158-A a 158-F, CPP)", disciplina: "Processo Penal", score: 91,
    motivos: ["Norma relativamente nova (Pacote Anticrime)", "Essencial para perito e papiloscopista", "Cobrança literal das 10 etapas"] },
  { tema: "Improbidade pós-Lei 14.230/2021 (dolo específico)", disciplina: "Direito Administrativo", score: 89,
    motivos: ["Reforma estrutural da LIA", "Tema 1.199/STF define retroatividade", "Pega candidatos com material antigo"] },
  { tema: "ANPP — requisitos e retroatividade (HC 185.913/STF)", disciplina: "Processo Penal", score: 88,
    motivos: ["Decisão recente do STF sobre retroatividade", "Números e requisitos = pegadinha numérica fácil de montar"] },
  { tema: "Porte para consumo — Tema 506/STF (40g maconha)", disciplina: "Legislação Especial", score: 86,
    motivos: ["Decisão de repercussão geral recente", "Parâmetro objetivo (40g/6 plantas) = ideal para C/E"] },
  { tema: "Art. 144, § 4º — atribuições da PC", disciplina: "Direito Constitucional", score: 94,
    motivos: ["Dispositivo-símbolo de prova de polícia civil", "Histórico de cobrança em praticamente todos os certames PC"] },
  { tema: "Súmula 600/STJ — coabitação Maria da Penha", disciplina: "Legislação Especial", score: 85,
    motivos: ["Súmula consolidada de alta incidência", "Contraria o senso comum — perfil ideal de pegadinha"] },
  { tema: "Crimes funcionais (peculato/concussão/corrupção)", disciplina: "Direito Penal", score: 92,
    motivos: ["Tema central para cargos policiais (sujeito ativo funcionário)", "Padrão de troca de verbos nucleares entre tipos"] },
];

/* ---------------- INTELIGÊNCIA POR TRILHA ----------------
   Raio-X e Predição são as telas mais específicas de carreira do app: um
   candidato de Fisioterapia não tem o que fazer com a frequência histórica
   de Direito Penal nem com a predição de "medidas protetivas autônomas".
   Enquanto FREQUENCIA_TEMAS/TIMELINE_DISCIPLINAS/PREDICOES eram globais,
   essas duas telas mentiam para quem não fosse candidato de polícia.

   Cada trilha traz o que tem de verdade. Onde não há dado, o campo vem
   `null` e a tela mostra o motivo em vez de inventar número — é o caso da
   série histórica de SESAU/AL, que é primeira edição do concurso.

   ─── SOBRE OS PADRÕES DA BANCA EM CARREIRAS NÃO POLICIAIS ───

   A pergunta era se o DNA_BANCA, levantado em provas de carreira policial,
   vale para saúde. Analisei uma prova CERTO/ERRADO de Fisioterapia do
   próprio Cebraspe (HUB/UnB — Residência Multiprofissional, 2018,
   caderno 370_RMULT_005) item a item. Conclusão:

   TRANSFEREM-SE (mesma mecânica, conteúdo clínico no lugar do jurídico):
     troca-conceito     — item 4 lista "monocromatismo, INCOERÊNCIA e
                          colimação" como características do laser; o laser
                          é coerente. Uma palavra trocada num rol de três.
     verdade-mais-falso — item 2 abre com premissa verdadeira (maior
                          comprimento de onda penetra mais) e conclui o
                          inverso (que o vermelho penetra mais que o
                          infravermelho). Metade verdadeira sustentando a
                          falsa, exatamente como em Direito.
     troca-sujeito      — item 16 atribui o ombro caído à fraqueza do
                          manguito rotador; a lesão do nervo acessório
                          afeta o trapézio.
     inversão/negação   — item 13 nega que o trismo comprometa higiene
                          oral, fala e alimentação.
     troca de rótulo    — item 17 chama Katz e Barthel de escalas de AVD
                          INSTRUMENTAIS; ambas medem AVD básicas.

   NÃO SE APLICAM ao bloco específico de saúde:
     juris-inventada e juris-mais-lei — não há jurisprudência em conteúdo
     clínico. Seguem valendo nas disciplinas de legislação da MESMA trilha
     (SUS, estadual, ética), e é por isso que o escopo correto é por
     DISCIPLINA e não por trilha — já resolvido em DISCIPLINAS_JURIDICAS.

   MUDA DE SIGNIFICADO:
     literalidade — em Direito é conferir o artigo; em saúde é conferir a
     escala, o protocolo ou a diretriz. Mesma habilidade, outra fonte.

   GANHA PESO:
     o caso clínico. Naquele caderno, a maioria dos comandos pendura vários
     itens numa vinheta ("Considerando esse caso clínico, julgue..."), e o
     próprio edital do SESAU/AL prevê a estrutura "Situação hipotética: ...
     Assertiva: ...". O banco já tem esse formato (textoApoio), mas na
     trilha de Fisioterapia ele deixa de ser exceção e vira o padrão. */
const INTELIGENCIA = {
  PCAL: {
    frequenciaTemas: FREQUENCIA_TEMAS,
    timeline: TIMELINE_DISCIPLINAS,
    predicoes: PREDICOES,
  },

  SESAUAL_FISIO: {
    /* Frequências derivadas do peso programático do edital (5 blocos no
       específico, 4 disciplinas nos básicos) cruzado com a ênfase observada
       no caderno de Fisioterapia analisado. São estimativas declaradas como
       tal na interface — não há série histórica deste concurso. */
    frequenciaTemas: [
      { disciplina: "Fisioterapia em Saúde da Mulher", temas: [
        { tema: "Assoalho pélvico e disfunções uroginecológicas", freq: 92, tendencia: "alta", prob: 0.94 },
        { tema: "Pré e pós-operatório de mastectomia e linfedema", freq: 88, tendencia: "alta", prob: 0.9 },
        { tema: "Obstetrícia: gestação, parto e puerpério", freq: 85, tendencia: "estavel", prob: 0.88 },
        { tema: "Recursos terapêuticos (eletro, foto, termo, cinesio)", freq: 82, tendencia: "estavel", prob: 0.86 },
        { tema: "Avaliação funcional, postura e marcha", freq: 78, tendencia: "estavel", prob: 0.82 },
        { tema: "Oncologia e cuidados no tratamento antineoplásico", freq: 74, tendencia: "alta", prob: 0.8 },
        { tema: "Climatério e ciclo menstrual", freq: 68, tendencia: "estavel", prob: 0.72 },
        { tema: "Disfunções anorretais e coloproctologia", freq: 62, tendencia: "alta", prob: 0.68 },
        { tema: "Ética e legislação profissional (COFFITO)", freq: 58, tendencia: "estavel", prob: 0.65 },
      ]},
      { disciplina: "Legislação Aplicada ao SUS", temas: [
        { tema: "Lei 8.080/1990 — princípios e organização", freq: 90, tendencia: "estavel", prob: 0.92 },
        { tema: "Lei 8.142/1990 — Conselhos e Conferências", freq: 86, tendencia: "estavel", prob: 0.9 },
        { tema: "Decreto 7.508/2011 — Região de Saúde e portas de entrada", freq: 78, tendencia: "alta", prob: 0.84 },
        { tema: "CF/88, arts. 194 a 200", freq: 76, tendencia: "estavel", prob: 0.82 },
        { tema: "Resolução CNS 453/2012", freq: 64, tendencia: "estavel", prob: 0.7 },
        { tema: "Determinantes sociais e sistemas de informação", freq: 55, tendencia: "alta", prob: 0.62 },
      ]},
      { disciplina: "Legislação Estadual (AL)", temas: [
        { tema: "Lei 5.247/1991 — licenças e afastamentos", freq: 84, tendencia: "estavel", prob: 0.88 },
        { tema: "Lei 5.247/1991 — regime disciplinar e prescrição", freq: 80, tendencia: "estavel", prob: 0.85 },
        { tema: "Provimento, posse, exercício e estágio probatório", freq: 76, tendencia: "estavel", prob: 0.82 },
        { tema: "Jornada, férias e vantagens", freq: 66, tendencia: "estavel", prob: 0.7 },
        { tema: "Constituição do Estado de Alagoas — servidores", freq: 58, tendencia: "estavel", prob: 0.64 },
      ]},
      { disciplina: "Ética no Serviço Público", temas: [
        { tema: "Lei 6.754/2006 — Comissões de Ética", freq: 82, tendencia: "alta", prob: 0.88 },
        { tema: "Lei 6.754/2006 — deveres e vedações", freq: 78, tendencia: "alta", prob: 0.85 },
        { tema: "Ética, moral e função pública", freq: 62, tendencia: "estavel", prob: 0.68 },
      ]},
      { disciplina: "Língua Portuguesa", temas: [
        { tema: "Compreensão e reescritura de textos", freq: 88, tendencia: "estavel", prob: 0.9 },
        { tema: "Morfossintaxe do período", freq: 82, tendencia: "estavel", prob: 0.86 },
        { tema: "Coesão, pontuação e concordância", freq: 76, tendencia: "estavel", prob: 0.8 },
      ]},
    ],

    /* Sem série histórica: o SESAU/AL 2026 é Edital nº 1, primeira edição.
       Inventar uma curva de 2018 a 2025 seria fabricar dado. */
    timeline: null,

    predicoes: [
      { tema: "Disfunções do assoalho pélvico — avaliação e cinesioterapia", disciplina: "Fisioterapia em Saúde da Mulher", score: 95,
        motivos: ["Núcleo do bloco 1 do edital (uroginecologia)", "Descrição do cargo cita avaliação cinésio-funcional uroginecológica", "Tema com escalas e graduações — terreno de troca numérica"] },
      { tema: "Linfedema pós-mastectomia e drenagem linfática manual", disciplina: "Fisioterapia em Saúde da Mulher", score: 93,
        motivos: ["Edital cita expressamente pré e pós-operatório de câncer de mama", "Contraindicações são armadilha clássica em item C/E", "Apareceu em prova CEBRASPE de fisioterapia analisada"] },
      { tema: "Lei 8.080/1990 — princípios e diretrizes do SUS", disciplina: "Legislação Aplicada ao SUS", score: 91,
        motivos: ["Dispositivo mais transcrito da legislação do SUS", "Art. 7º tem 14 incisos — rol longo favorece supressão e acréscimo"] },
      { tema: "Conselho de Saúde: natureza deliberativa e paridade", disciplina: "Legislação Aplicada ao SUS", score: 89,
        motivos: ["Lei 8.142 + Resolução CNS 453/2012 se completam", "Confusão consultivo x deliberativo é erro recorrente"] },
      { tema: "Lei 6.754/2006 — advertência x censura ética", disciplina: "Ética no Serviço Público", score: 87,
        motivos: ["Subitem nomeado no edital (5.1)", "Dois incisos consecutivos que só diferem pelo destinatário"] },
      { tema: "Estabilidade: 3 anos da CF x 24 meses da lei estadual", disciplina: "Legislação Estadual (AL)", score: 86,
        motivos: ["Lei estadual de 1991 não recepcionada quanto ao prazo pela EC 19/98", "Conflito entre norma estadual antiga e emenda posterior é alvo típico"] },
      { tema: "Fisioterapia no pré e pós-parto e no puerpério", disciplina: "Fisioterapia em Saúde da Mulher", score: 84,
        motivos: ["Bloco 4 do edital trata expressamente de gestação, parto e puerpério", "Conteúdo com muitas condutas contraindicadas por fase"] },
      { tema: "Decreto 7.508/2011 — Portas de Entrada e RENASES/RENAME", disciplina: "Legislação Aplicada ao SUS", score: 82,
        motivos: ["Duas siglas quase idênticas do mesmo decreto", "Atenção especializada NÃO é porta de entrada — inversão frequente"] },
      { tema: "Eletrotermofototerapia: indicações e contraindicações", disciplina: "Fisioterapia em Saúde da Mulher", score: 80,
        motivos: ["Bloco 3 do edital lista onze recursos terapêuticos", "Prova CEBRASPE analisada trouxe cinco itens só sobre laser"] },
      { tema: "Licenças da Lei 5.247/1991 — prazos e remuneração", disciplina: "Legislação Estadual (AL)", score: 78,
        motivos: ["Sete licenças com prazos distintos e regras de remuneração", "Terreno natural de troca numérica"] },
    ],
  },
};

/* ---------------- ESTRATÉGIAS (Módulo 10) ----------------
   Cada estratégia é uma técnica de resolução derivada de padrões
   recorrentes e verificáveis nas provas CEBRASPE em domínio público
   (cadernos e gabaritos oficiais publicados pela banca).

   Campos:
   - padrao       : o comportamento da banca que a técnica explora
   - passos       : procedimento executável, na ordem de aplicação
   - ganho        : o que a técnica entrega em prova
   - armadilha    : como a própria técnica falha se aplicada no automático
   - contraDNA    : slugs de DNA_BANCA que a técnica neutraliza
   - exemplo      : id da questão-exemplo no banco
   - trecho       : recorte EXATO do enunciado que materializa a estratégia
                    (validado como substring do enunciado — ver validação)
   - porqueTrecho : por que aquele recorte é o gatilho da técnica          */

const ESTRATEGIA_CATEGORIAS = [
  { id: "leitura",   nome: "Leitura e decomposição", ico: "◧",
    desc: "Como quebrar o item antes de julgá-lo. Ataca a arquitetura da assertiva, não o conteúdo." },
  { id: "lexical",   nome: "Radar lexical",          ico: "⚠",
    desc: "Palavras e conectivos que carregam viés estatístico de gabarito. Sinalizam onde olhar — não decidem sozinhas." },
  { id: "conteudo",  nome: "Conteúdo e conceitos",   ico: "▤",
    desc: "Checagens de conteúdo nos pontos em que a banca historicamente troca peças: rótulos, números, sujeitos e fontes." },
  { id: "prova",     nome: "Gestão de prova",        ico: "◈",
    desc: "Decisões de prova sob a regra 1 líquida (errado anula certo): responder, pular ou deixar em branco." },
];

const ESTRATEGIAS = [
  /* ============ LEITURA E DECOMPOSIÇÃO ============ */
  {
    id: "leitura-reversa", categoria: "leitura", nome: "Leitura reversa",
    desc: "Leia primeiro a última oração do item — é a posição preferida da banca para inserir a troca. Depois volte ao início já sabendo o que procurar.",
    aplicar: "Itens longos (3+ linhas) e reprodução literal de dispositivo constitucional.",
    padrao: "Em itens de literalidade, a banca costuma reproduzir o dispositivo de forma fiel e concentrar a alteração no fecho da assertiva. O começo correto cria adesão: o candidato reconhece o texto legal, baixa a guarda e valida o restante por inércia.",
    passos: [
      "Leia a última oração antes de qualquer outra coisa.",
      "Pergunte: essa parte final está mesmo na norma, ou foi acrescentada?",
      "Volte ao início e leia o item inteiro, agora só confirmando.",
    ],
    ganho: "Evita o efeito de adesão: você julga o fecho com a atenção que normalmente já gastou nas primeiras linhas.",
    armadilha: "Nem toda troca está no fim. Se o fecho estiver correto, leia o item inteiro — não conclua CERTO só porque o final passou no teste.",
    contraDNA: ["literalidade", "verdade-mais-falso"],
    exemplo: "DC-004", trecho: "inclusive as militares",
    porqueTrecho: "As três primeiras linhas reproduzem o art. 144, § 4º, da CF quase palavra por palavra. Toda a alteração está nas três últimas palavras: a apuração de infrações penais militares é justamente a exceção ressalvada pelo dispositivo.",
  },
  {
    id: "julgamento-blocos", categoria: "leitura", nome: "Julgamento por blocos",
    desc: "Divida a assertiva em orações e julgue cada uma como um item independente. Uma única oração falsa torna todo o item ERRADO.",
    aplicar: "Itens com duas afirmações encadeadas, especialmente ligadas por 'razão por que', 'de modo que', 'portanto'.",
    padrao: "O item de duas orações é o formato natural do C/E: a banca afirma algo verdadeiro e emenda uma consequência falsa. O conectivo causal ('razão por que', 'logo', 'assim') é o ponto de solda — a primeira oração compra a confiança que a segunda gasta.",
    passos: [
      "Marque os conectivos e quebre o item em orações numeradas.",
      "Julgue cada oração isoladamente: V ou F, sem olhar as vizinhas.",
      "Confira a relação entre elas: a segunda realmente decorre da primeira?",
      "Uma F em qualquer bloco (ou um nexo falso) ⇒ item ERRADO.",
    ],
    ganho: "Transforma um item complexo em dois ou três julgamentos simples, e impede que a parte verdadeira contamine a avaliação da parte falsa.",
    armadilha: "Duas orações verdadeiras não garantem item certo: o nexo entre elas também é objeto de julgamento. Verifique se a causa alegada é mesmo a causa.",
    contraDNA: ["verdade-mais-falso", "negacao-dupla"],
    exemplo: "PT-003", trecho: "razão por que sua supressão manteria a correção gramatical do período",
    porqueTrecho: "A primeira oração está correta (as vírgulas isolam um aposto explicativo). A falsidade mora inteira na consequência emendada pelo 'razão por que' — suprimir as vírgulas de um aposto quebra a correção do período.",
  },
  {
    id: "item-longo", categoria: "leitura", nome: "Imunidade ao item longo",
    desc: "Item extenso não é sinônimo de item errado. O comprimento é instrumento de cansaço, não indício de gabarito.",
    aplicar: "Constitucional, Direitos Humanos e itens com texto de apoio.",
    padrao: "Existe entre candidatos a crença de que 'item grande tende a ser errado'. Os gabaritos públicos não sustentam isso: itens longos aparecem como CERTO com frequência comparável à dos curtos. O que o comprimento faz é aumentar o custo de leitura no fim da prova, quando a atenção já caiu.",
    passos: [
      "Não use o comprimento como evidência de nada.",
      "Aplique o julgamento por blocos: o item longo vira 3 ou 4 itens curtos.",
      "Se todos os blocos resistirem, marque CERTO sem desconforto.",
    ],
    ganho: "Elimina um viés que só produz erro: descartar item correto por parecer 'grande demais para estar certo'.",
    armadilha: "O inverso também é viés. Item curto e elegante não é mais confiável — a troca de uma única palavra cabe em uma linha.",
    contraDNA: ["literalidade", "verdade-mais-falso"],
    exemplo: "DP-005", trecho: "se evitável, exclui o dolo, mas permite a punição por crime culposo, se previsto em lei",
    porqueTrecho: "Item longo, denso e integralmente CERTO. As duas metades reproduzem com precisão o regime do erro de tipo (art. 20 do CP) — inclusive a ressalva final 'se previsto em lei', que o candidato apressado lê como exigência inventada.",
  },

  /* ============ RADAR LEXICAL ============ */
  {
    id: "termos-absolutos", categoria: "lexical", nome: "Radar de termos absolutos",
    desc: "'Sempre, nunca, somente, todos, qualquer' sinalizam risco alto — mas confirme no conteúdo: a banca planta absolutos verdadeiros justamente para punir o atalho cego.",
    aplicar: "Em todo item — com a ressalva das normas que são literalmente absolutas.",
    padrao: "É o padrão de maior incidência do banco (≈82%). O termo absoluto costuma acompanhar item errado porque quase toda regra jurídica comporta exceção. Mas a banca conhece o atalho e o explora: em vedações constitucionais (tortura, racismo) e em regras de consumação, o absoluto é verdadeiro — e o candidato que marca ERRADO só pelo advérbio perde a questão.",
    passos: [
      "Localize o termo absoluto e sublinhe.",
      "Tente produzir UMA exceção concreta prevista em norma.",
      "Achou exceção ⇒ ERRADO. Não achou ⇒ o absoluto pode ser legítimo: julgue pelo conteúdo.",
    ],
    ganho: "Converte um chute 50/50 em decisão fundamentada, e evita o erro simétrico de marcar ERRADO só pela presença do advérbio.",
    armadilha: "Usar o radar como regra automática. O termo absoluto indica onde investigar — quem decide é a norma, não o advérbio.",
    contraDNA: ["termo-absoluto", "generalizacao"],
    exemplo: "DP-004", trecho: "ainda que a vantagem jamais venha a ser paga",
    porqueTrecho: "Contém 'jamais' e mesmo assim o gabarito é CERTO. A concussão é crime formal: consuma-se na exigência, e o recebimento é mero exaurimento. É o absoluto verdadeiro que a banca usa para punir quem decide pelo advérbio.",
  },
  {
    id: "prescindir", categoria: "lexical", nome: "Tradutor de 'prescindir'",
    desc: "Traduza antes de julgar: prescinde = DISPENSA; imprescindível = INDISPENSÁVEL; não prescinde = EXIGE.",
    aplicar: "Qualquer disciplina — é a pegadinha semântica mais rentável da banca.",
    padrao: "'Prescindir' é usado com frequência muito acima do que o português corrente justificaria, e quase sempre em itens cujo gabarito depende exatamente de entendê-lo. O erro aqui não é de conteúdo: o candidato sabe a matéria e inverte o sentido do verbo. A mesma armadilha vale para 'obstar', 'elidir', 'ilidir' e 'exsurgir'.",
    passos: [
      "Ao ver 'prescinde', reescreva a frase trocando por 'dispensa'.",
      "Ao ver 'não prescinde' ou 'imprescindível', troque por 'exige'.",
      "Releia a frase já traduzida e só então julgue o conteúdo.",
    ],
    ganho: "Separa dois erros que se confundem: não saber a matéria e não ter lido a frase. Só o segundo é evitável de graça.",
    armadilha: "Traduzir no automático sem reler a frase inteira — a negação pode estar em outro ponto da oração e inverter tudo de novo.",
    contraDNA: ["troca-conceito", "negacao-dupla"],
    exemplo: "LE-006", trecho: "prescindindo da demonstração de lesão ou de perigo concreto",
    porqueTrecho: "Traduzido, o trecho afirma que o crime DISPENSA a demonstração de perigo concreto — exatamente a definição de crime de perigo abstrato, o que torna o item CERTO. Quem lê 'prescindindo' como 'exigindo' inverte o gabarito com a matéria dominada.",
  },
  {
    id: "condicao-inventada", categoria: "lexical", nome: "Caça à condição inventada",
    desc: "'Desde que', 'condicionado a', 'exige-se', 'somente se' — verifique se a condição existe na norma. Condição inexistente = item errado.",
    aplicar: "Garantias fundamentais, leis especiais e procedimentos do CPP.",
    padrao: "A banca acopla ao final do item um requisito que soa técnico e razoável, mas que a norma não prevê. É eficiente porque o candidato valida o corpo do item (correto) e aceita a condição por parecer plausível — ninguém desconfia de uma exigência que 'faz sentido'.",
    passos: [
      "Isole a condição introduzida por 'desde que', 'salvo se', 'exige-se'.",
      "Pergunte: consigo apontar o dispositivo que cria essa condição?",
      "Não consigo ⇒ suspeite fortemente. Condição inexistente derruba o item inteiro.",
    ],
    ganho: "Ataca um padrão de alta incidência (≈63%) com uma pergunta única e objetiva.",
    armadilha: "Nem toda condição é inventada — o Direito é cheio de requisitos legítimos. A pergunta certa não é 'parece razoável?', e sim 'está na norma?'.",
    contraDNA: ["exigencia-inexistente", "restricao-indevida"],
    exemplo: "PP-005", trecho: "desde que corroborado por outros elementos de prova",
    porqueTrecho: "A condição é plausível e por isso funciona. Mas não existe: o silêncio do acusado não pode ser interpretado em prejuízo da defesa em hipótese alguma (art. 5º, LXIII, da CF; art. 186, parágrafo único, do CPP). A condição inventada tenta legitimar uma premissa já inconstitucional.",
  },
  {
    id: "negacao-dupla", categoria: "lexical", nome: "Desembaralhar a negação dupla",
    desc: "'Não é incorreto afirmar', 'é inegável que não se pode negar' — reescreva na forma afirmativa antes de julgar.",
    aplicar: "Itens que começam com construções negativas empilhadas.",
    padrao: "A banca embaralha o sentido sem alterar o conteúdo: duas negativas se anulam e produzem uma afirmação. O candidato gasta a atenção decodificando a sintaxe e chega ao conteúdo já sem margem — e então erra um item cuja matéria domina.",
    passos: [
      "Conte as negações da assertiva (não, in-, sem, nega, inegável).",
      "Número par ⇒ afirmação. Número ímpar ⇒ negação.",
      "Reescreva o item na forma afirmativa, em voz alta se possível.",
      "Julgue a frase reescrita, ignorando a redação original.",
    ],
    ganho: "Neutraliza um custo puramente sintático: depois de reescrito, o item vira uma questão comum de conteúdo.",
    armadilha: "Cuidado com negações lexicais disfarçadas — 'inviolável', 'impossibilidade', 'vedado' contam como negação e podem quebrar a paridade.",
    contraDNA: ["negacao-dupla"],
    exemplo: "DC-030", trecho: "É inegável que a casa não constitui asilo inviolável do indivíduo",
    porqueTrecho: "Três marcas de negação empilhadas ('inegável', 'não', 'inviolável'). Reescrito: 'a casa não é asilo inviolável' — o oposto do art. 5º, XI, da CF. Sem reescrever, o candidato julga a sintaxe em vez da norma.",
  },

  /* ============ CONTEÚDO E CONCEITOS ============ */
  {
    id: "pares-espelhados", categoria: "conteudo", nome: "Checagem de pares espelhados",
    desc: "Conceitos que andam em dupla (anulação×revogação, excesso×desvio, ransomware×phishing) são o alvo favorito de inversão. Monte o par correto ANTES de ler a definição da banca.",
    aplicar: "Direito Administrativo, Penal e Informática.",
    padrao: "Sempre que dois institutos se opõem de forma simétrica, a banca escreve as duas definições corretamente e troca os rótulos entre si. Reler o item não resolve: as definições estão certas, e a leitura confirma o que já se leu. Só a comparação com o par montado de memória expõe a inversão.",
    passos: [
      "Reconheça o par citado e escreva a definição correta de cada lado, de memória.",
      "Só então leia o item e sobreponha ao seu par.",
      "Se as definições estiverem corretas mas cruzadas ⇒ ERRADO.",
    ],
    ganho: "Cria um gabarito próprio antes da leitura, tornando a inversão visível em vez de plausível.",
    armadilha: "Montar o par errado de memória confirma a inversão da banca. Se não tiver segurança no par, essa técnica não se aplica — recorra ao conteúdo.",
    contraDNA: ["troca-conceito"],
    exemplo: "DA-005", trecho: "O desvio de poder configura-se quando o agente público atua fora dos limites de sua competência",
    porqueTrecho: "A definição transcrita é impecável — só que é a de EXCESSO de poder. O desvio ocorre quando o agente é competente mas persegue finalidade diversa do interesse público. Duas definições certas, rótulos trocados.",
  },
  {
    id: "checagem-numerica", categoria: "conteudo", nome: "Ponto de checagem numérico",
    desc: "Todo número (prazo, quantidade, fração, idade, pena) é ponto de verificação obrigatório. Pare, recupere o número da norma, compare.",
    aplicar: "Leis penais especiais, CPP e prazos processuais.",
    padrao: "A alteração numérica é a troca mais barata de produzir e uma das mais difíceis de perceber: o item permanece inteiramente correto salvo por um dígito. A banca prefere desvios pequenos e plausíveis (3 em vez de 4; 24 em vez de 48 horas), porque números próximos do verdadeiro não disparam estranhamento.",
    passos: [
      "Circule todo número do item, por escrito.",
      "Para cada um, recupere o valor da norma antes de seguir lendo.",
      "Divergiu ⇒ ERRADO, sem necessidade de avaliar o resto.",
    ],
    ganho: "Um único ponto de checagem objetivo resolve o item inteiro, sem depender de interpretação.",
    armadilha: "Só funciona com o número memorizado corretamente. Sem isso, a checagem vira confirmação do palpite — prefira deixar em branco a validar de memória insegura.",
    contraDNA: ["troca-numerica"],
    exemplo: "LE-007", trecho: "três ou mais pessoas",
    porqueTrecho: "Todo o resto do conceito legal de organização criminosa está reproduzido com fidelidade. A Lei 12.850/2013 exige 4 ou mais pessoas — o item troca um único algarismo e o gabarito inteiro vira ERRADO.",
  },
  {
    id: "quem-pratica", categoria: "conteudo", nome: "Quem pratica o ato?",
    desc: "Antes de julgar a conduta descrita, confirme o SUJEITO: delegado, juiz, MP, PF, PRF? A ação pode ser legítima com o agente errado.",
    aplicar: "Inquérito policial, competências do art. 144 da CF e atos processuais.",
    padrao: "A banca descreve um ato que de fato existe no ordenamento e o atribui a quem não tem atribuição para praticá-lo. É especialmente rentável em provas de carreira policial, onde o candidato reconhece o instituto e não questiona o titular. O verbo está certo; o sujeito, não.",
    passos: [
      "Sublinhe o sujeito da oração principal antes de ler o predicado.",
      "Pergunte: a norma atribui esse ato a esse agente?",
      "Se o ato existe mas pertence a outro agente ⇒ ERRADO.",
    ],
    ganho: "Um único teste resolve toda uma família de itens de competência e atribuição.",
    armadilha: "Atenção a atos de titularidade compartilhada — investigar, requisitar perícia e representar por cautelares admitem mais de um legitimado.",
    contraDNA: ["troca-sujeito"],
    exemplo: "PP-002", trecho: "A autoridade policial poderá mandar arquivar",
    porqueTrecho: "O arquivamento existe e a atipicidade é fundamento válido — mas o art. 17 do CPP é expresso: a autoridade policial NÃO pode arquivar inquérito. O ato é real, o titular é outro.",
  },
  {
    id: "regra-rotulo", categoria: "conteudo", nome: "Regra do rótulo",
    desc: "Quando a definição estiver perfeita, desconfie do NOME definido. A banca raramente erra a definição — ela troca o termo.",
    aplicar: "Informática, Segurança da Informação e institutos jurídicos nominados.",
    padrao: "É a variante 'de um lado só' dos pares espelhados: em vez de cruzar duas definições, o item apresenta uma definição correta sob o rótulo errado. A leitura confirmatória falha porque o candidato avalia a definição — que está certa — e não o nome.",
    passos: [
      "Leia a definição ignorando deliberadamente o nome dado.",
      "Nomeie o conceito você mesmo, antes de olhar o rótulo do item.",
      "Compare o seu nome com o do item. Divergiu ⇒ ERRADO.",
    ],
    ganho: "Inverte a ordem natural de leitura e faz o rótulo — e não a definição — ser o objeto do julgamento.",
    armadilha: "Alguns institutos admitem mais de uma denominação aceita. Antes de marcar ERRADO, verifique se não se trata de sinonímia consagrada.",
    contraDNA: ["troca-conceito"],
    exemplo: "IN-001", trecho: "Denomina-se ransomware",
    porqueTrecho: "A definição descreve phishing com precisão técnica — engenharia social, mensagem fraudulenta, captura de credenciais. Nada nela está errado, exceto o rótulo colado na primeira palavra. Ransomware sequestra dados por criptografia e exige resgate.",
  },
  {
    id: "sumula-existe", categoria: "conteudo", escopo: "juridica", nome: "A súmula existe mesmo?",
    desc: "Número de súmula que você não reconhece é sinal de alerta. A banca inventa enunciados com aparência de autoridade.",
    aplicar: "Itens abertos por 'Conforme a Súmula nº X', 'Segundo entendimento sumulado', 'Nos termos da SV nº X'.",
    padrao: "A citação numerada transfere autoridade e desliga a checagem: o candidato passa a julgar se o conteúdo é razoável, não se a fonte existe. A banca explora isso de duas formas — número fictício com conteúdo plausível, ou número real com enunciado adulterado.",
    passos: [
      "Ao ver citação numerada, pergunte primeiro: eu conheço essa súmula?",
      "Julgue o CONTEÚDO por conta própria, ignorando a autoridade citada.",
      "Se o conteúdo contraria o que você sabe da matéria, não recue por causa do número.",
    ],
    ganho: "Impede que a aparência de fonte oficial sobreponha o conhecimento que você já tem do tema.",
    armadilha: "Não desconfie de toda citação: súmulas verdadeiras são cobradas o tempo todo, e desconhecê-las não as torna falsas. O teste é o conteúdo, não a sua memória do número.",
    contraDNA: ["juris-inventada"],
    exemplo: "DP-077", trecho: "Conforme a Súmula 912 do STJ",
    porqueTrecho: "A súmula não existe — e o conteúdo entrega a fraude sozinho: a insignificância nunca é de aplicação 'obrigatória e automática', pois depende dos vetores fixados pelo STF (mínima ofensividade, ausência de periculosidade social, reduzido grau de reprovabilidade e inexpressividade da lesão).",
  },
  {
    id: "juris-mais-lei", categoria: "conteudo", escopo: "juridica", nome: "Jurisprudência + lei: confira as duas pontas",
    desc: "Itens que misturam texto legal e entendimento dos tribunais só fecham para quem conhece os dois lados. Valide separadamente.",
    aplicar: "Busca domiciliar, insignificância, Maria da Penha, porte de arma.",
    padrao: "A banca combina um dispositivo legal com uma tese do STF/STJ, e altera apenas uma das pontas. Quem domina só a lei valida a parte legal e aceita a jurisprudencial; quem domina só a jurisprudência faz o inverso. O item é construído para separar quem estudou os dois.",
    passos: [
      "Separe o que é texto de lei do que é entendimento de tribunal.",
      "Valide a ponta legal isoladamente.",
      "Valide a tese jurisprudencial isoladamente.",
      "Só marque CERTO se as duas resistirem.",
    ],
    ganho: "Evita o erro assimétrico de validar o item inteiro com base na metade que você domina.",
    armadilha: "Teses mudam. Entendimento superado citado como vigente torna o item errado mesmo com a lei corretamente transcrita.",
    contraDNA: ["juris-mais-lei"],
    exemplo: "PP-004", trecho: "mesmo durante a noite, quando amparado em fundadas razões",
    porqueTrecho: "Item CERTO que exige as duas pontas: a inviolabilidade domiciliar e sua exceção de flagrante (art. 5º, XI, da CF) mais a tese do RE 603.616 — fundadas razões, justificadas a posteriori. Quem só tem a letra da CF estranha o 'durante a noite' e marca errado.",
  },
  {
    id: "contraexemplo", categoria: "conteudo", nome: "Procure o contraexemplo",
    desc: "Diante de uma regra estendida a 'todos' ou 'em regra', tente produzir um único caso contrário. Um basta para derrubar o item.",
    aplicar: "Itens que generalizam classificações ou atributos de um instituto.",
    padrao: "A generalização indevida parte de um núcleo verdadeiro e o estende além do alcance da norma. É diferente do termo absoluto puro: aqui o problema não é o advérbio, é o salto lógico — a banca usa uma característica frequente como se fosse necessária.",
    passos: [
      "Identifique a classe generalizada ('todos os atos de X são Y').",
      "Busque ativamente UM membro da classe que não tenha o atributo.",
      "Encontrou ⇒ ERRADO. A regra não precisa cair inteira: basta uma exceção.",
    ],
    ganho: "Substitui a pergunta difícil ('a regra é sempre verdadeira?') por uma fácil ('consigo lembrar de um caso contrário?').",
    armadilha: "'Em regra' e 'via de regra' admitem exceção por definição — nesses casos, o contraexemplo isolado não derruba o item. Verifique se a exceção é a hipótese comum ou a rara.",
    contraDNA: ["generalizacao", "termo-absoluto"],
    exemplo: "DA-001", trecho: "todos os atos decorrentes do poder de polícia administrativa são dotados de discricionariedade",
    porqueTrecho: "Basta um contraexemplo: a licença é ato vinculado de polícia administrativa — preenchidos os requisitos legais, a Administração deve concedê-la. Um único caso derruba o 'todos'.",
  },
  {
    id: "atualizacao-legislativa", categoria: "conteudo", escopo: "juridica", nome: "Radar de atualização legislativa",
    desc: "Lei ou decisão dos últimos 2 anos tem alta chance de cobrança literal — e, nesses casos, com viés de gabarito CERTO.",
    aplicar: "Revisão pré-prova: liste as novidades do edital e leia a letra da lei nova.",
    padrao: "Novidade legislativa é material de prova de baixo custo para a banca: o texto é curto, ainda não tem jurisprudência consolidada e discrimina bem quem manteve a revisão em dia. Na estreia de um dispositivo, a cobrança tende a ser mais literal do que interpretativa — o que aumenta a proporção de itens CERTO.",
    passos: [
      "Antes da prova, liste toda lei/tese com menos de 2 anos dentro do edital.",
      "Leia a letra do dispositivo novo, não apenas o resumo do professor.",
      "Fixe números da lei nova: penas, prazos e quóruns são o recorte preferido.",
    ],
    ganho: "Converte um bloco previsível da prova em acerto de baixo esforço.",
    armadilha: "Viés de CERTO não é garantia. A banca também troca a pena ou o artigo da lei nova — o radar indica o tema, não o gabarito.",
    contraDNA: ["literalidade", "troca-numerica"],
    exemplo: "LP-002", trecho: "deixou de ser qualificadora do homicídio e passou a constituir tipo penal autônomo",
    porqueTrecho: "Reprodução fiel da mudança trazida pela Lei 14.994/2024, que criou o art. 121-A do CP. É o formato típico da novidade recém-editada: literal e CERTO — mas com a pena (20 a 40 anos) exposta no fecho, pronta para ser trocada em outra prova.",
  },

  /* ============ GESTÃO DE PROVA ============ */
  {
    id: "gestao-branco", categoria: "prova", nome: "Gestão do branco (1 líquida)",
    desc: "No CEBRASPE, errado anula certo. Convicção ou fundamento parcial → responda; chute puro 50/50 sem nenhum indício → em regra, deixe em branco.",
    aplicar: "Estratégia de prova — treine no simulador com correção 1 líquida.",
    padrao: "A regra 1 líquida torna o chute aleatório neutro no valor esperado (50% × +1 mais 50% × −1 = 0), mas com variância alta e custo real de tempo. O ganho não vem de chutar mais: vem de usar as heurísticas de padrão para sair do 50/50 antes de decidir.",
    passos: [
      "Classifique o item: domino / tenho indício / não faço ideia.",
      "'Domino' e 'tenho indício' ⇒ responda.",
      "'Não faço ideia' ⇒ aplique um radar (absoluto, condição, número, sujeito).",
      "Se nenhum radar acender, deixe em branco e siga — o tempo vale mais.",
    ],
    ganho: "Protege a pontuação líquida e devolve tempo para os itens em que seu conhecimento decide.",
    armadilha: "Branco em excesso também reprova. Fundamento parcial não é chute: se um radar acendeu, você já não está em 50/50 e deve responder.",
    contraDNA: [],
    exemplo: null, trecho: null, porqueTrecho: null,
  },
];

/* Correção estilo CEBRASPE: 1 errada anula 1 certa */
const REGRA_CORRECAO = { acerto: 1, erro: -1, branco: 0 };

/* ---------------- TRILHAS (editais) ----------------
   Cada trilha é um edital: o conjunto de disciplinas que caem naquela
   prova e quantos itens cada uma vale.

   Esta tabela é a ÚNICA fonte de peso do app. O Plano de Estudo prioriza
   por ela (js/engine.js, planoEstudoDirigido) e o validador mede cobertura
   pela mesma tabela — antes o plano derivava o peso da média dos scores de
   PREDICOES, que só cobre disciplinas específicas, e as básicas caíam num
   padrão genérico de 65, sistematicamente despriorizadas.

   Uma questão pertence a uma trilha pela DISCIPLINA, não por `q.concurso`.
   Isso é o que permite as 34 questões de Língua Portuguesa servirem PC-AL e
   SESAU/AL sem duplicar nada: 93% do banco é lei federal ou matéria comum,
   e duplicar por carreira quebraria a revisão espaçada (mesmo conteúdo em
   dois IDs) e dobraria a manutenção de cada atualização legislativa.
   `q.concurso` continua existindo, mas como procedência — o estilo de prova
   que a questão imita —, não como escopo.

   Os editais do Cebraspe dão o total por prova, não a divisão interna por
   disciplina; a repartição igual dentro de cada prova é a hipótese neutra,
   e ainda assim muito mais ancorada que um número arbitrário. */
const EDITAIS = {
  PCAL: {
    id: "PCAL",
    nome: "Polícia Civil de Alagoas",
    curto: "PC-AL",
    fonte: "Edital nº 1 - PC/AL, de 2 de julho de 2026 (Cebraspe)",
    /* O edital nº 1/2026 provê vagas SOMENTE para Agente e Escrivão — o
       título e o item 20.2.4 ("conhecimentos específicos para os cargos de
       Agente de Polícia e Escrivão de Polícia") não deixam margem. Delegado,
       Perito Criminal e Papiloscopista constavam aqui por herança de editais
       anteriores da PC/AL e foram removidos: ofereciam filtro para cargo que
       não existe neste concurso. */
    cargos: ["Escrivão", "Agente"],
    dataProva: "2026-12-06",
    /* Item 7.2: as objetivas e a discursiva têm, juntas, 4 h 30 min. O tempo
       que sobra para os 120 itens depende de quanto a discursiva consumir —
       por isso a análise de ritmo trabalha com uma reserva declarada, e não
       com os 270 minutos cheios. */
    duracaoMin: 270,
    /* Corte oficial, item 8.11.4/8.11.5: N1 = (50 − np1) × 0,2, N2 =
       (70 − np2) × 0,3 e N3 = (120 − nT) × 0,3, desprezada a parte não
       inteira. Sem itens anulados dá 10, 21 e 36 pontos. Como cada acerto
       vale +1 e cada erro −1, quem responde tudo precisa de 2A − N ≥ corte,
       ou seja 30/50, 46/70 e 78/120 acertos. É o piso de eliminação, não a
       nota de aprovação — que depende do limite de classificados. */
    corte: {
      p1: { itens: 50, pontos: 10, acertos: 30 },
      p2: { itens: 70, pontos: 21, acertos: 46 },
      total: { itens: 120, pontos: 36, acertos: 78 },
    },
    /* 120 itens: 50 na P1 (básicos, 5 disciplinas) e 70 na P2 (específicos,
       9 disciplinas). "Atualidades e Ética no Serviço Público" é um único
       bloco de 10 itens no edital e aparece como duas disciplinas no banco,
       então cada uma leva metade. */
    itensPorDisciplina: {
      /* P1 — conhecimentos básicos: 50 itens */
      "Língua Portuguesa": 10,
      "TI e Segurança Cibernética": 10,
      "Raciocínio Lógico-Matemático": 10,
      "Direitos Humanos": 10,
      "Atualidades": 5,
      "Ética no Serviço Público": 5,
      /* P2 — conhecimentos específicos: 70 itens */
      "Direito Penal": 7.8,
      "Processo Penal": 7.8,
      "Direito Constitucional": 7.8,
      "Direito Administrativo": 7.8,
      "Legislação Institucional (AL)": 7.8,
      "Legislação Especial": 7.8,
      "Contabilidade e Análise Financeira": 7.8,
      "Estatística": 7.8,
      "Crimes Cibernéticos e Segurança Digital": 7.8,
    },
  },

  SESAUAL_FISIO: {
    id: "SESAUAL_FISIO",
    nome: "Fisioterapia — SESAU/AL",
    curto: "SESAU-AL",
    fonte: "Edital nº 1 - SESAU/AL, de 18 de junho de 2026, com conteúdo de Fisioterapia republicado pelo Edital nº 2, de 16 de julho de 2026 (Cebraspe)",
    cargos: ["Especialista em Saúde — Fisioterapia"],
    dataProva: "2026-11-01",
    duracaoMin: 270,
    /* Mesma sistemática de correção da PC/AL — prova de 120 itens, 50 + 70,
       no método Cebraspe com erro anulando acerto. */
    corte: {
      p1: { itens: 50, pontos: 10, acertos: 30 },
      p2: { itens: 70, pontos: 21, acertos: 46 },
      total: { itens: 120, pontos: 36, acertos: 78 },
    },
    /* 120 itens: 50 na P1 e 70 na P2. Prova em 1º/11/2026.

       Duas particularidades deste edital que mudam o que estudar:

       1. NÃO há Raciocínio Lógico-Matemático nem Informática nos básicos —
          disciplinas que existem no banco por causa de PC-AL e que aqui não
          valem item nenhum. Por isso ficam de fora desta tabela.

       2. Atualidades cai SOMENTE na prova discursiva ("ATUALIDADES (SOMENTE
          PARA A PROVA DISCURSIVA)", item 16.2.3). Como esta tabela pesa a
          prova objetiva, Atualidades não entra — as questões C/E do banco
          servem como repertório para a redação, não como treino de item.

       O específico não é fisioterapia geral: o edital delimita saúde da
       mulher (uroginecologia, coloproctologia, obstetrícia, mastologia e
       oncologia). Ortopedia, respiratória e neurofuncional não caem. */
    itensPorDisciplina: {
      /* P1 — conhecimentos básicos: 50 itens, 4 disciplinas na objetiva */
      "Língua Portuguesa": 12.5,
      "Ética no Serviço Público": 12.5,
      "Legislação Estadual (AL)": 12.5,
      "Legislação Aplicada ao SUS": 12.5,
      /* P2 — conhecimentos específicos: 70 itens num bloco único */
      "Fisioterapia em Saúde da Mulher": 70,
    },
  },
};

/* Mantido por compatibilidade: `EDITAL_PCAL2026` era a constante única
   antes das trilhas e ainda pode ser referenciada em lotes antigos. */
const EDITAL_PCAL2026 = EDITAIS.PCAL;

/* Disciplinas cujo conteúdo é norma jurídica. Serve para escopar as
   estratégias que só fazem sentido diante de lei — "Radar de atualização
   legislativa", "A súmula existe mesmo?" e "Jurisprudência + lei".

   Sem esse recorte, o casamento por `pegadinha` sozinho produzia absurdos:
   189 questões de Português, Estatística, RLM e TI recebiam a orientação de
   "ler a letra da lei nova", porque compartilham com o Direito o padrão
   `literalidade` — que ali significa conferir a fórmula, não o artigo.

   Crimes Cibernéticos e Contabilidade entram na lista por terem base legal
   real no edital (Marco Civil, LGPD, art. 154-A; Lei 4.320). */
const DISCIPLINAS_JURIDICAS = [
  "Direito Penal",
  "Processo Penal",
  "Direito Constitucional",
  "Direito Administrativo",
  "Legislação Institucional (AL)",
  "Legislação Especial",
  "Direitos Humanos",
  "Ética no Serviço Público",
  "Crimes Cibernéticos e Segurança Digital",
  "Contabilidade e Análise Financeira",
  /* Trilha SESAU/AL: ambas são norma (CF arts. 194-200, Leis 8.080 e
     8.142, Decreto 7.508, Constituição estadual, Lei 5.247/1991), então
     recebem as estratégias de radar legislativo e checagem de literalidade.
     "Fisioterapia em Saúde da Mulher" fica de fora de propósito: ali
     `literalidade` significa conferir o protocolo clínico, não o artigo. */
  "Legislação Aplicada ao SUS",
  "Legislação Estadual (AL)",
];
