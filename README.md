# FHC Website Redesign

Welcome to the FHC Web Redesign project! This README will guide developers through setting up the development environment, installing dependencies, and getting started with writing code.

This project is a comprehensive redesign of the FHC website. The primary goal is to create a modern, user-friendly, and informative platform for FHC.

**Key Technologies:**
*   **Frontend:** React (bootstrapped with Create React App)
*   **Styling:** Tailwind CSS, Bootstrap
*   **Routing:** React Router DOM
*   **Payments:** Stripe Integration
*   **Email:** EmailJS for contact forms
*   **Maps:** React Google Maps API

## Table of Contents

- [FHC Website Redesign](#fhc-website-redesign)
  - [React Project Setup Guide](#react-project-setup-guide)
    - [Prerequisites](#prerequisites)
    - [Environment Variables](#environment-variables)
  - [Installation Instructions](#installation-instructions)
  - [Available Scripts](#available-scripts)
    - [`npm start`](#npm-start)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)
  - [Project Structure](#project-structure)
  - [Developing Components and Pages](#developing-components-and-pages)
    - [Components](#components)
    - [Pages](#pages)
    - [Adding New Pages and Routes](#adding-new-pages-and-routes)
  - [Styling](#styling)
  - [Asset Management](#asset-management)
    - [Using the `src/assets` Directory](#using-the-srcassets-directory)
    - [Using the `public` Directory](#using-the-public-directory)
  - [Deployment](#deployment)
  - [Contribution Guidelines](#contribution-guidelines)
    - [Branching Notes](#branching-notes)
  - [Creating a Branch and Pushing Your Code](#creating-a-branch-and-pushing-your-code)
- [Google Analytics Integration](#google-analytics-integration)
- [Contributors & Thanks](#contributors--thanks)
- [README Documentation Authors](#readme-documentation-authors)



## React Project Setup Guide

### Prerequisites

Install these before doing anything:

- Node.js (LTS version recommended, download from nodejs.org)

- npm or yarn (Comes with Node.js)

- Git (Download from git-scm.com)

## Installation Instructions


1. Clone the Repository
```bash
git clone https://github.com/Fund-Homecare-Canada-Website-Redesign/FHC-webredesign.git
cd FHC-webredesign
```
2. Install Dependencies
- using npm:
```bash
npm install
```
3. Start the Development Server
```bash
npm start
```

### Environment Variables

This project uses environment variables for configuration, such as API keys. Create a `.env` file in the root of the project by copying the example:

```bash
cp .env.example .env
```

Then, update the `.env` file with your specific keys and configuration:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
# Add any other environment variables here
```
## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Project Structure

Here's an overview of the key directories and files in this project:

*   **`/public`**: Contains static assets that are publicly accessible. This includes `index.html` (the main HTML page), `favicon.ico`, `manifest.json` (for PWA capabilities), and other assets like images or fonts that don't go through the webpack build process.
*   **`/src`**: This directory contains all the React application code.
    *   **`/src/assets`**: Holds static assets like images (e.g., logos, event pictures), PDFs, and font files. It also contains `src/assets/styles/BrandColours.js` for global color definitions.
    *   **`/src/components`**: Contains reusable UI components (e.g., `Navbar.jsx`, `Footer.jsx`, `EventPictureSlider.jsx`). These are the building blocks of the application's views.
    *   **`/src/pages`**: Contains top-level components that represent the different pages of the application (e.g., `MainPage.jsx`, `AboutUs.jsx`, `ContactUs.jsx`). These components are typically rendered by the router.
    *   **`/src/services`**: Includes modules for interacting with external services. For example, `emailServices.jsx` likely handles email sending functionality using EmailJS.
    *   **`/src/styles`**: Contains global styles. (Note: The primary styling approach is Tailwind CSS, configured in `tailwind.config.js`.)
    *   **`App.js`**: The main application component. It sets up the routing structure for the different pages using `react-router-dom`.
    *   **`index.js`**: The entry point for the React application. It renders the root `App` component into the DOM.
    *   **`tailwind.config.js`**: Configuration file for Tailwind CSS, allowing customization of themes, plugins, and more.
*   **`package.json`**: Lists project dependencies, scripts, and other metadata.
*   **`.env` **: Stores environment-specific variables (API keys, etc.). This file is not committed to version control. (See "Environment Variables" section for setup).
*   **`README.md`**: This file - providing an overview and guide for the project.

## Developing Components and Pages

This section provides guidelines for creating and managing components and pages within the project.

### Components
*   **Location**: Reusable UI components should be placed in the `src/components/` directory.
*   **Naming**: Use PascalCase for component file names and component function/class names (e.g., `MyComponent.jsx`).
*   **Purpose**: Components should ideally be focused on a specific piece of UI or functionality to promote reusability and maintainability.
*   **Example**: A new button component would be `src/components/CustomButton.jsx`.

### Pages
*   **Location**: Top-level page components are located in the `src/pages/` directory.
*   **Naming**: Use PascalCase for page file names and component names (e.g., `AboutUsPage.jsx` or simply `AboutUs.jsx` if it's clear it's a page). The current project uses `AboutUs.jsx`.
*   **Purpose**: Pages represent distinct views or sections of the website and are typically mapped to routes.

### Adding New Pages and Routes
1.  **Create the Page Component**: Add your new page component in the `src/pages/` directory (e.g., `src/pages/NewPage.jsx`).
2.  **Define the Route**: Open `src/App.js`. Import your new page component and add a new `<Route>` definition within the `<Routes>` component.

    ```javascript
    // src/App.js
    import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    // ... other imports
    import NavbarComponent from './components/Navbar';
    import Footer from './components/Footer';
    // ... import existing pages
    import MainPage from './pages/MainPage';
    import AboutUs from './pages/AboutUs';
    // ...
    import NewPage from './pages/NewPage'; // <-- Import your new page

    function App() {
      return (
        <Router>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* ... other routes */}
            <Route path="/new-page-url" element={<NewPage />} /> {/* <-- Add your new route */}
          </Routes>
          <Footer />
        </Router>
      );
    }

    export default App;
    ```
3.  **Navigation**: If needed, add links to your new page in the `NavbarComponent` (`src/components/Navbar.jsx`) or other relevant components.

## Styling

This project uses a combination of Tailwind CSS and Bootstrap for styling, with Tailwind CSS being the primary framework.

### Tailwind CSS

- The main styling approach relies on Tailwind's utility classes.
- Configuration for Tailwind (e.g., custom themes, plugins) can be found in `tailwind.config.js` at the root of the project.
- Leverage Tailwind's utility classes as much as possible before writing custom CSS.

### Bootstrap

- Bootstrap is also included (`bootstrap/dist/css/bootstrap.min.css` is imported in `App.js` and `index.js`).
- Use Bootstrap selectively when it offers convenient components.
- Be mindful of conflicts — Tailwind generally wins in specificity, but avoid overlapping classes when possible.

### Brand Colors

- Predefined brand colors are available in `src/assets/styles/BrandColours.js`.
- These can be imported directly into components or optionally added to the Tailwind config.

### Global Styles & Custom CSS

- Use `src/index.css` or `src/App.css` for any global styles that cannot be accomplished with utility classes.
- Keep custom CSS minimal and scoped to components when possible.

### Responsive Design

- Use Tailwind’s responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) to ensure mobile and desktop compatibility.

---

### TailwindCSS Design Standards

> Feel free to extend or refine these standards as needed. If changes are made, please commit with a descriptive message so others can follow updates.

#### Border Radius

| Component           | Tailwind Class |
|---------------------|----------------|
| Buttons             | `rounded-md`   |
| Cards / Sections    | `rounded-lg`   |
| Modals & Containers | `rounded-lg`   |
| Avatars             | `rounded-xl`   |
| Icons               | `rounded-xl`   |

#### Typography

- Use `font-montserrat` for all text.
- Apply `font-bold`, `font-semibold`, or `font-medium` based on visual hierarchy and emphasis needs.

#### Responsive Design

- Always apply breakpoints where applicable:
  - `sm:` (≥640px)
  - `md:` (≥768px)
  - `lg:` (≥1024px)
  - `xl:` (≥1280px)
  - `2xl:` (≥1536px)
- Adjust layout, padding, font size, etc., using these breakpoints to improve responsiveness across devices.


## Asset Management

This section describes how to manage static assets like images, fonts, and PDFs.

### Using the `src/assets` Directory
*   **Purpose**: For assets that you want to be processed by webpack and included in your application bundle. This is the recommended approach for most assets that are directly used within your React components (e.g., images, icons, PDFs that might be displayed or linked).
*   **Location**: Store these assets in the `src/assets/` directory, organized into subdirectories as needed (e.g., `src/assets/images/`, `src/assets/pdfs/`, `src/assets/fonts/`).
*   **Usage**: You can import these assets directly into your JavaScript files.

    ```javascript
    // Example: Using an image in a component
    import myImage from '../assets/images/my-image.png';

    function MyComponent() {
      return <img src={myImage} alt="Description" />;
    }
    ```
    When the project is built, webpack will move the images into the build folder and provide correct paths.

### Using the `public` Directory
*   **Purpose**: For assets that are not imported into your JavaScript files but need to be available in the build output, or are referenced directly in `public/index.html`.
*   **Location**: Place these assets in the `public/` directory.
*   **Examples**:
    *   `public/favicon.ico` (website icon)
    *   `public/manifest.json` (Progressive Web App manifest)
    *   `public/robots.txt` (instructions for web crawlers)
    *   Images or files that you need to link to directly by URL, without processing by webpack.
*   **Usage**: Files in `public/` can be referenced using the `%PUBLIC_URL%` placeholder in `public/index.html` (e.g., `<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />`) or directly by path (e.g., `/my-image.png` would refer to `public/my-image.png`).

**Note**: Refer to the Create React App documentation for more details on using assets in the `public` folder versus `src`. Generally, prefer importing assets into `src` when possible for better optimization and management.

## Deployment

This project is set up for automatic deployment to Vercel. Once changes are committed to the main branch, Vercel will automatically detect the new commit, trigger a build process, and deploy the updated application.

**Deployment Process:**

1.  **Commit to main**: Ensure your changes are thoroughly tested and reviewed.
2.  **Push to GitHub**: Push your committed changes to the main branch on GitHub.
3.  **Vercel Integration**: Vercel is configured to monitor the main branch of this repository. Upon a new push to main, Vercel will:
    *   Pull the latest code.
    *   Install dependencies.
    *   Run the `npm run build` command to create a production build.
    *   Deploy the `build` folder as the new version of the website.

## Contribution Guidelines

### Branching Notes

Use clear, descriptive names for branches that reflect the purpose of your changes. Follow this naming convention:

- `feature/your-feature-name` – for new components or functionality
- `fix/your-fix-description` – for minor fixes and patches
- `bug/your-bug-description` – for resolving reported bugs
- `docs/your-doc-update` – for updates to README or documentation

Use **kebab-case**, keep branch names concise, and avoid spaces or special characters.

#### *Note: If no one else has modified main, there's no need to pull from main (even though it's safe to do so)*

#### *Note: If main has been updated since you created your branch, pulling ensures you have the latest changes:*
-> *do this when you are about to create a new branch and the remote repo has been changed since you last modified it*
```bash
git checkout main
git pull origin main
git checkout my-branch
# below merges main to your branch to sync it
git merge main
```

#### If Another Developer Merges a Change to main:
--> If main has significant updates (e.g., bug fixes, new features), sync your branch:
--> do this when you have already created your branch and another dev has had their branch merged with main during your branch  (feature development)
```bash
git checkout my-branch
git merge main
```

## Creating a Branch and Pushing Your Code

Create a new branch for your feature:
```bash
# ALWAYS create a branch
git checkout -b feature-name
```
(Do some work)

Commit your changes:
```bash
# add all changes in current directory and sub-directories
git add .
```
OR
```bash
# add files manually
git add file1 file2 
```
```bash
# write a descriptive message of your changes
git commit -m "Added new feature"
```

Push to GitHub:
```bash
# ALWAYS make the changes in your branch and push to your branch
git push origin feature-name
```

**IMPORTANT**:
*Please try to avoid merging to main from the command line. For safety open a pull request and assign a reviewer to review your changes.*

Open a Pull Request on GitHub:

- Go to your repository on GitHub.
- Click Pull Requests > New Pull Request.
- Select `<feature-name>` as the compare branch and main as the base branch.
- Add a title and description, then request a review.

## Google Analytics Integration

## Contributors & Thanks

This project was built with care and collaboration by the Tech for Social Impact team at Western University. Thank you again for the opportunity to take part in a project for a better cause.

**Contributors**
- **Noah Kostesku**: Project Manager & Developer - Website Redesign
- **Stephanie Li**: Project Manager - Website Redesign
- **David Liu**: Project Manager - Google Analytics
- **Parneet Baidwan**: Project Manager - Google Analytics
- **Zekai Zhao**: Developer
- **Johnathan Lam**: Developer
- **Sam Humphrey**: Developer

We extend our deepest thanks to **Fund Homecare Canada** for trusting us with their digital platform. It’s been an honour to contribute to a mission supporting in-home palliative care for cancer patients.

## README Documentation Authors

The following team members contributed to writing and maintaining this README:

- **Noah Kostesku**: Author for the "Website Redesign" section and its subsections, as well as the "Contributors & Thanks" and "README Documentation Authors" sections 
- **David Liu**:
- **Zekai Zhao**: 

This documentation was created to ensure future developers and contributors can confidently navigate and maintain the Fund Homecare Canada website.

---

*With support from the Western University Tech for Social Impact Initiative.*


