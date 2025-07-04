import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import('../views/PlaygroundView.vue'),
    },
    {
      path: '/request',
      name: 'request',
      component: () => import('../views/RequestView.vue'),
    },
    {
      path: '/immera',
      name: 'immera',
      component: () => import('../views/ImmeraView.vue'),
    },
  ],
})

export default router
