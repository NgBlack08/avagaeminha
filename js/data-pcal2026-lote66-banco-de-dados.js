/* =====================================================================
   QUESTLAB — Lote 66: BANCO DE DADOS
   Até aqui o banco tinha três itens de BD (TI-026 a TI-028, sobre DER
   e DML). Este lote transforma o assunto em bloco próprio, sem repetir
   aqueles recortes.

   Material de curso com 26 itens C/E da CEBRASPE serviu só de MAPA do
   que a banca cobra: dado x informação, estruturado x não estruturado
   x semiestruturado, os Vs do Big Data, data lake e ETL/ELT, data
   warehouse x OLTP, relacionamento N:N e tabela associativa,
   integridade referencial e registros órfãos, DML sem WHERE, view,
   SELECT dentro da DML (e não da DDL), LIMIT/OFFSET, comparação com
   NULL, INSERT x UPDATE e exclusão em cascata.

   Nenhum enunciado foi copiado. Cada item foi redigido do zero e
   ancorado em comportamento real de SGBD relacional e no padrão SQL,
   expandindo os recortes para o que costuma vir junto: formas normais
   (1FN, 2FN e 3FN), chave primária x UNIQUE quanto a nulos, ações
   referenciais (CASCADE, RESTRICT, SET NULL), as quatro sublinguagens
   (DDL, DML, DCL e TCL), TRUNCATE x DELETE x DROP, WHERE x HAVING,
   COUNT(*) x COUNT(coluna), tipos de junção, índices e seu custo de
   escrita, propriedades ACID, famílias NoSQL e injeção de SQL com
   consultas parametrizadas.

   Seis itens são CONTRAEXEMPLOS deliberados (TI-205, 209, 213, 215,
   219 e 226): restrições, exigências, absolutos e números que parecem
   armadilha e são verdadeiros — para quebrar o reflexo de marcar
   ERRADO diante de "somente", "todas" e valores exatos.

   48 itens: 22 CERTO / 26 ERRADO. Dificuldade 3 em 40, 2 em 8.
   ===================================================================== */

