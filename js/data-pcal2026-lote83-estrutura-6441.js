/* =====================================================================
   QUESTLAB — Lote 83: ESTRUTURA ORGANIZACIONAL DA PC-AL
   Lei estadual nº 6.441/2003, modificada pela Lei nº 6.479/2004

   POR QUE ESTE LOTE EXISTE

   São os itens 6 e 8 da Legislação Institucional do edital, e o banco
   tinha ZERO questões de ambos. Junto com o lote 82 (Lei 6.276/2001,
   carreiras), fecha o bloco de leis estaduais próprias da instituição:
   quem ela é (6.441/2003), o que ela faz e por quais órgãos, e quem são
   os servidores dela (6.276/2001).

   PROCEDÊNCIA. Textos consolidados baixados do portal da transparência
   do Estado de Alagoas. A Lei 6.441/2003 já traz na folha de rosto a
   anotação "Alterada pela Lei nº 6.479, de 28 de maio de 2004", e o
   texto da 6.479/2004 foi lido na íntegra para identificar exatamente o
   que ela acrescentou.

   O QUE A LEI 6.479/2004 MUDOU — e por que isso é pouco

   Ela é lei de retoque, não de reforma. Alterou o art. 24 para
   acrescentar duas delegacias especializadas (Defesa dos Direitos da
   Mulher e da Criança e do Adolescente) e dois distritos policiais
   (Jequiá da Praia e Campestre), e substituiu o Anexo Único de cargos e
   funções gratificadas. Não tocou nos arts. 1º a 12, que são o núcleo
   conceitual cobrado em prova. Item que atribua à Lei 6.479/2004 a
   criação da estrutura ou a definição de competências está errado.

   O CONFLITO DE NOMENCLATURA — resolvido pelo critério cronológico

   Esta lei chama a chefia da instituição de DIRETOR-GERAL (art. 2º).
   A Lei estadual 8.782/2022 e a Lei Orgânica Nacional das Polícias
   Civis (Lei federal 14.735/2023) usam DELEGADO-GERAL. Prevalece a
   norma mais recente — e aqui o critério é reforçado, porque a LONPC é
   lei federal de caráter nacional. A nomenclatura de 2003 está
   tacitamente revogada nesse ponto, e o lote diz isso expressamente em
   vez de fingir que o conflito não existe.

   Três itens (LI-138, LI-146 e LI-152) tratam desse eixo.

   Gabarito: 8 CERTO / 8 ERRADO. Vale a nota metodológica do lote 77
   sobre regra cega em lote pequeno; a medição foi feita depois de
   escrever, não presumida.
   ===================================================================== */

const CARGOS83 = ["Escrivão", "Agente"];
const BASE83 = {
  concurso: "PCAL", cargo: CARGOS83, ano: 2026,
  tipo: "CE", probReaparecer: 0.80,
  disciplina: "Legislação Institucional (AL)",
  assunto: "Estrutura organizacional da PC-AL (Lei 6.441/2003)",
};

