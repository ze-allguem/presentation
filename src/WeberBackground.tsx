import { useRef } from 'react';

// Fundo: linhas cinza em forma de onda, fluindo perto das bordas e deixando o centro livre.
// São 3 linhas: uma sozinha e um par (uma larga e uma fina). Cada slide usa uma das 6 variações
// de direção (horizontal, vertical e diagonais, nos dois sentidos), em sequência.
// Cada onda soma duas senoides cujos períodos dividem 1200, então o desenho se repete a cada
// 1200 unidades e a animação (deslocar meia largura) não tem emenda.

type Linha = { a1: number; p1: number; a2: number; p2: number; dur: number; atraso: number; largura: number; opacidade: number };

const LINHAS: Linha[] = [
  // a linha sozinha
  { a1: 30, p1: 600, a2: 10, p2: 200, dur: 28, atraso: 0, largura: 1.8, opacidade: 0.4 },
  // o par: uma larga e uma fina, correndo juntas
  { a1: 34, p1: 600, a2: 12, p2: 300, dur: 32, atraso: -10, largura: 3.2, opacidade: 0.38 },
  { a1: 28, p1: 400, a2: 10, p2: 1200, dur: 24, atraso: -4, largura: 1.2, opacidade: 0.45 },
];

// angulo: direção do fluxo (0 = para a direita, -90 = para cima, 90 = para baixo, 180 = para a esquerda).
// pos: centro de cada linha em % da tela [x, y] — linha sozinha, linha larga, linha fina.
type Variante = { angulo: number; pos: [number, number][] };
const VARIANTES: Variante[] = [
  { angulo: -3, pos: [[50, 4], [50, 95], [50, 98]] },          // horizontal → (sobe um pouco)
  { angulo: -90, pos: [[1.5, 50], [97, 50], [99, 50]] },       // vertical, de baixo para cima
  { angulo: -32, pos: [[10, 8], [90, 90], [94, 95]] },         // diagonal ↗ pelos cantos (sup. esq. e inf. dir.)
  { angulo: 90, pos: [[98.5, 50], [1, 50], [3, 50]] },         // vertical, de cima para baixo
  { angulo: 212, pos: [[90, 8], [10, 90], [6, 95]] },          // diagonal ↖ pelos cantos (sup. dir. e inf. esq.)
  { angulo: 183, pos: [[50, 96], [50, 5], [50, 2]] },          // horizontal ← (desce um pouco)
];

function caminho({ a1, p1, a2, p2 }: Linha) {
  const pts: string[] = [];
  for (let x = 0; x <= 2400; x += 16) {
    const y = 60 + a1 * Math.sin((2 * Math.PI * x) / p1) + a2 * Math.sin((2 * Math.PI * x) / p2);
    pts.push(`${x === 0 ? 'M' : 'L'}${x} ${y.toFixed(1)}`);
  }
  return pts.join(' ');
}
const CAMINHOS = LINHAS.map(caminho);

export default function WeberBackground({ variante = 0 }: { variante?: number }) {
  const v = VARIANTES[((variante % VARIANTES.length) + VARIANTES.length) % VARIANTES.length];
  // Ângulo acumulado: a cada troca de slide a linha gira pelo caminho mais curto até a nova direção,
  // em vez de dar uma volta inteira. Assim parece a mesma linha mudando de rumo.
  const anterior = useRef<number | null>(null);
  let angulo = v.angulo;
  if (anterior.current !== null) {
    const delta = ((((v.angulo - anterior.current) % 360) + 540) % 360) - 180;
    angulo = anterior.current + delta;
  }
  anterior.current = angulo;
  return (
    <div className="weber-background" aria-hidden="true">
      <div className="weber-vento">
        {LINHAS.map((l, i) => (
          <div key={i} className="vento-eixo"
            style={{ left: `${v.pos[i][0]}%`, top: `${v.pos[i][1]}%`, transform: `translate(-50%, -50%) rotate(${angulo}deg)` }}>
            <div className="vento-faixa" style={{ animationDelay: `${l.atraso / 2}s` }}>
              <svg className="vento-linha" viewBox="0 0 2400 120" preserveAspectRatio="none" style={{ animationDuration: `${l.dur}s`, animationDelay: `${l.atraso}s` }}>
                <path d={CAMINHOS[i]} style={{ strokeWidth: l.largura, opacity: `calc(${l.opacidade} * var(--vento-forca, 1))` }} />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
