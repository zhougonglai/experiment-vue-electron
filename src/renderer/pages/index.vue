<template lang="pug">
	v-container.home.fill-height.align-start.justify-center(fluid)
		v-item-group
			v-row(align="start" justify="center")
				v-col(cols="4" v-for="(banner, i) of banners" :key="banner.corver.slice(-20, -5)")
					v-item
						v-img.full-height(:src="banner.corver")
		//- v-carousel(cycle hide-delimiter-background show-arrows-on-hover height="350")
		//- 	v-carousel-item(v-for="(banner, i) of banners" :key="banner.corver.slice(-20, -5)")
		//- 		v-img.full-height(:src="banner.corver")
		v-row(v-if="channels.length" align="start" justify="start")
			v-col(lg="3" xl="4" cols="4" v-for="channel of channels" :key="channel.channel_no")
				v-card(hover ripple @click="entoChannel(channel)")
					v-img.white--text.align-end(height="200px" :src="channel.cover")
					v-card-title.text-no-wrap.text-truncate.d-block(v-text="channel.name")
					v-card-subtitle.d-flex.align-center
						img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABY0lEQVQ4T5XSv0scQRjG8e+zZ4iFexYhEA5EyB/g6F9gIXZypwQOhRRWVmkjBIQTGyGgjXWIEEgRq10RbIRLY70npk6wUjAh597FQndeudyZHxp0M90M85n3nZlH7ixaQLwGBsk3mt54KZdG3/8D9Y62Zgfaz5mxhtgH3hCwjudTUAgC77MhM40LyoCum/oFBdUkrGy5NDoWfjYJZ+p/dj6WxuMZtivo76z/rii1MbtAFGV+IhmY/uha8QXSN8FiMlDedO1oA8+Lv6DQki+wp4wdkT3rQd+7xudGsfJ0tBXPm9nbG/BGq92KXQgnjbDyZKQVz8nsfW5ocHQQVoZdK3qO8S43BK00wnJtJI1qguW7YThTd+14ynzw5SCcOhxLPzz2ephglO6FGHLn2yV5mzTvl5GGb/0jcAl0HuMB4hKjE4wA6PtXEjWaRqcGj/LFtLtL8FXuR1wlY9WwXCEXalLg1RX9384nwtCeawAAAABJRU5ErkJggg==")
						small.ml-1 {{channel.channel_no}}
						v-spacer
						span.text-primary ●
						small.ml-1 当前在线
		.skeleton(v-else)
</template>
<script>
import { mapState, mapActions } from 'vuex';
import ipc from '@utils/ipc';

const { entoChannel } = ipc;

export default {
	name: 'home',
	data() {
		return {
			banners: [
				{
					title: 'NN组队开黑',
					corver:
						'https://static.nn.com/image/2020/1/16/8/49/54/e24feeec7edee2a85555b9bc52862049.png',
				},
				{
					title: 'NN加速器春节',
					corver:
						'https://static.nn.com/image/2020/1/20/16/46/51/94a67e6bf43215f50acfd106c23d15bd.png',
				},
				{
					title: 'N站',
					corver:
						'https://static.nn.com/image/2020/1/8/18/0/0/61066e6034e73173f1058f5c69beb09d.png',
				},
			],
		};
	},
	computed: {
		...mapState('channel', ['channels']),
	},
	methods: {
		entoChannel,
		...mapActions('channel', ['getChannels']),
	},
	mounted() {
		this.getChannels();
	},
};
</script>
