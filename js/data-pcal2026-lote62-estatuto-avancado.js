/* =====================================================================
   QUESTLAB — Lote 62: ESTATUTO DA PC-AL — NÍVEL AVANÇADO (Lei 3.437/1975)

   Expansão de Legislação Institucional (AL) pedida com dificuldade elevada.
   As 35 questões que a disciplina já tinha sobre o Estatuto cobrem os arts.
   15, 17, 21, 36, 38, 40, 42, 55, 67, 70, 85, 91 a 96, 101 a 125. Este lote
   ataca deliberadamente o que ficou de fora, sem repetir nenhum desses
   recortes — checado item a item contra o banco antes de escrever.

   PROCEDÊNCIA. Texto oficial da Lei 3.437/1975 baixado do portal da
   Assembleia Legislativa de Alagoas, na versão consolidada que traz as
   alterações das Leis 5.217/1991, 5.813/1996, 6.441/2003, 6.592/2005 e
   7.959/2017 — com as redações revogadas transcritas ao lado das vigentes.
   Essa consolidação é o que torna o lote possível: sem ela não daria para
   distinguir o que vale hoje do que a maioria do material de estudo ainda
   ensina.

   DUAS LEIS DE 2022 QUE **NÃO** ALTERARAM O ESTATUTO — leia antes de
   escrever qualquer item novo aqui. Circula em material de cursinho a
   ideia de que a Lei 8.641/2022 e a Lei 8.782/2022 seriam "atualizações
   do Estatuto". Os dois textos foram conferidos na íntegra no SAPL da
   Assembleia Legislativa de Alagoas, e não são:

     Lei 8.641/2022 (28/03/2022) — lei AUTÔNOMA, de 6 artigos. Reestrutura
       só a carreira de DELEGADO: 4 Classes (DPC-1 a DPC-4), ingresso na
       4ª Classe, subsídio do art. 144, § 9º, da CF, 40 h semanais.
       Converte as antigas Categorias em Classes com INVERSÃO de
       simbologia (1ª Categoria/DC-3 → 1ª Classe/DPC-1). Não cita nenhum
       artigo da Lei 3.437/1975; traz apenas a cláusula genérica
       "revogam-se as disposições em contrário". Não toca em Inspetor,
       Agente ou Escrivão, e NÃO revoga o art. 15 — por isso LI-053,
       LI-117 e LI-118 seguem válidos.

     Lei 8.782/2022 (20/12/2022) — cria o Núcleo de Qualidade de Vida,
       Saúde e Segurança no Trabalho (NQVSST), subordinado ao
       Delegado-Geral. O dispositivo que ela altera é o art. 37 da LEI
       DELEGADA Nº 47/2015, não o Estatuto.

   Consequência prática, dupla: (a) um item que diga "o Estatuto, com a
   redação da Lei 8.641/2022..." é falso, porque essa lei não alterou o
   Estatuto; (b) nenhuma das duas consta da lista de diplomas do edital,
   e como não alteram a Lei 3.437/1975 também não entram pela cláusula
   "e suas alterações". Escrever itens sobre elas seria cobrar matéria
   fora do edital. Se um dia entrarem, o gancho correto é a carreira de
   Delegado — que não é o cargo desta trilha (Agente e Escrivão).

   O EIXO DE DIFICULDADE É EXATAMENTE ESSE. O art. 4º foi reescrito três
   vezes. A redação original e as de 2003 e 2005 impunham tempo integral e
   dedicação exclusiva; a vigente, dada pela Lei 7.959/2017, autoriza o
   membro da Polícia Judiciária a exercer cumulativamente o magistério
   havendo compatibilidade de horários. Quem estudou por apostila antiga
   responde pelo texto revogado — e é isso que a banca cobra. Quatro itens
   do lote giram em torno desse conflito de versões.

   Os demais eixos de dificuldade: numerais que só aparecem uma vez na lei
   (240 horas mensais do art. 78, §2º; 48 horas do art. 96, §2º, I; 15 dias
   do art. 115), vedações absolutas que a banca relativiza (art. 40, §2º —
   cabo da PM não pode "em hipótese alguma") e requisitos de escolaridade
   que não seguem intuição (Motorista Policial exige 4ª série; Perito
   Criminal exige curso de DIREITO além do de perícia).

   Equilíbrio 20 CERTO / 20 ERRADO.
   ===================================================================== */

