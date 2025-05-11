# 🌦️ Weather Forecast Dashboard

An interactive Streamlit web application that displays the **3-day weather forecast** (temperature and sky conditions) for any selected city using the OpenWeatherMap API. The app shows visualizations and icons to help users better understand short-term weather trends.

---

## 🔍 Features

- 🔎 Search for any city and get weather forecast
- 📈 Plot line chart of temperature for the next 3 days
- 🌤️ Show corresponding weather icons (clear, clouds, rain, snow)
- ⚙️ Simple, interactive UI with Streamlit

---

## 📁 Project Structure

```
weather-forecast-app/
├── main.py         # Streamlit front-end
├── backend.py      # API request & data processing logic
├── .env            # Contains OpenWeatherMap API key (DO NOT expose on GitHub)
├── images/         # Weather icons (clear.png, cloud.png, etc.)
```

---

## 📸 Demo

### 🌡️ Temperature Plot
Shows upcoming temperature trend.

### ☁️ Sky Conditions
Visual display of expected weather using icons like ☀️ 🌧️ 🌨️ ☁️

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/weather-forecast-app.git
cd weather-forecast-app
```

### 2. Install dependencies

```bash
pip install streamlit requests python-dotenv plotly
```

### 3. Add your API key

Create a `.env` file in the root directory:

```
API_KEY=your_openweathermap_api_key
```

> (Don’t upload it to GitHub! ✅)

### 4. Run the app

```bash
streamlit run main.py
```

---

## 🔐 API Info

This app uses the [OpenWeatherMap OneCall API](https://openweathermap.org/forecast5). You'll need a free API key to access it.

---


## 🚫 .env Reminder

Make sure your `.env` file is listed in your `.gitignore` file:

```
.env
```

Never commit secrets or API keys to GitHub.

---

## 👩‍💻 About

This project was built by Shu Wang as part of her journey to master software development and API engineering. It highlights dynamic routing, simple data integration, and backend automation.


## 📫 Connect

<a href="https://www.linkedin.com/in/shuwangs" target="_blank">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="24" style="margin-right: 10px;" />
</a>
<a href="https://github.com/shuwangs" target="_blank">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="24" />
</a>

---
