from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

import pandas as pd
df=pd.read_csv("m.land_dataset.csv")

class search(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        input_value = request.data.get('input')
        place = input_value
        df2=df[df["District"]==place]
        polygon=df2["polygon"]


        return Response({'data': input_value**2})