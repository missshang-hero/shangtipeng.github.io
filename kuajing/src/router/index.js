import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// import details from '../components/details'
import Monitor from '../components/Monitor'
import Monitor2 from '../components/Monitor2'
export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Monitor',
      component: Monitor
    },
    {
      path: '/index2',
      name: 'Monitor2',
      component: Monitor2
    }

  ]
})
