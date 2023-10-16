from flask import Flask,request
from flask_cors import cross_origin, CORS



app = Flask(__name__)


CORS(app)

@app.get("/cors")
@cross_origin()
def cors():
    return {'name':'cors function'}



message='no message'
print(message)
@app.route("/post/messages" ,methods=['post'] )
def post_message():
    global message
    message = request.json['msg']
    print("hello")
    
    return 'send'

@app.route("/get/messages")
def get_messgae():
    return message

app.run(debug=True,host="0.0.0.0")