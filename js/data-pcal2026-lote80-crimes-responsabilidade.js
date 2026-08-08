/* =====================================================================
   QUESTLAB — Lote 80: CRIMES DE RESPONSABILIDADE
   Lei nº 1.079/1950 (autoridades federais e governadores) e
   Decreto-Lei nº 201/1967 (prefeitos)

   POR QUE ESTE LOTE EXISTE

   O banco tinha 3 itens sobre a Lei 1.079/1950 e 2 sobre o DL 201/1967
   — e os dois diplomas aparecem juntos no enunciado de prova com
   frequência, porque a banca gosta exatamente da fronteira entre eles.
   A medição por tema mostrou onze pontos com zero cobertura, entre eles
   o regime de sanções do art. 2º, a legitimidade do cidadão para
   denunciar, o limite temporal do art. 15 e o alcance restrito do rol
   do art. 39.

   O QUE A BANCA COBRA AQUI, E O QUE O BANCO NÃO TREINAVA

   Três fronteiras concentram quase tudo:

     Sanção — a Lei 1.079 prevê perda do cargo e inabilitação até cinco
       anos. Não prevê suspensão de direitos políticos, e não prevê pena
       privativa de liberdade. A assertiva errada acrescenta uma delas.

     Quem responde por qual rol — o art. 39 lista condutas de Ministro
       do STF e só dele. O art. 39-A estende aos Presidentes de
       Tribunais (inclusive de Contas) apenas as condutas do art. 10.
       Trocar um pelo outro é o erro que a CEBRASPE monta.

     Judiciário x Câmara — no DL 201, o art. 1º define crimes julgados
       pelo Poder Judiciário, independentemente da Câmara; o art. 4º
       define infrações político-administrativas julgadas pela Câmara.
       O nome "crime de responsabilidade" no art. 1º é enganoso, e a
       banca explora isso.

   E há um contraste que vale um item inteiro: pela Lei 1.079, art. 15,
   a denúncia só é recebida enquanto o acusado não deixou o cargo; no
   DL 201, a Súmula 703 do STF diz o oposto — a extinção do mandato do
   prefeito não impede o processo. Mesma expressão, regimes invertidos.

   Gabarito: 9 CERTO / 9 ERRADO. Sobre a relação entre comprimento do
   enunciado e gabarito, vale a nota metodológica do lote 77: o
   equilíbrio foi medido depois de escrito, e o limiar do validador se
   aplica ao banco inteiro, não a um lote de 18 itens.
   ===================================================================== */

const CARGOS80 = ["Escrivão", "Agente"];
const BASE80 = {
  concurso: "PCAL", cargo: CARGOS80, ano: 2026,
  tipo: "CE", probReaparecer: 0.85,
  disciplina: "Legislação Especial",
};

