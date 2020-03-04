// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { post, get, del, put} from "@/service";
import ElementUI from 'element-ui';
import { Loading, Message } from 'element-ui' //请求加载动画、消息
import 'element-ui/lib/theme-chalk/index.css';
process.env.NODE_ENV === "development" ? require('./mock/mock.js') : null; //develpment模式下加载mock.js 文件

Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$del = del
Vue.prototype.$put = put
Vue.use(ElementUI);

//Vue.prototype.$axios = axios; //2.修改原型链
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
