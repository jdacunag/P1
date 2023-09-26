from django.contrib.auth.backends import ModelBackend
from .models import usuario

class CustomAuthBackend(ModelBackend):

    def authenticate(self, request, username=None, password=None, **kwargs):
        try :
            user = usuario.objects.get(username=username, password=password)
            if user:
                return user
        except usuario.DoesNotExist:
            return None
        except Exception as e:
            return None