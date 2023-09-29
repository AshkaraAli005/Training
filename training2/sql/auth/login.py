from flask import Blueprint, request
from werkzeug.security import  check_password_hash
from models.models import User
from flask_jwt_extended import jwt_required, create_access_token
from flask_jwt_extended import create_refresh_token, get_jwt_identity, get_jwt



login = Blueprint("login", __name__, url_prefix="/user")

@login.route("/login", methods=['POST'])
def user_login():
    username = request.json['username']
    password = request.json['password']
    # user_role = request.json['role']

    user = User.query.filter_by(username=username).first()


    if user:
        is_correct_pwd = check_password_hash(user.password, password)
        # print (is_correct_pwd)

        if is_correct_pwd:
            refresh = create_refresh_token(identity=user.id)#, additional_claims={'role':user_role})
            access = create_access_token(identity=user.id)#, additional_claims={'role':user_role})

            return {
                'user':{
                    'refresh':refresh,
                    'access':access,
                    # 'username':user.username,
                    # 'id':user.id
                }
            }

        return {'message':'wrong credentials'}
    

@login.get("/me")
@jwt_required()
def me_user():
    user_id = get_jwt_identity()
    user_claims = get_jwt()
    # print(user_claims)
    # user_role = user_claims['role']
    # if user_role != 'admin':
    #     return {
    #         "msg":"you are not admin",
    #         "your_role":user_role
    #     }
    user = User.query.filter_by(id=user_id).first()

    return {
        "username":user.username,
        "email":user.email
    }

@login.get("/refresh")
@jwt_required(refresh=True)
def refresh_token():
    user_id = get_jwt_identity()
    user_payload = get_jwt()
    # print(user_payload)
    access = create_access_token(identity=user_id)

    return {
        "identity": user_id,
        "new access": access
    }
