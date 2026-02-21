// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu on link click
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Typing Effect
const typedText = document.getElementById("typed");
const words = ["Developer", "Designer", "Creator", "Problem Solver"];
let wordIndex = 0, charIndex = 0, currentWord = "", isDeleting = false;

function type() {
  const word = words[wordIndex];
  if (isDeleting) {
    currentWord = word.substring(0, charIndex - 1);
    charIndex--;
  } else {
    currentWord = word.substring(0, charIndex + 1);
    charIndex++;
  }
  typedText.textContent = currentWord;

  if (!isDeleting && charIndex === word.length) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
document.addEventListener("DOMContentLoaded", () => setTimeout(type, 1000));

// Project Modal
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTags = document.getElementById("modalTags");
const modalLink = document.getElementById("modalLink");

const projects = [
  {
    title: "Interactive sign language translator",
    desc: "Interactive sign language translator built with React, flask ",
    tags: ["React", "Flask"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYj1VJTRCTkdP8fgPcYHlatJcWQCTAzjU1A&s=10",
    link: "https://github.com/webdevlopment1234/Interactive-Sign-Language-Translation.git"
  },
  {
    title: "weather and geographic MAP",
    desc: "Weather and geographic map built with React, Express & MongoDB",
    tags: ["React", "Express", "MongoDB"],
    img: "https://d2cvjmix0699s1.cloudfront.net/resources/elephango/resourceFull/weather-climate-10739-full.jpg",
    link: "https://github.com/webdevlopment1234/weather-and-geographic"
  },
  {
    title: "my assistant",
    desc: "Voice-controlled assistant using Python & speech recognition.",
    tags: ["Python", "SpeechRecognition"],
    img: "https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/become-a-virtual-assistant-featured-image.jpg",
    link: "https://github.com/webdevlopment1234/virtual-assistance"
  }
];

function openModal(id) {
  const p = projects[id - 1];
  modal.style.display = "flex";
  modalImg.src = p.img;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;
  modalLink.href = p.link;
  modalLink.target = "_blank";
  modalLink.rel = "noopener noreferrer";

  modalTags.innerHTML = "";
  p.tags.forEach(t => {
    const s = document.createElement("span");
    s.textContent = t;
    modalTags.appendChild(s);
  });
}

function closeModal() { modal.style.display = "none"; }

// Close modal when clicking outside of it
window.addEventListener("click", e => { 
  if (e.target === modal) closeModal(); 
});

// Ensure GitHub link opens in new tab when clicked
document.addEventListener("DOMContentLoaded", () => {
  if (modalLink) {
    modalLink.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent modal from closing when clicking the link
      
      // Ensure the link opens properly
      const href = modalLink.href;
      if (href && href !== "#" && (href.includes("github.com") || href.startsWith("http"))) {
        // Open GitHub repository in new tab
        window.open(href, "_blank", "noopener,noreferrer");
        e.preventDefault(); // Prevent default to ensure our window.open works
      }
    });
  }
});

// Contact Form — open Gmail compose prefilled (client-side)
// This opens Gmail web compose in a new tab addressed to ahmedmohiuddinasad786@gmail.com.
// Note: sending programmatically from client-side isn't allowed; this opens the compose screen for the user.
const form = document.getElementById("contactForm");
const status = document.getElementById("form-status");

form.addEventListener("submit", e => {
  e.preventDefault();
  const fd = new FormData(form);
  const name = fd.get("name") || "";
  const fromEmail = fd.get("email") || "";
  const message = fd.get("message") || "";

  const toEmail = "ahmedmohiuddinasad786@gmail.com";
  const subject = `Portfolio message from ${name}${fromEmail ? ' <' + fromEmail + '>' : ''}`;
  const bodyLines = [];
  if (name) bodyLines.push(`Name: ${name}`);
  if (fromEmail) bodyLines.push(`Email: ${fromEmail}`);
  if (message) bodyLines.push('', 'Message:', message);
  const body = bodyLines.join('\n');

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(toEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = "Opening Gmail compose...";
  status.style.color = "#007bff";

  // Try opening Gmail compose in a new tab. If blocked, fall back to mailto:.
  let opened = false;
  try {
    const win = window.open(gmailUrl, '_blank');
    opened = !!win;
  } catch (err) {
    opened = false;
  }

  if (!opened) {
    // Fallback to mailto (may open default mail app like Outlook). This is only used if browser blocks popup.
    const mailto = `mailto:${encodeURIComponent(toEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Use location.href to trigger the fallback
    window.location.href = mailto;
    status.textContent = "Opened your mail client. Please review and send the message.";
    status.style.color = "#28a745";
    form.reset();
    return;
  }

  // If Gmail tab opened, instruct the user to send it there.
  status.textContent = "Gmail compose opened in a new tab — please review and click Send.";
  status.style.color = "#28a745";
  form.reset();
});

// Skill Bars Animation
const skillBars = document.querySelectorAll(".skill");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const level = entry.target.getAttribute("data-level");
      entry.target.querySelector(".skill-level").style.width = level + "%";
    }
  });
}, { threshold: 0.9 });

skillBars.forEach(bar => observer.observe(bar));