from django.shortcuts import render,HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from . models import Workflow
# Create your views here.


@api_view(['POST'])
def create(req):
    try:
        data=req.data
        workflow = Workflow.objects.create(name=data['name'], nodes=data['nodes'], edges=data['edges'])
        print(workflow)
        return Response(
            {"message": "Workflow created successfully"},
            status=status.HTTP_201_CREATED
        )
    except Exception as e:
        print(str(e))
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

