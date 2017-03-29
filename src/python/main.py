from flask import Flask
app = Flask(__name__)

@app.route('/')
def main():
    with open('/home/dev_index.html', 'r') as html:
        return html.read()

if __name__ == '__main__':
    app.run(host= '0.0.0.0', debug=True)
