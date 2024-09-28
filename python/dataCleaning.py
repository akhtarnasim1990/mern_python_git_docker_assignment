import pandas as pd

# Read CSV file
df = pd.read_csv('AMAZON_PREP - Sheet1.csv')

# Drop rows with missing values
cleaned_df = df.dropna()

# Output cleaned data
print(cleaned_df)
