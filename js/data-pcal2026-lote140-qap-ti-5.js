/* =====================================================================
   QUESTLAB — Lote 140: TI (parte 5), QAPs DO CURSO DSO — serviços
   públicos digitais e itens inéditos dos cadernos de correio, banco de
   dados, Linux e segurança

   ORIGEM E MÉTODO: cadernos do módulo 02 (TI e Segurança Cibernética),
   com gabarito impresso ("respostas da banca") e sem indicação da prova.
   Cadernos de linguagens e de temas novos do edital de 2026 trazem itens
   do próprio curso: foram reescritos com redação própria. Os de Office,
   IA, Python e correio seguem o padrão de itens CEBRASPE e mantêm o
   texto, sem o comando genérico. Gabarito do material; comentários
   escritos do zero.

   JÁ NO BANCO: os cadernos de Segurança, Windows, Internet, Correio
   Eletrônico, Banco de Dados e Linux foram a base dos itens TI-034 a
   TI-224, que ganharam a anotação de origem. Entram aqui só as 15
   questões desses cadernos que não tinham correspondente no banco.
   ===================================================================== */

const BASE140 = {
  concurso: "PCAL", cargo: ["Escrivão", "Agente"], ano: 2026,
  tipo: "CE", probReaparecer: 0.75,
  disciplina: "TI e Segurança Cibernética",
};

