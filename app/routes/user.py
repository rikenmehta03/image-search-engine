from flask import request
from flask_restx import Namespace, Resource, fields, reqparse
from ..auth import token_required

route = Namespace('user', description='User api')


@route.route('')
class UserRoute(Resource):

    @token_required
    def get(self, current_user):
        return current_user.to_dict()