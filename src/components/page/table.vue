<template>
  <transition>
    <el-container style="height: 500px; border: 1px solid #eee">
          <el-select v-model="value" placeholder="请选择" @change="func1()">
              <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>
          <p>{{value}}</p>
    </el-container>
  </transition>
</template>

<script>
export default {
    name: "table1",
    data() {
        return {
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
              value: '',
        }
    },
    methods:{
        func1(){
            console.log(this.value);
            // this.$router.push('/mockjs');
            // this.$axios.get('/table').then((res) => {
            //     console.log(res);
            // })
        }
    }
}
</script>

<style>

</style>
