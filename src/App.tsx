import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { Menu, Maximize, ChevronRight, ChevronLeft, X, Image as ImageIcon, Quote } from 'lucide-react';
import { slides } from './data';
import type { SlideData } from './data';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [images, setImages] = useState<Record<string, string>>({});

  // Interatividade Avançada de Mouse
  const mouseX = useMotionValue<number>(0);
  const mouseY = useMotionValue<number>(0);

  useEffect(() => {
    // Definir posição inicial segura
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleImageUpload = (slideId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImages(prev => ({ ...prev, [slideId]: url }));
    }
  };

  const paginate = (newDirection: number) => {
    const nextSlide = currentSlide + newDirection;
    if (nextSlide >= 0 && nextSlide < slides.length) {
      setDirection(newDirection);
      setCurrentSlide(nextSlide);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).isContentEditable) return;
      
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        paginate(1);
      } else if (e.key === 'ArrowLeft') {
        paginate(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div ref={containerRef} className="w-screen h-screen bg-background bg-grain text-foreground overflow-hidden font-sans relative flex flex-col cursor-crosshair">
      {/* Background Geométrico Animado (Atrás do Texto) */}
      <GeometricDecorations mouseX={mouseX} mouseY={mouseY} />
      
      {/* Cursor Customizado */}
      <CustomCursor mouseX={mouseX} mouseY={mouseY} />

      {/* Número Gigante com Efeito de Cor Reversa (mix-blend-difference) - Sobre o Texto */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] font-display font-black tracking-tighter text-white mix-blend-difference pointer-events-none z-40 select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {String(currentSlide + 1).padStart(2, '0')}
        </motion.div>
      </AnimatePresence>

      <header className="absolute top-0 w-full p-6 md:p-12 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
        <div className="font-display font-black text-2xl tracking-tighter lowercase">
          argonautas<span className="text-brand-orange">.</span>
        </div>
        <div className="flex gap-6 items-center pointer-events-auto">
          <button onClick={toggleFullscreen} className="hover:opacity-60 transition-opacity" title="Tela Cheia">
            <Maximize size={24} strokeWidth={1.5} />
          </button>
          <button onClick={() => setMenuOpen(true)} className="hover:opacity-60 transition-opacity" title="Menu">
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background bg-grain z-50 flex flex-col p-6 md:p-12 text-foreground"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="font-display font-black text-2xl tracking-tighter lowercase">
                índice<span className="text-brand-orange">.</span>
              </div>
              <button onClick={() => setMenuOpen(false)} className="hover:opacity-60 transition-opacity">
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto hide-scrollbar z-50 relative pointer-events-auto">
              <ul className="flex flex-col gap-6 max-w-5xl mx-auto mt-12 pb-24">
                {slides.map((slide, idx) => (
                  <li key={slide.id}>
                    <button
                      className={`text-left text-3xl md:text-5xl font-display font-black tracking-tighter lowercase transition-colors hover:text-brand-orange ${currentSlide === idx ? 'text-foreground' : 'text-gray-400'}`}
                      onClick={() => {
                        setDirection(idx > currentSlide ? 1 : -1);
                        setCurrentSlide(idx);
                        setMenuOpen(false);
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')} — {slide.title}<span className="text-brand-orange">.</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 relative w-full h-full flex items-center justify-center z-10">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30, opacity: { duration: 0.2 } }}
            className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
          >
            <SlideContextHeader slide={slides[currentSlide]} />
            <div className="w-full h-full pointer-events-auto relative">
              <SlideContent 
                slide={slides[currentSlide]} 
                image={images[slides[currentSlide].id]}
                onImageUpload={(e) => handleImageUpload(slides[currentSlide].id, e)}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="absolute bottom-0 w-full p-6 md:p-12 flex justify-between items-end z-40 pointer-events-none mix-blend-difference text-white">
        <div className="text-sm font-medium tracking-widest uppercase opacity-70">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
        <div className="flex gap-4 pointer-events-auto">
          <button
            onClick={() => paginate(-1)}
            disabled={currentSlide === 0}
            className="p-4 border border-white/30 rounded-full hover:bg-white/10 disabled:opacity-30 transition-all cursor-pointer z-50"
          >
            <ChevronLeft size={24} strokeWidth={1} />
          </button>
          <button
            onClick={() => paginate(1)}
            disabled={currentSlide === slides.length - 1}
            className="p-4 border border-white/30 rounded-full hover:bg-white/10 disabled:opacity-30 transition-all cursor-pointer z-50"
          >
            <ChevronRight size={24} strokeWidth={1} />
          </button>
        </div>
      </footer>
    </div>
  );
}

// ---- BACKGROUND GEOMÉTRICO INTERATIVO ----
function GeometricDecorations({ mouseX, mouseY }: { mouseX: MotionValue<number>, mouseY: MotionValue<number> }) {
  const springConfig = { damping: 50, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const height = typeof window !== 'undefined' ? window.innerHeight : 1080;

  const parallaxX1 = useTransform(smoothX, [0, width], [-50, 50]);
  const parallaxY1 = useTransform(smoothY, [0, height], [-50, 50]);
  
  const parallaxX2 = useTransform(smoothX, [0, width], [80, -80]);
  const parallaxY2 = useTransform(smoothY, [0, height], [80, -80]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-multiply opacity-90">
      
      {/* SHAPES LARANJAS SÓLIDOS (Para dar vida) */}
      <motion.div 
        style={{ x: parallaxX1, y: parallaxY2 }}
        className="absolute top-[10%] right-[5%] w-[35vh] h-[35vh] md:w-[25vw] md:h-[25vw] rounded-full bg-brand-orange mix-blend-normal opacity-90"
      />
      <motion.div 
        style={{ x: parallaxX2, y: parallaxY1 }}
        className="absolute bottom-[15%] left-[5%] w-[40vw] h-[8vh] bg-brand-orange mix-blend-normal opacity-90 rotate-[-15deg]"
      />

      {/* Orbits / Dotted Circles */}
      <motion.div
        style={{ x: parallaxX1, y: parallaxY1 }}
        className="absolute top-[-10vh] left-[-10vw] w-[80vh] h-[80vh] rounded-full border-[1px] border-dashed border-foreground/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        style={{ x: parallaxX2, y: parallaxY2 }}
        className="absolute bottom-[-20vh] right-[-10vw] w-[60vh] h-[60vh] rounded-full border-[2px] border-dotted border-brand-orange/60"
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
      />

      {/* Dot Matrix Grid */}
      <motion.div 
        style={{ x: parallaxX2, y: parallaxY1 }}
        className="absolute top-[20%] left-[10%] grid grid-cols-6 gap-3 opacity-80"
      >
        {[...Array(36)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-foreground rounded-full"></div>
        ))}
      </motion.div>

      {/* Vertical Axis Line */}
      <motion.div 
        style={{ x: parallaxX1 }}
        className="absolute top-0 bottom-0 right-[25%] w-[1px] bg-foreground/20 flex flex-col items-center justify-center"
      >
         <div className="w-4 h-4 bg-brand-orange rounded-full mt-[20vh] border-2 border-background shadow-lg"></div>
         <div className="w-2 h-2 bg-foreground rounded-full mt-[40vh]"></div>
      </motion.div>

      {/* SVG Rotating Fractal / Geometric Shape */}
      <motion.svg 
        style={{ x: parallaxX1, y: parallaxY2 }}
        className="absolute bottom-[10%] right-[15%] w-64 h-64 opacity-30 pointer-events-none"
        viewBox="0 0 100 100"
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="#FF4400" strokeWidth="0.5" strokeDasharray="2 4" />
        <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="#111111" strokeWidth="0.5" />
        <polygon points="50,15 85,50 50,85 15,50" fill="none" stroke="#FF4400" strokeWidth="0.5" />
        <line x1="5" y1="50" x2="95" y2="50" stroke="#111111" strokeWidth="0.5" />
        <line x1="50" y1="5" x2="50" y2="95" stroke="#111111" strokeWidth="0.5" />
      </motion.svg>
    </div>
  );
}

// ---- CUSTOM CURSOR ----
function CustomCursor({ mouseX, mouseY }: { mouseX: MotionValue<number>, mouseY: MotionValue<number> }) {
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 border-brand-orange z-[60] pointer-events-none shadow-[0_0_15px_#FF4400]"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-orange z-[60] pointer-events-none shadow-[0_0_10px_#FF4400]"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  );
}

function SlideContextHeader({ slide }: { slide: SlideData }) {
  if (!slide.chapter && !slide.section && !slide.presenter) return null;
  
  return (
    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-7xl px-12 md:px-24 flex justify-between items-start z-40 text-xs md:text-sm font-sans uppercase tracking-widest mix-blend-difference text-white opacity-80 pointer-events-none">
      <div className="flex flex-col gap-1 pointer-events-auto">
        <span contentEditable suppressContentEditableWarning className="font-display font-black outline-none">{slide.chapter}</span>
        <span contentEditable suppressContentEditableWarning className="font-light outline-none">{slide.section}</span>
      </div>
      <div className="pointer-events-auto text-right">
        <span contentEditable suppressContentEditableWarning className="font-bold outline-none border-b border-dashed border-white/30 pb-1">{slide.presenter}</span>
      </div>
    </div>
  );
}

function ImageUploader({ slide, image, onUpload }: { slide: SlideData, image?: string, onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <label className="w-full aspect-[3/4] md:h-full md:aspect-auto max-h-[70vh] bg-gray-200 border border-gray-300 flex flex-col items-center justify-center text-gray-400 group relative overflow-hidden cursor-pointer hover:bg-gray-300 transition-colors">
      <input type="file" accept="image/*" className="hidden" onChange={onUpload} />
      {image ? (
        <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
      ) : (
        <>
          <ImageIcon size={48} className="mb-4 opacity-50 group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
          <span className="text-sm font-medium tracking-widest uppercase text-center px-4">Clique para Inserir</span>
          {slide.imagePlaceholder && (
            <span className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs font-medium italic text-gray-500 whitespace-nowrap">
              Ref: {slide.imagePlaceholder}
            </span>
          )}
        </>
      )}
    </label>
  );
}

function SlideContent({ slide, image, onImageUpload }: { slide: SlideData, image?: string, onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  switch (slide.layout) {
    case 'cover':
      return <CoverLayout slide={slide} />;
    case 'split-image':
      return <SplitImageLayout slide={slide} image={image} onUpload={onImageUpload} />;
    case 'split-block':
      return <SplitBlockLayout slide={slide} image={image} onUpload={onImageUpload} />;
    case 'impact-quote':
      return <ImpactQuoteLayout slide={slide} />;
    case 'analysis':
      return <AnalysisLayout slide={slide} />;
    case 'concept-map':
      return <ConceptMapLayout slide={slide} />;
    case 'roadmap':
      return <RoadmapLayout slide={slide} />;
    case 'content':
    default:
      return <StandardLayout slide={slide} />;
  }
}

function CoverLayout({ slide }: { slide: SlideData }) {
  return (
    <div className="max-w-6xl w-full text-center flex flex-col items-center justify-center space-y-12 p-12 mt-12 h-full overflow-y-auto hide-scrollbar py-32 bg-transparent relative z-10">
      <div className="my-auto relative z-20">
        <h1 contentEditable suppressContentEditableWarning className="text-7xl md:text-[10rem] leading-none font-display font-black tracking-tighter text-foreground lowercase outline-none drop-shadow-sm">
          {slide.title}<span className="text-brand-orange">.</span>
        </h1>
        {slide.subtitle && (
          <p contentEditable suppressContentEditableWarning className="text-xl md:text-2xl font-light text-gray-700 max-w-2xl uppercase tracking-widest whitespace-pre-line outline-none mt-8 mx-auto drop-shadow-sm">
            {slide.subtitle}
          </p>
        )}
        <div className="h-[2px] w-24 bg-brand-orange mx-auto my-12"></div>
        <div className="space-y-4 max-w-2xl mx-auto text-xl md:text-3xl font-light text-gray-800 drop-shadow-sm">
          {slide.content.map((text, i) => (
            <p key={i} contentEditable suppressContentEditableWarning className="outline-none">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImpactQuoteLayout({ slide }: { slide: SlideData }) {
  return (
    <div className="w-full h-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-12 md:p-24 text-center overflow-y-auto hide-scrollbar py-32 relative z-20">
      <div className="my-auto flex flex-col items-center z-20">
        <Quote size={80} fill="#FF4400" className="mb-12 opacity-100 md:w-32 md:h-32 text-brand-orange drop-shadow-[0_0_15px_rgba(255,68,0,0.5)]" />
        <h2 contentEditable suppressContentEditableWarning className="text-4xl md:text-7xl max-w-6xl font-display font-black tracking-tighter leading-tight lowercase z-10 outline-none">
          {slide.quote || slide.title}<span className="text-brand-orange">.</span>
        </h2>
        <div className="w-[2px] h-24 md:h-48 bg-brand-orange my-12 shadow-[0_0_10px_#FF4400]"></div>
        <div contentEditable suppressContentEditableWarning className="font-sans font-light tracking-widest uppercase text-sm md:text-base text-gray-400 outline-none">
          {slide.subtitle || 'Bronislaw Malinowski'}
        </div>
      </div>
    </div>
  );
}

function SplitBlockLayout({ slide, image, onUpload }: { slide: SlideData, image?: string, onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="w-full h-full flex flex-col md:flex-row relative z-10">
      <div className="w-full md:w-[35%] bg-transparent text-foreground flex flex-col justify-center p-12 md:p-24 z-20 relative">
        <h2 contentEditable suppressContentEditableWarning className="text-6xl md:text-[6.5rem] font-display font-black tracking-tighter leading-none lowercase outline-none pt-12 md:pt-0 drop-shadow-sm">
          {slide.title}<span className="text-brand-orange">.</span>
        </h2>
        {slide.subtitle && (
          <h3 contentEditable suppressContentEditableWarning className="mt-12 text-sm md:text-lg font-bold tracking-widest uppercase text-gray-800 outline-none drop-shadow-sm">
            {slide.subtitle}
          </h3>
        )}
      </div>
      
      <div className="w-full md:w-[30%] bg-gray-200 flex flex-col border-x border-foreground/5 relative h-64 md:h-auto z-20 shadow-xl">
        <ImageUploader slide={slide} image={image} onUpload={onUpload} />
      </div>
      
      <div className="w-full md:w-[35%] bg-[#0f0f0f] text-white flex flex-col h-full overflow-y-auto hide-scrollbar p-12 md:p-24 py-32 z-20">
        <div className="space-y-8 text-2xl md:text-4xl font-light leading-relaxed opacity-90 my-auto">
          {slide.content.map((text, i) => (
            <p key={i} contentEditable suppressContentEditableWarning className="outline-none">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function SplitImageLayout({ slide, image, onUpload }: { slide: SlideData, image?: string, onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="w-full h-full flex flex-col md:flex-row p-12 md:p-24 pt-24 md:pt-32 gap-12 md:gap-24 overflow-y-auto hide-scrollbar bg-transparent relative z-10">
      <div className="flex-1 flex justify-center items-center h-64 md:h-full w-full z-20 shadow-2xl">
        <ImageUploader slide={slide} image={image} onUpload={onUpload} />
      </div>
      <div className="flex-1 flex flex-col h-full overflow-y-auto hide-scrollbar py-12 md:py-32 z-20">
        <div className="my-auto drop-shadow-sm">
          <h2 contentEditable suppressContentEditableWarning className="text-6xl md:text-[7rem] font-display font-black tracking-tighter leading-none lowercase outline-none">
            {slide.title}<span className="text-brand-orange">.</span>
          </h2>
          {slide.subtitle && (
            <h3 contentEditable suppressContentEditableWarning className="mt-8 text-sm md:text-lg font-bold tracking-widest uppercase text-gray-800 outline-none">
              {slide.subtitle}
            </h3>
          )}
          <div className="mt-12 space-y-8 text-2xl md:text-4xl font-light text-gray-800 leading-relaxed">
            {slide.content.map((text, i) => (
              <p key={i} contentEditable suppressContentEditableWarning className="outline-none">
                {text}
              </p>
            ))}
          </div>
          {slide.quote && (
            <blockquote contentEditable suppressContentEditableWarning className="border-l-4 border-brand-orange pl-6 py-2 mt-12 text-3xl md:text-5xl font-display font-black text-foreground leading-snug outline-none lowercase">
              "{slide.quote}"
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}

function AnalysisLayout({ slide }: { slide: SlideData }) {
  return (
    <div className="w-full h-full flex flex-col md:flex-row p-12 md:p-24 gap-12 md:gap-24 items-center bg-transparent relative z-10">
      <div className="flex-1 space-y-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-foreground/10 pb-12 md:pb-0 md:pr-24 drop-shadow-sm z-20">
        <h2 contentEditable suppressContentEditableWarning className="text-6xl md:text-[7rem] font-display font-black tracking-tighter leading-none lowercase outline-none">
          {slide.title}<span className="text-brand-orange">.</span>
        </h2>
        {slide.subtitle && (
          <h3 contentEditable suppressContentEditableWarning className="text-sm md:text-lg font-bold tracking-widest uppercase text-gray-800 outline-none">
            {slide.subtitle}
          </h3>
        )}
      </div>
      <div className="flex-1 flex flex-col h-full overflow-y-auto hide-scrollbar py-32 drop-shadow-sm z-20">
        <div className="space-y-8 text-2xl md:text-4xl font-light text-gray-800 leading-relaxed my-auto">
          {slide.content.map((text, i) => (
            <p key={i} contentEditable suppressContentEditableWarning className="outline-none">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function StandardLayout({ slide }: { slide: SlideData }) {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto hide-scrollbar p-12 md:p-24 py-32 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto my-auto w-full drop-shadow-sm z-20">
        <h2 contentEditable suppressContentEditableWarning className="text-6xl md:text-[8rem] font-display font-black tracking-tighter leading-none lowercase outline-none mb-12">
          {slide.title}<span className="text-brand-orange">.</span>
        </h2>
        <div className="space-y-8 text-2xl md:text-4xl font-light text-gray-800 leading-relaxed">
          {slide.content.map((text, i) => (
            <p key={i} contentEditable suppressContentEditableWarning className="outline-none">
              {text}
            </p>
          ))}
        </div>
        {slide.quote && (
          <blockquote contentEditable suppressContentEditableWarning className="border-l-4 border-brand-orange pl-8 py-4 mt-12 text-4xl md:text-6xl font-display font-black text-foreground leading-snug outline-none lowercase">
            "{slide.quote}"
          </blockquote>
        )}
      </div>
    </div>
  );
}

function ConceptMapLayout({ slide }: { slide: SlideData }) {
  const topNodes = slide.nodes?.filter(n => n.position === 'top') || [];
  const bottomNodes = slide.nodes?.filter(n => n.position === 'bottom') || [];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-12 md:p-24 bg-transparent text-foreground overflow-y-auto hide-scrollbar py-32 relative z-10">
      <div className="my-auto flex flex-col items-center w-full drop-shadow-sm z-20">
        {/* Top Nodes */}
        <div className="flex w-full justify-center gap-6 md:gap-24 mb-8 items-end flex-wrap">
          {topNodes.map((node, i) => (
            <div key={i} className="flex flex-col items-center max-w-[280px] text-center">
              <div className="mb-4 space-y-4">
                <h4 contentEditable suppressContentEditableWarning className="font-display font-black text-xl md:text-2xl uppercase tracking-widest outline-none">{node.title}</h4>
                {node.subtitle && <h5 contentEditable suppressContentEditableWarning className="text-sm font-bold uppercase tracking-widest text-brand-orange outline-none">{node.subtitle}</h5>}
                <p contentEditable suppressContentEditableWarning className="font-sans font-light text-sm md:text-lg outline-none text-gray-800 leading-relaxed">{node.text}</p>
              </div>
              <div className="flex flex-col items-center opacity-80">
                <div className="w-3 h-3 rounded-full bg-brand-orange"></div>
                <div className="w-[2px] h-12 md:h-24 bg-foreground"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Central Word */}
        <h2 contentEditable suppressContentEditableWarning className="text-7xl md:text-[11rem] font-display font-black tracking-tighter lowercase leading-none outline-none z-10 bg-background/70 backdrop-blur-sm px-8 py-4 rounded-[4rem]">
          {slide.title}<span className="text-brand-orange">.</span>
        </h2>

        {/* Bottom Nodes */}
        <div className="flex w-full justify-center gap-6 md:gap-24 mt-8 items-start flex-wrap">
          {bottomNodes.map((node, i) => (
            <div key={i} className="flex flex-col items-center max-w-[280px] text-center">
              <div className="flex flex-col items-center mb-4 opacity-80">
                <div className="w-[2px] h-12 md:h-24 bg-foreground"></div>
                <div className="w-3 h-3 rounded-full bg-brand-orange"></div>
              </div>
              <div className="space-y-4">
                <h4 contentEditable suppressContentEditableWarning className="font-display font-black text-xl md:text-2xl uppercase tracking-widest outline-none">{node.title}</h4>
                {node.subtitle && <h5 contentEditable suppressContentEditableWarning className="text-sm font-bold uppercase tracking-widest text-brand-orange outline-none">{node.subtitle}</h5>}
                <p contentEditable suppressContentEditableWarning className="font-sans font-light text-sm md:text-lg outline-none text-gray-800 leading-relaxed">{node.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RoadmapLayout({ slide }: { slide: SlideData }) {
  const nodes = slide.nodes || [];
  
  return (
    <div className="w-full h-full flex flex-col justify-center bg-transparent text-foreground relative p-12 pt-32 overflow-hidden z-10">
      <div className="absolute top-24 md:top-32 w-full text-center z-20 drop-shadow-sm">
         <h2 contentEditable suppressContentEditableWarning className="text-6xl md:text-[8rem] font-display font-black tracking-tighter leading-none lowercase outline-none">
          {slide.title}<span className="text-brand-orange">.</span>
        </h2>
        {slide.subtitle && (
          <h3 contentEditable suppressContentEditableWarning className="mt-8 text-sm md:text-lg font-bold tracking-widest uppercase text-gray-800 outline-none">
            {slide.subtitle}
          </h3>
        )}
      </div>

      <div className="relative w-full mt-32 h-96 flex items-center max-w-7xl mx-auto overflow-x-auto hide-scrollbar drop-shadow-sm z-20">
        {/* Horizontal Line */}
        <div className="absolute left-0 right-0 h-1 bg-foreground"></div>
        
        {/* The Nodes */}
        <div className="w-full flex justify-between px-12 md:px-24 z-10 relative gap-12">
           {nodes.map((node, i) => {
             const isTop = i % 2 === 0;
             return (
               <div key={i} className="relative flex flex-col items-center w-64 flex-shrink-0">
                  {/* Node Point */}
                  <div className="w-5 h-5 bg-brand-orange absolute top-1/2 -translate-y-1/2 transform rotate-45 border-2 border-background"></div>
                  
                  {/* Content */}
                  <div className={`absolute w-full flex flex-col items-center text-center ${isTop ? 'bottom-8' : 'top-8'}`}>
                     {isTop && (
                       <>
                         <span contentEditable suppressContentEditableWarning className="text-xs font-bold text-white bg-foreground px-3 py-1 uppercase tracking-widest mb-4 outline-none">{node.title}</span>
                         <h4 contentEditable suppressContentEditableWarning className="font-display font-black text-2xl lowercase outline-none text-brand-orange">{node.subtitle}</h4>
                         <p contentEditable suppressContentEditableWarning className="font-sans font-light text-sm mt-2 outline-none font-medium">{node.text}</p>
                       </>
                     )}
                     {!isTop && (
                       <>
                         <h4 contentEditable suppressContentEditableWarning className="font-display font-black text-2xl lowercase outline-none text-brand-orange">{node.subtitle}</h4>
                         <p contentEditable suppressContentEditableWarning className="font-sans font-light text-sm mt-2 mb-4 outline-none font-medium">{node.text}</p>
                         <span contentEditable suppressContentEditableWarning className="text-xs font-bold text-white bg-foreground px-3 py-1 uppercase tracking-widest outline-none">{node.title}</span>
                       </>
                     )}
                  </div>
               </div>
             )
           })}
        </div>
      </div>
    </div>
  )
}

export default App;
