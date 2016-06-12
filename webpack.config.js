var path = require('path');
const SRC_FOLDER = path.join(__dirname, 'src')
const DIST_FOLDER = path.join(__dirname, 'dist')

const webpackConfig = {
	entry: {
	    app: [path.join(SRC_FOLDER, 'app.js')]
	},
    output: {
	    publicPath: '/', // for generated urls
	    path: DIST_FOLDER,
	    filename: 'scripts/[name].js'
    },
    module: {
        loaders: [
            { 
	            test: /\.js$/,
				loader: 'babel-loader',
				query:
			    {
			    	presets:['es2015', 'react']
			    }
			}
        ]
    },
    devServer: {
	    colors: true,
	    historyApiFallback: true,
	    inline: true
    }
};

module.exports = webpackConfig;