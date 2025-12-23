from django.db import models
from book.models import Book

class Library(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False, default="Sem nome")
    book = models.ForeignKey(Book, on_delete=models.CASCADE, null=False, blank=False)