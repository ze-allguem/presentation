import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, Copy, ImagePlus, RefreshCw, Trash2, X } from 'lucide-react';
import { ESTILO, type Imagem } from './imagens';

// Imagens inseridas pelo botão:
//  - ficam guardadas neste navegador (IndexedDB), para aparecerem na hora;
//  - no servidor local (npm run dev), também são gravadas em public/imagens/<id>.webp,
//    para irem para o GitHub e ficarem fixas na apresentação publicada.
// Prioridade: imagem inserida > public/imagens/<id>.webp > <id>.png > espaço reservado.

const DB = 'weber-imagens';
const STORE = 'img';
const MAX_LADO = 1600;

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function dbRun<T>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest): Promise<T> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const req = fn(db.transaction(STORE, mode).objectStore(STORE));
    req.onsuccess = () => resolve(req.result as T);
    req.onerror = () => reject(req.error);
  });
}

// Reduz para no máximo 1600 px no lado maior e converte para WEBP (arquivo bem menor).
async function paraWebp(blob: Blob): Promise<Blob> {
  const bmp = await createImageBitmap(blob);
  const k = Math.min(1, MAX_LADO / Math.max(bmp.width, bmp.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bmp.width * k);
  canvas.height = Math.round(bmp.height * k);
  canvas.getContext('2d')!.drawImage(bmp, 0, 0, canvas.width, canvas.height);
  bmp.close();
  return new Promise((resolve, reject) => canvas.toBlob(b => (b ? resolve(b) : reject(new Error('webp'))), 'image/webp', 0.88));
}

async function enviarAoProjeto(id: string, blob: Blob) {
  if (!import.meta.env.DEV) return;
  const res = await fetch(`/__imagens/${id}`, { method: 'PUT', body: await paraWebp(blob) });
  if (!res.ok) throw new Error(`falha ${res.status}`);
}
async function apagarDoProjeto(id: string) {
  if (!import.meta.env.DEV) return;
  await fetch(`/__imagens/${id}`, { method: 'DELETE' });
}

// Copia para a pasta do projeto todas as imagens já inseridas neste navegador (roda uma vez, no servidor local).
export async function sincronizarImagens(): Promise<number> {
  if (!import.meta.env.DEV) return 0;
  try {
    const keys = await dbRun<IDBValidKey[]>('readonly', s => s.getAllKeys());
    let n = 0;
    for (const key of keys) {
      const blob = await dbRun<Blob | undefined>('readonly', s => s.get(key));
      if (blob && typeof key === 'string') { await enviarAoProjeto(key, blob); n++; }
    }
    return n;
  } catch { return 0; }
}

type Rect = { left: number; top: number; width: number; height: number };

// Zoom: clicar na imagem abre em tela cheia; clicar em qualquer lugar (ou Esc) fecha.
function useZoom(img: React.RefObject<HTMLImageElement | null>) {
  const [zoom, setZoom] = useState<{ from: Rect; to: Rect; open: boolean } | null>(null);
  const timer = useRef<number | undefined>(undefined);

  const open = useCallback(() => {
    const el = img.current;
    if (!el || !el.naturalWidth) return;
    const r = el.getBoundingClientRect();
    const k = Math.min((window.innerWidth * 0.88) / el.naturalWidth, (window.innerHeight * 0.86) / el.naturalHeight);
    const w = el.naturalWidth * k, h = el.naturalHeight * k;
    const from = { left: r.left, top: r.top, width: r.width, height: r.height };
    const to = { left: (window.innerWidth - w) / 2, top: (window.innerHeight - h) / 2, width: w, height: h };
    setZoom({ from, to, open: false });
    requestAnimationFrame(() => requestAnimationFrame(() => setZoom(z => (z ? { ...z, open: true } : z))));
  }, [img]);

  const close = useCallback(() => {
    window.clearTimeout(timer.current);
    setZoom(z => (z ? { ...z, open: false } : z));
    timer.current = window.setTimeout(() => setZoom(null), 320);
  }, []);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoom, close]);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const hotspot = {
    onClick: () => { window.clearTimeout(timer.current); if (zoom?.open) close(); else open(); },
  };
  return { zoom, hotspot };
}

