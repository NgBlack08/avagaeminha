/* =====================================================================
   CEBRASPE LAB — Lote 11: SIMULADO com textos de apoio longos
   Reproduz a ESTRUTURA da prova real da banca: um texto/caso denso
   seguido de vários itens Certo/Errado que o julgam em sequência.
   São 4 blocos temáticos (18 itens), com textos ORIGINAIS redigidos
   no registro formal e técnico característico do CEBRASPE:
     BLOCO 1 — Texto dissertativo → itens de Língua Portuguesa
     BLOCO 2 — Caso concreto policial → itens de Penal e Processo Penal
     BLOCO 3 — Texto sobre atuação policial e DH → itens de DH e Const.
     BLOCO 4 — Cenário de investigação financeira → itens de dados
   Questões INÉDITAS, fundamentadas em legislação vigente e
   jurisprudência consolidada. Não reproduzem questões oficiais.
   ===================================================================== */

/* Textos de apoio (originais), compartilhados pelos itens de cada bloco */
const TXT_BLOCO1 = "A transformação digital alterou profundamente a atividade de investigação criminal. Se, no passado, a prova dependia sobretudo do testemunho e do exame físico do local do crime, hoje grande parte dos elementos probatórios encontra-se armazenada em dispositivos eletrônicos e em servidores remotos. Essa mudança impôs às instituições policiais a necessidade de qualificar seus quadros, uma vez que a compreensão técnica dos meios digitais tornou-se condição para a elucidação de delitos.\n\nNão se trata, contudo, de substituir o raciocínio investigativo pela técnica. O domínio das ferramentas tecnológicas, por mais sofisticado que seja, não dispensa a análise crítica dos dados obtidos, tampouco a observância das garantias constitucionais. A prova digital, tanto quanto a tradicional, submete-se ao devido processo legal, e sua obtenção irregular compromete a persecução penal.";

const TXT_BLOCO2 = "Durante patrulhamento em via pública, agentes de polícia civil foram informados por populares de que, em determinada residência, haveria intensa movimentação compatível com o comércio de entorpecentes. Ao se aproximarem do imóvel, os agentes visualizaram, pela janela aberta e sem necessidade de qualquer artifício, um indivíduo que manuseava diversas porções de substância análoga à cocaína sobre uma mesa, ao lado de uma balança de precisão e de material de embalagem.\n\nDiante disso, os agentes ingressaram no imóvel, sem mandado judicial, por volta das vinte e três horas, apreendendo trezentos gramas da substância, a balança e um aparelho de telefonia celular. O indivíduo, primário e de bons antecedentes, foi conduzido à delegacia, onde se lavrou o auto de prisão em flagrante.";

const TXT_BLOCO3 = "A atuação policial em um Estado Democrático de Direito submete-se a limites que não decorrem apenas da legislação interna, mas também dos compromissos internacionais assumidos pelo país. Instrumentos como a Convenção Americana sobre Direitos Humanos estabelecem parâmetros mínimos de tratamento da pessoa submetida à custódia estatal, entre os quais se destacam a vedação à tortura e o direito de ser julgado em prazo razoável.\n\nA observância desses parâmetros não representa obstáculo à eficiência da investigação. Ao contrário, a prova obtida com respeito às garantias tende a ser mais robusta, pois resiste ao controle de legalidade exercido pelo Poder Judiciário. A violação de direitos, além de comprometer o resultado do processo, expõe o Estado à responsabilização no plano internacional.";

const TXT_BLOCO4 = "Em investigação sobre organização criminosa dedicada ao tráfico de entorpecentes, a análise da movimentação bancária de um dos investigados revelou, ao longo de doze meses, oitenta e quatro depósitos em espécie, todos em valores imediatamente inferiores ao limite a partir do qual a instituição financeira estaria obrigada a comunicar a operação ao órgão de controle.\n\nOs depósitos foram distribuídos entre quatro contas de titularidade de pessoas sem capacidade econômica compatível com os montantes movimentados. No mesmo período, o investigado declarou, à administração tributária, rendimentos anuais equivalentes a cerca de um décimo do total movimentado nas referidas contas.";

