import requests
import datetime
import os
from send_email import send_email
from dotenv import load_dotenv

load_dotenv()  # This must be called before os.getenv
api_key = os.getenv("NEWS_API_KEY")
topic = "tesla"
date = datetime.date.today() - datetime.timedelta(days=1)
url = "https://newsapi.org/v2/everything?" \
    f"q={topic}&" \
    f"from={date}&" \
    f"sortBy=publishedAt&apiKey={api_key}&" \
    "language=en"
#
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0 Safari/537.36"
}

# Make request
response = requests.get(url, headers=headers)

if response.status_code == 200:
    content = response.json()

    # Access the article titles and description
    body = ""
    for article in content["articles"]:
        title = article.get("title", "No Title")
        description = article.get("description", "No Description")
        link = article.get("url", "No link")
        body += f"Subject: Today's news\n{title}\n{description}\n{link}\n\n"

    body = body.encode("utf-8")
    send_email(message=body)
else:
    print(f"failed with status code: {response.status_code}")

