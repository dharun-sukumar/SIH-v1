from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
def index(request):
    return render(request, 'myapp/index.html')

# Create your views here.

# Django views.py
