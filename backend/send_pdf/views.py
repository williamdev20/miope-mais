from rest_framework.views import APIView
from send_pdf.serializers import GetPDFSerializer
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response
from rest_framework import status
from send_pdf.services import create_book_from_pdf
from book.serializers import BookSerializer
from book.models import Book
import base64

class GetPDFAPIView(APIView):
    parser_classes = [MultiPartParser, FormParser]
    
    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def post(self, request):
        serializer = GetPDFSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        pdf_file = serializer.validated_data["pdf"] # type: ignore
        #if isinstance(pdf_file, (InMemoryUploadedFile, TemporaryUploadedFile)):

        pdf_bytes = pdf_file.read()
       # pdf_base64 = base64.b64encode(pdf_bytes).decode("utf-8")
        book = create_book_from_pdf(pdf_bytes)


        books: list = []

        for page in range(len(book)):
            b = Book.objects.create(
                content=book[page + 1],
                pages=page + 1
            )

            books.append(BookSerializer(b).data)

        #print(book[1])
        return Response(books, status=status.HTTP_201_CREATED)

        """
        return Response({
            "filename": pdf_file.name,
            "content_type": pdf_file.content_type
        }, status=status.HTTP_200_OK)
        """
        