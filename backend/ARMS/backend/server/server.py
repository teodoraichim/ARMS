from flask import Flask, request
from flask_cors import CORS
from backend.service import book_service
import json

app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={
    r"/*": {
        "origins": "*"
    }
}
            )

"""
resource example: http://127.0.0.1:5000/book/id/2
"""


@app.route('/book/id/<int:item>')
def get_book_by_id(item):
    return book_service.get_book_by_id(item)


"""
resource example: http://127.0.0.1:5000/book/category/cloud
"""


@app.route('/book/category/<string:category>')
def get_book_by_category(category):
    return book_service.get_book_by_category(category)


"""
resource example: http://127.0.0.1:5000/book/isbn/1119612144
"""


@app.route('/book/isbn/<string:isbn>')
def get_book_by_isbn(isbn):
    return book_service.get_book_by_isbn(isbn)


"""
resource example: http://127.0.0.1:5000/book/year/2020
"""


@app.route('/book/year/<string:year>')
def get_book_by_year(year):
    return book_service.get_book_by_year(year)


"""
resource example: http://127.0.0.1:5000/book/author/Elshad%20Karimov
"""


@app.route('/book/author/<string:author>')
def get_books_by_author(author):
    return book_service.get_book_by_author(author)


"""
resource example: http://127.0.0.1:5000/book/title/Microsoft%20Azure%20For%20Dummies
"""


@app.route('/book/title/<string:title>')
def get_book_by_title(title):
    return book_service.get_book_by_title(title)


"""
resource example: http://127.0.0.1:5000/book/categories
"""


@app.route('/book/categories')
def get_categories():
    return book_service.get_categories()


"""
filter just the needed fields
resource example: http://127.0.0.1:5000/book/filter?page=2&year2020%category=Swift
"""


@app.route('/book/filter')
def filter_books():
    author = request.args.get('author')
    isbn = request.args.get('isbn')
    year = request.args.get('year')
    language = request.args.get('language')
    category = request.args.get('category')
    num_pages = int(str(request.args.get('page')))
    title = request.args.get('title')
    filtered_book_list = book_service.filter_books(author, isbn, year, language, category, title)
    number_of_pages = book_service.get_number_of_pages(filtered_book_list, 20)
    filtered_book_list = [{"pages": number_of_pages}] + filtered_book_list[20*(num_pages-1): 20*num_pages]
    return json.dumps(filtered_book_list)


if __name__ == "__main__":
    app.run(debug=True)
