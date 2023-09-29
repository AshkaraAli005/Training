from flask import Flask
from extensions import db, ma , jwt, cors
from routes.get import get_method
from routes.post import post_method
from routes.update import put_method
from routes.delete import delete_method
from auth.auth import auth
from auth.login import login
from error_handle import error
from flask_swagger_ui import get_swaggerui_blueprint
import os



# def create_app():

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    # app.config['SECRET_KEY'] = secrets.token_urlsafe(32)
    # app.config['JWT_SECRET_KEY'] =  secrets.token_urlsafe(32)
app.config['JWT_SECRET_KEY'] =  'tharun'

SWAGGER_URL = '/api/docs'  # URL for exposing Swagger UI (without trailing '/')
API_URL = '/static/new.json'

swaggerui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,  # Swagger UI static files will be mapped to '{SWAGGER_URL}/dist/'
    API_URL,
    config={  # Swagger UI config overrides
        'app_name': "Product APP"
    })

db.init_app(app)
ma.init_app(app)
jwt.init_app(app)

cors.init_app(app)


    
    # cors.init_app(app)
app.register_blueprint(swaggerui_blueprint)

app.register_blueprint(get_method)
app.register_blueprint(post_method)
app.register_blueprint(put_method)
app.register_blueprint(delete_method)
app.register_blueprint(auth)
app.register_blueprint(login)
app.register_blueprint(error)

with app.app_context():
    db.create_all()

app.run(debug=True, host='0.0.0.0')





