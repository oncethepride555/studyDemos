// 通过创建另一个匿名函数强制让闭包的行为符合预期
function creatFunction(){
    var result = new Array();
    for(var i = 0; i < 10; i++){
        result[i] = function(num){ // 这就是创建的另一个匿名函数
            return function(){ // result是一个函数数组，每一个元素都是一个函数
                return num;
            };
        }(i); // 创建匿名函数并立即执行，i的值赋给了num
    }
    return result;
}

var funs = creatFunction();

for(var i = 0; i < funs.length; i++){
    console.log(funs[i]()); // funs数组中的每一个元素都是一个函数，funs[i]()调用这个函数
}