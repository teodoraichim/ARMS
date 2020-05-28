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


def get_book_by_author(author):
    cursor = db.collection.find({"Author": author})
    response = [item for item in cursor]
    return json.dumps(response)


def get_book_by_title(title):
    cursor = db.collection.find({"Title": title})
    response = [item for item in cursor]
    return json.dumps(response)


def get_categories():
    cursor = db.collection.distinct("Category")
    response = [item for item in cursor]
    return json.dumps(response)


def filter_books(author, isbn, year, language, category, title):
    custom_filter = {}
    if author is not None:
        custom_filter["Authors"] = {"$regex": author}
    if isbn is not None:
        custom_filter["Isbn"] = {"$regex": isbn}
    if year is not None:
        custom_filter["Year"] = " " + year
    if language is not None:
        custom_filter["Language"] = language
    if category is not None:
        custom_filter["Category"] = category
    if title is not None:
        custom_filter["Title"] = {"$regex": title}
    cursor = db.collection.find(custom_filter)
    response = [item for item in cursor]
    return response


def get_number_of_pages(book_list, books_per_page):
    if len(book_list) % books_per_page == 0:
        return int(len(book_list) / books_per_page)
    return int(len(book_list) / books_per_page) + 1



