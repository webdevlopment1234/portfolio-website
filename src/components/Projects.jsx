import { useState } from 'react';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Interactive Sign Language Translator",
      description: "AI-powered sign language translation using React and Flask",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYj1VJTRCTkdP8fgPcYHlatJcWQCTAzjU1A&s",
      tags: ["React", "Flask", "AI"],
      link: "https://github.com/webdevlopment1234/Interactive-Sign-Language-Translation.git"
    },
    {
      title: "Weather & Geographic Map",
      description: "Real-time weather tracking with interactive geographic mapping",
      image: "https://d2cvjmix0699s1.cloudfront.net/resources/elephango/resourceFull/weather-climate-10739-full.jpg",
      tags: ["React", "Express", "MongoDB"],
      link: "https://github.com/webdevlopment1234/weather-and-geographic"
    },
    {
      title: "skill-gap analysis and resume builder",
      description: "AI-driven skill-gap analysis and resume builder for career development",
      image: "https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/become-a-virtual-assistant-featured-image.jpg",
      tags: ["React", "React-native", "AI"],
      link: "https://github.com/webdevlopment1234/skill-gap-analysis-and-resume-builder.git"
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card" onClick={() => setSelectedProject(project)}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="btn">View Details</button>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="project-tags">
              {selectedProject.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn">
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
