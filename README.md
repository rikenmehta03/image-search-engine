# image-search-engine

This project uses react-flask stack for front-end and backend respectively. It also assumes that you have [redis](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-18-04) and [mongodb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) installed. 

## Environment setup and install dependencies
```
./install.sh
```

For react, you will need to install [yarn](https://linuxize.com/post/how-to-install-yarn-on-ubuntu-18-04/). 
After installing, run these commands to do the initial setup for react.
```
yarn
yarn build
```

## Run the flask server
```
pyhton server.py
```