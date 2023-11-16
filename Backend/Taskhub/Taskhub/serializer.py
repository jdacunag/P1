from rest_framework import serializers
from .models import *


class serializer(serializers.ModelSerializer):
    class Meta:
        model = tasks
        fields = "__all__"


class serializerUsers(serializers.ModelSerializer):
    class Meta:
        model = usuario
        fields = "__all__"

class serializerProyecto(serializers.ModelSerializer):

    usuarios = serializerUsers(many=True, read_only=True)  

    class Meta:
        model = Proyecto
        fields = "__all__"

    