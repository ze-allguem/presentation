import { useEffect, useRef, useState } from 'react';

// Slide final: "Obrigado pela atenção!" com uma pequena cena animada do Weber em pixel.
// Ele tenta ir embora, lembra que falta revisar os conceitos, traz quatro cartões, leva uma
// chuva de papéis (burocracia), alinha tudo e encerra com uma plaquinha. Repete sozinho (~33 s).

const CARTOES = [
  { titulo: 'LEGITIMIDADE', texto: 'Crença de que é certo obedecer' },
  { titulo: 'DOMINAÇÃO LEGÍTIMA', texto: 'Tradicional · Carismática · Legal' },
  { titulo: 'BUROCRACIA', texto: 'Regras · Hierarquia · Impessoalidade' },
  { titulo: 'CLASSE E ESTAMENTO', texto: 'Mercado · Prestígio' },
];
const FALAS = [
  'Sem legitimidade, ninguém obedece!',
  'Essa eu domino!',
  'Preciso preencher um formulário pra sair daqui?',
  'Classe é mercado; estamento é prestígio!',
];

// Braço apontando para cima (desenhado por cima do sprite, na mesma grade de 31 x 56).
const BRACO: [number, number, string][] = [
  [26, 18, 'k'], [27, 18, 'k'], [28, 18, 'k'], [26, 19, 'k'], [27, 19, 'w'], [28, 19, 'k'], [26, 20, 'k'], [27, 20, 'k'], [28, 20, 'k'],
  [25, 22, 'k'], [25, 23, 'k'], [26, 24, 'k'], [26, 25, 'k'], [27, 26, 'k'],
];

type Estado = 'oculto' | 'carregado' | 'fixo';
type Cena = {
  wx: number; dur: number; anda: boolean; flip: boolean; fala: string;
  cartoes: Estado[]; rots: number[]; papeis: boolean; ponta: boolean; reverencia: boolean; placa: boolean;
};
const INICIAL: Cena = {
  wx: -16, dur: 0, anda: false, flip: false, fala: '', cartoes: ['oculto', 'oculto', 'oculto', 'oculto'],
  rots: [-3, 2.5, -2, 3], papeis: false, ponta: false, reverencia: false, placa: false,
};

const PAPEIS = Array.from({ length: 10 }, (_, i) => ({ x: 6 + i * 9, atraso: (i % 5) * 0.12, giro: (i % 2 ? 1 : -1) * (20 + i * 9) }));

