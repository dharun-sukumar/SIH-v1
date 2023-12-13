# myapp/urls.py
from django.urls import path
from .views import filter_land

urlpatterns = [
    path('filter_land/', filter_land, name='filter_land'),
]
