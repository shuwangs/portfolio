import streamlit as st

col1, col2 = st.columns(2)

with col1:
    st.image("assets/1.jpg", width=500)

with col2:
    st.title("Shu Wang")
    content = """
    Hi, I'm Shu Wang — a developer passionate about building clean, purposeful tools with Python and data.

    I'm currently working full-time in bioinformatics and data analyst, while pursuing a Master’s in Computer Science through Georgia Tech's OMSCS program. My interests lie at the intersection of software engineering, data science, and real-world problem solving.

    I enjoy designing modular code, learning new technologies, and turning ideas into functional, user-friendly applications.

    Whether it's a command-line tool, a web app, or a fun side project with my cat Bobo nearby — I'm always building, learning, and growing.
    """
    st.info(content)

content2 = """
Below you can find some of the apps I have built in Python, feel free to contact me!
"""

st.write(content2)