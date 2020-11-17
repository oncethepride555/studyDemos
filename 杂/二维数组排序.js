let arr = [[1,2,4],[1,2,3],[1,3,4],[1,3,2]];
arr =  arr.sort(function(a,b){
        if(a[0] !== b[0]){
            return a[0] - b[0];
        }else if(a[1] !== b[1]){
            return a[1] - b[1];
        }else if(a[2] !== b[2]){
            return a[2] - b[2];
        }
    });
console.log(arr);