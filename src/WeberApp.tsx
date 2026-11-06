import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, Maximize, Menu, Minimize, X } from 'lucide-react';
import SlideFigure, { sincronizarImagens } from './SlideFigure';
import TituloDigitado from './TituloDigitado';
import PixelWeber from './PixelWeber';
import { fotosAutorObra, imagensPorSlide } from './imagens';
import type { AulaSlide, Block } from './aula';
import { lauraSlides } from './aula-laura';
import { zeSlides } from './aula-ze';
import './weber.css';
import WeberBackground from './WeberBackground';

const cover: AulaSlide = { id: 'capa', presenter: 'Laura e Zé', layout: 'cover', title: 'max weber', blocks: [] };
const references: AulaSlide = {
  id: 'referencias', presenter: 'Laura e Zé', layout: 'content', title: 'referências', chapter: 'A obra e os trechos estudados',
  blocks: [
    { t: 'p', html: '<strong>WEBER, Max. Economia e sociedade.</strong> v. 1. Brasília: Editora UnB, 1999.' },
    { t: 'p', html: '<strong>Trechos estudados:</strong> capítulo III, "Os tipos de dominação", e início do capítulo IV, "Estamentos e classes".' },
    { t: 'p', html: 'Laura: p. 139–167. Zé: p. 167–203. Os números indicam as <strong>páginas impressas no livro</strong>.' },
    { t: 'p', html: 'Texto dos slides adaptado das aulas escritas "Aprendendo Weber com calma", em linguagem didática. Somente os trechos entre aspas atribuídos a Weber são citações.' },
  ],
};

const autorObra: AulaSlide = { id: 'autor-e-obra', presenter: 'Laura e Zé', layout: 'fotos', title: 'o autor e a obra', chapter: 'De onde vem o conteúdo', blocks: [] };

const slides: AulaSlide[] = [cover, autorObra, ...lauraSlides, ...zeSlides, references];
const firstOf = (presenter: string) => slides.findIndex(s => s.presenter === presenter);

const PARTE = { Laura: 'Parte 1', 'Zé': 'Parte 2' } as const;

// Telas que invertem o tom do tema (claro ↔ escuro), para variar o ritmo visual.
const isAltTone = (s: AulaSlide) =>
  s.layout === 'cover' || (s.topic !== undefined && s.topic % 3 === 0) || s.id === 'ze-14';

// Agrupa os blocos em seções: cada subtítulo abre uma seção nova, com respiro e divisória.
// As imagens entram logo depois do bloco indicado em imagens.ts.
function renderSections(slideId: string, blocks: Block[]) {
  const imgs = imagensPorSlide[slideId] ?? [];
  const groups: React.ReactNode[][] = [];
  blocks.forEach((b, i) => {
    if (b.t === 'h' || groups.length === 0) groups.push([]);
    const g = groups[groups.length - 1];
    g.push(renderBlock(b, i));
    for (const img of imgs) if (img.apos === i) g.push(<SlideFigure key={img.id} info={img} />);
  });
  return groups.map((g, i) => <section key={i} className="aula-secao">{g}</section>);
}

const THEMES = [
  { id: 'laranja', name: 'Laranja', bg: '#f4f4f4', accent: '#ff4400', on: '#111' },
  { id: 'azul', name: 'Azul', bg: '#f3f5f9', accent: '#1f5eff', on: '#fff' },
  { id: 'magenta', name: 'Magenta', bg: '#ffffff', accent: '#d6005c', on: '#fff' },
  { id: 'roxo', name: 'Roxo', bg: '#f5f3f9', accent: '#6b2bd9', on: '#fff' },
  { id: 'mono', name: 'Preto e branco', bg: '#fff', accent: '#000', on: '#fff' },
  { id: 'noite', name: 'Noite (amarelo)', bg: '#121212', accent: '#ffd400', on: '#111' },
] as const;
type ThemeId = typeof THEMES[number]['id'];

