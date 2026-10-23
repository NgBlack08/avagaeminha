# Auditoria dos parâmetros do QuestLab contra os achados FGV/IA

Compara o que o site usa hoje para modelar a banca com o que foi medido em
[AUDITORIA-IA-FGV-PCPR-2026.md](AUDITORIA-IA-FGV-PCPR-2026.md): a prova FGV
PC-PR 2026 e o controle FGV PC-RJ 2022. Nada foi alterado no código.

**Estado medido:** `node scripts/validar.js` e os dados carregados por
`scripts/fontes.js`, no estado atual do repositório. São 2.697 questões
(2.566 autorais e 131 de prova real), 2.632 C/E e 65 de múltipla escolha;
editais carregados: `PCAL` e `SESAUAL_FISIO`.

---

## 1. Resumo

| # | Achado | Gravidade |
|---|---|---|
| 1 | O site modela **uma banca só (CEBRASPE, C/E)**. Não há perfil FGV, edital PC-PR nem disciplina de Ciências Forenses. Para a PC-PR, o motor prioriza e treina a prova errada. | Alta, se a PC-PR for alvo |
| 2 | **O banco autoral carrega a mesma assinatura lexical da FGV-2026 (IA).** O absolutizador aparece 1,44 vez mais nos itens ERRADO do que nos CERTO; em Atualidades, chega a 3,10. | Alta |
| 3 | A regra "termo absoluto não indica gabarito" (DNA, radar, heurísticas rejeitadas) está **certa para a CEBRASPE e para a FGV até 2022**, mas **não vale para a FGV-2026**, em que o absoluto aparece 1,86 vez mais na errada. Hoje o site trata a regra como universal. | Média |
| 4 | As 65 questões de múltipla escolha **não treinam o formato FGV-2026**: alternativas desiguais (CV 0,146 contra 0,037), gabarito longo demais (35% contra 23%), nenhuma de Português ou Forense e nenhuma FGV. | Média |
| 5 | O catálogo `DNA_BANCA` cobre metade dos operadores de distorção da FGV-2026. Faltam 5 operadores e o **padrão positivo do gabarito** ("ressalva"). | Média |
| 6 | O validador não tem nenhuma meta para múltipla escolha (isometria, posição do gabarito por tamanho, absolutizador por banca/época). | Baixa a média |

---

## 2. Escopo: o site é um modelo CEBRASPE

| Parâmetro | Hoje | PC-PR 2026 (FGV) |
|---|---|---|
| Formato padrão | `FORMATO_PADRAO = "CE"`, com o comentário "99% do acervo" | 100 questões A–E |
| Editais (`EDITAIS`) | `PCAL`, `SESAUAL_FISIO` | sem edital PC-PR |
| Concursos (`CONCURSOS`) | PCAL, PF, PRF, PCDF, PCE, SESAU | sem PC-PR |
| Regra de correção | `acerto 1, erro −1, branco 0` (1 líquida CEBRASPE) | FGV não desconta erro, então "gestão do branco" (estratégia nº 16) **é prejudicial** lá |
| Disciplinas | 18, sem Ciências Forenses e sem Medicina Legal (o validador já avisa: "Medicina Legal, 12 itens em 2 cadernos") | Ciências Forenses = 10 questões; TI/Ciber = **25**; Realidade do Paraná = 5 |

**Consequência:** um aluno que usa o site para a PC-PR recebe peso de disciplina, regra de branco e estratégias calibrados para outra banca. A estratégia "Gestão do branco (1 líquida)" é o caso mais grave, porque em prova FGV deixar em branco só tira ponto.

---

## 3. A assinatura de IA dentro do próprio banco

O banco autoral foi gerado com IA (README, M11). As mesmas métricas da auditoria FGV foram rodadas nele, com o mesmo regex de absolutizadores. No C/E, "errada" = gabarito E.

| Corpus | Absolutizador: E ÷ C | Ressalva: C ÷ E |
|---|---|---|
| FGV PC-RJ 2022 (controle humano) | **0,72** | ≈ 1 |
| CEBRASPE real dentro do banco (133 itens) | 1,76 (p = 0,05; amostra pequena e selecionada, ver ressalva) | 1,37 |
| **QuestLab autoral (2.499 itens C/E)** | **1,44** | 1,24 |
| FGV PC-PR 2026 (assinatura IA) | **1,86** | 1,3 |

**Disciplinas autorais com a assinatura mais forte** (razão do absolutizador E ÷ C):

