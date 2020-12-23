from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import MedidaSerializer
from .models import Medida

class MedidaView(generics.ListAPIView):
    queryset = Medida.objects.all()
    serializer_class = MedidaSerializer

