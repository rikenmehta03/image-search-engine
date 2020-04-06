from flask import Flask, jsonify, session

from .routes import blueprint

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'

app.register_blueprint(blueprint, url_prefix='/api/')
