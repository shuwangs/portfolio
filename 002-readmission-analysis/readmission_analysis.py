import pandas as pd

def load_data(file_path):
    """Load CSV files into a pandas DataFrame"""
    try:
        df = pd.read_csv(file_path)
        return df
    except FileNotFoundError:
        print("Error: File not found.")
        return None

def summarize_by_specialty(df):
    """Calculate average stay by medical specialty"""
    if df is None:
        return None
    return df.groupby('medical_specialty')['time_in_hospital'].mean().sort_values(ascending = False)

def summarize_by_age_group(df):
    """Calculate readmission rate by age group"""
    if df is None:
        return None
    return df.groupby('age')['time_in_hospital'].mean().sort_values()

def summarize_readmission_distribution(df):
    counts = df['readmitted'].value_counts()
    avg_stay = df.groupby('readmitted')['time_in_hospital'].mean()
    return counts, avg_stay


def main():
    # Load the data
    file_path = 'data/hospital_readmissions.csv'
    df = load_data(file_path)

    # Run Summaries
    print("=== Average Stay by Medical Specialty===")
    print(summarize_by_specialty(df).head(10))

    print("\n=== Readmission Rate by Age Group===")
    print(summarize_by_age_group(df))

    print("\n=== Readmission Distribution ===")
    counts, avg_stay = summarize_readmission_distribution(df)

    print("Counts:\n", counts)
    print("Average Stay:\n", avg_stay)

if __name__ == "__main__":
    main()
