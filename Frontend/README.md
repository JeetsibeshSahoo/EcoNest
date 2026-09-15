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