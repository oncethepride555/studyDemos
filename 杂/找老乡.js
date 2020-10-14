// 题目来源：
// https://exercise.acmcoder.com/online/online_judge_ques?ques_id=9579&konwledgeId=137
var N, M;
var result = [[1]]; // 同乡数组，数组中的每一个数组元素为同乡，小赛1的老乡放在第一个数组元素中
while ((N = readInt()) != null && (M = readInt()) != null) { // 每组数据 N个人，M个关系
    for (var i = 0; i < M; i++) { // 接下来的 M 行属于一组数据里的关系
        var a = readInt();
        var b = readInt();
        var c = readInt();
        if (c) { // c为1 【c为0的通通不考虑】
            var aInd = -1,
                bInd = -1;
            for (var j = 0; j < result.length; j++) {
                if (result[j].includes(a)) aInd = j; // aInd记录a所在老乡组的索引
                if (result[j].includes(b)) bInd = j;
            }
            //遍历完之后，知道了当前这行关系中，谁在老乡组，谁不在
            //分为以下几种情况：1.都在老乡组，且为同一个，则不用管；2.都不在老乡组，那就放进去；3.都在老乡组，但不是同一个，那就合并；4.其中一个在，就把另一个放进去
            if (aInd == bInd) { // aInd 和 bInd 都为 -1
                if (aInd == -1) { // a 和 b 是同乡（因为c为1），但同乡数组中还没有这个老乡组，也就不是小赛同乡
                    result.push([a, b]); // [a,b] 作为一个新元素放入 result 中
                }
            } else { // aInd ≠ bInd ， a 和 b 是同乡
                if (aInd == -1) result[bInd].push(a); // a不在老乡组，b在老乡组，a 和 b是老乡，所以将 a 加进来
                else if (bInd == -1) result[aInd].push(b); // 与上面相反
                else { // aInd 和 bInd 不相等，且 aInd 和 bInd 都不是 -1，也就是老乡组中有 a 的家乡，也有 b 的家乡，但 a 和 b 家乡不同，
                    // 这种情况一开始可能存在，随着分析的关系越来越多，可能发现原来归为两个老乡组的其实是同一个家乡，这种情况下，就应该将两者合并
                    result[aInd] = result[aInd].concat(result[bInd]); // 都合并到a老乡组
                    result.splice(bInd, 1);//删除b老乡组
                }
            }
        }
    }
    print(result[0].length - 1);
}