import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://formspree.io/f/mdkdzjnp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          _replyto: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setFormStatus({ type: 'success', message: t('formSuccess') });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus({ type: 'error', message: t('formError') });
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: t('formNetworkError') });
    }

    setTimeout(() => {
      setFormStatus({ type: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="section-light">
      <div className="container">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          {t('contactTitle')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t('contactDescription')}
        </motion.p>
        <motion.form
          onSubmit={handleSubmit}
          className="contact-form fade-in-up"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('formNamePh')}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('formEmailPh')}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder={t('formSubjectPh')}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('formMessagePh')}
              rows="8"
              required
            />
          </div>
          <motion.button
            type="submit"
            className="btn primary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('formSubmitBtn')} <FaPaperPlane style={{ marginLeft: '8px' }} />
          </motion.button>
          {formStatus.message && (
            <div className={`form-messages ${formStatus.type}`} style={{ display: 'block' }}>
              {formStatus.message}
            </div>
          )}
        </motion.form>
        <motion.div
          className="contact-info fade-in-up"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <p><FaEnvelope /> <span>{t('contactEmailVal')}</span></p>
          <p><FaPhone /> <span>{t('contactPhoneVal')}</span></p>
          <p><FaMapMarkerAlt /> <span>{t('contactLocationVal')}</span></p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
