import Vue from 'vue';
import App from '@renderer/App';
import '@renderer/registerServiceWorker';
import router from '@router';
import store from '@store';
import vuetify from '@plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import '@styles/global.scss';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount('#app');
