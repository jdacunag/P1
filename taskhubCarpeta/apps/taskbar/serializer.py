from rest_framework import serializers
from .models import *


class serializer(serializers.ModelSerializer):
    class Meta:
        model = tasks
        fields= '__all__'