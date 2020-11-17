function removeDuplicates(nums){
    for(var i = 0; i < nums.length;){
        if(nums.indexOf(nums[i]) !== i){ // 当前元素第一次出现的索引与当前索引不一致，就说明不是第一次出现
            nums.splice(i,1); // 通过splice删掉这个重复的元素
        }else{
            i++;
        }
    }
    return nums;
}
let nums = [1,1,2,3,3,4,4,5];
console.log(removeDuplicates(nums));