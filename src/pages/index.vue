<template lang="pug">
	.home
		a(@click="entoRoom") enter room
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