const QUESTOES_PCAL_LOTE83 = [

  /* ===== NATUREZA E CHEFIA (ARTS. 1º A 5º) ===== */

  {
    ...BASE83,
    id: "LI-138", subassunto: "Natureza institucional — art. 1º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.441/2003, art. 1º)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "A Polícia Civil é instituição permanente, subordinada diretamente ao Governador do Estado, órgão da administração direta, com autonomia administrativa e gerencial, constituindo-se em unidade orçamentária.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "unidade orçamentária",
    cognitivo: {
      motivo: "Cobrar os quatro atributos que o art. 1º reúne numa só frase, inclusive o de unidade orçamentária.",
      palavraCritica: "unidade orçamentária",
    },
    comentario: {
      resolucao: "CERTO. É a redação do art. 1º. Reúne quatro atributos: permanência, subordinação direta ao Governador, natureza de administração direta e autonomia administrativa e gerencial — esta última materializada na condição de unidade orçamentária, que significa ter dotação própria no orçamento estadual.",
      fundamento: "Lei estadual nº 6.441/2003, art. 1º.",
      macete: "Autonomia administrativa e gerencial + unidade orçamentária andam juntas no art. 1º.",
      erroComum: "Confundir autonomia gerencial com autonomia funcional, que a lei não confere.",
      comoBancaPensa: "Rol de atributos correto e completo — item que serve de base para os que alteram um deles."
    }
  },

  {
    ...BASE83,
    id: "LI-139", subassunto: "Chefia — art. 2º e conflito com norma posterior",
    origem: "Inédita — estilo CEBRASPE (Lei 6.441/2003, art. 2º; Lei 14.735/2023)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "A chefia da Polícia Civil é exercida em cargo de provimento em comissão privativo de Delegado de Carreira da própria instituição, nomeado pelo Governador do Estado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "privativo de Delegado de Carreira",
    cognitivo: {
      motivo: "Cobrar o núcleo do art. 2º, que a mudança de nomenclatura posterior não afetou.",
      palavraCritica: "de Carreira",
    },
    comentario: {
      resolucao: "CERTO. O art. 2º prevê cargo em comissão privativo de Delegado de Carreira, nomeado pelo Governador. O NOME do cargo mudou — a lei de 2003 diz 'Diretor-Geral', enquanto a Lei estadual 8.782/2022 e a Lei Orgânica Nacional das Polícias Civis falam em 'Delegado-Geral' —, mas o regime descrito no item permanece. Por isso a assertiva, que não nomeia o cargo, é correta nos dois planos.",
      fundamento: "Lei estadual nº 6.441/2003, art. 2º; CF/88, art. 144, § 4º; Lei nº 14.735/2023.",
      macete: "Mudou o nome do cargo, não o requisito: só Delegado de Carreira chefia a Polícia Civil.",
      erroComum: "Rejeitar o item por não encontrar nele a palavra 'Diretor-Geral' que decorou.",
      comoBancaPensa: "Descreve o instituto sem nomeá-lo — assim o item sobrevive à troca de nomenclatura."
    }
  },

  {
    ...BASE83,
    id: "LI-140", subassunto: "Precedência do chefe — art. 2º, § 1º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.441/2003, art. 2º, § 1º)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "Recaindo a escolha para a chefia da Polícia Civil sobre Delegado que não integre a última classe da Carreira, o escolhido não terá precedência funcional e hierárquica sobre os Delegados de classe superior à sua.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "não terá precedência",
    cognitivo: {
      motivo: "Inverter a regra do § 1º, que existe justamente para resolver o problema descrito.",
      palavraCritica: "não terá",
    },
    comentario: {
      resolucao: "ERRADO. O § 1º do art. 2º diz o oposto: quando a escolha não recair sobre Delegado da última classe, o escolhido TERÁ precedência funcional e hierárquica sobre os demais Delegados de Polícia. A regra existe para que a chefia não fique hierarquicamente abaixo de subordinados mais antigos — negá-la esvaziaria o comando da instituição.",
      fundamento: "Lei estadual nº 6.441/2003, art. 2º, § 1º.",
      macete: "Quem chefia manda, mesmo vindo de classe inferior. É o § 1º que garante isso.",
      erroComum: "Aplicar a lógica geral de antiguidade, que aqui é expressamente afastada.",
      comoBancaPensa: "Nega uma regra cuja finalidade é evidente — item que se resolve pela função do dispositivo."
    }
  },

  {
    ...BASE83,
    id: "LI-141", subassunto: "Vedação ao desvio funcional — art. 5º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.441/2003, art. 5º)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "É vedado o exercício da função policial ou de atos típicos de Polícia Civil por servidores não integrantes das respectivas carreiras, sujeitando-se à responsabilização funcional a autoridade que permitir ou tolerar a infração.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "permitir ou tolerar",
    cognitivo: {
      motivo: "Cobrar a vedação ao desvio funcional e, sobretudo, a responsabilização de quem apenas tolera.",
      palavraCritica: "tolerar",
    },
    comentario: {
      resolucao: "CERTO. É o art. 5º. Note a extensão da responsabilidade: alcança quem PERMITE e também quem apenas TOLERA a infração — ou seja, a omissão do superior já basta. A vedação vale para qualquer forma de desvio funcional.",
      fundamento: "Lei estadual nº 6.441/2003, art. 5º.",
      macete: "Permitir e tolerar estão no mesmo patamar: a omissão do superior também responde.",
      erroComum: "Supor que só responde quem determinou expressamente o desvio.",
      comoBancaPensa: "O verbo 'tolerar' é o que a banca suprime para transformar o item em errado."
    }
  },

  /* ===== OBJETIVOS E COMPETÊNCIA (ARTS. 6º E 7º) ===== */

  {
    ...BASE83,
    id: "LI-142", subassunto: "Uso da força — art. 6º, VI",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.441/2003, art. 6º, VI)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Entre os objetivos institucionais está o de empregar os recursos da inteligência, da persuasão e do diálogo, utilizando-se da força sempre que necessária à eficácia da ação policial.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "sempre que necessária à eficácia",
    cognitivo: {
      motivo: "Rebaixar a força de recurso extremo a meio ordinário, condicionado apenas à eficácia da ação.",
      palavraCritica: "sempre que",
    },
    comentario: {
      resolucao: "ERRADO. O inciso VI do art. 6º diz que a força é utilizada 'apenas como recurso extremo'. O item troca esse limite por um critério de conveniência operacional — 'sempre que necessária à eficácia' —, que inverte a lógica do dispositivo: inteligência, persuasão e diálogo deixariam de ser a regra e passariam a ser apenas a primeira opção disponível.",
      fundamento: "Lei estadual nº 6.441/2003, art. 6º, VI.",
      macete: "A ordem é inteligência, persuasão, diálogo — e força só no extremo, nunca por eficácia.",
      erroComum: "Aceitar o critério de eficácia por soar operacionalmente razoável.",
      comoBancaPensa: "Substitui um limite estrito por um critério elástico, mantendo o resto do inciso intacto."
    }
  },

  {
    ...BASE83,
    id: "LI-143", subassunto: "Apuração de infrações — art. 6º, II",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.441/2003, art. 6º, II)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Compete à Polícia Civil apurar todas as infrações penais praticadas no território do Estado, inclusive as militares, nos limites de sua competência constitucional.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "inclusive as militares",
    cognitivo: {
      motivo: "Suprimir a ressalva das infrações militares, que consta do inciso II e da própria CF/88.",
      palavraCritica: "inclusive as militares",
    },
    comentario: {
      resolucao: "ERRADO. O inciso II do art. 6º diz 'apurar as infrações penais, EXCETO as militares'. A ressalva reproduz o art. 144, § 4º, da Constituição Federal, que reserva a apuração das infrações penais militares às polícias militares e ao respectivo sistema de justiça castrense.",
      fundamento: "Lei estadual nº 6.441/2003, art. 6º, II; CF/88, art. 144, § 4º.",
      macete: "Infração militar nunca é da Polícia Civil — a ressalva está na lei estadual e na Constituição.",
      erroComum: "Ler 'todas as infrações' e validar pelo território, sem ver a exceção.",
      comoBancaPensa: "Troca 'exceto' por 'inclusive' — inversão de uma palavra que já derrubou muitos candidatos."
    }
  },

  {
    ...BASE83,
    id: "LI-144", subassunto: "Iniciativa da polícia judiciária — art. 7º, I",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.441/2003, art. 7º, I)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "As funções de Polícia Judiciária são exercidas por iniciativa própria, mediante requisição de autoridade judiciária ou do Ministério Público, ou ainda mediante requerimento de qualquer cidadão.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "requerimento de qualquer cidadão",
    cognitivo: {
      motivo: "Cobrar as três vias de deflagração previstas no inciso I, sendo a terceira a menos lembrada.",
      palavraCritica: "qualquer cidadão",
    },
    comentario: {
      resolucao: "CERTO. O inciso I do art. 7º lista três formas de deflagração: iniciativa própria, requisição judicial ou ministerial, e requerimento de qualquer cidadão. Repare na distinção técnica — a autoridade judiciária e o Ministério Público REQUISITAM; o cidadão REQUER.",
      fundamento: "Lei estadual nº 6.441/2003, art. 7º, I.",
      macete: "Juiz e MP requisitam; cidadão requer. Três portas de entrada para a atuação.",
      erroComum: "Esquecer a via do requerimento do cidadão, ou tratá-la como mera notícia-crime informal.",
      comoBancaPensa: "Rol de três elementos: basta suprimir um para o item virar errado."
    }
  },

  {
    ...BASE83,
    id: "LI-145", subassunto: "Competência privativa — art. 7º, III e IV",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.441/2003, art. 7º)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "Compete privativamente à Polícia Civil fiscalizar o comércio, o porte e o uso de armas e explosivos, observada a legislação federal, e atuar na desativação de artefatos explosivos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "desativação de artefatos explosivos",
    cognitivo: {
      motivo: "Cobrar duas competências privativas pouco associadas à Polícia Civil, ambas do art. 7º.",
      palavraCritica: "observada a legislação federal",
    },
    comentario: {
      resolucao: "CERTO. São os incisos III e IV do art. 7º. A ressalva 'observada a legislação federal pertinente' é essencial: o controle de armas é matéria do Estatuto do Desarmamento e do SINARM, de competência da União — a atribuição estadual se exerce dentro desse marco, não contra ele.",
      fundamento: "Lei estadual nº 6.441/2003, art. 7º, III e IV.",
      macete: "Armas e explosivos: a PC-AL atua, mas sempre nos limites da legislação federal.",
      erroComum: "Rejeitar o item por associar o controle de armas exclusivamente à Polícia Federal.",
      comoBancaPensa: "Junta duas competências verdadeiras e pouco memorizadas, com a ressalva federal no meio."
    }
  },

  /* ===== CONSELHO SUPERIOR — CONSUPOC (ARTS. 9º A 11) ===== */

  {
    ...BASE83,
    id: "LI-146", subassunto: "Presidência do CONSUPOC — art. 9º, § 1º, I",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.441/2003, art. 9º, § 1º)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "O Conselho Superior de Polícia Civil é presidido pelo Corregedor-Geral da Polícia Civil, que o integra ao lado dos diretores dos departamentos e da Academia de Polícia Civil.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "presidido pelo Corregedor-Geral",
    cognitivo: {
      motivo: "Trocar o presidente do colegiado por outro de seus integrantes, mantendo o restante fiel.",
      palavraCritica: "Corregedor-Geral",
    },
    comentario: {
      resolucao: "ERRADO. Quem preside o CONSUPOC é o chefe da instituição — o Diretor-Geral, na nomenclatura da Lei 6.441/2003, hoje Delegado-Geral por força de norma posterior. O Corregedor-Geral realmente integra o Conselho, mas como membro, no inciso III. O resto da assertiva está correto, o que torna o erro mais difícil de isolar.",
      fundamento: "Lei estadual nº 6.441/2003, art. 9º, § 1º, incisos I e III.",
      macete: "Quem chefia a instituição preside o Conselho. O Corregedor é membro, não presidente.",
      erroComum: "Associar a presidência do colegiado à função correicional, por ser a de controle.",
      comoBancaPensa: "Promove um membro do rol à presidência — troca de sujeito dentro de uma lista verdadeira."
    }
  },

  {
    ...BASE83,
    id: "LI-147", subassunto: "Deliberação e voto de qualidade — art. 10",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.441/2003, art. 10)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "O Conselho Superior de Polícia Civil fornece seus pareceres, opiniões e recomendações por maioria absoluta de seus membros, cabendo ao Presidente o voto de qualidade em caso de empate.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "maioria absoluta",
    cognitivo: {
      motivo: "Elevar o quórum de deliberação do art. 10, que exige apenas maioria simples.",
      palavraCritica: "absoluta",
    },
    comentario: {
      resolucao: "ERRADO. O art. 10 exige MAIORIA DE VOTOS — maioria simples, apurada entre os presentes —, e não maioria absoluta, que se calcula sobre a totalidade dos membros. A segunda parte está certa: o empate se resolve pelo voto de qualidade do Presidente. Repare que a própria existência do voto de qualidade confirma o quórum simples: com maioria absoluta o empate seria muito menos provável.",
      fundamento: "Lei estadual nº 6.441/2003, art. 10.",
      macete: "Maioria simples decide; empate, o Presidente desempata.",
      erroComum: "Presumir quórum qualificado por se tratar de órgão de cúpula.",
      comoBancaPensa: "Acrescenta uma palavra — 'absoluta' — e mantém o resto do artigo fiel."
    }
  },

  {
    ...BASE83,
    id: "LI-148", subassunto: "Periodicidade das reuniões — art. 11",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.441/2003, art. 11)",
    dificuldade: 3, tempoIdealSeg: 65,
    enunciado: "O Conselho Superior de Polícia Civil, ao qual compete elaborar instruções normativas e deliberar sobre a Ordem do Mérito Policial Civil, reúne-se ordinariamente uma vez por trimestre e, extraordinariamente, quando convocado pelo seu Presidente.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "uma vez por trimestre",
    cognitivo: {
      motivo: "Trocar a periodicidade ordinária, mantendo correta a parte relativa à convocação extraordinária.",
      palavraCritica: "trimestre",
    },
    comentario: {
      resolucao: "ERRADO. O art. 11 estabelece reunião ordinária uma vez POR MÊS, e não por trimestre. A segunda metade da assertiva está correta: a reunião extraordinária depende de convocação do Presidente. Como sempre, basta uma metade falsa para o item cair.",
      fundamento: "Lei estadual nº 6.441/2003, art. 11.",
      macete: "CONSUPOC: ordinária mensal; extraordinária por convocação do Presidente.",
      erroComum: "Presumir periodicidade trimestral por analogia com outros colegiados da Administração.",
      comoBancaPensa: "Alonga o intervalo — número plausível para quem nunca leu o artigo."
    }
  },

  {
    ...BASE83,
    id: "LI-149", subassunto: "Secretaria do CONSUPOC — art. 9º, § 2º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.441/2003, art. 9º, § 2º)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Cabe ao Conselho Superior de Polícia Civil elaborar e aprovar o seu Regimento Interno, mas a chefia da secretaria do colegiado é exercida por servidor a ele estranho, designado pelo Governador do Estado.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "estranho ao colegiado",
    cognitivo: {
      motivo: "Deslocar para fora do Conselho, e para o Governador, uma escolha que o § 2º atribui ao próprio colegiado.",
      palavraCritica: "designado pelo Governador",
    },
    comentario: {
      resolucao: "ERRADO. O § 2º do art. 9º determina que o próprio CONSUPOC escolherá UM DE SEUS MEMBROS para exercer a chefia de sua secretaria. Não há designação externa nem participação do Governador — é ato de autogoverno do colegiado, coerente com o § 3º, que lhe atribui elaborar e aprovar o próprio Regimento Interno.",
      fundamento: "Lei estadual nº 6.441/2003, art. 9º, §§ 2º e 3º.",
      macete: "O Conselho escolhe entre os seus e faz o próprio regimento.",
      erroComum: "Supor intervenção do Chefe do Executivo em ato interno do colegiado.",
      comoBancaPensa: "Troca a autoridade competente — padrão 'quem pratica o ato'."
    }
  },

  /* ===== ESTRUTURA E ALTERAÇÕES DA LEI 6.479/2004 ===== */

  {
    ...BASE83,
    id: "LI-150", subassunto: "Órgão colegiado — art. 8º, I",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.441/2003, art. 8º)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Na estrutura organizacional da Polícia Civil, o Conselho Superior de Polícia Civil figura como órgão colegiado, e a Corregedoria Geral integra os órgãos de direção superior.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "órgão colegiado",
    cognitivo: {
      motivo: "Cobrar o posicionamento dos dois órgãos de cúpula na tipologia do art. 8º.",
      palavraCritica: "direção superior",
    },
    comentario: {
      resolucao: "CERTO. O art. 8º organiza a instituição em categorias: o CONSUPOC é o único órgão colegiado (inciso I); a Corregedoria Geral aparece no inciso II, entre os órgãos de direção superior, ao lado do Gabinete da Diretoria Geral. Os órgãos de apoio administrativo e os de execução vêm nos incisos seguintes.",
      fundamento: "Lei estadual nº 6.441/2003, art. 8º, incisos I e II.",
      macete: "Colegiado é só o CONSUPOC. Corregedoria é direção superior, não órgão de execução.",
      erroComum: "Classificar a Corregedoria como órgão de apoio administrativo ou de execução.",
      comoBancaPensa: "Tipologia com quatro categorias — terreno fértil para trocar um órgão de gaveta."
    }
  },

  {
    ...BASE83,
    id: "LI-151", subassunto: "Alterações da Lei 6.479/2004 — art. 24",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.479/2004, art. 1º)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "A Lei estadual nº 6.479/2004 acrescentou à estrutura da Polícia Civil a Delegacia Especial de Defesa dos Direitos da Mulher e a Delegacia Especial da Criança e do Adolescente, além de substituir o Anexo Único de cargos e funções gratificadas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Anexo Único",
    cognitivo: {
      motivo: "Delimitar o que a lei alteradora de fato fez, contra a impressão de que teria reformado a estrutura.",
      palavraCritica: "acrescentou",
    },
    comentario: {
      resolucao: "CERTO. A Lei nº 6.479/2004 tem apenas dois artigos de conteúdo: o art. 1º acrescentou alíneas ao art. 24 da Lei 6.441/2003 — as duas delegacias especializadas citadas e dois distritos policiais, em Jequiá da Praia e Campestre — e o art. 2º substituiu o Anexo Único. É lei de retoque pontual, não de reforma.",
      fundamento: "Lei estadual nº 6.479/2004, arts. 1º e 2º, que alteram a Lei nº 6.441/2003, art. 24 e Anexo Único.",
      macete: "A 6.479/2004 mexeu em delegacias, distritos e anexo. Não tocou nos arts. 1º a 12.",
      erroComum: "Atribuir a ela a criação da estrutura ou a definição das competências institucionais.",
      comoBancaPensa: "Cobra o alcance real de uma lei alteradora — quem só decorou o número não sabe o conteúdo."
    }
  },

  {
    ...BASE83,
    id: "LI-152", subassunto: "Conflito de nomenclatura — norma mais recente",
    origem: "Inédita — estilo CEBRASPE (Lei 6.441/2003 x Lei 8.782/2022 e Lei 14.735/2023)",
    dificuldade: 3, tempoIdealSeg: 85,
    enunciado: "Embora a Lei estadual nº 6.441/2003 se refira ao dirigente máximo da Polícia Civil como Diretor-Geral, normas posteriores passaram a designá-lo Delegado-Geral, devendo prevalecer a denominação mais recente.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "prevalecer a denominação mais recente",
    cognitivo: {
      motivo: "Cobrar a solução do conflito entre normas sucessivas, tema que a banca explora quando há lei nova sobre carreira policial.",
      palavraCritica: "posteriores",
    },
    comentario: {
      resolucao: "CERTO. A Lei estadual nº 8.782/2022 e a Lei Orgânica Nacional das Polícias Civis (Lei federal nº 14.735/2023) empregam 'Delegado-Geral'. Entre normas incompatíveis, a posterior revoga tacitamente a anterior no ponto conflitante — e aqui o argumento é reforçado, porque a LONPC é lei federal de caráter nacional, editada para uniformizar a organização das polícias civis. A nomenclatura de 2003 está superada nesse aspecto.",
      fundamento: "LINDB, art. 2º, § 1º; Lei estadual nº 6.441/2003, art. 2º; Lei estadual nº 8.782/2022; Lei nº 14.735/2023.",
      macete: "Conflito entre normas: vale a mais nova. Se ainda for federal e nacional, com mais razão.",
      erroComum: "Sustentar a nomenclatura antiga por ela constar da lei específica de estrutura da PC-AL.",
      comoBancaPensa: "Cobra o critério cronológico aplicado a um detalhe concreto, e não em abstrato."
    }
  },

  {
    ...BASE83,
    id: "LI-153", subassunto: "Símbolos e uso de distintivos — art. 4º",
    origem: "Inédita — estilo CEBRASPE (Lei estadual 6.441/2003, art. 4º)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "São símbolos oficiais da Polícia Civil o Hino, a Bandeira, o Brasão e o uniforme operacional, todos destinados à sua identificação, conforme modelo aprovado por decreto do Poder Executivo.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "o uniforme operacional",
    cognitivo: {
      motivo: "Acrescentar um quarto símbolo a um rol que o art. 4º fecha em três.",
      palavraCritica: "uniforme operacional",
    },
    comentario: {
      resolucao: "ERRADO. O art. 4º lista TRÊS símbolos oficiais — Hino, Bandeira e Brasão —, aprovados por decreto do Poder Executivo. O uniforme não está entre eles. O que o parágrafo único trata é de outra coisa: estojos para carteiras, jaquetas e distintivos, confeccionados exclusivamente a pedido da instituição, com uso e porte privativos dos servidores da carreira policial.",
      fundamento: "Lei estadual nº 6.441/2003, art. 4º, caput e parágrafo único.",
      macete: "Três símbolos: Hino, Bandeira e Brasão. Jaqueta e distintivo são outra regra, a do parágrafo único.",
      erroComum: "Incluir o uniforme por ser o elemento de identificação mais visível na prática.",
      comoBancaPensa: "Rol curto e fechado — acrescentar um item plausível é a forma mais barata de errar o enunciado."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE83);
