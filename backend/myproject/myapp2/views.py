from django.http import JsonResponse
import pandas as pd
from django.views.decorators.csrf import csrf_exempt  # Import csrf_exempt decorator

# Assuming df is your DataFrame
data = {'District': ['District1', 'District2', 'District3'],
        'Area(sq ft)': [100, 200, 150]}
df = pd.DataFrame(data)

@csrf_exempt  # Apply csrf_exempt decorator to allow POST requests without CSRF token (for demonstration purposes)
def filter_land(request):
    if request.method == 'POST':
        district = request.POST.get('district', '')
        area = float(request.POST.get('area', 0))

        filtered_df = df[(df['District'] == district) & (df['Area(sq ft)'] == area)]

        if not filtered_df.empty:
            land_size = filtered_df['Area(sq ft)'].iloc[0]
            return JsonResponse({'land_size': land_size})
        else:
            return JsonResponse({'error': 'No matching data found.'}, status=404)
    else:
        return JsonResponse({'error': 'Invalid request method.'}, status=400)
