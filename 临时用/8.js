var name = 'World!';
(function (){
    console.log(typeof name);
    if(typeof name === 'undefined'){
        var name = 'Rose';
        console.log('Goodbye' + name);
    }else{
        console.log('Hello' + name);
    }
})();

// 相当于
var name = 'World!';
(function (){
    var name; // 变量提升
    console.log(typeof name); // undefined
    if(typeof name === 'undefined'){
        name = 'Rose';
        console.log('Goodbye' + name);
    }else{
        console.log('Hello' + name);
    }
})();