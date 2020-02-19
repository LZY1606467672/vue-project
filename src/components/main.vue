<template>
  <div>
    <div v-if="device==='mobile'&&sidebar.opend" @click="handleClickOutSide" />
    <sidebar class="sidebar-container" />
    <div class="main-container">
        <div :class="{'fixed-header':fixedHeader}">
            <navbar />
        </div>
    </div>
    <app-main />
  </div>
</template>

<script>
    import {NavBar, SideBar, AppMain} from './layout'

export default {

}
</script>

<style>

</style>