import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const projects = [
  {
    id: 1,
    title: 'Smart Agriculture',
    description:
      'AI-powered platform for crop price prediction, quality grading, digital bidding, and SMS receipts using MERN stack and ML.',
    techStack: [
      'React (Vite)',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'Machine Learning',
      'Pandas',
      'Scikit-learn'
    ],
    github: 'https://github.com/yourusername/smart-agriculture',
    
  },
  {
    id: 2,
    title: 'Seva Track',
    description:
      'Digital governance platform with transparent request tracking, role-based dashboards, and real-time status updates.',
    techStack: [
      'Next.js',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Computer Vision(YOLO)',
      'Socket.io'
    ],
    github: 'https://github.com/yourusername/seva-track',
    
  },
  {
    id: 3,
    title: 'Password Manager',
    description:
      'Secure password vault with encryption, quick retrieval, API access, and robust authentication protection.',
    techStack: [
      'React',
      'Python',
      'FastAPI / Flask',
      'MongoDB',
      
      'JWT Authentication'
    ],
    github: 'https://github.com/yourusername/password-manager',
    
  },
  {
    id: 4,
    title: 'Farm Stellar',
    description:
      'Agri-tech platform with gamified learning, AI-powered guidance, and real-time farmer engagement through vision verification.',
    techStack: [
      'Next.js',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Computer Vision (MiniCPM-V)',
      'Geolocation & Camera APIs'
    ],
    github: 'https://github.com/yourusername/farm-stellar',
    
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
    <section id="projects" className={styles.projects}>
      {/* Scroll-triggered container */}
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2 className={styles.title} variants={cardVariants}>
          Projects
        </motion.h2>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            /* Project card with hover and tap animations */
            <motion.article
              key={project.id}
              className={styles.projectCard}
              variants={cardVariants}
              whileHover={!prefersReducedMotion ? { y: isMobile ? -3 : -10, scale: isMobile ? 1.01 : 1.03 } : {}}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: isMobile ? 0.2 : 0.35, ease: 'easeOut' }}
            >
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.techStack}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
              
              <div className={styles.projectLinks}>
                {/* Link with hover/tap micro-interaction */}
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                  aria-label={`View ${project.title} on GitHub`}
                  whileHover={!prefersReducedMotion ? { scale: isMobile ? 1.02 : 1.06 } : {}}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: isMobile ? 0.15 : 0.25, ease: 'easeOut' }}
                >
                  GitHub
                </motion.a>
                
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
