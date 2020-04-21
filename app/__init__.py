import os
import jwt
from flask import Flask, jsonify, session
from flask_mongoengine import MongoEngine

config = {
    'MONGODB_DB': 'search-engine',
    'MONGODB_HOST': os.environ.get('MONGO_SERVICE_HOST', 'localhost'),
    'MONGODB_PORT': int(os.environ.get('MONGO_SERVICE_PORT', '27017')),
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
