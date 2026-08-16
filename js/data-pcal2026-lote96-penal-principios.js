/* =====================================================================
   QUESTLAB — Lote 96: DIREITO PENAL — PRINCÍPIOS
   O primeiro lote com questões de MÚLTIPLA ESCOLHA no banco

   ORIGEM. Quatro PDFs entregues pelo usuário:

     Aula 1 a 8 — Exercícios de fixação: Princípios     (EF-DP01 a EF-DP08)
     Aula 01 — Exercícios: Legalidade/Taxatividade/Anterioridade (DP-18 a DP-27)
     Aula 02 — Exercícios: Humanidade/Intranscendência/…  (DP-44 a DP-53)
     Aula 01 — Material de Apoio (teoria)

   Autoria, conforme o usuário informou na entrega anterior: os exercícios
   são dele; o material de apoio é texto de domínio público. Dois dos PDFs
   trazem no rodapé o nome "FÁBIO SANTOS VASCONCELOS" e um aviso de
   assinatura DSO — fica registrado aqui pelo mesmo motivo do lote 95:
   quem abrir os arquivos vai ler outro nome e merece achar a explicação
   junto do dado.

   O QUE MUDOU NO SISTEMA POR CAUSA DESTE LOTE

   Até a versão 7.178 o banco inteiro era CERTO/ERRADO, e a suposição
   estava espalhada pelo código. A CEBRASPE aplica os dois formatos, e a
   partir daqui o banco também:

     tipo "CE"   gabarito "C" ou "E"; branco = "B".
     tipo "ME"   gabarito "A".."E"; exige `alternativas`; branco = "-".

   O branco precisou de token próprio no ME porque "B" ali é alternativa
   legítima. Registrar branco como "B" faria o histórico de quem marcou a
   letra B virar branco, em silêncio e para sempre.

   As três telas que servem questão (Banco, Simulado, Modo Prova) ganharam
   um seletor de formato. Ele começa em CERTO/ERRADO — pedido explícito do
   usuário — e só muda por ação dele.

   COMO O MATERIAL FOI TRATADO

     BLOCO 1 — DP-133 a DP-150. As 18 questões de múltipla escolha do
     material, com enunciado e alternativas na redação original.

     BLOCO 2 — DP-151 a DP-160. As 10 questões que já eram CERTO/ERRADO,
     verbatim.

     BLOCO 3 — DP-161 a DP-186. As mesmas 18 questões de múltipla escolha
     ADAPTADAS para C/E, como pedido. Cada afirmativa numerada (I, II,
     III, IV) e cada alternativa relevante vira um item independente, com
     a redação original. `subassunto` guarda a questão de origem e a letra
     ou o algarismo, para se poder voltar do banco ao material.

     BLOCO 4 — DP-187 a DP-206. Questões novas escritas a partir da
     teoria do Material de Apoio, nos DOIS formatos: 8 de múltipla escolha
     e 12 de CERTO/ERRADO.

   Os comentários são redação nova. Onde o material traz análise item a
   item, ela foi usada como fonte do que está certo e do que está errado,
   não transcrita.

   EQUILÍBRIO. 48 itens C/E, 24 CERTO e 24 ERRADO. As 10 originais em C/E
   são 2 C e 8 E — desequilíbrio que veio do material e foi compensado nos
   blocos novos, não corrigido no bloco do usuário.
   ===================================================================== */

const CARGOS96 = ["Escrivão", "Agente"];
const BASE96 = {
  concurso: "PCAL", cargo: CARGOS96, ano: 2026,
  disciplina: "Direito Penal", assunto: "Princípios penais",
};
/* Alta incidência: princípios abrem o edital de Penal e a CEBRASPE cobra
   legalidade, insignificância e individualização com regularidade. */
const ME96 = { ...BASE96, tipo: "ME", probReaparecer: 0.9,
  origem: "Material do usuário — Exercícios de Fixação: Princípios do Direito Penal (múltipla escolha, redação original)" };
const CE96 = { ...BASE96, tipo: "CE", probReaparecer: 0.9,
  origem: "Material do usuário — Exercícios de Fixação: Princípios do Direito Penal (CERTO/ERRADO, redação original)" };
const ADAPT96 = { ...BASE96, tipo: "CE", probReaparecer: 0.88,
  origem: "Material do usuário — Exercícios de Fixação: Princípios (múltipla escolha adaptada ao formato C/E)" };
const NOVA_ME96 = { ...BASE96, tipo: "ME", probReaparecer: 0.82,
  origem: "Autoral QuestLab — múltipla escolha redigida a partir do Material de Apoio: Princípios do Direito Penal" };
const NOVA_CE96 = { ...BASE96, tipo: "CE", probReaparecer: 0.82,
  origem: "Autoral QuestLab — redigida a partir do Material de Apoio: Princípios do Direito Penal" };

