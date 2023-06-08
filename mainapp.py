from flask import Flask, app, redirect, session, request, jsonify, Response, url_for, abort, Blueprint,render_template
from flask_sqlalchemy import SQLAlchemy
import os,sys
import requests

from model import Mysql
import src,model


#主程式初始化
app = Flask(__name__,static_url_path ='/static/')

# 呼叫 Mysql() 函式以獲取 db 變數
db = Mysql()
cursor = db.cursor()

#初始化功能模組
tools_CommonTools = src.CommonTools.CommonTools()


############################## page ##############################
# 首頁
@app.route("/")
def Index():
    return render_template('index.html')


# 儀表板
@app.route("/dashboard")
def Index():
    
    return render_template('dashboard.html')
############################## page ##############################


# * ajax return format => oRes = {'res':'success or fail', 'data':[], 'msg':'error only'}
# * ajax return example => return jsonify(**oRes)
############################## ajax ##############################
# ajax example
@app.route("/testajax",methods=['GET','POST'])
def TestAjax():
    if request.method == 'GET':
        CurrentData = request.args.getlist('test')
    
    if request.method == 'POST':
        CurrentData = request.form.getlist('test')
    print(CurrentData)
    return jsonify(**{'data':CurrentData})


# todo 取得按摩椅使用資料 by shiyan
@app.route("/getmassagechairuserecord",methods=['GET','POST'])
def GetMassageChairUseRecord():
    action = GetRequestValue('action') # 1 -> 收入, 2 -> 使用者族群(會員？還是訪客...)
    lConditions = []
    lColumns = []
    print(action)

    if action[0] == '1':
        lConditions.append("")
        lColumns.append("")

    elif action[0] == '2':
        lConditions.append("")
        lColumns.append("")
    
    # todo execute sql 
    sql = 'SELECT  FROM  WHERE '
    

    return jsonify(**{})
############################## ajax ##############################

############################## function ##############################
# todo 取得前端傳回的參數,return data type -> dict, key 'data'->list(尚未測試)
def GetRequestValue(key):
    currentData = []

    # judge request method
    if request.method == 'GET':
        currentData = request.args.getlist(key)

    elif request.method == 'POST':
        currentData = request.form.getlist(key)

    if len(currentData):

        for i in range(len(currentData)):

            if not currentData[i]:
                currentData.pop(i)
                continue

            if currentData[i] == 'undefined':
                currentData[i] = None

    else:
        currentData = []

    return {'res':'success','data':currentData}
############################## function ##############################


if __name__ == '__main__':
    app.run('0.0.0.0',port=8083,debug=True)


# 程式結束時釋放資料庫資源
cursor.close()
db.close()  # 關閉連線


