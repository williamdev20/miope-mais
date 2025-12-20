import pymupdf

def create_book_from_pdf(pdf: pymupdf.Document):
    try:
        doc = pymupdf.open(pdf)
    except FileNotFoundError as e:
        raise return RuntimeError("")
