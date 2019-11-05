// 需求：封装一个方法，要求这个方法能够 根据给出的读取文件的路径 来【读取文件】，并【返回文件的内容】
// Node.js 文件系统封装在 fs 模块是中，它提供了文件的读取、写入、更名、删除、遍历目录、链接等POSIX 文件系统操作。
const fs = require('fs')
const path = require('path')

// 这是普通的读取文件的方式
/* fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,datastr) => {
    if(err) throw err
    console.log(datastr)
}) */

function getFileByPath(fpath,callback){
    fs.readFile(fpath,'utf-8',(err,dataStr) => {
        if(err) return callback(err,undefined)
        // console.log(datastr)
        // return datastr
        callback(null,dataStr)
    })
}

/* var result = getFileByPath(path.join(__dirname,'./files/1.txt'))
console.log(result) // undefined */
getFileByPath(path.join(__dirname,'./files/11.txt'),(err,dataStr) => {
    if(err) return console.log(err.message)
    console.log(dataStr)
})