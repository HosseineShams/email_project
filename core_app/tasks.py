from celery import shared_task
from .models import UserProfile, EmailTemplate, EmailSendingProgress

@shared_task
def send_emails_task(template_id):
    email_template = EmailTemplate.objects.get(pk=template_id)
    user_profiles = UserProfile.objects.all()
    progress = EmailSendingProgress.objects.create(template=email_template, total_emails=user_profiles.count(), status='In Progress')

    for profile in user_profiles:
        # Simulate email sending
        progress.emails_sent += 1
        progress.save()

    progress.status = 'Completed'
    progress.save()
