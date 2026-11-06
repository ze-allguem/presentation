import { useRef } from 'react';

// Fundo: um par de linhas cinza em forma de onda (uma larga e uma fina), sempre na parte de baixo da tela.
// Cada slide usa uma das 6 variações
// de direção (horizontal nos dois sentidos e diagonais pelos cantos de baixo), em sequência.
// Cada onda soma duas senoides cujos períodos dividem 1200, então o desenho se repete a cada
// 1200 unidades e a animação (deslocar meia largura) não tem emenda.

type Linha = { a1: number; p1: number; a2: number; p2: number; dur: number; atraso: number; largura: number; opacidade: number };

const LINHAS: Linha[] = [
  // o par: uma larga e uma fina, correndo juntas, sempre na parte de baixo
  { a1: 34, p1: 600, a2: 12, p2: 300, dur: 32, atraso: -10, largura: 3.2, opacidade: 0.38 },
  { a1: 28, p1: 400, a2: 10, p2: 1200, dur: 24, atraso: -4, largura: 1.2, opacidade: 0.45 },
];

// angulo: direção do fluxo (0 = para a direita, -90 = para cima, 90 = para baixo, 180 = para a esquerda).
// pos: centro de cada linha em % da tela [x, y] — linha larga, linha fina. Sempre perto da borda de baixo.
type Variante = { angulo: number; pos: [number, number][] };
const VARIANTES: Variante[] = [
  { angulo: -3, pos: [[50, 95], [50, 98]] },     // horizontal → (sobe um pouco)
  { angulo: -32, pos: [[90, 90], [94, 95]] },    // diagonal ↗ pelo canto inferior direito
  { angulo: 183, pos: [[50, 96], [50, 99]] },    // horizontal ← (sobe um pouco)
  { angulo: 212, pos: [[10, 90], [6, 95]] },     // diagonal ↖ pelo canto inferior esquerdo
  { angulo: 3, pos: [[50, 94], [50, 97]] },      // horizontal → (desce um pouco)
  { angulo: 177, pos: [[50, 95], [50, 98]] },    // horizontal ← (desce um pouco)
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
