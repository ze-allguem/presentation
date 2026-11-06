import { useEffect, useRef, useState } from 'react';
import { Check, Copy, ImagePlus, RefreshCw, Trash2 } from 'lucide-react';
import { ESTILO, imagens } from './imagens';

// Imagens inseridas pelo botão ficam guardadas neste navegador (IndexedDB).
// Prioridade: imagem inserida > arquivo em public/imagens/<id>.png > espaço reservado.

const DB = 'weber-imagens';
const STORE = 'img';

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

export default function SlideFigure({ id }: { id: string }) {
  const info = imagens[id];
  const input = useRef<HTMLInputElement>(null);
  const [stored, setStored] = useState<string | null>(null);
  const [fileMissing, setFileMissing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    let url: string | null = null;
    dbRun<Blob | undefined>('readonly', s => s.get(id))
      .then(blob => { if (blob) { url = URL.createObjectURL(blob); setStored(url); } })
      .catch(() => { /* sem IndexedDB: segue com arquivo ou espaço reservado */ });
    return () => { if (url) URL.revokeObjectURL(url); };
  }, [id]);

  if (!info) return null;
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
  }

  async function remove() {
    try { await dbRun('readwrite', s => s.delete(id)); } catch { /* ignora */ }
    setStored(old => { if (old) URL.revokeObjectURL(old); return null; });
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

  const src = stored ?? (fileMissing ? null : `${import.meta.env.BASE_URL}imagens/${id}.png`);

  if (src) {
    return (
      <figure className={`weber-figure${dragging ? ' is-dragging' : ''}`} {...dropProps}>
        {picker}
        <img src={src} alt={info.ideia} onError={() => { if (!stored) setFileMissing(true); }} />
        <div className="weber-figure-tools">
          <button onClick={() => input.current?.click()} aria-label="Trocar imagem" title="Trocar imagem"><RefreshCw size={15} aria-hidden="true" /></button>
          {stored ? <button onClick={remove} aria-label="Remover imagem" title="Remover imagem"><Trash2 size={15} aria-hidden="true" /></button> : null}
        </div>
      </figure>
    );
  }

  return (
    <div className={`weber-figure weber-figure--vazio${dragging ? ' is-dragging' : ''}`} {...dropProps}>
      {picker}
      <button className="weber-figure-insert" onClick={() => input.current?.click()}>
        <ImagePlus aria-hidden="true" size={22} />
        <strong>Clique para inserir a imagem</strong>
        <span className="weber-figure-hint">ou arraste o arquivo para cá</span>
      </button>
      <div className="weber-figure-brief">
        <span className="weber-figure-label">Imagem para criar na IA</span>
        <p>{info.prompt}</p>
        <p className="weber-figure-style">{ESTILO}</p>
      </div>
      <button className="weber-figure-copy" onClick={copy}>
        {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
        {copied ? 'Copiado' : 'Copiar pedido para a IA'}
      </button>
      {error ? <p className="weber-figure-error" role="alert">{error}</p> : null}
    </div>
  );
}
