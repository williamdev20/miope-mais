from rest_framework import serializers
from users.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "password", "preferences", "created_at"]
        extra_kwargs = {
            "id": {"read_only": True},
            "password": {"write_only": True},
            "created_at": {"read_only": True}
        }