// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import axios from './service/http' //这个引入封装好的axios，自带http拦截
import 'element-ui/lib/theme-chalk/index.css';
process.env.NODE_ENV === "development" ? require('./mock/mock.js') : null;
  //develpment模式下加载mock.js文件(只在开发环境使用mock.js，而打包到生产环境时自动不使用mock.js)

Vue.prototype.$axios = axios //2.修改原型链
Vue.use(ElementUI);

//axios并不是一个组件，所以不能使用Vue.use(...)方法将其引入项目，通过修改原型链可直接使用
//组件中，通过this.$axios.get/post('xxx').then(response => (xxx)).catch(error =>(xxx))来使用了

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
