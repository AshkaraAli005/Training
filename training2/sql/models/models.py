from extensions import db


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    price = db.Column(db.Integer)
    qty = db.Column(db.Integer)
    description = db.Column(db.String(100))
    visit = db.Column(db.Integer, default=0)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))

    def __init__(self,name,price,qty,description,user_id):
        self.name = name
        self.price = price
        self.qty = qty
        self.description = description
        self.user_id = user_id


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True) 
    username = db.Column(db.String(50), unique = True)
    password = db.Column(db.String(15))
    email = db.Column(db.String(50), unique = True)
    product = db.relationship('Product', backref='user')
    

    def __init__(self, username, password,email):
        self.username = username
        self.password = password
        self.email = email
