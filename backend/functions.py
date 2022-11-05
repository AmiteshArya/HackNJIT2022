import os, io
from google.cloud import vision

#INPUT file path of image
#OUTPUT tags associated with image 
def getTags(file_path): 
    #sets local enviroment variables 
    #sets authentication for google web services
    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "auth.json"

    #creates vision object which is responsible for image processing 
    client = vision.ImageAnnotatorClient()

    with io.open(file_path, "rb") as file:
        content = file.read()

    image = vision.Image(content=content)

    #performs label detection using google vision 
    response = client.label_detection(image=image)
    labels = response.label_annotations

    #creates dictionary of labels associated with image 
    labelList = {}
    for label in labels:
        labelList[label.description] = 1
    return labelList


#INPUT file path folder of images
#OUTPUT populated categories dictionary --> key:value --> category:array of file paths of images
def sort(file_folder_path):
    #Temporary selection of categories 
    categories = {"Fire": [], "People": [], "Midnight": [], "Plant": [], "Food": []}

    for simple_file_path in os.listdir(file_folder_path):
        file_path = os.path.join("images", simple_file_path)
        tags = getTags(file_path)

        for category in categories: 
            if tags.get(category, 0) != 0: #if category matches with one of the tags on the image
                categories[category].append(simple_file_path) 
    
    return categories 
