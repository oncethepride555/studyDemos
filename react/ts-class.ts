// 三种访问修饰符：
// public（默认，共有的，可以在任何地方访问到）
// private（私有的，不能在声明它到类到外部访问）
// protected（受保护的，和 static 类似，区别是 在子类中允许被访问）

// ---------public-----------

/* class Animal{
    public name;
    public constructor(name){
        this.name = name;
    }
}
let a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';
console.log(a.name); // Tom */

// ---------private-------------

/* class Animal{
    private name; // name 私有，只能在类内部访问
    public constructor(name){
        this.name = name;
    }
}
let a = new Animal('Jack');
console.log(a.name); // error
a.name = 'Tom'; // error
console.log(a.name); // error */
// Property 'name' is private and only accessible within class 'Animal'.

// -----------private修饰，在子类中也不能访问--------------

/* class Animal{
    private name; // name 私有，只能在类内部访问
    public constructor(name){
        this.name = name;
    }
}
class Cat extends Animal{
    constructor(name){
        super(name);
        console.log(this.name); // ts-class.ts:44:26 - error TS2341: Property 'name' is private and only accessible within class 'Animal'.
    }
} */

// -------------protected，在子类中可以访问-------------------

/* class Animal{
    protected name; // name 私有，只能在类内部访问
    public constructor(name){
        this.name = name;
    }
}
class Cat extends Animal{
    constructor(name){
        super(name);
        console.log(this.name);
    }
} */

// --------------构造函数修饰为 private--------------该类不允许 被继承 或 实例化------------
// --------------构造函数修饰为 protected--------------该类只允许被继承------------
/* class Animal{
    protected name; // name 私有，只能在类内部访问
    private constructor(name){
        this.name = name;
    }
}
class Cat extends Animal{  // ts-class.ts:70:19 - error TS2675: Cannot extend a class 'Animal'. Class constructor is marked as private.
    constructor(name){
        super(name);
        console.log(this.name);
    }
} */

// let a = new Animal('Jack'); // ts-class.ts:77:9 - error TS2673: Constructor of class 'Animal' is private and only accessible within the class declaration.

// --------------参数属性，修饰符 和 readonly 放在构造函数参数中，同时存在时，readonly放在后面--------
/* class Animal{
    public constructor(public readonly name){

    }
} */

// -----------------抽象类，用 abstract 定义 抽象类 和 抽象方法，1. 不允许被实例化  2. 抽象方法必须被子类实现---------------
/* abstract class Animal{
    public name;
    public constructor(name){
        this.name = name;
    }
    public abstract sayHi(); // 抽象方法不能写大括号，在这里实现，到子类中去实现
}
// let a = new Animal('Jack'); // 报错，不允许实例化
class Cat extends Animal{
    public sayHi(){
        console.log(`my name is ${this.name}`);
    }
}
let cat = new Cat('Tom');
cat.sayHi(); // my name is Tom */

// -------------给类加上typescript的类型-----------------
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHi(): string {
        return `my name is ${this.name}`;
    }
}
let a: Animal = new Animal('Jack');
console.log(a.sayHi());