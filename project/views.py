from flask import render_template, abort
from jinja2 import TemplateNotFound
from project import app

@app.route('/')
def index():
    try:
        return render_template('index.html')
    except TemplateNotFound:
        abort(404)