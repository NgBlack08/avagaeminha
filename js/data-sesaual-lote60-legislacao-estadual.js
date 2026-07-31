/* =====================================================================
   QUESTLAB — Lote 60: LEGISLAÇÃO ESTADUAL (AL) — trilha SESAU/AL

   Segunda disciplina de conteúdo da trilha SESAU/AL. Cobre o tópico 3 dos
   conhecimentos básicos do Edital nº 1 - SESAU/AL:

     LEGISLAÇÃO ESTADUAL: 1 Constituição do Estado de Alagoas. 2 Lei
     estadual nº 5.247/1991 e suas alterações (Regime Jurídico Único dos
     Servidores Públicos Civis do Estado de Alagoas, das Autarquias e
     Fundações Públicas Estaduais).

   PROCEDÊNCIA DO CONTEÚDO. Lei estadual é terreno onde escrever de
   memória produz erro — foi assim que o LI-050 nasceu errado num lote
   anterior. Aqui cada item foi ancorado no texto oficial da Lei 5.247/1991
   obtido do repositório da FAPEAL/Governo de Alagoas, incluindo as
   alterações da Lei estadual 6.043/1998 (que reescreveu a licença-prêmio
   como licença para capacitação profissional e revogou o art. 92). Os
   números de artigo, prazos e percentuais foram conferidos um a um contra
   esse texto.

   O ITEM MAIS IMPORTANTE DO LOTE é o LEA-007. O art. 32 da lei estadual
   fixa estágio probatório de 24 meses, e o próprio texto oficial traz nota
   remissiva à EC 19/98, que alterou o art. 41 da CF para exigir TRÊS anos
   de efetivo exercício mais avaliação especial de desempenho. Transcrever
   a lei estadual fielmente aqui produziria um item errado — exatamente a
   lição do LI-050: fidelidade textual não é acerto jurídico.

   Equilíbrio 20 CERTO / 20 ERRADO.
   ===================================================================== */

