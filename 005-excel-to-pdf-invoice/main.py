import os
import glob
import pandas as pd
from fpdf import FPDF
from pathlib import Path

filepaths = glob.glob("invoices/*.xlsx")
# Ensure the folder exists
os.makedirs("PDFs", exist_ok=True)

for filepath in filepaths:

    pdf = FPDF(orientation="P", unit="mm", format="A4")
    pdf.add_page()

    # Add the invoice no and data for each excel
    filename = Path(filepath).stem
    invoice_nr, date = filename.split("-")

    pdf.set_font(family="Times", size=16, style="B")
    pdf.cell(w=50, h=8, txt=f"Invoice nr. {invoice_nr}", ln=1)

    pdf.set_font(family="Times", size=14, style="B")
    pdf.cell(w=50, h=8, txt=f"Date: {date}", ln=1)

    df = pd.read_excel(filepath, sheet_name="Sheet 1")

    column_name = list(df.columns)
    column_name = [item.replace("_", " ").title() for item in column_name]
    pdf.set_font(family="Times", size=10, style="B")
    pdf.set_text_color(1, 1, 1)
    pdf.cell(w=30, h=8, txt=column_name[0], border=1)
    pdf.cell(w=70, h=8, txt=column_name[1], border=1)
    pdf.cell(w=30, h=8, txt=column_name[2], border=1)
    pdf.cell(w=30, h=8, txt=column_name[3], border=1)
    pdf.cell(w=30, h=8, txt=column_name[4], border=1, ln=1)

    for index, row in df.iterrows():
        pdf.set_font(family="Times", size=10)
        pdf.set_text_color(1, 1, 1)
        pdf.cell(w=30, h=8, txt=str(row["product_id"]), border=1)
        pdf.cell(w=70, h=8, txt=str(row["product_name"]), border=1)
        pdf.cell(w=30, h=8, txt=str(row["amount_purchased"]), border=1)
        pdf.cell(w=30, h=8, txt=str(row["price_per_unit"]), border=1)
        pdf.cell(w=30, h=8, txt=str(row["total_price"]), border=1, ln=1)

    total_price = df["total_price"].sum()
    pdf.set_font(family="Times", size=10)
    pdf.set_text_color(1, 1, 1)
    pdf.cell(w=30, h=8, txt="", border=1)
    pdf.cell(w=70, h=8, txt="", border=1)
    pdf.cell(w=30, h=8, txt="", border=1)
    pdf.cell(w=30, h=8, txt="", border=1)
    pdf.cell(w=30, h=8, txt=str(total_price), border=1, ln=1)

    # Add total sum sentence
    pdf.set_font(family="Times", size=12)
    pdf.cell(w= 30, h=8, txt=f"The total price is {total_price}", ln=1)

    # Add company name and logo
    pdf.set_font(family="Times", size=12)
    pdf.cell(w=22, h=8, txt=f"PythonHow")
    pdf.image("pythonhow.png",w=10)

    pdf.output(f"PDFs/{filename}.pdf")

