import { createRouter, createWebHistory } from 'vue-router'

// Routes
import {
  HomePage
} from '@/views'

const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: HomePage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
})

export default router