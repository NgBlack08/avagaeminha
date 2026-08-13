/* =====================================================================
   QUESTLAB — Lote 84: DIREITO PENAL, ITENS DE PROVA REAL

   PROCEDÊNCIA E O QUE FOI FEITO COM ELA

   Os enunciados vêm de um compilado de itens da CEBRASPE de carreiras
   policiais (PC-AL 2021, PC-DF 2021, PF 2025, PC-PE 2024). Enunciado de
   prova aplicada é público; o que NÃO foi aproveitado do compilado foi
   o comentário — cada resolução aqui é escrita do zero, contra a fonte
   normativa, e cada gabarito foi reconferido.

   POR QUE RECONFERIR: o compilado erra.

   Confrontando os enunciados com os cadernos oficiais que temos em
   arquivo, apareceram divergências de gabarito — todas na mesma direção
   (o material marcava CERTO onde o item é ERRADO). Duas foram provadas
   pela lei, não por tabela, e estão corrigidas nos lotes 86 e 85.
   Por isso nenhum gabarito daqui foi aceito pela palavra do material.

   NÍVEIS DE CONFERÊNCIA — declarados item a item no campo `origem`:
     - "gabarito conferido no caderno oficial": o item foi localizado no
       caderno da prova e o veredito veio da JUSTIFICATIVA oficial da
       banca. É o padrão-ouro. Aqui: DP-120, DP-121, DP-123, DP-126.
     - "gabarito revisado na fonte normativa": o caderno não está no
       nosso acervo (é o caso de toda a PC-AL 2021); o gabarito foi
       validado contra lei, súmula ou jurisprudência, citada na
       resolução. A atribuição de prova/ano vem do compilado e não foi
       possível conferir.

   UM CASO QUE VALEU A CONFERÊNCIA. DP-123 (o falso sequestro por
   telefone) é daqueles em que o instinto engana: a vítima foi
   "ludibriada", o que puxa para estelionato. A justificativa oficial da
   banca diz extorsão, e explica por quê — na extorsão a vítima percebe
   a situação criminosa e cede por temor, não por engano. Se eu tivesse
   arbitrado sozinho, teria errado.

   Gabarito: 11 CERTO / 6 ERRADO. O desequilíbrio é do material de
   origem, não uma escolha de autoria — são itens reais com gabaritos
   reais, e inverter qualquer um deles seria falsificar a prova.
   ===================================================================== */

const CARGOS84 = ["Escrivão", "Agente"];
const BASE84 = {
  concurso: "PCAL", cargo: CARGOS84, ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  disciplina: "Direito Penal",
};