const QUESTOES_PCAL_LOTE11 = [

  /* ============ BLOCO 1 — LÍNGUA PORTUGUESA (texto dissertativo) ============ */
  {
    id: "PT-016", disciplina: "Língua Portuguesa", assunto: "Compreensão e reescritura", subassunto: "Substituição de conectivo causal",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 1, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    textoApoio: TXT_BLOCO1,
    enunciado: "No primeiro parágrafo, a substituição da expressão “uma vez que” por porquanto preservaria a correção gramatical e a relação de sentido estabelecida no período.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "uma vez que / porquanto",
    cognitivo: {
      motivo: "Cobrar equivalência entre conectivos de mesmo valor semântico (causal).",
      mede: "Coesão — emprego de conectores (item 4.1 do edital).",
      pegadinhaDesc: "A banca alterna entre trocas legítimas (mesmo valor) e ilegítimas (valor diverso).",
      ondeErra: "Rejeita a troca por desconhecer o valor causal de 'porquanto'.",
      palavraCritica: "porquanto = porque (causal)",
      tecnica: "Só se troca conectivo por outro do MESMO valor lógico. Causais entre si: porque, uma vez que, porquanto, já que, visto que.",
      regraMental: "Causal ↔ causal: troca válida. Causal ↔ adversativo/conclusivo: troca inválida."
    },
    comentario: {
      resolucao: "CERTO. “Uma vez que” e “porquanto” são conjunções de valor CAUSAL (equivalem a “porque”). A substituição mantém a correção gramatical e a relação de causa entre a necessidade de qualificação dos quadros e a compreensão técnica dos meios digitais.",
      fundamento: "Gramática normativa — conjunções subordinativas causais.",
      macete: "Causais: porque, porquanto, uma vez que, já que, visto que — intercambiáveis.",
      erroComum: "Achar que 'porquanto' tem valor conclusivo.",
      comoBancaPensa: "Alterna trocas válidas e inválidas de conectivo para testar o valor lógico."
    }
  },
  {
    id: "PT-017", disciplina: "Língua Portuguesa", assunto: "Compreensão e reescritura", subassunto: "Adversativo × conclusivo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 1, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    textoApoio: TXT_BLOCO1,
    enunciado: "No segundo parágrafo, o vocábulo “contudo” poderia ser substituído por portanto, sem prejuízo da coerência argumentativa do texto.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "contudo / portanto",
    cognitivo: {
      motivo: "Distinguir conectivo adversativo de conclusivo.",
      mede: "Coesão sequencial (item 4.1 do edital).",
      pegadinhaDesc: "Troca um adversativo por um conclusivo, invertendo a articulação do argumento.",
      ondeErra: "Julga a fluência da frase e ignora a mudança da relação lógica.",
      palavraCritica: "contudo (oposição) × portanto (conclusão)",
      tecnica: "'Contudo' marca contraste com o parágrafo anterior; 'portanto' introduziria conclusão, o que desfaz o contraste.",
      regraMental: "Adversativos: mas, porém, contudo, todavia, entretanto. Conclusivos: logo, portanto, por isso."
    },
    comentario: {
      resolucao: "ERRADO. “Contudo” é conectivo ADVERSATIVO: introduz a ressalva de que a técnica não substitui o raciocínio investigativo, contrapondo-se ao parágrafo anterior. “Portanto” é CONCLUSIVO e transformaria a ressalva em consequência, alterando a coerência argumentativa.",
      fundamento: "Gramática normativa — coordenação (adversativas e conclusivas).",
      macete: "Contudo = oposição. Portanto = conclusão. Não se trocam.",
      erroComum: "Substituir conectivos de valores lógicos distintos.",
      comoBancaPensa: "Troca de conectivo que altera a articulação do argumento — formato nº 1 de Português."
    }
  },
  {
    id: "PT-018", disciplina: "Língua Portuguesa", assunto: "Crase", subassunto: "Regência e crase em reescritura",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 1, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    textoApoio: TXT_BLOCO1,
    enunciado: "Caso o trecho “submete-se ao devido processo legal” fosse reescrito como submete-se __ observância do devido processo legal, seria obrigatório o emprego do acento indicativo de crase na lacuna.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "submeter-se a + observância",
    cognitivo: {
      motivo: "Cobrar a crase resultante de regência verbal + artigo feminino.",
      mede: "Emprego do sinal indicativo de crase (item 5.7 do edital).",
      pegadinhaDesc: "Exige identificar que o verbo mantém a regência em 'a' e que o novo termo é feminino e admite artigo.",
      ondeErra: "Não percebe que a troca do termo regido cria a condição para a crase.",
      palavraCritica: "preposição 'a' (regência) + artigo 'a' (observância)",
      tecnica: "Teste do masculino: 'submete-se AO cumprimento' → apareceu 'ao', logo há crase no feminino.",
      regraMental: "Crase = preposição A (exigida pelo verbo) + artigo A (do substantivo feminino)."
    },
    comentario: {
      resolucao: "CERTO. O verbo “submeter-se” rege a preposição “a” (submeter-se A algo), e “observância” é substantivo feminino que admite o artigo “a”. Da fusão resulta a crase: “submete-se à observância do devido processo legal”. O teste do masculino confirma (“submete-se ao cumprimento”).",
      fundamento: "Gramática normativa — regência verbal e crase.",
      macete: "Trocou por masculino e virou 'ao'? Então no feminino é 'à'.",
      erroComum: "Não identificar a preposição exigida pela regência do verbo.",
      comoBancaPensa: "Reescritura que cria a condição de crase testa regência + artigo simultaneamente."
    }
  },
  {
    id: "PT-019", disciplina: "Língua Portuguesa", assunto: "Significação das palavras", subassunto: "Tampouco × tão pouco",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 1, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.75,
    textoApoio: TXT_BLOCO1,
    enunciado: "No segundo parágrafo, o vocábulo “tampouco” equivale, no contexto, a tão pouco, razão pela qual sua grafia poderia ser alterada para a forma separada sem prejuízo do sentido.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "tampouco / tão pouco",
    cognitivo: {
      motivo: "Distinguir 'tampouco' (= também não) de 'tão pouco' (intensidade/quantidade).",
      mede: "Significação das palavras (item 6.1 do edital).",
      pegadinhaDesc: "Iguala duas formas homófonas de sentidos distintos.",
      ondeErra: "Confia na semelhança sonora e ignora a diferença semântica.",
      palavraCritica: "tampouco = também não",
      tecnica: "Substitua por 'também não': se couber, é 'tampouco' (junto). Se a ideia for 'muito pouco', é 'tão pouco' (separado).",
      regraMental: "Tampouco = também não (negação). Tão pouco = quantidade reduzida."
    },
    comentario: {
      resolucao: "ERRADO. No contexto, “tampouco” significa “também não” (o domínio das ferramentas não dispensa a análise crítica, nem tampouco a observância das garantias). Já “tão pouco” exprime pequena quantidade/intensidade. As formas não são intercambiáveis: a alteração comprometeria o sentido.",
      fundamento: "Gramática normativa — semântica e ortografia.",
      macete: "Cabe 'também não'? Escreve junto: tampouco.",
      erroComum: "Tratar as formas homófonas como equivalentes.",
      comoBancaPensa: "Explora pares homófonos de sentidos distintos (tampouco/tão pouco, senão/se não)."
    }
  },
  {
    id: "PT-020", disciplina: "Língua Portuguesa", assunto: "Sintaxe", subassunto: "Pontuação — conjunção deslocada",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 1, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    textoApoio: TXT_BLOCO1,
    enunciado: "No segundo parágrafo, as vírgulas empregadas em “Não se trata, contudo, de substituir” justificam-se por isolar conjunção adversativa deslocada de sua posição inicial.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "conjunção deslocada",
    cognitivo: {
      motivo: "Cobrar a regra de pontuação da conjunção intercalada/deslocada.",
      mede: "Emprego dos sinais de pontuação (item 5.4 do edital).",
      pegadinhaDesc: "A banca costuma atribuir as vírgulas a aposto ou a adjunto adverbial.",
      ondeErra: "Não identifica 'contudo' como conjunção deslocada do início do período.",
      palavraCritica: "contudo intercalado entre vírgulas",
      tecnica: "Conjunção adversativa deslocada para o interior do período é isolada por vírgulas.",
      regraMental: "'Contudo/porém/todavia' no meio da frase: entre vírgulas (par obrigatório)."
    },
    comentario: {
      resolucao: "CERTO. Quando a conjunção adversativa é deslocada de sua posição inicial e intercalada no período, ela deve ser isolada por vírgulas — exatamente o caso de “Não se trata, contudo, de substituir”. A pontuação sinaliza o deslocamento.",
      fundamento: "Gramática normativa — pontuação de conjunções deslocadas.",
      macete: "Conjunção no meio da oração = entre vírgulas.",
      erroComum: "Classificar as vírgulas como isoladoras de aposto.",
      comoBancaPensa: "Pede a JUSTIFICATIVA da vírgula, não apenas se ela está correta."
    }
  },

  /* ============ BLOCO 2 — CASO CONCRETO: PENAL E PROCESSO PENAL ============ */
  {
    id: "PP-037", disciplina: "Processo Penal", assunto: "Prisão em flagrante", subassunto: "Flagrante em crime permanente",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 2, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.9,
    textoApoio: TXT_BLOCO2,
    enunciado: "Na situação hipotética, configurou-se flagrante próprio, uma vez que o indivíduo foi surpreendido enquanto cometia o delito, que, na modalidade de guardar ou ter em depósito, é de natureza permanente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "flagrante próprio / permanente",
    cognitivo: {
      motivo: "Aplicar as modalidades do art. 302 do CPP a um caso concreto de crime permanente.",
      mede: "Prisão em flagrante (item 3 do edital).",
      pegadinhaDesc: "A banca costuma rotular a hipótese como flagrante presumido ou impróprio.",
      ondeErra: "Não percebe que, no crime permanente, o agente 'está cometendo' o delito continuamente.",
      palavraCritica: "está cometendo (inciso I) + permanência",
      tecnica: "Crime permanente: a consumação se protrai, logo o agente está sempre 'cometendo' — flagrante próprio a qualquer tempo.",
      regraMental: "Guardar/ter em depósito droga = permanente = flagrante próprio enquanto durar."
    },
    comentario: {
      resolucao: "CERTO. O tráfico nas modalidades “guardar” e “ter em depósito” é crime PERMANENTE; a consumação se prolonga no tempo. Assim, o agente foi surpreendido enquanto cometia a infração, o que caracteriza o flagrante PRÓPRIO (CPP, art. 302, I), reforçado pelo art. 303 do CPP.",
      fundamento: "CPP, arts. 302, I, e 303; Lei 11.343/2006, art. 33.",
      macete: "Permanente = flagrante próprio o tempo todo, enquanto não cessar a permanência.",
      erroComum: "Classificar como flagrante presumido ou impróprio.",
      comoBancaPensa: "Aplica a teoria (modalidades de flagrante) a um caso concreto narrado."
    }
  },
  {
    id: "PP-038", disciplina: "Processo Penal", assunto: "Provas", subassunto: "Ingresso domiciliar com fundadas razões",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 2, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.92,
    textoApoio: TXT_BLOCO2,
    enunciado: "O ingresso dos agentes no imóvel, ainda que realizado durante o período noturno e sem mandado judicial, foi lícito, pois amparado em fundadas razões, objetivamente demonstradas, de que ali ocorria situação de flagrante delito.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "fundadas razões / período noturno",
    cognitivo: {
      motivo: "Aplicar a tese do RE 603.616 do STF ao caso concreto.",
      mede: "Busca domiciliar e disposições constitucionais (art. 5º, XI, da CF).",
      pegadinhaDesc: "O 'período noturno' ativa o reflexo do 'durante o dia', que só vale para o mandado.",
      ondeErra: "Aplica a restrição horária da ordem judicial à hipótese de flagrante.",
      palavraCritica: "flagrante autoriza a qualquer hora",
      tecnica: "Aqui as fundadas razões são objetivas: visualização direta da conduta, sem artifício — não é mera denúncia anônima.",
      regraMental: "Flagrante não tem hora. Mas exige fundadas razões demonstráveis a posteriori."
    },
    comentario: {
      resolucao: "CERTO. CF, art. 5º, XI: em caso de flagrante delito, o ingresso é lícito A QUALQUER HORA. Conforme o STF (RE 603.616), exige-se que haja fundadas razões, justificadas a posteriori, de que ocorre crime no interior do imóvel — o que se verifica pela visualização direta da conduta, sem artifício. Ressalte-se que a mera denúncia anônima, isolada, não bastaria (STJ, HC 598.051).",
      fundamento: "CF, art. 5º, XI; STF, RE 603.616; STJ, HC 598.051; CPP, art. 303.",
      macete: "Viu o crime acontecendo lá dentro? Pode entrar, de dia ou de noite.",
      erroComum: "Exigir mandado ou restringir o ingresso ao período diurno.",
      comoBancaPensa: "Combina CF + tese de repercussão geral aplicada a um caso narrado."
    }
  },
  {
    id: "PP-039", disciplina: "Processo Penal", assunto: "Provas", subassunto: "Acesso a dados de celular apreendido",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 2, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.9,
    textoApoio: TXT_BLOCO2,
    enunciado: "Por ter sido lícita a apreensão do aparelho de telefonia celular, os agentes estariam autorizados, independentemente de prévia ordem judicial, a acessar de imediato o conteúdo das conversas registradas em aplicativos de mensagens do aparelho.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "independentemente de ordem judicial",
    cognitivo: {
      motivo: "Separar a licitude da APREENSÃO da licitude do ACESSO ao conteúdo.",
      mede: "Busca e apreensão de itens digitais (item do edital).",
      pegadinhaDesc: "Parte de uma premissa verdadeira (apreensão lícita) para uma conclusão falsa (acesso livre).",
      ondeErra: "Deduz que apreender legitimamente autoriza devassar o conteúdo.",
      palavraCritica: "apreender ≠ acessar conteúdo",
      tecnica: "O conteúdo (dados e comunicações) é protegido pela intimidade e pelo sigilo — exige autorização judicial.",
      regraMental: "Pode apreender no flagrante; para ler as mensagens, precisa do juiz."
    },
    comentario: {
      resolucao: "ERRADO. A apreensão lícita do aparelho NÃO autoriza, por si só, o acesso ao seu conteúdo. Conforme o STJ, a devassa de dados e conversas armazenadas em celular sem autorização judicial é ilícita, por violação à intimidade e ao sigilo de dados (CF, art. 5º, X e XII), contaminando a prova dela derivada.",
      fundamento: "CF, art. 5º, X e XII; CPP, arts. 157 e 240; jurisprudência do STJ; Marco Civil da Internet.",
      macete: "Apreendeu: ok. Vai ler o WhatsApp: só com ordem judicial.",
      erroComum: "Confundir a licitude da apreensão com a do acesso ao conteúdo.",
      comoBancaPensa: "Verdade + falso emendado: a premissa correta 'carrega' a conclusão errada."
    }
  },
  {
    id: "DP-051", disciplina: "Direito Penal", assunto: "Legislação penal especial aplicada", subassunto: "Tráfico privilegiado no caso concreto",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 2, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    textoApoio: TXT_BLOCO2,
    enunciado: "Considerando que o indivíduo é primário e de bons antecedentes, a quantidade de droga apreendida, por si só, impede automaticamente o reconhecimento da causa de diminuição de pena prevista para o tráfico privilegiado.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "por si só, impede automaticamente",
    cognitivo: {
      motivo: "Cobrar os requisitos do art. 33, § 4º, e o papel da quantidade como indício (não vedação automática).",
      mede: "Lei de Drogas — tráfico privilegiado.",
      pegadinhaDesc: "Transforma um elemento de valoração (quantidade) em causa automática de exclusão.",
      ondeErra: "Cria vedação legal inexistente baseada apenas no volume apreendido.",
      palavraCritica: "por si só / automaticamente",
      tecnica: "Requisitos do § 4º: primariedade, bons antecedentes, não dedicação a atividades criminosas e não integrar organização criminosa. A quantidade é indício a ser valorado, não vedação automática.",
      regraMental: "Quantidade é indício de dedicação ao tráfico — pode afastar o privilégio, mas exige fundamentação, não é automática."
    },
    comentario: {
      resolucao: "ERRADO. A causa de diminuição do art. 33, § 4º, da Lei 11.343/2006 exige primariedade, bons antecedentes, não dedicação a atividades criminosas e não integrar organização criminosa. A quantidade e a natureza da droga podem ser valoradas como INDÍCIO de dedicação ao tráfico, mas não constituem, por si sós, causa automática de exclusão do benefício — exige-se fundamentação concreta.",
      fundamento: "Lei 11.343/2006, arts. 33, § 4º, e 42; jurisprudência do STF/STJ.",
      macete: "Quantidade pesa, mas não elimina o privilégio sozinha: precisa demonstrar a dedicação ao crime.",
      erroComum: "Tratar a quantidade como impeditivo automático.",
      comoBancaPensa: "Termo absoluto ('por si só', 'automaticamente') sobre requisito que exige valoração."
    }
  },
  {
    id: "DP-052", disciplina: "Direito Penal", assunto: "Legislação penal especial aplicada", subassunto: "Tráfico × porte para consumo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 2, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    textoApoio: TXT_BLOCO2,
    enunciado: "Como não houve flagrante de ato de mercancia — isto é, de efetiva venda da substância a terceiro —, a conduta descrita amolda-se ao porte de droga para consumo pessoal, e não ao crime de tráfico.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "efetiva venda",
    cognitivo: {
      motivo: "Cobrar que o tráfico é crime de ação múltipla, não exigindo a venda efetiva.",
      mede: "Lei de Drogas — tipificação.",
      pegadinhaDesc: "Cria a exigência de mercancia efetiva para a configuração do tráfico.",
      ondeErra: "Ignora que 'guardar', 'ter em depósito' e 'transportar' já configuram o art. 33.",
      palavraCritica: "efetiva venda (não é exigida)",
      tecnica: "Art. 33 é tipo misto alternativo com 18 verbos: guardar, ter em depósito, transportar etc. — a venda é apenas um deles.",
      regraMental: "Não precisa vender para ser tráfico. Guardar ou ter em depósito já basta."
    },
    comentario: {
      resolucao: "ERRADO. O art. 33 da Lei 11.343/2006 é tipo de ação múltipla (misto alternativo), contemplando dezoito verbos — entre eles “guardar”, “ter em depósito” e “transportar”. Não se exige a efetiva mercancia. Ademais, as circunstâncias (quantidade, balança de precisão e material de embalagem) indicam destinação ao tráfico, conforme os critérios do art. 28, § 2º.",
      fundamento: "Lei 11.343/2006, arts. 33 e 28, § 2º.",
      macete: "Balança + porções + embalagem = destinação ao tráfico, mesmo sem flagrar a venda.",
      erroComum: "Exigir a venda efetiva para caracterizar o tráfico.",
      comoBancaPensa: "Cria requisito inexistente (mercancia) para desclassificar a conduta."
    }
  },

  /* ============ BLOCO 3 — DIREITOS HUMANOS E CONSTITUCIONAL ============ */
  {
    id: "DH-021", disciplina: "Direitos Humanos", assunto: "Convenção Americana", subassunto: "Vedação à tortura",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 3, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    textoApoio: TXT_BLOCO3,
    enunciado: "A vedação à tortura, mencionada no texto, constitui garantia de caráter absoluto, não admitindo relativização nem mesmo em situações excepcionais, como estado de sítio ou grave comoção interna.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "caráter absoluto",
    cognitivo: {
      motivo: "Cobrar a natureza absoluta (inderrogável) da vedação à tortura.",
      mede: "Convenção Americana e DH na CF (item 6 do edital).",
      pegadinhaDesc: "Usa um termo absoluto que, excepcionalmente, é VERDADEIRO — punindo quem aplica a heurística cegamente.",
      ondeErra: "Marca 'errado' por reflexo, ao ver 'caráter absoluto'.",
      palavraCritica: "absoluto (aqui, correto)",
      tecnica: "A vedação à tortura é norma inderrogável (jus cogens): não se suspende nem em estados de exceção.",
      regraMental: "Regra: direitos são relativos. Exceção clássica: vedação à tortura é absoluta."
    },
    comentario: {
      resolucao: "CERTO. A vedação à tortura é inderrogável: a CADH (art. 27) não admite a suspensão do art. 5º nem em situações excepcionais, e a CF a trata como garantia insuscetível de relativização (art. 5º, III, e XLIII). Trata-se de norma de jus cogens no direito internacional.",
      fundamento: "CF, art. 5º, III e XLIII; CADH, arts. 5º e 27; Lei 9.455/1997.",
      macete: "Quase nada é absoluto — mas a proibição da tortura é.",
      erroComum: "Marcar E por reflexo ao ver 'absoluto'.",
      comoBancaPensa: "Planta um termo absoluto VERDADEIRO para punir o atalho sem conteúdo."
    }
  },
  {
    id: "DH-022", disciplina: "Direitos Humanos", assunto: "Sistema interamericano", subassunto: "Responsabilização internacional",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 3, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    textoApoio: TXT_BLOCO3,
    enunciado: "A responsabilização do Estado no plano internacional, referida ao final do texto, é exercida, no sistema interamericano, pela Comissão Interamericana de Direitos Humanos, órgão jurisdicional competente para proferir sentenças condenatórias contra os Estados-partes.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "Comissão / órgão jurisdicional",
    cognitivo: {
      motivo: "Distinguir as competências da Comissão e da Corte Interamericana.",
      mede: "Sistema interamericano de proteção (item 6 do edital).",
      pegadinhaDesc: "Atribui à Comissão a função jurisdicional, que pertence à Corte.",
      ondeErra: "Confunde os dois órgãos do sistema.",
      palavraCritica: "Comissão como órgão jurisdicional (falso)",
      tecnica: "Comissão: recebe petições, investiga, recomenda e pode submeter o caso à Corte. Corte: julga e condena.",
      regraMental: "Comissão recomenda e 'acusa'; a Corte julga e condena."
    },
    comentario: {
      resolucao: "ERRADO. A Comissão Interamericana NÃO é órgão jurisdicional: analisa petições, formula recomendações e pode submeter o caso à Corte. Quem profere sentenças condenatórias contra os Estados é a CORTE Interamericana de Direitos Humanos, órgão jurisdicional do sistema.",
      fundamento: "CADH — Comissão (arts. 34 e ss.) e Corte (arts. 52 e ss.).",
      macete: "Comissão recomenda; Corte condena.",
      erroComum: "Atribuir função jurisdicional à Comissão.",
      comoBancaPensa: "Troca as funções dos dois órgãos do sistema interamericano."
    }
  },
  {
    id: "DC-020", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Prova obtida com violação de garantias",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 3, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.88,
    textoApoio: TXT_BLOCO3,
    enunciado: "A afirmação de que a obtenção irregular da prova compromete a persecução penal encontra respaldo na Constituição Federal, que declara inadmissíveis, no processo, as provas obtidas por meios ilícitos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "inadmissíveis / meios ilícitos",
    cognitivo: {
      motivo: "Vincular a ideia do texto à garantia do art. 5º, LVI, da CF.",
      mede: "Direitos e garantias fundamentais.",
      pegadinhaDesc: "A banca costuma negar a previsão constitucional, atribuindo a regra só ao CPP.",
      ondeErra: "Desconhece que a vedação é expressa na Constituição.",
      palavraCritica: "inadmissíveis no processo",
      tecnica: "Art. 5º, LVI, da CF é a base; o art. 157 do CPP regulamenta o desentranhamento e a prova derivada.",
      regraMental: "Prova ilícita: vedação está na CF (LVI) e é detalhada no CPP (157)."
    },
    comentario: {
      resolucao: "CERTO. CF, art. 5º, LVI: “são inadmissíveis, no processo, as provas obtidas por meios ilícitos”. O CPP, art. 157, disciplina o desentranhamento e a contaminação das provas derivadas (frutos da árvore envenenada), ressalvadas a fonte independente e a descoberta inevitável.",
      fundamento: "CF, art. 5º, LVI; CPP, art. 157.",
      macete: "Prova ilícita: sai do processo e contamina o que dela derivar.",
      erroComum: "Atribuir a vedação apenas à lei processual.",
      comoBancaPensa: "Pede a ancoragem constitucional de uma ideia apresentada no texto."
    }
  },
  {
    id: "DC-021", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais", subassunto: "Status dos tratados de DH",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 3, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    textoApoio: TXT_BLOCO3,
    enunciado: "Os compromissos internacionais mencionados no texto, por versarem sobre direitos humanos, incorporam-se ao ordenamento jurídico brasileiro com status de norma constitucional, independentemente do procedimento adotado para sua aprovação pelo Congresso Nacional.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "independentemente do procedimento",
    cognitivo: {
      motivo: "Cobrar a distinção entre status constitucional (rito do § 3º) e supralegal.",
      mede: "A Constituição e os tratados internacionais de DH (item 6 do edital).",
      pegadinhaDesc: "Generaliza o status constitucional a todos os tratados de DH.",
      ondeErra: "Ignora a exigência do rito qualificado do art. 5º, § 3º.",
      palavraCritica: "independentemente do procedimento (falso)",
      tecnica: "Rito do § 3º (2 turnos, 3/5 em cada Casa) = equivalente a emenda. Sem ele = supralegal (STF, RE 466.343).",
      regraMental: "Tratado de DH sem rito especial: acima da lei, abaixo da Constituição (supralegal)."
    },
    comentario: {
      resolucao: "ERRADO. Somente os tratados de direitos humanos aprovados pelo rito do art. 5º, § 3º, da CF (dois turnos, três quintos em cada Casa) equivalem a emendas constitucionais. Os demais — como a própria Convenção Americana, internalizada pelo Decreto 678/1992 — possuem status SUPRALEGAL, conforme firmou o STF.",
      fundamento: "CF, art. 5º, §§ 2º e 3º; STF, RE 466.343; Decreto 678/1992.",
      macete: "Com rito de emenda: constitucional. Sem ele: supralegal.",
      erroComum: "Dar status constitucional a todo tratado de DH.",
      comoBancaPensa: "Generaliza (termo absoluto) o status dos tratados, ignorando o rito."
    }
  },

  /* ============ BLOCO 4 — INVESTIGAÇÃO FINANCEIRA E ANÁLISE DE DADOS ============ */
  {
    id: "CT-013", disciplina: "Contabilidade e Análise Financeira", assunto: "Tipologias de lavagem", subassunto: "Smurfing (fracionamento)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 4, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.9,
    textoApoio: TXT_BLOCO4,
    enunciado: "O fracionamento dos depósitos em valores imediatamente inferiores ao limite de comunicação obrigatória, associado ao uso de contas de terceiros sem capacidade econômica compatível, caracteriza as tipologias conhecidas como smurfing e utilização de interpostas pessoas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "smurfing / interpostas pessoas",
    cognitivo: {
      motivo: "Reconhecer tipologias de lavagem listadas nominalmente no edital.",
      mede: "Indícios de fraude e ocultação patrimonial (item III do edital).",
      pegadinhaDesc: "A banca costuma trocar o nome da tipologia ou negar a caracterização.",
      ondeErra: "Não associa o fracionamento deliberado ao termo técnico 'smurfing'.",
      palavraCritica: "fracionamento para evitar detecção",
      tecnica: "Smurfing: dividir a operação em várias menores para ficar abaixo do limite de reporte. Interpostas pessoas: 'laranjas'.",
      regraMental: "Depósitos logo abaixo do limite + laranjas = smurfing clássico."
    },
    comentario: {
      resolucao: "CERTO. O fracionamento intencional de valores para permanecer abaixo do limite de comunicação obrigatória é a tipologia denominada SMURFING (ou structuring). O uso de contas de pessoas sem lastro econômico caracteriza a utilização de “laranjas” (interpostas pessoas) — ambas expressamente listadas no programa do certame.",
      fundamento: "Lei 9.613/1998; normas do COAF; tipologias de lavagem.",
      macete: "Vários depósitos 'quase no limite' = smurfing. Conta de terceiro sem renda = laranja.",
      erroComum: "Não identificar o nome técnico da tipologia.",
      comoBancaPensa: "Aplica tipologias do edital a um cenário investigativo concreto."
    }
  },
  {
    id: "CT-014", disciplina: "Contabilidade e Análise Financeira", assunto: "Lavagem de dinheiro", subassunto: "Fases da lavagem",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 4, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.85,
    textoApoio: TXT_BLOCO4,
    enunciado: "Os depósitos em espécie descritos correspondem à fase de integração do processo de lavagem de dinheiro, que, segundo a doutrina, antecede as fases de ocultação e de colocação.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "integração / ordem das fases",
    cognitivo: {
      motivo: "Cobrar a ordem e o conteúdo das fases da lavagem.",
      mede: "Lavagem de dinheiro — fases (item do edital).",
      pegadinhaDesc: "Inverte a ordem das fases e classifica erradamente o depósito em espécie.",
      ondeErra: "Confunde colocação (entrada do dinheiro no sistema) com integração (reintrodução com aparência lícita).",
      palavraCritica: "integração (deveria ser colocação)",
      tecnica: "Ordem: 1) COLOCAÇÃO (placement) — introduz o dinheiro no sistema; 2) OCULTAÇÃO (layering) — dificulta o rastreio; 3) INTEGRAÇÃO — retorna com aparência lícita.",
      regraMental: "C-O-I: Colocação → Ocultação → Integração. Depósito em espécie é COLOCAÇÃO."
    },
    comentario: {
      resolucao: "ERRADO. Há dois erros. Primeiro, o depósito em espécie corresponde à fase de COLOCAÇÃO (placement), em que os valores ingressam no sistema financeiro. Segundo, a ordem correta das fases é colocação → ocultação (layering) → integração, e não a apresentada.",
      fundamento: "Doutrina sobre lavagem de dinheiro (modelo trifásico do GAFI); Lei 9.613/1998.",
      macete: "C-O-I: Coloca, Oculta, Integra. Depósito em espécie está no começo.",
      erroComum: "Inverter a ordem das fases ou trocar colocação por integração.",
      comoBancaPensa: "Inverte a sequência de um processo em etapas — pegadinha clássica."
    }
  },
  {
    id: "ES-022", disciplina: "Estatística e Análise de Dados", assunto: "Análise de dados", subassunto: "Incompatibilidade patrimonial",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 4, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.82,
    textoApoio: TXT_BLOCO4,
    enunciado: "A comparação entre os rendimentos declarados e o volume total movimentado constitui técnica de análise apta a evidenciar incompatibilidade entre os fluxos financeiros e a capacidade econômica declarada do investigado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "fluxos × capacidade econômica declarada",
    cognitivo: {
      motivo: "Reconhecer a comparação renda × movimentação como técnica investigativa do edital.",
      mede: "Comparação entre fluxos financeiros e capacidade econômica (item III do edital).",
      pegadinhaDesc: "A banca costuma negar a validade da técnica ou exigir prova pericial exclusiva.",
      ondeErra: "Subestima a análise comparativa como indício idôneo.",
      palavraCritica: "incompatibilidade patrimonial",
      tecnica: "Movimentação muito superior à renda declarada é red flag clássica de lavagem/ocultação patrimonial.",
      regraMental: "Movimentou 10x o que declarou? Indício forte de incompatibilidade patrimonial."
    },
    comentario: {
      resolucao: "CERTO. A confrontação entre a movimentação financeira e a renda declarada é técnica expressamente prevista no programa (“comparação entre fluxos financeiros e capacidade econômica declarada”) e constitui indício relevante de ocultação patrimonial, a ser corroborado por outros elementos.",
      fundamento: "Técnicas de análise financeira investigativa; Lei 9.613/1998.",
      macete: "Renda declarada muito menor que a movimentação = sinal de alerta.",
      erroComum: "Desconsiderar a análise comparativa como indício.",
      comoBancaPensa: "Cobra a aplicação prática de uma técnica listada no edital."
    }
  },
  {
    id: "ES-023", disciplina: "Estatística e Análise de Dados", assunto: "Medidas de dispersão", subassunto: "Desvio padrão em valores próximos",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — simulado estilo CEBRASPE (bloco 4, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    textoApoio: TXT_BLOCO4,
    enunciado: "Uma vez que os oitenta e quatro depósitos apresentam valores próximos entre si, todos imediatamente inferiores ao limite de comunicação, o desvio padrão desse conjunto de valores será necessariamente igual a zero.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "necessariamente igual a zero",
    cognitivo: {
      motivo: "Distinguir baixa dispersão de dispersão nula.",
      mede: "Medidas de dispersão (item 2 do edital de Estatística).",
      pegadinhaDesc: "Confunde 'valores próximos' (desvio pequeno) com 'valores idênticos' (desvio zero).",
      ondeErra: "Assume que proximidade implica igualdade absoluta.",
      palavraCritica: "necessariamente zero (falso)",
      tecnica: "Desvio padrão é zero SOMENTE quando todos os valores são exatamente iguais. Valores próximos geram desvio pequeno, porém positivo.",
      regraMental: "Desvio zero = todos idênticos. Só 'parecidos' = desvio pequeno, mas maior que zero."
    },
    comentario: {
      resolucao: "ERRADO. O desvio padrão é igual a zero apenas quando TODOS os valores do conjunto são exatamente iguais. Valores meramente próximos entre si produzem desvio padrão pequeno, mas necessariamente positivo. A proximidade indica baixa dispersão, não dispersão nula.",
      fundamento: "Estatística descritiva — variância e desvio padrão.",
      macete: "Desvio zero só se todos os números forem idênticos. 'Parecido' não é 'igual'.",
      erroComum: "Concluir dispersão nula a partir de valores apenas próximos.",
      comoBancaPensa: "Termo absoluto ('necessariamente zero') sobre medida que exige igualdade exata."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE11);
