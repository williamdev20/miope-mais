from django.contrib import admin
from django.urls import path, include
from users.views import GoogleLogin
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path("auth/", include("dj_rest_auth.urls")),
    path('auth/signup/', include('dj_rest_auth.registration.urls')),
    path("auth/google/", GoogleLogin.as_view(), name="google_login"),
    path("users/", include("users.urls")),
    path("ingestion/", include("ingestion_pdf.urls")),
    path("books/", include("books.urls")),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
