<script>
var ageData = [20, 25, 30, 35, 40, 45, 50];
var maleSatisfactionData = [];
var femaleSatisfactionData = [];
var labels = [];
var barChart;

function getRandomSatisfaction() {
  return Math.floor(Math.random() * 10) + 1;
}

function generateData(gender) {
  maleSatisfactionData = [];
  femaleSatisfactionData = [];
  labels = [];

  for (var i = 0; i < ageData.length; i++) {
    var age = ageData[i];
    var satisfaction = getRandomSatisfaction();

    if (gender === 'male') {
      maleSatisfactionData.push(satisfaction);
      femaleSatisfactionData.push(null);
    } else if (gender === 'female') {
      maleSatisfactionData.push(null);
      femaleSatisfactionData.push(satisfaction);
    }

    labels.push('年龄' + age);
  }
}

function createBarChart() {
  var ctx = document.getElementById('barChart').getContext('2d');
  barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '男性',
        data: maleSatisfactionData,
        backgroundColor: 'rgba(54, 162, 235, 0.8)'
      }, {
        label: '女性',
        data: femaleSatisfactionData,
        backgroundColor: 'rgba(255, 99, 132, 0.8)'
      }]
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

function changeData(gender) {
  generateData(gender);
  updateBarChart();
}

function updateBarChart() {
  barChart.data.datasets[0].data = maleSatisfactionData;
  barChart.data.datasets[1].data = femaleSatisfactionData;
  barChart.update();
}

generateData('male');
createBarChart();
</script>