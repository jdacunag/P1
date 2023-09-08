from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import tasks, Proyecto
from .serializer import *


def pruebametod(request):
    return render(request, 'prueba.html')

class vistaTask(viewsets.ModelViewSet):
    serializer_class = serializer
    queryset = tasks.objects.all()
class vistaProject(viewsets.ModelViewSet):
    serializer_class = serializerProyecto
    queryset = Proyecto.objects.all()
class vistaUser(viewsets.ModelViewSet):
    serializer_class = serializerUsers
    queryset = Proyecto.objects.all()

# Create your views here.
