import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-tsparticles';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import { FaGithub, FaLinkedin, FaDownload, FaCode } from 'react-icons/fa';

function Hero() {
  const { t } = useTranslation();

  const particlesInit = useCallback(async engine => {
    await loadStarsPreset(engine);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="hero" className="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "stars",
          background: {
            opacity: 0
          },
          particles: {
            color: {
              value: "#3498db"
            },
            move: {
              speed: 0.5
            },
            number: {
              value: 100
            },
            opacity: {
              value: 0.5
            }
          }
        }}
      />
      
      <motion.div 
        className="container hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="profile-img-container"
        >
          <img 
            src="/assets/profile.jpg" 
            alt="Ada Haydar Karakaya" 
            className="profile-img"
          />
          <div className="profile-img-glow"></div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-title">
          {t('heroTitle')}
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-description">
          {t('heroDescriptionP1')}
          <span className="highlight-text gradient-text">
            {t('heroDescriptionP1Highlight')}
          </span>
          {t('heroDescriptionP1End')}
        </motion.p>

        <motion.div variants={itemVariants} className="typewriter-container">
          <FaCode className="code-icon" />
          <TypeAnimation
            sequence={[
              t('heroTypewriter'),
              2000,
              'SQL & Database Management',
              2000,
              'Python & Data Analysis',
              2000,
              'Full Stack Development',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="typewriter-modern"
            repeat={Infinity}
          />
        </motion.div>

        <motion.p variants={itemVariants} className="hero-description-secondary">
          {t('heroDescriptionP2Start')}
          <span className="highlight-text">{t('heroDescriptionP2Highlight')}</span>
          {t('heroDescriptionP2End')}
        </motion.p>

        <motion.div variants={itemVariants} className="cta-buttons">
          <motion.a 
            href="#projects" 
            className="btn primary-btn modern-btn"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(52, 152, 219, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t('heroBtnProjects')}</span>
            <motion.div 
              className="btn-shine"
              animate={{
                x: [-200, 200],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear"
              }}
            />
          </motion.a>
          
          <motion.a 
            href="/assets/ADA_KARAKAYA_CV.pdf" 
            className="btn secondary-btn modern-btn"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="btn-icon" />
            <span>{t('heroBtnCV')}</span>
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="social-hero">
          <motion.a 
            href="https://github.com/AdaKarakaya" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/adakarakaya" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
