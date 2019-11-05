const fs = require('fs')

function getFilePath(fpath) {
    var promise = new Promise(function(resolve,reject){
        fs.readFile(fpath,'utf-8',(err,dataStr) => {
            if(err) return reject(err)
            resolve(dataStr)
        })
    })
    return promise
}

var p = getFilePath('./files/1.txt')
p.then(function (data) {
    console.log(data)
},function (err) {
    console.log(err.message)
})