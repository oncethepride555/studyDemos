let a = 0;
const obj = {
    A:1,
    B:function(){
        console.log(this.a);
    }
}
const obj1 = {
    C:2
}
const fun = obj.b;
fun();
fun.apply(obj);
fun.bind(obj1).apply(obj);
const fun1 = fun.bind(obj1);
new fun();