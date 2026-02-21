# 🌐 Syed Ahmed Mohiuddin - Professional Portfolio

A modern, responsive, and professional portfolio website built with React.js and CSS3. Showcasing projects, skills, and services with smooth animations and interactive UI.

## ✨ Features

- **Modern Dark Theme** - Professional dark background with green accent colors
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Smooth Animations** - Hover effects and transitions throughout
- **Typing Effect** - Animated role display in hero section
- **Project Showcase** - Interactive project cards with modal details
- **Skills Section** - Organized skills with icons (Languages, Technologies, Tools)
- **Contact Form** - Functional contact form with Gmail integration
- **Social Links** - Direct links to GitHub, LinkedIn, Instagram, and Email
- **SEO Optimized** - Clean semantic HTML structure

## 🛠️ Tech Stack


- **Frontend**: React.js 18+
- **Styling**: CSS3 (Custom)
- **Build Tool**: Vite
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Poppins (Google Fonts)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with mobile menu
│   │   ├── Hero.jsx            # Hero section with typing effect
│   │   ├── About.jsx           # About section with details
│   │   ├── Services.jsx        # 6 service cards
│   │   ├── Projects.jsx        # Project showcase with modal
│   │   ├── Skills.jsx          # Skills with icons
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global styles
│   ├── main.jsx                # Entry point
│   └── index.html              # HTML template
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 📋 Sections

### 1. **Navbar**
- Fixed navigation with smooth scroll
- Mobile hamburger menu
- Links: Home, About, Services, Projects, Skills, Contact

### 2. **Hero Section**
- Large heading with name highlight
- Animated typing effect (Full Stack Developer, UX-UI Designer, Problem Solver)
- Contact and Download CV buttons
- Contact information (Email, Phone, Location)
- Profile image

### 3. **About Section**
- Professional bio
- Personal details (Name, Age, Location, Email)
- Profile image with shadow effects

### 4. **Services Section**
- 6 service cards in responsive grid:
  - Web Development
  - UI/UX Design
  - 3D Design
  - Branding
  - Customer Support
  - Marketing

### 5. **Projects Section**
- 6 project cards with images
- Hover overlay with "View Details" button
- Modal popup with full project information
- GitHub links for each project

### 6. **Skills Section**
- Organized by categories:
  - **Languages**: Java, Python, JavaScript
  - **Technologies**: HTML, CSS, JS, React, Redux, Node.js, Express, MySQL, MongoDB, Tailwind CSS
  - **Tools**: Git, GitHub, Vercel, Docker, Render, Railway
- Each skill displays with Font Awesome icon

### 7. **Contact Section**
- Contact form (Name, Email, Message)
- Gmail integration for form submission
- Social media links (GitHub, LinkedIn, Instagram, Email)

### 8. **Footer**
- Copyright information

## 🎨 Color Scheme

- **Primary Background**: `#0f1419` (Dark)
- **Secondary Background**: `#1a2332` (Darker)
- **Accent Color**: `#10b981` (Green)
- **Text Color**: `#e0e0e0` (Light Gray)
- **Highlight**: `#ffd700` (Gold)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Customization

### Update Personal Information

Edit `src/components/Hero.jsx`:
```jsx
<h1>Hi There! I am <span className="highlight">Your Name</span></h1>
```

### Update Contact Email

Edit `src/components/Contact.jsx`:
```jsx
const toEmail = 'your-email@gmail.com';
```

### Add/Remove Projects

Edit `src/components/Projects.jsx` - Modify the `projects` array

### Update Skills

Edit `src/components/Skills.jsx` - Modify the skill arrays with icons

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

## 🌐 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload 'dist' folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

## 📞 Contact

- **Email**: ahmedmohiuddinasad786@gmail.com
- **Phone**: +91 8523021367
- **Location**: India
- **GitHub**: [webdevlopment1234](https://github.com/webdevlopment1234)
- **LinkedIn**: [Syed Ahmed Mohiuddin](https://www.linkedin.com/in/syed-ahmed-mohiuddin-9a102a2bb/)
- **Instagram**: [@syedahmedasad](https://www.instagram.com/syedahmedasad/)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for Poppins font
- Vite for fast build tooling
- React community for amazing tools

---

**Made with ❤️ by Syed Ahmed Mohiuddin**
