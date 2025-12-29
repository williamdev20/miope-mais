from django.db import models
from books.models import Book
from users.models import User

class Library(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False)
    book = models.ForeignKey(Book, on_delete=models.CASCADE, null=False, blank=False)
    current_page = models.IntegerField(null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Library"
        verbose_name_plural = "Libraries"