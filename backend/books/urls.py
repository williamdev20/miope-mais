from django.urls import path
from books.views import BookListAPIView, BookDetailAPIView

app_name = "books"

urlpatterns = [
    path("", BookListAPIView.as_view(), name="book_list"),
    path("<int:id>/", BookDetailAPIView.as_view(), name="book_detail")
]
