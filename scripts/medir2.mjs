/* Medição v2 — usa o classificador reconstruído e a herança do comando
   seguinte. O portão é calibrar.mjs: nada sai daqui para o repositório
   sem antes reproduzir a contagem manual da PC-AL 2021. */
import fs from "fs";
import { classificar, aplicarHeranca } from "./classificar.mjs";

const semAcento = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
const limpar = s => s.replace(/pcimarkpci\s+\S+/g, " ")
  .replace(/www\.pciconcursos\.com\.br/gi, " ")
  .replace(/\|\|[^|]{0,60}\|\|/g, " ").replace(/\s+/g, " ").trim();

function runs(t) {
  const c = [...t.matchAll(/(\d{1,3})\s?([A-ZÀ-ÚÂÊÔÃÕÁÉÍÓÚ])/g)]
    .map(m => ({ n: +m[1], pos: m.index })).filter(x => x.n >= 1 && x.n <= 250);
  let b = [];
  for (let i = 0; i < c.length; i++) {
    const r = [c[i]];
    for (let j = i + 1; j < c.length; j++) if (c[j].n === r[r.length - 1].n + 1) r.push(c[j]);
    if (r.length > b.length) b = r;
  }
  return b;
}

export function medir(arq) {
  const pags = fs.readFileSync(`txt/${arq}.txt`, "utf8").split("=== PÁGINA ===").map(limpar);
  const comItens = pags.map(t => ({ t, it: runs(t) })).filter(p => p.it.length >= 3)
    .sort((a, b) => a.it[0].n - b.it[0].n);

  let desloc = 0; const cmds = [], itens = [];
  for (const p of comItens) {
    const pl = semAcento(p.t);
    for (const m of pl.matchAll(/julgue\s+(?:o|os|as|a)\s+[^.]{0,130}\./gi)) {
      let ctx = pl.slice(Math.max(0, m.index - 300), m.index);
      const c = ctx.search(/\.[^.]*$/); if (c >= 0) ctx = ctx.slice(c + 1);
      const texto = (ctx + m[0]).replace(/\s+/g, " ");
      cmds.push({ pos: desloc + m.index, fim: desloc + m.index + m[0].length, texto, tema: classificar(texto), itens: [] });
    }
    for (const it of p.it) itens.push({ n: it.n, pos: desloc + it.pos });
    desloc += p.t.length + 1;
  }
  cmds.sort((a, b) => a.pos - b.pos);
  itens.sort((a, b) => a.pos - b.pos);

  const semTemaAntes = cmds.filter(c => !c.tema).length;
  aplicarHeranca(cmds);

  for (const it of itens) {
    let dono = null;
    for (const c of cmds) { if (c.fim <= it.pos) dono = c; else break; }
    if (dono) dono.itens.push(it.n);
  }

  const porDisc = new Map(), porFino = new Map();
  for (const c of cmds) {
    if (!c.tema || !c.itens.length) continue;
    porDisc.set(c.tema.disc, (porDisc.get(c.tema.disc) || 0) + c.itens.length);
    const k = c.tema.disc + " › " + c.tema.fino;
    porFino.set(k, (porFino.get(k) || 0) + c.itens.length);
  }
  return {
    itens: itens.length,
    faixa: itens.length ? `${itens[0].n}-${itens[itens.length - 1].n}` : "-",
    cmds: cmds.length, semTemaAntes,
    semTemaDepois: cmds.filter(c => !c.tema).length,
    itensComTema: [...porDisc.values()].reduce((a, b) => a + b, 0),
    porDisc, porFino,
    blocos: cmds.filter(c => c.itens.length).map(c => ({ n: c.itens.length, de: c.itens[0], ate: c.itens[c.itens.length - 1], disc: c.tema ? c.tema.disc : null, herdado: c.herdado, txt: c.texto.slice(-95) })),
  };
}
