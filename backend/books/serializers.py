from rest_framework import serializers
from books.models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ["id", "name", "current_page", "number_of_pages"]
        extra_kwargs = {
            "id": {"read_only": True},
            "name": {"read_only": True},
            "number_of_pages": {"read_only": True}
        }

class BookCurrentPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ["current_page"]