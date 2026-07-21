/* =====================================================================
   CEBRASPE LAB — Lote 14: CONSTITUIÇÃO DO ESTADO DE ALAGOAS
   Recorte do edital PC-AL 2026: SERVIDORES PÚBLICOS e SEGURANÇA PÚBLICA.
   20 itens INÉDITOS (10 Certo / 10 Errado), com referência aos artigos
   da Constituição Estadual (arts. 54 a 65 e sistema de segurança).

   ⚠ RESSALVA METODOLÓGICA IMPORTANTE
   Não foram elaboradas questões sobre IDADE ou TEMPO DE CONTRIBUIÇÃO
   para aposentadoria (art. 57). O texto original da Constituição
   estadual prevê compulsória aos 70 anos e regras de 35/30 anos, mas
   esses dispositivos foram SUPERADOS no plano federal pela EC 88/2015
   e LC 152/2015 (compulsória aos 75 anos) e, sobretudo, pela EC
   103/2019 (Reforma da Previdência), de observância obrigatória pelos
   estados. Cobrar o texto estadual literal nesse ponto ensinaria regra
   desatualizada. Mantiveram-se apenas as garantias PROCEDIMENTAIS do
   art. 57 (como o § 3º), que não foram atingidas pela reforma.

   Fonte: texto da Constituição do Estado de Alagoas (material de
   estudo fornecido pelo usuário). Não reproduz questões de terceiros.
   ===================================================================== */

