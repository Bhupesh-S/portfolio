import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './Achievements.module.css';

const Achievements = () => {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const achievements = [
    {
      title: "HackBuzz'25 Winner",
      organization: "Kongu Engineering College",
      year: "2025",
      description: "Secured second place in the department-level 24-hour HackBuzz Hackathon conducted at Kongu Engineering College. "
    },
    {
      title: "Algo Arena Winner",
      organization: "Kongu Engineering College",
      year: "2025",
      description: "Achieved second place in the 24-hour Algo Arena internal hackathon, organized as part of the Smart India Hackathon shortlisting process at Kongu Engineering College."
    },
    {
      title: "Smart India Hackathon Finalist",
      organization: "Smart India Hackathon",
      year: "2025",
      description: "Selected as a finalist in Smart India Hackathon, competing among top teams at the national level."
    },
    {
      title: "Java SE 17 Developer Certified",
      organization: "Oracle",
      year: "2025",
      description: "Earned the Oracle Java SE 17 Developer Certification, demonstrating proficiency in modern Java programming standards."
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

  const cardVariants = {
    hidden: { opacity: 0, y: isMobile ? 15 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.3 : 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="achievements" className={styles.achievements}>
      {/* Scroll-triggered container */}
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2 className={styles.title} variants={cardVariants}>
          Achievements
        </motion.h2>
        <div className={styles.achievementsGrid}>
          {achievements.map((achievement, index) => (
            /* Achievement card with hover and tap animations */
            <motion.div
              key={index}
              className={styles.achievementCard}
              variants={cardVariants}
              whileHover={!prefersReducedMotion ? { y: isMobile ? -3 : -10, scale: isMobile ? 1.01 : 1.03 } : {}}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: isMobile ? 0.2 : 0.35, ease: 'easeOut' }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <span className={styles.year}>{achievement.year}</span>
              </div>
              <h3 className={styles.achievementTitle}>{achievement.title}</h3>
              <p className={styles.organization}>{achievement.organization}</p>
              <p className={styles.description}>{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
