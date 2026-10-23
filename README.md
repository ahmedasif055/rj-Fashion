# 🛍️ VELORA — Premium Fashion Store

<div align="center">

### ✨ Modern • Responsive • Interactive E-Commerce UI

A premium dark-themed fashion store built with **React, Tailwind CSS, and React Hot Toast**, featuring live product data, search, favorites, cart management, product details, and responsive navigation.

**Author — Ahmed Asif**

</div>

---

## 🌐 Overview

**VELORA** is a modern fashion e-commerce frontend designed with a premium dark aesthetic, purple/fuchsia gradients, glassmorphism effects, smooth animations, and a responsive layout.

The project uses a public product API to dynamically display products and provides an interactive shopping experience without requiring a backend.

---

## ✨ Features

- 🛍️ Premium fashion storefront
- 🌙 Modern dark UI
- 🎨 Purple / Fuchsia gradient design
- 📱 Fully responsive design
- 🔍 Live product search
- 🛒 Add to cart
- ➕ Increase cart quantity
- ➖ Decrease cart quantity
- ❌ Remove products from cart
- 💰 Automatic cart total calculation
- ❤️ Favorite products
- 🔢 Cart and favorite counters
- 👀 Product details modal
- 🔔 Toast notifications
- 📦 Dynamic product API
- ⏳ Loading skeleton
- ⚠️ API error handling
- 📧 Newsletter subscription validation
- 📱 Responsive mobile menu
- ✨ Glassmorphism cards
- 🌌 Animated background glow
- 🎯 Smooth section navigation
- 🖼️ Product image hover effects

---

## 🧰 Tech Stack

| Technology | Usage |
|---|---|
| ⚛️ React | UI development |
| 🎨 Tailwind CSS | Styling & responsive design |
| 🔔 React Hot Toast | Notifications |
| 🌐 Fetch API | Product data |
| 🧠 React Hooks | State management |
| ⚡ Vite | Development & build tool |
| 💻 JavaScript / JSX | Application logic |

---

## 📁 Project Structure

```text
src/
│
├── App.jsx
├── Navbar.jsx
├── Hero.jsx
├── Card.jsx
├── Footer.jsx
│
├── assets/
│   └── ...
│
└── main.jsx
```

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Open the project

```bash
cd velora
```

### 3. Install dependencies

```bash
npm install
```

Install React Hot Toast if it is not already installed:

```bash
npm install react-hot-toast
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available through the local Vite development URL shown in your terminal.

---

## 📦 Main Dependencies

### React Hot Toast

```bash
npm install react-hot-toast
```

Used for:

- Add to cart notifications
- Favorite notifications
- Newsletter validation
- Cart actions
- User feedback

### Tailwind CSS

The project UI is built primarily with Tailwind CSS utility classes.

---

## 🌐 Product API

VELORA loads product information dynamically from:

```text
https://fakestoreapi.noksha.dev/api/products
```

The application handles:

- Product loading
- API errors
- Product filtering
- Product rendering
- Product details

---

## 🛒 Shopping Cart

The shopping cart supports:

```text
Add Product
     ↓
Cart
     ↓
Increase / Decrease Quantity
     ↓
Remove Product
     ↓
Calculate Total
```

Cart state is managed with React state and does not require a backend.

---

## 🔍 Product Search

Users can search products by:

- Product title
- Category
- Brand
- Description

The product list updates automatically according to the search keyword.

---

## ❤️ Favorites

Users can add or remove products from favorites.

The navbar also displays the current favorite count.

---

## 👀 Product Details

Each product has a **Details** button that opens a modern modal containing:

- Product image
- Product title
- Category
- Description
- Price
- Brand
- Stock
- Add to Cart action

---

## 📱 Responsive Design

VELORA is designed to work across:

- 📱 Mobile
- 📲 Tablet
- 💻 Laptop
- 🖥️ Desktop

The navigation automatically switches to a mobile menu on smaller screens.

---

## 🎨 UI Design

The interface follows a premium dark visual system:

```text
Background
   ↓
Dark / Deep Purple

Primary
   ↓
Purple → Fuchsia → Indigo

Components
   ↓
Glassmorphism + Blur + Glow

Interaction
   ↓
Hover + Scale + Animation
```

---

## 🔮 Future Improvements

Possible future upgrades include:

- 🔐 User authentication
- 💳 Real payment gateway
- 📦 Order management
- 🧾 Checkout page
- 🗄️ Backend integration
- 🧑‍💼 Admin dashboard
- ❤️ Persistent favorites
- 🛒 Persistent cart with localStorage
- 🔎 Advanced filters
- 📊 Product sorting
- 🏷️ Category filtering
- ⭐ Product reviews
- 🌍 Multi-language support

---

## 📸 Screenshots

Add project screenshots here:

```text
screenshots/
├── home.png
├── products.png
├── product-details.png
└── cart.png
```

Example Markdown:

```md
![VELORA Home](screenshots/home.png)
```

---

## 👨‍💻 Author

### Ahmed Asif

Frontend / Full-Stack Web Developer

Interested in building:

- React Applications
- Modern Web Interfaces
- Full-Stack Web Applications
- Responsive Websites
- E-Commerce Platforms

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ star.

Your support helps motivate future development.

---

## 📄 License

This project is created for learning, portfolio, and demonstration purposes.

© 2026 **Ahmed Asif**. All rights reserved.
