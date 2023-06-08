import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// Styling
import './assets/css/main.css'
// App
import App from './App.vue'
// Pages
import HomePage from './views/HomePage.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: HomePage
		},
	]
})

createApp(App)
	.use(router)
	.mount('#app')