const QUESTOES_PCAL_LOTE96 = [

  /* ==================================================================
     BLOCO 1 — MÚLTIPLA ESCOLHA, REDAÇÃO ORIGINAL DO MATERIAL
     ================================================================== */

  {
    ...ME96,
    id: "DP-133", subassunto: "DP-18 — legalidade penal",
    dificuldade: 2, tempoIdealSeg: 110,
    enunciado: "Acerca do princípio da legalidade penal, considere as seguintes afirmações:\n\nI. Exige que os crimes e penas estejam previamente definidos em lei.\nII. Está previsto tanto na Constituição Federal quanto no Código Penal.\nIII. Autoriza, excepcionalmente, a criação de crimes por decretos presidenciais.\nIV. Impede a retroatividade da lei penal, mesmo se mais benéfica.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas a afirmativa III está correta.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "A", pegadinha: "literalidade", palavraChave: "legalidade",
    cognitivo: {
      motivo: "Fechar o conteúdo da legalidade separando o que ela exige do que ela não proíbe.",
      palavraCritica: "mesmo se mais benéfica",
    },
    comentario: {
      resolucao: "GABARITO A. Item I correto: não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal. Item II correto: o princípio está no art. 5º, XXXIX, da CF e no art. 1º do CP — a dupla previsão é cobrada com frequência. Item III incorreto: decreto não cria crime; exige-se lei em sentido estrito, editada pelo Poder Legislativo. Item IV incorreto, e é aqui que a questão se decide: a lei penal não retroage, SALVO para beneficiar o réu (art. 5º, XL, da CF, e art. 2º, parágrafo único, do CP). Restam I e II.",
      fundamento: "CF, art. 5º, XXXIX e XL; CP, arts. 1º e 2º, parágrafo único.",
      macete: "A legalidade trava a lei nova que PREJUDICA. A que beneficia passa, e retroage.",
      erroComum: "Ler \"impede a retroatividade\" e aceitar, esquecendo a exceção do réu.",
      comoBancaPensa: "Monta um item verdadeiro pela metade — a regra está certa, a exceção foi suprimida.",
    },
  },

  {
    ...ME96,
    id: "DP-134", subassunto: "DP-19 — analogia",
    dificuldade: 2, tempoIdealSeg: 110,
    enunciado: "No que se refere ao uso da analogia no Direito Penal, analise as proposições abaixo:\n\nI. A analogia é vedada quando utilizada para prejudicar o réu.\nII. Pode ser empregada de forma benéfica, desde que respeite os princípios constitucionais.\nIII. É admitida para suprir lacunas legislativas, mesmo se prejudicar o acusado.\nIV. O princípio da legalidade limita o uso da analogia em matéria penal.\n\nEstá correto o que se afirma em:",
    alternativas: [
      "I e III apenas.",
      "II e III apenas.",
      "I, II e IV apenas.",
      "III e IV apenas.",
      "I, II, III e IV.",
    ],
    gabarito: "C", pegadinha: "literalidade", palavraChave: "in malam partem",
    cognitivo: {
      motivo: "Fixar que a analogia penal só corre em uma direção: a que favorece o réu.",
      palavraCritica: "mesmo se prejudicar o acusado",
    },
    comentario: {
      resolucao: "GABARITO C. A analogia é forma de INTEGRAÇÃO: aplica-se a um caso não previsto a norma de um caso semelhante. Item I correto: a analogia in malam partem, que prejudica o réu, é vedada. Item II correto: admite-se a in bonam partem, respeitados os princípios constitucionais. Item IV correto: é justamente a legalidade que impõe esse limite, porque exige previsão legal prévia e expressa para incriminar. Item III é o único incorreto — repete a vedação do item I com sinal trocado. Sobram I, II e IV.",
      fundamento: "Integração da norma penal — analogia in bonam partem × in malam partem.",
      macete: "Analogia em Penal é rua de mão única: só na direção que ajuda o réu.",
      erroComum: "Confundir analogia (integração, cria regra nova) com interpretação analógica (a própria lei manda ampliar).",
      comoBancaPensa: "Coloca no mesmo bloco a afirmação e a sua negação — quem marca \"todas\" não leu nenhuma.",
    },
  },

  {
    ...ME96,
    id: "DP-135", subassunto: "DP-20 — medidas provisórias",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "A respeito das medidas provisórias no contexto penal, assinale a alternativa correta:",
    alternativas: [
      "São plenamente válidas para criar tipos penais em situações urgentes.",
      "Não podem, em nenhuma hipótese, tratar de matéria penal.",
      "São admitidas apenas se conferirem tratamento mais favorável ao réu.",
      "Substituem a lei penal quando houver vacância legislativa.",
      "Têm o mesmo valor que uma lei ordinária, podendo revogar tipos penais.",
    ],
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "medida provisória",
    cognitivo: {
      motivo: "Cobrar a exceção do STF sobre MP em matéria penal, que a regra do art. 62 esconde.",
      palavraCritica: "em nenhuma hipótese",
    },
    comentario: {
      resolucao: "GABARITO C. A regra da Constituição é a vedação: o art. 62, § 1º, I, \"b\", proíbe medida provisória sobre direito penal e processual penal, em respeito à legalidade. Mas o STF admite a MP em matéria penal quando ela BENEFICIA o réu — porque a legalidade é garantia individual e não pode ser invocada contra o próprio garantido. A alternativa B erra por absolutizar a regra e apagar a exceção; a A e a E ignoram que MP não é lei em sentido estrito; a D inventa hipótese que não existe.",
      fundamento: "CF, art. 62, § 1º, I, \"b\"; jurisprudência do STF.",
      macete: "MP em Penal: proibida para piorar, aceita para melhorar.",
      erroComum: "Marcar B, que é a regra decorada, sem lembrar que a banca cobra a exceção.",
      comoBancaPensa: "Oferece a regra pura num item com \"em nenhuma hipótese\" — o absoluto é o que o derruba.",
    },
  },

  {
    ...ME96,
    id: "DP-136", subassunto: "DP-21 — taxatividade (assinale a incorreta)",
    dificuldade: 2, tempoIdealSeg: 90,
    enunciado: "Em relação ao princípio da taxatividade, assinale a alternativa INCORRETA:",
    alternativas: [
      "É um desdobramento do princípio da legalidade.",
      "Exige que os tipos penais sejam claros e objetivos.",
      "Evita arbitrariedades na interpretação da lei penal.",
      "Visa garantir previsibilidade e segurança jurídica.",
      "Permite a formulação de tipos vagos para facilitar a atuação do juiz.",
    ],
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "taxatividade",
    cognitivo: {
      motivo: "Testar a taxatividade pelo avesso, no enunciado que pede a alternativa incorreta.",
      palavraCritica: "tipos vagos",
    },
    comentario: {
      resolucao: "GABARITO E. A taxatividade é desdobramento da legalidade e exige que a lei penal descreva a conduta proibida de forma clara, precisa e determinada — justamente PROIBINDO tipos vagos ou genéricos. A alternativa E afirma o oposto do princípio, e por isso é a incorreta pedida. As outras quatro descrevem corretamente características e finalidades: desdobramento da legalidade, clareza, contenção do arbítrio interpretativo e segurança jurídica.",
      fundamento: "Princípio da taxatividade (mandato de certeza), desdobramento da legalidade.",
      macete: "Legalidade exige LEI. Taxatividade exige lei que se ENTENDA.",
      erroComum: "Ler o enunciado no automático e marcar a alternativa verdadeira quando se pediu a falsa.",
      comoBancaPensa: "Inverte o comando (\"incorreta\") e põe quatro verdades ao lado de uma inversão do conceito.",
    },
  },

  {
    ...ME96,
    id: "DP-137", subassunto: "DP-22 — anterioridade",
    dificuldade: 2, tempoIdealSeg: 90,
    enunciado: "Sobre o princípio da anterioridade da lei penal, assinale a alternativa correta:",
    alternativas: [
      "Permite a punição de fatos anteriores à criação da lei, se houver consenso social.",
      "Impede a aplicação de qualquer lei posterior ao crime praticado.",
      "Garante que ninguém será punido por conduta não tipificada como crime na data do fato.",
      "Possui aplicação limitada aos crimes hediondos e dolosos contra a vida.",
      "Autoriza o uso da analogia para suprir a ausência de lei anterior.",
    ],
    gabarito: "C", pegadinha: "generalizacao", palavraChave: "anterioridade",
    cognitivo: {
      motivo: "Separar anterioridade de irretroatividade absoluta, que é o distrator da letra B.",
      palavraCritica: "qualquer lei posterior",
    },
    comentario: {
      resolucao: "GABARITO C. A anterioridade, no art. 5º, XXXIX, da CF, e no art. 1º do CP, garante que nenhum fato é crime sem lei anterior que o defina — logo, ninguém é punido por conduta atípica na data do fato. A alternativa A contraria frontalmente o princípio (consenso social não cria crime). A B erra ao dizer \"qualquer lei posterior\": a lei posterior mais benéfica se aplica. A D restringe a princípio geral. A E confunde: analogia não supre ausência de lei para incriminar.",
      fundamento: "CF, art. 5º, XXXIX; CP, art. 1º.",
      macete: "Anterioridade olha para trás: na data do fato, já tinha de existir a lei.",
      erroComum: "Marcar B por parecer a formulação mais técnica — o \"qualquer\" é o erro.",
      comoBancaPensa: "Coloca dois itens quase certos e decide a questão numa palavra absoluta.",
    },
  },

  {
    ...ME96,
    id: "DP-138", subassunto: "DP-23 — legalidade e reserva legal",
    dificuldade: 2, tempoIdealSeg: 105,
    enunciado: "Com base no princípio da legalidade, analise os itens a seguir:\n\nI. Apenas a lei em sentido estrito pode criar infrações penais.\nII. Decretos regulamentares podem prever penas, desde que baseados na lei.\nIII. A criação de crimes exige processo legislativo formal.\nIV. A jurisprudência pode inovar na definição de condutas criminosas, desde que com respaldo social.\n\nAssinale a alternativa correta:",
    alternativas: [
      "I e III apenas.",
      "II e IV apenas.",
      "I, III e IV apenas.",
      "II, III e IV apenas.",
      "I, II, III e IV.",
    ],
    gabarito: "A", pegadinha: "literalidade", palavraChave: "reserva legal",
    cognitivo: {
      motivo: "Fixar que criar crime é monopólio do Legislativo, por lei formal.",
      palavraCritica: "respaldo social",
    },
    comentario: {
      resolucao: "GABARITO A. Item I correto: reserva legal — só lei em sentido estrito cria infração penal. Item III correto: essa lei tem de percorrer o processo legislativo previsto na Constituição. Item II incorreto: decreto regulamentar não prevê pena, ainda que se diga \"baseado na lei\". Item IV incorreto: jurisprudência não define conduta criminosa, e \"respaldo social\" não é fonte de crime nenhum. Sobram I e III.",
      fundamento: "CF, art. 5º, XXXIX; CP, art. 1º — reserva legal.",
      macete: "Crime só nasce no Legislativo, por lei. Nem decreto, nem tribunal, nem costume.",
      erroComum: "Aceitar o item II pela ressalva \"desde que baseados na lei\", que não salva nada.",
      comoBancaPensa: "Anexa condicional tranquilizadora a uma afirmação falsa, para o candidato assinar embaixo.",
    },
  },

  {
    ...ME96,
    id: "DP-139", subassunto: "DP-24 — mandados de criminalização",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "Os chamados mandados de criminalização previstos na Constituição Federal:",
    alternativas: [
      "Representam obrigações direcionadas ao Poder Judiciário para punir certas condutas.",
      "Impõem ao legislador o dever de criminalizar condutas que atentem contra bens fundamentais.",
      "Correspondem à autorização para o Executivo editar medidas provisórias sobre crimes.",
      "Permitem a retroatividade de leis penais mais gravosas em temas constitucionais.",
      "São diretrizes simbólicas, sem força jurídica vinculante ao legislador infraconstitucional.",
    ],
    gabarito: "B", pegadinha: "troca-sujeito", palavraChave: "mandados de criminalização",
    cognitivo: {
      motivo: "Identificar o destinatário do mandado de criminalização.",
      palavraCritica: "ao legislador",
    },
    comentario: {
      resolucao: "GABARITO B. Mandados de criminalização são determinações constitucionais dirigidas ao LEGISLADOR infraconstitucional para que criminalize condutas contra bens jurídicos especialmente protegidos — racismo, tortura, tráfico de drogas e terrorismo estão nos incisos XLII a XLIV do art. 5º. A Constituição não cria tipo penal diretamente; impõe o dever de criar. A alternativa A troca o destinatário (Judiciário), a C troca por Executivo, a D inventa retroatividade gravosa e a E nega a força vinculante que os mandados têm.",
      fundamento: "CF, art. 5º, XLII a XLIV — mandados expressos de criminalização.",
      macete: "A Constituição não escreve o tipo penal: ela manda o Congresso escrever.",
      erroComum: "Marcar E por lembrar que a CF \"não cria crimes\" e concluir que o mandado é simbólico.",
      comoBancaPensa: "Percorre os três Poderes nas alternativas — só um é o destinatário certo.",
    },
  },

  {
    ...ME96,
    id: "DP-140", subassunto: "DP-25 — costumes",
    dificuldade: 2, tempoIdealSeg: 95,
    enunciado: "Sobre o uso de costumes no Direito Penal, assinale a alternativa correta:",
    alternativas: [
      "Podem criar novos tipos penais quando amplamente aceitos pela sociedade.",
      "Servem como fonte imediata para definir condutas criminosas em lacunas legais.",
      "Não têm qualquer utilidade no Direito Penal moderno.",
      "São fontes formais válidas para a criação de crimes e penas.",
      "Podem ser utilizados como critério de interpretação de conceitos legais indeterminados.",
    ],
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "costumes",
    cognitivo: {
      motivo: "Distinguir costume como fonte de crime (não é) de costume como critério interpretativo (é).",
      palavraCritica: "interpretação de conceitos legais indeterminados",
    },
    comentario: {
      resolucao: "GABARITO E. Costume é a prática reiterada de uma conduta social acompanhada da convicção de sua obrigatoriedade. Pela legalidade, ele NÃO pode criar nem agravar crime — o que derruba A, B e D. Mas também não é inútil, o que derruba C: serve para interpretar conceitos legais indeterminados, e o exemplo consagrado é o \"repouso noturno\" do art. 155, § 1º, do CP, cuja definição depende dos hábitos do lugar.",
      fundamento: "Fontes do Direito Penal — costume como fonte interpretativa; CP, art. 155, § 1º.",
      macete: "Costume não CRIA crime, mas ajuda a LER a lei que criou.",
      erroComum: "Marcar C, que parece a negativa mais segura, e cair no absoluto.",
      comoBancaPensa: "Empilha três exageros para um lado e um exagero para o outro; a resposta é a alternativa moderada.",
    },
  },

  {
    ...ME96,
    id: "DP-141", subassunto: "DP-44 — princípio da humanidade",
    dificuldade: 3, tempoIdealSeg: 110,
    enunciado: "Em relação ao princípio da humanidade no Direito Penal, é correto afirmar que:",
    alternativas: [
      "Admite, em situações excepcionais, a pena de trabalhos forçados, desde que prevista em lei.",
      "Permite a imposição de penas cruéis nos casos de crimes hediondos.",
      "Veda penas de morte, de caráter perpétuo e de banimento, mesmo em caso de guerra declarada.",
      "Assegura ao preso o respeito à sua integridade física e moral, sendo cláusula constitucional expressa.",
      "Permite a adoção de penas corporais quando previstas em tratado internacional.",
    ],
    gabarito: "D", pegadinha: "termo-absoluto", palavraChave: "humanidade",
    cognitivo: {
      motivo: "Cobrar o rol do art. 5º, XLVII, com a única exceção que ele admite.",
      palavraCritica: "mesmo em caso de guerra declarada",
    },
    comentario: {
      resolucao: "GABARITO D. O art. 5º, XLIX, da CF assegura aos presos o respeito à integridade física e moral — cláusula expressa, e é o que a alternativa D diz. A alternativa C é a armadilha: o art. 5º, XLVII, \"a\", veda a pena de morte SALVO em caso de guerra declarada, de modo que a vedação não é absoluta. A A contraria a alínea \"c\" (trabalhos forçados), a B contraria a alínea \"e\" (penas cruéis), que não abre exceção para hediondos, e a E não encontra apoio: tratado não autoriza pena corporal no Brasil.",
      fundamento: "CF, art. 5º, XLVII e XLIX; art. 1º, III.",
      macete: "Das cinco penas vedadas, só a de morte tem exceção — e a exceção é guerra declarada.",
      erroComum: "Marcar C por lembrar do rol de vedações e esquecer a ressalva da guerra.",
      comoBancaPensa: "Reproduz o inciso quase inteiro e apaga a única exceção que ele contém.",
    },
  },

  {
    ...ME96,
    id: "DP-142", subassunto: "DP-45 — intranscendência da pena",
    dificuldade: 3, tempoIdealSeg: 115,
    enunciado: "Analise as afirmações abaixo sobre o princípio da intranscendência da pena:\n\nI. A pena não pode ultrapassar a pessoa do condenado.\nII. Os efeitos civis do crime podem atingir os sucessores, até o limite do valor herdado.\nIII. A multa penal deve ser obrigatoriamente cobrada dos herdeiros.\nIV. A reparação do dano pode ser exigida dos sucessores, desde que respeitado o limite da herança.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas I e III estão corretas.",
      "Apenas I e II estão corretas.",
      "Apenas II, III e IV estão corretas.",
      "Apenas I, II e IV estão corretas.",
      "Todas estão corretas.",
    ],
    gabarito: "D", pegadinha: "troca-conceito", palavraChave: "intranscendência",
    cognitivo: {
      motivo: "Separar o que é pena (não passa) do que é obrigação civil (passa, com limite).",
      palavraCritica: "multa penal",
    },
    comentario: {
      resolucao: "GABARITO D. O art. 5º, XLV, da CF traz a regra e o seu contorno. Item I correto: nenhuma pena passará da pessoa do condenado. Item II correto e item IV correto: a obrigação de reparar o dano e o perdimento de bens têm natureza CIVIL e podem ser estendidos aos sucessores até o limite do patrimônio transferido. Item III incorreto, e é o que decide: a multa é PENA criminal, não se transmite aos herdeiros. Sobram I, II e IV.",
      fundamento: "CF, art. 5º, XLV — pessoalidade da pena.",
      macete: "Multa é pena, morre com o condenado. Indenização é dívida, vai até o tamanho da herança.",
      erroComum: "Tratar multa e reparação como a mesma coisa por ambas serem dinheiro.",
      comoBancaPensa: "Aproveita a semelhança econômica entre multa e indenização para esconder a diferença de natureza.",
    },
  },

  {
    ...ME96,
    id: "DP-143", subassunto: "DP-46 — individualização da pena",
    dificuldade: 2, tempoIdealSeg: 95,
    enunciado: "O princípio da individualização da pena, previsto na Constituição Federal, garante que:",
    alternativas: [
      "A pena seja ajustada às circunstâncias do fato e às condições do condenado.",
      "A lei penal fixe previamente a exata quantidade de pena a ser imposta para cada tipo penal, independentemente de particularidades do caso concreto.",
      "A sanção seja fixada com base em critérios genéricos da norma penal.",
      "A pena seja aplicada de forma padronizada para todos os réus.",
      "O juiz aplique automaticamente as penas previstas em lei, sem necessidade de fundamentação.",
    ],
    gabarito: "A", pegadinha: "literalidade", palavraChave: "individualização",
    cognitivo: {
      motivo: "Fixar a individualização como o oposto de padronização e automatismo.",
      palavraCritica: "circunstâncias do fato",
    },
    comentario: {
      resolucao: "GABARITO A. O art. 5º, XLVI, da CF impede a pena padronizada: o julgador avalia culpabilidade, antecedentes, conduta social e os demais critérios do art. 59 do CP para chegar à resposta penal adequada. As alternativas B, C, D e E descrevem exatamente o que o princípio proíbe — quantidade fixa em abstrato, critério genérico, padronização e aplicação automática sem fundamentação. A lei traz limites mínimo e máximo, não um número exato.",
      fundamento: "CF, art. 5º, XLVI; CP, art. 59.",
      macete: "A lei dá a faixa. O juiz acha o ponto dentro dela, e tem de dizer por quê.",
      erroComum: "Confundir individualização com legalidade e achar que a pena exata vem na lei.",
      comoBancaPensa: "Escreve quatro alternativas que são a negação do princípio e uma que é ele.",
    },
  },

  {
    ...ME96,
    id: "DP-144", subassunto: "DP-47 — ofensividade e perigo abstrato",
    dificuldade: 3, tempoIdealSeg: 105,
    enunciado: "Com base no princípio da ofensividade, analise os itens a seguir:\n\nI. O Direito Penal deve punir apenas condutas que causem lesão ou ameaça concreta a um bem jurídico.\nII. O princípio veda a criminalização de condutas inofensivas.\nIII. STF e STJ admitem crimes de perigo abstrato, desde que a experiência demonstre que a conduta é, por si, perigosa.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas I está correta.",
      "Apenas II está correta.",
      "Apenas III está correta.",
      "Apenas I e III estão corretas.",
      "Todas estão corretas.",
    ],
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "perigo abstrato",
    cognitivo: {
      motivo: "Mostrar que a ofensividade convive com o perigo abstrato aceito pelos tribunais.",
      palavraCritica: "desde que a experiência demonstre",
    },
    comentario: {
      resolucao: "GABARITO E. Os três itens estão corretos e o desconforto é aparente. A ofensividade (ou lesividade) exige lesão ou ameaça concreta a bem jurídico (item I) e veda criminalizar o inofensivo (item II). O item III não contradiz isso: STF e STJ reconhecem a constitucionalidade dos crimes de perigo abstrato quando a experiência mostra que a conduta é, em si, perigosa — porte ilegal de arma de fogo e embriaguez ao volante são os exemplos. O princípio limita o legislador; não elimina a técnica do perigo presumido.",
      fundamento: "Princípio da ofensividade/lesividade; jurisprudência do STF e do STJ sobre perigo abstrato.",
      macete: "Ofensividade e perigo abstrato convivem: o segundo é lesividade antecipada pela experiência.",
      erroComum: "Achar que aceitar o item III seria negar os itens I e II, e marcar \"apenas I e II\".",
      comoBancaPensa: "Coloca doutrina e jurisprudência lado a lado esperando que o candidato veja contradição onde não há.",
    },
  },

  {
    ...ME96,
    id: "DP-145", subassunto: "DP-48 — isonomia",
    dificuldade: 2, tempoIdealSeg: 95,
    enunciado: "O princípio da isonomia, aplicado ao Direito Penal, adverte que:",
    alternativas: [
      "Todas as pessoas devem receber exatamente a mesma pena, independentemente de suas condições pessoais.",
      "A mesma norma penal é aplicada a todos, respeitando as diferenças concretas entre os réus.",
      "A lei não pode estabelecer distinções entre adultos e adolescentes na responsabilização penal.",
      "O juiz não pode considerar antecedentes ou conduta social na fixação da pena.",
      "A pena deve ser agravada sempre que o réu pertencer a uma minoria socialmente vulnerável.",
    ],
    gabarito: "B", pegadinha: "generalizacao", palavraChave: "isonomia",
    cognitivo: {
      motivo: "Cobrar a isonomia material — tratar desigualmente os desiguais — contra a leitura formal.",
      palavraCritica: "respeitando as diferenças concretas",
    },
    comentario: {
      resolucao: "GABARITO B. Isonomia penal é tratamento igual aos iguais e desigual aos desiguais, na medida da desigualdade: a mesma norma vale para todos, mas respeitadas as diferenças concretas entre os réus e a natureza do delito, como sinaliza o art. 5º, XLVIII, da CF ao mandar separar os presos por sexo e idade. A alternativa A é a leitura puramente formal, que o princípio rejeita. A C nega distinção que existe entre adultos e adolescentes. A D contraria o art. 59 do CP. A E não tem previsão legal alguma.",
      fundamento: "CF, art. 5º, caput e XLVIII; CP, art. 59.",
      macete: "Isonomia não é pena igual: é a mesma REGRA aplicada a situações diferentes.",
      erroComum: "Marcar A por associar igualdade a identidade de tratamento.",
      comoBancaPensa: "Oferece a igualdade formal como isca contra a igualdade material, que é a resposta.",
    },
  },

  {
    ...ME96,
    id: "DP-146", subassunto: "DP-49 — alteridade",
    dificuldade: 2, tempoIdealSeg: 95,
    enunciado: "O princípio da alteridade impede que o Direito Penal:",
    alternativas: [
      "Considere a tentativa de homicídio como penalmente relevante.",
      "Reprima crimes praticados contra a Administração Pública.",
      "Puna condutas que afetam exclusivamente o próprio agente, sem lesar terceiros.",
      "Aplique penas civis por comportamentos antissociais.",
      "Estenda os efeitos penais aos sucessores do condenado.",
    ],
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "alteridade",
    cognitivo: {
      motivo: "Fixar a alteridade como exigência de vítima outra que não o próprio agente.",
      palavraCritica: "exclusivamente o próprio agente",
    },
    comentario: {
      resolucao: "GABARITO C. A alteridade — também chamada transcendência do resultado — exige que a conduta lese ou ameace bem jurídico de TERCEIRO. Por isso o que prejudica apenas o próprio agente é penalmente irrelevante: autolesão por motivo religioso, uso pessoal de drogas, tentativa de suicídio. As alternativas A e B tratam de condutas que atingem bens alheios; a D fala de penas civis, tema estranho ao princípio; e a E descreve a pessoalidade (intranscendência) da pena, não a alteridade.",
      fundamento: "Princípio da alteridade (transcendência do resultado).",
      macete: "Alteridade pede o OUTRO. Sem terceiro atingido, não há crime.",
      erroComum: "Marcar E, confundindo alteridade com intranscendência — os nomes se parecem, os conteúdos não.",
      comoBancaPensa: "Põe na mesma lista dois princípios de nome vizinho para forçar a distinção.",
    },
  },

  {
    ...ME96,
    id: "DP-147", subassunto: "EF-DP02 — presunção de inocência",
    dificuldade: 1, tempoIdealSeg: 70,
    enunciado: "O indivíduo autuado em flagrante pela prática de um crime não poderá ser considerado culpado até o trânsito em julgado de sentença penal condenatória, em razão do princípio",
    alternativas: [
      "da legalidade estrita.",
      "do devido processo legal.",
      "da presunção de inocência.",
      "da ampla defesa.",
      "da anterioridade penal.",
    ],
    gabarito: "C", pegadinha: "literalidade", palavraChave: "trânsito em julgado",
    cognitivo: {
      motivo: "Casar a fórmula do art. 5º, LVII, com o nome do princípio.",
      palavraCritica: "trânsito em julgado",
    },
    comentario: {
      resolucao: "GABARITO C. A presunção de inocência, ou não culpabilidade, está no art. 5º, LVII, da CF: ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória. A redação do enunciado é praticamente a do inciso. Devido processo legal e ampla defesa são garantias processuais distintas; legalidade e anterioridade tratam da existência prévia da lei, não do momento em que se pode chamar alguém de culpado.",
      fundamento: "CF, art. 5º, LVII.",
      macete: "Apareceu \"trânsito em julgado\" com \"culpado\": é presunção de inocência.",
      erroComum: "Marcar devido processo legal por ser o princípio mais amplo e parecer conter os demais.",
      comoBancaPensa: "Cita o inciso quase literalmente e oferece quatro garantias vizinhas.",
    },
  },

  {
    ...ME96,
    id: "DP-148", subassunto: "EF-DP03 — princípios penais (identificação)",
    dificuldade: 3, tempoIdealSeg: 120,
    enunciado: "Acerca dos princípios penais, assinale a afirmativa correta.",
    alternativas: [
      "O princípio da intranscendência pressupõe que o Direito Penal só pode incidir nas hipóteses em que há lesão ou risco de lesão a um bem jurídico.",
      "O princípio da fragmentariedade preconiza que a pena não pode passar da pessoa do condenado.",
      "O princípio da insignificância exclui a tipicidade formal em razão de lesão ou risco de lesão irrelevante ao bem jurídico tutelado.",
      "O princípio do ne bis in idem indica que uma mesma circunstância não pode ser valorada em desfavor do suposto autor do fato mais de uma vez.",
      "O princípio da ofensividade veda as penas de morte, perpétuas e cruéis, bem como as penas de trabalhos forçados e de banimento.",
    ],
    gabarito: "D", pegadinha: "troca-conceito", palavraChave: "ne bis in idem",
    cognitivo: {
      motivo: "Item de embaralhamento puro: cinco princípios, quatro definições trocadas de dono.",
      palavraCritica: "mais de uma vez",
    },
    comentario: {
      resolucao: "GABARITO D. Só a letra D casa nome e conteúdo: o ne bis in idem impede que a mesma circunstância seja valorada em desfavor do agente mais de uma vez. As outras quatro estão com o dono trocado — A descreve a ofensividade e chama de intranscendência; B descreve a intranscendência e chama de fragmentariedade; E descreve a humanidade e chama de ofensividade. A letra C erra por um único termo: a insignificância exclui a tipicidade MATERIAL, não a formal — a conduta continua formalmente prevista em lei.",
      fundamento: "Princípios penais — ne bis in idem, ofensividade, intranscendência, insignificância.",
      macete: "Nas questões de \"assinale o princípio\", leia a definição primeiro e só depois olhe o nome.",
      erroComum: "Marcar C, que é quase toda verdadeira e erra só em \"formal\".",
      comoBancaPensa: "Embaralha os pares nome/definição e deixa um item com erro de uma palavra só.",
    },
  },

  {
    ...ME96,
    id: "DP-149", subassunto: "EF-DP04 — individualização (identificação)",
    dificuldade: 2, tempoIdealSeg: 85,
    enunciado: "Assinale a opção em que é apresentado o princípio do direito penal que obsta a padronização da sanção penal e preconiza a variação da pena de acordo com a personalidade e os meios de execução do agente.",
    alternativas: [
      "princípio da adequação social e significância",
      "princípio da individualização da pena",
      "princípio da culpabilidade",
      "princípio da proteção do bem jurídico",
      "princípio da intervenção mínima",
    ],
    gabarito: "B", pegadinha: "literalidade", palavraChave: "padronização",
    cognitivo: {
      motivo: "Reconhecer a individualização pela descrição, sem que o nome apareça no enunciado.",
      palavraCritica: "obsta a padronização",
    },
    comentario: {
      resolucao: "GABARITO B. Individualização da pena, art. 5º, XLVI, da CF. Cleber Masson a associa ao princípio de justiça segundo o qual se distribui a cada indivíduo o que lhe cabe, conforme as circunstâncias específicas do seu comportamento. \"Obstar a padronização\" e \"variar conforme personalidade e meios de execução\" são a definição do instituto. Culpabilidade e intervenção mínima operam noutro plano: a primeira é pressuposto da pena, a segunda limita quando o Direito Penal deve entrar.",
      fundamento: "CF, art. 5º, XLVI; doutrina (Masson).",
      macete: "Palavra \"padronização\" negada = individualização.",
      erroComum: "Marcar culpabilidade, que também olha para o agente, mas para decidir SE pune, não QUANTO pune.",
      comoBancaPensa: "Descreve o princípio sem nomeá-lo e cerca de princípios que também olham o agente.",
    },
  },

  {
    ...ME96,
    id: "DP-150", subassunto: "EF-DP01 — insignificância (efeito)",
    dificuldade: 2, tempoIdealSeg: 90,
    enunciado: "Sandro foi preso em flagrante ao subtrair um pacote de macarrão, cujo valor era R$ 9,00, de um hipermercado do bairro onde morava. O Ministério Público ofereceu denúncia em face de Sandro, mas o magistrado rejeitou a peça acusatória, reconhecendo a incidência do princípio da bagatela ou insignificância. O referido princípio exclui a",
    alternativas: [
      "ilicitude.",
      "tipicidade formal.",
      "culpabilidade.",
      "tipicidade material.",
      "punibilidade.",
    ],
    gabarito: "D", pegadinha: "troca-conceito", palavraChave: "tipicidade material",
    cognitivo: {
      motivo: "Cobrar a natureza jurídica exata da insignificância, que é onde a questão se decide.",
      palavraCritica: "tipicidade material",
    },
    comentario: {
      resolucao: "GABARITO D. A insignificância é causa de exclusão da tipicidade MATERIAL. A conduta continua formalmente prevista em lei como crime — subtrair coisa alheia móvel é furto, mesmo que a coisa valha nove reais —, mas a lesão ao bem jurídico é ínfima demais para justificar a intervenção penal. Por isso a letra B é a armadilha: dizer que exclui a tipicidade formal seria dizer que a conduta não está descrita na lei, o que é falso. Ilicitude, culpabilidade e punibilidade são degraus diferentes e permanecem intactos.",
      fundamento: "Princípio da insignificância (bagatela) — exclusão da tipicidade material.",
      macete: "Formal é o texto da lei; material é o dano real. A bagatela mata o dano, não o texto.",
      erroComum: "Marcar B por raciocinar que \"se não é crime, não é típico\" sem separar os dois planos.",
      comoBancaPensa: "Oferece as duas metades da tipicidade como alternativas vizinhas.",
    },
  },

  /* ==================================================================
     BLOCO 2 — CERTO/ERRADO, REDAÇÃO ORIGINAL DO MATERIAL
     ================================================================== */

  {
    ...CE96,
    id: "DP-151", subassunto: "DP-26 — taxatividade",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "O princípio da taxatividade exige que a lei penal apresente a descrição das condutas proibidas de maneira precisa e inequívoca. Dessa forma, tipos penais que utilizem expressões vagas ou genéricas são considerados compatíveis com o Direito Penal, pois permitem ao intérprete maior flexibilidade na interpretação.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "expressões vagas",
    cognitivo: {
      motivo: "Testar a conclusão invertida depois de uma premissa correta.",
      palavraCritica: "compatíveis",
    },
    comentario: {
      resolucao: "ERRADO. A primeira frase está certa: a taxatividade exige descrição precisa e inequívoca. A segunda inverte a consequência — é exatamente o tipo vago ou genérico que o princípio VEDA, para impedir interpretação arbitrária e garantir segurança jurídica. \"Maior flexibilidade ao intérprete\" é o mal que a taxatividade combate, não um benefício dela.",
      fundamento: "Princípio da taxatividade (mandato de certeza).",
      macete: "Se a conclusão elogia a vagueza da lei penal, o item está errado.",
      erroComum: "Aprovar o item porque a definição inicial confere.",
      comoBancaPensa: "Define corretamente e emenda um \"dessa forma\" que não decorre da definição.",
    },
  },

  {
    ...CE96,
    id: "DP-152", subassunto: "DP-27 — analogia in malam partem",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "No Direito Penal, a analogia é utilizada como forma de integração normativa. Todavia, a aplicação da analogia in malam partem é admitida apenas em hipóteses excepcionais, especialmente quando se busca suprir lacunas relacionadas a bens jurídicos de relevância constitucional.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "in malam partem",
    cognitivo: {
      motivo: "Testar a criação de uma exceção que a vedação não comporta.",
      palavraCritica: "hipóteses excepcionais",
    },
    comentario: {
      resolucao: "ERRADO. A analogia in malam partem — a que prejudica o réu — é vedada de forma ABSOLUTA, sem exceção, porque a legalidade exige previsão legal prévia e expressa para incriminar ou impor pena. Relevância constitucional do bem jurídico não abre brecha: quando a Constituição quer proteção penal, ela emite mandado de criminalização e o legislador escreve o tipo. Só a analogia in bonam partem é admitida.",
      fundamento: "CF, art. 5º, XXXIX; vedação absoluta da analogia in malam partem.",
      macete: "Não existe \"excepcionalmente in malam partem\". A exceção é sempre para o outro lado.",
      erroComum: "Aceitar a exceção por soar razoável diante de bens jurídicos importantes.",
      comoBancaPensa: "Cria uma exceção plausível para uma vedação que não tem nenhuma.",
    },
  },

  {
    ...CE96,
    id: "DP-153", subassunto: "DP-50 — humanidade e trabalhos forçados",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "O princípio da humanidade autoriza o uso de trabalhos forçados como forma de ressocialização.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "trabalhos forçados",
    cognitivo: {
      motivo: "Item curto e direto sobre uma das penas vedadas pelo art. 5º, XLVII.",
      palavraCritica: "autoriza",
    },
    comentario: {
      resolucao: "ERRADO. A pena de trabalhos forçados está expressamente vedada pelo art. 5º, XLVII, \"c\", da CF, e o princípio da humanidade é justamente o que a proíbe — não o que a autoriza. Ressocialização é finalidade da pena, mas não legitima meio vedado pela Constituição. Trabalho do preso existe, e é regulado pela Lei de Execução Penal, mas não é trabalho forçado.",
      fundamento: "CF, art. 5º, XLVII, \"c\" e XLIX.",
      macete: "Humanidade é lista de proibições. Se o item diz que ela autoriza algo duro, está errado.",
      erroComum: "Confundir trabalho do preso, que é lícito e remunerado, com trabalho forçado.",
      comoBancaPensa: "Atribui ao princípio garantista exatamente o que ele proíbe.",
    },
  },

  {
    ...CE96,
    id: "DP-154", subassunto: "DP-51 — as três fases da individualização",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "O princípio da individualização da pena se manifesta nas fases legislativa, judicial e administrativa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "três fases",
    cognitivo: {
      motivo: "Fixar que a individualização não acaba na sentença.",
      palavraCritica: "administrativa",
    },
    comentario: {
      resolucao: "CERTO. A individualização (art. 5º, XLVI, da CF) percorre três momentos: LEGISLATIVA, quando a lei define em abstrato as penas e os critérios do tipo; JUDICIAL, quando o juiz fixa a pena no caso concreto; e ADMINISTRATIVA ou executória, quando a execução penal se ajusta ao perfil do condenado. A fase que o candidato costuma esquecer é a terceira, e é justamente a que a banca usa para montar o item errado, suprimindo-a.",
      fundamento: "CF, art. 5º, XLVI — individualização em três fases.",
      macete: "Legislativa, judicial, administrativa: a pena é individualizada da lei até a cadeia.",
      erroComum: "Reduzir a individualização à dosimetria feita pelo juiz.",
      comoBancaPensa: "Ora lista as três fases (item certo), ora apaga a executória (item errado).",
    },
  },

  {
    ...CE96,
    id: "DP-155", subassunto: "DP-52 — automutilação e alteridade",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Um jovem que pratica a automutilação devido a penitências religiosas será punido por ofender a sua integridade física consoante os princípios da lesividade e alteridade.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "automutilação",
    cognitivo: {
      motivo: "Aplicar a alteridade a um caso concreto de autolesão.",
      palavraCritica: "será punido",
    },
    comentario: {
      resolucao: "ERRADO. O item usa os princípios certos para chegar à conclusão oposta à deles. A alteridade exige, para haver responsabilização penal, lesão ou perigo de lesão a bem jurídico de TERCEIRO. A automutilação por motivo religioso prejudica apenas o próprio agente e, por isso, é penalmente irrelevante — o Direito Penal não pune quem causa mal apenas a si mesmo.",
      fundamento: "Princípios da lesividade e da alteridade.",
      macete: "Machucou só a si mesmo: fora do alcance do Direito Penal.",
      erroComum: "Ver os nomes corretos dos princípios no item e supor que a conclusão também está certa.",
      comoBancaPensa: "Invoca o princípio exato e inverte o resultado que ele produz.",
    },
  },

  {
    ...CE96,
    id: "DP-156", subassunto: "DP-53 — intranscendência e efeitos patrimoniais",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "O princípio da intranscendência da pena não permite que sucessores sejam responsabilizados patrimonialmente por conduta do condenado, nem que sejam submetidos a efeitos patrimoniais indiretos como pagamento de multa penal ou reparações indenizatórias cíveis.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "reparações indenizatórias",
    cognitivo: {
      motivo: "Testar o alcance exato da intranscendência sobre efeitos civis do crime.",
      palavraCritica: "nem",
    },
    comentario: {
      resolucao: "ERRADO. O item acerta em parte e generaliza demais. A intranscendência (art. 5º, XLV, da CF) impede que a PENA passe da pessoa do condenado — inclusive a multa penal, que é pena. Mas o próprio inciso ressalva que a obrigação de reparar o dano e o perdimento de bens podem ser estendidos aos sucessores até o limite do valor do patrimônio transferido. Reparação indenizatória cível, portanto, alcança os herdeiros dentro da herança.",
      fundamento: "CF, art. 5º, XLV.",
      macete: "Multa não passa. Indenização passa, limitada ao que se herdou.",
      erroComum: "Estender a regra a tudo que envolva dinheiro, sem separar pena de obrigação civil.",
      comoBancaPensa: "Usa um \"nem\" para juntar, na mesma vedação, o que se transmite e o que não se transmite.",
    },
  },

  {
    ...CE96,
    id: "DP-157", subassunto: "EF-DP05 — alteridade e tentativa de suicídio",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Nenhum dos princípios que regem o direito penal veda a criminalização, pelo legislador, da tentativa de suicídio, embora, no momento, esta conduta não esteja tipificada.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "nenhum dos princípios",
    cognitivo: {
      motivo: "Cobrar a alteridade como limite ao próprio legislador, e não só ao intérprete.",
      palavraCritica: "Nenhum dos princípios",
    },
    comentario: {
      resolucao: "ERRADO. Há princípio que veda, e é a ALTERIDADE — também chamada de transcendência ou austeridade. Na formulação de Cleber Masson, ela proíbe incriminar atitude meramente interna do agente, o pensamento e as condutas moralmente censuráveis incapazes de invadir o patrimônio jurídico alheio: ninguém pode ser punido por causar mal apenas a si próprio. A tentativa de suicídio lesa somente quem a pratica, de modo que o legislador não poderia criminalizá-la.",
      fundamento: "Princípio da alteridade; doutrina (Masson).",
      macete: "O princípio não amarra só o juiz: amarra o legislador antes dele.",
      erroComum: "Raciocinar \"não está tipificado, logo nada impede tipificar\" — o que confunde ausência de lei com ausência de limite.",
      comoBancaPensa: "Abre com \"nenhum dos princípios\", absoluto que costuma ser falso, e apoia numa verdade lateral.",
    },
  },

  {
    ...CE96,
    id: "DP-158", subassunto: "EF-DP06 — lei em sentido material × formal",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Em razão do princípio da legalidade penal, a tipificação de conduta como crime deve ser feita por meio de lei em sentido material, não se exigindo, em regra, a lei em sentido formal.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "lei em sentido formal",
    cognitivo: {
      motivo: "Cobrar que a lei penal exige os dois critérios ao mesmo tempo, não um ou outro.",
      palavraCritica: "não se exigindo",
    },
    comentario: {
      resolucao: "ERRADO. A legalidade exige lei em sentido ESTRITO, e lei em sentido estrito pressupõe o atendimento SIMULTÂNEO dos dois critérios. O material diz respeito ao conteúdo — norma abstrata, geral, impessoal. O formal diz respeito ao rito — aprovação pelo processo legislativo previsto na Constituição. O item dispensa o formal, e é aí que erra: sem o rito, não há reserva legal.",
      fundamento: "CF, art. 5º, XXXIX; CP, art. 1º — reserva legal e lei em sentido estrito.",
      macete: "Estrito = material E formal. Os dois, sempre, ao mesmo tempo.",
      erroComum: "Tratar os dois critérios como alternativos porque \"material\" soa mais substantivo.",
      comoBancaPensa: "Escolhe um dos dois critérios e dispensa o outro, mantendo o vocabulário técnico correto.",
    },
  },

  {
    ...CE96,
    id: "DP-159", subassunto: "EF-DP07 — adequação social (caso concreto)",
    dificuldade: 3, tempoIdealSeg: 80,
    textoApoio: "A fim de garantir o sustento de sua família, Pedro adquiriu 500 CDs e DVDs piratas para posteriormente revendê-los. Certo dia, enquanto expunha os produtos para venda em determinada praça pública de uma cidade brasileira, Pedro foi surpreendido por policiais, que apreenderam a mercadoria e o conduziram coercitivamente até a delegacia.",
    enunciado: "Com referência a essa situação hipotética, julgue o item subsequente. O princípio da adequação social se aplica à conduta de Pedro, de modo que se revoga o tipo penal incriminador em razão de se tratar de comportamento socialmente aceito.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "revoga o tipo penal",
    cognitivo: {
      motivo: "Separar o efeito da adequação social (não revoga tipo) do que o item afirma.",
      palavraCritica: "revoga",
    },
    comentario: {
      resolucao: "ERRADO, e o erro está no verbo. A adequação social sustenta que uma conduta, ainda que tipificada, pode não ser considerada criminosa por ser socialmente adequada — mas ela NÃO REVOGA o tipo penal, que continua em vigor e vinculando o intérprete. Revogar lei é ato do Legislativo. No caso concreto, aliás, os tribunais superiores rejeitam a aplicação da adequação social à venda de CDs e DVDs piratas, que segue enquadrada no art. 184 do CP.",
      fundamento: "Princípio da adequação social; CP, art. 184.",
      macete: "Princípio nenhum revoga lei. Princípio interpreta, restringe, afasta a incidência — não apaga o texto.",
      erroComum: "Aceitar o item por concordar que a pirataria é socialmente tolerada, sem checar o efeito jurídico afirmado.",
      comoBancaPensa: "Usa um princípio real e lhe atribui um efeito que só o Legislativo produz.",
    },
  },

  {
    ...CE96,
    id: "DP-160", subassunto: "EF-DP08 — insignificância e tipicidade material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Conforme jurisprudência assente do STF, o princípio da insignificância descaracteriza a tipicidade penal em seu caráter material.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "caráter material",
    cognitivo: {
      motivo: "Confirmar a natureza jurídica da insignificância na formulação afirmativa.",
      palavraCritica: "material",
    },
    comentario: {
      resolucao: "CERTO. É a leitura assente do STF: a insignificância é interpretação restritiva da lei penal e tem natureza jurídica de causa de exclusão da tipicidade MATERIAL. A conduta permanece formalmente prevista como infração — a tipicidade formal está intacta —, mas a lesão ínfima ao bem jurídico afasta a tipicidade material e, com ela, o crime.",
      fundamento: "Princípio da insignificância — jurisprudência do STF.",
      macete: "Bagatela derruba o andar de baixo (material) e deixa o de cima (formal) em pé.",
      erroComum: "Hesitar por lembrar da variante errada, em que a banca troca \"material\" por \"formal\".",
      comoBancaPensa: "Usa o mesmo conteúdo em duas versões: com \"material\" o item é certo, com \"formal\" é errado.",
    },
  },

  /* ==================================================================
     BLOCO 3 — AS 18 DE MÚLTIPLA ESCOLHA ADAPTADAS PARA CERTO/ERRADO

     Cada afirmativa numerada e cada alternativa relevante vira um item
     independente, com a redação original. Afirmativa correta produz item
     CERTO; afirmativa incorreta produz item ERRADO.
     ================================================================== */

  /* ---- de DP-18 (legalidade) ---- */
  {
    ...ADAPT96, id: "DP-161", subassunto: "DP-18, afirmativa I — legalidade",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "O princípio da legalidade penal exige que os crimes e as penas estejam previamente definidos em lei.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "previamente definidos",
    cognitivo: { motivo: "Núcleo da legalidade em uma frase.", palavraCritica: "previamente" },
    comentario: {
      resolucao: "CERTO. É a fórmula do art. 5º, XXXIX, da CF e do art. 1º do CP: não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal. Os dois elementos — anterioridade e previsão legal — estão no item.",
      fundamento: "CF, art. 5º, XXXIX; CP, art. 1º.",
      macete: "Nullum crimen, nulla poena sine praevia lege: crime e pena, ambos antes e ambos em lei.",
      erroComum: "Lembrar só da parte do crime e esquecer que a pena também precisa de cominação prévia.",
      comoBancaPensa: "Usa a fórmula inteira no item certo e suprime metade dela no item errado.",
    },
  },
  {
    ...ADAPT96, id: "DP-162", subassunto: "DP-18, afirmativa II — dupla previsão",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "O princípio da legalidade penal está previsto tanto na Constituição Federal quanto no Código Penal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dupla previsão",
    cognitivo: { motivo: "Fixar as duas sedes normativas da legalidade.", palavraCritica: "tanto… quanto" },
    comentario: {
      resolucao: "CERTO. A legalidade aparece no art. 5º, XXXIX, da Constituição e no art. 1º do Código Penal, com redação praticamente idêntica. Não é redundância inútil: a previsão constitucional a torna cláusula pétrea e limite ao próprio legislador.",
      fundamento: "CF, art. 5º, XXXIX; CP, art. 1º.",
      macete: "Guarde o par: XXXIX na Constituição, art. 1º no Código.",
      erroComum: "Supor que o princípio é só constitucional, ou só do Código.",
      comoBancaPensa: "Cobra o endereço exato dos dois dispositivos, e troca o número num dos dois.",
    },
  },
  {
    ...ADAPT96, id: "DP-163", subassunto: "DP-18, afirmativa III — decreto",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "O princípio da legalidade autoriza, excepcionalmente, a criação de crimes por decretos presidenciais.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "decretos presidenciais",
    cognitivo: { motivo: "Fechar a reserva legal contra ato do Executivo.", palavraCritica: "excepcionalmente" },
    comentario: {
      resolucao: "ERRADO. Não há exceção. Criar crime exige lei em sentido estrito, editada pelo Poder Legislativo — é isso que a reserva legal significa. Decreto é ato do Executivo e não cria tipo penal em hipótese alguma.",
      fundamento: "CF, art. 5º, XXXIX — reserva legal.",
      macete: "\"Excepcionalmente\" ao lado de decreto criando crime: não existe essa exceção.",
      erroComum: "Aceitar por analogia com a medida provisória, que também é do Executivo e tem uma exceção — mas só para beneficiar.",
      comoBancaPensa: "Abre exceção falsa numa regra que é fechada.",
    },
  },
  {
    ...ADAPT96, id: "DP-164", subassunto: "DP-18, afirmativa IV — retroatividade",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "O princípio da legalidade impede a retroatividade da lei penal, mesmo se mais benéfica.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "mesmo se mais benéfica",
    cognitivo: { motivo: "Cobrar a exceção do art. 5º, XL, que a regra esconde.", palavraCritica: "mesmo se mais benéfica" },
    comentario: {
      resolucao: "ERRADO. A lei penal não retroagirá, SALVO para beneficiar o réu — art. 5º, XL, da CF, e art. 2º, parágrafo único, do CP. A retroatividade benéfica é obrigatória, alcança inclusive fato já decidido por sentença condenatória transitada em julgado. O item apaga exatamente essa ressalva.",
      fundamento: "CF, art. 5º, XL; CP, art. 2º, parágrafo único.",
      macete: "Lei nova pior não volta. Lei nova melhor volta sempre, e volta mesmo depois do trânsito em julgado.",
      erroComum: "Ler \"impede a retroatividade\" e parar antes do \"mesmo se mais benéfica\".",
      comoBancaPensa: "Enuncia a regra correta e anexa um \"mesmo se\" que a estende além do que ela alcança.",
    },
  },

  /* ---- de DP-19 (analogia) ---- */
  {
    ...ADAPT96, id: "DP-165", subassunto: "DP-19, afirmativa I — analogia in malam partem",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A analogia é vedada quando utilizada para prejudicar o réu.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "prejudicar o réu",
    cognitivo: { motivo: "Fixar a vedação da analogia in malam partem.", palavraCritica: "vedada" },
    comentario: {
      resolucao: "CERTO. É a vedação da analogia in malam partem, e ela é absoluta: a legalidade exige previsão legal prévia e expressa para incriminar ou agravar, e a analogia, por definição, aplica norma a caso que a lei não previu.",
      fundamento: "Analogia in malam partem — vedação decorrente da legalidade.",
      macete: "Analogia contra o réu: nunca.",
      erroComum: "Achar que a vedação comporta exceções em crimes graves.",
      comoBancaPensa: "Enuncia a vedação corretamente e, em outro item, cria uma exceção inexistente para ela.",
    },
  },
  {
    ...ADAPT96, id: "DP-166", subassunto: "DP-19, afirmativa II — analogia in bonam partem",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "A analogia pode ser empregada de forma benéfica no Direito Penal, desde que respeite os princípios constitucionais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "in bonam partem",
    cognitivo: { motivo: "Confirmar que existe analogia admitida em Penal.", palavraCritica: "benéfica" },
    comentario: {
      resolucao: "CERTO. Doutrina e jurisprudência admitem a analogia in bonam partem, a que favorece o acusado. O fundamento é o caráter garantista da legalidade: ela existe para proteger o indivíduo contra o Estado e não pode ser invocada contra o próprio protegido.",
      fundamento: "Analogia in bonam partem — admitida por doutrina e jurisprudência.",
      macete: "A legalidade é escudo do réu. Escudo não se usa para bater nele.",
      erroComum: "Concluir que \"analogia é vedada em Penal\", sem qualificar a direção.",
      comoBancaPensa: "Testa se o candidato decorou a vedação sem entender por que ela existe.",
    },
  },
  {
    ...ADAPT96, id: "DP-167", subassunto: "DP-19, afirmativa III — analogia contra o acusado",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "A analogia é admitida para suprir lacunas legislativas, mesmo se prejudicar o acusado.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "mesmo se prejudicar",
    cognitivo: { motivo: "Negar a analogia in malam partem na formulação positiva.", palavraCritica: "mesmo se prejudicar" },
    comentario: {
      resolucao: "ERRADO. Suprir lacuna é a função da analogia no direito em geral, mas em matéria penal ela para diante da legalidade: se o resultado prejudica o acusado, é vedada. Lacuna que only poderia ser preenchida em desfavor do réu simplesmente permanece — e o fato fica atípico.",
      fundamento: "Vedação da analogia in malam partem.",
      macete: "Lacuna penal contra o réu não se preenche: fica atípico mesmo.",
      erroComum: "Transportar para o Penal a lógica de integração do direito civil.",
      comoBancaPensa: "Usa a função legítima da analogia como pretexto para estender a direção proibida.",
    },
  },
  {
    ...ADAPT96, id: "DP-168", subassunto: "DP-19, afirmativa IV — legalidade limita a analogia",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "O princípio da legalidade limita o uso da analogia em matéria penal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "limita",
    cognitivo: { motivo: "Explicitar de onde vem o limite à analogia.", palavraCritica: "limita" },
    comentario: {
      resolucao: "CERTO. É a legalidade que impõe o limite, porque exige previsão legal prévia e expressa para a imposição de penas ou incriminações. Sem ela, a analogia correria livre nas duas direções, como ocorre em outros ramos do direito.",
      fundamento: "CF, art. 5º, XXXIX — legalidade como limite à integração.",
      macete: "Quem freia a analogia em Penal é a legalidade, não a analogia em si.",
      erroComum: "Atribuir o limite à taxatividade — que é parente, mas trata da clareza do tipo.",
      comoBancaPensa: "Cobra a relação entre princípios, não a definição isolada de cada um.",
    },
  },

  /* ---- de DP-20 (medidas provisórias) ---- */
  {
    ...ADAPT96, id: "DP-169", subassunto: "DP-20, alternativa C — MP mais favorável",
    dificuldade: 3, tempoIdealSeg: 60,
    enunciado: "As medidas provisórias são admitidas em matéria penal apenas se conferirem tratamento mais favorável ao réu.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "mais favorável",
    cognitivo: { motivo: "Fixar a exceção jurisprudencial à vedação do art. 62.", palavraCritica: "apenas se" },
    comentario: {
      resolucao: "CERTO. A regra do art. 62, § 1º, I, \"b\", da CF veda medida provisória sobre direito penal, mas o STF admite a MP em matéria penal quando ela beneficia o réu. O raciocínio é o mesmo da retroatividade benéfica: a legalidade é garantia individual e não se volta contra quem ela protege.",
      fundamento: "CF, art. 62, § 1º, I, \"b\"; jurisprudência do STF.",
      macete: "MP em Penal só entra pela porta que favorece o réu.",
      erroComum: "Aplicar a vedação de forma absoluta, sem a exceção construída pelo STF.",
      comoBancaPensa: "Cobra a regra num item e a exceção no outro, para separar quem leu a jurisprudência.",
    },
  },
  {
    ...ADAPT96, id: "DP-170", subassunto: "DP-20, alternativa B — vedação absoluta",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "As medidas provisórias não podem, em nenhuma hipótese, tratar de matéria penal.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "em nenhuma hipótese",
    cognitivo: { motivo: "Derrubar o absoluto que a exceção do STF desmente.", palavraCritica: "em nenhuma hipótese" },
    comentario: {
      resolucao: "ERRADO por causa do absoluto. A regra constitucional realmente veda MP sobre direito penal e processual penal, mas o STF admite a hipótese em que a medida provisória beneficia o réu. Havendo uma hipótese, \"nenhuma hipótese\" é falso.",
      fundamento: "CF, art. 62, § 1º, I, \"b\"; jurisprudência do STF.",
      macete: "Regra com exceção conhecida não sobrevive a \"em nenhuma hipótese\".",
      erroComum: "Marcar certo por reconhecer a regra do art. 62 e não lembrar da exceção.",
      comoBancaPensa: "Enuncia a regra verdadeira e a fecha com um absoluto que ela não tem.",
    },
  },

  /* ---- de DP-21 (taxatividade) ---- */
  {
    ...ADAPT96, id: "DP-171", subassunto: "DP-21, alternativa E — tipos vagos",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "O princípio da taxatividade permite a formulação de tipos penais vagos, a fim de facilitar a atuação do juiz.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "tipos vagos",
    cognitivo: { motivo: "Negar a inversão direta do conteúdo da taxatividade.", palavraCritica: "permite" },
    comentario: {
      resolucao: "ERRADO. A taxatividade faz o contrário: proíbe tipos vagos ou genéricos e exige descrição clara, precisa e determinada. Facilitar a atuação do juiz por meio da imprecisão é justamente o risco que o princípio existe para conter, porque abre espaço a interpretação arbitrária.",
      fundamento: "Princípio da taxatividade.",
      macete: "Tipo vago é o inimigo da taxatividade, nunca o produto dela.",
      erroComum: "Achar que margem interpretativa maior é virtude técnica.",
      comoBancaPensa: "Enuncia o oposto exato do princípio e o justifica com um argumento de conveniência.",
    },
  },
  {
    ...ADAPT96, id: "DP-172", subassunto: "DP-21, alternativa A — desdobramento da legalidade",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "O princípio da taxatividade é um desdobramento do princípio da legalidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "desdobramento",
    cognitivo: { motivo: "Situar a taxatividade como derivada da legalidade.", palavraCritica: "desdobramento" },
    comentario: {
      resolucao: "CERTO. A legalidade exige lei prévia para criar crime e pena; a taxatividade vai além e exige que essa lei seja compreensível e objetiva. Uma é condição da outra: a função garantista da legalidade só se realiza quando o cidadão consegue entender, com segurança, o que a norma proíbe.",
      fundamento: "Princípio da taxatividade como desdobramento da legalidade.",
      macete: "Legalidade: tem de haver lei. Taxatividade: a lei tem de dizer o que quer.",
      erroComum: "Tratar os dois como princípios independentes e sem hierarquia entre si.",
      comoBancaPensa: "Cobra a relação de derivação, e não a definição isolada.",
    },
  },

  /* ---- de DP-22 (anterioridade) ---- */
  {
    ...ADAPT96, id: "DP-173", subassunto: "DP-22, alternativa C — conduta atípica na data do fato",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "O princípio da anterioridade garante que ninguém será punido por conduta não tipificada como crime na data do fato.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "na data do fato",
    cognitivo: { motivo: "Definir a anterioridade pelo momento de referência.", palavraCritica: "na data do fato" },
    comentario: {
      resolucao: "CERTO. A anterioridade fixa o momento em que a lei precisa existir: a data do fato. Se a conduta não era típica então, lei posterior não a alcança para punir. É desdobramento essencial da legalidade e está no mesmo art. 5º, XXXIX, da CF.",
      fundamento: "CF, art. 5º, XXXIX; CP, art. 1º.",
      macete: "Congela o relógio na data do fato e pergunta: já existia a lei?",
      erroComum: "Deslocar a referência para a data do julgamento ou da denúncia.",
      comoBancaPensa: "Troca o marco temporal mantendo o resto da frase intacto.",
    },
  },
  {
    ...ADAPT96, id: "DP-174", subassunto: "DP-22, alternativa B — qualquer lei posterior",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "O princípio da anterioridade impede a aplicação de qualquer lei posterior ao crime praticado.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "qualquer lei posterior",
    cognitivo: { motivo: "Separar anterioridade de irretroatividade absoluta.", palavraCritica: "qualquer" },
    comentario: {
      resolucao: "ERRADO. A lei posterior mais benéfica se aplica, e obrigatoriamente — art. 5º, XL, da CF. O que a anterioridade impede é a punição por fato que não era crime quando praticado, e o que a irretroatividade impede é a lei nova mais gravosa. \"Qualquer lei posterior\" varre também a benéfica, e por isso o item cai.",
      fundamento: "CF, art. 5º, XXXIX e XL.",
      macete: "Posterior e pior: não pega. Posterior e melhor: pega.",
      erroComum: "Fundir anterioridade e irretroatividade num bloqueio total ao futuro.",
      comoBancaPensa: "Usa \"qualquer\" para transformar uma regra correta numa afirmação falsa.",
    },
  },

  /* ---- de DP-23 (reserva legal) ---- */
  {
    ...ADAPT96, id: "DP-175", subassunto: "DP-23, afirmativa I — lei em sentido estrito",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Apenas a lei em sentido estrito pode criar infrações penais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sentido estrito",
    cognitivo: { motivo: "Fixar o monopólio da lei formal na criação de crime.", palavraCritica: "Apenas" },
    comentario: {
      resolucao: "CERTO. É a reserva legal. Lei em sentido estrito é a que reúne, ao mesmo tempo, o critério material (conteúdo abstrato, geral e impessoal) e o formal (aprovação pelo processo legislativo constitucional). Nem decreto, nem portaria, nem resolução criam infração penal.",
      fundamento: "CF, art. 5º, XXXIX; CP, art. 1º — reserva legal.",
      macete: "Só o Congresso escreve crime, e escreve por lei.",
      erroComum: "Aceitar norma infralegal quando ela diz estar \"regulamentando\" uma lei penal.",
      comoBancaPensa: "Testa o \"apenas\", que aqui é verdadeiro — nem todo absoluto derruba item.",
    },
  },
  {
    ...ADAPT96, id: "DP-176", subassunto: "DP-23, afirmativa II — decreto regulamentar",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Decretos regulamentares podem prever penas, desde que baseados na lei.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "decretos regulamentares",
    cognitivo: { motivo: "Derrubar a condicional que aparenta salvar o item.", palavraCritica: "desde que baseados na lei" },
    comentario: {
      resolucao: "ERRADO. Decreto regulamentar não prevê pena, e a ressalva \"desde que baseados na lei\" não muda nada: cominar pena é matéria de reserva legal, exclusiva de lei em sentido estrito. O decreto pode detalhar a execução de uma lei, jamais criar a sanção penal.",
      fundamento: "CF, art. 5º, XXXIX — reserva legal absoluta em matéria penal.",
      macete: "Regulamentar não é criar. Decreto detalha, não comina pena.",
      erroComum: "Deixar a condicional tranquilizar: ela não devolve ao Executivo uma competência que ele não tem.",
      comoBancaPensa: "Anexa uma condicional razoável a uma afirmação que é falsa com ou sem ela.",
    },
  },
  {
    ...ADAPT96, id: "DP-177", subassunto: "DP-23, afirmativa IV — jurisprudência",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "A jurisprudência pode inovar na definição de condutas criminosas, desde que com respaldo social.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "jurisprudência",
    cognitivo: { motivo: "Excluir o Judiciário do rol de quem cria crime.", palavraCritica: "inovar" },
    comentario: {
      resolucao: "ERRADO. Definir conduta criminosa é competência exclusiva do Poder Legislativo. A jurisprudência interpreta e aplica o tipo penal, podendo até restringi-lo — é o que faz ao acolher a insignificância —, mas não pode inovar criando incriminação. E \"respaldo social\" não é fonte do Direito Penal.",
      fundamento: "CF, art. 5º, XXXIX — reserva legal; separação de Poderes.",
      macete: "Tribunal pode diminuir o alcance do tipo. Nunca aumentar.",
      erroComum: "Confundir construção jurisprudencial favorável ao réu com criação de crime.",
      comoBancaPensa: "Troca o sujeito da competência e legitima a troca com um critério vago.",
    },
  },

  /* ---- de DP-24 (mandados de criminalização) ---- */
  {
    ...ADAPT96, id: "DP-178", subassunto: "DP-24, alternativa B — dever do legislador",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Os mandados de criminalização impõem ao legislador o dever de criminalizar condutas que atentem contra bens fundamentais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mandados de criminalização",
    cognitivo: { motivo: "Fixar destinatário e natureza do mandado.", palavraCritica: "dever" },
    comentario: {
      resolucao: "CERTO. São determinações constitucionais dirigidas ao legislador infraconstitucional. A Constituição de 1988 não cria tipos penais diretamente, mas impõe o dever de editá-los sobre certos temas — racismo, tortura, tráfico de drogas e terrorismo, nos incisos XLII a XLIV do art. 5º.",
      fundamento: "CF, art. 5º, XLII a XLIV.",
      macete: "A Constituição encomenda o crime; o Congresso entrega.",
      erroComum: "Imaginar que o mandado já tipifica a conduta por si mesmo.",
      comoBancaPensa: "Cobra quem é o destinatário — Legislativo, Executivo ou Judiciário.",
    },
  },
  {
    ...ADAPT96, id: "DP-179", subassunto: "DP-24, alternativa E — força vinculante",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Os mandados de criminalização são diretrizes simbólicas, sem força jurídica vinculante ao legislador infraconstitucional.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "simbólicas",
    cognitivo: { motivo: "Negar a leitura que esvazia o mandado.", palavraCritica: "simbólicas" },
    comentario: {
      resolucao: "ERRADO. Os mandados têm força vinculante: são dever, não conselho. O fato de a Constituição não criar o tipo penal ela mesma não os torna simbólicos — significa apenas que a criação exige lei, como a reserva legal impõe. Podem ser expressos, quando previstos claramente no texto, ou tácitos, quando decorrem da necessidade de proteger eficazmente um direito fundamental.",
      fundamento: "CF, art. 5º, XLII a XLIV — mandados expressos e tácitos.",
      macete: "Não criar o tipo ≠ não obrigar a criá-lo.",
      erroComum: "Deduzir do fato de a CF não tipificar que o mandado seria mera recomendação.",
      comoBancaPensa: "Parte de uma premissa verdadeira para uma conclusão que a esvazia.",
    },
  },

  /* ---- de DP-25 (costumes) ---- */
  {
    ...ADAPT96, id: "DP-180", subassunto: "DP-25, alternativa E — costume interpretativo",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Os costumes podem ser utilizados como critério de interpretação de conceitos legais indeterminados no Direito Penal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "conceitos legais indeterminados",
    cognitivo: { motivo: "Preservar a utilidade interpretativa do costume.", palavraCritica: "interpretação" },
    comentario: {
      resolucao: "CERTO. O costume não é fonte formal imediata — não cria nem agrava crime —, mas serve de instrumento de interpretação. O exemplo clássico é o \"repouso noturno\" do art. 155, § 1º, do CP, cujo alcance depende dos hábitos sociais do local e do contexto do furto.",
      fundamento: "Fontes do Direito Penal; CP, art. 155, § 1º.",
      macete: "Costume não escreve a lei, mas ajuda a medir palavras que a lei deixou em aberto.",
      erroComum: "Concluir que o costume é irrelevante em Penal por não poder criar crime.",
      comoBancaPensa: "Separa fonte de criação de fonte de interpretação — quem funde as duas erra nos dois sentidos.",
    },
  },

  /* ---- de DP-44 (humanidade) ---- */
  {
    ...ADAPT96, id: "DP-181", subassunto: "DP-44, alternativa D — integridade do preso",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "O princípio da humanidade assegura ao preso o respeito à sua integridade física e moral, sendo cláusula constitucional expressa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "integridade física e moral",
    cognitivo: { motivo: "Ancorar a humanidade no inciso que a positiva.", palavraCritica: "expressa" },
    comentario: {
      resolucao: "CERTO. O art. 5º, XLIX, da CF assegura aos presos o respeito à integridade física e moral — previsão expressa, não construção doutrinária. O princípio se liga à dignidade da pessoa humana do art. 1º, III, e se completa com o rol de penas vedadas do inciso XLVII.",
      fundamento: "CF, art. 5º, XLIX; art. 1º, III.",
      macete: "XLVII lista o que não pode ser pena. XLIX garante o tratamento de quem já está preso.",
      erroComum: "Tratar a humanidade como princípio implícito, sem sede constitucional própria.",
      comoBancaPensa: "Testa se o candidato sabe distinguir princípio expresso de princípio implícito.",
    },
  },
  {
    ...ADAPT96, id: "DP-182", subassunto: "DP-44, alternativa C — pena de morte",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "O princípio da humanidade veda as penas de morte, de caráter perpétuo e de banimento, mesmo em caso de guerra declarada.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "guerra declarada",
    cognitivo: { motivo: "Cobrar a única exceção do rol do art. 5º, XLVII.", palavraCritica: "mesmo em caso de guerra declarada" },
    comentario: {
      resolucao: "ERRADO. O art. 5º, XLVII, \"a\", veda a pena de morte SALVO em caso de guerra declarada, nos termos do art. 84, XIX. A ressalva existe e é a única do rol — as demais penas listadas no inciso (perpétua, trabalhos forçados, banimento, cruéis) são vedadas sem exceção. Ao dizer \"mesmo em caso de guerra declarada\", o item apaga a ressalva.",
      fundamento: "CF, art. 5º, XLVII, \"a\"; art. 84, XIX.",
      macete: "Uma exceção no inciso inteiro: morte, em guerra declarada.",
      erroComum: "Decorar o rol como bloco absoluto e não guardar a ressalva da alínea \"a\".",
      comoBancaPensa: "Reproduz o inciso quase literal e retira a única exceção que ele contém.",
    },
  },

  /* ---- de DP-45 (intranscendência) ---- */
  {
    ...ADAPT96, id: "DP-183", subassunto: "DP-45, afirmativa II — efeitos civis",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Os efeitos civis do crime podem atingir os sucessores do condenado, até o limite do valor do patrimônio herdado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "limite do valor herdado",
    cognitivo: { motivo: "Fixar a extensão civil admitida pelo art. 5º, XLV.", palavraCritica: "até o limite" },
    comentario: {
      resolucao: "CERTO. O art. 5º, XLV, da CF, depois de afirmar que nenhuma pena passará da pessoa do condenado, ressalva que a obrigação de reparar o dano e o perdimento de bens podem ser estendidos aos sucessores e contra eles executados, até o limite do valor do patrimônio transferido. É obrigação civil, não pena.",
      fundamento: "CF, art. 5º, XLV.",
      macete: "O herdeiro responde com o que herdou, nunca com o que é dele.",
      erroComum: "Ler a primeira parte do inciso e parar antes da ressalva.",
      comoBancaPensa: "Cobra a ressalva do inciso, que é a parte menos memorizada.",
    },
  },

  /* ---- de DP-46 (individualização) ---- */
  {
    ...ADAPT96, id: "DP-184", subassunto: "DP-46, alternativa A — ajuste ao caso concreto",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "O princípio da individualização da pena garante que a sanção seja ajustada às circunstâncias do fato e às condições do condenado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ajustada",
    cognitivo: { motivo: "Definir individualização pelo ajuste ao caso concreto.", palavraCritica: "condições do condenado" },
    comentario: {
      resolucao: "CERTO. Art. 5º, XLVI, da CF. A lei fixa limites mínimo e máximo; cabe ao julgador percorrer culpabilidade, antecedentes, conduta social, personalidade, motivos, circunstâncias e consequências — o roteiro do art. 59 do CP — para achar o ponto adequado dentro da faixa.",
      fundamento: "CF, art. 5º, XLVI; CP, art. 59.",
      macete: "A pena é feita sob medida, e a medida é o art. 59.",
      erroComum: "Confundir com legalidade, imaginando pena exata definida em abstrato pela lei.",
      comoBancaPensa: "Contrapõe individualização a padronização em quase todos os itens do tema.",
    },
  },

  /* ---- de DP-47 (ofensividade) ---- */
  {
    ...ADAPT96, id: "DP-185", subassunto: "DP-47, afirmativa III — perigo abstrato",
    dificuldade: 3, tempoIdealSeg: 65,
    enunciado: "O STF e o STJ admitem os crimes de perigo abstrato, desde que a experiência demonstre que a conduta é, por si, perigosa.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "perigo abstrato",
    cognitivo: { motivo: "Confirmar a compatibilidade entre ofensividade e perigo abstrato.", palavraCritica: "por si" },
    comentario: {
      resolucao: "CERTO. Os tribunais superiores reconhecem a constitucionalidade dos crimes de perigo abstrato quando a experiência mostra que a conduta é intrinsecamente perigosa. Porte ilegal de arma de fogo e embriaguez ao volante são os exemplos consolidados: não se exige demonstrar risco concreto no caso, porque o risco está na conduta.",
      fundamento: "Jurisprudência do STF e do STJ sobre crimes de perigo abstrato.",
      macete: "Perigo abstrato não é presunção arbitrária: é lesividade antecipada pela experiência.",
      erroComum: "Concluir que a ofensividade tornaria inconstitucional todo crime de perigo abstrato.",
      comoBancaPensa: "Coloca princípio doutrinário contra jurisprudência para ver quem conhece as duas.",
    },
  },

  /* ---- de DP-48 (isonomia) ---- */
  {
    ...ADAPT96, id: "DP-186", subassunto: "DP-48, alternativa B — isonomia material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Pelo princípio da isonomia, a mesma norma penal é aplicada a todos, respeitadas as diferenças concretas entre os réus.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "diferenças concretas",
    cognitivo: { motivo: "Fixar a isonomia material contra a leitura formal.", palavraCritica: "respeitadas as diferenças" },
    comentario: {
      resolucao: "CERTO. Isonomia penal é tratar igualmente os iguais e desigualmente os desiguais, na medida da desigualdade. A Constituição dá o exemplo no art. 5º, XLVIII, ao mandar cumprir a pena em estabelecimentos distintos segundo a natureza do delito, a idade e o sexo do apenado.",
      fundamento: "CF, art. 5º, caput e XLVIII.",
      macete: "Mesma norma para todos; mesma pena, não.",
      erroComum: "Ler \"respeitadas as diferenças\" como quebra da igualdade, quando é a realização dela.",
      comoBancaPensa: "Opõe igualdade formal e material, oferecendo a primeira como isca.",
    },
  },

  /* ---- de DP-49 (alteridade) ---- */
  {
    ...ADAPT96, id: "DP-187", subassunto: "DP-49, alternativa C — autolesão",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "O princípio da alteridade impede que o Direito Penal puna condutas que afetam exclusivamente o próprio agente, sem lesar terceiros.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "exclusivamente o próprio agente",
    cognitivo: { motivo: "Fixar a exigência de lesão a bem jurídico alheio.", palavraCritica: "sem lesar terceiros" },
    comentario: {
      resolucao: "CERTO. A alteridade, ou transcendência do resultado, exige que a conduta lese ou ameace bem jurídico de terceiro. Autolesão por motivo religioso, uso pessoal de drogas e tentativa de suicídio ficam fora do Direito Penal por essa razão — o mal se esgota no próprio agente.",
      fundamento: "Princípio da alteridade (transcendência do resultado).",
      macete: "Sem outro atingido, não há crime.",
      erroComum: "Confundir com intranscendência, que trata de até onde vai a pena, não de quem é a vítima.",
      comoBancaPensa: "Usa a proximidade sonora entre alteridade e intranscendência para trocar as definições.",
    },
  },

  /* ---- de EF-DP02, EF-DP03, EF-DP01 ---- */
  {
    ...ADAPT96, id: "DP-188", subassunto: "EF-DP02, alternativa C — presunção de inocência",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "O indivíduo autuado em flagrante pela prática de um crime não poderá ser considerado culpado até o trânsito em julgado de sentença penal condenatória, em razão do princípio da presunção de inocência.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "presunção de inocência",
    cognitivo: { motivo: "Casar a fórmula constitucional com o nome do princípio.", palavraCritica: "trânsito em julgado" },
    comentario: {
      resolucao: "CERTO. Art. 5º, LVII, da CF: ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória. O flagrante é elemento de fato que autoriza a prisão, mas não antecipa juízo de culpa — presunção de inocência e não culpabilidade são o mesmo princípio, com dois nomes.",
      fundamento: "CF, art. 5º, LVII.",
      macete: "Preso em flagrante não é culpado: é preso em flagrante.",
      erroComum: "Trocar por devido processo legal ou ampla defesa, que são garantias vizinhas.",
      comoBancaPensa: "Cita o inciso quase literal e testa se o candidato sabe o nome do que leu.",
    },
  },
  {
    ...ADAPT96, id: "DP-189", subassunto: "EF-DP03, alternativa C — insignificância e tipicidade formal",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "O princípio da insignificância exclui a tipicidade formal em razão de lesão ou risco de lesão irrelevante ao bem jurídico tutelado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "tipicidade formal",
    cognitivo: { motivo: "Item que erra por uma única palavra — formal no lugar de material.", palavraCritica: "formal" },
    comentario: {
      resolucao: "ERRADO por uma palavra. A insignificância exclui a tipicidade MATERIAL. A conduta continua formalmente descrita na lei — subtrair coisa alheia móvel é furto, valha o objeto nove reais ou nove mil —, e é a insignificância da lesão que afasta o segundo requisito da tipicidade. Dizer que exclui a formal equivaleria a dizer que o fato não está previsto em lei.",
      fundamento: "Princípio da insignificância — exclusão da tipicidade material (STF).",
      macete: "Formal é o texto; material é o estrago. A bagatela apaga o estrago.",
      erroComum: "Ler a frase inteira certa e não notar a troca de adjetivo.",
      comoBancaPensa: "Deixa o item 95% verdadeiro e concentra o erro num único termo técnico.",
    },
  },
  {
    ...ADAPT96, id: "DP-190", subassunto: "EF-DP03, alternativa A — intranscendência × ofensividade",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "O princípio da intranscendência pressupõe que o Direito Penal só pode incidir nas hipóteses em que há lesão ou risco de lesão a um bem jurídico.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "intranscendência",
    cognitivo: { motivo: "Separar dois princípios que a banca embaralha.", palavraCritica: "lesão ou risco de lesão" },
    comentario: {
      resolucao: "ERRADO. A definição apresentada é a da OFENSIVIDADE (ou lesividade). A intranscendência — também chamada pessoalidade — diz outra coisa: que a pena não passa da pessoa do condenado, ressalvados os efeitos civis até o limite da herança. Um princípio trata do que justifica punir; o outro, de quem pode ser atingido pela punição.",
      fundamento: "CF, art. 5º, XLV; princípio da ofensividade.",
      macete: "Ofensividade: por que punir. Intranscendência: quem pode ser punido.",
      erroComum: "Aceitar por reconhecer que a definição, em si, é verdadeira de algum princípio.",
      comoBancaPensa: "Escreve uma definição correta e assina com o nome do princípio errado.",
    },
  },
  {
    ...ADAPT96, id: "DP-191", subassunto: "EF-DP01, alternativa D — efeito da bagatela",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "O princípio da bagatela, também chamado de insignificância, exclui a tipicidade material da conduta.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "tipicidade material",
    cognitivo: { motivo: "Confirmar a natureza jurídica na formulação afirmativa.", palavraCritica: "material" },
    comentario: {
      resolucao: "CERTO. Bagatela e insignificância são o mesmo princípio, e o efeito é a exclusão da tipicidade material. Não se afasta a ilicitude, nem a culpabilidade, nem a punibilidade: o fato deixa de ser típico no plano material, e por isso não há crime desde a origem.",
      fundamento: "Princípio da insignificância — natureza jurídica.",
      macete: "Bagatela mata a tipicidade material. Só ela, e nada mais da estrutura do crime.",
      erroComum: "Marcar exclusão de ilicitude, confundindo com as excludentes do art. 23 do CP.",
      comoBancaPensa: "Percorre os degraus do crime nas alternativas: ilicitude, culpabilidade, punibilidade, tipicidade.",
    },
  },

  /* ==================================================================
     BLOCO 4 — QUESTÕES NOVAS A PARTIR DO MATERIAL DE APOIO
     Oito de múltipla escolha e doze de CERTO/ERRADO.
     ================================================================== */

  {
    ...NOVA_ME96, id: "DP-192", subassunto: "Lei em sentido estrito — critérios material e formal",
    dificuldade: 3, tempoIdealSeg: 100,
    enunciado: "A exigência de lei em sentido estrito, própria da reserva legal penal, pressupõe o atendimento:",
    alternativas: [
      "apenas do critério material, relativo ao conteúdo abstrato e geral da norma.",
      "apenas do critério formal, relativo ao processo legislativo constitucional.",
      "simultâneo dos critérios material e formal.",
      "alternativo dos critérios material e formal, bastando um deles.",
      "do critério material, salvo quando se tratar de contravenção penal.",
    ],
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "simultâneo",
    cognitivo: {
      motivo: "Cobrar que os dois critérios são cumulativos, e não alternativos.",
      palavraCritica: "simultâneo",
    },
    comentario: {
      resolucao: "GABARITO C. Lei em sentido estrito é a que reúne os dois critérios ao mesmo tempo. O MATERIAL diz respeito ao conteúdo: norma abstrata e geral, disciplinando situações de forma impessoal. O FORMAL diz respeito à elaboração: aprovação pelo processo legislativo previsto na Constituição. Faltando qualquer um, não há reserva legal — e é por isso que a medida provisória, que tem força de lei mas não segue o rito ordinário, não é lei em sentido estrito.",
      fundamento: "CF, art. 5º, XXXIX; CP, art. 1º — reserva legal.",
      macete: "Estrito = conteúdo certo + rito certo. Os dois, sempre.",
      erroComum: "Escolher só o material por soar mais substantivo, ou só o formal por soar mais técnico.",
      comoBancaPensa: "Oferece cada critério isolado e a soma deles, apostando na leitura apressada.",
    },
  },
  {
    ...NOVA_ME96, id: "DP-193", subassunto: "Irretroatividade da lei penal",
    dificuldade: 2, tempoIdealSeg: 90,
    enunciado: "Nos termos do art. 5º, XL, da Constituição Federal, a lei penal:",
    alternativas: [
      "não retroagirá em hipótese alguma, por força da segurança jurídica.",
      "não retroagirá, salvo para beneficiar o réu.",
      "retroagirá sempre que houver expressa determinação do legislador.",
      "retroagirá para alcançar fatos anteriores, salvo se já houver sentença condenatória.",
      "retroagirá apenas quando se tratar de crime hediondo ou equiparado.",
    ],
    gabarito: "B", pegadinha: "termo-absoluto", palavraChave: "salvo para beneficiar o réu",
    cognitivo: {
      motivo: "Fixar a literalidade do inciso XL, com a ressalva.",
      palavraCritica: "salvo",
    },
    comentario: {
      resolucao: "GABARITO B, que é a literalidade do inciso: \"a lei penal não retroagirá, salvo para beneficiar o réu\". A alternativa A absolutiza e apaga a ressalva. A C inverte: a retroatividade benéfica não depende de o legislador mandar, decorre da Constituição. A D contraria o art. 2º, parágrafo único, do CP, segundo o qual a lei mais benéfica se aplica ainda que o fato já esteja decidido por sentença transitada em julgado. A E restringe a princípio geral.",
      fundamento: "CF, art. 5º, XL; CP, art. 2º, parágrafo único.",
      macete: "A coisa julgada não segura lei nova mais benéfica.",
      erroComum: "Marcar D, supondo que o trânsito em julgado encerraria o assunto.",
      comoBancaPensa: "Coloca o absoluto e a ressalva lado a lado; a ressalva é quase sempre a resposta.",
    },
  },
  {
    ...NOVA_ME96, id: "DP-194", subassunto: "Mandados de criminalização — expressos e tácitos",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "Os mandados de criminalização podem ser classificados em expressos e tácitos. São TÁCITOS aqueles que:",
    alternativas: [
      "estão previstos de forma clara no texto constitucional, como o racismo e a tortura.",
      "decorrem da necessidade de proteger de maneira eficaz determinados direitos fundamentais.",
      "resultam de tratado internacional de direitos humanos incorporado com status supralegal.",
      "são criados pelo Supremo Tribunal Federal ao julgar mandado de injunção.",
      "dependem de referendo popular para produzir efeitos vinculantes.",
    ],
    gabarito: "B", pegadinha: "troca-conceito", palavraChave: "tácitos",
    cognitivo: {
      motivo: "Separar as duas espécies de mandado de criminalização.",
      palavraCritica: "decorrem",
    },
    comentario: {
      resolucao: "GABARITO B. Expressos são os previstos de forma clara no texto — racismo, tortura, tráfico de drogas e terrorismo, nos incisos XLII a XLIV do art. 5º —, e é o que descreve a alternativa A. Tácitos são os que decorrem da necessidade de proteger eficazmente determinados direitos fundamentais, ainda que a Constituição não os enuncie um a um. As alternativas C, D e E atribuem a criação de mandados a fontes que não os produzem.",
      fundamento: "CF, art. 5º, XLII a XLIV — mandados expressos; construção doutrinária dos tácitos.",
      macete: "Expresso está escrito. Tácito se deduz da proteção que a Constituição quis dar.",
      erroComum: "Trocar as duas espécies, marcando a descrição do expresso.",
      comoBancaPensa: "Descreve corretamente as duas espécies e pergunta por uma delas.",
    },
  },
  {
    ...NOVA_ME96, id: "DP-195", subassunto: "Costume — elementos objetivo e subjetivo",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "No Direito Penal, o costume é composto por um elemento objetivo e um subjetivo. O elemento SUBJETIVO corresponde:",
    alternativas: [
      "à prática reiterada de determinada conduta social.",
      "à convicção de sua obrigatoriedade jurídica.",
      "à aceitação da conduta pelos tribunais superiores.",
      "à ausência de norma legal em sentido contrário.",
      "à previsão do costume em regulamento administrativo.",
    ],
    gabarito: "B", pegadinha: "troca-conceito", palavraChave: "obrigatoriedade jurídica",
    cognitivo: {
      motivo: "Cobrar a estrutura do costume, que a banca usa para montar troca de elementos.",
      palavraCritica: "convicção",
    },
    comentario: {
      resolucao: "GABARITO B. O costume tem dois elementos: o OBJETIVO, que é a prática reiterada da conduta social (alternativa A), e o SUBJETIVO, que é a convicção de sua obrigatoriedade jurídica. Reunidos, ainda assim o costume não cria nem agrava crime, por força da legalidade — mas serve para interpretar conceitos legais indeterminados, como o \"repouso noturno\" do furto qualificado.",
      fundamento: "Fontes do Direito Penal — costume; CP, art. 155, § 1º.",
      macete: "Objetivo é o que se faz. Subjetivo é achar que se deve fazer.",
      erroComum: "Marcar A, que é o elemento objetivo, por ser a definição mais lembrada.",
      comoBancaPensa: "Apresenta os dois elementos verdadeiros e pergunta qual é qual.",
    },
  },
  {
    ...NOVA_ME96, id: "DP-196", subassunto: "Individualização — fase administrativa",
    dificuldade: 2, tempoIdealSeg: 90,
    enunciado: "A individualização da pena manifesta-se em três fases. A fase ADMINISTRATIVA corresponde:",
    alternativas: [
      "à definição abstrata das penas e dos critérios no tipo penal.",
      "à fixação da pena pelo juiz na sentença condenatória.",
      "à execução penal ajustada ao perfil do condenado.",
      "à revisão da dosimetria pelo tribunal em grau de recurso.",
      "à concessão de indulto pelo Presidente da República.",
    ],
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "execução penal",
    cognitivo: {
      motivo: "Cobrar a terceira fase, que é a menos lembrada das três.",
      palavraCritica: "administrativa",
    },
    comentario: {
      resolucao: "GABARITO C. As três fases são: LEGISLATIVA, em que a lei define em abstrato as penas e os critérios do tipo (alternativa A); JUDICIAL, em que o juiz fixa a pena no caso concreto (alternativa B); e ADMINISTRATIVA, ou executória, em que a execução se ajusta ao perfil do condenado — progressão de regime, trabalho, benefícios. A revisão em recurso ainda é atividade judicial, e o indulto é causa de extinção da punibilidade, não fase de individualização.",
      fundamento: "CF, art. 5º, XLVI — individualização em três fases.",
      macete: "Legislativa na lei, judicial na sentença, administrativa na cadeia.",
      erroComum: "Parar na fase judicial e tratar a executória como assunto de outra disciplina.",
      comoBancaPensa: "Lista as três fases nas alternativas e pergunta por uma; ou apaga a terceira em item C/E.",
    },
  },
  {
    ...NOVA_ME96, id: "DP-197", subassunto: "Alteridade — condutas penalmente irrelevantes",
    dificuldade: 2, tempoIdealSeg: 90,
    enunciado: "Considerando o princípio da alteridade, assinale a conduta que, por afetar exclusivamente o próprio agente, é penalmente irrelevante:",
    alternativas: [
      "portar arma de fogo de uso permitido sem autorização.",
      "conduzir veículo automotor sob influência de álcool em via pública.",
      "tentar contra a própria vida.",
      "expor à venda mercadoria falsificada em via pública.",
      "deixar de recolher tributo devido à Fazenda Pública.",
    ],
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "próprio agente",
    cognitivo: {
      motivo: "Aplicar a alteridade em casos concretos, distinguindo autolesão de perigo a terceiros.",
      palavraCritica: "exclusivamente",
    },
    comentario: {
      resolucao: "GABARITO C. A tentativa de suicídio lesa apenas quem a pratica e, pela alteridade, fica fora do Direito Penal — o mesmo vale para a autolesão por motivo religioso e para o uso pessoal de drogas. As demais alternativas descrevem condutas que atingem bens jurídicos alheios ou coletivos: porte ilegal de arma e embriaguez ao volante são crimes de perigo abstrato admitidos pelos tribunais; a venda de mercadoria falsificada atinge o consumidor e o titular do direito; e o não recolhimento de tributo lesa o erário.",
      fundamento: "Princípio da alteridade; crimes de perigo abstrato na jurisprudência.",
      macete: "Procure a vítima. Se a única vítima é o próprio agente, não é crime.",
      erroComum: "Marcar embriaguez ao volante por não haver vítima identificada — mas o bem jurídico é a segurança viária.",
      comoBancaPensa: "Mistura autolesão com perigo abstrato, que também não tem vítima concreta.",
    },
  },
  {
    ...NOVA_ME96, id: "DP-198", subassunto: "Intranscendência — o que se transmite",
    dificuldade: 3, tempoIdealSeg: 100,
    enunciado: "Falecido o condenado, e considerando o art. 5º, XLV, da Constituição Federal, pode ser exigido dos sucessores, até o limite do valor do patrimônio transferido:",
    alternativas: [
      "o cumprimento da pena privativa de liberdade convertida em restritiva de direitos.",
      "o pagamento da pena de multa aplicada na sentença condenatória.",
      "a obrigação de reparar o dano e o perdimento de bens.",
      "a totalidade dos efeitos penais e civis da condenação, sem qualquer limite.",
      "nenhuma obrigação, pois a morte extingue todos os efeitos da condenação.",
    ],
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "reparar o dano",
    cognitivo: {
      motivo: "Separar pena (não se transmite) de obrigação civil (transmite-se com limite).",
      palavraCritica: "até o limite",
    },
    comentario: {
      resolucao: "GABARITO C. O art. 5º, XLV, afirma que nenhuma pena passará da pessoa do condenado e ressalva, na segunda parte, que a obrigação de reparar o dano e a decretação do perdimento de bens podem ser estendidas aos sucessores e contra eles executadas, até o limite do valor do patrimônio transferido. A multa é PENA e não se transmite — o que derruba a alternativa B. A E erra ao dizer que nada subsiste: os efeitos civis subsistem.",
      fundamento: "CF, art. 5º, XLV.",
      macete: "Morreu: pena acaba, dívida civil continua — até o tamanho da herança.",
      erroComum: "Marcar B por ser a multa uma obrigação em dinheiro, como a indenização.",
      comoBancaPensa: "Aproxima multa e reparação, que se parecem no efeito e diferem na natureza.",
    },
  },
  {
    ...NOVA_ME96, id: "DP-199", subassunto: "Taxatividade × legalidade",
    dificuldade: 2, tempoIdealSeg: 90,
    enunciado: "Sobre a relação entre os princípios da legalidade e da taxatividade, é correto afirmar que:",
    alternativas: [
      "são sinônimos, designando a mesma exigência de lei prévia.",
      "a taxatividade é desdobramento da legalidade e acrescenta a exigência de clareza e determinação do tipo.",
      "a legalidade é desdobramento da taxatividade, que lhe é anterior na Constituição.",
      "a taxatividade dispensa a lei prévia quando o tipo penal for suficientemente claro.",
      "a legalidade se dirige ao juiz e a taxatividade, ao legislador, sem ponto de contato entre elas.",
    ],
    gabarito: "B", pegadinha: "troca-conceito", palavraChave: "desdobramento",
    cognitivo: {
      motivo: "Fixar a hierarquia e a diferença de conteúdo entre os dois princípios.",
      palavraCritica: "acrescenta",
    },
    comentario: {
      resolucao: "GABARITO B. A legalidade impõe lei prévia para criar crime e pena. A taxatividade parte dela e vai além: exige que essa lei seja compreensível, objetiva e determinada, vedando tipos vagos ou genéricos. Não são sinônimos (A), a relação de derivação não se inverte (C), a taxatividade jamais dispensa a lei (D), e ambas vinculam legislador e juiz, cada uma a seu modo (E).",
      fundamento: "CF, art. 5º, XXXIX; princípio da taxatividade (mandato de certeza).",
      macete: "Legalidade: tem lei? Taxatividade: dá para entender a lei?",
      erroComum: "Tratar os dois como o mesmo princípio com dois nomes.",
      comoBancaPensa: "Inverte a relação de derivação, que é o erro mais econômico de montar.",
    },
  },

  /* ---- novas em CERTO/ERRADO ---- */
  {
    ...NOVA_CE96, id: "DP-200", subassunto: "Finalidade dos princípios penais",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "Os princípios do Direito Penal funcionam como limites ao poder de punir do Estado e como garantias do cidadão, orientando tanto o legislador na formulação das leis quanto o intérprete na sua aplicação.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "limites ao poder de punir",
    cognitivo: { motivo: "Fixar a dupla função dos princípios: limite e garantia.", palavraCritica: "tanto… quanto" },
    comentario: {
      resolucao: "CERTO. Os princípios dão unidade ao sistema penal e operam em duas direções: contêm o poder punitivo do Estado e asseguram posições jurídicas ao cidadão. E vinculam dois destinatários — o legislador, ao redigir a lei, e o intérprete, ao aplicá-la —, de modo que não são conselhos programáticos.",
      fundamento: "Princípios do Direito Penal — função limitadora e garantista.",
      macete: "Princípio penal não é enfeite: é freio no Estado e escudo do cidadão.",
      erroComum: "Reduzir os princípios a critérios de interpretação, esquecendo que limitam o legislador antes.",
      comoBancaPensa: "Suprime um dos dois destinatários para montar o item errado.",
    },
  },
  {
    ...NOVA_CE96, id: "DP-201", subassunto: "Medida provisória e lei em sentido estrito",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "As medidas provisórias, embora tenham força de lei, não são consideradas leis em sentido estrito, pois não seguem o processo legislativo ordinário.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "força de lei",
    cognitivo: { motivo: "Distinguir força de lei de lei em sentido estrito.", palavraCritica: "força de lei" },
    comentario: {
      resolucao: "CERTO. A medida provisória é editada pelo Presidente da República em caso de relevância e urgência, com força de lei (art. 62 da CF) — mas não percorre o processo legislativo ordinário e, por isso, não preenche o critério formal da lei em sentido estrito. É exatamente daí que decorre a vedação, em regra, de MP sobre matéria penal.",
      fundamento: "CF, art. 62 e art. 62, § 1º, I, \"b\".",
      macete: "Força de lei não é lei em sentido estrito. Falta o rito.",
      erroComum: "Equiparar MP a lei ordinária para todos os efeitos por ela \"valer como lei\".",
      comoBancaPensa: "Explora a expressão \"força de lei\", que sugere equivalência plena.",
    },
  },
  {
    ...NOVA_CE96, id: "DP-202", subassunto: "Medida provisória revogando tipo penal",
    dificuldade: 3, tempoIdealSeg: 60,
    enunciado: "Por possuírem força de lei, as medidas provisórias podem revogar tipos penais incriminadores independentemente de conversão em lei.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "revogar tipos penais",
    cognitivo: { motivo: "Testar o limite da MP em matéria penal na direção da revogação.", palavraCritica: "independentemente" },
    comentario: {
      resolucao: "ERRADO. Medida provisória não é lei em sentido estrito e não revoga tipo penal por conta própria. A exceção admitida pelo STF é outra e mais estreita: MP em matéria penal quando a norma BENEFICIA o réu, o que não se confunde com autorizar a revogação livre de incriminações por ato do Executivo.",
      fundamento: "CF, art. 62, § 1º, I, \"b\"; jurisprudência do STF.",
      macete: "Da MP em Penal só passa o que ajuda o réu, e ainda assim excepcionalmente.",
      erroComum: "Deduzir de \"força de lei\" um poder de revogação equivalente ao da lei.",
      comoBancaPensa: "Parte de uma premissa verdadeira (força de lei) para uma consequência que ela não sustenta.",
    },
  },
  {
    ...NOVA_CE96, id: "DP-203", subassunto: "Costume como fonte formal",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Em razão do princípio da legalidade, os costumes não podem ser fonte formal imediata do Direito Penal, de modo que não criam nem agravam condutas puníveis.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "fonte formal imediata",
    cognitivo: { motivo: "Fechar a porta do costume como fonte de incriminação.", palavraCritica: "nem agravam" },
    comentario: {
      resolucao: "CERTO. A legalidade exige previsão legal prévia e expressa para criar crime e cominar pena, o que exclui o costume como fonte formal imediata — tanto para criar quanto para agravar. O que permanece é o uso interpretativo, para dar conteúdo a conceitos legais indeterminados.",
      fundamento: "CF, art. 5º, XXXIX; fontes do Direito Penal.",
      macete: "Costume não incrimina e não agrava. Só ajuda a ler.",
      erroComum: "Aceitar o costume para agravar, achando que a vedação alcança só a criação do tipo.",
      comoBancaPensa: "Testa se o candidato estendeu a vedação também ao agravamento.",
    },
  },
  {
    ...NOVA_CE96, id: "DP-204", subassunto: "Repouso noturno e costume interpretativo",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "A definição de \"repouso noturno\", prevista no § 1º do art. 155 do Código Penal, depende dos hábitos sociais do local e do contexto em que se deu o furto, o que evidencia o uso do costume como instrumento de interpretação da norma penal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "repouso noturno",
    cognitivo: { motivo: "Ancorar o costume interpretativo no exemplo consagrado.", palavraCritica: "hábitos sociais do local" },
    comentario: {
      resolucao: "CERTO. O Código não define hora de início e fim do repouso noturno. Preencher esse conceito exige olhar para os hábitos da localidade — o que evidencia o costume operando como instrumento de interpretação, não como fonte criadora. É o exemplo padrão da distinção entre as duas funções.",
      fundamento: "CP, art. 155, § 1º; costume como fonte interpretativa.",
      macete: "Repouso noturno é o exemplo que a banca usa toda vez que quer costume interpretativo.",
      erroComum: "Ver o costume influindo na causa de aumento e concluir que ele estaria criando direito penal.",
      comoBancaPensa: "Usa o exemplo canônico e, na versão errada, troca \"interpretação\" por \"criação\".",
    },
  },
  {
    ...NOVA_CE96, id: "DP-205", subassunto: "Constituição e criação de tipos penais",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "A Constituição Federal de 1988 cria diretamente tipos penais ao estabelecer que a prática do racismo constitui crime inafiançável e imprescritível.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "cria diretamente",
    cognitivo: { motivo: "Distinguir mandado de criminalização de tipificação constitucional.", palavraCritica: "diretamente" },
    comentario: {
      resolucao: "ERRADO. A Constituição não cria tipo penal: ela emite mandado de criminalização, impondo ao legislador infraconstitucional o dever de editar a lei. O art. 5º, XLII, qualifica o racismo como crime inafiançável e imprescritível, mas a descrição da conduta e a pena vêm de lei — no caso, a Lei 7.716/1989. Sem essa lei, não haveria tipo a aplicar.",
      fundamento: "CF, art. 5º, XLII; Lei 7.716/1989.",
      macete: "A Constituição encomenda e qualifica. Quem descreve a conduta é a lei.",
      erroComum: "Ler \"constitui crime\" no texto constitucional e concluir que ali está o tipo penal.",
      comoBancaPensa: "Aproveita a redação do inciso, que realmente diz \"constitui crime\", para sugerir tipificação direta.",
    },
  },
  {
    ...NOVA_CE96, id: "DP-206", subassunto: "Anterioridade e legalidade",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "O princípio da anterioridade é desdobramento essencial da legalidade e encontra fundamento no mesmo dispositivo constitucional que a consagra.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mesmo dispositivo",
    cognitivo: { motivo: "Fixar a sede normativa comum aos dois princípios.", palavraCritica: "mesmo dispositivo" },
    comentario: {
      resolucao: "CERTO. Legalidade e anterioridade saem do mesmo art. 5º, XXXIX, da CF, repetido no art. 1º do CP: \"não há crime sem lei ANTERIOR que o defina, nem pena sem PRÉVIA cominação legal\". A anterioridade é o recorte temporal da legalidade — garante que ninguém seja punido por conduta que, na data do fato, não era crime.",
      fundamento: "CF, art. 5º, XXXIX; CP, art. 1º.",
      macete: "Uma frase, dois princípios: \"lei\" é legalidade, \"anterior\" é anterioridade.",
      erroComum: "Procurar a anterioridade penal em dispositivo próprio, como ocorre no Direito Tributário.",
      comoBancaPensa: "Aproveita a homonímia com a anterioridade tributária, que tem sede e conteúdo diferentes.",
    },
  },
  {
    ...NOVA_CE96, id: "DP-207", subassunto: "Ofensividade e criminalização do inofensivo",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "O princípio da ofensividade impede que o legislador criminalize condutas incapazes de causar lesão ou ameaça concreta a bem jurídico, razão pela qual são inconstitucionais todos os crimes de perigo abstrato.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "todos os crimes de perigo abstrato",
    cognitivo: { motivo: "Separar a premissa correta da conclusão exagerada.", palavraCritica: "todos" },
    comentario: {
      resolucao: "ERRADO na conclusão. A primeira parte está certa: a ofensividade veda criminalizar o inofensivo. A segunda extrapola — STF e STJ admitem os crimes de perigo abstrato quando a experiência demonstra que a conduta é, por si, perigosa, e porte ilegal de arma e embriaguez ao volante seguem tipificados e aplicados. \"Todos\" é o que derruba o item.",
      fundamento: "Princípio da ofensividade; jurisprudência do STF e do STJ.",
      macete: "Perigo abstrato não morreu. Continua vivo e cobrado em prova.",
      erroComum: "Aceitar a conclusão por coerência lógica com a premissa, sem checar a jurisprudência.",
      comoBancaPensa: "Constrói uma dedução impecável a partir de uma premissa verdadeira, e a jurisprudência a desmente.",
    },
  },
  {
    ...NOVA_CE96, id: "DP-208", subassunto: "Isonomia e distinção entre adultos e adolescentes",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Em razão do princípio da isonomia, a lei não pode estabelecer distinções entre adultos e adolescentes no regime de responsabilização por atos infracionais e crimes.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "não pode estabelecer distinções",
    cognitivo: { motivo: "Aplicar a isonomia material a uma distinção legítima.", palavraCritica: "não pode" },
    comentario: {
      resolucao: "ERRADO. A isonomia é material: manda tratar desigualmente os desiguais, na medida da desigualdade. A distinção entre adultos e adolescentes não a viola — realiza-a. Menores de 18 anos são penalmente inimputáveis (art. 228 da CF) e respondem por ato infracional na forma do ECA, com medidas socioeducativas em vez de pena.",
      fundamento: "CF, art. 5º, caput, e art. 228; ECA.",
      macete: "Distinção com fundamento razoável não fere a igualdade: é o modo de cumpri-la.",
      erroComum: "Ler isonomia como proibição de qualquer tratamento diferenciado.",
      comoBancaPensa: "Usa a igualdade formal para negar uma diferenciação que a própria Constituição impõe.",
    },
  },
  {
    ...NOVA_CE96, id: "DP-209", subassunto: "Humanidade e penas vedadas",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Ainda que se trate de crime hediondo, não se admite a imposição de penas cruéis, vedação que não comporta exceção na Constituição Federal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "penas cruéis",
    cognitivo: { motivo: "Confirmar que a vedação a penas cruéis é absoluta, ao contrário da de morte.", palavraCritica: "não comporta exceção" },
    comentario: {
      resolucao: "CERTO. O art. 5º, XLVII, \"e\", veda as penas cruéis sem qualquer ressalva, e a hediondez do crime não abre exceção. A única exceção do inciso está na alínea \"a\", e alcança apenas a pena de morte em caso de guerra declarada. Convém guardar essa assimetria: uma alínea com exceção, quatro sem.",
      fundamento: "CF, art. 5º, XLVII, \"a\" e \"e\".",
      macete: "Só a pena de morte tem porta dos fundos. Cruéis, perpétuas, forçadas e banimento, nenhuma.",
      erroComum: "Supor que o regime mais severo dos hediondos flexibilizaria o inciso XLVII.",
      comoBancaPensa: "Testa se o candidato sabe qual das alíneas tem exceção — e ela não é esta.",
    },
  },
  {
    ...NOVA_CE96, id: "DP-210", subassunto: "Insignificância e degraus do crime",
    dificuldade: 3, tempoIdealSeg: 65,
    enunciado: "Reconhecida a insignificância, afasta-se a ilicitude da conduta, que permanece típica e culpável.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "ilicitude",
    cognitivo: { motivo: "Cobrar em qual degrau da estrutura do crime a insignificância opera.", palavraCritica: "ilicitude" },
    comentario: {
      resolucao: "ERRADO. A insignificância opera na TIPICIDADE, e na sua dimensão material: a conduta deixa de ser típica, e por isso não se chega sequer a discutir ilicitude ou culpabilidade. Excludentes de ilicitude são outras — legítima defesa, estado de necessidade, estrito cumprimento do dever legal e exercício regular de direito, no art. 23 do CP.",
      fundamento: "Princípio da insignificância; CP, art. 23.",
      macete: "Bagatela derruba no primeiro degrau. Nem chega na ilicitude.",
      erroComum: "Marcar certo por lembrar que a insignificância \"exclui o crime\", sem precisar onde.",
      comoBancaPensa: "Percorre os degraus do conceito analítico e troca aquele em que o instituto atua.",
    },
  },
  {
    ...NOVA_CE96, id: "DP-211", subassunto: "Adequação social — efeito sobre o tipo",
    dificuldade: 3, tempoIdealSeg: 60,
    enunciado: "O princípio da adequação social autoriza o julgador a revogar o tipo penal incriminador sempre que a conduta descrita for amplamente tolerada pela sociedade.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "revogar",
    cognitivo: { motivo: "Negar ao princípio um efeito revogatório que ele não tem.", palavraCritica: "revogar" },
    comentario: {
      resolucao: "ERRADO, e por dois motivos. Primeiro, nenhum princípio revoga lei: revogação é ato do Legislativo, e o juiz que deixasse de aplicar um tipo vigente estaria legislando. Segundo, a adequação social sustenta que a conduta socialmente adequada pode não ser considerada criminosa no caso concreto — o que é afastar a incidência, não apagar o texto. Os tribunais superiores, aliás, recusam sua aplicação à venda de CDs e DVDs piratas.",
      fundamento: "Princípio da adequação social; CP, art. 184; jurisprudência do STF e do STJ.",
      macete: "Princípio afasta a incidência. Só o Congresso apaga o tipo.",
      erroComum: "Confundir não aplicar a lei num caso com retirá-la do ordenamento.",
      comoBancaPensa: "Atribui a um princípio o efeito que só a lei produz, e escolhe um verbo forte para isso.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE96);