export default function SlideFigure({ info }: { info: Imagem }) {
  const id = info.id;
  const input = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const figRef = useRef<HTMLElement>(null);
  const [stored, setStored] = useState<string | null>(null);
  const [ext, setExt] = useState<'webp' | 'png' | null>('webp');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [dragging, setDragging] = useState(false);
  const { zoom, hotspot } = useZoom(imgRef);

  useEffect(() => {
    let url: string | null = null;
    dbRun<Blob | undefined>('readonly', s => s.get(id))
      .then(blob => { if (blob) { url = URL.createObjectURL(blob); setStored(url); } })
      .catch(() => { /* sem IndexedDB: segue com arquivo ou espaço reservado */ });
    return () => { if (url) URL.revokeObjectURL(url); };
  }, [id]);

  const prompt = `${info.prompt} ${ESTILO}`;

  async function save(file: File | undefined) {
    setError('');
    if (!file) return;
    if (!file.type.startsWith('image/')) { setError('Escolha um arquivo de imagem (PNG, JPG ou WEBP).'); return; }
    try {
      await dbRun('readwrite', s => s.put(file, id));
      setStored(old => { if (old) URL.revokeObjectURL(old); return URL.createObjectURL(file); });
    } catch {
      setError('Não foi possível guardar a imagem neste navegador.');
    }
    try { await enviarAoProjeto(id, file); setExt('webp'); }
    catch { setError('A imagem aparece aqui, mas não foi salva na pasta do projeto.'); }
  }

  async function remove() {
    try { await dbRun('readwrite', s => s.delete(id)); } catch { /* ignora */ }
    await apagarDoProjeto(id).catch(() => undefined);
    setStored(old => { if (old) URL.revokeObjectURL(old); return null; });
    setExt(null);
  }

  async function copy() {
    try { await navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 1800); }
    catch { setError('Não deu para copiar. Selecione o texto e copie manualmente.'); }
  }

  const picker = <input ref={input} type="file" accept="image/*" hidden onChange={e => { save(e.target.files?.[0]); e.target.value = ''; }} />;
  const dropProps = {
    onDragOver: (e: React.DragEvent) => { e.preventDefault(); setDragging(true); },
    onDragLeave: () => setDragging(false),
    onDrop: (e: React.DragEvent) => { e.preventDefault(); setDragging(false); save(e.dataTransfer.files[0]); },
  };

  const src = stored ?? (ext ? `${import.meta.env.BASE_URL}imagens/${id}.${ext}` : null);

  if (src) {
    const app = figRef.current?.closest('.weber-app') ?? document.body;
    const rect = zoom ? (zoom.open ? zoom.to : zoom.from) : null;
    return (
      <figure ref={figRef} className={`weber-figure aula-figura${info.foto ? ' aula-figura--foto' : ''}${dragging ? ' is-dragging' : ''}${zoom ? ' is-zoomed' : ''}`} {...dropProps}>
        {picker}
        <img ref={imgRef} src={src} alt={info.ideia}
          onError={() => { if (stored) return; setExt(e => (e === 'webp' ? 'png' : null)); }} />
        <button type="button" className="zoom-alvo" {...hotspot} aria-label={`Ampliar imagem: ${info.ideia}`} title="Clique para ver em tela cheia" />
        <div className="weber-figure-tools">
          <button onClick={() => input.current?.click()} aria-label="Trocar imagem" title="Trocar imagem"><RefreshCw size={15} aria-hidden="true" /></button>
          {stored || ext ? <button onClick={remove} aria-label="Remover imagem" title="Remover imagem"><Trash2 size={15} aria-hidden="true" /></button> : null}
        </div>
        {error ? <p className="weber-figure-error weber-figure-error--sobre" role="alert">{error}</p> : null}
        {zoom && rect ? createPortal(
          <>
            <div className={`zoom-fundo${zoom.open ? ' is-open' : ''}`} onClick={close} />
            <img className="zoom-img" src={src} alt="" onClick={close} style={{ left: rect.left, top: rect.top, width: rect.width, height: rect.height }} />
            <button type="button" className={`zoom-fechar${zoom.open ? ' is-open' : ''}`} onClick={close} aria-label="Fechar imagem"><X size={22} aria-hidden="true" /></button>
          </>,
          app,
        ) : null}
      </figure>
    );
  }

  return (
    <div className={`weber-figure aula-figura weber-figure--vazio${info.foto ? ' aula-figura--foto' : ''}${dragging ? ' is-dragging' : ''}`} {...dropProps}>
      {picker}
      <button className="weber-figure-insert" onClick={() => input.current?.click()}>
        <ImagePlus aria-hidden="true" size={22} />
        <strong>{info.foto ? 'Clique para inserir a foto' : 'Clique para inserir a imagem'}</strong>
        <span className="weber-figure-hint">ou arraste o arquivo para cá</span>
      </button>
      <div className="weber-figure-brief">
        <span className="weber-figure-label">{info.foto ? `Foto sugerida · ${info.ideia}` : `Imagem para criar na IA · ${info.ideia}`}</span>
        <p>{info.prompt}</p>
        {info.foto ? null : <p className="weber-figure-style">{ESTILO}</p>}
      </div>
      {info.foto ? null : (
        <button className="weber-figure-copy" onClick={copy}>
          {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
          {copied ? 'Copiado' : 'Copiar pedido para a IA'}
        </button>
      )}
      {error ? <p className="weber-figure-error" role="alert">{error}</p> : null}
    </div>
  );
}
