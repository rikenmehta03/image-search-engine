import imsearch

class SearchController():
    def __init__(self):
        self.index = imsearch.init('search_engine')
        self.index.createIndex()

    def search(self, url):
        return self.index.knnQuery(url, k=10, policy='object')