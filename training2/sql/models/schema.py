from extensions import ma

class ProductSchema(ma.Schema):
    class Meta:
        fields = ("id", "name", "price", "qty", "description","visit","user_id")


class UserSchema(ma.Schema):
    class Meta:
        fields = ("id", "username", "password", "email")


product_schema = ProductSchema()
products_schema = ProductSchema(many=True)
user_schema = UserSchema()