import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './About.module.css';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll-triggered animation variants - medium for desktop, simple for mobile
  const containerVariants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.6,
        ease: 'easeOut',
        staggerChildren: isMobile ? 0.1 : 0.25
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

  return (
    <section id="about" className={styles.about}>
      {/* Scroll-into-view animation */}
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          About
        </motion.h2>
        <motion.p className={styles.bio} variants={itemVariants}>
          I'm a full-stack web developer with end-to-end development capabilities, right from designing to deploying web apps. I'm a team player and enjoy working with complex problem-solving and designing efficient solutions with a focus on performance and usability.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
