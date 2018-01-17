
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// 一周时间自习人数曲线图
var ctx = document.getElementById("areaChart");
var areaChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["星期一","星期二","星期三","星期四","星期五","星期六","星期日",],
        datasets: [{
            label: "自习人数",
            lineTension: 0.3,
            backgroundColor: "rgba(2,117,216,0.2)",
            borderColor: "rgba(2,117,216,1)",
            pointRadius: 5,
            pointBackgroundColor: "rgba(2,117,216,1)",
            pointBorderColor: "rgba(255,255,255,0.8)",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(2,117,216,1)",
            pointHitRadius: 20,
            pointBorderWidth: 2,
            data: [400, 340, 450, 342, 342, 531, 123],
        }],
    },
    options: {
        scales: {
            xAxes: [{
                time: {
                    unit: 'date'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 7
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 1000,
                    maxTicksLimit: 5
                },
                gridLines: {
                    color: "rgba(0, 0, 0, .125)",
                }
            }],
        },
        legend: {
            display: false
        }
    }
});

// 条形图
var ctx = document.getElementById("barChart");
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["软件开发与测试", "企业信息化", "云计算与大数据", "移动互联网", "智慧城市", "电子商务"],
        datasets: [{
            label: "人数",
            backgroundColor: "rgba(2,117,216,1)",
            borderColor: "rgba(2,117,216,1)",
            data: [144, 112, 133, 110, 123, 110],
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


// 饼图
var ctx = document.getElementById("pie");
var pie = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [144, 112, 133, 45],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745',
                'cyan', '#1d2124', '#005cbf', '#b1dfbb', '#ffff00', '#e83e8c'],
        }]

    }
});

// 饼图Ave
var ctx = document.getElementById("doughnutAve");
var doughnutAve = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [17, 23, 32, 11],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745',
                'cyan', '#1d2124', '#005cbf', '#b1dfbb', '#ffff00', '#e83e8c'],
        }]

    }
});

// 条形图Ave
var ctx = document.getElementById("barChartAve");
var barChartAve = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["软件开发与测试", "企业信息化", "云计算与大数据", "移动互联网", "智慧城市", "电子商务"],
        datasets: [{
            label: "平均时间",
            backgroundColor: "rgba(255,201,0,1)",
            borderColor: "rgba(2,117,216,1)",
            data: [12, 8, 20, 19, 12, 14],
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
                    max: 45,
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