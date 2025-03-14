import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

document.title = import.meta.env.VITE_SITE_TITLE || 'Title';

const app = createApp (App)

app.use(router)
app.use(pinia)
app.mount('#app')