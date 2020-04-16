from mongoengine import Document, fields

from .index import Index


class Image(Document):
    id = fields.UUIDField(
        binary=False, required=True, primary_key=True, default=lambda: str(uuid.uuid4()))
    url = fields.URLField(required=True)
    index = fields.ReferenceField(Index, required=True)
    indexed = fields.BooleanField(required=True, default=False)