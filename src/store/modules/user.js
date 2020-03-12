import { getCooike, setCookie, removeCookie } from '@/utils/auth'
export const TOKEN = 'TOKEN'
const state = {
  // 本地存储 localStorage
  Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
  // cookie存储
  token: getCooike()
}

const mutations = {
  // 修改token，并将token存入localStorage
  [TOKEN]:(state,user) =>{
    state.Authorization = user.Authorization;
    localStorage.setItem('Authorization', user.Authorization);
    setCookie(user.Authorization);
  }
}

const actions = {
  setToken: ({ commit, state }, Authorization)=>{
    return new Promise(resolve =>{
      console.log(Authorization);
      commit("TOKEN", Authorization);
    })
  }
}

export default {
    namespaced: true, //命名空间模块
    /* vuex中的store分模块管理，需要在store的index.js中引入各个模块，
    为了解决不同模块命名冲突的问题，将不同模块的namespaced:true，
    之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名 */
    state,
    mutations,
    actions
}
