<template lang="pug">
	v-app
		v-app-bar.draggable(app dark fixed shrink-on-scroll prominent dense scroll-target="#scrolling-techniques")
			v-toolbar-title 游戏组队
			v-spacer
			v-btn(icon)
				v-icon mdi-magnify
			v-btn(icon)
				v-icon mdi-heart
			v-btn(icon)
				v-icon mdi-dots-vertical
		v-content#scrolling-techniques.overflow-y-auto
			router-view
</template>
<script>
export default {
	name: 'default',
	data() {
		return {
			bottomNav: 3,
		};
	},
};
</script>
<style lang="scss" scoped>
#scrolling-techniques {
	height: calc(100vh - 96px);
	background-image: url('https://www.nn.com/_nuxt/img/a642a1a.png');
}
</style>
