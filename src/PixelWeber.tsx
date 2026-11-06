import { useEffect, useMemo, useRef, useState } from 'react';
import { comentarTrecho, FALAS_SLIDE, HUMOR, RECLAMACOES } from './falasWeber';

// Max Weber em pixel art (desenho original), de perfil, no estilo de personagem de jogo de plataforma.
// Cabeça grande e corpo bem magro. Traços de Weber: cabelo escuro penteado para trás, testa alta,
// sobrancelha grossa, nariz marcado, bigode e barba cheia. Terno preto, camisa branca e gravata preta.
// Anda sobre a linha do rodapé seguindo a posição horizontal do mouse e dá pulinhos de vez em quando.
// O desenho olha para a direita; para andar para a esquerda ele é espelhado.

const CABECA_E_CORPO = [
  '....HHHHHH......',
  '..HHHHHHHHH.....',
  '.HHHhhhhhSSS....',
  '.HHHhhhSSSSSS...',
  '.HHHHSSSSSSSS...',
  '.HHHSSSSSHHHS...',
  '.HHsSSSSSSESS...',
  '.HHssSSSSSSSSS..',
  '.HHHSSSSSSSSSSS.',
  '.HHHSSSSSHHHHS..',
  '..HHHSSHHHHHHH..',
  '..HHHHHHHHHHHH..',
  '...HHHHHHHHHHH..',
  '....HHHHHHHHH...',
  '......HHHHH.....',
  '......CWW.......',
  '......CWK.......',
  '......CCK.......',
  '......CCC.......',
  '......CCC.......',
];

const PERNAS = {
  parado: ['......L.L.......', '......L.L.......', '......L.L.......', '......BBBB......'],
  passoA: ['.....L...L......', '....L.....L.....', '...L.......L....', '..BB.......BB...'],
  passoB: ['......LL........', '.......L........', '.......L........', '.......BBB......'],
  pulo: ['....L....L......', '...L......L.....', '...BB.....BB....', '................'],
  batePe: ['......L.L.......', '......L..L......', '......L...BB....', '......BB........'],
};

