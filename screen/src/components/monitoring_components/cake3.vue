<template>
  <div>
    <div class="cake1_tittle">
      <div class="cake1_tittle1">
        <h3>累计打单率<img src="../../../static/img/excuse.png"></h3>
      </div>
      <div class="cake1_tittle2">
        <h3>有效打单率<img src="../../../static/img/excuse.png"></h3>
      </div>
    </div>
    <div class="cake">
      <div ref="cake3" class="cake3">

      </div>
      <div class="roll_per1">
        86%
      </div>
      <div ref="cake2" class="cake2">

      </div>
      <div class="roll_per2">
        46%
      </div>
    </div>
  </div>

</template>
<script>
  let echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/bar');
  require('echarts/lib/component/toolbox');
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  require('echarts/lib/component/legend');
  export default {
    methods:{
      init:function () {
        const container = this.$refs.cake3;
        let mychart1 = echarts.init(container);
        // console.log(myChart1);
        var rate1 = 66;
        let placeHolderStyle = {
            normal: {
                label: {
                    show: false,
                    position: "center"
                },
                labelLine: {
                    show: false
                },
                color: "#dedede",
                borderColor: "#dedede",
                borderWidth: 0
            },
            emphasis: {
                color: "#dedede",
                borderColor: "#dedede",
                borderWidth: 0
            }
        };
        let option1 = {
          tooltip : {
            show:false
          },
          series: [
            {
              type: 'gauge',
              data:[{value:rate1}],
              splitLine:{
                show:false
              },
              axisTick:{
                show:false
              },
              axisLabel:{
                distance: -50
              },
              axisLine:{
                lineStyle: {
                  width:20,
                  color: [
                    [0.2, '#715394'],
                    [0.8, '#256BAE'],
                    [1, '#0B95BA']
                  ]
                }
              },
              detail:{
                show:false
              },
              clockwise: true,
              splitNumber:5,
              pointer:{
                length:'100%',
                width:3
              },
              itemStyle:{
                color:'#FFFD62'
              }
            },
            {
              name: '辅助', //建立环形图辅助界面
              type: 'pie',
              hoverAnimation: false,
              startAngle: 225 ,
              center: ["50%", '50%'],
              radius: ['56%', '75%'],
              labelLine: {
                show: false
              },
              z:2,
              data: [{
                value: (100+1/3*100)*(rate1-2)/100,
                itemStyle: {
                  normal: {
                    color: '#EF2888',
                    borderWidth: 0
                  }
                }
              },{
                value: (100+1/3*100)*(100-rate1)/100,
                itemStyle: {
                  normal: {
                    color: 'transparent'
                  }
                }
              },{
                value: 1/3*100,
                itemStyle: {
                  normal: {
                    color: 'rgba(0,0,0,0)'
                  }
                }
              }]
            }
          ],
          graphic:[{
            type:'image',
            left:'27%',
            top:'27%',
            scale:[0.9,0.9],
            style: {
             // image:img_url
            },
            z:3
          },{
            type:'text',
            left:'center',
            top:'center',
            style: {
             text:rate1+'%',
              fill:'#fff',
              font:'.5em "STHeiti", sans-serif'
            },
            z:12
          }]
        };
        if(rate1<=20){
           a(option1,mychart1);
         };
         if(rate1>20&&rate1<=80){
           b(option1,mychart1);
         };
         if(rate1>80&&rate1<=100){
          c(option1,mychart1);
         }
         function a(option1,mychart1){
           mychart1.setOption(option1);
         };
        function b(option1,mychart1) {
          option1.series[1].data[0].value = (100+1/3*100)*18/100;
          option1.series[1].data[0].itemStyle.normal.color='#0060FF';
          option1.series[1].data[1].value =(100+1/3*100)*(rate1-18)/100;
          option1.series[1].data[1].itemStyle.normal.color='#00AEFF';
          option1.series[1].data[2].value = (100+1/3*100)*(100-rate1+10)/100;
          option1.series[1].data[2].itemStyle.normal.color='transparent';
          option1.series[1].data.push({value:1/3*100,itemStyle:{normal:{color:'transparent'}}});
          mychart1.setOption(option1);
        };
        function c(option1,mychart1) {
          option1.series[1].data[0].value = (100+1/3*100)*20/100;
          option1.series[1].data[0].itemStyle.normal.color='#0060FF';
          option1.series[1].data[1].value = (100+1/3*100)*60/100;
          option1.series[1].data[1].itemStyle.normal.color='#00AEFF';
          option1.series[1].data[2].value = (100+1/3*100)*(rate1-80)/100;
          option1.series[1].data[2].itemStyle.normal.color='#00FFFF';
          option1.series[1].data.push({value:(100+1/3*100)*(100-rate1)/100,itemStyle:{normal:{color:'transparent'}}});
          option1.series[1].data.push({value:1/3*(100+1/3*100),itemStyle:{normal:{color:'transparent'}}});
          mychart1.setOption(option1);
        };


        //第二个仪表
        var rate2 = 46;
        const container2 = this.$refs.cake2;
        let mychart2 = echarts.init(container2);
        // console.log(myChart1);
        let placeHolderStyle2 = {
            normal: {
                label: {
                    show: false,
                    position: "center"
                },
                labelLine: {
                    show: false
                },
                color: "#dedede",
                borderColor: "#dedede",
                borderWidth: 0
            },
            emphasis: {
                color: "#dedede",
                borderColor: "#dedede",
                borderWidth: 0
            }
        };
        let option2 = {
          tooltip : {
            show:false
          },
          series: [
            {
              type: 'gauge',
              data:[{value:rate2}],
              splitLine:{
                show:false
              },
              axisTick:{
                show:false
              },
              axisLabel:{
                distance: -50
              },
              axisLine:{
                lineStyle: {
                  width:20,
                  color: [
                    [0.2, '#715394'],
                    [0.8, '#256BAE'],
                    [1, '#0B95BA']
                  ]
                }
              },
              detail:{
                show:false
              },
              clockwise: true,
              splitNumber:5,
              pointer:{
                length:'100%',
                width:3
              },
              itemStyle:{
                color:'#FFFD62'
              }
            },
            {
              name: '辅助', //建立环形图辅助界面
              type: 'pie',
              hoverAnimation: false,
              startAngle: 225 ,
              center: ["50%", '50%'],
              radius: ['56%', '75%'],
              labelLine: {
                show: false
              },
              z:2,
              data: [{
                value: (100+1/3*100)*(rate2-2)/100,
                itemStyle: {
                  normal: {
                    color: '#EF2888',
                    borderWidth: 0
                  }
                }
              },{
                value: (100+1/3*100)*(100-rate2)/100,
                itemStyle: {
                  normal: {
                    color: 'transparent'
                  }
                }
              },{
                value: 1/3*100,
                itemStyle: {
                  normal: {
                    color: 'rgba(0,0,0,0)'
                  }
                }
              }]
            }
          ],
          graphic:[{
            type:'image',
            left:'27%',
            top:'27%',
            scale:[0.9,0.9],
            style: {
             // image:img_url
            },
            z:3
          },{
            type:'text',
            left:'center',
            top:'center',
            style: {
             text:rate2+'%',
              fill:'#fff',
              font:'.5em "STHeiti", sans-serif'
            },
            z:12
          }]
        };
        if(rate2<=20){
           a(option2,mychart2);
         };
         if(rate2>20&&rate2<=80){
           b(option2,mychart2);
         };
         if(rate2>80&&rate2<=100){
          c(option2,mychart2);
         }
         function a(option2,mychart2){
           mychart2.setOption(option2);
         };
        function b(option2,mychart2) {
          option2.series[1].data[0].value = (100+1/3*100)*18/100;
          option2.series[1].data[0].itemStyle.normal.color='#0060FF';
          option2.series[1].data[1].value =(100+1/3*100)*(rate2-18)/100;
          option2.series[1].data[1].itemStyle.normal.color='#00AEFF';
          option2.series[1].data[2].value = (100+1/3*100)*(100-rate2+10)/100;
          option2.series[1].data[2].itemStyle.normal.color='transparent';
          option2.series[1].data.push({value:1/3*100,itemStyle:{normal:{color:'transparent'}}});
          mychart2.setOption(option2);
        };
        function c(option1,mychart1) {
          option2.series[1].data[0].value = (100+1/3*100)*20/100;
          option2.series[1].data[0].itemStyle.normal.color='#0060FF';
          option2.series[1].data[1].value = (100+1/3*100)*60/100;
          option2.series[1].data[1].itemStyle.normal.color='#00AEFF';
          option2.series[1].data[2].value = (100+1/3*100)*(rate2-80)/100;
          option2.series[1].data[2].itemStyle.normal.color='#00FFFF';
          option2.series[1].data.push({value:(100+1/3*100)*(100-rate2)/100,itemStyle:{normal:{color:'transparent'}}});
          option2.series[1].data.push({value:1/3*(100+1/3*100),itemStyle:{normal:{color:'transparent'}}});
          mychart2.setOption(option2);
        };
      }
    },
    mounted(){
      this.init();
    }
  }
  // window.onresize = function(){
  //                   cake1Chart.resize()
  //   }
