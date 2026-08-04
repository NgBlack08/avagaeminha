/* =====================================================================
   QUESTLAB — Lote 74: ATUALIDADES — 1º SEMESTRE DE 2026

   O lote 52 cobria fatos até o início de 2026 e era todo o acervo de
   Atualidades (43 itens). A prova é em 06/12/2026, e a janela que a
   CEBRASPE costuma cobrar — os seis a doze meses anteriores ao certame —
   estava inteiramente descoberta.

   Os itens abaixo foram redigidos a partir de pesquisa em fontes públicas
   (agosto/2026), com os fatos conferidos em mais de uma fonte antes de
   virarem questão. Duas verificações mudaram o conteúdo:

   1. A primeira busca devolveu "sobretaxa de 25%" e "sobretaxa de 12,5%"
      como se fossem versões conflitantes do mesmo fato. Não são: os EUA
      publicaram DUAS medidas, incidentes sobre parcelas distintas das
      importações brasileiras. Um item foi construído justamente sobre
      essa confusão, porque ela é exatamente o tipo de recorte que a banca
      explora.
   2. Também apareceram projeções de PIB e IPCA divergentes (2,2% x 2,3%;
      3,9% x 5,1%). As menores eram de relatórios do início do ciclo; as
      questões usam os números do Boletim Macrofiscal de julho/2026.

   CUIDADO COM DADO PERECÍVEL: a Selic aparece sempre ancorada à decisão
   datada do Copom de 17/06/2026, nunca como "a taxa atual". A 280ª reunião
   estava marcada para 4 e 5 de agosto de 2026 — escrever "hoje a Selic é
   X" tornaria o item falso em 24 horas. O mesmo cuidado vale para a PEC
   18/2025, cuja tramitação no Senado segue em curso: os itens cobram o que
   já ocorreu, com data, e não o desfecho.

   Blocos, seguindo o rol do edital ("segurança, transportes, política,
   economia, sociedade, educação, saúde, cultura, tecnologia, energia,
   relações internacionais, desenvolvimento sustentável e ecologia"):
   segurança pública nacional, PEC da Segurança, Alagoas, comércio
   exterior, economia, clima e energia, cultura e esporte.
   ===================================================================== */
