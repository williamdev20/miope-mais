from django.db import models

class Book(models.Model):
    #user/owner
    name = models.CharField(max_length=255, null=False, blank=False)

    class Meta:
        verbose_name = "Book"
        verbose_name_plural = "Books"