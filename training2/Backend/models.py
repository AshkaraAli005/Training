
from extensions import db,ma




# class Product(db.Model):
#     # __tablename__ = 'project'
#     id=db.Column(db.Integer ,primary_key = True)
#     name=db.Column(db.String(100),unique = True)
#     price=db.Column(db.Integer)
#     qty=db.Column(db.Integer)
#     des=db.Column(db.String(200))

#     def __init__(self,name,price,qty,des):
#         self.name = name
#         self.price = price
#         self.qty = qty
#         self.des = des

# class ProductSchema(ma.Schema):
#     class Meta:
#         fields = ("id" , "name" , "price" , "qty" , "des")

# # initialize schema
# product_schema = ProductSchema()
# products_schema = ProductSchema(many = True )

class USER(db.Model):
    # __tablename__ = 'project'
    id=db.Column(db.Integer ,primary_key = True)
    username=db.Column(db.String(100),unique = True)
    email=db.Column(db.String(100),unique=True)
    role=db.Column(db.String(10))
    password=db.Column(db.String(8))
    
    def __init__(self,username,email,password,role):
        self.username = username
        self.email = email
        self.password = password
        self.role=role
        

# user schema
class UserSchema(ma.Schema):
    class Meta:
        fields = ("id" , "username" , "email" , "password","role" )

# initialize schema
user_schema = UserSchema()
users_schema = UserSchema(many = True )