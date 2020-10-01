/* for(var i = 1; i < 4; i++){
    setTimeout(() => {
        console.log(i)
    },0)
} */
// 4 4 4

/* for(let i = 1; i < 4; i++){
    setTimeout(() => {
        console.log(i)
    },0)
} */
// 1 2 3

/* for(var i = 1; i < 4; i++){
    (function(j){
        setTimeout(() => {
            console.log(j);
        },0);
    })(i);
} */
// 1 2 3 

/* for (var j = 0; j < 3; j++) {
    var j = 'bbb';
    console.log(j); // bbb
}
console.log(j); // NaN */

/* var a = 'aaa';
console.log( a++); // NaN  【not a number】 */

/* var a = 'aaa';
console.log(a+1); // aaa1  字符串拼接
console.log(typeof (a+1)); // string */