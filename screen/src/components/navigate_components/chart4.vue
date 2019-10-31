<template>
  <div>
    <div style="width: 350px;height: 325px" ref="chart2"></div>
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
    data () {
      return {
        columns1: [
          {
            title: '序号',
            key: 'index'
          },
          {
            title: '仓库',
            key: 'warehouse'
          },
          {
            title: '未拣货',
            key: 'noPickUp'
          },
          {
            title: '未拣货占比',
            key: 'noPickUpPercent'
          }
        ],
        data1: [
          {
            index: 1,
            warehouse: '常州武进仓',
            noPickUp: 300,
            noPickUpPercent: 10+'%'
          },
          {
            index: 2,
            warehouse: '上海浦仓西',
            noPickUp: 400,
            noPickUpPercent: 20+'%'
          },
          {
            index: 3,
            warehouse: '宁波镇海仓',
            noPickUp: 200,
            noPickUpPercent: 10+'%'
          },
          {
            index: 4,
            warehouse: '嘉兴桐乡仓',
            noPickUp: 450,
            noPickUpPercent: 40+'%'
          },
          {
            index: 5,
            warehouse: '宁波综合仓',
            noPickUp: 210,
            noPickUpPercent: 10+'%'
          },
          {
            index: 6,
            warehouse: '宁波综合仓',
            noPickUp: 260,
            noPickUpPercent: 10+'%'
          },
        ],
        phone:'30min'
      }
    },
    methods:{
      init:function () {
        const container = this.$refs.chart2;
        let myChart = echarts.init(container);
        console.log(myChart);
        let option = {
          color: ['#8d8d8d', '#4162ff'],
          tooltip: {
            trigger: 'axis',
            formatter:'{b}<br />{a}:{c}<br />{a1}:{c1}',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['货量', '占比'],
            x:'left'
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {show: false},
              data: ['仓库1', '仓库2', '仓库3', '仓库4']
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisTick: {show: false},
              axisLine:{show:false},
              splitLine:{show:false},
              min:0,max:700
            },
            {
              type:'value',
              axisTick: {show: false},
              axisLine:{show:false},
              splitLine:{show:false},
              min:0,max:100
              // data: [0,20,40,60,80,100]
            }
          ],
          series: [
            {
              name: '货量',
              type: 'bar',
              barGap: 0,
              data: [320, 332,201,237]
            },
            {
              name: '占比',
              type: 'bar',
              yAxisIndex:1,
              data: [10, 20,40,30]
            },
          ]
        }
        myChart.setOption(option)
      }
    },
    mounted(){
      this.init();
    }
  }
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
</style>
