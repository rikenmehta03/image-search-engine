from flask import request
from flask_restx import Namespace, Resource, fields, reqparse
from ..auth import token_required
from ..models import Index

route = Namespace('index', description='Index api')
parser = reqparse.RequestParser()
parser.add_argument('index_name', type=str, required=False,
                    help='name of index to create')


@route.route('')
class IndexRoute(Resource):

    @token_required
    def get(self, current_user):
        data = [index.to_dict() for index in current_user.indices]
        return {'ok': True, 'data': data}

    @token_required
    def post(self, current_user):
        args = parser.parse_args()
        name = args['index_name']
        index = Index(name=name)
        index.save()
        return {'ok': True, 'data': index.to_dict()}
