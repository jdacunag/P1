from django.contrib import admin
from .models import tasks, Proyecto, usuario


# Register your models here.

admin.site.register(tasks)
admin.site.register(Proyecto)
admin.site.register(usuario)