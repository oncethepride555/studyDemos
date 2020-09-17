var s = read_line(),r = 0, rec = {};
for (var c of s){
    rec[c] = rec[c] + 1 || 1;
} 
// print(Object.values(rec)); //4,2,1,1
for(var c of Object.values(rec)){
    r += c / s.length * Math.log2(c / s.length);
} 
print((-r).toFixed(7).replace(/(\.[1-9]*)0+$/,"$1")); // 正则表达式去掉末尾的0