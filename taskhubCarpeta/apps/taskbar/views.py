from django.shortcuts import render
from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
from .models import tasks, Proyecto
from .serializer import *
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
from rest_framework.authtoken.models import Token
def pruebametod(request):
    return render(request, 'prueba.html')

class vistaTask(viewsets.ModelViewSet):
    serializer_class = serializer
    queryset = tasks.objects.all()
class vistaProject(viewsets.ModelViewSet):
    serializer_class = serializerProyecto
    queryset = Proyecto.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        usuario = self.request.query_params.get('usuario', None)
        if usuario:
            queryset = queryset.filter(usuario=usuario)
        return queryset
class vistaUser(viewsets.ModelViewSet):
    serializer_class = serializerUsers
    queryset = usuario.objects.all()


@method_decorator(csrf_exempt, name='dispatch')  
def UserAuthentication(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return JsonResponse({'boolean': 'true',
                                 "id": user.id})
        else:
            return JsonResponse({'boolean': 'false'})
    else:
        return JsonResponse({'mensaje': 'Método no permitido1'}, status=405)
# Create your views here.
