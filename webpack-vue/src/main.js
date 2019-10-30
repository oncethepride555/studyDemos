// 入口 JS 文件

// 在 webpack 中，使用 import Vue from 'vue' 导入的 Vue 构造函数，功能不完全，只提供了 runtime-only 的方式
// 如果这样用，需要在配置文件中进行配置
import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'

import login from './login.vue'

/* var login = {
    template:'<h1>这是登录模块</h1>'
} */

var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    },
    methods: {},
    /* components:{
        login
    } */
    /* render:function(e){
        return e(login)
    } */
    // 简写：
    render: c => c(login)
})