const QUESTOES_PCAL_LOTE14 = [

  /* ===== SERVIDORES PÚBLICOS — REGIME, REMUNERAÇÃO E JORNADA ===== */
  {
    id: "LI-024", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Regime jurídico único (art. 54)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.88,
    enunciado: "O Estado de Alagoas e seus municípios devem instituir regime jurídico único para todos os servidores da administração direta, autárquica e fundacional.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "direta, autárquica e fundacional",
    cognitivo: {
      motivo: "Cobrar o alcance do regime jurídico único na Constituição estadual (art. 54).",
      mede: "Constituição de Alagoas — servidores públicos.",
      pegadinhaDesc: "A banca costuma incluir as empresas públicas e sociedades de economia mista no alcance do RJU.",
      ondeErra: "Estende o RJU à administração indireta de direito privado.",
      palavraCritica: "direta, autárquica e fundacional",
      tecnica: "RJU alcança direta + autarquias + fundações. Estatais (EP/SEM) seguem regime celetista.",
      regraMental: "RJU = direito público. Empresa pública e SEM ficam de fora (são CLT)."
    },
    comentario: {
      resolucao: "CERTO. A Constituição do Estado de Alagoas (art. 54) determina a instituição de regime jurídico único para os servidores da administração direta, autárquica e fundacional, além de prever a obrigatoriedade de planos de carreira. As empresas públicas e sociedades de economia mista não são alcançadas, por se submeterem ao regime celetista.",
      fundamento: "Constituição do Estado de Alagoas, art. 54.",
      macete: "RJU: direta, autárquica e fundacional. Estatal é CLT.",
      erroComum: "Incluir EP e SEM no regime jurídico único.",
      comoBancaPensa: "Amplia indevidamente o rol de entidades alcançadas."
    }
  },
  {
    id: "LI-025", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Piso salarial (art. 55)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.82,
    enunciado: "O piso salarial dos servidores públicos do Estado de Alagoas nunca poderá ser inferior a dois salários mínimos nacionais.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "dois salários mínimos",
    cognitivo: {
      motivo: "Cobrar o piso remuneratório previsto na Constituição estadual (art. 55).",
      mede: "Constituição de Alagoas — remuneração dos servidores.",
      pegadinhaDesc: "Dobra o piso: troca 'salário mínimo' por 'dois salários mínimos'.",
      ondeErra: "Não retém o número exato do piso.",
      palavraCritica: "dois (o correto é um salário mínimo)",
      tecnica: "O piso é o salário mínimo nacional — mesma lógica do art. 7º, IV, da CF.",
      regraMental: "Piso do servidor = 1 salário mínimo. Nunca 'dois'."
    },
    comentario: {
      resolucao: "ERRADO. A Constituição do Estado de Alagoas (art. 55) assegura piso salarial nunca inferior ao SALÁRIO MÍNIMO NACIONAL — e não a dois salários mínimos. A garantia acompanha o padrão do art. 7º, IV, da Constituição Federal.",
      fundamento: "Constituição do Estado de Alagoas, art. 55; CF, art. 7º, IV.",
      macete: "Piso = um salário mínimo nacional.",
      erroComum: "Multiplicar o piso constitucional.",
      comoBancaPensa: "Troca numérica simples em garantia remuneratória."
    }
  },
  {
    id: "LI-026", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Jornada de trabalho (art. 55)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.82,
    enunciado: "A jornada de trabalho dos servidores públicos estaduais é de até oito horas diárias e quarenta horas semanais, admitida a compensação de horários.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "8 horas diárias / 40 semanais",
    cognitivo: {
      motivo: "Cobrar os limites de jornada previstos na Constituição estadual.",
      mede: "Constituição de Alagoas — jornada dos servidores.",
      pegadinhaDesc: "A banca costuma alterar para 44 horas semanais (padrão celetista) ou 6 horas diárias.",
      ondeErra: "Confunde com a jornada de 44 horas do art. 7º, XIII, da CF.",
      palavraCritica: "8 diárias / 40 semanais",
      tecnica: "Atenção: o limite estadual para servidores é 40 semanais, e não 44.",
      regraMental: "Servidor em AL: 8h/dia e 40h/semana, com compensação admitida."
    },
    comentario: {
      resolucao: "CERTO. A Constituição do Estado de Alagoas (art. 55) fixa jornada de até 8 horas diárias e 40 horas semanais, admitida a compensação de horários. Note-se a diferença em relação ao limite geral de 44 horas semanais do art. 7º, XIII, da CF, aplicável aos trabalhadores em geral.",
      fundamento: "Constituição do Estado de Alagoas, art. 55.",
      macete: "40 semanais (servidor estadual), não 44.",
      erroComum: "Aplicar as 44 horas semanais da CLT/CF.",
      comoBancaPensa: "Cruza o limite estadual com o federal para induzir o erro."
    }
  },
  {
    id: "LI-027", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Adicional de horas extras e noturno (art. 55)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.8,
    enunciado: "O adicional devido pelos serviços extraordinários e noturnos deve corresponder a, no mínimo, cinquenta por cento sobre o valor da hora normal de trabalho.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "no mínimo 50%",
    cognitivo: {
      motivo: "Cobrar o percentual mínimo do adicional na Constituição estadual.",
      mede: "Constituição de Alagoas — adicionais.",
      pegadinhaDesc: "A banca costuma reduzir para 20% ou 30%.",
      ondeErra: "Não memoriza o percentual mínimo.",
      palavraCritica: "no mínimo 50%",
      tecnica: "O adicional alcança tanto o serviço extraordinário quanto o noturno, com piso de 50%.",
      regraMental: "Hora extra e noturna em AL: mínimo de 50% sobre a hora normal."
    },
    comentario: {
      resolucao: "CERTO. A Constituição do Estado de Alagoas (art. 55) prevê adicional mínimo de 50% sobre o valor da hora normal para os serviços extraordinários e noturnos, além de assegurar repouso semanal remunerado, preferencialmente aos domingos.",
      fundamento: "Constituição do Estado de Alagoas, art. 55.",
      macete: "Extraordinário e noturno: piso de 50%.",
      erroComum: "Reduzir o percentual mínimo.",
      comoBancaPensa: "Percentuais são ponto de checagem obrigatório."
    }
  },

  /* ===== LOTAÇÃO, ESTABILIDADE E DISPONIBILIDADE ===== */
  {
    id: "LI-028", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Lotação de cônjuges e companheiros (art. 56)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "O direito à lotação na mesma localidade, assegurado pela Constituição estadual, alcança apenas os cônjuges, não se estendendo aos companheiros em união estável.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "apenas os cônjuges",
    cognitivo: {
      motivo: "Cobrar o alcance subjetivo do art. 56 da Constituição estadual.",
      mede: "Constituição de Alagoas — servidores públicos.",
      pegadinhaDesc: "Restringe o direito aos cônjuges, excluindo os companheiros.",
      ondeErra: "Ignora a equiparação da união estável à entidade familiar.",
      palavraCritica: "cônjuges E companheiros",
      tecnica: "O dispositivo alcança cônjuges OU companheiros, em coerência com o art. 226, § 3º, da CF.",
      regraMental: "Casamento e união estável: mesmo tratamento para a lotação conjunta."
    },
    comentario: {
      resolucao: "ERRADO. A Constituição do Estado de Alagoas (art. 56) assegura o direito à lotação na mesma localidade tanto para CÔNJUGES quanto para COMPANHEIROS que sejam servidores públicos, em consonância com o reconhecimento da união estável como entidade familiar (CF, art. 226, § 3º).",
      fundamento: "Constituição do Estado de Alagoas, art. 56; CF, art. 226, § 3º.",
      macete: "Cônjuge ou companheiro: os dois têm o direito.",
      erroComum: "Excluir a união estável do alcance da norma.",
      comoBancaPensa: "Restringe o rol de beneficiários do direito."
    }
  },
  {
    id: "LI-029", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Lotação conjunta — exceção (art. 56)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "Tratando-se de membros da Magistratura ou do Ministério Público, o direito à lotação na mesma localidade somente se aplica quando houver mais de uma Vara na comarca.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "mais de uma Vara na comarca",
    cognitivo: {
      motivo: "Cobrar a ressalva específica do art. 56 para Magistratura e MP.",
      mede: "Constituição de Alagoas — servidores públicos.",
      pegadinhaDesc: "A banca costuma suprimir a condição ('mais de uma Vara') ou negar a exceção.",
      ondeErra: "Aplica a regra geral sem observar a ressalva das carreiras jurídicas.",
      palavraCritica: "mais de uma Vara na comarca",
      tecnica: "A restrição existe para preservar a organização judiciária: numa comarca de Vara única, não caberia a lotação conjunta.",
      regraMental: "Magistratura/MP: lotação conjunta só se a comarca tiver mais de uma Vara."
    },
    comentario: {
      resolucao: "CERTO. A Constituição do Estado de Alagoas (art. 56) ressalva que, para membros da Magistratura ou do Ministério Público, o direito à lotação na mesma localidade fica condicionado à existência de mais de uma Vara na comarca, em respeito às especificidades da organização judiciária.",
      fundamento: "Constituição do Estado de Alagoas, art. 56.",
      macete: "Comarca de Vara única: não cabe a lotação conjunta para juiz/promotor.",
      erroComum: "Ignorar a condição específica dessas carreiras.",
      comoBancaPensa: "Cobra a exceção embutida no dispositivo."
    }
  },
  {
    id: "LI-030", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Mora na apreciação da aposentadoria (art. 57, § 3º)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "Decorridos trinta dias do requerimento de aposentadoria sem decisão da administração, o servidor fica desobrigado de trabalhar, mantendo a remuneração integral até a decisão final.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "trinta dias / remuneração integral",
    cognitivo: {
      motivo: "Cobrar a garantia procedimental do art. 57, § 3º, da Constituição estadual.",
      mede: "Constituição de Alagoas — servidores públicos.",
      pegadinhaDesc: "A banca costuma alterar o prazo ou reduzir a remuneração a proporcional.",
      ondeErra: "Não conhece essa garantia, que é peculiar da Constituição alagoana.",
      palavraCritica: "30 dias / remuneração integral",
      tecnica: "É norma antimorosidade: a inércia da administração não pode prejudicar o servidor.",
      regraMental: "Pediu aposentadoria e passaram 30 dias sem resposta: para de trabalhar e continua recebendo integral."
    },
    comentario: {
      resolucao: "CERTO. A Constituição do Estado de Alagoas (art. 57, § 3º) estabelece que, decorridos 30 dias do pedido de aposentadoria sem resposta da administração, o servidor fica desobrigado de trabalhar, mantendo a remuneração integral até a decisão final. Trata-se de garantia procedimental contra a morosidade administrativa, não atingida pelas reformas previdenciárias.",
      fundamento: "Constituição do Estado de Alagoas, art. 57, § 3º.",
      macete: "30 dias de silêncio = pode parar de trabalhar, recebendo integral.",
      erroComum: "Trocar o prazo ou tornar a remuneração proporcional.",
      comoBancaPensa: "Dispositivo peculiar e literal — alvo de troca numérica."
    }
  },
  {
    id: "LI-031", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Estabilidade do servidor",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.85,
    enunciado: "A estabilidade no serviço público estadual é adquirida pelos servidores aprovados em concurso público após dois anos de efetivo exercício no cargo.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "dois anos",
    cognitivo: {
      motivo: "Cobrar o prazo de estabilidade.",
      mede: "Constituição de Alagoas — estabilidade.",
      pegadinhaDesc: "Reduz o prazo de 3 para 2 anos (redação anterior à EC 19/1998).",
      ondeErra: "Usa o prazo antigo, revogado no plano federal.",
      palavraCritica: "dois (o correto é três anos)",
      tecnica: "Estabilidade: 3 anos de efetivo exercício, na linha do art. 41 da CF (EC 19/1998).",
      regraMental: "Estabilidade = 3 anos. Igual ao prazo da LONPC para o policial civil."
    },
    comentario: {
      resolucao: "ERRADO. A estabilidade é adquirida após 3 (TRÊS) anos de efetivo exercício no cargo, para os servidores nomeados em virtude de concurso público, conforme o art. 41 da CF (com a redação da EC 19/1998), observado pela ordem estadual. O prazo de 2 anos corresponde à redação originária, hoje superada.",
      fundamento: "CF, art. 41; Constituição do Estado de Alagoas — servidores públicos.",
      macete: "Estabilidade: 3 anos. E a perda do cargo exige PAD com ampla defesa.",
      erroComum: "Usar o prazo de 2 anos (texto anterior à EC 19/1998).",
      comoBancaPensa: "Explora a redação revogada para induzir o erro."
    }
  },
  {
    id: "LI-032", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Disponibilidade por extinção do cargo",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.78,
    enunciado: "Extinto o cargo ou declarada a sua desnecessidade, o servidor estável será posto em disponibilidade, com remuneração proporcional ao tempo de serviço e aproveitamento prioritário em vaga compatível.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "remuneração proporcional",
    cognitivo: {
      motivo: "Cobrar o regime da disponibilidade do servidor estável.",
      mede: "Constituição de Alagoas — estabilidade e disponibilidade.",
      pegadinhaDesc: "A banca costuma trocar 'proporcional' por 'integral'.",
      ondeErra: "Confunde a disponibilidade (proporcional) com outros institutos.",
      palavraCritica: "proporcional ao tempo de serviço",
      tecnica: "Disponibilidade: o vínculo é mantido, com remuneração PROPORCIONAL, até o aproveitamento em cargo compatível.",
      regraMental: "Cargo extinto: servidor estável vai para disponibilidade — proporcional, não integral."
    },
    comentario: {
      resolucao: "CERTO. Extinto o cargo ou declarada sua desnecessidade, o servidor estável é posto em disponibilidade com remuneração proporcional ao tempo de serviço, assegurado o aproveitamento prioritário em vaga compatível — em linha com o art. 41, § 3º, da CF.",
      fundamento: "Constituição do Estado de Alagoas — servidores públicos; CF, art. 41, § 3º.",
      macete: "Disponibilidade = proporcional. Não é salário integral.",
      erroComum: "Afirmar remuneração integral na disponibilidade.",
      comoBancaPensa: "Troca proporcional × integral no regime da disponibilidade."
    }
  },
  {
    id: "LI-033", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Participação em órgãos colegiados",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.72,
    enunciado: "É permitido ao servidor público civil ou militar do Estado de Alagoas participar simultaneamente de mais de um órgão colegiado remunerado, desde que haja compatibilidade de horários.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "participar simultaneamente",
    cognitivo: {
      motivo: "Cobrar a vedação à acumulação em órgãos colegiados remunerados.",
      mede: "Constituição de Alagoas — vedações aos servidores.",
      pegadinhaDesc: "Cria a condição de 'compatibilidade de horários', que não afasta a vedação.",
      ondeErra: "Aplica a lógica da acumulação de cargos (que admite compatibilidade) a hipótese vedada.",
      palavraCritica: "vedada a participação em mais de um",
      tecnica: "A vedação é objetiva: um único órgão colegiado remunerado, independentemente de horários.",
      regraMental: "Órgão colegiado remunerado: só um. Compatibilidade de horário não salva."
    },
    comentario: {
      resolucao: "ERRADO. A Constituição do Estado de Alagoas veda que servidores civis ou militares participem simultaneamente de mais de um órgão colegiado remunerado. A vedação é objetiva e não é afastada por eventual compatibilidade de horários — o objetivo é impedir acumulações indevidas de remuneração.",
      fundamento: "Constituição do Estado de Alagoas — vedações aos servidores públicos.",
      macete: "Colegiado remunerado: um só, sem exceção por horário.",
      erroComum: "Importar a regra de compatibilidade de horários da acumulação de cargos.",
      comoBancaPensa: "Insere condição inexistente que aparenta legitimar a conduta."
    }
  },
  {
    id: "LI-034", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Empregados de estatais (art. 62)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 45, probReaparecer: 0.7,
    enunciado: "Aos empregados das empresas públicas e das sociedades de economia mista do Estado de Alagoas é assegurado o direito à participação nos lucros e na gestão da empresa.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "nos lucros e na gestão",
    cognitivo: {
      motivo: "Cobrar o direito previsto no art. 62 da Constituição estadual.",
      mede: "Constituição de Alagoas — empregados de estatais.",
      pegadinhaDesc: "A banca costuma suprimir a 'participação na gestão', deixando só os lucros.",
      ondeErra: "Reduz o direito à participação nos lucros.",
      palavraCritica: "lucros E gestão",
      tecnica: "São dois direitos: participação nos lucros e participação na gestão, com percentual definido pelo órgão superior competente.",
      regraMental: "Estatal em AL: empregado participa dos lucros e também da gestão."
    },
    comentario: {
      resolucao: "CERTO. A Constituição do Estado de Alagoas (art. 62) garante aos empregados das empresas públicas e sociedades de economia mista estaduais o direito à participação nos lucros e na gestão da empresa, cabendo a definição do percentual ao órgão superior competente, na forma da lei.",
      fundamento: "Constituição do Estado de Alagoas, art. 62; CF, art. 7º, XI.",
      macete: "Lucros + gestão (os dois). Não é só participação nos resultados.",
      erroComum: "Suprimir a participação na gestão.",
      comoBancaPensa: "Reduz o alcance do direito assegurado."
    }
  },

  /* ===== SERVIDORES MILITARES ESTADUAIS ===== */
  {
    id: "LI-035", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Conferimento de patentes",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "As patentes dos oficiais militares estaduais são conferidas pelo Comandante-Geral da Polícia Militar, com prerrogativas asseguradas apenas durante a atividade.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "Comandante-Geral / apenas na atividade",
    cognitivo: {
      motivo: "Cobrar quem confere as patentes e o alcance das prerrogativas.",
      mede: "Constituição de Alagoas — servidores militares.",
      pegadinhaDesc: "Erra duas vezes: a autoridade e a extensão das prerrogativas.",
      ondeErra: "Confunde o comando da corporação com a autoridade que confere a patente.",
      palavraCritica: "Governador / ativa, reserva e reforma",
      tecnica: "Patentes: conferidas pelo GOVERNADOR, com prerrogativas na ativa, na reserva E na reforma.",
      regraMental: "Quem dá a patente é o Governador — e ela acompanha o militar mesmo inativo."
    },
    comentario: {
      resolucao: "ERRADO. Segundo a Constituição do Estado de Alagoas, as patentes são conferidas pelo GOVERNADOR DO ESTADO, e as prerrogativas são asseguradas em todas as situações funcionais: ativa, reserva e reforma. A assertiva erra na autoridade competente e ao restringir as prerrogativas à atividade.",
      fundamento: "Constituição do Estado de Alagoas — servidores militares estaduais; CF, art. 42.",
      macete: "Patente: dada pelo Governador e vale na ativa, reserva e reforma.",
      erroComum: "Atribuir o conferimento ao Comandante-Geral.",
      comoBancaPensa: "Combina troca de sujeito com restrição indevida do direito."
    }
  },
  {
    id: "LI-036", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Filiação partidária de militares",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 40, probReaparecer: 0.75,
    enunciado: "É facultada ao militar estadual em atividade a filiação a partido político, desde que não exerça atividade político-partidária durante o expediente.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "facultada a filiação",
    cognitivo: {
      motivo: "Cobrar a vedação à filiação partidária do militar em atividade.",
      mede: "Constituição de Alagoas — servidores militares.",
      pegadinhaDesc: "Cria uma condição ('fora do expediente') que aparenta legitimar o que é vedado.",
      ondeErra: "Supõe que a vedação se limita ao exercício de atividade partidária no serviço.",
      palavraCritica: "vedação à filiação (não apenas à atividade)",
      tecnica: "A vedação alcança a própria FILIAÇÃO enquanto o militar estiver em atividade, para preservar a neutralidade institucional.",
      regraMental: "Militar da ativa não se filia a partido. Nem fora do expediente."
    },
    comentario: {
      resolucao: "ERRADO. A Constituição do Estado de Alagoas veda a filiação partidária do militar enquanto em atividade, preservando a neutralidade institucional — vedação que acompanha o art. 142, § 3º, V, da CF, aplicável aos militares estaduais por força do art. 42. A proibição alcança a própria filiação, e não apenas a prática de atos partidários no expediente.",
      fundamento: "Constituição do Estado de Alagoas — servidores militares; CF, arts. 42 e 142, § 3º, V.",
      macete: "Militar da ativa: proibido até de se filiar. Para concorrer, precisa se afastar/agregar.",
      erroComum: "Restringir a vedação à atividade partidária no serviço.",
      comoBancaPensa: "Cria condição que aparenta compatibilizar o proibido."
    }
  },
  {
    id: "LI-037", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Perda de posto e patente",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.72,
    enunciado: "O oficial militar estadual somente perderá o posto e a patente se for julgado indigno do oficialato ou com ele incompatível por decisão do órgão colegiado militar competente, sendo a esse julgamento submetido o oficial condenado a pena privativa de liberdade superior a dois anos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "julgado indigno / superior a dois anos",
    cognitivo: {
      motivo: "Cobrar o regime de perda de posto e patente do oficial.",
      mede: "Constituição de Alagoas — servidores militares.",
      pegadinhaDesc: "A banca costuma trocar o prazo da pena (2 anos) ou dispensar o julgamento pelo Conselho.",
      ondeErra: "Supõe que a condenação criminal, por si só, acarreta a perda automática.",
      palavraCritica: "julgamento pelo colegiado / pena superior a 2 anos",
      tecnica: "A perda não é automática: depende de julgamento pelo Conselho de Justiça competente.",
      regraMental: "Condenação acima de 2 anos → vai a julgamento no Conselho. A perda não é automática."
    },
    comentario: {
      resolucao: "CERTO. O oficial só perde posto e patente se julgado indigno do oficialato ou com ele incompatível, por decisão de órgão colegiado militar competente (Conselho de Justiça). O oficial condenado a pena privativa de liberdade superior a 2 anos, por sentença transitada em julgado, é submetido a esse julgamento — que não é automático. A perda de graduação das praças é definida em legislação específica.",
      fundamento: "Constituição do Estado de Alagoas — servidores militares; CF, art. 125, § 4º, e art. 142, § 3º, VI e VII.",
      macete: "Perda de patente exige Conselho. Condenação > 2 anos leva ao julgamento.",
      erroComum: "Tratar a perda como efeito automático da condenação.",
      comoBancaPensa: "Cobra o dispositivo íntegro e, em variação, torna a perda automática."
    }
  },

  /* ===== SISTEMA DE SEGURANÇA PÚBLICA ===== */
  {
    id: "LI-038", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Segurança pública — conceito",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 1, tempoIdealSeg: 35, probReaparecer: 0.88,
    enunciado: "A segurança pública constitui dever do Estado, direito e responsabilidade de todos, tendo por objetivos a preservação da ordem pública e a incolumidade das pessoas e do patrimônio.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "dever do Estado, direito e responsabilidade de todos",
    cognitivo: {
      motivo: "Cobrar o conceito de segurança pública na Constituição estadual, espelhado no art. 144 da CF.",
      mede: "Constituição de Alagoas — sistema de segurança pública.",
      pegadinhaDesc: "A banca costuma trocar 'responsabilidade de todos' por 'exclusividade estatal'.",
      ondeErra: "Reduz a segurança pública a dever exclusivo do Estado.",
      palavraCritica: "responsabilidade de todos",
      tecnica: "Mesma fórmula do art. 144, caput, da CF: dever do Estado, direito E responsabilidade de todos.",
      regraMental: "Segurança pública: dever do Estado, mas também responsabilidade de todos."
    },
    comentario: {
      resolucao: "CERTO. A Constituição do Estado de Alagoas reproduz a fórmula do art. 144, caput, da Constituição Federal: a segurança pública é dever do Estado, direito e responsabilidade de todos, exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio.",
      fundamento: "Constituição do Estado de Alagoas — segurança pública; CF, art. 144, caput.",
      macete: "Dever do Estado + direito e responsabilidade de TODOS.",
      erroComum: "Tratar a segurança pública como monopólio estatal sem corresponsabilidade social.",
      comoBancaPensa: "Suprime a corresponsabilidade da sociedade."
    }
  },
  {
    id: "LI-039", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Subordinação da Polícia Civil",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.85,
    enunciado: "A Polícia Civil de Alagoas, incumbida das funções de polícia judiciária e da apuração de infrações penais, exceto as militares, subordina-se diretamente ao Secretário de Estado da Segurança Pública.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "Secretário de Segurança",
    cognitivo: {
      motivo: "Cobrar a subordinação constitucional das polícias.",
      mede: "Constituição de Alagoas — segurança pública.",
      pegadinhaDesc: "Troca o Governador pelo Secretário de Segurança na subordinação constitucional.",
      ondeErra: "Confunde a vinculação administrativa cotidiana com a subordinação prevista na Constituição.",
      palavraCritica: "Governador (não Secretário)",
      tecnica: "CF, art. 144, § 6º: as polícias subordinam-se aos GOVERNADORES. A Constituição estadual repete a fórmula.",
      regraMental: "Constitucionalmente, a PC se subordina ao Governador — não ao Secretário."
    },
    comentario: {
      resolucao: "ERRADO. A Polícia Civil, como órgão de segurança pública, subordina-se ao GOVERNADOR DO ESTADO, conforme a fórmula do art. 144, § 6º, da CF, reproduzida na Constituição estadual. A primeira parte do item (polícia judiciária e apuração de infrações penais, exceto as militares) está correta; o erro está na autoridade a que se subordina.",
      fundamento: "Constituição do Estado de Alagoas — segurança pública; CF, art. 144, §§ 4º e 6º.",
      macete: "Subordinação constitucional: Governador. O item começa certo e erra no fim.",
      erroComum: "Indicar o Secretário de Segurança como autoridade de subordinação constitucional.",
      comoBancaPensa: "Verdade + falso emendado: a definição correta 'carrega' a subordinação errada."
    }
  },
  {
    id: "LI-040", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Guardas municipais — porte de arma",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "Nos termos da Constituição do Estado de Alagoas, os integrantes das guardas municipais podem portar arma de fogo sem restrições, independentemente de autorização específica.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "sem restrições",
    cognitivo: {
      motivo: "Cobrar a restrição estadual ao porte de arma pelas guardas municipais.",
      mede: "Constituição de Alagoas — segurança pública.",
      pegadinhaDesc: "Absolutiza um direito que a Constituição estadual condiciona a autorização.",
      ondeErra: "Ignora a exigência de autorização específica.",
      palavraCritica: "sem restrições (falso)",
      tecnica: "A Constituição estadual veda o porte, salvo autorização específica do Secretário de Segurança.",
      regraMental: "Guarda municipal em AL: porte vedado, salvo autorização específica do Secretário de Segurança."
    },
    comentario: {
      resolucao: "ERRADO. A Constituição do Estado de Alagoas veda o porte de arma de fogo pelos integrantes das guardas municipais, ressalvada a autorização específica do Secretário de Segurança. Não há, portanto, porte livre e irrestrito.",
      fundamento: "Constituição do Estado de Alagoas — segurança pública; cf. Lei 10.826/2003, art. 6º.",
      macete: "Guarda municipal: porte só com autorização específica.",
      erroComum: "Tratar o porte como livre para as guardas municipais.",
      comoBancaPensa: "Termo absoluto ('sem restrições') sobre direito condicionado."
    }
  },
  {
    id: "LI-041", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Guardas municipais — criação e supervisão",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.75,
    enunciado: "Os municípios alagoanos podem criar guardas municipais na forma de lei complementar estadual, ficando essas guardas supervisionadas operacionalmente pela Polícia Militar do Estado.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "lei complementar estadual / supervisão da PM",
    cognitivo: {
      motivo: "Cobrar o regime de criação e supervisão das guardas municipais na Constituição estadual.",
      mede: "Constituição de Alagoas — segurança pública.",
      pegadinhaDesc: "A banca costuma trocar 'lei complementar estadual' por lei municipal ou negar a supervisão.",
      ondeErra: "Não retém a exigência de lei complementar estadual nem a supervisão operacional.",
      palavraCritica: "lei complementar estadual + supervisão pela PM",
      tecnica: "Dois pontos: a forma de criação (lei complementar estadual) e a supervisão operacional (Polícia Militar).",
      regraMental: "Guarda municipal em AL: nasce por lei complementar estadual e é supervisionada pela PM."
    },
    comentario: {
      resolucao: "CERTO. A Constituição do Estado de Alagoas prevê que os municípios podem constituir guardas municipais na forma de lei complementar estadual, cabendo à Polícia Militar do Estado a supervisão operacional dessas guardas.",
      fundamento: "Constituição do Estado de Alagoas — segurança pública; CF, art. 144, § 8º.",
      macete: "Criação: lei complementar estadual. Supervisão operacional: PM.",
      erroComum: "Atribuir a criação a simples lei municipal.",
      comoBancaPensa: "Cobra os dois elementos (criação e supervisão) em um só item."
    }
  },
  {
    id: "LI-042", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Comando da PM e do Corpo de Bombeiros",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 45, probReaparecer: 0.75,
    enunciado: "Os cargos de Comandante-Geral da Polícia Militar e do Corpo de Bombeiros Militar podem ser ocupados por oficiais da ativa ou da reserva, desde que pertencentes ao último posto da hierarquia.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "ativa ou da reserva",
    cognitivo: {
      motivo: "Cobrar a privatividade do comando para oficiais da ATIVA.",
      mede: "Constituição de Alagoas — segurança pública.",
      pegadinhaDesc: "Admite oficiais da reserva no comando, quando a exigência é de oficial da ativa.",
      ondeErra: "Foca no requisito do último posto e esquece a exigência de estar na ativa.",
      palavraCritica: "da ativa (não da reserva)",
      tecnica: "São dois requisitos cumulativos: oficial da ATIVA e do ÚLTIMO POSTO da hierarquia.",
      regraMental: "Comandante-Geral: oficial da ativa E do último posto. Reserva não comanda."
    },
    comentario: {
      resolucao: "ERRADO. Os cargos de Comandante-Geral da Polícia Militar e do Corpo de Bombeiros Militar são privativos de oficiais da ATIVA do último posto da hierarquia. A assertiva erra ao admitir oficiais da reserva.",
      fundamento: "Constituição do Estado de Alagoas — segurança pública.",
      macete: "Comando: só oficial da ativa, no último posto.",
      erroComum: "Admitir oficial da reserva no comando das corporações.",
      comoBancaPensa: "Mantém um requisito verdadeiro e flexibiliza o outro."
    }
  },
  {
    id: "LI-043", disciplina: "Legislação Institucional (AL)", assunto: "Constituição de Alagoas", subassunto: "Carreiras da Polícia Civil",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Constituição de AL, edital PC-AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 50, probReaparecer: 0.85,
    enunciado: "Lei específica organizará os cargos da Polícia Civil em carreira estruturada, sendo as funções de polícia judiciária privativas das respectivas carreiras policiais civis.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "privativas das respectivas carreiras",
    cognitivo: {
      motivo: "Cobrar a privatividade das funções de polícia judiciária.",
      mede: "Constituição de Alagoas — organização das carreiras policiais.",
      pegadinhaDesc: "A banca costuma admitir o exercício por servidores de outras carreiras ou por cedidos.",
      ondeErra: "Supõe que a função pode ser delegada a servidores estranhos à carreira.",
      palavraCritica: "privativas",
      tecnica: "Dialoga com o art. 6º, § 1º, da LONPC: as atribuições são exercidas exclusivamente por policiais civis em atividade.",
      regraMental: "Polícia judiciária é função privativa da carreira policial civil. Não se terceiriza."
    },
    comentario: {
      resolucao: "CERTO. A Constituição do Estado de Alagoas determina que lei específica organize os cargos da Polícia Civil em carreira, sendo as funções de polícia judiciária privativas das respectivas carreiras. A regra é reforçada pela Lei Orgânica Nacional das Polícias Civis (Lei 14.735/2023, art. 6º, § 1º), segundo a qual tais atribuições são exercidas exclusivamente por policiais civis em atividade.",
      fundamento: "Constituição do Estado de Alagoas — segurança pública; Lei 14.735/2023, art. 6º, § 1º.",
      macete: "Polícia judiciária: privativa da carreira. Só policial civil em atividade exerce.",
      erroComum: "Admitir o exercício por servidores de outras carreiras.",
      comoBancaPensa: "Testa a privatividade das funções institucionais."
    }
  },
];

QUESTOES.push(...QUESTOES_PCAL_LOTE14);

/* Frequência de temas — Constituição de Alagoas (Módulo 2) */
(function () {
  let d = FREQUENCIA_TEMAS.find(f => f.disciplina === "Legislação Institucional (AL)");
  if (!d) { d = { disciplina: "Legislação Institucional (AL)", temas: [] }; FREQUENCIA_TEMAS.push(d); }
  d.temas.push(
    { tema: "Const. AL — segurança pública e carreiras policiais", freq: 90, tendencia: "alta", prob: 0.92 },
    { tema: "Const. AL — servidores: estabilidade e disponibilidade", freq: 84, tendencia: "alta", prob: 0.86 },
    { tema: "Const. AL — remuneração, jornada e adicionais", freq: 80, tendencia: "estavel", prob: 0.82 },
    { tema: "Const. AL — servidores militares estaduais", freq: 74, tendencia: "estavel", prob: 0.76 },
  );
})();
