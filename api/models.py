from django.db import models

# Create your models here.
class Medida(models.Model):
    id_paper = models.CharField(max_length=1000, default="", unique=True )
    titulo = models.CharField(max_length=1000, default="")
    keywords = models.CharField(max_length=10000, default="")
    abstract = models.CharField(max_length=10000000, default="")


