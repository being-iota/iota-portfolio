import { useEffect, Suspense, lazy, useState, useCallback } from 'react';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';

// Lazy load components with prefetch
const HeroSection = lazy(() => import('./components/HeroSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ActivitiesSection = lazy(() => import('./components/ActivitiesSection'));
const ChatSection = lazy(() => import('./components/ChatSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLowPower, setIsLowPower] = useState(false);

  // Check device capabilities
  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      setIsLowPower(navigator.hardwareConcurrency <= 4);
    }
  }, []);

  // Preload critical components
  const preloadComponents = useCallback(async () => {
    try {
      const [HeroModule, NavbarModule] = await Promise.all([
        import('./components/HeroSection'),
        import('./components/Navbar')
      ]);
      
      // Preload other components in the background
      if (!isLowPower) {
        Promise.all([
          import('./components/ProjectsSection'),
          import('./components/SkillsSection')
        ]).catch(console.error);
      }
      
      setIsLoading(false);
    } catch (error) {
      console.error('Error preloading components:', error);
      setIsLoading(false);
    }
  }, [isLowPower]);

  // Update page title and preload components
  useEffect(() => {
    document.title = "Ratnapriya | Tech Explorer";
    preloadComponents();
  }, [preloadComponents]);

  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <div className="relative">
      {/* Custom cursor for desktop */}
      {!isLowPower && <CustomCursor />}
      
      {/* 3D background with particles */}
      <ThreeBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content with lazy loading */}
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <HeroSection />
        </Suspense>
        
        <Suspense fallback={null}>
          <ProjectsSection />
        </Suspense>
        
        <Suspense fallback={null}>
          <SkillsSection />
        </Suspense>
        
        <Suspense fallback={null}>
          <ActivitiesSection />
        </Suspense>
        
        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
      </main>
      
      {/* AI Chat assistant - Load only when needed */}
      {!isLowPower && (
        <Suspense fallback={null}>
          <ChatSection />
        </Suspense>
      )}
      
      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;