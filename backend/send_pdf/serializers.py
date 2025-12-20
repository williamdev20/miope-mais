from rest_framework import serializers

class GetPDFSerializer(serializers.Serializer):
    pdf = serializers.FileField()