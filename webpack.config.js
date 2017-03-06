/**
 * Created by benny on 17/3/5.
 */
var webpack = require('webpack');//引入Webpack模块供我们调用，这里只能使用ES5语法，使用ES6语法会报错

module.exports = {//注意这里是exports不是export
    entry:[
        'webpack-dev-server/client?http://localhost:8080/',
        // 'webpack-dev-server',
        __dirname + "/src/js/root.js"
    ],//唯一入口文件，就像Java中的main方法
    output: {//输出目录
        path: __dirname + "/",//打包后的js文件存放的地方
        filename: "bundle.js"//打包后的js文件名
    },

    module: {
        //loaders加载器
        loaders: [
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader'//loader的名称（必须）
            },

            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }

        ]
    },

    // plugins: [
    //     new webpack.HotModuleReplacementPlugin()//热模块替换插件
    // ],

    // devServer: {
    //     // contentBase: './build',
    //     historyApiFallback: true,
    //     inline: true,
    //     port: 8080,
    // }
};
