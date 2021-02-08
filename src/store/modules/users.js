import axios from 'axios';

const url = 'http://localhost:3000/users';
// State
const state = {
	users:[],
	currentUser: {},

	selectedUser: localStorage.getItem('selectedUser') || []
};

// Actions
const actions = { 
async getUsers({commit}){
	const res = await axios.get(url)
	commit('GET_USERS', res.data)
	return res;
	},

async	updateUser({commit}, user){
	const res = await axios.put(`${url}/${user.id}`, user);
	commit('UPDATE_USER', res.data)
	return res;
}
};

// Mutations
const mutations = {
	GET_USERS: (state,users) => (state.users = users),
	UPDATE_USER: (state, user) => (state.user = user)

};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
};
