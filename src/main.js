// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import axios from '@/api/http.js'
import axios from 'axios'
import ElementUI from 'element-ui';
import { Loading, Message } from 'element-ui' //请求加载动画
import 'element-ui/lib/theme-chalk/index.css';
process.env.NODE_ENV === "development" ? require('./mock/mock.js') : null; //develpment模式下加载mock.js 文件

Vue.use(ElementUI);

Vue.prototype.$axios = axios; //2.修改原型链
axios.defaults.timeout = 5000// 超时时间
//axios并不是一个组件，所以不能使用Vue.use(...)方法将其引入项目，通过修改原型链可直接使用
//组件中，通过this.$axios.get/post('xxx').then(response => (xxx)).catch(error =>(xxx))来使用了

// 全局的 axios 默认值
// axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 添加请求拦截器
var loadinginstace
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么 例如以下（12-15）
  console.log("check the axios request");
  loadinginstace = Loading.service({ fullscreen: true })
  if (store.state.token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `token ${store.state.token}`;
    }
  return config;
}, function (error) {
  // 对请求错误做些什么
  loadinginstace.close();
  Message.error({
    message: '加载超时'
  })
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log("check the axios response");
  loadinginstace.close()
  return response;
}, function (error) {
  loadinginstace.close()
    Message.error({
    message: '加载失败'
  })
  // 对响应错误做点什么 例如以下（28-38）
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 返回 401 清除token信息并跳转到登录页面
        // store.commit(types.LOGOUT);

        // 只有在当前路由不是登录页面才跳转
        router.currentRoute.path !== 'login' &&
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
  return Promise.reject(error.response.data);
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
