var ll = readline().split(' ');
var n = parseInt(ll[0]); // n次提交
var m = parseInt(ll[1]); // 前m名
var map = new Map();
var arr = [];
while(line=readline()){
    var lines = line.split(" ");
    var x = parseInt(lines[0]); // 工号
    var y = parseInt(lines[1]); // 分数
    
    map.set(y,x);
    arr.push(y);
    
}
arr = arr.sort(function (x,y){
    return y-x;
});

for(var i = 0; i < m; i++){
    //res += map.get(arr[i]) + ' ';
    print(map.get(arr[i]));
}
