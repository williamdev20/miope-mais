from rest_framework import serializers
from users.models import User, UserPreference
from users.models import UserPreference
from dj_rest_auth.registration.serializers import RegisterSerializer as DefaultRegisterSerializer

class RegisterSerializer(DefaultRegisterSerializer):
    def save(self, request):
        user = super().save(request)
        UserPreference.objects.create(owner=user)
        
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "password", "created_at"]
        extra_kwargs = {
            "id": {"read_only": True},
            "password": {"write_only": True},
            "created_at": {"read_only": True}
        }


class UserPreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPreference
        fields = ["owner", "backgroundColor", "fontColor", "fontSize"]
        extra_kwargs = {
            "owner": {"read_only": True}
        }