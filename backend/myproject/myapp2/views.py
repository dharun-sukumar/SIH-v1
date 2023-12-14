from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
import pandas as pd,os
import geopandas as gpd
csv_file_path = os.path.join('myapp2','utils', "m.land_dataset.csv")
df=gpd.read_file(csv_file_path)

class search(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        print(request.data)
        place = request.GET['input']
        print(place)
        
        district_data = df[df["District"]==place]
        polygon=district_data[["polygon", "Land Record ID"]].to_json()
        
        print(polygon)



        return Response({'data': polygon})