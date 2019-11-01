// 由于webpack 是基于Node进行构建的，所以webpack配置文件中任何合法的Node代码都是支持的。
const path = require('path')

// 在内存中，根据指定的模板页面，生成一份内存中的页面，同时自动把打包好的bundle.js注入到页面底部
// 如果要配置插件，需要在导出的对象中，挂载一个 plugins 节点
const htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')


// 这个配置文件其实就是一个js文件，通过Node中的模块操作，向外暴露一个配置对象
module.exports = {
    entry: './src/main.js', // 入口，webpack要打包哪个文件
    output: {
        path: path.resolve(__dirname, './dist'), // 指定打包好的文件输出到哪个目录
        filename: 'bundle.js' // 指定输出文件的名称
    },
    plugins: [ // 配置插件的节点

        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'), // 指定模板文件路径
            filename: 'index.html' // 指定生成的内存页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module: { // 这个节点用于配置所有 第三方模块 加载器
        rules: [ // 所有第三方模块的 匹配规则
            // 配置处理 .css 文件的第三方loader规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 配置处理 .less 文件的第三方loader规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // 配置处理 .scss 文件的第三方loader规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            // 配置 图片路径 的第三方loader规则
            { test: /\.(png|jpg|jpeg|gif|bmp)$/, use: 'url-loader?limit=1&name=[hash:8]-[name].[ext]' },
            // 配置 字体 路径
            { test: /\.(woff|woff2|ttf|eot|svg)$/, use: 'url-loader' },
            // 配置 babel
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            // 配置 vue 文件
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    }
}
