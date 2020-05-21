from flask import Flask
from flask_cors import CORS
from backend.service import book_service

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


if __name__ == "__main__":
    app.run(debug=True)
