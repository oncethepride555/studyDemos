// 允许在[]中放入表达式，计算结果可以当作属性名。
// charAt() 返回指定位置的字符
var param = 'size';
var config = {
	[param]:12,
	['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]:4
};
console.log(config); // { size: 12, mobileSize: 4 }