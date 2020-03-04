<template>
<div>
  <div>{{testdata}}--{{nani}}</div>
  <transition name="fade-in">
    <ul>
        <li v-for="(item,index) in data" :key="index">{{item.author}}--{{item.title}}</li>
    </ul>
  </transition>
  <form>
    <transition name="fade-in">
      <el-button type="primary" @click="BtnClick()">主要按钮</el-button>
    </transition>
  </form>
</div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
import {getMock} from '@/service/api'
export default {
    name: 'mockjs',
    data() {
        return {
            testdata: 'mockjs-热加载',
            data: [],
        }
    },
    created() {

    },
    computed:{
        ...mapState({
            nani:state => state.test.kaka,
        })
    },
    methods:{
        ...mapMutations({token: 'user/TOKEN'}),
        ...mapActions({
            getname: 'test/getName'  //命名空间模块化
        }),
        BtnClick(){
            this.getname("show me your code");
            // this.$axios.get('/mock').then((res) => {
            //     console.log(res.data);
            //     this.data = res.data;
            // })
            getMock().then((res) => {
              console.log(res.data);
              this.data = res.data;
            })
        }
    }
}
</script>

<style>

</style>
