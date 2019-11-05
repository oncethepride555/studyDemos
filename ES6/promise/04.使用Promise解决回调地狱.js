const fs = require('fs')

function getFilePath(fpath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {
            if (err) return reject(err)
            resolve(dataStr)
        })
    })
}

// 读取文件1
getFilePath('./files/11.txt')
    .then(function (data) {
        console.log(data)
        // 读取文件2
        return getFilePath('./files/2.txt')
    }
        /* , function (err) {
            console.log('这是失败的结果：' + err.message)
            // 失败时就不执行成功的那个函数了，所以需要另外 return 一个新的 promise
            return getFilePath('./files/2.txt')
        } */
    ).then(function (data) {
        console.log(data)
        // 读取文件3
        return getFilePath('./files/3.txt')
    }).then(function (data) {
        console.log(data)
    }).catch(function (err) { // 捕获异常，而且后续 promise 不再执行
        console.log('这里捕获出错的promise抛出的异常：' + err.message)
    })