<template lang="pug">
	.home
		a(@click="entoRoom") enter room
		v-btn default
		v-btn(color="primary") primary
		v-btn(color="error") error
</template>
<script>
export default {
	name: 'home',
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
	},
};
</script>
