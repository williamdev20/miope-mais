from django.urls import path
from ingestion_pdf.views import IngestionPDFAPIView

urlpatterns = [
    path("pdf/", IngestionPDFAPIView.as_view(), name="ingestion_pdf")
]
