# Start with imsearch image
FROM rmehta3/imsearch

# Document who is responsible for this image
LABEL maintainer="riken.mehta03@gmail.com"

WORKDIR /search-app

# Download index data
RUN wget -nv https://www.dropbox.com/s/v8mz6xcj30cuu9a/search_engine_index.tar.gz?dl=1 -O search_engine_index.tar.gz

# Install requirements
ADD requirements.txt /search-app
RUN pip install -r requirements.txt

# Add code
ADD . /search-app

CMD [ "python", "server.py" ]
