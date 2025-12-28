from django.db import models

class Book(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    number_of_pages = models.IntegerField(null=False, blank=False)

    class Meta:
        verbose_name = "Book"
        verbose_name_plural = "Books"

    def __str__(self) -> str:
        return f"Name: {self.name}"