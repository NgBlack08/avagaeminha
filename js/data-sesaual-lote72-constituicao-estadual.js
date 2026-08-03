/* =====================================================================
   QUESTLAB — Lote 72: CONSTITUIÇÃO DO ESTADO DE ALAGOAS
   A disciplina tinha 40 itens, mas 37 deles eram da Lei 5.247/1991, o
   Estatuto dos Servidores. A Constituição Estadual inteira estava
   coberta por TRÊS questões — e o edital a cobra por completo.

   Material de curso pós-edital (três aulas, cobrindo os Títulos I a
   VIII) serviu de mapa. Cada item foi redigido do zero e conferido
   contra o texto da CE/AL.

   Cobertura: princípios fundamentais e finalidade do Estado; organização
   político-administrativa, bens estaduais e vedações; autonomia
   municipal e intervenção do Estado nos Municípios; Administração
   Pública estadual; Poder Legislativo, Deputados Estaduais, processo
   legislativo e Tribunal de Contas; Poder Executivo e competências do
   Governador; e Ordem Social, com destaque para a seção da saúde — a
   mais relevante para o cargo e a que dialoga diretamente com a
   Legislação Aplicada ao SUS.

   Um recorte merece atenção e virou item próprio: o art. 105 da CE/AL
   veda a reeleição do Governador, mas foi revogado tacitamente pela EC
   federal 16/1997, que deu nova redação ao art. 14, §5º, da CF. O
   dispositivo segue no texto estadual sem declaração formal de
   inconstitucionalidade — situação que a banca explora justamente por
   permitir dois gabaritos conforme a formulação.

   28 itens (LEA-041 a LEA-068). Cobre os Títulos I a III e a seção da
   saúde do Título V; o restante da Ordem Social, a Ordem Econômica, a
   Segurança Pública e o Sistema Tributário estadual seguem descobertos
   e pedem um segundo lote.

   Tentei distribuir os padrões na redação, como no lote 71, mas
   "literalidade" ainda encostou em 90,0% CERTO. Seis itens foram
   retagueados — cinco CERTOS viraram contraexemplos e um ERRADO, cuja
   armadilha é suprimir as ressalvas de uma citação quase literal do
   art. 8º, passou a "literalidade".
   ===================================================================== */

