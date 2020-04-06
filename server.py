import os
from flask import jsonify, request, make_response, send_from_directory

from app import app

ROOT_PATH = os.path.dirname(os.path.realpath(__file__))
PUBLIC_PATH = os.path.join(ROOT_PATH, 'build')
VERSION = os.getenv('VERSION', 'v0.1.0')

app.static_folder = os.path.join(PUBLIC_PATH, 'static')


@app.errorhandler(404)
def not_found(error):
    """ error handler """
    return make_response(jsonify({'error': 'Not found'}), 404)


@app.route('/<path:filename>')
@app.route('/')
def index(filename='index.html'):
    return send_from_directory(PUBLIC_PATH, filename)


@app.route('/ping', methods=['GET'])
def ping_server():
    """ Testing endpoint """
    return jsonify({'ok': True, 'message': 'bdad test server version {} up and running'.format(VERSION)}), 200


def run_server():
    port = int(os.environ.get('PORT', "8080"))
    app.run(host='0.0.0.0', port=port, debug=True, use_reloader=False)


if __name__ == "__main__":
    run_server()
