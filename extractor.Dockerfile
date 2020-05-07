# Start with imsearch image
FROM rmehta3/imsearch

# Document who is responsible for this image
LABEL maintainer="riken.mehta03@gmail.com"

WORKDIR /search-extractor

ADD backend.py /search-extractor

CMD [ "python", "backend.py" ]