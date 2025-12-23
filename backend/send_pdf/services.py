import pymupdf

def create_book_from_pdf(pdf_path: bytes) -> dict:
    try:
        doc = pymupdf.open(stream=pdf_path, filetype="pdf")
    except pymupdf.FileNotFoundError:
        raise ValueError("error Não foi possível encontrar este PDF!")
    
    book: dict[int, str] = {}

    for page_num in range(doc.page_count):
        page: pymupdf.Page = doc.load_page(page_num)
        text: str = str(page.get_text())

        book[page_num+1] = text

    doc.close()

    return book