const QUESTOES_PCAL_LOTE84 = [

  /* ===== APLICAÇÃO DA LEI PENAL ===== */

  {
    ...BASE84,
    id: "DP-116", assunto: "Aplicação da lei penal",
    subassunto: "Abolitio criminis x continuidade normativo-típica",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito revisado na fonte normativa (CP, art. 2º)",
    dificuldade: 3, tempoIdealSeg: 90,
    enunciado: "Ocorre abolitio criminis quando o tipo penal é revogado por outra norma, e a norma revogadora desloca o caráter criminoso do fato para outro tipo penal recém-criado.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "desloca o caráter criminoso do fato para outro tipo penal",
    cognitivo: {
      motivo: "Separar revogação FORMAL de descriminalização MATERIAL — é a distinção que a banca cobra sob o nome de continuidade normativo-típica.",
      palavraCritica: "desloca ... para outro tipo penal",
    },
    comentario: {
      resolucao: "ERRADO. O enunciado descreve com precisão a CONTINUIDADE NORMATIVO-TÍPICA, que é o oposto da abolitio criminis. Na abolitio criminis (CP, art. 2º, caput), o fato deixa de ser crime: a conduta some do ordenamento, cessando execução e efeitos penais da condenação. Aqui, ao contrário, o conteúdo criminoso MIGRA para outro tipo — o rótulo muda, a incriminação permanece. O exemplo clássico é o do rapto violento (antigo art. 219), revogado pela Lei 11.106/2005 e absorvido pelo sequestro qualificado (art. 148, § 1º, V): quem praticou o fato continua respondendo.",
      fundamento: "CP, art. 2º, caput; princípio da continuidade normativo-típica.",
      macete: "Sumiu a conduta = abolitio. Sumiu só o artigo = continuidade.",
      erroComum: "Achar que revogar o dispositivo basta para descriminalizar.",
      comoBancaPensa: "Descreve corretamente um instituto e o batiza com o nome do outro. O enunciado fica todo verdadeiro, menos a etiqueta.",
    },
  },

  {
    ...BASE84,
    id: "DP-117", assunto: "Aplicação da lei penal",
    subassunto: "Ultratividade da lei excepcional e temporária — art. 3º",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito revisado na fonte normativa (CP, art. 3º)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "Quando a lei penal tiver validade para determinado período de tempo, o fato praticado durante esse período continuará a ser punível mesmo após o término de vigência da lei.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "continuará a ser punível mesmo após o término de vigência",
    cognitivo: {
      motivo: "Fixar a exceção à retroatividade benéfica: leis temporárias e excepcionais são ultrativas por determinação legal.",
      palavraCritica: "mesmo após o término de vigência",
    },
    comentario: {
      resolucao: "CERTO. É o art. 3º do CP: a lei excepcional ou temporária, embora decorrido o período de sua duração ou cessadas as circunstâncias que a determinaram, APLICA-SE ao fato praticado durante sua vigência. Chama-se ultratividade. A razão de ser é prática: se o fim do prazo apagasse a punição, a lei temporária nasceria inofensiva — bastaria ao agente aguardar o calendário. Por isso ela é a exceção expressa à regra da retroatividade da lei mais benéfica do art. 2º, parágrafo único.",
      fundamento: "CP, art. 3º.",
      macete: "Lei com prazo de validade não caduca para quem violou dentro do prazo.",
      erroComum: "Aplicar a retroatividade benéfica do art. 2º e concluir que o fato fica impune.",
      comoBancaPensa: "Cobra a exceção sem nomeá-la, para ver quem decora só a regra geral.",
    },
  },

  /* ===== CRIMES CONTRA O PATRIMÔNIO ===== */

  {
    ...BASE84,
    id: "DP-118", assunto: "Crimes contra o patrimônio",
    subassunto: "Furto mediante fraude — art. 155, § 4º, II",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CP, art. 155, § 4º, II)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "Comete crime de furto mediante fraude o agente que utiliza de um artifício ou ardil para retirar a vigilância da vítima e conseguir pegar a res furtiva.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "retirar a vigilância da vítima",
    cognitivo: {
      motivo: "Fixar o critério que separa furto mediante fraude de estelionato: quem executa a retirada do bem.",
      palavraCritica: "conseguir pegar",
    },
    comentario: {
      resolucao: "CERTO. No furto mediante fraude, o ardil serve para BAIXAR A GUARDA da vítima, e é o próprio agente quem subtrai a coisa — a vítima não entrega nada, apenas deixa de vigiar. No estelionato (art. 171), a fraude é o meio pelo qual a vítima é induzida a ENTREGAR espontaneamente o bem. O divisor é esse: fraude que afasta a vigilância e subtração pelo agente = furto qualificado; fraude que provoca a entrega = estelionato. O caso escolar é o do falso mecânico que pede a chave para 'testar' o carro e sai dirigindo.",
      fundamento: "CP, art. 155, § 4º, II; contraste com o art. 171.",
      macete: "Quem tirou o bem? Agente = furto com fraude. Vítima entregou = estelionato.",
      erroComum: "Ver a palavra 'fraude' e responder estelionato automaticamente.",
      comoBancaPensa: "Explora a sobreposição entre dois tipos que compartilham o meio (fraude) e se separam pela execução.",
    },
  },

  {
    ...BASE84,
    id: "DP-119", assunto: "Crimes contra o patrimônio",
    subassunto: "Receptação — autonomia típica (art. 180, § 4º)",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito revisado na fonte normativa (CP, art. 180, § 4º)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "O crime de receptação é punível ainda que o autor do crime que originou a coisa seja isento de pena.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "ainda que ... isento de pena",
    cognitivo: {
      motivo: "Distinguir crime ACESSÓRIO de crime DEPENDENTE: a receptação pressupõe o fato anterior, não a punição do autor dele.",
      palavraCritica: "isento de pena",
    },
    comentario: {
      resolucao: "CERTO. Reprodução do art. 180, § 4º: a receptação é punível ainda que desconhecido ou isento de pena o autor do crime de que proveio a coisa. A receptação é crime ACESSÓRIO — exige que o fato anterior exista e seja típico e ilícito —, mas tem tipicidade AUTÔNOMA quanto à punibilidade do autor antecedente. Assim, se o furto foi praticado por inimputável, ou pelo filho contra o pai (imunidade do art. 181), ou por autor jamais identificado, o receptador responde do mesmo jeito.",
      fundamento: "CP, art. 180, § 4º.",
      macete: "O crime anterior precisa existir; o criminoso anterior não precisa ser punido.",
      erroComum: "Supor que isenção de pena do autor antecedente contamina o receptador.",
      comoBancaPensa: "Testa se o candidato confunde a existência do fato anterior com a punibilidade de quem o praticou.",
    },
  },

  {
    ...BASE84,
    id: "DP-120", assunto: "Crimes contra o patrimônio",
    subassunto: "Roubo impróprio — inadmissibilidade da tentativa",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito conferido no caderno oficial",
    dificuldade: 3, tempoIdealSeg: 105,
    enunciado: "Em se tratando do crime de roubo impróprio, embora seja ele material e plurissubsistente, não se admite a tentativa, pois a consumação ocorre antes do emprego de grave ameaça ou violência.",
    gabarito: "C",
    pegadinha: "juris-mais-lei",
    palavraChave: "não se admite a tentativa",
    cognitivo: {
      motivo: "Item difícil e contraintuitivo: crime material e plurissubsistente normalmente admite tentativa, e aqui não admite.",
      palavraCritica: "material e plurissubsistente",
    },
    comentario: {
      resolucao: "CERTO — e a justificativa oficial da banca confirma o raciocínio. No roubo impróprio (art. 157, § 1º), a subtração vem PRIMEIRO e a violência ou grave ameaça é empregada logo depois, para assegurar a impunidade ou a detenção da coisa. Como a subtração já está completa, só há duas saídas possíveis: se o agente emprega a violência, o roubo impróprio está consumado; se não emprega, o que sobra é furto consumado. Não existe a faixa intermediária em que a execução se inicia e não se completa — e é isso que torna a tentativa inviável, apesar de o crime ser material e plurissubsistente. Registre-se que há corrente minoritária admitindo a tentativa quando a violência é iniciada e interrompida; para a CEBRASPE, prevalece a posição do texto.",
      fundamento: "CP, art. 157, § 1º; posição dominante no STJ.",
      macete: "Empregou violência = consumado. Não empregou = furto. Não sobra tentativa.",
      erroComum: "Aplicar a regra geral ('material e plurissubsistente admite tentativa') sem ver a estrutura do tipo.",
      comoBancaPensa: "Coloca no enunciado as duas premissas que induzem à resposta errada e pede a exceção.",
    },
  },

  {
    ...BASE84,
    id: "DP-121", assunto: "Crimes contra o patrimônio",
    subassunto: "Extorsão x estelionato — o falso sequestro",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito conferido no caderno oficial",
    dificuldade: 3, tempoIdealSeg: 110,
    enunciado: "Jamil telefonou para Lurdes simulando o sequestro da neta dela. Ludibriada, Lurdes enviou dinheiro à conta de Jorge, comparsa de Jamil. Nessa situação, Jamil praticou o crime de estelionato.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "praticou o crime de estelionato",
    cognitivo: {
      motivo: "A palavra 'ludibriada' puxa para estelionato; o critério correto é outro — o que moveu a vítima a pagar.",
      palavraCritica: "Ludibriada",
    },
    comentario: {
      resolucao: "ERRADO. A conduta é EXTORSÃO (art. 158), como assentou a justificativa oficial da banca. O divisor não é a existência de engano, mas o que leva a vítima a entregar o dinheiro. No estelionato, a vítima não se percebe diante de um crime e entrega o bem por acreditar em uma vantagem ou obrigação; no falso sequestro, ela sabe que está diante de criminosos e paga porque se sente coagida — o pagamento é arrancado pelo medo. A mentira aqui é apenas o meio de criar a ameaça, e é a ameaça que constrange. Havendo dois agentes, incide ainda a majorante do concurso de pessoas (art. 158, § 1º).",
      fundamento: "CP, art. 158 e § 1º; contraste com o art. 171.",
      macete: "Pagou porque acreditou = estelionato. Pagou porque teve medo = extorsão.",
      erroComum: "Deixar a palavra 'ludibriada' decidir a tipificação.",
      comoBancaPensa: "Planta no enunciado o vocábulo que aponta para o tipo errado.",
    },
  },

  /* ===== CRIMES CONTRA A PESSOA ===== */

  {
    ...BASE84,
    id: "DP-122", assunto: "Crimes contra a pessoa",
    subassunto: "Infanticídio — concurso de pessoas e comunicabilidade",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CP, arts. 30 e 123)",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "O delito de infanticídio, por ser crime próprio, não admite coautoria e participação, de modo que condições e circunstâncias de caráter pessoal não serão comunicadas aos demais concorrentes.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "não admite coautoria e participação",
    cognitivo: {
      motivo: "Duas afirmações erradas encadeadas a partir de uma premissa correta (é crime próprio).",
      palavraCritica: "não admite ... não serão comunicadas",
    },
    comentario: {
      resolucao: "ERRADO em dois pontos. Primeiro: crime PRÓPRIO exige qualidade especial do autor, mas admite normalmente coautoria e participação — o que não admite concurso é o crime de mão própria, e mesmo esse admite participação. Segundo, e principal: o art. 30 do CP determina que não se comunicam as circunstâncias e condições de caráter pessoal SALVO QUANDO ELEMENTARES DO CRIME. O estado puerperal é elementar do infanticídio (art. 123), logo COMUNICA-SE ao terceiro que concorre, desde que ele saiba dessa condição. Quem ajuda a mãe sob influência do estado puerperal responde por infanticídio, não por homicídio.",
      fundamento: "CP, arts. 29, 30 e 123.",
      macete: "Elementar comunica. Circunstância pessoal não.",
      erroComum: "Aplicar a incomunicabilidade do art. 30 sem ler a ressalva final do próprio artigo.",
      comoBancaPensa: "Parte de uma verdade ('é crime próprio') e deduz dela duas consequências falsas.",
    },
  },

  {
    ...BASE84,
    id: "DP-123", assunto: "Crimes contra a pessoa",
    subassunto: "Lesão corporal gravíssima — deformidade permanente",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CP, art. 129, § 2º, IV)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "O agente que jogar óleo quente na vítima, com animus laedendi, causando, assim, deformidade permanente nela, segundo laudo médico, cometerá crime de lesão corporal gravíssima.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "deformidade permanente",
    cognitivo: {
      motivo: "Fixar a deformidade permanente como qualificadora do § 2º, e não do § 1º.",
      palavraCritica: "animus laedendi",
    },
    comentario: {
      resolucao: "CERTO. A deformidade permanente está no art. 129, § 2º, IV — o parágrafo que a doutrina chama de lesão GRAVÍSSIMA (a lei usa apenas 'lesão grave' nos §§ 1º e 2º; a subdivisão é doutrinária e é a que as bancas adotam). Dois detalhes que sustentam o gabarito: o animus laedendi afasta o dolo de matar, o que impede desclassificar para tentativa de homicídio; e a deformidade precisa ser permanente e visível, aferida por laudo — exatamente o que o enunciado fornece. Se a lesão fosse reparável por cirurgia acessível, a qualificadora cairia.",
      fundamento: "CP, art. 129, § 2º, IV.",
      macete: "§ 1º grave, § 2º gravíssima. Deformidade permanente mora no § 2º.",
      erroComum: "Classificar como lesão grave (§ 1º) ou tentar puxar para tentativa de homicídio.",
      comoBancaPensa: "Entrega o laudo e o animus no enunciado para que o erro só possa estar na classificação.",
    },
  },

  {
    ...BASE84,
    id: "DP-124", assunto: "Crimes contra a pessoa",
    subassunto: "Ameaça — destinatário determinado",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CP, art. 147)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Não há crime de ameaça quando o agente promete um mal injusto e grave contra pessoas absolutamente indeterminadas.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "absolutamente indeterminadas",
    cognitivo: {
      motivo: "A ameaça exige vítima determinada ou determinável — sem destinatário não há bem jurídico individual atingido.",
      palavraCritica: "absolutamente indeterminadas",
    },
    comentario: {
      resolucao: "CERTO. O art. 147 pune ameaçar ALGUÉM de mal injusto e grave. O tipo protege a liberdade psíquica de uma pessoa concreta, de modo que a promessa lançada ao vento, sem destinatário identificável, não o preenche. Note o cuidado: 'absolutamente indeterminadas' é diferente de plural — ameaçar um grupo determinável (os moradores de uma casa, os funcionários de um setor) configura o crime, eventualmente em concurso. Ameaça genérica dirigida à coletividade pode caracterizar outro delito, como incitação ao crime (art. 286), mas não o art. 147.",
      fundamento: "CP, art. 147; contraste com o art. 286.",
      macete: "Ameaça precisa de endereço. Sem destinatário, não é art. 147.",
      erroComum: "Confundir vítimas indeterminadas com vítimas múltiplas.",
      comoBancaPensa: "Usa 'absolutamente indeterminadas' como chave do gabarito — retirar o advérbio mudaria a resposta.",
    },
  },

  {
    ...BASE84,
    id: "DP-125", assunto: "Crimes contra a pessoa",
    subassunto: "Ameaça em violência doméstica — ação penal",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CP, art. 147, parágrafo único; Súmula 542 do STJ)",
    dificuldade: 3, tempoIdealSeg: 90,
    enunciado: "O crime de ameaça praticado por marido contra a sua esposa é processado por ação penal pública incondicionada, dispensando-se a representação da vítima.",
    gabarito: "E",
    pegadinha: "generalizacao",
    palavraChave: "incondicionada, dispensando-se a representação",
    cognitivo: {
      motivo: "A Súmula 542 do STJ vale para LESÃO CORPORAL em violência doméstica — estendê-la à ameaça é o erro plantado.",
      palavraCritica: "dispensando-se a representação",
    },
    comentario: {
      resolucao: "ERRADO. A ameaça procede mediante REPRESENTAÇÃO (art. 147, parágrafo único), e o contexto de violência doméstica não altera isso. O que a Súmula 542 do STJ tornou incondicionada foi a ação penal na LESÃO CORPORAL praticada contra a mulher em ambiente doméstico — e apenas ela. Para os demais crimes regidos pela Lei 11.340/2006, vale a natureza da ação prevista no tipo respectivo; tratando-se de ameaça, permanece condicionada, com a exigência adicional do art. 16 da Lei Maria da Penha, que só admite a renúncia à representação em audiência, perante o juiz e ouvido o Ministério Público.",
      fundamento: "CP, art. 147, parágrafo único; Lei 11.340/2006, art. 16; Súmula 542 do STJ.",
      macete: "Súmula 542 é de LESÃO. Ameaça continua pedindo representação.",
      erroComum: "Generalizar a Súmula 542 para todos os crimes da Lei Maria da Penha.",
      comoBancaPensa: "Aproveita uma súmula muito conhecida e amplia seu alcance para além do crime que ela trata.",
      jurisprudencia: "Súmula 542 do STJ: a ação penal relativa ao crime de lesão corporal resultante de violência doméstica contra a mulher é pública incondicionada.",
    },
  },

  {
    ...BASE84,
    id: "DP-126", assunto: "Crimes contra a Administração Pública",
    subassunto: "Desobediência x resistência — pena comparada",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito conferido no caderno oficial",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "Configura crime de desobediência a oposição à execução de ato legal, emanado por funcionário público, mediante atitude negativa, sendo a pena privativa de liberdade prevista para tal crime mais branda que a prevista para o crime de resistência.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "mais branda que a prevista para o crime de resistência",
    cognitivo: {
      motivo: "Além de distinguir os dois tipos pelo emprego de violência, o item cobra a comparação das penas.",
      palavraCritica: "atitude negativa",
    },
    comentario: {
      resolucao: "CERTO nas duas afirmações. Quanto ao tipo: a desobediência (art. 330) é a oposição PASSIVA — o agente simplesmente não cumpre a ordem legal, sem violência nem ameaça; quando há violência ou grave ameaça contra o funcionário, o crime passa a ser resistência (art. 329). Quanto às penas, a comparação confirma o enunciado: desobediência é detenção de 15 dias a 6 meses, e multa; resistência é detenção de 2 meses a 2 anos. A resposta passiva é punida mais brandamente justamente porque não agride a integridade do agente público.",
      fundamento: "CP, arts. 329 e 330.",
      macete: "Sem violência = desobediência, pena menor. Com violência = resistência, pena maior.",
      erroComum: "Acertar a distinção conceitual e errar a comparação das penas, que é a segunda metade do item.",
      comoBancaPensa: "Encadeia uma parte fácil e uma parte que exige o dado numérico, e basta uma estar errada para o item cair.",
    },
  },

  {
    ...BASE84,
    id: "DP-127", assunto: "Crimes contra a Administração Pública",
    subassunto: "Concussão — exigência de vantagem indevida",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito conferido no caderno oficial",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "Após ter sido roubada, a vítima procurou uma delegacia, onde foi atendida por agente de polícia que exigiu certa quantia em dinheiro para proceder às diligências de praxe. Nessa situação, o agente praticou crime de concussão.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "exigiu certa quantia em dinheiro",
    cognitivo: {
      motivo: "O verbo do enunciado decide o tipo: exigir é concussão, solicitar é corrupção passiva.",
      palavraCritica: "exigiu",
    },
    comentario: {
      resolucao: "CERTO. Concussão (art. 316) é EXIGIR, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida. Todos os elementos estão no caso: agente público, exigência, vantagem indevida e nexo com a função. O que distingue da corrupção passiva (art. 317) é o verbo — ali o agente SOLICITA, RECEBE ou ACEITA PROMESSA, numa relação em que a vítima tem margem para recusar; na concussão há imposição, a vítima é constrangida pelo poder do cargo. E não se trata de extorsão, porque o meio de constrangimento é a própria autoridade, não a violência ou ameaça de mal.",
      fundamento: "CP, art. 316; contraste com os arts. 317 e 158.",
      macete: "Exigiu = concussão. Solicitou = corrupção passiva.",
      erroComum: "Responder corrupção passiva sem reparar no verbo empregado.",
      comoBancaPensa: "Constrói um caso curto em que só o verbo importa, e o verbo aparece uma vez só.",
    },
  },

  {
    ...BASE84,
    id: "DP-128", assunto: "Crimes contra a Administração Pública",
    subassunto: "Prevaricação — elemento subjetivo especial",
    origem: "CEBRASPE PF 2025 (Escrivão) — gabarito revisado na fonte normativa (CP, art. 319)",
    dificuldade: 3, tempoIdealSeg: 90,
    enunciado: "O crime de prevaricação exige, além da conduta típica de retardar, deixar de praticar ou praticar indevidamente ato de ofício, o dolo específico de satisfazer interesse ou sentimento pessoal, não sendo suficiente a constatação de mera negligência ou descompromisso funcional.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "dolo específico de satisfazer interesse ou sentimento pessoal",
    cognitivo: {
      motivo: "A prevaricação sem a finalidade especial não é crime — é, no máximo, infração disciplinar.",
      palavraCritica: "não sendo suficiente ... mera negligência",
    },
    comentario: {
      resolucao: "CERTO. O art. 319 encerra com a finalidade 'para satisfazer interesse ou sentimento pessoal', que é elemento subjetivo especial do tipo. Sem ela, a conduta é atípica na esfera penal, ainda que renda punição administrativa: servidor desidioso, lento ou desinteressado não comete prevaricação. Também não há prevaricação culposa — o CP não prevê essa modalidade. É precisamente a dificuldade de provar o ânimo pessoal que torna o tipo de aplicação rara na prática.",
      fundamento: "CP, art. 319.",
      macete: "Sem interesse ou sentimento pessoal, não é prevaricação — é só desídia.",
      erroComum: "Enquadrar como prevaricação qualquer omissão funcional relevante.",
      comoBancaPensa: "Descreve corretamente o tipo e testa se o candidato sabe que a finalidade especial é indispensável.",
    },
  },

  {
    ...BASE84,
    id: "DP-129", assunto: "Crimes contra a Administração Pública",
    subassunto: "Corrupção passiva privilegiada — art. 317, § 2º",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito conferido no caderno oficial",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "Comete crime de prevaricação o agente que pratica ato de ofício, com infração de dever funcional, cedendo a pedido ou influência de outrem.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "cedendo a pedido ou influência de outrem",
    cognitivo: {
      motivo: "Par direto com DP-128: o que muda o tipo é a origem do impulso — interno (prevaricação) ou externo (corrupção privilegiada).",
      palavraCritica: "a pedido ou influência de outrem",
    },
    comentario: {
      resolucao: "ERRADO. O enunciado reproduz o art. 317, § 2º — a CORRUPÇÃO PASSIVA PRIVILEGIADA: praticar, deixar de praticar ou retardar ato de ofício, com infração de dever funcional, cedendo a pedido ou influência de outrem. A prevaricação (art. 319) tem motivação INTERNA, o interesse ou sentimento pessoal do próprio agente; aqui o impulso vem de FORA, de terceiro que pede ou influencia. Detalhe importante: na figura privilegiada não há vantagem indevida — se houvesse, seria corrupção passiva do caput. A pena é de detenção de 3 meses a 1 ano, ou multa.",
      fundamento: "CP, art. 317, § 2º; contraste com o art. 319.",
      macete: "Impulso de dentro = prevaricação. Impulso de fora, sem vantagem = corrupção privilegiada.",
      erroComum: "Ver 'infração de dever funcional' e concluir prevaricação.",
      comoBancaPensa: "Aproveita a semelhança de redação entre os dois dispositivos, que só divergem na origem do motivo.",
    },
  },

  {
    ...BASE84,
    id: "DP-130", assunto: "Crimes contra a Administração Pública",
    subassunto: "Peculato-desvio — consumação",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CP, art. 312)",
    dificuldade: 3, tempoIdealSeg: 90,
    enunciado: "Para a consumação do crime de peculato-desvio, por ser crime formal, não se exige que o funcionário público ou o terceiro obtenha os recursos desviados, bastando que desvie o bem em proveito próprio ou alheio.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "não se exige que ... obtenha os recursos desviados",
    cognitivo: {
      motivo: "Fixar o momento consumativo: o desvio basta, o proveito é exaurimento.",
      palavraCritica: "crime formal",
    },
    comentario: {
      resolucao: "CERTO. No peculato-desvio (art. 312, caput, segunda figura), o funcionário dá ao bem ou valor de que tem a posse em razão do cargo destinação diversa da devida, em proveito próprio ou alheio. O crime é FORMAL: consuma-se com o desvio, independentemente de o agente ou o terceiro efetivamente auferirem o proveito — obtê-lo é mero exaurimento, que repercute na dosimetria, não na consumação. Compare com o peculato-apropriação (primeira figura), que exige a inversão do ânimo da posse, e com o peculato-furto do § 1º, em que o agente não tem a posse e se vale da facilidade do cargo.",
      fundamento: "CP, art. 312, caput.",
      macete: "Desviou, consumou. Aproveitar é sobremesa.",
      erroComum: "Exigir prova do proveito efetivo para reconhecer a consumação.",
      comoBancaPensa: "Testa a classificação (formal x material) aplicada ao momento consumativo.",
    },
  },

  {
    ...BASE84,
    id: "DP-131", assunto: "Crimes contra a Administração Pública",
    subassunto: "Funcionário público por equiparação — advogado dativo",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CP, art. 327)",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "Os advogados dativos, nomeados por juízes para exercerem a defesa técnica em local onde não há Defensoria Pública, podem ser autores de corrupção passiva se solicitarem vantagem indevida para o exercício dessa função.",
    gabarito: "C",
    pegadinha: "restricao-indevida",
    palavraChave: "podem ser autores de corrupção passiva",
    cognitivo: {
      motivo: "O conceito penal de funcionário público é mais largo que o administrativo — alcança quem exerce função pública transitoriamente e sem remuneração.",
      palavraCritica: "advogados dativos",
    },
    comentario: {
      resolucao: "CERTO. O art. 327 define, para efeitos penais, funcionário público como quem, EMBORA TRANSITORIAMENTE OU SEM REMUNERAÇÃO, exerce cargo, emprego ou função pública. O advogado dativo é nomeado pelo juízo para suprir a ausência de Defensoria e desempenha múnus público, o que o enquadra na equiparação — entendimento acolhido pelo STJ. Assim, solicitar vantagem indevida em razão dessa função configura corrupção passiva (art. 317). O mesmo raciocínio alcança jurados, mesários, peritos nomeados e estagiários no exercício de função pública.",
      fundamento: "CP, art. 327, caput; art. 317.",
      macete: "Função pública, ainda que de graça e por um dia, é funcionário público no CP.",
      erroComum: "Usar o conceito administrativo de servidor (cargo, vínculo, remuneração) no campo penal.",
      comoBancaPensa: "Escolhe uma figura que não é servidor no sentido comum para testar o alcance do art. 327.",
    },
  },

  {
    ...BASE84,
    id: "DP-132", assunto: "Aplicação da lei penal",
    subassunto: "Contagem do prazo penal — art. 10",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte normativa (CP, art. 10)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "O dia da prisão do indiciado não é computado para o cálculo da pena, uma vez que as frações de dia devem ser desprezadas.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "não é computado",
    cognitivo: {
      motivo: "A segunda metade do enunciado é verdadeira e serve para dar credibilidade à primeira, que é falsa.",
      palavraCritica: "não é computado",
    },
    comentario: {
      resolucao: "ERRADO. O art. 10 do CP determina que O DIA DO COMEÇO INCLUI-SE NO CÔMPUTO DO PRAZO — o dia da prisão conta integralmente, ainda que o agente tenha sido preso às 23h50. Curiosamente, a justificativa que o enunciado apresenta está correta e é do mesmo artigo (contam-se os dias pelo calendário comum, desprezando-se as frações), mas ela produz o efeito OPOSTO ao afirmado: é justamente por se desprezar a fração que o dia incompleto é contado como dia inteiro, em favor do réu. Não confunda com o prazo processual do art. 798, § 1º, do CPP, em que o dia do começo se exclui.",
      fundamento: "CP, art. 10; contraste com o CPP, art. 798, § 1º.",
      macete: "Prazo penal inclui o primeiro dia. Prazo processual exclui.",
      erroComum: "Transportar a regra processual (exclui o dia inicial) para a contagem da pena.",
      comoBancaPensa: "Anexa à afirmação falsa uma justificativa verdadeira, para que o candidato valide o todo pela parte.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE84);
