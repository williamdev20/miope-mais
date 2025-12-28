from rest_framework import serializers
from books.models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ["id", "name", "number_of_pages"]
        extra_kwargs = {
            "id": {"read_only": True}
        }
