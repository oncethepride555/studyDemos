/* 
    变量的解构赋值
*/
// 一般变量声明：
let a = 1;
let b = 2;
let c = 3;
// 或者：
// let a = 1,b = 2,c = 3;
console.log(a,b,c); // 1 2 3

// 1.数组的解构赋值,一一对应，值的顺序不能变
let [d,e,f] = [4,5,6];
console.log(d,e,f); // 4 5 6

let[g=222,h,i] = [,555,]; //数组的解构赋值可以指定默认值
console.log(g,h,i); // 222 555 undefined
// ----------------------------------------------------------

// 2.对象的解构赋值,顺序可以变
// let {foo,bar} = {foo:'abc',bar:'def'};
// console.log(foo,bar); // abc def

let {foo,bar} = {bar:'def',foo:'abc'};
console.log(foo,bar); // abc def

// 属性别名（设置了别名，原来的名字就无效了）,该别名也不能被重新声明了
let {wss,wxl:lz} = {wss:'mumu',wxl:'lizi'};
// console.log(wss,wxl); // 报错， wxl is not defined
console.log(wss,lz); // mumu lizi

// 对象的解构赋值也可以指定默认值
let {name1,name2:nameTwo='lizi'} = {name1:'mumu'}
console.log(name1,nameTwo); //mumu lizi

// 内置对象
let {cos,sin,random} = Math;
console.log(typeof cos); // function
console.log(typeof sin); // function
console.log(typeof random); // function
// -----------------------------------------------------------

// 3.字符串的解构赋值
let [k,l,m,n,o] = 'hello'; // 字符串的五个字母分别赋值给五个变量
console.log(k,l,m,n,o); // h e l l o

let [len] = 'hello';
console.log(len); // h

let {length} = 'hello';
console.log(length); // 5