from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

stations = pd.read_csv("data_small/stations.txt", skiprows=17)
stations = stations[['STAID', 'STANAME                                 ']]
@app.route("/")
def home():
    return render_template("home.html", data =stations.to_html())

@app.route("/api/v1/<station>/<date>")
def about(station, date):
    filename = "data_small/TG_STAID" + str(station).zfill(6) + ".txt"
    df = pd.read_csv(filename, skiprows=20, parse_dates=["    DATE"])
    df.columns = df.columns.str.strip()
    temperature = df.loc[df["DATE"] == date]['TG'].squeeze()/10
    return {"station": station,
            "date": date,
            "temperature": temperature}

@app.route("/api/v1/<station>")
def all_data(station):
    filename = "data_small/TG_STAID" + str(station).zfill(6) + ".txt"
    df = pd.read_csv(filename, skiprows=20, parse_dates=["    DATE"])
    df.columns = df.columns.str.strip()

    res = df.to_dict(orient="records")

    return res
@app.route("/api/v1/yearly/<station>/<year>")
def year_data(station, year):
    filename = "data_small/TG_STAID" + str(station).zfill(6) + ".txt"
    df = pd.read_csv(filename, skiprows=20)
    df.columns = df.columns.str.strip()
    df["DATE"] = df["DATE"].astype(str)
    res = df[df["DATE"].str.startswith(str(year))].to_dict()

    return res
if __name__ == "__main__":
    app.run(debug=True, port=5000)