<template>
  <div>
    <div class="chart4_tittle">
      <div class="chart4_tittle1">
        <p><img src="../../../static/img/tittle_style.png" style="left:0;" alt="">订单流入趋势图<img src="../../../static/img/excuse.png">
          <span style="margin-left:5%;position:absolute:right:8%;font-size:12px;color:rgb(17, 150, 186)">
            <img style="position:absolute;top:0.2vh" src="../../../static/img/tittle_time.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更新时间:2018/07/24 14:00</span></p>
      </div>

    </div>
    <div ref="chart" class="chart chart4">

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
        const container = this.$refs.chart;
        let mychart4 = echarts.init(container);
        // console.log(mychart4);
        var rate1 = 66;
        let  option = {
            grid: {
                top: '18%',
                left: '0%',
                right: '0%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                  lineStyle:{
                    color:['#00B4FF']
                  }
                },
                axisTick: {
                    show: true,
                    lineStyle:{
                      color:['#0ff'],
                      width:0.4
                    }
                },
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            },
            yAxis: {
                type: 'value',
                name:'(件)',
                nameTextStyle:{
                  padding: [15, 24, 0, 0]
                },
                splitLine: {
                  show:false,
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                axisLine: {
                  lineStyle:{
                    color:['#00B4FF']
                  }
                },
                axisTick: {
                    show: true,
                    lineStyle:{
                      color:['#0ff'],
                      width:0.4
                    }
                },
                axisLabel: {
                    formatter: '{value} k'
                }
            },
            series: [{
                data: [3, 5, 3, 5, 3, 5, 3,5,8,5],
                type: 'line',
                smooth: true,
                symbol: "image://../../../static/img/point2.png",
                symbolSize:12,
                itemStyle: {
                    normal: {
                        color: "#00B4FF"
                    },
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00B4FF'
                        }, {
                            offset: 1,
                            color: 'rgb(35,25,69)'
                        }])
                    }
                },
            }]
        }
        mychart4.setOption(option);
      }
    },
    mounted(){
      this.init();
    }
  }
  // window.onresize = function(){
  //                   chart4Chart.resize()
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
  .chart4_tittle{
    display: flex;
    justify-content: space-between;
    color: #fff;
  }
  .chart4_tittle>div{
    width: 100%;
  }
  .chart4_tittle p{
    border-top: 2px solid rgba(0, 96, 255, 0.3);
    border-bottom:2px solid rgba(0, 96, 255, 0.3);
    background: rgba(30, 34, 84, 0.5);
    padding-left: 15px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
  }
  .chart4_tittle1,.chart4_tittle2{
    height: 2vh;
    line-height: 2vh;
  }
  p>img{
    height: 2.9vh;
    position: absolute;
    top: -0.5vh;
    right: -4%;
  }
  .chart{
    height: 18vh;
    display: flex;
    position: relative;
  }
  .chart4{
    height: 18vh;
    width: 100%;
  }
  .chart2{
    height: 18vh;
    width: 100%;
  }
  .roll_per1{
    width: 20%;
    position: absolute;
    top: 6vh;
    left: 15%;
  }
  .roll_per1 img{
    width: 100%;
    background-color: #57AEFF;
    border-radius: 50%;
  }
</style>
