/* =====================================================================
   QUESTLAB — Lote 61: CÓDIGO DE ÉTICA FUNCIONAL DE ALAGOAS (Lei 6.754/2006)

   Fecha os conhecimentos básicos da trilha SESAU/AL. O edital pede, no
   tópico de Ética no Serviço Público, um subitem específico:

     5.1 Lei estadual nº 6.754/2006 (Código de Ética Funcional do Servidor
     Público do Estado de Alagoas).

   As 23 questões que a disciplina já tinha vieram da trilha PC-AL e cobrem
   a parte conceitual do edital — ética e moral, princípios e valores, ética
   e democracia, ética e função pública. Nenhuma tratava da lei estadual.
   Estes 26 itens preenchem exatamente essa lacuna, e por isso continuam a
   numeração ET- em vez de abrir prefixo novo: mesma disciplina, mesmo
   contexto, subitem que faltava.

   PROCEDÊNCIA. Texto oficial da Lei 6.754/2006 obtido em PDF no portal do
   ITEC/Governo de Alagoas. A lei tem só quinze artigos, então foi lida
   integralmente antes da redação — não por amostragem. Cada artigo, inciso,
   prazo e numeral foi conferido contra esse texto.

   O CONTRASTE MAIS PRODUTIVO DO LOTE é entre o art. 3º desta lei e o art.
   1º da Lei 5.247/1991 (cobrado no LEA-038). O RJU alcança administração
   direta, autarquias e fundações públicas. O Código de Ética vai muito
   além: alcança quem preste serviço de natureza permanente, temporária ou
   excepcional, AINDA QUE SEM RETRIBUIÇÃO FINANCEIRA, e inclui empresas
   públicas e sociedades de economia mista. Duas leis estaduais cobradas no
   mesmo edital com perímetros subjetivos diferentes — terreno perfeito
   para a banca, e três itens do lote exploram isso.

   Equilíbrio 13 CERTO / 13 ERRADO.
   ===================================================================== */

