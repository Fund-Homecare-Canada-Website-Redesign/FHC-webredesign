# FHC Website Redesign

Welcome to the FHC Web Redesign project! This README will guide developers through setting up the development environment, installing dependencies, and getting started with writing code.

## React Project Setup Guide

### Prerequisites

Install these before doing anything:

- Node.js (Download from nodejs.org)

- npm or yarn (Comes with Node.js)

- Git (Download from git-scm.com)

## Installation Instructions


1. Clone the Repository
```bash
git clone https://github.com/noahkostesku/FHC-webredesign.git
cd FHC-webredesign
```
2. Install Dependencies
- using npm:
```bash
npm install
```
- install emailjs
```bash
npm install @emailjs/browser
```
3. Start the Development Server
```bash
npm start
```
4. Creating New Components

All reusable UI components should be placed inside `src/components/`. Follow these steps to create a new component:

5. Using React Router

If you need to add new pages and navigation:
```bash
npm install react-router-dom
```
6. Styling

## File Workflow

Use the `src/styles/` directory for global styles.

Tailwind will be used for styling, with *Tailwind breakpoints* for responsive design.

All pages should be placed inside `src/pages/`. 

Photos/PDFs/Colours should be placed inside `src/assets/`. 

Use `App.js` for calling pages and handling routing.

## Contribution Guidelines

### Branching Notes

#### If no one else has modified main, there's no need to pull from main

#### If main has been updated since you created your branch, pulling ensures you have the latest changes:
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

Commit your changes:
```bash
# add all chnages in current directory and sub-directories
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
Open a Pull Request on GitHub:

- Go to your repository on GitHub.
- Click Pull Requests > New Pull Request.
- Select `<feature-name>` as the compare branch and main as the base branch.
- Add a title and description, then request a review.









# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
