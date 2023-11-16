from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
from .models import tasks, Proyecto, usuario as user
from .serializer import *
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json




class vistaTask(viewsets.ModelViewSet):
    serializer_class = serializer
    queryset = tasks.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        proyecto = self.request.query_params.get("proyecto", None)
        if proyecto:
            queryset = queryset.filter(proyecto=proyecto)
        return queryset


class VistaProject(viewsets.ModelViewSet):
    serializer_class = serializerProyecto
    queryset = Proyecto.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)


        dueño_proyecto = usuario.objects.get(id=request.data['usuario'])

   
        self.perform_create(serializer)

        proyecto = Proyecto.objects.get(id=serializer.data['id'])


        RolProyecto.objects.get_or_create(usuario=dueño_proyecto, Proyecto=proyecto, defaults={'rol': 'leader'})

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def get_queryset(self):
        queryset = Proyecto.objects.all()
        usuario_id = self.request.query_params.get("usuario", None)
        if usuario_id:
            queryset = queryset.filter(usuarios__id=usuario_id)

        return queryset

class ProyectoAddUsuariosViewSet(viewsets.ViewSet):
    def create(self, request, *args, **kwargs):
        proyecto_id = kwargs.get('proyecto_id')
        proyecto = get_object_or_404(Proyecto, id=proyecto_id)

        usuario_data = request.data.get('usuario', None)

        if usuario_data:
            usuario_id = usuario_data.get('id')
            rol = usuario_data.get('rol', 'member')

            usuario = get_object_or_404(user, id=usuario_id)

            print(f'Añadiendo Usuario ID: {usuario_id}, Rol: {rol}')


            RolProyecto.objects.update_or_create(
                usuario=usuario,
                Proyecto=proyecto,
                defaults={'rol': rol}
            )

            return Response({'message': 'Usuario añadido correctamente al proyecto.'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Datos de usuario no proporcionados en la solicitud.'}, status=status.HTTP_400_BAD_REQUEST)




class vistaUser(viewsets.ModelViewSet):
    serializer_class = serializerUsers
    queryset = usuario.objects.all()


@method_decorator(csrf_exempt, name="dispatch")
def UserAuthentication(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username")
        password = data.get("password")
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({"id": user.id})
        else:
            return None
    else:
        return JsonResponse({"mensaje": "Método no permitido1"}, status=405)
