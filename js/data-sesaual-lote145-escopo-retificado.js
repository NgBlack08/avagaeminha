/* =====================================================================
   QUESTLAB — Lote 145: AJUSTE DE ESCOPO (edital retificado SESAU-AL)

   O Edital nº 2 (16/07/2026) substituiu o conteúdo de Fisioterapia do
   Edital nº 1. Saíram: prescrição de órteses e próteses, procedimentos
   neurológicos/neuropediátricos, ortopedia e traumatologia, clínica
   cardiológica e pneumológica e geriatria. Ficaram (e passaram a ser o
   centro): saúde da mulher, oncologia, avaliação (inclusive postura,
   marcha, função muscular e pulmonar), recursos terapêuticos e ética.
   Detalhes no comentário de EDITAIS.SESAUAL_FISIO (js/data.js).

   As questões abaixo NÃO são apagadas: viram treino complementar e
   recebem a etiqueta "fora do edital retificado SESAU-AL" no card.
   Ficaram DENTRO, de propósito: FIS-093 (escala de Borg — instrumento de
   avaliação e de prescrição de exercício) e FIS-097 (osteoporose e
   exercício — tema do climatério, item 4 do edital).
   ===================================================================== */

const FORA_EDITAL_SESAUAL_LOTE145 = [
  "FIS-081", "FIS-082", "FIS-083", "FIS-084", "FIS-085", "FIS-086", /* órteses e próteses */
  "FIS-087", "FIS-088", "FIS-090",                                   /* neurofuncional */
  "FIS-089",                                                         /* ortopedia — artroplastia */
  "FIS-091", "FIS-092",                                              /* clínica cardiorrespiratória */
  "FIS-094", "FIS-095", "FIS-096", "FIS-098",                        /* geriatria */
];
QUESTOES.forEach(q => { if (FORA_EDITAL_SESAUAL_LOTE145.includes(q.id)) q.foraEdital = true; });