export default function Encerramento() {
  const [c, setC] = useState<Cena>(INICIAL);
  const [quadro, setQuadro] = useState(false);
  const [estreito, setEstreito] = useState(() => window.matchMedia('(max-width: 800px)').matches);
  const palco = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const m = window.matchMedia('(max-width: 800px)');
    const on = () => setEstreito(m.matches);
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, []);

  // pernas alternando enquanto ele anda
  useEffect(() => {
    if (!c.anda) { setQuadro(false); return; }
    const id = window.setInterval(() => setQuadro(q => !q), 130);
    return () => window.clearInterval(id);
  }, [c.anda]);

  // posições dos cartões: uma fileira no computador, 2 x 2 no celular
  const slots = estreito
    ? [{ x: 27, y: 1 }, { x: 73, y: 1 }, { x: 27, y: 27 }, { x: 73, y: 27 }]
    : [{ x: 13, y: 2 }, { x: 37.5, y: 2 }, { x: 62.5, y: 2 }, { x: 87, y: 2 }];

  useEffect(() => {
    let vivo = true;
    const dorme = (ms: number) => new Promise<void>(r => window.setTimeout(r, ms));
    const set = (p: Partial<Cena>) => vivo && setC(a => ({ ...a, ...p }));
    const cartao = (i: number, e: Estado) => vivo && setC(a => ({ ...a, cartoes: a.cartoes.map((x, k) => (k === i ? e : x)) }));
    const anda = async (para: number, ms: number, flip: boolean) => {
      set({ wx: para, dur: ms, anda: true, flip });
      await dorme(ms);
      set({ anda: false });
    };
    const sair = estreito ? [27, 73, 27, 73] : [13, 37.5, 62.5, 87];

    (async () => {
      while (vivo) {
        set({ ...INICIAL, rots: [-3, 2.5, -2, 3].sort(() => Math.random() - 0.5) });
        await dorme(900);
        // 1) entra andando, como quem vai embora, e de repente lembra de algo
        await anda(76, 3600, false);
        set({ fala: 'Opa! Só mais uma coisinha...' });
        await dorme(2300);
        set({ fala: '' });
        // 2) traz os quatro cartões, um por vez
        for (let i = 0; i < 4 && vivo; i++) {
          await anda(-16, 900, true);
          cartao(i, 'carregado');
          await anda(sair[i], 1500, false);
          cartao(i, 'fixo');
          set({ ponta: true, fala: FALAS[i], papeis: i === 2 });
          await dorme(i === 2 ? 3300 : 2100);
          set({ ponta: false, fala: '', papeis: false });
        }
        // 3) percebe que está tudo torto e alinha
        await anda(50, 1300, false);
        set({ fala: 'Hmm... estão tortos.' });
        await dorme(1500);
        set({ rots: [0, 0, 0, 0], ponta: true, fala: 'Agora sim! Tudo racionalizado!' });
        await dorme(2300);
        set({ ponta: false, fala: '' });
        // 4) reverência e plaquinha
        set({ reverencia: true, placa: true });
        await dorme(3600);
        set({ reverencia: false, placa: false });
        await dorme(500);
        set({ cartoes: ['oculto', 'oculto', 'oculto', 'oculto'] });
        await dorme(1200);
      }
    })();
    return () => { vivo = false; };
  }, [estreito]);

  const frame = c.anda ? (quadro ? '-a' : '-b') : '';
  const base = import.meta.env.BASE_URL;

  return (
    <article className="encerra weber-enter" aria-label="Obrigado pela atenção">
      <h2 className="encerra-titulo">Obrigado pela atenção<span>!</span></h2>
      <div className="encerra-palco" ref={palco} aria-hidden="true">
        {CARTOES.map((k, i) => {
          const est = c.cartoes[i];
          const slot = slots[i];
          const carregado = est === 'carregado';
          const estilo: React.CSSProperties = est === 'oculto'
            ? { left: '-9%', top: '60%', transform: 'translate(-50%,0) scale(.42) rotate(-8deg)', transition: 'opacity .4s' }
            : carregado
            ? { left: `${c.wx + 7}%`, top: '60%', transform: 'translate(-50%,0) scale(.42) rotate(-8deg)', transition: `left ${c.dur}ms linear, top .4s, transform .4s` }
            : { left: `${slot.x}%`, top: `${slot.y}%`, transform: `translate(-50%,0) scale(${est === 'fixo' ? 1 : .6}) rotate(${est === 'fixo' ? c.rots[i] : 0}deg)`, transition: 'left .6s cubic-bezier(.3,1.3,.5,1), top .6s cubic-bezier(.3,1.3,.5,1), transform .6s cubic-bezier(.3,1.3,.5,1), opacity .4s' };
          return (
            <div key={k.titulo} className="encerra-cartao" style={{ ...estilo, opacity: est === 'oculto' ? 0 : 1 }}>
              <strong>{k.titulo}</strong>
              <span>{k.texto}</span>
            </div>
          );
        })}

        <div className="encerra-weber" style={{ left: `${c.wx}%`, transition: c.dur ? `left ${c.dur}ms linear` : 'none' }}>
          <div className={`encerra-corpo${c.anda ? ' is-andando' : ''}${c.reverencia ? ' is-reverencia' : ''}`} style={{ transform: c.flip ? 'scaleX(-1)' : undefined }}>
            <img src={`${base}pixel-weber${frame}.png`} alt="" draggable={false} />
            {c.ponta ? (
              <svg viewBox="0 0 31 56" shapeRendering="crispEdges">
                {BRACO.map(([x, y, k], i) => <rect key={i} x={x} y={y} width={1.02} height={1.02} className={k === 'w' ? 'px-w' : 'px-k'} />)}
              </svg>
            ) : null}
          </div>
          {c.fala ? <div className="encerra-balao" key={c.fala}>{c.fala}</div> : null}
          {c.papeis ? (
            <div className="encerra-papeis">
              {PAPEIS.map((p, i) => <i key={i} style={{ left: `${p.x}%`, animationDelay: `${p.atraso}s`, ['--giro' as string]: `${p.giro}deg` }} />)}
            </div>
          ) : null}
          {c.placa ? <div className="encerra-placa">Pronto. Agora acabou!</div> : null}
        </div>
      </div>
    </article>
  );
}
