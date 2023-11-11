from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from rest_framework.documentation import include_docs_urls

from .views import *

routerTareas = routers.DefaultRouter()
routerTareas.register(r"tasks", vistaTask, "tasks")
routerProyectos = routers.DefaultRouter()
routerProyectos.register(r"projects", vistaProject, "project")
routerUsuarios = routers.DefaultRouter()
routerUsuarios.register(r"users", vistaUser, "users")

from django.contrib import admin
from django.urls import path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/", include(routerTareas.urls)),
    path("docs/", include_docs_urls(title="tasks API")),
    path("api/v1/", include(routerProyectos.urls)),
    path("api/v1/", include(routerUsuarios.urls)),
    path("api/v1/User/", UserAuthentication, name="usersAuth"),
    # path('tasks/',include('apps.taskbar.urls')),
    # path('projects/', include('apps.taskbar.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
