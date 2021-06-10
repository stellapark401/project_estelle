from common.models import DataTransferObject
'''
from django.db import models


class CrimeVo(models.Model):
    police = models.TextField()
    crime = models.TextField()
    create_at = models.DateTimeField()
'''


class CrimeDTO(DataTransferObject):
    police: str
    crime: str
    create_at: str
