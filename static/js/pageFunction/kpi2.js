var ageData = [20, 25, 30, 35, 40, 45, 50];
var satisfactionData = [];
var labels = [];
var barChart;

function getRandomSatisfaction() {
  return Math.floor(Math.random() * 10) + 1;
}

function generateData() {
  satisfactionData = [];
  labels = [];

  for (var i = 0; i < ageData.length; i++) {
    var age = ageData[i];
    var maleSatisfaction = getRandomSatisfaction();
    var femaleSatisfaction = getRandomSatisfaction();

    satisfactionData.push({
      age: age,
      maleSatisfaction: maleSatisfaction,
      femaleSatisfaction: femaleSatisfaction
    });

    labels.push('年龄' + age);
  }
}

function createBarChart() {
  var ctx2 = document.getElementById('barChart').getContext('2d');
  barChart = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: '男性',
          data: satisfactionData.map(item => item.maleSatisfaction),
          backgroundColor: 'rgba(54, 162, 235, 0.8)'
        },
        {
          label: '女性',
          data: satisfactionData.map(item => item.femaleSatisfaction),
          backgroundColor: 'rgba(255, 99, 132, 0.8)'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: '年龄'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: '顾客服务满意度'
          },
          suggestedMin: 1,
          suggestedMax: 10
        }
      }
    }
  });
}

generateData();
createBarChart();
