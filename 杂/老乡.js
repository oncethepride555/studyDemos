var N,M;
var result = [[1]]; // 数组中每个元素是一个老乡数组
while((N = readInt()) != null && (M = readInt()) != null){
    for(var i = 0; i < M; i++){
        var a = readInt();
        var b = readInt();
        var c = readInt();
        if(c){
            var alnd = -1,blnd = -1;
            for(var j = 0; j < result.length; j++){//把现有的老乡组遍历一遍
                if(result[j].includes(a)) alnd = j;// alnd记录a所在老乡组索引
                if(result[j].includes(b)) blnd = j;
            }
            //遍历完之后，知道了当前这行关系中，谁在老乡组，谁不在
            //分为以下几种情况：1.都在老乡组，且为同一个，则不用管；2.都不在老乡组，那就放进去；3.都在老乡组，但不是同一个，那就合并；4.其中一个在，就把另一个放进去
            if(alnd == blnd){
                if(alnd == -1){ // 都不在现有老乡组中
                    result.push([a,b]);
                }
            }else{
                if(alnd == -1){ // a不在，b在老乡组
                    result[blnd].push(a);
                }else if(blnd == -1){ // b不在，a在老乡组
                    result[alnd].push(b);
                }else{ // a b 都在，但不是同一个，需要合并
                    result[alnd] = result[alnd].concat(result[blnd]);
                    result.splice(blnd,1);
                }
            }
        }
    }
    // 所有都判断完，最后输出
    print(result[0].length - 1);
}