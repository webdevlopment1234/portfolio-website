import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact3D.css';

function Contact() {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const toEmail = 'ahmedmohiuddinasad786@gmail.com';
    const subject = `Portfolio message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(toEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, '_blank');
    setStatus('Opening Gmail...');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  const contactLinks = [
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      url: 'https://github.com/webdevlopment1234',
      color: '#f0f0f0'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/syed-ahmed-mohiuddin-9a102a2bb/',
      color: '#0077b5'
    },
    {
      icon: 'fab fa-instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/syedahmedasad/',
      color: '#e4405f'
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      url: 'mailto:ahmedmohiuddinasad786@gmail.com',
      color: '#10b981'
    }
  ];

  return (
    <section id="contact" className="contact-3d">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <h2>Let's Work Together</h2>
          <p className="contact-subtitle">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="contact-wrapper">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
              <span className="form-underline"></span>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
              <span className="form-underline"></span>
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="6"
                required
              ></textarea>
              <span className="form-underline"></span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn submit-btn"
            >
              Send Message
              <i className="fas fa-paper-plane"></i>
            </motion.button>
            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="status-message"
              >
                {status}
              </motion.p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-info"
          >
            <h3>Contact Information</h3>
            <p className="contact-description">
              Feel free to reach out to me through any of these channels. I'm always open to new opportunities and discussions.
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:ahmedmohiuddinasad786@gmail.com">
                    ahmedmohiuddinasad786@gmail.com
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+918523021367">+91 8523021367</a>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>India</p>
                </div>
              </div>
            </div>

            <div className="contact-divider"></div>

            <h4 className="social-title">Connect With Me</h4>
            <div className="social-links">
              {contactLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={link.icon}></i>
                </motion.a>
              ))}
            </div>

            <p className="response-time">
              <i className="fas fa-clock"></i>
              Typically replies within 24 hours
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="contact-background">
          <div className="gradient-blob blob-1"></div>
          <div className="gradient-blob blob-2"></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
