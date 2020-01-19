import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			component: () =>
				import(
					/* webpackChunkName: "layout.default" */
					'@/layouts/default'
				),
			children: [
				{
					path: '',
					name: 'index',
					meta: {
						keepAlive: true,
					},
					component: () =>
						import(
							/* webpackChunkName: "page.index" */
							'@/pages/index'
						),
				},
				{
					path: 'room/:id',
					name: 'room',
					meta: {
						keepAlive: true,
					},
					props: true,
					component: () =>
						import(
							/* webpackChunkName: "page.room" */
							'@/pages/room'
						),
				},
			],
		},
	],
});
