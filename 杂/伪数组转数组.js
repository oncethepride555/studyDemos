var arrayLike = {
    0:'a',
    1:'b',
    2:'c',
    length:3
}
// var arr = Array.prototype.slice.call(arrayLike);
var arr = [].slice.call(arrayLike); // []是Array.prototype的实例，继承了它的slice方法
// call() 两个作用，1.调用函数 2.改变函数内部的this指向
// 也就是：让slice方法被arrayLike据为己有，并调用函数
// slice 截取一部分数组元素返回一个新数组，start不写默认为0，end不写默认一直截取到数组末尾
// slice 对原始数组进行了一个深拷贝
console.log(arr); // [ 'a', 'b', 'c' ]