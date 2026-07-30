#!/usr/bin/env node
/*
 * migrar-cognitivo.js — remove os campos de `cognitivo` que viraram
 * redundantes quando o bloco "Engenharia cognitiva" foi substituído pelas
 * Estratégias da banca.
 *
 * Motivo: 5 dos 7 campos de `cognitivo` parafraseavam o que `comentario`
 * já dizia (mede≈fundamento, ondeErra≈erroComum, regraMental≈macete,
 * pegadinhaDesc≈comoBancaPensa) ou eram cobertos, de forma mais rica,
 * pela estratégia casada por `pegadinha` (tecnica). Sobrevivem os dois
 * que são genuinamente próprios da questão: `motivo` e `palavraCritica`.
 *
 * Migração única, verificada: roda uma vez, confere que nada além dos 5
 * campos mudou e reverte sozinha se algo divergir. Depois disso o arquivo
 * pode ser apagado — fica no repositório apenas como registro do que foi
 * feito em 1141 questões espalhadas por 59 arquivos escritos à mão.
 *
 * Uso: node scripts/migrar-cognitivo.js
 */

const fs = require("fs");
const path = require("path");
const { DIR_JS, sincronizarManifesto, carregarDados } = require("./fontes.js");

const REMOVER = ["mede", "pegadinhaDesc", "ondeErra", "tecnica", "regraMental"];
const MANTER = ["motivo", "palavraCritica"];

/* Cada campo ocupa exatamente uma linha (verificado: 1141 ocorrências de
   cada, nenhuma com valor multilinha). `regraMental` é o último campo do
   objeto e por isso não tem vírgula final — daí o `,?` no fim. */
const LINHA = new RegExp(`^[ \\t]*(${REMOVER.join("|")}):[ \\t].*,?[ \\t]*\\r?\\n`, "gm");

function instantaneo() {
  const { QUESTOES } = carregarDados(sincronizarManifesto({ gravar: false }));
  return QUESTOES.map(q => JSON.stringify(q));
}

function main() {
  const manifesto = sincronizarManifesto({ gravar: false });
  const arquivos = manifesto.map(f => path.join(DIR_JS, f));

  console.log("Lendo estado atual...");
  const antes = instantaneo();
  const backup = new Map();
  for (const f of arquivos) backup.set(f, fs.readFileSync(f, "utf8"));

  let linhasRemovidas = 0;
  for (const f of arquivos) {
    const original = backup.get(f);
    const novo = original.replace(LINHA, () => { linhasRemovidas++; return ""; });
    if (novo !== original) fs.writeFileSync(f, novo);
  }
  console.log(`Linhas removidas: ${linhasRemovidas}`);

  /* ---------- verificação ---------- */
  let depois;
  try {
    depois = instantaneo();
  } catch (e) {
    reverter(backup);
    throw new Error("Fontes não avaliam após a remoção — revertido. " + e.message);
  }

  const problemas = [];
  if (depois.length !== antes.length) {
    problemas.push(`contagem mudou: ${antes.length} -> ${depois.length}`);
  } else {
    for (let i = 0; i < antes.length; i++) {
      const a = JSON.parse(antes[i]);
      const d = JSON.parse(depois[i]);
      if (a.id !== d.id) { problemas.push(`ordem/ID divergiu em ${i}: ${a.id} != ${d.id}`); break; }
      /* o cognitivo tem de conter exatamente os campos mantidos... */
      const chaves = Object.keys(d.cognitivo || {}).sort().join(",");
      if (chaves !== MANTER.slice().sort().join(",")) {
        problemas.push(`${d.id}: cognitivo ficou com [${chaves}]`); break;
      }
      for (const k of MANTER) {
        if (a.cognitivo[k] !== d.cognitivo[k]) { problemas.push(`${d.id}: ${k} foi alterado`); break; }
      }
      /* ...e todo o resto da questão tem de estar intacto. */
      const semCog = o => { const c = { ...o }; delete c.cognitivo; return JSON.stringify(c); };
      if (semCog(a) !== semCog(d)) { problemas.push(`${d.id}: campo fora de cognitivo foi alterado`); break; }
    }
  }

  if (problemas.length) {
    reverter(backup);
    console.error("VERIFICAÇÃO FALHOU — tudo revertido:");
    for (const p of problemas) console.error("  x " + p);
    process.exit(1);
  }

  console.log(`OK: ${depois.length} questões, cognitivo reduzido a [${MANTER.join(", ")}], nada mais alterado.`);
}

function reverter(backup) {
  for (const [f, conteudo] of backup) fs.writeFileSync(f, conteudo);
}

if (require.main === module) main();
