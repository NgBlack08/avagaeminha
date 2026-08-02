/* =====================================================================
   QUESTLAB — Lote 52: ATUALIDADES (2025/2026)
   Geopolítica internacional, economia, tecnologia e segurança pública —
   temas de "Atualidades" recorrentes em provas CEBRASPE (Conhecimentos
   Gerais). 43 itens INÉDITOS (C/E), adaptados a partir de material de
   revisão do usuário (contextos e fatos de domínio público — a
   redação de cada item e dos comentários é autoral).
   ===================================================================== */

const QUESTOES_PCAL_LOTE52 = [

  /* ===== NEW START E ARMAS NUCLEARES ===== */
  {
    id: "AT-001", disciplina: "Atualidades", assunto: "New START e Armas Nucleares", subassunto: "Renovação do tratado",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "O Tratado New START, principal acordo de controle de armas nucleares entre Estados Unidos e Rússia, foi renovado automaticamente em fevereiro de 2026 por mais dez anos, mantendo limites obrigatórios para os arsenais estratégicos dos dois países até 2036.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "renovado automaticamente",
    cognitivo: {
      motivo: "Cobrar o desfecho do New START, que expirou sem uma renovação automática de dez anos como a descrita.",
      palavraCritica: "automaticamente",
    },
    comentario: {
      resolucao: "ERRADO. O New START, principal tratado bilateral de controle de armas nucleares entre EUA e Rússia, chegou ao fim do seu prazo de vigência sem que houvesse uma renovação automática por mais dez anos nos termos descritos no item — o desfecho do acordo seguiu marcado por incerteza, e não por uma extensão automática com limites obrigatórios garantidos até 2036.",
      fundamento: "Acompanhamento de política internacional — New START (EUA–Rússia).",
      macete: "Crise internacional sem desfecho automático e definitivo — desconfie de finais \"perfeitos\".",
      erroComum: "Achar que tratados internacionais se renovam sozinhos, sem negociação política.",
      comoBancaPensa: "Atribui um desfecho automático e favorável a uma negociação estratégica ainda incerta."
    }
  },
  {
    id: "AT-002", disciplina: "Atualidades", assunto: "Comércio Exterior Brasileiro", subassunto: "Principal parceiro comercial",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "A Argentina se mantém como principal destino das exportações brasileiras, enquanto os automóveis lideram a pauta exportadora nacional.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "Argentina",
    cognitivo: {
      motivo: "Cobrar o real perfil do comércio exterior brasileiro: parceiro principal e produtos de maior peso na pauta.",
      palavraCritica: "Argentina",
    },
    comentario: {
      resolucao: "ERRADO. A China, e não a Argentina, é a principal parceira comercial do Brasil, absorvendo grande parte das exportações brasileiras. A pauta exportadora nacional é liderada por commodities — como soja, minério de ferro e petróleo — e não por automóveis.",
      fundamento: "Dados de comércio exterior brasileiro (MDIC/Comex Stat).",
      macete: "China = maior parceiro; commodities (soja/minério/petróleo) = topo da pauta.",
      erroComum: "Superestimar o peso do Mercosul/Argentina no comércio exterior brasileiro.",
      comoBancaPensa: "Troca o parceiro comercial correto por um vizinho regional plausível, mas incorreto."
    }
  },
  {
    id: "AT-003", disciplina: "Atualidades", assunto: "Comércio Exterior Brasileiro", subassunto: "Principal parceiro comercial",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "A União Europeia ocupa atualmente a posição de principal parceira comercial do Brasil, com destaque para as exportações de café.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "União Europeia",
    cognitivo: {
      motivo: "Reforçar o real perfil do principal parceiro comercial do Brasil.",
      palavraCritica: "União Europeia",
    },
    comentario: {
      resolucao: "ERRADO. A União Europeia é uma parceira comercial relevante do Brasil, mas não ocupa a posição de principal parceira — esse posto é da China. Além disso, a pauta exportadora brasileira é liderada por commodities como soja, minério de ferro e petróleo, e não pelo café.",
      fundamento: "Dados de comércio exterior brasileiro (MDIC/Comex Stat).",
      macete: "China = maior parceiro comercial do Brasil.",
      erroComum: "Confundir relevância histórica/diplomática (UE) com liderança no volume comercial atual.",
      comoBancaPensa: "Substitui o parceiro comercial líder por um bloco plausível, mas secundário."
    }
  },
  {
    id: "AT-004", disciplina: "Atualidades", assunto: "Comércio Exterior Brasileiro", subassunto: "Principal parceiro comercial",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "Os Estados Unidos consolidaram-se como principal parceiro comercial do Brasil, impulsionados pelas importações de produtos industrializados brasileiros.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "Estados Unidos",
    cognitivo: {
      motivo: "Reforçar, por outro ângulo, o real principal parceiro comercial do Brasil.",
      palavraCritica: "Estados Unidos",
    },
    comentario: {
      resolucao: "ERRADO. A China, e não os Estados Unidos, é o principal parceiro comercial do Brasil. Além disso, o comércio Brasil–EUA não é impulsionado majoritariamente por produtos industrializados brasileiros, mas envolve uma pauta mais diversificada.",
      fundamento: "Dados de comércio exterior brasileiro (MDIC/Comex Stat).",
      macete: "China no topo do comércio exterior brasileiro.",
      erroComum: "Supor que a maior potência econômica do mundo é automaticamente o maior parceiro comercial do Brasil.",
      comoBancaPensa: "Aposta na intuição de que os EUA, por serem a maior economia, seriam o maior parceiro comercial."
    }
  },
  {
    id: "AT-005", disciplina: "Atualidades", assunto: "Comércio Exterior Brasileiro", subassunto: "Pauta exportadora",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "A pauta exportadora brasileira foi liderada principalmente por produtos industriais de alto valor agregado, destinados ao mercado europeu.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "produtos industriais de alto valor agregado",
    cognitivo: {
      motivo: "Fechar o bloco sobre pauta exportadora, reforçando que commodities lideram as exportações brasileiras.",
      palavraCritica: "alto valor agregado",
    },
    comentario: {
      resolucao: "ERRADO. A pauta exportadora brasileira é liderada por commodities primárias — como petróleo, soja e minério de ferro — e não por produtos industriais de alto valor agregado. O principal destino dessas exportações é a China, e não o mercado europeu.",
      fundamento: "Dados de comércio exterior brasileiro (MDIC/Comex Stat).",
      macete: "Commodities (petróleo/soja/minério) lideram a pauta, com destino principal à China.",
      erroComum: "Presumir que o Brasil exporta majoritariamente produtos manufaturados sofisticados.",
      comoBancaPensa: "Inverte o perfil real da pauta exportadora, atribuindo-lhe um caráter industrializado que não tem."
    }
  },
  {
    id: "AT-006", disciplina: "Atualidades", assunto: "Comércio Exterior Brasileiro", subassunto: "Pauta exportadora",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "O petróleo bruto, a soja e o minério de ferro lideram a pauta exportadora brasileira, tendo a China como principal destino.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "China",
    cognitivo: {
      motivo: "Fixar corretamente o perfil real do comércio exterior brasileiro, após os itens anteriores com trocas de sujeito/conceito.",
      palavraCritica: "China",
    },
    comentario: {
      resolucao: "CERTO. O petróleo bruto, a soja e o minério de ferro estão entre os principais produtos da pauta exportadora brasileira, e a China é, de fato, o principal destino dessas exportações.",
      fundamento: "Dados de comércio exterior brasileiro (MDIC/Comex Stat).",
      macete: "Combinação-padrão cobrada em prova: commodities + China.",
      erroComum: "Marcar como errado por desconfiança, após uma sequência de itens incorretos sobre o mesmo assunto.",
      comoBancaPensa: "Insere um item literalmente correto no meio de uma sequência de distratores para testar a leitura atenta."
    }
  },

  /* ===== COPA DO MUNDO DE 2026 ===== */
  {
    id: "AT-007", disciplina: "Atualidades", assunto: "Copa do Mundo de 2026", subassunto: "Cooperação e tensões na América do Norte",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "A realização da Copa do Mundo de 2026 em três países distintos — Estados Unidos, Canadá e México — é frequentemente apontada como um exemplo de cooperação regional na América do Norte, embora tensões diplomáticas e divergências em temas como comércio, segurança de fronteiras e migração permaneçam entre os governos envolvidos.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "cooperação regional",
    cognitivo: {
      motivo: "Cobrar a leitura equilibrada da Copa de 2026: cooperação esportiva coexistindo com tensões políticas reais.",
      palavraCritica: "embora",
    },
    comentario: {
      resolucao: "CERTO. A sede compartilhada da Copa do Mundo de 2026 entre Estados Unidos, Canadá e México é, de fato, citada como exemplo de cooperação regional, sem que isso elimine as tensões diplomáticas existentes entre os três países em temas como comércio, segurança de fronteiras e migração.",
      fundamento: "Acompanhamento de política internacional — Copa do Mundo 2026.",
      macete: "Cooperação em um evento específico convive com tensões estruturais em outras áreas.",
      erroComum: "Achar incoerente afirmar cooperação e tensão sobre os mesmos países no mesmo item.",
      comoBancaPensa: "Testa se o candidato consegue segurar duas ideias simultâneas e coerentes sobre a mesma relação bilateral."
    }
  },
  {
    id: "AT-008", disciplina: "Atualidades", assunto: "Copa do Mundo de 2026", subassunto: "Debates migratórios",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "A realização da Copa do Mundo de 2026 tende a intensificar os debates sobre imigração e controle de fronteiras na América do Norte, tendo em vista que o aumento do fluxo de turistas internacionais ocorre em um contexto no qual Estados Unidos, Canadá e México mantêm políticas migratórias próprias e interesses nem sempre convergentes em matéria de segurança e circulação de pessoas.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "políticas migratórias próprias",
    cognitivo: {
      motivo: "Reforçar o efeito do grande fluxo de visitantes sobre debates migratórios já sensíveis na região.",
      palavraCritica: "interesses nem sempre convergentes",
    },
    comentario: {
      resolucao: "CERTO. O aumento do fluxo de turistas para a Copa do Mundo de 2026 ocorre em um contexto de políticas migratórias distintas entre Estados Unidos, Canadá e México, o que tende a intensificar os debates sobre imigração e controle de fronteiras na região.",
      fundamento: "Acompanhamento de política internacional — Copa do Mundo 2026 e migração na América do Norte.",
      macete: "Grande evento + fronteiras sensíveis = debate migratório em alta.",
      erroComum: "Tratar o tema migratório como desconectado da realização de grandes eventos esportivos internacionais.",
      comoBancaPensa: "Conecta um fato conjuntural (evento esportivo) a uma tensão estrutural (política migratória) de forma coerente."
    }
  },
  {
    id: "AT-009", disciplina: "Atualidades", assunto: "Copa do Mundo de 2026", subassunto: "Riscos econômicos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "Embora a Copa do Mundo de 2026 seja realizada conjuntamente por Estados Unidos, Canadá e México, os possíveis ganhos econômicos associados ao evento podem ser afetados por disputas comerciais entre os países-sede, uma vez que medidas protecionistas, tarifas de importação e incertezas nas cadeias produtivas tendem a impactar investimentos, custos logísticos e fluxos de negócios relacionados ao torneio.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "disputas comerciais",
    cognitivo: {
      motivo: "Cobrar a relação entre tensões comerciais (tarifas) e os ganhos econômicos esperados de um megaevento esportivo.",
      palavraCritica: "medidas protecionistas",
    },
    comentario: {
      resolucao: "CERTO. Disputas comerciais entre Estados Unidos, Canadá e México — como medidas protecionistas e tarifas de importação — podem, de fato, afetar negativamente investimentos, custos logísticos e fluxos de negócios relacionados à Copa do Mundo de 2026, mesmo com a cooperação esportiva entre os três países.",
      fundamento: "Acompanhamento de política internacional — Copa do Mundo 2026 e política tarifária na América do Norte.",
      macete: "Tensão comercial entre sedes pode esfriar os ganhos econômicos esperados do evento.",
      erroComum: "Tratar cooperação esportiva e disputa comercial como mutuamente excludentes.",
      comoBancaPensa: "Testa a capacidade de conectar dois temas de atualidades (megaevento e tarifas) de forma coerente."
    }
  },

  /* ===== CRISE EUA–VENEZUELA ===== */
  {
    id: "AT-010", disciplina: "Atualidades", assunto: "Crise EUA–Venezuela", subassunto: "Classificação como organização terrorista",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.75,
    enunciado: "A estratégia norte-americana de vincular o governo venezuelano ao narcoterrorismo permite a Washington invocar o princípio de legítima defesa e abrir caminho para a imposição de sanções mais rigorosas, bloqueio de ativos e uso de força militar sob o pretexto de combater o terrorismo internacional, sem necessitar de aprovação do Conselho de Segurança da ONU.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "sem necessitar de aprovação do Conselho de Segurança",
    cognitivo: {
      motivo: "Cobrar a lógica geopolítica por trás de classificar um governo estrangeiro como vinculado ao terrorismo.",
      palavraCritica: "legítima defesa",
    },
    comentario: {
      resolucao: "CERTO. A classificação do governo venezuelano/Cartel de los Soles como organização terrorista funciona, na prática, como justificativa política para os Estados Unidos invocarem legítima defesa e adotarem sanções, bloqueio de ativos e até uso de força, sem depender de aprovação do Conselho de Segurança da ONU.",
      fundamento: "Acompanhamento de política internacional — crise EUA–Venezuela.",
      macete: "Rótulo de \"terrorista\" abre caminho retórico para ação unilateral, sem aval do CS-ONU.",
      erroComum: "Supor que toda ação militar de um Estado depende de autorização da ONU.",
      comoBancaPensa: "Cobra o entendimento de como retóricas de segurança justificam ações unilaterais no direito internacional."
    }
  },
  {
    id: "AT-011", disciplina: "Atualidades", assunto: "Crise EUA–Venezuela", subassunto: "Classificação como organização terrorista",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.75,
    enunciado: "A classificação do Cartel de los Soles como organização terrorista pelos EUA tem como principal objetivo geopolítico a liberação de vastas reservas de petróleo venezuelano para o mercado global, através de uma intervenção militar direta e imediata, garantindo a baixa dos preços internacionais.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "objetivo geopolítico",
    cognitivo: {
      motivo: "Evitar a leitura simplista de que toda a crise EUA-Venezuela se resume a uma disputa por petróleo com solução militar já definida.",
      palavraCritica: "garantindo",
    },
    comentario: {
      resolucao: "ERRADO. A crise EUA–Venezuela envolve múltiplos fatores (narcotráfico, migração, geopolítica regional, disputa de poder), e não há uma intervenção militar direta e imediata garantida com o objetivo único de liberar reservas de petróleo e baixar preços internacionais — trata-se de uma simplificação indevida de um cenário em aberto.",
      fundamento: "Acompanhamento de política internacional — crise EUA–Venezuela.",
      macete: "Desconfie de itens que atribuem UM objetivo único e um desfecho militar certo a crises geopolíticas complexas.",
      erroComum: "Aceitar como certa uma intervenção militar ainda hipotética, tratando-a como fato consumado.",
      comoBancaPensa: "Simplifica uma crise multifacetada em uma narrativa única, motivada por interesse econômico, com desfecho garantido."
    }
  },
  {
    id: "AT-012", disciplina: "Atualidades", assunto: "Crise EUA–Venezuela", subassunto: "Deterrence e Doutrina Monroe",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.7,
    enunciado: "A escalada militar e as acusações no Caribe representam um exemplo consolidado e amplamente reconhecido de Deterrence (Dissuasão) na Geopolítica, na medida em que comprova, de forma inequívoca, que os Estados Unidos buscam evitar que a China ou a Rússia estabeleçam bases militares permanentes na Venezuela, o que ameaçaria diretamente a doutrina de Monroe.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "comprova, de forma inequívoca",
    cognitivo: {
      motivo: "Evitar a leitura de que uma interpretação geopolítica plausível (dissuasão via Doutrina Monroe) seja um fato comprovado e consensual.",
      palavraCritica: "inequívoca",
    },
    comentario: {
      resolucao: "ERRADO. Embora a leitura da crise no Caribe como uma manifestação de dissuasão (deterrence), ligada à Doutrina Monroe, seja uma interpretação geopolítica plausível e frequentemente adotada por analistas, o item extrapola ao afirmar que isso está \"comprovado de forma inequívoca\" — trata-se de uma leitura interpretativa, não de um fato estabelecido de forma consensual.",
      fundamento: "Acompanhamento de política internacional — crise EUA–Venezuela e Doutrina Monroe.",
      macete: "Interpretação analítica plausível não é o mesmo que fato comprovado de forma inequívoca.",
      erroComum: "Aceitar como certeza absoluta uma leitura geopolítica que é, na verdade, uma interpretação corrente entre analistas.",
      comoBancaPensa: "Usa uma leitura geopolítica plausível, mas eleva seu grau de certeza para além do que é sustentável."
    }
  },
  {
    id: "AT-013", disciplina: "Atualidades", assunto: "Crise EUA–Venezuela", subassunto: "Capacidade de dissuasão venezuelana",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "A resposta do governo venezuelano, que mobiliza sua milícia e nega a existência do Cartel, demonstra a sua total capacidade de dissuasão e poderio militar equilibrado frente à superioridade bélica dos EUA, tornando inviável qualquer tipo de intervenção militar direta.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "poderio militar equilibrado",
    cognitivo: {
      motivo: "Evitar a superestimação da capacidade militar venezuelana frente à assimetria real de poder bélico com os EUA.",
      palavraCritica: "poderio militar equilibrado",
    },
    comentario: {
      resolucao: "ERRADO. A mobilização de milícias e o discurso oficial de negação por parte do governo venezuelano não configuram \"poderio militar equilibrado\" frente aos Estados Unidos, tampouco tornam uma intervenção militar direta inviável — trata-se de uma resposta majoritariamente política e discursiva, e não de paridade bélica real.",
      fundamento: "Acompanhamento de política internacional — crise EUA–Venezuela.",
      macete: "Resposta política/discursiva ≠ paridade militar real.",
      erroComum: "Superestimar a capacidade militar de um país com base apenas em seu discurso oficial.",
      comoBancaPensa: "Infla uma resposta política em uma conclusão exagerada sobre equilíbrio de forças militares."
    }
  },
  {
    id: "AT-014", disciplina: "Atualidades", assunto: "Crise EUA–Venezuela", subassunto: "Conceito de Narcoestado",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.75,
    enunciado: "O conceito de Narcoestado é amplamente aceito e aplicado à Venezuela pela comunidade internacional (incluindo Brasil, União Europeia e a maioria dos países latino-americanos) como uma categoria consensual para descrever a infiltração completa e comprovada do tráfico de drogas no alto escalão do governo, o que unifica o bloco de oposição a Maduro.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "amplamente aceito",
    cognitivo: {
      motivo: "Evitar tratar como consenso internacional pacífico uma classificação política controversa e não unânime.",
      palavraCritica: "consensual",
    },
    comentario: {
      resolucao: "ERRADO. O conceito de Narcoestado aplicado à Venezuela não é um consenso pacífico e amplamente aceito por toda a comunidade internacional — trata-se de uma classificação política controversa, não compartilhada de forma unânime por Brasil, União Europeia e demais países latino-americanos.",
      fundamento: "Acompanhamento de política internacional — crise EUA–Venezuela.",
      macete: "Classificação política controversa não deve ser tratada como consenso internacional.",
      erroComum: "Presumir que uma posição adotada por um ator relevante (EUA) é automaticamente compartilhada por toda a comunidade internacional.",
      comoBancaPensa: "Generaliza uma posição política específica como se fosse um consenso global pacífico."
    }
  },

  /* ===== MERCADO DE TRABALHO NO BRASIL ===== */
  {
    id: "AT-015", disciplina: "Atualidades", assunto: "Mercado de Trabalho no Brasil", subassunto: "Taxa de desocupação (IBGE/PNAD)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "De acordo com os dados divulgados pelo Instituto Brasileiro de Geografia e Estatística (IBGE), a taxa de desocupação no Brasil atingiu o menor nível desde o início da série histórica em 2012, registrando 5,2% no trimestre móvel encerrado em novembro de 2025.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "5,2%",
    cognitivo: {
      motivo: "Cobrar dado numérico específico e recente sobre o mercado de trabalho brasileiro (PNAD Contínua/IBGE).",
      palavraCritica: "5,2%",
    },
    comentario: {
      resolucao: "CERTO. Conforme dados divulgados pelo IBGE (PNAD Contínua), a taxa de desocupação no Brasil atingiu o menor patamar da série histórica iniciada em 2012, registrando 5,2% no trimestre móvel encerrado em novembro de 2025.",
      fundamento: "IBGE — PNAD Contínua (taxa de desocupação).",
      macete: "IBGE/PNAD = fonte oficial de dados de emprego/desemprego no Brasil.",
      erroComum: "Confundir taxa de desocupação com taxa de informalidade ou subutilização da força de trabalho.",
      comoBancaPensa: "Cobra dado numérico atualizado e específico, testando a atenção do candidato à atualidade."
    }
  },

  /* ===== OMC E COMÉRCIO INTERNACIONAL ===== */
  {
    id: "AT-016", disciplina: "Atualidades", assunto: "OMC e Comércio Internacional", subassunto: "Papel institucional da OMC",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "A importância da Organização Mundial do Comércio (OMC) se dá, sobretudo, devido à coordenação de múltiplos interesses no comércio internacional, buscando a abertura dos mercados e a livre concorrência.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "abertura dos mercados",
    cognitivo: {
      motivo: "Cobrar a função institucional básica da OMC no comércio internacional.",
      palavraCritica: "livre concorrência",
    },
    comentario: {
      resolucao: "CERTO. A OMC atua como principal foro multilateral de coordenação do comércio internacional, tendo entre seus objetivos centrais a abertura de mercados e a promoção da livre concorrência entre os países-membros.",
      fundamento: "Organização Mundial do Comércio (OMC) — princípios institucionais.",
      macete: "OMC = comércio internacional (regras, abertura de mercados, concorrência).",
      erroComum: "Confundir a OMC com organismos financeiros como o FMI ou o Banco Mundial.",
      comoBancaPensa: "Cobra conhecimento institucional básico, sem grandes armadilhas, para verificar domínio do tema."
    }
  },
  {
    id: "AT-017", disciplina: "Atualidades", assunto: "Cultura, Tecnologia e IA", subassunto: "Relatório da UNESCO",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.7,
    enunciado: "Entre as oportunidades associadas à transformação digital do setor cultural, destaca-se a possibilidade do uso da inteligência artificial generativa para digitalizar, proteger e facilitar o acesso ao patrimônio cultural.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "patrimônio cultural",
    cognitivo: {
      motivo: "Cobrar uma das aplicações positivas da IA generativa citadas em relatórios internacionais sobre cultura (UNESCO).",
      palavraCritica: "digitalizar, proteger e facilitar",
    },
    comentario: {
      resolucao: "CERTO. Relatórios internacionais sobre políticas culturais, como o publicado pela UNESCO, reconhecem que a inteligência artificial generativa pode ser usada para digitalizar, proteger e ampliar o acesso ao patrimônio cultural, configurando uma das oportunidades trazidas pela tecnologia ao setor.",
      fundamento: "UNESCO — relatório sobre políticas culturais e tecnologias digitais/IA.",
      macete: "IA generativa + patrimônio cultural = digitalização, proteção e acesso (oportunidade).",
      erroComum: "Associar automaticamente IA e cultura apenas a riscos e desigualdades, ignorando as oportunidades.",
      comoBancaPensa: "Testa se o candidato reconhece o duplo caráter (riscos e oportunidades) da IA em relatórios internacionais."
    }
  },

  /* ===== SISTEMA FINANCEIRO NACIONAL ===== */
  {
    id: "AT-018", disciplina: "Atualidades", assunto: "Sistema Financeiro Nacional", subassunto: "Operação Compliance Zero",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "No final de 2025, a Polícia Federal deflagrou a Operação Compliance Zero, que investigou fraudes financeiras envolvendo instituições do Sistema Financeiro Nacional; no âmbito dessa operação, a Justiça Federal negou habeas corpus e manteve a prisão do presidente do Banco Central, Gabriel Galípolo, acusado de participar de esquema de emissão de títulos de crédito falsos estimado em bilhões de reais.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "presidente do Banco Central",
    cognitivo: {
      motivo: "Cobrar atenção ao real investigado da Operação Compliance Zero, evitando confusão com autoridades de outras instituições financeiras.",
      palavraCritica: "presidente do Banco Central",
    },
    comentario: {
      resolucao: "ERRADO. A Operação Compliance Zero, deflagrada pela Polícia Federal no final de 2025, mirou fraudes financeiras envolvendo instituição do Sistema Financeiro Nacional, mas o dirigente investigado e preso não era o presidente do Banco Central do Brasil — o item cria confusão proposital entre autoridades e instituições distintas.",
      fundamento: "Acompanhamento de segurança pública — Operação Compliance Zero (Polícia Federal).",
      macete: "Confira sempre a instituição exata (banco privado x autoridade monetária federal) antes de aceitar o item.",
      erroComum: "Aceitar automaticamente o cargo de maior notoriedade citado (presidente do BC) sem checar a instituição de fato investigada.",
      comoBancaPensa: "Explora a notoriedade de uma autoridade pública para confundir com o real investigado de uma operação policial."
    }
  },
  {
    id: "AT-019", disciplina: "Atualidades", assunto: "BRICS", subassunto: "Natureza e composição do bloco",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "O Rio de Janeiro sediou a décima sétima cúpula anual do BRICS. Esse acrônimo designa uma aliança político-militar que reúne 32 países membros da Europa e da América do Norte, os quais se reúnem para consultas e cooperação nas áreas de segurança e defesa.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "aliança político-militar",
    cognitivo: {
      motivo: "Cobrar a real natureza do BRICS: bloco de cooperação econômica entre países emergentes, não aliança político-militar.",
      palavraCritica: "político-militar",
    },
    comentario: {
      resolucao: "ERRADO. O BRICS é um bloco de cooperação econômica e política entre países emergentes — não uma aliança político-militar — e não é composto principalmente por países da Europa e da América do Norte, tampouco reúne 32 membros voltados a segurança e defesa nesses moldes.",
      fundamento: "BRICS — natureza institucional do bloco.",
      macete: "BRICS = economia/cooperação entre emergentes; não confundir com alianças militares (OTAN).",
      erroComum: "Tratar qualquer bloco internacional relevante como se fosse uma aliança militar.",
      comoBancaPensa: "Troca a natureza econômica do BRICS por uma natureza político-militar, testando conhecimento institucional básico."
    }
  },
  {
    id: "AT-020", disciplina: "Atualidades", assunto: "Política Tarifária dos EUA", subassunto: "Tarifas do governo Trump sobre o Brasil",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "As tarifas aplicadas pelo governo dos Estados Unidos sob a presidência de Donald Trump tinham como objetivo facilitar a entrada de produtos estrangeiros no mercado norte-americano, reduzindo os custos de importação para empresas locais.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "facilitar a entrada de produtos estrangeiros",
    cognitivo: {
      motivo: "Cobrar o real objetivo protecionista das tarifas de importação do governo Trump.",
      palavraCritica: "facilitar",
    },
    comentario: {
      resolucao: "ERRADO. As tarifas de importação aplicadas pelo governo Trump tinham caráter protecionista, buscando dificultar e encarecer a entrada de produtos estrangeiros no mercado americano para proteger a indústria doméstica — e não facilitar essa entrada.",
      fundamento: "Acompanhamento de política internacional — política tarifária dos EUA (governo Trump).",
      macete: "Tarifa de importação = proteção da indústria local, não facilitação da entrada de produtos estrangeiros.",
      erroComum: "Inverter o efeito básico de uma tarifa de importação sobre o comércio exterior.",
      comoBancaPensa: "Inverte o conceito econômico básico de tarifa protecionista para testar a compreensão do candidato."
    }
  },
  {
    id: "AT-021", disciplina: "Atualidades", assunto: "Lei Magnitsky", subassunto: "Sanções por violações de direitos humanos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "Continua repercutindo no Brasil e no cenário internacional a aplicação de uma lei dos Estados Unidos que autoriza sanções contra pessoas envolvidas em graves violações de direitos humanos e corrupção. A Lei Magnitsky foi usada para punir autoridades estrangeiras — inclusive brasileiras — com medidas como bloqueio de bens e proibição de entrada no território norte-americano.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "bloqueio de bens",
    cognitivo: {
      motivo: "Cobrar o mecanismo e o alcance da Lei Magnitsky, inclusive sua aplicação a autoridades brasileiras.",
      palavraCritica: "inclusive brasileiras",
    },
    comentario: {
      resolucao: "CERTO. A Lei Magnitsky autoriza os Estados Unidos a aplicar sanções — como bloqueio de bens e proibição de entrada no país — contra autoridades estrangeiras de qualquer nacionalidade envolvidas em graves violações de direitos humanos e corrupção, incluindo casos envolvendo autoridades brasileiras.",
      fundamento: "Lei Magnitsky (EUA) — sanções por direitos humanos e corrupção.",
      macete: "Magnitsky = sanção extraterritorial dos EUA (bens + entrada), por direitos humanos/corrupção, para qualquer nacionalidade.",
      erroComum: "Achar que a lei se aplica apenas a autoridades de países already sancionados, como Rússia.",
      comoBancaPensa: "Cobra o alcance amplo e extraterritorial da lei, incluindo sua aplicação recente a autoridades brasileiras."
    }
  },

  /* ===== CONFLITO ISRAEL–IRÃ ===== */
  {
    id: "AT-022", disciplina: "Atualidades", assunto: "Conflito Israel–Irã", subassunto: "Ataques a instalações nucleares (jun/2025)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "No conflito direto entre Israel e Irã ocorrido em junho de 2025, os Estados Unidos participaram militarmente ao realizar ataques contra instalações nucleares iranianas, incluindo os complexos de Fordow, Natanz e Isfahan, justificando a ação como uma medida destinada a degradar a capacidade nuclear do Irã.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Fordow, Natanz e Isfahan",
    cognitivo: {
      motivo: "Cobrar a participação direta dos EUA no conflito Israel-Irã de junho de 2025 e os alvos específicos atingidos.",
      palavraCritica: "participaram militarmente",
    },
    comentario: {
      resolucao: "CERTO. Em junho de 2025, os Estados Unidos participaram diretamente do conflito entre Israel e Irã, realizando ataques contra instalações nucleares iranianas — incluindo os complexos de Fordow, Natanz e Isfahan —, com a justificativa oficial de degradar a capacidade nuclear iraniana.",
      fundamento: "Acompanhamento de política internacional — conflito Israel–Irã (2025).",
      macete: "EUA + Fordow/Natanz/Isfahan + degradar capacidade nuclear iraniana = junho de 2025.",
      erroComum: "Achar que os EUA apenas apoiaram Israel politicamente, sem participação militar direta.",
      comoBancaPensa: "Cobra fato específico e recente, testando atualização do candidato sobre o conflito."
    }
  },

  /* ===== IA AGÊNTICA ===== */
  {
    id: "AT-023", disciplina: "Atualidades", assunto: "IA Agêntica", subassunto: "Transição para sistemas autônomos",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "No campo corporativo internacional, o período recente consolidou a transição da inteligência artificial generativa tradicional para a chamada IA Agêntica, isto é, sistemas capazes de tomar decisões e agir de forma autônoma em cadeias de suprimentos e processos empresariais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "IA Agêntica",
    cognitivo: {
      motivo: "Cobrar o conceito de IA Agêntica como evolução da IA generativa tradicional no ambiente corporativo.",
      palavraCritica: "agir de forma autônoma",
    },
    comentario: {
      resolucao: "CERTO. A IA Agêntica representa uma evolução da IA generativa tradicional, caracterizada pela capacidade de sistemas autônomos tomarem decisões e executarem ações — inclusive em cadeias de suprimentos e processos corporativos — com menor intervenção humana direta.",
      fundamento: "Acompanhamento de tecnologia — IA Agêntica no ambiente corporativo.",
      macete: "IA Agêntica = autonomia de decisão e ação, além da simples geração de conteúdo.",
      erroComum: "Tratar IA Agêntica como sinônimo de IA generativa tradicional.",
      comoBancaPensa: "Cobra a distinção conceitual entre dois estágios de evolução da inteligência artificial."
    }
  },

  /* ===== ECONOMIA E TECNOLOGIA ===== */
  {
    id: "AT-024", disciplina: "Atualidades", assunto: "Economia e Tecnologia", subassunto: "Fortuna e IPO da SpaceX",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "No cenário econômico e tecnológico recente, o bilionário Elon Musk atingiu a marca histórica de primeira pessoa a acumular uma fortuna de um trilhão de dólares, marco impulsionado pela aguardada Oferta Pública Inicial (IPO) da SpaceX.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "um trilhão de dólares",
    cognitivo: {
      motivo: "Cobrar fato econômico recente e de grande repercussão (primeiro trilionário do mundo).",
      palavraCritica: "trilhão de dólares",
    },
    comentario: {
      resolucao: "CERTO. Musk cruzou a marca em 12 de junho de 2026, quando a SpaceX abriu capital: a ação saiu a US$ 135, a oferta levantou cerca de US$ 85,7 bilhões e avaliou a empresa em torno de US$ 1,77 trilhão, o que levou a fortuna a aproximadamente US$ 1,1 trilhão. O detalhe que a banca adora explorar: ele permaneceu trilionário 12 dias — em 24 de junho já estava perto de US$ 957 bilhões. Fortuna assim é patrimônio em AÇÕES, não caixa, e oscila com a cotação. Item que descrevesse a marca como permanente, ou que falasse em dinheiro disponível, estaria ERRADO.",
      fundamento: "Acompanhamento de economia e tecnologia — fortunas pessoais e mercado de capitais.",
      macete: "Elon Musk + trilhão de dólares + IPO da SpaceX.",
      erroComum: "Associar o marco à Tesla ou a outra empresa de Elon Musk, em vez da SpaceX.",
      comoBancaPensa: "Cobra fato específico e recente, testando atualização do candidato sobre economia e tecnologia."
    }
  },

  /* ===== POLÍTICA SUL-AMERICANA 2026 ===== */
  {
    id: "AT-025", disciplina: "Atualidades", assunto: "Política Sul-Americana 2026", subassunto: "Eleições no Peru",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "Nas eleições gerais do Peru de 2026, a candidata Keiko Fujimori venceu o segundo turno contra Roberto Sánchez por uma diferença inferior a 1% dos votos válidos, em uma das disputas mais acirradas da história recente do país.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "inferior a 1%",
    cognitivo: {
      motivo: "Cobrar resultado eleitoral recente e específico da política sul-americana.",
      palavraCritica: "inferior a 1%",
    },
    comentario: {
      resolucao: "CERTO. Nas eleições gerais do Peru de 2026, Keiko Fujimori venceu o segundo turno contra Roberto Sánchez por margem inferior a 1% dos votos válidos, configurando uma das disputas mais acirradas da história eleitoral recente do país.",
      fundamento: "Acompanhamento de política internacional — eleições no Peru (2026).",
      macete: "Peru 2026 = disputa apertadíssima (Fujimori x Sánchez, <1%).",
      erroComum: "Confundir os nomes dos candidatos do segundo turno ou superestimar a margem de vitória.",
      comoBancaPensa: "Cobra fato eleitoral recente e específico, testando atualização do candidato."
    }
  },
  {
    id: "AT-026", disciplina: "Atualidades", assunto: "Política Sul-Americana 2026", subassunto: "Eleições na Colômbia",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "Na eleição presidencial colombiana de 2026, Gustavo Petro conquistou a autorização constitucional para concorrer à reeleição e derrotou Abelardo de La Espriella no segundo turno.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "autorização constitucional para concorrer à reeleição",
    cognitivo: {
      motivo: "Cobrar a regra constitucional colombiana que veda a reeleição presidencial imediata.",
      palavraCritica: "autorização constitucional",
    },
    comentario: {
      resolucao: "ERRADO. A Constituição colombiana não permite a reeleição presidencial imediata, de modo que Gustavo Petro não podia se recandidatar no pleito de 2026 — o item inventa uma autorização constitucional inexistente.",
      fundamento: "Acompanhamento de política internacional — eleições na Colômbia (2026); regra constitucional de vedação à reeleição imediata.",
      macete: "Colômbia = sem reeleição presidencial imediata.",
      erroComum: "Supor que todo presidente sul-americano pode tentar reeleição, ignorando regras constitucionais específicas de cada país.",
      comoBancaPensa: "Inventa uma exceção/autorização constitucional que não existe, testando conhecimento da regra real."
    }
  },

  /* ===== TRANSIÇÃO ENERGÉTICA ===== */
  {
    id: "AT-027", disciplina: "Atualidades", assunto: "Transição Energética", subassunto: "Impactos socioambientais das renováveis",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "A expansão das fontes renováveis de energia contribui para a redução das emissões de gases de efeito estufa, mas não elimina totalmente a possibilidade de impactos socioambientais associados à instalação de grandes empreendimentos energéticos. Com base nisso, é incorreto afirmar que toda fonte renovável é necessariamente isenta de impactos ambientais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não elimina totalmente",
    cognitivo: {
      motivo: "Evitar a idealização das energias renováveis como isentas de qualquer impacto socioambiental.",
      palavraCritica: "não elimina totalmente",
    },
    comentario: {
      resolucao: "CERTO. A expansão de fontes renováveis efetivamente reduz emissões de gases de efeito estufa, mas grandes empreendimentos energéticos — mesmo renováveis — ainda podem gerar impactos socioambientais (como no caso de hidrelétricas e parques eólicos/solares de grande porte), de modo que não é correto afirmar que toda fonte renovável é necessariamente isenta de impactos ambientais.",
      fundamento: "Acompanhamento de atualidades — transição energética e sustentabilidade.",
      macete: "Renovável ≠ automaticamente isento de qualquer impacto socioambiental.",
      erroComum: "Idealizar fontes renováveis como completamente livres de qualquer impacto ambiental.",
      comoBancaPensa: "Usa dupla negativa para testar a leitura atenta e evitar a idealização das renováveis."
    }
  },
  {
    id: "AT-028", disciplina: "Atualidades", assunto: "Transição Energética", subassunto: "Competitividade de solar e eólica",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "A crescente participação da energia solar e eólica na matriz elétrica mundial tem sido favorecida pelo avanço tecnológico e pela redução de custos, fatores que ampliam sua competitividade econômica em relação a diversas fontes fósseis.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "redução de custos",
    cognitivo: {
      motivo: "Cobrar a tendência de queda de custos e ganho de competitividade das renováveis frente às fósseis.",
      palavraCritica: "competitividade econômica",
    },
    comentario: {
      resolucao: "CERTO. O avanço tecnológico e a redução de custos têm ampliado a competitividade econômica da energia solar e eólica frente a fontes fósseis, tendência confirmada por relatórios recentes do setor energético que apontam projetos renováveis mais baratos que usinas fósseis.",
      fundamento: "Acompanhamento de atualidades — transição energética e custos de geração de energia.",
      macete: "Renováveis cada vez mais baratas = maior competitividade frente às fósseis.",
      erroComum: "Achar que renováveis ainda são, de forma geral, mais caras que fontes fósseis.",
      comoBancaPensa: "Cobra tendência factual e bem documentada, sem grandes armadilhas conceituais."
    }
  },
  {
    id: "AT-029", disciplina: "Atualidades", assunto: "Transição Energética", subassunto: "Minerais críticos e renováveis",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "Do ponto de vista econômico, a transição energética tende a reduzir a importância estratégica dos minerais utilizados na fabricação de baterias, painéis solares e turbinas eólicas, uma vez que as energias renováveis dependem apenas de recursos inesgotáveis.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "dependem apenas de recursos inesgotáveis",
    cognitivo: {
      motivo: "Evitar a confusão entre a fonte de energia (sol, vento — inesgotáveis) e os insumos materiais necessários para captá-la (minerais críticos — finitos).",
      palavraCritica: "apenas de recursos inesgotáveis",
    },
    comentario: {
      resolucao: "ERRADO. A transição energética, na verdade, AUMENTA a importância estratégica de minerais críticos como terras raras, lítio e cobalto, usados na fabricação de baterias, painéis solares e turbinas eólicas — esses insumos são recursos finitos, ao contrário da fonte energética (sol, vento) em si, que é inesgotável.",
      fundamento: "Acompanhamento de atualidades — transição energética e minerais críticos.",
      macete: "Fonte renovável é inesgotável; os minerais para captá-la NÃO são — e ganham importância geopolítica.",
      erroComum: "Confundir a natureza inesgotável da fonte (sol/vento) com a natureza dos insumos materiais da cadeia produtiva.",
      comoBancaPensa: "Explora a confusão entre \"energia renovável\" e \"cadeia produtiva livre de recursos finitos\"."
    }
  },
  {
    id: "AT-030", disciplina: "Atualidades", assunto: "Transição Energética", subassunto: "Segurança energética",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "A diversificação da matriz energética com fontes renováveis pode aumentar a segurança energética de um país ao reduzir a dependência de uma única fonte de energia e diminuir sua vulnerabilidade a crises de abastecimento.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "segurança energética",
    cognitivo: {
      motivo: "Cobrar a relação entre diversificação da matriz energética e segurança energética nacional.",
      palavraCritica: "reduzir a dependência",
    },
    comentario: {
      resolucao: "CERTO. A diversificação da matriz energética com fontes renováveis contribui para reduzir a dependência de uma única fonte de energia, o que aumenta a segurança energética de um país e diminui sua vulnerabilidade a crises de abastecimento.",
      fundamento: "Acompanhamento de atualidades — transição energética e segurança energética.",
      macete: "Diversificação de matriz = mais segurança energética.",
      erroComum: "Achar que depender de renováveis é, por si só, um risco maior que depender de uma única fonte fóssil.",
      comoBancaPensa: "Cobra conceito básico e bem estabelecido de política energética, sem grande armadilha."
    }
  },
  {
    id: "AT-031", disciplina: "Atualidades", assunto: "Transição Energética", subassunto: "Demanda por eletricidade e IA",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "Mesmo em um cenário de expansão das energias renováveis, o crescimento da demanda mundial por eletricidade, associado à digitalização da economia e à inteligência artificial, tem levado especialistas a defender que a transição energética ocorrerá de forma gradual, e não imediata.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "de forma gradual",
    cognitivo: {
      motivo: "Cobrar o entendimento de que a demanda crescente por energia (IA, data centers) torna a transição energética um processo gradual, não instantâneo.",
      palavraCritica: "gradual",
    },
    comentario: {
      resolucao: "CERTO. O crescimento da demanda mundial por eletricidade, impulsionado pela digitalização e pela inteligência artificial (data centers), reforça o entendimento de especialistas de que a transição energética global ocorrerá de forma gradual, e não imediata.",
      fundamento: "Acompanhamento de atualidades — transição energética e demanda energética da IA.",
      macete: "Mais demanda de energia (IA) = transição mais gradual.",
      erroComum: "Achar que a expansão das renováveis torna a transição energética um processo rápido e já concluído.",
      comoBancaPensa: "Cobra o entendimento técnico atual sobre o ritmo — gradual — da transição energética mundial."
    }
  },

  /* ===== TERRAS RARAS E MINERAIS CRÍTICOS ===== */
  {
    id: "AT-032", disciplina: "Atualidades", assunto: "Terras Raras e Minerais Críticos", subassunto: "Importância geopolítica",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "A crescente demanda por veículos elétricos, turbinas eólicas, semicondutores e equipamentos militares tem ampliado a importância geopolítica das terras raras e de outros minerais críticos, tornando-os objeto de disputas estratégicas entre grandes potências.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "disputas estratégicas",
    cognitivo: {
      motivo: "Cobrar a crescente relevância geopolítica das terras raras/minerais críticos frente à demanda tecnológica e militar.",
      palavraCritica: "objeto de disputas estratégicas",
    },
    comentario: {
      resolucao: "CERTO. O ponto geopolítico não é escassez geológica — terras raras são relativamente abundantes na crosta terrestre. O gargalo está no PROCESSAMENTO: a separação química é cara, ambientalmente pesada e fortemente concentrada na China, que domina a maior parte do refino mundial. Daí o risco de dependência para veículos elétricos, turbinas, semicondutores e defesa, e daí as políticas de diversificação de cadeia adotadas por Estados Unidos, União Europeia e Japão. O Brasil entra nessa conta por deter uma das maiores reservas conhecidas do planeta, tema recorrente em prova. Item que atribuísse a relevância à raridade dos minerais inverteria a causa.",
      fundamento: "Acompanhamento de atualidades — terras raras e minerais críticos.",
      macete: "Terras raras = tecnologia civil + militar = disputa geopolítica.",
      erroComum: "Restringir a importância das terras raras apenas ao setor de energia renovável, ignorando o componente militar/tecnológico.",
      comoBancaPensa: "Cobra visão ampla (civil + militar) da relevância estratégica dos minerais críticos."
    }
  },
  {
    id: "AT-033", disciplina: "Atualidades", assunto: "Terras Raras e Minerais Críticos", subassunto: "Diversificação de fornecedores",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "A concentração da produção e, principalmente, do processamento de terras raras em poucos países tem levado diversas nações a buscar fornecedores alternativos e a estabelecer novas parcerias internacionais para reduzir vulnerabilidades em suas cadeias de suprimento.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "fornecedores alternativos",
    cognitivo: {
      motivo: "Cobrar a reação estratégica de países frente à concentração da produção/processamento de terras raras na China.",
      palavraCritica: "reduzir vulnerabilidades",
    },
    comentario: {
      resolucao: "CERTO. A forte concentração da produção e, sobretudo, do processamento de terras raras em poucos países — com destaque para a China — tem levado diversas nações a buscar fornecedores alternativos e novas parcerias internacionais, como forma de reduzir vulnerabilidades em suas cadeias de suprimento.",
      fundamento: "Acompanhamento de atualidades — terras raras e minerais críticos.",
      macete: "Concentração produtiva em poucos países = movimento de diversificação de fornecedores por parte dos demais.",
      erroComum: "Achar que países dependentes de terras raras não reagem estrategicamente à concentração produtiva.",
      comoBancaPensa: "Cobra a lógica de resposta estratégica (diversificação) frente a uma vulnerabilidade de cadeia de suprimento."
    }
  },
  {
    id: "AT-034", disciplina: "Atualidades", assunto: "Terras Raras e Minerais Críticos", subassunto: "Reservas minerais e geopolítica",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "O aumento da relevância dos minerais críticos nas relações internacionais reduz a importância geopolítica de países detentores de grandes reservas minerais, uma vez que a transição energética depende do avanço tecnológico e não da disponibilidade de recursos naturais.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "reduz a importância geopolítica",
    cognitivo: {
      motivo: "Evitar a inversão lógica: mais relevância dos minerais críticos AUMENTA, e não reduz, a importância geopolítica de quem os possui.",
      palavraCritica: "reduz a importância geopolítica",
    },
    comentario: {
      resolucao: "ERRADO. O aumento da relevância dos minerais críticos nas relações internacionais, na verdade, AUMENTA a importância geopolítica dos países detentores de grandes reservas minerais — como o Brasil, que possui a segunda maior reserva mundial de terras raras —, já que a transição energética depende tanto do avanço tecnológico quanto da disponibilidade desses recursos naturais.",
      fundamento: "Acompanhamento de atualidades — terras raras e minerais críticos.",
      macete: "Minerais críticos relevantes = mais peso geopolítico para quem tem as reservas.",
      erroComum: "Achar que avanço tecnológico substitui a necessidade de recursos naturais/minerais.",
      comoBancaPensa: "Inverte a relação lógica entre relevância do recurso e importância geopolítica de quem o possui."
    }
  },

  /* ===== SEGURANÇA INTERNACIONAL ===== */
  {
    id: "AT-035", disciplina: "Atualidades", assunto: "Segurança Internacional", subassunto: "Política de segurança de Bukele (El Salvador)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "A política de segurança implementada pelo presidente Nayib Bukele em El Salvador baseia-se, entre outros aspectos, no estado de exceção, em prisões em massa e no enfraquecimento operacional de facções criminosas, medidas que contribuíram para a expressiva redução dos índices de homicídio no país.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "estado de exceção",
    cognitivo: {
      motivo: "Cobrar as características centrais da política de segurança de Bukele e seu efeito sobre os índices de homicídio.",
      palavraCritica: "redução dos índices de homicídio",
    },
    comentario: {
      resolucao: "CERTO. A política de segurança do presidente Nayib Bukele em El Salvador, baseada no estado de exceção, em prisões em massa e no enfraquecimento de facções criminosas, é amplamente associada à expressiva redução dos índices de homicídio no país nos últimos anos.",
      fundamento: "Acompanhamento de atualidades — segurança internacional (El Salvador).",
      macete: "Bukele = estado de exceção + prisões em massa + queda de homicídios.",
      erroComum: "Desconhecer a associação direta entre a política de Bukele e a queda dos índices de criminalidade salvadorenhos.",
      comoBancaPensa: "Cobra fato de segurança pública internacional amplamente noticiado, sem grande armadilha conceitual."
    }
  },
  {
    id: "AT-036", disciplina: "Atualidades", assunto: "Segurança Internacional", subassunto: "Crime organizado transnacional",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "O combate contemporâneo ao crime organizado internacional envolve exclusivamente ações policiais internas, sem necessidade de cooperação entre Estados, troca de inteligência ou coordenação para enfrentar redes transnacionais de tráfico de drogas, armas e pessoas.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "exclusivamente ações policiais internas",
    cognitivo: {
      motivo: "Cobrar a necessidade de cooperação internacional no combate ao crime organizado transnacional.",
      palavraCritica: "exclusivamente",
    },
    comentario: {
      resolucao: "ERRADO. O combate ao crime organizado internacional exige cooperação entre Estados, troca de inteligência e coordenação institucional, já que as redes de tráfico de drogas, armas e pessoas atuam de forma transnacional — ações policiais puramente internas e isoladas não são suficientes para seu enfrentamento.",
      fundamento: "Acompanhamento de atualidades — segurança internacional e crime organizado transnacional.",
      macete: "Crime transnacional = cooperação internacional obrigatória, nunca só ação interna.",
      erroComum: "Subestimar o caráter transnacional das redes de crime organizado contemporâneas.",
      comoBancaPensa: "Usa a palavra \"exclusivamente\" para restringir indevidamente uma realidade que exige cooperação internacional."
    }
  },
  {
    id: "AT-037", disciplina: "Atualidades", assunto: "Segurança Internacional", subassunto: "Crime organizado transnacional",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "A crescente atuação de facções criminosas em mais de um país reforça a percepção de que a criminalidade organizada deixou de ser apenas um problema de segurança pública interna, assumindo também relevância geopolítica e de segurança internacional.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "relevância geopolítica",
    cognitivo: {
      motivo: "Reforçar, em sentido oposto ao item anterior, a dimensão internacional/geopolítica do crime organizado contemporâneo.",
      palavraCritica: "relevância geopolítica",
    },
    comentario: {
      resolucao: "CERTO. A atuação de facções criminosas em mais de um país reforça a compreensão de que a criminalidade organizada transnacional não é apenas uma questão de segurança pública interna, mas também assume relevância geopolítica e de segurança internacional.",
      fundamento: "Acompanhamento de atualidades — segurança internacional e crime organizado transnacional.",
      macete: "Facção transnacional = segurança pública interna + segurança internacional/geopolítica.",
      erroComum: "Julgar este item como errado por associação com itens anteriores incorretos sobre o mesmo tema.",
      comoBancaPensa: "Intercala itens corretos e incorretos sobre o mesmo assunto para testar a leitura independente de cada item."
    }
  },

  /* ===== CAPITALISMO DE PLATAFORMA E TECNOLOGIA ===== */
  {
    id: "AT-038", disciplina: "Atualidades", assunto: "Capitalismo de Plataforma e Tecnologia", subassunto: "Modelo de negócio das plataformas digitais",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "No capitalismo de plataforma, empresas digitais atuam como intermediárias entre prestadores de serviços e consumidores, obtendo vantagens econômicas por meio do controle de dados, algoritmos e redes de usuários, mesmo sem necessariamente possuir os ativos físicos utilizados na prestação do serviço.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sem necessariamente possuir os ativos físicos",
    cognitivo: {
      motivo: "Cobrar a característica central do capitalismo de plataforma: lucro via dados/algoritmos, sem posse dos ativos físicos.",
      palavraCritica: "sem necessariamente possuir",
    },
    comentario: {
      resolucao: "CERTO. É o modelo asset-light: a plataforma não é dona dos carros, dos imóveis nem dos entregadores — ela é dona da INTERMEDIAÇÃO. O que rende é o dado e o efeito de rede: quanto mais usuários de um lado, mais valiosa ela fica para o outro lado, e essa espiral cria poder de mercado sem posse física. Repare no advérbio: \"sem NECESSARIAMENTE possuir\". É ele que mantém o item correto, porque há plataformas que investem pesado em logística própria. Item que afirmasse que plataformas digitais \"nunca\" detêm ativos físicos estaria ERRADO.",
      fundamento: "Acompanhamento de atualidades — capitalismo de plataforma.",
      macete: "Plataforma digital = lucra com dados/algoritmos, não necessariamente com posse de ativos físicos.",
      erroComum: "Achar que uma grande empresa de aplicativo precisa ser dona dos ativos (carros, imóveis) que conecta.",
      comoBancaPensa: "Cobra o conceito central e bem estabelecido do capitalismo de plataforma."
    }
  },
  {
    id: "AT-039", disciplina: "Atualidades", assunto: "Capitalismo de Plataforma e Tecnologia", subassunto: "Uberização do trabalho",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "A chamada uberização do trabalho está associada ao aumento da formalização das relações trabalhistas, garantindo estabilidade contratual e ampliação automática dos direitos sociais dos trabalhadores.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "aumento da formalização",
    cognitivo: {
      motivo: "Cobrar o real efeito da uberização sobre as relações de trabalho: precarização, e não formalização.",
      palavraCritica: "formalização",
    },
    comentario: {
      resolucao: "ERRADO. A uberização do trabalho está associada à precarização das relações trabalhistas — marcada pela ausência de vínculo empregatício tradicional, de estabilidade contratual e de garantia automática de direitos sociais —, e não ao aumento da formalização, como afirma o item.",
      fundamento: "Acompanhamento de atualidades — capitalismo de plataforma e mercado de trabalho (uberização).",
      macete: "Uberização = precarização, não formalização.",
      erroComum: "Achar que trabalhar via aplicativo/plataforma equivale a uma relação de trabalho formal e protegida.",
      comoBancaPensa: "Inverte o efeito real da uberização (precarização) para o seu oposto (formalização)."
    }
  },
  {
    id: "AT-040", disciplina: "Atualidades", assunto: "Capitalismo de Plataforma e Tecnologia", subassunto: "Terciarização da economia",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "O avanço do setor de serviços nas economias contemporâneas, processo conhecido como terciarização, está relacionado tanto à difusão das tecnologias da informação quanto à crescente importância das atividades financeiras, logísticas, educacionais, de saúde e de entretenimento.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "terciarização",
    cognitivo: {
      motivo: "Cobrar o conceito de terciarização da economia e seus fatores associados.",
      palavraCritica: "terciarização",
    },
    comentario: {
      resolucao: "CERTO. Dois vetores explicam o avanço do setor terciário: as tecnologias da informação, que permitiram vender serviços à distância e criaram serviços que antes não existiam, e a financeirização, que alçou a intermediação à condição de atividade econômica central. A nuance que a banca explora: terciarização NÃO significa que a indústria encolheu em volume produzido — significa que sua participação RELATIVA no PIB e no emprego caiu. Item que convertesse queda de participação relativa em queda absoluta da produção industrial estaria ERRADO.",
      fundamento: "Acompanhamento de atualidades — economia de serviços e terciarização.",
      macete: "Terciarização = serviços em alta, turbinados por TI, em múltiplos setores.",
      erroComum: "Restringir o conceito de terciarização a um único setor da economia.",
      comoBancaPensa: "Cobra conceito econômico amplo e bem estabelecido, sem grande armadilha."
    }
  },
  {
    id: "AT-041", disciplina: "Atualidades", assunto: "Capitalismo de Plataforma e Tecnologia", subassunto: "Algoritmos e redes sociais",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "Nas redes sociais digitais, os algoritmos possuem papel relevante na seleção e organização dos conteúdos visualizados pelos usuários, podendo influenciar padrões de consumo, comportamento político e circulação de informações.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "algoritmos",
    cognitivo: {
      motivo: "Cobrar o papel dos algoritmos na curadoria de conteúdo e seus efeitos sociais/políticos.",
      palavraCritica: "influenciar padrões de consumo, comportamento político",
    },
    comentario: {
      resolucao: "CERTO. Nas redes sociais digitais, os algoritmos de recomendação desempenham papel central na seleção e organização dos conteúdos exibidos aos usuários, podendo influenciar desde padrões de consumo até comportamento político e a circulação de informações.",
      fundamento: "Acompanhamento de atualidades — tecnologia, redes sociais e algoritmos.",
      macete: "Algoritmo de rede social influencia consumo, política e circulação de informação — não só entretenimento.",
      erroComum: "Restringir o papel dos algoritmos apenas ao entretenimento/consumo, ignorando efeitos políticos e informacionais.",
      comoBancaPensa: "Cobra visão ampla e atual do papel dos algoritmos na sociedade digital."
    }
  },
  {
    id: "AT-042", disciplina: "Atualidades", assunto: "Capitalismo de Plataforma e Tecnologia", subassunto: "Conceito de Big Data",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "O conceito de Big Data refere-se apenas ao armazenamento de grandes quantidades de dados, não possuindo relação com questões ambientais, econômicas ou de governança pública.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "refere-se apenas ao armazenamento",
    cognitivo: {
      motivo: "Evitar a redução do conceito de Big Data a um mero armazenamento de dados, ignorando suas implicações mais amplas.",
      palavraCritica: "apenas",
    },
    comentario: {
      resolucao: "ERRADO. O conceito de Big Data vai além do simples armazenamento de grandes volumes de dados, abrangendo também seu processamento e análise, com implicações relevantes em questões ambientais (como o consumo energético de data centers), econômicas e de governança pública.",
      fundamento: "Acompanhamento de atualidades — tecnologia e Big Data.",
      macete: "Big Data = volume + processamento + análise, com impactos econômicos/ambientais/de governança.",
      erroComum: "Reduzir Big Data a um conceito puramente técnico de armazenamento de dados.",
      comoBancaPensa: "Usa a palavra \"apenas\" para restringir indevidamente um conceito amplo e multidimensional."
    }
  },

  /* ===== ORIENTE MÉDIO ===== */
  {
    id: "AT-043", disciplina: "Atualidades", assunto: "Oriente Médio", subassunto: "Israel, Irã e atores não estatais",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Atualidades 2025/2026, adaptado de material de revisão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.75,
    enunciado: "A intensificação dos confrontos entre Israel e grupos armados apoiados pelo Irã evidencia uma contradição estratégica: embora Teerã utilize atores não estatais como instrumento de projeção regional de poder, sua doutrina de segurança permanece baseada exclusivamente na dissuasão indireta, excluindo a possibilidade de ações militares conduzidas diretamente por forças iranianas contra o território israelense.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "exclusivamente na dissuasão indireta",
    cognitivo: {
      motivo: "Evitar a ideia de que o Irã atua apenas por meio de proxies (atores não estatais), sem nunca agir militarmente de forma direta.",
      palavraCritica: "exclusivamente",
    },
    comentario: {
      resolucao: "ERRADO. O Irã combina o uso de atores não estatais (proxies) como instrumento de projeção regional de poder com ações militares diretas contra Israel, de modo que sua doutrina de segurança não se baseia exclusivamente na dissuasão indireta, como afirma o item.",
      fundamento: "Acompanhamento de atualidades — geopolítica do Oriente Médio (conflito Israel–Irã).",
      macete: "Irã = proxies + ação militar direta (não é uma coisa exclui a outra).",
      erroComum: "Achar que o Irã atua apenas por meio de grupos armados apoiados, nunca diretamente.",
      comoBancaPensa: "Usa a palavra \"exclusivamente\" para restringir indevidamente uma estratégia geopolítica que combina múltiplos instrumentos."
    }
  }
];

QUESTOES.push(...QUESTOES_PCAL_LOTE52);
