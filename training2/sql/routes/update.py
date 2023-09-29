from flask import Blueprint, request
from models.models import Product, User
from flask_jwt_extended import get_jwt_identity, jwt_required
from extensions import db
from models.schema import product_schema


put_method = Blueprint("put_method", __name__)


@put_method.route('/update/<id>',methods=['PUT','PATCH'])
@jwt_required()
def update_product(id):
    user_id = get_jwt_identity()
    if User.query.filter_by().first() is not None:
        product = Product.query.filter_by(user_id=user_id,id=id).first()

    data = request.json

    if 'name' in data:
        product.name = data['name']
    if 'price' in data:
        product.price = data['price']
    if 'qty' in data:
        product.qty = data['qty']
    if 'description' in data:
        product.description = data['description']

    db.session.commit()

    return product_schema.dump(product)

