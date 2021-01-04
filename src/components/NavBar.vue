<template>
	<nav class="navbar navbar-expand-sm navbar-dark bg-info mb-2">
		<div class="container">
			<router-link to="/"><a href="" class="navbar-brand">Twitterche</a></router-link>
		</div>
		<span class="navbar-brand"> Hello, {{ this.$route.params.username || 'user' }} </span>
	</nav>
</template>

<script>
export default {
	props: {
		userName: String,
	},
	data() {
		return {};
	},
	methods: {},
	computed: {},
};
</script>
