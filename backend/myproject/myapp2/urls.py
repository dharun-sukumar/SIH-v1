# myapp/urls.py
from django.urls import path
from .views import filter_land
from .views import input
urlpatterns = [
    path('filter_land/', filter_land, name='filter_land'),
    path('input/', input, name='input'),
]
