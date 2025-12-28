from rest_framework.views import APIView
from books.models import Book
from books.serializers import BookSerializer
from pages.models import Page
from pages.serializers import PageDetailSerializer
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_list_or_404
from rest_framework.permissions import IsAuthenticated

class BookListAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class BookDetailAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, id):
        pages = get_list_or_404(Page, book=id)
        serializer = PageDetailSerializer(pages, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
