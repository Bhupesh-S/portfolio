import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const icons = {
    Email: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 6 8-6v10H4z" />
      </svg>
    ),
    GitHub: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.43-1.32.79-1.62-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.25-3.22-.13-.31-.54-1.56.12-3.26 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.3-1.23 3.3-1.23.66 1.7.25 2.95.12 3.26.78.84 1.25 1.91 1.25 3.22 0 4.61-2.8 5.61-5.48 5.92.44.38.84 1.12.84 2.26v3.35c0 .32.21.7.82.58A12 12 0 0012 .5z"/>
      </svg>
    ),
    LinkedIn: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5A2.5 2.5 0 102.5 6 2.5 2.5 0 004.98 3.5zM3 8h4v13H3zM9 8h3.8v1.79h.05A4.17 4.17 0 0117.6 8c3.3 0 3.9 2.17 3.9 5v8H17v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.74 1.85-2.74 3.76V21H9z"/>
      </svg>
    )
  };
  const contactInfo = [
    {
      type: 'Email',
      value: 'bhupeegayu24@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=bhupeegayu24@gmail.com',
      ariaLabel: 'Send email to Bhupesh Santha Kumar'
    },
    {
      type: 'GitHub',
      value: 'github.com/Bhupesh-S',
      link: 'https://github.com/Bhupesh-S',
      ariaLabel: 'Visit GitHub profile'
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/bhupesh-s',
      link: 'https://www.linkedin.com/in/bhupesh-s/',
      ariaLabel: 'Visit LinkedIn profile'
    }
  ];

  // Animation variants - medium for desktop, simple for mobile
  const containerVariants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.6,
        ease: 'easeOut',
        staggerChildren: isMobile ? 0.08 : 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.3 : 0.5, ease: 'easeOut' }
    }
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: isMobile ? -10 : -25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: isMobile ? 0.3 : 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      {/* Scroll-triggered container */}
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          Get In Touch
        </motion.h2>
        <motion.p className={styles.description} variants={itemVariants}>
          I'm always open to discussing new projects, opportunities, or collaborations. 
          Feel free to reach out!
        </motion.p>
        <div className={styles.contactList}>
          {contactInfo.map(({ type, value, link, ariaLabel }) => (
            /* Contact item with hover and tap animations */
            
            <motion.div
              key={type}
              className={styles.contactItem}
              variants={contactItemVariants}
              whileHover={!prefersReducedMotion ? { x: isMobile ? 4 : 10, scale: isMobile ? 1.01 : 1.03 } : {}}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: isMobile ? 0.15 : 0.25, ease: 'easeOut' }}
            >
              <span className={styles.contactIcon}>{icons[type]}</span>
              <span className={styles.contactType}>{type}</span>
              {/* Link with subtle scale animation */}
              <motion.a 
                href={link} 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
                aria-label={ariaLabel}
                whileHover={!prefersReducedMotion ? { scale: isMobile ? 1.02 : 1.06 } : {}}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: isMobile ? 0.15 : 0.25, ease: 'easeOut' }}
              >
                {value}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
