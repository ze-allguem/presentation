import { useEffect, useRef, useState } from 'react';
import { comentarTrecho, FALAS_SLIDE, HUMOR, RECLAMACOES } from './falasWeber';

// Max Weber em pixel art, feito a partir da ilustração "cabeção" (cabelo penteado para trás,
// sobrancelha franzida, orelhona, barba e bigode cheios, mão no queixo). Sprite de 31 x 56 px em
// public/pixel-weber*.png, olhando para a direita (para andar para a esquerda ele é espelhado).
// Os quadros de andar mexem só nas pernas. Objetos (xícara, relógio, livro, mão acenando) são
// desenhados em pixel por cima, na mesma grade do sprite.

const LARGURA = 31;
const ALTURA = 56;
const ESCALA = 2;           // cada pixel do sprite vira 2 px na tela
const VELOCIDADE = 520;     // px por segundo
const PULO_ALTURA = 24;     // px
const PULO_DURACAO = 0.42;  // s

type Cor = Record<string, string>;
const COR: Cor = { K: 'px-k', W: 'px-w', M: 'px-m', V: 'px-v', G: 'px-g' };
type Pixel = [number, number, string];
function desenho(ox: number, oy: number, linhas: string[]): Pixel[] {
  const r: Pixel[] = [];
  linhas.forEach((l, y) => Array.from(l).forEach((ch, x) => { if (COR[ch]) r.push([ox + x, oy + y, COR[ch]]); }));
  return r;
}

const XICARA = desenho(24, 33, ['KKKKK..', 'KMMMMK.', 'KWWWWKK', 'KWWWWKK', '.KWWWK.', '..KKK..']);
const XICARA_BOCA = desenho(23, 27, ['KKKKK..', 'KMMMMK.', 'KWWWWKK', 'KWWWWKK', '.KWWWK.', '..KKK..']);
const VAPOR_A: Pixel[] = [[26, 31, 'px-v'], [27, 30, 'px-v'], [26, 29, 'px-v'], [27, 28, 'px-v']];
const VAPOR_B: Pixel[] = [[27, 31, 'px-v'], [26, 30, 'px-v'], [27, 29, 'px-v'], [26, 28, 'px-v']];
const RELOGIO = [...desenho(25, 36, ['.KKK.', 'KWWWK', 'KWKWK', 'KWWWK', '.KKK.']), [24, 37, 'px-k'] as Pixel, [23, 38, 'px-k'] as Pixel];
const LIVRO = desenho(23, 35, ['KKKKKKKK', 'KWWKWWWK', 'KWWKWWWK', 'KWWKWWWK', 'KKKKKKKK']);
const PAGINA: Pixel[] = [[27, 33, 'px-k'], [28, 33, 'px-w'], [29, 33, 'px-w'], [30, 34, 'px-k'], [27, 34, 'px-k'], [28, 34, 'px-w'], [29, 34, 'px-w']];
const ACENO_A: Pixel[] = [...desenho(26, 18, ['KKK', 'KWK', 'KKK']), [25, 22, 'px-k'], [25, 23, 'px-k'], [26, 24, 'px-k'], [26, 25, 'px-k']];
const ACENO_B: Pixel[] = [...desenho(28, 21, ['KKK', 'KWK', 'KKK']), [27, 25, 'px-k'], [27, 26, 'px-k'], [26, 27, 'px-k']];
const ZZZ: Pixel[] = [[3, 6, 'px-g'], [4, 6, 'px-g'], [4, 7, 'px-g'], [3, 8, 'px-g'], [4, 8, 'px-g'], [7, 2, 'px-g'], [8, 2, 'px-g'], [8, 3, 'px-g'], [7, 4, 'px-g'], [8, 4, 'px-g']];

