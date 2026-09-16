import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { Menu, Maximize, Minimize, ChevronRight, ChevronLeft, X, Image as ImageIcon, Quote } from 'lucide-react';
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

function SlideWrapper({ slide, children }: { slide: SlideData, children: React.ReactNode }) {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const wrapper = document.querySelector("[data-slide-wrapper='" + slide.id + "']");
      if (!wrapper) return;
      const editables = wrapper.querySelectorAll('[contenteditable]');
      editables.forEach((el, index) => {
        const key = "slide-" + slide.id + "-edit-" + index;
        const saved = localStorage.getItem(key);
        if (saved !== null && el.innerHTML !== saved) {
          el.innerHTML = saved;
        }
        el.addEventListener('input', () => {
          localStorage.setItem(key, el.innerHTML);
        });
      });
    }, 50);
    return () => clearTimeout(timeout);
  }, [slide.id]);
  return <div data-slide-wrapper={slide.id} className="w-full h-full">{children}</div>;
}
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [images, setImages] = useState<Record<string, string>>(() => { const saved = localStorage.getItem("presentation-images"); return saved ? JSON.parse(saved) : {}; }); useEffect(() => { localStorage.setItem("presentation-images", JSON.stringify(images)); }, [images]);

  // Interatividade Avançada de Mouse
  const mouseX = useMotionValue<number>(0);
  const mouseY = useMotionValue<number>(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    if (window.innerWidth >= 768) {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return; // Prevent heavy calculations on mobile
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

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
    <div ref={containerRef} className="w-dvw h-dvh bg-background bg-grain text-foreground overflow-hidden font-sans relative flex flex-col cursor-crosshair">
      {/* Background Geométrico Limpo (Atrás do Texto) */}
      <GeometricDecorations slideIndex={currentSlide} mouseX={mouseX} mouseY={mouseY} isMobile={isMobile} />

      <header className="hidden md:flex absolute top-0 w-full p-6 md:p-12 justify-between items-start z-50 mix-blend-difference text-white pointer-events-none">
        <div className="flex flex-col gap-2 md:gap-4 items-start pointer-events-auto">
          <div className="font-display font-black text-xl md:text-2xl tracking-tighter lowercase">
            argonautas<span className="text-brand-orange">.</span>
          </div>
          {(slides[currentSlide].chapter || slides[currentSlide].section) && (
            <div className="flex flex-col text-[10px] md:text-xs font-sans uppercase tracking-widest text-gray-300 opacity-80">
              <span key={`cap-${currentSlide}`} contentEditable suppressContentEditableWarning className="font-black outline-none">{slides[currentSlide].chapter}</span>
              <span key={`sec-${currentSlide}`} contentEditable suppressContentEditableWarning className="font-light outline-none">{slides[currentSlide].section}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col items-end gap-2 md:gap-4 pointer-events-auto">
          <div className="flex gap-4 md:gap-6 items-center">
            <button onClick={toggleFullscreen} className="hover:opacity-60 transition-opacity" title={isFullscreen ? "Sair da Tela Cheia" : "Tela Cheia"}>
              {isFullscreen ? <Minimize size={24} strokeWidth={1.5} /> : <Maximize size={24} strokeWidth={1.5} />}
            </button>
            <button onClick={() => setMenuOpen(true)} className="hover:opacity-60 transition-opacity" title="Menu">
              <Menu size={28} strokeWidth={1.5} />
            </button>
          </div>
          {slides[currentSlide].presenter && (
            <span key={`pres-${currentSlide}`} contentEditable suppressContentEditableWarning className="text-[10px] md:text-xs font-bold font-sans uppercase tracking-widest text-gray-300 opacity-80 outline-none border-b border-dashed border-gray-400/50 pb-1 mt-1">
              {slides[currentSlide].presenter}
            </span>
          )}
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
            <div className="flex justify-between items-center mb-6 md:mb-12">
              <div className="font-display font-black text-2xl tracking-tighter lowercase">
                índice<span className="text-brand-orange">.</span>
              </div>
              <button onClick={() => setMenuOpen(false)} className="hover:opacity-60 transition-opacity">
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto hide-scrollbar z-50 relative pointer-events-auto">
              <ul className="flex flex-col gap-4 md:gap-6 max-w-5xl mx-auto mt-6 md:mt-12 pb-24">
                {slides.map((slide, idx) => (
                  <li key={slide.id}>
                    <button
                      className={`text-left text-2xl md:text-5xl font-display font-black tracking-tighter lowercase transition-colors hover:text-brand-orange ${currentSlide === idx ? 'text-foreground' : 'text-gray-400'}`}
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
            <div className="w-full h-full pointer-events-auto relative mobile-scroll-container hide-scrollbar flex flex-col">
                {/* MOBILE SCROLLING HEADER */}
                <header className="md:hidden w-full p-6 pt-8 flex justify-between items-start z-50 mix-blend-difference text-white pointer-events-none shrink-0">
                  <div className="flex flex-col gap-2 items-start pointer-events-auto">
                    <div className="font-display font-black text-xl tracking-tighter lowercase">
                      argonautas<span className="text-brand-orange">.</span>
                    </div>
                    {(slides[currentSlide].chapter || slides[currentSlide].section) && (
                      <div className="flex flex-col text-[10px] font-sans uppercase tracking-widest text-gray-300 opacity-80">
                        <span className="font-black outline-none">{slides[currentSlide].chapter}</span>
                        <span className="font-light outline-none">{slides[currentSlide].section}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-2 pointer-events-auto">
                    <div className="flex gap-4 items-center">
                      <button onClick={toggleFullscreen} className="hover:opacity-60 transition-opacity">
                        {isFullscreen ? <Minimize size={24} strokeWidth={1.5} /> : <Maximize size={24} strokeWidth={1.5} />}
                      </button>
                      <button onClick={() => setMenuOpen(true)} className="hover:opacity-60 transition-opacity">
                        <Menu size={28} strokeWidth={1.5} />
                      </button>
                    </div>
                    {slides[currentSlide].presenter && (
                      <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-gray-300 opacity-80 outline-none border-b border-dashed border-gray-400/50 pb-1 mt-1">
                        {slides[currentSlide].presenter}
                      </span>
                    )}
                  </div>
                </header>
              <SlideWrapper slide={slides[currentSlide]}><SlideContent 
                slide={slides[currentSlide]} 
                image={images[slides[currentSlide].id]}
                onImageUpload={(e) => handleImageUpload(slides[currentSlide].id, e)}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

              {/* SIDE NAVIGATION ARROWS (ALWAYS VISIBLE) */}
        <div className="fixed inset-y-0 left-0 flex items-center z-[100] pointer-events-none">
          <button 
            onClick={() => paginate(-1)} 
            disabled={currentSlide === 0} 
            className="p-2 md:p-6 hover:bg-foreground/5 disabled:opacity-20 transition-all pointer-events-auto h-3/4 flex items-center group"
          >
            <ChevronLeft size={isMobile ? 32 : 48} strokeWidth={1} className="text-foreground/50 group-hover:text-foreground transition-colors" />
          </button>
        </div>
        
        <div className="fixed inset-y-0 right-0 flex items-center z-[100] pointer-events-none">
          <button 
            onClick={() => paginate(1)} 
            disabled={currentSlide === slides.length - 1} 
            className="p-2 md:p-6 hover:bg-foreground/5 disabled:opacity-20 transition-all pointer-events-auto h-3/4 flex items-center group"
          >
            <ChevronRight size={isMobile ? 32 : 48} strokeWidth={1} className="text-brand-orange/50 group-hover:text-brand-orange transition-colors" />
          </button>
        </div>
{/* DESKTOP FOOTER & COUNTER */}
      <footer className="absolute bottom-6 md:bottom-0 w-full p-6 md:p-12 flex justify-between items-end z-40 pointer-events-none mix-blend-difference text-white">
        <div className="text-xs md:text-sm font-medium tracking-widest uppercase opacity-70">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
        </footer>
    </div>
  );
}

// ---- BACKGROUND GEOMÉTRICO MINIMALISTA ----
function GeometricDecorations({ slideIndex, mouseX, mouseY, isMobile }: { slideIndex: number, mouseX: MotionValue<number>, mouseY: MotionValue<number>, isMobile: boolean }) {
  const springConfig = { damping: 50, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const height = typeof window !== 'undefined' ? window.innerHeight : 1080;

  const parallaxX1 = useTransform(smoothX, [0, width], [-30, 30]);
  const parallaxY1 = useTransform(smoothY, [0, height], [-30, 30]);
  
  const parallaxX2 = useTransform(smoothX, [0, width], [40, -40]);

  // Modo Otimizado para Mobile (Fixo, sem framer-motion pesados)
  if (isMobile) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-multiply opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80vw] font-display font-black tracking-tighter text-foreground/[0.03] select-none">
          {String(slideIndex + 1).padStart(2, '0')}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-multiply opacity-60">
      
      {/* Huge Number Watermark (Very Subtle) */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={slideIndex}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] font-display font-black tracking-tighter text-foreground/[0.03] select-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {String(slideIndex + 1).padStart(2, '0')}
        </motion.div>
      </AnimatePresence>

      {/* Orbits / Dotted Circles (Low Opacity) */}
      <motion.div
        style={{ x: parallaxX1, y: parallaxY1 }}
        className="absolute top-[-10vh] left-[-10vw] w-[80vh] h-[80vh] rounded-full border-[1px] border-dashed border-foreground/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Dot Matrix Grid (Low Opacity) */}
      <motion.div 
        style={{ x: parallaxX2, y: parallaxY1 }}
        className="absolute top-[20%] left-[10%] grid grid-cols-6 gap-3 opacity-20"
      >
        {[...Array(36)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-foreground rounded-full"></div>
        ))}
      </motion.div>

      {/* Vertical Axis Line (Minimalist Orange Accent) */}
      <motion.div 
        style={{ x: parallaxX1 }}
        className="absolute top-0 bottom-0 right-[25%] w-[1px] bg-foreground/10 flex flex-col items-center justify-center"
      >
         <div className="w-2 h-2 bg-brand-orange rounded-full mt-[20vh] shadow-[0_0_10px_#FF4400]"></div>
      </motion.div>

    </div>
  );
}




function ImageUploader({ slide, image, onUpload }: { slide: SlideData, image?: string, onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <label className="w-full h-full min-h-[30vh] bg-gray-200 border border-gray-300 flex flex-col items-center justify-center text-gray-400 group relative overflow-hidden cursor-pointer hover:bg-gray-300 transition-colors">
      <input type="file" accept="image/*" className="hidden" onChange={onUpload} />
      {image ? (
        <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
      ) : (
        <>
          <ImageIcon size={48} className="mb-4 opacity-50 group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
          <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-center px-4">Clique para Inserir</span>
          {slide.imagePlaceholder && (
            <span className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-medium italic text-gray-500 whitespace-nowrap">
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
    <div className="max-w-6xl w-full text-center flex flex-col items-center justify-center space-y-8 md:space-y-12 p-6 md:p-12 mt-12 h-full overflow-y-auto hide-scrollbar py-24 md:py-32 bg-transparent relative z-10">
      <div className="my-auto relative z-20 w-full">
        <h1 contentEditable suppressContentEditableWarning className="text-5xl md:text-[10rem] leading-none font-display font-black tracking-tighter text-foreground lowercase outline-none drop-shadow-sm break-words">
          {slide.title}<span className="text-brand-orange">.</span>
        </h1>
        {slide.subtitle && (
          <p contentEditable suppressContentEditableWarning className="text-base md:text-2xl font-light text-gray-700 max-w-2xl uppercase tracking-widest whitespace-pre-line outline-none mt-6 md:mt-8 mx-auto drop-shadow-sm px-4">
            {slide.subtitle}
          </p>
        )}
        <div className="h-[2px] w-16 md:w-24 bg-brand-orange mx-auto my-8 md:my-12"></div>
        <div className="space-y-4 max-w-2xl mx-auto text-lg md:text-3xl font-light text-gray-800 drop-shadow-sm px-4">
          {slide.content.map((text, i) => (
            <p key={i} contentEditable suppressContentEditableWarning className="outline-none" 
              dangerouslySetInnerHTML={{ __html: text }}></p>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImpactQuoteLayout({ slide }: { slide: SlideData }) {
  return (
    <div className="w-full h-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 md:p-24 text-center overflow-y-auto hide-scrollbar py-24 md:py-32 relative z-20">
      <div className="my-auto flex flex-col items-center z-20 px-4">
        <Quote className="mb-8 md:mb-12 opacity-100 w-16 h-16 md:w-32 md:h-32 text-brand-orange drop-shadow-[0_0_15px_rgba(255,68,0,0.5)]" fill="#FF4400" />
        <h2 contentEditable suppressContentEditableWarning className="text-3xl md:text-7xl max-w-6xl font-display font-black tracking-tighter leading-tight lowercase z-10 outline-none">
          {slide.quote || slide.title}<span className="text-brand-orange">.</span>
        </h2>
        <div className="w-[2px] h-16 md:h-48 bg-brand-orange my-8 md:my-12 shadow-[0_0_10px_#FF4400]"></div>
        <div contentEditable suppressContentEditableWarning className="font-sans font-light tracking-widest uppercase text-[10px] md:text-base text-gray-400 outline-none">
          {slide.subtitle || 'Bronislaw Malinowski'}
        </div>
      </div>
    </div>
  );
}

function SplitBlockLayout({ slide, image, onUpload }: { slide: SlideData, image?: string, onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="w-full h-full flex flex-col md:flex-row relative z-10 overflow-y-auto md:overflow-hidden hide-scrollbar">
      <div className="w-full md:w-[35%] min-h-[40vh] md:min-h-0 bg-transparent text-foreground flex flex-col justify-center p-8 md:p-24 z-20 relative pt-32 md:pt-24">
        <h2 contentEditable suppressContentEditableWarning className="text-4xl md:text-[6.5rem] font-display font-black tracking-tighter leading-none lowercase outline-none drop-shadow-sm break-words">
          {slide.title}<span className="text-brand-orange">.</span>
        </h2>
        {slide.subtitle && (
          <h3 contentEditable suppressContentEditableWarning className="mt-6 md:mt-12 text-xs md:text-lg font-bold tracking-widest uppercase text-gray-800 outline-none drop-shadow-sm">
            {slide.subtitle}
          </h3>
        )}
      </div>
      
      <div className="w-full md:w-[30%] min-h-[30vh] md:min-h-0 bg-gray-200 flex flex-col border-y md:border-x border-foreground/5 relative z-20 shadow-xl">
        <ImageUploader slide={slide} image={image} onUpload={onUpload} />
      </div>
      
      <div className="w-full md:w-[35%] bg-[#0f0f0f] text-white flex flex-col h-auto md:h-full overflow-y-visible md:overflow-y-auto hide-scrollbar p-8 md:p-24 py-16 md:py-32 z-20">
        <div className="space-y-6 md:space-y-8 text-xl md:text-4xl font-light leading-relaxed opacity-90 my-auto">
          {slide.content.map((text, i) => (
            <p key={i} contentEditable suppressContentEditableWarning className="outline-none" 
              dangerouslySetInnerHTML={{ __html: text }}></p>
          ))}
        </div>
      </div>
    </div>
  );
}

function SplitImageLayout({ slide, image, onUpload }: { slide: SlideData, image?: string, onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="w-full h-full flex flex-col md:flex-row p-6 md:p-24 pt-24 md:pt-32 gap-8 md:gap-24 overflow-y-auto hide-scrollbar bg-transparent relative z-10">
      <div className="flex-1 flex justify-center items-center min-h-[30vh] md:min-h-0 md:h-full z-20 shadow-2xl">
        <ImageUploader slide={slide} image={image} onUpload={onUpload} />
      </div>
      <div className="flex-1 flex flex-col h-full overflow-y-visible md:overflow-y-auto hide-scrollbar pb-12 md:py-32 z-20">
        <div className="my-auto drop-shadow-sm">
          <h2 contentEditable suppressContentEditableWarning className="text-4xl md:text-[7rem] font-display font-black tracking-tighter leading-none lowercase outline-none break-words">
            {slide.title}<span className="text-brand-orange">.</span>
          </h2>
          {slide.subtitle && (
            <h3 contentEditable suppressContentEditableWarning className="mt-4 md:mt-8 text-xs md:text-lg font-bold tracking-widest uppercase text-gray-800 outline-none">
              {slide.subtitle}
            </h3>
          )}
          <div className="mt-8 md:mt-12 space-y-6 md:space-y-8 text-lg md:text-4xl font-light text-gray-800 leading-relaxed">
            {slide.content.map((text, i) => (
              <p key={i} contentEditable suppressContentEditableWarning className="outline-none" 
                dangerouslySetInnerHTML={{ __html: text }}></p>
            ))}
          </div>
          {slide.quote && (
            <blockquote contentEditable suppressContentEditableWarning className="border-l-4 border-brand-orange pl-4 md:pl-6 py-2 mt-8 md:mt-12 text-2xl md:text-5xl font-display font-black text-foreground leading-snug outline-none lowercase">
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
    <div className="w-full h-full flex flex-col md:flex-row p-6 md:p-24 gap-8 md:gap-24 items-start md:items-center bg-transparent relative z-10 overflow-y-auto hide-scrollbar">
      <div className="flex-1 space-y-4 md:space-y-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-foreground/10 pb-8 md:pb-0 md:pr-24 drop-shadow-sm z-20 mt-24 md:mt-0">
        <h2 contentEditable suppressContentEditableWarning className="text-4xl md:text-[7rem] font-display font-black tracking-tighter leading-none lowercase outline-none break-words">
          {slide.title}<span className="text-brand-orange">.</span>
        </h2>
        {slide.subtitle && (
          <h3 contentEditable suppressContentEditableWarning className="text-xs md:text-lg font-bold tracking-widest uppercase text-gray-800 outline-none">
            {slide.subtitle}
          </h3>
        )}
      </div>
      <div className="flex-1 flex flex-col h-auto md:h-full overflow-y-visible md:overflow-y-auto hide-scrollbar pb-12 md:py-32 drop-shadow-sm z-20">
        <div className="space-y-6 md:space-y-8 text-lg md:text-4xl font-light text-gray-800 leading-relaxed my-auto">
          {slide.content.map((text, i) => (
            <p key={i} contentEditable suppressContentEditableWarning className="outline-none" 
              dangerouslySetInnerHTML={{ __html: text }}></p>
          ))}
        </div>
      </div>
    </div>
  );
}

function StandardLayout({ slide }: { slide: SlideData }) {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto hide-scrollbar p-6 md:p-24 py-24 md:py-32 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto my-auto w-full drop-shadow-sm z-20">
        <h2 contentEditable suppressContentEditableWarning className="text-4xl md:text-[8rem] font-display font-black tracking-tighter leading-none lowercase outline-none mb-8 md:mb-12 break-words mt-8 md:mt-0">
          {slide.title}<span className="text-brand-orange">.</span>
        </h2>
        <div className="space-y-6 md:space-y-8 text-lg md:text-4xl font-light text-gray-800 leading-relaxed">
          {slide.content.map((text, i) => (
            <p key={i} contentEditable suppressContentEditableWarning className="outline-none" 
              dangerouslySetInnerHTML={{ __html: text }}></p>
          ))}
        </div>
        {slide.quote && (
          <blockquote contentEditable suppressContentEditableWarning className="border-l-4 border-brand-orange pl-4 md:pl-8 py-2 md:py-4 mt-8 md:mt-12 text-2xl md:text-6xl font-display font-black text-foreground leading-snug outline-none lowercase">
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
    <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-24 bg-transparent text-foreground overflow-y-auto hide-scrollbar py-24 md:py-32 relative z-10">
      <div className="my-auto flex flex-col items-center w-full drop-shadow-sm z-20 mt-12 md:mt-0">
        {/* Top Nodes */}
        <div className="flex w-full justify-center gap-4 md:gap-24 mb-6 md:mb-8 items-end flex-wrap">
          {topNodes.map((node, i) => (
            <div key={i} className="flex flex-col items-center w-[140px] md:w-[280px] text-center">
              <div className="mb-2 md:mb-4 space-y-2 md:space-y-4">
                <h4 contentEditable suppressContentEditableWarning className="font-display font-black text-base md:text-2xl uppercase tracking-widest outline-none">{node.title}</h4>
                {node.subtitle && <h5 contentEditable suppressContentEditableWarning className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-brand-orange outline-none">{node.subtitle}</h5>}
                <p contentEditable suppressContentEditableWarning className="font-sans font-light text-xs md:text-lg outline-none text-gray-800 leading-relaxed hidden md:block">{node.text}</p>
              </div>
              <div className="flex flex-col items-center opacity-80">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-brand-orange"></div>
                <div className="w-[2px] h-6 md:h-12 bg-foreground"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Central Word */}
        <h2 contentEditable suppressContentEditableWarning className="text-4xl md:text-[11rem] font-display font-black tracking-tighter lowercase leading-none outline-none z-10 bg-background/80 backdrop-blur-md px-6 py-3 md:px-8 md:py-4 rounded-3xl md:rounded-[4rem] break-words text-center">
          {slide.title}<span className="text-brand-orange">.</span>
        </h2>

        {/* Bottom Nodes */}
        <div className="flex w-full justify-center gap-4 md:gap-24 mt-6 md:mt-8 items-start flex-wrap">
          {bottomNodes.map((node, i) => (
            <div key={i} className="flex flex-col items-center w-[140px] md:w-[280px] text-center">
              <div className="flex flex-col items-center mb-2 md:mb-4 opacity-80">
                <div className="w-[2px] h-6 md:h-12 bg-foreground"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-brand-orange"></div>
              </div>
              <div className="space-y-2 md:space-y-4">
                <h4 contentEditable suppressContentEditableWarning className="font-display font-black text-base md:text-2xl uppercase tracking-widest outline-none">{node.title}</h4>
                {node.subtitle && <h5 contentEditable suppressContentEditableWarning className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-brand-orange outline-none">{node.subtitle}</h5>}
                <p contentEditable suppressContentEditableWarning className="font-sans font-light text-xs md:text-lg outline-none text-gray-800 leading-relaxed hidden md:block">{node.text}</p>
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
    <div className="w-full h-full flex flex-col md:justify-center bg-transparent text-foreground relative p-6 md:p-12 pt-32 md:pt-32 overflow-hidden z-10">
      <div className="absolute top-20 md:top-32 w-full text-center z-20 drop-shadow-sm px-4">
         <h2 contentEditable suppressContentEditableWarning className="text-4xl md:text-[8rem] font-display font-black tracking-tighter leading-none lowercase outline-none">
          {slide.title}<span className="text-brand-orange">.</span>
        </h2>
        {slide.subtitle && (
          <h3 contentEditable suppressContentEditableWarning className="mt-4 md:mt-8 text-xs md:text-lg font-bold tracking-widest uppercase text-gray-800 outline-none">
            {slide.subtitle}
          </h3>
        )}
      </div>

      {/* Desktop Timeline (Horizontal) */}
      <div className="hidden md:flex relative w-full mt-32 h-96 items-center max-w-7xl mx-auto overflow-x-auto hide-scrollbar drop-shadow-sm z-20">
        <div className="absolute left-0 right-0 h-[2px] bg-foreground"></div>
        <div className="w-full flex justify-between px-24 z-10 relative gap-12">
           {nodes.map((node, i) => {
             const isTop = i % 2 === 0;
             return (
               <div key={i} className="relative flex flex-col items-center w-64 flex-shrink-0">
                  <div className="w-5 h-5 bg-brand-orange absolute top-1/2 -translate-y-1/2 transform rotate-45 border-2 border-background"></div>
                  <div className={`absolute w-full flex flex-col items-center text-center ${isTop ? 'bottom-8' : 'top-8'}`}>
                     {isTop && (
                       <>
                         <span contentEditable suppressContentEditableWarning className="text-xs font-bold text-white bg-foreground px-2 py-1 uppercase tracking-widest mb-4 outline-none">{node.title}</span>
                         <h4 contentEditable suppressContentEditableWarning className="font-display font-black text-2xl lowercase outline-none text-brand-orange">{node.subtitle}</h4>
                         <p contentEditable suppressContentEditableWarning className="font-sans font-light text-sm mt-2 outline-none font-medium line-clamp-3">{node.text}</p>
                       </>
                     )}
                     {!isTop && (
                       <>
                         <h4 contentEditable suppressContentEditableWarning className="font-display font-black text-2xl lowercase outline-none text-brand-orange">{node.subtitle}</h4>
                         <p contentEditable suppressContentEditableWarning className="font-sans font-light text-sm mt-2 mb-4 outline-none font-medium line-clamp-3">{node.text}</p>
                         <span contentEditable suppressContentEditableWarning className="text-xs font-bold text-white bg-foreground px-2 py-1 uppercase tracking-widest outline-none">{node.title}</span>
                       </>
                     )}
                  </div>
               </div>
             )
           })}
        </div>
      </div>

      {/* Mobile Timeline (Vertical) */}
      <div className="md:hidden relative w-full mt-12 h-full flex flex-col items-start overflow-y-auto hide-scrollbar z-20 px-4 pb-24">
         <div className="absolute left-[23px] top-4 bottom-12 w-[2px] bg-foreground/20"></div>
         <div className="w-full flex flex-col justify-start z-10 relative gap-10 py-4">
            {nodes.map((node, i) => (
              <div key={i} className="relative flex items-start w-full">
                 <div className="w-4 h-4 bg-brand-orange absolute left-[15px] top-2 transform rotate-45 border-2 border-background shadow-sm"></div>
                 <div className="ml-12 flex flex-col items-start text-left w-full pr-4">
                    <span contentEditable suppressContentEditableWarning className="text-[10px] font-bold text-white bg-foreground px-2 py-1 uppercase tracking-widest mb-2 outline-none">{node.title}</span>
                    <h4 contentEditable suppressContentEditableWarning className="font-display font-black text-xl lowercase outline-none text-brand-orange leading-none mb-1">{node.subtitle}</h4>
                    <p contentEditable suppressContentEditableWarning className="font-sans font-light text-sm outline-none font-medium text-gray-700">{node.text}</p>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  )
}

export default App;










