/* =====================================================================
   QUESTLAB — Lote 135: ATUALIDADES, QAPs DO CURSO DSO (módulo 08)

   ORIGEM: quatro cadernos do módulo 08 (78 questões). Os 43 itens do
   QAP geral e do caderno "Internacional" já estavam no banco (lote 52,
   AT-001 a AT-043) e só ganharam a anotação de origem. Entram aqui as
   questões dos dois cadernos de "Atualidades Nacionais" e o item 20 do
   caderno "Internacional".

   MÉTODO: os cadernos não indicam banca nem prova; todos os itens foram
   reescritos com redação própria, mantendo o ponto cobrado e o gabarito
   do material. As questões de múltipla escolha (e a de V/F) viraram itens
   C/E construídos sobre a alternativa correta ou sobre um distrator; duas
   delas renderam dois itens. Comentários escritos do zero.

   DADO PERECÍVEL: os itens se ancoram em fatos datados (2025–2026);
   evite reler como "situação atual" depois da prova de 06/12/2026.
   ===================================================================== */

const BASE135 = {
  concurso: "PCAL", cargo: ["Escrivão", "Agente"], ano: 2026,
  tipo: "CE", probReaparecer: 0.75,
  disciplina: "Atualidades",
};

const QUESTOES_PCAL_LOTE135 = [

  /* ===== ECONOMIA E COMÉRCIO EXTERIOR ===== */

  {
    ...BASE135,
    id: "AT-069", assunto: "Economia e Comércio Exterior",
    subassunto: "Margem Equatorial — nova fronteira do petróleo",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "A chamada Margem Equatorial, faixa do litoral norte brasileiro que se estende do Amapá ao Rio Grande do Norte, é vista como nova fronteira para a exploração de petróleo e gás, e sua geologia costuma ser comparada à de áreas produtoras da costa oeste da África.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "costa ocidental africana",
    cognitivo: {
      motivo: "Reconhecer o ponto: margem Equatorial — nova fronteira do petróleo.",
      palavraCritica: "costa ocidental africana",
    },
    comentario: {
      resolucao: "CERTO. A Margem Equatorial reúne as bacias da Foz do Amazonas, Pará-Maranhão, Barreirinhas, Ceará e Potiguar. O interesse vem da semelhança geológica com a costa oeste africana (Gana, Costa do Marfim) e com a Guiana, onde houve grandes descobertas — os dois lados do Atlântico eram contíguos antes da separação dos continentes. A exploração, porém, é cercada de debate ambiental, por estar próxima à foz do Amazonas.",
      fundamento: "Atualidades — energia e petróleo no Brasil.",
      macete: "Margem Equatorial = 'novo pré-sal' do Norte/Nordeste; geologia gêmea da África Ocidental.",
      erroComum: "Achar que a comparação com a África é só retórica, sem base geológica.",
      comoBancaPensa: "Afirmação ampla, mas toda ela verdadeira — a banca testa se o candidato desconfia sem motivo.",
    },
  },

  {
    ...BASE135,
    id: "AT-070", assunto: "Economia e Comércio Exterior",
    subassunto: "Selic como instrumento contra a inflação",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "No regime de metas de inflação, a elevação da taxa Selic pelo Comitê de Política Monetária (Copom) busca conter pressões inflacionárias, pois encarece o crédito e desestimula parte do consumo e do investimento.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "encarece o crédito",
    cognitivo: {
      motivo: "Reconhecer o ponto: selic como instrumento contra a inflação.",
      palavraCritica: "encarece o crédito",
    },
    comentario: {
      resolucao: "CERTO. A Selic é o principal instrumento de política monetária do Banco Central. Juros mais altos tornam o crédito mais caro e a poupança mais atraente, o que reduz a demanda por bens e serviços e alivia os preços. O efeito colateral é a desaceleração da atividade econômica. Quem fixa a meta de inflação é o Conselho Monetário Nacional; o Copom fixa a Selic para persegui-la.",
      fundamento: "Política monetária — regime de metas de inflação.",
      macete: "Selic sobe → crédito caro → consumo cai → inflação desacelera.",
      erroComum: "Confundir política monetária (juros) com política fiscal (gasto e tributo).",
      comoBancaPensa: "Cobra o mecanismo de transmissão dos juros, tema fixo em Atualidades econômicas.",
    },
  },

  {
    ...BASE135,
    id: "AT-071", assunto: "Economia e Comércio Exterior",
    subassunto: "Reforma Tributária — CBS e IBS",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Pela Reforma Tributária do consumo, o PIS e a Cofins serão substituídos pelo IBS, ao passo que o ICMS e o ISS darão lugar à CBS.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "IBS",
    cognitivo: {
      motivo: "Reconhecer o ponto: reforma Tributária — CBS e IBS.",
      palavraCritica: "IBS",
    },
    comentario: {
      resolucao: "ERRADO. Os tributos estão trocados. A CBS (Contribuição sobre Bens e Serviços) é federal e substitui o PIS e a Cofins. O IBS (Imposto sobre Bens e Serviços) é compartilhado por estados e municípios e substitui o ICMS e o ISS. O IPI será zerado (salvo para proteger a Zona Franca de Manaus) e surge o Imposto Seletivo sobre bens prejudiciais à saúde ou ao meio ambiente. A transição vai de 2026 a 2033.",
      fundamento: "EC 132/2023 e LC 214/2025 — Reforma Tributária do consumo.",
      macete: "CBS = Contribuição = União (PIS/Cofins). IBS = Imposto dos estados e municípios (ICMS/ISS).",
      erroComum: "Decorar as siglas sem saber qual ente cobra cada uma.",
      comoBancaPensa: "Inverte os pares tributo novo → tributos extintos.",
    },
  },

  {
    ...BASE135,
    id: "AT-072", assunto: "Economia e Comércio Exterior",
    subassunto: "Acordo Mercosul–União Europeia",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "O acordo entre o Mercosul e a União Europeia prevê eliminar ou reduzir, de forma gradual, as tarifas sobre grande parte do comércio entre os blocos, mas enfrenta resistência em parte dos países europeus, sobretudo por pressão do setor agrícola.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "resistências políticas",
    cognitivo: {
      motivo: "Reconhecer o ponto: acordo Mercosul–União Europeia.",
      palavraCritica: "resistências políticas",
    },
    comentario: {
      resolucao: "CERTO. O acordo, negociado por mais de duas décadas, prevê desgravação tarifária gradual para a maior parte do comércio birregional. Do lado europeu, a resistência mais forte vem de produtores rurais, que temem a concorrência da carne e de outros produtos agrícolas do Mercosul, e de países como a França, que também invocam exigências ambientais.",
      fundamento: "Atualidades — comércio internacional e blocos econômicos.",
      macete: "Mercosul–UE: abre mercados aos poucos; trava na agricultura europeia.",
      erroComum: "Achar que o acordo zera todas as tarifas de imediato.",
      comoBancaPensa: "Afirmação equilibrada (benefício + resistência) e verdadeira.",
    },
  },

  {
    ...BASE135,
    id: "AT-073", assunto: "Economia e Comércio Exterior",
    subassunto: "China como principal destino das exportações",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "A China perdeu o posto de principal destino das exportações brasileiras, em razão do predomínio dos produtos manufaturados na pauta exportadora nacional.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "deixou de ocupar",
    cognitivo: {
      motivo: "Reconhecer o ponto: china como principal destino das exportações.",
      palavraCritica: "deixou de ocupar",
    },
    comentario: {
      resolucao: "ERRADO. A China segue como o principal destino das exportações do Brasil, com cerca de um quarto a um terço do total, à frente dos Estados Unidos e da União Europeia. E a pauta continua dominada por commodities — soja, petróleo bruto e minério de ferro —, não por manufaturados. O item erra as duas pontas.",
      fundamento: "Atualidades — comércio exterior brasileiro.",
      macete: "Brasil exporta commodities, e o maior comprador é a China.",
      erroComum: "Confundir o tarifaço norte-americano com perda de posição da China.",
      comoBancaPensa: "Inventa uma mudança estrutural e lhe dá uma causa também falsa.",
    },
  },

  {
    ...BASE135,
    id: "AT-074", assunto: "Economia e Comércio Exterior",
    subassunto: "Tarifas norte-americanas sobre o aço",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E; item de V/F do caderno (primeira afirmativa); as outras já estavam no banco (AT-020)",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Durante o governo Trump, os Estados Unidos passaram a cobrar tarifas adicionais sobre produtos importados do Brasil, entre eles o aço.",
    gabarito: "C",
    pegadinha: "troca-sujeito",
    palavraChave: "aço",
    cognitivo: {
      motivo: "Reconhecer o ponto: tarifas norte-americanas sobre o aço.",
      palavraCritica: "aço",
    },
    comentario: {
      resolucao: "CERTO. O governo Trump impôs sobretaxas sobre o aço e o alumínio importados (Seção 232), que atingiram o Brasil, um dos maiores fornecedores de aço semiacabado aos EUA, e depois adotou tarifas adicionais específicas sobre outros produtos brasileiros. O objetivo declarado era proteger a indústria norte-americana, e não facilitar a entrada de bens estrangeiros.",
      fundamento: "Atualidades — política tarifária dos EUA e comércio Brasil–EUA.",
      macete: "Tarifa = proteção da indústria doméstica; o aço foi um dos primeiros alvos.",
      erroComum: "Achar que tarifa de importação serve para facilitar o comércio.",
      comoBancaPensa: "Cobra um fato central do protecionismo recente.",
    },
  },

  /* ===== MEIO AMBIENTE E ENERGIA ===== */

  {
    ...BASE135,
    id: "AT-075", assunto: "Meio Ambiente e Energia",
    subassunto: "Desmatamento da Amazônia e compromissos climáticos",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Com a realização da COP30 em Belém, a redução do desmatamento na Amazônia firmou-se como um dos compromissos centrais do Brasil nas negociações sobre o clima, dado o papel da floresta na regulação climática e no estoque de carbono.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "armazenamento de carbono",
    cognitivo: {
      motivo: "Reconhecer o ponto: desmatamento da Amazônia e compromissos climáticos.",
      palavraCritica: "armazenamento de carbono",
    },
    comentario: {
      resolucao: "CERTO. No perfil de emissões brasileiro, o desmatamento é a principal fonte de gases de efeito estufa, diferentemente dos países industrializados, em que pesa mais a queima de combustíveis fósseis. Por isso, conter o desmate é o núcleo da meta climática do país (NDC) e foi um eixo da agenda brasileira na COP30, ao lado do fundo Florestas Tropicais para Sempre (TFFF).",
      fundamento: "Atualidades — COP30 e política climática brasileira.",
      macete: "Brasil emite mais pelo desmatamento do que pela energia.",
      erroComum: "Tratar a Amazônia só como tema de biodiversidade, esquecendo o carbono.",
      comoBancaPensa: "Item amplo e verdadeiro sobre o eixo da diplomacia climática do país.",
    },
  },

  {
    ...BASE135,
    id: "AT-076", assunto: "Meio Ambiente e Energia",
    subassunto: "Hidrogênio verde — fontes renováveis",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 50,
    enunciado: "O hidrogênio verde é obtido exclusivamente com eletricidade de origem solar fotovoltaica; por isso, projetos abastecidos por parques eólicos ficam fora dessa classificação.",
    gabarito: "E",
    pegadinha: "termo-absoluto",
    palavraChave: "exclusivamente",
    cognitivo: {
      motivo: "Reconhecer o ponto: hidrogênio verde — fontes renováveis.",
      palavraCritica: "exclusivamente",
    },
    comentario: {
      resolucao: "ERRADO. Hidrogênio verde é o produzido por eletrólise da água com eletricidade de fonte renovável — eólica, solar, hidráulica ou outras. O Nordeste atrai esses projetos justamente por combinar potencial eólico e solar com portos voltados à exportação, como o do Pecém (CE). Não há restrição à energia solar.",
      fundamento: "Atualidades — transição energética e hidrogênio de baixo carbono.",
      macete: "Verde = eletrólise + qualquer fonte renovável.",
      erroComum: "Associar 'verde' a uma única tecnologia.",
      comoBancaPensa: "Usa o 'exclusivamente' para restringir um conceito amplo.",
    },
  },

  {
    ...BASE135,
    id: "AT-077", assunto: "Meio Ambiente e Energia",
    subassunto: "Baterias de estado sólido e reservas de lítio",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "A bateria de estado sólido promete ampliar a autonomia dos carros elétricos, mas o obstáculo central dessa tecnologia é que as reservas de lítio se concentram em países subdesenvolvidos governados por regimes totalitários.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "governos totalitários",
    cognitivo: {
      motivo: "Reconhecer o ponto: baterias de estado sólido e reservas de lítio.",
      palavraCritica: "governos totalitários",
    },
    comentario: {
      resolucao: "ERRADO. A primeira parte é plausível: as baterias de estado sólido prometem mais densidade energética. A segunda é falsa: as maiores reservas e a maior produção de lítio estão em países como Chile, Austrália e Argentina — democracias, e a Austrália é país desenvolvido. O Brasil também tem reservas relevantes, no Vale do Jequitinhonha (MG). Os entraves das baterias sólidas são sobretudo de custo e de escala industrial.",
      fundamento: "Atualidades — minerais críticos e veículos elétricos.",
      macete: "Lítio: Austrália, Chile, Argentina (e Brasil) — nada de 'regimes totalitários'.",
      erroComum: "Aceitar o item inteiro porque o começo é verdadeiro.",
      comoBancaPensa: "Junta um dado tecnológico correto a uma generalização geopolítica falsa.",
    },
  },

  {
    ...BASE135,
    id: "AT-078", assunto: "Meio Ambiente e Energia",
    subassunto: "Hidrogênio como combustível — barreira de custo",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "O uso do hidrogênio como combustível e como vetor energético já é tecnicamente conhecido há bastante tempo, mas o custo de produção ainda impede sua adoção em larga escala.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "custos",
    cognitivo: {
      motivo: "Reconhecer o ponto: hidrogênio como combustível — barreira de custo.",
      palavraCritica: "custos",
    },
    comentario: {
      resolucao: "CERTO. Células a combustível e processos de eletrólise existem há décadas — foram usados até em programas espaciais. O que trava a difusão é econômico: o hidrogênio de baixa emissão ainda custa mais que os combustíveis fósseis, e faltam infraestrutura de transporte e armazenamento e demanda garantida.",
      fundamento: "Atualidades — transição energética.",
      macete: "Tecnologia antiga, gargalo de custo.",
      erroComum: "Achar que o hidrogênio é tecnologia recém-inventada.",
      comoBancaPensa: "Separa o domínio técnico da viabilidade econômica.",
    },
  },

  {
    ...BASE135,
    id: "AT-079", assunto: "Meio Ambiente e Energia",
    subassunto: "Acordo de Paris — metas sem sanção",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 60,
    enunciado: "O Acordo de Paris fixa metas de redução de emissões de gases de efeito estufa, mas, por respeitar a soberania dos Estados, não prevê sanções internacionais capazes de obrigar um país em desenvolvimento, como o Brasil, a cumprir seus compromissos no prazo.",
    gabarito: "C",
    pegadinha: "exigencia-inexistente",
    palavraChave: "sanções internacionais efetivas",
    cognitivo: {
      motivo: "Reconhecer o ponto: acordo de Paris — metas sem sanção.",
      palavraCritica: "sanções internacionais efetivas",
    },
    comentario: {
      resolucao: "CERTO. No Acordo de Paris, cada país define a própria meta (a NDC, contribuição nacionalmente determinada). O tratado obriga a apresentar e atualizar as metas e a prestar contas, mas não pune quem não as atinge: o comitê de cumprimento tem caráter facilitador, não sancionatório. A pressão é política e reputacional.",
      fundamento: "Acordo de Paris (2015) — contribuições nacionalmente determinadas.",
      macete: "Paris = metas próprias + transparência, sem multa.",
      erroComum: "Supor que o descumprimento gera sanção econômica automática.",
      comoBancaPensa: "Explora a diferença entre compromisso e mecanismo de coerção.",
    },
  },

  {
    ...BASE135,
    id: "AT-080", assunto: "Meio Ambiente e Energia",
    subassunto: "Renováveis como alternativa ao petróleo",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Fontes renováveis como a solar e a eólica figuram como alternativas sustentáveis ao petróleo, que ainda ocupa lugar de destaque na matriz energética mundial.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "substitutas sustentáveis",
    cognitivo: {
      motivo: "Reconhecer o ponto: renováveis como alternativa ao petróleo.",
      palavraCritica: "substitutas sustentáveis",
    },
    comentario: {
      resolucao: "CERTO. O petróleo ainda é a principal fonte da matriz energética mundial, e as fontes solar e eólica são as que mais crescem, apontadas como substitutas de menor impacto. A substituição é gradual e depende de armazenamento e de redes, mas o item não diz que ela já ocorreu.",
      fundamento: "Atualidades — matriz energética e transição.",
      macete: "Item genérico e correto: não procure erro onde não há.",
      erroComum: "Marcar errado por achar que 'sustentável' significa 'sem impacto'.",
      comoBancaPensa: "Afirmação ampla e verdadeira, sem palavra absoluta.",
    },
  },

  {
    ...BASE135,
    id: "AT-081", assunto: "Meio Ambiente e Energia",
    subassunto: "Acordos de Abraão e a questão palestina",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Os Acordos de Abraão, ao normalizar as relações de Israel com alguns países árabes, superaram o principal entrave à integração do Oriente Médio, de modo que a questão palestina deixou de pesar na estabilidade da região.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "deixou de constituir",
    cognitivo: {
      motivo: "Reconhecer o ponto: acordos de Abraão e a questão palestina.",
      palavraCritica: "deixou de constituir",
    },
    comentario: {
      resolucao: "ERRADO. Os Acordos de Abraão (2020) normalizaram as relações de Israel com Emirados Árabes Unidos, Bahrein, Marrocos e Sudão. Mas não resolveram a questão palestina, que voltou ao centro da crise com o ataque do Hamas em 7 de outubro de 2023 e a guerra em Gaza. A Arábia Saudita, por exemplo, condiciona a normalização a um caminho para o Estado palestino.",
      fundamento: "Atualidades — geopolítica do Oriente Médio.",
      macete: "Abraão aproximou Israel e árabes; a Palestina continua no centro.",
      erroComum: "Achar que acordo diplomático parcial resolve o conflito de fundo.",
      comoBancaPensa: "Parte de um fato real e tira dele uma conclusão exagerada.",
    },
  },

  /* ===== SEGURANÇA PÚBLICA ===== */

  {
    ...BASE135,
    id: "AT-082", assunto: "Segurança Pública",
    subassunto: "Anuário — desigualdade territorial da violência letal",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Os dados de violência letal reunidos pelo Anuário Brasileiro de Segurança Pública revelam desigualdades territoriais e sociais na distribuição dos homicídios, que não se repartem de modo homogêneo por todo o território nacional.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "desigualdades territoriais",
    cognitivo: {
      motivo: "Reconhecer o ponto: anuário — desigualdade territorial da violência letal.",
      palavraCritica: "desigualdades territoriais",
    },
    comentario: {
      resolucao: "CERTO. As taxas variam muito entre regiões, estados e municípios — Norte e Nordeste concentram as mais altas — e as vítimas têm perfil marcado: sobretudo homens jovens e negros. O Anuário mostra justamente essa concentração, o que orienta políticas focalizadas.",
      fundamento: "Anuário Brasileiro de Segurança Pública (FBSP).",
      macete: "Violência letal no Brasil tem endereço, idade, sexo e cor.",
      erroComum: "Achar que a média nacional descreve bem qualquer região.",
      comoBancaPensa: "Afirmação ampla e verdadeira sobre o retrato do Anuário.",
    },
  },

  {
    ...BASE135,
    id: "AT-083", assunto: "Segurança Pública",
    subassunto: "Anuário — fontes de dados",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "O Anuário Brasileiro de Segurança Pública restringe-se aos registros de ocorrência das secretarias estaduais de segurança, sem recorrer a outras bases públicas nem a pesquisas próprias.",
    gabarito: "E",
    pegadinha: "restricao-indevida",
    palavraChave: "restringe-se",
    cognitivo: {
      motivo: "Reconhecer o ponto: anuário — fontes de dados.",
      palavraCritica: "restringe-se",
    },
    comentario: {
      resolucao: "ERRADO. Os registros das secretarias estaduais são a base, mas o Anuário cruza esses dados com outras fontes — como o Sistema de Informações sobre Mortalidade (SIM/DataSUS), dados do sistema prisional e de órgãos federais — e com pesquisas do próprio Fórum Brasileiro de Segurança Pública, como as de vitimização. Não se restringe às ocorrências policiais.",
      fundamento: "Anuário Brasileiro de Segurança Pública (FBSP) — metodologia.",
      macete: "Anuário = várias fontes cruzadas, não só boletim de ocorrência.",
      erroComum: "Confundir o Anuário com uma estatística policial pura.",
      comoBancaPensa: "Restringe a uma só fonte a base de dados de um levantamento plural.",
    },
  },

  {
    ...BASE135,
    id: "AT-084", assunto: "Segurança Pública",
    subassunto: "Mortes Violentas Intencionais — composição",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 55,
    enunciado: "Para compor o indicador de Mortes Violentas Intencionais (MVI), o Anuário Brasileiro de Segurança Pública classifica as mortes decorrentes de intervenção policial como homicídios dolosos.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "homicídios dolosos",
    cognitivo: {
      motivo: "Reconhecer o ponto: mortes Violentas Intencionais — composição.",
      palavraCritica: "homicídios dolosos",
    },
    comentario: {
      resolucao: "ERRADO. O indicador de MVI é a soma de quatro categorias distintas: homicídio doloso, latrocínio, lesão corporal seguida de morte e mortes decorrentes de intervenção policial (MDIP). As mortes por intervenção policial entram no MVI como categoria própria, e não reclassificadas como homicídio doloso.",
      fundamento: "Anuário Brasileiro de Segurança Pública — metodologia do MVI.",
      macete: "MVI = homicídio doloso + latrocínio + lesão seguida de morte + MDIP.",
      erroComum: "Achar que 'estar no MVI' significa 'ser homicídio doloso'.",
      comoBancaPensa: "Confunde soma de categorias com reclassificação.",
    },
  },

  {
    ...BASE135,
    id: "AT-085", assunto: "Segurança Pública",
    subassunto: "Anuário 2025 — mortes causadas por policiais",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Segundo o Anuário Brasileiro de Segurança Pública de 2025, com dados de 2023 e 2024, a redução das mortes violentas intencionais conviveu com o fato de parte relevante dessas mortes ter sido causada por policiais.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "intervenção policial",
    cognitivo: {
      motivo: "Reconhecer o ponto: anuário 2025 — mortes causadas por policiais.",
      palavraCritica: "intervenção policial",
    },
    comentario: {
      resolucao: "CERTO. Mesmo com a queda das MVI, as mortes decorrentes de intervenção policial seguiram em patamar alto — na casa de 6 mil por ano, cerca de uma em cada sete mortes violentas intencionais. É o dado que o Anuário destaca como ponto de atenção.",
      fundamento: "Anuário Brasileiro de Segurança Pública 2025 (FBSP).",
      macete: "Queda geral das MVI, mas letalidade policial ainda alta.",
      erroComum: "Supor que a queda das MVI se repetiu em todas as categorias.",
      comoBancaPensa: "Cobra o contraponto ao dado positivo.",
    },
  },

  {
    ...BASE135,
    id: "AT-086", assunto: "Segurança Pública",
    subassunto: "Operação Contenção (Rio de Janeiro, 2025)",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Operação Contenção foi o nome da ação policial deflagrada pelo governo do Rio de Janeiro em 28 de outubro de 2025 nos complexos da Penha e do Alemão, contra o Comando Vermelho.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "28 de outubro de 2025",
    cognitivo: {
      motivo: "Reconhecer o ponto: operação Contenção (Rio de Janeiro, 2025).",
      palavraCritica: "28 de outubro de 2025",
    },
    comentario: {
      resolucao: "CERTO. A Operação Contenção mobilizou cerca de 2.500 agentes, com blindados, helicópteros e drones, e terminou com dezenas de mortos, entre suspeitos e policiais — a operação policial mais letal da história do estado. Gerou críticas de entidades de direitos humanos e debate sobre o planejamento e a proporcionalidade da ação.",
      fundamento: "Atualidades — segurança pública no Rio de Janeiro.",
      macete: "Contenção + Penha/Alemão + CV + outubro de 2025.",
      erroComum: "Confundir com operações anteriores no mesmo complexo.",
      comoBancaPensa: "Cobra nome, data e alvo de fato de grande repercussão.",
    },
  },

  {
    ...BASE135,
    id: "AT-087", assunto: "Segurança Pública",
    subassunto: "Designação de facções brasileiras como terroristas pelos EUA",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Os Estados Unidos anunciaram a classificação de facções criminosas brasileiras como organizações terroristas, dentro de sua estratégia de combate a organizações criminosas transnacionais.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "terroristas",
    cognitivo: {
      motivo: "Reconhecer o ponto: designação de facções brasileiras como terroristas pelos EUA.",
      palavraCritica: "terroristas",
    },
    comentario: {
      resolucao: "CERTO, segundo o gabarito do material. A designação insere-se na política norte-americana de tratar cartéis e facções transnacionais como organizações terroristas, o que amplia instrumentos como sanções financeiras e bloqueio de bens. O governo brasileiro reagiu em defesa da soberania e da cooperação policial, sem aceitar intervenção estrangeira.",
      fundamento: "Atualidades — crime organizado e relações Brasil–EUA.",
      macete: "EUA: cartel/facção transnacional = terrorismo → sanções.",
      erroComum: "Confundir classificação unilateral com acordo bilateral.",
      comoBancaPensa: "Cobra o conteúdo da medida norte-americana.",
    },
  },

  {
    ...BASE135,
    id: "AT-088", assunto: "Segurança Pública",
    subassunto: "Reação brasileira à designação norte-americana",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Diante da classificação de facções brasileiras como terroristas pelos Estados Unidos, o governo brasileiro passou a defender a intervenção direta de outros países para desarticular a logística dessas organizações.",
    gabarito: "E",
    pegadinha: "troca-sujeito",
    palavraChave: "intervenção direta",
    cognitivo: {
      motivo: "Reconhecer o ponto: reação brasileira à designação norte-americana.",
      palavraCritica: "intervenção direta",
    },
    comentario: {
      resolucao: "ERRADO. A posição oficial brasileira foi a oposta: defesa da soberania nacional e da cooperação entre polícias e órgãos de inteligência, sem transferência de jurisdição nem ações de forças estrangeiras em território brasileiro.",
      fundamento: "Atualidades — soberania e cooperação internacional em segurança.",
      macete: "Cooperação, sim; intervenção estrangeira, não.",
      erroComum: "Achar que cooperação internacional significa abrir mão da soberania.",
      comoBancaPensa: "Atribui ao Brasil a posição que ele rejeitou.",
    },
  },

  {
    ...BASE135,
    id: "AT-089", assunto: "Segurança Pública",
    subassunto: "Reconhecimento facial na segurança pública",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "Câmeras com reconhecimento facial têm sido adotadas por órgãos de segurança pública para agilizar a identificação de pessoas em espaços públicos.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "reconhecimento facial",
    cognitivo: {
      motivo: "Reconhecer o ponto: reconhecimento facial na segurança pública.",
      palavraCritica: "reconhecimento facial",
    },
    comentario: {
      resolucao: "CERTO. Estados como Bahia, Rio de Janeiro e São Paulo ampliaram o uso de câmeras com reconhecimento facial em ruas, estações, estádios e eventos, sobretudo para localizar foragidos com mandado de prisão em aberto.",
      fundamento: "Atualidades — tecnologia e segurança pública.",
      macete: "Reconhecimento facial = identificar pessoas; análise preditiva = prever crimes.",
      erroComum: "Confundir identificação de pessoas com sistemas de gestão de ocorrências.",
      comoBancaPensa: "Cobra a tecnologia associada à identificação.",
    },
  },

  {
    ...BASE135,
    id: "AT-090", assunto: "Segurança Pública",
    subassunto: "Reconhecimento facial — riscos e vieses",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Os sistemas de reconhecimento facial asseguram neutralidade absoluta na identificação de pessoas, o que afasta o risco de vieses nas abordagens policiais.",
    gabarito: "E",
    pegadinha: "termo-absoluto",
    palavraChave: "neutralidade absoluta",
    cognitivo: {
      motivo: "Reconhecer o ponto: reconhecimento facial — riscos e vieses.",
      palavraCritica: "neutralidade absoluta",
    },
    comentario: {
      resolucao: "ERRADO. O principal desafio dessa tecnologia é justamente a possibilidade de erro: falsos positivos podem levar a abordagens e até prisões indevidas, e estudos apontam taxas de erro maiores para pessoas negras e mulheres, por vieses nos dados de treinamento. Há ainda o debate sobre privacidade e proteção de dados.",
      fundamento: "Atualidades — reconhecimento facial e direitos fundamentais.",
      macete: "Nenhum algoritmo é neutro: ele herda os vieses dos dados.",
      erroComum: "Achar que decisão de máquina é imparcial por definição.",
      comoBancaPensa: "Usa 'absoluta' para negar o problema central da tecnologia.",
    },
  },

  {
    ...BASE135,
    id: "AT-091", assunto: "Segurança Pública",
    subassunto: "Presença de facções e milícias — pesquisa do FBSP",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Pesquisa do Fórum Brasileiro de Segurança Pública apontou que a presença de facções e milícias é relatada com mais frequência em capitais, em cidades com mais de 500 mil habitantes e na região Nordeste.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "região Nordeste",
    cognitivo: {
      motivo: "Reconhecer o ponto: presença de facções e milícias — pesquisa do FBSP.",
      palavraCritica: "região Nordeste",
    },
    comentario: {
      resolucao: "CERTO. Na pesquisa, a percepção da presença de facções e milícias no bairro foi maior nos grandes centros urbanos e nas capitais e, entre as regiões, no Nordeste — o que dialoga com a expansão de facções no Norte e Nordeste nos últimos anos.",
      fundamento: "Pesquisa do Fórum Brasileiro de Segurança Pública sobre crime organizado.",
      macete: "Facções: grandes cidades, capitais, Nordeste.",
      erroComum: "Associar o fenômeno sobretudo às fronteiras ou ao interior.",
      comoBancaPensa: "Cobra o recorte territorial do levantamento.",
    },
  },

  {
    ...BASE135,
    id: "AT-092", assunto: "Segurança Pública",
    subassunto: "Atlas da Violência — tendências recentes",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Segundo levantamentos recentes sobre violência no Brasil, os homicídios e os crimes contra o patrimônio têm, no geral, recuado, enquanto crescem os crimes digitais e a violência entre pessoas próximas.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "crimes digitais",
    cognitivo: {
      motivo: "Reconhecer o ponto: atlas da Violência — tendências recentes.",
      palavraCritica: "crimes digitais",
    },
    comentario: {
      resolucao: "CERTO. A tendência geral é de queda dos homicídios e de crimes patrimoniais como roubos de rua. Em sentido oposto, crescem os golpes e estelionatos digitais e a violência doméstica e entre conhecidos — inclusive os registros de feminicídio e estupro.",
      fundamento: "Atlas da Violência (Ipea/FBSP) e Anuário Brasileiro de Segurança Pública.",
      macete: "Cai o crime de rua; sobe o crime digital e o doméstico.",
      erroComum: "Achar que todas as modalidades de crime se movem na mesma direção.",
      comoBancaPensa: "Cobra o contraste entre tendências.",
    },
  },

  {
    ...BASE135,
    id: "AT-093", assunto: "Segurança Pública",
    subassunto: "Violência contra mulheres — tendência",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "As campanhas de conscientização das últimas décadas resultaram em redução significativa dos estupros e das tentativas de homicídio contra mulheres no Brasil.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "redução significativa",
    cognitivo: {
      motivo: "Reconhecer o ponto: violência contra mulheres — tendência.",
      palavraCritica: "redução significativa",
    },
    comentario: {
      resolucao: "ERRADO. Apesar das campanhas e da legislação (Lei Maria da Penha, Lei do Feminicídio), os registros de estupro e de violência contra a mulher seguem em alta, com recordes sucessivos no Anuário Brasileiro de Segurança Pública. A violência entre pessoas próximas é justamente uma das que crescem.",
      fundamento: "Anuário Brasileiro de Segurança Pública — violência contra a mulher.",
      macete: "Violência de gênero: os registros sobem, não caem.",
      erroComum: "Supor que mais campanhas significam, automaticamente, menos registros.",
      comoBancaPensa: "Parte de algo positivo (campanhas) para afirmar um resultado falso.",
    },
  },

  {
    ...BASE135,
    id: "AT-094", assunto: "Segurança Pública",
    subassunto: "ICE em Minnesota — localização do estado",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "O reforço de agentes do ICE em Minnesota, no início de 2026, explica-se pelo fato de o estado fazer fronteira com os países de onde provém a maior parte dos imigrantes ilegais nos Estados Unidos.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "fronteira",
    cognitivo: {
      motivo: "Reconhecer o ponto: iCE em Minnesota — localização do estado.",
      palavraCritica: "fronteira",
    },
    comentario: {
      resolucao: "ERRADO. Minnesota fica no norte dos EUA e faz fronteira com o Canadá, e não com o México ou a América Central. O reforço do ICE ali é lido como movimento político contra um estado de tradição democrata e crítico da política migratória do governo Trump.",
      fundamento: "Atualidades — política migratória dos EUA.",
      macete: "Minnesota = fronteira com o Canadá.",
      erroComum: "Associar toda ação migratória à fronteira sul.",
      comoBancaPensa: "Usa um dado geográfico falso como causa.",
    },
  },

  {
    ...BASE135,
    id: "AT-095", assunto: "Segurança Pública",
    subassunto: "ICE em Minnesota — contexto político",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 3, tempoIdealSeg: 60,
    enunciado: "Minnesota, estado de tradição democrata e crítico da política migratória do governo Trump, recebeu reforço de agentes do ICE no início de 2026, e as mortes de cidadãos americanos durante essas operações foram associadas, por críticos, a falhas no recrutamento e no treinamento dos agentes.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "tradição democrata",
    cognitivo: {
      motivo: "Reconhecer o ponto: iCE em Minnesota — contexto político.",
      palavraCritica: "tradição democrata",
    },
    comentario: {
      resolucao: "CERTO, segundo o gabarito do material. O envio de efetivo extraordinário do ICE (agência de imigração e alfândega) a Minnesota gerou protestos depois da morte de dois cidadãos americanos em operações em Minneapolis. As críticas apontaram a expansão acelerada do quadro de agentes, com recrutamento e treinamento sem foco na preservação de direitos.",
      fundamento: "Atualidades — política migratória dos EUA e federalismo.",
      macete: "Estado democrata × governo federal republicano.",
      erroComum: "Confundir o perfil político do estado.",
      comoBancaPensa: "Cobra o contexto político e institucional do episódio.",
    },
  },

  /* ===== TECNOLOGIA E SOCIEDADE ===== */

  {
    ...BASE135,
    id: "AT-096", assunto: "Tecnologia e Sociedade",
    subassunto: "Poder das big techs",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A migração do debate público e de parte da vida cotidiana para redes sociais, aplicativos de mensagens e sites ampliou o poder das empresas de tecnologia e afetou suas relações com a sociedade e com o Estado.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "empresas de tecnologia",
    cognitivo: {
      motivo: "Reconhecer o ponto: poder das big techs.",
      palavraCritica: "empresas de tecnologia",
    },
    comentario: {
      resolucao: "CERTO. Ao concentrar a circulação de informação e de serviços, as grandes plataformas ganharam peso econômico e político, o que alimenta debates sobre regulação, responsabilidade por conteúdo, concorrência e proteção de dados.",
      fundamento: "Atualidades — economia digital e regulação de plataformas.",
      macete: "Mais vida online = mais poder das plataformas = mais debate regulatório.",
      erroComum: "Ler 'poder das empresas' como exagero.",
      comoBancaPensa: "Item amplo e verdadeiro.",
    },
  },

  {
    ...BASE135,
    id: "AT-097", assunto: "Tecnologia e Sociedade",
    subassunto: "IA generativa, deepfakes e desinformação",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Ferramentas de inteligência artificial generativa, quando mal utilizadas, facilitam a produção em massa de desinformação, como deepfakes de voz e de vídeo, e corroem a confiança do público nas instituições.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "deepfakes",
    cognitivo: {
      motivo: "Reconhecer o ponto: iA generativa, deepfakes e desinformação.",
      palavraCritica: "deepfakes",
    },
    comentario: {
      resolucao: "CERTO. A IA generativa barateou a produção de áudios, vídeos e imagens falsos com alto realismo, o que preocupa sobretudo em períodos eleitorais. No Brasil, o TSE proibiu deepfakes na propaganda eleitoral e exige aviso do uso de IA.",
      fundamento: "Atualidades — IA, desinformação e eleições.",
      macete: "IA generativa + uso indevido = desinformação em escala.",
      erroComum: "Achar que deepfake é só montagem de imagem.",
      comoBancaPensa: "Cobra o risco mais citado da IA generativa.",
    },
  },

  {
    ...BASE135,
    id: "AT-098", assunto: "Tecnologia e Sociedade",
    subassunto: "Riscos da IA generativa para o conhecimento",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    textoApoio: "Entre as tecnologias criadas para imitar a cognição humana e a tomada de decisões, a inteligência artificial (IA) está reconfigurando profundamente todos os aspectos das sociedades, das economias e dos mercados de trabalho. A IA é um exemplo de tecnologia que se desenvolve mais rapidamente que a capacidade de resposta das instituições, que dispõem de tempo e recursos limitados para prever suas implicações. Com o rápido desenvolvimento da IA generativa no início dos anos 2020, o uso e a aplicação da IA nunca foram tão grandes. O dinamismo que isso produziu também significa que os riscos e as implicações para a equidade e a diversidade do conhecimento também nunca foram tão grandes.\n\nO ensino superior tem o potencial de desempenhar um papel significativo na formação da era atual, pois nele as habilidades e as tecnologias para desenvolver IA são avançadas, o conhecimento sobre IA é gerado e compartilhado e as pessoas são capacitadas para ajustarem-se e adaptarem-se diante dessa e de outras mudanças tecnológicas. No entanto, até o momento, a IA não foi amplamente integrada às instituições de ensino superior (IES), desenvolvendo-se mais rapidamente em um número limitado de países, em um contexto de enorme desigualdade mundial.\n\nInternet: <https://unesdoc.unesco.org> (com adaptações).",
    enunciado: "Depreende-se do texto que o rápido desenvolvimento da IA generativa elevou os riscos e as implicações de seu uso para a equidade e a diversidade do conhecimento.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "equidade e a diversidade",
    cognitivo: {
      motivo: "Reconhecer o ponto: riscos da IA generativa para o conhecimento.",
      palavraCritica: "equidade e a diversidade",
    },
    comentario: {
      resolucao: "CERTO. O texto afirma que o dinamismo trazido pela IA generativa, no início dos anos 2020, fez os riscos e as implicações para a equidade e a diversidade do conhecimento atingirem um patamar inédito. O item apenas parafraseia essa ideia.",
      fundamento: "Interpretação de texto (UNESCO, IA e ensino superior).",
      macete: "Parafrasear é diferente de extrapolar: aqui o item só reescreve o texto.",
      erroComum: "Procurar extrapolação onde há paráfrase fiel.",
      comoBancaPensa: "Item de compreensão com base em texto sobre tema atual.",
    },
  },

  {
    ...BASE135,
    id: "AT-099", assunto: "Tecnologia e Sociedade",
    subassunto: "Política Nacional de Educação Digital — cultura digital",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Segundo a Política Nacional de Educação Digital, a consolidação de uma cultura digital envolve aprendizagem voltada à participação consciente e democrática por meio das tecnologias digitais, com atitude crítica, ética e responsável diante das ofertas midiáticas e digitais.",
    gabarito: "C",
    pegadinha: "literalidade",
    palavraChave: "atitude crítica, ética e responsável",
    cognitivo: {
      motivo: "Reconhecer o ponto: política Nacional de Educação Digital — cultura digital.",
      palavraCritica: "atitude crítica, ética e responsável",
    },
    comentario: {
      resolucao: "CERTO. A Lei nº 14.533/2023 instituiu a Política Nacional de Educação Digital (PNED), com quatro eixos: inclusão digital, educação digital escolar, capacitação e especialização digital, e pesquisa e desenvolvimento em TICs. Na educação digital escolar, a cultura digital é descrita exatamente como aprendizagem para a participação consciente e democrática, com postura crítica, ética e responsável diante da multiplicidade de ofertas midiáticas e digitais.",
      fundamento: "Lei nº 14.533/2023 (PNED).",
      macete: "PNED: 4 eixos — inclusão, educação escolar, capacitação, pesquisa.",
      erroComum: "Achar que a PNED trata só de acesso a equipamentos.",
      comoBancaPensa: "Cobra o conceito legal de cultura digital.",
    },
  },

  {
    ...BASE135,
    id: "AT-100", assunto: "Tecnologia e Sociedade",
    subassunto: "Era da informação e 'mundo digital'",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "O mundo contemporâneo vive a chamada era do conhecimento e da informação, apoiada em uma revolução tecnológica que deu origem a um \"mundo digital\".",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "mundo digital",
    cognitivo: {
      motivo: "Reconhecer o ponto: era da informação e 'mundo digital'.",
      palavraCritica: "mundo digital",
    },
    comentario: {
      resolucao: "CERTO. A expressão sintetiza a leitura corrente das transformações desde o fim do século XX: a revolução técnico-científico-informacional colocou a informação e o conhecimento no centro da economia e da vida social, com a difusão da internet e dos dispositivos conectados.",
      fundamento: "Atualidades — globalização e revolução informacional.",
      macete: "Era da informação = revolução técnico-científico-informacional.",
      erroComum: "Marcar errado por estranhar o tom genérico.",
      comoBancaPensa: "Item genérico de abertura de prova: verdadeiro.",
    },
  },

  {
    ...BASE135,
    id: "AT-101", assunto: "Tecnologia e Sociedade",
    subassunto: "Julgamento sobre redes sociais e saúde mental",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Mark Zuckerberg, controlador do Facebook e do Instagram, foi preso ao deixar audiência nos Estados Unidos em processo no qual famílias acusam as redes sociais de prejudicar a saúde mental de seus filhos.",
    gabarito: "E",
    pegadinha: "verdade-mais-falso",
    palavraChave: "saiu preso",
    cognitivo: {
      motivo: "Reconhecer o ponto: julgamento sobre redes sociais e saúde mental.",
      palavraCritica: "saiu preso",
    },
    comentario: {
      resolucao: "ERRADO. Zuckerberg depôs em processos movidos por famílias e por autoridades norte-americanas que acusam as plataformas de causar danos à saúde mental de crianças e adolescentes, mas não foi preso. São ações de natureza civil, que buscam indenização e mudanças nas plataformas.",
      fundamento: "Atualidades — responsabilização das plataformas digitais.",
      macete: "Depor em juízo não é ser preso.",
      erroComum: "Aceitar o item porque o processo existe.",
      comoBancaPensa: "Junta fato real (o processo) a desfecho inventado (a prisão).",
    },
  },

  {
    ...BASE135,
    id: "AT-102", assunto: "Tecnologia e Sociedade",
    subassunto: "Disputa tecnológica EUA–China",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Na disputa entre Estados Unidos e China, a inteligência artificial e a produção de semicondutores tornaram-se elementos estratégicos de poder econômico, tecnológico e geopolítico.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "elemento estratégico",
    cognitivo: {
      motivo: "Reconhecer o ponto: disputa tecnológica EUA–China.",
      palavraCritica: "elemento estratégico",
    },
    comentario: {
      resolucao: "CERTO. A rivalidade se expressa em restrições dos EUA à exportação de chips avançados e de equipamentos para fabricá-los, em subsídios à produção doméstica (como o CHIPS Act) e na corrida chinesa pela autossuficiência tecnológica. Chips e IA têm uso civil e militar.",
      fundamento: "Atualidades — geopolítica da tecnologia.",
      macete: "Chip + IA = poder econômico e militar.",
      erroComum: "Tratar a IA como tema só de mercado.",
      comoBancaPensa: "Item amplo e correto sobre a rivalidade tecnológica.",
    },
  },

  {
    ...BASE135,
    id: "AT-103", assunto: "Tecnologia e Sociedade",
    subassunto: "Checagem de fatos — chatbot da IFCN",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "A ferramenta de respostas automáticas criada pela Aliança Internacional de Checagem de Fatos (IFCN) para ajudar na verificação de notícias falsas é um chatbot.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "chatbot",
    cognitivo: {
      motivo: "Reconhecer o ponto: checagem de fatos — chatbot da IFCN.",
      palavraCritica: "chatbot",
    },
    comentario: {
      resolucao: "CERTO. Chatbot é o programa que conversa com o usuário por respostas automáticas — no caso, para indicar checagens já feitas sobre boatos em circulação, inclusive em aplicativos de mensagem. Fact-checking é o nome da atividade de checagem em si, não da ferramenta automatizada.",
      fundamento: "Atualidades — combate à desinformação.",
      macete: "Fact-checking verifica; chatbot automatiza as respostas.",
      erroComum: "Confundir a atividade (checagem) com a ferramenta (chatbot).",
      comoBancaPensa: "Separa o conceito da ferramenta.",
    },
  },

  {
    ...BASE135,
    id: "AT-104", assunto: "Tecnologia e Sociedade",
    subassunto: "Mercosul — proteção de crianças no ambiente digital",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "A declaração conjunta do Mercosul sobre a proteção de crianças e adolescentes no ambiente digital, aprovada na cúpula de Foz do Iguaçu, limitou-se ao cyberbullying e à proteção de dados pessoais, sem tratar de exploração sexual nem de incitação à automutilação.",
    gabarito: "E",
    pegadinha: "restricao-indevida",
    palavraChave: "limitou-se",
    cognitivo: {
      motivo: "Reconhecer o ponto: mercosul — proteção de crianças no ambiente digital.",
      palavraCritica: "limitou-se",
    },
    comentario: {
      resolucao: "ERRADO. A declaração mencionou os quatro riscos: cyberbullying, violação de privacidade e de dados pessoais, abuso e exploração sexual (grooming) e incitação à automutilação e ao suicídio por desafios e tendências difundidos na internet.",
      fundamento: "Atualidades — Mercosul e proteção da infância online.",
      macete: "Declaração do Mercosul: os quatro riscos, não só dois.",
      erroComum: "Aceitar uma lista parcial como completa.",
      comoBancaPensa: "Restringe o alcance do documento.",
    },
  },

  /* ===== CULTURA, SAÚDE E CIÊNCIA ===== */

  {
    ...BASE135,
    id: "AT-105", assunto: "Cultura, Saúde e Ciência",
    subassunto: "Manoel Carlos — autor de telenovelas",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "Manoel Carlos, morto em janeiro de 2026, tornou-se conhecido do grande público sobretudo como autor de telenovelas.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "autor de telenovelas",
    cognitivo: {
      motivo: "Reconhecer o ponto: manoel Carlos — autor de telenovelas.",
      palavraCritica: "autor de telenovelas",
    },
    comentario: {
      resolucao: "CERTO. Manoel Carlos (1933–2026) foi um dos principais autores de novelas da televisão brasileira, conhecido pelas tramas ambientadas no Leblon e pelas protagonistas chamadas Helena, em obras como \"Laços de Família\" e \"Mulheres Apaixonadas\". Também atuou como diretor e produtor, mas a notoriedade veio da teledramaturgia.",
      fundamento: "Atualidades — cultura brasileira.",
      macete: "Manoel Carlos = novelas, Leblon, Helenas.",
      erroComum: "Confundir o autor de novelas com diretor de cinema.",
      comoBancaPensa: "Cobra a principal atividade da personalidade.",
    },
  },

  {
    ...BASE135,
    id: "AT-106", assunto: "Cultura, Saúde e Ciência",
    subassunto: "Polilaminina — fase dos estudos clínicos",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Os estudos clínicos da polilaminina, medicamento experimental desenvolvido no Brasil, já chegaram à fase final, pois a eficácia do tratamento foi comprovada em larga escala.",
    gabarito: "E",
    pegadinha: "termo-absoluto",
    palavraChave: "fase final",
    cognitivo: {
      motivo: "Reconhecer o ponto: polilaminina — fase dos estudos clínicos.",
      palavraCritica: "fase final",
    },
    comentario: {
      resolucao: "ERRADO. A Anvisa autorizou o início da primeira fase de testes clínicos da polilaminina, que avalia sobretudo a segurança. A eficácia só é medida nas fases seguintes, com mais pacientes; não há comprovação em larga escala. O medicamento foi desenvolvido em pesquisa universitária, e a Anvisa é a agência que regula e autoriza os ensaios.",
      fundamento: "Atualidades — pesquisa clínica e regulação sanitária.",
      macete: "Ensaio clínico: fase 1 segurança → fase 2 eficácia → fase 3 comparação em larga escala.",
      erroComum: "Achar que autorização para testes significa eficácia comprovada.",
      comoBancaPensa: "Pula etapas do desenvolvimento de medicamentos.",
    },
  },

  {
    ...BASE135,
    id: "AT-107", assunto: "Cultura, Saúde e Ciência",
    subassunto: "Artemis II — recorde de distância",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "A missão Artemis II estabeleceu novo recorde de maior distância já alcançada por seres humanos em relação à Terra, superando a marca da Apollo 13.",
    gabarito: "C",
    pegadinha: "troca-numerica",
    palavraChave: "Apollo 13",
    cognitivo: {
      motivo: "Reconhecer o ponto: artemis II — recorde de distância.",
      palavraCritica: "Apollo 13",
    },
    comentario: {
      resolucao: "CERTO. A Artemis II levou quatro astronautas em voo ao redor da Lua, sem pouso, e ultrapassou a distância recorde da Apollo 13 (1970). Na passagem pelo lado oculto da Lua, a comunicação com a Terra fica interrompida por algum tempo, e a missão terminou com amerissagem no Oceano Pacífico.",
      fundamento: "Atualidades — exploração espacial (programa Artemis, NASA).",
      macete: "Artemis II = sobrevoo tripulado da Lua, recorde de distância.",
      erroComum: "Confundir Artemis II (sobrevoo) com Artemis III (pouso).",
      comoBancaPensa: "Cobra o marco histórico da missão.",
    },
  },

  {
    ...BASE135,
    id: "AT-108", assunto: "Cultura, Saúde e Ciência",
    subassunto: "Artemis II — sobrevoo, sem pouso",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (Atualidades, Davi Costa), gabarito do material; questão de múltipla escolha do caderno convertida em item C/E",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Na missão Artemis II, a cápsula tripulada fez uma descida controlada até a superfície do lado oculto da Lua antes de iniciar a viagem de volta à Terra.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "superfície",
    cognitivo: {
      motivo: "Reconhecer o ponto: artemis II — sobrevoo, sem pouso.",
      palavraCritica: "superfície",
    },
    comentario: {
      resolucao: "ERRADO. A Artemis II foi um sobrevoo tripulado: a cápsula Orion contornou a Lua e voltou à Terra sem pousar. O pouso tripulado fica para missão posterior do programa Artemis.",
      fundamento: "Atualidades — exploração espacial (programa Artemis, NASA).",
      macete: "Artemis II contorna; não pousa.",
      erroComum: "Achar que toda missão lunar tripulada pousa na Lua.",
      comoBancaPensa: "Troca sobrevoo por pouso.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE135);