// Cada pose: qual quadro de pernas usar, objetos por cima e um efeito de corpo (classe CSS).
type Desenho = { img: '' | 'a' | 'b' | 'c' | 'd'; extra: Pixel[]; efeito?: string };
const POSES = {
  parado: { img: '', extra: [] },
  passoA: { img: 'a', extra: [] },
  passoB: { img: 'b', extra: [] },
  pulo: { img: 'd', extra: [] },
  espreguica: { img: '', extra: ZZZ, efeito: 'ef-estica' },
  maoNaBoca: { img: '', extra: [], efeito: 'ef-bocejo' },
  relogio: { img: '', extra: RELOGIO },
  relogioPe: { img: 'c', extra: RELOGIO },
  livroA: { img: '', extra: LIVRO },
  livroB: { img: '', extra: [...LIVRO, ...PAGINA] },
  acenoA: { img: '', extra: ACENO_A, efeito: 'ef-balanca' },
  acenoB: { img: '', extra: ACENO_B, efeito: 'ef-balanca' },
  pe: { img: 'c', extra: [] },
  cafe: { img: '', extra: [...XICARA, ...VAPOR_A] },
  cafeGole: { img: '', extra: [...XICARA_BOCA, ...VAPOR_B], efeito: 'ef-gole' },
} satisfies Record<string, Desenho>;
type Quadro = keyof typeof POSES;

// Frases do balão para cada rotina (na mesma ordem das rotinas abaixo).
const FALAS: string[][] = [
  ['Aaaah... que sono!', 'Esse capítulo é longo...', 'Escrever 3 volumes cansa.'],
  ['Que horas são?', 'O tempo também é racionalizado.', 'Pontualidade é burocracia!'],
  ['Está escrito... mas eu vos digo!', 'Hmm, cadê a página 167?', 'Tipos ideais, tipos ideais...'],
  ['Olá, turma!', 'Lembrem: dominação é administração!', 'Sem raiva e sem paixão!'],
  ['Hmpf.', 'Tic, tac, tic, tac...', 'Calculabilidade, por favor.'],
  ['Um cafezinho para aguentar a burocracia.', 'Café: o combustível do quadro administrativo.', 'Ahh... agora sim.'],
];
const DEMORA = 40; // segundos no mesmo slide até ele começar a reclamar

// Rotinas quando fica parado: sequência de [pose, duração em segundos].
type Pose = Quadro;
type Rotina = { passos: [Pose, number][]; falas: string[] };
const ROTINAS: Rotina[] = ([
  [['espreguica', 1.1], ['parado', 0.25], ['espreguica', 0.9], ['maoNaBoca', 1.4], ['parado', 0.4]],
  [['relogio', 0.9], ['relogioPe', 0.22], ['relogio', 0.22], ['relogioPe', 0.22], ['relogio', 0.22], ['relogioPe', 0.22], ['relogio', 0.8]],
  [['livroA', 0.8], ['livroB', 0.25], ['livroA', 0.9], ['livroB', 0.25], ['livroA', 0.9], ['livroB', 0.25], ['livroA', 0.7]],
  [['acenoA', 0.22], ['acenoB', 0.22], ['acenoA', 0.22], ['acenoB', 0.22], ['acenoA', 0.22], ['acenoB', 0.22], ['acenoA', 0.3]],
  [['pe', 0.18], ['parado', 0.18], ['pe', 0.18], ['parado', 0.18], ['pe', 0.18], ['parado', 0.18], ['pe', 0.18], ['parado', 0.3]],
  [['cafe', 1.2], ['cafeGole', 0.9], ['cafe', 1.0], ['cafeGole', 0.9], ['cafe', 1.2]],
] as [Pose, number][][]).map((passos, i) => ({ passos, falas: FALAS[i] }));

