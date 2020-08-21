// 【闭包】：有权访问另一个函数作用域中的变量的函数(内部函数能访问外部函数中的变量)
// 【创建闭包的常见方式】：在一个函数内部创建另一个函数
// ★闭包只能取得包含函数(外部函数)中任何变量的【最后一个值】
function createFunctions(){
    var result = [];
    for(var i = 0; i < 10; i++){
        result[i] = function(){ // result[i] 为一个函数
            return i;
        };
    }
    return result;
}

var funs = createFunctions(); // 这里只是得到了一个函数数组，但是数组中的每个元素（即每个函数）都还没有被执行
for(var i = 0; i < funs.length; i++){
    console.log(funs[i]()); // 这里才执行函数数组中的函数
    // 每个函数的作用域链中都保存着 createFunctions() 函数的活动对象，所以它们引用的都是同一个变量 i。当 createFunctions() 函数返回后，变量 i 的值是 10。
}