const QUESTOES_PCAL_LOTE74 = [

  /* ============ SEGURANÇA PÚBLICA — ANUÁRIO BRASILEIRO 2026 ============ */

  {
    id: "AT-044", disciplina: "Atualidades", assunto: "Segurança Pública no Brasil",
    subassunto: "Anuário Brasileiro de Segurança Pública 2026 — taxa de MVI",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Anuário Brasileiro de Segurança Pública 2026, FBSP, divulgado em julho/2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.9,
    enunciado: "Segundo o Anuário Brasileiro de Segurança Pública divulgado em 2026, o Brasil registrou, em 2025, taxa de mortes violentas intencionais inferior a 20 por 100 mil habitantes — a primeira vez que o indicador ficou abaixo desse patamar desde o início da série histórica.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "inferior a 20 por 100 mil habitantes",
    cognitivo: {
      motivo: "Fixar o dado-síntese da 20ª edição do Anuário, o mais citado em provas de carreira policial.",
      palavraCritica: "primeira vez ... desde o início da série",
    },
    comentario: {
      resolucao: "CERTO. A taxa foi de 19,1 mortes violentas intencionais por 100 mil habitantes em 2025, abaixo da marca de 20 pela primeira vez desde o início da série, em 2012. Em números absolutos foram 40.775 ocorrências, contra 44.127 em 2024. O Anuário é publicado pelo Fórum Brasileiro de Segurança Pública e é a principal fonte estatística não oficial do setor — 2026 marcou sua 20ª edição.",
      fundamento: "Anuário Brasileiro de Segurança Pública 2026 (FBSP).",
      macete: "19,1 por 100 mil em 2025 — abaixo de 20 pela primeira vez na série.",
      erroComum: "Confundir o número absoluto (40.775) com a taxa por 100 mil (19,1).",
      comoBancaPensa: "Cobra o indicador de maior repercussão do ano em segurança pública.",
    },
  },
  {
    id: "AT-045", disciplina: "Atualidades", assunto: "Segurança Pública no Brasil",
    subassunto: "Anuário 2026 — variação das mortes violentas",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Anuário Brasileiro de Segurança Pública 2026, FBSP)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "De acordo com o Anuário Brasileiro de Segurança Pública 2026, as mortes violentas intencionais registradas em 2025 caíram cerca de 18% em relação a 2024.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "cerca de 18%",
    cognitivo: {
      motivo: "Cobrar a magnitude exata da queda, número de alta circulação e fácil de distorcer.",
      palavraCritica: "18%",
    },
    comentario: {
      resolucao: "ERRADO. A redução foi de 8,2%, e não de cerca de 18% — as 44.127 mortes violentas intencionais de 2024 passaram a 40.775 em 2025. O percentual de 17% existe no relatório, mas se refere a outro crime: a queda do latrocínio. Trocar um indicador por outro dentro do mesmo documento é recorte típico de prova.",
      fundamento: "Anuário Brasileiro de Segurança Pública 2026 (FBSP).",
      macete: "MVI −8,2%. Latrocínio −17%. Não misture.",
      erroComum: "Aplicar às MVI o percentual de queda de outro delito.",
      comoBancaPensa: "Aproveita a profusão de percentuais do relatório para trocar um pelo outro.",
    },
  },
  {
    id: "AT-046", disciplina: "Atualidades", assunto: "Segurança Pública no Brasil",
    subassunto: "Anuário 2026 — indicadores em alta",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Anuário Brasileiro de Segurança Pública 2026, FBSP)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.86,
    enunciado: "Conforme o Anuário Brasileiro de Segurança Pública 2026, a queda das mortes violentas intencionais em 2025 foi acompanhada por redução generalizada de todos os demais indicadores de violência letal, incluindo as mortes decorrentes de intervenção policial e os feminicídios.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "redução generalizada de todos os demais indicadores",
    cognitivo: {
      motivo: "Cobrar os contrapontos do relatório, que a leitura apressada da manchete apaga.",
      palavraCritica: "todos os demais indicadores",
    },
    comentario: {
      resolucao: "ERRADO — e o erro está no 'todos'. O Anuário aponta queda em homicídio doloso (−10%), latrocínio (−17%) e lesão corporal seguida de morte (−15,2%), mas registra ALTA em duas frentes sensíveis: mortes decorrentes de intervenção policial (+5,4%) e feminicídios (+4%). Sete unidades da federação também apresentaram aumento das mortes violentas intencionais. É justamente esse contraste que o relatório destaca — e que uma leitura só da manchete perde.",
      fundamento: "Anuário Brasileiro de Segurança Pública 2026 (FBSP).",
      macete: "Letalidade policial e feminicídio subiram, na contramão do resto.",
      erroComum: "Estender a manchete de queda a todos os indicadores.",
      comoBancaPensa: "Transforma uma tendência majoritária em unanimidade.",
    },
  },
  {
    id: "AT-047", disciplina: "Atualidades", assunto: "Segurança Pública no Brasil",
    subassunto: "Anuário 2026 — letalidade policial",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Anuário Brasileiro de Segurança Pública 2026, FBSP)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "O Anuário Brasileiro de Segurança Pública 2026 registrou aumento das mortes decorrentes de intervenção policial em 2025, ainda que o total de mortes violentas intencionais no país tenha recuado no mesmo período.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "ainda que o total ... tenha recuado",
    cognitivo: {
      motivo: "Fixar o dado de letalidade policial, tema sensível e de cobrança provável em concurso de polícia.",
      palavraCritica: "aumento ... ainda que",
    },
    comentario: {
      resolucao: "CERTO. As mortes por intervenção policial cresceram 5,4% em 2025, no mesmo ano em que as mortes violentas intencionais caíram 8,2%. Os dois movimentos convivem porque medem coisas distintas: um é o volume geral de violência letal; o outro, a letalidade da ação do Estado. O descolamento entre as duas curvas é um dos pontos de maior atenção do relatório e alimenta o debate sobre protocolos de uso da força.",
      fundamento: "Anuário Brasileiro de Segurança Pública 2026 (FBSP).",
      macete: "Violência geral caiu; letalidade policial subiu.",
      erroComum: "Supor que os dois indicadores caminham necessariamente juntos.",
      comoBancaPensa: "Apresenta dois movimentos opostos e verdadeiros, esperando que o candidato rejeite um.",
    },
  },
  {
    id: "AT-048", disciplina: "Atualidades", assunto: "Segurança Pública no Brasil",
    subassunto: "Anuário 2026 — desigualdade regional",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Anuário Brasileiro de Segurança Pública 2026, FBSP)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.7,
    enunciado: "A redução das mortes violentas intencionais apontada pelo Anuário Brasileiro de Segurança Pública 2026 foi verificada em todas as unidades da federação, sem exceção.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "em todas as unidades da federação, sem exceção",
    cognitivo: {
      motivo: "Cobrar a heterogeneidade regional, que o dado nacional agregado esconde.",
      palavraCritica: "sem exceção",
    },
    comentario: {
      resolucao: "ERRADO. Sete estados apresentaram AUMENTO das mortes violentas intencionais em relação ao ano anterior — entre eles Rio Grande do Norte, Rondônia, Acre, Roraima, Distrito Federal, Mato Grosso do Sul e Rio de Janeiro. A média nacional em queda convive com trajetórias estaduais opostas, e é por isso que política de segurança se formula por unidade federativa, não pelo agregado do país.",
      fundamento: "Anuário Brasileiro de Segurança Pública 2026 (FBSP).",
      macete: "Média nacional em queda não significa queda em todo estado.",
      erroComum: "Ler o dado nacional como se valesse uniformemente para cada UF.",
      comoBancaPensa: "Estende ao todo um resultado que é apenas agregado.",
    },
  },

  /* ============ PEC DA SEGURANÇA PÚBLICA (PEC 18/2025) ============ */

  {
    id: "AT-049", disciplina: "Atualidades", assunto: "PEC da Segurança Pública",
    subassunto: "Tramitação — aprovação na Câmara",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (PEC 18/2025; aprovação em 2º turno na Câmara em 04/03/2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.92,
    enunciado: "A Proposta de Emenda à Constituição da Segurança Pública foi aprovada em dois turnos pela Câmara dos Deputados em março de 2026 e, na sequência, seguiu para apreciação do Senado Federal.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "dois turnos ... seguiu para o Senado",
    cognitivo: {
      motivo: "Fixar o estágio de tramitação, que é o recorte mais provável de uma prova aplicada em dezembro de 2026.",
      palavraCritica: "seguiu para apreciação do Senado",
    },
    comentario: {
      resolucao: "CERTO. A PEC 18/2025 foi aprovada em segundo turno pela Câmara em 4 de março de 2026, com 487 votos favoráveis no primeiro turno e 461 no segundo, e foi encaminhada ao Senado. Atenção ao rito: emenda constitucional exige three quintos em DOIS turnos em cada Casa (CF, art. 60, § 2º), de modo que a aprovação na Câmara não encerra o processo — no Senado são necessários no mínimo 49 votos, também em dois turnos.",
      fundamento: "PEC 18/2025; CF, art. 60, § 2º.",
      macete: "PEC: 3/5, dois turnos, nas DUAS Casas.",
      erroComum: "Tratar a aprovação na Câmara como promulgação da emenda.",
      comoBancaPensa: "Descreve corretamente o estágio e conta que o candidato confunda com o desfecho.",
    },
  },
  {
    id: "AT-050", disciplina: "Atualidades", assunto: "PEC da Segurança Pública",
    subassunto: "Constitucionalização do SUSP",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (PEC 18/2025; Lei 13.675/2018)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.88,
    enunciado: "Entre os efeitos da PEC da Segurança Pública está a criação do Sistema Único de Segurança Pública (Susp), até então inexistente no ordenamento jurídico brasileiro.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "criação ... até então inexistente",
    cognitivo: {
      motivo: "Distinguir criar de constitucionalizar, que é o ponto central da proposta.",
      palavraCritica: "criação",
    },
    comentario: {
      resolucao: "ERRADO. O Susp não é criação da PEC: ele já existia, instituído por LEI em 2018 (Lei 13.675/2018). O que a proposta faz é conferir-lhe STATUS CONSTITUCIONAL, elevando-o de norma legal a norma constitucional — o que dificulta sua alteração e vincula os entes federativos de modo mais rígido. A diferença entre criar um sistema e constitucionalizar um sistema existente é justamente o que a banca costuma cobrar aqui.",
      fundamento: "PEC 18/2025; Lei 13.675/2018 (institui o Susp).",
      macete: "Susp nasceu em 2018 por lei; a PEC o eleva à Constituição.",
      erroComum: "Atribuir à PEC a criação de um sistema que já existia.",
      comoBancaPensa: "Troca 'constitucionalizar' por 'criar', alteração pequena e decisiva.",
    },
  },
  {
    id: "AT-051", disciplina: "Atualidades", assunto: "PEC da Segurança Pública",
    subassunto: "Competências federativas",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (PEC 18/2025)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.82,
    enunciado: "A PEC da Segurança Pública redefine competências da União, dos estados, do Distrito Federal e dos municípios na área de segurança, atribuindo à União a coordenação da política nacional do setor.",
    gabarito: "C", pegadinha: "troca-sujeito", palavraChave: "atribuindo à União a coordenação",
    cognitivo: {
      motivo: "Fixar o eixo federativo da proposta, que é seu objetivo declarado.",
      palavraCritica: "coordenação",
    },
    comentario: {
      resolucao: "CERTO. O núcleo da PEC é federativo: redefinir as competências dos quatro níveis da federação e dar à União o papel de coordenar a política nacional de segurança, integrando os órgãos hoje dispersos. Repare na palavra exata — COORDENAR não é o mesmo que executar nem que subordinar as polícias estaduais, que permanecem sob comando dos estados. Foi essa distinção que sustentou boa parte do debate no Congresso, diante da resistência de governadores.",
      fundamento: "PEC 18/2025; CF, art. 144.",
      macete: "União coordena; estados continuam executando por suas polícias.",
      erroComum: "Ler coordenação como subordinação das polícias estaduais à União.",
      comoBancaPensa: "Testa se o candidato distingue coordenar de comandar.",
    },
  },
  {
    id: "AT-052", disciplina: "Atualidades", assunto: "PEC da Segurança Pública",
    subassunto: "Financiamento — FNSP e Funpen",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (PEC 18/2025, texto aprovado na Câmara)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.76,
    enunciado: "O texto da PEC da Segurança Pública aprovado pela Câmara prevê destinar ao Fundo Nacional de Segurança Pública e ao Fundo Penitenciário Nacional parte da arrecadação das apostas de quota fixa, as chamadas bets.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "apostas de quota fixa",
    cognitivo: {
      motivo: "Cobrar a fonte de custeio criada pela proposta, tema de forte repercussão.",
      palavraCritica: "apostas de quota fixa",
    },
    comentario: {
      resolucao: "CERTO. O texto vincula ao FNSP e ao Funpen uma fatia da arrecadação das loterias de quota fixa, com escalonamento previsto ao longo dos primeiros anos até atingir um patamar maior. Vale registrar que os percentuais foram alterados durante a tramitação: o relator na Câmara, deputado Mendonça Filho, reduziu a fatia originalmente proposta e mexeu também na destinação de recursos do fundo social do pré-sal. Como o texto ainda tramita no Senado, os percentuais podem mudar — por isso questões de prova tendem a cobrar a existência da vinculação, não o número exato.",
      fundamento: "PEC 18/2025, texto aprovado na Câmara em 04/03/2026.",
      macete: "Bets financiando FNSP e Funpen.",
      erroComum: "Supor que o financiamento viria de novo tributo.",
      comoBancaPensa: "Cobra a fonte de custeio, que é o aspecto mais noticiado da proposta.",
    },
  },
  {
    id: "AT-053", disciplina: "Atualidades", assunto: "PEC da Segurança Pública",
    subassunto: "Maioridade penal na tramitação",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (PEC 18/2025, relatoria na Câmara)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.74,
    enunciado: "O texto da PEC da Segurança Pública aprovado pela Câmara dos Deputados incorporou a redução da maioridade penal como um de seus eixos.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "incorporou a redução da maioridade penal",
    cognitivo: {
      motivo: "Cobrar um dispositivo SUPRIMIDO na tramitação — recorte em que a memória do noticiário engana.",
      palavraCritica: "incorporou",
    },
    comentario: {
      resolucao: "ERRADO. A previsão de redução da maioridade penal chegou a ser discutida, mas foi SUPRIMIDA pelo relator na Câmara antes da aprovação. O tema circulou bastante no noticiário durante o debate, o que faz muitos candidatos associarem-no ao texto final — e é exatamente por isso que a banca gosta desse recorte. O que se aprovou concentra-se na arquitetura federativa da segurança, no status constitucional do Susp e no financiamento do setor.",
      fundamento: "PEC 18/2025; parecer do relator na Câmara.",
      macete: "Maioridade penal foi discutida, mas ficou de fora do texto aprovado.",
      erroComum: "Confundir o que se debateu com o que se aprovou.",
      comoBancaPensa: "Explora a diferença entre a pauta do noticiário e o texto votado.",
    },
  },

  /* ============ ALAGOAS ============ */

  {
    id: "AT-054", disciplina: "Atualidades", assunto: "Alagoas — Segurança Pública",
    subassunto: "Investimento estadual em segurança",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Anuário Brasileiro de Segurança Pública 2026, dados de investimento estadual)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.72,
    enunciado: "Segundo dados do Anuário Brasileiro de Segurança Pública de 2026, Alagoas figura entre os primeiros colocados do Nordeste em investimento estadual em segurança pública, embora ocupe posição intermediária no ranking nacional.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "primeiros colocados do Nordeste ... intermediária no ranking nacional",
    cognitivo: {
      motivo: "Trazer o recorte estadual, que a banca costuma incluir em concurso de polícia civil de um estado específico.",
      palavraCritica: "posição intermediária no ranking nacional",
    },
    comentario: {
      resolucao: "CERTO. Alagoas aparece em 4º lugar no Nordeste e 15º no ranking nacional de investimentos em segurança pública, com cerca de R$ 2,59 bilhões aplicados em 2025. As duas informações convivem sem contradição: um bom desempenho relativo dentro da região não implica posição de destaque no país, porque a comparação nacional inclui unidades federativas de porte econômico muito maior.",
      fundamento: "Anuário Brasileiro de Segurança Pública 2026 (FBSP), dados de investimento estadual.",
      macete: "AL: 4º no Nordeste, 15º no Brasil.",
      erroComum: "Supor que boa colocação regional implique boa colocação nacional.",
      comoBancaPensa: "Cobra dois recortes do mesmo dado, esperando que um pareça contradizer o outro.",
    },
  },
  {
    id: "AT-055", disciplina: "Atualidades", assunto: "Alagoas — Segurança Pública",
    subassunto: "Enfrentamento a facções criminosas",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (operações integradas da Secretaria de Segurança Pública de Alagoas, 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.66,
    enunciado: "Em 2026, o enfrentamento a organizações criminosas em Alagoas tem se apoiado em operações integradas que combinam ações em divisas terrestres, no litoral e atividades de inteligência.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "divisas terrestres, no litoral e ... inteligência",
    cognitivo: {
      motivo: "Fixar a lógica de atuação integrada, que é o modelo cobrado tanto em atualidades quanto em conhecimentos institucionais.",
      palavraCritica: "operações integradas",
    },
    comentario: {
      resolucao: "CERTO. A Secretaria de Segurança Pública de Alagoas intensificou em 2026 operações simultâneas em divisas terrestres, na faixa litorânea e por meio de setores de inteligência, com foco no desmonte de facções. A lógica é a mesma que a PEC da Segurança busca generalizar no plano nacional: integração entre órgãos em vez de atuação isolada — o que conecta este item ao bloco anterior e ao próprio conceito de Susp.",
      fundamento: "Ações da Secretaria de Segurança Pública de Alagoas, 2026.",
      macete: "Integração — divisa, litoral e inteligência atuando juntos.",
      erroComum: "Imaginar o enfrentamento a facções como ação policial isolada.",
      comoBancaPensa: "Liga a política estadual ao conceito nacional de sistema integrado.",
    },
  },

  /* ============ COMÉRCIO EXTERIOR E RELAÇÕES INTERNACIONAIS ============ */

  {
    id: "AT-056", disciplina: "Atualidades", assunto: "Tarifas dos EUA sobre o Brasil",
    subassunto: "Estrutura das sobretaxas",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (medidas tarifárias dos EUA sobre importações do Brasil, julho/2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 80, probReaparecer: 0.9,
    enunciado: "Em 2026, o governo dos Estados Unidos instituiu uma sobretaxa única de 25% aplicável indistintamente a todas as importações provenientes do Brasil.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "sobretaxa única ... indistintamente a todas",
    cognitivo: {
      motivo: "Desfazer a leitura mais comum do noticiário, que reduz a duas medidas escalonadas a uma tarifa única.",
      palavraCritica: "única ... indistintamente a todas",
    },
    comentario: {
      resolucao: "ERRADO por dois motivos. Primeiro, não houve sobretaxa única: os EUA publicaram DUAS medidas, com alíquotas adicionais de 25% e de 12,5%, incidentes sobre parcelas distintas das importações brasileiras. Segundo, a cobrança não é indistinta — 2.126 produtos ficaram expressamente de fora, entre eles carne bovina, café, laranja, suco de laranja e componentes para fabricação de aeronaves. A sobretaxa de 25% entrou em vigor em 22 de julho de 2026.",
      fundamento: "Medidas tarifárias dos EUA sobre importações brasileiras, julho/2026.",
      macete: "Duas alíquotas (25% e 12,5%) e 2.126 produtos isentos — nada de tarifa única.",
      erroComum: "Resumir o pacote a uma alíquota só, como circulou nas manchetes.",
      comoBancaPensa: "Simplifica uma medida complexa até o ponto em que ela vira falsa.",
    },
  },
  {
    id: "AT-057", disciplina: "Atualidades", assunto: "Tarifas dos EUA sobre o Brasil",
    subassunto: "Produtos excetuados",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (lista de exceções às sobretaxas norte-americanas, julho/2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "A lista de produtos brasileiros excluídos da sobretaxa norte-americana de 2026 abrange itens de peso na pauta exportadora nacional, como café, carne bovina e suco de laranja.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "café, carne bovina e suco de laranja",
    cognitivo: {
      motivo: "Fixar quais produtos escaparam, informação de valor prático para entender o impacto real.",
      palavraCritica: "peso na pauta exportadora",
    },
    comentario: {
      resolucao: "CERTO. Foram 2.126 produtos excetuados, incluindo carne bovina, café, laranja e suco de laranja, além de componentes destinados à fabricação de aeronaves. A composição da lista tem lógica econômica: são bens em que os Estados Unidos dependem da oferta brasileira ou que não produzem em escala suficiente, de modo que taxá-los encareceria o próprio consumidor americano. Por isso a sobretaxa atingiu parcela bem menor das exportações do que se previa inicialmente.",
      fundamento: "Lista de exceções às medidas tarifárias dos EUA, julho/2026.",
      macete: "Café, carne e suco de laranja ficaram de fora.",
      erroComum: "Presumir que os principais produtos da pauta foram os mais atingidos.",
      comoBancaPensa: "Cobra a exceção, que costuma ser menos lida que a regra.",
    },
  },
  {
    id: "AT-058", disciplina: "Atualidades", assunto: "Tarifas dos EUA sobre o Brasil",
    subassunto: "Dimensão do impacto",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (estimativas do MDIC sobre o alcance das medidas tarifárias, 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.7,
    enunciado: "Segundo estimativas oficiais brasileiras, as sobretaxas norte-americanas de 2026 alcançaram a maior parte das exportações do Brasil para os Estados Unidos.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "a maior parte das exportações",
    cognitivo: {
      motivo: "Cobrar a ordem de grandeza do impacto, que a lista de exceções reduziu drasticamente.",
      palavraCritica: "maior parte",
    },
    comentario: {
      resolucao: "ERRADO. Pelas estimativas do Ministério do Desenvolvimento, Indústria, Comércio e Serviços, a sobretaxa atingiu cerca de 18% das exportações brasileiras ao mercado norte-americano — equivalente a US$ 7,4 bilhões pela pauta de 2024, ou 15% e US$ 5,8 bilhões se considerada a de 2025. Longe, portanto, da maior parte. A extensa lista de exceções é precisamente o que explica esse alcance reduzido.",
      fundamento: "Estimativas do MDIC sobre o alcance das medidas tarifárias, 2026.",
      macete: "~18% das exportações ao mercado americano, não a maioria.",
      erroComum: "Superestimar o alcance por causa do impacto do anúncio.",
      comoBancaPensa: "Converte um percentual minoritário em maioria por meio de expressão vaga.",
    },
  },
  {
    id: "AT-059", disciplina: "Atualidades", assunto: "Tarifas dos EUA sobre o Brasil",
    subassunto: "Justificativas apresentadas",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (fundamentos invocados pelos EUA nas medidas tarifárias de 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.72,
    enunciado: "Entre as justificativas invocadas pelos Estados Unidos para as medidas tarifárias de 2026 contra o Brasil figuram temas alheios ao comércio de mercadorias, como o sistema de pagamentos instantâneos brasileiro e a regulação de plataformas digitais.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "temas alheios ao comércio de mercadorias",
    cognitivo: {
      motivo: "Mostrar que a motivação declarada extrapola o comércio, o que é a chave para entender o episódio.",
      palavraCritica: "sistema de pagamentos instantâneos ... plataformas digitais",
    },
    comentario: {
      resolucao: "CERTO. As justificativas apresentadas em 2026 incluíram o Pix, a regulação de plataformas digitais, o combate ao desmatamento e o trabalho forçado — pautas que extrapolam a disputa comercial clássica sobre preços e barreiras alfandegárias. Esse é o ponto analítico central do episódio: a tarifa funciona como instrumento de pressão sobre políticas internas do país-alvo, e não apenas como resposta a práticas de comércio.",
      fundamento: "Fundamentos invocados nas medidas tarifárias norte-americanas de 2026.",
      macete: "Pix e regulação de plataformas viraram argumento tarifário.",
      erroComum: "Restringir a motivação a desequilíbrios comerciais.",
      comoBancaPensa: "Cobra a natureza extracomercial da justificativa.",
    },
  },

  /* ============ ECONOMIA ============ */

  {
    id: "AT-060", disciplina: "Atualidades", assunto: "Política Monetária",
    subassunto: "Ciclo de cortes da Selic",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (decisão do Copom de 17/06/2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.84,
    enunciado: "Na reunião de junho de 2026, o Comitê de Política Monetária do Banco Central reduziu a taxa Selic, dando sequência a um ciclo de cortes iniciado após a taxa ter atingido o pico de 15% ao ano na virada de 2025 para 2026.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "pico de 15% ao ano",
    cognitivo: {
      motivo: "Fixar a trajetória da política monetária, e não um valor pontual que envelhece a cada reunião.",
      palavraCritica: "ciclo de cortes",
    },
    comentario: {
      resolucao: "CERTO. Em 17 de junho de 2026 o Copom reduziu a Selic para 14,25% ao ano, no quarto corte consecutivo desde o pico de 15%, patamar vigente entre novembro de 2025 e janeiro de 2026. ATENÇÃO AO ESTUDAR: o valor da Selic muda a cada reunião — o Copom se reúne oito vezes por ano —, então memorize a TRAJETÓRIA (pico de 15% seguido de ciclo de cortes) e não um número solto, que pode estar desatualizado no dia da prova.",
      fundamento: "Ata e comunicado do Copom, reunião de 17/06/2026.",
      macete: "Pico de 15% na virada do ano; depois, cortes sucessivos.",
      erroComum: "Decorar um valor pontual da Selic em vez da tendência.",
      comoBancaPensa: "Prefere cobrar a direção do ciclo, que não envelhece entre a inscrição e a prova.",
    },
  },
  {
    id: "AT-061", disciplina: "Atualidades", assunto: "Política Monetária",
    subassunto: "Competência do Copom",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (sistema de metas de inflação; competências do Copom e do CMN)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.74,
    enunciado: "Cabe ao Comitê de Política Monetária do Banco Central definir a meta de inflação a ser perseguida no país, além de fixar a taxa básica de juros.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "definir a meta de inflação",
    cognitivo: {
      motivo: "Separar quem define a meta de quem persegue a meta — confusão frequente e cobrável.",
      palavraCritica: "definir a meta de inflação",
    },
    comentario: {
      resolucao: "ERRADO. O Copom fixa a taxa Selic, mas NÃO define a meta de inflação: essa atribuição é do Conselho Monetário Nacional (CMN). A divisão é deliberada — o CMN, órgão de composição ministerial, estabelece o objetivo; o Banco Central, com autonomia técnica, escolhe os instrumentos para alcançá-lo. Trocar um órgão pelo outro é das armadilhas mais recorrentes em economia aplicada a concursos.",
      fundamento: "Sistema de metas de inflação; competências do CMN e do Copom/BCB.",
      macete: "CMN define a meta; Copom fixa a Selic para persegui-la.",
      erroComum: "Atribuir ao Banco Central a definição da própria meta.",
      comoBancaPensa: "Troca o órgão competente mantendo o resto do enunciado correto.",
    },
  },
  {
    id: "AT-062", disciplina: "Atualidades", assunto: "Economia Brasileira",
    subassunto: "Projeções oficiais de 2026",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Boletim Macrofiscal de julho/2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.68,
    enunciado: "O Boletim Macrofiscal divulgado em julho de 2026 elevou a projeção de crescimento do PIB brasileiro para o ano, acompanhando a revisão para cima da estimativa de inflação.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "elevou a projeção de crescimento do PIB",
    cognitivo: {
      motivo: "Cobrar o sentido de cada revisão, que o item inverte parcialmente.",
      palavraCritica: "elevou",
    },
    comentario: {
      resolucao: "ERRADO. O Boletim Macrofiscal de julho de 2026 MANTEVE a projeção de crescimento do PIB em 2,3%, sem elevá-la. A parte correta do enunciado é a revisão da inflação: a estimativa do IPCA subiu de 4,5% para 5,1%. Houve remanejamentos setoriais dentro da mesma projeção agregada — a agropecuária passou de 1,2% para 1,8% e a indústria recuou de 2,2% para 2,1% —, mas o total permaneceu inalterado. Manter não é elevar.",
      fundamento: "Boletim Macrofiscal, julho/2026.",
      macete: "PIB mantido em 2,3%; IPCA revisado de 4,5% para 5,1%.",
      erroComum: "Supor que revisões setoriais alteram necessariamente o agregado.",
      comoBancaPensa: "Junta um dado verdadeiro (inflação revisada) a um falso (PIB elevado).",
    },
  },

  /* ============ CLIMA, ENERGIA E DESENVOLVIMENTO SUSTENTÁVEL ============ */

  {
    id: "AT-063", disciplina: "Atualidades", assunto: "COP30 e Política Climática",
    subassunto: "Pacote de Belém",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (COP30, Belém, novembro/2025)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 65, probReaparecer: 0.86,
    enunciado: "A COP30, realizada em Belém, encerrou-se com a aprovação do chamado Pacote de Belém, conjunto de decisões adotadas por consenso entre os países participantes.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "Pacote de Belém ... por consenso",
    cognitivo: {
      motivo: "Fixar o resultado da conferência sediada no Brasil, tema de cobrança quase certa.",
      palavraCritica: "consenso",
    },
    comentario: {
      resolucao: "CERTO. A COP30 ocorreu em Belém, no Pará, entre 10 e 21 de novembro de 2025, e terminou com a aprovação do Pacote de Belém por 195 países, reunindo 29 decisões adotadas por consenso em temas como transição justa, financiamento da adaptação, comércio, gênero e tecnologia. O consenso é a regra decisória das COPs — não há votação por maioria —, o que explica por que os textos finais costumam ser fruto de negociação até o último momento.",
      fundamento: "COP30 — Convenção-Quadro da ONU sobre Mudança do Clima, Belém, nov/2025.",
      macete: "Pacote de Belém: 195 países, 29 decisões, por consenso.",
      erroComum: "Imaginar que decisões de COP são tomadas por maioria de votos.",
      comoBancaPensa: "Cobra o evento sediado no Brasil e o método decisório das conferências.",
    },
  },
  {
    id: "AT-064", disciplina: "Atualidades", assunto: "COP30 e Política Climática",
    subassunto: "Financiamento da adaptação",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (decisões da COP30 sobre financiamento climático)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.74,
    enunciado: "Entre as decisões da COP30 está o compromisso de triplicar, até 2035, o financiamento destinado à adaptação climática.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "triplicar, até 2035",
    cognitivo: {
      motivo: "Fixar a meta financeira mais citada da conferência, com prazo e multiplicador exatos.",
      palavraCritica: "triplicar ... 2035",
    },
    comentario: {
      resolucao: "CERTO. A COP30 firmou o compromisso de triplicar o financiamento para adaptação climática até 2035, chegando a algo em torno de US$ 120 bilhões. Vale distinguir os dois eixos do financiamento climático: MITIGAÇÃO busca reduzir emissões; ADAPTAÇÃO prepara países e populações para impactos já inevitáveis. Historicamente a adaptação recebeu bem menos recursos, e é essa assimetria que a decisão procura corrigir — demanda antiga dos países em desenvolvimento.",
      fundamento: "Decisões da COP30 sobre financiamento climático, Belém, nov/2025.",
      macete: "Adaptação: triplicar até 2035, na casa de US$ 120 bi.",
      erroComum: "Confundir financiamento de adaptação com o de mitigação.",
      comoBancaPensa: "Cobra multiplicador e prazo, que são fáceis de trocar.",
    },
  },
  {
    id: "AT-065", disciplina: "Atualidades", assunto: "COP30 e Política Climática",
    subassunto: "Presidência brasileira da COP",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (presidência brasileira da COP e roteiros globais, 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.8,
    enunciado: "Encerrada a conferência de Belém, a presidência da COP passou imediatamente ao país-sede da edição seguinte, cessando as atribuições do Brasil na condução do processo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "cessando as atribuições do Brasil",
    cognitivo: {
      motivo: "Cobrar a duração do mandato presidencial da COP, que se estende por todo o ano seguinte.",
      palavraCritica: "imediatamente ... cessando",
    },
    comentario: {
      resolucao: "ERRADO. A presidência de uma COP não se encerra com a conferência: o Brasil permanece à frente do processo até novembro de 2026, quando ocorre a edição seguinte. Durante esse período o país lidera a elaboração de dois roteiros globais — um para deter e reverter o desmatamento, outro para promover o afastamento dos combustíveis fósseis de forma justa, ordenada e equitativa. É no chamado ano de presidência que se cobra a implementação do que foi acordado.",
      fundamento: "Presidência brasileira da COP30 e mandato até nov/2026.",
      macete: "O Brasil preside a COP durante todo o ano seguinte à conferência.",
      erroComum: "Supor que a presidência acaba junto com o evento.",
      comoBancaPensa: "Encurta um mandato que se estende por doze meses.",
    },
  },
  {
    id: "AT-066", disciplina: "Atualidades", assunto: "COP30 e Política Climática",
    subassunto: "Roteiro dos combustíveis fósseis",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (roteiros globais sob a presidência brasileira da COP)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.76,
    enunciado: "Sob a presidência brasileira, foi definida a elaboração de roteiro global determinando a proibição imediata da exploração de combustíveis fósseis pelos países signatários.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "proibição imediata",
    cognitivo: {
      motivo: "Cobrar a linguagem exata do compromisso, que é gradualista e não proibitiva.",
      palavraCritica: "proibição imediata",
    },
    comentario: {
      resolucao: "ERRADO. O roteiro trata do AFASTAMENTO dos combustíveis fósseis de forma 'justa, ordenada e equitativa' — expressão negociada palavra por palavra justamente para afastar a ideia de proibição imediata. A formulação reconhece que países dependem em graus distintos desses recursos e que a transição precisa considerar impactos sociais e econômicos. Nenhuma decisão de COP proíbe exploração: elas estabelecem trajetórias e metas.",
      fundamento: "Roteiros globais sob a presidência brasileira da COP, 2026.",
      macete: "Afastamento justo, ordenado e equitativo — nunca proibição imediata.",
      erroComum: "Ler compromissos climáticos como vedações autoaplicáveis.",
      comoBancaPensa: "Radicaliza um compromisso gradual até torná-lo falso.",
    },
  },

  /* ============ CULTURA E ESPORTE ============ */

  {
    id: "AT-067", disciplina: "Atualidades", assunto: "Copa do Mundo de 2026",
    subassunto: "Sedes e final",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Copa do Mundo FIFA de 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.82,
    enunciado: "A Copa do Mundo FIFA de 2026 foi organizada conjuntamente por Estados Unidos, México e Canadá, e sua partida final foi disputada em território norte-americano.",
    gabarito: "C", pegadinha: "verdade-mais-falso", palavraChave: "conjuntamente por Estados Unidos, México e Canadá",
    cognitivo: {
      motivo: "Fixar o formato inédito de sede tripla, dado de circulação ampla e cobrança fácil.",
      palavraCritica: "conjuntamente",
    },
    comentario: {
      resolucao: "CERTO. Foi a primeira Copa do Mundo masculina organizada por três países. A final ocorreu em 19 de julho de 2026, no MetLife Stadium, em East Rutherford, Nova Jérsia, na região metropolitana de Nova York; a abertura coube ao México. O torneio também inaugurou o formato ampliado de 48 seleções, contra as 32 das edições anteriores.",
      fundamento: "Copa do Mundo FIFA de 2026 (EUA, México e Canadá).",
      macete: "Três sedes, 48 seleções, final em Nova Jérsia.",
      erroComum: "Atribuir a organização a um único país.",
      comoBancaPensa: "Cobra o evento esportivo de maior audiência do ano.",
    },
  },
  {
    id: "AT-068", disciplina: "Atualidades", assunto: "Copa do Mundo de 2026",
    subassunto: "Resultado da final",
    concurso: "PCAL", cargo: ["Agente", "Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (final da Copa do Mundo FIFA de 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.8,
    enunciado: "Na final da Copa do Mundo de 2026, a Argentina confirmou o favoritismo e conquistou o bicampeonato consecutivo, repetindo o título obtido em 2022.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "Argentina ... bicampeonato consecutivo",
    cognitivo: {
      motivo: "Cobrar o desfecho da final, trocando o campeão pelo vice.",
      palavraCritica: "Argentina",
    },
    comentario: {
      resolucao: "ERRADO. Quem venceu foi a ESPANHA, que derrotou a Argentina por 1 a 0 na prorrogação, com gol de Ferran Torres aos 106 minutos, depois de empate sem gols no tempo normal. A Argentina, atual campeã, não conseguiu revalidar o título de 2022 e terminou como vice. Para a Espanha foi o segundo título mundial de sua história — o primeiro havia sido em 2010 —, e não um bicampeonato consecutivo.",
      fundamento: "Final da Copa do Mundo FIFA de 2026, 19/07/2026.",
      macete: "Espanha 1×0 Argentina, na prorrogação. Bi da Espanha (2010 e 2026).",
      erroComum: "Assumir que a seleção favorita ou a atual campeã venceu.",
      comoBancaPensa: "Troca campeão por vice em um resultado de ampla circulação.",
    },
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE74);
