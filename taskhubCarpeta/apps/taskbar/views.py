from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import tasks
from .serializer import serializer


def pruebametod(request):
    return render(request, 'prueba.html')

class vistaTask(viewsets.ModelViewSet):
    serializer_class = serializer
    queryset = tasks.objects.all()



# Create your views here.
