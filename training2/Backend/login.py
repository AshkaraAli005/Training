from flask import Blueprint,request,jsonify
from werkzeug.security import check_password_hash
from models import USER,user_schema
from flask_jwt_extended import create_refresh_token,create_access_token,get_jwt_identity,jwt_required


login=Blueprint("login",__name__)

@login.post("/login")
def user_login():
    email = request.json['email']
    password = request.json['password']
   
    user = USER.query.filter_by(email=email).first()
    
    if user:
        is_correct_pwd=check_password_hash(user.password,password)
        print(is_correct_pwd)
        if is_correct_pwd:
            refresh=create_refresh_token(identity=user.username)
            access=create_access_token(identity=user.username)

            return {
                'user':{
                    'refresh':refresh,
                    'access':access, 
                    'username':user.username,
                    'id':user.id,
                    'email':user.email,
                    'role':user.role,
                    'password':user.password
                }
            }
        return{'message':'Invalid password'}
    else:
        return{'message':'User not found'}


@login.get("/token")
@jwt_required()

def token():
    user_id=get_jwt_identity()
    user=USER.query.filter_by(username=user_id).first()
    
    return {
        "username":user.username,
        "email":user.email
    }

@login.get("/token/refresh")
@ jwt_required(refresh=True)

def refresh_token():
    identity=get_jwt_identity()
    access=create_access_token(identity=identity)

    return {
        "access":access
    }