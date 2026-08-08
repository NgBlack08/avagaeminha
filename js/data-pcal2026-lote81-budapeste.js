/* =====================================================================
   QUESTLAB — Lote 81: CONVENÇÃO SOBRE O CRIME CIBERNÉTICO
   Convenção de Budapeste — promulgada pelo Decreto nº 11.491/2023

   ATENÇÃO AO NÚMERO DO DECRETO

   O decreto que promulga a Convenção é o nº 11.491, de 12 de abril de
   2023 (DOU de 13/04/2023). Material de cursinho circula com "11.941",
   transposição de dígitos que já se viu em mais de uma apostila. Um
   item de prova que citasse 11.941 estaria errado só por isso, e a
   CEBRASPE cobra número de diploma. O banco usa 11.491 e a conferência
   foi feita na fonte oficial.

   POR QUE ESTE LOTE EXISTE

   O banco tinha 6 itens que citavam Budapeste explicitamente, todos
   sobre tipos penais (arts. 2º a 6º) e um sobre cooperação. A parte da
   Convenção que a banca mais cobra — definições do art. 1º, poderes
   processuais dos arts. 16 a 21 e cooperação internacional dos arts. 23
   a 35 — estava praticamente descoberta. Doze pontos com zero itens.

   AS TRÊS ARMADILHAS QUE ORGANIZAM ESTE LOTE

     Definições que se confundem — dado de computador, dados de tráfego
       e informações cadastrais de assinante são três conceitos
       distintos, e o critério que os separa é o CONTEÚDO: dados de
       tráfego e informações cadastrais nunca o abrangem. Trocar isso é
       a construção mais frequente.

     Prazos — 90 dias é o teto da conservação expedita interna
       (art. 16.2); 60 dias é o piso da conservação pedida por outro
       Estado (art. 29.7). Um é máximo, o outro é mínimo, e a banca
       inverte os dois.

     Faculdade x obrigação — a Convenção é cheia de "a Parte pode
       exigir" e "a Parte pode reservar-se o direito". Transformar essas
       faculdades em imposições, ou o contrário, rende item errado sem
       que se altere uma palavra do tema.

   Gabarito: 9 CERTO / 9 ERRADO. Sobre comprimento e gabarito, vale a
   nota metodológica do lote 77.
   ===================================================================== */

const CARGOS81 = ["Escrivão", "Agente"];
const BASE81 = {
  concurso: "PCAL", cargo: CARGOS81, ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  disciplina: "Crimes Cibernéticos e Segurança Digital",
};

