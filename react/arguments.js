function func(a,b,c){
    console.log(arguments[0]); // 1
    console.log(arguments[1]); // 2
    console.log(arguments[2]); // 3
}

func(1,2,3)

const func1 = (a,b,c) => {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

// func1(4,5,6); // 报错，箭头函数 不可用 arguments 对象