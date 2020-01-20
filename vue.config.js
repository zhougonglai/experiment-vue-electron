const pkg = require('./package');
const webpack = require('webpack');
const path = require('path');

const isProd = () => {
	return process.env.NODE_ENV === 'production';
};

module.exports = {
	transpileDependencies: ['vuetify'],
	// css相关配置
	css: {
		// 是否使用css分离插件 ExtractTextPlugin
		extract: isProd() ? true : false,
		// 开启 CSS source maps?
		sourceMap: isProd() ? true : false,
		// css预设器配置项
		loaderOptions: {},
	},
	configureWebpack: {
		plugins: [
			new webpack.BannerPlugin({
				banner: `Current version ${
					pkg.version
				} and build time ${new Date().toLocaleString()}`,
			}),
		],
	},
	pluginOptions: {
		dll: {
			entry: ['vue', 'vue-router'],
			output: path.join(__dirname, './public/dll'),
			cacheFilePath: path.resolve(__dirname, './public'),
			// open: 'auto',
			// inject: true,
		},
		electronBuilder: {
			builderOptions: {
				productName: 'NN',
				appId: 'cn.zhougonglai.nn',
			},
		},
	},
};
