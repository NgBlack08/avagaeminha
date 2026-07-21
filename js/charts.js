/* =====================================================================
   CEBRASPE LAB — Gráficos SVG nativos (Módulo 14)
   Sem dependências externas: barras, linhas, medidor e heatmap.
   ===================================================================== */

const CHART_COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#14b8a6", "#f472b6", "#94a3b8"];

function svgEl(w, h) {
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" preserveAspectRatio="xMidYMid meet" role="img">`;
}

/* Barras horizontais: data = [{label, value, extra?}], max opcional */
function chartHBar(data, opts = {}) {
  const w = opts.width || 640, rowH = opts.rowH || 34, labelW = opts.labelW || 220;
  const h = data.length * rowH + 10;
  const max = opts.max || Math.max(...data.map(d => d.value), 1);
  let s = svgEl(w, h);
  data.forEach((d, i) => {
    const y = i * rowH + 6;
    const bw = Math.max(2, (d.value / max) * (w - labelW - 90));
    const color = d.color || CHART_COLORS[i % CHART_COLORS.length];
    s += `<text x="${labelW - 10}" y="${y + 15}" text-anchor="end" class="c-label">${escapeHtml(truncate(d.label, 32))}</text>`;
    s += `<rect x="${labelW}" y="${y}" width="${bw}" height="${rowH - 14}" rx="5" fill="${color}" opacity="0.9"></rect>`;
    s += `<text x="${labelW + bw + 8}" y="${y + 15}" class="c-value">${escapeHtml(d.display ?? String(d.value))}</text>`;
  });
  return s + "</svg>";
}

/* Linhas múltiplas: labels (x), series = [{nome, valores[]}] */
function chartLines(labels, series, opts = {}) {
  const w = opts.width || 680, h = opts.height || 260, padL = 40, padB = 28, padT = 14, padR = 10;
  const all = series.flatMap(s => s.valores);
  const max = Math.max(...all, 1), min = opts.zeroBase === false ? Math.min(...all) : 0;
  const iw = w - padL - padR, ih = h - padT - padB;
  const x = i => padL + (labels.length === 1 ? iw / 2 : (i / (labels.length - 1)) * iw);
  const y = v => padT + ih - ((v - min) / (max - min || 1)) * ih;
  let s = svgEl(w, h);
  for (let g = 0; g <= 4; g++) {
    const gy = padT + (g / 4) * ih;
    s += `<line x1="${padL}" y1="${gy}" x2="${w - padR}" y2="${gy}" class="c-grid"></line>`;
    s += `<text x="${padL - 6}" y="${gy + 4}" text-anchor="end" class="c-tick">${Math.round(max - (g / 4) * (max - min))}</text>`;
  }
  labels.forEach((l, i) => {
    if (labels.length > 12 && i % 2) return;
    s += `<text x="${x(i)}" y="${h - 8}" text-anchor="middle" class="c-tick">${escapeHtml(String(l))}</text>`;
  });
  series.forEach((serie, si) => {
    const color = CHART_COLORS[si % CHART_COLORS.length];
    const pts = serie.valores.map((v, i) => `${x(i)},${y(v)}`).join(" ");
    s += `<polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round"></polyline>`;
    serie.valores.forEach((v, i) => { s += `<circle cx="${x(i)}" cy="${y(v)}" r="3" fill="${color}"></circle>`; });
  });
  return s + "</svg>";
}

function chartLegend(series) {
  return '<div class="c-legend">' + series.map((s, i) =>
    `<span><i style="background:${CHART_COLORS[i % CHART_COLORS.length]}"></i>${escapeHtml(s.nome || s.disciplina)}</span>`).join("") + "</div>";
}

/* Medidor semicircular 0-100 */
function chartGauge(value, opts = {}) {
  const w = 220, h = 130, cx = 110, cy = 112, r = 88;
  const pct = Math.max(0, Math.min(100, value));
  const ang = Math.PI * (1 - pct / 100);
  const px = cx + r * Math.cos(ang), py = cy - r * Math.sin(ang);
  const color = pct >= 75 ? "#10b981" : pct >= 50 ? "#f59e0b" : "#ef4444";
  let s = svgEl(w, h);
  s += `<path d="M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy}" fill="none" stroke="var(--border)" stroke-width="14" stroke-linecap="round"></path>`;
  if (pct > 0.5) s += `<path d="M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${px} ${py}" fill="none" stroke="${color}" stroke-width="14" stroke-linecap="round"></path>`;
  s += `<text x="${cx}" y="${cy - 14}" text-anchor="middle" class="c-gauge-num">${Math.round(pct)}</text>`;
  s += `<text x="${cx}" y="${cy + 6}" text-anchor="middle" class="c-gauge-sub">${escapeHtml(opts.sub || "")}</text>`;
  return s + "</svg>";
}

/* Heatmap: rows × cols, values 0-1 (null = sem dado) */
function chartHeatmap(rows, cols, matrix, opts = {}) {
  const cellW = opts.cellW || 46, cellH = 30, labelW = opts.labelW || 190, labelH = 66;
  const w = labelW + cols.length * cellW + 10, h = labelH + rows.length * cellH + 6;
  let s = svgEl(w, h);
  cols.forEach((c, j) => {
    const cx = labelW + j * cellW + cellW / 2;
    s += `<text x="${cx}" y="${labelH - 10}" text-anchor="end" transform="rotate(-38 ${cx} ${labelH - 10})" class="c-tick">${escapeHtml(truncate(c, 14))}</text>`;
  });
  rows.forEach((rname, i) => {
    s += `<text x="${labelW - 8}" y="${labelH + i * cellH + 19}" text-anchor="end" class="c-label">${escapeHtml(truncate(rname, 26))}</text>`;
    cols.forEach((c, j) => {
      const v = matrix[i][j];
      const fill = v === null || v === undefined ? "var(--surface2)" : heatColor(v);
      s += `<rect x="${labelW + j * cellW + 2}" y="${labelH + i * cellH + 2}" width="${cellW - 4}" height="${cellH - 4}" rx="4" fill="${fill}">` +
           `<title>${escapeHtml(rname)} × ${escapeHtml(c)}: ${v == null ? "—" : Math.round(v * 100) + "%"}</title></rect>`;
      if (v != null) s += `<text x="${labelW + j * cellW + cellW / 2}" y="${labelH + i * cellH + 20}" text-anchor="middle" class="c-cell">${Math.round(v * 100)}</text>`;
    });
  });
  return s + "</svg>";
}
function heatColor(v) {
  /* 0 = vermelho, 0.5 = âmbar, 1 = verde */
  const h = Math.round(v * 120);
  return `hsl(${h} 72% 44%)`;
}
function truncate(s, n) { s = String(s); return s.length > n ? s.slice(0, n - 1) + "…" : s; }
