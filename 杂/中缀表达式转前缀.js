let s1 = []; // 存运算符
let s2 = []; // 存中间结果
let str = '(2+8)*2+2';
for (let i = str.length - 1; i >= 0; i--) {
    if (/\d/.test(str[i])) { // 遇到操作数
        s2.push(str[i]);
    }
    if (str[i] == '+' || str[i] == '*') { // 遇到运算符
        if (s1.length == 0 || s1[s1.length - 1] == ')') { // a
            s1.push(str[i]);
        } else if ((str[i] == '*' && s2[s2.length - 1] == '+') || (str[i] == s2[s2.length - 1])) { // b
            s1.push(str[i]);
        } else {
            s2.push(s1.pop());
        }
    }
    if (str[i] == '(' || str[i] == ')') { // 遇到括号
        if (str[i] == ')') { // 右括号
            s1.push(str[i]);
        } else { // 左括号
            while (s1[s1.length - 1] != ')') {
                s2.push(s1.pop());
            }
            if (s1[s1.length - 1] == ')') {
                s1.pop();
            }
        }
    }

}
while (s1.length) {
    s2.push(s1.pop());
}
let res = '';
while (s2.length) {
    res += s2.pop();
}
console.log(res);

// 计算前缀表达式
let stack = [];
for(let i = res.length-1; i >= 0; i--){
    if(/\d/.test(res[i])){
        stack.push(res[i]);
    }else{
        let a = stack.pop();
        let b = stack.pop();
        if(res[i] == '+'){
            var temp = parseInt(a) + parseInt(b);
        }else if(res[i] == '*'){
            var temp = parseInt(a) * parseInt(b);
        }
        stack.push(temp);
    }
}
console.log(stack.pop());