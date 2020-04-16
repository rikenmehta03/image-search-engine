import imsearch

def get_controller(index_name='search_engine'):
    if index_name not in CONTROLLER_MAP:
        CONTROLLER_MAP[index_name] = SearchController(index_name)
    
    return CONTROLLER_MAP[index_name]

class SearchController():
    def __init__(self, index_name='search_engine'):
        self.index = imsearch.init(index_name)
        self.index.createIndex()

    def search(self, url):
        return self.index.knnQuery(url, k=10, policy='object')

CONTROLLER_MAP = {
    'search_engine': SearchController('search_engine')
}