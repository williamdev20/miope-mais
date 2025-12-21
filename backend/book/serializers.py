from rest_framework import serializers
from book.models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ["id", "content", "pages", "created_at"]
        extra_kwargs = {
            "id": {"read_only": True},
            "content": {"read_only": True},
            "pages": {"read_only": True},
            "created_at": {"read_only": True}
        }