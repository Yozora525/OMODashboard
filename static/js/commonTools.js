// * 常用的function
// location to index
function ReturnToIndex(){
    location.href = "/";
}

// call ajax
function AjaxRequest(url,params,successFunc,errorFunc) {
    url = url || '';
    params = params || {};
    successFunc = successFunc || function(){}
    errorFunc = errorFunc || function(){}

    $.ajax({
        type: "post",
        url: url,
        data: params,
        dataType: "json",
        success: successFunc,
        error: errorFunc
    });
}

// draw chart
function DrawChart(chartType,xValue,yValue){
    // check xValue length and yValue length
    if(xValue.length != yValue.length){ 
        alert('x軸與y軸長度不一致！');
        return;
    }

    // create chart container
    var canvas = document.createElement('canvas');

    
}