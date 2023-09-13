from django.db import models
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
# Create your models here.

 
class UsuarioManager(BaseUserManager):
    def create_user(self, username, correo, password=None):
        if not correo:
            raise ValueError('El campo "correo" es obligatorio')
        
        user = self.model(username=username, correo=correo)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, correo, password=None):
        user = self.create_user(username, correo, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user
    def get_by_natural_key(self, username):
        return self.get(username=username)
class usuario(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=50, unique=True)
    correo = models.EmailField(max_length=50, unique=True)
    objects = UsuarioManager()
    # Otros campos personalizados de tu modelo si los tienes
    is_active = True
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['correo']

    # Definición del administrador personalizado
    def natural_key(self):
        return self.username
    def check_password(self, raw_password):
        return check_password(raw_password, self.password)
    def __str__(self):
        return self.username
    
class Proyecto(models.Model):
    usuario = models.ForeignKey(usuario, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    
    def __str__(self):
        return self.nombre


class tasks(models.Model):
    class Meta:
        verbose_name = 'task'
        verbose_name_plural = 'tasks'
    nombre = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    proyecto = models.ForeignKey(Proyecto, on_delete=models.CASCADE)    
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_vencimento = models.DateTimeField(null=True, blank=True)    
    slug = models.SlugField(max_length=255, unique=True)
    estado = models.CharField(max_length=20, default='pendiente')
    def __str__(self):
        return self.nombre    