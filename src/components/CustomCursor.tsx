import { useEffect, useRef } from 'react';
import { useCursorStore } from '../store/useStore';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { position, variant, visible, text } = useCursorStore();
  
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      useCursorStore.getState().updatePosition(e.clientX, e.clientY);
      useCursorStore.getState().updateVisibility(true);
    };

    const onMouseOut = () => {
      useCursorStore.getState().updateVisibility(false);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;
    
    // Apply positioning
    cursorRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    
    // Apply different styling based on variant
    if (variant === 'default') {
      cursorRef.current.style.width = '24px';
      cursorRef.current.style.height = '24px';
      cursorRef.current.style.backgroundColor = 'rgba(99, 102, 241, 0.8)';
      cursorRef.current.classList.remove('text-cursor');
    } else if (variant === 'hover') {
      cursorRef.current.style.width = '40px';
      cursorRef.current.style.height = '40px';
      cursorRef.current.style.backgroundColor = 'rgba(79, 70, 229, 0.4)';
      cursorRef.current.classList.remove('text-cursor');
    } else if (variant === 'link') {
      cursorRef.current.style.width = '80px';
      cursorRef.current.style.height = '80px';
      cursorRef.current.style.backgroundColor = 'rgba(99, 102, 241, 0.2)';
      cursorRef.current.classList.remove('text-cursor');
    } else if (variant === 'text' || variant === 'button') {
      cursorRef.current.style.width = 'auto';
      cursorRef.current.style.height = 'auto';
      cursorRef.current.style.backgroundColor = 'transparent';
      cursorRef.current.classList.add('text-cursor');
    }
    
    // Apply visibility
    cursorRef.current.style.opacity = visible ? '1' : '0';
  }, [position, variant, visible, text]);

  return (
    <div 
      ref={cursorRef} 
      className="custom-cursor hidden md:block"
    >
      {(variant === 'text' || variant === 'button') && (
        <div 
          className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap 
            ${variant === 'button' 
              ? 'bg-primary-500 text-white' 
              : 'bg-dark-300/80 text-white border border-primary-500/50'
            }`}
        >
          {text || (variant === 'button' ? 'Click' : 'View')}
        </div>
      )}
    </div>
  );
}