const QUESTOES_PCAL_LOTE66 = [

  /* ===== DADO, INFORMAÇÃO E TIPOLOGIA ===== */
  {
    id: "TI-187", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Dado e informação",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.79,
    enunciado: "Em processamento de dados, o dado constitui a matéria-prima bruta, ao passo que a informação resulta da organização e do tratamento desses dados de modo a lhes conferir significado para quem os recebe.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "matéria-prima bruta ... organização e tratamento ... significado",
    cognitivo: {
      motivo: "Cobrar a distinção conceitual que abre praticamente todo edital de banco de dados.",
      palavraCritica: "resulta da organização e do tratamento",
    },
    comentario: {
      resolucao: "CERTO. O dado é o registro isolado, sem contexto — '38', 'AL', '12/07'. A informação nasce quando esses registros são organizados, relacionados e contextualizados, permitindo interpretação. Adiante na mesma cadeia costumam ser citados o conhecimento (informação aplicada) e a sabedoria, na chamada pirâmide DIKW.",
      fundamento: "Conceitos fundamentais de processamento de dados e da pirâmide dado-informação-conhecimento.",
      macete: "Dado é matéria-prima; informação é o produto com significado.",
      erroComum: "Usar dado e informação como sinônimos.",
      comoBancaPensa: "Item 'limpo' de conceituação, usado para abrir o bloco de banco de dados."
    }
  },
  {
    id: "TI-188", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Dados estruturados e não estruturados",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.83,
    enunciado: "Por não observarem formato predefinido, os dados não estruturados são mais simples de manipular e de consultar do que os dados estruturados, o que dispensa recursos especializados de processamento.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "mais simples de manipular ... dispensa recursos especializados",
    cognitivo: {
      motivo: "Cobrar a consequência prática da ausência de esquema, que é o oposto de simplicidade.",
      palavraCritica: "mais simples de manipular",
    },
    comentario: {
      resolucao: "ERRADO. A ausência de formato predefinido dificulta o tratamento: sem esquema não há colunas, tipos nem chaves sobre as quais consultar diretamente. Extrair valor de vídeo, áudio, imagem ou texto livre exige justamente recursos especializados — indexação de texto, visão computacional, processamento de linguagem natural. O dado estruturado é o mais simples de manipular, precisamente por já vir organizado.",
      fundamento: "Conceitos de dados estruturados, semiestruturados e não estruturados.",
      macete: "Sem esquema não é mais fácil: é mais trabalhoso. Estruturado é que é simples.",
      erroComum: "Ler 'sem regras' como 'sem dificuldade'.",
      comoBancaPensa: "Converte a ausência de estrutura em facilidade de uso, inversão que soa intuitiva."
    }
  },
  {
    id: "TI-189", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Dados estruturados e não estruturados",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "Dados estruturados obedecem a esquema rígido definido antes da carga, com campos e tipos determinados, enquanto dados não estruturados não se sujeitam a modelo prévio, sendo típicos os textos livres, as imagens, os áudios e os vídeos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "esquema rígido definido antes da carga ... textos livres, imagens, áudios e vídeos",
    cognitivo: {
      motivo: "Cobrar a definição das duas pontas da tipologia de dados.",
      palavraCritica: "esquema rígido definido antes da carga",
    },
    comentario: {
      resolucao: "CERTO. O dado estruturado é o da tabela relacional: schema-on-write, com esquema imposto no momento da gravação. O não estruturado não tem modelo prévio e só ganha organização quando processado. Entre os dois está o semiestruturado — JSON, XML, HTML —, que carrega marcações de organização sem esquema rígido de tabela.",
      fundamento: "Tipologia de dados aplicada a bancos de dados e a arquiteturas analíticas.",
      macete: "Estruturado: tabela. Semiestruturado: JSON/XML. Não estruturado: vídeo, imagem, texto livre.",
      erroComum: "Ignorar a categoria intermediária e trabalhar só com dois grupos.",
      comoBancaPensa: "Item correto que serve de âncora para a pegadinha do semiestruturado."
    }
  },
  {
    id: "TI-190", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Dados semiestruturados",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.78,
    enunciado: "Documentos em HTML e em XML classificam-se como dados estruturados, dado que suas marcações definem rigidamente o esquema do conteúdo, de modo equivalente ao que ocorre com as tabelas de um banco de dados relacional.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "HTML e XML ... dados estruturados ... equivalente ... tabelas",
    cognitivo: {
      motivo: "Cobrar a categoria do dado semiestruturado, que a banca costuma dissolver nas outras duas.",
      palavraCritica: "definem rigidamente o esquema ... de modo equivalente",
    },
    comentario: {
      resolucao: "ERRADO. HTML, XML e JSON são semiestruturados: possuem marcações que organizam o conteúdo, mas não impõem esquema rígido — dois documentos do mesmo tipo podem ter campos diferentes, campos ausentes ou aninhamento variável, o que uma tabela relacional não admite. As tags descrevem, não restringem como um DDL restringe.",
      fundamento: "Tipologia de dados — categoria semiestruturada (XML, JSON, HTML).",
      macete: "Tem marcação mas não tem esquema fixo? Semiestruturado.",
      erroComum: "Concluir que a presença de tags equivale a estrutura de tabela.",
      comoBancaPensa: "Usa um argumento verdadeiro em parte (as marcações organizam) para forçar classificação errada."
    }
  },
  {
    id: "TI-191", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Dados não estruturados",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.74,
    enunciado: "Em arquiteturas de Big Data, os dados não estruturados não admitem indexação nem consulta direta, sendo obrigatória sua conversão prévia em dados estruturados para que qualquer análise possa ser realizada.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "não admitem indexação nem consulta direta ... obrigatória sua conversão prévia",
    cognitivo: {
      motivo: "Cobrar a existência de análise direta sobre dados brutos, base do modelo de data lake.",
      palavraCritica: "obrigatória sua conversão prévia",
    },
    comentario: {
      resolucao: "ERRADO. Dados não estruturados são indexados e consultados diretamente com frequência: mecanismos de busca textual indexam documentos, ferramentas processam logs brutos, modelos analisam imagem e áudio sem passagem por tabela. É exatamente essa possibilidade que sustenta o data lake e o schema-on-read — a estrutura é aplicada no momento da leitura, não como pré-requisito de armazenamento.",
      fundamento: "Arquiteturas de Big Data — schema-on-read e análise sobre dados brutos.",
      macete: "Data lake existe justamente para analisar sem converter antes.",
      erroComum: "Supor que toda análise passa obrigatoriamente por um modelo relacional.",
      comoBancaPensa: "Fecha a afirmação com 'obrigatória' e 'qualquer análise', criando uma regra que a arquitetura moderna desmente."
    }
  },
  {
    id: "TI-192", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Big Data",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Big Data consiste unicamente no armazenamento de grandes volumes de dados estruturados em bancos de dados relacionais, mantendo-se fora do conceito os dados não estruturados e semiestruturados.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "unicamente ... dados estruturados em bancos de dados relacionais",
    cognitivo: {
      motivo: "Cobrar a variedade como elemento definidor do conceito.",
      palavraCritica: "unicamente ... fora do conceito",
    },
    comentario: {
      resolucao: "ERRADO. A variedade é justamente um dos Vs característicos: Big Data abrange dados estruturados, semiestruturados e não estruturados, e é comum que os dois últimos predominem. Além disso, o armazenamento tipicamente não se dá em banco relacional, mas em sistemas distribuídos e soluções NoSQL, próprios para escalar horizontalmente.",
      fundamento: "Conceito de Big Data e seus Vs (volume, velocidade, variedade, veracidade e valor).",
      macete: "Big Data sem variedade não é Big Data. E raramente é relacional.",
      erroComum: "Reduzir Big Data a 'banco de dados muito grande'.",
      comoBancaPensa: "Restringe o conceito a uma só das dimensões e exclui expressamente as demais."
    }
  },
  {
    id: "TI-193", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Big Data",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.82,
    enunciado: "Entre os Vs comumente associados ao Big Data, a variedade designa a convivência de diferentes tipos de dados — estruturados, semiestruturados e não estruturados — em um mesmo ambiente analítico.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "variedade ... diferentes tipos de dados",
    cognitivo: {
      motivo: "Cobrar o significado de cada V, com foco no mais cobrado deles.",
      palavraCritica: "estruturados, semiestruturados e não estruturados",
    },
    comentario: {
      resolucao: "CERTO. Volume é a quantidade; velocidade é o ritmo de geração e de processamento, muitas vezes em tempo real; variedade é a diversidade de formatos e fontes; veracidade é a confiabilidade do dado; valor é o retorno extraído da análise. A variedade é a que mais aparece em prova, por ser a que quebra o modelo puramente relacional.",
      fundamento: "Caracterização do Big Data pelos Vs.",
      macete: "Volume, velocidade, variedade, veracidade, valor. Variedade = formatos diferentes.",
      erroComum: "Confundir variedade com volume.",
      comoBancaPensa: "Item 'limpo' de definição, cobrado quase sempre no mesmo formato."
    }
  },

  /* ===== DATA LAKE, DATA WAREHOUSE E ETL ===== */
  {
    id: "TI-194", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Data lake",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.76,
    enunciado: "O data lake armazena dados brutos, de origens diversas, em seu formato original, sem a imposição prévia do esquema rígido característico do banco de dados relacional, o que favorece abordagens em que a transformação ocorre após a carga.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dados brutos ... formato original ... transformação ocorre após a carga",
    cognitivo: {
      motivo: "Cobrar o conceito de data lake e sua relação com o modelo ELT.",
      palavraCritica: "sem a imposição prévia do esquema rígido",
    },
    comentario: {
      resolucao: "CERTO. O data lake adota schema-on-read: guarda-se primeiro, no formato em que o dado chegou, e a estrutura é aplicada quando alguém o consulta. Daí a preferência pelo ELT (extract, load, transform) em vez do ETL clássico — carrega-se o dado bruto e transforma-se depois, conforme a necessidade de cada análise. O risco conhecido é o data swamp: lago sem catalogação vira depósito inutilizável.",
      fundamento: "Arquiteturas analíticas — data lake, schema-on-read e ELT.",
      macete: "Lake: joga bruto e estrutura na leitura. Warehouse: estrutura antes de guardar.",
      erroComum: "Tratar data lake como sinônimo de data warehouse.",
      comoBancaPensa: "Item correto e completo, âncora para a inversão que costuma vir logo em seguida."
    }
  },
  {
    id: "TI-195", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Data lake e data warehouse",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.72,
    enunciado: "O data warehouse caracteriza-se por receber os dados em formato bruto, sem modelagem prévia, ao passo que o data lake somente admite dados já transformados e organizados segundo esquema dimensional definido antes da carga.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "data warehouse ... formato bruto ... data lake ... esquema dimensional definido antes",
    cognitivo: {
      motivo: "Cobrar os dois repositórios analíticos pela inversão completa.",
      palavraCritica: "data warehouse ... sem modelagem prévia",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. O data warehouse é o repositório modelado: os dados passam por ETL e chegam já limpos, integrados e organizados em esquema dimensional (estrela ou floco de neve), voltado a consulta analítica. O data lake é o que recebe o dado bruto, sem modelagem prévia. As arquiteturas mais recentes combinam os dois no chamado lakehouse.",
      fundamento: "Arquiteturas analíticas — data warehouse (schema-on-write) x data lake (schema-on-read).",
      macete: "Warehouse é armazém arrumado. Lake é lago: entra do jeito que vem.",
      erroComum: "Saber os dois nomes e não fixar qual exige modelagem antecipada.",
      comoBancaPensa: "Inverte dois repositórios sempre citados em par, descrevendo cada um corretamente no rótulo errado."
    }
  },
  {
    id: "TI-196", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "ETL e ELT",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.68,
    enunciado: "No processo de ETL, a padronização de formatos, a limpeza de inconsistências e a decomposição de campos com múltiplas ocorrências em registros distintos são atividades próprias da etapa de transformação.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "padronização ... limpeza ... decomposição de campos com múltiplas ocorrências ... etapa de transformação",
    cognitivo: {
      motivo: "Cobrar o conteúdo da etapa intermediária do ETL, frequentemente confundida com a carga.",
      palavraCritica: "decomposição de campos com múltiplas ocorrências",
    },
    comentario: {
      resolucao: "CERTO. A extração recolhe o dado das fontes; a carga o deposita no destino; entre as duas, a transformação faz o trabalho pesado — converter tipos, uniformizar unidades e codificações, remover duplicatas, tratar valores ausentes, agregar e normalizar. Desmembrar uma linha com campo multivalorado em várias linhas é exatamente normalização, e ocorre nessa etapa.",
      fundamento: "Processo de ETL (extract, transform, load) — escopo da etapa de transformação.",
      macete: "Extrair pega, transformar arruma, carregar entrega.",
      erroComum: "Situar a limpeza dos dados na etapa de carga.",
      comoBancaPensa: "Descreve corretamente atividades da etapa e cobra apenas que o candidato saiba onde elas ocorrem."
    }
  },
  {
    id: "TI-197", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "OLTP e OLAP",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.7,
    enunciado: "O data warehouse é orientado à transação, sendo otimizado para inserções e atualizações frequentes de pequeno volume, características que o tornam adequado ao processamento operacional do dia a dia.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "data warehouse ... orientado à transação ... processamento operacional",
    cognitivo: {
      motivo: "Cobrar a oposição entre ambiente transacional (OLTP) e ambiente analítico (OLAP).",
      palavraCritica: "orientado à transação",
    },
    comentario: {
      resolucao: "ERRADO. O data warehouse é orientado ao ASSUNTO e voltado à análise (OLAP): recebe cargas periódicas em grande volume, é não volátil, integrado e histórico, e se otimiza para consultas complexas que varrem muitos registros. Quem é orientado à transação é o sistema OLTP, com escritas curtas e frequentes. A descrição do item pertence a este último.",
      fundamento: "Características do data warehouse (Inmon) e distinção OLTP x OLAP.",
      macete: "OLTP registra o dia a dia. OLAP analisa o histórico.",
      erroComum: "Supor que todo banco de dados grande é transacional.",
      comoBancaPensa: "Descreve corretamente o OLTP e cola nele o rótulo do data warehouse."
    }
  },

  /* ===== MODELAGEM E NORMALIZAÇÃO ===== */
  {
    id: "TI-198", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Relacionamentos e cardinalidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.81,
    enunciado: "O relacionamento de cardinalidade N:N identificado entre duas entidades no modelo lógico exige, na implementação relacional, a criação de uma terceira tabela, que armazena as chaves estrangeiras correspondentes às chaves primárias das duas tabelas originais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "N:N ... criação de uma terceira tabela ... chaves estrangeiras",
    cognitivo: {
      motivo: "Cobrar a resolução do relacionamento muitos-para-muitos, item de alta recorrência.",
      palavraCritica: "criação de uma terceira tabela",
    },
    comentario: {
      resolucao: "CERTO. O modelo relacional não representa N:N diretamente: seria necessário armazenar múltiplos valores em um mesmo campo, o que viola a primeira forma normal. A solução é a tabela associativa (ou tabela de junção), cuja chave primária costuma ser a combinação das duas chaves estrangeiras — e que ainda pode receber atributos próprios do relacionamento, como data e quantidade.",
      fundamento: "Mapeamento do modelo entidade-relacionamento para o modelo relacional.",
      macete: "N:N vira três tabelas. Sempre.",
      erroComum: "Tentar resolver N:N com uma única chave estrangeira em um dos lados.",
      comoBancaPensa: "Item correto que cobra a regra de mapeamento, e não a definição de cardinalidade."
    }
  },
  {
    id: "TI-199", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Relacionamentos e cardinalidade",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.7,
    enunciado: "O relacionamento de cardinalidade 1:N entre duas tabelas exige a criação de tabela associativa, ao passo que o relacionamento N:N é implementado mediante simples inclusão de uma chave estrangeira em uma das tabelas envolvidas.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "1:N exige tabela associativa ... N:N ... simples inclusão de uma chave estrangeira",
    cognitivo: {
      motivo: "Cobrar as duas regras de mapeamento pela troca das cardinalidades.",
      palavraCritica: "1:N exige a criação de tabela associativa",
    },
    comentario: {
      resolucao: "ERRADO. As cardinalidades estão trocadas. O 1:N resolve-se com chave estrangeira no lado N — nenhuma tabela adicional é necessária. Quem exige tabela associativa é o N:N. Vale lembrar que o 1:1 admite chave estrangeira em qualquer dos lados, ou até a fusão das duas tabelas.",
      fundamento: "Regras de mapeamento entre modelo ER e modelo relacional.",
      macete: "1:N = FK no lado do N. N:N = tabela no meio. 1:1 = FK em qualquer lado.",
      erroComum: "Decorar que 'existe tabela associativa' sem fixar em qual cardinalidade.",
      comoBancaPensa: "Permuta as duas cardinalidades, mantendo corretas as descrições isoladas de cada solução."
    }
  },
  {
    id: "TI-200", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Normalização",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.66,
    enunciado: "A primeira forma normal exige que todos os atributos sejam atômicos, vedando campos multivalorados e grupos repetitivos, requisito que antecede a análise das dependências funcionais tratadas nas formas normais seguintes.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "atributos ... atômicos ... vedando campos multivalorados e grupos repetitivos",
    cognitivo: {
      motivo: "Cobrar o conteúdo da 1FN e sua posição como pré-requisito das demais.",
      palavraCritica: "antecede a análise das dependências funcionais",
    },
    comentario: {
      resolucao: "CERTO. A 1FN trata da estrutura do atributo: cada célula deve conter um único valor indivisível — nada de 'telefone1, telefone2' na mesma coluna nem de lista separada por vírgulas. Só depois de satisfeita é que faz sentido examinar dependências parciais (2FN) e transitivas (3FN), pois as formas normais são cumulativas.",
      fundamento: "Teoria da normalização — primeira forma normal e caráter cumulativo das formas normais.",
      macete: "1FN: uma célula, um valor. Sem ela, nem se discutem as outras.",
      erroComum: "Tratar as formas normais como independentes entre si.",
      comoBancaPensa: "Item correto que cobra tanto a definição quanto a ordem de aplicação."
    }
  },
  {
    id: "TI-201", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Normalização",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.62,
    enunciado: "A segunda forma normal elimina as dependências transitivas entre atributos não chave, ao passo que a terceira forma normal se ocupa das dependências parciais em relação a parte da chave primária composta.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "segunda forma normal ... transitivas ... terceira ... parciais",
    cognitivo: {
      motivo: "Cobrar a 2FN e a 3FN pela inversão de seus objetos.",
      palavraCritica: "segunda ... transitivas",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. A 2FN elimina dependências PARCIAIS — atributo que depende apenas de parte de uma chave primária composta. A 3FN elimina dependências TRANSITIVAS — atributo não chave que depende de outro atributo não chave. Mnemônico usual: '2 é parte da chave, 3 é atributo de atributo'.",
      fundamento: "Teoria da normalização — segunda e terceira formas normais.",
      macete: "2FN: parcial (parte da chave). 3FN: transitiva (via outro campo).",
      erroComum: "Trocar os nomes das dependências entre as duas formas.",
      comoBancaPensa: "Inverte dois conceitos vizinhos cujas definições o candidato reconhece, mas não sabe ordenar."
    }
  },

  /* ===== CHAVES E INTEGRIDADE ===== */
  {
    id: "TI-202", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Integridade referencial",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.87,
    enunciado: "A integridade referencial assegura que todo valor lançado em coluna definida como chave estrangeira corresponda a um valor existente na chave referenciada da outra tabela, o que impede a permanência de registros órfãos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "chave estrangeira corresponda a um valor existente ... registros órfãos",
    cognitivo: {
      motivo: "Cobrar a definição e o efeito prático da restrição referencial.",
      palavraCritica: "impede a permanência de registros órfãos",
    },
    comentario: {
      resolucao: "CERTO. A restrição atua nos dois sentidos: barra a inserção de filho sem pai correspondente e controla a exclusão ou a alteração do pai que tenha filhos. Registro órfão é justamente o filho cujo pai não existe — inconsistência que a integridade referencial existe para evitar. A restrição admite valor nulo na chave estrangeira, quando o relacionamento é opcional.",
      fundamento: "Modelo relacional — restrição de integridade referencial (FOREIGN KEY).",
      macete: "FK só aceita o que existe do outro lado. Sem pai, não há filho.",
      erroComum: "Achar que a restrição só atua no momento da inserção.",
      comoBancaPensa: "Item 'limpo' que a banca repete quase sem variação de enunciado."
    }
  },
  {
    id: "TI-203", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Chave estrangeira",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.6,
    enunciado: "A chave estrangeira deve necessariamente referenciar chave primária situada em tabela diversa daquela em que foi definida, sendo vedado, no modelo relacional, que uma tabela referencie a si própria.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "necessariamente ... tabela diversa ... vedado ... referencie a si própria",
    cognitivo: {
      motivo: "Cobrar a possibilidade de autorrelacionamento, que a suposta vedação nega.",
      palavraCritica: "vedado ... referencie a si própria",
    },
    comentario: {
      resolucao: "ERRADO. O autorrelacionamento é plenamente admitido e corriqueiro: a tabela de servidores com a coluna id_chefe apontando para a própria tabela, ou a de categorias com id_categoria_pai formando hierarquia. A chave estrangeira pode referenciar a mesma tabela — e, no padrão SQL, pode referenciar não só a chave primária, mas também coluna com restrição de unicidade.",
      fundamento: "Modelo relacional — autorrelacionamento e definição de FOREIGN KEY.",
      macete: "Tabela pode apontar para ela mesma: chefe, categoria pai, processo apensado.",
      erroComum: "Ler 'estrangeira' como necessariamente 'de outra tabela'.",
      comoBancaPensa: "Inventa uma vedação que soa coerente com o nome do próprio conceito."
    }
  },
  {
    id: "TI-204", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Chaves primária e única",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de restrição indevida)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.71,
    enunciado: "Somente a chave primária impede, a um só tempo, a duplicidade e a ausência de valor na coluna, uma vez que a restrição de unicidade, embora vede valores repetidos, admite a existência de valor nulo.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "Somente a chave primária ... unicidade ... admite a existência de valor nulo",
    cognitivo: {
      motivo: "Contraexemplo: um 'somente' verdadeiro que separa PRIMARY KEY de UNIQUE.",
      palavraCritica: "Somente a chave primária",
    },
    comentario: {
      resolucao: "CERTO. A restrição procede. PRIMARY KEY equivale a UNIQUE somado a NOT NULL: não admite repetição nem nulo. A restrição UNIQUE isolada barra apenas a repetição de valores efetivos e aceita nulo — em vários SGBDs, inclusive mais de um, já que nulos não são considerados iguais entre si. Por isso a chave primária é a única que garante identificação unívoca de toda linha.",
      fundamento: "Padrão SQL — restrições PRIMARY KEY, UNIQUE e NOT NULL.",
      macete: "PK = UNIQUE + NOT NULL. UNIQUE sozinha aceita nulo.",
      erroComum: "Marcar ERRADO por reflexo diante do 'somente', ou igualar PK e UNIQUE.",
      comoBancaPensa: "Veste de armadilha uma exclusividade que existe de fato no padrão SQL."
    }
  },
  {
    id: "TI-205", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Chaves primária e única",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.67,
    enunciado: "A coluna definida como chave primária admite valores nulos, desde que não se repitam, ao passo que a coluna submetida à restrição de unicidade não tolera valor nulo em hipótese alguma.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "chave primária admite valores nulos ... unicidade não tolera valor nulo",
    cognitivo: {
      motivo: "Cobrar a mesma distinção pela inversão do comportamento diante de nulos.",
      palavraCritica: "chave primária admite valores nulos",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. A chave primária jamais admite nulo — ela identifica a linha, e nulo significa ausência de valor, o que impossibilitaria a identificação. A restrição UNIQUE, ao contrário, tolera nulo. Além disso, 'não se repitam' é contraditório com nulos, que sequer se comparam por igualdade no SQL padrão.",
      fundamento: "Padrão SQL — comportamento de PRIMARY KEY e UNIQUE quanto a valores nulos.",
      macete: "PK nunca é nula. UNIQUE pode ser.",
      erroComum: "Achar que ambas as restrições tratam nulos do mesmo modo.",
      comoBancaPensa: "Permuta o comportamento de duas restrições que o candidato costuma agrupar como equivalentes."
    }
  },
  {
    id: "TI-206", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Restrições de integridade",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.73,
    enunciado: "Restrições de integridade como a chave estrangeira podem ser suprimidas do projeto do banco de dados como técnica corrente de otimização, sem prejuízo à consistência das informações armazenadas.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "podem ser suprimidas ... sem prejuízo à consistência",
    cognitivo: {
      motivo: "Cobrar que a integridade não é item opcional negociável por desempenho.",
      palavraCritica: "sem prejuízo à consistência",
    },
    comentario: {
      resolucao: "ERRADO. Remover a chave estrangeira transfere ao código da aplicação a responsabilidade de garantir a consistência — e basta um caminho de escrita que ignore essa verificação para surgirem registros órfãos. Há, é verdade, cenários específicos em que restrições são desabilitadas de forma temporária e controlada, como cargas em massa, mas isso não autoriza suprimi-las 'sem prejuízo à consistência'.",
      fundamento: "Modelo relacional — função das restrições de integridade e implicações de sua supressão.",
      macete: "Tirar FK não acelera de graça: paga-se em dado inconsistente.",
      erroComum: "Aceitar desempenho como justificativa geral para abrir mão de integridade.",
      comoBancaPensa: "Apresenta uma prática pontual e excepcional como técnica corrente e inofensiva."
    }
  },
  {
    id: "TI-207", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Exclusão em cascata",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.76,
    enunciado: "A execução do comando DELETE sobre um registro da tabela pai remove automaticamente todos os registros a ele vinculados nas tabelas filhas, independentemente do modo como a chave estrangeira tenha sido definida.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "remove automaticamente todos os registros ... independentemente do modo como a chave estrangeira tenha sido definida",
    cognitivo: {
      motivo: "Cobrar a dependência da cascata em relação à declaração da restrição.",
      palavraCritica: "independentemente do modo como a chave estrangeira tenha sido definida",
    },
    comentario: {
      resolucao: "ERRADO. O comportamento depende da ação referencial declarada. Sem ON DELETE CASCADE, o padrão é impedir a exclusão do pai que possua filhos — o comando falha com violação de integridade. A propagação só ocorre se expressamente configurada. Há ainda outras opções, como SET NULL e SET DEFAULT.",
      fundamento: "Padrão SQL — ações referenciais ON DELETE (NO ACTION, RESTRICT, CASCADE, SET NULL, SET DEFAULT).",
      macete: "Cascata não é automática: é declarada.",
      erroComum: "Presumir que todo relacionamento apaga em cadeia.",
      comoBancaPensa: "Transforma um comportamento configurável em regra geral, reforçado por 'independentemente'."
    }
  },
  {
    id: "TI-208", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Exclusão em cascata",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de exigência inexistente)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.64,
    enunciado: "A propagação da exclusão do registro pai aos registros filhos somente ocorre se a ação referencial correspondente houver sido expressamente declarada na definição da chave estrangeira, admitindo o padrão SQL, entre outras alternativas, a atribuição de valor nulo à coluna referenciadora.",
    gabarito: "C", pegadinha: "exigencia-inexistente", palavraChave: "somente ocorre se ... expressamente declarada ... atribuição de valor nulo",
    cognitivo: {
      motivo: "Contraexemplo: uma exigência formal que parece invenção de banca e é exatamente o que o padrão prevê.",
      palavraCritica: "somente ... expressamente declarada",
    },
    comentario: {
      resolucao: "CERTO. A exigência é real. A cascata precisa constar da definição da restrição — ON DELETE CASCADE —, e o padrão oferece ainda NO ACTION e RESTRICT (barram a exclusão), SET NULL (anula a coluna referenciadora) e SET DEFAULT. Sem declaração, prevalece o comportamento restritivo. O 'somente' aqui não é exagero: descreve a regra.",
      fundamento: "Padrão SQL — cláusula de ação referencial na definição de FOREIGN KEY.",
      macete: "Quer cascata? Declare. O silêncio significa 'não apaga'.",
      erroComum: "Marcar ERRADO por causa do 'somente', sem examinar se a exigência procede.",
      comoBancaPensa: "Usa linguagem de exigência absoluta em enunciado que reproduz fielmente o padrão."
    }
  },

  /* ===== SUBLINGUAGENS SQL ===== */
  {
    id: "TI-209", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem SQL", subassunto: "Sublinguagens (DDL, DML, DCL e TCL)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.84,
    enunciado: "Na linguagem SQL, os comandos CREATE, ALTER e DROP integram a DDL, por atuarem sobre a estrutura dos objetos do banco, ao passo que GRANT e REVOKE integram a DCL, por disciplinarem privilégios de acesso.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "CREATE, ALTER e DROP ... DDL ... GRANT e REVOKE ... DCL",
    cognitivo: {
      motivo: "Contraexemplo: duas sublinguagens que a banca costuma permutar, aqui atribuídas corretamente.",
      palavraCritica: "GRANT e REVOKE integram a DCL",
    },
    comentario: {
      resolucao: "CERTO. A divisão usual é: DDL define estrutura (CREATE, ALTER, DROP, TRUNCATE); DML manipula dados (SELECT, INSERT, UPDATE, DELETE); DCL controla permissões (GRANT, REVOKE); TCL controla transações (COMMIT, ROLLBACK, SAVEPOINT). Guardar essa tabela resolve boa parte dos itens de SQL em prova de nível médio e superior.",
      fundamento: "Padrão SQL — classificação dos comandos em DDL, DML, DCL e TCL.",
      macete: "DDL estrutura, DML dados, DCL permissão, TCL transação.",
      erroComum: "Situar GRANT e REVOKE na DDL, por também não manipularem dados.",
      comoBancaPensa: "Item 'limpo' de classificação, âncora para as trocas que virão em outros itens."
    }
  },
  {
    id: "TI-210", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem SQL", subassunto: "Sublinguagens (DDL, DML, DCL e TCL)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "O comando SELECT integra a DDL, uma vez que lhe cabe definir a estrutura lógica dos dados que serão apresentados ao usuário como resultado da consulta.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "SELECT integra a DDL ... definir a estrutura lógica",
    cognitivo: {
      motivo: "Cobrar a classificação do SELECT, atacada por uma justificativa aparentemente lógica.",
      palavraCritica: "definir a estrutura lógica dos dados",
    },
    comentario: {
      resolucao: "ERRADO. O SELECT pertence à DML — é comando de consulta e manipulação de dados, não de definição de estrutura. A justificativa do item explora a ambiguidade da palavra 'definir': o SELECT determina o formato do resultado exibido, mas não cria nem altera objeto algum do banco. Quem define estrutura é CREATE, ALTER e DROP.",
      fundamento: "Padrão SQL — SELECT como comando da DML.",
      macete: "SELECT lê dado. Quem mexe em estrutura é CREATE/ALTER/DROP.",
      erroComum: "Aceitar a justificativa pela aparência de raciocínio técnico.",
      comoBancaPensa: "Acopla à afirmação falsa uma explicação plausível, o que a torna mais difícil de descartar."
    }
  },
  {
    id: "TI-211", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem SQL", subassunto: "Comandos de manipulação (DML)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.77,
    enunciado: "O comando INSERT INTO destina-se à alteração de valores de registros já existentes na tabela, ao passo que a inclusão de novas linhas é realizada pelo comando UPDATE.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "INSERT INTO ... alteração de valores ... UPDATE ... inclusão de novas linhas",
    cognitivo: {
      motivo: "Cobrar a função dos dois comandos pela troca direta.",
      palavraCritica: "INSERT INTO ... alteração",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido: o INSERT acrescenta linhas novas; o UPDATE altera valores de linhas existentes. Os próprios verbos em inglês entregam a resposta — inserir e atualizar. Vale registrar que o padrão prevê ainda o MERGE, que insere ou atualiza conforme a linha exista ou não.",
      fundamento: "Padrão SQL — comandos INSERT e UPDATE.",
      macete: "INSERT põe linha nova. UPDATE mexe na que já está lá.",
      erroComum: "Ler rápido e não conferir a atribuição de cada verbo.",
      comoBancaPensa: "Troca dois comandos elementares, apostando na leitura automática em item aparentemente fácil."
    }
  },
  {
    id: "TI-212", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem SQL", subassunto: "Comandos de manipulação (DML)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.82,
    enunciado: "A execução de UPDATE ou de DELETE sem a cláusula WHERE alcança todas as linhas da tabela, razão pela qual tais comandos, executados por engano nessas condições, comprometem a consistência lógica dos dados.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "sem a cláusula WHERE alcança todas as linhas",
    cognitivo: {
      motivo: "Contraexemplo: um absoluto ('todas as linhas') que é exatamente o comportamento do SGBD.",
      palavraCritica: "alcança todas as linhas da tabela",
    },
    comentario: {
      resolucao: "CERTO. A cláusula WHERE é o filtro; sem ela, o predicado é verdadeiro para toda linha e a operação atinge a tabela inteira. É o clássico incidente de produção — um DELETE sem WHERE apaga tudo. Daí práticas como testar antes com SELECT usando o mesmo filtro e operar dentro de transação, para permitir ROLLBACK.",
      fundamento: "Padrão SQL — efeito da ausência da cláusula WHERE em UPDATE e DELETE.",
      macete: "Sem WHERE, é tudo. Teste com SELECT antes.",
      erroComum: "Marcar ERRADO por reflexo diante de 'todas as linhas'.",
      comoBancaPensa: "Usa quantificador universal em item verdadeiro, punindo quem responde por formato."
    }
  },
  {
    id: "TI-213", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem SQL", subassunto: "TRUNCATE, DELETE e DROP",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.69,
    enunciado: "O comando DELETE remove linhas segundo o filtro informado e preserva a estrutura da tabela, ao passo que o comando TRUNCATE, por integrar a DML, admite cláusula WHERE para restringir as linhas a serem eliminadas.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "TRUNCATE, por integrar a DML, admite cláusula WHERE",
    cognitivo: {
      motivo: "Cobrar a natureza do TRUNCATE após uma primeira cláusula verdadeira sobre o DELETE.",
      palavraCritica: "admite cláusula WHERE",
    },
    comentario: {
      resolucao: "ERRADO. A primeira parte está correta. A segunda, não: o TRUNCATE é comando de DDL, esvazia a tabela por inteiro e não aceita WHERE. Como opera na estrutura, costuma ser bem mais rápido que o DELETE, não registra linha a linha no log da mesma forma, em regra não dispara gatilhos de linha e, em vários SGBDs, reinicia contadores de autoincremento.",
      fundamento: "Padrão SQL e implementações — DELETE (DML) x TRUNCATE (DDL).",
      macete: "DELETE filtra e é DML. TRUNCATE zera tudo e é DDL. DROP elimina a tabela.",
      erroComum: "Validar o item inteiro por conta da primeira metade correta.",
      comoBancaPensa: "Abre com afirmação verdadeira para reduzir a vigilância antes da cláusula falsa."
    }
  },
  {
    id: "TI-214", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem SQL", subassunto: "TRUNCATE, DELETE e DROP",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.66,
    enunciado: "O comando DROP TABLE elimina a tabela e sua definição do dicionário de dados, o comando TRUNCATE remove todas as linhas mantendo a estrutura, e o comando DELETE remove linhas conforme o filtro aplicado, também preservando a estrutura da tabela.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "DROP ... elimina a tabela ... TRUNCATE ... mantendo a estrutura ... DELETE ... conforme o filtro",
    cognitivo: {
      motivo: "Contraexemplo: três cláusulas encadeadas, todas verdadeiras, no formato em que a banca costuma esconder uma falsa.",
      palavraCritica: "também preservando a estrutura",
    },
    comentario: {
      resolucao: "CERTO. As três descrições procedem e a gradação é a esperada: o DELETE é o mais seletivo, o TRUNCATE esvazia sem destruir o objeto, e o DROP elimina o objeto e sua definição. Enunciados com três cláusulas encadeadas costumam esconder um erro na última — aqui, não há. Responder pela forma, e não pelo conteúdo, leva ao erro.",
      fundamento: "Padrão SQL — comandos DELETE, TRUNCATE e DROP.",
      macete: "DELETE tira algumas linhas; TRUNCATE tira todas; DROP tira a tabela.",
      erroComum: "Desconfiar da terceira cláusula e marcar ERRADO sem apontar erro concreto.",
      comoBancaPensa: "Reproduz o formato da armadilha sem armá-la, separando quem confere de quem adivinha."
    }
  },
  {
    id: "TI-215", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem SQL", subassunto: "Controle de transações (TCL)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.63,
    enunciado: "Os comandos COMMIT e ROLLBACK integram a DCL, por conferirem ao administrador o poder de conceder ou de revogar a efetivação das alterações realizadas por outros usuários no banco de dados.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "COMMIT e ROLLBACK integram a DCL ... conceder ou revogar",
    cognitivo: {
      motivo: "Cobrar a separação entre controle de transações e controle de acesso.",
      palavraCritica: "integram a DCL",
    },
    comentario: {
      resolucao: "ERRADO. COMMIT, ROLLBACK e SAVEPOINT compõem a TCL, que controla transações: efetivar, desfazer e marcar ponto de retorno parcial. A DCL trata de privilégios, com GRANT e REVOKE. O item explora a semelhança superficial entre 'revogar privilégio' e 'desfazer alteração' — operações inteiramente distintas.",
      fundamento: "Padrão SQL — TCL (COMMIT, ROLLBACK, SAVEPOINT) e DCL (GRANT, REVOKE).",
      macete: "Transação: COMMIT/ROLLBACK. Permissão: GRANT/REVOKE.",
      erroComum: "Associar 'desfazer' a 'revogar' e trocar as sublinguagens.",
      comoBancaPensa: "Aproveita a proximidade semântica entre revogar e desfazer para deslocar os comandos de categoria."
    }
  },

  /* ===== CONSULTAS SQL ===== */
  {
    id: "TI-216", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem SQL", subassunto: "LIMIT e OFFSET",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de verdade seguida de falso)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.74,
    enunciado: "A execução do comando SELECT * FROM OCORRENCIA LIMIT 10 OFFSET 5 retorna, no máximo, cinco registros, contados a partir do sexto registro do conjunto de resultados.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "no máximo, cinco registros ... a partir do sexto registro",
    cognitivo: {
      motivo: "Cobrar a leitura das duas cláusulas, com erro plantado só na quantidade.",
      palavraCritica: "no máximo, cinco registros",
    },
    comentario: {
      resolucao: "ERRADO. O ponto de partida está certo: OFFSET 5 salta os cinco primeiros, de modo que a leitura começa no sexto. Mas a quantidade não: quem define o teto é o LIMIT, que é 10 — logo, retornam-se até dez registros, e não cinco. O item mistura os dois números para induzir o candidato a confirmar a metade correta.",
      fundamento: "Padrão SQL — cláusulas LIMIT (quantidade) e OFFSET (deslocamento inicial).",
      macete: "LIMIT diz quantos. OFFSET diz de onde. Não confunda os papéis.",
      erroComum: "Validar o item por acertar a parte do OFFSET.",
      comoBancaPensa: "Usa o número do OFFSET como se fosse o teto de linhas, aproveitando que a segunda metade está correta."
    }
  },
  {
    id: "TI-217", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem SQL", subassunto: "LIMIT e OFFSET",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca numérica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.65,
    enunciado: "A execução do comando SELECT * FROM OCORRENCIA LIMIT 10 OFFSET 5 retorna, no máximo, dez registros, iniciando-se a apresentação pelo sexto registro do conjunto de resultados.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "no máximo, dez registros ... pelo sexto registro",
    cognitivo: {
      motivo: "Contraexemplo: os mesmos números do item anterior, agora corretamente atribuídos.",
      palavraCritica: "dez registros ... sexto registro",
    },
    comentario: {
      resolucao: "CERTO. O LIMIT 10 fixa o teto de dez linhas e o OFFSET 5 descarta as cinco primeiras, iniciando no sexto registro. 'No máximo' é a formulação exata: se o conjunto tiver menos linhas após o deslocamento, retornam-se menos que dez. Vale a ressalva prática de que, sem ORDER BY, a ordem não é garantida — e a paginação deixa de ser confiável.",
      fundamento: "Padrão SQL — cláusulas LIMIT e OFFSET aplicadas a paginação.",
      macete: "OFFSET n começa em n+1. LIMIT é o teto de linhas.",
      erroComum: "Contar o OFFSET como se iniciasse no quinto registro.",
      comoBancaPensa: "Repete o mesmo comando com atribuição correta, separando quem sabe a sintaxe de quem chuta pelo padrão do enunciado anterior."
    }
  },
  {
    id: "TI-218", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem SQL", subassunto: "Comparação com NULL",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.79,
    enunciado: "Considerando que a coluna id_setor admita valor nulo, o comando SELECT nome FROM SERVIDOR WHERE id_setor = NULL retorna os nomes dos servidores que não possuam setor cadastrado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "WHERE id_setor = NULL",
    cognitivo: {
      motivo: "Cobrar a lógica ternária do SQL, em que nulo não se compara por igualdade.",
      palavraCritica: "= NULL",
    },
    comentario: {
      resolucao: "ERRADO. No SQL, nulo representa ausência de valor e não se compara por igualdade: a expressão 'id_setor = NULL' não resulta verdadeiro nem falso, mas desconhecido — e o WHERE só aprova linhas cujo predicado seja verdadeiro. A consulta, portanto, não retorna linha alguma. O correto é WHERE id_setor IS NULL.",
      fundamento: "Padrão SQL — lógica de três valores e operadores IS NULL / IS NOT NULL.",
      macete: "Com nulo nunca se usa '='. Sempre IS NULL ou IS NOT NULL.",
      erroComum: "Aplicar a nulos a mesma sintaxe usada para valores comuns.",
      comoBancaPensa: "Escreve consulta sintaticamente válida que devolve resultado vazio, e descreve o resultado pretendido, não o obtido."
    }
  },
  {
    id: "TI-219", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem SQL", subassunto: "Funções de agregação",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 90, probReaparecer: 0.68,
    enunciado: "As expressões COUNT(*) e COUNT(id_setor) produzem sempre resultados idênticos sobre a mesma tabela, porquanto as funções de agregação do SQL computam os valores nulos como ocorrências válidas.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "resultados idênticos ... computam os valores nulos como ocorrências válidas",
    cognitivo: {
      motivo: "Cobrar o tratamento dos nulos pelas funções de agregação.",
      palavraCritica: "computam os valores nulos como ocorrências válidas",
    },
    comentario: {
      resolucao: "ERRADO. As funções de agregação ignoram nulos — exceto COUNT(*), que conta linhas, e não valores. Logo, COUNT(*) devolve o total de linhas da tabela, ao passo que COUNT(id_setor) devolve apenas as linhas em que a coluna está preenchida. Os resultados só coincidem se não houver nulo algum na coluna. O mesmo raciocínio vale para AVG, SUM, MAX e MIN, que desprezam nulos ao calcular.",
      fundamento: "Padrão SQL — comportamento das funções de agregação diante de valores nulos.",
      macete: "COUNT(*) conta linhas. COUNT(coluna) conta valores preenchidos.",
      erroComum: "Supor que a média calculada por AVG divide pelo total de linhas.",
      comoBancaPensa: "Afirma equivalência entre duas expressões parecidas e sustenta-a com premissa falsa sobre nulos."
    }
  },
  {
    id: "TI-220", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem SQL", subassunto: "WHERE e HAVING",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.72,
    enunciado: "A cláusula HAVING filtra as linhas antes do agrupamento promovido pelo GROUP BY, enquanto a cláusula WHERE se aplica ao resultado já agregado, permitindo restringir grupos com base em funções como SUM e COUNT.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "HAVING ... antes do agrupamento ... WHERE ... resultado já agregado",
    cognitivo: {
      motivo: "Cobrar a ordem lógica de execução da consulta, invertendo as duas cláusulas de filtro.",
      palavraCritica: "HAVING ... antes do agrupamento",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. O WHERE atua antes do agrupamento, sobre as linhas individuais; o HAVING atua depois, sobre os grupos formados, e é o único dos dois que aceita funções de agregação no predicado. A ordem lógica é FROM, WHERE, GROUP BY, HAVING, SELECT e ORDER BY — daí, inclusive, a impossibilidade de usar no WHERE um apelido definido no SELECT.",
      fundamento: "Padrão SQL — ordem lógica de processamento das cláusulas da consulta.",
      macete: "WHERE filtra linha (antes). HAVING filtra grupo (depois).",
      erroComum: "Tentar usar COUNT ou SUM dentro da cláusula WHERE.",
      comoBancaPensa: "Permuta duas cláusulas de filtro, mantendo correta a descrição isolada de cada função."
    }
  },
  {
    id: "TI-221", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem SQL", subassunto: "WHERE e HAVING",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.67,
    enunciado: "Em consulta que agrupe registros por delegacia e apure a quantidade de ocorrências de cada uma, a restrição do resultado às delegacias com mais de cem ocorrências deve ser expressa na cláusula HAVING, e não na cláusula WHERE.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "restrição ... com mais de cem ocorrências ... na cláusula HAVING",
    cognitivo: {
      motivo: "Contraexemplo: WHERE e HAVING, par que a banca permuta, aqui aplicados corretamente a um caso concreto.",
      palavraCritica: "e não na cláusula WHERE",
    },
    comentario: {
      resolucao: "CERTO. O critério incide sobre um valor agregado — a contagem por grupo —, que só existe depois do GROUP BY. Como o WHERE é avaliado antes do agrupamento, ele não tem acesso a esse resultado; a restrição cabe ao HAVING. Nada impede, porém, combinar os dois na mesma consulta: WHERE para filtrar as linhas de origem e HAVING para filtrar os grupos formados.",
      fundamento: "Padrão SQL — emprego de HAVING para predicados sobre funções de agregação.",
      macete: "Critério sobre COUNT/SUM só cabe no HAVING.",
      erroComum: "Escrever WHERE COUNT(*) > 100, o que gera erro de sintaxe.",
      comoBancaPensa: "Converte a regra teórica em situação concreta, para separar quem entendeu de quem decorou."
    }
  },
  {
    id: "TI-222", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem SQL", subassunto: "Junções (JOIN)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.75,
    enunciado: "O INNER JOIN retorna todas as linhas da tabela indicada à esquerda, ainda que não haja correspondência na tabela da direita, ao passo que o LEFT JOIN se restringe às linhas com correspondência em ambas as tabelas.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "INNER JOIN retorna todas as linhas ... à esquerda ... LEFT JOIN se restringe",
    cognitivo: {
      motivo: "Cobrar os dois tipos de junção mais usados, pela inversão.",
      palavraCritica: "INNER JOIN ... ainda que não haja correspondência",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. O INNER JOIN devolve apenas as linhas com correspondência nas duas tabelas. O LEFT JOIN devolve todas as linhas da tabela à esquerda e completa com nulos as colunas da direita quando não há par. É justamente por isso que o LEFT JOIN, combinado com IS NULL, serve para localizar registros sem correspondência.",
      fundamento: "Padrão SQL — INNER JOIN, LEFT/RIGHT OUTER JOIN e FULL OUTER JOIN.",
      macete: "INNER = só o que casa. LEFT = tudo da esquerda, casando ou não.",
      erroComum: "Trocar os dois por associar 'inner' a 'inteiro'.",
      comoBancaPensa: "Inverte as duas junções mais cobradas, descrevendo cada comportamento corretamente no rótulo errado."
    }
  },
  {
    id: "TI-223", disciplina: "TI e Segurança Cibernética", assunto: "Linguagem SQL", subassunto: "Junções (JOIN)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de termo absoluto)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.62,
    enunciado: "Na junção interna entre duas tabelas, somente as linhas que satisfaçam a condição de junção em ambas integram o resultado; a omissão dessa condição produz o produto cartesiano entre os conjuntos envolvidos.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "somente as linhas que satisfaçam ... omissão ... produto cartesiano",
    cognitivo: {
      motivo: "Contraexemplo: um 'somente' verdadeiro, somado ao efeito de omitir a condição de junção.",
      palavraCritica: "somente as linhas que satisfaçam",
    },
    comentario: {
      resolucao: "CERTO. A exclusividade é exata: na junção interna, quem não tem par fica de fora dos dois lados. E a segunda cláusula também procede — sem condição de junção, cada linha de uma tabela é combinada com todas as da outra, gerando o produto cartesiano (CROSS JOIN), cujo total de linhas é o produto das quantidades. É o erro que faz uma consulta devolver milhões de linhas inesperadas.",
      fundamento: "Padrão SQL — INNER JOIN e produto cartesiano (CROSS JOIN).",
      macete: "Esqueceu o ON? Multiplicou as tabelas.",
      erroComum: "Marcar ERRADO por causa do 'somente', sem verificar se a exclusividade procede.",
      comoBancaPensa: "Combina um absoluto verdadeiro com uma consequência técnica correta, punindo a resposta por reflexo."
    }
  },

  /* ===== OBJETOS DO BANCO ===== */
  {
    id: "TI-224", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Visões (views)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.78,
    enunciado: "A view é uma tabela física estática que duplica, em novo espaço de disco, os dados da tabela de origem a cada nova linha nela inserida, com a finalidade precípua de reforçar a segurança do perímetro de rede.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "tabela física estática que duplica ... segurança do perímetro de rede",
    cognitivo: {
      motivo: "Cobrar a natureza da view, com dois erros somados: armazenamento e finalidade.",
      palavraCritica: "tabela física ... perímetro de rede",
    },
    comentario: {
      resolucao: "ERRADO. A view é uma consulta armazenada — uma tabela virtual: não guarda dados próprios, e seu conteúdo é produzido na execução, a partir das tabelas-base. Também a finalidade está deslocada: views servem a simplificar consultas complexas e a restringir o acesso a colunas e linhas específicas, o que é segurança de dados, e não de perímetro de rede, assunto de firewall.",
      fundamento: "Padrão SQL — CREATE VIEW e natureza da tabela virtual.",
      macete: "View não guarda dado: guarda a consulta.",
      erroComum: "Imaginar que criar view consome espaço proporcional aos dados.",
      comoBancaPensa: "Soma dois erros — um técnico e outro de finalidade — em enunciado carregado de termos corretos."
    }
  },
  {
    id: "TI-225", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Visões (views)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.7,
    enunciado: "A view convencional não armazena dados próprios, sendo seu conteúdo derivado das tabelas-base no momento da consulta; já a view materializada persiste fisicamente o resultado, o que exige política de atualização para evitar defasagem.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "não armazena dados próprios ... materializada persiste fisicamente ... política de atualização",
    cognitivo: {
      motivo: "Contraexemplo: view comum e materializada, par permutável, aqui descrito corretamente.",
      palavraCritica: "exige política de atualização para evitar defasagem",
    },
    comentario: {
      resolucao: "CERTO. A view comum é reprocessada a cada consulta, de modo que sempre reflete o estado atual das tabelas-base. A materializada guarda o resultado em disco, ganhando desempenho em consultas analíticas pesadas, mas passando a exigir atualização — periódica ou sob demanda —, sem a qual devolve dado desatualizado. É o trade-off clássico entre custo de leitura e frescor da informação.",
      fundamento: "Padrão SQL e implementações de SGBD — view x view materializada.",
      macete: "View comum: sempre atual, custa a cada consulta. Materializada: rápida, mas envelhece.",
      erroComum: "Ignorar a existência da view materializada e generalizar que view nunca ocupa disco.",
      comoBancaPensa: "Item correto que exige conhecer a exceção, não apenas a regra."
    }
  },
  {
    id: "TI-226", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Índices",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.73,
    enunciado: "O índice acelera a recuperação de linhas que atendam a determinado critério de busca, mas onera as operações de inserção, alteração e exclusão, pois a estrutura precisa ser mantida atualizada a cada modificação dos dados.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "acelera a recuperação ... onera as operações de inserção, alteração e exclusão",
    cognitivo: {
      motivo: "Cobrar o custo do índice, e não apenas seu benefício.",
      palavraCritica: "onera as operações de inserção, alteração e exclusão",
    },
    comentario: {
      resolucao: "CERTO. O índice é uma estrutura auxiliar — normalmente uma árvore B — que evita a varredura completa da tabela. O preço é duplo: ocupa espaço em disco e precisa ser reescrito sempre que os dados indexados mudam. Por isso a indexação é decisão de projeto: em tabela com escrita intensa, índices demais degradam o desempenho global.",
      fundamento: "Otimização de desempenho em SGBD — estruturas de índice e custo de manutenção.",
      macete: "Índice paga na leitura e cobra na escrita.",
      erroComum: "Tratar índice como ganho sem contrapartida.",
      comoBancaPensa: "Item correto que cobra o trade-off, preparando a generalização indevida do item seguinte."
    }
  },
  {
    id: "TI-227", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Índices",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.66,
    enunciado: "A criação de índices em todas as colunas de uma tabela constitui prática recomendada de otimização, por assegurar ganho de desempenho em qualquer consulta que venha a ser executada sobre ela.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "todas as colunas ... assegurar ganho ... em qualquer consulta",
    cognitivo: {
      motivo: "Cobrar o limite do benefício da indexação, logo após o item que expôs seu custo.",
      palavraCritica: "todas as colunas ... qualquer consulta",
    },
    comentario: {
      resolucao: "ERRADO. Indexar tudo multiplica o custo de escrita e o espaço ocupado, sem garantia de ganho: o otimizador pode simplesmente ignorar índices de baixa seletividade — como uma coluna de dois valores possíveis — e preferir a varredura completa. Consultas que retornam grande parte da tabela também não se beneficiam. A indexação eficaz decorre da análise do padrão real de consultas.",
      fundamento: "Otimização de consultas em SGBD — seletividade e escolha do plano de execução.",
      macete: "Índice bom é o que o otimizador usa. Coluna pouco seletiva não ajuda.",
      erroComum: "Concluir que, se índice acelera, mais índices aceleram mais.",
      comoBancaPensa: "Extrapola um benefício real para uma regra universal, com 'todas' e 'qualquer'."
    }
  },

  /* ===== TRANSAÇÕES, NoSQL E SEGURANÇA ===== */
  {
    id: "TI-228", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Propriedades ACID",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.76,
    enunciado: "A atomicidade assegura que a transação seja efetivada por inteiro ou integralmente desfeita, ao passo que a durabilidade garante que as alterações confirmadas subsistam ainda que sobrevenha falha do sistema imediatamente após a confirmação.",
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "atomicidade ... por inteiro ou integralmente desfeita ... durabilidade ... subsistam ... após a confirmação",
    cognitivo: {
      motivo: "Contraexemplo: duas propriedades ACID que a banca permuta, aqui atribuídas corretamente.",
      palavraCritica: "ainda que sobrevenha falha do sistema imediatamente após a confirmação",
    },
    comentario: {
      resolucao: "CERTO. Atomicidade é o tudo-ou-nada: não há transação pela metade. Durabilidade garante a persistência do que foi confirmado, o que os SGBDs asseguram gravando o log de transações antes dos dados (write-ahead logging), de modo que a recuperação após queda reconstrói o estado. Completam o conjunto a consistência (a transação leva o banco de um estado válido a outro) e o isolamento (transações concorrentes não interferem indevidamente entre si).",
      fundamento: "Propriedades ACID das transações em SGBD.",
      macete: "A: tudo ou nada. C: regras respeitadas. I: sem interferência. D: confirmado, persiste.",
      erroComum: "Confundir durabilidade com backup.",
      comoBancaPensa: "Item correto e preciso, âncora para a inversão que costuma vir em outro item da mesma prova."
    }
  },
  {
    id: "TI-229", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Propriedades ACID",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de troca de conceitos)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.69,
    enunciado: "O isolamento assegura que a transação seja executada integralmente ou não produza efeito algum, ao passo que a atomicidade impede que transações concorrentes interfiram umas nas outras durante a execução.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "isolamento ... integralmente ou não produza efeito ... atomicidade impede que transações concorrentes interfiram",
    cognitivo: {
      motivo: "Cobrar as mesmas propriedades com os rótulos permutados.",
      palavraCritica: "isolamento ... integralmente",
    },
    comentario: {
      resolucao: "ERRADO. Está invertido. A ATOMICIDADE é o tudo-ou-nada de cada transação; o ISOLAMENTO trata da concorrência, evitando que uma transação enxergue estados intermediários de outra — problema tratado pelos níveis de isolamento e associado a anomalias como leitura suja, leitura não repetível e leitura fantasma.",
      fundamento: "Propriedades ACID — atomicidade e isolamento.",
      macete: "Atomicidade: indivisível. Isolamento: uma transação não atrapalha a outra.",
      erroComum: "Saber as quatro letras e não saber colar cada definição na sua.",
      comoBancaPensa: "Permuta duas propriedades do mesmo acrônimo, contando com a memorização da sigla sem o conteúdo."
    }
  },
  {
    id: "TI-230", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Bancos NoSQL",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.71,
    enunciado: "Entre as famílias de bancos de dados NoSQL costumam ser arroladas as de chave-valor, as orientadas a documentos, as de famílias de colunas e as orientadas a grafos, esta última especialmente adequada à representação de relações entre entidades, como vínculos entre pessoas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "chave-valor ... documentos ... famílias de colunas ... grafos",
    cognitivo: {
      motivo: "Cobrar a taxonomia do NoSQL e a aplicação típica do modelo de grafos.",
      palavraCritica: "grafos ... vínculos entre pessoas",
    },
    comentario: {
      resolucao: "CERTO. As quatro famílias são as usualmente citadas. O modelo de grafos armazena nós e arestas com propriedades e é o mais eficiente para percorrer relacionamentos de profundidade variável — daí seu uso em análise de vínculos, aplicação de interesse direto em investigação criminal, em que consultas do tipo 'quem se conecta a quem, em quantos saltos' seriam custosas em modelo relacional.",
      fundamento: "Taxonomia de bancos NoSQL — chave-valor, documento, colunar e grafo.",
      macete: "Vínculo, rede, caminho entre pessoas: banco de grafos.",
      erroComum: "Tratar NoSQL como um modelo único, e não como uma família de modelos.",
      comoBancaPensa: "Item correto que cobra a classificação e ainda a aplicação característica de um dos modelos."
    }
  },
  {
    id: "TI-231", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Bancos NoSQL",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.65,
    enunciado: "Os bancos de dados NoSQL dispensam qualquer noção de esquema e, por não implementarem controle transacional, jamais asseguram consistência dos dados, o que os torna inadequados a qualquer aplicação crítica.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "dispensam qualquer noção de esquema ... jamais asseguram consistência ... inadequados a qualquer aplicação crítica",
    cognitivo: {
      motivo: "Cobrar os limites reais do modelo NoSQL, contra a caricatura corrente.",
      palavraCritica: "jamais ... qualquer aplicação crítica",
    },
    comentario: {
      resolucao: "ERRADO. NoSQL significa esquema flexível, não ausência de estrutura — bancos de documentos admitem validação de esquema. Vários oferecem transações, inclusive multidocumento, e o modelo BASE prevê consistência eventual, que é uma garantia mais fraca, não a sua inexistência. A escolha decorre do teorema CAP e do perfil da aplicação; há sistemas críticos operando sobre NoSQL.",
      fundamento: "Modelos NoSQL, teorema CAP e propriedades BASE (basically available, soft state, eventually consistent).",
      macete: "Flexível não é inexistente. Consistência eventual continua sendo consistência.",
      erroComum: "Opor NoSQL e relacional como 'sem regra' contra 'com regra'.",
      comoBancaPensa: "Acumula absolutos ('qualquer', 'jamais') para transformar uma diferença de modelo em incapacidade."
    }
  },
  {
    id: "TI-232", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Injeção de SQL",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.8,
    enunciado: "A injeção de SQL decorre da concatenação de entrada não tratada do usuário ao corpo do comando enviado ao banco, e a defesa mais efetiva consiste no emprego de consultas parametrizadas, que separam o comando dos dados fornecidos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "concatenação de entrada não tratada ... consultas parametrizadas ... separam o comando dos dados",
    cognitivo: {
      motivo: "Cobrar causa e defesa da vulnerabilidade mais explorada contra bancos de dados.",
      palavraCritica: "separam o comando dos dados fornecidos",
    },
    comentario: {
      resolucao: "CERTO. O ataque existe porque o dado do usuário passa a ser interpretado como parte do comando. A consulta parametrizada (prepared statement) resolve na raiz: o SGBD recebe primeiro a estrutura do comando e depois os valores, que nunca são reinterpretados como SQL. Filtros de entrada e escape ajudam, mas são defesa secundária. Completam a proteção o princípio do menor privilégio na conta usada pela aplicação e o registro de auditoria.",
      fundamento: "OWASP — injeção de SQL e uso de prepared statements/consultas parametrizadas.",
      macete: "Não concatene: parametrize. Comando de um lado, dado do outro.",
      erroComum: "Confiar apenas em validação de entrada, sem parametrizar a consulta.",
      comoBancaPensa: "Item correto que cobra a defesa efetiva, e não apenas a definição do ataque."
    }
  },
  {
    id: "TI-233", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Injeção de SQL",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de generalização)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.68,
    enunciado: "A validação dos dados realizada exclusivamente no navegador do usuário, por meio de scripts executados no lado cliente, é suficiente para eliminar o risco de injeção de SQL na aplicação.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "exclusivamente no navegador ... suficiente para eliminar o risco",
    cognitivo: {
      motivo: "Cobrar a insuficiência de controles no lado cliente, princípio geral de segurança de aplicações.",
      palavraCritica: "exclusivamente ... suficiente para eliminar",
    },
    comentario: {
      resolucao: "ERRADO. Tudo que roda no cliente está sob controle do atacante: basta desabilitar o script, alterar o conteúdo da página ou enviar a requisição diretamente ao servidor, sem passar pela interface. A validação no navegador serve à experiência do usuário; a segurança exige validação no servidor e, sobretudo, consultas parametrizadas.",
      fundamento: "OWASP — princípio de que controles no lado cliente não substituem validação no servidor.",
      macete: "O que roda no navegador, o atacante controla. Segurança se decide no servidor.",
      erroComum: "Tomar a validação de formulário como barreira de segurança.",
      comoBancaPensa: "Apresenta um controle real, porém insuficiente, como bastante para eliminar o risco."
    }
  },
  {
    id: "TI-234", disciplina: "TI e Segurança Cibernética", assunto: "Banco de dados", subassunto: "Backup e recuperação",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade técnica)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 85, probReaparecer: 0.61,
    enunciado: "A recuperação do banco de dados a um instante determinado depende da conjugação da cópia de segurança com os registros do log de transações posteriores a ela, razão pela qual o descarte desses registros compromete a restauração a ponto no tempo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "cópia de segurança com os registros do log de transações ... restauração a ponto no tempo",
    cognitivo: {
      motivo: "Cobrar a função do log de transações na recuperação, além do backup.",
      palavraCritica: "o descarte desses registros compromete a restauração a ponto no tempo",
    },
    comentario: {
      resolucao: "CERTO. O backup devolve o banco ao estado do momento em que foi tirado; tudo o que ocorreu depois só é recuperável reaplicando o log de transações. Sem esses registros, a perda vai do último backup até a falha. Daí a distinção entre os objetivos de ponto de recuperação (RPO — quanto de dado se aceita perder) e de tempo de recuperação (RTO — em quanto tempo o serviço volta).",
      fundamento: "Recuperação em SGBD — backup, log de transações e point-in-time recovery.",
      macete: "Backup leva ao passado; o log traz de volta até o instante da falha.",
      erroComum: "Supor que só o backup basta para recuperação sem perda.",
      comoBancaPensa: "Item correto que cobra a articulação entre dois mecanismos, e não a definição de cada um."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE66);

/* Frequência de temas — TI e Segurança Cibernética (Módulo Banco de Dados) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "TI e Segurança Cibernética");
  if (!d) { d = { disciplina: "TI e Segurança Cibernética", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Banco de dados — SQL, sublinguagens e cláusulas de consulta", freq: 85, tendencia: "alta", prob: 0.85 },
    { tema: "Banco de dados — chaves, integridade referencial e normalização", freq: 83, tendencia: "alta", prob: 0.83 },
    { tema: "Banco de dados — tipologia de dados, Big Data, data lake e ETL", freq: 79, tendencia: "alta", prob: 0.79 },
    { tema: "Banco de dados — views, índices, transações ACID e NoSQL", freq: 72, tendencia: "media", prob: 0.72 },
  );
})();
