import Vue from 'vue'
import Vuex from 'vuex'
// const path = require("path");

Vue.use(Vuex)

const files = require.context('./modules', false, /\.js$/)
let modules = {}
files.keys().forEach(key => {
  // let name = path.basename(key, ".js"); 加载js的另一种方式
  let name = key.replace(/(\.\/|\.js)/g, '')
  modules[name] = files(key).default || files(key)
})

let getters = {

}

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
    modules,
    getters
})
