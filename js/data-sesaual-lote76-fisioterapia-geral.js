/* =====================================================================
   QUESTLAB — Lote 76: FISIOTERAPIA GERAL (item 16.2.4, tópicos 1 a 10)

   POR QUE ESTE LOTE EXISTE. A correção de escopo da disciplina foi feita
   em js/data.js (bloco "CORREÇÃO IMPORTANTE" em EDITAIS.SESAUAL_FISIO) e
   o nome da disciplina mudou de "Fisioterapia em Saúde da Mulher" para
   "Fisioterapia" — mas as questões nunca foram reescritas. A auditoria de
   cobertura mediu o tamanho do buraco:

     Fisioterapia = 70 dos 120 itens da prova (58%), com 100 questões no
     banco = 1,4 questão por item de prova. A média das disciplinas de
     PC-AL é 13,2.

   E as 100 questões existentes eram o recorte antigo: saúde da mulher
   (lotes 68 e 71) e fisioterapia aquática (lote 70). Buscando por termo
   nos enunciados, assuntos e comentários, oito dos dez tópicos do edital
   tinham cobertura zero ou residual:

     tópico 7 (órtese/prótese) e 9 (geriatria) ............ 0 questões
     tópico 3 (cinesiologia/biomecânica) e 5 (exercício) .. 1
     tópico 1 (avaliação), 2 (função muscular), 4 (marcha)  2
     tópico 8 (neuro/orto/cardio/pneumo) ................. 4
     tópico 6 (recursos) ................................ 15, quase todas
                                                          aquáticas

   Este lote ataca exatamente esses oito. Saúde da mulher e hidroterapia
   já estão servidas e não recebem itens novos aqui.

   CALIBRAÇÃO. Aplicado o que a auditoria de 372 itens de provas reais
   mostrou (AUDITORIA-PROVA-REAL-2021.md): comprimento de enunciado NÃO
   é pista de gabarito na CEBRASPE. Por isso gabarito e faixa de
   comprimento foram decididos ANTES do recorte, e a proporção CERTO/
   ERRADO é mantida aproximadamente igual dentro de cada faixa — senão o
   comprimento volta a vazar sinal, que foi o erro cometido na primeira
   passagem do Lote 75.

   O que a primeira passagem produziu, medido antes de corrigir: regra
   cega com +9,8pp de vazamento, apenas 9,8% dos itens na faixa curta
   (alvo 24,2%) e 83% de ERRADO entre os curtos. Corrigido encurtando seis
   itens CERTO, alongando três ERRADO e redistribuindo as faixas.

   Um segundo vazamento apareceu e não estava no roteiro: o campo
   `pegadinha` virou oráculo de gabarito. Tinha-se usado "literalidade"
   como rótulo de todo item correto e os rótulos de troca para todo item
   errado — 25 itens "literalidade", 100% CERTO. Quem aprendesse a ler o
   rótulo acertaria sem ler o enunciado, que é o oposto do propósito do
   campo. Vinte itens foram reetiquetados pela armadilha que o TÓPICO
   oferece, e não pelo gabarito que calhou.

   Resultado final: 60 itens, 55% ERRADO, mediana de 172
   [NOTA DE AGOSTO/2026: o "real: 53–54%" foi superado pela medicao em
   2.474 itens, que da 49,2% ERRADO. O alvo correto e 50%.]
   caracteres, distribuição por faixa dentro de 2pp do perfil real em
   todas as quatro, taxa de ERRADO entre 50% e 60% em cada faixa, e regra
   cega de +1,7pp — dentro da tolerância de 3pp ancorada em prova real.

   RESSALVA DE FONTE. Não há material de curso desta disciplina no
   repositório. Os itens foram redigidos a partir de conteúdo consolidado
   de literatura da área (Kisner & Colby, Kendall, Perry, Magee, O'Sullivan,
   EWGSOP2, Fried) e de norma expressa (Resolução COFFITO 424/2013). Foram
   evitados números e pontos de corte que variam entre autores; onde a
   graduação numérica é o objeto do item, usou-se escala de aceitação
   pacífica (MRC/Oxford 0–5, ciclo da marcha 60/40, ritmo escapuloumeral
   2:1). Itens de conduta clínica controversa ficaram de fora.
   ===================================================================== */

