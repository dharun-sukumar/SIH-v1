import pandas as pd
import numpy as np

df=pd.read_csv("land_dataset.csv")
df.head()

district=input("Enter the district:")
area=float(input("Enter the area size required:"))
filter_df=df[df["district"]==district]
land1=df["Area(sq ft)"].iloc[0]
land1

import matplotlib.pyplot as plt

# Define the dictionary with land details
land_details = {
    "Water Level": 7.2,
    "Soil Quality": 9.5,
    "Elevation": 2500
}

bar_colors = ['red', 'green', 'blue']
# Extract data for the bar chart
x_values = list(land_details.keys())
y_values = list(land_details.values())

# Create the bar chart
plt.figure(figsize=(5, 5))
plt.bar(x_values, y_values, width=0.2,color=bar_colors)

# Set chart labels and title
plt.xlabel("Land Detail")
plt.ylabel("Value")
plt.title("Land Details Bar Chart")

# Set y-axis limit from 0 to 10
plt.ylim(0, 10)

# Add grid and tight layout
plt.grid(True)
plt.tight_layout()

# Show the chart
plt.show()


# Define land information
soil_quality = 3  # 1-5 scale
water_level = 2  # 1-5 scale
soil_type = "Sandy loam"  # Clay, Loam, Sandy loam
elevation = 100  # meters

# Define land use suitability scores
land_use_scores = {
    "Agriculture": (soil_quality * 0.5 + water_level * 0.3 + 0.2) * (1 if soil_type in ["Loam", "Sandy loam"] else 0.5),
    "Forestry": (soil_quality * 0.2 + water_level * 0.1 + elevation * 0.7) * (1 if soil_type in ["Clay", "Loam"] else 0.5),
    "Urban development": (soil_quality * 0.1 + water_level * 0.2 + elevation * 0.7) * (1 if soil_type in ["Sandy loam"] else 0.5),
}

# Calculate total score
total_score = sum(land_use_scores.values())

# Calculate land use percentages
land_use_percentages = {
    land_use: (land_use_scores[land_use] / total_score) * 100
    for land_use in land_use_scores
}

# Extract land use with highest percentage
highest_percentage_land_use = max(land_use_percentages, key=land_use_percentages.get)

# Create pie chart
plt.figure(figsize=(8, 8))
plt.pie(
    land_use_percentages.values(),
    labels=land_use_percentages.keys(),
    autopct="%1.1f%%",
    startangle=140,
)
plt.title("Land Use Suitability")
plt.axis("equal")  # Equal aspect ratio ensures a circular pie chart
plt.show()


print(f"The most suitable land use is: {highest_percentage_land_use}")
