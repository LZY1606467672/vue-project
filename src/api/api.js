import vue from 'vue'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
 
// 请求拦截器
axios.interceptors.request.use(function(config) {
    return config;
  }, function(error) {
    return Promise.reject(error);
  })
  // 响应拦截器
axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
})
 
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

/*
具体页面调用
    import api from '@/api/api.js';//引入
    //使用
    api.get_news('/view/detail', 'type=top&key=123456').then((res)=>{
    //处理返回
    })
 */