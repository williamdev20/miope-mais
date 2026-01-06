import pymupdf

def create_book_from_pdf(pdf_path: bytes) -> dict[int, str]:
    doc = pymupdf.open(stream=pdf_path, filetype="pdf")

    book: dict[int, str] = {}

    try:
        for page_num in range(doc.page_count):
            page: pymupdf.Page = doc.load_page(page_num)
            text: str = str(page.get_text())

            book[page_num+1] = text
    finally:
        doc.close()

    return book
