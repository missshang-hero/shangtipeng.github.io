<template>
  <div>
    <div class="header"><span>未拣货分析图</span><span>更新时间：2018/07/23</span></div>
    <div class="checkboxGroup">
      <RadioGroup v-model="phone">
        <Radio label="30min">
          <span>30 min</span>
        </Radio>
        <Radio label="60min">
          <span>60 min</span>
        </Radio>
        <Radio label="2h">
          <span>2 h</span>
        </Radio>
      </RadioGroup>
    </div>
    <!--<Table size="small" width="350" stripe :columns="columns1" :data="data1"></Table>-->
    <table width="350" height="240" cellspacing="0" border="0">
      <thead style="background: #c8c8c8;">
      <tr>
        <td v-for="(item,index) in columns1" style="text-align: center;padding: 5px 0;">{{item.title}}</td>
      </tr>
      </thead>
      <tbody>
      <tr :class="{'emphasis':(index+1)%2==0}" style="text-align: center;" v-for="(data,index) in data1">
        <td>{{data.index}}</td>
        <td>{{data.warehouse}}</td>
        <td>{{data.noPickUp}}</td>
        <td>{{data.noPickUpPercent}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import {Table,RadioGroup,Radio,Icon} from 'iview'
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
        phone:'2h'
      }
    },
    components:{
      Table,RadioGroup,Radio,Icon
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
  .emphasis{
    background: #f4f4f4;
  }
</style>
