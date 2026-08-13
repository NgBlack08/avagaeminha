/* =====================================================================
   QUESTLAB — Lote 86: DIREITO ADMINISTRATIVO E CONSTITUCIONAL,
   ITENS DE PROVA REAL

   Mesma procedência e método dos lotes 84 e 85.

   A SEGUNDA CORREÇÃO DE GABARITO — DA-088

   O compilado marcava CERTO o item sobre atributos do ato
   administrativo. Está ERRADO, e o erro é de manual: o enunciado define
   corretamente a presunção de veracidade e, em seguida, descreve a
   IMPERATIVIDADE ("os atos se impõem a terceiros, independentemente de
   sua concordância") chamando-a de AUTOEXECUTORIEDADE. Autoexecutoriedade
   é outra coisa — é executar a decisão por meios próprios, sem precisar
   do Judiciário.

   Essa é a troca de conceitos mais explorada em administrativo, e o
   material caiu nela. O item entra com gabarito E, e a resolução separa
   os quatro atributos (PATI) um a um, porque quem erra este erra também
   os próximos três.

   DUAS DUPLICATAS DESCARTADAS. O compilado trazia o item da advertência
   disciplinar e o do poder disciplinar cada um DUAS vezes, com números
   diferentes (um deles palavra por palavra idêntico). Entrou uma vez
   cada. A deduplicação contra o banco não teria pego isso — só a
   comparação do material contra ele mesmo.

   ITENS COM GABARITO CONFERIDO NO CADERNO OFICIAL: DC-119, DC-121.

   Gabarito: 12 CERTO / 8 ERRADO.
   ===================================================================== */

const CARGOS86 = ["Escrivão", "Agente"];
const BASE86_DA = {
  concurso: "PCAL", cargo: CARGOS86, ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  disciplina: "Direito Administrativo",
};
const BASE86_DC = {
  concurso: "PCAL", cargo: CARGOS86, ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  disciplina: "Direito Constitucional",
};

