/* =====================================================================
   QUESTLAB — Lote 59: LEGISLAÇÃO APLICADA AO SUS (trilha SESAU/AL)

   Primeira disciplina da trilha SESAU/AL — Especialista em Saúde,
   especialidade Fisioterapia (Edital nº 1 - SESAU/AL, de 18/06/2026,
   Cebraspe). Item 16.2.3 do edital, conhecimentos básicos:

     1 Evolução histórica da organização do sistema de saúde no Brasil e a
     construção do SUS: princípios, diretrizes e arcabouço legal.
     2 Controle social no SUS. 3 Resolução nº 453/2012 do CNS.
     4 Constituição Federal, artigos de 194 a 200 e suas alterações.
     5 Lei nº 8.080/1990, Lei nº 8.142/1990 e Decreto nº 7.508/2011.
     6 Determinantes sociais da saúde. 7 Sistemas de informação em saúde.

   Os 40 itens cobrem os sete tópicos, com peso maior nos que a banca mais
   cobra literalmente: composição e natureza dos Conselhos de Saúde, as
   diretrizes do art. 198 da CF, os princípios do art. 7º da Lei 8.080 e as
   definições do Decreto 7.508 (Região de Saúde, Portas de Entrada,
   RENASES × RENAME).

   Equilíbrio 20 CERTO / 20 ERRADO — a disciplina é de transcrição de lei,
   onde o item fiel tende a ser CERTO; sem o contrapeso deliberado, o lote
   nasceria enviesado e o candidato aprenderia a marcar CERTO por reflexo.
   ===================================================================== */

