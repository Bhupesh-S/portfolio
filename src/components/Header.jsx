import styles from './Header.module.css';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Portfolio</div>
        <nav className={styles.nav}>
          <button onClick={() => scrollToSection('home')} className={styles.navLink}>
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className={styles.navLink}>
            About
          </button>
          <button onClick={() => scrollToSection('projects')} className={styles.navLink}>
            Projects
          </button>
          <button onClick={() => scrollToSection('skills')} className={styles.navLink}>
            Skills
          </button>
          <button onClick={() => scrollToSection('achievements')} className={styles.navLink}>
            Achievements
          </button>
          <button onClick={() => scrollToSection('contact')} className={styles.navLink}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
