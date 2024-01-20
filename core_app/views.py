from rest_framework import viewsets    
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.files.storage import default_storage
from django.contrib.auth.models import User
from .models import UserProfile, EmailTemplate, EmailSendingProgress
from .serializers import UserProfileSerializer, EmailTemplateSerializer
import csv
from django.core.files.storage import default_storage
import openpyxl
import chardet
import io
from django.db.utils import IntegrityError
from rest_framework import status
import time
from django.contrib.auth import authenticate, login, logout

@api_view(['POST'])
def user_profile_list(request):
    if request.method == 'POST':
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_user_profile(request):
    serializer = UserProfileSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def login_api(request):
    username = request.data.get('username')
    password = request.data.get('password')
    
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def logout_api(request):
    logout(request)
    return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class EmailTemplateViewSet(viewsets.ModelViewSet):
    queryset = EmailTemplate.objects.all()
    serializer_class = EmailTemplateSerializer

@api_view(['POST'])
def file_upload(request):
    # Checking if there is a file in the request
    if 'file' not in request.FILES:
        return Response({"error": "No file provided"}, status=400)

    # Saving the uploaded file
    file = request.FILES['file']
    file_name = default_storage.save('uploads/' + file.name, file)
    file_path = default_storage.path(file_name)

    # Load the workbook, and select the active worksheet
    workbook = openpyxl.load_workbook(filename=file_path)
    sheet = workbook.active

    # Process each row in the worksheet
    for row in sheet.iter_rows(min_row=2):  # Skip the header row
        national_id = row[0].value
        email = row[1].value

        # Check if national ID and email are provided
        if not national_id or not email:
            continue  # Skip rows with missing data

        # Enclose the user creation in a try-except block to handle duplicates
        try:
            # Get or create the user
            user, user_created = User.objects.get_or_create(username=email, defaults={'email': email})

            # Get or create the profile linked to the user
            profile, profile_created = UserProfile.objects.get_or_create(user=user, defaults={'national_id': national_id, 'email': email})

            # If the profile was not created, it means it already existed, so update it
            if not profile_created:
                profile.national_id = national_id
                profile.email = email
                profile.save()

        except IntegrityError as e:
            # If there's an integrity error 
            continue

    # Delete the file after processing
    default_storage.delete(file_name)

    return Response({"message": "Excel file processed successfully"}, status=200)

@api_view(['POST'])
def send_emails(request):
    template_id = request.data.get('template_id', None)
    email_template = EmailTemplate.objects.filter(pk=template_id).first()

    if not email_template:
        return Response({"error": "Email template not found."}, status=status.HTTP_404_NOT_FOUND)

    # Here we will simulate email sending.
    user_profiles = UserProfile.objects.all()
    progress, created = EmailSendingProgress.objects.get_or_create(template=email_template, defaults={
        'total_emails': user_profiles.count(),
        'status': 'In Progress'
    })

    for profile in user_profiles:
        print(f"Sending email to {profile.email} with subject: {email_template.subject}")
        # Simulate email sending delay
        time.sleep(0.1)  # Remove or adjust this in production
        progress.emails_sent += 1
        progress.save()

    progress.status = 'Completed'
    progress.save()

    return Response({"message": f"Emails have been sent using template '{email_template.subject}'."}, status=status.HTTP_200_OK)
