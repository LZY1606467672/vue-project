<template>
  <div class="login_page">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer">
        <div class='titleArea rflex'>
          <img class="logo" :src="logo" alt="小爱admin">
          <span class='title'>love<i>Admin</i></span>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="loginForm">
          <!-- label-width:顾名思义，就是约束label的宽度(username/password/type) -->
          <el-form-item label="username" prop="username">
            <!-- Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，
            并将 Form-Item 的 prop 属性设置为需校验的字段名即可,
            注：必须使用prop属性，才会有校验效果 -->
            <el-col :span="11">
              <el-input v-model="loginForm.username" placeholder="请填写用户名"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="password" prop="password">
            <el-col :span="11">
              <el-input v-model="loginForm.password" placeholder="请填写密码" type="password"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="choosetype" prop="logintype">
            <el-col :span="11">
              <el-select v-model="loginForm.type">
                  <el-option label="coustomer" value="hpcc"></el-option>
                  <el-option label="Administrator" value="hccl"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"  @click="submitForm('loginForm')" class="submit_btn">SIGN IN</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
import logoImg from "@/assets/img/logo.png";
import {mapState, mapActions, mapMutations} from 'vuex'
import { setCookie } from '@/utils/auth'

export default {
    name: 'login',
    data() {
        return {
          logo:logoImg,
          loginForm:{
              username: '',
              password: '',
              type: ''
          },
          rules:{
              username:[{required:true, message:'请确认输入username', trigger:'blur'}],
              password:[{required:true, message:'请确认输入password', trigger:'blur'}]
          }
        }
    },
    computed: {
      ...mapState({
        token:state=>state.user.token,
      })
    },
    mounted(){
        // alert("mounted success");
    },
    methods:{
      ...mapActions({
            set_token:'user/setToken'  //命名空间模块化
            //mutitutions/actions的方法映射都是映射到当前对象，别名方法使用时需要用this来调用
        }),
      submitForm(loginForm){
        this.$refs[loginForm].validate((valid) => {
          if (valid) {
            this.set_token(this.loginForm);
            setCookie(this.loginForm.username + ' ' +this.loginForm.password);
            // 跳转至其他页面
            let redirect = decodeURIComponent(this.$route.query.redirect || '/');
            this.$router.push({
              path: redirect
            })
          }
        });
      }
    }
}
</script>

<style>

</style>
