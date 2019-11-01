import Vue from 'vue'
// 1.导入 vue-router 包
import VueRouter from 'vue-router'
// 2.手动安装 VueRouter
Vue.use(VueRouter)

// 导入 Mint UI 组件
/* import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI) */

// 上面全部导入，体积大
// 按需引入
import { Button } from 'mint-ui'
Vue.component(Button.name, Button)
    // Vue.component('mybtn', Button)
    // 可以自定义名称，使用的时候就是 <mybtn></mybtn>

import app from './App.vue'

// 把路由模块抽离到 router.js 了，需要导入进来
import router from './router.js'

// 引入样式文件
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'
// 导入 MUI 样式表
import './lib/mui/css/mui.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app), // 函数 c 把指定的模板 app 渲染成 html 结构，替换了 #app 这个div
    router // 4.将路由对象挂载到 vm 上
})