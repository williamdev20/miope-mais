from rest_framework.views import APIView
from send_pdf.serializers import GetPDFSerializer
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response
from rest_framework import status
from send_pdf.services import create_book_from_pdf
from book.serializers import BookSerializer
from book.models import Book
from library.models import Library
from library.serializers import LibrarySerializer

class GetPDFAPIView(APIView):
    parser_classes = [MultiPartParser, FormParser]
    
    def get(self, request):
        libraries = Library.objects.all()
        serializer = LibrarySerializer(libraries, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def post(self, request):
        serializer = GetPDFSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        pdf_file = serializer.validated_data["pdf"] # type: ignore

        pdf_bytes = pdf_file.read()
        book = create_book_from_pdf(pdf_bytes)
        

        books: list = []

        for page in range(len(book)):
            b = Book.objects.create(
                pages=page + 1,
                content=book[page + 1]
            )

            library = Library.objects.create(
                name=pdf_file.name,
                book=b
            )

            books.append(b)

        library_serializer = LibrarySerializer(library)
        return Response(library_serializer.data, status=status.HTTP_201_CREATED)

        """
        return Response({
            "filename": pdf_file.name,
            "content_type": pdf_file.content_type
        }, status=status.HTTP_200_OK)
        """
        