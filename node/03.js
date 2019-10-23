/* 
    引入模块
*/

var module = require('./02.js');
// 上面这条语句的ES6写法为：
// import module from './02.js';


// 对应 exports.sum = sum; 这种导出方式，应该如下调用：-------------
/* var ret = module.sum(10,12);
console.log(ret); */

// 针对第二种导出成员的方式的调用-------------
var ret = module(22,11);
console.log(ret);