const QUESTOES_SESAUAL_LOTE59 = [
  /* ---------- 1. Evolução histórica e construção do SUS ---------- */
  {
    id: "SUS-001", disciplina: "Legislação Aplicada ao SUS", assunto: "Evolução histórica do SUS", subassunto: "8ª Conferência Nacional de Saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "A 8ª Conferência Nacional de Saúde, realizada em 1986, é considerada o marco da Reforma Sanitária brasileira, tendo consolidado o conceito ampliado de saúde e as bases doutrinárias posteriormente incorporadas pela Constituição Federal de 1988.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "marco da Reforma Sanitária ... bases incorporadas pela CF/88",
    cognitivo: {
      motivo: "Fixar o marco histórico que a banca usa como âncora cronológica do SUS.",
      palavraCritica: "1986",
    },
    comentario: {
      resolucao: "CERTO. A 8ª CNS foi a primeira conferência aberta à participação da sociedade civil, e seu relatório final firmou o conceito ampliado de saúde — saúde como resultado de condições de vida, não como ausência de doença. Dali saíram as três teses que a CF/88 encampou: saúde como direito de todos e dever do Estado, sistema único, e participação da comunidade. Guarde a cronologia, porque a banca troca as datas: 1986 é a Conferência; 1988 é a Constituição; 1990 são as Leis 8.080 e 8.142.",
      fundamento: "Relatório Final da 8ª Conferência Nacional de Saúde (1986); CF/88, arts. 196 a 198.",
      macete: "1986 Conferência → 1988 Constituição → 1990 Leis Orgânicas.",
      erroComum: "Confundir a 8ª CNS (1986) com a promulgação da Lei 8.080 (1990).",
      comoBancaPensa: "Item histórico de âncora: cobra a data-marco para depois inverter a cronologia em outros itens."
    }
  },
  {
    id: "SUS-002", disciplina: "Legislação Aplicada ao SUS", assunto: "Evolução histórica do SUS", subassunto: "Modelo previdenciário anterior ao SUS",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "Antes da Constituição Federal de 1988, o acesso à assistência médica no Brasil, prestada pelo INAMPS, era vinculado à condição de trabalhador com vínculo formal e contribuinte da previdência social, o que excluía da cobertura a população não segurada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "vinculado à condição de ... contribuinte da previdência",
    cognitivo: {
      motivo: "Contrastar o modelo contributivo anterior com a universalidade instituída em 1988.",
      palavraCritica: "contribuinte da previdência social",
    },
    comentario: {
      resolucao: "CERTO. O INAMPS era autarquia do Ministério da Previdência, e o atendimento seguia lógica de seguro: pagava-se pelo direito de ser atendido. Quem não tinha carteira assinada dependia de filantropia — as Santas Casas — ou do atendimento restrito do Ministério da Saúde, então voltado quase só a campanhas e endemias. É exatamente esse recorte que o art. 196 da CF derruba ao dizer 'direito de TODOS'. Entender isso explica por que universalidade é o primeiro princípio do SUS: ela nomeia o que existia antes.",
      fundamento: "Lei 6.439/1977 (SINPAS/INAMPS); CF/88, art. 196; Lei 8.080/1990, art. 7º, I.",
      macete: "Antes: seguro (quem contribui). Depois: seguridade (todos).",
      erroComum: "Supor que o atendimento público anterior a 1988 já era universal.",
      comoBancaPensa: "Item de contraste histórico: quem não sabe o 'antes' não entende por que universalidade é princípio."
    }
  },
  {
    id: "SUS-003", disciplina: "Legislação Aplicada ao SUS", assunto: "Evolução histórica do SUS", subassunto: "Arcabouço legal — Lei Orgânica da Saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "A Lei Orgânica da Saúde é composta exclusivamente pela Lei nº 8.080/1990, que disciplina tanto a organização e o funcionamento dos serviços de saúde quanto a participação da comunidade na gestão do SUS.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "exclusivamente pela Lei nº 8.080/1990",
    cognitivo: {
      motivo: "Cobrar que a Lei Orgânica da Saúde é um par de leis, não uma só.",
      palavraCritica: "exclusivamente",
    },
    comentario: {
      resolucao: "ERRADO. São duas leis, e a divisão entre elas tem razão de ser. A Lei 8.080/1990 saiu com vetos presidenciais justamente nos dispositivos sobre participação da comunidade e repasses financeiros; a Lei 8.142/1990 foi editada meses depois para repor esse conteúdo. Por isso o controle social — Conferências e Conselhos de Saúde — está na 8.142, não na 8.080. O item erra ao atribuir a participação da comunidade à 8.080.",
      fundamento: "Lei 8.080/1990; Lei 8.142/1990, art. 1º.",
      macete: "8.080 = organização e funcionamento. 8.142 = controle social e dinheiro.",
      erroComum: "Procurar Conselho e Conferência de Saúde na Lei 8.080.",
      comoBancaPensa: "Explora a origem histórica dos vetos, que separou o tema em duas leis."
    }
  },
  {
    id: "SUS-004", disciplina: "Legislação Aplicada ao SUS", assunto: "Evolução histórica do SUS", subassunto: "Conceito ampliado de saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "Segundo o conceito ampliado de saúde adotado pela legislação do SUS, a saúde é definida como o estado de ausência de doenças e enfermidades, aferido por indicadores clínicos objetivos.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "ausência de doenças e enfermidades",
    cognitivo: {
      motivo: "Distinguir o conceito ampliado do conceito biomédico restrito.",
      palavraCritica: "ausência de doenças",
    },
    comentario: {
      resolucao: "ERRADO. O item descreve o conceito biomédico restrito, que é justamente o que a Reforma Sanitária superou. O art. 3º da Lei 8.080 faz o contrário: elenca alimentação, moradia, saneamento básico, meio ambiente, trabalho, renda, educação, atividade física, transporte, lazer e acesso a bens e serviços essenciais como determinantes e condicionantes da saúde. E o parágrafo único acrescenta que também se destinam a garantir a saúde as ações que se voltem a assegurar as pessoas e à coletividade condições de bem-estar físico, mental e social. Saúde ali é produzida por condições de vida, não medida por ausência de sintoma.",
      fundamento: "Lei 8.080/1990, art. 3º e parágrafo único.",
      macete: "Se o item reduz saúde a 'não estar doente', é o conceito que o SUS abandonou.",
      erroComum: "Aceitar a definição por soar tecnicamente correta em contexto clínico.",
      comoBancaPensa: "Oferece o conceito intuitivo — e errado no marco legal — para punir leitura automática."
    }
  },

  /* ---------- 2. Constituição Federal, arts. 194 a 200 ---------- */
  {
    id: "SUS-005", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 194 — conceito de seguridade social",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "A seguridade social compreende um conjunto integrado de ações de iniciativa dos poderes públicos e da sociedade, destinadas a assegurar os direitos relativos à saúde, à previdência e à assistência social.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "saúde, previdência e assistência social",
    cognitivo: {
      motivo: "Fixar o tripé da seguridade social, base de todos os itens do art. 194 ao 200.",
      palavraCritica: "saúde, à previdência e à assistência social",
    },
    comentario: {
      resolucao: "CERTO. É a transcrição do caput do art. 194 da CF. O tripé importa porque cada perna tem lógica própria de acesso: previdência é CONTRIBUTIVA (só quem contribui recebe); saúde e assistência social são NÃO contributivas. A assistência ainda exige comprovação de necessidade — 'a quem dela necessitar', art. 203 —, enquanto a saúde é a única das três com acesso universal e incondicionado. A banca troca essas condições de acesso entre si.",
      fundamento: "CF/88, art. 194, caput; arts. 196 e 203.",
      macete: "Tripé SAP: Saúde, Assistência, Previdência. Só a Previdência exige contribuição.",
      erroComum: "Incluir educação ou trabalho no rol da seguridade social.",
      comoBancaPensa: "Item literal de abertura, que ancora as trocas de condição de acesso nos itens seguintes."
    }
  },
  {
    id: "SUS-006", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 196 — saúde como direito de todos",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.92,
    enunciado: "A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "acesso universal e igualitário",
    cognitivo: {
      motivo: "Cobrar o dispositivo mais transcrito da matéria, palavra por palavra.",
      palavraCritica: "universal e igualitário",
    },
    comentario: {
      resolucao: "CERTO. Transcrição fiel do art. 196 da CF. Duas palavras costumam ser adulteradas em item pseudo-literal: 'universal' vira 'universal para os hipossuficientes' e 'igualitário' vira 'equânime'. Repare também na tríade final — promoção, proteção e recuperação —, que a banca reduz a 'recuperação' para restringir o SUS ao tratamento e excluir a prevenção. Guarde as três: são elas que dão base constitucional à atuação preventiva do fisioterapeuta.",
      fundamento: "CF/88, art. 196.",
      macete: "Promoção, proteção e recuperação — as três, sempre.",
      erroComum: "Aceitar item que condiciona o acesso à carência econômica.",
      comoBancaPensa: "Artigo-âncora: cobra literal aqui para depois cobrar a alteração cirúrgica."
    }
  },
  {
    id: "SUS-007", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 198 — diretrizes do SUS",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.9,
    enunciado: "As ações e serviços públicos de saúde integram uma rede regionalizada e hierarquizada e constituem um sistema único, organizado de acordo com as seguintes diretrizes: descentralização, com direção única em cada esfera de governo; atendimento integral, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais; e participação da comunidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "descentralização ... atendimento integral ... participação da comunidade",
    cognitivo: {
      motivo: "Fixar as três diretrizes constitucionais, que a banca embaralha com os princípios da Lei 8.080.",
      palavraCritica: "prioridade para as atividades preventivas",
    },
    comentario: {
      resolucao: "CERTO. Transcrição do art. 198, caput e incisos I a III. Distinção que a banca explora: a CF traz TRÊS DIRETRIZES; a Lei 8.080, no art. 7º, traz quatorze PRINCÍPIOS. Universalidade e igualdade, por exemplo, são princípios legais, não diretrizes constitucionais — item que as chame de diretrizes do art. 198 está errado. Note ainda 'sem prejuízo dos serviços assistenciais': a prioridade à prevenção não autoriza desmontar a assistência, e suprimir essa ressalva é a alteração cirúrgica típica.",
      fundamento: "CF/88, art. 198, caput e incisos I a III.",
      macete: "CF = 3 diretrizes (DIP: Descentralização, Integral, Participação). Lei 8.080 = 14 princípios.",
      erroComum: "Listar universalidade entre as diretrizes constitucionais do art. 198.",
      comoBancaPensa: "Testa se o candidato separa o que é da Constituição do que é da lei ordinária."
    }
  },
  {
    id: "SUS-008", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 199 §2º — vedação de recursos públicos",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.84,
    enunciado: "É vedada a destinação de recursos públicos para auxílios ou subvenções às instituições privadas sem fins lucrativos que participem de forma complementar do Sistema Único de Saúde.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "sem fins lucrativos",
    cognitivo: {
      motivo: "Cobrar a inversão exata do §2º do art. 199: a vedação alcança as COM fins lucrativos.",
      palavraCritica: "sem fins lucrativos",
    },
    comentario: {
      resolucao: "ERRADO. O §2º do art. 199 veda auxílios e subvenções às instituições privadas COM fins lucrativos — o item inverteu. As entidades sem fins lucrativos e filantrópicas estão no polo oposto: o §1º lhes dá PREFERÊNCIA na participação complementar ao SUS. Ou seja, o mesmo artigo que o item invoca para proibir é o que na verdade privilegia essas entidades. Atenção a um ponto que confunde: contratar serviço de entidade com fins lucrativos é permitido (é contrato, com contraprestação); o vedado é repassar auxílio ou subvenção, que é dinheiro sem contrapartida direta.",
      fundamento: "CF/88, art. 199, §§ 1º e 2º.",
      macete: "Sem fins lucrativos tem preferência; com fins lucrativos não recebe subvenção.",
      erroComum: "Ler 'privadas' e marcar CERTO sem conferir se é com ou sem fins lucrativos.",
      comoBancaPensa: "Troca uma única expressão do dispositivo e conta com a leitura apressada."
    }
  },
  {
    id: "SUS-009", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 199 §3º — capital estrangeiro",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.76,
    enunciado: "A Constituição Federal veda, em qualquer hipótese, a participação direta ou indireta de empresas ou capitais estrangeiros na assistência à saúde no País.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "em qualquer hipótese",
    cognitivo: {
      motivo: "Cobrar a ressalva final do §3º, suprimida pelo item.",
      palavraCritica: "em qualquer hipótese",
    },
    comentario: {
      resolucao: "ERRADO. O §3º do art. 199 veda a participação, mas encerra com 'salvo nos casos previstos em lei'. O item transformou uma vedação relativa em absoluta ao inserir 'em qualquer hipótese'. E a exceção é real, não teórica: a Lei 13.097/2015 autorizou expressamente a participação de capital estrangeiro em hospitais gerais e especializados, clínicas e ações de planejamento familiar, entre outras hipóteses. Regra constitucional com 'salvo em lei' é um convite a que a lei crie a exceção — e aqui ela criou.",
      fundamento: "CF/88, art. 199, § 3º; Lei 13.097/2015, art. 142.",
      macete: "Terminou em 'salvo nos casos previstos em lei'? Então não é absoluta.",
      erroComum: "Marcar CERTO por lembrar da vedação e esquecer a ressalva.",
      comoBancaPensa: "Suprime a ressalva e reforça com termo absoluto — o padrão mais frequente da banca."
    }
  },
  {
    id: "SUS-010", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 197 — relevância pública",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.72,
    enunciado: "São de relevância pública as ações e serviços de saúde, razão pela qual sua execução compete privativamente ao Poder Público, vedada a delegação a pessoa física ou jurídica de direito privado.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "privativamente ao Poder Público",
    cognitivo: {
      motivo: "Cobrar que relevância pública não transforma a execução em monopólio estatal.",
      palavraCritica: "privativamente",
    },
    comentario: {
      resolucao: "ERRADO. O art. 197 separa dois planos, e o item confunde os dois. A regulamentação, a fiscalização e o controle são indelegáveis — esses sim competem sempre ao Poder Público. Já a EXECUÇÃO, diz o mesmo artigo, deve ser feita 'diretamente ou através de terceiros e, também, por pessoa física ou jurídica de direito privado'. A leitura do item ainda conflitaria com o caput do art. 199, segundo o qual a assistência à saúde é livre à iniciativa privada. Relevância pública significa sujeição a regime especial de fiscalização, não estatização do serviço.",
      fundamento: "CF/88, art. 197; art. 199, caput.",
      macete: "Regular e fiscalizar é só do Estado; executar pode ser de terceiro.",
      erroComum: "Deduzir de 'relevância pública' que a execução é monopólio estatal.",
      comoBancaPensa: "Aposta que o candidato associe relevância pública a exclusividade."
    }
  },
  {
    id: "SUS-011", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 200 — competências do SUS",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "Compete ao Sistema Único de Saúde, entre outras atribuições, ordenar a formação de recursos humanos na área de saúde e participar da formulação da política e da execução das ações de saneamento básico.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ordenar a formação de recursos humanos",
    cognitivo: {
      motivo: "Cobrar duas competências do art. 200 que soam alheias à saúde e por isso são negadas por reflexo.",
      palavraCritica: "ordenar a formação",
    },
    comentario: {
      resolucao: "CERTO. São os incisos III e IV do art. 200. Ambos costumam ser marcados como ERRADO por parecerem competência de outra pasta — educação e saneamento —, e é justamente essa intuição que a banca pune. Repare no verbo, que é onde mora a precisão: no saneamento o SUS PARTICIPA da formulação e da execução (a titularidade é do setor de saneamento); na formação de RH ele ORDENA. Item que troque 'participar' por 'executar com exclusividade' no saneamento estaria errado.",
      fundamento: "CF/88, art. 200, III e IV.",
      macete: "No art. 200, o verbo é o gabarito: ordenar, participar, executar, colaborar, fiscalizar.",
      erroComum: "Negar a competência por achar que formação de RH é assunto do MEC.",
      comoBancaPensa: "Escolhe as competências contraintuitivas do rol para punir resposta por reflexo."
    }
  },
  {
    id: "SUS-012", disciplina: "Legislação Aplicada ao SUS", assunto: "Seguridade social e saúde na CF/88", subassunto: "Art. 199 §4º — transplantes",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.7,
    enunciado: "A lei disporá sobre as condições e os requisitos que facilitem a remoção de órgãos, tecidos e substâncias humanas para fins de transplante, pesquisa e tratamento, sendo permitida a comercialização desses materiais desde que autorizada pelo órgão gestor do SUS.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "sendo permitida a comercialização",
    cognitivo: {
      motivo: "Cobrar que a vedação à comercialização de órgãos é absoluta, sem válvula administrativa.",
      palavraCritica: "desde que autorizada",
    },
    comentario: {
      resolucao: "ERRADO. O §4º do art. 199 encerra com 'sendo vedado todo tipo de comercialização'. O item não só inverte a proibição em permissão, como inventa uma autorização administrativa que a Constituição não prevê — e nenhum órgão gestor poderia criá-la, porque a vedação é constitucional. Aqui o termo absoluto está do lado correto: é uma das hipóteses em que a regra é mesmo sem exceção, e marcar ERRADO por reflexo diante de 'todo tipo' levaria ao engano oposto.",
      fundamento: "CF/88, art. 199, § 4º; Lei 9.434/1997, art. 1º, parágrafo único.",
      macete: "Comercialização de órgãos: vedação absoluta, sem autorização que valha.",
      erroComum: "Aceitar a ressalva por soar razoável administrativamente.",
      comoBancaPensa: "Cria uma exceção plausível onde a norma não admite nenhuma."
    }
  },

  /* ---------- 3. Lei nº 8.080/1990 ---------- */
  {
    id: "SUS-013", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 2º — saúde como direito fundamental",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.78,
    enunciado: "A saúde é um direito fundamental do ser humano, devendo o Estado prover as condições indispensáveis ao seu pleno exercício.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "direito fundamental do ser humano",
    cognitivo: {
      motivo: "Fixar o caput do art. 2º, base do dever estatal na Lei Orgânica.",
      palavraCritica: "condições indispensáveis",
    },
    comentario: {
      resolucao: "CERTO. É o caput do art. 2º da Lei 8.080. O §2º completa com uma ressalva que a banca gosta de suprimir: o dever do Estado não exclui o das pessoas, da família, das empresas e da sociedade. Item que apresente a saúde como responsabilidade exclusivamente estatal contraria esse parágrafo — a lei distribui o dever, ainda que o Estado seja o garantidor principal.",
      fundamento: "Lei 8.080/1990, art. 2º, caput e §§ 1º e 2º.",
      macete: "Dever do Estado não é dever exclusivo do Estado (art. 2º, §2º).",
      erroComum: "Aceitar item que torna a responsabilidade pela saúde exclusiva do poder público.",
      comoBancaPensa: "Transcreve o caput e omite o parágrafo que relativiza a exclusividade."
    }
  },
  {
    id: "SUS-014", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 3º — determinantes e condicionantes",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.86,
    enunciado: "Entre os fatores determinantes e condicionantes da saúde previstos na Lei nº 8.080/1990 incluem-se a alimentação, a moradia, o saneamento básico, o meio ambiente, o trabalho, a renda, a educação, a atividade física, o transporte, o lazer e o acesso aos bens e serviços essenciais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "atividade física",
    cognitivo: {
      motivo: "Cobrar o rol do art. 3º, incluindo a atividade física acrescentada em 2013.",
      palavraCritica: "atividade física",
    },
    comentario: {
      resolucao: "CERTO. É o rol do art. 3º da Lei 8.080. 'Atividade física' não constava da redação original — foi inserida pela Lei 12.864/2013, e por ser a mais recente é a que a banca costuma suprimir ou apontar como intrusa. O rol é exemplificativo, aberto por 'entre outros', então item que o apresente como taxativo estaria errado. Para o cargo de fisioterapeuta, é o dispositivo que ancora legalmente a atuação em promoção da saúde, não só em reabilitação.",
      fundamento: "Lei 8.080/1990, art. 3º, com redação da Lei 12.864/2013.",
      macete: "Atividade física entrou em 2013 — é a mais nova do rol e a mais cobrada.",
      erroComum: "Apontar 'atividade física' como item estranho ao artigo.",
      comoBancaPensa: "Alteração legislativa recente em rol conhecido: janela típica de cobrança."
    }
  },
  {
    id: "SUS-015", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 9º — direção do SUS",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.83,
    enunciado: "A direção do Sistema Único de Saúde é única em cada esfera de governo, sendo exercida, no âmbito dos municípios, pela respectiva secretaria de saúde ou órgão equivalente, e, no âmbito dos estados, pelo Ministério da Saúde.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "no âmbito dos estados, pelo Ministério da Saúde",
    cognitivo: {
      motivo: "Cobrar a correspondência entre esfera de governo e órgão de direção.",
      palavraCritica: "Ministério da Saúde",
    },
    comentario: {
      resolucao: "ERRADO. O art. 9º atribui a direção estadual à respectiva Secretaria de Saúde ou órgão equivalente — o Ministério da Saúde dirige apenas o âmbito da UNIÃO. O item acerta o município e erra o estado. A lógica é a diretriz constitucional de direção única (CF, art. 198, I): cada ente dirige o SUS no seu território, e nenhum é subordinado ao outro. Guarde que 'direção única' não significa direção nacional centralizada — significa um só dirigente POR ESFERA.",
      fundamento: "Lei 8.080/1990, art. 9º, I a III; CF/88, art. 198, I.",
      macete: "União = Ministério; Estado/DF e Município = Secretaria.",
      erroComum: "Ler 'direção única' como comando nacional único.",
      comoBancaPensa: "Acerta metade do dispositivo para que a outra metade passe despercebida."
    }
  },
  {
    id: "SUS-016", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 7º — princípios e diretrizes",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.88,
    enunciado: "Entre os princípios que regem as ações e serviços do SUS está a igualdade da assistência à saúde, sem preconceitos ou privilégios de qualquer espécie.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sem preconceitos ou privilégios",
    cognitivo: {
      motivo: "Fixar a redação do inciso IV do art. 7º, frequentemente confundida com equidade.",
      palavraCritica: "igualdade",
    },
    comentario: {
      resolucao: "CERTO. É o inciso IV do art. 7º da Lei 8.080. Cuidado com a diferença entre o texto legal e a doutrina: a LEI escreve 'igualdade'; 'equidade' é construção doutrinária — tratar desigualmente os desiguais na medida de suas desigualdades — que não aparece com essa palavra no art. 7º. Se o item pedir o princípio 'previsto na Lei 8.080', a palavra é igualdade. Essa distinção entre o que está escrito e o que a doutrina elaborou é a armadilha mais comum da disciplina.",
      fundamento: "Lei 8.080/1990, art. 7º, IV.",
      macete: "Na letra da lei é IGUALDADE; equidade é doutrina.",
      erroComum: "Marcar ERRADO por esperar a palavra 'equidade'.",
      comoBancaPensa: "Explora a distância entre o vocabulário legal e o vocabulário de sala de aula."
    }
  },
  {
    id: "SUS-017", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 4º §2º — participação da iniciativa privada",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.74,
    enunciado: "A iniciativa privada poderá participar do Sistema Único de Saúde em caráter suplementar.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "caráter suplementar",
    cognitivo: {
      motivo: "Cobrar a diferença entre saúde complementar e saúde suplementar.",
      palavraCritica: "suplementar",
    },
    comentario: {
      resolucao: "ERRADO. O §2º do art. 4º da Lei 8.080 diz caráter COMPLEMENTAR, e a diferença de uma sílaba muda o regime jurídico inteiro. Saúde COMPLEMENTAR é o prestador privado contratado ou conveniado pelo SUS quando a rede pública é insuficiente: integra o sistema, segue suas regras e é pago com dinheiro público. Saúde SUPLEMENTAR é o setor de planos e seguros privados, custeado pelo usuário e regulado pela ANS (Lei 9.656/1998), que corre por fora do SUS. O item trocou um pelo outro.",
      fundamento: "Lei 8.080/1990, art. 4º, § 2º; CF/88, art. 199, § 1º.",
      macete: "Complementar = dentro do SUS. Suplementar = planos de saúde, fora dele.",
      erroComum: "Aceitar suplementar por soar equivalente a complementar.",
      comoBancaPensa: "Dois termos quase idênticos com regimes jurídicos distintos — troca de conceito clássica."
    }
  },
  {
    id: "SUS-018", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 6º §1º — vigilância sanitária",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Entende-se por vigilância sanitária o conjunto de ações que proporciona o conhecimento, a detecção ou a prevenção de qualquer mudança nos fatores determinantes e condicionantes de saúde individual ou coletiva, com a finalidade de recomendar e adotar as medidas de prevenção e controle das doenças ou agravos.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "detecção ou a prevenção de qualquer mudança nos fatores determinantes",
    cognitivo: {
      motivo: "Separar as definições legais de vigilância sanitária e epidemiológica.",
      palavraCritica: "mudança nos fatores determinantes e condicionantes",
    },
    comentario: {
      resolucao: "ERRADO. O texto transcrito é a definição de vigilância EPIDEMIOLÓGICA (§2º do art. 6º). A vigilância SANITÁRIA está no §1º e é outra coisa: conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde e de intervir nos problemas sanitários decorrentes do meio ambiente, da produção e circulação de bens e da prestação de serviços de interesse da saúde. O atalho: sanitária olha para PRODUTOS, SERVIÇOS e AMBIENTE — é o que fiscaliza a clínica de fisioterapia; epidemiológica olha para DOENÇAS e AGRAVOS na população.",
      fundamento: "Lei 8.080/1990, art. 6º, §§ 1º e 2º.",
      macete: "Sanitária = produto/serviço/ambiente. Epidemiológica = doença na população.",
      erroComum: "Aceitar a definição por ser verdadeira — só que de outro instituto.",
      comoBancaPensa: "Apresenta uma definição legal correta sob o rótulo errado: troca-conceito pura."
    }
  },
  {
    id: "SUS-019", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 7º IX — descentralização",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.79,
    enunciado: "A descentralização político-administrativa do SUS, com direção única em cada esfera de governo, faz-se com ênfase na descentralização dos serviços para os estados, aos quais compete a execução direta das ações de atenção primária.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "para os estados",
    cognitivo: {
      motivo: "Cobrar que a ênfase da descentralização é municipal, não estadual.",
      palavraCritica: "estados",
    },
    comentario: {
      resolucao: "ERRADO. O art. 7º, IX, 'a', diz expressamente: ênfase na descentralização dos serviços para os MUNICÍPIOS. É coerente com o art. 18, que atribui ao município a execução das ações e serviços de saúde no seu território, e com o desenho da atenção primária, que é porta de entrada e portanto municipal. Aos estados cabe sobretudo a coordenação regional e o apoio técnico e financeiro (art. 17). O item trocou o ente.",
      fundamento: "Lei 8.080/1990, art. 7º, IX, 'a'; arts. 17 e 18.",
      macete: "Municipalização: a ênfase da descentralização é sempre no município.",
      erroComum: "Supor que o estado executa a atenção primária por ser ente intermediário.",
      comoBancaPensa: "Troca o ente federativo num dispositivo cujo restante está correto."
    }
  },
  {
    id: "SUS-020", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.080/1990", subassunto: "Art. 7º XIV — atendimento a mulheres vítimas de violência",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "Entre os princípios do SUS previstos na Lei nº 8.080/1990 consta a organização de atendimento público específico e especializado para mulheres e vítimas de violência doméstica em geral, que garanta, entre outros, atendimento e acompanhamento psicológico e cirurgias plásticas reparadoras.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "cirurgias plásticas reparadoras",
    cognitivo: {
      motivo: "Cobrar o inciso XIV, acréscimo recente e diretamente ligado ao campo do cargo.",
      palavraCritica: "cirurgias plásticas reparadoras",
    },
    comentario: {
      resolucao: "CERTO. É o inciso XIV do art. 7º, incluído pela Lei 12.845/2013 no bojo da política de atendimento a vítimas de violência sexual. A menção a cirurgias plásticas reparadoras costuma soar deslocada num rol de princípios e por isso é marcada como ERRADO — mas está na letra da lei. Dispositivo de interesse direto para a especialidade de Fisioterapia em saúde da mulher deste edital, e por isso com chance real de cair.",
      fundamento: "Lei 8.080/1990, art. 7º, XIV, incluído pela Lei 12.845/2013.",
      macete: "O art. 7º tem 14 incisos, e o último é o do atendimento à mulher vítima de violência.",
      erroComum: "Estranhar o detalhamento e negar por parecer específico demais para um rol de princípios.",
      comoBancaPensa: "Escolhe o inciso menos memorizado do artigo mais cobrado da lei."
    }
  },

  /* ---------- 4. Lei nº 8.142/1990 e controle social ---------- */
  {
    id: "SUS-021", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.142/1990 e controle social", subassunto: "Instâncias colegiadas",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.9,
    enunciado: "O SUS contará, em cada esfera de governo, sem prejuízo das funções do Poder Legislativo, com a Conferência de Saúde e o Conselho de Saúde como instâncias colegiadas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sem prejuízo das funções do Poder Legislativo",
    cognitivo: {
      motivo: "Fixar as duas instâncias de controle social, base de todo o tópico.",
      palavraCritica: "Conferência ... Conselho",
    },
    comentario: {
      resolucao: "CERTO. É o art. 1º da Lei 8.142. São exatamente DUAS instâncias colegiadas, e a ressalva 'sem prejuízo das funções do Poder Legislativo' deixa claro que o controle social não substitui a fiscalização parlamentar — elas convivem. A banca costuma inventar uma terceira instância (Comissão Intergestores, Ouvidoria, Mesa de Negociação) para ver quem aceita. As Comissões Intergestores existem, mas são instâncias de PACTUAÇÃO entre gestores, criadas pelo Decreto 7.508, não de controle social.",
      fundamento: "Lei 8.142/1990, art. 1º, I e II.",
      macete: "Controle social = 2 instâncias: Conferência e Conselho.",
      erroComum: "Incluir a Comissão Intergestores Tripartite como instância de controle social.",
      comoBancaPensa: "Acrescenta um órgão real do SUS, mas de outra natureza, ao rol legal."
    }
  },
  {
    id: "SUS-022", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.142/1990 e controle social", subassunto: "Periodicidade da Conferência de Saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.87,
    enunciado: "A Conferência de Saúde reunir-se-á a cada dois anos com a representação dos vários segmentos sociais, para avaliar a situação de saúde e propor as diretrizes para a formulação da política de saúde nos níveis correspondentes.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "a cada dois anos",
    cognitivo: {
      motivo: "Cobrar o prazo legal da Conferência, alvo preferencial de troca numérica.",
      palavraCritica: "dois anos",
    },
    comentario: {
      resolucao: "ERRADO. O §1º do art. 1º da Lei 8.142 fixa QUATRO anos, não dois. O resto do item é transcrição fiel, o que torna a alteração fácil de passar batido. Guarde os dois números do tópico, que a banca embaralha entre si: a Conferência é quadrienal; o Conselho de Saúde é permanente e, pela Resolução CNS 453/2012, reúne-se ordinariamente a cada mês. Vale lembrar ainda que a Conferência é convocada pelo Executivo ou, extraordinariamente, por ela mesma ou pelo Conselho de Saúde.",
      fundamento: "Lei 8.142/1990, art. 1º, § 1º.",
      macete: "Conferência: 4 em 4 anos. Conselho: permanente, reunião mensal.",
      erroComum: "Confundir com a periodicidade bienal de outros colegiados.",
      comoBancaPensa: "Transcreve o dispositivo inteiro e altera só o numeral — pseudo-literalidade."
    }
  },
  {
    id: "SUS-023", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.142/1990 e controle social", subassunto: "Natureza do Conselho de Saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.91,
    enunciado: "O Conselho de Saúde é órgão colegiado de caráter permanente e consultivo, cabendo-lhe opinar sobre a política de saúde da esfera correspondente, sem poder decisório sobre seus aspectos econômicos e financeiros.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "consultivo ... sem poder decisório",
    cognitivo: {
      motivo: "Cobrar a natureza deliberativa do Conselho, negada pelo item.",
      palavraCritica: "consultivo",
    },
    comentario: {
      resolucao: "ERRADO. O §2º do art. 1º da Lei 8.142 diz permanente e DELIBERATIVO — e acrescenta que o Conselho atua na formulação de estratégias e no controle da execução da política de saúde, INCLUSIVE NOS ASPECTOS ECONÔMICOS E FINANCEIROS. O item nega as duas coisas. A diferença é prática, não terminológica: órgão consultivo opina e o gestor decide; órgão deliberativo decide, e suas decisões são homologadas pelo chefe do Poder da esfera correspondente. Homologar não é escolher — é dar eficácia formal à decisão já tomada.",
      fundamento: "Lei 8.142/1990, art. 1º, § 2º.",
      macete: "Conselho DELIBERA, inclusive sobre dinheiro. O chefe do Executivo apenas homologa.",
      erroComum: "Tratar o Conselho como órgão de assessoramento do secretário de saúde.",
      comoBancaPensa: "Rebaixa a natureza do órgão — a troca de conceito mais cobrada do controle social."
    }
  },
  {
    id: "SUS-024", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.142/1990 e controle social", subassunto: "Paridade dos usuários",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.93,
    enunciado: "A representação dos usuários nos Conselhos de Saúde e nas Conferências de Saúde será paritária em relação ao conjunto dos demais segmentos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "paritária em relação ao conjunto dos demais segmentos",
    cognitivo: {
      motivo: "Fixar a paridade legal, que é de usuários contra TODOS os outros somados.",
      palavraCritica: "conjunto dos demais segmentos",
    },
    comentario: {
      resolucao: "CERTO. É o §4º do art. 1º da Lei 8.142. A expressão decisiva é 'em relação ao CONJUNTO dos demais segmentos': a paridade não é entre os quatro segmentos entre si, e sim entre os usuários de um lado e todos os outros somados do outro. Na prática isso significa 50% de usuários — como detalha a Resolução CNS 453/2012, que reparte os outros 50% em 25% de trabalhadores da saúde e 25% de governo e prestadores de serviço. Quem lê 'paritária' como 'divisão igual em quatro' erra a conta.",
      fundamento: "Lei 8.142/1990, art. 1º, § 4º; Resolução CNS 453/2012, Quarta Diretriz.",
      macete: "50% usuários · 25% trabalhadores · 25% governo e prestadores.",
      erroComum: "Interpretar paridade como 25% para cada um dos quatro segmentos.",
      comoBancaPensa: "Aposta na leitura intuitiva de 'paritária' como divisão igualitária entre todos."
    }
  },
  {
    id: "SUS-025", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.142/1990 e controle social", subassunto: "Art. 4º — requisitos para recebimento de recursos",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.77,
    enunciado: "Para receberem os recursos federais destinados à cobertura das ações e serviços de saúde, os municípios, os estados e o Distrito Federal deverão contar, entre outros requisitos, com fundo de saúde, conselho de saúde, plano de saúde e relatórios de gestão.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "fundo de saúde, conselho de saúde, plano de saúde",
    cognitivo: {
      motivo: "Cobrar os requisitos do art. 4º, que condicionam o repasse à existência de controle social.",
      palavraCritica: "conselho de saúde",
    },
    comentario: {
      resolucao: "CERTO. É o art. 4º da Lei 8.142, que lista cinco requisitos: fundo de saúde; conselho de saúde; plano de saúde; relatórios de gestão; contrapartida de recursos no orçamento; e comissão de elaboração do plano de carreira, cargos e salários. O desenho é deliberado — sem conselho instalado, não entra dinheiro federal —, o que transformou o controle social em condição de financiamento e não em recomendação. O parágrafo único prevê que o descumprimento leva os recursos a serem administrados pelos estados ou pela União.",
      fundamento: "Lei 8.142/1990, art. 4º e parágrafo único.",
      macete: "Sem conselho e sem fundo de saúde, não há repasse federal.",
      erroComum: "Supor que o repasse depende apenas de critérios populacionais e epidemiológicos.",
      comoBancaPensa: "Cobra a amarração entre controle social e financiamento, que muitos estudam separado."
    }
  },
  {
    id: "SUS-026", disciplina: "Legislação Aplicada ao SUS", assunto: "Lei 8.142/1990 e controle social", subassunto: "Composição do Conselho de Saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.81,
    enunciado: "O Conselho de Saúde é composto por representantes do governo, dos prestadores de serviço e dos profissionais de saúde, sendo vedada a participação de usuários em razão da natureza técnica das deliberações.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "vedada a participação de usuários",
    cognitivo: {
      motivo: "Cobrar que o usuário é o segmento majoritário, não excluído.",
      palavraCritica: "vedada a participação de usuários",
    },
    comentario: {
      resolucao: "ERRADO. O §2º do art. 1º da Lei 8.142 inclui os USUÁRIOS entre os quatro segmentos do Conselho — e o §4º ainda garante a eles representação paritária ao conjunto dos demais, ou seja, 50% das vagas. O item não apenas exclui quem a lei inclui: exclui justamente o segmento majoritário, e o faz invocando um pretexto — a tecnicidade das deliberações — que inverte a razão de ser do controle social. Participação da comunidade é diretriz constitucional (CF, art. 198, III), não concessão administrativa.",
      fundamento: "Lei 8.142/1990, art. 1º, §§ 2º e 4º; CF/88, art. 198, III.",
      macete: "Os quatro segmentos: governo, prestadores, trabalhadores e USUÁRIOS.",
      erroComum: "Aceitar a exclusão por parecer justificada tecnicamente.",
      comoBancaPensa: "Oferece um motivo plausível para uma restrição que a lei não faz."
    }
  },

  /* ---------- 5. Resolução nº 453/2012 do CNS ---------- */
  {
    id: "SUS-027", disciplina: "Legislação Aplicada ao SUS", assunto: "Resolução CNS 453/2012", subassunto: "Composição paritária detalhada",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "Conforme a Resolução nº 453/2012 do Conselho Nacional de Saúde, a representação nos Conselhos de Saúde observará a proporção de 50% de entidades e movimentos representativos de usuários, 25% de entidades representativas dos trabalhadores da área de saúde e 25% de representação de governo e prestadores de serviços privados conveniados ou sem fins lucrativos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "50% ... 25% ... 25%",
    cognitivo: {
      motivo: "Fixar a proporção exata que operacionaliza a paridade da Lei 8.142.",
      palavraCritica: "50%",
    },
    comentario: {
      resolucao: "CERTO. É a Quarta Diretriz da Resolução CNS 453/2012, que detalha o que a Lei 8.142 enuncia de forma aberta no §4º do art. 1º. A resolução é o instrumento que converte 'paridade em relação ao conjunto dos demais segmentos' numa regra aplicável: 50/25/25. Note que governo e prestadores dividem um único quarto — não são segmentos separados de 25% cada, e essa é a repartição que a banca costuma alterar para 25/25/25/25.",
      fundamento: "Resolução CNS 453/2012, Quarta Diretriz; Lei 8.142/1990, art. 1º, § 4º.",
      macete: "50 usuários / 25 trabalhadores / 25 governo + prestadores (juntos).",
      erroComum: "Separar governo e prestadores em dois blocos de 25%.",
      comoBancaPensa: "Cobra o detalhamento infralegal que a lei deixou em aberto."
    }
  },
  {
    id: "SUS-028", disciplina: "Legislação Aplicada ao SUS", assunto: "Resolução CNS 453/2012", subassunto: "Presidência do Conselho de Saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.79,
    enunciado: "Conforme a Resolução nº 453/2012 do Conselho Nacional de Saúde, a presidência do Conselho de Saúde cabe, por força de disposição regulamentar, ao secretário de saúde da respectiva esfera de governo, na condição de membro nato.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "ao secretário de saúde ... membro nato",
    cognitivo: {
      motivo: "Cobrar a mudança introduzida em 2012: presidência eletiva, não nata.",
      palavraCritica: "membro nato",
    },
    comentario: {
      resolucao: "ERRADO. A Resolução 453/2012 determina que o Conselho de Saúde ELEJA seu presidente entre os conselheiros, em reunião plenária. A regra existe para dar sentido ao controle social: se o gestor fiscalizado presidisse o órgão que o fiscaliza, o Conselho perderia a independência. É justamente o modelo anterior, ainda presente na memória de muitos municípios, que a resolução veio afastar — e por isso a banca cobra a versão antiga como pegadinha. Nada impede que o secretário seja conselheiro; o que não existe é presidência automática.",
      fundamento: "Resolução CNS 453/2012, Quinta Diretriz.",
      macete: "Presidente do Conselho é ELEITO pelos pares, não é o secretário por inércia.",
      erroComum: "Reproduzir a prática anterior a 2012, ainda comum na realidade de muitos conselhos.",
      comoBancaPensa: "Oferece a regra revogada, que continua parecendo natural para quem conhece a prática."
    }
  },
  {
    id: "SUS-029", disciplina: "Legislação Aplicada ao SUS", assunto: "Resolução CNS 453/2012", subassunto: "Natureza e vinculação do Conselho",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.73,
    enunciado: "O Conselho de Saúde é órgão colegiado, deliberativo e permanente do SUS em cada esfera de governo, integrante da estrutura organizacional do Conselho Nacional de Saúde, das secretarias de saúde dos estados, do Distrito Federal e dos municípios.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "integrante da estrutura organizacional",
    cognitivo: {
      motivo: "Fixar que o Conselho integra a estrutura do órgão gestor, sem perder autonomia deliberativa.",
      palavraCritica: "integrante da estrutura organizacional",
    },
    comentario: {
      resolucao: "CERTO. É a Primeira Diretriz da Resolução 453/2012. O ponto que parece contraditório e não é: o Conselho INTEGRA a estrutura administrativa do Ministério ou da Secretaria — de onde vêm sua dotação orçamentária e sua estrutura de apoio —, mas isso não o subordina ao gestor quanto ao mérito das deliberações. Vinculação administrativa e independência decisória convivem, e é por isso que a mesma resolução exige presidência eleita e dotação própria: são as garantias que impedem a vinculação de virar sujeição.",
      fundamento: "Resolução CNS 453/2012, Primeira e Terceira Diretrizes.",
      macete: "Está na estrutura do gestor, mas não obedece ao gestor.",
      erroComum: "Negar por supor que integrar a estrutura significaria subordinação hierárquica.",
      comoBancaPensa: "Transcreve dispositivo cuja redação soa incoerente com a autonomia do órgão."
    }
  },
  {
    id: "SUS-030", disciplina: "Legislação Aplicada ao SUS", assunto: "Resolução CNS 453/2012", subassunto: "Homologação das deliberações",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "As deliberações do Conselho de Saúde somente produzirão efeitos se o chefe do poder legalmente constituído na esfera correspondente concordar com o seu mérito, podendo rejeitá-las discricionariamente.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "concordar com o seu mérito ... rejeitá-las discricionariamente",
    cognitivo: {
      motivo: "Distinguir homologação de aprovação de mérito.",
      palavraCritica: "rejeitá-las discricionariamente",
    },
    comentario: {
      resolucao: "ERRADO. A Lei 8.142 fala em decisões HOMOLOGADAS pelo chefe do poder legalmente constituído, e homologar é ato de conferência formal — verifica-se legalidade e regularidade, não conveniência. Reconhecer poder de rejeição por discordância de mérito esvaziaria o caráter deliberativo do §2º do art. 1º e reduziria o Conselho a órgão consultivo, que é exatamente o que a lei afastou. A Resolução 453/2012 reforça isso ao prever prazo para homologação e a atuação do Ministério Público diante da omissão do gestor.",
      fundamento: "Lei 8.142/1990, art. 1º, § 2º; Resolução CNS 453/2012, Quinta Diretriz.",
      macete: "Homologar é conferir a forma, não escolher se concorda.",
      erroComum: "Ler homologação como aprovação discricionária do gestor.",
      comoBancaPensa: "Explora um termo técnico do direito administrativo dentro do tema de controle social."
    }
  },

  /* ---------- 6. Decreto nº 7.508/2011 ---------- */
  {
    id: "SUS-031", disciplina: "Legislação Aplicada ao SUS", assunto: "Decreto 7.508/2011", subassunto: "Região de Saúde — conceito",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.84,
    enunciado: "Região de Saúde é o espaço geográfico contínuo constituído por agrupamentos de municípios limítrofes, delimitado a partir de identidades culturais, econômicas e sociais e de redes de comunicação e infraestrutura de transportes compartilhados, com a finalidade de integrar a organização, o planejamento e a execução de ações e serviços de saúde.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "municípios limítrofes ... identidades culturais, econômicas e sociais",
    cognitivo: {
      motivo: "Fixar a definição de Região de Saúde, unidade básica de organização do Decreto 7.508.",
      palavraCritica: "limítrofes",
    },
    comentario: {
      resolucao: "CERTO. É o art. 2º, I, do Decreto 7.508/2011. Duas exigências cumulativas costumam ser suprimidas em item adulterado: a contiguidade geográfica ('espaço contínuo', 'municípios limítrofes') e a identidade socioeconômica e cultural. Não basta juntar municípios por conveniência administrativa. Quem institui as Regiões de Saúde é o ESTADO, em articulação com os municípios e pactuação na CIB — item que atribua essa instituição à União está errado.",
      fundamento: "Decreto 7.508/2011, art. 2º, I, e art. 4º.",
      macete: "Região de Saúde: contígua, com identidade comum, instituída pelo Estado.",
      erroComum: "Admitir região formada por municípios não limítrofes.",
      comoBancaPensa: "Definição longa: suprime um dos requisitos e conta com a leitura por reconhecimento."
    }
  },
  {
    id: "SUS-032", disciplina: "Legislação Aplicada ao SUS", assunto: "Decreto 7.508/2011", subassunto: "Ações mínimas da Região de Saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.82,
    enunciado: "Para ser instituída, a Região de Saúde deve conter, no mínimo, ações e serviços de atenção primária, urgência e emergência, atenção psicossocial, atenção ambulatorial especializada e hospitalar, e vigilância em saúde.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "atenção psicossocial ... vigilância em saúde",
    cognitivo: {
      motivo: "Cobrar o rol mínimo do art. 5º, que a banca reduz ou amplia.",
      palavraCritica: "no mínimo",
    },
    comentario: {
      resolucao: "CERTO. É o art. 5º do Decreto 7.508, com os cinco itens exatos. A atenção psicossocial é a mais esquecida da lista e por isso a mais retirada em item adulterado. Repare que é piso, não teto — 'no mínimo' —, então a região pode ofertar mais. E o rol tem consequência prática: uma região que não consiga ofertar os cinco não pode ser instituída isoladamente, o que empurra os municípios à pactuação regional em vez da solução isolada.",
      fundamento: "Decreto 7.508/2011, art. 5º, I a V.",
      macete: "Cinco mínimos: primária, urgência, psicossocial, especializada/hospitalar, vigilância.",
      erroComum: "Omitir a atenção psicossocial do rol mínimo.",
      comoBancaPensa: "Lista fechada de cinco itens: terreno natural para supressão de um deles."
    }
  },
  {
    id: "SUS-033", disciplina: "Legislação Aplicada ao SUS", assunto: "Decreto 7.508/2011", subassunto: "Portas de Entrada do SUS",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.86,
    enunciado: "São Portas de Entrada às ações e aos serviços de saúde nas Redes de Atenção à Saúde os serviços de atenção primária, de atenção de urgência e emergência, de atenção psicossocial, os serviços especiais de acesso aberto e os serviços de atenção ambulatorial especializada.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "serviços de atenção ambulatorial especializada",
    cognitivo: {
      motivo: "Cobrar que a atenção especializada NÃO é porta de entrada — é acesso referenciado.",
      palavraCritica: "atenção ambulatorial especializada",
    },
    comentario: {
      resolucao: "ERRADO. O art. 9º do Decreto 7.508 lista QUATRO portas de entrada: atenção primária, urgência e emergência, atenção psicossocial e serviços especiais de acesso aberto. A atenção ambulatorial especializada e a hospitalar não são porta — o acesso a elas é REFERENCIADO, ou seja, depende de encaminhamento a partir das portas (art. 10). A distinção é o coração do modelo: a atenção primária é ordenadora do cuidado, e permitir entrada direta no especializado desmontaria essa ordenação. Para o fisioterapeuta, é o que explica o fluxo até a reabilitação especializada.",
      fundamento: "Decreto 7.508/2011, arts. 9º e 10.",
      macete: "Quatro portas. Especializado e hospital entram por referência, não por porta.",
      erroComum: "Incluir o ambulatório especializado entre as portas por ser ambulatorial.",
      comoBancaPensa: "Acrescenta ao rol um serviço real do SUS que ocupa posição diferente no fluxo."
    }
  },
  {
    id: "SUS-034", disciplina: "Legislação Aplicada ao SUS", assunto: "Decreto 7.508/2011", subassunto: "RENASES e RENAME",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.83,
    enunciado: "A Relação Nacional de Ações e Serviços de Saúde (RENASES) compreende todos os medicamentos que o SUS disponibiliza ao usuário, ao passo que a Relação Nacional de Medicamentos Essenciais (RENAME) reúne as ações e os serviços ofertados para atendimento da integralidade da assistência.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "RENASES ... medicamentos",
    cognitivo: {
      motivo: "Separar duas siglas do mesmo decreto que a banca inverte sistematicamente.",
      palavraCritica: "medicamentos",
    },
    comentario: {
      resolucao: "ERRADO. As definições estão trocadas. RENASES é de AÇÕES E SERVIÇOS (art. 21); RENAME é de MEDICAMENTOS (art. 25). A própria sigla resolve: o 'ASES' de RENASES vem de Ações e Serviços; o 'ME' de RENAME, de Medicamentos Essenciais. Guarde também que a União dispõe sobre a RENASES a cada dois anos e que estados, DF e municípios podem adotar relações complementares, desde que financiadas com recursos próprios — nunca relações mais restritivas que a nacional.",
      fundamento: "Decreto 7.508/2011, arts. 21 a 26.",
      macete: "RENASES = Ações e SErviços. RENAME = MEdicamentos.",
      erroComum: "Trocar as siglas por serem graficamente parecidas.",
      comoBancaPensa: "Duas siglas quase idênticas do mesmo decreto: inversão de definições clássica."
    }
  },
  {
    id: "SUS-035", disciplina: "Legislação Aplicada ao SUS", assunto: "Decreto 7.508/2011", subassunto: "Assistência farmacêutica — requisitos de acesso",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.74,
    enunciado: "O acesso universal e igualitário à assistência farmacêutica no SUS pressupõe, entre outros requisitos, que o medicamento tenha sido prescrito por profissional de saúde no exercício regular de suas funções no SUS e que a prescrição esteja em conformidade com a RENAME e os protocolos clínicos e diretrizes terapêuticas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "no exercício regular de suas funções no SUS",
    cognitivo: {
      motivo: "Cobrar os requisitos cumulativos do art. 28, que condicionam a dispensação.",
      palavraCritica: "no exercício regular de suas funções no SUS",
    },
    comentario: {
      resolucao: "CERTO. São incisos do art. 28 do Decreto 7.508, que exige quatro condições cumulativas: estar o usuário assistido por ações e serviços do SUS; prescrição por profissional em exercício regular no SUS; conformidade com a RENAME e os protocolos; e dispensação em unidade indicada pela direção do SUS. O requisito da prescrição feita dentro do SUS é o mais cobrado, porque contraria a intuição de que qualquer receita serviria. Note que 'universal e igualitário' convive com requisitos — eles organizam o acesso, não o restringem por condição pessoal do usuário.",
      fundamento: "Decreto 7.508/2011, art. 28, I a IV.",
      macete: "Receita de fora do SUS não gera direito à dispensação pela via administrativa.",
      erroComum: "Achar que exigir prescrição do SUS violaria a universalidade.",
      comoBancaPensa: "Testa se o candidato aceita requisitos formais sem confundi-los com restrição de direito."
    }
  },

  /* ---------- 7. Determinantes sociais e sistemas de informação ---------- */
  {
    id: "SUS-036", disciplina: "Legislação Aplicada ao SUS", assunto: "Determinantes sociais da saúde", subassunto: "Modelo de Dahlgren e Whitehead",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.78,
    enunciado: "No modelo de determinantes sociais da saúde de Dahlgren e Whitehead, os fatores são dispostos em camadas, partindo dos determinantes individuais — como idade, sexo e fatores hereditários — até as condições socioeconômicas, culturais e ambientais gerais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "camadas ... até as condições socioeconômicas, culturais e ambientais gerais",
    cognitivo: {
      motivo: "Fixar a estrutura em camadas do modelo mais cobrado de determinantes sociais.",
      palavraCritica: "camadas",
    },
    comentario: {
      resolucao: "CERTO. O modelo organiza os determinantes em cinco camadas concêntricas: no núcleo, os fatores individuais não modificáveis (idade, sexo, herança genética); depois estilos de vida; redes sociais e comunitárias; condições de vida e trabalho (habitação, emprego, educação, saneamento, serviços de saúde); e, na camada externa, as condições socioeconômicas, culturais e ambientais gerais. A lógica é de proximidade: quanto mais externa a camada, mais estrutural o determinante e menos ele depende de escolha individual — que é justamente o argumento contra reduzir promoção da saúde a mudança de comportamento.",
      fundamento: "Dahlgren e Whitehead (1991); Comissão Nacional sobre Determinantes Sociais da Saúde (CNDSS, 2008).",
      macete: "Do centro (indivíduo) para fora (estrutura social) — cinco camadas.",
      erroComum: "Inverter a ordem, colocando o macro no núcleo.",
      comoBancaPensa: "Modelo gráfico consagrado: cobra a ordem das camadas em vez do conteúdo de cada uma."
    }
  },
  {
    id: "SUS-037", disciplina: "Legislação Aplicada ao SUS", assunto: "Determinantes sociais da saúde", subassunto: "Iniquidades em saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.72,
    enunciado: "As iniquidades em saúde correspondem a quaisquer diferenças observadas no estado de saúde entre grupos populacionais, independentemente de serem evitáveis ou de decorrerem de circunstâncias injustas.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "quaisquer diferenças ... independentemente",
    cognitivo: {
      motivo: "Separar desigualdade (diferença) de iniquidade (diferença evitável e injusta).",
      palavraCritica: "quaisquer diferenças",
    },
    comentario: {
      resolucao: "ERRADO. O item define DESIGUALDADE, não iniquidade. A distinção é conceitual e tem consequência prática: nem toda diferença é iniquidade — mulheres vivem mais que homens em quase todo o mundo por fatores biológicos, e isso é desigualdade sem injustiça. Iniquidade é o subconjunto das desigualdades que são EVITÁVEIS, DESNECESSÁRIAS e INJUSTAS, porque decorrem da posição social do grupo. É por isso que a política pública mira as iniquidades: são as diferenças sobre as quais a ação social pode e deve incidir.",
      fundamento: "Whitehead (1992); Relatório Final da CNDSS (2008); CSDH/OMS (2008).",
      macete: "Desigualdade é qualquer diferença; iniquidade é a diferença injusta e evitável.",
      erroComum: "Tratar os dois termos como sinônimos.",
      comoBancaPensa: "Amplia o conceito com 'quaisquer' e 'independentemente' para apagar a nota distintiva."
    }
  },
  {
    id: "SUS-038", disciplina: "Legislação Aplicada ao SUS", assunto: "Sistemas de informação em saúde", subassunto: "SIM e SINASC",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "O Sistema de Informações sobre Mortalidade (SIM) tem como instrumento de coleta a Declaração de Nascido Vivo, ao passo que o Sistema de Informações sobre Nascidos Vivos (SINASC) utiliza a Declaração de Óbito.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "SIM ... Declaração de Nascido Vivo",
    cognitivo: {
      motivo: "Cobrar a correspondência entre sistema e documento-base.",
      palavraCritica: "Declaração de Nascido Vivo",
    },
    comentario: {
      resolucao: "ERRADO. Os documentos estão invertidos: o SIM se alimenta da Declaração de Óbito (DO) e o SINASC, da Declaração de Nascido Vivo (DN). O próprio nome resolve — Mortalidade combina com óbito; Nascidos Vivos, com nascimento. Juntos, esses dois sistemas sustentam os indicadores mais usados na avaliação de serviços de saúde da mulher e da criança, como a mortalidade materna e a mortalidade infantil, que exigem exatamente o cruzamento entre óbitos e nascidos vivos.",
      fundamento: "Portaria GM/MS nº 116/2009 (SIM e SINASC); DATASUS.",
      macete: "SIM ← Declaração de Óbito. SINASC ← Declaração de Nascido Vivo.",
      erroComum: "Trocar os documentos por decorar as siglas sem associá-las ao evento.",
      comoBancaPensa: "Inverte dois pares óbvios contando com a memorização mecânica das siglas."
    }
  },
  {
    id: "SUS-039", disciplina: "Legislação Aplicada ao SUS", assunto: "Sistemas de informação em saúde", subassunto: "SINAN — notificação compulsória",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.81,
    enunciado: "O Sistema de Informação de Agravos de Notificação (SINAN) tem por finalidade o registro e o processamento dos dados sobre agravos de notificação compulsória, e a violência doméstica, sexual e outras violências integram a lista nacional de notificação compulsória.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "violência doméstica, sexual e outras violências",
    cognitivo: {
      motivo: "Cobrar que a notificação compulsória não se limita a doenças transmissíveis.",
      palavraCritica: "violência doméstica, sexual",
    },
    comentario: {
      resolucao: "CERTO. A violência doméstica, sexual e outras violências integram a Lista Nacional de Notificação Compulsória, e a notificação é UNIVERSAL — obrigatória para todos os serviços de saúde, públicos e privados, independentemente de confirmação e sem depender de autorização da vítima. É um dos pontos em que a banca erra o candidato: notificar não é denunciar à polícia, é alimentar a vigilância epidemiológica, e a obrigação recai sobre o profissional de saúde que atende. Diretamente aplicável ao atendimento em saúde da mulher.",
      fundamento: "Portaria GM/MS nº 1.271/2014 e atualizações (Lista Nacional de Notificação Compulsória); Lei 10.778/2003.",
      macete: "SINAN não é só doença: violência também é agravo de notificação compulsória.",
      erroComum: "Restringir a notificação compulsória a doenças infecciosas.",
      comoBancaPensa: "Cobra o alcance do conceito de 'agravo', que muitos leem como sinônimo de doença."
    }
  },
  {
    id: "SUS-040", disciplina: "Legislação Aplicada ao SUS", assunto: "Sistemas de informação em saúde", subassunto: "CNES e SIA/SIH",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.7,
    enunciado: "O Cadastro Nacional de Estabelecimentos de Saúde (CNES) registra a produção ambulatorial e hospitalar do SUS, sendo alimentado pelas Autorizações de Internação Hospitalar e pelos boletins de produção ambulatorial.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "registra a produção ambulatorial e hospitalar",
    cognitivo: {
      motivo: "Separar cadastro de estrutura (CNES) de registro de produção (SIA e SIH).",
      palavraCritica: "produção",
    },
    comentario: {
      resolucao: "ERRADO. O CNES cadastra ESTRUTURA — estabelecimentos, profissionais, equipamentos, leitos e serviços habilitados. Quem registra PRODUÇÃO são outros dois: o SIH/SUS, alimentado pelas Autorizações de Internação Hospitalar (AIH), e o SIA/SUS, pelos boletins de produção ambulatorial. A distinção é a que separa 'o que existe' de 'o que foi feito', e ela tem efeito prático: sem o profissional cadastrado no CNES do estabelecimento, a produção que ele realizar não é faturável no SIA.",
      fundamento: "Portaria SAS/MS nº 376/2000 e atualizações (CNES); sistemas SIA/SUS e SIH/SUS — DATASUS.",
      macete: "CNES = o que existe (estrutura). SIA e SIH = o que foi feito (produção).",
      erroComum: "Tratar o CNES como sistema de faturamento.",
      comoBancaPensa: "Atribui a um sistema a função de outro dentro da mesma família de sistemas."
    }
  },
];

QUESTOES.push(...QUESTOES_SESAUAL_LOTE59);
