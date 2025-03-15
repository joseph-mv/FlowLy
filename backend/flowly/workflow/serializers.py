from rest_framework import serializers # type: ignore

from .models import Workflow

class WorkflowSerializer(serializers.ModelSerializer):
    """
    Serializer for the Workflow model.
    
    This serializer converts Workflow model instances to and from JSON format,
    ensuring that data sent to or received from the API is validated against
    the Workflow model's fields.
    """
    class Meta:
        model = Workflow  # Specify the model to be serialized
        fields = '__all__'  # Include all fields from the Workflow model in the serialization 
