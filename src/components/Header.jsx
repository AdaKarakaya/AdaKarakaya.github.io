import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('no-scroll');
  };

  const handleNavClick = (section) => {
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('selectedLang', lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section');
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={scrolled ? 'scrolled' : ''}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container header-container">
        <motion.a 
          href="#hero" 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{t('logoName')}</span>
        </motion.a>

        <nav>
          <AnimatePresence>
            <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
              {['hero', 'about', 'experience', 'projects', 'skills', 'contact'].map((section, index) => (
                <motion.li
                  key={section}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={`#${section}`} 
                    className={activeSection === section ? 'active' : ''} 
                    onClick={() => handleNavClick(section)}
                  >
                    {t(`nav${section.charAt(0).toUpperCase() + section.slice(1).replace('experience', 'Experience')}`)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </AnimatePresence>
        </nav>

        <div className="language-switcher">
          <motion.button 
            className={`lang-btn ${i18n.language === 'tr' ? 'active' : ''}`}
            onClick={() => changeLanguage('tr')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            TR
          </motion.button>
          <motion.button 
            className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            EN
          </motion.button>
        </div>

        <motion.div 
          className={`burger-menu ${isMenuOpen ? 'toggle' : ''}`} 
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Header;
