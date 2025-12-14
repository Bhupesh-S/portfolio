import styles from './Achievements.module.css';

const Achievements = () => {
  const achievements = [
    {
      title: "HackBuzz'25 Winner",
      organization: "Kongu Engineering College",
      year: "2025",
      description: "Second place in 24-hour Hackathon. We built an AI-powered Smart Agriculture platform that predicts crop prices, assesses produce quality, and digitizes the farm-to-market workflow using a secure MERN-based system."
    },
    {
      title: "Algo Arena Winner",
      organization: "Kongu Engineering College",
      year: "2025",
      description: "It is an internal 24 hour internal hackathon to shortlist for Smart India Hackathon. Secured Second place by developing 'SevaTrack' is a digital governance platform that streamlines public service requests with transparent tracking, role-based access, and real-time status updates for citizens and officials."
    },
    {
      title: "Smart India Hackathon Finalist",
      organization: "Smart India Hackathon",
      year: "2025",
      description: "Finalist in Smart India Hackathon 2025 for developing 'FarmStellar' is a gamified smart-farming platform that guides farmers through practical, step-by-step agricultural tasks using AI verification, rewards, and real-world impact tracking."
    },
    {
      title: "Java SE 17 Developer Certified",
      organization: "Oracle",
      year: "2025",
      description: "Java SE 17 Developer certification"
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
