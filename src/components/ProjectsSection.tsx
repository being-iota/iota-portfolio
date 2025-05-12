import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';
import { useCursorStore, useProjectStore } from '../store/useStore';

export default function ProjectsSection() {
  const { filter, setFilter } = useProjectStore();
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const { updateVariant, setText } = useCursorStore();

  const categories = ['All', 'AI', 'Design', 'Dev'];

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  const handleMouseEnter = (project: Project) => {
    updateVariant('text');
    setText(project.title);
  };

  const handleMouseLeave = () => {
    updateVariant('default');
  };

  const handleLinkMouseEnter = (text: string) => {
    updateVariant('button');
    setText(text);
  };

  return (
    <section id="projects" className="py-20 bg-dark-300 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Projects Gallery</h2>
          <p className="text-light-300/80 max-w-2xl mx-auto">
            Showcasing my technical and design projects that demonstrate my skills in AI, development, and UI/UX design.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                  : 'bg-dark-200 text-light-300 hover:bg-primary-500/20'
              }`}
              onMouseEnter={() => {
                updateVariant('button');
                setText(`Filter: ${category}`);
              }}
              onMouseLeave={handleMouseLeave}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="project-card group flex flex-col h-full min-h-[420px] bg-dark-400 rounded-xl shadow-lg"
              onMouseEnter={() => handleMouseEnter(project)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative rounded-t-xl overflow-hidden card-glow" style={{ minHeight: '180px', maxHeight: '180px' }}>
                {/* Project image */}
                <div className="aspect-video relative overflow-hidden w-full h-full bg-dark-300 flex items-center justify-center">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      style={{ minHeight: '180px', maxHeight: '180px' }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-light-300/40 text-4xl">
                      <span>No Image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/50 to-transparent"></div>
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 bg-dark-300/70 backdrop-blur-md text-xs font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>
              </div>
              {/* Project info */}
              <div className="flex flex-col flex-1 p-6 bg-dark-400/95 backdrop-blur-md rounded-b-xl">
                <h3 className="text-xl font-semibold mb-2 text-light-100">{project.title}</h3>
                <p className="text-light-300/70 text-sm mb-4 line-clamp-2">{project.description}</p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-dark-200 text-light-300/80 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Links */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex gap-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-300/80 hover:text-primary-400 transition-colors"
                        onMouseEnter={() => handleLinkMouseEnter('GitHub Repo')}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-300/80 hover:text-primary-400 transition-colors"
                        onMouseEnter={() => handleLinkMouseEnter('Live Demo')}
                        onMouseLeave={handleMouseLeave}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <div className={`w-2 h-2 rounded-full ${project.featured ? 'bg-primary-500' : 'bg-light-300/30'}`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}