from fpdf import FPDF
import pandas as pd
pdf = FPDF(orientation = "P", unit="mm", format="A4")

df = pd.read_csv("topics.csv")

for index, row in df.iterrows():

pdf.add_page()

pdf.set_font(family="Times", style="B", size=12)
pdf.cell(w= 0, h= 12, txt="Hello there!", align="L", ln = 1, border=0 ) # add text through cell

pdf.set_font(family="Times", style="B", size=10)
pdf.cell(w= 0, h= 12, txt="Hi there!", align="L", ln = 1, border=0 ) # add text through cell


pdf.output("output.pdf")

print(type(pdf))

