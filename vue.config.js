const path = require('path');

module.exports = {
	transpileDependencies: ['vuetify'],
	pluginOptions: {
		dll: {
			entry: ['vue', 'vue-router'],
			output: path.join(__dirname, './public/dll'),
			cacheFilePath: path.resolve(__dirname, './public'),
		},
	},
};