</script>
<style scoped>
  .header{
    background: #c8c8c8;
    padding: 5px 10px 5px 8px;
    display: flex;
    justify-content: space-between;
  }
  .checkboxGroup{
    display: flex;
    justify-content: flex-end;
  }
  .cake1_tittle{
    display: flex;
    justify-content: space-between;
    color: rgb(17, 150, 186);
  }
  .cake1_tittle>div{
    width: 46%;
  }
  .cake1_tittle h3{
    border-top: 2px solid rgba(0, 96, 255, 0.3);
    border-bottom:2px solid rgba(0, 96, 255, 0.3);
    background: rgba(30, 34, 84, 0.5);
    padding-left: 6px;
    position: relative;
  }
  .cake1_tittle1,.cake1_tittle2{
    height: 2vh;
    line-height: 2vh;
  }
  h3>img{
    height: 2.9vh;
    position: absolute;
    top: -0.5vh;
    right: -4%;
  }
  .cake{
    height: 18vh;
    display: flex;
    position: relative;
  }
  .cake3{
    height: 18vh;
    width: 50%;
  }
  .cake2{
    height: 18vh;
    width: 50%;
  }
  .roll_per1{
    width: 20%;
    position: absolute;
    top: 6vh;
    left: 15%;
  }
  .roll_per1{
    width: 70px;
    height: 70px;
    position: absolute;
    top: 5.6vh;
    left: 16.2%;
    background: url(../../../static/img/rollpersent_bg.png) no-repeat;
    background-size: 100% 100%;
    text-align: center;
    line-height: 70px;
    color: #fff;
    font-size: 20px;
  }
  .roll_per2{
    width: 70px;
    height: 70px;
    position: absolute;
    top: 5.6vh;
    right: 15.6%;
    background: url(../../../static/img/rollpersent_bg.png) no-repeat;
    background-size: 100% 100%;
    text-align: center;
    line-height: 70px;
    color: #fff;
    font-size: 20px;
  }
</style>
