<template>
  <div id="monitor">
    <div class="header">
      <h3><img src="../../static/img/bgtittle.png" alt=""></h3>
    </div>
    <div class="iconheader">
      <div class="">
        <img src="../../static/img/logo.png" alt="">
      </div>
    </div>
    <Row class="container">
      <Col span="12" style="height:100%">
        <!-- 地图 -->
        <div ref="chartsContainer" class="container-left"></div>
        <!-- 仓库-->
        <div class="" style="position:relative">
          <div class="roll_header">
            <p>总仓数：<strong>54</strong>&nbsp;(个)&nbsp; 异常数：<strong>20</strong>&nbsp;(个)</p>
          </div>
          <div class="container_bottom">
            <div class="roll roll_1">
              <div class="roll_top">
                <div class="roll_span"></div>
                <div class="roll_span"></div>
                <div class="roll_span"></div>
                <div class="roll_span"></div>
                <div class="roll_span"></div>
                <div class="roll_span"></div>
              </div>
              <div class="hose_text">
                <h3>20</h3>
                <p>家具：1600平方</p>
                <p>正常：12  <span style="color:rgba(239,40,136,1)"> &nbsp;&nbsp;异常：8</span></p>
              </div>
            </div>
            <div class="roll roll_2">
              <div class="roll_top">
                <div class="roll_span"></div>
                <div class="roll_span"></div>
                <div class="roll_span"></div>
                <div class="roll_span"></div>
                <div class="roll_span"></div>
              </div>
              <div class="hose_text">
                <h3>18</h3>
                <p>家具：1600平方</p>
                <p>正常：12  <span style="color:rgba(239,40,136,1)"> &nbsp;&nbsp;异常：8</span></p>
              </div>
            </div>
            <div class="roll roll_3">
              <div class="roll_top">
                <div class="roll_span"></div>
                <div class="roll_span"></div>
                <div class="roll_span"></div>
                <div class="roll_span"></div>
                <div class="roll_span"></div>
                <div class="roll_span"></div>
                <div class="roll_span"></div>
                <div class="roll_span"></div>
              </div>
              <div class="hose_text">
                <h3>16</h3>
                <p>家具：1600平方</p>
                <p>正常：12  <span style="color:rgba(239,40,136,1)"> &nbsp;&nbsp;异常：8</span></p>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col span="2" style="position:relative;height:82vh;">
        <!-- <div class="" style="width:300px;height:10px"></div> -->
        <div class="rang_s">
          <span class="triangle"><img src="../../static/img/triangle-blue.png" alt=""></span>   <!-- 小三角 -->
          <div class="rang_s0 rangroll"></div>
          <div class="abroll">
            <img src="../../static/img/process1.png" alt="">
          </div>
          <!-- 向上发射的点 -->
          <div ref="slide00" class="slide" id="slide">
            <div ref="slide01" class="slide1">
              <img src="../../static/img/slider.png" alt="">
            </div>
            <div ref="slide02" id="slide2"></div>
          </div>
        </div>
        <div class="rang_s rang_ss1">
          <span class="triangle"><img src="../../static/img/triangle-blue.png" alt=""></span>
          <div class="rang_s1 rangroll"></div>
          <div class="abroll" style="padding:10px 13px 0 4px">
            <img src="../../static/img/process2.png" alt="">
          </div>
          <!-- 向上发射的点 -->
          <div ref="slide10" class="slide" id="slide">
            <div ref="slide11" class="slide1">
              <img src="../../static/img/slider.png" alt="">
            </div>
            <div ref="slide12" id="slide2"></div>
          </div>
        </div>
        <div class="rang_s rang_ss2">
          <span class="triangle"><img src="../../static/img/triangle-red.png" alt=""></span>
          <div class="rang_s2 rangroll"></div>
          <div class="abroll">
            <img src="../../static/img/process3.png" alt="">
          </div>
          <!-- 向上发射的点 -->
          <div ref="slide20" class="slide" id="slide">
            <div ref="slide21" class="slide1">
              <img src="../../static/img/slider.png" alt="">
            </div>
            <div ref="slide22" id="slide2"></div>
          </div>
        </div>
        <div class="rang_s rang_ss3">
          <span class="triangle"><img src="../../static/img/triangle-blue.png" alt=""></span>
          <div class="rang_s3 rangroll"></div>
          <div class="abroll">
            <img src="../../static/img/process4.png" alt="">
          </div>
        </div>
      </Col>
      <Col span="5" class="h100">
        <cake1 style="span:5;height:22vh;margin-top:2.4vh"></cake1>
        <cake2 style="width:100%;height:22vh"></cake2>
        <cake3 style="width:100%;height:22vh"></cake3>
        <div class="orderin">
          <p><span>188096</span> <span style="font-size:20px;">单</span></p>
        </div>
      </Col>
      <Col span="5" class="h100" style="padding-left:15px">
        <chart1 style="width:100%;height:22vh;margin-top:2.4vh"></chart1>
        <chart2 style="width:100%;height:22vh"></chart2>
        <chart3 style="width:100%;height:22vh"></chart3>
        <chart4 style="width:100%;height:22vh"></chart4>
      </Col>
    </Row>
    <!-- 动画div -->
    <div class="outdiv1">

    </div>
  </div>
</template>

