// 对于 var a = b = 3; 的理解
// 应该从右向左：b = 3; var a = b;
// b 没有声明，而是直接赋值，是全局变量
// a 是局部变量
var a,b;
(function(){
    "use strict"
    console.log(a);
    console.log(b);
    var a = b = 3;
    console.log(a);
    console.log(b);
})();
console.log(a);
console.log(b);
// undefined
// undefined
// 3
// 3
// undefined
// 3