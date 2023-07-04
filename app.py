from flask import Flask, render_template, redirect, url_for, request,send_from_directory
import os
#import calccode as CalcCode
#import numpy as np


app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
  return render_template('home.html')

@app.route('/construction')
def construction():
  return render_template('construction.html')


if __name__ == '__main__':
  app.run(host='127.0.0.1', port=5000, debug=True)
#app.run(host='0.0.0.0', port=8080)