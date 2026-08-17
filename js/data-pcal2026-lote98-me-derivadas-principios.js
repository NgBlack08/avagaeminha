/* =====================================================================
   QUESTLAB — Lote 98: MÚLTIPLA ESCOLHA DERIVADA — PRINCÍPIOS PENAIS

   PRIMEIRO LOTE DA CONVERSÃO DO BANCO PARA MÚLTIPLA ESCOLHA.

   MÉTODO. Cada item reúne quatro afirmativas I–IV que já existiam no
   banco como itens CERTO/ERRADO autônomos, sob um enunciado comum, com
   cinco alternativas combinatórias. É o formato do DP-133 (lote 96), que
   já estava validado aqui. O valor de verdade de cada afirmativa não foi
   redigido agora: veio do gabarito do item de origem, que já passou por
   revisão. `subassunto` registra os IDs de origem, item a item.

   POR QUE NÃO FOI GERADO EM MASSA

   A medição do banco (2.472 itens C/E) dizia que 264 itens ME eram
   possíveis agrupando por `assunto`. Não são — não com qualidade.

   O banco C/E foi escrito EM PARES DELIBERADOS: para o mesmo ponto
   existe um item verdadeiro e um falso. Em Princípios penais são pelo
   menos quatro pares — DP-160/DP-189 (a insignificância afasta a
   tipicidade material ou a formal), DP-169/DP-170 (medida provisória em
   matéria penal), DP-178/DP-179 (mandados de criminalização) e
   DP-185/DP-207 (crimes de perigo abstrato).

   Juntar os dois lados de um par nas afirmativas I–IV arruína o item: o
   aluno vê duas afirmativas que se contradizem, deduz que uma delas é
   falsa e reduz o leque de alternativas SEM SABER O CONTEÚDO. É o mesmo
   vazamento que `scripts/validar.js` mede como "regra cega", e que o
   banco inteiro foi construído para não ter.

   Nenhum campo marca esses pares. Não há `parDe`, e nem `subassunto` nem
   `palavraChave` agrupam: em Princípios penais são 35 itens com 35
   subassuntos e 35 palavrasChave distintas. Só dá para detectar lendo as
   afirmativas e comparando o que cada uma afirma. Por isso a conversão é
   feita à mão, tema a tema, e não por script.

   REGRAS APLICADAS A CADA ITEM DESTE LOTE

     1. As quatro afirmativas tratam de pontos DIFERENTES. Nenhuma revela
        o valor de verdade de outra.
     2. Mistura obrigatória de verdadeiras e falsas — aqui todos os itens
        ficaram em 2V/2F, que é o que mais discrimina.
     3. Nenhuma afirmativa depende de contexto externo: todas se
        sustentam sozinhas, fora do item de origem (nada de "nessa
        situação", "o texto acima", textoApoio).
     4. Gabarito distribuído — C, A, E, B, D, um em cada letra, para não
        criar tendência de posição.
     5. `comentario.resolucao` julga as QUATRO afirmativas, uma a uma,
        como no DP-133. Sem isso o item corrige mas não ensina.

   PROCEDÊNCIA E PESO. O conteúdo é o dos lotes 94–96 (material do
   usuário, alta incidência, probReaparecer 0.9). O FORMATO, porém, não é
   o que a CEBRASPE aplica em Agente e Escrivão da PC-AL, que é
   integralmente C/E. Como no lote 97, o formato derruba a previsão sem
   derrubar o conteúdo: `probReaparecer` fica em 0.80.

   OS ORIGINAIS C/E CONTINUAM NO BANCO. Não foram removidos nem
   alterados. Quem estuda no formato C/E não perde nada, e o mesmo
   conteúdo passa a existir nos dois formatos — que é o pedido. A
   consequência conhecida é que um aluno que já fez os itens de origem
   reconhece as afirmativas; isso é reforço, não vazamento, porque
   continua sendo preciso saber o valor de verdade de cada uma.
   ===================================================================== */

const CARGOS98 = ["Escrivão", "Agente"];
const BASE98 = {
  concurso: "PCAL", cargo: CARGOS98, ano: 2026,
  disciplina: "Direito Penal", assunto: "Princípios penais",
  tipo: "ME", probReaparecer: 0.8,
  origem: "Autoral QuestLab — múltipla escolha derivada de itens C/E do próprio banco (Princípios penais), agrupados por tema",
};

