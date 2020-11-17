function qSort(arr){
    if(arr.length === 0) return []; //
    let leftArr = [];
    let rightArr = [];
    let p = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < p){
            leftArr.push(arr[i]);
        }else{
            rightArr.push(arr[i])
        }
    }
    return qSort(leftArr).concat(p,qSort(rightArr));
}
let arr = [3,6,2,1,34,12,56,4];
console.log(qSort(arr))