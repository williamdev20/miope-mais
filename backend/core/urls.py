from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("ingestion/", include("ingestion_pdf.urls")),
    path("books/", include("books.urls")),
]
