// K个鸡蛋，N层楼
/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
function drop(K, N) {
    // let a = Array(K+1).fill(0); 
    // console.log(a); // [0,0,0]
    let dp = Array(K + 1).fill(0).map(() => new Array(N + 1).fill(0))
    // console.log(dp);
    // console.log(dp) // [[0,0,...,0],[0,0,...,0],[0,0,...,0]]

    for (let j = 1; j <= N; j++) {
        for (let i = 1; i <= K; i++) {
/*  二分法从中间楼层掉个鸡蛋，次数+1
    碎了-> i-1个鸡蛋测试j-1次 -> 下面的楼层
    没碎-> i个鸡蛋测试j-1次 -> 上面的楼层
    所以 dp[i][j] = 1 + dp[i-1][j-1] + dp[i][j-1]
*/
            dp[i][j] = 1 + dp[i - 1][j - 1] + dp[i][j - 1];
            if (dp[i][j] >= N) {
                // console.log(dp[i][j], i , j)
                return j // 测试次数
            }
        }
    }
    return N
};
console.log(drop(2, 100));