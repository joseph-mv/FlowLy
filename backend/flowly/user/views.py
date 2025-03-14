from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login as auth_login,logout as auth_logout


from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view


# Create your views here.
@api_view(["POST"])
def signup(req):
    try:
        name=req.data['name']
        email=req.data['email']
        password=req.data['password']

        user=User.objects.create_user(username=name,email=email,password=password)
        print(user)
        return Response({"message": "Signup completed successfully"},  status=status.HTTP_201_CREATED )    

    except Exception as e:
        print('err',str(e))
        return Response({"error": "Duplicate username or Invalid credentials"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



    

@api_view(["POST"])
def login(req):
    try:
        name=req.data['name']
        password=req.data['password']

        user=authenticate(username=name,password=password)
        print(user)
        if user:
            auth_login(req,user)
            return Response(name,  status=status.HTTP_201_CREATED )    
        else:
            return Response({"error": "Invalid password or username"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        
    except Exception as e:
        print('err',str(e))
        return Response({"error": "Invalid password or username"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def logout(req):
    auth_logout(req)
    return Response({"message": "Logout successfully"},  status=status.HTTP_201_CREATED )    
     
