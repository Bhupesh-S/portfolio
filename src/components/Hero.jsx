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
            Passionate about developing scalable and practical web apps using clean code. Skilled in developing full-stack solutions with a focus on performance and creating a better user experience using up-to-date technology stacks such as advanced frameworks in JavaScript.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
