import os
import sys
from flask_restx import Api
from flask import Blueprint
import importlib

blueprint = Blueprint('api', __name__)

api = Api(blueprint,
          title='image-search-engine backend api',
          version='0.1.0',
          description='backend routes for image-search-engine webapp'
          )


def add_namespace():
    routes_path = os.path.join(os.path.dirname(__file__), '.')
    files = ['app.routes.{}'.format(
        x[:-3]) for x in os.listdir(routes_path) if not x.startswith('__')]
    for file in files:
        module = importlib.import_module(file)
        if hasattr(module, 'prefix'):
            prefix = module.prefix
        else:
            prefix = module.__name__.split('.')[-1]

        api.add_namespace(module.route, path='{}'.format(prefix.strip('/')))


add_namespace()
