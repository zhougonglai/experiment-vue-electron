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
			'/api': {
				target: 'https://voice-api.nn.com',
			},
		},
	},
	// css相关配置
	css: {
		// 是否使用css分离插件 ExtractTextPlugin
		extract: isProd(),
		// 开启 CSS source maps?
		sourceMap: isProd(),
		// css预设器配置项
		loaderOptions: {},
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': resolve('src'),
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
		optimization: {
			splitChunks: {
				chunks: 'async',
				minSize: 30000,
				maxSize: 0,
				minChunks: 1,
				maxAsyncRequests: 5,
				maxInitialRequests: 3,
				automaticNameDelimiter: '~',
				name: true,
				cacheGroups: {
					vendors: {
						test: /[\\/]node_modules[\\/]/,
						priority: -10,
					},
					commons: {
						name: 'chunk-commons',
						test: resolve('src/renderer/components'), // 可自定义拓展你的规则
						minChunks: 3, // 最小公用次数
						priority: -15,
						reuseExistingChunk: true,
					},
					default: {
						minChunks: 2,
						priority: -20,
						reuseExistingChunk: true,
					},
				},
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
		electronBuilder: {
			builderOptions: {
				productName: 'NN',
				appId: 'cn.zhougonglai.nn',
			},
		},
	},
};
