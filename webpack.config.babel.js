import path from 'path';


export default {
    context : __dirname,
    resolve : {
        extensions: [
            '.js', '.json'
        ],
        alias: {
            constants$ : path.resolve(__dirname, "src/constants/index.js" ),
            actions$   : path.resolve(__dirname, "src/store/states/actionsExporter.js" ),
            vars$      : path.resolve(__dirname, "src/lib/css/vars.js" )
        }
    },
    entry : __dirname + '/src/main.js',
    output : {
        path: __dirname + "/public/",
        filename: "app.js"
    },
    module : {
        rules: [
            {
                test: /\.js$/, //Check for all js files
                use: [
                    {
                        loader: 'babel-loader'
                    }, {
                        loader: "eslint-loader"
                    }
                ],
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 3000
    }
}