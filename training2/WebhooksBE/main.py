from flask import Flask, request, jsonify
from flask_socketio import SocketIO, send

app = Flask(__name__)
socketio = SocketIO(app)

# Maintain a list of connected clients (React.js frontend)
clients = set()

@app.route('/webhook', methods=['POST'])
def teams_webhook():
    data = request.get_json()
    
    # Process the incoming webhook data from Zapier
    message = data.get("message")
    
    # Send the chat notification to all connected clients (React.js frontend)
    socketio.send(message, json=True)
    
    return jsonify({"message": "Webhook received"})

@socketio.on('connect')
def handle_connect():
    clients.add(request.sid)
    print(f'Client connected: {request.sid}')

@socketio.on('disconnect')
def handle_disconnect():
    clients.remove(request.sid)
    print(f'Client disconnected: {request.sid}')

if __name__ == '__main__':
    socketio.run(app, debug=True, port=6000)