<script>
  import $ from '../../static/jquery'
  // import http from './http/http'
  import axios from 'axios'
  import cake1 from './monitoring_components/cake1'
  import cake2 from './monitoring_components/cake2'
  import cake3 from './monitoring_components/cake3'
  import chart1 from './monitoring_components/chart1'
  import chart2 from './monitoring_components/chart2'
  import chart3 from './monitoring_components/chart3'
  import chart4 from './monitoring_components/chart4'
  import {Row,Col} from 'iview';
  // import chart3 from './monitoring_components/chart1'
  // import chart4 from './monitoring_components/chart2'
  let echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/scatter');
  require('echarts/lib/component/geo');
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  require('echarts/lib/component/legend');
  require('echarts/lib/component/visualMap');
  import '../../static/echarts-gl.min';
  require('echarts/map/js/china');
  //请求数据
  axios.get('wmsone/queryWmsOrderModular').then(function(data){
    console.log(data);
  });
  export default {
    name: "Monitor",
    methods:{
      init:function () {
      //  console.log(http);
        // console.log(echarts);
        const containerLeft = this.$refs.chartsContainer;
        let myChartMap = echarts.init(containerLeft);


        var zhongguo = "/static/asset.json";
        var hainan = "/navigate_components/asset.json";
        var xizang = "/asset/get/s/data-1528970391616-BJeoh2JW7.json";
        var zhejiang = "/asset/get/s/data-1528970380661-SkH93h1-m.json";
        var yunnan = "/asset/get/s/data-1528970362114-r1MK321WQ.json";
        var xinjiang = "/asset/get/s/data-1528970349852-H18u22kWX.json";
        var tianjin = "/asset/get/s/data-1528970339987-Hk2wnh1ZX.json";
        var sichuan = "/asset/get/s/data-1528970319531-Hy_8n3y-m.json";
        var shanxi = "/asset/get/s/data-1528970298351-HyzB32JZ7.json";
        var shangxi = "/asset/get/s/data-1528970273819-B1cmnnk-Q.json";
        var shanghai = "/asset/get/s/data-1528970254015-HJLfhnyWX.json";
        var shangdong = "/asset/get/s/data-1528970240242-Byu-hhybX.json";
        var qinghai = "/asset/get/s/data-1528970209434-Bytyh3kZ7.json";
        var ningxia = "/asset/get/s/data-1528970150882-SJJ2j2yWQ.json";
        var neimenggu = "/asset/get/s/data-1528970102554-HyJKo31bQ.json";
        var liaoning = "/asset/get/s/data-1528970052404-BJhHihkbQ.json";
        var jilin = "/asset/get/s/data-1528970024458-rkeEjhy-Q.json";
        var jiangxi = "/asset/get/s/data-1528969991368-BkkMi31Zm.json";
        var jiangsu = "/asset/get/s/data-1528969864934-BJ-qchkWQ.json";
        var hunan = "/asset/get/s/data-1528969831328-Sykuqh1bX.json";
        var hubei = "/asset/get/s/data-1528969822119-Bk8v93kZ7.json";
        var henan = "/asset/get/s/data-1528969802719-HyXIqhk-m.json";
        var heilongjiang = "/asset/get/s/data-1528969789631-ryLHcnJbm.json";
        var hebei = "/asset/get/s/data-1528969737020-HJWMqhy-Q.json";
        var guizhou = "/asset/get/s/data-1528969712502-Hy_g92yZQ.json";
        var guangxi = "/asset/get/s/data-1528969706270-HJMg5hkWQ.json";
        var guangdong = "/asset/get/s/data-1528969700634-BkT1qn1WQ.json";
        var gansu = "/asset/get/s/data-1528969694316-BJLkc2yZX.json";
        var chongqing = "/asset/get/s/data-1528969687660-r1ey9nkbX.json";
        var aomen = "/asset/get/s/data-1528969612486-rJ4qtnyZm.json";
        var anhui = "/asset/get/s/data-1528969607452-Hkk5tnJ-Q.json";
        var beijing = "/asset/get/s/data-1528969604941-Hk6Ytn1WQ.json";
        var fujian = "/asset/get/s/data-1528969599839-S1OFFn1ZQ.json";
        var xianggang = "/asset/get/s/data-1528969589857-S1ROthJWm.json";

echarts.extendsMap = function(id, opt) {
    // 实例
    // var chart = this.init(document.getElementById(id));
    var curGeoJson = {};
    var cityMap = {
        '中国': zhongguo,
        '上海': shanghai,
        '河北': hebei,
        '山西': shangxi,
        '内蒙古': neimenggu,
        '辽宁': liaoning,
        '吉林': jilin,
        '黑龙江': heilongjiang,
        '江苏': jiangsu,
        '浙江': zhejiang,
        '安徽': anhui,
        '福建': fujian,
        '江西': jiangxi,
        '山东': shangdong,
        '河南': henan,
        '湖北': hubei,
        '湖南': hunan,
        '广东': guangdong,
        '广西': guangxi,
        '海南': hainan,
        '四川': sichuan,
        '贵州': guizhou,
        '云南': yunnan,
        '西藏': xizang,
        '陕西': shanxi,
        '甘肃': gansu,
        '青海': qinghai,
        '宁夏': ningxia,
        '新疆': xinjiang,
        '北京': beijing,
        '天津': tianjin,
        '重庆': chongqing,
        '香港': xianggang,
        '澳门': aomen
    };
    var geoCoordMap = {
        "磴口": [107.012225,40.337792],
        "沈海": [123.476404,41.811854],
        "盘锦": [122.150954,41.146597],
        "海丰": [115.050769,22.762251],
        "贺州": [111.371802,24.741613],
        "鲤鱼江A": [113.233978,25.942699],
    };
    var geoCoordMap1 = {
         "温州苍南": [120.434446,27.523467],
        "沧州": [116.845318,38.310486],
        "曹妃甸": [118.504805,39.004067],
        "唐山丰润": [118.088961,39.599362],
        "渤海新区": [117.639472,38.365606],
        "菏泽": [115.182225,35.326397],
    };
    var geoCoordMap2 = {
        "徐州一、二期": [117.091077,34.378713],
        "南京热电": [118.828047,32.273218],
        "宜兴": [119.801641,31.36496],
        "镇江": [119.383774,32.188708],
        "华鑫": [113.888833,29.669091],
        "常熟": [119.283774,32.188708],
    }
    var geoCoordMap3 = {
        "六枝": [105.403904,26.387848],
        "首阳山": [112.695363,34.744379],
        "焦作": [113.113088,35.222327],
        "登封一、二期": [113.215689,34.396153],
        "洛阳": [111.984763,34.746303],
        "古城": [114.061156,32.878627],
    }
    var geoCoordMap4 = {
      "涟源": [111.906695,27.767901],
      "宜昌": [111.456005,30.50378],
      "化工园一、二期": [118.927993,32.27431],
      "南京板桥": [118.64423,31.953574],
      "徐州三期": [117.291077,34.378713],
    }
    var geoCoordMap5 = {
      "鲤鱼江B": [113.205002,25.440064],
      "广州热电": [113.535842,22.863521],
      "湖北一期": [113.888854,29.667558],
      "湖北二期": [114.119833,29.669091],
    }
    var levelColorMap = {
        '1': 'rgba(241, 109, 115, .8)',
        '2': 'rgba(255, 235, 59, .7)',
        '3': 'rgba(147, 235, 248, 1)'
    };

    var defaultOpt = {
        mapName: 'china', // 地图展示
        goDown: false, // 是否下钻
        bgColor: '#404a59', // 画布背景色
        activeArea: [], // 区域高亮,同echarts配置项
        data: [],
        // 下钻回调(点击的地图名、实例对象option、实例对象)
        callback: function(name, option, instance) {}
    };
    if (opt) opt = this.util.extend(defaultOpt, opt);

    // 层级索引
    var name = [opt.mapName];
    var idx = 0;
    var pos = {
        leftPlus: 115,
        leftCur: 150,
        left: 198,
        top: 50
    };

    var line = [
        [0, 0],
        [8, 11],
        [0, 22]
    ];
    // style
    var style = {
        font: '18px "Microsoft YaHei", sans-serif',
        textColor: '#eee',
        lineColor: 'rgba(147, 235, 248, .8)'
    };

    var handleEvents = {
        /**
         * i 实例对象
         * o option
         * n 地图名
         **/
        resetOption: function(i, o, n) {
            var breadcrumb = this.createBreadcrumb(n);
            var j = name.indexOf(n);
            var l = o.graphic.length;
            if (j < 0) {
                o.graphic.push(breadcrumb);
                o.graphic[0].children[0].shape.x2 = 145;
                o.graphic[0].children[1].shape.x2 = 145;
                if (o.graphic.length > 2) {
                    var cityData = [];
                    var cityJson;
                    for (var x = 0; x < opt.data.length; x++) {
                        if(n === opt.data[x].city){
                            $([opt.data[x]]).each(function(index,data){
                                cityJson = {city:data.city,name:data.name,value:data.value,crew:data.crew,company:data.company,position:data.position,region:data.region};
                                cityData.push(cityJson)
                            })
                        }
                    }

                    if(cityData!=null){
                        o.series[0].data = handleEvents.initSeriesData(cityData);
                    }else{
                        o.series[0].data = [];
                    }


                }
                name.push(n);
                idx++;
            } else {
                o.graphic.splice(j + 2, l);
                if (o.graphic.length <= 2) {
                    o.graphic[0].children[0].shape.x2 = 60;
                    o.graphic[0].children[1].shape.x2 = 60;
                    o.series[0].data = handleEvents.initSeriesData(opt.data);
                };
                name.splice(j + 1, l);
                idx = j;
                pos.leftCur -= pos.leftPlus * (l - j - 1);
            };

            o.geo.map = n;
            o.geo.zoom = 0.4;
            i.clear();
            i.setOption(o);
            this.zoomAnimation();
            opt.callback(n, o, i);
        },

        /**
         * name 地图名
         **/
        createBreadcrumb: function(name) {
            var cityToPinyin = {
                '中国': 'zhongguo',
                '上海': 'shanghai',
                '河北': 'hebei',
                '山西': 'shangxi',
                '内蒙古': 'neimenggu',
                '辽宁': 'liaoning',
                '吉林': 'jilin',
                '黑龙江': 'heilongjiang',
                '江苏': 'jiangsu',
                '浙江': 'zhejiang',
                '安徽': 'anhui',
                '福建': 'fujian',
                '江西': 'jiangxi',
                '山东': 'shangdong',
                '河南': 'henan',
                '湖北': 'hubei',
                '湖南': 'hunan',
                '广东': 'guangdong',
                '广西': 'guangxi',
                '海南': 'hainan',
                '四川': 'sichuan',
                '贵州': 'guizhou',
                '云南': 'yunnan',
                '西藏': 'xizang',
                '陕西': 'shanxi',
                '甘肃': 'gansu',
                '青海': 'qinghai',
                '宁夏': 'ningxia',
                '新疆': 'xinjiang',
                '北京': 'beijing',
                '天津': 'tianjin',
                '重庆': 'chongqing',
                '香港': 'xianggang',
                '澳门': 'aomen'
            };
            var breadcrumb = {
                type: 'group',
                id: name,
                left: pos.leftCur + pos.leftPlus,
                top: pos.top + 3,
                children: [{
                    type: 'polyline',
                    left: -90,
                    top: -5,
                    shape: {
                        points: line
                    },
                    style: {
                        stroke: '#fff',
                        key: name
                        // lineWidth: 2,
                    },
                    onclick: function() {
                        var name = this.style.key;
                        handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 'middle',
                    style: {
                        text: name,
                        textAlign: 'center',
                        fill: style.textColor,
                        font: style.font
                    },
                    onclick: function() {
                        var name = this.style.text;
                        handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 10,
                    style: {

                        name: name,
                        text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: '12px "Microsoft YaHei", sans-serif',
                    },
                    onclick: function() {
                        // console.log(this.style);
                        var name = this.style.name;
                        handleEvents.resetOption(chart, option, name);
                    }
                }]
            }

            pos.leftCur += pos.leftPlus;

            return breadcrumb;
        },

       // 设置effectscatter
        initSeriesData: function(data) {
            var temp = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    temp.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                        crew:data[i].crew,
						company:data[i].company,
						position:data[i].position,
						region:data[i].region
                    });
                }
            };
            return temp;
        },
         initSeriesData1: function(data) {
            var temp = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap1[data[i].name];
                if (geoCoord) {
                    temp.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                        crew:data[i].crew,
            						company:data[i].company,
            						position:data[i].position,
            						region:data[i].region
                    });
                }
            };
            return temp;
        },
        initSeriesData2: function(data) {
           var temp = [];
           for (var i = 0; i < data.length; i++) {
               var geoCoord = geoCoordMap2[data[i].name];
               if (geoCoord) {
                   temp.push({
                       name: data[i].name,
                       value: geoCoord.concat(data[i].value),
                       crew:data[i].crew,
                       company:data[i].company,
                       position:data[i].position,
                       region:data[i].region
                   });
               }
           };
           return temp;
       },
       initSeriesData3: function(data) {
          var temp = [];
          for (var i = 0; i < data.length; i++) {
              var geoCoord = geoCoordMap3[data[i].name];
              if (geoCoord) {
                  temp.push({
                      name: data[i].name,
                      value: geoCoord.concat(data[i].value),
                      crew:data[i].crew,
                      company:data[i].company,
                      position:data[i].position,
                      region:data[i].region
                  });
              }
          };
          return temp;
      },
      initSeriesData4: function(data) {
         var temp = [];
         for (var i = 0; i < data.length; i++) {
             var geoCoord = geoCoordMap4[data[i].name];
             if (geoCoord) {
                 temp.push({
                     name: data[i].name,
                     value: geoCoord.concat(data[i].value),
                     crew:data[i].crew,
                     company:data[i].company,
                     position:data[i].position,
                     region:data[i].region
                 });
             }
         };
         return temp;
     },
     initSeriesData5: function(data) {
        var temp = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap5[data[i].name];
            if (geoCoord) {
                temp.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                    crew:data[i].crew,
                    company:data[i].company,
                    position:data[i].position,
                    region:data[i].region
                });
            }
        };
        return temp;
    },
        zoomAnimation: function() {
            var count = null;
            var zoom = function(per) {
                if (!count) count = per;
                count = count + per;
                // console.log(per,count);
                chart.setOption({
                    geo: {
                        zoom: count
                    }
                });
                if (count < 1) window.requestAnimationFrame(function() {
                    zoom(0.2);
                });
            };
            window.requestAnimationFrame(function() {
                zoom(0.2);
            });
        }
    };
    //地图左下角legend对应的内容
    var data =  [
      {value:40,name:'家具',icon: 'image://../../static/img/home_furniture.png'},
      {value:40, name:'家电',icon: 'image://../../static/img/home_appliance.png'},
      {value:40, name:'快消',icon: 'image://../../static/img/consumer.png'},
      {value:40, name:'家具异常',icon: 'image://../../static/img/home_furniture_ab.png'},
      {value:40, name:'家电异常',icon: 'image://../../static/img/home_appliance_ab.png'},
      {value:40, name:'快消异常',icon: 'image://../../static/img/consumer_ab.png'}
    ]
    // data:['家具','家电','快消','家具异常','家电异常','快消异常'],

    var optionCenter = {
        backgroundColor: null,
         tooltip: {
                show: true,
                trigger:'item',
                alwaysShowContent:false,
                backgroundColor:'rgba(0,44,115,0.7)',
                borderColor: 'rgba(0,216,255,1)',
                borderWidth: 2,
                color: "#00D8FF",
                hideDelay:100,
                triggerOn:'mousemove',
                enterable:true,
                textStyle:{
                padding: [5, 10],
                fontSize:12,
                fontFamily: 'MicrosoftYaHeiLight',
                color: "#00D8FF"
            },
            // position:['  60%','70%'],
            formatter:function(params, ticket, callback){
                return '<iframe name="weather_inc" src="http://i.tianqi.com/index.php?c=code&id=1" style = "color:#00D8FF!important" width="225" height="20" frameborder="0" marginwidth="0" marginheight="0" scrolling="no">'+'</iframe>'+'<br/>'+
                '仓 库 地 址：'+ '<a style = "color:#FFEA00">'+params.data.name + '</a>' +'<br/>'+
                '仓 库 面 积：'+ '<a style = "color:#FFEA00">'+params.data.crew+'平方米'+'</a>' +'<br/>'+
                '负 责 人：'+ '<a style = "color:#FFEA00">'+params.data.company+'</a>' +'<br/>'+
                '行 业：'+ '<a style = "color:#FFEA00">'+params.data.region+'</a>' +'<br/>'
            }
        },
        legend: {
                orient: 'vertical',
                left: 20,
                bottom: 20,
                data: data,
                itemWidth: 25,
                itemHeight: 25,
                height: 110,
                // borderWidth: 5,
                formatter:  function(name){
                  var total = 0;
                  var target;
                  for (var i = 0, l = data.length; i < l; i++) {
                  total += data[i].value;
                  if (data[i].name == name) {
                      target = data[i].value;
                      }
                  }
                  var arr = [
                      // '{a|'+((target/total)*100).toFixed(2)+'%}',
                      '{b|'+name+'}',
                  ]
                  return arr.join('\n')
              },
              textStyle:{
                  rich:{
                      // a:{
                      //     fontSize:20,
                      //     verticalAlign:'top',
                      //     align:'center',
                      //     color: "#54B3EA",
                      //     padding:[0,0,0,0]
                      // },
                      b:{
                          fontSize:12,
                          color: "#54B3EA",
                          align:'center',
                          padding:[0,0,0,0],
                          lineHeight:25
                      }
                  }
              },
                // textStyle: {
                //   color: "#54B3EA",
                //   fontSize: 18,
                //   padding: [0,0,10,30],
                //   fontFamily :"MicrosoftYaHeiLight",
                //   rich: {
                //
                //   }
                // }
            },
        geo: {
            map: opt.mapName,
            roam: false,
            zoom: 1.25,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#00D8FF',
                        fontSize: 8
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#01cbf2',
                    borderWidth: 1,
                    areaColor: 'rgba(19, 31, 66, 1)',
                    shadowColor: 'rgba(128, 217, 248, 0.6)',
                    fontSize: 8,
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    // shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 3
                },
                emphasis: {
                    areaColor: '#389BB7',
                    borderWidth: 0
                }
            },
            regions: opt.activeArea.map(function(item) {
                if (typeof item !== 'string') {
                    return {
                        name: item.name,
                        itemStyle: {
                            normal: {
                                areaColor: item.areaColor || '#389BB7'
                            }
                        },
                        label: {
                            normal: {
                                show: item.showLabel,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    }
                } else {
                    return {
                        name: item,
                        itemStyle: {
                            normal: {
                                borderColor: '#91e6ff',
                                areaColor: '#389BB7'
                            }
                        }
                    }
                }
            })
        },
        series: [{
            name:"家具",
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'emphasis',
            rippleEffect: {
                period:10,
                scale: 4,
                brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                  fontSize : 12,
                    color: '#FFC848',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            symbol: "image://../../static/img/home_furniture.png",
            symbolSize: 25,
            data: handleEvents.initSeriesData(opt.data),

        },{
            name:"家电",
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'emphasis',
            rippleEffect: {
                period:15,
                scale: 4,
                brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#FFC848',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
              },
              symbol: "image://../../static/img/home_appliance.png",
              symbolSize: 25,
              data: handleEvents.initSeriesData1(opt.data)
            },
            {
              name:"快消",
              type: 'effectScatter',
              coordinateSystem: 'geo',
              showEffectOn: 'emphasis',
              rippleEffect: {
                  period:15,
                  scale: 4,
                  brushType: 'fill'
              },
              hoverAnimation: true,
              itemStyle: {
                  normal: {
                      color: '#FFC848',
                      shadowBlur: 10,
                      shadowColor: '#333'
                  }
              },
              symbol: "image://../../static/img/consumer.png",
              symbolSize: 25,
              data: handleEvents.initSeriesData2(opt.data)
        },
        {
            name:"家具异常",
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'emphasis',
            rippleEffect: {
                period:15,
                scale: 4,
                brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#FFC848',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            symbol: "image://../../static/img/home_appliance_ab.png",
            symbolSize: 25,
            data: handleEvents.initSeriesData3(opt.data)
          },{
              name:"家电异常",
              type: 'effectScatter',
              coordinateSystem: 'geo',
              showEffectOn: 'emphasis',
              rippleEffect: {
                  period:15,
                  scale: 4,
                  brushType: 'fill'
              },
              hoverAnimation: true,
              itemStyle: {
                  normal: {
                      color: '#FFC848',
                      shadowBlur: 10,
                      shadowColor: '#333'
                  }
              },
              symbol: "image://../../static/img/home_furniture_ab.png",
              symbolSize: 25,
              data: handleEvents.initSeriesData4(opt.data)
            },{
                name:"快消异常",
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'emphasis',
                rippleEffect: {
                    period:15,
                    scale: 4,
                    brushType: 'fill'
                },
                hoverAnimation: true,
                itemStyle: {
                    normal: {
                        color: '#FFC848',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                symbol: "image://../../static/img/consumer_ab.png",
                symbolSize: 25,
                data: handleEvents.initSeriesData5(opt.data)
              }]
    };

    myChartMap.setOption(optionCenter);
    //弹框轮动
    var optionCenterData = [...optionCenter.series[0].data,...optionCenter.series[1].data,...optionCenter.series[2].data,...optionCenter.series[3].data,...optionCenter.series[4].data,...optionCenter.series[5].data];
    var counts = optionCenterData.length; //获取所有闪动圆环数量
    // console.log(optionCenterData);
    var dataIndex = 0;
    //让圆环的提示框自动触发轮播显示
    function autoHoverTip(){
      // console.log(counts);
      var as1 = 0; var as2 = 0; var as3 = 0; var as4 =0; var as5 = 0; var as6 = 0; var ass = 0;  var cases = 1;
      for(var i = 0;i<counts;i++){
        (function (i) {
          // console.log(cases);
          var ts = setTimeout(function () {


            var cs1 = optionCenter.series[0].data.length;
            var cs2 = optionCenter.series[1].data.length+optionCenter.series[0].data.length;
            var cs3 = optionCenter.series[2].data.length+optionCenter.series[1].data.length+optionCenter.series[0].data.length;
            var cs4 = optionCenter.series[3].data.length+optionCenter.series[2].data.length+optionCenter.series[1].data.length+optionCenter.series[0].data.length;
            var cs5 = optionCenter.series[4].data.length+optionCenter.series[3].data.length+optionCenter.series[2].data.length+optionCenter.series[1].data.length+optionCenter.series[0].data.length;
              // console.log(cs1,cs2,cs3,cs4,cs5);
            if (i < cs1) {
              cases = 1;
              as1 = as1+1;
              ass = as1;
            }else if (i<cs2&&i>=cs1) {
              cases = 2;
              as2 = as2+1;
              ass = as2;
            }else if (i<cs3&&i>=cs2) {
              cases = 3;
              as3 = as3+1;
              ass = as3;
            }else if (i<cs4&&i>=cs3) {
              cases = 4;
              as4 = as4+1;
              ass = as4;
            }else if (i<cs5&&i>=cs4) {
              cases = 5;
              as5 = as5+1;
              ass = as5;
            }else if (i<counts&&i>=cs5){
              cases = 6;
              as6 = as6+1;
              ass = as6;
            }
            // console.log(ass);
            myChartMap.dispatchAction({
              type: 'showTip',
              seriesIndex: cases,
              dataIndex: ass-1
            });
          }, 3000*i);
        })(i);
      }
    }

    setTimeout(function() {
      autoHoverTip();
      // console.log(counts);
      var tv = setInterval(autoHoverTip, counts*1000);
    }, 500);
    // 添加事件
    myChartMap.on('click', function(params) {
        var _self = this;
        if (opt.goDown && params.name !== name[idx]) {
            if (cityMap[params.name]) {
                // var url = cityMap[params.name];
                // $.get(url, function(response) {
                //     //console.log(response);
                //     curGeoJson = response;
                //     echarts.registerMap(params.name, response);
                //     handleEvents.resetOption(_self, option, params.name);
                // });
            }
        }
    });

    myChartMap.setMap = function(mapName) {
        var _self = this;
        if (mapName.indexOf('市') < 0) mapName = mapName + '市';
        var citySource = cityMap[mapName];
        if (citySource) {
            // var url = './map/' + citySource + '.json';
            // $.get(url, function(response) {
            //     // console.log(response);
            //     curGeoJson = response;
            //     echarts.registerMap(mapName, response);
            //     handleEvents.resetOption(_self, option, mapName);
            // });
        }

    };

    return myChartMap;
};

$.getJSON(zhongguo, function(geoJson) {
    echarts.registerMap('中国', geoJson);
    var myChart = echarts.extendsMap('chart-panel', {
        bgColor: '#154e90', // 画布背景色
        mapName: '中国', // 地图名
        text:'火电业务',
        goDown: true, // 是否下钻
        // 下钻回调
        callback: function(name, option, instance) {
            //console.log(name, option, instance);
        },
        // 数据展示
        data: [{city:'内蒙古',name: "磴口",value: 2*30,crew:'2*30',company:"磴口金牛煤电",position:'内蒙古自治区巴彦淖尔市磴口县',region:'北方大区'},
                {city:'辽宁',name: "沈海",value: 3*20,crew:'3*20',company:"沈阳沈海热电",position:'辽宁省沈阳市大东区',region:'东北大区'},
                {city:'辽宁',name: "盘锦",value: 2*35,crew:'2*35',company:"华润电力盘锦",position:'辽宁省盘锦市大洼区后胡嘴子',region:'东北大区'},
                {city:'浙江',name: "温州苍南",value: 2*100,crew:'2*100',company:"华润电力(温州)有限公司",position:'浙江省温州市苍南县龙港镇',region:'东南大区'},
                {city:'河北',name: "沧州",value: 2*33,crew:'2*33',company:"沧州华润热电",position:'河北省沧州市运河区北环西路',region:'华北大区'},
                {city:'河北',name: "曹妃甸",value: 2*30,crew:'2*30',company:"唐山曹妃甸",position:'河北省唐山市曹妃甸工业区',region:'华北大区'},
                {city:'河北',name: "唐山丰润",value: 2*35,crew:'2*35',company:"华润电力唐山丰润",position:'河北省唐山市路北区韩城镇',region:'华北大区'},
                {city:'河北',name: "渤海新区",value: 2*35,crew:'2*35',company:"渤海华润电力",position:'河北省沧州市临港经济技术开发区',region:'华北大区'},
                {city:'山东',name: "菏泽",value: 2*60,crew:'2*60',company:"华润热电（菏泽）有限公司",position:'山东省菏泽市东明县武胜桥镇',region:'华东大区'},
                {city:'安徽',name: "阜阳",value: 2*64,crew:'2*64',company:"阜阳华润电力有限公司",position:'安徽省阜阳市颍泉区',region:'华东大区'},
                {city:'广东',name: "海丰",value: 2*100,crew:'2*100',company:"华润电力(海丰)有限公司",position:'广东省汕尾市海丰县小漠镇',region:'华南大区'},
                {city:'广西',name: "贺州",value: 2*100,crew:'2*100',company:"华润电力(贺州)有限公司",position:'广西贺州市贺州大道',region:'华南大区'},
                {city:'湖南',name: "鲤鱼江A",value: 2*30,crew:'2*30',company:"华润电力湖南有限公司",position:'湖南省资兴市鲤鱼江镇',region:'华南大区'},
                {city:'湖南',name: "鲤鱼江B",value: 2*65,crew:'2*65',company:"湖南华润电力鲤鱼江有限公司",position:'湖南省资兴市鲤鱼江镇',region:'华南大区'},
                {city:'广东',name: "广州热电",value: 2*30,crew:'2*30',company:"广州华润热电有限公司",position:'广州市南沙区黄阁镇',region:'华南大区'},
                {city:'湖北',name: "湖北一期",value: 2*30,crew:'2*30',company:"华润电力湖北有限公司",position:'湖北省赤壁市陆水大道99号',region:'华中大区'},
                {city:'湖北',name: "湖北二期",value: 2*100,crew:'2*100',company:"华润电力湖北有限公司二期",position:'湖北省赤壁市陆水大道99号',region:'华中大区'},
                {city:'湖南',name: "涟源",value: 2*30,crew:'2*30',company:"华润电力(涟源)有限公司",position:'湖南省娄底市涟源市',region:'华中大区'},
                {city:'湖北',name: "宜昌",value: 2*35,crew:'2*35',company:"华润电力(宜昌)有限公司",position:'湖北省宜昌市猇亭区',region:'华中大区'},
                {city:'江苏',name: "徐州一、二期",value: 4*32,crew:'4*32',company:"徐州华润电力有限公司",position:'江苏省徐州市华润路1号',region:'江苏大区'},
                {city:'江苏',name: "南京热电",value: 2*60,crew:'2*60',company:"江苏南热发电有限责任公司",position:'江苏省南京市六合区',region:'江苏大区'},
                {city:'江苏',name: "宜兴",value: 2*15,crew:'2*6',company:"宜兴华润热电有限公司",position:'江苏省无锡市宜兴市环保科技工业园',region:'江苏大区'},
                {city:'江苏',name: "镇江",value: 2*63+2*13.5,crew:'2*63+2*13.5',company:"江苏镇江发电有限公司",position:'江苏省镇江市丹徒区高资镇',region:'江苏大区'},
                {city:'湖北',name: "华鑫",value: 2*33,crew:'2*33',company:"徐州华鑫发电有限公司",position:'徐州市铜山区茅村工业园',region:'江苏大区'},
                {city:'江苏',name: "常熟",value: 2*65,crew:'2*65',company:"华润电力(常熟)有限公司",position:'江苏省常熟市珠江东路',region:'江苏大区'},
                {city:'江苏',name: "化工园一、二期",value: 2*5.5+2*30,crew:'2*5.5+2*30',company:"南京化学工业园热电有限公司",position:'南京市雨花经济开发区',region:'江苏大区'},
                {city:'江苏',name: "南京板桥",value: 2*33,crew:'2*33',company:"南京华润热电有限公司",position:'江苏省徐州市铜山区',region:'江苏大区'},
                {city:'江苏',name: "徐州三期",value: 2*100,crew:'2*100',company:"铜山华润电力有限公司",position:'江苏省徐州市铜山区',region:'江苏大区'},
                {city:'贵州',name: "六枝",value: 2*66,crew:'2*66',company:"六枝华润电力",position:'贵州省六盘水市六枝特区岩脚镇',region:'西南大区'},
                {city:'河南',name: "首阳山",value: 2*60,crew:'2*60',company:"河南华润电力首阳山有限公司",position:'河南省偃师市首阳山镇',region:'中西大区'},
                {city:'河南',name: "焦作",value: 2*66,crew:'2*66',company:"华润电力焦作有限公司",position:'河南省焦作市博爱县柏山镇',region:'中西大区'},
                {city:'河南',name: "登封一、二期",value: 2*32+2*60,crew:'2*32+2*60',company:"华润电力登封有限公司",position:'河南省登封市东刘碑村',region:'中西大区'},
                {city:'河南',name: "洛阳",value: 2*15,crew:'2*5',company:"洛阳华润环保能源有限公司",position:'河南省偃师市城关工业区',region:'中西大区'},
                {city:'河南',name: "古城",value: 2*30,crew:'2*30',company:"河南华润电力古城有限公司",position:'河南驻马店市驿城区古城乡',region:'中西大区'}]
              });
          })

      // function slider(){
        var speed=1;
        // var slide=document.getElementById("slide");
        const slide00 = this.$refs.slide00;
        const slide01 = this.$refs.slide01;
        const slide02 = this.$refs.slide02;
        const slide10 = this.$refs.slide10;
        const slide11 = this.$refs.slide11;
        const slide12 = this.$refs.slide12;
        const slide20 = this.$refs.slide20;
        const slide21 = this.$refs.slide21;
        const slide22 = this.$refs.slide22;
        // var slide2=document.getElementById("slide2");
        // var slide1=document.getElementById("slide1");
        slide02.innerHTML=slide01.innerHTML
        function Marquee0(){
          if(slide02.offsetTop-slide00.scrollTop<=0)
          slide00.scrollTop-=slide01.offsetHeight
          else{
            slide00.scrollTop++
          }
        }
        var MyMar0=setInterval(Marquee0,speed)
        slide00.onmouseover=function(){clearInterval(MyMar0)}
        slide00.onmouseout=function(){MyMar0=setInterval(Marquee0,speed)}


        slide12.innerHTML=slide11.innerHTML
        function Marquee1(){
          if(slide12.offsetTop-slide10.scrollTop<=0)
          slide10.scrollTop-=slide11.offsetHeight
          else{
            slide10.scrollTop++
          }
        }
        var MyMar1=setInterval(Marquee1,speed)
        slide10.onmouseover=function(){clearInterval(MyMar1)}
        slide10.onmouseout=function(){MyMar1=setInterval(Marquee1,speed)}


        slide22.innerHTML=slide21.innerHTML
        function Marquee2(){
          if(slide22.offsetTop-slide20.scrollTop<=0)
          slide20.scrollTop-=slide21.offsetHeight
          else{
            slide20.scrollTop++
          }
        }
        var MyMar2=setInterval(Marquee2,speed)
        slide20.onmouseover=function(){clearInterval(MyMar2)}
        slide20.onmouseout=function(){MyMar2=setInterval(Marquee2,speed)}
      // }
      // slider();

      }
    },
    mounted(){
      this.init()
    },
    components:{
      cake1,cake2,cake3,chart1,chart2,chart3,chart4,Row,Col,
    }
  }
  window.onresize = function(){
       myChartMap.resize()
    }
