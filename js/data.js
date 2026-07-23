/* =====================================================================
   CEBRASPE LAB — Camada de Dados
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
];

const CARGOS = ["Escrivão", "Agente", "Delegado", "Perito Criminal", "Papiloscopista"];

/* ---------------- DNA DA BANCA (Módulo 4) ----------------
   incidencia = índice estimado (%) de aparição do padrão nas
   provas C/E de carreiras policiais analisadas. */
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
    concurso: "PCAL", cargo: ["Escrivão","Agente","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "Servidor público que, valendo-se da facilidade proporcionada pela sua qualidade de funcionário, subtrai computador pertencente à repartição em que trabalha, embora não tenha a posse do bem, pratica o crime de peculato.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "embora não tenha a posse",
    cognitivo: {
      motivo: "Testar se o candidato conhece o peculato-furto (art. 312, § 1º, CP), que dispensa a posse prévia do bem.",
      mede: "Distinção entre peculato-apropriação, peculato-desvio e peculato-furto.",
      pegadinhaDesc: "A expressão 'embora não tenha a posse' induz o candidato a pensar em furto comum e marcar E.",
      ondeErra: "Quem decorou apenas o caput do art. 312 ('de que tem a posse') marca E.",
      palavraCritica: "posse",
      tecnica: "Ao ver crime funcional + subtração sem posse, lembre do § 1º: peculato-furto.",
      regraMental: "Tem posse → apropria/desvia. Não tem posse, mas se vale do cargo → peculato-furto. Sem vínculo com o cargo → furto comum."
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
    concurso: "PF", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.85,
    enunciado: "O crime de corrupção passiva somente se consuma com o efetivo recebimento, pelo funcionário público, da vantagem indevida solicitada.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "somente",
    cognitivo: {
      motivo: "Aferir se o candidato sabe que a corrupção passiva é crime formal.",
      mede: "Momento consumativo dos crimes formais contra a Administração.",
      pegadinhaDesc: "Cria a exigência inexistente do 'efetivo recebimento' e a blinda com 'somente'.",
      ondeErra: "O candidato imagina que sem dinheiro na mão não há crime consumado.",
      palavraCritica: "somente / efetivo recebimento",
      tecnica: "Crimes formais consumam-se com a conduta, não com o resultado.",
      regraMental: "SOLICITOU → consumou. Receber é mero exaurimento."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "Segundo o STF, o princípio da insignificância aplica-se aos crimes praticados com violência ou grave ameaça à pessoa, desde que o valor do bem subtraído seja ínfimo.",
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "violência ou grave ameaça",
    cognitivo: {
      motivo: "Cobrar os vetores da insignificância fixados pelo STF (HC 84.412).",
      mede: "Limites jurisprudenciais do princípio da insignificância.",
      pegadinhaDesc: "O 'desde que o valor seja ínfimo' soa razoável e desvia a atenção da violência/grave ameaça.",
      ondeErra: "Foca no valor ínfimo e esquece que violência/grave ameaça afasta a atipicidade material.",
      palavraCritica: "violência ou grave ameaça",
      tecnica: "Insignificância exige ausência de periculosidade e reduzido grau de reprovabilidade — incompatíveis com violência.",
      regraMental: "Roubo NUNCA é insignificante (Jurisprudência pacífica: STF e STJ)."
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
      mede: "Consumação da concussão.",
      pegadinhaDesc: "O 'jamais' tenta ativar o reflexo de marcar E diante de termo absoluto — aqui ele está correto.",
      ondeErra: "Quem aplica cegamente a regra 'termo absoluto = errado'.",
      palavraCritica: "exige",
      tecnica: "As heurísticas de palavras são probabilísticas: sempre confirme com o conteúdo.",
      regraMental: "EXIGIR = concussão (formal). SOLICITAR = corrupção passiva."
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
    concurso: "PCAL", cargo: ["Delegado","Escrivão"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.7,
    enunciado: "O erro de tipo essencial inevitável exclui o dolo e a culpa, tornando o fato atípico; se evitável, exclui o dolo, mas permite a punição por crime culposo, se previsto em lei.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "se previsto em lei",
    cognitivo: {
      motivo: "Cobrar a estrutura do art. 20 do CP com precisão terminológica.",
      mede: "Consequências do erro de tipo inevitável × evitável.",
      pegadinhaDesc: "Não há pegadinha: é literalidade correta. A banca alterna itens 'limpos' para calibrar a prova.",
      ondeErra: "Candidato desconfia demais e procura erro onde não existe.",
      palavraCritica: "inevitável / evitável",
      tecnica: "Checar os dois pares: inevitável→exclui dolo E culpa; evitável→exclui só o dolo.",
      regraMental: "Erro de TIPO mexe com o DOLO. Erro de PROIBIÇÃO mexe com a CULPABILIDADE."
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
      mede: "Infrações que não admitem tentativa.",
      pegadinhaDesc: "A justificativa ('resultado não desejado') é verdadeira, mas prova exatamente o contrário da conclusão.",
      ondeErra: "Valida a premissa correta e aceita a conclusão errada.",
      palavraCritica: "tentativa + culposos",
      tecnica: "Tentar exige QUERER o resultado; na culpa, o agente não quer — logo, não há o que 'tentar'.",
      regraMental: "CCPHUC não admitem tentativa: Culposos, Contravenções, Preterdolosos, Habituais, Unissubsistentes, Condicionados."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.7,
    enunciado: "Age em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão futura, porém certa, a direito seu ou de outrem.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "futura",
    cognitivo: {
      motivo: "Literalidade do art. 25 do CP com uma palavra trocada.",
      mede: "Requisito da atualidade/iminência da agressão.",
      pegadinhaDesc: "Troca 'atual ou iminente' por 'futura, porém certa'.",
      ondeErra: "Leitura rápida: a frase inteira 'soa' como o art. 25.",
      palavraCritica: "futura",
      tecnica: "Em itens 'literais', escaneie os 4 pontos críticos: sujeito, verbo, tempo e condição.",
      regraMental: "Agressão FUTURA → não é legítima defesa (pode configurar inexigibilidade? Não: é fato típico e ilícito)."
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
      mede: "Efeitos da reparação do dano no peculato culposo.",
      pegadinhaDesc: "Item literal correto — a banca costuma trocar 'metade' por 'um terço' ou aplicar a regra ao peculato doloso; aqui não trocou.",
      ondeErra: "Confunde com arrependimento posterior (art. 16: redução de 1/3 a 2/3) ou aplica ao peculato doloso.",
      palavraCritica: "culposo",
      tecnica: "Antes de julgar, confirme: o item fala do peculato CULPOSO? Só nele há extinção da punibilidade.",
      regraMental: "Culposo + reparou antes do trânsito em julgado = punibilidade extinta. Doloso = mero arrependimento posterior."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "A apresentação espontânea do autor do fato à autoridade policial impede a lavratura do auto de prisão em flagrante, mas não obsta a decretação da prisão preventiva, se presentes os seus pressupostos.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "apresentação espontânea",
    cognitivo: {
      motivo: "Cobrar entendimento consolidado sobre apresentação espontânea.",
      mede: "Limites do estado de flagrância.",
      pegadinhaDesc: "O candidato pode achar que a apresentação espontânea 'blinda' contra qualquer prisão.",
      ondeErra: "Marca E por acreditar que ainda caberia flagrante, ou por achar que nada mais caberia.",
      palavraCritica: "impede... mas não obsta",
      tecnica: "Separe os dois períodos e julgue cada um: (1) impede flagrante? Sim. (2) cabe preventiva? Sim.",
      regraMental: "Quem se apresenta não está 'sendo perseguido nem encontrado' — não há situação flagrancial; cautelares seguem possíveis."
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
    concurso: "PCAL", cargo: ["Escrivão","Agente","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.9,
    enunciado: "A autoridade policial poderá mandar arquivar autos de inquérito quando, ao final das investigações, concluir pela atipicidade da conduta investigada.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "autoridade policial + arquivar",
    cognitivo: {
      motivo: "Cobrar o art. 17 do CPP, recorrentíssimo em provas de carreiras policiais.",
      mede: "Vedação ao arquivamento pelo delegado.",
      pegadinhaDesc: "Atribui ao delegado ato privativo da esfera ministerial/judicial.",
      ondeErra: "A 'atipicidade' parece justificar o arquivamento e desvia do sujeito da frase.",
      palavraCritica: "autoridade policial",
      tecnica: "Em itens de IP, sempre pergunte QUEM pratica o ato.",
      regraMental: "Delegado NÃO arquiva IP, em nenhuma hipótese (CPP, art. 17)."
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
      mede: "Natureza informativa do IP e teoria das nulidades.",
      pegadinhaDesc: "Mistura conceito verdadeiro (frutos da árvore envenenada) com consequência falsa (contaminação automática).",
      ondeErra: "O nome bonito da teoria dá aparência de sofisticação e induz o C.",
      palavraCritica: "necessariamente",
      tecnica: "IP é peça informativa: vício ali não anula a ação penal; prova ILÍCITA, sim, é desentranhada e contamina as derivadas.",
      regraMental: "Irregularidade no IP → não anula ação penal. Prova ilícita → inadmissível (art. 5º, LVI, CF; art. 157, CPP)."
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
    concurso: "PF", cargo: ["Agente","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.9,
    enunciado: "Conforme o STF, o ingresso forçado em domicílio sem mandado judicial é lícito, mesmo durante a noite, quando amparado em fundadas razões, devidamente justificadas a posteriori, que indiquem a ocorrência de situação de flagrante delito no interior da residência.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "fundadas razões",
    cognitivo: {
      motivo: "Cobrar a tese do RE 603.616 (repercussão geral), presença constante em provas policiais.",
      mede: "Requisitos do ingresso domiciliar sem mandado.",
      pegadinhaDesc: "O 'mesmo durante a noite' ativa o alarme do candidato — mas flagrante autoriza a qualquer hora.",
      ondeErra: "Confunde a exigência de 'dia' (que vale para o cumprimento de mandado) com a hipótese de flagrante.",
      palavraCritica: "flagrante delito",
      tecnica: "Divida o art. 5º, XI: flagrante/desastre/socorro = a qualquer hora; ordem judicial = durante o dia.",
      regraMental: "Flagrante não tem hora. Mandado tem: dia."
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
      mede: "Alcance do direito ao silêncio (nemo tenetur se detegere).",
      pegadinhaDesc: "O 'desde que corroborado' cria condição inexistente que dá aparência de razoabilidade.",
      ondeErra: "A condição falsa faz a frase parecer equilibrada e tecnicamente correta.",
      palavraCritica: "em prejuízo",
      tecnica: "Garantias fundamentais não admitem 'meio-termo' criado pela banca.",
      regraMental: "Silêncio NUNCA prejudica. Não importa o 'desde que'."
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
    concurso: "PCAL", cargo: ["Perito Criminal","Papiloscopista","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "A cadeia de custódia tem início com o reconhecimento do vestígio, assim entendido o ato de distinguir um elemento como de potencial interesse para a produção da prova pericial.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "reconhecimento",
    cognitivo: {
      motivo: "Cobrar o art. 158-A e as 10 etapas incluídas pelo Pacote Anticrime — tema quente para peritos e papiloscopistas.",
      mede: "Etapas da cadeia de custódia (Lei 13.964/2019).",
      pegadinhaDesc: "A banca costuma trocar 'reconhecimento' por 'coleta' ou 'isolamento' como marco inicial; aqui manteve o correto.",
      ondeErra: "Acha que a cadeia só começa quando o perito coleta o vestígio.",
      palavraCritica: "início com o reconhecimento",
      tecnica: "Memorize a ordem das etapas; o início é sempre o RECONHECIMENTO.",
      regraMental: "R-I-F-C-A-T-R-P-A-D: Reconhecimento, Isolamento, Fixação, Coleta, Acondicionamento, Transporte, Recebimento, Processamento, Armazenamento, Descarte."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "A casa é asilo inviolável do indivíduo, nela não podendo ninguém penetrar sem consentimento do morador, salvo, durante o dia, em caso de flagrante delito ou desastre, ou para prestar socorro, ou, a qualquer hora, por determinação judicial.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "durante o dia × a qualquer hora",
    cognitivo: {
      motivo: "Literalidade do art. 5º, XI, com os períodos INVERTIDOS.",
      mede: "Hipóteses e horários de mitigação da inviolabilidade domiciliar.",
      pegadinhaDesc: "Inverte os complementos: flagrante/desastre/socorro valem A QUALQUER HORA; a ordem judicial, DURANTE O DIA.",
      ondeErra: "Lê os elementos corretos (todos estão na CF) sem perceber a troca de posição.",
      palavraCritica: "a qualquer hora, por determinação judicial",
      tecnica: "Nos incisos 'espelhados', confira o PAR (hipótese ↔ horário), não a lista.",
      regraMental: "Emergência (flagrante/desastre/socorro) = qualquer hora. Papel do juiz = de dia."
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
      mede: "Extensão jurisprudencial do art. 5º, XI.",
      pegadinhaDesc: "O candidato restringe 'casa' à residência e marca E.",
      ondeErra: "Aplica o senso comum ('hotel não é casa') em vez do conceito jurídico.",
      palavraCritica: "regularmente ocupado / não aberto ao público",
      tecnica: "Conceito de casa = qualquer compartimento habitado ou espaço privado de trabalho.",
      regraMental: "Casa = onde alguém MORA ou trabalha com privacidade, ainda que temporariamente."
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
      mede: "Características dos direitos fundamentais.",
      pegadinhaDesc: "Absolutização direta, sem disfarce — a banca testa a base.",
      ondeErra: "Confunde 'fundamental' com 'ilimitado'.",
      palavraCritica: "caráter absoluto",
      tecnica: "Direitos fundamentais são RELATIVOS (limitáveis) — resolvem-se colisões por ponderação.",
      regraMental: "Nem a vida é absoluta (guerra declarada, art. 5º, XLVII, a)."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.95,
    enunciado: "Às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, inclusive as militares.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "inclusive",
    cognitivo: {
      motivo: "Literalidade do art. 144, § 4º — o dispositivo mais provável de QUALQUER prova de polícia civil.",
      mede: "Atribuições constitucionais da polícia civil.",
      pegadinhaDesc: "Troca 'exceto as militares' por 'inclusive as militares'.",
      ondeErra: "Lê 'infrações penais' e valida sem chegar ao final da frase.",
      palavraCritica: "inclusive",
      tecnica: "Em literalidade do art. 144, leia até a última palavra: as trocas ficam no fim.",
      regraMental: "PC apura infrações penais, EXCETO militares (e ressalvada a competência da União)."
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
    concurso: "PF", cargo: ["Agente","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.65,
    enunciado: "O brasileiro naturalizado poderá ser extraditado por crime comum praticado antes da naturalização ou em caso de comprovado envolvimento com o tráfico ilícito de entorpecentes, na forma da lei, independentemente do momento do fato.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "antes da naturalização",
    cognitivo: {
      motivo: "Cobrar as duas hipóteses de extradição do naturalizado (art. 5º, LI).",
      mede: "Regime constitucional da extradição.",
      pegadinhaDesc: "O 'independentemente do momento do fato' (verdadeiro para o tráfico) parece contradizer o 'antes da naturalização' (que vale só para crime comum).",
      ondeErra: "Aplica o marco temporal do crime comum também ao tráfico.",
      palavraCritica: "independentemente do momento",
      tecnica: "Duas hipóteses, dois regimes: crime comum → só antes; tráfico → antes ou depois.",
      regraMental: "Nato: NUNCA extraditado. Naturalizado: comum-antes / tráfico-sempre."
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
      mede: "Art. 5º, LXXVII.",
      pegadinhaDesc: "MS é o remédio mais famoso — o cérebro completa a dupla 'HC + MS' automaticamente.",
      ondeErra: "Memória por familiaridade, não por precisão.",
      palavraCritica: "mandado de segurança",
      tecnica: "Grave o par exato: HC + HD gratuitos.",
      regraMental: "Gratuidade = 2 H's (Habeas Corpus e Habeas Data)."
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
    concurso: "PCAL", cargo: ["Escrivão","Agente","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.8,
    enunciado: "Por ser manifestação da supremacia do interesse público, todos os atos decorrentes do poder de polícia administrativa são dotados de discricionariedade.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "todos",
    cognitivo: {
      motivo: "Testar se o candidato sabe que o poder de polícia também se expressa por atos vinculados.",
      mede: "Atributos do poder de polícia e sua relatividade.",
      pegadinhaDesc: "Generaliza um atributo frequente (discricionariedade) para TODOS os atos.",
      ondeErra: "Decora 'atributos: discricionariedade, autoexecutoriedade, coercibilidade' e esquece que são tendenciais.",
      palavraCritica: "todos",
      tecnica: "Contraexemplo mata generalização: a LICENÇA é ato vinculado de polícia.",
      regraMental: "'Todos' + atributo tendencial = procure o contraexemplo (licença; alvará vinculado)."
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
      mede: "Efeitos temporais do desfazimento dos atos administrativos.",
      pegadinhaDesc: "Atribui à revogação o efeito da anulação.",
      ondeErra: "Sabe os dois conceitos mas cruza os efeitos sob pressão de tempo.",
      palavraCritica: "retroativos",
      tecnica: "Associe: ilegal→anula→apaga desde o início; inconveniente→revoga→daqui pra frente.",
      regraMental: "Revogação = EX NUNC ('nunca mexe no passado'). Anulação = EX TUNC ('tira tudo')."
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
      mede: "Fundamento da responsabilidade objetiva do art. 37, § 6º.",
      pegadinhaDesc: "Troca a teoria-regra pela teoria-exceção; a descrição do risco integral está correta, mas ele não é a regra.",
      ondeErra: "Valida a definição correta de risco integral sem notar o 'como regra'.",
      palavraCritica: "como regra",
      tecnica: "Risco ADMINISTRATIVO admite excludentes (culpa exclusiva da vítima, caso fortuito/força maior, fato de terceiro); INTEGRAL, não.",
      regraMental: "Integral = casos extremos (dano nuclear; e, p/ doutrina, atentado terrorista em aeronave). Regra do dia a dia = administrativo."
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
    concurso: "PCAL", cargo: ["Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.9,
    enunciado: "Após a Lei nº 14.230/2021, a configuração de ato de improbidade administrativa exige a presença de dolo específico, não bastando a voluntariedade do agente, tendo sido abolida a modalidade culposa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dolo específico",
    cognitivo: {
      motivo: "Cobrar a principal mudança da reforma da LIA — tema com altíssima probabilidade por ser alteração legislativa recente.",
      mede: "Novo elemento subjetivo da improbidade.",
      pegadinhaDesc: "Sem pegadinha: literalidade da lei reformada. O risco é o candidato responder com a lei antiga.",
      ondeErra: "Estudou por material desatualizado (regime anterior admitia culpa no art. 10).",
      palavraCritica: "abolida a modalidade culposa",
      tecnica: "Alteração legislativa recente → a banca cobra o texto NOVO, literal.",
      regraMental: "LIA pós-2021: só DOLO (com fim ilícito específico). Culpa acabou."
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
      mede: "Espécies de abuso de poder.",
      pegadinhaDesc: "As definições estão corretas — apenas com os rótulos trocados entre si.",
      ondeErra: "Lê definições familiares e não verifica o pareamento rótulo↔definição.",
      palavraCritica: "fora dos limites / finalidade diversa",
      tecnica: "Monte o par certo antes de ler: EXCESSO = competência; DESVIO = finalidade. Depois compare.",
      regraMental: "EXcesso EXtrapola a competência. DESvio DEStoa da finalidade."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.95,
    enunciado: "A configuração da violência doméstica e familiar contra a mulher, para os fins da Lei nº 11.340/2006, exige a coabitação entre autor e vítima quando a agressão ocorrer no âmbito da unidade doméstica.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "exige a coabitação",
    cognitivo: {
      motivo: "Cobrar a Súmula 600 do STJ — presença quase obrigatória em provas policiais.",
      mede: "Requisitos de incidência da Lei Maria da Penha.",
      pegadinhaDesc: "Cria exigência de coabitação que a jurisprudência expressamente afasta.",
      ondeErra: "O recorte 'no âmbito da unidade doméstica' dá aparência técnica à exigência falsa.",
      palavraCritica: "exige",
      tecnica: "Súmula 600/STJ afasta a coabitação como requisito, em qualquer das hipóteses do art. 5º.",
      regraMental: "Maria da Penha: vínculo (doméstico, familiar ou afetivo) SIM; morar junto, NÃO precisa."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.85,
    enunciado: "A Lei Maria da Penha pode ser aplicada quando a agressão é praticada por outra mulher, como na hipótese de violência cometida no âmbito de relação homoafetiva feminina, pois a proteção legal se define pelo gênero da vítima, e não do agressor.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "gênero da vítima",
    cognitivo: {
      motivo: "Testar quem define a incidência: a condição da vítima, não a do agressor.",
      mede: "Sujeito ativo e passivo na Lei 11.340/2006.",
      pegadinhaDesc: "O candidato pode achar que a lei exige agressor homem.",
      ondeErra: "Foca no estereótipo da violência de gênero em vez do texto legal.",
      palavraCritica: "vítima mulher",
      tecnica: "Cheque o polo passivo: mulher + contexto do art. 5º = lei incide, seja quem for o agressor.",
      regraMental: "Vítima: sempre mulher. Agressor: qualquer pessoa."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.9,
    enunciado: "Nos termos da Lei nº 11.340/2006, com as alterações promovidas pela Lei nº 14.550/2023, as medidas protetivas de urgência serão concedidas independentemente da tipificação penal da violência, do ajuizamento de ação penal ou cível, da existência de inquérito policial ou do registro de boletim de ocorrência.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "independentemente",
    cognitivo: {
      motivo: "Cobrar a novidade legislativa de 2023 (art. 19, § 5º) — probabilidade altíssima por recência.",
      mede: "Autonomia das medidas protetivas de urgência.",
      pegadinhaDesc: "A sequência de 'independentemente' parece exagerada — mas é o texto da lei.",
      ondeErra: "Marca E por achar 'amplo demais' dispensar até o boletim de ocorrência.",
      palavraCritica: "independentemente da tipificação penal",
      tecnica: "Lei nova = literalidade. Se a lista bate com o § 5º do art. 19, é C.",
      regraMental: "Protetiva é AUTÔNOMA: não depende de crime, processo, IP nem B.O."
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
      mede: "Despenalização (não descriminalização) do porte para consumo.",
      pegadinhaDesc: "O 'vedada' pode soar forte, mas reflete o art. 28: não há prisão para consumo.",
      ondeErra: "Confunde despenalização com descriminalização e procura erro onde não há.",
      palavraCritica: "consumo pessoal",
      tecnica: "Art. 28 = A-P-M: Advertência, Prestação de serviços, Medida educativa.",
      regraMental: "Consumo: crime sem prisão. Tráfico: 5 a 15 anos."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 35, probReaparecer: 0.9,
    enunciado: "Os crimes previstos na Lei nº 13.869/2019 admitem tanto a forma dolosa quanto a culposa, bastando, nesta última, a inobservância do dever objetivo de cuidado pelo agente público.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "forma culposa",
    cognitivo: {
      motivo: "Cobrar a exigência de dolo + finalidade específica na nova Lei de Abuso de Autoridade.",
      mede: "Elemento subjetivo dos crimes de abuso de autoridade.",
      pegadinhaDesc: "Inventa modalidade culposa com definição doutrinária correta de culpa (que não se aplica).",
      ondeErra: "A definição correta de culpa 'legitima' a afirmação falsa.",
      palavraCritica: "culposa",
      tecnica: "Lei 13.869: só DOLO, e com finalidade específica (prejudicar, beneficiar ou capricho/satisfação pessoal).",
      regraMental: "Abuso de autoridade sem intenção específica = fato atípico (a divergência de interpretação não configura crime — art. 1º, § 2º)."
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
      mede: "Classificação dos crimes do Estatuto do Desarmamento e vocabulário jurídico.",
      pegadinhaDesc: "'Prescindindo' é lido como 'precisando' por leitura apressada — inverteria o gabarito.",
      ondeErra: "Erro de leitura do verbo, não de conteúdo.",
      palavraCritica: "prescindindo (= dispensando)",
      tecnica: "Toda vez que ler 'prescinde', traduza mentalmente para 'DISPENSA' antes de julgar.",
      regraMental: "Arma desmuniciada ou guardada = ainda assim crime (perigo abstrato)."
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
    concurso: "PF", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "Considera-se organização criminosa, nos termos da Lei nº 12.850/2013, a associação de três ou mais pessoas estruturalmente ordenada e caracterizada pela divisão de tarefas, com objetivo de obter vantagem de qualquer natureza mediante a prática de infrações penais cujas penas máximas sejam superiores a quatro anos, ou que sejam de caráter transnacional.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "três ou mais",
    cognitivo: {
      motivo: "Troca numérica no conceito legal mais cobrado da Lei 12.850.",
      mede: "Definição legal de organização criminosa.",
      pegadinhaDesc: "Muda '4 ou mais' para '3 ou mais'; todo o resto do conceito está correto.",
      ondeErra: "Valida o conjunto (90% literal) sem conferir o número.",
      palavraCritica: "três",
      tecnica: "Números são SEMPRE ponto de checagem: 4+ pessoas; pena máxima SUPERIOR a 4 anos.",
      regraMental: "ORCRIM = 4 e 4 (4+ pessoas; penas máximas > 4 anos) ou transnacional. Associação criminosa (CP, 288) = 3."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.9,
    textoApoio: "A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio. No entanto, a mera presença ostensiva do aparato policial não é suficiente para garantir a redução dos índices de criminalidade, os quais dependem, também, de políticas sociais estruturantes.",
    enunciado: "No segundo período do texto, a substituição de 'os quais' por 'cujos' manteria a correção gramatical e os sentidos originais do texto.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "cujos",
    cognitivo: {
      motivo: "Cobrar o uso do relativo 'cujo', que exige relação de posse entre antecedente e consequente.",
      mede: "Emprego dos pronomes relativos.",
      pegadinhaDesc: "'Cujos' soa formal e 'elegante', induzindo o candidato a aceitar a troca.",
      ondeErra: "Não testa a estrutura sintática exigida por 'cujo' (posse + substantivo sem artigo em seguida).",
      palavraCritica: "cujos",
      tecnica: "'Cujo' = 'do qual' com ideia de posse, sempre seguido de substantivo. 'Os quais' apenas retoma o antecedente.",
      regraMental: "Se dá para substituir por 'que' referindo-se ao termo anterior, 'cujo' está proibido."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    textoApoio: "A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio. No entanto, a mera presença ostensiva do aparato policial não é suficiente para garantir a redução dos índices de criminalidade, os quais dependem, também, de políticas sociais estruturantes.",
    enunciado: "A locução 'No entanto', que introduz o segundo período, poderia ser substituída por 'Conquanto', sem prejuízo da correção gramatical e da coerência textual.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "conquanto",
    cognitivo: {
      motivo: "Diferença entre conectivo adversativo coordenativo e conjunção concessiva subordinativa.",
      mede: "Coesão sequencial e classes de conectivos.",
      pegadinhaDesc: "'Conquanto' tem valor semântico próximo (oposição/concessão), mas classe e sintaxe diferentes.",
      ondeErra: "Julga apenas o 'sentido de contraste' e ignora a estrutura sintática exigida.",
      palavraCritica: "Conquanto (= embora)",
      tecnica: "'Conquanto' = 'embora': inicia oração subordinada e pede outra oração principal no período — não pode abrir período independente como 'no entanto'.",
      regraMental: "Adversativas (mas, porém, contudo, entretanto, no entanto) trocam entre si. Concessivas (embora, conquanto, ainda que) trocam entre si. Entre grupos, quase nunca."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    textoApoio: "A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio.",
    enunciado: "As vírgulas que isolam o trecho 'dever do Estado, direito e responsabilidade de todos' foram empregadas para separar aposto explicativo, razão por que sua supressão manteria a correção gramatical do período.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "sua supressão manteria",
    cognitivo: {
      motivo: "Combinar classificação correta (aposto) com consequência falsa (supressão possível).",
      mede: "Pontuação e estrutura do período.",
      pegadinhaDesc: "A primeira metade é verdadeira; a conclusão, falsa — o aposto intercalado EXIGE a dupla vírgula.",
      ondeErra: "Acerta a classificação, relaxa e aceita a conclusão sem testar a supressão.",
      palavraCritica: "manteria a correção",
      tecnica: "Julgue cada oração da assertiva como um item autônomo.",
      regraMental: "Aposto explicativo intercalado: as duas vírgulas são obrigatórias — suprimir gera erro de pontuação (sujeito emendado em aposto sem marcação)."
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
    concurso: "PCDF", cargo: ["Escrivão","Agente"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCDF)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.75,
    textoApoio: "O acesso à informação e a transparência dos órgãos policiais são essenciais à consolidação da confiança social nas instituições de segurança.",
    enunciado: "No trecho, o emprego do acento indicativo de crase em 'à informação' e em 'à consolidação' justifica-se pela mesma razão sintática: em ambos os casos, há fusão da preposição 'a', exigida pelo termo regente, com o artigo definido feminino que antecede o termo regido.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mesma razão sintática",
    cognitivo: {
      motivo: "Cobrar a justificativa da crase (regência + artigo), formato típico da banca.",
      mede: "Regência nominal e crase.",
      pegadinhaDesc: "O candidato desconfia do 'mesma razão' e procura diferença inexistente ('acesso a' e 'essencial a' regem 'a'; 'informação' e 'consolidação' admitem artigo).",
      ondeErra: "Quer achar pegadinha em item correto.",
      palavraCritica: "termo regente",
      tecnica: "Teste da crase: troque por palavra masculina ('acesso ao dado', 'essencial ao fortalecimento') — se surge 'ao', há crase.",
      regraMental: "Crase = preposição A (da regência) + artigo A (do substantivo feminino)."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 30, probReaparecer: 0.85,
    enunciado: "Denomina-se ransomware a técnica de engenharia social por meio da qual o golpista envia mensagens fraudulentas que simulam comunicações de instituições legítimas, com o objetivo de induzir a vítima a fornecer dados pessoais e credenciais de acesso.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "ransomware",
    cognitivo: {
      motivo: "Troca de rótulos entre phishing e ransomware — o padrão nº 1 de Informática na banca.",
      mede: "Conceitos de ameaças cibernéticas.",
      pegadinhaDesc: "A definição é perfeita — de OUTRO golpe (phishing).",
      ondeErra: "Valida a definição correta sem conferir o nome.",
      palavraCritica: "ransomware × phishing",
      tecnica: "Em Informática, a banca quase nunca erra a definição: ela troca o TERMO definido.",
      regraMental: "RANSOM = resgate (sequestro/cifração de dados). PHISHING = pescaria (isca por mensagem falsa)."
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
      mede: "Estratégias de cópia de segurança.",
      pegadinhaDesc: "O 'somente' ativa o alarme, mas aqui é tecnicamente correto.",
      ondeErra: "Marca E por reflexo do 'somente' ou por confundir com becape diferencial.",
      palavraCritica: "desde o último becape (qualquer tipo)",
      tecnica: "Incremental: referência = último becape de QUALQUER tipo. Diferencial: referência = último becape COMPLETO.",
      regraMental: "Incremental = incrementos pequenos, restauração trabalhosa. Diferencial = cresce a cada dia, restauração simples."
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
      mede: "Operações básicas do Windows.",
      pegadinhaDesc: "Descreve o comportamento do Delete comum atribuindo-o ao Shift+Delete.",
      ondeErra: "Não pratica o atalho e responde por suposição.",
      palavraCritica: "Shift",
      tecnica: "Shift+Delete = exclusão direta, sem Lixeira (recuperável apenas por software forense).",
      regraMental: "Shift 'pula' a Lixeira."
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
    concurso: "PCAL", cargo: ["Delegado","Escrivão","Agente"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "O acordo de não persecução penal poderá ser celebrado pelo Ministério Público com o investigado que tenha confessado formal e circunstancialmente a prática de infração penal sem violência ou grave ameaça, com pena mínima inferior a quatro anos, desde que necessário e suficiente para a reprovação e prevenção do crime.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "pena mínima inferior a 4 anos",
    cognitivo: {
      motivo: "Cobrar os requisitos do ANPP (art. 28-A do CPP), inovação do Pacote Anticrime.",
      mede: "Justiça penal negociada.",
      pegadinhaDesc: "O ponto de checagem é 'pena MÍNIMA inferior a 4' — a banca costuma trocar para 'máxima' ou 'igual ou inferior'.",
      ondeErra: "Não memorizou qual pena (mínima/máxima) e qual operador (inferior/igual ou inferior).",
      palavraCritica: "mínima inferior",
      tecnica: "ANPP: confissão + sem violência/grave ameaça + pena MÍNIMA < 4 anos.",
      regraMental: "ANPP = 'Mínima Menor que 4'. Suspensão condicional do processo = mínima ≤ 1."
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
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026, origem: "Inédita — estilo CEBRASPE (padrão PCAL)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.9,
    enunciado: "Com o advento da Lei nº 14.994/2024, o feminicídio deixou de ser qualificadora do homicídio e passou a constituir tipo penal autônomo, consistente em matar mulher por razões da condição do sexo feminino, com pena de reclusão de vinte a quarenta anos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "tipo penal autônomo",
    cognitivo: {
      motivo: "Cobrar a alteração legislativa mais relevante de 2024 em crimes contra a vida.",
      mede: "Novo art. 121-A do CP.",
      pegadinhaDesc: "Quem estudou antes de 2024 'sabe' que feminicídio é qualificadora — e marca E com convicção.",
      ondeErra: "Conhecimento desatualizado gera erro com alta confiança (o pior tipo de erro).",
      palavraCritica: "121-A / 20 a 40 anos",
      tecnica: "Monitorar alterações legislativas: a banca cobra a novidade em até 2 anos da vigência.",
      regraMental: "Feminicídio hoje = art. 121-A, autônomo, 20 a 40 anos, hediondo."
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

/* ---------------- ESTRATÉGIAS (Módulo 10) ---------------- */
const ESTRATEGIAS = [
  { nome: "Leitura reversa", desc: "Leia primeiro o comando final e a última oração do item — é onde a banca esconde a troca. Depois volte ao início já sabendo o que procurar.",
    aplicar: "Em itens longos (3+ linhas) e nos de literalidade constitucional.", exemplo: "DC-004" },
  { nome: "Julgamento por blocos", desc: "Divida a assertiva nas suas orações e julgue cada uma como um item independente. Uma única oração falsa torna todo o item ERRADO.",
    aplicar: "Itens com 'verdade + falso emendado' e dupla afirmação.", exemplo: "PT-003" },
  { nome: "Radar de termos absolutos", desc: "'Sempre, nunca, somente, todos, qualquer' sinalizam alta probabilidade de item errado — mas confirme com o conteúdo: a banca planta absolutos verdadeiros para punir o atalho cego.",
    aplicar: "Sempre — com a ressalva das normas literalmente absolutas.", exemplo: "DP-004" },
  { nome: "Checagem de pares espelhados", desc: "Conceitos que andam em dupla (anulação×revogação, excesso×desvio, incremental×diferencial) são o alvo favorito de inversão. Monte o par correto ANTES de ler a definição da banca.",
    aplicar: "Administrativo, Penal e Informática.", exemplo: "DA-005" },
  { nome: "Ponto de checagem numérico", desc: "Todo número (prazo, quantidade, fração, idade, pena) é ponto de verificação obrigatório. Pare, recupere o número da lei, compare.",
    aplicar: "Leis penais especiais e CPP.", exemplo: "LE-007" },
  { nome: "Quem pratica o ato?", desc: "Antes de julgar a ação descrita, confirme o SUJEITO: delegado, juiz, MP, PF, PRF? A conduta pode ser correta com o agente errado.",
    aplicar: "Inquérito policial, competências do art. 144.", exemplo: "PP-002" },
  { nome: "Tradutor de 'prescindir'", desc: "Traduza mentalmente: prescinde = DISPENSA; imprescindível = INDISPENSÁVEL; não prescinde = EXIGE. Só então julgue.",
    aplicar: "Qualquer disciplina — é a pegadinha semântica nº 1.", exemplo: "LE-006" },
  { nome: "Caça à condição inventada", desc: "'Desde que', 'condicionado a', 'exige-se', 'somente se' — verifique se a condição existe na norma. Condição inexistente = item errado.",
    aplicar: "Garantias fundamentais e leis especiais.", exemplo: "PP-005" },
  { nome: "Regra do rótulo", desc: "Quando a definição estiver perfeita, desconfie do NOME definido. A banca raramente erra a definição — ela troca o termo.",
    aplicar: "Informática e institutos jurídicos nominados.", exemplo: "IN-001" },
  { nome: "Atualização legislativa", desc: "Lei/decisão dos últimos 2 anos = cobrança literal quase certa, geralmente como item CERTO. Liste as novidades do edital e leia a letra da lei nova.",
    aplicar: "Antes de qualquer prova, revise o 'radar de novidades'.", exemplo: "LP-002" },
  { nome: "Gestão do branco (1 líquida)", desc: "No CEBRASPE, errado anula certo. Regra prática: convicção ou fundamento parcial → responda; chute puro (50/50 sem nenhum indício) → em regra, deixe em branco. Use as heurísticas de padrão para transformar 50/50 em 70/30.",
    aplicar: "Estratégia de prova — treine no simulador com correção 1 líquida.", exemplo: null },
  { nome: "Imunidade ao item longo", desc: "Item extenso não é sinônimo de errado. A banca usa comprimento para cansar; quebre em blocos e julgue tecnicamente.",
    aplicar: "Constitucional, Direitos Humanos e itens com texto de apoio.", exemplo: "DP-005" },
];

/* Correção estilo CEBRASPE: 1 errada anula 1 certa */
const REGRA_CORRECAO = { acerto: 1, erro: -1, branco: 0 };
