<template>
  <el-container>
    <el-header height="60px">
      <el-menu
      mode="horizontal"
      >
        <el-menu-item index="1">后台中心</el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-row>
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              router
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="/login">
                <i class="el-icon-menu"></i>
                <span slot="title">login</span>
              </el-menu-item>
              <el-menu-item index="/chartjs">
                <i class="el-icon-document"></i>
                <span slot="title">chartjs</span>
              </el-menu-item>
              <el-menu-item index="/parent">
                <i class="el-icon-setting"></i>
                <span slot="title">parent</span>
              </el-menu-item>
              <el-menu-item index="/mockjs">
                <i class="el-icon-setting"></i>
                <span slot="title">mockjs</span>
              </el-menu-item>
              <el-menu-item index="/table">
                <i class="el-icon-setting"></i>
                <span slot="title">table</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
    <el-footer>copyright 2020 雕大仙</el-footer>
  </el-container>
</template>
<script>
  export default {
    name: 'index',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  }
</script>

<style scoped>
  .el-header{
    height:100px;
    background: #1a1a1a;
    background-image: linear-gradient(#000,#121212);
    color:#fff;
    line-height:100px;
  }
</style>
