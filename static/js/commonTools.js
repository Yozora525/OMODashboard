// * 常用的function
// location to index by shiyan
function ReturnToIndex(){
    location.href = "/";
}

// call ajax by shiyan
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

// draw chart by shiyan
function SetMultipleChart(CanvasElement,xValues,Datasets, yMaxValue, ChartType,ChartOptionsKey=[],ChartOptionsValue=[],dictChartOptions,onClickFunc,onHoverFunc, yShowPercentage, yBeginAtZero,yScaleColors,yScaleDrawBorder=false) {
    isNaN(parseInt(yMaxValue)) ? yMaxValue = 10 : false;
    isNaN(parseInt(yShowPercentage)) ? yShowPercentage = 0 : yShowPercentage = 1;
    isNaN(parseInt(yBeginAtZero)) ? yBeginAtZero = 1 : yBeginAtZero = 0;

    ChartType = ChartType || $(CanvasElement).attr("data-chart-type");

    let ChartsConfigData = {
        type: ChartType,
        data: {
            labels: xValues,
            datasets: Datasets
        }
    }

    switch (ChartType.toLowerCase()) {

        case 'doughnut':
            ChartsConfigData['options'] = {
                title: {
                    display: true,
                    text: ""
                }
            }
            break;

        case 'bar':
            ChartsConfigData['options'] = {
                scales: {
                    y: {
                        beginAtZero: yBeginAtZero,
                        grid: {
                            color: yScaleColors ,
                            drawBorder: yScaleDrawBorder
                            /*y 軸線顏色*/
                        }
                    },
                    x: {
                        grid: {
                            display: false,
                        }
                    }
                },
                legend: {
                    display: 0,
                }
            }
            break;
    

        default:
            ChartsConfigData['options']= {
                legend: {
                    display: 0
                },
                title: {
                    display: 1,
                    text: ""
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: yBeginAtZero,
                            suggestedMax: yMaxValue,
                            callback: function (value, index, values) {
                                if (yShowPercentage){
                                    return Math.floor(value) + "%";
                                } else {
                                    return value;
                                }
                            }
                        },
                    }]
                }
            }
    }

    if (dictChartOptions != undefined) {
        ChartsConfigData['options'] = dictChartOptions
    }

    if (ChartOptionsKey.length != ChartOptionsValue.length) {

        console.log('ChartOptionsKey與ChartOptionsValue長度不一致！');
        return;

    } else {
        
        for (let i = 0; i < ChartOptionsKey.length; i++) {
            
            var currentObject = ChartsConfigData['options'];

            for (let j = 0; j < ChartOptionsKey[i].length; j++) {

                if (currentObject[ChartOptionsKey[i][j]] == undefined) {
                    currentObject[ChartOptionsKey[i][j]] = undefined;
                } else {
                    currentObject = currentObject[ChartOptionsKey[i][j]];
                }

            }

            currentObject[ChartOptionsKey[i][ChartOptionsKey[i].length-1]] = ChartOptionsValue[i];
        }

    }

    onClickFunc ? ChartsConfigData['options']['onClick'] = onClickFunc : onClickFunc;
    onHoverFunc ? ChartsConfigData['options']['onHover'] = onHoverFunc : onHoverFunc;

    new Chart($(CanvasElement), ChartsConfigData);

    return $(CanvasElement);
}