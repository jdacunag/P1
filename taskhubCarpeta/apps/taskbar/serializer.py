from rest_framework import serializers
from .models import *


class serializadorDEtargetas(serializers.ModelSerializer):
    class Meta:
        model = tasks
        fields=[
            'id',
            'nombre',
            'description',
            'fecha_creacion',
            'fecha_vencimiento',
            'slug',
            'estado',
        ]