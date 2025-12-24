from django.db import models
from books.models import Book

class Page(models.Model):
    # ID represents the page number
    content = models.TextField()
    book = models.ForeignKey(Book, on_delete=models.CASCADE, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Page"
        verbose_name_plural = "Pages"