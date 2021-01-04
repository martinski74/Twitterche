import VueRouter from 'vue-router';
import HomeView from './components/HomeView.vue';
import UsersTwitt from './components/UsersTwitt.vue';
import AdminPanel from './components/AdminPanel.vue'

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/users-twitt/:username',
			name: 'users-twitt',
			component: UsersTwitt
		},
		{
			path: '/admin-panel',
			name: 'admin-panel',
			component: AdminPanel
		}
	],
});
export default router;
