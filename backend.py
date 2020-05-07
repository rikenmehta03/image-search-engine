import os
import imsearch

REDIS_SERVICE_HOST = os.environ.get('REDIS_SERVICE_HOST', 'localhost')
REDIS_SERVICE_PORT = os.environ.get('REDIS_SERVICE_PORT', '6379')
REDIS_URI = "redis://{}:{}/0".format(REDIS_SERVICE_HOST, REDIS_SERVICE_PORT)

p = imsearch.backend.run(REDIS_URI)
p.communicate()