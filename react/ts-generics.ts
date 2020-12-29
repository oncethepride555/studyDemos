// 泛型
// 定义了一个 swap 函数，用来交换 输入的元组
function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]];
}
console.log(swap([7,'seven'])); // [ 'seven', 7 ]