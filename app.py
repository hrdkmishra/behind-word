import os
from flask import Flask, url_for, render_template
from flask_debugtoolbar import DebugToolbarExtension
from markupsafe import escape

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(24)
toolbar = DebugToolbarExtension(app)


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
