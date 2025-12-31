from rest_framework import serializers

class IngestionPDFSerializer(serializers.Serializer):
    pdf = serializers.FileField(required=True)

    def validate_pdf(self, _pdf):
        if not _pdf.name.lower().endswith(".pdf"):
            raise serializers.ValidationError("[ERROR] This file isn't a PDF!")
    
        return _pdf
