/* =====================================================================
   QUESTLAB — Lote 93: TEORIA DOS DIREITOS FUNDAMENTAIS

   ORIGEM DO RECORTE, e o que dele foi aproveitado.

   O usuário trouxe uma lista de exercícios de fixação de Direito
   Constitucional do material de cursinho que assina, sobre Teoria dos
   Direitos Fundamentais. Aquele PDF é material de terceiro, marcado com
   o e-mail dele — e NADA dele foi copiado para este repositório: nem
   enunciado, nem alternativa, nem comentário.

   O que se aproveitou foi o MAPA DE TEMAS, que é fato jurídico e não
   texto de ninguém: quais dispositivos e quais construções doutrinárias
   aquele bloco cobre. Cruzando esse mapa com o banco, apareceram três
   lacunas em 203 questões de Direito Constitucional e Direitos Humanos:

     art. 5º, § 1º — aplicação imediata ......... ZERO questões
     teoria absoluta × teoria relativa .......... ZERO questões
     teoria interna × teoria externa ............ ZERO questões

   A primeira é a mais grave: é dispositivo curto, literal e de cobrança
   recorrente, e o banco não tinha nenhum item sobre ele.

   Duas outras estavam finas e foram reforçadas: eficácia horizontal e
   diagonal (2 itens) e art. 5º, § 2º (2 itens).

   TUDO ESCRITO DA FONTE PRIMÁRIA. Os itens de dispositivo saíram do
   texto da Constituição; os de doutrina, da formulação corrente (Alexy,
   Novelino, Virgílio Afonso da Silva) — não da paráfrase do cursinho, que
   em dois pontos simplifica de um jeito que não sobreviveria a uma prova
   bem redigida. O caso mais claro é o par interna/externa: reduzi-lo a
   "quem define o limite é a Constituição × são os outros direitos" perde
   justamente o que a distinção tem de operacional, que é a existência ou
   não de direito prima facie e, com ela, a possibilidade de ponderação.

   CONVERSÃO DE FORMATO. Metade daquele bloco é múltipla escolha, formato
   que a CEBRASPE não usa para Agente e Escrivão na PC-AL. Todos os itens
   daqui são CERTO/ERRADO.

   ONDE CADA ITEM FOI ALOCADO. Os de dispositivo da CF vão para Direito
   Constitucional; os de teoria geral dos direitos fundamentais e humanos,
   para Direitos Humanos. As duas disciplinas estão abaixo do proporcional
   ao peso no edital — DH em −4,0pp e DC em −1,9pp, as duas maiores
   lacunas de cobertura do banco.

   PERFIL FORMAL. Mantido o desenho corretivo dos lotes 90 a 92: CERTOS
   tendendo ao curto, ERRADOS ao longo, e itens CERTOS carregando termo
   absoluto quando a norma ou a doutrina é mesmo categórica. Direito
   Constitucional ainda tem +6,1pp de vazamento da regra cega.

   Gabarito: 10 CERTO / 10 ERRADO.
   ===================================================================== */

const CARGOS93 = ["Escrivão", "Agente"];
const BASE93 = {
  concurso: "PCAL", cargo: CARGOS93, ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  origem: "Inédita — estilo CEBRASPE (fonte: CF/88 e doutrina de direitos fundamentais)",
};

