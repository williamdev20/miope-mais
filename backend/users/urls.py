from django.urls import path
from users.views import UserPreferenceAPIView

urlpatterns = [
    path("preferences/", UserPreferenceAPIView.as_view(), name="set_user_preference")
]
