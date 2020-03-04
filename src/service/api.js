//api.js 统一封装项目请求接口api
'use strict'
import Vue from "vue";
// import { post, get, del, put, upload, exportExcel } from "./index";
import { post, get, del, put } from "./index";
const _baseUrl = process.env.VUE_APP_URL;
/* eslint-disable */
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$del = del
Vue.prototype.$put = put
// Vue.prototype.$upload = upload
// Vue.prototype.$exportExcel = exportExcel

//设定一系列请求方法，在特定页面中插入使用
// 登录
// const loginInURL = `${_baseUrl}/login`
// export const loginInApi = function (json) {
//   return Vue.prototype.$post(loginInURL, json)
// }
export const getMock = function(){
  return Vue.prototype.$get('/mock');
}
