/* =====================================================================
   QUESTLAB — LOTE 78 — Legislação Especial: lacunas do 2º ciclo

   POR QUE ESTE LOTE EXISTE

   O cronograma de leitura do 2º ciclo da PC-AL distribui 33 dias entre
   14 diplomas. Cruzando esse peso com o que o banco já tinha, o
   desequilíbrio ficou evidente:

     diploma                          dias de leitura   itens no banco
     Crimes falimentares (11.101/05)        8                  6
     Estatuto da Pessoa com Deficiência     3                  1
     Crimes de responsabilidade (1.079/50)  2                  1
     Ordem econômica (8.176/91)             1                  0
     Convenção de Budapeste                 2                  2
     ---------------------------------------------------------------
     Lavagem de dinheiro (9.613/98)         1                 29

   Ou seja: o assunto com MAIS dias de leitura tinha menos itens que o
   assunto com MENOS dias. Este lote corrige a inversão, priorizando
   falimentares e o Estatuto da Pessoa com Deficiência.

   DUAS ATUALIZAÇÕES LEGISLATIVAS QUE QUASE NINGUÉM TEM NO BANCO

   1. Lei nº 15.163/2025 alterou o art. 90 do Estatuto da Pessoa com
      Deficiência: a pena do abandono subiu de 6 meses–3 anos para
      2–5 anos, e foram criadas formas qualificadas por lesão grave
      (3–7 anos) e morte. Banco desatualizado erra o item inteiro.

   2. Lei nº 15.348/2026 deu nova redação ao art. 1º, II, da Lei
      8.176/1991 (uso de GLP para fins automotivos).

   UMA CORREÇÃO DE NUMERAÇÃO

   Materiais de cursinho circulam citando "Lei nº 1.176/1981" para os
   crimes contra a ordem econômica. A numeração correta é Lei nº
   8.176, de 8 de fevereiro de 1991. A prova interna é o próprio texto:
   seu art. 6º revoga o art. 18 da Lei nº 8.137/1990 — uma lei de 1981
   não teria como revogar dispositivo de 1990. Aqui vale a numeração
   correta, e um dos itens cobra exatamente isso.

   SOBRE COMPRIMENTO E GABARITO

   Gabarito 19 CERTO / 15 ERRADO, decidido ANTES da redação de cada
   item, para não repetir o vazamento de "regra cega" dos lotes 75 e 77
   (item longo tendendo a CERTO). Medido: comprimento médio de 155
   caracteres nos CERTOS e 158 nos ERRADOS, vazamento de 2,9pp contra
   uma mediana de 5,9pp sob gabarito embaralhado (p = 0,93) — ou seja,
   abaixo do que o próprio método de medição produz por acaso nesta
   ordem de grandeza. Ver a nota metodológica no cabeçalho do lote 77.
   ===================================================================== */

const CARGOS78 = ["Escrivão", "Agente"];
const BASE78 = {
  disciplina: "Legislação Especial", concurso: "PCAL", cargo: CARGOS78, ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
};

