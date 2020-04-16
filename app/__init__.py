import jwt
from flask import Flask, jsonify, session
from flask_mongoengine import MongoEngine

config = {
    'MONGODB_DB': 'search-engine',
    'SECRET_KEY': 'secret!'
}

app = Flask(__name__)
app.config.from_mapping(config)
db = MongoEngine(app)


def register_blueprint():
    from .auth import auth_bp
    from .routes import blueprint
    app.register_blueprint(blueprint, url_prefix='/api/')
    app.register_blueprint(auth_bp, url_prefix='/auth/')


register_blueprint()
