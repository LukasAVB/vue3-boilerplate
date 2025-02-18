import { createWebHistory, createRouter } from 'vue-router'

// Routes
import {
  ReportingDashboardPage
} from '@/views'

const routes = [
    { path: '/', component: ReportingDashboardPage },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})