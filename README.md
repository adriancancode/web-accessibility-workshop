# Web Accessibility Workshop Demo

This repository contains a simple React + Vite webpage that is intentionally filled with common web accessibility issues.

The purpose of this project is to give workshop participants a hands-on way to practice identifying and fixing accessibility problems in a realistic frontend application.

## Workshop Goal

Participants should work in teams to:

- Explore the page
- Identify accessibility issues
- Fix them directly in the code
- Test their improvements using browser dev tools, keyboard navigation, and accessibility tools such as Lighthouse or axe DevTools

## Tech Stack

- React
- TypeScript
- Vite

## Important Note

This project is **intentionally inaccessible** for learning purposes.

Please do **not** use this code as a production example of accessible frontend design.

## Common Issues Included

Some examples of issues intentionally included in this project are:

- Missing or poor alternative text on images
- Incorrect heading structure
- Links with vague or unclear text
- Form inputs without proper labels
- Poor keyboard accessibility
- Clickable non-semantic elements
- Missing button accessible names
- Duplicate IDs
- Poor color contrast
- Missing descriptive text for media or controls
- Table structure issues

Participants are encouraged to find as many issues as possible beyond this list.

## Getting Started

Clone and navigate into the repository:

```bash
git clone web-accessibility-workshop
cd web-accessibility-workshop
```

Install dependencies:
```bash
npm install
```
Run development server:
```bash
npm run dev
```
Then open http://localhost:5173/ to access the site.



