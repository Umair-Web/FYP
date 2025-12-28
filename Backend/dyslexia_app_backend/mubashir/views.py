from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions, authentication
from .serializers import RegisterSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


# Create your views here.
class RegisterView(APIView):
    def post(self, request):
        data = request.data
        serializer = RegisterSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully.", 
                             "data": data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class LoginView(APIView):
    def post(self, request):
        data = request.data
        username = data.get('username')
        password = data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({"message": "User logged in successfully.", 
                             "RefreshToken": str(refresh), "AceessToken": str(refresh.access_token)}, status=status.HTTP_200_OK)
        return Response({"message": "Invalid credentials."}, status=status.HTTP_401_UNAUTHORIZED)