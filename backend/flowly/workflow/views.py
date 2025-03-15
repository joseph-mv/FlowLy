from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import  login_required
from rest_framework import status # type: ignore
from rest_framework.response import Response # type: ignore
from rest_framework.decorators import api_view # type: ignore

from . models import Workflow
from .serializers import WorkflowSerializer


@api_view(['POST'])
@login_required
def create_view(req):
    """Create a new Workflow for an authenticated user."""
    
    try:
        user=req.user
        data=req.data

        # Create a new workflow record
        Workflow.objects.create( user=user, name=data['name'], nodes=data['nodes'], edges=data['edges'])
        return Response({"message": "Workflow created successfully"},  status=status.HTTP_201_CREATED )    
    
    except Exception as e:
        print(str(e))
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
@login_required
def get_all_view(req):
    """Fetch all workflows for the authenticated user, 
        returning only selected fields.
    """
    try:
        workflows = req.user.workflows.values('id','name','created_at').order_by('-created_at')  # last saved item at first
        return Response(workflows, status=status.HTTP_200_OK)   
    
    except Exception as e:
        print(f"Error fetching workflows: {str(e)}")
        return Response({"error": "Failed to fetch workflows"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['DELETE'])
@login_required
def remove_view(req,pk):
    """Delete a workflow by its ID."""
    
    try:
        user=req.user
        workflow = get_object_or_404(Workflow, id=pk,user=user)
        workflow.delete()

        return Response({"message": "Workflow deleted successfully"}, status=status.HTTP_200_OK) 
    except Exception as e:
        print(f"Error deleting workflow {pk}: {str(e)}")
        return Response({"error": "Failed to delete workflow"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
@login_required
def get_view(req,pk):
    """Retrieve a workflow by its ID for the authenticated user."""

    try:
        user=req.user

        # Ensure the workflow exists and belongs to the current user
        workflow = get_object_or_404(Workflow, id=pk,user=user)

        # Convert the workflow instance into a serialized JSON format
        # This allows the data to be sent as a response in a structured way
        serializer = WorkflowSerializer(workflow)

        return Response(serializer.data, status=status.HTTP_200_OK) 
    
    except Exception as e:
        print(f"Error getting workflow {pk}: {str(e)}")
        return Response({"error": "Failed to get workflow"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(['PUT'])
@login_required
def update_view(req,pk):
    """Update an existing workflow by its ID for the authenticated user."""

    try:
        data=req.data
        user=req.user

        workflow = get_object_or_404(Workflow, id=pk,user=user)

        # Update the workflow fields if new data is provided; otherwise, keep existing values
        workflow.name = data.get('name', workflow.name)
        workflow.nodes = data.get('nodes', workflow.nodes)
        workflow.edges = data.get('edges', workflow.edges)
        
        workflow.save() 
        return Response({"message": "Workflow updated successfully"},  status=status.HTTP_201_CREATED )    
    except Exception as e:
        print(str(e))
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
