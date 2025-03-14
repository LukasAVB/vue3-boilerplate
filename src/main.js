import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
// Styling
import './assets/css/main.css'
// App
import App from './App.vue'
// Pages
import HomePage from './views/HomePage.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: HomePage,
			meta: {
				title: import.meta.env.VITE_SITE_TITLE
			}
		},
	]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || import.meta.env.VITE_SITE_TITLE + ' | ' + to.name
  next();
})

createApp(App)
	.use(createPinia())
	.use(router)
	.mount('#app')
