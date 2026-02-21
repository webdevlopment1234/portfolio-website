import { useRef } from 'react';

function Skills() {
  const sectionRef = useRef(null);

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

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-wrapper">
          <div className="skills-category">
            <h3>Languages</h3>
            <div className="skills-list">
              {languages.map((skill, idx) => (
                <div key={idx} className="skill-badge">
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Technologies</h3>
            <div className="skills-list">
              {technologies.map((skill, idx) => (
                <div key={idx} className="skill-badge">
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Tools</h3>
            <div className="skills-list">
              {tools.map((skill, idx) => (
                <div key={idx} className="skill-badge">
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
