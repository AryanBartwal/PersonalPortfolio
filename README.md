# Modern Personal E-Portfolio

This is a modern personal e-portfolio built with React, Styled Components, and Bootstrap. The portfolio showcases my professional profile, skills, education, and projects with a sleek, responsive design and interactive UI elements.

## Project Structure

The project is organized as follows:

```
personal-e-portfolio
├── public
│   ├── index.html          # Main HTML file for the React application
│   ├── resume.pdf          # PDF version of my resume
│   ├── favicon.ico         # Favicon for the website
│   ├── images/             # Images used throughout the portfolio
│   └── profile/            # JSON data files for the portfolio sections
│       ├── about.json      # About section data
│       ├── education.json  # Education section data
│       ├── home.json       # Home section data
│       ├── navbar.json     # Navigation data
│       ├── skills.json     # Skills section data
│       └── social.json     # Social media links
├── src
│   ├── components          # Contains all React components
│   │   ├── About.js        # About section component
│   │   ├── Education.js    # Education section component
│   │   ├── Home.js         # Home/hero section component
│   │   ├── Navbar.js       # Navigation bar component
│   │   ├── Projects.js     # Projects section component
│   │   └── Skills.js       # Skills section component
│   ├── theme               # Theme configuration
│   │   ├── GlobalStyle.js  # Global CSS styles
│   │   └── themes.js       # Light/dark theme configurations
│   ├── App.js              # Main application component
│   ├── index.css           # Global CSS styles
│   └── index.js            # Entry point for the React application
├── package.json            # npm configuration file
├── README.md               # Project documentation
└── vercel.json             # Vercel deployment configuration
```

**Live Demo of E-Portfolio:** [https://personal-e-portfolio.vercel.app/](https://personal-e-portfolio.vercel.app/)

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Start the development server with `npm start`.
5. Open your browser and go to `http://localhost:3000` to view the e-portfolio.

## Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Dark/Light Mode**: Toggle between dark and light themes
- **Modern UI Elements**: 
  - Animated gradient backgrounds
  - Interactive hover effects
  - Floating particle elements
  - Smooth transitions and animations
- **Hero Section**: Engaging introduction with typewriter effect and eye-catching profile image
- **About Section**: Professional profile with animated stat cards and skill badges
- **Skills Section**: Categorized skills with descriptive skill level indicators
- **Education Section**: Timeline of educational achievements with elegant cards
- **Projects Section**: Display of portfolio projects with filtering functionality
- **Social Media Integration**: Links to professional profiles and contact methods

## Technologies Used

- React 17+
- Styled Components
- React Bootstrap
- React Reveal (animations)
- JSON-based content management
- CSS Animations and Keyframes
- Responsive Design Principles
- CSS Variables and Theming

## GitHub and Vercel Deployment

### Pushing to GitHub
1. Initialize a Git repository (if not done already):
   ```bash
   git init
   ```
2. Add all files to the repository:
   ```bash
   git add .
   ```
3. Commit your changes:
   ```bash
   git commit -m "Modern e-portfolio with responsive design and animations"
   ```
4. Add your GitHub repository as remote (replace with your GitHub repository URL):
   ```bash
   git remote add origin https://github.com/yourusername/personal-e-portfolio.git
   ```
5. Push to GitHub:
   ```bash
   git push -u origin main
   ```

### Deploying to Vercel
1. Sign in to [Vercel](https://vercel.com)
2. Click "New Project" and import your GitHub repository
3. Vercel will automatically detect the React settings
4. Click "Deploy" and wait for the build to complete
5. Once deployed, you'll receive a live URL for your portfolio

The project includes a `vercel.json` file with necessary configuration for successful builds on Vercel.

## Author

Aryan Bartwal  
Full-Stack Developer & AI/ML Enthusiast

Feel free to explore the project and provide feedback!

## License

MIT License