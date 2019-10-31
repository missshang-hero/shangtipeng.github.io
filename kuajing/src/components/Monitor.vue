                                                                                                                                                                                                                                                    <template>
  <!-- <Layout :style="{minHeight: '100vh',padding:'0 10px'}" class="hh"> -->
  <Layout :style="{height: '1080px'}">
    <!-- 最外层盒子 -->
    <div id="monitor" class="">
      <div class="header">
        <!-- <h3><img src="../../static/img/bgtittle.png" alt=""></h3> -->
      </div>
      <div class="iconheader">
        <div class="">
          <img src="../../static/img/logo3.png" alt="">
        </div>
      </div>
      <!-- 页面主体部分区块 -->
      <Row class="container">
        <!-- <Col span="6" style="height:42vh;padding-left:30px;position:relative"> -->
            <div class="divmodal box-bor" style="height:450px;float:left;background-color: RGBA(2, 26, 55, .75);" :class="{'divmodal11': maphide, 'divmodal1': mapshow,'divmodal111':mapthree}">
              <!-- <div class="left_header hh"> -->
            <div class="left_header" style="display:flex;flex-direction:column;">
              <div class="earn_tittle">
                <p style="padding-left:5px;"><img class="imgh3" src="../../static/img/tittle_style.png" alt="" title="">总收入<span style="font-size:14px;color:rgb(36, 216, 255);display:inline-block;transform:scale(.8,.8);" ref="totalIncomeUnit">(元)</span>
                 <a>  <img class="imghover" src="../../static/img/excuse.png"></a>
                  <span style="position:absolute;right:40px;font-size:12px;color:rgb(17, 150, 186)">
                    <!-- <img style="position:absolute;top:0.4vh;width:24px;left:-10px" src="../../static/img/tittle_time.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据时间:{{time}}</span></p> -->
                    <img style="position:absolute;width:24px;left:-10px" src="../../static/img/tittle_time.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据时间:{{isNum === 0?time.currTim:time.lastTim}}</span></p>
                  </div>
                  <ul class="change_li">
                    <li @click="changeDate(0)" class="changeColor">当日</li>
                    <li @click="changeDate(1)">当月</li>
                    <li @click="changeDate(2)">历史</li>
                  </ul>
                  <ul class="trend" v-show="isTimeSlot!=0">
                    <li @click="timeSlot(1)">趋势</li>
                    <li @click="timeSlot(2)">累积</li>
                  </ul>
                  <div class="chart1 bg1">
                      <!--历史总收入图表-->
                      <div v-show="isNum!=0">
                          <div ref="chart1" style="height:170px;width:430px;" ></div>
                          
                      </div>

                      <!--当日总收入图表-->
                      <div class="today-tab" style="height:168px;" v-show="isNum==0">
                          <p>今日累计:</p>
                          <h2 id="orderinNum" class = "orderinNum" style="font-family: myFirstFont;font-size:100px;height:100px" :style="{color:todayColor}">{{totalData.length?totalData[0].left.today.todayFinal:'--'}}</h2>
                          <div style="font-size: 13px;">
                              <p style="padding:3px;border:1px solid #009CFF">上周同期：{{totalData.length?totalData[0].left.today.hisTodayFinal:'--'}}元</p>
                              <p style="padding:3px;border:1px solid #009CFF">同比：
                                  <!-- 新增 -->
                                  <span class="today-color" :class="{'today-color2':tqState}" >{{totalData.length?Math.abs(100 - totalData[0].left.today.persent).toFixed(2):'--'}}%</span>
                                  <span class="today-state" :class="{'rota90':tqState}"></span>
                              </p>
                          </div>
                      </div>
                      <!--当月总收入图表-->
                      <!-- <div class="uhide" style="height:168px;">

                      </div> -->

                  </div>
                  <div style="height:20px;"></div>
            </div>
            <div class="left_header" style="display:flex;flex-direction:column">
            <div class="earn_tittle">
              <p style="padding-left:5px;">
                <img class="imgh3" src="../../static/img/tittle_style.png" alt="" title="">产品收入<span style="font-size:14px;color: rgb(36, 216, 255);display:inline-block;transform:scale(.8,.8);">(万元)</span>
                <!-- 改 -->
                <span style="color:rgba(77,164,216,1)">时间进度
                    <span class="timeProgress">
                        <span class="progress"></span>
                        <span class="line"></span>
                        <span class="text">{{time_Persent}}%</span>
                    </span>
                </span>
                <a><img class="imghover" src="../../static/img/excuse.png"></a>
                <span style="position:absolute;right:40px;font-size:12px;color:rgb(17, 150, 186)">
                <!-- <img style="position:absolute;top:0.4vh;width:24px;left:-10px" src="../../static/img/tittle_time.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据时间:{{time}}</span></p> -->
                <img style="position:absolute;width:24px;left:-10px" src="../../static/img/tittle_time.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据时间:{{time.lastTim}}</span></p>
            </div>
            <div class="roll">
              <div class="cakes">
                <h3>电商小包</h3>
                <p class="cakes_persent">完成比(%)</p>
                <div ref="cake1" class="cakes_l">

                </div>
                <!-- 改 -->
                <div class="goods_ddetail">
                  <p :style="{color:cake1_color?'#EF2888':'RGBA(0, 241, 255, 1)'}"><span class="fon08">月累计:</span><span class="strongspan">{{totalData.length?((Number(totalData[0].left.elec.final).toFixed(2)).toString().split('.'))[0] :'--'}}</span><span class="fon08">.{{totalData.length?((Number(totalData[0].left.elec.final).toFixed(2)).toString().split('.'))[1] :'--'}}</span></p>
                  <p style="color:RGBA(0, 156, 255, 1)"><span class="fon08">月目标:</span><span class="strongspan">{{totalData.length?((Number(totalData[0].left.elec.flag).toFixed(2)).toString().split('.'))[0] :'--'}}</span><span class="fon08">.{{totalData.length?((Number(totalData[0].left.elec.flag).toFixed(2)).toString().split('.'))[1] :'--'}}</span></p>
                </div>
              </div>
              <div class="cakes">
                <h3>国际快件</h3>
                <p class="cakes_persent">完成比(%)</p>
                <div ref="cake2" class="cakes_l">

                </div>
                <div class="goods_ddetail">
                  <p :style="{color:cake2_color?'#EF2888':'RGBA(0, 241, 255, 1)'}"><span class="fon08">月累计:</span><span class="strongspan">{{totalData.length?((Number(totalData[0].left.inte.final).toFixed(2)).toString().split('.'))[0] :'--'}}</span><span class="fon08">.{{totalData.length?((Number(totalData[0].left.inte.final).toFixed(2)).toString().split('.'))[1] :'--'}}</span></p>
                  <p style="color:RGBA(0, 156, 255, 1)"><span class="fon08">月目标:</span><span class="strongspan">{{totalData.length?((Number(totalData[0].left.inte.flag).toFixed(2)).toString().split('.'))[0] :'--'}}</span><span class="fon08">.{{totalData.length?((Number(totalData[0].left.inte.flag).toFixed(2)).toString().split('.'))[1] :'--'}}</span></p>
                </div>
              </div>
              <div class="cakes">
                <h3>FBA</h3>
                <p class="cakes_persent">完成比(%)</p>
                <div ref="cake3" class="cakes_l">

                </div>
                <div class="goods_ddetail">
                  <p :style="{color:cake3_color?'#EF2888':'RGBA(0, 241, 255, 1)'}"><span class="fon08">月累计:</span><span class="strongspan">{{totalData.length?((Number(totalData[0].left.fba.final).toFixed(2)).toString().split('.'))[0] :'--'}}</span><span class="fon08">.{{totalData.length?((Number(totalData[0].left.fba.final).toFixed(2)).toString().split('.'))[1] :'--'}}</span></p>
                  <p style="color:RGBA(0, 156, 255, 1);"><span class="fon08">月目标:</span><span class="strongspan">{{totalData.length?((Number(totalData[0].left.fba.flag).toFixed(2)).toString().split('.'))[0] :'--'}}</span><span class="fon08">.{{totalData.length?((Number(totalData[0].left.fba.flag).toFixed(2)).toString().split('.'))[1] :'--'}}</span></p>
                </div>
              </div>
              <div class="cakes">
                <h3>联运</h3>
                <p class="cakes_persent">完成比(%)</p>
                <div ref="cake4" class="cakes_l">

                </div>
                <div class="goods_ddetail">
                  <p :style="{color:cake4_color?'#EF2888':'RGBA(0, 241, 255, 1)'}"><span class="fon08">月累计:</span><span class="strongspan">{{totalData.length?((Number(totalData[0].left.tran.final).toFixed(2)).toString().split('.'))[0] :'--'}}</span><span class="fon08">.{{totalData.length?((Number(totalData[0].left.tran.final).toFixed(2)).toString().split('.'))[1] :'--'}}</span></p>
                  <p style="color:RGBA(0, 156, 255, 1)"><span class="fon08">月目标:</span><span class="strongspan">{{totalData.length?((Number(totalData[0].left.tran.flag).toFixed(2)).toString().split('.'))[0] :'--'}}</span><span class="fon08">.{{totalData.length?((Number(totalData[0].left.tran.flag).toFixed(2)).toString().split('.'))[1] :'--'}}</span></p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <!-- <div class="left_header divmodal2 hh" style="height:42vh;"> -->
          <div class="left_header divmodal2 box-bor" style="height:450px;background-color:RGBA(2, 26, 55, .75)" :class="{'divmodal22': maphide, 'divmodal2': mapshow,'divmodal222':mapthree}">
            <div class="earn_tittle">
              <p style="padding-left: 5px;"><img class="imgh3" src="../../static/img/tittle_style.png" alt="" title="">进出口收入<span style="font-size:14px;color: rgb(36, 216, 255);display:inline-block;transform:scale(.8,.8);">(万元)</span>
                <a><img class="imghover" src="../../static/img/excuse.png"></a>
                <span style="position:absolute;right:40px;font-size:12px;color:rgb(17, 150, 186)">
                  <img style="position:absolute;width:24px;left:-10px" src="../../static/img/tittle_time.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据时间:{{time.lastTim}}</span></p>
            </div>
            <div class="monthwcblabel">时间进度(%)</div>
            <div class="timeblabel">月完成比(%)</div>


            <div class="earn_in" style="width:446px">
              <!-- <h4> <img src="../../static/img/plineout.png" alt=""> 出口</h4> -->
              <div class="earnindivm  fx-pj fx-ac">
                <div class="entryoutleftsty fx bg1">
                    <div class="entoutbg2"><div class="feiji"></div><div class="feijitxt"></div></div>
                    <ul class="fx fx-colu" style="flex-grow: 1;justify-content:space-between;">
                        <li class="c1" :class="{'redtxt':(totalData.length)&&(Number(totalData[0].left.excit.persent)<Number(totalData[0].left.excit.timePersent))?true:false}">
                            <span style="font-size: 26px;font-weight: bold;">{{totalData.length?Number(totalData[0].left.excit.final).toFixed(2) :'--'}}</span><br><span style="font-size: 13px">月累计(万元)</span>
                        </li>
                        <li class="c2">
                            <span style="font-size: 26px;font-weight: bold;">{{totalData.length?Number(totalData[0].left.excit.flag).toFixed(2) :'--'}}</span><br><span style="font-size: 13px">月目标(万元)</span>
                        </li>
                    </ul>
                </div>
                 <div class="earnindivmbottomBgh">
                    <div class="earnindivmbottomBg"></div>
                    <div ref="earnoutdivmbottom" class="earnindivmbottom">

                    </div>
                    <!-- <div class="timeblabel"><span>时间进度：{{totalData.length?Number(totalData[0].left.excit.timePersent)+'%' :'--'}}</span></div>
                    <div class="monthwcblabel"><span>月完成比：{{totalData.length?Number(totalData[0].left.excit.persent)+'%' :'--'}}</span></div> -->
                </div>


              </div>

            </div>
            <div class="earn_in" style="width:446px">
              <!-- <h4> <img src="../../static/img/plinein.png" alt=""> 进口</h4> -->
              <div class="earnindivm  fx-pj fx-ac">
                <div class="entryoutleftsty fx bg1">
                    <div class="entoutbg"><div class="jkfeiji"></div><div class="jkfeijitxt"></div></div>
                    <ul class="fx fx-colu" style="flex-grow: 1;justify-content:space-between;">
                        <li class="c1" :class="{'redtxt':(totalData.length)&&(Number(totalData[0].left.impo.persent)<Number(totalData[0].left.impo.timePersent))?true:false}">
                            <span style="font-size: 26px;font-weight: bold;">{{totalData.length?Number(totalData[0].left.impo.final).toFixed(2) :'--'}}</span><br><span style="font-size: 13px">月累计(万元)</span>
                        </li>
                        <li class="c2">
                            <span style="font-size: 26px;font-weight: bold;">{{totalData.length?Number(totalData[0].left.impo.flag).toFixed(2) :'--'}}</span><br><span style="font-size: 13px">月目标(万元)</span>
                        </li>
                    </ul>
                </div>
                <div class="earnindivmbottomBgh">
                    <div class="earnindivmbottomBg"></div>
                    <div ref="earnindivmbottom" class="earnindivmbottom">

                    </div>
                    <!-- <div class="timeblabel"><span>时间进度：{{totalData.length?Number(totalData[0].left.impo.timePersent)+'%' :'--'}}</span></div>
                    <div class="monthwcblabel"><span>月完成比：{{totalData.length?Number(totalData[0].left.impo.persent)+'%' :'--'}}</span></div> -->
                </div>
              </div>

            </div>
          </div>
        <!-- </Col> -->
        <!-- <col span="6">
        </Col> -->
        <!-- <Col span="12" class="h100"> -->
        <div class="mask" v-show="currBollType"></div>
            <!-- 地球仪 -->
          <div ref="wordmap" class="wordmap divmodal3 earth" :class="{'wordmapshow': maphide, 'wordmap': mapshow,'wordmaphide':mapthree}" id="wordmap">
            <!-- <chart2></chart2> -->
            <Map></Map>
          </div>
          <!-- 地图 -->
          <div ref="wordmaptoo" class="wordmap22" :class="{'wordmaphide': maphide, 'wordmap2': mapshow,'wordmapshow1':mapthree}">

          </div>
          <div class="changemap" :class="{'changemap2':isMap ,'changemap3':isEarth}">
            <!-- <a><img id="imgchange" src="../../static/img/map1.png" alt=""></a> -->
            <a style="display:block;height:100%;text-align:center;">
              <!-- 新增 -->
              <img id="imgchange" @click="imgchange2(1)" src="../../static/img/map2.png" style="margin-left: -3px;" v-if="currBollType" alt="">
              <img id="imgchange" @click="imgchange2(2)" src="../../static/img/map1.png" v-else alt="">
            </a>
            <!-- //:src="(mapthree==true)?'../../static/img/map2.png':'../../static/img/map1.png'" -->
          </div>
        <!-- </Col> -->
        <div class="divmodal divmodal4 box-bor" style="height:450px;background-color: RGBA(2, 26, 55, .75);" :class="{'divmodal44': maphide, 'divmodal4': mapshow,'divmodal444':mapthree}">
          <div class="earn_tittle">
            <p style="margin:0;padding-left: 10px;"><img class="imgh3" src="../../static/img/tittle_style.png" alt="" style="left:0" title="">月累计收入完成比排名(%)
              <a><img class="imghover" src="../../static/img/excuse.png"></a>
              <span style="position:absolute;right:50px;font-size:12px;color:rgb(17, 150, 186)">
                <img style="position:absolute;width:24px;left:-10px" src="../../static/img/tittle_time.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据时间:{{time.lastTim}}</span></p>
              </div>
              <div ref="chartright1" class="chartright1" style="margin-bottom:15px;">

              </div>
              <!-- <div class="" style="position:absolute;z-index:66;top: 5vh;color:RGBA(84, 179, 234, 1);margin-left:5px">
                (%)
              </div> -->
              <div class="left_header right_header" style="height:238px;">
              <div class="earn_tittle">
                <p  style="margin:0;padding-left: 10px;"><img class="imgh3" src="../../static/img/tittle_style.png" alt="" style="left:0" title="">月累计线路收入完成比排名（%）
                  <a><img class="imghover" src="../../static/img/excuse.png"></a>
                  <span style="position:absolute;right:50px;font-size:12px;color:rgb(17, 150, 186)">
                    <img style="position:absolute;width:24px;left:-10px" src="../../static/img/tittle_time.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据时间:{{time.lastTim}}</span></p>
              </div>
              <div ref="chartright2" class="chartright1">

              </div>
              <!-- <div class="" style="position:absolute;z-index:66;top: 4vh;color:RGBA(84, 179, 234, 1);margin-left:5px">
                (%)
              </div> -->
            </div>

        </div>
        <!-- padding-top:30px; -->
        <div class="left_header right_header divmodal divmodal5 box-bor" style="height:450px;background-color: RGBA(2, 26, 55, .75);">
              <div class="earn_tittle">
                <p  style="margin:0;padding-left: 10px;"><img class="imgh3" src="../../static/img/tittle_style.png" alt="" style="left:0" title="">{{cityName}}
                  <a><img class="imghover" src="../../static/img/excuse.png"></a>
                  <span style="position:absolute;right:50px;font-size:12px;color:rgb(17, 150, 186)">
                    <img style="position:absolute;width:24px;left:-10px" src="../../static/img/tittle_time.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据时间:{{time.lastTim}}</span></p>
              </div>
              <!-- 全国按钮 -->
              <span class="countrywide" @click="countrywide">全国</span>

              <div class="bgh">
                  <div class="bg2"></div>
                  <div class="bg"></div>
                  <div ref="chartright3" class="chartright1 chartright3"></div>
              </div>
              <!-- <div class="" style="position:absolute;z-index:66;top: 4vh;color:RGBA(84, 179, 234, 1);margin-left:5px">
                (%)
              </div> -->
            </div>
        <!-- <Col span="6" class="h100" style="padding-right:30px;height:91vh;margin-top:-3vh"> -->
          <!-- <div class="left_header right_header"> -->
          <!-- </div> -->
        <!-- </Col> -->
      </Row>
    </div>
  </Layout>

