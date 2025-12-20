from rest_framework import serializers

class SendPDFSerializer(serializers.Serializer):
    pdf = serializers.FileField(upload_to="media/")