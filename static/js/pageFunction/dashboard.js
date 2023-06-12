// * draw chart by shiyan, chatGPT
function DrawChartByChatGPT(chartType, xValues, yValues) {
    // 檢查是否已載入 Chart.js 庫
    if (typeof Chart === 'undefined') {
      console.error('請確保已載入 Chart.js 庫！');
      return null;
    }
  
    // 檢查 x 和 y 值的數量是否一致
    if (xValues.length !== yValues.length) {
      console.error('x 和 y 值的數量不一致！');
      return null;
    }
  
    // 建立 canvas 元素作為圖表的容器
    var canvas = document.createElement('canvas');
  
    // 建立圖表的配置
    var chartOptions = {
      type: chartType,
      data: {
        labels: xValues,
        datasets: [{
          label: 'Data',
          data: yValues,
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // 設定點的背景顏色
          borderColor: 'rgba(75, 192, 192, 1)', // 設定點的邊框顏色
          borderWidth: 1 // 設定點的邊框寬度
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Y Values'
            }
          }
        }
      }
    };
  
    // 繪製圖表
    new Chart(canvas, chartOptions);
  
    return canvas;
  }
  