/* =====================================================================
   Gera os ícones do PWA (icons/icon-*.png) sem depender de nenhuma lib
   externa de imagem: desenha os pixels na mão (gradiente + anel/alvo,
   ecoando o tema de "Radar de Aprovação" já usado no app) e escreve um
   PNG RGBA válido com um encoder mínimo (zlib do Node + CRC32 manual).
   Rode com: node scripts/gerar-icones-pwa.js
   ===================================================================== */
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, "ascii");
  const crcBuf = Buffer.alloc(4); crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}
function encodePNG(width, height, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;   /* bit depth */
  ihdrData[9] = 6;   /* color type: RGBA */
  ihdrData[10] = 0; ihdrData[11] = 0; ihdrData[12] = 0;
  const ihdr = chunk("IHDR", ihdrData);

  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; /* filtro "none" por linha */
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride);
  }
  const idat = chunk("IDAT", zlib.deflateSync(raw, { level: 9 }));
  const iend = chunk("IEND", Buffer.alloc(0));
  return Buffer.concat([sig, ihdr, idat, iend]);
}

/* ---------------- Desenho do ícone ----------------
   Gradiente diagonal (mesmo accent-grad do CSS: #2563eb → #7c3aed),
   cantos arredondados, e um alvo/anel branco no centro — o mesmo
   motivo do "Radar de Aprovação" (🎯) usado em todo o app. */
function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function desenharIcone(size) {
  const rgba = Buffer.alloc(size * size * 4);
  const c1 = hexToRgb("#2563eb"), c2 = hexToRgb("#7c3aed");
  const raio = size * 0.22;            /* raio do canto arredondado */
  const cx = size / 2, cy = size / 2;
  const anelExterno = size * 0.34, anelInterno = size * 0.25, pontoRaio = size * 0.09;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;

      /* máscara de cantos arredondados (distância ao retângulo com raio) */
      const dx = Math.max(0, Math.max(raio - x, x - (size - raio)));
      const dy = Math.max(0, Math.max(raio - y, y - (size - raio)));
      const foraDoCanto = Math.sqrt(dx * dx + dy * dy) > raio + 0.5;
      if (foraDoCanto) { rgba[i + 3] = 0; continue; } /* transparente fora do rounded-rect */

      /* gradiente diagonal (top-left → bottom-right) */
      const t = (x / size + y / size) / 2;
      const r = Math.round(c1[0] + (c2[0] - c1[0]) * t);
      const g = Math.round(c1[1] + (c2[1] - c1[1]) * t);
      const b = Math.round(c1[2] + (c2[2] - c1[2]) * t);

      /* anel + ponto central (branco), estilo "radar" */
      const dist = Math.hypot(x - cx, y - cy);
      const noAnel = dist <= anelExterno && dist >= anelInterno;
      const noPonto = dist <= pontoRaio;
      if (noAnel || noPonto) {
        rgba[i] = 255; rgba[i + 1] = 255; rgba[i + 2] = 255; rgba[i + 3] = 255;
      } else {
        rgba[i] = r; rgba[i + 1] = g; rgba[i + 2] = b; rgba[i + 3] = 255;
      }
    }
  }
  return rgba;
}

const outDir = path.join(__dirname, "..", "icons");
fs.mkdirSync(outDir, { recursive: true });
for (const size of [180, 192, 512]) {
  const rgba = desenharIcone(size);
  const png = encodePNG(size, size, rgba);
  const file = path.join(outDir, `icon-${size}.png`);
  fs.writeFileSync(file, png);
  console.log(`gerado: icons/icon-${size}.png (${png.length} bytes)`);
}
