# import


# 常用工具
class CommonTools():


    def __init__(self,request):
        self.request = request
        return None
    

    # 取得前端傳回的參數,return data type -> dict, key 'data'->list
    def GetRequestValue(self,key):
        currentData = []

        # judge request method
        if self.request.method == 'GET':
            currentData = self.request.args.getlist(key)

        elif self.request.method == 'POST':
            currentData = self.request.form.getlist(key)

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
    

    # 