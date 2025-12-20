from rest_framework.views import APIView
from send_pdf.serializers import GetPDFSerializer
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response
from rest_framework import status
from send_pdf.services import create_book_from_pdf

class GetPDFAPIView(APIView):
    parser_classes = [FormParser, MultiPartParser]

    def post(self, request):
        serializer = GetPDFSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        pdf_file = serializer.validated_data["pdf"] # type: ignore
        pdf_bytes = pdf_file.read()


        book_json = create_book_from_pdf(pdf_bytes)

        return Response({"book": book_json}, status=status.HTTP_200_OK)

        
        
        """
        return Response({
            "filename": pdf.name,
            "content_type": pdf.content_type
        }, status=status.HTTP_200_OK)
        """