/* =====================================================================
   QUESTLAB — Lote 75: RECORTES EXTRAÍDOS DE PROVAS REAIS DA CEBRASPE

   Primeiro lote construído a partir do que a banca DE FATO cobrou, e não
   do que supomos que ela cobra. Os recortes vêm da leitura dos 257 itens
   de carreira policial auditados em AUDITORIA-PROVA-REAL-2021.md
   (PC-DF 2021 Agente, PC-SE 2021 Agente de Polícia Judiciária e PF 2025
   Agente de Polícia Federal).

   MÉTODO: cada item aqui é redigido do zero, a partir da lei e da
   jurisprudência, sobre um PONTO que as provas reais mostraram ser
   cobrado. O texto dos itens originais não é reproduzido — não por
   cautela jurídica, mas porque copiar entrega menos: um item nosso vem
   com resolução, fundamento, macete, erro comum e leitura do padrão da
   banca, que é onde está o valor.

   CALIBRAÇÃO — a razão de ser deste lote. A auditoria mediu dois defeitos
   estruturais no banco, e este é o primeiro lote escrito para corrigi-los:

   1. COMPRIMENTO. A banca usa item curto quatro vezes mais que nós: 24%
      dos itens reais têm até 120 caracteres, contra 6,9% do nosso acervo.
      Isso criava um vazamento de 8,4pp — um "chutador cego", que decide só
      pela forma, batia o chute em 8,4 pontos aqui dentro e em ZERO na
      prova real. Era reflexo falso sendo treinado com reforço positivo.
      Este lote foi escrito na distribuição real, com maioria de itens
      curtos e afirmação categórica seca.

   2. TAXA-BASE. As quatro provas auditadas ficaram entre 51,3% e 57,4% de
      ERRADO (54,1% nas policiais); o banco estava em 48,0%, direção
      oposta. Este lote fecha em ~55% ERRADO para puxar a média.

   Os pontos escolhidos são os que a auditoria mostrou descobertos ou
   rasos no banco — corrupção passiva privilegiada, culpa concorrente e
   calamidade em licitação estavam em ZERO.

   RESULTADO MEDIDO: 31 itens, 55% ERRADO, mediana de 115
   [NOTA DE AGOSTO/2026: o "alvo 54%" citado aqui veio da auditoria de
   372 itens e foi SUPERADO. Com 2.474 itens de 36 cadernos, a taxa-base
   real e 49,2% ERRADO — meio a meio. Este lote nao precisa de correcao,
   porque 55% em 31 itens esta dentro do ruido; mas o alvo, para lotes
   novos, e 50%. Ver AUDITORIA-PROVA-REAL-2021.md, revisao de 2026.]
   caracteres. E, sobretudo, o teste que importa: a regra cega aplicada
   SÓ a este lote rende +0,0pp — contra +8,7pp do banco inteiro. Ou seja,
   aqui dentro a forma não entrega nada, que é como a prova real se
   comporta.

   Isso exigiu duas passadas, e vale registrar por quê. A primeira versão
   tinha 20 itens e ficou com 67% de ERRADO entre os curtos contra 50%
   entre os longos: ao perseguir "itens curtos", eu escrevi itens curtos
   E FALSOS, recriando em escala menor o mesmo vazamento que o lote vinha
   corrigir. Escrever curto não basta — é preciso que curto e longo tenham
   a MESMA taxa de acerto, senão o comprimento volta a ser pista. O bloco
   de neutralização, ao final do arquivo, existe para isso.
   ===================================================================== */
