// js的执行过程是先创建空间，再赋值
// 先在自己的空间里找，没有就去父级找，再没有就再往上一层（作用域链）
// 同名变量，在局部中使用时，用的是局部的变量，不会去全局找了，没有覆盖全局的那个变量，全局的值不受影响

var v = 'aaa';
function fn(){
    console.log(v); // aaa 局部没有var声明，去全局找
    v = 'bbb'; // 没有var声明，改变的是全局的v
    console.log(v); // bbb
}
fn();
console.log(v); // bbb

/* var v = 'aaa';
function fn(){
    console.log(v); // undefined，局部声明了v，就不会去全局找了
    var v = 'bbb'; // 局部声明了v
    console.log(v); // bbb
}
fn();
console.log(v); // aaa */