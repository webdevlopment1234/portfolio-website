function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Who am I?</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg" alt="About" />
          </div>
          <div className="about-text">
            <h3>Professional Developer & Designer</h3>
            <p>I'm a passionate full-stack web developer with hands-on experience in HTML, CSS, JavaScript, and modern frameworks. I love building responsive, user-friendly applications from scratch.</p>
            <p>Currently learning advanced JavaScript, React, and backend development. Always eager to take on new challenges and deliver exceptional results!</p>
            
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name</span>
                <span className="detail-value">Syed Ahmed Mohiuddin</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Age</span>
                <span className="detail-value">22</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">India</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">ahmedmohiuddinasad786@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
