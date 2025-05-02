# PDF Topic Generator

This toy project creates a styled multi-page PDF from a list of topics using Python and the `fpdf` library.

## 📄 Overview

The script reads a CSV file named `topics.csv`, where each row contains a topic name and the number of pages it should span. Each topic starts on a new page with a custom header, footer, and evenly spaced lines. Additional pages for the same topic include only the footer.

This is a basic tool useful for creating printable notebook templates or sectioned PDFs for note-taking or organizing study material.

---

## 📁 Input

### `topics.csv`

A sample `topics.csv` file might look like this:

