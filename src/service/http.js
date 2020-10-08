//封装axios 及get、post、put、del请求
'use strict'
import axios from 'axios'
import router from '@/router'
import user from '@/store/modules/user.js'
import { Loading, Message } from 'element-ui' //请求加载动画、消息

// 全局的 axios 默认值
// axios.defaults.baseURL = 'https://api.example.com'; //配置接口地址
if (process.env.NODE_ENV == 'development'){
  axios.defaults.baseURL =  ''
}
axios.defaults.withCredentials = true //支持发送cookie身份信息,允许跨域的属性withCredentials
axios.defaults.crossDomain = true // 允许跨域
axios.defaults.timeout = 5000 // 超时时间
axios.defaults.transformRequest = [(data) => { //在向服务器发送请求前，序列化请求数据(有效果)
  data = JSON.stringify(data)
  // console.log(data)
  return data
}]
// axios.defaults.transformResponse = [(data) => {
//   if (typeof data === 'string' && data.startsWith('{')) { // 在传递给 then/catch 前，修改响应数据
//     data = JSON.parse(data)
//   }
//   return data
// }]

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' //配置请求头

var loadinginstace
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么 例如以下
  console.log("check the axios request");
  loadinginstace = Loading.service({ fullscreen: true })
  if (user.state.Authorization && user.state.token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      // config.headers.Authorization = `token ${store.state.token}`;
      config.headers.Authorization = user.state.Authorization
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
  if (response.status === 200) {//返回状态码为200，说明接口请求成功，可以正常拿到数据
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}, function (error) {
  loadinginstace.close()
  Message.error({
    message: '加载失败'
  })
  // 对响应错误做点什么 例如以下（28-38）
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 返回 401：未登录 清除token信息并跳转到登录页面
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

export default axios;

/*
//封装get请求
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
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
//post方法必须要使用对提交从参数对象data进行序列化的操作
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(data) )
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
*/
