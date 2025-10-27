import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t('expItInternTitle'),
      company: t('expItInternCompany'),
      date: t('expItInternDate'),
      description: t('expItInternDesc')
    },
    {
      title: t('expMisTitle'),
      company: t('expMisCompany'),
      date: t('expMisDate'),
      description: t('expMisDesc')
    },
    {
      title: t('expHighSchoolTitle'),
      company: t('expHighSchoolCompany'),
      date: t('expHighSchoolDate'),
      description: t('expHighSchoolDesc')
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="experience" className="section-dark">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaBriefcase className="section-icon" />
          {t('experienceTitle')}
        </motion.h2>
        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-dot"></div>
              <motion.div
                className="timeline-content"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                }}
              >
                <h3>
                  {exp.title} <span className="company-name">{exp.company}</span>
                </h3>
                <p className="timeline-date">{exp.date}</p>
                <p>{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
