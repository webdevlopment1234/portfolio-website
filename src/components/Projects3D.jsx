import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import ProjectCard3D from './3D/ProjectCard3D';
import '../styles/Projects3D.css';

function Projects3D() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Interactive Sign Language Translator",
      description: "AI-powered sign language translation using React and Flask. Real-time video processing with deep learning models for gesture recognition.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYj1VJTRCTkdP8fgPcYHlatJcWQCTAzjU1A&s",
      tags: ["React", "Flask", "AI/ML", "TensorFlow"],
      link: "https://github.com/webdevlopment1234/Interactive-Sign-Language-Translation.git",
      color: "#10b981"
    },
    {
      id: 2,
      title: "Weather & Geographic Map",
      description: "Real-time weather tracking with interactive geographic mapping. Displays weather patterns, temperature data, and geographic visualization.",
      image: "https://d2cvjmix0699s1.cloudfront.net/resources/elephango/resourceFull/weather-climate-10739-full.jpg",
      tags: ["React", "Express", "MongoDB", "Maps API"],
      link: "https://github.com/webdevlopment1234/weather-and-geographic",
      color: "#3b82f6"
    },
    {
      id: 3,
      title: "Skill-Gap Analysis & Resume Builder",
      description: "AI-driven skill-gap analysis and resume builder for career development. Analyzes your skills against job requirements and generates optimized resumes.",
      image: "https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/become-a-virtual-assistant-featured-image.jpg",
      tags: ["React", "React-native", "AI", "Node.js"],
      link: "https://github.com/webdevlopment1234/skill-gap-analysis-and-resume-builder.git",
      color: "#f59e0b"
    }
  ];

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="projects-3d">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Featured Projects</h2>
          <p className="section-subtitle">
            Interactive showcase of my latest work and innovations
          </p>
        </motion.div>

        <div className="projects-container">
          {/* 3D Canvas */}
          <div className="projects-canvas-wrapper">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={1.2} />
              <ProjectCard3D
                project={projects[activeIndex]}
                isActive={true}
              />
            </Canvas>
          </div>

          {/* Project Details */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="project-details"
          >
            <h3>{projects[activeIndex].title}</h3>
            <p className="project-description">
              {projects[activeIndex].description}
            </p>

            <div className="tech-stack">
              <h4>Tech Stack:</h4>
              <div className="tags">
                {projects[activeIndex].tags.map((tag, idx) => (
                  <span key={idx} className="tag" style={{ 
                    borderColor: projects[activeIndex].color,
                    color: projects[activeIndex].color
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-links">
              <a
                href={projects[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="fab fa-github"></i> View Code
              </a>
              <a href="#contact" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="carousel-controls">
          <button
            className="nav-btn prev-btn"
            onClick={prevProject}
            aria-label="Previous project"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="project-indicators">
            {projects.map((_, idx) => (
              <button
                key={idx}
                className={`indicator ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          <button
            className="nav-btn next-btn"
            onClick={nextProject}
            aria-label="Next project"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Projects Grid (Alternative View) */}
        <div className="projects-grid-view">
          <h3 className="grid-title">All Projects</h3>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="project-card"
                onClick={() => setActiveIndex(idx)}
              >
                <div className="card-image">
                  <img src={project.image} alt={project.title} />
                  <div className="card-overlay">
                    <button className="btn">View</button>
                  </div>
                </div>
                <div className="card-content">
                  <h4>{project.title}</h4>
                  <p>{project.description.substring(0, 80)}...</p>
                  <div className="card-tags">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects3D;
