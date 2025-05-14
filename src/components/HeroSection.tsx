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
      <div className="hero-content container mx-auto px-4 md:px-6 z-20 pt-16 pb-10 sm:pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-[45%]"
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-primary-500/40 shadow-2xl shadow-primary-500/30 hover:shadow-primary-500/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 mix-blend-overlay"></div>
              <img 
                src="/your-image.jpg" 
                alt="Ratnapriya" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-[55%] text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-shadow leading-tight">
              <span className="block text-light-100 mb-2">Hi, I'm </span>
              <span className="gradient-text block bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 animate-gradient">Ratnapriya</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-light-300/90 font-medium"
            >
              CSE + Data Science Student | AI Enthusiast | Designer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 sm:gap-8 mb-10 sm:mb-14"
            >
              <a 
                href="#projects" 
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full hover:shadow-lg hover:shadow-primary-500/30 hover:scale-105 transition-all duration-500 text-lg sm:text-xl font-medium text-center"
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
                className="w-full sm:w-auto px-8 py-4 border-2 border-primary-500/50 text-light-100 rounded-full hover:bg-primary-500/10 hover:scale-105 transition-all duration-500 text-lg sm:text-xl font-medium text-center"
                onMouseEnter={() => {
                  updateVariant('button');
                  setText('Get In Touch');
                }}
                onMouseLeave={() => updateVariant('default')}
              >
                Connect With Me
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Middle - Tagline */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-16 text-center text-light-100"
        >
          <span className="text-shadow bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300 animate-gradient">"Crafting Tech That Cares"</span>
        </motion.h2>
      </div>
    </section>
  );
}