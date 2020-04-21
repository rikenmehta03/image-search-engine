import os
import imsearch

MONGO_SERVICE_HOST = os.environ.get('MONGO_SERVICE_HOST', 'localhost')
MONGO_SERVICE_PORT = os.environ.get('MONGO_SERVICE_PORT', '27017')
REDIS_SERVICE_HOST = os.environ.get('REDIS_SERVICE_HOST', 'localhost')
REDIS_SERVICE_PORT = os.environ.get('REDIS_SERVICE_PORT', '6379')
config = {
    'MONGO_URI': "mongodb://{}:{}/".format(MONGO_SERVICE_HOST, MONGO_SERVICE_PORT),
    'REDIS_URI': "redis://{}:{}/0".format(REDIS_SERVICE_HOST, REDIS_SERVICE_PORT)
}

if os.path.exists('/search-app/search_engine_index.tar.gz'):
    index = imsearch.init_from_file(file_path='/search-app/search_engine_index.tar.gz', name='search_engine', **config)

def get_controller(index_name='search_engine'):
    if index_name not in CONTROLLER_MAP:
        CONTROLLER_MAP[index_name] = SearchController(index_name)

    return CONTROLLER_MAP[index_name]


class SearchController():
    def __init__(self, index_name='search_engine'):
        self.index = imsearch.init(index_name, **config)
        self.index.createIndex()

    def search(self, url):
        return self.index.knnQuery(url, k=10, policy='object')


CONTROLLER_MAP = {
    'search_engine': SearchController('search_engine')
}
