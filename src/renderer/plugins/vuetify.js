import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import zhHans from 'vuetify/es5/locale/zh-Hans';
import { preset } from 'vue-cli-plugin-vuetify-preset-fortnightly/preset';

Vue.use(Vuetify);

export default new Vuetify({
	preset,
	lang: {
		locales: { zhHans },
		current: 'zh-Hans',
	},
});
