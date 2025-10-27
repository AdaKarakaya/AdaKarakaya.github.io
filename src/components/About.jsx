import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-light fade-in-up">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaUser className="section-icon" />
          {t('aboutTitle')}
        </motion.h2>
        <div className="about-content">
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t('aboutTextP1')}
          </motion.p>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {t('aboutTextP2')}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default About;
