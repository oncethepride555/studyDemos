// 需求：找到一个数组中出现次数最多的元素，将其删除，返回删除后的数组，数组中其他元素的顺序不能变
// 如果出现次数最多的有多个元素，都要删除
var res = {};
function find(arr){
    
    for(var i = 0, l = arr.length; i < l ; i++){
        if(!res[arr[i]]) res[arr[i]] = 1;
        else res[arr[i]]++;
    }
     console.log(res);//{ '1': 1, '3': 2, '5': 2, '9': 1 }
    var keys = Object.keys(res);
    //console.log(keys);//[ '1', '3', '5', '9' ]
    var arr = [];
    for(var i = 0; i < keys.length; i++){
        arr.push(res[keys[i]]);
    }
    arr = arr.sort(function com(a,b){
        if(a<b) return 1;
        else if(a==b) return 0;
        else return -1;
    })
    //console.log(arr);
    return arr[0];
}
var arr = [1,3,5,3,9,5,5,9,2,2,9];
var maxN = find(arr);
var result = [];
for(var v in res){
    if(res[v] != maxN){
        result.push(v);
    }
}
console.log(result);