import styles from './Projects.module.css';

const Projects = () => {
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


  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.techStack}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
              
              <div className={styles.projectLinks}>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                  aria-label={`View ${project.title} on GitHub`}
                >
                  GitHub
                </a>
                
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
