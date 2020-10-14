let obj = {
    A:1,
    B:2
};
Object.prototype.c = 3;
Object.defineProperty(obj,'d',{
    enumerable:false
});
for(let key in obj){
    console.log(key);
}