import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/skills';
import { useCursorStore } from '../store/useStore';
import { XIcon as Icon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export default function SkillsSection() {
  const { updateVariant, setText } = useCursorStore();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  // Categories to display in order
  const categories = ['Frontend', 'Backend', 'AI/ML', 'Design', 'Other'];

  // Get the Lucide icon component by name
  const getIconByName = (name: string): Icon => {
    return (LucideIcons as Record<string, Icon>)[name as keyof typeof LucideIcons];
  };

  return (
    <section
      id="skills"
      ref={sectionRef} 
      className="py-20 bg-dark-400 relative z-10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <p className="text-light-300/80 max-w-2xl mx-auto">
            My technical skills span across frontend and backend development, AI/ML, and design - reflecting my versatility in tackling complex problems.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = skillsByCategory[category] || [];
            
            return (
              <div key={category} className="space-y-6">
                <h3 className="text-2xl font-semibold text-light-100 border-b border-primary-500/30 pb-2 inline-block">
                  {category}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill) => {
                    const IconComponent = getIconByName(skill.icon);
                    
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="glassmorphism rounded-lg p-5 hover:bg-dark-200/40 transition-colors"
                        onMouseEnter={() => {
                          updateVariant('text');
                          setText(skill.name);
                        }}
                        onMouseLeave={() => updateVariant('default')}
                      >
                        <div className="flex items-center mb-3 gap-3">
                          <div className="p-2 rounded-full bg-primary-500/20 text-primary-400">
                            {IconComponent && <IconComponent size={20} className="svg-shadow" />}
                          </div>
                          <h4 className="text-lg font-medium text-light-100">{skill.name}</h4>
                        </div>
                        
                        <div className="h-2 bg-dark-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.proficiency}%` } : {}}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                          ></motion.div>
                        </div>
                        <div className="mt-1 text-right text-sm text-light-300/70">
                          {skill.proficiency}%
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}