import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useCursorStore } from '../store/useStore';
import { gsap } from 'gsap';
import Hero3D from './Hero3D';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { updateVariant, setText } = useCursorStore();
  
  useEffect(() => {
    if (!heroRef.current) return;
    
    // Enhanced parallax effect on scroll
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D blob background */}
      <Hero3D />

      {/* Your image, centered and above the 3D blob */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
        <img 
          src="/ratnapriya.jpg" 
          alt="Ratnapriya" 
          className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-primary-400 shadow-xl object-cover bg-dark-400" 
          style={{ objectPosition: 'center' }}
        />
      </div>

      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-400/95 to-dark-300/90 z-0"></div>
      {/* Silhouette image in background (optional, can be removed for more minimal look) */}
      {/* <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Tech silhouette" 
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* Hero content */}
      <div className="hero-content container mx-auto px-4 md:px-6 z-20 pt-20 pb-10 sm:pb-20 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mt-56 md:mt-72"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-shadow leading-tight">
            <span className="block text-light-100">Hi, I'm </span>
            <span className="gradient-text block">Ratnapriya</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-base xs:text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-light-300/90"
          >
            CSE + Data Science Student | AI Enthusiast | Designer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-500 text-base sm:text-lg font-medium text-center"
              onMouseEnter={() => {
                updateVariant('button');
                setText('View Projects');
              }}
              onMouseLeave={() => updateVariant('default')}
            >
              Explore My Work
            </a>
            
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-6 py-3 border border-primary-500/50 text-light-100 rounded-full hover:bg-primary-500/10 transition-all duration-500 text-base sm:text-lg font-medium text-center"
              onMouseEnter={() => {
                updateVariant('button');
                setText('Get In Touch');
              }}
              onMouseLeave={() => updateVariant('default')}
            >
              Connect With Me
            </a>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-10 text-light-100"
          >
            <span className="text-shadow">"Crafting Tech That Cares"</span>
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}