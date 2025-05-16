import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { activities } from '../data/activities';
import { useCursorStore } from '../store/useStore';

export default function ActivitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { updateVariant, setText } = useCursorStore();

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? activities.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === activities.length - 1 ? 0 : prev + 1));
  };

  const handleMouseEnter = (action: string) => {
    updateVariant('button');
    setText(action);
  };

  const handleMouseLeave = () => {
    updateVariant('default');
  };

  // Touch/swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX === null) return;
    const diff = e.changedTouches[0].clientX - dragStartX;
    if (diff > 50) goToPrevious();
    else if (diff < -50) goToNext();
    setDragStartX(null);
  };

  return (
    <section id="activities" className="py-20 relative z-10 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 dark:from-dark-400 dark:via-dark-300 dark:to-dark-400 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">Co-curricular Activities</h2>
          <p className="text-lg md:text-xl text-light-300/90 max-w-2xl mx-auto">
            Beyond academics, I've been actively involved in various technical communities, leadership roles, and creative initiatives.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel navigation */}
          <motion.button
            whileHover={{ scale: 1.15, boxShadow: '0 0 16px #6366f1' }}
            whileTap={{ scale: 0.95 }}
            onClick={goToPrevious}
            className="absolute -left-2 xs:-left-4 md:-left-12 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 dark:bg-dark-200/80 text-blue-700 dark:text-light-100 hover:bg-blue-200 dark:hover:bg-primary-500/80 transition-colors shadow-lg"
            onMouseEnter={() => handleMouseEnter('Previous')}
            onMouseLeave={handleMouseLeave}
            aria-label="Previous Activity"
            style={{ outline: 'none', border: 'none' }}
          >
            <ChevronLeft size={28} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.15, boxShadow: '0 0 16px #6366f1' }}
            whileTap={{ scale: 0.95 }}
            onClick={goToNext}
            className="absolute -right-2 xs:-right-4 md:-right-12 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 dark:bg-dark-200/80 text-blue-700 dark:text-light-100 hover:bg-blue-200 dark:hover:bg-primary-500/80 transition-colors shadow-lg"
            onMouseEnter={() => handleMouseEnter('Next')}
            onMouseLeave={handleMouseLeave}
            aria-label="Next Activity"
            style={{ outline: 'none', border: 'none' }}
          >
            <ChevronRight size={28} />
          </motion.button>

          {/* Carousel */}
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              ref={carouselRef}
              className="relative min-h-[420px] xs:min-h-[480px] sm:min-h-[520px] md:min-h-[450px]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence initial={false} custom={currentIndex}>
                {activities.map((activity, index) =>
                  index === currentIndex ? (
                    <motion.div
                      key={activity.id}
                      className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                      initial={{ opacity: 0, x: 80 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -80 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      style={{ zIndex: 2 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02, boxShadow: '0 8px 32px 0 rgba(99,102,241,0.15)' }}
                        className="flex flex-col sm:flex-row h-full w-full rounded-2xl overflow-hidden shadow-2xl bg-white/80 dark:bg-dark-400/80 backdrop-blur-md border border-blue-200 dark:border-primary-500/20 transition-all duration-500"
                      >
                        <div className="w-full sm:w-1/2 h-48 xs:h-64 sm:h-full relative">
                          <img
                            src={activity.image}
                            alt={activity.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-800/30 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-blue-900/30 sm:to-blue-900/60 dark:from-dark-500 dark:via-dark-500/50 dark:to-transparent"></div>
                        </div>
                        <div className="w-full sm:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
                          <div className="mb-2 text-base font-semibold text-blue-500 dark:text-primary-400 animate-fadeInUp">
                            {activity.role}
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-light-100 mb-3 animate-fadeInUp">
                            {activity.title}
                          </h3>
                          <p className="text-lg sm:text-xl text-blue-800 dark:text-light-300/80 mb-4 animate-fadeInUp">
                            {activity.description}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-3 mt-4 xs:mt-6">
            {activities.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 xs:w-4 xs:h-4 rounded-full transition-colors focus:outline-none ${
                  index === currentIndex ? 'bg-blue-500 shadow-lg scale-125' : 'bg-blue-200 dark:bg-dark-200'
                }`}
                onMouseEnter={() => handleMouseEnter(`Activity ${index + 1}`)}
                onMouseLeave={handleMouseLeave}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                animate={index === currentIndex ? { scale: 1.25 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                aria-label={`Go to activity ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}