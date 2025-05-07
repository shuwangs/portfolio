import os
import glob
import pandas as pd
from fpdf import FPDF
from pathlib import Path

filepaths = glob.glob("invoices/*.xlsx")
# Ensure the folder exists
os.makedirs("PDFs", exist_ok=True)

for filepath in filepaths:
    df = pd.read_excel(filepath, sheet_name="Sheet 1")

    pdf = FPDF(orientation="P", unit="mm", format="A4")
    pdf.add_page()

    # Add the invoice no and data for each excel
    filename = Path(filepath).stem
    invoice_nr, date = filename.split("-")

    pdf.set_font(family="Times", size=16, style="B")
    pdf.cell(w=50, h=8, txt=f"Invoice nr. {invoice_nr}", ln=1)

    pdf.set_font(family="Times", size=14, style="B")
    pdf.cell(w=50, h=8, txt=f"Date: {date}", ln=1)

    pdf.output(f"PDFs/{filename}.pdf")

