/* =====================================================================
   CEBRASPE LAB — Lote 25: AJUSTE DE ESCOPO (fora do edital PC-AL 2026)
   Verificação cruzada com o conteúdo programático oficial do edital
   PC-AL 2026 (Agente/Escrivão) revelou dois temas presentes no banco
   que NÃO constam do edital:

   - Improbidade Administrativa (Lei 8.429/1992): o edital de Direito
     Administrativo lista apenas organização administrativa, ato
     administrativo, agente público, poderes administrativos,
     licitações, controle da administração e responsabilidade civil
     do Estado — improbidade não consta.
   - Controle de Constitucionalidade (ADI/legitimados): o edital de
     Direito Constitucional se limita a "Direitos e Garantias
     Fundamentais" e ao Título V, Capítulo III (Segurança Pública) —
     controle de constitucionalidade é Título IV (Organização dos
     Poderes), fora desse recorte.

   Este arquivo não remove as questões (permanecem nas respectivas
   disciplinas como treino complementar de Direito Administrativo/
   Constitucional geral), mas as marca como foraEdital para que
   fiquem de fora quando o filtro "só edital PC-AL 2026" estiver
   ativo, e exibe o aviso visível no card da questão.
   ===================================================================== */

const FORA_EDITAL_PCAL2026_LOTE25 = [
  "DA-004", "DA-021", "DA-038", "DA-039", "DA-044", "DA-047", /* Improbidade Administrativa */
  "DC-029", /* Controle de Constitucionalidade (ADI) */
];
QUESTOES.forEach(q => { if (FORA_EDITAL_PCAL2026_LOTE25.includes(q.id)) q.foraEdital = true; });
