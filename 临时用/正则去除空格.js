var str = '  h w  ! ';
// str = str.replace(/(\s*$)/g,""); // 删除末尾的零个或多个空格（用空替换末尾零个或多个空格）
// str = str.replace(/^\s|\s$/g,""); // 删除开头一个空格，末尾一个空格
// str = str.replace(/^\s*/,""); // 删除开头的所有空格
str = str.replace(/\s*/g,""); // 删除所有空格
// str = str.replace(/\s+/g,'') // 删除所有空格
console.log(str); 
console.log(str.length);

// var a = "A ghost bed";
// console.log(a.match(/bo*/g)); // 匹配一个b，然后b后面零个或多个o