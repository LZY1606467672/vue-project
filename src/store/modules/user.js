export const TOKEN = 'TOKEN'
const state = {
  token: null
}

const mutations = {
  [TOKEN]:(state,token) =>{
    localStorage.token = token;
    state.token = token;
  }
}

const actions = {
  setToken: ({ commit, state }, token)=>{
    return new Promise(resolve =>{
      commit("TOKEN", token);
      console.log("login success")
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
