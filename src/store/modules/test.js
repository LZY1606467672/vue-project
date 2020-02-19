export const TEST = 'TEST'
const state = {
    kaka: 'namespaced-test--success',
}

const mutations = {
    [TEST]:(state,login) =>{
        state.kaka = login;
    }
}

const actions = {
    getName({commit}){
        alert("模块化vuex");
        // commit('TEST');
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
/*
    命名空间模块化后，在vue页面中调用import {mapState,mapActions,mapMutations} from 'vuex'方式也发生变化
    1、组件中如何获取带有命名空间moduleA中的state数据
        1、基本方式：
        this.$store.state.moduleA.countA
        2、mapState辅助函数方式：
        ...mapState({
            count:state=>state.moduleB.countB
        })
    2、组件中调用命名空间模块中的Mutations
        //1,3加个前缀moduleA/，都可以实现。2使用辅助函数未变名称的特殊点！！！
        1.
        commonMutation(){
            this.$store.commit('moduleA/moduleAMutation');
        },
        2、...mapMutations('moduleA',['moduleAMutation']),
        3、别名状态下（推荐）
        ...mapMutations({
            changeNameMutation:'moduleA/moduleAMutation'
        }),
    3、组件中调用命名空间模块中的Actions（与mutations一致）
        1,3加个前缀moduleA/，都可以实现。2使用辅助函数未变名称的特殊点！！！
        1.
        commonAction(){
            this.$store.dispatch('moduleA/moduleAAction')
        },
        2、...mapActions('moduleA',['moduleAAction']),
        3、别名状态下（推荐）
        ...mapActions({
            changeNameAction:'moduleA/moduleAAction'
        })
*/