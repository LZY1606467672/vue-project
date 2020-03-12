import Vue from 'vue'
import VueRouter from 'vue-router'
import user from '@/store/modules/user.js'

// 路由懒加载
const index = resolve => require(['@/components/index'], resolve)
const login = resolve => require(['@/components/page/login'], resolve)
const mockjs = resolve => require(['@/components/page/mockjs'], resolve)
const chartjs = resolve => require(['@/components/page/chartjs'], resolve)
const parent = resolve => require(['@/components/page/parent'], resolve)
const test = resolve => require(['@/components/page/test'], resolve)
const table = resolve => require(['@/components/page/table'], resolve)
// const Parent = resolve => require(['@/components/common/Parent'], resolve)

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',//路由切换成功进入激活状态(带背景色),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/login',
      name: login,
      component: login,
    },
    {
      path: '/',
      name: index,
      component: index,
      children: [
        {
          path: '/mockjs',
          name: 'mockjs',
          component: mockjs,
          meta: {
            keepAlive: true,
            requireAuth: true
          }
        },
        {
          path: '/chartjs',
          name: 'chartjs',
          component: chartjs,
          meta: {
            keepAlive: true,
            requireAuth: true
          }
          //最直接的效果就是mock的随机数据不会由于切换路由而改变,但每次只会缓存一个页面的数据，
          //切换另一个keepAlive:true 页面时，之前的缓存会释放
        },
        {
          path: '/table',
          name: 'table',
          component: table
        },
        {
          path: '/parent',
          name: 'parent',
          component: parent,
          meta: {requireAuth: true}
        }
      ]
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    },
  ]
})

// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('Authorization')) {
//   user.commit("TOKEN", window.localStorage.getItem('Authorization'))
// }

//全局路由拦截
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
  // 另一种方式：if (to.matched.some(r => r.meta.requireAuth))
  //    matched的数组中包含$route对象的检查元字段
  //    arr.some() 表示判断该数组是否有元素符合相应的条件, 返回布尔值
    if (user.state.Authorization) {  // 通过vuex user.state获取当前的token是否存在，判断是否登录
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})

// router.afterEach((to, from) =>{

// })

export default router;
