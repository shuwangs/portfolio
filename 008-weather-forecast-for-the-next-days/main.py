import streamlit as st
import plotly.express as px
from backend import get_data
st.title("Weather Forecast for the Next Days")
place = st.text_input("Place: ")
days = st.slider("Forecast Days", min_value=1, max_value=5, help= "Select the number of forecasted days.")

option = st.selectbox("Select data to view", ("Temperature", "Sky"))

st.subheader(f"{option} for the next {days} days in {place}")

if place:
    # Get the temperature/Sky data
    try:
        filtered_data = get_data(place, days)

        if option == "Temperature":
            temperatures = [dict["main"]["temp"] for dict in filtered_data]
            dates = [dict["dt_txt"] for dict in filtered_data]

            # Create a temperature plot
            figure = px.line(x=dates, y=temperatures, labels={"x": "Date", "y": "Temperature(C)"})
            st.plotly_chart(figure)

        elif option == "Sky":
            sky_condition = [dict["weather"][0]["main"] for dict in filtered_data]

            weather_images = {"Clear": "images/clear.png", "Clouds": "images/cloud.png", "Rain": "images/rain.png",
                      "Snow": "images/snow.png"}

            image_paths = [weather_images[condition] for condition in sky_condition]
            cols = st.columns(8)  # 每行放 8 个图

            for i, condition in enumerate(sky_condition):
                image_path = weather_images.get(condition, "images/default.png")
                with cols[i % 8]:
                    st.image(image_path, width=100)
    except KeyError:
        st.write(f"{place} dose not exist in the database.")
