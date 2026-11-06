import { useEffect, useState } from 'react';

// Slide final: "Obrigado pela atenção!" com uma cena animada do Weber em pixel (versão completa).
// 1) tenta ir embora e lembra de algo; 2) traz 4 cartões (um cai nele); 3) chuva de papéis da
// burocracia; 4) percebe tudo torto e alinha; 5) limpa um detalhe e apaga um conceito sem querer;
// 6) conta, estranha, acha o cartão no chão e recoloca; 7) reverência e plaquinha.
// Depois, o quadro final fica parado por 2 minutos para dar tempo de ler, e recomeça do zero.

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
const ESPERA_FINAL = 120_000; // quadro final parado por 2 minutos

// Desenhados por cima do sprite, na mesma grade de 31 x 56.
type Px = [number, number, string];
const BRACO: Px[] = [
  [26, 18, 'k'], [27, 18, 'k'], [28, 18, 'k'], [26, 19, 'k'], [27, 19, 'w'], [28, 19, 'k'], [26, 20, 'k'], [27, 20, 'k'], [28, 20, 'k'],
  [25, 22, 'k'], [25, 23, 'k'], [26, 24, 'k'], [26, 25, 'k'], [27, 26, 'k'],
];
const COCA: Px[] = [ // mão na cabeça, coçando
  [20, 3, 'k'], [21, 3, 'k'], [22, 3, 'k'], [20, 4, 'k'], [21, 4, 'w'], [22, 4, 'k'], [20, 5, 'k'], [21, 5, 'k'], [22, 5, 'k'],
  [23, 8, 'k'], [24, 11, 'k'], [24, 14, 'k'], [25, 17, 'k'], [25, 20, 'k'], [26, 23, 'k'],
];

type Estado = 'oculto' | 'carregado' | 'fixo' | 'caido' | 'apagado' | 'chao';
type Cena = {
  wx: number; dur: number; anda: boolean; flip: boolean; fala: string;
  cartoes: Estado[]; rots: number[]; papeis: boolean; ponta: boolean; coca: boolean;
  tropeca: boolean; reverencia: boolean; placa: boolean;
};
const INICIAL: Cena = {
  wx: -16, dur: 0, anda: false, flip: false, fala: '', cartoes: ['oculto', 'oculto', 'oculto', 'oculto'],
  rots: [-3, 2.5, -2, 3], papeis: false, ponta: false, coca: false, tropeca: false, reverencia: false, placa: false,
};

const PAPEIS = Array.from({ length: 10 }, (_, i) => ({ x: 6 + i * 9, atraso: (i % 5) * 0.12, giro: (i % 2 ? 1 : -1) * (20 + i * 9) }));
const SLOTS = [{ x: 13, y: 2 }, { x: 37.5, y: 2 }, { x: 62.5, y: 2 }, { x: 87, y: 2 }];
const X = SLOTS.map(s => s.x);

const MOLA = 'cubic-bezier(.3,1.3,.5,1)';

