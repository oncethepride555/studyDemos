function chunk(originArr, len) {
    // if(originArr.length <= 0 || len <= 0) return originArr;
    let chunks = [];
    for (let i = 0; i < originArr.length; i += len) {
        chunks.push(originArr.slice(i, i + len));
    }
    return chunks;
}
const originArr = ["a", "b", "c", "d", "e", "f","g"];
const len = 3;
console.log(chunk(originArr, len));

// ========================================

function f(arr, size) {
    let res = [];
    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }
    return res;
}
console.log(f(originArr,2));