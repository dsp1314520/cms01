//1.饼形图 -- pie
function setPie() {
  let myChart = echarts.init(document.querySelector(".pie"));

  let option = {
    title: {
      text: "籍贯 Hometown",
      textStyle: {
        color: "#6d767e",
      },
    },
    tooltip: {
      // show:true
      //饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
      formatter: "{a}<br/>{b} <b>{c}</b>人 占比{d}%",
    },
    //设置数据展示
    legend: {
      show: false,
    },
    //右上角工具
    // toolbox: {
    // show: true,
    // feature: {
    // mark: { show: true },
    // dataView: { show: true, readOnly: false },
    // restore: { show: true },
    // saveAsImage: { show: true }
    // }
    // },
    series: [
      {
        //提示的时候使用
        name: "各地人员分布",
        //图表类型
        type: "pie",
        //内外原型半径
        radius: ["10%", "65%"],
        // 圆心的位置
        center: ["50%", "50%"],
        roseType: "area", //半径模式,面积模式
        //扇形样式
        itemStyle: {
          borderRadius: 4, //圆角
        },
        data: [
          {
            value: 40,
            name: "江苏省",
          },
          {
            value: 38,
            name: "河南省",
          },
          {
            value: 32,
            name: "云南省",
          },
          {
            value: 30,
            name: "山东省",
          },
          {
            value: 28,
            name: "甘肃省",
          },
          {
            value: 26,
            name: "内蒙古自治区",
          },
          {
            value: 22,
            name: "西藏自治区",
          },
          {
            value: 18,
            name: "黑龙江省",
          },
          {
            value: 39,
            name: "新疆维吾尔自治区",
          },
          {
            value: 26,
            name: "河北省",
          },
          {
            value: 28,
            name: "广西壮族自治区",
          },
          {
            value: 26,
            name: "湖南省",
          },
          {
            value: 26,
            name: "广东省",
          },
        ],
      },
    ],
  };
  myChart.setOption(option);
}
//调用
setPie();

//2.折线图 -- line
function setLine() {
  let myChart = echarts.init(document.querySelector(".line"));
  let option = {
    tooltip: {
      trigger: "axis",
      position: function (pt) {
        return [pt[0], "10%"];
      },
    },
    title: {
      // left: 'center',
      text: "薪资 Salary",
      textStyle: {
        color: "#6d767e",
      },
    },
    //删除工具箱 toolbook
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "张三",
        "李四",
        "张飞",
        "赵云",
        "狗哥",
        "张三",
        "李四",
        "张飞",
        "赵云",
        "狗哥",
        "张三",
        "李四",
        "张飞",
        "赵云",
        "狗哥",
        "张三",
        "李四",
        "张飞",
        "赵云",
        "狗哥",
      ],
    },
    yAxis: {
      type: "value",
      //折线最大值,距离顶部的距离
      boundaryGap: [0, "50%"],
    },
    //缩放组件
    dataZoom: [
      // {
      //   type: 'inside',//inside鼠标滚动实现,还是slider滑动区域缩放
      //   start: 0,
      //   end: 15
      // },
      {
        type: "slider",
        start: 0,
        end: 10,
      },
    ],
    legend: {
      top: 20,
    },
    series: [
      {
        //name属性配合legend
        name: "期望薪资",
        type: "line",
        //转折点是否圆滑
        smooth: true,
        symbol: "none", //折线点类型
        // sampling: 'lttb',
        itemStyle: {
          color: "#ee6666",
        },
        //areaStyle 删除后,不在有红色背景
        data: [
          8300, 9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000,
          8300, 9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000,
        ],
      },
      {
        name: "实际薪资",
        type: "line",
        smooth: true,
        symbol: "none",
        // sampling: 'lttb',
        itemStyle: {
          color: "#5470c6",
        },
        //areaStyle 删除后,不在有红色背景
        data: [
          9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 8300,
          9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 13000,
        ],
      },
    ],
  };
  myChart.setOption(option);
}
//调用
setLine();

