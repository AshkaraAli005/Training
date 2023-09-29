
from flask import Blueprint
from models.models import Product,User
from extensions import db
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.schema import product_schema


delete_method = Blueprint('delete_method', __name__)

@delete_method.delete('/delete/<id>')
@jwt_required()
def delete_product(id):
    user_id = get_jwt_identity()
    if User.query.filter_by().first() is not None:
        product = Product.query.filter_by(user_id=user_id,id=id).first()
    # product = Product.query.get(id)

    db.session.delete(product)
    db.session.commit()

    return product_schema.dump(product)