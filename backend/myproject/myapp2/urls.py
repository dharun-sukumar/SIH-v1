from django.urls import path
from .views import SquareNumberView

urlpatterns = [
    path('input/', SquareNumberView.as_view(), name='square-number'),
    # Other URL patterns
]
