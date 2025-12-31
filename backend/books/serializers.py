from rest_framework import serializers
from django.core.exceptions import ValidationError as DjangoValidationError
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

    def update(self, instance, validated_data):
        instance.current_page = validated_data.get("current_page")

        try:
            instance.full_clean() # Validação completa além do 'clean()', tipo o max_length, MinValueValidator, blank, etc
        except DjangoValidationError as e:
            raise serializers.ValidationError(e.message_dict) # 'message_dict' pega a exceção que tem no meu método clean da minha models.py
        
        instance.save()
        return instance