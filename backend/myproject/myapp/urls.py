# myapp/urls.py

from django.urls import path
from .views import index

urlpatterns = [
    path('', index, name='index'),
    path('input/', views.input, name='input'),
]
