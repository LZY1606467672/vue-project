<template>
<div>
  <div>{{testdata}}--{{namespace}}</div>
  <ul>
      <li v-for="(item,index) in data" :key="index">{{item.author}}</li>
  </ul>
  <form>
      <!-- <input type="button" value="test" @click="BtnClick()"> -->
      <el-button type="primary" @click="BtnClick()">主要按钮</el-button>
  </form>
</div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
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
            namespace:state => state.test.kaka,
        })
    },
    methods:{
        // ...mapMutations('user/TOKEN'),
        ...mapActions({
            getname:'test/getName'  //命名空间模块化
        }),
        BtnClick(){
            this.getname();
            this.$axios.get('/mock').then((res) => {
                console.log(res.data);
                this.data = res.data
            })
        }
    }
}
</script>

<style>

</style>
