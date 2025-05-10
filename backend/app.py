from flask_cors import CORS
...
app = Flask(__name__)
CORS(app)
from flask import Flask, jsonify, request

app = Flask(__name__)

# TEST route
@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify(message="Hello from The Real Privilege backend 👑")

# SIGNUP route
@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    return jsonify({
        'message': f'User {email} signed up successfully 👑'
    }), 201

# LOGIN route
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if email and password:
        return jsonify({
            'message': f'User {email} logged in successfully 🔐'
        }), 200
    else:
        return jsonify({
            'error': 'Invalid credentials'
        }), 401

# TASK ASSIGNMENT route
@app.route('/api/tasks/assign', methods=['POST'])
def assign_task():
    data = request.get_json()
    user_id = data.get('user_id')
    task_type = data.get('task_type', 'written')

    return jsonify({
        'message': f'New {task_type} task assigned to user {user_id}.',
        'task_id': 'mock-task-123'
    }), 201

if __name__ == '__main__':
    print("Flask app is starting up...")  # Optional debug print
    app.run(debug=True)
