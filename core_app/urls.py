from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserProfileViewSet, EmailTemplateViewSet, file_upload, send_emails, user_profile_list, send_emails, login_api, logout_api

router = DefaultRouter()
router.register(r'users', UserProfileViewSet)
router.register(r'email_templates', EmailTemplateViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', login_api, name='login_api'),
    path('logout/', logout_api, name='logout_api'),
    path('upload/', file_upload, name='file_upload'),
    path('send_emails/', send_emails, name='send_emails'),
    path('api/users/', user_profile_list, name='user-profile-list'),
]
