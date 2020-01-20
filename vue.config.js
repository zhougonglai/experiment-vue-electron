const pkg = require('./package');
const webpack = require('webpack');
const path = require('path');

const isProd = () => {
	return process.env.NODE_ENV === 'production';
};

const resolve = dir => {
	return path.join(__dirname, './', dir);
};

module.exports = {
	transpileDependencies: ['vuetify'],
	devServer: {
		proxy: {
			'/base': {
				target: 'https://storeserverapi.zhougonglai.now.sh',
			},
			'/api': {
				target: 'https://voice-api.nn.com',
			},
		},
	},
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
		resolve: {
			alias: {
				'@': resolve('src'),
				'@main': resolve('src/main'),
				'@renderer': resolve('src/renderer'),
				'@share': resolve('src/share'),
				'@components': resolve('src/renderer/components'),
				'@layouts': resolve('src/renderer/layouts'),
				'@pages': resolve('src/renderer/pages'),
				'@plugins': resolve('src/renderer/plugins'),
				'@store': resolve('src/renderer/store'),
				'@router': resolve('src/renderer/router'),
				'@assets': resolve('src/renderer/assets'),
				'@styles': resolve('src/renderer/styles'),
				'@services': resolve('src/renderer/services'),
				'@utils': resolve('src/renderer/utils'),
			},
		},
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
