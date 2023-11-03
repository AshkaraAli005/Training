from flask import Flask
from flask_jwt_extended import JWTManager
from models import db
from extensions import ma

from auth import auth
from login import login
from flask_cors import cross_origin, CORS
from flask_swagger_ui import get_swaggerui_blueprint
import os

app= Flask(__name__)

basedir=os.path.abspath(os.path.dirname(__file__))
app.app_context().push()
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///' + os.path.join(basedir,'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = "HELLO"

db.init_app(app)

ma.init_app(app)
CORS(app)
JWTManager(app)




with app.app_context():
    db.create_all()


# cors
@app.get("/cors")
@cross_origin()
def cors():
    return {'name':'cors function'}

#error handling 
@app.errorhandler(404)
def error_404(error):
    return "message:{}".format(error.description)

@app.errorhandler(500)
def error_500(error):
    return "message:{}".format(error.description)

# swagger

SWAGGER_URL = '/openapi/docs' 
API_URL = '/static/swagger.json'

swaggerui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,  
    API_URL,
    config={ 
        'app_name': "Test application"
    },)



# app.register_blueprint(blue)
app.register_blueprint(auth)
app.register_blueprint(login)
app.register_blueprint(swaggerui_blueprint)

if __name__ == "__main__":
#    app.run("127.0.0.1", port=8096 ,debug=True )
   app.run(debug=True,host='0.0.0.0')  