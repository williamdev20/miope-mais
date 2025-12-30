from rest_framework.views import APIView
from users.serializers import UserPreferenceSerializer
from users.models import UserPreference
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

class UserPreferenceAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        preferences = UserPreference.objects.filter(owner=request.user)
        serializer = UserPreferenceSerializer(preferences, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request):
        preference = UserPreference.objects.get(owner=request.user)
        serializer = UserPreferenceSerializer(preference, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)