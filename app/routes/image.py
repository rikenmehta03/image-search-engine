from flask import request
from flask_restx import Namespace, Resource, fields, reqparse
from ..auth import token_required
from ..models import Image

route = Namespace('image', description='Image api')
parser = reqparse.RequestParser()
parser.add_argument('image_url', type=str, required=True,
                    help='name of index to create')


@route.route('')
class IndexRoute(Resource):

    @token_required
    def post(self, current_user):
        args = parser.parse_args()
        url = args['image_url']
        image = Image(url=url, index=current_user.selected_index)
        image.save()
        return {'ok': True}
