/*
api.js 统一封装项目请求接口api
api接口管理的一个好处就是，我们把api统一集中起来，
如果后期需要修改接口(请求地址、请求类型等)，我们就直接在api.js中找到对应的修改就好了，
而不用去每一个页面查找我们的接口然后再修改会很麻烦

附：get，post方法不需要再封装，过度封装反而觉得累赘，只要api在一个或多个文件中管理即可（取决于你api数量）
*/
'use strict'
import request from './index'

//设定一系列请求接口方法，在特定页面中import使用

const getMock = function () {
  return request({
    url: '/mockjs',
    method: 'post',
    // params: params
  })
}

const getTest = function() {
  return request({
    url: '/testData',
    method: 'post',
    // params: params
  })
}

const getD = function(){
  return request({
    url: '/getD',
    method: 'post',
    data: {}
  })
}

export {getMock,getTest,getD}
