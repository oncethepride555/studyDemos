// 2020年10月22日
// 反转字符串
/* var str = "Once more you open the door，And you are here in my heart";
var temp = str.split(' ');
var result = temp.map((value) => {
    return value.split('').reverse().join('');
});
result = result.join(' ');
console.log(result); */

// 正则匹配
var str = "我的偶像是{$name}，他今年{$age}岁";
var name = "刘昊然";
var age = 23;
var regName = /\{\$(name)\}/g;
var regAge = /\{\$(age)\}/g
var res = str.replace(regName,name);
res = res.replace(regAge,age);
console.log(res);