const QUESTOES_SESAUAL_LOTE76 = [

  /* ============ TÓPICO 1 — MÉTODOS E TÉCNICAS DE AVALIAÇÃO ============ */
  {
    id: "FIS-041", disciplina: "Fisioterapia", assunto: "Avaliação fisioterapêutica", subassunto: "Goniometria",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 55, probReaparecer: 0.65,
    enunciado: "Na goniometria, o eixo do goniômetro deve ser alinhado ao eixo de movimento da articulação avaliada, com o braço fixo no segmento proximal e o braço móvel no distal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "eixo de movimento ... fixo proximal ... móvel distal",
    cognitivo: {
      motivo: "Fixar o posicionamento correto do instrumento, base de toda medição angular confiável.",
      palavraCritica: "braço fixo no segmento proximal",
    },
    comentario: {
      resolucao: "CERTO. É a regra universal de posicionamento do goniômetro universal: eixo sobre o eixo articular, braço fixo acompanhando o segmento que não se move (proximal) e braço móvel acompanhando o segmento em movimento (distal). Inverter os braços é o erro de execução mais comum e produz leitura sem valor comparativo.",
      fundamento: "Item 16.2.4, tópico 1 — métodos e técnicas de avaliação.",
      macete: "Fixo fica com quem fica; móvel vai com quem vai.",
      erroComum: "Trocar os braços, ou apoiar o eixo em referência óssea que não coincide com o eixo de movimento.",
      comoBancaPensa: "Item de procedimento: a banca cobra a execução padronizada, não a amplitude normal."
    }
  },
  {
    id: "FIS-042", disciplina: "Fisioterapia", assunto: "Avaliação fisioterapêutica", subassunto: "Escala visual analógica de dor",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.6,
    enunciado: "A escala visual analógica de dor é composta por cinco categorias verbais fixas — ausente, leve, moderada, intensa e insuportável —, entre as quais o paciente escolhe aquela que descreve sua dor.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "cinco categorias verbais fixas",
    cognitivo: {
      motivo: "Separar escala analógica de escala categórica de descritores verbais, que são instrumentos distintos.",
      palavraCritica: "categorias verbais fixas",
    },
    comentario: {
      resolucao: "ERRADO. A EVA é justamente o oposto de categórica: consiste em uma linha contínua, habitualmente de 10 cm, com âncoras nas extremidades (ausência de dor e pior dor imaginável), na qual o paciente marca um ponto qualquer. A descrição do item corresponde à escala de descritores verbais, outro instrumento. O adjetivo 'analógica' aponta exatamente para a continuidade.",
      fundamento: "Item 16.2.4, tópico 1 — instrumentos de avaliação da dor.",
      macete: "Analógica = linha contínua; verbal = palavras; numérica = 0 a 10 discreto.",
      erroComum: "Tratar EVA, escala numérica e escala verbal como sinônimos.",
      comoBancaPensa: "Troca de conceitos entre instrumentos que o candidato usa juntos na prática e não distingue na teoria."
    }
  },
  {
    id: "FIS-043", disciplina: "Fisioterapia", assunto: "Avaliação fisioterapêutica", subassunto: "Avaliação do tônus muscular",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.6,
    enunciado: "A Escala de Ashworth modificada distingue-se da escala original pelo acréscimo do grau 1+, criado para discriminar melhor os aumentos discretos de tônus muscular.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "acréscimo do grau 1+",
    cognitivo: {
      motivo: "Identificar o que exatamente a modificação acrescentou, ponto que a banca cobra por ser a única diferença entre as duas versões.",
      palavraCritica: "grau 1+",
    },
    comentario: {
      resolucao: "CERTO. A escala original de Ashworth graduava de 0 a 4. A versão modificada inseriu o grau 1+ entre o 1 e o 2, com o objetivo declarado de aumentar a sensibilidade na faixa baixa do espectro, onde a escala original agrupava demais. O restante da graduação permaneceu.",
      fundamento: "Item 16.2.4, tópico 1 — avaliação do tônus.",
      macete: "Modificada = original + 1+. Só isso muda.",
      erroComum: "Supor que a modificada ampliou a escala para 0–5 ou que alterou o grau 4.",
      comoBancaPensa: "Item de detalhe pontual sobre instrumento de uso diário — aposta em quem usa a escala sem nunca ter lido sua construção."
    }
  },
  {
    id: "FIS-044", disciplina: "Fisioterapia", assunto: "Avaliação fisioterapêutica", subassunto: "Cirtometria torácica",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 80, probReaparecer: 0.55,
    enunciado: "A cirtometria torácica consiste na medição do perímetro do tórax com fita métrica em níveis anatômicos previamente definidos, obtendo-se os valores ao final de uma inspiração máxima e ao final de uma expiração máxima; a diferença entre as duas medidas expressa a expansibilidade torácica no nível avaliado e permite acompanhar objetivamente a evolução do paciente respiratório.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "diferença entre as duas medidas ... expansibilidade",
    cognitivo: {
      motivo: "Consolidar um método de avaliação respiratória de baixo custo que a banca cobra por ser exclusivamente fisioterapêutico.",
      palavraCritica: "diferença entre as duas medidas",
    },
    comentario: {
      resolucao: "CERTO. A cirtometria mede perímetros torácicos em níveis padronizados (axilar, xifoide e basal, na descrição mais difundida) nos dois extremos do ciclo respiratório. O dado clínico não é cada medida isolada, e sim a diferença entre elas — é ela que traduz o quanto o tórax expande naquele nível. Por isso serve de parâmetro de evolução.",
      fundamento: "Item 16.2.4, tópico 1 — avaliação em pneumologia.",
      macete: "Cirtometria não mede tamanho: mede diferença.",
      erroComum: "Registrar apenas a medida em repouso, que sozinha não informa expansibilidade.",
      comoBancaPensa: "Item longo e integralmente correto — a banca descreve bem o procedimento para que o candidato procure erro onde não há."
    }
  },
  {
    id: "FIS-045", disciplina: "Fisioterapia", assunto: "Avaliação fisioterapêutica", subassunto: "Amplitude de movimento fisiológica",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.6,
    enunciado: "A amplitude fisiológica de flexão do joelho em um adulto sadio é de aproximadamente noventa graus.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "noventa graus",
    cognitivo: {
      motivo: "Calibrar valores normais de referência, sem os quais não se identifica limitação.",
      palavraCritica: "noventa graus",
    },
    comentario: {
      resolucao: "ERRADO. A flexão do joelho alcança cerca de 135 graus na medida ativa, chegando além disso na flexão passiva. Noventa graus é o ângulo do joelho sentado em cadeira comum — referência funcional, não amplitude fisiológica máxima. Um joelho que para em 90 graus está limitado e não permite agachar nem subir escada com passo alternado.",
      fundamento: "Item 16.2.4, tópico 1 — amplitudes de referência.",
      macete: "Sentar exige 90; agachar exige bem mais que isso.",
      erroComum: "Confundir amplitude funcional mínima com amplitude fisiológica máxima.",
      comoBancaPensa: "Troca numérica com valor plausível: 90 é um número familiar e passa despercebido."
    }
  },

  /* ============ TÓPICO 2 — PROVAS DE FUNÇÃO MUSCULAR ============ */
  {
    id: "FIS-046", disciplina: "Fisioterapia", assunto: "Provas de função muscular", subassunto: "Graduação de força — grau 3",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.7,
    enunciado: "No teste muscular manual graduado de zero a cinco, o grau 3 corresponde à execução da amplitude completa contra a gravidade e contra resistência manual máxima aplicada pelo examinador, o que o torna o grau mais elevado da escala em pacientes sem comprometimento neurológico.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "contra resistência manual máxima",
    cognitivo: {
      motivo: "Fixar o divisor de águas da escala: o grau 3 é o marco da gravidade, não o da resistência.",
      palavraCritica: "resistência manual máxima",
    },
    comentario: {
      resolucao: "ERRADO. O grau 3 é a amplitude completa contra a gravidade e SEM resistência adicional. É exatamente o ponto de corte da escala: abaixo dele o músculo não vence o próprio peso do segmento; acima dele passa a vencer resistência. Resistência máxima com amplitude completa é o grau 5; resistência moderada, o grau 4.",
      fundamento: "Item 16.2.4, tópico 2 — provas de função muscular.",
      macete: "Grau 3 é a fronteira da gravidade. Resistência só começa no 4.",
      erroComum: "Deslocar a escala em um grau, atribuindo ao 3 o que é do 4.",
      comoBancaPensa: "Descrição correta de um grau vizinho colada no rótulo errado — o candidato reconhece a descrição e valida sem conferir o número."
    }
  },
  {
    id: "FIS-047", disciplina: "Fisioterapia", assunto: "Provas de função muscular", subassunto: "Graduação de força — grau 2",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.65,
    enunciado: "O grau 2 do teste muscular manual é atribuído quando o paciente completa a amplitude de movimento em posição na qual a ação da gravidade sobre o segmento foi eliminada.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "gravidade ... eliminada",
    cognitivo: {
      motivo: "Consolidar a lógica de posicionamento do teste, que muda conforme o grau esperado.",
      palavraCritica: "eliminada",
    },
    comentario: {
      resolucao: "CERTO. O grau 2 exige amplitude completa com a gravidade eliminada, o que na prática significa testar no plano horizontal, com o segmento apoiado em superfície deslizante ou sustentado pelo examinador. Daí a consequência prática: a posição do paciente muda conforme o grau que se suspeita, e testar na posição errada distorce o resultado.",
      fundamento: "Item 16.2.4, tópico 2 — provas de função muscular.",
      macete: "Grau 2 se testa deitado no plano; grau 3 em diante, contra a gravidade.",
      erroComum: "Testar todos os graus na mesma posição.",
      comoBancaPensa: "Item literal e correto sobre a definição — cobra se o candidato sabe que a posição de teste é parte da definição do grau."
    }
  },
  {
    id: "FIS-048", disciplina: "Fisioterapia", assunto: "Provas de função muscular", subassunto: "Graduação de força — graus 0 e 1",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.6,
    enunciado: "O grau 1 do teste muscular manual indica ausência total de atividade contrátil, sem contração visível ou palpável.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "ausência total de atividade contrátil",
    cognitivo: {
      motivo: "Distinguir músculo silencioso de músculo que contrai sem mover, distinção com peso prognóstico.",
      palavraCritica: "ausência total",
    },
    comentario: {
      resolucao: "ERRADO. Ausência total de contração é o grau 0. O grau 1 é a contração visível ou palpável que não produz movimento articular — há atividade, apenas insuficiente para deslocar o segmento. A diferença não é acadêmica: um músculo grau 1 tem unidades motoras recrutáveis e prognóstico distinto do grau 0.",
      fundamento: "Item 16.2.4, tópico 2 — provas de função muscular.",
      macete: "Zero é silêncio; um é sussurro.",
      erroComum: "Tratar 0 e 1 como equivalentes por ambos não gerarem movimento.",
      comoBancaPensa: "Aproxima dois graus que compartilham a ausência de movimento e testa se o candidato sabe o que os separa."
    }
  },
  {
    id: "FIS-049", disciplina: "Fisioterapia", assunto: "Provas de função muscular", subassunto: "Dinamometria",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.55,
    enunciado: "O teste muscular manual produz uma medida ordinal e dependente da percepção do examinador, ao passo que a dinamometria fornece valor em unidade de força, permitindo comparações mais finas entre avaliações sucessivas e entre examinadores diferentes.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "ordinal ... unidade de força",
    cognitivo: {
      motivo: "Reconhecer a limitação metodológica do teste manual, tema recorrente quando a banca quer separar avaliação qualitativa de quantitativa.",
      palavraCritica: "ordinal",
    },
    comentario: {
      resolucao: "CERTO. A graduação 0 a 5 é ordinal: os intervalos entre graus não são iguais e a atribuição depende do julgamento do examinador, sobretudo entre 4 e 5, onde a variabilidade é maior. A dinamometria devolve valor em newtons ou quilograma-força, o que a torna reprodutível entre avaliadores e sensível a mudanças pequenas.",
      fundamento: "Item 16.2.4, tópico 2 — provas de função muscular.",
      macete: "Manual gradua; dinamômetro mede.",
      erroComum: "Supor que os intervalos da escala 0–5 são iguais e podem ser tratados como números.",
      comoBancaPensa: "Item conceitual longo e correto sobre limitação de método — quem só conhece a execução do teste hesita."
    }
  },
  {
    id: "FIS-050", disciplina: "Fisioterapia", assunto: "Provas de função muscular", subassunto: "Interpretação do grau 5",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.55,
    enunciado: "A atribuição do grau 5 no teste muscular manual assegura que o músculo avaliado apresenta desempenho normal em qualquer condição de esforço, inclusive quanto à resistência à fadiga.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "qualquer condição de esforço",
    cognitivo: {
      motivo: "Delimitar o que o teste mede e o que ele não mede — extrapolação é o erro clínico mais frequente.",
      palavraCritica: "qualquer condição",
    },
    comentario: {
      resolucao: "ERRADO. O teste manual avalia força máxima em contração breve, numa amplitude e numa velocidade específicas. Não avalia resistência à fadiga, potência, nem desempenho em tarefa funcional. Um paciente pode ter grau 5 e ainda assim fatigar precocemente ao subir escadas. 'Qualquer condição de esforço' é extrapolação que o método não sustenta.",
      fundamento: "Item 16.2.4, tópico 2 — limites do teste muscular manual.",
      macete: "Grau 5 responde 'quanto', não 'por quanto tempo'.",
      erroComum: "Concluir capacidade funcional a partir de grau de força.",
      comoBancaPensa: "Termo absoluto aplicado a um método com escopo estreito — o padrão mais barato da banca e ainda assim eficaz."
    }
  },

  /* ============ TÓPICO 3 — CINESIOLOGIA E BIOMECÂNICA ============ */
  {
    id: "FIS-051", disciplina: "Fisioterapia", assunto: "Cinesiologia e biomecânica", subassunto: "Alavancas do corpo humano",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.6,
    enunciado: "As alavancas de terceira classe, nas quais a força muscular se aplica entre o eixo articular e a resistência, são as mais frequentes no corpo humano e favorecem a amplitude e a velocidade em detrimento da vantagem mecânica.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "mais frequentes ... amplitude e velocidade",
    cognitivo: {
      motivo: "Ligar a classificação da alavanca à consequência funcional, que é o que a banca cobra.",
      palavraCritica: "em detrimento da vantagem mecânica",
    },
    comentario: {
      resolucao: "CERTO. Na alavanca interpotente a potência fica entre o apoio e a resistência — arranjo do bíceps braquial flexionando o cotovelo. Como o braço de potência é menor que o braço de resistência, a vantagem mecânica é inferior a 1: exige-se força muscular maior que a carga, e em troca obtém-se grande deslocamento e velocidade da extremidade. É o desenho dominante no corpo humano.",
      fundamento: "Item 16.2.4, tópico 3 — cinesiologia e biomecânica.",
      macete: "Terceira classe: perde força, ganha alcance. E é a regra, não a exceção.",
      erroComum: "Supor que o corpo é otimizado para economia de força.",
      comoBancaPensa: "Item correto que soa contraintuitivo — o candidato duvida justamente por estar certo."
    }
  },
  {
    id: "FIS-052", disciplina: "Fisioterapia", assunto: "Cinesiologia e biomecânica", subassunto: "Classificação de alavancas",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.6,
    enunciado: "A elevação do corpo sobre as pontas dos pés, com o apoio na cabeça dos metatarsos, o peso corporal recaindo sobre o tornozelo e a força aplicada pelo tríceps sural no calcâneo, configura alavanca de primeira classe, à semelhança do que ocorre na articulação atlanto-occipital.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "primeira classe",
    cognitivo: {
      motivo: "Exigir a identificação da classe a partir do arranjo físico, e não pela memorização do exemplo.",
      palavraCritica: "primeira classe",
    },
    comentario: {
      resolucao: "ERRADO. Nesse movimento o apoio é a cabeça dos metatarsos, a resistência (peso corporal) recai no tornozelo e a potência é aplicada no calcâneo: a resistência fica ENTRE o apoio e a potência, o que caracteriza alavanca de segunda classe, ou inter-resistente. Primeira classe exige o apoio no meio, arranjo da articulação atlanto-occipital.",
      fundamento: "Item 16.2.4, tópico 3 — cinesiologia e biomecânica.",
      macete: "Quem está no meio dá o nome: apoio no meio é 1ª, resistência no meio é 2ª, potência no meio é 3ª.",
      erroComum: "Decorar a lista de exemplos sem saber localizar apoio, potência e resistência.",
      comoBancaPensa: "Descreve corretamente o arranjo e erra apenas o rótulo final — quem lê a descrição e concorda com ela valida o item inteiro."
    }
  },
  {
    id: "FIS-053", disciplina: "Fisioterapia", assunto: "Cinesiologia e biomecânica", subassunto: "Regra côncavo-convexo",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.65,
    enunciado: "Segundo a regra côncavo-convexo, quando a superfície articular convexa se move sobre uma superfície côncava fixa, o deslizamento ocorre na mesma direção do rolamento e, portanto, na mesma direção do movimento observado do segmento ósseo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "mesma direção do rolamento",
    cognitivo: {
      motivo: "Fundamentar a direção da mobilização articular passiva, que se define exatamente por esta regra.",
      palavraCritica: "mesma direção",
    },
    comentario: {
      resolucao: "ERRADO. Convexo sobre côncavo fixo: o deslizamento ocorre em direção OPOSTA à do rolamento e à do movimento do segmento. É por isso que, para ganhar abdução de ombro, a mobilização acessória da cabeça umeral é feita em sentido caudal, embora o braço suba. A regra descrita no item é a do caso inverso — côncavo movendo-se sobre convexo fixo.",
      fundamento: "Item 16.2.4, tópico 3 — artrocinemática.",
      macete: "Convexo contraria; côncavo concorda.",
      erroComum: "Aplicar a mesma direção nos dois casos e mobilizar no sentido que agrava o pinçamento.",
      comoBancaPensa: "Inverte a regra e ainda acrescenta uma conclusão coerente com a inversão, dando ao item aparência de raciocínio completo."
    }
  },
  {
    id: "FIS-054", disciplina: "Fisioterapia", assunto: "Cinesiologia e biomecânica", subassunto: "Artrocinemática",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.6,
    enunciado: "Rolamento, deslizamento e giro são os três movimentos acessórios que ocorrem entre as superfícies articulares e que, em geral, não podem ser executados voluntariamente pelo paciente de forma isolada.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "movimentos acessórios ... não podem ser executados voluntariamente",
    cognitivo: {
      motivo: "Justificar a existência da mobilização passiva como recurso terapêutico distinto do exercício ativo.",
      palavraCritica: "não podem ser executados voluntariamente",
    },
    comentario: {
      resolucao: "CERTO. Os movimentos artrocinemáticos ocorrem entre as superfícies e acompanham o movimento osteocinemático, mas não são acessíveis ao comando voluntário isoladamente. Daí a razão de ser da mobilização articular passiva: recuperar deslizamento perdido é algo que o paciente não consegue fazer sozinho por mais exercício ativo que realize.",
      fundamento: "Item 16.2.4, tópico 3 — artrocinemática.",
      macete: "Osteocinemático o paciente faz; artrocinemático o terapeuta faz.",
      erroComum: "Achar que amplitude articular se recupera apenas com exercício ativo.",
      comoBancaPensa: "Item conceitual correto que sustenta toda a terapia manual — cobrado como fundamento, não como técnica."
    }
  },
  {
    id: "FIS-055", disciplina: "Fisioterapia", assunto: "Cinesiologia e biomecânica", subassunto: "Torque e braço de momento",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.6,
    enunciado: "O torque depende da magnitude da força e da distância perpendicular entre sua linha de ação e o eixo de rotação.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "distância perpendicular",
    cognitivo: {
      motivo: "Base do raciocínio de dosagem: mudar o ponto de aplicação altera a carga sem alterar o peso.",
      palavraCritica: "perpendicular",
    },
    comentario: {
      resolucao: "CERTO. Torque é o produto da força pelo braço de momento, e braço de momento é a distância PERPENDICULAR da linha de ação ao eixo. É a razão de um mesmo halter exigir mais do quadríceps com o joelho a 90 graus do que próximo à extensão completa, e de aproximar a carga do eixo aliviar a articulação sem reduzir o peso.",
      fundamento: "Item 16.2.4, tópico 3 — biomecânica.",
      macete: "Mesmo peso, braço maior, carga maior.",
      erroComum: "Usar a distância ao longo do segmento em vez da distância perpendicular à linha de ação.",
      comoBancaPensa: "Item curto e correto — a palavra 'perpendicular' é o único ponto onde a banca poderia ter mentido."
    }
  },
  {
    id: "FIS-056", disciplina: "Fisioterapia", assunto: "Cinesiologia e biomecânica", subassunto: "Planos e eixos de movimento",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.65,
    enunciado: "A abdução do ombro realiza-se no plano sagital, em torno de um eixo laterolateral.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "plano sagital ... eixo laterolateral",
    cognitivo: {
      motivo: "Fixar a correspondência plano-eixo, que organiza toda a descrição de movimento.",
      palavraCritica: "sagital",
    },
    comentario: {
      resolucao: "ERRADO. Abdução e adução ocorrem no plano FRONTAL, em torno de eixo ANTEROPOSTERIOR. O plano sagital com eixo laterolateral é o da flexão e extensão. A regra geral é que o eixo é sempre perpendicular ao plano em que o movimento acontece.",
      fundamento: "Item 16.2.4, tópico 3 — cinesiologia.",
      macete: "Frontal-anteroposterior para abrir; sagital-laterolateral para dobrar; transverso-longitudinal para girar.",
      erroComum: "Associar o nome do plano ao do eixo de mesma sonoridade.",
      comoBancaPensa: "Troca simultânea de plano e eixo — a coerência interna entre os dois erros faz o par parecer certo."
    }
  },
  {
    id: "FIS-057", disciplina: "Fisioterapia", assunto: "Cinesiologia e biomecânica", subassunto: "Ritmo escapuloumeral",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.6,
    enunciado: "No ritmo escapuloumeral, admite-se a proporção de dois graus de movimento escapulotorácico para cada grau de movimento glenoumeral, de modo que, na elevação completa do braço até cento e oitenta graus, cerca de cento e vinte graus provêm da escápula e sessenta graus da articulação glenoumeral, cabendo a esta última, portanto, a menor parcela da amplitude total.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "dois graus de movimento escapulotorácico para cada grau glenoumeral",
    cognitivo: {
      motivo: "Cobrar a proporção correta, que orienta a interpretação de discinesia escapular.",
      palavraCritica: "cento e vinte graus provêm da escápula",
    },
    comentario: {
      resolucao: "ERRADO. A proporção está invertida. O ritmo escapuloumeral é de dois graus GLENOUMERAIS para cada grau escapulotorácico: dos 180 graus de elevação, cerca de 120 vêm da glenoumeral e 60 da escapulotorácica. A inversão importa clinicamente — é a glenoumeral que contribui com a maior parte, e é ela que primeiro limita quando há restrição capsular.",
      fundamento: "Item 16.2.4, tópico 3 — cinesiologia do complexo do ombro.",
      macete: "2:1, e o 2 é do úmero. 120 glenoumeral, 60 escapular.",
      erroComum: "Guardar a razão 2:1 sem guardar de quem é o 2.",
      comoBancaPensa: "Preserva o número que o candidato memorizou e inverte a quem ele pertence — memorização sem compreensão não protege."
    }
  },

  /* ============ TÓPICO 4 — ANÁLISE DA MARCHA ============ */
  {
    id: "FIS-058", disciplina: "Fisioterapia", assunto: "Análise da marcha", subassunto: "Ciclo da marcha",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.7,
    enunciado: "Na marcha normal, a fase de apoio ocupa cerca de sessenta por cento do ciclo, e a de balanço, quarenta por cento.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "sessenta por cento ... quarenta por cento",
    cognitivo: {
      motivo: "Referência numérica básica da análise de marcha, usada para identificar assimetrias.",
      palavraCritica: "sessenta por cento",
    },
    comentario: {
      resolucao: "CERTO. A divisão 60/40 é a referência clássica para a marcha em velocidade confortável. Ela tem uso clínico direto: encurtamento da fase de apoio de um lado indica que o paciente evita carga naquele membro, achado típico de marcha antálgica.",
      fundamento: "Item 16.2.4, tópico 4 — análise da marcha.",
      macete: "Apoio manda: 60. E é o apoio que encurta quando dói.",
      erroComum: "Inverter a proporção ou supor divisão igual.",
      comoBancaPensa: "Número correto em item curto — a banca aposta que o candidato desconfia justamente do número que sabe."
    }
  },
  {
    id: "FIS-059", disciplina: "Fisioterapia", assunto: "Análise da marcha", subassunto: "Duplo apoio",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.6,
    enunciado: "O período de duplo apoio, em que ambos os pés mantêm contato com o solo, ocorre duas vezes a cada ciclo tanto na marcha quanto na corrida.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "tanto na marcha quanto na corrida",
    cognitivo: {
      motivo: "Estabelecer o critério que diferencia marcha de corrida, cobrado como conceito e não como cronometria.",
      palavraCritica: "quanto na corrida",
    },
    comentario: {
      resolucao: "ERRADO. O duplo apoio é justamente o que define a marcha e o que desaparece na corrida, onde surge a fase aérea, com ambos os pés fora do solo. Marcha sempre tem ao menos um pé no chão; corrida tem momentos com nenhum. Na marcha o duplo apoio ocorre duas vezes por ciclo e reduz-se conforme a velocidade aumenta, até zerar na transição para a corrida.",
      fundamento: "Item 16.2.4, tópico 4 — análise da marcha.",
      macete: "Andar: sempre um pé no chão. Correr: às vezes nenhum.",
      erroComum: "Tratar corrida como marcha rápida.",
      comoBancaPensa: "Estende à corrida uma característica exclusiva da marcha — generalização indevida em item de aparência técnica."
    }
  },
  {
    id: "FIS-060", disciplina: "Fisioterapia", assunto: "Análise da marcha", subassunto: "Marcha de Trendelenburg",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.65,
    enunciado: "Na marcha de Trendelenburg, decorrente da insuficiência dos abdutores do quadril, observa-se queda da pelve do lado do membro que está em apoio durante a fase unipodal.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "do lado do membro que está em apoio",
    cognitivo: {
      motivo: "Identificar corretamente o lado acometido a partir do sinal observado — erro de lado inverte a conduta.",
      palavraCritica: "do lado ... em apoio",
    },
    comentario: {
      resolucao: "ERRADO. A queda ocorre no lado CONTRALATERAL, isto é, no lado do membro que está no ar. O glúteo médio do lado em apoio é o responsável por estabilizar a pelve; quando ele falha, a pelve do lado oposto desaba. Por isso o sinal aponta para insuficiência do lado que sustenta o corpo, não do lado que cai.",
      fundamento: "Item 16.2.4, tópico 4 — marchas patológicas.",
      macete: "Cai o lado que está no ar; a culpa é do lado que está no chão.",
      erroComum: "Tratar o lado que visivelmente cai como o lado fraco.",
      comoBancaPensa: "Troca de sujeito entre lados — o item descreve o achado correto e atribui a ele o lado errado."
    }
  },
  {
    id: "FIS-061", disciplina: "Fisioterapia", assunto: "Análise da marcha", subassunto: "Marcha escarvante",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.6,
    enunciado: "A marcha escarvante caracteriza-se por flexão exagerada de quadril e joelho durante o balanço, compensando a incapacidade de realizar a dorsiflexão do tornozelo.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "flexão exagerada ... compensando ... dorsiflexão",
    cognitivo: {
      motivo: "Ler o padrão de marcha como compensação de um déficit específico, e não como padrão isolado a decorar.",
      palavraCritica: "compensando",
    },
    comentario: {
      resolucao: "CERTO. Sem dorsiflexão ativa o pé pende e a ponta arrasta no balanço. A estratégia do paciente é elevar mais o membro flexionando quadril e joelho, o que produz o aspecto de quem sobe um degrau invisível. O quadro típico decorre de lesão do nervo fibular comum. Nomear a compensação é o que permite escolher a órtese correta.",
      fundamento: "Item 16.2.4, tópico 4 — marchas patológicas.",
      macete: "Pé que não sobe faz a perna subir por ele.",
      erroComum: "Confundir com a marcha ceifante, em que o membro faz circundução em vez de elevar-se.",
      comoBancaPensa: "Descrição correta e completa — a banca separa quem entende o mecanismo de quem decorou nomes."
    }
  },
  {
    id: "FIS-062", disciplina: "Fisioterapia", assunto: "Análise da marcha", subassunto: "Marcha ceifante",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.6,
    enunciado: "A marcha ceifante, com circundução do membro inferior no balanço, é típica da hemiparesia espástica.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "circundução ... hemiparesia espástica",
    cognitivo: {
      motivo: "Associar padrão de marcha ao quadro neurológico que o produz.",
      palavraCritica: "hemiparesia espástica",
    },
    comentario: {
      resolucao: "CERTO. Na hemiparesia espástica o padrão extensor do membro inferior impede a flexão de joelho necessária ao balanço. O paciente resolve levando o membro em circundução, movimento que lembra o gesto de ceifar. É o padrão clássico do sobrevivente de AVC.",
      fundamento: "Item 16.2.4, tópico 4 — marchas patológicas.",
      macete: "Ceifa quem não dobra o joelho.",
      erroComum: "Trocar com a escarvante, na qual o membro se eleva em vez de contornar.",
      comoBancaPensa: "Item curto e correto de associação direta — serve de âncora para itens mais difíceis do mesmo bloco."
    }
  },
  {
    id: "FIS-063", disciplina: "Fisioterapia", assunto: "Análise da marcha", subassunto: "Parâmetros espaço-temporais",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.55,
    enunciado: "Entre os parâmetros espaço-temporais da marcha, a cadência é definida como a distância linear compreendida entre dois contatos iniciais sucessivos do mesmo pé, sendo habitualmente expressa em metros.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "distância linear ... expressa em metros",
    cognitivo: {
      motivo: "Separar parâmetros de espaço de parâmetros de tempo, que o candidato costuma agrupar.",
      palavraCritica: "distância linear",
    },
    comentario: {
      resolucao: "ERRADO. Cadência é parâmetro TEMPORAL: número de passos por unidade de tempo, expresso em passos por minuto. A definição do item — distância entre dois contatos iniciais sucessivos do mesmo pé — corresponde ao comprimento da passada, parâmetro espacial medido em metros. O item troca os dois.",
      fundamento: "Item 16.2.4, tópico 4 — parâmetros da marcha.",
      macete: "Cadência é ritmo, conta-se por minuto. Passada é distância, mede-se em metros.",
      erroComum: "Confundir passo (contatos de pés opostos) com passada (mesmo pé).",
      comoBancaPensa: "Nomeia um parâmetro e descreve outro, com unidade de medida coerente com a descrição errada."
    }
  },

  /* ====== TÓPICO 5 — EXERCÍCIOS TERAPÊUTICOS E TREINAMENTO FUNCIONAL ====== */
  {
    id: "FIS-064", disciplina: "Fisioterapia", assunto: "Exercício terapêutico", subassunto: "Contração isométrica",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 55, probReaparecer: 0.65,
    enunciado: "Na contração isométrica desenvolve-se tensão muscular sem alteração do comprimento e sem movimento articular.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sem alteração ... do comprimento",
    cognitivo: {
      motivo: "Base da prescrição em fase aguda, quando o movimento articular é indesejado.",
      palavraCritica: "sem movimento articular",
    },
    comentario: {
      resolucao: "CERTO. Isometria é tensão sem encurtamento. Sua indicação clínica decorre exatamente disso: permite recrutar o músculo em fase aguda, com imobilização, ou quando a amplitude é dolorosa, sem impor movimento à articulação. Reserva a exigência de que o ganho de força é relativamente específico ao ângulo treinado.",
      fundamento: "Item 16.2.4, tópico 5 — exercícios terapêuticos.",
      macete: "Iso-métrico: mesma medida.",
      erroComum: "Supor que isometria não gera ganho de força.",
      comoBancaPensa: "Definição literal correta — item de calibragem no início do bloco."
    }
  },
  {
    id: "FIS-065", disciplina: "Fisioterapia", assunto: "Exercício terapêutico", subassunto: "Contração excêntrica",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.65,
    enunciado: "A contração excêntrica gera menor tensão muscular que a concêntrica realizada na mesma velocidade e, por essa razão, associa-se a menor incidência de dor muscular tardia.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "menor tensão ... menor incidência",
    cognitivo: {
      motivo: "Fundamentar por que o trabalho excêntrico é potente e ao mesmo tempo exige progressão cuidadosa.",
      palavraCritica: "menor tensão",
    },
    comentario: {
      resolucao: "ERRADO. É o inverso nas duas afirmações. A contração excêntrica produz MAIOR tensão que a concêntrica na mesma velocidade, e é a que mais se associa à dor muscular de início tardio. As duas coisas caminham juntas: a alta tensão explica tanto a eficácia do treino excêntrico quanto o desconforto que ele provoca nas primeiras sessões.",
      fundamento: "Item 16.2.4, tópico 5 — exercícios terapêuticos.",
      macete: "Excêntrico é o que mais tensiona e o que mais dói depois.",
      erroComum: "Associar 'frear a carga' a esforço menor porque parece mais fácil executar.",
      comoBancaPensa: "Duas inversões encadeadas, em que a segunda é consequência lógica da primeira — a coerência interna dá aparência de verdade."
    }
  },
  {
    id: "FIS-066", disciplina: "Fisioterapia", assunto: "Exercício terapêutico", subassunto: "Exercício isocinético",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.6,
    enunciado: "O exercício isocinético é realizado em velocidade angular constante, com resistência acomodativa que se ajusta à força aplicada pelo paciente ao longo da amplitude, o que exige equipamento específico.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "velocidade angular constante ... resistência acomodativa",
    cognitivo: {
      motivo: "Distinguir os três regimes de contração pelo que é mantido constante em cada um.",
      palavraCritica: "acomodativa",
    },
    comentario: {
      resolucao: "CERTO. No isocinético o dinamômetro fixa a velocidade e devolve resistência igual à força que o paciente aplica a cada ângulo. Consequência prática relevante: a sobrecarga é máxima em toda a amplitude, o que não acontece com peso livre, cuja exigência varia conforme o braço de momento. É também o que torna o método dependente de equipamento.",
      fundamento: "Item 16.2.4, tópico 5 — exercícios terapêuticos.",
      macete: "Isocinético fixa a velocidade; isotônico fixa a carga; isométrico fixa o comprimento.",
      erroComum: "Chamar de isocinético qualquer exercício feito em aparelho.",
      comoBancaPensa: "Item correto que cobra o mecanismo, não o nome — 'resistência acomodativa' é a expressão que decide."
    }
  },
  {
    id: "FIS-067", disciplina: "Fisioterapia", assunto: "Exercício terapêutico", subassunto: "Cadeia cinética fechada",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.65,
    enunciado: "Os exercícios em cadeia cinética fechada para o joelho, como o agachamento, produzem maior força de cisalhamento anterior sobre a tíbia do que os exercícios em cadeia aberta, razão pela qual são evitados nas fases iniciais da reabilitação após reconstrução do ligamento cruzado anterior, período em que se prefere a extensão de joelho com carga aplicada distalmente.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "maior força de cisalhamento anterior",
    cognitivo: {
      motivo: "Decidir corretamente a progressão pós-operatória, em que a escolha da cadeia é o ponto central.",
      palavraCritica: "maior ... do que os exercícios em cadeia aberta",
    },
    comentario: {
      resolucao: "ERRADO. A relação é a inversa. É a cadeia ABERTA — extensão de joelho sentado com carga distal — que gera maior cisalhamento anterior da tíbia e maior tensão no cruzado anterior. A cadeia fechada promove co-contração de quadríceps e isquiotibiais e compressão articular, reduzindo esse cisalhamento; por isso é a preferida nas fases iniciais, e não a evitada.",
      fundamento: "Item 16.2.4, tópico 5 — exercícios terapêuticos.",
      macete: "Pé no chão protege o cruzado; perna no ar puxa a tíbia para frente.",
      erroComum: "Associar agachamento a risco por ser exercício de carga corporal.",
      comoBancaPensa: "Inverte a premissa biomecânica e conclui coerentemente a partir dela — a conclusão errada valida a premissa errada aos olhos do candidato."
    }
  },
  {
    id: "FIS-068", disciplina: "Fisioterapia", assunto: "Exercício terapêutico", subassunto: "Contração concêntrica",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.6,
    enunciado: "Na contração concêntrica, a tensão desenvolvida é suficiente para vencer a resistência e a origem e a inserção do músculo afastam-se uma da outra.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "afastam-se uma da outra",
    cognitivo: {
      motivo: "Obrigar a leitura até o fim: a primeira metade do item está correta.",
      palavraCritica: "afastam-se",
    },
    comentario: {
      resolucao: "ERRADO. A primeira parte procede — na contração concêntrica a tensão vence a resistência. Mas o desfecho está invertido: vencer a resistência significa encurtar, e portanto origem e inserção APROXIMAM-SE. O afastamento sob tensão caracteriza a contração excêntrica. Um único verbo no fim derruba o item inteiro.",
      fundamento: "Item 16.2.4, tópico 5 — exercícios terapêuticos.",
      macete: "Concêntrico encurta e aproxima; excêntrico alonga e afasta.",
      erroComum: "Parar de ler quando a primeira metade confere.",
      comoBancaPensa: "Verdade seguida de falso emendado — o padrão mais rentável da banca em item de conceito básico."
    }
  },
  {
    id: "FIS-069", disciplina: "Fisioterapia", assunto: "Exercício terapêutico", subassunto: "Facilitação neuromuscular proprioceptiva",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.55,
    enunciado: "Na técnica de contrair-relaxar, o segmento é levado até o limite da amplitude disponível, solicita-se contração isométrica do músculo encurtado contra a resistência do terapeuta e, após o relaxamento, busca-se nova amplitude.",
    gabarito: "C", pegadinha: "troca-sujeito", palavraChave: "contração isométrica do músculo encurtado",
    cognitivo: {
      motivo: "Fixar qual músculo contrai na técnica, ponto em que ela se distingue das demais.",
      palavraCritica: "do músculo encurtado",
    },
    comentario: {
      resolucao: "CERTO. É a sequência do contrair-relaxar: leva-se até a barreira, contrai-se isometricamente o próprio músculo que se quer alongar, e o relaxamento subsequente abre amplitude nova. O ponto que a banca costuma trocar é justamente qual músculo contrai — nas técnicas que recrutam o antagonista, a lógica é outra.",
      fundamento: "Item 16.2.4, tópico 5 — técnicas de alongamento.",
      macete: "Contrair-relaxar: contrai quem está curto.",
      erroComum: "Atribuir a contração ao músculo antagonista.",
      comoBancaPensa: "Descrição procedimental correta — cobra execução, não teoria."
    }
  },

  /* ============ TÓPICO 6 — RECURSOS TERAPÊUTICOS ============ */
  {
    id: "FIS-070", disciplina: "Fisioterapia", assunto: "Recursos terapêuticos", subassunto: "Crioterapia — efeitos fisiológicos",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.7,
    enunciado: "São efeitos da crioterapia a vasoconstrição, a queda do metabolismo local e a lentificação da condução nervosa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "vasoconstrição ... lentificação da condução nervosa",
    cognitivo: {
      motivo: "Reunir os três efeitos que justificam o uso do frio na fase aguda.",
      palavraCritica: "velocidade de condução nervosa",
    },
    comentario: {
      resolucao: "CERTO. Os três efeitos estão corretos e explicam a indicação clássica na fase aguda: a vasoconstrição limita o extravasamento, a queda do metabolismo reduz a lesão secundária por hipóxia e a lentificação da condução nervosa produz analgesia. Reserva a fazer: a vasoconstrição inicial pode ser seguida de vasodilatação com aplicações muito prolongadas.",
      fundamento: "Item 16.2.4, tópico 6 — crioterapia.",
      macete: "Frio fecha vaso, freia metabolismo e atrasa o nervo.",
      erroComum: "Atribuir ao frio efeito primário de aumento de fluxo sanguíneo.",
      comoBancaPensa: "Enumeração integralmente correta — a banca sabe que listas longas convidam à desconfiança."
    }
  },
  {
    id: "FIS-071", disciplina: "Fisioterapia", assunto: "Recursos terapêuticos", subassunto: "Crioterapia — contraindicações",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.6,
    enunciado: "O fenômeno de Raynaud e a hipersensibilidade ao frio constituem contraindicações à aplicação de crioterapia.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "Raynaud ... hipersensibilidade ao frio",
    cognitivo: {
      motivo: "Reconhecer condições em que o recurso mais banal da fase aguda passa a ser perigoso.",
      palavraCritica: "contraindicações",
    },
    comentario: {
      resolucao: "CERTO. No fenômeno de Raynaud o frio deflagra vasoespasmo intenso, agravando a isquemia distal. A hipersensibilidade ao frio, incluindo a urticária ao frio, é contraindicação pelo mesmo motivo de segurança. Somam-se a essas as áreas com comprometimento circulatório e as regiões com déficit sensitivo, em que o paciente não relata a lesão.",
      fundamento: "Item 16.2.4, tópico 6 — crioterapia.",
      macete: "Frio é proibido onde já falta circulação ou falta sensação.",
      erroComum: "Tratar gelo como recurso sem contraindicação por ser de uso doméstico.",
      comoBancaPensa: "Item curto e correto sobre segurança — cobra a lista que o candidato nunca leu por achar o recurso trivial."
    }
  },
  {
    id: "FIS-072", disciplina: "Fisioterapia", assunto: "Recursos terapêuticos", subassunto: "Ultrassom — frequência e profundidade",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.7,
    enunciado: "No ultrassom terapêutico, a frequência de três megahertz é indicada para o tratamento de estruturas profundas, ao passo que a de um megahertz concentra sua energia em tecidos superficiais, razão pela qual esta última é a escolhida para lesões cutâneas e subcutâneas.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "três megahertz ... profundas",
    cognitivo: {
      motivo: "Escolher a frequência conforme a profundidade do alvo, decisão de dosagem que se toma em toda sessão.",
      palavraCritica: "três megahertz",
    },
    comentario: {
      resolucao: "ERRADO. A relação está invertida. Quanto MAIOR a frequência, maior a absorção nas primeiras camadas e menor a penetração: 3 MHz atua em tecidos superficiais e 1 MHz alcança estruturas profundas. A lógica é geral em física de ondas — frequência alta é absorvida cedo. Aplicar 3 MHz sobre alvo profundo aquece a pele e não chega ao tecido pretendido.",
      fundamento: "Item 16.2.4, tópico 6 — ultrassom terapêutico.",
      macete: "Frequência alta para de perto; frequência baixa vai longe.",
      erroComum: "Associar número maior a alcance maior.",
      comoBancaPensa: "Inverte uma relação física em que a intuição do candidato já rema contra a resposta certa."
    }
  },
  {
    id: "FIS-073", disciplina: "Fisioterapia", assunto: "Recursos terapêuticos", subassunto: "Ultrassom — modo pulsado",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.6,
    enunciado: "O modo pulsado do ultrassom terapêutico é o indicado quando se pretende obter aquecimento tecidual profundo, por permitir maior deposição de energia térmica que o modo contínuo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "aquecimento tecidual profundo",
    cognitivo: {
      motivo: "Vincular o modo de emissão ao efeito pretendido, escolha que muda conforme a fase da lesão.",
      palavraCritica: "pulsado ... aquecimento",
    },
    comentario: {
      resolucao: "ERRADO. É o contrário: o modo pulsado existe justamente para dissipar o calor nos intervalos entre os pulsos, privilegiando os efeitos mecânicos, não térmicos. Quem busca aquecimento usa o modo CONTÍNUO. A consequência clínica é direta: na fase aguda, em que o calor é indesejado, indica-se o pulsado.",
      fundamento: "Item 16.2.4, tópico 6 — ultrassom terapêutico.",
      macete: "Contínuo aquece; pulsado poupa o calor.",
      erroComum: "Tratar contínuo e pulsado como intensidades do mesmo efeito.",
      comoBancaPensa: "Troca o efeito de cada modo e ainda oferece uma justificativa plausível para a troca."
    }
  },
  {
    id: "FIS-074", disciplina: "Fisioterapia", assunto: "Recursos terapêuticos", subassunto: "TENS convencional",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.7,
    enunciado: "A modalidade convencional da estimulação elétrica nervosa transcutânea emprega alta frequência e intensidade em nível sensorial, produzindo analgesia de instalação rápida e duração relativamente curta, atribuída ao mecanismo de comportas medulares.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "alta frequência ... nível sensorial ... comportas",
    cognitivo: {
      motivo: "Ligar parâmetros de corrente a mecanismo analgésico, que é o que decide a escolha da modalidade.",
      palavraCritica: "instalação rápida e duração relativamente curta",
    },
    comentario: {
      resolucao: "CERTO. Os quatro elementos conferem: alta frequência, intensidade sensorial (formigamento confortável, sem contração), início rápido e duração curta, por recrutamento de fibras de grosso calibre que inibem a transmissão nociceptiva no corno posterior. É a modalidade de escolha para alívio durante a sessão ou durante uma atividade específica.",
      fundamento: "Item 16.2.4, tópico 6 — eletroterapia analgésica.",
      macete: "Convencional: liga rápido, passa rápido, e só formiga.",
      erroComum: "Subir a intensidade até contração muscular, o que desloca a corrente para outra modalidade.",
      comoBancaPensa: "Item longo com quatro parâmetros corretos — a banca aposta que ao menos um pareça errado ao candidato."
    }
  },
  {
    id: "FIS-075", disciplina: "Fisioterapia", assunto: "Recursos terapêuticos", subassunto: "TENS acupuntural",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.65,
    enunciado: "A modalidade acupuntural da estimulação elétrica nervosa transcutânea utiliza baixa frequência e intensidade em nível motor, produzindo analgesia imediata e de curta duração pelo mesmo mecanismo de comportas da modalidade convencional.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "imediata e de curta duração pelo mesmo mecanismo",
    cognitivo: {
      motivo: "Separar as duas modalidades pelo mecanismo, e não apenas pelos parâmetros de corrente.",
      palavraCritica: "mesmo mecanismo de comportas",
    },
    comentario: {
      resolucao: "ERRADO. Os parâmetros do início estão certos — baixa frequência e intensidade motora, com contração visível. O desfecho é que está trocado: a analgesia da modalidade acupuntural é de instalação LENTA e duração PROLONGADA, atribuída à liberação de opioides endógenos, e não ao mecanismo de comportas. É por isso que ela se presta ao manejo de dor crônica.",
      fundamento: "Item 16.2.4, tópico 6 — eletroterapia analgésica.",
      macete: "Acupuntural demora para agir e demora para passar. Opioide, não comporta.",
      erroComum: "Guardar os parâmetros das duas modalidades e não guardar os mecanismos.",
      comoBancaPensa: "Metade correta seguida de troca de mecanismo — quem confere só os parâmetros marca CERTO."
    }
  },
  {
    id: "FIS-076", disciplina: "Fisioterapia", assunto: "Recursos terapêuticos", subassunto: "Termoterapia superficial",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.6,
    enunciado: "Os recursos de termoterapia superficial, como a bolsa térmica e a parafina, promovem aquecimento eficaz de estruturas situadas a mais de cinco centímetros de profundidade.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "mais de cinco centímetros",
    cognitivo: {
      motivo: "Definir o alcance real do recurso, sem o qual a indicação é equivocada.",
      palavraCritica: "cinco centímetros",
    },
    comentario: {
      resolucao: "ERRADO. Termoterapia superficial aquece efetivamente pele e tecido subcutâneo, com alcance da ordem de um a dois centímetros. Atingir estruturas profundas é justamente o que exige diatermia — ondas curtas, micro-ondas ou ultrassom contínuo. O adjetivo 'superficial' no nome do grupo já entrega a resposta.",
      fundamento: "Item 16.2.4, tópico 6 — termoterapia.",
      macete: "Superficial não é apelido: é o alcance.",
      erroComum: "Indicar bolsa quente esperando efeito em articulação profunda.",
      comoBancaPensa: "Número exagerado em item curto — aposta na leitura rápida de quem já 'sabe' que calor relaxa."
    }
  },
  {
    id: "FIS-077", disciplina: "Fisioterapia", assunto: "Recursos terapêuticos", subassunto: "Diatermia por ondas curtas",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.6,
    enunciado: "A diatermia por ondas curtas produz aquecimento em profundidade por conversão de energia eletromagnética em calor no interior dos tecidos, e não por condução a partir da superfície corporal.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "conversão ... e não por condução",
    cognitivo: {
      motivo: "Explicar por que a diatermia alcança o que a bolsa quente não alcança.",
      palavraCritica: "conversão",
    },
    comentario: {
      resolucao: "CERTO. É a distinção que separa os dois grupos. A bolsa quente transfere calor por condução, de fora para dentro, e por isso se esgota nas camadas superficiais. A diatermia gera o calor DENTRO do tecido, por conversão da energia eletromagnética, alcançando profundidade que a condução não atinge. Decorre daí a exigência de retirar objetos metálicos do campo.",
      fundamento: "Item 16.2.4, tópico 6 — termoterapia profunda.",
      macete: "Bolsa entrega calor; diatermia fabrica calor lá dentro.",
      erroComum: "Tratar diatermia como uma bolsa quente mais potente.",
      comoBancaPensa: "Item conceitual correto sobre mecanismo físico — quem só conhece a indicação clínica não decide."
    }
  },
  {
    id: "FIS-078", disciplina: "Fisioterapia", assunto: "Recursos terapêuticos", subassunto: "Contraindicações da eletroterapia",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.65,
    enunciado: "O uso de marca-passo cardíaco implantado não constitui contraindicação à aplicação de correntes elétricas terapêuticas na região torácica.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "não constitui contraindicação",
    cognitivo: {
      motivo: "Reconhecer contraindicação absoluta de segurança, ponto em que o erro tem consequência grave.",
      palavraCritica: "não constitui",
    },
    comentario: {
      resolucao: "ERRADO. Marca-passo implantado é contraindicação clássica à eletroterapia, sobretudo em tronco e região torácica, pelo risco de interferência no funcionamento do dispositivo. Somam-se a ela a aplicação sobre região do seio carotídeo, sobre área neoplásica, sobre trombose e, na gestação, sobre abdome e região lombopélvica.",
      fundamento: "Item 16.2.4, tópico 6 — segurança em eletroterapia.",
      macete: "Corrente elétrica não passa perto de aparelho que também é elétrico.",
      erroComum: "Supor que o risco só existe com eletrodos diretamente sobre o dispositivo.",
      comoBancaPensa: "Nega uma contraindicação consagrada — item curto, de resposta rápida para quem estudou segurança."
    }
  },
  {
    id: "FIS-079", disciplina: "Fisioterapia", assunto: "Recursos terapêuticos", subassunto: "Manobras de massoterapia",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.55,
    enunciado: "Em massoterapia, denomina-se effleurage a manobra de amassamento em que os tecidos são comprimidos e elevados entre os dedos, e pétrissage a manobra de deslizamento superficial que abre e encerra a sessão.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "effleurage ... amassamento",
    cognitivo: {
      motivo: "Fixar a nomenclatura clássica, que a banca cobra por ser terminologia estabelecida.",
      palavraCritica: "effleurage",
    },
    comentario: {
      resolucao: "ERRADO. Os nomes estão trocados. Effleurage é o deslizamento superficial, usado para iniciar e encerrar a sessão e para distribuir o meio de deslize; pétrissage é o amassamento, em que os tecidos são comprimidos e elevados. Compõem o repertório clássico ainda a fricção, a tapotagem e a vibração.",
      fundamento: "Item 16.2.4, tópico 6 — massoterapia.",
      macete: "Effleurage roça de leve; pétrissage aperta.",
      erroComum: "Decorar a lista de manobras sem associar cada nome à sua execução.",
      comoBancaPensa: "Troca cruzada de dois rótulos, com as descrições em si corretas — quem reconhece as descrições valida o item."
    }
  },
  {
    id: "FIS-080", disciplina: "Fisioterapia", assunto: "Recursos terapêuticos", subassunto: "Drenagem linfática manual",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.6,
    enunciado: "A drenagem linfática manual é executada com pressão leve, insuficiente para provocar hiperemia, e sua sequência inicia-se pela desobstrução das vias e linfonodos proximais, antes que se trabalhe o segmento edemaciado propriamente dito.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "pressão leve ... inicia-se pela desobstrução ... proximais",
    cognitivo: {
      motivo: "Fixar os dois erros de execução que anulam o efeito da técnica: pressão excessiva e sequência invertida.",
      palavraCritica: "antes que se trabalhe o segmento edemaciado",
    },
    comentario: {
      resolucao: "CERTO. Os capilares linfáticos são superficiais e de parede delicada: pressão forte os colaba e produz o efeito oposto ao pretendido. E a sequência proximal-antes-de-distal tem lógica hidráulica — não adianta empurrar linfa para um trajeto que ainda está congestionado. Por isso se abre o caminho antes de mobilizar o edema.",
      fundamento: "Item 16.2.4, tópico 6 — drenagem linfática manual.",
      macete: "Leve como a linfa, e sempre abrindo o caminho antes de empurrar.",
      erroComum: "Iniciar pelo segmento inchado e aplicar pressão de massagem clássica.",
      comoBancaPensa: "Item longo e correto sobre técnica muito difundida na prática e pouco estudada na teoria."
    }
  },

  /* ============ TÓPICO 7 — ÓRTESES E PRÓTESES ============ */
  {
    id: "FIS-081", disciplina: "Fisioterapia", assunto: "Órteses e próteses", subassunto: "Conceitos",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.7,
    enunciado: "Denomina-se prótese o dispositivo aplicado externamente ao corpo com a finalidade de modificar as características funcionais do sistema neuromusculoesquelético, e órtese o dispositivo destinado a substituir um segmento corporal ausente.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "prótese ... modificar ... órtese ... substituir",
    cognitivo: {
      motivo: "Distinção conceitual que abre o tópico inteiro e da qual dependem todos os demais itens.",
      palavraCritica: "substituir",
    },
    comentario: {
      resolucao: "ERRADO. Os conceitos estão invertidos. ÓRTESE modifica características estruturais ou funcionais de um segmento que existe — alinha, estabiliza, corrige, assiste. PRÓTESE substitui um segmento ausente. A raiz resolve: 'orto' remete a corrigir e endireitar; prótese remete a pôr no lugar de.",
      fundamento: "Item 16.2.4, tópico 7 — órteses e próteses.",
      macete: "Órtese corrige o que existe; prótese repõe o que falta.",
      erroComum: "Usar os termos como sinônimos por ambos serem dispositivos externos.",
      comoBancaPensa: "Troca cruzada de duas definições corretas — o item soa técnico e o candidato reconhece ambas as descrições."
    }
  },
  {
    id: "FIS-082", disciplina: "Fisioterapia", assunto: "Órteses e próteses", subassunto: "Órtese tornozelo-pé",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.65,
    enunciado: "A órtese tornozelo-pé é indicada ao paciente com pé caído decorrente de fraqueza dos dorsiflexores, por manter o tornozelo posicionado durante a fase de balanço.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "pé caído ... fase de balanço",
    cognitivo: {
      motivo: "Ligar a órtese ao déficit específico que ela compensa, e ao momento do ciclo em que atua.",
      palavraCritica: "fase de balanço",
    },
    comentario: {
      resolucao: "CERTO. Sem dorsiflexão o pé pende e a ponta arrasta no balanço, gerando marcha escarvante e risco de tropeço. A órtese tornozelo-pé mantém o tornozelo próximo à posição neutra e devolve a passagem livre do pé. É o exemplo mais direto de órtese que compensa déficit motor específico.",
      fundamento: "Item 16.2.4, tópico 7 — órteses.",
      macete: "Pé caído pede órtese que segure o tornozelo, não o joelho.",
      erroComum: "Indicar dispositivo mais extenso do que o déficit exige.",
      comoBancaPensa: "Item curto, correto e de indicação clássica — serve de contraste para os itens de nomenclatura do mesmo bloco."
    }
  },
  {
    id: "FIS-083", disciplina: "Fisioterapia", assunto: "Órteses e próteses", subassunto: "Nomenclatura de órteses",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.6,
    enunciado: "A nomenclatura das órteses de membro inferior identifica o dispositivo pelas articulações abrangidas, de modo que a sigla KAFO designa a órtese de joelho, tornozelo e pé.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "articulações que ele abrange ... joelho, tornozelo e pé",
    cognitivo: {
      motivo: "Decifrar a sigla pela lógica, dispensando memorização de lista.",
      palavraCritica: "articulações que ele abrange",
    },
    comentario: {
      resolucao: "CERTO. A nomenclatura é composicional: cada letra é uma articulação incluída, de proximal para distal. KAFO reúne knee, ankle e foot — joelho, tornozelo e pé. Pelo mesmo princípio, AFO abrange tornozelo e pé, e HKAFO acrescenta o quadril. Entendida a regra, qualquer sigla nova se lê sem consulta.",
      fundamento: "Item 16.2.4, tópico 7 — órteses.",
      macete: "Leia a sigla letra a letra, de cima para baixo: cada letra é uma articulação.",
      erroComum: "Decorar siglas isoladas sem perceber a regra de formação.",
      comoBancaPensa: "Item correto que cobra a regra, e não o exemplo — quem entendeu a lógica responde qualquer variação."
    }
  },
  {
    id: "FIS-084", disciplina: "Fisioterapia", assunto: "Órteses e próteses", subassunto: "Órtese de tronco",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.55,
    enunciado: "A sigla TLSO designa a órtese que abrange os segmentos cervical e torácico da coluna vertebral.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "cervical e torácico",
    cognitivo: {
      motivo: "Aplicar a mesma regra composicional às órteses de tronco, onde o candidato costuma abandoná-la.",
      palavraCritica: "cervical",
    },
    comentario: {
      resolucao: "ERRADO. TLSO abrange os segmentos toracolombossacral — thoracic, lumbar, sacral. Não inclui a cervical. A órtese que inclui o segmento cervical junto ao torácico é a CTO, e a cervical isolada é a CO. A regra de leitura é a mesma das órteses de membro: cada letra é um segmento incluído.",
      fundamento: "Item 16.2.4, tópico 7 — órteses de tronco.",
      macete: "T-L-S: tórax, lombar, sacro. Cervical só entra quando há C.",
      erroComum: "Supor que órtese de tronco inclui o pescoço por padrão.",
      comoBancaPensa: "Aplica a sigla certa ao conteúdo errado, contando com o candidato que não decompõe as letras."
    }
  },
  {
    id: "FIS-085", disciplina: "Fisioterapia", assunto: "Órteses e próteses", subassunto: "Preparo do coto para protetização",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.6,
    enunciado: "A confecção do encaixe definitivo da prótese pode ser realizada com o coto ainda edemaciado e com áreas de cicatrização incompleta, uma vez que o próprio uso do dispositivo promoverá a modelagem e a redução do volume ao longo das primeiras semanas.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "ainda edemaciado ... cicatrização incompleta",
    cognitivo: {
      motivo: "Fixar os pré-requisitos da protetização definitiva, cuja inobservância inutiliza o encaixe.",
      palavraCritica: "pode ser realizada",
    },
    comentario: {
      resolucao: "ERRADO. O encaixe definitivo exige coto cicatrizado, sem edema e já modelado — é ele que define o ajuste, e um coto que ainda vai reduzir de volume produzirá encaixe folgado, com atrito, feridas e abandono do dispositivo. Por isso o preparo prévio com enfaixamento e dessensibilização, e o eventual uso de prótese provisória enquanto o volume não estabiliza.",
      fundamento: "Item 16.2.4, tópico 7 — protetização.",
      macete: "Encaixe se molda em coto pronto. Coto que ainda muda pede prótese provisória.",
      erroComum: "Antecipar a protetização definitiva para encurtar o tempo de reabilitação.",
      comoBancaPensa: "Dispensa uma exigência real oferecendo justificativa que soa razoável — a pressa do candidato ecoa a pressa do paciente."
    }
  },
  {
    id: "FIS-086", disciplina: "Fisioterapia", assunto: "Órteses e próteses", subassunto: "Enfaixamento do coto",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.55,
    enunciado: "No enfaixamento do coto de amputação, a compressão deve ser maior na região proximal e decrescer distalmente.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "maior na região proximal",
    cognitivo: {
      motivo: "Direção da compressão define se o enfaixamento drena ou represa o edema.",
      palavraCritica: "decrescer em direção à extremidade distal",
    },
    comentario: {
      resolucao: "ERRADO. O gradiente é o inverso: compressão MAIOR na extremidade distal, decrescendo em direção proximal. É essa direção que empurra o edema para fora do coto e favorece o formato cônico desejado. Compressão maior em cima faz garrote e represa líquido justamente na ponta que se quer afinar.",
      fundamento: "Item 16.2.4, tópico 7 — preparo do coto.",
      macete: "Aperta mais na ponta e vai soltando para cima.",
      erroComum: "Enfaixar de proximal para distal com pressão uniforme ou crescente.",
      comoBancaPensa: "Inverte o gradiente de uma técnica manual — erro de execução que só quem já enfaixou percebe de imediato."
    }
  },

  /* ==== TÓPICO 8 — NEUROLOGIA, ORTOPEDIA, CARDIOLOGIA E PNEUMOLOGIA ==== */
  {
    id: "FIS-087", disciplina: "Fisioterapia", assunto: "Fisioterapia neurofuncional", subassunto: "Acidente vascular cerebral",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 55, probReaparecer: 0.65,
    enunciado: "A lesão encefálica unilateral por acidente vascular cerebral produz déficit motor no hemicorpo contralateral.",
    gabarito: "C", pegadinha: "troca-sujeito", palavraChave: "contralateral",
    cognitivo: {
      motivo: "Fundamento anatômico que orienta a leitura de todo quadro hemisférico.",
      palavraCritica: "contralateral",
    },
    comentario: {
      resolucao: "CERTO. A decussação das vias piramidais no bulbo faz com que o hemisfério de um lado comande o hemicorpo do outro. Daí a regra: lesão à esquerda, hemiparesia à direita. Reserva que o item não contradiz: o controle da musculatura axial e alguns pares cranianos não seguem essa lateralização de forma estrita.",
      fundamento: "Item 16.2.4, tópico 8 — área neurológica.",
      macete: "Vias cruzam no bulbo; déficit aparece do outro lado.",
      erroComum: "Localizar a lesão do mesmo lado do déficit observado.",
      comoBancaPensa: "Item curto e correto de base anatômica — abre o bloco de neurologia calibrando o candidato."
    }
  },
  {
    id: "FIS-088", disciplina: "Fisioterapia", assunto: "Fisioterapia neurofuncional", subassunto: "Paralisia cerebral",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.65,
    enunciado: "A paralisia cerebral decorre de lesão progressiva do encéfalo em desenvolvimento, de modo que o comprometimento neurológico de base tende a agravar-se continuamente ao longo da vida.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "lesão progressiva",
    cognitivo: {
      motivo: "Distinguir lesão estática de quadro clínico que muda — confusão com peso sobre o prognóstico informado à família.",
      palavraCritica: "progressiva",
    },
    comentario: {
      resolucao: "ERRADO. A paralisia cerebral é definida como encefalopatia NÃO progressiva: a lesão é única e estática, ocorrida no encéfalo imaturo. O que muda ao longo da vida é a manifestação clínica — deformidades, contraturas e demandas funcionais evoluem com o crescimento —, mas a lesão em si não progride. A distinção separa a paralisia cerebral das doenças neurodegenerativas.",
      fundamento: "Item 16.2.4, tópico 8 — neuropediatria.",
      macete: "A lesão é fixa; o corpo em crescimento é que muda.",
      erroComum: "Ler o agravamento das deformidades como progressão da lesão.",
      comoBancaPensa: "Troca o adjetivo que está na própria definição do quadro, e o desfecho clínico plausível sustenta o erro."
    }
  },
  {
    id: "FIS-089", disciplina: "Fisioterapia", assunto: "Ortopedia e traumatologia", subassunto: "Artroplastia total de quadril",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.65,
    enunciado: "Após artroplastia total de quadril por via posterolateral, orienta-se o paciente a evitar a rotação externa e a abdução do membro operado, ao passo que a flexão do quadril além de noventa graus é estimulada precocemente para acelerar o ganho de amplitude, autorizando-se desde a primeira semana que o paciente se incline para calçar os próprios sapatos.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "flexão além de noventa graus é estimulada",
    cognitivo: {
      motivo: "Precauções pós-operatórias em que o erro de orientação resulta em luxação da prótese.",
      palavraCritica: "estimulada precocemente",
    },
    comentario: {
      resolucao: "ERRADO. As precauções da via posterolateral são exatamente as opostas às descritas: evitam-se a flexão além de 90 graus, a adução além da linha média e a rotação INTERNA — a combinação desses três movimentos é a que desloca a cabeça femoral posteriormente. O item inverte os movimentos proibidos e ainda transforma o principal deles em objetivo terapêutico.",
      fundamento: "Item 16.2.4, tópico 8 — ortopedia e traumatologia.",
      macete: "Via posterior: não dobra além de 90, não cruza a perna, não gira para dentro.",
      erroComum: "Aplicar as mesmas precauções a qualquer via de acesso, quando a via anterior tem restrições distintas.",
      comoBancaPensa: "Inverte o trio de precauções e o apresenta com naturalidade clínica — item de alto risco em que errar significa lesionar o paciente."
    }
  },
  {
    id: "FIS-090", disciplina: "Fisioterapia", assunto: "Fisioterapia neurofuncional", subassunto: "Choque medular",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.6,
    enunciado: "Imediatamente após a lesão medular traumática, instala-se quadro de hipertonia e hiperreflexia abaixo do nível lesado, que caracteriza o choque medular.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "hipertonia e hiperreflexia",
    cognitivo: {
      motivo: "Interpretar corretamente a fase inicial, sob pena de confundir choque medular com prognóstico definitivo.",
      palavraCritica: "hipertonia",
    },
    comentario: {
      resolucao: "ERRADO. O choque medular caracteriza-se por FLACIDEZ e ARREFLEXIA abaixo do nível da lesão, quadro transitório que sucede imediatamente ao trauma. A hipertonia e a hiperreflexia surgem depois, com a resolução do choque, quando se instala a síndrome do neurônio motor superior. A inversão importa: durante o choque não é possível estabelecer o prognóstico definitivo.",
      fundamento: "Item 16.2.4, tópico 8 — lesão medular.",
      macete: "Choque é silêncio: flácido e arreflexo. A espasticidade vem depois.",
      erroComum: "Esperar espasticidade desde o primeiro dia por saber que a lesão é de neurônio motor superior.",
      comoBancaPensa: "Atribui à fase aguda o quadro da fase crônica — quem estudou só o desfecho não distingue as duas."
    }
  },
  {
    id: "FIS-091", disciplina: "Fisioterapia", assunto: "Fisioterapia cardiovascular", subassunto: "Fases da reabilitação cardíaca",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.6,
    enunciado: "A fase I da reabilitação cardiovascular é desenvolvida ainda durante a internação hospitalar e tem entre seus objetivos a mobilização precoce e a prevenção das complicações do repouso prolongado.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "durante a internação hospitalar ... mobilização precoce",
    cognitivo: {
      motivo: "Situar cada fase no seu cenário, que é o que determina intensidade e monitorização.",
      palavraCritica: "internação hospitalar",
    },
    comentario: {
      resolucao: "CERTO. A fase I é intra-hospitalar e começa cedo, com atividades de baixa intensidade e monitorização, visando a mobilização, a orientação e o retorno às atividades básicas. As complicações do repouso — perda de massa muscular, hipotensão postural, eventos tromboembólicos — são o alvo declarado. A fase II é a ambulatorial supervisionada.",
      fundamento: "Item 16.2.4, tópico 8 — cardiologia.",
      macete: "Fase I acontece no leito; fase II, no ambulatório.",
      erroComum: "Deslocar o início da reabilitação para depois da alta.",
      comoBancaPensa: "Item correto de organização assistencial — cobra o cenário de cada fase, não o protocolo."
    }
  },
  {
    id: "FIS-092", disciplina: "Fisioterapia", assunto: "Fisioterapia respiratória", subassunto: "Freno labial",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.65,
    enunciado: "O freno labial é indicado na doença pulmonar obstrutiva crônica porque a resistência oferecida na expiração mantém as vias aéreas pérvias, reduzindo o aprisionamento de ar.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "manter as vias aéreas pérvias ... aprisionamento de ar",
    cognitivo: {
      motivo: "Explicar por que uma manobra sem equipamento é padrão de conduta na obstrução crônica.",
      palavraCritica: "resistência oferecida na expiração",
    },
    comentario: {
      resolucao: "CERTO. Na doença obstrutiva as vias aéreas de pequeno calibre colapsam precocemente na expiração, aprisionando ar. A resistência criada pelos lábios semicerrados mantém pressão positiva a jusante, retardando esse colapso e permitindo esvaziamento mais completo. Some-se o efeito de reduzir a frequência respiratória e a sensação de dispneia.",
      fundamento: "Item 16.2.4, tópico 8 — pneumologia.",
      macete: "Freio na saída impede que a via feche antes da hora.",
      erroComum: "Explicar o benefício apenas pelo controle da ansiedade.",
      comoBancaPensa: "Item correto que exige o mecanismo, e não a indicação — 'reduzindo o aprisionamento' é o que decide."
    }
  },
  {
    id: "FIS-093", disciplina: "Fisioterapia", assunto: "Fisioterapia cardiovascular", subassunto: "Escala de Borg",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.6,
    enunciado: "A escala de Borg original de percepção subjetiva de esforço é graduada de zero a dez pontos.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "zero a dez",
    cognitivo: {
      motivo: "Distinguir a escala original da versão modificada, ambas de uso corrente e frequentemente confundidas.",
      palavraCritica: "original",
    },
    comentario: {
      resolucao: "ERRADO. A escala de Borg ORIGINAL vai de 6 a 20, faixa escolhida para guardar correspondência aproximada com a frequência cardíaca (multiplicando-se o valor por dez). A graduação de 0 a 10 é a da escala de Borg MODIFICADA, ou categórica de razão. O item descreve a modificada e a rotula como original.",
      fundamento: "Item 16.2.4, tópico 8 — cardiologia.",
      macete: "Original começa em 6 e vai a 20; modificada é 0 a 10.",
      erroComum: "Chamar de Borg apenas a versão 0–10, por ser a mais usada na prática.",
      comoBancaPensa: "Troca numérica ancorada na palavra 'original' — item curto que se resolve numa palavra."
    }
  },

  /* ============ TÓPICO 9 — GERIATRIA ============ */
  {
    id: "FIS-094", disciplina: "Fisioterapia", assunto: "Geriatria", subassunto: "Sarcopenia",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.65,
    enunciado: "A sarcopenia é definida exclusivamente pela redução da massa muscular esquelética, sendo dispensável a avaliação da força para sua caracterização.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "exclusivamente pela redução da massa",
    cognitivo: {
      motivo: "Acompanhar a mudança de definição que deslocou a força para o centro do diagnóstico.",
      palavraCritica: "dispensável a avaliação da força",
    },
    comentario: {
      resolucao: "ERRADO. As definições em vigor colocam a baixa FORÇA muscular como o parâmetro primário; a redução de massa confirma o diagnóstico e o desempenho físico gradua a gravidade. A inversão tem razão prática: força e desempenho predizem desfechos funcionais melhor que massa isolada. Reduzir a sarcopenia a massa muscular é a concepção que foi expressamente superada.",
      fundamento: "Item 16.2.4, tópico 9 — geriatria.",
      macete: "Primeiro a força, depois a massa, por fim o desempenho.",
      erroComum: "Manter a definição antiga, centrada apenas em massa magra.",
      comoBancaPensa: "Restringe o conceito à concepção anterior — item que separa quem estudou pela literatura atual."
    }
  },
  {
    id: "FIS-095", disciplina: "Fisioterapia", assunto: "Geriatria", subassunto: "Avaliação do risco de quedas",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.6,
    enunciado: "No teste Timed Up and Go, cronometra-se o tempo que o idoso leva para levantar-se de uma cadeira, percorrer três metros, retornar e sentar-se novamente, sendo o tempo maior associado a maior risco de quedas.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "três metros ... tempo maior ... maior risco",
    cognitivo: {
      motivo: "Fixar a execução padronizada do teste mais usado no rastreio de quedas.",
      palavraCritica: "três metros",
    },
    comentario: {
      resolucao: "CERTO. A execução é essa: levantar, caminhar três metros, girar, voltar e sentar, cronometrando-se o tempo total. Sua força está em condensar transferência, marcha, giro e equilíbrio dinâmico numa única medida, e a associação entre tempo maior e risco maior de quedas é o achado que o consagrou. Os pontos de corte variam conforme a população estudada.",
      fundamento: "Item 16.2.4, tópico 9 — geriatria.",
      macete: "Levanta, três metros, volta, senta — e o cronômetro conta tudo.",
      erroComum: "Alterar a distância percorrida, o que inviabiliza a comparação com referências.",
      comoBancaPensa: "Descrição procedimental correta sem ponto de corte — a banca evita o número que a literatura não pacificou."
    }
  },
  {
    id: "FIS-096", disciplina: "Fisioterapia", assunto: "Geriatria", subassunto: "Fenótipo de fragilidade",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.6,
    enunciado: "O fenótipo de fragilidade proposto por Fried compreende cinco critérios — perda de peso não intencional, exaustão relatada, baixo nível de atividade física, lentidão da marcha e redução da força de preensão —, considerando-se frágil o idoso que apresenta três ou mais deles e pré-frágil aquele que apresenta um ou dois.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "cinco critérios ... três ou mais",
    cognitivo: {
      motivo: "Operacionalizar um conceito que, sem os critérios, vira impressão clínica.",
      palavraCritica: "três ou mais",
    },
    comentario: {
      resolucao: "CERTO. Os cinco critérios e o ponto de corte estão corretos. A categoria intermediária também importa: um ou dois critérios caracterizam o idoso pré-frágil, faixa em que a intervenção tem maior chance de reverter o quadro. É justamente aí que o exercício resistido progressivo tem o melhor rendimento.",
      fundamento: "Item 16.2.4, tópico 9 — geriatria.",
      macete: "Cinco critérios; três fecham o diagnóstico; um ou dois é pré-frágil.",
      erroComum: "Tratar fragilidade como sinônimo de idade avançada ou de comorbidade.",
      comoBancaPensa: "Item longo com números corretos — o candidato desconfia da lista completa justamente por estar completa."
    }
  },
  {
    id: "FIS-097", disciplina: "Fisioterapia", assunto: "Geriatria", subassunto: "Osteoporose e exercício",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.6,
    enunciado: "O diagnóstico de osteoporose contraindica a prescrição de exercícios resistidos, devendo o programa restringir-se a atividades sem sobrecarga mecânica sobre o esqueleto.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "contraindica a prescrição de exercícios resistidos",
    cognitivo: {
      motivo: "Corrigir a conduta invertida mais difundida na área, que priva o paciente do estímulo de que ele precisa.",
      palavraCritica: "contraindica",
    },
    comentario: {
      resolucao: "ERRADO. O exercício resistido é indicado na osteoporose, e não contraindicado: a sobrecarga mecânica é o estímulo osteogênico, e o ganho de força reduz o risco de quedas, que é o que efetivamente produz a fratura. O que se evita é outra coisa — flexão anterior de tronco com carga, rotações bruscas e impacto de alta magnitude. Restringir a atividades sem sobrecarga retira exatamente o estímulo necessário.",
      fundamento: "Item 16.2.4, tópico 9 — geriatria.",
      macete: "Osso frágil precisa de carga; o que se evita é dobrar e torcer, não fortalecer.",
      erroComum: "Generalizar as precauções específicas até transformá-las em contraindicação ao fortalecimento.",
      comoBancaPensa: "Converte precaução pontual em vedação geral — o excesso de zelo soa prudente e por isso convence."
    }
  },
  {
    id: "FIS-098", disciplina: "Fisioterapia", assunto: "Geriatria", subassunto: "Alterações do envelhecimento",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.55,
    enunciado: "O envelhecimento cursa com aumento da massa magra e elevação da velocidade de condução nervosa periférica.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "aumento da massa magra",
    cognitivo: {
      motivo: "Estabelecer a direção das alterações senis, base de toda prescrição para idosos.",
      palavraCritica: "aumento",
    },
    comentario: {
      resolucao: "ERRADO. As duas afirmações invertem o que ocorre. O envelhecimento cursa com REDUÇÃO da massa magra, com aumento relativo da massa gorda, e com REDUÇÃO da velocidade de condução nervosa periférica — que se soma ao aumento do tempo de reação e ajuda a explicar a maior propensão a quedas.",
      fundamento: "Item 16.2.4, tópico 9 — geriatria.",
      macete: "No envelhecimento quase tudo diminui: massa magra, condução, amplitude, equilíbrio.",
      erroComum: "Ler 'aumento' e conferir apenas se o parâmetro citado existe.",
      comoBancaPensa: "Inverte o sinal de duas variáveis de uma vez — item curto que se resolve com uma pergunta só: sobe ou desce?"
    }
  },

  /* ============ TÓPICO 10 — ÉTICA PROFISSIONAL ============ */
  {
    id: "FIS-099", disciplina: "Fisioterapia", assunto: "Ética profissional", subassunto: "Código de Ética e Deontologia",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 70, probReaparecer: 0.6,
    enunciado: "O Código de Ética e Deontologia da Fisioterapia foi aprovado por resolução do Conselho Federal de Fisioterapia e Terapia Ocupacional, autarquia federal a que compete a fiscalização do exercício profissional.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "resolução do Conselho Federal ... autarquia federal",
    cognitivo: {
      motivo: "Situar a fonte normativa da ética profissional, ponto que a banca cobra por ser norma expressa.",
      palavraCritica: "autarquia federal",
    },
    comentario: {
      resolucao: "CERTO. O Código de Ética e Deontologia da Fisioterapia foi aprovado pela Resolução COFFITO nº 424/2013. O conselho federal é autarquia federal, dotada de poder de polícia sobre o exercício profissional, e a fiscalização de primeira instância é exercida pelos conselhos regionais. Norma deontológica, aqui, não é recomendação: seu descumprimento gera responsabilização.",
      fundamento: "Item 16.2.4, tópico 10 — ética profissional.",
      macete: "Ética da fisioterapia vem de resolução do COFFITO, não de lei ordinária.",
      erroComum: "Supor que o código de ética consta da lei que regulamenta a profissão.",
      comoBancaPensa: "Item correto sobre hierarquia normativa — cobra de onde vem a regra, e não o conteúdo dela."
    }
  },
  {
    id: "FIS-100", disciplina: "Fisioterapia", assunto: "Ética profissional", subassunto: "Diagnóstico fisioterapêutico",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.65,
    enunciado: "A elaboração do diagnóstico fisioterapêutico e a prescrição da conduta podem ser delegadas a profissional de nível técnico sob supervisão do fisioterapeuta.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "delegadas a profissional de nível técnico",
    cognitivo: {
      motivo: "Delimitar o núcleo indelegável do ato profissional, questão de responsabilidade e não de organização de serviço.",
      palavraCritica: "delegadas",
    },
    comentario: {
      resolucao: "ERRADO. O diagnóstico fisioterapêutico e a prescrição das condutas integram o núcleo privativo e indelegável do fisioterapeuta. O que pode ser executado por outros, sob supervisão, é a aplicação de procedimentos já prescritos — jamais a decisão sobre o que prescrever. Delegar o ato decisório configura infração ética e transfere responsabilidade que a norma não admite transferir.",
      fundamento: "Item 16.2.4, tópico 10 — ética profissional.",
      macete: "Executar se delega; decidir, não.",
      erroComum: "Tratar supervisão como equivalente a autorização para delegar o ato privativo.",
      comoBancaPensa: "Troca de sujeito com salvaguarda aparente — a expressão 'sob supervisão' é o que faz o item parecer aceitável."
    }
  },

];

QUESTOES.push(...QUESTOES_SESAUAL_LOTE76);
