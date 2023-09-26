from rest_framework import serializers
from .models import *


class serializer(serializers.ModelSerializer):
    class Meta:
        model = tasks
        fields= '__all__'
        
class serializerProyecto(serializers.ModelSerializer):
    class Meta:
        model = Proyecto
        fields= '__all__'  
        
class serializerUsers(serializers.ModelSerializer):
    class Meta:
        model = usuario
        fields= '__all__'                      