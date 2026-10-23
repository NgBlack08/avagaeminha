/* =====================================================================
   QUESTLAB — Lote 112: MÚLTIPLA ESCOLHA DERIVADA DOS QAPs DE LEGISLAÇÃO

   MÉTODO E REGRAS: os dos lotes 98 e 106. Cada item reúne quatro
   afirmativas I–IV que já existem no banco como itens CERTO/ERRADO dos
   lotes 107 a 111. O valor de verdade de cada uma vem do gabarito do item
   de origem; o gerador monta as cinco alternativas e recusa conjuntos em
   que a correta seja a opção mais 'central'. Pares do mesmo ponto (certo
   e errado) não foram juntados, e só entraram afirmativas autossuficientes.

   17 itens: Legislação Institucional (AL) 10, Ética no Serviço Público 3,
   Crimes Cibernéticos e Segurança Digital 3, Legislação Especial 1.
   ===================================================================== */

const BASE112 = {
  concurso: "PCAL", cargo: ["Escrivão", "Agente"], ano: 2026,
  tipo: "ME", probReaparecer: 0.8,
  origem: "Autoral QuestLab — múltipla escolha derivada de itens C/E dos QAPs DSO já no banco (lotes 107 a 111); IDs de origem no subassunto",
};

const QUESTOES_PCAL_LOTE112 = [

  {
    ...BASE112,
    id: "LI-395", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Derivado de LI-278, LI-281, LI-282, LI-283 — cargos e requisitos de provimento",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos cargos da Polícia Civil previstos no Estatuto de Alagoas (Lei estadual n.º 3.437/1975), considere as seguintes afirmações:\n\nI. Segundo o Estatuto da Polícia Civil de Alagoas, basta a conclusão do ensino médio para o provimento do cargo de Inspetor de Polícia, sendo a graduação em Direito apenas um diferencial, não uma exigência.\nII. Candidato ao cargo de Perito Criminal, bacharel em Química, não pode ser eliminado por falta de graduação em Direito, pois, sendo a perícia atividade de natureza científica, o Estatuto da PC-AL se satisfaz com formação técnica na área.\nIII. O Guarda de Presídio pode recusar-se a escoltar preso até o hospital quando escalado para vigilância, porque o Estatuto da PC-AL limita suas atribuições às tarefas da escala de serviço.\nIV. No concurso para Dactiloscopista, é indevida a exigência de graduação superior de candidato que comprovou o ensino médio e o curso oficial de dactiloscopia, porque o Estatuto da PC-AL não pede mais do que isso para o cargo.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "exigencia-inexistente", palavraChave: "Dactiloscopista",
    cognitivo: {
      motivo: "Comparar os requisitos de provimento de quatro cargos do Estatuto.",
      palavraCritica: "2º grau",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I incorreta: o gabarito do material aponta o curso de Direito como exigência para o Inspetor (art. 15, parágrafo único), e o cargo está na Parte Suplementar. Afirmativa II incorreta: o art. 21, parágrafo único, exige curso de Direito e curso de Perícia Criminal para o Perito Criminal. Afirmativa III incorreta: o art. 24 inclui, entre as atribuições do Guarda de Presídio, 'quando necessário, desempenhar outras missões'. Afirmativa IV correta: o art. 25, parágrafo único, exige 2º grau e curso de dactiloscopia; graduação superior é exigência não prevista. Resta(m) apenas a afirmativa IV.",
      fundamento: "Lei estadual 3.437/1975, arts. 15, 21, 24 e 25.",
      macete: "Inspetor e Perito Criminal: Direito. Dactiloscopista: 2º grau + curso.",
      erroComum: "Aplicar ao Estatuto de 1975 a lógica das carreiras atuais.",
      comoBancaPensa: "Mistura requisitos de cargos diferentes.",
    },
  },

  {
    ...BASE112,
    id: "LI-396", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)",
    subassunto: "Derivado de LI-289, LI-290, LI-292, LI-295 — detenção, suspensão e comissão de disciplina",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Com relação ao regime disciplinar do Estatuto da Polícia Civil de Alagoas, considere as seguintes afirmações:\n\nI. É válida a ordem escrita de Delegado de Polícia que impõe a subordinado detenção disciplinar de dez dias em sala especial da SSP, porquanto o Estatuto da PC-AL permite que qualquer autoridade de direção policial determine essa medida.\nII. É nula, por incompetência, a suspensão de vinte e cinco dias aplicada por Diretor de Departamento a policial civil subordinado.\nIII. Viola o Estatuto da PC-AL o cumprimento, na residência do policial, de detenção disciplinar de quarenta e oito horas, visto que toda detenção deve ser cumprida em repartição policial designada.\nIV. Os membros da Comissão de Disciplina dedicam-se exclusivamente aos trabalhos do colegiado, com dispensa de outras funções, e podem ser destituídos se agirem com desídia ou forem indiciados.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
    ],
    gabarito: "B", pegadinha: "troca-numerica", palavraChave: "detenção disciplinar",
    cognitivo: {
      motivo: "Juntar limites de competência e regras de cumprimento da detenção.",
      palavraCritica: "20 dias",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I incorreta: a conversão em detenção depende do Secretário ou do Governador (art. 96); Delegados aplicam só repreensão e suspensão até 10 dias (art. 109, IV). Afirmativa II correta: Diretores de Departamento aplicam suspensão até 20 dias (art. 109, III); 25 dias excedem a competência. Afirmativa III incorreta: a detenção de até 48 horas é cumprida na residência (art. 96, § 2º, I). Afirmativa IV correta: é o que dizem os arts. 121 e 122. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "Lei estadual 3.437/1975, arts. 96, 109, 121 e 122.",
      macete: "Detenção: Secretário/Governador; até 48 h em casa; Diretores até 20 dias de suspensão.",
      erroComum: "Confundir os limites por escalão.",
      comoBancaPensa: "Varia números e autoridades.",
    },
  },

  {
    ...BASE112,
    id: "LI-397", disciplina: "Legislação Institucional (AL)", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Derivado de LI-299, LI-306, LI-309, LI-312 — formas de provimento e exoneração",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "De acordo com a Lei estadual n.º 5.247/1991 (Regime Jurídico Único dos servidores civis de Alagoas), considere as seguintes afirmações:\n\nI. Se um servidor público civil não for aprovado em estágio probatório no cargo público em que tenha tomado posse, poderá ocorrer o seu aproveitamento, se anteriormente ele ocupava cargo efetivo.\nII. A exoneração de cargo efetivo poderá ser efetivada de ofício pela administração.\nIII. A nomeação restringe-se aos cargos de provimento efetivo.\nIV. A nomeação é a forma originária de provimento dos cargos públicos, sendo formas derivadas a promoção e a ascensão.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "C", pegadinha: "troca-conceito", palavraChave: "aproveitamento",
    cognitivo: {
      motivo: "Distinguir as formas de provimento e de vacância.",
      palavraCritica: "reconduzido",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I incorreta: o servidor estável reprovado no estágio é reconduzido; aproveitamento é o retorno do servidor em disponibilidade. Afirmativa II correta: a exoneração de cargo efetivo dá-se a pedido ou de ofício. Afirmativa III incorreta: o art. 9º prevê nomeação em caráter efetivo e em comissão. Afirmativa IV correta: a nomeação é originária; promoção e ascensão são derivadas no texto de 1991 (a ascensão é inconstitucional, SV 43). Resta(m) apenas as afirmativas II e IV.",
      fundamento: "Lei estadual 5.247/1991, art. 9º e seguintes; STF, Súmula Vinculante 43.",
      macete: "Reprovou no estágio: recondução. Disponibilidade: aproveitamento.",
      erroComum: "Trocar recondução por aproveitamento.",
      comoBancaPensa: "Troca rótulos de institutos vizinhos.",
    },
  },

  {
    ...BASE112,
    id: "LI-398", disciplina: "Legislação Institucional (AL)", assunto: "Regime jurídico dos servidores estaduais",
    subassunto: "Derivado de LI-297, LI-301, LI-308, LI-311 — licenças e vantagens",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Com base no Regime Jurídico Único dos servidores civis de Alagoas (Lei estadual n.º 5.247/1991), considere as seguintes afirmações:\n\nI. Com base na Lei n.º 5.247/1991, servidor público civil que estiver em gozo de licença por motivo de doença em pessoa da família não poderá exercer qualquer atividade remunerada, mas poderá exercê-la se a licença for por motivo de afastamento de cônjuge.\nII. Servidor público civil que receba indenização, gratificação e adicionais terá somente essas duas últimas vantagens incorporadas ao seu vencimento.\nIII. Os adicionais de insalubridade e periculosidade incorporam-se à remuneração do servidor, ainda que cessadas as condições que os tenham ensejado.\nIV. Vencimento consiste na retribuição pecuniária pelo exercício do cargo público acrescida das vantagens pecuniárias permanentes estabelecidas em lei.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa I está correta.",
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
    ],
    gabarito: "D", pegadinha: "troca-conceito", palavraChave: "vencimento",
    cognitivo: {
      motivo: "Juntar regras de licenças e de remuneração do RJU.",
      palavraCritica: "incorporam-se",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I correta: na licença por doença em pessoa da família é vedada atividade remunerada; na licença por afastamento do cônjuge, não. Afirmativa II correta: indenizações não se incorporam; gratificações e adicionais incorporam-se na forma da lei (art. 59). Afirmativa III incorreta: insalubridade e periculosidade cessam com as condições que as ensejaram. Afirmativa IV incorreta: vencimento é a retribuição pelo cargo; somado às vantagens permanentes forma a remuneração. Resta(m) apenas as afirmativas I e II.",
      fundamento: "Lei estadual 5.247/1991, art. 59 e disposições sobre licenças e adicionais.",
      macete: "Vencimento + vantagens = remuneração; indenização não incorpora.",
      erroComum: "Tratar vencimento e remuneração como sinônimos.",
      comoBancaPensa: "Mistura conceitos de remuneração.",
    },
  },

  {
    ...BASE112,
    id: "LI-399", disciplina: "Legislação Institucional (AL)", assunto: "Estrutura organizacional da PC-AL (Lei 6.441/2003)",
    subassunto: "Derivado de LI-321, LI-324, LI-325, LI-332 — natureza, objetivos e competências",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca da Lei estadual n.º 6.441/2003, que organiza a Polícia Civil de Alagoas, considere as seguintes afirmações:\n\nI. A Polícia Civil de Alagoas, apesar da autonomia administrativa e gerencial que a lei lhe confere, é entidade da administração indireta do Estado, vinculada ao Secretário Coordenador de Justiça e Defesa Social.\nII. Entre os objetivos institucionais da Polícia Civil de Alagoas está o emprego, como regra, dos recursos da inteligência, da persuasão e do diálogo, reservando-se o uso da força para quando se apresentar como recurso extremo.\nIII. A instauração de inquérito policial não figura entre as competências privativas da Polícia Civil listadas na Lei estadual n.º 6.441/2003, por ser atribuição exclusiva da autoridade judiciária.\nIV. Compete ao Departamento de Polícia do Interior executar, coordenar e fiscalizar as atividades de polícia judiciária das delegacias especializadas situadas no interior do Estado.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
    ],
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "administração indireta",
    cognitivo: {
      motivo: "Revisar natureza, objetivos e competências da PC-AL.",
      palavraCritica: "privativas",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I incorreta: a Polícia Civil é órgão da administração direta, subordinada diretamente ao Governador (art. 1º). Afirmativa II correta: o art. 6º, VI, coloca a força como recurso extremo. Afirmativa III incorreta: o art. 7º, IX, inclui a instauração de inquérito entre as competências privativas da Polícia Civil. Afirmativa IV correta: o art. 24 dá ao DEPIN as delegacias especializadas do interior. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "Lei estadual 6.441/2003, arts. 1º, 6º, 7º e 24.",
      macete: "PC-AL: direta, ligada ao Governador; inquérito é dela.",
      erroComum: "Confundir autonomia com administração indireta.",
      comoBancaPensa: "Troca natureza jurídica e competências.",
    },
  },

  {
    ...BASE112,
    id: "LI-400", disciplina: "Legislação Institucional (AL)", assunto: "Carreiras da PC-AL (Lei 6.276/2001)",
    subassunto: "Derivado de LI-337, LI-341, LI-342, LI-350 — ingresso e subsídio",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Considerando a Lei estadual n.º 6.276/2001, que estrutura as carreiras de Agente e Escrivão da Polícia Civil de Alagoas, considere as seguintes afirmações:\n\nI. A prova específica de conhecimentos de digitação e informática prevista na Lei estadual n.º 6.276/2001 é exigida somente dos candidatos a Escrivão de Polícia, e não dos candidatos a Agente.\nII. Policial civil remunerado por subsídio nos termos da Lei estadual n.º 6.276/2001 pode receber adicional de insalubridade, além do subsídio, se trabalhar habitualmente em condições nocivas à saúde.\nIII. O pagamento de adicional noturno ao Agente de Polícia remunerado por subsídio não ofende, por si só, a regra da parcela única da Lei estadual n.º 6.276/2001, pois o próprio diploma ressalva expressamente essa vantagem.\nIV. Pós-graduação feita no exterior pode ser usada para progressão funcional na Parte Permanente sem nenhuma providência no Brasil, bastando comprovar que a instituição estrangeira é oficialmente reconhecida no país onde funciona.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa III está correta.",
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
    ],
    gabarito: "A", pegadinha: "restricao-indevida", palavraChave: "adicional noturno",
    cognitivo: {
      motivo: "Juntar regras de ingresso, subsídio e titulação.",
      palavraCritica: "ressalva",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I incorreta: a prova de digitação e informática vale para ambos os cargos; só o certificado de digitação é exclusivo do Escrivão (art. 3º, § 1º). Afirmativa II incorreta: o art. 5º veda insalubridade e periculosidade no regime de subsídio. Afirmativa III correta: o art. 5º ressalva o adicional noturno, assegurado pelo § 2º. Afirmativa IV incorreta: o título obtido no exterior precisa ser revalidado por instituição brasileira (art. 7º, § 4º). Resta(m) apenas a afirmativa III.",
      fundamento: "Lei estadual 6.276/2001, arts. 3º, 5º e 7º.",
      macete: "Subsídio admite: confiança, interior, noturno, indenização.",
      erroComum: "Achar que o subsídio veda toda parcela.",
      comoBancaPensa: "Testa as ressalvas do subsídio.",
    },
  },

  {
    ...BASE112,
    id: "LI-401", disciplina: "Legislação Institucional (AL)", assunto: "Carreiras da PC-AL (Lei 6.276/2001)",
    subassunto: "Derivado de LI-346, LI-348, LI-349, LI-353 — progressão horizontal e vertical",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "No que se refere à progressão funcional prevista na Lei estadual n.º 6.276/2001, considere as seguintes afirmações:\n\nI. Escrivão da Parte Permanente na Classe B há quatro anos que já concluiu as horas de capacitação exigidas para a Classe C pode progredir de imediato, porque, cumprida a titulação, a lei não impõe requisito temporal.\nII. Na Parte Permanente, quem concluiu três especializações na área de atuação satisfaz a titulação do Nível III da progressão vertical, mesmo sem ser mestre.\nIII. O Nível IV da progressão vertical na Parte Permanente exige obrigatoriamente doutorado na área de atuação, pois o acúmulo de especializações só substitui o mestrado no Nível III.\nIV. Servidor da Parte Especial com nível médio e 120 horas de qualificação profissional na área de atuação cumpre a titulação do Nível III da progressão vertical, não precisando cumprir interstício de cinco anos para essa progressão.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
    ],
    gabarito: "B", pegadinha: "exigencia-inexistente", palavraChave: "Nível IV",
    cognitivo: {
      motivo: "Separar requisitos da progressão horizontal e da vertical.",
      palavraCritica: "exclusivamente",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I incorreta: a progressão horizontal exige também o interstício de cinco anos (art. 7º, § 2º). Afirmativa II correta: o Nível III exige duas especializações ou mestrado; três especializações bastam (art. 7º, § 3º, III). Afirmativa III incorreta: o Nível IV admite três especializações, mestrado mais uma especialização ou doutorado. Afirmativa IV correta: a progressão vertical obedece exclusivamente à titulação (art. 8º, § 4º), sem interstício. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "Lei estadual 6.276/2001, arts. 7º e 8º.",
      macete: "Horizontal: título + 5 anos. Vertical: só título.",
      erroComum: "Levar o interstício para a progressão vertical.",
      comoBancaPensa: "Mistura requisitos das duas linhas.",
    },
  },

  {
    ...BASE112,
    id: "LI-402", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis",
    subassunto: "Derivado de LI-366, LI-369, LI-371, LI-374 — Delegado-Geral, Conselho e Corregedoria",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Com base na Lei n.º 14.735/2023 (Lei Orgânica Nacional das Polícias Civis), considere as seguintes afirmações:\n\nI. O Delegado-Geral de Polícia Civil é nomeado pelo governador entre os delegados de polícia em atividade da classe mais elevada do cargo.\nII. Presidido pelo Delegado-Geral, o Conselho Superior de Polícia Civil é formado só por delegados de polícia, admitida, conforme a lei do ente federativo, a participação apenas consultiva de representantes dos demais cargos.\nIII. Nos processos disciplinares com pena de demissão, a Lei Orgânica Nacional garante duplo grau de revisão: recurso primeiro ao Delegado-Geral e depois ao Conselho Superior de Polícia Civil, que decide em definitivo na esfera administrativa.\nIV. Mesmo que o órgão central de perícia criminal não esteja integrado à polícia civil, é garantido a esta, mediante requisição fundamentada, o livre acesso aos bancos de dados das unidades técnico-científicas não integradas.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa I está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "C", pegadinha: "troca-sujeito", palavraChave: "Conselho Superior",
    cognitivo: {
      motivo: "Revisar a cúpula da polícia civil na LONPC.",
      palavraCritica: "todos os cargos",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I correta: é o art. 8º: delegado em atividade, da classe mais elevada, nomeado pelo governador. Afirmativa II incorreta: o Conselho Superior é composto por representantes de todos os cargos, com participação paritária (art. 9º). Afirmativa III incorreta: o recurso na demissão vai ao Conselho Superior e, em última instância, ao Chefe do Executivo (art. 10, § 3º). Afirmativa IV correta: é o art. 15, § 3º. Resta(m) apenas as afirmativas I e IV.",
      fundamento: "Lei 14.735/2023, arts. 8º, 9º, 10 e 15.",
      macete: "Conselho: todos os cargos. Demissão: Conselho e depois Governador.",
      erroComum: "Pôr o Delegado-Geral na instância recursal.",
      comoBancaPensa: "Troca órgãos e composição.",
    },
  },

  {
    ...BASE112,
    id: "LI-403", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis",
    subassunto: "Derivado de LI-376, LI-377, LI-379, LI-383 — concurso, formação e porte",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "De acordo com a Lei n.º 14.735/2023, considere as seguintes afirmações:\n\nI. Exigem-se do candidato a delegado de polícia bacharelado em Direito e três anos de atividade jurídica ou policial, comprovados no ato da posse, e não necessariamente na inscrição no concurso.\nII. Desde que a lei do ente federativo o permita, o concurso para delegado de polícia pode ser só de provas, sendo facultativas a prova oral e a participação da Ordem dos Advogados do Brasil.\nIII. Durante o curso de formação profissional, de caráter eliminatório, o candidato tem direito à ajuda de custo de, no mínimo, metade da remuneração prevista para a classe inicial do cargo.\nIV. Os policiais civis em atividade têm livre porte de arma de fogo válido em todo o território nacional e conservam essa autorização ao se aposentarem, na forma da legislação em vigor.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "D", pegadinha: "troca-conceito", palavraChave: "ajuda de custo",
    cognitivo: {
      motivo: "Juntar regras de concurso, formação e direitos.",
      palavraCritica: "posse",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I correta: os requisitos do delegado são comprovados no ato da posse (art. 20, § 5º). Afirmativa II incorreta: o concurso de delegado é de provas e títulos, com OAB em todas as fases e prova oral obrigatória (arts. 20, § 4º, e 21, § 3º). Afirmativa III incorreta: a ajuda de custo no curso de formação 'pode ser concedida' (art. 22); não é direito. Afirmativa IV correta: é o art. 30, II e § 3º. Resta(m) apenas as afirmativas I e IV.",
      fundamento: "Lei 14.735/2023, arts. 20, 21, 22 e 30.",
      macete: "Delegado: provas + títulos + OAB + oral; ajuda de custo é faculdade.",
      erroComum: "Transformar faculdades em direitos ou vice-versa.",
      comoBancaPensa: "Troca 'pode' por 'deve'.",
    },
  },

  {
    ...BASE112,
    id: "LI-404", disciplina: "Legislação Institucional (AL)", assunto: "Lei Orgânica Nacional das Polícias Civis",
    subassunto: "Derivado de LI-357, LI-358, LI-359, LI-361 — princípios, diretrizes e competências",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "A respeito dos princípios, das diretrizes e das competências da polícia civil na Lei n.º 14.735/2023, considere as seguintes afirmações:\n\nI. Sendo princípio institucional da polícia civil, o sigilo da investigação é absoluto e deve prevalecer mesmo quando não for necessário à efetividade da apuração nem à proteção da intimidade das pessoas.\nII. Constitui diretriz da polícia civil o planejamento e a distribuição do efetivo por resolução do Conselho Superior de Polícia Civil, de forma proporcional ao número de habitantes, à extensão territorial e aos índices de criminalidade da circunscrição.\nIII. A repressão qualificada que a Lei Orgânica Nacional fixa como diretriz da polícia civil restringe-se aos crimes hediondos e equiparados, à corrupção, à lavagem de dinheiro, ao tráfico de drogas e ao crime organizado, não alcançando os crimes cibernéticos nem os crimes contra a administração pública.\nIV. Garantir a preservação dos locais de ocorrência de infração penal e controlar o acesso de pessoas a eles compete exclusivamente à polícia civil, vedada a atuação de outros órgãos policiais inclusive nas situações de flagrante delito.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
      "Apenas a afirmativa II está correta.",
    ],
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "sigilo",
    cognitivo: {
      motivo: "Revisar ressalvas dos arts. 4º a 6º.",
      palavraCritica: "necessário",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I incorreta: o sigilo é o 'necessário' à investigação e à intimidade (art. 4º, II), não absoluto. Afirmativa II correta: é o art. 5º, I. Afirmativa III incorreta: a repressão qualificada inclui crimes cibernéticos e contra a administração pública (art. 5º, V). Afirmativa IV incorreta: a preservação do local se dá sem prejuízo de outros órgãos policiais no flagrante (art. 6º, II). Resta(m) apenas a afirmativa II.",
      fundamento: "Lei 14.735/2023, arts. 4º, 5º e 6º.",
      macete: "LONPC: sigilo necessário; local de crime sem excluir o flagrante.",
      erroComum: "Esquecer as ressalvas.",
      comoBancaPensa: "Apaga ressalvas para criar absolutos.",
    },
  },

  {
    ...BASE112,
    cargo: ["Escrivão", "Agente", "Especialista em Saúde — Fisioterapia"],
    id: "ET-109", disciplina: "Ética no Serviço Público", assunto: "Ética e moral",
    subassunto: "Derivado de ET-062, ET-064, ET-066, ET-072 — conceitos e valores",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "A respeito de ética, moral e valores, considere as seguintes afirmações:\n\nI. Os valores éticos sujeitam-se a aspectos sociais e culturais, razão pela qual são mutáveis.\nII. Na perspectiva clássica, a ética assume uma concepção predominantemente formal, dissociada da análise dos bens que as pessoas desejam e do modo como aqueles são distribuídos no direito, na política e na economia.\nIII. A conduta ética é racionalmente justificável e praticada de forma autônoma.\nIV. Em uma democracia, as escolhas políticas são inteiramente dissociadas de valores morais.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas a afirmativa I está correta.",
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
    ],
    gabarito: "A", pegadinha: "troca-conceito", palavraChave: "perspectiva clássica",
    cognitivo: {
      motivo: "Revisar conceitos de ética e moral.",
      palavraCritica: "autônoma",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I correta: os valores éticos variam conforme a sociedade e a época. Afirmativa II incorreta: a ética clássica é material, voltada aos bens e à justiça; o formalismo é marca da ética moderna. Afirmativa III correta: a conduta ética é racional e autônoma. Afirmativa IV incorreta: as escolhas políticas democráticas refletem valores; não são inteiramente dissociadas da moral. Resta(m) apenas as afirmativas I e III.",
      fundamento: "Doutrina de ética e moral; CF, arts. 1º e 3º.",
      macete: "Ética: reflexão autônoma; valores mudam.",
      erroComum: "Atribuir à ética clássica o formalismo moderno.",
      comoBancaPensa: "Mistura conceitos filosóficos.",
    },
  },

  {
    ...BASE112,
    cargo: ["Escrivão", "Agente", "Especialista em Saúde — Fisioterapia"],
    id: "ET-110", disciplina: "Ética no Serviço Público", assunto: "Ética no serviço público",
    subassunto: "Derivado de ET-077, ET-078, ET-079, ET-080 — deveres do servidor",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Com relação aos deveres éticos do servidor público, considere as seguintes afirmações:\n\nI. O servidor público, ao tomar conhecimento de atos e fatos contrários ao interesse público, possui discricionariedade para reportá-los a seus superiores.\nII. A prestação de contas é dever do servidor público, porém deve ser retardada quando assim determinarem os superiores hierárquicos.\nIII. É dever do servidor público manter-se atualizado em relação às instruções, às normas de serviço e à legislação pertinentes ao órgão onde exerce suas funções.\nIV. A observância da moralidade na administração pública possui estatura unicamente infraconstitucional, pois se origina de disciplina veiculada nos códigos de ética elaborados no âmbito das administrações federais, estaduais e municipais.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas a afirmativa III está correta.",
      "Apenas as afirmativas I e III estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
    ],
    gabarito: "B", pegadinha: "troca-conceito", palavraChave: "prestação de contas",
    cognitivo: {
      motivo: "Revisar deveres do Decreto 1.171/1994.",
      palavraCritica: "dever",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I incorreta: comunicar fatos contrários ao interesse público é dever, não faculdade (Decreto 1.171/1994, XIV, 'm'). Afirmativa II incorreta: jamais se deve retardar prestação de contas (XIV, 'd'). Afirmativa III correta: manter-se atualizado é dever (XIV, 'q'). Afirmativa IV incorreta: a moralidade é princípio constitucional (CF, art. 37, caput). Resta(m) apenas a afirmativa III.",
      fundamento: "Decreto 1.171/1994, XIV; CF, art. 37.",
      macete: "Comunicar, prestar contas, atualizar-se: deveres.",
      erroComum: "Tratar deveres como faculdades.",
      comoBancaPensa: "Converte deveres em opções.",
    },
  },

  {
    ...BASE112,
    cargo: ["Escrivão", "Agente", "Especialista em Saúde — Fisioterapia"],
    id: "ET-111", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)",
    subassunto: "Derivado de ET-088, ET-089, ET-092, ET-100 — vedações e regras deontológicas",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "À luz do Código de Ética dos servidores de Alagoas (Lei estadual n.º 6.754/2006), considere as seguintes afirmações:\n\nI. O Código de Ética de Alagoas veda que o servidor se apresente embriagado durante o expediente, mas nada dispõe sobre a embriaguez fora do ambiente de trabalho.\nII. Para o Código de Ética, a moralidade administrativa integra o Direito como elemento indissociável e se converte em fator de legalidade, de modo que um ato eticamente reprovável pode ser inválido ainda que aparentemente conforme a lei.\nIII. Admite-se que o servidor solicite doações ou ajudas de particulares para cumprir sua missão ou acelerar o serviço, desde que os valores revertam ao setor e sejam devidamente registrados.\nIV. Ainda que não gere atraso em processos, a ausência injustificada do servidor ao trabalho é fator de desmoralização do serviço público, com reflexos negativos nas relações humanas.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas III e IV estão corretas.",
      "Apenas as afirmativas II, III e IV estão corretas.",
    ],
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "embriagado",
    cognitivo: {
      motivo: "Revisar regras e vedações do Código estadual.",
      palavraCritica: "fator de legalidade",
    },
    comentario: {
      resolucao: "GABARITO C. Afirmativa I incorreta: o art. 5º, XIII, veda a embriaguez no serviço ou fora dele. Afirmativa II correta: a moralidade integra o Direito e se converte em fator de legalidade (art. 2º). Afirmativa III incorreta: é vedado pleitear ou receber ajuda, doação ou vantagem de particulares (Decreto 1.171, XV, 'g'). Afirmativa IV correta: a ausência injustificada é fator de desmoralização do serviço público. Resta(m) apenas as afirmativas II e IV.",
      fundamento: "Lei estadual 6.754/2006, arts. 2º e 5º; Decreto 1.171/1994.",
      macete: "Embriaguez: dentro e fora do serviço.",
      erroComum: "Limitar vedações ao expediente.",
      comoBancaPensa: "Restringe vedações amplas.",
    },
  },

  {
    ...BASE112,
    id: "CC-154", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "LGPD",
    subassunto: "Derivado de CC-126, CC-129, CC-134, CC-135 — conceitos e agentes de tratamento",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Considerando as definições da Lei n.º 13.709/2018 (LGPD), considere as seguintes afirmações:\n\nI. Conforme a LGPD, o dado pessoal relativo a origem racial ou étnica, bem como a convicção religiosa e opinião política, é classificado como dado pessoal anonimizado.\nII. Aquele que realiza o tratamento de dados pessoais em nome do operador é denominado controlador.\nIII. Considera-se encarregado a pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do controlador.\nIV. Com base na Lei Geral de Proteção de Dados, considera-se relatório de impacto à proteção de dados pessoais a documentação do controlador que contém a descrição dos processos de tratamento de dados pessoais que podem gerar riscos às liberdades civis e aos direitos fundamentais, bem como medidas, salvaguardas e mecanismos de mitigação de riscos.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas a afirmativa IV está correta.",
      "Apenas as afirmativas I, III e IV estão corretas.",
    ],
    gabarito: "D", pegadinha: "troca-sujeito", palavraChave: "encarregado",
    cognitivo: {
      motivo: "Revisar definições do art. 5º.",
      palavraCritica: "relatório de impacto",
    },
    comentario: {
      resolucao: "GABARITO D. Afirmativa I incorreta: origem racial, convicção religiosa e opinião política são dados sensíveis (art. 5º, II), não anonimizados. Afirmativa II incorreta: o operador trata dados em nome do controlador (art. 5º, VII); o item inverte os papéis. Afirmativa III incorreta: a definição é a de operador; encarregado é o canal de comunicação (art. 5º, VIII). Afirmativa IV correta: é a definição do art. 5º, XVII. Resta(m) apenas a afirmativa IV.",
      fundamento: "Lei 13.709/2018, art. 5º, II, VII, VIII e XVII.",
      macete: "Controlador decide; operador executa; encarregado comunica.",
      erroComum: "Trocar os agentes.",
      comoBancaPensa: "Troca definições entre conceitos vizinhos.",
    },
  },

  {
    ...BASE112,
    id: "CC-155", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "LGPD",
    subassunto: "Derivado de CC-136, CC-130, CC-141, CC-142 — consentimento e término do tratamento",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca do consentimento e das hipóteses de tratamento na LGPD, considere as seguintes afirmações:\n\nI. O tratamento de dados pessoais deve ser realizado mediante o consentimento do titular, ficando dispensada tal exigência para os dados tornados manifestamente públicos pelo titular.\nII. O consentimento do titular dos dados pessoais pode ser obtido de forma implícita e inferido a partir de ações indiretas do titular, como a navegação em um site ou o uso de um serviço.\nIII. O tratamento dos dados sensíveis poderá ocorrer, inclusive, visando à proteção da vida ou da incolumidade física do titular ou de terceiro.\nIV. O término do tratamento de dados pessoais ocorrerá exatamente quando da revogação do consentimento pela autoridade nacional de proteção de dados.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas a afirmativa I está correta.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
      "Todas as afirmativas estão corretas.",
      "Apenas as afirmativas I e III estão corretas.",
    ],
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "consentimento",
    cognitivo: {
      motivo: "Revisar regras de consentimento.",
      palavraCritica: "inequívoca",
    },
    comentario: {
      resolucao: "GABARITO E. Afirmativa I correta: o art. 7º, § 4º, dispensa o consentimento para dados tornados manifestamente públicos pelo titular. Afirmativa II incorreta: o consentimento é manifestação livre, informada e inequívoca (art. 5º, XII); não se presume da navegação. Afirmativa III correta: o art. 11, II, 'e', permite tratar dados sensíveis para proteger a vida. Afirmativa IV incorreta: quem revoga o consentimento é o titular; a ANPD determina o término só por violação da lei (art. 15). Resta(m) apenas as afirmativas I e III.",
      fundamento: "Lei 13.709/2018, arts. 5º, XII, 7º, § 4º, 11 e 15.",
      macete: "Consentimento: inequívoco e revogável pelo titular.",
      erroComum: "Aceitar consentimento tácito.",
      comoBancaPensa: "Mistura hipóteses de dispensa com consentimento presumido.",
    },
  },

  {
    ...BASE112,
    id: "CC-156", disciplina: "Crimes Cibernéticos e Segurança Digital", assunto: "LGPD",
    subassunto: "Derivado de CC-125, CC-128, CC-132, CC-146 — fundamentos, alcance e transferência internacional",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Em relação aos fundamentos e ao alcance da LGPD, considere as seguintes afirmações:\n\nI. A Lei Geral de Proteção de Dados Pessoais (LGPD) não se aplica ao tratamento de dados pessoais realizado para fins exclusivos de atividades de investigação e repressão de infrações penais.\nII. A Lei Geral de Proteção de Dados Pessoais prevê como fundamentos da disciplina da proteção de dados pessoais a livre iniciativa, a livre concorrência e a defesa do consumidor.\nIII. A proteção de dados assegurada pela LGPD abrange apenas as operações de tratamento de dados pessoais realizadas entre particular e o poder público.\nIV. A transferência internacional de dados pessoais no contexto do agronegócio deve observar tanto a legislação de proteção de dados do país destinatário quanto a LGPD; no entanto, quando a transferência tiver como finalidade a obtenção de certificação internacional, ela não estará sujeita às exigências da LGPD.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas a afirmativa II está correta.",
      "Apenas as afirmativas II e III estão corretas.",
      "Apenas as afirmativas II e IV estão corretas.",
      "Apenas as afirmativas I, II e III estão corretas.",
    ],
    gabarito: "A", pegadinha: "restricao-indevida", palavraChave: "transferência internacional",
    cognitivo: {
      motivo: "Revisar fundamentos e limites de aplicação.",
      palavraCritica: "exclui",
    },
    comentario: {
      resolucao: "GABARITO A. Afirmativa I correta: o art. 4º, III, 'd', exclui da LGPD o tratamento para fins exclusivos de investigação e repressão penal. Afirmativa II correta: o art. 2º, VI, inclui livre iniciativa, livre concorrência e defesa do consumidor. Afirmativa III incorreta: a LGPD alcança pessoas de direito público e privado (arts. 1º e 3º). Afirmativa IV incorreta: a transferência internacional só ocorre nas hipóteses do art. 33, sem exceção para certificação. Resta(m) apenas as afirmativas I e II.",
      fundamento: "Lei 13.709/2018, arts. 1º a 4º e 33.",
      macete: "LGPD: público e privado; fora dela, a investigação penal.",
      erroComum: "Restringir o alcance da lei.",
      comoBancaPensa: "Cria exceções e restrições inexistentes.",
    },
  },

  {
    ...BASE112,
    id: "LE-417", disciplina: "Legislação Especial", assunto: "Crimes Falimentares",
    subassunto: "Derivado de LE-408, LE-410, LE-412, LE-413 — classificação, competência e sujeitos",
    dificuldade: 3, tempoIdealSeg: 130,
    enunciado: "Acerca dos crimes falimentares, considere as seguintes afirmações:\n\nI. Segundo a doutrina, são considerados crimes antefalimentares aqueles cujo tipo penal descreve comportamento anterior à decretação da falência e somente por força desta é considerado crime.\nII. Com a declaração da quebra, o ilícito penal, previsto na lei falimentar, é atraído para a competência do juízo falimentar.\nIII. Aos crimes falimentares é inaplicável a regra da co-autoria.\nIV. O perito que, direta ou indiretamente, adquire bens da massa comete crime próprio.\n\nAssinale a alternativa correta:",
    alternativas: [
      "Apenas as afirmativas I e II estão corretas.",
      "Apenas as afirmativas I e IV estão corretas.",
      "Apenas as afirmativas I, II e IV estão corretas.",
      "Apenas as afirmativas I, III e IV estão corretas.",
      "Todas as afirmativas estão corretas.",
    ],
    gabarito: "B", pegadinha: "troca-sujeito", palavraChave: "juízo falimentar",
    cognitivo: {
      motivo: "Revisar classificação, competência e sujeitos.",
      palavraCritica: "crime próprio",
    },
    comentario: {
      resolucao: "GABARITO B. Afirmativa I correta: é a classificação doutrinária dos crimes antefalimentares. Afirmativa II incorreta: a ação penal é de competência do juiz criminal (art. 183 da Lei 11.101/2005). Afirmativa III incorreta: admite-se concurso de pessoas (art. 168, § 3º, e art. 179; CP, art. 29). Afirmativa IV correta: o art. 177 pune o perito que adquire bens da massa; é crime próprio. Resta(m) apenas as afirmativas I e IV.",
      fundamento: "Lei 11.101/2005, arts. 168, 177, 179 e 183.",
      macete: "Crime falimentar: juiz criminal, admite coautoria.",
      erroComum: "Estender o juízo universal ao processo penal.",
      comoBancaPensa: "Troca o juízo e nega a coautoria.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE112);
