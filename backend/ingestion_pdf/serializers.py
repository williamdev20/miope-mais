from rest_framework import serializers

class IngestionPDFSerializer(serializers.Serializer):
    pdf = serializers.FileField(required=True)