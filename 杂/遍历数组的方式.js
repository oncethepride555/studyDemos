var a = [11, 12, 13, 14, 15, 16, 17, 18]
// for( [index,item] of a.entries()){
//     console.log(index);
// }
// for( var i in a){
//     console.log(a[i])
// }
/* a.some((item,index)=>{
    console.log(item);
}) */
/* a.every((item,index)=>{
    console.log(item);
}) */

// console.log(Array.isArray(a)); // true

// console.log(a.__proto__ === Array.prototype); // true
console.log(a instanceof Array); // true