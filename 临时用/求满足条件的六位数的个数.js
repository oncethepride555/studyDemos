// M 和 N 为六位数
// 求在 M 和 N 之间有多少个六位数 ABCDEF 满足以下条件：
// 1. ABCDEF 六位数字均不相同
// 2. AB + CD = EF
// 3. A 不为零
var M = 100000;
var N = 130000;
var res = 0; // 用来记录满足条件的六位数的个数
for (var i = M; i <= N; i++) {
    var arr = i.toString().split(''); // 六位数转换为字符串并分割存进数组
    var len = arr.length;
    var setLen = [...new Set(arr)].length; // 数组去重
    // 如果数组去重后长度和没有去重前相等，说明六位数字均不相同
    if (len == setLen) {
        if (arr[0] != 0) { // A 不为零
            // AB + CD = EF
            if (parseInt(arr[0]) * 10 + parseInt(arr[1]) + parseInt(arr[2]) * 10 + parseInt(arr[3]) == parseInt(arr[4]) * 10 + parseInt(arr[5])) {
                res++;
            }
        }
    }

}
console.log(res);