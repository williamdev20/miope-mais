from rest_framework.views import APIView
from pages.models import Page
from books.models import Book
from books.serializers import BookSerializer
from ingestion_pdf.serializers import IngestionPDFSerializer
from ingestion_pdf.services import create_book_from_pdf
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

"""
Para possivelmente colocar imagem pro meu mano cley cley:
vou extrair tudo com PymuPDF mesmo e vou verificar se todas (ou pelo menos
a maioria) as páginas estão em branco. Se estiverem, é sinal que provavelmente
elas sejam imagens.

Se for, aí eu uso o PikePDF para pegar as imagens desse PDF.
Como eu vou fazer pra renderizar isso no mobile com RN, tem que ver com os cara
lá :p
"""


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
            owner=request.user,
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


        book_serializer = BookSerializer(book)
        return Response(book_serializer.data, status=status.HTTP_201_CREATED)

