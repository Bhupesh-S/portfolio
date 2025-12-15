import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.bio}>
          I'm a full-stack web developer with end-to-end development capabilities, right from designing to deploying web apps. I'm a team player and enjoy working with complex problem-solving and designing efficient solutions with a focus on performance and usability.
        </p>
      </div>
    </section>
  );
};

export default About;
