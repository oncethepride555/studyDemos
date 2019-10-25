/* 
    箭头函数
*/

// 原来函数的定义
function foo(a, b) {
    console.log(a, b);
}
foo(1, 2); // 1 2

// ******* 箭头函数 *******
//----------------------------------------------------
// 没有参数时，=>前头直接是()
let foo00 = () => console.log('hello');
foo00(); // hello
//----------------------------------------------------

// 有一个参数时，=>前直接写参数名，不用()
let foo01 = v => v; // 这里的意思就是 return v
let ret = foo01('world'); // let ret = 'world'
console.log(ret); // world
//----------------------------------------------------

// 多个参数时要用()括起来
let foo02 = (a, b) => console.log(a, b);
foo02(1, 2); // 1 2
//----------------------------------------------------

// 函数体有多个语句时要用{}包起来
let foo03 = (a, b, c) => {
    let d = 4;
    console.log(a + b + c + d);
}
foo03(1, 2, 3); // 10
//-----------------------------------------------------

// 用箭头函数遍历数组中的值
let arr = [123,456,789];
/* arr.forEach(function(value,index){
    console.log(value + ' ---- ' +index);
}); */
arr.forEach((value,index)=>{
    console.log(value + ' ---- ' +index);
});


//******************************************************
// 箭头函数的注意事项：
//******************************************************

// 注意事项 1、箭头函数中的this取决于函数的定义，而不是函数的调用
// 分析1
let foo04 = () => {
    console.log(this);  //该箭头函数没有在哪个函数作用区域内，this指向全局
}
foo04(); // node中没有window对象，node中运行输出：{}
// foo04.call({name:'lisi'}); // 箭头函数中的，apply、call方法指向的对象会被默认忽略。
 
// 分析2
var name = 'window';
var obj = {
    name:'ww',
    foo06:() => {
        console.log(this.name); // 箭头函数中的this，指向箭头函数所在的function，
                                // 这里的箭头函数并没有在哪个函数里声明，所以 this 会 fallback 到全局
    }
}
obj.foo06(); // 在node中运行是undefined，在浏览器中运行是window

// 普通函数中的this
function foo05(){
    console.log(this.num); // 在nodejs中，这个this指向的是global对象
}
// foo05();
foo05.call({num:55}); // 通过call()方法，改变了函数foo05中this的指向，
                      // 让this指向了call()方法的第一个参数
                      // 通过函数名.call()方法，改变了this的指向，并且执行了函数
                      // 输出：55

// setTimeout(function(){},time)
function foo06(){
    console.log('start');

    setTimeout(() => {
        console.log(this.name);
    },1000);

    console.log('end');
};
foo06.call({name:'lisi'});
// 本来setTimeout中的箭头函数是在foo06这个函数的作用域内声明的，this应该指向foo06函数所在的上下文，即window
// 现在通过.call()方法，改变了this的指向，使其指向了对象{name:'lisi'},并执行函数
// 先打印出       start 
//               end 
//  1 秒后打印出  lisi

// --------------------------------------------------------------------------
// 注意事项 2、箭头函数不可以 new，箭头函数不是构造函数
//---------------------------------------------------------------------------

// 注意事项 3、箭头函数不可以使用 arguments 获取实参列表，可以使用 rest 参数代替
// 普通函数可以
function foo07(a,b,c){
    console.log(arguments);
}
foo07(1,2,3); // [Arguments] { '0': 1, '1': 2, '2': 3 }

// 箭头函数不可以
let foo08 = (a,b,c) => {
    console.log(arguments);
}
// foo08(4,5,6); // 得到的不是实参列表

// 箭头函数通过rest参数获取实参列表
let foo09 = (...param) => {
    console.log(param);
}
foo09(1,2,3,4,5); //[ 1, 2, 3, 4, 5 ]