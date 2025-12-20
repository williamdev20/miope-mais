from django.urls import path
from send_pdf.views import GetPDFAPIView

urlpatterns = [
    path("", GetPDFAPIView.as_view(), name="send_pdf")
]
