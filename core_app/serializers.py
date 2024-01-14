from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile, EmailTemplate
from rest_framework import serializers
from django.contrib.auth import get_user_model

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email')
        extra_kwargs = {'password': {'write_only': True}}

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)

    class Meta:
        model = UserProfile
        fields = ('user', 'national_id')

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create(
            username=user_data['username'],
            email=user_data['email']
        )
        user.set_password(user_data['password'])
        user.save()
        user_profile = UserProfile.objects.create(
            user=user, 
            national_id=validated_data['national_id'],
            email=user.email  # Save the email in UserProfile as well.
        )
        return user_profile

class EmailTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailTemplate
        fields = ['id', 'subject', 'body']