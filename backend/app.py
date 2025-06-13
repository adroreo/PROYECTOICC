from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Simulación solar tracker
@app.route('/api/solar', methods=['GET'])
def solar_data():
    return jsonify({
        "timestamp": "2025-06-11 23:00",
        "ldrs": [342, 333, 344, 339],
        "servoX": 45,
        "servoY": 70,
        "intensidad": 339,
        "estado": "centrado"
    })

# Simulación mouse rescate
@app.route('/api/rescue', methods=['GET'])
def rescue_data():
    return jsonify({
        "timestamp": "2025-06-11 23:01",
        "temperatura": 37.8,
        "distancia": 30,
        "persona_detectada": True,
        "ubicacion": {"x": 4, "y": 2},
        "estado": "Rescatando"
    })

# API actual por compatibilidad
@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify([
        {"timestamp": "2025-06-11 12:00", "temperature": 24.5}
    ])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
