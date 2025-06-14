// 3D tilt effect for project cards on mouse move
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.setProperty('--rotateX', `${-rotateX}deg`);
    card.style.setProperty('--rotateY', `${rotateY}deg`);
  });
  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--rotateX', '0deg');
    card.style.setProperty('--rotateY', '0deg');
  });
});

// Smooth scroll and active nav link highlighting
const navLinks = document.querySelectorAll('.nav-links a');
const sections = [...navLinks].map(link => document.querySelector(link.hash));

window.addEventListener('scroll', () => {
  let current = '';
  const scrollPos = window.scrollY + window.innerHeight / 3;
  sections.forEach(section => {
    if (section.offsetTop <= scrollPos) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

// Contact form submission opens mailto link with your email and form data
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const yourEmail = 'ahmedmohiuddinasad786@gmail.com';

form.addEventListener('submit', e => {
  e.preventDefault();
  formMessage.textContent = '';
  formMessage.className = '';

  if (!form.checkValidity()) {
    formMessage.textContent = 'Please complete all required fields correctly.';
    formMessage.classList.add('error');
    form.reportValidity();
    return;
  }
  const name = encodeURIComponent(form.name.value.trim());
  const email = encodeURIComponent(form.email.value.trim());
  const subject = encodeURIComponent(form.subject.value.trim());
  const message = encodeURIComponent(form.message.value.trim());

  // Compose mailto link -- include sender info in body
  const mailtoLink = `mailto:${yourEmail}?subject=${subject}&body=Name:%20${name}%0AEmail:%20${email}%0A%0A${message}`;

  // Open user's email client with pre-filled email
  window.location.href = mailtoLink;

  // Optional: Show message after small delay
  formMessage.textContent = 'Opening your email client to send the message...';
  formMessage.classList.remove('error');
  formMessage.classList.add('success');

  form.reset();
});
