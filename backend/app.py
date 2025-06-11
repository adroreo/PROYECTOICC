from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Para permitir llamadas desde React

# Datos simulados
mock_data = [
    {"timestamp": "2025-06-11 12:00", "temperature": 24.5},
    {"timestamp": "2025-06-11 12:05", "temperature": 25.0},
]

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify(mock_data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
