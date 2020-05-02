import werkzeug
from flask import request
from flask_restx import Namespace, Resource, fields, reqparse
from ..auth import token_required

from ..controller import GoogleVisionController

route = Namespace('gvision', description='google vision search api')

query_parser = reqparse.RequestParser()
query_parser.add_argument('q', type=str, required=True,
                          help='query string to perform google vision search', location=['json', 'args'])


@route.route('')
@route.expect(query_parser, validate=True)
class Search(Resource):
    def __init__(self, qp):
        self.client = GoogleVisionController()

    @token_required
    def get(self, current_user):
        args = query_parser.parse_args()
        data = self.client.search(args['q'])
        return {'ok': True, 'data': data}

    @token_required
    def post(self, current_user):
        args = query_parser.parse_args()
        data = self.client.search(args['q'])
        return {'ok': True, 'data': data}
