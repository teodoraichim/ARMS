import pickle
import requests
import re
from bs4 import BeautifulSoup
import json


def get_title_of_books(link):
    title_array = []
    response = requests.get(link).content.decode("UTF-8")
    soup = BeautifulSoup(response, 'html.parser')
    elements = soup.find_all("h2", {"class": "entry-title"})

    for element in elements:
        reg = re.compile("<h2.*><a.*>(.*)</a></h2>")
        match = reg.match(str(element))
        title = re.sub(",|;", " ", match.group(1))
        title = title.replace(".", " ")
        title = re.sub("\s+", " ", title)
        title = title.replace(" ", "-")
        title = title.lower()
        title_array.append(title)
    return title_array


def serialize_books(url, path):
    book_list = []
    for i in range(1, 853):
        new_url = url + str(i)
        page_titles = get_title_of_books(new_url)
        book_list += page_titles
        print(book_list)
        print("Finished page " + str(i))
    with open(path, 'wb') as f:
        pickle.dump(book_list, f)


def get_books_info(books, base_url):
    out_books = []
    for book in books:
        try:
            out_book = {}
            book_features = ["Author", "ISBN-10", "Year", "Pages", "Language", "File size", "File format", "Category"]
            book_features_counter = 0
            url = base_url + book
            response = requests.get(url).content.decode("UTF-8")
            soup = BeautifulSoup(response, 'html.parser')

            book_name_tag = str(soup.find_all("h1", {"class": "single-title"})[0])
            book_name_pattern = "(<h1.*>)(.*)(</h1>)"
            book_name = re.search(book_name_pattern, book_name_tag).group(2)
            out_book["Title"] = book_name

            details = soup.find_all("div", {"class": "book-detail"})
            regex = re.compile(".*<dd>(.*)</dd>")
            matches = regex.findall(str(details[0]))
            for match in matches:
                reg = "(<a.*>)(.*)(</a>)"
                find = re.search(reg, match)
                if find is None:
                    out_book[book_features[book_features_counter]] = match
                else:
                    out_book[book_features[book_features_counter]] = find.group(2)
                book_features_counter += 1
            out_books.append(out_book)
            print("Successfully read book: " + out_book["Title"])
        except:
            print("Could not load book: " + book)
    books_json = json.dumps(out_books, indent=4)
    return books_json


# url = "http://www.allitebooks.org/page/"
# serialize_books(url,r"D:\Facultate\ARMS\serialized_data\books.txt")
#
# with open(r"D:\Facultate\ARMS\serialized_data\books.txt","rb") as file:
#     books = pickle.load(file)


with open(r"D:\Facultate\ARMS\serialized_data\books.txt", "rb") as file:
    loaded_books = pickle.load(file)
book_details_json = get_books_info(loaded_books, "http://www.allitebooks.org/")
print(book_details_json)
open(r"D:\Facultate\ARMS\serialized_data\books.json", "w").write(book_details_json)
