// 输入：一个表达式字符串，只包含加法乘法和括号
// 输出：表达式计算结果
var s = '15+2*4';
var flag = null;
var stack = [];
s = '+' + s.replace(/\s/g,''); // 去掉空格并在原来字符串前拼接一个+号
for(var i = 0; i < s.length; i++){
    if(/\d/.test(s[i])){ // 匹配数字
        var num = '';
        while(/\d/.test(s[i]) && i < s.length){ // 字符串中连续多个数字，应该是一个多位数
            num += s[i];
            i++;
        }
        i--;
        switch(flag){
            case '+':{
                stack.push(num-0);
                break;
            }
            case '*':{
                stack.push(parseInt(stack.pop()*num));
                break;
            }
        }
    }else{
        flag = s[i];
    }
}
var res = 0;
for(var i = 0; i < stack.length; i++){
    res += stack[i];
}
console.log(res);