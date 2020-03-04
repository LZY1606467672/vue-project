//封装axios 及get、post、put、del请求
'use strict'
import axios from 'axios'
import router from '@/router'
import store from '@/store'
import { Loading, Message } from 'element-ui' //请求加载动画、消息

// 全局的 axios 默认值
// axios.defaults.baseURL = 'https://api.example.com'; //配置接口地址
axios.defaults.baseURL =  ''
axios.defaults.timeout = 5000 // 超时时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' //配置请求头

var loadinginstace
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么 例如以下（12-15）
  // console.log("check the axios request");
  loadinginstace = Loading.service({ fullscreen: true })
  if (store.state.token) {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.Authorization = `token ${store.state.token}`;
    // 设置参数格式
    // if (!config.headers['Content-Type']) {
    //   config.headers = {
    //     'Content-Type': 'application/json'
    //   }
    // }
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
  // console.log("check the axios response");
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

//封装get请求
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    return  axios.get(url, {
      params: params
    })
    .then(response => {
    //   if (response.data.msg == 'token失效，请重新登录'){
    //    router.push({name:"login"});
    //  }
     if(response.status ==200){
       resolve(response)
     }else{
       this.$message({
         message: response.data.msg,
         type: 'warning'
       })
     }
   })
      .catch(err => {
        console.log(err)
        reject(err)
        this.$message({
          message: '请求失败！请检查网络',
          type: 'warning'
        })
      })
  })
}

//封装post请求
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
    .then(response => {
      if (response.data.msg == 'token失效，请重新登录'){
        router.push({name:"login"});
     }
     if(response.data.code ==200){
       resolve(response.data.data)
     }else{
       this.$message({
         message: response.data.msg,
         type: 'warning'
       })
     }
   })
    .catch(err => {
      console.log(err)
      reject(err)
      this.$message({
        message: '请求失败！请检查网络',
        type: 'warning'
      })
    })
  })
}

//封装put请求
export function put (url, data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
    .then(response => {
      if (response.data.msg == 'token失效，请重新登录'){
        router.push({name:"login"});
     }
     if(response.data.code ==200){
       resolve(response.data.data)
     }else{
       this.$message({
         message: response.data.msg,
         type: 'warning'
       })
     }
   })
    .catch(err => {
      console.log(err)
      reject(err)
      this.$message({
        message: '请求失败！请检查网络',
        type: 'warning'
      })
    })
  })
}

//封装delete请求
export function del (url, data = {}){
  return new Promise((resolve,reject) => {
    axios.delete(url,{data:data})
    .then(response => {
      if (response.data.msg == 'token失效，请重新登录'){
        router.push({name:"login"});
     }
     if(response.data.code ==200){
       resolve(response.data.data)
     }else{
       this.$message({
         message: response.data.msg,
         type: 'warning'
       })
     }
   })
    .catch(err => {
      console.log(err)
      reject(err)
      this.$message({
        message: '请求失败！请检查网络',
        type: 'warning'
      })
    })
  })
}

/*
// 封装axios的post请求
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

export default {
  get_news(url, params) {
    return fetch(url, params);
  }
}

具体页面调用
    import api from '@/api/api.js';//引入
    //使用
    api.get_news('/view/detail', 'type=top&key=123456').then((res)=>{
    //处理返回
    })
*/
