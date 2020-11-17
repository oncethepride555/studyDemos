function qSort(list){
    if(list.length == 0) return [];
    let leftArr = [];
    let rightArr = [];
    let pivot = list[0];
    for(let i = 1; i < list.length; i++){
        if(list[i] > pivot){
            
            rightArr.push(list[i]);
        }else{
            leftArr.push(list[i]);
        }
    }
    return qSort(leftArr).concat(pivot,qSort(rightArr));
}