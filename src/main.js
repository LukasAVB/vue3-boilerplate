import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { updateFavicon } from './utils/updateFavicon'

const pinia = createPinia()

// Set the document title dynamically
document.title = import.meta.env.VITE_SITE_TITLE || 'Title'

// Update favicon
updateFavicon()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
