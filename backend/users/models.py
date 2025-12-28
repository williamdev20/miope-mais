from django.db import models
from django.contrib.auth.models import AbstractUser
from users.services import default_preferences

class User(AbstractUser):
    username = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(unique=True, null=False, blank=False)
    preferences = models.JSONField(default=default_preferences, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

    def __str__(self) -> str:
        return f"Email: {self.email}"
