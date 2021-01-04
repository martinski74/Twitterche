import axios from 'axios';


const state = {
	users:[],
	currentUser: {},

	selectedUser: localStorage.getItem('selectedUser') || []
};

const actions = {
async	getUsers({commit}){
		const res = await axios.get('http://localhost:3000/users')
		
		commit('GET_USERS', res.data)
		return res;
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
