import os
import requests
from dotenv import load_dotenv


load_dotenv()
API_KEY = os.getenv("API_KEY")
def get_data(place, forecast_days=None, data_type=None):
    url=f"http://api.openweathermap.org/data/2.5/forecast?q={place}&appid={API_KEY}"
    response = requests.get(url)
    content = response.json()
    filtered_data = content["list"]
    nr_values = 8*forecast_days
    filtered_data = filtered_data[:nr_values]

    if data_type == "Temperature":
        filtered_data = [dict["main"]["temp"] for dict in filtered_data]
    elif data_type == "Sky":
        filtered_data = [dict["weather"][0]["main"] for dict in filtered_data]
    return filtered_data

if __name__ == "__main__":
    print(get_data(place="London", forecast_days=3, data_type="Temperature"))