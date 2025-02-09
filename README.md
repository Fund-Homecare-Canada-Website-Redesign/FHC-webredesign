# FHC Website Redesign

Welcome to the FHC Web Redesign project! This README will guide developers through setting up the development environment, installing dependencies, and getting started with writing code.

### React Project Setup Guide

Prerequisites

Install these before doing anything:

- Node.js (Download from nodejs.org)

- npm or yarn (Comes with Node.js)

- Git (Download from git-scm.com)

## Installation Instructions


1. Clone the Repository
```
git clone https://github.com/noahkostesku/FHC-webredesign.git
cd FHC-webredesign
```
2. Install Dependencies
- using npm:
```
npm install
```
3. Start the Development Server
```
npm start
```
4. Creating New Components

All reusable UI components should be placed inside `src/components/`. Follow these steps to create a new component:

5. Using React Router

If you need to add new pages and navigation:
```
npm install react-router-dom
```
6. Styling

Use the `src/styles/` directory for global styles.

Each component should have a corresponding .css file.

Contribution Guidelines

Create a new branch for your feature:
```
git checkout -b feature-name
```

Commit your changes:
```
git add . (for every change file)

OR

git add file1 file2 etc

git commit -m "Added new feature"
```

Push to GitHub:
```
git push origin feature-name
```

**IMPORTANT**: Open a pull request and request a review after doing the above steps.