</template>

<script>
	import Map from './Map'
  import {Layout,Sider,Menu,MenuItem,Icon,Header,Content,Breadcrumb,BreadcrumbItem,Card,Row,Col} from 'iview'
  import $ from '../../static/jquery'
  // import http from './http/http'
  import axios from 'axios'
  import {formatDate} from './formate-date/index'
  // import chart3 from './monitoring_components/chart1'
  import chart2 from './monitoring_components/chart2'
  import {CountUp} from '../../static/countUp'
  let echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/scatter');
  require('echarts/lib/component/geo');
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  require('echarts/lib/component/legend');
  require('echarts/lib/component/visualMap');

  import '../../static/echarts-gl.min';
  import '../../static/word.js';
  // import {}'../../static/three.js';
  // import 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r73/three.min.js';
  // import '../../static/word.js';
  // require('../../static/china.json');
  require('echarts/map/js/china');
  //请求数据
  // console.log(features);
  let dataMap;
  let worehosetype,mywordrolltoo;
  // $.ajax('http://localhost/login',{"Access-Control-Allow-Headers": "application/x-www-form-urlencoded; charset=utf-8"},{account:'090360',password:'a123456.'});//355198
  /*$.ajax({
　　　　url : 'http://localhost/login',
　　　　type : 'POST',
　　　　data : JSON.stringify({account:'090360',password:'a123456.'}),
       headers : {
         contentType :"application/json; charset=utf-8",
       },
       // dataType : 'application/json',

　　　　success: function(data){　　　
          　　　　
　　　　　　}

    });*/

  export default {
    name: "Monitor",
    data(){
      return {
        time:{currTim:'--',lastTim:'--'},
        // maphide:'',
        // mapshow:'',
        // mapthree:'',
        maphide :false, //修改
        maphide_earth:false,
        maphide_map:false,
        mapshow :true,
        mapthree: false,

        totalData:[],//总数据
        isNum:0,//当日，当月，历史
        //当前显示地图类型，ture表示当前显示的是地球，false表示当前显示的时候地图
        currBollType:false,//修改

        isMap:false,
        isEarth:false,
        cityName:'全国产品结构',//城市名
        busProportionList:[],//事业部产品结构数据
        test:'',

        time_Persent:'',// 时间进度
        cake1_color:'',//cake1文字颜色
        cake2_color:'',
        cake3_color:'',
        cake4_color:'',

        chartearn1Name:'',// 颜色改变
        chartearn2Name:'',//改
        isAnimation:true,// 是否加载动画


        refresh:true, //圆环的提示框轮播

        isTimeSlot:0,//判断是当月、历史
        //月累计收入完成比排名，月累计线路收入完成比排名tooltip的定时器返回值，用于取消定时器
        monthlyAccumulativeTimer:{},
        //世界地图tooptip轮播定时器key
        allBallMapTimer:null,
        //当前世界地图的轮播状态，true->正在轮播，false->停止轮播
        currAllBallMapStatus:null


      }
    },
    methods:{
        imgchange2(num){
            if(num==1){ //地图
                console.log(1111111);
                this.maphide_map=true;
                this.maphide_earth=false;
                this.maphide = false;
                this.mapshow = false;
                this.mapthree = true;
                this.currBollType = false;
                this.isMap=true;
                this.isEarth=false;
            }else if(num==2){ //地球仪
                console.log(22222222222);
                this.maphide_map=false;
                this.maphide_earth=true;

                this.maphide = true;
                this.mapshow = false;
                this.mapthree = false;
                this.currBollType = true;
                this.isMap=false;
                this.isEarth=true;
            }
        },

        changeDate(num){
            const  that = this;
            //总收入单位的span元素
            const totalIncomeUnitEl = this.$refs.totalIncomeUnit;
            // localStorage.this = ;

            $('.change_li li').removeClass('changeColor');
            $('.change_li li').eq(num).addClass('changeColor');
            $('.trend li').removeClass('changeTrend');//趋势
            this.isNum=num;
            //console.log("-----------------",this.isNum);
            let mychartData=[];
            if(num == 0){
              that.isTimeSlot=num
              const options={
                useEasing: false,
                useGrouping: false,
                separator: ',',
                decimal: '.',
              };
              this.orderinNum = parseInt(this.totalData[0].left.today.todayFinal);
              const demo = new CountUp('orderinNum', 0, this.orderinNum, 0, 3, options);
              // console.log(demo);
              if (!demo.error) {
                demo.start();
              } else {
                console.error(demo.error);
              }

            totalIncomeUnitEl.innerHTML = '(元)';
            }else if(num==1){ //当月
                totalIncomeUnitEl.innerHTML = '(万元)'
                mychartData=this.totalData[0].left.present.present
                that.mychart(mychartData,1)
                that.isTimeSlot=num
                $('.trend li').eq(0).addClass('changeTrend');
            }else if(num==2){ //历史
                totalIncomeUnitEl.innerHTML = '(万元)'
                mychartData=this.totalData[0].left.history.history
                that.mychart(mychartData,2)
                that.isTimeSlot=num
                $('.trend li').eq(0).addClass('changeTrend');
            }
        },
        timeSlot(num){
            let that=this;
            $('.trend li').removeClass('changeTrend');
            $('.trend li').eq(num-1).addClass('changeTrend');
            let mychartData=[];
            if(this.isTimeSlot==1){//当月
                if(num==1){//趋势
                    mychartData=this.totalData[0].left.present.present
                    that.mychart(mychartData,1)
                }else if(num==2){//累积
                    mychartData=this.totalData[0].left.present.presentTotal
                    that.mychart(mychartData,1)
                }

            }else if(this.isTimeSlot==2){ //历史
                if(num==1){//趋势
                    mychartData=this.totalData[0].left.history.history
                    that.mychart(mychartData,2)
                }else if(num==2){//累积
                    mychartData=this.totalData[0].left.history.historyTotal
                    that.mychart(mychartData,2)
                }
            }

        },

        mychart(mychartData,num){

            //总收入
            let container = this.$refs.chart1;
            let mychart1 = echarts.init(container);

            let month=[];//月份
            for(var i in mychartData){
                month.push(mychartData[i].name)
            }

            let title;// 标题个数
            let name1,name2;
            let data1=[]
            let data2=[]
            if(num==1){ //当月
                title=''
                name1=''
                name2=''
                for(var i in mychartData){
                    title=['当月','上月',];
                    name1='当月';
                    name2='上月';
                    data1.push(mychartData[i].final)
                    //data2=data1
                    data2.push(mychartData[i].hisFinal);
                }
            }else if(num==2){ //历史
                title=['完成值','目标值',]
                name1='完成值'
                name2='目标值'
                for(var i in mychartData){
                    data1.push(mychartData[i].complete)
                    data2.push(mychartData[i].target)
                }
            }

            function chartearn(){
            //处理当月小于上月时的异常数据显示
            (()=>{
                let len = data1.length;
                for(let i=0;i<len;i++){
                        if(Number(data1[i])<Number(data2[i])){
                            data1[i] = {
                                value:data1[i],
                                symbol:'image://static/img/errors.png',//image://static/img/errors.png',
                                symbolSize:12,//10
                                // hoverAnimation:true,
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'bottom'
                                    }
                                },
                                itemStyle:{
                                shadowBlur: 16,}
                            }
                        }else {
                          data2[i] = {
                              value:data2[i],
                              symbol:'circle',//image://static/img/earnmouthabn.png',
                              symbolSize:6,//10
                              label: {
                                  normal: {
                                      show: true,
                                      position: 'bottom'
                                  }
                              },
                              // itemStyle:{color:'red',shadowColor: 'red',
                              // shadowBlur: 10,}
                          }
                        }
                }
            })();
            let  option = {
            tooltip: {
              trigger: 'axis',
                // axisPointer: {
                //     type: 'line',
                //     lineStyle: {
                //         opacity: 1
                //     }
                // },
                padding:[8,10],
                textStyle:{
                width:69,
                height:64,
                color:'RGBA(32, 22, 56, 1)'
                },
                extraCssText:'background:url("static/img/yelog.png") no-repeat;background-size:100% 100%;background-position:center',
                formatter: function(params) {
                  // console.log(params);
                return params[0].name+'<br>'+params[0].seriesName+':'+params[0].value+'<br>'+params[1].seriesName+':'+params[1].value;
                },
                textStyle:{
                color:'#000'
                }
            },
                legend:{
                icon: 'rect',
                data:title,
                itemWidth:15,
                itemHeight:10,
                left:0,
                color:['RGBA(107, 180, 255, 1)','RGBA(61, 255, 255, 1)'],
                textStyle:{
                    color:['RGBA(107, 180, 255, 1)','RGBA(0, 144, 255, 1)'],
                }

                },
                grid: {
                    top: '22%',
                    left: '6%',
                    right: '6%',
                    bottom: '22%',
                    containLabel: false
                },
                xAxis: {

                    type: 'category',
                    length:2,
                    boundaryGap: false,
                    axisPointer:{
                      show:true,
                      type:'line',
                      lineStyle:{
                        color:'RGBA(255, 255, 0, 1)',
                        type:'dashed'
                      }
                    },
                    offset:12,
                    axisLine: {
                    lineStyle:{
                        color:['#00B4FF']
                    }
                    },
                    axisTick: {
                        show: true,
                        length:1,
                        lineStyle:{
                        color:'RGBA(255, 255, 0, 1)',
                        width:1
                        }
                    },

                    data: month
                },
                dataZoom:{
                type:'inside',
                zoomLock:true,
                startValue:0,
                endValue:8
                },
                yAxis: {
                    show:false,
                    type: 'value',
                    name:'(万)',
                    nameTextStyle:{
                    padding: [-10, 24, 0, 0]
                    },
                    axisPointer:{
                      show:true,
                      type:'line',
                      lineStyle:{
                        color:'RGBA(255, 255, 0, 1)',
                        type:'dashed'
                      }
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
                    // axisLabel: {
                    //     formatter: '{value} k'
                    // }
                },
                series: [{
                    name:name1,
                    type: 'line',
                    smooth: true,
                    showSymbol: true,
                    symbol:'circle',//"image://static/img/earnmouth.png",
                    symbolSize: 6,//12,
                    data: data1,
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },

                    itemStyle: {
                        normal: {
                            color: "#00B4FF",
                            label:{
                            show:true,
                                position: 'top',
                                extraCssText:'background:url("static/img/conversation.png") no-repeat;background-size:contain;background-position:center',
                                formatter: function(p) {
                                return p.value > 0 ? (p.value) : '';
                                }
                            }
                        },
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'RGBA(0, 144, 255, 0.5)'
                            }, {
                                offset: 1,
                                color: 'RGBA(0, 144, 255, 0.5)'
                            }], false)
                        }
                    },
                    // itemStyle: {
                    //     normal: {
                    //         color: 'RGBA(0, 144, 255, 1)'
                    //     }
                    // },

                    itemStyle: {
                            normal: {
                                color: "RGBA(0, 144, 255, 1)",
                                shadowColor: 'RGBA(0, 144, 255, 1)',
                                shadowBlur: 10,
                                label:{
                                show:false,
                                    position: 'top',
                                    extraCssText:'background:url("static/img/conversation.png") no-repeat;background-size:contain;background-position:center',
                                    formatter: function(p) {
                                    return p.value > 0 ? (p.value) : '万';
                                    }
                                }
                            },
                        },
                    lineStyle: {
                        normal: {
                            width: 1,
                            color:'RGBA(0, 144, 255, 1)'
                        }
                    },
                    animationDuration:3000
                }, {
                    name: name2,
                    type: 'line',
                    smooth: true,
                    showSymbol: true,
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },

                    symbol:'circle',//"image://static/img/earntommor.png",
                    symbolSize: 6,//12,
                    data: data2,
                    // areaStyle: {
                    //     normal: {
                    //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //             offset: 0,
                    //             color: 'RGBA(61, 255, 255, 0.3)'
                    //         }, {
                    //             offset: 1,
                    //             color: 'RGBA(61, 255, 255, 0.3)'
                    //         }], false)
                    //     }
                    // },
                    itemStyle: {
                        normal: {
                            color: 'RGBA(61, 255, 255, 1)',
                            shadowColor: 'RGBA(61, 255, 255, 1)',
                            shadowBlur: 10
                        }
                    },

                    lineStyle: {
                        normal: {
                            width: 1,
                            color:'RGBA(61, 255, 255, 1)'
                        }
                    },
                    animationDuration:3000
                }]
            }
            mychart1.clear();
            mychart1.setOption(option);
            }
            chartearn();

        },
        test2(value){
            this.cityName=value;
        },
        // 全国
        countrywide(){
            this.cityName='全国产品结构' ;
            this.chartearn3(this.totalData[0].busProportion)

            this.chartearn1Name=''
            this.chartearn2Name=''
            this.chartearn1(this.totalData[0].business,'noInterval')
            this.chartearn2(this.totalData[0].line,'noInterval')
        },
        // 月累计收入完成比排名
        chartearn1(value,isInter){
            var that=this
            const chartright1 = this.$refs.chartright1;
            let mychartr1 = echarts.init(chartright1);
            let mychartr1_Data=value;
            function chartearn1(){
                var chartearn1Name=that.chartearn1Name
                var data = mychartr1_Data
                var xData = [],
                yData = data;
                function namemach(name){
                var x = {};
                for (var i = 0; i < yData.length; i++) {
                    if (yData[i].name == name) {
                    x = yData[i]
                    }
                }
                return x
                }

                // 改
                var newData=[];
                // console.log(namemach('东北'));
                var min = 50; // 最小值的定义
                data.map(function(a, b) {

                    xData.push(a.name);
                    newData.push(a.value)
                    // if (a.value === 0) {
                    //     yData.push(a.value + min);
                    // } else {
                    //     yData.push(a.value);
                    // }
                    // yData.push((Math.random(0,1) * 100).toFixed(0));
                });
                 var zanshi=new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: 'RGBA(2, 228, 255, 16)'
                            },
                            {
                                offset: 1,
                                color: 'RGBA(2, 228, 255, 0)'
                            },
                        ]
                    )
                 var zanshi2=    new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'RGBA(0, 144, 255, 0.64)'
                                },
                                {
                                    offset: 1,
                                    color: 'RGBA(0, 144, 255, 0)'
                                },
                            ]
                        )

                var zanshi3=new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: 'RGBA(0, 228, 43, 1)'
                            },
                            {
                                offset: 1,
                                color: 'RGBA(0, 228, 43, 0)'
                            },
                        ]
                    )
                var xuanting=new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                            offset: 0,
                            color: 'RGBA(255, 216, 0, 1)'
                        },
                        {
                            offset: 1,
                            color: 'RGBA(255, 216, 0, 0)'
                        },
                    ]
                )


                // console.log(yData);
                let option = {
                    backgroundColor:null,
                    // color: ['#3398DB'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'line',
                            lineStyle: {
                                opacity: 0
                            }
                        },
                        padding:[8,10],
                        textStyle:{
                        width:69,
                        height:64,
                        color:'RGBA(32, 22, 56, 1)'
                        },
                        // extraCssText:'background:url("static/img/yelog.png") no-repeat,rgba(255,255,255,0.3);background-size:100% 100%;background-position:center',
                        extraCssText:'background-color:RGBA(255, 216, 0, 1);',
                        formatter: function(prams) {
                        var text = namemach(prams[0].name);
                        // 改
                        return /*'事业部：<strong style="font-size:15px">'+text.name+'</strong><br>*/'目标值：'+'<strong style="font-size:15px">'+text.flag+'</strong>'+'万'+'</br>'+
                        '实际值：'+'<strong style="font-size:15px">'+text.final+'</strong>'+'万'+'</br>'+
                        '完成比：'+'<strong style="font-size:15px">'+text.value+'</strong>'+'%'
                            // if (prams[0].data === min) {
                            // } else {
                            //     return "合格率：" + prams[0].data + "%"
                            // }
                        },
                        //   formatter:'{c}<span style="font-size: 10px">单</span>',
                    },
                    legend: {//图例组件
                        show: false
                    },
                    grid: {
                        left: '5%',
                        right: '3%',
                        bottom: '10%',
                        top: '10%',
                        height: '75%',
                        containLabel: false,
                        z: 22
                    },
                    xAxis: [{
                        type: 'category',
                        gridIndex: 0,
                        data: xData,
                        boundaryGap:false,
                        axisTick: {
                            show: true,
                            length:2,
                            interval:0,
                            lineStyle:{
                            color:'RGBA(255, 255, 0, 1)',
                            width:1
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#0c3b71'
                            }
                        },
                        nameTextStyle:{
                        color:'RGBA(84, 179, 234, 1)'
                        },
                        axisLabel: {
                            show: true,
                            interval:0,
                            color: 'RGBA(84, 179, 234, 1)',
                            fontSize:12
                        }
                    }],
                    yAxis: [{
                            show:false,
                            type: 'value',
                            gridIndex: 0,
                            splitLine: {
                                show: false
                            },
                            axisTick: {
                                show: true,
                                length:2,
                                lineStyle:{
                                color:'RGBA(255, 255, 0, 1)',
                                width:1
                                }
                            },
                            min: 0,
                            // max: 100,
                            axisLine: {
                                lineStyle: {
                                    color: '#0c3b71'
                                }
                            },
                            axisLabel: {
                                color: 'rgb(170,170,170)',
                                formatter: '{value}'
                            },
                            axisLabel: {
                                show: true,
                                color: 'RGBA(84, 179, 234, 1)',
                                fontSize:10
                            }
                        },
                        {
                            type: 'value',
                            show:false,
                            gridIndex: 0,
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                show: false
                            },
                        }
                    ],
                    series: [{
                            name: '合格率',
                            type: 'bar',
                            barWidth: '62%',
                            xAxisIndex: 0,
                            yAxisIndex: 0,
                            label:{
                            show:true,position:'top',fontSize:10,
                            textStyle:{color:'#02E4FF'}
                            },
                            itemStyle: {
                                emphasis: {
                                        opacity:1,
                                        borderWidth:1,
                                        borderColor:'rgba(255,255,255,0.7)',
                                        shadowBlur: 15,
                                        shadowColor: 'white'
                                },
                                normal: {
                                    opacity:0.7,
                                    // barBorderRadius: [30, 30, 0, 0],
                                    // borderColor:'RGBA(0, 144, 255, 1)',
                                    // borderColor:function (params){
                                    //     console.log("====",params);
                                    //     var borderColorList = ['RGBA(2, 228, 255, 1)','RGBA(0, 228, 43, 1)'];
                                    //     var borderKey = params.name.replace(/<\/?.+?>/g,"").replace(/[\r\n]/g, "");
                                    //     if(borderKey  == chartearn1Name ){
                                    //         return 'RGBA(255, 216, 0, 1)';
                                    //     }else{
                                    //         return borderColorList[params.dataIndex];

                                    //     }

                                    // },
                                    color: function (params){
                                        // console.log("========",params);
                                        var colorList = [zanshi,zanshi,zanshi,zanshi2,zanshi2,zanshi2,zanshi2,zanshi2,zanshi2,zanshi2,zanshi3,zanshi3,zanshi3];
                                        var key = params.name.replace(/<\/?.+?>/g,"").replace(/[\r\n]/g, "");
                                        if(key  == that.chartearn1Name ){
                                            return xuanting;
                                        }else{
                                            return colorList[params.dataIndex];

                                        }

                                    },


                                }
                            },
                            data:newData,
                            zlevel: 20,
                            animationDuration:3000

                        },
                        {
                            name: '背景',
                            type: 'bar',
                            barWidth: '60%',
                            xAxisIndex: 0,
                            yAxisIndex: 1,
                            barGap: '-100%',
                            data: [100, 100, 100, 100, 100, 100, 100,100, 100, 100, 100, 100, 100, 100],
                            itemStyle: {
                                normal: {
                                    color: 'RGBA(6, 39, 69, 0.1)',
                                    borderColor:'RGBA(2, 228, 255, 0.1)',
                                    borderType:'dashed'
                                    // opacity:0.5
                                }
                            },
                            zlevel: 9,
                            animationDuration:3000
                        },

                    ]
                };

                mychartr1.setOption(option);
                

                // "flag":mychartr1_Data[i].flag,"final":mychartr1_Data[i].final,"persent":mychartr1_Data[i].persent
                //params=>当前点击柱图的数据
                mychartr1.on('click', function (params) {
                    that.chartearn1Name=params.name
                    mychartr1.setOption(option);
                    that.chartearn2Name=''
                    //月累计线路收入完成比排名联动的时候
                    that.chartearn2(that.totalData[0].line,'noSetInterval');

                    var text= params.name +"事业部产品结构"
                    that.test2(text)
                    this.busProportionList=[];//事业部数据
                    var mychartr1Data = mychartr1_Data[params.dataIndex].list
                    for(var i in mychartr1Data){
                        this.busProportionList.push(mychartr1Data[i])
                    }
                    //点击刷新全国产品结构的时候不在给它生成定时器
                    that.refresh=false;
                    that.chartearn3(this.busProportionList);
                })
            }
            chartearn1();
            //将tooltip设置为自动轮播
            if(!isInter){
                this.monthlyAccumulative(mychartr1,value.length,'typ1');
            }
        },
        // 月累计线路收入完成比排名
        chartearn2(value,isInter){
            var that=this
            var chartright2_data = value ;
            var chartright2_persent=[]; //value 百分比
            var shiyan_chartright2_persent=[]
            var chartright2_name=[] ;//国家
            var x=''
            var y=[]
            var zong=[]
            function lineData(){
                shiyan_chartright2_persent=[]
                for(let i in chartright2_data){
                    shiyan_chartright2_persent.push({'value':chartright2_data[i].value,symbol:that.chartearn2Name==chartright2_data[i].name? "image://static/img/symbolbt2.png":"image://static/img/symbolbt.png"})
                }
                chartearn2(shiyan_chartright2_persent);
            }

            function lineZong(){
                x=chartright2_data
                y=[
                    {
                        symbol:  that.chartearn2Name=='美国'?"image://./static/img/symbol122.png":"image://./static/img/symbol12.png" ,
                        symbolSize: [24, 35],
                        "imgName":"美国"
                    }, {
                        symbol:that.chartearn2Name=='欧洲'?"image://./static/img/symbol222.png":"image://./static/img/symbol22.png",
                        symbolSize: [18, 35],
                        "imgName":"欧洲"
                    }, {
                        symbol: that.chartearn2Name=='香港'?"image://./static/img/symbol322.png":"image://./static/img/symbol32.png",
                        symbolSize: [18, 35],
                        "imgName":"香港"
                    }, {
                        symbol: that.chartearn2Name=='东南亚'?"image://./static/img/symbol422.png":"image://./static/img/symbol42.png",
                        symbolSize: [18, 30],
                        "imgName":"东南亚"
                    }, {
                        symbol: that.chartearn2Name=='日本'?"image://./static/img/symbol522.png":"image://./static/img/symbol52.png",
                        symbolSize: [18, 30],
                        "imgName":"日本"
                    }, {
                        symbol: that.chartearn2Name=='台湾'?"image://./static/img/symbol722.png":"image://./static/img/symbol62.png",
                        symbolSize: [18, 35],
                        "imgName":"台湾"
                    }, {
                        symbol: that.chartearn2Name=='韩国'?"image://./static/img/symbol622.png":"image://./static/img/symbol72.png",
                        symbolSize:[18, 35],
                        "imgName":"韩国"
                    }, {
                        symbol:that.chartearn2Name=='其他'?"image://./static/img/symbol822.png":"image://./static/img/symbol82.png",
                        symbolSize: [18, 35],
                        "imgName":"其他"
                    }]

                zong=[];
                for(var k in x){
                    for(var i in y){
                        if(x[k]["name"]==y[i]["imgName"]){
                            zong.push( Object.assign(x[k],y[i]) )
                        }
                    }
                }
                var key = 'value';
                for(var i in zong){
                    for(var k in zong[i]){
                        if(k=='persent'){
                            // 复制原来的值
                            zong[i][key] = zong[i]['persent'];
                            // 删除原来的键
                            delete zong[i]['persent'];
                        }
                    }
                }

            }
            lineZong()

            for(let i in chartright2_data){
                chartright2_persent.push(chartright2_data[i].value)
                shiyan_chartright2_persent.push({'value':chartright2_data[i].value,symbol: "image://static/img/symbolbt.png",})
                chartright2_name.push(chartright2_data[i].name)
            }

            const chartright2 = this.$refs.chartright2;
            let mychartr2 = echarts.init(chartright2);
            //自动轮播tooltip，只有参数isInter不存在的时候，创建定时轮播，参数存在的时候表示是其他图表联动，不用创建定时轮播
            if(!isInter){
                this.monthlyAccumulative(mychartr2,value.length,'typ2');
            }

            
            function chartearn2(){
                let option = {

                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'line',
                            lineStyle: {
                                opacity: 0
                            }
                        },
                        padding:[8,10],
                        textStyle:{
                        width:69,
                        height:64,
                        color:'RGBA(32, 22, 56, 1)'
                        },
                        // extraCssText:'background:url("static/img/yelog.png") no-repeat;background-size:100% 100%;background-position:center',
                        extraCssText:'background-color:RGBA(255, 216, 0, 1);',
                        formatter: function (params) {
                            return /*'事业部：<strong style="font-size:15px">'+params[1].data.name+'</strong><br>*/'目标值: <strong style="font-size:15px">' + params[1].data.flag +'</strong>万<br/>'+ ' 实际值: <strong style="font-size:15px">' + params[1].data.final+'</strong>万<br/>'+' 完成比: <strong style="font-size:15px">' + params[1].data.value +'</strong>%';
                        }
                        //   formatter:'{c}<span style="font-size: 10px">单</span>',
                    },
                    grid: {
                    left: '0%',
                    right: '0%',
                    bottom: '10%',
                    top: '15%',
                    height: '70%',
                    containLabel: false,
                    z: 22
                    },
                    xAxis: {
                        data:chartright2_name,
                        boundaryGap:true,
                        axisTick: {
                            show: true,
                            length:2,
                            interval:0,
                            alignWithLabel:true,
                            lineStyle:{
                            color:'RGBA(255, 255, 0, 1)',
                            width:1
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#0c3b71'
                            }
                        },
                        nameTextStyle:{
                        color:'RGBA(84, 179, 234, 1)'
                        },
                        axisLabel: {
                            show: true,
                            interval:0,
                            color: 'RGBA(84, 179, 234, 1)',
                            fontSize:12
                        }
                    },
                    yAxis: {
                        show:false,
                        axisTick: {
                            show: false,
                            length:2,
                            lineStyle:{
                                color:'RGBA(255, 255, 0, 1)',
                                width:1
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#0c3b71'
                            }
                        },
                        nameTextStyle:{
                            color:'RGBA(84, 179, 234, 1)'
                        },
                        splitLine: {show: false},
                        axisLabel: {
                            show: true,
                                color: 'RGBA(84, 179, 234, 1)',
                                fontSize:12
                        }
                    },
                    color: ['#e54035'],
                    animation: that.isAnimation,//去除动画
                    series: [{
                        name: 'hill',
                        type: 'pictorialBar',
                        barCategoryGap: '25%',
                        label:{
                            show:true,position:'insideBottom',fontSize:11,
                            textStyle:{color:'#02E4FF'}
                        },
                        // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
                        // symbol: "image://static/img/symbolbt.png",
                        itemStyle: {
                            normal: {
                                opacity: 0.5
                            },
                            emphasis: {
                                opacity: 1,
                                borderWidth:1,
                                borderColor:'rgba(255,255,255,0.6)',
                                shadowBlur: 20,
                                shadowOffsetX: 0,
                                shadowColor: 'white'
                            }
                        },
                        data: shiyan_chartright2_persent,
                        z: 10
                    }, {
                        name: 'glyph',
                        type: 'pictorialBar',
                        barGap: '-100%',
                        symbolPosition: 'end',
                        symbolSize: 30,
                        symbolOffset: [0, '-100%'],
                        data:zong
                    }]
                };
                mychartr2.clear();
                mychartr2.setOption(option);

                mychartr2.on('click', function (params) {
                    that.chartearn2Name=params.name
                    that.isAnimation=false
                    lineZong()
                    lineData()


                    that.chartearn1Name=''
                    that.chartearn1(that.totalData[0].business,'noSetInterval');
                    var text= params.name +"线路产品结构"
                    that.test2(text)
                    this.cityName=params.name
                    this.busProportionList=[];//事业部数据
                    var mychartr1Data = chartright2_data[params.dataIndex].list
                    for(var i in mychartr1Data){
                        this.busProportionList.push(mychartr1Data[i])
                    }
                    //点击刷新全国产品结构的时候不在给它生成定时器
                    that.refresh=false;
                    that.chartearn3(this.busProportionList);
                })
            }
            chartearn2();
        },

        chartearn3(value){
            var that=this
            //  clearInterval(that.t);
            // for(var i = 1; i < 3; i++) {
            //     clearInterval(i);
            // };
            const chartright3 = this.$refs.chartright3;
            let mychartr3 = echarts.init(chartright3);
            function chartearn3(busProportionLists){
                // var giftImageUrl = 'image://static/img/symbol2.png';
                let option = {
                    backgroundColor: null,
                    tooltip: {
                        trigger: 'item',
                        axisPointer: {
                            type: 'line',
                            lineStyle: {
                                opacity: 0
                            }
                        },
                        padding:[8,10],
                        textStyle:{
                        width:69,
                        height:100,
                        color:'RGBA(32, 22, 56, 1)'
                        },
                        extraCssText:'background:url("static/img/yelog.png") no-repeat;background-size:100% 100%;background-position:center',
                        // formatter: "{b} : {d}% <br/> 货运数量：{c}",
                        formatter: function (params) {
                            return  params.name+':<strong>'+ params.percent + '%</strong><br/>'
                                    + '货运数量：<strong>' + value[params.dataIndex].cargo + '票</strong><br/>'
                                    + '目标值：<strong>' + value[params.dataIndex].flag + '万</strong><br/>'
                                    + '完成值：<strong>' + value[params.dataIndex].final + '万</strong><br/>'
                                    + '完成比：<strong>' + value[params.dataIndex].persent + '%</strong><br/>'

                        }
                    },
                    graphic: {
                        elements: [{
                            type: 'image',
                            style: {
                                // image: giftImageUrl,
                                width: 100,
                                height: 100
                            },
                            left: 'center',
                            top: 'center'
                        }]
                    },
                    itemStyle:{
                        borderWidth:5,
                        borderType:'dashed',
                        shadowBlur: 30
                    },
                    series: [{
                        type: 'pie',
                        radius: ['15%', '45%'],
                        center: ['50%', '50%'],
                        color: ['RGBA(0, 228, 43, 0.6)', 'RGBA(255, 216, 0, 0.6)', 'RGBA(0, 255, 246, 0.6)', 'RGBA(84, 179, 234, 0.6)'],
                        itemStyle:{

                        },
                        data:
                        [{
                                value: busProportionLists[0].final,
                                name: busProportionLists[0].name,
                                label:{
                                    normal: {
                                        formatter: '{c|{c}}'+'万元'+'\n{b|{b}} {d|{d}%}',
                                        rich: {
                                            b: {
                                                fontSize: 12,color:'#00F1FF',align: 'right'
                                            },
                                            d: {
                                                fontSize: 12,align: 'right'
                                            },
                                            c: {
                                                fontSize: 16,color:'#00F1FF',align: 'left'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                value: busProportionLists[1].final,
                                name: busProportionLists[1].name,
                                label:{
                                    normal: {
                                        formatter: '{c|{c}}'+'万元'+'\n{b|{b}} {d|{d}%}',
                                        rich: {
                                            b: {
                                                fontSize: 12,color:'#00F1FF',align: 'right'
                                            },
                                            d: {
                                                fontSize: 12,align: 'right'
                                            },
                                            c: {
                                                fontSize: 16,color:'#00F1FF',align: 'left'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                value: busProportionLists[2].final,
                                name: busProportionLists[2].name,
                                label:{
                                    normal: {
                                        formatter: '{c|{c}}'+'万元'+'\n  {b|{b}} {d|{d}%}',
                                        rich: {
                                            b: {
                                                fontSize: 12,color:'#00F1FF',align: 'left'
                                            },
                                            d: {
                                                fontSize: 12,align: 'right'
                                            },
                                            c: {
                                                fontSize: 16,color:'#00F1FF',align: 'left'
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                value: busProportionLists[3].final,
                                name: busProportionLists[3].name,
                                label:{
                                    normal: {
                                        formatter: '{c|{c}}'+'万元'+'\n   {b|{b}}{d|{d}%}',
                                        rich: {
                                            b: {
                                                fontSize: 12,color:'#00F1FF',align: 'left'
                                            },
                                            d: {
                                                fontSize: 12,align: 'right'
                                            },
                                            c: {
                                                fontSize: 16,color:'#00F1FF',align: 'left'
                                            }
                                        }
                                    }
                                }
                            },

                        ],
                        labelLine: {
                            normal: {
                                show: true,
                                length: 10,
                                length2: 15,
                                lineStyle: {
                                    type:'dashed',
                                    width: 1
                                }
                            }
                        },
                        label: {

                        },
                        animationDuration:3000
                    },{
                        type: 'pie',
                        radius: ['0%', '0%'],
                        center: ['55%', '50%'],
                        color: ['RGBA(8, 255, 25, 1)', 'RGBA(82, 85, 24, 1)', 'RGBA(8, 91, 152, 1)', 'RGBA(1, 89, 95, 1)',],
                        data: [{
                                value: 335,
                                name: '五保'
                            },
                            {
                                value: 310,
                                name: '低保'
                            },
                            {
                                value: 234,
                                name: '残疾'
                            },
                            {
                                value: 235,
                                name: '失独'
                            },

                        ],
                        labelLine: {
                            normal: {
                                show: false,

                            }
                        },
                        label: {
                            normal: {
                                show:false
                            }
                        },
                        animationDuration:3000
                    }]
                };
                mychartr3.setOption(option);

                if(that.refresh){
                    // console.log("[[[[[[[[[进来了吗",that.refresh);
                    var counts = 4; //获取所有闪动圆环数量
                    var dataIndex = 0;
                    function autoHoverTip() {

                        for (var i = 0; i < counts; i++) {
                            (function(i) {
                                var ts = setTimeout(function() {
                                    
                                    mychartr3.dispatchAction({
                                        type: 'pieUnSelect',
                                        //type: 'downplay',
                                        seriesIndex: 0,
                                        // value:30,
                                        dataIndex: (i==0)?(3):(i-1)
                                    });

                                    mychartr3.dispatchAction({
                                        type: 'pieSelect',
                                        //type: 'highlight',
                                        seriesIndex: 0,
                                        // value:30,
                                        dataIndex: i
                                    });

                                    mychartr3.dispatchAction({
                                        type: 'showTip',
                                        seriesIndex: 0,
                                        // value:30,
                                        dataIndex: i
                                    });
                                }, 10000 * i);
                                // that.$once('hook:beforeDestroy', () => {
                                //   clearInterval(ts);
                                // })
                            })(i);
                        }
                    }
                    setTimeout(function() {
                        autoHoverTip();
                        var tv = setInterval(autoHoverTip, counts * 10000);
                    }, 500);
                }

            }
            chartearn3(value);

        },

      init:function (axiosData) {
        const  that = this;
        // localStorage.setItem("this",JSON.stringify(this));
        // console.log(this);

        // this.maphide = false;
        // this.mapshow = true;
        // this.mapthree = false;

        //this.time = formatDate(new Date(),'yyyy/MM/dd hh')+':00';
        //设置两种日期格式，当日显示最近刷新的年月日时分，其他日期显示昨日年月日
        this.time = (()=>{
            let res = {};
            res.currTim = formatDate(new Date(),'yyyy/MM/dd hh:00');
            res.lastTim = formatDate(new Date(new Date().getTime() - 24*60*60*1000),'yyyy/MM/dd');
            return res;
        })();

        // 时间进度值 改
        this.time_Persent= parseFloat(Number(axiosData.left.impo.timePersent)) ;//内环
        $('.progress').css({ "width": this.time_Persent +'%' });
        $('.line').css({ "left": this.time_Persent +'%' });
        $('.text').css({
         "left": Number(this.time_Persent)>50?Number(this.time_Persent)-50 +'%':Number(this.time_Persent) +'%',
         "color": Number(this.time_Persent)>50?'#092711':''});

        let cake1_num_color='';//颜色
        let cake1_text_color='';//文字颜色
        //产品收入cake1(电商小包)
        let cake1_num=(Number(axiosData.left.elec.persent)).toFixed(2) ; //电商数据
        if( Number(cake1_num) < Number(this.time_Persent) ){ //小于=红
            cake1_num_color='#EF2888'
            cake1_text_color='#EF2888'
            this.cake1_color=true
        }else{
            cake1_num_color='RGBA(3, 231, 250, 1)'
            cake1_text_color='RGBA(224, 233, 255, 1)'
            this.cake1_color=false
        }
        let intNumber =cake1_num.toString().split('.') ;
        const cake1 = this.$refs.cake1;
        let mycake1 = echarts.init(cake1);
        function cake1Fn(){
          var dataStyle = {
              normal: {
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  },
                  shadowBlur: 40,
                  // shadowColor: 'rgba(40, 40, 40, 0.5)',
              }
          };
          var placeHolderStyle = {
              normal: {
                  color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  }
              },
              emphasis: {
                  color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
              }
          };
          //中心百分比数据位数
          let len = intNumber[0].length;
          let option = {
              // title: [
              //     {
              //     text: intNumber[0],
              //     x: 'center',
              //     y: 'center',
              //     textStyle: {
              //         fontWeight: 'normal',
              //         color: cake1_text_color, //数据小数点前的颜色
              //         fontWeight:700,
              //         fontSize: 30,
              //         textShadowBlur: 5,textShadowColor: 'RGBA(0, 144, 255, 1)',textShadowOffsetX:0,textShadowOffsetY:0
              //     }
              // },{
              //     text: '.'+intNumber[1],
              //     x: len===1?'60%':len===2?'70%':'right',//'right',
              //     y:'45%',
              //     textStyle: {
              //         fontWeight: 'normal',
              //         color: cake1_text_color,//数据小数点后的颜色
              //         fontWeight:700,
              //         fontSize: 12,
              //         textShadowBlur: 5,textShadowColor: 'RGBA(0, 144, 255, 1)',textShadowOffsetX:0,textShadowOffsetY:0
              //     }
              // }
              // ],
              title:{
                  text: cake1_num,
                  x: 'center',
                  y: 'center',
                  textStyle: {
                      fontWeight: 'normal',
                      color: cake1_text_color,//数据小数点后的颜色
                      fontWeight:700,
                      fontSize: 18,
                      textShadowBlur: 0,textShadowColor: 'RGBA(0, 144, 255, 1)',textShadowOffsetX:0,textShadowOffsetY:0
                  }
              },
              backgroundColor: '',
            //   color: ['RGBA(3, 231, 250, 1)', 'RGBA(13, 124, 139, 0.8)', 'RGBA(13, 124, 139, 0.2)'],
              color: [cake1_num_color, 'RGBA(13, 124, 139, 0.8)', 'RGBA(13, 124, 139, 0.2)'],
              tooltip: {
                  show: false,
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                  show: false,
                  itemGap: 12,
                  data: ['01', '02']
              },
              // geo:{
              //   top:'-10%'
              // },
              toolbox: {
                  show: false,
                  feature: {
                      mark: {
                          show: true
                      },
                      dataView: {
                          show: true,
                          readOnly: false
                      },
                      restore: {
                          show: true
                      },
                      saveAsImage: {
                          show: true
                      }
                  },

              },
              series: [{
                      name: 'Line 1',
                      type: 'pie',
                      clockWise: true,
                      radius: [28, 35],
                      itemStyle: dataStyle,
                      hoverAnimation: false,
                      startAngle: -90,
                      data: [{
                              value: cake1_num,
                              name: '01'
                          }, {
                              value: cake1_num>=100 ? 0:100-cake1_num,
                              name: 'invisible',
                              itemStyle: placeHolderStyle
                          }

                      ],
                      animationDuration:3000
                  }, {
                      name: 'Line 2',
                      type: 'pie',
                      animation: false,
                      clockWise: false,
                      radius: [0, 0],
                      itemStyle: dataStyle,
                      hoverAnimation: false,
                      tooltip: {
                          show: false
                      },
                      data: [{
                              value: 100,
                              name: '02',
                              itemStyle: {
                                  emphasis: {
                                      color: '#313443'
                                  }
                              }
                          }, {
                              value: 0,
                              name: 'invisible',
                              itemStyle: placeHolderStyle
                          }

                      ],
                      animationDuration:3000
                  },


              ]
            };
            mycake1.setOption(option);
          }
        cake1Fn();

        //国际快件
        let cake2_num=(Number(axiosData.left.inte.persent)).toFixed(2) ;
        let cake2_num_color='';//颜色
        let cake2_text_color='';//文字颜色
        if( Number(cake2_num) < Number(this.time_Persent) ){ //小于=红
            cake2_num_color='#EF2888'
            cake2_text_color='#EF2888'
            this.cake2_color=true
        }else{
            cake2_num_color='RGBA(3, 231, 250, 1)'
            cake2_text_color='RGBA(224, 233, 255, 1)'
            this.cake2_color=false
        }
        let intNumber2 =cake2_num.toString().split('.') ;
        const cake2 = this.$refs.cake2;
        let mycake2 = echarts.init(cake2);
        function cake2Fn(){
          var dataStyle = {
              normal: {
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  },
                  shadowBlur: 40,
                  // shadowColor: 'rgba(40, 40, 40, 0.5)',
              }
          };
          var placeHolderStyle = {
              normal: {
                  color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  }
              },
              emphasis: {
                  color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
              }
          };
          let len = intNumber2[0].length;
          let option = {
              // title: [
              //     {
              //     text: intNumber2[0],
              //     x: 'center',
              //     y: 'center',
              //     textStyle: {
              //         fontWeight: 'normal',
              //         color:cake2_text_color,
              //         fontWeight:700,
              //         fontSize: 30,
              //         textShadowBlur: 5,textShadowColor: 'RGBA(0, 144, 255, 1)',textShadowOffsetX:0,textShadowOffsetY:0
              //     }
              // },{
              //     text: '.'+intNumber2[1],
              //     x: len===1?'60%':len===2?'70%':'right',//'right',
              //     y:'45%',
              //     textStyle: {
              //         fontWeight: 'normal',
              //         color: cake2_text_color,
              //         fontWeight:700,
              //         fontSize: 12,
              //         textShadowBlur: 5,textShadowColor: 'RGBA(0, 144, 255, 1)',textShadowOffsetX:0,textShadowOffsetY:0
              //     }
              // }
              // ],
              title:{
                  text: cake2_num,
                  x: 'center',
                  y: 'center',
                  textStyle: {
                      fontWeight: 'normal',
                      color: cake2_text_color,
                      fontWeight:700,
                      fontSize: 18,
                      textShadowBlur: 0,textShadowColor: 'RGBA(0, 144, 255, 1)',textShadowOffsetX:0,textShadowOffsetY:0
                  }
              },
              backgroundColor: '',
              color: [cake2_num_color, 'RGBA(13, 124, 139, 0.8)', 'RGBA(13, 124, 139, 0.2)'],
              tooltip: {
                  show: false,
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                  show: false,
                  itemGap: 12,
                  data: ['01', '02']
              },
              toolbox: {
                  show: false,
                  feature: {
                      mark: {
                          show: true
                      },
                      dataView: {
                          show: true,
                          readOnly: false
                      },
                      restore: {
                          show: true
                      },
                      saveAsImage: {
                          show: true
                      }
                  }
              },
              series: [{
                      name: 'Line 1',
                      type: 'pie',
                      clockWise: true,
                      radius: [28, 35],
                      itemStyle: dataStyle,
                      hoverAnimation: false,
                      startAngle: -90,
                      data: [{
                              value: cake2_num,
                              name: '01'
                          }, {
                              value: cake2_num>=100 ? 0:100-cake2_num,
                              name: 'invisible',
                              itemStyle: placeHolderStyle
                          }

                      ],
                      animationDuration:3000
                  }, {
                      name: 'Line 2',
                      type: 'pie',
                      animation: false,
                      clockWise: false,
                      radius: [0, 0],
                      itemStyle: dataStyle,
                      hoverAnimation: false,
                      tooltip: {
                          show: false
                      },
                      data: [{
                              value: 100,
                              name: '02',
                              itemStyle: {
                                  emphasis: {
                                      color: '#313443'
                                  }
                              }
                          }, {
                              value: 0,
                              name: 'invisible',
                              itemStyle: placeHolderStyle
                          }

                      ],
                      animationDuration:3000
                  },


              ]
            };
            mycake2.setOption(option);
          }
        cake2Fn();

        //cake3---FBA
        let cake3_num=(Number(axiosData.left.fba.persent)).toFixed(2) ;
        let cake3_num_color='';//颜色
        let cake3_text_color='';//文字颜色
        if( Number(cake3_num) < Number(this.time_Persent) ){ //小于=红
            cake3_num_color='#EF2888'
            cake3_text_color='#EF2888'
            this.cake3_color=true
        }else{
            cake3_num_color='RGBA(3, 231, 250, 1)'
            cake3_text_color='RGBA(224, 233, 255, 1)'
            this.cake3_color=false
        }
        let intNumber3 =cake3_num.toString().split('.') ;
        const cake3 = this.$refs.cake3;
        let mycake3 = echarts.init(cake3);
        function cake3Fn(){
          var dataStyle = {
              normal: {
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  },
                  shadowBlur: 40//,
                  //shadowColor: 'RGBA(0, 241, 255, 1)',
              }
          };
          var placeHolderStyle = {
              normal: {
                  color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  }
              },
              emphasis: {
                  color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
              }
          };
          let len = intNumber3[0].length;
          let option = {
              // title: [
              //     {
              //     text: intNumber3[0],
              //     x: 'center',
              //     y: 'center',
              //     textStyle: {
              //         fontWeight: 'normal',
              //         color: cake3_text_color,
              //         fontWeight:700,
              //         fontSize: 30,
              //         textShadowBlur: 5,textShadowColor: 'RGBA(0, 241, 255, 1)'
              //     }
              // },{
              //     text: '.'+intNumber3[1],
              //     x: len===1?'60%':len===2?'70%':'right',//'right',
              //     y:'45%',
              //     textStyle: {
              //         fontWeight: 'normal',
              //         color: cake3_text_color,
              //         fontWeight:700,
              //         fontSize: 12,
              //         textShadowBlur: 5,textShadowColor: 'RGBA(0, 241, 255, 1)'
              //     }
              // }
              // ],
              title:{
                  text: cake3_num,
                  x: 'center',
                  y: 'center',
                  textStyle: {
                      fontWeight: 'normal',
                      color: cake3_text_color,
                      fontWeight:700,
                      fontSize: 18,
                      textShadowBlur: 0,textShadowColor: 'RGBA(0, 144, 255, 1)',textShadowOffsetX:0,textShadowOffsetY:0
                  }
              },
              backgroundColor: '',
              color: [ cake3_num_color, 'RGBA(239, 40, 136, 0.8)', 'RGBA(239, 40, 136, 0.2)'],
              tooltip: {
                  show: false,
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                  show: false,
                  itemGap: 12,
                  data: ['01', '02']
              },
              toolbox: {
                  show: false,
                  feature: {
                      mark: {
                          show: true
                      },
                      dataView: {
                          show: true,
                          readOnly: false
                      },
                      restore: {
                          show: true
                      },
                      saveAsImage: {
                          show: true
                      }
                  }
              },
              series: [{
                      name: 'Line 1',
                      type: 'pie',
                      clockWise: true,
                      radius: [28, 35],
                      itemStyle: dataStyle,
                      hoverAnimation: false,
                      startAngle: -90,
                      data: [{
                              value: cake3_num,
                              name: '01'
                          }, {
                              value: cake3_num>=100 ? 0:100-cake3_num,
                              name: 'invisible',
                              itemStyle: placeHolderStyle
                          }

                      ],
                      animationDuration:3000
                  }, {
                      name: 'Line 2',
                      type: 'pie',
                      animation: false,
                      clockWise: false,
                      radius: [0, 0],
                      itemStyle: dataStyle,
                      hoverAnimation: false,
                      tooltip: {
                          show: false
                      },
                      data: [{
                              value: 100,
                              name: '02',
                              itemStyle: {
                                  emphasis: {
                                      color: '#313443'
                                  }
                              }
                          }, {
                              value: 0,
                              name: 'invisible',
                              itemStyle: placeHolderStyle
                          }

                      ],
                      animationDuration:3000
                  },
              ]
            };
            mycake3.setOption(option);
          }
        cake3Fn();

        //cake4联运
        let cake4_num=(Number(axiosData.left.tran.persent)).toFixed(2) ;
        let cake4_num_color='';//颜色
        let cake4_text_color='';//文字颜色
        if( Number(cake4_num) < Number(this.time_Persent) ){ //小于=红
            cake4_num_color='#EF2888'
            cake4_text_color='#EF2888'
            this.cake4_color=true
        }else{
            cake4_num_color='RGBA(3, 231, 250, 1)'
            cake4_text_color='RGBA(224, 233, 255, 1)'
            this.cake4_color=false
        }
        let intNumber4 =cake4_num.toString().split('.') ;
        const cake4 = this.$refs.cake4;
        let mycake4 = echarts.init(cake4);
        function cake4Fn(){
          var dataStyle = {
              normal: {
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  },
                  shadowBlur: 40,
                  shadowColor: 'rgba(40, 40, 40, 0.5)',
              }
          };
          var placeHolderStyle = {
              normal: {
                  color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  }
              },
              emphasis: {
                  color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
              }
          };
          let len = intNumber4[0].length;
          let option = {
              // title: [
              //     {
              //     text: intNumber4[0],
              //     x: 'center',
              //     y: 'center',
              //     textStyle: {
              //         fontWeight: 'normal',
              //         color: cake4_text_color,
              //         fontWeight:700,
              //         fontSize: 30,
              //         textShadowBlur: 5,textShadowColor: 'RGBA(0, 144, 255, 1)',textShadowOffsetX:0,textShadowOffsetY:0
              //     }
              // },{
              //     text: '.'+intNumber4[1],
              //     x: len===1?'60%':len===2?'70%':'right',
              //     y:'45%',
              //     textStyle: {
              //         fontWeight: 'normal',
              //         color: cake4_text_color,
              //         fontWeight:700,
              //         fontSize: 12,
              //         textShadowBlur: 5,textShadowColor: 'RGBA(0, 144, 255, 1)',textShadowOffsetX:0,textShadowOffsetY:0
              //     }
              // }
              // ],
              title:{
                  text: cake4_num,
                  x: 'center',
                  y: 'center',
                  textStyle: {
                      fontWeight: 'normal',
                      color: cake4_text_color,
                      fontWeight:700,
                      fontSize: 18,
                      textShadowBlur: 0,textShadowColor: 'RGBA(0, 144, 255, 1)',textShadowOffsetX:0,textShadowOffsetY:0
                  }
              },
              backgroundColor: '',
              color: [cake4_num_color, 'RGBA(13, 124, 139, 0.8)', 'RGBA(13, 124, 139, 0.2)'],
              tooltip: {
                  show: false,
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                  show: false,
                  itemGap: 12,
                  data: ['01', '02']
              },
              toolbox: {
                  show: false,
                  feature: {
                      mark: {
                          show: true
                      },
                      dataView: {
                          show: true,
                          readOnly: false
                      },
                      restore: {
                          show: true
                      },
                      saveAsImage: {
                          show: true
                      }
                  }
              },
              series: [{
                      name: 'Line 1',
                      type: 'pie',
                      clockWise: true,
                      radius: [28, 35],
                      itemStyle: dataStyle,
                      hoverAnimation: false,
                      startAngle: -90,
                      data: [{
                              value: cake4_num,
                              name: '01'
                          }, {
                              value: cake4_num>=100 ? 0:100-cake4_num,
                              name: 'invisible',
                              itemStyle: placeHolderStyle
                          }

                      ],
                      animationDuration:3000
                  }, {
                      name: 'Line 2',
                      type: 'pie',
                      animation: false,
                      clockWise: false,
                      radius: [0, 0],
                      itemStyle: dataStyle,
                      hoverAnimation: false,
                      tooltip: {
                          show: false
                      },
                      data: [{
                              value: 100,
                              name: '02',
                              itemStyle: {
                                  emphasis: {
                                      color: '#313443'
                                  }
                              }
                          }, {
                              value: 0,
                              name: 'invisible',
                              itemStyle: placeHolderStyle
                          }

                      ],
                      animationDuration:3000
                  },


              ]
            };
            mycake4.setOption(option);
          }
        cake4Fn();
        // console.log(res);

        //进出口收入 --进口
          let ordercake_num='';
        if(Number(axiosData.left.impo.persent)==100){
            ordercake_num=parseInt(Number(axiosData.left.impo.persent))
        } else{
            ordercake_num=(Number(axiosData.left.impo.persent)).toFixed(2)
        }
        // let ordercake_num=(Number(axiosData.left.impo.persent)).toFixed(2) ;//外环
        let ordercake_num2=(Number(axiosData.left.impo.timePersent)).toFixed(2) ;//内环
        var ordercake_color='';
        if( Number(ordercake_num) < Number(ordercake_num2) ){
            ordercake_color='#EF2888'
        }else{
            ordercake_color='RGBA(3, 231, 250, 1)'
        }
        let intNumber5 =ordercake_num.toString().split('.') ;
        const ordercake = this.$refs.earnindivmbottom;
        let myorderincake = echarts.init(ordercake);
        function cakeorderinFn(){
          var dataStyle = {
              normal: {
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  },
                  shadowBlur: 10,
                  shadowColor: 'rgb(2,94,188)',
              }
          };
          var placeHolderStyle = {
              normal: {
                  color: 'rgba(0,0,0,0)',//未完成的圆环的颜色
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  }
              },
              emphasis: {
                  color: 'rgba(0,0,0,0)'//未完成的圆环的颜色
              }
          };
          let option = {
              title: [
                {
                  text: ordercake_num,
                  left:'center',
                  top:'center',
                  textStyle: {
                      fontWeight: 'normal',
                      color: Number(ordercake_num) < Number(ordercake_num2)?'#EF2888':'#fff',
                      fontWeight:700,
                      fontSize: 25,
                      textShadowBlur: 30,textShadowColor: 'rgb(2,94,188)'
                  }
                },
              // {
              //     text: intNumber5[0],
              //     left:'center',//intNumber5[0].length > 2 ? '40%' : intNumber5[0].length < 2 ? '50%' : 'center',
              //     top:'38%',
              //     textStyle: {
              //         fontWeight: 'normal',
              //         color: Number(ordercake_num) < Number(ordercake_num2)?'#EF2888':'#fff',
              //         fontWeight:700,
              //         fontSize: 33,
              //         textShadowBlur: 30,textShadowColor: 'rgb(2,94,188)'
              //     }
              // },{
              //     show:intNumber5[0].length>2?false:true,
              //     text: '.'+intNumber5[1],
              //     x: intNumber5[0].length === 1 ? '55%' : intNumber5[0].length === 2 ? '57%' : '67%',
              //     y:'48%',
              //     textStyle: {
              //         fontWeight: 'normal',
              //         color: Number(ordercake_num) < Number(ordercake_num2)?'#EF2888':'#fff',
              //         fontSize: 16,
              //         textShadowBlur: 30,textShadowColor: 'rgb(2,94,188)'
              //     }
              // }
              ],
              backgroundColor: '',
              color: [ordercake_color, '#0090FF', 'RGBA(13, 124, 139, 0.2)'],

              tooltip: {
                  show: false,
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                  show: false,
                  itemGap: 12,
                  data: ['01', '02']
              },
              geo:{
                // top:-10
                // right:'right',
                // left: 10
              },
              toolbox: {
                  show: false,
                  feature: {
                      mark: {
                          show: true
                      },
                      dataView: {
                          show: true,
                          readOnly: false
                      },
                      restore: {
                          show: true
                      },
                      saveAsImage: {
                          show: true
                      }
                  }
              },
              series: [{
                  name: 'Line 2',
                  type: 'pie',
                  animation: false,
                  clockWise: true,
                  radius: ['55%', '40%'],
                  itemStyle: dataStyle,
                  hoverAnimation: false,
                  center:['50%','50%'],
                  startAngle: -90,
                  tooltip: {
                      show: false
                  },
                  data: [{
                          value: ordercake_num,
                          name: '02'
                      }, {
                          value: 100-ordercake_num,
                          name: 'invisible',
                          itemStyle: placeHolderStyle
                      }

                  ],
                  animationDuration:3000
              },{
                      name: 'Line 1',
                      type: 'pie',
                      clockWise: true,
                      radius: ['70%', '58%'],
                      itemStyle: dataStyle,
                      hoverAnimation: false,
                      center:['50%','50%'],
                      startAngle: -90,
                      data: [{
                              value: ordercake_num2,
                              name: '01'
                          }, {
                              value: 100-ordercake_num2,
                              name: 'invisible',
                              itemStyle: placeHolderStyle
                          }

                      ],
                      animationDuration:3000
                  }]
            };
            myorderincake.setOption(option);
          }
        cakeorderinFn();

        //进出口收入 --出口
        let orderoutcake_num='';
        if(Number(axiosData.left.excit.persent)==100){
            orderoutcake_num=parseInt(Number(axiosData.left.excit.persent))
        } else{
            orderoutcake_num=(Number(axiosData.left.excit.persent)).toFixed(2)
        }
        // let orderoutcake_num=(Number(axiosData.left.excit.persent)).toFixed(2) ;//外环
        let orderoutcake_num2=(Number(axiosData.left.excit.timePersent)).toFixed(2) ;//内环
        var orderoutcake_color='';

        if( Number(orderoutcake_num) < Number(orderoutcake_num2) ){
            orderoutcake_color='#EF2888'
        }else{
            orderoutcake_color='RGBA(3, 231, 250, 1)'
        }
        let intNumber6 =orderoutcake_num.toString().split('.') ;
        const orderoutcake = this.$refs.earnoutdivmbottom;
        let myorderoutcake = echarts.init(orderoutcake);
        function cakeorderoutFn(){
          var dataStyle = {
              normal: {
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  },
                  shadowBlur: 10,
                  shadowColor: 'rgb(2,94,188)',
              }
          };
          var placeHolderStyle = {
              normal: {
                  color: 'rgba(0,0,0,0)',//未完成的圆环的颜色
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  }
              },
              emphasis: {
                  color: 'rgba(0,0,0,0)'//未完成的圆环的颜色
              }
          };
          let option = {
              title: [
                {
                  text: orderoutcake_num,
                  left:'center',
                  top:'center',
                  textStyle: {
                      fontWeight: 'normal',
                      color: Number(orderoutcake_num) < Number(orderoutcake_num2)?'#EF2888':'#fff',
                      fontWeight:700,
                      fontSize: 25,
                      textShadowBlur: 30,textShadowColor: 'rgb(2,94,188)'
                  }
                },
              // {
              //     text: intNumber6[0],
              //     left:'center',//intNumber6[0].length > 2 ? '40%' : intNumber6[0].length < 2 ? '50%' : '45%',
              //     top:'38%',
              //     textStyle: {
              //         fontWeight: 'normal',
              //         color: Number(orderoutcake_num) < Number(orderoutcake_num2)?'#EF2888':'#fff',
              //         fontWeight:700,
              //         fontSize: 33,
              //         textShadowBlur: 30,textShadowColor: 'rgb(2,94,188)'
              //     }
              // },{
              //     show:intNumber6[0].length>2?false:true,
              //     text: '.'+intNumber6[1],
              //     x: intNumber6[0].length === 1 ? '55%' : intNumber6[0].length === 2 ? '57%' : '67%',
              //     y:'48%',
              //     textStyle: {
              //         fontWeight: 'normal',
              //         color: Number(orderoutcake_num) < Number(orderoutcake_num2)?'#EF2888':'#fff',
              //         fontSize: 16,
              //         textShadowBlur: 30,textShadowColor: 'rgb(2,94,188)'
              //     }
              // }
              ],
              backgroundColor: '',
              color: [orderoutcake_color, '#0090FF', 'RGBA(13, 124, 139, 0.2)'],
              tooltip: {
                  show: false,
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                  show: false,
                  itemGap: 12,
                  data: ['01', '02']
              },
              geo:{
                // top:-10
                // right:'right',
                // left: 10
              },
              toolbox: {
                  show: false,
                  feature: {
                      mark: {
                          show: true
                      },
                      dataView: {
                          show: true,
                          readOnly: false
                      },
                      restore: {
                          show: true
                      },
                      saveAsImage: {
                          show: true
                      }
                  }
              },
              series: [{
                  name: 'Line 2',
                  type: 'pie',
                  animation: false,
                  clockWise: true,
                  radius: ['55%', '40%'],
                  itemStyle: dataStyle,
                  hoverAnimation: false,
                  center:['50%','50%'],
                  startAngle: -90,
                  tooltip: {
                      show: false
                  },
                  data: [{
                          value: orderoutcake_num,
                          name: '02'
                      }, {
                          value: 100-orderoutcake_num,
                          name: 'invisible',
                          itemStyle: placeHolderStyle
                      }

                  ],
                  animationDuration:3000
              },{
                      name: 'Line 1',
                      type: 'pie',
                      clockWise: true,
                      radius: ['70%', '58%'],
                      itemStyle: dataStyle,
                      hoverAnimation: false,
                      center:['50%','50%'],
                      startAngle: -90,
                      data: [{
                              value: orderoutcake_num2,
                              name: '01'
                          }, {
                              value: 100-orderoutcake_num2,
                              name: 'invisible',
                              itemStyle: placeHolderStyle
                          }

                      ],
                      animationDuration:3000
                  }


              ]
            };

            myorderoutcake.setOption(option);
            //window.setTimeout(()=>{
                document.querySelector('.feiji').setAttribute('class','feiji feiji2')
                document.querySelector('.feijitxt').style.opacity = 1;
                document.querySelector('.jkfeiji').setAttribute('class','jkfeiji jkfeiji2');
                document.querySelector('.jkfeijitxt').style.opacity = 1;
            //},0);
          }
        cakeorderoutFn();


        const wordrolltoo = this.$refs.wordmaptoo;
        mywordrolltoo = echarts.init(wordrolltoo);
        // function maproll2(){

          var geoCoordMap = {
                '欧洲': [1.397904,51.123599],
                '台湾': [121.274691,24.656972],
                '中国': [107.7539, 30.1904],
                '美国':  [-100.696295, 43.679979],//[-100.696295, 33.679979],
                '日本': [139.710164, 35.706962],
                '韩国': [126.979208, 37.53875],
                '瑞士': [7.445147, 46.956241],
                '东南亚': [117.53244, 5.300343],
                '澳大利亚': [135.193845, -25.304039],
                '德国': [13.402393, 52.518569],
                '英国': [-0.126608, 51.208425],
                '香港': [114.189353,22.266438],
                //'其他': [0,0],
                '其他':  [25.371569,-0.25329]//[31.235085,30.054631]
            };

            /*
                记录下起点城市和终点城市的名称，以及权重
                数组第一位为终点城市，数组第二位为起点城市，以及该城市的权重，就是图上圆圈的大小
             */

            // 中国
            var CQData = axiosData.middle;
            // 小飞机的图标，可以用其他图形替换
            // var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

            var planePath = 'image://static/img/smallfly.png';

            // 获取地图中起点和终点的坐标，以数组形式保存下来
            var convertData = function (data) {
              var res = [];
              for (var i = 0; i < data.length; i++) {
                  var dataItem = data[i];
                  var fromCoord = geoCoordMap[dataItem[0].name];
                  var toCoord = geoCoordMap[dataItem[1].name];
                  if (fromCoord && toCoord) {
                      res.push([{
                          coord: fromCoord
                      }, {
                          coord: toCoord
                      }]);
                  }
              }
              return res;
          };

          	//#9ae5fc-->地图坐标地区文字颜色，#dcbf71-->
            var color  = ['#9ae5fc', '#dcbf71'];    // 自定义图中要用到的颜色
            var series = [];                        // 用来存储地图数据

            /*
                图中一共用到三种效果，分别为航线特效图、飞机航线图以及城市图标涟漪图。
                要用到setOption中的series属性，并且对每个城市都要进行三次设置。
            */
            [['中国', CQData]].forEach(function(item, i) {
            //   console.log(item);
                series.push({
                    name: item[0].name,
                    type: 'lines',
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        color: '#fff',
                        // symbolSize: 3,
                    },
                    lineStyle: {
                        normal: {
                            color: 'rgb(249,238,204)',
                            width: 0.2,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0],
                    type: 'lines',
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        color: '#fff',
                        symbol:planePath,
                        symbolSize: 20,
                    },
                    lineStyle: {
                        normal: {
                            color: '#FFE432',//color[i],
                            width: 1,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0],
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'fill',
                        scale:0.2
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbol:'image://static/img/mappoint.png',
                    symbolSize: function (val) {
                        return 25;
                    },
                    itemStyle: {
                        normal: {
                            color: color[i]
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            item: dataItem[1],
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
            });
            //添加多个空的series值，用于显示其他路线区域图例
            (()=>{
                let legends = ['美国','欧洲','台湾','东南亚','日本','香港','韩国'];
                legends.forEach((item)=>{
                    series.push({'name':item,'type':'lines'});
                });
            })();
            //世界地图上各线路区域颜色
            let regionsData = (()=>{
            	let allRegion = ['中国','United States','United Kingdom','France','Sweden','Poland','Norway','Plnland','Turkey','Belarus','Romania','Spain','Ukraine','Taiwan','Malaysia','Indonesia','India','Myanmar','Thailand','Papua New Guinea','Japan','Xianggang','Dem. Rep. Korea'];
            	let regionColor = ['#CF2335','#0006FF','#33F061','#33F061','#33F061','#33F061','#33F061','#33F061','#33F061','#33F061','#33F061','#33F061','#33F061','red','#00F0FF','#00F0FF','#00F0FF','#00F0FF','#00F0FF','#00F0FF','#556CDF','red','#BA43FF'];
            	let result = allRegion.map((item,ind)=>{
            		let obj = {
                    	name:item,
                    	itemStyle:{areaColor:regionColor[ind]},
                    	//label:{show:true},
                    	emphasis:{itemStyle:{areaColor:regionColor[ind]}}
                    }
                    if(item === '中国')obj.label = {show:true,color:'white'};
                    return obj;
            	});
            	return result;
            })();
            // 最后初始化世界地图中的相关数据
            let option= ({
                backgroundColor: null,
                color:['#0006FF','#33F061','#FF7200','#00F0FF','#556CDF','#2557E6','#BA43FF'],
                legend: {
                    orient: 'vertical',
                    bottom: 'bottom',
                    // show:'true',
                    left: 80,
                    bottom:'100',//240,
                    itemWidth:5,
                    height:200,
                    data:['美国','欧洲','台湾','东南亚','日本','香港','韩国'],
                    textStyle: {
                        color: '#54B3EA'
                    },
                    // selectedMode: 'single'
                },
                tooltip: {
                      trigger: 'item',
                      triggerOn:'none',
                      padding:[18,35,40,28],
                      textStyle:{
                        width:69,
                        height:64,
                        color:'RGBA(0, 216, 255, 1)'
                      },
                      extraCssText:'background:url("static/img/maplog.png") no-repeat;background-size:100% 100%;background-position:center',
                    formatter: function(params) {
                      // console.log(params);
                        var text;
                        if (params.data.item) {
                           text = '<p style = "font-size:20px;text-align:center;line-height:35px;">'+params.name+'</p>'+
                                 '<p style = "font-size:10px;text-align:center;line-height:28px;">'+'完成值 '+'<strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.final+'</strong>'+' &nbsp;&nbsp;目标值 '+'<strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.flag+'</strong>'+' &nbsp;&nbsp;完成比 '+'<strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.persent+'</strong>'+'%'+'</p>'+
                                 '<div style="display:flex">'+
                                      '<div>'+
                                          '<p style="font-size:14px;">指标 </p>'+
                                          '<p style="line-height:30px">完成值 </p>'+
                                          '<p style="line-height:30px">目标值 </p>'+
                                          '<p style="line-height:30px">完成比 </p>'+
                                      '</div>'+
                                      '<div style="padding-left:15px;">'+
                                          '<p style="font-size:14px;">'+'电商小包 '+'</p>'+
                                          '<p style="line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj1.final+'</strong></p>'+
                                          '<p style="line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj1.flag+'</strong></p>'+
                                          '<p style="line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj1.persent+'</strong>%</p>'+
                                      '</div>'+
                                      '<div style:"padding:12px">'+
                                          '<p style="padding-left:15px;font-size:14px">'+'国际快递 '+'</p>'+
                                          '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj2.final+'</strong></p>'+
                                          '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj2.flag+'</strong></p>'+
                                          '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj2.persent+'</strong>%</p>'+
                                      '</div>'+
                                      '<div>'+
                                          '<p style="padding-left:15px;font-size:14px">'+'FBA '+'</p>'+
                                          '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj3.final+'</strong></p>'+
                                          '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj3.flag+'</strong></p>'+
                                          '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj3.persent+'</strong>%</p>'+
                                      '</div>'+
                                      '<div>'+
                                          '<p style="padding-left:15px;font-size:14px">'+'联运 '+'</p>'+
                                          '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj4.final+'</strong></p>'+
                                          '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj4.flag+'</strong></p>'+
                                          '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj4.persent+'</strong>%</p>'+
                                      '</div>'+
                                 '</div>';
                        }else {
                          console.log(params);
                          text = ''
                        }

                        return text;
                    }
                },
                // tooltip: {
                //     trigger: 'item',
                //     padding:[18,35,40,28],
                //     textStyle:{
                //       width:69,
                //       height:64,
                //       color:'RGBA(0, 216, 255, 1)'
                //     },
                //     extraCssText:'background:url("static/img/maplog.png") no-repeat;background-size:100% 100%;background-position:center',
                //     formatter: function (params) {
                //         //console.log(JSON.stringify(params));
                //         if (params.data.item) {
                //           return '<p style = "font-size:20px;text-align:center;line-height:35px;">'+params.name+'</p>'+
                //                  '<p style = "font-size:10px;text-align:center;line-height:28px;">'+'完成值 '+'<strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.final+'</strong>'+' &nbsp;&nbsp;目标值 '+'<strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.flag+'</strong>'+' &nbsp;&nbsp;完成比 '+'<strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.persent+'</strong>'+'%'+'</p>'+
                //                  '<div style="display:flex">'+
                //                       '<div>'+
                //                           '<p style="font-size:14px;">指标 </p>'+
                //                           '<p style="line-height:30px">完成值 </p>'+
                //                           '<p style="line-height:30px">目标值 </p>'+
                //                           '<p style="line-height:30px">完成比 </p>'+
                //                       '</div>'+
                //                       '<div style="padding-left:15px;">'+
                //                           '<p style="font-size:14px;">'+'电商小包 '+'</p>'+
                //                           '<p style="line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj1.final+'</strong></p>'+
                //                           '<p style="line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj1.flag+'</strong></p>'+
                //                           '<p style="line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj1.persent+'</strong>%</p>'+
                //                       '</div>'+
                //                       '<div style:"padding:12px">'+
                //                           '<p style="padding-left:15px;font-size:14px">'+'国际快递 '+'</p>'+
                //                           '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj2.final+'</strong></p>'+
                //                           '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj2.flag+'</strong></p>'+
                //                           '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj2.persent+'</strong>%</p>'+
                //                       '</div>'+
                //                       '<div>'+
                //                           '<p style="padding-left:15px;font-size:14px">'+'FBA '+'</p>'+
                //                           '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj3.final+'</strong></p>'+
                //                           '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj3.flag+'</strong></p>'+
                //                           '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj3.persent+'</strong>%</p>'+
                //                       '</div>'+
                //                       '<div>'+
                //                           '<p style="padding-left:15px;font-size:14px">'+'联运 '+'</p>'+
                //                           '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj4.final+'</strong></p>'+
                //                           '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj4.flag+'</strong></p>'+
                //                           '<p style="padding-left:15px;line-height:28px"><strong style = "font-size:17px;color:RGBA(114, 233, 255, 1)">'+params.data.item.obj4.persent+'</strong>%</p>'+
                //                       '</div>'+
                //                  '</div>'
                //         }else {
                //           return ""
                //         }
                //
                //     }
                //       // formatter:'{c}<span style="font-size: 10px">单</span>',
                // },
                // title: {
                //     show:'false'
                // },
                geo: {
                    map: 'world',       // 与引用进来的地图js名字一致
                    roam: false,        // 禁止缩放平移
                    zoom: 1.25,
                    aspectScale:1.1,
                    itemStyle: {        // 每个区域的样式
                        normal: {
                            areaColor: 'RGB(2,26,57)',
                            borderColor: '#01cbf2',
                            borderWidth: 1,
                            shadowColor: 'rgba(28,64,166, 0.3)',
                            fontSize: 8,
                            shadowOffsetY: 2,
                            shadowBlur: 3,
                            shadowOffsetX:4,
                            shadowOffsetY:4
                        },
                        emphasis: {
                            areaColor: 'rgba(255,210,0,0.8)'
                        }
                    },
                    regions:regionsData,

                },
                series: series,   // 将之前处理的数据放到这里
                // textStyle: {
                //     fontSize: 12
                // }
            }

          );
          var counts = option.series[0].data.length; //获取所有闪动圆环数量
            var dataIndex = 0;
            //让圆环的提示框自动触发轮播显示
            // function autoHoverTip() {
            //     for (var i = 0; i < counts; i++) {
            //         (function(i) {
            //             var ts = setTimeout(function() {
            //                 mywordrolltoo.dispatchAction({
            //                     type: 'showTip',
            //                     seriesIndex: 2,
            //                     dataIndex: i
            //                 });
            //             }, 20000 * i);
            //         })(i);
            //     }
            // }

            // setTimeout(function() {
            //     autoHoverTip();
            //     var tv = setInterval(autoHoverTip, counts * 20000);
            // }, 500);
          mywordrolltoo.setOption(option);

          function allBallMap(){
              var allBallMapTimer = window.setInterval(()=>{
                    //console.log('map tooltip is running');
                    mywordrolltoo.dispatchAction({
                            type: 'showTip',
                            seriesIndex: 2,
                            dataIndex: dataIndex
                    });
                    dataIndex ++;
                    if(dataIndex>counts-1){dataIndex = 0}
              },5000);

              that.allBallMapTimer = allBallMapTimer;
              that.currAllBallMapStatus = true;
          }

          allBallMap();

          mywordrolltoo.on("click",function (dat) {
              //点击地图时阻止冒泡
              dat.event.event.stopPropagation();
              
              //console.log('地图点击了');
                // if(tipFlg){
                    //autoHoverTip();
                // };
                //当前点击的是数据区域的时候，显示当前区域的tooltip
                if(dat.dataIndex !== undefined && dat.dataIndex!=='undefined'){
                      //显示当前区域的tooltip
                      mywordrolltoo.dispatchAction({
                              type: 'showTip',
                              seriesIndex: 2,
                              dataIndex: dat.dataIndex
                      });
                      //清除地图轮播定时器
                      if(that.allBallMapTimer){
                          window.clearInterval(that.allBallMapTimer);
                          that.allBallMapTimer = null;
                          that.currAllBallMapStatus = false;
                      }
                      //绑定body的点击事件
                      document.body.onclick = null;
                      document.body.onclick = function(){
                              //console.log('点击了body');
                              allBallMap();
                              document.body.onclick = null;
                      };
                }
            });
        // }
        // maproll2();
        var maptype = 1;
        // console.log(this);

        //月累计收入完成比排名
        this.chartearn1(axiosData.business)



        //线路收入完成比
        this.chartearn2(axiosData.line);

        //山东事业部产品结构
        this.busProportionList=axiosData.busProportion
        this.chartearn3(this.busProportionList);


        const options={
          useEasing: false,
          useGrouping: false,
          separator: ',',
          decimal: '.',
        };
        this.orderinNum = parseInt(this.totalData[0].left.today.todayFinal);
        const demo = new CountUp('orderinNum', 0, this.orderinNum, 0, 3, options);
        // console.log(demo);
        if (!demo.error) {
          demo.start();
        } else {
          console.error(demo.error);
        }


        //问号悬浮框
        $('body').on('click',function(){
          // console.log(111);
          if ($('.showTitleBox')) {
          //
            $('.showTitleBox').remove();
          }
        });
      $('.imghover').on('click',function(event){
        event.stopPropagation();
        var lsList = axiosData.desdata;
        // console.log(axiosData.desdata);
        // console.log(event);
        $('.showTitleBox').remove();
        var oldTitle = null;

        var text = event.target.offsetParent.innerText;
        console.log(text);
        // var
        if (text.length>7) {
          text = text.substring(0,3);
        }
        // console.log(text);
        var left = event.pageX , top = event.pageY;
        var ele = event.target;

        var title = ele.title;
        oldTitle = title;
        ele.title = '';
        var wmsIndexExplainlisttext = "";
        lsList.forEach(function(item){
            if (item.name.substring(0,3) == text) {
              wmsIndexExplainlisttext = item.text;
            }
          // }
        });
        if (event.target.offsetParent.innerText.substring(0,7) == '月累计收入完成') {
          wmsIndexExplainlisttext = lsList[3].text;
        }else if (event.target.offsetParent.innerText.substring(0,7) == '月累计线路收入') {
          wmsIndexExplainlisttext = lsList[4].text;
        }
        // console.log(wmsIndexExplainlisttext);


        var showEle = $('<div></div>',{text:title,class:'showTitleBox'}).css({
              position:'absolute',
              top:top-70,
              left:left-420,
              width:420,
              // height:120,
              // textAlign:'center',
              // verticalAlign:'middle',
              color:'#00D8FF',
              border:'1px solid #00D8FF',
              borderRadius:'5px',
              zIndex: 999,
              background:"rgba(10,27,82,0.8)",
              fontFamily:'SimHei'
          })
          showEle.appendTo('.container');
          $('.showTitleBox')[0].innerHTML = '<span class = "close" style = "position:absolute;right:5px;top:-3px;font-size:16px">'+'<i class="iconfont icon-guanbi"></i>'+'</span>'+ '<p style="padding:10px 20px;font-size:16px">' +wmsIndexExplainlisttext +'</p>';
          $('.close')[0].addEventListener('click',function(){
            $('.showTitleBox').remove();
          });
        });





      },
      monthlyAccumulative(charObj,len,typ){  //自动播放tooltip
          //自动轮播tooltip
          var indexNum1 = 0; //播放所在下标
          var mTime = setInterval(function() {
            charObj.dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex: indexNum1
            });
            charObj.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: indexNum1-1
            });
            indexNum1++;
            if(indexNum1 > len-1) {
              indexNum1 = 0;
            }
          }, 5000);
          this.monthlyAccumulativeTimer[typ] = mTime;
      }

    },
    //计算属性
    computed:{
        todayColor:function(){
            try{
              //今日累计
              let curr = this.totalData[0].left.today.todayFinal;
              // console.log(curr);

              //上期同期
              let last = this.totalData[0].left.today.hisTodayFinal;
              if(Number(curr) - Number(last)<0)return '#EF2888'; //新增
              else return '';
            }catch(err){
              return '';
            }
        },
        tqState:function(){
              try{
                  //今日累计
                  let curr = this.totalData[0].left.today.todayFinal;
                  //上期同期
                  let last = this.totalData[0].left.today.hisTodayFinal;
                  if(Number(curr) < Number(last))return true;
                  else return false;
              }catch(err){
                  return false;
              }

        }
    },
    mounted(){
        let that=this;

        // 请求数据
        var request=function(){
            //20181107
             axios.post('/ibsshow/read/getData',{}).then((res)=>{ //上线
            //axios.get('http://localhost:8089/static/data.json').then((res)=>{ //本地
                var axiosData=res.data.data;
                axios.post('/ibsshow/read/getAllIndex',{}).then((des)=>{ //上线
                 //axios.get('../../static/data2.json').then((des)=>{ //本地
                    console.log(des);
                    var desdata=des.data.rows;
                    axiosData.desdata = desdata;
                });
                that.totalData.push(axiosData)
                that.init(axiosData);
            })
        }
        request()

        var request2=function(){
            that.totalData=[];//清空
            that.cityName='全国产品结构' ;
            that.isAnimation=true;
            that.refresh=false;

            //月累计线路收入完成比排名图表每次数据刷新的时候，重置标识
            that.chartearn2Name = '';
            //清除地图轮播定时器
            if(that.allBallMapTimer){
                window.clearInterval(that.allBallMapTimer);
                that.allBallMapTimer = null;
                that.currAllBallMapStatus = false;
            }

            // if(that.isEarth==true){ //地球仪
            //     that.maphide = false;
            //     that.mapshow = false;
            //     that.mapthree = true;
            //     that.currBollType = true;
            //     that.isMap=false;
            //     that.isEarth=true;
            // }
            // if(that.isMap==true){ //地图
            //     console.log('=========================是否222');
            //     that.maphide = true;
            //     that.mapshow = true;
            //     that.mapthree = false;
            //     that.currBollType = false;
            //     that.isMap=true;
            //     that.isEarth=false;
            // }
            //20181110
             axios.post('/ibsshow/read/getData',{}).then((res)=>{ //上线
           //axios.get('http://localhost:8089/static/data.json').then((res)=>{ //本地
                var axiosData=res.data.data;
                axios.post('/ibsshow/read/getAllIndex',{}).then((des)=>{ //上线
                 //axios.get('../../static/data2.json').then((des)=>{ //本地
                    console.log(des);
                    var desdata=des.data.rows;
                    axiosData.desdata = desdata;
                });
                that.totalData.push(axiosData);
                //取消月累计完成比排名，月累计线路完成比排名的tooptip轮播的定时器
                for(var typ in that.monthlyAccumulativeTimer){
                      window.clearInterval(that.monthlyAccumulativeTimer[typ]);
                }
                that.monthlyAccumulativeTimer = {};

                that.init(axiosData);
            })

        }
        var t=setInterval(request2,1000*60*1) //每隔一分钟请求数据
        clearInterval(t)//清除定时器
        t=setInterval(request2,1000*60*1)//重新开始定时器

        // 每隔5分钟刷新页面
        setInterval(function(){
            window.location.reload()
        },1000*60*5)

    },
    components:{
      Layout,Sider,Menu,MenuItem,Icon,Header,Content,Breadcrumb,BreadcrumbItem,Card,Row,Col,chart2,Map
    }
  }
