import { useEffect, Suspense, lazy } from 'react';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';

// Lazy load components
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
  // Update page title
  useEffect(() => {
    document.title = "Ratnapriya | Tech Explorer";
  }, []);

  return (
    <div className="relative">
      {/* Custom cursor for desktop */}
      <CustomCursor />
      
      {/* 3D background with particles */}
      <ThreeBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content with lazy loading */}
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <HeroSection />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <ProjectsSection />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <SkillsSection />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <ActivitiesSection />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <ContactSection />
        </Suspense>
      </main>
      
      {/* AI Chat assistant */}
      <Suspense fallback={null}>
        <ChatSection />
      </Suspense>
      
      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;