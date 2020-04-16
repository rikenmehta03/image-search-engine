import jwt
from flask import Blueprint, request, jsonify, make_response
from werkzeug.security import generate_password_hash, check_password_hash
from functools import wraps
from .models import User

from . import app

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or 'email' not in data or 'password' not in data:
        return make_response('could not verify', 401, {'WWW.Authentication': 'Basic realm: "login required"'})

    try:
        user = User.objects.get(email=data['email'])
    except User.DoesNotExist:
        return make_response('could not verify', 401, {'WWW.Authentication': 'Basic realm: "login required"'})

    if check_password_hash(user.password, data['password']):
        token = user.get_token()
        return jsonify({'token': token.decode('UTF-8')})

    return make_response('could not verify', 401, {'WWW.Authentication': 'Basic realm: "login required"'})


@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if not data or 'email' not in data or 'password' not in data or 'name' not in data:
        return make_response('Bad request parameters', 400)

    try:
        user = User.objects.get(email=data['email'])
    except User.DoesNotExist:
        hashed_password = generate_password_hash(
            data['password'], method='sha256')
        user = User(name=data['name'], email=data['email'],
                    password=hashed_password)
        user.save()

    token = user.get_token()

    return jsonify({'token': token.decode('UTF-8')})


def token_required(f):

    @wraps(f)
    def decorator(*args, **kwargs):
        token = None

        if 'x-access-tokens' in request.headers:
            token = request.headers['x-access-tokens']

        if not token:
            return make_response(jsonify({'message': 'a valid token is missing', 'error': 'unauthorized'}), 401)

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            current_user = User.objects.get(email=data['email'])
        except:
            return make_response(jsonify({'message': 'token is invalid', 'error': 'unauthorized'}), 401)

        return f(*args, **kwargs, current_user=current_user)

    return decorator
