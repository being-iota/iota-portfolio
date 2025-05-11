import { Heart } from 'lucide-react';
import { useCursorStore } from '../store/useStore';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { updateVariant, setText } = useCursorStore();
  
  const handleMouseEnter = (text: string) => {
    updateVariant('text');
    setText(text);
  };

  const handleMouseLeave = () => {
    updateVariant('default');
  };

  return (
    <footer className="py-8 bg-dark-500 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div 
            className="text-light-300/70 text-sm mb-4 md:mb-0"
            onMouseEnter={() => handleMouseEnter('© All rights reserved')}
            onMouseLeave={handleMouseLeave}
          >
            © {currentYear} being-iota. All rights reserved.
          </div>
          
          <div 
            className="text-sm text-light-300/70 flex items-center"
            onMouseEnter={() => handleMouseEnter('Made with ❤️')}
            onMouseLeave={handleMouseLeave}
          >
            Made with <Heart size={14} className="mx-1 text-primary-500" /> & cutting-edge tech
          </div>
        </div>
      </div>
    </footer>
  );
}