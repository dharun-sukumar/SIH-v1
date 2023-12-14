# myapp/urls.py
from django.urls import path
from .views import index, input


from django.urls import path
from .views import index

urlpatterns = [
    path('', index, name='index'),
    path('input/', input, name='input'),
]
