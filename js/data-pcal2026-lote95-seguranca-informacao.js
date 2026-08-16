/* =====================================================================
   QUESTLAB — Lote 95: SEGURANÇA DA INFORMAÇÃO
   Premissas, criptografia, certificado digital, redes e Deep/Dark Web

   ORIGEM. Quatro PDFs entregues pelo usuário, de um mesmo conjunto de
   estudo de Informática / Segurança da Informação:

     01 - Exercício  - Segurança da Informação - Premissas
     01 - Material   - Segurança da Informação - Premissas
     02 - Exercícios - Segurança da Informação - Segurança em Redes
     02 - Material   - Segurança da Informação - Segurança de rede

   Os dois arquivos de "Exercício" trazem 10 questões CERTO/ERRADO com
   gabarito e um comentário curto de uma linha. Os dois de "Material"
   trazem a teoria correspondente.

   AUTORIA, CONFORME DECLARADO PELO USUÁRIO

   Os quatro PDFs trazem, no rodapé de todas as páginas, o nome "FÁBIO
   SANTOS VASCONCELOS", o endereço estudosaprova123@gmail.com e a frase
   "Proibida a reprodução não autorizada". Perguntado sobre isso, o
   usuário esclareceu:

     — os EXERCÍCIOS (as 10 questões com gabarito) são de autoria dele;
     — o MATERIAL DE APOIO é texto de domínio público.

   Fica registrado aqui porque quem abrir os PDFs vai ler outro nome no
   rodapé e merece encontrar a explicação junto do dado, não depois.

   COMO O LOTE FOI MONTADO, DE TODO MODO

     — As 10 ASSERTIVAS entraram com a redação original, palavra por
       palavra.

     — Os COMENTÁRIOS foram escritos aqui. O comentário original tem de
       três a seis palavras ("Tunelamento seguro.", "Usa apenas uma
       chave.") e está preservado como frase de abertura da resolução,
       porque o pedido foi complementá-lo, não substituí-lo. Todo o
       restante da resolução é redação nova.

     — O MATERIAL DE APOIO não foi transcrito. Serviu como fonte de
       FATOS — quais algoritmos são simétricos, o que a AC mantém, o que
       o IPsec fornece — e esses fatos foram reescritos no formato do
       sistema. Não porque houvesse impedimento, mas porque transcrever
       apostila não gera questão: gera texto corrido.

   O QUE ESTE LOTE TEM

     TI-250 a TI-259  as 10 questões do material, marcadas como ALTA
                      INCIDÊNCIA (`probReaparecer: 0.92`, o maior valor
                      do banco — o teto anterior era 0.90).
     TI-260 a TI-290  31 questões novas, escritas a partir da teoria dos
                      dois PDFs de Material, cobrindo o que os exercícios
                      deixaram de fora.

   UM CONFLITO INTERNO DO MATERIAL, RESOLVIDO PELO MAIS RECENTE

   O PDF de Segurança de Rede afirma, na mesma página, duas coisas
   incompatíveis: que "atualmente, o sistema mais seguro adotado é o
   WPA-2 Personal" e que o WPA-3 "é considerado o padrão mais recente e
   seguro para redes Wi-Fi". O gabarito comentado do exercício fecha com
   o WPA3. Aplicada a regra da casa — em conflito, prevalece o mais
   recente —, o banco fica ancorado no WPA3 (TI-257 e TI-284). A frase
   sobre o WPA-2 é resquício de edição anterior do material e não foi
   transformada em questão.

   EQUILÍBRIO C/E. 21 CERTO e 20 ERRADO (51,2%), alinhado à média do
   banco. As 10 originais são 8 C e 2 E — desequilíbrio que veio do
   material e foi compensado no bloco novo, não corrigido no bloco dele.
   ===================================================================== */

const CARGOS95 = ["Escrivão", "Agente"];
const BASE95 = {
  concurso: "PCAL", cargo: CARGOS95, ano: 2026,
  tipo: "CE", disciplina: "TI e Segurança Cibernética",
};

/* Alta incidência: as 10 do material do usuário. */
const ALTA95 = { ...BASE95, probReaparecer: 0.92,
  origem: "Material do usuário — Exercícios de Fixação: Segurança da Informação (assertiva original)" };

/* Derivadas da teoria dos PDFs de Material. */
const NOVA95 = { ...BASE95, probReaparecer: 0.84,
  origem: "Autoral QuestLab — redigida a partir da teoria de Segurança da Informação" };

