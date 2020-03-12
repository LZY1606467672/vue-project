<template>
    <div>
        <p>{{counter}}
            <el-button @click="decrement()" type="warning" size="small" plain>-</el-button>
            <el-button @click="increment()" type="success" size="small" plain>+</el-button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'counter',
    data() {
        return {
            counter: 0
        }
    },
    mounted(){
        this.counter = Math.ceil(Math.random()*100)//Math.ceil(0.12)=1  向上取整
    },
    methods: {
        increment: function(){
            this.counter++;
            this.$emit('getChildVal',this.counter);
        },
        decrement: function(){
            this.counter--;
            this.$emit('getChildVal',this.counter);
        }
    }
}
</script>

<style>

</style>