const QUESTOES_PCAL_LOTE93 = [

  /* ============ LACUNA 1 — art. 5º, § 1º: aplicação imediata ========== */

  {
    ...BASE93, disciplina: "Direito Constitucional",
    id: "DC-124", assunto: "Direitos fundamentais", subassunto: "Aplicação imediata (art. 5º, § 1º)",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "As normas definidoras dos direitos e garantias fundamentais têm aplicação imediata.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "aplicação imediata",
    cognitivo: {
      motivo: "Cobrar a literalidade do § 1º do art. 5º, dispositivo que o banco não tinha e que a banca reproduz sem alteração.",
      palavraCritica: "imediata",
    },
    comentario: {
      resolucao: "CERTO. É a transcrição do art. 5º, § 1º, da CF: 'As normas definidoras dos direitos e garantias fundamentais têm aplicação imediata.' Item curto e sem pegadinha — a banca também cobra assim, e quem procura armadilha onde não há erra por excesso de desconfiança.",
      fundamento: "CF, art. 5º, § 1º.",
      macete: "§ 1º aplicação imediata · § 2º não exclusão · § 3º tratados com rito de emenda. Decore a ordem dos três.",
      erroComum: "Marcar ERRADO supondo que faltou alguma ressalva ao dispositivo.",
      comoBancaPensa: "Transcrição literal de dispositivo curto, usada para separar quem leu a Constituição de quem leu só resumo."
    }
  },
  {
    ...BASE93, disciplina: "Direito Constitucional",
    id: "DC-125", assunto: "Direitos fundamentais", subassunto: "Alcance da aplicação imediata",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "Em razão do disposto no § 1º do art. 5º da Constituição Federal, todas as normas definidoras de direitos e garantias fundamentais são autoaplicáveis, de modo que nenhuma delas depende de regulamentação infraconstitucional para produzir a integralidade dos seus efeitos, sendo por isso incabível o mandado de injunção em matéria de direitos fundamentais.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "nenhuma delas depende de regulamentação",
    cognitivo: {
      motivo: "Testar a leitura absolutizante do § 1º, que a própria existência do mandado de injunção desmente.",
      palavraCritica: "incabível o mandado de injunção",
    },
    comentario: {
      resolucao: "ERRADO. O § 1º estabelece presunção de aplicabilidade e o dever de extrair a máxima eficácia possível, mas não transforma toda norma de direito fundamental em autoaplicável. Há direitos que dependem de regulamentação — tanto que a Constituição criou o MANDADO DE INJUNÇÃO (art. 5º, LXXI) precisamente para a falta de norma regulamentadora que inviabilize o exercício de direitos e liberdades constitucionais. O STF já o concedeu, por exemplo, quanto ao direito de greve do servidor público, aplicando por analogia a Lei 7.783/1989.",
      fundamento: "CF, art. 5º, § 1º e LXXI; STF, MI 708, MI 670 e MI 712 (greve do servidor público).",
      macete: "Aplicação imediata é presunção, não é milagre. Se fosse literal e absoluta, o mandado de injunção seria letra morta.",
      erroComum: "Ler 'aplicação imediata' como 'autoaplicabilidade sem exceção'.",
      comoBancaPensa: "Parte de um dispositivo verdadeiro e o leva ao absoluto, acrescentando uma consequência que a própria Constituição contradiz."
    }
  },
  {
    ...BASE93, disciplina: "Direito Constitucional",
    id: "DC-126", assunto: "Direitos fundamentais", subassunto: "Aplicação imediata × eficácia das normas",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "A regra da aplicação imediata dos direitos e garantias fundamentais alcança tanto os direitos individuais quanto os direitos sociais previstos na Constituição.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "tanto ... quanto",
    cognitivo: {
      motivo: "Cobrar a extensão do § 1º para além do art. 5º, tema em que o candidato costuma restringir sem base.",
      palavraCritica: "direitos sociais",
    },
    comentario: {
      resolucao: "CERTO. O § 1º fala em 'direitos e garantias fundamentais', expressão que abrange todo o Título II da Constituição — e os direitos sociais estão no Capítulo II desse título (arts. 6º a 11). A doutrina majoritária e o STF estendem a regra a eles, ainda que a implementação de alguns exija prestação estatal e possa ser gradual.",
      fundamento: "CF, Título II, Capítulo II (arts. 6º a 11); art. 5º, § 1º.",
      macete: "O § 1º está no art. 5º, mas fala de 'direitos e garantias fundamentais' — que é o Título II inteiro, não só o art. 5º.",
      erroComum: "Limitar a aplicação imediata aos direitos individuais do art. 5º.",
      comoBancaPensa: "Testa se o candidato conhece a topografia do Título II e não confunde a localização do parágrafo com o alcance dele."
    }
  },

  /* ====== LACUNA 2 — núcleo essencial: teoria absoluta × relativa ===== */

  {
    ...BASE93, disciplina: "Direitos Humanos",
    id: "DH-224", assunto: "Teoria dos direitos fundamentais", subassunto: "Núcleo essencial — teoria absoluta",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Para a teoria absoluta do núcleo essencial, existe um conteúdo mínimo do direito fundamental determinável em abstrato e intangível a qualquer restrição.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "determinável em abstrato",
    cognitivo: {
      motivo: "Cobrar a definição da teoria absoluta, ausente do banco.",
      palavraCritica: "intangível",
    },
    comentario: {
      resolucao: "CERTO. A teoria absoluta sustenta que cada direito fundamental possui um núcleo essencial fixo, identificável previamente e independentemente do caso concreto, que funciona como barreira intransponível ao legislador e ao intérprete: por mais relevante que seja o interesse contraposto, esse núcleo não pode ser atingido.",
      fundamento: "Doutrina — teoria absoluta do núcleo essencial dos direitos fundamentais.",
      macete: "ABSOLUTA: o núcleo é fixo e vem ANTES do caso. RELATIVA: o núcleo é o que SOBRA depois da ponderação.",
      erroComum: "Trocar as duas teorias, que é a armadilha padrão do tema.",
      comoBancaPensa: "Definição correta de conceito doutrinário que quase sempre aparece invertido nas alternativas."
    }
  },
  {
    ...BASE93, disciplina: "Direitos Humanos",
    id: "DH-225", assunto: "Teoria dos direitos fundamentais", subassunto: "Núcleo essencial — inversão das teorias",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "De acordo com a teoria relativa do núcleo essencial dos direitos fundamentais, há um conteúdo mínimo previamente fixado e imune a qualquer restrição, ao passo que a teoria absoluta sustenta que a extensão da proteção só pode ser determinada diante do caso concreto, mediante a aplicação do postulado da proporcionalidade aos interesses em colisão.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "teoria relativa ... previamente fixado",
    cognitivo: {
      motivo: "Testar a inversão entre teoria absoluta e relativa, mecanismo clássico da banca em conceitos pareados.",
      palavraCritica: "previamente fixado",
    },
    comentario: {
      resolucao: "ERRADO. Os nomes estão trocados. É a teoria ABSOLUTA que afirma um núcleo mínimo fixado a priori e intangível; a teoria RELATIVA nega esse núcleo pré-definido e sustenta que o conteúdo protegido resulta da ponderação no caso concreto — o núcleo essencial é, para ela, exatamente o que resta após a aplicação da proporcionalidade. A descrição de cada teoria, isoladamente, está correta; o erro está no rótulo.",
      fundamento: "Doutrina — teorias absoluta e relativa do núcleo essencial.",
      macete: "Confira sempre o rótulo antes do conteúdo. Descrição certa com nome trocado é o item mais comum em conceitos que andam em par.",
      erroComum: "Validar o item porque as duas descrições, lidas isoladamente, são reconhecíveis e corretas.",
      comoBancaPensa: "Troca de rótulos entre conceitos vizinhos — o candidato reconhece as definições e não confere a qual nome cada uma pertence."
    }
  },
  {
    ...BASE93, disciplina: "Direitos Humanos",
    id: "DH-226", assunto: "Teoria dos direitos fundamentais", subassunto: "Consequência prática da teoria relativa",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "Adotada a teoria relativa do núcleo essencial, a proteção conferida a um direito fundamental pode variar conforme o peso dos interesses contrapostos no caso concreto.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "pode variar",
    cognitivo: {
      motivo: "Cobrar a consequência operacional da teoria relativa, e não apenas seu enunciado.",
      palavraCritica: "caso concreto",
    },
    comentario: {
      resolucao: "CERTO. É precisamente o que distingue a teoria relativa: como o núcleo essencial é resultado da ponderação, e não pressuposto dela, a extensão da proteção efetiva depende do confronto com os princípios colidentes naquele caso. Duas situações envolvendo o mesmo direito podem terminar com graus diferentes de proteção.",
      fundamento: "Doutrina — teoria relativa do núcleo essencial; postulado da proporcionalidade.",
      macete: "Relativa = relativa AO CASO. Se o núcleo depende da ponderação, ele muda de tamanho conforme o que está do outro lado.",
      erroComum: "Confundir 'variar conforme o caso' com 'não haver proteção alguma', que a teoria não afirma.",
      comoBancaPensa: "Cobra a consequência do conceito, não a definição decorada — filtro para quem só memorizou os nomes."
    }
  },

  /* ====== LACUNA 3 — limites: teoria interna × teoria externa ========= */

  {
    ...BASE93, disciplina: "Direitos Humanos",
    id: "DH-227", assunto: "Teoria dos direitos fundamentais", subassunto: "Teoria externa — direito prima facie",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "A teoria externa distingue o direito prima facie do direito definitivo, admitindo que restrições sejam impostas a partir de fora do direito, o que abre espaço para a ponderação.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "prima facie",
    cognitivo: {
      motivo: "Cobrar a definição da teoria externa, ausente do banco e pressuposto de toda a técnica de ponderação.",
      palavraCritica: "prima facie",
    },
    comentario: {
      resolucao: "CERTO. Para a teoria externa há dois momentos: primeiro o direito em sua extensão inicial, prima facie; depois as restrições que lhe são impostas externamente, resultando no direito definitivo. É essa separação que torna a ponderação possível e faz dela o método natural de solução de colisões — razão pela qual a teoria externa é a base do modelo de princípios de Robert Alexy.",
      fundamento: "Doutrina — teoria externa das restrições aos direitos fundamentais (Alexy).",
      macete: "EXTERNA: direito primeiro, limite depois, de fora — logo, cabe ponderar. INTERNA: o limite já vem dentro, nasce com o direito.",
      erroComum: "Confundir a teoria externa com a teoria relativa do núcleo essencial — são pares distintos, um sobre limites, outro sobre conteúdo protegido.",
      comoBancaPensa: "Definição correta, com o termo técnico 'prima facie' funcionando como âncora para quem estudou pela fonte."
    }
  },
  {
    ...BASE93, disciplina: "Direitos Humanos",
    id: "DH-228", assunto: "Teoria dos direitos fundamentais", subassunto: "Teoria interna — limites imanentes",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "Segundo a teoria interna dos limites aos direitos fundamentais, o direito e suas restrições constituem realidades distintas e sucessivas, de modo que se identifica primeiro a extensão inicial do direito e, em seguida, aplica-se a técnica da ponderação para definir, no caso concreto, até onde essa extensão pode ser comprimida por princípios colidentes.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "realidades distintas e sucessivas",
    cognitivo: {
      motivo: "Testar a atribuição, à teoria interna, do método que é justamente o da teoria externa.",
      palavraCritica: "ponderação",
    },
    comentario: {
      resolucao: "ERRADO. A descrição é da teoria EXTERNA. Para a teoria interna, direito e limite não são realidades sucessivas: os limites são IMANENTES, integram o próprio contorno do direito, que já nasce delimitado. Por consequência, a teoria interna não trabalha com ponderação entre direito e restrição — o que existe é a definição do alcance do direito, e o que está fora dele simplesmente nunca esteve protegido.",
      fundamento: "Doutrina — teoria interna (limites imanentes) × teoria externa das restrições.",
      macete: "Se o item fala em ponderar, está falando da externa. A interna não pondera: ela delimita.",
      erroComum: "Supor que toda teoria sobre limites admite ponderação, quando é exatamente esse o ponto que separa as duas.",
      comoBancaPensa: "Descreve corretamente uma teoria e a batiza com o nome da outra — mesma mecânica dos itens de núcleo essencial."
    }
  },
  {
    ...BASE93, disciplina: "Direitos Humanos",
    id: "DH-229", assunto: "Teoria dos direitos fundamentais", subassunto: "Teoria interna — consequência",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Na teoria interna, aquilo que excede os limites imanentes do direito nunca esteve protegido por ele.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "nunca esteve protegido",
    cognitivo: {
      motivo: "Cobrar a consequência lógica da teoria interna, em item curto com quantificador que a doutrina de fato emprega.",
      palavraCritica: "nunca",
    },
    comentario: {
      resolucao: "CERTO. É a consequência direta da premissa: se os limites são imanentes e integram o próprio direito, então a conduta que os ultrapassa está fora do âmbito de proteção desde o início — não houve restrição de um direito preexistente, houve delimitação do que o direito sempre foi. A negativa categórica está correta porque decorre da estrutura da teoria, e não de exagero retórico.",
      fundamento: "Doutrina — teoria interna dos limites imanentes.",
      macete: "Na interna não se 'perde' o direito: descobre-se que ele não alcançava aquilo.",
      erroComum: "Marcar ERRADO por reflexo diante de 'nunca', sem verificar que a teoria realmente afirma isso.",
      comoBancaPensa: "Afirmação categórica e verdadeira — contraprova do reflexo de que termo absoluto indica gabarito ERRADO."
    }
  },

  /* ============ REFORÇO — eficácia horizontal, vertical e diagonal ==== */

  {
    ...BASE93, disciplina: "Direito Constitucional",
    id: "DC-127", assunto: "Direitos fundamentais", subassunto: "Eficácia horizontal",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "A eficácia horizontal dos direitos fundamentais consiste na sua incidência nas relações entre particulares.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "entre particulares",
    cognitivo: {
      motivo: "Cobrar a definição de eficácia horizontal, tema com apenas dois itens no banco.",
      palavraCritica: "particulares",
    },
    comentario: {
      resolucao: "CERTO. A eficácia vertical é a clássica, do particular contra o Estado; a horizontal projeta os direitos fundamentais para as relações privadas, em que as partes estão, ao menos em tese, em posição de igualdade jurídica. O STF a reconhece com eficácia direta e imediata — caso conhecido é o RE 201.819, sobre exclusão de associado sem contraditório e ampla defesa.",
      fundamento: "Doutrina — eficácia horizontal (Drittwirkung); STF, RE 201.819 e RE 161.243.",
      macete: "Vertical: Estado em cima, particular embaixo. Horizontal: particular × particular, lado a lado.",
      erroComum: "Restringir os direitos fundamentais à relação com o poder público.",
      comoBancaPensa: "Definição direta, para depois cobrar a distinção com a eficácia diagonal em item mais difícil."
    }
  },
  {
    ...BASE93, disciplina: "Direito Constitucional",
    id: "DC-128", assunto: "Direitos fundamentais", subassunto: "Eficácia diagonal",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "Denomina-se eficácia diagonal a aplicação dos direitos fundamentais às relações entre particulares marcadas por desequilíbrio de poder, como as relações de consumo e de trabalho.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "desequilíbrio de poder",
    cognitivo: {
      motivo: "Cobrar a eficácia diagonal, que o banco não distinguia da horizontal.",
      palavraCritica: "diagonal",
    },
    comentario: {
      resolucao: "CERTO. A eficácia diagonal é um refinamento da horizontal: reconhece que nem toda relação privada é entre iguais. Quando há assimetria estrutural — consumidor e fornecedor, empregado e empregador —, a incidência dos direitos fundamentais se dá com intensidade maior, aproximando-se da lógica da eficácia vertical. Daí a imagem: nem na horizontal da igualdade, nem na vertical do Estado, mas na diagonal.",
      fundamento: "Doutrina — eficácia diagonal dos direitos fundamentais.",
      macete: "Horizontal = iguais. Vertical = Estado × particular. Diagonal = particulares desiguais.",
      erroComum: "Tratar diagonal como sinônimo de horizontal.",
      comoBancaPensa: "Conceito de nome sugestivo, que a banca cobra justamente por ser pouco estudado."
    }
  },
  {
    ...BASE93, disciplina: "Direito Constitucional",
    id: "DC-129", assunto: "Direitos fundamentais", subassunto: "Eficácia vertical — inversão",
    dificuldade: 3, tempoIdealSeg: 90,
    enunciado: "A eficácia vertical dos direitos fundamentais designa a sua projeção sobre as relações estabelecidas entre particulares em posição de igualdade jurídica, ao passo que a eficácia horizontal corresponde à vinculação do poder público ao respeito desses direitos na sua relação com os administrados.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "vertical ... entre particulares",
    cognitivo: {
      motivo: "Testar a inversão entre eficácia vertical e horizontal.",
      palavraCritica: "vertical",
    },
    comentario: {
      resolucao: "ERRADO. Os nomes estão trocados. VERTICAL é a relação entre o particular e o Estado — há hierarquia, um está acima do outro. HORIZONTAL é a projeção dos direitos fundamentais nas relações entre particulares, tidos como juridicamente iguais. Cada descrição, isolada, é correta; o item apenas as atribui ao rótulo errado.",
      fundamento: "Doutrina — eficácia vertical e horizontal dos direitos fundamentais.",
      macete: "Pense na imagem: vertical é de cima para baixo, e quem está em cima é o Estado.",
      erroComum: "Aceitar o item por reconhecer as duas descrições como familiares.",
      comoBancaPensa: "Troca de rótulos entre conceitos pareados, o mesmo mecanismo dos itens de núcleo essencial e de limites."
    }
  },

  /* ============ CARACTERÍSTICAS DOS DIREITOS FUNDAMENTAIS ============= */

  {
    ...BASE93, disciplina: "Direitos Humanos",
    id: "DH-230", assunto: "Teoria dos direitos fundamentais", subassunto: "Relatividade e ausência de hierarquia",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Nenhum direito fundamental é absoluto, admitindo-se restrições mediante ponderação.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "Nenhum",
    cognitivo: {
      motivo: "Cobrar a característica da relatividade em item curto com quantificador negativo universal verdadeiro.",
      palavraCritica: "Nenhum",
    },
    comentario: {
      resolucao: "CERTO. A relatividade é característica reconhecida dos direitos fundamentais: nenhum deles é absoluto, e em caso de colisão a solução se dá por ponderação, com base na proporcionalidade. Nem mesmo o direito à vida escapa, como mostra a licitude do aborto nas hipóteses legais e da pena de morte em caso de guerra declarada (CF, art. 5º, XLVII, a).",
      fundamento: "Doutrina — relatividade dos direitos fundamentais; CF, art. 5º, XLVII, a.",
      macete: "A regra é que não há regra sem exceção. E o exemplo que fecha qualquer discussão é a pena de morte em guerra declarada.",
      erroComum: "Marcar ERRADO por reflexo diante de 'Nenhum', ou por lembrar da vedação absoluta à tortura — que é vedação ao ato, não direito ilimitado.",
      comoBancaPensa: "Negativa universal verdadeira, em item curto — a contraprova do reflexo de termo absoluto."
    }
  },
  {
    ...BASE93, disciplina: "Direitos Humanos",
    id: "DH-231", assunto: "Teoria dos direitos fundamentais", subassunto: "Irrenunciabilidade — alcance",
    dificuldade: 3, tempoIdealSeg: 95,
    enunciado: "A característica da irrenunciabilidade impede que o titular disponha, ainda que de modo temporário e em situação específica, do exercício de qualquer direito fundamental, razão pela qual é juridicamente impossível a autolimitação voluntária de direitos da personalidade, como ocorreria na participação em programas televisivos que expõem a intimidade dos participantes.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "ainda que de modo temporário",
    cognitivo: {
      motivo: "Testar a leitura absolutizante da irrenunciabilidade, que a doutrina expressamente relativiza.",
      palavraCritica: "juridicamente impossível",
    },
    comentario: {
      resolucao: "ERRADO. A irrenunciabilidade impede a renúncia ao DIREITO em si, mas não a autolimitação voluntária, temporária e específica do seu EXERCÍCIO. O exemplo que a doutrina consagra é justamente o oposto do que o item afirma: a exposição consentida da intimidade em programas de televisão é admitida, porque o titular não abre mão do direito, apenas deixa de exercê-lo em certa extensão e por certo tempo.",
      fundamento: "Doutrina — irrenunciabilidade e autolimitação voluntária ao exercício de direitos fundamentais.",
      macete: "Não se renuncia ao direito; pode-se deixar de exercê-lo, por vontade própria e por prazo certo.",
      erroComum: "Ler irrenunciabilidade como indisponibilidade total, inclusive do exercício.",
      comoBancaPensa: "Enunciado longo que absolutiza uma característica real e escolhe como exemplo exatamente o caso que a doutrina usa para relativizá-la."
    }
  },
  {
    ...BASE93, disciplina: "Direitos Humanos",
    id: "DH-232", assunto: "Teoria dos direitos fundamentais", subassunto: "Imprescritibilidade — ressalva patrimonial",
    dificuldade: 3, tempoIdealSeg: 90,
    enunciado: "Como decorrência da imprescritibilidade dos direitos fundamentais, também são imprescritíveis todas as pretensões de conteúdo patrimonial que deles derivem, não se sujeitando a prazo algum a reparação civil pleiteada com base em violação a direito da personalidade.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "todas as pretensões de conteúdo patrimonial",
    cognitivo: {
      motivo: "Testar a extensão indevida da imprescritibilidade às pretensões patrimoniais.",
      palavraCritica: "prazo algum",
    },
    comentario: {
      resolucao: "ERRADO. A imprescritibilidade alcança o direito fundamental em si, que não se perde pelo decurso do tempo e pelo não exercício. As PRETENSÕES PATRIMONIAIS dele decorrentes, contudo, submetem-se a prazo: a reparação civil prescreve na forma da lei. Não confundir o direito, que permanece, com a pretensão de cobrar em juízo o efeito econômico da sua violação, que caduca.",
      fundamento: "Doutrina — imprescritibilidade dos direitos fundamentais e prescrição das pretensões patrimoniais; CC, art. 206.",
      macete: "O direito não prescreve; a conta que ele gera, sim.",
      erroComum: "Estender a imprescritibilidade a tudo que decorra do direito, inclusive a indenização.",
      comoBancaPensa: "Parte de característica verdadeira e a expande para o campo patrimonial, com 'todas' e 'prazo algum' fechando a generalização."
    }
  },

  /* ============ GERAÇÕES / DIMENSÕES ================================= */

  {
    ...BASE93, disciplina: "Direitos Humanos",
    id: "DH-233", assunto: "Teoria dos direitos fundamentais", subassunto: "Primeira dimensão — prestação negativa",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Os direitos de primeira dimensão exigem do Estado, em regra, uma abstenção, e correspondem aos direitos civis e políticos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "abstenção",
    cognitivo: {
      motivo: "Cobrar a natureza prestacional negativa da primeira dimensão.",
      palavraCritica: "abstenção",
    },
    comentario: {
      resolucao: "CERTO. Os direitos de primeira dimensão, ligados ao valor LIBERDADE e afirmados nas revoluções liberais do século XVIII, impõem ao Estado um dever de não interferir na esfera individual — são direitos negativos, de defesa. Compreendem os direitos civis e políticos: vida, liberdade, propriedade, liberdade de expressão, participação política.",
      fundamento: "Doutrina — dimensões dos direitos fundamentais; lema liberdade, igualdade, fraternidade.",
      macete: "1ª LIBERDADE, o Estado se afasta. 2ª IGUALDADE, o Estado age. 3ª FRATERNIDADE, a titularidade é do grupo.",
      erroComum: "Confundir a primeira dimensão com os direitos sociais, que são de segunda.",
      comoBancaPensa: "Item de fixação que ancora o bloco antes das trocas entre dimensões."
    }
  },
  {
    ...BASE93, disciplina: "Direitos Humanos",
    id: "DH-234", assunto: "Teoria dos direitos fundamentais", subassunto: "Segunda e terceira dimensões — inversão",
    dificuldade: 3, tempoIdealSeg: 90,
    enunciado: "Os direitos de terceira dimensão compreendem os direitos sociais, econômicos e culturais, tais como o direito à saúde, à educação, ao lazer e à moradia, enquanto os direitos de segunda dimensão, fundados no princípio da solidariedade, têm titularidade transindividual e abrangem o direito ao meio ambiente ecologicamente equilibrado e o direito ao desenvolvimento.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "terceira dimensão ... sociais",
    cognitivo: {
      motivo: "Testar a troca entre a segunda e a terceira dimensões, mecanismo recorrente da banca.",
      palavraCritica: "solidariedade",
    },
    comentario: {
      resolucao: "ERRADO. As dimensões estão invertidas. A SEGUNDA dimensão é a dos direitos sociais, econômicos e culturais — saúde, educação, lazer, moradia —, ligada ao valor igualdade e a prestações positivas do Estado. A TERCEIRA é a dos direitos de solidariedade e fraternidade, de titularidade transindividual: meio ambiente, desenvolvimento, paz, autodeterminação dos povos.",
      fundamento: "Doutrina — dimensões dos direitos fundamentais.",
      macete: "Saúde, educação e moradia são de SEGUNDA. Meio ambiente é de TERCEIRA. Se o item disser o contrário, está trocado.",
      erroComum: "Aceitar o item por reconhecer que os exemplos citados existem e são direitos fundamentais — o erro está na dimensão a que foram atribuídos.",
      comoBancaPensa: "Lista exemplos corretos sob o rótulo errado, e apoia a inversão num princípio verdadeiro (solidariedade) posto na dimensão errada."
    }
  },
  {
    ...BASE93, disciplina: "Direitos Humanos",
    id: "DH-235", assunto: "Teoria dos direitos fundamentais", subassunto: "Dimensões — complementaridade",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "A expressão 'dimensões' é preferida por parte da doutrina à expressão 'gerações' porque afasta a ideia de substituição sucessiva entre as categorias de direitos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "substituição sucessiva",
    cognitivo: {
      motivo: "Cobrar a razão da preferência terminológica, ponto que separa memorização de compreensão.",
      palavraCritica: "dimensões",
    },
    comentario: {
      resolucao: "CERTO. A crítica ao termo 'gerações' é que ele sugere que uma categoria sucede e substitui a anterior, como ocorre entre gerações humanas. Não é o que se dá: os direitos se acumulam e se complementam — reconhecer o direito ao meio ambiente não revoga a liberdade de expressão. 'Dimensões' expressa melhor essa convivência simultânea.",
      fundamento: "Doutrina — crítica terminológica a 'gerações'; princípio da complementaridade.",
      macete: "Geração troca; dimensão soma. Por isso a doutrina moderna prefere dimensão.",
      erroComum: "Tratar a escolha do termo como preciosismo sem consequência.",
      comoBancaPensa: "Cobra o porquê da nomenclatura, e não a nomenclatura — filtro entre quem decorou a lista e quem entendeu."
    }
  },

  /* ============ ART. 5º, §§ 2º E 3º ================================== */

  {
    ...BASE93, disciplina: "Direito Constitucional",
    /* A primeira versão deste item transcrevia o § 3º e o validador a
       barrou: enunciado idêntico ao de DH-015. O dispositivo já tem sete
       questões no banco, e a supralegalidade, doze. O que faltava era a
       CONSEQUÊNCIA da equivalência — o que muda, na prática, quando o
       tratado alcança status de emenda. */
    id: "DC-130", assunto: "Direitos fundamentais", subassunto: "Tratado equivalente a emenda — consequências",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "O tratado de direitos humanos aprovado pelo rito do § 3º do art. 5º da Constituição Federal passa a integrar o bloco de constitucionalidade e pode servir de parâmetro para o controle de constitucionalidade das leis.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "parâmetro para o controle",
    cognitivo: {
      motivo: "Cobrar o efeito prático da equivalência a emenda, e não a repetição dos números do rito.",
      palavraCritica: "bloco de constitucionalidade",
    },
    comentario: {
      resolucao: "CERTO. Equivaler a emenda constitucional significa ter estatura de norma constitucional — e norma constitucional serve de parâmetro para aferir a validade das demais. O tratado assim aprovado passa, portanto, a integrar o bloco de constitucionalidade, e lei que o contrarie é inconstitucional, não meramente ilegal. Único caso no Brasil até hoje: a Convenção sobre os Direitos das Pessoas com Deficiência e seu Protocolo Facultativo, promulgados pelo Decreto 6.949/2009.",
      fundamento: "CF, art. 5º, § 3º (EC 45/2004); Decreto 6.949/2009 (Convenção de Nova York).",
      macete: "Status de emenda = vira régua. O que vira régua mede a validade do resto.",
      erroComum: "Parar na equivalência formal sem extrair o efeito: se é norma constitucional, é parâmetro de controle.",
      comoBancaPensa: "Cobra a consequência do dispositivo, filtro para quem decorou os números do rito mas não sabe para que servem."
    }
  },
  {
    ...BASE93, disciplina: "Direito Constitucional",
    id: "DC-131", assunto: "Direitos fundamentais", subassunto: "Cláusula de abertura (art. 5º, § 2º)",
    dificuldade: 3, tempoIdealSeg: 90,
    enunciado: "Por força do § 2º do art. 5º da Constituição Federal, os direitos e garantias nela expressos excluem outros decorrentes do regime e dos princípios por ela adotados, bem como os oriundos dos tratados internacionais de que a República Federativa do Brasil seja parte, os quais só ingressam no ordenamento após aprovação pelo rito das emendas constitucionais.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "excluem outros",
    cognitivo: {
      motivo: "Testar a inversão do verbo central do § 2º, que é cláusula de abertura e não de exclusão.",
      palavraCritica: "excluem",
    },
    comentario: {
      resolucao: "ERRADO, e por dois motivos. O § 2º diz que os direitos expressos NÃO EXCLUEM outros — é cláusula de abertura do catálogo, e o item inverte o verbo. Além disso, tratados de direitos humanos não aprovados pelo rito do § 3º ingressam no ordenamento assim mesmo, com status SUPRALEGAL, conforme o STF firmou no RE 466.343 a propósito do Pacto de San José da Costa Rica e da prisão do depositário infiel.",
      fundamento: "CF, art. 5º, §§ 2º e 3º; STF, RE 466.343 (supralegalidade); Súmula Vinculante 25.",
      macete: "O § 2º ABRE o rol, nunca fecha. E tratado sem rito de emenda não fica de fora: fica acima da lei e abaixo da Constituição.",
      erroComum: "Não perceber a troca de 'não excluem' por 'excluem', que muda o dispositivo por inteiro.",
      comoBancaPensa: "Suprime uma negação no meio de um período longo e emenda uma segunda afirmação falsa sobre o status dos tratados."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE93);
