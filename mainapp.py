from flask import Flask, app, redirect, session, request, jsonify, Response, url_for, abort, Blueprint,render_template
from flask_sqlalchemy import SQLAlchemy
import os,sys
import requests
from datetime import datetime

from model import Mysql
import src,model


#主程式初始化
app = Flask(__name__,static_url_path ='/static/')

# 呼叫 Mysql() 函式以獲取 db 變數
# db = Mysql()
# cursor = db.cursor()

#初始化功能模組
tools_CommonTools = src.CommonTools.CommonTools(request)


############################## page ##############################
# index by shiyan
@app.route("/")
def Index():
    return render_template('index.html')


# dashboard by shiyan
@app.route("/dashboard")
def Dashboard():
    
    return render_template('dashboard.html')


# massage chair analyze
@app.route("/massagechair")
def MassageChair():
    
    return render_template('massageChair.html')


# 接觸點
@app.route("/touch",methods=['GET'])
def Touch():
    touch = request.args.get('touch')
    
    return render_template('touch.html', strTouch=touch)
############################## page ##############################


# * ajax return format => oRes = {'res':'success or fail', 'data':[], 'msg':'error only'}
# * ajax return example => return jsonify(**oRes)
############################## ajax ##############################
# ajax example by shiyan
@app.route("/testajax",methods=['GET','POST'])
def TestAjax():
    if request.method == 'GET':
        CurrentData = request.args.getlist('test')
    
    if request.method == 'POST':
        CurrentData = request.form.getlist('test')
    print(CurrentData)
    return jsonify(**{'data':CurrentData})
############################## ajax ##############################


if __name__ == '__main__':
    app.run('0.0.0.0',port=8083,debug=True)


# 程式結束時釋放資料庫資源
cursor.close()
db.close()  # 關閉連線


