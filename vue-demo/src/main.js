//入口文件，初始化了vue实例对象，对所需要的插件进行引用
//写全的话是import Vue from ‘…/nodemouls/vue/list/vue.js’
import Vue from 'vue'
import App from './App'
import router from './router'

//把import Vue from 'vue'写在main.js中
//然后把一些要导入的包(基于vue和不基于vue的)
//基于vue的,要使用vue.use('xx')
//一些vue-router和vuex都注入到根实例里 文件main.js中

//是否阻止启动生产消息
//如果为true，则在开发者工具中console下多了 You are running Vue in development mode.……
Vue.config.productionTip = true

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
