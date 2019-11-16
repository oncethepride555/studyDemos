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
    state: {
        // 用来存储数据
        // 在组件中，想要访问state中的数据，通过 this.$store.state.数据名称
        count: 0
    },
    mutations: {
        // 注意：如果要操作 state 中的数据的值，只能通过 调用 mutation 中的方法来操作对应的数据
        // 不推荐直接操作 state 中的数据，因为万一导致了数据紊乱，不能快速定位到错误的原因，因为每个组件都有可能操作数据
        increment(state) {
            state.count++
        },
        // 组件如果要调用 mutation 中的方法，通过 this.$store.commit('方法名')
        substract(state, obj) {
            // 注意：mutation 的函数参数列表中，最多支持两个参数
            // 参数1：state  参数2：通过 commit 提交过来的参数
            state.count -= (obj.a + obj.b);
        }
    },
    getters: {
        // getters 只负责对外提供数据，不负责 修改数据，如果要修改 state 中的数据，要去找 mutation
        strfun: function (state) {
            return '当前最新的count值为：' + state.count;
        }
        // getters 中的方法，和组件中的过滤器相似，都没有修改原数据，只是把原数据做了一层包装，提供给了调用者
        // 另外，getters 和 computed 也相似，只要 state 中的数据发生了变化，并且 getters 正好引用了这个数据，就会立即触发 getters 的重新求值。
    }
})

import App from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(App), // 函数 c 把指定的模板 app 渲染成 html 结构，替换了 #app 这个div
    store // 5.将 vuex 创建的 store 挂载到 vm 实例上，任何组件都能通过 store 来存取数据
})