from rest_framework import serializers
from pages.models import Page

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ["id", "content", "book"]

# [PODE IGNORAR EU DO FUTURO :D | JÁ TÁ FAZIDO :p] listar as páginas onde o (book da página) exista e for igual ao book da URL

class PageDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ["id", "content"]