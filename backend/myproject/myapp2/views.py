from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

class SquareNumberView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        input_value = request.data.get('input')
        


        return Response({'data': data})