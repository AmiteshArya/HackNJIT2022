from flask import Flask, request, flash
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
    if request.method == "POST":
        if "file" not in request.files:
            flash("No file found") 
        if file_folder: #from werkzeug.utils import secure_filename --> to prevent .php and html uploads --> hassle in dependecies
            for file in file_folder:
                file_path = file.filename
                if file_path.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS:
                    file.save(os.path.join(api.config[UPLOAD_FOLDER], file_path))
            

