import Vue from 'vue';
import Vuex from 'vuex';
import channel from './modules/channel';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		channel,
	},
});
