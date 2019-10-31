import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
// 这里定义初始值
let state = {
  base64:null
};
console.log(this);
const mutations = {

};

// 事件触发后的逻辑操作
// 参数为事件函数
const actions = {

};

// 返回改变后的数值
const getters = {
  base64(context){
    return context.base64;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