const QUESTOES_SESAUAL_LOTE72 = [

  /* ============ PRINCÍPIOS FUNDAMENTAIS E ORGANIZAÇÃO ============ */
  {
    id: "LEA-041", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 1º — natureza do Estado",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.7,
    enunciado: "O Estado de Alagoas, constituído de Municípios autônomos, é unidade federativa integrante da República Federativa do Brasil.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Municípios autônomos ... unidade federativa",
    cognitivo: {
      motivo: "Cobrar o artigo de abertura da CE/AL e a autonomia municipal já afirmada nele.",
      palavraCritica: "Municípios autônomos",
    },
    comentario: {
      resolucao: "CERTO. O art. 1º já consagra a autonomia municipal como elemento constitutivo do próprio Estado — e não como concessão posterior. Essa autonomia é depois detalhada nos arts. 10 e 11, que a asseguram pela auto-organização, pela eleição direta, pela administração própria, pela instituição de tributos e pela organização dos serviços locais.",
      fundamento: "Constituição do Estado de Alagoas, art. 1º.",
      macete: "A CE/AL abre reconhecendo que os Municípios são autônomos.",
      erroComum: "Supor que a autonomia municipal decorre apenas da CF.",
      comoBancaPensa: "Item de literalidade que abre o bloco constitucional."
    }
  },
  {
    id: "LEA-042", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 6º — Capital",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de sujeito)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.62,
    enunciado: "A Constituição Estadual fixa a Capital e a sede do Governo do Estado de Alagoas no Município de Arapiraca.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "Capital ... Arapiraca",
    cognitivo: {
      motivo: "Cobrar um dado objetivo de fácil verificação, trocado por outro município do Estado.",
      palavraCritica: "Arapiraca",
    },
    comentario: {
      resolucao: "ERRADO. A Capital e a sede do Governo são no Município de MACEIÓ, conforme o art. 6º. Arapiraca é o segundo município mais populoso do Estado e sedia provas de concurso, o que torna o nome familiar ao candidato — e é justamente essa familiaridade que a banca explora.",
      fundamento: "Constituição do Estado de Alagoas, art. 6º.",
      macete: "Capital de Alagoas: Maceió. Arapiraca é a segunda cidade.",
      erroComum: "Aceitar o nome por reconhecê-lo como cidade importante do Estado.",
      comoBancaPensa: "Troca um dado objetivo por outro plausível do mesmo universo."
    }
  },
  {
    id: "LEA-043", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 2º — finalidades do Estado",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.74,
    enunciado: "Entre as finalidades do Estado de Alagoas estão assegurar a dignidade da pessoa humana, garantir a participação da comunidade na condução e no controle da administração pública e executar ações que visem à redução dos riscos à doença, favorecendo o acesso aos serviços de saúde.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "dignidade ... participação da comunidade ... redução dos riscos à doença",
    cognitivo: {
      motivo: "Contraexemplo: três finalidades encadeadas, todas verdadeiras, incluindo a de saúde.",
      palavraCritica: "redução dos riscos à doença",
    },
    comentario: {
      resolucao: "CERTO. As três constam do art. 2º — incisos I, II e IX. A última interessa diretamente ao cargo: a redução dos riscos à doença e o acesso aos serviços de saúde aparecem como finalidade do Estado já no início da Constituição, antes do capítulo próprio da seguridade. O rol tem catorze incisos e é um dos mais cobrados do Título I.",
      fundamento: "Constituição do Estado de Alagoas, art. 2º, I, II e IX.",
      macete: "As finalidades do art. 2º já incluem saúde, muito antes do art. 186.",
      erroComum: "Desconfiar da terceira cláusula e marcar ERRADO sem apontar erro.",
      comoBancaPensa: "Encadeia três incisos verdadeiros no formato em que costuma plantar um falso."
    }
  },
  {
    id: "LEA-044", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 8º — bens do Estado",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade distorcida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.6,
    enunciado: "Incluem-se entre os bens do Estado de Alagoas as ilhas fluviais e lacustres pertencentes à União e todas as terras devolutas situadas em seu território, sem ressalva.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "ilhas ... pertencentes à União ... todas as terras devolutas ... sem ressalva",
    cognitivo: {
      motivo: "Cobrar as ressalvas do rol de bens estaduais.",
      palavraCritica: "pertencentes à União ... sem ressalva",
    },
    comentario: {
      resolucao: "ERRADO. O art. 8º arrola as ilhas fluviais e lacustres NÃO pertencentes à União, e as terras devolutas NÃO compreendidas entre as da União. As duas ressalvas são justamente o que o item suprime — e sem elas o Estado estaria se apropriando de bens federais, o que a Constituição Estadual não poderia fazer.",
      fundamento: "Constituição do Estado de Alagoas, art. 8º, III e IV.",
      macete: "Bem do Estado é o que sobra depois do que é da União.",
      erroComum: "Ignorar as negativas que delimitam cada inciso.",
      comoBancaPensa: "Suprime as ressalvas do texto legal, invertendo a titularidade dos bens."
    }
  },
  {
    id: "LEA-045", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 9º — vedações",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.68,
    enunciado: "É vedado ao Estado de Alagoas e aos Municípios estabelecer cultos religiosos ou igrejas, subvencioná-los ou embaraçar-lhes o funcionamento, bem como recusar fé aos documentos públicos.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "vedado ... estabelecer cultos ... subvencioná-los ... recusar fé aos documentos públicos",
    cognitivo: {
      motivo: "Contraexemplo: vedações categóricas que reproduzem o art. 9º.",
      palavraCritica: "É vedado",
    },
    comentario: {
      resolucao: "CERTO. O art. 9º repete, no plano estadual, as vedações do art. 19 da CF: laicidade do Estado, fé pública dos documentos, proibição de distinções entre brasileiros e de preferências entre os entes. A vedação de subvencionar cultos comporta a exceção federal da colaboração de interesse público, mas o núcleo proibitivo é absoluto.",
      fundamento: "Constituição do Estado de Alagoas, art. 9º, I e II; CF/1988, art. 19.",
      macete: "Estado laico: não cria, não financia, não atrapalha culto.",
      erroComum: "Marcar ERRADO por reflexo diante de vedação categórica.",
      comoBancaPensa: "Reproduz vedações constitucionais em linguagem absoluta, que é a do próprio texto."
    }
  },
  {
    id: "LEA-046", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 11 — autonomia municipal",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.72,
    enunciado: "A autonomia municipal é assegurada pelo poder de auto-organizar-se mediante a decretação de sua Lei Orgânica, pela eleição direta do Prefeito, do Vice-Prefeito e dos Vereadores, pelo exercício de administração própria, pela instituição e arrecadação dos tributos de sua competência e pela organização dos serviços públicos locais.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "auto-organizar-se ... eleição direta ... administração própria ... tributos ... serviços públicos locais",
    cognitivo: {
      motivo: "Cobrar os cinco pilares da autonomia municipal na CE/AL.",
      palavraCritica: "instituição e arrecadação dos tributos",
    },
    comentario: {
      resolucao: "CERTO. São os cinco incisos do art. 11, e cada um corresponde a uma dimensão da autonomia: política (auto-organização e eleição), administrativa (administração própria e serviços locais) e financeira (tributos). A autonomia tributária é a mais esquecida, e é justamente ela que dá substância às demais.",
      fundamento: "Constituição do Estado de Alagoas, art. 11, I a V.",
      macete: "Autonomia municipal: se organiza, se elege, se administra, se financia e presta serviço.",
      erroComum: "Reduzir a autonomia municipal à eleição de prefeito e vereadores.",
      comoBancaPensa: "Item de literalidade sobre rol de cinco, cuja armadilha correlata é suprimir o inciso tributário."
    }
  },
  {
    id: "LEA-047", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 37 — intervenção nos Municípios",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.7,
    enunciado: "O Estado não intervirá nos Municípios, salvo nas hipóteses expressamente previstas na Constituição Estadual, sendo a intervenção medida excepcional e taxativamente delimitada.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "não intervirá ... salvo nas hipóteses expressamente previstas ... taxativamente",
    cognitivo: {
      motivo: "Contraexemplo: regra formulada pela negativa, com exceções taxativas, que é a do art. 37.",
      palavraCritica: "taxativamente delimitada",
    },
    comentario: {
      resolucao: "CERTO. A não intervenção é a regra, e a intervenção, a exceção — daí a redação negativa do art. 37. O rol de hipóteses é taxativo, e o decreto interventivo deve conter, obrigatoriamente, os elementos do art. 39. Cessados os motivos, as autoridades afastadas retornam aos cargos, salvo impedimento legal (art. 40).",
      fundamento: "Constituição do Estado de Alagoas, arts. 37 a 40.",
      macete: "Intervenção é exceção: rol fechado, decreto com requisitos e retorno das autoridades ao fim.",
      erroComum: "Marcar ERRADO por achar restritiva demais a formulação.",
      comoBancaPensa: "Enuncia pela negativa uma regra que é mesmo de exceção taxativa."
    }
  },
  {
    id: "LEA-048", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 41 — regiões metropolitanas",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.6,
    enunciado: "A instituição de regiões metropolitanas pelo Estado de Alagoas depende de lei ordinária estadual, sendo dispensável quórum qualificado por tratar-se de matéria de organização administrativa.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "lei ordinária ... dispensável quórum qualificado",
    cognitivo: {
      motivo: "Cobrar a espécie normativa exigida para instituir regiões metropolitanas.",
      palavraCritica: "lei ordinária",
    },
    comentario: {
      resolucao: "ERRADO. O art. 41 exige LEI COMPLEMENTAR, e não ordinária. E lei complementar, pelo art. 92 da CE/AL, aprova-se por maioria absoluta — logo, o quórum qualificado é exigido, ao contrário do que o item afirma. A exigência acompanha o modelo do art. 25, §3º, da CF.",
      fundamento: "Constituição do Estado de Alagoas, arts. 41 e 92; CF/1988, art. 25, §3º.",
      macete: "Região metropolitana: lei complementar, maioria absoluta.",
      erroComum: "Supor lei ordinária por se tratar de organização territorial.",
      comoBancaPensa: "Rebaixa a espécie normativa e, por consequência, o quórum exigido."
    }
  },

  /* ============ ADMINISTRAÇÃO PÚBLICA ESTADUAL ============ */
  {
    id: "LEA-049", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 43 — desconcentração e descentralização",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.66,
    enunciado: "A Administração Pública estadual e municipal orienta-se pela desconcentração e pela descentralização, princípios expressamente enunciados na Constituição do Estado de Alagoas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "desconcentração e ... descentralização",
    cognitivo: {
      motivo: "Cobrar dois princípios organizacionais expressos na CE/AL.",
      palavraCritica: "desconcentração",
    },
    comentario: {
      resolucao: "CERTO. É o art. 43. Vale distinguir: desconcentração é distribuição interna de competências dentro da mesma pessoa jurídica, com hierarquia; descentralização é a transferência a outra pessoa jurídica, sem hierarquia, apenas com vinculação e controle finalístico. A CE/AL adota as duas como diretriz organizacional.",
      fundamento: "Constituição do Estado de Alagoas, art. 43.",
      macete: "Desconcentra dentro do mesmo órgão. Descentraliza para outra pessoa jurídica.",
      erroComum: "Usar os dois termos como sinônimos.",
      comoBancaPensa: "Item correto cuja armadilha correlata é trocar as definições dos dois princípios."
    }
  },
  {
    id: "LEA-050", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 42 — princípios da Administração",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.74,
    enunciado: "Os princípios constitucionais da Administração Pública previstos na Constituição do Estado de Alagoas aplicam-se exclusivamente à administração direta estadual, não alcançando a administração municipal nem as entidades da administração indireta.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "exclusivamente à administração direta estadual",
    cognitivo: {
      motivo: "Cobrar o alcance subjetivo dos princípios administrativos na CE/AL.",
      palavraCritica: "exclusivamente ... não alcançando",
    },
    comentario: {
      resolucao: "ERRADO. O art. 42 é expresso ao dizer \"a Administração Pública, estadual e municipal\" — alcança as duas esferas. E o art. 45 estende as regras aos órgãos da Administração Direta e Indireta Estadual e Fundacional Pública. Restringir à direta estadual contraria a literalidade e esvaziaria o controle sobre autarquias e fundações.",
      fundamento: "Constituição do Estado de Alagoas, arts. 42 e 45.",
      macete: "Os princípios pegam estadual e municipal, direta e indireta.",
      erroComum: "Restringir os princípios à administração direta.",
      comoBancaPensa: "Estreita o alcance de uma norma que o próprio texto declara amplo."
    }
  },
  {
    id: "LEA-051", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 46 — conceito de servidor público",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.68,
    enunciado: "Para a Constituição do Estado de Alagoas, são servidores públicos os ocupantes de cargos, funções e empregos permanentes da Administração.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "cargos, funções e empregos permanentes",
    cognitivo: {
      motivo: "Cobrar a definição estadual de servidor, que reúne três vínculos.",
      palavraCritica: "cargos, funções e empregos",
    },
    comentario: {
      resolucao: "CERTO. É o art. 46. A definição é ampla e abarca os três vínculos: cargo (regime estatutário), emprego (regime celetista) e função. Essa amplitude importa porque os direitos comuns do art. 49 e os princípios do art. 47 seguem o mesmo alcance — não se restringem aos estatutários.",
      fundamento: "Constituição do Estado de Alagoas, art. 46.",
      macete: "Cargo, função e emprego: os três são servidor para a CE/AL.",
      erroComum: "Restringir o conceito ao ocupante de cargo efetivo.",
      comoBancaPensa: "Item de literalidade que fixa o alcance antes dos direitos e deveres."
    }
  },
  {
    id: "LEA-052", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 48 — responsabilidade por pagamento indevido",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.58,
    enunciado: "A autoridade que contribuir para pagamento de remuneração indevida a servidor responde apenas quando agir com dolo direto, ficando isenta de responsabilidade se a contribuição for indireta.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "apenas quando agir com dolo direto ... contribuição for indireta",
    cognitivo: {
      motivo: "Cobrar o alcance da responsabilidade prevista no art. 48.",
      palavraCritica: "apenas ... dolo direto ... isenta",
    },
    comentario: {
      resolucao: "ERRADO. O art. 48 alcança a autoridade que contribuir DIRETA OU INDIRETAMENTE para o pagamento indevido. O item cria dois filtros que a norma não tem — exigência de dolo direto e exclusão da contribuição indireta —, quando é exatamente a contribuição indireta que o texto faz questão de abranger.",
      fundamento: "Constituição do Estado de Alagoas, art. 48.",
      macete: "Contribuiu, direta ou indiretamente, responde.",
      erroComum: "Restringir a responsabilidade à conduta dolosa e direta.",
      comoBancaPensa: "Acrescenta requisitos que estreitam uma responsabilidade deliberadamente ampla."
    }
  },

  /* ============ PODER LEGISLATIVO ============ */
  {
    id: "LEA-053", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 68 — Poder Legislativo estadual",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.72,
    enunciado: "O Poder Legislativo do Estado de Alagoas é exercido pela Assembleia Legislativa, órgão unicameral composto por Deputados Estaduais.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "Assembleia Legislativa ... unicameral",
    cognitivo: {
      motivo: "Contraexemplo: a unicameralidade estadual, que a banca troca pelo bicameralismo federal.",
      palavraCritica: "unicameral",
    },
    comentario: {
      resolucao: "CERTO. Nos Estados o Legislativo é unicameral: só há Assembleia Legislativa, sem casa revisora. O bicameralismo — Câmara e Senado — é exclusivo da União. Nos Municípios, também unicameral, com a Câmara Municipal. Essa assimetria é recorte clássico em prova de legislação estadual.",
      fundamento: "Constituição do Estado de Alagoas, art. 68.",
      macete: "Só a União é bicameral. Estado e Município têm uma casa só.",
      erroComum: "Transpor o bicameralismo federal para o plano estadual.",
      comoBancaPensa: "Afirma corretamente uma característica que costuma negar por analogia com a União."
    }
  },
  {
    id: "LEA-054", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 74 — imunidade dos Deputados",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade legal)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.7,
    enunciado: "Os Deputados Estaduais são invioláveis, civil e penalmente, por quaisquer de suas opiniões, palavras e votos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "invioláveis, civil e penalmente ... opiniões, palavras e votos",
    cognitivo: {
      motivo: "Cobrar a imunidade material dos deputados estaduais, com as duas esferas de responsabilidade.",
      palavraCritica: "civil e penalmente",
    },
    comentario: {
      resolucao: "CERTO. É a imunidade material, que alcança as esferas civil E penal — não apenas a penal. Aplica-se às opiniões, palavras e votos proferidos no exercício do mandato. Os Vereadores têm imunidade semelhante, porém limitada à circunscrição do Município, conforme o art. 20 da CE/AL e o art. 29, VIII, da CF.",
      fundamento: "Constituição do Estado de Alagoas, art. 74; CF/1988, art. 27, §1º.",
      macete: "Imunidade material cobre o civil e o penal. Vereador tem, mas só no Município.",
      erroComum: "Restringir a inviolabilidade à responsabilidade penal.",
      comoBancaPensa: "Item de literalidade cuja armadilha correlata é suprimir uma das duas esferas."
    }
  },
  {
    id: "LEA-055", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 92 — lei complementar",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.78,
    enunciado: "As leis complementares estaduais serão aprovadas por maioria simples dos membros da Assembleia Legislativa.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "maioria simples",
    cognitivo: {
      motivo: "Cobrar o quórum da lei complementar, trocado pelo da ordinária.",
      palavraCritica: "maioria simples",
    },
    comentario: {
      resolucao: "ERRADO. O art. 92 exige MAIORIA ABSOLUTA — mais da metade do total de membros da Casa, número fixo. Maioria simples é o quórum da lei ordinária e se calcula sobre os presentes, variando a cada sessão. É a diferença central entre as duas espécies normativas.",
      fundamento: "Constituição do Estado de Alagoas, art. 92; CF/1988, art. 69.",
      macete: "Complementar: maioria absoluta (sobre o total). Ordinária: simples (sobre os presentes).",
      erroComum: "Trocar os dois quóruns por não distinguir a base de cálculo.",
      comoBancaPensa: "Rebaixa o quórum, alterando a espécie normativa sem dizê-lo."
    }
  },
  {
    id: "LEA-056", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 95 — Tribunal de Contas",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.8,
    enunciado: "O Tribunal de Contas do Estado de Alagoas é integrado por sete Conselheiros, e os auditores, em número de três, são nomeados pelo Chefe do Poder Executivo.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "sete Conselheiros ... três",
    cognitivo: {
      motivo: "Contraexemplo: dois numerais exatos e corretos da composição do TCE.",
      palavraCritica: "sete ... três",
    },
    comentario: {
      resolucao: "CERTO. São sete Conselheiros (art. 95) e três auditores (art. 96). O número de sete acompanha o modelo do art. 75 da CF, que manda aplicar aos Tribunais de Contas estaduais as normas do TCU no que couber — o TCU tem nove ministros, e os tribunais estaduais, sete conselheiros.",
      fundamento: "Constituição do Estado de Alagoas, arts. 95 e 96; CF/1988, art. 75.",
      macete: "TCU: 9 ministros. TCE: 7 conselheiros. Auditores no TCE/AL: 3.",
      erroComum: "Marcar ERRADO por desconfiança de números exatos.",
      comoBancaPensa: "Traz dois numerais corretos, apostando que o candidato duvide de ao menos um."
    }
  },
  {
    id: "LEA-057", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 98 — legitimidade para denúncia",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.64,
    enunciado: "Somente partido político com representação na Assembleia Legislativa tem legitimidade para denunciar irregularidades perante o Tribunal de Contas do Estado, sendo o cidadão parte ilegítima para tanto.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "Somente partido político ... cidadão parte ilegítima",
    cognitivo: {
      motivo: "Cobrar a amplitude da legitimidade para denunciar ao TCE.",
      palavraCritica: "Somente ... ilegítima",
    },
    comentario: {
      resolucao: "ERRADO. O art. 98 confere legitimidade a QUALQUER CIDADÃO, partido político, associação ou sindicato. A amplitude é deliberada: o controle das contas públicas é instrumento de cidadania, e restringi-lo a partidos com representação esvaziaria a participação popular consagrada no art. 2º, II, da própria Constituição Estadual.",
      fundamento: "Constituição do Estado de Alagoas, art. 98; CF/1988, art. 74, §2º.",
      macete: "Qualquer cidadão pode denunciar ao Tribunal de Contas.",
      erroComum: "Presumir legitimidade restrita por se tratar de controle externo.",
      comoBancaPensa: "Fecha com 'somente' um rol que a norma abre deliberadamente."
    }
  },

  /* ============ PODER EXECUTIVO ============ */
  {
    id: "LEA-058", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 103 — posse do Governador",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.66,
    enunciado: "O Governador e o Vice-Governador do Estado tomarão posse no dia 1º de janeiro do ano subsequente ao da eleição.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "1º de janeiro",
    cognitivo: {
      motivo: "Contraexemplo: data exata e correta da posse.",
      palavraCritica: "1º de janeiro",
    },
    comentario: {
      resolucao: "CERTO. É o art. 103, em simetria com o art. 78 da CF para o Presidente da República. A data é a mesma nos três níveis do Executivo — 1º de janeiro —, o que facilita a memorização. Não confundir com a sessão preparatória da Assembleia, que ocorre a partir de 1º de fevereiro (art. 70).",
      fundamento: "Constituição do Estado de Alagoas, art. 103.",
      macete: "Executivo toma posse em 1º de janeiro. Legislativo se reúne em 1º de fevereiro.",
      erroComum: "Marcar ERRADO por desconfiança de data em enunciado.",
      comoBancaPensa: "Data correta num item em que o candidato tende a chutar contra números."
    }
  },
  {
    id: "LEA-059", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 105 — reeleição e revogação tácita",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de atualização normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 95, probReaparecer: 0.7,
    enunciado: "Embora o texto original da Constituição do Estado de Alagoas vede a reeleição do Governador para o período subsequente, esse dispositivo não subsiste diante do art. 14, §5º, da Constituição Federal, que passou a admitir a reeleição para um único período.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "não subsiste diante do art. 14, §5º, da Constituição Federal",
    cognitivo: {
      motivo: "Cobrar o conflito entre norma estadual originária e emenda constitucional federal posterior.",
      palavraCritica: "não subsiste",
    },
    comentario: {
      resolucao: "CERTO. O art. 105 da CE/AL, de 1989, vedava a reeleição — coerente com a redação original da CF. A EC federal 16/1997 alterou o art. 14, §5º, e passou a admitir a reeleição de Presidente, Governadores e Prefeitos para um único período subsequente. O dispositivo estadual permanece no texto sem declaração formal de inconstitucionalidade, mas não é aplicável: foi revogado tacitamente por incompatibilidade com a norma federal superveniente.",
      fundamento: "Constituição do Estado de Alagoas, art. 105; CF/1988, art. 14, §5º (EC nº 16/1997).",
      macete: "Está escrito na Constituição estadual, mas não vale: a emenda federal de 1997 permitiu reeleição.",
      erroComum: "Responder pela literalidade do texto estadual, ignorando a emenda federal.",
      comoBancaPensa: "Explora dispositivo que ainda consta do texto mas perdeu eficácia — o gabarito muda conforme a formulação peça a letra da lei ou a norma aplicável."
    }
  },
  {
    id: "LEA-060", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 107 — competências privativas do Governador",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.72,
    enunciado: "Compete privativamente ao Governador do Estado nomear e exonerar os Secretários de Estado e exercer, com o auxílio deles, a direção superior da administração estadual.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "nomear e exonerar os Secretários ... direção superior da administração",
    cognitivo: {
      motivo: "Cobrar duas competências privativas do chefe do Executivo estadual.",
      palavraCritica: "privativamente",
    },
    comentario: {
      resolucao: "CERTO. São os incisos I e II do art. 107, em simetria com o art. 84 da CF. A nomeação e exoneração de Secretários é ato de livre escolha — cargo de confiança, sem concurso e sem necessidade de aprovação legislativa, diferentemente do que ocorre com alguns cargos federais que dependem de sabatina.",
      fundamento: "Constituição do Estado de Alagoas, art. 107, I e II.",
      macete: "Secretário é cargo de confiança: o Governador nomeia e exonera livremente.",
      erroComum: "Supor necessidade de aprovação da Assembleia para nomear Secretário.",
      comoBancaPensa: "Item de literalidade sobre competência privativa, base para pegadinhas de delegação."
    }
  },
  {
    id: "LEA-061", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 104 — substituição do Governador",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.68,
    enunciado: "O Vice-Governador substitui o Governador nos casos de impedimento e o sucede em caso de vaga, sendo distintas as hipóteses de substituição temporária e de sucessão definitiva.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "substitui ... impedimento ... sucede ... vaga",
    cognitivo: {
      motivo: "Contraexemplo: o par substituição/sucessão, que a banca inverte, aqui correto.",
      palavraCritica: "substituição temporária e ... sucessão definitiva",
    },
    comentario: {
      resolucao: "CERTO. A distinção é técnica e cobrada com frequência. SUBSTITUIÇÃO é temporária, para impedimentos — viagem, licença, férias —, e o titular retorna. SUCESSÃO é definitiva, para vaga aberta por morte, renúncia ou perda do cargo. O art. 104 da CE/AL reproduz o modelo do art. 79 da CF.",
      fundamento: "Constituição do Estado de Alagoas, art. 104; CF/1988, art. 79.",
      macete: "Impedimento: substitui e devolve. Vaga: sucede e fica.",
      erroComum: "Usar substituição e sucessão como sinônimos.",
      comoBancaPensa: "Apresenta corretamente um par técnico que costuma permutar."
    }
  },

  /* ============ ORDEM SOCIAL — SEGURIDADE E SAÚDE ============ */
  {
    id: "LEA-062", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 185 — seguridade social",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso — contraexemplo)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.82,
    enunciado: "A seguridade social, na Constituição do Estado de Alagoas, compreende ações de iniciativa dos poderes públicos e da sociedade destinadas a assegurar os direitos relativos à saúde, à previdência e à assistência sociais.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "saúde, à previdência e à assistência sociais",
    cognitivo: {
      motivo: "Cobrar o tripé da seguridade, replicado no plano estadual.",
      palavraCritica: "poderes públicos e da sociedade",
    },
    comentario: {
      resolucao: "CERTO. O art. 185 reproduz o modelo do art. 194 da CF: seguridade é gênero, e saúde, previdência e assistência são as três espécies. A menção à iniciativa da sociedade, ao lado da dos poderes públicos, é o que fundamenta a participação da comunidade na gestão — princípio detalhado no §1º, IV, do mesmo artigo.",
      fundamento: "Constituição do Estado de Alagoas, art. 185; CF/1988, art. 194.",
      macete: "Seguridade = saúde + previdência + assistência. Sempre as três.",
      erroComum: "Reduzir a seguridade à previdência.",
      comoBancaPensa: "Item de literalidade que abre o bloco de maior interesse para o cargo."
    }
  },
  {
    id: "LEA-063", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 185 §3º — fonte de custeio",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.76,
    enunciado: "Nenhum benefício ou serviço de seguridade social poderá ser criado, majorado ou estendido sem a correspondente fonte de custeio total.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "Nenhum ... sem a correspondente fonte de custeio total",
    cognitivo: {
      motivo: "Contraexemplo: regra da contrapartida, formulada em termos absolutos como na norma.",
      palavraCritica: "Nenhum ... total",
    },
    comentario: {
      resolucao: "CERTO. É o princípio da precedência da fonte de custeio, no §3º do art. 185, espelhando o art. 195, §5º, da CF. A formulação é mesmo absoluta: sem indicar de onde sairá o dinheiro, não se cria nem se amplia benefício. É a norma que impede a criação de direitos sem lastro orçamentário — e a que a banca gosta de cobrar por ser categórica e, ainda assim, verdadeira.",
      fundamento: "Constituição do Estado de Alagoas, art. 185, §3º; CF/1988, art. 195, §5º.",
      macete: "Criou benefício? Diga de onde vem o dinheiro. Sem fonte, não pode.",
      erroComum: "Marcar ERRADO por reflexo diante de 'nenhum' e 'total'.",
      comoBancaPensa: "Reproduz literalmente uma regra que já nasce em linguagem absoluta."
    }
  },
  {
    id: "LEA-064", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 186 — direito à saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.84,
    enunciado: "Todo ser humano, sem distinção de qualquer natureza, tem direito à saúde, nos termos da Constituição do Estado de Alagoas.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "Todo ser humano, sem distinção de qualquer natureza",
    cognitivo: {
      motivo: "Contraexemplo: formulação amplíssima que é a literal do art. 186.",
      palavraCritica: "Todo ser humano",
    },
    comentario: {
      resolucao: "CERTO. A redação do art. 186 é notavelmente ampla — fala em \"todo ser humano\", e não em cidadão, brasileiro ou residente. A escolha do termo é significativa: alcança estrangeiros e pessoas em trânsito, e reforça a universalidade que o SUS consagra. É formulação até mais explícita que a do art. 196 da CF.",
      fundamento: "Constituição do Estado de Alagoas, art. 186.",
      macete: "Todo ser humano — não é 'todo cidadão'. A CE/AL foi ampla de propósito.",
      erroComum: "Supor restrição a cidadãos ou residentes no Estado.",
      comoBancaPensa: "Enunciado de amplitude máxima que o candidato tende a considerar exagerado."
    }
  },
  {
    id: "LEA-065", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 187 — função social do Estado na saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.78,
    enunciado: "Constitui função social do Estado velar pela proteção e defesa da saúde nos níveis individual e coletivo, assegurando condições dignas de trabalho, saneamento, moradia, alimentação, educação, transporte e lazer, bem como o respeito ao meio ambiente e o controle da poluição ambiental.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "individual e coletivo ... condições dignas ... meio ambiente e ... poluição",
    cognitivo: {
      motivo: "Contraexemplo: rol extenso de determinantes sociais, todo verdadeiro.",
      palavraCritica: "respeito ao meio ambiente e o controle da poluição",
    },
    comentario: {
      resolucao: "CERTO. É o art. 187, e o rol adota o conceito ampliado de saúde: a proteção não se limita à assistência médica, mas alcança trabalho, saneamento, moradia, alimentação, educação, transporte, lazer e meio ambiente. É a mesma lógica do art. 3º da Lei 8.080/1990 — os determinantes e condicionantes da saúde —, aqui no plano constitucional estadual.",
      fundamento: "Constituição do Estado de Alagoas, art. 187, I e II; Lei nº 8.080/1990, art. 3º.",
      macete: "Saúde na CE/AL é conceito ampliado: passa por moradia, transporte e meio ambiente.",
      erroComum: "Desconfiar da extensão do rol e marcar ERRADO.",
      comoBancaPensa: "Encadeia um rol longo e verdadeiro no formato em que costuma inserir item falso."
    }
  },
  {
    id: "LEA-066", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 188 §1º — diretrizes do SUS estadual",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos — contraexemplo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.86,
    enunciado: "Entre as diretrizes do sistema único de saúde previstas na Constituição do Estado de Alagoas estão a municipalização dos recursos e ações dos serviços de saúde, o comando único em cada esfera de governo e o atendimento integral na prestação das ações preventivas e curativas.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "municipalização ... comando único ... atendimento integral",
    cognitivo: {
      motivo: "Cobrar as diretrizes do SUS na versão estadual, que explicita a municipalização.",
      palavraCritica: "municipalização",
    },
    comentario: {
      resolucao: "CERTO. São diretrizes do §1º do art. 188. A CE/AL é mais explícita que a CF num ponto: fala em MUNICIPALIZAÇÃO, e não apenas em descentralização — o que reforça o município como executor das ações e serviços, coerente com o art. 18 da Lei 8.080/1990. O comando único em cada esfera reproduz o art. 198, I, da CF.",
      fundamento: "Constituição do Estado de Alagoas, art. 188, §1º, I a III.",
      macete: "A CE/AL escreve 'municipalização' onde a CF escreve 'descentralização'.",
      erroComum: "Supor que a diretriz estadual apenas repete a federal.",
      comoBancaPensa: "Item de literalidade que cobra a peculiaridade da redação estadual."
    }
  },
  {
    id: "LEA-067", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 188 — acesso aos serviços de saúde",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de sujeito)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.74,
    enunciado: "O acesso aos serviços de saúde será garantido pelo Poder Público, cabendo exclusivamente à União dispor em lei sobre sua regulamentação, fiscalização e controle no território alagoano.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "exclusivamente à União dispor em lei",
    cognitivo: {
      motivo: "Cobrar a quem compete regulamentar, fiscalizar e controlar os serviços de saúde na CE/AL.",
      palavraCritica: "exclusivamente à União",
    },
    comentario: {
      resolucao: "ERRADO. O art. 188 atribui a competência ao ESTADO e aos MUNICÍPIOS, cada um no âmbito de suas competências. Atribuí-la exclusivamente à União contraria a repartição federativa em saúde, que é matéria de competência comum (CF, art. 23, II) e concorrente (art. 24, XII), e esvaziaria a própria razão de ser da Constituição Estadual nesse capítulo.",
      fundamento: "Constituição do Estado de Alagoas, art. 188; CF/1988, arts. 23, II, e 24, XII.",
      macete: "Saúde é competência comum: União, Estados e Municípios, cada um no seu âmbito.",
      erroComum: "Centralizar na União a regulamentação de serviços locais de saúde.",
      comoBancaPensa: "Desloca para a União uma competência que a norma estadual reserva a Estado e Municípios."
    }
  },
  {
    id: "LEA-068", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Art. 185 §1º — princípios da seguridade",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.72,
    enunciado: "Entre os princípios básicos da seguridade social na Constituição do Estado de Alagoas figura o caráter centralizado e tecnocrático da gestão administrativa, com participação restrita aos gestores públicos.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "centralizado e tecnocrático ... participação restrita aos gestores",
    cognitivo: {
      motivo: "Cobrar o princípio da gestão democrática e descentralizada.",
      palavraCritica: "centralizado e tecnocrático",
    },
    comentario: {
      resolucao: "ERRADO. O inciso IV do §1º do art. 185 prevê exatamente o oposto: caráter DEMOCRÁTICO E DESCENTRALIZADO da gestão administrativa, com participação da coletividade, em especial de trabalhadores, empresários e aposentados. É a base estadual do controle social que a Lei 8.142/1990 detalha nos conselhos e conferências.",
      fundamento: "Constituição do Estado de Alagoas, art. 185, §1º, IV; Lei nº 8.142/1990.",
      macete: "Gestão da seguridade é democrática e descentralizada, com a coletividade dentro.",
      erroComum: "Aceitar a centralização por associá-la a eficiência administrativa.",
      comoBancaPensa: "Inverte um princípio e ainda exclui os atores que a norma faz questão de incluir."
    }
  },

];

QUESTOES.push(...QUESTOES_SESAUAL_LOTE72);
