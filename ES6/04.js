/* 
    函数相关扩展
    1、参数默认值
    2、参数解构赋值
    3、rest参数
    4、...扩展运算符
*/
// 1、参数默认值
// 之前的写法
function foo(param){
    let p = param || 'hello'; // 如果param赋值了就取param，如果没有就取hello
    console.log(p);
}
foo('world');
// 有了参数默认值以后：
function foo01(param='hello'){
    console.log(param);
}
foo01(); // hello
foo01('world'); // world
// -------------------------------------------------------------------------
// 2、参数解构赋值
// 之前的写法：
function foo02(uname='lisi',age=12){
    console.log(uname,age);
}
foo02('zhangsan',14);
// 参数解构赋值
function foo03({uname='wss',age=25}={}){
    console.log(uname,age);
}
foo03(); 
/* {uname,age}={} 定义的函数的参数写成这样的格式，
调用函数时如果不写参数，且没有参数默认值时输出 undefined */
// 如果定义的函数的参数没有写 ={}，则调用时如果参数为空会报错
foo03({uname:'lisi',age:15});
// -------------------------------------------------------------
// 3、rest参数（剩余参数）...param，param是一个数组，放的是剩余参数
function foo04(a,b,...param){
    console.log(param);
}
foo04(1,2,3,4,5); // [3,4,5]
// --------------------------------------------------------------
// 4、...扩展运算符  与rest参数相反，是把数组拆散，变成单个的
function foo05(a,b,c,d,e){
    console.log(a,b,c,d,e);
}
foo05(1,2,3,4,5); // 传统的调用方式 1 2 3 4 5
// 如果给的是一个数组
let arr = [6,7,8,9,10];
// 怎么把数组中的各个数当做参数传递？
// 之前：用apply
foo05.apply(null,arr); // 6 7 8 9 10
// 不用apply，用扩展运算符...
foo05(...arr); // 6 7 8 9 10

// 通过扩展运算符...来合并数组
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1,...arr2];
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]