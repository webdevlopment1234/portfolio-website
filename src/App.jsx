import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Services from './components/Services';
import Projects3D from './components/Projects3D';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills3D from './components/Skills3D';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero3D />
      <About />
      <Services />
      <Projects3D />
      <Skills3D />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
