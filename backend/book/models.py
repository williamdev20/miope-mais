from django.db import models

class Book(models.Model):
    pages = models.IntegerField(null=False, blank=False)
    content = models.TextField(null=False, blank=False)

    class Meta:
        verbose_name = "Book"
        verbose_name_plural = "Books"