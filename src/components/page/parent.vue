<template>
    <div>
      <Child ref="Child"
             @getChildVal="getChildVal"
             parentPropMsg = '哈哈😁，这是来自父组件prop的数据🈷️(静态数据)'
             :parentProp = 'todo'
      ></Child>
      <h2>父组件</h2>
      父组件动态props传递给子组件：<input type="text" v-model="todo" placeholder="父组件props">
      <br>
      <label>从子组件传过来的值：</label>
      <h6 style="color:#09f;">{{childVal}}</h6>
      <label>父组件主动触发获取子组件的值：</label><button @click="handleGetChildVal">父组件主动获取子组件的值</button>
      <h6 style="color:#09f;font-weight:700;">{{handleChildVal}}</h6>
      <label>父组件主动设置子组件的值：</label><button @click="handleSetChildVal">父组件主动设置子组件的值</button>
      <input style="color:#f88;font-weight:700;" v-model="parentVal" type="text" placeholder="请输入父组件的值">
      <h6 style="color:#f60;">{{parentVal}}</h6>
      <hr>
      <hr>
    </div>
</template>

<script>
    import Child from '@/components/page/Child'
    export default {
        name: "parent",
        components:{
          Child,
        },
        data(){
          return{
            childVal:'',
            handleChildVal:'',
            parentVal:'',
            todo:''
          }
        },
        methods:{
          getChildVal(val){
            this.childVal = val;
          },
          handleGetChildVal(){
            this.handleChildVal = this.$refs['Child'].get()
          },
          handleSetChildVal(){
            this.$refs['Child'].set(this.parentVal)
          }

        }
    }
</script>

<style scoped>

</style>
