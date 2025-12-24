from rest_framework import serializers
from books.models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ["id", "name"]
        extra_kwargs = {
            "id": {"read_only": True}
        }

# Lack put Serializer Class for view pages from the book