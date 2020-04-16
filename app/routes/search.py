from flask import request
from flask_restx import Namespace, Resource, fields, reqparse
from ..auth import token_required

from ..controller import get_controller

route = Namespace('search', description='Search api')
parser = reqparse.RequestParser()
parser.add_argument('q', type=str, required=True,
                    help='query string to perform search')


@route.route('')
class Search(Resource):
    @token_required
    def get(self, current_user):
        args = parser.parse_args()
        data = get_controller().search(args['q'])
        return {'ok': True, 'data': data}
