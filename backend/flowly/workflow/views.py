from django.shortcuts import get_object_or_404
from .serializers import WorkflowSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.decorators import  login_required

from . models import Workflow

@api_view(['POST'])
@login_required
def create(req):
    """Create a new Workflow."""
    try:
        user=req.user
        data=req.data
        workflow = Workflow.objects.create( user=user, name=data['name'], nodes=data['nodes'], edges=data['edges'])
        print(workflow)
        return Response({"message": "Workflow created successfully"},  status=status.HTTP_201_CREATED )    
    except Exception as e:
        print(str(e))
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
@login_required
def get_all(req):
    """Fetch all workflows with selected fields."""
    try:
        workflows = req.user.workflows.values('id','name','created_at').order_by('-created_at')  # last saved item at first
        print(workflows)
        return Response(workflows, status=status.HTTP_200_OK)   
    except Exception as e:
        print(f"Error fetching workflows: {str(e)}")
        return Response({"error": "Failed to fetch workflows"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['DELETE'])
@login_required
def remove(req,pk):
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
def get(req,pk):
    """Get workflow by its ID."""

    try:
        user=req.user
        workflow = get_object_or_404(Workflow, id=pk,user=user)
        serializer = WorkflowSerializer(workflow)
        return Response(serializer.data, status=status.HTTP_200_OK) 
    except Exception as e:
        print(f"Error getting workflow {pk}: {str(e)}")
        return Response({"error": "Failed to get workflow"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(['PUT'])
@login_required
def update(req,pk):
    """Update workflow by its ID."""

    try:
        data=req.data
        user=req.user
        workflow = get_object_or_404(Workflow, id=pk,user=user)

        # Update fields
        workflow.name = data.get('name', workflow.name)
        workflow.nodes = data.get('nodes', workflow.nodes)
        workflow.edges = data.get('edges', workflow.edges)
        
        workflow.save() 
        return Response({"message": "Workflow updated successfully"},  status=status.HTTP_201_CREATED )    
    except Exception as e:
        print(str(e))
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
