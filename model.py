import pymysql

# ! passwd 需自行更改
config = {
    'host':'localhost',
    'port':3306,
    'user':'root',
    'passwd':'1234',
    'db':'omo',
    'charset':'utf8mb4',
    # 資料庫內容以字典格式輸出
    #'cursorclass':pymysql.cursors.DictCursor,
}

# 連接資料庫
def Mysql():
    # 連接資料庫
    #db = pymysql.connect(host="localhost", port=3306, user="root", passwd="root", db="Geek_Web", charset="utf8mb4")
    db = pymysql.connect(**config)
    
    try:
        print('success')
        return db
 
    except:
        print("fail") 
                     

