/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
require("dotenv").config();
// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require("firebase-functions/v2");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// API

// - App Configureation
const app = express();

// - Middlewares
app.use(cors({origin: true})); // Enable CORS for all origins
app.use(express.json()); // Parse JSON request bodies


// - API routes
app.get("/", (request, response) => {
  response.status(200).send("Hello World");
});

app.post("/payments/create", async (request, response) => {
  const total = Number(request.query.total); // 显式转换成数字
  console.log("Payment Request Received for this amount >>>", total);

  if (!total || isNaN(total) || total < 1) {
    return response.status(400).send({error: "Invalid total amount."});
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error("Stripe Error:", err);
    response.status(500).send({error: err.message});
  }
});
// - Listen Commans


exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/amzaon-clone-4bb41/us-central1/api
