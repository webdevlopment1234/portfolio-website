function Services() {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies and best practices.'
    },
    {
      icon: 'fas fa-palette',
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with focus on user experience and accessibility.'
    },
    {
      icon: 'fas fa-cube',
      title: '3D Design',
      description: 'Designing stunning 3D models and visualizations for web and interactive experiences.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>My Services</h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
