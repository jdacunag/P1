from django.urls import path, include
from .views  import *
from rest_framework import routers
from apps.taskbar import views
from rest_framework.documentation import include_docs_urls


routerTareas = routers.DefaultRouter()
routerTareas.register(r'tasks', views.vistaTask,  'tasks')
routerProyectos = routers.DefaultRouter()
routerProyectos.register(r'projects', views.vistaProject, 'project')
routerUsuarios = routers.DefaultRouter()
routerUsuarios.register(r'users', views.vistaUser, 'users')



urlpatterns = [
    path("api/v1/", include(routerTareas.urls)),
    path('docs/', include_docs_urls(title="tasks API")),
    path("api/v1/", include(routerProyectos.urls)), 
    path("api/v1/", include(routerUsuarios.urls)),
    path("api/v1/User/", views.UserAuthentication,  name ='usersAuth'),
]