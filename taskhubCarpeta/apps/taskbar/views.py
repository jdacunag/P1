from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import tasks


def pruebametod(request):
    return render(request, 'prueba.html')



# Create your views here.
