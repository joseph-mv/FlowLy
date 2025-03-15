from django.db import models
from django.contrib.auth.models import User

class Workflow(models.Model):
    """
    Model representing a Workflow created by a user.
    """
    name=models.CharField(max_length=100)
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='workflows')
    nodes=models.JSONField()
    edges=models.JSONField()
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    def __str__(self) ->str:
        """
        Return a human-readable string representation of the Workflow.
        """
        return self.name