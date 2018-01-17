
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
// -- 所有学院自习情况雷达图

var ctx = document.getElementById("allRadar").getContext("2d");
var allRadar = new Chart(ctx, {
    type: 'radar',

    data: {
        labels : ["软件学院", "机电工程学院", "信息与通信工程学院", "理学院", "艺术学院",
            "能源动力工程学院", "机械工程学院", "仪器与电子学院", "经济与管理学院", "材料科学与工程学院",
            "大数据学院", "人文社会科学学院", "环境与安全工程学院", "国际教育学院", "化学工程与技术学院", "体育学院", "电气与控制工程学院"],
        datasets : [
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [200,210,100,194,195,212,198,204,203,205,205,213,211,214,210,199,210]
            }
        ]
    },
    options: {
        fontColor:'#ffd93b',
        custom: {
            fontColor: "#e8ff28",
            color: "#ff8bc2"
        },
        legend: {
            display: false,
            position: 'left',
        },
        title: {
            display: true,
            text: '全校自习人数分布图',
            fontColor: '#06c9ff',
            fontSize: 24
        },
        scale: {
            fontColor: '#21acff',
            ticks: {
                display: true,
                beginAtZero: true,
                fontColor: "#000",
                maxTicksLimit: undefined,
            },

        }
    }
});

// -- 饼状图

// 软件学院
var ctx = document.getElementById("pieSoft");
var pieSoft = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["一年级", "二年级", "三年级", "四年级"],
    datasets: [{
      data: [344, 412, 373, 110],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// 机电工程学院
var ctx = document.getElementById("pieME");
var pieME = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [120, 200, 211, 90],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
    },
});

// 信息与通信工程学院
var ctx = document.getElementById("pieInfo");
var pieInfo = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [100, 70, 200, 40],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
    },
});

// 理学院
var ctx = document.getElementById("pieSci");
var pieSci = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [130, 223, 300, 99],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
    },
});

// 艺术学院
var ctx = document.getElementById("pieArt");
var pieArt = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [120, 170, 222, 100],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
    },
});

// 能源动力工程学院
var ctx = document.getElementById("piePower");
var piePower = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [133, 122, 190, 93],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
    },
});

// 机械工程学院
var ctx = document.getElementById("pieMEEngineering");
var pieMEEngineering = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [200, 213, 319, 120],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
    },
});

// 仪器与电子学院
var ctx = document.getElementById("pieIE");
var pieIE = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [218, 200, 311, 190],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
    },
});

// 经济与管理学院
var ctx = document.getElementById("pieEco");
var pieEco = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [200, 270, 210, 110],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
    },
});

// 材料科学与工程学院
var ctx = document.getElementById("pieMateSciEng");
var pieMateSciEng = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [190, 213, 134, 100],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
    },
});

// 大数据学院
var ctx = document.getElementById("pieMassData");
var pieMassData = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [90, 120, 111, 97],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
    },
});

// 人文社会科学学院
var ctx = document.getElementById("pieHumanSci");
var pieHumanSci = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [120, 111, 310, 94],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
    },
});

// 环境与安全工程学院
var ctx = document.getElementById("pieSafeEng");
var pieSafeEng = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [110, 210, 220, 120],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
    },
});

// 国际教育学院
var ctx = document.getElementById("pieInterEdu");
var pieInterEdu = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [20, 70, 87, 21],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
    },
});

// 化学工程与技术学院
var ctx = document.getElementById("pieChemiTech");
var pieChemiTech = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [201, 310, 290, 111],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
    },
});

// 体育学院
var ctx = document.getElementById("pieSport");
var pieSport = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [40, 70, 50, 12],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
    },
});

// 电气与控制工程学院
var ctx = document.getElementById("pieElectCtrl");
var pieElectCtrl = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["一年级", "二年级", "三年级", "四年级"],
        datasets: [{
            data: [200, 290, 270, 180],
            backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
    },
});