const QUESTOES_PCAL_LOTE95 = [

  /* ==================================================================
     BLOCO 1 — AS 10 QUESTÕES DO MATERIAL (alta incidência)
     ================================================================== */

  {
    ...ALTA95,
    id: "TI-250", assunto: "Segurança da informação", subassunto: "Premissas — questão 1 do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A confidencialidade garante que apenas usuários autorizados tenham acesso às informações.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "confidencialidade",
    cognitivo: {
      motivo: "Fixar a definição da premissa mais cobrada da tríade CID.",
      palavraCritica: "apenas usuários autorizados",
    },
    comentario: {
      resolucao: "CERTO. Proteção contra acesso indevido. A confidencialidade é a premissa que impede que a informação chegue a quem não tem autorização para vê-la — dados pessoais, segredo comercial, informação estratégica. O meio técnico clássico de obtê-la é a criptografia: sem a chave correta, o conteúdo permanece ilegível ainda que o arquivo seja interceptado. Em prova, a expressão que denuncia a confidencialidade é \"não permite ACESSAR\".",
      fundamento: "Premissas da segurança da informação — confidencialidade (tríade CID).",
      macete: "ACESSAR é confidencialidade. ALTERAR é integridade. ESTAR NO AR é disponibilidade.",
      erroComum: "Confundir com integridade, que trata de alteração e não de acesso.",
      comoBancaPensa: "Define uma premissa e troca o nome por outra da mesma tríade — a troca de conceito é o padrão da casa aqui.",
    },
  },

  {
    ...ALTA95,
    id: "TI-251", assunto: "Segurança da informação", subassunto: "Premissas — questão 2 do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A integridade assegura que os dados não sejam alterados de forma não autorizada.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "integridade",
    cognitivo: {
      motivo: "Fixar a definição de integridade pela palavra que a banca usa: alteração.",
      palavraCritica: "alterados de forma não autorizada",
    },
    comentario: {
      resolucao: "CERTO. Dados íntegros. A integridade garante que a informação permaneça completa, exata e livre de modificação indevida — não que ela seja secreta, nem que esteja no ar. É a premissa verificada pelo algoritmo de hash: recalcula-se o resumo do arquivo recebido e compara-se com o resumo assinado; se baterem, nada foi alterado no caminho.",
      fundamento: "Premissas da segurança da informação — integridade (tríade CID).",
      macete: "Integridade responde \"o dado é o mesmo?\", não \"quem pode ver o dado?\".",
      erroComum: "Achar que integridade também impede o acesso — isso é confidencialidade.",
      comoBancaPensa: "Costuma testar a integridade junto com o hash, para ver se o candidato liga a premissa ao mecanismo.",
    },
  },

  {
    ...ALTA95,
    id: "TI-252", assunto: "Segurança da informação", subassunto: "Premissas — questão 3 do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A disponibilidade garante que as informações estejam acessíveis quando necessário.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "disponibilidade",
    cognitivo: {
      motivo: "Fixar disponibilidade como premissa de acesso no tempo, e não de autorização.",
      palavraCritica: "quando necessário",
    },
    comentario: {
      resolucao: "CERTO. Sistema disponível. A disponibilidade cobre sistemas, redes e recursos funcionando no momento em que o usuário legítimo precisa deles — o site de inscrição de um concurso no último dia de prazo é o exemplo canônico. É a premissa atingida pelo ataque de negação de serviço, que não rouba nem altera dado nenhum: apenas derruba o serviço.",
      fundamento: "Premissas da segurança da informação — disponibilidade (tríade CID).",
      macete: "Negação de serviço só mata a disponibilidade. Não tira sigilo nem muda conteúdo.",
      erroComum: "Ler \"acessíveis\" e marcar confidencialidade — aqui o recorte é temporal, não de permissão.",
      comoBancaPensa: "Descreve um DoS e pergunta qual princípio foi violado, oferecendo confidencialidade como isca.",
    },
  },

  {
    ...ALTA95,
    id: "TI-253", assunto: "Criptografia", subassunto: "Premissas — questão 4 do material",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "Na criptografia simétrica, são utilizadas duas chaves distintas para criptografar e descriptografar os dados.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "duas chaves distintas",
    cognitivo: {
      motivo: "Testar a inversão simétrica × assimétrica, a troca mais cobrada do tema.",
      palavraCritica: "duas chaves distintas",
    },
    comentario: {
      resolucao: "ERRADO. Usa apenas uma chave. A criptografia simétrica é a de CHAVE ÚNICA: a mesma chave tranca e destranca, como a fechadura de casa. Quem usa duas chaves distintas — uma pública, que cifra, e uma privada, que decifra — é a criptografia ASSIMÉTRICA. O item descreveu a assimétrica e colou nela o nome da simétrica.",
      fundamento: "Criptografia simétrica (chave única) × assimétrica (par de chaves).",
      macete: "Simétrica = simples = uma chave. Assimétrica = as duas metades de um par.",
      erroComum: "Associar \"simétrica\" a \"duas coisas iguais\" e concluir que são duas chaves.",
      comoBancaPensa: "Inverte a definição dos dois tipos e mantém o resto da frase correto, para o candidato ler no automático.",
    },
  },

  {
    ...ALTA95,
    id: "TI-254", assunto: "Segurança da informação", subassunto: "Premissas — questão 5 do material",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "A assinatura digital garante autenticidade, integridade e irretratabilidade de um documento.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "irretratabilidade",
    cognitivo: {
      motivo: "Fixar o tripé exato da assinatura digital — e, por exclusão, o que ela não garante.",
      palavraCritica: "autenticidade, integridade e irretratabilidade",
    },
    comentario: {
      resolucao: "CERTO. Tripé clássico da assinatura. Assinar digitalmente vincula o documento ao autor: prova de quem assinou (autenticidade), prova de que nada mudou depois (integridade, obtida pelo hash) e impossibilidade de negar depois que assinou (irretratabilidade, ou não repúdio). O que fica de fora desse tripé é a CONFIDENCIALIDADE — documento assinado continua legível por qualquer um; para escondê-lo é preciso cifrá-lo, que é outra operação.",
      fundamento: "Assinatura digital — autenticidade, integridade e não repúdio.",
      macete: "Assinar prova QUEM e prova QUE NÃO MUDOU. Não esconde. Esconder é cifrar.",
      erroComum: "Acrescentar confidencialidade ao tripé e marcar certo quando a banca a inclui.",
      comoBancaPensa: "Ora cobra o tripé correto (item CERTO), ora enfia confidencialidade no meio (item ERRADO). Sempre a mesma lista.",
    },
  },

  {
    ...ALTA95,
    id: "TI-255", assunto: "Segurança de rede", subassunto: "Redes — questão 1 do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A VPN utiliza criptografia para proteger os dados transmitidos em redes públicas.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "redes públicas",
    cognitivo: {
      motivo: "Fixar que a VPN opera SOBRE rede pública, e não substituindo-a.",
      palavraCritica: "redes públicas",
    },
    comentario: {
      resolucao: "CERTO. Tunelamento seguro. A VPN é implementada sobre a infraestrutura de uma rede pública — a Internet — e cria ali um túnel virtual criptografado entre o dispositivo e a rede de destino. Todo o tráfego passa por dentro desse túnel, o que preserva confidencialidade e integridade mesmo em Wi-Fi de aeroporto. Protocolo típico: IPsec.",
      fundamento: "VPN (Rede Privada Virtual) — tunelamento sobre rede pública.",
      macete: "VPN não cria rede nova: faz um túnel privado dentro da rede pública que já existe.",
      erroComum: "Supor que a VPN dispensa a Internet ou que exige link dedicado.",
      comoBancaPensa: "Troca \"sobre rede pública\" por \"em substituição à rede pública\" para gerar o item errado.",
    },
  },

  {
    ...ALTA95,
    id: "TI-256", assunto: "Segurança de rede", subassunto: "Redes — questão 2 do material",
    dificuldade: 1, tempoIdealSeg: 35,
    enunciado: "O uso de senhas fortes ajuda a reduzir o risco de ataques de força bruta.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "força bruta",
    cognitivo: {
      motivo: "Ligar a boa prática (senha forte) ao ataque específico que ela mitiga.",
      palavraCritica: "força bruta",
    },
    comentario: {
      resolucao: "CERTO. Maior complexidade, mais segurança. O ataque de força bruta testa combinações até acertar; cada caractere a mais e cada tipo de caractere a mais multiplicam o espaço de busca e o tempo necessário. Daí as recomendações: comprimento (mínimo de 8 caracteres, e quanto mais longa melhor), mistura de maiúsculas, minúsculas, números e símbolos, ausência de dado pessoal e de sequência óbvia, e troca periódica.",
      fundamento: "Segurança em redes Wi-Fi — política de senhas fortes.",
      macete: "Contra força bruta o que vale é TAMANHO antes de exotismo: senha longa cansa o atacante.",
      erroComum: "Achar que senha forte protege contra phishing — ali o usuário entrega a senha, por mais forte que seja.",
      comoBancaPensa: "Casa boa prática com ataque; erra o item quando associa a defesa ao ataque errado.",
    },
  },

  {
    ...ALTA95,
    id: "TI-257", assunto: "Segurança de rede", subassunto: "Redes — questão 3 do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "O protocolo WEP é considerado o mais seguro atualmente para redes Wi-Fi.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "WEP",
    cognitivo: {
      motivo: "Fixar a ordem cronológica e de robustez dos padrões de criptografia sem fio.",
      palavraCritica: "mais seguro atualmente",
    },
    comentario: {
      resolucao: "ERRADO. O WEP é vulnerável; o mais seguro é o WPA3. O WEP (Wired Equivalent Privacy) é o padrão mais antigo, tem vulnerabilidades conhecidas e é considerado facilmente comprometido — a recomendação é não usá-lo. A linha evolutiva é WEP → WPA → WPA2 → WPA3, e o WPA3 é o padrão mais recente e seguro, com proteções adicionais contra força bruta.",
      fundamento: "Criptografia em redes sem fio — WEP, WPA, WPA2 e WPA3.",
      macete: "Ordem: WEP (velho e quebrado) → WPA → WPA2 → WPA3 (atual). Número maior, mais seguro.",
      erroComum: "Parar no WPA2 por ser o mais visto em roteador antigo e marcá-lo como o mais seguro hoje.",
      comoBancaPensa: "Aponta o padrão mais ANTIGO como se fosse o mais seguro — é o item errado mais fácil do tema.",
    },
  },

  {
    ...ALTA95,
    id: "TI-258", assunto: "Internet e navegação", subassunto: "Redes — questão 4 do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A Deep Web corresponde à parte da internet que não é indexada por mecanismos de busca.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "não é indexada",
    cognitivo: {
      motivo: "Separar Deep Web (não indexada) de Dark Web (oculta e anônima).",
      palavraCritica: "não é indexada",
    },
    comentario: {
      resolucao: "CERTO. Conteúdo não indexado. A Deep Web é tudo o que os buscadores convencionais não alcançam: banco de dados privado, site protegido por senha, caixa de e-mail pessoal, área logada de banco. Não é secreta nem ilícita — é apenas invisível ao robô do buscador, porque exige autenticação. A parte intencionalmente oculta e anônima, acessada por rede específica, é a Dark Web, que é um subconjunto da Deep Web.",
      fundamento: "Camadas da internet — Surface Web, Deep Web e Dark Web.",
      macete: "Deep = não indexada (seu e-mail está lá). Dark = escondida de propósito (exige Tor).",
      erroComum: "Tratar Deep Web como sinônimo de crime — a maior parte dela é conteúdo comum atrás de login.",
      comoBancaPensa: "Funde as duas camadas numa só definição, ou atribui à Deep Web a ilicitude que é da Dark.",
    },
  },

  {
    ...ALTA95,
    id: "TI-259", assunto: "Segurança de rede", subassunto: "Redes — questão 5 do material",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "O filtro de endereços MAC permite restringir quais dispositivos podem se conectar a uma rede Wi-Fi.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "endereços MAC",
    cognitivo: {
      motivo: "Fixar o filtro MAC como controle de acesso por dispositivo, camada extra e não substitutiva.",
      palavraCritica: "restringir quais dispositivos",
    },
    comentario: {
      resolucao: "CERTO. Controle de acesso por hardware. O roteador pode ser configurado para autorizar ou negar a conexão conforme o endereço MAC — o identificador da placa de rede. É uma camada EXTRA de segurança: não cifra nada e não substitui o WPA2/WPA3, apenas decide quem entra. Vale saber que o MAC pode ser forjado, o que limita o alcance real da medida.",
      fundamento: "Segurança em redes Wi-Fi — filtro de endereços MAC.",
      macete: "Filtro MAC é porteiro com lista de nomes. Criptografia é o cofre. Um não faz o trabalho do outro.",
      erroComum: "Tratar o filtro MAC como suficiente e dispensar a criptografia da rede.",
      comoBancaPensa: "Costuma promover a camada extra a substituta da criptografia — aí o item vira errado.",
    },
  },

  /* ==================================================================
     BLOCO 2 — QUESTÕES NOVAS A PARTIR DA TEORIA
     ================================================================== */

  /* ---------- Premissas ---------- */

  {
    ...NOVA95,
    id: "TI-260", assunto: "Segurança da informação", subassunto: "Irretratabilidade × confidencialidade",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "A irretratabilidade, também chamada de não repúdio, é a premissa que assegura que somente usuários autorizados acessem determinada informação.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "irretratabilidade",
    cognitivo: {
      motivo: "Testar a troca entre irretratabilidade e confidencialidade, premissas de campos distintos.",
      palavraCritica: "somente usuários autorizados acessem",
    },
    comentario: {
      resolucao: "ERRADO. A definição dada é a de CONFIDENCIALIDADE. A irretratabilidade — sinônimo de não repúdio — impede que quem praticou uma ação ou transação eletrônica negue depois tê-la praticado. Nada tem a ver com quem pode ver o dado: tem a ver com quem não pode voltar atrás.",
      fundamento: "Premissas da segurança da informação — irretratabilidade (não repúdio).",
      macete: "Irretratabilidade = \"não dá para dizer que não fui eu\". Confidencialidade = \"não dá para ver\".",
      erroComum: "Assumir que qualquer premissa com nome difícil trata de sigilo.",
      comoBancaPensa: "Mantém o nome certo e troca a definição — inversão silenciosa, que passa em leitura rápida.",
    },
  },

  {
    ...NOVA95,
    id: "TI-261", assunto: "Segurança da informação", subassunto: "Autenticidade",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "A autenticidade assegura que a informação é genuína e proveniente de fonte confiável, permitindo verificar a identidade de quem a originou.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "autenticidade",
    cognitivo: {
      motivo: "Fixar autenticidade como premissa de origem, distinta de integridade (conteúdo).",
      palavraCritica: "identidade de quem a originou",
    },
    comentario: {
      resolucao: "CERTO. A autenticidade responde à pergunta \"veio mesmo de quem diz ter enviado?\". É por isso que ela é a premissa invocada no e-mail supostamente do banco pedindo atualização de cadastro: antes de fornecer qualquer dado, verifica-se a origem. Integridade é pergunta diferente — \"o conteúdo mudou no caminho?\".",
      fundamento: "Premissas da segurança da informação — autenticidade.",
      macete: "Autenticidade = QUEM mandou. Integridade = O QUE chegou.",
      erroComum: "Fundir autenticidade e integridade como se fossem a mesma coisa.",
      comoBancaPensa: "Descreve verificação de origem e pergunta qual premissa está em jogo, com integridade como distrator.",
    },
  },

  {
    ...NOVA95,
    id: "TI-262", assunto: "Segurança da informação", subassunto: "Rol das premissas",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Entre as premissas clássicas da segurança da informação não se inclui a irretratabilidade, que constitui atributo exclusivo do direito civil.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "premissas",
    cognitivo: {
      motivo: "Confirmar que o rol de premissas vai além da tríade CID.",
      palavraCritica: "não se inclui a irretratabilidade",
    },
    comentario: {
      resolucao: "ERRADO. A irretratabilidade é premissa da segurança da informação, ao lado de autenticidade, confidencialidade, disponibilidade e integridade. A tríade CID (confidencialidade, integridade, disponibilidade) é o núcleo, mas autenticidade e não repúdio completam o conjunto clássico — e são exatamente os dois que a assinatura digital assegura.",
      fundamento: "Premissas da segurança da informação — rol clássico.",
      macete: "CID é o núcleo. Some autenticidade e irretratabilidade e você tem as cinco.",
      erroComum: "Decorar só a tríade e negar as outras duas quando aparecem.",
      comoBancaPensa: "Nega a existência de um item do rol, apostando em quem memorizou apenas o CID.",
    },
  },

  {
    ...NOVA95,
    id: "TI-263", assunto: "Segurança da informação", subassunto: "Vocabulário de prova — integridade",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "A expressão \"não permite alterações\", recorrente em provas, remete à premissa da confidencialidade.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "não permite alterações",
    cognitivo: {
      motivo: "Treinar o reconhecimento do vocabulário que a banca usa para cada premissa.",
      palavraCritica: "não permite alterações",
    },
    comentario: {
      resolucao: "ERRADO. \"Não permite alterações\" é INTEGRIDADE. O vocabulário que a banca associa à confidencialidade é outro: \"não permite acessar\". São duas fórmulas fixas e vale memorizá-las como par, porque a troca entre elas é o erro mais recorrente do tema.",
      fundamento: "Premissas da segurança da informação — integridade × confidencialidade.",
      macete: "ALTERAR → integridade. ACESSAR → confidencialidade. Duas palavras, duas premissas.",
      erroComum: "Ler \"não permite\" e concluir automaticamente que se trata de restrição de acesso.",
      comoBancaPensa: "Usa a fórmula consagrada de uma premissa e assina com o nome da outra.",
    },
  },

  {
    ...NOVA95,
    id: "TI-264", assunto: "Criptografia", subassunto: "Criptografia como meio de confidencialidade",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "O uso de criptografia é meio de obtenção da confidencialidade, pois somente quem detém a chave correta consegue decifrar e acessar a informação original.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "chave correta",
    cognitivo: {
      motivo: "Ligar premissa e mecanismo: confidencialidade se obtém por criptografia.",
      palavraCritica: "somente quem detém a chave correta",
    },
    comentario: {
      resolucao: "CERTO. A criptografia transforma a informação em texto cifrado, ilegível para quem não tem a chave. Interceptar o arquivo deixa de bastar: sem a chave, o conteúdo não se abre. É por isso que a criptografia é apresentada como o meio técnico por excelência de garantir a confidencialidade.",
      fundamento: "Criptografia — finalidade e relação com a confidencialidade.",
      macete: "Cifrar não impede a cópia do arquivo; impede a LEITURA dele.",
      erroComum: "Achar que criptografia garante sozinha as cinco premissas.",
      comoBancaPensa: "Casa cada premissa com seu mecanismo típico: confidencialidade→criptografia, integridade→hash, não repúdio→assinatura.",
    },
  },

  /* ---------- Certificado digital ---------- */

  {
    ...NOVA95,
    id: "TI-265", assunto: "Certificado digital", subassunto: "Composição do certificado",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "O certificado digital é composto exclusivamente pela chave privada de seu titular, que deve ser mantida em sigilo absoluto.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "exclusivamente",
    cognitivo: {
      motivo: "Testar a composição do certificado — o que ele carrega e o que fica fora dele.",
      palavraCritica: "exclusivamente pela chave privada",
    },
    comentario: {
      resolucao: "ERRADO. O certificado digital se apoia em um PAR de chaves: a pública, que pode ser compartilhada, e a privada, que fica em sigilo. E o que o certificado carrega e apresenta é justamente a CHAVE PÚBLICA do titular, ao lado de nome, número de série, período de validade, identificação da Autoridade Certificadora e a assinatura digital da própria AC. A chave privada não vai dentro do certificado — ela fica com o titular.",
      fundamento: "Certificado digital — par de chaves e dados básicos.",
      macete: "O certificado é a carteira de identidade: mostra a chave PÚBLICA. A privada fica no bolso.",
      erroComum: "Inverter e supor que o certificado distribui a chave privada.",
      comoBancaPensa: "Usa \"exclusivamente\" para fechar um rol que na verdade tem vários elementos.",
    },
  },

  {
    ...NOVA95,
    id: "TI-266", assunto: "Certificado digital", subassunto: "Papel da Autoridade Certificadora",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "Ao emitir um certificado digital, a Autoridade Certificadora o assina digitalmente, atestando sua autenticidade e integridade.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Autoridade Certificadora",
    cognitivo: {
      motivo: "Fixar o que a AC faz — emitir, assinar, revogar e gerenciar.",
      palavraCritica: "assina digitalmente",
    },
    comentario: {
      resolucao: "CERTO. A Autoridade Certificadora é a entidade confiável que emite, revoga e gerencia certificados digitais. Ao emitir, ela assina o documento digitalmente: é essa assinatura que transfere a confiança da AC para o certificado e permite que terceiros verifiquem que os dados ali contidos são autênticos e não foram alterados.",
      fundamento: "Autoridade Certificadora (AC) — emissão e assinatura do certificado.",
      macete: "A AC é o cartório: quem confia nela confia no que ela carimbou.",
      erroComum: "Imaginar que o próprio titular assina o certificado que o identifica.",
      comoBancaPensa: "Troca o sujeito da ação — quem assina, quem revoga, quem mantém a lista.",
    },
  },

  {
    ...NOVA95,
    id: "TI-267", assunto: "Certificado digital", subassunto: "Lista de Certificados Revogados",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "A Lista de Certificados Revogados (LCR) é mantida pelo titular do certificado, a quem incumbe registrar o comprometimento de sua chave privada.",
    gabarito: "E", pegadinha: "troca-sujeito", palavraChave: "LCR",
    cognitivo: {
      motivo: "Testar a atribuição da LCR, que é da AC e não do titular.",
      palavraCritica: "mantida pelo titular",
    },
    comentario: {
      resolucao: "ERRADO. Quem mantém e gerencia a Lista de Certificados Revogados é a AUTORIDADE CERTIFICADORA. A LCR reúne os certificados invalidados antes do fim da validade, por motivos como perda ou comprometimento da chave privada. O titular comunica o problema; quem revoga e publica a revogação é a AC.",
      fundamento: "Autoridade Certificadora — Lista de Certificados Revogados (LCR).",
      macete: "Tudo que é gerência de certificado — emitir, revogar, listar — é da AC.",
      erroComum: "Confundir o dever de comunicar (do titular) com o ato de revogar (da AC).",
      comoBancaPensa: "Troca de sujeitos e atribuições: mantém o instituto e muda quem o pratica.",
    },
  },

  {
    ...NOVA95,
    id: "TI-268", assunto: "Certificado digital", subassunto: "Dados básicos do certificado",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "Entre os dados básicos de um certificado digital não se inclui o período de validade, definido apenas no momento de sua utilização.",
    gabarito: "E", pegadinha: "exigencia-inexistente", palavraChave: "período de validade",
    cognitivo: {
      motivo: "Cobrar o rol de dados do certificado, com destaque para a validade.",
      palavraCritica: "não se inclui o período de validade",
    },
    comentario: {
      resolucao: "ERRADO. O período de validade é um dos dados básicos: o certificado traz data de início e data de expiração. Constam também nome do titular, chave pública, número de série único, identificação da AC emissora e a assinatura digital da AC. Aliás, é o vencimento desse prazo um dos motivos que levam o certificado à LCR.",
      fundamento: "Certificado digital — dados básicos.",
      macete: "Nome, chave pública, número de série, validade, AC e assinatura da AC: os seis do certificado.",
      erroComum: "Supor validade indeterminada, como se o certificado valesse para sempre.",
      comoBancaPensa: "Retira um item do rol e afirma sua ausência — o candidato precisa ter a lista fechada na cabeça.",
    },
  },

  {
    ...NOVA95,
    id: "TI-269", assunto: "Certificado digital", subassunto: "ICP-Brasil",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "No Brasil, a ICP-Brasil é a infraestrutura responsável por emitir certificados digitais e assegurar as transações eletrônicas no país.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "ICP-Brasil",
    cognitivo: {
      motivo: "Fixar o exemplo nacional de autoridade certificadora.",
      palavraCritica: "ICP-Brasil",
    },
    comentario: {
      resolucao: "CERTO. A Infraestrutura de Chaves Públicas Brasileira é o arranjo nacional de certificação digital, responsável pela emissão de certificados e pela segurança das transações eletrônicas no país. É o exemplo de AC que a banca cobra quando quer aterrissar o conceito no contexto brasileiro.",
      fundamento: "ICP-Brasil — Infraestrutura de Chaves Públicas Brasileira.",
      macete: "Pediu exemplo nacional de certificação digital, a resposta é ICP-Brasil.",
      erroComum: "Trocar por órgão de outra função (Anatel, Serpro) só por serem federais e ligados à tecnologia.",
      comoBancaPensa: "Substitui a sigla correta por outra conhecida, contando com a memória visual do candidato.",
    },
  },

  /* ---------- Criptografia ---------- */

  {
    ...NOVA95,
    id: "TI-270", assunto: "Criptografia", subassunto: "Algoritmos simétricos",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "AES, 3DES e Blowfish são exemplos de algoritmos de criptografia simétrica.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "AES",
    cognitivo: {
      motivo: "Fixar a lista de algoritmos simétricos, cobrada por nome.",
      palavraCritica: "simétrica",
    },
    comentario: {
      resolucao: "CERTO. São todos de chave única. O DES foi um dos primeiros amplamente adotados; o AES o substituiu como padrão e é hoje o mais usado; o 3DES aplica o DES três vezes em sequência com chaves diferentes; o Blowfish é algoritmo de blocos projetado para ser rápido. Do outro lado da fronteira ficam RSA, ECC e DSA, que são assimétricos.",
      fundamento: "Algoritmos de criptografia simétrica — DES, AES, 3DES, Blowfish.",
      macete: "Simétricos têm nome de padrão (DES, AES). Assimétricos têm nome de sigla-autor ou curva (RSA, ECC, DSA).",
      erroComum: "Puxar o RSA para a lista dos simétricos por ser o algoritmo mais famoso.",
      comoBancaPensa: "Monta lista quase certa e infiltra um algoritmo do outro grupo.",
    },
  },

  {
    ...NOVA95,
    id: "TI-271", assunto: "Criptografia", subassunto: "Classificação dos algoritmos",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "RSA e ECC são algoritmos de criptografia simétrica, ao passo que o AES é classificado como assimétrico.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "RSA",
    cognitivo: {
      motivo: "Testar a inversão da classificação por nome de algoritmo.",
      palavraCritica: "AES é classificado como assimétrico",
    },
    comentario: {
      resolucao: "ERRADO. Está tudo invertido. RSA e ECC (criptografia de curva elíptica) são ASSIMÉTRICOS — trabalham com par de chaves. O AES é SIMÉTRICO, de chave única, e foi o algoritmo que substituiu o DES como padrão. Vale registrar que a ECC oferece nível de segurança alto com chaves mais curtas do que o RSA.",
      fundamento: "Criptografia simétrica × assimétrica — classificação por algoritmo.",
      macete: "RSA, ECC e DSA: par de chaves. DES, AES, 3DES e Blowfish: chave única.",
      erroComum: "Decorar as definições dos dois tipos sem saber a que grupo cada algoritmo pertence.",
      comoBancaPensa: "Inverte as duas listas na mesma frase, para o item parecer simétrico e organizado.",
    },
  },

  {
    ...NOVA95,
    id: "TI-272", assunto: "Criptografia", subassunto: "Papel de cada chave na assimétrica",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Na criptografia assimétrica, a chave privada é compartilhada livremente para cifrar a mensagem, enquanto a chave pública, mantida em segredo, é utilizada para decifrá-la.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "chave privada",
    cognitivo: {
      motivo: "Testar o papel de cada chave, e não apenas a existência do par.",
      palavraCritica: "compartilhada livremente",
    },
    comentario: {
      resolucao: "ERRADO. Os papéis estão trocados. A chave PÚBLICA é a que circula livremente e serve para cifrar; a chave PRIVADA é a que fica em segredo com o titular e serve para decifrar. Quem envia usa a chave pública do destinatário; só a privada do destinatário abre a mensagem. Guardar o nome ajuda: pública é pública, privada é privada.",
      fundamento: "Criptografia assimétrica — chave pública e chave privada.",
      macete: "Cifra com a PÚBLICA de quem vai receber; decifra com a PRIVADA de quem recebeu.",
      erroComum: "Saber que são duas chaves e errar qual delas faz cada operação.",
      comoBancaPensa: "Preserva o número de chaves e inverte a função — o candidato lê \"par de chaves\" e marca certo.",
    },
  },

  {
    ...NOVA95,
    id: "TI-273", assunto: "Criptografia", subassunto: "DSA",
    dificuldade: 3, tempoIdealSeg: 60,
    enunciado: "O DSA é algoritmo de assinatura digital e, por si só, não cifra o conteúdo da mensagem, sendo usual combiná-lo a algoritmos de criptografia para proteger o texto.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "DSA",
    cognitivo: {
      motivo: "Separar assinatura de cifragem em um algoritmo que faz só a primeira.",
      palavraCritica: "não cifra o conteúdo",
    },
    comentario: {
      resolucao: "CERTO. O DSA (Digital Signature Algorithm) serve para assinar: verifica autenticidade e integridade da mensagem, permitindo que o destinatário confira a assinatura com a chave pública correspondente à privada usada para assinar. Ele não protege o conteúdo — quem quiser sigilo combina o DSA com um algoritmo de criptografia, simétrico ou assimétrico.",
      fundamento: "DSA — algoritmo de assinatura digital.",
      macete: "Assinar ≠ cifrar. Há algoritmo que só assina, e o DSA é o exemplo cobrado.",
      erroComum: "Supor que todo algoritmo assimétrico serve indistintamente para assinar e para cifrar.",
      comoBancaPensa: "Explora a fronteira entre as duas operações, que a maioria trata como uma só.",
    },
  },

  {
    ...NOVA95,
    id: "TI-274", assunto: "Criptografia", subassunto: "3DES",
    dificuldade: 3, tempoIdealSeg: 55,
    enunciado: "O 3DES aplica o algoritmo DES três vezes em sequência com chaves distintas, o que o torna simultaneamente mais seguro e mais rápido que o DES original.",
    gabarito: "E", pegadinha: "verdade-mais-falso", palavraChave: "3DES",
    cognitivo: {
      motivo: "Testar o custo do 3DES, que troca velocidade por segurança.",
      palavraCritica: "mais rápido",
    },
    comentario: {
      resolucao: "ERRADO. A primeira metade está certa: o 3DES realmente aplica o DES três vezes em sequência com chaves diferentes, e isso aumenta a segurança em relação ao DES original. A segunda metade é que derruba o item — triplicar o processamento o torna MAIS LENTO, não mais rápido. É o clássico verdade emendada com falso.",
      fundamento: "3DES (Triple Data Encryption Standard).",
      macete: "Fazer três vezes o mesmo trabalho não acelera nada. Mais seguro, mais lento.",
      erroComum: "Parar de ler quando a primeira parte confere e marcar certo.",
      comoBancaPensa: "Abre com informação verdadeira e conhecida, e emenda o erro no fim da frase.",
    },
  },

  /* ---------- Hash e assinatura ---------- */

  {
    ...NOVA95,
    id: "TI-275", assunto: "Criptografia", subassunto: "Efeito avalanche do hash",
    dificuldade: 2, tempoIdealSeg: 55,
    enunciado: "Uma alteração mínima no arquivo produz um hash completamente diferente, e é essa propriedade que permite ao destinatário conferir a integridade dos dados recebidos.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "hash",
    cognitivo: {
      motivo: "Ligar a propriedade do hash à verificação prática de integridade.",
      palavraCritica: "completamente diferente",
    },
    comentario: {
      resolucao: "CERTO. A função de hash é projetada para que qualquer mudança, por menor que seja, produza resumo drasticamente distinto. Na prática: o destinatário recalcula o hash da mensagem recebida e compara com o hash assinado. Se coincidirem, nada foi alterado no trajeto e a assinatura é válida; se divergirem, houve alteração.",
      fundamento: "Algoritmo de hash — verificação de integridade na assinatura digital.",
      macete: "Hash é impressão digital do arquivo: muda uma vírgula, muda a impressão inteira.",
      erroComum: "Achar que pequena alteração gera hash parecido — a lógica é o oposto.",
      comoBancaPensa: "Cobra a propriedade do hash sempre casada com a premissa da integridade.",
    },
  },

  {
    ...NOVA95,
    id: "TI-276", assunto: "Criptografia", subassunto: "Algoritmos de hash",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "MD5, SHA-1 e SHA-256 são algoritmos de criptografia assimétrica empregados para cifrar o conteúdo do documento assinado.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "SHA-256",
    cognitivo: {
      motivo: "Separar função de hash de algoritmo de criptografia.",
      palavraCritica: "criptografia assimétrica",
    },
    comentario: {
      resolucao: "ERRADO. MD5, SHA-1, SHA-256 e SHA-3 são algoritmos de HASH, não de criptografia. Eles produzem um resumo de tamanho fixo a partir dos dados e servem para verificar integridade — não cifram nada e não têm chave para desfazer a operação. Cifrar é trabalho de AES, RSA e companhia.",
      fundamento: "Algoritmos de hash — MD5, SHA-1, SHA-256, SHA-3.",
      macete: "Se o nome tem SHA ou MD, é hash. Hash resume; criptografia esconde.",
      erroComum: "Tratar hash como \"um tipo de criptografia\" e aceitar a classificação.",
      comoBancaPensa: "Move um algoritmo de categoria, mantendo o contexto (documento assinado) que sugere pertinência.",
    },
  },

  {
    ...NOVA95,
    id: "TI-277", assunto: "Criptografia", subassunto: "Irreversibilidade do hash",
    dificuldade: 3, tempoIdealSeg: 55,
    enunciado: "O hash gerado a partir de um documento permite reconstruir o conteúdo original a partir do resumo, razão pela qual deve ser mantido em sigilo.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "reconstruir o conteúdo",
    cognitivo: {
      motivo: "Fixar que hash não é operação reversível, ao contrário da cifragem.",
      palavraCritica: "reconstruir o conteúdo original",
    },
    comentario: {
      resolucao: "ERRADO. O hash é resumo de mão única: gera-se a partir dos dados, mas não se volta dos dados resumidos ao conteúdo. Essa é justamente a diferença em relação à criptografia, que é reversível com a chave certa. Como o hash não revela o conteúdo, ele não precisa de sigilo — é publicado junto com o arquivo para que qualquer um confira a integridade.",
      fundamento: "Algoritmo de hash — irreversibilidade e finalidade.",
      macete: "Cifrar tem volta (com a chave). Resumir não tem volta nenhuma.",
      erroComum: "Tratar hash como cifragem e supor que exista \"des-hash\".",
      comoBancaPensa: "Atribui ao hash uma propriedade da criptografia — reversibilidade — e emenda uma conclusão coerente com ela.",
    },
  },

  /* ---------- VPN ---------- */

  {
    ...NOVA95,
    id: "TI-278", assunto: "Segurança de rede", subassunto: "VPN — infraestrutura pública",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "A VPN é implementada sobre a infraestrutura de uma rede pública, criando um túnel virtual criptografado por onde trafegam os dados.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "túnel virtual",
    cognitivo: {
      motivo: "Fixar a natureza da VPN como técnica de tunelamento, não como rede física própria.",
      palavraCritica: "sobre a infraestrutura de uma rede pública",
    },
    comentario: {
      resolucao: "CERTO. A VPN é técnica de tunelamento: aproveita a rede pública que já existe — tipicamente a Internet — e monta sobre ela um túnel virtual criptografado. Todo o tráfego entre o dispositivo e a rede privada é roteado por dentro do túnel, o que preserva confidencialidade e integridade dos dados em trânsito.",
      fundamento: "VPN — tunelamento sobre infraestrutura pública.",
      macete: "\"Virtual\" na sigla é justamente isso: a rede privada não existe fisicamente, é um túnel.",
      erroComum: "Imaginar cabo dedicado ou link exclusivo entre as pontas.",
      comoBancaPensa: "Contrapõe rede virtual a rede física para ver se o candidato entendeu o que é o túnel.",
    },
  },

  {
    ...NOVA95,
    id: "TI-279", assunto: "Segurança de rede", subassunto: "VPN — endereço IP",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Ao se conectar a uma VPN, o endereço IP real do usuário permanece visível na Internet, pois o túnel protege apenas o conteúdo dos pacotes transmitidos.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "endereço IP real",
    cognitivo: {
      motivo: "Cobrar o efeito da VPN sobre o IP, além da cifragem do conteúdo.",
      palavraCritica: "permanece visível",
    },
    comentario: {
      resolucao: "ERRADO. Com a VPN ativa, o endereço IP real fica OCULTO: é substituído pelo IP do servidor VPN. Daí decorrem dois efeitos que a banca gosta de cobrar — a proteção da privacidade do usuário e a possibilidade de contornar restrições geográficas, já que o acesso parece partir de outro local.",
      fundamento: "VPN — substituição do endereço IP pelo do servidor.",
      macete: "A VPN esconde o QUE você manda e também DE ONDE você manda.",
      erroComum: "Reduzir a VPN à cifragem do conteúdo, esquecendo a troca de IP.",
      comoBancaPensa: "Restringe indevidamente o alcance da tecnologia: afirma que ela faz só metade do que faz.",
    },
  },

  {
    ...NOVA95,
    id: "TI-280", assunto: "Segurança de rede", subassunto: "IPsec",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "O IPsec é protocolo de segurança utilizado em VPNs, fornecendo autenticação, integridade e confidencialidade ao tráfego em uma rede IP.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "IPsec",
    cognitivo: {
      motivo: "Fixar o protocolo típico da VPN e o tripé que ele fornece.",
      palavraCritica: "autenticação, integridade e confidencialidade",
    },
    comentario: {
      resolucao: "CERTO. O IPsec é um dos protocolos que sustentam a VPN, e é ele que faz o trabalho pesado da segurança do túnel: autentica as pontas, garante que os dados não foram alterados e mantém o conteúdo cifrado durante a transmissão pela rede pública.",
      fundamento: "IPsec — protocolo de segurança do tráfego IP em VPN.",
      macete: "Perguntou o protocolo de segurança da VPN, a resposta padrão é IPsec.",
      erroComum: "Confundir IPsec com HTTPS/TLS, que protegem a sessão web e não o tráfego IP do túnel.",
      comoBancaPensa: "Cobra a sigla e as três garantias juntas, ou remove uma delas para gerar o item errado.",
    },
  },

  {
    ...NOVA95,
    id: "TI-281", assunto: "Segurança de rede", subassunto: "VPN site-to-site",
    dificuldade: 3, tempoIdealSeg: 55,
    enunciado: "A VPN site-to-site destina-se a conectar um usuário remoto isolado à rede da empresa, não sendo adequada para interligar duas redes locais distintas.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "site-to-site",
    cognitivo: {
      motivo: "Testar o tipo de VPN pelo que ele conecta.",
      palavraCritica: "usuário remoto isolado",
    },
    comentario: {
      resolucao: "ERRADO. A VPN site-to-site é exatamente o oposto: também chamada de VPN de REDE PARA REDE, ela liga duas redes locais distintas, em geral geograficamente separadas, como se estivessem conectadas fisicamente. É o arranjo usado por empresas com escritórios em várias cidades. Conectar um usuário isolado à rede corporativa é o caso da VPN de acesso remoto.",
      fundamento: "Tipos de VPN — site-to-site (rede a rede) × acesso remoto.",
      macete: "\"Site\" aqui é FILIAL, não é usuário. Site-to-site é escritório com escritório.",
      erroComum: "Ler \"site\" como página ou como computador do usuário.",
      comoBancaPensa: "Descreve um tipo de VPN e assina com o nome do outro.",
    },
  },

  /* ---------- Wi-Fi ---------- */

  {
    ...NOVA95,
    id: "TI-282", assunto: "Segurança de rede", subassunto: "Filtro MAC × criptografia",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Por atuar sobre o endereço físico do dispositivo, o filtro MAC substitui com vantagem o uso de criptografia WPA2 ou WPA3 na rede sem fio.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "substitui",
    cognitivo: {
      motivo: "Impedir que a camada extra seja lida como camada suficiente.",
      palavraCritica: "substitui com vantagem",
    },
    comentario: {
      resolucao: "ERRADO. O filtro MAC é camada ADICIONAL, não substituta. Ele decide quais dispositivos podem se conectar, mas não cifra coisa alguma: sem WPA2 ou WPA3, o tráfego da rede continua passível de interceptação e leitura. As duas medidas resolvem problemas diferentes e se somam.",
      fundamento: "Segurança em redes Wi-Fi — filtro MAC e criptografia como camadas distintas.",
      macete: "Controle de acesso não é cifragem. Quem entrou ainda precisa achar o conteúdo ilegível.",
      erroComum: "Tratar segurança como lista de alternativas, quando é acúmulo de camadas.",
      comoBancaPensa: "Promove uma medida acessória à condição de suficiente — generalização indevida clássica.",
    },
  },

  {
    ...NOVA95,
    id: "TI-283", assunto: "Segurança de rede", subassunto: "Atualização de firmware",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "Manter atualizado o firmware do roteador corrige vulnerabilidades conhecidas e integra as boas práticas de segurança em redes sem fio.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "firmware",
    cognitivo: {
      motivo: "Registrar a atualização de firmware entre as medidas de segurança de rede Wi-Fi.",
      palavraCritica: "vulnerabilidades conhecidas",
    },
    comentario: {
      resolucao: "CERTO. As atualizações de firmware costumam trazer correções de segurança para falhas já descobertas e divulgadas — e falha conhecida sem correção aplicada é a porta mais fácil para o atacante. Ao lado de senha forte, filtro MAC e criptografia WPA2/WPA3, a atualização compõe o conjunto básico de medidas do roteador.",
      fundamento: "Segurança em redes Wi-Fi — atualização de firmware.",
      macete: "Vulnerabilidade conhecida e não corrigida é a mais explorada de todas.",
      erroComum: "Considerar firmware assunto de desempenho, não de segurança.",
      comoBancaPensa: "Lista as boas práticas do roteador e retira ou inventa uma delas.",
    },
  },

  {
    ...NOVA95,
    id: "TI-284", assunto: "Segurança de rede", subassunto: "WPA3",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "O WPA3 é o padrão mais recente e seguro para redes Wi-Fi, oferecendo proteções adicionais contra ataques de força bruta.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "WPA3",
    cognitivo: {
      motivo: "Ancorar o banco no padrão vigente, e não no WPA2 dos materiais mais antigos.",
      palavraCritica: "mais recente e seguro",
    },
    comentario: {
      resolucao: "CERTO. O WPA3 é a evolução do WPA2 e o padrão atual: aprimora autenticação e criptografia e acrescenta proteções contra tentativa de adivinhação de senha por força bruta. Atenção ao ponto: material de estudo mais antigo ainda aponta o WPA2 Personal como \"o mais seguro adotado\", o que era verdade antes do WPA3. Em conflito entre duas afirmações, vale a mais recente.",
      fundamento: "Criptografia em redes sem fio — WPA3.",
      macete: "Linha do tempo: WEP → WPA → WPA2 → WPA3. A resposta de hoje é o último da fila.",
      erroComum: "Responder WPA2 por ser o mais visto nos roteadores e nas apostilas antigas.",
      comoBancaPensa: "Cobra o padrão vigente na data da prova, e o candidato que decorou material velho erra.",
    },
  },

  {
    ...NOVA95,
    id: "TI-285", assunto: "Segurança de rede", subassunto: "WPA × WPA2",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "O WPA foi desenvolvido para substituir o WPA2 e não apresenta vulnerabilidades conhecidas.",
    gabarito: "E", pegadinha: "troca-conceito", palavraChave: "WPA",
    cognitivo: {
      motivo: "Testar a ordem cronológica dos padrões e a existência de falhas no WPA.",
      palavraCritica: "substituir o WPA2",
    },
    comentario: {
      resolucao: "ERRADO. Dois erros. O WPA veio para substituir o WEP, não o WPA2 — que é posterior a ele. E o WPA tem, sim, vulnerabilidades conhecidas, sobretudo nas versões mais antigas; foi por isso que o WPA2 e depois o WPA3 apareceram.",
      fundamento: "Criptografia em redes sem fio — evolução WEP → WPA → WPA2 → WPA3.",
      macete: "Cada padrão substitui o ANTERIOR. Nunca o posterior.",
      erroComum: "Guardar os nomes sem guardar a ordem em que surgiram.",
      comoBancaPensa: "Inverte a cronologia e acrescenta um absoluto (\"não apresenta vulnerabilidades\") que já derruba o item sozinho.",
    },
  },

  {
    ...NOVA95,
    id: "TI-286", assunto: "Segurança de rede", subassunto: "Comprimento de senha",
    dificuldade: 1, tempoIdealSeg: 45,
    enunciado: "Recomenda-se que a senha da rede Wi-Fi tenha no máximo oito caracteres, pois senhas mais longas dificultam a autenticação dos dispositivos.",
    gabarito: "E", pegadinha: "troca-numerica", palavraChave: "no máximo oito caracteres",
    cognitivo: {
      motivo: "Testar a inversão de um limite mínimo em limite máximo.",
      palavraCritica: "no máximo",
    },
    comentario: {
      resolucao: "ERRADO. Oito caracteres é o piso, não o teto: recomenda-se PELO MENOS oito, e quanto mais longa a senha, melhor, porque o comprimento é o que mais encarece o ataque de força bruta. Senha longa também não atrapalha a autenticação — o dispositivo a guarda e reconecta sozinho.",
      fundamento: "Segurança em redes Wi-Fi — política de senhas fortes.",
      macete: "Toda recomendação de senha é MÍNIMO. Nunca máximo.",
      erroComum: "Lembrar do número 8 sem lembrar se ele é piso ou teto.",
      comoBancaPensa: "Mantém o número correto e inverte a natureza do limite — a troca numérica mais barata que existe.",
    },
  },

  /* ---------- Deep Web e Dark Web ---------- */

  {
    ...NOVA95,
    id: "TI-287", assunto: "Internet e navegação", subassunto: "Deep Web × Dark Web",
    dificuldade: 2, tempoIdealSeg: 50,
    enunciado: "Deep Web e Dark Web são expressões sinônimas, designando a mesma porção não indexada e voltada a atividades ilícitas da internet.",
    gabarito: "E", pegadinha: "generalizacao", palavraChave: "sinônimas",
    cognitivo: {
      motivo: "Separar as duas camadas, que a linguagem corrente funde.",
      palavraCritica: "sinônimas",
    },
    comentario: {
      resolucao: "ERRADO. Não são sinônimas, e a relação entre elas é de continência: a Dark Web é uma PARTE da Deep Web. A Deep Web é apenas o que não é indexado pelos buscadores — e-mail pessoal, área logada, banco de dados privado —, sem nada de ilícito nisso. A Dark Web é a fração intencionalmente oculta, acessada por rede criptografada, onde se concentram as atividades ilegais e o anonimato.",
      fundamento: "Camadas da internet — Surface Web, Deep Web e Dark Web.",
      macete: "Toda Dark é Deep. Nem toda Deep é Dark.",
      erroComum: "Importar o uso jornalístico dos termos, que os trata como equivalentes.",
      comoBancaPensa: "Funde as duas camadas ou atribui à Deep Web a ilicitude que é da Dark.",
    },
  },

  {
    ...NOVA95,
    id: "TI-288", assunto: "Internet e navegação", subassunto: "Exemplos de Deep Web",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A página de acesso restrito de um banco e a caixa de e-mail pessoal de um usuário são exemplos de conteúdo situado na Deep Web.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Deep Web",
    cognitivo: {
      motivo: "Aterrissar o conceito de Deep Web em exemplos cotidianos.",
      palavraCritica: "acesso restrito",
    },
    comentario: {
      resolucao: "CERTO. Ambos exigem credencial para serem visualizados e, por isso, ficam fora do alcance dos buscadores. É o retrato do que a Deep Web realmente é: conteúdo comum, legítimo e protegido por autenticação — não conteúdo clandestino.",
      fundamento: "Deep Web — conteúdo não indexado por exigir autenticação.",
      macete: "Se precisa de login, está na Deep Web. Você usa a Deep Web todo dia.",
      erroComum: "Recusar o exemplo por associar Deep Web a algo obscuro.",
      comoBancaPensa: "Dá exemplo banal para ver se o candidato entendeu o critério (indexação) em vez do estereótipo.",
    },
  },

  {
    ...NOVA95,
    id: "TI-289", assunto: "Internet e navegação", subassunto: "Acesso à Dark Web",
    dificuldade: 2, tempoIdealSeg: 45,
    enunciado: "O acesso à Dark Web se dá pelos mesmos navegadores convencionais utilizados na Surface Web, bastando ao usuário conhecer o endereço da página.",
    gabarito: "E", pegadinha: "restricao-indevida", palavraChave: "navegadores convencionais",
    cognitivo: {
      motivo: "Cobrar o requisito técnico de acesso à Dark Web.",
      palavraCritica: "bastando conhecer o endereço",
    },
    comentario: {
      resolucao: "ERRADO. A Dark Web exige software específico, sendo o Tor (The Onion Router) o exemplo cobrado. Ela opera sobre redes privadas e criptografadas, projetadas para o anonimato — conhecer o endereço não basta, porque o navegador comum não alcança essa rede.",
      fundamento: "Dark Web — acesso por rede criptografada (Tor).",
      macete: "Dark Web pede ferramenta própria. Tor é o nome que a prova quer.",
      erroComum: "Supor que a diferença entre as camadas é só de conteúdo, e não de meio de acesso.",
      comoBancaPensa: "Reduz a barreira técnica a uma questão de saber o endereço.",
    },
  },

  {
    ...NOVA95,
    id: "TI-290", assunto: "Internet e navegação", subassunto: "Surface Web",
    dificuldade: 1, tempoIdealSeg: 40,
    enunciado: "A Surface Web é a parte da internet acessível por mecanismos de busca convencionais e concentra a maior parte da navegação cotidiana dos usuários.",
    gabarito: "C", pegadinha: "literalidade", palavraChave: "Surface Web",
    cognitivo: {
      motivo: "Fechar a tríade de camadas com a definição da superfície.",
      palavraCritica: "mecanismos de busca convencionais",
    },
    comentario: {
      resolucao: "CERTO. A Surface Web reúne sites, páginas e blogs indexáveis e encontráveis por buscadores como o Google — é onde a navegação do dia a dia acontece. Deep Web e Dark Web, embora citadas com frequência, representam a fração da internet que fica fora desse alcance.",
      fundamento: "Camadas da internet — Surface Web.",
      macete: "Achou no Google? Surface. Precisou de login? Deep. Precisou de Tor? Dark.",
      erroComum: "Inverter as proporções e imaginar que o uso diário se dá fora da Surface.",
      comoBancaPensa: "Pede a definição da camada mais simples para casar com a distinção entre as outras duas.",
    },
  },

];

QUESTOES.push(...QUESTOES_PCAL_LOTE95);
