/*
api.js 统一封装项目请求接口api
api接口管理的一个好处就是，我们把api统一集中起来，
如果后期需要修改接口(请求地址、)，我们就直接在api.js中找到对应的修改就好了，
而不用去每一个页面查找我们的接口然后再修改会很麻烦
*/

'use strict'
import Vue from "vue";
import { post, get, del, put } from "./index";
// const _baseUrl = process.env.VUE_APP_URL;
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
