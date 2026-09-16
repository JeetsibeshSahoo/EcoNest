# 🌱 EcoNest — Sustainable E-Commerce Platform

EcoNest is a modern, responsive e-commerce web application focused on sustainable and eco-friendly products. The project is built with a production-oriented approach, emphasizing clean architecture, reusable components, responsive UI, maintainability, and scalable state management.

The goal of EcoNest is not just to build a functional e-commerce website, but to practice how a real-world frontend application is designed, structured, and developed for future backend integration.

Build like a real-world developer, not like a tutorial follower.

## 🚀 Features
- 🏠 Modern and responsive home page
- 📖 About and Contact pages
- 🛍️ Product listing with category-based filtering
- 🔎 Dynamic product details page
- 🛒 Add products to cart
- ➕ Increase/decrease product quantity
- 🗑️ Remove products from cart
- 🧹 Clear entire cart
- 💾 Cart persistence using Local Storage
- 📱 Fully responsive design
- ♻️ Eco-friendly product-focused UI
- 🧩 Reusable React components
- 🗂️ Centralized state management with Redux Toolkit
- ⚡ Component-driven React architecture
- 🎨 Responsive UI built with Tailwind CSS
- 🔗 Dynamic routing using React Router

## 🛠️ Tech Stack
### Frontend
. React.js — Component-based UI development
. Tailwind CSS — Responsive and utility-first styling
. Redux Toolkit — Global state management
. React Redux — Connecting Redux with React
. React Router — Client-side routing
. JavaScript (ES6+) — Application logic
### Development Tools
. Vite — Development server and build tool
. Git — Version control
. GitHub — Repository and project management
## 📂 Project Structure
EcoNest/
├── public/
│   └── assets/
│       ├── images/
│       │   └── products/
│       └── logos/
│
├── src/
│   ├── app/
│   │   └── store.js
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── common/
│   │   ├── product/
│   │   └── cart/
│   │
│   ├── features/
│   │   └── cart/
│   │       └── cartSlice.js
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   └── Contact.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md

## 🧠 Application Architecture

EcoNest follows a component-driven and feature-oriented architecture.

The application separates responsibilities between:

- Pages — Handle route-level views
- Components — Provide reusable UI elements
- Features — Contain application-specific state logic
- Redux Store — Manages centralized global state
- Data Layer — Provides structured product information
- Layouts — Manage common application structure such as Navbar, Footer, and page content

This structure makes the application easier to maintain and allows new functionality to be added without heavily modifying existing components.

## 🛒 Cart State Management

The shopping cart is managed using Redux Toolkit.

The cart flow works as follows:

User
  ↓
Product Details
  ↓
Add to Cart
  ↓
Redux Action
  ↓
cartSlice
  ↓
Redux Store
  ↓
Cart Components
  ↓
Updated UI

Cart functionality includes:

- Adding products to the cart
- Increasing product quantity
- Decreasing product quantity
- Removing products
- Clearing the cart
- Calculating cart totals
- Persisting cart data using Local Storage

Cart persistence allows the user's cart to remain available even after refreshing the page.