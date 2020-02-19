import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const files = require.context('./modules', false, /\.js$/)
let modules = {}
files.keys().forEach(key => {
  let name = key.replace(/(\.\/|\.js)/g, '')
  modules[name] = files(key).default || files(key)
})

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
    modules
})