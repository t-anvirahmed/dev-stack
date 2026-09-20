# DevStack

# Live Website

https://earnest-beijinho-b9e67d.netlify.app/

## Description

DevStack is a modern web application designed to help developers explore and build their ideal technology stack. The platform presents a curated collection of popular frontend, backend, database, styling, and tooling technologies, making it easy for users to compare options and select the tools that best fit their projects. Built with a clean, responsive interface, DevStack is ideal for developers looking for inspiration, quick discovery, and a structured way to plan their development environment.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- JSON-based data handling
- Netlify deployment

## Features

- Interactive technology cards with descriptions, ratings, badges, and difficulty levels
- Add technologies to a personal “stack” sidebar
- Remove individual technologies or clear the full stack
- Toast notifications for user actions such as adding or removing items
- Responsive and modern UI for desktop and mobile devices
- Clean landing page with a hero section and project branding
- Data-driven content loaded from a local JSON file for easy updates

# React Q/A

- What is JSX, and why is it used in React?
  JSX is an extension that allows us to write HTML like code inside a JavaScript function. It is used because it makes React components easier to read and write.

- What is the difference between props and state?
  Props can't change, state can change.

- What does the useState hook do, and where did you use it in this project?
  UseState allows a component to store and manage data that can be changed and updates UI when that state changes. In this project, it was used to store the fetched data, the user's selected stack, and the loading/error status letting React automatically update the UI when those values change.

- What does the useEffect hook do, and why did you need it to load the JSON data?
  Useffect allows us to perform side effects in a component. In this project, it was used to fetch the data when MainLayout appeared, then it was put into technologies state so that the react app could use it.

- Why does every item in a .map() list need a unique key prop?
  Because react uses it to identify which is which when something changes.

- What is conditional rendering?
  It means showing different UI elements depending on a condition.

- How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
  We normally use props to pass data from a parent component to child component.
  If a child component wants to send something back to parent component, a parent component needs to give the child a callback function, which the child component can call with the data it wants to send.
