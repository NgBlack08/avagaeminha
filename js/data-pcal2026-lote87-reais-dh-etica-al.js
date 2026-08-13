/* =====================================================================
   QUESTLAB — Lote 87: DIREITOS HUMANOS, ÉTICA E LEGISLAÇÃO
   INSTITUCIONAL DE ALAGOAS, ITENS DE PROVA REAL

   Mesma procedência e método dos lotes 84 a 86.

   POR QUE ESTE LOTE IMPORTA MAIS QUE OS OUTROS

   O validador vinha apontando que Direitos Humanos vale ~10 itens na
   prova da PC-AL (8,3% dela) e ocupava só 3,8% do banco — a segunda
   maior defasagem entre peso na prova e cobertura na trilha. Este lote
   acrescenta 13 itens de DH, todos de prova aplicada, e reduz o buraco.

   O BLOCO DAS REGRAS DE MANDELA. Quatro itens da PF 2025 cobram as
   Regras Mínimas das Nações Unidas para o Tratamento de Presos, tema
   que o banco praticamente não tinha e que a PF passou a cobrar com
   frequência. Vale como aviso: DH em prova policial não é só principiologia,
   é regra escrita sobre rotina prisional.

   ÉTICA — UMA OBSERVAÇÃO SOBRE A FONTE. Os itens de ética atribuídos à
   PC-AL 2021 cobram o conteúdo clássico do Decreto federal 1.171/1994,
   que serve de matriz para os códigos estaduais. As resoluções citam o
   decreto quando o dispositivo é dele, e falam em princípio geral
   quando o conteúdo não depende de um texto específico.

   LEGISLAÇÃO INSTITUCIONAL. Seis itens sobre o regime dos servidores e
   a organização da PC-AL. Onde a resolução depende de dispositivo
   estadual, ela indica a lei; onde o fundamento é constitucional
   (acumulação com magistério, autonomia municipal), cita a Constituição,
   que é a fonte que não muda com a legislação local.

   Gabarito: 15 CERTO / 14 ERRADO — o lote mais equilibrado do conjunto.
   ===================================================================== */

const CARGOS87 = ["Escrivão", "Agente"];
const BASE87_DH = {
  concurso: "PCAL", cargo: CARGOS87, ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  disciplina: "Direitos Humanos",
};
/* Ética também consta do edital SESAU-AL: sem o cargo da trilha de
   fisioterapia, o validador acusa questão invisível para ela. */
const BASE87_ET = {
  concurso: "PCAL", cargo: [...CARGOS87, "Especialista em Saúde — Fisioterapia"], ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  disciplina: "Ética no Serviço Público",
};
const BASE87_LI = {
  concurso: "PCAL", cargo: CARGOS87, ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  disciplina: "Legislação Institucional (AL)",
};

