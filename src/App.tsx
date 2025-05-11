import { useEffect } from 'react';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ActivitiesSection from './components/ActivitiesSection';
import ChatSection from './components/ChatSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

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
      
      {/* Main content */}
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ActivitiesSection />
        <ContactSection />
      </main>
      
      {/* AI Chat assistant */}
      <ChatSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;