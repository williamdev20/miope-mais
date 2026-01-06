import pymupdf

def create_book_from_pdf(pdf_path: bytes) -> tuple[bytes, dict[int, str]]:
    doc = pymupdf.open(stream=pdf_path, filetype="pdf")

    book: dict[int, str] = {}

    try:
        img: pymupdf.Page = doc[0]
        pix: pymupdf.Pixmap = img.get_pixmap(matrix=pymupdf.Matrix(2, 2), alpha=False)

        cape: bytes = pix.tobytes("jpg")

        for page_num in range(doc.page_count):
            page: pymupdf.Page = doc.load_page(page_num)
            text: str = str(page.get_text())

            book[page_num+1] = text
    finally:
        doc.close()

    return cape, book