const QUESTOES_PCAL_LOTE87 = [

  /* ================= DIREITOS HUMANOS — TEORIA GERAL ================= */

  {
    ...BASE87_DH,
    id: "DH-211", assunto: "Teoria geral dos direitos humanos",
    subassunto: "Características — universalidade x historicidade",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte doutrinária",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "Os direitos humanos são classificados como universais porque mudam ao longo do tempo em diferentes países.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "porque mudam ao longo do tempo",
    cognitivo: {
      motivo: "O enunciado define historicidade e batiza de universalidade — troca de rótulo entre duas características vizinhas.",
      palavraCritica: "universais",
    },
    comentario: {
      resolucao: "ERRADO. UNIVERSALIDADE significa que os direitos humanos pertencem a todos os seres humanos, em qualquer lugar, pela simples condição de pessoa — independem de nacionalidade, raça, credo, gênero ou condição social. O que o enunciado descreve é a HISTORICIDADE: os direitos humanos são construção histórica, surgem e se expandem conforme as lutas de cada época, o que explica a sucessão de dimensões (liberdades, direitos sociais, direitos de solidariedade). As duas características convivem sem contradição — o rol muda com o tempo, a titularidade não. Some-se as demais: inalienabilidade, imprescritibilidade, irrenunciabilidade, indivisibilidade e vedação do retrocesso.",
      fundamento: "Doutrina do Direito Internacional dos Direitos Humanos.",
      macete: "Universalidade é sobre QUEM tem. Historicidade é sobre QUANDO surgiu.",
      erroComum: "Aceitar a justificativa porque a afirmação sobre mudança no tempo é, em si, verdadeira.",
      comoBancaPensa: "Liga um conceito correto a uma justificativa que pertence a outro conceito.",
    },
  },

  {
    ...BASE87_DH,
    id: "DH-212", assunto: "Teoria geral dos direitos humanos",
    subassunto: "Responsabilidade internacional do Estado",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CADH, arts. 61 a 63)",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "Embora os Estados devam desenvolver mecanismos para garantir os direitos humanos, eles não podem ser responsabilizados por eventual violação desses direitos.",
    gabarito: "E",
    pegadinha: "termo-absoluto",
    palavraChave: "não podem ser responsabilizados",
    cognitivo: {
      motivo: "O Estado é o principal destinatário dos deveres de direitos humanos e o réu típico nos sistemas internacionais de proteção.",
      palavraCritica: "não podem",
    },
    comentario: {
      resolucao: "ERRADO. Os Estados são os principais sujeitos passivos das obrigações internacionais de direitos humanos e podem, sim, ser responsabilizados. No sistema interamericano, a Corte Interamericana julga casos contra Estados e os condena a reparar as vítimas — o Brasil já foi condenado em casos como Ximenes Lopes, Gomes Lund (Guerrilha do Araguaia) e Favela Nova Brasília, este último tratando de execuções por policiais no Rio de Janeiro. Também há responsabilização por OMISSÃO, quando o Estado deixa de prevenir, investigar ou punir violações praticadas por particulares. A responsabilidade internacional do Estado não exclui a responsabilidade penal individual do agente.",
      fundamento: "CADH, arts. 61 a 63; Decreto 4.463/2002 (reconhecimento da jurisdição da Corte IDH pelo Brasil).",
      macete: "Estado responde — e o Brasil já foi condenado mais de uma vez.",
      erroComum: "Confundir soberania com imunidade em matéria de direitos humanos.",
      comoBancaPensa: "Abre com uma concessão verdadeira e fecha com negação absoluta.",
    },
  },

  {
    ...BASE87_DH,
    id: "DH-213", assunto: "Sistema nacional de proteção",
    subassunto: "Programa Nacional de Direitos Humanos",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (Decreto 7.037/2009)",
    dificuldade: 2, tempoIdealSeg: 75,
    enunciado: "O Brasil ainda não possui um programa nacional de direitos humanos, com regras estabelecidas, de modo que está obrigado a garantir apenas os direitos expressos na Constituição Federal de 1988.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "ainda não possui um programa nacional",
    cognitivo: {
      motivo: "Duas afirmações falsas: a inexistência do PNDH e a limitação aos direitos expressos na Constituição.",
      palavraCritica: "apenas os direitos expressos",
    },
    comentario: {
      resolucao: "ERRADO nas duas partes. O Brasil tem Programa Nacional de Direitos Humanos desde 1996; vigora hoje o PNDH-3, aprovado pelo Decreto 7.037/2009 e atualizado pelo Decreto 7.177/2010, organizado em seis eixos orientadores. E a obrigação do Estado não se limita aos direitos expressos no texto constitucional: o art. 5º, § 2º, da Constituição determina que os direitos ali enunciados não excluem outros decorrentes do regime, dos princípios adotados e dos TRATADOS INTERNACIONAIS de que o Brasil seja parte. O catálogo é aberto, por escolha do constituinte.",
      fundamento: "Decreto 7.037/2009 (PNDH-3); CF, art. 5º, § 2º.",
      macete: "PNDH-3 existe desde 2009. E o rol do art. 5º é aberto, não taxativo.",
      erroComum: "Desconhecer o PNDH e aceitar a segunda metade, que soa constitucionalmente correta.",
      comoBancaPensa: "Encadeia duas negações; basta uma cair para o item cair, mas as duas caem.",
    },
  },

  {
    ...BASE87_DH,
    id: "DH-214", assunto: "Declaração Universal dos Direitos Humanos",
    subassunto: "Natureza declaratória",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte doutrinária",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "A Declaração Universal dos Direitos Humanos não cria os direitos humanos, apenas os proclama.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "não cria ... apenas os proclama",
    cognitivo: {
      motivo: "Natureza declaratória, e não constitutiva — reflexo da matriz jusnaturalista do documento.",
      palavraCritica: "proclama",
    },
    comentario: {
      resolucao: "CERTO. A DUDH, de 1948, tem natureza DECLARATÓRIA: reconhece direitos tidos como inerentes à condição humana, não os institui. O próprio preâmbulo fala em 'reconhecimento da dignidade inerente a todos os membros da família humana', e o art. 1º afirma que todos NASCEM livres e iguais — vocabulário jusnaturalista, de direitos preexistentes ao Estado. A consequência prática é relevante: como os direitos não vêm da Declaração, sua revogação não os extinguiria. Formalmente, a DUDH é resolução da Assembleia Geral da ONU e não tratado, mas hoje se lhe reconhece força vinculante como costume internacional e norma de jus cogens.",
      fundamento: "DUDH (1948), preâmbulo e art. 1º.",
      macete: "Declara, não constitui. Os direitos já existiam.",
      erroComum: "Tratar a DUDH como fonte criadora dos direitos que enuncia.",
      comoBancaPensa: "Item conceitual curto, que prepara o terreno para versões sobre a força normativa da Declaração.",
    },
  },

  {
    ...BASE87_DH,
    id: "DH-215", assunto: "Declaração Universal dos Direitos Humanos",
    subassunto: "Pioneirismo de alcance global",
    origem: "CEBRASPE PC-DF 2021 (Escrivão) — gabarito revisado na fonte doutrinária",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "A Declaração Universal dos Direitos Humanos, de 1948, foi o primeiro documento normativo de alcance global a respeito desse assunto.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "primeiro documento normativo de alcance global",
    cognitivo: {
      motivo: "Marco histórico do processo de internacionalização dos direitos humanos.",
      palavraCritica: "alcance global",
    },
    comentario: {
      resolucao: "CERTO. A DUDH, adotada em 10 de dezembro de 1948 pela Assembleia Geral da ONU, é o primeiro documento de vocação universal a enunciar sistematicamente um catálogo de direitos humanos, inaugurando o processo de internacionalização da matéria. Antes dela havia normas setoriais ou regionais — o direito humanitário de Genebra, as convenções da OIT, tratados sobre escravidão —, nenhuma com pretensão global e abrangente. É também a DUDH que funda a concepção contemporânea de direitos humanos, marcada pela universalidade e pela indivisibilidade entre direitos civis e políticos, de um lado, e econômicos, sociais e culturais, de outro. Ela integra, com os dois Pactos de 1966, a chamada Carta Internacional dos Direitos Humanos.",
      fundamento: "DUDH (1948); doutrina sobre a internacionalização dos direitos humanos.",
      macete: "1948: primeira lista universal. 1966: os dois Pactos que a tornam exigível.",
      erroComum: "Apontar como primeiro documento a Convenção de Genebra ou a Carta da ONU.",
      comoBancaPensa: "Item histórico de fixação; a variação típica troca a data ou o órgão adotante.",
    },
  },

  {
    ...BASE87_DH,
    id: "DH-216", assunto: "Direitos fundamentais na Constituição",
    subassunto: "Proteção do trabalho do menor — art. 7º, XXXIII",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CF, art. 7º, XXXIII)",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "A fim de garantir a proteção dos direitos humanos, a Constituição Federal de 1988 proíbe o trabalho noturno aos menores de dezoito anos de idade.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "trabalho noturno aos menores de dezoito anos",
    cognitivo: {
      motivo: "Três idades no mesmo inciso — 18, 16 e 14 — e a banca troca uma delas nas versões seguintes.",
      palavraCritica: "dezoito anos",
    },
    comentario: {
      resolucao: "CERTO. O art. 7º, XXXIII, da Constituição proíbe o trabalho NOTURNO, PERIGOSO OU INSALUBRE a menores de 18 anos, e QUALQUER TRABALHO a menores de 16, salvo na condição de aprendiz, a partir dos 14. Guarde as três idades juntas, porque é entre elas que a banca embaralha: 18 para as condições especiais, 16 para o trabalho em geral, 14 para a aprendizagem. A redação atual vem da Emenda Constitucional 20/1998, que elevou de 14 para 16 a idade mínima geral — item que cobre a redação original está desatualizado.",
      fundamento: "CF, art. 7º, XXXIII (redação da EC 20/1998).",
      macete: "18 noturno/perigoso/insalubre — 16 qualquer trabalho — 14 aprendiz.",
      erroComum: "Trocar as idades entre si, especialmente 16 e 14.",
      comoBancaPensa: "Isola uma das três idades; a versão seguinte troca justamente essa.",
    },
  },

  {
    ...BASE87_DH,
    id: "DH-217", assunto: "Convenção Americana sobre Direitos Humanos",
    subassunto: "Duplo grau de jurisdição — art. 8º, 2, 'h'",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito revisado na fonte normativa (CADH, art. 8º, 2, 'h')",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "Qualquer pessoa declarada culpada por um delito terá o direito de recorrer a uma instância superior para rever a sentença condenatória que lhe tenha sido imposta e a pena que lhe tenha sido aplicada.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "direito de recorrer a uma instância superior",
    cognitivo: {
      motivo: "Garantia judicial expressa no Pacto de San José, com status supralegal no Brasil.",
      palavraCritica: "instância superior",
    },
    comentario: {
      resolucao: "CERTO. É o direito ao DUPLO GRAU DE JURISDIÇÃO, previsto no art. 8º, 2, 'h', da Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica), incorporada pelo Decreto 678/1992 e dotada de status supralegal segundo o STF. A garantia integra o rol das garantias judiciais mínimas, ao lado da presunção de inocência, do direito à defesa técnica, ao intérprete e ao tempo adequado de preparo. Uma nota que costuma cair: o STF entende que a garantia não é absoluta no direito interno, admitindo as competências originárias previstas na própria Constituição, em que o julgamento se dá em instância única.",
      fundamento: "CADH, art. 8º, 2, 'h'; Decreto 678/1992.",
      macete: "Condenado tem direito a recorrer — está no Pacto de San José, não só no CPP.",
      erroComum: "Procurar a garantia apenas na Constituição, onde ela é implícita.",
      comoBancaPensa: "Transcreve a alínea; a versão difícil pergunta se a garantia é absoluta.",
    },
  },

  {
    ...BASE87_DH,
    id: "DH-218", assunto: "Convenção Americana sobre Direitos Humanos",
    subassunto: "Vedação ao restabelecimento da pena de morte — art. 4º, 3",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CADH, art. 4º, 3)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "O Estado que abolir a pena de morte não poderá restabelecê-la.",
    gabarito: "C",
    pegadinha: "termo-absoluto",
    palavraChave: "não poderá restabelecê-la",
    cognitivo: {
      motivo: "Outro item em que a formulação absoluta é a correta — a Convenção veda o retrocesso sem ressalva.",
      palavraCritica: "não poderá",
    },
    comentario: {
      resolucao: "CERTO. O art. 4º, 3, da Convenção Americana é literal: não se pode restabelecer a pena de morte nos Estados que a hajam abolido. É aplicação do princípio da VEDAÇÃO DO RETROCESSO, ou efeito cliquet — o avanço em direitos humanos funciona como catraca, que trava o movimento de volta. O mesmo artigo, no item 2, proíbe estender a pena de morte a delitos aos quais ela não se aplique atualmente. No Brasil, a Constituição já veda a pena de morte, salvo em caso de guerra declarada (art. 5º, XLVII, 'a'), e essa vedação é cláusula pétrea.",
      fundamento: "CADH, art. 4º, 2 e 3; CF, art. 5º, XLVII, 'a', e art. 60, § 4º, IV.",
      macete: "Efeito cliquet: em direitos humanos, a catraca não gira para trás.",
      erroComum: "Marcar ERRADO pelo 'não poderá', sem notar que a vedação é mesmo absoluta.",
      comoBancaPensa: "Repete a estratégia de DA-087: termo absoluto verdadeiro, para punir a resposta por reflexo.",
    },
  },

  {
    ...BASE87_DH,
    id: "DH-219", assunto: "Convenção Americana sobre Direitos Humanos",
    subassunto: "Liberdade de consciência e religião — art. 12",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CADH, art. 12, 2 e 3)",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "A sujeição do réu à medida restritiva representa exceção à proibição da limitação de sua liberdade de conservar sua religião.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "representa exceção à proibição",
    cognitivo: {
      motivo: "A Convenção separa CONSERVAR a religião (protegido sem exceção) de MANIFESTÁ-LA (limitável por lei).",
      palavraCritica: "conservar",
    },
    comentario: {
      resolucao: "ERRADO. O art. 12 da Convenção Americana distingue dois planos. O item 2 estabelece que NINGUÉM pode ser objeto de medidas restritivas que possam limitar sua liberdade de CONSERVAR sua religião ou suas crenças, ou de mudar de religião — e não abre exceção alguma, nem para presos. O item 3 permite limitar apenas a LIBERDADE DE MANIFESTAR a religião, e ainda assim só por lei e na medida necessária à segurança, à ordem, à saúde, à moral públicas ou aos direitos e liberdades alheios. Estar preso pode restringir a forma de praticar o culto — horários, objetos, local —, jamais o direito de ter a fé que se tem. O item transforma em exceção o que a Convenção protegeu sem exceção.",
      fundamento: "CADH, art. 12, 2 e 3.",
      macete: "Conservar a fé: sem exceção. Manifestar a fé: limitável por lei.",
      erroComum: "Tratar a restrição de liberdade como restrição automática de todos os direitos.",
      comoBancaPensa: "Aproveita que o candidato lê 'religião' e não repara em qual das duas liberdades o item fala.",
    },
  },

  /* ================= DIREITOS HUMANOS — REGRAS DE MANDELA ================= */

  {
    ...BASE87_DH,
    id: "DH-220", assunto: "Regras de Mandela",
    subassunto: "Registro de admissão — inventário de bens",
    origem: "CEBRASPE PF 2025 (Escrivão) — gabarito revisado na fonte normativa (Regras de Mandela, Regra 7)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "Na admissão de indivíduos em estabelecimentos prisionais, deverá ser adicionado, no sistema de registro do recluso, inventário dos seus bens pessoais.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "inventário dos seus bens pessoais",
    cognitivo: {
      motivo: "Regra escrita e concreta sobre rotina prisional — o tipo de conteúdo de DH que a PF passou a cobrar.",
      palavraCritica: "sistema de registro",
    },
    comentario: {
      resolucao: "CERTO. A Regra 7 das Regras Mínimas das Nações Unidas para o Tratamento de Presos (Regras de Mandela, 2015) lista o que deve constar do sistema de registro no momento da admissão: identidade do preso, motivos e autoridade responsável pela detenção, dia e hora da entrada e da saída, INVENTÁRIO DOS BENS PESSOAIS, nomes dos familiares (incluindo filhos, sua idade, localização e guarda) e informações sobre eventuais ferimentos ou maus-tratos anteriores. O inventário tem dupla função: preservar o patrimônio do recluso e proteger a administração contra alegações de extravio. As Regras de Mandela atualizaram as antigas Regras Mínimas de 1955 e receberam esse nome em homenagem a Nelson Mandela, preso por 27 anos.",
      fundamento: "Regras de Mandela (Resolução 70/175 da AGNU, 2015), Regra 7.",
      macete: "Na entrada, registra tudo — inclusive os bens do preso.",
      erroComum: "Supor que as Regras de Mandela só trazem princípios, sem regras operacionais.",
      comoBancaPensa: "Extrai um inciso de rol procedimental, formato que se repete em várias questões da PF 2025.",
    },
  },

  {
    ...BASE87_DH,
    id: "DH-221", assunto: "Regras de Mandela",
    subassunto: "Separação de categorias de presos",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito revisado na fonte normativa (Regras de Mandela, Regra 11; LEP, art. 84)",
    dificuldade: 3, tempoIdealSeg: 100,
    enunciado: "A separação de categorias de pessoas presas deve orientar-se por critérios de gênero, idade e natureza dos delitos, não havendo regra que determine a separação dos presos em razão da natureza da detenção, isto é, se preventiva ou se oriunda de condenação definitiva.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "não havendo regra que determine a separação",
    cognitivo: {
      motivo: "Nega a existência de uma regra que existe em três fontes distintas — Mandela, Constituição e LEP.",
      palavraCritica: "não havendo regra",
    },
    comentario: {
      resolucao: "ERRADO. A separação entre presos provisórios e condenados é expressa e vem de várias fontes. A Regra 11 das Regras de Mandela determina que pessoas presas SEM CONDENAÇÃO sejam mantidas separadas das condenadas, além de separar homens de mulheres, jovens de adultos e presos por dívidas dos presos por crime. No direito interno, a Constituição assegura ao preso o respeito à integridade e manda separar presos segundo a natureza do delito, a idade e o sexo (art. 5º, XLVIII), e o art. 84 da LEP é direto: o preso PROVISÓRIO ficará separado do condenado por sentença transitada em julgado — com regra especial, no § 1º, para os presos que já foram servidores da administração da justiça criminal. O item acerta os três primeiros critérios e nega o quarto, que é dos mais assentados.",
      fundamento: "Regras de Mandela, Regra 11; CF, art. 5º, XLVIII; LEP, art. 84.",
      macete: "Provisório não fica com condenado — está em Mandela, na Constituição e na LEP.",
      erroComum: "Validar o item pelos critérios corretos do começo, sem checar a negação do fim.",
      comoBancaPensa: "Lista verdades e encerra com uma negação — a mesma estrutura de DH-213.",
    },
  },

  {
    ...BASE87_DH,
    id: "DH-222", assunto: "Regras de Mandela",
    subassunto: "Trabalho prisional não pode ser sanção disciplinar",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito revisado na fonte normativa (Regras de Mandela, Regras 96 a 98)",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "As Regras de Mandela contemplam a possibilidade de se impor ao recluso a realização de trabalho no estabelecimento prisional em cumprimento de qualquer medida disciplinar.",
    gabarito: "E",
    pegadinha: "termo-absoluto",
    palavraChave: "em cumprimento de qualquer medida disciplinar",
    cognitivo: {
      motivo: "O trabalho prisional tem função ressocializadora; usá-lo como castigo é vedado expressamente.",
      palavraCritica: "qualquer medida disciplinar",
    },
    comentario: {
      resolucao: "ERRADO. As Regras de Mandela vedam o trabalho com caráter aflitivo ou punitivo. A Regra 97 é expressa ao dizer que o trabalho prisional não deve ser de natureza penosa e que os presos não devem ser mantidos em escravidão ou servidão; a Regra 96 o define como dever e direito com finalidade de manter ou aumentar a capacidade do preso de ganhar a vida honestamente após a soltura. Na mesma linha, a Regra 43 proíbe sanções disciplinares que constituam tortura ou tratamento cruel, desumano ou degradante. No direito interno, a LEP acompanha: o trabalho do condenado tem finalidade educativa e produtiva (art. 28) e remite pena (art. 126), o que é o oposto de servir de castigo.",
      fundamento: "Regras de Mandela, Regras 43, 96 e 97; LEP, arts. 28 e 126.",
      macete: "Trabalho prisional é reinserção e remição — nunca castigo.",
      erroComum: "Associar trabalho forçado à ideia de disciplina prisional.",
      comoBancaPensa: "Usa 'qualquer' para ampliar ao máximo uma faculdade que sequer existe.",
    },
  },

  {
    ...BASE87_DH,
    id: "DH-223", assunto: "Estatuto dos Refugiados",
    subassunto: "Non-refoulement e suas exceções",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito revisado na fonte normativa (Convenção de 1951, arts. 32 e 33)",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "A Convenção Relativa ao Estatuto dos Refugiados veda aos Estados contratantes, em qualquer circunstância, a expulsão de refugiados.",
    gabarito: "E",
    pegadinha: "termo-absoluto",
    palavraChave: "em qualquer circunstância",
    cognitivo: {
      motivo: "A proteção do refugiado é forte, mas a própria Convenção prevê hipóteses de expulsão e de exceção ao non-refoulement.",
      palavraCritica: "em qualquer circunstância",
    },
    comentario: {
      resolucao: "ERRADO. A Convenção de 1951 protege intensamente o refugiado, mas não de forma absoluta. O art. 32 admite a EXPULSÃO do refugiado que se encontre regularmente no território por motivos de SEGURANÇA NACIONAL OU DE ORDEM PÚBLICA, mediante decisão proferida conforme o processo legal e assegurado o direito de defesa e recurso. E o art. 33, que consagra o princípio do NON-REFOULEMENT — proibição de devolver o refugiado a território onde sua vida ou liberdade sejam ameaçadas —, traz no item 2 a própria exceção: não pode invocá-lo quem represente ameaça à segurança do país ou tenha sido condenado por crime particularmente grave e constitua perigo à comunidade. No Brasil, a Lei 9.474/1997 disciplina a matéria.",
      fundamento: "Convenção de 1951, arts. 32 e 33; Lei 9.474/1997.",
      macete: "Non-refoulement é regra forte, não regra absoluta.",
      erroComum: "Elevar o non-refoulement a proibição sem exceções.",
      comoBancaPensa: "Escolhe um princípio de proteção intensa e o formula em termos absolutos.",
    },
  },

  /* ================= ÉTICA NO SERVIÇO PÚBLICO ================= */

  {
    ...BASE87_ET,
    id: "ET-051", assunto: "Ética e moral",
    subassunto: "Objeto de estudo da ética",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte doutrinária",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "O objeto de estudo da ética é o comportamento moral dos homens em sociedade.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "comportamento moral dos homens em sociedade",
    cognitivo: {
      motivo: "Base do par ética/moral, que sustenta metade dos itens da disciplina.",
      palavraCritica: "objeto de estudo",
    },
    comentario: {
      resolucao: "CERTO. A ética é o ramo da filosofia que tem por objeto a MORAL — ela estuda, descreve e critica o comportamento moral dos homens em sociedade. A moral, por sua vez, é o conjunto concreto de normas, valores e costumes vigentes num grupo e num tempo determinados. A relação é a de ciência e objeto: a moral é o fenômeno, a ética é a reflexão sobre o fenômeno. Daí decorre a diferença de plano — a moral é histórica e variável entre culturas; a ética busca critérios racionais e universais para julgá-la.",
      fundamento: "Doutrina filosófica clássica (Vázquez, Ética).",
      macete: "Moral é o que se faz. Ética é o estudo do que se faz.",
      erroComum: "Inverter os dois, tratando a moral como ciência da ética.",
      comoBancaPensa: "Item de base, que se repete com os termos invertidos em ET-053.",
    },
  },

  {
    ...BASE87_ET,
    id: "ET-052", assunto: "Ética e moral",
    subassunto: "Função crítica da ética",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte doutrinária",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "A ética pode alterar as regras morais enraizadas na sociedade ao discutir princípios e valores morais até então estabelecidos.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "alterar as regras morais enraizadas",
    cognitivo: {
      motivo: "A reflexão ética não é contemplativa: ela retroage sobre a moral e a transforma.",
      palavraCritica: "até então estabelecidos",
    },
    comentario: {
      resolucao: "CERTO. Por ser reflexão crítica sobre a moral, a ética questiona valores consolidados e pode provocar sua alteração — a relação entre as duas não é de mão única. A história oferece os exemplos: a escravidão foi moralmente aceita durante séculos e a crítica ética contribuiu para desfazê-la; o mesmo raciocínio vale para a igualdade entre os sexos e para direitos das minorias. Uma prática pode ser moralmente corrente e eticamente insustentável, e é dessa tensão que nasce a mudança.",
      fundamento: "Doutrina filosófica clássica.",
      macete: "A ética não só descreve a moral: ela a interroga e a muda.",
      erroComum: "Ver a ética como registro passivo dos costumes vigentes.",
      comoBancaPensa: "Cobra a dinâmica entre os dois conceitos, e não apenas suas definições.",
    },
  },

  {
    ...BASE87_ET,
    id: "ET-053", assunto: "Ética e moral",
    subassunto: "Ética não é escolha de valores pessoais",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte doutrinária",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "A ética pode ser entendida como uma escolha embasada em um conjunto de valores pessoais.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "conjunto de valores pessoais",
    cognitivo: {
      motivo: "Par invertido de ET-051: o enunciado descreve moral individual e chama de ética.",
      palavraCritica: "pessoais",
    },
    comentario: {
      resolucao: "ERRADO. Conjunto de valores, hábitos e costumes de um indivíduo ou de um grupo é MORAL, não ética. A ética é a reflexão teórica, de pretensão racional e universal, que avalia criticamente esses valores. Duas marcas separam as duas: a moral é PRÁTICA e particular (varia entre pessoas, grupos e épocas); a ética é TEÓRICA e busca critérios que valham para além do caso concreto. Reduzi-la a escolha pessoal a dissolveria — se cada um tivesse sua ética, não haveria como criticar conduta alguma.",
      fundamento: "Doutrina filosófica clássica.",
      macete: "Valores pessoais = moral. Reflexão universal = ética.",
      erroComum: "Usar 'ética' no sentido coloquial de convicção individual.",
      comoBancaPensa: "Explora o uso corrente da palavra, que não coincide com o uso técnico.",
    },
  },

  {
    ...BASE87_ET,
    id: "ET-054", assunto: "Ética no serviço público",
    subassunto: "Ética não é mitigada pela legalidade",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CF, art. 37, caput; Decreto 1.171/1994)",
    dificuldade: 2, tempoIdealSeg: 75,
    enunciado: "No serviço público a ética é mitigada, já que o servidor deve cumprimento à lei, a qual contempla explicitamente os valores éticos relativos ao assunto de que trata.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "a ética é mitigada",
    cognitivo: {
      motivo: "Legalidade e moralidade são exigências cumulativas, não substitutivas.",
      palavraCritica: "mitigada",
    },
    comentario: {
      resolucao: "ERRADO. No serviço público a exigência ética é REFORÇADA, não mitigada. A moralidade é princípio expresso do art. 37, caput, da Constituição, ao lado da legalidade — ou seja, cumprir a lei não esgota o dever do servidor. O Decreto 1.171/1994 é explícito nesse ponto ao afirmar que o servidor não pode decidir apenas entre o legal e o ilegal, mas também entre o honesto e o desonesto, o oportuno e o inoportuno, o conveniente e o inconveniente. Um ato pode ser formalmente legal e moralmente inválido — e será anulável por vício de moralidade.",
      fundamento: "CF, art. 37, caput; Decreto 1.171/1994, Seção I, item II.",
      macete: "Legal e imoral também é inválido. A lei é o piso, não o teto.",
      erroComum: "Tratar legalidade e moralidade como a mesma exigência.",
      comoBancaPensa: "Oferece um raciocínio de aparência lógica para uma conclusão que inverte o regime constitucional.",
    },
  },

  {
    ...BASE87_ET,
    id: "ET-055", assunto: "Ética no serviço público",
    subassunto: "Decoro na vida pública e privada",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (Decreto 1.171/1994, Seção I, VII)",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "O decoro e a consciência dos princípios morais devem nortear o servidor público tanto no exercício de cargo quanto fora dele.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "tanto no exercício de cargo quanto fora dele",
    cognitivo: {
      motivo: "O alcance do dever ético ultrapassa o horário de expediente — ponto expresso no Código de Ética.",
      palavraCritica: "fora dele",
    },
    comentario: {
      resolucao: "CERTO. O Decreto 1.171/1994 estabelece, na Seção I, que o servidor deve ter consciência de que seu trabalho é regido por princípios éticos que se materializam na adequada prestação dos serviços públicos, e que o exercício do cargo integra sua vida particular — de modo que os fatos e atos verificados na conduta do dia a dia da vida privada poderão acrescer ou diminuir o seu bom conceito na vida funcional. A razão é institucional: o servidor é a imagem da administração perante o cidadão, e a conduta indecorosa fora do expediente atinge a credibilidade do órgão. Daí a previsão de 'incontinência pública e conduta escandalosa' como infração disciplinar na Lei 8.112/1990 (art. 132, V).",
      fundamento: "Decreto 1.171/1994, Seção I, VI e VII; Lei 8.112/1990, art. 132, V.",
      macete: "O crachá sai às 18h; o dever de decoro, não.",
      erroComum: "Limitar o dever ético ao horário e ao local de trabalho.",
      comoBancaPensa: "Cobra o alcance da norma, e não o seu conteúdo.",
    },
  },

  {
    ...BASE87_ET,
    id: "ET-056", assunto: "Ética no serviço público",
    subassunto: "Vedação de vínculo com empreendimento duvidoso",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (Decreto 1.171/1994, XV, 'l')",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "É vedado ao servidor ligar o seu nome a empreendimento de cunho duvidoso.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "empreendimento de cunho duvidoso",
    cognitivo: {
      motivo: "Vedação literal do Código de Ética, com redação bastante característica.",
      palavraCritica: "ligar o seu nome",
    },
    comentario: {
      resolucao: "CERTO. O Decreto 1.171/1994, no inciso XV das vedações, proíbe ao servidor 'ligar o seu nome a empreendimentos de cunho duvidoso'. A finalidade é preservar a credibilidade da administração: o nome do servidor carrega o prestígio do cargo, e associá-lo a atividade de reputação questionável transfere para o órgão a suspeita. Vale reter outras vedações do mesmo rol, que a banca costuma pedir junto: usar o cargo para obter facilidades pessoais, prejudicar deliberadamente a reputação de colegas, retirar documento da repartição sem autorização, e apresentar-se embriagado no serviço ou fora dele habitualmente.",
      fundamento: "Decreto 1.171/1994, XV, 'l'.",
      macete: "O nome do servidor empresta a reputação do cargo — não se aluga a qualquer negócio.",
      erroComum: "Exigir ilicitude comprovada, quando a norma se contenta com o caráter duvidoso.",
      comoBancaPensa: "Transcreve a alínea quase literalmente, contando com quem só estudou os princípios gerais.",
    },
  },

  {
    ...BASE87_ET,
    id: "ET-057", assunto: "Ética no serviço público",
    subassunto: "Serviço gratuito e transitório não afasta o dever ético",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (Decreto 1.171/1994, XXIV)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "A prestação de serviço de natureza excepcional, sem remuneração, a um órgão do Estado afasta a apuração de comprometimento ético.",
    gabarito: "E",
    pegadinha: "restricao-indevida",
    palavraChave: "afasta a apuração de comprometimento ético",
    cognitivo: {
      motivo: "O conceito de servidor para fins éticos é amplíssimo, como o do art. 327 do CP para fins penais.",
      palavraCritica: "sem remuneração",
    },
    comentario: {
      resolucao: "ERRADO. O Decreto 1.171/1994 define como servidor público, para os fins do Código, TODO AQUELE que, por força de lei, contrato ou qualquer ato jurídico, preste serviços de natureza permanente, temporária ou EXCEPCIONAL, ainda que SEM RETRIBUIÇÃO FINANCEIRA, a qualquer órgão do poder estatal. Gratuidade e transitoriedade não isentam ninguém: mesário, jurado, voluntário e conselheiro respondem eticamente enquanto atuam em nome do Estado. Note o paralelo exato com DP-131, em que o art. 327 do CP alcança quem exerce função pública 'transitoriamente ou sem remuneração' — os dois ramos adotam a mesma lógica de abrangência.",
      fundamento: "Decreto 1.171/1994, XXIV; paralelo com o CP, art. 327.",
      macete: "De graça e por um dia também é servidor, na ética e no penal.",
      erroComum: "Vincular o dever ético à existência de vínculo formal e remunerado.",
      comoBancaPensa: "Junta duas circunstâncias atenuantes aparentes (excepcional e gratuito) para sugerir isenção.",
    },
  },

  {
    ...BASE87_ET,
    id: "ET-058", assunto: "Ética no serviço público",
    subassunto: "Critério de escolha entre opções legais",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (Decreto 1.171/1994, Seção I, V)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "O servidor público, quando estiver diante de duas opções legais, deverá escolher a mais condizente com o bom senso.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "a mais condizente com o bom senso",
    cognitivo: {
      motivo: "O critério do Código é o bem comum, não o bom senso — a troca é sutil e o item inteiro depende dela.",
      palavraCritica: "bom senso",
    },
    comentario: {
      resolucao: "ERRADO. O Decreto 1.171/1994 fixa critério objetivo: na dúvida entre duas opções LEGAIS, o servidor deve escolher a MELHOR E MAIS VANTAJOSA PARA O BEM COMUM. O parâmetro é o interesse público, não a intuição do agente — e a diferença é prática, não retórica: bom senso é medida individual, variável de servidor para servidor, ao passo que o bem comum é aferível e sindicável, podendo ser controlado por quem revê o ato. Item que troca 'bem comum' por 'bom senso', 'razoabilidade' ou 'eficiência' está errado pela mesma razão.",
      fundamento: "Decreto 1.171/1994, Seção I, V.",
      macete: "Entre duas legais, escolhe-se a melhor para o BEM COMUM.",
      erroComum: "Aceitar 'bom senso' por ser expressão de sentido positivo e vaga.",
      comoBancaPensa: "Substitui o critério normativo por um sinônimo aproximado, que soa igualmente virtuoso.",
    },
  },

  {
    ...BASE87_ET,
    id: "ET-059", assunto: "Ética no serviço público",
    subassunto: "Moralidade como princípio constitucional",
    origem: "CEBRASPE PF 2025 (Policial) — gabarito revisado na fonte normativa (CF, art. 37, caput)",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "A moralidade é princípio que rege a atuação da administração pública.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "moralidade é princípio",
    cognitivo: {
      motivo: "Princípio expresso do caput do art. 37 — item de base para ancorar os demais da disciplina.",
      palavraCritica: "princípio",
    },
    comentario: {
      resolucao: "CERTO. A moralidade é um dos cinco princípios EXPRESSOS no caput do art. 37 da Constituição, com legalidade, impessoalidade, publicidade e eficiência — o conhecido LIMPE (a eficiência foi acrescentada pela Emenda Constitucional 19/1998). Como princípio autônomo, exige do agente não apenas conformidade com a lei, mas honestidade, lealdade e boa-fé; sua violação enseja anulação do ato e pode configurar improbidade administrativa. Não confundir com a moral comum: a moralidade administrativa é a moral interna da instituição, extraída dos deveres do cargo.",
      fundamento: "CF, art. 37, caput (redação da EC 19/1998).",
      macete: "LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência.",
      erroComum: "Tratar a moralidade como princípio implícito.",
      comoBancaPensa: "Item de base; a versão difícil pergunta quais princípios são expressos e quais implícitos.",
    },
  },

  {
    ...BASE87_ET,
    id: "ET-060", assunto: "Cidadania",
    subassunto: "Voto como direito e dever",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CF, art. 14, § 1º)",
    dificuldade: 2, tempoIdealSeg: 70,
    enunciado: "O exercício da cidadania por meio da eleição de representantes pelo voto é um direito, mas não um dever, do cidadão.",
    gabarito: "E",
    pegadinha: "restricao-indevida",
    palavraChave: "mas não um dever",
    cognitivo: {
      motivo: "No Brasil o voto tem natureza dupla para a maior parte do eleitorado: direito e dever jurídico.",
      palavraCritica: "não um dever",
    },
    comentario: {
      resolucao: "ERRADO. O art. 14, § 1º, da Constituição torna o alistamento eleitoral e o voto OBRIGATÓRIOS para os maiores de 18 anos — logo, o voto é simultaneamente direito e dever jurídico. São FACULTATIVOS apenas para três grupos: os analfabetos, os maiores de 70 anos e os maiores de 16 e menores de 18. O descumprimento acarreta sanções concretas: multa e restrições como a impossibilidade de obter passaporte ou tomar posse em cargo público. Guarde os três grupos do voto facultativo, porque é sobre eles que recai a maior parte das questões.",
      fundamento: "CF, art. 14, § 1º, I e II.",
      macete: "Obrigatório dos 18 aos 70. Facultativo: 16-17, +70 e analfabetos.",
      erroComum: "Aplicar a lógica de outros países, em que o voto é apenas direito.",
      comoBancaPensa: "Enuncia meia verdade — é direito — e nega a outra metade.",
    },
  },

  /* ================= LEGISLAÇÃO INSTITUCIONAL (AL) ================= */

  {
    ...BASE87_LI,
    id: "LI-154", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Requisitos para ingresso no serviço público",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CF, art. 37, I e II)",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "Em razão da sua natureza restritiva, é taxativo o rol de requisitos para ingresso no serviço público, não se admitindo outros critérios específicos em razão da natureza do cargo.",
    gabarito: "E",
    pegadinha: "termo-absoluto",
    palavraChave: "é taxativo o rol de requisitos",
    cognitivo: {
      motivo: "Os requisitos básicos são um piso; a lei pode exigir mais quando a natureza do cargo justificar.",
      palavraCritica: "taxativo",
    },
    comentario: {
      resolucao: "ERRADO. Os requisitos gerais de ingresso funcionam como PISO, não como rol fechado. O art. 37, I, da Constituição admite que a lei estabeleça requisitos adicionais quando a natureza do cargo os justificar, e o STF assentou que exigências como limite de idade, altura mínima ou aptidão física são válidas desde que previstas EM LEI e razoavelmente relacionadas às atribuições — não bastando previsão em edital. Carreiras policiais são o exemplo por excelência: teste de aptidão física, investigação social e exame psicotécnico são requisitos específicos legítimos, sendo o psicotécnico admitido pelo STF apenas se previsto em lei e realizado por critérios objetivos.",
      fundamento: "CF, art. 37, I e II; Súmula Vinculante 44 do STF.",
      macete: "Requisitos básicos são o mínimo. A lei pode somar exigências ao cargo.",
      erroComum: "Confundir a exigência de previsão legal com a proibição de requisitos adicionais.",
      comoBancaPensa: "Usa 'taxativo' e 'restritiva' para dar ares de garantia constitucional a uma vedação inexistente.",
      jurisprudencia: "Súmula Vinculante 44 do STF: só por lei se pode sujeitar a exame psicotécnico a habilitação de candidato a cargo público.",
    },
  },

  {
    ...BASE87_LI,
    id: "LI-155", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Adicionais de insalubridade e periculosidade",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (regime jurídico dos servidores; natureza propter laborem)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "O direito aos adicionais de insalubridade ou periculosidade condiciona-se à continuidade das condições ou riscos que deram causa às suas concessões.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "condiciona-se à continuidade das condições ou riscos",
    cognitivo: {
      motivo: "Verbas propter laborem não incorporam à remuneração — cessa a causa, cessa o pagamento.",
      palavraCritica: "continuidade",
    },
    comentario: {
      resolucao: "CERTO. Insalubridade e periculosidade são vantagens PROPTER LABOREM: existem em função de uma condição concreta de trabalho e só são devidas enquanto essa condição perdurar. Removido o servidor para setor sem exposição, ou eliminado o risco por medida de proteção, o adicional cessa — e não há direito adquirido a mantê-lo, porque o que se adquire é o direito ao regime, não ao valor. Pela mesma razão, essas parcelas em regra não se incorporam aos proventos de aposentadoria. Retenha ainda a vedação clássica: não se acumulam insalubridade e periculosidade; o servidor opta por uma delas.",
      fundamento: "Regime jurídico dos servidores; natureza propter laborem das vantagens.",
      macete: "Acabou o risco, acabou o adicional. Não incorpora.",
      erroComum: "Invocar direito adquirido ou irredutibilidade de vencimentos para manter a verba.",
      comoBancaPensa: "Cobra a natureza jurídica da vantagem, e não seu percentual.",
    },
  },

  {
    ...BASE87_LI,
    id: "LI-156", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Investidura — posse e exercício",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (regime jurídico dos servidores; art. 13 e ss.)",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "Considera-se regularmente investido em cargo público aquele que, mesmo não tendo sido empossado, entre em exercício no prazo legal.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "mesmo não tendo sido empossado",
    cognitivo: {
      motivo: "A cadeia nomeação → posse → exercício não admite salto: a investidura se dá com a POSSE.",
      palavraCritica: "entre em exercício",
    },
    comentario: {
      resolucao: "ERRADO. A investidura ocorre com a POSSE, ato formal em que o servidor assina o termo e assume os deveres do cargo — é a posse que cria o vínculo. O EXERCÍCIO é o momento seguinte, o início efetivo das atribuições, e pressupõe a posse: sem ela, o ingresso em exercício é irregular e não convalida coisa alguma. A sequência é nomeação (ato de provimento), posse (investidura) e exercício (início das funções), com prazos próprios — no regime federal, 30 dias para a posse a contar da nomeação e 15 dias para o exercício a contar da posse, servindo de referência para os regimes estaduais.",
      fundamento: "Regime jurídico dos servidores, arts. 13 e ss.; paralelo com a Lei 8.112/1990, arts. 13 e 15.",
      macete: "Nomeia, EMPOSSA (investe), entra em exercício. A posse é o elo que não se pula.",
      erroComum: "Tratar exercício e investidura como sinônimos, por serem ambos 'começar a trabalhar'.",
      comoBancaPensa: "Suprime um elo da cadeia e afirma que o resultado se produz do mesmo jeito.",
    },
  },

  {
    ...BASE87_LI,
    id: "LI-157", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Acumulação com cargo de magistério",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CF, art. 37, XVI, 'b')",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "É permitido ao membro da polícia judiciária, observados os requisitos legais, o exercício da atividade de magistério.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "observados os requisitos legais",
    cognitivo: {
      motivo: "A regra é a vedação de acumular; magistério é a exceção constitucional mais cobrada.",
      palavraCritica: "magistério",
    },
    comentario: {
      resolucao: "CERTO. O art. 37, XVI, da Constituição veda a acumulação remunerada de cargos públicos, RESSALVANDO, quando houver compatibilidade de horários, três hipóteses: dois cargos de professor; um de professor com outro técnico ou científico; e dois cargos ou empregos privativos de profissionais de saúde com profissões regulamentadas. O policial civil se enquadra na segunda hipótese ao acumular seu cargo com um de professor, desde que haja compatibilidade de horários — requisito que o enunciado sintetiza em 'observados os requisitos legais'. A ressalva do 'observados os requisitos' é o que salva o item: sem ela, a afirmação seria absoluta e cairia.",
      fundamento: "CF, art. 37, XVI, 'b', e XVII.",
      macete: "Acumular é proibido; magistério com compatibilidade de horário é a exceção.",
      erroComum: "Aplicar a vedação geral sem lembrar das três exceções do inciso XVI.",
      comoBancaPensa: "Insere a condicionante que torna o item correto e conta com quem responde pela regra geral.",
    },
  },

  {
    ...BASE87_LI,
    id: "LI-158", assunto: "Organização da Polícia Civil de Alagoas",
    subassunto: "Natureza civil e precedência hierárquica",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CF, art. 144, § 4º; Estatuto da PC-AL)",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "Embora a Polícia Civil de Alagoas não possua um caráter militar, a precedência hierárquica é preceito observado na corporação.",
    gabarito: "C",
    pegadinha: "verdade-mais-falso",
    palavraChave: "precedência hierárquica é preceito observado",
    cognitivo: {
      motivo: "Natureza civil e hierarquia não se excluem — a confusão entre as duas coisas é o alvo do item.",
      palavraCritica: "Embora",
    },
    comentario: {
      resolucao: "CERTO nas duas afirmações, que não se contradizem. As polícias civis são instituições de natureza CIVIL, dirigidas por delegados de polícia de carreira (CF, art. 144, § 4º) — não integram as forças auxiliares nem se sujeitam ao regime militar, e por isso seus servidores não respondem a crimes militares nem a conselhos de disciplina castrenses. Isso não afasta a HIERARQUIA: como toda organização administrativa, e com mais razão numa instituição policial, a PC-AL se estrutura em graus de subordinação, com precedência funcional entre as classes da carreira e deveres de obediência a ordens legais. Hierarquia é atributo da administração pública em geral; militarismo é regime jurídico específico.",
      fundamento: "CF, art. 144, § 4º; Estatuto da Polícia Civil de Alagoas.",
      macete: "Civil não quer dizer sem hierarquia. Toda administração é hierarquizada.",
      erroComum: "Associar hierarquia exclusivamente às instituições militares.",
      comoBancaPensa: "Constrói a frase com 'embora', sugerindo contradição onde não há.",
    },
  },

  {
    ...BASE87_LI,
    id: "LI-159", assunto: "Organização do Estado",
    subassunto: "Autonomia dos municípios",
    origem: "CEBRASPE PC-AL 2021 (Agente) — gabarito revisado na fonte normativa (CF, arts. 1º e 18)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "Os municípios do estado de Alagoas subordinam-se administrativa e financeiramente ao estado.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "subordinam-se administrativa e financeiramente",
    cognitivo: {
      motivo: "Na federação brasileira não há hierarquia entre entes — há repartição de competências.",
      palavraCritica: "subordinam-se",
    },
    comentario: {
      resolucao: "ERRADO. O art. 18 da Constituição estabelece que a organização político-administrativa da República compreende a União, os Estados, o Distrito Federal e os Municípios, TODOS AUTÔNOMOS nos termos da Constituição. Não existe subordinação hierárquica entre entes federativos: o que existe é repartição constitucional de competências. A autonomia municipal se manifesta em quatro capacidades — auto-organização (lei orgânica própria), autogoverno (prefeito e vereadores eleitos), autoadministração e autolegislação. O Brasil é, aliás, singular por incluir o município como ente federativo. Não confundir autonomia com soberania, que é atributo exclusivo da República Federativa do Brasil no plano internacional.",
      fundamento: "CF, arts. 1º, 18 e 29 a 31.",
      macete: "Entes federativos são autônomos, não subordinados.",
      erroComum: "Deduzir hierarquia da dependência econômica real de muitos municípios.",
      comoBancaPensa: "Aproveita a percepção prática de dependência financeira para sugerir subordinação jurídica.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE87);
