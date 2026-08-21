/* CLASSIFICADOR v2 — reconstruído a partir dos comandos reais da PC-AL
   2021, cuja contagem por disciplina existe conferida à mão.

   TRÊS CORREÇÕES SOBRE A v1, QUE FOI REPROVADA NA CALIBRAÇÃO

   1. ORDEM. Os padrões vão do mais específico para o mais geral, e
      "ética" — que é palavra frequente em enunciado de qualquer matéria
      — foi para o fim. Na v1 ela vinha cedo e absorvia Direitos Humanos
      (que caiu a zero) e Legislação Institucional.

   2. VOCABULÁRIO REAL. Os padrões saíram das frases que a banca de fato
      escreveu, não do que eu supus que ela escreveria: "crimes
      patrimoniais" (e não só "contra o patrimônio"), "construções
      linguísticas", "organização de arquivos", "uso e abuso de poder".

   3. HERANÇA DO COMANDO SEGUINTE. Comando que não nomeia matéria
      ("Considerando essa situação hipotética, julgue...") pertence ao
      bloco que ele ABRE, não ao que fecha. Verificado na PC-AL 2021: os
      itens 77-78 vêm depois de um bloco constitucional e antes de um
      bloco penal, e a contagem manual os conta em Direito Penal. Mesma
      coisa em 92-96, que a contagem manual põe em Processo Penal. */

