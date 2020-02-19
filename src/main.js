// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
process.env.NODE_ENV === "development" ? require('./mock/mock.js') : null; //develpment模式下加载mock.js 文件

Vue.use(ElementUI);

Vue.prototype.$axios = axios; //2.修改原型链
axios.defaults.timeout = 5000// 超时时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//axios并不是一个组件，所以不能使用Vue.use(...)方法将其引入项目，通过修改原型链可直接使用
//组件中，通过this.axios.get/post('xxx').then(response => (xxx)).catch(error =>(xxx))来使用了

// 路由拦截


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
