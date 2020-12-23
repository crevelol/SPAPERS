from rest_framework import serializers
from .models import Medida

class MedidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medida
        fields = ('id_paper','titulo','keywords','abstract')
