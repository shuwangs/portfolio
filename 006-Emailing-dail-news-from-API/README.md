# 🗞️ Daily News Email Bot

This project is a simple but powerful Python automation script that fetches the latest news on a given topic using the NewsAPI and sends a summary email to your inbox. It demonstrates API integration, secure email delivery via Gmail SMTP, and best practices in secret management.-

---

## 🚀 Features

- Pulls recent news articles from [NewsAPI.org](https://newsapi.org/)
- Summarizes article titles, descriptions, and links
- Sends the formatted news digest via email using Gmail SMTP
- Uses `.env` for secure credential management
- Fully customizable topic and date range

---

## 🛠️ Tech Stack

- Python 3
- `requests` — for calling the News API
- `smtplib` + `email.mime` — for composing and sending email
- `python-dotenv` — for environment variable management
- `certifi` — for SSL certificate compatibility on macOS

---

## 📦 Project Structure

```
006-Emailing-daily-news-from-API/
├── main.py # Main logic: fetches news and sends email
├── send_email.py # Handles email formatting and sending
├── .env # Stores email credentials and API key
└── README.md # You're here!
```

---

## 🔐 Environment Setup

Create a `.env` file with the following keys:

```env
EMAIL_USERNAME=your_email@gmail.com
EMAIL_PASSWORD=your_app_password  # Generated from Google App Passwords
EMAIL_RECEIVER=recipient_email@gmail.com
NEWS_API_KEY=your_newsapi_key
```

--- 

## 👩‍💻 About
This project was built by Shu Wang as part of her Software Engineering learning journey.
It demonstrates cross-interface design, modular code organization, and frontend/backend integration.

📫 [LinkedIn](https://linkedin.com/in/shuuwang) | [GitHub](https://github.com/shuwangs)

---
