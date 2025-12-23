import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiPostman
} from 'react-icons/si';
import { FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';
import styles from './Skills.module.css';

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skills = [
    {
      category: "Frontend",
      categoryIcon: <FaLaptopCode />,
      items: [
        { icon: <SiReact />, name: "React" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiHtml5 />, name: "HTML5" },
        { icon: <SiCss3 />, name: "CSS3" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiNextdotjs />, name: "Next.js" },
      ]
    },
    {
      category: "Backend",
      categoryIcon: <FaServer />,
      items: [
        { icon: <SiNodedotjs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <SiPython />, name: "Python" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
      ]
    },
    {
      category: "DevOps / Tools",
      categoryIcon: <FaTools />,
      items: [
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiGit />, name: "Git" },
        { icon: <SiDocker />, name: "Docker" },
      ]
    }
  ];

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
    hidden: { opacity: 0, y: isMobile ? 15 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.3 : 0.5, ease: 'easeOut' }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: isMobile ? 0.3 : 0.5 }
    }
  };

  return (
    <section id="skills" className={styles.skills}>
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          Skills
        </motion.h2>

        <motion.div className={styles.skillsGrid} variants={itemVariants}>
          {skills.map((skillGroup, index) => (
            <motion.div key={index} className={styles.skillCategory} variants={cardVariants}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>{skillGroup.categoryIcon}</div>
                <h3 className={styles.categoryTitle}>{skillGroup.category}</h3>
              </div>
              <div className={styles.skillItems}>
                {skillGroup.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className={styles.skillBadge}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={styles.badgeIcon}>{skill.icon}</span>
                    <span className={styles.badgeName}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