const QUESTOES_PCAL_LOTE80 = [

  /* ===== LEI 1.079/1950 — REGIME DE SANÇÕES (ARTS. 2º E 3º) ===== */

  {
    ...BASE80,
    id: "LE-279", assunto: "Crimes de responsabilidade", subassunto: "Sanções — Lei 1.079/1950, art. 2º",
    origem: "Inédita — estilo CEBRASPE (Lei 1.079/1950, art. 2º)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "O governador condenado pelas condutas previstas na Lei nº 1.079/1950 sujeita-se à perda do cargo, com inabilitação de até cinco anos para o exercício de qualquer função pública, e à suspensão dos direitos políticos por até dez anos.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "suspensão dos direitos políticos por até dez anos",
    cognitivo: {
      motivo: "Cobrar o rol EXATO de sanções do art. 2º, acrescentando uma consequência que a lei não prevê.",
      palavraCritica: "suspensão dos direitos políticos",
    },
    comentario: {
      resolucao: "ERRADO. O art. 2º prevê duas sanções, e apenas duas: perda do cargo e inabilitação, até cinco anos, para o exercício de qualquer função pública. Não há, na Lei nº 1.079/1950, suspensão de direitos políticos por dez anos — esse prazo pertence ao repertório da improbidade administrativa e da inelegibilidade, e é enxertado aqui justamente porque soa familiar.",
      fundamento: "Lei nº 1.079/1950, art. 2º.",
      macete: "Na Lei 1.079 a conta é simples: duas sanções, cinco anos. Qualquer número diferente disso é enxerto.",
      erroComum: "Importar as consequências da Lei de Improbidade, que o candidato estudou mais recentemente.",
      comoBancaPensa: "Acerta as duas primeiras sanções para dar credibilidade e erra na terceira, que nem existe."
    }
  },

  {
    ...BASE80,
    id: "LE-280", assunto: "Crimes de responsabilidade", subassunto: "Tentativa — Lei 1.079/1950, art. 2º",
    origem: "Inédita — estilo CEBRASPE (Lei 1.079/1950, art. 2º)",
    dificuldade: 3, tempoIdealSeg: 60,
    enunciado: "Os crimes definidos na Lei nº 1.079/1950 são passíveis da pena de perda do cargo, com inabilitação para o exercício de função pública, ainda quando simplesmente tentados.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ainda quando simplesmente tentados",
    cognitivo: {
      motivo: "Cobrar a equiparação da tentativa à consumação, que o art. 2º faz expressamente.",
      palavraCritica: "tentados",
    },
    comentario: {
      resolucao: "CERTO. O art. 2º alcança os crimes 'ainda quando simplesmente tentados'. É uma opção deliberada do legislador: como a sanção é política e visa afastar do cargo quem o desmerece, a tentativa já revela a incompatibilidade que se quer sancionar.",
      fundamento: "Lei nº 1.079/1950, art. 2º.",
      macete: "Aqui não há a redução de pena da tentativa do Código Penal — a sanção é a mesma.",
      erroComum: "Aplicar por reflexo o art. 14, parágrafo único, do CP, e supor redução de um a dois terços.",
      comoBancaPensa: "Cobra a literalidade num ponto que contraria a intuição formada em Direito Penal comum."
    }
  },

  {
    ...BASE80,
    id: "LE-281", assunto: "Crimes de responsabilidade", subassunto: "Independência das instâncias — Lei 1.079/1950, art. 3º",
    origem: "Inédita — estilo CEBRASPE (Lei 1.079/1950, art. 3º)",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "A imposição da perda do cargo com inabilitação não exclui o processo e o julgamento do acusado por crime comum, na justiça ordinária.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não exclui ... crime comum",
    cognitivo: {
      motivo: "Cobrar a independência entre a instância político-administrativa e a penal comum.",
      palavraCritica: "não exclui",
    },
    comentario: {
      resolucao: "CERTO. É a redação do art. 3º. O mesmo fato pode configurar, a um só tempo, crime de responsabilidade — julgado pelo órgão político — e crime comum, julgado pela justiça ordinária. As duas apurações correm sem que uma consuma a outra.",
      fundamento: "Lei nº 1.079/1950, art. 3º.",
      macete: "Instância política e instância penal não se anulam: uma tira o cargo, a outra pode tirar a liberdade.",
      erroComum: "Enxergar bis in idem onde há apenas independência de instâncias.",
      comoBancaPensa: "Item de literalidade que serve de base para outros mais difíceis sobre concorrência de regimes."
    }
  },

  /* ===== LEI 1.079/1950 — CRIMES CONTRA A LEI ORÇAMENTÁRIA (ART. 10) ===== */

  {
    ...BASE80,
    id: "LE-282", assunto: "Crimes de responsabilidade", subassunto: "Despesa não autorizada — DL 201/1967, art. 1º, V",
    origem: "Inédita — estilo CEBRASPE (Decreto-Lei nº 201/1967, art. 1º, V)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Ordenar ou efetuar despesas não autorizadas por lei configura, para o prefeito municipal, mera irregularidade sujeita ao controle do Tribunal de Contas, não estando tipificada entre os crimes do art. 1º do Decreto-Lei nº 201/1967.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "mera irregularidade",
    cognitivo: {
      motivo: "Rebaixar a conduta a ilícito administrativo quando ela está expressamente tipificada como crime.",
      palavraCritica: "mera irregularidade",
    },
    comentario: {
      resolucao: "ERRADO. A conduta está no art. 1º, V, do Decreto-Lei nº 201/1967: 'ordenar ou efetuar despesas não autorizadas por lei, ou realizá-las em desacordo com as normas financeiras pertinentes'. É crime, de ação pública, punido com detenção de três meses a três anos — e não simples irregularidade contábil. O controle pelo Tribunal de Contas existe, mas não substitui a persecução penal.",
      fundamento: "Decreto-Lei nº 201/1967, art. 1º, V, e § 1º.",
      macete: "Fiscalização do TCE e ação penal correm em paralelo — a existência de uma não descaracteriza a outra.",
      erroComum: "Supor que o que passa pelo Tribunal de Contas se esgota na esfera administrativa.",
      comoBancaPensa: "Oferece uma saída plausível — 'é matéria de contas' — para quem não decorou o rol do art. 1º."
    }
  },

  {
    ...BASE80,
    id: "LE-283", assunto: "Crimes de responsabilidade", subassunto: "Lei orçamentária — Lei 1.079/1950, art. 10",
    origem: "Inédita — estilo CEBRASPE (Lei 1.079/1950, arts. 2º e 10)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "O governador que infringe, patentemente e de qualquer modo, dispositivo da lei orçamentária responde por crime de responsabilidade, para o qual a sanção prevista não é privativa de liberdade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não é privativa de liberdade",
    cognitivo: {
      motivo: "Reunir o tipo do art. 10, item 4, e a natureza da sanção do art. 2º num único julgamento.",
      palavraCritica: "patentemente",
    },
    comentario: {
      resolucao: "CERTO. O art. 10, item 4, tipifica 'infringir, patentemente, e de qualquer modo, dispositivo da lei orçamentária'. E a sanção da Lei nº 1.079/1950 é a do art. 2º — perda do cargo e inabilitação —, de natureza política, não privativa de liberdade. As duas afirmações da assertiva estão corretas e se sustentam.",
      fundamento: "Lei nº 1.079/1950, art. 10, item 4, c/c art. 2º.",
      macete: "Crime de responsabilidade da Lei 1.079 nunca prende: tira o cargo e inabilita.",
      erroComum: "Rejeitar o item por estranhar um 'crime' sem pena de prisão.",
      comoBancaPensa: "Testa se o candidato sabe que o rótulo 'crime' aqui não implica sanção penal clássica."
    }
  },

  {
    ...BASE80,
    id: "LE-284", assunto: "Crimes de responsabilidade", subassunto: "Decisões judiciárias — Lei 1.079/1950, art. 12",
    origem: "Inédita — estilo CEBRASPE (Lei 1.079/1950, art. 12)",
    dificuldade: 2, tempoIdealSeg: 60,
    enunciado: "Impedir, por qualquer meio, o efeito dos atos, mandados ou decisões do Poder Judiciário configura crime de responsabilidade contra o cumprimento das decisões judiciárias.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "impedir ... o efeito dos atos, mandados ou decisões",
    cognitivo: {
      motivo: "Cobrar um capítulo pouco lido da lei, o do art. 12, que a banca usa quando quer item de literalidade pura.",
      palavraCritica: "por qualquer meio",
    },
    comentario: {
      resolucao: "CERTO. É o item 1 do art. 12. O capítulo protege a efetividade da jurisdição: além de impedir o efeito das decisões, também são crimes recusar-lhes cumprimento, deixar de atender requisição de intervenção federal do STF ou do TSE e frustrar pagamento determinado por sentença.",
      fundamento: "Lei nº 1.079/1950, art. 12, item 1.",
      macete: "O art. 12 tem quatro itens e todos giram em torno de uma ideia: desobedecer ao Judiciário.",
      erroComum: "Procurar essa conduta no Código Penal, entre os crimes contra a administração da justiça.",
      comoBancaPensa: "Reproduz o texto legal quase sem alteração, contando com o desconhecimento do artigo."
    }
  },

  /* ===== LEI 1.079/1950 — DENÚNCIA (ARTS. 14 A 16) ===== */

  {
    ...BASE80,
    id: "LE-285", assunto: "Crimes de responsabilidade", subassunto: "Legitimidade para denunciar — Lei 1.079/1950, arts. 14 e 16",
    origem: "Inédita — estilo CEBRASPE (Lei 1.079/1950, arts. 14 e 16)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "É permitido a qualquer cidadão denunciar o Presidente da República por crime de responsabilidade perante a Câmara dos Deputados, desde que a denúncia seja subscrita por, no mínimo, cinquenta cidadãos.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "no mínimo, cinquenta cidadãos",
    cognitivo: {
      motivo: "Acrescentar um requisito de subscrição coletiva que a lei não impõe à denúncia por crime de responsabilidade.",
      palavraCritica: "cinquenta cidadãos",
    },
    comentario: {
      resolucao: "ERRADO. O art. 14 exige apenas 'qualquer cidadão' — a legitimidade é individual, e não há número mínimo de subscritores. O que o art. 16 exige é outra coisa: firma reconhecida, documentos que comprovem o alegado e, nos crimes de prova testemunhal, rol de cinco testemunhas no mínimo. O item troca um requisito real por um inventado.",
      fundamento: "Lei nº 1.079/1950, arts. 14 e 16.",
      macete: "Um cidadão basta. O número cinco que existe na lei é de testemunhas, não de denunciantes.",
      erroComum: "Confundir com exigências de subscrição coletiva típicas de iniciativa popular legislativa.",
      comoBancaPensa: "Mistura um requisito verdadeiro do art. 16 com um número falso, para o item parecer técnico."
    }
  },

  {
    ...BASE80,
    id: "LE-286", assunto: "Crimes de responsabilidade", subassunto: "Limite temporal da denúncia — Lei 1.079/1950, art. 15",
    origem: "Inédita — estilo CEBRASPE (Lei 1.079/1950, art. 15)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "A denúncia por crime de responsabilidade poderá ser recebida ainda que o denunciado já tenha deixado definitivamente o cargo, bastando que o fato imputado tenha ocorrido durante o exercício funcional.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "ainda que ... tenha deixado definitivamente o cargo",
    cognitivo: {
      motivo: "Inverter a condição do art. 15, que vincula o recebimento da denúncia à permanência no cargo.",
      palavraCritica: "ainda que",
    },
    comentario: {
      resolucao: "ERRADO. O art. 15 é expresso: a denúncia só poderá ser recebida enquanto o denunciado não tiver, por qualquer motivo, deixado definitivamente o cargo. A razão é a natureza da sanção — perda do cargo e inabilitação: quem já saiu não pode perder o que não tem, e o processo perde objeto. Note que 'por qualquer motivo' alcança inclusive a posse em outra função pública.",
      fundamento: "Lei nº 1.079/1950, art. 15.",
      macete: "A sanção é perder o cargo; sem cargo, não há o que perder — e sem isso, não há denúncia a receber.",
      erroComum: "Raciocinar pela lógica penal comum, em que sair do cargo não extingue a punibilidade.",
      comoBancaPensa: "Oferece um critério razoável — o fato ocorreu no exercício — para encobrir a condição legal real."
    }
  },

  {
    ...BASE80,
    id: "LE-287", assunto: "Crimes de responsabilidade", subassunto: "Lei 1.079 x DL 201 — Súmula 703 do STF",
    origem: "Inédita — estilo CEBRASPE (Lei 1.079/1950, art. 15; Súmula 703 do STF)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "Enquanto a denúncia fundada na Lei nº 1.079/1950 só pode ser recebida enquanto o denunciado não tiver deixado definitivamente o cargo, a extinção do mandato do prefeito não impede a instauração de processo pelo crime previsto no art. 1º do Decreto-Lei nº 201/1967.",
    gabarito: "C", pegadinha: "juris-mais-lei", palavraChave: "não impede a instauração de processo",
    cognitivo: {
      motivo: "Cobrar o contraste entre dois regimes que usam o mesmo rótulo — 'crime de responsabilidade' — e funcionam de modo oposto.",
      palavraCritica: "não impede",
    },
    comentario: {
      resolucao: "CERTO. São regimes distintos. Na Lei nº 1.079/1950 a sanção é política e o art. 15 condiciona o recebimento da denúncia à permanência no cargo. Já o art. 1º do DL nº 201/1967, apesar do nome, define crimes de ação pública julgados pelo Judiciário, com pena privativa de liberdade — por isso a Súmula 703 do STF afirma que a extinção do mandato não impede a instauração do processo.",
      fundamento: "Lei nº 1.079/1950, art. 15; Súmula 703 do STF; Decreto-Lei nº 201/1967, art. 1º.",
      macete: "Sanção política morre com o cargo; pena criminal, não.",
      erroComum: "Uniformizar os dois diplomas por causa da expressão comum 'crime de responsabilidade'.",
      comoBancaPensa: "Coloca os dois regimes lado a lado no mesmo item — formato recorrente em prova de legislação especial."
    }
  },

  /* ===== LEI 1.079/1950 — ROL DO ART. 39 E SUA EXTENSÃO ===== */

  {
    ...BASE80,
    id: "LE-288", assunto: "Crimes de responsabilidade", subassunto: "Alcance do art. 39 — Lei 1.079/1950",
    origem: "Inédita — estilo CEBRASPE (Lei 1.079/1950, arts. 39 e 39-A)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "Ministro do Tribunal de Contas da União que altere, salvo por via de recurso, voto já proferido em sessão responde por crime de responsabilidade do art. 39 da Lei nº 1.079/1950.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "por força do rol do art. 39",
    cognitivo: {
      motivo: "Estender a Ministro de Tribunal de Contas um rol que a lei reserva a Ministro do Supremo Tribunal Federal.",
      palavraCritica: "art. 39",
    },
    comentario: {
      resolucao: "ERRADO. A conduta descrita está mesmo no art. 39, item 1 — mas o caput restringe esse rol aos Ministros do Supremo Tribunal Federal. A extensão a outros tribunais vem do art. 39-A, e é bem mais estreita: alcança apenas as condutas do art. 10 (lei orçamentária), e apenas os Presidentes daqueles tribunais, ou seus substitutos no exercício da presidência.",
      fundamento: "Lei nº 1.079/1950, art. 39, caput e item 1, e art. 39-A, caput e parágrafo único.",
      macete: "Art. 39 é rol de Ministro do STF. Para os demais tribunais, só o art. 10 chega — e só ao Presidente.",
      erroComum: "Aceitar o item porque a conduta descrita está, de fato, escrita na lei.",
      comoBancaPensa: "Descreve a conduta com fidelidade e erra no destinatário — o candidato reconhece o texto e marca certo."
    }
  },

  {
    ...BASE80,
    id: "LE-289", assunto: "Crimes de responsabilidade", subassunto: "Extensão do art. 39-A — Lei 1.079/1950",
    origem: "Inédita — estilo CEBRASPE (Lei 1.079/1950, art. 39-A)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "As condutas previstas no art. 10 da Lei nº 1.079/1950 constituem crimes de responsabilidade também dos Presidentes dos Tribunais de Contas, quando por eles ordenadas ou praticadas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "quando por eles ordenadas ou praticadas",
    cognitivo: {
      motivo: "Cobrar a extensão do art. 39-A, incluída pela Lei nº 10.028/2000 para dar efetividade à responsabilidade fiscal.",
      palavraCritica: "art. 10",
    },
    comentario: {
      resolucao: "CERTO. O parágrafo único do art. 39-A estende as condutas do art. 10 aos Presidentes — e respectivos substitutos no exercício da presidência — dos Tribunais Superiores, dos Tribunais de Contas, dos TRFs, do Trabalho e Eleitorais, dos Tribunais de Justiça, e aos Juízes Diretores de Foro. A cláusula final 'quando por eles ordenadas ou praticadas' é o que limita a imputação a quem tem o poder de decisão orçamentária.",
      fundamento: "Lei nº 1.079/1950, art. 39-A, caput e parágrafo único (Lei nº 10.028/2000).",
      macete: "A extensão do art. 39-A é só orçamentária, e alcança quem preside — não todo o colegiado.",
      erroComum: "Achar que a extensão abrange todo o rol de condutas da lei.",
      comoBancaPensa: "Cobra a literalidade de um dispositivo inserido pela LRF, tema caro à banca em provas de controle."
    }
  },

  {
    ...BASE80,
    id: "LE-290", assunto: "Crimes de responsabilidade", subassunto: "Procurador-Geral da República — Lei 1.079/1950, art. 40",
    origem: "Inédita — estilo CEBRASPE (Lei 1.079/1950, art. 40)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "Constitui crime de responsabilidade do Procurador-Geral da República recusar-se à prática de ato que lhe incumba, mas não emitir parecer em causa na qual seja, por lei, suspeito.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "mas não emitir parecer",
    cognitivo: {
      motivo: "Excluir do rol do art. 40 uma conduta que consta dele, e que aliás é a primeira listada.",
      palavraCritica: "mas não",
    },
    comentario: {
      resolucao: "ERRADO. As duas condutas são crime de responsabilidade do PGR. O art. 40 lista, no item 1, 'emitir parecer, quando, por lei, seja suspeito na causa' e, no item 2, 'recusar-se a prática de ato que lhe incumba'. O item reconhece uma e nega a outra, quando ambas estão no mesmo artigo.",
      fundamento: "Lei nº 1.079/1950, art. 40, itens 1 e 2.",
      macete: "O art. 40 tem quatro itens; agir quando suspeito e recusar-se a agir estão os dois lá.",
      erroComum: "Marcar certo por reconhecer a conduta afirmada, sem conferir a que foi negada.",
      comoBancaPensa: "Constrói a assertiva com uma verdade seguida de uma exclusão falsa — o padrão 'verdade mais falso'."
    }
  },

  {
    ...BASE80,
    id: "LE-291", assunto: "Crimes de responsabilidade", subassunto: "Duplo regime sancionatório — jurisprudência do STF",
    origem: "Inédita — estilo CEBRASPE (STF, Pet 3.240 AgR/DF)",
    dificuldade: 3, tempoIdealSeg: 80,
    enunciado: "Conforme a jurisprudência do Supremo Tribunal Federal, não se admite a concorrência entre dois regimes de responsabilidade político-administrativa para os agentes políticos.",
    gabarito: "E", pegadinha: "juris-inventada", palavraChave: "não se admite a concorrência",
    cognitivo: {
      motivo: "Atribuir ao STF entendimento oposto ao que a Corte firmou sobre o duplo regime sancionatório.",
      palavraCritica: "imune",
    },
    comentario: {
      resolucao: "ERRADO. O STF firmou o entendimento contrário: os agentes políticos submetem-se a duplo regime sancionatório, respondendo tanto por improbidade administrativa quanto por crime de responsabilidade. A única exceção reconhecida é o Presidente da República. A tese da imunidade recíproca entre os regimes chegou a ser sustentada em julgado antigo, mas não prevaleceu.",
      fundamento: "STF, Pet 3.240 AgR/DF; Lei nº 1.079/1950, art. 3º.",
      macete: "Duplo regime é a regra; o Presidente da República é a exceção.",
      erroComum: "Lembrar da orientação antiga e superada, que excluía agentes políticos da improbidade.",
      comoBancaPensa: "Enuncia uma tese jurisprudencial plausível e já superada, sem sinalizar que foi abandonada."
    }
  },

  /* ===== DECRETO-LEI 201/1967 — PREFEITOS ===== */

  {
    ...BASE80,
    id: "LE-292", assunto: "Crimes de responsabilidade", subassunto: "Rito — DL 201/1967, art. 2º, I",
    origem: "Inédita — estilo CEBRASPE (Decreto-Lei nº 201/1967, art. 2º, I)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "No processo dos crimes do art. 1º do Decreto-Lei nº 201/1967, o juiz, antes de receber a denúncia, ordenará a notificação do acusado para apresentar defesa prévia no prazo de cinco dias.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "antes de receber a denúncia",
    cognitivo: {
      motivo: "Cobrar a defesa prévia anterior ao recebimento da denúncia, peculiaridade do rito do art. 2º.",
      palavraCritica: "antes de receber",
    },
    comentario: {
      resolucao: "CERTO. É o inciso I do art. 2º. O rito é o comum do juízo singular do CPP, com modificações — e a primeira delas é esta contraditório prévio ao recebimento da denúncia. Se o acusado não for encontrado para a notificação, nomeia-se defensor, a quem cabe apresentar a defesa no mesmo prazo.",
      fundamento: "Decreto-Lei nº 201/1967, art. 2º, I.",
      macete: "Defesa prévia ANTES do recebimento — cinco dias. A ordem das fases é o que a banca inverte.",
      erroComum: "Aplicar a sequência do rito comum, em que a resposta à acusação vem depois do recebimento.",
      comoBancaPensa: "Troca o momento processual: 'após receber a denúncia' tornaria o item errado sem mudar mais nada."
    }
  },

  {
    ...BASE80,
    id: "LE-293", assunto: "Crimes de responsabilidade", subassunto: "Infrações político-administrativas — DL 201/1967, art. 4º",
    origem: "Inédita — estilo CEBRASPE (Decreto-Lei nº 201/1967, art. 4º)",
    dificuldade: 3, tempoIdealSeg: 70,
    enunciado: "A infração político-administrativa do art. 4º do Decreto-Lei nº 201/1967 é sancionada com a cassação do mandato e com a inabilitação, por cinco anos, para cargo ou função pública.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "inabilitado, pelo prazo de cinco anos",
    cognitivo: {
      motivo: "Somar à sanção correta do art. 4º um efeito que pertence à condenação criminal do art. 1º, § 2º.",
      palavraCritica: "inabilitado",
    },
    comentario: {
      resolucao: "ERRADO. O art. 4º sujeita as infrações político-administrativas ao julgamento pela Câmara dos Vereadores e as sanciona com a CASSAÇÃO DO MANDATO — só isso. A inabilitação por cinco anos para cargo ou função pública é efeito da condenação criminal definitiva pelos crimes do art. 1º, prevista no § 2º daquele artigo, e depende de sentença do Poder Judiciário. O item mistura as consequências de dois regimes distintos.",
      fundamento: "Decreto-Lei nº 201/1967, art. 4º, caput, e art. 1º, § 2º.",
      macete: "Câmara cassa o mandato. Só o juiz inabilita.",
      erroComum: "Supor que o julgamento político produz os mesmos efeitos acessórios da condenação penal.",
      comoBancaPensa: "Começa com a sanção certa e acrescenta uma segunda que não existe naquele artigo."
    }
  },

  {
    ...BASE80,
    id: "LE-294", assunto: "Crimes de responsabilidade", subassunto: "Penas — DL 201/1967, art. 1º, § 1º",
    origem: "Inédita — estilo CEBRASPE (Decreto-Lei nº 201/1967, art. 1º, § 1º)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "Apropriar-se de bens ou rendas públicas e utilizar-se indevidamente deles em proveito próprio ou alheio são punidos com reclusão, de dois a doze anos, ao passo que as demais condutas do art. 1º do Decreto-Lei nº 201/1967 são punidas com detenção, de três meses a três anos.",
    gabarito: "C", pegadinha: "troca-numerica", palavraChave: "reclusão, de dois a doze anos",
    cognitivo: {
      motivo: "Cobrar a dosimetria do § 1º, que separa os dois primeiros incisos de todos os demais.",
      palavraCritica: "itens I e II",
    },
    comentario: {
      resolucao: "CERTO. O § 1º do art. 1º estabelece exatamente essa divisão: os itens I e II — apropriação e utilização indevida de bens, rendas ou serviços públicos — são punidos com reclusão de dois a doze anos; todos os demais, com detenção de três meses a três anos. A diferença é grande e a banca costuma trocar as faixas de lugar.",
      fundamento: "Decreto-Lei nº 201/1967, art. 1º, § 1º.",
      macete: "Dois incisos, dois a doze anos de reclusão. O resto é detenção curta.",
      erroComum: "Aplicar a pena mais grave a todo o rol, por associação com a gravidade do tema.",
      comoBancaPensa: "Item de números — se um deles estivesse trocado, o gabarito viraria; aqui todos conferem."
    }
  },

  {
    ...BASE80,
    id: "LE-295", assunto: "Crimes de responsabilidade", subassunto: "Crime eleitoral do Presidente — competência",
    origem: "Inédita — estilo CEBRASPE (CF/88, arts. 51, I, 52, I, e 102, I, 'b')",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "O Presidente da República que pratica crime eleitoral na disputa pela reeleição pode ser julgado pelo Senado Federal por crime de responsabilidade, após a admissão da acusação por dois terços dos membros da Câmara dos Deputados.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "crime eleitoral ... crime de responsabilidade",
    cognitivo: {
      motivo: "Converter um crime comum em crime de responsabilidade para deslocar a competência de julgamento.",
      palavraCritica: "crime eleitoral",
    },
    comentario: {
      resolucao: "ERRADO. Crime eleitoral é crime COMUM. Admitida a acusação por dois terços da Câmara, o Presidente é julgado pelo Supremo Tribunal Federal nas infrações penais comuns, e só perante o Senado Federal nos crimes de responsabilidade. O quórum descrito no item está certo; o órgão julgador e a natureza da infração, não.",
      fundamento: "CF/88, art. 51, I; art. 52, I; art. 86, caput; art. 102, I, 'b'.",
      macete: "Comum vai ao STF; de responsabilidade vai ao Senado. O quórum de 2/3 da Câmara é o mesmo nos dois.",
      erroComum: "Ver o quórum correto de dois terços e validar o item inteiro por causa dele.",
      comoBancaPensa: "Acerta o rito para dar credibilidade e erra a natureza do crime, que é o que define a competência."
    }
  },

  {
    ...BASE80,
    id: "LE-296", assunto: "Crimes de responsabilidade", subassunto: "Inércia do MP estadual — DL 201/1967, art. 2º, § 2º",
    origem: "Inédita — estilo CEBRASPE (Decreto-Lei nº 201/1967, art. 2º, § 2º)",
    dificuldade: 3, tempoIdealSeg: 75,
    enunciado: "Não atendidas pela autoridade policial ou pelo Ministério Público estadual as providências para a abertura do inquérito ou a instauração da ação penal contra o prefeito, elas poderão ser requeridas ao Procurador-Geral da República.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "requeridas ao Procurador-Geral da República",
    cognitivo: {
      motivo: "Cobrar a válvula de escape do § 2º do art. 2º, que surpreende por deslocar a providência à esfera federal.",
      palavraCritica: "Procurador-Geral da República",
    },
    comentario: {
      resolucao: "CERTO. É a redação do § 2º do art. 2º. O dispositivo é de 1967 e reflete a organização do Ministério Público anterior à Constituição de 1988, mas continua no texto do decreto-lei — e a banca cobra o texto. O § 1º, no mesmo artigo, permite que órgãos federais, estaduais ou municipais interessados requeiram a abertura do inquérito e atuem como assistentes da acusação.",
      fundamento: "Decreto-Lei nº 201/1967, art. 2º, §§ 1º e 2º.",
      macete: "Inércia local no caso de prefeito: o decreto-lei manda bater na porta do PGR.",
      erroComum: "Descartar a alternativa por parecer incompatível com a autonomia dos MPs estaduais.",
      comoBancaPensa: "Escolhe dispositivo antigo e pouco lido, cuja literalidade contraria a intuição institucional atual."
    }
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE80);