| Disciplina | Razão | Leitura |
|---|---|---|
| Atualidades | **3,10** | 42% dos ERRADO têm absolutizador, contra 14% dos CERTO |
| Crimes Cibernéticos | **2,41** | |
| Legislação do SUS | 2,26 | |
| Estatística | 2,15 | |
| Língua Portuguesa | 1,85 | igual à FGV-2026 |
| Processo Penal | 1,80 | |
| Direito Penal, Constitucional, Administrativo, RLM | 0,83 a 0,99 | **sem assinatura** |

**Palavra a palavra, autorais contra prova real:**

| Palavra | Autorais (n, % ERRADO) | CEBRASPE real (n) |
|---|---|---|
| exclusivamente | 60 itens, 80% E | 1 |
| automaticamente | 27, 70% E | **0** |
| necessariamente | 27, 70% E | 1 |
| desde que | 43, 72% E | 2 |
| qualquer | 155, 65% E | 5 |
| independentemente | 56, 66% E | 2 |

O banco usa esses marcadores **dezenas de vezes mais** que a prova real, e quase sempre no item falso. É o mesmo mecanismo que denunciou a IA na FGV-2026: o gerador cria o distrator **absolutizando** a frase correta.

**Ligação com o aviso que já existe:** o validador acusa "regra cega com 5,2pp de vazamento", pior em Atualidades (72,1%), Direito Administrativo (67,9%) e Estatística (62,8%). Esta auditoria explica a causa: a regra cega usa termo absoluto, e é exatamente onde o gerador concentrou absolutizadores nos ERRADO.

**Ressalva da linha CEBRASPE real:** os 133 itens reais do banco foram **escolhidos** para ensinar (59% CERTO, longe dos ~50% da banca) e o regex desta auditoria é mais amplo que o da auditoria de 2021 (inclui *dispensa, garante, demonstra, exige*). A medição de referência do site continua sendo a de 292 itens policiais com a lista estrita: +6,3pp, IC 95% de −12,0 a +24,5 (não significativa). O número 1,76 não derruba essa conclusão; só indica que vale remedir a lista ampla num caderno inteiro.

---

## 4. Parâmetro a parâmetro

### 4.1 `DNA_BANCA` (12 mecanismos) contra os operadores da FGV-2026

| Operador FGV-2026 | Correspondente no site | Situação |
|---|---|---|
| Conversão de fonte (modo B) | `literalidade` ("Literalidade da fonte") | **Coberto.** É o mesmo mecanismo |
| Absolutização | `termo-absoluto` + `generalizacao` | Coberto, mas com regra de leitura que **não vale para a FGV-2026** (§4.2) |
| Restrição | `restricao-indevida` | Coberto |
| Inversão de agente/culpa | `troca-sujeito`, `troca-conceito` | Coberto |
| Extrapolação jurídica | `exigencia-inexistente` | Parcial |
| Meia-verdade em duas metades | `verdade-mais-falso` (atenção **baixa**) | Coberto, mas **subdimensionado**: na FGV-2026 é a estrutura de quase todas as alternativas de Português |
| **Cronologia inventada** | nenhum | **Ausente** |
| **Troca de tempo/modalidade** ("já realizadas", "prevê") | nenhum | **Ausente** |
| **Falsa causalidade** | nenhum | **Ausente** |
| **Termo de outra categoria / nome inventado por analogia** (`manager-bde`, "provoking", "preterdolosa") | `juris-inventada` cobre só súmula | **Ausente** para termos técnicos |
| **Substituição** ("substitui", "pode substituir a documentação") | nenhum | **Ausente** |
| **Gabarito prudente** (padrão positivo: "pode", "em conjunto", "não… por si só") | nenhum; o catálogo só descreve como o item é **falseado** | **Ausente.** Na FGV-2026 é o sinal mais forte de Forense (7/10) |

### 4.2 Radar lexical (`PALAVRAS_PERIGOSAS`) e `HEURISTICAS_REJEITADAS`
- O site **rejeita** "palavra absoluta = ERRADO" e rebaixou o radar a "localizador". Para a CEBRASPE, a decisão está correta e medida.
- O controle FGV 2022 **concorda** (0,72: o absoluto aparecia mais na certa).
- **A FGV-2026 discorda** (1,86). A heurística rejeitada vale numa banca e época e não na outra. O registro em `HEURISTICAS_REJEITADAS` precisa de escopo explícito ("CEBRASPE, C/E"); do contrário, a mesma tela que ensina "não confie no absoluto" vai desorientar quem estuda para FGV.
- As forças do radar (`exclusivamente` 80% E, `desde que` 70% E...) foram medidas **no próprio banco**, e o código diz isso. Esta auditoria mostra que esses números são, em boa parte, **a assinatura do gerador**, não da banca: na prova real, 5 dos 6 marcadores fortes aparecem 0 a 2 vezes.

