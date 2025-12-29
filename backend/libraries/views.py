from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from libraries.serializers import LibrarySerializer
from libraries.models import Library
from rest_framework.response import Response
from rest_framework import status

class LibraryAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        libraries = Library.objects.filter(user=request.user)
        serializer = LibrarySerializer(libraries, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)