<template lang="pug">
	v-container.home
		v-row(v-if="rooms.length" align="start" justify="start")
			v-col(md="3" lg="4" v-for="room of rooms" :key="room.user_id")
				v-card(shaped hover ripple raised outlined min-height="350")
					v-card-title.text-no-wrap.text-truncate.d-block(v-text="room.label")
					v-card-subtitle(v-text="room.nickname")
					//- v-avatar.ma-3(size="125" tile)
					v-img(:src="room.avatar")
		.skeleton(v-else)
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
	name: 'home',
	computed: {
		...mapState('room', ['rooms']),
	},
	methods: {
		entoRoom() {
			this.$router.push({
				name: 'room',
				params: {
					id: Math.random()
						.toString(36)
						.slice(-8),
				},
			});
		},
		...mapActions('room', ['getRooms']),
	},
	created() {
		this.getRooms();
	},
};
</script>
