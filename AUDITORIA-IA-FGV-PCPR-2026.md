# Auditoria: indícios de IA na prova FGV, PC-PR 2026 (Agente de Polícia Judiciária)

**Base analisada:** caderno CNS201, tipo 1 (100 questões, 5 alternativas), aplicado em 11/10/2026, e o gabarito preliminar tipo 1.
**Método:** extração do texto, separação automática das 500 alternativas, medição do comprimento de cada alternativa, contagem de marcadores lexicais (absolutizadores e ressalvas) e leitura qualitativa das 100 questões contra o gabarito.

> **Limite da análise:** não existe detector confiável de texto de IA. O que dá para mostrar são **assinaturas de produção**, padrões estruturais que aparecem quando a questão é gerada a partir de um molde ou modelo. Para separar mudança recente de estilo da casa, as mesmas métricas foram rodadas numa **prova de controle anterior à IA generativa: FGV PC-RJ 2022, Inspetor, tipo 1** (§7). A comparação confirma os sinais principais e **corrige três afirmações da primeira versão** (pirâmide, "Nesse cenário" e personagem policial), já ajustadas no texto abaixo.

---

## 1. Conclusão em uma frase

A prova é **híbrida**: há **três modos de produção** distintos, e dois deles têm a assinatura típica de geração assistida por IA. O modo muda conforme a disciplina, e cada um pede uma tática de estudo diferente.

| Modo | Disciplinas | Assinatura | Indício de IA |
|---|---|---|---|
| **A: Sintetizador** | Português (1–25), Ciências Forenses (61–70), Direitos Humanos (98–100), parte de Paraná e as questões 47, 48, 59, 62 e 65 | Alternativas do mesmo tamanho; o gabarito é a síntese equilibrada e com ressalva; cada distrator usa a mesma moldura com **um** "operador de distorção" | **Forte** |
| **B: Conversão de fonte** | TI/Ciber (36–60, a maioria) | Trecho de documentação oficial ou de fornecedor traduzido e "policializado"; os itens verdadeiros repetem a fonte e os falsos são mutações dela | **Médio-forte** |
| **C: Molde jurídico** | Direito (86–97), Legislação Estadual (81–85), Contabilidade, RLM, Estatística | Alternativas em pirâmide de tamanho, letra da lei, caso aberto por "Nesse cenário, considerando as disposições", gabarito curto | Médio: o molde **não existia** na prova de 2022 (§7) |

---

## 2. Evidência quantitativa

### 2.1 Isometria das alternativas (coeficiente de variação do comprimento)

Quanto menor o CV, mais iguais em tamanho são as 5 alternativas. Gerador com instrução do tipo "alternativas com extensão semelhante" produz CV muito baixo.

| Bloco | CV médio | Leitura |
|---|---|---|
| **Português** | **0,041** | As 5 alternativas têm quase o mesmo tamanho (variação de cerca de 4%). Não é natural em redação humana. |
| **Ciências Forenses** | 0,087 | Isométrico |
| Direitos Humanos | 0,127 | Quase isométrico |
| TI/Ciber (textuais) | 0,208 | Misto |
| Adm / Const / Leg. Estadual / Proc. Penal | 0,26 a 0,35 | **Pirâmide**: alternativas ordenadas do menor para o maior ou o contrário. Em 2026 isso vale para 10 de 10 questões de Leg. Estadual, Adm e Proc. Penal; em 2022, só 9 de 86 questões, quase todas de Constitucional |

Exemplos de pirâmide (comprimento em caracteres, de A a E): Q83 `[69, 114, 124, 128, 180]`, Q85 `[80, 101, 136, 168, 183]`, Q89 `[202, 191, 181, 120, 64]`, Q97 `[147, 136, 100, 81, 63]`.

### 2.2 Onde o gabarito cai no ranking de tamanho

Considerando só as 57 questões com alternativas textuais:

| Bloco | Gabarito é a mais longa | Entre as 2 mais longas | Razão (tamanho do gabarito ÷ média) |
|---|---|---|---|
| Geral | 13/57 | 25/57 | 0,99 (neutro) |
| **Forense** | **4/8** | **6/8** | **1,07** |
| **Direitos Humanos** | 1/3 | **3/3** | **1,14** |
| Português | 5/23 | 9/23 | 1,00 (neutralizado pela isometria) |
| **Direito (81–97)** | 1/13 | 5/13 | **0,50 a 0,83** (gabarito **mais curto**) |

