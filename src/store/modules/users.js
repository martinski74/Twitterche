

// State
const state = {
	users:[],
	currentUser: {},

	selectedUser: localStorage.getItem('selectedUser') || []
};

// Actions
const actions = {
async	getUsers({commit}){
		const res = await require('../db.json')
		
		commit('GET_USERS', res.users)
		return res.users;
	},

	// updateUser({commit}, user){
	// 	const res = fetch('../db.json',{
	// 		method: 'PUT',
	// 		headers: {'Content-Type': 'application/json'},
	// 		body:JSON.stringify(user)
	// 	})
	// }
};

// Mutations
const mutations = {
	GET_USERS: (state,users) => (state.users = users)
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
};