const QUESTOES_PCAL_LOTE78 = [

  /* ============ CRIMES FALIMENTARES — Lei nº 11.101/2005 ============ */

  {
    ...BASE78,
    id: "LE-232", assunto: "Crimes Falimentares", subassunto: "Fraude a credores — art. 168",
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "O crime de fraude a credores pode ser praticado antes da sentença que decreta a falência.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "antes ou depois da sentença",
    cognitivo: {
      motivo: "Fixar que o art. 168 abrange conduta anterior à sentença, ponto que contraria a intuição de que o crime falimentar só existiria após a quebra.",
      palavraCritica: "antes",
    },
    comentario: {
      resolucao: "CERTO. O art. 168 é expresso: 'Praticar, ANTES OU DEPOIS da sentença que decretar a falência, conceder a recuperação judicial ou homologar a recuperação extrajudicial, ato fraudulento...'. A anterioridade da conduta não afasta a tipicidade.",
      fundamento: "Lei nº 11.101/2005, art. 168, caput.",
      macete: "Nos crimes falimentares, a sentença não é o marco da conduta — é condição objetiva de punibilidade (art. 180).",
      erroComum: "Supor que sem falência decretada não há crime, confundindo o momento da CONDUTA com o da PUNIBILIDADE.",
      comoBancaPensa: "Explora a intuição temporal errada: o candidato imagina que o crime nasce com a quebra."
    }
  },
  {
    ...BASE78,
    id: "LE-233", assunto: "Crimes Falimentares", subassunto: "Condição objetiva de punibilidade — art. 180",
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "A sentença que decreta a falência, concede a recuperação judicial ou concede a recuperação extrajudicial constitui elementar do tipo dos crimes previstos na Lei de Falências, de modo que sua ausência acarreta atipicidade da conduta.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "elementar do tipo",
    cognitivo: {
      motivo: "Distinguir condição objetiva de punibilidade de elementar do tipo — categorias que a banca embaralha com frequência.",
      palavraCritica: "elementar",
    },
    comentario: {
      resolucao: "ERRADO. O art. 180 classifica a sentença como CONDIÇÃO OBJETIVA DE PUNIBILIDADE, não como elementar do tipo. A distinção tem consequência prática: a condição objetiva fica fora do dolo (não precisa ser abrangida pela consciência do agente) e sua ausência impede a punição, não torna a conduta atípica.",
      fundamento: "Lei nº 11.101/2005, art. 180.",
      macete: "Elementar integra o tipo e exige dolo; condição objetiva de punibilidade fica fora do tipo e do dolo.",
      erroComum: "Tratar as duas categorias como sinônimos porque ambas condicionam a responsabilização.",
      comoBancaPensa: "Troca a categoria dogmática mantendo a conclusão prática plausível — o candidato concorda com o efeito e não confere o rótulo."
    }
  },
  {
    ...BASE78,
    id: "LE-234", assunto: "Crimes Falimentares", subassunto: "Efeitos da condenação — art. 181",
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "A inabilitação para o exercício de atividade empresarial, decorrente da condenação por crime falimentar, é efeito automático da sentença condenatória.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "efeito automático",
    cognitivo: {
      motivo: "Cobrar o § 1º do art. 181, que afasta a automaticidade dos efeitos — ponto simétrico ao art. 92, parágrafo único, do Código Penal.",
      palavraCritica: "automático",
    },
    comentario: {
      resolucao: "ERRADO. O art. 181, § 1º, é expresso ao exigir que os efeitos da condenação NÃO sejam automáticos: devem ser motivadamente declarados na sentença. A regra acompanha a lógica do art. 92, parágrafo único, do Código Penal.",
      fundamento: "Lei nº 11.101/2005, art. 181, caput e § 1º.",
      macete: "Efeito extrapenal específico nunca é automático: precisa de fundamentação expressa na sentença.",
      erroComum: "Confundir com os efeitos genéricos do art. 91 do CP, esses sim automáticos.",
      comoBancaPensa: "Explora a distinção entre efeitos genéricos (automáticos) e específicos (declarados) da condenação."
    }
  },
  {
    ...BASE78,
    id: "LE-235", assunto: "Crimes Falimentares", subassunto: "Ação penal privada subsidiária — art. 184, § único",
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Decorrido o prazo legal sem oferecimento de denúncia pelo Ministério Público, apenas o administrador judicial tem legitimidade para propor ação penal privada subsidiária da pública.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "apenas o administrador judicial",
    cognitivo: {
      motivo: "Cobrar o rol completo de legitimados, que a banca costuma amputar.",
      palavraCritica: "apenas",
    },
    comentario: {
      resolucao: "ERRADO. O parágrafo único do art. 184 legitima QUALQUER CREDOR HABILITADO OU o administrador judicial. O item suprime o credor habilitado e restringe indevidamente o rol.",
      fundamento: "Lei nº 11.101/2005, art. 184, parágrafo único.",
      macete: "São dois legitimados: credor habilitado E administrador judicial. Item que cita só um está incompleto.",
      erroComum: "Aceitar o administrador judicial como legitimado natural e não notar a exclusão do credor.",
      comoBancaPensa: "Restrição indevida: tudo o que o item afirma é verdadeiro, mas o 'apenas' exclui quem a lei incluiu."
    }
  },
  {
    ...BASE78,
    id: "LE-236", assunto: "Crimes Falimentares", subassunto: "Competência — art. 183",
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Compete ao próprio juízo falimentar, por força da vis attractiva, processar e julgar a ação penal pelos crimes falimentares.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "próprio juízo falimentar",
    cognitivo: {
      motivo: "Separar competência criminal de competência falimentar, que o candidato tende a unificar.",
      palavraCritica: "juízo falimentar",
    },
    comentario: {
      resolucao: "ERRADO. O art. 183 atribui a competência ao JUIZ CRIMINAL da jurisdição onde tenha sido decretada a falência ou concedida a recuperação — não ao juízo falimentar. A vis attractiva do juízo universal opera no plano cível, não no criminal.",
      fundamento: "Lei nº 11.101/2005, art. 183.",
      macete: "Juízo falimentar julga a falência; juiz criminal da mesma comarca julga o crime falimentar.",
      erroComum: "Estender o juízo universal da falência à esfera penal.",
      comoBancaPensa: "Usa um instituto verdadeiro (vis attractiva) em campo onde ele não se aplica."
    }
  },
  {
    ...BASE78,
    id: "LE-237", assunto: "Crimes Falimentares", subassunto: "Prescrição — art. 182",
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "A prescrição dos crimes falimentares começa a correr do dia da prática da conduta delituosa.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "da prática da conduta",
    cognitivo: {
      motivo: "Cobrar o termo inicial especial do art. 182, que afasta a regra geral do art. 111 do CP.",
      palavraCritica: "prática da conduta",
    },
    comentario: {
      resolucao: "ERRADO. O art. 182 fixa termo inicial próprio: a prescrição começa a correr DO DIA DA DECRETAÇÃO DA FALÊNCIA, da concessão da recuperação judicial ou da homologação do plano de recuperação extrajudicial. A regra geral do art. 111 do Código Penal (data da consumação) é afastada.",
      fundamento: "Lei nº 11.101/2005, art. 182, caput.",
      macete: "Falimentar tem termo inicial próprio: conta da sentença, não do fato.",
      erroComum: "Aplicar automaticamente a regra geral do CP por ela ser a mais conhecida.",
      comoBancaPensa: "Oferece a regra geral correta em outro contexto, apostando que o candidato não conhece a especial."
    }
  },
  {
    ...BASE78,
    id: "LE-238", assunto: "Crimes Falimentares", subassunto: "Prescrição — interrupção",
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "A decretação da falência do devedor interrompe a prescrição cuja contagem tenha se iniciado com a concessão da recuperação judicial.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "interrompe",
    cognitivo: {
      motivo: "Cobrar a causa interruptiva específica do parágrafo único do art. 182.",
      palavraCritica: "interrompe",
    },
    comentario: {
      resolucao: "CERTO. Reprodução do art. 182, parágrafo único. A lógica é que a quebra revela fatos antes ocultos pela recuperação, reabrindo o prazo para apuração penal.",
      fundamento: "Lei nº 11.101/2005, art. 182, parágrafo único.",
      macete: "Recuperação inicia a contagem; falência posterior a zera.",
      erroComum: "Supor que a interrupção da prescrição só pode ocorrer pelas causas do art. 117 do CP.",
      comoBancaPensa: "Item literal em dispositivo pouco lido — quem só estudou os tipos penais não chega ao art. 182."
    }
  },
  {
    ...BASE78,
    id: "LE-239", assunto: "Crimes Falimentares", subassunto: "Equiparação ao devedor — art. 179",
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "Equiparam-se ao devedor ou falido, para todos os efeitos penais da Lei de Falências, os sócios, diretores, gerentes, administradores e conselheiros, de fato ou de direito, bem como o administrador judicial.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "de fato ou de direito",
    cognitivo: {
      motivo: "Fixar a extensão subjetiva do art. 179, com destaque para o administrador de fato.",
      palavraCritica: "de fato",
    },
    comentario: {
      resolucao: "CERTO. Reprodução fiel do art. 179. A menção a administradores 'de fato' alcança quem exerce a gestão sem investidura formal — o chamado sócio oculto ou laranja invertido.",
      fundamento: "Lei nº 11.101/2005, art. 179.",
      macete: "Não é o registro que define o sujeito ativo, é o exercício efetivo da gestão.",
      erroComum: "Restringir a autoria a quem consta formalmente do contrato social.",
      comoBancaPensa: "Item verdadeiro e completo, cobrado para depois ser 'testado' em versão amputada."
    }
  },
  {
    ...BASE78,
    id: "LE-240", assunto: "Crimes Falimentares", subassunto: "Omissão de documentos contábeis — art. 178",
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "O crime de omissão dos documentos contábeis obrigatórios é punido com reclusão, de 1 a 2 anos, e multa, se o fato não constitui crime mais grave.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "reclusão",
    cognitivo: {
      motivo: "Cobrar a única pena de DETENÇÃO entre os crimes em espécie da lei — detalhe que distingue quem leu o dispositivo.",
      palavraCritica: "reclusão",
    },
    comentario: {
      resolucao: "ERRADO. A pena do art. 178 é de DETENÇÃO, de 1 a 2 anos, e multa. É a única figura da Seção I punida com detenção — todas as demais preveem reclusão. O quantum e a cláusula de subsidiariedade estão corretos; o erro está na espécie de pena privativa de liberdade.",
      fundamento: "Lei nº 11.101/2005, art. 178.",
      macete: "Art. 178 é a exceção: detenção. Todo o resto da Seção I é reclusão.",
      erroComum: "Conferir só o quantum da pena e o 'se o fato não constitui crime mais grave', que estão certos.",
      comoBancaPensa: "Verdade com falso emendado: acerta dois elementos e troca um terceiro, menos vistoso."
    }
  },
  {
    ...BASE78,
    id: "LE-241", assunto: "Crimes Falimentares", subassunto: "Fraude a credores — causas de aumento",
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "Na fraude a credores, a pena é aumentada de 1/6 a 1/3 se o agente destrói, apaga ou corrompe dados contábeis ou negociais armazenados em computador ou sistema informatizado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "1/6 a 1/3",
    cognitivo: {
      motivo: "Cobrar a fração correta do § 1º e a hipótese digital, cada vez mais provável em prova de carreira policial.",
      palavraCritica: "1/6",
    },
    comentario: {
      resolucao: "CERTO. O art. 168, § 1º, III, prevê exatamente essa conduta, com aumento de 1/6 a 1/3. Atenção para não confundir com o § 2º (contabilidade paralela), cujo aumento é de 1/3 até metade.",
      fundamento: "Lei nº 11.101/2005, art. 168, § 1º, III.",
      macete: "§ 1º aumenta de 1/6 a 1/3; § 2º (caixa dois) aumenta de 1/3 até metade. Frações diferentes.",
      erroComum: "Trocar as frações dos dois parágrafos, que tratam de agravamentos vizinhos.",
      comoBancaPensa: "Troca numérica é o padrão mais barato de montar e o mais caro de conferir sob pressão de tempo."
    }
  },
  {
    ...BASE78,
    id: "LE-242", assunto: "Crimes Falimentares", subassunto: "Contabilidade paralela — art. 168, § 2º",
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "A pena da fraude a credores é aumentada de 1/6 a 1/3 se o devedor manteve ou movimentou recursos ou valores paralelamente à contabilidade exigida pela legislação.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "1/6 a 1/3",
    cognitivo: {
      motivo: "Cobrar a fração do § 2º, que difere da do § 1º cobrada no item anterior.",
      palavraCritica: "1/6",
    },
    comentario: {
      resolucao: "ERRADO. A hipótese descrita é a do § 2º (contabilidade paralela, o 'caixa dois'), cujo aumento é de 1/3 ATÉ METADE — mais severo que o do § 1º. O item importa a fração do parágrafo anterior.",
      fundamento: "Lei nº 11.101/2005, art. 168, § 2º.",
      macete: "Caixa dois é mais grave: 1/3 até metade, não 1/6 a 1/3.",
      erroComum: "Ler a conduta, reconhecê-la como típica e aceitar a fração sem conferir de qual parágrafo ela vem.",
      comoBancaPensa: "Descreve corretamente a conduta de um parágrafo e cola a fração do outro."
    }
  },
  {
    ...BASE78,
    id: "LE-243", assunto: "Crimes Falimentares", subassunto: "Concurso de pessoas — contadores",
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Contadores, técnicos contábeis e auditores que concorram para a fraude a credores respondem nas mesmas penas, na medida de sua culpabilidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mesmas penas",
    cognitivo: {
      motivo: "Fixar o § 3º do art. 168, que estende a responsabilidade a profissionais externos à empresa.",
      palavraCritica: "concorrerem",
    },
    comentario: {
      resolucao: "CERTO. O art. 168, § 3º, é expresso quanto aos contadores, técnicos contábeis, auditores e outros profissionais que de qualquer modo concorram para as condutas, na medida de sua culpabilidade.",
      fundamento: "Lei nº 11.101/2005, art. 168, § 3º.",
      macete: "O profissional que assina a escrituração fraudada entra no tipo, ainda que não seja sócio.",
      erroComum: "Limitar a autoria aos administradores por serem os beneficiários diretos.",
      comoBancaPensa: "Cobra dispositivo que amplia o alcance subjetivo, contrariando a leitura restritiva intuitiva."
    }
  },
  {
    ...BASE78,
    id: "LE-244", assunto: "Crimes Falimentares", subassunto: "Favorecimento de credores — art. 172",
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "No favorecimento de credores, incorre nas mesmas penas o credor que, em conluio, possa beneficiar-se do ato de disposição ou oneração patrimonial.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "em conluio",
    cognitivo: {
      motivo: "Cobrar o parágrafo único do art. 172, que criminaliza também o lado beneficiado.",
      palavraCritica: "conluio",
    },
    comentario: {
      resolucao: "CERTO. O parágrafo único do art. 172 alcança o credor em conluio. Note que basta que ele POSSA beneficiar-se — não se exige benefício efetivo.",
      fundamento: "Lei nº 11.101/2005, art. 172, parágrafo único.",
      macete: "No favorecimento de credores há dois polos puníveis: quem favorece e o credor conluiado.",
      erroComum: "Ver o credor apenas como destinatário do favorecimento, e não como possível coautor.",
      comoBancaPensa: "Explora a assimetria aparente entre quem pratica e quem recebe o ato."
    }
  },
  {
    ...BASE78,
    id: "LE-245", assunto: "Crimes Falimentares", subassunto: "Violação de impedimento — art. 177",
    origem: "Inédita — estilo CEBRASPE (Lei 11.101/2005)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "O crime de violação de impedimento alcança o juiz, o representante do Ministério Público, o administrador judicial, o perito, o escrivão, o oficial de justiça e o leiloeiro que adquirirem bens da massa falida.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "por si ou por interposta pessoa",
    cognitivo: {
      motivo: "Fixar o rol de sujeitos ativos próprios do art. 177, típico crime de mão própria funcional.",
      palavraCritica: "interposta pessoa",
    },
    comentario: {
      resolucao: "CERTO. O art. 177 lista juiz, representante do MP, administrador judicial, gestor judicial, perito, avaliador, escrivão, oficial de justiça e leiloeiro, e alcança a aquisição feita por si OU POR INTERPOSTA PESSOA, quando tenham atuado nos respectivos processos.",
      fundamento: "Lei nº 11.101/2005, art. 177.",
      macete: "Quem atua no processo não compra do processo — nem por laranja.",
      erroComum: "Restringir o tipo ao administrador judicial, esquecendo os demais auxiliares e o próprio juiz.",
      comoBancaPensa: "Rol extenso: item verdadeiro que lista corretamente é tão cobrado quanto o que amputa."
    }
  },

  /* ===== ESTATUTO DA PESSOA COM DEFICIÊNCIA — Lei nº 13.146/2015 ===== */

  {
    ...BASE78,
    id: "LE-246", assunto: "Estatuto da Pessoa com Deficiência", subassunto: "Abandono — art. 90 (Lei 15.163/2025)",
    origem: "Inédita — estilo CEBRASPE (Lei 13.146/2015, com redação da Lei 15.163/2025)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Abandonar pessoa com deficiência em hospitais, casas de saúde, entidades de abrigamento ou congêneres é punido com reclusão, de 6 meses a 3 anos, e multa.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "6 meses a 3 anos",
    cognitivo: {
      motivo: "Cobrar a pena ATUAL do art. 90, alterada em 2025 — item que separa quem estuda por material atualizado.",
      palavraCritica: "6 (seis) meses",
    },
    comentario: {
      resolucao: "ERRADO. A pena era essa até a Lei nº 15.163/2025, que a elevou para RECLUSÃO, DE 2 A 5 ANOS, e multa. O item reproduz a redação revogada.",
      fundamento: "Lei nº 13.146/2015, art. 90, caput, com redação dada pela Lei nº 15.163/2025.",
      macete: "Abandono de pessoa com deficiência: 2 a 5 anos desde 2025. Material antigo diz 6 meses a 3 anos.",
      erroComum: "Estudar por resumo desatualizado e memorizar a pena revogada.",
      comoBancaPensa: "Alteração legislativa recente é a fonte mais rentável de item ERRADO: o candidato 'sabe' a resposta antiga com convicção."
    }
  },
  {
    ...BASE78,
    id: "LE-247", assunto: "Estatuto da Pessoa com Deficiência", subassunto: "Abandono qualificado — art. 90, §§",
    origem: "Inédita — estilo CEBRASPE (Lei 13.146/2015, com redação da Lei 15.163/2025)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Se do abandono de pessoa com deficiência resulta lesão corporal de natureza grave, a pena é de reclusão, de 3 a 7 anos, e multa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "3 a 7 anos",
    cognitivo: {
      motivo: "Fixar a forma qualificada criada em 2025, que não existe em materiais anteriores.",
      palavraCritica: "lesão corporal de natureza grave",
    },
    comentario: {
      resolucao: "CERTO. O § 1º do art. 90, incluído pela Lei nº 15.163/2025, prevê reclusão de 3 a 7 anos e multa quando do abandono resulta lesão corporal de natureza grave.",
      fundamento: "Lei nº 13.146/2015, art. 90, § 1º, incluído pela Lei nº 15.163/2025.",
      macete: "Abandono: 2 a 5 / lesão grave: 3 a 7. Progressão de gravidade nos parágrafos.",
      erroComum: "Negar o item por não reconhecer a figura qualificada, ausente das edições antigas do Estatuto.",
      comoBancaPensa: "Novidade legislativa cobrada como CERTO: quem estudou desatualizado marca ERRADO por não conhecer."
    }
  },
  {
    ...BASE78,
    id: "LE-248", assunto: "Estatuto da Pessoa com Deficiência", subassunto: "Discriminação — art. 88",
    origem: "Inédita — estilo CEBRASPE (Lei 13.146/2015)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Praticar, induzir ou incitar discriminação de pessoa em razão de sua deficiência é punido com reclusão, de 1 a 3 anos, e multa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "1 a 3 anos",
    cognitivo: {
      motivo: "Fixar o tipo básico do art. 88, base para as majorantes dos parágrafos.",
      palavraCritica: "induzir ou incitar",
    },
    comentario: {
      resolucao: "CERTO. Reprodução do art. 88, caput. As três condutas — praticar, induzir e incitar — estão no mesmo patamar de pena.",
      fundamento: "Lei nº 13.146/2015, art. 88, caput.",
      macete: "Induzir e incitar não são meras participações aqui: são condutas típicas autônomas do caput.",
      erroComum: "Supor que induzir e incitar seriam punidos com pena menor que praticar.",
      comoBancaPensa: "Item literal, âncora para as majorantes dos §§ 1º e 2º."
    }
  },
  {
    ...BASE78,
    id: "LE-249", assunto: "Estatuto da Pessoa com Deficiência", subassunto: "Discriminação por meio de comunicação social",
    origem: "Inédita — estilo CEBRASPE (Lei 13.146/2015)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Se o crime de discriminação por motivo de deficiência é cometido por intermédio de meios de comunicação social ou de publicação de qualquer natureza, a pena do caput é aumentada de um terço.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "aumentada de um terço",
    cognitivo: {
      motivo: "Distinguir causa de aumento de pena autônoma cominada — o § 2º não majora, substitui.",
      palavraCritica: "aumentada",
    },
    comentario: {
      resolucao: "ERRADO. O § 2º do art. 88 não é causa de aumento: comina PENA AUTÔNOMA de reclusão, de 2 a 5 anos, e multa. Quem majora em 1/3 é o § 1º, quando a vítima está sob cuidado e responsabilidade do agente.",
      fundamento: "Lei nº 13.146/2015, art. 88, §§ 1º e 2º.",
      macete: "§ 1º = aumento de 1/3 (vítima sob cuidado). § 2º = pena nova de 2 a 5 anos (meio de comunicação).",
      erroComum: "Ler todo parágrafo posterior a um caput como se fosse majorante.",
      comoBancaPensa: "Mistura a técnica de dois parágrafos vizinhos: acerta a hipótese e erra o efeito."
    }
  },
  {
    ...BASE78,
    id: "LE-250", assunto: "Estatuto da Pessoa com Deficiência", subassunto: "Apropriação de bens — art. 89",
    origem: "Inédita — estilo CEBRASPE (Lei 13.146/2015)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "Apropriar-se de ou desviar bens, proventos, pensão, benefícios, remuneração ou qualquer outro rendimento de pessoa com deficiência é punido com reclusão, de 1 a 4 anos, e multa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "1 a 4 anos",
    cognitivo: {
      motivo: "Fixar o tipo do art. 89, que é o de maior incidência prática em delegacia.",
      palavraCritica: "qualquer outro rendimento",
    },
    comentario: {
      resolucao: "CERTO. Reprodução do art. 89, caput. O rol de objetos materiais é aberto, encerrando-se em 'qualquer outro rendimento'.",
      fundamento: "Lei nº 13.146/2015, art. 89, caput.",
      macete: "Não é furto nem estelionato: havendo vítima com deficiência e rendimento apropriado, o tipo é especial.",
      erroComum: "Enquadrar a conduta no art. 168 do Código Penal, ignorando a especialidade do Estatuto.",
      comoBancaPensa: "Item literal que também testa se o candidato conhece a relação de especialidade com o CP."
    }
  },
  {
    ...BASE78,
    id: "LE-251", assunto: "Estatuto da Pessoa com Deficiência", subassunto: "Apropriação — causa de aumento",
    origem: "Inédita — estilo CEBRASPE (Lei 13.146/2015)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "A pena do crime de apropriação de bens de pessoa com deficiência é aumentada em metade se cometida por tutor, curador, síndico, liquidatário, inventariante, testamenteiro ou depositário judicial.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "em metade",
    cognitivo: {
      motivo: "Cobrar a fração exata do parágrafo único do art. 89.",
      palavraCritica: "metade",
    },
    comentario: {
      resolucao: "ERRADO. O aumento é de 1/3 (UM TERÇO), não de metade. O rol de agentes está correto, assim como a segunda hipótese (quem se apropriou em razão de ofício ou profissão) — o erro é apenas a fração.",
      fundamento: "Lei nº 13.146/2015, art. 89, parágrafo único.",
      macete: "Art. 89: aumento de 1/3. Guarde junto com o § 1º do art. 88, que também é 1/3.",
      erroComum: "Aceitar a fração por causa do rol correto e extenso que a acompanha.",
      comoBancaPensa: "Enche o item de elementos verdadeiros para que o número passe sem conferência."
    }
  },
  {
    ...BASE78,
    id: "LE-252", assunto: "Estatuto da Pessoa com Deficiência", subassunto: "Curatela — art. 84 e 85",
    origem: "Inédita — estilo CEBRASPE (Lei 13.146/2015)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "A curatela da pessoa com deficiência constitui medida extraordinária e afeta os atos relacionados aos direitos de natureza patrimonial e negocial.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "extraordinária",
    cognitivo: {
      motivo: "Fixar a mudança de paradigma do Estatuto: curatela deixou de ser regra e passou a ser exceção limitada.",
      palavraCritica: "patrimonial e negocial",
    },
    comentario: {
      resolucao: "CERTO. O art. 84, § 3º, qualifica a curatela como medida extraordinária, e o art. 85 restringe seus efeitos aos atos de natureza patrimonial e negocial. Direitos existenciais — casar, votar, ter filhos, trabalhar — ficam fora do alcance da curatela.",
      fundamento: "Lei nº 13.146/2015, art. 84, § 3º, e art. 85, caput.",
      macete: "Curatela alcança o patrimônio, não a existência. Casamento e voto não se curatelam.",
      erroComum: "Manter o modelo antigo de incapacidade absoluta, revogado pelo Estatuto.",
      comoBancaPensa: "Cobra a virada de paradigma: quem estudou pela redação antiga do Código Civil erra."
    }
  },
  {
    ...BASE78,
    id: "LE-253", assunto: "Estatuto da Pessoa com Deficiência", subassunto: "Documentos oficiais — art. 86",
    origem: "Inédita — estilo CEBRASPE (Lei 13.146/2015)",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Para a emissão de documentos oficiais, é exigida a comprovação da situação de curatela da pessoa com deficiência.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "é exigida",
    cognitivo: {
      motivo: "Cobrar a vedação do art. 86, que inverte exatamente o que o item afirma.",
      palavraCritica: "exigida",
    },
    comentario: {
      resolucao: "ERRADO. O art. 86 diz o oposto: 'Para emissão de documentos oficiais, NÃO SERÁ EXIGIDA a situação de curatela da pessoa com deficiência.' Exigir a curatela seria condicionar o exercício de um direito existencial básico.",
      fundamento: "Lei nº 13.146/2015, art. 86.",
      macete: "Documento oficial é direito existencial: não se pede curatela para emitir.",
      erroComum: "Supor a exigência por analogia com atos patrimoniais, onde a curatela de fato importa.",
      comoBancaPensa: "Inverte a polaridade do dispositivo — a forma mais direta de transformar norma literal em item errado."
    }
  },

  /* ===== ORDEM ECONÔMICA — Lei nº 8.176/1991 ===== */

  {
    ...BASE78,
    id: "LE-254", assunto: "Crimes contra a Ordem Econômica", subassunto: "Norma penal em branco — art. 1º",
    origem: "Inédita — estilo CEBRASPE (Lei 8.176/1991)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "O crime de aquisição, distribuição e revenda de derivados de petróleo em desacordo com as normas legais configura norma penal em branco, cuja complementação depende de regulamentação editada pela autoridade administrativa competente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "norma penal em branco",
    cognitivo: {
      motivo: "Cobrar a técnica legislativa do tipo, e não sua literalidade — ângulo distinto do que o banco já tinha sobre o mesmo artigo.",
      palavraCritica: "complementação",
    },
    comentario: {
      resolucao: "CERTO. A expressão 'em desacordo com as normas estabelecidas na forma da lei' remete a regulamentação externa — hoje, as resoluções da ANP. Trata-se de norma penal em branco heterogênea: o preceito primário só se completa com ato normativo de hierarquia inferior.",
      fundamento: "Lei nº 8.176/1991, art. 1º, I.",
      macete: "Sempre que o tipo disser 'em desacordo com as normas', procure a norma complementar: sem ela não há conduta definida.",
      erroComum: "Tratar o tipo como completo em si, desprezando a necessidade de comprovar qual norma técnica foi violada.",
      comoBancaPensa: "Cobra a classificação dogmática do tipo, que exige compreensão além da memorização do texto."
    }
  },
  {
    ...BASE78,
    id: "LE-255", assunto: "Crimes contra a Ordem Econômica", subassunto: "GLP automotivo — Lei 15.348/2026",
    origem: "Inédita — estilo CEBRASPE (Lei 8.176/1991, com redação da Lei 15.348/2026)",
    dificuldade: 3, tempoIdealSeg: 65,
    enunciado: "Usar gás liquefeito de petróleo para fins automotivos, em desacordo com as normas estabelecidas na forma da lei, constitui crime contra a ordem econômica.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "fins automotivos",
    cognitivo: {
      motivo: "Registrar a redação vigente do inciso II, alterada em 2026 — atualização que praticamente não circula em material de estudo.",
      palavraCritica: "gás liquefeito de petróleo",
    },
    comentario: {
      resolucao: "CERTO. É o art. 1º, II, da Lei nº 8.176/1991, com a redação dada pela Lei nº 15.348/2026. A conduta alcança o uso de GLP (o gás de cozinha) como combustível veicular fora das normas.",
      fundamento: "Lei nº 8.176/1991, art. 1º, II, com redação da Lei nº 15.348/2026.",
      macete: "Gás de botijão movendo carro é crime contra a ordem econômica, não mera infração administrativa.",
      erroComum: "Tratar a conduta como infração de trânsito ou apenas como risco à segurança.",
      comoBancaPensa: "Dispositivo recém-alterado tende a aparecer logo nos concursos seguintes."
    }
  },
  {
    ...BASE78,
    id: "LE-256", assunto: "Crimes contra a Ordem Econômica", subassunto: "Usurpação — art. 2º",
    origem: "Inédita — estilo CEBRASPE (Lei 8.176/1991)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Produzir bens ou explorar matéria-prima pertencentes à União, sem autorização legal, constitui crime contra a ordem econômica na modalidade de usurpação.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "contra a ordem econômica",
    cognitivo: {
      motivo: "Separar o bem jurídico do art. 1º do bem jurídico do art. 2º, que a topografia da lei induz a igualar.",
      palavraCritica: "ordem econômica",
    },
    comentario: {
      resolucao: "ERRADO. O art. 2º é expresso ao classificar a conduta como crime CONTRA O PATRIMÔNIO, na modalidade de usurpação — e não contra a ordem econômica. A mesma lei tutela dois bens jurídicos distintos: o art. 1º protege a ordem econômica; o art. 2º, o patrimônio da União.",
      fundamento: "Lei nº 8.176/1991, art. 2º, caput.",
      macete: "Uma lei, dois bens jurídicos: art. 1º ordem econômica, art. 2º patrimônio da União.",
      erroComum: "Deduzir o bem jurídico pela ementa da lei, que menciona apenas a ordem econômica.",
      comoBancaPensa: "Aproveita o título da lei para induzir generalização sobre todos os seus tipos."
    }
  },
  {
    ...BASE78,
    id: "LE-257", assunto: "Crimes contra a Ordem Econômica", subassunto: "Identificação do diploma",
    origem: "Inédita — estilo CEBRASPE (Lei 8.176/1991)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "A lei que define crimes contra a ordem econômica e cria o Sistema de Estoques de Combustíveis é a Lei nº 1.176/1981.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "1.176/1981",
    cognitivo: {
      motivo: "Corrigir numeração incorreta que circula em materiais de estudo e pode ser reproduzida em simulados.",
      palavraCritica: "1.176/1981",
    },
    comentario: {
      resolucao: "ERRADO. Trata-se da Lei nº 8.176, de 8 de fevereiro de 1991. A prova interna está no próprio texto: seu art. 6º revoga o art. 18 da Lei nº 8.137/1990 — seria impossível que uma lei de 1981 revogasse dispositivo de norma editada em 1990.",
      fundamento: "Lei nº 8.176/1991, arts. 1º e 6º.",
      macete: "Diante de numeração duvidosa, confira as leis que o diploma revoga: ninguém revoga o futuro.",
      erroComum: "Reproduzir a numeração errada encontrada em resumos e cronogramas de leitura.",
      comoBancaPensa: "Troca numérica em identificação de diploma é item de baixo custo e alto índice de erro."
    }
  },

  /* ===== CRIMES DE RESPONSABILIDADE — Lei nº 1.079/1950 ===== */

  {
    ...BASE78,
    id: "LE-258", assunto: "Crimes de Responsabilidade", subassunto: "Tentativa — art. 2º",
    origem: "Inédita — estilo CEBRASPE (Lei 1.079/1950)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Os crimes de responsabilidade definidos na Lei nº 1.079/1950, ainda quando simplesmente tentados, são passíveis das penas nela previstas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "simplesmente tentados",
    cognitivo: {
      motivo: "Fixar a equiparação da tentativa à consumação, peculiaridade que afasta a redução do art. 14 do CP.",
      palavraCritica: "tentados",
    },
    comentario: {
      resolucao: "CERTO. O art. 2º é expresso: os crimes ali definidos, 'ainda quando simplesmente tentados', são passíveis da pena. Não incide a causa de diminuição da tentativa do Código Penal, dada a natureza político-administrativa da sanção.",
      fundamento: "Lei nº 1.079/1950, art. 2º.",
      macete: "Aqui tentativa e consumação recebem o mesmo tratamento — a lógica é política, não penal comum.",
      erroComum: "Aplicar a redução de 1/3 a 2/3 do art. 14, parágrafo único, do Código Penal.",
      comoBancaPensa: "Testa se o candidato transporta indevidamente regra geral do CP para regime especial."
    }
  },
  {
    ...BASE78,
    id: "LE-259", assunto: "Crimes de Responsabilidade", subassunto: "Inabilitação — art. 2º × CF art. 52",
    origem: "Inédita — estilo CEBRASPE (Lei 1.079/1950 e CF/1988)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "Condenado o Presidente da República por crime de responsabilidade, a inabilitação para o exercício de função pública dar-se-á pelo prazo de cinco anos, conforme previsto na Lei nº 1.079/1950.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "cinco anos",
    cognitivo: {
      motivo: "Cobrar o conflito entre o texto não atualizado da lei de 1950 e a Constituição de 1988, que prevalece.",
      palavraCritica: "cinco anos",
    },
    comentario: {
      resolucao: "ERRADO. Embora o art. 2º da Lei nº 1.079/1950 ainda mencione inabilitação 'até cinco anos', prevalece o art. 52, parágrafo único, da Constituição, que fixa OITO ANOS. A lei é de 1950 e não foi atualizada nesse ponto; a norma constitucional posterior é que rege a matéria.",
      fundamento: "CF/1988, art. 52, parágrafo único; Lei nº 1.079/1950, art. 2º.",
      macete: "Impeachment: perda do cargo + inabilitação por OITO anos. O 'cinco anos' da lei de 1950 não foi recepcionado nesse ponto.",
      erroComum: "Responder pela literalidade da lei especial sem confrontá-la com a Constituição.",
      comoBancaPensa: "Cita corretamente a fonte legal para dar credibilidade ao número superado — literalidade contra norma superior."
    }
  },
  {
    ...BASE78,
    id: "LE-260", assunto: "Crimes de Responsabilidade", subassunto: "Natureza da sanção",
    origem: "Inédita — estilo CEBRASPE (Lei 1.079/1950)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "A condenação por crime de responsabilidade acarreta, além da perda do cargo e da inabilitação, a imposição de pena privativa de liberdade pelo Senado Federal.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "pena privativa de liberdade",
    cognitivo: {
      motivo: "Delimitar o alcance da sanção política, que não inclui prisão.",
      palavraCritica: "privativa de liberdade",
    },
    comentario: {
      resolucao: "ERRADO. As sanções do julgamento por crime de responsabilidade limitam-se à perda do cargo e à inabilitação para função pública. O Senado não aplica pena privativa de liberdade — eventual responsabilização criminal comum corre em processo próprio, perante o Judiciário.",
      fundamento: "CF/1988, art. 52, parágrafo único; Lei nº 1.079/1950, art. 2º.",
      macete: "Impeachment é sanção política: tira o cargo e barra o retorno. Não prende.",
      erroComum: "Assumir que 'crime' de responsabilidade implica pena criminal, por força do nome.",
      comoBancaPensa: "Explora o nomen iuris: o rótulo 'crime' sugere consequência penal que não existe."
    }
  },
  {
    ...BASE78,
    id: "LE-261", assunto: "Crimes de Responsabilidade", subassunto: "Sujeitos — Lei 1.079 × DL 201",
    origem: "Inédita — estilo CEBRASPE (Lei 1.079/1950 e Decreto-Lei 201/1967)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "A Lei nº 1.079/1950 disciplina os crimes de responsabilidade do Presidente da República, de Ministros de Estado, de Ministros do Supremo Tribunal Federal e do Procurador-Geral da República.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Procurador-Geral da República",
    cognitivo: {
      motivo: "Separar o âmbito da Lei 1.079 do âmbito do DL 201/1967, que cuida de prefeitos e vereadores.",
      palavraCritica: "Ministros do Supremo",
    },
    comentario: {
      resolucao: "CERTO. Esses são justamente os agentes alcançados pela Lei nº 1.079/1950. Prefeitos e vereadores ficam sob o Decreto-Lei nº 201/1967 — diploma distinto, com regime próprio.",
      fundamento: "Lei nº 1.079/1950, arts. 1º e 39; Decreto-Lei nº 201/1967.",
      macete: "Cúpula federal → Lei 1.079/1950. Prefeito e vereador → DL 201/1967.",
      erroComum: "Misturar os dois diplomas, sobretudo porque ambos aparecem no mesmo tópico do edital.",
      comoBancaPensa: "Item verdadeiro que prepara o terreno para a versão trocada, em que prefeitos entram na Lei 1.079."
    }
  },

  /* ===== CONVENÇÃO DE BUDAPESTE ===== */

  {
    ...BASE78,
    id: "LE-262", assunto: "Convenção de Budapeste", subassunto: "Acesso ilegal — art. 2",
    origem: "Inédita — estilo CEBRASPE (Convenção sobre o Crime Cibernético)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Para a tipificação do acesso ilegal, a Convenção de Budapeste obriga os Estados-parte a exigir que a conduta seja praticada mediante violação de medidas de segurança.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "obriga",
    cognitivo: {
      motivo: "Distinguir o núcleo obrigatório da Convenção das faculdades reservadas aos Estados — a confusão mais comum no tema.",
      palavraCritica: "obriga",
    },
    comentario: {
      resolucao: "ERRADO. O art. 2 estabelece que o Estado PODE EXIGIR essa elementar — é faculdade, não obrigação. O que a Convenção impõe é a tipificação do acesso doloso e não autorizado; a violação de medidas de segurança é requisito opcional que cada Parte decide adotar.",
      fundamento: "Convenção sobre o Crime Cibernético (Budapeste), art. 2.",
      macete: "Na Convenção, 'adotará medidas' é obrigação; 'pode exigir' é faculdade do Estado-parte.",
      erroComum: "Ler toda previsão da Convenção como mandamento uniforme de tipificação.",
      comoBancaPensa: "Converte faculdade em dever — inversão clássica do regime de tratados."
    }
  },
  {
    ...BASE78,
    id: "LE-263", assunto: "Convenção de Budapeste", subassunto: "Uso indevido de dispositivos — art. 6",
    origem: "Inédita — estilo CEBRASPE (Convenção sobre o Crime Cibernético)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "A Convenção de Budapeste ressalva que não há responsabilidade criminal pelo uso indevido de dispositivos quando a conduta não se destina à prática dos crimes previstos nos artigos 2 a 5, como no caso de testes autorizados de segurança.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "testes autorizados",
    cognitivo: {
      motivo: "Fixar a cláusula que preserva a atividade legítima de segurança da informação — relevante para perícia e investigação.",
      palavraCritica: "não se destine",
    },
    comentario: {
      resolucao: "CERTO. O art. 6, parágrafo 2, afasta expressamente a responsabilidade criminal quando a produção, venda, aquisição, importação ou posse dos instrumentos não visa à prática dos crimes dos arts. 2 a 5, citando como exemplos a realização de testes autorizados e a proteção de sistemas.",
      fundamento: "Convenção sobre o Crime Cibernético (Budapeste), art. 6, parágrafo 2.",
      macete: "A finalidade é elementar: a mesma ferramenta é crime na mão do atacante e trabalho na do pentester autorizado.",
      erroComum: "Supor que a mera posse de ferramenta de intrusão basta para configurar o crime.",
      comoBancaPensa: "Cobra a exceção, que costuma ser ignorada por quem só decorou o rol de condutas."
    }
  },
  {
    ...BASE78,
    id: "LE-264", assunto: "Convenção de Budapeste", subassunto: "Violação de dados — art. 4",
    origem: "Inédita — estilo CEBRASPE (Convenção sobre o Crime Cibernético)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "Quanto à violação de dados, qualquer Parte pode reservar-se o direito de exigir que da conduta resulte sério dano para a vítima.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sério dano",
    cognitivo: {
      motivo: "Reforçar o mecanismo de reservas, que é a chave de leitura da Convenção inteira.",
      palavraCritica: "reservar-se",
    },
    comentario: {
      resolucao: "CERTO. É o art. 4, parágrafo 2. A Convenção adota técnica de harmonização mínima: fixa o núcleo e permite reservas, para acomodar as diferenças entre os ordenamentos internos.",
      fundamento: "Convenção sobre o Crime Cibernético (Budapeste), art. 4, parágrafo 2.",
      macete: "Sempre que a Convenção diz 'pode reservar-se', o requisito é opcional.",
      erroComum: "Exigir o dano sério como elementar obrigatória em todos os Estados-parte.",
      comoBancaPensa: "Item literal sobre reservas — tema em que o candidato raramente se aprofunda."
    }
  },
  {
    ...BASE78,
    id: "LE-265", assunto: "Convenção de Budapeste", subassunto: "Interceptação ilícita — art. 3",
    origem: "Inédita — estilo CEBRASPE (Convenção sobre o Crime Cibernético)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "A interceptação ilícita, na Convenção de Budapeste, alcança as emissões eletromagnéticas oriundas de sistema informatizado que contenham dados de computador.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "emissões eletromagnéticas",
    cognitivo: {
      motivo: "Cobrar a extensão do art. 3 às emanações eletromagnéticas, detalhe técnico que raramente é lido.",
      palavraCritica: "eletromagnéticas",
    },
    comentario: {
      resolucao: "CERTO. O art. 3 é expresso ao incluir 'as emissões eletromagnéticas oriundas de um sistema informatizado que contenham esses dados de computador'. A previsão alcança técnicas de captação à distância, sem acesso físico ao equipamento.",
      fundamento: "Convenção sobre o Crime Cibernético (Budapeste), art. 3.",
      macete: "Interceptação não exige tocar no cabo: a radiação do equipamento também é protegida.",
      erroComum: "Limitar a interceptação ao tráfego em rede, excluindo emanações do hardware.",
      comoBancaPensa: "Detalhe técnico literal: separa quem leu o artigo de quem leu o resumo."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE78);
