from django.db import models
from users.models import User

class Book(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False)
    name = models.CharField(max_length=255, null=False, blank=False)
    number_of_pages = models.IntegerField(null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Book"
        verbose_name_plural = "Books"

    def __str__(self) -> str:
        return f"Name: {self.name}"