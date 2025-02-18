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
3. Start the Development Server
```bash
npm start
```
**Note**: this won't work if you aren't in the same directory where your node modules are installed. Make sure to do `cd fhc-webred` before you run `npm start` in your terminal
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
