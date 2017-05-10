import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/common.css'
import App from './App.vue'
import routes from './routes/index.js'


Vue.use(ElementUI)
Vue.use(VueRouter)

// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
  routes: routes
})

// new Vue({
//   mode: 'history'
//   //router
// }).$mount('#app')

window.__lendApp__ = new Vue({
	  el: '#app',
	  router,
	  render: h => h(App)
	});