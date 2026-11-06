import { useEffect, useRef } from 'react';
import { TribalArrows, TribalSpiral, TribalStickFigure, TribalTriangle, TribalWave, TribalZigZag } from './TribalElements';

export default function WeberBackground() {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame: number | undefined;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;

    function animate() {
      x += (targetX - x) * 0.09;
      y += (targetY - y) * 0.09;
      layer.current?.style.setProperty('--bg-x', `${x.toFixed(2)}px`);
      layer.current?.style.setProperty('--bg-y', `${y.toFixed(2)}px`);
      frame = Math.abs(targetX - x) + Math.abs(targetY - y) > 0.1 ? requestAnimationFrame(animate) : undefined;
    }

    function move(event: PointerEvent) {
      if (event.pointerType !== 'mouse') return;
      const range = media.matches ? 8 : 56;
      targetX = (event.clientX / window.innerWidth - 0.5) * range;
      targetY = (event.clientY / window.innerHeight - 0.5) * range;
      if (media.matches) {
        x = targetX;
        y = targetY;
        layer.current?.style.setProperty('--bg-x', `${x.toFixed(2)}px`);
        layer.current?.style.setProperty('--bg-y', `${y.toFixed(2)}px`);
        return;
      }
      if (frame === undefined) frame = requestAnimationFrame(animate);
    }

    function reset() {
      targetX = 0;
      targetY = 0;
      if (media.matches) {
        x = y = 0;
        layer.current?.style.setProperty('--bg-x', '0px');
        layer.current?.style.setProperty('--bg-y', '0px');
      } else if (frame === undefined) frame = requestAnimationFrame(animate);
    }

    function configure() {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('blur', reset);
      if (frame !== undefined) cancelAnimationFrame(frame);
      frame = undefined;
      x = y = targetX = targetY = 0;
      layer.current?.style.setProperty('--bg-x', '0px');
      layer.current?.style.setProperty('--bg-y', '0px');
      window.addEventListener('pointermove', move, { passive: true });
      window.addEventListener('blur', reset);
    }

    configure();
    media.addEventListener('change', configure);
    return () => {
      media.removeEventListener('change', configure);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('blur', reset);
      if (frame !== undefined) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={layer} className="weber-background" aria-hidden="true">
      <div className="weber-bg-symbol weber-bg-zigzag"><TribalZigZag /></div>
      <div className="weber-bg-symbol weber-bg-arrows"><TribalArrows /></div>
      <div className="weber-bg-symbol weber-bg-spiral"><TribalSpiral /></div>
      <div className="weber-bg-symbol weber-bg-figure"><TribalStickFigure /></div>
      <div className="weber-bg-symbol weber-bg-wave"><TribalWave /></div>
      <div className="weber-bg-symbol weber-bg-triangle"><TribalTriangle /></div>
      <div className="weber-bg-orbit" />
    </div>
  );
}
