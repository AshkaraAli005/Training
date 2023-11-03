from flask import Flask,request
from flask_cors import cross_origin, CORS
from models import USER


app = Flask(__name__)


CORS(app)

@app.get("/cors")
@cross_origin()
def cors():
    return {'name':'cors function'}



message=""
print(message)
@app.route("/post/messages" ,methods=['post'] )
def post_message():
    global message
    message = request.json['msg']


@app.route("/get/messages")
def get_messgae():
    return message

app.run(debug=True,host="0.0.0.0", port='5050')