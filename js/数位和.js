function numSum(num){
    let count = 0;
    while(num){
        count += num%10;
        num = Math.floor(num/10);
    }
    return count; 
}

console.log(numSum(11));