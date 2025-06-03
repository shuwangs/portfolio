# 🛍️ 011 Amazon Clone (Full Stack React + Node.js)
https://amzaon-clone-4bb41.web.app

This project is a full-stack Amazon Clone built using React, Firebase, Node.js (Cloud Functions), and Stripe. It replicates core e-commerce functionalities like product listing, basket management, user authentication, checkout, and payment processing.

---

## ✨ Features

✅ User authentication with Firebase Authentication  
✅ Real-time basket and order management using Firestore  
✅ Stripe PaymentIntent API integration for secure payments  
✅ Express backend running in Firebase Cloud Functions  
✅ Responsive, modern UI built with React and React Router  
✅ Deployed on Firebase Hosting

---

## 🏗️ Tech Stack

- **Frontend**: React, React Router, Context API, Stripe.js  
- **Backend**: Node.js, Express, Firebase Cloud Functions  
- **Database**: Firestore  
- **Payment**: Stripe  
- **Hosting**: Firebase Hosting



## 🚀 How to Run Locally

1️⃣ Clone the repository:
```bash
git clone https://github.com/your-username/amazon-clone.git
cd amazon-clone
```

2️⃣ Install dependencies:
```bash
npm install
```

3️⃣ Configure environment variables:
- Create a `.env` file in the root directory:
  ```
  REACT_APP_STRIPE_PUBLIC_KEY=your_publishable_key
  STRIPE_SECRET_KEY=your_secret_key
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

## 🛡️ Notes

- Stripe is used in **test mode**; no real payments are processed.  
- Do **NOT** commit secret keys to the repository.  
- Ensure you have Firebase CLI installed and set up with your project.

---

## 📸 Screenshots

(Add screenshots here showing homepage, cart, checkout, payment success.)

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