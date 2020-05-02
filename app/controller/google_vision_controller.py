import io
import base64
from google.protobuf.pyext._message import RepeatedCompositeContainer
from google.cloud.vision import types
from google.cloud import vision


class GoogleVisionController():
    def __init__(self):
        self.client = vision.ImageAnnotatorClient()

    def _get_dict(self, obj):
        response = {}
        for key in dir(obj):
            if key[0].islower():
                data = obj.__getattribute__(key)
                if isinstance(data, RepeatedCompositeContainer):
                    response[key] = [self._get_dict(item) for item in data]
                elif isinstance(data, str):
                    response[key] = data
        return response

    def search(self, image_path):
        if image_path.startswith('data:image/'):
            image_path = image_path.split(',')[1]
            data = base64.urlsafe_b64decode(image_path)
            image = types.Image(content=data)
        elif image_path.startswith('http') or image_path.startswith('gs:'):
            image = types.Image()
            image.source.image_uri = image_path

        web_detection = self.client.web_detection(image=image).web_detection
        return self._get_dict(web_detection)
