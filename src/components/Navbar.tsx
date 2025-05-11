import { useEffect, useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useCursorStore } from '../store/useStore';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Activities', href: '#activities' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { updateVariant, setText } = useCursorStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    updateVariant('link');
  };

  const handleMouseLeave = () => {
    updateVariant('default');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-dark-400/80 nav-blur shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-xl md:text-2xl font-bold text-white"
            onMouseEnter={() => {
              updateVariant('text');
              setText('Back to top');
            }}
            onMouseLeave={handleMouseLeave}
          >
            <span className="gradient-text">being</span>
            <span className="text-light-100">-iota</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-light-300 hover:text-primary-400 transition-colors duration-300 relative group"
                onMouseEnter={() => {
                  updateVariant('text');
                  setText(item.name);
                }}
                onMouseLeave={handleMouseLeave}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Chat with AI button */}
          <button
            type="button"
            className="hidden md:flex items-center gap-1 bg-gradient-to-r from-primary-600 to-secondary-600 px-4 py-2 rounded-full text-white text-sm font-medium hover:shadow-lg hover:from-primary-500 hover:to-secondary-500 transition duration-500"
            onClick={() => {
              const chatBtn = document.querySelector('button[aria-label="Open Chatbot"]');
              if (chatBtn) (chatBtn as HTMLButtonElement).click();
            }}
            onMouseEnter={() => {
              updateVariant('button');
              setText('Ask Iota');
            }}
            onMouseLeave={handleMouseLeave}
            aria-label="Ask Iota"
          >
            Ask Iota <ChevronRight size={16} />
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-dark-300/95 backdrop-blur-md overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-light-300 py-2 border-b border-gray-700/50 hover:text-primary-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a 
            role="button"
            tabIndex={0}
            className="flex items-center gap-1 bg-gradient-to-r from-primary-600 to-secondary-600 px-4 py-2 rounded-full text-white text-sm font-medium hover:shadow-lg hover:from-primary-500 hover:to-secondary-500 transition duration-500 self-start mt-2"
            onClick={() => {
              const chatBtn = document.querySelector('button[aria-label="Open Chatbot"]');
              if (chatBtn) (chatBtn as HTMLButtonElement).click();
            }}
            aria-label="Ask Iota"
          >
            Ask Iota <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
}