export default function PixelWeber({ slide = '' }: { slide?: string }) {
  const caixa = useRef<HTMLDivElement>(null);
  const [quadro, setQuadro] = useState<Quadro>('parado');
  const [olhaEsquerda, setOlhaEsquerda] = useState(false);
  const [fala, setFala] = useState('');
  const balao = useRef<HTMLDivElement>(null);
  const inicioSlide = useRef(performance.now());
  const slideAtual = useRef(slide);
  useEffect(() => { inicioSlide.current = performance.now(); slideAtual.current = slide; }, [slide]);

  useEffect(() => {
    const el = caixa.current;
    if (!el) return;
    const pai = () => el.offsetParent as HTMLElement | null;
    let x = (pai()?.clientWidth ?? window.innerWidth) / 2;
    let alvo = x;
    let ultimo = performance.now();
    let tempoPasso = 0;
    let passo: Quadro = 'passoA';
    let atual: Quadro = 'parado';
    let pulo = -1;                              // tempo dentro do pulo (-1 = no chão)
    let proximoPulo = 0.6 + Math.random() * 1.2; // segundos andando até o próximo pulinho
    let raf = 0;
    let parado = 0;                             // segundos parado
    let esperaRotina = 4;                       // segundos parado até a primeira rotina; depois, 6 a 12 s
    let rotina: [Pose, number][] | null = null;
    let falaAtual = '';
    let falaRotina = '';
    let falaMouse = '';
    let falaMouseAte = 0;
    let falaRotinaAte = 0;
    const INTERVALO_FALA = 20000; // outro balão só depois de 20 s, ou ao clicar/passar o mouse num texto
    const DURACAO_FALA = 4000;    // cada balão fica 4 s
    let ultimaFalaEm = performance.now() - 14000; // a primeira fala vem logo (cerca de 6 s depois de abrir)
    let slideVisto = slideAtual.current;
    const atualizarFala = () => {
      const agora = performance.now();
      if (slideAtual.current !== slideVisto) { slideVisto = slideAtual.current; falaRotinaAte = 0; falaMouseAte = 0; trechoComentado = null; }
      const t = agora < falaMouseAte ? falaMouse : agora < falaRotinaAte ? falaRotina : '';
      if (t !== falaAtual) { falaAtual = t; setFala(t); }
    };
    // O balão fica 4 s na tela, mesmo depois de a rotina acabar.
    const falar = (t: string) => { falaRotina = t; falaRotinaAte = t ? performance.now() + DURACAO_FALA : 0; if (t) ultimaFalaEm = performance.now(); };
    const sorteio = (l: string[]) => l[Math.floor(Math.random() * l.length)];

    // Comentário quando o mouse para em cima de um trecho do texto.
    let trechoAtual: Element | null = null;
    let trechoComentado: Element | null = null;
    let timerTrecho = 0;
    const SELETOR = '.weber-body p, .weber-body li, .weber-body .aula-box, .weber-body .aula-destaque, .weber-body td, .weber-body h3';
    const onOver = (e: MouseEvent) => {
      const bruto = (e.target as Element | null)?.closest?.(SELETOR) ?? null;
      const alvoEl = bruto && !bruto.closest('.aula-figura') ? bruto : null; // ignora os espaços de imagem
      if (alvoEl === trechoAtual) return;
      trechoAtual = alvoEl;
      window.clearTimeout(timerTrecho);
      if (!alvoEl || alvoEl === trechoComentado) return;
      timerTrecho = window.setTimeout(() => {
        if (trechoAtual !== alvoEl) return;
        trechoComentado = alvoEl;
        comentar(alvoEl);
      }, 550);
    };
    const comentar = (el: Element) => {
      falaMouse = comentarTrecho(el);
      falaMouseAte = performance.now() + DURACAO_FALA;
      ultimaFalaEm = performance.now();
    };
    // Clicar num texto também faz ele comentar na hora.
    const onClick = (e: MouseEvent) => {
      const bruto = (e.target as Element | null)?.closest?.(SELETOR) ?? null;
      if (bruto && !bruto.closest('.aula-figura')) { trechoComentado = bruto; comentar(bruto); }
    };
    let passoRotina = 0;
    let tempoRotina = 0;
    let ultimaRotina = -1;

    const mostrar = (q: Quadro) => { if (q !== atual) { atual = q; setQuadro(q); } };

    const onMove = (e: PointerEvent) => {
      const r = pai()?.getBoundingClientRect();
      alvo = e.clientX - (r?.left ?? 0);
    };

    const loop = (agora: number) => {
      const dt = Math.min(0.05, (agora - ultimo) / 1000);
      ultimo = agora;
      const largura = pai()?.clientWidth ?? window.innerWidth;
      const meio = el.offsetWidth / 2;
      const destino = Math.max(meio, Math.min(largura - meio, alvo));
      const dx = destino - x;
      const andando = Math.abs(dx) > 3;

      if (andando) {
        x += Math.sign(dx) * Math.min(Math.abs(dx), VELOCIDADE * dt);
        setOlhaEsquerda(dx < 0);
        proximoPulo -= dt;
        if (pulo < 0 && proximoPulo <= 0 && Math.abs(dx) > 60) {
          pulo = 0;
          proximoPulo = 0.8 + Math.random() * 1.6;
        }
      }

      let y = 0;
      if (pulo >= 0) {
        pulo += dt;
        const t = Math.min(1, pulo / PULO_DURACAO);
        y = 4 * PULO_ALTURA * t * (1 - t);   // arco de parábola
        mostrar('pulo');
        if (t >= 1) { pulo = -1; y = 0; }
      } else if (andando) {
        tempoPasso += dt;
        if (tempoPasso > 0.09) { tempoPasso = 0; passo = passo === 'passoA' ? 'passoB' : 'passoA'; }
        mostrar(passo);
      } else {
        // Parado: depois de um tempo, faz uma rotina (bocejo, relógio, livro, aceno, pé batendo).
        parado += dt;
        if (!rotina && parado >= esperaRotina) {
          let k = Math.floor(Math.random() * ROTINAS.length);
          if (k === ultimaRotina) k = (k + 1) % ROTINAS.length;
          const demorou = (performance.now() - inicioSlide.current) / 1000 > DEMORA;
          if (demorou && Math.random() < 0.7) k = Math.random() < 0.5 ? 1 : 4; // relógio ou pé batendo
          ultimaRotina = k; rotina = ROTINAS[k].passos; passoRotina = 0; tempoRotina = 0;
          if (performance.now() - ultimaFalaEm >= INTERVALO_FALA) {
            const doSlide = FALAS_SLIDE[slideAtual.current] ?? [];
            const opcoes = demorou ? RECLAMACOES
              : Math.random() < 0.6 && doSlide.length ? doSlide
              : Math.random() < 0.5 ? HUMOR : ROTINAS[k].falas;
            falar(sorteio(opcoes));
          }
        }
        if (rotina) {
          tempoRotina += dt;
          if (tempoRotina >= rotina[passoRotina][1]) { tempoRotina = 0; passoRotina += 1; }
          if (passoRotina >= rotina.length) {
            rotina = null; parado = 0; esperaRotina = 6 + Math.random() * 6;
            mostrar('parado');
          } else mostrar(rotina[passoRotina][0]);
        } else mostrar('parado');
      }
      if (andando || pulo >= 0) { parado = 0; rotina = null; esperaRotina = Math.max(esperaRotina, 4); falar(''); }
      atualizarFala();

      el.style.transform = `translate(${(x - meio).toFixed(1)}px, ${(-y).toFixed(1)}px)`;
      el.style.setProperty('--altura-pulo', (y / PULO_ALTURA).toFixed(2));
      // mantém o balão dentro da tela
      const b = balao.current;
      if (b) {
        const meiaBalao = b.offsetWidth / 2;
        const desloc = Math.max(8 + meiaBalao - x, Math.min(0, largura - 8 - meiaBalao - x));
        b.style.setProperty('--balao-desloc', `${desloc.toFixed(0)}px`);
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    document.addEventListener('click', onClick);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener('pointermove', onMove); document.removeEventListener('mouseover', onOver); document.removeEventListener('click', onClick); window.clearTimeout(timerTrecho); cancelAnimationFrame(raf); };
  }, []);

  const pose: Desenho = POSES[quadro];
  return (
    <div ref={caixa} className="pixel-weber" aria-hidden="true" style={{ width: LARGURA * ESCALA, height: ALTURA * ESCALA }}>
      <div className="pixel-giro" style={{ transform: olhaEsquerda ? 'scaleX(-1)' : undefined }}>
        <div className={`pixel-corpo${pose.efeito ? ` ${pose.efeito}` : ''}`}>
          <img src={`${import.meta.env.BASE_URL}pixel-weber${pose.img ? `-${pose.img}` : ''}.png`} alt="" draggable={false} />
          {pose.extra.length ? (
            <svg viewBox={`0 0 ${LARGURA} ${ALTURA}`} shapeRendering="crispEdges">
              {pose.extra.map(([x, y, c], i) => <rect key={i} x={x} y={y} width={1.02} height={1.02} className={c} />)}
            </svg>
          ) : null}
        </div>
      </div>
      <span className="pixel-sombra" />
      <div ref={balao} className={`pixel-balao${fala ? ' is-visivel' : ''}`} role="status">{fala}</div>
    </div>
  );
}