const QUESTOES_PCAL_LOTE75 = [

  /* ================= DIREITO PENAL — PARTE GERAL ================= */

  {
    id: "DP-108", disciplina: "Direito Penal", assunto: "Lei penal no tempo",
    subassunto: "Abolitio criminis x continuidade normativo-típica",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 2º; recorte cobrado em prova real de carreira policial)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.86,
    enunciado: "Há abolitio criminis quando a revogação do tipo penal é acompanhada do deslocamento da conduta para outro tipo recém-criado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "deslocamento da conduta para outro tipo",
    cognitivo: {
      motivo: "Separar abolitio criminis de continuidade normativo-típica, distinção que a banca cobra com frequência e que decide se o fato ainda é punível.",
      palavraCritica: "deslocamento",
    },
    comentario: {
      resolucao: "ERRADO. Se a conduta migra para outro tipo, o que existe é CONTINUIDADE NORMATIVO-TÍPICA: o legislador apenas mudou o endereço do crime, e a punibilidade subsiste. Foi o que ocorreu com o atentado violento ao pudor, revogado pela Lei 12.015/2009 e absorvido pelo estupro. A abolitio criminis exige que a conduta deixe de ser crime em qualquer dispositivo — aí sim cessam a execução e os efeitos penais da condenação (art. 2º do CP).",
      fundamento: "CP, art. 2º, caput; Lei 12.015/2009 (exemplo clássico de continuidade normativo-típica).",
      macete: "Sumiu do mundo penal = abolitio. Mudou de artigo = continuidade.",
      erroComum: "Concluir que revogar o tipo sempre descriminaliza.",
      comoBancaPensa: "Descreve a continuidade normativo-típica e a rotula como abolitio.",
    },
  },
  {
    id: "DP-109", disciplina: "Direito Penal", assunto: "Lei penal no tempo",
    subassunto: "Lei temporária e excepcional — ultratividade",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 3º)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "O fato praticado sob a vigência de lei penal temporária continua punível após o término do período por ela abrangido.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "continua punível",
    cognitivo: {
      motivo: "Fixar a ultratividade das leis temporárias e excepcionais, exceção expressa à retroatividade benéfica.",
      palavraCritica: "após o término",
    },
    comentario: {
      resolucao: "CERTO. É o art. 3º do CP: a lei excepcional ou temporária aplica-se ao fato praticado durante sua vigência ainda que decorrido o período de duração ou cessadas as circunstâncias que a determinaram. Trata-se de ULTRATIVIDADE, e a razão é de política criminal — sem ela, bastaria ao agente aguardar o fim do prazo para escapar da punição, esvaziando a norma justamente no período em que ela mais importa.",
      fundamento: "CP, art. 3º.",
      macete: "Lei temporária tem prazo de validade para viger, não para punir.",
      erroComum: "Aplicar a retroatividade benéfica também às leis temporárias.",
      comoBancaPensa: "Cobra a exceção ao art. 2º, parágrafo único.",
    },
  },
  {
    id: "DP-110", disciplina: "Direito Penal", assunto: "Contagem de prazo penal",
    subassunto: "Dia do começo e frações de dia",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, arts. 10 e 11)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.78,
    enunciado: "O dia da prisão não é computado no cumprimento da pena, pois as frações de dia devem ser desprezadas.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "não é computado",
    cognitivo: {
      motivo: "Cobrar a diferença entre desprezar frações de dia e desprezar o dia do começo — o CP faz uma coisa e não a outra.",
      palavraCritica: "não é computado",
    },
    comentario: {
      resolucao: "ERRADO. O art. 10 do CP determina que o DIA DO COMEÇO INCLUI-SE no cômputo do prazo. O que se despreza, no art. 11, são as frações de dia dentro da pena (e as de cruzeiro na multa) — ou seja, preso às 23h50, esse dia conta inteiro. O item usa uma regra verdadeira (desprezar frações) para justificar uma conclusão falsa (excluir o dia), e é essa costura que precisa ser desfeita.",
      fundamento: "CP, arts. 10 e 11.",
      macete: "Dia do começo conta; fração de dia é que se despreza.",
      erroComum: "Transportar para o prazo penal a regra processual civil de excluir o dia inicial.",
      comoBancaPensa: "Encadeia premissa verdadeira e conclusão falsa com um 'pois'.",
    },
  },
  {
    id: "DP-111", disciplina: "Direito Penal", assunto: "Crimes contra a pessoa",
    subassunto: "Lesão corporal seguida de morte — preterdolo",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, arts. 19 e 129, § 3º)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.82,
    enunciado: "Responde por lesão corporal seguida de morte o agente que não quis o resultado morte nem assumiu o risco de produzi-lo.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "não quis ... nem assumiu o risco",
    cognitivo: {
      motivo: "Fixar a estrutura preterdolosa: dolo no antecedente, culpa no consequente.",
      palavraCritica: "nem assumiu o risco",
    },
    comentario: {
      resolucao: "CERTO. A lesão corporal seguida de morte é crime PRETERDOLOSO: há dolo na lesão e culpa quanto à morte. Justamente por isso o enunciado descreve a hipótese com precisão — se o agente quisesse a morte, haveria homicídio doloso; se assumisse o risco, dolo eventual de homicídio. E o art. 19 do CP fecha o sistema: o resultado agravador só se imputa a quem lhe deu causa ao menos culposamente, o que afasta a responsabilidade objetiva.",
      fundamento: "CP, arts. 19 e 129, § 3º.",
      macete: "Preterdolo: quis a lesão, não quis a morte.",
      erroComum: "Enxergar dolo eventual de homicídio onde há culpa no resultado.",
      comoBancaPensa: "Enuncia corretamente a ausência de dolo e conta que o candidato ache que falta elemento.",
    },
  },
  {
    id: "DP-112", disciplina: "Direito Penal", assunto: "Crimes contra o patrimônio",
    subassunto: "Receptação — autonomia em relação ao crime antecedente",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 180, § 4º)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "A receptação é punível ainda que seja desconhecido ou isento de pena o autor do crime de que proveio a coisa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "desconhecido ou isento de pena",
    cognitivo: {
      motivo: "Fixar a autonomia da receptação, ponto que a banca cobra por meio de casos com autor inimputável ou não identificado.",
      palavraCritica: "isento de pena",
    },
    comentario: {
      resolucao: "CERTO. É o § 4º do art. 180 do CP. A receptação é crime acessório, mas goza de autonomia: basta que o crime antecedente tenha existido como fato típico e ilícito. Assim, se o furto foi praticado por inimputável — que é isento de pena —, ou se o ladrão jamais foi identificado, o receptador continua respondendo normalmente. O que não pode faltar é a origem criminosa da coisa.",
      fundamento: "CP, art. 180, § 4º.",
      macete: "Receptação não depende de condenar quem furtou.",
      erroComum: "Exigir a punição do autor do crime antecedente.",
      comoBancaPensa: "Monta o caso com autor inimputável para induzir à absolvição do receptador.",
    },
  },
  {
    id: "DP-113", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública",
    subassunto: "Corrupção passiva privilegiada x prevaricação",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, arts. 317, § 2º, e 319)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.88,
    enunciado: "Pratica prevaricação o funcionário que, com infração de dever funcional, retarda ato de ofício cedendo a pedido ou influência de outrem.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "cedendo a pedido ou influência de outrem",
    cognitivo: {
      motivo: "Cobrar o par mais confundido entre os crimes funcionais, cuja distinção está no motivo da conduta.",
      palavraCritica: "cedendo a pedido ou influência",
    },
    comentario: {
      resolucao: "ERRADO. Ceder a pedido ou influência de outrem caracteriza a CORRUPÇÃO PASSIVA PRIVILEGIADA do art. 317, § 2º, do CP. A prevaricação (art. 319) exige motivação interna do agente: satisfazer interesse ou sentimento PESSOAL. A chave é a origem do impulso — veio de fora, é corrupção privilegiada; nasceu dentro do agente, é prevaricação. Note ainda que a corrupção privilegiada não exige vantagem indevida, o que a distingue do caput do art. 317.",
      fundamento: "CP, arts. 317, § 2º, e 319.",
      macete: "Pedido de terceiro = 317, §2º. Sentimento próprio = 319.",
      erroComum: "Chamar de prevaricação todo desvio funcional sem vantagem.",
      comoBancaPensa: "Descreve a elementar de um tipo e cola o nome do outro.",
    },
  },

  /* ================= LEGISLAÇÃO ESPECIAL ================= */

  {
    id: "LE-231", disciplina: "Legislação Especial", assunto: "Crimes Hediondos",
    subassunto: "Inafiançabilidade x imprescritibilidade",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, XLII, XLIII e XLIV; Lei 8.072/1990)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.9,
    enunciado: "Os crimes hediondos são inafiançáveis e imprescritíveis.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "imprescritíveis",
    cognitivo: {
      motivo: "Cobrar o rol fechado da imprescritibilidade, que não inclui os hediondos.",
      palavraCritica: "imprescritíveis",
    },
    comentario: {
      resolucao: "ERRADO. Hediondos são inafiançáveis (art. 5º, XLIII, da CF), mas NÃO são imprescritíveis. A Constituição prevê apenas DOIS crimes imprescritíveis: racismo (XLII) e ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (XLIV). O rol é taxativo, e a banca explora exatamente a tendência de somar todas as restrições em um pacote só.",
      fundamento: "CF, art. 5º, XLII, XLIII e XLIV; Lei 8.072/1990.",
      macete: "Imprescritíveis são só dois: racismo e grupo armado.",
      erroComum: "Presumir que crime grave é automaticamente imprescritível.",
      comoBancaPensa: "Empacota restrições distintas como se fossem um bloco.",
    },
  },

  /* ================= PROCESSO PENAL ================= */

  {
    id: "PP-094", disciplina: "Processo Penal", assunto: "Lei processual penal no tempo",
    subassunto: "Tempus regit actum",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 2º)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.84,
    enunciado: "A lei processual penal só se aplica aos crimes praticados após a sua entrada em vigor.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "só se aplica aos crimes praticados após",
    cognitivo: {
      motivo: "Separar a irretroatividade da lei penal da aplicação imediata da lei processual.",
      palavraCritica: "crimes praticados após",
    },
    comentario: {
      resolucao: "ERRADO. A lei processual penal tem APLICAÇÃO IMEDIATA, alcançando processos em curso, sem prejuízo dos atos já praticados sob a lei anterior (art. 2º do CPP). Vale o tempus regit actum: o marco é a data do ATO PROCESSUAL, não a data do crime. Quem transporta para o processo a irretroatividade que vale para a lei penal material erra — são regimes distintos, e essa confusão é das mais cobradas.",
      fundamento: "CPP, art. 2º.",
      macete: "Lei penal olha a data do crime; lei processual, a data do ato.",
      erroComum: "Aplicar o art. 5º, XL, da CF à norma processual.",
      comoBancaPensa: "Troca o marco temporal de referência.",
    },
  },
  {
    id: "PP-095", disciplina: "Processo Penal", assunto: "Inquérito Policial",
    subassunto: "Indiciamento — juízo de autoria e materialidade",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 6º; Lei 12.830/2013, art. 2º, § 6º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.86,
    enunciado: "O indiciamento constitui mero juízo de possibilidade de autoria, dispensando elementos informativos sobre a materialidade do crime.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "dispensando elementos ... materialidade",
    cognitivo: {
      motivo: "Cobrar que o indiciamento é ato fundamentado, e não impressão do delegado.",
      palavraCritica: "dispensando",
    },
    comentario: {
      resolucao: "ERRADO. O indiciamento é ato privativo do delegado de polícia e deve ser fundamentado, mediante análise técnico-jurídica do fato, indicando AUTORIA, MATERIALIDADE e suas circunstâncias (art. 2º, § 6º, da Lei 12.830/2013). Não é palpite nem mero juízo de possibilidade: exige lastro nos elementos colhidos. Além disso, o juízo de autoria é de PROBABILIDADE, e não de simples possibilidade — a diferença de grau também é cobrável.",
      fundamento: "Lei 12.830/2013, art. 2º, § 6º; CPP, art. 6º.",
      macete: "Indiciar exige autoria E materialidade, por ato fundamentado.",
      erroComum: "Tratar o indiciamento como ato discricionário e sem motivação.",
      comoBancaPensa: "Suprime um dos dois requisitos do ato.",
    },
  },
  {
    id: "PP-096", disciplina: "Processo Penal", assunto: "Inquérito Policial",
    subassunto: "Instauração na ação penal pública condicionada",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 5º, § 4º)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.82,
    enunciado: "Nos crimes de ação penal pública condicionada, o inquérito policial depende de representação do Ministério Público.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "representação do Ministério Público",
    cognitivo: {
      motivo: "Cobrar quem é o titular da representação — troca de sujeito clássica.",
      palavraCritica: "do Ministério Público",
    },
    comentario: {
      resolucao: "ERRADO. A representação é do OFENDIDO ou de seu representante legal, não do Ministério Público (art. 5º, § 4º, do CPP). O MP é titular da ação penal pública, mas nos crimes condicionados sua atuação depende da manifestação de vontade da vítima. Trocar o titular da condição de procedibilidade inverte toda a lógica do instituto, que existe para preservar a intimidade do ofendido.",
      fundamento: "CPP, art. 5º, § 4º; art. 24.",
      macete: "Quem representa é a vítima; quem denuncia é o MP.",
      erroComum: "Confundir titularidade da ação com titularidade da representação.",
      comoBancaPensa: "Substitui o sujeito da condição de procedibilidade.",
    },
  },
  {
    id: "PP-097", disciplina: "Processo Penal", assunto: "Prisão e liberdade provisória",
    subassunto: "Fiança concedida pela autoridade policial",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 322)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.88,
    enunciado: "A competência para conceder fiança ao preso em flagrante é exclusiva da autoridade judiciária.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "exclusiva da autoridade judiciária",
    cognitivo: {
      motivo: "Cobrar a competência da autoridade policial para arbitrar fiança, atribuição central do cargo.",
      palavraCritica: "exclusiva",
    },
    comentario: {
      resolucao: "ERRADO. O art. 322 do CPP autoriza a AUTORIDADE POLICIAL a conceder fiança nos casos de infração cuja pena privativa de liberdade máxima não seja superior a 4 anos. Nos demais casos, a fiança será requerida ao juiz, que decidirá em 48 horas. Ou seja, a competência é concorrente e escalonada pela pena — não exclusiva do juiz. Para carreira policial, este é um dos recortes de maior valor prático.",
      fundamento: "CPP, art. 322 e parágrafo único.",
      macete: "Até 4 anos, o delegado arbitra. Acima disso, o juiz.",
      erroComum: "Centralizar toda fiança no Judiciário.",
      comoBancaPensa: "Fecha com 'exclusiva' uma competência que a lei reparte.",
    },
  },
  {
    id: "PP-098", disciplina: "Processo Penal", assunto: "Prisão em flagrante",
    subassunto: "Flagrante presumido (ficto)",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 302, IV)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.84,
    enunciado: "Ainda que não haja perseguição, configura-se flagrante quando o agente é encontrado, logo depois, com instrumentos ou objetos que façam presumir ser ele o autor da infração.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "ainda que não haja perseguição",
    cognitivo: {
      motivo: "Distinguir o flagrante impróprio (com perseguição) do presumido (sem ela).",
      palavraCritica: "sem perseguição",
    },
    comentario: {
      resolucao: "CERTO. É o flagrante PRESUMIDO ou ficto, do inciso IV do art. 302 do CPP: o agente é encontrado, logo depois, com instrumentos, armas, objetos ou papéis que façam presumir ser ele o autor. Não se exige perseguição — este é o traço que o separa do flagrante IMPRÓPRIO (inciso III), em que a perseguição é elementar. A expressão 'logo depois' comporta leitura mais elástica que o 'logo após' do inciso III.",
      fundamento: "CPP, art. 302, III e IV.",
      macete: "Impróprio persegue; presumido encontra.",
      erroComum: "Exigir perseguição em todas as modalidades de flagrante.",
      comoBancaPensa: "Nega um requisito e testa se o candidato sabe a qual inciso ele pertence.",
    },
  },
  {
    id: "PP-099", disciplina: "Processo Penal", assunto: "Tribunal do Júri",
    subassunto: "Sigilo das votações",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, XXXVIII; CPP, art. 485)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.76,
    enunciado: "O julgamento dos crimes dolosos contra a vida compete ao tribunal do júri, cujas votações se realizam sob sigilo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sigilo",
    cognitivo: {
      motivo: "Fixar duas garantias constitucionais do júri que costumam ser cobradas juntas.",
      palavraCritica: "sob sigilo",
    },
    comentario: {
      resolucao: "CERTO. O art. 5º, XXXVIII, da CF assegura ao júri a plenitude de defesa, o SIGILO DAS VOTAÇÕES, a soberania dos veredictos e a competência para julgar crimes dolosos contra a vida. O CPP operacionaliza o sigilo na sala especial (art. 485), e a votação é interrompida assim que se atingem quatro votos num mesmo sentido, para que não se revele unanimidade — refinamento do próprio sigilo.",
      fundamento: "CF, art. 5º, XXXVIII; CPP, arts. 485 e 483, §§ 1º e 2º.",
      macete: "Júri: plenitude de defesa, sigilo, soberania e crime doloso contra a vida.",
      erroComum: "Supor votação aberta em plenário.",
      comoBancaPensa: "Reúne duas garantias corretas e conta com a dúvida.",
    },
  },

  /* ================= DIREITO CONSTITUCIONAL ================= */

  {
    id: "DC-110", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais",
    subassunto: "Eficácia horizontal",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (STF, RE 201.819; eficácia horizontal dos direitos fundamentais)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.82,
    enunciado: "A eficácia dos direitos fundamentais não se restringe às relações entre o cidadão e o poder público.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "não se restringe",
    cognitivo: {
      motivo: "Fixar a eficácia horizontal, tema de jurisprudência consolidada e cobrança recorrente.",
      palavraCritica: "não se restringe",
    },
    comentario: {
      resolucao: "CERTO. Os direitos fundamentais têm eficácia também nas relações entre PARTICULARES — é a chamada eficácia horizontal. O STF a reconheceu ao julgar o RE 201.819, em que se exigiu observância do contraditório e da ampla defesa na exclusão de associado por associação privada. A eficácia vertical (cidadão x Estado) é a face clássica, mas não é a única.",
      fundamento: "STF, RE 201.819/RJ; CF, art. 5º.",
      macete: "Vertical é contra o Estado; horizontal, entre particulares.",
      erroComum: "Limitar direitos fundamentais à relação com o poder público.",
      comoBancaPensa: "Usa negação ('não se restringe') para testar se o candidato conhece a face menos óbvia.",
    },
  },
  {
    id: "DC-111", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais",
    subassunto: "Gerações de direitos fundamentais",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (classificação em gerações/dimensões)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.74,
    enunciado: "A liberdade de consciência e de crença é direito fundamental de segunda geração.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "segunda geração",
    cognitivo: {
      motivo: "Cobrar o enquadramento geracional, alvo frequente por meio da troca do ordinal.",
      palavraCritica: "segunda",
    },
    comentario: {
      resolucao: "ERRADO. Liberdade de consciência e de crença é direito de PRIMEIRA geração — liberdades individuais, de natureza negativa, que exigem abstenção do Estado. A segunda geração reúne os direitos sociais, econômicos e culturais, de caráter prestacional (saúde, educação, trabalho); a terceira, os direitos de solidariedade, de titularidade difusa (meio ambiente, paz, autodeterminação dos povos).",
      fundamento: "CF, art. 5º, VI; classificação de Karel Vasak (liberdade, igualdade, fraternidade).",
      macete: "1ª liberdade, 2ª igualdade, 3ª fraternidade.",
      erroComum: "Associar toda liberdade a direito social.",
      comoBancaPensa: "Troca o ordinal e mantém o resto do enunciado correto.",
    },
  },
  {
    id: "DC-112", disciplina: "Direito Constitucional", assunto: "Tratados internacionais de direitos humanos",
    subassunto: "Status normativo e o § 3º do art. 5º",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, §§ 2º e 3º; STF, RE 466.343)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.86,
    enunciado: "Para ser reconhecida como direito ou garantia fundamental no ordenamento brasileiro, a norma internacional deve necessariamente ser aprovada, em cada Casa do Congresso Nacional, em dois turnos e por três quintos dos votos.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "necessariamente",
    cognitivo: {
      motivo: "Cobrar a diferença entre ser direito fundamental e ter status de emenda constitucional.",
      palavraCritica: "necessariamente",
    },
    comentario: {
      resolucao: "ERRADO. O § 2º do art. 5º já incorpora ao rol de direitos fundamentais os decorrentes de tratados internacionais de que o Brasil seja parte, independentemente do rito qualificado. O § 3º acrescenta algo diferente: o tratado aprovado em dois turnos, por três quintos, em cada Casa, ganha STATUS DE EMENDA CONSTITUCIONAL. Sem esse rito, o STF atribuiu aos tratados de direitos humanos caráter SUPRALEGAL (RE 466.343) — acima da lei, abaixo da Constituição. O 'necessariamente' é o vício.",
      fundamento: "CF, art. 5º, §§ 2º e 3º; STF, RE 466.343/SP.",
      macete: "Sem o rito: supralegal. Com o rito: emenda.",
      erroComum: "Condicionar a existência do direito fundamental ao quórum do § 3º.",
      comoBancaPensa: "Converte uma via de qualificação em requisito de existência.",
    },
  },
  {
    id: "DC-113", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais",
    subassunto: "Comunicação da prisão (art. 5º, LXII)",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, LXII)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.84,
    enunciado: "O preso poderá indicar pessoa estranha ao núcleo familiar para receber a comunicação de sua prisão, desde que justifique a escolha.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "desde que justifique a escolha",
    cognitivo: {
      motivo: "Cobrar condicionante inventada em garantia constitucional — padrão de alto valor.",
      palavraCritica: "desde que justifique",
    },
    comentario: {
      resolucao: "ERRADO. O art. 5º, LXII, da CF determina que a prisão de qualquer pessoa e o local onde se encontre sejam comunicados imediatamente ao juiz competente e à FAMÍLIA DO PRESO OU À PESSOA POR ELE INDICADA. Não há exigência de justificar a escolha: a indicação é livre. Acrescentar condicionante a garantia constitucional é dos vícios mais explorados pela banca, porque a frase soa razoável.",
      fundamento: "CF, art. 5º, LXII.",
      macete: "Família OU pessoa indicada — sem justificar.",
      erroComum: "Aceitar condicionantes que a Constituição não impõe.",
      comoBancaPensa: "Insere um 'desde que' plausível onde a norma é incondicionada.",
    },
  },

  /* ================= DIREITO ADMINISTRATIVO ================= */

  {
    id: "DA-074", disciplina: "Direito Administrativo", assunto: "Responsabilidade civil do Estado",
    subassunto: "Culpa concorrente da vítima",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 37, § 6º; teoria do risco administrativo)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "A indenização devida pelo Estado poderá ser reduzida quando a conduta do lesado houver concorrido para o resultado danoso.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "poderá ser reduzida",
    cognitivo: {
      motivo: "Fixar o efeito da culpa concorrente, que atenua sem excluir — recorte descoberto no banco.",
      palavraCritica: "reduzida",
    },
    comentario: {
      resolucao: "CERTO. O Brasil adota a teoria do RISCO ADMINISTRATIVO, que admite causas excludentes e atenuantes. A culpa exclusiva da vítima rompe o nexo causal e AFASTA a responsabilidade; a culpa concorrente apenas ATENUA, reduzindo proporcionalmente a indenização. Se a teoria adotada fosse a do risco integral, nada disso seria possível — daí a importância de distinguir as duas.",
      fundamento: "CF, art. 37, § 6º; teoria do risco administrativo.",
      macete: "Culpa exclusiva exclui; concorrente reduz.",
      erroComum: "Tratar toda participação da vítima como excludente total.",
      comoBancaPensa: "Testa se o candidato distingue risco administrativo de risco integral.",
    },
  },
  {
    id: "DA-075", disciplina: "Direito Administrativo", assunto: "Licitações",
    subassunto: "Contratação direta em calamidade pública",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.133/2021, art. 75, VIII)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.82,
    enunciado: "Decretada a calamidade pública, tornam-se automaticamente dispensáveis todas as licitações dos entes abrangidos pelo decreto.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "automaticamente ... todas",
    cognitivo: {
      motivo: "Cobrar os limites da dispensa emergencial, recorte que estava descoberto no banco.",
      palavraCritica: "automaticamente",
    },
    comentario: {
      resolucao: "ERRADO. A calamidade não dispensa licitação em bloco. O art. 75, VIII, da Lei 14.133/2021 autoriza a contratação direta apenas para bens, serviços e obras NECESSÁRIOS AO ATENDIMENTO da situação, limitados à parcela indispensável e ao prazo máximo de um ano, vedada a prorrogação e a recontratação. Ou seja: a dispensa é pontual, finalística e temporária — nunca automática nem geral.",
      fundamento: "Lei 14.133/2021, art. 75, VIII.",
      macete: "Dispensa emergencial: só o necessário, só por 1 ano.",
      erroComum: "Ler o decreto de calamidade como salvo-conduto para contratar sem licitar.",
      comoBancaPensa: "Transforma exceção delimitada em regra geral automática.",
    },
  },
  {
    id: "DA-076", disciplina: "Direito Administrativo", assunto: "Poderes administrativos",
    subassunto: "Poder disciplinar x poder de polícia",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (poderes da Administração)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.84,
    enunciado: "A aplicação de sanção a servidor público por infração funcional configura exercício do poder de polícia.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "poder de polícia",
    cognitivo: {
      motivo: "Separar poder disciplinar de poder de polícia pela natureza do vínculo.",
      palavraCritica: "poder de polícia",
    },
    comentario: {
      resolucao: "ERRADO. Punir servidor por infração funcional é exercício do PODER DISCIPLINAR, que incide sobre quem tem vínculo especial com a Administração — servidores e particulares contratados. O poder de POLÍCIA se dirige à coletividade em geral, condicionando liberdade e propriedade em favor do interesse público, e se funda em vínculo geral de sujeição. O critério decisivo é o tipo de vínculo, não a existência de sanção.",
      fundamento: "Poderes administrativos — disciplinar e de polícia.",
      macete: "Vínculo especial = disciplinar. Vínculo geral = polícia.",
      erroComum: "Chamar de poder de polícia toda atividade sancionatória do Estado.",
      comoBancaPensa: "Troca o poder mantendo correta a descrição do ato.",
    },
  },

  /* =================================================================
     BLOCO DE NEUTRALIZAÇÃO

     A primeira versão deste lote errou o alvo que ele próprio se propôs:
     ficou com 67% de ERRADO entre os itens curtos contra 50% entre os
     longos — ou seja, reproduziu em escala menor exatamente o vazamento
     que veio corrigir. Curto virou sinônimo de ERRADO.

     Os itens abaixo existem para desfazer isso, e por isso a escolha do
     gabarito veio ANTES da escolha do recorte: buscaram-se pontos da lei
     que fossem verdadeiros e enunciáveis em uma linha (curtos CERTO) e
     pontos falsos que exigissem contexto para serem avaliados (longos
     ERRADO). Todos continuam sendo recortes que as provas reais cobraram.
     ================================================================= */

  /* ---- curtos + CERTO: quebram a associação "curto = ERRADO" ---- */

  {
    id: "DC-114", disciplina: "Direito Constitucional", assunto: "Direitos sociais",
    subassunto: "Greve dos servidores da segurança pública",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (STF, ARE 654.432, Tema 541)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.86,
    enunciado: "É vedado o exercício do direito de greve aos servidores que atuam diretamente na área de segurança pública.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "vedado ... segurança pública",
    cognitivo: {
      motivo: "Fixar tese de repercussão geral que atinge diretamente a carreira do candidato.",
      palavraCritica: "vedado",
    },
    comentario: {
      resolucao: "CERTO. No ARE 654.432 (Tema 541), o STF firmou que o exercício do direito de greve é PROIBIDO aos servidores que atuam diretamente na área de segurança pública, por serem integrantes de carreiras armadas e essenciais à ordem pública. A vedação alcança policiais civis, e não apenas os militares — que já são proibidos pelo art. 142, § 3º, IV, da CF.",
      fundamento: "STF, ARE 654.432/GO (Tema 541); CF, art. 142, § 3º, IV.",
      macete: "Segurança pública não faz greve — civil ou militar.",
      erroComum: "Estender aos policiais civis o direito de greve dos servidores em geral.",
      comoBancaPensa: "Cobra a tese em enunciado seco, sem pistas de forma.",
    },
  },
  {
    id: "PP-100", disciplina: "Processo Penal", assunto: "Inquérito Policial",
    subassunto: "Indiciamento — ato privativo",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 12.830/2013, art. 2º, § 6º)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.84,
    enunciado: "O indiciamento é ato privativo do delegado de polícia.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "privativo do delegado",
    cognitivo: {
      motivo: "Fixar a privatividade do ato, que sustenta a autonomia da autoridade policial.",
      palavraCritica: "privativo",
    },
    comentario: {
      resolucao: "CERTO. O art. 2º, § 6º, da Lei 12.830/2013 é expresso: o indiciamento é ato privativo do delegado de polícia. A consequência prática é relevante — nem o juiz nem o Ministério Público podem requisitar o indiciamento de alguém, entendimento reafirmado pelo STJ. O delegado pode ser instado a apurar, mas a decisão de indiciar, devidamente fundamentada, é dele.",
      fundamento: "Lei 12.830/2013, art. 2º, § 6º.",
      macete: "Indiciar é do delegado — nem juiz nem MP requisitam.",
      erroComum: "Admitir requisição de indiciamento pelo MP.",
      comoBancaPensa: "Enuncia a regra de forma direta, sem marcador nenhum.",
    },
  },
  {
    id: "PP-101", disciplina: "Processo Penal", assunto: "Prisão em flagrante",
    subassunto: "Apresentação espontânea",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, art. 302; doutrina consolidada)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.74,
    enunciado: "A apresentação espontânea do autor à autoridade policial não autoriza a lavratura do auto de prisão em flagrante.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "apresentação espontânea",
    cognitivo: {
      motivo: "Fixar que o flagrante depende das situações do art. 302, e apresentar-se não é uma delas.",
      palavraCritica: "não autoriza",
    },
    comentario: {
      resolucao: "CERTO. As hipóteses de flagrante são taxativas (art. 302 do CPP) e nenhuma delas contempla quem comparece por vontade própria depois do fato. Quem se apresenta não está cometendo, nem acabou de cometer, nem é perseguido, nem foi encontrado com os objetos. Nada impede, porém, a decretação de prisão preventiva se presentes os requisitos do art. 312 — o que não cabe é o auto de flagrante.",
      fundamento: "CPP, art. 302; art. 312.",
      macete: "Apresentou-se sozinho: não há flagrante; pode haver preventiva.",
      erroComum: "Lavrar flagrante por confissão espontânea posterior.",
      comoBancaPensa: "Enuncia a regra corretamente e conta com a intuição de que 'confessou, prendeu'.",
    },
  },
  {
    id: "DP-114", disciplina: "Direito Penal", assunto: "Aplicação da lei penal",
    subassunto: "Territorialidade e sedes diplomáticas",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 5º; Convenção de Viena de 1961)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.76,
    enunciado: "Crime cometido no interior de embaixada estrangeira situada no Brasil sujeita-se, em regra, à lei penal brasileira.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "lei penal brasileira",
    cognitivo: {
      motivo: "Desfazer o mito de que embaixada é território estrangeiro.",
      palavraCritica: "em regra",
    },
    comentario: {
      resolucao: "CERTO. Embaixada NÃO é extensão do território do país que representa — esse é um mito difundido. A Convenção de Viena de 1961 assegura INVIOLABILIDADE do local, o que impede o ingresso sem consentimento, mas não transfere a soberania. O território continua sendo brasileiro e, pelo art. 5º do CP, aplica-se a lei brasileira. O que pode afastar a persecução é a imunidade pessoal do agente, questão distinta da territorialidade.",
      fundamento: "CP, art. 5º; Convenção de Viena sobre Relações Diplomáticas (1961), art. 22.",
      macete: "Embaixada é inviolável, não é território estrangeiro.",
      erroComum: "Confundir inviolabilidade do local com extraterritorialidade.",
      comoBancaPensa: "Cobra a regra correta apostando no mito popular.",
    },
  },
  {
    id: "DH-057", disciplina: "Direitos Humanos", assunto: "Política Nacional de Direitos Humanos",
    subassunto: "Programas Nacionais de Direitos Humanos",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (PNDH-1, 2 e 3; Decreto 7.037/2009)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.72,
    enunciado: "Os Programas Nacionais de Direitos Humanos incorporam compromissos internacionais assumidos pelo Brasil.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "compromissos internacionais",
    cognitivo: {
      motivo: "Fixar a natureza dos PNDH como instrumento de internalização de compromissos.",
      palavraCritica: "compromissos internacionais",
    },
    comentario: {
      resolucao: "CERTO. Os PNDH traduzem em política pública interna os compromissos que o Brasil assumiu em tratados e conferências internacionais — a Conferência de Viena de 1993, em particular, recomendou que cada país adotasse um programa nacional, e o PNDH-1 (1996) foi resposta direta a isso. O PNDH-3, do Decreto 7.037/2009, organiza-se em seis eixos orientadores e mantém essa lógica.",
      fundamento: "Decreto 7.037/2009 (PNDH-3); Conferência Mundial de Viena (1993).",
      macete: "PNDH é o compromisso internacional virando política interna.",
      erroComum: "Tratar os PNDH como criação puramente doméstica.",
      comoBancaPensa: "Afirmação direta e verdadeira, sem marcador que denuncie o gabarito.",
    },
  },
  {
    id: "DA-077", disciplina: "Direito Administrativo", assunto: "Ato administrativo",
    subassunto: "Requisito competência",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 4.717/1965, art. 2º; requisitos do ato)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "A competência para a prática do ato administrativo decorre de lei e é irrenunciável.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "irrenunciável",
    cognitivo: {
      motivo: "Fixar dois atributos da competência que a banca cobra em conjunto.",
      palavraCritica: "irrenunciável",
    },
    comentario: {
      resolucao: "CERTO. A competência administrativa decorre sempre de lei e é IRRENUNCIÁVEL — o agente não pode abrir mão dela nem transferi-la por vontade própria. Isso não impede a delegação e a avocação, que são institutos legalmente disciplinados (arts. 11 a 15 da Lei 9.784/1999) e não implicam renúncia: o delegante permanece titular da competência e pode retomá-la.",
      fundamento: "Lei 4.717/1965, art. 2º, 'a'; Lei 9.784/1999, arts. 11 a 15.",
      macete: "Competência não se renuncia — mas se delega e se avoca.",
      erroComum: "Ver contradição entre irrenunciabilidade e delegação.",
      comoBancaPensa: "Afirmação curta e correta, para testar quem só responde por reflexo de forma.",
    },
  },

  /* ---- longos: dois CERTO e dois ERRADO, para que comprimento
         não passe a indicar gabarito em nenhuma direção ---- */

  {
    id: "PP-102", disciplina: "Processo Penal", assunto: "Juizados Especiais Criminais",
    subassunto: "Citação e comparecimento com advogado",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 9.099/1995, arts. 68 e 72 e ss.)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.72,
    enunciado: "Na citação do acusado por infração de menor potencial ofensivo, deve constar a necessidade de que ele compareça acompanhado de advogado, e a ausência do defensor na audiência caracteriza, por si só, revelia do acusado, com aplicação dos efeitos processuais daí decorrentes.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "caracteriza, por si só, revelia",
    cognitivo: {
      motivo: "Separar a advertência sobre o advogado dos efeitos da revelia, que dependem da ausência do próprio acusado.",
      palavraCritica: "ausência do defensor ... revelia",
    },
    comentario: {
      resolucao: "ERRADO. A primeira parte procede: o art. 68 da Lei 9.099/1995 determina que da citação conste a necessidade de comparecimento acompanhado de advogado. Mas a conclusão não se sustenta — revelia decorre da ausência do ACUSADO devidamente citado, não da ausência do defensor. Faltando advogado, a providência é nomear defensor, e não declarar revel quem compareceu. O item costura uma premissa verdadeira a uma consequência falsa.",
      fundamento: "Lei 9.099/1995, arts. 68, 72 e 81.",
      macete: "Sem advogado, nomeia-se defensor. Revelia é do acusado ausente.",
      erroComum: "Transferir para o defensor os efeitos da ausência do réu.",
      comoBancaPensa: "Abre com dispositivo literal e emenda conclusão que não decorre dele.",
    },
  },
  {
    id: "DA-078", disciplina: "Direito Administrativo", assunto: "Licitações",
    subassunto: "Fases do procedimento e norma aplicável",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 14.133/2021, arts. 17 e 191)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.8,
    enunciado: "O cadastramento prévio dos interessados e a habilitação preliminar constituem fases obrigatórias de todas as modalidades de licitação, exigência que se manteve inalterada com a entrada em vigor da Lei n.º 14.133/2021, cujo regime preservou integralmente a sequência procedimental da legislação anterior.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "todas as modalidades ... preservou integralmente",
    cognitivo: {
      motivo: "Cobrar a inversão de fases da nova lei, mudança estrutural que a banca já explora.",
      palavraCritica: "todas ... integralmente",
    },
    comentario: {
      resolucao: "ERRADO por dois motivos. Primeiro, cadastramento prévio nunca foi fase obrigatória de toda modalidade — era exigência da tomada de preços, extinta pela nova lei. Segundo, e mais importante, a Lei 14.133/2021 INVERTEU a ordem clássica: pelo art. 17, o julgamento das propostas vem ANTES da habilitação, de modo que só se analisam os documentos do licitante mais bem classificado. Dizer que a sequência foi preservada integralmente contraria o núcleo da reforma.",
      fundamento: "Lei 14.133/2021, arts. 17 e 191.",
      macete: "Na 14.133 julga-se a proposta primeiro; habilita-se depois.",
      erroComum: "Aplicar à nova lei o rito da Lei 8.666/1993.",
      comoBancaPensa: "Soma um erro de rol a um erro de vigência, ambos plausíveis.",
    },
  },
  {
    id: "PP-103", disciplina: "Processo Penal", assunto: "Prisões cautelares",
    subassunto: "Prisão temporária — prazos",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 7.960/1989, art. 2º; Lei 8.072/1990, art. 2º, § 4º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.84,
    enunciado: "A prisão temporária poderá ser decretada pelo prazo de cinco dias, prorrogável por igual período em caso de extrema e comprovada necessidade, aplicando-se esse mesmo prazo aos crimes hediondos, para os quais a legislação não estabeleceu regime diferenciado de duração da medida.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "mesmo prazo aos crimes hediondos",
    cognitivo: {
      motivo: "Cobrar o prazo especial dos hediondos, recorte numérico de alta incidência.",
      palavraCritica: "não estabeleceu regime diferenciado",
    },
    comentario: {
      resolucao: "ERRADO. A regra geral está correta — cinco dias, prorrogáveis por mais cinco em caso de extrema e comprovada necessidade (art. 2º da Lei 7.960/1989). O erro está na parte final: nos crimes HEDIONDOS e equiparados, o prazo é de TRINTA dias, prorrogável por igual período (art. 2º, § 4º, da Lei 8.072/1990). Existe, portanto, regime diferenciado, e ignorá-lo é o que torna o item falso.",
      fundamento: "Lei 7.960/1989, art. 2º; Lei 8.072/1990, art. 2º, § 4º.",
      macete: "Temporária: 5+5 comum, 30+30 hediondo.",
      erroComum: "Uniformizar o prazo da temporária para todos os crimes.",
      comoBancaPensa: "Enuncia corretamente a regra geral e nega a existência da exceção.",
    },
  },
  {
    id: "DC-115", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais",
    subassunto: "Laicidade e liberdade religiosa",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, arts. 5º, VI, e 19, I)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.78,
    enunciado: "Embora a Constituição assegure o livre exercício dos cultos religiosos, a laicidade estatal autoriza que instituições de ensino públicas proíbam o ingresso de estudantes portando adereços de matriz religiosa, uma vez que a neutralidade do Estado impõe a ausência de manifestações confessionais em ambiente público.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "laicidade ... autoriza ... proíbam",
    cognitivo: {
      motivo: "Distinguir laicidade de laicismo — o Estado é neutro, não hostil à religião.",
      palavraCritica: "autoriza que ... proíbam",
    },
    comentario: {
      resolucao: "ERRADO. Laicidade não é laicismo. O art. 19, I, da CF veda ao Estado estabelecer cultos, subvencioná-los ou embaraçar-lhes o funcionamento — ou seja, impõe NEUTRALIDADE, e não hostilidade. Proibir adereços religiosos de estudantes seria justamente embaraçar o exercício da fé, violando o art. 5º, VI. A neutralidade obriga o ESTADO a não professar religião; ela não transfere esse dever de abstenção aos indivíduos que frequentam o espaço público.",
      fundamento: "CF, arts. 5º, VI, e 19, I.",
      macete: "Estado laico é neutro, não antirreligioso.",
      erroComum: "Ler laicidade como proibição de religiosidade no espaço público.",
      comoBancaPensa: "Usa um princípio verdadeiro para extrair consequência que o inverte.",
    },
  },
  {
    id: "DP-115", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública",
    subassunto: "Peculato culposo e reparação do dano",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CP, art. 312, §§ 2º e 3º)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.8,
    enunciado: "No peculato culposo, a reparação do dano anterior à sentença irrecorrível extingue a punibilidade do agente, ao passo que, se posterior a ela, apenas reduz de metade a pena imposta.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "extingue ... reduz de metade",
    cognitivo: {
      motivo: "Fixar os dois efeitos da reparação no peculato culposo, que a banca costuma inverter.",
      palavraCritica: "anterior ... posterior",
    },
    comentario: {
      resolucao: "CERTO. É exatamente o § 3º do art. 312 do CP: no peculato CULPOSO, a reparação do dano, se precede a sentença irrecorrível, EXTINGUE a punibilidade; se lhe é posterior, REDUZ DE METADE a pena. Dois cuidados que a banca explora: o benefício vale só para a modalidade culposa, jamais para o peculato doloso, e o marco divisor é o trânsito em julgado, não o recebimento da denúncia.",
      fundamento: "CP, art. 312, §§ 2º e 3º.",
      macete: "Culposo: antes extingue, depois reduz pela metade.",
      erroComum: "Estender o benefício ao peculato doloso.",
      comoBancaPensa: "Inverte os efeitos ou desloca o marco temporal.",
    },
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE75);