### 4.3 Múltipla escolha (65 itens)

| Métrica | QuestLab ME | FGV 2022 | FGV 2026 |
|---|---|---|---|
| CV de tamanho das alternativas (mediana) | 0,146 | 0,171 | **0,037** |
| Gabarito é a mais longa | **35%** (23/65) | 23% | 23% |
| Absolutizador E ÷ C | 0,92 | 0,72 | 1,86 |
| Pirâmide de tamanho | 9/65 | 9/86 | 14/57 |
| Disciplinas | só Penal (31) e RLM (34) | | Português, Forense, TI, Direito… |
| Bancas | FUNDATEC, IBFC, VUNESP, IBADE… **nenhuma FGV** | | |

O gabarito de ME do site é a alternativa mais longa em 35% dos casos, quando o acaso daria 20%. É um vazamento de comprimento que o validador não mede, porque a meta de comprimento existe só para C/E.

### 4.4 Validador (`scripts/validar.js`)

| Meta existente | Vale para FGV? |
|---|---|
| `LIMIAR_CE_GLOBAL` (50/50 ± 5%) | Não se aplica (5 letras) |
| `LIMIAR_VIES_TAMANHO` C×E | Não mede alternativas de ME |
| `REGRA_CEGA_REFERENCIA_REAL = −1,1pp` | Ancorada em CEBRASPE |
| `PERFIL_COMPRIMENTO_REAL` | Perfil de item C/E |
| `LIMIAR_PADRAO_ENVIESADO` (90%) | Útil nas duas |

Metas que faltam para ME: (a) gabarito mais longo em no máximo ~25%; (b) CV das alternativas por disciplina, com alvo dependente do perfil escolhido (≈0,04 para FGV-2026 em Português, ≈0,17 para a FGV antiga); (c) absolutizador E ÷ C com alvo por banca e época; (d) distribuição de letras.

---

## 5. O dilema central

O banco autoral **se parece mais com a FGV-2026 do que com a CEBRASPE real**. Isso tem dois lados:

- **Para a PC-AL (CEBRASPE), alvo declarado do site:** é defeito. Treina o reflexo "absoluto = errado" que a prova real não paga. O validador já mede isso (5,2pp) e o README já chama de "reflexo falso".
- **Para a PC-PR (FGV-2026):** é coincidência útil, mas só no C/E. O formato da PC-PR é ME, e o ME do site não reproduz o padrão.

A saída não é "corrigir" o banco numa direção só. É **etiquetar o perfil** (banca e época) e deixar o motor escolher qual comportamento treinar.

---

## 6. Ajustes recomendados, por prioridade

1. **Escopo explícito nas regras de forma.** Adicionar `banca`/`epoca` em `HEURISTICAS_REJEITADAS`, `DNA_BANCA[].desc` e no radar, com a nota: "medido em CEBRASPE C/E; na FGV a partir de 2026 o absoluto aparece 1,86 vez mais na alternativa errada". É só texto e não muda o comportamento.
2. **Reduzir a assinatura do gerador no C/E da PC-AL**, começando por Atualidades (3,10), Crimes Cibernéticos (2,41) e Estatística (2,15): reescrever ERRADO que só erram por absolutização e escrever CERTO com absoluto legítimo (vedações literais). Ataca de uma vez o aviso de 5,2pp do validador.
3. **Se a PC-PR entrar como alvo:** criar `EDITAIS.PCPR` (100 ME, TI/Ciber 25, Forense 10, Realidade PR 5…), `REGRA_CORRECAO` por concurso (FGV sem desconto) e desligar "Gestão do branco" nesse perfil.
4. **Lote ME no molde FGV-2026**: Português e Forense primeiro, com alternativas isométricas, um operador por distrator e gabarito com ressalva, usando o molde do §6.4 da auditoria FGV. Cada item deve registrar o operador de cada distrator.
5. **Completar o `DNA_BANCA`** com os 5 operadores ausentes e um padrão positivo ("gabarito prudente"), marcados como "FGV-2026" até haver medição em outras provas.
6. **Metas de ME no validador** (§4.4) como avisos, no mesmo espírito dos avisos atuais.

---

*Método: `scripts/fontes.js` carregou o banco; as questões foram exportadas para JSON e medidas com o mesmo regex e as mesmas definições da auditoria FGV. A permutação (10 mil embaralhamentos) testou a razão do absolutizador nos itens reais. Scripts `exp.js` e `site.py` na pasta temporária da sessão.*
