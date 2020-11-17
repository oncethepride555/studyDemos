// 实现斐波那契数列[1,1,2,3,5,8,13...]
// 递归法:
/* function fibonacci(n){
    if(n==0) return 1;
    if(n==1) return 1;
    return fibonacci(n-1)+fibonacci(n-2);
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5)); */

// 非递归
function fibonacci(n){
    var res1 = 1; // n为0
    var res2 = 1; // n为1
    var sum = res2; // n为0和1的时候，直接返回这里的sum
    for(var i = 1; i < n; i++){ // n为2时要循环一次，n为3时要循环两次
        sum = res1 + res2; // 先计算下一个，然后让两个指针往前挪
        res1 = res2;
        res2 = sum; // 这三句顺序不能变       
    }
    return sum;
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5)); 