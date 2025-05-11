import { motion } from 'framer-motion';
import { useCursorStore } from '../store/useStore';
import { socials } from '../data/socials';
import * as LucideIcons from 'lucide-react';
import { XIcon as Icon } from 'lucide-react';

export default function ContactSection() {
  const { updateVariant, setText } = useCursorStore();

  // Get the Lucide icon component by name
  const getIconByName = (name: string): Icon => {
    return (LucideIcons as Record<string, Icon>)[name as keyof typeof LucideIcons];
  };

  const handleMouseEnter = (name: string) => {
    updateVariant('text');
    setText(name);
  };

  const handleMouseLeave = () => {
    updateVariant('default');
  };

  return (
    <section id="contact" className="py-20 bg-dark-400 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Let's Connect</h2>
          <p className="text-light-300/80 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Reach out to me through any of these platforms.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {socials.map((social) => {
              const IconComponent = getIconByName(social.icon);
              
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex flex-col items-center"
                  onMouseEnter={() => handleMouseEnter(social.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-dark-300 flex items-center justify-center mb-3 hover:bg-primary-500/20 transition-colors duration-300 glassmorphism">
                    {IconComponent && <IconComponent size={28} className="text-primary-400 svg-shadow" />}
                  </div>
                  <span className="text-light-100 text-sm">{social.name}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}