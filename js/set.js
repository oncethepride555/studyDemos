// Set()函数可以接受一个数组，作为构造参数，用于做初始化；
// 体会下面的不同：

let set = new Set(['1,2']);
console.log(set); // Set { '1,2' }

let set01 = new Set('1,2');
console.log(set01); // Set { '1', ',', '2' }