export default function Encerramento() {
  const [c, setC] = useState<Cena>(INICIAL);
  const [quadro, setQuadro] = useState(false);

  // pernas alternando enquanto ele anda
  useEffect(() => {
    if (!c.anda) { setQuadro(false); return; }
    const id = window.setInterval(() => setQuadro(q => !q), 130);
    return () => window.clearInterval(id);
  }, [c.anda]);

  useEffect(() => {
    let vivo = true;
    const dorme = (ms: number) => new Promise<void>(r => window.setTimeout(r, ms));
    const set = (p: Partial<Cena>) => { if (vivo) setC(a => ({ ...a, ...p })); };
    const cartao = (i: number, e: Estado) => { if (vivo) setC(a => ({ ...a, cartoes: a.cartoes.map((x, k) => (k === i ? e : x)) })); };
    const anda = async (para: number, ms: number, flip: boolean) => {
      set({ wx: para, dur: ms, anda: true, flip });
      await dorme(ms);
      set({ anda: false });
    };
    const fala = async (t: string, ms: number, extra: Partial<Cena> = {}) => {
      set({ fala: t, ...extra });
      await dorme(ms);
      set({ fala: '', ponta: false, coca: false });
    };

    (async () => {
      while (vivo) {
        set({ ...INICIAL, rots: [-3, 2.5, -2, 3].sort(() => Math.random() - 0.5) });
        await dorme(900);

        // CENA 1: entra como quem vai embora e lembra de algo
        await anda(76, 3600, false);
        await fala('Opa! Só mais uma coisinha...', 2300);

        // CENAS 2 a 5: traz os cartões, um por vez
        for (let i = 0; i < 4 && vivo; i++) {
          await anda(-16, 900, true);
          cartao(i, 'carregado');
          await anda(X[i], 1500, false);
          cartao(i, 'fixo');
          if (i === 1) {
            // o cartão escorrega e cai nele
            await fala(FALAS[i], 1700, { ponta: true });
            cartao(1, 'caido');
            set({ tropeca: true });
            await fala('Ops!', 1200);
            if (vivo) setC(a => ({ ...a, tropeca: false, rots: a.rots.map((r, k) => (k === 1 ? -4 : r)) }));
            cartao(1, 'fixo');
            await fala('Pronto, ajeitei.', 1300, { ponta: true });
          } else if (i === 2) {
            // junto com o cartão, uma chuva de formulários
            set({ papeis: true });
            await fala(FALAS[i], 3300, { ponta: true });
            set({ papeis: false });
          } else {
            await fala(FALAS[i], 2100, { ponta: true });
          }
        }

        // CENA 5: tudo torto, alinha; limpa um detalhe e apaga um conceito
        await anda(50, 1300, false);
        await fala('Hmm... estão tortos.', 1500);
        set({ rots: [0, 0, 0, 0] });
        await fala('Agora sim! Tudo racionalizado!', 2300, { ponta: true });
        await anda(X[3], 1400, false);
        await fala('Só um cisquinho aqui...', 1300);
        cartao(3, 'apagado');
        await fala('Opa.', 1000);

        // CENA 6: conta, estranha e acha o cartão no chão
        await anda(50, 1400, true);
        for (let i = 0; i < 3 && vivo; i++) {
          await anda(X[i], 650, i < 1 ? true : false);
          set({ ponta: true });
          await dorme(500);
        }
        set({ ponta: false });
        await anda(50, 900, true);
        await fala('Ué... não eram quatro?!', 2600, { coca: true });
        set({ flip: false });
        await dorme(500);
        set({ flip: true });
        await dorme(500);
        set({ flip: false });
        cartao(3, 'chao');
        await fala('Achei! Tinha caído aqui no chão.', 2200);
        cartao(3, 'carregado');
        await anda(X[3], 1500, false);
        cartao(3, 'fixo');
        await fala('Agora sim: os quatro!', 2000, { ponta: true });
        await anda(50, 1300, true);
        set({ flip: false });
        await dorme(900);

        // CENA 7: reverência e plaquinha, que ficam na tela por 2 minutos
        set({ reverencia: true, placa: true });
        await dorme(ESPERA_FINAL);
      }
    })();
    return () => { vivo = false; };
  }, []);

  const frame = c.anda ? (quadro ? '-a' : '-b') : '';
  const base = import.meta.env.BASE_URL;

  return (
    <article className="encerra weber-enter" aria-label="Obrigado pela atenção">
      <h2 className="encerra-titulo">Obrigado pela atenção<span>!</span></h2>
      <div className="encerra-palco" aria-hidden="true">
        {CARTOES.map((k, i) => {
          const est = c.cartoes[i];
          const slot = SLOTS[i];
          const carregado: React.CSSProperties = { left: `${c.wx + 7}%`, top: '60%', transform: 'translate(-50%,0) scale(.42) rotate(-8deg)', transition: `left ${c.dur}ms linear, top .4s, transform .4s`, opacity: 1 };
          const fixo: React.CSSProperties = { left: `${slot.x}%`, top: `${slot.y}%`, transform: `translate(-50%,0) scale(1) rotate(${c.rots[i]}deg)`, transition: `left .6s ${MOLA}, top .6s ${MOLA}, transform .6s ${MOLA}, opacity .4s`, opacity: 1 };
          const estilos: Record<Estado, React.CSSProperties> = {
            oculto: { left: '-9%', top: '60%', transform: 'translate(-50%,0) scale(.42) rotate(-8deg)', transition: 'opacity .4s', opacity: 0 },
            carregado,
            fixo,
            caido: { left: `${c.wx}%`, top: '52%', transform: 'translate(-50%,0) scale(.9) rotate(28deg)', transition: 'left .3s, top .45s cubic-bezier(.5,0,1,.6), transform .45s ease-in', zIndex: 8, opacity: 1 },
            apagado: { left: `${slot.x}%`, top: `${slot.y}%`, transform: 'translate(-50%,0) scale(.2) rotate(40deg)', transition: 'transform .5s ease-in, opacity .5s', opacity: 0 },
            chao: { left: `${c.wx + 9}%`, top: '66%', transform: 'translate(-50%,0) scale(.42) rotate(14deg)', transition: 'none', opacity: 1 },
          };
          return (
            <div key={k.titulo} className="encerra-cartao" style={estilos[est]}>
              <strong>{k.titulo}</strong>
              <span>{k.texto}</span>
            </div>
          );
        })}

        <div className="encerra-weber" style={{ left: `${c.wx}%`, transition: c.dur ? `left ${c.dur}ms linear` : 'none' }}>
          <div className={`encerra-corpo${c.anda ? ' is-andando' : ''}${c.reverencia ? ' is-reverencia' : ''}${c.tropeca ? ' is-tropeca' : ''}`} style={{ transform: c.flip ? 'scaleX(-1)' : undefined }}>
            <img src={`${base}pixel-weber${frame}.png`} alt="" draggable={false} />
            {c.ponta || c.coca ? (
              <svg viewBox="0 0 31 56" shapeRendering="crispEdges">
                {(c.coca ? COCA : BRACO).map(([x, y, k], i) => <rect key={i} x={x} y={y} width={1.02} height={1.02} className={k === 'w' ? 'px-w' : 'px-k'} />)}
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
