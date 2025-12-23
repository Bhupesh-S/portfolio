import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import LogoLoop from './LogoLoop';
import TextType from './TextType';
import { 
  SiReact, 
  SiJavascript, 
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiDocker,
  SiGit
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { TbBrandCpp } from 'react-icons/tb';
import { SiC } from 'react-icons/si';
import styles from './Hero.module.css';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Technology logos for the loop
  const techLogos = [
    { node: <SiReact />, title: "React" },
    
    { node: <SiNodedotjs />, title: "Node.js" },
    { node: <SiPython />, title: "Python" },
    { node: <DiJava />, title: "Java" },
    { node: <SiC />, title: "C" },
    { node: <TbBrandCpp />, title: "C++" },
    { node: <SiMongodb />, title: "MongoDB" },
    { node: <SiDocker />, title: "Docker" },
    { node: <SiGit />, title: "Git" },
  ];

  // Animation variants - medium for desktop, simple for mobile
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.25,
        delayChildren: isMobile ? 0 : 0.15
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: isMobile ? 15 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.3 : 0.6, ease: 'easeOut' }
    }
  };

  

  return (
    <section id="home" className={styles.hero}>
      {/* Animated container with stagger effect */}
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Photo with scale-in animation */}
        <motion.div className={styles.photoContainer} variants={fadeInUp}>
          <motion.div
            className={styles.photo}
            whileHover={!prefersReducedMotion ? { scale: isMobile ? 1.02 : 1.08 } : {}}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: isMobile ? 0.2 : 0.4, ease: 'easeOut' }}
          >
            <img src="/ME.jpg" alt="Bhupesh Santha Kumar" className={styles.profileImage} />
          </motion.div>
        </motion.div>

        {/* Content with staggered fade-in */}
        <div className={styles.content}>
          <motion.h1 className={styles.name} variants={fadeInUp}>
            <TextType 
              text={["Bhupesh Santha Kumar"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </motion.h1>
          <motion.p className={styles.role} variants={fadeInUp}>
            Full Stack Developer
          </motion.p>
          <motion.p className={styles.summary} variants={fadeInUp}>
            Passionate about developing scalable and practical web apps using clean code. Skilled in developing full-stack solutions with a focus on performance and creating a better user experience using up-to-date technology stacks such as advanced frameworks in JavaScript.
          </motion.p>
        </div>
      </motion.div>

      {/* Technology Logo Loop */}
      <motion.div 
        className={styles.logoLoopContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: isMobile ? 0.5 : 1, duration: isMobile ? 0.3 : 0.6 }}
      >
        <LogoLoop
          logos={techLogos}
          speed={25}
          direction="left"
          logoHeight={isMobile ? 32 : 40}
          gap={isMobile ? 40 : 60}
          hoverSpeed={25}
          scaleOnHover={false}
          fadeOut={true}
          fadeOutColor="var(--background-color, #0a0a0a)"
          ariaLabel="Technology stack"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
