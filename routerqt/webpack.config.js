const webpack=require('webpack');
const path = require('path');
module.exports={
    entry:{
        bundle:'./src/main.js'    
    },
    output:{
        filename:'[name].js',
        path:__dirname+'/dist'
    },
    module:{
        rules:[
            {
                test:/(\.js|\.jsx)$/,
                use:['babel-loader'],
                exclude:path.resolve(__dirname,'node_modules/')  
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
                exclude:path.resolve(__dirname,'node_modules/')
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'NODE.ENV':JSON.stringify("development")  
        })
       ],
    devServer:{
        open:true,
        port:8080,
        inline:true,
        noInfo:true
    },
    devtool:'eval-source-map'
}