const QUESTOES_PCAL_LOTE86 = [

  /* ================= PODERES ADMINISTRATIVOS ================= */

  {
    ...BASE86_DA,
    id: "DA-079", assunto: "Poderes administrativos",
    subassunto: "Poder de polícia — conceito",
    origem: "CEBRASPE PF 2025 (Agente Administrativo) — gabarito revisado na fonte normativa (CTN, art. 78)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "A atividade do Estado que limita o exercício dos direitos individuais em benefício do interesse público é considerado poder de polícia.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "limita o exercício dos direitos individuais",
    cognitivo: {
      motivo: "Conceito-base, definido em lei — o art. 78 do CTN é a única definição legal de poder de polícia no ordenamento.",
      palavraCritica: "em benefício do interesse público",
    },
    comentario: {
      resolucao: "CERTO. O art. 78 do CTN define poder de polícia como a atividade da administração que, limitando ou disciplinando direito, interesse ou liberdade, regula a prática de ato ou abstenção de fato em razão de interesse público concernente à segurança, à higiene, à ordem, aos costumes, entre outros. O enunciado é a síntese doutrinária dessa definição. Guarde os quatro atributos do poder de polícia, que costumam ser cobrados em seguida: discricionariedade (nem sempre), autoexecutoriedade (nem sempre), coercibilidade e exigibilidade.",
      fundamento: "CTN, art. 78.",
      macete: "Poder de polícia limita a liberdade individual em nome do interesse coletivo.",
      erroComum: "Confundir com poder disciplinar, que se volta para dentro da administração.",
      comoBancaPensa: "Item de abertura, para depois cobrar a distinção entre poder de polícia e poder disciplinar.",
    },
  },

  {
    ...BASE86_DA,
    id: "DA-080", assunto: "Poderes administrativos",
    subassunto: "Excesso de poder x desvio de finalidade",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (Lei 4.717/1965, art. 2º, parágrafo único, 'e')",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "Ato praticado de forma abusiva e com finalidade diversa daquela atribuída pela lei é configurado como excesso de poder.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "finalidade diversa daquela atribuída pela lei",
    cognitivo: {
      motivo: "As duas espécies de abuso de poder atacam elementos diferentes do ato: competência e finalidade.",
      palavraCritica: "excesso de poder",
    },
    comentario: {
      resolucao: "ERRADO. O abuso de poder tem duas espécies, e o enunciado descreve uma e nomeia a outra. DESVIO DE PODER (ou desvio de finalidade) é praticar o ato visando a fim diverso do previsto na lei — vício no elemento FINALIDADE. EXCESSO DE PODER é atuar além dos limites da competência atribuída — vício no elemento COMPETÊNCIA. Exemplo do primeiro: remover servidor para puni-lo, usando ato que serve à conveniência do serviço. Exemplo do segundo: autoridade que aplica demissão quando só poderia aplicar suspensão. A Lei da Ação Popular define o desvio de finalidade no art. 2º, parágrafo único, 'e'.",
      fundamento: "Lei 4.717/1965, art. 2º, parágrafo único, 'e'; Lei 4.898/1965 (revogada) e doutrina clássica.",
      macete: "Excesso é de COMPETÊNCIA. Desvio é de FINALIDADE.",
      erroComum: "Tratar 'abuso' como sinônimo de 'excesso', ignorando a segunda espécie.",
      comoBancaPensa: "Descreve corretamente um vício e troca a etiqueta — mesma manobra do abolitio criminis em DP-116.",
    },
  },

  {
    ...BASE86_DA,
    id: "DA-081", assunto: "Poderes administrativos",
    subassunto: "Poder disciplinar x poder de polícia",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito revisado na fonte normativa (doutrina; Lei 8.112/1990, art. 127)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "A punição por ato infracional praticado por servidor público configura exercício do poder de polícia administrativo.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "poder de polícia administrativo",
    cognitivo: {
      motivo: "O critério é a direção da atuação: para dentro (disciplinar) ou para fora (polícia).",
      palavraCritica: "servidor público",
    },
    comentario: {
      resolucao: "ERRADO. Punir servidor por infração funcional é exercício do PODER DISCIPLINAR, que decorre do poder hierárquico e se volta para DENTRO da administração, alcançando servidores e particulares com vínculo especial (um contratado, um concessionário). O poder de polícia se volta para FORA, atingindo particulares em geral, em razão da supremacia geral do Estado — o fiscal que interdita o restaurante, o agente que multa o motorista. A direção da atuação é o critério, e é sempre por ele que a banca monta a pegadinha.",
      fundamento: "Lei 8.112/1990, art. 127; doutrina administrativa clássica.",
      macete: "Para dentro: disciplinar. Para fora: polícia.",
      erroComum: "Usar 'polícia' pelo sentido comum de punição.",
      comoBancaPensa: "Escolhe a palavra 'punição' porque ela evoca polícia no vocabulário leigo.",
    },
  },

  {
    ...BASE86_DA,
    id: "DA-082", assunto: "Atos administrativos",
    subassunto: "Requisito competência — advertência pelo chefe de repartição",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito revisado na fonte normativa (Lei 8.112/1990, art. 141, III)",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "O ato que formalizou a sanção disciplinar de advertência aplicada por um chefe de repartição a um servidor público subordinado cumpre o requisito competência do ato administrativo.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "cumpre o requisito competência",
    cognitivo: {
      motivo: "Aplicar o elemento COMPETÊNCIA a um caso concreto, com a escala de autoridades da Lei 8.112.",
      palavraCritica: "chefe de repartição",
    },
    comentario: {
      resolucao: "CERTO. O art. 141, III, da Lei 8.112/1990 atribui ao CHEFE DA REPARTIÇÃO e às demais autoridades na forma dos regimentos ou regulamentos a aplicação das penalidades de advertência e de suspensão de até 30 dias. Sendo a autoridade legalmente indicada, o elemento COMPETÊNCIA (ou sujeito) está satisfeito. Vale reter a escala completa, que a banca costuma embaralhar: demissão, cassação de aposentadoria e destituição de cargo em comissão cabem ao Presidente da República, aos Presidentes das Casas do Legislativo e dos Tribunais Federais e ao Procurador-Geral da República (inciso I); suspensão superior a 30 dias, às autoridades administrativas de hierarquia imediatamente inferior (inciso II).",
      fundamento: "Lei 8.112/1990, art. 141, I a III.",
      macete: "Advertência e suspensão até 30 dias: chefe da repartição.",
      erroComum: "Supor que toda punição disciplinar exige autoridade máxima.",
      comoBancaPensa: "Traz um dos cinco elementos do ato e um caso simples; a próxima versão troca a penalidade por demissão.",
    },
  },

  {
    ...BASE86_DA,
    id: "DA-083", assunto: "Atos administrativos",
    subassunto: "Autotutela — Súmula 473 do STF",
    origem: "CEBRASPE PC-PE 2024 (Agente) — gabarito revisado na fonte normativa (Súmula 473 do STF; Lei 9.784/1999, art. 53)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "A administração pública pode anular os próprios atos, quando eivados de vícios que os tornam ilegais, ou revogá-los, por motivo de conveniência ou oportunidade.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "anular ... ou revogá-los",
    cognitivo: {
      motivo: "Literalidade da Súmula 473, base da autotutela.",
      palavraCritica: "conveniência ou oportunidade",
    },
    comentario: {
      resolucao: "CERTO. Reprodução da Súmula 473 do STF, também positivada no art. 53 da Lei 9.784/1999. Fixe as diferenças entre os dois institutos, que são o alvo das versões mais difíceis: a ANULAÇÃO atinge ato ILEGAL, produz efeitos EX TUNC (retroativos) e pode ser feita pela administração ou pelo Judiciário; a REVOGAÇÃO atinge ato LEGAL mas inconveniente, produz efeitos EX NUNC (para a frente) e é privativa da administração — o Judiciário só revoga os seus próprios atos administrativos. E há limite temporal para anular: cinco anos, quando o ato for favorável ao destinatário e houver boa-fé (Lei 9.784/1999, art. 54).",
      fundamento: "Súmula 473 do STF; Lei 9.784/1999, arts. 53 e 54.",
      macete: "Anula o ilegal (ex tunc). Revoga o inconveniente (ex nunc).",
      erroComum: "Atribuir ao Judiciário o poder de revogar atos do Executivo.",
      comoBancaPensa: "Súmula literal; a variação vem na troca dos efeitos temporais ou de quem pode revogar.",
      jurisprudencia: "Súmula 473 do STF, com a ressalva final: 'respeitados os direitos adquiridos, e ressalvada, em todos os casos, a apreciação judicial'.",
    },
  },

  {
    ...BASE86_DA,
    id: "DA-084", assunto: "Administração pública",
    subassunto: "Sentido subjetivo, formal ou orgânico",
    origem: "CEBRASPE PC-PE 2024 (Agente) — gabarito revisado na fonte normativa (doutrina)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "Em sentido subjetivo, formal ou orgânico, a expressão administração pública designa os entes que exercem a atividade administrativa, tais como pessoas jurídicas, órgãos e agentes públicos.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "os entes que exercem a atividade administrativa",
    cognitivo: {
      motivo: "Par de sentidos que a banca inverte com frequência — subjetivo é QUEM, objetivo é O QUE.",
      palavraCritica: "subjetivo, formal ou orgânico",
    },
    comentario: {
      resolucao: "CERTO. No sentido SUBJETIVO (também dito formal ou orgânico), administração pública é o conjunto de QUEM exerce a função administrativa: pessoas jurídicas, órgãos e agentes públicos. No sentido OBJETIVO (material ou funcional), é O QUE se faz — a própria atividade: fomento, polícia administrativa, serviço público e intervenção. A convenção gráfica ajuda a memorizar: iniciais maiúsculas para o sentido subjetivo (Administração Pública, os sujeitos), minúsculas para o objetivo (administração pública, a atividade).",
      fundamento: "Doutrina administrativa clássica (Di Pietro, Bandeira de Mello).",
      macete: "Subjetivo = sujeitos = QUEM. Objetivo = atividade = O QUE.",
      erroComum: "Trocar os dois sentidos, que têm três sinônimos cada.",
      comoBancaPensa: "Oferece os três sinônimos juntos, para que o erro de um contamine a leitura inteira.",
    },
  },

  {
    ...BASE86_DA,
    id: "DA-085", assunto: "Contratos administrativos",
    subassunto: "Cláusulas exorbitantes e supremacia do interesse público",
    origem: "CEBRASPE PC-PE 2024 (Agente) — gabarito revisado na fonte normativa (Lei 14.133/2021, art. 104)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "É corolário do princípio da supremacia do interesse público a previsão, em lei, de cláusulas exorbitantes aplicáveis aos contratos administrativos.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "corolário do princípio da supremacia do interesse público",
    cognitivo: {
      motivo: "Ligar um princípio a um instituto concreto — o tipo de item que exige entender, não decorar.",
      palavraCritica: "corolário",
    },
    comentario: {
      resolucao: "CERTO. As cláusulas exorbitantes são prerrogativas que colocam a administração em posição jurídica superior à do particular contratado, e existem porque o contrato serve a um interesse coletivo que se sobrepõe ao interesse privado — daí serem corolário da supremacia do interesse público. O art. 104 da Lei 14.133/2021 as enumera: modificar unilateralmente o contrato para melhor adequação às finalidades de interesse público; extingui-lo unilateralmente; fiscalizar sua execução; aplicar sanções; e ocupar provisoriamente bens e pessoal nos casos de serviço essencial. Note que 'exorbitante' aqui não significa abusivo: são prerrogativas legais, e a modificação unilateral tem limites quantitativos e preserva o equilíbrio econômico-financeiro.",
      fundamento: "Lei 14.133/2021, art. 104.",
      macete: "Exorbita o direito comum porque o interesse em jogo é de todos.",
      erroComum: "Ler 'exorbitante' como arbitrário e responder ERRADO.",
      comoBancaPensa: "Cobra a ponte entre princípio e regra, e não a lista de prerrogativas.",
    },
  },

  {
    ...BASE86_DA,
    id: "DA-086", assunto: "Agentes públicos",
    subassunto: "Nomeação em caráter efetivo x em comissão",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito revisado na fonte normativa (CF, art. 37, II e V)",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "A nomeação poderá se dar tanto em caráter efetivo quanto em comissão, dependendo, ambos os casos, de prévia habilitação em concurso público de provas ou provas e títulos.",
    gabarito: "E",
    pegadinha: "generalizacao",
    palavraChave: "dependendo, ambos os casos, de prévia habilitação em concurso",
    cognitivo: {
      motivo: "O cargo em comissão é a exceção constitucional expressa à exigência de concurso.",
      palavraCritica: "ambos os casos",
    },
    comentario: {
      resolucao: "ERRADO. A exigência de aprovação prévia em concurso público de provas ou de provas e títulos vale para a investidura em cargo ou emprego público (CF, art. 37, II), mas o próprio inciso RESSALVA as nomeações para cargo em comissão declarado em lei de livre nomeação e exoneração. Os cargos em comissão destinam-se apenas às atribuições de direção, chefia e assessoramento (art. 37, V), e a lei deve reservar percentual mínimo deles a servidores de carreira. A primeira metade do enunciado é correta; a generalização final é que o derruba.",
      fundamento: "CF, art. 37, II e V.",
      macete: "Efetivo exige concurso. Comissão é de livre nomeação e exoneração.",
      erroComum: "Universalizar a regra do concurso sem lembrar da ressalva do próprio inciso II.",
      comoBancaPensa: "Usa 'ambos os casos' para estender a regra à exceção.",
    },
  },

  {
    ...BASE86_DA,
    id: "DA-087", assunto: "Responsabilidade civil do Estado",
    subassunto: "Tese da dupla garantia — Tema 940 do STF",
    origem: "CEBRASPE PF 2025 (Escrivão) — gabarito revisado na fonte normativa (CF, art. 37, § 6º; Tema 940 do STF)",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "A pessoa que sofrer algum dano por ato praticado por um servidor público no exercício da função poderá ajuizar ação de indenização somente contra o Estado.",
    gabarito: "C",
    pegadinha: "termo-absoluto",
    palavraChave: "somente contra o Estado",
    cognitivo: {
      motivo: "Item em que o termo absoluto ('somente') está CORRETO — bom antídoto contra o automatismo de marcar E sempre que aparece um absoluto.",
      palavraCritica: "somente",
    },
    comentario: {
      resolucao: "CERTO. É a tese da DUPLA GARANTIA, fixada pelo STF no Tema 940: a vítima deve acionar o Estado ou a pessoa jurídica de direito privado prestadora de serviço público, sendo o agente causador parte ilegítima para figurar no polo passivo; ao Estado fica assegurado o direito de regresso contra o agente que atuou com dolo ou culpa. A garantia é dupla porque protege os dois lados — a vítima, que litiga contra devedor solvente e sob responsabilidade objetiva, e o agente, que só responde perante a administração e mediante prova de culpa. Este item é um bom lembrete de que 'somente' não derruba automaticamente uma assertiva: aqui a exclusividade é exatamente o que a tese afirma.",
      fundamento: "CF, art. 37, § 6º; STF, RE 1.027.633 (Tema 940).",
      macete: "A vítima processa o Estado; o Estado processa o agente.",
      erroComum: "Marcar ERRADO por reflexo, ao ver 'somente'.",
      comoBancaPensa: "Coloca um termo absoluto verdadeiro para punir quem responde por padrão de forma, não por conteúdo.",
      jurisprudencia: "STF, Tema 940: a teor do art. 37, § 6º, da CF, a ação por danos causados por agente público deve ser ajuizada contra o Estado ou a pessoa jurídica de direito privado prestadora de serviço público.",
    },
  },

  {
    ...BASE86_DA,
    id: "DA-088", assunto: "Atos administrativos",
    subassunto: "Atributos — imperatividade x autoexecutoriedade",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito CORRIGIDO na fonte doutrinária (atributos do ato administrativo)",
    dificuldade: 3, tempoIdealSeg: 110,
    enunciado: "A presunção de veracidade dos atos administrativos refere-se aos fatos, ou seja, presumem-se verdadeiros os fatos alegados pela administração pública, ao passo que a autoexecutoriedade constitui atributo pelo qual os atos administrativos se impõem a terceiros, independentemente de sua concordância.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "a autoexecutoriedade constitui atributo pelo qual os atos ... se impõem a terceiros",
    cognitivo: {
      motivo: "Metade verdadeira e metade com o nome trocado — o item define imperatividade e a chama de autoexecutoriedade.",
      palavraCritica: "independentemente de sua concordância",
    },
    comentario: {
      resolucao: "ERRADO. A primeira metade está impecável: a presunção de veracidade recai sobre os FATOS alegados pela administração (a presunção de legitimidade recai sobre a conformidade com a lei). O erro está na segunda: impor-se a terceiros independentemente da concordância deles é IMPERATIVIDADE, não autoexecutoriedade. AUTOEXECUTORIEDADE é a prerrogativa de EXECUTAR a decisão por meios próprios, sem prévia autorização judicial — e ela nem sequer está presente em todos os atos, dependendo de previsão legal ou de situação de urgência. Guarde os quatro pelo mnemônico PATI: Presunção de legitimidade e veracidade, Autoexecutoriedade, Tipicidade, Imperatividade. Exemplo que separa os dois: a multa é imperativa (obriga o particular) mas não é autoexecutória na cobrança — para receber, a administração precisa de execução fiscal; já a demolição de prédio em risco iminente é autoexecutória.",
      fundamento: "Doutrina administrativa clássica — atributos do ato administrativo.",
      macete: "Imperatividade OBRIGA. Autoexecutoriedade EXECUTA sem juiz.",
      erroComum: "Tratar os dois atributos como sinônimos, por ambos expressarem 'poder' da administração.",
      comoBancaPensa: "Abre com uma definição correta para comprar a confiança do candidato e troca o rótulo na segunda oração. É a troca de conceitos mais rentável de administrativo.",
    },
  },

  {
    ...BASE86_DA,
    id: "DA-089", assunto: "Administração indireta",
    subassunto: "Empresas públicas e sociedades de economia mista",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito revisado na fonte normativa (Lei 13.303/2016, arts. 3º e 4º)",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "As sociedades de economia mista e as empresas públicas desempenham atividade de natureza econômica e se distinguem pela forma de organização e pela composição do capital.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "forma de organização e pela composição do capital",
    cognitivo: {
      motivo: "Fixar os dois critérios que separam as duas figuras, que são idênticas em quase todo o resto.",
      palavraCritica: "natureza econômica",
    },
    comentario: {
      resolucao: "CERTO. As duas são pessoas jurídicas de direito privado integrantes da administração indireta, criadas mediante autorização legal para explorar atividade econômica ou prestar serviço público. Distinguem-se em dois pontos, exatamente os apontados: COMPOSIÇÃO DO CAPITAL — a empresa pública tem capital inteiramente público; a sociedade de economia mista admite capital privado, desde que a maioria das ações com direito a voto pertença ao ente federativo; e FORMA DE ORGANIZAÇÃO — a empresa pública pode adotar qualquer forma societária admitida em direito; a sociedade de economia mista é necessariamente sociedade anônima. Acrescente-se um terceiro critério, muito cobrado, que o item não menciona: o foro — as empresas públicas federais são julgadas na Justiça Federal (CF, art. 109, I), as sociedades de economia mista, na Justiça Estadual (Súmula 556 do STF).",
      fundamento: "Lei 13.303/2016, arts. 3º e 4º; CF, art. 173.",
      macete: "EP: capital 100% público, qualquer forma. SEM: capital misto, sempre S.A.",
      erroComum: "Inverter os critérios ou esquecer que a SEM é obrigatoriamente sociedade anônima.",
      comoBancaPensa: "Enuncia os dois critérios corretos; a versão seguinte troca um deles de lugar.",
    },
  },

  {
    ...BASE86_DA,
    id: "DA-090", assunto: "Administração indireta",
    subassunto: "Princípio da especialidade",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CF, art. 37, XIX e XX)",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "A vedação de constituição de empresa pública com finalidade genérica está em consonância com o princípio da especialidade.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "princípio da especialidade",
    cognitivo: {
      motivo: "Ligar a exigência de finalidade determinada à lógica da descentralização por serviços.",
      palavraCritica: "finalidade genérica",
    },
    comentario: {
      resolucao: "CERTO. O princípio da ESPECIALIDADE rege a administração indireta: as entidades descentralizadas são criadas por lei, ou têm sua criação autorizada por lei, para desempenhar finalidade ESPECÍFICA e determinada, e não podem se desviar dela. Uma empresa pública com objeto genérico frustraria o controle do Legislativo sobre a descentralização — a lei autorizadora perderia o sentido se a entidade pudesse atuar em qualquer campo. Daí decorre também a necessidade de nova lei para alterar a finalidade e a exigência de autorização legislativa específica para criar subsidiárias (CF, art. 37, XX).",
      fundamento: "CF, art. 37, XIX e XX; princípio da especialidade.",
      macete: "Entidade descentralizada nasce com endereço fixo: a finalidade da lei que a autorizou.",
      erroComum: "Confundir especialidade com especialização técnica do quadro de pessoal.",
      comoBancaPensa: "Enuncia uma vedação e pede o princípio que a fundamenta.",
    },
  },

  /* ================= DIREITO CONSTITUCIONAL ================= */

  {
    ...BASE86_DC,
    id: "DC-116", assunto: "Direitos e garantias fundamentais",
    subassunto: "Inviolabilidade do domicílio — Tema 280 do STF",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CF, art. 5º, XI; Tema 280 do STF)",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "A entrada forçada em domicílio sem mandado judicial só é lícita, mesmo em período noturno, quando, por fundadas razões, justificadas posteriormente, houver indicação de que dentro da residência ocorre situação de flagrante delito.",
    gabarito: "C",
    pegadinha: "juris-mais-lei",
    palavraChave: "fundadas razões, justificadas posteriormente",
    cognitivo: {
      motivo: "Tese literal do STF, que agrega ao texto constitucional a exigência de justificação posterior.",
      palavraCritica: "justificadas posteriormente",
    },
    comentario: {
      resolucao: "CERTO. É a tese do Tema 280 do STF, praticamente palavra por palavra. A Constituição já autoriza a entrada em caso de flagrante delito, desastre ou socorro, a qualquer hora (art. 5º, XI); o que o STF acrescentou foi o controle: as fundadas razões precisam ser demonstradas A POSTERIORI, e a ausência dessa justificação torna a prova ilícita e responsabiliza civil, penal e administrativamente o agente. Na prática policial, é o que exige o registro cuidadoso dos indícios que motivaram a entrada — denúncia recebida, comportamento observado, odor característico. Note ainda o alcance: o STF firmou que o flagrante de crime PERMANENTE, como o tráfico com droga guardada em casa, autoriza a entrada, mas não dispensa as fundadas razões prévias.",
      fundamento: "CF, art. 5º, XI; STF, RE 603.616 (Tema 280).",
      macete: "Entrou sem mandado? Vai precisar explicar depois, com razões que já existiam antes.",
      erroComum: "Achar que o flagrante, por si, dispensa qualquer justificação.",
      comoBancaPensa: "Transcreve a tese e conta com o candidato que só conhece o texto do inciso XI.",
      jurisprudencia: "STF, Tema 280 (RE 603.616): a entrada forçada em domicílio sem mandado judicial só é lícita, mesmo em período noturno, quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem que dentro da casa ocorre situação de flagrante delito.",
    },
  },

  {
    ...BASE86_DC,
    id: "DC-117", assunto: "Direitos e garantias fundamentais",
    subassunto: "Conceito de casa — quarto de hotel ocupado",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito conferido no caderno oficial",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "A garantia constitucional da inviolabilidade domiciliar estende-se ao quarto de hotel ocupado, de modo que o hóspede pode alegar violação de domicílio contra a entrada policial irregular nesse local.",
    gabarito: "C",
    pegadinha: "restricao-indevida",
    palavraChave: "estende-se ao quarto de hotel ocupado",
    cognitivo: {
      motivo: "O conceito constitucional de casa é mais largo que o de residência — abrange qualquer compartimento habitado.",
      palavraCritica: "ocupado",
    },
    comentario: {
      resolucao: "CERTO. Para efeito do art. 5º, XI, da Constituição, 'casa' é qualquer compartimento habitado, aposento ocupado de habitação coletiva ou compartimento não aberto ao público onde alguém exerce profissão ou atividade — definição que o art. 150, § 4º, do Código Penal formula e que o STF adota. O quarto de hotel OCUPADO é aposento de habitação coletiva e está protegido; escritórios, consultórios e trailers habitados também. O adjetivo 'ocupado' é decisivo: quarto vago não goza da proteção, porque não há vida privada a resguardar ali. Fora da proteção ficam também as áreas comuns do hotel, como o saguão e os corredores.",
      fundamento: "CF, art. 5º, XI; CP, art. 150, § 4º.",
      macete: "Casa é onde alguém vive ou trabalha reservadamente — não precisa ser residência.",
      erroComum: "Limitar a garantia à residência própria e permanente.",
      comoBancaPensa: "Escolhe o local que menos parece 'casa' no uso comum da palavra.",
    },
  },

  {
    ...BASE86_DC,
    id: "DC-118", assunto: "Direitos e garantias fundamentais",
    subassunto: "Tratados de direitos humanos — status normativo",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito revisado na fonte normativa (CF, art. 5º, §§ 2º e 3º)",
    dificuldade: 3, tempoIdealSeg: 100,
    enunciado: "Para que seja reconhecida como um direito ou uma garantia fundamental pelo ordenamento jurídico brasileiro, a norma internacional deverá ser aprovada, em cada casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "deverá ser aprovada ... por três quintos dos votos",
    cognitivo: {
      motivo: "O rito qualificado do § 3º dá STATUS DE EMENDA, não é condição para que o tratado valha como direito fundamental.",
      palavraCritica: "Para que seja reconhecida",
    },
    comentario: {
      resolucao: "ERRADO. O rito do art. 5º, § 3º (dois turnos em cada Casa, três quintos dos votos) não é condição de RECONHECIMENTO do direito, e sim de atribuição de status de EMENDA CONSTITUCIONAL ao tratado. O § 2º do mesmo artigo já determina que os direitos expressos na Constituição não excluem outros decorrentes dos tratados internacionais em que o Brasil seja parte. Assim, tratados de direitos humanos aprovados pelo rito ordinário ingressam com status SUPRALEGAL — acima das leis, abaixo da Constituição, conforme o STF assentou no RE 466.343 —, e nem por isso deixam de veicular direitos fundamentais. O exemplo clássico é o Pacto de San José da Costa Rica, que tornou inaplicável a prisão civil do depositário infiel sem ter sido aprovado pelo rito do § 3º.",
      fundamento: "CF, art. 5º, §§ 2º e 3º; STF, RE 466.343.",
      macete: "O § 3º dá status de emenda. O § 2º já garante a fundamentalidade.",
      erroComum: "Tratar o rito qualificado como requisito de existência do direito.",
      comoBancaPensa: "Descreve corretamente um procedimento e inventa para ele uma finalidade que não é a sua.",
      jurisprudencia: "STF, RE 466.343: tratados de direitos humanos não aprovados pelo rito do art. 5º, § 3º, têm status supralegal.",
    },
  },

  {
    ...BASE86_DC,
    id: "DC-119", assunto: "Direitos e garantias fundamentais",
    subassunto: "Comunicação da prisão — art. 5º, LXII e LXIII",
    origem: "CEBRASPE PC-DF 2021 (Agente) — gabarito conferido no caderno oficial",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "Uma pessoa presa e encaminhada a uma unidade policial terá o direito de comunicar sua prisão a um membro da sua família ou, desde que explique a sua escolha, a outra pessoa que não seja seu familiar.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "desde que explique a sua escolha",
    cognitivo: {
      motivo: "Condicionante inventada sobre uma garantia que a Constituição formula sem qualquer exigência.",
      palavraCritica: "desde que explique",
    },
    comentario: {
      resolucao: "ERRADO. A Constituição não exige justificativa alguma. O art. 5º, LXII, determina que a prisão de qualquer pessoa e o local onde se encontre sejam comunicados imediatamente ao juiz competente E À FAMÍLIA DO PRESO OU À PESSOA POR ELE INDICADA; e o LXIII assegura ao preso a assistência da família e de advogado. A indicação é livre — pode recair sobre amigo, vizinho, empregador, quem o preso quiser —, e condicioná-la a explicações esvaziaria a garantia justamente para quem mais precisa dela, o preso sem vínculos familiares próximos. Mesma família de pegadinha do LE-301: enxertar um 'desde que' onde a norma nada condiciona.",
      fundamento: "CF, art. 5º, LXII e LXIII.",
      macete: "A pessoa indicada é escolha livre do preso, sem prestação de contas.",
      erroComum: "Aceitar a condicionante por soar razoável do ponto de vista administrativo.",
      comoBancaPensa: "Insere requisito plausível em garantia incondicionada.",
    },
  },

  {
    ...BASE86_DC,
    id: "DC-120", assunto: "Direitos e garantias fundamentais",
    subassunto: "Titularidade por estrangeiro não residente",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito conferido no caderno oficial",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "Por não ser residente no Brasil, o estrangeiro em trânsito não poderá suscitar a nulidade de julgamento por ofensa ao devido processo legal, direito fundamental previsto no art. 5º da Constituição Federal de 1988.",
    gabarito: "E",
    pegadinha: "restricao-indevida",
    palavraChave: "Por não ser residente no Brasil",
    cognitivo: {
      motivo: "A expressão 'residentes no País' do caput do art. 5º é lida de forma ampliativa pelo STF.",
      palavraCritica: "em trânsito",
    },
    comentario: {
      resolucao: "ERRADO. Embora o caput do art. 5º mencione 'brasileiros e estrangeiros residentes no País', o STF consolidou a leitura ampliativa: os direitos e garantias fundamentais alcançam TODA pessoa sob jurisdição brasileira, inclusive o estrangeiro não residente ou em trânsito, e ainda a pessoa jurídica naquilo que lhe for compatível. Seria contraditório assegurar habeas corpus e devido processo legal a uns e negá-los a outros dentro do mesmo território — a dignidade da pessoa humana, fundamento da República, não se condiciona a domicílio. Assim, o estrangeiro em trânsito pode suscitar nulidade por ofensa ao devido processo legal como qualquer outro.",
      fundamento: "CF, art. 5º, caput e LIV; jurisprudência consolidada do STF.",
      macete: "Quem está sob jurisdição brasileira tem os direitos do art. 5º.",
      erroComum: "Ler 'residentes no País' literalmente, como cláusula de exclusão.",
      comoBancaPensa: "Aproveita a literalidade do caput, que de fato sugere a restrição, para induzir o erro.",
    },
  },

  {
    ...BASE86_DC,
    id: "DC-121", assunto: "Direitos e garantias fundamentais",
    subassunto: "Sigilo das comunicações — finalidade da quebra",
    origem: "CEBRASPE PF 2025 (Escrivão) — gabarito revisado na fonte normativa (CF, art. 5º, XII; Lei 9.296/1996)",
    dificuldade: 3, tempoIdealSeg: 90,
    enunciado: "O sigilo da correspondência e das comunicações telefônicas pode ser afastado por determinação judicial, quando isso for necessário à apuração de infrações penais ou administrativas, conforme dispuser a lei.",
    gabarito: "E",
    pegadinha: "generalizacao",
    palavraChave: "infrações penais ou administrativas",
    cognitivo: {
      motivo: "O inciso XII restringe a quebra a duas finalidades penais; o enunciado acrescenta uma terceira, administrativa.",
      palavraCritica: "ou administrativas",
    },
    comentario: {
      resolucao: "ERRADO por dois motivos. Primeiro e principal: o art. 5º, XII, admite a quebra por ordem judicial, nas hipóteses e na forma da lei, EXCLUSIVAMENTE PARA FINS DE INVESTIGAÇÃO CRIMINAL OU INSTRUÇÃO PROCESSUAL PENAL — apuração de infração administrativa não autoriza interceptação. Segundo, a ressalva final do inciso alcança apenas as comunicações TELEFÔNICAS; o sigilo da correspondência e das comunicações telegráficas é formulado sem essa exceção, embora se admita mitigação em situações excepcionais. A Lei 9.296/1996 reforça o ponto ao vedar a interceptação quando o fato investigado constituir infração punida, no máximo, com detenção.",
      fundamento: "CF, art. 5º, XII; Lei 9.296/1996, art. 2º, III.",
      macete: "Interceptação só serve ao processo penal. PAD não quebra sigilo telefônico.",
      erroComum: "Estender a quebra a processos disciplinares por analogia com a investigação criminal.",
      comoBancaPensa: "Acrescenta uma finalidade a mais numa lista constitucional fechada.",
    },
  },

  {
    ...BASE86_DC,
    id: "DC-122", assunto: "Teoria da Constituição",
    subassunto: "Poder constituinte originário — permanência",
    origem: "CEBRASPE PC-PE 2024 (Agente) — gabarito revisado na fonte normativa (doutrina do poder constituinte)",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "O poder constituinte originário é caracterizado pela momentaneidade, já que se exaure após estabelecida a Constituição de um país.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "se exaure após estabelecida a Constituição",
    cognitivo: {
      motivo: "Permanência é característica clássica do poder constituinte originário; confundi-la com esgotamento é erro de base.",
      palavraCritica: "momentaneidade",
    },
    comentario: {
      resolucao: "ERRADO. O poder constituinte originário é INICIAL, AUTÔNOMO, ILIMITADO JURIDICAMENTE, INCONDICIONADO e PERMANENTE. A permanência significa que ele não se esgota com a promulgação da Constituição: permanece latente na titularidade do povo e pode se manifestar novamente a qualquer tempo, rompendo com a ordem anterior. O que se encerra é o EXERCÍCIO daquela manifestação concreta, não o poder em si — e é justamente por isso que uma nova Constituição pode surgir sem autorização da anterior. Não confundir com o poder constituinte DERIVADO, que é limitado, condicionado e subordinado, atuando dentro das regras que a Constituição fixou.",
      fundamento: "Doutrina do poder constituinte (Sieyès; Canotilho).",
      macete: "Originário não morre: dorme. Quem tem limites é o derivado.",
      erroComum: "Confundir o fim do trabalho da Assembleia Constituinte com o fim do poder.",
      comoBancaPensa: "Inventa uma característica ('momentaneidade') que soa técnica e é o oposto da correta.",
    },
  },

  {
    ...BASE86_DC,
    id: "DC-123", assunto: "Teoria da Constituição",
    subassunto: "Forma de governo x sistema de governo",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito revisado na fonte normativa (teoria geral do Estado)",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "A forma de governo diz respeito à relação entre os Poderes Executivo e Legislativo, ao passo que o sistema de governo refere-se à origem e à titularidade do poder político.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "forma de governo ... relação entre os Poderes",
    cognitivo: {
      motivo: "Inversão pura de dois conceitos-base, ambos corretamente descritos, mas com os nomes trocados.",
      palavraCritica: "ao passo que",
    },
    comentario: {
      resolucao: "ERRADO — os conceitos estão invertidos. FORMA DE GOVERNO trata da origem e da titularidade do poder político: república (poder eletivo, temporário, com responsabilidade do governante) ou monarquia (poder hereditário, vitalício, irresponsável). SISTEMA DE GOVERNO trata do relacionamento entre Executivo e Legislativo: presidencialismo (separação rígida, chefias de Estado e de governo reunidas, mandato fixo) ou parlamentarismo (colaboração, chefias separadas, governo dependente da confiança do parlamento). Complete o quadro com a FORMA DE ESTADO, que trata da distribuição territorial do poder: Estado unitário ou federação. O Brasil é república federativa presidencialista.",
      fundamento: "Teoria geral do Estado; CF, arts. 1º e 2º.",
      macete: "Forma de governo: QUEM governa e como chega lá. Sistema: COMO os Poderes se relacionam.",
      erroComum: "Trocar os dois, ou confundir forma de governo com forma de Estado.",
      comoBancaPensa: "Apresenta duas definições corretas com os rótulos permutados — o item só cai se o candidato souber os dois.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE86);
