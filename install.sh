#!/usr/bin/env bash

sudo apt update
sudo apt -y upgrade
sudo apt install -y python3-pip
sudo apt install build-essential libssl-dev libffi-dev python3-dev
sudo apt install -y python3-venv
cd ..
python3 -m venv imsearch-env
source imsearch-env/bin/activate
cd image-search-engine

pip install Cython
pip install --no-binary :all: nmslib
pip install -r requirements.txt

wget -nv https://www.dropbox.com/s/v8mz6xcj30cuu9a/search_engine_index.tar.gz?dl=1 -O search_engine_index.tar.gz
python -c "import imsearch; imsearch.init_from_file(file_path='search_engine_index.tar.gz', name='search_engine')"
rm search_engine_index.tar.gz