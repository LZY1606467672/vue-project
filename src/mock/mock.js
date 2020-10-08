'use strict'
import Mock from 'mockjs'
// process.env.Mock && require('./mock/mock.js')
// process.env.NODE_ENV === "development" ? Vue.use(Mock) : null;
import testData from './testData'
import userData from './usermock'

Mock.setup({
    timeout: '100-300'//设置全局延时
})
const Random = Mock.Random;

const produceData = function(opt){
    let article = [];
    for (let i=0; i<20; i++){
        let newArticleObj = {
            title: Random.csentence(5, 10),
            author: Random.cname()
        }
        article.push(newArticleObj);
    }
    return article;
}

/*
    Mock.mock( rurl, rtype, function( options ) )
    记录用于生成响应数据的函数。当拦截到匹配 rurl 和 rtype 的 Ajax 请求类型时，
    函数 function(options) 将被执行，并把执行结果作为响应数据返回。
    rurl:需要拦截的 URL，可以是 URL 字符串或 URL 正则 /\/money\/get/ ==>/money/get/
    rtype:需要拦截的 Ajax 请求类型。例如 GET、POST、PUT、DELET
    function:用于生成响应数据的函数
    options:含有 url、type 和 body 三个属性
*/
Mock.mock('/testData', /post|get/, testData);
Mock.mock('/mockjs', /post|get/, produceData);
Mock.mock('/usermock', /post/, userData);

export default Mock;
