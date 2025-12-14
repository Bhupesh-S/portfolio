# Portfolio Website

A clean, professional portfolio website built with React and Vite, showcasing skills, projects, and professional experience for recruiters and technical reviewers.

## Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Mode Support**: Automatic dark/light theme based on system preferences
- **Modern UI**: Clean, minimal design with professional typography and spacing
- **Performance Optimized**: Built with Vite for fast load times and optimal performance
- **Accessible**: Semantic HTML and ARIA labels for better accessibility
- **Smooth Navigation**: Smooth scrolling between sections

## Tech Stack

- **React** - UI library with hooks
- **Vite** - Build tool and development server
- **CSS Modules** - Scoped styling with minimal CSS
- **JavaScript** - Modern ES6+ syntax

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Header.module.css
│   │   ├── Hero.jsx
│   │   ├── Hero.module.css
│   │   ├── About.jsx
│   │   ├── About.module.css
│   │   ├── Projects.jsx
│   │   ├── Projects.module.css
│   │   ├── Skills.jsx
│   │   ├── Skills.module.css
│   │   ├── Contact.jsx
│   │   ├── Contact.module.css
│   │   ├── Footer.jsx
│   │   └── Footer.module.css
│   ├── App.jsx          # Main app component
│   ├── App.css          # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173/`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Customization

### Update Personal Information

Edit the component files in `src/components/` to customize:

- **Hero.jsx**: Your name, role, and professional summary
- **About.jsx**: Bio and tech stack
- **Projects.jsx**: Project details, descriptions, and links
- **Skills.jsx**: Skills organized by category
- **Contact.jsx**: Email, GitHub, and LinkedIn links

### Customize Styling

Global design tokens are defined in `src/index.css`:
- Color palette (light and dark mode)
- Spacing scale
- Typography settings
- Transitions

Component-specific styles are in their respective `.module.css` files.

## Sections

1. **Home**: Introduction with name, role, and professional tagline
2. **About**: Short bio and categorized tech stack
3. **Projects**: Portfolio of 5 projects with descriptions, tech stacks, and links
4. **Skills**: Categorized skills (Frontend, Backend, Database, DevOps/Tools)
5. **Contact**: Email, GitHub, and LinkedIn contact information

## Performance

- Lighthouse score optimized for performance
- Code splitting with React lazy loading (can be added for larger apps)
- Minimal dependencies for fast load times
- Optimized images and assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

For questions or feedback, reach out via the contact information in the portfolio.

