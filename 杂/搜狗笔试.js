// 解密
// s1是n*n的矩形，0位置透明，与s2重合，从上到下，从左到右读出透明部分的字母
// 将s1顺时针旋转90°，再读，再旋转，再读，一共四次
var s1 = ["1101","1010","1111","1110"];
var s2 = ["ABCD","EFGH","IJKL","MNPQ"];
var str = '';
function fn(arr){

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            if(arr[i][j] == 0){
                str += s2[i][j];
            }
        }
    }
    return str;
}

function tra(arr){
    var n = arr.length;
    var trarr = [];
    for(var i = 0; i < n; i++){
        trarr[i] = []; // js中创建二维数组，是先创建一维数组，再给一维数组的每个元素赋值为一维数组
        for(var j = 0; j < n; j++){
            trarr[i][j] = arr[n-j-1][i]; // 解题的关键就是找到旋转后与原来的关系
        }
    }
    return trarr;
}
fn(s1);
var s11 = tra(s1); // 旋转1
fn(s11);
var s12 = tra(s11); // 2
fn(s12);
var s13 = tra(s12); // 3
console.log(fn(s13));