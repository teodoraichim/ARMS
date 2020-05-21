from backend.database import db
import json


def get_book_by_id(item):
    cursor = db.collection.find({"_id": item})
    response = [item for item in cursor]
    return json.dumps([item for item in response])


def get_book_by_category(category):
    category = category.capitalize()
    regex = '[A-Za-z]*' + category + '[A-Za-z]*'
    cursor = db.collection.find({"Category": {"$regex": regex}})
    response = [item for item in cursor]
    return json.dumps(response)


def get_book_by_isbn(isbn):
    isbn = " " + isbn
    cursor = db.collection.find({"ISBN-10": isbn})
    response = [item for item in cursor]
    return json.dumps(response)


def get_book_by_year(year):
    year = " " + year
    cursor = db.collection.find({"Year": year})
    response = [item for item in cursor]
    return json.dumps(response)
