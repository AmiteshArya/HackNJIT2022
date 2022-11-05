from flask import Flask
from functions import getTags, sort

api = Flask(__name__)

@api.route('/profile')
def my_profile():


    response_body = sort("./images")

    return response_body