// Poses de espera: pernas + "remendos" [x, y, cor] por cima do desenho base (olhando para a direita).
type Remendo = [number, number, string];
const OLHO_FECHADO: Remendo[] = [[10, 6, 'H'], [9, 6, 'S']];
const BOCA_ABERTA: Remendo[] = [[12, 10, 'M'], [13, 10, 'M'], [12, 11, 'M'], [13, 11, 'M']];
const BRACO_ESQ_CIMA: Remendo[] = [[5, 15, 'C'], [4, 15, 'C'], [3, 14, 'C'], [2, 13, 'C'], [1, 12, 'C'], [0, 11, 'S']];
const BRACO_DIR_CIMA: Remendo[] = [[9, 15, 'C'], [10, 15, 'C'], [11, 15, 'C'], [12, 14, 'C'], [13, 13, 'C'], [14, 12, 'C'], [15, 11, 'S']];
const BRACO_DIR_ACENO: Remendo[] = [[9, 15, 'C'], [10, 15, 'C'], [11, 15, 'C'], [12, 14, 'C'], [13, 14, 'C'], [14, 13, 'S']];
const POSES = {
  espreguica: { pernas: 'parado', remendos: [...BRACO_ESQ_CIMA, ...BRACO_DIR_CIMA, ...OLHO_FECHADO, ...BOCA_ABERTA] },
  maoNaBoca: { pernas: 'parado', remendos: [...OLHO_FECHADO, [12, 10, 'M'], [9, 16, 'C'], [10, 15, 'C'], [11, 14, 'C'], [12, 13, 'C'], [13, 12, 'C'], [13, 11, 'S'], [14, 11, 'S'], [14, 10, 'S']] },
  relogio: { pernas: 'parado', remendos: [[9, 17, 'C'], [10, 17, 'C'], [11, 17, 'S'], [12, 16, 'W'], [13, 16, 'W'], [12, 17, 'W'], [13, 17, 'K'], [12, 15, 'K']] },
  relogioPe: { pernas: 'batePe', remendos: [[9, 17, 'C'], [10, 17, 'C'], [11, 17, 'S'], [12, 16, 'W'], [13, 16, 'W'], [12, 17, 'W'], [13, 17, 'K'], [12, 15, 'K']] },
  livroA: { pernas: 'parado', remendos: [[9, 17, 'C'], [10, 17, 'S'], [11, 15, 'W'], [12, 15, 'W'], [13, 15, 'K'], [14, 15, 'W'], [15, 15, 'W'], [11, 16, 'W'], [12, 16, 'W'], [13, 16, 'K'], [14, 16, 'W'], [15, 16, 'W'], [11, 17, 'K'], [12, 17, 'K'], [13, 17, 'K'], [14, 17, 'K'], [15, 17, 'K']] },
  livroB: { pernas: 'parado', remendos: [[9, 17, 'C'], [10, 17, 'S'], [11, 15, 'W'], [12, 15, 'W'], [13, 15, 'K'], [14, 14, 'W'], [15, 13, 'W'], [11, 16, 'W'], [12, 16, 'W'], [13, 16, 'K'], [14, 15, 'W'], [14, 16, 'W'], [11, 17, 'K'], [12, 17, 'K'], [13, 17, 'K'], [14, 17, 'K'], [15, 17, 'K']] },
  acenoA: { pernas: 'parado', remendos: [...BRACO_DIR_CIMA] },
  acenoB: { pernas: 'parado', remendos: [...BRACO_DIR_ACENO] },
  pe: { pernas: 'batePe', remendos: [] },
  cafe: { pernas: 'parado', remendos: [[9, 17, 'C'], [10, 17, 'S'], [11, 16, 'W'], [12, 16, 'W'], [11, 17, 'W'], [12, 17, 'W'], [13, 16, 'W'], [11, 15, 'K'], [12, 15, 'K'], [11, 13, 'V'], [12, 12, 'V'], [12, 14, 'V']] },
  cafeGole: { pernas: 'parado', remendos: [...OLHO_FECHADO, [9, 16, 'C'], [10, 15, 'C'], [11, 14, 'C'], [12, 13, 'S'], [13, 11, 'W'], [14, 11, 'W'], [13, 12, 'W'], [14, 12, 'W'], [15, 11, 'W'], [14, 9, 'V'], [15, 8, 'V']] },
} satisfies Record<string, { pernas: keyof typeof PERNAS; remendos: Remendo[] }>;

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
type Pose = keyof typeof POSES | 'parado';
type Rotina = { passos: [Pose, number][]; falas: string[] };
const ROTINAS: Rotina[] = ([
  [['espreguica', 1.1], ['parado', 0.25], ['espreguica', 0.9], ['maoNaBoca', 1.4], ['parado', 0.4]],
  [['relogio', 0.9], ['relogioPe', 0.22], ['relogio', 0.22], ['relogioPe', 0.22], ['relogio', 0.22], ['relogioPe', 0.22], ['relogio', 0.8]],
  [['livroA', 0.8], ['livroB', 0.25], ['livroA', 0.9], ['livroB', 0.25], ['livroA', 0.9], ['livroB', 0.25], ['livroA', 0.7]],
  [['acenoA', 0.22], ['acenoB', 0.22], ['acenoA', 0.22], ['acenoB', 0.22], ['acenoA', 0.22], ['acenoB', 0.22], ['acenoA', 0.3]],
  [['pe', 0.18], ['parado', 0.18], ['pe', 0.18], ['parado', 0.18], ['pe', 0.18], ['parado', 0.18], ['pe', 0.18], ['parado', 0.3]],
  [['cafe', 1.2], ['cafeGole', 0.9], ['cafe', 1.0], ['cafeGole', 0.9], ['cafe', 1.2]],
] as [Pose, number][][]).map((passos, i) => ({ passos, falas: FALAS[i] }));

const CLASSE: Record<string, string> = { V: 'px-v', M: 'px-m', H: 'px-h', h: 'px-h2', S: 'px-s', s: 'px-s2', E: 'px-e', W: 'px-w', K: 'px-k', C: 'px-c', L: 'px-l', B: 'px-b' };

