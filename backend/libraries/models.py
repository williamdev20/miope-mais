from django.db import models
from books.models import Book
from users.models import User

class Library(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    current_page = models.IntegerField(null=False, blank=False)