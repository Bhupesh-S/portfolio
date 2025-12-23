import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Increased offset for better visibility
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false); // Close menu after navigation
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Bhupesh Santha Kumar</div>
        
        {/* Hamburger button for mobile */}
        <button 
          className={styles.hamburger} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>

        {/* Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
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
