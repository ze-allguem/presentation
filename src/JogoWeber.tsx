import { useEffect, useRef } from 'react';

// Mini jogo de corrida automático (inspirado no jogo de quando falta internet no navegador):
// o Weber, pequeno, corre sozinho e pula obstáculos da apresentação (formulários, carimbos, pastas).
// Ninguém joga: o "piloto automático" pula na hora certa. A velocidade vai aumentando.

const ALTURA_CAIXA = 190;
const CHAO = 26;          // altura do chão dentro da caixa
const WEBER_W = 36;
const WEBER_H = 65;
const WEBER_X = 70;
const PULO = 600;         // velocidade inicial do pulo (px/s)
const GRAVIDADE = 2100;   // px/s²

// Obstáculos: caixas com termos e frases do trabalho. [texto, altura, duas linhas?]
const CAIXAS: [string, number, boolean][] = [
  ['Carisma', 40, false], ['Patrimonialismo', 40, false], ['Feudo', 40, false], ['Prebenda', 40, false],
  ['Estamento', 40, false], ['Tipo ideal', 40, false], ['Competência', 40, false], ['Notáveis', 40, false],
  ['Colegiado', 40, false], ['Impessoalidade', 40, false],
  ['Sempre foi assim', 56, true], ['Obedecer à regra', 56, true], ['Ministro amador', 56, true], ['Dinheiro não compra prestígio', 62, true],
];

export default function JogoWeber() {
  const caixa = useRef<HTMLDivElement>(null);
  const weber = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const placar = useRef<HTMLSpanElement>(null);
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const el = caixa.current!;
    const sprite = weber.current!;
    const foto = img.current!;
    const largura = () => el.clientWidth;
    type Obs = { el: HTMLDivElement; x: number; w: number };
    const obstaculos: Obs[] = [];
    let dist = 0, y = 0, vy = 0, noAr = false, proximo = 260, ultimo = performance.now(), raf = 0, quadro = '';

    // Simulação em passos fixos de 1/60 s: o jogo anda na mesma velocidade em qualquer taxa de quadros.
    const passo = (dt: number) => {
      const vel = Math.min(620, 340 + dist / 45);
      dist += vel * dt;

      proximo -= vel * dt;
      if (proximo <= 0) {
        const [texto, h, duas] = CAIXAS[Math.floor(Math.random() * CAIXAS.length)];
        const o = document.createElement('div');
        o.className = `jogo-obs caixa${duas ? ' caixa--duas' : ''}`;
        o.style.height = `${h}px`;
        o.textContent = texto;
        el.appendChild(o);
        obstaculos.push({ el: o, x: largura() + 20, w: o.offsetWidth });
        proximo = 420 + Math.random() * 360;
      }
      for (let i = obstaculos.length - 1; i >= 0; i--) {
        const o = obstaculos[i];
        o.x -= vel * dt;
        if (o.x + o.w < -20) { o.el.remove(); obstaculos.splice(i, 1); }
      }

      // piloto automático: pula quando o centro do obstáculo está a ~0,28 s de chegar nele
      if (!noAr) {
        const alvo = obstaculos.find(o => o.x + o.w > WEBER_X);
        if (alvo) {
          const dx = alvo.x + alvo.w / 2 - (WEBER_X + WEBER_W / 2);
          if (dx > 0 && dx <= vel * 0.29) { noAr = true; vy = PULO; }
        }
      }
      if (noAr) {
        y += vy * dt;
        vy -= GRAVIDADE * dt;
        if (y <= 0) { y = 0; noAr = false; vy = 0; }
      }
    };

    let acumulado = 0;
    const loop = (t: number) => {
      acumulado += Math.min(0.5, (t - ultimo) / 1000);
      ultimo = t;
      while (acumulado >= 1 / 60) { passo(1 / 60); acumulado -= 1 / 60; }

      if (placar.current) placar.current.textContent = String(Math.floor(dist / 12)).padStart(5, '0');
      for (const o of obstaculos) o.el.style.transform = `translateX(${o.x.toFixed(1)}px)`;
      sprite.style.transform = `translateY(${(-y).toFixed(1)}px)`;
      const q = noAr ? '-d' : (Math.floor(t / 110) % 2 ? '-a' : '-b');
      if (q !== quadro) { quadro = q; foto.src = `${base}pixel-weber${q}.png`; }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); obstaculos.forEach(o => o.el.remove()); };
  }, [base]);

  return (
    <div className="jogo" ref={caixa} style={{ height: ALTURA_CAIXA }}>
      <span className="jogo-aviso">Sem legitimidade, sem obediência. Tentando reconectar...</span>
      <span className="jogo-placar">HI 00520 <span ref={placar}>00000</span></span>
      <div className="jogo-chao" style={{ bottom: CHAO - 3 }} />
      <div className="jogo-weber" ref={weber} style={{ left: WEBER_X, bottom: CHAO, width: WEBER_W, height: WEBER_H }}>
        <img ref={img} src={`${base}pixel-weber-b.png`} alt="" draggable={false} />
      </div>
    </div>
  );
}
