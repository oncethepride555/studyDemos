// https://www.cnblogs.com/petterguo/p/9152956.html  解析

function Foo() { // 函数构造器
  // this.getName = getName;
  getName = function () { alert(1); } // 这里的getName是全局变量
  return this; // 这里的this是window
}
Foo.getName = function () { alert(2); }
Foo.prototype.getName = function () { alert(3); }
var getName = function () { alert(4); } // 函数名提升
function getName() { alert(5); } // 函数声明，整个函数提升

Foo.getName(); // 2
getName(); // 4，起作用的是函数表达式
Foo().getName(); // 1
getName(); // 1  由于
new Foo.getName(); // 2
new Foo().getName(); // 3
new new Foo().getName(); // 3

// https://www.runoob.com/js/js-objects.html  js对象
// https://www.runoob.com/js/js-object-prototype.html  prototype
// https://www.runoob.com/jsref/jsref-prototype-string.html