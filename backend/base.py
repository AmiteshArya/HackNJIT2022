from flask import Flask
from functions import getTags, sort

api = Flask(__name__)

@api.route('/sort')
def sort_images():

    response_body = sort("./images")

    return response_body