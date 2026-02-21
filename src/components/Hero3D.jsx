import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import FloatingText from './3D/FloatingText';
import Stars from './3D/Stars';
import '../styles/Hero3D.css';

function Hero3D() {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver'];

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
    <section id="home" className="hero-3d">
      {/* 3D Canvas Background */}
      <Canvas className="hero-canvas">
        <PerspectiveCamera position={[0, 0, 5]} fov={75} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Stars />
        <FloatingText position={[-1.5, 0.5, 0]} text="I Am" />
        <FloatingText position={[1, -0.5, -1]} text="Ahmed" />
        <FloatingText position={[-0.5, 1.5, -2]} text="Developer" />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
      </Canvas>

      {/* Content Overlay */}
      <div className="hero-content-overlay">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-content"
        >
          <h1>
            Hi There! I'm <span className="highlight">Syed Ahmed Mohiuddin</span>
          </h1>
          <div className="typing-effect">{text}</div>
          <p className="tagline">I make the complex simple.</p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="cta-buttons"
          >
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="./resume/Newresume (2) (1).pdf" className="btn btn-secondary">
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hero-contact-info"
          >
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>ahmedmohiuddinasad786@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+91 8523021367</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="scroll-indicator"
      >
        <i className="fas fa-chevron-down"></i>
      </motion.div>
    </section>
  );
}

export default Hero3D;
