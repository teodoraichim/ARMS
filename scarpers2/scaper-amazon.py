import requests
import json
from time import sleep

with open("../scarpers/SerializedData/books.json") as f:
    content = f.read()
    books = json.loads(str(content))
    totalBooks = len(books)
    uploaded = 0
    notFound = 0
    newBooks = []
    for book in books:
        #sleep(1)
        isbn = book['ISBN-10']
        book['Download'] = '' # TO BE REMOVED
        if isbn.count('-') > 0:
            isbn = isbn.split('-')[1]
        URL = f'https://www.googleapis.com/books/v1/volumes?q=isbn:{isbn}&country=US&key=here the key'
        r = requests.get(url = URL)
        
        # from proxy_requests.proxy_requests import ProxyRequests
        # r = ProxyRequests(URL)
        # r.get()

        print(r)
        data = r.json()
        oldBook = book
        if data.get('items') and len(data['items']) > 0:
            book = data['items'][0]
        else:
            book = None
        
        if book and book.get('volumeInfo'):
            dbBook = {}
            uploaded +=1          
            dbBook['Isbn'] = oldBook['ISBN-10']
            dbBook['Year'] = oldBook['Year']
            dbBook['Pages'] = oldBook['Pages']
            dbBook['Category'] = oldBook['Category']
            dbBook['Download'] = oldBook['Download']
            dbBook['Language'] = oldBook['Language']
            dbBook['Format'] = oldBook['File format']
            dbBook['Size'] = oldBook['File size']
            
            if book['volumeInfo'].get('title'):
                dbBook['Title'] = book['volumeInfo']['title']
            else:
                dbBook['Title'] = ''     
                
            if book['volumeInfo'].get('subtitle'):
                dbBook['Subtitle'] = book['volumeInfo']['subtitle']
            else:
                dbBook['Subtitle'] = ''     
                
            if book['volumeInfo'].get('authors'):
                dbBook['Authors'] = book['volumeInfo']['authors']
            else:
                dbBook['Authors'] = []    
                
            if book['volumeInfo'].get('publisher'):
                dbBook['Publisher'] = book['volumeInfo']['publisher']
            else:
                dbBook['Publisher'] = ''     
                
            if book['volumeInfo'].get('publishedDate'):
                dbBook['PublishedDate'] = book['volumeInfo']['publishedDate']
            else:
                dbBook['PublishedDate'] = ''     
                
            if book['volumeInfo'].get('description'):
                dbBook['Description'] = book['volumeInfo']['description']
            else:
                dbBook['Description'] = ''     
                
            if book['volumeInfo'].get('imageLinks') and book['volumeInfo']['imageLinks'].get('thumbnail'):
                dbBook['ImageLink'] = book['volumeInfo']['imageLinks']['thumbnail']
            else:
                dbBook['ImageLink'] = ''         
                
            if book['volumeInfo'].get('previewLink'):
                dbBook['PreviewLink'] = book['volumeInfo']['previewLink']   
            else:
                dbBook['PreviewLink'] = ''                    
            
            if book.get('searchInfo') and book['searchInfo'].get('textSnippet'):
                dbBook['ShortDescription'] = book['searchInfo']['textSnippet']
            else:
                dbBook['ShortDescription'] = ''       
            
            newBooks.append(dbBook)
        else:
            notFound += 1
        
        # if uploaded == 50:
        #     break
        
        print(f'{uploaded}/{notFound}/{totalBooks}')
            
    with open('books.json', 'w') as file:
        file.write(json.dumps(newBooks, indent=4, sort_keys=True))
