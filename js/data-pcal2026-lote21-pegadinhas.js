/* =====================================================================
   CEBRASPE LAB — Lote 21: PEGADINHAS AVANÇADAS (rebalanceamento)
   Lote engenhado para treinar os padrões da banca SUBUTILIZADOS no
   banco: restrição indevida, troca de sujeito, verdade + falso emendado,
   generalização indevida e termo absoluto — inclusive o caso decisivo do
   "termo absoluto VERDADEIRO", que a CEBRASPE usa para derrubar quem
   decora 'sempre/nunca = errado'.
   14 itens INÉDITOS, zero 'literalidade pura'.
   ===================================================================== */

const QUESTOES_PCAL_LOTE21 = [

  {
    id: "DP-069", disciplina: "Direito Penal", assunto: "Princípios penais", subassunto: "Termo absoluto verdadeiro (art. 5º, III, CF)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, III)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "A vedação a que alguém seja submetido a tortura ou a tratamento desumano ou degradante não admite exceção, ainda que em estado de defesa ou de sítio.",
    gabarito: "C", pegadinha: "termo-absoluto", palavraChave: "não admite exceção",
    cognitivo: {
      motivo: "Ensinar que 'termo absoluto' pode tornar a assertiva VERDADEIRA.",
      mede: "Direito Penal/Constitucional — direitos absolutos.",
      pegadinhaDesc: "O candidato marca ERRADO por instinto ('não admite exceção' parece pegadinha).",
      ondeErra: "Aplica mecanicamente 'termo absoluto = errado'.",
      palavraCritica: "não admite exceção",
      tecnica: "A vedação à tortura (art. 5º, III) é das pouquíssimas garantias tratadas como absolutas — não cede nem em estado de defesa/sítio (art. 136 e 139).",
      regraMental: "Nem todo 'nunca/sempre' é falso. Tortura: vedação absoluta mesmo."
    },
    comentario: {
      resolucao: "CERTO. A proibição de tortura e de tratamento desumano ou degradante (art. 5º, III) é considerada absoluta e integra o núcleo intangível dos direitos fundamentais, não podendo ser afastada nem durante estado de defesa ou de sítio. Aqui, o termo absoluto está correto.",
      fundamento: "CF, art. 5º, III; arts. 136 e 139.",
      macete: "Termo absoluto às vezes é VERDADE. Não marque no automático.",
      erroComum: "Marcar errado só por causa de 'não admite exceção'.",
      comoBancaPensa: "Usa o vício do candidato de rejeitar todo termo absoluto."
    }
  },
  {
    id: "DC-028", disciplina: "Direito Constitucional", assunto: "Direitos fundamentais", subassunto: "Relatividade (generalização)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º; STF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "Os direitos e garantias fundamentais têm caráter absoluto, não admitindo qualquer relativização.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "caráter absoluto",
    cognitivo: {
      motivo: "Cobrar a relatividade (regra) dos direitos fundamentais.",
      mede: "Constitucional — teoria dos direitos fundamentais.",
      pegadinhaDesc: "Generaliza a característica absoluta a todos os direitos.",
      ondeErra: "Ignora que a regra é a relatividade (limites, colisão, ponderação).",
      palavraCritica: "caráter absoluto",
      tecnica: "Regra: os direitos fundamentais são RELATIVOS (podem colidir e ser ponderados). Apenas raríssimas exceções são absolutas (ex.: vedação à tortura).",
      regraMental: "Direitos fundamentais são, em regra, relativos — não absolutos."
    },
    comentario: {
      resolucao: "ERRADO. Segundo o STF, os direitos e garantias fundamentais, em regra, são relativos: podem sofrer restrições e ser ponderados em caso de colisão. O caráter absoluto é exceção rara (como a vedação à tortura). Generalizar a característica absoluta é incorreto.",
      fundamento: "CF, art. 5º; STF (relatividade dos direitos fundamentais).",
      jurisprudencia: "STF (ponderação/colisão).",
      macete: "Regra: relativos. Absoluto é exceção.",
      erroComum: "Universalizar o caráter absoluto.",
      comoBancaPensa: "Generalização indevida de uma exceção."
    }
  },
  {
    id: "DA-042", disciplina: "Direito Administrativo", assunto: "Poderes administrativos", subassunto: "Poder de polícia (restrição indevida)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (poder de polícia)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.78,
    enunciado: "O poder de polícia administrativa esgota-se na atividade repressiva, consistente na aplicação de sanções aos particulares.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "esgota-se na atividade repressiva",
    cognitivo: {
      motivo: "Cobrar as fases/dimensões do poder de polícia.",
      mede: "Administrativo — poder de polícia.",
      pegadinhaDesc: "Restringe o poder de polícia à repressão.",
      ondeErra: "Esquece as fases de ordem, consentimento e fiscalização.",
      palavraCritica: "esgota-se na repressiva",
      tecnica: "O poder de polícia abrange ordem, consentimento, fiscalização e sanção — dimensões preventivas e repressivas. Não se esgota na repressão.",
      regraMental: "Polícia administrativa: previne, fiscaliza E reprime."
    },
    comentario: {
      resolucao: "ERRADO. O poder de polícia compreende as fases de ordem de polícia (normas), consentimento (licenças/autorizações), fiscalização e sanção. Tem atuação preventiva, fiscalizatória e repressiva — não se esgota na atividade repressiva.",
      fundamento: "Doutrina; Lei 13.874/2019 (ciclo de polícia).",
      macete: "Ciclo: ordem, consentimento, fiscalização, sanção.",
      erroComum: "Reduzir o poder de polícia à sanção.",
      comoBancaPensa: "Restringe indevidamente o alcance do poder."
    }
  },
  {
    id: "PP-047", disciplina: "Processo Penal", assunto: "Inquérito policial", subassunto: "Dispensabilidade (verdade + falso)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP; STF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "O inquérito policial é procedimento administrativo, inquisitivo, sigiloso e indispensável à propositura da ação penal.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "indispensável",
    cognitivo: {
      motivo: "Cobrar a dispensabilidade do inquérito policial.",
      mede: "Processo Penal — natureza do inquérito.",
      pegadinhaDesc: "Emenda um item falso (indispensável) a três verdadeiros.",
      ondeErra: "Aceita a assertiva por reconhecer as três primeiras características.",
      palavraCritica: "indispensável",
      tecnica: "O IP é administrativo, inquisitivo e sigiloso — mas DISPENSÁVEL: o MP pode oferecer denúncia com base em outros elementos (peças de informação).",
      regraMental: "Inquérito é dispensável. As demais características são verdadeiras."
    },
    comentario: {
      resolucao: "ERRADO. O inquérito policial é procedimento administrativo, inquisitivo e sigiloso — porém DISPENSÁVEL. A ação penal pode ser proposta com base em outros elementos de convicção (peças de informação, CPI etc.). O erro está apenas na palavra 'indispensável'.",
      fundamento: "CPP, art. 12 e 39, § 5º; doutrina.",
      macete: "Inquérito: dispensável (o resto da frase é verdade).",
      erroComum: "Validar a assertiva pelos itens verdadeiros iniciais.",
      comoBancaPensa: "Adiciona uma falsidade ao final de verdades."
    }
  },
  {
    id: "DP-070", disciplina: "Direito Penal", assunto: "Ação penal", subassunto: "Queixa-crime (troca de sujeito)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CPP, ação penal privada)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.76,
    enunciado: "Na ação penal privada, cabe ao querelado o oferecimento da queixa-crime.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "querelado",
    cognitivo: {
      motivo: "Cobrar os polos da ação penal privada.",
      mede: "Processo Penal/Penal — ação penal privada.",
      pegadinhaDesc: "Troca querelante (autor) por querelado (réu).",
      ondeErra: "Confunde os polos da relação processual.",
      palavraCritica: "querelado",
      tecnica: "Querelante é o ofendido (autor), que oferece a queixa. Querelado é o réu. A queixa cabe ao QUERELANTE.",
      regraMental: "Querelante acusa; querelado é acusado. Queixa é do querelante."
    },
    comentario: {
      resolucao: "ERRADO. Na ação penal privada, o ofendido (ou seu representante) é o querelante e oferece a queixa-crime; o querelado é o réu. Logo, a queixa cabe ao querelante, não ao querelado.",
      fundamento: "CPP, arts. 30 e 44; CP, art. 100, § 2º.",
      macete: "Querelante = autor (oferece queixa). Querelado = réu.",
      erroComum: "Inverter os polos da ação privada.",
      comoBancaPensa: "Troca de sujeitos processuais."
    }
  },
  {
    id: "DH-039", disciplina: "Direitos Humanos", assunto: "Teoria geral dos direitos humanos", subassunto: "Eficácia horizontal (restrição indevida)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (eficácia horizontal; STF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Os direitos fundamentais aplicam-se exclusivamente às relações entre o indivíduo e o Estado, não incidindo nas relações entre particulares.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "exclusivamente ... indivíduo e o Estado",
    cognitivo: {
      motivo: "Cobrar a eficácia horizontal dos direitos fundamentais.",
      mede: "Direitos Humanos/Constitucional — eficácia dos direitos.",
      pegadinhaDesc: "Restringe a eficácia à dimensão vertical (Estado-indivíduo).",
      ondeErra: "Desconhece a eficácia horizontal (entre particulares).",
      palavraCritica: "exclusivamente",
      tecnica: "O STF reconhece a eficácia horizontal (Drittwirkung): os direitos fundamentais também vinculam as relações privadas, não só as relações com o Estado.",
      regraMental: "Direitos fundamentais valem também entre particulares (eficácia horizontal)."
    },
    comentario: {
      resolucao: "ERRADO. Além da eficácia vertical (Estado-indivíduo), os direitos fundamentais possuem eficácia horizontal, incidindo também nas relações entre particulares, conforme reconhecido pelo STF. Restringi-los à relação com o Estado é incorreto.",
      fundamento: "STF, RE 201.819 (eficácia horizontal).",
      jurisprudencia: "STF, RE 201.819.",
      macete: "Vertical E horizontal: também entre particulares.",
      erroComum: "Limitar a eficácia à dimensão vertical.",
      comoBancaPensa: "Restringe indevidamente o alcance dos direitos."
    }
  },
  {
    id: "DA-043", disciplina: "Direito Administrativo", assunto: "Atos administrativos", subassunto: "Requisitos (verdade + falso)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (requisitos do ato administrativo)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "São requisitos de validade do ato administrativo a competência, a finalidade, a forma, o motivo, o objeto e a publicidade.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "e a publicidade",
    cognitivo: {
      motivo: "Cobrar os cinco requisitos do ato administrativo.",
      mede: "Administrativo — elementos/requisitos do ato.",
      pegadinhaDesc: "Acrescenta a publicidade (princípio, não requisito) à lista correta.",
      ondeErra: "Confunde princípio (publicidade) com requisito de validade.",
      palavraCritica: "publicidade",
      tecnica: "Os requisitos são cinco (COM-FI-FO-MO-OB): Competência, Finalidade, Forma, Motivo e Objeto. A publicidade é princípio/condição de eficácia, não requisito de validade.",
      regraMental: "5 requisitos: Competência, Finalidade, Forma, Motivo, Objeto."
    },
    comentario: {
      resolucao: "ERRADO. Os requisitos (elementos) do ato administrativo são cinco: competência, finalidade, forma, motivo e objeto (art. 2º da Lei 4.717/1965). A publicidade é princípio da Administração e condição de eficácia — não integra o rol dos requisitos de validade.",
      fundamento: "Lei 4.717/1965, art. 2º; CF, art. 37.",
      macete: "COM-FI-FO-MO-OB. Publicidade é princípio, não requisito.",
      erroComum: "Incluir a publicidade entre os requisitos.",
      comoBancaPensa: "Emenda item falso a uma lista verdadeira."
    }
  },
  {
    id: "PP-048", disciplina: "Processo Penal", assunto: "Inquérito policial", subassunto: "Indiciamento (troca de sujeito)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 12.830/2013)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.82,
    enunciado: "O indiciamento é ato privativo do delegado de polícia, mediante despacho fundamentado, no âmbito do inquérito policial.",
    gabarito: "C", pegadinha: "troca-sujeito", palavraChave: "privativo do delegado",
    cognitivo: {
      motivo: "Cobrar a privatividade do indiciamento (distrator: MP/juiz).",
      mede: "Processo Penal — indiciamento.",
      pegadinhaDesc: "O candidato tende a achar que o MP ou o juiz podem indiciar/determinar indiciamento.",
      ondeErra: "Confunde as atribuições do delegado com as do MP/juiz.",
      palavraCritica: "privativo do delegado",
      tecnica: "Lei 12.830/2013, art. 2º, § 6º: o indiciamento é ato PRIVATIVO do delegado de polícia, por despacho fundamentado. O juiz não pode requisitar indiciamento.",
      regraMental: "Indiciar é só do delegado (ato privativo)."
    },
    comentario: {
      resolucao: "CERTO. Conforme o art. 2º, § 6º, da Lei 12.830/2013, o indiciamento é ato privativo do delegado de polícia, mediante análise técnico-jurídica do fato e por despacho fundamentado. O magistrado não pode determinar o indiciamento (posição do STF).",
      fundamento: "Lei 12.830/2013, art. 2º, § 6º; STF.",
      jurisprudencia: "STF (impossibilidade de o juiz requisitar indiciamento).",
      macete: "Indiciamento: privativo do delegado.",
      erroComum: "Achar que MP/juiz podem indiciar.",
      comoBancaPensa: "Distrator de troca de sujeito (aqui a assertiva resiste)."
    }
  },
  {
    id: "DP-071", disciplina: "Direito Penal", assunto: "Crimes dolosos contra a vida", subassunto: "Júri e foro por prerrogativa (generalização)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 5º, XXXVIII; STF)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Todo crime doloso contra a vida é julgado pelo tribunal do júri, inclusive quando o réu detém foro por prerrogativa de função previsto na Constituição.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "inclusive ... prerrogativa de função",
    cognitivo: {
      motivo: "Cobrar a exceção do foro por prerrogativa de função ao júri.",
      mede: "Penal/Processo Penal — competência do júri.",
      pegadinhaDesc: "Generaliza a competência do júri, ignorando o foro constitucional.",
      ondeErra: "Não distingue prerrogativa fixada na CF de prerrogativa apenas em constituição estadual.",
      palavraCritica: "inclusive ... prerrogativa",
      tecnica: "A competência do júri é a regra, mas cede ao foro por prerrogativa previsto na PRÓPRIA Constituição Federal (Súmula 721 STF / SV 45): prevalece o foro constitucional.",
      regraMental: "Foro por prerrogativa na CF prevalece sobre o júri."
    },
    comentario: {
      resolucao: "ERRADO. Embora o júri seja competente para os crimes dolosos contra a vida, o foro por prerrogativa de função estabelecido na própria Constituição Federal prevalece sobre a competência do júri (Súmula 721 do STF e SV 45). Só a prerrogativa prevista exclusivamente em constituição estadual cede ao júri.",
      fundamento: "CF, art. 5º, XXXVIII; Súmula 721 do STF; SV 45.",
      jurisprudencia: "STF, Súmula 721 e SV 45.",
      macete: "Prerrogativa na CF vence o júri; só estadual cede.",
      erroComum: "Mandar todos ao júri, sem exceção.",
      comoBancaPensa: "Generalização que ignora o foro constitucional."
    }
  },
  {
    id: "LE-116", disciplina: "Legislação Especial", assunto: "Lei de Drogas", subassunto: "Porte para consumo (restrição indevida)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 11.343/2006, art. 28)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.8,
    enunciado: "O porte de droga para consumo pessoal não é punido com pena privativa de liberdade, sujeitando o agente a advertência, prestação de serviços à comunidade e medida educativa.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "não é punido com pena privativa de liberdade",
    cognitivo: {
      motivo: "Cobrar as penas do art. 28 (usuário) — distrator: prisão.",
      mede: "Legislação Especial — Lei de Drogas.",
      pegadinhaDesc: "O candidato tende a supor prisão para o usuário.",
      ondeErra: "Confunde o tratamento do usuário (art. 28) com o do traficante (art. 33).",
      palavraCritica: "não é punido com pena privativa de liberdade",
      tecnica: "Art. 28: ao usuário aplicam-se advertência, prestação de serviços à comunidade e medida educativa de comparecimento a programa — jamais pena privativa de liberdade.",
      regraMental: "Usuário (art. 28): não vai preso. Só medidas alternativas."
    },
    comentario: {
      resolucao: "CERTO. O art. 28 da Lei 11.343/2006 comina ao porte para consumo pessoal apenas advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa de comparecimento a programa ou curso educativo — nunca pena privativa de liberdade.",
      fundamento: "Lei 11.343/2006, art. 28.",
      macete: "Usuário não é preso: só medidas do art. 28.",
      erroComum: "Supor prisão para o usuário.",
      comoBancaPensa: "Distrator: tentação de impor prisão (aqui a assertiva resiste)."
    }
  },
  {
    id: "DC-029", disciplina: "Direito Constitucional", assunto: "Controle de constitucionalidade", subassunto: "Legitimados da ADI (restrição verdadeira)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (CF, art. 103)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.78,
    enunciado: "Somente os legitimados expressamente arrolados na Constituição podem propor ação direta de inconstitucionalidade perante o STF.",
    gabarito: "C", pegadinha: "restricao-indevida", palavraChave: "somente os legitimados arrolados",
    cognitivo: {
      motivo: "Cobrar a taxatividade do rol do art. 103 (distrator: 'somente' parece pegadinha).",
      mede: "Constitucional — controle concentrado.",
      pegadinhaDesc: "O 'somente' induz o candidato a marcar errado por reflexo.",
      ondeErra: "Aplica mecanicamente 'restrição = errado'.",
      palavraCritica: "somente",
      tecnica: "O art. 103 traz rol TAXATIVO de legitimados (ex.: Presidente, PGR, OAB, partidos com representação, governadores etc.). O cidadão comum não tem legitimidade para ADI.",
      regraMental: "ADI: só os legitimados do art. 103. 'Somente' aqui é verdade."
    },
    comentario: {
      resolucao: "CERTO. A legitimação para a ADI é restrita aos entes e autoridades expressamente arrolados no art. 103 da CF. O rol é taxativo — o cidadão comum não pode propor ADI. A palavra 'somente', aqui, torna a assertiva correta.",
      fundamento: "CF, art. 103.",
      macete: "ADI: rol taxativo do art. 103.",
      erroComum: "Rejeitar a assertiva por causa do 'somente'.",
      comoBancaPensa: "Restrição verdadeira que parece pegadinha."
    }
  },
  {
    id: "DA-044", disciplina: "Direito Administrativo", assunto: "Improbidade administrativa", subassunto: "Aplicação das sanções (troca de sujeito)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Lei 8.429/1992)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.76,
    enunciado: "As sanções por ato de improbidade administrativa são aplicadas pela própria autoridade administrativa, no âmbito de processo administrativo disciplinar.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "própria autoridade administrativa",
    cognitivo: {
      motivo: "Cobrar a competência para aplicar as sanções de improbidade.",
      mede: "Administrativo — improbidade.",
      pegadinhaDesc: "Atribui à Administração a aplicação das sanções (é do Judiciário).",
      ondeErra: "Confunde o PAD com a ação de improbidade.",
      palavraCritica: "própria autoridade administrativa",
      tecnica: "As sanções da Lei 8.429/1992 (perda da função, suspensão de direitos políticos, multa etc.) são aplicadas pelo PODER JUDICIÁRIO, em ação de improbidade proposta pelo MP.",
      regraMental: "Sanção de improbidade: quem aplica é o juiz, não a Administração."
    },
    comentario: {
      resolucao: "ERRADO. As sanções por improbidade administrativa (perda da função pública, suspensão dos direitos políticos, multa civil, proibição de contratar etc.) são aplicadas pelo Poder Judiciário, em ação específica de titularidade do Ministério Público, e não pela autoridade administrativa em PAD.",
      fundamento: "Lei 8.429/1992, arts. 12 e 17 (Lei 14.230/2021).",
      macete: "Improbidade: sanção pelo Judiciário (ação do MP).",
      erroComum: "Atribuir as sanções ao PAD administrativo.",
      comoBancaPensa: "Troca o sujeito competente para sancionar."
    }
  },
  {
    id: "DH-040", disciplina: "Direitos Humanos", assunto: "Sistema global", subassunto: "Natureza da DUDH (troca de conceito)",
    concurso: "PCAL", cargo: ["Agente","Escrivão","Delegado","Perito Criminal","Papiloscopista"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (DUDH/1948)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 55, probReaparecer: 0.76,
    enunciado: "A Declaração Universal dos Direitos Humanos, de 1948, tem natureza jurídica de tratado internacional, sendo, por si só, diretamente vinculante e exigível como norma convencional.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "natureza jurídica de tratado",
    cognitivo: {
      motivo: "Cobrar a natureza jurídica da DUDH.",
      mede: "Direitos Humanos — sistema global.",
      pegadinhaDesc: "Trata a Declaração como tratado convencional vinculante.",
      ondeErra: "Confunde Declaração (resolução) com tratado (convenção).",
      palavraCritica: "tratado internacional",
      tecnica: "A DUDH é uma RESOLUÇÃO/Declaração da Assembleia Geral da ONU — não é tratado. Sua força hoje advém do costume internacional e do reconhecimento como jus cogens, mas não da natureza convencional.",
      regraMental: "DUDH = Declaração (resolução), não tratado."
    },
    comentario: {
      resolucao: "ERRADO. A DUDH (1948) é uma declaração adotada por resolução da Assembleia Geral da ONU, e não um tratado internacional. Embora tenha enorme força moral e seja considerada norma costumeira/de jus cogens, não é, por si só, um tratado convencional diretamente vinculante.",
      fundamento: "DUDH/1948; teoria das fontes do Direito Internacional.",
      macete: "Declaração ≠ tratado. DUDH é resolução da ONU.",
      erroComum: "Chamar a DUDH de tratado vinculante.",
      comoBancaPensa: "Troca a natureza jurídica do documento."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE21);
