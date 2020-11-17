// let a = 1;
// function f(){
//     let b = 2;
//     console.log(`函数内访问全局变量a:${a}`);
//     console.log(`函数内访问局部变量b:${b}`);
// }
// f();
// console.log(`函数外访问全局变量a:${a}`);
// console.log(`函数外访问局部变量b:${b}`); // 报错 b is not defined

// 闭包
function f1(){
    let n = 99;
    return function f2(){
        console.log('n',n)
    }
}
let res = f1();
res();

// 经典for循环setTimeout拿到正确的值
/* for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
} */
// 10 10 10 10 ... 10  10个10

// 拿到正确的值
/* for (var i = 0; i < 10; i++) {
    (function(j){
        setTimeout(() => {
            console.log(j);
        }, 1000)
    })(i);
} */
// 0 1 2 3 ... 9

// 通过闭包实现传参
function fun(param) {
    return function () {
        console.log(param);
    }
}
var f1 = fun(1);
setTimeout(f1, 1000);