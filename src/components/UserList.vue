<template>
	<div class="row">
		<div class="list-group">
			<a
				v-for="user in users"
				:key="user.id"
				@click="showTwitt(user)"
				href="#"
				class="list-group-item list-group-item-action"
				>{{ user.username }}</a
			>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
	data() {
		return {};
	},
	computed: {
		...mapState('users', ['users', 'currentUser']),
	},
	methods: {
		...mapActions('users', ['getUsers']),
		showTwitt(user) {
			localStorage.setItem('selectedUser', JSON.stringify(user));
			this.$router.push(`/users-twitt/${user.username}`);
		},
	},
	async created() {
		await this.getUsers();
	},
};
</script>

<style lang="css" scoped>
.list-group-item {
	margin-bottom: 10px;
}
</style>
