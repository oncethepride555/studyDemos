// 需求：封装一个方法，要求这个方法能够 根据给出的读取文件的路径 来【读取文件】，并【返回文件的内容】
// Node.js 文件系统封装在 fs 模块是中，它提供了文件的读取、写入、更名、删除、遍历目录、链接等POSIX 文件系统操作。
const fs = require('fs')
const path = require('path')

function getFileByPath(fpath, succCb, errCb) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err) return errCb(err.message)
        succCb(dataStr)
    })
}

// getFileByPath(path.join(__dirname,'./files/1.txt'),function(dataStr){
//     console.log(dataStr)
// },function(err){
//     console.log(err)
// })

getFileByPath(path.join(__dirname, './files/1.txt'), function (dataStr) {
    console.log(dataStr)
    getFileByPath(path.join(__dirname, './files/2.txt'), function (dataStr) {
        console.log(dataStr)
        getFileByPath(path.join(__dirname, './files/3.txt'), function (dataStr) {
            console.log(dataStr)
        })
    })
})
