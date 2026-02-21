import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import SkillOrbit3D from './3D/SkillOrbit3D';
import '../styles/Skills3D.css';

function Skills3D() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const languages = [
    { name: "Java", icon: "fab fa-java" },
    { name: "Python", icon: "fab fa-python" },
    { name: "JavaScript", icon: "fab fa-js-square" }
  ];

  const technologies = [
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "JS", icon: "fab fa-js" },
    { name: "ReactJS", icon: "fab fa-react" },
    { name: "Redux", icon: "fas fa-cube" },
    { name: "NodeJS", icon: "fab fa-node-js" },
    { name: "ExpressJS", icon: "fas fa-server" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "MongoDB", icon: "fas fa-leaf" },
    { name: "Tailwind CSS", icon: "fas fa-wind" }
  ];

  const tools = [
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "GitHub", icon: "fab fa-github" },
    { name: "Vercel", icon: "fas fa-rocket" },
    { name: "Docker", icon: "fab fa-docker" },
    { name: "Render", icon: "fas fa-cloud" },
    { name: "Railway", icon: "fas fa-train" }
  ];

  const allSkills = [...languages, ...technologies, ...tools];

  return (
    <section id="skills" className="skills-3d">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Technical Skills</h2>
          <p className="section-subtitle">
            Languages, frameworks, and tools I work with
          </p>
        </motion.div>

        <div className="skills-3d-wrapper">
          {/* 3D Rotating Orbit */}
          <div className="orbit-canvas-wrapper">
            <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <SkillOrbit3D skills={allSkills} />
            </Canvas>
          </div>

          {/* Skills Categories */}
          <div className="skills-grid">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="skill-category"
            >
              <h3>
                <i className="fas fa-code"></i> Languages
              </h3>
              <div className="skills-list">
                {languages.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1, y: -5 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`skill-badge ${
                      hoveredSkill === skill.name ? 'active' : ''
                    }`}
                  >
                    <div className="badge-icon">
                      <i className={skill.icon}></i>
                    </div>
                    <span>{skill.name}</span>
                    <div className="badge-glow"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="skill-category"
            >
              <h3>
                <i className="fas fa-cogs"></i> Technologies
              </h3>
              <div className="skills-list">
                {technologies.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1, y: -5 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`skill-badge ${
                      hoveredSkill === skill.name ? 'active' : ''
                    }`}
                  >
                    <div className="badge-icon">
                      <i className={skill.icon}></i>
                    </div>
                    <span>{skill.name}</span>
                    <div className="badge-glow"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="skill-category"
            >
              <h3>
                <i className="fas fa-tools"></i> Tools & Platforms
              </h3>
              <div className="skills-list">
                {tools.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1, y: -5 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`skill-badge ${
                      hoveredSkill === skill.name ? 'active' : ''
                    }`}
                  >
                    <div className="badge-icon">
                      <i className={skill.icon}></i>
                    </div>
                    <span>{skill.name}</span>
                    <div className="badge-glow"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skill Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="expertise-section"
        >
          <h3>Areas of Expertise</h3>
          <div className="expertise-grid">
            <div className="expertise-card">
              <i className="fas fa-network-wired"></i>
              <h4>Full Stack Development</h4>
              <p>Building complete web solutions from frontend to backend with modern frameworks</p>
            </div>
            
            <div className="expertise-card">
              <i className="fas fa-mobile"></i>
              <h4>UI/UX Design</h4>
              <p>Creating responsive, intuitive, and visually appealing user interfaces</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills3D;
