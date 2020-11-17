var arr = [10, 1, 8, 7, 5];
function buble(arr) {
    for (var i = 1; i < arr.length; i++) { // 外层循环控制循环趟数
        for (var j = 0; j < arr.length - i + 1; j++) { // 内层循环控制每趟比较次数
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var arr1 = [2,4,3,5,7,9,22,12,19];
console.log(buble(arr1));