from django.urls import path
from .views import index, similar, buscar

urlpatterns = [
    path('',index),
    path('similar/',similar),
    path('buscar/',buscar)
]
