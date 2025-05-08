import smtplib
import ssl
import certifi
import os
from dotenv import load_dotenv

load_dotenv()  # This must be called before os.getenv
def send_email(message):
    host = "smtp.gmail.com"
    port = 465 # 465 for via SSL

    username = os.getenv("EMAIL_USERNAME")
    password = os.getenv("EMAIL_PASSWORD")
    receiver_email = os.getenv("EMAIL_RECEIVER")

    context = ssl.create_default_context(cafile=certifi.where())
    with smtplib.SMTP_SSL(host, port, context=context) as server:
        server.login(username, password)
        server.sendmail(username, receiver_email, message)
        print("✅ Email sent successfully.")
