import styles from './Achievements.module.css';

const Achievements = () => {
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

  return (
    <section id="achievements" className={styles.achievements}>
      <div className={styles.container}>
        <h2 className={styles.title}>Achievements</h2>
        <div className={styles.achievementsGrid}>
          {achievements.map((achievement, index) => (
            <div key={index} className={styles.achievementCard}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