const QUESTOES_PCAL_LOTE98 = [

  {
    ...BASE98,
    id: "DP-212", subassunto: "Derivado de DP-176, DP-169, DP-203 e DP-205 — fontes e reserva legal",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca do princípio da legalidade penal e das fontes do Direito Penal, considere as seguintes afirmações:\n\nI. Decretos regulamentares podem prever penas, desde que baseados na lei.\nII. As medidas provisórias são admitidas em matéria penal apenas se conferirem tratamento mais favorável ao réu.\nIII. Em razão do princípio da legalidade, os costumes não podem ser fonte formal imediata do Direito Penal, de modo que não criam nem agravam condutas puníveis.\nIV. A Constituição Federal de 1988 cria diretamente tipos penais ao estabelecer que a prática do racismo constitui crime inafiançável e imprescritível.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "C", pegadinha: "literalidade", palavraChave: "fonte formal",
    cognitivo: {
      motivo: "Separar o que pode criar crime e pena do que apenas interpreta ou orienta — quatro fontes distintas, quatro tratamentos distintos.",
      palavraCritica: "diretamente",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I incorreta: a reserva legal em matéria penal é absoluta — só lei em sentido estrito cria crime e comina pena, e decreto regulamentar não supre isso nem quando invoca uma lei de apoio. Afirmativa II correta: o art. 62, § 1º, I, \"b\", da CF veda medida provisória sobre direito penal, mas o STF admite a que beneficia o réu, porque a vedação existe para proteger a liberdade, não para prejudicá-la. Afirmativa III correta: o costume interpreta conceito legal indeterminado, mas não é fonte formal imediata — não cria tipo nem agrava pena. Afirmativa IV incorreta, e é onde a questão se decide: a Constituição MANDA criminalizar o racismo (art. 5º, XLII), não o tipifica; quem descreve a conduta e comina a pena é a Lei 7.716/1989. Mandado de criminalização não é tipo penal. Restam II e III.",
      fundamento: "CF, art. 5º, XXXIX e XLII; art. 62, § 1º, I, \"b\"; CP, art. 1º; Lei 7.716/1989.",
      macete: "Crime e pena só nascem de lei em sentido estrito. Constituição manda criminalizar; quem criminaliza é o legislador.",
      erroComum: "Ler \"a CF estabelece que o racismo é crime\" e aceitar como tipificação direta.",
      comoBancaPensa: "Enfileira quatro fontes — decreto, medida provisória, costume e Constituição — e conta que o candidato saiba o alcance de cada uma sem confundir mandado com tipo.",
    },
  },

  {
    ...BASE98,
    id: "DP-213", subassunto: "Derivado de DP-206, DP-164, DP-158 e DP-168 — alcance da legalidade",
    dificuldade: 3, tempoIdealSeg: 125,
    enunciado: "Acerca do alcance do princípio da legalidade penal, considere as seguintes afirmações:\n\nI. O princípio da anterioridade é desdobramento essencial da legalidade e encontra fundamento no mesmo dispositivo constitucional que a consagra.\nII. O princípio da legalidade impede a retroatividade da lei penal, mesmo se mais benéfica.\nIII. Em razão do princípio da legalidade penal, a tipificação de conduta como crime deve ser feita por meio de lei em sentido material, não se exigindo, em regra, a lei em sentido formal.\nIV. O princípio da legalidade limita o uso da analogia em matéria penal.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas a afirmativa I está correta.",
    ],
    gabarito: "A", pegadinha: "termo-absoluto", palavraChave: "mesmo se mais benéfica",
    cognitivo: {
      motivo: "Fixar que a legalidade trava a lei que prejudica e a integração que amplia — não a que beneficia.",
      palavraCritica: "mesmo se mais benéfica",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I correta: \"não há crime sem lei ANTERIOR que o defina\" — anterioridade e legalidade saem do mesmo art. 5º, XXXIX, da CF, repetido no art. 1º do CP. Afirmativa II incorreta: a lei penal não retroage, SALVO para beneficiar o réu (CF, art. 5º, XL; CP, art. 2º, parágrafo único). O \"mesmo se mais benéfica\" inverte justamente a exceção. Afirmativa III incorreta: exige-se lei em sentido FORMAL e material — ato do Legislativo pelo processo próprio. A afirmativa troca os rótulos e dispensa exatamente o que a reserva legal impõe. Afirmativa IV correta: a legalidade veda a analogia in malam partem; a integração que cria ou agrava crime é proibida. Restam I e IV.",
      fundamento: "CF, art. 5º, XXXIX e XL; CP, arts. 1º e 2º, parágrafo único.",
      macete: "A legalidade é via de mão única: barra o que prejudica, libera o que beneficia. Vale para lei nova e para analogia.",
      erroComum: "Aceitar a afirmativa II porque \"a lei penal não retroage\" é verdade pela metade — a metade que falta é a exceção.",
      comoBancaPensa: "Monta o item com duas verdades limpas e duas afirmativas que estão certas até a última oração, onde a exceção é suprimida ou o rótulo é trocado.",
    },
  },

  {
    ...BASE98,
    id: "DP-214", subassunto: "Derivado de DP-160, DP-066, DP-211 e DP-185 — princípios limitadores da tipicidade",
    dificuldade: 3, tempoIdealSeg: 135,
    enunciado: "Acerca dos princípios que limitam a tipicidade penal, considere as seguintes afirmações:\n\nI. Conforme jurisprudência assente do STF, o princípio da insignificância descaracteriza a tipicidade penal em seu caráter material.\nII. Conforme o STF, a aplicação do princípio da insignificância exige apenas a constatação do pequeno valor econômico da coisa subtraída.\nIII. O princípio da adequação social autoriza o julgador a revogar o tipo penal incriminador sempre que a conduta descrita for amplamente tolerada pela sociedade.\nIV. O STF e o STJ admitem os crimes de perigo abstrato, desde que a experiência demonstre que a conduta é, por si, perigosa.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas I e IV estão corretas.",
    ],
    gabarito: "E", pegadinha: "juris-mais-lei", palavraChave: "apenas o pequeno valor",
    cognitivo: {
      motivo: "Distinguir o princípio que exclui a tipicidade material daquele que não revoga tipo nenhum, e fixar os quatro vetores da insignificância.",
      palavraCritica: "apenas",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I correta: no HC 84.412 o STF firmou que a insignificância exclui a tipicidade MATERIAL — o fato continua formalmente adequado ao tipo, mas não há lesão relevante ao bem jurídico. Afirmativa II incorreta: são QUATRO vetores cumulativos — mínima ofensividade da conduta, ausência de periculosidade social, reduzido grau de reprovabilidade e inexpressividade da lesão. O valor econômico é um indício, nunca o requisito único; o \"apenas\" é o erro. Afirmativa III incorreta: a adequação social orienta a interpretação e a política criminal, mas não revoga tipo — só lei revoga lei (LINDB, art. 2º), e o STF e o STJ recusam a tese, como na venda de CD pirata (art. 184 do CP). Afirmativa IV correta: o perigo abstrato é admitido quando a experiência demonstra a periculosidade da conduta em si — é a razão de a embriaguez ao volante e o porte de arma serem punidos sem prova de risco concreto. Restam I e IV.",
      fundamento: "STF, HC 84.412 (vetores da insignificância); jurisprudência do STF e do STJ sobre adequação social e crimes de perigo abstrato; CP, art. 184.",
      macete: "Insignificância mata a tipicidade material, não a formal. Adequação social interpreta, não revoga. Nenhuma das duas depende só do valor da coisa.",
      erroComum: "Reduzir a insignificância ao \"furto de coisa barata\" e esquecer os outros três vetores.",
      comoBancaPensa: "Põe duas teses corretas de tribunal ao lado de duas simplificações que soam razoáveis — uma que reduz a insignificância ao preço, outra que dá ao juiz um poder de revogar lei que ele não tem.",
    },
  },

  {
    ...BASE98,
    id: "DP-215", subassunto: "Derivado de DP-155, DP-190, DP-183 e DP-069 — alteridade, intranscendência e humanidade",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos princípios da alteridade, da intranscendência e da humanidade, considere as seguintes afirmações:\n\nI. Um jovem que pratica a automutilação devido a penitências religiosas será punido por ofender a sua integridade física, consoante os princípios da lesividade e alteridade.\nII. O princípio da intranscendência pressupõe que o Direito Penal só pode incidir nas hipóteses em que há lesão ou risco de lesão a um bem jurídico.\nIII. Os efeitos civis do crime podem atingir os sucessores do condenado, até o limite do valor do patrimônio herdado.\nIV. A vedação a que alguém seja submetido a tortura ou a tratamento desumano ou degradante não admite exceção, ainda que em estado de defesa ou de sítio.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "B", pegadinha: "troca-conceito", palavraChave: "intranscendência",
    cognitivo: {
      motivo: "Separar intranscendência (a pena não passa da pessoa do condenado) de ofensividade (não há crime sem lesão a bem jurídico) — dois princípios que a banca troca.",
      palavraCritica: "pressupõe",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I incorreta: pela alteridade, o Direito Penal não pune a conduta que atinge exclusivamente o próprio agente — a autolesão é atípica, e o motivo religioso é irrelevante para a conclusão. Afirmativa II incorreta: a descrição dada é a do princípio da OFENSIVIDADE. A intranscendência é outra coisa — a pena não passa da pessoa do condenado (CF, art. 5º, XLV). Troca de rótulo. Afirmativa III correta, e é a exceção que confirma a regra anterior: a PENA não passa do condenado, mas a obrigação de reparar o dano e o perdimento de bens alcançam os sucessores, até o limite do patrimônio transferido (CF, art. 5º, XLV, parte final). Afirmativa IV correta: o art. 5º, III, da CF não comporta exceção, e os arts. 136 e 139 não incluem essa garantia entre as suspensíveis no estado de defesa ou de sítio. Restam III e IV.",
      fundamento: "CF, art. 5º, III e XLV; arts. 136 e 139; princípios da alteridade e da ofensividade.",
      macete: "Intranscendência é sobre QUEM sofre a pena. Ofensividade é sobre O QUE justifica a pena. Se a frase fala em bem jurídico, é ofensividade.",
      erroComum: "Aceitar a definição da afirmativa II por estar correta em si — ela está, mas descreve outro princípio.",
      comoBancaPensa: "Dá a definição certa com o nome errado. O enunciado é verdadeiro como frase e falso como atribuição, e quem lê rápido só confere o conteúdo.",
    },
  },

  {
    ...BASE98,
    id: "DP-216", subassunto: "Derivado de DP-154, DP-208, DP-178 e DP-182 — princípios constitucionais penais",
    dificuldade: 2, tempoIdealSeg: 120,
    enunciado: "Acerca dos princípios constitucionais aplicáveis ao Direito Penal, considere as seguintes afirmações:\n\nI. O princípio da individualização da pena se manifesta nas fases legislativa, judicial e administrativa.\nII. Em razão do princípio da isonomia, a lei não pode estabelecer distinções entre adultos e adolescentes no regime de responsabilização por atos infracionais e crimes.\nIII. Os mandados de criminalização impõem ao legislador o dever de criminalizar condutas que atentem contra bens fundamentais.\nIV. O princípio da humanidade veda as penas de morte, de caráter perpétuo e de banimento, mesmo em caso de guerra declarada.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
      "Apenas as afirmativas I e III estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "D", pegadinha: "termo-absoluto", palavraChave: "mesmo em caso de guerra declarada",
    cognitivo: {
      motivo: "Fixar as três fases da individualização e a única exceção constitucional à vedação da pena de morte.",
      palavraCritica: "mesmo em caso de guerra declarada",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I correta: a individualização opera na fase legislativa (o legislador fixa a pena em abstrato), na judicial (o juiz dosa na sentença) e na executória, também chamada administrativa (progressão de regime, benefícios) — CF, art. 5º, XLVI. Afirmativa II incorreta: a isonomia manda tratar desigualmente os desiguais. A própria Constituição distingue, ao fixar em 18 anos a maioridade penal (art. 228) e submeter o adolescente ao regime do ECA. Afirmativa III correta: os mandados de criminalização — expressos, como no racismo, na tortura e nos crimes hediondos (art. 5º, XLII a XLIV), e tácitos — vinculam o legislador, que não é livre para deixar o bem fundamental sem proteção penal. Afirmativa IV incorreta, e é onde a questão se decide: a vedação à pena de morte tem exceção literal no art. 5º, XLVII, \"a\" — \"salvo em caso de guerra declarada\", nos termos do art. 84, XIX. As vedações à prisão perpétua e ao banimento, essas sim, não têm ressalva. Restam I e III.",
      fundamento: "CF, art. 5º, XLVI, XLVII, \"a\", XLII a XLIV, e art. 228; art. 84, XIX; ECA.",
      macete: "Pena de morte é a única da lista que tem exceção: guerra declarada. Perpétua e banimento não têm.",
      erroComum: "Ler a lista do art. 5º, XLVII, como um bloco sem exceções e marcar a IV como correta.",
      comoBancaPensa: "Junta uma vedação real com um \"mesmo em caso de\" que apaga a ressalva constitucional — e apoia a armadilha em isonomia mal entendida como tratamento idêntico.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE98);
