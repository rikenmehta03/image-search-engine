from flask import request
from flask_restx import Namespace, Resource, fields, reqparse

from ..controller import SearchController

route = Namespace('search', description='Search api')
parser = reqparse.RequestParser()
parser.add_argument('q', type=str, required=False,
                    help='query string to perform search')


@route.route('')
class Search(Resource):
    _s = SearchController()

    def get(self):
        args = parser.parse_args()
        data = self._s.search(args['q'])
        return {'ok': True, 'data': data}
