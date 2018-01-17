
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// 条形图
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["5楼东", "5楼西", "6楼东", "6楼西", "7楼东", "7楼西"],
    datasets: [{
      label: "人数",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [1, 52, 105, 95, 10, 18],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 200,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

var ctx2 = document.getElementById("myBarChart2");
var myBarChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ["5楼东", "5楼西", "6楼东", "6楼西", "7楼东", "7楼西"],
        datasets: [{
            label: "人数",
            backgroundColor: "rgba(2,117,216,1)",
            borderColor: "rgba(2,117,216,1)",
            data: [50, 52, 105, 95, 10, 18],
        }],
    },
    options: {
        scales: {
            xAxes: [{
                time: {
                    unit: 'month'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 6
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 150,
                    maxTicksLimit: 5
                },
                gridLines: {
                    display: true
                }
            }],
        },
        legend: {
            display: false
        }
    }
});
// -- 饼图
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["1号教室", "2号教室", "3号教室", "4号教室",
        "5号教室", "6号教室", "7号教室", "8号教室", "9号教室",
        "10号教室"],
    datasets: [{
      data: [144, 112, 133, 110, 123, 11, 100, 90, 122, 100],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745',
          'cyan', '#1d2124', '#005cbf', '#b1dfbb', '#ffff00', '#e83e8c'],
    }],
    options: {
            //Boolean - 是否执行动画
            animation : true,
            //Number - 动画时间
            animationSteps : 100,
            //String - 动画的效果
            animationEasing : "easeOutBounce",
            //Boolean -是否旋转动画
            animateRotate : true,
            //Boolean - 是否动画缩放饼图中心
            animateScale : true,
        }

  }
});

var ctx3 = document.getElementById("myBarChart3");
var myBarChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ["5楼东", "5楼西", "6楼东", "6楼西", "7楼东", "7楼西"],
        datasets: [{
            label: "人数",
            backgroundColor: "rgba(2,117,216,1)",
            borderColor: "rgba(2,117,216,1)",
            data: [120, 26, 105, 95, 40, 105],
        }],
    },
    options: {
        scales: {
            xAxes: [{
                time: {
                    unit: 'month'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 6
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 150,
                    maxTicksLimit: 5
                },
                gridLines: {
                    display: true
                }
            }],
        },
        legend: {
            display: false
        }
    }
});

var ctx4 = document.getElementById("myBarChart4");
var myBarChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ["5楼东", "5楼西", "6楼东", "6楼西", "7楼东", "7楼西"],
        datasets: [{
            label: "人数",
            backgroundColor: "rgba(2,117,216,1)",
            borderColor: "rgba(2,117,216,1)",
            data: [111, 123, 123, 23, 130, 120],
        }],
    },
    options: {
        scales: {
            xAxes: [{
                time: {
                    unit: 'month'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 6
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 150,
                    maxTicksLimit: 5
                },
                gridLines: {
                    display: true
                }
            }],
        },
        legend: {
            display: false
        }
    }
});

var ctx5 = document.getElementById("myBarChart5");
var myBarChart5 = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ["5楼东", "5楼西", "6楼东", "6楼西", "7楼东", "7楼西"],
        datasets: [{
            label: "人数",
            backgroundColor: "rgba(2,117,216,1)",
            borderColor: "rgba(2,117,216,1)",
            data: [100, 52, 125, 99, 23, 87],
        }],
    },
    options: {
        scales: {
            xAxes: [{
                time: {
                    unit: 'month'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 6
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 150,
                    maxTicksLimit: 5
                },
                gridLines: {
                    display: true
                }
            }],
        },
        legend: {
            display: false
        }
    }
});
