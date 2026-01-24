import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import AboutDev from '../pages/AboutDev.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/aboutdev',
      name: 'aboutdev',
      component: () => import('../pages/AboutDev.vue'),
    },
  ],
})

export default router
