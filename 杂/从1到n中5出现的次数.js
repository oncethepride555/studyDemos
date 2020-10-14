// 从1到n中5出现的次数
// 参考
// https://leetcode-cn.com/problems/number-of-digit-one/solution/python3shu-xue-zhao-gui-lu-fa-chao-ji-hao-li-jie-b/
var n = 50;
function count(n) {
    var str = String(n);
    var result = 0;
    var len = str.length;
    for (var i = len - 1; i >= 0; i--) { // 从个位开始，到最高位
        var cur = +str[i];// + 字符串变整数  cur是当前位的值 比如2593 cur为3时，high为259，low为0
        var high = +str.slice(0, i) || 0; // high，low分别是cur的前后
        var low = +str.slice(i + 1) || 0; // 从i+1一直到最后
        var base = Math.pow(10,len-i-1);
        if (cur > 5) {
            result += (high + 1) * base;
        } else if (cur == 5) {
            result += high * base + low + 1;
        } else { // <5
            result += high;
        }
    }
    return result;
}
console.log(count(n));