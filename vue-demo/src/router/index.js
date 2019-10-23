import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//在build/webpack.base.conf.js中，内置了一些选项，extenions:[’.js’,’.vue’,’.json’],意思是省略后面的后缀，由webpack来自动为我们加上。
// 如果名字比较长，还可以起个别名。
// alias:{ ‘@’:resolve(‘src’)},
// 它的意思是在vue项目中，引入路径的时候使用@即代表src文件夹，省去了…/…/…/的操作，这样写比较十分方便。
//lssue提出的方案是在@前面加上~。两者均能成功

Vue.use(Router)
//把一些要导入的包(基于vue和不基于vue的)
//基于vue的,要使用vue.use('xx')

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    }
  ]
})