const FONTS = [
  { id: 'anton', name: 'Anton', family: 'Anton' },
  { id: 'caesar', name: 'Caesar Dressing', family: "'Caesar Dressing'" },
  { id: 'fell', name: 'IM Fell English SC', family: "'IM Fell English SC'" },
  { id: 'fondamento', name: 'Fondamento', family: 'Fondamento' },
  { id: 'gravitas', name: 'Gravitas One', family: "'Gravitas One'" },
] as const;
type FontId = typeof FONTS[number]['id'];

function savedFont(): FontId {
  try {
    const v = localStorage.getItem('weber-fonte');
    if (FONTS.some(f => f.id === v)) return v as FontId;
  } catch { /* usa o padrão */ }
  return 'anton';
}

function savedTheme(): ThemeId {
  try {
    const v = localStorage.getItem('weber-tema');
    if (THEMES.some(t => t.id === v)) return v as ThemeId;
  } catch { /* sem armazenamento: usa o padrão */ }
  return 'laranja';
}

const BOX_LABEL = { conceito: 'Conceito-chave', exemplo: 'Exemplo de hoje', contexto: 'Contexto histórico' } as const;

// Aspas retas → aspas curvas (o conteúdo não usa atributos HTML).
const typo = (html: string) => html.replace(/"([^"]*)"/g, '“$1”');
const Html = ({ as: Tag = 'p', html, className }: { as?: 'p' | 'li' | 'td' | 'th' | 'span'; html: string; className?: string }) =>
  <Tag className={className} dangerouslySetInnerHTML={{ __html: typo(html) }} />;

function renderBlock(block: Block, key: number) {
  switch (block.t) {
    case 'p': return <Html key={key} html={block.html} />;
    case 'h': return <h3 key={key} className="aula-h">{block.text}</h3>;
    case 'destaque': return <Html key={key} className="aula-destaque" html={block.html} />;
    case 'box': return (
      <aside key={key} className={`aula-box aula-box--${block.kind}`}>
        <span className="aula-box-label">{BOX_LABEL[block.kind]}</span>
        {block.html.map((html, i) => <Html key={i} html={html} />)}
      </aside>
    );
    case 'lista': {
      const List = block.ordered ? 'ol' : 'ul';
      return <List key={key} className="aula-lista">{block.items.map((html, i) => <Html as="li" key={i} html={html} />)}</List>;
    }
    case 'tabela': return (
      <div key={key} className="aula-tabela" tabIndex={0} role="region" aria-label="Tabela">
        <table>
          <thead><tr>{block.head.map((cell, i) => <Html as="th" key={i} html={cell} />)}</tr></thead>
          <tbody>{block.rows.map((row, r) => (
            <tr key={r}>{row.map((cell, c) => {
              const span = c === row.length - 1 ? block.head.length - row.length + 1 : 1;
              return <td key={c} colSpan={span > 1 ? span : undefined} dangerouslySetInnerHTML={{ __html: typo(cell) }} />;
            })}</tr>
          ))}</tbody>
        </table>
      </div>
    );
    case 'revisao': return (
      <aside key={key} className="aula-box aula-box--revisao">
        <span className="aula-box-label">Revisão rápida</span>
        <ul>{block.items.map((html, i) => <Html as="li" key={i} html={html} />)}</ul>
      </aside>
    );
  }
}

function indexFromHash() {
  const index = slides.findIndex(slide => `#${slide.id}` === window.location.hash);
  return Math.max(0, index);
}

