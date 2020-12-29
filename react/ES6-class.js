// 生成实例对象的传统方法---构造函数
/* function Point(x,y){
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function(){
    return '(' + this.x + ',' + this.y + ')';
}

var p = new Point(1,2);

console.log(p.toString()); // (1,2) */

// 用 ES6 的 class 表示上面的构造函数：
class Point{
    constructor(x,y){ // 构造方法
        this.x = x; // this关键字代表实例对象(就是下面的cp实例) Point{x:5,y:6}
        this.y = y;
        // console.log(this); // Point{x:5,y:6}
    }
    toString(){
        return '(' + this.x + ',' + this.y + ')';
    }
}

let cp = new Point(5,6);
// console.log(cp) // Point(x:5,y:6)
console.log(cp.toString()) // (5,6)