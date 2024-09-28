import pandas as pd
import matplotlib.pyplot as plt

# Read data
df = pd.read_csv('Age - Sheet1.csv')

# Plot age distribution
print(df['age'].value_counts().index)
print(df['age'].value_counts().values)
plt.bar(df['age'].value_counts().index, df['age'].value_counts().values)
plt.xlabel('Age')
plt.ylabel('Count')
plt.title('Age Distribution')
plt.show()
