

// const url = 'http://localhost:3000/users';
const state = {
	users:[],
	currentUser: {},

	selectedUser: localStorage.getItem('selectedUser') || []
};

const actions = {
async	getUsers({commit}){
		const res = await require('../db.json')
		
		commit('GET_USERS', res.users)
		return res.users;
	}
};

const mutations = {
	GET_USERS: (state,users) => (state.users = users)
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
};