</script>

<style scoped>
  @font-face{
  font-family: myFirstFont;
    src: url('../../static/fonts/Regular.ttf') format('truetype');
  }
  .trend{
    font-size: 13px;
    position: absolute;
    top: 27px;
    right: 0;
    display: flex;
    color: RGBA(84, 179, 234, 1);
  }
  .trend li{
      margin-left:20px;
      cursor: pointer;
  }
  .trend li:nth-child(2){
      margin-right:3px;
  }
  .changeTrend{
      color: RGBA(248, 181, 0, 1);
  }
  #monitor{
    width:1920px;
    height: 1080px;
    /* width:4864px; */
    /* height:1536px; */
    background: url(../../static/img/bg.png) no-repeat;
    background-size: 100% 100%; 
    overflow: hidden;
  }
  .earth{
      opacity: 0;
  }
  .cakes_persent{
      color: RGBA(36, 216, 255, 1);
    text-align: center;
    transform: scale(0.9);
  }

  .timeProgress{
    position: relative;
    width: 81px;
    height: 11px;
    display: inline-block;
    top: 1px;
    background:rgba(0,14,37,1);
    opacity:0.6;
    border-radius:6px;
  }
  .progress{
    position: absolute;
    top: 0;
    left: 0;
    /* width: 60%; */
    height: 100%;
    background:rgba(53, 251, 255, 1);
    /* opacity:0.75; */
    border-radius:6px 0 0 6px;
  }
  .line{
    position: absolute;
    top: -2px;
    /* left: 60%; */
    width: 2%;
    height:15px;
    background:rgba(255,234,0,1);
    border-radius:1px;
  }
  .text{
    position: absolute;
    top: -5.9px;
    /* left:calc(60% + 4px); */
    font-size:13px;
    transform: scale(0.75);
    color:rgba(224,233,255,1);
  }

  .mask{
    position: absolute;
    width: 1000px;
    height: 100%;
    left: 450px;
    top: 2%;
    margin-top: -8vh;
    /* z-index: 120; */
  }
  .ivu-layout{
    background: none;
  }

  #monitor{
    height: 100%
  }
  .header{
    /*height: 7vh;*/
    height: 70px;
    width: 100%;
    margin-top: 15px;
  }
  .iconheader{
    font-family: myFirstFont;
    position: absolute;
    top: 32px;
    left: 46px;
    width: 300px;
    height: 66px;
    display: flex;
    /*修改注释掉的地方justify-content: space-around;*/
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
    position: relative;
    /*height: 88vh;*/
    height: calc(100% - 85px);
  }
  .h100{
    height: 88vh;
    display: flex;
    flex-direction: column;
  }
  .cityname{
    color: #00D8FF!important
  }
  .left_header{
    width: 100%;
    /*height: 20vh;*/
    height: 50%;
    position: relative;
  }
  .earn_tittle{
    font-family: MicrosoftYaHei;
    margin-top: 0;
    height: 21px;
    line-height: 21px;
    font-size: 12px;
    color: #fff;
  }
  .earn_tittle p{
    /*测试注释掉padding-left: 24px;*/
    margin-left: 6px;
    background:linear-gradient(right,RGBA(0, 93, 152, 0),RGBA(0, 93, 152, 1));
  }
  .imghover{
    float: right;
    /*width: 30px;*/
    width: 21px;
    height:21px;
  }
  .imgh3{
    /*height: 3.2vh;*/
    height:21px;
    position: absolute;
    /* top: -0.5vh; */
    /*上面那个不是left: 34px;*/
    left: 0;
  }
  .change_li{
    padding-left: 21px;
    /*height: 3vh;
    line-height: 3vh;*/
    height: 21px;
    line-height: 21px;
    margin-top: 6px;
    color: RGBA(84, 179, 234, 1);
    position: relative;
  }
  .change_li>li{
    font-size: 13px;
    float: left;
    /* width: 50px; */
    margin-right: 20px;
  }
  .changeColor{
    color: RGBA(248, 181, 0, 1);
  }
  .chart1{
    width: 100%;
    /*height: 16vh*/
    flex-grow: 1;
  }
  .roll{
    /* padding-top: 1vh; */
    /*hzh---margin-top: 1vh;
    height: 16vh;*/
    margin-top: 10px;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
  }
  .cakes{
    width: 22%;
  }
  /*hzh添加*/
  .cakes>h3{
    /* padding-bottom:5px; */
  }
  /*hzh添加*/
  .cakes_l{
    width: 100%;
    /*hzh---height: 10vh;*/
    height: 90px;
    padding-top:5%;/*处理环的位置*/
    /* margin-top: 1vh; */
    margin-top:2px;
    background: url(../../static/img/goodinbg.png) no-repeat center top;
    background-size:95% 95%;
    /*background-position: 48% 26%;*/
  }
  .strongspan{
    font-size: 16px;
    font-weight:bold;
  }
  .goods_ddetail{
    padding: 2px 0;
    font-size: 12px;
    width: 100%;
    /*hzh
    /*height: 5vh;
    margin-top: 1vh;*/
    margin-top: -5px;
    background: url(../../static/img/goodsbg.png) no-repeat;
    background-size: 100% 100%;
  }
  .goods_ddetail>p{
    display: flex;
    align-items: center
    /*hzh---height: 3vh;
    line-height: 3vh;*/
  }
  .roll h3{
    font-family: MicrosoftYaHei;
    color: RGBA(36, 216, 255, 1);
    text-align: center;

  }
  .wordmap{
    width: 100%;
    height: 95vh;
    margin-top: -8vh;
    position: absolute;
    background:url(../../static/img/carbg.png);
    z-index: 2;
  }
  .wordmap2{
    width: 100%;
    height: 95vh;
    margin-top: -8vh;
    /* opacity: 0; */
    position: absolute;
    z-index: -1;
  }
  .wordmap22{
    width: 1840px;
    height: 60vh;
    margin-top: -10vh;
    top: 2%;/*4vh;*/
    left: 2px;
    /* opacity: 0; */
    position: absolute;
    z-index: 10;
  }
  .earn_in{
    /*height: 14vh;*/
    height:211px;
  }
  .earn_in h4{
    height: 3.5vh;
    line-height: 3.5vh;
    color: RGBA(36, 216, 255, 1);
    font-size: 12px;
    position: relative;
    padding-left: 30px;
  }
  .earn_in h4 img{
    position: absolute;
    top: 5px;
    left: 2px;
  }
  .earnindivm{
    width: 100%;
    /*height: 10vh;*/
    height:221px;
    padding:10px 0;
    display: flex;
  }
  .earnindiv{
    width: 67%;
    height: 10vh;
    display: flex;
    background: url(../../static/img/earninoutbg.png) no-repeat;
    background-size: 100% 100%;
  }
  .earnindiv1{
    width: 30%;
    height: 10vh;
    background: url(../../static/img/earnincome.png) no-repeat;
    background-size: contain;
  }
  .earnindiv11{
    width: 30%;
    height: 10vh;
    background: url(../../static/img/earnoutcome.png) no-repeat;
    background-size: contain;
  }
  .earnindiv2{
    width: 35%;
    color: RGBA(0, 241, 255, 1);
    height: 10vh;
  }
  .earnindiv2 h2{
    font-size: 33px;
    height: 6vh;
    line-height: 6vh;
  }
  .earnindiv2 p{
    height: 3vh;
    line-height: 3vh;
  }
  .earnindiv2 p>span{
    font-size: 12px;
    transform: scale(0.90);
  }
  .earnindiv3{
    width: 35%;
    color: RGBA(0, 156, 255, 1);
    height: 10vh;
  }
  .earnindiv3 h2{
    font-size: 33px;
    height: 6vh;
    line-height: 6vh;
  }
  .earnindiv3 p{
    height: 3vh;
    line-height: 3vh;
  }
    .earnindivmbottomBgh{
        width: 184px;
        height: 184px;
        position: relative;
    }
    /* background: url(../../static/img/orderpersent.png) no-repeat; */
    .earnindivmbottomBg{
      width: 100%;
      height: 100%;
      position: absolute;
      background: url(../../static/img/orderpersent.png) no-repeat 60% center;
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-animation: mymove 20s linear infinite;
      animation: mymove 20s linear infinite;
      background-position: -1% 50%;
      background-size: auto 69%;
      width: 100%;
    }

  .earnindivmbottom{
    /*width: 33%;*/
    width: 100%;
    height:100%;
    position:absolute;right:0;
    /*hzh---height: 13vh;
    margin-top: -2vh;
    padding-left: 5.6%;*/
    /* padding-top: 20px; */
    /* background: url(../../static/img/orderpersent.png) no-repeat;
    background-position: center;
    background-size: 100% auto; */
    /* animation:earnindivmbottomMove 20s linear infinite; */
  }
   @keyframes earnindivmbottomMove{
        from{
            transform-origin:50% 50%;
            transform:rotate(0deg);
        }
        to{
            transform-origin:50% 50%;
            transform:rotate(360deg);
        }
    }
    /* 修改 */
  .changemap{
    position: absolute;
    z-index: 669;
    width: 50px;
    height: 50px;
    /*left:50%;*/
    left:calc(50% - 25px);
    /*bottom: 0px;*/
    bottom: 460px;/* 地图 */
    /* bottom: 20px; 地球仪 */
  }
  /* 地图 */
  .changemap2{
    animation: changemapMove 3s linear 1;
    bottom: 460px;
  }
  @keyframes changemapMove{ /* 地图 */
      0% {
        bottom:20px;
      }
      100% {
        bottom: 460px;

      }
    }
  /* 地球仪 */
  .changemap3{
    animation: changemapMove2 3s linear 1;
    bottom: 20px;
  }
    @keyframes changemapMove2{ /* 地球仪 */
      0% {
        bottom: 460px;
      }
      100% {
         bottom:20px;

      }
    }

  .wordmaphide{
    position: absolute;
    /* 这个是地球仪展开没有动画 */
    animation: wordctrl 3s linear 1;
    opacity: 0;
    width: 100%;
    height: 55vh;
    top: 2%;/*4vh;*/
    z-index: -1
  }
  @keyframes wordctrl{
      0% {
        transform:scale(1);
        opacity: 1;
        /*地图层级z-index: 100;*/
        z-index:1;
      }
      50% {
        transform:scale(0.05);
        opacity: 1;
        /*地图层级z-index: 100;*/
        z-index:1;
      }
      100% {
        transform:scale(0.05);
        opacity: 0;
        z-index: -1;

      }
    }
    .wordmapshow{
      position: absolute;
      opacity: 1;
      z-index: 1;
      animation: wordshowctrl 3s linear 1;
    }
    @keyframes wordshowctrl{
        0% {
          transform:scale(0);
          opacity: 0;
        }
        50% {
          transform:scale(0.05);
          opacity: 1;
        }
        100% {
          transform:scale(1);
          opacity: 1;

        }
      }
      .wordmapshow1{
        position: absolute;
        opacity: 1;
        /*z-index: 100;*/
        z-index:0;
        width: 1900px;
        top: 4%;/*4vh;*/
        left: 35px;
        height: 55vh;
        animation: wordshowctrl1 3s linear 1;
      }
      @keyframes wordshowctrl1{
          0% {
            transform:scale(0);
            opacity: 0;
          }
          50% {
            transform:scale(0.05);
            opacity: 1;
          }
          100% {
            transform:scale(1);
            opacity: 1;

          }
        }
      .right_header{
        height: 20vh;
        position: relative;
      }
      .chartright1{
        width: 100%;
        /*height: 18vh;*/
        height:200px;
      }
       .bgh{
           width: 100%;
          height:430px;
          position: relative;
      }
      .bg2{
            width: 30px;
            height: 30px;
            left: 50%;
            top: 50%;
            border-radius: 50%;
            margin-left: -15px;
            margin-top: -15px;
          position: absolute;
          background: url(../../static/img/logo2.png) no-repeat center;
            background-size: 111%;
      }
      .bg{
          width: 100%;
          height:100%;
          position: absolute;
          background: url(../../static/img/bg2.png) no-repeat 60% center;
          transform-origin:50% 50%;
          animation:mymove 20s linear infinite;
            background-position: -1% 50%;
            background-size: auto 69%;
      }

      .chartright3{
        /*background: url(../../static/img/cakebg.png) no-repeat 60% center;*/
        /*background-size:87%;*/
        /*hzh---background-position: 57% 58%;
        background-size: 70% 69%;
        height: 30vh;*/
        height:430px;
      }
      @keyframes mymove{
        from{
            transform-origin:50% 50%;
            transform:rotate(0deg);
        }
        to{
            transform-origin:50% 50%;
            transform:rotate(360deg);
        }
    }
      .divmodal{
        /*width: 400px;*/
        width:430px;
        /*height: 42vh;*/
        height: 42%;
        float: right;
      }
      .divmodal1{
        position: absolute;
        left: 35px;
        z-index: 999;
        /*top: 4vh;*/
        top: 52%;
      }
      .divmodal11{
        position: absolute;
        left: 35px;
        bottom: -1vh;
        top:2%;
        width: 430px;
        height: 42vh;
        z-index: 99;
        animation: divmodal11s 3s linear 1;
      }
      @keyframes divmodal11s{
          0% {
            left: 35px;
            top: 52%;/*4vh;*/
            z-index: 66;
          }
          50% {
            left: 35px;
            top: 2%;/*4vh;*/
            z-index: 66;
          }
          100% {
            left: 35px;
            /*hzh---top: 55vh;*/
            top:2%;
            z-index: 66;

          }
        }
      .divmodal111{
        position: absolute;
        left: 35px;
        /*top: 4vh;*/
        /* z-index: 999; */
        top:52%;
        animation: divmodal111s 3s linear 1;
      }
      @keyframes divmodal111s{
          0% {
            left: 35px;
            top: 2%;/*55vh;*/
            z-index: 66;
          }
          50% {
            left: 35px;
            top: 2%;/*4vh;*/
            z-index: 66;
          }
          100% {
            left: 35px;
            top: 52%;/*4vh;*/

          }
        }
      .divmodal2{
        position: absolute;
        left: 35px;
        /*width: 400px;*/
        width:430px;
        /*top: 50vh;*/
        top: 52%;
        left: 500px;
        z-index: 666;
      }
      .divmodal22{
        position: absolute;
        left: 35px;
        /*width: 400px;*/
        width:430px;
        /*top: 50vh;*/
        top: 52%;
        z-index: 666;
        animation: divmodal222 3s linear 1;
      }
      @keyframes divmodal222{
          0% {
            left: 500px;
            top: 52%;/*4vh;*/
            z-index: 66;
          }
          50% {
            left: 500px;
            top: 52%;/*4vh;*/
            z-index: 66;
          }
          100% {
            left: 35px;
            /*hzh---top: 55vh;*/
            top:52%;
            z-index: 66;

          }
        }
        .divmodal222{
          position: absolute;
          left: 500px;
          top: 52%;
          /* z-index: 999; */
          /* top:52%; */
          animation: divmodal222s 3s linear 1;
        }
        @keyframes divmodal222s{
            0% {
              left: 35px;
              top: 52%;/*55vh;*/
              z-index: 66;
            }
            50% {
              left: 500px;
              top: 52%;/*4vh;*/
              z-index: 66;
            }
            100% {
              left: 500px;
              top: 52%;/*4vh;*/

            }
          }
      .divmodal3{
        width: 1000px;
        left:460px;
        /*top: 4vh;*/
        top: 2%;
        margin-left: -40px;
      }
      .divmodal4{
        position: absolute;
        right: 500px;
        /*hzh---top: 4vh;*/
        top:52%;
        z-index: 666;
      }
      .divmodal44{
        position: absolute;
        right: 35px;
        /*hzh---top: 55vh;*/
        top:2%;
        width: 430px;
        z-index: 99;
        height: 42vh;
        animation: divmodal444 3s linear 1;
      }
      @keyframes divmodal444{
          0% {
            right: 500px;
            top: 52%;/*4vh;*/
            z-index: 66;
          }
          50% {
            right: 500px;
            top: 2%;/*4vh;*/
            z-index: 66;
          }
          100% {
            right: 35px;
            /*hzh---top: 55vh;*/
            top:2%;
            z-index: 66;

          }
        }
      .divmodal444{
        position: absolute;
        z-index: 666;
        right: 500px;
        top: 52%;/*4vh*/;
        animation: divmodal444s 3s linear 1;
      }
      @keyframes divmodal444s{
          0% {
            right: 35px;
            top: 2%;/*55vh;*/
            z-index: 66;
          }
          50% {
            right: 500px;
            top: 2%;/*4vh;*/
            z-index: 66;
          }
          100% {
            right: 500px;
            top: 52%;/*4vh;*/

          }
        }
      .divmodal5{
        position: absolute;
        right: 35px;
        /*top: 50vh;*/
        top:52%;
        background-color:RGBA(2, 26, 55, .75);
        /* 新增 */
        z-index: 11;
      }

      .hh{border:1px solid red;}
      .mh100{height:100%;}
      .uhide{display:none !important;}
      .bg1{
          background:url('../../static/img/grossincome.png') no-repeat center;
          background-size:100% 100%;
      }
      .today-tab{
          display:flex;flex-direction:column;
          padding:10px;
      }
      .today-tab>p:first-child,.today-tab>div{height:16px;font-size:10px;color:#24D8FF;}
      .today-tab>h2{flex-grow:1;display:flex;align-items:center;justify-content: center;font-size:60px;color:#00F1FF;padding-left:16px;}
      .today-tab>div{height:25px;display:flex;justify-content:space-between;color:#009CFF;}
      .fx{display:flex;}
      .fx-colu{flex-direction: column;}
      .fx-pj{justify-content:space-between;}
      .fx-ac{align-items:center;}
      /*文字缩放0.8*/
      .fon08{
          display:inline-block;
          /*transform-origin:left bottom;*/
          /* transform:scale(0.8,0.8); */
      }
      .c1{color:#00F1FF;}
      .c2{color:#009CFF;}
      /*出口进口收入*/
      .entoutbg{
          position: relative;
          background:url('../../static/img/bogaiwan.png') no-repeat center -5%;
          background-size:90% 90%;
      }
      .entoutbg2{
          position: relative;
          background:url('../../static/img/bogaiwan.png') no-repeat center -5%;
          background-size:90% 90%;
      }
      /*飞机动画*/
      .feiji{
          width:80px;height:30px;
          background:url('../../static/img/chukoufly.png') no-repeat center;
          background-size: 100%;
          position:absolute;top:200px;left:-145px;
          transition: all 3s;
      }
      .feiji2{
          top:55px;left:6px;
      }
      .jkfeiji{
          width:80px;height:30px;
          background:url('../../static/img/jinkoufly.png') no-repeat center;
          background-size: 100%;
          position:absolute;top:220px;left:450px;
          transition: all 3s;
      }
      .jkfeiji2{
          top:55px;left:6px;
      }
      .feijitxt{
          width:40px;height:18px;
          background:url('../../static/img/jinkoutit.png') no-repeat center;
          background-size: 100%;
          position:absolute;bottom:10px;left:25px;
          transition: all 3s;
          opacity: 0;
      }
      .jkfeijitxt{
          width:40px;height:18px;
          background:url('../../static/img/chukoutit.png') no-repeat center;
          background-size: 100%;
          position:absolute;bottom:10px;left:25px;
          transition: all 3s;
          opacity: 0;
      }
      .entryoutleftsty{
          width:58%;height:77%;
      }
      .entryoutleftsty>div{
          width:35%;height:100%;
      }
      .entryoutleftsty>ul,.entryoutleftsty>ul>li{list-style: none;padding:0;margin: 0;}
      .entryoutleftsty>ul{padding:5px 0;}
      .entryoutleftsty>ul>li:first-of-type{
        /*margin-top: 15px;*/
      }
      .entryoutleftsty>ul>li:last-of-type{
        /*margin-bottom: 15px;*/
      }
      /*全国按钮*/
      .countrywide{
      	z-index: 2;
      	cursor:pointer;
          position:absolute;top:50px;
          width:70px;height:30px;line-height:30px;
          color:white;font-size:12px;text-align:center;
          background:url('../../static/img/countrywide.png') no-repeat center;
      }
      .change_li>li{cursor:pointer;}
      .redtxt{color:#EF2888;}
      /* 新增 */
      .today-color{
          color:#19D81D;
      }
      .today-color2{
          color:#EF2888;
      }

      .today-state{
          width:10px;height:10px;
          background:url('../../static/img/jiantou.png') no-repeat center;
          display:inline-block;
      }
      .rota90{
          background:url('../../static/img/jiantou2.png') no-repeat center;
          transform: rotate(180deg);
      }
      .box-bor{
          /* border:1px solid #005D98; */
      }
      /*月完成比排名*/
      /* .timeblabel{
          position:absolute;right:16px;top:0;
          height:60px;
          color:#0090FF;
          text-align: center;
          background:url('../../static/img/jinchukouTR.png') no-repeat center;
          background-size: 100% 100%;
      }
      .monthwcblabel{
          position:absolute;left:-112px;top:0;
          width:159px;
          height:50px;
          color:#00F0FF;
          background:url('../../static/img/jinchukouTL.png') no-repeat center;
          background-size: 100% 100%;
      }
      .timeblabel>span,.monthwcblabel>span{
          display:inline-block;
          transform: scale(.9,.9);
      } */
      .monthwcblabel,.timeblabel{
          position:absolute;top:165px;
          width:80px;
          height:150px;
          line-height: 152px;
          text-align: center;
          /*opacity: 0.5;*/
      }
      .monthwcblabel{
          right:80px;
          color:#00F0FF;
          background:url('../../static/img/monthcompletion.png') no-repeat left center;
          background-size: 96% 83%;
      }
      .timeblabel{
          right:0;
          color:#0090FF;

          background:url('../../static/img/timeprogress.png') no-repeat right center;
          /*opacity: 0.6;*/
          background-size: 96% 94%;
      }
      .imgmiss{
        animation: imgmissshow 0.5s linear infinite;
      }
      @keyframes imgmissshow{
        0% {
        opacity: 0.3;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0.3;
        }
      }
</style>
