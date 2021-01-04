<template>
	<div class="container">
		<h1>Home Page</h1>
		<user-list></user-list>
	</div>
</template>

<script>
import Userlist from './UserList';
export default {
	name: 'home',
	components: {
		'user-list': Userlist,
	},
	data() {
		return {};
	},
	computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
