# 🛍️ Amazon Clone

[Live Demo 🚀](https://amzaon-clone-4bb41.web.app/)

A full-featured e-commerce website inspired by Amazon. This project demonstrates end-to-end functionality including user authentication, product listings, shopping cart, payment integration, and order tracking.

---

## 🔧 Tech Stack

- **Frontend:**
  - React.js (Functional Components & Hooks)
  - React Router DOM for navigation
  - Context API + Reducer for global state management
  - Styled with CSS

- **Backend / Services:**
  - Firebase Authentication (user sign-in/out)
  - Firebase Firestore (database for storing orders)
  - Firebase Hosting (live deployment)
  - Stripe API (real payment processing)

---

## ✨ Features

- 🔐 **User Authentication**  
  Sign up, log in, and log out using Firebase Authentication.

- 🛒 **Shopping Cart System**  
  Add/remove items to the basket, and view real-time total pricing.

- 📦 **Order Placement**  
  Integrated with Stripe to simulate a complete checkout process.

- 🧾 **Order History**  
  Logged-in users can see previous orders stored in Firestore.

---


## 🚀 How to Run Locally

1️⃣ Install dependencies:
```bash
npm install
```

2️⃣  Configure environment variables:
- Create a `.env` file in the root directory:
  ```
  REACT_APP_STRIPE_PUBLIC_KEY=your_publishable_key
  STRIPE_SECRET_KEY=your_secret_key
  ```
3️⃣ Deploy
```bash
npm run build
firebase deploy
```

4️⃣ Start local development:
```bash
firebase emulators:start
npm start
```

---
## Deployment 


## 📦 Deployment

To deploy frontend and backend:
```bash
firebase deploy
```

---

## 👩‍💻 About

This project was built by Shu Wang as part of her journey to master software development and API engineering. It highlights dynamic routing, simple data integration, and backend automation.

--- 

## 📫 Connect

<a href="https://www.linkedin.com/in/shuwangs" target="_blank">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="24" style="margin-right: 10px;" />
</a>
<a href="https://github.com/shuwangs" target="_blank">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="24" />
</a>

---
