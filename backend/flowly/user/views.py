from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login as auth_login,logout as auth_logout

from rest_framework import status # type: ignore
from rest_framework.response import Response # type: ignore
from rest_framework.decorators import api_view # type: ignore


@api_view(["POST"])
def signup_view(req):
    """
    Handles the signup request for creating a new user.
    """   
    try:
        name=req.data['name']
        email=req.data['email']
        password=req.data['password']

        # Check if a user already exists with the same email
        if User.objects.filter(email=email).exists():
            return Response({"error": "A user with this email already exists."}, status=status.HTTP_400_BAD_REQUEST)

        # Create a new user
        User.objects.create_user(username=name,email=email,password=password)

        return Response({"message": "Signup completed successfully"},  status=status.HTTP_201_CREATED )    

    except Exception as e:
        print('err',str(e))
        return Response({"error": "Duplicate username or Invalid credentials"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
def login_view(req):
    """
    Authenticate and log in a user."
    """
    try:
        name=req.data['name']
        password=req.data['password']

        # Attempt to authenticate the user.
        user=authenticate(username=name,password=password)

        if user:
            # If authentication is successful, log in the user.
            auth_login(req,user)
            return Response(name,  status=status.HTTP_201_CREATED )    
        else:
            return Response({"error": "Invalid password or username"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        
    except Exception as e:
        print('err',str(e))
        return Response({"error": "Invalid password or username"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def logout_view(req):
    """
    Logs out the user by clearing session data and returning a success response.
    """
    auth_logout(req) # Log out the user and clear session
    return Response({"message": "Logout successfully"},  status=status.HTTP_201_CREATED )    
     