const QUESTOES_SESAUAL_LOTE61 = [
  /* ---------- Regras deontológicas (art. 2º) ---------- */
  {
    id: "ET-024", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Regras deontológicas — o honesto e o desonesto",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.86,
    enunciado: "Segundo o Código de Ética Funcional do Servidor Público Civil do Estado de Alagoas, o servidor não terá que decidir somente entre o legal e o ilegal, o justo e o injusto, o conveniente e o inconveniente, o oportuno e o inoportuno, mas principalmente entre o honesto e o desonesto.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "principalmente entre o honesto e o desonesto",
    cognitivo: {
      motivo: "Fixar o inciso mais transcrito do art. 2º, que define o padrão de conduta acima da legalidade.",
      palavraCritica: "honesto e o desonesto",
    },
    comentario: {
      resolucao: "CERTO. É o inciso II do art. 2º da Lei 6.754/2006, e a redação é praticamente idêntica à do Decreto federal 1.171/1994 — o Código estadual foi construído sobre aquele modelo, o que explica por que quem estudou o federal reconhece a frase. O dispositivo ainda remete expressamente ao art. 37, caput e §4º, da Constituição Federal. A ideia central é que a ética funcional não se esgota na legalidade: um ato pode ser legal e ainda assim desonesto.",
      fundamento: "Lei estadual 6.754/2006, art. 2º, II; CF/88, art. 37, caput e § 4º.",
      macete: "Ética funcional não para no legal — o eixo é honesto x desonesto.",
      erroComum: "Marcar ERRADO por reconhecer a frase do Decreto federal 1.171/1994 e supor que não está na lei estadual.",
      comoBancaPensa: "Aproveita a semelhança entre o Código estadual e o federal para gerar dúvida sobre a fonte."
    }
  },
  {
    id: "ET-025", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Vida privada e conceito funcional",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.82,
    enunciado: "Os fatos e atos verificados na conduta do servidor em sua vida privada são irrelevantes para a formação de seu conceito na vida funcional, dada a separação entre as esferas pública e particular.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "irrelevantes para a formação de seu conceito na vida funcional",
    cognitivo: {
      motivo: "Cobrar que o Código estende o juízo ético à vida particular do servidor.",
      palavraCritica: "irrelevantes",
    },
    comentario: {
      resolucao: "ERRADO — o Código diz exatamente o contrário. O inciso VI do art. 2º afirma que a função pública INTEGRA-SE na vida particular de cada servidor, de modo que os atos do dia a dia privado poderão acrescer ou diminuir seu bom conceito na vida funcional. O art. 5º, XIII, confirma a lógica ao vedar apresentar-se embriagado no serviço OU FORA DELE. O argumento do item — separação entre as esferas — é intuitivo e juridicamente atraente, mas não é o que a norma estadual adotou.",
      fundamento: "Lei estadual 6.754/2006, art. 2º, VI; art. 5º, XIII.",
      macete: "No Código de Ética, vida privada e conceito funcional se comunicam.",
      erroComum: "Aplicar a separação entre esferas pública e privada, que a lei não faz.",
      comoBancaPensa: "Oferece um princípio geral verdadeiro em outro contexto para contradizer o texto expresso."
    }
  },
  {
    id: "ET-026", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Publicidade dos atos administrativos",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.76,
    enunciado: "A publicidade de qualquer ato administrativo constitui requisito de eficácia e moralidade, não admitindo o Código de Ética estadual qualquer hipótese de sigilo.",
    gabarito: "E", pegadinha: "termo-absoluto", palavraChave: "não admitindo ... qualquer hipótese de sigilo",
    cognitivo: {
      motivo: "Cobrar a ressalva do inciso VII, suprimida pelo item.",
      palavraCritica: "qualquer hipótese",
    },
    comentario: {
      resolucao: "ERRADO. O inciso VII do art. 2º abre com uma ressalva expressa: 'salvo os casos de investigações policiais ou interesse superior do Estado e da Administração Pública Estadual, a serem preservados em processo previamente declarado sigiloso, nos termos da Lei'. O item suprime essa abertura e converte a regra em absoluta. Repare que o sigilo não é discricionário — depende de processo PREVIAMENTE declarado sigiloso na forma da lei —, mas existe. A parte final do inciso é verdadeira e o item a mantém: negar a publicidade devida enseja comprometimento ético imputável a quem a negar.",
      fundamento: "Lei estadual 6.754/2006, art. 2º, VII.",
      macete: "Publicidade é a regra; sigilo existe, mas só por processo previamente declarado.",
      erroComum: "Marcar CERTO por lembrar da primeira metade do inciso.",
      comoBancaPensa: "Suprime a ressalva inicial e fecha com termo absoluto — padrão mais frequente da banca."
    }
  },
  {
    id: "ET-027", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Demora no atendimento como dano moral",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.84,
    enunciado: "Deixar o servidor qualquer pessoa à espera de solução que compete ao setor em que exerça suas funções, permitindo a formação de longas filas ou qualquer outra espécie de atraso na prestação do serviço, caracteriza dano moral aos usuários dos serviços públicos estaduais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "caracteriza dano moral aos usuários",
    cognitivo: {
      motivo: "Fixar a qualificação da demora como dano moral, e não como mera falha de eficiência.",
      palavraCritica: "dano moral",
    },
    comentario: {
      resolucao: "CERTO. É o inciso XII do art. 2º, e o texto é enfático: a demora 'não caracteriza apenas atitude contra a ética ou ato de desumanidade, mas principalmente dano moral aos usuários'. A qualificação se repete no art. 4º, II, entre os deveres — resolver situações procrastinatórias com o fim de evitar dano moral — e no art. 5º, IV, entre as vedações, ao proibir artifícios para procrastinar o exercício regular de direito. Três dispositivos sobre o mesmo tema indicam o peso que a lei dá a ele, e o item de interesse direto para quem atende em serviço de saúde.",
      fundamento: "Lei estadual 6.754/2006, art. 2º, XII; art. 4º, II; art. 5º, IV.",
      macete: "Fila e demora, no Código de Alagoas, são dano moral — não só ineficiência.",
      erroComum: "Reduzir a demora a problema de gestão, sem consequência ética.",
      comoBancaPensa: "Cobra a qualificação jurídica forte que a lei dá a uma conduta corriqueira."
    }
  },

  /* ---------- Conceito de servidor público para fins éticos (art. 3º) ---------- */
  {
    id: "ET-028", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Conceito ampliado de servidor público",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.9,
    enunciado: "Para fins de apuração do comprometimento ético, considera-se servidor público todo aquele que preste serviços de natureza permanente, temporária ou excepcional, ainda que sem retribuição financeira, desde que ligado direta ou indiretamente a qualquer órgão ou entidade do Poder Estatal.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ainda que sem retribuição financeira",
    cognitivo: {
      motivo: "Fixar o alcance subjetivo amplo do Código, distinto do alcance do RJU.",
      palavraCritica: "ainda que sem retribuição financeira",
    },
    comentario: {
      resolucao: "CERTO. É o art. 3º da Lei 6.754/2006, e o alcance é deliberadamente amplo: pouco importa o título do vínculo — lei, contrato ou qualquer ato jurídico —, a duração ou até a existência de remuneração. O que define a sujeição ao Código é servir ao Poder Estatal. Compare com o art. 1º da Lei 5.247/1991, que restringe o Regime Jurídico Único à administração direta, autarquias e fundações públicas: duas leis estaduais do mesmo edital com perímetros diferentes. Estagiário e voluntário respondem eticamente; não respondem disciplinarmente pelo RJU.",
      fundamento: "Lei estadual 6.754/2006, art. 3º; Lei estadual 5.247/1991, art. 1º.",
      macete: "O Código de Ética alcança mais gente que o RJU — inclusive quem não recebe nada.",
      erroComum: "Aplicar ao Código de Ética o perímetro subjetivo do Regime Jurídico Único.",
      comoBancaPensa: "Duas leis do mesmo edital com alcances distintos: cobra quem generaliza um para o outro."
    }
  },
  {
    id: "ET-029", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Alcance sobre estatais",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.83,
    enunciado: "O Código de Ética Funcional do Estado de Alagoas aplica-se aos servidores da administração direta, das autarquias e das fundações públicas, não alcançando os empregados de empresas públicas e de sociedades de economia mista, submetidos ao regime celetista.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "não alcançando os empregados de empresas públicas e de sociedades de economia mista",
    cognitivo: {
      motivo: "Cobrar que o Código alcança as estatais, ao contrário do RJU.",
      palavraCritica: "não alcançando",
    },
    comentario: {
      resolucao: "ERRADO. O art. 3º menciona expressamente, entre as entidades alcançadas, 'as entidades paraestatais, as empresas públicas e as sociedades de economia mista'. O item transporta para o Código o recorte do Regime Jurídico Único — que de fato não alcança as estatais, porque seus empregados são celetistas —, mas os dois diplomas têm finalidades distintas: o RJU rege o vínculo funcional, e o Código rege a conduta ética de quem serve ao Estado, seja qual for o regime. O argumento celetista é verdadeiro e não conduz à conclusão do item.",
      fundamento: "Lei estadual 6.754/2006, art. 3º; Lei estadual 5.247/1991, art. 1º.",
      macete: "Estatais: fora do RJU, dentro do Código de Ética.",
      erroComum: "Unificar o alcance das duas leis estaduais por serem cobradas no mesmo edital.",
      comoBancaPensa: "Usa a premissa correta do regime celetista para chegar a conclusão que a lei desmente."
    }
  },
  {
    id: "ET-030", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Natureza do vínculo",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.75,
    enunciado: "A sujeição ao Código de Ética Funcional do Estado de Alagoas pressupõe vínculo de natureza permanente com a Administração Pública estadual, excluídos os prestadores de serviço temporários e excepcionais.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "pressupõe vínculo de natureza permanente",
    cognitivo: {
      motivo: "Cobrar que o Código alcança vínculos temporários e excepcionais.",
      palavraCritica: "excluídos os prestadores de serviço temporários",
    },
    comentario: {
      resolucao: "ERRADO. O art. 3º é expresso ao alcançar serviços de natureza 'permanente, temporária ou excepcional'. Excluir o temporário inverteria a finalidade da norma: quem atende o público em caráter transitório lida com o mesmo cidadão e o mesmo patrimônio público, e a ética não pode variar conforme a duração do contrato. O dispositivo também dispensa a forma do vínculo — lei, contrato ou qualquer ato jurídico —, o que reforça que o critério é funcional, não formal.",
      fundamento: "Lei estadual 6.754/2006, art. 3º.",
      macete: "Permanente, temporário ou excepcional: todos sujeitos ao Código.",
      erroComum: "Associar dever ético a estabilidade ou a vínculo efetivo.",
      comoBancaPensa: "Restringe um rol expressamente amplo, apostando na intuição de que ética exige vínculo forte."
    }
  },

  /* ---------- Deveres fundamentais (art. 4º) ---------- */
  {
    id: "ET-031", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Dever de escolher a opção mais vantajosa ao bem comum",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "É dever fundamental do servidor ser probo, reto, leal e justo, demonstrando toda a integridade do seu caráter, escolhendo sempre, quando estiver diante de duas opções, a melhor e a mais vantajosa para o bem comum.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "a mais vantajosa para o bem comum",
    cognitivo: {
      motivo: "Fixar o critério de escolha do inciso III, que é o bem comum e não o interesse da Administração.",
      palavraCritica: "para o bem comum",
    },
    comentario: {
      resolucao: "CERTO. É o inciso III do art. 4º da Lei 6.754/2006. A alteração cirúrgica típica troca 'bem comum' por 'interesse da Administração' ou 'erário' — expressões que soam equivalentes e não são: o bem comum pode, em certos casos, apontar para a solução menos vantajosa financeiramente ao Estado. O mesmo parâmetro reaparece no inciso XIV, ao mandar participar de estudos que tenham por escopo a realização do bem comum.",
      fundamento: "Lei estadual 6.754/2006, art. 4º, III e XIV.",
      macete: "O critério é o BEM COMUM, não a economia para o Estado.",
      erroComum: "Aceitar 'interesse da Administração' como sinônimo de bem comum.",
      comoBancaPensa: "Troca o parâmetro axiológico por outro próximo e mais estreito."
    }
  },
  {
    id: "ET-032", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Dever de resistir a pressões e denunciá-las",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.85,
    enunciado: "É dever do servidor resistir a todas as pressões de superiores hierárquicos, de contratantes, interessados e outros que visem obter quaisquer favores, benesses ou vantagens indevidas em decorrência de ações imorais, ilegais ou aéticas, e denunciá-las.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "e denunciá-las",
    cognitivo: {
      motivo: "Fixar que o dever não se esgota em resistir: inclui denunciar.",
      palavraCritica: "denunciá-las",
    },
    comentario: {
      resolucao: "CERTO. É o inciso IX do art. 4º, e as duas palavras finais são o que a banca suprime: não basta resistir, é preciso DENUNCIAR. A omissão do servidor que apenas se recusa e silencia já configura descumprimento do dever. A obrigação é reforçada pelo inciso XII, que manda comunicar imediatamente aos superiores todo ato contrário ao interesse público, e conversa com o inciso VIII, segundo o qual o respeito à hierarquia não impede representar contra comprometimento indevido da estrutura estatal.",
      fundamento: "Lei estadual 6.754/2006, art. 4º, VIII, IX e XII.",
      macete: "Resistir e DENUNCIAR — o dever tem duas pernas.",
      erroComum: "Achar que basta não ceder à pressão.",
      comoBancaPensa: "Suprime a segunda obrigação do inciso, que é a menos lembrada."
    }
  },
  {
    id: "ET-033", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Direito de greve",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.78,
    enunciado: "O Código de Ética Funcional do Estado de Alagoas veda ao servidor público a participação em movimento de greve, por incompatibilidade com o dever de assiduidade e com a continuidade do serviço público.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "veda ao servidor público a participação em movimento de greve",
    cognitivo: {
      motivo: "Cobrar que o Código pressupõe o direito de greve e apenas o condiciona.",
      palavraCritica: "veda",
    },
    comentario: {
      resolucao: "ERRADO. O inciso X do art. 4º faz o oposto de vedar: pressupõe o direito e impõe um dever no seu exercício — 'zelar, NO EXERCÍCIO DO DIREITO DE GREVE, pelas exigências específicas da defesa da vida e da segurança coletiva'. Uma lei estadual não poderia mesmo suprimir direito assegurado pelo art. 37, VII, da Constituição Federal. E o comando é especialmente concreto para quem trabalha em saúde: a greve é legítima, mas não pode desguarnecer o que envolva vida e segurança coletiva.",
      fundamento: "Lei estadual 6.754/2006, art. 4º, X; CF/88, art. 37, VII.",
      macete: "O Código não proíbe greve — manda zelar pela vida e pela segurança durante ela.",
      erroComum: "Deduzir vedação a partir do dever de assiduidade do inciso XI.",
      comoBancaPensa: "Converte um dever de conduta DURANTE o exercício do direito em proibição do próprio direito."
    }
  },
  {
    id: "ET-034", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Apresentação pessoal",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 50, probReaparecer: 0.7,
    enunciado: "Consta entre os deveres fundamentais do servidor público estadual apresentar-se ao trabalho com vestimentas adequadas ao exercício da função.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "vestimentas adequadas ao exercício da função",
    cognitivo: {
      motivo: "Fixar um dever de aparência prosaica, que por isso é negado por reflexo.",
      palavraCritica: "vestimentas adequadas",
    },
    comentario: {
      resolucao: "CERTO. É o inciso XV do art. 4º da Lei 6.754/2006, com essa redação exata. O item costuma ser marcado como ERRADO por parecer trivial demais para figurar entre 'deveres fundamentais' — e é justamente essa reação que a banca explora. O art. 4º tem vinte e um incisos e mistura comandos de peso, como probidade e resistência a pressões, com comandos de rotina, como manter limpo o local de trabalho (XIII) e manter-se atualizado com as normas de serviço (XVI).",
      fundamento: "Lei estadual 6.754/2006, art. 4º, XIII, XV e XVI.",
      macete: "O art. 4º tem 21 incisos e mistura o solene com o prosaico.",
      erroComum: "Negar o dever por considerá-lo pouco relevante para um código de ética.",
      comoBancaPensa: "Escolhe o inciso menos memorável de um rol longo."
    }
  },
  {
    id: "ET-035", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Desvio de finalidade com forma legal",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.81,
    enunciado: "O servidor que exerça sua função com finalidade estranha ao interesse público não incorre em comprometimento ético desde que observe todas as formalidades legais e não cometa violação expressa à lei.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "desde que observe todas as formalidades legais",
    cognitivo: {
      motivo: "Cobrar que a regularidade formal não convalida o desvio de finalidade.",
      palavraCritica: "desde que",
    },
    comentario: {
      resolucao: "ERRADO. O inciso XX do art. 4º manda o servidor abster-se, DE FORMA ABSOLUTA, de exercer função, poder ou autoridade com finalidade estranha ao interesse público — e o próprio dispositivo antecipa a desculpa do item: 'mesmo que observando as formalidades legais e não cometendo qualquer violação expressa à Lei'. Ou seja, a lei já previu exatamente esse argumento e o rejeitou. É a tradução ética do desvio de finalidade do direito administrativo: o ato é formalmente perfeito e substancialmente viciado.",
      fundamento: "Lei estadual 6.754/2006, art. 4º, XX; art. 2º, III.",
      macete: "Forma legal não salva finalidade desviada — o inciso XX diz isso com todas as letras.",
      erroComum: "Aceitar a legalidade formal como excludente do comprometimento ético.",
      comoBancaPensa: "Devolve como condição justamente a hipótese que o dispositivo exclui expressamente."
    }
  },

  /* ---------- Vedações (art. 5º) ---------- */
  {
    id: "ET-036", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Vedação de vantagem indevida",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.87,
    enunciado: "É vedado ao servidor pleitear, solicitar, provocar, sugerir ou receber qualquer tipo de ajuda financeira, gratificação, prêmio, comissão, doação ou vantagem de qualquer espécie, para si, familiares ou qualquer pessoa, para o cumprimento da sua missão ou para influenciar outro servidor para o mesmo fim.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "pleitear, solicitar, provocar, sugerir ou receber",
    cognitivo: {
      motivo: "Fixar a amplitude dos verbos e dos beneficiários da vedação.",
      palavraCritica: "ou para influenciar outro servidor",
    },
    comentario: {
      resolucao: "CERTO. É o inciso VII do art. 5º da Lei 6.754/2006. A vedação é ampla em três dimensões que a banca costuma estreitar: nos VERBOS — basta sugerir ou provocar, não é preciso receber; nos BENEFICIÁRIOS — alcança familiares e qualquer terceiro, não só o próprio servidor; e na FINALIDADE — cobre tanto o cumprimento da própria missão quanto a influência sobre outro servidor. Item que exija o efetivo recebimento restringe indevidamente o dispositivo.",
      fundamento: "Lei estadual 6.754/2006, art. 5º, VII.",
      macete: "Sugerir já basta. Não precisa receber, nem ser para si.",
      erroComum: "Exigir o recebimento efetivo da vantagem para configurar a infração ética.",
      comoBancaPensa: "Rol de verbos longo: cobra literal para depois exigir apenas a conduta final."
    }
  },
  {
    id: "ET-037", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Embriaguez",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.86,
    enunciado: "É vedado ao servidor apresentar-se embriagado no serviço, ressalvadas as situações ocorridas fora do horário de expediente, que pertencem à esfera privada.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "ressalvadas as situações ocorridas fora do horário de expediente",
    cognitivo: {
      motivo: "Cobrar que a vedação alcança também a conduta fora do serviço.",
      palavraCritica: "fora do horário de expediente",
    },
    comentario: {
      resolucao: "ERRADO. O inciso XIII do art. 5º veda apresentar-se embriagado 'no serviço OU FORA DELE'. O item cria uma ressalva que a lei não faz, e a supressão dessas três palavras é a alteração cirúrgica clássica deste dispositivo. A extensão à vida privada não é arbitrária: decorre do inciso VI do art. 2º, segundo o qual a função pública se integra à vida particular do servidor e os atos privados repercutem no conceito funcional.",
      fundamento: "Lei estadual 6.754/2006, art. 5º, XIII; art. 2º, VI.",
      macete: "Embriaguez: vedada no serviço OU FORA DELE.",
      erroComum: "Restringir a vedação ao horário de expediente por parecer o razoável.",
      comoBancaPensa: "Suprime três palavras e devolve o dispositivo com aparência de completo."
    }
  },
  {
    id: "ET-038", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Informações privilegiadas",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.82,
    enunciado: "É vedado ao servidor fazer uso de informações privilegiadas obtidas no âmbito de seu serviço, em benefício próprio, de parentes, de amigos ou de terceiros.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "de parentes, de amigos ou de terceiros",
    cognitivo: {
      motivo: "Fixar que a vedação não exige proveito próprio.",
      palavraCritica: "ou de terceiros",
    },
    comentario: {
      resolucao: "CERTO. É o inciso XII do art. 5º da Lei 6.754/2006. O alcance a parentes, amigos e terceiros é o que a banca suprime, deixando só 'em benefício próprio' — restrição que permitiria a conduta mais comum, que é passar a informação adiante sem lucro pessoal direto. A mesma lógica aparece no inciso I, que veda usar cargo, facilidades, amizades, tempo, posição e influências para obter favorecimento 'para si OU PARA OUTREM'.",
      fundamento: "Lei estadual 6.754/2006, art. 5º, I e XII.",
      macete: "Não precisa ser em proveito próprio — beneficiar terceiro também é vedado.",
      erroComum: "Exigir vantagem pessoal do servidor para configurar a infração.",
      comoBancaPensa: "Estreita o rol de beneficiários, que é onde a conduta real costuma se enquadrar."
    }
  },
  {
    id: "ET-039", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Conivência por solidariedade",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 60, probReaparecer: 0.79,
    enunciado: "O espírito de solidariedade entre colegas de repartição justifica que o servidor deixe de comunicar erro ou infração ética cometida por outro servidor, desde que não haja prejuízo ao erário.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "justifica que o servidor deixe de comunicar",
    cognitivo: {
      motivo: "Cobrar que a solidariedade é expressamente afastada como justificativa.",
      palavraCritica: "desde que não haja prejuízo ao erário",
    },
    comentario: {
      resolucao: "ERRADO. O inciso III do art. 5º veda ao servidor 'ser, em função de seu espírito de solidariedade, conivente com erro ou infração a este Código de Ética ou ao Código de Ética de sua profissão'. A lei nomeia a solidariedade justamente para negá-la como escusa. E o item ainda inventa uma condicionante — ausência de prejuízo ao erário — que não existe: a infração ética independe de dano patrimonial. Some-se o dever do art. 4º, XII, de comunicar imediatamente atos contrários ao interesse público.",
      fundamento: "Lei estadual 6.754/2006, art. 5º, III; art. 4º, XII.",
      macete: "Solidariedade não é escusa — a lei cita a palavra para proibir.",
      erroComum: "Aceitar a ausência de dano ao erário como excludente ético.",
      comoBancaPensa: "Transforma em justificativa exatamente o motivo que o dispositivo elege para proibir."
    }
  },

  /* ---------- Comissões de Ética (arts. 6º a 13) ---------- */
  {
    id: "ET-040", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Criação e composição da Comissão de Ética",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.91,
    enunciado: "Em todos os órgãos e entidades do Poder Executivo estadual deverá ser criada, por portaria do respectivo secretário de estado ou do dirigente máximo da entidade, uma Comissão de Ética integrada por três servidores públicos efetivos e respectivos suplentes.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "por portaria ... três servidores públicos efetivos",
    cognitivo: {
      motivo: "Fixar o instrumento de criação e a composição numérica da Comissão.",
      palavraCritica: "três servidores públicos efetivos",
    },
    comentario: {
      resolucao: "CERTO. É o caput do art. 6º da Lei 6.754/2006. Três elementos costumam ser adulterados e todos estão corretos aqui: o instrumento é PORTARIA (não decreto nem lei), o número é TRÊS titulares com respectivos suplentes, e a exigência é de servidores EFETIVOS — o que exclui ocupantes exclusivamente de cargo em comissão. O parágrafo único completa: a portaria deve ser publicada no Diário Oficial do Estado com a indicação nominal de titulares e suplentes.",
      fundamento: "Lei estadual 6.754/2006, art. 6º, caput e parágrafo único.",
      macete: "Portaria · 3 efetivos · com suplentes · publicada no DOE com nomes.",
      erroComum: "Supor criação por decreto do Governador ou composição por cinco membros.",
      comoBancaPensa: "Dispositivo com três variáveis numéricas e formais: campo aberto para alteração."
    }
  },
  {
    id: "ET-041", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Publicidade da portaria de constituição",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.7,
    enunciado: "A portaria que constitui a Comissão de Ética será publicada no Diário Oficial do Estado, dispensada a indicação nominal dos membros titulares e suplentes, para preservar sua independência.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "dispensada a indicação nominal",
    cognitivo: {
      motivo: "Cobrar a exigência de publicidade nominal dos integrantes.",
      palavraCritica: "dispensada",
    },
    comentario: {
      resolucao: "ERRADO. O parágrafo único do art. 6º exige que a portaria seja publicada no Diário Oficial COM A INDICAÇÃO DOS NOMES dos membros titulares e dos respectivos suplentes. O item inverte a regra e ainda oferece uma justificativa plausível — preservar a independência —, que a lei não adota. O sigilo previsto no Código é outro: o art. 11 determina que as DECISÕES sejam divulgadas com omissão dos nomes dos INTERESSADOS. Protege-se quem é julgado, não quem julga.",
      fundamento: "Lei estadual 6.754/2006, art. 6º, parágrafo único; art. 11.",
      macete: "Nome de conselheiro é público; nome de investigado é omitido.",
      erroComum: "Estender aos membros da Comissão o anonimato previsto para os interessados.",
      comoBancaPensa: "Troca o sujeito protegido pelo sigilo, mantendo a ideia geral de reserva."
    }
  },
  {
    id: "ET-042", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Instauração do processo e denúncia",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.84,
    enunciado: "O processo de apuração de prática de ato em desrespeito ao Código será instaurado pela Comissão de Ética de ofício ou em razão de denúncia fundamentada, admitida a denúncia anônima em razão do interesse público na apuração.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "admitida a denúncia anônima",
    cognitivo: {
      motivo: "Cobrar a exigência de identificação do denunciante.",
      palavraCritica: "anônima",
    },
    comentario: {
      resolucao: "ERRADO. O art. 8º admite denúncia formulada por autoridade, servidor público, entidades associativas regularmente constituídas ou 'qualquer cidadão QUE SE IDENTIFIQUE'. A exigência de identificação é expressa, e o item a suprime com justificativa razoável. Note que isso não fecha a porta: a Comissão pode agir DE OFÍCIO, o que na prática permite apurar fato que chegue por via anônima — mas aí a instauração se funda na iniciativa própria do colegiado, não na denúncia.",
      fundamento: "Lei estadual 6.754/2006, art. 8º, caput.",
      macete: "Denúncia exige identificação. O que dispensa denunciante é a atuação de ofício.",
      erroComum: "Aplicar ao Código estadual o entendimento sobre apuração de denúncia anônima em outros contextos.",
      comoBancaPensa: "Remove um requisito expresso e o substitui por um princípio genérico."
    }
  },
  {
    id: "ET-043", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Prazos de manifestação do servidor",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.87,
    enunciado: "Instaurado o processo, o servidor será oficiado para manifestar-se no prazo de cinco dias e, concluídas as diligências, será novamente oficiado para nova manifestação no prazo de três dias.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "cinco dias ... três dias",
    cognitivo: {
      motivo: "Fixar os dois prazos do art. 8º, que decrescem entre a primeira e a segunda manifestação.",
      palavraCritica: "três dias",
    },
    comentario: {
      resolucao: "CERTO. São os §§ 1º e 4º do art. 8º da Lei 6.754/2006. O detalhe que a banca explora é a ordem decrescente: o primeiro prazo é maior (cinco dias, para a defesa inicial) e o segundo, menor (três dias, para falar sobre as diligências já produzidas). É contraintuitivo — espera-se que o prazo final seja igual ou maior —, e por isso o item que iguala os dois em cinco dias engana. Entre uma manifestação e outra, o §2º garante às partes e à própria Comissão a produção de prova documental e testemunhal.",
      fundamento: "Lei estadual 6.754/2006, art. 8º, §§ 1º a 4º.",
      macete: "5 dias na primeira manifestação, 3 na segunda — o prazo diminui.",
      erroComum: "Igualar os dois prazos por simetria.",
      comoBancaPensa: "Dois prazos próximos e desiguais no mesmo artigo: permuta natural."
    }
  },
  {
    id: "ET-044", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Advertência e censura ética",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 70, probReaparecer: 0.93,
    enunciado: "A violação das normas do Código acarreta advertência, aplicável aos servidores que já tiverem deixado o cargo, emprego ou função, e censura ética, aplicável aos que estejam no exercício do cargo efetivo ou em comissão.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "advertência, aplicável aos servidores que já tiverem deixado o cargo",
    cognitivo: {
      motivo: "Cobrar qual cominação cabe a quem está e a quem já saiu do cargo.",
      palavraCritica: "já tiverem deixado o cargo",
    },
    comentario: {
      resolucao: "ERRADO — as duas cominações estão invertidas. Pelo art. 9º, a ADVERTÊNCIA é aplicável a quem está NO EXERCÍCIO do cargo, emprego ou função (inciso I), e a CENSURA ÉTICA a quem JÁ DEIXOU o cargo (inciso II). A lógica é simples quando se percebe: advertir supõe alguém que ainda pode corrigir a conduta no serviço; a quem já saiu resta o registro censório. O parágrafo único acrescenta que a cominação é transcrita na ficha funcional do faltoso por cinco anos.",
      fundamento: "Lei estadual 6.754/2006, art. 9º, I e II, e parágrafo único.",
      macete: "Está no cargo: advertência. Já saiu: censura ética.",
      erroComum: "Presumir que censura é mais branda e cabe a quem permanece.",
      comoBancaPensa: "Inverte dois incisos consecutivos cuja diferença é só o destinatário."
    }
  },
  {
    id: "ET-045", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Registro na ficha funcional",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.8,
    enunciado: "A cominação aplicada pela Comissão de Ética será transcrita na ficha funcional do faltoso por um período de cinco anos, para todos os efeitos legais.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "cinco anos",
    cognitivo: {
      motivo: "Fixar o prazo de permanência do registro ético na ficha funcional.",
      palavraCritica: "cinco anos",
    },
    comentario: {
      resolucao: "CERTO. É o parágrafo único do art. 9º da Lei 6.754/2006. O prazo tem efeito concreto e não apenas simbólico: o próprio dispositivo remete ao art. 6º, e o art. 7º incumbe a Comissão de fornecer os registros de conduta ética aos organismos encarregados do quadro de carreira, para instruir e fundamentar promoções. Ou seja, a cominação ética repercute na progressão funcional durante esses cinco anos.",
      fundamento: "Lei estadual 6.754/2006, art. 9º, parágrafo único; art. 7º.",
      macete: "Cinco anos na ficha — e isso pesa em promoção.",
      erroComum: "Tratar a cominação ética como registro sem consequência prática.",
      comoBancaPensa: "Cobra o prazo e, nos itens seguintes, o efeito dele sobre a carreira."
    }
  },
  {
    id: "ET-046", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Relação com o processo administrativo disciplinar",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.79,
    enunciado: "Sempre que a conduta do servidor ou sua reincidência ensejar a imposição de penalidade, a Comissão de Ética aplicará diretamente a sanção disciplinar cabível, nos termos do Regime Jurídico Único dos Servidores Públicos do Estado de Alagoas.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "aplicará diretamente a sanção disciplinar",
    cognitivo: {
      motivo: "Separar a competência ética da competência disciplinar.",
      palavraCritica: "aplicará diretamente",
    },
    comentario: {
      resolucao: "ERRADO. O art. 10 determina que a Comissão ENCAMINHE sua decisão à autoridade competente para instaurar o processo administrativo disciplinar — ela não aplica penalidade do RJU. As competências são distintas: a Comissão de Ética conhece de atos suscetíveis de advertência ou censura ética (art. 6º); as penalidades disciplinares seguem o rito e as autoridades da Lei 5.247/1991, cujo art. 143 escalona quem aplica cada uma. O mesmo art. 10 prevê ainda comunicação ao conselho profissional do servidor, quando for o caso, e adverte que o retardamento desses encaminhamentos compromete eticamente a própria Comissão.",
      fundamento: "Lei estadual 6.754/2006, art. 10; art. 6º; Lei estadual 5.247/1991, art. 143.",
      macete: "Comissão de Ética adverte ou censura. Punição disciplinar é de outra autoridade.",
      erroComum: "Atribuir à Comissão de Ética poder sancionador disciplinar.",
      comoBancaPensa: "Funde dois regimes sancionadores que a lei mantém separados."
    }
  },
  {
    id: "ET-047", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Divulgação das decisões",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 60, probReaparecer: 0.74,
    enunciado: "As decisões da Comissão de Ética serão resumidas em ementa e, com a omissão dos nomes dos interessados, divulgadas no próprio órgão ou entidade, bem como remetidas às demais Comissões de Ética.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "com a omissão dos nomes dos interessados",
    cognitivo: {
      motivo: "Fixar o modo de divulgação: ementa, sem nomes, e circulação entre comissões.",
      palavraCritica: "omissão dos nomes",
    },
    comentario: {
      resolucao: "CERTO. É o art. 11 da Lei 6.754/2006. A finalidade declarada da circulação entre comissões é a formação da consciência ética na prestação dos serviços públicos estaduais — divulga-se o precedente, não o caso pessoal, o que explica a omissão dos nomes. O parágrafo único acrescenta que todo o expediente deve ser remetido, por translado, à Secretaria Executiva de Administração, Recursos Humanos e Patrimônio, quando se tratar de servidor do Poder Executivo.",
      fundamento: "Lei estadual 6.754/2006, art. 11, caput e parágrafo único.",
      macete: "Divulga-se a tese em ementa, não o nome de quem foi julgado.",
      erroComum: "Supor sigilo integral da decisão ou, no oposto, divulgação nominal.",
      comoBancaPensa: "Cobra o equilíbrio entre publicidade do precedente e proteção do investigado."
    }
  },
  {
    id: "ET-048", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Vedação de non liquet ético",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.77,
    enunciado: "Diante de conduta não prevista expressamente no Código de Ética, a Comissão deverá abster-se de julgar, em respeito ao princípio da tipicidade, arquivando o expediente.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "deverá abster-se de julgar",
    cognitivo: {
      motivo: "Cobrar que a Comissão não pode se eximir alegando falta de previsão.",
      palavraCritica: "princípio da tipicidade",
    },
    comentario: {
      resolucao: "ERRADO. O art. 12 é expresso: a Comissão NÃO PODERÁ eximir-se de fundamentar o julgamento alegando falta de previsão no Código, cabendo-lhe recorrer à analogia, aos costumes e aos princípios éticos e morais conhecidos em outras profissões. O item invoca a tipicidade, que é garantia do direito penal e não se transpõe integralmente ao juízo ético — cujo objeto é a conduta compatível com o decoro, insuscetível de descrição exaustiva. A solução da lei é a mesma do art. 4º da LINDB para o julgador diante da lacuna.",
      fundamento: "Lei estadual 6.754/2006, art. 12; Decreto-Lei 4.657/1942 (LINDB), art. 4º.",
      macete: "Falta de previsão não impede julgar: analogia, costumes e princípios.",
      erroComum: "Importar a tipicidade penal para o juízo ético administrativo.",
      comoBancaPensa: "Usa um princípio real de outro ramo para justificar o oposto do que a lei manda."
    }
  },
  {
    id: "ET-049", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Compromisso solene na posse",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (Edital SESAU/AL 2026)",
    tipo: "CE", dificuldade: 2, tempoIdealSeg: 55, probReaparecer: 0.72,
    enunciado: "Em cada órgão e entidade do Poder Executivo estadual, quem houver de tomar posse ou ser investido em função pública deverá prestar, perante a respectiva Comissão de Ética, compromisso solene de acatamento e observância das regras do Código de Ética Funcional.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "perante a respectiva Comissão de Ética",
    cognitivo: {
      motivo: "Fixar a exigência do compromisso e a autoridade perante a qual se presta.",
      palavraCritica: "perante a respectiva Comissão de Ética",
    },
    comentario: {
      resolucao: "CERTO. É o art. 13 da Lei 6.754/2006. O detalhe cobrável é a AUTORIDADE: o compromisso é prestado perante a Comissão de Ética, não perante o secretário, o dirigente máximo ou o setor de recursos humanos. O ato se soma às formalidades da posse previstas no RJU — assinatura do termo, declaração de bens e de acúmulo de cargos (art. 13, §5º, da Lei 5.247/1991) e prévia inspeção médica (art. 14) —, mas tem fonte e finalidade próprias.",
      fundamento: "Lei estadual 6.754/2006, art. 13; Lei estadual 5.247/1991, arts. 13, § 5º, e 14.",
      macete: "O compromisso ético é prestado perante a COMISSÃO, não perante a chefia.",
      erroComum: "Trocar a Comissão de Ética pela autoridade que dá posse.",
      comoBancaPensa: "Mantém o instituto e troca o destinatário do ato."
    }
  },
  {
    id: "ET-050", disciplina: "Ética no Serviço Público", assunto: "Código de Ética Funcional (AL)", subassunto: "Registros de conduta ética e carreira",
    concurso: "SESAU", cargo: ["Escrivão","Agente","Especialista em Saúde — Fisioterapia"], ano: 2026,
    origem: "Inédita — estilo CEBRASPE (contraexemplo de padrão)",
    tipo: "CE", dificuldade: 3, tempoIdealSeg: 65, probReaparecer: 0.75,
    enunciado: "Incumbe à Comissão de Ética fornecer aos organismos encarregados da execução do quadro de carreira os registros sobre a conduta ética dos servidores, desde que haja autorização expressa do servidor avaliado quanto à divulgação desses dados.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "autorização expressa do servidor avaliado",
    cognitivo: {
      motivo: "Condicionar a um consentimento que o art. 7º não exige o dever de informar da Comissão de Ética.",
      palavraCritica: "desde que",
    },
    comentario: {
      resolucao: "ERRADO. O art. 7º da Lei 6.754/2006 impõe à Comissão de Ética o dever de fornecer esses registros, sem condicioná-lo a qualquer autorização do servidor. O consentimento acrescentado pelo item inverteria a lógica do dispositivo: quem é avaliado passaria a controlar o que a Administração pode saber a seu respeito para fins de promoção. É o par espelhado do ET-018, que traz o mesmo artigo sem o acréscimo.",
      fundamento: "Lei estadual 6.754/2006, art. 7º.",
      macete: "Dever de informar não pede licença ao avaliado.",
      erroComum: "Aceitar a condição por ela soar protetiva da privacidade do servidor.",
      comoBancaPensa: "Enxerta um requisito de consentimento — plausível hoje, e por isso eficaz — num dever legal incondicionado."
    }
  },
];

QUESTOES.push(...QUESTOES_SESAUAL_LOTE61);
