<template lang="pug">
  #room
    div(v-text="id")
    a(@click="back") back
</template>
<script>
export default {
	name: 'room',
	props: ['id'],
	methods: {
		back() {
			this.$router.push({
				name: 'index',
			});
		},
	},
	created() {
		console.log('this.id', this.id);
	},
};
</script>
