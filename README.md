# Alif Ramdani - Portfolio Website

A modern, responsive portfolio website built with React and Vite featuring a dark theme with mint green accents.

## Features

- **Modern Design**: Dark theme with mint green accents following current design trends
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Maintainable Content**: Separated content files (JSON) for easy updates
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Component-Based**: Modular React components for easy maintenance

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Services.jsx    # Services section
│   ├── Portfolio.jsx   # Portfolio/Projects section
│   ├── Contact.jsx     # Contact section
│   └── Footer.jsx      # Footer
├── data/               # Content data files
│   ├── personal.json   # Personal information
│   ├── projects.json   # Project showcase
│   ├── services.json   # Services offered
│   └── experience.json # Work experience
├── App.jsx            # Main application component
├── App.css           # Global styles
└── index.css         # Base styles
```

## Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Modern styling with custom properties
- **Google Fonts** - Poppins font family

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Customization

### Updating Content

All content is stored in JSON files in the `src/data/` directory:

- `personal.json` - Update personal information, contact details, and social links
- `projects.json` - Add or modify portfolio projects
- `services.json` - Update services and skills
- `experience.json` - Modify work experience

### Design Customization

Colors and design tokens are defined as CSS custom properties in `src/App.css`:

```css
:root {
  --bg-main: #282828;        /* Main background */
  --text-light: #F8F8F8;     /* Primary text */
  --primary-mint: #08F8B8;    /* Accent color */
  --secondary-green: #185E4C;  /* Secondary accent */
  --accent-dark: #1F2A27;     /* Dark accent */
  --text-muted: #B8B8B8;      /* Muted text */
}
```

## Deployment

This portfolio can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **GitHub Pages**: Use GitHub Actions for automated deployment

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **LinkedIn**: [https://www.linkedin.com/in/alif-ramdani/](https://www.linkedin.com/in/alif-ramdani/)
- **GitHub**: [https://github.com/alramdein](https://github.com/alramdein)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