**Leitura:** "chutar a mais longa" **não funciona** na prova como um todo. Funciona parcialmente em Forense e DH, onde o gabarito é a alternativa "completa e ressalvada" (modo A). Em Direito acontece o contrário: o gabarito é a letra da lei, curta, e os distratores longos trazem detalhes inventados (modo C).

### 2.3 Marcadores lexicais

| Marcador | Na certa | Nas erradas |
|---|---|---|
| Absolutizador (*exclusivamente, somente, sempre, automaticamente, obrigatoriamente, elimina, dispensa, suficiente, comprova, restringe, substitui…*) | 16% | **29%** |
| Ressalva (*pode, compatível, em conjunto, por si só, não dispensa, mas não, ainda que, limites…*) | 18% | 14% |

O filtro "eliminar as alternativas com absolutizador" preserva o gabarito em **48 das 57** questões (84%). Ele ajuda a descartar, mas sozinho raramente deixa uma só alternativa. É ferramenta de eliminação, não de acerto.

**Exceções em que o absoluto é o gabarito:** Q98 (proibição da tortura tem *caráter absoluto*) e Q47 (*recai somente…*). Quando a própria norma é absoluta, o absoluto está certo.

### 2.4 Distribuição do gabarito

A 13 · B 22 · C 21 · **D 25** · E 19. Qui-quadrado = 4,0 (gl 4, p ≈ 0,41): **não é significativo**. Não há letra preferida, e chutar por letra não tem base.

### 2.5 Posição do item falso (questões I/II/III e V/F)

Em 17 questões de itens, **o primeiro item foi verdadeiro em 13 (76%)**. O item falso tende a ficar no meio ou no fim (item III falso em 5 de 10 questões I/II/III). Padrão típico de quem gera a partir de uma fonte: o item I é a paráfrase direta e a mutação vem depois.

---

## 3. Modo A (Sintetizador): os parâmetros

### 3.1 Molde do enunciado
- Português: texto curto de site institucional do Paraná (PCPR, Detran, SESP, Bombeiros, museus, BPP), todos acessados entre 15/07 e 16/08/2026. Pergunta-padrão: **"…contribui para"** (8 ocorrências), "o efeito de sentido decorre de", "o texto sugere que".
- Forense: caso longo e técnico que já anuncia o critério de correção. Exemplo da Q63: *"considerando os vestígios descritos e **os limites das inferências criminalísticas**"*.

### 3.2 Molde das alternativas
Todas seguem **[verbo no infinitivo] + [objeto] + [qualificador]**, muitas vezes em duas metades ligadas por "e", "enquanto" ou "mas". A **armadilha de meia-verdade** é sistemática: a primeira metade está correta e a segunda traz o erro.

### 3.3 Catálogo de operadores de distorção (os distratores saem daqui)

| Operador | Exemplos na prova |
|---|---|
| **Absolutização** | "eliminam os acidentes" (Q10C), "eliminando a possibilidade" (Q17B), "suficiente para eliminar" (Q23D), "dispensa exames" (Q63B), "suficiente para individualizar" (Q67E) |
| **Restrição** | "restringir a orientação" (Q3E), "restringir aos responsáveis" (Q11A), "restringe sua linguagem" (Q12E), "exclusivamente na deep web" (Q62B) |
| **Cronologia inventada** | "ordenar cronologicamente" (Q2E), "ordem cronológica rígida" (Q10D), "sequência temporal" (Q19D) |
| **Troca de tempo ou modalidade** | "ações já realizadas" (Q2A, Q11E), "alteração já ocorrida / expansão futura" (Q15C), "recomendações cuja execução depende" (Q2C) |
| **Extrapolação jurídica** | "estabelece obrigações legais" (Q1C), "caráter legalmente obrigatório" (Q10B) |
| **Inversão de agente ou culpa** | "atribuir às vítimas a responsabilidade" (Q1B), entrada e saída do projétil trocadas (Q63E) |
| **Substituição** | "substitui sua função" (Q12D), "substituir referentes" (Q19A), hash "pode substituir a documentação" (Q65D) |
| **Falsa causalidade** | "a saudade decorre do emprego dos tempos verbais" (Q17D), concordância "por indicar procedimento institucional" (Q6E) |
| **Termo de outra categoria** | "vitimização **preterdolosa**" (Q61E): preterdolo é classificação de crime, não de vitimização |

### 3.4 Perfil do gabarito no modo A
É a alternativa **epistemicamente prudente**, a que reconhece o limite da conclusão. Em Forense, isso vale para **7 de 10** questões:

