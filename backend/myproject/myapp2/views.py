from django.http import JsonResponse
from django.views.decorators.csrf import csrf_protect
from django.shortcuts import render
import panda as pd
import requests
from requests import PandaRequest

# Assuming df is your DataFrame
data = {'District': ['District1', 'District2', 'District3'],
        'Area(sq ft)': [100, 200, 150]}
df = pd.DataFrame(data)

@csrf_protect  # Apply csrf_protect decorator to enable CSRF protection for this view
def filter_land(request):
    if request.method == 'POST':
        try:
            # Assuming the form is submitted with a CSRF token
            district = request.POST.get('district', '')
            area = float(request.POST.get('area', 0))

            filtered_df = df[(df['District'] == district) & (df['Area(sq ft)'] == area)]

            if not filtered_df.empty:
                land_size = filtered_df['Area(sq ft)'].iloc[0]
                return JsonResponse({'land_size': land_size})
            else:
                return JsonResponse({'error': 'No matching data found.'}, status=404)
        except ValueError:
            return JsonResponse({'error': 'Invalid value for the "area" parameter.'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method.'}, status=400)

def input(request):
    # Render the template with the CSRF token included
    return render(request, 'input_template.html')
