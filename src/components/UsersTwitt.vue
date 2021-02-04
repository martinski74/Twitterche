<template>
	<div class="container">
		<div class="row justify-content-between mt-4">
			<div class="col-sm-4">
				<div class="user-info p-3 bg-white mb-3">
					<h3>@{{ this.$route.params.username }}</h3>
					<div v-if="isAdmin" class="admin btn-sm">Admin</div>
					<div class="folowers">Folowers:0</div>
				</div>
				<form class="form-group">
					<label :class="{ makeRed: limit.length > 80 }" for="newPost"
						><strong>New Tweet:</strong>({{ limit.length }}/80)</label
					>
					<textarea
						v-model="limit"
						class="form-control"
						name="newPost"
						id="newPost"
						rows="4"
						required
					></textarea>
				</form>
				<div class="form-group create-post-type mb-4">
					<label :class="{ makeRed: limit.length > 80 }" for="twitt-type"
						><strong>Type:</strong></label
					>
					<select id="twitt-type" class="form-control mb-2" v-model="selected">
						<option value="">-- Please choose an option --</option>
						<option value="Draft">Draft</option>
						<option value="Instant Tweet">Instant Tweet</option>
					</select>
					<button
						@click="postTwitt()"
						type="button"
						class="btn btn-info form-control"
					>
						Post Tweet
					</button>
				</div>
				<button
					v-if="isAdmin"
					@click="showAdminPanel"
					type="button"
					class="admin btn form-control"
				>
					Admin Panel
				</button>
				<button @click="goHome" class="btn btn btn-info col-xs-2 mt-5">
					<i class="fas fa-arrow-left"></i> Back
				</button>
			</div>

			<!-- users twoots -->

			<div class="col-sm-7">
				<div class="user-twitt-holder">
					<ul class="list-group">
						<li
							v-for="(post, i) in selectedUser.twoots"
							:key="i"
							class="list-group-item mb-4"
						>
							@{{ nickName }}<br />
							{{ post.content }}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			limit: '',
			selectedUser: JSON.parse(localStorage.getItem('selectedUser')),
			selected: '',
			nickName: this.$route.params.username,
			isAdmin: false,
		};
	},
	computed: {
		...mapState('users', ['users', 'currentUser']),
	},
	methods: {
		postTwitt() {
			if (
				this.limit.length <= 80 &&
				this.selected === 'Instant Tweet' &&
				this.limit.length > 0
			) {
				this.selectedUser.twoots.unshift({ content: this.limit });

				this.limit = '';
				console.log(this.$route);
			} else {
				alert('Please fill the text box and/or choice propper type!');
			}
		},
		showAdminPanel() {
			this.$router.push('/admin-panel');
		},
		goHome() {
			this.$router.push('/');
		},
	},
	mounted() {
		this.isAdmin = this.selectedUser.isAdmin;
	},
};
</script>

<style lang="css" scoped>
.admin {
	background-color: #639;
	color: white;
}
.btn-sm {
	width: fit-content;
}
.makeRed {
	color: red;
}
.user-info {
	border: 1px solid #ced4da;
	border-radius: 0.25rem;
}
.list-group-item {
	word-wrap: break-word;
}
.list-group-item:hover {
	cursor: pointer;
	transform: scale(1.1);
	transition: transform 0.7s;
}
</style>
