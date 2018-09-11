const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const sourcePath = path.join(__dirname,'./static/src');
const outputPath = path.join(__dirname,'../output/dist');

module.exports = {
    entry: {
        'index' : './static/src/pages/index.js',
        'home' : './static/src/pages/home.js',
        'article' : './static/src/pages/article.js',
        'more' : './static/src/pages/more.js',
        vendor : ['react', 'react-dom', 'whatwg-fetch']
    },

    output: {
        path: outputPath,
        publicPath: '/output/dist/',
        filename: 'js/[name].js'
    },

    module: {
        rules: [
            {
                test : /\.(js|jsx)$/,
                exclude : /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        // presets:['react','es2015','stage-2'],
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]']
                })
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','less-loader']
                })
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },

    resolve: {
        extensions: ['.js','.jsx'],
        modules:[
            sourcePath,
            'node_modules'
        ]
    },

    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.SplitChunksPlugin({
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        })
    ]
}