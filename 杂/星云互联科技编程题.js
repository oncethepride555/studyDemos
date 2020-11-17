// 求字符串的最长无重复字符串的长度
let str = 'abcdedc';
function f(str){
    let res = 0; // 最长无重复字串的长度
    let s = ''; // 最长无重复字串
    let len = str.length;
    for(let i = 0; i < len; i++){
        if(s.indexOf(str[i]) === -1){
            s += str[i];
            res++;
        }else{
            str.substr()
        }
    }
}