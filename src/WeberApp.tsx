import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Download, Maximize, Menu, Minimize, X } from 'lucide-react';
import { weberSlides } from './weber';
import './weber.css';
import WeberBackground from './WeberBackground';

const darkSlides = new Set(['weber-laura-4', 'weber-laura-15', 'weber-laura-18', 'weber-ze-1', 'weber-ze-5', 'weber-ze-9', 'weber-ze-16']);

function indexFromHash() {
  const index = weberSlides.findIndex(slide => `#${slide.id}` === window.location.hash);
  return Math.max(0, index);
}

export default function WeberApp() {
  const [index, setIndex] = useState(indexFromHash);
  const [fullscreen, setFullscreen] = useState(false);
  const [error, setError] = useState('');
  const root = useRef<HTMLDivElement>(null);
  const main = useRef<HTMLElement>(null);
  const menu = useRef<HTMLDialogElement>(null);
  const notes = useRef<HTMLDialogElement>(null);
  const slide = weberSlides[index];
  const dark = darkSlides.has(slide.id);

  const goTo = useCallback((next: number) => {
    const bounded = Math.max(0, Math.min(weberSlides.length - 1, next));
    setIndex(bounded);
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${weberSlides[bounded].id}`);
    main.current?.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    document.title = 'Max Weber · Economia e sociedade · Laura e Zé';
    const onHash = () => { setIndex(indexFromHash()); main.current?.scrollTo({ top: 0 }); };
    const onFullscreen = () => setFullscreen(Boolean(document.fullscreenElement));
    window.addEventListener('hashchange', onHash);
    document.addEventListener('fullscreenchange', onFullscreen);
    return () => {
      window.removeEventListener('hashchange', onHash);
      document.removeEventListener('fullscreenchange', onFullscreen);
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || menu.current?.open || notes.current?.open) return;
      const target = event.target as HTMLElement;
      if (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
      if (event.key === 'ArrowRight' || event.key === 'PageDown') { event.preventDefault(); goTo(index + 1); }
      else if (event.key === 'ArrowLeft' || event.key === 'PageUp') { event.preventDefault(); goTo(index - 1); }
      else if (event.key === 'Home') { event.preventDefault(); goTo(0); }
      else if (event.key === 'End') { event.preventDefault(); goTo(weberSlides.length - 1); }
      else if (event.key === ' ' && !['BUTTON', 'A'].includes(target.tagName)) { event.preventDefault(); goTo(index + 1); }
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

  function jump(next: number) {
    goTo(next);
    menu.current?.close();
  }

  return (
    <div ref={root} className="weber-app bg-grain">
      <a className="weber-skip" href="#weber-main" onClick={event => { event.preventDefault(); main.current?.focus(); }}>Ir para o conteúdo</a>
      <header className="weber-header">
        <button className="weber-wordmark" onClick={() => goTo(0)} aria-label="Voltar à capa">max weber<span>.</span></button>
        <div className="weber-context"><span>Economia e sociedade</span><span>{slide.chapter || 'Dominação, representação e desigualdade'}</span></div>
        <div className="weber-tools">
          <button onClick={() => notes.current?.showModal()} aria-label="Abrir roteiro de fala" title="Roteiro de fala"><BookOpen aria-hidden="true" size={21} /></button>
          <button onClick={toggleFullscreen} aria-label={fullscreen ? 'Sair da tela cheia' : 'Tela cheia'} title={fullscreen ? 'Sair da tela cheia' : 'Tela cheia'}>{fullscreen ? <Minimize aria-hidden="true" size={21} /> : <Maximize aria-hidden="true" size={21} />}</button>
          <button onClick={() => menu.current?.showModal()} aria-label="Abrir sumário" title="Sumário"><Menu aria-hidden="true" size={25} /></button>
        </div>
      </header>

      <main id="weber-main" tabIndex={-1} ref={main} className={`weber-main${dark ? ' weber-main--dark' : ''}`}>
        <WeberBackground />
        {slide.layout === 'cover' ? (
          <article key={slide.id} className="weber-cover weber-enter">
            <p className="weber-eyebrow">Leitura de Economia e sociedade</p>
            <h1>max weber<span>.</span></h1>
            <p className="weber-cover-subtitle">Dominação, representação<br />e desigualdade</p>
            <div className="weber-cover-rule" />
            <div className="weber-presenters"><p><strong>Laura</strong><span>p. 139–166</span></p><p><strong>Zé</strong><span>p. 167–202</span></p></div>
            <p className="weber-cover-hint">Capítulo III · Os tipos de dominação<br />Capítulo IV · Estamentos e classes (início)</p>
          </article>
        ) : (
          <article key={slide.id} className="weber-content weber-enter" aria-labelledby="weber-slide-title">
            <div className="weber-title-column">
              <p className="weber-eyebrow">{slide.presenter === 'Laura e Zé' ? 'A leitura' : slide.presenter}</p>
              <h2 id="weber-slide-title">{slide.title}{/[?!.]$/.test(slide.title) ? null : <span>.</span>}</h2>
              <p className="weber-topic">{slide.subtitle}</p>
              {slide.pages ? <p className="weber-page-label">Na obra: p. {slide.pages}</p> : null}
            </div>
            <div className="weber-body">
              {slide.content.map((paragraph, i) => <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />)}
              {slide.quote ? <blockquote><p>(“{slide.quote}”)</p><cite>Weber, Economia e sociedade, p. {slide.quotePage}.</cite></blockquote> : null}
            </div>
          </article>
        )}
      </main>

      <footer className="weber-footer">
        <div className="weber-footer-source">{slide.pages ? <>Weber · p. {slide.pages}<span>Página impressa no livro</span></> : <>{slide.presenter}<span>Economia e sociedade</span></>}</div>
        <div className="weber-pagination">
          <button aria-label="Slide anterior" onClick={() => goTo(index - 1)} disabled={index === 0}><ArrowLeft aria-hidden="true" size={23} /></button>
          <span aria-live="polite" aria-atomic="true">{String(index + 1).padStart(2, '0')} <span>/ {weberSlides.length}</span></span>
          <button aria-label="Próximo slide" onClick={() => goTo(index + 1)} disabled={index === weberSlides.length - 1}><ArrowRight aria-hidden="true" size={23} /></button>
        </div>
      </footer>
      {error ? <div className="weber-error" role="alert">{error}<button onClick={() => setError('')} aria-label="Fechar aviso"><X size={16} aria-hidden="true" /></button></div> : null}

      <dialog ref={menu} className="weber-dialog weber-menu" aria-labelledby="weber-menu-title" onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
        <div className="weber-dialog-header"><h2 id="weber-menu-title">sumário<span>.</span></h2><button onClick={() => menu.current?.close()} aria-label="Fechar sumário"><X aria-hidden="true" size={26} /></button></div>
        <div className="weber-menu-shortcuts"><button onClick={() => jump(0)}>Capa</button><button onClick={() => jump(1)}>Laura · p. 139–166</button><button onClick={() => jump(19)}>Zé · p. 167–202</button><button onClick={() => jump(37)}>Referências</button></div>
        <div className="weber-menu-columns">
          {['Laura', 'Zé'].map(person => <section key={person}><h3>{person}<span>18 slides</span></h3><ol>{weberSlides.map((entry, slideIndex) => entry.presenter === person ? <li key={entry.id}><button aria-current={slideIndex === index ? 'step' : undefined} onClick={() => jump(slideIndex)}><span>{String(person === 'Laura' ? slideIndex : slideIndex - 18).padStart(2, '0')}</span><span>{entry.title}<small>p. {entry.pages}</small></span></button></li> : null)}</ol></section>)}
        </div>
        <a className="weber-original" href="?deck=argonautas">Abrir a apresentação original: Argonautas <ArrowRight aria-hidden="true" size={18} /></a>
      </dialog>

      <dialog ref={notes} className="weber-dialog weber-notes" aria-labelledby="weber-notes-title" onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
        <div className="weber-dialog-header"><h2 id="weber-notes-title">roteiro de fala<span>.</span></h2><button onClick={() => notes.current?.close()} aria-label="Fechar roteiro"><X aria-hidden="true" size={26} /></button></div>
        <p className="weber-eyebrow">{slide.presenter}{slide.pages ? ` · p. ${slide.pages}` : ''}</p>
        <h3>{slide.title}</h3><p className="weber-note-text">{slide.notes}</p>
        {slide.quote ? <blockquote><p>(“{slide.quote}”)</p><cite>Weber, Economia e sociedade, p. {slide.quotePage}.</cite></blockquote> : null}
        <p className="weber-notes-help">Os números indicam as páginas do livro. As explicações usam palavras mais simples. Somente os trechos entre aspas são citações diretas.</p>
        <a className="weber-download" href="/weber-roteiro.md" download><Download aria-hidden="true" size={19} /> Baixar roteiro completo</a>
      </dialog>
    </div>
  );
}
