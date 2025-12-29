from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("auth/", include("dj_rest_auth.urls")),
    path('auth/signup/', include('dj_rest_auth.registration.urls')),
    path("ingestion/", include("ingestion_pdf.urls")),
    path("books/", include("books.urls")),
    path("libraries/", include("libraries.urls")),
]
