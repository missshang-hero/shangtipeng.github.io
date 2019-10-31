import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Navigate from '../components/Navigate'
import Monitor from '../components/Monitor'
import Settings from '../components/Settings'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navigate',
      component: Navigate
    }, {
      path: '/Navigate',
      name: 'Navigate',
      component: Navigate
    },
    {
      path: '/Monitor',
      name: 'Monitor',
      component: Monitor
    },
    {
      path:'/Settings',
      name:'Settings',
      component:Settings
    }
  ]
})
