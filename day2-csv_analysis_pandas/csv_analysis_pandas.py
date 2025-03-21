import pandas as pd

def load_data(file_path)：
    """Load CSV files into a pandas DataFrame"""
    try:
        df = pd.read_csv(file_path)
        return df
    except FileNotFoundError:
        print("Error: File not found.")
        return None



