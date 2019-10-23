
<template>
<!-- App.vue是根组件，所有的页面都是app.vue下面切换的，可以理解为所有组件都是app.vue的子组件，可以把头部底部每个页面都出现的文件都放在app.vue里面,以及在里面写公用的css代码 -->
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
// 
/*  */
export default {

}
</script>

<style>
/*  */
#app {
  text-align: center;
}
</style>
