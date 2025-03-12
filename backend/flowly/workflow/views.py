from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from . models import Workflow

@api_view(['POST'])
def create(req):
    """Create a new Workflow."""

    try:
        data=req.data
        workflow = Workflow.objects.create(name=data['name'], nodes=data['nodes'], edges=data['edges'])
        print(workflow)
        return Response({"message": "Workflow created successfully"},  status=status.HTTP_201_CREATED )    
    except Exception as e:
        print(str(e))
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def get_all(req):
    """Fetch all workflows with selected fields."""

    try:
        workflows = Workflow.objects.values('id','name','created_at')
        return Response(workflows, status=status.HTTP_200_OK)   
    except Exception as e:
        print(f"Error fetching workflows: {str(e)}")
        return Response({"error": "Failed to fetch workflows"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['DELETE'])
def remove(req,pk):
    """Delete a workflow by its ID."""

    try:
        workflow = Workflow.objects.get(id=pk)
        workflow.delete()
        return Response({"message": "Workflow deleted successfully"}, status=status.HTTP_200_OK) 
    except Exception as e:
        print(f"Error deleting workflow {pk}: {str(e)}")
        return Response({"error": "Failed to delete workflow"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['DELETE'])
def get(req,pk):
    """Get workflow by its ID."""

    try:
        workflow = Workflow.objects.get(id=pk)
        return Response(workflow, status=status.HTTP_200_OK) 
    except Exception as e:
        print(f"Error getting workflow {pk}: {str(e)}")
        return Response({"error": "Failed to get workflow"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)