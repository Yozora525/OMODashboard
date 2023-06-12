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
function DrawChart(chartType,canvasElement,xValue,yValue,datasets){
    // check xValue length and yValue length
    if(xValue.length != yValue.length){ 
        alert('x軸與y軸長度不一致！');
        return;
    }

    let ChartsConfigData = {
        type: chartType,
        data: {
            labels: xValue,
            datasets: datasets
        }
    }



    new Chart($(canvasElement), ChartsConfigData);

    return $(canvasElement);
}