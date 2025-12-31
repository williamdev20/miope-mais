from django.db import models
from django.core.validators import MinValueValidator
from django.core.exceptions import ValidationError
from users.models import User

class Book(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False)
    name = models.CharField(max_length=255, null=False, blank=False)
    number_of_pages = models.IntegerField(default=0, null=False, blank=False)
    current_page = models.IntegerField(default=1, null=False, blank=False, validators=[
            MinValueValidator(1)
        ]
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Book"
        verbose_name_plural = "Books"

    def clean(self):
        super().clean()

        if self.current_page > self.number_of_pages:
            raise ValidationError({
                "current_page": "Can't be bigger than 'number_of_pages'"
            })

    def __str__(self) -> str:
        return f"Name: {self.name}"