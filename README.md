# RoastCraft Coffee SPA

A React single-page application (SPA) for managing and exploring coffees. This project was built with **Vite**, **React**, and **React Router**, and includes context-based state management and comprehensive testing using **Vitest** and **React Testing Library**.

---

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [Available Scripts](#available-scripts)  
- [Testing](#testing)  
- [Technologies Used](#technologies-used)  


---

## Demo

> Example: `![Screenshot](assets/demo1.PNG)`

> Example: `![Screenshot](assets/demo2.PNG)`

---

## Features

- Browse coffees by name, origin, and price with a **search/filter panel**.
- View detailed coffee cards with name, description, origin, price, and image.
- **Admin Portal**:
  - Add new coffee
  - Edit existing coffee
  - Delete coffee
- Fully responsive layout.
- **Context API** for global coffee state management.
- Async data fetching with a custom `useFetch` hook.

---

## Project Structure
```
.
├── App.css
├── App.jsx
├── assets
│   ├── demo1.PNG
│   ├── demo2.PNG
│   ├── placeHolderCoffee.jpg
│   └── react.svg
├── components
│   ├── CoffeeCard.jsx
│   ├── CoffeeContainer.jsx
│   ├── CoffeeForm.jsx
│   ├── CoffeeList.jsx
│   ├── NavBar.jsx
│   ├── Search.jsx
│   └── __tests__
│       ├── About.test.jsx
│       ├── AdminPortal.test.jsx
│       ├── CoffeeCard.test.jsx
│       ├── CoffeeContainer.test.jsx
│       ├── CoffeeContext.test.jsx
│       ├── CoffeeForm.test.jsx
│       ├── CoffeeList.test.jsx
│       ├── ErrorPage.test.jsx
│       ├── Home.test.jsx
│       ├── NavBar.test.jsx
│       ├── Search.test.jsx
│       ├── Shop.test.jsx
│       └── UpdateCoffee.test.jsx
├── context
│   └── CoffeeContext.jsx
├── hooks
│   └── useFetch.js
├── index.css
├── main.jsx
├── pages
│   ├── About.jsx
│   ├── AdminPortal.jsx
│   ├── ErrorPage.jsx
│   ├── Home.jsx
│   ├── Shop.jsx
│   └── UpdateCoffee.jsx
├── setupTests.js
├── styles
│   ├── About.module.css
│   ├── AdminPortal.module.css
│   ├── CoffeeCard.module.css
│   ├── CoffeeForm.module.css
│   ├── CoffeeList.module.css
│   ├── ErrorPage.module.css
│   ├── Home.module.css
│   ├── NavBar.module.css
│   ├── Search.module.css
│   ├── Shop.module.css
│   └── UpdateCoffee.module.css
```

---

## Installation

1. Clone the repository:
```
  git clone <your-repo-url>
  cd <repo-directory>
  npm install
  npm run server
```
2. Start dev environment:
```
  npm run dev
```

## Technologies Used

- React 18
- Vite
- React Router DOM
- Context API for state management
- Vitest + React Testing Library for testing
- CSS Modules for scoped styling

---
