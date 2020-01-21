<template>
	<v-app>
		<v-app-bar
			app
			dark
			fixed
			class="draggable"
			shrink-on-scroll
			prominent
			scroll-target="#scrolling-techniques"
			dense
		>
			<v-toolbar-title>游戏组队</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>

			<v-btn icon>
				<v-icon>mdi-heart</v-icon>
			</v-btn>

			<v-btn icon>
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
		</v-app-bar>
		<v-content id="scrolling-techniques" class="overflow-y-auto">
			<router-view />
		</v-content>
	</v-app>
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
