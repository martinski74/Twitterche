<template>
	<div id="app">
		<NavBar />
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script>
// import HomeView from './components/HomeView.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'App',
	components: {
		// HomeView,
		NavBar,
		Footer,
	},
	data() {
		return {};
	},
	methods: {},
};
</script>

<style>
#app {
	font-family: Helvetica, Arial, sans-serif;
	background-color: #f3f5fa;
	height: 920px;
}
</style>
