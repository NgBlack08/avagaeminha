/* =====================================================================
   CEBRASPE LAB — Lote 31: ÉTICA NO SERVIÇO PÚBLICO + DIREITOS HUMANOS
   (expansão)
   Ética no Serviço Público era a disciplina com MENOR cobertura absoluta
   do banco. Como não há texto verificado da Lei Estadual nº 6.754/2006
   (Código de Ética Funcional do Servidor Público de Alagoas) disponível
   para conferência independente, os itens de ética aqui usam doutrina
   geral e consolidada (distinção ética/moral, moralidade administrativa
   como princípio autônomo, deontologia do serviço público) — sem citar
   dispositivos específicos daquela lei estadual não verificados.
   Direitos Humanos ganha itens sobre acesso à Corte IDH, incorporação
   de tratados e PNDH-3, com gabarito verificado de forma independente.
   12 itens INÉDITOS (C/E balanceados).
   ===================================================================== */

const QUESTOES_PCAL_LOTE31 = [

  {
    id: "ET-009", disciplina: "Ética no Serviço Público", assunto: "Moralidade administrativa", subassunto: "Autonomia frente à legalidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (doutrina de moralidade administrativa)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "A moralidade administrativa constitui princípio autônomo em relação à legalidade, de modo que um ato pode ser formalmente legal e, ainda assim, ser considerado imoral do ponto de vista administrativo, sujeitando-se a controle judicial por ofensa à moralidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "princípio autônomo ... legal e imoral",
    cognitivo: {
      motivo: "Cobrar a autonomia do princípio da moralidade administrativa em relação à legalidade.",
      mede: "Ética no Serviço Público — princípios da Administração Pública (art. 37, CF).",
      pegadinhaDesc: "A banca pode reduzir a moralidade a mero sinônimo de legalidade.",
      ondeErra: "Acha que todo ato legal é automaticamente moral, negando a autonomia do princípio.",
      palavraCritica: "princípio autônomo",
      tecnica: "A moralidade administrativa é princípio constitucional autônomo (art. 37, caput, CF): um ato pode observar estritamente a lei e, mesmo assim, violar padrões éticos de honestidade, boa-fé e lealdade institucional, sendo passível de anulação por imoralidade (ex.: ação popular, art. 5º, LXXIII, CF).",
      regraMental: "Legalidade e moralidade são princípios distintos — legal nem sempre é moral."
    },
    comentario: {
      resolucao: "CERTO. A moralidade administrativa é princípio autônomo, distinto da legalidade: um ato pode atender formalmente à lei e, ainda assim, ser reputado imoral (ex.: nepotismo cruzado sem vedação legal expressa à época), sujeitando-se a controle judicial, inclusive por ação popular.",
      fundamento: "Constituição Federal, art. 37, caput; doutrina de Direito Administrativo (princípios da Administração Pública).",
      macete: "Legal ≠ moral, necessariamente. São princípios distintos e cumulativos.",
      erroComum: "Reduzir moralidade a mero sinônimo de legalidade.",
      comoBancaPensa: "Testa a compreensão da autonomia principiológica na Administração Pública."
    }
  },
  {
    id: "ET-010", disciplina: "Ética no Serviço Público", assunto: "Moralidade administrativa", subassunto: "Moralidade x legalidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (doutrina de moralidade administrativa)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.78,
    enunciado: "No exercício da função pública, a moralidade administrativa se esgota no estrito cumprimento da legalidade, de modo que toda conduta legal é, por definição, eticamente inquestionável.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "se esgota ... eticamente inquestionável",
    cognitivo: {
      motivo: "Cobrar a distinção entre legalidade e moralidade administrativa.",
      mede: "Ética no Serviço Público — princípios da Administração Pública.",
      pegadinhaDesc: "A banca generaliza indevidamente que legalidade formal esgota a exigência ética.",
      ondeErra: "Aceita a equivalência entre 'legal' e 'ético' sem perceber que são planos distintos.",
      palavraCritica: "se esgota ... por definição",
      tecnica: "A moralidade administrativa é princípio distinto da legalidade — vai além do cumprimento formal da norma, exigindo também honestidade, boa-fé, decoro e lealdade às finalidades institucionais.",
      regraMental: "'Se esgota em X' e 'por definição' são expressões de generalização típicas de pegadinha — desconfie."
    },
    comentario: {
      resolucao: "ERRADO. A moralidade administrativa não se esgota na legalidade: um ato pode ser formalmente legal e, ainda assim, violar padrões éticos exigidos do agente público, sujeitando-se a controle por imoralidade administrativa, autonomamente da legalidade.",
      fundamento: "Constituição Federal, art. 37, caput; doutrina de Direito Administrativo.",
      macete: "Desconfie de expressões absolutas como 'se esgota em' e 'por definição'.",
      erroComum: "Aceitar que toda conduta legal é automaticamente ética.",
      comoBancaPensa: "Generaliza uma relação (legalidade) para abranger indevidamente todo o campo ético."
    }
  },
  {
    id: "ET-011", disciplina: "Ética no Serviço Público", assunto: "Fundamentos de ética e moral", subassunto: "Distinção ética x moral",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (fundamentos de ética e moral)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.78,
    enunciado: "A ética compreende a reflexão teórica e filosófica acerca dos valores humanos, ao passo que a moral está intrinsecamente associada ao conjunto prático de regras de conduta estabelecidas pelos costumes de um grupo social específico.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ética ... reflexão teórica ... moral ... regras práticas",
    cognitivo: {
      motivo: "Cobrar a distinção clássica entre ética (teoria) e moral (prática/costumes).",
      mede: "Ética no Serviço Público — fundamentos conceituais.",
      pegadinhaDesc: "A banca pode inverter os dois conceitos entre si.",
      ondeErra: "Troca a definição de ética pela de moral, ou vice-versa.",
      palavraCritica: "ética ... reflexão teórica. Moral ... regras práticas",
      tecnica: "Classicamente (do grego 'ethos' e do latim 'mos/mores'): ÉTICA é a reflexão filosófica sobre os valores e fundamentos da conduta humana; MORAL é o conjunto concreto de normas e costumes vigentes em determinada sociedade, historicamente situado.",
      regraMental: "Ética = teoria/reflexão. Moral = prática/costumes concretos."
    },
    comentario: {
      resolucao: "CERTO. Essa é a distinção clássica na literatura de filosofia moral: a ética é a disciplina teórica que reflete sobre os fundamentos e valores da conduta humana, ao passo que a moral corresponde ao conjunto prático de normas de conduta vigentes em um grupo social, ligadas aos seus costumes históricos.",
      fundamento: "Filosofia moral — distinção clássica entre ética e moral (Aristóteles; Adolfo Sánchez Vázquez).",
      macete: "Ética = teoria. Moral = prática (mos/mores = costumes).",
      erroComum: "Inverter as definições de ética e moral.",
      comoBancaPensa: "Item clássico de fixação conceitual, recorrente em provas de ética no serviço público."
    }
  },
  {
    id: "ET-012", disciplina: "Ética no Serviço Público", assunto: "Fundamentos de ética e moral", subassunto: "Distinção ética x moral",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (fundamentos de ética e moral)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.76,
    enunciado: "A moral compreende a reflexão teórica e filosófica acerca dos valores humanos, sendo a ética o conjunto prático e concreto de regras de conduta vigentes em determinado grupo social.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "moral ... reflexão teórica ... ética ... regras práticas",
    cognitivo: {
      motivo: "Cobrar a distinção clássica entre ética (teoria) e moral (prática/costumes), na forma invertida.",
      mede: "Ética no Serviço Público — fundamentos conceituais.",
      pegadinhaDesc: "A banca inverte as definições de ética e moral entre si.",
      ondeErra: "Aceita a troca sem perceber a inversão dos dois conceitos.",
      palavraCritica: "moral ... reflexão teórica",
      tecnica: "Na verdade é o INVERSO: ÉTICA é a reflexão teórica/filosófica, e MORAL é o conjunto prático de regras de conduta ligadas aos costumes de um grupo social. O enunciado trocou os dois termos entre si.",
      regraMental: "Ética = teoria. Moral = prática (mos/mores = costumes)."
    },
    comentario: {
      resolucao: "ERRADO. As definições foram invertidas: é a ÉTICA (e não a moral) que compreende a reflexão teórica e filosófica sobre os valores humanos, ao passo que a MORAL (e não a ética) é o conjunto prático de regras de conduta vigentes em um grupo social.",
      fundamento: "Filosofia moral — distinção clássica entre ética e moral.",
      macete: "Ética = teoria. Moral = prática.",
      erroComum: "Não perceber a inversão proposital entre os dois conceitos.",
      comoBancaPensa: "Testa a mesma distinção clássica, mas com os termos deliberadamente trocados."
    }
  },
  {
    id: "ET-013", disciplina: "Ética no Serviço Público", assunto: "Deontologia do serviço público", subassunto: "Deveres além da legalidade formal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (deontologia do serviço público)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.74,
    enunciado: "A ética profissional do servidor público fundamenta-se em princípios deontológicos, os quais estabelecem deveres de conduta que transcendem a mera obediência formal às normas jurídicas, alcançando também valores como probidade, zelo e decoro.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "transcendem a mera obediência formal ... probidade, zelo e decoro",
    cognitivo: {
      motivo: "Cobrar a natureza deontológica da ética profissional do servidor público.",
      mede: "Ética no Serviço Público — deontologia profissional.",
      pegadinhaDesc: "A banca pode restringir a ética profissional apenas ao cumprimento formal de normas.",
      ondeErra: "Reduz a deontologia à mera observância de regras escritas.",
      palavraCritica: "transcendem a mera obediência formal",
      tecnica: "A deontologia profissional do servidor público estabelece deveres de conduta (probidade, zelo, decoro, lealdade institucional) que vão além do simples cumprimento formal das normas jurídicas, orientando o comportamento mesmo em situações não expressamente reguladas.",
      regraMental: "Deontologia = deveres de conduta que vão além da letra fria da lei."
    },
    comentario: {
      resolucao: "CERTO. A ética profissional do servidor público, de natureza deontológica, estabelece deveres de conduta que vão além da obediência formal às normas, abrangendo também valores como probidade, zelo, decoro e lealdade às finalidades institucionais.",
      fundamento: "Doutrina de ética no serviço público — deontologia profissional.",
      macete: "Deontologia = deveres além da letra da lei (probidade, zelo, decoro).",
      erroComum: "Reduzir a ética profissional ao cumprimento estrito de normas escritas.",
      comoBancaPensa: "Item de fixação sobre a amplitude dos deveres éticos do servidor."
    }
  },
  {
    id: "ET-014", disciplina: "Ética no Serviço Público", assunto: "Princípios da Administração Pública", subassunto: "Impessoalidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (princípios constitucionais da Administração)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.76,
    enunciado: "O princípio da impessoalidade, previsto no art. 37 da Constituição Federal, refere-se exclusivamente à vedação de promoção pessoal de agentes públicos em publicidade institucional, não guardando relação com o tratamento isonômico dispensado aos administrados.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "exclusivamente ... não guardando relação",
    cognitivo: {
      motivo: "Cobrar a amplitude do princípio da impessoalidade.",
      mede: "Ética no Serviço Público — princípios da Administração Pública.",
      pegadinhaDesc: "A banca restringe indevidamente o princípio a apenas uma de suas duas dimensões.",
      ondeErra: "Não reconhece que a impessoalidade também abrange o tratamento isonômico aos administrados, além da vedação à promoção pessoal.",
      palavraCritica: "exclusivamente ... não guardando relação",
      tecnica: "A impessoalidade tem dupla dimensão: (1) vedação à promoção pessoal de agentes públicos (art. 37, §1º, CF) e (2) exigência de tratamento isonômico e sem favoritismo aos administrados, atuando a Administração sempre em nome do interesse público, e não de interesses pessoais.",
      regraMental: "Impessoalidade: vedação à autopromoção + tratamento isonômico aos administrados (dupla face)."
    },
    comentario: {
      resolucao: "ERRADO. O princípio da impessoalidade possui dupla dimensão: além de vedar a promoção pessoal de agentes públicos em publicidade institucional (art. 37, §1º, CF), exige também tratamento isonômico e imparcial dos administrados, sem favoritismos ou perseguições pessoais. A assertiva restringe indevidamente o princípio a apenas uma dessas dimensões.",
      fundamento: "Constituição Federal, art. 37, caput e §1º; doutrina de Direito Administrativo.",
      macete: "Impessoalidade tem duas faces: não se promover + tratar todos com isonomia.",
      erroComum: "Reduzir a impessoalidade a apenas uma de suas duas dimensões.",
      comoBancaPensa: "Restringe indevidamente um princípio de dupla abrangência a apenas uma de suas facetas."
    }
  },

  {
    id: "DH-048", disciplina: "Direitos Humanos", assunto: "Sistema Interamericano de Direitos Humanos", subassunto: "Acesso à Corte Interamericana",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Pacto de São José da Costa Rica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.82,
    enunciado: "À luz da Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica), qualquer pessoa ou grupo de pessoas pode submeter caso diretamente à apreciação da Corte Interamericana de Direitos Humanos, desde que previamente esgotados os recursos da jurisdição interna do Estado.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "diretamente à ... Corte",
    cognitivo: {
      motivo: "Cobrar a legitimidade ativa correta para submissão de casos à Corte IDH.",
      mede: "Direitos Humanos — Sistema Interamericano (CADH).",
      pegadinhaDesc: "A banca atribui a indivíduos uma legitimidade que a Convenção não confere.",
      ondeErra: "Confunde o direito de peticionar à Comissão (amplo, de qualquer pessoa) com a legitimidade para submeter casos à Corte (restrita).",
      palavraCritica: "diretamente à ... Corte",
      tecnica: "Qualquer pessoa, grupo ou ONG pode peticionar à COMISSÃO Interamericana (art. 44, CADH). Somente os ESTADOS-PARTE e a própria COMISSÃO têm legitimidade para submeter um caso à CORTE Interamericana (art. 61, CADH) — indivíduos não têm acesso direto à Corte.",
      regraMental: "Petição individual → Comissão. Submissão de caso → Corte (só Estados e Comissão)."
    },
    comentario: {
      resolucao: "ERRADO. Indivíduos e grupos de pessoas podem peticionar à Comissão Interamericana de Direitos Humanos (art. 44, CADH), mas não têm legitimidade para submeter casos diretamente à Corte Interamericana — essa legitimidade é restrita aos Estados-parte e à própria Comissão (art. 61, CADH).",
      fundamento: "Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica), arts. 44 e 61.",
      macete: "Petição individual vai à Comissão; só Estados/Comissão levam o caso à Corte.",
      erroComum: "Confundir o amplo direito de petição (Comissão) com a legitimidade restrita para acionar a Corte.",
      comoBancaPensa: "Cria uma exigência/legitimidade que a Convenção não confere aos particulares."
    }
  },
  {
    id: "DH-049", disciplina: "Direitos Humanos", assunto: "Sistema Interamericano de Direitos Humanos", subassunto: "Petição à Comissão Interamericana",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Pacto de São José da Costa Rica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Qualquer pessoa, grupo de pessoas ou entidade não governamental legalmente reconhecida em um ou mais Estados-membros da Organização dos Estados Americanos (OEA) pode apresentar à Comissão Interamericana de Direitos Humanos petições contendo denúncias de violação da Convenção Americana por um Estado-parte.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "qualquer pessoa ... Comissão Interamericana",
    cognitivo: {
      motivo: "Cobrar a ampla legitimidade para peticionar à Comissão Interamericana.",
      mede: "Direitos Humanos — Sistema Interamericano (CADH).",
      pegadinhaDesc: "A banca pode restringir essa legitimidade apenas às vítimas diretas.",
      ondeErra: "Acha que só a própria vítima pode peticionar, ignorando a amplitude do art. 44 da CADH.",
      palavraCritica: "qualquer pessoa ... Comissão",
      tecnica: "O art. 44 da CADH confere ampla legitimidade: qualquer pessoa, grupo de pessoas ou ONG reconhecida em Estado-membro da OEA pode peticionar à Comissão, independentemente de ser a própria vítima da violação alegada.",
      regraMental: "Petição à Comissão: legitimidade ampla, não se restringe à vítima direta."
    },
    comentario: {
      resolucao: "CERTO. Nos termos do art. 44 da CADH, a legitimidade para peticionar à Comissão Interamericana de Direitos Humanos é ampla, abrangendo qualquer pessoa, grupo de pessoas ou entidade não governamental legalmente reconhecida em Estado-membro da OEA, independentemente de ser a vítima direta da violação.",
      fundamento: "Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica), art. 44.",
      macete: "Art. 44 CADH: legitimidade ampla para peticionar à Comissão.",
      erroComum: "Restringir a legitimidade apenas à própria vítima da violação.",
      comoBancaPensa: "Item de fixação sobre a amplitude do direito de petição no sistema interamericano."
    }
  },
  {
    id: "DH-050", disciplina: "Direitos Humanos", assunto: "Política Nacional de Direitos Humanos", subassunto: "PNDH-3 (Decreto 7.037/2009)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (PNDH-3)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.72,
    enunciado: "O Programa Nacional de Direitos Humanos (PNDH-3), aprovado pelo Decreto nº 7.037/2009, estrutura-se em cinco eixos orientadores, e não seis, entre os quais não se inclui um eixo específico dedicado à segurança pública.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "cinco eixos ... não se inclui",
    cognitivo: {
      motivo: "Cobrar o número correto de eixos orientadores do PNDH-3 e a existência do eixo de segurança pública.",
      mede: "Direitos Humanos — Política Nacional de Direitos Humanos (PNDH-3).",
      pegadinhaDesc: "A banca troca o número de eixos (seis) por outro (cinco) e nega a existência do eixo de segurança pública.",
      ondeErra: "Não memoriza o número exato de eixos nem a existência do Eixo IV específico sobre segurança pública.",
      palavraCritica: "cinco eixos ... não se inclui",
      tecnica: "O PNDH-3 estrutura-se em SEIS eixos orientadores, entre os quais o Eixo Orientador IV, dedicado especificamente à 'Segurança Pública, Acesso à Justiça e Combate à Violência'.",
      regraMental: "PNDH-3: 6 eixos. Eixo IV = Segurança Pública, Acesso à Justiça e Combate à Violência."
    },
    comentario: {
      resolucao: "ERRADO. O PNDH-3 estrutura-se em SEIS eixos orientadores (e não cinco), sendo o Eixo Orientador IV dedicado especificamente à 'Segurança Pública, Acesso à Justiça e Combate à Violência' — contrariando a dupla afirmação do item.",
      fundamento: "Decreto nº 7.037/2009 (Programa Nacional de Direitos Humanos — PNDH-3).",
      macete: "PNDH-3: 6 eixos. Eixo IV trata exatamente de segurança pública.",
      erroComum: "Errar o número de eixos ou negar a existência do eixo de segurança pública.",
      comoBancaPensa: "Combina troca numérica com negação de um fato existente, dobrando a chance de erro."
    }
  },
  {
    id: "DH-051", disciplina: "Direitos Humanos", assunto: "Incorporação de tratados internacionais", subassunto: "Status supralegal x equivalência a emenda",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (incorporação de tratados de direitos humanos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.84,
    enunciado: "Os tratados e convenções internacionais sobre direitos humanos aprovados por maioria simples em cada Casa do Congresso Nacional, em turno único de votação, equivalem às emendas constitucionais, independentemente do quórum de aprovação.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "maioria simples ... turno único",
    cognitivo: {
      motivo: "Cobrar o rito específico exigido para que tratados de direitos humanos equivalham a emendas constitucionais.",
      mede: "Direitos Humanos — incorporação de tratados internacionais (art. 5º, §3º, CF).",
      pegadinhaDesc: "A banca troca o quórum e o número de turnos exigidos pela CF por requisitos mais brandos.",
      ondeErra: "Não memoriza o rito específico exigido (dois turnos, três quintos) e aceita um quórum mais simples.",
      palavraCritica: "maioria simples ... turno único",
      tecnica: "Pelo art. 5º, §3º, da CF, os tratados de direitos humanos equivalem a emendas constitucionais apenas quando aprovados, EM CADA CASA do Congresso Nacional, em DOIS TURNOS, por TRÊS QUINTOS dos votos dos respectivos membros — e não por maioria simples em turno único.",
      regraMental: "Equivalência a emenda: 2 turnos + 3/5 dos votos, em cada Casa (mesmo rito de PEC)."
    },
    comentario: {
      resolucao: "ERRADO. O rito exigido pelo art. 5º, §3º, da CF para que o tratado de direitos humanos equivalha a emenda constitucional é: aprovação em CADA Casa do Congresso Nacional, em DOIS turnos, por TRÊS QUINTOS dos votos dos respectivos membros — e não maioria simples em turno único, como afirmado.",
      fundamento: "Constituição Federal, art. 5º, §3º (incluído pela EC nº 45/2004).",
      macete: "Mesmo rito de uma PEC: 2 turnos, 3/5, em cada Casa.",
      erroComum: "Confundir com o quórum de aprovação de lei ordinária ou complementar.",
      comoBancaPensa: "Troca o quórum qualificado exigido pela CF por um requisito mais brando e genérico."
    }
  },
  {
    id: "DH-052", disciplina: "Direitos Humanos", assunto: "Sistema Interamericano de Direitos Humanos", subassunto: "Vedação à pena de morte (CADH)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Pacto de São José da Costa Rica, art. 4)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.76,
    enunciado: "À luz da Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica), o Estado que houver abolido a pena de morte não poderá restabelecê-la; a Convenção veda, ainda, a imposição dessa pena a quem, no momento da perpetração do delito, for menor de dezoito anos ou maior de setenta anos, bem como à mulher em estado de gravidez.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não poderá restabelecê-la ... menor de 18 ... maior de 70 ... gravidez",
    cognitivo: {
      motivo: "Cobrar as restrições específicas da CADH à aplicação da pena de morte.",
      mede: "Direitos Humanos — Sistema Interamericano (CADH, art. 4).",
      pegadinhaDesc: "A banca pode alterar as idades-limite ou omitir a vedação ao restabelecimento.",
      ondeErra: "Erra as idades específicas (18 e 70 anos) ou nega a vedação ao restabelecimento da pena.",
      palavraCritica: "menor de dezoito anos ou maior de setenta anos",
      tecnica: "Art. 4º da CADH: Estados que aboliram a pena de morte não podem restabelecê-la; a pena não pode ser imposta a quem tinha menos de 18 anos ou mais de 70 anos ao tempo do delito, nem à mulher em estado de gravidez.",
      regraMental: "CADH art. 4: abolição é irreversível + veda pena de morte para <18, >70 anos e gestantes."
    },
    comentario: {
      resolucao: "CERTO. O art. 4º da CADH estabelece exatamente essas três garantias: irreversibilidade da abolição da pena de morte, vedação de sua imposição a quem tinha menos de 18 ou mais de 70 anos ao tempo do delito, e vedação à sua aplicação a mulher em estado de gravidez.",
      fundamento: "Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica), art. 4º.",
      macete: "Pena de morte na CADH: nunca para <18, >70 anos ou gestante; abolição é definitiva.",
      erroComum: "Errar as idades-limite ou esquecer a vedação ao restabelecimento.",
      comoBancaPensa: "Cobra a memorização literal e completa de um dispositivo central da Convenção."
    }
  },
  {
    id: "DH-053", disciplina: "Direitos Humanos", assunto: "Sistema Interamericano de Direitos Humanos", subassunto: "Competência da Corte Interamericana",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Pacto de São José da Costa Rica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.76,
    enunciado: "A Corte Interamericana de Direitos Humanos possui competência tanto contenciosa, para julgar casos de violação da Convenção Americana, quanto consultiva, para emitir pareceres sobre a interpretação da Convenção ou de outros tratados de direitos humanos, sendo que apenas os Estados-parte e a Comissão Interamericana têm legitimidade para submeter casos à sua apreciação contenciosa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "competência contenciosa ... consultiva ... Estados-parte e Comissão",
    cognitivo: {
      motivo: "Cobrar as duas competências da Corte IDH e a legitimidade restrita para a via contenciosa.",
      mede: "Direitos Humanos — Sistema Interamericano (competências da Corte IDH).",
      pegadinhaDesc: "A banca pode negar uma das duas competências ou ampliar indevidamente a legitimidade ativa.",
      ondeErra: "Confunde a competência consultiva com a contenciosa, ou amplia a legitimidade para indivíduos.",
      palavraCritica: "apenas os Estados-parte e a Comissão",
      tecnica: "A Corte IDH tem competência CONTENCIOSA (julgar casos concretos de violação) e CONSULTIVA (emitir pareceres interpretativos, inclusive sobre outros tratados). Apenas Estados-parte e a Comissão podem submeter casos à via contenciosa (art. 61, CADH).",
      regraMental: "Corte IDH: contenciosa (julga) + consultiva (opina). Só Estados/Comissão acionam a via contenciosa."
    },
    comentario: {
      resolucao: "CERTO. A Corte Interamericana exerce competência contenciosa (julgamento de casos concretos de violação da Convenção) e competência consultiva (emissão de pareceres sobre a interpretação de tratados de direitos humanos), sendo que apenas os Estados-parte e a Comissão Interamericana têm legitimidade para submeter casos à via contenciosa, conforme o art. 61 da CADH.",
      fundamento: "Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica), arts. 61 a 64.",
      macete: "Corte IDH: contenciosa (julga) + consultiva (opina); legitimidade contenciosa restrita a Estados/Comissão.",
      erroComum: "Achar que indivíduos podem acionar diretamente a via contenciosa da Corte.",
      comoBancaPensa: "Consolida, em um único item correto, a distinção testada de forma invertida no item anterior."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE31);

/* Frequência de temas — Ética no Serviço Público e Direitos Humanos (Módulo 2) */
(function () {
  const addTema = (disc, temas) => {
    let d = FREQUENCIA_TEMAS.find(f => f.disciplina === disc);
    if (!d) { d = { disciplina: disc, temas: [] }; FREQUENCIA_TEMAS.push(d); }
    d.temas.push(...temas);
  };
  addTema("Ética no Serviço Público", [
    { tema: "Moralidade administrativa como princípio autônomo", freq: 78, tendencia: "alta", prob: 0.8 },
    { tema: "Distinção ética x moral (fundamentos filosóficos)", freq: 74, tendencia: "alta", prob: 0.76 },
  ]);
  addTema("Direitos Humanos", [
    { tema: "Sistema Interamericano: Comissão x Corte (legitimidade)", freq: 80, tendencia: "alta", prob: 0.82 },
    { tema: "Incorporação de tratados e PNDH-3", freq: 74, tendencia: "estavel", prob: 0.76 },
  ]);
})();