const QUESTOES_PCAL_LOTE140 = [

  /* ===== SERVIÇOS PÚBLICOS DIGITAIS ===== */

  {
    ...BASE140,
    id: "TI-471", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Canal digital preferencial, sem extinguir o presencial",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "A prestação digital dos serviços públicos, adotada como forma preferencial pela política de governo digital, dispensa a administração de manter canais de atendimento presencial.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "dispensa",
    cognitivo: {
      motivo: "Reconhecer o ponto: canal digital preferencial, sem extinguir o presencial.",
      palavraCritica: "dispensa",
    },
    comentario: {
      resolucao: "ERRADO. A Lei do Governo Digital adota o meio digital como forma preferencial, mas assegura ao cidadão o direito ao atendimento presencial. A digitalização amplia o acesso; não autoriza fechar o balcão.",
      fundamento: "Lei nº 14.129/2021 (Governo Digital).",
      macete: "Digital preferencial ≠ digital exclusivo.",
      erroComum: "Ler 'preferencial' como 'exclusivo'.",
      comoBancaPensa: "Converte preferência em exclusividade.",
    },
  },

  {
    ...BASE140,
    id: "TI-472", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Autosserviço como diretriz",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "O autosserviço, entendido como a possibilidade de o próprio usuário concluir a solicitação sem intervenção de servidor, é diretriz da política de governo digital.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "autosserviço",
    cognitivo: {
      motivo: "Reconhecer o ponto: autosserviço como diretriz.",
      palavraCritica: "autosserviço",
    },
    comentario: {
      resolucao: "CERTO. O autosserviço — o próprio usuário concluir a solicitação, sem intervenção de servidor — está entre as diretrizes do Governo Digital, ao lado da desburocratização e da simplificação dos procedimentos.",
      fundamento: "Lei nº 14.129/2021 (Governo Digital).",
      macete: "Governo digital: o cidadão resolve sozinho, pela plataforma.",
      erroComum: "Achar que o atendimento digital sempre passa por um servidor.",
      comoBancaPensa: "Cobra uma diretriz expressa.",
    },
  },

  {
    ...BASE140,
    id: "TI-473", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Documento já em poder da administração",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "É vedado exigir do usuário a apresentação de documento ou informação que já conste de base de dados da própria administração pública.",
    gabarito: "C",
    pegadinha: "restricao-indevida",
    palavraChave: "vedado exigir",
    cognitivo: {
      motivo: "Reconhecer o ponto: documento já em poder da administração.",
      palavraCritica: "vedado exigir",
    },
    comentario: {
      resolucao: "CERTO. A administração não pode exigir do cidadão documento ou informação que já conste de suas bases de dados: cabe a ela obtê-los diretamente, pelo compartilhamento entre órgãos.",
      fundamento: "Decreto nº 9.094/2017; Lei nº 13.726/2018; Lei nº 14.129/2021.",
      macete: "O que o Estado já tem, o Estado busca.",
      erroComum: "Achar normal reapresentar documentos a cada órgão.",
      comoBancaPensa: "Restrição real à atuação da administração.",
    },
  },

  {
    ...BASE140,
    id: "TI-474", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Serviço público digital — conceito",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "Serviço público digital é aquele cuja solicitação, prestação e acompanhamento podem ocorrer por meio eletrônico, sem exigir o comparecimento presencial do usuário.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "meio eletrônico",
    cognitivo: {
      motivo: "Reconhecer o ponto: serviço público digital — conceito.",
      palavraCritica: "meio eletrônico",
    },
    comentario: {
      resolucao: "CERTO. Serviço público digital é aquele cuja solicitação, prestação e acompanhamento podem ocorrer por meio eletrônico, sem que o usuário precise comparecer a uma unidade de atendimento.",
      fundamento: "Lei nº 14.129/2021 (Governo Digital).",
      macete: "Digital = pede, recebe e acompanha online.",
      erroComum: "Restringir o conceito à solicitação.",
      comoBancaPensa: "Definição completa e correta.",
    },
  },

  {
    ...BASE140,
    id: "TI-475", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Carta de Serviços ao Usuário",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "A Carta de Serviços ao Usuário deve informar os serviços prestados, os requisitos e documentos exigidos, as etapas e os prazos, além dos compromissos de atendimento.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "compromissos de atendimento",
    cognitivo: {
      motivo: "Reconhecer o ponto: carta de Serviços ao Usuário.",
      palavraCritica: "compromissos de atendimento",
    },
    comentario: {
      resolucao: "CERTO. A Carta de Serviços ao Usuário informa os serviços prestados, os requisitos e documentos necessários, as etapas, a previsão de prazos, a forma de prestação, os locais e os compromissos e padrões de qualidade do atendimento.",
      fundamento: "Lei nº 13.460/2017, art. 7º.",
      macete: "Carta de Serviços = manual público do que o órgão faz e como.",
      erroComum: "Achar que ela é só um catálogo de nomes de serviços.",
      comoBancaPensa: "Cobra o conteúdo mínimo do documento.",
    },
  },

  {
    ...BASE140,
    id: "TI-476", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Portal único gov.br",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "O portal único do governo federal foi concebido para centralizar o acesso à informação e aos serviços públicos digitais em um único endereço na Internet.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "único endereço",
    cognitivo: {
      motivo: "Reconhecer o ponto: portal único gov.br.",
      palavraCritica: "único endereço",
    },
    comentario: {
      resolucao: "CERTO. O portal gov.br foi concebido para centralizar, num único endereço, as informações e os serviços públicos digitais do governo federal, com acesso por uma conta única.",
      fundamento: "Lei nº 14.129/2021; Decreto nº 9.756/2019 (portal único gov.br).",
      macete: "gov.br = uma porta para todos os serviços federais.",
      erroComum: "Achar que cada órgão mantém portal de serviços próprio e isolado.",
      comoBancaPensa: "Cobra a finalidade do portal.",
    },
  },

  {
    ...BASE140,
    id: "TI-477", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Níveis da conta gov.br",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "A conta de acesso ao portal único adota selos de confiabilidade — bronze, prata e ouro — que variam conforme o meio usado para comprovar a identidade do usuário.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "bronze, prata e ouro",
    cognitivo: {
      motivo: "Reconhecer o ponto: níveis da conta gov.br.",
      palavraCritica: "bronze, prata e ouro",
    },
    comentario: {
      resolucao: "CERTO. A conta gov.br tem três níveis de confiabilidade: bronze (cadastro básico), prata (validação por banco credenciado ou dados de servidor público) e ouro (biometria facial da Justiça Eleitoral ou certificado digital). Quanto mais alto o nível, mais serviços ficam acessíveis.",
      fundamento: "Plataforma gov.br — níveis de conta.",
      macete: "Bronze → prata → ouro, conforme a prova de identidade.",
      erroComum: "Achar que o nível depende do tempo de cadastro.",
      comoBancaPensa: "Cobra o critério dos selos.",
    },
  },

  {
    ...BASE140,
    id: "TI-478", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Assinatura eletrônica qualificada",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "A assinatura eletrônica qualificada é a que usa certificado digital emitido no âmbito da Infraestrutura de Chaves Públicas Brasileira.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "qualificada",
    cognitivo: {
      motivo: "Reconhecer o ponto: assinatura eletrônica qualificada.",
      palavraCritica: "qualificada",
    },
    comentario: {
      resolucao: "CERTO. A assinatura eletrônica qualificada é a que usa certificado digital da ICP-Brasil. É o nível mais alto entre os três previstos — simples, avançada e qualificada.",
      fundamento: "Lei nº 14.063/2020, art. 4º.",
      macete: "Qualificada = ICP-Brasil.",
      erroComum: "Confundir qualificada com avançada.",
      comoBancaPensa: "Cobra a definição legal.",
    },
  },

  {
    ...BASE140,
    id: "TI-479", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Assinatura avançada não substitui a qualificada em tudo",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 3, tempoIdealSeg: 60,
    enunciado: "A assinatura eletrônica avançada equipara-se, para todos os efeitos, à qualificada, podendo substituí-la nos atos de transferência de bens imóveis.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "equipara-se",
    cognitivo: {
      motivo: "Reconhecer o ponto: assinatura avançada não substitui a qualificada em tudo.",
      palavraCritica: "equipara-se",
    },
    comentario: {
      resolucao: "ERRADO. Os três níveis têm usos distintos. A avançada não se equipara à qualificada para todos os efeitos: a qualificada é exigida, por exemplo, nos atos de transferência e registro de bens imóveis e nas assinaturas de chefes de Poder em atos normativos.",
      fundamento: "Lei nº 14.063/2020, arts. 4º e 5º.",
      macete: "Imóvel e ato normativo de chefe de Poder → qualificada.",
      erroComum: "Achar que qualquer assinatura eletrônica vale para tudo.",
      comoBancaPensa: "Iguala níveis distintos de garantia.",
    },
  },

  {
    ...BASE140,
    id: "TI-480", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Compartilhamento preserva o sigilo",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "O compartilhamento de dados entre órgãos públicos afasta o dever de observância do sigilo legal a que os dados estejam submetidos.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "afasta o dever",
    cognitivo: {
      motivo: "Reconhecer o ponto: compartilhamento preserva o sigilo.",
      palavraCritica: "afasta o dever",
    },
    comentario: {
      resolucao: "ERRADO. O compartilhamento de dados entre órgãos não afasta o sigilo legal: o órgão que recebe os dados assume o mesmo dever de proteção, e o tratamento deve respeitar a LGPD e as regras de sigilo aplicáveis (fiscal, bancário, de justiça).",
      fundamento: "Lei nº 14.129/2021; LGPD (Lei nº 13.709/2018).",
      macete: "O sigilo acompanha o dado.",
      erroComum: "Achar que dado compartilhado vira dado livre.",
      comoBancaPensa: "Tira do compartilhamento um efeito que ele não tem.",
    },
  },

  {
    ...BASE140,
    id: "TI-481", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Dados abertos — conceito",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Dados abertos são os publicados em formato aberto, processável por máquina e livre de restrições de licença que impeçam sua livre utilização.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "processável por máquina",
    cognitivo: {
      motivo: "Reconhecer o ponto: dados abertos — conceito.",
      palavraCritica: "processável por máquina",
    },
    comentario: {
      resolucao: "CERTO. Dados abertos são dados acessíveis ao público, em formato aberto, estruturados, processáveis por máquina e disponibilizados sob licença que permita livre uso, reutilização e redistribuição.",
      fundamento: "Lei nº 14.129/2021; Decreto nº 8.777/2016.",
      macete: "Aberto = formato aberto + legível por máquina + licença livre.",
      erroComum: "Achar que PDF escaneado é dado aberto.",
      comoBancaPensa: "Definição legal correta.",
    },
  },

  {
    ...BASE140,
    id: "TI-482", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Transparência ativa",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "A transparência ativa consiste na divulgação de informações de interesse público independentemente de requerimento do cidadão.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "independentemente de requerimento",
    cognitivo: {
      motivo: "Reconhecer o ponto: transparência ativa.",
      palavraCritica: "independentemente de requerimento",
    },
    comentario: {
      resolucao: "CERTO. Transparência ativa é a divulgação espontânea de informações de interesse público, sem que alguém precise pedir (portais de transparência). A passiva é a resposta a pedidos de acesso.",
      fundamento: "Lei nº 12.527/2011 (LAI), art. 8º.",
      macete: "Ativa = publica sem pedido; passiva = responde a pedido.",
      erroComum: "Inverter ativa e passiva.",
      comoBancaPensa: "Cobra a definição da LAI.",
    },
  },

  {
    ...BASE140,
    id: "TI-483", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Dados abertos não liberam dados pessoais",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Por serem publicados na Internet, os dados abertos podem incluir livremente dados pessoais de cidadãos, dispensada a observância da legislação de proteção de dados.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "livremente dados pessoais",
    cognitivo: {
      motivo: "Reconhecer o ponto: dados abertos não liberam dados pessoais.",
      palavraCritica: "livremente dados pessoais",
    },
    comentario: {
      resolucao: "ERRADO. Publicar dados abertos não dispensa a LGPD. Dados pessoais só entram em bases abertas quando houver base legal, e informações pessoais devem ser anonimizadas ou protegidas.",
      fundamento: "LGPD (Lei nº 13.709/2018); Lei nº 14.129/2021.",
      macete: "Abrir dados ≠ expor pessoas.",
      erroComum: "Achar que o que é público na internet escapa à LGPD.",
      comoBancaPensa: "Afasta indevidamente a proteção de dados.",
    },
  },

  {
    ...BASE140,
    id: "TI-484", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Poder Público e consentimento na LGPD",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "O tratamento de dados pessoais pelo Poder Público para executar políticas públicas previstas em lei depende, em regra, do consentimento prévio do titular.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "consentimento prévio",
    cognitivo: {
      motivo: "Reconhecer o ponto: poder Público e consentimento na LGPD.",
      palavraCritica: "consentimento prévio",
    },
    comentario: {
      resolucao: "ERRADO. O Poder Público pode tratar dados pessoais sem consentimento quando necessário à execução de políticas públicas previstas em lei ou para cumprir atribuições legais, observadas a finalidade e a transparência.",
      fundamento: "LGPD, arts. 7º, III, e 23.",
      macete: "Política pública prevista em lei = base legal própria, sem consentimento.",
      erroComum: "Achar que todo tratamento depende de consentimento.",
      comoBancaPensa: "Exige uma base legal que a lei dispensa.",
    },
  },

  {
    ...BASE140,
    id: "TI-485", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Documento digitalizado com efeito legal",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "O documento digitalizado que atenda aos requisitos técnicos e de integridade estabelecidos pode produzir os mesmos efeitos legais do documento original.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "mesmos efeitos legais",
    cognitivo: {
      motivo: "Reconhecer o ponto: documento digitalizado com efeito legal.",
      palavraCritica: "mesmos efeitos legais",
    },
    comentario: {
      resolucao: "CERTO. O documento digitalizado conforme os requisitos técnicos (integridade, autenticidade e, quando exigido, assinatura com certificado ICP-Brasil) produz os mesmos efeitos legais do original.",
      fundamento: "Lei nº 12.682/2012; Decreto nº 10.278/2020.",
      macete: "Digitalizado conforme as regras = vale como o papel.",
      erroComum: "Achar que só o papel tem valor legal.",
      comoBancaPensa: "Cobra a equiparação legal.",
    },
  },

  {
    ...BASE140,
    id: "TI-486", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Sandbox regulatório",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "O ambiente regulatório experimental, também chamado sandbox, permite testar modelos de negócio e tecnologias inovadoras sob regras específicas e por prazo determinado.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "sandbox",
    cognitivo: {
      motivo: "Reconhecer o ponto: sandbox regulatório.",
      palavraCritica: "sandbox",
    },
    comentario: {
      resolucao: "CERTO. O ambiente regulatório experimental (sandbox) permite testar modelos de negócio e tecnologias inovadoras com regras diferenciadas, por prazo determinado e sob supervisão do órgão regulador.",
      fundamento: "Lei Complementar nº 182/2021 (Marco Legal das Startups).",
      macete: "Sandbox = teste controlado, com regra especial e prazo.",
      erroComum: "Achar que é dispensa permanente de regulação.",
      comoBancaPensa: "Cobra o conceito legal.",
    },
  },

  {
    ...BASE140,
    id: "TI-487", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Interoperabilidade",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "A interoperabilidade entre sistemas públicos tem por finalidade permitir que órgãos e entidades troquem dados e informações, evitando a duplicidade de cadastros.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "duplicidade de cadastros",
    cognitivo: {
      motivo: "Reconhecer o ponto: interoperabilidade.",
      palavraCritica: "duplicidade de cadastros",
    },
    comentario: {
      resolucao: "CERTO. A interoperabilidade permite que os sistemas de órgãos diferentes troquem dados de forma padronizada, evitando cadastros repetidos e pedidos redundantes ao cidadão.",
      fundamento: "Lei nº 14.129/2021 (Governo Digital).",
      macete: "Sistemas que conversam = cidadão que não repete papelada.",
      erroComum: "Restringir a ideia a integração técnica sem efeito para o cidadão.",
      comoBancaPensa: "Cobra a finalidade do princípio.",
    },
  },

  {
    ...BASE140,
    id: "TI-488", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Governo eletrônico × governo digital",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Governo eletrônico e governo digital são expressões sinônimas, pois ambas se limitam à informatização dos processos internos já existentes na administração.",
    gabarito: "E",
    pegadinha: "troca-conceito",
    palavraChave: "sinônimas",
    cognitivo: {
      motivo: "Reconhecer o ponto: governo eletrônico × governo digital.",
      palavraCritica: "sinônimas",
    },
    comentario: {
      resolucao: "ERRADO. Governo eletrônico é a fase de informatizar processos existentes e oferecer serviços online. Governo digital vai além: redesenha os serviços a partir das necessidades do cidadão, com dados, plataformas compartilhadas e participação.",
      fundamento: "Estratégia de Governo Digital; Lei nº 14.129/2021.",
      macete: "Eletrônico informatiza; digital transforma.",
      erroComum: "Usar os termos como sinônimos.",
      comoBancaPensa: "Iguala estágios diferentes de maturidade.",
    },
  },

  {
    ...BASE140,
    id: "TI-489", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Avaliação dos serviços pelos usuários",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "A avaliação dos serviços públicos pelos próprios usuários é instrumento previsto em lei e deve considerar, entre outros aspectos, a satisfação com o atendimento.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "satisfação",
    cognitivo: {
      motivo: "Reconhecer o ponto: avaliação dos serviços pelos usuários.",
      palavraCritica: "satisfação",
    },
    comentario: {
      resolucao: "CERTO. A lei prevê avaliação continuada dos serviços pelos usuários, considerando, entre outros aspectos, a satisfação com o atendimento, a qualidade, o cumprimento de prazos e as medidas adotadas para melhorar o serviço.",
      fundamento: "Lei nº 13.460/2017, art. 23.",
      macete: "O usuário avalia; o órgão publica e melhora.",
      erroComum: "Achar que a avaliação é só interna.",
      comoBancaPensa: "Cobra o instrumento legal de participação.",
    },
  },

  {
    ...BASE140,
    id: "TI-490", assunto: "Governo digital e serviços públicos digitais",
    subassunto: "Verificação em duas etapas",
    origem: "Banca não identificada no caderno (item reescrito) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "A adoção de autenticação em duas etapas na conta de acesso aos serviços digitais reduz o risco de acesso indevido decorrente do vazamento da senha.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "duas etapas",
    cognitivo: {
      motivo: "Reconhecer o ponto: verificação em duas etapas.",
      palavraCritica: "duas etapas",
    },
    comentario: {
      resolucao: "CERTO. Com a verificação em duas etapas, a senha vazada não basta: o invasor também precisa do segundo fator, como o código no celular. O risco de acesso indevido cai bastante.",
      fundamento: "Boas práticas de autenticação (gov.br; Cartilha CERT.br).",
      macete: "Senha vazada + 2FA ativo = invasor barrado.",
      erroComum: "Achar que senha forte dispensa o segundo fator.",
      comoBancaPensa: "Afirmação correta sobre redução de risco.",
    },
  },

  /* ===== CORREIO ELETRÔNICO ===== */

  {
    ...BASE140,
    id: "TI-491", assunto: "Correio eletrônico",
    subassunto: "IMAP sincroniza no servidor",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material; repetido no bônus de TI do QAP DSO (Aula em Estúdio — Correio Eletrônico, parte 1, questão 4)",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "O protocolo IMAP permite acessar e sincronizar mensagens de e-mail em vários dispositivos, mantendo os dados centralizados no servidor.",
    gabarito: "C",
    pegadinha: "troca-sujeito",
    palavraChave: "IMAP",
    cognitivo: {
      motivo: "Reconhecer o ponto: iMAP sincroniza no servidor.",
      palavraCritica: "IMAP",
    },
    comentario: {
      resolucao: "CERTO. O IMAP mantém as mensagens no servidor e sincroniza pastas, lidas e excluídas entre os dispositivos. O POP3, em regra, baixa as mensagens para um dispositivo, sem sincronizar.",
      fundamento: "Protocolos de correio eletrônico.",
      macete: "IMAP = espelho no servidor; POP3 = baixa para um aparelho.",
      erroComum: "Trocar IMAP por POP3.",
      comoBancaPensa: "Cobra a característica do protocolo.",
    },
  },

  {
    ...BASE140,
    id: "TI-492", assunto: "Correio eletrônico",
    subassunto: "Funções do programa de correio",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 30,
    enunciado: "Um programa de correio eletrônico permite enviar, receber, organizar e armazenar mensagens por meio da Internet.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "enviar, receber, organizar e armazenar",
    cognitivo: {
      motivo: "Reconhecer o ponto: funções do programa de correio.",
      palavraCritica: "enviar, receber, organizar e armazenar",
    },
    comentario: {
      resolucao: "CERTO. Programas de correio eletrônico (Outlook, Thunderbird, webmails) enviam, recebem, organizam em pastas e armazenam mensagens trocadas pela Internet.",
      fundamento: "Correio eletrônico — conceitos.",
      macete: "Cliente de e-mail: envia, recebe, organiza, guarda.",
      erroComum: "Procurar pegadinha em item conceitual.",
      comoBancaPensa: "Definição genérica e correta.",
    },
  },

  {
    ...BASE140,
    id: "TI-493", assunto: "Correio eletrônico",
    subassunto: "SMTP, POP3 e IMAP",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material; repetido no bônus de TI do QAP DSO (Aula em Estúdio — Correio Eletrônico, parte 1, questão 5)",
    dificuldade: 1, tempoIdealSeg: 30,
    enunciado: "Os protocolos mais comuns usados por programas de e-mail são o SMTP, o POP3 e o IMAP.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "SMTP, POP3 e IMAP",
    cognitivo: {
      motivo: "Reconhecer o ponto: sMTP, POP3 e IMAP.",
      palavraCritica: "SMTP, POP3 e IMAP",
    },
    comentario: {
      resolucao: "CERTO. São os protocolos clássicos do e-mail: SMTP para envio e transferência entre servidores; POP3 e IMAP para o acesso do usuário às mensagens recebidas.",
      fundamento: "Protocolos de correio eletrônico.",
      macete: "SMTP envia; POP3/IMAP recebem.",
      erroComum: "Incluir HTTP ou FTP na lista.",
      comoBancaPensa: "Cobra a tríade de protocolos.",
    },
  },

  {
    ...BASE140,
    id: "TI-494", assunto: "Correio eletrônico",
    subassunto: "Filtros antispam",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 30,
    enunciado: "Muitos programas de e-mail têm filtros antispam para evitar o recebimento de mensagens indesejadas.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "filtros antispam",
    cognitivo: {
      motivo: "Reconhecer o ponto: filtros antispam.",
      palavraCritica: "filtros antispam",
    },
    comentario: {
      resolucao: "CERTO. Clientes e serviços de e-mail têm filtros antispam que analisam remetente, conteúdo e reputação e desviam as mensagens suspeitas para a pasta de lixo eletrônico.",
      fundamento: "Correio eletrônico — segurança.",
      macete: "Antispam separa o indesejado da caixa de entrada.",
      erroComum: "Achar que filtro antispam é antivírus.",
      comoBancaPensa: "Item conceitual correto.",
    },
  },

  /* ===== BANCO DE DADOS ===== */

  {
    ...BASE140,
    id: "TI-495", assunto: "Banco de dados",
    subassunto: "Chave estrangeira referencia chave primária",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "De acordo com o conceito de integridade referencial, uma chave estrangeira de uma tabela deve referenciar uma chave primária de outra tabela.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "chave estrangeira",
    cognitivo: {
      motivo: "Reconhecer o ponto: chave estrangeira referencia chave primária.",
      palavraCritica: "chave estrangeira",
    },
    comentario: {
      resolucao: "CERTO, segundo o gabarito. Pela integridade referencial, o valor da chave estrangeira deve corresponder a uma chave primária existente na tabela referenciada. A regra geral é referenciar outra tabela; o modelo admite também o autorrelacionamento (a chave estrangeira apontando para a própria tabela, como em 'chefe' de um 'funcionário'), caso que a banca não explorou aqui.",
      fundamento: "Modelo relacional — integridade referencial.",
      macete: "FK aponta para PK existente; autorrelacionamento é a exceção.",
      erroComum: "Achar que FK pode guardar qualquer valor.",
      comoBancaPensa: "Cobra a regra geral da integridade referencial.",
    },
  },

  {
    ...BASE140,
    id: "TI-496", assunto: "Banco de dados",
    subassunto: "INSERT sem coluna anulável",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Considere a tabela consultas, com as colunas paciente_id, data_consulta, terapeuta e observacoes, sendo que esta última admite valor nulo. Nesse caso, o comando INSERT INTO consultas (paciente_id, data_consulta, terapeuta) VALUES (3, '2025-07-12', 'Dra. Carla'); está incorreto, pois falta o campo observacoes, que deve obrigatoriamente ser preenchido.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "obrigatoriamente",
    cognitivo: {
      motivo: "Reconhecer o ponto: iNSERT sem coluna anulável.",
      palavraCritica: "obrigatoriamente",
    },
    comentario: {
      resolucao: "ERRADO. No INSERT com lista de colunas, as colunas omitidas recebem o valor padrão ou NULL. Se observacoes admite nulo, o comando é válido e grava a consulta com observacoes vazia. Só seria obrigatório informar a coluna se ela fosse NOT NULL sem valor padrão.",
      fundamento: "SQL — INSERT INTO.",
      macete: "Coluna omitida = DEFAULT ou NULL.",
      erroComum: "Achar que toda coluna precisa aparecer no INSERT.",
      comoBancaPensa: "Inventa uma obrigatoriedade.",
    },
  },

  {
    ...BASE140,
    id: "TI-497", assunto: "Banco de dados",
    subassunto: "SELECT com WHERE",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Na tabela pacientes, que tem as colunas nome e diagnostico, o comando SELECT nome FROM pacientes WHERE diagnostico = 'ansiedade'; retorna os nomes dos pacientes com esse diagnóstico registrado.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "WHERE",
    cognitivo: {
      motivo: "Reconhecer o ponto: sELECT com WHERE.",
      palavraCritica: "WHERE",
    },
    comentario: {
      resolucao: "CERTO. O comando projeta a coluna nome e filtra as linhas cujo diagnostico é igual a 'ansiedade'.",
      fundamento: "SQL — SELECT.",
      macete: "SELECT colunas FROM tabela WHERE condição.",
      erroComum: "Procurar erro de sintaxe inexistente.",
      comoBancaPensa: "Leitura direta de consulta simples.",
    },
  },

  {
    ...BASE140,
    id: "TI-498", assunto: "Banco de dados",
    subassunto: "DELETE não apaga em cascata por padrão",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Na base de dados de uma clínica, a tabela consultas referencia a tabela pacientes por chave estrangeira, sem a opção ON DELETE CASCADE. Nesse cenário, o comando DELETE FROM pacientes WHERE nome = 'João'; remove o paciente com esse nome e, automaticamente, todas as suas consultas.",
    gabarito: "E",
    pegadinha: "exigencia-inexistente",
    palavraChave: "automaticamente",
    cognitivo: {
      motivo: "Reconhecer o ponto: dELETE não apaga em cascata por padrão.",
      palavraCritica: "automaticamente",
    },
    comentario: {
      resolucao: "ERRADO. O DELETE remove as linhas da tabela indicada. As consultas ligadas ao paciente só seriam apagadas junto se a chave estrangeira tivesse ON DELETE CASCADE; sem isso, o SGBD recusa a exclusão (se houver consultas) ou elas permanecem. E o filtro por nome pode atingir mais de um João.",
      fundamento: "SQL — DELETE e integridade referencial.",
      macete: "Cascata só com ON DELETE CASCADE.",
      erroComum: "Achar que o banco 'limpa' as dependências sozinho.",
      comoBancaPensa: "Atribui ao DELETE um efeito que depende de configuração.",
    },
  },

  {
    ...BASE140,
    id: "TI-499", assunto: "Banco de dados",
    subassunto: "DELETE com filtro por chave",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "O comando DELETE FROM equipes WHERE id = 10; remove permanentemente, do banco de dados, a equipe cujo ID é igual a 10.",
    gabarito: "C",
    pegadinha: "troca-conceito",
    palavraChave: "DELETE",
    cognitivo: {
      motivo: "Reconhecer o ponto: dELETE com filtro por chave.",
      palavraCritica: "DELETE",
    },
    comentario: {
      resolucao: "CERTO. DELETE FROM equipes WHERE id = 10; remove a linha cuja chave é 10. Confirmada a transação, a remoção é permanente — diferentemente do DROP TABLE, que apaga a tabela inteira, e do TRUNCATE, que esvazia todas as linhas.",
      fundamento: "SQL — DELETE.",
      macete: "DELETE + WHERE = só as linhas filtradas.",
      erroComum: "Confundir DELETE com DROP.",
      comoBancaPensa: "Leitura direta do comando.",
    },
  },

  {
    ...BASE140,
    id: "TI-500", assunto: "Banco de dados",
    subassunto: "Modelo entidade-relacionamento",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "O modelo entidade-relacionamento (ER) permite representar graficamente os dados e suas inter-relações, facilitando a modelagem de banco de dados.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "Entidade-Relacionamento",
    cognitivo: {
      motivo: "Reconhecer o ponto: modelo entidade-relacionamento.",
      palavraCritica: "Entidade-Relacionamento",
    },
    comentario: {
      resolucao: "CERTO. O modelo ER (Peter Chen, 1976) representa graficamente entidades, atributos e relacionamentos. É usado na modelagem conceitual, antes do modelo lógico (tabelas).",
      fundamento: "Modelagem de dados.",
      macete: "ER = desenho conceitual; relacional = tabelas.",
      erroComum: "Confundir modelo conceitual com físico.",
      comoBancaPensa: "Item conceitual correto.",
    },
  },

  /* ===== LINUX E SEGURANÇA ===== */

  {
    ...BASE140,
    id: "TI-501", assunto: "Sistemas operacionais",
    subassunto: "Diretório é arquivo especial",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "No Linux, os diretórios são considerados arquivos especiais que armazenam referências a outros arquivos e diretórios.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "arquivos especiais",
    cognitivo: {
      motivo: "Reconhecer o ponto: diretório é arquivo especial.",
      palavraCritica: "arquivos especiais",
    },
    comentario: {
      resolucao: "CERTO. No Linux, \"tudo é arquivo\": o diretório é um arquivo especial (tipo d no ls -l) cujo conteúdo é a lista de nomes e as referências (inodes) dos arquivos e subdiretórios.",
      fundamento: "Sistema de arquivos Linux.",
      macete: "Diretório = arquivo que guarda nomes e inodes.",
      erroComum: "Achar que diretório é uma estrutura à parte.",
      comoBancaPensa: "Cobra o conceito de 'tudo é arquivo'.",
    },
  },

  {
    ...BASE140,
    id: "TI-502", assunto: "Segurança da informação",
    subassunto: "Cavalo de Troia × spyware",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "O trojan é projetado para espionar o dono do dispositivo, que não autorizou sua instalação nem sabe que o código espião está em seu equipamento, permitindo ao agente malicioso receber as informações confidenciais coletadas.",
    gabarito: "E",
    pegadinha: "troca-sujeito",
    palavraChave: "trojan",
    cognitivo: {
      motivo: "Reconhecer o ponto: cavalo de Troia × spyware.",
      palavraCritica: "trojan",
    },
    comentario: {
      resolucao: "ERRADO. O cavalo de Troia se disfarça de programa legítimo e é instalado pelo próprio usuário, enganado. A descrição do item — código espião que coleta informações sem que o dono saiba — é a do spyware, que pode até chegar por um trojan, mas não se confunde com ele.",
      fundamento: "Cartilha de Segurança para Internet (CERT.br) — códigos maliciosos.",
      macete: "Trojan engana para ser instalado; spyware espiona.",
      erroComum: "Confundir o meio de entrada com a função do malware.",
      comoBancaPensa: "Atribui a um malware a definição de outro.",
    },
  },

  {
    ...BASE140,
    id: "TI-503", assunto: "Segurança da informação",
    subassunto: "Armazenamento em nuvem",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 30,
    enunciado: "Um analista que receba arquivo em formato digital pode salvá-lo na nuvem, pois esse serviço permite armazenar arquivos e acessá-los remotamente.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "nuvem",
    cognitivo: {
      motivo: "Reconhecer o ponto: armazenamento em nuvem.",
      palavraCritica: "nuvem",
    },
    comentario: {
      resolucao: "CERTO. Serviços de armazenamento em nuvem (OneDrive, Google Drive, Dropbox) guardam arquivos em servidores remotos, acessíveis pela Internet a partir de qualquer dispositivo autorizado.",
      fundamento: "Computação em nuvem — armazenamento.",
      macete: "Nuvem = guardar lá, acessar de qualquer lugar.",
      erroComum: "Procurar restrição inexistente.",
      comoBancaPensa: "Item conceitual correto.",
    },
  },

  {
    ...BASE140,
    id: "TI-504", assunto: "Segurança da informação",
    subassunto: "Backup com o Google Drive",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 30,
    enunciado: "Um usuário pode fazer backup, ou cópia de segurança, de arquivos por meio da ferramenta Google Drive.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "Google Drive",
    cognitivo: {
      motivo: "Reconhecer o ponto: backup com o Google Drive.",
      palavraCritica: "Google Drive",
    },
    comentario: {
      resolucao: "CERTO. O Google Drive pode ser usado para cópias de segurança: guarda arquivos fora do computador e permite recuperá-los em caso de perda, e o aplicativo de desktop sincroniza ou faz backup de pastas automaticamente.",
      fundamento: "Computação em nuvem — backup.",
      macete: "Cópia em nuvem = backup fora do equipamento.",
      erroComum: "Achar que backup exige mídia física.",
      comoBancaPensa: "Item conceitual correto.",
    },
  },

  {
    ...BASE140,
    id: "TI-505", assunto: "Segurança da informação",
    subassunto: "Acesso remoto multiplataforma",
    origem: "CEBRASPE (prova não identificada no caderno) — QAP DSO (TI e Segurança Cibernética, Ricardo Beck), gabarito do material",
    dificuldade: 1, tempoIdealSeg: 30,
    enunciado: "Os arquivos salvos na nuvem podem ser acessados remotamente de diversos dispositivos com conexão à Internet, como notebooks, celulares, tablets e desktops.",
    gabarito: "C",
    pegadinha: "generalizacao",
    palavraChave: "diversos dispositivos",
    cognitivo: {
      motivo: "Reconhecer o ponto: acesso remoto multiplataforma.",
      palavraCritica: "diversos dispositivos",
    },
    comentario: {
      resolucao: "CERTO. Os arquivos salvos na nuvem podem ser acessados de notebooks, celulares, tablets e desktops conectados à Internet, pelo navegador ou pelos aplicativos do serviço.",
      fundamento: "Computação em nuvem.",
      macete: "Nuvem = mesmo arquivo em todos os aparelhos.",
      erroComum: "Achar que o acesso fica preso ao computador de origem.",
      comoBancaPensa: "Item conceitual correto.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE140);
