from flask import Blueprint,request,jsonify
from werkzeug.security import check_password_hash,generate_password_hash
from models import USER,db
import validators

auth = Blueprint("auth",__name__)

@auth.route("/register",methods=["post"])

def register():
    username=request.json['username']
    email=request.json['email']
    password=request.json['password']
    role=request.json['role']
    if len(username)<5:
        return jsonify({"error":"username must be have above 6 character"})
    
    if len(password)<8:
        return jsonify({"error":"passwor must be in 8 character"})
    
    if not username.isalnum() or " " in username:
        return jsonify({"error":"should be in alpha numeric without space"})
    
    if not validators.email(email):
        return jsonify({"error":"email is invalid"})
    
    if USER.query.filter_by(email=email).first() is not None:
        return jsonify({"error":"email is taken"})
    
    if USER.query.filter_by(username=username).first() is not None:
        return jsonify({"error":"username is taken"})
    
    pwd_hash=generate_password_hash(password)
       
    user=USER(username=username , password=pwd_hash , email=email, role=role)

    db.session.add(user)
    db.session.commit()

    return jsonify({
        "message":"user created",
        "user":{
            "username":username,
            "email":email
        }

    }),201