//3.柱状图 --bar
function setBar() {
  let myChart = echarts.init(document.querySelector(".barChart"));
  let option = {
    // 网格（整个图表区域设置）
    grid: {
      top: 30,
      bottom: 30,
      left: "7%",
      right: "7%",
    },
    //tooltip 提示框组件
    tooltip: {
      trigger: "axis", ////坐标轴触发提示
      axisPointer: {
        //高亮
        type: "cross", //指针十字
        crossStyle: {
          color: "#999",
        },
      },
    },
    // 右上角工具箱删除  // toolbox
    legend: {},
    //处理x轴
    xAxis: [
      {
        type: "category",
        data: ["1组", "2组", "3组", "4组", "5组", "6组", "7组", "8组"],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    // 处理y轴
    yAxis: [
      {
        //第一个对象控制左边Y轴
        type: "value",
        //y轴左边头名
        // name: 'Precipitation',
        //min或max如果不设置会默认根据人数或分数来自动生成最大和最小
        min: 0, //最小值
        max: 100, //最大值
        interval: 10, //间隔
        axisLabel: {
          formatter: "{value} 分", //内容格式
        },
      },
      {
        //第二个对象控制右边Y轴
        type: "value",
        //y轴右边头名
        // name: 'Temperature',
        min: 0,
        max: 10,
        interval: 1,
        axisLabel: {
          formatter: "{value} 人",
        },
      },
    ],
    // color: ['#5470c6', '#91cc75', '#fac858', '#ee6666'],
    series: [
      {
        name: "平均分",
        type: "bar",
        barWidth: "15", //柱子宽度
        // tooltip: {
        //   valueFormatter: function (value) {
        //     return value + ' 分';
        //   }
        // },
        data: [60, 70, 70, 80, 82, 82, 80, 80, 80],
      },
      {
        name: "低于60分人数",
        type: "bar",
        barWidth: "15", //柱子宽度
        yAxisIndex: 1, //依据左右那个y轴呈现 0是以左侧1是右侧
        // tooltip: {
        //   valueFormatter: function (value) {
        //     return value + ' 人';
        //   }
        // },

        data: [5, 4, 3, 2, 3, 3, 2, 3],
      },
      {
        name: "60到80之间",
        type: "bar",
        yAxisIndex: 1, //依据左右那个y轴呈现 0是以左侧1是右侧
        // tooltip: {
        //   valueFormatter: function (value) {
        //     return value + '人';
        //   }
        // },
        barWidth: "15", //柱子宽度
        data: [3, 3, 2, 1, 0, 3, 1, 3],
      },
      {
        name: "高于80分人数",
        type: "bar",
        yAxisIndex: 1, //依据左右那个y轴呈现 0是以左侧1是右侧
        // tooltip: {
        //   valueFormatter: function (value) {
        //     return value + ' 人';
        //   }
        // },
        barWidth: "15", //柱子宽度
        data: [1, 2, 3, 2, 4, 3, 2, 1],
      },
    ],
  };
  myChart.setOption(option);
}
//调用
setBar();

//4.地图 -- map
// ------------------------------------ 地图 ------------------------------------
function mapChart(a, b) {
  let myChart = echarts.init(document.querySelector(".map"));
  // 位置 + 经纬度
  var chinaGeoCoordMap = a;
  var chinaDatas = b;

  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var fromCoord = chinaGeoCoordMap[dataItem[0].name];
      var toCoord = [116.4551, 40.2539]; // 目标点经纬度（北京顺义校区）
      if (fromCoord && toCoord) {
        res.push([
          {
            coord: fromCoord,
            value: dataItem[0].value,
          },
          {
            coord: toCoord,
          },
        ]);
      }
    }
    return res;
  };
  var series = [];
  [["顺义校区", chinaDatas]].forEach(function (item, i) {
    series.push(
      {
        type: "lines",
        zlevel: 2,
        effect: {
          show: true,
          period: 4, //箭头指向速度，值越小速度越快
          trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: "arrow", //箭头图标
          symbolSize: 5, //图标大小
        },
        lineStyle: {
          normal: {
            width: 1, //尾迹线条宽度
            opacity: 1, //尾迹线条透明度
            curveness: 0.2, //尾迹线条曲直度
          },
        },
        data: convertData(item[1]),
      },
      {
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          //涟漪特效
          period: 4, //动画时间，值越小速度越快
          brushType: "stroke", //波纹绘制方式 stroke, fill
          scale: 4, //波纹圆环最大限制，值越大波纹越大
        },
        label: {
          normal: {
            show: true,
            position: "right", //显示位置
            offset: [5, 0], //偏移设置
            formatter: function (params) {
              //圆环显示文字
              return params.data.name;
            },
            fontSize: 12,
          },
          emphasis: {
            show: true,
          },
        },
        symbol: "circle",
        symbolSize: function (val) {
          return 4 + val[2] * 5; //圆环大小
        },
        itemStyle: {
          normal: {
            show: false,
            color: "#f00",
          },
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[0].name,
            value: chinaGeoCoordMap[dataItem[0].name].concat([
              dataItem[0].value,
            ]),
          };
        }),
      },
      //被攻击点
      {
        type: "scatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          period: 4,
          brushType: "stroke",
          scale: 4,
        },
        label: {
          normal: {
            show: true,
            position: "right",
            offset: [5, 0],
            color: "#9eca7f", // 目标点文字颜色
            formatter: "{b}",
            textStyle: {
              color: "#9eca7f",
            },
          },
          emphasis: {
            show: true,
            color: "#f60", // 目标点鼠标移入的颜色
          },
        },
        symbol: "pin",
        symbolSize: 50,
        data: [
          {
            name: item[0],
            value: chinaGeoCoordMap[item[0]].concat([10]),
          },
        ],
      }
    );
  });

  let option = {
    title: {
      text: "来京路线 From",
      textStyle: {
        color: "#6d767e",
      },
    },
    // tooltip: {
    //   trigger: 'item',
    //   backgroundColor: 'rgba(166, 200, 76, 0.82)',
    //   borderColor: '#FFFFCC',
    //   showDelay: 0,
    //   hideDelay: 0,
    //   enterable: true,
    //   transitionDuration: 0,
    //   extraCssText: 'z-index:100',
    //   formatter: function (params, ticket, callback) {
    //     //根据业务自己拓展要显示的内容
    //     var res = "";
    //     var name = params.name;
    //     var value = params.value[params.seriesIndex + 1];
    //     res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
    //     return res;
    //   }
    // },
    // backgroundColor: "#013954",
    // visualMap: { //图例值控制
    //   min: 0,
    //   max: 1,
    //   calculable: true,
    //   show: false,
    //   color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
    //   textStyle: {
    //     color: '#fff'
    //   }
    // },
    geo: {
      map: "china",
      zoom: 1.2,
      label: {
        emphasis: {
          show: false,
        },
      },
      roam: true, //是否允许缩放
      itemStyle: {
        normal: {
          // color: 'rgba(51, 69, 89, .5)', //地图背景色
          // color: '#5a6fc0', //地图背景色
          // borderColor: '#516a89', //省市边界线00fcff 516a89
          borderWidth: 1,
        },
        emphasis: {
          color: "rgba(37, 43, 61, .5)", //悬浮背景
        },
      },
    },
    series: series,
  };
  myChart.setOption(option);
}
//调用
let add = { 顺义校区: [116.4551, 40.2539] };
let arr = [];
mapChart(add, arr);