export default function WeberApp() {
  const [index, setIndex] = useState(indexFromHash);
  const [fullscreen, setFullscreen] = useState(false);
  const [error, setError] = useState('');
  const [moreBelow, setMoreBelow] = useState(false);
  const [theme, setTheme] = useState<ThemeId>(savedTheme);
  const [font, setFont] = useState<FontId>(savedFont);
  const [bonequinho, setBonequinho] = useState(() => { try { return localStorage.getItem('weber-boneco') !== 'nao'; } catch { return true; } });
  const root = useRef<HTMLDivElement>(null);
  const main = useRef<HTMLElement>(null);
  const text = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDialogElement>(null);
  const slide = slides[index];

  const updateMore = useCallback(() => {
    const el = text.current;
    setMoreBelow(Boolean(el && el.scrollHeight - el.scrollTop - el.clientHeight > 8));
  }, []);

  const goTo = useCallback((next: number) => {
    const bounded = Math.max(0, Math.min(slides.length - 1, next));
    setIndex(bounded);
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${slides[bounded].id}`);
  }, []);

  // Ao trocar de slide, o texto volta ao topo.
  useEffect(() => {
    text.current?.scrollTo({ top: 0 });
    main.current?.scrollTo({ top: 0 });
    updateMore();
  }, [index, updateMore]);

  // No servidor local, copia para public/imagens/ as imagens já inseridas neste navegador.
  useEffect(() => { sincronizarImagens(); }, []);

  useEffect(() => {
    document.title = 'Max Weber · Economia e sociedade · Laura e Zé';
    const onHash = () => setIndex(indexFromHash());
    const onFullscreen = () => setFullscreen(Boolean(document.fullscreenElement));
    window.addEventListener('hashchange', onHash);
    window.addEventListener('resize', updateMore);
    document.addEventListener('fullscreenchange', onFullscreen);
    return () => {
      window.removeEventListener('hashchange', onHash);
      window.removeEventListener('resize', updateMore);
      document.removeEventListener('fullscreenchange', onFullscreen);
    };
  }, [updateMore]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || menu.current?.open) return;
      const target = event.target as HTMLElement;
      if (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
      // Rola o texto do slide (ou a página, no celular, onde o texto não tem rolagem própria).
      const scroller = text.current && text.current.scrollHeight > text.current.clientHeight ? text.current : main.current;
      const step = (scroller?.clientHeight ?? 400) * 0.8;
      if (event.key === 'ArrowRight' || event.key === 'PageDown') { event.preventDefault(); goTo(index + 1); }
      else if (event.key === 'ArrowLeft' || event.key === 'PageUp') { event.preventDefault(); goTo(index - 1); }
      else if (event.key === 'Home') { event.preventDefault(); goTo(0); }
      else if (event.key === 'End') { event.preventDefault(); goTo(slides.length - 1); }
      else if (event.key === 'ArrowDown') { event.preventDefault(); scroller?.scrollBy({ top: 90, behavior: 'smooth' }); }
      else if (event.key === 'ArrowUp') { event.preventDefault(); scroller?.scrollBy({ top: -90, behavior: 'smooth' }); }
      else if (event.key === ' ' && !['BUTTON', 'A'].includes(target.tagName)) { event.preventDefault(); scroller?.scrollBy({ top: event.shiftKey ? -step : step, behavior: 'smooth' }); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, goTo]);

  async function toggleFullscreen() {
    setError('');
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (root.current?.requestFullscreen) await root.current.requestFullscreen();
      else setError('A tela cheia não está disponível neste navegador. A apresentação continua nas setas.');
    } catch {
      setError('Não foi possível abrir a tela cheia. Tente novamente pelo botão ou use F11 no Chrome.');
    }
  }

  function toggleBonequinho() {
    setBonequinho(v => {
      try { localStorage.setItem('weber-boneco', v ? 'nao' : 'sim'); } catch { /* ignora */ }
      return !v;
    });
  }

  function chooseFont(id: FontId) {
    setFont(id);
    try { localStorage.setItem('weber-fonte', id); } catch { /* ignora */ }
  }

  function chooseTheme(id: ThemeId) {
    setTheme(id);
    try { localStorage.setItem('weber-tema', id); } catch { /* ignora */ }
  }

  function jump(next: number) {
    goTo(next);
    menu.current?.close();
  }

  const ownCount = slides.filter(s => s.presenter === slide.presenter).length;
  const baseTone = theme === 'noite' ? 'dark' : 'light';
  const tone = isAltTone(slide) ? (baseTone === 'dark' ? 'light' : 'dark') : baseTone;

  return (
    <div ref={root} className="weber-app bg-grain" data-theme={theme} data-tone={tone} data-fonte={font}>
      <a className="weber-skip" href="#weber-main" onClick={event => { event.preventDefault(); text.current?.focus(); }}>Ir para o conteúdo</a>
      <header className="weber-header">
        <button className="weber-wordmark" onClick={() => goTo(0)} aria-label="Voltar à capa">max weber<span>.</span></button>
        <div className="weber-context"><span>Economia e sociedade</span><span>{slide.chapter || 'Dominação, representação e desigualdade'}</span></div>
        <div className="weber-tools">
          <button onClick={toggleFullscreen} aria-label={fullscreen ? 'Sair da tela cheia' : 'Tela cheia'} title={fullscreen ? 'Sair da tela cheia' : 'Tela cheia'}>{fullscreen ? <Minimize aria-hidden="true" size={21} /> : <Maximize aria-hidden="true" size={21} />}</button>
          <button onClick={() => menu.current?.showModal()} aria-label="Abrir sumário" title="Sumário"><Menu aria-hidden="true" size={25} /></button>
        </div>
      </header>

      <main id="weber-main" ref={main} className="weber-main">
        <WeberBackground variante={index} />
        {bonequinho ? <PixelWeber slide={slide.id} /> : null}
        {slide.layout === 'cover' ? (
          <article key={slide.id} className="weber-cover weber-enter">
            <p className="weber-eyebrow">Leitura de Economia e sociedade</p>
            <h1>max weber<span>.</span></h1>
            <p className="weber-cover-subtitle">Dominação, representação<br />e desigualdade</p>
            <div className="weber-cover-rule" />
            <div className="weber-presenters"><p><small>Parte 1</small><strong>Laura</strong><span>p. 139–167</span></p><p><small>Parte 2</small><strong>Zé</strong><span>p. 167–203</span></p></div>
            <p className="weber-cover-hint">Capítulo III · Os tipos de dominação<br />Capítulo IV · Estamentos e classes (início)</p>
          </article>
        ) : slide.layout === 'fotos' ? (
          <article key={slide.id} className="weber-content weber-enter estilo-novo" aria-labelledby="weber-slide-title">
            <div className="weber-title-column">
              <p className="weber-eyebrow">Laura e Zé</p>
              <TituloDigitado key={slide.id} id="weber-slide-title" texto={slide.title} ponto />
              <p className="weber-page-label">Capítulo III e início do IV · p. 139–203</p>
            </div>
            <div className="weber-fotos">
              {fotosAutorObra.map(f => (
                <div key={f.id} className="weber-foto">
                  <SlideFigure info={f} />
                  <p className="weber-foto-legenda">{f.legenda}</p>
                </div>
              ))}
            </div>
          </article>
        ) : (
          <article key={slide.id} className="weber-content weber-enter estilo-novo" aria-labelledby="weber-slide-title">
            <div className="weber-title-column">
              <p className="weber-eyebrow">{slide.presenter === 'Laura e Zé' ? 'Laura e Zé' : <><span className="weber-part">{PARTE[slide.presenter]}</span>{slide.presenter} · {String(slide.topic).padStart(2, '0')}/{String(ownCount).padStart(2, '0')}</>}</p>
              <TituloDigitado key={slide.id} id="weber-slide-title" texto={typo(slide.title)} ponto={!/[?!.:"]$/.test(slide.title)} />
              {slide.pages ? <p className="weber-page-label">Na obra: p. {slide.pages}</p> : null}
            </div>
            <div className={`weber-body-wrap${moreBelow ? ' has-more' : ''}`}>
              <div ref={text} className="weber-body" tabIndex={0} role="region" aria-label="Texto do slide" onScroll={updateMore}>
                {renderSections(slide.id, slide.blocks)}
              </div>
              <button className={`weber-more${moreBelow ? ' is-visible' : ''}`} aria-hidden={!moreBelow} tabIndex={moreBelow ? 0 : -1}
                onClick={() => text.current?.scrollBy({ top: text.current.clientHeight * 0.8, behavior: 'smooth' })}>
                continua <ArrowDown aria-hidden="true" size={15} />
              </button>
            </div>
          </article>
        )}
      </main>

      <footer className="weber-footer">
        <div className="weber-footer-source">{slide.pages ? <>Weber · p. {slide.pages}<span>Página impressa no livro</span></> : <>{slide.presenter === 'Laura e Zé' ? 'Laura e Zé' : `${PARTE[slide.presenter]} · ${slide.presenter}`}<span>Economia e sociedade</span></>}</div>
        <div className="weber-pagination">
          <button aria-label="Slide anterior" onClick={() => goTo(index - 1)} disabled={index === 0}><ArrowLeft aria-hidden="true" size={23} /></button>
          <span aria-live="polite" aria-atomic="true">{String(index + 1).padStart(2, '0')} <span>/ {slides.length}</span></span>
          <button aria-label="Próximo slide" onClick={() => goTo(index + 1)} disabled={index === slides.length - 1}><ArrowRight aria-hidden="true" size={23} /></button>
        </div>
      </footer>
      {error ? <div className="weber-error" role="alert">{error}<button onClick={() => setError('')} aria-label="Fechar aviso"><X size={16} aria-hidden="true" /></button></div> : null}

      <dialog ref={menu} className="weber-dialog weber-menu" aria-labelledby="weber-menu-title" onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
        <div className="weber-dialog-header"><h2 id="weber-menu-title">sumário<span>.</span></h2><button onClick={() => menu.current?.close()} aria-label="Fechar sumário"><X aria-hidden="true" size={26} /></button></div>
        <p className="weber-menu-label">Tema de cores</p>
        <div className="weber-themes" role="group" aria-label="Tema de cores">
          {THEMES.map(t => (
            <button key={t.id} aria-pressed={theme === t.id} onClick={() => chooseTheme(t.id)}>
              <span className="weber-swatch" style={{ background: t.accent, color: t.on, outline: `3px solid ${t.bg}`, outlineOffset: '-6px' }} aria-hidden="true">A</span>{t.name}
            </button>
          ))}
        </div>
        <p className="weber-menu-label">Fonte dos títulos</p>
        <div className="weber-themes weber-fonts" role="group" aria-label="Fonte dos títulos">
          {FONTS.map(f => (
            <button key={f.id} aria-pressed={font === f.id} onClick={() => chooseFont(f.id)} style={{ fontFamily: f.family, fontSize: f.id === 'gravitas' ? 12 : 15 }}>{f.name}</button>
          ))}
        </div>
        <p className="weber-menu-label">Weber em pixel</p>
        <div className="weber-themes weber-fonts">
          <button aria-pressed={bonequinho} onClick={toggleBonequinho}>{bonequinho ? 'Andando na tela · clique para esconder' : 'Escondido · clique para mostrar'}</button>
        </div>
        <p className="weber-menu-label">Ir para</p>
        <div className="weber-menu-shortcuts">
          <button onClick={() => jump(0)}>Capa</button>
          <button onClick={() => jump(1)}>O autor e a obra</button>
          <button onClick={() => jump(firstOf('Laura'))}>Parte 1 · Laura · p. 139–167</button>
          <button onClick={() => jump(firstOf('Zé'))}>Parte 2 · Zé · p. 167–203</button>
          <button onClick={() => jump(slides.length - 1)}>Referências</button>
        </div>
        <div className="weber-menu-columns">
          {(['Laura', 'Zé'] as const).map(person => {
            const own = slides.filter(s => s.presenter === person);
            return (
              <section key={person}><h3>{PARTE[person]} · {person}<span>{own.length} slides</span></h3><ol>
                {own.map(entry => {
                  const slideIndex = slides.indexOf(entry);
                  return <li key={entry.id}><button aria-current={slideIndex === index ? 'step' : undefined} onClick={() => jump(slideIndex)}><span>{String(entry.topic).padStart(2, '0')}</span><span>{typo(entry.title)}{entry.pages ? <small>p. {entry.pages}</small> : null}</span></button></li>;
                })}
              </ol></section>
            );
          })}
        </div>
        <a className="weber-original" href="?deck=argonautas">Abrir a apresentação original: Argonautas <ArrowRight aria-hidden="true" size={18} /></a>
      </dialog>
    </div>
  );
}
