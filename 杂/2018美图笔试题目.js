/* for(var i = 0; i < 3; i++){
    setTimeout(function(){
        console.log(i);
    },(function(){
        var b = i * 1000;
        console.log(b);
        //return b; // 感觉它没用
    })());
} */
// 0 1000 2000 3 3 3

// --------------------------题目分割线-------------------------

// console.log(0 == false); // true
// console.log(!(0 == false)); // false
// console.log(!!(0 == false)); // true

// console.log(0 == undefined); // false
// console.log(!(0 == undefined)); // true
// console.log(!!(0 == undefined)); // false

// --------------------------题目分割线-------------------------

// console.log(["1","2","3"].map(parseInt)); // [1,NaN,NaN]
/* 【分析】：map(callback(currentValue,index,arr))  map中的callback函数第一个
参数为当前元素的值，第二个参数为当前元素的索引值，，，所以执行的是 parseInt('1',0)
parseInt('2',1)  parseInt('3',2)   而 parseInt方法的第二个参数表示解析整数时的
基数，也就是进制，是从2到36范围的，不写或者0认为是十进制，，，所以 parseInt('1',0)
得到的就是 1，parseInt('2',1) 第二个参数不在2-36中，返回 NaN，parseInt('3',2) 
以二进制来解析'3'，二进制来解析的数，最大值为1，现在为3，解析不了，返回 NaN，，，
map返回的是数组，所以是 [1,NaN,NaN] */
// console.log(parseInt('8',7)); // NaN 7进制，最大数字为6

// --------------------------题目分割线-------------------------

var a = 1;
function test(){
    console.log(a); // 1
    a = 2; // 这里没有重新声明，那么改变的就是全局的a的值
    console.log(a); // 2
    // console.log(this); // node中是global，浏览器中是window
    console.log(this.a); // 2  node环境下是undefined
}
test();

/* var a = 1;
console.log(this.a); // 1 */