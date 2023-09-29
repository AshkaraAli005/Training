from flask import Blueprint, request
from models.models import Product
from flask_jwt_extended import get_jwt_identity, jwt_required
from extensions import db
from models.schema import product_schema

post_method = Blueprint('post_method', __name__)


@post_method.post('/add')
@jwt_required()
def add_product():
    user_id = get_jwt_identity()
    name = request.json['name']
    price = request.json['price']
    qty = request.json['qty']
    description = request.json['description']

    new_product = Product(name=name, price=price, qty=qty, 
                          description=description, user_id=user_id)

    db.session.add(new_product)
    db.session.commit()

    # res = product_schema.dump(new_product)

    return product_schema.dump(new_product)

