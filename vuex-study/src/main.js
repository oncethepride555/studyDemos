// 入口文件
import Vue from 'vue'
// 配置vuex的步骤
// 1.运行 cnpm i vuex -S
// 2.导包
import vuex from 'vuex'
// 3.注册vuex到vue
Vue.use(vuex)
// 4.new Vuex.Store() 实例，得到一个数据仓库对象
const store = new vuex.Store({
    state:{
        // 用来存储数据
        // 在组件中，想要访问state中的数据，通过 this.$store.state.数据名称
        count:0
    },
    mutations:{
        increment(state){
            state.count++
        }
    }
})

import App from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(App), // 函数 c 把指定的模板 app 渲染成 html 结构，替换了 #app 这个div
    store // 5.将 vuex 创建的 store 挂载到 vm 实例上，任何组件都能通过 store 来存取数据
})