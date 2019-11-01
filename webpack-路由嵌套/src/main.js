import Vue from 'vue'
// 1.导入 vue-router 包
import VueRouter from 'vue-router'
// 2.手动安装 VueRouter
Vue.use(VueRouter)

import app from './App.vue'

// 把路由模块抽离到 router.js 了，需要导入进来
import router from './router.js'

var vm = new Vue({
    el: '#app',
    render: c => c(app), // 函数 c 把指定的模板 app 渲染成 html 结构，替换了 #app 这个div
    router // 4.将路由对象挂载到 vm 上
})