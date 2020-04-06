# Start with a ubuntu container
FROM ubuntu:18.04

# Document who is responsible for this image
LABEL maintainer="riken.mehta03@gmail.com"

# Install pip wget & zip
RUN apt-get update -y && \
  apt-get install -y libsm6 libxext6 libxrender-dev && \
  apt-get install python3-dev python3-pip wget zip -y && \
  pip3 install --upgrade pip && \
  cd /usr/bin && \
  ln -s python3 python && \
  ln -s pip3 pip && \
  cd /

RUN pip install Cython && \
    pip install --no-binary :all: nmslib

WORKDIR /search-app
ADD . /search-app
RUN pip install -r requirements.txt

CMD [ "python", "server.py" ]
