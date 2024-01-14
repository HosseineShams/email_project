from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    national_id = models.CharField(max_length=100, unique=True)
    email = models.EmailField()  

class EmailTemplate(models.Model):
    subject = models.CharField(max_length=100)
    body = models.TextField()

class EmailSendingProgress(models.Model):
    template = models.ForeignKey(EmailTemplate, on_delete=models.CASCADE)
    emails_sent = models.IntegerField(default=0)
    total_emails = models.IntegerField()
    status = models.CharField(max_length=20, default='Not Started')  