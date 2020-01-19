import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import zhHans from 'vuetify/es5/locale/zh-Hans';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		options: {
			customProperties: true,
		},
		themes: {
			light: {
				primary: colors.indigo.base,
				secondary: colors.cyan.base,
				accent: colors.purple.base,
				error: colors.red.base,
				warning: colors.amber.base,
				info: colors.blue.base,
				success: colors.green.base,
			},
		},
	},
	lang: {
		locales: { zhHans },
		current: 'zh-Hans',
	},
});
