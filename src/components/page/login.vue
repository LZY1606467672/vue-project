<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="username" prop="name">
            <el-input v-model="ruleForm.username" placeholder="请填写username"></el-input>
        </el-form-item>
        <el-form-item label="password" prop="password">
            <el-select v-model="ruleForm.password">
                <el-option label="区域1" value="hpcc"></el-option>
                <el-option label="qw" value="hccl"></el-option>
            </el-select>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            ruleForm:{
                username:'',
                password:''
            },
            rules:{
                username:[{
                    required:true, message:'请输入username', trigger:'blur'
                }]
            }
        }
    },
    mounted(){
        alert("mounted success");
    },
    methods:{
        login(){
            this.$router.push({name: 'chartjs'})
        }
    }
}
</script>

<style>

</style>