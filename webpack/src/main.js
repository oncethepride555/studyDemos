// 这是项目的js入口文件

// 1.导入 jQuery
// import *** from *** 是ES6中导入模块的方式
// ES6 的代码太高级了，浏览器解析不了，这一行直接执行会报错，需要用 webpack 处理该文件
import $ from 'jquery'

import './css/index.css'

import './css/index.less'

import './css/index.scss'

import 'bootstrap/dist/css/bootstrap.css'

$(function () {
    $('li:odd').css('backgroundColor', 'pink')
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634'
    })
})

class Person {
    static info = { name: 'wss', age: 24 }
}

console.log(Person.info)