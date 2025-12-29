from django.urls import path
from libraries.views import LibraryAPIView

urlpatterns = [
    path("", LibraryAPIView.as_view(), name="libraries_list")
]