type Quadro = Exclude<keyof typeof PERNAS, 'batePe'> | keyof typeof POSES;

function pixels(quadro: Quadro) {
  const pose = quadro in POSES ? POSES[quadro as keyof typeof POSES] : { pernas: quadro as keyof typeof PERNAS, remendos: [] as Remendo[] };
  const linhas = [...CABECA_E_CORPO, ...PERNAS[pose.pernas]].map(l => Array.from(l));
  for (const [x, y, c] of pose.remendos) linhas[y][x] = c;
  const rects: { x: number; y: number; c: string }[] = [];
  linhas.forEach((linha, y) => linha.forEach((ch, x) => { if (CLASSE[ch]) rects.push({ x, y, c: CLASSE[ch] }); }));
  return rects;
}

const LARGURA = CABECA_E_CORPO[0].length;
const ALTURA = CABECA_E_CORPO.length + PERNAS.parado.length;
const ESCALA = 3.2;         // px por "pixel" do desenho
const VELOCIDADE = 520;     // px por segundo
const PULO_ALTURA = 24;     // px
const PULO_DURACAO = 0.42;  // s

export default function PixelWeber({ slide = '' }: { slide?: string }) {
  const caixa = useRef<HTMLDivElement>(null);
  const [quadro, setQuadro] = useState<Quadro>('parado');
  const [olhaEsquerda, setOlhaEsquerda] = useState(false);
  const [fala, setFala] = useState('');
  const balao = useRef<HTMLDivElement>(null);
  const inicioSlide = useRef(performance.now());
  const slideAtual = useRef(slide);
  useEffect(() => { inicioSlide.current = performance.now(); slideAtual.current = slide; }, [slide]);
  const desenhos = useMemo(() => {
    const nomes = ['parado', 'passoA', 'passoB', 'pulo', ...Object.keys(POSES)] as Quadro[];
    return Object.fromEntries(nomes.map(n => [n, pixels(n)])) as Record<Quadro, ReturnType<typeof pixels>>;
  }, []);

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
    const atualizarFala = () => {
      const t = performance.now() < falaMouseAte ? falaMouse : falaRotina;
      if (t !== falaAtual) { falaAtual = t; setFala(t); }
    };
    const falar = (t: string) => { falaRotina = t; };
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
        falaMouse = comentarTrecho(alvoEl);
        falaMouseAte = performance.now() + 4500;
      }, 550);
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
          const doSlide = FALAS_SLIDE[slideAtual.current] ?? [];
          const opcoes = demorou ? RECLAMACOES
            : Math.random() < 0.6 && doSlide.length ? doSlide
            : Math.random() < 0.5 ? HUMOR : ROTINAS[k].falas;
          falar(sorteio(opcoes));
        }
        if (rotina) {
          tempoRotina += dt;
          if (tempoRotina >= rotina[passoRotina][1]) { tempoRotina = 0; passoRotina += 1; }
          if (passoRotina >= rotina.length) {
            rotina = null; parado = 0; esperaRotina = 6 + Math.random() * 6;
            mostrar('parado'); falar('');
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
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener('pointermove', onMove); document.removeEventListener('mouseover', onOver); window.clearTimeout(timerTrecho); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div ref={caixa} className="pixel-weber" aria-hidden="true" style={{ width: LARGURA * ESCALA, height: ALTURA * ESCALA }}>
      <svg viewBox={`0 0 ${LARGURA} ${ALTURA}`} shapeRendering="crispEdges" style={{ transform: olhaEsquerda ? 'scaleX(-1)' : undefined }}>
        {desenhos[quadro].map((p, i) => <rect key={i} x={p.x} y={p.y} width={1.02} height={1.02} className={p.c} />)}
      </svg>
      <span className="pixel-sombra" />
      <div ref={balao} className={`pixel-balao${fala ? ' is-visivel' : ''}`} role="status">{fala}</div>
    </div>
  );
}
