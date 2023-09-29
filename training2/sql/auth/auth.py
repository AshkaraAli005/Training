from flask import Blueprint, request
from werkzeug.security import  generate_password_hash
import validators 
from models.models import User
from extensions import db
from models.schema import user_schema


auth = Blueprint("auth", __name__, url_prefix="/user")


@auth.route('/register', methods=["POST"])
def user_register():

    username = request.json['username']
    password = request.json['password']
    email = request.json['email']

    if len(password) < 6:
        return {'message' : "password is too short"}
    
    if len(username) < 3:
        return {'message' : "username is too short"}
    if not validators.email(email):
        return {'message' : "email is not vaild"}


    if User.query.filter_by(email=email).first() is not None:
        return {"msg":"email already exists"}
    
    if User.query.filter_by(username=username).first() is not None:
        return {"msg":"username already exists"}
    
    pwd_hash = generate_password_hash(password)

    user = User(username=username, password= pwd_hash, email=email)

    db.session.add(user)
    db.session.commit()

    

    return user_schema.dump(user)