/* disciplina, rótulo fino, padrões — ordem importa. */
export const TEMAS = [
  /* --- os mais específicos primeiro --- */
  ["Processo Penal", "Inquérito policial", ["inquerito policial"]],
  ["Processo Penal", "Princípios constitucionais do processo penal", ["principios constitucionais do processo penal", "disposicoes constitucionais aplicaveis ao direito processual"]],
  ["Processo Penal", "Prisão e cautelares", ["prisao em flagrante", "prisao temporaria", "liberdade provisoria", "Acerca da prisao", "medidas cautelares"]],
  ["Processo Penal", "Juizados especiais", ["9\\.099"]],
  ["Processo Penal", "Prova", ["prova no processo penal", "corpo de delito"]],
  ["Processo Penal", "Normas processuais penais", ["normas processuais penais", "processo penal brasileiro", "processual penal", "acao penal"]],

  ["Direito Penal", "Crimes contra a pessoa", ["crimes contra a pessoa", "delitos contra a pessoa"]],
  ["Direito Penal", "Crimes contra a administração", ["crimes contra a administracao", "delitos contra a administracao"]],
  ["Direito Penal", "Crimes contra o patrimônio", ["crimes patrimoniais", "crimes contra o patrimonio", "delitos contra o patrimonio"]],
  ["Direito Penal", "Aplicação da lei penal", ["aplicacao do direito penal", "aplicacao da lei penal", "lei penal no tempo"]],
  ["Direito Penal", "Legislação penal especial", ["lavagem de dinheiro", "abuso de autoridade", "desarmamento", "drogas", "crimes ambientais", "crianca e do adolescente", "tortura", "organizacao criminosa", "legislacao penal"]],

  ["Legislação Institucional (AL)", "Estatuto e servidores estaduais", ["estatuto da policia civil", "servidores publicos civis do estado", "3\\.437", "lei organica", "regimento interno", "carreira de policial", "regime disciplinar", "autarquias e das fundacoes"]],
  ["Legislação Institucional (AL)", "Constituição estadual", ["constituicao do estado"]],

  ["Direitos Humanos", "Convenções e tratados", ["convencao americana", "pacto de sao jose", "tratados internacionais", "sistema internacional de protecao"]],
  ["Direitos Humanos", "Direitos humanos (geral)", ["direitos humanos"]],

  ["Direito Constitucional", "Direitos e garantias fundamentais", ["direitos e das garantias fundamentais", "direitos e garantias fundamentais", "garantias fundamentais", "direitos e deveres individuais"]],
  ["Direito Constitucional", "Direitos sociais e instituições", ["direitos sociais", "instituicoes democraticas"]],
  ["Direito Constitucional", "CF e jurisprudência", ["jurisprudencia do stf", "doutrina majoritaria em materia constitucional", "disposto na constituicao federal"]],

  ["Direito Administrativo", "Poderes e abuso de poder", ["uso e do abuso de poder", "abuso de poder", "poderes da administracao", "poderes administrativos"]],
  ["Direito Administrativo", "Organização e agentes públicos", ["agentes publicos", "administracao publica direta e indireta", "organizacao administrativa", "servicos publicos"]],
  ["Direito Administrativo", "Atos administrativos", ["ato administrativo", "atos administrativos", "atos publicos"]],
  ["Direito Administrativo", "Licitações e contratos", ["licitacoes", "contratos administrativos", "14\\.133"]],
  ["Direito Administrativo", "Responsabilidade civil do Estado", ["responsabilidade civil do estado"]],
  ["Direito Administrativo", "Improbidade", ["improbidade"]],

  ["TI e Segurança Cibernética", "Redes e internet", ["redes de computadores", "internet e intranet", "nuvem"]],
  ["TI e Segurança Cibernética", "Arquivos e segurança", ["organizacao de arquivos", "premissas de seguranca", "seguranca da informacao", "ameacas digitais", "malware", "protecao na internet"]],
  ["TI e Segurança Cibernética", "SO e aplicativos", ["sistemas operacionais", "planilha", "excel", "linux", "metadados"]],
  ["TI e Segurança Cibernética", "Dados e programação", ["banco de dados", "sql", "python", "aprendizado de maquina", "mineracao de dados"]],

  ["Língua Portuguesa", "Compreensão e aspectos linguísticos", ["aspectos linguisticos", "construcoes linguisticas", "ideias veiculadas", "sentidos e os aspectos", "ideias e aos aspectos", "ideias, aos sentidos"]],

  ["Contabilidade", "Contabilidade", ["contabil", "balanco patrimonial", "demonstracao do resultado", "rol de contas", "operacoes tipicas de uma empresa", "ciencia contabil"]],
  ["Estatística", "Estatística", ["amostral", "amostragem", "probabilidade", "variancia", "teoria da informacao"]],
  ["Raciocínio Lógico-Matemático", "RLM", ["estruturas logicas", "logica de argumentacao", "logica proposicional", "raciocinio logico"]],
  ["Arquivologia", "Arquivologia", ["arquivologia", "gestao de documentos", "funcoes arquivisticas"]],
  ["Conhecimentos regionais", "Conhecimentos regionais", ["distrito federal", "sergipe", "ride", "espaco rural", "geoambientais", "exportacoes"]],

  /* --- "ética" por ÚLTIMO: é palavra comum em enunciado de outras
         matérias, e na v1 vinha cedo e sequestrava blocos inteiros --- */
  ["Ética no Serviço Público", "Ética", ["codigo de etica", "a respeito da etica", "etica, principios, valores", "etica no setor publico", "etica no servico publico", "\\betica\\b"]],
];

const semAcento = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
const flex = s => new RegExp(semAcento(s).split(" ").join("\\s*"), "i");
const COMPILADO = TEMAS.map(([disc, fino, pats]) => ({ disc, fino, res: pats.map(flex) }));

export function classificar(texto) {
  const t = semAcento(texto);
  const hit = COMPILADO.find(c => c.res.some(r => r.test(t)));
  return hit ? { disc: hit.disc, fino: hit.fino } : null;
}

/* Aplica herança: comando sem tema recebe o do PRÓXIMO comando que tem.
   Se não houver próximo, cai para o anterior — é o fim do caderno. */
export function aplicarHeranca(cmds) {
  for (let i = 0; i < cmds.length; i++) {
    if (cmds[i].tema) continue;
    let j = i + 1;
    while (j < cmds.length && !cmds[j].tema) j++;
    if (j < cmds.length) { cmds[i].tema = cmds[j].tema; cmds[i].herdado = "seguinte"; continue; }
    for (let k = i - 1; k >= 0; k--) if (cmds[k].tema) { cmds[i].tema = cmds[k].tema; cmds[i].herdado = "anterior"; break; }
  }
  return cmds;
}
