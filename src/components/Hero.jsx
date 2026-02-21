import { useState, useEffect } from 'react';

function Hero() {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['Full Stack Developer', 'UX-UI Designer', 'Problem Solver'];

  useEffect(() => {
    const word = words[wordIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(word.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      } else {
        setText(word.substring(0, text.length + 1));
        if (text.length === word.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi There! I am <span className="highlight">Syed Ahmed Mohiuddin</span></h1>
            <div className="typing-effect">{text}</div>
            <p className="tagline">I make the complex simple.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn">Contact Me</a>
              <a href="./resume/Newresume (2) (1).pdf" className="btn btn-secondary">Download CV</a>
            </div>
            <div className="hero-info">
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <span>ahmedmohiuddinasad786@gmail.com</span>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <span>+91 8523021367</span>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>India</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg" alt="Profile" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
