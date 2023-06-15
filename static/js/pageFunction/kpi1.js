   // 行銷 KPI 折線圖資料
    // 假設的數據
    const websiteData = [100, 150, 120, 180, 200, 160, 220];
    const fbData = [80, 100, 90, 120, 110, 130, 150];
    const igData = [50, 60, 70, 80, 90, 100, 110];
    const dates = ['2023/06/11', '2023/06/12', '2023/06/13', '2023/06/14', '2023/06/15', '2023/06/16', '2023/06/17'];

    // 初始化折線圖
    const ctx = document.getElementById('kpiChart').getContext('2d');
    let kpiChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
            label: '網站',
            data: websiteData,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: false
          },
          {
            label: 'FB',
            data: fbData,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: false
          },
          {
            label: 'IG',
            data: igData,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });

    // 更新圖表
    function updateChart(type) {
      let newData = [];
      let newLabels = [];

      switch (type) {
        case 'week':
          newData = websiteData.slice(0, 7);
          newLabels = dates.slice(0, 7);
          break;
        case 'month':
          newData = websiteData.slice(0, 4);
          newLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
          break;
        case 'year':
          newData = websiteData.slice(0, 12);
          newLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          break;
        default:
          newData = websiteData;
          newLabels = dates;
      }

      kpiChart.data.labels = newLabels;
      kpiChart.data.datasets[0].data = newData;
      kpiChart.update();
    }