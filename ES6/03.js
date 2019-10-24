/* 
    字符串相关扩展

    includes()  判断字符串中是否包含指定字符串，包含的话返回true，不包含返回false
                第一个参数，匹配的字符串；第二个参数，匹配开始的位置，从0开始数
    
    startsWith()  判断字符串是否以指定的字符串开始

    endsWith()   判断字符串是否以指定的字符串结束

    模板字符串
*/
// includes()
let str = 'hello world';
console.log(str.includes('world')); // true
console.log(str.includes('world', 6)); // true
console.log(str.includes('world', 7)); // false
// startsWith()
let url = 'admin/index.php';
console.log(url.startsWith('admin')); //true
// endsWith()
console.log(url.endsWith('php')); //true
// ---------------------------------------------
// 模板字符串
let obj = {
    name: 'zhangsan',
    age: '19',
    gender: 'male'
}
// 不使用模板字符串的普通写法：
let tag = '<div><span>' + obj.name + '</span><span>' + obj.age + '</span><span>' + obj.gender + '</span></div>';
console.log(tag);
// 使用模板字符串  反引号``表示模板，模板中的内容可以有格式，通过${}方式填充数据
// ${}中支持简单的表达式运算
// ${}中可以进行函数的调用
let fn = function(info){
    return info;
}
let temp = `
    <div>
        <span>姓名：${obj.name}</span>
        <span>年龄：${obj.age}</span>
        <span>性别：${obj.gender}</span>
        <span>${1+1}</span>
        <span>${fn('hello')}</span>
    </div>
`;
console.log(temp);