# React Portfolio Website

A modern, responsive portfolio website built with React, Vite, and React Icons. Features a professional design with smooth animations and mobile-first responsiveness.

## Preview

The portfolio includes the following sections:

- **Navigation Header** - Sticky header with mobile menu toggle
- **Hero Section** - Eye-catching landing area with CTA buttons
- **About** - Personal introduction with statistics
- **Projects** - Showcase of featured projects with tech stack
- **Skills** - Categorized skills and expertise
- **Contact** - Contact form and social media links
- **Footer** - Copyright and branding

## Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.3.1** - Build tool and dev server
- **React Icons 5.6.0** - Icon library (100+ icons)
- **CSS3** - Custom styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

   ```bash
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

The application will open at `http://localhost:5173`

### Production Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx & Header.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── About.jsx & About.css
│   │   ├── Projects.jsx & Projects.css
│   │   ├── Skills.jsx & Skills.css
│   │   ├── Contact.jsx & Contact.css
│   │   └── Footer.jsx & Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

## Customization

### Update Personal Information

Edit the following files to add your information:

1. **Hero.jsx** - Update name and headline
2. **About.jsx** - Update biography and statistics
3. **Projects.jsx** - Add your project details
4. **Skills.jsx** - Update your skills
5. **Contact.jsx** - Add your contact information and social links

### Color Scheme

Customize the color scheme by editing:

- **Component CSS files** - Change gradient colors in Header.css and Hero.css
- **index.css** - Update CSS variables (--primary, --secondary, etc.)

### Add Custom Icons

React Icons provides access to multiple icon libraries:

```jsx
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
```

Browse available icons: [https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)

### Connect Contact Form

To make the contact form functional:

1. Install a backend service package (e.g., `npm install formspree`)
2. Update the Contact.jsx form submission handler
3. Connect to your email service

## Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## Features

- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Fast Performance** - Vite for lightning-fast builds
- 🎨 **Modern UI** - Beautiful gradients and animations
- 🎯 **Smooth Scrolling** - Smooth anchor link navigation
- 📦 **100+ Icons** - React Icons integration
- 🌙 **Animations** - Hover effects and transitions
- 📱 **Mobile Menu** - Hamburger menu for mobile devices

## Tips

- Use React Icons for any additional icons needed
- CSS can be enhanced with Tailwind CSS if preferred
- Consider adding Framer Motion for advanced animations
- Update project links with real URLs
- Add real project images in Projects section
- Replace contact form with Formspree, EmailJS, or similar service

## Deployment

The project can be deployed to:

- **Netlify** - Connect your Git repository
- **Vercel** - Optimized for Vite projects
- **GitHub Pages** - Static hosting
- **Any static host** - Build outputs in `dist/` folder

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, refer to:

- Vite Documentation: [https://vitejs.dev/](https://vitejs.dev/)
- React Documentation: [https://react.dev/](https://react.dev/)
- React Icons: [https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)

---

Built with ❤️ using React and Vite
