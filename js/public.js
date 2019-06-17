$(function () {
    //实时游客数据更新
    $(".ceeb1fd").eq(0).html(54);
    setInterval(updateNowData, Math.round(Math.random() * 1000 + 700));

    $(".wrap").liMarquee({
        direction: 'up',//身上滚动
        runshort: false,//内容不足时不滚动
        scrollamount: 20//速度
    });
});

//实时游客数据更新
function updateNowData() {
    var num = parseInt($(".ceeb1fd").eq(0).html());
    num += Math.floor(Math.random() * 3);
    $(".ceeb1fd").eq(0).html(num);
}

//停车场表格数据动态展示
function aniPark(myChart) {
    var oneMinute = 60 * 1000;
    var datenow = [];

    var data = [Math.random() * 150];
    var now = new Date();

    function addData(shift) {
        //获取小时数和分钟数
        var hour = now.getHours();
        var minutes = getNow(now.getMinutes());
        //小时数和分钟数用冒号链接在一起
        datenow1 = [hour, minutes].join(':');
        //形成一个新的数组
        datenow.push(datenow1);
        data.push((Math.random()) * 30 + 100);
        if (shift) {
            datenow.shift();
            data.shift();
        }
        now = new Date(new Date(now).getTime() + oneMinute);
    }

    for (var i = 0; i < 20; i++) {
        addData();
    }

    //返回完整的分钟数
    function getNow(s) {
        return s < 10 ? '0' + s : s;
    }

    option = {
        xAxis: {
            type: 'time',
            boundaryGap: false,
            data: datenow
        },
        yAxis: {
            boundaryGap: [0, '50%'],
            type: 'value'
        },
        series: [
            {
                name: '成交',
                type: 'line',
                smooth: true,
                symbol: 'none',
                stack: 'a',
                areaStyle: {
                    normal: {}
                },
                data: data
            }
        ]
    };

    setInterval(function () {
        $(".lefttoday_tit .fl span").html(Math.floor(Math.random() * 20));
        addData(true);
        myChart.setOption({
            xAxis: {
                data: datenow
            },
            series: [{
                name: '成交',
                data: data
            }]
        });
    }, 1500);
}

//景点热度数据动态展示
function aniScenic(myChart) {
    var scenic = ['四面佛', '九仙山', '澳角村', '铜山古城', '苏峰山', '南门湾', '东门屿', '马銮湾', '风动石', '尖峰山'];
    var num = [12154, 15454, 18203, 18789, 23489, 29034, 30124, 35145, 38415, 25112];
    var data = [];

    //组成一个新数组
    for (var i = 0; i < scenic.length; i++) {
        data[scenic[i]] = num[i];

    }


    function addData() {
        for (k in data) {
            if (Math.random() > 0.5) {
                if (data[k] > 3000) {
                    var nowdataValue = data[k] + Math.floor((Math.random() - 0.5) * 3000);
                    data[k] = nowdataValue;
                } else if (data[k] < 3000) {
                    data[k] = 5000;
                } else {
                    data[k] = nowdataValue;
                }
            }
        }
        data = sortObj(data);
    }

    //数组重新排序
    function sortObj(obj) {
        var arr = [];
        for (var i in obj) {
            arr.push([obj[i], i]);
        }
        ;
        arr.sort(function (a, b) {
            return a[0] - b[0];
        });
        var len = arr.length,
            obj = {};
        for (var i = 0; i < len; i++) {
            obj[arr[i][1]] = arr[i][0];
        }
        return obj;
    }

    setInterval(function () {
        addData();
        myChart.setOption({
            yAxis: {
                data: Object.keys(data)
            },
            series: [{
                data: Object.values(data)
            }]
        });
    }, 1000);

}

/**
 *
 * 获取当前时间
 */


//定时器每秒调用一次
setInterval(function () {
    var date = new Date();
    var year = date.getFullYear(); //年
    var mon = date.getMonth() + 1;	//月
    var day = date.getDate();		//日
    var hh = date.getHours();		//时
    var mm = date.getMinutes();	//分
    var ss = date.getSeconds();	//秒
    var today = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var xq = today[date.getDay()];
    var daytime;
    daytime = year + "-" + mon + "-" + day + " &nbsp; " + xq;
    var time;
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (ss < 10) {
        ss = "0" + ss;
    }
    time = hh + ":" + mm + ":" + ss;
    $(".newDate").html(daytime + "  &nbsp " + time);
    // $("#time").val(time);
})