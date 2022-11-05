from flask import Flask, request
import os 
from functions import getTags, sort


api = Flask(__name__)

@api.route('/sort')
def sort_images():

    response_body = sort("./images")

    return response_body


@api.route("/upload", ["GET", "POST"])
def upload_images():
    #INPUT folder of images 
    #OUTPUT saves the images into images folder 
    file_folder = request.files['file']
    ALLOWED_EXTENSIONS = {'pdf', 'png', 'jpg', 'jpeg'}
    UPLOAD_FOLDER = "./images"

    for file in file_folder:
        if file.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS:
            file.save(os.path.join(api.config['UPLOAD_FOLDER'], filename))