- Q62E: "…*sem que essa classificação, por si só*, torne ilícito todo o conteúdo"
- Q63C: "Os achados *sustentam a hipótese* […] *mas não a demonstram isoladamente*"
- Q65B: OSINT "*pode subsidiar* […] *mas não dispensa* a validação"
- Q67A: "sua coincidência *auxilia* a classificação, *mas a individualização exige* o confronto"
- Q68D: "achados de *valor limitado* […] interpretados *em conjunto* […] *sem atribuição automática*"
- Q64D: "*pode* ser investigada sob luz infravermelha"
- Q70C: sangue em vida tem "*maior valor*" que o cadavérico (comparativo, não absoluto)

Esse é o traço mais característico de modelo de linguagem: a resposta "certa" é a que **concilia, ressalva e trata cada elemento do enunciado**. A Q63C chega a responder ponto a ponto, separando cinco afirmações por ponto e vírgula.

### 3.5 Alternativas com o mesmo prefixo
Na Q68, as alternativas B a E repetem cerca de 70% do texto e só mudam a frase final. O mesmo acontece em Q91 (A a C) e em parte de Q89 e Q96. **Tática:** leia só a cauda que muda.

---

## 4. Modo B (Conversão de fonte): os parâmetros

### 4.1 Mecanismo
A banca pega um trecho de documentação primária, traduz, insere o personagem policial e muta um ou dois itens. Fontes identificáveis:

| Questão | Fonte provável | Sinal |
|---|---|---|
| Q36 UEFI 2.11 | Introdução da especificação UEFI | Tradução literal: "definir **uma a** comunicação" |
| Q38 Biometria Android | Android Source, *Measuring biometric security* (SAR / IAR / FRR) | O item III inventa uma "Taxa de **Verdadeiros Positivos**" que "aceita **erroneamente**", contradição interna |
| Q37, Q57 BitLocker / energia | Microsoft Learn (`repair-bde`, `powercfg /a`) | Distratores criados por analogia: `manager-bde` (o real é `manage-bde`), `unlock-bde`, `fix-bde`, `wincfg`, `chkpower` |
| Q43 VPN | Glossário de fornecedor (Kaspersky/Norton) | Resto da fonte em segunda pessoa: "oculta o IP **do seu dispositivo** […] servidor ao qual **o agente** se conecta" |
| Q44 Engenharia social | Cartilha ou glossário | "pessoas mal-**intencionados**" (sobra de "atacantes"); termo inventado: "provoking" |
| Q45 ISDP | Guia da ANPD / gov.br sobre incidentes | Descrições copiadas da fonte; "coloque em risco **em risco**" |
| Q51 2FA | Ajuda do Google Workspace | Gabarito é a lista literal da página de ajuda |
| Q40 Cookies | Texto web traduzido | Categoria inventada ("cookies de segurança") e número arbitrário ("máximo de 365 dias") |

### 4.2 Sinais de revisão humana fraca (concentrados no bloco de TI)
"phising" (Q44, Q52), "Uma VPN **criar**" (Q43), "apoiar o desenvolvimento **uma** interface" (Q42), "sem a participação **ativo**" (Q47), "Emprego de malware apenas **são** tipificadas" (Q58), "mesmo **patente** quando autorizadas" (Q60), alternativa truncada na Q93C. No modo A esses erros quase não aparecem, o que reforça que os blocos têm processos de produção diferentes.

### 4.3 Perfil dos itens falsos no modo B
Dos cerca de 18 itens falsos das questões I/II/III e V/F de TI e Direito, a maioria traz um destes sinais:
- **absolutizador**: *sempre* (Q49-II, Q58-I), *exclusivamente / somente* (Q49-I), *apenas* (Q58-III), *obrigatoriamente* (Q50-III), *automaticamente* (Q90-II), *elimina / impossibilidade* (Q54-III);
- **contradição interna**: "agravamento, passando de reclusão **para detenção**" (Q46-II), "punir condutas mesmo quando **autorizadas**" (Q60-I), "verdadeiro positivo que aceita **erroneamente**" (Q38-III);
- **absurdo de categoria**: força bruta por "manipulação física coercitiva" (Q56-III);
- **taxonomia inventada**: "cookies de segurança" (Q40-III).

### 4.4 Personagem decorativo
> **Correção pelo controle:** a prova de 2022 também usava muito o personagem ("inspetor de polícia" aparece 30 vezes), mas sempre como **parte do caso jurídico** (o inspetor perseguido, o inspetor demitido etc.). O que é novo em 2026 é o personagem **sem função**, em disciplinas nas quais ele não altera a resposta.

