from django.db import models

# Create your models here.
class tasks(models.Model):
    class Meta:
        verbose_name = 'task'
        verbose_name_plural = 'tasks'
    nombre = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    #proyecto = models.ForeignKey(Proyecto, on_delete=models.CASCADE)    
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_vencimento = models.DateTimeField(null=True, blank=True)    
    slug = models.SlugField(max_length=255, unique=True)
    estado = models.CharField(max_length=20, default='pendiente')
    
    def __str__(self):
        return self.nombre
        