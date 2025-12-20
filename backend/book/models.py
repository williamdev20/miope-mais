from django.db import models

class Book(models.Model):
    content = models.TextField(null=False, blank=False)
    pages = models.IntegerField(null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Book"
        verbose_name_plural = "Books"