"Agente de Polícia Judiciária" ou "Polícia Civil do Paraná" aparecem **20 vezes** em enunciados nos quais o personagem não interfere na resolução: **as 5 questões de Contabilidade** ("Um Agente de Polícia Judiciária verificou…"), além de Q37, Q39, Q54 etc. Também aparece **papiloscopista** em prova de Agente (Q42 "Xerloque", Q55), sinal de **banco de questões compartilhado entre cargos** e contextualizado em lote, típico de instrução de prompt do tipo "contextualize para o cargo".

---

## 5. Modo C (Molde jurídico)
- Enunciado padrão: "Nesse cenário, considerando as disposições da Lei nº X, é correto afirmar que…" (9 ocorrências, Q86 a Q97). **Na prova de 2022 a expressão não aparece nenhuma vez**: os casos terminavam em "À luz da sistemática constitucional", "De acordo com a jurisprudência do STJ" etc. Isso é molde novo, não herança da casa.
- Alternativas em pirâmide, sistemáticas no bloco jurídico. **O gabarito tende a ser curto**, porque é a letra da lei.
- Os casos de 2022 eram longos e narrativos (com personagens como Hades, Ares e Atena) e cobravam doutrina e jurisprudência. Os de 2026 são curtos e cobram a **letra de lei nova**.
- **Legislação recentíssima** em peso: Lei 15.358/2026 (Marco Legal do Combate ao Crime Organizado), Lei Estadual 23.213/2026, Decretos 12.975 e 12.976/2026, *vicaricídio* como hediondo (Q88E), tese do STF sobre o art. 19 do Marco Civil (Q49) e LC 259/2023. Gerar questões assistido por IA barateia a produção sobre normas novas, então espere **mais lei nova** do que nos ciclos anteriores.

---

## 6. Estratégia de estudo por questões

### 6.1 Divisão do tempo de treino por modo

| Modo | Peso na prova (Agente) | O que treinar | Banco de questões |
|---|---|---|---|
| A: Sintetizador | cerca de 40 questões | **Caçar o operador de distorção**: em cada alternativa errada, marque a palavra que a quebra | FGV 2024–2026 de Português e Medicina Legal; questões geradas com o molde do §6.4 |
| B: Conversão de fonte | cerca de 20 questões | **Ler a fonte primária**, não o resumo de cursinho | Microsoft Learn, Android Source, especificação UEFI, Google Workspace Help, ANPD, Cartilha CERT.br |
| C: FGV clássica | cerca de 40 questões | Lei seca e informativos do STF/STJ, com prioridade para normas de 2025–2026 | Questões FGV de Direito, filtradas por lei nova |

### 6.2 Protocolo de resolução (modo A e Forense)
1. Leia o comando e **identifique o critério anunciado** ("limites das inferências", "contribui para", "efeito de sentido").
2. Em cada alternativa, procure **um** operador do catálogo (§3.3). Se achar, elimine.
3. Entre as que sobrarem, escolha a **que ressalva**: "pode", "compatível", "em conjunto", "não… por si só", "mas não dispensa".
4. **Antídoto:** se a própria norma é absoluta (tortura, imprescritibilidade, vedações constitucionais), o absoluto é o certo.
5. Em alternativas com o mesmo prefixo, **compare só as caudas**.

### 6.3 Protocolo de resolução (modo B, TI e Ciber)
1. Suponha que **o item I é verdadeiro** (76% dos casos) e concentre a desconfiança nos itens II e III.
2. Verifique contradição interna ("verdadeiro positivo que erra", "agravamento para detenção").
3. Em nomes de comandos ou termos técnicos, **o real é o nome-padrão**; os inventados seguem o mesmo sufixo ou molde (`-bde`, `-phishing`, `win-`). Decorar o nome exato vale ponto direto.
4. Desconfie de números redondos arbitrários ("365 dias") e de categorias que você nunca viu numa taxonomia oficial.

### 6.4 Treinar com o mesmo molde da banca
Como o modo A segue parâmetros reproduzíveis, dá para gerar simulados com IA usando a mesma especificação:

```
Gere 1 questão FGV de [disciplina] para Agente da PCPR.
- Texto-base: trecho de site institucional do Paraná (até 120 palavras).
- Comando terminado em "contribui para" OU "considerando os limites de…".
- 5 alternativas com MESMO tamanho (±5%), formato [verbo infinitivo]+[objeto]+[qualificador].
- Gabarito: síntese fiel com ressalva ("pode", "em conjunto", "não… por si só").
- 4 distratores, cada um com UM operador diferente:
  absolutização | restrição | cronologia inventada | troca de tempo/modalidade |
  extrapolação jurídica | inversão de agente | substituição | falsa causalidade.
- Depois do gabarito, indique o operador de cada distrator.
```

