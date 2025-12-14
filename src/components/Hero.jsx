import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.photoContainer}>
          <div className={styles.photo}>
            <img src="/ME.jpg" alt="Bhupesh Santha Kumar" className={styles.profileImage} />
          </div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.name}>Bhupesh Santha Kumar</h1>
          <p className={styles.role}>Full Stack Developer</p>
          <p className={styles.summary}>
            Passionate about building scalable web applications with clean, maintainable code. 
            Specializing in modern JavaScript frameworks and cloud-native architectures. 
            Committed to delivering high-performance solutions that prioritize user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
