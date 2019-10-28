const path =  require('path');
// 启用热更新的第2步
const webpack = require('webpack');

// 这个配置文件其实就是一个js文件，通过Node中的模块操作，向外暴露一个配置对象
module.exports = {
    entry: './src/main.js', // 入口，webpack要打包哪个文件
    output: {
        path: path.resolve(__dirname,'./dist'), // 指定打包好的文件输出到哪个目录
        filename:'bundle.js' // 指定输出文件的名称
    },
    devServer:{
        open: true, // 自动打开浏览器
        port: 3333, // 设置启动时候运行的端口号
        contentBase: 'src', // 指定托管的目录
        hot: true // 启用热更新的第1步
    },
    plugins:[ // 配置插件的节点
        new webpack.HotModuleReplacementPlugin() 
        // new 一个热更新的模块对象，这是启用热更新的第3步
    ]
}
