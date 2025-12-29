from rest_framework.views import APIView
from pages.models import Page
from books.models import Book
from books.serializers import BookSerializer
from libraries.models import Library
from ingestion_pdf.serializers import IngestionPDFSerializer
from ingestion_pdf.services import create_book_from_pdf
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

class IngestionPDFAPIView(APIView):
    parser_classes = [FormParser, MultiPartParser]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = IngestionPDFSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        pdf_file = serializer.validated_data["pdf"] # type: ignore
        pdf_bytes = pdf_file.read()

        pages = create_book_from_pdf(pdf_bytes)
        
        book = Book.objects.create(
            name=pdf_file.name,
            number_of_pages=len(pages)
        )

        for page in range(len(pages)):
            Page.objects.create(
                content=pages[page + 1],
                book=book
            )

        """
        Aí aqui eu crio uma library recebendo esse book que foi criado
        e o usuário vai ser o que está logado
        """

        Library.objects.create(
            user=request.user,
            book=book,
            current_page=1
        )


        book_serializer = BookSerializer(book)
        return Response(book_serializer.data, status=status.HTTP_201_CREATED)

