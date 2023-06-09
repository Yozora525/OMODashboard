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
db = Mysql()
cursor = db.cursor()

#初始化功能模組
tools_CommonTools = src.CommonTools.CommonTools(request)


############################## page ##############################
# 首頁
@app.route("/")
def Index():
    return render_template('index.html')


# 儀表板
@app.route("/dashboard")
def Dashboard():
    
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
    # place = tools_CommonTools.GetRequestValue('place') or None # 地點Id
    # month = datetime.now().month

    
    # if place['data'][0]:
    #     strGetChairUseRecord = f'SELECT public_chair.ChairId,PayMethod,Minute,Sum FROM public_chair_use_record LEFT JOIN public_chair ON public_chair.ChairId=public_chair_use_record.Chair WHERE public_chair.PlaceId=\'{place}\';'
    
    # else:
    #     strGetChairUseRecord = f'SELECT public_chair.ChairId,PayMethod,Minute,Sum FROM public_chair_use_record LEFT JOIN public_chair ON public_chair.ChairId=public_chair_use_record.Chair;'
    
    # execute sql
    
    

    return jsonify(**{'res':'success'})
############################## ajax ##############################


if __name__ == '__main__':
    app.run('0.0.0.0',port=8083,debug=True)


# 程式結束時釋放資料庫資源
cursor.close()
db.close()  # 關閉連線