const QUESTOES_PCAL_LOTE62 = [
  /* ---------- Disposições preliminares (arts. 1º a 8º) ---------- */
  {
    id: "LI-080", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Composição do regime jurídico (art. 1º, p.u.)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.86,
    enunciado: "O regime jurídico dos funcionários civis da Polícia Civil de Alagoas compõe-se exclusivamente das normas especiais do respectivo Estatuto, afastada a incidência das normas gerais do Estatuto dos Funcionários Públicos Civis do Estado.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "exclusivamente ... afastada a incidência das normas gerais",
    cognitivo: {
      motivo: "Cobrar a composição dupla do regime jurídico policial, base de toda a aplicação subsidiária.",
      palavraCritica: "exclusivamente",
    },
    comentario: {
      resolucao: "ERRADO. O parágrafo único do art. 1º diz o oposto: o regime jurídico compõe-se das normas especiais desta Lei E das normas gerais constantes do Estatuto dos Funcionários Públicos Civis do Estado e legislação subsequente. É norma de abertura, não de fechamento. E ela tem efeito prático em cascata — o art. 116 manda o inquérito e a sindicância seguirem o rito dos similares administrativos comuns, e o art. 127 remete a revisão às normas do Estatuto geral. Item que isole o Estatuto policial rompe essa arquitetura.",
      fundamento: "Lei estadual 3.437/1975, art. 1º, parágrafo único; arts. 116 e 127.",
      macete: "O Estatuto policial é especial, não é autossuficiente — o geral entra sempre que ele silencia.",
      erroComum: "Ler 'estatuto próprio' como sinônimo de regime isolado.",
      comoBancaPensa: "Fecha um sistema que a própria lei abriu, e o candidato aceita por soar coerente com 'lei especial'."
    }
  },
  {
    id: "LI-081", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Comissionados como policiais civis (art. 2º, p.u.)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.8,
    enunciado: "Os ocupantes de cargos em comissão e funções gratificadas com atribuições e responsabilidade de natureza policial são considerados policiais civis desde que assim declarados por decreto do chefe do Poder Executivo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "declarados por decreto do chefe do Poder Executivo",
    cognitivo: {
      motivo: "Fixar a condição formal que estende a qualidade de policial civil a comissionados.",
      palavraCritica: "por decreto",
    },
    comentario: {
      resolucao: "CERTO. É o parágrafo único do art. 2º da Lei 3.437/1975. A extensão não é automática pela natureza das atribuições: exige ato formal, e ato de espécie determinada — DECRETO do chefe do Executivo. Item que troque o instrumento por portaria do Secretário de Segurança, ou que dispense o ato afirmando bastar o exercício de atribuição policial, estaria errado. O caput, por contraste, define os policiais civis pela ocupação dos cargos dos Anexos I e II.",
      fundamento: "Lei estadual 3.437/1975, art. 2º, caput e parágrafo único.",
      macete: "Comissionado vira policial civil por DECRETO, não pela função que exerce.",
      erroComum: "Supor equiparação automática pela natureza policial das atribuições.",
      comoBancaPensa: "Cobra a espécie do ato normativo, detalhe que quase ninguém memoriza."
    }
  },
  {
    id: "LI-082", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Vedação de serviços gratuitos (art. 3º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.78,
    enunciado: "É admitida a prestação de serviços gratuitos à Polícia Civil de Alagoas por prazo não superior a trinta dias, hipótese em que o período será computado como de efetivo exercício.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "por prazo não superior a trinta dias",
    cognitivo: {
      motivo: "Cobrar a vedação seca do art. 3º, que não comporta prazo nem exceção.",
      palavraCritica: "trinta dias",
    },
    comentario: {
      resolucao: "ERRADO. O art. 3º é lapidar: 'É vedada a prestação de serviços gratuitos.' Não há prazo, tolerância nem contrapartida — o item inventa os trinta dias e a contagem como efetivo exercício. O parágrafo único trata de outra coisa e é a única concessão existente: o tempo de serviço gratuito só é computável se ANTERIOR ao Estatuto dos Funcionários Públicos Civis do Estado, a Lei 1.806, de 18 de setembro de 1954. Ou seja, é regra de direito intertemporal para situação pretérita, não autorização para o presente.",
      fundamento: "Lei estadual 3.437/1975, art. 3º, caput e parágrafo único; Lei estadual 1.806/1954.",
      macete: "Serviço gratuito é vedado, ponto. O p.u. só salva o que é anterior a 1954.",
      erroComum: "Ler o parágrafo único como permissão, quando ele é regra de transição.",
      comoBancaPensa: "Converte uma ressalva histórica em autorização atual e acrescenta um prazo verossímil."
    }
  },
  {
    id: "LI-083", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Magistério cumulativo — redação vigente (art. 4º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (conflito de redações)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.92,
    enunciado: "Conforme a redação atualmente em vigor do Estatuto da Polícia Civil de Alagoas, o membro da Polícia Judiciária poderá, havendo compatibilidade de horários, exercer cumulativamente atividade de magistério.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "redação atualmente em vigor ... compatibilidade de horários",
    cognitivo: {
      motivo: "Cobrar a redação vigente do art. 4º contra as três revogadas que o material antigo reproduz.",
      palavraCritica: "atualmente em vigor",
    },
    comentario: {
      resolucao: "CERTO. É a redação dada pela Lei estadual 7.959, de 26/12/2017. O art. 4º foi reescrito três vezes e as versões anteriores diziam coisa bem diferente: a original e a da Lei 6.441/2003 impunham 'regime de tempo integral ao serviço policial', e a da Lei 6.592/2005 acrescentou 'e dedicação exclusiva', nas modalidades Operacional e Especializada. Quem estuda por apostila desatualizada marca ERRADO com convicção. O parágrafo único vigente define atividade técnica como a de nível médio ou superior sujeita a habilitação em curso oficial ou reconhecido — conceito que o art. 85 usa para autorizar a única acumulação possível.",
      fundamento: "Lei estadual 3.437/1975, art. 4º, com redação da Lei estadual 7.959/2017; art. 85.",
      macete: "Art. 4º hoje PERMITE magistério compatível. 'Dedicação exclusiva' é texto revogado desde 2017.",
      erroComum: "Responder pela redação de 2005, que ainda circula na maior parte do material.",
      comoBancaPensa: "Alteração legislativa em dispositivo clássico — janela preferida da banca."
    }
  },
  {
    id: "LI-084", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Dedicação exclusiva — redação revogada (art. 4º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (conflito de redações)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.88,
    enunciado: "O Estatuto da Polícia Civil de Alagoas submete o policial civil, em sua redação vigente, ao regime de tempo integral e dedicação exclusiva ao serviço policial, nas modalidades Operacional e Especializada.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "em sua redação vigente ... dedicação exclusiva",
    cognitivo: {
      motivo: "Punir a resposta pela redação revogada, que é o erro mais provável da disciplina.",
      palavraCritica: "redação vigente",
    },
    comentario: {
      resolucao: "ERRADO. A descrição corresponde à redação dada pela Lei 6.592/2005, revogada. O texto vigente do art. 4º, desde a Lei 7.959/2017, não fala em tempo integral nem em dedicação exclusiva: autoriza o exercício cumulativo do magistério havendo compatibilidade de horários. As modalidades Operacional e Especializada, com o limite de 200 vagas na Especializada, também vinham daquela redação de 2005 e não constam do texto atual. Item verdadeiro em 2016 e falso hoje — a data é o gabarito.",
      fundamento: "Lei estadual 3.437/1975, art. 4º, com redação da Lei estadual 7.959/2017 (redação anterior: Lei estadual 6.592/2005).",
      macete: "Modalidades Operacional/Especializada e as 200 vagas são texto revogado.",
      erroComum: "Reconhecer a formulação de tanto material de estudo e validar sem conferir a vigência.",
      comoBancaPensa: "Transcreve fielmente a redação REVOGADA e rotula como vigente."
    }
  },
  {
    id: "LI-085", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Subordinação da Polícia Civil (art. 6º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.74,
    enunciado: "A Polícia Civil do Estado de Alagoas é subordinada diretamente, para todos os efeitos, à Secretaria de Segurança Pública.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "para todos os efeitos",
    cognitivo: {
      motivo: "Fixar a vinculação administrativa da corporação, distinta da direção da carreira.",
      palavraCritica: "diretamente, para todos os efeitos",
    },
    comentario: {
      resolucao: "CERTO. Transcrição do art. 6º da Lei 3.437/1975. Não confundir duas coisas que a banca embaralha: a subordinação ADMINISTRATIVA da corporação à SSP, deste artigo, e a DIREÇÃO da instituição, que a Constituição Federal, no art. 144, § 4º, reserva a delegado de polícia de carreira. Uma trata de estrutura de governo, a outra de quem dirige a polícia judiciária. Também não confundir com o art. 8º, que lista as autoridades policiais civis começando pelo Secretário de Segurança Pública.",
      fundamento: "Lei estadual 3.437/1975, arts. 6º e 8º; CF/88, art. 144, § 4º.",
      macete: "Subordinação à SSP ≠ direção por delegado de carreira. São planos diferentes.",
      erroComum: "Negar por lembrar da regra constitucional de direção por delegado.",
      comoBancaPensa: "Aproveita a proximidade entre subordinação administrativa e direção institucional."
    }
  },
  {
    id: "LI-086", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Competência da Polícia Civil (art. 7º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.7,
    enunciado: "Compete à Polícia Civil manter e assegurar a ordem pública, garantir os direitos individuais e coletivos, a execução das leis e o exercício dos poderes constituídos, sem qualquer limitação de esfera de atribuições.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "sem qualquer limitação de esfera de atribuições",
    cognitivo: {
      motivo: "Cobrar a cláusula final do art. 7º, que delimita a competência.",
      palavraCritica: "sem qualquer limitação",
    },
    comentario: {
      resolucao: "ERRADO. O art. 7º encerra com 'na esfera de suas atribuições' — o item suprime a delimitação e a substitui pelo seu oposto. A ressalva não é decorativa: a Polícia Civil é polícia judiciária e de apuração de infrações penais, ressalvada a competência da União e a apuração de infrações militares, conforme o art. 144, § 4º, da Constituição. Toda a primeira parte do item está correta, o que torna a supressão final fácil de não perceber.",
      fundamento: "Lei estadual 3.437/1975, art. 7º; CF/88, art. 144, § 4º.",
      macete: "A competência existe 'na esfera de suas atribuições' — nunca é ilimitada.",
      erroComum: "Validar por reconhecer a primeira metade, que é transcrição exata.",
      comoBancaPensa: "Transcreve o artigo e troca só a cláusula de fechamento."
    }
  },

  /* ---------- Cargos e requisitos (arts. 15 a 30) ---------- */
  {
    id: "LI-087", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Escolaridade do Motorista Policial (art. 20)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.66,
    enunciado: "Para o provimento do cargo de Motorista Policial, o Estatuto exige a conclusão do ensino de 1º grau ou equivalente.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "conclusão do ensino de 1º grau",
    cognitivo: {
      motivo: "Cobrar o único requisito de escolaridade abaixo do 1º grau completo em todo o Estatuto.",
      palavraCritica: "conclusão do ensino de 1º grau",
    },
    comentario: {
      resolucao: "ERRADO. O parágrafo único do art. 20 exige a conclusão da 4ª SÉRIE do ensino de 1º grau, ou curso primário, ou equivalente — não o 1º grau completo. É o requisito mais baixo da lei e por isso o mais trocado. Vale montar a escada inteira: Motorista, 4ª série; Escrivão Auxiliar e Agente Auxiliar, 1º grau; Escrivão de Polícia e Agente de Polícia, 2º grau; Inspetor, curso de Direito; Perito Criminal, curso de Direito mais curso de perícia criminal.",
      fundamento: "Lei estadual 3.437/1975, art. 20, parágrafo único; arts. 16 a 19 e 21.",
      macete: "Motorista Policial: 4ª série. É o piso do Estatuto.",
      erroComum: "Nivelar o Motorista aos demais cargos de nível auxiliar.",
      comoBancaPensa: "Eleva discretamente o requisito para o patamar imediatamente acima."
    }
  },
  {
    id: "LI-088", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Atribuições do Agente Auxiliar (art. 19)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.75,
    enunciado: "Incluem-se entre as atribuições básicas do Agente Auxiliar de Polícia executar intimações e notificações a indiciados, vítimas e testemunhas, proceder à busca de informações e executar a segurança de autoridades.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "executar a segurança de autoridades",
    cognitivo: {
      motivo: "Fixar a amplitude das atribuições do cargo de menor escolaridade investigativa.",
      palavraCritica: "segurança de autoridades",
    },
    comentario: {
      resolucao: "CERTO. Todas constam do art. 19 da Lei 3.437/1975, inclusive a segurança de autoridades, que costuma surpreender por parecer atribuição de outro cargo. A distinção com o art. 18 é de comando, não de natureza: ao Agente de Polícia cabe DIRIGIR equipes e INSTRUIR os policiais sob sua chefia, executando, quando necessário, todas as tarefas do agente auxiliar. Ou seja, o superior acumula as do subordinado, e não o contrário.",
      fundamento: "Lei estadual 3.437/1975, arts. 18 e 19.",
      macete: "Agente de Polícia dirige e pode fazer tudo do auxiliar; o auxiliar executa.",
      erroComum: "Excluir a segurança de autoridades do rol do agente auxiliar.",
      comoBancaPensa: "Escolhe a atribuição menos associada ao cargo dentro de um rol correto."
    }
  },
  {
    id: "LI-089", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Atribuições do Escrivão de Polícia (art. 16)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.72,
    enunciado: "Ao Escrivão de Polícia compete supervisionar e fiscalizar os trabalhos de cartório e autuar os inquéritos iniciados, sendo-lhe vedado, por incompatibilidade hierárquica, executar as atribuições próprias do escrivão auxiliar.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "sendo-lhe vedado ... executar as atribuições próprias do escrivão auxiliar",
    cognitivo: {
      motivo: "Cobrar a cláusula de acumulação descendente, presente no rol e negada pelo item.",
      palavraCritica: "vedado",
    },
    comentario: {
      resolucao: "ERRADO. O art. 16 encerra justamente com o contrário: cabe ao Escrivão de Polícia 'executar, quando necessário e em quaisquer circunstâncias, as atribuições do escrivão auxiliar de polícia'. A mesma lógica está no art. 18 para o Agente de Polícia. O Estatuto organiza os pares por acumulação descendente — o superior faz o do subordinado quando o serviço exigir —, e a vedação que o item inventa quebraria a continuidade do trabalho de cartório.",
      fundamento: "Lei estadual 3.437/1975, arts. 16 e 18.",
      macete: "Superior pode fazer o do subordinado 'em quaisquer circunstâncias'. Não há vedação.",
      erroComum: "Deduzir de hierarquia uma proibição de exercer atribuição inferior.",
      comoBancaPensa: "Inverte a cláusula final e apoia a inversão num princípio plausível."
    }
  },
  {
    id: "LI-090", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Atribuições do Desenhista Policial (art. 30)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.6,
    enunciado: "Compete basicamente ao Desenhista Policial proceder ao levantamento de croquis de locais de infração penal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "levantamento de croquis",
    cognitivo: {
      motivo: "Fixar um cargo pouco estudado do quadro, que a banca usa como item de desempate.",
      palavraCritica: "croquis",
    },
    comentario: {
      resolucao: "CERTO. É o art. 30 da Lei 3.437/1975. O quadro da PC-AL tem cargos de apoio técnico que quase nunca são estudados — Desenhista Policial, Motorista Policial, Perito Policial de Local, Dactiloscopista — e é exatamente neles que a banca busca o item que separa quem leu a lei de quem leu resumo. Vale ler os arts. 15 a 35 inteiros pelo menos uma vez, ainda que sem memorizar.",
      fundamento: "Lei estadual 3.437/1975, art. 30.",
      macete: "Os cargos de apoio técnico existem e caem — leia os arts. 15 a 35.",
      erroComum: "Negar por não reconhecer o cargo, supondo que a banca o inventou.",
      comoBancaPensa: "Escolhe o cargo menos estudado do quadro para cobrar literalidade simples."
    }
  },

  /* ---------- Provimento de cargos de direção (art. 40) ---------- */
  {
    id: "LI-091", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Cabo da PM e cargo de Delegado (art. 40, § 2º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.79,
    enunciado: "O policial militar na graduação de cabo não poderá, em hipótese alguma, ser nomeado para exercer o cargo de delegado de polícia nem designado para responder pelo expediente do respectivo órgão.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "em hipótese alguma",
    cognitivo: {
      motivo: "Contraexemplo: aqui o termo absoluto está no texto legal e o item é CERTO.",
      palavraCritica: "em hipótese alguma",
    },
    comentario: {
      resolucao: "CERTO — e a expressão absoluta é da própria lei, não do examinador. O § 2º do art. 40 usa literalmente 'não poderá, em hipótese alguma'. Quem responde por reflexo, marcando ERRADO diante de todo termo absoluto, cai aqui. Repare no contraste interno do artigo: o § 1º ADMITE que os cargos de Delegado Regional e Especializado sejam exercidos por oficiais superiores da PM ou capitães portadores do CAO, no interesse do serviço; o § 2º fecha a porta para a graduação de cabo. O mesmo artigo abre e fecha, e é preciso saber para quem.",
      fundamento: "Lei estadual 3.437/1975, art. 40, §§ 1º e 2º.",
      macete: "Oficial superior e capitão com CAO: pode. Cabo: em hipótese alguma.",
      erroComum: "Marcar ERRADO automaticamente ao ver 'em hipótese alguma'.",
      comoBancaPensa: "Usa o termo absoluto verdadeiro para punir o automatismo que ela mesma criou."
    }
  },
  {
    id: "LI-092", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Requisito para cargos de direção (art. 40, caput)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "Para os cargos de Corregedor Geral de Polícia, Chefe de Gabinete da SSP, diretores de departamentos e delegados distritais, especializados e regionais, o Estatuto exige a nomeação de bacharéis em Direito com comprovada vivência policial.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "com comprovada vivência policial",
    cognitivo: {
      motivo: "Separar o requisito obrigatório da recomendação do caput do art. 40.",
      palavraCritica: "comprovada",
    },
    comentario: {
      resolucao: "ERRADO. O art. 40 exige bacharelado em Direito e acrescenta 'e, SEMPRE QUE POSSÍVEL, com vivência policial'. A vivência é recomendação, não requisito — transformá-la em exigência comprovada altera o regime de provimento. É a distinção entre norma cogente e norma programática dentro do mesmo dispositivo, e o marcador é a locução 'sempre que possível'. Item que a suprima ou a converta em condição está errado.",
      fundamento: "Lei estadual 3.437/1975, art. 40, caput.",
      macete: "Bacharel em Direito: obrigatório. Vivência policial: 'sempre que possível'.",
      erroComum: "Ler a recomendação como requisito por soar razoável exigi-la.",
      comoBancaPensa: "Endurece uma cláusula facultativa, mantendo intacto o resto do rol."
    }
  },

  /* ---------- Remoção (arts. 64 a 66) ---------- */
  {
    id: "LI-093", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Remoção por conveniência da disciplina (art. 65)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.82,
    enunciado: "A remoção por conveniência da disciplina deverá ser expressamente justificada pelo chefe do serviço em que estiver lotado o funcionário e acarretará a perda dos direitos e vantagens atribuídos às demais modalidades de remoção, inclusive da gratificação de função policial.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "inclusive da gratificação de função policial",
    cognitivo: {
      motivo: "Fixar o efeito patrimonial da remoção disciplinar, que o parágrafo único agrava.",
      palavraCritica: "inclusive",
    },
    comentario: {
      resolucao: "CERTO. O caput do art. 65 exige justificativa expressa do chefe do serviço e retira os direitos e vantagens das outras modalidades; o parágrafo único vai além e alcança também a gratificação de função policial. São dois efeitos e o item traz os dois. Vale guardar o contraste com o art. 66: a remoção depende, em qualquer caso, de existência de claro na lotação — salvo justamente a por conveniência da disciplina, prevista no art. 64, III. A modalidade disciplinar é a mais gravosa para o servidor e a mais livre para a Administração.",
      fundamento: "Lei estadual 3.437/1975, arts. 64, III, 65, caput e parágrafo único, e 66.",
      macete: "Remoção disciplinar: perde vantagens, perde a gratificação e dispensa claro na lotação.",
      erroComum: "Supor que a perda se limita às vantagens de deslocamento.",
      comoBancaPensa: "Reúne caput e parágrafo num único item longo, onde omitir um dos efeitos passaria batido."
    }
  },
  {
    id: "LI-094", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Claro na lotação (art. 66)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.7,
    enunciado: "A remoção do funcionário policial dependerá, em qualquer hipótese, da existência de claro na lotação de destino.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "em qualquer hipótese",
    cognitivo: {
      motivo: "Cobrar a exceção do art. 66, que ressalva a remoção disciplinar.",
      palavraCritica: "em qualquer hipótese",
    },
    comentario: {
      resolucao: "ERRADO. O art. 66 condiciona a remoção à existência de claro na lotação, 'salvo a prevista no art. 64, inciso III' — que é exatamente a remoção por conveniência da disciplina. A exceção tem lógica: se a remoção disciplinar dependesse de vaga, a Administração ficaria impedida de afastar de imediato o servidor cuja permanência compromete o serviço. Note a assimetria útil para prova: a modalidade mais gravosa é também a menos condicionada.",
      fundamento: "Lei estadual 3.437/1975, arts. 64, III, e 66.",
      macete: "Precisa de claro na lotação, exceto na remoção por conveniência da disciplina.",
      erroComum: "Generalizar a exigência de vaga a todas as modalidades.",
      comoBancaPensa: "Suprime a única ressalva do artigo e reforça com termo absoluto."
    }
  },

  /* ---------- Gratificação de ação policial (art. 78) ---------- */
  {
    id: "LI-095", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Jornada da gratificação de ação policial (art. 78, § 2º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.84,
    enunciado: "A gratificação de ação policial sujeita o funcionário ao regime de dedicação integral e exclusiva e o obriga à prestação de, no mínimo, cento e oitenta horas mensais de trabalho.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "cento e oitenta horas mensais",
    cognitivo: {
      motivo: "Cobrar o numeral do art. 78, § 2º, que não tem paralelo em nenhum outro dispositivo.",
      palavraCritica: "cento e oitenta",
    },
    comentario: {
      resolucao: "ERRADO. O § 2º do art. 78 exige no mínimo DUZENTAS E QUARENTA horas mensais. Cento e oitenta é numeral que soa plausível por corresponder a uma jornada comum de quarenta horas semanais, e é justamente essa familiaridade que a banca explora. O regime é bem mais pesado: 240 horas por mês. O restante do item está correto — a gratificação sujeita mesmo à dedicação integral e exclusiva —, e é isso que sustenta o erro.",
      fundamento: "Lei estadual 3.437/1975, art. 78, § 2º.",
      macete: "Gratificação de ação policial: 240 horas mensais, não 180.",
      erroComum: "Aceitar 180 por corresponder à jornada semanal padrão convertida em mês.",
      comoBancaPensa: "Substitui o numeral incomum por outro que o candidato reconhece de outro contexto."
    }
  },
  {
    id: "LI-096", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Cumulação da gratificação de risco (art. 78, § 4º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.72,
    enunciado: "A gratificação de ação policial não poderá ser acumulada com qualquer outra gratificação referente a risco de vida.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "qualquer outra referente a risco de vida",
    cognitivo: {
      motivo: "Fixar a vedação de bis in idem remuneratório sobre o mesmo fato gerador.",
      palavraCritica: "risco de vida",
    },
    comentario: {
      resolucao: "CERTO. É o § 4º do art. 78. A lógica é a de que ninguém recebe duas vezes pelo mesmo fato gerador: se a gratificação já remunera o risco de vida, outra de mesma natureza seria pagamento em duplicidade. Note o recorte — a vedação alcança as gratificações 'referentes a risco de vida', não toda e qualquer gratificação. E o § 3º completa o desenho ao excluir o policial dos regimes de tempo complementar ou integral da legislação comum, deixando claro que se trata de regime específico.",
      fundamento: "Lei estadual 3.437/1975, art. 78, §§ 3º e 4º.",
      macete: "Não acumula com outra de RISCO DE VIDA — o recorte é o fato gerador.",
      erroComum: "Ampliar a vedação para qualquer gratificação, de qualquer natureza.",
      comoBancaPensa: "Cobra o recorte exato da vedação, que costuma ser lembrado de forma ampla demais."
    }
  },

  /* ---------- Acumulação (arts. 85 e 86) ---------- */
  {
    id: "LI-097", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Requisitos da acumulação excepcional (art. 85, § 1º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.85,
    enunciado: "A acumulação de cargo policial de natureza técnica ou científica com o de professor somente será permitida quando houver correlação de matérias e compatibilidade de horários.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "correlação de matérias e compatibilidade de horários",
    cognitivo: {
      motivo: "Fixar os dois requisitos cumulativos, sendo a correlação de matérias o esquecido.",
      palavraCritica: "correlação de matérias",
    },
    comentario: {
      resolucao: "CERTO. É o § 1º do art. 85 da Lei 3.437/1975, e são dois requisitos CUMULATIVOS. A compatibilidade de horários todo mundo lembra, porque é o requisito da Constituição Federal; a correlação de matérias é acréscimo da lei estadual e some da memória. Note ainda o § 2º, que estende a proibição de acumular a cargos, funções ou empregos em autarquia, empresa pública e sociedade de economia mista — alcance maior que o intuitivo.",
      fundamento: "Lei estadual 3.437/1975, art. 85, caput e §§ 1º e 2º; art. 4º, parágrafo único.",
      macete: "Dois requisitos: correlação de matérias E compatibilidade de horários.",
      erroComum: "Exigir apenas a compatibilidade de horários, como na regra constitucional geral.",
      comoBancaPensa: "Cobra o requisito estadual adicional, que não existe no paradigma federal."
    }
  },
  {
    id: "LI-098", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Alcance da proibição de acumular (art. 85, § 2º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.77,
    enunciado: "A proibição de acumular imposta ao policial civil restringe-se aos cargos e funções da administração direta, não alcançando empregos em autarquias, empresas públicas e sociedades de economia mista.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "não alcançando empregos em autarquias, empresas públicas",
    cognitivo: {
      motivo: "Cobrar a extensão do § 2º à administração indireta.",
      palavraCritica: "restringe-se",
    },
    comentario: {
      resolucao: "ERRADO. O § 2º do art. 85 é expresso: a proibição de acumular ESTENDE-SE a cargos, funções ou empregos em autarquia, empresas públicas e sociedades de economia mista. O item inverte, restringindo à administração direta. O argumento implícito — de que empregados de estatais são celetistas e estariam fora — é o mesmo que a banca usa em outros contextos e aqui não vale, porque a vedação mira o servidor policial, não o regime da outra ponta.",
      fundamento: "Lei estadual 3.437/1975, art. 85, § 2º; art. 86.",
      macete: "A vedação alcança a indireta inteira: autarquia, empresa pública e economia mista.",
      erroComum: "Excluir as estatais por serem de regime celetista.",
      comoBancaPensa: "Estreita um alcance expressamente amplo, apoiada numa distinção verdadeira mas irrelevante."
    }
  },

  /* ---------- Regime disciplinar avançado ---------- */
  {
    id: "LI-099", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Detenção disciplinar na residência (art. 96, § 2º, I)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.81,
    enunciado: "A detenção disciplinar será cumprida na residência do funcionário quando não exceder setenta e duas horas.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "setenta e duas horas",
    cognitivo: {
      motivo: "Cobrar o limite temporal que define o local de cumprimento da detenção.",
      palavraCritica: "setenta e duas",
    },
    comentario: {
      resolucao: "ERRADO. O inciso I do § 2º do art. 96 fixa QUARENTA E OITO horas. Acima disso, o cumprimento se dá em sala especial na sede da Secretaria de Segurança Pública ou em repartição policial designada pelo Secretário. Setenta e duas horas é prazo que circula em outros contextos e por isso soa natural. Guarde também que a detenção NÃO acarreta perda de vencimentos (§ 2º, caput) e que seu prazo não excede o limite da suspensão previsto no art. 94 (§ 1º).",
      fundamento: "Lei estadual 3.437/1975, art. 96, §§ 1º e 2º, I e II; art. 94.",
      macete: "Até 48h: em casa. Acima: sala especial na SSP ou repartição designada.",
      erroComum: "Trocar 48 por 72 horas, prazo comum em outros diplomas.",
      comoBancaPensa: "Altera o numeral que define a consequência prática do dispositivo."
    }
  },
  {
    id: "LI-100", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Autoridade competente para a detenção (art. 96, caput)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "A conversão da pena de suspensão em detenção disciplinar depende de ordem escrita do Secretário de Segurança Pública ou do Governador do Estado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ordem escrita do Secretário de Segurança Pública ou do Governador",
    cognitivo: {
      motivo: "Fixar que a conversão é competência restrita ao topo da estrutura.",
      palavraCritica: "por escrito",
    },
    comentario: {
      resolucao: "CERTO. É o caput do art. 96: a conversão depende de ordem baixada POR ESCRITO pelo Secretário de Segurança Pública ou pelo Governador do Estado. Dois elementos costumam ser adulterados e ambos estão certos aqui — a forma escrita e o rol fechado de autoridades. A competência não desce para delegado, corregedor ou diretor de departamento. Os critérios da conversão também estão no caput: natureza da transgressão, circunstâncias em que foi praticada e repercussão.",
      fundamento: "Lei estadual 3.437/1975, art. 96, caput.",
      macete: "Só Secretário de Segurança ou Governador, e sempre por escrito.",
      erroComum: "Estender a competência ao Delegado-Geral ou ao Corregedor.",
      comoBancaPensa: "Dispositivo com forma e competência definidas: dois alvos num item só."
    }
  },
  {
    id: "LI-101", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Limite do processo disciplinar prévio (art. 115)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.83,
    enunciado: "O processo disciplinar precederá à aplicação das penas de suspensão por mais de trinta dias, destituição de função, demissão e cassação de disponibilidade.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "suspensão por mais de trinta dias",
    cognitivo: {
      motivo: "Cobrar o divisor entre a suspensão que exige processo e a que dispensa.",
      palavraCritica: "trinta",
    },
    comentario: {
      resolucao: "ERRADO. O art. 115 fixa o divisor em QUINZE dias: o processo disciplinar precede a suspensão por mais de quinze dias, a destituição de função, a demissão e a cassação de disponibilidade. Trinta dias é numeral que aparece em regimes disciplinares de outros entes e por isso soa natural. O artigo ainda acrescenta uma finalidade que costuma ser esquecida: o processo destina-se também a apurar responsabilidade por danos causados à Fazenda Estadual em procedimento doloso ou culposo.",
      fundamento: "Lei estadual 3.437/1975, art. 115.",
      macete: "Mais de 15 dias de suspensão já exige processo disciplinar.",
      erroComum: "Importar o divisor de trinta dias de outros estatutos.",
      comoBancaPensa: "Dobra o prazo, mantendo o resto do rol perfeito."
    }
  },
  {
    id: "LI-102", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Competência para instaurar processo (art. 114)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.74,
    enunciado: "São competentes para instaurar o processo disciplinar o governador do estado, o secretário de segurança pública e as autoridades a que se refere o Estatuto entre as competentes para aplicar penas disciplinares.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "governador do estado, o secretário de segurança pública",
    cognitivo: {
      motivo: "Fixar o rol de instauração, que remete ao rol de aplicação de penas.",
      palavraCritica: "e as autoridades",
    },
    comentario: {
      resolucao: "CERTO. O art. 114 atribui a competência ao Governador, ao Secretário de Segurança Pública e às autoridades referidas no item III do art. 109, que é o dispositivo das competências para aplicar penalidades. A técnica de remissão interna é o que dificulta: para responder é preciso saber que o art. 109 existe e o que ele lista. Não confundir instauração com condução — quem promove o inquérito disciplinar é a Comissão de Disciplina do art. 118, composta de três membros designados pelo Secretário.",
      fundamento: "Lei estadual 3.437/1975, arts. 109, III, 114 e 118.",
      macete: "Instaurar: Governador, Secretário e as autoridades do art. 109, III. Conduzir: Comissão.",
      erroComum: "Confundir quem instaura com quem promove o inquérito.",
      comoBancaPensa: "Explora a remissão interna, que obriga a leitura cruzada de dois artigos."
    }
  },
  {
    id: "LI-103", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Rito do inquérito e da sindicância (art. 116)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.71,
    enunciado: "O inquérito e a sindicância disciplinares da Polícia Civil observam rito processual próprio, integralmente disciplinado no Estatuto da corporação, sem remissão ao regime dos demais funcionários civis do estado.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "rito processual próprio, integralmente disciplinado",
    cognitivo: {
      motivo: "Cobrar a remissão do art. 116 ao regime comum, coerente com o art. 1º, p.u.",
      palavraCritica: "sem remissão",
    },
    comentario: {
      resolucao: "ERRADO. O art. 116 determina justamente o contrário: o inquérito e a sindicância disciplinar terão o MESMO RITO PROCESSUAL dos seus similares administrativos inerentes aos funcionários civis do Estado. É aplicação concreta da abertura do art. 1º, parágrafo único, e se repete no art. 127, que remete a revisão às normas do Estatuto geral. Quem entende essa arquitetura acerta os três itens; quem trata o Estatuto policial como sistema fechado erra todos.",
      fundamento: "Lei estadual 3.437/1975, arts. 1º, parágrafo único, 116 e 127.",
      macete: "O rito é o comum dos servidores civis — o Estatuto policial remete, não substitui.",
      erroComum: "Presumir autonomia procedimental por se tratar de estatuto especial.",
      comoBancaPensa: "Fecha um sistema aberto, e o candidato aceita por coerência aparente."
    }
  },
  {
    id: "LI-104", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Composição da sindicância (art. 117)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.8,
    enunciado: "A sindicância será procedida por três funcionários policiais de categoria igual ou superior à do sindicado, designados mediante despacho da autoridade que determinar sua instauração.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "três funcionários policiais",
    cognitivo: {
      motivo: "Separar a composição da sindicância da composição da Comissão de Disciplina.",
      palavraCritica: "três",
    },
    comentario: {
      resolucao: "ERRADO. O art. 117 exige DOIS funcionários policiais para a sindicância. Três é o número da Comissão de Disciplina do art. 118, que promove o inquérito disciplinar — e é dali que a banca importa o numeral. A distinção completa vale a pena: sindicância, dois funcionários policiais de categoria igual ou superior, designados por despacho; inquérito, comissão de três membros, de preferência bacharéis em Direito, policiais ou não, designados pelo Secretário de Segurança Pública. E a sindicância só cabe quando as irregularidades não forem evidentes ou a autoria for incerta.",
      fundamento: "Lei estadual 3.437/1975, arts. 113, 117 e 118.",
      macete: "Sindicância: 2 policiais. Comissão de Disciplina: 3 membros.",
      erroComum: "Aplicar à sindicância o número de membros da Comissão de Disciplina.",
      comoBancaPensa: "Troca numerais entre dois órgãos descritos em artigos consecutivos."
    }
  },
  {
    id: "LI-105", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Cabimento da sindicância (art. 117)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "A sindicância será instaurada quando as irregularidades não se revelarem evidentes ou quando for incerta a sua autoria.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não se revelarem evidentes ou ... incerta a sua autoria",
    cognitivo: {
      motivo: "Fixar as duas hipóteses alternativas de cabimento da sindicância.",
      palavraCritica: "ou",
    },
    comentario: {
      resolucao: "CERTO. É o art. 117 da Lei 3.437/1975, e as hipóteses são ALTERNATIVAS — basta uma delas. A conjunção importa: item que exija a presença simultânea de irregularidade não evidente E autoria incerta restringe indevidamente o cabimento. A função do instituto explica a regra: a sindicância é procedimento preparatório, serve para esclarecer o que ainda não está claro. Havendo evidência e autoria certa, vai-se direto ao caminho do art. 115.",
      fundamento: "Lei estadual 3.437/1975, arts. 113 e 117.",
      macete: "Irregularidade não evidente OU autoria incerta — basta uma.",
      erroComum: "Ler as hipóteses como cumulativas.",
      comoBancaPensa: "Troca 'ou' por 'e' — a menor alteração possível, e a mais difícil de ver."
    }
  },
  {
    id: "LI-106", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Composição da Comissão de Disciplina (art. 118)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.82,
    enunciado: "A Comissão de Disciplina que promove o inquérito disciplinar deve ser composta obrigatoriamente por bacharéis em Direito integrantes do quadro da Polícia Civil.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "obrigatoriamente por bacharéis em Direito integrantes do quadro",
    cognitivo: {
      motivo: "Cobrar as duas cláusulas de flexibilidade do art. 118, ambas suprimidas pelo item.",
      palavraCritica: "obrigatoriamente",
    },
    comentario: {
      resolucao: "ERRADO — o item endurece dois pontos que a lei deixou abertos. O art. 118 diz 'de PREFERÊNCIA bacharéis em Direito' e acrescenta 'funcionários policiais OU NÃO'. Ou seja, nem o bacharelado é obrigatório, nem os membros precisam pertencer ao quadro da Polícia Civil. O que é obrigatório: três membros, categoria igual ou superior à do indiciado, designação pelo Secretário de Segurança Pública. O parágrafo único ainda admite mais de uma Comissão conforme a necessidade do serviço.",
      fundamento: "Lei estadual 3.437/1975, art. 118, caput e parágrafo único.",
      macete: "Bacharéis 'de preferência', policiais 'ou não' — só o número e a categoria são rígidos.",
      erroComum: "Converter preferência em requisito e fechar a comissão no quadro policial.",
      comoBancaPensa: "Transforma duas cláusulas flexíveis em exigências, num item de aparência técnica."
    }
  },
  {
    id: "LI-107", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Dosimetria e agravante (art. 92)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.73,
    enunciado: "Constitui causa agravante da falta disciplinar o fato de ter sido ela cometida com o concurso de três ou mais funcionários policiais.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "três ou mais funcionários policiais",
    cognitivo: {
      motivo: "Cobrar o limiar numérico da agravante do parágrafo único do art. 92.",
      palavraCritica: "três ou mais",
    },
    comentario: {
      resolucao: "ERRADO. O parágrafo único do art. 92 fixa o limiar em DOIS ou mais funcionários policiais. A diferença é relevante na prática: com 'três ou mais', a falta cometida em dupla escaparia da agravante, que é exatamente a hipótese mais comum em serviço policial. Os cinco critérios de dosimetria do caput, por sua vez, são natureza e gravidade da transgressão, danos ao serviço público, repercussão do fato, antecedentes do funcionário e reincidência.",
      fundamento: "Lei estadual 3.437/1975, art. 92, caput e parágrafo único.",
      macete: "Agravante a partir de DOIS policiais em concurso.",
      erroComum: "Elevar o limiar para três, por analogia com concurso de pessoas em outros contextos.",
      comoBancaPensa: "Aumenta o numeral em uma unidade, o suficiente para excluir o caso mais frequente."
    }
  },
  {
    id: "LI-108", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Limites da revisão disciplinar (art. 126)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.79,
    enunciado: "A simples alegação de injustiça da penalidade não constitui fundamento para a revisão do processo disciplinar.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "simples alegação de injustiça",
    cognitivo: {
      motivo: "Fixar o que NÃO fundamenta revisão, complemento indispensável do art. 125.",
      palavraCritica: "simples alegação",
    },
    comentario: {
      resolucao: "CERTO. É o art. 126, que funciona como filtro do art. 125. Este permite a revisão a qualquer tempo quando se aduzam fatos ou circunstâncias suscetíveis de justificar a inocência; aquele exclui três hipóteses: a simples alegação de injustiça da penalidade, a arguição de nulidade não suscitada no processo e a que, tendo sido invocada, não foi considerada procedente. A lógica é que revisão não é recurso — exige fato ou circunstância NOVA, não reexame do mérito já decidido.",
      fundamento: "Lei estadual 3.437/1975, arts. 125 e 126.",
      macete: "Revisão precisa de fato novo. Achar injusto não é fato novo.",
      erroComum: "Tratar a revisão como nova instância recursal de mérito.",
      comoBancaPensa: "Cobra o dispositivo restritivo, sempre menos estudado que o permissivo."
    }
  },
  {
    id: "LI-109", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Legitimidade para requerer revisão (art. 125, p.u.)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.7,
    enunciado: "Falecido ou desaparecido o funcionário policial, a revisão do processo disciplinar poderá ser requerida por qualquer das pessoas constantes do seu assentamento individual.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "constantes do seu assentamento individual",
    cognitivo: {
      motivo: "Fixar o critério de legitimidade póstuma, que não é o rol civil de herdeiros.",
      palavraCritica: "assentamento individual",
    },
    comentario: {
      resolucao: "CERTO. É o parágrafo único do art. 125. O critério de legitimidade é documental e específico: as pessoas constantes do ASSENTAMENTO INDIVIDUAL do servidor — não os herdeiros na ordem da vocação hereditária, nem o cônjuge por presunção. A hipótese alcança tanto o falecido quanto o desaparecido, e conversa com a regra do caput de que a revisão pode ser pedida a qualquer tempo: interesse na reabilitação da memória funcional não prescreve.",
      fundamento: "Lei estadual 3.437/1975, art. 125, caput e parágrafo único.",
      macete: "Legitimidade póstuma sai do assentamento individual, não do direito das sucessões.",
      erroComum: "Aplicar a ordem de vocação hereditária do Código Civil.",
      comoBancaPensa: "Substitui um critério documental específico por outro genérico e plausível."
    }
  },

  /* ---------- Interação com o Estatuto dos Servidores (Lei 5.247/1991) ---------- */
  {
    id: "LI-110", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Aplicação subsidiária do RJU estadual",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (integração normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.84,
    enunciado: "Diante de omissão do Estatuto da Polícia Civil de Alagoas quanto à revisão do processo disciplinar, aplicam-se as normas previstas no Estatuto dos Funcionários Públicos Civis do Estado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "aplicam-se as normas previstas no Estatuto dos Funcionários",
    cognitivo: {
      motivo: "Cobrar a cláusula de remissão expressa do art. 127, fechando o eixo da subsidiariedade.",
      palavraCritica: "omissão",
    },
    comentario: {
      resolucao: "CERTO. O art. 127 é literal: 'No mais, aplicam-se à revisão as normas previstas no Estatuto dos Funcionários Públicos Civis do Estado.' É o terceiro ponto em que a Lei 3.437/1975 remete ao regime geral, ao lado do art. 1º, parágrafo único, e do art. 116. Para o candidato isso significa que o Regime Jurídico Único estadual, hoje a Lei 5.247/1991, não é matéria paralela: é parte do regime aplicável ao policial civil sempre que o Estatuto especial silenciar.",
      fundamento: "Lei estadual 3.437/1975, arts. 1º, parágrafo único, 116 e 127; Lei estadual 5.247/1991.",
      macete: "Três remissões ao regime geral: arts. 1º p.u., 116 e 127.",
      erroComum: "Estudar os dois estatutos como compartimentos estanques.",
      comoBancaPensa: "Cobra a integração entre os diplomas, que separa quem leu a lei de quem decorou tópicos."
    }
  },
  {
    id: "LI-111", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Hierarquia entre norma especial e geral",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (integração normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.8,
    enunciado: "Havendo conflito entre disposição expressa do Estatuto da Polícia Civil de Alagoas e norma do Regime Jurídico Único dos servidores estaduais sobre a mesma matéria, prevalece a norma do Regime Jurídico Único, por ser diploma posterior.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "prevalece a norma do Regime Jurídico Único, por ser diploma posterior",
    cognitivo: {
      motivo: "Cobrar que a subsidiariedade não inverte a relação entre especial e geral.",
      palavraCritica: "por ser diploma posterior",
    },
    comentario: {
      resolucao: "ERRADO. A cronologia não resolve o conflito aqui, porque os diplomas não estão no mesmo plano de especialidade. O art. 1º, parágrafo único, do Estatuto compõe o regime com as normas ESPECIAIS da própria Lei mais as normas GERAIS do estatuto comum: o geral entra onde o especial silencia, não onde ele dispõe. Lei posterior geral não revoga a anterior especial, salvo disposição expressa nesse sentido — é o critério da especialidade prevalecendo sobre o cronológico. Note que isso não vale para conflito com a Constituição, caso em que a norma estadual antiga cede, como no prazo de estabilidade.",
      fundamento: "Lei estadual 3.437/1975, art. 1º, parágrafo único; LINDB, art. 2º, § 2º.",
      macete: "Geral entra na lacuna do especial. Onde o especial dispõe, ele prevalece.",
      erroComum: "Resolver o conflito só pela data, ignorando a especialidade.",
      comoBancaPensa: "Oferece um critério de solução verdadeiro em abstrato, mas inaplicável ao caso."
    }
  },
  {
    id: "LI-112", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Magistério eventual (art. 86)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.75,
    enunciado: "Além da vedação de acumular, o Estatuto proíbe ao policial civil o exercício de qualquer outra atividade, mesmo privada, ressalvado o magistério eventual.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mesmo privada, ressalvado o magistério eventual",
    cognitivo: {
      motivo: "Fixar o art. 86, que alcança atividade privada e não apenas cargo público.",
      palavraCritica: "mesmo privada",
    },
    comentario: {
      resolucao: "CERTO. É o art. 86 da Lei 3.437/1975. O alcance é mais largo do que o do art. 85: este trata de acumulação de CARGOS e FUNÇÕES PÚBLICAS; aquele veda qualquer outra atividade, inclusive privada, com a ressalva do magistério eventual. Note a convergência com a redação vigente do art. 4º, dada pela Lei 7.959/2017, que autoriza o exercício cumulativo do magistério havendo compatibilidade de horários — as duas pontas do Estatuto tratam o ensino como a exceção histórica do regime.",
      fundamento: "Lei estadual 3.437/1975, arts. 85 e 86; art. 4º, com redação da Lei estadual 7.959/2017.",
      macete: "Art. 85: cargos públicos. Art. 86: qualquer atividade, até privada.",
      erroComum: "Limitar a vedação ao serviço público, ignorando a atividade privada.",
      comoBancaPensa: "Cobra o artigo de alcance mais amplo, quase sempre ofuscado pelo anterior."
    }
  },
  {
    id: "LI-113", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Conceito de atividade técnica (art. 4º, p.u.)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (conflito de redações)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.77,
    enunciado: "Para os fins do Estatuto, considera-se atividade técnica, na redação vigente, exclusivamente aquela cujo provimento exija diploma de curso universitário ou equivalente.",
    gabarito: "E", pegadinha: "literalidade", palavraChave: "exclusivamente ... diploma de curso universitário",
    cognitivo: {
      motivo: "Cobrar o conceito atual de atividade técnica, que a Lei 7.959/2017 ampliou.",
      palavraCritica: "exclusivamente ... universitário",
    },
    comentario: {
      resolucao: "ERRADO — a definição descrita é a da redação ORIGINAL do parágrafo único do art. 4º. O texto vigente, dado pela Lei 7.959/2017, é mais largo: considera-se atividade técnica aquela que corresponde à profissão de nível MÉDIO OU SUPERIOR de ensino, sujeita a habilitação em curso oficial ou reconhecido. A diferença tem consequência direta, porque é esse conceito que o art. 85 usa para definir qual cargo policial pode ser acumulado com o de professor — sob a redação nova, cargos de nível médio passam a caber na hipótese.",
      fundamento: "Lei estadual 3.437/1975, art. 4º, parágrafo único, com redação da Lei estadual 7.959/2017; art. 85, caput.",
      macete: "Atividade técnica hoje é de nível MÉDIO ou superior com habilitação — não só universitário.",
      erroComum: "Responder pela redação original, que restringia ao curso universitário.",
      comoBancaPensa: "Cobra a redação revogada de um conceito que serve de chave para outro artigo."
    }
  },
  {
    id: "LI-114", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Precedência hierárquica (art. 5º, p.u.)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.72,
    enunciado: "A Polícia Civil fundamenta-se na hierarquia e na disciplina, estabelecendo-se a precedência, basicamente, pela subordinação funcional.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "basicamente, pela subordinação funcional",
    cognitivo: {
      motivo: "Fixar o critério primário de precedência e a remissão ao art. 67.",
      palavraCritica: "basicamente",
    },
    comentario: {
      resolucao: "CERTO. É o art. 5º e seu parágrafo único, que ainda remete à ordem do art. 67. O advérbio 'basicamente' é o que torna o item preciso: a subordinação funcional é o critério primário, não o único. O art. 67 detalha a ordem, começando pelo maior nível ou símbolo de vencimento base do funcionário policial. Item que apresente a subordinação funcional como critério exclusivo, ou que troque o fundamento da corporação, estaria errado.",
      fundamento: "Lei estadual 3.437/1975, arts. 5º e 67.",
      macete: "Precedência: subordinação funcional 'basicamente', detalhada no art. 67.",
      erroComum: "Ler 'basicamente' como 'exclusivamente'.",
      comoBancaPensa: "Item literal curto, usado como âncora para as alterações nos itens vizinhos."
    }
  },
  {
    id: "LI-115", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Autoridades policiais civis (art. 8º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.73,
    enunciado: "O Secretário de Segurança Pública não integra o rol de autoridades policiais civis do Estatuto, por exercer cargo de natureza política e não policial.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "não integra o rol de autoridades policiais civis",
    cognitivo: {
      motivo: "Cobrar a abertura do rol do art. 8º, que começa justamente pelo Secretário.",
      palavraCritica: "não integra",
    },
    comentario: {
      resolucao: "ERRADO. O art. 8º abre o rol de autoridades policiais civis exatamente pelo Secretário de Segurança Pública, no inciso I. A justificativa que o item oferece — natureza política do cargo — é raciocínio plausível e não é o que a lei adotou. E há coerência sistêmica: é ao Secretário que o art. 96 confere a competência para converter suspensão em detenção disciplinar, e o art. 118 para designar a Comissão de Disciplina. Se ele não fosse autoridade policial civil, essas competências não se encaixariam.",
      fundamento: "Lei estadual 3.437/1975, art. 8º, I; arts. 96 e 118.",
      macete: "O rol do art. 8º começa no Secretário de Segurança Pública.",
      erroComum: "Excluí-lo por associar autoridade policial a cargo de carreira.",
      comoBancaPensa: "Nega uma inclusão expressa e sustenta a negativa com argumento doutrinário aparentemente sólido."
    }
  },
  {
    id: "LI-116", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Requisito do Perito Criminal (art. 21, p.u.)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.81,
    enunciado: "Para o provimento do cargo de Perito Criminal, o Estatuto exige, cumulativamente, a conclusão do curso de Direito e de curso em perícia criminal realizado em estabelecimento idôneo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "cumulativamente ... curso de Direito e de curso em perícia criminal",
    cognitivo: {
      motivo: "Fixar a exigência dupla e contraintuitiva do cargo mais técnico do quadro.",
      palavraCritica: "curso de Direito",
    },
    comentario: {
      resolucao: "CERTO. É o parágrafo único do art. 21, e a exigência é mesmo cumulativa: curso de Direito E curso em perícia criminal. Contraria a intuição, porque as atribuições do artigo são eminentemente científicas — exames periciais em local de infração, exames grafotécnicos, perícias contábeis, análises químicas, minerais e orgânicas. Um bacharel em Química com especialização em perícia não preenche o requisito à luz da letra do Estatuto. É um dispositivo antigo, de 1975, e a estranheza é justamente o que o torna cobrável.",
      fundamento: "Lei estadual 3.437/1975, art. 21, caput e parágrafo único.",
      macete: "Perito Criminal na Lei 3.437: Direito + perícia criminal. Os dois.",
      erroComum: "Supor suficiente a formação científica correlata às atribuições.",
      comoBancaPensa: "Cobra o requisito que contraria a expectativa profissional do cargo."
    }
  },
  {
    id: "LI-117", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Requisito do Inspetor de Polícia (art. 15, p.u.)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "Para o provimento do cargo de Inspetor de Polícia exige-se a conclusão do ensino de 2º grau ou equivalente, sendo o curso de Direito requisito apenas desejável.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "sendo o curso de Direito requisito apenas desejável",
    cognitivo: {
      motivo: "Cobrar que o curso de Direito é habilitação exigida, não preferência.",
      palavraCritica: "apenas desejável",
    },
    comentario: {
      resolucao: "ERRADO. O parágrafo único do art. 15 exige, como habilitação, o CURSO DE DIREITO — não o 2º grau, e não como preferência. O item rebaixa o requisito e converte exigência em desejo. Vale contrastar com o art. 40, onde a lei realmente usa linguagem de preferência ao dizer 'sempre que possível, com vivência policial': ali é recomendação, aqui é habilitação. Distinguir os dois registros no mesmo Estatuto é o que a banca cobra.",
      fundamento: "Lei estadual 3.437/1975, art. 15, caput e parágrafo único; art. 40, caput.",
      macete: "Inspetor exige curso de Direito. 'Desejável' é a linguagem do art. 40, outro contexto.",
      erroComum: "Nivelar o Inspetor aos cargos de 2º grau do quadro.",
      comoBancaPensa: "Rebaixa o requisito e importa a linguagem facultativa de outro artigo."
    }
  },
  {
    id: "LI-118", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Atribuições do Inspetor de Polícia (art. 15)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.76,
    enunciado: "Entre as atribuições básicas do Inspetor de Polícia incluem-se instaurar e presidir inquéritos policiais, formalizar prisão em flagrante, informar pedidos de habeas corpus e representar à autoridade judiciária sobre a necessidade de prisão preventiva de indiciados.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "informar pedidos de habeas corpus",
    cognitivo: {
      motivo: "Fixar o rol do art. 15, que reúne atos tipicamente de autoridade policial.",
      palavraCritica: "informar pedidos de habeas corpus",
    },
    comentario: {
      resolucao: "CERTO em relação ao Estatuto, que é o que o edital cobra. Todas as atribuições constam do art. 15 da Lei estadual 3.437/1975, e o parágrafo único exige do Inspetor o curso de Direito — o texto de 1975 realmente o desenha como autoridade policial. RESSALVA IMPORTANTE: esse desenho não sobreviveu à ordem constitucional atual. O art. 144, § 4º, da CF/88 atribui às polícias civis, DIRIGIDAS POR DELEGADOS DE POLÍCIA DE CARREIRA, as funções de polícia judiciária e a apuração de infrações penais; e o art. 2º, § 1º, da Lei nº 12.830/2013 reserva ao delegado a condução da investigação por meio do inquérito policial. Hoje, portanto, instaurar e presidir inquérito é atribuição privativa do delegado. Leia o comando: se ele disser 'nos termos da Lei 3.437/1975', vale a literalidade do Estatuto; se disser 'segundo a Constituição Federal' ou 'atualmente', a mesma assertiva fica ERRADA.",
      fundamento: "Lei estadual 3.437/1975, art. 15, caput e parágrafo único. Em sentido contrário, no plano atual: CF/88, art. 144, § 4º, e Lei nº 12.830/2013, art. 2º, § 1º.",
      macete: "O Inspetor de 1975 é autoridade policial no papel; desde 1988, quem preside inquérito é o delegado. O comando da questão decide qual dos dois planos vale.",
      erroComum: "Responder pelo plano errado — negar a literalidade do Estatuto, ou afirmá-la quando o enunciado pergunta pelo regime vigente.",
      comoBancaPensa: "Rol longo e fiel ao texto estadual. A banca também explora o inverso: cobra o mesmo rol sob a ótica da CF/88, e aí a resposta se inverte."
    }
  },
  {
    id: "LI-119", disciplina: "Legislação Institucional (AL)", assunto: "Estatuto da PC-AL (Lei 3.437/1975)", subassunto: "Delegado Regional exercido por militar (art. 40, § 1º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (padrão de literalidade normativa)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.74,
    enunciado: "No interesse do serviço policial, os cargos de Delegado Regional e Especializado poderão, segundo o Estatuto, ser exercidos por oficiais superiores da Polícia Militar ou por capitães portadores do Curso de Aperfeiçoamento de Oficiais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "oficiais superiores da Polícia Militar ou por capitães portadores do CAO",
    cognitivo: {
      motivo: "Fixar a permissão do § 1º, contraponto necessário à vedação do § 2º.",
      palavraCritica: "capitães portadores do CAO",
    },
    comentario: {
      resolucao: "CERTO. É a literalidade do § 1º do art. 40. O dispositivo é de 1975 e convive mal com o art. 144, § 4º, da Constituição de 1988, que reserva a direção das polícias civis a delegado de polícia de carreira — discussão que existe e é legítima. Mas quando o comando pede o que diz o ESTATUTO, a resposta é a letra da lei estadual. Atenção ao recorte: só oficiais superiores ou capitães com CAO; o § 2º fecha em absoluto para a graduação de cabo.",
      fundamento: "Lei estadual 3.437/1975, art. 40, §§ 1º e 2º; CF/88, art. 144, § 4º.",
      macete: "Oficial superior ou capitão com CAO: a lei estadual permite. Cabo: jamais.",
      erroComum: "Negar por invocar a regra constitucional quando o comando pede o Estatuto.",
      comoBancaPensa: "Testa se o candidato responde ao comando efetivamente formulado."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE62);