Treinar **nomeando o operador** de cada distrator é o exercício que mais transfere para a prova real.

---

## 7. Validação com prova de controle (FGV PC-RJ 2022)

**Controle:** FGV, Polícia Civil do RJ, Inspetor de Polícia de 6ª Classe, tipo 1, aplicada em 30/01/2022 (antes da popularização do ChatGPT, lançado em nov/2022), com o gabarito definitivo. Fonte: [página do concurso na FGV](https://conhecimento.fgv.br/concursos/pcrj21/01). O mesmo script foi rodado nas duas provas.

| Métrica | PC-RJ 2022 (controle) | PC-PR 2026 | Veredito |
|---|---|---|---|
| **CV de tamanho das alternativas de Português** (mediana) | 0,171 | **0,037** | **Mudança forte.** Alternativas 4,6 vezes mais uniformes. Teste de permutação: p < 0,0001. A questão de Português mais desigual de 2026 (CV 0,125) é mais uniforme que 20 das 30 de 2022. |
| **Absolutizador: errada ÷ certa** | 0,72 (o absoluto aparecia **mais na certa**) | **1,86** (aparece **mais na errada**) | **Inversão.** O padrão "a palavra absoluta denuncia a errada" **não existia** em 2022. É uma assinatura nova. |
| "contribui para" no comando | 0 | 8 | Molde novo |
| "Nesse cenário, considerando as disposições" | 0 | 9 | Molde novo (corrige a primeira versão) |
| Pirâmide de tamanho | 9/86 | 14/57, sendo 10 de 10 em Leg. Estadual, Adm e Proc. Penal | Ficou sistemática no bloco jurídico |
| Gabarito é a alternativa mais longa | 20/86 (23%) | 13/57 (23%) | **Sem mudança.** Continua sem valer "chutar a mais longa" |
| Distribuição das letras | qui² 3,4 (n.s.) | qui² 4,0 (n.s.) | Sem viés de letra nas duas |
| Personagem policial nos enunciados | 30 (sempre parte do caso) | 20 (muitas vezes decorativo) | O uso decorativo é novo; o personagem em si, não |
| Erros de digitação | existem ("policiais miliares", "prisão captura") | existem, concentrados em TI | **Não serve como indício.** Erro de revisão já existia |

### O que mudou no tipo de questão de Português
- **2022:** gramática e semântica no nível da frase. Comandos como "a frase em que…", "a opção em que…"; alternativas curtas, muitas em pares de reescrita ("X / Y"); textos de notícias policiais genéricas.
- **2026:** interpretação no nível do texto. Comando "contribui para"; alternativas paralelas de mesmo tamanho, cada uma com um operador de distorção; textos de sites institucionais do Paraná.

### Conclusão da validação
1. **Confirmado:** isometria das alternativas, inversão do papel dos absolutizadores e moldes fixos de comando ("contribui para", "Nesse cenário"). Os três estão ausentes em 2022 e presentes em 2026, o que é compatível com geração assistida por IA a partir de uma especificação.
2. **Retificado:** pirâmide e "Nesse cenário" **não** são herança antiga da FGV, como eu havia afirmado. São parte do molde novo do bloco jurídico. O personagem policial é antigo; o uso decorativo dele é que é novo. Erro de digitação não indica nada.
3. **Sem mudança:** tamanho do gabarito e distribuição das letras. Nenhum atalho mecânico de "chute" ganhou validade.
4. **Ressalva:** são duas provas, de cargos e estados diferentes. Isso basta para mostrar que o padrão de 2026 **não é o padrão de sempre da FGV**, mas não prova a ferramenta usada. Para fechar a série, vale incluir uma prova FGV de 2024–2025 (por exemplo, PC-SE ou PC-MG, se a banca for a FGV) e ver quando a mudança começou.

### Impacto na estratégia (§6)
- O **filtro de absolutizador (§6.2, passo 2)** vale **para a FGV de 2026 em diante**. Em provas antigas da FGV ele erraria, porque lá o absoluto aparecia mais na certa. **Quem treina com questões FGV antigas precisa saber disso**: elas ensinam o reflexo contrário.
- Para treinar Português no padrão novo, priorize questões FGV **a partir de 2024** e as geradas com o molde do §6.4. O banco de 2022 e anteriores treina outra habilidade, gramática no nível da frase, que continua útil, mas não é o formato que cai agora.

*Scripts da análise (na pasta temporária da sessão): `an.py` (separação e comprimento), `lex.py` (marcadores), `cmp.py` (comparação entre as provas) e `sig.py` (testes de significância).*
