from flask import Flask, render_template, redirect, Response, jsonify
from flask_pymongo import PyMongo
import json


# Create an instance of Flask
app = Flask(__name__, static_url_path='', static_folder='static')
app.config["MONGO_URI"] = "mongodb://localhost:27017/crime_db"
mongo = PyMongo(app)
crime = mongo.db.crime
crime.drop()
with open('file1.json') as f:
    data = json.load(f)
    for row in data:
        crime.insert_one(row)
       