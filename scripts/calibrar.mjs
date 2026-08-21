/* O PORTÃO. Roda o classificador contra a PC-AL 2021, cuja contagem por
   disciplina foi conferida item a item à mão (FREQUENCIA_TEMAS em
   js/data.js). Se não reproduzir, nada sai daqui para o repositório. */
import { medir } from "./medir2.mjs";

/* Verdade-fundamental: contagem manual, 120 itens. */
const MANUAL = {
  "Língua Portuguesa": 20,
  "Direito Penal": 15,
  "Processo Penal": 15,
  "Direito Administrativo": 14,
  "Legislação Institucional (AL)": 14,
  "Direito Constitucional": 12,
  "Direitos Humanos": 12,
  "Ética no Serviço Público": 10,
  "TI e Segurança Cibernética": 8,
};

const r = medir("CALIBRACAO-pcal2021");
console.log(`PC-AL 2021 — ${r.itens} itens capturados (faixa ${r.faixa}), ${r.cmds} comandos`);
console.log(`comandos sem tema: ${r.semTemaAntes} antes da herança, ${r.semTemaDepois} depois\n`);

console.log("disciplina".padEnd(32) + "manual".padStart(7) + "medido".padStart(8) + "erro".padStart(7));
let somaErroAbs = 0, exatos = 0, totalManual = 0;
const discs = new Set([...Object.keys(MANUAL), ...r.porDisc.keys()]);
for (const d of discs) {
  const man = MANUAL[d] || 0, med = r.porDisc.get(d) || 0, e = med - man;
  somaErroAbs += Math.abs(e); totalManual += man;
  if (e === 0) exatos++;
  const marca = e === 0 ? "  ok" : Math.abs(e) <= 2 ? "   ~" : "  XX";
  console.log(d.padEnd(32) + String(man).padStart(7) + String(med).padStart(8) + String(e > 0 ? "+" + e : e).padStart(7) + marca);
}
const erroPct = 100 * somaErroAbs / totalManual;
console.log(`\nerro absoluto total: ${somaErroAbs} itens de ${totalManual} (${erroPct.toFixed(1)}%)`);
console.log(`disciplinas exatas: ${exatos}/${discs.size}`);

/* Portão: erro total <= 10% e nenhuma disciplina errando mais que 3. */
const piorErro = Math.max(...[...discs].map(d => Math.abs((r.porDisc.get(d) || 0) - (MANUAL[d] || 0))));
const passou = erroPct <= 10 && piorErro <= 3;
console.log(`pior erro numa disciplina: ${piorErro} itens`);
console.log(`\n${passou ? "✔ APROVADO" : "✘ REPROVADO"} — critério: erro total <= 10% e pior disciplina <= 3 itens`);

if (process.argv[2] === "-v") {
  console.log("\nBLOCOS:");
  for (const b of r.blocos)
    console.log(`  [${String(b.n).padStart(2)}] ${String(b.de).padStart(3)}-${String(b.ate).padStart(3)} ${(b.disc || "SEM TEMA").padEnd(30)}${b.herdado ? "(herdou do " + b.herdado + ") " : ""}${b.txt.slice(-70)}`);
}
process.exit(passou ? 0 : 1);
