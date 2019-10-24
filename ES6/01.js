/* 
    声明变量 let 和 const
*/

// 1.let声明的变量不存在预解析（不能变量提升）
// var 声明的变量可以预解析

console.log(a);
var a = 10; // undefined

// console.log(b);
// let b = 20; // 报错， Cannot access 'b' before initialization

// ---------------------------------------------------------------------

// 2.let声明的变量在同一个作用域内不允许重复声明
// var 可以重复声明，取最后一个的值
var c = 1;
var c = 2;
var c = 3;
console.log(c);

/* let d = 1;
let d = 2;
let d = 3;
console.log(d); */ // 报错，Identifier 'd' has already been declared

// -------------------------------------------------------------------------

// 3.ES6引入了块级作用域{}
if(true){
    let e = 5; // let声明的变量，只能在块级作用域内起作用
    console.log(e);
}
// console.log(e); // 报错，e is not defined

{ // 这是一个块级作用域
    let f = 6;
}
// console.log(f); // 报错， f is not defined

// ==========================================================================
// 以上规则对于 const 同样适用
// 另外有几点 const 独有的规则：
// 1.const用来声明常量,不能被重新赋值
const g = 1;
g = 2; // 报错， Assignment to constant variable.（赋值给常变量）

// -------------------------------------------------------------------------
// 2.const声明常量时，必须初始化一个值
// const h; // 报错，Missing initializer in const declaration