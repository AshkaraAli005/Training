from flask import Blueprint, request
from models.models import Product, User
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_cors import cross_origin
from models.schema import products_schema, product_schema


get_method = Blueprint("get_method", __name__)

@get_method.route("/getall",methods=['GET'])
@jwt_required()
def get_all_products():
    user_id = get_jwt_identity()

    if User.query.filter_by(id=user_id).first() is not None:

        page = request.args.get("page",default=1,type=int)
        per_page = request.args.get("per_page",default=1,type=int)

        all_products = Product.query.filter_by(user_id=user_id).paginate(page=page,per_page=per_page,error_out=False)
        print(type(all_products))
        results = products_schema.dump(all_products)

        meta = {
            "total_product": all_products.total,
            "current_page":all_products.page,
            "num_of_pages":all_products.pages,
            "prev_page":all_products.prev_num,
            "next_page":all_products.next_num,
            "has_next":all_products.has_next,
            "has_prev":all_products.has_prev
        }

        return {"data":results,"meta":meta}
    else:
        return {"msg":"You have no products"}


@get_method.route("/get/<id>",methods=['GET'])
@jwt_required()
def get_product(id):
    user_id = get_jwt_identity()
    if User.query.filter_by().first() is not None:
        product = Product.query.filter_by(user_id=user_id,id=id).first()
        result = product_schema.dump(product)
        return result
    return {"msg":"You have no access"}

# @get_method.route("/name",methods=['GET'])
# def qurery_para():
#     name = request.args.get('name')
#     return f'hello {name}'

@get_method.route("/cors",methods=['GET'])
@cross_origin()
def cors_excerise():

    return {
        "data":"This is from flask"
    }