</script>

<style scoped>
  @font-face{
  font-family: myFirstFont;
  src: url('./fonts/PKMN-Mystery-Dungeon.ttf')
  }

  #monitor{
    height: 100%
  }
  .header{
    height: 8vh;
    width: 100%;
  }
  .iconheader{
    font-family: myFirstFont;
    position: absolute;
    top: 47px;
    left: 54px;
    width: 300px;
    height: 66px;
    display: flex;
    justify-content: space-around;
  }
  /* img{
    width: 66px;
    height: 25px;
    margin: 21px 0 0 12px;
  } */
  /* .iconheader_txt{
    line-height: 66px;
    font-size: 20px;
  } */
  .iconheader>div{

  }
  .header h3{
    font-size: 36px;
    text-align: center;

  }
  .container{

    height: 90vh;
  }
  /* .container>div{
    height: 100%;
  } */
  .container-left{
    width: 100%;
    height: 54vh;
    /* float: left; */
    /* border: 1px solid #ccc; */
  }
  .container_bottom{
    height: 32vh;
  }
  .h100{
    height: 88vh;
    display: flex;
    flex-direction: column;
  }
  .cityname{
    color: #00D8FF!important
  }
  .rang_s{
    width: 70px;
    height: 70px;
    position: absolute;
    /* background: url(../../static/img/serve.png) no-repeat; */
    background-size: 100% 100%;
    right: 18px;
  }
  .rangroll{
    -webkit-transition-property: roll_continue;
    -webkit-transition-duration: 1s;
    -moz-transition-property: -moz-transform;
    -moz-transition-duration: 1s;
    -webkit-animation: rotate 3s linear infinite;
    -moz-animation: rotate 3s linear infinite;
    -o-animation: rotate 3s linear infinite;
    animation: rotate 3s linear infinite;}
    @-webkit-keyframes rotate{from{roll_continue: rotate(0deg)}
      0%{}
      10%{roll_continue: rotate(-90deg)}
      20%{roll_continue: rotate(7200deg)}
      40%{roll_continue: rotate(180deg)}
      60%{roll_continue: rotate(360deg)}
      80%{roll_continue: rotate(-360deg)}
      100%{roll_continue: rotate(360deg)}
    }
    @-moz-keyframes rotate{from{-moz-transform: rotate(0deg)}
      0%{}
      10%{-moz-transform: rotate(-90deg)}
      20%{-moz-transform: rotate(7200deg)}
      40%{-moz-transform: rotate(180deg)}
      60%{-moz-transform: rotate(360deg)}
      80%{-moz-transform: rotate(-360deg)}
      100%{-moz-transform: rotate(360deg)}
    }
    @-o-keyframes rotate{from{-o-transform: rotate(0deg)}
      0%{}
      10%{-o-transform: rotate(-90deg)}
      20%{-o-transform: rotate(7200deg)}
      40%{-o-transform: rotate(180deg)}
      60%{-o-transform: rotate(360deg)}
      80%{-o-transform: rotate(-360deg)}
      100%{-o-transform: rotate(360deg)}
      }
    @keyframes rotate{from{transform: rotate(0deg)}
      0%{}
      10%{transform: rotate(-90deg)}
      20%{transform: rotate(7200deg)}
      40%{transform: rotate(180deg)}
      60%{transform: rotate(360deg)}
      80%{transform: rotate(-360deg)}
      100%{transform: rotate(360deg)}
  }
  .rang_s0{
    width: 70px;
    height: 70px;
    position: absolute;
    right: 0;
    background: url(../../static/img/serve.png) no-repeat;
    background-size: 100% 100%;
  }
  .rang_ss1{
    position: absolute;
    top:22vh;
    /* right: 0 */
  }
  .rang_ss2{
    position: absolute;
    top:44vh
  }
  .rang_ss3{
    position: absolute;
    top:66vh
  }
  .rang_s1{
    width: 70px;
    height: 70px;
    position: absolute;
    /* top: 22vh; */
    right: 0;
    background: url(../../static/img/serve.png) no-repeat;
    background-size: 100% 100%;
  }
  .abroll{
    position: absolute;
    padding: 15px 11px;
    right: 0;
    z-index: 33;
   }
  .rang_s2{
    width: 70px;
    height: 70px;
    position: absolute;
    /* top: 22vh; */
    right: 0;
    background: url(../../static/img/serve_pay.png) no-repeat;
    background-size: 100% 100%;
  }
  .rang_s3{
    width: 70px;
    height: 70px;
    position: absolute;
    /* top: 22vh; */
    right: 0;
    background: url(../../static/img/serve.png) no-repeat;
    background-size: 100% 100%;
  }
  .triangle{
    width: 15px;
    height: 15px;
    position: absolute;
    right: -15px;
    top: 28px;

  }
  .slide{
    position: absolute;
    height: 120px;
    width: 25px;
    right: 14px;
    top: 8vh;
    overflow: hidden;
  }
  .container_bottom{
    background: url(../../static/img/hose_bg.png) no-repeat;
    background-size: 100% 100%;
    display: flex;
    padding: 2vh 3vh 0 3vh;
  }
  .roll{
    width: 33.3%;
    /* justify-content: space-between; */
    height: 25vh;
    background: url(../../static/img/bottom_roll.png) no-repeat;
    background-position: bottom;
    background-size: 80% 35%;
  }
  .roll_header p{
    text-align: center;
    font-size: 14px;
    position: absolute;
    width: 100%;
    top: 4vh;
    color: #EAEAEA;
  }
  .roll_header p strong{
    font-size: 30px;
  }
  .roll_top{
    width: 100%;
    margin-top: 7vh;
    height: 12vh;
    display: flex;
    flex-wrap:wrap-reverse;
    justify-content: center;
    /* align-items:flex-end; */
  }
  .roll_span{
    width: 23%;
    /* height: 45px; */
    background: url(../../static/img/roll_home.png) no-repeat;
    background-size: 100% 100%;
  }
  .hose_text{

  }
  .hose_text h3{
    font-size: 50px;
    text-align: center;
    color: #fff;
    line-height: 5vh;
    margin-bottom: 1vh;
  }
  .hose_text p{
    text-align: center;
    color: #fff;
  }
  .orderin{
    height: 16vh;
    width: 100%;
    background: url(../../static/img/border.png) no-repeat;
    background-size: 100% 100%;
  }
  @font-face
  {
    font-family: myFirstFont;
    src: url('./fonts/PKMN-Mystery-Dungeon.ttf');
  }
  .orderin p{
    height: 16vh;
    line-height: 16vh;
    color: #fff;
    font-family: myFirstFont;
    text-align: center;
  }
  .orderin p span{
    font-size: 100px;

  }
  /* .outdiv1{
    position: absolute;
    z-index: 666;
    left: 1%;
    top: 1vh;
    width: 200px;
    height: 200px;
    background: url(/static/img/serve.e16de54.png) no-repeat;
    background-size: 100% 100%;
    animation: myactive1 5s linear infinite;
  }
  @keyframes myactive1{
    from{
      transform: translate(1%,1vh) scale(1) rotate(7200deg);
    }
    to{
      transform: translate(800px,22vh) scale(0) rotate(0deg);
    }
  } */

  /* @keyframes myactive11{
    from{
      transform: ;
    }
    to{
      transform:;
    }
  } */
  /* //动画 */
  /* .rang_s0{
    animation-iteration-count:1;
    transition-duration: 10s;
    animation: mymove 10s linear 3;
  }
  @keyframes mymove{
    from{
      transform: translate(-600px,100px);
      transform: rotate(7200deg);
    }
    to{
      transform: translate(200px,300px);
      transform: rotate(-7200deg);
    }

  } */

</style>
