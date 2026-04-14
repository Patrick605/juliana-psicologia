import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">JC.</div>
        <a href="#contact" className="header-cta">Agendar Sessão</a>
      </header>

      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Services />
        <Contact />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Juliana Cerqueira. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
