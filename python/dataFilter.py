import pandas as pd

def filter_top_5(df, column_name, threshold):
    # Filter rows where the specified column has values greater than the threshold
    filtered_df = df[df[column_name] > threshold]
    return filtered_df.head(5)

# Example usage
df = pd.read_csv('Age - Sheet1.csv')
top_5_rows = filter_top_5(df, 'age', 30)
print(top_5_rows)
