from mongoengine import Document, fields
import jwt
import uuid
import datetime

from .index import Index
from .. import app


class User(Document):
    user_id = fields.UUIDField(
        binary=False, required=True, primary_key=True, default=lambda: str(uuid.uuid4()))
    name = fields.StringField(min_length=1, required=True)
    email = fields.EmailField(required=True, unique=True)
    password = fields.StringField(min_length=1, required=True)
    indices = fields.ListField(fields.ReferenceField(Index))
    selected_index = fields.ReferenceField(Index)

    def get_token(self):
        user_payload = {
            'user_id': str(self.user_id),
            'name': self.name,
            'email': self.email,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=15)
        }
        token = jwt.encode(user_payload, app.config['SECRET_KEY'])
        return token

    def to_dict(self):
        return {
            'user_id': str(self.user_id),
            'name': self.name,
            'email': self.email,
            'selected_index': self.select_index.to_dict() if self.selected_index is not None else ''
        }

    def add_index(self, index_to_add):
        self.indices.append(index_to_add)
        self.save()

    def select_index(self, index_id):
        try:
            index_to_select = Index.objects.get(id=index_id)
            if index_to_select in self.indices:
                self.selected_index = index_to_select
                self.save()
                return {'error': None}
            else:
                return {'error': 'Index does not belong to the user'}
        except Index.DoesNotExist:
            return {'error': 'does not exists'}
