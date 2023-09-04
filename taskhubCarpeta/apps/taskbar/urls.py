from django.urls import path, include
from .views  import *
from rest_framework import routers
from apps.taskbar import views
from rest_framework.documentation import include_docs_urls


router = routers.DefaultRouter()
router.register(r'tasks', views.vistaTask,  'tasks')



urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="tasks API"))
]