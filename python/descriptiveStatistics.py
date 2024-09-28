import pandas as pd
import numpy as np

# Read data
df = pd.read_csv('Age - Sheet1.csv')

# Calculate descriptive statistics
mean_age = np.mean(df['age'])
median_age = np.median(df['age'])
std_age = np.std(df['age'])

print(f"Mean: {mean_age}, Median: {median_age}, Standard Deviation: {std_age}")
