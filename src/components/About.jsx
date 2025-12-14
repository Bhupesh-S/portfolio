import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.bio}>
          I'm a Full Stack Developer with 5+ years of experience building web applications 
          from concept to deployment. I thrive in collaborative environments and enjoy solving 
          complex problems with elegant, efficient solutions. My approach combines technical 
          expertise with a strong focus on code quality, performance optimization, and user-centered design.
        </p>
      </div>
    </section>
  );
};

export default About;
