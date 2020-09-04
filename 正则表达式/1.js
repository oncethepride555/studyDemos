// ()代表分组
// \1 重复第一个小括号()匹配到的内容
// $1 与 regexp 中的第1个子表达式相匹配的文本。
var str = "Hellllo world";
str = str.replace(/(l)\1/g,'$1'); // 全局匹配，将ll替换为l
console.log(str);