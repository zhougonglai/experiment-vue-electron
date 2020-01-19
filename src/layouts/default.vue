<template>
	<v-app>
		<v-app-bar app color="primary" class="draggable">
			<v-spacer />
			<v-btn text>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn>
		</v-app-bar>
		<v-content>
			<router-view />
		</v-content>
	</v-app>
</template>
