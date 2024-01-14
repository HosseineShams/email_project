from django.contrib import admin
from .models import UserProfile, EmailTemplate, EmailSendingProgress

admin.site.register(UserProfile)
admin.site.register(EmailTemplate)
admin.site.register(EmailSendingProgress)