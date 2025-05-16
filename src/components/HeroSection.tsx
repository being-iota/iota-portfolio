import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useCursorStore } from '../store/useStore';
import { gsap } from 'gsap';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { updateVariant, setText } = useCursorStore();

  useEffect(() => {
    if (!heroRef.current) return;
    const onScroll = () => {
      const scrollPos = window.scrollY;
      if (heroRef.current) {
        gsap.to(heroRef.current.querySelector('.hero-content'), {
          y: scrollPos * 0.4,
          duration: 1,
          ease: 'power2.out'
        });
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
    >
      <div className="absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
      <div className="hero-content container mx-auto px-4 md:px-6 z-20 pt-16 pb-10 sm:pb-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-3 leading-tight">
            Ratnapriya
          </h1>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
            Crafting Tech That Cares
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl">
            I work on AI, Full Stack Development, and Design, building scalable, production-ready solutions that solve complex problems efficiently. I ship fast, break nothing, and focus on clean, maintainable code.
          </p>
          {/* Socials and Contact */}
          <div className="flex flex-row items-center gap-4 mb-10">
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-blue-500/20 transition-colors shadow hover:shadow-lg text-xl text-white hover:text-blue-300">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-blue-500/20 transition-colors shadow hover:shadow-lg text-xl text-white hover:text-blue-300">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#contact" className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 hover:bg-blue-700 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="20" x="2" y="2" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
              Contact Me
            </a>
          </div>
          {/* Stats */}
          <div className="flex items-center gap-8 mb-4">
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-white">10</span>
              <span className="text-xs text-blue-100">Projects Built</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-white">1+</span>
              <span className="text-xs text-blue-100">Years of Exp</span>
            </div>
          </div>
        </div>
        {/* Right: 2x2 grid of images */}
        <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-8">
          <motion.div initial={{ rotate: -10, opacity: 0, y: 30 }} animate={{ rotate: -10, opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="rounded-2xl overflow-hidden shadow-lg border border-white/10 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 bg-blue-800">
            <img src="/img1.jpg" alt="1" className="w-full h-full object-cover aspect-square" />
          </motion.div>
          <motion.div initial={{ rotate: 12, opacity: 0, y: 30 }} animate={{ rotate: 12, opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-2xl overflow-hidden shadow-lg border border-white/10 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 bg-blue-800">
            <img src="/img2.jpg" alt="2" className="w-full h-full object-cover aspect-square" />
          </motion.div>
          <motion.div initial={{ rotate: 8, opacity: 0, y: 30 }} animate={{ rotate: 8, opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="rounded-2xl overflow-hidden shadow-lg border border-white/10 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 bg-blue-800">
            <img src="/img3.jpg" alt="3" className="w-full h-full object-cover aspect-square" />
          </motion.div>
          <motion.div initial={{ rotate: -13, opacity: 0, y: 30 }} animate={{ rotate: -13, opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="rounded-2xl overflow-hidden shadow-lg border border-white/10 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 bg-blue-800">
            <img src="/img4.jpg" alt="4" className="w-full h-full object-cover aspect-square" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}