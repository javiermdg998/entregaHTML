var ctx = document.getElementById("chart1").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Pieza A", "Pieza B", "Pieza C", "Pieza D", "Pieza E", "Pieza F"],
    datasets: [
      {
        label: "Carga de husillo",
        data: [12, 18, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
myChart.canvas.parentNode.style.height = chartHeight;
myChart.canvas.parentNode.style.width = chartWidth;

var ctx = document.getElementById("chart2").getContext("2d");
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [12, 18, 3, 5, 2, 3],
        backgroundColor: bgColors,
        borderColor: bgColors,
        borderWidth: 1
      }
    ]
  }
});
myChart.canvas.parentNode.style.height = chartHeight;
myChart.canvas.parentNode.style.width = chartWidth;

var ctx = document.getElementById("chart3").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [12, 18, 3, 5, 2, 3],
        backgroundColor: bgColors,
        borderColor: bgColors,
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
myChart.canvas.parentNode.style.height = chartHeight;
myChart.canvas.parentNode.style.width = chartWidth;

var ctx = document.getElementById("chart4").getContext("2d");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [12, 18, 3, 5, 2, 3],
        backgroundColor: bgColors,
        borderColor: bgColors,
        borderWidth: 1
      }
    ]
  }
});
myChart.canvas.parentNode.style.height = chartHeight;
myChart.canvas.parentNode.style.width = chartWidth;