const QUESTOES_PCAL_LOTE81 = [

  /* ===== RESPONSABILIDADE DA PESSOA JURÍDICA (ART. 12) ===== */

  {
    ...BASE81,
    id: "CC-105", assunto: "Convenção de Budapeste", subassunto: "Responsabilidade da pessoa jurídica — art. 12",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, art. 12 da Convenção)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "A responsabilidade da pessoa jurídica prevista na Convenção só pode ser reconhecida mediante demonstração de intenção dolosa de dirigente da alta administração, não bastando a falta de supervisão que tenha tornado possível a prática da infração por pessoa sob sua autoridade.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "não bastando a falta de supervisão",
    cognitivo: {
      motivo: "Suprimir a hipótese do art. 12.2, que é justamente a responsabilização por omissão no dever de supervisão.",
      palavraCritica: "só pode",
    },
    comentario: {
      resolucao: "ERRADO. O art. 12.2 prevê expressamente a responsabilidade da pessoa jurídica quando a FALTA de supervisão ou de controle por pessoa em posição de direção tiver tornado possível a prática da infração por pessoa submetida à sua autoridade. É hipótese autônoma, de natureza omissiva, que dispensa a demonstração de dolo do dirigente.",
      fundamento: "Convenção sobre o Crime Cibernético, art. 12, itens 1 e 2 (Decreto nº 11.491/2023).",
      macete: "São duas portas: o ato do dirigente (12.1) e a omissão de supervisão dele (12.2).",
      erroComum: "Reduzir a responsabilidade da pessoa jurídica à conduta comissiva e dolosa do dirigente.",
      comoBancaPensa: "Usa 'só pode' para fechar um rol que a Convenção deixa aberto em dois incisos."
    }
  },

  {
    ...BASE81,
    id: "CC-106", assunto: "Convenção de Budapeste", subassunto: "Natureza da responsabilidade da pessoa jurídica — art. 12.3",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, art. 12.3 da Convenção)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "A responsabilidade da pessoa jurídica pelos ilícitos previstos na Convenção pode ser de natureza penal, civil ou administrativa, conforme os princípios jurídicos do Estado-parte.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "penal, civil ou administrativa",
    cognitivo: {
      motivo: "Cobrar a cláusula de flexibilidade do art. 12.3, que respeita os sistemas que não admitem responsabilidade penal de pessoa jurídica.",
      palavraCritica: "conforme os princípios jurídicos",
    },
    comentario: {
      resolucao: "CERTO. O art. 12.3 admite que a responsabilidade seja penal, civil ou administrativa, sujeita aos princípios jurídicos de cada Parte. A abertura é deliberada: vários signatários não admitem responsabilidade penal de pessoa jurídica, e exigir essa via inviabilizaria a adesão deles.",
      fundamento: "Convenção sobre o Crime Cibernético, art. 12.3 (Decreto nº 11.491/2023).",
      macete: "A Convenção exige que haja responsabilidade; não impõe que ela seja penal.",
      erroComum: "Supor que tratado penal internacional impõe sempre a via criminal.",
      comoBancaPensa: "Cobra a literalidade de uma cláusula de compromisso, típica de tratado multilateral."
    }
  },

  /* ===== DEFINIÇÕES — ART. 1º E ART. 18.3 ===== */

  {
    ...BASE81,
    id: "CC-107", assunto: "Convenção de Budapeste", subassunto: "Dados de tráfego — art. 1º, 'd'",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, art. 1º da Convenção)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Consideram-se dados de tráfego, na Convenção, quaisquer dados referentes ao conteúdo da comunicação, inclusive as mensagens trocadas entre sistemas informáticos, desde que armazenados por provedor situado em território nacional.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "referentes ao conteúdo da comunicação",
    cognitivo: {
      motivo: "Inserir o conteúdo na definição de dados de tráfego, que existe precisamente para excluí-lo.",
      palavraCritica: "conteúdo",
    },
    comentario: {
      resolucao: "ERRADO, e por dois motivos. Dados de tráfego são os dados relativos a uma comunicação que indicam ORIGEM, destino, itinerário, hora, data, tamanho, duração ou tipo de serviço — nunca o conteúdo. E a definição não condiciona nada à localização do provedor em território nacional: esse recorte é enxerto.",
      fundamento: "Convenção sobre o Crime Cibernético, art. 1º, alínea 'd' (Decreto nº 11.491/2023).",
      macete: "Tráfego é o envelope: quem, para quem, quando, por onde. O conteúdo é a carta, e não entra.",
      erroComum: "Tratar 'dados de tráfego' como sinônimo genérico de 'dados da comunicação'.",
      comoBancaPensa: "Amplia a definição para abarcar o conteúdo — a troca mais rentável do art. 1º."
    }
  },

  {
    ...BASE81,
    id: "CC-108", assunto: "Convenção de Budapeste", subassunto: "Dado informático — art. 1º, 'b'",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, art. 1º da Convenção)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Na terminologia da Convenção, considera-se dado informático apenas aquele que represente instruções executáveis por programa, excluídas as representações de fatos, informações ou conceitos armazenadas em outros formatos.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "apenas ... instruções executáveis",
    cognitivo: {
      motivo: "Reduzir a uma espécie (o programa) uma definição que o art. 1º constrói de forma deliberadamente ampla.",
      palavraCritica: "apenas",
    },
    comentario: {
      resolucao: "ERRADO. A definição é o inverso: dado informático é qualquer representação de fatos, informações ou conceitos sob forma adequada ao processamento num sistema informático, INCLUINDO o programa apto a fazer o sistema executar uma função. O programa é exemplo abrangido, não o limite da definição.",
      fundamento: "Convenção sobre o Crime Cibernético, art. 1º, alínea 'b' (Decreto nº 11.491/2023).",
      macete: "A palavra da definição é 'incluindo', não 'somente'.",
      erroComum: "Confundir dado com código executável, por influência do vocabulário técnico de TI.",
      comoBancaPensa: "Troca o operador de inclusão por um de exclusão — mesma frase, sentido oposto."
    }
  },

  {
    ...BASE81,
    id: "CC-109", assunto: "Convenção de Budapeste", subassunto: "Prestador de serviço — art. 1º, 'c'",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, art. 1º da Convenção)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "Enquadra-se no conceito de prestador de serviço a entidade que apenas armazene ou processe dados informáticos por conta de um serviço de comunicação ou de seus usuários, ainda que não ofereça a comunicação diretamente a estes.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "por conta de",
    cognitivo: {
      motivo: "Cobrar a segunda parte da definição, que alcança quem está a montante do serviço prestado ao usuário final.",
      palavraCritica: "ainda que não ofereça",
    },
    comentario: {
      resolucao: "CERTO. A definição tem duas partes: a entidade que proporciona aos usuários a possibilidade de comunicar por meio de sistema informático, e QUALQUER OUTRA que trate ou armazene dados informáticos por conta desse serviço ou de seus usuários. A segunda parte alcança justamente o intermediário técnico — provedor de hospedagem, de nuvem, de processamento —, que é quem costuma deter os dados de interesse da investigação.",
      fundamento: "Convenção sobre o Crime Cibernético, art. 1º, alínea 'c' (Decreto nº 11.491/2023).",
      macete: "Prestador não é só quem fala com o usuário: é também quem guarda os dados dele por conta de outro.",
      erroComum: "Restringir o conceito ao provedor de conexão ou de aplicação com contrato direto.",
      comoBancaPensa: "Cobra a extensão da definição, que é o que dá utilidade prática aos poderes dos arts. 16 a 18."
    }
  },

  {
    ...BASE81,
    id: "CC-110", assunto: "Convenção de Budapeste", subassunto: "Informações de assinante — art. 18.3",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, art. 18.3 da Convenção)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "As informações relativas a assinantes, na definição da Convenção, compreendem os dados de tráfego gerados durante a transmissão e o conteúdo das comunicações mantidas pelo usuário.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "compreendem os dados de tráfego ... e o conteúdo",
    cognitivo: {
      motivo: "Fundir três categorias que a Convenção separa, e cuja separação define o grau de proteção de cada uma.",
      palavraCritica: "compreendem",
    },
    comentario: {
      resolucao: "ERRADO. O art. 18.3 define informações relativas a assinantes como as informações detidas pelo prestador, relativas aos assinantes de seus serviços, DISTINTAS dos dados de tráfego e dos dados de conteúdo. São, por exemplo, identidade, endereço, número de telefone e dados de faturamento. A definição é construída por exclusão exatamente das duas categorias que o item nela insere.",
      fundamento: "Convenção sobre o Crime Cibernético, art. 18.3 (Decreto nº 11.491/2023).",
      macete: "Três caixas separadas: cadastro, tráfego e conteúdo. Cadastro é a de menor proteção e a mais restrita.",
      erroComum: "Supor que 'informações de assinante' funcione como categoria guarda-chuva.",
      comoBancaPensa: "Junta as três definições do art. 1º e do art. 18 num item só — a construção mais recorrente do tema."
    }
  },

  /* ===== TIPOS PENAIS E RESERVAS (ARTS. 2º, 7º E 9º) ===== */

  {
    ...BASE81,
    id: "CC-111", assunto: "Convenção de Budapeste", subassunto: "Reserva quanto à posse — art. 9º",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, art. 9º da Convenção)",
    dificuldade: 3, tempoIdealSeg: 65,
    enunciado: "A Convenção admite que o Estado-parte se reserve o direito de não criminalizar a simples posse de pornografia infantil armazenada em sistema informático.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "reserve o direito de não criminalizar",
    cognitivo: {
      motivo: "Cobrar a faculdade de reserva do art. 9.4, que surpreende quem supõe proteção absoluta no tema.",
      palavraCritica: "reserve o direito",
    },
    comentario: {
      resolucao: "CERTO. O art. 9.4 permite que a Parte se reserve o direito de não aplicar, no todo ou em parte, as alíneas 'd' e 'e' do item 1 — obtenção e posse — e as alíneas 'b' e 'c' do item 2. É concessão negociada para viabilizar a adesão de Estados com tradições jurídicas distintas, e não juízo de menor gravidade da conduta.",
      fundamento: "Convenção sobre o Crime Cibernético, art. 9º, itens 1 e 4 (Decreto nº 11.491/2023).",
      macete: "Produzir e difundir é núcleo duro. Obter e possuir admitem reserva.",
      erroComum: "Rejeitar o item por parecer moralmente inaceitável, sem conferir o texto.",
      comoBancaPensa: "Escolhe o dispositivo que contraria a intuição — é onde o candidato erra sem consultar a lei."
    }
  },

  {
    ...BASE81,
    id: "CC-112", assunto: "Convenção de Budapeste", subassunto: "Falsificação informática — art. 7º",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, art. 7º da Convenção)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "É facultado ao Estado-parte condicionar a punição da falsificação informática à demonstração de intenção de defraudar ou de outro propósito fraudulento.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "facultado ... condicionar",
    cognitivo: {
      motivo: "Cobrar a cláusula facultativa do art. 7º, que permite exigir elemento subjetivo especial.",
      palavraCritica: "facultado",
    },
    comentario: {
      resolucao: "CERTO. A parte final do art. 7º diz que a Parte pode exigir, para a responsabilidade penal, a intenção de defraudar ou outra intenção fraudulenta similar. Cláusulas assim, redigidas como faculdade, aparecem também nos arts. 2º e 6º — e a banca costuma convertê-las em obrigação.",
      fundamento: "Convenção sobre o Crime Cibernético, art. 7º (Decreto nº 11.491/2023).",
      macete: "Quando o texto diz 'a Parte pode exigir', o item que diz 'a Convenção exige' está errado.",
      erroComum: "Confundir a faculdade concedida ao Estado com uma exigência da Convenção.",
      comoBancaPensa: "Reproduz a faculdade fielmente — item honesto, que serve de par para os que a distorcem."
    }
  },

  /* ===== PODERES PROCESSUAIS (ARTS. 14 A 21) ===== */

  {
    ...BASE81,
    id: "CC-113", assunto: "Convenção de Budapeste", subassunto: "Âmbito dos poderes processuais — art. 14.3",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, art. 14 da Convenção)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "As medidas de recolha de dados de tráfego e de interceptação de dados de conteúdo em tempo real aplicam-se obrigatoriamente a toda comunicação, inclusive à transmitida em sistema operado em benefício de grupo restrito de utilizadores que não empregue redes públicas de comunicação.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "obrigatoriamente a toda comunicação",
    cognitivo: {
      motivo: "Eliminar a reserva do art. 14.3, que permite excluir sistemas fechados sem conexão com redes públicas.",
      palavraCritica: "obrigatoriamente",
    },
    comentario: {
      resolucao: "ERRADO. O art. 14.3, alínea 'b', permite à Parte reservar-se o direito de NÃO aplicar as medidas dos arts. 20 e 21 às comunicações transmitidas em sistema informático de prestador que seja operado em benefício de um grupo restrito de utilizadores e que não empregue redes públicas nem esteja conectado a outro sistema. A hipótese descrita no item é exatamente a que a Convenção permite excluir.",
      fundamento: "Convenção sobre o Crime Cibernético, art. 14, item 3, alínea 'b' (Decreto nº 11.491/2023).",
      macete: "Rede fechada, sem uso de rede pública e sem conexão externa: é a hipótese clássica de reserva.",
      erroComum: "Supor que poder investigativo previsto em tratado não comporta exceção.",
      comoBancaPensa: "Descreve com precisão a hipótese da reserva e afirma o contrário do que ela determina."
    }
  },

  {
    ...BASE81,
    id: "CC-114", assunto: "Convenção de Budapeste", subassunto: "Condições e salvaguardas — art. 15",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, art. 15 da Convenção)",
    dificuldade: 2, tempoIdealSeg: 65,
    enunciado: "O estabelecimento e a aplicação dos poderes e procedimentos previstos na Convenção subordinam-se a condições e salvaguardas do direito interno, que devem incluir supervisão judicial ou de outra forma independente.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "supervisão judicial ou de outra forma independente",
    cognitivo: {
      motivo: "Cobrar o art. 15, que é a cláusula de direitos humanos da parte processual da Convenção.",
      palavraCritica: "salvaguardas",
    },
    comentario: {
      resolucao: "CERTO. O art. 15 condiciona os poderes processuais dos arts. 16 a 21 a salvaguardas adequadas do direito interno, com proteção dos direitos humanos, e menciona expressamente a supervisão judicial ou outra forma de supervisão independente, além da justificação e da limitação do âmbito e da duração das medidas.",
      fundamento: "Convenção sobre o Crime Cibernético, art. 15 (Decreto nº 11.491/2023).",
      macete: "Todo poder dos arts. 16 a 21 passa pelo filtro do art. 15.",
      erroComum: "Ler a Convenção só como catálogo de poderes, ignorando o limite que ela mesma impõe.",
      comoBancaPensa: "Cobra o artigo que a banca usa para construir casos concretos de nulidade de prova."
    }
  },

  {
    ...BASE81,
    id: "CC-115", assunto: "Convenção de Budapeste", subassunto: "Conservação expedita — art. 16.2",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, art. 16 da Convenção)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Ordenada a conservação expedita de dados informáticos armazenados, a Convenção impõe que sejam conservados obrigatoriamente por cento e oitenta dias, prorrogáveis por igual período mediante autorização judicial.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "cento e oitenta dias",
    cognitivo: {
      motivo: "Trocar o teto de noventa dias por um prazo inexistente, e converter um máximo em obrigação.",
      palavraCritica: "obrigatoriamente",
    },
    comentario: {
      resolucao: "ERRADO. O art. 16.2 determina a conservação pelo tempo NECESSÁRIO, até o máximo de noventa dias, para permitir que as autoridades obtenham a divulgação — e admite que a ordem seja posteriormente renovada. Noventa dias é teto, não piso, e não existe prazo de cento e oitenta dias no dispositivo.",
      fundamento: "Convenção sobre o Crime Cibernético, art. 16, item 2 (Decreto nº 11.491/2023).",
      macete: "Conservação interna: até 90 dias, renovável. Guarde 'até', porque é o que o item costuma trocar.",
      erroComum: "Importar prazos da legislação interna de guarda de registros (Marco Civil da Internet).",
      comoBancaPensa: "Troca o número e o modalizador ao mesmo tempo — dois erros num item de aparência simples."
    }
  },

  {
    ...BASE81,
    id: "CC-116", assunto: "Convenção de Budapeste", subassunto: "Confidencialidade imposta ao prestador — arts. 20.3 e 21.3",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, arts. 20 e 21 da Convenção)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "O prestador de serviço compelido a colaborar na interceptação de dados de conteúdo em tempo real pode revelar a seus clientes a existência do procedimento, como forma de resguardar o direito deles à privacidade.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "pode revelar a seus clientes",
    cognitivo: {
      motivo: "Inverter o dever de confidencialidade que a Convenção impõe ao prestador, transformando-o em faculdade de informar.",
      palavraCritica: "pode revelar",
    },
    comentario: {
      resolucao: "ERRADO. Os arts. 20.3 e 21.3 obrigam a Parte a adotar medidas para impor ao prestador o DEVER de manter em segredo o fato de estar executando a medida e qualquer informação a ela relativa. Revelar ao investigado frustraria a diligência — e é justamente esse resultado que o dispositivo pretende evitar.",
      fundamento: "Convenção sobre o Crime Cibernético, arts. 20.3 e 21.3 (Decreto nº 11.491/2023).",
      macete: "Quem executa a medida guarda segredo dela. A privacidade é tutelada pelo art. 15, não pelo aviso ao alvo.",
      erroComum: "Aceitar o argumento da transparência, que soa protetivo mas inviabiliza a investigação.",
      comoBancaPensa: "Invoca um valor legítimo — privacidade — para justificar o oposto do que a norma determina."
    }
  },

  /* ===== COOPERAÇÃO INTERNACIONAL (ARTS. 22 A 39) ===== */

  {
    ...BASE81,
    id: "CC-117", assunto: "Convenção de Budapeste", subassunto: "Jurisdição — art. 22",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, art. 22 da Convenção)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "O Estado-parte adota jurisdição sobre a infração prevista na Convenção que seja cometida a bordo de aeronave matriculada segundo as suas leis.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "aeronave matriculada segundo as suas leis",
    cognitivo: {
      motivo: "Cobrar a jurisdição pelo pavilhão, prevista no art. 22.1, que independe do espaço aéreo sobrevoado.",
      palavraCritica: "matriculada",
    },
    comentario: {
      resolucao: "CERTO. O art. 22.1 determina a adoção de jurisdição quando a infração for cometida no território da Parte, a bordo de navio que arvore o seu pavilhão ou a bordo de aeronave matriculada segundo as suas leis. O critério é o registro — por isso a jurisdição subsiste mesmo em espaço aéreo internacional.",
      fundamento: "Convenção sobre o Crime Cibernético, art. 22, item 1 (Decreto nº 11.491/2023).",
      macete: "Território, pavilhão e matrícula: três bases de jurisdição no mesmo item.",
      erroComum: "Condicionar a jurisdição ao espaço aéreo ou às águas em que a aeronave ou o navio se encontrava.",
      comoBancaPensa: "Aplica ao ambiente cibernético uma regra clássica de direito internacional, que muitos não associam ao tema."
    }
  },

  {
    ...BASE81,
    id: "CC-118", assunto: "Convenção de Budapeste", subassunto: "Extraditar ou julgar — art. 24.6",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, art. 24 da Convenção)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "Recusada a extradição unicamente em razão da nacionalidade do procurado, o Estado requerido deve, a pedido do Estado requerente, submeter o caso às suas autoridades competentes para fins de persecução penal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "submeter o caso às suas autoridades competentes",
    cognitivo: {
      motivo: "Cobrar a cláusula aut dedere aut judicare do art. 24.6, que evita a impunidade decorrente da vedação de extraditar nacionais.",
      palavraCritica: "a pedido",
    },
    comentario: {
      resolucao: "CERTO. O art. 24.6 estabelece que, recusada a extradição em razão da nacionalidade ou por se considerar competente, a Parte requerida submeterá o caso, a pedido da requerente, às suas autoridades competentes para efeitos de investigação e procedimento penal, informando o desfecho. É a fórmula 'extraditar ou julgar', relevante para o Brasil, que não extradita brasileiro nato.",
      fundamento: "Convenção sobre o Crime Cibernético, art. 24, item 6 (Decreto nº 11.491/2023).",
      macete: "Não extraditou por ser nacional? Então julga em casa — mas só se a outra Parte pedir.",
      erroComum: "Supor que a recusa de extradição encerra a cooperação naquele caso.",
      comoBancaPensa: "Cobra a interação entre o tratado e a vedação constitucional de extraditar o nacional nato."
    }
  },

  {
    ...BASE81,
    id: "CC-119", assunto: "Convenção de Budapeste", subassunto: "Dupla incriminação na conservação — art. 29.3",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, art. 29 da Convenção)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "A dupla incriminação é exigida, em qualquer hipótese, como condição para que o Estado requerido atenda a pedido de conservação expedita de dados informáticos formulado por outro Estado-parte.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "em qualquer hipótese",
    cognitivo: {
      motivo: "Impor como regra geral uma exigência que o art. 29.3 dispensa justamente para a conservação.",
      palavraCritica: "em qualquer hipótese",
    },
    comentario: {
      resolucao: "ERRADO. O art. 29.3 dispensa a dupla incriminação como condição para a conservação expedita. A lógica é de urgência: dados voláteis se perdem enquanto se discute a tipicidade nos dois ordenamentos, e conservar não é ainda divulgar. O art. 29.4 admite reserva limitada, para infrações fora dos arts. 2º a 11 — mas isso é exceção, não a regra que o item enuncia.",
      fundamento: "Convenção sobre o Crime Cibernético, art. 29, itens 3 e 4 (Decreto nº 11.491/2023).",
      macete: "Conservar é congelar, não entregar. Por isso o requisito cai nessa etapa.",
      erroComum: "Estender à conservação a exigência que vale para a busca, a apreensão e a divulgação.",
      comoBancaPensa: "Usa 'em qualquer hipótese' para transformar a exceção do 29.4 em regra do 29.3."
    }
  },

  {
    ...BASE81,
    id: "CC-120", assunto: "Convenção de Budapeste", subassunto: "Prazo da conservação internacional — art. 29.7",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, art. 29 da Convenção)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Atendido o pedido de conservação expedita formulado por outro Estado-parte, os dados devem ser conservados por prazo não inferior a sessenta dias, a fim de permitir que o Estado requerente formule o pedido de acesso.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não inferior a sessenta dias",
    cognitivo: {
      motivo: "Cobrar o piso do art. 29.7, que convive com o teto de noventa dias do art. 16.2 sem se confundir com ele.",
      palavraCritica: "não inferior",
    },
    comentario: {
      resolucao: "CERTO. O art. 29.7 fixa prazo NÃO INFERIOR a sessenta dias para a conservação em resposta a pedido internacional, para dar tempo à requerente de apresentar o pedido de busca, acesso, apreensão ou divulgação — e determina que, apresentado o pedido, os dados continuem conservados até decisão sobre ele. É piso, ao contrário dos noventa dias do art. 16.2, que são teto.",
      fundamento: "Convenção sobre o Crime Cibernético, art. 29, item 7 (Decreto nº 11.491/2023).",
      macete: "60 é mínimo e é internacional; 90 é máximo e é interno. Os dois números caem juntos, trocados.",
      erroComum: "Inverter os dois prazos, ou tratar ambos como teto.",
      comoBancaPensa: "Explora a coexistência de dois prazos em artigos distintos, com naturezas opostas."
    }
  },

  {
    ...BASE81,
    id: "CC-121", assunto: "Convenção de Budapeste", subassunto: "Acesso transfronteiriço — art. 32",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, art. 32 da Convenção)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "Independentemente de autorização do outro Estado-parte, é lícito o acesso a dados informáticos armazenados em seu território quando estes forem publicamente disponíveis ou quando houver consentimento voluntário de quem tenha autoridade legal para divulgá-los.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "publicamente disponíveis ou ... consentimento voluntário",
    cognitivo: {
      motivo: "Cobrar as duas únicas hipóteses de acesso transfronteiriço sem autorização, previstas no art. 32.",
      palavraCritica: "consentimento voluntário",
    },
    comentario: {
      resolucao: "CERTO. O art. 32 autoriza a Parte, sem autorização da outra, a aceder a dados informáticos publicamente disponíveis (fonte aberta), independentemente da localização geográfica, e a aceder ou receber dados situados em outro território mediante consentimento legal e voluntário de quem tenha autoridade para divulgá-los. Fora dessas duas hipóteses, é preciso acionar a cooperação formal.",
      fundamento: "Convenção sobre o Crime Cibernético, art. 32, alíneas 'a' e 'b' (Decreto nº 11.491/2023).",
      macete: "Duas portas apenas: fonte aberta e consentimento de quem pode divulgar.",
      erroComum: "Ampliar a regra para qualquer dado acessível remotamente, o que a Convenção não permite.",
      comoBancaPensa: "Cobra o artigo mais debatido do tratado — o que toca diretamente a soberania sobre dados."
    }
  },

  {
    ...BASE81,
    id: "CC-122", assunto: "Convenção de Budapeste", subassunto: "Relação com outros tratados — art. 39",
    origem: "Inédita — estilo CEBRASPE (Decreto nº 11.491/2023, art. 39 da Convenção)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "A Convenção sobre o Crime Cibernético substitui os tratados multilaterais e bilaterais anteriormente celebrados entre as Partes sobre crimes informáticos e assistência penal internacional, prevalecendo sobre eles em caso de conflito.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "substitui",
    cognitivo: {
      motivo: "Trocar a função declarada da Convenção — complementar — pela de norma revogadora dos acordos anteriores.",
      palavraCritica: "substitui",
    },
    comentario: {
      resolucao: "ERRADO. O art. 39.1 declara que a finalidade da Convenção é COMPLETAR os tratados e acordos multilaterais ou bilaterais aplicáveis entre as Partes, e o art. 39.2 assegura que as Partes que já tenham celebrado acordo sobre a matéria continuam habilitadas a aplicá-lo. Não há substituição nem revogação dos instrumentos anteriores.",
      fundamento: "Convenção sobre o Crime Cibernético, art. 39, itens 1 e 2 (Decreto nº 11.491/2023).",
      macete: "A Convenção soma-se ao que já existe; não limpa a mesa.",
      erroComum: "Aplicar automaticamente o critério da lei posterior, que não rege a relação entre tratados desse tipo.",
      comoBancaPensa: "Sugere hierarquia onde o tratado estabelece complementaridade."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE81);
