import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      category: 'web',
      image: '/assets/project-ecommerce.jpg',
      title: t('projectWebTitle'),
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      description: t('projectWebDesc'),
      githubUrl: 'https://github.com/AdaKarakaya/simple-website-repo',
      liveUrl: '#',
      color: '#3498db'
    },
    {
      id: 2,
      category: 'game',
      image: '/assets/project-unity-draft.jpg',
      title: t('projectGameTitle'),
      tags: ['Unity', 'C#', 'Git', 'Game Design'],
      description: t('projectGameDesc'),
      githubUrl: 'https://github.com/AdaKarakaya/FutDraft',
      liveUrl: '#',
      color: '#e74c3c'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="projects" className="section-light projects-modern">
      <div className="container">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <FaCode className="section-icon" />
            {t('projectsTitle')}
          </h2>
        </motion.div>

        <motion.div 
          className="project-filters-modern"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {['all', 'web', 'game'].map((filterOption) => (
            <motion.button
              key={filterOption}
              className={`filter-btn-modern ${filter === filterOption ? 'active' : ''}`}
              onClick={() => setFilter(filterOption)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t(`filter${filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}`)}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="project-grid-modern"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                layout
                exit="exit"
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.3}
                  scale={1.02}
                  className="tilt-card"
                >
                  <div className="project-card-modern">
                    <div className="project-image-container">
                      <img src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        <motion.button
                          className="overlay-btn"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setSelectedProject(project)}
                        >
                          <FaExternalLinkAlt /> View Details
                        </motion.button>
                      </div>
                    </div>

                    <div className="project-content">
                      <motion.div 
                        className="project-color-bar"
                        style={{ backgroundColor: project.color }}
                        layoutId={`color-${project.id}`}
                      />
                      
                      <h3>{project.title}</h3>
                      
                      <div className="project-tags-modern">
                        {project.tags.map((tag, index) => (
                          <motion.span
                            key={index}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      <p className="project-description-short">
                        {project.description.substring(0, 100)}...
                      </p>

                      <div className="project-links-modern">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, x: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub /> GitHub
                        </motion.a>
                      </div>
                    </div>

                    <div className="project-card-glow" style={{ background: `radial-gradient(circle at 50% 50%, ${project.color}22, transparent)` }}></div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
                <img src={selectedProject.image} alt={selectedProject.title} />
                <h3>{selectedProject.title}</h3>
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <p>{selectedProject.description}</p>
                <div className="modal-links">
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub Repository
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
