import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration, inventory management, and admin dashboard. Built with microservices architecture for scalability.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      demo: 'https://demo-ecommerce.example.com'
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and analytics dashboard. Supports drag-and-drop interface.',
      techStack: ['React', 'TypeScript', 'Express', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://demo-taskmanager.example.com'
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'Real-time weather application with 7-day forecasts, location-based search, and interactive maps. Integrates multiple weather APIs for accuracy.',
      techStack: ['React', 'OpenWeather API', 'Mapbox', 'CSS Modules'],
      github: 'https://github.com/yourusername/weather-app',
      demo: 'https://demo-weather.example.com'
    },
    {
      id: 4,
      title: 'Blog CMS',
      description: 'Headless content management system with markdown support, SEO optimization, and multi-user capabilities. Features custom authentication and authorization.',
      techStack: ['Next.js', 'Python', 'Django', 'PostgreSQL', 'AWS S3'],
      github: 'https://github.com/yourusername/blog-cms',
      demo: null
    },
    {
      id: 5,
      title: 'API Analytics Dashboard',
      description: 'Real-time monitoring dashboard for API metrics, performance tracking, and error logging. Visualizes data with customizable charts and alerts.',
      techStack: ['React', 'D3.js', 'Node.js', 'Redis', 'Grafana'],
      github: 'https://github.com/yourusername/api-analytics',
      demo: null
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
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${styles.projectLink} ${styles.demoLink}`}
                    aria-label={`View live demo of ${project.title}`}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
