from mongoengine import Document, fields


class Index(Document):
    id = fields.UUIDField(
        binary=False, required=True, primary_key=True, default=lambda: str(uuid.uuid4()))
    name = fields.StringField(required=True)
    count = fields.IntField(required=True, default=0)

    @property
    def index_name(self):
        return '{}_{}'.format(self.name, str(self.id)[:8])

    def update_count(self, x=1):
        self.update(set__count=self.count+x)
    
    def to_dict(self):
        return {
            'name': self.name,
            'index_name': self.index_name,
            'count': self.count
        }
