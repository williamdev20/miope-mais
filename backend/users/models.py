from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from users.services import default_preferences

class UserManager(BaseUserManager):
    use_in_migrations = True
    
    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("Email is required")
    
        email = self.normalize_email(email)

        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user
    
    def create_user(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self._create_user(email, password, **extra_fields)


class User(AbstractUser):
    username = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(unique=True, null=False, blank=False)
    preferences = models.JSONField(default=default_preferences, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager() # type: ignore[assignment]

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

    def __str__(self) -> str:
        return f"Email: {self.email}"
