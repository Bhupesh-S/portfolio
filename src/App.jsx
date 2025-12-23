import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClickSpark from './components/ClickSpark';
import './App.css';

function App() {
  return (
    <ClickSpark
      sparkColor='#58a6ff'
      sparkSize={13}
      sparkRadius={25}
      sparkCount={7}
      duration={300}
    >
      <div className="app">
        <Header />
        <main>
          <Hero />
          <div className="section-divider"></div>
          <About />
          <div className="section-divider"></div>
          <Projects />
          <div className="section-divider"></div>
          <Skills />
          <div className="section-divider"></div>
          <Achievements />
          <div className="section-divider"></div>
          <Contact />
        </main>
        <Footer />
      </div>
    </ClickSpark>
  );
}

export default App;