const QUESTOES_SESAUAL_LOTE60 = [
  /* ---------- Provimento, posse e exercício ---------- */
  {
    id: "LEA-001", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — provimento e posse", subassunto: "Prazo para a posse",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "A posse ocorrerá dentro do prazo de trinta dias contados da publicação do ato de provimento.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "trinta dias contados da publicação do ato de provimento",
    cognitivo: {
      motivo: "Fixar o prazo de posse e seu termo inicial, que a banca desloca.",
      palavraCritica: "da publicação do ato de provimento",
    },
    comentario: {
      resolucao: "CERTO. É o §2º do art. 13 da Lei 5.247/1991. O que a banca costuma alterar não é o número, mas o TERMO INICIAL: o prazo corre da publicação do ato de provimento, não da nomeação em si nem da convocação. E há um segundo prazo de trinta dias logo adiante, o do art. 26, §1º, para entrar em EXERCÍCIO — esse contado da posse. São dois prazos iguais em duração e diferentes em marco inicial, e é justamente aí que os itens se cruzam.",
      fundamento: "Lei estadual 5.247/1991, art. 13, § 2º; art. 26, § 1º.",
      macete: "30 dias para tomar posse (da publicação) + 30 para entrar em exercício (da posse).",
      erroComum: "Contar o prazo de posse a partir da homologação do concurso.",
      comoBancaPensa: "Dois prazos de mesma duração e marcos distintos: terreno natural para troca."
    }
  },
  {
    id: "LEA-002", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — provimento e posse", subassunto: "Prazo para entrar em exercício",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "É de trinta dias o prazo para o servidor entrar em exercício, contado da data da publicação do ato de nomeação.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "da data da publicação do ato de nomeação",
    cognitivo: {
      motivo: "Cobrar o termo inicial do prazo de exercício, que é a posse.",
      palavraCritica: "publicação do ato de nomeação",
    },
    comentario: {
      resolucao: "ERRADO. O art. 26, §1º, conta os trinta dias da data da POSSE, não da publicação da nomeação. O item aproveita que a duração está certa para trocar o marco — e o marco trocado é o do outro prazo, o de posse (art. 13, §2º). Se o servidor não entrar em exercício no prazo, a consequência não é a mesma da posse não tomada: aqui o ato de nomeação é revogado (art. 26, §2º).",
      fundamento: "Lei estadual 5.247/1991, art. 26, §§ 1º e 2º; art. 13, § 2º.",
      macete: "Exercício conta da POSSE. Posse conta da PUBLICAÇÃO.",
      erroComum: "Somar os dois prazos como se corressem do mesmo marco.",
      comoBancaPensa: "Mantém o numeral correto e desloca só o termo inicial."
    }
  },
  {
    id: "LEA-003", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — provimento e posse", subassunto: "Inspeção médica prévia",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.74,
    enunciado: "A posse dependerá de prévia inspeção médica oficial, em que se comprove a aptidão física e mental do candidato para o exercício do cargo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "prévia inspeção médica oficial",
    cognitivo: {
      motivo: "Fixar que a inspeção médica é condição da posse, não posterior a ela.",
      palavraCritica: "prévia",
    },
    comentario: {
      resolucao: "CERTO. Transcrição do art. 14 da Lei 5.247/1991. A palavra que sustenta o item é 'prévia': a inspeção é requisito para a posse, e não formalidade a cumprir depois de empossado. Repare que a lei exige aptidão física E mental — item que mencione apenas a física estaria incompleto em relação ao texto. Some-se a isso a declaração de bens e a de acúmulo de cargos, ambas exigidas no ato da posse pelo §5º do art. 13.",
      fundamento: "Lei estadual 5.247/1991, art. 14; art. 13, § 5º.",
      macete: "Inspeção médica vem ANTES da posse; declaração de bens, NO ato dela.",
      erroComum: "Tratar a inspeção como etapa do estágio probatório.",
      comoBancaPensa: "Item literal simples, usado para ancorar as trocas de momento nos demais."
    }
  },
  {
    id: "LEA-004", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — provimento e posse", subassunto: "Declaração de bens",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.7,
    enunciado: "O servidor deverá apresentar declaração dos bens e valores que constituem seu patrimônio no prazo de até trinta dias contados da data da posse.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "até trinta dias contados da data da posse",
    cognitivo: {
      motivo: "Cobrar que a declaração de bens é simultânea à posse, sem prazo posterior.",
      palavraCritica: "até trinta dias",
    },
    comentario: {
      resolucao: "ERRADO. O §5º do art. 13 exige a declaração NO ATO da posse, não em prazo posterior. O item inventa uma dilação que a lei não concede, aproveitando que trinta dias é um número que já aparece duas vezes no capítulo — para a posse e para o exercício — e por isso soa familiar. Na mesma ocasião o servidor declara também se exerce ou não outro cargo, emprego ou função pública, o que serve ao controle de acumulação do art. 120.",
      fundamento: "Lei estadual 5.247/1991, art. 13, § 5º; art. 120.",
      macete: "Declaração de bens é no ato da posse — não tem prazo para depois.",
      erroComum: "Transportar para a declaração de bens o prazo de trinta dias dos outros atos.",
      comoBancaPensa: "Reaproveita um numeral verdadeiro do mesmo capítulo em contexto onde ele não existe."
    }
  },
  {
    id: "LEA-005", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — vacância", subassunto: "Hipóteses de vacância",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.76,
    enunciado: "Determinam a vacância do cargo público, entre outras hipóteses, a exoneração, a demissão, a promoção, a aposentadoria, a posse em outro cargo inacumulável e o falecimento.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "posse em outro cargo inacumulável",
    cognitivo: {
      motivo: "Fixar o rol do art. 40, com atenção às hipóteses que não são punitivas.",
      palavraCritica: "posse em outro cargo inacumulável",
    },
    comentario: {
      resolucao: "CERTO. Todas constam do art. 40 da Lei 5.247/1991, que traz nove hipóteses — as seis do item mais a ascensão, a transferência e a readaptação. O ponto que confunde é que a vacância não é sanção: promoção e aposentadoria abrem vaga tanto quanto a demissão. Vacância descreve o cargo que ficou sem titular, qualquer que tenha sido a causa.",
      fundamento: "Lei estadual 5.247/1991, art. 40, I a IX.",
      macete: "Vacância não é castigo — promoção e aposentadoria também vagam o cargo.",
      erroComum: "Restringir a vacância às hipóteses de desligamento punitivo.",
      comoBancaPensa: "Mistura hipóteses favoráveis e desfavoráveis no mesmo rol para testar o conceito."
    }
  },
  {
    id: "LEA-006", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — vacância", subassunto: "Licença não gera vacância",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.72,
    enunciado: "A concessão de licença para tratar de interesses particulares, por ser de longa duração e sem remuneração, determina a vacância do cargo ocupado pelo servidor licenciado.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "determina a vacância do cargo",
    cognitivo: {
      motivo: "Separar afastamento temporário de vacância do cargo.",
      palavraCritica: "determina a vacância",
    },
    comentario: {
      resolucao: "ERRADO. Licença não está entre as nove hipóteses do art. 40, e a razão é conceitual: durante a licença o servidor continua titular do cargo, apenas afastado do exercício. Se houvesse vacância, o cargo poderia ser provido por outro e não haveria a que retornar — o que esvaziaria o próprio instituto, já que o art. 94, §1º, permite interromper a licença a qualquer tempo a pedido do servidor. O argumento do item ('longa duração e sem remuneração') é verdadeiro e irrelevante.",
      fundamento: "Lei estadual 5.247/1991, art. 40; art. 94, caput e § 1º.",
      macete: "Licenciado continua dono do cargo. Vacância é ficar sem titular.",
      erroComum: "Deduzir vacância da ausência prolongada e da falta de remuneração.",
      comoBancaPensa: "Constrói uma justificativa verdadeira para uma conclusão que a lei não autoriza."
    }
  },

  /* ---------- Estágio probatório e estabilidade ---------- */
  {
    id: "LEA-007", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — estágio probatório", subassunto: "Prazo do estágio probatório e da estabilidade",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 75, probReaparecer: 0.94,
    enunciado: "O servidor estadual investido em cargo de provimento efetivo adquire estabilidade após vinte e quatro meses de efetivo exercício, conforme o prazo de estágio probatório fixado no Regime Jurídico Único dos Servidores Públicos Civis do Estado de Alagoas.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "vinte e quatro meses",
    cognitivo: {
      motivo: "Cobrar a prevalência da Constituição sobre o prazo literal da lei estadual.",
      palavraCritica: "vinte e quatro meses",
    },
    comentario: {
      resolucao: "ERRADO — e aqui a letra da lei estadual é uma armadilha, não a resposta. O art. 32 da Lei 5.247/1991 realmente diz vinte e quatro meses, porque é de 1991. Mas a EC 19/1998 alterou o art. 41 da Constituição Federal e passou a exigir TRÊS anos de efetivo exercício, além de avaliação especial de desempenho por comissão instituída para essa finalidade. Norma estadual não pode fixar prazo de estabilidade menor que o constitucional, de modo que o dispositivo estadual não foi recepcionado nesse ponto e prevalecem os três anos. O próprio texto oficial da lei publicado pelo Estado traz nota remissiva alertando para isso.",
      fundamento: "CF/88, art. 41, caput e § 4º, com redação da EC 19/1998; Lei estadual 5.247/1991, art. 32 (não recepcionado quanto ao prazo).",
      macete: "Estabilidade é 3 anos por força da Constituição, mesmo onde a lei estadual antiga diga 2.",
      erroComum: "Reproduzir o prazo da lei estadual por ele estar literalmente no texto cobrado pelo edital.",
      comoBancaPensa: "Cobra o conflito entre lei estadual anterior e emenda constitucional posterior — fidelidade textual não é acerto jurídico."
    }
  },
  {
    id: "LEA-008", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — estágio probatório", subassunto: "Fatores de avaliação",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.83,
    enunciado: "Durante o estágio probatório, a aptidão e a capacidade do servidor serão objeto de avaliação quanto à assiduidade, à disciplina, à capacidade de iniciativa, à produtividade e à responsabilidade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "assiduidade ... disciplina ... iniciativa ... produtividade ... responsabilidade",
    cognitivo: {
      motivo: "Fixar os cinco fatores do art. 32, rol fechado que a banca amplia.",
      palavraCritica: "capacidade de iniciativa",
    },
    comentario: {
      resolucao: "CERTO. São exatamente os cinco incisos do art. 32 da Lei 5.247/1991, na mesma ordem. O rol é fechado, então itens que acrescentem 'urbanidade', 'ética' ou 'qualificação técnica' — todos plausíveis e nenhum previsto — estão errados. Guarde os cinco pelo que têm em comum: são atributos observáveis no dia a dia do serviço, não títulos ou provas.",
      fundamento: "Lei estadual 5.247/1991, art. 32, I a V.",
      macete: "Cinco fatores: assiduidade, disciplina, iniciativa, produtividade, responsabilidade.",
      erroComum: "Aceitar acréscimos plausíveis como 'urbanidade' ao rol.",
      comoBancaPensa: "Rol fechado e curto: alvo típico de inclusão de item verossímil."
    }
  },
  {
    id: "LEA-009", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — estágio probatório", subassunto: "Homologação da avaliação",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.68,
    enunciado: "Concluído o período de prova, o resultado da avaliação será homologado dentro do prazo máximo de quinze dias, contados a partir do dia imediato ao termo final.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "quinze dias",
    cognitivo: {
      motivo: "Fixar um prazo curto e específico, fácil de trocar por 30 ou 60.",
      palavraCritica: "quinze dias",
    },
    comentario: {
      resolucao: "CERTO. É o §1º do art. 32 da Lei 5.247/1991. Quinze dias é o único prazo dessa duração no capítulo, o que o torna alvo de troca por trinta — número que aparece com frequência nos artigos vizinhos, na posse e no exercício. Repare que a contagem começa no dia imediato ao termo final do estágio, não na data em que a comissão conclui os trabalhos.",
      fundamento: "Lei estadual 5.247/1991, art. 32, § 1º.",
      macete: "Homologação em 15 dias — o único prazo quinzenal do capítulo.",
      erroComum: "Trocar por trinta dias, por contaminação dos prazos vizinhos.",
      comoBancaPensa: "Isola um numeral incomum entre numerais repetidos e conta com a contaminação."
    }
  },
  {
    id: "LEA-010", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — estágio probatório", subassunto: "Reprovação no estágio probatório",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "O servidor não aprovado no estágio probatório será necessariamente exonerado do cargo, qualquer que seja sua situação funcional anterior.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "necessariamente exonerado ... qualquer que seja",
    cognitivo: {
      motivo: "Cobrar a alternativa da recondução para quem já era estável em outro cargo.",
      palavraCritica: "necessariamente",
    },
    comentario: {
      resolucao: "ERRADO. O §2º do art. 32 prevê duas saídas: exoneração OU, se o servidor já for estável, recondução ao cargo anteriormente ocupado. A hipótese é comum na prática — o servidor estável que presta novo concurso e não vai bem no estágio do cargo novo não perde o vínculo antigo, volta a ele. É a mesma lógica do art. 23, que define a recondução como retorno do servidor estável ao cargo anterior. O item transforma em regra única o que a lei apresenta como alternativa.",
      fundamento: "Lei estadual 5.247/1991, art. 32, § 2º; art. 23, I.",
      macete: "Reprovou no estágio: exonera se não era estável; reconduz se era.",
      erroComum: "Ignorar a situação do servidor que já detinha estabilidade em outro cargo.",
      comoBancaPensa: "Suprime a alternativa legal e fecha com termo absoluto."
    }
  },

  /* ---------- Jornada e férias ---------- */
  {
    id: "LEA-011", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — jornada e férias", subassunto: "Jornada de trabalho",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 45, probReaparecer: 0.8,
    enunciado: "O ocupante de cargo público civil do Estado de Alagoas fica sujeito a quarenta horas semanais de trabalho.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "quarenta horas semanais",
    cognitivo: {
      motivo: "Fixar a jornada legal, que coincide com a do edital para o cargo.",
      palavraCritica: "quarenta horas",
    },
    comentario: {
      resolucao: "CERTO. É o art. 31 da Lei 5.247/1991, e coincide com a jornada de 40 horas semanais que o próprio edital do SESAU/AL fixa para o cargo de Especialista em Saúde. A Constituição estadual, no art. 55, trata da jornada e dos adicionais de hora extra e trabalho noturno, complementando o regime. Jornadas reduzidas para profissões específicas dependem de lei própria — não decorrem do Regime Jurídico Único.",
      fundamento: "Lei estadual 5.247/1991, art. 31; Constituição do Estado de Alagoas, art. 55.",
      macete: "Regra geral do RJU estadual: 40 horas semanais.",
      erroComum: "Presumir jornada reduzida por se tratar de profissional de saúde.",
      comoBancaPensa: "Item de confirmação, cobrado junto do edital para checar leitura do conjunto."
    }
  },
  {
    id: "LEA-012", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — jornada e férias", subassunto: "Duração e acumulação de férias",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.87,
    enunciado: "O servidor fará jus a trinta dias consecutivos de férias, que podem ser acumulados até o máximo de dois períodos, no caso de necessidade do serviço.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "acumulados até o máximo de dois períodos",
    cognitivo: {
      motivo: "Fixar duração e limite de acumulação, ambos alvos de troca numérica.",
      palavraCritica: "dois períodos",
    },
    comentario: {
      resolucao: "CERTO. É o caput do art. 81 da Lei 5.247/1991. Dois numerais no mesmo dispositivo, ambos passíveis de adulteração: trinta dias e dois períodos. A acumulação depende de necessidade do serviço — não é escolha livre do servidor —, e a própria lei ressalva as hipóteses de legislação específica, como a do art. 83, que trata de quem opera com Raios-X e tem regime próprio e inacumulável.",
      fundamento: "Lei estadual 5.247/1991, art. 81, caput; art. 83.",
      macete: "30 dias, acumuláveis no máximo 2 períodos, e só por necessidade do serviço.",
      erroComum: "Supor acumulação ilimitada ou a critério exclusivo do servidor.",
      comoBancaPensa: "Dispositivo com dois numerais: dobra a chance de alteração cirúrgica."
    }
  },
  {
    id: "LEA-013", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — jornada e férias", subassunto: "Primeiro período aquisitivo",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.79,
    enunciado: "O primeiro período aquisitivo de férias completar-se-á ao final dos seis primeiros meses de exercício.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "seis primeiros meses",
    cognitivo: {
      motivo: "Cobrar o prazo do primeiro período aquisitivo.",
      palavraCritica: "seis",
    },
    comentario: {
      resolucao: "ERRADO. O §1º do art. 81 exige DOZE meses de exercício para completar o primeiro período aquisitivo. Seis meses é prazo que aparece em outros regimes e por isso soa familiar, mas não é o do RJU estadual. A regra é coerente com a lógica do instituto: o direito a trinta dias de descanso se forma ao longo de um ano de trabalho.",
      fundamento: "Lei estadual 5.247/1991, art. 81, § 1º.",
      macete: "Primeiro período aquisitivo: 12 meses de exercício.",
      erroComum: "Importar o prazo de seis meses de outros regimes funcionais.",
      comoBancaPensa: "Troca o numeral por outro que circula em regimes vizinhos."
    }
  },
  {
    id: "LEA-014", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — jornada e férias", subassunto: "Adicional de um terço",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.81,
    enunciado: "Independentemente de solicitação, será pago ao servidor, por ocasião das férias, um adicional correspondente a um terço da remuneração do período de férias.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "independentemente de solicitação",
    cognitivo: {
      motivo: "Fixar que o adicional de férias é automático, sem requerimento.",
      palavraCritica: "independentemente de solicitação",
    },
    comentario: {
      resolucao: "CERTO. É o art. 80 da Lei 5.247/1991, que reproduz a garantia do art. 7º, XVII, da Constituição Federal, estendida aos servidores pelo art. 39, §3º. A expressão 'independentemente de solicitação' é o núcleo do item: o pagamento é automático, e condicioná-lo a requerimento seria criar exigência inexistente. O parágrafo único ainda manda computar no cálculo a vantagem de função de direção, chefia ou assessoramento.",
      fundamento: "Lei estadual 5.247/1991, art. 80 e parágrafo único; CF/88, art. 7º, XVII, c/c art. 39, § 3º.",
      macete: "Terço de férias é automático — não depende de pedido.",
      erroComum: "Aceitar item que condicione o adicional a requerimento prévio.",
      comoBancaPensa: "Cobra a automaticidade, que é o detalhe que distingue direito de faculdade."
    }
  },
  {
    id: "LEA-015", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — jornada e férias", subassunto: "Faltas e férias",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.71,
    enunciado: "As faltas ao serviço podem ser compensadas mediante desconto no período de férias do servidor, a critério da chefia imediata.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "compensadas mediante desconto no período de férias",
    cognitivo: {
      motivo: "Cobrar a vedação expressa do §2º do art. 81.",
      palavraCritica: "a critério da chefia imediata",
    },
    comentario: {
      resolucao: "ERRADO. O §2º do art. 81 é expresso: é VEDADO levar à conta de férias qualquer falta ao serviço. A proibição não comporta a discricionariedade que o item cria, e a razão é que férias têm natureza de descanso obrigatório, não de crédito compensatório. Falta injustificada tem tratamento próprio — desconto na remuneração pelo art. 49 e, conforme o caso, repercussão disciplinar —, e nenhum deles passa pelas férias.",
      fundamento: "Lei estadual 5.247/1991, art. 81, § 2º; art. 49.",
      macete: "Falta não se desconta das férias. Nunca.",
      erroComum: "Aceitar a compensação por soar prática administrativa razoável.",
      comoBancaPensa: "Inventa margem de discricionariedade onde a lei usa 'é vedado'."
    }
  },
  {
    id: "LEA-016", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — jornada e férias", subassunto: "Férias de quem opera com Raios-X",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.77,
    enunciado: "O servidor que opera direta e permanentemente com Raios-X ou substâncias radioativas gozará vinte dias consecutivos de férias por semestre de atividade profissional, proibida em qualquer hipótese a acumulação.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "por semestre ... proibida em qualquer hipótese a acumulação",
    cognitivo: {
      motivo: "Cobrar o regime especial de férias, relevante para servidores da saúde.",
      palavraCritica: "por semestre",
    },
    comentario: {
      resolucao: "CERTO. É o art. 83 da Lei 5.247/1991. Dois pontos costumam ser adulterados: a periodicidade, que é SEMESTRAL e não anual — o servidor goza 20 dias a cada seis meses, somando 40 no ano, mais que os 30 da regra geral —, e a vedação absoluta de acumular, que aqui é mesmo sem exceção, ao contrário dos dois períodos permitidos pelo art. 81. O parágrafo único acrescenta que esse servidor não faz jus ao abono pecuniário. Regime de interesse direto para quem atua em serviço de saúde com radiação.",
      fundamento: "Lei estadual 5.247/1991, art. 83 e parágrafo único.",
      macete: "Raios-X: 20 dias por SEMESTRE, sem acumular, sem abono.",
      erroComum: "Ler 'por semestre' como 'por ano' e achar o prazo menor que a regra geral.",
      comoBancaPensa: "Regime especial com três desvios da regra: periodicidade, acumulação e abono."
    }
  },
  {
    id: "LEA-017", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — jornada e férias", subassunto: "Pagamento da remuneração de férias",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.66,
    enunciado: "O pagamento da remuneração das férias será efetuado até dois dias após o início do respectivo período.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "até dois dias após o início",
    cognitivo: {
      motivo: "Cobrar que o pagamento antecede o gozo das férias.",
      palavraCritica: "após",
    },
    comentario: {
      resolucao: "ERRADO. O art. 82 determina o pagamento até dois dias ANTES do início do período — o item inverte a preposição e mantém o numeral. A antecipação existe por finalidade prática: as férias se destinam ao descanso, e o servidor precisa dispor dos recursos ao iniciá-las, não depois. É a mesma lógica do pagamento antecipado de férias na legislação trabalhista.",
      fundamento: "Lei estadual 5.247/1991, art. 82.",
      macete: "Paga-se ANTES de sair de férias, não durante.",
      erroComum: "Fixar-se no numeral e não conferir se é antes ou depois.",
      comoBancaPensa: "Inverte uma preposição — a menor alteração possível num dispositivo curto."
    }
  },

  /* ---------- Licenças ---------- */
  {
    id: "LEA-018", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — licenças", subassunto: "Rol de licenças do art. 85",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.84,
    enunciado: "Conceder-se-á licença ao servidor por motivo de doença em pessoa da família, por motivo de afastamento do cônjuge ou companheiro, para serviço militar, para atividade política, para capacitação profissional, para tratar de interesses particulares e para desempenho de mandato classista.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "para capacitação profissional",
    cognitivo: {
      motivo: "Fixar as sete licenças do art. 85, com a nomenclatura atualizada em 1998.",
      palavraCritica: "capacitação profissional",
    },
    comentario: {
      resolucao: "CERTO. São exatamente os sete incisos do art. 85 da Lei 5.247/1991. Atenção à nomenclatura do inciso V: a redação original dizia 'prêmio por assiduidade', substituída por 'capacitação profissional' pela Lei estadual 6.043/1998 — item que ainda use o nome antigo cobra uma redação revogada. Note também que a licença para tratamento de saúde do próprio servidor NÃO está neste rol: ela é tratada à parte, no art. 214, dentro do capítulo de seguridade social.",
      fundamento: "Lei estadual 5.247/1991, art. 85, I a VII, com redação da Lei estadual 6.043/1998; art. 214.",
      macete: "Sete licenças no art. 85 — e a de tratamento de saúde não é uma delas.",
      erroComum: "Incluir a licença para tratamento de saúde do próprio servidor no rol do art. 85.",
      comoBancaPensa: "Rol de sete itens com uma denominação alterada por lei posterior."
    }
  },
  {
    id: "LEA-019", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — licenças", subassunto: "Licença por doença em pessoa da família",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.82,
    enunciado: "A licença por motivo de doença em pessoa da família será concedida sem prejuízo da remuneração do cargo efetivo até noventa dias, podendo ser prorrogada por até noventa dias mediante parecer de junta médica e, excedidos esses prazos, sem remuneração.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "até noventa dias ... prorrogada por até noventa dias",
    cognitivo: {
      motivo: "Fixar a escada de prazos e o momento em que a remuneração cessa.",
      palavraCritica: "excedidos esses prazos, sem remuneração",
    },
    comentario: {
      resolucao: "CERTO. É o §2º do art. 87 da Lei 5.247/1991. A estrutura é em três degraus: 90 dias com remuneração, mais 90 de prorrogação também remunerados mediante junta médica, e daí em diante sem remuneração. O §1º acrescenta requisito que o item não menciona e que a banca gosta de cobrar: a licença só é deferida se a assistência direta do servidor for indispensável e não puder ser prestada junto com o exercício do cargo. O rol de familiares alcança até o segundo grau, civil ou por afinidade.",
      fundamento: "Lei estadual 5.247/1991, art. 87, caput e §§ 1º e 2º.",
      macete: "90 + 90 com remuneração; daí em diante, sem.",
      erroComum: "Supor que toda a licença é remunerada, sem limite.",
      comoBancaPensa: "Prazo escalonado: cobra o degrau em que o direito muda de natureza."
    }
  },
  {
    id: "LEA-020", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — licenças", subassunto: "Licença por afastamento do cônjuge",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.76,
    enunciado: "A licença para acompanhar cônjuge ou companheiro deslocado para outro ponto do território nacional será concedida por prazo indeterminado e sem prejuízo da remuneração do servidor.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "sem prejuízo da remuneração",
    cognitivo: {
      motivo: "Cobrar que essa licença é sem remuneração, apesar de indeterminada.",
      palavraCritica: "sem prejuízo da remuneração",
    },
    comentario: {
      resolucao: "ERRADO. O §1º do art. 88 diz prazo indeterminado E SEM REMUNERAÇÃO. O item acerta a primeira metade e inverte a segunda, que é o padrão mais difícil de perceber: a parte verdadeira dá credibilidade à falsa. A lei oferece, em compensação, uma alternativa no §2º — o servidor pode ser cedido provisoriamente a órgão da Administração Federal no novo local, desde que para atividade compatível com o cargo, e aí volta a ter remuneração.",
      fundamento: "Lei estadual 5.247/1991, art. 88, §§ 1º e 2º.",
      macete: "Acompanhar cônjuge: prazo indeterminado, mas sem remuneração.",
      erroComum: "Aceitar o item porque a primeira metade está correta.",
      comoBancaPensa: "Metade verdadeira e metade falsa no mesmo período — verdade-mais-falso clássico."
    }
  },
  {
    id: "LEA-021", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — licenças", subassunto: "Licença para capacitação profissional",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.85,
    enunciado: "Após cada quinquênio de efetivo exercício, o servidor público estável poderá, no interesse da Administração, afastar-se do exercício do cargo efetivo, com a respectiva remuneração, por até três meses, para participar de curso de capacitação profissional.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "no interesse da Administração ... por até três meses",
    cognitivo: {
      motivo: "Fixar a redação vigente após a Lei 6.043/1998, que condicionou a licença ao interesse da Administração.",
      palavraCritica: "no interesse da Administração",
    },
    comentario: {
      resolucao: "CERTO. É o art. 91 da Lei 5.247/1991 na redação dada pela Lei estadual 6.043/1998. A alteração de 1998 mudou a natureza do instituto: antes era licença-prêmio por assiduidade, direito do servidor que completasse o quinquênio; hoje é licença para CAPACITAÇÃO, condicionada ao interesse da Administração e vinculada a curso. Quem estuda pela redação antiga marca errado justamente por isso. Guarde os três elementos: quinquênio, até três meses, com remuneração — e a discricionariedade administrativa.",
      fundamento: "Lei estadual 5.247/1991, art. 91, com redação da Lei estadual 6.043/1998.",
      macete: "Quinquênio + até 3 meses + com remuneração, mas no interesse da Administração.",
      erroComum: "Tratar como licença-prêmio automática, conforme a redação revogada.",
      comoBancaPensa: "Dispositivo reescrito por lei posterior: cobra quem estudou pelo texto velho."
    }
  },
  {
    id: "LEA-022", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — licenças", subassunto: "Acumulação da licença para capacitação",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.7,
    enunciado: "Os períodos de licença para capacitação profissional não gozados são acumuláveis, podendo o servidor usufruí-los conjuntamente ao completar novo quinquênio.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "são acumuláveis",
    cognitivo: {
      motivo: "Cobrar a vedação expressa do parágrafo único do art. 91.",
      palavraCritica: "acumuláveis",
    },
    comentario: {
      resolucao: "ERRADO. O parágrafo único do art. 91 diz que os períodos NÃO são acumuláveis. A regra é coerente com a finalidade do instituto após 1998: como a licença existe para capacitação e depende do interesse da Administração, acumular esvaziaria o vínculo com o curso e a com a conveniência do serviço. Não confundir com as férias, essas sim acumuláveis por até dois períodos (art. 81).",
      fundamento: "Lei estadual 5.247/1991, art. 91, parágrafo único; art. 81, caput.",
      macete: "Férias acumulam (2 períodos). Licença capacitação não acumula.",
      erroComum: "Transportar para a licença a regra de acumulação das férias.",
      comoBancaPensa: "Aplica a um instituto a regra do instituto vizinho."
    }
  },
  {
    id: "LEA-023", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — licenças", subassunto: "Limite de gozo simultâneo",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.68,
    enunciado: "O número de servidores em gozo simultâneo de licença para capacitação profissional não poderá ser superior à metade da lotação da respectiva unidade administrativa do órgão ou entidade.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "metade da lotação",
    cognitivo: {
      motivo: "Cobrar a fração exata do limite de afastamento simultâneo.",
      palavraCritica: "metade",
    },
    comentario: {
      resolucao: "ERRADO. O art. 93 fixa o teto em UM TERÇO da lotação da unidade, não metade. A finalidade é preservar a continuidade do serviço: metade da equipe afastada ao mesmo tempo inviabilizaria o atendimento, que é exatamente o que o limite quer evitar. O dispositivo também foi atualizado pela Lei 6.043/1998, acompanhando a mudança de licença-prêmio para licença de capacitação.",
      fundamento: "Lei estadual 5.247/1991, art. 93, com redação da Lei estadual 6.043/1998.",
      macete: "Teto de afastamento simultâneo: 1/3 da lotação da unidade.",
      erroComum: "Trocar um terço por metade, fração mais intuitiva.",
      comoBancaPensa: "Substitui a fração por outra maior e igualmente plausível."
    }
  },
  {
    id: "LEA-024", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — licenças", subassunto: "Licença para interesses particulares — requisito",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.83,
    enunciado: "A licença para o trato de assuntos particulares poderá ser concedida a qualquer servidor ocupante de cargo efetivo, pelo prazo de dois anos consecutivos, sem remuneração.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "a qualquer servidor ocupante de cargo efetivo",
    cognitivo: {
      motivo: "Cobrar a exigência de estabilidade para essa licença.",
      palavraCritica: "qualquer servidor",
    },
    comentario: {
      resolucao: "ERRADO. O art. 94 exige servidor ESTÁVEL, não apenas efetivo — o item amplia o universo de beneficiários. A distinção importa porque efetividade se adquire com a posse em cargo de provimento efetivo, enquanto estabilidade só vem após o estágio probatório. O prazo de dois anos e a ausência de remuneração estão corretos, e é essa parte verdadeira que sustenta o erro. A lei ainda impõe dois limites cronológicos: nova licença só após dois anos do término da anterior (§2º) e nenhuma antes de dois anos de exercício para quem foi nomeado, removido, redistribuído ou transferido (§3º).",
      fundamento: "Lei estadual 5.247/1991, art. 94, caput e §§ 2º e 3º.",
      macete: "Interesses particulares: só para ESTÁVEL, e a critério da Administração.",
      erroComum: "Confundir efetividade com estabilidade.",
      comoBancaPensa: "Substitui a condição legal por outra próxima e mais abrangente."
    }
  },
  {
    id: "LEA-025", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — licenças", subassunto: "Interstício para nova licença",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.69,
    enunciado: "Não se concederá nova licença para o trato de assuntos particulares antes de decorridos dois anos do término da anterior.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dois anos do término da anterior",
    cognitivo: {
      motivo: "Fixar o interstício, distinto do prazo de duração da própria licença.",
      palavraCritica: "do término da anterior",
    },
    comentario: {
      resolucao: "CERTO. É o §2º do art. 94 da Lei 5.247/1991. Repare que o número dois aparece três vezes no mesmo artigo com sentidos diferentes: duração da licença (caput), interstício entre uma e outra (§2º) e tempo mínimo de exercício para a primeira concessão de quem foi nomeado ou removido (§3º). Confundi-los é o erro típico. Aqui o marco é o TÉRMINO da licença anterior, não o seu início nem a data do requerimento.",
      fundamento: "Lei estadual 5.247/1991, art. 94, §§ 2º e 3º.",
      macete: "Três 'dois anos' no art. 94: duração, interstício e exercício mínimo.",
      erroComum: "Contar o interstício do início da licença anterior.",
      comoBancaPensa: "Repete o mesmo numeral em funções distintas e troca uma pela outra."
    }
  },
  {
    id: "LEA-026", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — licenças", subassunto: "Prorrogação de licença",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.65,
    enunciado: "A licença concedida dentro de noventa dias do término de outra da mesma espécie será considerada como prorrogação.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "noventa dias",
    cognitivo: {
      motivo: "Cobrar o prazo que caracteriza prorrogação em vez de nova licença.",
      palavraCritica: "noventa",
    },
    comentario: {
      resolucao: "ERRADO. O art. 86 fixa SESSENTA dias, não noventa. A regra existe para impedir o fracionamento artificial: sem ela, bastaria interromper a licença e pedi-la de novo para reiniciar a contagem de prazos remunerados. Noventa é numeral que aparece logo adiante, no art. 87, §2º, tratando da licença por doença em pessoa da família — e é dessa vizinhança que a banca tira a substituição.",
      fundamento: "Lei estadual 5.247/1991, art. 86; art. 87, § 2º.",
      macete: "60 dias caracterizam prorrogação. 90 é o prazo da licença por doença na família.",
      erroComum: "Contaminar o art. 86 com o numeral do artigo seguinte.",
      comoBancaPensa: "Empresta o numeral de um artigo vizinho do mesmo capítulo."
    }
  },

  /* ---------- Ausências e horário especial ---------- */
  {
    id: "LEA-027", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — ausências legais", subassunto: "Doação de sangue",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.72,
    enunciado: "O servidor poderá ausentar-se do serviço, sem prejuízo da remuneração, por dois dias a cada mês para a doação de sangue.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "dois dias a cada mês",
    cognitivo: {
      motivo: "Cobrar a duração exata da ausência por doação de sangue.",
      palavraCritica: "dois dias",
    },
    comentario: {
      resolucao: "ERRADO. O art. 99, I, concede UM dia a cada mês para doação de sangue. Dois dias é o prazo do inciso II, para alistamento eleitoral — e é dessa proximidade que vem a troca. Vale memorizar o art. 99 como uma escada: 1 dia por mês (sangue), 2 dias (alistamento), 8 dias consecutivos (casamento ou falecimento de familiar próximo). Todas são ausências remuneradas e não se confundem com licenças, que exigem requerimento e ato de concessão.",
      fundamento: "Lei estadual 5.247/1991, art. 99, I a III.",
      macete: "Escada do art. 99: 1 (sangue) · 2 (eleitor) · 8 (casamento e luto).",
      erroComum: "Trocar entre si os três prazos do mesmo artigo.",
      comoBancaPensa: "Artigo com três numerais curtos: permuta entre incisos vizinhos."
    }
  },
  {
    id: "LEA-028", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — ausências legais", subassunto: "Casamento e falecimento",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "O servidor poderá ausentar-se do serviço, sem prejuízo da remuneração, por três dias consecutivos em razão de casamento ou de falecimento do cônjuge, companheiro, pais, filhos, enteados, menor sob guarda ou tutela e irmãos.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "três dias consecutivos",
    cognitivo: {
      motivo: "Cobrar os oito dias do art. 99, III, frequentemente reduzidos.",
      palavraCritica: "três dias",
    },
    comentario: {
      resolucao: "ERRADO. O art. 99, III, garante OITO dias consecutivos, tanto para casamento quanto para o falecimento dos familiares que lista. Três dias é o prazo do luto na CLT e em vários regimes municipais, e é justamente essa familiaridade que a banca explora — o candidato reconhece o número de outro contexto e valida sem conferir. O rol de familiares do dispositivo é fiel: inclui padrasto e madrasta e o menor sob guarda ou tutela.",
      fundamento: "Lei estadual 5.247/1991, art. 99, III, alíneas 'a' e 'b'.",
      macete: "No RJU de Alagoas são 8 dias, não os 3 da CLT.",
      erroComum: "Importar o prazo de luto da legislação trabalhista.",
      comoBancaPensa: "Usa um numeral verdadeiro em outro regime jurídico para induzir o reconhecimento."
    }
  },
  {
    id: "LEA-029", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — ausências legais", subassunto: "Horário especial ao servidor estudante",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.64,
    enunciado: "Será concedido horário especial ao servidor estudante quando comprovada a incompatibilidade entre o horário escolar e o da repartição, sem prejuízo do exercício do cargo.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "sem prejuízo do exercício do cargo",
    cognitivo: {
      motivo: "Fixar que o horário especial não reduz a carga, apenas a redistribui.",
      palavraCritica: "sem prejuízo do exercício do cargo",
    },
    comentario: {
      resolucao: "CERTO. É o art. 100 da Lei 5.247/1991. A expressão final é o que o item testa: horário especial não é redução de jornada, é redistribuição dela — a carga das 40 horas semanais do art. 31 permanece, e o parágrafo único exige compensação. Item que apresente o instituto como diminuição da jornada estaria errado. A concessão também depende de comprovação da incompatibilidade, não da simples matrícula.",
      fundamento: "Lei estadual 5.247/1991, art. 100 e parágrafo único; art. 31.",
      macete: "Horário especial desloca a jornada; não encurta.",
      erroComum: "Ler o benefício como redução de carga horária.",
      comoBancaPensa: "Cobra a diferença entre flexibilizar e reduzir, que a prática costuma confundir."
    }
  },

  /* ---------- Regime disciplinar ---------- */
  {
    id: "LEA-030", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — regime disciplinar", subassunto: "Rol de penalidades",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.86,
    enunciado: "São penalidades disciplinares a advertência, a suspensão, a demissão, a cassação de aposentadoria ou disponibilidade, a destituição de função comissionada e a multa.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "e a multa",
    cognitivo: {
      motivo: "Cobrar que a multa não é penalidade autônoma, e sim conversão da suspensão.",
      palavraCritica: "multa",
    },
    comentario: {
      resolucao: "ERRADO. O art. 129 lista CINCO penalidades, e a multa não está entre elas. Ela existe na lei, mas em outra condição: o §2º do art. 132 permite converter a suspensão em multa quando houver conveniência para o serviço, com o servidor permanecendo em exercício. Ou seja, a multa é forma de cumprimento de uma penalidade, não penalidade em si — e é essa a distinção que o item apaga ao inseri-la no rol.",
      fundamento: "Lei estadual 5.247/1991, art. 129, I a V; art. 132, § 2º.",
      macete: "Cinco penalidades. Multa é conversão de suspensão, não penalidade autônoma.",
      erroComum: "Incluir a multa no rol por ela aparecer no capítulo disciplinar.",
      comoBancaPensa: "Acrescenta ao rol um instituto que existe na lei, mas com outra natureza."
    }
  },
  {
    id: "LEA-031", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — regime disciplinar", subassunto: "Limite da suspensão",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "A suspensão será aplicada em caso de reincidência nas faltas punidas com advertência e de violação das demais proibições que não tipifiquem infração sujeita a penalidade de demissão, não podendo exceder noventa dias.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não podendo exceder noventa dias",
    cognitivo: {
      motivo: "Fixar o teto da suspensão e as hipóteses que a autorizam.",
      palavraCritica: "noventa dias",
    },
    comentario: {
      resolucao: "CERTO. É o caput do art. 132 da Lei 5.247/1991. O dispositivo desenha a suspensão como penalidade intermediária: cabe na reincidência do que já rendeu advertência e nas violações que não chegam a justificar demissão. Guarde também o §1º, que traz uma suspensão específica de até quinze dias para o servidor que se recusa injustificadamente a submeter-se a inspeção médica — prazo bem menor e cobrado à parte.",
      fundamento: "Lei estadual 5.247/1991, art. 132, caput e § 1º.",
      macete: "Suspensão: teto de 90 dias; recusa a inspeção médica, até 15.",
      erroComum: "Aplicar o teto de 90 dias também à recusa de inspeção médica.",
      comoBancaPensa: "Um artigo com dois tetos distintos: cobra qual vale para cada hipótese."
    }
  },
  {
    id: "LEA-032", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — regime disciplinar", subassunto: "Conversão da suspensão em multa",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.7,
    enunciado: "A penalidade de suspensão poderá ser convertida em multa exclusivamente mediante requerimento do servidor punido, que permanecerá em exercício.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "exclusivamente mediante requerimento do servidor punido",
    cognitivo: {
      motivo: "Cobrar de quem é a iniciativa da conversão: da Administração, não do apenado.",
      palavraCritica: "requerimento do servidor punido",
    },
    comentario: {
      resolucao: "ERRADO. O §2º do art. 132 autoriza a conversão QUANDO HOUVER CONVENIÊNCIA PARA O SERVIÇO — o critério é da Administração, não do servidor. A lógica é administrativa, não benevolente: afastar um servidor por até noventa dias pode prejudicar mais o serviço do que ao punido, e a conversão permite manter o atendimento sem deixar a infração sem sanção. Item que dê ao apenado o poder de escolher como cumprir a pena inverte a titularidade da decisão.",
      fundamento: "Lei estadual 5.247/1991, art. 132, § 2º.",
      macete: "Converter suspensão em multa é conveniência do SERVIÇO, não pedido do servidor.",
      erroComum: "Ler a conversão como direito subjetivo do punido.",
      comoBancaPensa: "Transfere ao interessado uma competência que a lei dá à Administração."
    }
  },
  {
    id: "LEA-033", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — regime disciplinar", subassunto: "Hipóteses de demissão",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.85,
    enunciado: "A demissão será aplicada, entre outros casos, em hipóteses de crime contra a administração pública, abandono de cargo, inassiduidade habitual, improbidade administrativa e acumulação ilegal de cargos, empregos ou funções públicas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "acumulação ilegal de cargos",
    cognitivo: {
      motivo: "Fixar as hipóteses mais cobradas do art. 134.",
      palavraCritica: "inassiduidade habitual",
    },
    comentario: {
      resolucao: "CERTO. Todas constam do art. 134 da Lei 5.247/1991, que traz treze incisos. Distinção que a banca explora: ABANDONO DE CARGO e INASSIDUIDADE HABITUAL são infrações diferentes — o primeiro é a ausência intencional e continuada, a segunda é a falta reiterada e interpolada. E note que a acumulação ilegal só leva à demissão quando provada a má-fé: havendo boa-fé, o art. 135 manda o servidor optar por um dos cargos.",
      fundamento: "Lei estadual 5.247/1991, art. 134, I a XIII; art. 135.",
      macete: "Abandono é ausência contínua; inassiduidade é falta reiterada.",
      erroComum: "Tratar abandono e inassiduidade como sinônimos.",
      comoBancaPensa: "Rol longo: cobra as hipóteses cujos nomes se confundem entre si."
    }
  },
  {
    id: "LEA-034", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — regime disciplinar", subassunto: "Acumulação ilegal e boa-fé",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.79,
    enunciado: "Verificada em processo disciplinar a acumulação proibida de cargos e provada a boa-fé do servidor, ele perderá ambos os cargos e restituirá o que houver percebido indevidamente.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "provada a boa-fé ... perderá ambos os cargos",
    cognitivo: {
      motivo: "Separar a consequência da boa-fé da consequência da má-fé.",
      palavraCritica: "boa-fé",
    },
    comentario: {
      resolucao: "ERRADO. O item descreve a consequência da MÁ-FÉ sob o rótulo da boa-fé. O art. 135 é claro: provada a boa-fé, o servidor OPTA por um dos cargos e mantém o escolhido. Só o §1º, tratando da má-fé, prevê a perda também do cargo exercido há mais tempo e a restituição do que recebeu indevidamente. A lógica é a de sempre no direito administrativo sancionador: o elemento subjetivo gradua a consequência, e apagá-lo equipara quem errou por engano a quem fraudou.",
      fundamento: "Lei estadual 5.247/1991, art. 135, caput e §§ 1º e 2º.",
      macete: "Boa-fé: opta por um. Má-fé: perde os dois e devolve.",
      erroComum: "Aplicar a consequência da má-fé a quem agiu de boa-fé.",
      comoBancaPensa: "Mantém o dispositivo correto e troca a hipótese a que ele se aplica."
    }
  },
  {
    id: "LEA-035", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — regime disciplinar", subassunto: "Prazos de prescrição da ação disciplinar",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.9,
    enunciado: "A ação disciplinar prescreverá em cinco anos quanto às infrações puníveis com demissão, cassação de aposentadoria ou disponibilidade e destituição de cargo em comissão; em dois anos quanto à suspensão; e em cento e oitenta dias quanto à advertência.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "cinco anos ... dois anos ... cento e oitenta dias",
    cognitivo: {
      motivo: "Fixar os três prazos prescricionais, campeões de cobrança na disciplina.",
      palavraCritica: "cento e oitenta dias",
    },
    comentario: {
      resolucao: "CERTO. São os três incisos do art. 144 da Lei 5.247/1991, com os prazos exatos. A escada é proporcional à gravidade: quanto mais severa a penalidade, mais tempo a Administração tem para agir. Guarde ainda dois complementos muito cobrados: o §2º manda aplicar os prazos da lei penal às infrações que também sejam crime — o que pode ampliar muito o prazo —, e o §3º prevê que a abertura de sindicância ou a instauração de processo disciplinar INTERROMPE a prescrição até a decisão final.",
      fundamento: "Lei estadual 5.247/1991, art. 144, I a III e §§ 2º e 3º.",
      macete: "5 anos (demissão) · 2 anos (suspensão) · 180 dias (advertência).",
      erroComum: "Trocar os 180 dias por um ano.",
      comoBancaPensa: "Três numerais numa escada: cobra literal para depois permutar os degraus."
    }
  },
  {
    id: "LEA-036", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — regime disciplinar", subassunto: "Termo inicial da prescrição",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.84,
    enunciado: "O prazo de prescrição da ação disciplinar começa a correr da data em que a infração foi praticada pelo servidor.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "da data em que a infração foi praticada",
    cognitivo: {
      motivo: "Cobrar o termo inicial: ciência do fato, não sua prática.",
      palavraCritica: "praticada",
    },
    comentario: {
      resolucao: "ERRADO. O §1º do art. 144 conta o prazo da data em que o fato se TORNOU CONHECIDO, não da data em que foi praticado. A diferença é decisiva e tem razão de ser: infração disciplinar frequentemente é oculta, e contar da prática premiaria quem conseguisse esconder o ato pelo tempo do prazo. Some-se a isso o §3º — sindicância ou processo disciplinar interrompem a contagem —, e o quadro é de um regime que dificulta a impunidade pelo decurso do tempo.",
      fundamento: "Lei estadual 5.247/1991, art. 144, §§ 1º e 3º.",
      macete: "Prescrição corre da CIÊNCIA do fato, não da prática.",
      erroComum: "Aplicar a regra penal do termo inicial à prescrição disciplinar.",
      comoBancaPensa: "Substitui o marco legal por outro que parece natural para quem pensa em direito penal."
    }
  },
  {
    id: "LEA-037", disciplina: "Legislação Estadual (AL)", assunto: "Lei 5.247/1991 — regime disciplinar", subassunto: "Competência para aplicar penalidades",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.73,
    enunciado: "Compete ao chefe da repartição, na forma dos respectivos regimentos ou regulamentos, aplicar as penalidades de advertência e de suspensão de até trinta dias.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "suspensão de até trinta dias",
    cognitivo: {
      motivo: "Fixar a escada de competências do art. 143, graduada pela gravidade.",
      palavraCritica: "até trinta dias",
    },
    comentario: {
      resolucao: "CERTO. É o inciso III do art. 143 da Lei 5.247/1991. A competência é escalonada conforme a gravidade: as penalidades mais graves — demissão, cassação, destituição — cabem à autoridade que teria competência para prover o cargo (inciso I); a suspensão superior a trinta dias, à autoridade de hierarquia imediatamente inferior a essa (inciso II); e advertência e suspensão de até trinta dias, ao chefe da repartição. Quanto mais grave a sanção, mais alta a autoridade — e o art. 142 exige que o ato sempre mencione o fundamento legal e a causa.",
      fundamento: "Lei estadual 5.247/1991, art. 143, I a III; art. 142.",
      macete: "Quanto mais grave a pena, mais alta a autoridade que a aplica.",
      erroComum: "Supor que toda penalidade depende de ato do titular do órgão.",
      comoBancaPensa: "Escada de competências: cobra o degrau, esperando confusão entre os incisos."
    }
  },

  /* ---------- Constituição do Estado de Alagoas ---------- */
  {
    id: "LEA-038", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Regime jurídico único (art. 54)",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.76,
    enunciado: "A Constituição do Estado de Alagoas determina a instituição de regime jurídico único para os servidores da administração pública direta, das autarquias e das fundações públicas estaduais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "administração direta, das autarquias e das fundações públicas",
    cognitivo: {
      motivo: "Fixar o alcance subjetivo do regime único, que é o mesmo da Lei 5.247/1991.",
      palavraCritica: "autarquias e das fundações públicas",
    },
    comentario: {
      resolucao: "CERTO. É o art. 54 da Constituição do Estado de Alagoas, e o alcance que ele define — direta, autarquias e fundações públicas — é exatamente o que a Lei 5.247/1991 reproduz no art. 1º e já anuncia no próprio título. Fora desse perímetro ficam as empresas públicas e sociedades de economia mista, cujos empregados seguem o regime celetista; é lá que a Constituição estadual, no art. 62, manda aplicar os direitos trabalhistas correspondentes.",
      fundamento: "Constituição do Estado de Alagoas, arts. 54 e 62; Lei estadual 5.247/1991, art. 1º.",
      macete: "RJU alcança direta + autarquias + fundações. Estatais, não.",
      erroComum: "Estender o regime único aos empregados de empresas públicas e sociedades de economia mista.",
      comoBancaPensa: "Cobra o perímetro subjetivo, que define quem responde pelas regras seguintes."
    }
  },
  {
    id: "LEA-039", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Lotação de cônjuges e companheiros (art. 56)",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.68,
    enunciado: "A Constituição do Estado de Alagoas veda, em qualquer hipótese, a lotação de cônjuges ou companheiros na mesma repartição pública estadual.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "em qualquer hipótese",
    cognitivo: {
      motivo: "Cobrar que a regra do art. 56 é de garantia de lotação conjunta, não de vedação.",
      palavraCritica: "veda, em qualquer hipótese",
    },
    comentario: {
      resolucao: "ERRADO — e o item inverte o sentido da norma. O art. 56 da Constituição estadual não proíbe: ele assegura ao servidor o direito de ser lotado na mesma localidade do cônjuge ou companheiro, também servidor, em proteção à unidade familiar que a Constituição Federal tutela no art. 226. A leitura do item confunde a matéria com as vedações de nepotismo, que tratam de nomeação para cargo em comissão por autoridade parente — assunto diverso, e que não alcança servidor efetivo aprovado em concurso.",
      fundamento: "Constituição do Estado de Alagoas, art. 56; CF/88, art. 226.",
      macete: "O art. 56 aproxima a família; não separa.",
      erroComum: "Associar o dispositivo às regras de vedação ao nepotismo.",
      comoBancaPensa: "Inverte a finalidade da norma e reforça com termo absoluto."
    }
  },
  {
    id: "LEA-040", disciplina: "Legislação Estadual (AL)", assunto: "Constituição do Estado de Alagoas", subassunto: "Mora na apreciação da aposentadoria (art. 57, §3º)",
    concurso: "SESAU", cargo: ["Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.64,
    enunciado: "A Constituição do Estado de Alagoas estabelece prazo para a apreciação do pedido de aposentadoria do servidor, com consequências para a autoridade que der causa à mora.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "consequências para a autoridade que der causa à mora",
    cognitivo: {
      motivo: "Fixar a existência de prazo e de responsabilização pela demora no ato de aposentadoria.",
      palavraCritica: "mora",
    },
    comentario: {
      resolucao: "CERTO. O §3º do art. 57 da Constituição do Estado de Alagoas fixa prazo para a apreciação do requerimento de aposentadoria e imputa consequências a quem der causa ao atraso. O dispositivo se explica pelo efeito prático da demora: enquanto o pedido não é apreciado, o servidor permanece em atividade, e a inércia administrativa converte-se em prejuízo pessoal. É norma de eficiência e de responsabilização, no mesmo espírito do art. 37, caput, da Constituição Federal após a EC 19/1998.",
      fundamento: "Constituição do Estado de Alagoas, art. 57, § 3º; CF/88, art. 37, caput.",
      macete: "Aposentadoria tem prazo para ser apreciada, e a mora responsabiliza.",
      erroComum: "Supor que a apreciação do pedido não tem prazo constitucional estadual.",
      comoBancaPensa: "Cobra dispositivo estadual sem paralelo federal exato, que escapa de quem só estudou a CF."
    }
  },
];

QUESTOES.push(...QUESTOES_SESAUAL_LOTE60);
