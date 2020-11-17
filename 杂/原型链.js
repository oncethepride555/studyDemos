function Person(name){
    this.name = name;
    this.age = 18;
    this.sayHi = function(){
        console.log(`我是${this.name},今年${this.age}岁`);
    }
}
// Object.prototype.age = 33;
let person1 = new Person('lisi');
//console.log(Reflect.getPrototypeOf(person1) === Person.prototype); // true
//console.log(person1.__proto__ === Person.prototype); // true
// console.log(person1.age);
person1.sayHi();
let person2 = new Person('wangwu');
person2.sayHi();
//console.log(Person.prototype.constructor === Person); // true
// console.log(Person.prototype.__proto__ === Object.prototype); // true
// console.log(Object.prototype.__proto__ === null); // true
let a = {a:1};
let b = {a:1};
// console.log(a == b);

let arr1 = [1,2,3];
let arr2 = Object.assign([],arr1);
console.log(arr2); // [1,2,3]

/* let obj1 = {a:1,b:2,c:3};
let obj2 = Object.assign([],obj1);
console.log(obj2); */

let aaa = [{a:1,b:2,c:3},1,2];
let bbb = JSON.parse(JSON.stringify(aaa)); // 深拷贝
// let bbb = aaa; // 浅拷贝
console.log(bbb);

let arrr = {a:1,b:2};
for(var i in arrr){
    console.log(i);
}