from rest_framework import serializers
from libraries.models import Library

class LibrarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Library
        fields = ["id", "user", "book", "current_page", "created_at"]
        extra_kwargs = {
            "id": {"read_only": True},
            "created_at": {"read_only": True}
        }