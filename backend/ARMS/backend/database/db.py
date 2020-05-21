import pymongo
from pymongo import MongoClient

db_connection = r"mongodb://arms:armsteam@cluster0-shard-00-00-su88w.mongodb.net:27017,cluster0-shard-00-01-su88w.mongodb.net:27017,cluster0-shard-00-02-su88w.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
cluster = MongoClient(db_connection)
db = cluster["arms"]
collection = db["book collection"]
resource_path = r"D:\Facultate\ARMS\serialized_data\books.json"


def get_json_resource(path):
    import json
    with open(path) as f:
        books_json = json.load(f)
        return books_json


def seed_database(collection, resource):
    start_index = 0
    for item in resource:
        item["_id"] = start_index
        collection.insert_one(item)
        start_index += 1


# books_json = get_json_resource(resource_path)
# seed_database(collection, books_json)

