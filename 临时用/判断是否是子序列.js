// 判断 T 字符串是否是 S 字符串的子序列
// 如果是，需要返回 T 字符串在 S 中相应位置的最小和，从1开始
var S = 'dbab';
var T = 'dbbc';
var n = S.length;//S的长度
var m = T.length;//T的长度
var l = 0;
var r = 0;
var sum = 0;
while(l < m && r < n){
    if(T[l] === S[r]){
        l++;
        sum += r+1;
    }
    r++;
}
if(l === m){
    console.log('Yes');
    console.log(sum);
}
else console.log('No');