🌤# 🌤️ Weather Data API

This project is a lightweight Flask-based API that serves historical weather data by station and date. It reads local data files and returns temperature information in a structured JSON format. The project demonstrates RESTful API design, dynamic route handling, and clean data processing using pandas.

## 🚀 Features

- 📅 Query daily temperature for a specific station and date
- 📈 Retrieve all temperature records for a full year
- 🔢 Auto-pads station IDs to match filename formatting
- 🧹 Cleans and parses data files with minimal preprocessing
- 🌐 REST-style API routes for easy integration

## 🛠️ Tech Stack

- **Python 3**
- **Flask** — for building the web API
- **pandas** — for CSV parsing and data manipulation

## 📦 Project Structure

```
weather-api/
├── app.py               # Main Flask app
├── data_small/          # Folder containing historical data files
│   ├── TG_STAID000001.txt
│   └── ...
├── templates/           # (Optional) HTML templates
└── README.md            # You're here!
```

## 🔌 API Endpoints

- `GET /api/v1/<station>/<date>`  
  🔹 Returns the temperature for the given station and date.  
  Example: `/api/v1/1/20210101`

- `GET /api/v1/yearly/<station>/<year>`  
  🔹 Returns all temperature records for the given year and station.  
  Example: `/api/v1/yearly/1/2021`

## 🧪 Sample Output

```json
{
  "station": "1",
  "date": "20210101",
  "temperature": 2.3
}
```

## 🛠️ Setup & Run

1. **Clone the repository**  
   ```bash
   git clone https://github.com/shuwangs/portfolio.git
   cd portfolio/007-Weather-Data-API/
   ```

2. **Install dependencies**  
   ```bash
   pip install flask pandas
   ```

3. **Run the app**  
   ```bash
   python app.py
   ```

4. Visit `http://localhost:5000/api/v1/1/20210101`

## 👩‍💻 About

This project was built by Shu Wang as part of her journey to master software development and API engineering. It highlights dynamic routing, simple data integration, and backend automation.

## 📫 Connect

[LinkedIn](https://www.linkedin.com/in/shuwangs) | [GitHub](https://github.com/shuwangs)
