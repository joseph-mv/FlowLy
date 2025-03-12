from django.db import models

# Create your models here.
class Workflow(models.Model):
    name=models.CharField(max_length=100)
    nodes=models.JSONField()
    edges=models.JSONField()
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    def __str__(self) ->str:
        return self.name