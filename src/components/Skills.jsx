import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaDatabase, FaPython, FaGithub, FaUsers, FaComments, FaShareAlt, FaChartPie, FaCode, FaWindows } from 'react-icons/fa';

function Skills() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { icon: FaDatabase, title: t('skillSqlTitle'), level: 70, levelText: t('skillSqlLevel'), color: '#CC2927' },
    { icon: FaWindows, title: t('skillMsOfficeTitle'), level: 85, levelText: t('skillMsOfficeLevel'), color: '#0078D4' },
    { icon: FaPython, title: t('skillPythonTitle'), level: 50, levelText: t('skillPythonLevel'), color: '#3776AB' },
    { icon: FaCode, title: t('skillCsharpTitle'), level: 40, levelText: t('skillCsharpLevel'), color: '#239120' },
    { icon: FaChartPie, title: t('skillAnalyticalTitle'), level: 80, levelText: t('skillAnalyticalLevel'), color: '#FF6384' },
    { icon: FaUsers, title: t('skillTeamworkTitle'), level: 90, levelText: t('skillTeamworkLevel'), color: '#36A2EB' },
    { icon: FaGithub, title: t('skillGitTitle'), level: 65, levelText: t('skillGitLevel'), color: '#181717' },
    { icon: FaComments, title: t('skillCommunicationTitle'), level: 85, levelText: t('skillCommunicationLevel'), color: '#4FC08D' },
    { icon: FaShareAlt, title: t('skillSocialMediaTitle'), level: 75, levelText: t('skillSocialMediaLevel'), color: '#E1306C' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="skills" className="section-dark skills-modern" ref={sectionRef}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('skillsTitle')}
        </motion.h2>

        <motion.div 
          className="skills-grid-modern"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="skill-card-modern">
                  <motion.div 
                    className="skill-icon-container"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    style={{ color: skill.color }}
                  >
                    <IconComponent className="skill-icon-modern" />
                    <div 
                      className="skill-icon-glow" 
                      style={{ boxShadow: `0 0 30px ${skill.color}66` }}
                    />
                  </motion.div>

                  <h3>{skill.title}</h3>

                  <div className="skill-level-container">
                    <div className="skill-level-bg">
                      <motion.div
                        className="skill-level-fill"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={{ width: isVisible ? `${skill.level}%` : 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                      >
                        <motion.span 
                          className="skill-percentage"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isVisible ? 1 : 0 }}
                          transition={{ delay: index * 0.1 + 1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>

                  <p className="skill-level-text">{skill.levelText}</p>

                  {/* Animated particles around card */}
                  <div className="skill-particles">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="skill-particle"
                        style={{ backgroundColor: skill.color }}
                        animate={{
                          y: [0, -20, 0],
                          x: [0, (i - 1) * 10, 0],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 2 + i,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
