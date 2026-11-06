import { useEffect, useState } from 'react';

// Título que "se digita" letra por letra, com um cursor piscando no final (na cor do tema).
// O texto inteiro já ocupa o espaço desde o início (a parte ainda não digitada fica invisível),
// para o layout não pular enquanto as letras aparecem.
export default function TituloDigitado({ texto, ponto, id }: { texto: string; ponto: boolean; id?: string }) {
  const letras = Array.from(texto);
  const total = letras.length + (ponto ? 1 : 0);
  const [n, setN] = useState(0);

  useEffect(() => {
    setN(0);
    const passo = Math.max(28, Math.min(55, 1600 / total)); // títulos longos digitam mais rápido
    let i = 0;
    let timer = window.setTimeout(function tick() {
      i += 1;
      setN(i);
      if (i < total) timer = window.setTimeout(tick, passo);
    }, 260);
    return () => window.clearTimeout(timer);
  }, [texto, total]);

  const visiveis = letras.slice(0, n).join('');
  const ocultas = letras.slice(n).join('');
  const pontoVisivel = ponto && n > letras.length;
  const digitando = n < total;

  return (
    <h2 id={id} aria-label={texto}>
      <span aria-hidden="true">
        {visiveis}
        {pontoVisivel ? <span className="titulo-ponto">.</span> : null}
        <span className={`titulo-cursor${digitando ? ' is-digitando' : ''}`} />
        <span className="titulo-oculto">{ocultas}{ponto && !pontoVisivel ? '.' : ''}</span>
      </span>
    </h2>
  );
}
